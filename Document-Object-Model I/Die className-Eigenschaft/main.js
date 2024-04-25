"use strict";

let jumbo = document.querySelector(".jumbotron");

let clases = jumbo.className;
console.log(clases);

jumbo.className = "meine-klasse";
jumbo.className += " lorem";
jumbo.className = jumbo.className.replace("meine", "deine");
jumbo.className = jumbo.className.replace(" lorem", "");

// Erstes Element auf leeren String gesetzt, drittem Element die Klasse active gegeben 
    // und somit dass grau ausgewählte element in Nav gegeben
document.querySelector("#navigation > ul > li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className = "active";
