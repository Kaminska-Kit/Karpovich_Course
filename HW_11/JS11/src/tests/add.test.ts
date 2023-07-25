import Calculator from "../classes/calculator.class.js"
import {expect} from 'chai'

describe ('Add functionality tests', () =>{
    it('Should add two numbers correctly', () => {
        const result = Calculator.add(5, 6);
        expect(result).to.equal(11)
    })
    it('Should add two negative numbers correctly', () => {
        const result = Calculator.add(-5, -3);
        expect(result).to.equal(-8)
    })
    it('Should add two float numbers correctly', () => {
        const result = Calculator.add(1.4, 8.8);
        expect(result).closeTo(10.2, 0.001)
    })
})