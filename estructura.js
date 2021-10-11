import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador";
import Asesor from "./Asesor";
import Escudero from "./Escudero";

const joffrey = new Rey("Jofrey", "Borbon", 33, 3);
const jaime = new Luchador("Jaime", "Austria", 30, "espada", "avispado");
const Tyron = new Asesor("Tyron", "Austria", 35, "Daenerys");
const Bron = new Escudero("Bron", "Lord", 35, "Jaime");

console.log(joffrey.comunicar());
