/**
 * @namespace Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    //Public Property
    Trove.trove_key = '';

    /**
     * @alias Trove.init
     * @param {string} key The Trove API key given to you by the National Library of Australia.
     *
     * This function should be called before any queries are made to the Trove servers.
     */
    Trove.init = function(key) {
        Trove.trove_key = key;
    };

    var ENC = '&encoding=json';

    /**
     * Enumeration for zones, can include multiple as a list
     * @alias Trove.ZONE
     * @readonly
     * @enum {string}
     */
    var ZONE = {
        /** The zone for books */
        BOOK: 'book',
        /** The zone for pictures */
        PICTURE: 'picture',
        /** The zone for journal articles */
        ARTICLE: 'article',
        /** The zone for music */
        MUSIC: 'music',
        /** The zone for maps */
        MAP: 'map',
        /** The zone for collections */
        COLLECTION: 'collection',
        /** The zone for newspapers */
        NEWSPAPER: 'newspaper',
        /** The zone for lists */
        LIST: 'list',
        /** All of the above */
        ALL: 'all'
    };
    Trove.ZONE = ZONE;

    /**
     * Enumeration for facets
     * @alias Trove.FACETS
     * @readonly
     * @enum {string}
     */
    var FACETS = {
        FORMAT: 'format',
        DECADE: 'decade', //YYY
        YEAR: 'year', //YYYY
        MONTH: 'month', //
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
    Trove.FACETS = FACETS;

    /**
     * Enumeration for limits.
     * Use these to limit the results of a search.
     * @alias Trove.LIMITS
     * @readonly
     * @enum {string}
     */
    var LIMITS = {
        /** Limit by format. */
        FORMAT: 'l-format',
        /** Limit by decade. In the form of YYY e.g. 190 is the 1900s. */
        DECADE: 'l-decade',
        /** Limit by year: limit by decade must also be set. In the form of YYYY. */
        YEAR: 'l-year',
        /** Limit by month: limit by decade and year must also be set. Only applies to the newspaper zone. */
        MONTH: 'l-month',
        /** Limit by language */
        LANGUAGE: 'l-language',
        /** Limit by availability (whether online or not) */
        AVAILABILITY: 'l-availability',
        /** Limit by whether the work is Australian */
        AUSTRALIAN: 'l-australian',
        /** Limit by occupation. Only applies to the collection zone. */
        OCCUPATION: 'l-occupation',
        /** Limit by map scale. Only applies to the map zone. */
        ZOOM: 'l-zoom',
        /** Limit by vendor database code. */
        VENDORDB: 'l-vendordb',
        /** Limit by vendor. */
        VENDOR: 'l-vendor',
        /** Limit by audience */
        AUDIENCE: 'l-audience',
        /** Limit by title */
        TITLE: 'l-title',
        /** Limit by category */
        CATEGORY: 'l-category',
        /** Limit by illustration */
        ILLUSTRATED: 'l-illustrated',
        /** Limit by illustration type */
        ILLTYPE: 'l-illtype',
        /** Limit by word */
        WORD: 'l-word',
        /** Limit by all */
        ALL: 'l-all'
    };
    Trove.LIMITS = LIMITS;

    /**
     * Enumeration for sort order
     * @alias Trove.SORTBY
     * @readonly
     * @enum {string}
     */
    var SORTBY = {
        DATEDESC: 'datedesc',
        DATEASC: 'dateasc',
        RELEVANCE: 'relevance'
    };
    Trove.SORTBY = SORTBY;

    /**
     * Enumeration for record level
     * @alias Trove.RECLEVEL
     * @readonly
     * @enum {string}
     */
    var RECLEVEL = {
        FULL: 'full',
        BRIEF: 'brief'
    };
    Trove.RECLEVEL = RECLEVEL;

    /**
     * Enumeration for includes, can include multiple as a list.
     * @alias Trove.INCLUDE
     * @readonly
     * @enum {string}
     */
    var INCLUDE = {
        TAGS: 'tags',
        COMMENTS: 'comments',
        LISTS: 'lists',
        HOLDINGS: 'holdings',
        LINKS: 'links',
        SUBSCRIBINGLIBS: 'subscribinglibs',
        WORKVERSIONS: 'workversions',
        ARTICLETEXT: 'articletext',
        YEARS: 'years',
        LISTITEMS: 'listitems',
        ALL: 'all'
    };
    Trove.INCLUDE = INCLUDE;

    /**
     * Enumeration for categories
     * @alias Trove.CATEGORIES
     * @readonly
     * @enum {string}
     */
    var CATEGORIES = {
        ARTICLE: 'Article',
        ADVERTISING: 'Advertising',
        LISTS: 'Detailed lists, results, guides',
        FAMILY_NOTICES: 'Family Notices',
        LITERATURE: 'Literature'
    };
    Trove.CATEGORIES = CATEGORIES;

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
    Trove.SEARCH_RECORDS = SEARCH_RECORDS;

    // Mapping of zones to constructors for those zones.
    // Mostly used by Search to create objects on receipt of results.
    var CONSTRUCTORS = {};
    Trove.CONSTRUCTORS = CONSTRUCTORS;

    // Base URL for Trove
    var API_ADDRESS = 'http://api.trove.nla.gov.au/';

    var RECORD_TYPE = {
        WORK: 'work/',
        NEWS: 'newspaper/',
        LIST: 'list/'
    };
    Trove.RECORD_TYPE = RECORD_TYPE;

    var API = {
        WORK: API_ADDRESS + RECORD_TYPE.WORK,
        LIST: API_ADDRESS + RECORD_TYPE.LIST,
        NP_ARTICLE: API_ADDRESS + RECORD_TYPE.NEWS,
        NP_TITLE: API_ADDRESS + RECORD_TYPE.NEWS + 'title/',
        NP_TITLES: API_ADDRESS + RECORD_TYPE.NEWS + 'titles',
        QUERY: API_ADDRESS + 'result'
    };
    Trove.API = API;

}(window.Trove = window.Trove || {}, jQuery));

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
        console.log('Creating Search');

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

        console.log('Querying Search');

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
        }).done(this.process_results).fail(this.process_fail);

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
            }).done(this.process_results).fail(this.process_fail);
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

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a list
     * @class
     * @alias Trove.List
     */
    function List(options) {
        $.extend(this, options);
    }
    Trove.List = List;
    Trove.CONSTRUCTORS.list = List;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a person
     * @class
     * @alias Trove.Person
     * @param {Object} options
     * @property {string} options.id
     * @property {string} options.troveUrl
     * @property {string} options.url
     */
    function Person(options) {
        console.log('Creating Person');
        $.extend(this, options);
    }
    Trove.Person = Person;
    Trove.CONSTRUCTORS.people = Person;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a journal article
     * @class
     * @alias Trove.Article
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
    function Article(options) {
        console.log('Creating Article');
        $.extend(this, options);
    }
    Trove.Article = Article;
    Trove.CONSTRUCTORS.article = Article;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a picture
     * @class
     * @alias Trove.Picture
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
    function Picture(options) {
        console.log('Creating Picture');
        $.extend(this, options);
    }
    Trove.Picture = Picture;
    Trove.CONSTRUCTORS.picture = Picture;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a book
     * @class
     * @alias Trove.Book
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
    function Book(options) {
        console.log('Creating Book');
        $.extend(this, options);
    }
    Trove.Book = Book;
    Trove.CONSTRUCTORS.book = Book;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a map
     * @class
     * @alias Trove.Map
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
    function Map(options) {
        console.log('Creating Map');
        $.extend(this, options);
    }
    Trove.Map = Map;
    Trove.CONSTRUCTORS.map = Map;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold music
     * @class
     * @alias Trove.Music
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
    function Music(options) {
        console.log('Creating Music');
        $.extend(this, options);
    }
    Trove.Music = Music;
    Trove.CONSTRUCTORS.music = Music;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a collection
     * @class
     * @alias Trove.Collection
     */
    function Collection(options) {
        console.log('Creating Collection');
        $.extend(this, options);
        // console.dir(this);
    }
    Trove.Collection = Collection;
    Trove.CONSTRUCTORS.collection = Collection;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A Class to hold newspaper articles
     * @class
     * @alias Trove.NewspaperArticle
     * @param {Object} options An object specifying the default options
     * @property {number} options.init The article identifier for which to retrieve data on construction.
     * @property {function} options.done The default callback called when data has been returned from the Trove servers.
     */
    function NewspaperArticle(options) {
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
    NewspaperArticle.prototype.get = function(options) {
        console.log('Getting NewspaperArticle');
        // http://api.trove.nla.gov.au/newspaper/18342701?key=<INSERT KEY>

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_ARTICLE + options.identifier,
            data: query_data,
            context: this
        }).done(function(data) {
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
    NewspaperArticle.prototype.get_newspaper = function(options) {
        console.log('Get Newspaper for Article');
        if (this.title !== undefined) {
            if (this.title.id !== undefined) {
                return new Trove.CONSTRUCTORS.newspaper_title({
                    init: this.title.id,
                    done: options.done || this.done
                });
            }
        }
    };

    Trove.NewspaperArticle = NewspaperArticle;
    Trove.CONSTRUCTORS.newspaper = NewspaperArticle;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * An object to hold an instance of a newspaper
     * @class
     * @alias Trove.Newspaper
     * @param {Object} options
     * @property {number|string} options.init If specified, will request the data immediately
     * id
     * title
     * state
     * issn
     * troveUrl
     * startDate
     * endDate
     */
    function Newspaper(options) {
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
    Newspaper.prototype.get = function(options) {
        console.log('Getting Newspaper');
        // http://api.trove.nla.gov.au/newspaper/title/35?encoding=json

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLE + options.identifier,
            data: query_data,
            context: this
        }).done(function(data) {
            console.log('Got Newspaper');
            $.extend(this, data.newspaper);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    Trove.Newspaper = Newspaper;
    Trove.CONSTRUCTORS.newspaper_title = Newspaper;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A list of Newspapers for a specific state or all states.
     * @class
     * @alias Trove.NewspaperList
     * @param {Object} options
     * @classdesc
     * If constructed with a 'state' blah
     */
    function NewspaperList(options) {
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
    NewspaperList.prototype.processGet = function(data) {

        for (var index in data.response.records.newspaper) {
            console.dir(data.response.records.newspaper[index]);
            this.newspapers.push(new Trove.CONSTRUCTORS.newspaper_title(
                data.response.records.newspaper[index]
            ));
        }

        console.log("total = " + data.response.records.total);
    };

    /**
     *
     */
    NewspaperList.prototype.get = function(options) {
        console.log('Getting NewspaperList');
        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        if ((options !== undefined) && (options.state !== undefined)) {
            query_data.state = options.state;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLES,
            data: query_data,
            context: this
        }).done(this.processGet);
    };

    Trove.NewspaperList = NewspaperList;

}(window.Trove = window.Trove || {}, jQuery));
