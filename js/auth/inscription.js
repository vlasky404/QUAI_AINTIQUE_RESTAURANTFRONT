const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidInscritpion = document.getElementById("btn-validation-inscritpion");
const formInscription = document.getElementById("formInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);
btnValidInscritpion.addEventListener("click", signinUser);

function validateForm(){
    const nomOK = validateRequired(inputNom);
    const prenomOK = validateRequired(inputPrenom);
    const mailOK = validateMail(inputEmail);
    const passwordOK = validatePassword(inputPassword);
    const validatepasswordOK = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if(nomOK && prenomOK && mailOK && passwordOK && validatepasswordOK){
        btnValidInscritpion.disabled = false;
    }
    else{
        btnValidInscritpion.disabled = true;
    }
}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;    
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid")
        return false;
    }
}

function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd, inputValidatePwd){
    if(inputPwd.value == inputValidatePwd.value){
        inputValidatePwd.classList.add("is-valid");
        inputValidatePwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputValidatePwd.classList.add("is-invalid");
        inputValidatePwd.classList.remove("is-valid");
        return false;
    }
}

function signinUser() {

    const dataForm = new FormData(formInscription);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "firstName": dataForm.get("nameSI"),
        "lastName": dataForm.get("lnameSI"),
        "email": dataForm.get("email"),
        "password": dataForm.get("mdp")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiURL+"registration", requestOptions)
        .then((response) => {
            if(response.ok){
                return response.json();
                  }
            else{
                alert("Erreur lors de l'inscription.")
            }
        })
        .then((result) => {
            alert("Bravo "+dataForm.get("lnameSI")+", vous êtes inscrit.")
            document.location.href="/connexion"
        })
        
        .catch((error) => console.error(error));
}