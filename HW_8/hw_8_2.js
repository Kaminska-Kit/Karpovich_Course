// Task 2
// 1. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch().

const func = (a, b) => {
    return new Promise ((resolve, reject) => {
        if (typeof a == 'number' && typeof b == 'number'){
            resolve(a + b);
        } else {
            reject('Invalid data used')
        };
    });
};

func(0, 2)
 .then(summ => console.log(summ))
 .catch(error => console.log(error))

func('n', 2)
 .then(summ => console.log(summ))
 .catch(error => console.log(error))

func(true)
 .then(summ => console.log(summ))
 .catch(error => console.log(error))


// 2. Создайте функцию retryPromise, которая принимает функцию и максимальное количество повторных попыток в качестве входных данных. 
//    Функция должна выполнить предоставленную функцию и вернуть обещание. Если обещание отклонено, оно должно повторять выполнение функции до тех пор, 
//    пока оно не будет зарезолвлено или не будет достигнуто максимальное количество попыток. Задержка каждой попытки на 1 секунду.
//    В качестве коллбэка напишите функцию getNumber, возвращаующую новый промис, в котором создается рандомное число от 1 до 10.
//    Если число больше 5 - промис резолвается, если меньше либо равно - реджектается.
//    Пример в консоли при отработке функции до Success с 3мя ретраями:
//     First attempt
//     Retrying 1 time
//     Retrying 2 time
//     Retrying 3 time
//     Success

const getNumber = function() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.floor(Math.random() * 11);
        if (randomNum > 5){
            resolve(randomNum);
            console.log('First attempt')
        } else {
            reject('Number <= 5');
        };
    });
};

const retryPromise = function(callBack, numberOfRetries) {
    return new Promise((resolve, reject) => {
        console.log('First attempt');
        const retrying = function(numberOfAttempts) {
            callBack().then(resolve)
            .catch(error => {
                
                if (numberOfAttempts < numberOfRetries) {
                    console.log(`Retrying ${numberOfAttempts} time`);
                    setTimeout(() => retrying(++numberOfAttempts), 1000);
                } else reject(error);
            });
        };
        retrying(1);
    });
};

retryPromise(getNumber, 10)
    .then(result => console.log(`Success(the result is ${result})`))
    .catch(error => console.error(error));

// 3. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch(). 
//   Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе. 
//   Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
//   Решить с помощью в 2 вариантах: с  .then() и с использованием async/await

const token = 'ac0e1d13fbad79ba35dc10f387581949'

const currencyConvertor = function(from, amount, to) {
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${token}&base=${from}&symbols=${to}`;
    fetch(url)
    .then(response => response.json())
    .then(jsonData  => {
        if (jsonData.rates.hasOwnProperty(to)) {
            console.log(`${amount} ${from} = ${(amount * jsonData.rates[to]).toFixed(2)} ${to}`);
        } else {
            console.log(`Invalid data used`);
        }
    }).catch(error => console.log(`Error`, error));    
};

currencyConvertor('EUR', 3, 'PLN');
currencyConvertor('EUR', 3, 'UAH');
currencyConvertor('EUR', 3, 'GBP');

async function currencyConvertorAsync(from, amount, to) {
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${token}&base=${from}&symbols=${to}`;
    try {
        const response = await fetch(url);
        const jsonData = await response.json()
        if (jsonData.rates.hasOwnProperty(to)) {
            console.log(`${amount} ${from} = ${(amount * jsonData.rates[to]).toFixed(2)} ${to}`);
        } else {
            console.log(`Invalid data used`);
        };
    } catch (error) {
        console.log(`Error:`, error)
    };
};

currencyConvertorAsync('EUR', 3, 'PLN');
currencyConvertorAsync('EUR', 3, 'UAH');
currencyConvertorAsync('EUR', 3, 'GBP');
