const mainNav = document.querySelector('.navigation');
const hamButtom = document.querySelector('#menu');

hamButtom.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  hamButtom.classList.toggle('show');
});