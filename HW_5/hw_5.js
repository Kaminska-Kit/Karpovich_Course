// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

const countLettersAppearance = function(str) {
    const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const result = str.toUpperCase().split('').map((char, index, arr) => {
    if (alphabet.includes(char)) {
        return arr.filter((el) => el == char).length;
    } else {
        return char;
      }
    }).join('');
    return result;
    }
console.log(countLettersAppearance("I am the best AQA ever!"));


// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  


const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123, 'tt'];
let numberOfGoods = prices.length;

const getTotalCost = function(priceList) {
    if (!priceList || !Array.isArray(priceList)) console.error('Array is needed')
    let totalCost = 0;
    priceList.forEach( price => {
        if (typeof price === 'number') {
        totalCost += price; 
    } else {
        numberOfGoods--;
    }
})
    return totalCost;
  }
const averagePrice = (getTotalCost(prices))/numberOfGoods;

console.log(`Итого: ${getTotalCost(prices)}$, средняя цена товара ~${averagePrice.toFixed(0)}$`);



// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отфильтрован по возврастанию количества гласных букв в слове.

const arrayOfStrings = ['Apple', 'Passion fruit', 'Banana', 'Pineapple', 'Apricot', 'Fig'];

function getVowelsQuantity(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
        counter++;
        }
    }
    return counter;
}


const sortByVowels = function(array) {
    if (!array || !array.length || !Array.isArray(array)) console.error('Invalid data');
    return array.sort((a, b) => countVowels(a) - countVowels(b));
  };
  console.log(sortByVowels(arrayOfStrings));
//   console.log(sortByVowels(2))
//   console.log(sortByVowels('lol'))
//   console.log(sortByVowels([]))


// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
//   Пример:

const arrayWithBrackets = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

function getCounter(arr) {
    let counter = 0;
    arr.flat(Infinity).forEach(el => {
        if (el === ')') counter++;
        if (el === '(') counter--;
    })
    return counter;
}

function checkBracketsPair(arr) {
    if (!arr || !arr.length || !Array.isArray(arr)) console.error('Invalid data');
    if (getCounter(arr) !== 0) console.log("There is a lonely bracket in the array");
    else console.log("Every bracket has a pair");
}
checkBracketsPair(arrayWithBrackets);



// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

const arr = [3, 2, 5, 7, 4, 7, 3, 1, 2,];

compareNumberToIndex = (number, index) => { return index !== number - 1};

function findMissingNumber(arr) {
    if (!arr || !arr.length || !Array.isArray(arr)) console.error('Invalid data');
    const pureArray = [...new Set(arr.sort((a, b) => a - b))];
    return pureArray.filter(compareNumberToIndex) - 1;
}
console.log(findMissingNumber(arr));


// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.

const fs = require("fs");
const users = fs.readFileSync('cards.json', 'utf-8');
const listOfUsers = JSON.parse(users)

function getUniqueUsers(arr) {
    return uniqueUsersArr = [...new Set(arr.map((el) => JSON.stringify(el)))].map((el) => JSON.parse(el));
}
console.log(getUniqueUsers(listOfUsers));

