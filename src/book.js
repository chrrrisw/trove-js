/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a book
     * @class
     * @alias Trove.Book
     * @augments Trove.Work
     * @param {Object} options
     */
    function Book(options) {
        // console.log('Creating Book');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Book.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Book.prototype.constructor = Book;
    Trove.Book = Book;
    Trove.CONSTRUCTORS.book = Book;

}(window.Trove = window.Trove || {}, jQuery));
