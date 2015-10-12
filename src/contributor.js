/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a contributor
     * @class
     * @alias Trove.Contributor
     *
     * @param {Object} options The options object for the contributor.
     * @param {string} options.init The contributor ID (NUC code) for which
     *   to retrieve data on construction.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     *
     * @property {string} id
     * @property {string} url
     * @property {string} name
     * @property {string[]} nuc
     * @property {string} shortname
     * @property {number} totalholdings
     * @property {string} accesspolicy
     * @property {string} algentry
     * @property {Object} parent
     * @property {string} parent.id
     * @property {string} parent.url
     * @property {string} parent.value
     *
     */
    function Contributor(options) {
        console.log('Creating Contributor');

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

    Contributor.prototype.process_done = function(data) {
        $.extend(this, data.contributor);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    Contributor.prototype.process_fail = function(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Get the Contributor metadata from the Trove server.
     * @param {Object} options The options object for the query.
     * @param {string} options.id The Contributor ID (NUC code) for which
     *   to retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     */
    Contributor.prototype.get = function(options) {
        console.log('Getting contributor');

        // Override reclevel, done and fail if specified
        if (options) {
            this.id = options.id || this.id;
            this.reclevel = options.reclevel || this.reclevel;
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

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.CONTRIBUTOR + '/' + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    Trove.Contributor = Contributor;
    Trove.CONSTRUCTORS.contributor = Contributor;

}(window.Trove = window.Trove || {}, jQuery));
