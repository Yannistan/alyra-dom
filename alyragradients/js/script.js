"use strict"

/* 
le script gradients.js est chargé avant script.js
la variable gradients est disponible - vous pouvez le voir dans la console
*/
console.log(gradients)

/* dans le paragraphe #intro afficher la phrase 
Voici une collection de ... dégradés prêts à utiliser dans vos feuilles de styles
ou ... correspond au nombre de dégradés */

const pIntroEl = document.getElementById("intro")
pIntroEl.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`
/* header : 
ajouter la propriété backgroundImage au style de header
linear-gradient(90deg, .., ..)
ou ... correspondent aux couleurs start et end d'un des objet de l'array gradients (choix aléatoire)

Le bouton #header-button permet de regénérer le header (=changer le dégradé)
*/
const headerEl = document.getElementById("header")
const linear-gradient = [ 90, "rgb(189, 195, 199)", "rgb(44, 62, 80)"]
headerEl.style.backgroundImage = linear-gradient
headerEl.setAttribute(
    'style', `background-Image:${linear-gradient}`
)