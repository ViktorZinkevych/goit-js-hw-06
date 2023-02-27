const correctInputEl = document.querySelector('#validation-input');
const inputLength = correctInputEl.getAttribute('data-length');

correctInputEl.addEventListener('blur', ()=>{
    
correctInputEl.classList.remove('valid', 'invalid');

correctInputEl.value.length === Number(inputLength) ?
correctInputEl.classList.add('valid') :
correctInputEl.classList.add('invalid');
    
});