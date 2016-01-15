'use strict';

var assert = require('assert');
var crc = require('../src/crc');

describe('Crc', function () {
    describe('#crc32', function () {
        it('Should calculate correct CRC32', function () {
            assert.deepEqual(
                new Buffer([0xA8, 0xE9, 0x43, 0x52]),
                crc.crc32(new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0xAF]))
            );
        });
    });

    describe('#crc32Swap', function () {
        it('Should calculate correct CRC32 and return reversed byte order', function () {
            assert.deepEqual(
                new Buffer([0x52, 0x43, 0xE9, 0xA8]),
                crc.crc32Swap(new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0xAF]))
            );
        });
    });
});
