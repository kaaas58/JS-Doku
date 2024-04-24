"use strict";

// let obst = [
//     "Apfel",
//     "Birnen",
//     "Bananen"
// ];

// let gemuese = [
//     "Möhren",
//     "Sellerie",
//     "Kohl"
// ];

// let brot = [
//     "Graubrot",
//     "Schwarzbrot",
//     "Vollkornbrot"
// ];

// let waren = [
//     obst, gemuese, brot
// ];


let waren = [
    [
        "Apfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie", 
        "Kohl"
    ],
    [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ]
];

// Ganzes Array ausgeben, mit beinhalteten Arrays
console.log("---Alle Arrays mit unterArrays, da das äußerste angesprochen wird");
console.log(waren);



// Jedes Array in dem Array waren einzeln ausgeben
console.log("---Jedes Array einzeln und komplet");
console.log(waren[0]);
console.log(waren[1]);
console.log(waren[2]);



// jedes Array in dem Array waren ausgeben und hier jeden Wert.
console.log("---Array: 1 an Index: 0");
console.log(waren[0][0]);
console.log(waren[0][1]);
console.log(waren[0][2]);

console.log("---Array: 2 an Index: 1");
console.log(waren[1][0]);
console.log(waren[1][1]);
console.log(waren[1][2]);

console.log("---Array: 3 an Index: 2");
console.log(waren[2][0]);
console.log(waren[2][1]);
console.log(waren[2][2]);



