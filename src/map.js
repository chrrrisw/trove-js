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
    Trove.SEARCH_CONSTRUCTORS.map = Map;

}(window.Trove = window.Trove || {}, jQuery));
