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
/* harmony export */   "renderCurrentWeather": () => (/* binding */ renderCurrentWeather)
/* harmony export */ });
/* harmony import */ var _parseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseData */ "./src/parseData.js");


    
function renderCurrentWeather(data) {
    const currentTemp = document.querySelector('.current-temp');
    const currentWeather = document.querySelector('.current-weather');
    const currentMinMax = document.querySelector('.current-min-max');
    const feelsLike = document.querySelector('.feels-like-value');
    const humidity = document.querySelector('.humidity-value');
    const cor = document.querySelector('.cor-value');
    const wind = document.querySelector('.wind-value');
    
    currentTemp.innerHTML = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getCurrentTemp)(data)}&deg;`;
    currentWeather.src = (0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getWeatherImgSrc)(data);
    currentMinMax.innerHTML = `H: ${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getCurrentHighTemp)(data)}&deg; L: ${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getCurrentLowTemp)(data)}&deg;`;
    feelsLike.innerHTML = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getFeelsLikeTemp)(data)}&deg;`;
    humidity.textContent = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getHumidityPercentage)(data)}%`;
    cor.textContent = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getChanceOfRainPercentage)(data)}%`;
    wind.textContent = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_0__.getWindSpeed)(data)} mph`;
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

/***/ "./src/parseData.js":
/*!**************************!*\
  !*** ./src/parseData.js ***!
  \**************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFlBQVksR0FBRyxhQUFhLFlBQVksUUFBUTtBQUN2STtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixJQUFJLE9BQU8sSUFBSSx3QkFBd0IsUUFBUTtBQUMzSTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBEQUFjLE9BQU8sS0FBSztBQUN6RCx5QkFBeUIsNERBQWdCO0FBQ3pDLG9DQUFvQyw4REFBa0IsT0FBTyxNQUFNLEtBQUssNkRBQWlCLE9BQU8sS0FBSztBQUNyRyw2QkFBNkIsNERBQWdCLE9BQU8sS0FBSztBQUN6RCw4QkFBOEIsaUVBQXFCLE9BQU87QUFDMUQseUJBQXlCLHFFQUF5QixPQUFPO0FBQ3pELDBCQUEwQix3REFBWSxRQUFRO0FBQzlDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjREO0FBQ0U7QUFDZDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx5REFBdUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvanNvbi9jdXJyZW50LWV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2pzb24vZm9yZWNhc3QtZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvcGFyc2VEYXRhLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJDdXJyZW50V2VhdGhlciB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuY29uc3QgQVBJX0tFWSA9ICc3YjE4OWFlN2ViMGY4ZjZmNjZhZDJmMTUyNmE2YmQzMSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdlb0Nvb3JkcyhpbnB1dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbY2l0eSwgc3RhdGVdID0gaW5wdXQuc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eS50cmltKCl9LCR7c3RhdGUudHJpbSgpfSxVUyZhcHBpZD0ke0FQSV9LRVl9YClcclxuICAgICAgICBjb25zdCBvYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgY29vcmRzID0gW29ialswXS5sYXQsIG9ialswXS5sb25dO1xyXG4gICAgICAgIHJldHVybiBjb29yZHM7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydCgnVHlwZSBpbiBzb21ldGhpbmcgdmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEoZSkge1xyXG4gICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSByZXR1cm47XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgW2xhdCwgbG9uXSA9IGF3YWl0IGZldGNoR2VvQ29vcmRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9JHtBUElfS0VZfWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydCAoJ0NvdWxkIG5vdCByZXRyaWV2ZSBkYXRhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7ZmV0Y2hDdXJyZW50V2VhdGhlckRhdGF9IiwiaW1wb3J0IHtnZXRDdXJyZW50VGVtcCxcclxuICAgIGdldFdlYXRoZXJJbWdTcmMsXHJcbiAgICBnZXRDdXJyZW50SGlnaFRlbXAsXHJcbiAgICBnZXRDdXJyZW50TG93VGVtcCxcclxuICAgIGdldEZlZWxzTGlrZVRlbXAsXHJcbiAgICBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UsXHJcbiAgICBnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlLFxyXG4gICAgZ2V0V2luZFNwZWVkfSBmcm9tIFwiLi9wYXJzZURhdGFcIjtcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YSkge1xyXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJyk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKTtcclxuICAgIGNvbnN0IGN1cnJlbnRNaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1taW4tbWF4Jyk7XHJcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZS12YWx1ZScpO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktdmFsdWUnKTtcclxuICAgIGNvbnN0IGNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ItdmFsdWUnKTtcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC12YWx1ZScpO1xyXG4gICAgXHJcbiAgICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBgJHtnZXRDdXJyZW50VGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBjdXJyZW50V2VhdGhlci5zcmMgPSBnZXRXZWF0aGVySW1nU3JjKGRhdGEpO1xyXG4gICAgY3VycmVudE1pbk1heC5pbm5lckhUTUwgPSBgSDogJHtnZXRDdXJyZW50SGlnaFRlbXAoZGF0YSl9JmRlZzsgTDogJHtnZXRDdXJyZW50TG93VGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYCR7Z2V0RmVlbHNMaWtlVGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2dldEh1bWlkaXR5UGVyY2VudGFnZShkYXRhKX0lYDtcclxuICAgIGNvci50ZXh0Q29udGVudCA9IGAke2dldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSl9JWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7Z2V0V2luZFNwZWVkKGRhdGEpfSBtcGhgO1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckN1cnJlbnRXZWF0aGVyfSIsImNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHtcclxuICAgIFwiY29vcmRcIjoge1xyXG4gICAgICBcImxvblwiOiAxMC45OSxcclxuICAgICAgXCJsYXRcIjogNDQuMzRcclxuICAgIH0sXHJcbiAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiA1MDEsXHJcbiAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJtb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiMTBkXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiYmFzZVwiOiBcInN0YXRpb25zXCIsXHJcbiAgICBcIm1haW5cIjoge1xyXG4gICAgICBcInRlbXBcIjogMjk4LjQ4LFxyXG4gICAgICBcImZlZWxzX2xpa2VcIjogMjk4Ljc0LFxyXG4gICAgICBcInRlbXBfbWluXCI6IDI5Ny41NixcclxuICAgICAgXCJ0ZW1wX21heFwiOiAzMDAuMDUsXHJcbiAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgXCJodW1pZGl0eVwiOiA2NCxcclxuICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgXCJncm5kX2xldmVsXCI6IDkzM1xyXG4gICAgfSxcclxuICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgIFwid2luZFwiOiB7XHJcbiAgICAgIFwic3BlZWRcIjogMC42MixcclxuICAgICAgXCJkZWdcIjogMzQ5LFxyXG4gICAgICBcImd1c3RcIjogMS4xOFxyXG4gICAgfSxcclxuICAgIFwicmFpblwiOiB7XHJcbiAgICAgIFwiMWhcIjogMy4xNlxyXG4gICAgfSxcclxuICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgXCJhbGxcIjogMTAwXHJcbiAgICB9LFxyXG4gICAgXCJkdFwiOiAxNjYxODcwNTkyLFxyXG4gICAgXCJzeXNcIjoge1xyXG4gICAgICBcInR5cGVcIjogMixcclxuICAgICAgXCJpZFwiOiAyMDc1NjYzLFxyXG4gICAgICBcImNvdW50cnlcIjogXCJJVFwiLFxyXG4gICAgICBcInN1bnJpc2VcIjogMTY2MTgzNDE4NyxcclxuICAgICAgXCJzdW5zZXRcIjogMTY2MTg4MjI0OFxyXG4gICAgfSxcclxuICAgIFwidGltZXpvbmVcIjogNzIwMCxcclxuICAgIFwiaWRcIjogMzE2Mzg1OCxcclxuICAgIFwibmFtZVwiOiBcIlpvY2NhXCIsXHJcbiAgICBcImNvZFwiOiAyMDBcclxufTtcclxuXHJcbmV4cG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IiwiY29uc3QgZm9yZWNhc3RXZWF0aGVyRGF0YSA9IHtcclxuICAgIFwiY29kXCI6IFwiMjAwXCIsXHJcbiAgICBcIm1lc3NhZ2VcIjogMCxcclxuICAgIFwiY250XCI6IDQwLFxyXG4gICAgXCJsaXN0XCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg3MTYwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5Ni43NixcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTYuOTgsXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5Ni43NixcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjk3Ljg3LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzMsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDY5LFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IC0xLjExXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDUwMCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibGlnaHQgcmFpblwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCIxMGRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICAgICAgXCJhbGxcIjogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAwLjYyLFxyXG4gICAgICAgICAgXCJkZWdcIjogMzQ5LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDEuMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjMyLFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuMjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMTU6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODgyNDAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjk1LjQ1LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5NS41OSxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjkyLjg0LFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTUuNDUsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogNzEsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMi42MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLjk3LFxyXG4gICAgICAgICAgXCJkZWdcIjogMTU3LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDMuMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjMzLFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMTg6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODkzMjAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjkyLjQ2LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5Mi41NCxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjkwLjMxLFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTIuNDYsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogODAsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMi4xNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAyLjY2LFxyXG4gICAgICAgICAgXCJkZWdcIjogMjEwLFxyXG4gICAgICAgICAgXCJndXN0XCI6IDMuNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjcsXHJcbiAgICAgICAgXCJyYWluXCI6IHtcclxuICAgICAgICAgIFwiM2hcIjogMC40OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOC0zMCAyMTowMDowMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjIyOTI4MDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjk0LjgzLFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5NC45MyxcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxOCxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTgsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTM1LFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA2NCxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDgwNCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiQ2xvdWRzXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJvdmVyY2FzdCBjbG91ZHNcIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMDRkXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLjE0LFxyXG4gICAgICAgICAgXCJkZWdcIjogMTcsXHJcbiAgICAgICAgICBcImd1c3RcIjogMS41N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgICAgIFwicG9wXCI6IDAsXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOS0wNCAxMjowMDowMFwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImNpdHlcIjoge1xyXG4gICAgICBcImlkXCI6IDMxNjM4NTgsXHJcbiAgICAgIFwibmFtZVwiOiBcIlpvY2NhXCIsXHJcbiAgICAgIFwiY29vcmRcIjoge1xyXG4gICAgICAgIFwibGF0XCI6IDQ0LjM0LFxyXG4gICAgICAgIFwibG9uXCI6IDEwLjk5XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiY291bnRyeVwiOiBcIklUXCIsXHJcbiAgICAgIFwicG9wdWxhdGlvblwiOiA0NTkzLFxyXG4gICAgICBcInRpbWV6b25lXCI6IDcyMDAsXHJcbiAgICAgIFwic3VucmlzZVwiOiAxNjYxODM0MTg3LFxyXG4gICAgICBcInN1bnNldFwiOiAxNjYxODgyMjQ4XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Zm9yZWNhc3RXZWF0aGVyRGF0YX0iLCJmdW5jdGlvbiBnZXRDdXJyZW50VGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2VhdGhlckltZ1NyYyhkYXRhKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICBzd2l0Y2god2VhdGhlcikge1xyXG4gICAgICAgIGNhc2UgJ1RodW5kZXJzdG9ybSc6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3MvdGh1bmRlcnN0b3JtLnBuZyc7XHJcbiAgICAgICAgY2FzZSAnRHJpenpsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3MvZHJpenpsZS5wbmcnO1xyXG4gICAgICAgIGNhc2UgJ1JhaW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL3JhaW4ucG5nJztcclxuICAgICAgICBjYXNlICdTbm93JzpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9zbm93LnBuZyc7XHJcbiAgICAgICAgY2FzZSAnQ2xlYXInOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL2NsZWFyLnBuZyc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9jbG91ZHMucG5nJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudEhpZ2hUZW1wKGRhdGEpe1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KSArIDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRMb3dUZW1wKGRhdGEpe1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWluKSAtIDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZlZWxzTGlrZVRlbXAoZGF0YSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZShkYXRhKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICBsZXQgY29yID0gMDtcclxuICAgIGlmICh3ZWF0aGVyID09PSAnRHJpenpsZScgfHwgd2VhdGhlciA9PT0gJ1RodW5kZXJzdG9ybScpIHtcclxuICAgICAgICBjb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjUgLSA1ICsgMSkpICsgNTtcclxuICAgIH0gZWxzZSBpZiAod2VhdGhlciA9PT0gJ1JhaW4nKSB7XHJcbiAgICAgICAgaWYoY29uZGl0aW9uID09PSAnbGlnaHQgcmFpbicgfHwgY29uZGl0aW9uID09PSAnbW9kZXJhdGUgcmFpbicpIHtcclxuICAgICAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwIC0gMjUgKyAxKSkgKyAyNTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gNTAgKyAxKSkgKyA1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kU3BlZWQoZGF0YSkge1xyXG4gICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDdXJyZW50VGVtcCxcclxuICAgIGdldFdlYXRoZXJJbWdTcmMsXHJcbiAgICBnZXRDdXJyZW50SGlnaFRlbXAsXHJcbiAgICBnZXRDdXJyZW50TG93VGVtcCxcclxuICAgIGdldEZlZWxzTGlrZVRlbXAsXHJcbiAgICBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UsXHJcbiAgICBnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlLFxyXG4gICAgZ2V0V2luZFNwZWVkXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2pzb24vY3VycmVudC1leGFtcGxlXCI7XHJcbmltcG9ydCB7IGZvcmVjYXN0V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9qc29uL2ZvcmVjYXN0LWV4YW1wbGVcIjtcclxuaW1wb3J0IHsgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcblxyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==