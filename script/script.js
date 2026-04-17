
// =================================
// 🌱 1. Sélection des éléments DOM
// =================================

// 1. Récupère tes éléments du DOM

const inputChamp = document.querySelector(".inputChampion");
const submitBtn = document.querySelector(".btnAjouter");
const counter = document.querySelector(".compteur"); 
const displayMessage = document.querySelector(".message"); 
const champList = document.querySelector(".liste-champions"); 

// const selectChampHTML = document.getElementById("champs"); // PAS DE HASHTAG AVEC ID !!!!!



// // =================================
// // 🧠 2. Variables globales / état
// // =================================

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

// On créée un tableau roster

let roster = [];

// on créée un compteur

let champCount = 0;

// // =================================
// // 🎊 3. Fonctions (logique métier)
// // =================================


// Fonction pour générer le select et ses options

// // 1. convertir ce tableau en menu déroulant (<select>) grâce à une boucle. 

function generateSelect(array) {
  // Dans ce premier bloc je crée une balise HTML select 
  const selectBox = document.createElement('select');
  // puis une option vide non sélectionnable 
  const disabledOption = document.createElement('option');
  // Set Attribute permet de créer n'importe quel attribut (nom de l'attribut, valeur)
  disabledOption.setAttribute('disabled', '');
  disabledOption.setAttribute('selected', '');
  disabledOption.textContent = "Choisis ton champion :";
  selectBox.appendChild(disabledOption);
  // Je boucle ensuite sur le tableau passé en paramètre
  for (let i = 0; i < array.length; i++) {
    const option = document.createElement('option');
    option.textContent = array[i];
    selectBox.appendChild(option);
  }
  // J'envoie le tout dans mon select box
  selectBox.appendChild(selectChamp);
}

// Fonction d'affichage du dernier champion
// // 7. Crée la fonction afficherRoster()
// 5.2. Affiche progressivement les héros dans l'ul qui a la classe liste-champions - PUSH

function displayLastChamp(array) {
  const myChamp = document.createElement('li');
  myChamp.innerHTML = array[array.length-1];
  champList.appendChild(myChamp);
}

// Fonction de modification du compteur de héros dans le roster
function incrementCounter(array, counterr) {
  counterr.textContent = array.length;
}


// // 4. Vérifie si un champion est déjà dans le Roster / tableau / (et empêcher qu'il soit là 2 fois) 

function addChamp(roster, newChampion){
  
  // creation variable avec valeur input
  
  // let newChampion = inputChamp.value;
  
  // si un champion n'est pas déjà dans le roster 
  
  if(roster.indexOf(newChampion) === -1) {
    
    // AJOUTE LE NOUVEAU CHAMPION DANS LE roster
    
    roster.push(newChampion);  
    
    displayLastChamp(roster);
    incrementCounter(roster, counter);
    
  }  else {
    displayMessage.innerHTML = `⚠️ <strong>${newChampion}</strong> est déjà dans ton roster ! ⚠️`;
  }
}


// Fonction de remise à 0
function reset(select, input) {
  select.selectedIndex = 0;
  input.value = "";
}



// // 9. Ajoute un bouton "Réinitialiser" qui remet le Roster à 0

// // =================================
// // 🧲 4. Événements (interactions)
// // =================================


// On lance la création de la balise select

generateSelect(champions);


// Au clic / Enter...
// 3. Écoute le clic sur le bouton

submitBtn.addEventListener('click', () => {
  
  // On capture toute une série de valeurs au click ... 
  const selectChampionBox = document.querySelector('select'); ///////// !!!! pas dans ton HTML
  const selectChampi = selectChampionBox.value;
  const inputChamp = inputChamp.value;
  
  
  
  // Si l'utilisateur n'a ni rempli le select ni l'input ... 
  if (selectChampi === "Sélectionnez votre champion" && (!inputChamp)) {
    displayMessage.textContent = "Merci de remplir au moins un des 2 input"
    return;                                                          // ÉVITER RETURN !! ELSE
  }
  
  displayMessage.textContent = ""; // ?????????????
  
  // Dans les 2 if suivants, on vérifie que l'utilisateur a bien modifié l'un ou l'autre et on lance la fonction add champion si c'est rempli
  if (selectChampi !== "Sélectionnez votre champion") {
    addChampion(selectChampi, roster);
  }
  if (inputChamp !== "") {
    addChampion(inputChamp, roster);
  }
  
  reset(selectChampi,inputChamp);
  
  // On vérifie finalement si la longueur du tableau du roster est de 5 et si c'est le cas on affiche un msg et on cache le bouton d'ajout
  
  // = ':crossed_swords: Ton équipe est prête, bonne chance sur la faille !';
  
  if (roster.length == 5) {
    displayMessage.textContent = "⚔️ Ton équipe est prête, bonne chance sur la faille ! ⚔️"
    submitBtn.remove();
  } 
  
});


// --------------------------------

// function addOption () {
//    for (let i = 0; i < champions.length; i++) {
//       let optnChamp = champions[i];
//       let championName = document.createElement("option");
//       championName.innerHTML = optnChamp;
//       championName.value = optnChamp;
//       selectChamp.appendChild(championName); //optnChamp ?
//    }
//    displayMessage.innerHTML = "champion added to the list";
// }