(function( Trove, $, undefined ) {
    'use strict';

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
    function Article (options) {
        console.log('Creating Article');
        $.extend(this, options);
    }
    Trove.Article = Article;
    Trove.SEARCH_CONSTRUCTORS.article = Article;

}( window.Trove = window.Trove || {}, jQuery ));
