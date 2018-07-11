/**
 * @lends Trove
 */
import {Work} from "./work";

    /**
     * A class to hold a journal article.
     * @class
     * @alias Trove.Article
     * @augments Trove.Work
     * @param {Object} options
     */
    export class Article extends Work {

        constructor (options) {
            super(options);
            console.log('Creating Article');
        }

    }
