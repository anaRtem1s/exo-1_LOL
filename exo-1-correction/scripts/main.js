// =================================
// 🌱 1. Sélection des éléments DOM
// =================================
const inputChampion = document.querySelector('.inputChampion'),
addBtn = document.querySelector('.btnAjouter'),
message = document.querySelector('.message'),
compteur = document.querySelector('.compteur'),
listeChampions = document.querySelector('.liste-champions'),
selectContainer = document.querySelector('.select');
// =================================
// 🧠 2. Variables globales / état
// =================================
const champions = [
  // Top
  "Darius", "Garen", "Malphite", "Fiora", "Camille", "Teemo", "Nasus", "Irelia", "Riven", "Sett",
  // Jungle
  "Vi", "Warwick", "Hecarim", "Lee Sin", "Ekko", "Amumu", "Shyvana", "Kha'Zix", "Rengar", "Nidalee",
  // Mid
  "Yasuo", "Lux", "Syndra", "Zed", "Ahri", "Fizz", "Orianna", "Veigar", "Viktor", "Katarina",
  // ADC
  "Jinx", "Caitlyn", "Ezreal", "Jhin", "Miss Fortune", "Vayne", "Ashe", "Draven", "Kai'Sa", "Xayah",
  // Support
  "Thresh", "Lulu", "Blitzcrank", "Soraka", "Nautilus", "Leona", "Morgana", "Zilean", "Nami", "Pyke"
];

const roster = [];
let nbrChampions = 0;
// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

// Fonction pour générer le select et ses options
function generateSelect(array) {
  // Dans ce premier bloc je crée une option vide non sélectionnable :)
  const selectBox = document.createElement('select');
  const disabledOption = document.createElement('option');
  // Set Attribute permet de créer n'importe quel attribut (nom de l'attribut, valeur)
  disabledOption.setAttribute('disabled', '');
  disabledOption.setAttribute('selected', '');
  disabledOption.textContent = "Sélectionnez votre champion";
  selectBox.appendChild(disabledOption);
  // Je boucle ensuite sur le tableau passé en paramètre
  for (let i = 0; i < array.length; i++) {
    const option = document.createElement('option');
    option.textContent = array[i];
    selectBox.appendChild(option);
  }
  // J'envoie le tout dans mon select container
  selectContainer.appendChild(selectBox);
}

// Fonction d'affichage du dernier champion
function displayLastChamp(tableauChampion) {
  const myLi = document.createElement('li');
  myLi.textContent = tableauChampion[tableauChampion.length-1];
  listeChampions.appendChild(myLi);
}

// Fonction pour ajouter un champion
function addChampion(champion, array) {
  // On vérifie si indexOf ressort autre chose que -1 (il ressort -1 si la valeur n'est pas présente dans le tableau)
  if (array.indexOf(champion) !== -1) {
    message.innerHTML = `⚠️ <strong>${champion}</strong> est déjà dans ton roster ! ⚠️`;
    return;
  }
  // Si indexOf ressort qqchose de différent de -1 alors ça veut dire qu'on n'a pas de doublon et qu'on peut ajouter ça à mon tableau
  array.push(champion);
  displayLastChamp(array); //////////////////// !!!!
  modifCompteur(roster); ////////////////
}

// Fonction de remise à 0 classique
function reset(select, input) {
  select.selectedIndex = 0;
  input.value = "";
}

// Fonction de modification du compteur de héros dans le roster
function modifCompteur(tableau) {
  compteur.textContent = tableau.length;
}
// =================================
// 🧲 4. Événements (interactions)
// =================================
// On lance la création de la balise select
generateSelect(champions);


addBtn.addEventListener('click', function() {
  // On capture toute une série de valeurs au click ... 
  
  const selectChampion = document.querySelector('select');
  
  const selectValue = selectChampion.value;
  const inputValue = inputChampion.value;
  // Si l'utilisateur n'a ni rempli le select ni l'input ... 
  if (selectValue === "Sélectionnez votre champion" && inputValue === "") {
    message.textContent = "Merci de remplir au moins un des 2 input"
    return;
  }
  message.textContent = "";
  // Dans les 2 if suivants, on vérifie que l'utilisateur a bien modifié l'un ou l'autre et on lance la fonction add champion si c'est rempli
  if (selectValue !== "Sélectionnez votre champion") {
    addChampion(selectValue, roster);
  }
  if (inputValue !== "") {
    addChampion(inputValue, roster);
  }
  
  reset(selectChampion,inputChampion);
  // On vérifie finalement si la longueur du tableau du roster est de 5 et si c'est le cas on affiche un msg et on cache le bouton d'ajout
  if (roster.length == 5) {
    message.textContent = "⚔️ Ton équipe est prête, bonne chance sur la faille ! ⚔️"
    addBtn.remove();
  }  
}); 