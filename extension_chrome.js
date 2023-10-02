let mot_de_passe = [];

document.addEventListener("DOMContentLoaded", function () {
    const envoyer = document.getElementById("envoyer");
<<<<<<< Updated upstream
    const motDePasseInput = document.getElementById("connection");
=======
    const motDePasseInput = document.getElementById("connexion");
>>>>>>> Stashed changes

    envoyer.addEventListener("click", function (event) {
        event.preventDefault();
        ajouterMotDePasse();
<<<<<<< Updated upstream
=======
        reinitialiserChampMotDePasse();
>>>>>>> Stashed changes
    });

    motDePasseInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            ajouterMotDePasse();
<<<<<<< Updated upstream
=======
            reinitialiserChampMotDePasse();
>>>>>>> Stashed changes
        }
    });

    function ajouterMotDePasse() {
        const motDePasseValue = motDePasseInput.value;
        mot_de_passe.push(motDePasseValue);
        console.log("Mots de passe enregistrés :", mot_de_passe);
    }
<<<<<<< Updated upstream
=======

    function reinitialiserChampMotDePasse() {
        motDePasseInput.value = "";
    }
>>>>>>> Stashed changes
});
