"use strict";

// --------------------------------------- Zeigt alle Funktione von (Math) an.
console.log(Math);

// Kreisfläche berechnen mit Radius
// A = PI * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);

// ------------------------------------------------------ Runden

let aGerundet = Math.round(a);
console.log(aGerundet);

let aAbgerundet = Math.floor(a);
console.log(aAbgerundet);

let aAufgerundet = Math.ceil(a);
console.log(aAufgerundet);


console.log("");// ----------------------------------- Nachkommastellen

// Gennerelle Funktion, gehört nicht zu (Math).
// Wandelt zu String. Weiterrechnen schweer.
// Anstadt rechnen kann Konkatinierung passieren. (Aufpassen)
// Hier hilft die StandartMethode. Kann ohne Punktnotation aufgerufen werden und somit nicht direkt auf eine Variable.
let aNachkommastellen = a.toFixed(2);
console.log(aNachkommastellen);

console.log("");// ------------------------------- parseInt / paseFloat

// Ist danach wieder eine number, allerdings, da als Integer geparsed wird, wird hier gerundt. Die Kommastellen werden abgeschnitten.
let aInteger = parseInt(aNachkommastellen);
console.log(aInteger);

let aFloat = parseFloat(aNachkommastellen);
console.log(aFloat);
