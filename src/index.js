// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)


// let students = 100;
// students += 50;
// console.log(students);


// const result = 108 + 223 - 2 * 5;
// console.log(result);


// const value = 27.9;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));


// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// let weight = '88.3';
// let height = '1.75';

// const bmi = weight / (height * height);
// console.log(Number(bmi.toFixed(1))); // 28.8


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


const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue !== undefined && incomingValue !== null ? incomingValue : defaultValue;
console.log(value);