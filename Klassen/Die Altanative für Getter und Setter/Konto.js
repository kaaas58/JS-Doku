"use strict"

//  Konvention da es kein private Atribute gibt ist ein Vorgestellter _ Unterstrich.
    // Gilt auch um Methoden zui privatisieren

class Konto {

    constructor(iban, inhaber, einzahlung){
        this._iban = iban;
        this._inhaber = [inhaber];
        this._saldo = einzahlung;
        this._activ = true;
    }

    einzahlen(einzahlung){
        this._saldo += einzahlung;
    }
   
    abheben(auszahlung){
        this._saldo -= auszahlung;
    }
    kontostand_abfragen(){
        return this._saldo;
    }

}
