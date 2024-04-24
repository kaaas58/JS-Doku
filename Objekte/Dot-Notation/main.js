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

// Werte auslesen
// Refferenzieren uber Variable, dann ausgeben
let wert1 = konto1.iban;
let wert2 = konto1.bic;
let wert3 = konto1.inhaber.vorname;
let wert4 = konto1.inhaber.nachname;
console.log(wert1, wert2);
console.log();
console.log(wert3, wert4);
// Alternativ direkt ausgeben in console.log();
console.log("");
console.log(konto1.iban, konto1.bic);
console.log(konto1.inhaber.vorname, konto1.inhaber.nachname);


console.log();
console.log(`${konto1.inhaber.vorname} ${konto1.inhaber.nachname}`+
` vom Geschlecht ${konto1.inhaber.geschlecht} hat ${konto1.kontostand}`+
` auf seinem Konto.`);


// Eigenschaften setzen / neu setzen. (Dot-Notation)

// neu gesetzt und initiallisiert
konto1.abhebeLimit = 1000;
console.log(konto1);
console.log("Abhebelimit: " + konto1.abhebeLimit);

// Kontostand erneut zuweissen, überschreiben.
konto1.kontostand = 3000;
// Konkatinierte Ausgabe
console.log("Kontostand: " + konto1.kontostand);
// Same with Template
console.log(`Kontostand TemplateString: ${konto1.kontostand}`)

// geschachteltes Objekt 2 Ebenen
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

// neuie Eigenschaft setzen
auto2.ps=100;
// eigenschaften überschreiben, erneut zuweissen
auto2.modell="i20";
auto2.marke="Hyndai";

// Außgabe von Dot-Notation mit konkatinierten Templatestrings und Zeilenum,bruch.
console.log(`Ein ${auto2.marke} ${auto2.modell} hat ${auto2.ps} PS und wird mit `+
`${auto2.kraftstoffart} betrieben. Der Killometerstand steht momentan bei ${auto2.kilometerstand} .`);

