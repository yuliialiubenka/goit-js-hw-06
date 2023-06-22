const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
    } else {
        const formData = {
            email: email.value,
            password: password.value
        }
        console.log(formData);
        event.currentTarget.reset();
    }
  }
