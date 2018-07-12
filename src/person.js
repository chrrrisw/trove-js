/**
 * A class to hold a person.
 * Please note that the Trove API does not currently support People
 * except as a result of a search.
 * @class
 *
 * @param {Object} options The options object for the Person.
 * @param {(number|string)} options.init The Person identifier for which
 *   to retrieve data on construction.
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record.
 * @param {INCLUDES[]} options.includes
 *
 * @property {string} id The Trove identifier for the person
 * @property {string} troveUrl The full URL for the person
 * @property {string} url The relative URL for the person
 *
 */
export class Person {
    constructor (options) {
        // console.log('Creating Person');

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
        $.extend(this, data.people);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail (jqXHR, textStatus, errorThrown) {
        console.error('Error getting person:', textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Get the Person metadata from the Trove server.
     * Currently not supported by Trove.
     * @param {Object} options The options object for the query.
     * @param {(number|string)} options.id The person ID for which
     *   to retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     */
    get (options) {
        // console.log('Getting person');

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
            url: Trove.API.PEOPLE + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}