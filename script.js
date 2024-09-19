document.getElementById('fetch-weather').addEventListener('click', fetchWeather);  

function fetchWeather() {  
    const cityInput = document.getElementById('city-input').value.trim();  
    if (cityInput === "") {  
        alert("Please enter a city name.");  
        return;  
    }  

    const apiKey = 'bcf09a8e71fb453c24c6a976189e37f3'; // Replace with your OpenWeatherMap API key  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;  

    fetch(apiUrl)  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('City not found or Network response was not ok');  
            }  
            return response.json();  
        })  
        .then(data => {  
            displayWeather(data);  
        })  
        .catch(error => {  
            console.error('There was a problem with the fetch operation:', error);  
            alert(error.message);  
        });  
}  

function displayWeather(data) {  
    const location = `${data.name}, ${data.sys.country}`;  
    const temperature = `${Math.round(data.main.temp)}°C`;  
    const description = data.weather[0].description;  
    const humidity = `Humidity: ${data.main.humidity}%`;  
    const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;  

    document.getElementById('location').innerText = location;  
    document.getElementById('temperature').innerText = temperature;  
    document.getElementById('description').innerText = `Conditions: ${description}`;  
    document.getElementById('humidity').innerText = humidity;  
    document.getElementById('wind-speed').innerText = windSpeed;  
}document.getElementById('fetch-weather').addEventListener('click', fetchWeather);  

function fetchWeather() {  
    const cityInput = document.getElementById('city-input').value.trim();  
    if (cityInput === "") {  
        alert("Please enter a city name.");  
        return;  
    }  

    const apiKey = 'bcf09a8e71fb453c24c6a976189e37f3'; // Replace with your OpenWeatherMap API key  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;  

    fetch(apiUrl)  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('City not found or Network response was not ok');  
            }  
            return response.json();  
        })  
        .then(data => {  
            displayWeather(data);  
        })  
        .catch(error => {  
            console.error('There was a problem with the fetch operation:', error);  
            alert(error.message);  
        });  
}  

function displayWeather(data) {  
    const location = `${data.name}, ${data.sys.country}`;  
    const temperature = `${Math.round(data.main.temp)}°C`;  
    const description = data.weather[0].description;  
    const humidity = `Humidity: ${data.main.humidity}%`;  
    const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;  

    document.getElementById('location').innerText = location;  
    document.getElementById('temperature').innerText = temperature;  
    document.getElementById('description').innerText = `Conditions: ${description}`;  
    document.getElementById('humidity').innerText = humidity;  
    document.getElementById('wind-speed').innerText = windSpeed;  
}