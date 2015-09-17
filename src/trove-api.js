/**
 * Trove Module
 * @module Trove
 */
( // Module boilerplate to support browser globals and browserify and AMD.
    typeof define === "function" ? function(m) {
        define("trove-api", m);
    } : typeof exports === "object" ? function(m) {
        module.exports = m();
    } : function(m) {
        this.Trove = m();
    }
)(function() {

    var exports = {};

    "use strict";

    // Store the key here
    var key_str = "";

    /**
     * @function init
     * @param {string} key The Trove API key given to you by the National Library of Australia.
     */
    exports.init = function init (key) {
        key_str = "?key=" + key;
    }

    var ENC = '&encoding=json';

    var ZONE = {
        BOOK: 'book',
        PIC: 'picture',
        ART: 'article',
        MUS: 'music',
        MAP: 'map',
        COLL: 'collection',
        NEWS: 'newspaper',
        LIST: 'list',
        ALL: 'all'
    };

    var RECORD_TYPE = {
            WORK: 'work',
            NEWS: 'newspaper',
            LIST: 'list'
    };

    var API = {
        NP_BASE : 'http://api.trove.nla.gov.au/newspaper/',
        NP_QUERY : 'http://api.trove.nla.gov.au/newspaper/title/',
        NL_QUERY : 'http://api.trove.nla.gov.au/newspaper/titles',
        // http://api.trove.nla.gov.au/result?key=<INSERT KEY>&zone=book&q=tangled
    };

    function Zone (options) {

    }

    Zone.prototype.query = function (query, options) {

    };

    /**
     * An object to hold a newspaper article
     * @constructor
     * @param {Object} options
     *      identifier : the article identifier
     */
    exports.NewspaperArticle = NewspaperArticle;
    function NewspaperArticle (options, done) {
        console.log('Creating NewspaperArticle');
        $.extend(this, options);
        if (this.identifier != undefined) {
            this.get(this.identifier, done);
        }
    }

    /**
     * Retrieve article information based on identifier
     * @param {Number} identifier
     * @param {function} done
     */
    exports.NewspaperArticle.prototype.get = function (identifier, done) {
        console.log('Getting NewspaperArticle');
        // http://api.trove.nla.gov.au/newspaper/18342701?key=<INSERT KEY>
        var url = API.NP_BASE + identifier + key_str + ENC;
        $.ajax({
            dataType : "jsonp",
            url : url,
            context : this
        }).done(function (data) {
            console.log('Got NewspaperArticle');
            $.extend(this, data.article);
            if (done != undefined) done(this);
            // console.dir(this);
        });
    };

    /**
     * Retrieve newspaper information for the article
     * @param {function} done
     * @returns {Newspaper} the Newspaper object
     */
    exports.NewspaperArticle.prototype.get_newspaper = function(done) {
        console.log('Get Newspaper for Article');
        if (this.title != undefined) {
            if (this.title.id != undefined) {
                return new Newspaper(
                    {identifier: this.title.id},
                    done);
            }
        }
    };

    /**
     * An object to hold an instance of a newspaper
     * @constructor
     * @param {Object} options
     * id
     * title
     * state
     * issn
     * troveUrl
     * startDate
     * endDate
     */
    exports.Newspaper = Newspaper;
    function Newspaper (options, done) {
        console.log('Creating Newspaper');
        $.extend(this, options);
        if (this.identifier != undefined) {
            this.get(this.identifier, done);
        }
    }

    /**
     * Get information about the specified newspaper
     * @param (Number) identifier
     */
    Newspaper.prototype.get = function (identifier, done) {
        console.log('Getting Newspaper');
        // http://api.trove.nla.gov.au/newspaper/title/35?encoding=json
        var url = API.NP_QUERY + identifier + key_str + ENC;

        $.ajax({
            dataType : "jsonp",
            url : url,
            context : this
        }).done(function (data) {
            console.log('Got Newspaper');
            $.extend(this, data.newspaper);
            if (done != undefined) done(this);
        });
    };

    /**
     * A list of Newspapers for a specific state or all states.
     * @class
     * @param {Object} options
     * @classdesc
     * If constructed with a 'state' blah
     */
    exports.NewspaperList = NewspaperList;
    function NewspaperList (options) {
        console.log('Creating NewspaperList');
        // http://api.trove.nla.gov.au/newspaper/titles?state=vic
        $.extend(this, options);
        this.newspapers = [];
        if (this.state != undefined) {
            this.get(this.state);
        }
    }

    /**
     *
     */
    NewspaperList.prototype.processGet = function (data) {

        for (var index in data.response.records.newspaper) {
            console.log(data.response.records.newspaper[index].title);
            this.newspapers.push(new Newspaper(data.response.records.newspaper[index]))
        }

        console.log("total = " + data.response.records.total);
        console.dir(this.newspapers[5]);
    };

    /**
     *
     */
    NewspaperList.prototype.get = function (state) {
        console.log('Getting NewspaperList');
        var url = API.NL_QUERY + key_str + ENC;
        if (state != undefined) {
            url = url + "&state=" + state;
        }

        $.ajax({
            dataType : "jsonp",
            url : url,
            context : this
        }).done(this.processGet);
    };

    return exports;

});