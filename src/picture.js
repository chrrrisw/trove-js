(function( Trove, $, undefined ) {
    'use strict';

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
    function Picture (options) {
        console.log('Creating Picture');
        $.extend(this, options);
    }
    Trove.Picture = Picture;
    Trove.SEARCH_CONSTRUCTORS.picture = Picture;

}( window.Trove = window.Trove || {}, jQuery ));
