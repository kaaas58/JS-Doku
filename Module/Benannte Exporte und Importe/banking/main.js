import{objekt_anzeigen} from "./utils/helper.js";
// Import eienes benantern Exports
import{max, sabrina} from "./utils/settings.js";

// Benannter Import eine Exports
import{Konto as k} from "./classes/Konto.js";
// Import eines benannten Exports
import{Pusteblume} from "./classes/Kinderkonto.js";

objekt_anzeigen(new k("DE6206752564419854", max.name, max.vermoegen));
objekt_anzeigen(new Pusteblume("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));