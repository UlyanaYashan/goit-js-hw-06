
const inputEl = document.querySelector('#validation-input');
const actualLengthEl = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur () {
    console.log(inputEl.value.length);
    console.log (actualLengthEl);

    if (actualLengthEl > inputEl.value.length || actualLengthEl < inputEl.value.length) { 
     inputEl.classList.remove('valid');
     inputEl.classList.add('invalid');
    } else {
       inputEl.classList.remove('invalid');
       inputEl.classList.add('valid');
       }
          };
  

