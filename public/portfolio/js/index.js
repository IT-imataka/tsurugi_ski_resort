// ↓ イベントターゲットのデバック用
//   console.log(event.target);
// ↓ クラスリスト確認用
//   console.log(button.classList);

// ↓　グリーンシーズン切り替え用のトグルボタン
const toggle = document.querySelectorAll(".toggle");
const label = document.getElementById("label");
let currentpage = 0;

toggle.forEach((event) =>
  label.addEventListener("click", () => {
    event.classList.toggle("active");
    currentpage = 1;
    if (currentpage === 1) {
      window.location.href = "/green.html";
      currentpage = 0;
    } else {
      window.history.back();
      currentpage = 1;
    }
  })
);

// ↓ ハンバーガー
const spbtn = document.getElementById("spbtn");

spbtn.addEventListener("click", () => {
  const component = document.querySelectorAll(".component");
  component.forEach((event) => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

// ↓　絞り込み
const filterbtn = document.querySelectorAll(".filterbtn");
const jump = document.querySelectorAll(".jump");
// console.log(filterbtn);
const contents = document.querySelectorAll(".contents");
const topics = document.querySelectorAll(".topic");
// console.log(topics);

const filter = (event) => {
  // ↓　ボタンのDOM操作
  // フッターからジャンプした際と絞り込みボタンとの分岐を追記
  if (event.target.classList.contains("jump")) {
    const tag_area = document.querySelectorAll(".tag_area");
    tag_area.forEach((element) => {
      // console.log(element.dataset.name);
      element.dataset.name === event.target.dataset.name
        ? element.classList.add("active")
        : element.classList.remove("active");
    });
  } else {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
  }
  // ↓　クラスが付いた時の対象要素の確認用
  // console.log(event.target);
  // ↓　クラスが付いた時の対象要素のデータの名前の確認用
  // console.log(event.target.dataset.name);

  contents.forEach((display) => {
    // ↓　現れるコンテンツデータの名前確認用
    // console.log(display.dataset.name);
    if (display.dataset.name === event.target.dataset.name) {
      document.querySelector(".display").classList.remove("display");
      display.classList.add("display");
    }
  });

  topics.forEach((display) => {
    // console.log(display.dataset.name);
    if (display.dataset.name === event.target.dataset.name) {
      display.classList.add("appear");
      display.classList.remove("hide");
    } else if (event.target.dataset.name === "all") {
      display.classList.add("all");
    } else {
      display.classList.remove("appear", "all");
      display.classList.add("hide");
    }
  });
};

filterbtn.forEach((data) => {
  data.addEventListener("click", filter);
});
