import {Work} from "./work";

/**
 * A class to hold a book
 * @class
 * @augments Work
 * @param {Object} options
 */
export class Book extends Work {

	/**
	 * Create an Book
	 * @param {Object} options
	 */
    constructor (options) {
        super(options);
        // console.log('Creating Book');
    }

}
