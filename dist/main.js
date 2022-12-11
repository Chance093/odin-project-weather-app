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
/* harmony export */   "fetchGeoCoords": () => (/* binding */ fetchGeoCoords)
/* harmony export */ });
const API_KEY = '7b189ae7eb0f8f6f66ad2f1526a6bd31';

async function fetchGeoCoords(e) {
    if(e.key !== 'Enter') return;
    try {
        const [city, state] = e.target.value.split(',');
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()},${state.trim()},US&appid=${API_KEY}`)
        const obj = await response.json();
        const coords = [obj[0].lat, obj[0].lon];
        return coords;
    } catch (err) {
        alert('Type in something valid');
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
input.addEventListener('keydown', _api__WEBPACK_IMPORTED_MODULE_2__.fetchGeoCoords);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2pzb24vY3VycmVudC1leGFtcGxlLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9qc29uL2ZvcmVjYXN0LWV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSAnN2IxODlhZTdlYjBmOGY2ZjY2YWQyZjE1MjZhNmJkMzEnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hHZW9Db29yZHMoZSkge1xyXG4gICAgaWYoZS5rZXkgIT09ICdFbnRlcicpIHJldHVybjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW2NpdHksIHN0YXRlXSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHkudHJpbSgpfSwke3N0YXRlLnRyaW0oKX0sVVMmYXBwaWQ9JHtBUElfS0VZfWApXHJcbiAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFtvYmpbMF0ubGF0LCBvYmpbMF0ubG9uXTtcclxuICAgICAgICByZXR1cm4gY29vcmRzO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ1R5cGUgaW4gc29tZXRoaW5nIHZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge2ZldGNoR2VvQ29vcmRzfSIsImNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHtcclxuICAgIFwiY29vcmRcIjoge1xyXG4gICAgICBcImxvblwiOiAxMC45OSxcclxuICAgICAgXCJsYXRcIjogNDQuMzRcclxuICAgIH0sXHJcbiAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJpZFwiOiA1MDEsXHJcbiAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJtb2RlcmF0ZSByYWluXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiMTBkXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiYmFzZVwiOiBcInN0YXRpb25zXCIsXHJcbiAgICBcIm1haW5cIjoge1xyXG4gICAgICBcInRlbXBcIjogMjk4LjQ4LFxyXG4gICAgICBcImZlZWxzX2xpa2VcIjogMjk4Ljc0LFxyXG4gICAgICBcInRlbXBfbWluXCI6IDI5Ny41NixcclxuICAgICAgXCJ0ZW1wX21heFwiOiAzMDAuMDUsXHJcbiAgICAgIFwicHJlc3N1cmVcIjogMTAxNSxcclxuICAgICAgXCJodW1pZGl0eVwiOiA2NCxcclxuICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgXCJncm5kX2xldmVsXCI6IDkzM1xyXG4gICAgfSxcclxuICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgIFwid2luZFwiOiB7XHJcbiAgICAgIFwic3BlZWRcIjogMC42MixcclxuICAgICAgXCJkZWdcIjogMzQ5LFxyXG4gICAgICBcImd1c3RcIjogMS4xOFxyXG4gICAgfSxcclxuICAgIFwicmFpblwiOiB7XHJcbiAgICAgIFwiMWhcIjogMy4xNlxyXG4gICAgfSxcclxuICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgXCJhbGxcIjogMTAwXHJcbiAgICB9LFxyXG4gICAgXCJkdFwiOiAxNjYxODcwNTkyLFxyXG4gICAgXCJzeXNcIjoge1xyXG4gICAgICBcInR5cGVcIjogMixcclxuICAgICAgXCJpZFwiOiAyMDc1NjYzLFxyXG4gICAgICBcImNvdW50cnlcIjogXCJJVFwiLFxyXG4gICAgICBcInN1bnJpc2VcIjogMTY2MTgzNDE4NyxcclxuICAgICAgXCJzdW5zZXRcIjogMTY2MTg4MjI0OFxyXG4gICAgfSxcclxuICAgIFwidGltZXpvbmVcIjogNzIwMCxcclxuICAgIFwiaWRcIjogMzE2Mzg1OCxcclxuICAgIFwibmFtZVwiOiBcIlpvY2NhXCIsXHJcbiAgICBcImNvZFwiOiAyMDBcclxufTtcclxuXHJcbmV4cG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IiwiY29uc3QgZm9yZWNhc3RXZWF0aGVyRGF0YSA9IHtcclxuICAgIFwiY29kXCI6IFwiMjAwXCIsXHJcbiAgICBcIm1lc3NhZ2VcIjogMCxcclxuICAgIFwiY250XCI6IDQwLFxyXG4gICAgXCJsaXN0XCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZHRcIjogMTY2MTg3MTYwMCxcclxuICAgICAgICBcIm1haW5cIjoge1xyXG4gICAgICAgICAgXCJ0ZW1wXCI6IDI5Ni43NixcclxuICAgICAgICAgIFwiZmVlbHNfbGlrZVwiOiAyOTYuOTgsXHJcbiAgICAgICAgICBcInRlbXBfbWluXCI6IDI5Ni43NixcclxuICAgICAgICAgIFwidGVtcF9tYXhcIjogMjk3Ljg3LFxyXG4gICAgICAgICAgXCJwcmVzc3VyZVwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJzZWFfbGV2ZWxcIjogMTAxNSxcclxuICAgICAgICAgIFwiZ3JuZF9sZXZlbFwiOiA5MzMsXHJcbiAgICAgICAgICBcImh1bWlkaXR5XCI6IDY5LFxyXG4gICAgICAgICAgXCJ0ZW1wX2tmXCI6IC0xLjExXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDUwMCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiUmFpblwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwibGlnaHQgcmFpblwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCIxMGRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJjbG91ZHNcIjoge1xyXG4gICAgICAgICAgXCJhbGxcIjogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAwLjYyLFxyXG4gICAgICAgICAgXCJkZWdcIjogMzQ5LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDEuMThcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjMyLFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuMjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMTU6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODgyNDAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjk1LjQ1LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5NS41OSxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjkyLjg0LFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTUuNDUsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogNzEsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMi42MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDk2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLjk3LFxyXG4gICAgICAgICAgXCJkZWdcIjogMTU3LFxyXG4gICAgICAgICAgXCJndXN0XCI6IDMuMzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjMzLFxyXG4gICAgICAgIFwicmFpblwiOiB7XHJcbiAgICAgICAgICBcIjNoXCI6IDAuNTdcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3lzXCI6IHtcclxuICAgICAgICAgIFwicG9kXCI6IFwiblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImR0X3R4dFwiOiBcIjIwMjItMDgtMzAgMTg6MDA6MDBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkdFwiOiAxNjYxODkzMjAwLFxyXG4gICAgICAgIFwibWFpblwiOiB7XHJcbiAgICAgICAgICBcInRlbXBcIjogMjkyLjQ2LFxyXG4gICAgICAgICAgXCJmZWVsc19saWtlXCI6IDI5Mi41NCxcclxuICAgICAgICAgIFwidGVtcF9taW5cIjogMjkwLjMxLFxyXG4gICAgICAgICAgXCJ0ZW1wX21heFwiOiAyOTIuNDYsXHJcbiAgICAgICAgICBcInByZXNzdXJlXCI6IDEwMTUsXHJcbiAgICAgICAgICBcInNlYV9sZXZlbFwiOiAxMDE1LFxyXG4gICAgICAgICAgXCJncm5kX2xldmVsXCI6IDkzMSxcclxuICAgICAgICAgIFwiaHVtaWRpdHlcIjogODAsXHJcbiAgICAgICAgICBcInRlbXBfa2ZcIjogMi4xNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ3ZWF0aGVyXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwibWFpblwiOiBcIlJhaW5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcImxpZ2h0IHJhaW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMTBuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDY4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAyLjY2LFxyXG4gICAgICAgICAgXCJkZWdcIjogMjEwLFxyXG4gICAgICAgICAgXCJndXN0XCI6IDMuNThcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiAxMDAwMCxcclxuICAgICAgICBcInBvcFwiOiAwLjcsXHJcbiAgICAgICAgXCJyYWluXCI6IHtcclxuICAgICAgICAgIFwiM2hcIjogMC40OVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOC0zMCAyMTowMDowMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImR0XCI6IDE2NjIyOTI4MDAsXHJcbiAgICAgICAgXCJtYWluXCI6IHtcclxuICAgICAgICAgIFwidGVtcFwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcImZlZWxzX2xpa2VcIjogMjk0LjgzLFxyXG4gICAgICAgICAgXCJ0ZW1wX21pblwiOiAyOTQuOTMsXHJcbiAgICAgICAgICBcInRlbXBfbWF4XCI6IDI5NC45MyxcclxuICAgICAgICAgIFwicHJlc3N1cmVcIjogMTAxOCxcclxuICAgICAgICAgIFwic2VhX2xldmVsXCI6IDEwMTgsXHJcbiAgICAgICAgICBcImdybmRfbGV2ZWxcIjogOTM1LFxyXG4gICAgICAgICAgXCJodW1pZGl0eVwiOiA2NCxcclxuICAgICAgICAgIFwidGVtcF9rZlwiOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndlYXRoZXJcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDgwNCxcclxuICAgICAgICAgICAgXCJtYWluXCI6IFwiQ2xvdWRzXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJvdmVyY2FzdCBjbG91ZHNcIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiMDRkXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiY2xvdWRzXCI6IHtcclxuICAgICAgICAgIFwiYWxsXCI6IDg4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIndpbmRcIjoge1xyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLjE0LFxyXG4gICAgICAgICAgXCJkZWdcIjogMTcsXHJcbiAgICAgICAgICBcImd1c3RcIjogMS41N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IDEwMDAwLFxyXG4gICAgICAgIFwicG9wXCI6IDAsXHJcbiAgICAgICAgXCJzeXNcIjoge1xyXG4gICAgICAgICAgXCJwb2RcIjogXCJkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZHRfdHh0XCI6IFwiMjAyMi0wOS0wNCAxMjowMDowMFwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBcImNpdHlcIjoge1xyXG4gICAgICBcImlkXCI6IDMxNjM4NTgsXHJcbiAgICAgIFwibmFtZVwiOiBcIlpvY2NhXCIsXHJcbiAgICAgIFwiY29vcmRcIjoge1xyXG4gICAgICAgIFwibGF0XCI6IDQ0LjM0LFxyXG4gICAgICAgIFwibG9uXCI6IDEwLjk5XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiY291bnRyeVwiOiBcIklUXCIsXHJcbiAgICAgIFwicG9wdWxhdGlvblwiOiA0NTkzLFxyXG4gICAgICBcInRpbWV6b25lXCI6IDcyMDAsXHJcbiAgICAgIFwic3VucmlzZVwiOiAxNjYxODM0MTg3LFxyXG4gICAgICBcInN1bnNldFwiOiAxNjYxODgyMjQ4XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Zm9yZWNhc3RXZWF0aGVyRGF0YX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGN1cnJlbnRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2pzb24vY3VycmVudC1leGFtcGxlXCI7XHJcbmltcG9ydCB7IGZvcmVjYXN0V2VhdGhlckRhdGEgfSBmcm9tIFwiLi9qc29uL2ZvcmVjYXN0LWV4YW1wbGVcIjtcclxuaW1wb3J0IHsgZmV0Y2hHZW9Db29yZHMgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wKGRhdGEpe1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50SGlnaFRlbXAoZGF0YSl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXgpICsgMjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudExvd1RlbXAoZGF0YSl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pIC0gMjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmVlbHNMaWtlVGVtcChkYXRhKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEh1bWlkaXR5UGVyY2VudGFnZShkYXRhKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4uaHVtaWRpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaGFuY2VPZlJhaW5QZXJjZW50YWdlKGRhdGEpIHtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGxldCBjb3IgPSAwO1xyXG4gICAgaWYgKHdlYXRoZXIgPT09ICdEcml6emxlJyB8fCB3ZWF0aGVyID09PSAnVGh1bmRlcnN0b3JtJykge1xyXG4gICAgICAgIGNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNSAtIDUgKyAxKSkgKyA1O1xyXG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyID09PSAnUmFpbicpIHtcclxuICAgICAgICBpZihjb25kaXRpb24gPT09ICdsaWdodCByYWluJyB8fCBjb25kaXRpb24gPT09ICdtb2RlcmF0ZSByYWluJykge1xyXG4gICAgICAgICAgICBjb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTAgLSAyNSArIDEpKSArIDI1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAgLSA1MCArIDEpKSArIDUwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRTcGVlZChkYXRhKSB7XHJcbiAgICAgcmV0dXJuIGRhdGEud2luZC5zcGVlZDtcclxufVxyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZmV0Y2hHZW9Db29yZHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==