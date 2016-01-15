'use strict';

/**
 * Convert decimal integer to hexadecimal and add zeros when needed
 *
 * @param {Number} int
 * @returns {String} - hex with padded zeros
 */
module.exports.toHex = function (int)
{
    var hex = int.toString(16);

    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }

    return hex;
};
