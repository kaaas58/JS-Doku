"use strict";

// Array hat viele nüztliche Eigenschaffte, unter anderem .length
let produkteArray =[
    "Baneanen",
    "Äpfel",
    "Schokolade",
    "Brot",
    "Müsli"
];

console.log(produkteArray); // gibt ganzes Array aus
console.log(produkteArray.length); // gibt zahl 5 aus (Arrayplätze 0-4 = .length =5)
console.log(produkteArray.length -1); // gibt zahl 4 aus.
console.log(produkteArray[produkteArray.length -5]); // Ausgabe Array an der Stelle(.length = 5 | -5 = 0. Pos 0 ist "Bananen")

// Im Objekt lässt sich der Inhalt ähnlich darstennen
// Kein fokusierter Zugriff mit Index möglich. Auch diverse andere Array Funktionen sind nicht nutzbar
let produkteObjekt ={
    0: "BAnanen",
    1: "Apfel",
    2: "Schokolade",
    3: "Brot",
    4: "Müsli"
};

console.log(produkteObjekt);