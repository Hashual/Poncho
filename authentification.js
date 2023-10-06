// extension_chrome.js

let mot_de_passe = [];
const motDePassePredefini = "Toto";
const motDePassePredefini2 = "Tata";

// Charger les données stockées au démarrage de l'extension
chrome.storage.sync.get("mot_de_passe", function (result) {
    if (result.mot_de_passe) {
        mot_de_passe = result.mot_de_passe;
        console.log("Mots de passe chargés :", mot_de_passe);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const envoyer = document.getElementById("envoyer");
    const motDePasseInput = document.getElementById("connexion");

    envoyer.addEventListener("click", function (event) {
        event.preventDefault();
        authentifierUtilisateur();
        reinitialiserChampMotDePasse();
    });

    motDePasseInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            authentifierUtilisateur();
            reinitialiserChampMotDePasse();
        }
    });

    function authentifierUtilisateur() {
        const saisieUtilisateur = motDePasseInput.value;
        if (saisieUtilisateur === motDePassePredefini) {
            // Mot de passe correct, envoyer un message au script d'arrière-plan pour déclencher la redirection
            chrome.runtime.sendMessage({ redirectToMainPage: true });

        }else if (saisieUtilisateur === motDePassePredefini2) {
            // Mot de passe correct, envoyer un message au script d'arrière-plan pour déclencher la redirection
            window.location.href = "choose_login.html";       
        }else {
            // Mot de passe incorrect, afficher un message d'erreur
            alert("Mot de passe incorrect. Veuillez réessayer.");
        }
    }

    function reinitialiserChampMotDePasse() {
        motDePasseInput.value = "";
    }
});

// Ajouter la logique de redirection après une authentification réussie
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.redirectToMainPage) {
        // Rediriger vers la page principale de l'extension
        window.location.href = "index.html"; // Remplacez par le nom de votre page principale
    }
});
