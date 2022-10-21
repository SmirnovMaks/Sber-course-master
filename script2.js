/// 2.11
/////////

words = ["Заказ", "Такси", "Доход"]
let palind = 0
let nopalind = 0
let res = []

for (let i of words) {
    if (i.split('').reverse().join('').toLowerCase() != i.toLowerCase()) {
        nopalind++
    } else {
        palind++
    }
}
res.push(palind)
res.push(nopalind)
console.log(res);

/// 2.12
/////////

dates = "23.04.1996 07.10.2002 15.08.1945"


console.log(dates.replaceAll('.', '/').split(' '));

/// 2.13
/////////

tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."

let indexTrain = tickets.indexOf(':')
let lastIndexTrain = tickets.indexOf('.')
let indexAir = tickets.lastIndexOf(':')
let trainTicket = tickets.slice(indexTrain + 2, lastIndexTrain).split(',')
let airTicket = tickets.slice(indexAir + 2, tickets.length - 1).split(',')

let newTrainTicket = trainTicket.map(e => e = e.trim())
let newAirTicket = airTicket.map(e => e = e.trim())

let res = {
    train: [],
    airplane: []
}
res.train = newTrainTicket
res.airplane = newAirTicket
console.log(res);

/// 2.14
/////////

numbers = [10, 20, 33, 55, 100]
let sum = 0
let res = 0
for (let i of numbers) {
    sum += i
    res++
    if (sum > 50) {
        res = res - 1
        break;
    } else if (sum == 50) {
        break;
    }
}
console.log(res);

/// 2.15
/////////

values = ["100", "30", "Не число", "20", "Тоже не число"]

let res = 0

for (let i of values) {
    i = +i
    if (!isNaN(i)) {
        res += i
    }
}
console.log(res);

/// 2.15
/////////

array_1 = [2, 4, 7, 8, 1]
array_2 = [2, 5, 11, 6, 1]