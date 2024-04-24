"use strict";

let z1=13;
let z2=111;


// Funktion mit return
const multiplizieren = function(a=2, b=50){
    return(a*b);
};


// Variable festlegen gege/mit Funktion mit Parameter über Variablen. Dann (ergebniss-variable) ausgeben.
console.log("Variable festlegen gege/mit Funktion mit Parameter über Variablen. Dann (ergebniss-variable) ausgeben.")
let ergebnis = multiplizieren(z1, z2);
console.log(ergebnis);


console.log("");
// console.log mit Funktion mit Parametern / Variablen / default Parametern
console.log("console.log mit Funktion mit Parametern / Variablen / default Parametern");
console.log(multiplizieren(13, 111));
console.log(multiplizieren(z1, z2));
console.log(multiplizieren());


console.log("");
// ausgeben einer Funktion an sich über Variablenname in Console
console.log("ausgeben einer Funktion an sich über Variablenname in Console");
console.log(multiplizieren);


// HAUPTTEIL
console.log("");
console.log("UNTERICHTSSTUFF");

// Funktion mit return in: multipl
const multipl = function(a, b){
    return a*b;
};

let z_1 = 13;
let z_2 = 111;

let ergebnis_1 = multipl(z_1, z_2);
    console.log(ergebnis_1);
    console.log(multipl(z_1, z_2));

let ergebnis_2 = multipl(ergebnis_1, ergebnis_1);
console.log(ergebnis_2);
console.log(ergebnis_1 * ergebnis_1);
console.log(multipl(multipl(z_1, z_2), multipl(z_1, z_2)));

console.log("");
ergebnis_2 = multipl(multipl(z_1, z_2), multipl(z_1, z_2));
console.log(ergebnis_2);

console.log("");
console.log(multipl);



















