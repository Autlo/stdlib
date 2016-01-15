'use strict';

var assert = require('assert');
var math = require('../src/math');

describe('Math', function () {
    describe('#round()', function () {
        it('should round a number to a specified number of decimal places', function () {
            assert.strictEqual(math.round(2.359, 1), 2.4);
            assert.strictEqual(math.round(2.359, 2), 2.36);
            assert.strictEqual(math.round(2.359, 3), 2.359);
        });
    });
});
