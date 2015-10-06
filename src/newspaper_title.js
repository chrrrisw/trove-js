/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * An object to hold an instance of a newspaper title.
     * @class
     * @alias Trove.NewspaperTitle
     * @param {Object} options
     * @property {(number|string)} options.init If specified, will request the data immediately.
     * @property {} id The identifier of the newspaper title.
     * @property {} title Name of the newpaper (or magazine).
     * @property {} state The state in which the newspaper title was primarily published.
     * @property {} issn International Standard Serial Number.
     * @property {} troveURL A link to view the newspaper title in Trove.
     * @property {} startDate The earliest publication date of this newspaper title available in Trove.
     * @property {} endDate The most recent publication date of this newspaper title available in Trove.
     * @property {} year A list of the publication years for this newspaper title that are included in Trove.
     * @property {} year.date A year this newspaper title was published
     * @property {} year.issuecount The number of issues published in this year.
     * @property {} year.issue
     * @property {} year.issue.id
     * @property {} year.issue.date
     * @property {} year.issue.url
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

        // If init was specified, treat it as the identifier.
        if (init !== undefined) {
            this.get({
                identifier: init,
                done: this.done
            });
        }
    }

    /**
     * Get information about the specified newspaper title from Trove.
     * @param (Number) identifier
     */
    NewspaperTitle.prototype.get = function(options) {
        // console.log('Getting NewspaperTitle');
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
            // console.log('Got NewspaperTitle');
            $.extend(this, data.newspaper);
            if (options.done !== undefined) {
                options.done(this);
            } else if (this.done !== undefined) {
                this.done(this);
            }
        });
    };

    Trove.NewspaperTitle = NewspaperTitle;
    Trove.CONSTRUCTORS.newspaper_title = NewspaperTitle;

}(window.Trove = window.Trove || {}, jQuery));
