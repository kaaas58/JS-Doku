"use strict";

let nav = document.querySelector("#navigation");
// console.log(nav);

let id = nav.id;
// console.log(id);

// id geändert, der wirkende css teil geht nicht mehr, so kann z.B. man verschiedene designs laden
nav.id = "neue-id";

// id gecleart, das id Attribut bleibt vorhanden.
nav.id = "";