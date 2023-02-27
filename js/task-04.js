const refs ={
    decrement: document.querySelector('[data-action="decrement"]'),
    totalValue: document.querySelector('#value'),
    increment: document.querySelector('[data-action="increment"]'),

};

refs.increment.addEventListener('click', (event)=> {
    let total= parseInt(refs.totalValue.textContent);
    refs.totalValue.textContent = total += 1;
});
refs.decrement.addEventListener('click', (event) =>{
    refs.totalValue.textContent -= 1
});