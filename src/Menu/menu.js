import json from './menu.json5';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

function createCard() {
  const images = [img1, img2, img3, img4];
  const itemsCont = document.createElement('div');
  itemsCont.classList.add('itemsCont');
  const items = json.menu;
  items.forEach((item) => {
    const div = document.createElement('div');
    const title = document.createElement('h1');
    const price = document.createElement('h1');
    const img = document.createElement('img');

    div.classList.add('card');
    title.classList.add('item');
    price.classList.add('price');
    img.classList.add('image');

    const getTitle = item.item;
    const getPrice = item.price;
    const getId = item.id;

    // const imgURL = `./img/${getId}.jpg`;

    title.textContent = getTitle;
    price.textContent = getPrice;
    img.setAttribute('src', images[getId]);

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);

    itemsCont.appendChild(div);
  });
  return itemsCont;
}

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

  return main;
}

function loadMenu() {
  const homeMain = document.querySelector('main');
  homeMain.classList.remove('menu', 'home');
  homeMain.textContent = '';
  createMenuMain();
}

export default loadMenu;
