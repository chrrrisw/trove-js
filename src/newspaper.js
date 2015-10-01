/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * An object to hold an instance of a newspaper
     * @class
     * @alias Trove.Newspaper
     * @param {Object} options
     * @property {number|string} options.init If specified, will request the data immediately
     * id
     * title
     * state
     * issn
     * troveUrl
     * startDate
     * endDate
     */
    function Newspaper(options) {
        console.log('Creating Newspaper');

        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        $.extend(this, options);
        if (init !== undefined) {
            this.get({
                identifier: init,
                done: this.done
            });
        }
    }

    /**
     * Get information about the specified newspaper
     * @param (Number) identifier
     */
    Newspaper.prototype.get = function(options) {
        console.log('Getting Newspaper');
        // http://api.trove.nla.gov.au/newspaper/title/35?encoding=json

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLE + options.identifier,
            data: query_data,
            context: this
        }).done(function(data) {
            console.log('Got Newspaper');
            $.extend(this, data.newspaper);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    Trove.Newspaper = Newspaper;

}(window.Trove = window.Trove || {}, jQuery));
