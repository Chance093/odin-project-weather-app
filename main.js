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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (err) {
        alert ('Could not retrieve data');
    }
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

const input = document.querySelector('input');
input.addEventListener('keydown', _api__WEBPACK_IMPORTED_MODULE_2__.fetchCurrentWeatherData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsWUFBWSxHQUFHLGFBQWEsWUFBWSxRQUFRO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLElBQUksT0FBTyxJQUFJLFNBQVMsUUFBUTtBQUM1SDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3S0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjREO0FBQ0U7QUFDZDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlEQUF1QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvanNvbi9jdXJyZW50LWV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2pzb24vZm9yZWNhc3QtZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9ICc3YjE4OWFlN2ViMGY4ZjZmNjZhZDJmMTUyNmE2YmQzMSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdlb0Nvb3JkcyhpbnB1dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbY2l0eSwgc3RhdGVdID0gaW5wdXQuc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eS50cmltKCl9LCR7c3RhdGUudHJpbSgpfSxVUyZhcHBpZD0ke0FQSV9LRVl9YClcclxuICAgICAgICBjb25zdCBvYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgY29vcmRzID0gW29ialswXS5sYXQsIG9ialswXS5sb25dO1xyXG4gICAgICAgIHJldHVybiBjb29yZHM7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydCgnVHlwZSBpbiBzb21ldGhpbmcgdmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDdXJyZW50V2VhdGhlckRhdGEoZSkge1xyXG4gICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSByZXR1cm47XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgW2xhdCwgbG9uXSA9IGF3YWl0IGZldGNoR2VvQ29vcmRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtBUElfS0VZfWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydCAoJ0NvdWxkIG5vdCByZXRyaWV2ZSBkYXRhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7ZmV0Y2hDdXJyZW50V2VhdGhlckRhdGF9IiwiY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0ge1xyXG4gICAgXCJjb29yZFwiOiB7XHJcbiAgICAgIFwibG9uXCI6IDEwLjk5LFxyXG4gICAgICBcImxhdFwiOiA0NC4zNFxyXG4gICAgfSxcclxuICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImlkXCI6IDUwMSxcclxuICAgICAgICBcIm1haW5cIjogXCJSYWluXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIm1vZGVyYXRlIHJhaW5cIixcclxuICAgICAgICBcImljb25cIjogXCIxMGRcIlxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJiYXNlXCI6IFwic3RhdGlvbnNcIixcclxuICAgIFwibWFpblwiOiB7XHJcbiAgICAgIFwidGVtcFwiOiAyOTguNDgsXHJcbiAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTguNzQsXHJcbiAgICAgIFwidGVtcF9taW5cIjogMjk3LjU2LFxyXG4gICAgICBcInRlbXBfbWF4XCI6IDMwMC4wNSxcclxuICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICBcImh1bWlkaXR5XCI6IDY0LFxyXG4gICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICBcImdybmRfbGV2ZWxcIjogOTMzXHJcbiAgICB9LFxyXG4gICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgXCJ3aW5kXCI6IHtcclxuICAgICAgXCJzcGVlZFwiOiAwLjYyLFxyXG4gICAgICBcImRlZ1wiOiAzNDksXHJcbiAgICAgIFwiZ3VzdFwiOiAxLjE4XHJcbiAgICB9LFxyXG4gICAgXCJyYWluXCI6IHtcclxuICAgICAgXCIxaFwiOiAzLjE2XHJcbiAgICB9LFxyXG4gICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICBcImFsbFwiOiAxMDBcclxuICAgIH0sXHJcbiAgICBcImR0XCI6IDE2NjE4NzA1OTIsXHJcbiAgICBcInN5c1wiOiB7XHJcbiAgICAgIFwidHlwZVwiOiAyLFxyXG4gICAgICBcImlkXCI6IDIwNzU2NjMsXHJcbiAgICAgIFwiY291bnRyeVwiOiBcIklUXCIsXHJcbiAgICAgIFwic3VucmlzZVwiOiAxNjYxODM0MTg3LFxyXG4gICAgICBcInN1bnNldFwiOiAxNjYxODgyMjQ4XHJcbiAgICB9LFxyXG4gICAgXCJ0aW1lem9uZVwiOiA3MjAwLFxyXG4gICAgXCJpZFwiOiAzMTYzODU4LFxyXG4gICAgXCJuYW1lXCI6IFwiWm9jY2FcIixcclxuICAgIFwiY29kXCI6IDIwMFxyXG59O1xyXG5cclxuZXhwb3J0IHsgY3VycmVudFdlYXRoZXJEYXRhIH0iLCJjb25zdCBmb3JlY2FzdFdlYXRoZXJEYXRhID0ge1xyXG4gICAgXCJjb2RcIjogXCIyMDBcIixcclxuICAgIFwibWVzc2FnZVwiOiAwLFxyXG4gICAgXCJjbnRcIjogNDAsXHJcbiAgICBcImxpc3RcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODcxNjAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjk2Ljc2LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5Ni45OCxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjk2Ljc2LFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTcuODcsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMyxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogNjksXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogLTEuMTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNTAwLFxyXG4gICAgICAgICAgICBcIm1haW5cIjogXCJSYWluXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJsaWdodCByYWluXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcIjEwZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImNsb3Vkc1wiOiB7XHJcbiAgICAgICAgICBcImFsbFwiOiAxMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2luZFwiOiB7XHJcbiAgICAgICAgICBcInNwZWVkXCI6IDAuNjIsXHJcbiAgICAgICAgICBcImRlZ1wiOiAzNDksXHJcbiAgICAgICAgICBcImd1c3RcIjogMS4xOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgICAgIFwicG9wXCI6IDAuMzIsXHJcbiAgICAgICAgXCJyYWluXCI6IHtcclxuICAgICAgICAgIFwiM2hcIjogMC4yNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOC0zMCAxNTowMDowMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjE4ODI0MDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTUuNDUsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjk1LjU5LFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTIuODQsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5NS40NSxcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTMxLFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA3MSxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAyLjYxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDUwMCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibGlnaHQgcmFpblwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCIxMG5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICAgICAgXCJhbGxcIjogOTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2luZFwiOiB7XHJcbiAgICAgICAgICBcInNwZWVkXCI6IDEuOTcsXHJcbiAgICAgICAgICBcImRlZ1wiOiAxNTcsXHJcbiAgICAgICAgICBcImd1c3RcIjogMy4zOVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgICAgIFwicG9wXCI6IDAuMzMsXHJcbiAgICAgICAgXCJyYWluXCI6IHtcclxuICAgICAgICAgIFwiM2hcIjogMC41N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOC0zMCAxODowMDowMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjE4OTMyMDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTIuNDYsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjkyLjU0LFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTAuMzEsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5Mi40NixcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTMxLFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA4MCxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAyLjE1XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDUwMCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibGlnaHQgcmFpblwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCIxMG5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICAgICAgXCJhbGxcIjogNjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2luZFwiOiB7XHJcbiAgICAgICAgICBcInNwZWVkXCI6IDIuNjYsXHJcbiAgICAgICAgICBcImRlZ1wiOiAyMTAsXHJcbiAgICAgICAgICBcImd1c3RcIjogMy41OFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgICAgIFwicG9wXCI6IDAuNyxcclxuICAgICAgICBcInJhaW5cIjoge1xyXG4gICAgICAgICAgXCIzaFwiOiAwLjQ5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN5c1wiOiB7XHJcbiAgICAgICAgICBcInBvZFwiOiBcIm5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkdF90eHRcIjogXCIyMDIyLTA4LTMwIDIxOjAwOjAwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MjI5MjgwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5NC45MyxcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTQuODMsXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5NC45MyxcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjk0LjkzLFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE4LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxOCxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzUsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDY0LFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2VhdGhlclwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogODA0LFxyXG4gICAgICAgICAgICBcIm1haW5cIjogXCJDbG91ZHNcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCIwNGRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICAgICAgXCJhbGxcIjogODhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwid2luZFwiOiB7XHJcbiAgICAgICAgICBcInNwZWVkXCI6IDEuMTQsXHJcbiAgICAgICAgICBcImRlZ1wiOiAxNyxcclxuICAgICAgICAgIFwiZ3VzdFwiOiAxLjU3XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpc2liaWxpdHlcIjogMTAwMDAsXHJcbiAgICAgICAgXCJwb3BcIjogMCxcclxuICAgICAgICBcInN5c1wiOiB7XHJcbiAgICAgICAgICBcInBvZFwiOiBcImRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkdF90eHRcIjogXCIyMDIyLTA5LTA0IDEyOjAwOjAwXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiY2l0eVwiOiB7XHJcbiAgICAgIFwiaWRcIjogMzE2Mzg1OCxcclxuICAgICAgXCJuYW1lXCI6IFwiWm9jY2FcIixcclxuICAgICAgXCJjb29yZFwiOiB7XHJcbiAgICAgICAgXCJsYXRcIjogNDQuMzQsXHJcbiAgICAgICAgXCJsb25cIjogMTAuOTlcclxuICAgICAgfSxcclxuICAgICAgXCJjb3VudHJ5XCI6IFwiSVRcIixcclxuICAgICAgXCJwb3B1bGF0aW9uXCI6IDQ1OTMsXHJcbiAgICAgIFwidGltZXpvbmVcIjogNzIwMCxcclxuICAgICAgXCJzdW5yaXNlXCI6IDE2NjE4MzQxODcsXHJcbiAgICAgIFwic3Vuc2V0XCI6IDE2NjE4ODIyNDhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtmb3JlY2FzdFdlYXRoZXJEYXRhfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3VycmVudFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vanNvbi9jdXJyZW50LWV4YW1wbGVcIjtcclxuaW1wb3J0IHsgZm9yZWNhc3RXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2pzb24vZm9yZWNhc3QtZXhhbXBsZVwiO1xyXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2FwaVwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXAoZGF0YSl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRIaWdoVGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCkgKyAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50TG93VGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbikgLSAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGZWVsc0xpa2VUZW1wKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SHVtaWRpdHlQZXJjZW50YWdlKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNvciA9IDA7XHJcbiAgICBpZiAod2VhdGhlciA9PT0gJ0RyaXp6bGUnIHx8IHdlYXRoZXIgPT09ICdUaHVuZGVyc3Rvcm0nKSB7XHJcbiAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1IC0gNSArIDEpKSArIDU7XHJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdSYWluJykge1xyXG4gICAgICAgIGlmKGNvbmRpdGlvbiA9PT0gJ2xpZ2h0IHJhaW4nIHx8IGNvbmRpdGlvbiA9PT0gJ21vZGVyYXRlIHJhaW4nKSB7XHJcbiAgICAgICAgICAgIGNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCAtIDI1ICsgMSkpICsgMjU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDUwICsgMSkpICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZFNwZWVkKGRhdGEpIHtcclxuICAgICByZXR1cm4gZGF0YS53aW5kLnNwZWVkO1xyXG59XHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmZXRjaEN1cnJlbnRXZWF0aGVyRGF0YSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9