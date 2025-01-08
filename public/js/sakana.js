class Sakana {
  constructor(spec) {
    this.img = document.createElement("img");
    this.img.classList.add("moving-image");

    this.speed = 0;
    this.amplitudeX = 0;
    this.amplitudeY = 10;
    this.images = spec.image;
    this.x = Math.random() * (window.innerWidth - 200) + 100; // x: 100px 〜 (window.innerWidth - 100px) の範囲
    this.y = spec.y;
    this.z = spec.z;
    this.size = 100;
    this.direction = Math.floor(Math.random() * 2.0); // 0 or 1

    // 画像の方向を設定
    if( this.z == 0 ) {
      this.img.src = this.images[this.direction];
      this.img.style.left = `${this.x-40}px`;
      this.img.style.top = `${this.y}px`;
      document.querySelector("#image-container").appendChild(this.img); // 画像をコンテナに追加
    } else if( this.z == 1 ) {
      this.img.src = this.images[this.direction];
      this.img.style.left = `${this.x-40}px`;
      this.img.style.top = `${this.y * 0.6}px`;
      this.img.style.widht = '60%';
      document.querySelector("#z1").appendChild(this.img); // 画像をコンテナに追加
    } else if( this.z == 2 ) {
      this.img.src = this.images[this.direction];
      this.img.style.left = `${this.x-40}px`;
      this.img.style.top = `${this.y * 0.4}px`;
      this.img.style.widht = '40%';
      document.querySelector("#z2").appendChild(this.img); // 画像をコンテナに追加
      
    }
    // 魚画像上に名前を表示する <div> を作成
    this.nameDiv = document.createElement("div");
    this.nameDiv.classList.add("fish-name");
    this.nameDiv.style.position = "absolute";
    this.nameDiv.style.top = `${this.y - 20}px`;  // 画像の中央付近に名前を表示
    this.nameDiv.style.left = `${this.x + this.size / 2 - 40}px`; // 画像中央に合わせる
    this.nameDiv.style.color = "white";
    this.nameDiv.style.fontSize = "20px";
    this.nameDiv.style.visibility = "hidden"; // 初期状態で非表示
    this.nameDiv.textContent = spec.name;

    document.querySelector("#image-container").appendChild(this.nameDiv); // 名前を画像コンテナに追加

    // 魚画像にマウスオーバーイベントを追加
    this.img.addEventListener('mouseover', () => {
      // 名前を表示
      this.nameDiv.style.visibility = "visible"; // 名前を表示
      this.img.style.opacity = 1; // 画像の明るさを戻す
      this.img.style.filter = "brightness(0.5)"; // 画像を明るくして目立たせる
    });

    // マウスアウト時のイベント
    this.img.addEventListener('mouseout', () => {
      // 名前を非表示
      this.nameDiv.style.visibility = "hidden"; // 名前を非表示
      this.img.style.filter = "brightness(1)"; // 画像の明るさを戻す
    });
  }

  animate() {
    // 画像の揺れを加える（左右と上下の揺れ）
    let shakeX = this.amplitudeX * Math.sin(Date.now() / 200); // 左右に揺れる
    let shakeY = this.amplitudeY * Math.cos(Date.now() / 200); // 上下に揺れる

    // スクロール位置に合わせて画像が上下に動く
    let scrollY = window.scrollY;

    // スクロール位置が下に行くほど画像が上に動くように調整
    let offsetY = -scrollY; // 下にスクロールすると画像は上に移動

    // 画像と名前の位置をスクロール量とともに反映
    this.img.style.transform = `translate(${this.x + shakeX}px, ${this.y + offsetY + shakeY}px)`; // yにスクロール量を加算
    this.nameDiv.style.transform = `translate(${this.x + shakeX}px, ${this.y + offsetY + shakeY}px)`; // 名前も一緒に動かす
  }
}