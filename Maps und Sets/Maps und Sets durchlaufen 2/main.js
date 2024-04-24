"use strict";

let meineMap = new Map();

meineMap.set("Test", "Wert zur Eigenschaft Test");
meineMap.set(13, "Wert zur Eigenschaft 13");
meineMap.set([], "Wert zur Eigenschaft Test");
meineMap.set(function() {}, "Wert zur Eigenschaft function() {}");
meineMap.set({}, "Wert zur Eigenschaft {}");

console.log("-----------------------------------Map ausgeben-------------------------------------");
console.log(meineMap);

//---------------------------------------------------------------------------------

let meinSet = new Set();
meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});

console.log("");
console.log("-----------------------------------Set ausgeben------------------------------------");
console.log(meinSet);

//--------------------------------------------------Iteratoren !

// console.log("");
// console.log("-----------------------------------Iterator-Entries-----------------------------");
// console.log(meineMap.entries());

// console.log("");
// console.log("-----------------------------------Iterator-Values------------------------------");
// console.log(meineMap.values());

// console.log("");
// console.log("-------------------------------------Iterator-Keys------------------------------");
// console.log(meineMap.keys());



//---------------------------------------------Map-ausgeben-forEach, iterieren
console.log("");
console.log("-----------------------------Map-forEach Key-Value---------------------------------");
// (Key und Wert) könnten auch (Eigenschaft und Wert) heißen.
for(let [key, wert] of meineMap.entries()){
    console.log(key);
    console.log(wert);
    console.log("");
}


console.log("");
console.log("---------------------------------Map-forEach Keys----------------------------------");
for(let key of meineMap.keys()){
    console.log(key);
}

console.log("");
console.log("---------------------------------Map-forEach Values--------------------------------");
for(let wert of meineMap.values()){
    console.log(wert);
}

//-----------------------------------------------Set-ausgeben-forEach, iterieren

console.log("");
console.log("---------------------------------Set-forEach Values--------------------------------");
for(let value of meinSet.values()){
    console.log(value);
}