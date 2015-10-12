/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A Class to hold newspaper articles.
     *
     * @class
     * @alias Trove.NewspaperArticle
     *
     * @param {Object} options An object specifying the default options
     * @param {number} options.init The article identifier for which
     *   to retrieve data on construction.
     * @param {function} options.done The callback on receipt of
     *   data (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {Trove.INCLUDES[]} options.includes
     *
     * @property {string} id (brief) Trove newspaper article ID.
     * @property {string} heading (brief) The article heading.
     * @property {string} category (brief) The type of article
     * @property {Object} title (brief) The name and ID of the newspaper
     *   or periodical in which this article is found.
     * @property {string} title.id (brief) The Trove ID of the newspaper
     *   or periodical.
     * @property {string} title.value (brief) The name of the newspaper
     *   or periodical.
     * @property {string} edition (brief) Name of the special edition of
     *   the newspaper or periodical in which this article is found,
     *   if applicable.
     * @property {string} date (brief) The date of the issue in which
     *   this article was published.
     * @property {number} page (brief) The page on which this article
     *   appeared.
     * @property {number} pageSequence (brief)
     * @property {string} pageLabel (reclevel=full)
     * @property {string} status (brief) Included is the article is
     *   not currently available.
     * @property {string} relevance (brief, following search) How relevant
     *   this article is to the search.
     * @property {string} relevance.score (brief, following search) A
     *   numeric representation of how relevant this article is to the search.
     * @property {string} snippet (brief, following search) A small amount
     *   of text containing one or more of the search terms.
     * @property {string} troveUrl (brief)
     * @property {string} trovePageUrl (brief)
     * @property {string} supplement (reclevel=full)
     * @property {string} section (reclevel=full)
     * @property {string} illustrated (reclevel=full)
     * @property {number} wordCount (reclevel=full)
     * @property {number} correctionCount (reclevel=full)
     * @property {number} listCount (reclevel=full)
     * @property {number} tagCount (reclevel=full)
     * @property {number} commentCount (reclevel=full)
     * @property {Object[]} tag (include=tags)
     * @property {string} tag.lastupdated
     * @property {string} tag.value
     * @property {Object[]} comment (include=comments)
     * @property {string} comment.by
     * @property {string} comment.lastupdated
     * @property {string} comment.value
     * @property {Object[]} list (include=lists)
     * @property {string} list.by
     * @property {string} list.lastupdated
     * @property {string} list.url
     * @property {Object} lastCorrection (reclevel=full)
     * @property {string} lastCorrection.by (reclevel=full)
     * @property {string} lastCorrection.lastupdated (reclevel=full)
     * @property {string} identifier (reclevel=full)
     * @property {string} pdf (reclevel=full)
     * @property {string} articleText (include=articletext)
     */
    function NewspaperArticle(options) {
        // console.log('Creating NewspaperArticle');

        // Save and remove init from options.
        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        // Save all other options in this object.
        $.extend(this, options);

        // If we know the identifier, get the data
        if (init !== undefined) {
            this.get({id: init});
        }
    }

    NewspaperArticle.prototype.process_done = function(data) {
        $.extend(this, data.article);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    NewspaperArticle.prototype.process_fail = function(
            jqXHR, textStatus, errorThrown) {

        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Retrieve article information from Trove based on identifier.
     *
     * @param {Object} options The options object for the query.
     * @param {number} options.id The article ID for which to
     *   retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {Trove.INCLUDES[]} options.includes
     */
    NewspaperArticle.prototype.get = function(options) {
        // console.log('Getting NewspaperArticle');
        // http://api.trove.nla.gov.au/newspaper/18342701?key=<INSERT KEY>

        // Override reclevel, includes, done and fail if specified
        if (options) {
            this.id = options.id || this.id;
            this.reclevel = options.reclevel || this.reclevel;
            this.includes = options.includes || this.includes;
            this.done = options.done || this.done;
            this.fail = options.fail || this.fail;
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // Full or brief
        if (this.reclevel !== undefined) {
            query_data.reclevel = this.reclevel;
        }

        // What to include
        if ((this.includes !== undefined) &&
            (Array.isArray(this.includes)) &&
            (this.includes.length > 0)) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_ARTICLE + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    /**
     * Retrieve newspaper title information for the article
     *
     * @param {Object} options The options object for the query.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @returns {Trove.NewspaperTitle} The NewspaperTitle object that
     *   contains the NewspaperArticle.
     */
    NewspaperArticle.prototype.get_newspaper = function(options) {
        // console.log('Get NewspaperTitle for Article');

        var done;
        if (options) done = options.done || this.done;

        if (this.title !== undefined) {
            if (this.title.id !== undefined) {
                return new Trove.CONSTRUCTORS.newspaper_title({
                    init: this.title.id,
                    done: done || this.done
                });
            }
        }
    };

    Trove.NewspaperArticle = NewspaperArticle;
    Trove.CONSTRUCTORS.newspaper = NewspaperArticle;

}(window.Trove = window.Trove || {}, jQuery));
