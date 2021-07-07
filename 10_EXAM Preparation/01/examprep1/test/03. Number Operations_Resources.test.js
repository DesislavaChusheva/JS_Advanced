const assert = require('chai').assert;
const numberOperations = require('../03. Number Operations_Resources');

describe('Number Operations', () => {
    describe('powNumber', () => {
        it('Should return input ** input', () => {
            assert.strictEqual(numberOperations.powNumber(5), 25);
            assert.strictEqual(numberOperations.powNumber(-4), 16);
            assert.strictEqual(numberOperations.powNumber(0), 0);
            assert.strictEqual(numberOperations.powNumber(1.5), 2.25);
            assert.isNaN(numberOperations.powNumber('five'));
        })
    })
    describe('numberChecher', () => {
        it('Should throw an Error When input is not a number', () => {

            assert.throw(() => numberOperations.numberChecker('abc'), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(undefined), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(NaN), Error, 'The input is not a number!');

        })
        it('Should return correct When number is < 100', () => {
            assert.equal(numberOperations.numberChecker(56), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-5), 'The number is lower than 100!');
        })
        it('Should retutn correct When number is > 100', () => {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        })
    })
    describe('sumArrays', () => {
        it('Should return correct array When one array is empty', () => {
            assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3]), [1, 2, 3]);
            assert.deepEqual(numberOperations.sumArrays([5, 6, 4], []), [5, 6, 4]);
            assert.deepEqual(numberOperations.sumArrays([5, 6, 4], []), [5, 6, 4]);
        })
        it('Should return correct array When one array is longer', () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 4, 5]), [4, 6, 5]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [4, 5]), [5, 7, 3]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['f', 'u']), ['af', 'bu', 'c']);
        })
        it('Should return correct array When both arrays are same length', () => {
            assert.deepEqual(numberOperations.sumArrays([5, 5, 5], [1, 1, 1]), [6, 6, 6]);
            assert.deepEqual(numberOperations.sumArrays([5.3, 5.7, 5.2], [1.4, 1.6, 1.7]), [5.3 + 1.4, 5.7 + 1.6, 5.2 + 1.7]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['f', 'u', 'r']), ['af', 'bu', 'cr']);
        })
    })
})