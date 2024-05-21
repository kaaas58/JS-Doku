"use strict";

// Von Instanz einer Klasse =>
let k = new Konto("DE6206752564419854", "Max Mustermann", 3500);
console.log(k);
// => zu JSON string.
let k_als_json_string = JSON.stringify(k);
console.log(k_als_json_string);
// Von JSON string => 

// => zu Javasscript-Objekt
// von Javascript-Objekt =>
let k_als_objekt = JSON.parse(k_als_json_string);
console.log(k_als_objekt);
// => zu Instanz der Klasse Konto
let k_neu = new Konto(k_als_objekt._iban, k_als_objekt._inhaber, k_als_objekt._saldo);
console.log(k_neu);
