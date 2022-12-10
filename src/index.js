import { currentWeatherData } from "./json/current-example";

function getCurrentTemp(data){
    return Math.round(data.main.temp);
}