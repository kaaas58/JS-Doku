"use strict";



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
    iban: "DE54546541321",
    bic: "545132855",
        inhaber: {
            vorname: "Maria",
            nachname: "Musterfrau",
            geschlecht: "weiblich",
            alter: 20
        },
    kontostand: 545646,
    aktiv: true
};


// Objekt mit Ausgabe
const kontostandAusgeben = function(konto){
    console.log(`
    ${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} Euro auf dem Konto.
    Hier ist die dazugehörige IBAN: ${konto.iban} und BIC: ${konto.bic}.`)
};

// Der Name ist egal, anstadt Konto geht auch x, y, z, k etc.
const namenLoeschen = function(k){
    delete k.inhaber, delete k.iban, delete k.bic, delete k.kontostand;
    console.log(konto1);
};

kontostandAusgeben(konto1);
console.log("");
kontostandAusgeben(konto2);

console.log("");
namenLoeschen(konto1);















