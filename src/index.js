// Модуль 1. Занятие 1. Переменные, типы и операторы

// Example 1 - Математические операторы

// Выведи на экран общее количество яблок и винограда.Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)





// Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);




// Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);




// Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх / вниз и т.д.значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));




// Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"




// Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека.
//  Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк(специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88.3';
// let height = '1.75';

// const bmi = weight / (height * height);
// console.log(Number(bmi.toFixed(1))); // 28.8




// Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений ?
  
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





// Example 8 - Логические операторы

// Каким будет результат выражений ?
  
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




// Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.Проверь работу скрипта для слепдующих значений
//  переменной incomingValue: null, undefined, 0, false.Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue !== undefined && incomingValue !== null
// ? incomingValue : defaultValue;
// console.log(value);




// Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение totalMinutes (количество минут) 
//в строку в формате часов и минут HH: MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24: 01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// const totalMinutes = 170;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${hours}:${minutes}`);




// Модуль 1. Занятие 2. Ветвления.Циклы

// Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// let officialname = prompt("Какое официальное название JavaScript?", "");

// if (officialname === 'ECMAScript') {
  
//   console.log(alert('Верно !'));
  
// } else {
//  console.log('Не знаете? ECMAScript!');
// }




// Example 2 - Отображение времени(if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
//  Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);




// Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число
//  больше нуля.Если был введен ноль, выводи в консоль строку
//"Это ноль".Если передали отрицательное число, в консоли
//   должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число', '');
// const numeric = Number(userInput) || 0;

// if(numeric > 0) {
//   console.log('Это положительное число');
// } else if (numeric < 0) {
//   console.log('Это отрицательное число');
// } else {
// console.log('Это ноль');
// }




// Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных a и b.Если оба значения больше 100,
//   то выведи в консоль максимальное из них.
//   В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// const sum = a > 100 && b > 100 ? ( a > b ? a : b) : b + 512;
// console.log(sum);




// Example 5 - Форматирование ссылки(endsWith)

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (link.endsWith('/')) {
//   link = link;
// } else {
//   link = link + '/';
// }
// // Пиши код выше этой строки
// console.log(link);




// Example 6 - Форматирование ссылки(includes и логическое «И»)

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /
// .Если нет, добавь в конец значения link этот символ, но только в том случае,
//   если в link есть подстрока "my-site".Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = link + '/';
// } else {
//   link = link;
// }
// // Пиши код выше этой строки
// console.log(link);




// Example 7 - Форматирование ссылки(тернарный оператор)

// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// link = (!link.endsWith('/') && link.includes('my-site')) ? link = link + '/' : link;

// // Пиши код выше этой строки
// console.log(link);




// Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера
// строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 10;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }



// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3 + дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 3;
// // Пиши код ниже этой строки
// let string;
// if (daysUntilDeadline === 0) {
//   string = 'Сегодня'
// } else if (daysUntilDeadline === 1) {
//   string = 'Завтра';
// }  else if (daysUntilDeadline === 2) {
//   string = 'Послезавтра';
// } else  {
//   string = 'Дата в будущем';
// }
// console.log(string);




// Example 10 - Дедлайн сдачи проекта(switch)

// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 2;
// let string;

// switch (daysUntilDeadline) {
//   case 0:
//     string = 'Сегодня';
//     break;

//   case 1:
//     string = 'Завтра';
//     break;
  
//   case 2:
//     string = 'Послезавтра';
//     break;

//   default:
//     string = 'Дата в будущем';
// }
// console.log(string);




// Example 11 - Цикл for
  
// Напиши цикл for который выводит в консоль браузера числа
//  по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }




// Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью prompt
// и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('Логин');

// if (login) {
//   if (login === 'Админ') {
//     const password = prompt('Введите пароль');

//     if (password === 'Я админ') {
//       console.log('Здравствуйте!');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Я вас не знаю');
//   }
  
// } else {
//   console.log('Отменено');
// }




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
//  в консоль.

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
// let min;

// for (let i = 0; i < numbers.length; i +=1) {
//   if (numbers[i] < numbers[0]) {
//     min = numbers[i];
    
//   }
// }
// console.log(min); //1