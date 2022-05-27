function formValidation() {
  const email = document.getElementById('email');
  const name = document.getElementById('name');

  email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('I am expecting an email address!');
      email.reportValidity();
    } else {
      email.setCustomValidity('');
    }
  });

  name.addEventListener('input', (e) => {
    if (name.validity.tooShort) {
      name.setCustomValidity('Name is too short, needs to be longer!')
      name.reportValidity();
    } else {
      name.setCustomValidity('');
    }
  })
}

export default formValidation;
