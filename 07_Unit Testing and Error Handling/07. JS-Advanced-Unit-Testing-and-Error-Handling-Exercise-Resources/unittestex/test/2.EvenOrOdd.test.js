const assert = require('chai').assert;
const isOddOrEven = require('../2.EvenOrOdd');

it('Should return indefined When input is not a string', () => {
    let expectedResult = undefined;

    let actualResult = isOddOrEven(5);
    let actualResult2 = isOddOrEven(true);

    assert.equal(expectedResult, actualResult);
    assert.equal(expectedResult, actualResult2);
})
 it('Should return even When length is even', () => {
    let expectedResult = 'even';

    let actualResult = isOddOrEven('even');

    assert.equal(expectedResult, actualResult);
 })
 it('Should return odd When length is odd', () => {
    let expectedResult = 'odd';

    let actualResult = isOddOrEven('odd');

    assert.equal(expectedResult, actualResult);
 })
 it('Should work correct', () => {

    let evenResult1 = isOddOrEven('work');
    let evenResult2 = isOddOrEven('worker');
    let oddResult1 = isOddOrEven('working');
    let oddResult2 = isOddOrEven('pizza');
    
    assert.equal('even', evenResult1);
    assert.equal('even', evenResult2);
    assert.equal('odd', oddResult1);
    assert.equal('odd', oddResult2);
 })