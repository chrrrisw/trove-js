/**
 * @lends Trove
 */
import {Work} from "./work";

    /**
     * A class to hold a collection
     * @class
     * @alias Trove.Collection
     * @augments Trove.Work
     * @param {Object} options
     */
    export class Collection extends Work {

        constructor (options) {
            super(options);
            console.log('Creating Collection');
        }

    }
