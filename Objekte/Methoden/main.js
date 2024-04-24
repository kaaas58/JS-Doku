"use strict";

// //-------------------------------------------
// let konto = {
//     iban: "DE1025454",
//     bic: "1025454",
//     inhaber: {
//         vorname: "Max",
//         nachname: "Schmidt",
//         geschlecht: "männlich",
//         alter: 33
//     },
//     kontostand: 5000,
//     aktiv: true,
//     einzahlen: function(k, e){
//         k.kontostand += e;
//     },
//     abheben: function(k, a){
//         k.kontostand -= a;
//     },
// };


// let konto2 = {
//     iban: "DE1025454",
//     bic: "1025454",
//     inhaber: {
//         vorname: "Max",
//         nachname: "Schmidt",
//         geschlecht: "männlich",
//         alter: 33
//     },
//     kontostand: 9000,
//     aktiv: true
    
// };

// //Mit Methode aus Konto auf Konto 2 eingezahlt. Das ist kein guter 
// //Code. besser wir nutzen Methoden mit this.
// konto.einzahlen(konto2, 500);
// console.log(konto2.kontostand);
// //----------------------------------------------------


//-------------------------------------------
// this.
let konto = {
    iban: "DE1025454",
    bic: "1025454",
    inhaber: {
        vorname: "Max",
        nachname: "Schmidt",
        geschlecht: "männlich",
        alter: 33
    },
    kontostand: 5000,
    aktiv: true,
    einzahlen: function(e){
        this.kontostand += e;
    },
    abheben: function(a){
        this.kontostand -= a;
    },
};

konto.einzahlen(500);
console.log(konto.kontostand);
konto.abheben(3500),
console.log(konto.kontostand);

console.log("");


// kürzer
let konto2 = {
    iban: "DE1025454",
    bic: "1025454",
    inhaber: {
        vorname: "Max",
        nachname: "Schmidt",
        geschlecht: "männlich",
        alter: 33
    },
    kontostand: 5000,
    aktiv: true,
    einzahlen(e){
        this.kontostand += e;
    },
    abheben(a){
        this.kontostand -= a;
    },
};


console.log(konto2.kontostand);
konto2.einzahlen(500);
console.log(konto2.kontostand);
konto2.abheben(3500),
console.log(konto2.kontostand);


//------------------------------------

// Objekt mit Methode

let person = {
    vorname: "Maximilian",
    nachname: "Msterfutzi",
    alter: 18,
    verarbeiten() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter})`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    }
};

console.log(person.verarbeiten());