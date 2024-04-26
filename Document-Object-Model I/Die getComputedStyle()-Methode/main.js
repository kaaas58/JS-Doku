"use strict";

let jumbo = document.querySelector(".jumbotron");
// wird nicht in Bindestrich-Schreibweisse wie in css angegeben,
    // sondern im camelCase.
let jumbo_style = getComputedStyle(jumbo);
console.log(jumbo_style);

console.log(jumbo_style.color);
// Hat mit Zoom zu tun
console.log(jumbo_style.width); 
console.log(jumbo_style.backgroundColor); 
console.log(jumbo_style.fontFamily);
// ist nichts gesetzt, wird der default zurückgegeben. 
console.log(jumbo_style.animation); 
