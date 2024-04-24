"use strict";

// Array durchsuchen Includes(); = vorhanden |
// indexOf(); = gibt Index von Element zurück |
// lasatIndexOf(); = gibt ersten treffe auf element von hinte zurück |

// Immer erster Treffe, wichtig da ein Wert mehrmals enthalten sein kann ....von vorne oder hinten.

let personen = [
    "Sebastian",
    "Marcel",
    "Martin",
    "Anna",
    "Dennis",
    "Marcel",
    "Mia"
];

// includes(): Durchsuchen des Arrays ab einem Startindex nach einem Wert und gibt true zurück, wenn das
    // Element gefunden wurde, bzw. false, wenn es niocht gefunden wurde
// Syntax: includes(Suchwert (, Startindex))  |  (Startindex) ist Optional
// Nicht destruktiv

console.log("------Includes Marcel");
console.log(personen.includes("Marcel"));
console.log(personen.includes("Marcel", 1));
console.log(personen.includes("Marcel", 2));
console.log(personen.includes("Dennis"));


// indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten fundstelle
    // zurück, wenn er Wert gefunden wurde, oder -1 wenn der Wert nicht im Array gefunden wurde.
// Syntax: indexOf(Suchwert(, Startindex))
// nicht destruktiv 
// gibt den Index wieder wo der Wert gefunden wurde, Optional kann ein Startindex angegeben werden.
console.log("------Index Of Marcel");
console.log(personen.indexOf("Marcel"));
console.log(personen.indexOf("Marcel", 1));
console.log(personen.indexOf("Marcel", 2));


// lastIndexOf(): Durchsucht ein Array ab einem bestimmten Startindex rückwärts nach einem, Wert und gibt den Index 
    // an der ersten fundstelle zuirück, wenn der Wert gefunden wurde. Anderen falls -1 wenn der Wert nicht Arreay gefunden wurde.
// Syntax: lastIndexOf(Suchwert(, Startindex))
// nicht destruktiv

console.log();
console.log("------last Index Of Marcel"); // Zwei Marcels
console.log(personen.lastIndexOf("Marcel"));
console.log(personen.lastIndexOf("Marcel", 4));

console.log("");
console.log(personen.lastIndexOf("Sebastian"));
console.log(personen.lastIndexOf("Sebastian", 1));

console.log("");
console.log(personen.lastIndexOf("Anna"));
console.log(personen.lastIndexOf("Anna", 1));
console.log(personen.lastIndexOf("Anna", 1));
