"use strict";

console.log(window);
// Eigenschaften des Window-Objekts
// Man kann bei dem Window-Objekt das window weg lassen
// Also window.innerWidth => innerWidth

// Sichtbarer Bereich incl ScrollBar, nach resizen z.B. 
    // mit Maus ändert sich das logischer Weiße.
console.log(innerWidth);
console.log(innerHeight);

// // // // // // //  inner outer ist von Zoom des innerObjektes abhängig // // // // // // // // //

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

// Wirft eine Popup mit Alarm, mit dem (String("  ")) und dem Button "OK".
alert("ACHTUNG!");

// Wirft ein Popup mit der Message (String("  ")) und den Buttons "OK", "Abdrechen".
confirm("Bist du dir sicher ?");

// Erzeugt einen Prompt "Wie geht es dir?" im Browser und 
    // speichert in der Variable (antwort), die Rückgabe aus dem Prompt.
let antwort = prompt("Wie geht es dir?");
console.log(antwort);




// --------------------------- Differenzierte Methoden / Befehle

// print();

// open("https://www.google.com");

// close("https://www.google.com");


// setTimeout(function(){
//     open("https://www.google.com");
// }, 4000);

// setTimeout(function(){
//     close();
// }, 8000);

let nav = dacument.document.querySelector("#navigation");
getComputedStyle(nav);

