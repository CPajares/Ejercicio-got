import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anos_de_reinado;
  frase = "Vais a morir todos";
  constructor(nombre, familia, edad, anos_de_reinado) {
    super(nombre, familia, edad);
    this.anos_de_reinado = anos_de_reinado;
  }
}

export default Rey;
