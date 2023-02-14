const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageItem = document.querySelector('.gallery');



const elements = images.map(option => {
const creatLi = document.createElement('li');
const imageCreate = document.createElement('img');
imageCreate.src = option.url;
imageCreate.alt = option.alt;
imageCreate.width = 800;
imageCreate.classList.add('flex');

creatLi.appendChild(imageCreate);

return creatLi;

});

imageItem.append(...elements);
imageItem.style.display = 'flex';
imageItem.style.justifyContent = 'space-around';

