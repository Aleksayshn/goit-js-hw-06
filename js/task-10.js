function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

refs.buttonCreateEl.addEventListener('click', onButtonCreateClick);
refs.buttonDestroyEl.addEventListener('click', onbuttonDestroyClick);


function onButtonCreateClick(event) {
  const newElements = []

  for (let i = 0; i < refs.inputEl.value; i++) {
    const newdivEl = document.createElement('div');
    newdivEl.style.width = (30 + (i * 10)) + 'px';
    newdivEl.style.height = (30 + (i * 10)) + 'px';
    newdivEl.style.backgroundColor = getRandomHexColor();
    newElements.push(newdivEl);
  }
  refs.boxesEl.append(...newElements)
}


function onbuttonDestroyClick(event) {
  const allElementsRemove = document.querySelectorAll('#boxes div');
  allElementsRemove.forEach(el => el.remove())
  return
}
