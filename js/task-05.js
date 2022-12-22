// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее 
// значение в span#name-output. Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".

const refs = {
    inputValue: document.getElementById('name-input'),
    outputValue: document.getElementById('name-output'),
}

refs.inputValue.addEventListener('input', (event) => {  
    if (event.currentTarget.value === "") {
      refs.outputValue.textContent = 'Anonymous';
    } else {
      refs.outputValue.textContent = event.currentTarget.value;
    }
  });
