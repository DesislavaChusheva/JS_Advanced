const assert = require('chai').assert;
const mathEnforcer = require('../4.MathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return undefined When type is not a number', () => {
            assert.equal(undefined, mathEnforcer.addFive('six'));
            assert.equal(undefined, mathEnforcer.addFive(false));
        })
        it('Should add 5 When type is a number', () => {
            assert.equal(11, mathEnforcer.addFive(6));
            assert.equal(1, mathEnforcer.addFive(-4));
            assert.equal(2.48, mathEnforcer.addFive(-2.52));
        })
    })
    describe('subtractTen', () => {
        it('Should return undefined When type is not a number', () => {
            assert.equal(undefined, mathEnforcer.subtractTen('six'));
            assert.equal(undefined, mathEnforcer.subtractTen(true));
        })
        it('Should subtract 10 when type is a number', () => {
            assert.equal(-4, mathEnforcer.subtractTen(6));
            assert.equal(-21, mathEnforcer.subtractTen(-11));
            assert.equal(-4.6, mathEnforcer.subtractTen(5.4));
            assert.equal(-16.4, mathEnforcer.subtractTen(-6.4));
        })
    })
    describe('sum', () => {
        it('Should return undefined if some of the types id not a number', () => {
            assert.equal(undefined, mathEnforcer.sum('nine', 7));
            assert.equal(undefined, mathEnforcer.sum(9, 'seven'));
            assert.equal(undefined, mathEnforcer.sum(true, 'seven'));
            assert.equal(undefined, mathEnforcer.sum(9, false));
        })
        it('Should sum the two numbers When inputs are numbers', () => {
            assert.equal(20, mathEnforcer.sum(12, 8));
            assert.equal(-20, mathEnforcer.sum(-2, -18));
            assert.equal(10.35, mathEnforcer.sum(2.35, 8));
            assert.equal(18.41, mathEnforcer.sum(12, 6.41));
            assert.equal(19.34, mathEnforcer.sum(12.51, 6.83));
            assert.equal(-7.7, mathEnforcer.sum(-2.3, -5.4));
        })
    })
})