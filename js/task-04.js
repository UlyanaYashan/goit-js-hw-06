
let counterValue = 0

const counterValueEl = document.querySelector('#value')
const decremenBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');



incrementBtn.addEventListener('click', () => {
	counterValue += 1;
   return counterValueEl.textContent = counterValue;
})


decremenBtn.addEventListener ('click', () => {
	counterValue -= 1;
return	counterValueEl.textContent = counterValue;
	
})



