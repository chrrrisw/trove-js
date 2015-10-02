/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a work. Work is the super class for other classes
     * @class
     * @alias Trove.Work
     * @param {Object} options
     * @property {Array} options.contributor
     * @property {Array} options.identifier
     * @property {Array} options.type
     * @property {number} options.holdingsCount
     * @property {number} options.versionCount
     * @property {number|string} options.issued
     * @property {Object} options.relevance
     * @property {string} options.id
     * @property {string} options.title
     * @property {string} options.troveUrl
     * @property {string} options.url
     */
    function Work(options) {
        console.log('Creating Work');
        $.extend(this, options);
    }

    Work.prototype.get = function(options) {
        console.log('Getting work');
    };

    Trove.Work = Work;
    Trove.CONSTRUCTORS.work = Work;


}(window.Trove = window.Trove || {}, jQuery));
