"use strict";

// 3 Objekte vergleichen
let auto1 = {
    marke: "BMW",
    modell: "i8"
};

let auto2 = {
    marke: "Tesla",
    modell: "Model X"
};

let auto3 = {
    marke: "Tesla",
    modell: "Model X"
};

// Zwei Objekte sind niemals gleich außer sie sind das absolut selbe 
console.log(auto1==auto2);
console.log(auto2==auto3);
console.log(auto3==auto3);
console.log({}=={});

// const autosVergleichen = function(o1, o2){

//     if(o1.marke == o2.marke && o1.modell == o2.modell){
//         console.log("Objekte sind gleich");
//     } else{
//         console.log("Objekte sind ungleich");
//     }
// };

// autosVergleichen(auto3, auto2);

// 2 Ojekte können wir vergleichen über ihre eigenschaften
const autosVergleichen = function(o1, o2){

    if(o1.marke == o2.marke && o1.modell == o2.modell){
        return true;
    } else{
        return false;
    }
};

console.log(autosVergleichen(auto3, auto2));