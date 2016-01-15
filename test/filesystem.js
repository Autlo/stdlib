'use strict';

var assert = require('assert');
var fs = require('fs');
var filesystem = require('../src/filesystem');

describe('Filesystem', function () {
    describe('#walkSync', function () {
        it('Should return an array of files found in directory', function () {
            var arr = [
                'tmp/file1.js',
                'tmp/test/file2.js'
            ];

            fs.mkdirSync('tmp');
            fs.mkdirSync('tmp/test');
            fs.writeFileSync('tmp/file1.js', '');
            fs.writeFileSync('tmp/test/file2.js', '');

            assert.deepEqual(arr, filesystem.walkSync('tmp'));

            fs.unlinkSync('tmp/test/file2.js');
            fs.unlinkSync('tmp/file1.js');
            fs.rmdirSync('tmp/test');
            fs.rmdirSync('tmp');
        });
    });
});