let hideIcon = document.querySelector(".fa-regular")
let passwordInput = document.querySelector("#password-input");

function changeEye () {
   if (passwordInput.type === "password") {
    passwordInput.type =  "text";
    hideIcon.classList.add("fa-eye")
    hideIcon.classList.remove("fa-eye-slash");
    
   } else {
    passwordInput.type = "password" 
    hideIcon.classList.add("fa-eye-slash")
    hideIcon.classList.remove("fa-eye")
    
   }
    console.log(hideIcon);
}

// form validation 

// let nameInput = document.querySelector("#name-input")
// let usernameInput = document.querySelector("#username-input")
// let emailInput = document.queryselector ("#email-input")
// let btn = document.querySelector("#btn");


// function submitForm(e){
//     e.preventDefault();
// let nameInputPattern = / [A-Z][a-z]+/
// if(    )
// nameInputPattern.test


// }




