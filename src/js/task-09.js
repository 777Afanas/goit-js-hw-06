// скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color 
//   и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const backgroundColor = document.querySelector('body');
// const changeColorBtn = document.querySelector('.change-color');


// changeColorBtn.addEventListener('click', onChangeBackgroundColorBody);

// function onChangeBackgroundColorBody() {
//   body.style.backgroundColor = getRandomHexColor();
//   colorName.textContent = body.style.backgroundColor;
// }

// console.log(getRandomHexColor());

const backgroundColor = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  textColor.textContent = getRandomHexColor();
  backgroundColor.style.background = `${getRandomHexColor()}`;
}

console.log(getRandomHexColor());