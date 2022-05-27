import formValidation from '../validation';

function createForm() {
  const form = document.createElement('form');
  const title = document.createElement('h1');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const labelEmail = document.createElement('label');
  const inputEmail = document.createElement('input');
  const labelMessage = document.createElement('label');
  const inputMessage = document.createElement('textarea');
  const submit = document.createElement('input');

  title.textContent = 'Contact us';

  labelName.htmlFor = 'name';
  labelName.textContent = 'Name';
  labelName.required = true;
  inputName.minLength = 3;
  inputName.setAttribute('id', 'name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');

  labelEmail.htmlFor = 'email';
  labelEmail.textContent = 'Email';
  inputEmail.setAttribute('id', 'email');
  // inputEmail.required = true;
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('name', 'email');

  labelMessage.htmlFor = 'message';
  labelMessage.textContent = 'Message';
  inputMessage.setAttribute('type', 'text');
  inputMessage.setAttribute('name', 'message');
  inputMessage.required = true;
  inputMessage.maxLength = 200;
  inputMessage.rows = '4';
  inputMessage.cols = '4';

  submit.setAttribute('type', 'submit');

  form.appendChild(labelName);
  form.appendChild(inputName);
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  form.appendChild(labelMessage);
  form.appendChild(inputMessage);
  form.appendChild(submit);
  return form;
}

function createContact() {
  const main = document.querySelector('main');
  const rtCon = document.createElement('div');
  const ltCon = document.createElement('div');

  const ltP = document.createElement('p');
  const rtTitle = document.createElement('h1');
  const rtP = document.createElement('p');

  main.classList.add('contact');
  rtCon.classList.add('rtCon');
  ltCon.classList.add('ltCon');

  ltP.classList.add('p');
  rtTitle.classList.add('title');
  rtP.classList.add('p');

  ltP.textContent =
    "Questions or comments? Feel free to send our support team a message via the form, and we'll be happy to help you out. ";

  rtTitle.textContent = 'Contact Us';
  rtP.textContent = "Let's get in touch";

  ltCon.appendChild(ltP);
  rtCon.appendChild(rtTitle);
  rtCon.appendChild(rtP);
  rtCon.appendChild(createForm());
  main.appendChild(ltCon);
  main.appendChild(rtCon);

  return main;
}

function loadContact() {
  const main = document.querySelector('main');
  main.classList.remove('menu', 'home');
  main.textContent = '';
  createContact();
  formValidation();
}

export default loadContact;
