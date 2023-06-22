const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', function() {
    nameOutput.textContent = input.value;
    if (input.value === '') {
        nameOutput.textContent = 'Anonymous';
    }
});
