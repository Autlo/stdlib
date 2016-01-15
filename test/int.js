'use strict';

var assert = require('assert');
var int = require('../src/int');

describe('Int', function () {
    describe('#toHex', function () {
        it('Should pad hex string with zeros if needed', function () {
            assert.strictEqual(int.toHex(1), '01');
        });

        it('Should convert integer to hexadecimal', function () {
            assert.strictEqual(int.toHex(20), '14');
        });
    });
});
