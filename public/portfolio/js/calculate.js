document.addEventListener("DOMContentLoaded", () => {
  const checkbtn = document.getElementById("calculate");
  // 　↓　オブジェクトを参照した方法
  // const priceMap = {
  //   "1日券": { adult: 4500, child: 2000 },
  //   "4時間券": { adult: 3500, child: 2500 },
  //   "1回券": { adult: 300, child: 200 },
  //   回数券: { adult: 2700, child: 1800 },
  //   "2回券": { adult: 8900, child: 4200 },
  //   シーズン券: { adult: 50000, child: 30000 },
  // };
  // const calculate = () => {
  //   let totalAll = 0;
  //   for (let i = 1; i <= 3; i++) {
  //     const age = document.querySelector(`input[name = "age${i}"]`).value;
  //     const people = document.querySelector(`input[name = "people${i}"]`).value;
  //     const ticket = document.querySelector(
  //       `select[name = "ticket${i}"]`
  //     ).value;
  //     let totalfield = document.querySelector(`input[name = "total${i}"]`);
  //     if (age && people) {
  //       let price = age > 12 ? priceMap[ticket].adult : priceMap[ticket].child;
  //       let total = price * people;
  //       let inttotal = parseFloat(total);
  //       totalfield.value = `${inttotal}円`;
  //       totalAll = totalAll + inttotal;
  //       document.querySelector(".totalAll").value = `${totalAll}円`;
  //     } else {
  //       totalfield.value = "";
  //     }
  //     // ↓　三項演算子使わずに頑張った
  //     // if (age && people) {
  //     //   let adultPrice = priceMap[ticket].adult;
  //     //   let childPrice = priceMap[ticket].child;
  //     //   if (age > 12) {
  //     //     let adultTotal = adultPrice * people;
  //     //     totalfield.value = `${parseFloat(adultTotal)}円`;
  //     //   } else {
  //     //     let childTotal = childPrice * people;
  //     //     totalfield.value = `${parseFloat(childTotal)}円`;
  //     //   }
  //     //   totalAll = totalAll + parseFloat(totalfield.value);
  //     //   console.log(totalAll);
  //     //   document.querySelector(".totalAll").value = `${totalAll}円`;
  //     // } else {
  //     //   totalfield.value = "";
  //     // }
  //   }
  // };

  // ↓　datasetを用いた配列による計算
  const calculate = () => {
    let totalAll = 0;
    for (let i = 1; i <= 3; i++) {
      const age = document.querySelector(`input[name="age${i}"]`).value;
      const people = document.querySelector(`input[name="people${i}"]`).value;
      const tickettype = document.querySelector(`select[name= "ticket${i}"]`);
      const totalfield = document.querySelector(`input[name= "total${i}"]`);
      // ↓　これでも取得できたけど長いから変数にいれよう
      // console.log(
      //   parseFloat(tickettype.options[tickettype.selectedIndex].dataset.adult)
      // );
      // console.log(tickettype.options);(返り値はHTMLoptionsコレクション HTMLコレクションとは違う)
      const currentOption = tickettype.options[tickettype.selectedIndex];
      // ↓　ブラケットの中にプロパティは使える これで動的に参照できる(知らなかった)
      let adultPrice = parseFloat(currentOption.dataset.adult);
      // ↓　getAttributeメソッドを使った取り出し方(知らなかった)
      // let adultPrice = parseFloat(currentOption.getAttribute("data-adult"));
      let childPrice = parseFloat(currentOption.dataset.child);
      if (age && people) {
        let price = age >= 12 ? adultPrice : childPrice;
        let total = price * people;
        totalfield.value = `${total}円`;
        totalAll += total;
        document.querySelector(".totalAll").value = `${totalAll}円`;
      } else {
        totalfield.value = "";
      }
    }
  };
  checkbtn.addEventListener("click", calculate);
});

// ↓ これは取得したoptionを配列に変換してforEachで回そうと迷走した結果

// let options = tickettype.children;
// const arrayOption = Array.from(options);
// // console.log(arrayOption);
// arrayOption.forEach((options, index) => {
//   let adultPrice = arrayOption[1].dataset.adult;
//   // console.log(adultPrice);

// ↓ 金額のtdタグにdataset属性値入れて配列で頑張ろうとした結果

// const adults = document.querySelectorAll(".adult");
// const children = document.querySelectorAll(".child");
// const arrayAdult = [];
// const arrayChildren = [];
// const tickets = document.querySelector(`select[name*= "ticket"]`).options;
// const tickettype = tickets.innerText;
// adults.forEach((adultData) => {
// const adultValue = arrayAdult.push(adultData.dataset.value);
// ↓ pushした回数？？？ あの数字はなんだ
// console.log(adultValue);
// });
// children.forEach((childData) => {
//   arrayChildren.push(childData.dataset.value);
// });
// console.log(arrayAdult);
// console.log(arrayChildren);

// ↓ nodelistが空になる　なんで
// adults.forEach((adultData) => {
//   const data = adultData.dataset.value;
//   console.log(data);
//   const adultValue = arrayAdult.push(data);
//   console.log(adultValue);
//   // console.log(adultvalues);
// });
