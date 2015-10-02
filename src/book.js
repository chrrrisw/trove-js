/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a book
     * @class
     * @alias Trove.Book
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
     */
    function Book(options) {
        console.log('Creating Book');
        $.extend(this, options);
    }
    Trove.Book = Book;
    Trove.CONSTRUCTORS.book = Book;

}(window.Trove = window.Trove || {}, jQuery));
