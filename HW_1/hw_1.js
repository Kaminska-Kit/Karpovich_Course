// Task 1. Работа с переменными:

// 1. Создать переменную “item_1”

let item_1;

// 2. Присвоить переменной item_1 цифру 5.

item_1 = 5;

// 3. Вывести в консоль item_1.

console.log(item_1);

// 4. Создать переменную “item_2”

let item_2;

// 5. Присвоить переменной item_2 цифру 3.

item_2 = 3;

// 6. Вывести в консоль item_2.

console.log(item_2);

// 7. Создать переменную “item_3”

let item_3;

// 8. Присвоить переменной item_3 сложение item_1 и item_2.

item_3 = item_1 + item_2;

// 9. Вывести в консоль item_3.

console.log(item_3);

// 10. Создать переменную “item_4”
// 11. Присвоить переменной item_4 строку “Yolochka”
// 12. Вывести в консоль item_4.

let item_4 = "Yolochka";
console.log(item_4);

// 13. Вывести в консоль сложение item_3 и item_4.

console.log(item_3 + item_4);

// 14. Вывести в консоль умножение item_3 и item_4.

console.log(item_3 * item_4);

// 15. Создать переменную “item_5”
// 16. Присвоить переменной item_5 переменную item_3

let item_5 = item_3;

// 17. Создать переменную item_6.

let item_6;

// 18. Создать переменную item_6_type

let item_6_type;

// 19. Присвоить переменной item_6 значение 15

item_6 = 15;

// 20. Присвоить переменной item_6_type тип переменной item_6

item_6_type = typeof (item_6);

// 21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——

console.log(`item_6 == ${item_6}, item_6_type == ${item_6_type}`);

// 22. Создать переменную item_7 и в ней преобразовать item_6 в String.

let item_7 = String(item_6);

// 23. Создать переменную item_7_type
// 24. Присвоить переменной item_7_type тип переменной item_7
// 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  

let item_7_type = typeof item_7;
console.log(`item_7 == ${item_7}, item_7_type == ${item_7_type}`);


// Task2*. Решить квадратные уравнения. Переменные называть по правилам.
// Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"


// Формула вычисления дискриминанта D квадратного уравнения вида a*x^2 + b*x + c = 0 (а ≠ 0): 
// D = b^2 - 4*a*c

// 1.  x2 - 6x + 9 = 0. - один корень

let a = 1;
let b = -6;
let c = 9;

let D_1 = b**2  - 4*a*c;
// console.log(D); //0

let root = (-b + Math.sqrt(D_1))/2*a;
console.log(`Ответ к уравнению 1: ${root}`);

// 2.  x2 - 4x - 5 = 0. - два корня

let x = 1;
let y = -4;
let z = -5;

let D_2 = y**2  - 4*x*z;
// console.log(D); //36

let root_1 = (-y + Math.sqrt(D_2))/2*x;
let root_2 = (-y - Math.sqrt(D_2))/2*x;
console.log(`Ответ к уравнению 2: ${root_1} и ${root_2}`);


// Task3**. Напишите программу, которая принимает целое положительное число n, 1 <= n <= 9, и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются

const result = function(n) {
    let nn = String(n) + String(n);
    let nnn = String(n) + String(n) + String(n);

    if(Number.isInteger(n) && 1<=n && n<=9) {
        console.log(n + +nn + +nnn);
    } else {
        console.log("You should choose integer from 1 to 9");
    }
}
result(-1);
result(5);
result("5")
result(14.88)



