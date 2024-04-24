"use strict";

let vorname = "Lukas";
let nachname = "Trapp";
let alter = 26;

let name = vorname + " " + nachname;
console.log(name);

// im String Variablen nutzen   ` ${...} `   und dass in Backticks
let begruessung = `Hallo ${name} !`;
console.log(begruessung);

//Mehrere Template Strings
let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);


//Mehrzeiliger Template Sting, String registriert Enter
let mehrzeiligerTemplateString =`Hallo ${name}
Du bist ${alter} Jahre alt.
Wie gheht es dir ?`;
console.log(mehrzeiligerTemplateString);

//(+)KonkatinierterTemplate Sting, mit umbruch im Code aber nicht in der Konsole.
let konkatinierterTemplateString =`Hallo ${name} `+
`Du bist ${alter} Jahre alt. `+
`Wie gheht es dir ?`;
console.log(konkatinierterTemplateString);