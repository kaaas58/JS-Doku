"use strict";

let person1 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode(){
        console.log(this); }
};

person1.meine_methode();


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



let person3 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode(){
        const meine_funktion = () => console.log(this); // Pfeilfunktionen bringen keinen eigenen Kontext mit, 
        meine_funktion();                                   // erhalten den Kontext aus dem sie aufgerufen werden.
    }    
};
person3.meine_methode();