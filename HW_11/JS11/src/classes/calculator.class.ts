import type { ICalculator } from "../types/calculator.type.js";

class Calculator implements ICalculator {
    add(a: number, b: number) {
        return a + b;
    };

    subtract(a: number, b: number) {
        return a - b;
    };

    divide(a: number, b: number) {
        if(!(b === 0)){
        return a / b;
        } else {
        return `Can't divide to 0`;
        }
    };

    multiply(a: number, b: number) {
        return a * b;
    };
}

export default new Calculator;