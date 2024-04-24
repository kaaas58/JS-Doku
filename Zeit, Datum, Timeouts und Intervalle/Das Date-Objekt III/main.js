"use strict";

let d = new Date();
console.log(d);
console.log("");


// d.toLocalString([schema [, optionen]]);

let de_DE = d.toLocaleString("de-DE");
let en_US = d.toLocaleString("en-US");
console.log(de_DE);
console.log(en_US);
console.log("");



// mit optionen / kann antürlich auch anders benant werden-----------------


// let optionen = {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",  // Day ist 1-7
    //     weekday: "long",
    //     hour: "numeric",
    //     minute: "2-digit",
    //     second: "2-digit"
    // };
    
    
    // Vorher nach de-DE, mit der Variable let options eingegeben. Jetzt sauberer, direkt und ohne Variable eingegeben.
    let de_DE_2 = d.toLocaleString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",  // Day ist 1-7
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });
    console.log(de_DE_2);
    console.log("");
    
    
    let de_DE_datum = d.toLocaleDateString("de-DE", { 
        year: "numeric",
        month: "long",
        day: "numeric",  // Day ist 1-7
        weekday: "long"
    });
    console.log(de_DE_datum);
    console.log("");
    
    
    let de_DE_time = d.toLocaleTimeString("de-DE", {
        hour: "numeric",
        minute: "2-digit",
    second: "2-digit"
});
console.log(de_DE_time);