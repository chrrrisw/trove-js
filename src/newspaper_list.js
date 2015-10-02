/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A list of Newspapers for a specific state or all states.
     * @class
     * @alias Trove.NewspaperList
     * @classdesc The NewspaperList class is a wrapper around the "http://api.trove.nla.gov.au/newspaper/titles" API. If no state is specified on construction, you will have to call the get() method to actually request the data from Trove. If the state is specified on construction, the get() method will be called immediately. The get() method, called without a state, will return the list of all the newpapers digitised by Trove.
     * @param {Object} options An object specifying the options for this NewspaperList.
     * @property {string} options.state The state for which the newspaper list will be returned (optional). If specified, the request will be made immediately.
     * @property {string} options.done The callback on receipt of data (optional).
     * @property {function} options.fail The callback on failure (optional).
     */
    function NewspaperList(options) {
        // console.log('Creating NewspaperList');
        // http://api.trove.nla.gov.au/newspaper/titles?state=vic
        $.extend(this, options);

        this.newspapers = [];

        if (this.state !== undefined) {
            this.get({
                state: this.state
            });
        }
    }

    NewspaperList.prototype.processGet = function(data) {

        for (var index in data.response.records.newspaper) {
            // console.dir(data.response.records.newspaper[index]);
            this.newspapers.push(new Trove.CONSTRUCTORS.newspaper_title(
                data.response.records.newspaper[index]
            ));
        }

        // console.log("total = " + data.response.records.total);
        if (this.done !== undefined) this.done(this);
    };

    /**
     * Get the data from the Trove server. If done or fail are set, they will be copied into the object, overwriting any existing callbacks.
     * @param {Object} options Options for the request.
     * @property {string} options.state The state for which to request data (optional). If not set, all states will be returned.
     * @property {function} options.done The callback on receipt of data (optional).
     * @property {function} options.fail The callback on failure (optional).
     */
    NewspaperList.prototype.get = function(options) {
        // console.log('Getting NewspaperList');

        // Override the done callback
        this.done = options.done || this.done;

        // Override the fail callback
        this.fail = options.fail || this.fail;

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        if ((options !== undefined) && (options.state !== undefined)) {
            query_data.state = options.state;
        } else if (this.state !== undefined) {
            // If the state is not in the options, try the object
            query_data.state = this.state;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLES,
            data: query_data,
            context: this
        }).done(this.processGet);
    };

    Trove.NewspaperList = NewspaperList;

}(window.Trove = window.Trove || {}, jQuery));
