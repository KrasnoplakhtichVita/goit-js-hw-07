function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener('click', changeColorHandle);

function changeColorHandle() {
  span.textContent = getRandomHexColor();
  console.log((document.body.style.backgroundColor = span.textContent));
}
