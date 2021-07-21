const button = document.getElementById('button');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

button.addEventListener('click', alertButton());

function alertButton() {
  let empty = '';
  if (inputLogin == empty && inputPassword == empty) {
    alert('Login ou senha inválidos');
  } else {
  alert('Olá, Tryber!');
  }
}
