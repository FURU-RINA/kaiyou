// 数値と画像を表示する要素の取得
let displayElement = document.getElementById("display");
let imageElement = document.getElementById("image");

window.addEventListener("scroll", function () {
  //スクロールの高さを取得
  let scroll = (window.scrollY / 100) * 50;

  if (scroll < 50) {
    document.body.style.backgroundColor = "#e0ffff";
  } else if (scroll < 300) {
    document.body.style.backgroundColor = "#00bfff";
  } else if (scroll < 500) {
    document.body.style.backgroundColor = "#0091EA";
  } else if (scroll < 1000) {
    document.body.style.backgroundColor = "#191970";
  } else {
    document.body.style.backgroundColor = "#f0ffff";
  }
});
// スクロールイベントを監視
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY; // 現在のスクロール位置を取得
  // スクロール位置を表示
  displayElement.textContent = `水深: ${Math.floor((scrollPosition / 100) )}M`;
});

// 4つの画像配列を作成（それぞれ異なる動きに設定）
const imagesLeftToRight = ["isidaiimg2.png", "mahazeimg2.png"]; // 左→右に動く画像のパス（配列1）
const imagesRightToLeft = [
  "isidaiimg.png",
  "mebaruimg.png",
  "mahazeimg.png",
  "sabaimg.png",
]; // 右→左に動く画像のパス（配列1）

const imageData = [
  {
    speed: 2,
    amplitudeX: 30,
    amplitudeY: 20,
  },
  {
    speed: 2,
    amplitudeX: 30,
    amplitudeY: 20,
  },
]; // 各画像の設定

const numberOfImages = 10; // 表示する画像の数をここで変更
const imageContainer = document.getElementById("image-container");

let windowWidth = window.innerWidth; // 初期ウィンドウの幅を保持
let windowHeight = window.innerHeight; // 初期ウィンドウの高さを保持

// 画像をランダムに配置して動かす
for (let i = 0; i < numberOfImages; i++) {
  const img = document.createElement("img");
  img.classList.add("moving-image");

  // 左→右の画像配列と右→左の画像配列からランダムに選択
  let randomImageArray =
    Math.random() < 0.5 ? imagesLeftToRight : imagesRightToLeft;
  let randomImageIndex = Math.floor(Math.random() * randomImageArray.length); // ランダムな画像選択
  img.src = randomImageArray[randomImageIndex];
  imageContainer.appendChild(img);

  const data = imageData[randomImageIndex % imageData.length];

  // 初期ランダム位置 (範囲を指定)
  let x = Math.random() * (windowWidth - 200) + 100; // x: 100px 〜 (windowWidth - 100px) の範囲
  let y = Math.random() * (windowHeight - 500) + 1000; // y: 100px 〜 (windowHeight - 100px) の範囲

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  let ampX = data.amplitudeX;
  let ampY = data.amplitudeY;
  let speed = data.speed;

  // 画像が画面外に出たら新しいランダムな位置にリセット
  function resetPosition() {
    x = Math.random() * (windowWidth - 150) + 50; // x: 100px 〜 (windowWidth - 100px) の範囲
    y = Math.random() * (windowHeight - 1000) + 2000; // y: 100px 〜 (windowHeight - 100px) の範囲

    // 新しい画像のソースをランダムに選択
    randomImageArray =
      Math.random() < 0.5 ? imagesLeftToRight : imagesRightToLeft;
    randomImageIndex = Math.floor(Math.random() * randomImageArray.length); // 画像のインデックスを更新
    img.src = randomImageArray[randomImageIndex]; // 新しい画像をランダムにセット

    // 新しい動きの方向をランダムに決定
    direction =
      randomImageArray === imagesLeftToRight
        ? "left-to-right"
        : "right-to-left";

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  }

  // 画像が左右に動く方向をランダムに決定（配列ごとに動きが違う）
  let direction =
    randomImageArray === imagesLeftToRight ? "left-to-right" : "right-to-left";

  function animate() {
    let rect = img.getBoundingClientRect();

    // 動きの方向に応じて位置を調整
    if (direction === "left-to-right") {
      x += speed;
      if (x > windowWidth) {
        resetPosition(); // 画面外に出たら新しい位置にリセット
      }
    } else if (direction === "right-to-left") {
      x -= speed;
      if (x + rect.width < 0) {
        resetPosition(); // 画面外に出たら新しい位置にリセット
      }
    }

    // 画像の揺れを加える（左右と上下の揺れ）
    let shakeX = ampX * Math.sin(Date.now() / 200); // 左右に揺れる
    let shakeY = ampY * Math.cos(Date.now() / 200); // 上下に揺れる

    // スクロール位置に合わせて画像が上下に動く
    let scrollY = window.scrollY;

    // スクロール位置が下に行くほど画像が上に動くように調整
    let offsetY = -scrollY; // 下にスクロールすると画像は上に移動

    // 画像の位置をスクロール量とともに反映
    img.style.transform = `translate(${x + shakeX}px, ${y + offsetY + shakeY}px)`; // yにスクロール量を加算

    requestAnimationFrame(animate); // アニメーションをループさせる
  }

  // スクロール位置が1000px以上で画像を表示
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
      img.style.display = "block"; // 1000px以上スクロールしたら画像を表示
    }
  });

  animate(); // アニメーションを開始
}

// ウィンドウのリサイズに対応しない
window.addEventListener("resiSze", () => {
  windowWidth = window.innerWidth; // サイズ固定
  windowHeight = window.innerHeight; // サイズ固定
});
