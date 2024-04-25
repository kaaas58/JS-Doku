"use strict";

// bezieht sich nur auf inline styles 
// Syntax: CamelCase => backgroundColor: red;
// Hirachie: css,inline,js
let jumbo = document.querySelector(".jumbotron");
// Das CSSStyleDeclaration-Objekt ausgeben
console.log(jumbo.style);
// Inline-Styles auslesen
console.log(jumbo.style.backgroundColor);
// Inline-Styles verändern
jumbo.style.backgroundColor = "blue";
jumbo.style.width = "900px";
jumbo.style.height = "800px";
jumbo.style.fontSize = "20px";