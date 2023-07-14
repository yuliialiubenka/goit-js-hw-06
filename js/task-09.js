function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorValue = document.querySelector('.color');
const color = getRandomHexColor();
const changeColorBtn = document.querySelector(".change-color");

colorValue.textContent = `${color}`;
body.style.backgroundColor = colorValue.textContent;

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  colorValue.textContent = `${getRandomHexColor()}`;
  body.style.backgroundColor = colorValue.textContent;
}

