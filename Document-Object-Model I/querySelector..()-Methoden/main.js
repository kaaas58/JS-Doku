"use strict";


// ----------------------------------------Element mit CSS-Selektor ausgeben

// frei und komplex, gibt nur dass erst, (ein Element) zurück
let qs_1 = document.querySelector("body > #navigation > ul");
console.log(qs_1);

let qs_2 = document.querySelector(".jumbotron");
console.log(qs_2);

let qs_3 = document.querySelector(".test");
console.log(qs_3);

// let qs_4 = document.querySelector("%kjl§");



// ----------------------------------------Elemente mit CSS-Selektor ausgeben

// liefert (alle) zutreffenden Elemente in notlist zurück, ahnlich Array.
let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(qsa_1);

let qsa_2 = document.querySelectorAll(".test");
console.log(qsa_2);
// console.log(qsa_2.length == 0);

// let qsa_3 = document.querySelectorAll("%$§§");
// console.log(qsa_3);
