/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A list of Contributors.
     * @class
     * @alias Trove.ContributorList
     * @classdesc The ContributorList class is a wrapper around the
     *   "http://api.trove.nla.gov.au/contributor" API. If no terms
     *   are specified on construction, you will have to call the get()
     *   method to actually request the data from Trove. If the terms
     *   are specified on construction, the get() method will be
     *   called immediately.
     * @param {Object} options An object specifying the options for
     *   this ContributorList.
     * @param {string} options.terms The search terms for which the contributor
     *   list will be returned (optional). If specified, the request
     *   will be made immediately.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full records.
     *
     * @property {Trove.Contributor[]} contributors The list of
     *   [Contributors]{@link Trove.Contributor} returned from the query.
     */
    function ContributorList(options) {
        console.log('Creating ContributorList');

        // Save the options in the object.
        $.extend(this, options);

        // The list of contributors, initially empty.
        this.contributors = [];

        // If terms is defined, get the data.
        if (this.terms !== undefined) {
            this.get();
        }
    }

    ContributorList.prototype.process_done = function(
        data, textStatus, jqXHR) {

        console.log('status', jqXHR.status);

        console.log(data.response.total);

        // Clear the previous results.
        this.contributors = [];

        for (var index in data.response.contributor) {
            // console.dir(data.response.contributor[index]);
            this.contributors.push(new Trove.CONSTRUCTORS.contributor(
                data.response.contributor[index]
            ));
        }

        // console.log("total = " + data.response.total);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    ContributorList.prototype.process_fail = function(
        jqXHR, textStatus, errorThrown) {

        console.error('fail status', jqXHR.status);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };


    /**
     * Get the data from the Trove server. If done or fail are set,
     *   they will be copied into the object, overwriting any
     *   existing callbacks.
     * @param {Object} options Options for the request.
     * @param {string} options.terms The search terms for which to
     *   request data (optional).
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {Trove.RECLEVEL} options.reclevel Whether to return the brief
     *   or full records.
     */
    ContributorList.prototype.get = function(options) {
        console.log('Getting ContributorList');

        if (options) {

            this.reclevel = options.reclevel || this.reclevel;

            // Override the terms
            this.terms = options.terms || this.terms;

            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // Add search terms, if specified
        if (this.terms !== undefined) {
            query_data.q = this.terms;
        }

        // Full or brief
        if (this.reclevel !== undefined) {
            query_data.reclevel = this.reclevel;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.CONTRIBUTOR,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    Trove.ContributorList = ContributorList;

}(window.Trove = window.Trove || {}, jQuery));
