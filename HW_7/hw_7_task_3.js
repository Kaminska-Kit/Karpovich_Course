// 1.  Создайте класс AQA с полями experience_in_years: number, grade: string, name: string, desiredSalary: number, 
//     skills: Array<string> и методом getCV, выводящим инфо о тестировщике вида 
//     "This is Anatoly Karpovich's CV. 
//      Middle AQA with 3 years of working experience. 
//      Key skills are typescript, automation and manual testing.
//      Desired salary is not less then $3000". 

console.log(' ')
console.log('     ****** Part 1 ******')
console.log(' ')

function checkIsValueANumber(value) {
    if(value && typeof value === 'number') {
        return value;
    } else {
        throw new Error(`${value} is invalid value for this field`)
    };
}

function checkIsValueAString(value) {
    if(value && typeof value === 'string') {
        return value;
    } else {
        throw new Error(`${value} is invalid value for this field`)
    };
}

function checkIsValueAnArray(value) {
    if(value && Array.isArray(value) && value.length > 0) {
        return value;
    } else {
        throw new Error(`${value} is invalid value for this field`)
    };
}

class AQA {
    constructor(experience_in_years, grade, name, desiredSalary, skills) {

        this.experience_in_years = checkIsValueANumber(experience_in_years),
        this.grade = checkIsValueAString(grade),
        this.name = checkIsValueAString(name),
        this.desiredSalary = checkIsValueANumber(desiredSalary),
        this.skills = checkIsValueAnArray(skills)
    };
    getCV() { return `This is ${this.name}'s CV.\n${this.grade} AQA with ${this.experience_in_years} years of working experience.\nKey skills are ${this.skills.join(", ")}.\nDesired salary is not less than $${this.desiredSalary}.`};
};

const aQA = new AQA(0.5, 'Trainee', "Tatina Kaminska", 500, ["manual testing", "js basics", "api testing"]);
// const aQA = new AQA(true, 'Trainee', "Tatina Kaminska", 500, ["manual testing", "js basics", "api testing"]);
// const aQA = new AQA(0.5, 456, "Tatina Kaminska", 500, ["manual testing", "js basics", "api testing"]);
// const aQA = new AQA(0.5, 'Trainee', false, 500, ["manual testing", "js basics", "api testing"]);
// const aQA = new AQA(0.5, 'Trainee', "Tatina Kaminska", 'y', ["manual testing", "js basics", "api testing"]);
// const aQA = new AQA(0.5, 'Trainee', "Tatina Kaminska", 500, []);
// const aQA = new AQA(0.5, 'Trainee', "Tatina Kaminska", 500, 22);

console.log(aQA.getCV());


console.log(' ')
console.log('     ****** Part 2 ******')
console.log(' ')

//     Создайте класс AQAnew с теми же полями. Реализуйте в нем метод getCV таким образом, 
//     чтобы он использовал тот же метод класса AQA, но с контекстом класса AQAnew


class AQAnew {
    constructor(experience_in_years, grade, name, desiredSalary, skills) {

        this.experience_in_years = checkIsValueANumber(experience_in_years),
        this.grade = checkIsValueAString(grade),
        this.name = checkIsValueAString(name),
        this.desiredSalary = checkIsValueANumber(desiredSalary),
        this.skills = checkIsValueAnArray(skills)
    };
    getCV = AQA.prototype.getCV;      
};
    
const aqaNew = new AQAnew(2.5, "Middle", "Artem OsuzhdalQA", 2800, ["expertise with CI/CD", "js deep knowlege", "framework design"]);
console.log(aqaNew.getCV());
    

  // 2.  Расширьте встроенный класс String с помощью метода removeSpecialCharacters. Этот метод должен работать для каждой строки, созданной в вашем файле js. Решить также через регулярное выражение. 
//     Например:
//     'HE!!LL??OO'.removeSpecialCharacters() => 'HELLO'

console.log(' ')
console.log('     ****** Part 3 ******')
console.log(' ')

String.prototype.removeSpecialCharacters = function() {
    return this.replace(/[^\a-zA-Z0-9\s]/gi, '');
  };
let str = 'HE!!LL??O_O An_at*)(ol$y';
console.log(str.removeSpecialCharacters()); 
  
