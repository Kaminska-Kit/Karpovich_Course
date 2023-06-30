 export class ITSpecialist {
    
    constructor(name, grade, experienceInYears, age, country, salary) {
        this.name = name;
        this.grade = grade;
        this.experienceInYears = experienceInYears;
        this.age = age;
        this.country = country;
        this.salary = salary;
    };
    

    getAllInfo() {
      return  `Information about ${this.name}: grade: ${this.grade}, ${this.experienceInYears} years of experience, age: ${this.age}, country: ${this.country}, salary: $${this.salary}`;
    };
    
  
    setCountry(newCountry) {
      this.country = newCountry;
    };
  
    getSalary() {
      return this.salary;
    };
};

