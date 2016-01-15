'use strict';

/**
 * Converts hex (no spaces) to decimal
 *
 * @param {String} hex
 * @returns {Number}
 */
module.exports.toDec = function (hex)
{
    return parseInt(hex, 16);
};

/**
 * Converts signed 16-bit hex to decimal
 *
 * @param {String} hex
 * @return {Number}
 */
module.exports.toSignedDec = function (hex)
{
    var dec = parseInt(hex, 16);

    if ((dec & 0x8000) > 0) {
        return dec - 0x10000;
    }

    return dec;
};

/**
 * Converts hex (no spaces) to string
 *
 * @param {String} hex
 * @returns {string}
 */
module.exports.toStr = function (hex)
{
    var str = '';

    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }

    return str;
};

/**
 * Function to reverse byte order in hex string
 *
 * @param {String} data
 * @returns {string}
 */

module.exports.swap = function (data)
{
    return data.match(/.{2}/g).reverse().join('');
};
