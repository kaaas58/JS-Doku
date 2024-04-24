"use strict";


let s = " Lorem ipsum dolor sit amet ipsum. ";

console.log(s.length);

// Gibt den Index an nach dem unser Wort anfängt, also eine Stelle vor unserem Wert.
    // Zweiter parameter gibt Startindex an.
console.log(s.indexOf("ipsum", 20));
// Beginnt von hinten zu suchen, gibt aber die Index von vorne geäzhlt wieder, den letzten Index bevor unser String beginnt.
console.log(s.lastIndexOf("ipsum"));
// Prüft nur ob wert vorhanden ist und gibt boolean zurück.
console.log(s.includes("sit"));
// Alles mit toLowerCase oder toUpperCase | in Große oder Klein Buchstaben konvertieren. (FullCaps)
console.log(s.toLowerCase());
console.log(s.toUpperCase());
// Cutted Anfangs,- und Endleerzeichen weg.
console.log(s.trim());
console.log(s.repeat(5));

// ------------------------------------------------- (regex)
console.log("");
// Regex werden in Slash(es) angegeben.
// Bsp. Regular Expressions  (d\w{4})  (regex 101) in Web).
let regex = /i\w{4}/g; // zeigt auf (ipsum). 
// Mit g nach dem slash.
    // (sucht, plaziert und matcht) global. Also im ganzen String, ohne (g) nur den ersten Treffer.

// Bei .search() gibt kein Startindex
console.log(s.search(regex)); // Vorher "ipsum", jetzt mit Variable regex ausgetauscht.
// replaziert das erste gefundene Wort.
console.log(s.replace(regex, "opsum")); // Vorher "ipsum", jetzt mit Variable regex ausgetauscht.
console.log(s.match(regex)); // Vorher "ipsum", jetzt mit Variable regex ausgetauscht.

// regex kann über Variable oder direkt in Methode definiert werden.