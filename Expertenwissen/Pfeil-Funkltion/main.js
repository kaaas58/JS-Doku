"use strict";

// normale Funktion
const multiplizieren1 = function(a, b){ return a * b; };

console.log(multiplizieren1(5, 10));


//Pfeilfunktion, Kurzschreibweisse (function wird weggelassen, dafür nach den Parametern ein Pfeil zum Statement).
const multiplizieren2 = (a, b) => {return a * b;}

console.log(multiplizieren2(10, 10));


// 1.Wenn unsere Funktion aus einem einzigen Statement besteht, können auch die Klammer weg gelassen werde.
// 2.Wenn es sich bei dießem einen Statement um ein return handelt, 
    // kann/also muss auch dießes weg gelassen werden.
const multiplizieren3 = (a, b) => a * b;

console.log(multiplizieren3(15, 10));



const begruessung1 = function(name){ return `Hallo ${name}`;};
const begruessung2 = (name) => {return `Hallo ${name}`;};
const begruessung3 = (name) => `Hallo ${name}`;
const begruessung4 = name => `Hallo ${name}`;

console.log(begruessung1("Ralf"));
console.log(begruessung2("Günter"));
console.log(begruessung3("Olaf"));
console.log(begruessung4("Max"));


// const sinnDesLebens1 = function(){return 42;};
// const sinnDesLebens2 = () => 42;
// console.log(sinnDesLebens2);


let einkaufsliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];

einkaufsliste.forEach(function(e){
    console.log(e);
});

console.log("");

einkaufsliste.forEach( e => console.log(e));