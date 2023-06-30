
import { ITSpecialist } from './ITspecialist.js';

export class Developer extends ITSpecialist {
    #specialization = 'Developer';
    constructor(name, grade, experienceInYears, age, country, salary, isWritingUnitTests) {
        super(name, grade, experienceInYears, age, country, salary)
        this.isWritingUnitTests = isWritingUnitTests;
    };
    get specialization(){
        return this.#specialization;
    };
};
