"use strict";

//Objekt in Variable deklariert inh1, inh2
let inhaber1 = {
    name: "Max",
    nachname: "Muster",
    geschlecht: "männlich",
    alter: 26
};
console.log(inhaber1);

let inhaber2 = {
    name: "Maria",
    nachname: "Brüttler",
    geschlecht: "weiblich",
    alter: 23
};
console.log(inhaber2);

// let inan = "jkdkjkjlkjljk";
// let bic = "kjjlkjlk";
// let kontostand = 45465456;
// let aktiv = true;

//Inhaber direkt initialisieren | direkt verschachteltes Objekt.
let konto1 = {
    iban: "jkkjlkjl",
    bic: "jljklö",
    kontostand: 545646,
    inhaber: {
        vorname: "Max",
        nachname: "Schmidt",
        geschlecht: "männlich",
        alter: 33
    },
    aktiv: true
};
console.log(konto1);

//Inhaber übergeben über Variable | variaberl verschachteltes Objekt.
let konto2 = {
    iban: "jkkjlkjl",
    bic: "jljklö",
    kontostand: 545646,
    inhaber: inhaber2,
    aktiv: true
};
console.log(konto2);

let konto3 = {
    iban: "jkkjlkjl",
    bic: "jljklö",
    kontostand: 545646,
    inhaber: {
        vorname: "Petra",
        nachname: "Schmidt",
        geschlecht: "weiblich",
        alter: 33
    },
    aktiv: true
};
console.log(konto3);




// verschachteltes Objekt
let auto = {
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

console.log(auto);




















