/**
 * A class to hold a work. Work is the parent class for other classes
 *   (Article, Book, Collection, Map, Music, Picture).
 *
 * See: {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#anchor-4}
 *
 * @class
 *
 * @param {Object} options The options object for the work.
 * @param {(number|string)} options.init The work identifier for which
 *   to retrieve data on construction.
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record.
 * @param {INCLUDES[]} options.includes
 *
 * TODO: Not complete
 *
 * @property {string} id
 * @property {string} url
 * @property {string} troveUrl
 * @property {string} title
 * @property {string[]} contributor
 * @property {(number|string)} issued When the work was issued
 * @property {string[]} type List of work types
 * @property {string} isPartOf ?
 * @property {string} subject ?
 * @property {string} abstract ?
 * @property {string} tableOfContents ?
 * @property {string[]} language List of languages
 * @property {string} wikipedia ?
 * @property {number} holdingsCount
 * @property {number} versionCount
 * @property {number} tagCount
 * @property {string} tagCount.level
 * @property {number} commentCount
 * @property {string} commentCount.level
 * @property {number} listCount
 * @property {string} tag
 * @property {string} tag.lastupdated
 * @property {string} comment
 * @property {string} comment.lastupdated
 * @property {string} comment.by
 * @property {string} comment.rating
 * @property {string} list
 * @property {string} list.url
 * @property {string} list.by
 * @property {string} list.lastupdated
 * @property {Object[]} identifier
 * @property {string} identifier.type
 * @property {string} identifier.linktype
 * @property {string} identifier.linktext
 * @property {string} identifier.value
 * @property {string} holding
 * @property {string} holding.nuc
 * @property {string} holding.name
 * @property {string} holding.library
 * @property {string} holding.url
 * @property {string} holding.callNumber
 * @property {string} version
 * @property {string} version.id
 * @property {string} version.record
 */
export class Work {

    /**
     * Create a Work object instance.
     */
    constructor (options) {
        // console.log('Creating Work');

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

    /**
     * Internal
     */
    process_done (data) {
        $.extend(this, data.work);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    /**
     * Internal
     */
    process_fail (jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Get the Work metadata from the Trove server.
     * @param {Object} options The options object for the query.
     * @param {(number|string)} options.id The Work ID for which
     *   to retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     */
    get (options) {
        // console.log('Getting work');

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
            url: Trove.API.WORK + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}
