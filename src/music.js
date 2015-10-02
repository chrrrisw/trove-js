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
        // console.log('Creating Music');
        $.extend(this, options);
    }
    Trove.Music = Music;
    Trove.CONSTRUCTORS.music = Music;

}(window.Trove = window.Trove || {}, jQuery));
