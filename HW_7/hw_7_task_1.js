// Task 1.

// 1. Создайте функцию counter с переменной cosnt count = 0. Реализуйте замыкание так, чтобы при вызове функции count увеличиваться на +1 
// и выводился в консоль в виде `Function was called ${count} times`

console.log(' ')
console.log('     ****** Task 1 ******')
console.log(' ')


const counter = (count = 0) => {
    return () => {
        ++count;
        return `Function was called ${count} times`
    };
}
const count = counter();

console.log(count());
console.log(count());
console.log(count());



// 2. Создайте класс User с публичной пропертей name и приватным полем surname, а также методом sayHi() возвращающим "Hello from <name>".
// 3. Создать объект из класса User и вывести результат метода sayHi() в консоль
// 4. Создать объект из класса User и вывести surname в консоль (получить ошибку)

console.log(' ')
console.log('     ****** Tasks , 3, 4 ******')
console.log(' ')


class User {
    #surname 
    constructor (name, surname) {
        this.name = name;
        this.#surname = surname;
    }
    sayHi() {return `Hello from ${this.name}`}
}

const user1 = new User('John', 'Smith');
console.log(user1.sayHi())

const user2 = new User('Ivan', 'Ivanov')
console.log(user2.#surname)







