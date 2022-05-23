function createForm() {
  const form = document.createElement('form');
  const title = document.createElement('h1');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  const labelMessage = document.createElement('label');
  const inputMessage = document.createElement('textarea');

  title.textContent = 'Contact us';

  labelName.htmlFor = 'name';
  labelName.textContent = 'Name';
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');

  labelEmail.htmlFor = 'email';
  labelEmail.textContent = 'Email';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('name', 'email');

  labelMessage.htmlFor = 'message';
  labelMessage.textContent = 'Message';
  inputMessage.setAttribute('type', 'text');
  inputMessage.setAttribute('name', 'message');
  inputMessage.rows = '4';
  inputMessage.cols = '4';

  form.appendChild(labelName);
  form.appendChild(inputName);
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  form.appendChild(labelMessage);
  form.appendChild(inputMessage);

  return form;
}

function createContact() {
  const main = document.querySelector('main');
  const rtCon = document.createElement('div');
  const ltCon = document.createElement('div');
  const title = document.createElement('h1');
  const p = document.createElement('p');

  main.classList.add('contact');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');
  title.classList.add('title');
  p.classList.add('p');

  title.textContent = 'Puzzle';
  p.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  ltCon.appendChild(createForm());
  main.appendChild(title);
  main.appendChild(p);
  main.appendChild(ltCon);

  return main;
}

function loadContact() {
  const main = document.querySelector('main');
  main.classList.remove('menu', 'home');
  main.textContent = '';
  createContact();
}

export default loadContact;
