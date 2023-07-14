const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul#ingredients');

// const ingredientsArray = [];
// ingredients.forEach(ingredient => {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.classList.add('item');
//   ingredientItem.textContent = ingredient;
//   ingredientsArray.push(ingredientItem);
// })

// ingredientsList.append(...ingredientsArray);

const ingredientsArray = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');
ingredientsList.insertAdjacentHTML('beforeend', ingredientsArray);