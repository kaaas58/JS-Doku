"use strict";

let vorname = "Lukas";
let nachname = "Trapp";
let alter = 26;


//Kombination von Strings
let name = vorname + " " + nachname;
let id = name + " " + alter;

console.log(id);

let begruessung = "Hallo "+vorname+" "+nachname;
let begruessung2 = "Hallo "+name +" !";
console.log(begruessung);
console.log(begruessung2);

let zusammenfassung = name +" ("+alter+" Jahre)";
console.log(zusammenfassung);

let einzeiliger_string = "Das ist ein einzelner String!";
console.log(einzeiliger_string);


//Mehrzeilige Strings
//Mit + verketten
let mehrzeiligerString ="Ich will dießen String "+
"in der nächsten Zeile fortsetzen. "+
"Und wenn ich will, "+
"kann es auch noch weiter gehen.";
console.log(mehrzeiligerString);

//Mit + verketten und mit \n Umbruch und \t Tab, Einrückung versehen. 
let mehrzeiligerStringMitUmbruch ="Ich will dießen String \n\tin "+
"der nächsten Zeile fortsetzen. \n\t\tUnd wenn ich will,"+
" \n\t\t\tkann es auch noch weiter gehen.";
console.log(mehrzeiligerStringMitUmbruch);
