const apiKey = 'eccf8200898239c01b81626293da9f1d';

const cities = {
    'Niort': { lat: 46.3167, lon: -0.4667 },
    'Rio de Janeiro': { lat: -22.9068, lon: -43.1729 },
    'Reykjavik': { lat: 64.1355, lon: -21.8954 }
};

async function fetchWeather(city) {
    const { lat, lon } = cities[city];
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

function updateWeather(city, data) {
    const weatherElement = document.getElementById(`${city}-weather`);
    const iconElement = document.getElementById(`${city}-icon`);
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherElement.textContent = `${temperature}°, ${description}`;
    iconElement.src = icon;
}

async function afficheVille() {
    let nomVilleChoisie = document.getElementById("choixVille").value;
    let villes = document.getElementsByClassName("ville");

    for (let i = 0; i < villes.length; i++) {
        if (villes[i].id === nomVilleChoisie) {
            villes[i].style.display = "block";
            const weatherData = await fetchWeather(nomVilleChoisie);
            updateWeather(nomVilleChoisie, weatherData);
        } else {
            villes[i].style.display = "none";
        }
    }
}