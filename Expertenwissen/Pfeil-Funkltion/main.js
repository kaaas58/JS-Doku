"use strict";

// normale Funktion
const multiplizieren1 = function(a, b){ return a * b; };

//Regel 1: function-Keyword wird  durch => nachj den Parameter(n) ersetzt.
const multiplizieren2 = (a, b) => {return a * b;}

// Regel 2: Wenn die Logik unserer Funktion aus nur einem  Ausdruck/Statement besteht, kann man die {}Klammern weg gelassen.
// Regel 3: Wenn es sich bei dem einzelnen Statement um eine return_Anweissung handelt, kann/also muss auch dießes weg gelassen werden.
const multiplizieren3 = (a, b) => a * b;

// Testausgaben >>
console.log(multiplizieren3(15, 10));
console.log(multiplizieren1(5, 10));
console.log(multiplizieren2(10, 10));




// Normale Funktion
const begruessung1 = function(name){ return `Hallo ${name}`;};

//Regel 1: function-Keyword wird  durch => nachj den Parameter(n) ersetzt.
const begruessung2 = (name) => {return `Hallo ${name}`;};

// Regel 2: Wenn die Logik unserer Funktion aus nur einem  Ausdruck/Statement besteht, kann man die {}Klammern weg gelassen.
// Regel 3: Wenn es sich bei dem einzelnen Statement um eine return_Anweissung handelt, kann/also muss auch dießes weg gelassen werden.
const begruessung3 = (name) => `Hallo ${name}`;

// Regel 4: Wenn nur ein Parameter übergeben wird, können auch die () des Paramters weggelassen werden.
const begruessung4 = name => `Hallo ${name}`;

// Testausgaben >>
console.log(begruessung1("Ralf"));
console.log(begruessung2("Günter"));
console.log(begruessung3("Olaf"));
console.log(begruessung4("Max"));




// Normale Funktion
const sinnDesLebens1 = function() { return 42; };

// Regel 5: Wenn keine Parameter übergeben werden müssen leere () gesetzt werden.
const sinnDesLebens2 = () => 42;

// Testausgabe
console.log(sinnDesLebens1());
console.log(sinnDesLebens2());




// Praxis-Beispiel: Pfeilfunktionen sind super praktisch z.B. in Call-Back-Funktionen,
    // wie sie die forEach()-Methode erwartet.
let einkaufsliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];

// Normale Funktion:
einkaufsliste.forEach(function(e) { console.log(e); });
// Pfeil-Funktion
einkaufsliste.forEach( e => console.log(e));