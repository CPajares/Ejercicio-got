import Personaje from "./Personaje.js";

class Escudero extends Personaje {
  sirve_a;
  pelotismo;
  frase = "Soy un looser";
  constructor(nombre, familia, edad, sirve_a, pelotismo) {
    super(nombre, familia, edad);
    this.pelotismo = pelotismo;
    this.sirve_a = sirve_a;
  }
}

export default Escudero;
