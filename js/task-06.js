const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', function() {
    if (input.value.length === Number(dataLength)) {
        input.classList.add('valid');  
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        } 
    } else {
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
        input.classList.add('invalid');
    }
})