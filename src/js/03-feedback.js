var throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector(".feedback-form");

const fillFormFields = () => {
    try {
        let userDataFromLS = localStorage.getItem(LOCALSTORAGE_KEY);
        
        if (userDataFromLS) {
            userDataFromLS = JSON.parse(userDataFromLS);

            Object.entries(userDataFromLS).forEach(([name, value]) => {
                formEl.elements[name].value = value;
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const onFormChange = event => {
    const { target } = event;

    try {
        let userDataFromLS = localStorage.getItem(LOCALSTORAGE_KEY);
        userDataFromLS = userDataFromLS ? JSON.parse(userDataFromLS) : {};
        
        userDataFromLS[target.name] = target.value;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDataFromLS));

    } catch(err) {
        console.log(err);
    }
}

const onFormSubmit = event => {
  event.preventDefault();

    formEl.reset();

    try {
        const userDataFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        console.log(userDataFromLS);
    } catch (err) {
        console.log(err);
    }
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

fillFormFields();
formEl.addEventListener('change', throttle(onFormChange, 500));
formEl.addEventListener('submit', onFormSubmit);