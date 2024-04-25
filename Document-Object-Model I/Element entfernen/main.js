"use strict";

//Variable festlegen
let nav = document.querySelector("#navigation");
console.log(nav);

// In nav festgelegte id #navigation löschen.
nav.remove();

let jumbo = document.querySelectorAll(".jumbotron");
console.log(jumbo);

// jumbo.remove(); geht nicht, da es sich um eine Nodeliste handelt,
    // somit müssen wir darüber itterieren
jumbo.forEach(function(e){
    e.remove();
});