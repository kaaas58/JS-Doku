"use strict";

// Problem
console.log(99.93 + 354.97);

// Problem umgangen
console.log((99.93 * 100 + 354.97 * 100) / 100);

// Mit 2 Kommastelllen | toFixed => leider als String in der Rückgabe.
console.log(((99.93 * 100 + 354.97 * 100) / 100).toFixed(2));


// console.log(9332654729891549);