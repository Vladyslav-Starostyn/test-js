// console.log("hello");
// const a = 12;
// console.log(a);

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// let students = 100;
// students += 510;
// console.log(students);

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// const value = 27.4;
// console.log(value);
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(",", ".");
// height = height.replace(",", ".");

// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);
// console.log(bmi); // 28.8


// const weight = Number.parseFloat('88,3'.replace(",", "."));
// const height = Number.parseFloat('1.75'.replace(",", "."));
// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));

// console.log(bmi); // 28.8




// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);





// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);




// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);


// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

const totalMinutes = 500;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


