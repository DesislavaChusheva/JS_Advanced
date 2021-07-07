const assert = require('chai').assert;
const isSymmetric = require('../05-check-for-symmetry');

it('Should return false when input is not an array', () => {
    let input1 = 56;
    let input2 = 'str';
    let input3 = false;
    let input4 = 4.8;

    let result1 = isSymmetric(input1);
    let result2 = isSymmetric(input2);
    let result3 = isSymmetric(input3);
    let result4 = isSymmetric(input4);

    assert.equal(result1, false);
    assert.equal(result2, false);
    assert.equal(result3, false);
    assert.equal(result4, false);
})
it('Should return false when array is not symetric and with different types', () => {
    let input = [true, 1];

    let result = isSymmetric(input);

    assert.equal(result, false);
})
it('Should return false when input is undefined', () => {
    let input = undefined;

    let result = isSymmetric(input);

    assert.equal(result, false);
})
it('Should return false when array is not symetric', () =>{
    let input = [1, 2, 3, 4];

    let result = isSymmetric(input);

    assert.equal(result, false);
})
it('Should return true when array is symetric', () => {
    let input = [1, 2, 3, 2, 1];

    let result = isSymmetric(input);

    assert.equal(result, true);
})