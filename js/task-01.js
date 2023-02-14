
// Завдання 1

// 1.1 Напиши скрипт, який порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.

const allItems = document.querySelectorAll('.item');
const allItemsLeng = allItems.length;

console.log(`Number of categories: ${allItemsLeng}`)


// 1.2 Напиши скрипт, який для кожного элемента li.item у списку ul#categories,
//  знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).

const textTitle = document.querySelectorAll('h2');

for (let h of textTitle) {
  console.log("Category:", h.textContent);
  console.log('Elements:', h.nextElementSibling.children.length);
}




