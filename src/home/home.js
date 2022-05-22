function createHome() {
  const main = document.querySelector('main');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  main.classList.add('home');
  h1.textContent = 'Puzzle';
  p.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  main.appendChild(h1);
  main.appendChild(p);

  return main;
}

function loadHome() {
  const main = document.querySelector('main');
  main.classList.remove('menu', 'contact');
  main.textContent = '';
  createHome();
}

export default loadHome;
