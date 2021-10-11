class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de tronos";
  frase;
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  comunicar() {
    console.log(this.frase);
  }
  morir() {
    if (this.estado === "vivo") {
      this.estado = "muerto";
    } else {
      this.estado = "muerto";
    }
    console.log("cambiado estado a " + this.estado);
  }
}
