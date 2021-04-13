
//задание 1

const windFromTheSea =
    `Ветер с моря дул, ветер с моря дул
Нагонял беду, нагонял беду
И сказал ты мне, и сказал ты мне
Больше не приду, больше не приду

Видно не судьба, видно не судьба
Видно нет любви, видно нет любви
Видно надо мной, видно надо мной
Посмеялся ты, посмеялся ты

Я тебя люблю, я тебя люблю
Честно говорю, честно говорю
Ведь ты знаешь сам, ведь ты знаешь сам
Как тебя я жду, как тебя я жду

Видно не судьба, видно не судьба
Видно нет любви, видно нет любви
Видно надо мной, видно надо мной
Посмеялся ты, посмеялся ты`


let str = windFromTheSea.replace(/,/g, "").replace(/\n/g, ' ').toLowerCase();

let arr = str.split(' ');

let set = new Set(arr);

let map = new Map();

set.forEach((key, value) => {
    let i = 1;
    for (let a = 0; a < arr.length; a++) {
        if (value === arr[a]) {
            map.set(value, i++)
        };
    };
});

console.log(map);





//задача 2

let id = [];
let map = new Map();
let age = 0;
let jump = 0;


function Info(name, age, city, jump) {
    this.nama = name;
    this.age = age;
    this.city = city;
    this.jump = jump;
};

while (true) {
    let str = prompt("Введите через запятую: Имя, возраст, город, количество прыжков")

    if (str === null || str === "") {
        break;
    };

    let arr = str.split(",");

    id.push(new Info(arr[0], arr[1], arr[2], arr[3],));
};

id.forEach((item, index) => {
    map.set("Гость " + ++index, item);

});

map.forEach(function (value) {
    age += value.age / map.size
    jump += value.jump / map.size
});

console.log(map);
console.log(`Средний возраст: ${age}
Cреднее количество прыжков: ${jump}`);





//задание 2
//вариант 2

let id = [];
let map = new Map();

while (true) {
    let str = prompt("Введите через запятую: Имя, возраст, город, количество прыжков")

    if (str === null || str === "") {
        break;
    };

    let arr = str.split(",");
    id.push(arr);
};

id.forEach((item, index) => {
    map.set("Гость " + ++index, item);

});

let age = 0;
let jump = 0;

map.forEach((value) => {
    age += value[1] / map.size
    jump += value[3] / map.size
});

console.log(map);
console.log(`Средний возраст: ${age}
Cреднее количество прыжков: ${jump}`);



