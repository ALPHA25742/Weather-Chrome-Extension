let kelvintocelcius = (x) => {
  return Math.round(x - 273.15);
};
let key='49cf3721193a77014b33ee2f1d79191b'
const currentweather = async () => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${key}`
  );
  return await response.json();
};
currentweather().then((data) => {
  let location = document.querySelector(".location");
  let icon = document.querySelector(".icon");
  let highCW = document.querySelector(".highCW");
  let lowCW = document.querySelector(".lowCW");
  let speed = document.querySelector(".speed");
  let direction = document.querySelector(".direction");
  let humidity = document.querySelector(".humidity");

  location.textContent = data.name;
  icon.innerHTML = `<img src="${data.weather.icon}">`;
  highCW.textContent = kelvintocelcius(data.main.temp_max);
  lowCW.textContent = kelvintocelcius(data.main.temp_min);
  speed.textContent = data.wind.speed;
  direction.textContent = data.wind.deg;
  humidity.textContent = data.main.humidity;

  var latitude=data.coord.lat
  var longitude=data.coord.lon

  return latitude,longitude
});

const hourlyweather = async () => {

  let response=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitutude}&lon={lon}&exclude={part}&appid=${key}`)
  return await response.json()
};
hourlyweather().then()

