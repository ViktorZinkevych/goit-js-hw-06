const refs = {
    textInput: document.querySelector('#name-input'),
    changeName: document.querySelector('#name-output'),
};
const onInputChange = event =>{
    refs.changeName.textContent = event.target.value.trim();
    if(refs.changeName.textContent.length === 0){
        refs.changeName.textContent= "Anonymous";
    }
}

refs.textInput.addEventListener('input', onInputChange );