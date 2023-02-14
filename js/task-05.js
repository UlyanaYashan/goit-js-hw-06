const inputEl = document.querySelector('#name-input');
const textlInputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onFormSubmit);


function onFormSubmit  (event)  {


    textlInputEl.textContent = inputEl.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};

