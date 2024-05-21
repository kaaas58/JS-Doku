"use strict";

// Items im localStorage setzen
localStorage.setItem("name", "Ruben Winkler")
console.log(localStorage.getItem("name"));

// Items aus dem localStorage entfernen
localStorage.setItem("alter", "26");
localStorage.removeItem("alter");
// local storage leeren, säubern
// localStorage.clear();

// console.log(localStorage);


// Items in SessionStorrage setzen
sessionStorage.setItem("pass", "546546");

// Items aus dem SessionStorage entfernen
sessionStorage.setItem("farbe", "blau");
sessionStorage.removeItem("farbe");

//sessionStorage säubern

// sessionStorage.clear();
console.log(sessionStorage);