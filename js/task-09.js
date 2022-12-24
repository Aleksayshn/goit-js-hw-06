function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
}

refs.buttonEl.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick(event) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textEl.textContent = refs.bodyEl.style.backgroundColor;
}
