// Модуль 3 Занятие 6. Деструктуризация и rest / spread

// Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было

// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается

// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

//=====================================================================================//

// Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// Было

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Ожидается

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//=====================================================================================//

// Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Было

// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается

// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

//=====================================================================================//

// Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName
// и stock и выводила репорт о количестве товаров на складе любой компании.

// Решение

// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

//=====================================================================================//

// Example 5 - Операция spread

// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект
// контакта с добавленными свойствами id и createdAt, а также list со значением "default"
// если в partialContact нет такого свойства.

// Решение

// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

//=====================================================================================//

// Example 6 - Операция rest

// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со
// свойством fullName, вместо firstName и lastName.

// Решение

// function transformUsername({ firstName, lastName, ...user }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...user,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

//=====================================================================================//

//                                   замыкание                                         //

// const fnA = function (parametr) {
//   const innerVariable = 'Значение внутренней переменной fnA';

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVariable);
//     console.log('это вызов innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// // console.log(fnA);
// // console.log(fnB);

// fnB( );

//=====================================================================================//

//                              автопроверка залача 41                                 //

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion === newPotion) {
//         this.potions.push(newPotion);
//       }
//     }

//     return `Error! Potion ${newPotion} is already in your inventory!`;
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Speed potion'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Stone skin', 'New stone skin'));
// console.table(atTheOldToad.getPotions());

//=====================================================================================//
