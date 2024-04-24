"use strict";

// if(Bedingung) {
//     Code der bei true ausgeführt wird
// } else {
//     Coder der ausgeführt wird wenn di ebedingug false ist
// }

// if (false){
//     console.log("if wurde ausgeführt")
// } else {
//     console.log("else wurde ausgeführt")
// }

// const minAlter = 18;
// let benutzerAlter = 14;

// if (benutzerAlter >= minAlter) {
//     console.log("Du bist alt genug")
// } else{
//     console.log("Du bist zu jung")
// }

const minAlter = 18;
let benutzerAlter = 19;

if (benutzerAlter >= minAlter) {
   
    if(benutzerAlter == minAlter){
        console.log("Gerade 18, herzlichen Glückwunsch");
    } else{
        console.log("Du bist alt genug");
    }
 } else{
        console.log("Du bist zu jung");
    }
