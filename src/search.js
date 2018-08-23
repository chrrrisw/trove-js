import {Article} from "./article";
import {Book} from "./book";
import {Collection} from "./collection";
import {Gazette} from "./gazette";
import {List} from "./list";
import {Map as TroveMap} from "./map";
import {Music} from "./music";
import {NewspaperArticle} from "./newspaper_article";
import {Person} from "./person";
import {Picture} from "./picture";

// Mapping of zones to constructors for those zones.
// Used by Search to create objects on receipt of results.
export var CONSTRUCTORS = {
    book: Book,
    picture: Picture,
    article: Article,
    music: Music,
    map: TroveMap,
    collection: Collection,
    newspaper: NewspaperArticle,
    gazette: Gazette,
    list: List,
    people: Person,
    // contributor: Contributor,
    // newspaper_title: NewspaperTitle,
    // work: Work,
};


/**
 * An object to perform searches
 * @class
 * @param {Object} options An object specifying the options for this
 *   Search
 * @param {ZONES[]} options.zones The list of zones to search
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {string} options.terms The search terms
 *
 * @property {Object} response The raw response from the server.
 * @property {Object[]} items The object containing the items created from
 *   the raw response.
 * @property {FACETS[]} facets The list of facets to include in
 *   the data returned.
 * @property {Object} limits The limits imposed on the search.
 */
export class Search {

    constructor (options) {
        // console.log('Creating Search');

        // copy everything from options to this object
        $.extend(this, options);

        // The raw response from the query
        this.response = undefined;

        this.items = {};

        // The v2 API allows multiple zones to be searched when s=*,
        // but subsequent searches (next|previous) must be a single zone.
        // To allow stepping back and forward within zones we must store
        // the cursor values as a list and keep a track of where we are.
        this.cursors = {};
        this.indices = {};

        // The parameters of the last search
        // Used to request previous and next results.
        this._last_search = undefined;

        this.facets = [];
        this.limits = {};

    }

    /**
     * Return the array of items returned by the most recent query
     *   in the specified zone.
     * @param {ZONES} zone The zone for which the array should be
     *   returned.
     * @returns {Object[]}
     */
    zone_list (zone) {
        return this.items[zone] || [];
    }

    /*
     * Process the returned data, creating an object for each item.
     */
    process_done (data) {
        // console.log('Got Search Query');
        var zone_items;
        var zone_name;

        this.items = {}; // Clear the last lot of results

        this.response = data.response; // Store the raw response

        // The raw response has the following structure
        // response
        //   query
        //   zone []
        //     name
        //     records
        //       n
        //       next
        //       nextStart
        //       s
        //       total
        //       work|article|list|people []

        for (var zone_num in this.response.zone) {

            // Get the name of the zone we're dealing with
            zone_name = this.response.zone[zone_num].name;

            // Create an empty list for this zone
            this.items[zone_name] = [];

            // If we don't have a cursor for this zone, seed the list with
            // the current starting position (probably *) and set the index=0
            if (this.cursors[zone_name] === undefined) {
                console.log("Creating cursor list for", zone_name);
                this.cursors[zone_name] = [this.response.zone[zone_num].records.s];
                this.indices[zone_name] = 0;
            }

            // Only add the nextStart if we're at the end of the list.
            // If we're not at the end of the list it means that we've stepped
            // to a previous result and we shouldn't be modifying the list.
            //
            if (this.indices[zone_name] == (this.cursors[zone_name].length - 1)) {
                this.cursors[zone_name].push(this.response.zone[zone_num].records.nextStart);
            }

            console.log(this.cursors[zone_name]);

            // Access the list at work|article|list|people
            zone_items = this.response.zone[zone_num].records[
                Trove.SEARCH_RECORDS[zone_name]];

            // Iterate over this list adding them to our items object.
            for (var item_num in zone_items) {
                this.items[zone_name].push(new CONSTRUCTORS[
                    zone_name](zone_items[item_num]));
            }
        }

        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Remove the named facet.
     * @param {FACETS} facet The name of the facet to remove
     */
    remove_facet (facet) {
        if (this.facets.indexOf(facet) != -1) {
            this.facets.splice(this.facets.indexOf(facet), 1);
        }
    }

    /**
     * Add the named facet.
     * @param {FACETS} facet The name of the facet to add
     */
    add_facet (facet) {
        this.facets.push(facet);
    }

    /**
     * Clear the date range limits.
     */
    clear_date_range_limit () {
        if (this.limits.decade !== undefined) delete this.limits.decade;
        if (this.limits.year !== undefined) delete this.limits.year;
        if (this.limits.month !== undefined) delete this.limits.month;
    }

    /**
     * Set the limits on the date range returned
     * @param {string} start The date limit, one of: YYY for decade,
     *   YYYY for year, or YYYY-MM for month
     */
    limit_date_range (start) {
        var split_start = start.split('-');
        if (split_start.length >= 1) {
            if (split_start[0].length == 3) {
                this.limits.decade = split_start[0];
            } else if (split_start[0].length == 4) {
                this.limits.decade = split_start[0].substr(0, 3);
                this.limits.year = split_start[0];
            }
        }

        if (split_start.length >= 2) {
            this.limits.month = split_start[1];
        }

    }

    clear_category_limit () {
        if (this.limits.category !== undefined) delete this.limits.category;
    }

    limit_category (category) {
        this.limits.category = category;
    }


    /**
     * Query the Trove database.
     *
     * @param {Object} options An object containing, at least, the terms to
     *   search for.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {ZONES[]} options.zones The list of zones to search
     *   (mandatory).
     * @param {string} options.terms The search terms (mandatory).
     * @param {number} options.start Return records starting at this point
     *  (optional, default=*).
     * @param {number} options.number Return this number of records
     *   (max. 100, optional, default=20).
     * @param {SORTBY} options.sort Sort the results according to this
     *   parameter (optional, default={@link SORTBY}.RELEVANCE).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     * @param {Object} options.limits Limit the search results
     *   (optional, see {@link LIMITS}).
     * @param {FACETS[]} options.facets
     */
    query (options) {

        // console.log('Querying Search');

        if (options === undefined) {
            console.error('options is undefined');
            return;
        }

        // Override reclevel, includes, done and fail if specified
        this.reclevel = options.reclevel || this.reclevel;
        this.includes = options.includes || this.includes;
        this.done = options.done || this.done;
        this.fail = options.fail || this.fail;

        // Override zones, terms and facets if specified.
        this.zones = options.zones || this.zones;
        this.terms = options.terms || this.terms;
        this.facets = options.facets || this.facets;

        // Get the zone or zones for the query.
        // The default is ZONES.ALL.
        var zones = Trove.ZONES.ALL;
        if (Array.isArray(this.zones)) {
            zones = this.zones.join(',');
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json',
            zone: zones,
            q: this.terms,
            s: '*',
            n: 20,
            bulkHarvest: false,
        };

        // Where to start
        if (options.start !== undefined) {
            query_data.s = options.start;
        }

        // if (options.nextStart !== undefined) {
        //     query_data.nextStart = options.nextStart;
        // }

        // How many to return
        if (options.number !== undefined) {
            query_data.n = options.number;
        }

        // In what sort order
        if (options.sort !== undefined) {
            query_data.sortby = options.sort;
        }

        if (options.bulkHarvest !== undefined) {
            query_data.bulkHarvest = options.bulkHarvest;
        }

        // Full or brief
        if (options.reclevel !== undefined) {
            query_data.reclevel = options.reclevel;
        }

        // What to include
        if ((this.includes !== undefined) &&
            (Array.isArray(this.includes)) &&
            (this.includes.length > 0)) {
            query_data.include = this.includes.join(',');
        }

        // What facets of the data to return
        if ((this.facets !== undefined) &&
            (Array.isArray(this.facets)) &&
            (this.facets.length > 0)) {
            query_data.facet = this.facets.join(',');
        }

        // What limits apply to the search
        var limits;
        var limit_keys;
        if (options.limits !== undefined) {
            limit_keys = Object.keys(options.limits);
            limits = options.limits;
        } else {
            limit_keys = Object.keys(this.limits);
            limits = this.limits;
        }
        if (limit_keys.length > 0) {
            for (var index in limit_keys) {
                query_data['l-' + limit_keys[index]] =
                    limits[limit_keys[index]];
            }
        }

        this._last_search = query_data;

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.QUERY,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);

    }

    /**
     * Repeat the last query, with a delta applied to the start.
     * @param {Object} options Options to be applied to the query
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {number} delta The change to be applied to the start number
     *   (positive or negative).
     */
    requery (zone, options) {
        console.log("Requery called");

        if (options) {
            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;
        }

        if (this._last_search !== undefined) {

            this._last_search.s = this.cursors[zone][this.indices[zone]];

            $.ajax({
                dataType: "jsonp",
                url: Trove.API.QUERY,
                data: this._last_search,
                context: this
            }).done(this.process_done).fail(this.process_fail);
        }
    }

    /**
     * Request the next search results
     *
     * Although an initial search may cover more than one zone, getting
     * results through this interface must specify a singe zone.
     *
     * @param {string} zone The zone in which to get the results.
     * @param {Object} options Options to be applied to the query
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    next (zone, options) {
        console.log("Next called");
        console.log(zone, "index is", this.indices[zone]);
        console.log(zone, "cursor length is", this.cursors[zone].length);
        if (this.indices[zone] < (this.cursors[zone].length - 1)) {
            console.log("Current index", this.indices[zone]);
            this.indices[zone]++;
            console.log("New index", this.indices[zone]);
            this.requery(zone, options);
        }
        // if (this._last_search !== undefined) {
        //     this.requery(options, zone, this._last_search.n);
        // }
    }

    /**
     * Request the previous search results.
     *
     * Although an initial search may cover more than one zone, getting
     * results through this interface must specify a singe zone.
     *
     * @param {string} zone The zone in which to get the results.
     * @param {Object} options Options to be applied to the query
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    previous (zone, options) {
        console.log("Previous called");
        console.log(zone, "index is", this.indices[zone]);
        console.log(zone, "cursor length is", this.cursors[zone].length);
        if (this.indices[zone] > 0) {
            console.log("Current index", this.indices[zone]);
            this.indices[zone]--;
            console.log("New index", this.indices[zone]);
            this.requery(zone, options);
        }
        // if (this._last_search !== undefined) {
        //     this.requery(options, zone, -this._last_search.n);
        // }
    }

    newspaper_articles () {
        // The Search object just
        return [];
    }

}