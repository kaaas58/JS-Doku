"use strict";

//Objekt in Variable deklariert inh1, inh2
let inhaber1 = {
    name: "Max",
    nachname: "Muster",
    geschlecht: "männlich",
    alter: 26
};

let inhaber2 = {
    name: "Maria",
    nachname: "Brüttler",
    geschlecht: "weiblich",
    alter: 23
};

// let inan = "jkdkjkjlkjljk";
// let bic = "kjjlkjlk";
// let kontostand = 45465456;
// let aktiv = true;

//Inhaber direkt initialisieren | direkt verschachteltes Objekt.

//Inhaber übergeben über Variable | variaberl verschachteltes Objekt.


let konto1 = {
    iban: "DE1025454",
    bic: "1025454",
    kontostand: 545646,
    inhaber: {
        vorname: "Max",
        nachname: "Schmidt",
        geschlecht: "männlich",
        alter: 33
    },
    aktiv: true
};

let konto2 = {
    iban: "jkkjlkjl",
    bic: "jljklö",
    kontostand: 545646,
    inhaber: inhaber2,
    aktiv: true
};

// Werte im Bracket ausgeben
let wert1 = konto1["iban"];
console.log("Bracket " + wert1); 

let wert2 = konto1["inhaber"]["geschlecht"];
console.log(wert2);


//Werte setzen bzw. verändern (Bracket-Notation)

// Neuer wert gesetzt Br-Notation und ausgegeben
konto2["abhebelimit2"]=1000;
console.log(konto2["abhebelimit2"]);

// Wert verändern und außgeben
konto1["kontostand"] = 2500;
console.log(konto1["kontostand"]);


// Warum Bracket-Notation nutzen ?
console.log("----")
let eigenschaften = "iban";
let wert3 = konto1[eigenschaften];
console.log(wert3);
console.log("----")



// Objekt auto2 initialisieren, verschachtelt. Dannach edietieren und erweitern
 // anschließend außgeben.
let auto2 = {
    marke: "Audi",
    modell: "Quattro",
    kilometerstand: 15000,
    kraftstoffart: "diesel",
    ausstattung: {
        navi: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: false,
        panoramadach: false
    },
    zustand: "gut",
    preis: 4500
};


// Neuer Wert ps initialisieren in auto (Bricket-Notation)
auto2["ps"]=101;
// Modell und Marke neu zuweißen, überschreiben (Bricket-Notation).
auto2["modell"] = "i20";
auto2["marke"] = "Hyndai";

let eig = "ps";

// Mit console.log in Template string ausgeben in (Bricket-Notation).
    //["ps"] wird mit 101 initiallisiert, in der variable let eig gespeichert 
    //und dann im Template über ${auto2[eig]} aufgerufen (Zeile 97)
console.log(`Ein ${auto2["marke"]} ${auto2["modell"]} hat ${auto2[eig]} PS und wird mit `+
`${auto2["kraftstoffart"]} betrieben. Der Killometerstand steht momentan bei ${auto2["kilometerstand"]} Killometern.`);








