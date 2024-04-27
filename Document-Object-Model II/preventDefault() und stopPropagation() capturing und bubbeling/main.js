"use strict";

// Wie kommt ein Event zu Stande..die 3 Phasen:
    // capturingPhace, targetPhase und bubbelingPhase.

// capturingPhase: Hirachischer Weg, Event zum Ellement hin:
    // windowElementObjekt -> documentElementObjekt -> htmlElementObjekt -> 
    // bodyElementObjekt -> artickelElementObjekt -> headElementObjekt -> h2ElementObjekt

// targetPhase: Wenn das Event beim jeweiligen ElementObjekt angekommen ist.

// bubbelingPhase: Der Weg vom Target zurück zum Start des Events (richtung root).
    // Event wird erst bei Rückkehr erzeugt.

    let el1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
    let el1parent = el1.parentElement;
    let el2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
    let el2parent = el2.parentElement;

    // preventDefault = Standart vermeiden.
    // Event läuft per capturing zm target und auf dem Rückweg beim bubbeling löst es auch das parent element aus.
    el1.addEventListener("click", e => {
        e.preventDefault(); //sorgt dafür dass das Standartmäßige Verhalten nicht ausgelöst wird. 
                                // (sprich öffnen von google) mit dem Anker a="" wird abgefangen.
                                // Wir können mit eigener Logic umleiten, aber nur wenn validiert wurde.
        console.log("el1 hat es mitbekommen!");
    });
    
    el1parent.addEventListener("click", e => {
        console.log("el1parent hat es mitbekommen!");
    });
    

    // stopPropagation = Weitergabe odere Vermehrung stoppen.
    // Event läuft per capturing zm target und auf dem Rückweg beim bubbeling löst es auch das parent element aus.
    el2.addEventListener("click", e =>{
        e.stopPropagation();    // Es wird nur der Target wert gemeldet, es verhindert das Bubbeling, 
                                // löst aber den Link des Ankers a="" aus zu google aus.
        console.log("el2 hat es mitbekommen!");
    });

    el2parent.addEventListener("click", e =>{
        console.log("el2parent hat es mitbekommen!");
    });