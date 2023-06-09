// Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

//поиск индекса предприятия через id предприятия:

const getEnterpriseIndex = function (value) {
    const index = enterprises.findIndex(ent => {
        return ent.id == value;
    })
    return index;
}

//поиск индекса предприятия через id его отдела:

const getEnterpriseIndexFromDepId = function (value) {
    const index = enterprises.findIndex(ent => {
        return ent.departments.find(el => el.id == value);
    })
    return index;
};

//поиск индекса отдела предприятия через id самого отдела:

const getDepartmentIndexFromDepId = function (value) {
    const index_ent = getEnterpriseIndexFromDepId(value)
    const index_dep = enterprises[index_ent].departments.findIndex(ent => {
        if (ent.id == value) return ent;

    })
    return index_dep;
}

//вычисление макимального id в массиве:

const allId = [];

const getMaxId = function (enterprises) {
    for (let item in enterprises) {
        if (typeof enterprises[item] == 'object') {
            getMaxId(enterprises[item])
        } else if (item == 'id') {
            allId.push(enterprises[item])
        }
    }
    return Math.max.apply(null, allId);
}


// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

console.log(' ')
console.log('     ****** Task 1 ******')
console.log(' ')

//вспомогательная функция, которая позволит склонять окончания слова "сотрудник" 
const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

function getAllEnterprisesAndDepartments(arr) {
    const list = []
    arr.forEach(el => {
        let counter = 0;
        const department = el.departments.map(item => {
            counter += item.employees_count
            return ` ${item.name} (${item.employees_count}  ${declination(item.employees_count, ['сотрудник', 'сотрудника', 'сотрудников'])})`;
        }).join('\n- ');
        list.push(`${el.name} (${counter} ${declination(counter, ['сотрудник', 'сотрудника', 'сотрудников'])}) ${'\n' + '- ' + department}`);
    });
    return list.join('\n');
}
console.log(getAllEnterprisesAndDepartments(enterprises));

console.log(' ')
console.log('     ****** Task 2 ******')
console.log(' ')

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(criteria) {
    return enterprises.filter(ent => {
        if (ent.id == criteria || ent.departments.find(el => el.id == criteria || el.name == criteria)) {
            console.log(ent.name)
        }
    })
}
getEnterpriseName("Отдел аналитики");
getEnterpriseName(1);
getEnterpriseName(7);

console.log(' ')
console.log('     ****** Task 3 ******')
console.log(' ')


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

function addEnterprise(newEnterprise) {
    let newEnt = {
        id: getMaxId(enterprises) + 1,
        name: newEnterprise,
        departments: []
    }
    enterprises.push(newEnt);
    return enterprises;
}
console.log(addEnterprise("Предприятие 4"));

console.log(' ')
console.log('     ****** Task 4 ******')
console.log(' ')


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(entId, depNewName) {
    let indexEnt = getEnterpriseIndex(entId)
    let newDep = {
        id: getMaxId(enterprises) + 1,
        name: depNewName,
        employees_count: 0
    }
    enterprises[indexEnt].departments.push(newDep);
    console.log(enterprises[indexEnt]);
}
addDepartment(9, 'Отдел сантехники');

console.log(' ')
console.log('     ****** Task 5 ******')
console.log(' ')


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(entId, entNewName) {
    let indexEnt = getEnterpriseIndex(entId)
    enterprises[indexEnt].name = entNewName;
    console.log(enterprises);
}
editEnterprise(9, "Предприятие ХXX");

console.log(' ')
console.log('     ****** Task 6 ******')
console.log(' ')


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(depId, newDepName) {
    const indexEnt = getEnterpriseIndexFromDepId(depId);
    const indexDep = getDepartmentIndexFromDepId(depId);
    let department = enterprises[indexEnt].departments[indexDep];

    department.name = newDepName;
    console.log(department);
}
editDepartment(7, 'Отдел ночного дожора');

console.log(' ')
console.log('     ****** Task 7 ******')
console.log(' ')


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterprise(entId) {
    let indexEnt = getEnterpriseIndex(entId)
    enterprises.splice(indexEnt, 1)
    console.log(enterprises)
}
deleteEnterprise(11);

console.log(' ')
console.log('     ****** Task 8 ******')
console.log(' ')

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function deleteDepartment(depId) {

    let indexEnt = getEnterpriseIndexFromDepId(depId)
    let indexDep = getDepartmentIndexFromDepId(depId)
    let department = enterprises[indexEnt].departments;

    if (department[indexDep].employees_count == 0) {
        department.splice(indexDep, 1)
        console.log(enterprises[indexEnt])
    } else {
        console.log(`You can't delete this department while it has employees!`)
    }
}
deleteDepartment(12);
deleteDepartment(2);


console.log(' ')
console.log('     ****** Task 9 ******')
console.log(' ')


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function moveEmployees(depIdFrom, depIdTo) {
    let indexEntDepFrom = getEnterpriseIndexFromDepId(depIdFrom);
    let indexEntDepTo = getEnterpriseIndexFromDepId(depIdTo);
    let departments = enterprises[indexEntDepFrom].departments;

    if (indexEntDepFrom == indexEntDepTo) {
        departments.find(el => el.id == depIdTo).employees_count += departments.find(el => el.id == depIdFrom).employees_count
        departments.find(el => el.id == depIdFrom).employees_count = 0;
        console.log(departments)
    } else {
        console.log('Please be sure that chosen departments are in same enterprise')
    }
}
moveEmployees(3, 4);
moveEmployees(3, 5);