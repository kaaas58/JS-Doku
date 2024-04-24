"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein-listenelement");
console.log(li);

let a = document.createElement("a")
a.setAttribute("id", "mein-ankerelement");
a.setAttribute("href", "#");

let text = document.createTextNode("Element");

a.appendChild(text);
li.appendChild(a);

console.log(li);