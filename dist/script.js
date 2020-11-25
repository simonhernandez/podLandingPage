// Variables
const form = document.getElementById('form');
const email = document.getElementById('email');
const alert = document.getElementById('error');
const errorColor = '#FB3E3E';
const successColor = '#54E6AF';


// Main
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

// Functions
function checkInputs(){
    const emailValue = email.value.trim();

    if (emailValue === ''){
        displayMessage('error', 'Email cannot be blank');
        return;
    } else if (!isValid(emailValue)){
        displayMessage('error', 'Email is not valid');
        return;
    } else{
        displayMessage('success','Request successful');
        email.value = '';
    }

}

function displayMessage(type, message){
    alert.style.display = 'block';
    let messageColor = '';

    if (type == 'error'){
        messageColor = errorColor;
    } else {
        messageColor = successColor;
    }

    alert.style.color = messageColor;
    alert.innerText = message;
}

function isValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}