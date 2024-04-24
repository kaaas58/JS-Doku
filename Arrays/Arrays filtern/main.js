"use strict";

let zahlen = [
    6,
    8,
    24,
    36,
    12,
    23,
    34,
    77,
    2,
    32,
    9,
    55,
    43,
    11,
    1,
    100,
    2002,
    2455,
    325,
    828
];

//neues Array
let neuesArray =[
];

// Mit for-Schleife durchlaufen und in neues Array pushen.
    // Durchläuft das Array
    // jede gerade Zahl die gleich 20 und darüber liegt, wird in (neuesArray) geschrieben.
for(let i = 0; i < zahlen.length; i++){
    if(zahlen[i] %2 === 0 && zahlen[i] >= 20){
        neuesArray.push(zahlen[i]);
    }
}

// Für jedes element aus (neuesArray) => Dießes ausgeben.
    // num kann auch anders benannt werden | Variable nur in der Schleife.
neuesArray.forEach(num => {
    console.log(num);
});

console.log("");
//----------------------------------------------------------------------------------------
console.log("------arr.filter");

// neue constante Variable (kleinerGleich20undGerade) anlegen = sie nimmt das Array (zahlen) und filtert. 
    // Je Element (z) muss (z) die Bedingung(en) >=20 und durch 2 teilbar mit rest 0, also (gerade) sein.
let kleinerGleich20undGerade = zahlen.filter(z => z >= 20 && z %2 === 0);
// Das neu erstellte Array (kleinerGleich20undGerade) ausgeben.
console.log(kleinerGleich20undGerade);