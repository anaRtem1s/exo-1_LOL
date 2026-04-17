# ⚔️ Compose ton équipe League of Legends

Un petit projet JavaScript fun pour créer son roster de champions 🧙‍♂️  
L’utilisateur peut ajouter des champions via un **select** ou un **input texte**, avec gestion des doublons et limite d’équipe.

---

## 🚀 Fonctionnalités

- ✅ Génération dynamique d’un `<select>` avec une liste de champions
- ✅ Ajout de champions via :
  - un menu déroulant
  - un champ texte libre
- ✅ Vérification des doublons
- ✅ Affichage en temps réel du roster
- ✅ Compteur de champions (max : 5)
- ✅ Message de validation une fois l’équipe complète
- ✅ Reset automatique des champs après ajout

---

## 🧠 Logique du projet

### 🔹 Ajout d’un champion
- Vérifie si le champion est déjà présent (`indexOf`)
- Si non → ajout au tableau `roster`
- Affichage immédiat dans la liste HTML

### 🔹 Gestion des inputs
- Si les deux champs sont vides → message d’erreur
- Si un seul est rempli → ajout unique
- Si les deux sont remplis → les deux sont ajoutés

### 🔹 Limite d’équipe
- Maximum : **5 champions**
- Une fois atteint :
  - bouton supprimé
  - message final affiché

---

## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)

---
## 💡 Concepts JavaScript abordés

- `querySelector`
- `addEventListener`
- Manipulation du DOM (`createElement`, `appendChild`)
- Tableaux (`push`, `indexOf`)
- Conditions (`if / else`)
- Gestion des événements (click)
- Reset des champs (`value`, `selectedIndex`)

---

## ⚠️ Points d'amélioration possibles

- 🔤 Normaliser les noms (ex: éviter `jinx` vs `Jinx`)
- ❌ Ajouter la suppression d’un champion
- 🎨 Ajouter des styles / animations (hover, effets)
- 💾 Sauvegarde du roster (localStorage)
- 🎮 Ajouter des rôles (Top, Jungle, etc.)

---

## 🧪 Exemple d'utilisation

1. Sélectionne un champion dans le menu déroulant  
2. Ou tape un nom dans le champ texte  
3. Clique sur **"Ajouter au roster"**  
4. Répète jusqu’à avoir ton équipe complète 💪

---

## 🎯 Objectif pédagogique

Ce projet est parfait pour :
- Comprendre la manipulation du DOM
- Travailler avec des tableaux
- Gérer des événements utilisateurs
- Structurer du code JavaScript simple et propre

---

## 🧙‍♂️ Fun fact

Même si tu mets **Teemo**, on ne te juge pas…  
mais un peu quand même 😏

---
