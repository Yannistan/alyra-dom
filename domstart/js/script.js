"use strict"

// document.body.style.background = "magenta"
/*
document.body.style.opacity = 0
document.body.style.transition = "ls"
*/
/* 1.Le contenu du timeout apparait avec transition */
/* stTimeout crée un delai */

setTimeout( () => {
    document.body.style.opacity = 1 // style inline, force 1000
}, 500) 

/* 2.La propriete background-color de l'element
header est aleatoire
["hotpink", "tomato", "orange"]
*/

const headerEl = document.getElementById("header")
console.dir(headerEl)
const colors = ["hotpink", "tomato", "orange"]
const randomIndexColor = Math.floor(Math.random()*colors.length)

headerEl.style.backgroundColor = colors[randomIndexColor]

/*
headerEl.setAttribute(
    'style', `background-color:${colors[randomIndexColor]}!important;`
)

/* 3 a  faire */ 
const hellos = ["Hello", "Salut", "Hola", "Cześć"]
  const randomIndexHellos = Math.floor(Math.random() * hellos.length)
  const tagline = document.getElementById("tagline")

  tagline.textContent = `${hellos[randomIndexHellos]}` 


/* 4 */

const pIntroEl = document.getElementById("intro-criteres")

const criteres = document.querySelectorAll('#liste-criteres li')
console.log(criteres.length)

pIntroEl.textContent = `Nous avons préparés ${criteres.length} criteres`