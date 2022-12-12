/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


const API_KEY = '7b189ae7eb0f8f6f66ad2f1526a6bd31';

async function fetchGeoCoords(input) {
    try {
        const [city, state] = input.split(',');
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()},${state.trim()},US&appid=${API_KEY}`, {mode: 'cors'})
        const obj = await response.json();
        const coords = [obj[0].lat, obj[0].lon];
        return coords;
    } catch (err) {
        alert('Type in something valid');
    }
}

async function fetchWeatherData(e) {
    if (e.key !== 'Enter') return;
    try{
        const [lat, lon] = await fetchGeoCoords(e.target.value);
        const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const responses = await Promise.all([fetch(url1), fetch(url2)]);
        const data1 = await responses[0].json();
        const data2 = await responses[1].json();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderCurrentWeather)(data1);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderForecastWeather)(data2);
    } catch (err) {
        alert ('Could not retrieve data');
    }
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCurrentWeather": () => (/* binding */ renderCurrentWeather),
/* harmony export */   "renderForecastWeather": () => (/* binding */ renderForecastWeather)
/* harmony export */ });
/* harmony import */ var _parse_currentData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse/currentData */ "./src/parse/currentData.js");
/* harmony import */ var _parse_forecastData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/forecastData */ "./src/parse/forecastData.js");



    
function renderCurrentWeather(data) {
    const currentTemp = document.querySelector('.current-temp');
    const currentWeather = document.querySelector('.current-weather');
    const currentMinMax = document.querySelector('.current-min-max');
    const feelsLike = document.querySelector('.feels-like-value');
    const humidity = document.querySelector('.humidity-value');
    const cor = document.querySelector('.cor-value');
    const wind = document.querySelector('.wind-value');
    
    currentTemp.innerHTML = `${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getCurrentTemp)(data)}&deg;`;
    currentWeather.src = (0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getWeatherImgSrc)(data);
    currentMinMax.innerHTML = `H: ${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getCurrentHighTemp)(data)}&deg; L: ${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getCurrentLowTemp)(data)}&deg;`;
    feelsLike.innerHTML = `${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getFeelsLikeTemp)(data)}&deg;`;
    humidity.textContent = `${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getHumidityPercentage)(data)}%`;
    cor.textContent = `${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getChanceOfRainPercentage)(data)}%`;
    wind.textContent = `${(0,_parse_currentData__WEBPACK_IMPORTED_MODULE_0__.getWindSpeed)(data)} mph`;
}

function renderForecastWeather(data) {
    const forecastWeather = document.querySelectorAll('.forecast-weather');
    const forecastMax = document.querySelectorAll('.forecast-max');
    const forecastMin = document.querySelectorAll('.forecast-min');
    const sources = (0,_parse_forecastData__WEBPACK_IMPORTED_MODULE_1__.getForecastWeatherImgSrc)(data);
    const highTemps = (0,_parse_forecastData__WEBPACK_IMPORTED_MODULE_1__.getForecastHighTemps)(data);
    const lowTemps = (0,_parse_forecastData__WEBPACK_IMPORTED_MODULE_1__.getForecastLowTemps)(data);

    forecastWeather.forEach((img, i) => img.src = sources[i]);
    forecastMax.forEach((hT, i) => hT.innerHTML = `H: ${highTemps[i]}&deg;`);
    forecastMin.forEach((lT, i) => lT.innerHTML = `L: ${lowTemps[i]}&deg;`);
}



/***/ }),

/***/ "./src/json/current-example.js":
/*!*************************************!*\
  !*** ./src/json/current-example.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeatherData": () => (/* binding */ currentWeatherData)
/* harmony export */ });
const currentWeatherData = {
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
};



/***/ }),

/***/ "./src/json/forecast-example.js":
/*!**************************************!*\
  !*** ./src/json/forecast-example.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastWeatherData": () => (/* binding */ forecastWeatherData)
/* harmony export */ });
const forecastWeatherData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1661871600,
        "main": {
          "temp": 296.76,
          "feels_like": 296.98,
          "temp_min": 296.76,
          "temp_max": 297.87,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 933,
          "humidity": 69,
          "temp_kf": -1.11
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.62,
          "deg": 349,
          "gust": 1.18
        },
        "visibility": 10000,
        "pop": 0.32,
        "rain": {
          "3h": 0.26
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-08-30 15:00:00"
      },
      {
        "dt": 1661882400,
        "main": {
          "temp": 295.45,
          "feels_like": 295.59,
          "temp_min": 292.84,
          "temp_max": 295.45,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 71,
          "temp_kf": 2.61
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.97,
          "deg": 157,
          "gust": 3.39
        },
        "visibility": 10000,
        "pop": 0.33,
        "rain": {
          "3h": 0.57
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-08-30 18:00:00"
      },
      {
        "dt": 1661893200,
        "main": {
          "temp": 292.46,
          "feels_like": 292.54,
          "temp_min": 290.31,
          "temp_max": 292.46,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 80,
          "temp_kf": 2.15
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 2.66,
          "deg": 210,
          "gust": 3.58
        },
        "visibility": 10000,
        "pop": 0.7,
        "rain": {
          "3h": 0.49
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-08-30 21:00:00"
      },
      {
        "dt": 1662292800,
        "main": {
          "temp": 294.93,
          "feels_like": 294.83,
          "temp_min": 294.93,
          "temp_max": 294.93,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 935,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.14,
          "deg": 17,
          "gust": 1.57
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-09-04 12:00:00"
      }
    ],
    "city": {
      "id": 3163858,
      "name": "Zocca",
      "coord": {
        "lat": 44.34,
        "lon": 10.99
      },
      "country": "IT",
      "population": 4593,
      "timezone": 7200,
      "sunrise": 1661834187,
      "sunset": 1661882248
    }
}



/***/ }),

/***/ "./src/parse/currentData.js":
/*!**********************************!*\
  !*** ./src/parse/currentData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChanceOfRainPercentage": () => (/* binding */ getChanceOfRainPercentage),
/* harmony export */   "getCurrentHighTemp": () => (/* binding */ getCurrentHighTemp),
/* harmony export */   "getCurrentLowTemp": () => (/* binding */ getCurrentLowTemp),
/* harmony export */   "getCurrentTemp": () => (/* binding */ getCurrentTemp),
/* harmony export */   "getFeelsLikeTemp": () => (/* binding */ getFeelsLikeTemp),
/* harmony export */   "getHumidityPercentage": () => (/* binding */ getHumidityPercentage),
/* harmony export */   "getWeatherImgSrc": () => (/* binding */ getWeatherImgSrc),
/* harmony export */   "getWindSpeed": () => (/* binding */ getWindSpeed)
/* harmony export */ });
function getCurrentTemp(data){
    return Math.round(data.main.temp);
}

function getWeatherImgSrc(data) {
    const weather = data.weather[0].main;
    switch(weather) {
        case 'Thunderstorm':
            return '../src/imgs/thunderstorm.png';
        case 'Drizzle':
            return '../src/imgs/drizzle.png';
        case 'Rain':
            return '../src/imgs/rain.png';
        case 'Snow':
            return '../src/imgs/snow.png';
        case 'Clear':
            return '../src/imgs/clear.png';
        default:
            return '../src/imgs/clouds.png';
    }
}

function getCurrentHighTemp(data){
    return Math.round(data.main.temp_max) + 2;
}

function getCurrentLowTemp(data){
    return Math.round(data.main.temp_min) - 2;
}

function getFeelsLikeTemp(data) {
    return Math.round(data.main.feels_like);
}

function getHumidityPercentage(data) {
    return Math.round(data.main.humidity);
}

function getChanceOfRainPercentage(data) {
    const weather = data.weather[0].main;
    const condition = data.weather[0].description;
    let cor = 0;
    if (weather === 'Drizzle' || weather === 'Thunderstorm') {
        cor = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
    } else if (weather === 'Rain') {
        if(condition === 'light rain' || condition === 'moderate rain') {
            cor = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
        } else {
            cor = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        }
    }
    return cor;
}

function getWindSpeed(data) {
     return Math.round(data.wind.speed);
}



/***/ }),

/***/ "./src/parse/forecastData.js":
/*!***********************************!*\
  !*** ./src/parse/forecastData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecastHighTemps": () => (/* binding */ getForecastHighTemps),
/* harmony export */   "getForecastLowTemps": () => (/* binding */ getForecastLowTemps),
/* harmony export */   "getForecastWeatherImgSrc": () => (/* binding */ getForecastWeatherImgSrc)
/* harmony export */ });
function sortByDate(data) {
    let date = undefined;
    const dayOne = [];
    const dayTwo = [];
    const dayThree = [];
    const dayFour = [];
    const dayFive = [];
    data.list.forEach(fc => {
        const currentDate = fc.dt_txt.split(' ')[0];
        if(currentDate !== date){
            if (dayOne.length === 0) dayOne.push(fc);
            else if (dayTwo.length === 0) dayTwo.push(fc);
            else if (dayThree.length === 0) dayThree.push(fc);
            else if (dayFour.length === 0) dayFour.push(fc);
            else if (dayFive.length === 0) dayFive.push(fc);
            date = currentDate;
        } else {
            if (dayTwo.length === 0) dayOne.push(fc);
            else if (dayThree.length === 0) dayTwo.push(fc);
            else if (dayFour.length === 0) dayThree.push(fc);
            else if (dayFive.length === 0) dayFour.push(fc);
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_current_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/current-example */ "./src/json/current-example.js");
/* harmony import */ var _json_forecast_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/forecast-example */ "./src/json/forecast-example.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src/api.js");





const input = document.querySelector('input');
input.addEventListener('keydown', _api__WEBPACK_IMPORTED_MODULE_2__.fetchWeatherData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFlBQVksR0FBRyxhQUFhLFlBQVksUUFBUSxJQUFJLGFBQWE7QUFDeEo7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsSUFBSSxPQUFPLElBQUksd0JBQXdCLFFBQVE7QUFDM0gsNkVBQTZFLElBQUksT0FBTyxJQUFJLHdCQUF3QixRQUFRO0FBQzVIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQW9CO0FBQzVCLFFBQVEsMkRBQXFCO0FBQzdCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEI2QztBQUdjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0VBQWMsT0FBTyxLQUFLO0FBQ3pELHlCQUF5QixvRUFBZ0I7QUFDekMsb0NBQW9DLHNFQUFrQixPQUFPLE1BQU0sS0FBSyxxRUFBaUIsT0FBTyxLQUFLO0FBQ3JHLDZCQUE2QixvRUFBZ0IsT0FBTyxLQUFLO0FBQ3pELDhCQUE4Qix5RUFBcUIsT0FBTztBQUMxRCx5QkFBeUIsNkVBQXlCLE9BQU87QUFDekQsMEJBQTBCLGdFQUFZLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZFQUF3QjtBQUM1QyxzQkFBc0IseUVBQW9CO0FBQzFDLHFCQUFxQix3RUFBbUI7QUFDeEM7QUFDQTtBQUNBLHdEQUF3RCxhQUFhLEtBQUs7QUFDMUUsd0RBQXdELFlBQVksS0FBSztBQUN6RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQ3pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDRTtBQUNyQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2pzb24vY3VycmVudC1leGFtcGxlLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9qc29uL2ZvcmVjYXN0LWV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3BhcnNlL2N1cnJlbnREYXRhLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9wYXJzZS9mb3JlY2FzdERhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckN1cnJlbnRXZWF0aGVyLCByZW5kZXJGb3JlY2FzdFdlYXRoZXIgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbmNvbnN0IEFQSV9LRVkgPSAnN2IxODlhZTdlYjBmOGY2ZjY2YWQyZjE1MjZhNmJkMzEnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hHZW9Db29yZHMoaW5wdXQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW2NpdHksIHN0YXRlXSA9IGlucHV0LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHkudHJpbSgpfSwke3N0YXRlLnRyaW0oKX0sVVMmYXBwaWQ9JHtBUElfS0VZfWAsIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIGNvbnN0IG9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBjb29yZHMgPSBbb2JqWzBdLmxhdCwgb2JqWzBdLmxvbl07XHJcbiAgICAgICAgcmV0dXJuIGNvb3JkcztcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCdUeXBlIGluIHNvbWV0aGluZyB2YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGUpIHtcclxuICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IFtsYXQsIGxvbl0gPSBhd2FpdCBmZXRjaEdlb0Nvb3JkcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdXJsMSA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9JHtBUElfS0VZfWA7XHJcbiAgICAgICAgY29uc3QgdXJsMiA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7QVBJX0tFWX1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaCh1cmwxKSwgZmV0Y2godXJsMildKTtcclxuICAgICAgICBjb25zdCBkYXRhMSA9IGF3YWl0IHJlc3BvbnNlc1swXS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXNwb25zZXNbMV0uanNvbigpO1xyXG4gICAgICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyKGRhdGExKTtcclxuICAgICAgICByZW5kZXJGb3JlY2FzdFdlYXRoZXIoZGF0YTIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQgKCdDb3VsZCBub3QgcmV0cmlldmUgZGF0YScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2ZldGNoV2VhdGhlckRhdGF9IiwiaW1wb3J0IHtnZXRDdXJyZW50VGVtcCxcclxuICAgIGdldFdlYXRoZXJJbWdTcmMsXHJcbiAgICBnZXRDdXJyZW50SGlnaFRlbXAsXHJcbiAgICBnZXRDdXJyZW50TG93VGVtcCxcclxuICAgIGdldEZlZWxzTGlrZVRlbXAsXHJcbiAgICBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UsXHJcbiAgICBnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlLFxyXG4gICAgZ2V0V2luZFNwZWVkfSBmcm9tIFwiLi9wYXJzZS9jdXJyZW50RGF0YVwiO1xyXG5pbXBvcnQgeyBnZXRGb3JlY2FzdEhpZ2hUZW1wcywgXHJcbiAgICBnZXRGb3JlY2FzdExvd1RlbXBzLCBcclxuICAgIGdldEZvcmVjYXN0V2VhdGhlckltZ1NyYyB9IGZyb20gXCIuL3BhcnNlL2ZvcmVjYXN0RGF0YVwiO1xyXG5cclxuICAgIFxyXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlcicpO1xyXG4gICAgY29uc3QgY3VycmVudE1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW1pbi1tYXgnKTtcclxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlLXZhbHVlJyk7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS12YWx1ZScpO1xyXG4gICAgY29uc3QgY29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvci12YWx1ZScpO1xyXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXZhbHVlJyk7XHJcbiAgICBcclxuICAgIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IGAke2dldEN1cnJlbnRUZW1wKGRhdGEpfSZkZWc7YDtcclxuICAgIGN1cnJlbnRXZWF0aGVyLnNyYyA9IGdldFdlYXRoZXJJbWdTcmMoZGF0YSk7XHJcbiAgICBjdXJyZW50TWluTWF4LmlubmVySFRNTCA9IGBIOiAke2dldEN1cnJlbnRIaWdoVGVtcChkYXRhKX0mZGVnOyBMOiAke2dldEN1cnJlbnRMb3dUZW1wKGRhdGEpfSZkZWc7YDtcclxuICAgIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBgJHtnZXRGZWVsc0xpa2VUZW1wKGRhdGEpfSZkZWc7YDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Z2V0SHVtaWRpdHlQZXJjZW50YWdlKGRhdGEpfSVgO1xyXG4gICAgY29yLnRleHRDb250ZW50ID0gYCR7Z2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZShkYXRhKX0lYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtnZXRXaW5kU3BlZWQoZGF0YSl9IG1waGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0V2VhdGhlcihkYXRhKSB7XHJcbiAgICBjb25zdCBmb3JlY2FzdFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3Qtd2VhdGhlcicpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtbWF4Jyk7XHJcbiAgICBjb25zdCBmb3JlY2FzdE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1taW4nKTtcclxuICAgIGNvbnN0IHNvdXJjZXMgPSBnZXRGb3JlY2FzdFdlYXRoZXJJbWdTcmMoZGF0YSk7XHJcbiAgICBjb25zdCBoaWdoVGVtcHMgPSBnZXRGb3JlY2FzdEhpZ2hUZW1wcyhkYXRhKTtcclxuICAgIGNvbnN0IGxvd1RlbXBzID0gZ2V0Rm9yZWNhc3RMb3dUZW1wcyhkYXRhKTtcclxuXHJcbiAgICBmb3JlY2FzdFdlYXRoZXIuZm9yRWFjaCgoaW1nLCBpKSA9PiBpbWcuc3JjID0gc291cmNlc1tpXSk7XHJcbiAgICBmb3JlY2FzdE1heC5mb3JFYWNoKChoVCwgaSkgPT4gaFQuaW5uZXJIVE1MID0gYEg6ICR7aGlnaFRlbXBzW2ldfSZkZWc7YCk7XHJcbiAgICBmb3JlY2FzdE1pbi5mb3JFYWNoKChsVCwgaSkgPT4gbFQuaW5uZXJIVE1MID0gYEw6ICR7bG93VGVtcHNbaV19JmRlZztgKTtcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJDdXJyZW50V2VhdGhlciwgcmVuZGVyRm9yZWNhc3RXZWF0aGVyfSIsImNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHtcclxuICAgIFwiY29vcmRcIjoge1xyXG4gICAgICBcImxvblwiOiAxMC45OSxcclxuICAgICAgXCJsYXRcIjogNDQuMzRcclxuICAgIH0sXHJcbiAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiA1MDEsXHJcbiAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJtb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiMTBkXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiYmFzZVwiOiBcInN0YXRpb25zXCIsXHJcbiAgICBcIm1haW5cIjoge1xyXG4gICAgICBcInRlbXBcIjogMjk4LjQ4LFxyXG4gICAgICBcImZlZWxzX2xpa2VcIjogMjk4Ljc0LFxyXG4gICAgICBcInRlbXBfbWluXCI6IDI5Ny41NixcclxuICAgICAgXCJ0ZW1wX21heFwiOiAzMDAuMDUsXHJcbiAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgXCJodW1pZGl0eVwiOiA2NCxcclxuICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgXCJncm5kX2xldmVsXCI6IDkzM1xyXG4gICAgfSxcclxuICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgIFwid2luZFwiOiB7XHJcbiAgICAgIFwic3BlZWRcIjogMC42MixcclxuICAgICAgXCJkZWdcIjogMzQ5LFxyXG4gICAgICBcImd1c3RcIjogMS4xOFxyXG4gICAgfSxcclxuICAgIFwicmFpblwiOiB7XHJcbiAgICAgIFwiMWhcIjogMy4xNlxyXG4gICAgfSxcclxuICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgXCJhbGxcIjogMTAwXHJcbiAgICB9LFxyXG4gICAgXCJkdFwiOiAxNjYxODcwNTkyLFxyXG4gICAgXCJzeXNcIjoge1xyXG4gICAgICBcInR5cGVcIjogMixcclxuICAgICAgXCJpZFwiOiAyMDc1NjYzLFxyXG4gICAgICBcImNvdW50cnlcIjogXCJJVFwiLFxyXG4gICAgICBcInN1bnJpc2VcIjogMTY2MTgzNDE4NyxcclxuICAgICAgXCJzdW5zZXRcIjogMTY2MTg4MjI0OFxyXG4gICAgfSxcclxuICAgIFwidGltZXpvbmVcIjogNzIwMCxcclxuICAgIFwiaWRcIjogMzE2Mzg1OCxcclxuICAgIFwibmFtZVwiOiBcIlpvY2NhXCIsXHJcbiAgICBcImNvZFwiOiAyMDBcclxufTtcclxuXHJcbmV4cG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IiwiY29uc3QgZm9yZWNhc3RXZWF0aGVyRGF0YSA9IHtcclxuICAgIFwiY29kXCI6IFwiMjAwXCIsXHJcbiAgICBcIm1lc3NhZ2VcIjogMCxcclxuICAgIFwiY250XCI6IDQwLFxyXG4gICAgXCJsaXN0XCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg3MTYwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5Ni43NixcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTYuOTgsXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5Ni43NixcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjk3Ljg3LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzMsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDY5LFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IC0xLjExXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDUwMCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibGlnaHQgcmFpblwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCIxMGRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICAgICAgXCJhbGxcIjogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAwLjYyLFxyXG4gICAgICAgICAgXCJkZWdcIjogMzQ5LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDEuMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjMyLFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuMjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMTU6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODgyNDAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjk1LjQ1LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5NS41OSxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjkyLjg0LFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTUuNDUsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogNzEsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMi42MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLjk3LFxyXG4gICAgICAgICAgXCJkZWdcIjogMTU3LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDMuMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjMzLFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMTg6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODkzMjAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjkyLjQ2LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5Mi41NCxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjkwLjMxLFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTIuNDYsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogODAsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMi4xNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAyLjY2LFxyXG4gICAgICAgICAgXCJkZWdcIjogMjEwLFxyXG4gICAgICAgICAgXCJndXN0XCI6IDMuNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjcsXHJcbiAgICAgICAgXCJyYWluXCI6IHtcclxuICAgICAgICAgIFwiM2hcIjogMC40OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOC0zMCAyMTowMDowMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjIyOTI4MDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjk0LjgzLFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5NC45MyxcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxOCxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTgsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTM1LFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA2NCxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDgwNCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiQ2xvdWRzXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJvdmVyY2FzdCBjbG91ZHNcIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMDRkXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLjE0LFxyXG4gICAgICAgICAgXCJkZWdcIjogMTcsXHJcbiAgICAgICAgICBcImd1c3RcIjogMS41N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgICAgIFwicG9wXCI6IDAsXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOS0wNCAxMjowMDowMFwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImNpdHlcIjoge1xyXG4gICAgICBcImlkXCI6IDMxNjM4NTgsXHJcbiAgICAgIFwibmFtZVwiOiBcIlpvY2NhXCIsXHJcbiAgICAgIFwiY29vcmRcIjoge1xyXG4gICAgICAgIFwibGF0XCI6IDQ0LjM0LFxyXG4gICAgICAgIFwibG9uXCI6IDEwLjk5XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiY291bnRyeVwiOiBcIklUXCIsXHJcbiAgICAgIFwicG9wdWxhdGlvblwiOiA0NTkzLFxyXG4gICAgICBcInRpbWV6b25lXCI6IDcyMDAsXHJcbiAgICAgIFwic3VucmlzZVwiOiAxNjYxODM0MTg3LFxyXG4gICAgICBcInN1bnNldFwiOiAxNjYxODgyMjQ4XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Zm9yZWNhc3RXZWF0aGVyRGF0YX0iLCJmdW5jdGlvbiBnZXRDdXJyZW50VGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2VhdGhlckltZ1NyYyhkYXRhKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICBzd2l0Y2god2VhdGhlcikge1xyXG4gICAgICAgIGNhc2UgJ1RodW5kZXJzdG9ybSc6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3MvdGh1bmRlcnN0b3JtLnBuZyc7XHJcbiAgICAgICAgY2FzZSAnRHJpenpsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3MvZHJpenpsZS5wbmcnO1xyXG4gICAgICAgIGNhc2UgJ1JhaW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL3JhaW4ucG5nJztcclxuICAgICAgICBjYXNlICdTbm93JzpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9zbm93LnBuZyc7XHJcbiAgICAgICAgY2FzZSAnQ2xlYXInOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL2NsZWFyLnBuZyc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9jbG91ZHMucG5nJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudEhpZ2hUZW1wKGRhdGEpe1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KSArIDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRMb3dUZW1wKGRhdGEpe1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWluKSAtIDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZlZWxzTGlrZVRlbXAoZGF0YSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZShkYXRhKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICBsZXQgY29yID0gMDtcclxuICAgIGlmICh3ZWF0aGVyID09PSAnRHJpenpsZScgfHwgd2VhdGhlciA9PT0gJ1RodW5kZXJzdG9ybScpIHtcclxuICAgICAgICBjb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjUgLSA1ICsgMSkpICsgNTtcclxuICAgIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gJ1JhaW4nKSB7XHJcbiAgICAgICAgaWYoY29uZGl0aW9uID09PSAnbGlnaHQgcmFpbicgfHwgY29uZGl0aW9uID09PSAnbW9kZXJhdGUgcmFpbicpIHtcclxuICAgICAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwIC0gMjUgKyAxKSkgKyAyNTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gNTAgKyAxKSkgKyA1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kU3BlZWQoZGF0YSkge1xyXG4gICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDdXJyZW50VGVtcCxcclxuICAgIGdldFdlYXRoZXJJbWdTcmMsXHJcbiAgICBnZXRDdXJyZW50SGlnaFRlbXAsXHJcbiAgICBnZXRDdXJyZW50TG93VGVtcCxcclxuICAgIGdldEZlZWxzTGlrZVRlbXAsXHJcbiAgICBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UsXHJcbiAgICBnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlLFxyXG4gICAgZ2V0V2luZFNwZWVkXHJcbn0iLCJmdW5jdGlvbiBzb3J0QnlEYXRlKGRhdGEpIHtcclxuICAgIGxldCBkYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgZGF5T25lID0gW107XHJcbiAgICBjb25zdCBkYXlUd28gPSBbXTtcclxuICAgIGNvbnN0IGRheVRocmVlID0gW107XHJcbiAgICBjb25zdCBkYXlGb3VyID0gW107XHJcbiAgICBjb25zdCBkYXlGaXZlID0gW107XHJcbiAgICBkYXRhLmxpc3QuZm9yRWFjaChmYyA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBmYy5kdF90eHQuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICBpZihjdXJyZW50RGF0ZSAhPT0gZGF0ZSl7XHJcbiAgICAgICAgICAgIGlmIChkYXlPbmUubGVuZ3RoID09PSAwKSBkYXlPbmUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheVR3by5sZW5ndGggPT09IDApIGRheVR3by5wdXNoKGZjKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF5VGhyZWUubGVuZ3RoID09PSAwKSBkYXlUaHJlZS5wdXNoKGZjKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF5Rm91ci5sZW5ndGggPT09IDApIGRheUZvdXIucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUZpdmUubGVuZ3RoID09PSAwKSBkYXlGaXZlLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBkYXRlID0gY3VycmVudERhdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRheVR3by5sZW5ndGggPT09IDApIGRheU9uZS5wdXNoKGZjKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF5VGhyZWUubGVuZ3RoID09PSAwKSBkYXlUd28ucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUZvdXIubGVuZ3RoID09PSAwKSBkYXlUaHJlZS5wdXNoKGZjKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF5Rml2ZS5sZW5ndGggPT09IDApIGRheUZvdXIucHVzaChmYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbZGF5T25lLCBkYXlUd28sIGRheVRocmVlLCBkYXlGb3VyLCBkYXlGaXZlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3RIaWdoVGVtcHMoZGF0YSkge1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEJ5RGF0ZShkYXRhKTtcclxuICAgIGNvbnN0IGhpZ2hUZW1wcyA9IFtdO1xyXG4gICAgc29ydGVkLmZvckVhY2goYXJyID0+IHtcclxuICAgICAgICBhcnIuc29ydCgoYSwgYikgPT4gYS5tYWluLnRlbXAgLSBiLm1haW4udGVtcCk7XHJcbiAgICAgICAgaGlnaFRlbXBzLnB1c2goTWF0aC5yb3VuZChhcnJbYXJyLmxlbmd0aCAtIDFdLm1haW4udGVtcCkpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBoaWdoVGVtcHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0TG93VGVtcHMoZGF0YSkge1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEJ5RGF0ZShkYXRhKTtcclxuICAgIGNvbnN0IGxvd1RlbXBzID0gW107XHJcbiAgICBzb3J0ZWQuZm9yRWFjaChhcnIgPT4ge1xyXG4gICAgICAgIGFyci5zb3J0KChhLCBiKSA9PiBiLm1haW4udGVtcCAtIGEubWFpbi50ZW1wKTtcclxuICAgICAgICBsb3dUZW1wcy5wdXNoKE1hdGgucm91bmQoYXJyW2Fyci5sZW5ndGggLSAxXS5tYWluLnRlbXApKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbG93VGVtcHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0V2VhdGhlckltZ1NyYyhkYXRhKSB7XHJcbiAgICBjb25zdCBzb3J0ZWQgPSBzb3J0QnlEYXRlKGRhdGEpO1xyXG4gICAgY29uc3Qgc291cmNlcyA9IFtdO1xyXG4gICAgc29ydGVkLmZvckVhY2goYXJyID0+IHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXJyWzBdLndlYXRoZXJbMF0ubWFpbjtcclxuICAgICAgICBzd2l0Y2god2VhdGhlcikge1xyXG4gICAgICAgICAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOlxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKCcuLi9zcmMvaW1ncy90aHVuZGVyc3Rvcm0ucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnRHJpenpsZSc6XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzLnB1c2goJy4uL3NyYy9pbWdzL2RyaXp6bGUucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUmFpbic6XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzLnB1c2goJy4uL3NyYy9pbWdzL3JhaW4ucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnU25vdyc6XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzLnB1c2goJy4uL3NyYy9pbWdzL3Nub3cucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOlxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKCcuLi9zcmMvaW1ncy9jbGVhci5wbmcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKCcuLi9zcmMvaW1ncy9jbG91ZHMucG5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IHtnZXRGb3JlY2FzdEhpZ2hUZW1wcywgZ2V0Rm9yZWNhc3RMb3dUZW1wcywgZ2V0Rm9yZWNhc3RXZWF0aGVySW1nU3JjfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3VycmVudFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vanNvbi9jdXJyZW50LWV4YW1wbGVcIjtcclxuaW1wb3J0IHsgZm9yZWNhc3RXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2pzb24vZm9yZWNhc3QtZXhhbXBsZVwiO1xyXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZmV0Y2hXZWF0aGVyRGF0YSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9