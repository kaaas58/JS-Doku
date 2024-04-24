"use strict";
// Callback | Funktionen in Funktionen



// Mit angelegter Funktion

// let funktion1 = function(){
//     console.log("Ich bin Funktion 1");
// };

let funktion2 = function(f){
    console.log("Ich bin Funktion 2")
    f();
};

// funktion2(funktion1);




// Mit direkt definierter Funktion
funktion2(function(){
    console.log("Ich bin Funktion 2 !");
});






































