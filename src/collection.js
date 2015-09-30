(function( Trove, $, undefined ) {
    'use strict';

    function Collection (options) {
        console.log('Creating Collection');
        $.extend(this, options);
        // console.dir(this);
    }
    Trove.Collection = Collection;
    Trove.SEARCH_CONSTRUCTORS.collection = Collection;

}( window.Trove = window.Trove || {}, jQuery ));
