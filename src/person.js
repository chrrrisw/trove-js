/**
 * @lends Trove
 */
(function( Trove, $, undefined ) {
    'use strict';

    /**
     * A class to hold a person
     * @class
     * @alias Trove.Person
     * @param {Object} options
     * @property {string} options.id
     * @property {string} options.troveUrl
     * @property {string} options.url
     */
    function Person (options) {
        console.log('Creating Person');
        $.extend(this, options);
    }
    Trove.Person = Person;
    Trove.SEARCH_CONSTRUCTORS.people = Person;

}( window.Trove = window.Trove || {}, jQuery ));
