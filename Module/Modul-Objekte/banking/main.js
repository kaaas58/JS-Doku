import * as Helper from "./utils/helper.js";
import * as Settings from "./utils/settings.js";
import * as k from "./classes/Konto.js";
import * as kk from "./classes/Kinderkonto.js";

console.log(Helper);
console.log(Settings);
console.log(k);
console.log(kk);

Helper.objekt_anzeigen(new k.Konto("DE6206752564419854", Settings.person_1.name, Settings.person_1.vermoegen));
Helper.objekt_anzeigen(new kk.Kinderkonto("DE6206752564419740", Settings.person_2.name, Settings.person_2.vermoegen, 500));