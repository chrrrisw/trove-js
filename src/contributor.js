/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a contributor.
     * @class
     * @alias Trove.Contributor
     * @classdesc Contributors are libraries and other organisations that
     *   contribute to Trove. Contributors usually have a "name", an "id" and
     *   a "url". They may also have a "nuc" (National Union Catalogue)
     *   identifier assigned to them. If you want more information, pass
     *   {@link Trove.RECLEVEL}.FULL into the "reclevel" option. See
     *   {@link Trove.ContributorList} to retrieve lists of Contributors.
     *
     * @param {Object} options The options object for the contributor.
     * @param {string} options.init The contributor ID for which
     *   to retrieve data on construction.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     *
     * @property {string} id The Trove identifier for the contributor.
     * @property {string} url The Trove-relative URL.
     * @property {string} name The name of the contributor.
     * @property {string[]} nuc The list of NUCs for the contributor.
     * @property {string} shortname The short name of the contributor.
     * @property {number} totalholdings The number of holdings for the contributor.
     * @property {string} accesspolicy The access policy for the contributor.
     * @property {string} algentry
     * @property {Object} parent An object holding the parents of this contributor
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
            this.get({
                id: init
            });
        }

    }

    Contributor.prototype.process_done = function(
        data,
        textStatus,
        jqXHR) {

        console.log('done status', jqXHR.status);

        // Populate the object attributes.
        $.extend(this, data.contributor);

        if (this.done !== undefined) {
            this.done(this);
        }
    };

    Contributor.prototype.process_fail = function(
        jqXHR,
        textStatus,
        errorThrown) {

        console.error('fail status', jqXHR.status, textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };

    /**
     * Get the parent Contributor for this Contributor. The "parent"
     * attribute is only available if {@link Trove.RECLEVEL}.FULL
     * was specified on requesting the data from Trove.
     * @param {Object} options
     * @param {function} options.done The callback on completion (optional).
     * @param {function} options.fail The callback on failure (optional).
     *
     * @returns {Trove.Contributor}
     */
    Contributor.prototype.get_parent = function(options) {

        var done, fail;
        if (options) {
            done = options.done || this.done;
            fail = options.fail || this.fail;
        }

        if (this.parent) {
            return new Trove.CONSTRUCTORS.contributor({
                init: this.parent.id,
                done: done || this.done,
                fail: fail || this.fail
            });
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
