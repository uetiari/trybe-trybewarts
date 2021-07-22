const loginButton = document.getElementById('button');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

function alertButton(event) {
  if (
    inputLogin.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  return event;
}
loginButton.addEventListener('click', alertButton);

const submitButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function checkButton() {
  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkbox.addEventListener('click', checkButton);

// Referência: https://github.com/tryber/sd-014-b-project-trybewarts/pull/45
// [Raphael Pereira e Fabricio Cardoso]
