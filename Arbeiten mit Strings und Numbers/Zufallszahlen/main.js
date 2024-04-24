"use strict";

// Im default = 0 bis 0.999999999999999
// Math.floor rundet ab. Math.random() erzeugt eine Zahl von 0 bis 0.9999999999 
    // Mal 12 währe 0 bis 11,9999999. Da wir eine Zahl zwischen 0 und 12 wollen
    // müssen wir die (12+1) angeben. Was 0 bis 12.999999999 produziert,
    // da wir aber mit Math.floor abgerundet haben, kommen wir zu dem gewünschtem
    // Ergebniss 0 bis 12.
console.log(Math.floor(Math.random()*(12+1)));


// Zwischen 2 Zahlen

let minimum = 30;
let maximum = 100;

// console.log(Math.floor(Math.random() *(maximum - minimum + 1) + minimum));

// In function() übergebene Parameter können heißen wie sie wollen
// Bei Funktionsaufruf muss die Reihenfolge passen wie rein gegeben wird.
const zufallszahl = function(min, max){
    return Math.floor(Math.random() *(max - min + 1) + min);
};

console.log(zufallszahl(minimum, maximum));

