const assert = require('chai').assert;
const sum = require('../04-sum-of-numbers');

it('Should add positive numbers', () => {
    let input = [1, 2, 3, 4, 5];
    let expectedResult = 15;

    let actualResult = sum(input);

    assert.strictEqual(actualResult, expectedResult);
});