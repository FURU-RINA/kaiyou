class Sakana {
  // y z imageL imageR speed ampX ampY
  constructor(spec) {
    this.img = document.createElement("img");
    this.img.classList.add("moving-image");

    this.speed = 0;
    this.amplitudeX = 0;
    this.amplitudeY = 10;
    this.images = spec.image; 
    this.y = spec.y;
    this.z = spec.z;
    this.width = spec.width;
    this.direction = Math.floor(Math.random() * 2.0);
    const back_x = [ -3, windowWidth - this.width ];
    const rn = this.direction;
    this.x = [Math.random() * (windowWidth - 200) + 100,
      Math.random() * (windowWidth - 200) + 100,
      Math.random() * (windowWidth - 200) + 100,
      back_x[rn],Math.random() * 350 + 100 ][this.z];// x: 100px 〜 (windowWidth - 100px) の範囲
if( this.z == 3 ) console.log( {ar: back_x,  rnd: rn, x: back_x[rn] });
    this.img.src = this.images[this.direction];
    this.img.style.left = `${this.x}px`;
    this.img.style.top = `${this.y}px`;
    const ratio = [ 1, 2, 4, 1/2];
    this.img.style.width = `${this.width / (ratio[this.z])}px`;
    document.querySelector("#image-container").appendChild(this.img);
  }

  animate() {
    const ratio = [ 1, 8, 30, 60];
    // 画像の揺れを加える（左右と上下の揺れ）
    let shakeX = this.amplitudeX * Math.sin(Date.now() / 200); // 左右に揺れる
    let shakeY = this.amplitudeY * Math.cos(Date.now() / 200); // 上下に揺れる

    // スクロール位置に合わせて画像が上下に動く
    let scrollY = window.scrollY;

    // スクロール位置が下に行くほど画像が上に動くように調整
    let offsetY = -scrollY / (ratio[this.z] + 1.0); // 下にスクロールすると画像は上に移動
console.log({x: this.x + shakeX, y: this.y + offsetY + shakeY});
    // 画像の位置をスクロール量とともに反映
    //this.img.style.transform = `translate(${this.x + this.shakeX}px, ${this.y + offsetY + shakeY}px)`; // yにスクロール量を加算
    this.img.style.left = `${this.x + shakeX}px`;
    this.img.style.top = `${this.y + offsetY + shakeY}px`;
  }
}
