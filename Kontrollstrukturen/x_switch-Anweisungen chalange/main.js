"use strict";

// Aufgabe, von if in switch migrieren
// switch vergleicht einen Wert strikt mit verschiedenen Anderen | vergleichen und klaarer lesbar, schneller
let produkt = "Karotte";

if (produkt === "Brot"){
    console.log("1,89€");
}else if(produkt === "Milch"){
    console.log("0,79€");
}else if(produkt === "Schokolade" || produkt === "Chips"){
    console.log("0,99€");
}else if(produkt === "Apfel"){
    console.log("0,60€");
}else{
    console.log(`Ich kann das Produkt: ${produkt} nicht finden.`)
}

// switch Übersetzung
console.log("                 < switch >")
switch (produkt){
    case "Brot":
        console.log("1,89€");
        break;
    case "Milch":
    case "Apfel":
        console.log("0,79€");
        break;
    case "Schokolade":
    case "Chips":
        console.log("0,99€");
        break;
    default:
        console.log("Ich konnte das Produkt: " + produkt + " nicht gefunden.");
        console.log(`Vielleicht findest du ${produkt} im Laden nebenan....`);
}