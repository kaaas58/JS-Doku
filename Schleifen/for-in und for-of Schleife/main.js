"use strict";
//for-in Schleife | for-of Schleife


let meinArray = [
    "Peter",
    "Mia",
    "Mark"
];

let meinObjekt = {
    name: "Max",
    vorname: "Mustermann",
    alter: 26
};


console.log(`------Array und Objekt ausgeben`);
console.log(meinArray);
console.log(meinObjekt);

// for-in gibz die Eigenschaften wieder, aber nicht ihre Werte
console.log("------for-in | Array")
for(let e in meinArray){
    console.log(e);
}

console.log("");

console.log("------for-in | Objekt")
for(let e in meinObjekt){
    console.log(e);
}

console.log("------for-in | Objekt, ausgabe Eigenschaften (mit Werten)")
for(let e in meinObjekt){
    console.log(e);
    console.log(meinObjekt[e]);   // So bitte nicht | Eine Möglichkeit die Werte der Eigenschaften in einem Ojekt auszugeben.
    console.log("---")              // Nicht die beste Möglichkeit
}
console.log("------ende for in Objekt")


console.log("");
// for of gibt die Werte der Eigenschaften aus, bei Iteralen.
// for-of Schleife geht nicht, da nur iterable funktionieren | (nicht für objekte) | 
    // keine Kompizierteren Eigenschaften der Iteration ohne zusätzliche Logic
console.log("------for-of")

for(let w of meinArray){
    console.log(w);
}

// Geht nicht, da einfache Ojekte nicht iterierbar sind
// for(let w of meinObjekt){
//     console.log(w);
// }
