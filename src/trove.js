(function(Trove, $, undefined) {
    'use strict';

    //Public Property
    Trove.trove_key = '';

    /**
     * @function init
     * @param {string} key The Trove API key given to you by the National Library of Australia.
     *
     * This function should be called before any queries are made to the Trove servers.
     */
    Trove.init = function (key) {
        Trove.trove_key = key;
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
    Trove.ZONE = ZONE;

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
    Trove.FACETS = FACETS;

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
    Trove.LIMITS = LIMITS;

    var SORTBY = {
        DATEDESC: 'datedesc',
        DATEASC: 'dateasc',
        RELEVANCE: 'relevance'
    };
    Trove.SORTBY = SORTBY;

    var RECLEVEL = {
        FULL: 'full',
        BRIEF: 'brief'
    };
    Trove.RECLEVEL = RECLEVEL;

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
    Trove.INCLUDE = INCLUDE;

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

    // Mapping of search result zones to constructors
    var SEARCH_CONSTRUCTORS = {};
    Trove.SEARCH_CONSTRUCTORS = SEARCH_CONSTRUCTORS;

    var API_ADDRESS = 'http://api.trove.nla.gov.au/';

    var RECORD_TYPE = {
            WORK: 'work/',
            NEWS: 'newspaper/',
            LIST: 'list/'
    };
    Trove.RECORD_TYPE = RECORD_TYPE;

    var API = {
        WORK       : API_ADDRESS + RECORD_TYPE.WORK,
        LIST       : API_ADDRESS + RECORD_TYPE.LIST,
        NP_ARTICLE : API_ADDRESS + RECORD_TYPE.NEWS,
        NP_TITLE   : API_ADDRESS + RECORD_TYPE.NEWS + 'title/',
        NP_TITLES  : API_ADDRESS + RECORD_TYPE.NEWS + 'titles',
        QUERY      : API_ADDRESS + 'result'
    };
    Trove.API = API;

}(window.Trove = window.Trove || {}, jQuery));
