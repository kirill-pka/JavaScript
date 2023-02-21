const EMAIL = 'admin@gmail.com';
const PASSWORD = '1111';

const formRef = document.querySelector('.form');
const errorsRef = formRef.querySelector('.form-errors')
const loginInputRef = document.querySelector('input[type="email"]');
const passwordInputRef = document.querySelector('input[type="password"]');

loginInputRef.addEventListener('focus', hideErrors);
passwordInputRef.addEventListener('focus', hideErrors);


formRef.addEventListener('submit', (e) => {
    e.preventDefault();
    const {email, password} = e.currentTarget.elements;

    if (email.value === EMAIL && password.value === PASSWORD) {
        formRef.remove();    
        document.body.insertAdjacentHTML('beforeend', '<h2>Вхід успішний</h2>');
    } else {
        errorsRef.classList.add('form-errors--shown');   
    }
});

function hideErrors() {
    errorsRef.classList.remove('form-errors--shown')
};