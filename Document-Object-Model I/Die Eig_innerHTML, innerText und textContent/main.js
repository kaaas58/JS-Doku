"use strict";

let jumbo = document.querySelector(".jumbotron");

// ------------------------------ Teile ausgeben

// // Gibt Html code und Kindelemente zurück
// console.log(jumbo.innerHTML);

// // Ähnlich wie frontend, nur den text. Mit berücksichtigung display none und br. etc.
//     // mit Kindelementen
// // Kein Script oder Style
// console.log(jumbo.innerText);

// // Gibt texte ohne html zurück ohne rücksicht der randerung
//     // mit Kindelementen
// console.log(jumbo.textContent);


// --------------------------- Teile beeinflussen, komplett überschreiben

let string_1 ="";
let string_2 ="<header><h2>Lorem ypsum dolor sit amed</h2></header>";
let string_3 ="<p>58 Lorem ypsum dolor sit amed</p>";
let string_4 ="Lorem ypsum dolor sit amed.";

// jumbo.innerHTML = string_1;
// jumbo.innerHTML = string_2;
// jumbo.innerHTML = string_3;
// jumbo.innerHTML += string_3;

// jumbo.innerText = string_1;
// jumbo.innerText = string_2;
// jumbo.innerText = string_3;

// jumbo.textContent = string_1;
// jumbo.textContent = string_2;
// jumbo.textContent += string_3; //nur nomaler String möglich aber nid gut

