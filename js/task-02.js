const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const createIngrEL = elements => {
  return elements.map(element => {
  const liEl = document.createElement('li');
  console.log(liEl);
  liEl.classList.add('item');
  liEl.textContent = element;
  return liEl;
});
 };
const list = createIngrEL(ingredients);
const listIngredients = document.querySelector('#ingredients');
listIngredients.append(...list);
