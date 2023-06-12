// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
  function checkPizzas(myPizzas) {
    const uniquePizzas = [];
    for (let pizza of myPizzas) {
        if (!JSON.stringify(competitorPizzas).includes(pizza)) {
            uniquePizzas.push(pizza);
        }
    }
    if (uniquePizzas.length) {
        return uniquePizzas;
    } else {
        return null;
    }
  }
console.log(checkPizzas(['Peperoni', 'Palermo', 'hawai', 'Margarita']))
console.log(checkPizzas(['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']))




// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function getMaxLengthWord(sentence) {
    const arrSentence = sentence.split(' ');

    const maxLength = Math.max.apply(null, arrSentence.map(w => w.length));

    arrSentence.forEach(word => word.length == maxLength ? console.log(word) : null)
}
console.log(getMaxLengthWord('Get up on the floor honey'))
console.log(getMaxLengthWord('Nenavizhu blyat tsygan'))



// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function getUniqueNumbers(...numbers) {

    const uniqueNumbersArray = [];

    for (let number of numbers) {
        if (!JSON.stringify(uniqueNumbersArray).includes(number)) {
            uniqueNumbersArray.push(number);
        }
    }
    return uniqueNumbersArray;
}

console.log(getUniqueNumbers(2, 45, 7, 8, 8, 66, 57, 87, 45, 0));


// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

const isPalindrom = word => word.toLowerCase().split('').reverse().join('') === word.toLowerCase();


console.log(isPalindrom("sosipisos"))
console.log(isPalindrom("kit"))




// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function getSumm(number) {
    const str = String(number);
    let summ = 0;
    for (let i = 0; i < str.length; i++) {
      summ += +str[i];
    }
    if (summ >= 10) {
      return getSumm(summ);
    } else {
      return summ;
    }
  }
console.log(getSumm(675))



// 6**. Написать функцию, принимающую на вход неограниченное количество аргументов. Вернуть сумму всех цифр, попавших на вход функции. 
//   Например:
//   function getSumm(1,2,'as', 'aaa4', 0.1, -5) => 2.1

function getSummOfNumbers(...array) {

    let result = 0;
    array.forEach(el => {
        if (!isNaN(el)) {
            result += el;
        } 
    })
    return result;
}

console.log(getSummOfNumbers(0, 1, 2, 3))
console.log(getSummOfNumbers(1,2,'as', 'aaa4', 0.1, -5))
