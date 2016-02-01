'use strict';

var assert = require('assert');
var fs = require('fs');
var filesystem = require('../src/filesystem');

describe('Filesystem', function () {

    before(function() {
        fs.mkdirSync('tmp');
    });

    after(function() {
        fs.rmdirSync('tmp');
    });

    describe('#walkSync', function () {
        it('Should return an array of files found in directory', function () {
            var arr = [
                'tmp/file1.js',
                'tmp/test/file2.js'
            ];

            fs.mkdirSync('tmp/test');
            fs.writeFileSync('tmp/file1.js', '');
            fs.writeFileSync('tmp/test/file2.js', '');

            assert.deepEqual(arr, filesystem.walkSync('tmp'));

            fs.unlinkSync('tmp/test/file2.js');
            fs.unlinkSync('tmp/file1.js');
            fs.rmdirSync('tmp/test');
        });
    });

    describe('#removeDirectoryContents', function () {
        it('Should remove all files and folders from directory', function (done) {
            fs.mkdirSync('tmp/test1');
            fs.mkdirSync('tmp/test2');
            fs.writeFileSync('tmp/test1/file.js', '');
            fs.writeFileSync('tmp/test2/file.js', '');

            filesystem.removeDirectoryContents('tmp/test1', function() {
                assert.deepEqual(fs.readdirSync('tmp/test1').length, 0);

                filesystem.removeDirectoryContents('tmp/', function() {
                    assert.deepEqual(fs.readdirSync('tmp').length, 0);

                    done();
                });
            });
        });
    });
});
