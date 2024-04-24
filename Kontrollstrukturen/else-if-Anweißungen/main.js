"use strict";


// if(Bedingung1) {
//     Code der ausgeführt, wird wenn due Bedingung1 erfüllt (true) ist
// } else if (Bedingung2) {
//     Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
// } else if (Bedingung3) {
//     Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
// } else {
//     coder der ausgeführt wird, wenn die / keine Besibngung nicht erfüllt (false) ist
// }

const minAlter = 18;
let benutzerAlter = 17;

// if (benutzerAlter >= minAlter) {
   
//     if(benutzerAlter == minAlter){
//         console.log("Gerade 18, herzlichen Glückwunsch");
//     } else{
//         console.log("Du bist alt genug");
//     }
//  } else{
//      console.log("Du bist zu jung");
//     }


    if(benutzerAlter == minAlter){
        console.log("Du bist genau 18")
    }else if(benutzerAlter>minAlter){
        console.log("Du bist alt genug")
    }else{
        console.log("Du bist zu jung")
    }