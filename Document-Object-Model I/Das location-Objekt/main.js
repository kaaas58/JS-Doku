"use strict";

console.log(location);
console.log(location.href);

// location.href = "https://www.google.de";
// Gibt die location zuück in einem String.
console.log(location.protocol);
// Gibt den Host, bzw ip Zuirück
console.log(location.hostname);
// Gibt die location in einem Pfad zurück.
console.log(location.pathname);
// Falls ein search vorhanden ist am ende der url ...?suche=meine-suche
console.log(location.search);
// Falls ein hash vorhanden ist (z.B. um in section auf der seite zu springen)
    // z.B. (#meineSection).
console.log(location.hash);
// läd die Seite neu, in dem Fall da inicht in einem if oder switch, kommt 
    // der code immer wieder an die Stelle und hängt somit in einem InfinityLoop
    // des neuladens.
// location.reload();


// Es kann Url angegeben werden die geladen wird, als Weiterleitung.
    // Bei Asign bleibt Eintrag in der sessionHistory vorhanden.
location.assign("https://www.google.de");
// Ersetzen der jetzigen Url, durch dass ersetzen ist die Url nicht mehr 
    // in der sessionHistory vorhanden und somit kann im Browser 
    // nicht mehr zurückgegangen werden.
location.replace("https://www.google.de");

