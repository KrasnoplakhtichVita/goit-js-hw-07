function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const container = document.querySelector('#controls');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);

function handleCreate() {
  boxContainer.innerHTML = '';
  if (Number(input.value.trim()) < input.min || Number(input.value.trim()) > input.max) {
    console.log('Please, enter value from 1 to 100!');
    return;
  } else {
    createBoxes(input.value.trim());
  }
  input.value = '';
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}

function createBoxes(amount) {
  const divArr = [];
  const DEFAULT_SIZE = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${DEFAULT_SIZE + 10 * i}px`;
    box.style.height = `${DEFAULT_SIZE + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    divArr.push(box);
  }
  return boxContainer.append(...divArr);
}
