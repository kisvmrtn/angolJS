import Feladat from "./Feladat.js";
export default class Feladatok {
  #lista;
  constructor(lista, pElem) {
    this.#lista = lista;
    this.pElem = pElem;
    this.counter = 0;
    this.eredmenyMezo = document.querySelector(".ertekeles");
    this.ertekelGomb = document.querySelector(".eredmenyMezo button");
    this.megjelenit();
    this.counterNovel();
    this.ertekeles();
  }
  megjelenit() {
    let header = document.querySelector(".header");
    let html = `<h2>${this.#lista[0]}</h2><br>`;
    header.insertAdjacentHTML("beforeend", html);
    for (let i = 2; i < this.#lista.length; i++) {
      let random = Math.floor(Math.random() * (23 - 2 + 1)) + 2;
      let random2 = Math.floor(Math.random() * (23 - 2 + 1)) + 2;

      let idg = this.#lista[random];
      this.#lista[random] = this.#lista[random2];
      this.#lista[random2] = idg;
    }
    for (let i = 2; i < this.#lista.length; i++) {
      new Feladat(this.#lista, this.pElem, i);
    }
  }
  counterNovel() {
    window.addEventListener("counter", (event) => {
      if (event.detail) {
        this.counter++;
      }
    });
  }
  ertekeles() {
    this.ertekelGomb.addEventListener("click", () => {
      this.eredmenyMezo.innerHTML = "";
      let html = `<h3>Eredményed:</h3>
                    <h4>${this.counter}/${this.#lista.length - 2}</h4>
      `;
      this.eredmenyMezo.insertAdjacentHTML("beforeend", html);
    });
  }
}
