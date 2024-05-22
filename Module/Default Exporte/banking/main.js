// Default geht nur für ein element das exportiert wird.
// Kann auch mit normalen Exporten nebeneinander angewendet werden.

// Import eines default-Exports
import oa from "./utils/helper.js";
// import {default as oa} from "./utils/helper.js";

// Import eienes benantern Exports
import{max, sabrina} from "./utils/settings.js";

// Benannter Import eine Exports
import{Konto as k} from "./classes/Konto.js";

// Import eines benannten Exports | default, daher ohne Klammern und ohne as umbenannt.
import Pusteblume from "./classes/Kinderkonto.js";

oa(new k("DE6206752564419854", max.name, max.vermoegen));
oa(new Pusteblume("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));