"use strict";

// // Standart vergleicht anhand utf8, also als Strings
// let zahlen = [1, 20, 2000, 1000000, 50];
// let neuSortiert = zahlen.sort();
// console.log(neuSortiert);

// Für Strigs toll, ordnet Alphabetisch.
let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];
let worteNeu = worte.sort();
console.log(worteNeu);



let zahlen = [1, 20, 2000, 1000000, 50];
let neuSortiert = zahlen.sort(function(a, b){
   return a - b;    // a - b sortiert von klein nach groß (asc)
});                 // b - a sortiert von groß nach klein

console.log(neuSortiert);

// Die sort()-Methode für Arrays wandelt Elemente des Arrays standartmäßig in Strings um und vergleicht dieße.
// Für das sortieren von Zahlen-Arrays sollte deshalb rinr Vergleichsfunktion genutzt werden.
// Ist Rückgabewert der Vergleichsfunktion < 0, wird a auf einen niedrigeren Index als b gesetzt.
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt.
// Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist.
// return a - b sortiert in Aufsteigender (ASC/Ascending) Reihenfolge.
// return b - a sortiert in Absteigender (DESC/Descending) Reihenfolge.

