"use strict";

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18
};

// Objekt
// const personVerarbeiten = function(p){
//     let name = `${p.vorname} ${p.nachname}`;
//     let zusammenfassung = `${name} ist ${p.alter} Jahre alt.`;
//     let begruessung = `Hallo ${name} !`

//     // Return objekt
//     let rueckgabeObjekt ={
//         n: name,
//         z: zusammenfassung,
//         b: begruessung
//     };
//     return rueckgabeObjekt;
// };





// Kürzer
// Objekt
// const personVerarbeiten = function(p){
 
//     // Return objekt
//     let rueckgabeObjekt ={
//         n: `${p.vorname} ${p.nachname}`,
//         z: `${p.vorname} ${p.nachname} ist ${p.alter} Jahre alt.`,
//         b: `Hallo, ${p.vorname} ${p.nachname} !`
//     };

//     return rueckgabeObjekt;
// };


// Kürzer, kürzer
// Objekt
const personVerarbeiten = function(p){
    // return
    return{
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} ist ${p.alter} Jahre alt.`,
        b: `Hallo, ${p.vorname} ${p.nachname} !`

    };
};




console.log(personVerarbeiten(person));