import { szenvedoMondatok } from "./angol.js";
import Feladat from "./Feladat.js";
import Feladatok from "./Feladatok.js";
let pElem = document.querySelector("main");

// new Feladat(szenvedoMondatok, pElem, 2);
// new Feladat(szenvedoMondatok, pElem, 3);
// new Feladat(szenvedoMondatok, pElem, 4);
new Feladatok(szenvedoMondatok, pElem);
