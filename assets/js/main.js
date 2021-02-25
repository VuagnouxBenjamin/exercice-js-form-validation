// CONSIGNES EXERCICE : 
// Le formulaire sera envoyé grâce à la méthode "Post". ------------------------ OK
// La "Société" doit comporter au moins 1 caractère. ---------------------------
// La "Personne à contacter" doit comporter au moins 1 caractère. --------------
// Le "Code postal" doit comporter 5 caractères numériques. --------------------
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
    let errorMessage;
    if (societe.value.length < 1) {

        e.preventDefault()
    }

    //taking controll of the submit btn 
    e.preventDefault()
})