const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => {
  if (modeButton.textContent.includes("◼️Dark Mode◻️ OFF")){
    main.style.background = '#000';
    main.style.color = '#fff';
    modeButton.textContent = "◼️Dark Mode◻️ ON";
  } else {
    main.style.background = '#fff';
    main.style.color = '#000';
    modeButton.textContent = "◼️Dark Mode◻️ OFF";
  }
});