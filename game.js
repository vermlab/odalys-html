// Creation d'un dictionnaire au chargement de la page
let attempts = 12;
let letters = [];
refreshCount(attempts);

let button = document.getElementById("play");

// Tirage au sort du mot

let word = sortWord();
let hiddenWord = word.replace(/[a-z]/g, "_ ");

// Caviarder le mot et l'afficher dans la page
document.getElementById("word").innerHTML = hiddenWord;

// Lors du clic sur le bouton jouer,
button.addEventListener("click", function () {
  // récupération de la valeur du champ de saisie
  let letter = getUserInput();
  // 1) Si la lettre est présente
  // On décaviarde les occurences de la lettre au sein du mot
  if (word.includes(letter)) {
    updateWord(letter);
  } else {
    // 2) Si la lettre n'est pas présente
    // On décompte une tentative à l'utilisateur
    attempts = attempts - 1;
    refreshCount(attempts);
  }

  if (word === hiddenWord.replace(/ /g, "")) {
    alert("Vous avez gagné");
  } else if (attempts === 0) {
    alert("Vous avez perdu");
  }
});

/**
 * Utils
 */

/**
 * Permet de rafraichir le compteur de tentatives
 */
function refreshCount(count) {
  document.getElementById("tries").innerHTML = count;
}
/**
 * Permet de tirer un mot au sort
 */
function sortWord() {
  let fruits = ["banane", "pomme", "poire", "orange", "fraise"];
  let randomIndex = Math.floor(Math.random() * fruits.length);
  return fruits[randomIndex];
}
/**
 * Permet de récupérer la lettre de l'utilisateur
 */
function getUserInput() {
  return document.getElementById("letter").value;
}
/**
 * Permet de supprimer la saisie de l'utilisateur
 */
function clearInput() {
  document.getElementById("letter").value = "";
}
/**
 * Mise à jour du mot caviardé
 */
function updateWord(letter) {
  letters.push(letter);
  hiddenWord = word
    .split("")
    .map((l) => (letters.includes(l) ? l : "_"))
    .join(" ");

  document.getElementById("word").innerHTML = hiddenWord;
}
