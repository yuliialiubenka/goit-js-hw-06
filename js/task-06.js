const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', function() {
    if (input.value.trim().length === Number(dataLength)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
})