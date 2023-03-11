// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// ===============================================================================================

// function add(a, b, c) {
//   console.log(`${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ===============================================================================================

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// };


// ===============================================================================================

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = (isValidPassword === `jqueryismyjam`);


//   return isMatch;
// }

// ===============================================================================================

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length -1;

// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


// ===============================================================================================

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// =======================================================================================================================================================================

// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи
// Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у
// worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];

// console.log(scores);

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);

// =======================================================================================================================================================================

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores, bestScore, worstScore);

// =======================================================================================================================================================================

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = ({

//   ...defaultSettings,
//   ...overrideSettings,

// });
// console.table(finalSettings);
  
// =======================================================================================================================================================================

// ДЕСТРУКТУРИЗАЦИЯ

// Перепеши функцію так, щоб вона приймала один обьект параметрів замість набору незалежних аргументів.

// Example 1
// function calcBMI({weigh, height}) {
//     const numbericWeight = Number(weigh.replace(',', '.'));
//     const numbericHeight = Number(height.replace(',', '.'));
//     return Number((numbericWeight / numbericHeight ** 2).toFixed(1));
// }

// console.log(
//   calcBMI({
//       weigh: '88,3',
//       height: '1.72',
//   })
// );

// console.log(
//     calcBMI({
//         weigh: '68,3',
//         height: '1.65',
//     })
//   );

// Example 2
  // Перепеши функцію так, щоб вона приймала обьект параметрів із властивостями
  // `companyName` та `stock` та виводила репорт про кількість товарів на складі будь-якої
  // компанії у вигляді `${companyName} has ${total} item in stock`.


//   function getStockReport({companyName, stock: {repairBots, defancceBots}}) {
//     return `${companyName} has ${repairBots + defancceBots} item in stock`;
//   }

//   function getStockReport({companyName, stock}) {
//     const goodsPrices = Object.values(stock);
//     let total = 0;

//     for (const goodsPrice of goodsPrices) {
//         total += goodsPrice;
//     }

//     return `${companyName} has ${total} item in stock`;
//   }

//   console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defancceBots: 50,
//         },
//     }),
//   );

//   console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
//   );


  // =======================================================================================================================================================================
// Example 1
 // Операція spread
 
 // Доповни функцію 'createContact(partialContact)` так, щоб вона повертала новий
 // об'єкт контакту з доданими властивостями 'id'(generateId) та `createAt`(Date.now()),
 // а також `list` зі значенням "default" якщо в `partialContact` немає такої властивості.

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2);
// }

//  function createContact(partialContact) {
//     // const defaultContactDate = {
//     //     id: generateId(),
//     //     createAt: Date.now(),
//     //     list: 'default',
//     // }

//     return {
//         // ...defaultContactDate,
//         id: generateId(),
//         createAt: Date.now(),
//         list: 'default',
//         ...partialContact,
//     };
//  }

//    console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@gmail.com',
//         list: 'friends',
//     }),
//   );

//   console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@gmail.com',
//     }),
//   );


  // Example 2
 // Операція rest
 
 // Напиши функцію 'transformUrserName(user)` так, щоб вона повертала новий об'єкт із властивістью
 // `fullName`, замість `firstName` та `lastName`.

//  function transformUrserName({firstName, lastName, ...restParams}) {
//     console.log(restParams);
    
//     return {
//         ...restParams,
//         fullName: `${firstName} ${lastName}`,
//     };
//  }

//     console.log(
//         transformUrserName({
//             id: 1,
//             firstName: 'Jacob',
//             lastName: 'Mercer',
//             email: 'j.mercer@gmail.com',
//             friendCount: 40,
//             frends: ['Bob', 'Jack', 'Ed'],
//     }),
//   );

//   console.log(
//     transformUrserName({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@gmail.com',
//         friendCount: 20,
// }),
// );

// =======================================================================================================================================================================

// CALLBACK ------------------------------------------------

 // Example 1 - Коллбек фунції

/*
  Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та `deposit(amount, onSuccess, onError)`, де перший параметр
  це сума операції, а другий та третій - коллбеки.

  Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, менше або дорівнює нулю,
  і onSuccess в іншому випадку.

  Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Your amount is bigger then ${TRANSACTION_LIMIT}`);
//     } else if (amount <= 0) {
//       onError(`Your amount must be bigger then 0`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Your balance is ${this.balance}`);
//     }
//   },

//   withdraw(amount, onSuccess, onError) {
//      if (amount > TRANSACTION_LIMIT) {
//       onError(`Your amount is bigger then ${TRANSACTION_LIMIT}`);
//      } else if (amount > this.balance) {
//        onError(`No money ${TRANSACTION_LIMIT}`);
//      } else {
//        this.balance -= amount; 
//       onSuccess(`Your balance is ${this.balance}`);
//      }
    
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }


// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

 
// 43:40
// ЗАМЫКАНИЕ

/*  Замыкание - если одну функцию возвращаем из другой функции, то при вызове возвращенной функции она получает доступ ко всем внутренним переменным родителя,
    где бы она не была вызванна. Она замыкается.
*/

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//       console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// }

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');


// =======================================================================================================================================================================

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА

// map ------------------------------------------------

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);


// const upadtedPlayers = players.map(player => {
//   console.log(players);
  
//   return {
//     ...player,
//     points: player.points * 1.1,
//   };
// });
// console.table(upadtedPlayers);
// console.log(upadtedPlayers);


// Изменить обьект в массиве
// const playersIdToUpdate = 'player-3';

// // const upadtedPlayers = players.map(player => {
// //   if (playersIdToUpdate === player.id) {

// //     return {
// //       ...player,
// //       timePlayed: player.timePlayed + 100,
// //     };
// //   }

// //   return player;
// // });

// //Тернарник
// const upadtedPlayers = players.map(player => {
//   return playersIdToUpdate === player.id
//   ? {
//     ...player,
//     timePlayed: player.timePlayed + 100,
//     }
//   : player; 
// });

// console.table(upadtedPlayers);


// filter ------------------------------------------------

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]



// reduce ------------------------------------------------

// Cобираем все теги из твитов
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];


// const allTags = tweets.reduce((acc, tweet) => {
//   return [...acc, ...tweet.tags];

// }, []);

// console.log(allTags);

/*
  Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
  Это стандартная практика если callback-функция довольно большая.

  Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
  то создаем его и записывает ему значение 0.
  В противном случае увеличиваем значение на 1.

  Начальное значение аккумулятора это пустой объект {}
*/

// Ведем статистику тегов

// const tagsStats = allTags.reduce((acc, tag) => {
// Длинная запись

//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;

//   return acc;
// }, {});

// Тернарник
  
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] +1 : 1,
//   };

// }, {});

// Сокращенный

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({ ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {},
// );

// ЦЕПОЧКИ ВЫЗОВОВ

// const stats = tweets
//   .flatMap(t => t.tags)
//   .reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//       }),
//       {},
// );


// console.log(stats);

// sort ------------------------------------------------


// Кастомна сортировка сложных чисел
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, timePlayed: 80, online: true },
// ];

// // По игровому времени

// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayedm,
// );

// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
// );

// console.table(sortedByWorstPlayers);


// ЦЕПОЧКИ ВЫЗОВОВ - chaining ------------------------------------------------

// const nombers = [1, 5, 2, 4, 3];


// // const greaterThenTwo = nombers.filter(num => num > 2);
// // console.log(greaterThenTwo);

// // const multByThree = greaterThenTwo.map(num => num * 3);
// // console.log(multByThree);

// // const sorted = multByThree.sort ( (a, b) => b - a);
// // console.log(sorted);

// // Цепочка предыдущих трех
// const sorted = nombers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => b - a);

//   console.log(sorted);

// =======================================================================================================================================================================

// КЛЮЧЕВОЕ СЛОВО THIS

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this:', this);
//   };

//   return changeColor;
// }

// const updateColor = makeChangeColor();

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// console.log(hat.updateColor);

// hat.updateColor('orange');

// =======================================================================================================================================================================

// Функции конструкторы --------------------------------
/*
 - Именование
 - Оператор new
 - свойство Function.prototype
*/

// const Car = function ({brand, model, price} = {}) {
//   // 2. Функция вызывается в контесте созданного обьекта, 
//   // то есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };

// // Свойство prototype есть только у функции конструктор. У обьектов это свойство __proto__
// Car.prototype.sayHi = function () {

// }
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// }


// // 1. Если функция вызывается через new, создается пустой обьект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();


// const myCar2 = new Car({
//   brand: 'BMV',
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCar2);

// myCar.sayHi();


// const myCar3 = new Car({
//   brand: 'Audi',
//   model: 'A6',
//   price: 65000,
// });
// console.log(myCar3);

// myCar.sayHi();

// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
// то есть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

// =======================================================================================================================================================================

// CLASS
// Наследование --------------------------------
// extend
// super()

// class Hero {
//   constructor(name = 'hero', xp = 0) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//       super(name, xp);

//       this.weapon = weapon;
//   }
// }

// const mango = new Warrior('mango', 1000, 'алебарда');
// console.log(mango);

// console.log(mango.__proto__ === Warrior.prototype);
// console.log('Warrior.prototype', Warrior.prototype);

// console.log(Warrior.prototype.__proto__ === Hero.prototype);

// =======================================================================================================================================================================

