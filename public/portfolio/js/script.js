document.addEventListener("DOMContentLoaded", () => {
  const city = "toyama";
  const vvvv = "cbbec0c2762c46c170be28e8812cea56";
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${vvvv}&units=metric&lang=ja`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Tursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  const year = current.getFullYear();
  const day = current.getDay();
  const month = current.getMonth() + 1;
  const date = current.getDate();
  const today = days[day];

  document.getElementById("year").textContent = `${year}`;
  document.getElementById("day").textContent = `${today}`;
  document.getElementById("month").textContent = `${month}`;
  document.getElementById("date").textContent = `${date}`;

  fetch(APIurl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const icon = document.querySelectorAll(".condition");
      document.getElementById("description").innerText = `${description}`;
      document.getElementById("temperature").innerText = `${temperature}℃`;

      // function includeswords(text, words) {
      //   return words.some(function (word) {
      //     return text.includes(word);
      //   });
      // }
      // ↑　分解(後学のため残留決定)
      // ↓　実装
      const Includewords = (text, words) =>
        words.some((word) => text.includes(word));
      const words = ["雲", "曇"];

      if (Includewords(description, words)) {
        const iconcloud = document.querySelector(".situation");
        iconcloud.src = "./img/svg/weather/cloud.svg";
      } else if (description.includes("晴")) {
        const iconsun = document.querySelector(".situation");
        iconsun.src = "./img/svg/weather/sun.svg";
      } else {
        if (description.includes("雨")) {
          const rainfall = data.rain["1h"];
          document.getElementById("snow").innerText = `${rainfall}mm`;
          icon.forEach((condition) => {
            condition.src = "./img/svg/weather/rain.svg";
          });
          icon.src = "./img/svg/weather/rain.svg";
        } else {
          const snowfall = data.snow["1h"];
          document.getElementById("snow").innerText = `${snowfall}cm`;
          icon.forEach((condition) => {
            condition.src = "./img/svg/weather/snow.svg";
          });
        }
      }
    })
    .catch((error) => console.error("エラーだよ", error));
});
// 配列の各要素に指定された要素があるかを検索する関数
// function includeswords(words, target) {
//   return words.some(function (el) {
//     return target.includes(el);
//   });
// };
// ↓　アロー関数による省略系
// const includewords = (array, target) =>
//   array.some(el => target.includes(el));
