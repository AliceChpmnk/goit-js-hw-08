var throttle = require('lodash.throttle');

const formEl = document.querySelector(".feedback-form");
const userData = {};
const userDatafromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

/*Я додала цю функцію, тому що при оновленні сторінки змінна userData стає пустим об'єктом, тобто втрачає властивості, які були записані раніше.
При наступному виклику onFormChange (якщо змінити один із інпутів вже після оновлення сторінки) 
змінна 'feedback-form-state' у локальнму сховищі перезаписується повністю.
Тому якщо змінити лише один інпут, на цьому етапі втрачається значення іншого інпуту. 
Я намагалась це виправити у самій функції onFormChange, але не працювало. Змогла реалізувати лише в такий спосіб:
При оновленні сторінки оновлювати значення пустого об'єкту userData тими вастивостями, які є в локальному сховищі*/
const matchUserData = () => {
    if (userDatafromLS === null) {
            return;
    }
    
    for (const prop in userDatafromLS) {
        userData[prop] = userDatafromLS[prop];
        }
}

const fillFormFields = () => {
    try {
        
        if (userDatafromLS === null) {
            return;
        }

        for (const prop in userDatafromLS) {
        formEl.elements[prop].value = userDatafromLS[prop];
        }

    } catch (err) {
        console.log(err);
    }
}

const onFormChange = event => {
    const { target } = event;

    const keyName = target.name;
    const value = target.value;

    userData[keyName] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

const onFormSubmit = event => {
  event.preventDefault();

    formEl.reset();
    console.log(userData);
    localStorage.removeItem('feedback-form-state');
};

matchUserData();
fillFormFields();
formEl.addEventListener('change', throttle(onFormChange, 500));
formEl.addEventListener('submit', onFormSubmit);