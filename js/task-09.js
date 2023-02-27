function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnchangeColor = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');

btnchangeColor.addEventListener('click', (event)=>{
  document.body.style.backgroundColor = getRandomHexColor();
  valueColor.textContent = getRandomHexColor();
  console.log(valueColor.textContent)
})