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
  let boxSize = 30;

  for (let i = 0; i < refs.inputEl.value; i++) {
    const newdivEl = document.createElement('div');
    boxSize += 10;

    newdivEl.style.width = boxSize + 'px';
    newdivEl.style.height = boxSize + 'px';
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
