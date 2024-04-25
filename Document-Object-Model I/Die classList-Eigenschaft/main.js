"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

// Gibt eine DOMTokenlist zurück, etwas ähnlich Array
let class_list = jumbo.classList;
console.log(class_list);

// Klassn hinzufügen
jumbo.classList.add("meine-Klasse");
// Klassen entfernen
jumbo.classList.remove("jumbotron");
// Klassen ersetzen / auf leer setzen
jumbo.classList.replace("meine-Klasse", "deine-Klasse");
console.log(jumbo.classList.contains("deine-Klasse"));

// Toggel ist wie ein Schalter, remove und add,
    // ist das Element enthalten, wird es entfernt,
    // ist es nicht vorhanden wird es hinzugefügt.
    // Wir können also ein, aus, ein, ausblenden.
jumbo.classList.toggle("auch-eine-Klasse");
jumbo.classList.toggle("auch-eine-Klasse");