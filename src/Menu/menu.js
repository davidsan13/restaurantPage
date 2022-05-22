import json from './menu.json5';

var a = 4;

function createMenuMain() {
  const main = document.querySelector('main');
  const h1 = document.createElement('h1');
  // const itemsCont = document.createElement("div");

  main.classList.add('menu');
  h1.classList.add('title');
  // itemsCont.classList.add("container");

  h1.textContent = 'Menu';

  // itemsCont.appendChild(createCard());

  main.appendChild(h1);
  main.appendChild(createCard());

  console.log('hello');
  return main;
}

function createCard() {
  const itemsCont = document.createElement('div');
  const items = json.menu;
  items.forEach((item) => {
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const price = document.createElement('h1');

    div.classList.add('card');
    title.classList.add('item');
    price.classList.add('price');

    const getTitle = item.item;
    const getPrice = item.price;

    title.textContent = getTitle;
    price.textContent = getPrice;

    div.appendChild(title);
    div.appendChild(price);

    itemsCont.appendChild(div);
  });
  return itemsCont;
}

function createPage() {
  const homeMain = document.querySelector('main');
  homeMain.textContent = '';
  createMenuMain();
}

export default createPage;
