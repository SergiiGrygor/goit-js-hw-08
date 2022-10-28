import throttle from 'lodash.throttle';

const refs = {
   email: document.querySelector('.feedback-form input'),
   message: document.querySelector('.feedback-form textarea'),
   form: document.querySelector('.feedback-form'),
}


let DataObj = {};
const STORAGE_KEY = 'feedback-form-state';
let FormSavedData = localStorage.getItem(STORAGE_KEY);


refs.form.addEventListener('input', throttle(evt => {
    DataObj[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DataObj))
}, 500));


refs.form.addEventListener('submit', onSubmitBtn)

preventLossFormData();

function preventLossFormData() {
    if (FormSavedData) {
        let getParsedObjData = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (getParsedObjData.hasOwnProperty('email')) {
            refs.email.value = getParsedObjData.email;
        }
        else refs.email.value = "";

        if (getParsedObjData.hasOwnProperty('message')) {
            refs.message.value = getParsedObjData.message;
        }
        else refs.message.value = "";
    }
}

function onSubmitBtn(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    DataObj = {};
    console.log("DataObj ", DataObj)
    }
