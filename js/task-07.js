
const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');


inputEl.addEventListener('input', onInput);
function onInput(event) {
    textSpan.style.fontSize = event.currentTarget.value + "px";
}



