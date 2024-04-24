"use strict";

let zahlen = [
    5,
    56,
    47,
    8,
    49,
    35,
    3,
    67,
    90
];

console.log(zahlen);

// for-Schleife
console.log("Array ausgeben mit for-Schleife");
for (let i =0; i< zahlen.length; i++){
    console.log(zahlen[i]);
}


// forEach kann nur durchlaufen, ohne (Startindex) oder continue; break;. Ohne Richtung von hinten etc.
console.log("Array ausgeben mit forEach");
let meineFunktion = function(e){
    console.log(e);
}

zahlen.forEach(meineFunktion);




console.log("Array ausgeben mit forEach, (richtig) und kompakt");

// forEach kann nur durchlaufen, ohne (Startindex) oder continue; break;. Ohne Richtung von hinten etc.
// Kompakte forEach
zahlen.forEach(function(e){
    console.log(e);
});

// Arrow kürzer, modernenr
console.log("Arrow morderner, kürzer");
zahlen.forEach(e => console.log(e));
