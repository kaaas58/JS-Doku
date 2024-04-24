"use strict";

// Element erstellen
let div = document.createElement("div");
console.log(div);

console.log("-------");

// Attribut erstellen und Wert zuweissen
let att = document.createAttribute("id");
att.value = "Meine ID";
// console.log(att);

// Attribute einem Element hinzufügen
div.setAttributeNode(att);

// Attribut erstellen und hinzufügen 
div.setAttribute("class", "meine_klasse");

let text = document.createTextNode("Lorem ypsum");
console.log(text);
console.log(div);