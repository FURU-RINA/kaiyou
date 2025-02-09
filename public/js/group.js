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
        width: g.width,
        image: [
          "/public/fish/" + g.type + "R.png",
          "/public/fish/" + g.type + "L.png",
        ],
      };
      this.fish.push(new Sakana(spec));
      this.addFishImageListeners(g.name);
    }
  }

  addFishImageListeners(fishName) {
    const imageContainer = document.getElementById('image-container');

    // 画像を追加して表示
    const imgL = document.createElement('img');
    const imgR = document.createElement('img');
    // 画像にマウスオーバーイベントを追加
    imgL.addEventListener('mouseover', () => {
      showFishName(fishName);  // 名前を表示
    });

    imgR.addEventListener('mouseover', () => {
      showFishName(fishName);  // 名前を表示
    });

    imgL.addEventListener('mouseout', () => {
      showFishName("");  // 名前を消す
    });

    imgR.addEventListener('mouseout', () => {
      showFishName("");  // 名前を消す
    });

    // 画像をコンテナに追加
    imageContainer.appendChild(imgL);
    imageContainer.appendChild(imgR);
  }
  
  animate(offsetY) {
    for (let f of this.fish) {
      f.animate(offsetY);
    }
  }
}
