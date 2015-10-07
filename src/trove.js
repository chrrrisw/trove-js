/**
 * @namespace Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    //Public Property
    Trove.trove_key = '';

    /**
     * @alias Trove.init
     * @param {string} key The Trove API key given to you by the National
     *   Library of Australia.
     *
     * This function should be called before any queries are made to the
     *   Trove servers.
     */
    Trove.init = function(key) {
        Trove.trove_key = key;
    };

    var ENC = '&encoding=json';

    /**
     * Enumeration for zones, can include multiple as a list
     * @alias Trove.ZONES
     * @readonly
     * @enum {string}
     */
    var ZONES = {
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
    Trove.ZONES = ZONES;

    /**
     * Enumeration for formats.
     *   Used for facets and limits.
     * @alias Trove.FORMATS
     * @readonly
     * @enum {string}
     */
    var FORMATS = {
        WEBSITE: 'Archived website',
        ARTWORK: 'Art work',
        ARTICLE: 'Article',
        ARTICLEABSTRACT: 'Article/Abstract',
        ARTICLECHAPTER: 'Article/Book chapter',
        ARTICLEPAPER: 'Article/Conference paper',
        ARTICLEJOURNAL: 'Article/Journal or magazine article',
        ARTICLEOTHER: 'Article/Other article',
        ARTICLEREPORT: 'Article/Report',
        ARTICLEREVIEW: 'Article/Review',
        ARTICLEWORKING: 'Article/Working paper',
        AUDIOBOOK: 'Audio book',
        BOOK: 'Book',
        BOOKBRAILLE: 'Book/Braille',
        BOOKILLUSTRATED: 'Book/Illustrated',
        BOOKLARGEPRINT: 'Book/Large print',
        PROCEEDINGS: 'Conference Proceedings',
        DATASET: 'Data set',
        MAP: 'Map',
        MAPAERIAL: 'Map/Aerial photograph',
        MAPATLAS: 'Map/Atlas',
        MAPBRAILLE: 'Map/Braille',
        MAPELECTRONIC: 'Map/Electronic',
        MAPGLOBE: 'Map/Globe or object',
        MAPLARGE: 'Map/Large print',
        MAPSERIES: 'Map/Map series',
        MAPMICROFORM: 'Map/Microform',
        MAPSINGLE: 'Map/Single map',
        OBJECT: 'Object',
        PERIODICAL: 'Periodical',
        PERIODICALJOURNAL: 'Periodical/Journal, magazine, other',
        PERIODICALNEWSPAPER: 'Periodical/Newspaper',
        PHOTO: 'Photograph',
        POSTER: 'Poster, chart, other',
        PUBLISHED: 'Published',
        SHEETMUSIC: 'Sheet music',
        SOUND: 'Sound',
        SOUNDTALK: 'Sound/Interview, lecture, talk',
        SOUNDOTHER: 'Sound/Other sound',
        SOUNDMUSIC: 'Sound/Recorded music',
        THESIS: 'Thesis',
        UNPUBLISHED: 'Unpublished',
        VIDEO: 'Video',
        VIDEOCAPTIONED: 'Video/Captioned'
    };
    Trove.FORMATS = FORMATS;

    /**
     * Enumeration for availability.
     * Used for facets and limits.
     * @alias Trove.AVAILABILITIES
     * @readonly
     * @enum {string}
     */
    var AVAILABILITIES = {
        /** Online. */
        ONLINE: 'y',
        /** Freely accessible online. */
        FREE_ACCESS: 'y/f',
        /** Payment, subscription or membership required. */
        MEMBERSHIP: 'y/r',
        /** Subscription required. */
        SUBSCRIPTION: 'y/s',
        /** Possibly online. */
        POSSIBLY: 'y/u'
    };
    Trove.AVAILABILITIES = AVAILABILITIES;

    /**
     *
     * Used for facets and limits.
     * @alias Trove.VENDORS
     * @readonly
     * @enum {string}
     */
    var VENDORS = {};
    Trove.VENDORS = VENDORS;

    /**
     *
     * Used for facets and limits.
     * @alias Trove.AUDIENCES
     * @readonly
     * @enum {string}
     */
    var AUDIENCES = {
        TRADE: "Trade",
        GENERAL: "General",
        ACADEMIC: "Academic",
        PROFESSIONAL: "Professional",
        CHILDREN: "Children's",
        CHILDRENUPPER: "Children's - Upper elementry",
        CHILDRENLOWER: "Children's - Lower elementry"
    };
    Trove.AUDIENCES = AUDIENCES;

    /**
     * Enumeration for NewspaperArticle categories. Returned as part of the
     *   brief record for NewspaperArticle, and may also be used to limit
     *   the results of a search using {@link Trove.LIMITS}.CATEGORY.
     *   Used for facets and limits.
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

    /**
     * Enumeration for facets.
     * Facets are categories that describe the results for your search. For
     *   example, if you ask for the decade facet, the response will include
     *   the list of decades your results span across, and how many results
     *   are found in each decade.
     * @alias Trove.FACETS
     * @readonly
     * @enum {string}
     */
    var FACETS = {
        /**
         * (book, picture, article, music, map, collection)
         *   The format of the resource. For example, is it a book or a
         *   piece of sheet music? See {@link Trove.FORMATS}.
         */
        FORMAT: 'format',
        /**
         * (book, picture, article, music, map, collection, newspaper, list)
         *   Publication decade. e.g 199 represents 1990 – 1999.
         */
        DECADE: 'decade', //YYY
        /**
         * (book, picture, article, music, map, collection, newspaper, list)
         *   Publication year. For newspapers, only available if the decade
         *   facet is also applied.
         */
        YEAR: 'year',
        /**
         * (newspaper)
         *   Publication month. Only available if the year facet is also
         *   applied
         */
        MONTH: 'month', //
        /**
         * (book, picture, article, music, map, collection)
         */
        LANGUAGE: 'language',
        /**
         * (book, picture, article, music, map, collection, list)
         *   Whether the item is online or not. See
         *   {@link Trove.AVAILABILITIES}.
         */
        AVAILABILITY: 'availability',
        /**
         * (book, picture, article, music, map, collection)
         *   Works identified as published primarily in Australia, or
         *   written by Australians
         */
        AUSTRALIAN: 'australian',
        /**
         * (collection)
         */
        OCCUPATION: 'occupation',
        /**
         * (map) Map scale
         */
        ZOOM: 'zoom',
        /**
         * (article) Database code
         */
        VENDORDB: 'vendordb',
        /**
         * (article) The vendor who sells subscriptions to access a database
         *   containing these articles. See {@link Trove.VENDORS}.
         */
        VENDOR: 'vendor',
        /**
         * (article) Only applies to articles from Gale. See
         *   {@link Trove.AUDIENCES}.
         */
        AUDIENCE: 'audience',
        /**
         * (newspaper) The newspaper title id.
         */
        TITLE: 'title',
        /**
         * (newspaper) Newspaper article category. See
         *   {@link Trove.CATEGORIES}.
         */
        CATEGORY: 'category',
        /**
         * (newspaper) Is a newspaper article illustrated?
         */
        ILLUSTRATED: 'illustrated',
        /**
         * (newspaper) Type of illustration for newspaper article. Only available if illustrated facet is applied
         */
        ILLTYPE: 'illtype',
        /**
         * (newspaper) Newspaper article word count.
         */
        WORD: 'word',
        /**
         * All of the above.
         */
        ALL: 'all'
    };
    Trove.FACETS = FACETS;

    /**
     * Enumeration for limiting the results of a search.
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
     * Enumeration for sort order.
     * @alias Trove.SORTBY
     * @readonly
     * @enum {string}
     */
    var SORTBY = {
        /** Sort by date (descending). */
        DATEDESC: 'datedesc',
        /** Sort by date (ascending). */
        DATEASC: 'dateasc',
        /** Sort by relevance. */
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
        /**
         * Get the full metadata (excluding all links, version level records,
         *   tags and comments).
         */
        FULL: 'full',
        /** Get the brief metadata. */
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
