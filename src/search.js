/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * An object to perform searches
     * @class
     * @alias Trove.Search
     * @param {Object} options An object specifying the options for this Search
     * @property {string|Array} options.zones The default zone or list of zones to search
     * @property {Function} options.done The callback called on receipt of data
     * @property {Function} options.fail The callback called on a failed query
     * @property {string} options.terms The default search terms
     */
    function Search(options) {
        // console.log('Creating Search');

        // copy everything from options to this object
        $.extend(this, options);

        // The raw response from the query
        this.response = undefined;

        this.items = {};

        // The parameters of the last search
        // Used to request previous and next results.
        this._last_search = undefined;

        this.facets = [];
        this.limits = {};

    }

    Search.prototype.process_done = function(data) {
        // console.log('Got Search Query');
        var zone_items;
        var zone_name;

        this.items = {}; // Clear the last lot of results
        this.response = data.response; // Store the raw response

        for (var zone_num in this.response.zone) {
            zone_name = this.response.zone[zone_num].name;
            // console.log(zone_name);

            this.items[zone_name] = []; // Create an empty list for this zone

            zone_items = this.response.zone[zone_num].records[Trove.SEARCH_RECORDS[zone_name]];

            for (var item_num in zone_items) {
                this.items[zone_name].push(new Trove.CONSTRUCTORS[zone_name](zone_items[item_num]));
            }
        }

        if (this.done !== undefined) {
            this.done(this);
        }
    };

    Search.prototype.process_fail = function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Remove the named facet.
     * @param {string} facet The name of the facet to remove
     */
    Search.prototype.remove_facet = function(facet) {
        if (this.facets.indexOf(facet) != -1) {
            this.facets.splice(this.facets.indexOf(facet), 1);
        }
    };

    /**
     * Add the named facet.
     * @param {string} facet The name of the facet to add
     */
    Search.prototype.add_facet = function(facet) {
        this.facets.push(facet);
    };

    /**
     * Clear the date range limits.
     */
    Search.prototype.clear_date_range_limit = function() {
        if (this.limits.decade !== undefined) delete this.limits.decade;
        if (this.limits.year !== undefined) delete this.limits.year;
        if (this.limits.month !== undefined) delete this.limits.month;
    };

    /**
     * Set the limits on the date range returned
     * @param {string} start The date limit, one of: YYY for decade, YYYY for year, or YYYY-MM for month
     */
    Search.prototype.limit_date_range = function(start) {
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

    };


    /**
     * Query the Trove database.
     * @param {Object} options An object containing, at least, the terms to search for.
     * @property {string|Array} options.zones The default zone or list of zones to search
     * @property {string} options.terms The default search terms
     * @property {number} options.start
     * @property {number} options.number
     * @property {string} options.sort
     * @property {string} options.reclevel
     * @property {string|Array} options.includes
     * @property {string|Array} options.limits
     * @property {string|Array} options.facets
     */
    Search.prototype.query = function(options) {

        // console.log('Querying Search');

        if (options === undefined) {
            console.error('options is undefined');
            return;
        }

        // Override the done callback
        this.done = options.done || this.done;

        // Override the fail callback
        this.fail = options.fail || this.fail;

        //  http://api.trove.nla.gov.au/result?key=<INSERT KEY>&zone=<ZONE NAME>&q=<YOUR SEARCH TERMS>

        // Get the zone or zones for the query.
        // Preference is given to the zone(s) in the options passed but will
        // fallback to the options specified in the construction of the Search object. The default is ZONE.ALL.
        var zones = Trove.ZONE.ALL;
        if (typeof options.zones == 'string') {
            zones = options.zones;
        } else if (Array.isArray(options.zones)) {
            zones = options.zones.join(',');
        } else if (typeof this.zones == 'string') {
            zones = this.zones;
        } else if (Array.isArray(this.zones)) {
            zones = this.zones.join(',');
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json',
            zone: zones,
            q: options.terms || this.terms,
            s: 0,
            n: 20
        };

        // Where to start
        if (options.start !== undefined) {
            query_data.s = options.start;
        }

        // How many to return
        if (options.number !== undefined) {
            query_data.n = options.number;
        }

        // In what sort order
        if (options.sort !== undefined) {
            query_data.sortby = options.sort;
        }

        // Full or brief
        if (options.reclevel !== undefined) {
            query_data.reclevel = options.reclevel;
        }

        // What to include
        if (typeof options.includes == 'string') {
            query_data.include = options.includes;
        } else if (Array.isArray(options.includes)) {
            query_data.include = options.includes.join(',');
        } else if (typeof this.includes == 'string') {
            query_data.include = this.includes;
        } else if (Array.isArray(this.includes)) {
            query_data.include = this.includes.join(',');
        }

        // What facets of the data to return
        if ((options.facets !== undefined) && (Array.isArray(options.facets))) {
            query_data.facet = options.facets.join(',');
        } else if (this.facets.length > 0) {
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
                query_data['l-' + limit_keys[index]] = limits[limit_keys[index]];
            }
        }

        this._last_search = query_data;

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.QUERY,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);

    };

    /**
     * Repeat the last query, with a delta applied to the start.
     * @param {Object} options Options to be applied to the query
     * @property {function} options.done
     * @property {function} options.fail
     * @param {number} delta The change to be applied to the start number (positive or negative).
     */
    Search.prototype.requery = function(options, delta) {

        if (options) {
            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;
        }

        if (this._last_search !== undefined) {

            this._last_search.s = this._last_search.s + delta;

            $.ajax({
                dataType: "jsonp",
                url: Trove.API.QUERY,
                data: this._last_search,
                context: this
            }).done(this.process_done).fail(this.process_fail);
        }
    };

    /**
     * Request the next search results
     * @param {Object} options Options to be applied to the query
     * @property {function} options.done
     * @property {function} options.fail
     */
    Search.prototype.next = function(options) {
        if (this._last_search !== undefined) {
            this.requery(options, this._last_search.n);
        }
    };

    /**
     * Request the previous search results
     * @param {Object} options Options to be applied to the query
     * @property {function} options.done
     * @property {function} options.fail
     */
    Search.prototype.previous = function(options) {
        if (this._last_search !== undefined) {
            this.requery(options, -this._last_search.n);
        }
    };

    Search.prototype.newspaper_articles = function() {
        // The Search object just
        return [];
    };

    Trove.Search = Search;

}(window.Trove = window.Trove || {}, jQuery));
