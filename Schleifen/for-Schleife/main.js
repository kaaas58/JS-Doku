"use strict";

let x = 0;              // Zählvariable

while (x < 5){          // Bedingung
    console.log(x);     // Code
    x++;                // Anweisung für die Zählvariable
}




// for (Zählvariable; Bedingung; Anweisung für Zählvariable) {
        // Code
// }

console.log("---vor der Schleife");

for (let i = 0; i < 5; i++){
    if (i == 3){
        console.log("");    // Ohne den Log, keine Leerzeile und trozdem Sprung in Schleiofenkopf.
        continue;           
    }
    else if(i == 4){
        console.log(i);     // Ohne den Log zeigt er die 4 nicht an und verlässt di eSchleife. Und weiter im Code.
        break;
    }
    console.log(i);
}

console.log("nach der Schleife");
