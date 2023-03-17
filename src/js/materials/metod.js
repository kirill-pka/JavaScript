// confirm() - выводит модальное окно с сообщением, и две кнопки, Ok и Cancel. При нажатии на Ok, результатом будет true, при нажатии на Cancel - возвращается false.
// prompt() - выводит модальное окно с полем ввода и кнопками Ok и Cancel. При нажатии Ok, результатом будет то, что ввел пользователь, при Cancel - возвращается null.

// Number.parseInt() парсит из строки целое число.'
// Number.parseFloat() парсит из строки дробное число.


// Класс Math

// Math.floor(num) - возвращает наибольшее целое число.
// Math.ceil(num) - возвращает наименьшее целое число.
// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого.
// Math.max(num1, num2, ...) - возвращает наибольшее число из набора.
// Math.min(num1, num2, ...) - возвращает наименьшее число из набора.
// Math.pow(base, exponent) - возведение в степень.
// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1).

// =======================================================================================================================================================================

// СТРОКИ

// length - для того чтобы узнать длину строки, то есть количество её символов.
// typeof - Используется для получения типа значения переменной.

/* 
 indexOf() -  возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет.
 Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.
*/

// toLowerCase() и toUpperCase() - Возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.
// toFixed(2-n) - округляет число c плавающей точкой (запятой) // 3.46
// includes() - проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае. includes работает только с примитивами.
// slice(begin, end) - возвращает новый массив, содержащий копию части исходного массива, не изменяя его.

/*
 splice(position, num) - Удаляет, добавляет и заменяет элементы в произвольном месте массива.
 position - указывает позицию (индекс) первого элемента для удаления
 num - определяет количество удаляемых элементов

 ДОБАВИТЬ ЭЛЕМЕНТ
 const colors = ["red", "green", "blue"];
 colors.splice(1, 0, "yellow", "pink");
 console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

 УДАЛЯЕМ ЭЛЕМЕНТ
 const languages = ["C", "C++", "Java", "JavaScript"];

 аменяем элемент с индексом 1 на новый
 languages.splice(1, 1, "Python");
 console.log(languages); // ["C", "Python", "Java", "JavaScript"]

 Заменяем один элемент (с индексом 2) на несколько
 languages.splice(2, 1, "C#", "Swift", "Go");
 console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
*/

// concat() - Объединяет два или более массива в один.

// =======================================================================================================================================================================

// ОПЕРАТОРЫ

// бинарные - содержащие два операнда, левый и правый.
// Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к false, и правый в остальных случаях.
// Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к true, и правый в остальных случаях.

// унарный оператор - выполняющий операцию над одним операндом справа.
// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

// =======================================================================================================================================================================

// ВЕТВЛЕНИЯ

// if... elce {

// } elce if


// ТЕРНАРНЫЙ ОПЕРАТОР

// <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно>


// SWITCH

// switch (значение) {
//     case значение:
//       инструкции;
//       break;
  
//     case значение:
//       инструкции;
//       break;
  
//     default:
//       инструкции;
//   }


// СЧЕТЧИК
// while - оздает цикл, который выполняет блок кода, пока условие проверки оценивается как true.
// do...while (Цикл с постусловием) - цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз.

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }


// =======================================================================================================================================================================

// МАССИВЫ

// for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter.
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]
// push() - добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.
// pop() - удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.


// =======================================================================================================================================================================

// ОБЪЕКТЫ

/* Слева обьека записываються свойства (ключ) : с права значения
    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        isPublic: true,
        rating: 8.38,
    };
*/

// Object.keys() - принимает объект и возвращает массив ключей его собственных свойств.
// Object.values() - озвращает массив значений его собственных свойств.

// this - "это ссылка на этот обьект который вызывает этот метод."


// ДЕСТРУКТУРИЗАЦИЯ

/*  ...rest - записывается с лева от равно. Собирает
    ...spread - записывается с права от равно. Распыливает
*/

// =======================================================================================================================================================================

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА

/* 
 filter - фильтрации массива, более одного элемента из коллекции по какому-то критерию.
 map - используется для обновления. Вікинуть что-то из каждого элемента или обновить.
 sort - сортирует исходный массив.
 localeCompare - для сортировки строк в алфавитном порядке, по возрастанию или убыванию.
 reduce - Перебирает оригинальный массив. Возвращает что угодно. Заменяет все на свете.
*/

// =======================================================================================================================================================================

// CALLBACK

// callback - коротко. Функция которую мы передаем в другую функцию. Передаем ссылку на функцию (отложенный вызов).

// =======================================================================================================================================================================

// КЛЮЧЕВОЕ СЛОВО THIS

// Где и как была обьявлена функция НЕ ИМЕЕТ НИКАКОГО ВДИЯНИЯ на контекст.
// Контекст определяется в МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
// This - это не метод. This как argumetns, локальная переменная которая есть в нутри функции.

// При передаче метода обьекта как callback, контекст не сохраняется!!!

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('ShowTag ->', this);
//     },
// };

// user.showTag();

// =======================================================================================================================================================================

// ПРОТОТИПЫ

// Прототип объекта --------------------------------

// const objC = {
//     z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));


// Функции конструкторы --------------------------------

// 1. У наждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создалии литерала, обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создается пустой обьект
// 7. Функция вызывается в контексте с созданного обьекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Функция()

// =======================================================================================================================================================================

// Node.js and npm

/* ТЕРМИНАЛ
    pwd - путь
    ls - лист
    cd - навигация (cd .. - ур.вверх, cd 'name', cd ../../)
    clear - очистка
    touch - создать файл
    mkdir - создать папку
    mv - переименование/перемещение
    rm - удаление
    rm -rf - удалить все содержимое

    npm run 'имя скрипта' - запустить скрипт с package

    localhost:**** - зайти на сервер

    Транспиляция кода - bable

    Scripts:
    "start": "parcel src/*.html",
    "build": "parcel build src/*.html",

    "build": "babel src -d dist"
*/

// =======================================================================================================================================================================
