const pw1 = document.querySelector('#pass1');
const pw2 = document.querySelector('#pass2');
const message = document.querySelector('#message');

pw2.addEventListener('focusout', checkPassword);

function checkPassword() {
  if(pw1.value !== pw2.value) {
    message.classList.add('messagePass');
    message.style.display = 'block'
    message.textContent = "Passwords do not match";
    pw1.value = '';
    pw2.value = "";
    pw1.focus();
  } else {
    message.style.display = 'none'
  }
}