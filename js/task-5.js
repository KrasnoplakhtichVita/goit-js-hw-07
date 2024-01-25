function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener('click', changeColorHandle);

function changeColorHandle(event) {
  span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
