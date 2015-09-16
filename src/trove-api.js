( // Module boilerplate to support browser globals and browserify and AMD.
    typeof define === "function" ? function(m) {
        define("trove-api", m);
    } : typeof exports === "object" ? function(m) {
        module.exports = m();
    } : function(m) {
        this.Trove = m();
    }
)(function() {
    "use strict";

    var exports = {};

    // Store the key here
    var key_str = "";

    // Must call first
    function init (key) {
        key_str = "&key=" + key;
    }
    exports.init = init;

    /**
     * An object to hold an instance of a newspaper
     * @param {Object} options
     * id
     * title
     * state
     * issn
     * troveUrl
     * startDate
     * endDate
     */
    function Newspaper (options) {
        $.extend(this, options);
    }
    exports.Newspaper = Newspaper;

    /**
     *
     */
    Newspaper.prototype.processGet = function (data) {
        // console.dir(data);
        // for (var attrname in data) { this[attrname] = obj2[attrname]; }
        $.extend(this, data.newspaper);
        console.dir(this);
    };

    /**
     *
     */
    Newspaper.prototype.get = function (identifier) {
        // http://api.trove.nla.gov.au/newspaper/title/35?encoding=json
        var url = "http://api.trove.nla.gov.au/newspaper/title/" + identifier + "?encoding=json" + key_str;

        $.ajax({
            dataType : "jsonp",
            url : url,
            context : this
        }).done(this.processGet);
    };

    /**
     *
     */
    function NewspaperList (options) {
        // http://api.trove.nla.gov.au/newspaper/titles?state=vic
        $.extend(this, options);
        this.newspapers = [];

    }
    exports.NewspaperList = NewspaperList;

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
        if (state == undefined) {
            var url = "http://api.trove.nla.gov.au/newspaper/titles?encoding=json" + key_str;
        } else {
            var url = "http://api.trove.nla.gov.au/newspaper/titles?encoding=json&state=" + state + key_str;
        }

        $.ajax({
            dataType : "jsonp",
            url : url,
            context : this
        }).done(this.processGet);
    };

    return exports;

});