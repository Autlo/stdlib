'use strict';

var assert = require('assert');
var hex = require('../src/hex');

describe('Hex', function () {
    describe('#toDec', function () {
        it('Should return decimal number', function () {
            assert.strictEqual(hex.toDec('01'), 1);
            assert.strictEqual(hex.toDec('015F'), 351)
        });
    });

    describe('#toSignedDec', function () {
        it('Should return signed decimal number', function () {
            assert.strictEqual(hex.toSignedDec('01'), 1);
            assert.strictEqual(hex.toSignedDec('FFFF'), -1);
            assert.strictEqual(hex.toSignedDec('FFF4'), -12);
        });
    });

    describe('#toStr', function () {
        it('Should return string', function () {
            assert.strictEqual(hex.toStr('64656d6f'), 'demo');
            assert.strictEqual(hex.toStr('41206c6f6e672064656d6f2e'), 'A long demo.')
        });
    });

    describe('#swap', function () {
        it('Should swp byte order in hex string', function () {
            assert.equal(hex.swap('64656d6f'), '6f6d6564');
        });
    });
});
