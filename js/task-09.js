
function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const actualColorSpan = document.querySelector('.color');
const elButton = document.querySelector('.change-color');
const body = document.body;

elButton.addEventListener('click', onChangeColor);

function onChangeColor () {
  actualColorSpan.textContent = getRandomHexColor();
  body.style.backgroundColor = actualColorSpan.textContent
}

