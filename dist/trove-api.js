(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Trove", [], factory);
	else if(typeof exports === 'object')
		exports["Trove"] = factory();
	else
		root["Trove"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/trove.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/article.js":
/*!************************!*\
  !*** ./src/article.js ***!
  \************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./src/work.js");


/**
 * A class to hold a journal article.
 * @class
 * @augments Work
 */
class Article extends _work__WEBPACK_IMPORTED_MODULE_0__["Work"] {

  /**
   * Create an Article
   * @param {Object} options
   */
  constructor(options) {
    super(options);
    // console.log('Creating Article');
  }

}

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./src/work.js");


/**
 * A class to hold a book
 * @class
 * @augments Work
 * @param {Object} options
 */
class Book extends _work__WEBPACK_IMPORTED_MODULE_0__["Work"] {

    constructor(options) {
        super(options);
        // console.log('Creating Book');
    }

}

/***/ }),

/***/ "./src/collection.js":
/*!***************************!*\
  !*** ./src/collection.js ***!
  \***************************/
/*! exports provided: Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./src/work.js");


/**
 * A class to hold a collection
 * @class
 * @augments Work
 * @param {Object} options
 */
class Collection extends _work__WEBPACK_IMPORTED_MODULE_0__["Work"] {

    constructor(options) {
        super(options);
        // console.log('Creating Collection');
    }

}

/***/ }),

/***/ "./src/contributor.js":
/*!****************************!*\
  !*** ./src/contributor.js ***!
  \****************************/
/*! exports provided: Contributor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contributor", function() { return Contributor; });
/**
 * A class to hold a contributor.
 * @class
 * @classdesc Contributors are libraries and other organisations that
 *   contribute to Trove. Contributors usually have a "name", an "id" and
 *   a "url". They may also have a "nuc" (National Union Catalogue)
 *   identifier assigned to them. If you want more information, pass
 *   {@link RECLEVEL}.FULL into the "reclevel" option. See
 *   {@link ContributorList} to retrieve lists of Contributors.
 *
 * @param {Object} options The options object for the contributor.
 * @param {string} options.init The contributor ID for which
 *   to retrieve data on construction (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record (optional, default=brief).
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 *
 * @property {string} id The Trove identifier for the contributor.
 * @property {string} url The Trove-relative URL.
 * @property {string} name The name of the contributor.
 * @property {string[]} nuc The list of NUCs for the contributor.
 * @property {string} shortname The short name of the contributor.
 * @property {number} totalholdings The number of holdings for the
 *   contributor.
 * @property {string} accesspolicy The access policy for the contributor.
 * @property {string} algentry Australian Libraries Gateway URL.
 * @property {Object} parent An object holding the parents of this
 *   contributor.
 * @property {string} parent.id The ID of the parent.
 * @property {string} parent.url The Trove-relative URL of the parent.
 * @property {string} parent.value The name of the parent.
 *
 */
class Contributor {

    constructor(options) {
        // console.log('Creating Contributor');

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
            this.get({
                id: init
            });
        }
    }

    process_done(data, textStatus, jqXHR) {

        // console.log('done status', jqXHR.status);

        // Populate the object attributes.
        $.extend(this, data.contributor);

        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {

        console.error('fail status', jqXHR.status, textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Get the parent Contributor for this Contributor. The "parent"
     * attribute is only available if {@link RECLEVEL}.FULL
     * was specified on requesting the data from Trove.
     * @param {Object} options
     * @param {function} options.done The callback on completion (optional).
     * @param {function} options.fail The callback on failure (optional).
     *
     * @returns {Contributor}
     */
    get_parent(options) {

        var done, fail;
        if (options) {
            done = options.done || this.done;
            fail = options.fail || this.fail;
        }

        if (this.parent) {
            return new Contributor({
                init: this.parent.id,
                done: done || this.done,
                fail: fail || this.fail
            });
        }
    }

    /**
     * Get the Contributor metadata from the Trove server. If "done" or "fail"
     *   are set, they will be copied into the object, overwriting any
     *   existing callbacks. This is also true for "id" and "reclevel".
     * @param {Object} options The options object for the query.
     * @param {string} options.id The Contributor ID (NUC code) for which
     *   to retrieve data (optional if specified previously).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record (optional).
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    get(options) {
        // console.log('Getting contributor');

        // Override reclevel, done and fail if specified
        if (options) {
            this.id = options.id || this.id;
            this.reclevel = options.reclevel || this.reclevel;
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

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.CONTRIBUTOR + '/' + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}

/***/ }),

/***/ "./src/contributor_list.js":
/*!*********************************!*\
  !*** ./src/contributor_list.js ***!
  \*********************************/
/*! exports provided: ContributorList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorList", function() { return ContributorList; });
/* harmony import */ var _contributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contributor */ "./src/contributor.js");


/**
 * A container for a list of Contributors.
 * @class
 * @classdesc The ContributorList class is a wrapper around the
 *   "https://api.trove.nla.gov.au/v2/contributor" API. If no "terms"
 *   are specified on construction, you will have to call the get()
 *   method to actually request the data from Trove. If the "terms"
 *   are specified on construction, the get() method will be
 *   called immediately.
 *
 * @param {Object} options An object specifying the options for
 *   this ContributorList.
 * @param {string} options.terms The search terms for which the contributor
 *   list will be returned (optional). If specified, the request
 *   will be made immediately. The search will be performed by the
 *   Trove servers on the NUC symbol and name.
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full records (optional, default=brief).
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 *
 * @property {Contributor[]} contributors The list of
 *   [Contributors]{@link Contributor} returned from the query.
 */
class ContributorList {

    constructor(options) {
        // console.log('Creating ContributorList');

        // Save the options in the object.
        $.extend(this, options);

        // The list of contributors, initially empty.
        this.contributors = [];

        // If terms is defined, get the data.
        if (this.terms !== undefined) {
            this.get();
        }
    }

    process_done(data, textStatus, jqXHR) {

        // console.log('status', jqXHR.status);

        // console.log(data.response.total);

        // Clear the previous results.
        this.contributors = [];

        for (var index in data.response.contributor) {
            // console.dir(data.response.contributor[index]);
            this.contributors.push(new _contributor__WEBPACK_IMPORTED_MODULE_0__["Contributor"](data.response.contributor[index]));
        }

        // console.log("total = " + data.response.total);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {

        console.error('fail status', jqXHR.status);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Get the data from the Trove server. If "done" or "fail" are set,
     *   they will be copied into the object, overwriting any
     *   existing callbacks. This is also true for "terms" and "reclevel".
     * @param {Object} options Options for the request.
     * @param {string} options.terms The search terms for which to
     *   request data (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full records (optional).
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    get(options) {
        // console.log('Getting ContributorList');

        if (options) {

            this.reclevel = options.reclevel || this.reclevel;

            // Override the terms
            this.terms = options.terms || this.terms;

            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // Add search terms, if specified
        if (this.terms !== undefined) {
            query_data.q = this.terms;
        }

        // Full or brief
        if (this.reclevel !== undefined) {
            query_data.reclevel = this.reclevel;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.CONTRIBUTOR,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}

/***/ }),

/***/ "./src/gazette.js":
/*!************************!*\
  !*** ./src/gazette.js ***!
  \************************/
/*! exports provided: Gazette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gazette", function() { return Gazette; });
/**
 * A Class to hold government gazette articles.
 *
 * See: {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#anchor-6}
 *
 * @class
 *
 * @param {Object} options An object specifying the default options
 * @param {number} options.init The article identifier for which
 *   to retrieve data on construction.
 * @param {function} options.done The callback on receipt of
 *   data (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record.
 * @param {INCLUDES[]} options.includes
 *
 */
class Gazette {

    constructor(options) {
        // console.log('Creating Gazette');

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
            this.get({ id: init });
        }
    }

    process_done(data) {
        $.extend(this, data.article);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {

        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Retrieve article information from Trove based on identifier.
     *
     * @param {Object} options The options object for the query.
     * @param {number} options.id The article ID for which to
     *   retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     */
    get(options) {
        // console.log('Getting Gazette');
        // https://api.trove.nla.gov.au/v2/gazette/18342701?key=<INSERT KEY>

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
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.GAZETTE + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/**
 * A class to hold a list
 *
 * See: {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#anchor-5}
 *
 * @class
 *
 * @param {Object} options The options object for the list.
 * @param {(number|string)} options.init The list identifier for which
 *   to retrieve data on construction.
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record.
 * @param {INCLUDES[]} options.includes
 *
 */
class List {

    constructor(options) {
        // console.log('Creating List');

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
            this.get({ id: init });
        }
    }

    process_done(data) {
        $.extend(this, data.list);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Get the List metadata from the Trove server.
     * @param {Object} options The options object for the query.
     * @param {(number|string)} options.id The List ID for which
     *   to retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     */
    get(options) {
        // console.log('Getting list');

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
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.LIST + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./src/work.js");


/**
 * A class to hold a map
 * @class
 * @augments Work
 * @param {Object} options
 */
class Map extends _work__WEBPACK_IMPORTED_MODULE_0__["Work"] {

    constructor(options) {
        super(options);
        // console.log('Creating Map');
    }

}

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: Music */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Music", function() { return Music; });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./src/work.js");


/**
 * A class to hold music
 * @class
 * @augments Work
 * @param {Object} options
 */
class Music extends _work__WEBPACK_IMPORTED_MODULE_0__["Work"] {

    constructor(options) {
        super(options);
        // console.log('Creating Music');
    }

}

/***/ }),

/***/ "./src/newspaper_article.js":
/*!**********************************!*\
  !*** ./src/newspaper_article.js ***!
  \**********************************/
/*! exports provided: NewspaperArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperArticle", function() { return NewspaperArticle; });
/* harmony import */ var _newspaper_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newspaper_title */ "./src/newspaper_title.js");


/**
 * A Class to hold newspaper articles.
 *
 * See: {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#anchor-6}
 *
 * @class
 *
 * @param {Object} options An object specifying the default options
 * @param {number} options.init The article identifier for which
 *   to retrieve data on construction.
 * @param {function} options.done The callback on receipt of
 *   data (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {RECLEVEL} options.reclevel Whether to return the brief
 *   or full record.
 * @param {INCLUDES[]} options.includes
 *
 * @property {string} id (brief) Trove newspaper article ID.
 * @property {string} heading (brief) The article heading.
 * @property {string} category (brief) The type of article
 * @property {Object} title (brief) The name and ID of the newspaper
 *   or periodical in which this article is found.
 * @property {string} title.id (brief) The Trove ID of the newspaper
 *   or periodical.
 * @property {string} title.value (brief) The name of the newspaper
 *   or periodical.
 * @property {string} edition (brief) Name of the special edition of
 *   the newspaper or periodical in which this article is found,
 *   if applicable.
 * @property {string} date (brief) The date of the issue in which
 *   this article was published.
 * @property {number} page (brief) The page on which this article
 *   appeared.
 * @property {number} pageSequence (brief)
 * @property {string} pageLabel (reclevel=full)
 * @property {string} status (brief) Included is the article is
 *   not currently available.
 * @property {string} relevance (brief, following search) How relevant
 *   this article is to the search.
 * @property {string} relevance.score (brief, following search) A
 *   numeric representation of how relevant this article is to the search.
 * @property {string} snippet (brief, following search) A small amount
 *   of text containing one or more of the search terms.
 * @property {string} troveUrl (brief)
 * @property {string} trovePageUrl (brief)
 * @property {string} supplement (reclevel=full)
 * @property {string} section (reclevel=full)
 * @property {string} illustrated (reclevel=full)
 * @property {number} wordCount (reclevel=full)
 * @property {number} correctionCount (reclevel=full)
 * @property {number} listCount (reclevel=full)
 * @property {number} tagCount (reclevel=full)
 * @property {number} commentCount (reclevel=full)
 * @property {Object[]} tag (include=tags)
 * @property {string} tag.lastupdated
 * @property {string} tag.value
 * @property {Object[]} comment (include=comments)
 * @property {string} comment.by
 * @property {string} comment.lastupdated
 * @property {string} comment.value
 * @property {Object[]} list (include=lists)
 * @property {string} list.by
 * @property {string} list.lastupdated
 * @property {string} list.url
 * @property {Object} lastCorrection (reclevel=full)
 * @property {string} lastCorrection.by (reclevel=full)
 * @property {string} lastCorrection.lastupdated (reclevel=full)
 * @property {string} identifier (reclevel=full)
 * @property {string} pdf (reclevel=full)
 * @property {string} articleText (include=articletext)
 */
class NewspaperArticle {

    constructor(options) {
        // console.log('Creating NewspaperArticle');

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
            this.get({ id: init });
        }
    }

    process_done(data) {
        $.extend(this, data.article);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {

        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Retrieve article information from Trove based on identifier.
     *
     * @param {Object} options The options object for the query.
     * @param {number} options.id The article ID for which to
     *   retrieve data.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     */
    get(options) {
        // console.log('Getting NewspaperArticle');
        // https://api.trove.nla.gov.au/v2/newspaper/18342701?key=<INSERT KEY>

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
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
            query_data.include = this.includes.join(',');
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_ARTICLE + this.id,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

    /**
     * Retrieve newspaper title information for the article
     *
     * @param {Object} options The options object for the query.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @returns {NewspaperTitle} The NewspaperTitle object that
     *   contains the NewspaperArticle.
     */
    get_newspaper(options) {
        // console.log('Get NewspaperTitle for Article');

        var done;
        if (options) done = options.done || this.done;

        if (this.title !== undefined) {
            if (this.title.id !== undefined) {
                return new _newspaper_title__WEBPACK_IMPORTED_MODULE_0__["NewspaperTitle"]({
                    init: this.title.id,
                    done: done || this.done
                });
            }
        }
    }

}

/***/ }),

/***/ "./src/newspaper_list.js":
/*!*******************************!*\
  !*** ./src/newspaper_list.js ***!
  \*******************************/
/*! exports provided: NewspaperList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperList", function() { return NewspaperList; });
/* harmony import */ var _newspaper_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newspaper_title */ "./src/newspaper_title.js");


/**
 * A list of Newspapers for a specific state or all states.
 * @class
 * @classdesc The NewspaperList class is a wrapper around the
 *   "https://api.trove.nla.gov.au/v2/newspaper/titles" API. If no state
 *   is specified on construction, you will have to call the get()
 *   method to actually request the data from Trove. If the state
 *   is specified on construction, the get() method will be
 *   called immediately.
 *
 *   Currently the Trove servers only give basic information on
 *   each newspaper title returned. If you want the list of years and
 *   issues, you'll have to call the {@link NewspaperTitle}.get()
 *   method directly, specifying includes and range.
 * @param {Object} options An object specifying the options for
 *   this NewspaperList.
 * @param {STATES} options.state The state for which the newspaper
 *   list will be returned (optional). If specified, the request
 *   will be made immediately.
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @property {NewspaperTitle[]} newspapers The list of
 *   [NewspaperTitles]{@link NewspaperTitle} returned from the query.
 */
class NewspaperList {

    constructor(options) {
        // console.log('Creating NewspaperList');

        // Save the options in the object.
        $.extend(this, options);

        // The list of newspapers, initially empty.
        this.newspapers = [];

        // If state is defined, get the data.
        if (this.state !== undefined) {
            this.get();
        }
    }

    process_done(data, textStatus, jqXHR) {

        // console.log('status', jqXHR.status);

        // Clear the previous results.
        this.newspapers = [];

        for (var index in data.response.records.newspaper) {
            // console.dir(data.response.records.newspaper[index]);
            this.newspapers.push(new _newspaper_title__WEBPACK_IMPORTED_MODULE_0__["NewspaperTitle"](data.response.records.newspaper[index]));
        }

        // console.log("total = " + data.response.records.total);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {

        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Get the data from the Trove server. If done or fail are set,
     *   they will be copied into the object, overwriting any
     *   existing callbacks.
     * @param {Object} options Options for the request.
     * @param {STATES} options.state The state for which to
     *   request data (optional). If not set, or set to ALL,
     *   all states will be returned.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    get(options) {
        // console.log('Getting NewspaperList');

        if (options) {
            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;

            // Override the state
            this.state = options.state || this.state;
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        if (this.state !== undefined && this.state != Trove.STATES.ALL) {
            query_data.state = this.state;
        }

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLES,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

}

/***/ }),

/***/ "./src/newspaper_title.js":
/*!********************************!*\
  !*** ./src/newspaper_title.js ***!
  \********************************/
/*! exports provided: NewspaperTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperTitle", function() { return NewspaperTitle; });
var STATEABBR = {
    'ACT': 'ACT',
    'National': 'NATIONAL',
    'New South Wales': 'NSW',
    'Northern Territory': 'NT',
    'Queensland': 'QLD',
    'South Australia': 'SA',
    'Tasmania': 'TAS',
    'Victoria': 'VIC',
    'Western Australia': 'WA'
};

/**
 * A class to hold an instance of a newspaper title.
 * @class
 * @classdesc The NewspaperTitle class is a wrapper around the
 *   "https://api.trove.nla.gov.au/v2/newspaper/title" API.
 *   The {@link NewspaperList} class will return a list of
 *   these objects for a state (or all states).
 * @param {Object} options The options used on construction. Every
 *   object property can be set on construction through this parameter.
 * @param {(number|string)} options.init If specified, will request
 *   the data immediately.
 * @property {string} id The Trove identifier for the newspaper title.
 * @property {string} title Name of the newpaper (or magazine).
 * @property {string} state The state in which the newspaper title was
 *   published.
 * @property {string} stateabbr An abbreviation for the state.
 * @property {number} issn International Standard Serial Number.
 * @property {string} troveURL A link to view the newspaper title in Trove.
 * @property {string} startDate The earliest publication date of this
 *   newspaper title available in Trove.
 * @property {string} endDate The most recent publication date of this
 *   newspaper title available in Trove.
 * @property {Object[]} year A list of the publication years for this newspaper
 *   title that are included in Trove.
 * @property {string} year.date A year this newspaper title was published
 * @property {string} year.issuecount The number of issues published in this
 *   year.
 * @property {Object[]} year.issue List of issues within the specified range.
 * @property {string} year.issue.id The Trove issue identifier.
 * @property {string} year.issue.date The data of the issue.
 * @property {string} year.issue.url The Trove URL for the issue.
 */
class NewspaperTitle {

    constructor(options) {
        // console.log('Creating NewspaperTitle ');

        // Save and remove init from options.
        var init;
        if (options.init !== undefined) {
            init = options.init;
            delete options.init;
        }

        // Save all other options as part of this object.
        $.extend(this, options);
        if (this.state) this.stateabbr = STATEABBR[this.state];

        // If init was specified, treat it as the identifier.
        if (init !== undefined) {
            this.get({ id: init });
        }
    }

    /**
     * Get information about the specified newspaper title from Trove.
     * @param {Object} options
     * @param {(number|string)} options.id The identifier of the newspaper
     *   title to retrieve. If not specified, will fall back to the id set
     *   on construction. (optional)
     * @param {INCLUDES[]} options.includes The data to include in
     *   the results. Trove currently only supports
     *   {@link INCLUDES}.YEARS.
     * @param {string} options.range If YEARS is included, return a list of
     *   publication dates in the given range. Of the form: YYYYMMDD-YYYYMMDD.
     */
    get(options) {
        // https://api.trove.nla.gov.au/v2/newspaper/title/35?encoding=json

        if (options) {
            this.id = options.id || this.id;
            this.range = options.range || this.range;
            this.includes = options.includes || this.includes;
            this.done = options.done || this.done;
            this.fail = options.fail || this.fail;
        }

        // console.log('Getting NewspaperTitle', this.id);

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json'
        };

        // What to include
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
            query_data.include = this.includes.join(',');
        }

        // What range
        if (this.range !== undefined) {
            query_data.range = this.range;
        }

        // console.log(JSON.stringify(query_data, null, '\t'));

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.NP_TITLE + this.id,
            data: query_data,
            context: this
        }).done(function (data, textStatus, jqXHR) {
            // console.log('Got NewspaperTitle');
            // console.log('status', jqXHR.status);
            $.extend(this, data.newspaper);
            if (this.state) this.stateabbr = STATEABBR[this.state];
            if (this.done !== undefined) {
                this.done(this);
            }
        });
    }

}

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
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
class Person {
    constructor(options) {
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
            this.get({ id: init });
        }
    }

    process_done(data) {
        $.extend(this, data.people);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {
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
    get(options) {
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
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
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

/***/ }),

/***/ "./src/picture.js":
/*!************************!*\
  !*** ./src/picture.js ***!
  \************************/
/*! exports provided: Picture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work */ "./src/work.js");


/**
 * A class to hold a picture
 * @class
 * @augments Work
 * @param {Object} options
 */
class Picture extends _work__WEBPACK_IMPORTED_MODULE_0__["Work"] {

    constructor(options) {
        super(options);
        // console.log('Creating Picture');
    }

}

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: CONSTRUCTORS, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTORS", function() { return CONSTRUCTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/article.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/book.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./src/collection.js");
/* harmony import */ var _gazette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gazette */ "./src/gazette.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music */ "./src/music.js");
/* harmony import */ var _newspaper_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newspaper_article */ "./src/newspaper_article.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./person */ "./src/person.js");
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./picture */ "./src/picture.js");











// Mapping of zones to constructors for those zones.
// Used by Search to create objects on receipt of results.
var CONSTRUCTORS = {
    book: _book__WEBPACK_IMPORTED_MODULE_1__["Book"],
    picture: _picture__WEBPACK_IMPORTED_MODULE_9__["Picture"],
    article: _article__WEBPACK_IMPORTED_MODULE_0__["Article"],
    music: _music__WEBPACK_IMPORTED_MODULE_6__["Music"],
    map: _map__WEBPACK_IMPORTED_MODULE_5__["Map"],
    collection: _collection__WEBPACK_IMPORTED_MODULE_2__["Collection"],
    newspaper: _newspaper_article__WEBPACK_IMPORTED_MODULE_7__["NewspaperArticle"],
    gazette: _gazette__WEBPACK_IMPORTED_MODULE_3__["Gazette"],
    list: _list__WEBPACK_IMPORTED_MODULE_4__["List"],
    people: _person__WEBPACK_IMPORTED_MODULE_8__["Person"]
    // contributor: Contributor,
    // newspaper_title: NewspaperTitle,
    // work: Work,
};

/**
 * An object to perform searches
 * @class
 * @param {Object} options An object specifying the options for this
 *   Search
 * @param {ZONES[]} options.zones The list of zones to search
 * @param {function} options.done The callback on receipt of data
 *   (optional).
 * @param {function} options.fail The callback on failure (optional).
 * @param {string} options.terms The search terms
 *
 * @property {Object} response The raw response from the server.
 * @property {Object[]} items The object containing the items created from
 *   the raw response.
 * @property {FACETS[]} facets The list of facets to include in
 *   the data returned.
 * @property {Object} limits The limits imposed on the search.
 */
class Search {

    constructor(options) {
        // console.log('Creating Search');

        // copy everything from options to this object
        $.extend(this, options);

        // The raw response from the query
        this.response = undefined;

        this.items = {};

        // The v2 API allows multiple zones to be searched when s=*,
        // but subsequent searches (next|previous) must be a single zone.
        // To allow stepping back and forward within zones we must store
        // the cursor values as a list and keep a track of where we are.
        this.cursors = {};
        this.indices = {};

        // The parameters of the last search
        // Used to request previous and next results.
        this._last_search = undefined;

        this.facets = [];
        this.limits = {};
    }

    /**
     * Return the array of items returned by the most recent query
     *   in the specified zone.
     * @param {ZONES} zone The zone for which the array should be
     *   returned.
     * @returns {Object[]}
     */
    zone_list(zone) {
        return this.items[zone] || [];
    }

    /*
     * Process the returned data, creating an object for each item.
     */
    process_done(data) {
        // console.log('Got Search Query');
        var zone_items;
        var zone_name;

        this.items = {}; // Clear the last lot of results

        this.response = data.response; // Store the raw response

        // The raw response has the following structure
        // response
        //   query
        //   zone []
        //     name
        //     records
        //       n
        //       next
        //       nextStart
        //       s
        //       total
        //       work|article|list|people []

        for (var zone_num in this.response.zone) {

            // Get the name of the zone we're dealing with
            zone_name = this.response.zone[zone_num].name;

            // Create an empty list for this zone
            this.items[zone_name] = [];

            // If we don't have a cursor for this zone, seed the list with
            // the current starting position (probably *) and set the index=0
            if (this.cursors[zone_name] === undefined) {
                console.log("Creating cursor list for", zone_name);
                this.cursors[zone_name] = [this.response.zone[zone_num].records.s];
                this.indices[zone_name] = 0;
            }

            // Only add the nextStart if we're at the end of the list.
            // If we're not at the end of the list it means that we've stepped
            // to a previous result and we shouldn't be modifying the list.
            //
            if (this.indices[zone_name] == this.cursors[zone_name].length - 1) {
                this.cursors[zone_name].push(this.response.zone[zone_num].records.nextStart);
            }

            console.log(this.cursors[zone_name]);

            // Access the list at work|article|list|people
            zone_items = this.response.zone[zone_num].records[Trove.SEARCH_RECORDS[zone_name]];

            // Iterate over this list adding them to our items object.
            for (var item_num in zone_items) {
                this.items[zone_name].push(new CONSTRUCTORS[zone_name](zone_items[item_num]));
            }
        }

        if (this.done !== undefined) {
            this.done(this);
        }
    }

    process_fail(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);

        if (this.fail !== undefined) {
            this.fail(this);
        }
    }

    /**
     * Remove the named facet.
     * @param {FACETS} facet The name of the facet to remove
     */
    remove_facet(facet) {
        if (this.facets.indexOf(facet) != -1) {
            this.facets.splice(this.facets.indexOf(facet), 1);
        }
    }

    /**
     * Add the named facet.
     * @param {FACETS} facet The name of the facet to add
     */
    add_facet(facet) {
        this.facets.push(facet);
    }

    /**
     * Clear the date range limits.
     */
    clear_date_range_limit() {
        if (this.limits.decade !== undefined) delete this.limits.decade;
        if (this.limits.year !== undefined) delete this.limits.year;
        if (this.limits.month !== undefined) delete this.limits.month;
    }

    /**
     * Set the limits on the date range returned
     * @param {string} start The date limit, one of: YYY for decade,
     *   YYYY for year, or YYYY-MM for month
     */
    limit_date_range(start) {
        var split_start = start.split('-');
        if (split_start.length >= 1) {
            if (split_start[0].length == 3) {
                this.limits.decade = split_start[0];
            } else if (split_start[0].length == 4) {
                this.limits.decade = split_start[0].substr(0, 3);
                this.limits.year = split_start[0];
            }
        }

        if (split_start.length >= 2) {
            this.limits.month = split_start[1];
        }
    }

    clear_category_limit() {
        if (this.limits.category !== undefined) delete this.limits.category;
    }

    limit_category(category) {
        this.limits.category = category;
    }

    /**
     * Query the Trove database.
     *
     * @param {Object} options An object containing, at least, the terms to
     *   search for.
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {ZONES[]} options.zones The list of zones to search
     *   (mandatory).
     * @param {string} options.terms The search terms (mandatory).
     * @param {number} options.start Return records starting at this point
     *  (optional, default=*).
     * @param {number} options.number Return this number of records
     *   (max. 100, optional, default=20).
     * @param {SORTBY} options.sort Sort the results according to this
     *   parameter (optional, default={@link SORTBY}.RELEVANCE).
     * @param {RECLEVEL} options.reclevel Whether to return the brief
     *   or full record.
     * @param {INCLUDES[]} options.includes
     * @param {Object} options.limits Limit the search results
     *   (optional, see {@link LIMITS}).
     * @param {FACETS[]} options.facets
     */
    query(options) {

        // console.log('Querying Search');

        if (options === undefined) {
            console.error('options is undefined');
            return;
        }

        // Override reclevel, includes, done and fail if specified
        this.reclevel = options.reclevel || this.reclevel;
        this.includes = options.includes || this.includes;
        this.done = options.done || this.done;
        this.fail = options.fail || this.fail;

        // Override zones, terms and facets if specified.
        this.zones = options.zones || this.zones;
        this.terms = options.terms || this.terms;
        this.facets = options.facets || this.facets;

        // Get the zone or zones for the query.
        // The default is ZONES.ALL.
        var zones = Trove.ZONES.ALL;
        if (Array.isArray(this.zones)) {
            zones = this.zones.join(',');
        }

        var query_data = {
            key: Trove.trove_key,
            encoding: 'json',
            zone: zones,
            q: this.terms,
            s: '*',
            n: 20,
            bulkHarvest: false
        };

        // Where to start
        if (options.start !== undefined) {
            query_data.s = options.start;
        }

        if (options.nextStart !== undefined) {
            query_data.nextStart = options.nextStart;
        }

        // How many to return
        if (options.number !== undefined) {
            query_data.n = options.number;
        }

        // In what sort order
        if (options.sort !== undefined) {
            query_data.sortby = options.sort;
        }

        if (options.bulkHarvest !== undefined) {
            query_data.bulkHarvest = options.bulkHarvest;
        }

        // Full or brief
        if (options.reclevel !== undefined) {
            query_data.reclevel = options.reclevel;
        }

        // What to include
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
            query_data.include = this.includes.join(',');
        }

        // What facets of the data to return
        if (this.facets !== undefined && Array.isArray(this.facets) && this.facets.length > 0) {
            query_data.facet = this.facets.join(',');
        }

        // What limits apply to the search
        var limits;
        var limit_keys;
        if (options.limits !== undefined) {
            limit_keys = Object.keys(options.limits);
            limits = options.limits;
        } else {
            limit_keys = Object.keys(this.limits);
            limits = this.limits;
        }
        if (limit_keys.length > 0) {
            for (var index in limit_keys) {
                query_data['l-' + limit_keys[index]] = limits[limit_keys[index]];
            }
        }

        this._last_search = query_data;

        $.ajax({
            dataType: "jsonp",
            url: Trove.API.QUERY,
            data: query_data,
            context: this
        }).done(this.process_done).fail(this.process_fail);
    }

    /**
     * Repeat the last query, with a delta applied to the start.
     * @param {Object} options Options to be applied to the query
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     * @param {number} delta The change to be applied to the start number
     *   (positive or negative).
     */
    requery(zone, options) {
        console.log("Requery called");

        if (options) {
            // Override the done callback
            this.done = options.done || this.done;

            // Override the fail callback
            this.fail = options.fail || this.fail;
        }

        if (this._last_search !== undefined) {

            this._last_search.s = this.cursors[zone][this.indices[zone]];

            $.ajax({
                dataType: "jsonp",
                url: Trove.API.QUERY,
                data: this._last_search,
                context: this
            }).done(this.process_done).fail(this.process_fail);
        }
    }

    /**
     * Request the next search results
     *
     * Although an initial search may cover more than one zone, getting
     * results through this interface must specify a singe zone.
     *
     * @param {string} zone The zone in which to get the results.
     * @param {Object} options Options to be applied to the query
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    next(zone, options) {
        console.log("Next called");
        console.log(zone, "index is", this.indices[zone]);
        console.log(zone, "cursor length is", this.cursors[zone].length);
        if (this.indices[zone] < this.cursors[zone].length - 1) {
            console.log("Current index", this.indices[zone]);
            this.indices[zone]++;
            console.log("New index", this.indices[zone]);
            this.requery(zone, options);
        }
        // if (this._last_search !== undefined) {
        //     this.requery(options, zone, this._last_search.n);
        // }
    }

    /**
     * Request the previous search results.
     *
     * Although an initial search may cover more than one zone, getting
     * results through this interface must specify a singe zone.
     *
     * @param {string} zone The zone in which to get the results.
     * @param {Object} options Options to be applied to the query
     * @param {function} options.done The callback on receipt of data
     *   (optional).
     * @param {function} options.fail The callback on failure (optional).
     */
    previous(zone, options) {
        console.log("Previous called");
        console.log(zone, "index is", this.indices[zone]);
        console.log(zone, "cursor length is", this.cursors[zone].length);
        if (this.indices[zone] > 0) {
            console.log("Current index", this.indices[zone]);
            this.indices[zone]--;
            console.log("New index", this.indices[zone]);
            this.requery(zone, options);
        }
        // if (this._last_search !== undefined) {
        //     this.requery(options, zone, -this._last_search.n);
        // }
    }

    newspaper_articles() {
        // The Search object just
        return [];
    }

}

/***/ }),

/***/ "./src/trove.js":
/*!**********************!*\
  !*** ./src/trove.js ***!
  \**********************/
/*! exports provided: Article, Book, Collection, Contributor, ContributorList, Gazette, List, Map, Music, NewspaperArticle, NewspaperList, NewspaperTitle, Person, Picture, Search, trove_key, init, ZONES, FORMATS, AVAILABILITIES, VENDORS, AUDIENCES, CATEGORIES, FACETS, LIMITS, SORTBY, RECLEVEL, INCLUDES, STATES, SEARCH_RECORDS, RECORD_TYPE, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trove_key", function() { return trove_key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZONES", function() { return ZONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMATS", function() { return FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVAILABILITIES", function() { return AVAILABILITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VENDORS", function() { return VENDORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDIENCES", function() { return AUDIENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACETS", function() { return FACETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMITS", function() { return LIMITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTBY", function() { return SORTBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECLEVEL", function() { return RECLEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCLUDES", function() { return INCLUDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_RECORDS", function() { return SEARCH_RECORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECORD_TYPE", function() { return RECORD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/article.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _article__WEBPACK_IMPORTED_MODULE_0__["Article"]; });

/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/book.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _book__WEBPACK_IMPORTED_MODULE_1__["Book"]; });

/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./src/collection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _collection__WEBPACK_IMPORTED_MODULE_2__["Collection"]; });

/* harmony import */ var _contributor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contributor */ "./src/contributor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contributor", function() { return _contributor__WEBPACK_IMPORTED_MODULE_3__["Contributor"]; });

/* harmony import */ var _contributor_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contributor_list */ "./src/contributor_list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContributorList", function() { return _contributor_list__WEBPACK_IMPORTED_MODULE_4__["ContributorList"]; });

/* harmony import */ var _gazette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gazette */ "./src/gazette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gazette", function() { return _gazette__WEBPACK_IMPORTED_MODULE_5__["Gazette"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_6__["List"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map__WEBPACK_IMPORTED_MODULE_7__["Map"]; });

/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music */ "./src/music.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Music", function() { return _music__WEBPACK_IMPORTED_MODULE_8__["Music"]; });

/* harmony import */ var _newspaper_article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newspaper_article */ "./src/newspaper_article.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewspaperArticle", function() { return _newspaper_article__WEBPACK_IMPORTED_MODULE_9__["NewspaperArticle"]; });

/* harmony import */ var _newspaper_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newspaper_list */ "./src/newspaper_list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewspaperList", function() { return _newspaper_list__WEBPACK_IMPORTED_MODULE_10__["NewspaperList"]; });

/* harmony import */ var _newspaper_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newspaper_title */ "./src/newspaper_title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewspaperTitle", function() { return _newspaper_title__WEBPACK_IMPORTED_MODULE_11__["NewspaperTitle"]; });

/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./person */ "./src/person.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return _person__WEBPACK_IMPORTED_MODULE_12__["Person"]; });

/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./picture */ "./src/picture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return _picture__WEBPACK_IMPORTED_MODULE_13__["Picture"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_14__["Search"]; });

/**
 * @copyright Chris Willoughby 2015
 */
















//Public Property
var trove_key = '';

/**
 * @param {string} key The Trove API key given to you by the National
 *   Library of Australia.
 *
 * This function should be called before any queries are made to the
 *   Trove servers.
 */
function init(key) {
  // console.log("INIT called");
  trove_key = key;
}

var ENC = '&encoding=json';

/**
 * Enumeration for zones, can include multiple as a list
 * @namespace
 * @readonly
 * @enum {string}
 * @property {string} BOOK The zone for books.
 * @property {string} PICTURE The zone for pictures
 * @property {string} ARTICLE The zone for journal articles
 * @property {string} MUSIC The zone for music
 * @property {string} MAP The zone for maps
 * @property {string} COLLECTION The zone for collections
 * @property {string} NEWSPAPER The zone for newspapers
 * @property {string} GAZETTE The zone for government gazettes
 * @property {string} LIST The zone for lists
 * @property {string} PEOPLE The zone for people
 * @property {string} ALL All of the above
 */
var ZONES = {
  BOOK: 'book',
  PICTURE: 'picture',
  ARTICLE: 'article',
  MUSIC: 'music',
  MAP: 'map',
  COLLECTION: 'collection',
  NEWSPAPER: 'newspaper',
  GAZETTE: 'gazette',
  LIST: 'list',
  PEOPLE: 'people', // not supported?
  ALL: 'all'
};

/**
 * Enumeration for formats.
 * See {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#formats}
 * Used for facets and limits.
 * @readonly
 * @enum {string}
 */
var FORMATS = {
  WEBSITE: 'Archived website',
  ARTWORK: 'Art work',
  ARTICLE: 'Article',
  ARTICLEABSTRACT: 'Article/Abstract',
  ARTICLECHAPTER: 'Article/Book chapter',
  ARTICLEPAPER: 'Article/Conference paper',
  ARTICLEJOURNAL: 'Article/Journal or magazine article',
  ARTICLEOTHER: 'Article/Other article',
  ARTICLEREPORT: 'Article/Report',
  ARTICLEREVIEW: 'Article/Review',
  ARTICLEWORKING: 'Article/Working paper',
  AUDIOBOOK: 'Audio book',
  BOOK: 'Book',
  BOOKBRAILLE: 'Book/Braille',
  BOOKILLUSTRATED: 'Book/Illustrated',
  BOOKLARGEPRINT: 'Book/Large print',
  PROCEEDINGS: 'Conference Proceedings',
  DATASET: 'Data set',
  MAP: 'Map',
  MAPAERIAL: 'Map/Aerial photograph',
  MAPATLAS: 'Map/Atlas',
  MAPBRAILLE: 'Map/Braille',
  MAPELECTRONIC: 'Map/Electronic',
  MAPGLOBE: 'Map/Globe or object',
  MAPLARGE: 'Map/Large print',
  MAPSERIES: 'Map/Map series',
  MAPMICROFORM: 'Map/Microform',
  MAPSINGLE: 'Map/Single map',
  OBJECT: 'Object',
  PERIODICAL: 'Periodical',
  PERIODICALJOURNAL: 'Periodical/Journal, magazine, other',
  PERIODICALNEWSPAPER: 'Periodical/Newspaper',
  PHOTO: 'Photograph',
  POSTER: 'Poster, chart, other',
  PUBLISHED: 'Published',
  SHEETMUSIC: 'Sheet music',
  SOUND: 'Sound',
  SOUNDTALK: 'Sound/Interview, lecture, talk',
  SOUNDOTHER: 'Sound/Other sound',
  SOUNDMUSIC: 'Sound/Recorded music',
  THESIS: 'Thesis',
  UNPUBLISHED: 'Unpublished',
  VIDEO: 'Video',
  VIDEOCAPTIONED: 'Video/Captioned'
};

/**
 * (book, picture, article, music, map, collection, list) Enumeration for availability.
 *
 * Used for facets and limits.
 *
 * @readonly
 * @enum {string}
 */
var AVAILABILITIES = {
  /** Online. */
  ONLINE: 'y',
  /** Freely accessible online. */
  FREE_ACCESS: 'y/f',
  /** Payment, subscription or membership required. */
  MEMBERSHIP: 'y/r',
  /** Subscription required. */
  SUBSCRIPTION: 'y/s',
  /** Possibly online. */
  POSSIBLY: 'y/u'
};

/**
 * (article) The vendor who sells subscriptions to access a database
 *   containing these articles.
 *
 * Used for facets and limits.
 *
 * @readonly
 * @enum {string}
 */
var VENDORS = {
  GALE: "GALE",
  INFORMIT: "Informit"
};

/**
 * (article) Only applies to articles from Gale.
 *
 * Used for facets and limits.
 *
 * @readonly
 * @enum {string}
 * @property {string} TRADE Trade
 * @property {string} GENERAL General
 * @property {string} ACADEMIC Academic
 * @property {string} PROFESSIONAL Professional
 * @property {string} CHILDREN Children's
 * @property {string} CHILDRENUPPER Children's - Upper elementry
 * @property {string} CHILDRENLOWER Children's - Lower elementry
 */
var AUDIENCES = {
  TRADE: "Trade",
  GENERAL: "General",
  ACADEMIC: "Academic",
  PROFESSIONAL: "Professional",
  CHILDREN: "Children's",
  CHILDRENUPPER: "Children's - Upper elementry",
  CHILDRENLOWER: "Children's - Lower elementry"
};

/**
 * Enumeration for NewspaperArticle and Gazette categories. Returned as
 *   part of the brief record for NewspaperArticle and Gazette, and may
 *   also be used to limit the results of a search using
 *   {@link LIMITS}.CATEGORY.
 *
 * Used for facets and limits.
 *
 * @readonly
 * @enum {string}
 * @property {string} ARTICLE Classified as an article (newspaper).
 * @property {string} ADVERTISING Classified as advertising (newspaper).
 * @property {string} LISTS Classified as a list (newspaper).
 * @property {string} FAMILY_NOTICES Classified as family notices (newspaper).
 * @property {string} LITERATURE Classified as literature (newspaper).
 * @property {string} NOTICES Classified as notices (gazettes).
 * @property {string} TENDERS Classified as Tenders and Contracts (gazettes).
 * @property {string} PROCLAMATIONS Classified as Proclamations And Legislation (gazettes).
 * @property {string} PRIVATE Classified as Private Notices (gazettes).
 * @property {string} BUDGET Classified as Budgetary Papers (gazettes).
 * @property {string} INDEX Classified as Index And Contents (gazettes).
 * @property {string} APPOINTMENTS Classified as Appointments And Employment (gazettes).
 * @property {string} FOI Classified as Freedom Of Information (gazettes).
 */
var CATEGORIES = {
  ARTICLE: 'Article',
  ADVERTISING: 'Advertising',
  LISTS: 'Detailed lists, results, guides',
  FAMILY_NOTICES: 'Family Notices',
  LITERATURE: 'Literature',

  NOTICES: 'Government Gazette Notices',
  TENDERS: 'Government Gazette Tenders and Contracts',
  PROCLAMATIONS: 'Government Gazette Proclamations And Legislation',
  PRIVATE: 'Government Gazette Private Notices',
  BUDGET: 'Government Gazette Budgetary Papers',
  INDEX: 'Government Gazette Index And Contents',
  APPOINTMENTS: 'Government Gazette Appointments And Employment',
  FOI: 'Government Gazette Freedom Of Information'
};

/**
 * Enumeration for facets.
 *
 * See {@link http://help.nla.gov.au/trove/building-with-trove/api-version-2-technical-guide#facetValues}
 *
 * Facets are categories that describe all the records in a particular
 *   result set. For example, if you have 10 results, you can check the
 *   format facet to find out that 8 are books and 2 are theses. You could
 *   also modify your search to retrieve only the theses, or only the books.
 * @readonly
 * @enum {string}
 */
var FACETS = {

  /**
   * (book, picture, article, music, map, collection)
   *   The format of the resource. For example, is it a book or a
   *   piece of sheet music? See {@link FORMATS}.
   */
  FORMAT: 'format',

  /**
   * (book, picture, article, music, map, collection, newspaper, gazette, list)
   *   Publication decade. e.g 199 represents 1990 – 1999.
   */
  DECADE: 'decade', //YYY

  /**
   * (book, picture, article, music, map, collection, newspaper, gazette, list)
   *   Publication year. For newspapers, only available if the decade
   *   facet is also applied.
   */
  YEAR: 'year',

  /**
   * (newspaper, gazette)
   *   Publication month. Only available if the year facet is also
   *   applied
   */
  MONTH: 'month', //

  /**
   * (book, picture, article, music, map, collection)
   */
  LANGUAGE: 'language',

  /**
   * (book, picture, article, music, map, collection, list)
   *   Whether the item is online or not. See
   *   {@link AVAILABILITIES}.
   */
  AVAILABILITY: 'availability',
  /**
   * (book, picture, article, music, map, collection)
   *   Works identified as published primarily in Australia, or
   *   written by Australians
   */
  AUSTRALIAN: 'australian',
  /**
   * (collection)
   */
  OCCUPATION: 'occupation',
  /**
   * (map) Map scale
   */
  ZOOM: 'zoom',
  /**
   * (article) Database code
   */
  VENDORDB: 'vendordb',
  /**
   * (article) The vendor who sells subscriptions to access a database
   *   containing these articles. See {@link VENDORS}.
   */
  VENDOR: 'vendor',
  /**
   * (article) Only applies to articles from Gale. See
   *   {@link AUDIENCES}.
   */
  AUDIENCE: 'audience',
  /**
   * (newspaper, gazette) The newspaper title id.
   */
  TITLE: 'title',

  /**
   * (newspaper, gazette) Newspaper article category. See
   *   {@link CATEGORIES}.
   */
  CATEGORY: 'category',

  /**
   * (newspaper, gazette) Is a newspaper article illustrated?
   */
  ILLUSTRATED: 'illustrated',

  /**
   * (newspaper, gazette) Type of illustration for newspaper article. Only available if illustrated facet is applied
   */
  ILLTYPE: 'illtype',

  /**
   * (newspaper, gazette) Newspaper or gazette article word count.
   */
  WORD: 'word',

  /**
   * (newspaper, gazette) State of publication for newspaper or gazette article.
   */
  STATE: 'state',

  /**
   * All of the above.
   */
  ALL: 'all'
};

/**
 * Enumeration for limiting the results of a search.
 * @readonly
 * @enum {string}
 */
var LIMITS = {
  /** Limit by format. */
  FORMAT: 'l-format',
  /** Limit by decade. In the form of YYY e.g. 190 is the 1900s. */
  DECADE: 'l-decade',
  /** Limit by year: limit by decade must also be set. In the form of YYYY. */
  YEAR: 'l-year',
  /** Limit by month: limit by decade and year must also be set. Only applies to the newspaper zone. */
  MONTH: 'l-month',
  /** Limit by language */
  LANGUAGE: 'l-language',
  /** Limit by availability (whether online or not) */
  AVAILABILITY: 'l-availability',
  /** Limit by whether the work is Australian */
  AUSTRALIAN: 'l-australian',
  /** Limit by occupation. Only applies to the collection zone. */
  OCCUPATION: 'l-occupation',
  /** Limit by map scale. Only applies to the map zone. */
  ZOOM: 'l-zoom',
  /** Limit by vendor database code. */
  VENDORDB: 'l-vendordb',
  /** Limit by vendor. */
  VENDOR: 'l-vendor',
  /** Limit by audience */
  AUDIENCE: 'l-audience',
  /** Limit by title */
  TITLE: 'l-title',
  /** Limit by category */
  CATEGORY: 'l-category',
  /** Limit by illustration */
  ILLUSTRATED: 'l-illustrated',
  /** Limit by illustration type */
  ILLTYPE: 'l-illtype',
  /** Limit by word */
  WORD: 'l-word',
  /** Limit by state */
  STATE: 'l-state',
  /** Limit by all */
  ALL: 'l-all'
};

/**
 * Enumeration for sort order.
 * @readonly
 * @enum {string}
 */
var SORTBY = {
  /** Sort by date (descending). */
  DATEDESC: 'datedesc',
  /** Sort by date (ascending). */
  DATEASC: 'dateasc',
  /** Sort by relevance. */
  RELEVANCE: 'relevance'
};

/**
 * Enumeration for record level
 * @readonly
 * @enum {string}
 */
var RECLEVEL = {
  /**
   * Get the full metadata (excluding all links, version level records,
   *   tags and comments).
   */
  FULL: 'full',
  /** Get the brief metadata. */
  BRIEF: 'brief'
};

/**
 * Enumeration for includes, can include multiple as a list.
 * @readonly
 * @enum {string}
 */
var INCLUDES = {
  /**
   * (Book, Picture, Article, Music, Map, Collection, NewspaperArticle,
   *   List)
   *   Include any public tags on this item.
   */
  TAGS: 'tags',
  /**
   * (Book, Picture, Article, Music, Map, Collection, NewspaperArticle,
   *   List)
   *   Include any public comments on this item.
   */
  COMMENTS: 'comments',
  /**
   * (Book, Picture, Article, Music, Map, Collection, NewspaperArticle)
   *   Include the name and ID of any public lists this item belongs to.
   */
  LISTS: 'lists',
  /** (Book, Picture, Article, Music, Map, Collection) Include information on which organisations have a copy of this item or version. */
  HOLDINGS: 'holdings',
  /** (Book, Picture, Article, Music, Map, Collection) Include the URLs for the item. */
  LINKS: 'links',
  /** (Book, Picture, Article, Music, Map, Collection) Include the subsribing organisation NUC ID and links. */
  SUBSCRIBINGLIBS: 'subscribinglibs',
  /** (Book, Picture, Article, Music, Map, Collection) Include all versions that make up this item. */
  WORKVERSIONS: 'workversions',
  /** (NewspaperArticle) Include the full text for this digitised newspaper article. */
  ARTICLETEXT: 'articletext',
  /** (Newspapers only) Include a list of years for which digitised articles from this newspaper title appear in Trove. */
  YEARS: 'years',
  /** (List only) Include the brief works, articles, people, external websites that belong to this list. */
  LISTITEMS: 'listitems',
  /**
   * (All) Include all of the above.
   */
  ALL: 'all'
};

/**
 * Enumeration for Australian states. Used to specify a state for which
 *   to return {@link Newspaper} titles using the
 *   {@link NewspaperList} class. To return all
 *   [Newspapers]{@link Newspaper} for all states, do not specify
 *   a state when making the query via {@link NewspaperList} or
 *   use ALL.
 * @readonly
 * @enum {string}
 */
var STATES = {
  /** New South Wales. */
  NSW: 'nsw',
  /** Australian Capital Territory. */
  ACT: 'act',
  /** Queensland. */
  QLD: 'qld',
  /** Tasmania. */
  TAS: 'tas',
  /** South Australia. */
  SA: 'sa',
  /** Northern Territory. */
  NT: 'nt',
  /** Western Australia. */
  WA: 'wa',
  /** Victoria. */
  VIC: 'vic',
  /** National newspapers (not the same as all states). */
  NATIONAL: 'national',
  /** All states. */
  ALL: ''
};

/*
 * Mapping between zone name and record list name
 */
var SEARCH_RECORDS = {
  people: 'people',
  list: 'list',
  newspaper: 'article',
  gazette: 'article',
  article: 'work',
  collection: 'work',
  book: 'work',
  picture: 'work',
  map: 'work',
  music: 'work'
};

// Base URL for Trove
var API_ADDRESS = 'https://api.trove.nla.gov.au/v2/';

var RECORD_TYPE = {
  WORK: 'work/',
  NEWS: 'newspaper/',
  GAZETTE: 'newspaper/',
  LIST: 'list/',
  CONTRIBUTOR: 'contributor',
  PEOPLE: 'people/' // This is not supported by the Trove API.
};

var API = {
  WORK: API_ADDRESS + RECORD_TYPE.WORK,
  LIST: API_ADDRESS + RECORD_TYPE.LIST,
  NP_ARTICLE: API_ADDRESS + RECORD_TYPE.NEWS,
  NP_TITLE: API_ADDRESS + RECORD_TYPE.NEWS + 'title/',
  NP_TITLES: API_ADDRESS + RECORD_TYPE.NEWS + 'titles',
  GAZETTE: API_ADDRESS + RECORD_TYPE.GAZETTE,
  CONTRIBUTOR: API_ADDRESS + RECORD_TYPE.CONTRIBUTOR,
  PEOPLE: API_ADDRESS + RECORD_TYPE.PEOPLE,
  QUERY: API_ADDRESS + 'result'
};

/***/ }),

/***/ "./src/work.js":
/*!*********************!*\
  !*** ./src/work.js ***!
  \*********************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
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
class Work {

    /**
     * Create a Work object instance.
     */
    constructor(options) {
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
            this.get({ id: init });
        }
    }

    /**
     * Internal
     */
    process_done(data) {
        $.extend(this, data.work);
        if (this.done !== undefined) {
            this.done(this);
        }
    }

    /**
     * Internal
     */
    process_fail(jqXHR, textStatus, errorThrown) {
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
    get(options) {
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
        if (this.includes !== undefined && Array.isArray(this.includes) && this.includes.length > 0) {
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

/***/ })

/******/ });
});
//# sourceMappingURL=trove-api.js.map