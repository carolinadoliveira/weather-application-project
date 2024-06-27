function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatedDayTime = days[day];
  return `${formatedDayTime} ${hours}:${minutes}`;
}

let currentDayTime = document.querySelector("#current-day-time");
let now = new Date();
currentDayTime.innerHTML = formatDate(now);

// Homework week 5

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  console.log(searchInputElement.value);
  searchCity(searchInputElement.value);
}

function searchCity(city) {
  let apiKey = "946t6o527b5050f9feb463bc5e95f84a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
