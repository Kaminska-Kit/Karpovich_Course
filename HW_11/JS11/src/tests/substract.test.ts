import Calculator from "../classes/calculator.class.js"
import {expect} from 'chai'

describe ('Substract functionality tests', () =>{
    it('Should substract two numbers correctly', () => {
        const result = Calculator.subtract(15, 6);
        expect(result).to.equal(9)
    })
    it('Should substract two negative numbers correctly', () => {
        const result = Calculator.subtract(-7, -3);
        expect(result).to.equal(-4)
    })
    it('Should substract two float numbers correctly', () => {
        const result = Calculator.subtract(8.8, 1.4);
        expect(result).closeTo(7.4, 0.001)
    })
})