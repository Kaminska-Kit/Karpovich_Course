// Task 1
export {}
// 1. Задание: Создайте универсальную функцию с именем findMaxKeysValue, которая принимает массив значений любого типа и 
//     возвращает объект с максимальным количеством пар ключ\значение из этого массива. Напишите пошаговую инструкцию, как решить эту задачу. 
//   Шаги:
//   1. Создайте дженерик функцию, принимающую на вход массив объектов Т и возвращающий Т
//   2. Пропишите, что Т - обобщенный тип, наследуемый от Record, где ключи - строки, значения - строки, цифры, булевые
//   2. Напишите проверку не пустой ли массив
//   3. Создайте переменную resultObject типа Т, и положите в нее нулевой элемент
//   4. Создайте цикл бегущий по массиву от 1 элемента до конца
//   5. Проверяйте на каждой итерации количество пар ключ\значение в объекте, если это количетсво больше чем у объекта в resultObject - 
//       положить в resultObject текущий элемент
//   6. Вернуть из функции объект resultObject после завершения цикла


type Custom = Record<string, string | number | Boolean>
const testObject: Custom[] = [
    {name: 'Hanna'},
    {age: 30},
    {isMarried: false, hasChildren: false},
    {numberOfPets: 2, hasCats: true, hasDogs: false}
]

function findMaxKeysValue<T extends Custom>(data: T[]): T {
    if (data.length === 0) throw new Error('Empty array');
    let resultObject = data[0];
    for(let i = 1; i < data.length; i++){
        let currentObject = data[i];
        if (Object.keys(currentObject).length > Object.keys(resultObject).length) {
            resultObject = currentObject
        };
    };
    return resultObject;
};
console.log(findMaxKeysValue(testObject))
