import { fetchWeatherData } from "./api";


const input = document.querySelector('input');
input.addEventListener('keydown', fetchWeatherData);