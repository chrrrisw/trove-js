/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a collection
     * @class
     * @alias Trove.Collection
     */
    function Collection(options) {
        // console.log('Creating Collection');
        $.extend(this, options);
        // console.dir(this);
    }
    Trove.Collection = Collection;
    Trove.CONSTRUCTORS.collection = Collection;

}(window.Trove = window.Trove || {}, jQuery));
