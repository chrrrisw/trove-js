/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A list of Newspapers for a specific state or all states.
     * @class
     * @alias Trove.NewspaperList
     * @classdesc The NewspaperList class is a wrapper around the
     *   "http://api.trove.nla.gov.au/newspaper/titles" API. If no state
     *   is specified on construction, you will have to call the get()
     *   method to actually request the data from Trove. If the state
     *   is specified on construction, the get() method will be
     *   called immediately.
     *
     *   Currently the Trove servers only give basic information on
     *   each newspaper title returned. If you want the list of years and
     *   issues, you'll have to call the {@link Trove.NewspaperTitle}.get()
     *   method directly, specifying includes and range.
     * @param {Object} options An object specifying the options for
     *   this NewspaperList.
     * @param {Trove.STATES} options.state The state for which the newspaper
     *   list will be returned (optional). If specified, the request
     *   will be made immediately.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @property {Trove.NewspaperTitle[]} newspapers The list of
     *   [NewspaperTitles]{@link Trove.NewspaperTitle} returned from the query.
     */
    function NewspaperList(options) {
        // console.log('Creating NewspaperList');

        // Save the options in the object.
        $.extend(this, options);

        // The list of newspapers, initially empty.
        this.newspapers = [];

        // If state is defined, get the data.
        if (this.state !== undefined) {
            this.get();
        }
    }

    NewspaperList.prototype.process_done = function(
        data, textStatus, jqXHR) {

        // console.log('status', jqXHR.status);

        // Clear the previous results.
        this.newspapers = [];

        for (var index in data.response.records.newspaper) {
            // console.dir(data.response.records.newspaper[index]);
            this.newspapers.push(new Trove.CONSTRUCTORS.newspaper_title(
                data.response.records.newspaper[index]
            ));
        }

        // console.log("total = " + data.response.records.total);
        if (this.done !== undefined) {
            this.done(this);
        }
    };

    NewspaperList.prototype.process_fail = function(
        jqXHR, textStatus, errorThrown) {

        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    };


    /**
     * Get the data from the Trove server. If done or fail are set,
     *   they will be copied into the object, overwriting any
     *   existing callbacks.
     * @param {Object} options Options for the request.
     * @param {Trove.STATES} options.state The state for which to
     *   request data (optional). If not set, or set to ALL,
     *   all states will be returned.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    NewspaperList.prototype.get = function(options) {
        // console.log('Getting NewspaperList');

        if (options) {
            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;

            // Override the state
            this.state = options.state || this.state;
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        if ((this.state !== undefined) && (this.state != Trove.STATES.ALL)) {
            query_data.state = this.state;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLES,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    };

    Trove.NewspaperList = NewspaperList;

}(window.Trove = window.Trove || {}, jQuery));
