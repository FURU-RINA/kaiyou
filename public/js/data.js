class data {
  constructor(d) {
    this.number = d.number;
    this.name = d.name;
    this.explanation = d.explanation;

    for (let i = 0; i < this.number; i++) {
      let spec = {
        name: this.name,
        number: this.number,
        explanation: this.explanation,
        image: ["/public/fish/" + g.type + "L.png"],
      };
      this.fish.push(new Sakana(spec));
    }
  }
}
