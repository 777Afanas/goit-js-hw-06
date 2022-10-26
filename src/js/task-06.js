const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', onChangeFocus);

function onChangeFocus() {     


    if (inputEl.value.length == inputEl.getAttribute('data-length')) {
     
        return inputEl.classList.add('valid');  
    }

      return  inputEl.classList.add('invalid');
    
   
}




