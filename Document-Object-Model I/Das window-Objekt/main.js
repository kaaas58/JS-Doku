"use strict";

console.log(window);
// Eigenschaften des Window-Objekts
// Man kann bei dem Window-Objekt das window weg lassen
// Also window.innerWidth => innerWidth

// Sichtbarer Bereich incl ScrollBar, nach resizen z.B. 
    // mit Maus ändert sich das logischer Weiße.
console.log(innerWidth);
console.log(innerHeight);

// // // // // // // // // // Outer inner vertauscht...FIXME // // // // // // // // //

// Bereich ganzes Browser Fenster
console.log("---");
console.log(outerWidth);
console.log(outerHeight);

// Gibt die Scrollposition des Fensters an, links oben => X, Y 0, 0.
    // Bewegungen Nutzer oder Fenster können getrackt werden.
console.log(scrollX);   // X Links = 0 / Rechts = (+) Bsp(121..) horizontal .
console.log(scrollY);   // Y Oben = 0 / Unten = (+) Bsp(123..) vertical .

// Für später im Kurs..
console.log(location);
console.log(localStorage);
console.log(sessionStorage);

// Methoden des window-Objekts
alert("ACHTUNG!");




// EXTRA FEHLER !!!
// Fjkljekljc fddsf dffds

// Inner und Outer Height ?