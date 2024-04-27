"use strict";

// Bei keydown und up wied bei z -> y zurückgegeben und anders herum, liegt am ebnglischer TastaturLayout.

// Bei keypress-Event -> (shift, cabsLook und Fn können nicht getargeted werden.)



// ---------------------------------------------------------------------- keydown
document.addEventListener("keydown", e => {
    // console.log(e);
    if(e.key === "@") {
        console.log("Das @-Zeichen wurde gedrückt!");
    }
});

// -------------------------------------------------------------- keydown, key up für k || K.
document.addEventListener("keydown", e => {
    // console.log(e)
    if(e.key === "k" || e.key === "K"){
        console.log("die k-Taste wurde gedrückt.")
    }
});
document.addEventListener("keyup", e => {
    // console.log(e)
    if(e.key === "k" || e.key === "K"){
        console.log("die k-Taste wurde losgelassen.")
    }
});


// ------------------------------------------------------------------ experiment mit Und

document.addEventListener("keydown", e => {
    // console.log(e)
    if(e.key === "n"){
        document.addEventListener("keydown", e2 => {
            if(e2.key === "m") {
                console.log("Die Tasten \"n\" und \"m\" wurden gedrückt.")
            }
        });
    
    }
});

// -------------------------------------------------------- keyup / keydown   mit if else -> für groß, klein p

document.addEventListener("keyup", e => {
    // console.log(e)
    if(e.key === "p"){
        console.log("das kleine p wurde losgelassen.")
    }else if(e.key === "P"){
        console.log("Das große P wurde losgelassen.")
    }
});
document.addEventListener("keydown", e => {
    // console.log(e)
    if(e.key === "p"){
        console.log("das kleine p wurde gedrückt.")
    }else if(e.key === "P"){
        console.log("Das große P wurde gedrückt.")
    }
});

// Sehr ähnlich wie keydown. Unterschiede zwar googlebar aber nicht eindeutig.
document.addEventListener("keypress", e => {
    if(e.key === "p"){
        console.log("Das :-Zeichen \":\" wurde gedrückt");
    }
});