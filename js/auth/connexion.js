const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btn-connexion");
const signinForm = document.getElementById("signinForm");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Ici appeler l'API pour vérifier les credentials en BDD

    // if(inputMail.value == "test@gmail.com" && inputPassword.value == "123"){
    //    alert("Vous êtes connecté");

        // Il faudra récupérer le vrai Token
    //    const token = "fsdgfsggsfsdsfd";
    //    setToken(token);
    //    // Placer ce token en cookie
    //    setCookie(RoleCookieName, 'admin', 7)
    //    window.location.replace('/');
    //}
    //else{
    //    inputMail.classList.add("is-invalid");
    //    inputMail.classList.remove("is-valid");
    //    inputPassword.classList.add("is-invalid");
    //    inputPassword.classList.remove("is-valid");
    //
    //}
    const dataForm = new FormData(signinForm);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("mdp")
        });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiURL+"login", requestOptions)
    .then((response) => { 
        if(response.ok){
           return response.json()
    }
    else{
        inputMail.classList.add("is-invalid");
        inputPassword.add("is-invalid")
    }
    })
    .then((result) => {
        const  token = result.apiToken;
        setToken(token);
        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");
    })
    .catch((error) => console.error(error));
}