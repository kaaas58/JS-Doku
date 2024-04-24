"use strict";

let d = new Date();

d.setFullYear(1988);
d.setMonth(4); //Month ist Index, 0-11
d.setDate(26);
d.setHours(15);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(58);

console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay()); // Tag der Woche 1-7
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMilliseconds());



// Utc ------------------------------------ Date
console.log("-----------------UTC Date");

let d_utc = new Date();

d_utc.setUTCFullYear(1999);
d_utc.setUTCMonth(11); //Month ist Index, 0-11
d_utc.setUTCDate(31);
d_utc.setUTCHours(12); // Zeitfehler, da wir UTC-Zeit setzen, sie aber beim Ausgeben im log in unsere Zeitzohne übersetzt wird
d_utc.setUTCMinutes(59);
d_utc.setUTCSeconds(59);
d_utc.setUTCMilliseconds(58);

console.log(d_utc);

console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay()); // Tag der Woche 1-7
console.log(d.getUTCHours()); // Zeitfehler, da wir UTC-Zeit setzen, sie aber beim Ausgeben im log in unsere Zeitzohne übersetzt wird
console.log(d.getUTCMinutes());
console.log(d.getUTCMilliseconds());


let d_unix = new Date();

d_unix.setTime(1568557000000);
console.log(d_unix);
console.log(d_unix.getTime());