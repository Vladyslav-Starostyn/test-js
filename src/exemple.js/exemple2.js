// Модуль 1. Занятие 2. Ветвления.Циклы

// Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".Если пользователь вводит ECMAScript,
// то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// let officialname = prompt("Какое официальное название JavaScript?", "");

// if (officialname === 'ECMAScript') {

//   console.log(alert('Верно !'));

// } else {
//  console.log('Не знаете? ECMAScript!');
// }

//=====================================================================================//

// Example 2 - Отображение времени(if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

//=====================================================================================//

// Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число
// больше нуля.Если был введен ноль, выводи в консоль строку
// "Это ноль".Если передали отрицательное число, в консоли
// должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число', '');
// const numeric = Number(userInput) || 0;

// if(numeric > 0) {
//   console.log('Это положительное число');
// } else if (numeric < 0) {
//   console.log('Это отрицательное число');
// } else {
// console.log('Это ноль');
// }

//=====================================================================================//

// Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных a и b.Если оба значения больше 100,
// то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// const sum = a > 100 && b > 100 ? ( a > b ? a : b) : b + 512;
// console.log(sum);

//=====================================================================================//

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

//=====================================================================================//

// Example 6 - Форматирование ссылки(includes и логическое «И»)

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае,
// если в link есть подстрока "my-site".Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = link + '/';
// } else {
//   link = link;
// }
// // Пиши код выше этой строки
// console.log(link);

//=====================================================================================//

// Example 7 - Форматирование ссылки(тернарный оператор)

// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// link = (!link.endsWith('/') && link.includes('my-site')) ? link = link + '/' : link;

// // Пиши код выше этой строки
// console.log(link);

//=====================================================================================//

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

//=====================================================================================//

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

//=====================================================================================//

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

//=====================================================================================//

// Example 11 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа
// по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

//=====================================================================================//

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

//=====================================================================================//
