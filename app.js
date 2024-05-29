const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const fNameError = document.querySelector('.fNameError');
const lNameError = document.querySelector('.lNameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');
const fNameErrorIcon = document.querySelector('.fNameErrorIcon');
const lNameErrorIcon = document.querySelector('.lNameErrorIcon');
const emailErrorIcon = document.querySelector('.emailErrorIcon');
const passwordErrorIcon = document.querySelector('.passwordErrorIcon');
const passwordEyeIcon = document.querySelector('.passwordEyeIcon');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log({fName, lName, emailVal, passwordVal, fNameError});

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    fNameErrorIcon.classList.add("showIcon")
    fNameError.classList.add("showErrorMessage")
    fNameError.textContent = "First Name cannot be empty"
  } else {
    firstName.classList.remove('error');
    fNameErrorIcon.classList.remove("showIcon")
    fNameError.classList.remove("showErrorMessage")
    fNameError.textContent = ""
  }
  // Check last name
  
  if (lName === '') {
    lastName.classList.add('error');
    lNameErrorIcon.classList.add("showIcon")
    lNameError.classList.add("showErrorMessage")
    lNameError.textContent = "Last Name cannot be empty"
  } else {
    lastName.classList.remove('error');
    lNameErrorIcon.classList.remove("showIcon")
    lNameError.classList.remove("showErrorMessage")
    lNameError.textContent = ""
  }
  // Check email
  
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailErrorIcon.classList.add("showIcon")
    emailError.classList.add("showErrorMessage")
    emailError.textContent = "Looks like this is not an email"
  } else {
    email.classList.remove('error');
    emailErrorIcon.classList.remove("showIcon")
    emailError.classList.remove("showErrorMessage")
    emailError.textContent = ""
  }
  
  // Check password
  
  if (passwordVal === '') {
    password.classList.add('error');
    passwordErrorIcon.classList.add("showIcon")
    passwordError.classList.add("showErrorMessage")
    passwordError.textContent = "Password cannot be empty"
  } else {
    password.classList.remove('error');
    passwordErrorIcon.classList.remove("showIcon")
    emailError.classList.remove("showErrorMessage")
    passwordError.textContent = ""
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


passwordEyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
})

password.addEventListener("keyup", () => {
  showEyeIcon()
})

function showEyeIcon() {
  const passwordVal = password.value;

  if(passwordVal !== "") {
    passwordEyeIcon.classList.add("showIcon")
  } else {
    passwordEyeIcon.classList.remove("showIcon")
  }
}