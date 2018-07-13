import {Work} from "./work";

/**
 * A class to hold a book
 * @class
 * @augments Work
 * @param {Object} options
 */
export class Book extends Work {

    constructor (options) {
        super(options);
        // console.log('Creating Book');
    }

}
