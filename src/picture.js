/**
 * @lends Trove
 */
import {Work} from "./work";

    /**
     * A class to hold a picture
     * @class
     * @alias Trove.Picture
     * @augments Trove.Work
     * @param {Object} options
     */
    export class Picture extends Work {

        constructor (options) {
            super(options);
            console.log('Creating Picture');
        }

    }
