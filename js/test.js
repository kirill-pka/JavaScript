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