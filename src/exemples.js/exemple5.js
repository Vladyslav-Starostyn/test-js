// Модуль 3. Занятие 1. Объекты

// Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя
// Object.keys() и for...of

// Код

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

// console.log(user);

//=====================================================================================//

// Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды.Напишите код
// для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// Код

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function getSalariesSam(salaries = {}) {
//   const values = Object.values(salaries);
//   console.log(values);

//   let sum = 0;
//   for (const value of values) {
//     sum += value;
//   }

//   return sum;
// }

// console.log(getSalariesSam(salaries));

//=====================================================================================//

// Example 3 - Массив объектов

// Напишите функцию calcTotalPrice(stones, stoneName), которая принимает массив обьектов
// и строку с названием камня.Функция считает и возвращает общую стоимость камней с таким
// именем, ценой и количеством из обьекта

// Код

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let totalCost = 0;

//   for (const stone of stones) {
//     if (stoneName === stone.name) {
//       totalCost = stone.price * stone.quantity;
//       return totalCost;
//     }
//   }

//   return 0;
// }

// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'Бриллиант'));
// console.log(calcTotalPrice(stones, 'Сапфир'));
// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'Янтарь'));

//=====================================================================================//

// Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка.Есть объект account в
//котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */
// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount, // amount: amount,
//       type, // type: type,
//       date: Date.now(),
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const newTransactions = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransactions);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('недостаточно средств');
//     } else {
//       this.balance -= amount;
//       const newTransactions = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW
//       );
//       this.transactions.push(newTransactions);
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// console.log(account.balance);
// account.deposit(100);
// account.deposit(50);

// console.log(account.balance); //100
// account.withdraw(200);
// account.withdraw(80);
// account.deposit(30);
// account.withdraw(25);

// console.log(account.balance);

// console.log(account.transactions);
// console.log(account.getTransactionDetails(2));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account.transactions);

//=====================================================================================//
