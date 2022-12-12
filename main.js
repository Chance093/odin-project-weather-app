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
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.trim()},${state.trim()},US&appid=${API_KEY}`)
        const obj = await response.json();
        const data = [obj[0].lat, obj[0].lon, obj[0].name, obj[0].state];
        return data;
    } catch (err) {
        alert('Type in something valid');
    }
}

async function fetchWeatherData(e) {
    if (e.key !== 'Enter') return;
    try{
        const [lat, lon, city, state] = await fetchGeoCoords(e.target.value);
        const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        const responses = await Promise.all([fetch(url1), fetch(url2)]);
        const data1 = await responses[0].json();
        const data2 = await responses[1].json();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderLocation)(city, state);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderCurrentWeather)(data1);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderForecastWeather)(data2);
        e.target.value = '';
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
/* harmony export */   "renderForecastWeather": () => (/* binding */ renderForecastWeather),
/* harmony export */   "renderLocation": () => (/* binding */ renderLocation)
/* harmony export */ });
/* harmony import */ var _parse_currentData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse/currentData */ "./src/parse/currentData.js");
/* harmony import */ var _parse_forecastData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/forecastData */ "./src/parse/forecastData.js");



    
function renderLocation(city, state) {
    const location = document.querySelector('.city-state');
    location.textContent = `${city}, ${state}`;
}

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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");



const input = document.querySelector('input');
input.addEventListener('keydown', _api__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFlBQVksR0FBRyxhQUFhLFlBQVksUUFBUTtBQUN2STtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxJQUFJLE9BQU8sSUFBSSx3QkFBd0IsUUFBUTtBQUMzSCw2RUFBNkUsSUFBSSxPQUFPLElBQUksd0JBQXdCLFFBQVE7QUFDNUg7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYztBQUN0QixRQUFRLDBEQUFvQjtBQUM1QixRQUFRLDJEQUFxQjtBQUM3QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCNkM7QUFHYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLLElBQUksTUFBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtFQUFjLE9BQU8sS0FBSztBQUN6RCx5QkFBeUIsb0VBQWdCO0FBQ3pDLG9DQUFvQyxzRUFBa0IsT0FBTyxNQUFNLEtBQUsscUVBQWlCLE9BQU8sS0FBSztBQUNyRyw2QkFBNkIsb0VBQWdCLE9BQU8sS0FBSztBQUN6RCw4QkFBOEIseUVBQXFCLE9BQU87QUFDMUQseUJBQXlCLDZFQUF5QixPQUFPO0FBQ3pELDBCQUEwQixnRUFBWSxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2RUFBd0I7QUFDNUMsc0JBQXNCLHlFQUFvQjtBQUMxQyxxQkFBcUIsd0VBQW1CO0FBQ3hDO0FBQ0E7QUFDQSx3REFBd0QsYUFBYSxLQUFLO0FBQzFFLHdEQUF3RCxZQUFZLEtBQUs7QUFDekU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtEQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9wYXJzZS9jdXJyZW50RGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvcGFyc2UvZm9yZWNhc3REYXRhLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJMb2NhdGlvbiwgcmVuZGVyQ3VycmVudFdlYXRoZXIsIHJlbmRlckZvcmVjYXN0V2VhdGhlciB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuY29uc3QgQVBJX0tFWSA9ICc3YjE4OWFlN2ViMGY4ZjZmNjZhZDJmMTUyNmE2YmQzMSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdlb0Nvb3JkcyhpbnB1dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbY2l0eSwgc3RhdGVdID0gaW5wdXQuc3BsaXQoJywnKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eS50cmltKCl9LCR7c3RhdGUudHJpbSgpfSxVUyZhcHBpZD0ke0FQSV9LRVl9YClcclxuICAgICAgICBjb25zdCBvYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtvYmpbMF0ubGF0LCBvYmpbMF0ubG9uLCBvYmpbMF0ubmFtZSwgb2JqWzBdLnN0YXRlXTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCdUeXBlIGluIHNvbWV0aGluZyB2YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGUpIHtcclxuICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuO1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IFtsYXQsIGxvbiwgY2l0eSwgc3RhdGVdID0gYXdhaXQgZmV0Y2hHZW9Db29yZHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHVybDEgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7QVBJX0tFWX1gO1xyXG4gICAgICAgIGNvbnN0IHVybDIgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz1pbXBlcmlhbCZhcHBpZD0ke0FQSV9LRVl9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2godXJsMSksIGZldGNoKHVybDIpXSk7XHJcbiAgICAgICAgY29uc3QgZGF0YTEgPSBhd2FpdCByZXNwb25zZXNbMF0uanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzcG9uc2VzWzFdLmpzb24oKTtcclxuICAgICAgICByZW5kZXJMb2NhdGlvbihjaXR5LCBzdGF0ZSk7XHJcbiAgICAgICAgcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YTEpO1xyXG4gICAgICAgIHJlbmRlckZvcmVjYXN0V2VhdGhlcihkYXRhMik7XHJcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0ICgnQ291bGQgbm90IHJldHJpZXZlIGRhdGEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtmZXRjaFdlYXRoZXJEYXRhfSIsImltcG9ydCB7Z2V0Q3VycmVudFRlbXAsXHJcbiAgICBnZXRXZWF0aGVySW1nU3JjLFxyXG4gICAgZ2V0Q3VycmVudEhpZ2hUZW1wLFxyXG4gICAgZ2V0Q3VycmVudExvd1RlbXAsXHJcbiAgICBnZXRGZWVsc0xpa2VUZW1wLFxyXG4gICAgZ2V0SHVtaWRpdHlQZXJjZW50YWdlLFxyXG4gICAgZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZSxcclxuICAgIGdldFdpbmRTcGVlZH0gZnJvbSBcIi4vcGFyc2UvY3VycmVudERhdGFcIjtcclxuaW1wb3J0IHsgZ2V0Rm9yZWNhc3RIaWdoVGVtcHMsIFxyXG4gICAgZ2V0Rm9yZWNhc3RMb3dUZW1wcywgXHJcbiAgICBnZXRGb3JlY2FzdFdlYXRoZXJJbWdTcmMgfSBmcm9tIFwiLi9wYXJzZS9mb3JlY2FzdERhdGFcIjtcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gcmVuZGVyTG9jYXRpb24oY2l0eSwgc3RhdGUpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktc3RhdGUnKTtcclxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7Y2l0eX0sICR7c3RhdGV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YSkge1xyXG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJyk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKTtcclxuICAgIGNvbnN0IGN1cnJlbnRNaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1taW4tbWF4Jyk7XHJcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZS12YWx1ZScpO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktdmFsdWUnKTtcclxuICAgIGNvbnN0IGNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ItdmFsdWUnKTtcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC12YWx1ZScpO1xyXG4gICAgXHJcbiAgICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBgJHtnZXRDdXJyZW50VGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBjdXJyZW50V2VhdGhlci5zcmMgPSBnZXRXZWF0aGVySW1nU3JjKGRhdGEpO1xyXG4gICAgY3VycmVudE1pbk1heC5pbm5lckhUTUwgPSBgSDogJHtnZXRDdXJyZW50SGlnaFRlbXAoZGF0YSl9JmRlZzsgTDogJHtnZXRDdXJyZW50TG93VGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYCR7Z2V0RmVlbHNMaWtlVGVtcChkYXRhKX0mZGVnO2A7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2dldEh1bWlkaXR5UGVyY2VudGFnZShkYXRhKX0lYDtcclxuICAgIGNvci50ZXh0Q29udGVudCA9IGAke2dldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSl9JWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7Z2V0V2luZFNwZWVkKGRhdGEpfSBtcGhgO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb3JlY2FzdFdlYXRoZXIoZGF0YSkge1xyXG4gICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LXdlYXRoZXInKTtcclxuICAgIGNvbnN0IGZvcmVjYXN0TWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LW1heCcpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtbWluJyk7XHJcbiAgICBjb25zdCBzb3VyY2VzID0gZ2V0Rm9yZWNhc3RXZWF0aGVySW1nU3JjKGRhdGEpO1xyXG4gICAgY29uc3QgaGlnaFRlbXBzID0gZ2V0Rm9yZWNhc3RIaWdoVGVtcHMoZGF0YSk7XHJcbiAgICBjb25zdCBsb3dUZW1wcyA9IGdldEZvcmVjYXN0TG93VGVtcHMoZGF0YSk7XHJcblxyXG4gICAgZm9yZWNhc3RXZWF0aGVyLmZvckVhY2goKGltZywgaSkgPT4gaW1nLnNyYyA9IHNvdXJjZXNbaV0pO1xyXG4gICAgZm9yZWNhc3RNYXguZm9yRWFjaCgoaFQsIGkpID0+IGhULmlubmVySFRNTCA9IGBIOiAke2hpZ2hUZW1wc1tpXX0mZGVnO2ApO1xyXG4gICAgZm9yZWNhc3RNaW4uZm9yRWFjaCgobFQsIGkpID0+IGxULmlubmVySFRNTCA9IGBMOiAke2xvd1RlbXBzW2ldfSZkZWc7YCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyTG9jYXRpb24sIHJlbmRlckN1cnJlbnRXZWF0aGVyLCByZW5kZXJGb3JlY2FzdFdlYXRoZXJ9IiwiZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXAoZGF0YSl7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJJbWdTcmMoZGF0YSkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgc3dpdGNoKHdlYXRoZXIpIHtcclxuICAgICAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL3RodW5kZXJzdG9ybS5wbmcnO1xyXG4gICAgICAgIGNhc2UgJ0RyaXp6bGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gJy4uL3NyYy9pbWdzL2RyaXp6bGUucG5nJztcclxuICAgICAgICBjYXNlICdSYWluJzpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9yYWluLnBuZyc7XHJcbiAgICAgICAgY2FzZSAnU25vdyc6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3Mvc25vdy5wbmcnO1xyXG4gICAgICAgIGNhc2UgJ0NsZWFyJzpcclxuICAgICAgICAgICAgcmV0dXJuICcuLi9zcmMvaW1ncy9jbGVhci5wbmcnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnLi4vc3JjL2ltZ3MvY2xvdWRzLnBuZyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRIaWdoVGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCkgKyAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50TG93VGVtcChkYXRhKXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbikgLSAyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGZWVsc0xpa2VUZW1wKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SHVtaWRpdHlQZXJjZW50YWdlKGRhdGEpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpblBlcmNlbnRhZ2UoZGF0YSkge1xyXG4gICAgY29uc3Qgd2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNvciA9IDA7XHJcbiAgICBpZiAod2VhdGhlciA9PT0gJ0RyaXp6bGUnIHx8IHdlYXRoZXIgPT09ICdUaHVuZGVyc3Rvcm0nKSB7XHJcbiAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1IC0gNSArIDEpKSArIDU7XHJcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIgPT09ICdSYWluJykge1xyXG4gICAgICAgIGlmKGNvbmRpdGlvbiA9PT0gJ2xpZ2h0IHJhaW4nIHx8IGNvbmRpdGlvbiA9PT0gJ21vZGVyYXRlIHJhaW4nKSB7XHJcbiAgICAgICAgICAgIGNvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCAtIDI1ICsgMSkpICsgMjU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDUwICsgMSkpICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZFNwZWVkKGRhdGEpIHtcclxuICAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Q3VycmVudFRlbXAsXHJcbiAgICBnZXRXZWF0aGVySW1nU3JjLFxyXG4gICAgZ2V0Q3VycmVudEhpZ2hUZW1wLFxyXG4gICAgZ2V0Q3VycmVudExvd1RlbXAsXHJcbiAgICBnZXRGZWVsc0xpa2VUZW1wLFxyXG4gICAgZ2V0SHVtaWRpdHlQZXJjZW50YWdlLFxyXG4gICAgZ2V0Q2hhbmNlT2ZSYWluUGVyY2VudGFnZSxcclxuICAgIGdldFdpbmRTcGVlZFxyXG59IiwiZnVuY3Rpb24gc29ydEJ5RGF0ZShkYXRhKSB7XHJcbiAgICBsZXQgZGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGRheU9uZSA9IFtdO1xyXG4gICAgY29uc3QgZGF5VHdvID0gW107XHJcbiAgICBjb25zdCBkYXlUaHJlZSA9IFtdO1xyXG4gICAgY29uc3QgZGF5Rm91ciA9IFtdO1xyXG4gICAgY29uc3QgZGF5Rml2ZSA9IFtdO1xyXG4gICAgZGF0YS5saXN0LmZvckVhY2goZmMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZmMuZHRfdHh0LnNwbGl0KCcgJylbMF07XHJcbiAgICAgICAgaWYoY3VycmVudERhdGUgIT09IGRhdGUpe1xyXG4gICAgICAgICAgICBpZiAoZGF5T25lLmxlbmd0aCA9PT0gMCkgZGF5T25lLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlUd28ubGVuZ3RoID09PSAwKSBkYXlUd28ucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheVRocmVlLmxlbmd0aCA9PT0gMCkgZGF5VGhyZWUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUZvdXIubGVuZ3RoID09PSAwKSBkYXlGb3VyLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlGaXZlLmxlbmd0aCA9PT0gMCkgZGF5Rml2ZS5wdXNoKGZjKTtcclxuICAgICAgICAgICAgZGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkYXlUd28ubGVuZ3RoID09PSAwKSBkYXlPbmUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheVRocmVlLmxlbmd0aCA9PT0gMCkgZGF5VHdvLnB1c2goZmMpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlGb3VyLmxlbmd0aCA9PT0gMCkgZGF5VGhyZWUucHVzaChmYyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUZpdmUubGVuZ3RoID09PSAwKSBkYXlGb3VyLnB1c2goZmMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gW2RheU9uZSwgZGF5VHdvLCBkYXlUaHJlZSwgZGF5Rm91ciwgZGF5Rml2ZV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0SGlnaFRlbXBzKGRhdGEpIHtcclxuICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRCeURhdGUoZGF0YSk7XHJcbiAgICBjb25zdCBoaWdoVGVtcHMgPSBbXTtcclxuICAgIHNvcnRlZC5mb3JFYWNoKGFyciA9PiB7XHJcbiAgICAgICAgYXJyLnNvcnQoKGEsIGIpID0+IGEubWFpbi50ZW1wIC0gYi5tYWluLnRlbXApO1xyXG4gICAgICAgIGhpZ2hUZW1wcy5wdXNoKE1hdGgucm91bmQoYXJyW2Fyci5sZW5ndGggLSAxXS5tYWluLnRlbXApKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gaGlnaFRlbXBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdExvd1RlbXBzKGRhdGEpIHtcclxuICAgIGNvbnN0IHNvcnRlZCA9IHNvcnRCeURhdGUoZGF0YSk7XHJcbiAgICBjb25zdCBsb3dUZW1wcyA9IFtdO1xyXG4gICAgc29ydGVkLmZvckVhY2goYXJyID0+IHtcclxuICAgICAgICBhcnIuc29ydCgoYSwgYikgPT4gYi5tYWluLnRlbXAgLSBhLm1haW4udGVtcCk7XHJcbiAgICAgICAgbG93VGVtcHMucHVzaChNYXRoLnJvdW5kKGFyclthcnIubGVuZ3RoIC0gMV0ubWFpbi50ZW1wKSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGxvd1RlbXBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdFdlYXRoZXJJbWdTcmMoZGF0YSkge1xyXG4gICAgY29uc3Qgc29ydGVkID0gc29ydEJ5RGF0ZShkYXRhKTtcclxuICAgIGNvbnN0IHNvdXJjZXMgPSBbXTtcclxuICAgIHNvcnRlZC5mb3JFYWNoKGFyciA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGFyclswXS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICAgICAgc3dpdGNoKHdlYXRoZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAnVGh1bmRlcnN0b3JtJzpcclxuICAgICAgICAgICAgICAgIHNvdXJjZXMucHVzaCgnLi4vc3JjL2ltZ3MvdGh1bmRlcnN0b3JtLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RyaXp6bGUnOlxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKCcuLi9zcmMvaW1ncy9kcml6emxlLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOlxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKCcuLi9zcmMvaW1ncy9yYWluLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1Nub3cnOlxyXG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKCcuLi9zcmMvaW1ncy9zbm93LnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NsZWFyJzpcclxuICAgICAgICAgICAgICAgIHNvdXJjZXMucHVzaCgnLi4vc3JjL2ltZ3MvY2xlYXIucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHNvdXJjZXMucHVzaCgnLi4vc3JjL2ltZ3MvY2xvdWRzLnBuZycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNvdXJjZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0Rm9yZWNhc3RIaWdoVGVtcHMsIGdldEZvcmVjYXN0TG93VGVtcHMsIGdldEZvcmVjYXN0V2VhdGhlckltZ1NyY30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZldGNoV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmZXRjaFdlYXRoZXJEYXRhKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=