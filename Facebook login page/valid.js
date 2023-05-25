//validation

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput',email_Verify)
password.addEventListener('textInput',pass_Verify)

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

}

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
       pass_error.style.display = "none";
        return true;
    }
}



function validateForm() {
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var emailOrPhone = document.getElementById("email-or-phone");
    var password = document.getElementById("new-password");
    var genderError = document.getElementById('gender-error');


    var errorMessages = document.getElementsByClassName("error-message");

    // Remove previous error styles
    removeErrorStyles();

    var isValid = true;

    if (firstName.value === "") {
        setError(firstName);
        errorMessages[0].style.display = "block";
        isValid = false;
    }

    if (lastName.value === "") {
        setError(lastName);
        errorMessages[1].style.display = "block";
        isValid = false;
    }

    if (emailOrPhone.value === "") {
        setError(emailOrPhone);
        errorMessages[2].style.display = "block";
        isValid = false;
    }

    if (password.value === "") {
        setError(password);
        errorMessages[3].style.display = "block";
        isValid = false;
    }

    return isValid;
}

function setError(element) {
    if (element.id === 'new-password') {
        element.style.border = "1px solid red";
    } else {
        element.style.borderColor = "red";
    }
}

function removeErrorStyles() {
    var inputFields = document.getElementsByClassName("input-field");
    var errorMessages = document.getElementsByClassName("error-message");

    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].style.borderColor = "";
        inputFields[i].style.border = ""; // Reset password field border style
    }

    for (var j = 0; j < errorMessages.length; j++) {
        errorMessages[j].style.display = "none";
    }
}



// function validateForm() {
//     var firstName = document.getElementById("first-name");
//     var lastName = document.getElementById("last-name");
//     var emailOrPhone = document.getElementById("email-or-phone");
//     var password = document.getElementById("new-password");

//     var errorMessages = document.getElementsByClassName("error-message");

//     // Remove previous error styles
//     removeErrorStyles();

//     var isValid = true;

//     if (firstName.value === "") {
//         setError(firstName);
//         errorMessages[0].style.display = "block";
//         isValid = false;
//     }

//     if (lastName.value === "") {
//         setError(lastName);
//         errorMessages[1].style.display = "block";
//         isValid = false;
//     }

//     if (emailOrPhone.value === "") {
//         setError(emailOrPhone);
//         errorMessages[2].style.display = "block";
//         isValid = false;
//     }

//     if (password.value === "") {
//         setError(password);
//         errorMessages[3].style.display = "block";
//         isValid = false;
//     }

//     return isValid;
// }

// function setError(element) {
//     element.style.borderColor = "red";
// }

// function removeErrorStyles() {
//     var inputFields = document.getElementsByClassName("input-field");
//     var errorMessages = document.getElementsByClassName("error-message");

//     for (var i = 0; i < inputFields.length; i++) {
//         inputFields[i].style.borderColor = "";
//     }

//     for (var j = 0; j < errorMessages.length; j++) {
//         errorMessages[j].style.display = "none";
//     }
// }

