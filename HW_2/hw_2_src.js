
let age_2 = 18;
let age_3 = 60;

const checkAge2 = function (age) {

    if (age.trim() !== "" && !isNaN(age)) {
        if (age < age_2) {
            alert(`You don’t have access cause your age is ${age}. It’s less then 18 :( )`);
        } else if (age >= age_2 && age < age_3) {
            alert('Welcome!');
        } else if (age >= age_3) {
            alert('Keep calm and look Culture channel');
        } else {
            alert('Technical work');
        }
    } else {
        alert('It is not a number!');
    }
}

let question = prompt('How old are you?');
checkAge2(question);