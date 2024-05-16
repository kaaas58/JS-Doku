"use strict";

// let konto = {
//     iban: "DE6206752564419854",
//     inhaber: ["Max Mustermann"],
//     saldo: 3500,
//     aktiv: true,
//     einzahlen(einzahlung) {
//         this.saldo += einzahlung;
//     },
//     abheben(auszahlung) {
//         this.saldo -= auszahlung;
//     },
//     kontostand_abfragen() {
//         return this.saldo;
//     }
// };

// console.log(konto);



// Instanz erstellen
let k = new Konto("DE6206752564419854", "Max Mustermann", 3500);
let kk = new Kiderkonto("DE6206752564559854", "Mona Mustermann", 250, 500);

// mit getter und setter, aber noch nicht geschützt.
// k.einzahlen = 1000;
// k.abheben = 500 ;
// console.log(k.kontostand_abfragen);

// mit normalen Methoden

k.einzahlen(1000);
k.abheben(500);
console.log(k.kontostand_abfragen());
console.log(k);

kk.abheben(760);
console.log(kk);

