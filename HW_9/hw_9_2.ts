export {}

// 1. Создать функцию, принимающую на вход массив объектов, у которых ключ ТОЛЬКО string, а значения могут быть string, number, boolean.
//     Вернуть результирующий объект, хранящий в себе все переданные в функцию объекты справа на лево

type CustomObject = {
    [key: string]: string | number | boolean
};
type CustomArray = CustomObject[];
 
const obj1: CustomObject = {
    first: 'string'
};

const obj2: CustomObject = {
    second: 2
};

const obj3: CustomObject = {
    third: true
};
const myArray: CustomArray = [obj1, obj2, obj3];

function typifiedArray(array: CustomArray) {
    return array.reverse();
};
console.log(typifiedArray(myArray));

// 2. Представьте, что вам нужно отправлять на сервер запрос на создание заказа, и получать ответ. 
//   И функция делающая это представим, что уже есть! Осталось лишь затипизировать сам объект который вы шлёте, и какой ожидаете, 
//   без реализации функции. Создайте алиасы типов для тела запроса, а также для его ответа.  
//   В ответе возвращаются отправленные данные + createdAt и id. Вы не должны заниматься самокопированием, 
//   т.е. используйте где надо объединения, исключения из типа, енамы и так далее. 
//   Названия пицц, соусов, видов получения заказа и типов оплаты должны быть фиксированными, а не любыми. 
//   Подумайте, можно ли в данном алиасе выделить части, которые можно вынести в отдельные алиасы. 
//   Подумайте также, все ли поля должны быть обязательными. 
//   Ниже представлен пример запроса:

interface IOrderResponse extends IOrderRequest {
    createdAt: string,
    id: number
}
interface IOrderRequest {
    customer: ICustomer,
    ordered: IOrdered,
    delivery: IDelivery,
    paymentCondition: Payment,
    isPaid: Boolean,
    totalPrice: number,
};
interface ICustomer {
    name: string,
    surname: string,
    address: IAddress
};
interface IOrdered {
    pizzas: IPizza[],
    sauces?: Sauces[]
};
interface IPizza {
    name: PizzaNames,
    size: PizzaSize,
    extras?: Extras[],
    cost: number,
};
interface IDelivery {
    condition: CONDITIONS.DELIVERY,
    address: IAddress
    date: string,
    time: string,
};
interface IAddress {
    city: string,
    street: string,
    house: number,
    flat?: number,           
};
enum CONDITIONS {
    DELIVERY = "DELIVERY",
    DELIVERED = "DELIVERED",
    IN_PROGRESS = "IN PROGRESS",
    CANCELED = "CANCELED"
};
type Payment = 'card' | 'cash';
type PizzaSize = 'small' | 'large' | 'medium';
type Extras = 'cheese' | 'halapenio' | 'bacon' | 'salami' | 'olives' | 'pickles' | 'mushrooms';
type Sauces = 'BBQ' | 'cheese' | '1000 islands';
type PizzaNames = 'BBQ' | 'margarita' | 'peperoni' | 'diablo' | 'hawai' | 'vegan';

const order: IOrderRequest = {
    customer: {
      name: "Anatoly",
      surname: "Karpocich",
      address: {
        city: "Minsk",
        street: "Narodnaja",
        house: 10,
        flat: 99,
      },
    },
    ordered: {
      pizzas: [
        {
          name: "peperoni",
          size: "large",
          extras: ["cheese", "bacon"],
          cost: 100,
        },
        {
          name: "diablo",
          size: "medium",
          extras: ["halapenio"],
          cost: 70,
        },
        {
          name: "hawai",
          size: "small",
          extras: [],
          cost: 50,
        },
      ],
      sauces: ["BBQ", "cheese", "1000 islands"],
    },
    delivery: {
      condition: CONDITIONS.DELIVERY,
      address: {
        city: "Minsk",
        street: "Narodnaja",
        house: 10,
        flat: 99,
      },
      date: "2023/07/22",
      time: "19:00",
    },
    paymentCondition: "card",
    isPaid: true,
    totalPrice: 250,
  };

// 3. Напишите функцию, которая принимает строку и возвращает объект со счетчиком того, сколько раз каждая буква встречается в строке. 
//   Затипизируйте так, чтобы функция принимала только строковые входные данные и чтобы выходной объект имел строковые ключи 
//   (представляющие каждую букву) и числовые значения (представляющие количество этой буквы).

type CustomObject = {
      [key: string]: number 
    };

function countLetters(str: string) {
    const resultObject: CustomObject = {}
    const arrayOfLetters: string[] = str.toLowerCase().split('') 
    const result: number[] = arrayOfLetters.map((char, index, arr) => {
        return arr.filter((el) => el == char).length;
    });
    arrayOfLetters.forEach((letter, index) => {
         resultObject[`${letter}`] = result[index]
    });
    return resultObject;
};
console.log(countLetters('pepper'))
console.log(countLetters('ginger'))


// 4.  Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат, 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

type ArrayOfNumbers =  number[];
type CallBack = (n: number) => boolean;

function filter(numbers: ArrayOfNumbers, callback: CallBack) {
    return numbers.filter(num => callback(num));
};
console.log(filter([1, -5, 2, 3, 4, 133], (n) => n % 2 == 0));
console.log(filter([1, -5, 2, 3, 4, 133], (n) => n > 3));
