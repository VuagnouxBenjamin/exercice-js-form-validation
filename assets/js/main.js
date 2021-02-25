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
// select
const environnement = document.getElementById("environnementSelect");
const showSelect = document.getElementById("showSelect");
// Buttons
const envoyer = document.getElementById("envoyer");
const effacer = document.getElementById("effacer");

// ERREURS
const societeErr = document.getElementById("societeErr");
const personneAContacterErr = document.getElementById("personneAContacterErr");
const codePostalErr = document.getElementById("codePostalErr");
const villeErr = document.getElementById("villeErr");
const emailErr = document.getElementById("emailErr");


// --- DECLARATION DES FONCTIONS

form.addEventListener('submit', (e) => {
    //Message d'erreur si les valeurs sont fausses. 
    if (societe.value.length <= 1) {
        societeErr.innerHTML = "Le nom de la société doit être renseigné";
        e.preventDefault()
    };

    if (personneAContacter.value.length <= 1) {
        personneAContacterErr.innerHTML = "Le nom de la personne à contacter doit être renseigné";
        e.preventDefault()
    };

    if (isNaN(codePostal.value) || codePostal.value.length != 5) {
        codePostalErr.innerHTML = "Votre code postal doit être composé de 5 chiffres";
        e.preventDefault()
    };

    if (ville.value.length <= 1) {
        villeErr.innerHTML = "Le nom de la ville doit être renseigné";
        e.preventDefault()
    };

    if (!email.value.includes("@")) {
        emailErr.innerHTML = "Votre email doit contenir un @";
        e.preventDefault()
    };

    //Retrait du message d'erreur si les valeurs sont bonnes. 
    if (societe.value.length >= 1) {
        societeErr.innerHTML = "";
    };

    if (personneAContacter.value.length >= 1) {
        personneAContacterErr.innerHTML = "";
    };

    if (!isNaN(codePostal.value) && codePostal.value.length == 5) {
        codePostalErr.innerHTML = "";
    };

    if (ville.value.length >= 1) {
        villeErr.innerHTML = "";
    };

    if (email.value.includes("@")) {
        emailErr.innerHTML = "";
    };
})