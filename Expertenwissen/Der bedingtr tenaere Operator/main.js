"use strict";

// Synta: Bedingung ? Ausdruck_1 : Ausdruck_2

// if (Bedingung){
//     Ausdruck_1;
// }else{
//     Ausdruck_2;
// }

let meine_zahl = 10;

// if(meine_zahl > 10){
//     console.log("Größer als 10!");
// }else{
//     console.log("Kleiner als");
// }

console.log(meine_zahl <=9 ? "10 oder größer" : "Kleiner als 10");

// -------------------------------------

let geschlecht = 1;

// if (geschlecht){
//     console.log("Hallo Frau Mustermann !");
// }else{
//     console.log("Hallo Herr Mustermann");
// }

console.log(`Hallo, ${geschlecht ? "Frau" : "Herr"} Mustermann !`);

// -----------------------------------------

let fuehrerschein = true;

// const fuehrerschein_kontrolle = function(){
//     if(fuehrerschein){
//         return "Darf Auto fahren !";
//     }else{
//         return "Darf nicht Auto fahren !";
//     }
// };

const fuehrerschein_kontrolle = function(){
    return fuehrerschein ? "Darf Auto fahren" : "Darf noch nicht Auto fahren";
}

console.log(fuehrerschein_kontrolle());


let erdbeschleunigung = 5.2;
let panik = false;
erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung = 9.81);
console.log(erdbeschleunigung);
console.log("panik = " + panik);


let farbe = "rot";

// if (farbe === "rot"){
//     console.log("Ich mag rot.");
// }else if(farbe === "blau"){
//     console.log("Ich mag blau.");
// }else if(farbe === "grün"){
//     console.log("Ich mag grün.");
// }else{
//     console.log(`Ich habew zu ${farbe} keine Meinung !`);
// }

console.log(farbe === "rot" ? "Ich mag rot!" : farbe === "grün" ? "grün mag ich nicht!" : farbe === "blau" ? "blau mag ich!" : `Ich kenne ${farbe} nicht !`);