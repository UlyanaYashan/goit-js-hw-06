const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemLi = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const liItem = document.createElement('li');
  liItem.textContent = option;
  liItem.classList.add('item');
  return liItem;
});

itemLi.append(...elements);
