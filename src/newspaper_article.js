/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A Class to hold newspaper articles
     * @class
     * @alias Trove.NewspaperArticle
     * @param {Object} options An object specifying the default options
     * @property {number} options.init The article identifier for which to retrieve data on construction.
     * @property {function} options.done The default callback called when data has been returned from the Trove servers.
     */
    function NewspaperArticle(options) {
        // console.log('Creating NewspaperArticle');

        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }
        $.extend(this, options);

        // If we know the identifier, get the data
        if (init !== undefined) {
            this.get({
                identifier: init,
                done: this.done
            });
        }
    }

    /**
     * Retrieve article information based on identifier
     * @param {Object} options
     * @property {number} options.identifier The article identifier for which to retrieve data.
     * @property {function} options.done The callback called when data has been returned from the Trove servers. This overrides the default calback.
     */
    NewspaperArticle.prototype.get = function(options) {
        // console.log('Getting NewspaperArticle');
        // http://api.trove.nla.gov.au/newspaper/18342701?key=<INSERT KEY>

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_ARTICLE + options.identifier,
            data: query_data,
            context: this
        }).done(function(data) {
            // console.log('Got NewspaperArticle');
            $.extend(this, data.article);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    /**
     * Retrieve newspaper information for the article
     * @param {function} done
     * @returns {Newspaper} the Newspaper object
     */
    NewspaperArticle.prototype.get_newspaper = function(options) {
        // console.log('Get Newspaper for Article');
        if (this.title !== undefined) {
            if (this.title.id !== undefined) {
                return new Trove.CONSTRUCTORS.newspaper_title({
                    init: this.title.id,
                    done: options.done || this.done
                });
            }
        }
    };

    Trove.NewspaperArticle = NewspaperArticle;
    Trove.CONSTRUCTORS.newspaper = NewspaperArticle;

}(window.Trove = window.Trove || {}, jQuery));
