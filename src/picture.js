import {Work} from "./work";

/**
 * A class to hold a picture
 * @class
 * @augments Work
 * @param {Object} options
 */
export class Picture extends Work {

    constructor (options) {
        super(options);
        // console.log('Creating Picture');
    }

}
