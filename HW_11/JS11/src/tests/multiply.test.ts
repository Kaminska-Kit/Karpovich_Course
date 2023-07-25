import Calculator from "../classes/calculator.class.js"
import {expect, assert} from 'chai'

describe ('Multiply functionality tests', () =>{
    it('Should multiply two numbers correctly', () => {
        const result = Calculator.multiply(2, 6);
        expect(result).to.equal(12)
    })
    it('Should multiply two negative numbers correctly', () => {
        const result = Calculator.multiply(-7, -3);
        expect(result).to.equal(21)
    })
    it('Should multiply to 0 correctly', () => {
        const result = Calculator.multiply(8, 0);
        assert.strictEqual(result, 0)
    })
})