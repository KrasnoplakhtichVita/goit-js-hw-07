const form = document.querySelector('.login-form');

form.addEventListener('submit', inputHandle);

function inputHandle(event) {
  event.preventDefault();

  const formEl = event.target.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }
  const data = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(data);

  form.reset();
}

