const passwordRevealer = document.querySelector(".eye");
const showPassword = () => {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordRevealer.setAttribute("src", "../images/eye-slash.png");
    } else {
        passwordField.type = "password";
        passwordRevealer.setAttribute("src", "../images/eye-slash.png");
    }
};
passwordRevealer.addEventListener("click", () => {
    showPassword();
});

const validateName = () => {
    const userName = document.getElementById("name").value;
    const nameRegex = /[A-Za-z][a-zA-z ]{1,}/gm;
    const nameError = document.getElementById("name-error");
    if (userName.length === 0 || !userName.match(nameRegex)) {
        nameError.style.display = "block";
        return false;
    }
    nameError.style.display = "none";
    return true;
};

const validateEmail = () => {
    const userEmail = document.getElementById("email").value;
    const emailRegex =
        /^[\w.! #$%&'*+=? ^_`{|}~-]+@[a-zA-Z0-9-]+([\.-]?\w+)*(\.\w{2,3})+$/gm;
    const emailError = document.getElementById("email-error");
    if (userEmail.length === 0 || !userEmail.match(emailRegex)) {
        emailError.style.display = "block";
        return false;
    }
    emailError.style.display = "none";
    return true;
};

const validatePhone = () => {
    const userPhone = document.getElementById("phone").value;
    const phoneRegex =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/gm;
    const phoneError = document.getElementById("phone-error");
    if (userPhone.length === 0 || !userPhone.match(phoneRegex)) {
        phoneError.style.display = "block";
        return false;
    }
    phoneError.style.display = "none";
    return true;
};

const validatePassword = () => {
    const userPassword = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/gm;
    const passwordError = document.getElementById("password-error");
    if (userPassword.length === 0 || !userPassword.match(passwordRegex)) {
        passwordError.style.display = "block";
        return false;
    }
    passwordError.style.display = "none";
    return true;
};

const validateCheckbox = () => {
    const checkbox = document.getElementById("checkbox");
    const checkboxError = document.getElementById("checkbox-error");
    if (checkbox.checked === false) {
        checkboxError.style.display = "block";
        return false;
    }
    return true;
};

document.getElementById("form").addEventListener("submit", (event) => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isCheckboxValid = validateCheckbox();
    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid &&
        isCheckboxValid
    ) {
        return true;
    } else {
        event.preventDefault();
        event.stopPropagation();
    }
})