"use strict";

let meineMap = new Map();

meineMap.set("Test", "Wert zur Eigenschaft Test");
meineMap.set(13, "Wert zur Eigenschaft 13");
meineMap.set([], "Wert zur Eigenschaft Test");
meineMap.set(function() {}, "Wert zur Eigenschaft function() {}");
meineMap.set({}, "Wert zur Eigenschaft {}");

console.log("-----------------------------------Map ausgeben----------------------------------");
console.log(meineMap);

//---------------------------------------------------------------------------------

let meinSet = new Set();
meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});

console.log("");
console.log("-------------------------------------Set ausgeben---------------------------------");
console.log(meinSet);

// Map mit forEach ausgeben, als Bsp. (mit Beschriftungsstring).
console.log("")
console.log("-----------------------------Map mit forEach ausgeben-----------------------------")
meineMap.forEach(function(wert, eigenschaft, map){
    console.log("Eigenschaft: " + eigenschaft);
    console.log(wert);
    console.log("");
    // console.log(map);
});

// Set mit forEach ausgeben.
console.log("")
console.log("-----------------------------Set mit forEach ausgeben-----------------------------")
meinSet.forEach(function(e, Null, set){
    console.log(e);
    // console.log(set);
});

console.log("");
console.log("-------------Map paare (Eigenschaften und Werte) in Arrays ausgeben-------------");
for(let paar of meineMap){
    console.log(paar);
}
//[Eigenschaft, Wert]
console.log("");
console.log("----------------Map Eigenschaften und Werte aus den Arrays ausgeben---------------");
for(let [eigenschaft, wert] of meineMap){
    console.log(eigenschaft);
    console.log(wert);
    console.log("");
    
    
}

console.log("---------------------------------Werte aus Set ausgeben----------------------------");
for(let wert of meinSet){
    console.log(wert);
    // console.log(meinSet);
}