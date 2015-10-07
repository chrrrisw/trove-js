/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a journal article
     * @class
     * @alias Trove.Article
     * @augments Trove.Work
     * @param {Object} options
     */
    function Article(options) {
        // console.log('Creating Article');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Article.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Article.prototype.constructor = Article;
    Trove.Article = Article;
    Trove.CONSTRUCTORS.article = Article;

}(window.Trove = window.Trove || {}, jQuery));
