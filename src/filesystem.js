'use strict';

var fs = require('fs');
var exec = require('child_process').exec;

/**
 * Asyncronous function to remove all files and (including non-empty) directories from path
 *
 * @param path
 * @param callback(err)
 */
module.exports.removeDirectoryContents = function (path, callback)
{
    if (path.substr(-1, 1) !== '/') {
        path += '/';
    }

    exec('rm -r ' + path + '*', function (err) {
        callback(err);
    });
};

/**
 * Synchronous function for recursively walking through a directory and returning an array of files inside the directory
 * and is subdirectories
 *
 * @param {String} dir
 * @returns {Array}
 */
module.exports.walkSync = function walkSync(dir)
{
    var results = [];
    var list = fs.readdirSync(dir);

    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(walkSync(file));
        } else {
            results.push(file)
        }
    });

    return results
};
