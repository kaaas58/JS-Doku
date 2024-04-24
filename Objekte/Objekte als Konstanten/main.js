"use strict";

// wir können ein konstantes Objekt erzeugen, die Eigenschaften sind veränderbar
const person = {
    vornamen: "Max",
    nachname: "Mustermann",
    alter:18
};

// Hinzufügen uind löschen
person.vornamen = "Peter";
person.haarfarbe = "Gelb";
delete person.haarfarbe;

console.log(person);
