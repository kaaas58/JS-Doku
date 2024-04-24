"use strict";

let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_Klasse")
let text = document.createTextNode("Lorem ypsum");

// appendChild()-Methode: fügt ein Element als letztes Kindelement in ein Element ein
// Syntax: elternelement.appendChild(kindelement);
// Existiert das kindelement im Elternelement bereits, wird es entfernt und stattdessen als
    // letztes Element wieder angefügt.

// Text zum div-Element hinzfügen.
div.appendChild(text);

// Section im Jumbotron selektieren.
let jumbo = document.querySelector(".jumbotron > section");
// div-Element zur Section im Jumbotron hinzufügen.
jumbo.appendChild(div);

// Erstes Listenelement in ul in Navigation selektiert.
let li = document.querySelector("#navigation > ul > li");

// ul in Navigation selektiert
let ul = document.querySelector("#navigation > ul");
// erstes Listenelement der ul erneut in ul eingefügt (allerdings durch
    // appendChild()-Methode als letztes Kindelement)
ul.appendChild(li);