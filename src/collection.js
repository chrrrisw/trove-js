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
        // console.log('Creating Collection');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Collection.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Collection.prototype.constructor = Collection;
    Trove.Collection = Collection;
    Trove.CONSTRUCTORS.collection = Collection;

}(window.Trove = window.Trove || {}, jQuery));
