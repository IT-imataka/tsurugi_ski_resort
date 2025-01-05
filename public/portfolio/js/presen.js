document.addEventListener("DOMContentLoaded", () => {
  const vvvv = "cbbec0c2762c46c170be28e8812cea56";
  const form = document.getElementById("test");
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

  const getweather = (event) => {
    event.preventDefault();
    const usercity = document.getElementById("usercity").value;
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=${vvvv}&units=metric&lang=ja`;
    fetch(APIurl).then((res) => {
      if (!res.ok) {
        window.alert("正式名称で入力してください");
      } else {
        res
          .json()
          .then((data) => {
            console.log(data);
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const icon = document.querySelectorAll(".condition");
            document.getElementById("description").innerText = `${description}`;
            document.getElementById(
              "temperature"
            ).innerText = `${temperature}℃`;
            // const location = data.name;
            // if (usercity === location) {
            const Includewords = (text, words) =>
              words.some((word) => text.includes(word));
            const words = ["雲", "曇"];

            if (Includewords(description, words)) {
              const iconcloud = document.querySelector(".situation");
              document.getElementById("snow").innerText = "";
              icon.forEach((condition) => {
                condition.src = "./img/svg/weather/snowman.svg";
              });
              iconcloud.src = "./img/svg/weather/cloud.svg";
            } else if (description.includes("晴")) {
              const iconsun = document.querySelector(".situation");
              document.getElementById("snow").innerText = "";
              icon.forEach((condition) => {
                condition.src = "./img/svg/weather/snowman.svg";
              });
              iconsun.src = "./img/svg/weather/sun.svg";
            } else {
              if (description.includes("雨")) {
                const rainfall = data.rain["1h"];
                document.getElementById("snow").innerText = `${rainfall}mm`;
                icon.forEach((condition) => {
                  condition.src = "./img/svg/weather/rain.svg";
                });
                icon.src = "./img/svg/weather/rain.svg";
              } else if (description.includes("雪")) {
                const snowfall = data.snow["1h"];
                document.getElementById("snow").innerText = `${snowfall}cm`;
                icon.forEach((condition) => {
                  condition.src = "./img/svg/weather/snow.svg";
                });
              }
              // }
            }
            // else {
            //   window.alert("和名で入力してくれると嬉しいな");
            // }
          })
          .catch((error) => console.error("残念！エラーでした！", error));
        displayweather();
      }
    });
  };
  const displayweather = () => {
    usercity.value = "";
  };
  form.addEventListener("submit", getweather);
});
