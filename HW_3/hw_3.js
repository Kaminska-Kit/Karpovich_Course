// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)
//
//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb
//
//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb
//
//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)
//
const kb = 1024;
const mb = kb*1024;
const gb = mb*1024;
const tb = gb*1024;
//
function convertation(bytes, unit) {
    let result;
    if (unit.toLowerCase() === "kb") {
        result = (bytes / kb).toFixed(1);
    } else if (unit.toLowerCase() === "mb") {
        result = (bytes / mb).toFixed(1);
    } else if (unit.toLowerCase() === "gb") {
        result = (bytes / gb).toFixed(1);
    } else if (unit.toLowerCase() === "tb") {
        result = (bytes / tb).toFixed(1);
    }
    console.log(`${bytes} bytes = ${result} ${unit}`);
}
convertation(454548, "Kb")
convertation(1454548, "Mb")
//
//
//
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)
//
let smile = ':)';
while (smile.length <= 10) {
    console.log(smile);
    smile += ':)';
}
//
//   Сделать из "*" равнобедренный треугольник и ромб
//
const triangle = function(n){
    for(let i = 1; i <= n; i++){
    let str = '';
     for(let j = n - i; j > 0; j--){
      str += ' ';
     }
     for(let j = 1; j <= i * 2 - 1; j++){
      str += '*';
     }
    console.log(str);
  }
}
  triangle(7)
//
//
//   разделитель
  console.log("                         ")
  console.log("                         ")
  console.log("                         ")
//
const rhombus = function(n){
    for(let i = 1; i <= n; i++){
    let str = '';
     for(let j = n - i; j > 0; j--){
      str += ' ';
     }
     for(let j = 1; j <= i * 2 - 1; j++){
      str += '*';
     }
    console.log(str);
  }
     for (let i = 2; i <= n; i++){
       var str = '';
       for (let j = 0; j < i - 1; j++){
        str += ' ';
      }
       for (let j= (n - i) * 2 + 1; j > 0; j--){
        str += '*';
      }
      console.log(str);
  }
 }
 rhombus(7)
//
//
// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
//
let nextNumber = 0;
do {
    nextNumber += 1;
    if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
        console.log('число ', nextNumber, ' делится без остатка на 3 и 5');
    } else if (nextNumber % 3 === 0) {
        console.log('число ', nextNumber, ' делится без остатка на 3');
    } else if (nextNumber % 5 === 0) {
        console.log('число ', nextNumber, ' делится без остатка на 5');
    } else {
        console.log(nextNumber);
    }
}
while (nextNumber < 100);
//
//
// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
//
//
function toCamelCase(str) {
    let arr = str.toLowerCase().split(' ');
    let result = arr.map(function transform(item, index) {
        if (index == 0) {
            return item;
        } else {
            return item[0].toUpperCase() + item.slice(1);
        }
    });
    console.log(result.join(''))
    }
    toCamelCase("My name is")
//  
//
// 5*. Создать программу, которая будет принимать на вход СЛОВО (одно), и возвращать количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
//
const countLetters = function(word) {
    const vowels = /[aeiou]/g;
    const consonants = /[qwrtpsdfghjklzxcvbnm]/g
    const check = word.toLowerCase();
    if (check.match(vowels) && check.match(consonants)) {
        console.log(`word "${word}" contains ${check.match(vowels).length} vowels and ${check.match(consonants).length} consonants`);
    } else if (check.match(vowels) == null) {
        console.log(`word "${word}" contains 0 vowels and ${check.match(consonants).length} consonants`)
    } else {
        console.log(`word "${word}" contains ${check.match(vowels).length} vowels and 0 consonants`)
    }
}
countLetters("wow")
countLetters("Ginger")
countLetters("Pop-Up")
//
//
//
// 6**. Написать программу, которая видоизменяет принимаемое слово шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB
//
//
//
const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
//
//вспомогательная функция 
//
function findIndex(index, offset) {
    let n = index + offset;
    let newIndex;
    if (n < 0) {
        newIndex = 26 + n;
    } else if (n > 25) {
        newIndex = n - 26;
    } else {
        newIndex = n;
    }
    return newIndex;
}
//
function cipher(str, offset) {  
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let index;
            if (alphabet.includes(str[i])){
                index = alphabet.indexOf(str[i])
                newIndex = findIndex(index, offset)
                result += alphabet[newIndex]  
            } else if (alphabet.includes((str[i]).toUpperCase())){
                index = alphabet.indexOf((str[i]).toUpperCase())
                newIndex = findIndex(index, offset)
                result += (alphabet[newIndex]).toLowerCase()
            };
        }
        return result
    }
console.log(cipher("MraZ", -10))
console.log(cipher("MraZ", -1))
console.log(cipher("MraZ", 1))
