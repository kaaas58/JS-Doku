"use strict";

// mousedown, mouseup, click, doubleclick, mouseover, mouseout

let jumbo = document.querySelector(".jumbotron");

// Normale Funktion / Callback
// jumbo.addEventListener("click", function(e){
//     console.log(e);
// });

// mit Arrow-Funktion
jumbo.addEventListener("click", e => {
    console.log("CLICK");
    console.log(e)
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target); //.remove() entfernt das target ,-)
});

jumbo.addEventListener("dblclick", e => {
    console.log("DBLCICK");
    console.log(e);
});

jumbo.addEventListener("mousedown", e => {
    console.log("MOUSEDOWN");
    console.log(e);
});

jumbo.addEventListener("mouseup", e => {
    console.log("MOUSEUP");
    console.log(e);
});

jumbo.addEventListener("mouseover", e => {
    console.log("MOUSEOVER");
    console.log(e);
});

jumbo.addEventListener("mouseout", e => {
    console.log("MOUSEOUT");
    console.log(e);
});