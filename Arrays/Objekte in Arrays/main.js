"use strict";

// Objekte in Arrays

// let auto1 = {
//     marke: "Hyndai",
//     modell: "i30 N",
//     farbe: "rot"
// };

// let auto2 = {
//     marke: "Ford",
//     modell: "Fiesta ST",
//     farbe: "schwarz"
// };

// let auto3 = {
//     marke: "VW",
//     modell: "Golf GTI",
//     farbe: "blau"
// };

// let autos = [
//     auto1,
//     auto2,
//     auto3
// ];

// console.log(autos);
// console.log(autos[2]);




// Objekte in Arrays
// Kompakter und direkt eingebunden
let autos =[
    {
        marke: "Hyndai",
        modell: "i30 N",
        farbe: "rot"
    },
    {
        marke: "ford",
        modell: "Diesta ST",
        farbe: "schwarz"
    },
    {
        marke: "VW",
        modell: "Golf GTI",
        farbe: "blau"
    }
];

// Geammtes Array ausgeben und somit alle Objekte
console.log("------Alle objekte aus Array ausgeben");
console.log(autos);

// jedes Objekt aus dem Array Autos einzeln Ausgeben
console.log("------Objekte aus Array ausgeben");
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

// Ausgabe mit Dot-Notation
console.log("------Auto 1 an Index 0 | Dot-Notation")
console.log(autos[0].marke);
console.log(autos[0].modell);
console.log(autos[0].farbe);

console.log("------Auto 1 an Index 0")
console.log(autos[1].marke);
console.log(autos[1].modell);
console.log(autos[1].farbe);


// Ausgabe mit Bricket-Notation
console.log("------Auto 1 an Index 0 | Bricket-Notation") 
console.log(autos[2]["marke"]);
console.log(autos[2]["modell"]);
console.log(autos[2]["farbe"]);




// Arrays im Objekt, Vorlage
// let waren = [
//     [
//         "Apfel",
//         "Birnen",
//         "Bananen"
//     ],
//     [
//         "Möhren",
//         "Sellerie", 
//         "Kohl"
//     ],
//     [
//         "Graubrot", 
//         "Schwarzbrot", 
//         "Vollkornbrot"
//     ]
// ];

// Arrays im Objekt umgesetzt

let waren ={
    obst: [   
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ],
    gemuese: [
        "Möhren",
        "Sellerie", 
        "Kohl"
    ],
    brot: [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ]
};

// Ganzes Objekt mit allen Arrays
console.log("");
console.log(waren);

// Aus dem Objekt waren das Array Obst
console.log("");
console.log(waren.obst);

// Aus dem Objekt waren das Array Gemüse
console.log("");
console.log(waren.gemuese);

// Aus dem Objekt waren das Array Brot
console.log("");
console.log(waren["brot"]);


console.log("");
// Aus dem Objekt, aus dem Array Obst, Obst an IndexStelle 1, 2, 3.
console.log("------Objekt/Array/Index | waren.obst[ ]");
console.log(waren.obst[0]);
console.log(waren.obst[1]);
console.log(waren.obst[2]);

console.log("");
console.log("------Objekt/Array/Index | waren.gemuese[ ]");
console.log(waren.gemuese[0]);
console.log(waren.gemuese[1]);
console.log(waren.gemuese[2]);

console.log("");
console.log("------Objekt/Array/Index | waren.brot[ ]");
console.log(waren.brot[0]);
console.log(waren.brot[1]);
console.log(waren.brot[2]);


















