// Имеется массив объектов (ниже). Ваше задание:

const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта

function getCharKeys(arr) {
    arr.forEach(char => {console.log(Object.keys(char))})
  }
getCharKeys(characters)

// 2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта

function getCharValues(arr) {
  arr.forEach(char => {console.log(Object.values(char))})
}
getCharValues(characters)

// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)

function getCharEntries(arr) {
  arr.forEach(char => {
    for(const [key, value] of Object.entries(char)){
      console.log(`key = ${key}, value = ${value}`)
    }
  })
}
getCharEntries(characters)

// 4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in

function getCharEntries2(arr) {
  arr.forEach(obj => {
    for(const key in obj){
      console.log(`key = ${key}, value = ${obj[key]}`)
    }
  })
}
getCharEntries2(characters)

// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
//    `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
name: 'Semen',
age: 21,
salary: 1000,
getInfo() {
  return `Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`
}
}

console.log(qa.getInfo())
