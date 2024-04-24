"use strict";

let ete = "etepetete"
let essen = "Blattgold";

// switch vergleicht einen Wert strikt mit verschiedenen Anderen | vergleichen und klaarer lesbar, schneller
// Mehrere switches gemischt, Konkatiniereung, TemplateStrings
switch (essen){
    case "Nudeln":
    case "Bonbons":
    case "Kaugummi":
    case "Äpfel":
    case "Hustensaft":
        console.log(essen + ", Das mag ich!");
        break;
    case "Kohl":
    case "Muscheln":
    case "Mais":
    case "Tortelini":
    case "Erbsen":
        console.log(`Ich mag ${essen} nicht!`);
        break;
    case "Pizza":
    case "Steak":
        console.log(`oh ja, ${essen} ist geilo ;-)`);
        break;
    case "Hummer":
    case "Schnecken":
        console.log(`Sorry aber ${essen} ist gar nicht mein Ding!`);
        break;
    case "Kaviar":
    case "Blattgold":
        console.log(essen + " halte ich für Überteuert und " + ete + " !");
        break;
    default:
        console.log(`Ich kenne "${essen}" nicht! Was ist das ?`)
}