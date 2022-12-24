// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) и изменяет 
// инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
fontSizeControl: document.querySelector("#font-size-control"),
text: document.querySelector("#text"),
}

refs.fontSizeControl.addEventListener('change', onInputSlider);

function onInputSlider(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
    // refs.text.style.fontSize = this.value + 'px';
}

