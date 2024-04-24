"use strict";

// hizufügen und entfernen

// push(zufügen hinten), pop() löschen letzte |

// unshift(vorne zuführen) Auf Index 0, shift() löschen erstes Element auf Index: 0.
    // verändert die Positon aller anderen Elemente

let personen =[
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

console.log(personen);
// Zweiten Wer geandert
personen[1]= "Pia";
console.log(personen[1]);
console.log(personen);

// push(): Fügt ein Element am Ende des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
// destruktiv, verändert Array
console.log("");
console.log("------Hier wird ein Wert mit push() hinten im Array angehängt.");
console.log(personen.push("Max"));
console.log(personen);

// pop(): Entfernt das letzte Element Aus dem Array (und gibt es (das Element) zurück)
// destruktiv
console.log("")
console.log("------Hier wird ein Wert, der letzte, aus dem Array mit pop() entfernt und ausgegeben")
console.log(personen.pop());
// Ganzes (neues) Array ausgeben
console.log(personen);




// unshift, Element forne im Array einfügen, (und  gibt die Länge des Arrays wird zurück).
// destuktiv
console.log("");
console.log("------Hier wird mit unsift() ein Wert forne ins Array gesteckt.");
console.log(personen.unshift("Maximilian")); 
console.log(personen);

// shift(): Entfernt das erst Element aus dem Array (und gibt es (das element) zurück.)
// destruktiv
console.log("");
console.log("------Hier wird mit shift() ein Wert vorne im Array hinzugefügt, (verändert alle anderen Positionen");
console.log(personen.shift());
console.log(personen);