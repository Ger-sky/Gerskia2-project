const form = document.getElementById('inputs');
const number = document.getElementById('number');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const cpsw = document.getElementById('cpsw');
const check = document.getElementById('check');
const submit = document.getElementById('submit');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const password = document.querySelector('#psw');

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

function newPage() {
    window.location('/html/index.html')
}


cpsw.addEventListener('change', (e) => {
    console.log('yhjyhjujtujty');
})


one.onclick = function() {
    if(psw.type == 'password'){
        psw.type = 'text';
        one.classList.replace("close", "open");
    } else {
        psw.type = 'password';
        one.classList.replace("open", "close");
    }
}
two.onclick = function() {
    if(cpsw.type == 'password'){
        cpsw.type = 'text';
    } else {
        cpsw.type = 'password';
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success")
    inputControl.classList.remove("error"); 
};

const isValidUname = uname => {
    const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    return re.test(String(uname).toLowerCase());
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidNumber = number => {
    const re = /^[\+]{1}[2]{1}[3]{1}[7]{1}[2,6]{1}[2,5,6,7,8,9]{1}[0-9]{7}$/im;
    return re.test(String(number));
}
const isValidPsw = psw => {
    const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    return re.test(String(psw));
}

const isValidcpsw = cpsw => {
    const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    return re.test(String(cpsw));
}

function jj(){
    console.log(uname.value.trim());
}

const validateInputs = () => {
    const unameValue = uname.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const pswValue = psw.value.trim();
    const cpswValue = cpsw.value.trim();
    console.log(unameValue);

    if(unameValue === "") {
        setError(uname, "name is required");
    } else if (!isValidUname(unameValue)) {
        setError(uname, "Please enter atleast 2 name");
    } else {
        setSuccess(uname);
    }

    if(numberValue === "") {
        setError(number, "Enter a cameroonian number");
    } else if (!isValidNumber(numberValue)) {
        setError(number, "Enter a valid phone number");
    } else {
        setSuccess(number);
    }

    if(emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSuccess(email);
    }

    if(pswValue === "") {
        setError(psw, "Password is required");
    } else if (!isValidPsw(pswValue)) {
        setError(psw, "Provide a secure password");
    } 
    else {
        setSuccess(psw);
    }

    if(cpswValue === "") {
        setError(cpsw, "Password is required");
    } else if (cpswValue != pswValue) {
        setError(cpsw, 'Please, password need to match with previous');
    } else if ((!isValidcpsw(cpswValue)) != (!isValidPsw(pswValue))) {
        setError(cpsw, 'Same, but not secure');
    } else {
        setSuccess(cpsw);
    }
};