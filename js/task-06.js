// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlurValid);
function onInputBlurValid(event) {
  console.log(this.value.length == this.dataset.length);
  if (this.value.length == this.dataset.length) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid');
  }
  else {
    inputEl.classList.add('invalid')
    inputEl.classList.remove('valid');
  }
}



