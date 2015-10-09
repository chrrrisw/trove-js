/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    var STATEABBR = {
        'ACT': 'ACT',
        'National': 'NATIONAL',
        'New South Wales': 'NSW',
        'Northern Territory': 'NT',
        'Queensland': 'QLD',
        'South Australia': 'SA',
        'Tasmania': 'TAS',
        'Victoria': 'VIC',
        'Western Australia': 'WA'
    };

    /**
     * A class to hold an instance of a newspaper title.
     * @class
     * @alias Trove.NewspaperTitle
     * @classdesc The NewspaperTitle class is a wrapper around the
     *   "http://api.trove.nla.gov.au/newspaper/title" API.
     *   The {@link Trove.NewspaperList} class will return a list of
     *   these objects for a state (or all states).
     * @param {Object} options The options used on construction. Every
     *   object property can be set on construction through this parameter.
     * @param {(number|string)} options.init If specified, will request
     *   the data immediately.
     * @property {string} id The Trove identifier for the newspaper title.
     * @property {string} title Name of the newpaper (or magazine).
     * @property {string} state The state in which the newspaper title was
     *   published.
     * @property {string} stateabbr An abbreviation for the state.
     * @property {number} issn International Standard Serial Number.
     * @property {string} troveURL A link to view the newspaper title in Trove.
     * @property {string} startDate The earliest publication date of this
     *   newspaper title available in Trove.
     * @property {string} endDate The most recent publication date of this
     *   newspaper title available in Trove.
     * @property {Object[]} year A list of the publication years for this newspaper
     *   title that are included in Trove.
     * @property {string} year.date A year this newspaper title was published
     * @property {string} year.issuecount The number of issues published in this
     *   year.
     * @property {Object[]} year.issue List of issues within the specified range.
     * @property {string} year.issue.id The Trove issue identifier.
     * @property {string} year.issue.date The data of the issue.
     * @property {string} year.issue.url The Trove URL for the issue.
     */
    function NewspaperTitle(options) {
        // console.log('Creating NewspaperTitle ');

        // Save and remove init from options.
        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        // Save all other options as part of this object.
        $.extend(this, options);
        if (this.state) this.stateabbr = STATEABBR[this.state];

        // If init was specified, treat it as the identifier.
        if (init !== undefined) {
            this.get({id: init});
        }
    }

    /**
     * Get information about the specified newspaper title from Trove.
     * @param {Object} options
     * @param {(number|string)} options.id The identifier of the newspaper
     *   title to retrieve. If not specified, will fall back to the id set
     *   on construction. (optional)
     * @param {Trove.INCLUDES[]} options.includes The data to include in
     *   the results. Trove currently only supports
     *   {@link Trove.INCLUDES}.YEARS.
     * @param {string} options.range If YEARS is included, return a list of
     *   publication dates in the given range. Of the form: YYYYMMDD-YYYYMMDD.
     */
    NewspaperTitle.prototype.get = function(options) {
        // http://api.trove.nla.gov.au/newspaper/title/35?encoding=json

        if (options) {
            this.id = options.id || this.id;
            this.includes = options.includes || this.includes;
            this.range = options.range || this.range;
            this.done = options.done || this.done;
            this.fail = options.fail || this.fail;
        }

        // console.log('Getting NewspaperTitle', this.id);

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // What to include
        if ((this.includes !== undefined) &&
            (Array.isArray(this.includes)) &&
            (this.includes.length > 0)) {
            query_data.include = this.includes.join(',');
        }

        // What range
        if (this.range !== undefined) {
            query_data.range = this.range;
        }

        // console.log(JSON.stringify(query_data, null, '\t'));

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLE + this.id,
            data: query_data,
            context: this
        }).done(function(data, textStatus, jqXHR) {
            // console.log('Got NewspaperTitle');
            // console.log('status', jqXHR.status);
            $.extend(this, data.newspaper);
            if (this.state) this.stateabbr = STATEABBR[this.state];
            if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    Trove.NewspaperTitle = NewspaperTitle;
    Trove.CONSTRUCTORS.newspaper_title = NewspaperTitle;

}(window.Trove = window.Trove || {}, jQuery));
