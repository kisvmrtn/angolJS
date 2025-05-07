import Feladat from "./Feladat.js";
export default class Feladatok {
  #lista;
  constructor(lista, pElem) {
    this.#lista = lista;
    this.pElem = pElem;
    this.eredmenyMezo = document.querySelector(".eredmenyMezo");
    this.ertekelGomb = this.eredmenyMezo.querySelector("button");
    this.megjelenit();
    this.counter = 0;
    this.ertekeles();
  }
  megjelenit() {
    let header = document.querySelector(".header");
    let html = `<h2>${this.#lista[0]}</h2><br>`;
    header.insertAdjacentHTML("beforeend", html);
    for (let i = 2; i < this.#lista.length; i++) {
      new Feladat(this.#lista, this.pElem, i, this.counter);
    }
  }
  ertekeles() {
    this.ertekelGomb.addEventListener("click", () => {
      console.log(this.counter);
    });
  }
}
