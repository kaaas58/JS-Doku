"use strict"

class Kiderkonto extends Konto {

    constructor(iban, inhaber, eizahlung, limit){
        super(iban, inhaber, eizahlung);
        this._limit = limit*-1;
    }

    
    _saldo_pruefen(auszahlung){
    // _saldo_pruefen(auszahlung){
    //     if(this._saldo - auszahlung < this._limit){
    //         return false
    //     }else{p
    //         return true
    //     }
    // }
    return this._saldo - auszahlung < this._limit ? false : true;
    }


    abheben(auszahlung){
    // abheben(auszahlung){
    //     if(this._saldo_pruefen(auszahlung)){
    //         super.abheben(auszahlung);
    //         }else{
    //             console.log("Keine Auszahlung möglich, da sonst das Limti überschritten ist!");
    //         }
    //     }
    // }
    this._saldo_pruefen(auszahlung) ? super.abheben(auszahlung) : console.log("Keine Auszahlung möglich, da sonst das Limti überschritten ist!");
    }
}