
export interface ICalculator {
    add(a: number, b: number): number,
    subtract(a: number, b: number): number,
    divide(a: number, b: number): number | string,
    multiply(a: number, b: number): number,
}