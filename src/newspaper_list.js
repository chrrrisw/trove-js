/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A list of Newspapers for a specific state or all states.
     * @class
     * @alias Trove.NewspaperList
     * @param {Object} options
     * @property {string} options.state The state for which the newspaper list will be returned.
     * @property {string} options.state The state for which the newspaper list will be returned.
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

    /**
     *
     */
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
     *
     */
    NewspaperList.prototype.get = function(options) {
        // console.log('Getting NewspaperList');
        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        if ((options !== undefined) && (options.state !== undefined)) {
            query_data.state = options.state;
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
