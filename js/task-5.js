function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeCol = document.querySelector('.change-color');
const colorValueSpan = document.querySelector('.color');

btnChangeCol.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValueSpan.textContent = randomColor;
});

