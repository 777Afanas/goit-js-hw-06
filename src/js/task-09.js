function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColor = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', onChangeBackgroundColorBody);

function onChangeBackgroundColorBody() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = body.style.backgroundColor;
}

console.log(getRandomHexColor());