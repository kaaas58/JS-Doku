"use strict";

let d = new Date();
console.log(d);

console.log(Date.now());

let e = new Date(15464345424354);
console.log(e);

let f = new Date("May 10 2004 15:43:03 GMT+0200");
console.log(f);

// Jahr und Monat sind Vorraussetzung c| Monat Index = 0-11 !
// new Date(Jahr, Monats-index[, Tag[, Stunde[, Minute[, Sekunde[, Millisekunde]]]]])
let g = new Date(2012,4,23,12,12,15);
console.log(g);