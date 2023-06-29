// 1. Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно. 
//    Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
//    И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'. 
//    Задачу решить через замыкания
//     Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

console.log(' ')
console.log('     ****** Task 1 ******')
console.log(' ')


const getRandomNumber = function(n) {
    const uniqueNumbers = [];
    return () => {
        if (uniqueNumbers.length >= n) {
            return 'All numbers were received';
        } else {
            let randomResult;
            do {
            randomResult = Math.floor(Math.random() * n + 1);
            } while (uniqueNumbers.includes(randomResult));
            uniqueNumbers.push(randomResult);
            return randomResult;
        };
    };
};

const getUniqueNumber = getRandomNumber(5);

console.log(getUniqueNumber());
console.log(getUniqueNumber());
console.log(getUniqueNumber());
console.log(getUniqueNumber());
console.log(getUniqueNumber());
console.log(getUniqueNumber());




// 2. Создать функцию, которая принимает на вход дату в виде гггг/мм/дд и возвращает, что вам 18 лет и подсчитанное количество месяцев.
//    Реализовать с помощью объекта Date
console.log(' ');
console.log('     ****** Task 2 ******');
console.log(' ');



function howOldAreYou(date) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (isNaN(birthDate)) return "Invalid date";

    if (age === 0) {
        if(months === 0) return  `You are too small to count months :)`
         else if (months < 0) return 'Invalid date of birth'
         else if (days < 0 ) return  `${--months} months;`
         else return  `${months} months;`   
    };

    if (age <= 18 && age !== 0) {
        if (months === 0 && days < 0)  return `${--age} years` 
        else if (months === 0 && days >= 0)  return `${age} years` 
        else if (months < 0)  return `${--age} years` 
        else  return `${age} years` 
    };
        
    if (age > 18) {
        if (months === 0 && days < 0)  return `18 years and ${ (--age - 18)*12} months`   
        else if (months === 0 && days > 0)  return `18 years and ${ (age - 18)*12} months` 
        else if (months < 0)  return `18 years and ${ (--age - 18)*12 + 12 + months} months`     
        else if (days > 0)  return `18 years and ${ (age - 18)*12 + months} months` 
        else return `18 years and ${ (age - 18)*12 + months - 1} months` 
    };
};

console.log(howOldAreYou('1994/01/28'));
console.log(howOldAreYou('2009/6/26'));
console.log(howOldAreYou('2023/01/28'));
console.log(howOldAreYou('2023/06/01'));
console.log(howOldAreYou('2023/10/01'));
console.log(howOldAreYou('yyyy/mm/dd'));

// 3.  Таня любит печь торты. У нее есть рецепты и ингредиенты. К сожалению, она не сильна в математике. 
//     Поможешь ей узнать, сколько тортов она сможет испечь, учитывая ее рецепты?
//     Напишите функцию cakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект) 
//     и возвращает максимальное количество тортов, которые Таня может испечь (целое число). 
//     Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200). 
//     Ингредиенты, отсутствующие в объектах, можно считать равными 0.
//     Пример:
//       // must return 2
//       cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
//       // must return 0
//       cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

console.log(' ');
console.log('     ****** Task 3 ******');
console.log(' ');

const cakes = function(recipe, availableIngridients) {
    let coefficients = [];
    let coeff;
    const ingridients = Object.keys(availableIngridients);
    for (const item in recipe) {
        if(ingridients.includes(item)) {
            coeff = availableIngridients[item]/recipe[item];
        } else {
            coeff = 0;
        }
        coefficients.push(Math.floor(coeff));
    }
    return Math.min(...coefficients);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));


