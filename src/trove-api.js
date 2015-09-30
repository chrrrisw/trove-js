/**
 * Trove Module
 * @module Trove
 */
( // Module boilerplate to support browser globals and browserify and AMD.
    typeof define === "function" ? function(m) {
        define("trove-api", m);
    } : typeof exports === "object" ? function(m) {
        module.exports = m();
    } : function(m) {
        this.Trove = m();
    }
)(function() {

    "use strict";

    var exports = {};

    // Store the key here
    var trove_key = '';

    /**
     * @function init
     * @param {string} key The Trove API key given to you by the National Library of Australia.
     *
     * This function should be called before any queries are made to the Trove servers.
     */
    exports.init = function init (key) {
        trove_key = key;
    };

    var ENC = '&encoding=json';

    // can include multiple as a list
    // website and people not included
    var ZONE = {
        BOOK: 'book',
        PIC: 'picture',
        ART: 'article',
        MUS: 'music',
        MAP: 'map',
        COLL: 'collection',
        NEWS: 'newspaper',
        LIST: 'list',
        ALL: 'all'
    };
    exports.ZONE = ZONE;

    var FACETS = {
        FORMAT: 'format',
        DECADE: 'decade',  //YYY
        YEAR: 'year',  //YYYY
        MONTH: 'month',  //
        LANGUAGE: 'language',
        AVAILABILITY: 'availability',
        AUSTRALIAN: 'australian',
        OCCUPATION: 'occupation',
        ZOOM: 'zoom',
        VENDORDB: 'vendordb',
        VENDOR: 'vendor',
        AUDIENCE: 'audience',
        TITLE: 'title',
        CATEGORY: 'category',
        ILLUSTRATED: 'illustrated',
        ILLTYPE: 'illtype',
        WORD: 'word',
        ALL: 'all'
    };
    exports.FACETS = FACETS;

    var LIMITS = {
        FORMAT: 'l-format',
        DECADE: 'l-decade',
        YEAR: 'l-year',
        MONTH: 'l-month',
        LANGUAGE: 'l-language',
        AVAILABILITY: 'l-availability',
        AUSTRALIAN: 'l-australian',
        OCCUPATION: 'l-occupation',
        ZOOM: 'l-zoom',
        VENDORDB: 'l-vendordb',
        VENDOR: 'l-vendor',
        AUDIENCE: 'l-audience',
        TITLE: 'l-title',
        CATEGORY: 'l-category',
        ILLUSTRATED: 'l-illustrated',
        ILLTYPE: 'l-illtype',
        WORD: 'l-word',
        ALL: 'l-all'
    };
    exports.LIMITS = LIMITS;

    var SORTBY = {
        DATEDESC: 'datedesc',
        DATEASC: 'dateasc',
        RELEVANCE: 'relevance'
    };
    exports.SORTBY = SORTBY;

    var RECLEVEL = {
        FULL: 'full',
        BRIEF: 'brief'
    };
    exports.RECLEVEL = RECLEVEL;

    // can include multiple as a list
    // used for QUERY, WORK, LIST and NP_ARTICLE
    var INCLUDE = {
        TAGS            : 'tags',
        COMMENTS        : 'comments',
        LISTS           : 'lists',
        HOLDINGS        : 'holdings',
        LINKS           : 'links',
        SUBSCRIBINGLIBS : 'subscribinglibs',
        WORKVERSIONS    : 'workversions',
        ARTICLETEXT     : 'articletext',
        YEARS           : 'years',
        LISTITEMS       : 'listitems',
        ALL             : 'all'
    };
    exports.INCLUDE = INCLUDE;

    var CATEGORIES = {
        ARTICLE: 'Article',
        ADVERTISING: 'Advertising',
        LISTS: 'Detailed lists, results, guides',
        FAMILY_NOTICES: 'Family Notices',
        LITERATURE: 'Literature'
    };
    exports.CATEGORIES = CATEGORIES;

    var SEARCH_RECORDS = {
        people: 'people',
        list: 'list',
        newspaper: 'article',
        article: 'work',
        collection: 'work',
        book: 'work',
        picture: 'work',
        map: 'work',
        music: 'work'
    };

    // Mapping of search result zones to constructors
    var SEARCH_CONSTRUCTORS = {
        people: Person,
        article: Article,
        list: List,
        collection: Collection,
        book: Book,
        picture: Picture,
        map: Map,
        music: Music,
        newspaper: NewspaperArticle
    };

    var API_ADDRESS = 'http://api.trove.nla.gov.au/';

    var RECORD_TYPE = {
            WORK: 'work/',
            NEWS: 'newspaper/',
            LIST: 'list/'
    };
    exports.RECORD_TYPE = RECORD_TYPE;

    var API = {
        WORK       : API_ADDRESS + RECORD_TYPE.WORK,
        LIST       : API_ADDRESS + RECORD_TYPE.LIST,
        NP_ARTICLE : API_ADDRESS + RECORD_TYPE.NEWS,
        NP_TITLE   : API_ADDRESS + RECORD_TYPE.NEWS + 'title/',
        NP_TITLES  : API_ADDRESS + RECORD_TYPE.NEWS + 'titles',
        QUERY      : API_ADDRESS + 'result'
    };

    /**
     * An object to perform searches
     * @class
     * @param {Object} options An object specifying the options for this Search
     * @property {string|Array} options.zones The default zone or list of zones to search
     * @property {Function} options.done The default callback called on receipt of data
     * @property {string} options.terms The default search terms
     */
    exports.Search = Search;
    function Search (options) {
        console.log('Creating Search');

        // copy everything from options to this object
        $.extend(this, options);

        // The raw response from the query
        this.response = undefined;

        this.items = {};

        // The parameters of the last search
        // Used to request previous and next results.
        this._last_search =  undefined;

        this.facets = [];
        this.limits = {};

    }

    Search.prototype.process_results = function(data) {
        console.log('Got Search Query');
        var zone_items;
        var zone_name;

        this.items = {}; // Clear the last lot of results
        this.response = data.response; // Store the raw response

        for (var zone_num in this.response.zone) {
            zone_name = this.response.zone[zone_num].name;
            // console.log(zone_name);

            this.items[zone_name] = []; // Create an empty list for this zone

            zone_items = this.response.zone[zone_num].records[SEARCH_RECORDS[zone_name]];

            for (var item_num in zone_items) {
                this.items[zone_name].push(new SEARCH_CONSTRUCTORS[zone_name](zone_items[item_num]));
            }

            // console.dir(this.items[zone_name]);

            // if (zone_name == 'people') {
            //     zone_items = this.response.zone[zone_num].records['people'];
            // } else if (zone_name == 'list') {
            //     zone_items = this.response.zone[zone_num].records['list'];
            // } else if (zone_name == 'newspaper') {
            //     zone_items = this.response.zone[zone_num].records['article'];
            // } else {
            //     zone_items = this.response.zone[zone_num].records['work'];
            // }

        }

        // if ((options != undefined) && (options.done != undefined)) {
        //     options.done(this);
        // } else if (this.done != undefined) {
        //     this.done(this);
        // }

        // TODO: Should I keep the options.done?
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    /**
     * Remove the named facet.
     * @param {string} facet The name of the facet to remove
     */
    exports.Search.prototype.remove_facet = function(facet) {
        if (this.facets.indexOf(facet) != -1) {
            this.facets.splice(this.facets.indexOf(facet), 1);
        }
    };

    /**
     * Add the named facet.
     * @param {string} facet The name of the facet to add
     */
    exports.Search.prototype.add_facet = function(facet) {
        this.facets.push(facet);
    };

    /**
     * Clear the date range limits.
     */
    exports.Search.prototype.clear_date_range_limit = function() {
        if (this.limits.decade !== undefined) delete this.limits.decade;
        if (this.limits.year !== undefined) delete this.limits.year;
        if (this.limits.month !== undefined) delete this.limits.month;
    };

    /**
     * Set the limits on the date range returned
     * @param {string} start The date limit, one of: YYY for decade, YYYY for year, or YYYY-MM for month
     */
    exports.Search.prototype.limit_date_range = function(start) {
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
     * @property {Function} options.done The default callback called on receipt of data
     * @property {number} options.start
     * @property {number} options.number
     * @property {string} options.sort
     * @property {string} options.reclevel
     * @property {string|Array} options.includes
     * @property {string|Array} options.limits
     * @property {string|Array} options.facets
     */
    exports.Search.prototype.query = function (options) {
        // Searches are composed of the following
        //   options.zones => string or list
        //   options.terms => string
        //   options.start => number
        //   options.number => number
        //   options.sort => string
        //   options.reclevel => string
        //   options.includes => string or list
        //   options.limits => string or list
        //   options.facets => string or list
        //     encoding => "json"
        //     callback => string
        //     key => string

        // options.done

        console.log('Querying Search');

        if (options === undefined) {
            console.error('options is undefined');
            return;
        }

        //  http://api.trove.nla.gov.au/result?key=<INSERT KEY>&zone=<ZONE NAME>&q=<YOUR SEARCH TERMS>

        // Get the zone or zones for the query.
        // Preference is given to the zone(s) in the options passed but will fallback to the options specified in the construction of the Search object. The default is ZONE.ALL.
        var zones = ZONE.ALL;
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
                key: trove_key,
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
        if (this.facets.length > 0) {
            query_data.facet = this.facets.join(',');
        }

        // What limits apply to the search
        // var limit_url = '';
        var limit_keys = Object.keys(this.limits);
        if (limit_keys.length > 0) {
            for (var index in limit_keys) {
                query_data['l-' + limit_keys[index]] = this.limits[limit_keys[index]];
                // limit_url = limit_url + '&l-' + limit_keys[index] + '=' + this.limits[limit_keys[index]];
            }
        }
        // console.log('limits: ' + limit_url);

        this._last_search = query_data;

        // $.ajax({
        //     dataType : "jsonp",
        //     url      : API.QUERY,
        //     data     : query_data,
        //     context  : this
        // }).done(function (data) {
        //     console.log('Got Search Query');
        //     this.response = data.response;
        //     if ((options != undefined) && (options.done != undefined)) {
        //         options.done(this);
        //     } else if (this.done != undefined) {
        //         this.done(this);
        //     }
        // });

        $.ajax({
            dataType : "jsonp",
            url      : API.QUERY,
            data     : query_data,
            context  : this
        }).done(this.process_results);

    };

    Search.prototype.requery = function(options, delta) {
        if (this._last_search !== undefined) {

            this._last_search.s = this._last_search.s + delta;

            $.ajax({
                dataType : "jsonp",
                url      : API.QUERY,
                data     : this._last_search,
                context  : this
            }).done(function (data) {
                console.log('Got Search Requery');
                this.response = data.response;
                if ((options !== undefined) && (options.done !== undefined)) {
                    options.done(this);
                } else if (this.done !== undefined) {
                    this.done(this);
                }
            });
        }
    };

    /**
     * Request the next search results
     *
     */
    exports.Search.prototype.next = function(options) {
        if (this._last_search !== undefined) {
            this.requery(options, this._last_search.n);
        }
    };

    /**
     * Request the previous search results
     *
     */
    exports.Search.prototype.previous = function(options) {
        if (this._last_search !== undefined) {
            this.requery(options, -this._last_search.n);
        }
    };

    exports.Search.prototype.newspaper_articles = function() {
        // The Search object just
        return [];
    };


    exports.List = List;
    function List (options) {
        $.extend(this, options);
    }

    /**
     * A class to hold a person
     * @class
     * @param {Object} options
     * @property {string} options.id
     * @property {string} options.troveUrl
     * @property {string} options.url
     */
    exports.Person = Person;
    function Person (options) {
        console.log('Creating Person');
        $.extend(this, options);
    }

    /**
     * A class to hold a journal article
     * @class
     * @param {Object} options
     * @property {Array} options.contributor
     * @property {number} options.holdingsCount
     * @property {string} options.id
     * @property {number|string} options.issued
     * @property {Object} options.relevance
     * @property {string} options.title
     * @property {string} options.troveUrl
     * @property {Array} options.type
     * @property {string} options.url
     * @property {number} options.versionCount
     */
    exports.Article = Article;
    function Article (options) {
        console.log('Creating Article');
        $.extend(this, options);
    }

    /**
     * A class to hold a picture
     * @class
     * @param {Object} options
     * @property {number} options.holdingsCount
     * @property {string} options.id
     * @property {Array} options.identifier
     * @property {Object} options.relevance
     * @property {string} options.title
     * @property {string} options.troveUrl
     * @property {Array} options.type
     * @property {string} options.url
     * @property {number} options.versionCount
     */
    exports.Picture = Picture;
    function Picture (options) {
        console.log('Creating Picture');
        $.extend(this, options);
    }

    /**
     * A class to hold a book
     * @class
     * @param {Object} options
     * @property {Array} options.contributor
     * @property {number} options.holdingsCount
     * @property {string} options.id
     * @property {number|string} options.issued
     * @property {Object} options.relevance
     * @property {string} options.title
     * @property {string} options.troveUrl
     * @property {Array} options.type
     * @property {string} options.url
     */
    exports.Book = Book;
    function Book (options) {
        console.log('Creating Book');
        $.extend(this, options);
    }

    /**
     * A class to hold a map
     * @class
     * @param {Object} options
     * @property {Array} options.contributor
     * @property {number} options.holdingsCount
     * @property {string} options.id
     * @property {Array} options.identifier
     * @property {number|string} options.issued
     * @property {Object} options.relevance
     * @property {string} options.title
     * @property {string} options.troveUrl
     * @property {Array} options.type
     * @property {string} options.url
     * @property {number} options.versionCount
     */
    exports.Map = Map;
    function Map (options) {
        console.log('Creating Map');
        $.extend(this, options);
    }

    /**
     * A class to hold music
     * @class
     * @param {Object} options
     * @property {Array} options.contributor
     * @property {number} options.holdingsCount
     * @property {string} options.id
     * @property {number|string} options.issued
     * @property {Object} options.relevance
     * @property {string} options.title
     * @property {string} options.troveUrl
     * @property {Array} options.type
     * @property {string} options.url
     * @property {number} options.versionCount
     */
    exports.Music = Music;
    function Music (options) {
        console.log('Creating Music');
        $.extend(this, options);
    }

    exports.Collection = Collection;
    function Collection (options) {
        console.log('Creating Collection');
        $.extend(this, options);
        // console.dir(this);
    }


    /**
     * A Class to hold newspaper articles
     * @class
     * @param {Object} options An object specifying the default options
     * @property {number} options.init The article identifier for which to retrieve data on construction.
     * @property {function} options.done The default callback called when data has been returned from the Trove servers.
     */
    exports.NewspaperArticle = NewspaperArticle;
    function NewspaperArticle (options) {
        console.log('Creating NewspaperArticle');

        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }
        $.extend(this, options);

        // If we know the identifier, get the data
        if (init !== undefined) {
            this.get({
                identifier: init,
                done: this.done
            });
        }
    }

    /**
     * Retrieve article information based on identifier
     * @param {Object} options
     * @property {number} options.identifier The article identifier for which to retrieve data.
     * @property {function} options.done The callback called when data has been returned from the Trove servers. This overrides the default calback.
     */
    exports.NewspaperArticle.prototype.get = function (options) {
        console.log('Getting NewspaperArticle');
        // http://api.trove.nla.gov.au/newspaper/18342701?key=<INSERT KEY>

        var query_data = {
            key: trove_key,
            encoding: 'json'
        };

        $.ajax({
            dataType : "jsonp",
            url      : API.NP_ARTICLE + options.identifier,
            data     : query_data,
            context  : this
        }).done(function (data) {
            console.log('Got NewspaperArticle');
            $.extend(this, data.article);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    /**
     * Retrieve newspaper information for the article
     * @param {function} done
     * @returns {Newspaper} the Newspaper object
     */
    exports.NewspaperArticle.prototype.get_newspaper = function(options) {
        console.log('Get Newspaper for Article');
        if (this.title !== undefined) {
            if (this.title.id !== undefined) {
                return new Newspaper({
                    init: this.title.id,
                    done: options.done || this.done
                });
            }
        }
    };

    /**
     * An object to hold an instance of a newspaper
     * @constructor
     * @param {Object} options
     * id
     * title
     * state
     * issn
     * troveUrl
     * startDate
     * endDate
     */
    exports.Newspaper = Newspaper;
    function Newspaper (options) {
        console.log('Creating Newspaper');

        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        $.extend(this, options);
        if (init !== undefined) {
            this.get({
                identifier: init,
                done: this.done
            });
        }
    }

    /**
     * Get information about the specified newspaper
     * @param (Number) identifier
     */
    Newspaper.prototype.get = function (options) {
        console.log('Getting Newspaper');
        // http://api.trove.nla.gov.au/newspaper/title/35?encoding=json

        var query_data = {
            key: trove_key,
            encoding: 'json'
        };

        $.ajax({
            dataType : "jsonp",
            url      : API.NP_TITLE + options.identifier,
            data     : query_data,
            context  : this
        }).done(function (data) {
            console.log('Got Newspaper');
            $.extend(this, data.newspaper);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    /**
     * A list of Newspapers for a specific state or all states.
     * @class
     * @param {Object} options
     * @classdesc
     * If constructed with a 'state' blah
     */
    exports.NewspaperList = NewspaperList;
    function NewspaperList (options) {
        console.log('Creating NewspaperList');
        // http://api.trove.nla.gov.au/newspaper/titles?state=vic
        $.extend(this, options);

        this.newspapers = [];

        if (this.state !== undefined) {
            this.get({
                state: this.state
            });
        }
    }

    /**
     *
     */
    NewspaperList.prototype.processGet = function (data) {

        for (var index in data.response.records.newspaper) {
            console.dir(data.response.records.newspaper[index]);
            this.newspapers.push(new Newspaper(
                data.response.records.newspaper[index]
            ));
        }

        console.log("total = " + data.response.records.total);
    };

    /**
     *
     */
    NewspaperList.prototype.get = function (options) {
        console.log('Getting NewspaperList');
        var query_data = {
            key: trove_key,
            encoding: 'json'
        };

        if ((options !== undefined) && (options.state !== undefined)) {
            query_data.state = options.state;
        }

        $.ajax({
            dataType : "jsonp",
            url      : API.NP_TITLES,
            data     : query_data,
            context  : this
        }).done(this.processGet);
    };

    return exports;

});
