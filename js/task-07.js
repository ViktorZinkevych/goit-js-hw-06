const inputFontSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFontSize.addEventListener("input", (event)=>{
    let changeSize = event.target.value;
    textEl.style.fontSize = `${changeSize}px`;
})