(function( Trove, $, undefined ) {
    'use strict';

    function List (options) {
        $.extend(this, options);
    }
    Trove.List = List;
    Trove.SEARCH_CONSTRUCTORS.list = List;

}( window.Trove = window.Trove || {}, jQuery ));
