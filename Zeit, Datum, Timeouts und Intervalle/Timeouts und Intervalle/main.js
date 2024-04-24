"use strict";

// Timeouts = setTimeout(callbach-funktion, zeitspanne[, parameter1, parameter2, parameterN])

// setTimeout setzt Zeitverzögerung
console.log("Los");
setTimeout(function(){
    console.log("Fertig!")
}, 4000);

// setTimeout(code-string, zeitspanne)

console.log("los");
setTimeout("console.log(\"fertig\");", 2000);

// clearTimeout(2);  // Entfernt Timeout mit Hoisting


//-----------------------------------------------
// Interval = setInterval(code-string, zeitspanne)

// Gängige Schreibweiße mit callback.Funktion
setInterval(function(){
    console.log("5 sec sind um: Interval");
}, 5000);

// aletrnative Screibweiße
setInterval("console.log(\"10 Sekunden sind um!\");",10000);

// Für clear muss man die ID herrausfinden, z.B. mit eienem console.log();
// clearInterval(3); // Wird im sinne von Hoisting angewendet, kann also unten 
// clearInterval(4);     // im Code stehen und hat trozdem auswirkungen auf obere Intervalle


