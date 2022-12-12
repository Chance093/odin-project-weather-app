import { currentWeatherData } from "./json/current-example";
import { forecastWeatherData } from "./json/forecast-example";
import { fetchWeatherData } from "./api";


const input = document.querySelector('input');
input.addEventListener('keydown', fetchWeatherData);