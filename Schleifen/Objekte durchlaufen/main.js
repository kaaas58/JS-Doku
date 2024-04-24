"use strict";

let meinObjekt = {
    vorname: "Max",
    name: "Mustermann",
    alter: 26
};

// So bitte nicht! (Objekt mit (for-in)) gibt teilweisse auch geerbte eigenschaften aus

// for(let e in meinObjekt){
    // console.log(meinObjekt[e]);
// }


// Object.entries (erzeugt 3 Arrays (je ein unterArray))  (ein zweidimensionales Array). 
    // Gibt gesamtes Objekt = 3 Arrays mit je einem unterArray (mit den Schlüssel-Wertpaaren) zurück.
console.log("------Gibt das Objekt als Array mit den 3 geschachtelten Arrays zurück");
let paare = Object.entries(meinObjekt);
console.log(paare);


// for-of Schleife
// Erste for-Schleife iteriert über die 3 nun forhandenen äußeren Arrays der Variable (paare) aus Object.entries 
    // und gibt jedes als verschachteltes/unter Array aus.
    // Die zweite for-Schleife gibt bei jedem durchlauf die Schlüsselwertpaare aus
console.log("");
console.log(`-------Verschachtelte for-of-Schleife gibt 3 Arrays mit den Schlüssel-Wertpaaren aus
        in zweiter Ebene/for-Schleife, die Schlüssel-Wertpaare an sich, ohne Array.`);
for(let paar of paare){
    console.log(paar);
    for(let e of paar){
        console.log(e);
    }
}

// Object.keys gibt Eigenschaften/Schlüssel zurück
console.log("");
console.log("------Object.keys gibt Eigenschaften in einem Arrays zurück");
let eigenschaft = Object.keys(meinObjekt);
console.log(eigenschaft);


// Object.keys gibt die Werte/Values der Eigenschaften/Schlüssel in einem Array zurück.
console.log("");
console.log("------Object.values gibt die Werte der Eigenschaften in einem Arrays zurück.");
let werte = Object.values(meinObjekt);
console.log(werte);


// Gibt in jedem Durchlauf den (Wert) des (Elements/der Eigenschaft) aus.
for (let w of werte){
    console.log(w);
}


console.log("");
console.log("-------------------------------direkte Eingabe-------------------------------------");
console.log("");
// mit direkter Variable und Übergabe | Ohne extra Variable anlegen



// Object.entries (erzeugt 3 Arrays (je ein unterArray))  (ein zweidimensionales Array). 
    // Gibt gesamtes Objekt = 3 Arrays mit je einem unterArray (mit den Schlüssel-Wertpaaren) zurück.
    console.log("------Gibt das Objekt als Array mit den 3 geschachtelten Arrays zurück");
for(let paar of Object.entries(meinObjekt)){
    console.log(paar);
}


// Object.keys gibt Eigenschaften/Schlüssel zurück
console.log("");
console.log("------Object.keys gibt Eigenschaften in einem Arrays zurück");
for(let e of Object.keys(meinObjekt)){
    console.log(e);
}

// Object.keys gibt die Werte/Values der Eigenschaften/Schlüssel in einem Array zurück.
console.log("");
console.log("------Object.values gibt die Werte der Eigenschaften in einem Arrays zurück.");
for(let w of Object.values(meinObjekt)){
    console.log(w);
}
