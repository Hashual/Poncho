document.addEventListener("DOMContentLoaded", function () {
    const addUserButton = document.getElementById("add_user");
    const deleteUserButton = document.getElementById("delete_user");
    const addUserDiv = document.getElementById("addUserDiv");

    addUserButton.addEventListener('click', function() {
        // Afficher la div pour ajouter un utilisateur
        addUserDiv.style.display = 'block';
    });

    deleteUserButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Logique pour supprimer un utilisateur
        console.log('Supprimer un utilisateur...');
    });

    const confirmAddUserButton = document.getElementById("confirm_add_user");
    confirmAddUserButton.addEventListener('click', function() {
        // Récupérer les valeurs des champs
        const newUsername = document.getElementById("new_username").value;
        const newPassword = document.getElementById("new_password").value;

        // Logique pour ajouter un utilisateur avec le nom d'utilisateur et le mot de passe
        console.log('Ajouter un nouvel utilisateur:', newUsername, newPassword);

        // Cacher la div après l'ajout
        addUserDiv.style.display = 'none';
    });
});
