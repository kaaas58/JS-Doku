"use strict";

// call-by-value | ruft nur den Wert auf nicht die Variable
let meineVariable = "Lukas";
// call-by-reference
let meinObjekt = {
    zahl: 5000
};

// Es wird nicht die Variable ,,meineVariable übergeben, nur ihr Wert. Hat keine Auswirkung auf die uhrsprüngliche Variable
const meineFunktion = function(v, o){
    v ="Dennis";
    // o wird als Objekt übergeben und die Eigenschaft zahl verändert. Also sozusagen mit Rückverweis
    o.zahl = 2500;
    // kann man nur in der Funktion ausgeben
    console.log(v, o.zahl); 
};

meineFunktion(meineVariable, meinObjekt);

console.log(meineVariable);
console.log(meinObjekt.zahl);
console.log("");        //Absatz


// call-by-value (dt.:übergabe als Wert): gilt für primitive Datentypen (String, Number, Boolean)
// call-by-reference (dt.:übergabe als Verweis/Rückverweis): gilt für komplexe Datentypen (Objekte, Funktionen, Arrays)





let konto = {
    iban: "DE1025454",
    bic: "1025454",
    kontostand: 5000,
    inhaber: {
        vorname: "Max",
        nachname: "Schmidt",
        geschlecht: "männlich",
        alter: 33
    },
    aktiv: true
};

console.log(konto);


                // const geldEinzahlen = function(k){
                //     k.kontostand = k.kontostand+1000; // Alternativ | k.kontostand += 1000;
                //     // console.log(konto);
                // };

const geldEinzahlen = function(k, e){
    k.kontostand += e;
};

geldEinzahlen(konto, 1000);
console.log(konto);

const geldAbheben = function(k, e){
    k.kontostand -= e; // Alernativ | k.kontostand = k.kontostand + e; 
    // console.log(konto);
};

geldAbheben(konto, 3500);
console.log(konto);

