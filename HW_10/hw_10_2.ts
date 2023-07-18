// Task 2
// 1. Напишите функции, реализующие методы массивов forEach и map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо сами функции и коллбэки.

//  a. Создать реализацию функции forEach, получающую на вход массив слов, и выводящую в консоль каждый элемент массива без главных букв 

type CallbackForEach<T> = (element: T, index: number, array: T[]) => void;

function customForEach<T>(array: T[], callback: CallbackForEach<T>): void {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  };
};

const words: string[] = ["hamster", "Cat", "Dog", "elephant", "Giraffe"];

customForEach(words, (word) => {
  if (!/[A-Z]/.test(word)) {
    console.log(word);
  };
});


//  b. Создать реализацию функции map, принимающую массив числе 1-10, возвращающую новый массив, где каждый каждый элемент - это нулевой элемент 
// исходного массива умноженный на его индекс

type CallbackMap<T, U> = (element: T, index: number, array: T[]) => U;

function customMap<T, U>(array: T[], callback: CallbackMap<T, U>): U[] {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = callback(array[i], i, array);
    result.push(item);
  };
  return result;
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const mappedArray: number[] = customMap(numbers, (num, index) => {
  return num * index;
});

console.log(mappedArray);

// 2. У нас есть интерфейс, описывающий какой объект должен отправляться в апи для эндпоинта /users.  
//   Напишите функцию, которая будет генерировать объект юзера с захардкоданными/динамически создаваемыми данными, 
//   а также может (но не обязана) принимать на вход объект, с теми полями юзера, которые мы бы хотели заменить в сгенерированных. 
//   Динамическое создание данных в юзере можно реализовывать разными способами, а также с подключением библиотек. 
//   Исходный интерфейс у вас только один, его используем и новые не пишем. 

  // interface IUser {
  //   username: string,
  //   password: string,
  //   email: string,
  //   role: 'user' // [user, admin, guest],
  //   createdAt: Date
  // }

  interface IUserCustom {
    username: string;
    password: string;
    email: string;
    role: 'user' | 'admin' | 'guest';
    createdAt: Date;
  }
  

 
  function randomUsername(): string {
    return `user${Math.floor(Math.random() * 1000)}`;
  };
  
  function randomPassword(): string {
    return `password${Math.floor(Math.random() * 1000)}`;
  };
  
  function randomEmail(): string {
    return `user${Math.floor(Math.random() * 1000)}@mail.com`;
  };
  
  function generateUserRequestData(overrides?: Partial<IUserCustom>): IUserCustom {
  
    const defaultUser: IUserCustom = {
      username: randomUsername(),
      password: randomPassword(),
      email: randomEmail(),
      role: 'user',
      createdAt: new Date(),
    };
  
    const user: IUserCustom = { ...defaultUser, ...overrides };
    return user;
  }
  

  const newUser: IUserCustom = generateUserRequestData();
  console.log(newUser);
  

// 3. Написать дженерик тип, который принимает тип объекта с любым количеством вложенных параметров (как примитивных, так и ещё объектов), 
//   и возвращает новый тип, где все поля исходного стали не обязательными

type MakePartial<T> = {
    [U in keyof T]?: T[U] extends object ? MakePartial<T[U]> : T[U];
  };

  interface IPerson {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  };
  
  type OptionalPerson = MakePartial<IPerson>;

  
// 4. Написать дженерик функцию search, которая ищет в массиве объекты, в значениях которых есть переданное значение. 
//   Функция на вход принимает массив объектов и значение для поиска. Возвращает массив тех объектов, которые подпадают под условие, либо пустой массив. 
//   Объекты могут быть абсолютно разными по набору ключей и типов значений в них. 
//   Для упрощения - в ключах обьектов не могут лежать другие массивы/объекты.

type SearchCallback<T> = (obj: T) => boolean;

function search<T extends object, U>(
  array: T[],
  value: U,
  callback: SearchCallback<T>
): T[] {
  return array.filter((obj) => {
    return callback(obj) && Object.values(obj).includes(value);
  });
};


interface IPersonCustom {
  name: string;
  age: number;
};

const arrayOfPeople: IPersonCustom[] = [
  { name: "Ted", age: 28 },
  { name: "Marshall", age: 30 },
  { name: "Lilly", age: 28 },
];

const value = "Lilly";
const found = search(arrayOfPeople, value, (person) => {
  return person.name === value;
});

console.log(found);
