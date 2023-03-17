// ===============================================================================
// this

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//       console.log('changeColor -> this:', this);
//     };
  
//     return changeColor;
//   }
  
//   const updateColor = makeChangeColor();
  
//   const hat = {
//     color: 'blue',
//     updateColor,
//   };
  
//   console.log(hat.updateColor);
  
//   hat.updateColor('orange');


// ===============================================================================
// addEventListener

// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this)
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this)
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на декремент');

//     counter.decrement();
//     console.log(counter)

//     valueEl.textContent = counter.value;
// })
// incrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на инкремент');

//     counter.increment();
//     console.log(counter)

//     valueEl.textContent = counter.value;

// })

// ===============================================================================
// ТЕКС СОБЕС - 1

/*
    Написать функцию, получающую на вход два числа.
    Если оба числа четные - функция возвращает их произведение.
    Если оба числа нечетные - функция возвращает их сумму.
    Если одно из чисел четное, а второе нечетное - функция возвращает это нечетное число.
*/

function calculate(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return a * b;
  } else if (a % 2 !== 0 && b % 2 !== 0) {
    return a + b;
    } return a % 2 ? a : b;
    
}
console.log(calculate(2, 4)); // 8
console.log(calculate(3, 5)); // 8
console.log(calculate(2, 5)); // 5
console.log(calculate(3, 4)); // 3

// ТЕКС СОБЕС - 2

// Нати вес всех вещей, цена которых более 80 и колисество менее 7

const food = [
  { name: 'Паста', weight: '350', price: 68, quantity: 10 },
  { name: 'Спагетти', weight: '350', price: 56, quantity: 8 },
  { name: 'Пане', weight: '400', price: 68, quantity: 16},
  { name: 'Пицца куринная', weight: '675', price: 139, quantity: 30},
  { name: 'Пицца метровая', weight: '1600', price: 339, quantity: 8 },
  { name: 'Пицца итальяно', weight: '740', price: 159, quantity: 1},
  { name: 'Салат с семгой', weight: '230', price: 77, quantity: 4},
  { name: 'Салат с креветкой', weight: '230', price: 69, quantity: 5},
];
console.log(food);

const totalWeight = food
  .filter(item => item.price > 80 && item.quantity < 7)
  .reduce((acc, curr) => acc + parseInt(curr.weight), 0);
console.log(totalWeight);
