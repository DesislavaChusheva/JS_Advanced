const assert = require('chai').assert;
const lookupChar = require('../3.CharLookup');

it('Should return undefined When types are incorrect', () => {
    let expectedResult = undefined;

    let notStringInput = 568465312;
    let notIntegerInput = 6.15;

    assert.equal(expectedResult, lookupChar(notStringInput, 5));
    assert.equal(expectedResult, lookupChar('string', notIntegerInput));
})
it('Should return Incorect index When index is out of range', () => {
    let expectedResult = 'Incorrect index';

    let string = 'string';
    let biggerIndex = string.length;
    
    assert.equal(expectedResult, lookupChar(string, biggerIndex));
    assert.equal(expectedResult, lookupChar(string, -1));
})
it('Should return char at index position', () => {
    let expectedResult = 'i';

    let actualResult = lookupChar('string', 3);

    assert.equal(expectedResult, actualResult);
})