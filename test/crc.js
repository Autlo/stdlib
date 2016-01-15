'use strict';

var assert = require('assert');
var crc = require('../src/crc');

describe('Crc', function () {
    describe('#crc32', function () {
        it('Calculates correct CRC', function () {
            assert.deepEqual(
                new Buffer([0xA8, 0xE9, 0x43, 0x52]),
                crc.crc32(new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0xAF]))
            );
        });
    });
});
