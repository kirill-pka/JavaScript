// Добавление тегов в HTML

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const ulRef = document.createElement('ul');

// Добавленичеч через map
// const liListRef = technologies.map((name) => {
//     const liRef = document.createElement('li');
//     liRef.textContent = name; 
//     return liRef;
// });

// ulRef.append(...liListRef);

// console.log(ulRef);

// Добавленичеч через reduce
// technologies.reduce((acc, name) => {
//     const liRef = document.createElement('li');
//     liRef.textContent = name; 
//     acc.appendChild(liRef);

//     return acc;
// }, ulRef);

// console.log(ulRef);
// // Обращение к DOM
// document.body.append(ulRef);
// =======================================================

// const colors = [
//     {
//         labe: 'red',
//         color: '#ff0000', 
//     },
//     {
//         labe: 'yellow',
//         color: '#ffff00', 
//     },
//     {
//         labe: 'blue',
//         color: '#0000ff', 
//     },
//     {
//         labe: 'grean',
//         color: '#00ff00', 
//     },
// ];

// const buttonsRef = colors.map(({ labe, color }) => {
//     const buttonRef = document.createElement('button')
//     buttonRef.textContent = labe;
//     buttonRef.style.display = 'inline-block';
//     buttonRef.style.fontSize = '15px';
//     buttonRef.style.padding = '2px 10px';
//     buttonRef.style.margin = '0 2px';
//     buttonRef.style.cursor = 'pointer';
//     buttonRef.style.backgroundColor = color;

//     return buttonRef;
// });

// console.log(buttonsRef);
// document.body.append(...buttonsRef);

// =======================================================
// Добавление DOM элементов

const mainRaf = document.createElement('main');
mainRaf.id = 'main';

const pRaf = document.createElement('p');
pRaf.p = 'p';
mainRaf.append(pRaf);

const pLinkRaf = document.createElement('a');
pLinkRaf.href = "/JavaScript.html";
pLinkRaf.textContent = 'На главную';
pRaf.append(pLinkRaf);

const btnRaf = document.createElement('button');
btnRaf.type = "button";
btnRaf.classList.add('magic-btm');
btnRaf.textContent = 'Сделать магию';
mainRaf.append(btnRaf);

const spanRaf = document.createElement('span');
spanRaf.classList.add('icon');
spanRaf.textContent = '🧙';
btnRaf.append(spanRaf);

const ulRaf = document.querySelector('ul');
// ulRaf.classList.add('sit-nav');
mainRaf.append(ulRaf);
// console.log(ulRaf)


// const liRaf = document.querySelector('li');
// liRaf.classList.add('sit-nav__item');
// ulRaf.append(liRaf);

// const liLinkRaf = document.createElement('a');
// liLinkRaf.href = "";
// liLinkRaf.classList.add('sit-nav__link');
// liLinkRaf.textContent = 'О нас';
// liRaf.append(liLinkRaf);


console.log(mainRaf)
document.body.append(mainRaf);


// =======================================================
// Схема создания простой страницы
// import products from "./data/products.js";


// console.log(products)

// const productContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const nameEl = document.createElement('h2');
//     nameEl.textContent = name;
//     nameEl.classList.add('product__name');

//     const descrEl = document.createElement('p');
//     descrEl.textContent = description;
//     descrEl.classList.add('product__descr');

//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Цена: ${price} кредитов`;
//     priceEl.classList.add('product__price');

//     productEl.append(nameEl, descrEl, priceEl);

//     return productEl;
// }

// const elements = products.map(makeProductCard);

// console.log(elements)
// productContainerEl.append(...elements);