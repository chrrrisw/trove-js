/**
 * @lends Trove
 */
(function( Trove, $, undefined ) {
    'use strict';

    /**
     * A class to hold a list
     * @class
     * @alias Trove.List
     */
    function List (options) {
        $.extend(this, options);
    }
    Trove.List = List;
    Trove.SEARCH_CONSTRUCTORS.list = List;

}( window.Trove = window.Trove || {}, jQuery ));
