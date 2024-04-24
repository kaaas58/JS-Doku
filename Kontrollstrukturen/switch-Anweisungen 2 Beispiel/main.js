"use strict";

let einName = "Martin";

// switch vergleicht einen Wert strikt mit verschiedenen Anderen | vergleichen und klaarer lesbar, schneller
switch (einName){
    case "Martin":
        console.log("Hallo Martin");
        break;
    case "David":
        console.log("Hallo David");
        break;
    case "Sebastian":
        console.log("Hallo Sebastian");
        break;
    default:
        console.log("Hallo, wie heisst du ?")
        break;
}