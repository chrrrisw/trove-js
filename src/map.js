/**
 * @lends Trove
 */
import {Work} from "./work";

    /**
     * A class to hold a map
     * @class
     * @alias Trove.Map
     * @augments Trove.Work
     * @param {Object} options
     */
    export class Map extends Work {

        constructor (options) {
            super(options);
            console.log('Creating Map');
        }

    }
