// Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.getElementById('value')
}

refs.decrementButton.addEventListener('click', onTargetdecrementButtonClick);
refs.incrementButton.addEventListener('click', onTargetincrementButtonClick);

function onTargetdecrementButtonClick() { 
  counterValue -= 1
  refs.counterValueEl.textContent = counterValue;
 }

 function onTargetincrementButtonClick() { 
  counterValue += 1
  refs.counterValueEl.textContent = counterValue;
 }