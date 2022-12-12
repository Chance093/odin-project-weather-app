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
/* harmony export */   "fetchCurrentWeatherData": () => (/* binding */ fetchCurrentWeatherData)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


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
        console.log(data);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderCurrentWeather)(data);
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
        highTemps.push(arr[arr.length - 1].main.temp);
    })
    return highTemps;
}

function getForecastLowTemps(data) {
    const sorted = sortByDate(data);
    const lowTemps = [];
    sorted.forEach(arr => {
        arr.sort((a, b) => b.main.temp - a.main.temp);
        lowTemps.push(arr[arr.length - 1].main.temp);
    })
    return lowTemps;
}

function getForecastWeatherImgSrc(data) {
    const sorted = sortByDate(data);
    const sources = [];
    sorted.forEach(arr => sources.push(arr[0].weather[0].main));
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
input.addEventListener('keydown', _api__WEBPACK_IMPORTED_MODULE_2__.fetchCurrentWeatherData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFlBQVksR0FBRyxhQUFhLFlBQVksUUFBUTtBQUN2STtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixJQUFJLE9BQU8sSUFBSSx3QkFBd0IsUUFBUTtBQUMzSTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjZDO0FBR2M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrRUFBYyxPQUFPLEtBQUs7QUFDekQseUJBQXlCLG9FQUFnQjtBQUN6QyxvQ0FBb0Msc0VBQWtCLE9BQU8sTUFBTSxLQUFLLHFFQUFpQixPQUFPLEtBQUs7QUFDckcsNkJBQTZCLG9FQUFnQixPQUFPLEtBQUs7QUFDekQsOEJBQThCLHlFQUFxQixPQUFPO0FBQzFELHlCQUF5Qiw2RUFBeUIsT0FBTztBQUN6RCwwQkFBMEIsZ0VBQVksUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkVBQXdCO0FBQzVDLHNCQUFzQix5RUFBb0I7QUFDMUMscUJBQXFCLHdFQUFtQjtBQUN4QztBQUNBO0FBQ0Esd0RBQXdELGFBQWEsS0FBSztBQUMxRSx3REFBd0QsWUFBWSxLQUFLO0FBQ3pFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDRTtBQUNkO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx5REFBdUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvanNvbi9jdXJyZW50LWV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2pzb24vZm9yZWNhc3QtZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvcGFyc2UvY3VycmVudERhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3BhcnNlL2ZvcmVjYXN0RGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQ3VycmVudFdlYXRoZXIgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbmNvbnN0IEFQSV9LRVkgPSAnN2IxODlhZTdlYjBmOGY2ZjY2YWQyZjE1MjZhNmJkMzEnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hHZW9Db29yZHMoaW5wdXQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW2NpdHksIHN0YXRlXSA9IGlucHV0LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHkudHJpbSgpfSwke3N0YXRlLnRyaW0oKX0sVVMmYXBwaWQ9JHtBUElfS0VZfWApXHJcbiAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFtvYmpbMF0ubGF0LCBvYmpbMF0ubG9uXTtcclxuICAgICAgICByZXR1cm4gY29vcmRzO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ1R5cGUgaW4gc29tZXRoaW5nIHZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFdlYXRoZXJEYXRhKGUpIHtcclxuICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IFtsYXQsIGxvbl0gPSBhd2FpdCBmZXRjaEdlb0Nvb3JkcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7QVBJX0tFWX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHJlbmRlckN1cnJlbnRXZWF0aGVyKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQgKCdDb3VsZCBub3QgcmV0cmlldmUgZGF0YScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2ZldGNoQ3VycmVudFdlYXRoZXJEYXRhfSIsImltcG9ydCB7Z2V0Q3VycmVudFRlbXAsXHJcbiAgICBnZXRXZWF0aGVySW1nU3JjLFxyXG4gICAgZ2V0Q3VycmVudEhpZ2hUZW1wLFxyXG4gICAgZ2V0Q3VycmVudExvd1RlbXAsXHJcbiAgICBnZXRGZWVsc0xpa2VUZW1wLFxyXG4gICAgZ2V0SHVtaWRpdHlQZXJjZW50YWdlLFxyXG4gICAgZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZSxcclxuICAgIGdldFdpbmRTcGVlZH0gZnJvbSBcIi4vcGFyc2UvY3VycmVudERhdGFcIjtcclxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3RIaWdoVGVtcHMsIFxyXG4gICAgZ2V0Rm9yZWNhc3RMb3dUZW1wcywgXHJcbiAgICBnZXRGb3JlY2FzdFdlYXRoZXJJbWdTcmMgfSBmcm9tIFwiLi9wYXJzZS9mb3JlY2FzdERhdGFcIjtcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YSkge1xyXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJyk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKTtcclxuICAgIGNvbnN0IGN1cnJlbnRNaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1taW4tbWF4Jyk7XHJcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZS12YWx1ZScpO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktdmFsdWUnKTtcclxuICAgIGNvbnN0IGNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ItdmFsdWUnKTtcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC12YWx1ZScpO1xyXG4gICAgXHJcbiAgICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBgJHtnZXRDdXJyZW50VGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBjdXJyZW50V2VhdGhlci5zcmMgPSBnZXRXZWF0aGVySW1nU3JjKGRhdGEpO1xyXG4gICAgY3VycmVudE1pbk1heC5pbm5lckhUTUwgPSBgSDogJHtnZXRDdXJyZW50SGlnaFRlbXAoZGF0YSl9JmRlZzsgTDogJHtnZXRDdXJyZW50TG93VGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYCR7Z2V0RmVlbHNMaWtlVGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2dldEh1bWlkaXR5UGVyY2VudGFnZShkYXRhKX0lYDtcclxuICAgIGNvci50ZXh0Q29udGVudCA9IGAke2dldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSl9JWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7Z2V0V2luZFNwZWVkKGRhdGEpfSBtcGhgO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb3JlY2FzdFdlYXRoZXIoZGF0YSkge1xyXG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LXdlYXRoZXInKTtcclxuICAgIGNvbnN0IGZvcmVjYXN0TWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LW1heCcpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtbWluJyk7XHJcbiAgICBjb25zdCBzb3VyY2VzID0gZ2V0Rm9yZWNhc3RXZWF0aGVySW1nU3JjKGRhdGEpO1xyXG4gICAgY29uc3QgaGlnaFRlbXBzID0gZ2V0Rm9yZWNhc3RIaWdoVGVtcHMoZGF0YSk7XHJcbiAgICBjb25zdCBsb3dUZW1wcyA9IGdldEZvcmVjYXN0TG93VGVtcHMoZGF0YSk7XHJcblxyXG4gICAgZm9yZWNhc3RXZWF0aGVyLmZvckVhY2goKGltZywgaSkgPT4gaW1nLnNyYyA9IHNvdXJjZXNbaV0pO1xyXG4gICAgZm9yZWNhc3RNYXguZm9yRWFjaCgoaFQsIGkpID0+IGhULmlubmVySFRNTCA9IGBIOiAke2hpZ2hUZW1wc1tpXX0mZGVnO2ApO1xyXG4gICAgZm9yZWNhc3RNaW4uZm9yRWFjaCgobFQsIGkpID0+IGxULmlubmVySFRNTCA9IGBMOiAke2xvd1RlbXBzW2ldfSZkZWc7YCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ3VycmVudFdlYXRoZXIsIHJlbmRlckZvcmVjYXN0V2VhdGhlcn0iLCJjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB7XHJcbiAgICBcImNvb3JkXCI6IHtcclxuICAgICAgXCJsb25cIjogMTAuOTksXHJcbiAgICAgIFwibGF0XCI6IDQ0LjM0XHJcbiAgICB9LFxyXG4gICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiaWRcIjogNTAxLFxyXG4gICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibW9kZXJhdGUgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIjEwZFwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImJhc2VcIjogXCJzdGF0aW9uc1wiLFxyXG4gICAgXCJtYWluXCI6IHtcclxuICAgICAgXCJ0ZW1wXCI6IDI5OC40OCxcclxuICAgICAgXCJmZWVsc19saWtlXCI6IDI5OC43NCxcclxuICAgICAgXCJ0ZW1wX21pblwiOiAyOTcuNTYsXHJcbiAgICAgIFwidGVtcF9tYXhcIjogMzAwLjA1LFxyXG4gICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgIFwiaHVtaWRpdHlcIjogNjQsXHJcbiAgICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXHJcbiAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzNcclxuICAgIH0sXHJcbiAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICBcIndpbmRcIjoge1xyXG4gICAgICBcInNwZWVkXCI6IDAuNjIsXHJcbiAgICAgIFwiZGVnXCI6IDM0OSxcclxuICAgICAgXCJndXN0XCI6IDEuMThcclxuICAgIH0sXHJcbiAgICBcInJhaW5cIjoge1xyXG4gICAgICBcIjFoXCI6IDMuMTZcclxuICAgIH0sXHJcbiAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgIFwiYWxsXCI6IDEwMFxyXG4gICAgfSxcclxuICAgIFwiZHRcIjogMTY2MTg3MDU5MixcclxuICAgIFwic3lzXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IDIsXHJcbiAgICAgIFwiaWRcIjogMjA3NTY2MyxcclxuICAgICAgXCJjb3VudHJ5XCI6IFwiSVRcIixcclxuICAgICAgXCJzdW5yaXNlXCI6IDE2NjE4MzQxODcsXHJcbiAgICAgIFwic3Vuc2V0XCI6IDE2NjE4ODIyNDhcclxuICAgIH0sXHJcbiAgICBcInRpbWV6b25lXCI6IDcyMDAsXHJcbiAgICBcImlkXCI6IDMxNjM4NTgsXHJcbiAgICBcIm5hbWVcIjogXCJab2NjYVwiLFxyXG4gICAgXCJjb2RcIjogMjAwXHJcbn07XHJcblxyXG5leHBvcnQgeyBjdXJyZW50V2VhdGhlckRhdGEgfSIsImNvbnN0IGZvcmVjYXN0V2VhdGhlckRhdGEgPSB7XHJcbiAgICBcImNvZFwiOiBcIjIwMFwiLFxyXG4gICAgXCJtZXNzYWdlXCI6IDAsXHJcbiAgICBcImNudFwiOiA0MCxcclxuICAgIFwibGlzdFwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjE4NzE2MDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTYuNzYsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjk2Ljk4LFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTYuNzYsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5Ny44NyxcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTMzLFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA2OSxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAtMS4xMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBkXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMC42MixcclxuICAgICAgICAgIFwiZGVnXCI6IDM0OSxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAxLjE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMC4zMixcclxuICAgICAgICBcInJhaW5cIjoge1xyXG4gICAgICAgICAgXCIzaFwiOiAwLjI2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN5c1wiOiB7XHJcbiAgICAgICAgICBcInBvZFwiOiBcImRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkdF90eHRcIjogXCIyMDIyLTA4LTMwIDE1OjAwOjAwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg4MjQwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5NS40NSxcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTUuNTksXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5Mi44NCxcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjk1LjQ1LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzEsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDcxLFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IDIuNjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNTAwLFxyXG4gICAgICAgICAgICBcIm1haW5cIjogXCJSYWluXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJsaWdodCByYWluXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjEwblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiA5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMS45NyxcclxuICAgICAgICAgIFwiZGVnXCI6IDE1NyxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAzLjM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMC4zMyxcclxuICAgICAgICBcInJhaW5cIjoge1xyXG4gICAgICAgICAgXCIzaFwiOiAwLjU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN5c1wiOiB7XHJcbiAgICAgICAgICBcInBvZFwiOiBcIm5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkdF90eHRcIjogXCIyMDIyLTA4LTMwIDE4OjAwOjAwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg5MzIwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5Mi40NixcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTIuNTQsXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5MC4zMSxcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjkyLjQ2LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzEsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDgwLFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IDIuMTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNTAwLFxyXG4gICAgICAgICAgICBcIm1haW5cIjogXCJSYWluXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJsaWdodCByYWluXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjEwblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiA2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMi42NixcclxuICAgICAgICAgIFwiZGVnXCI6IDIxMCxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAzLjU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMC43LFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuNDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMjE6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYyMjkyODAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjk0LjkzLFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5NC44MyxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjk0LjkzLFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTgsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE4LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzNSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogNjQsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA4MDQsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIkNsb3Vkc1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwib3ZlcmNhc3QgY2xvdWRzXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjA0ZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiA4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMS4xNCxcclxuICAgICAgICAgIFwiZGVnXCI6IDE3LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDEuNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDktMDQgMTI6MDA6MDBcIlxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJjaXR5XCI6IHtcclxuICAgICAgXCJpZFwiOiAzMTYzODU4LFxyXG4gICAgICBcIm5hbWVcIjogXCJab2NjYVwiLFxyXG4gICAgICBcImNvb3JkXCI6IHtcclxuICAgICAgICBcImxhdFwiOiA0NC4zNCxcclxuICAgICAgICBcImxvblwiOiAxMC45OVxyXG4gICAgICB9LFxyXG4gICAgICBcImNvdW50cnlcIjogXCJJVFwiLFxyXG4gICAgICBcInBvcHVsYXRpb25cIjogNDU5MyxcclxuICAgICAgXCJ0aW1lem9uZVwiOiA3MjAwLFxyXG4gICAgICBcInN1bnJpc2VcIjogMTY2MTgzNDE4NyxcclxuICAgICAgXCJzdW5zZXRcIjogMTY2MTg4MjI0OFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2ZvcmVjYXN0V2VhdGhlckRhdGF9IiwiZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXAoZGF0YSl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJJbWdTcmMoZGF0YSkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgc3dpdGNoKHdlYXRoZXIpIHtcclxuICAgICAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL3RodW5kZXJzdG9ybS5wbmcnO1xyXG4gICAgICAgIGNhc2UgJ0RyaXp6bGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL2RyaXp6bGUucG5nJztcclxuICAgICAgICBjYXNlICdSYWluJzpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9yYWluLnBuZyc7XHJcbiAgICAgICAgY2FzZSAnU25vdyc6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3Mvc25vdy5wbmcnO1xyXG4gICAgICAgIGNhc2UgJ0NsZWFyJzpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9jbGVhci5wbmcnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3MvY2xvdWRzLnBuZyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRIaWdoVGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCkgKyAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50TG93VGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbikgLSAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGZWVsc0xpa2VUZW1wKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SHVtaWRpdHlQZXJjZW50YWdlKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNvciA9IDA7XHJcbiAgICBpZiAod2VhdGhlciA9PT0gJ0RyaXp6bGUnIHx8IHdlYXRoZXIgPT09ICdUaHVuZGVyc3Rvcm0nKSB7XHJcbiAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1IC0gNSArIDEpKSArIDU7XHJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdSYWluJykge1xyXG4gICAgICAgIGlmKGNvbmRpdGlvbiA9PT0gJ2xpZ2h0IHJhaW4nIHx8IGNvbmRpdGlvbiA9PT0gJ21vZGVyYXRlIHJhaW4nKSB7XHJcbiAgICAgICAgICAgIGNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCAtIDI1ICsgMSkpICsgMjU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDUwICsgMSkpICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZFNwZWVkKGRhdGEpIHtcclxuICAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Q3VycmVudFRlbXAsXHJcbiAgICBnZXRXZWF0aGVySW1nU3JjLFxyXG4gICAgZ2V0Q3VycmVudEhpZ2hUZW1wLFxyXG4gICAgZ2V0Q3VycmVudExvd1RlbXAsXHJcbiAgICBnZXRGZWVsc0xpa2VUZW1wLFxyXG4gICAgZ2V0SHVtaWRpdHlQZXJjZW50YWdlLFxyXG4gICAgZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZSxcclxuICAgIGdldFdpbmRTcGVlZFxyXG59IiwiZnVuY3Rpb24gc29ydEJ5RGF0ZShkYXRhKSB7XHJcbiAgICBsZXQgZGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGRheU9uZSA9IFtdO1xyXG4gICAgY29uc3QgZGF5VHdvID0gW107XHJcbiAgICBjb25zdCBkYXlUaHJlZSA9IFtdO1xyXG4gICAgY29uc3QgZGF5Rm91ciA9IFtdO1xyXG4gICAgY29uc3QgZGF5Rml2ZSA9IFtdO1xyXG4gICAgZGF0YS5saXN0LmZvckVhY2goZmMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZmMuZHRfdHh0LnNwbGl0KCcgJylbMF07XHJcbiAgICAgICAgaWYoY3VycmVudERhdGUgIT09IGRhdGUpe1xyXG4gICAgICAgICAgICBpZiAoZGF5T25lLmxlbmd0aCA9PT0gMCkgZGF5T25lLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlUd28ubGVuZ3RoID09PSAwKSBkYXlUd28ucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheVRocmVlLmxlbmd0aCA9PT0gMCkgZGF5VGhyZWUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUZvdXIubGVuZ3RoID09PSAwKSBkYXlGb3VyLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlGaXZlLmxlbmd0aCA9PT0gMCkgZGF5Rml2ZS5wdXNoKGZjKTtcclxuICAgICAgICAgICAgZGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkYXlUd28ubGVuZ3RoID09PSAwKSBkYXlPbmUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheVRocmVlLmxlbmd0aCA9PT0gMCkgZGF5VHdvLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlGb3VyLmxlbmd0aCA9PT0gMCkgZGF5VGhyZWUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUZpdmUubGVuZ3RoID09PSAwKSBkYXlGb3VyLnB1c2goZmMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gW2RheU9uZSwgZGF5VHdvLCBkYXlUaHJlZSwgZGF5Rm91ciwgZGF5Rml2ZV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0SGlnaFRlbXBzKGRhdGEpIHtcclxuICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRCeURhdGUoZGF0YSk7XHJcbiAgICBjb25zdCBoaWdoVGVtcHMgPSBbXTtcclxuICAgIHNvcnRlZC5mb3JFYWNoKGFyciA9PiB7XHJcbiAgICAgICAgYXJyLnNvcnQoKGEsIGIpID0+IGEubWFpbi50ZW1wIC0gYi5tYWluLnRlbXApO1xyXG4gICAgICAgIGhpZ2hUZW1wcy5wdXNoKGFyclthcnIubGVuZ3RoIC0gMV0ubWFpbi50ZW1wKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaGlnaFRlbXBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdExvd1RlbXBzKGRhdGEpIHtcclxuICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRCeURhdGUoZGF0YSk7XHJcbiAgICBjb25zdCBsb3dUZW1wcyA9IFtdO1xyXG4gICAgc29ydGVkLmZvckVhY2goYXJyID0+IHtcclxuICAgICAgICBhcnIuc29ydCgoYSwgYikgPT4gYi5tYWluLnRlbXAgLSBhLm1haW4udGVtcCk7XHJcbiAgICAgICAgbG93VGVtcHMucHVzaChhcnJbYXJyLmxlbmd0aCAtIDFdLm1haW4udGVtcCk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGxvd1RlbXBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdFdlYXRoZXJJbWdTcmMoZGF0YSkge1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEJ5RGF0ZShkYXRhKTtcclxuICAgIGNvbnN0IHNvdXJjZXMgPSBbXTtcclxuICAgIHNvcnRlZC5mb3JFYWNoKGFyciA9PiBzb3VyY2VzLnB1c2goYXJyWzBdLndlYXRoZXJbMF0ubWFpbikpO1xyXG4gICAgcmV0dXJuIHNvdXJjZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0Rm9yZWNhc3RIaWdoVGVtcHMsIGdldEZvcmVjYXN0TG93VGVtcHMsIGdldEZvcmVjYXN0V2VhdGhlckltZ1NyY30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2pzb24vY3VycmVudC1leGFtcGxlXCI7XHJcbmltcG9ydCB7IGZvcmVjYXN0V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9qc29uL2ZvcmVjYXN0LWV4YW1wbGVcIjtcclxuaW1wb3J0IHsgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9