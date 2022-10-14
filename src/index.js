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


// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue !== undefined && incomingValue !== null
// ? incomingValue : defaultValue;
// console.log(value);


// const totalMinutes = 170;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${hours}:${minutes}`);





// let officialname = prompt("Какое официальное название JavaScript?", "");

// if (officialname === 'ECMAScript') {
  
//   console.log(alert('Верно !'));
  
// } else {
//  console.log('Не знаете? ECMAScript!');
// }



// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);



// const userInput = prompt('Введите число', '');
// const numeric = Number(userInput) || 0;

// if(numeric > 0) {
//   console.log('Это положительное число');
// } else if (numeric < 0) {
//   console.log('Это отрицательное число');
// } else {
// console.log('Это ноль');
// }



// const a = 120;
// const b = 180;

// const sum = a > 100 && b > 100 ? ( a > b ? a : b) : b + 512;
// console.log(sum);



// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (link.endsWith('/')) {
//   link = link;
// } else {
//   link = link + '/';
// }
// // Пиши код выше этой строки
// console.log(link);




// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = link + '/';
// } else {
//   link = link;
// }
// // Пиши код выше этой строки
// console.log(link);



// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// link = (!link.endsWith('/') && link.includes('my-site')) ? link = link + '/' : link;

// // Пиши код выше этой строки
// console.log(link);



// const hours = 10;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }