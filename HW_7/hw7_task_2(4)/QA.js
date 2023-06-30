import { ITSpecialist } from './ITspecialist.js';

export class QA extends ITSpecialist {
    #specialization = 'QA';
    constructor(name, grade, experienceInYears, age, country, salary, isAQA) {
        super(name, grade, experienceInYears, age, country, salary)
        this.isAQA = isAQA;
    };
    get specialization(){
        return this.#specialization;
    };
};

