export default class Feladat {
  #lista;
  constructor(lista, pElem, index) {
    this.#lista = lista;
    this.pElem = pElem;
    this.index = index;
    this.megjelenit();
    this.ellenoriz();
  }

  // prettier-ignore
  megjelenit() {
    let split = this.#lista[this.index].mondat.split("_");
    let html = `
                <div class="card">
                    <div class="card-body">
                        ${split[0]}<input type="text" name="valasz" id="valasz" /> ${split[1]} (${this.#lista[this.index].alap}) <span id=result></span>
                        <br><button class="btn btn-primary" type="submit">Ok</button>
                    </div>
                    
                </div>
                `;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }
  ellenoriz() {
    let resultElem = document.querySelector(
      ".card:last-child .card-body #result"
    );
    let gomb = this.pElem.querySelector(".card:last-child .card-body button");
    let valaszMezo = this.pElem.querySelector(
      ".card:last-child .card-body input"
    );
    gomb.addEventListener("click", () => {
      let joE = false;
      for (let i = 0; i < this.#lista[this.index].valasztas.length; i++) {
        if (valaszMezo.value == this.#lista[this.index].valasztas[i]) {
          joE = true;
        }
      }

      valaszMezo.disabled = true;

      if (joE) {
        resultElem.innerHTML = "";
        let html = `✔`;
        resultElem.insertAdjacentHTML("beforeend", html);
      } else {
        resultElem.innerHTML = "";
        let html = `❌`;
        resultElem.insertAdjacentHTML("beforeend", html);
      }
    });
  }
}
