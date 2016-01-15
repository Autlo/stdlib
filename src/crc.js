'use strict';

var crc = require('buffer-crc32');
var hex = require('./hex');

/**
 * @param {Buffer} data
 * @returns {Buffer}
 */
module.exports.crc32 = function (data)
{
    return crc(data);
};

/**
 * @param {Buffer} data
 * @returns {Buffer}
 */
module.exports.crc32Swap = function (data)
{
    return new Buffer(hex.swap(crc(data).toString('hex')), 'hex');
};
