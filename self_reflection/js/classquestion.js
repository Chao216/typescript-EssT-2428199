class Wohnung {
  constructor(zimmer, preis, quardmeter, alt) {
    this.a = zimmer;
    this.b = preis;
    this.c = alt;
    this.d = quardmeter;
  }
}

const myap = new Wohnung(3, 263, 11, 30);

console.log(myap);
