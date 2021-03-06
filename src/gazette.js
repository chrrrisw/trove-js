/**
 * A Class to hold government gazette articles.
 *
 * See: {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#anchor-6}
 *
 * @class
 *
 * @param {Object} options An object specifying the default options
 * @param {number} options.init The article identifier for which
 *   to retrieve data on construction.
 * @param {function} options.done The callback on receipt of
 *   data (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record.
 * @param {INCLUDES[]} options.includes
 *
 */
export class Gazette {

    constructor (options) {
        // console.log('Creating Gazette');

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

    process_done (data) {
        $.extend(this, data.article);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail (
            jqXHR, textStatus, errorThrown) {

        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Retrieve article information from Trove based on identifier.
     *
     * @param {Object} options The options object for the query.
     * @param {number} options.id The article ID for which to
     *   retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     */
    get (options) {
        // console.log('Getting Gazette');
        // https://api.trove.nla.gov.au/v2/gazette/18342701?key=<INSERT KEY>

        // Override reclevel, includes, done and fail if specified
        if (options) {
            this.id = options.id || this.id;
            this.reclevel = options.reclevel || this.reclevel;
            this.includes = options.includes || this.includes;
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

        // What to include
        if ((this.includes !== undefined) &&
            (Array.isArray(this.includes)) &&
            (this.includes.length > 0)) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.GAZETTE + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}
