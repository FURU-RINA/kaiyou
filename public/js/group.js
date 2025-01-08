class group {
  constructor(g) {
    this.number = g.number;
    this.type = g.type;
    this.density = g.density;
    this.size = 50;
    this.fish = [];

    for (let i = 0; i < this.number; i++) {
      let depth = Math.random() * (g.depthM - g.depthm) + g.depthm;
      let spec = {
        depth: g.depth,
        number: this.number,
        y: depth,
        z: g.z,
        name: g.name,
        image: [
          "/public/fish/" + g.type + "L.png",
          "/public/fish/" + g.type + "R.png",
        ],
      };
      this.fish.push(new Sakana(spec));
    }
  }

  animate() {
    for (let f of this.fish) {
      f.animate();
    }
  }
}
