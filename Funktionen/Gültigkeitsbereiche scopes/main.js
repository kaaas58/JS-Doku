"use strict";

// Gültigkeitsbereich. der Bereich in dem mann zugriff auf eine Variable hat.

// Globale Variablen: Wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich 

// Lokale Variablen: Wird in einer Funktion, besser gesagt im Codeblock definiert und ist 
// nur von innerhalb und innerhalb geschachtelter/abgeleiteter Codblöcke sichtbar,/vorhanden, 
// zugänglich und aufrufbar.

// Globaler Gültigkeitsbereich 0: variable1
    // Lokaler Gültigkeitsbereich 1: variable2 
    // in dießem und in geschachtelten,
    // gilt nicht nach außen
        // Innerer lokaler Gültigkeitsbereich 1.1: variable3 
        // in dießem und in geschachtelten,
        // gilt nicht nach außen 
    // Lokaler Gültigkeitsbereich 2: variable4      || 2ist selbe ebene aber anderer Codeblock.
    // in dießem und in geschachtelten,
    // gilt nicht nach außen 


// Globale Variable
let variable1 = "variable1";



// Function mit Codeblock, Methodenrumpf.
const meineFunktion = function(){
    let variable2 = "variable2";
    // aüßerer Codeblock kennt innerne nicht, bzw Variablen die hier initialisiert wurden.
    // console.log(variable3);

    if(true){
        console.log("if-Codeblock")
        let variable3 = "variable3";
        // Codeblock in Codeblock kennt lokale Variable der ebene Drüber
        console.log(variable1);
        console.log(variable2);
        console.log(variable3);
    }

    console.log("");
    console.log("außerhalb if-Codeblock aber noch in der Funktion");
    console.log(variable1);
    console.log(variable2);
    // funzt nicht da lokal angelegt ist. Versuch global aufzurufen klappt nicht.
    // console.log(variable3);
};



console.log(`außerhalb der Funktion, Aufruf der Funktion

dadurch: 


function
        
            if
                cl if-cb
                cl v1
                cl v2
                cl v3
            /if

        cl ""
        cl außerhalb if-cb...
        cl v1
        cl v2


/function

        `);
meineFunktion();


console.log("");
console.log("außerhalb der Funktion variable1 log");
console.log(variable1);
console.log("");

// funzt nicht da lokal angelegt ist. Versuch global aufzurufen klappt nicht.
//  console.log(variable2);
//  console.log(variable3);

if (true){
    let variable4 = "Variable4";
}