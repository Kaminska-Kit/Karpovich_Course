// Task 1. Работа с оператором IF:

//   1. Создать переменную “age” и присвоить ей значение 10
//   2. Создать переменную “age_2” и присвоить ей значение 18
//   3. Создать переменную “age_3” и присвоить ей значение 60


let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

//   4. Создать if в котором будите проверять значение переменной age_1

//     Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then ”
//     Если “age” >=  age_2 и “age” <  age_3, вывести в консоль “Welcome  !”
//     Если “age”  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//     Иначе выводите “Technical work”.

if (age_1 < age_2) {
    console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then ' + age_2);
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome!');
} else if (age_1 >= age_3) {
    console.log('Keep calm and look Culture channel');
} else {
    console.log('Technical work'); 
}

// Task 2*. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

const checkAge = function (age) {
    if (typeof age != "number") {
        console.error('Not a number');
    } else if (age < age_2) {
        console.log(`You don’t have access cause your age is ${age}. It’s less then ${age_2} :(`);
    } else if (age >= age_2 && age < age_3) {
        console.log('Welcome!');
    } else if (age >= age_3) {
        console.log('Keep calm and look Culture channel');
    } else {
        console.log('Technical work'); //useless
    }
}

checkAge(17);
checkAge(18);
checkAge(61);
checkAge("2");
checkAge("aaa");



// Task 3*. Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
//   преобразовываясь в number

const checkAge2 = function (age) {

    if (age !== "" && !isNaN(age)) {
        if (age < age_2) {
            console.log(`You don’t have access cause your age is ${age}. It’s less then ${age_2} :(`);
        } else if (age >= age_2 && age < age_3) {
            console.log('Welcome!');
        } else if (age >= age_3) {
            console.log('Keep calm and look Culture channel');
        } else {
            console.log('Technical work'); //useless
        }
    } else {
        console.error('Not a number');
    }
}

checkAge2(17);
checkAge2(18);
checkAge2(61);
checkAge2("2");
checkAge2("aaa");





// Task 4*. Преобразовать Task 3* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert

// check html file
