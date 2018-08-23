/**
 * @copyright Chris Willoughby 2015
 */
export {Article} from "./article";
export {Book} from "./book";
export {Collection} from "./collection";
export {Contributor} from "./contributor";
export {ContributorList} from "./contributor_list";
export {Gazette} from "./gazette";
export {List} from "./list";
export {Map} from "./map";
export {Music} from "./music";
export {NewspaperArticle} from "./newspaper_article";
export {NewspaperList} from "./newspaper_list";
export {NewspaperTitle} from "./newspaper_title";
export {Person} from "./person";
export {Picture} from "./picture";
export {Search} from "./search";



    //Public Property
    export var trove_key = '';

    /**
     * @param {string} key The Trove API key given to you by the National
     *   Library of Australia.
     *
     * This function should be called before any queries are made to the
     *   Trove servers.
     */
    export function init(key) {
        // console.log("INIT called");
        trove_key = key;
    }

    var ENC = '&encoding=json';

    /**
     * Enumeration for zones, can include multiple as a list
     * @namespace
     * @readonly
     * @enum {string}
     * @property {string} BOOK The zone for books.
     * @property {string} PICTURE The zone for pictures
     * @property {string} ARTICLE The zone for journal articles
     * @property {string} MUSIC The zone for music
     * @property {string} MAP The zone for maps
     * @property {string} COLLECTION The zone for collections
     * @property {string} NEWSPAPER The zone for newspapers
     * @property {string} GAZETTE The zone for government gazettes
     * @property {string} LIST The zone for lists
     * @property {string} PEOPLE The zone for people
     * @property {string} ALL All of the above
     */
    export var ZONES = {
        BOOK: 'book',
        PICTURE: 'picture',
        ARTICLE: 'article',
        MUSIC: 'music',
        MAP: 'map',
        COLLECTION: 'collection',
        NEWSPAPER: 'newspaper',
        GAZETTE: 'gazette',
        LIST: 'list',
        PEOPLE: 'people',  // not supported?
        ALL: 'all'
    };

    /**
     * Enumeration for formats.
     * See {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#formats}
     * Used for facets and limits.
     * @readonly
     * @enum {string}
     */
    export var FORMATS = {
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

    /**
     * (book, picture, article, music, map, collection, list) Enumeration for availability.
     *
     * Used for facets and limits.
     *
     * @readonly
     * @enum {string}
     */
    export var AVAILABILITIES = {
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

    /**
     * (article) The vendor who sells subscriptions to access a database
     *   containing these articles.
     *
     * Used for facets and limits.
     *
     * @readonly
     * @enum {string}
     */
    export var VENDORS = {
        GALE: "GALE",
        INFORMIT: "Informit"
    };

    /**
     * (article) Only applies to articles from Gale.
     *
     * Used for facets and limits.
     *
     * @readonly
     * @enum {string}
     * @property {string} TRADE Trade
     * @property {string} GENERAL General
     * @property {string} ACADEMIC Academic
     * @property {string} PROFESSIONAL Professional
     * @property {string} CHILDREN Children's
     * @property {string} CHILDRENUPPER Children's - Upper elementry
     * @property {string} CHILDRENLOWER Children's - Lower elementry
     */
    export var AUDIENCES = {
        TRADE: "Trade",
        GENERAL: "General",
        ACADEMIC: "Academic",
        PROFESSIONAL: "Professional",
        CHILDREN: "Children's",
        CHILDRENUPPER: "Children's - Upper elementry",
        CHILDRENLOWER: "Children's - Lower elementry"
    };

    /**
     * Enumeration for NewspaperArticle and Gazette categories. Returned as
     *   part of the brief record for NewspaperArticle and Gazette, and may
     *   also be used to limit the results of a search using
     *   {@link LIMITS}.CATEGORY.
     *
     * Used for facets and limits.
     *
     * @readonly
     * @enum {string}
     * @property {string} ARTICLE Classified as an article (newspaper).
     * @property {string} ADVERTISING Classified as advertising (newspaper).
     * @property {string} LISTS Classified as a list (newspaper).
     * @property {string} FAMILY_NOTICES Classified as family notices (newspaper).
     * @property {string} LITERATURE Classified as literature (newspaper).
     * @property {string} NOTICES Classified as notices (gazettes).
     * @property {string} TENDERS Classified as Tenders and Contracts (gazettes).
     * @property {string} PROCLAMATIONS Classified as Proclamations And Legislation (gazettes).
     * @property {string} PRIVATE Classified as Private Notices (gazettes).
     * @property {string} BUDGET Classified as Budgetary Papers (gazettes).
     * @property {string} INDEX Classified as Index And Contents (gazettes).
     * @property {string} APPOINTMENTS Classified as Appointments And Employment (gazettes).
     * @property {string} FOI Classified as Freedom Of Information (gazettes).
     */
    export var CATEGORIES = {
        ARTICLE: 'Article',
        ADVERTISING: 'Advertising',
        LISTS: 'Detailed lists, results, guides',
        FAMILY_NOTICES: 'Family Notices',
        LITERATURE: 'Literature',

        NOTICES: 'Government Gazette Notices',
        TENDERS: 'Government Gazette Tenders and Contracts',
        PROCLAMATIONS: 'Government Gazette Proclamations And Legislation',
        PRIVATE: 'Government Gazette Private Notices',
        BUDGET: 'Government Gazette Budgetary Papers',
        INDEX: 'Government Gazette Index And Contents',
        APPOINTMENTS: 'Government Gazette Appointments And Employment',
        FOI: 'Government Gazette Freedom Of Information',
    };

    /**
     * Enumeration for facets.
     *
     * See {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#facetValues}
     *
     * Facets are categories that describe all the records in a particular
     *   result set. For example, if you have 10 results, you can check the
     *   format facet to find out that 8 are books and 2 are theses. You could
     *   also modify your search to retrieve only the theses, or only the books.
     * @readonly
     * @enum {string}
     */
    export var FACETS = {

        /**
         * (book, picture, article, music, map, collection)
         *   The format of the resource. For example, is it a book or a
         *   piece of sheet music? See {@link FORMATS}.
         */
        FORMAT: 'format',

        /**
         * (book, picture, article, music, map, collection, newspaper, gazette, list)
         *   Publication decade. e.g 199 represents 1990 – 1999.
         */
        DECADE: 'decade', //YYY

        /**
         * (book, picture, article, music, map, collection, newspaper, gazette, list)
         *   Publication year. For newspapers, only available if the decade
         *   facet is also applied.
         */
        YEAR: 'year',

        /**
         * (newspaper, gazette)
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
         *   {@link AVAILABILITIES}.
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
         *   containing these articles. See {@link VENDORS}.
         */
        VENDOR: 'vendor',
        /**
         * (article) Only applies to articles from Gale. See
         *   {@link AUDIENCES}.
         */
        AUDIENCE: 'audience',
        /**
         * (newspaper, gazette) The newspaper title id.
         */
        TITLE: 'title',

        /**
         * (newspaper, gazette) Newspaper article category. See
         *   {@link CATEGORIES}.
         */
        CATEGORY: 'category',

        /**
         * (newspaper, gazette) Is a newspaper article illustrated?
         */
        ILLUSTRATED: 'illustrated',

        /**
         * (newspaper, gazette) Type of illustration for newspaper article. Only available if illustrated facet is applied
         */
        ILLTYPE: 'illtype',

        /**
         * (newspaper, gazette) Newspaper or gazette article word count.
         */
        WORD: 'word',

        /**
         * (newspaper, gazette) State of publication for newspaper or gazette article.
         */
        STATE: 'state',

        /**
         * All of the above.
         */
        ALL: 'all'
    };

    /**
     * Enumeration for limiting the results of a search.
     * @readonly
     * @enum {string}
     */
    export var LIMITS = {
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
        /** Limit by state */
        STATE: 'l-state',
        /** Limit by all */
        ALL: 'l-all'
    };

    /**
     * Enumeration for sort order.
     * @readonly
     * @enum {string}
     */
    export var SORTBY = {
        /** Sort by date (descending). */
        DATEDESC: 'datedesc',
        /** Sort by date (ascending). */
        DATEASC: 'dateasc',
        /** Sort by relevance. */
        RELEVANCE: 'relevance'
    };

    /**
     * Enumeration for record level
     * @readonly
     * @enum {string}
     */
    export var RECLEVEL = {
        /**
         * Get the full metadata (excluding all links, version level records,
         *   tags and comments).
         */
        FULL: 'full',
        /** Get the brief metadata. */
        BRIEF: 'brief'
    };

    /**
     * Enumeration for includes, can include multiple as a list.
     * @readonly
     * @enum {string}
     */
    export var INCLUDES = {
        /**
         * (Book, Picture, Article, Music, Map, Collection, NewspaperArticle,
         *   List)
         *   Include any public tags on this item.
         */
        TAGS: 'tags',
        /**
         * (Book, Picture, Article, Music, Map, Collection, NewspaperArticle,
         *   List)
         *   Include any public comments on this item.
         */
        COMMENTS: 'comments',
        /**
         * (Book, Picture, Article, Music, Map, Collection, NewspaperArticle)
         *   Include the name and ID of any public lists this item belongs to.
         */
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
        /**
         * (All) Include all of the above.
         */
        ALL: 'all'
    };

    /**
     * Enumeration for Australian states. Used to specify a state for which
     *   to return {@link Newspaper} titles using the
     *   {@link NewspaperList} class. To return all
     *   [Newspapers]{@link Newspaper} for all states, do not specify
     *   a state when making the query via {@link NewspaperList} or
     *   use ALL.
     * @readonly
     * @enum {string}
     */
    export var STATES = {
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

    /*
     * Mapping between zone name and record list name
     */
    export var SEARCH_RECORDS = {
        people: 'people',
        list: 'list',
        newspaper: 'article',
        gazette: 'article',
        article: 'work',
        collection: 'work',
        book: 'work',
        picture: 'work',
        map: 'work',
        music: 'work'
    };

    // Base URL for Trove
    var API_ADDRESS = 'https://api.trove.nla.gov.au/v2/';

    export var RECORD_TYPE = {
        WORK: 'work/',
        NEWS: 'newspaper/',
        GAZETTE: 'newspaper/',
        LIST: 'list/',
        CONTRIBUTOR: 'contributor',
        PEOPLE: 'people/'  // This is not supported by the Trove API.
    };

    export var API = {
        WORK: API_ADDRESS + RECORD_TYPE.WORK,
        LIST: API_ADDRESS + RECORD_TYPE.LIST,
        NP_ARTICLE: API_ADDRESS + RECORD_TYPE.NEWS,
        NP_TITLE: API_ADDRESS + RECORD_TYPE.NEWS + 'title/',
        NP_TITLES: API_ADDRESS + RECORD_TYPE.NEWS + 'titles',
        GAZETTE: API_ADDRESS + RECORD_TYPE.GAZETTE,
        CONTRIBUTOR: API_ADDRESS + RECORD_TYPE.CONTRIBUTOR,
        PEOPLE: API_ADDRESS + RECORD_TYPE.PEOPLE,
        QUERY: API_ADDRESS + 'result'
    };
