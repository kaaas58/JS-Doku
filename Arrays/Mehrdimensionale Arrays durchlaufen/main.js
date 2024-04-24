"use strict";




// Über mehrdimensionales Array iterieren.
let waren = [
    [
        "Apfel",
        "Birnen",
        "Bananen",
        "Mango",
        "Kiwi"
    ],
    [
        "Möhren",
        "Sellerie", 
        "Kohl"
    ],
    [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot",
        "Wurzelbrot"
    ]
];1

//Arrays in waren ausgeben.
for(let i = 0; i < waren.length; i++){
    console.log(waren[i]);
}

console.log("");



// Elemente aus Array waren je Array ausgeben
for(let i = 0; i < waren.length; i++){

    for(let j = 0; j < waren[i].length; j++){
        console.log(waren[i][j]);
    }
    console.log("");   // Optischer Absatz
}

console.log("Array komplett durchlaufen !")





































