let mot_de_passe = [];

document.addEventListener("DOMContentLoaded", function () {
    const envoyer = document.getElementById("envoyer");
    const motDePasseInput = document.getElementById("connexion");

    envoyer.addEventListener("click", function (event) {
        event.preventDefault();
        ajouterMotDePasse();
        reinitialiserChampMotDePasse();
    });

    motDePasseInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            ajouterMotDePasse();
            reinitialiserChampMotDePasse();
        }
    });

    function ajouterMotDePasse() {
        const motDePasseValue = motDePasseInput.value;
        mot_de_passe.push(motDePasseValue);
        console.log("Mots de passe enregistrés :", mot_de_passe);
    }

    function reinitialiserChampMotDePasse() {
        motDePasseInput.value = "";
    }
});
