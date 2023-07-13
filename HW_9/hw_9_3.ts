// Task 3.

// 1. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве. 

type IncomeObject = Record<string, string | number | boolean>;
type Result = {
    string: number,
    number: number,
    boolean: number
};

function valuesCounter(data: IncomeObject, result: Result){
    for (const key in data) {
        if(data.hasOwnProperty(key)) {
            if (typeof data[key] == 'string') {
                result.string++;
            } else if (typeof data[key] == 'number') {
                result.number++;
            } else if (typeof data[key] == 'boolean') {
                result.boolean++;
            };
        };
    };
    return result;
};

function countValuesByTypes(data: IncomeObject | IncomeObject[]) {
    const result: Result = {
        string: 0,
        number: 0,
        boolean: 0
    };
    if (Array.isArray(data)) {
        data.forEach(obj => {
            valuesCounter(obj, result) 
        });
    } else valuesCounter(data, result);
    
    return result;
};

const firstObject: IncomeObject = {
    name: 'Ted',
    age: 27,
    isMarried: false
};

const secondObject: IncomeObject = {
    name: 'Marshall',
    age: 27,
    isMarried: true,
    hasAJob: true
};

console.log(countValuesByTypes(firstObject))
console.log(countValuesByTypes([firstObject, secondObject]))


// 2. Создайте псевдоним типа с именем ValidationRule, представляющий правило проверки для поля формы. 
//   Он должен включать свойства для имени поля (строка) и функцию проверки, которая принимает значение (любое) и возвращает логическое значение, 
//   указывающее, является ли значение допустимым. Затем создайте функцию с именем validateForm, 
//   которая принимает массив объектов ValidationRule и объект данных формы. 
//   Функция должна проверять каждое поле формы на основе соответствующих правил проверки и возвращать объект, 
//   указывающий статус проверки для каждого поля. Убедитесь, что сигнатура функции обеспечивает использование псевдонима типа ValidationRule.
  
//   Создайте функцию falidateForm, которая будет принимать массив объектов ValidationRule и объект типа FormData.
//   FormData - объект, где: ключи - строки (name, surname, email, phone, age, username, password), 
//     значения - соответственно (string, string, string, number, number, string, string)
//   ValidationRule - объект, с ключем fieldName, в значении которого могут находиться названия полей (те же что и в FormData),
//     и ключ validate - валидационная функция (например (value: string) => value.length < 40 && value.length > 2)
//   функция falidateForm должна проверить каждое значение в объекте formData на соответствие валидационным функциям для соответствующих полей, 
//     переданнм в массиве ValidationRules. Возвращает функция объект с ключами как в formData и boolean значениями, вернувшимися из валидаций

//   Например:

//     const rules: ValidationRule[] = [
//       {
//         fieldName: "username",
//         validate: (value) => value && value.length >= 3,
//       },
//       {
//         fieldName: "password",
//         validate: (value) => value && value.length >= 8,
//       }
//     ];

//     const formData = {
//       username: "john",
//       password: "secretpass",
//     };

//     const validationStatus = validateForm(rules, formData);
//     На выходе: { username: true, password: true }

interface IFormData {
    name: string;
    surname: string;
    email: string;
    phone: number;
    age: number;
    username: string;
    password: string;
};
type FieldNames = 'name' | 'surname' | 'email' | 'phone' | 'age' | 'username' | 'password';
type ValidationFunc = (data: any) => boolean;
type ValidationRule = { fieldName: FieldNames, validation: ValidationFunc}
type ResultOfValidation = { [key in keyof IFormData]: boolean };

function validateForm(data: Partial<IFormData>, validations: ValidationRule[]) {
    let result: Partial<ResultOfValidation> = {};
    const keys = Object.keys(data);
    validations.forEach(check => {
        keys.forEach(key => {
            if(check.fieldName == key ) {
                result = {...result, 
                          ...{[key]: check.validation(data[key])},
                         };
            };
        });
    });
    return result;
}

const rules: ValidationRule[] = [
    {
        fieldName: "username",
        validation: (value) => value && value.length >= 3,
    },
    {
        fieldName: "password",
        validation: (value) => value && value.length >= 8,
    },
    {
        fieldName: "email",
        validation: (value) => value && value.length >= 5 && value.includes('@') && value.includes('.'),
    },
    {
        fieldName: "phone",
        validation: (value) => value && String(value).length >= 9 && String(value).length <= 12,
    },
    {
        fieldName: "age",
        validation: (value) => value && value >= 18,
    }
];

const formData: Partial<IFormData> = {
    username: "john",
    password: "secretpass",
    email: "em@il.com",
    phone: 80934329183,
    age: 16
};

const validationStatus = validateForm(formData, rules);
console.log(validationStatus); 
