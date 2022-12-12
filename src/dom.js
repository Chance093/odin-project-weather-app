import { fetchCurrentWeatherData } from "./api";
import {getCurrentTemp,
    getCurrentHighTemp,
    getCurrentLowTemp,
    getFeelsLikeTemp,
    getHumidityPercentage,
    getChanceOfRainPercentage,
    getWindSpeed} from "./parseData";

    
function renderCurrentWeather(data) {
    const currentTemp = document.querySelector('.current-temp');
    const currentMinMax = document.querySelector('.current-min-max');
    const feelsLike = document.querySelector('.feels-like-value');
    const humidity = document.querySelector('.humidity-value');
    const cor = document.querySelector('.cor-value');
    const wind = document.querySelector('.wind-value');
    
    currentTemp.innerHTML = `${getCurrentTemp(data)}&deg;`;
    currentMinMax.innerHTML = `H: ${getCurrentHighTemp(data)}&deg; L: ${getCurrentLowTemp(data)}&deg;`;
    feelsLike.innerHTML = `${getFeelsLikeTemp(data)}&deg;`;
    humidity.textContent = `${getHumidityPercentage(data)}%`;
    cor.textContent = `${getChanceOfRainPercentage(data)}%`;
    wind.textContent = `${getWindSpeed(data)} mph`;
}

export {renderCurrentWeather}