import { renderCurrentWeather } from "./dom";

const API_KEY = '7b189ae7eb0f8f6f66ad2f1526a6bd31';

async function fetchGeoCoords(input) {
    try {
        const [city, state] = input.split(',');
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()},${state.trim()},US&appid=${API_KEY}`)
        const obj = await response.json();
        const coords = [obj[0].lat, obj[0].lon];
        return coords;
    } catch (err) {
        alert('Type in something valid');
    }
}

async function fetchCurrentWeatherData(e) {
    if (e.key !== 'Enter') return;
    try{
        const [lat, lon] = await fetchGeoCoords(e.target.value);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`);
        const data = await response.json();
        renderCurrentWeather(data);
    } catch (err) {
        alert ('Could not retrieve data');
    }
}

export {fetchCurrentWeatherData}