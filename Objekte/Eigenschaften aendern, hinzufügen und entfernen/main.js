"use strict";

let auto = {
    marke: "BMW"
};

// Eigenschaften ändern
auto.marke = "Tesla";

// Eigenschaften hinzufügen mit (Dot-Notation) und (Bricket-Notation)
auto.modell = "Model3";
auto.ps = "450";
auto["farbe"] = "rot";

//Eigenschaften enntfernen mit (Dot-Notation) und (Bricket-Notation)
delete auto.farbe;
delete auto["ps"];

console.log(auto);