/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold music
     * @class
     * @alias Trove.Music
     * @param {Object} options
     */
    function Music(options) {
        console.log('Creating Music');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Music.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Music.prototype.constructor = Music;
    Trove.Music = Music;
    Trove.CONSTRUCTORS.music = Music;

}(window.Trove = window.Trove || {}, jQuery));
