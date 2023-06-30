import { ITSpecialist } from './ITspecialist.js';

export class Manager extends ITSpecialist {
    #specialization = 'Manager';
    constructor(name, grade, experienceInYears, age, country, salary, isScrumMaster) {
        super(name, grade, experienceInYears, age, country, salary);
        this.isScrumMaster = isScrumMaster;
    };
    get specialization(){
        return this.#specialization;
    };
};
