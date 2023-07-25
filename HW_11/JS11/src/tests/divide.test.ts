import Calculator from "../classes/calculator.class.js"
import {expect, assert} from 'chai'

describe ('Divide functionality tests', () =>{
    it('Should divide two numbers correctly', () => {
        const result = Calculator.divide(12, 4);
        expect(result).to.equal(3)
    })
    it('Should divide two negative numbers correctly', () => {
        const result = Calculator.divide(-9, -3);
        expect(result).to.equal(3)
    })
    it('Should not divide to 0', () => {
        const result = Calculator.divide(8, 0);
        expect(result).to.equal(`Can't divide to 0`)
    })
})