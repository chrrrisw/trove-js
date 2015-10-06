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
        /** (Book, Picture, Article, Music, Map, Collection, NewspaperArticle, List) Include any public tags on this item. */
        TAGS: 'tags',
        /** (Book, Picture, Article, Music, Map, Collection, NewspaperArticle, List) Include any public comments on this item. */
        COMMENTS: 'comments',
        /** (Book, Picture, Article, Music, Map, Collection, NewspaperArticle) Include the name and ID of any public lists this item belongs to. */
        LISTS: 'lists',
        /** (Book, Picture, Article, Music, Map, Collection) Include information on which organisations have a copy of this item or version. */
        HOLDINGS: 'holdings',
        /** (Book, Picture, Article, Music, Map, Collection) Include the URLs for the item. */
        LINKS: 'links',
        /** (Book, Picture, Article, Music, Map, Collection) Include the subsribing organisation NUC ID and links. */
        SUBSCRIBINGLIBS: 'subscribinglibs',
        /** (Book, Picture, Article, Music, Map, Collection) Include all versions that make up this item. */
        WORKVERSIONS: 'workversions',
        /** (NewspaperArticle) Include the full text for this digitised newspaper article. */
        ARTICLETEXT: 'articletext',
        /** (Newspapers only) Include a list of years for which digitised articles from this newspaper title appear in Trove. */
        YEARS: 'years',
        /** (List only) Include the brief works, articles, people, external websites that belong to this list. */
        LISTITEMS: 'listitems',
        /** (All) Include all of the above. */
        ALL: 'all'
    };
    Trove.INCLUDE = INCLUDE;

    /**
     * Enumeration for Australian states. Used to specify a state for which to return {@link Trove.Newspaper} titles using the {@link Trove.NewspaperList} class. To return all [Newspapers]{@link Trove.Newspaper} for all states, do not specify a state when making the query via {@link Trove.NewspaperList} or use ALL.
     * @alias Trove.STATES
     * @readonly
     * @enum {string}
     */
    var STATES = {
        /** New South Wales. */
        NSW: 'nsw',
        /** Australian Capital Territory. */
        ACT: 'act',
        /** Queensland. */
        QLD: 'qld',
        /** Tasmania. */
        TAS: 'tas',
        /** South Australia. */
        SA: 'sa',
        /** Northern Territory. */
        NT: 'nt',
        /** Western Australia. */
        WA: 'wa',
        /** Victoria. */
        VIC: 'vic',
        /** National newspapers (not the same as all states). */
        NATIONAL: 'national',
        /** All states. */
        ALL: ''
    };
    Trove.STATES = STATES;

    /**
     * Enumeration for NewspaperArticle categories. Returned as part of the brief record for NewspaperArticle, and may also be used to limit the results of a search using {@link Trove.LIMITS}.CATEGORY.
     * @alias Trove.CATEGORIES
     * @readonly
     * @enum {string}
     */
    var CATEGORIES = {
        /** Classified as an article. */
        ARTICLE: 'Article',
        /** Classified as advertising. */
        ADVERTISING: 'Advertising',
        /** Classified as a list. */
        LISTS: 'Detailed lists, results, guides',
        /** Classified as family notices. */
        FAMILY_NOTICES: 'Family Notices',
        /** Classified as literature. */
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
     * A class to hold a work. Work is the parent class for other classes
     *   (Article, Book, Collection, Map, Music, Picture).
     * @class
     * @alias Trove.Work
     * @param {Object} options The options object for the work.
     * @param {(number|string)} options.init The work identifier for which to retrieve data on construction.
     * @param {function} options.done The callback on receipt of data (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel
     * @param {Trove.INCLUDE[]} options.includes
     * @property {string} id
     * @property {string} url
     * @property {string} troveUrl
     * @property {string} title
     * @property {string[]} contributor
     * @property {(number|string)} issued When the work was issued
     * @property {string[]} type List of work types
     * @property {string} isPartOf ?
     * @property {string} subject ?
     * @property {string} abstract ?
     * @property {string} tableOfContents ?
     * @property {string[]} language List of languages
     * @property {string} wikipedia ?
     * @property {number} holdingsCount
     * @property {number} versionCount
     * @property {number} tagCount
     * @property {string} tagCount.level
     * @property {number} commentCount
     * @property {string} commentCount.level
     * @property {number} listCount
     * @property {string} tag
     * @property {string} tag.lastupdated
     * @property {string} comment
     * @property {string} comment.lastupdated
     * @property {string} comment.by
     * @property {string} comment.rating
     * @property {string} list
     * @property {string} list.url
     * @property {string} list.by
     * @property {string} list.lastupdated
     * @property {Object[]} identifier
     * @property {string} identifier.type
     * @property {string} identifier.linktype
     * @property {string} identifier.linktext
     * @property {string} identifier.value
     * @property {string} holding
     * @property {string} holding.nuc
     * @property {string} holding.name
     * @property {string} holding.library
     * @property {string} holding.url
     * @property {string} holding.callNumber
     * @property {string} version
     * @property {string} version.id
     * @property {string} version.record
     */
    function Work(options) {
        console.log('Creating Work');

        // Save and remove init from options.
        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        // Save all other options in this object.
        $.extend(this, options);

        // If we know the identifier, get the data
        if (init !== undefined) {
            this.get({identifier: init});
        }

    }

    Work.prototype.process_done = function(data) {
        $.extend(this, data.work);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    Work.prototype.process_fail = function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Get the Work metadata from the Trove server.
     * @param {Object} options The options object for the query.
     * @param {(number|string)} options.identifier The work ID for which to retrieve data.
     * @param {function} options.done The callback on receipt of data (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel
     * @param {Trove.INCLUDE[]} options.includes
     */
    Work.prototype.get = function(options) {
        console.log('Getting work');

        // Override reclevel, includes, done and fail if specified
        this.reclevel = options.reclevel || this.reclevel;
        this.includes = options.includes || this.includes;
        this.done = options.done || this.done;
        this.fail = options.fail || this.fail;

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // Full or brief
        if (this.reclevel !== undefined) {
            query_data.reclevel = this.reclevel;
        }

        // What to include
        if ((this.includes !== undefined) &&
            (Array.isArray(this.includes)) &&
            (this.includes.length > 0)) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.WORK + options.identifier,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    Trove.Work = Work;
    Trove.CONSTRUCTORS.work = Work;


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
        // console.log('Creating Person');
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
     * @augments Trove.Work
     * @param {Object} options
     */
    function Article(options) {
        console.log('Creating Article');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Article.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Article.prototype.constructor = Article;
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
     * @augments Trove.Work
     * @param {Object} options
     */
    function Picture(options) {
        console.log('Creating Picture');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Picture.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Picture.prototype.constructor = Picture;
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
     * @augments Trove.Work
     * @param {Object} options
     */
    function Book(options) {
        console.log('Creating Book');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Book.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Book.prototype.constructor = Book;
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
     * @augments Trove.Work
     * @param {Object} options
     */
    function Map(options) {
        console.log('Creating Map');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Map.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Map.prototype.constructor = Map;
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
     * @augments Trove.Work
     * @param {Object} options
     */
    function Music(options) {
        console.log('Creating Music');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Music.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Music.prototype.constructor = Music;
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
     * @augments Trove.Work
     * @param {Object} options
     */
    function Collection(options) {
        console.log('Creating Collection');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Collection.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Collection.prototype.constructor = Collection;
    Trove.Collection = Collection;
    Trove.CONSTRUCTORS.collection = Collection;

}(window.Trove = window.Trove || {}, jQuery));

/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A Class to hold newspaper articles.
     * @class
     * @alias Trove.NewspaperArticle
     * @param {Object} options An object specifying the default options
     * @param {number} options.init The article identifier for which to retrieve data on construction.
     * @param {function} options.done The callback called when data has been returned from the Trove servers.
     * @param {Trove.RECLEVEL} options.reclevel
     * @param {Trove.INCLUDE[]} options.includes
     * @property {string} id (brief) Trove newspaper article ID.
     * @property {string} heading (brief) The article heading.
     * @property {string} category (brief) The type of article
     * @property {Object} title (brief) The name and ID of the newspaper or periodical in which this article is found.
     * @property {string} title.id (brief) The Trove ID of the newspaper or periodical.
     * @property {string} title.value (brief) The name of the newspaper or periodical.
     * @property {string} edition (brief) Name of the special edition of the newspaper or periodical in which this article is found, if applicable.
     * @property {string} date (brief) The date of the issue in which this article was published.
     * @property {number} page (brief) The page on which this article appeared.
     * @property {number} pageSequence (brief)
     * @property {string} pageLabel (reclevel=full)
     * @property {string} status (brief) Included is the article is not currently available.
     * @property {string} relevance (brief, following search) How relevant this article is to the search.
     * @property {string} relevance.score (brief, following search) A numeric representation of how relevant this article is to the search.
     * @property {string} snippet (brief, following search) A small amount of text containing one or more of the search terms.
     * @property {string} troveUrl (brief)
     * @property {string} trovePageUrl (brief)
     * @property {string} supplement (reclevel=full)
     * @property {string} section (reclevel=full)
     * @property {string} illustrated (reclevel=full)
     * @property {number} wordCount (reclevel=full)
     * @property {number} correctionCount (reclevel=full)
     * @property {number} listCount (reclevel=full)
     * @property {number} tagCount (reclevel=full)
     * @property {number} commentCount (reclevel=full)
     * @property {Object[]} tag (include=tags)
     * @property {string} tag.lastupdated
     * @property {string} tag.value
     * @property {Object[]} comment (include=comments)
     * @property {string} comment.by
     * @property {string} comment.lastupdated
     * @property {string} comment.value
     * @property {Object[]} list (include=lists)
     * @property {string} list.by
     * @property {string} list.lastupdated
     * @property {string} list.url
     * @property {Object} lastCorrection (reclevel=full)
     * @property {string} lastCorrection.by (reclevel=full)
     * @property {string} lastCorrection.lastupdated (reclevel=full)
     * @property {string} identifier (reclevel=full)
     * @property {string} pdf (reclevel=full)
     * @property {string} articleText (include=articletext)
     */
    function NewspaperArticle(options) {
        // console.log('Creating NewspaperArticle');

        // Save and remove init from options.
        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        // Save all other options in this object.
        $.extend(this, options);

        // reclevel
        // console.log(this.reclevel);
        // include
        // console.log(this.includes);

        // If we know the identifier, get the data
        if (init !== undefined) {
            this.get({identifier: init});
        }
    }

    NewspaperArticle.prototype.process_done = function(data) {
        $.extend(this, data.article);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    NewspaperArticle.prototype.process_fail = function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Retrieve article information from Trove based on identifier.
     * @param {Object} options The options object for the query.
     * @param {number} options.identifier The article ID for which to retrieve data.
     * @param {function} options.done The callback for when data has been returned from the Trove servers.
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief or full record.
     * @param {Trove.INCLUDE[]} options.includes
     */
    NewspaperArticle.prototype.get = function(options) {
        // console.log('Getting NewspaperArticle');
        // http://api.trove.nla.gov.au/newspaper/18342701?key=<INSERT KEY>

        // Override reclevel, includes, done and fail if specified
        this.reclevel = options.reclevel || this.reclevel;
        this.includes = options.includes || this.includes;
        this.done = options.done || this.done;
        this.fail = options.fail || this.fail;

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // Full or brief
        if (this.reclevel !== undefined) {
            query_data.reclevel = this.reclevel;
        }

        // What to include
        if ((this.includes !== undefined) &&
            (Array.isArray(this.includes)) &&
            (this.includes.length > 0)) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_ARTICLE + options.identifier,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    /**
     * Retrieve newspaper title information for the article
     * @param {function} done
     * @returns {Trove.NewspaperTitle} The NewspaperTitle object that contains the NewspaperArticle.
     */
    NewspaperArticle.prototype.get_newspaper = function(options) {
        // console.log('Get NewspaperTitle for Article');
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
     * An object to hold an instance of a newspaper title.
     * @class
     * @alias Trove.NewspaperTitle
     * @param {Object} options
     * @property {(number|string)} options.init If specified, will request the data immediately.
     * @property {} id The identifier of the newspaper title.
     * @property {} title Name of the newpaper (or magazine).
     * @property {} state The state in which the newspaper title was primarily published.
     * @property {} issn International Standard Serial Number.
     * @property {} troveURL A link to view the newspaper title in Trove.
     * @property {} startDate The earliest publication date of this newspaper title available in Trove.
     * @property {} endDate The most recent publication date of this newspaper title available in Trove.
     * @property {} year A list of the publication years for this newspaper title that are included in Trove.
     * @property {} year.date A year this newspaper title was published
     * @property {} year.issuecount The number of issues published in this year.
     * @property {} year.issue
     * @property {} year.issue.id
     * @property {} year.issue.date
     * @property {} year.issue.url
     */
    function NewspaperTitle(options) {
        // console.log('Creating NewspaperTitle ');

        // Save and remove init from options.
        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        // Save all other options as part of this object.
        $.extend(this, options);

        // If init was specified, treat it as the identifier.
        if (init !== undefined) {
            this.get({
                identifier: init,
                done: this.done
            });
        }
    }

    /**
     * Get information about the specified newspaper title from Trove.
     * @param (Number) identifier
     */
    NewspaperTitle.prototype.get = function(options) {
        // console.log('Getting NewspaperTitle');
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
            // console.log('Got NewspaperTitle');
            $.extend(this, data.newspaper);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    Trove.NewspaperTitle = NewspaperTitle;
    Trove.CONSTRUCTORS.newspaper_title = NewspaperTitle;

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
     * @classdesc The NewspaperList class is a wrapper around the
     *   "http://api.trove.nla.gov.au/newspaper/titles" API. If no state
     *   is specified on construction, you will have to call the get()
     *   method to actually request the data from Trove. If the state
     *   is specified on construction, the get() method will be
     *   called immediately.
     * @param {Object} options An object specifying the options for
     *   this NewspaperList.
     * @param {Trove.STATES} options.state The state for which the newspaper
     *   list will be returned (optional). If specified, the request
     *   will be made immediately.
     * @param {function} options.done The callback on receipt of data (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @property {Trove.NewspaperTitle[]} newspapers The list of [NewspaperTitles]{@link Trove.NewspaperTitle} returned from the query.
     */
    function NewspaperList(options) {
        // console.log('Creating NewspaperList');

        // Save the options in the object.
        $.extend(this, options);

        // The list of newspapers, initially empty.
        this.newspapers = [];

        // If state is defined, get the data.
        if (this.state !== undefined) {
            this.get();
        }
    }

    NewspaperList.prototype.process_done = function(data) {

        for (var index in data.response.records.newspaper) {
            // console.dir(data.response.records.newspaper[index]);
            this.newspapers.push(new Trove.CONSTRUCTORS.newspaper_title(
                data.response.records.newspaper[index]
            ));
        }

        // console.log("total = " + data.response.records.total);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    NewspaperList.prototype.process_fail = function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };


    /**
     * Get the data from the Trove server. If done or fail are set,
     *   they will be copied into the object, overwriting any
     *   existing callbacks.
     * @param {Object} options Options for the request.
     * @param {Trove.STATES} options.state The state for which to
     *   request data (optional). If not set, or set to ALL,
     *   all states will be returned.
     * @param {function} options.done The callback on receipt of data (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    NewspaperList.prototype.get = function(options) {
        // console.log('Getting NewspaperList');

        // Override the done callback
        this.done = options.done || this.done;

        // Override the fail callback
        this.fail = options.fail || this.fail;

        // Override the state
        this.state = options.state || this.state;

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        if ((this.state !== undefined) || (this.state != Trove.STATES.ALL)) {
            query_data.state = this.state;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLES,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    Trove.NewspaperList = NewspaperList;

}(window.Trove = window.Trove || {}, jQuery));
