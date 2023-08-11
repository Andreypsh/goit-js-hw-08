import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';

populateText();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextInput(e) {
  let formData = localStorage.getItem(STORAGE_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
  let savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}
