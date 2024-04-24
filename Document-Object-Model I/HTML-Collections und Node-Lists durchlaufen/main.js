"use strict";

// HTML-Collections

let html_collection1 = document.getElementsByClassName("jumbotron");
let html_collection2 = document.getElementsByTagName("li");


// ---------------------------------------------------- for-Schleife

for(let i = 0; i < html_collection1.length; i++){
    console.log(html_collection1[i]);
}

for(let i = 0; i < html_collection2.length; i++){
    console.log(html_collection2[i]);
}

// --------------------------------------------------- for-of-Schleife

for(let e of html_collection1){
    console.log(e);
}

for(let e of html_collection2){
    console.log(e);
}

// ----------------------------------------------------- Node-Lists

let node_list = document.querySelectorAll("p");
console.log(node_list);

for(let i =0; i < node_list.length; i++){
    console.log(node_list[i]);
}

for(let e of node_list){
    console.log(e);
}

node_list.forEach(function(e){
    console.log(e);
});