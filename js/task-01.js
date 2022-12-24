const listEl = document.querySelectorAll('#categories>.item')
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const titleEl = item.querySelectorAll('ul>li')
    console.log(`Elements: ${titleEl.length}`);
}
)

// for (const el of listEl) {
//     console.log(`Category: ${el.firstElementChild.textContent}`);
//     const titleEl = el.querySelectorAll('ul>li')
//     console.log(`Elements: ${titleEl.length}`);
// }