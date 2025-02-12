// JavaScript code for fetching weather data from OpenWeatherMap API

const apiKey = 'eccf8200898239c01b81626293da9f1d';

const cities = {
    'Niort': { lat: 46.3167, lon: -0.4667 },
    'Paris': { lat: 48.8566, lon: 2.3522 },
    'Lyon': { lat: 45.7640, lon: 4.8357 }
};

document.getElementById('choixVille').addEventListener('change', afficheVille);

function afficheVille() {
    const nomVilleChoisie = document.getElementById('choixVille').value;
    const { lat, lon } = cities[nomVilleChoisie];

    fetchWeatherData(lat, lon);
}

function fetchWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => updateWeatherInfo(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function updateWeatherInfo(data) {
    const weatherDiv = document.getElementById('weatherInfo');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;

    weatherDiv.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Description: ${description}</p>
    `;
}