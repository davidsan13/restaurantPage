function createHome() {
  const main = document.querySelector('main');
  const textCon = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  main.classList.add('home');
  textCon.classList.add('textCon');

  h1.textContent = 'Puzzle, Welcome!';
  p.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  textCon.appendChild(h1);
  textCon.appendChild(p);

  main.appendChild(textCon);
  // main.appendChild(h1);
  // main.appendChild(p);

  return main;
}

function loadHome() {
  const main = document.querySelector('main');
  main.classList.remove('menu', 'contact');
  main.textContent = '';
  createHome();
}

export default loadHome;
