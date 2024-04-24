"use strict";

// anonyme Funktion // gespeichert inm einer Variable
// const hat einen Namen // Funktion ist noch nicht benannt.
// Funktionsausdrück
const funktion1 = function(){
 console.log("Funktion1");
};

funktion1();




let funktion2 = function(){
    console.log("Funktion2");
};

funktion2();

// überschreiben der Variable funktion2
funktion2 = function(){
    console.log("Funktion2 (NEU)");
};

funktion2();


// eher nicht nutzen
// Funktionsdeklaration
// Brauch kein Semicolon nach Methodenkörper
// Wird gehoisted, mann kann dieße funktion quasi
 // vor der Deklaration aufgerufen werden
function funktion3(){
    console.log("Funktion3");
}

funktion3();









