"use strict";

let ul = document.querySelector("#navigation > ul");
// console.log(nav);


// --------------------------------------- Kindelemente 

let child_notes = ul.childNodes; // Alle Kindellemente (inkl. Text- und Komentarknoten.)
let children = ul.children; // Alle Kindelemente (exkl. Text- und Kommentarknoten.)
let first_child = ul.firstChild; // erstes Kindelement (inkl. Text- und Kommentarknoten.)
let last_child = ul.lastChild; // erstes Kindelement (inkl. Text- und Kommentarknoten.)
let first_element_child = ul.firstElementChild; // erstes Kindelement (exkl. Text- und Kommentarknoten.)
let last_element_child = ul.lastElementChild; // letztes Kindelement (exkl. Text- und Kommentarknoten.)


// ------------------------------------ Geschwisterelemente

let next_sibling = ul.nextSibling; // Nächstes Geschwisterelement (inkl. Text- und Kommantarknoten.)
let previous_sibling = ul.previousSibling; // Vorangehende Geschwisterelement (inkl. Text- und Kommantarknoten.)

let next_element_sibling = ul.firstElementChild.nextElementSibling; // Nächstes Geschwisterelement (exkl. Text- und Kommantarknoten.)
let previous_element_sibling = ul.lastElementChild.previousElementSibling; // Vorangehende Geschwisterelement (exkl. Text- und Kommantarknoten.)


// --------------------------------------- Elternelement

// Elternelement eines Elements
let parent_element = ul.parentElement; 


// ----------------------------------- Allgemeines navigieren

let anker = ul.querySelectorAll("li > a");


console.log(child_notes);
console.log("");
console.log(children);
console.log("");
console.log(first_child);
console.log(last_child);
console.log("");
console.log(first_element_child);
console.log(last_element_child);
console.log("");
console.log(next_sibling);
console.log(previous_sibling);
console.log("");
console.log(next_element_sibling);
console.log(previous_element_sibling);
console.log("");
console.log(parent_element);
console.log("");
console.log(anker);