import createPage from '../Menu/menu';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const name = document.createElement('h1');
  name.classList.add('name');
  name.textContent = 'Puzzle';

  header.appendChild(name);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');

  nav.classList.add('nav');
  home.classList.add('hom');
  menu.classList.add('menu');
  contact.classList.add('contact');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    createPage();
  });

  return nav;
}
function createMain() {
  const main = document.createElement('main');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  main.classList.add('main');
  h1.textContent = 'Puzzle';
  p.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  main.appendChild(h1);
  main.appendChild(p);
  return main;
}

function addListener() {
  const navBtn = document.querySelector('.menu');

  navBtn.addEventListener('click', createPage());

  console.log(navBtn);
}
function createFooter() { }

export { createHeader, createMain, addListener };
