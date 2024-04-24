"use strict";

// li variable bekommt ein li Element.
let li = document.createElement("li");
// li bekommt ein Attribut id zugewießen mit dem Wert mein-listenelement id="mein-listenelement".
li.setAttribute("id", "mein-listenelement");

// variable a mit a-Element erstellt.
let a = document.createElement("a")
// a wird ein Attribut (id) zugewießen mit dem Wert (mein-ankerelement). 
a.setAttribute("id", "mein-ankerelement");
// a wird ein weiteres Attribut (href) ztugewießen mit dem Wert (#). 
a.setAttribute("href", "#");
// variable text bekommt das Element (Element).
let text = document.createTextNode("Element");

// a wird nach den 2 Attributen id und href mit je ihren Werten, das (Text)Element als appendChild 
    // an letzter Position zugewießen.
a.appendChild(text);
// das li element (id="meine-listenelement")
    // bekommt dass a element mit seien 2 Attributen und dem Textelement als Inhalt.
li.appendChild(a);

console.log(li);

// Alles innerhalb der ul in #navigation holen und in ket liste halten.
let liste = document.querySelector("#navigation > ul");
// Der liste/"#navigation > ul" => mit appendChild unser li anhängen, mitgeben (auf letztem Platz in ul.)
liste.appendChild(li);
