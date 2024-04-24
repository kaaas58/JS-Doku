"use strict";

// key-value | Schlüssel-Wert-Paarung | Eigenschaft-Wert zuordnung
// Wenn man ein Array in der Map öffnet sieht mann die key value Paare
// Man kann alles mit allem mapen
// Eher wie Objekte

let meineMap = new Map();

meineMap.set("Test", "Wert zur Eigenschaft Test");
meineMap.set(13, "Wert zur Eigenschaft 13");
meineMap.set(15, []);
meineMap.set("Versuch", function() {});
meineMap.set([], "Wert zur Eigenschaft Array");
meineMap.set(function() {}, "Wert zur Eigenschaft Funktion");
meineMap.set({}, "Wert zur Eigenschaft {}");

console.log(meineMap);


console.log(meineMap.get("Test"));
console.log(meineMap.get(13));
console.log(meineMap.get(15));
console.log(meineMap.get("Versuch"));
console.log(meineMap.get([]));
console.log(meineMap.get(function() {}));
console.log(meineMap.get({}));

console.log(meineMap.has(13));
console.log(meineMap.has(15));
console.log(meineMap.has([]));

// meineMap.delete("Test");
// meineMap.clear();
console.log("");
console.log("Size: " + meineMap.size);
console.log(meineMap);