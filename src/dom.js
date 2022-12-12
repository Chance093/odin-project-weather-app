import {getCurrentTemp,
    getWeatherImgSrc,
    getCurrentHighTemp,
    getCurrentLowTemp,
    getFeelsLikeTemp,
    getHumidityPercentage,
    getChanceOfRainPercentage,
    getWindSpeed} from "./parse/currentData";
import { getForecastHighTemps, 
    getForecastLowTemps, 
    getForecastWeatherImgSrc } from "./parse/forecastData";

    
function renderCurrentWeather(data) {
    const currentTemp = document.querySelector('.current-temp');
    const currentWeather = document.querySelector('.current-weather');
    const currentMinMax = document.querySelector('.current-min-max');
    const feelsLike = document.querySelector('.feels-like-value');
    const humidity = document.querySelector('.humidity-value');
    const cor = document.querySelector('.cor-value');
    const wind = document.querySelector('.wind-value');
    
    currentTemp.innerHTML = `${getCurrentTemp(data)}&deg;`;
    currentWeather.src = getWeatherImgSrc(data);
    currentMinMax.innerHTML = `H: ${getCurrentHighTemp(data)}&deg; L: ${getCurrentLowTemp(data)}&deg;`;
    feelsLike.innerHTML = `${getFeelsLikeTemp(data)}&deg;`;
    humidity.textContent = `${getHumidityPercentage(data)}%`;
    cor.textContent = `${getChanceOfRainPercentage(data)}%`;
    wind.textContent = `${getWindSpeed(data)} mph`;
}

function renderForecastWeather(data) {
    const forecastWeather = document.querySelectorAll('.forecast-weather');
    const forecastMax = document.querySelectorAll('.forecast-max');
    const forecastMin = document.querySelectorAll('.forecast-min');
    const sources = getForecastWeatherImgSrc(data);
    const highTemps = getForecastHighTemps(data);
    const lowTemps = getForecastLowTemps(data);

    forecastWeather.forEach((img, i) => img.src = sources[i]);
    forecastMax.forEach((hT, i) => hT.innerHTML = `H: ${highTemps[i]}&deg;`);
    forecastMin.forEach((lT, i) => lT.innerHTML = `L: ${lowTemps[i]}&deg;`);
}

export {renderCurrentWeather, renderForecastWeather}