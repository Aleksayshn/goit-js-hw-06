const listEl = document.querySelectorAll('#categories>.item')
console.log(`Number of categories: ${listEl.length}`);

for (const el of listEl) {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    const titleEl = el.querySelectorAll('ul>li')
    console.log(`Elements: ${titleEl.length}`);
}