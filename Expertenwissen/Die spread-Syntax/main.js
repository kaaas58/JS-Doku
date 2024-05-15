"use strict";

// spread-Syntax ...hfghjgk


// Für Funktionen
let  meine_zahlen = [44, 51, 36];

const addieren = function(a, b, c){
    console.log(a + b + c);
};

// addieren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2]);
addieren(...meine_zahlen);


// Für Arrays
let kleines_array = ["Apfel", "Banane", "Kiwi"];
// let grosses_array = [kleines_array[0], kleines_array[1], kleines_array[2],"Orange", "Weintraube"];
let grosses_array = [...kleines_array, "Orange", "Weintraube"]

let sehr_grosses_array = [...grosses_array, "Annanas", "Kokusnuss"]
// console.log(grosses_array);
// console.log(sehr_grosses_array);


// Für Objekte
let kleines_objekt = {
    name: "Ein Objekt",
    groesse: 2,
    objekt: true
};

let grosses_objekt = {
    ...kleines_objekt,
    betreff: "Spread_Syntax",
    datum: new Date()
};

console.log(grosses_objekt);