/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a list
     * @class
     * @alias Trove.List
     *
     * @param {Object} options The options object for the list.
     * @param {(number|string)} options.init The list identifier for which
     *   to retrieve data on construction.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {Trove.INCLUDE[]} options.includes
     *
     */
    function List(options) {
        console.log('Creating List');

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
            this.get({identifier: init});
        }

    }

    List.prototype.process_done = function(data) {
        $.extend(this, data.list);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    List.prototype.process_fail = function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Get the List metadata from the Trove server.
     * @param {Object} options The options object for the query.
     * @param {(number|string)} options.identifier The List ID for which
     *   to retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {Trove.INCLUDE[]} options.includes
     */
    List.prototype.get = function(options) {
        console.log('Getting list');

        // Override reclevel, includes, done and fail if specified
        this.reclevel = options.reclevel || this.reclevel;
        this.includes = options.includes || this.includes;
        this.done = options.done || this.done;
        this.fail = options.fail || this.fail;

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
            url: Trove.API.LIST + options.identifier,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    Trove.List = List;
    Trove.CONSTRUCTORS.list = List;

}(window.Trove = window.Trove || {}, jQuery));
