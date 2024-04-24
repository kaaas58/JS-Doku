"use strict";

// const addieren = function(x, y){
//     console.log("Additionn " + (x+y))
// }

// addieren(5, 3);


// Default wert in der Übergabe, wird ersetzt wenn der Parameter überschrieben, eingesetzt wird.
const multiplizieren = function(a, b=10){
    console.log(a)
    console.log(b)
    console.log("Multiolikation: " + a*b);
};

let z1 = 42;
let z2 = 20;

multiplizieren(z1, z2);

console.log("");

// erste Variante
console.log("-------1.Variante")

let vor = "Lukas";
let nach = "Trapp";
let alter = 35;

const begruessung = function(a="Max", b="Mustermann", c=18){
    console.log(`Template...Hallo ${a} ${b}, du bist ${c} Jahre alt.`);
    console.log("konkatiniert...Hallo " + a + " " + b + ", du bist " + c + " alt.");
}

console.log("---eingesetzt");
begruessung(vor, nach, alter);
console.log("---default");
begruessung();
console.log("")
console.log("---mixed default mit undefined")
begruessung( undefined, nach, alter);
begruessung(undefined, undefined, 40);
begruessung(vor, undefined, undefined);


// zweite Variante
console.log("");
console.log("------2.Variante")

let vorname = "Lukas2";
let nachname = "Trapp2";
let alter2 = 36;

const begruessung2 = function(vorname="Max", nachname="Mustermann", alter2=18){
    console.log(`Template...Hallo ${vorname} ${nachname}, du bist ${alter2} Jahre alt.`);
    console.log("konkatiniert...Hallo " + vorname + " " + nachname + ", du bist " + alter2 + " alt.");
}

console.log("---eingesetzt");
begruessung2(vorname, nachname, alter2);
console.log("---default");
begruessung2();
begruessung2( undefined, nachname, alter2);
