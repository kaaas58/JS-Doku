"use strict";
// Im Zusammenhang mit this, gerne mit Arrow arbeiten
// In Objekten, bei Call-Backs und this , auch in Obvjekten => Arrows nutzen.
// Außerhalb von Objekten eher normale Funktionen üblich

// This referenziert das Objekt in dessen Kontext es aufgerufen wird.
let person1 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode(){
        console.log(this); }
};
person1.meine_methode();

// Durch nutzung von this innerhalb einer Funktion "fällt das this aus dewm Kontext".
// Im Strict-Mode ist es undefined.
// Ohne Strict-Modus bezieht sich this in dem Fal auf das Window-Objekt.
let person2 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode(){
        const meine_funktion = function(){console.log(this); }; // this aus dem Kontext gefallen..
        meine_funktion();
    }    
};
person2.meine_methode();


// Pfeil-Funktionen erhalten den Kontext zum Objekt in dem sie erstzellt werden
let person3 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode(){
        const meine_funktion = () => console.log(this); 
        meine_funktion();                                   
    }    
};
person3.meine_methode();


// Wann nutzen wir normal die Normale-Funktion und wann dei Pfeil-Funktion?
// Auf globaler Ebene im Code -> normale Funktion.
// In Call-Back-Funktionen -> Pfeil-Funktion.
// In Methoden von Objekten -> Pfeil-Funktion.
// allgemein immer beim Kontakt mit dem Keyword this -> Pfeil-Funktion

// Im Zusammenhang mit this, gerne mit Arrow arbeiten
// (In Objekten, bei Call-Backs und bei this) => Arrows nutzen.
// Außerhalb von Objekten eher normale Funktionen üblich.
