import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;
  frase = "Primero pego y luego pregunto";
  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    this.destreza = destreza;
  }
}
