import Personaje from "./Personaje";

class Rey extends Personaje {
  anos_de_reinado;
  frase = "Vais a morir todos";
  constructor(nombre, familia, edad, anos_de_reinado) {
    super(nombre, familia, edad);
  }
}
