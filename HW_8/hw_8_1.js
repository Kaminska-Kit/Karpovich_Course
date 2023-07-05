// Task 1.
// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова 
// delayTwoSeconds

const delayTwoSeconds = (callBack) => {
    setTimeout(callBack, 2000);
}
const callBack = () => console.log('2 seconds passed');
delayTwoSeconds(callBack);

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. 
// Обработайте промис методом .then и выведите результат его резолва в консоль

const promise_1 = new Promise((resolve, reject) => resolve(1));
promise_1.then(result => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

 const promise = (n) => {
    return new Promise((resolve, reject) => {
    if(n == 1) {
      resolve(1);
    } else {
      reject('Promise failed');
    };
 });
};
 promise(0)
 .then(n => console.log(n))
 .catch(error => console.log(error))


// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса

function promiseNumber(number) {
    return new Promise((resolve, reject) => resolve(number));
};

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((numbers) => {
    numbers.forEach(num => console.log(num)); 
});


