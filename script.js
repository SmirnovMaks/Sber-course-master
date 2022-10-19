// 3.1

const name = '  Max   '

const last_name = 'Smirnov   '

console.log(name.trim().length + last_name.trim().length);

/////////////////////

// 3.2

const word = "велосипед"

const result = word[0].toLocaleUpperCase()

console.log(result);

///////////////////

// 3.5

const str = 'Имя: ' + '"' + obj.name + '" ' + 'Фамилия: ' + "'" + obj.last_name + "' " + 'Возраст: ' + obj.age

console.log(str)

/////////////////

//3.6

const obj1 = {
    name: name,
    last_name: last_name,
    age: age
}
console.log(obj1)

//////////////

// 3.7



if (!value) {
    console.log('null');
} else {
    console.log(typeof value);
}

//////////////

// 3.8

console.log(+num_1 + +num_2)

//////////////

// 3.9

let size = '500.5px'



console.log(parseFloat(size))

//////////////

// 3.10

console.log((a * b) ** 2)

//////////////

// 3.11

console.log(Math.sqrt((a ** 2) + (b ** 2)))

//////////////

// 3.12

let a = "5px"

let b = "7px"

let c = "10px"

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

//////////////

// 4.1

const speed = 65

if (speed > 0 && speed <= 30) {
    console.log('Вы едете слишком медленно')
} else if (speed >= 31 && speed <= 70) {
    console.log('Вы едете с нормальной скоростью')
} else {
    console.log('Вы едете слишком быстро, сбавьте скорость')
}

//////////////

// 4.2

let price = 'двадцать рублей'
let num = parseInt(price)

if (isNaN(num)) {
    console.log('Не число');
} else if (num <= 0) {
    console.log('Число не корректное');
} else {
    console.log(num);
}


//////////////

// 4.3

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}


//////////////

// 4.5

switch (task) {
    case 'удалить':
        console.log('delete')
        break;
    case 'переименовать':
        console.log('rename')
        break;
    case 'редактировать':
        console.log('edit')
        break;
}


//////////////

// 4.6

let price = 1000
let range = 'day'
let translateRange
switch (range) {
    case 'day':
        translateRange = 'день'
        break;
    case 'week':
        translateRange = 'неделю'
        break;
    case 'month':
        translateRange = 'месяц'
        break;
}
console.log(price + ` Р в ${translateRange}`);

//////////////

// 4.7

let a = 6
let b = 0
let sign = '/'

switch (sign) {
    case '*':
        console.log(a * b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '+':
        console.log(a + b);
        break;
    case '/':
        console.log(a / b);
        break;
}

//////////////

// 4.8

let a = 6
let b = 0
let sign = '/'

if (sign == '/' && b == 0) {
    console.log('Делить на 0 нельзя!');
} else {
    switch (sign) {
        case '*':
            console.log(a * b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '+':
            console.log(a + b);
            break;
        case '/':
            console.log(a / b);
            break;
    }
}

//////////////

// 4.9

let temp = 11
let weather = 'clear'
let activity

if (temp >= 25 && weather == 'clear') {
    activity = 'golf'
} else if (temp > 10 && temp < 25 && weather == 'clear') {
    activity = "bowling"
} else {
    activity = "hiking"
}
console.log(activity);

console.log("4" + +"two");
"4" + +"2"
"4" + +"two"



//////////////

// 5.1

let start = 0
let end = 50
let sum = 0
for (let i = start; i <= end; i++) {
    if (i % 5 !== 0) {
        continue;
    }
    sum += i
}
console.log(sum);

//////////////

// 5.2


let word = "мир"
let lastIndex = word.length - 1
let wordReverse = ''
for (let i = 0; i < word.length; i++) {
    wordReverse += word[lastIndex - i]
}
console.log(wordReverse);


console.log(word.split("").reverse().join(""));


//////////////

// 5.3


word = "Доход"
word = word.toLowerCase()
let lastIndex = word.length - 1

for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[lastIndex - i]) {
        console.log("Слово не является палиндромом!");
        break;
    } else {
        console.log("Слово является палиндромом!");
    }
}


//////////////

// 6.1


const priceMessage = () => {
    console.log(`Данный товар стоит ${price} рублей`)
}

priceMessage()

//////////////

// 6.2

const mult = (a, b) => {
    console.log(a * b);
}


//////////////

// 6.4
num = 2
num2 = ' '
for (let i = 0; i < 3; i++) {
    num = num * num
    num2 = num2 + ' ' + num

}
console.log(num2.trim());

//////////////

// 6.5
let data = "120px"
const getNumber = data => {
    if (isNaN(parseInt(data))) {
        console.log(0);
    } else {
        console.log(parseInt(data));
    }
}

getNumber(data)



//////////////

// 6.6

value = 4
total = 80

const getPercent = (value, total) => {
    console.log((value / total) * 100);
}

getPercent(value, total)
//////////////

// 7.1

const obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
}

let obj2 = {}
let prop
let newProp

for (prop in obj) {
    newProp = obj[prop];
    !obj2.hasOwnProperty(obj[prop]) ? obj2[newProp] = 1 : obj2[newProp]++
}
console.log(obj2);



//////////////

// 7.2




let list = [{
        product: "Apple",
        price: 25
    },
    {
        product: "Cherry",
        price: 32
    },
    {
        product: "Strawberry",
        price: 45
    }
]

let maxPrice = 0
let maxProduct
for (let i of list) {
    if (i.price > maxPrice) {
        maxPrice = i.price;
        maxProduct = i.product;

    }

}
console.log(maxProduct);

//////////////

// 9.1

list = ["Груша", "Яблоко"]
list.unshift("Яблоко")
list.pop()
list.push('Клубника')
console.log(list);

//////////////

// 9.2

list = ["Груша", "Яблоко"]
let lengthStr = 0
let str = ''

for (i of list) {
    if (i.length > lengthStr) {
        str = i
    }
}
console.log(str);

//////////////

// 9.3

list = [23, 13, 3]
let sum = 0
for (let i of list) {
    sum += i
}
console.log(sum);


//////////////

// 9.4

list_1 = [12, 3]

list_2 = [2, 1]

let list_3 = [...list_1, ...list_2]
for (let i = 0; i < list_3.length; i++) {
    console.log(list_3[i]);
    list_3[i] = list_3[i] * list_3[i]
}
console.log(list_3);


//////////////

// 9.5


list = [12, -4, 5, 32, 2]

let sum = 0

for (let i of list) {
    if (i > 0) {
        sum += i
    }
}
console.log(sum);


//////////////

// 9.6

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

let sum = 0

primeNum:
    for (let i of list) {
        if (i == 0 || i == 1) {
            sum += 0
        } else {

            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue primeNum;
            }
            sum += i
        }
    }

console.log(sum);

let objectArray = [{
    name: 'Иван'
}, {
    name: 'Петя'
}, {
    name: 'Саша'
}];
console.log(objectArray.toString());


//////////////

// 9.7


list = [2, 45, 3, 23, 6]
let maxNum = 0
let minNum = 99
let mult = 0
for (let i of list) {
    if (i > maxNum) {
        maxNum = i
    }
    if (i < minNum) {
        minNum = i
    }
}
console.log(maxNum * minNum);

//////////////

// 9.10
list = [2, 45, 3, 23, 6]
const count = list => {
    let count = 0
    for (let i of list) {
        if (i % 2 == 0) {
            count++
        }
    }
    return count;
}

console.log(count(list));

//////////////

// 9.11


list = [2, 45, 3, 23, 6]

const average = list => {
    let sum = 0
    for (let i of list) {
        sum += i
    }
    return Math.round(sum / list.length)
}

console.log(average(list));

//////////////

// 9.12


list = [2, 54, 2, 54, false, 2]
let sum = 0
for (let i of list) {
    if (typeof i != 'number') {
        break;
    } else {
        sum += i
    }
}
console.log(sum);

/////////////

// 9.14


list = [2, "привет", 23, true, 2, false, 2]
let numbers_list = []

for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == 'number') {
        numbers_list.push(list[i])
    } else if (list[i] == false) {
        break;
    }
}
console.log(numbers_list);

/////////////

// 9.15

list = ["Лёша", "default", "полке", "клопа", "нашёл"]
let count = 0
for (let i of list) {
    if (i.toLowerCase() != 'default') {
        count++
    }
}
console.log(count);

/////////////

// 9.16

list = ["почтовый", "желание", "абсолютный", "закрытый"]

let str = ''
for (let i of list) {
    str = str + i[0]
}
console.log(str);