const imageContainer = document.querySelector("#image-container");

let windowWidth = window.innerWidth; // 初期ウィンドウの幅を保持
let windowHeight = window.innerHeight; // 初期ウィンドウの高さを保持

window.addEventListener("scroll", function () {
  //スクロールの高さを取得
  let scroll = (window.scrollY / 100) * 50;

  if (scroll < 10) {
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

let here = [];
// スクロールイベントを監視
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY; // 現在のスクロール位置を取得
  // スクロール位置を表示
  this.document.querySelector("#display").textContent =
    `水深: ${Math.floor(scrollPosition /10
    )}M`;
  for( let g of here ) g.animate( scrollPosition );
});

console.log(place);
console.log(fish_data);
console.log(fish_data[place]);

let fish_name = [];
const f_name = document.querySelector("#fish_name");
for (let f of fish_data[place].fish) {
  fish_name.push(f.name);
  let ff = document.createElement("p");
  ff.innerText = f.name;
  f_name.appendChild(ff);
}
console.log(fish_name);


for (let g of fish_data[place].fish) {
  here.push(new group(g));
}
console.log(here);
