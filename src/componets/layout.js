import loadMenu from '../menu/menu';
import loadHome from '../home/home';
import loadContact from '../contact/contact';

function sectionActive(event) {
  const btn = event;
  const current = document.getElementsByClassName('active');

  current[0].className = current[0].className.replace(' active', '');
  btn.className += ' active';
}

function createNav() {
  const nav = document.createElement('nav');
  const home = document.createElement('div');
  const menu = document.createElement('div');
  const contact = document.createElement('div');

  nav.classList.add('nav');
  home.classList.add('btn');
  menu.classList.add('btn');
  contact.classList.add('btn');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    sectionActive(e.target);
    loadMenu();
  });

  home.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    sectionActive(e.target);
    loadHome();
  });

  contact.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    sectionActive(e.target);
    loadContact();
  });
  return nav;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const name = document.createElement('a');
  name.classList.add('name');
  name.textContent = 'Puzzle';

  header.appendChild(name);
  header.appendChild(createNav());

  return header;
}

function createMain() {
  const main = document.createElement('main');

  main.classList.add('main');

  return main;
}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  loadHome();

  return content;
}

function createFooter() { }

export default initializeWebsite;
