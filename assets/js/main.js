// CONSIGNES EXERCICE : 
// Le formulaire sera envoyé grâce à la méthode "Post". ------------------------ OK
// La "Société" doit comporter au moins 1 caractère. --------------------------- OK
// La "Personne à contacter" doit comporter au moins 1 caractère. -------------- OK 
// Le "Code postal" doit comporter 5 caractères numériques. -------------------- OK 
// La "Ville" doit comporter au moins 1 caractère. -----------------------------
// Le Email doit comporter au moins le caractère "@". --------------------------

// --- DECLARATION DES VARIABLES

// VALEURS
const form = document.getElementById("form");
const societe = document.getElementById("societeInput");
const personneAContacter = document.getElementById("personneAContacterInput");
const codePostal = document.getElementById("codePostalInput");
const ville = document.getElementById("villeInput");
const email = document.getElementById("emailInput");
const telephone = document.getElementById("telephoneInput");

// Buttons
const envoyer = document.getElementById("envoyer");
const effacer = document.getElementById("effacer");

// ERREURS
const societeErr = document.getElementById("societeErr");
const personneAContacterErr = document.getElementById("personneAContacterErr");
const codePostalErr = document.getElementById("codePostalErr");
const villeErr = document.getElementById("villeErr");
const emailErr = document.getElementById("emailErr");

// select
const environnement = document.getElementById("environnementSelect");
const showSelect = document.getElementById("showSelect");
// select options 


// --- DECLARATION DES FONCTIONS

// -- Gestion du select de l'environnement technique du projet. 
//-------------------------------------------------------------
let alreadySelected = new Array();
environnement.addEventListener("change", e => {
    if (environnement.value != "Choisissez..." && !alreadySelected.includes(environnement.value)) {
        alreadySelected.push(environnement.value)
            // dès que la valeur du select change, on crée une <option selected> dans le deuxième champ. 
        showSelect.innerHTML += `<option value="${environnement.value}" selected>${environnement.value}</option>`;
    }
    console.log(alreadySelected)
})

// -- form validation
//-------------------
form.addEventListener('submit', (e) => {
    //Message d'erreur si les valeurs sont incorrectes. 
    if (societe.value.length <= 1) {
        societeErr.innerHTML = "Le nom de la société doit être renseigné";
        societe.classList.add("border-danger");
        e.preventDefault()
    };

    if (personneAContacter.value.length <= 1) {
        personneAContacterErr.innerHTML = "Le nom de la personne à contacter doit être renseigné";
        personneAContacter.classList.add("border-danger");
        e.preventDefault()
    };

    if (isNaN(codePostal.value) || codePostal.value.length != 5) {
        codePostalErr.innerHTML = "Votre code postal doit être composé de 5 chiffres";
        codePostal.classList.add("border-danger");
        e.preventDefault()
    };

    if (ville.value.length <= 1) {
        villeErr.innerHTML = "Le nom de la ville doit être renseigné";
        ville.classList.add("border-danger");
        e.preventDefault()
    };

    if (!email.value.includes("@")) {
        emailErr.innerHTML = "Votre email doit contenir un @";
        email.classList.add("border-danger");
        e.preventDefault()
    };

    //Retrait du message d'erreur si les valeurs sont correctes. 
    if (societe.value.length >= 1) {
        societeErr.innerHTML = "";
        societe.classList.remove("border-danger");
        societe.classList.add("border-success");
    };

    if (personneAContacter.value.length >= 1) {
        personneAContacterErr.innerHTML = "";
        personneAContacter.classList.remove("border-danger");
        personneAContacter.classList.add("border-success");
    };

    if (!isNaN(codePostal.value) && codePostal.value.length == 5) {
        codePostalErr.innerHTML = "";
        codePostal.classList.remove("border-danger");
        codePostal.classList.add("border-success");
    };

    if (ville.value.length >= 1) {
        villeErr.innerHTML = "";
        ville.classList.remove("border-danger");
        ville.classList.add("border-success");
    };

    if (email.value.includes("@")) {
        emailErr.innerHTML = "";
        email.classList.remove("border-danger");
        email.classList.add("border-success");
    };


})

//Bugs : 
// on peut entrer plusieurs fois la même valeur dans le selectShow - OK