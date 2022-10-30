import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form')


formEl.addEventListener('submit', onFormMail)
formEl.addEventListener('input', throttle(onTextInput, 500))

onFormTextarea()

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onTextInput(evt) {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  function onFormMail(evt) {
    evt.preventDefault();
      console.log(formData);
      evt.currentTarget.reset();
      localStorage.removeItem(STORAGE_KEY);
      formData = {}
    }

  function onFormTextarea() {
    const mailFormParse = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (mailFormParse) {
      formEl.elements.email.value = mailFormParse.email || '';
      formEl.elements.message.value = mailFormParse.message || '';
    }
  }