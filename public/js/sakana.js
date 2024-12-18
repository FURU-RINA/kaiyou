class Sakana {
  // y z imageL imageR speed ampX ampY
  constructor(spec) {
    const img = document.createElement("img");
    img.classList.add("moving-image");

    this.speed = 0;
    this.amplitudeX = 0;
    this.amplitudeY = 10;
    this.images = spec.image;
    this.x = Math.random() * (windowWidth - 200) + 100; // x: 100px 〜 (windowWidth - 100px) の範囲
    this.y = spec.y;
    this.z = 0;
    this.size = 100;
    this.direction = Math.floor(Math.random() * 2.0);

    img.src = this.images[this.direction];
    img.style.left = `${this.x}px`;
    img.style.top = `${this.y}px`;
    document.querySelector("#image-container").appendChild(img);
  }

  animate() {
    // 画像の揺れを加える（左右と上下の揺れ）
    let shakeX = amplitudeX * Math.sin(Date.now() / 200); // 左右に揺れる
    let shakeY = amplitudeY * Math.cos(Date.now() / 200); // 上下に揺れる

    // スクロール位置に合わせて画像が上下に動く
    let scrollY = window.scrollY;

    // スクロール位置が下に行くほど画像が上に動くように調整
    let offsetY = -scrollY; // 下にスクロールすると画像は上に移動

    // 画像の位置をスクロール量とともに反映
    img.style.transform = `translate(${x + shakeX}px, ${y + offsetY + shakeY}px)`; // yにスクロール量を加算
  }
}
