"use strict";

// while (Bedingung){
//    ...
// }


let x = 0; // <-- Zählervariable

while (x <= 5){
    console.log(`While: ${x}`);
    x++;
}

console.log("");





let y = 0;

while (y >= 0 && y <= 100) {
    console.log("Test " + y);
    y++;
}

console.log("");





let z = 0;

while (z < 10){
    z++;
    if(z == 5){             // wenn 5 getroffen wird
        console.log("");        //log leer und an Anfang der Schleife | Nächster Durchgang
        continue;
    }else if(z == 7){       // Oder wenn 7 getroffen wird, abbrechen und nach der while Schleife im Code weiter ...        
        break;
    }
    console.log(z);
}

console.log("Schleife beendet, 7 hat angeschlagen");

