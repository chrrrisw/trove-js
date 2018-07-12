import {Work} from "./work";

/**
 * A class to hold a journal article.
 * @class
 * @augments Work
 */
export class Article extends Work {

	/**
	 * Create an Article
	 * @param {Object} options
	 */
    constructor (options) {
        super(options);
        console.log('Creating Article');
    }

}
