'use strict';

/**
 * @param {Number} value
 * @param {Number} decimals
 * @returns {Number}
 */
module.exports.round = function round (value, decimals)
{
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};
