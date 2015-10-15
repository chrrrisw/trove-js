/**
 * @lends Trove
 */
(function(Trove, $, ParentString, undefined) {
    'use strict';

    /**
     * A class to contruct search terms.
     * @class
     * @alias Trove.Terms
     * @augments String
     * @param {Object} options
     */
    function Terms(__value__) {
        console.log('Creating Terms');
        this.length = (this.__value__ = __value__ || '').length;
    }

    // Terms.prototype = new ParentString;
    Terms.prototype = Object.create(ParentString.prototype);
    // Terms.prototype.constructor = Terms;

    Terms.prototype.toString = Terms.prototype.valueOf = function() {
        return this.__value__;
    };

    Terms.prototype.or = function(value) {
        this.__value__ += ' OR ' + value;
        this.length = this.__value__.length;
    };

    // creator:(Donald Norman)
    // subject:(cognitive psychology)
    // title:(short history of Australia)
    // s_creator:(Donald Norman)
    // s_subject:(cognitive psychology)
    // s_title:(short history of Australia)
    // exact_creator:”public:glowbrain”
    // format:book
    // language:english
    // isbn:0333337352
    // issn:15386597
    // publictag:(sydney)
    // nuc:QU
    // id:6311198
    // identifier:0333337352
    // anbdid:46285585
    // ddc:”791.4372″
    // lastupdated:[2012-04-04T00:00:00Z TO 2012-04-04T00:00:00Z] | *
    // taglastupdated:[2012-03-06T00:00:00Z TO 2012-03-06T00:00:00Z] | *
    // commentlastupdated:[2012-03-06T00:00:00Z TO 2012-03-06T00:00:00Z] | *
    // date:[1850 TO 1890] | date:[* TO 1900] | date:[2010 TO *]
    // YYY
    // has:tags | has:comments
    // text:Jackes
    // fulltext:Jackes
    // OR NOT AND
    // (goldfields OR barossa) any
    // (goldfields barossa) all
    // "goldfields barossa" phrase
    // -(goldfields barossa) none




    Trove.Terms = Terms;
    Trove.CONSTRUCTORS.terms = Terms;

}(window.Trove = window.Trove || {}, jQuery, String));

// (function(Function, slice, push) {
//     // from WebReflection: Subclassed String
//     function String(String) {
//         if (arguments.length) // clever constructor, accepts more than a string as argument
//             push.apply(this, slice.call(arguments).join("").split(""));
//     };
//     String.prototype = new Function;
//     try {
//         (new String) + ""; // exception in FireFox
//         var join = Array.prototype.join;
//         String.prototype.toString = String.prototype.valueOf = function() {
//             return join.call(this, "");
//         };
//     } catch (e) { // no way to retrieve the length with FireFox
//         String.prototype.toString = String.prototype.valueOf = function() {
//             for (var Array = [], i = 0; Array[i] = this[i]; i++);
//             return Array.join("");
//         };
//     };
//     (window.$ || ($ = {})).String = String; // let's put this in a namespace
// })(String, Array.prototype.slice, Array.prototype.push);
