"use strict";


// --------------------------------------------- Element nach id auswählen

let el_by_id_1 = document.getElementById("navigation");
console.log(el_by_id_1);

let el_by_id_2 = document.getElementById("nation");
console.log(el_by_id_2);



// --------------------------------------------- Element nach class auswählen

let els_by_class_name_1 = document.getElementsByClassName("jumbotron");
console.log(els_by_class_name_1);

let els_by_class_name_2 = document.getElementsByClassName("jumbn");
console.log(els_by_class_name_2);




// ------------------------------------ leer, nicht gefunde, wenn length nicht anschlägt.

console.log(els_by_class_name_2.length);
console.log(els_by_class_name_2.length == 0);




// --------------------------------------------- Element nach tag auswählen

let els_by_tag_anme = document.getElementsByTagName("p");
console.log(els_by_tag_anme);

// // leere
// let els_by_tag_anme2 = document.getElementsByTagName("kjdf");
// console.log(els_by_tag_anme2);
