import {format, addDays} from "date-fns";

function sortByDate(data) {
    const dayOne = [];
    const dayTwo = [];
    const dayThree = [];
    const dayFour = [];
    const dayFive = [];
    data.list.forEach(fc => {
        const currentDate = fc.dt_txt.split(' ')[0];
        switch(currentDate){
            case format(addDays(new Date(), 1), 'yyyy-MM-dd'):
                dayOne.push(fc);
                break;
            case format(addDays(new Date(), 2), 'yyyy-MM-dd'):
                dayTwo.push(fc);
                break;
            case format(addDays(new Date(), 3), 'yyyy-MM-dd'):
                dayThree.push(fc);
                break;
            case format(addDays(new Date(), 4), 'yyyy-MM-dd'):
                dayFour.push(fc);
                break;
            case format(addDays(new Date(), 5), 'yyyy-MM-dd'):
                dayFive.push(fc);
                break;
        }
    })
    return [dayOne, dayTwo, dayThree, dayFour, dayFive];
}

function getForecastHighTemps(data) {
    const sorted = sortByDate(data);
    const highTemps = [];
    sorted.forEach(arr => {
        arr.sort((a, b) => a.main.temp - b.main.temp);
        highTemps.push(Math.round(arr[arr.length - 1].main.temp));
    })
    return highTemps;
}

function getForecastLowTemps(data) {
    const sorted = sortByDate(data);
    const lowTemps = [];
    sorted.forEach(arr => {
        arr.sort((a, b) => b.main.temp - a.main.temp);
        lowTemps.push(Math.round(arr[arr.length - 1].main.temp));
    })
    return lowTemps;
}

function getForecastWeatherImgSrc(data) {
    const sorted = sortByDate(data);
    const sources = [];
    sorted.forEach(arr => {
        const weather = arr[0].weather[0].main;
        switch(weather) {
            case 'Thunderstorm':
                sources.push('../src/imgs/thunderstorm.png');
                break;
            case 'Drizzle':
                sources.push('../src/imgs/drizzle.png');
                break;
            case 'Rain':
                sources.push('../src/imgs/rain.png');
                break;
            case 'Snow':
                sources.push('../src/imgs/snow.png');
                break;
            case 'Clear':
                sources.push('../src/imgs/clear.png');
                break;
            default:
                sources.push('../src/imgs/clouds.png');
        }
    });
    return sources;
}

export {getForecastHighTemps, getForecastLowTemps, getForecastWeatherImgSrc}