function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}
const newElements = []

refs.buttonCreateEl.addEventListener('click', onButtonClick);
refs.buttonDestroyEl.addEventListener('click', onbuttonDestroyClick);


function onButtonClick(event) {
  const a = refs.inputEl.value;
  for (let i = 0; i < a; i++) {
    const newdivEl = document.createElement('div');
    newdivEl.style.width = 30 + 'px';
    newdivEl.style.height = 30 + 'px';
    newdivEl.style.width = Number.parseInt(newdivEl.style.width) + 10 + 'px';
    newdivEl.style.backgroundColor = getRandomHexColor();
    newElements.push(newdivEl);
  }
  refs.boxesEl.append(...newElements)
}


function onbuttonDestroyClick(event) {
  const allElementsRemove = document.querySelectorAll('#boxes div');
  allElementsRemove.forEach (el => el.remove()) 
}



  







// let counterValue = [];

// refs.inputEl.addEventListener('change', onInputChange);

// function onInputChange() {
//   counterValue.push(refs.inputEl.value)
//   console.log(counterValue);
//   refs.buttonCreateEl.addEventListener('click', onButtonClick);

// }

// function onButtonClick(event) {
//   createBoxes()
// }

// function createBoxes() {
//   const a = counterValue.map(el => {
//     const b = document.createElement('div');
//     b.style.backgroundColor = "red";
// return b;
//   }
//   )
//   return a;
// }

//   return refs.boxesEl.append(...a);
