/**
 * @lends Trove
 */
(function(Trove, $, undefined) {
    'use strict';

    /**
     * A class to hold a picture
     * @class
     * @alias Trove.Picture
     * @param {Object} options
     */
    function Picture(options) {
        console.log('Creating Picture');
        Trove.CONSTRUCTORS.work.call(this, options);
    }
    Picture.prototype = Object.create(Trove.CONSTRUCTORS.work.prototype);
    Picture.prototype.constructor = Picture;
    Trove.Picture = Picture;
    Trove.CONSTRUCTORS.picture = Picture;

}(window.Trove = window.Trove || {}, jQuery));
