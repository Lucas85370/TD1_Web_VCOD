// This file contains the JavaScript code that interacts with the OpenWeatherMap API.

const apiKey = 'eccf8200898239c01b81626293da9f1d'; // Replace with your OpenWeatherMap API key

document.getElementById('choixVille').addEventListener('change', afficheVille);

function afficheVille() {
    let nomVilleChoisie = document.getElementById("choixVille").value;
    let villes = document.getElementsByClassName("ville");
    
    for (let i = 0; i < villes.length; i++) {
        if (villes[i].id === nomVilleChoisie) {
            villes[i].style.display = "block";
            fetchWeatherData(nomVilleChoisie);
        } else {
            villes[i].style.display = "none";
        }
    }
}

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${villes}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const weatherContainer = document.getElementById('weatherData');
    weatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}