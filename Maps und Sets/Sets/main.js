"use strict";

// Speichern eindeutige Werte
// Eher wie Array, Es darf/kann keine Redundanz im Set sein.
// Hinzufügen nicht mit set, sondern mit add
// Kein key-value -> nur value !
let meinSet = new Set();
meinSet.add("Test");
meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});
meinSet.add({});

// ein leeres Objekt ist nicht dass geliche wie ein leeres Objekt, darunter fallen Arrays
    // Funktionen, fast alles bis auf primitive Datentypen... würde bei gleich doppelt aufgenommen werden.

console.log(meinSet);
console.log("size: " + meinSet.size);

console.log(meinSet.has("Test"));
console.log(meinSet.has("Bsp"));
console.log(meinSet.has({})); // flase weil zwei objekte niemals gleich sind, außer es ist dass selbe.. nicht dass gleiche
console.log(meinSet.has(9 + 4));

// meinSet.delete("Test");
// meinSet.clear();

// add, delite, clear, etc.