import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";

const joffrey = new Rey("Jofrey", "Borbon", 33, 3);
const jaime = new Luchador("Jaime", "Austria", 30, "espada", "avispado");
const daenerys = new Luchador("Daeneris", "Targarian", 25);
const tyron = new Asesor("Tyron", "Austria", 35, "Daenerys");
const bron = new Escudero("Bron", "Lord", 35, "Jaime");

const personajesJuegoTronos = [joffrey, jaime, daenerys, tyron, bron];

function frasesPersonajes() {
  personajesJuegoTronos.forEach((personaje) => console.log(personaje.frase));
}

console.log(frasesPersonajes());
