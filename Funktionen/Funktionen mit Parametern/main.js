"use strict";

// const meineFunktion = function(paramter1, parameter2){
//     auszuführender code
// };

// meineFunktion(p1, p2);

const logDieZahle = function(a){
    console.log(a)
};

logDieZahle(42);


// const begruessung = function(vorname, nachname){
    //     console.log(`Hallo, ${vorname} ${nachname}!`)
    // };
    

// Parameter in der Funktionsübergabe und in der Funktion müssen nicht
// so heissen wie in den Variablen
    const begruessung = function(x, y){
        console.log(`Hallo, ${x} ${y}!`)
    };

let vorname = "Lukas";
let nachname = "Trapp";

// Wir können Werte direkt herein geben oder als Variablen.
begruessung(vorname, nachname);
begruessung("Lukas", "Trapp");

let z1 = 23;
let z2 = 54;
let z3 = 99;
let z4 = 77;
let z5 = 5;

const rechnungen = function(x, y){
    console.log("Addition " + (x+y));
    console.log("Subtraction: " + (x-y));
    console.log("Multipikation " + (x*y));
    console.log("Diffision " + (x/y));
    console.log("Modulo " + (x%y));
};
const rechnungen2 = function(x, y){
    console.log(x+y);
    console.log(x-y);
    console.log(x*y);
    console.log(x/y);
    console.log(x%y);
};

console.log("-----------")
rechnungen(z1, z2);

rechnungen2(z1, z5);
console.log("----")
rechnungen2(z4, z2);
console.log("----")
rechnungen2(z3, z2);
console.log("----")
rechnungen2(z5, z2);
console.log("----")
rechnungen2(z5, z5);
// console.log("-----------")
// rechnungen1(zahl1, zahl2);

