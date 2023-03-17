/*
 СОХРАНЕНИЕ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЯ МЕЖДУ ПЕРЕЗАГРУЗКОЙ СТРАНИЦЫ
 ЕСЛИ ФОРМА ЕЩЕ НЕ ОТПРАВЛЕНА
*/


// Абсолютные импорты выше (библиотеки), относительные ниже (css)

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';
const formData = {};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    nameInput: document.querySelector('.js-feedback-form [name="name"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
refs.form.addEventListener('input', onFormInput);

// refs.form.addEventListener('input', e => {
    
//     formData[e.target.name] = e.target.value;
//     console.log(formData)
// });


populateTextarea();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    }

function onFormSubmit(evt) {
    evt.preventDefault();

    const feedbackData = {
        name: formData.nameInput,
        message: formData.textarea,
    };

    console.log('Отправляю форму', feedbackData);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function onTextareaInput(evt) {
    // const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, evt.target.value);
}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        refs.textarea.value = savedMessage;
    }
}
