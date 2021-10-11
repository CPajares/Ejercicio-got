import Personaje from "./Personaje.js";

class Asesor extends Personaje {
  asesora_a;
  frase = "No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad, asesora_a) {
    super(nombre, familia, edad);
    this.asesora_a = asesora_a;
  }
}
