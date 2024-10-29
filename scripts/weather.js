const weather = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('#desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.18&lon=-46.89&units=imperial&appid=5bb61bc6e87c373c3f3bb955995be57e';

async function apiFetch() {
  const response = await fetch(url);
  const data = await response.json();
  displayResults(data);
}

function displayResults(data) {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt',"Weather");
  weatherIcon.setAttribute('width',"40");
  weather.innerHTML = `${data.main.temp}&deg;F -`;
  captionDesc.textContent = `${desc}`;

}

apiFetch()