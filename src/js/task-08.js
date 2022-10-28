

const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert('Все поля должны быть заполнены');
        
    } else {
        const newData = {
            email: email.value,
            password: password.value,
        };
        return  console.log(newData);     
       }
        
    event.currentTarget.reset();
}
