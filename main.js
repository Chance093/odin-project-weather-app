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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _parseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseData */ "./src/parseData.js");



    
function renderCurrentWeather(data) {
    const currentTemp = document.querySelector('.current-temp');
    const currentMinMax = document.querySelector('.current-min-max');
    const feelsLike = document.querySelector('.feels-like-value');
    const humidity = document.querySelector('.humidity-value');
    const cor = document.querySelector('.cor-value');
    const wind = document.querySelector('.wind-value');
    
    currentTemp.innerHTML = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemp)(data)}&deg;`;
    currentMinMax.innerHTML = `H: ${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getCurrentHighTemp)(data)}&deg; L: ${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getCurrentLowTemp)(data)}&deg;`;
    feelsLike.innerHTML = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getFeelsLikeTemp)(data)}&deg;`;
    humidity.textContent = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getHumidityPercentage)(data)}%`;
    cor.textContent = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getChanceOfRainPercentage)(data)}%`;
    wind.textContent = `${(0,_parseData__WEBPACK_IMPORTED_MODULE_1__.getWindSpeed)(data)} mph`;
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
/* harmony export */   "getWindSpeed": () => (/* binding */ getWindSpeed)
/* harmony export */ });
function getCurrentTemp(data){
    return Math.round(data.main.temp);
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
     return data.wind.speed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFlBQVksR0FBRyxhQUFhLFlBQVksUUFBUTtBQUN2STtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixJQUFJLE9BQU8sSUFBSSx3QkFBd0IsUUFBUTtBQUMzSTtBQUNBLFFBQVEsMERBQW9CO0FBQzVCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmdEO0FBT1g7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQWMsT0FBTyxLQUFLO0FBQ3pELG9DQUFvQyw4REFBa0IsT0FBTyxNQUFNLEtBQUssNkRBQWlCLE9BQU8sS0FBSztBQUNyRyw2QkFBNkIsNERBQWdCLE9BQU8sS0FBSztBQUN6RCw4QkFBOEIsaUVBQXFCLE9BQU87QUFDMUQseUJBQXlCLHFFQUF5QixPQUFPO0FBQ3pELDBCQUEwQix3REFBWSxRQUFRO0FBQzlDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDRTtBQUNkO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlEQUF1QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9qc29uL2N1cnJlbnQtZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvanNvbi9mb3JlY2FzdC1leGFtcGxlLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9wYXJzZURhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckN1cnJlbnRXZWF0aGVyIH0gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5jb25zdCBBUElfS0VZID0gJzdiMTg5YWU3ZWIwZjhmNmY2NmFkMmYxNTI2YTZiZDMxJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoR2VvQ29vcmRzKGlucHV0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtjaXR5LCBzdGF0ZV0gPSBpbnB1dC5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5LnRyaW0oKX0sJHtzdGF0ZS50cmltKCl9LFVTJmFwcGlkPSR7QVBJX0tFWX1gKVxyXG4gICAgICAgIGNvbnN0IG9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBjb29yZHMgPSBbb2JqWzBdLmxhdCwgb2JqWzBdLmxvbl07XHJcbiAgICAgICAgcmV0dXJuIGNvb3JkcztcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCdUeXBlIGluIHNvbWV0aGluZyB2YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YShlKSB7XHJcbiAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHJldHVybjtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBbbGF0LCBsb25dID0gYXdhaXQgZmV0Y2hHZW9Db29yZHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz1pbXBlcmlhbCZhcHBpZD0ke0FQSV9LRVl9YCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0ICgnQ291bGQgbm90IHJldHJpZXZlIGRhdGEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YX0iLCJpbXBvcnQgeyBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQge2dldEN1cnJlbnRUZW1wLFxyXG4gICAgZ2V0Q3VycmVudEhpZ2hUZW1wLFxyXG4gICAgZ2V0Q3VycmVudExvd1RlbXAsXHJcbiAgICBnZXRGZWVsc0xpa2VUZW1wLFxyXG4gICAgZ2V0SHVtaWRpdHlQZXJjZW50YWdlLFxyXG4gICAgZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZSxcclxuICAgIGdldFdpbmRTcGVlZH0gZnJvbSBcIi4vcGFyc2VEYXRhXCI7XHJcblxyXG4gICAgXHJcbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcCcpO1xyXG4gICAgY29uc3QgY3VycmVudE1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW1pbi1tYXgnKTtcclxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlLXZhbHVlJyk7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS12YWx1ZScpO1xyXG4gICAgY29uc3QgY29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvci12YWx1ZScpO1xyXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXZhbHVlJyk7XHJcbiAgICBcclxuICAgIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IGAke2dldEN1cnJlbnRUZW1wKGRhdGEpfSZkZWc7YDtcclxuICAgIGN1cnJlbnRNaW5NYXguaW5uZXJIVE1MID0gYEg6ICR7Z2V0Q3VycmVudEhpZ2hUZW1wKGRhdGEpfSZkZWc7IEw6ICR7Z2V0Q3VycmVudExvd1RlbXAoZGF0YSl9JmRlZztgO1xyXG4gICAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGAke2dldEZlZWxzTGlrZVRlbXAoZGF0YSl9JmRlZztgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtnZXRIdW1pZGl0eVBlcmNlbnRhZ2UoZGF0YSl9JWA7XHJcbiAgICBjb3IudGV4dENvbnRlbnQgPSBgJHtnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlKGRhdGEpfSVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke2dldFdpbmRTcGVlZChkYXRhKX0gbXBoYDtcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJDdXJyZW50V2VhdGhlcn0iLCJjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB7XHJcbiAgICBcImNvb3JkXCI6IHtcclxuICAgICAgXCJsb25cIjogMTAuOTksXHJcbiAgICAgIFwibGF0XCI6IDQ0LjM0XHJcbiAgICB9LFxyXG4gICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiaWRcIjogNTAxLFxyXG4gICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibW9kZXJhdGUgcmFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIjEwZFwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImJhc2VcIjogXCJzdGF0aW9uc1wiLFxyXG4gICAgXCJtYWluXCI6IHtcclxuICAgICAgXCJ0ZW1wXCI6IDI5OC40OCxcclxuICAgICAgXCJmZWVsc19saWtlXCI6IDI5OC43NCxcclxuICAgICAgXCJ0ZW1wX21pblwiOiAyOTcuNTYsXHJcbiAgICAgIFwidGVtcF9tYXhcIjogMzAwLjA1LFxyXG4gICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgIFwiaHVtaWRpdHlcIjogNjQsXHJcbiAgICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXHJcbiAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzNcclxuICAgIH0sXHJcbiAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICBcIndpbmRcIjoge1xyXG4gICAgICBcInNwZWVkXCI6IDAuNjIsXHJcbiAgICAgIFwiZGVnXCI6IDM0OSxcclxuICAgICAgXCJndXN0XCI6IDEuMThcclxuICAgIH0sXHJcbiAgICBcInJhaW5cIjoge1xyXG4gICAgICBcIjFoXCI6IDMuMTZcclxuICAgIH0sXHJcbiAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgIFwiYWxsXCI6IDEwMFxyXG4gICAgfSxcclxuICAgIFwiZHRcIjogMTY2MTg3MDU5MixcclxuICAgIFwic3lzXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IDIsXHJcbiAgICAgIFwiaWRcIjogMjA3NTY2MyxcclxuICAgICAgXCJjb3VudHJ5XCI6IFwiSVRcIixcclxuICAgICAgXCJzdW5yaXNlXCI6IDE2NjE4MzQxODcsXHJcbiAgICAgIFwic3Vuc2V0XCI6IDE2NjE4ODIyNDhcclxuICAgIH0sXHJcbiAgICBcInRpbWV6b25lXCI6IDcyMDAsXHJcbiAgICBcImlkXCI6IDMxNjM4NTgsXHJcbiAgICBcIm5hbWVcIjogXCJab2NjYVwiLFxyXG4gICAgXCJjb2RcIjogMjAwXHJcbn07XHJcblxyXG5leHBvcnQgeyBjdXJyZW50V2VhdGhlckRhdGEgfSIsImNvbnN0IGZvcmVjYXN0V2VhdGhlckRhdGEgPSB7XHJcbiAgICBcImNvZFwiOiBcIjIwMFwiLFxyXG4gICAgXCJtZXNzYWdlXCI6IDAsXHJcbiAgICBcImNudFwiOiA0MCxcclxuICAgIFwibGlzdFwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjE4NzE2MDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTYuNzYsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjk2Ljk4LFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTYuNzYsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5Ny44NyxcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTMzLFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA2OSxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAtMS4xMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBkXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDEwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMC42MixcclxuICAgICAgICAgIFwiZGVnXCI6IDM0OSxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAxLjE4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMC4zMixcclxuICAgICAgICBcInJhaW5cIjoge1xyXG4gICAgICAgICAgXCIzaFwiOiAwLjI2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN5c1wiOiB7XHJcbiAgICAgICAgICBcInBvZFwiOiBcImRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkdF90eHRcIjogXCIyMDIyLTA4LTMwIDE1OjAwOjAwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg4MjQwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5NS40NSxcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTUuNTksXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5Mi44NCxcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjk1LjQ1LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzEsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDcxLFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IDIuNjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNTAwLFxyXG4gICAgICAgICAgICBcIm1haW5cIjogXCJSYWluXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJsaWdodCByYWluXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjEwblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiA5NlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMS45NyxcclxuICAgICAgICAgIFwiZGVnXCI6IDE1NyxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAzLjM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMC4zMyxcclxuICAgICAgICBcInJhaW5cIjoge1xyXG4gICAgICAgICAgXCIzaFwiOiAwLjU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN5c1wiOiB7XHJcbiAgICAgICAgICBcInBvZFwiOiBcIm5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkdF90eHRcIjogXCIyMDIyLTA4LTMwIDE4OjAwOjAwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg5MzIwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5Mi40NixcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTIuNTQsXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5MC4zMSxcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjkyLjQ2LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzEsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDgwLFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IDIuMTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNTAwLFxyXG4gICAgICAgICAgICBcIm1haW5cIjogXCJSYWluXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJsaWdodCByYWluXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjEwblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiA2OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMi42NixcclxuICAgICAgICAgIFwiZGVnXCI6IDIxMCxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAzLjU4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMC43LFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuNDlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMjE6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYyMjkyODAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjk0LjkzLFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5NC44MyxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjk0LjkzLFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTgsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE4LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzNSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogNjQsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA4MDQsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIkNsb3Vkc1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwib3ZlcmNhc3QgY2xvdWRzXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjA0ZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiA4OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3aW5kXCI6IHtcclxuICAgICAgICAgIFwic3BlZWRcIjogMS4xNCxcclxuICAgICAgICAgIFwiZGVnXCI6IDE3LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDEuNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDktMDQgMTI6MDA6MDBcIlxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJjaXR5XCI6IHtcclxuICAgICAgXCJpZFwiOiAzMTYzODU4LFxyXG4gICAgICBcIm5hbWVcIjogXCJab2NjYVwiLFxyXG4gICAgICBcImNvb3JkXCI6IHtcclxuICAgICAgICBcImxhdFwiOiA0NC4zNCxcclxuICAgICAgICBcImxvblwiOiAxMC45OVxyXG4gICAgICB9LFxyXG4gICAgICBcImNvdW50cnlcIjogXCJJVFwiLFxyXG4gICAgICBcInBvcHVsYXRpb25cIjogNDU5MyxcclxuICAgICAgXCJ0aW1lem9uZVwiOiA3MjAwLFxyXG4gICAgICBcInN1bnJpc2VcIjogMTY2MTgzNDE4NyxcclxuICAgICAgXCJzdW5zZXRcIjogMTY2MTg4MjI0OFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2ZvcmVjYXN0V2VhdGhlckRhdGF9IiwiZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXAoZGF0YSl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRIaWdoVGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCkgKyAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50TG93VGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbikgLSAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGZWVsc0xpa2VUZW1wKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SHVtaWRpdHlQZXJjZW50YWdlKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNvciA9IDA7XHJcbiAgICBpZiAod2VhdGhlciA9PT0gJ0RyaXp6bGUnIHx8IHdlYXRoZXIgPT09ICdUaHVuZGVyc3Rvcm0nKSB7XHJcbiAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1IC0gNSArIDEpKSArIDU7XHJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdSYWluJykge1xyXG4gICAgICAgIGlmKGNvbmRpdGlvbiA9PT0gJ2xpZ2h0IHJhaW4nIHx8IGNvbmRpdGlvbiA9PT0gJ21vZGVyYXRlIHJhaW4nKSB7XHJcbiAgICAgICAgICAgIGNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCAtIDI1ICsgMSkpICsgMjU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDUwICsgMSkpICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZFNwZWVkKGRhdGEpIHtcclxuICAgICByZXR1cm4gZGF0YS53aW5kLnNwZWVkO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Q3VycmVudFRlbXAsXHJcbiAgICBnZXRDdXJyZW50SGlnaFRlbXAsXHJcbiAgICBnZXRDdXJyZW50TG93VGVtcCxcclxuICAgIGdldEZlZWxzTGlrZVRlbXAsXHJcbiAgICBnZXRIdW1pZGl0eVBlcmNlbnRhZ2UsXHJcbiAgICBnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlLFxyXG4gICAgZ2V0V2luZFNwZWVkXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2pzb24vY3VycmVudC1leGFtcGxlXCI7XHJcbmltcG9ydCB7IGZvcmVjYXN0V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9qc29uL2ZvcmVjYXN0LWV4YW1wbGVcIjtcclxuaW1wb3J0IHsgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcblxyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==