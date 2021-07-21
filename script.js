const button = document.getElementById('button');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

function alertButton(event) {
  if (inputLogin.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  return event;
}

button.addEventListener('click', alertButton);
