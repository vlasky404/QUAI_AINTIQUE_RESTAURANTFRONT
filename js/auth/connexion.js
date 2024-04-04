const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btn-connexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Ici appeler l'API pour vérifier les credentials en BDD

    if(inputMail.value == "test@gmail.com" && inputPassword.value == "123"){
        alert("Vous êtes connecté");

        // Il faudra récupérer le vrai Token
        const token = "fsdgfsggsfsdsfd";
        setToken(token);
        // Placer ce token en cookie
        setCookie(RoleCookieName, 'admin', 7)
        window.location.replace('/');
    }
    else{
        inputMail.classList.add("is-invalid");
        inputMail.classList.remove("is-valid");
        inputPassword.classList.add("is-invalid");
        inputPassword.classList.remove("is-valid");

    }
}