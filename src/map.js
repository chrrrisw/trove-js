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
     */
    function Map(options) {
        console.log('Creating Map');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Map.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Map.prototype.constructor = Map;
    Trove.Map = Map;
    Trove.CONSTRUCTORS.map = Map;

}(window.Trove = window.Trove || {}, jQuery));
