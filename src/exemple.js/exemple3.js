// Модуль 2. Занятие 3. Массивы

// Example 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива.
// Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues'];
// console.log(genres);

// genres.push('Рок-н-ролл');
// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.splice(0, 1));
// console.log(genres);

// genres.splice(0, 0, 'Country', 'Reggae');
// console.log(genres);




// Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '8 11';
// console.log(values);

// const arry = values.split(' ');
// console.log(arry);
// const x = Number(arry[0]);
// const y = Number(arry[1]);

// console.log(x * y);




// Example 3 - Перебор массива

// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате номер_элемента:
// значение_элемента.Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   let namber = i + 1;
//   console.log(`${namber}: ${fruits[i]}`);
// }
  
// Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров,
// разделенные запятыми.Порядковый номер имен и телефонов в строках указывают
// на соответствие.Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const arryNames = names.split(',');
// const arryPhones = phones.split(',');

// console.log(arryNames);
// for (let i = 0; i < arryNames.length; i += 1) {
//   // console.log(arryNames[i]);
//   // console.log(arryPhones[i]);
//   const newArryNames = `${arryNames[i]}`;
//   console.log(`${newArryNames.padEnd(10, ' ')} tel.: ${arryPhones[i]}`);
// }




// Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// console.log(string);
// const stringArr = string.split(' ');
// console.log(stringArr);

// stringArr.shift();
// stringArr.pop();
// console.log(stringArr);

// const newString = stringArr.join(' ');
// console.log(newString);




// Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку(обратный порядок букв) и выводит ее
// в консоль.

// const string = 'Welcome to the future';
// const stringArr = string.split('');
// console.log(stringArr);
// const reversedStr = [];

// for (let i = stringArr.length; i >= 0; i -= 1) {
//   reversedStr.push(stringArr[i]);
// }
// const newString = reversedStr.join('');
// console.log(`'${newString}'`);

//                       // или

// console.log(string.split('').reverse().join(''));




// Example 7 - Сортировка массива с циклом

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// langs.sort();
// console.log(langs);
 
// for (let x = 0; x < langs.length; x += 1) {
//   for (let y = x + 1; y < langs.length; y += 1) {
//     const lang1 = langs[x];
//     const lang2 = langs[y];

//     if (lang1[0] > lang2[0]) {
//       langs[y] = lang1;
//       langs[x] = lang2;
//     }
//   }
// }
// console.log(langs);




// Example 8 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве.Код должен работать для любого
// массива чисел.Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
    
//   }
// }
// console.log(min); //1


//=====================================================================================//