const compteForm = document.getElementById("formCompte");


function formCompte(){ 
    const dataForm = FormData(compteForm);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": dataForm.get("nameSI"),
        "lastname": dataForm.get("lnameSI"),
    });

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiURL+"me", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }