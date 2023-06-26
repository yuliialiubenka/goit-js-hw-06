function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('div#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', () => {
	let boxesToAdd = createBoxes(input.value);
	boxes.append(...boxesToAdd);
  input.value = '';
})
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
const amount = Number(input.value);
  const elementsToAdd = [];
  const step = Number(input.getAttribute('step'));
  const min = Number(input.getAttribute('min'));
  const max = Number(input.getAttribute('max'));

  if (input.value >= min && input.value <= max) {
    for (let i = 0; i < amount; i += step) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      elementsToAdd.push(box);
    }
  } else if (input.value > max) {
    alert('The amount of elements should not exceed 100');
  } else {
    alert('Enter the correct number');
  }
  return elementsToAdd;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}