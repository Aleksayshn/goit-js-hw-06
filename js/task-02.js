const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeFruit = options => {
  
return options.map(option => {
  const fruitEl = document.createElement('li');
fruitEl.classList.add('item');
fruitEl.textContent = option;
console.log(option);
return fruitEl
}
);
};

document.querySelector('#ingredients').append(...makeFruit(ingredients))