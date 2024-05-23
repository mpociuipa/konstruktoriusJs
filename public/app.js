/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm.js */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_searchCode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchCode.js */ "./src/modules/searchCode.js");
// import hello from "./modules/hello";
// import renderPlaces from "./modules/form";

// renderPlaces()



(0,_modules_renderForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_searchCode_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(term) {
  var url = "http://www.omdbapi.com/?t=";
  var apiKey = "28be5430";
  return fetch("".concat(url).concat(term, "&apikey=").concat(apiKey)).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Roadmap

//Gavus duomenys is api. Uzpildyti vietovemis select elementa.
//1. gavus duomenis is api uzpildyti vietovemis select elementa
//2. gauti vietoviu json is api ServiceWorkerRegistrationconsolinti duomenis, isitikinti, kad juos gavome

/*
const getPlaces= async()=>{
    const data = await fetch('https://api.meteo.lt/v1/places')
    .then(response=>{return response.json()})
    return data
    }
    
    
    //3. sukurti tiek option elementu kiek yra vietoviu
    const renderPlaces = async() =>{
        const data = await getPlaces();
        //console.log("is kitos funkcijos", data)
        for(let place of data){
            console.log(`${place.name} --- ${place.administrativeDivision}`)
            let option = document.createElement("option");
            option.textContent = `${place.name} --- ${place.administrativeDivision}`;
            // document.querySelector("select").appendChild(option);
            document.querySelector('datalist').appendChild(option);
        }
    }
    
    //4. i option elementa ideti vietoves pavadinima
    export default renderPlaces;
    */
//antras darbas pasto kodas
var form = function form() {
  return "\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control term\" placeholder=\"Iveskite filmo pavadinima\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Ieskoti filmo</button>\n        ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/modules/form.js");

var renderForm = function renderForm() {
  var formElement = document.createElement('form');
  formElement.className = "form-inline";
  formElement.innerHTML = (0,_form_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector(".card-body").appendChild(formElement);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/renderMovieData.js":
/*!****************************************!*\
  !*** ./src/modules/renderMovieData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var renderMovieData = function renderMovieData(data) {
  var cardBody = document.querySelector(".card-body");
  if (data.Response === "False") {
    cardBody.innerHTML = "<p>".concat(data.Error, "</p>");
    return;
  }
  var movieId = data.imdbID;
  var likeCountFromStorage = localStorage.getItem("likeCount_".concat(movieId)) || 0;
  var commentsFromStorage = JSON.parse(localStorage.getItem("comments_".concat(movieId))) || [];
  cardBody.innerHTML = "\n<div class=\"row\">\n<div class=\"col-md-4\">\n<img src=\"".concat(data.Poster, "\" alt=\"").concat(data.Title, " poster\" class=\"img-fluid\">\n</div>\n<div class=\"col-md-8\">\n<h2>").concat(data.Title, " (").concat(data.Year, ")</h2>\n<p><strong>Actors:</strong> ").concat(data.Actors, "</p>\n<p><strong>Director:</strong> ").concat(data.Director, "</p>\n<p><strong>Plot:</strong> ").concat(data.Plot, "</p>\n<p><strong>Writer:</strong> ").concat(data.Writer, "</p>\n<p><strong>Runtime:</strong> ").concat(data.Runtime, "</p>\n<p><strong>imDB Rating:</strong> ").concat(data.imdbRating, "</p>\n<p><strong>Release Date:</strong> ").concat(data.Released, "</p>\n<p><strong>Genre:</strong> ").concat(data.Genre, "</p>\n\n\n</button>\n<div id=\"comments-section\">\n<h3>Comments</h3>\n<ul id=\"comments-list\">\n                        ").concat(commentsFromStorage.map(function (comment) {
    return "<li>".concat(comment, "</li>");
  }).join(''), "\n</ul>\n<form id=\"comment-form\">\n<div class=\"mb-3\">\n<label for=\"comment-input\" class=\"form-label\">Add a comment</label>\n<input type=\"text\" class=\"form-control\" id=\"comment-input\" placeholder=\"Enter your comment\">\n</div>\n<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n</div>\n</div>\n</div>\n    ");

  // const likeBtn = cardBody.querySelector('#like-btn');
  // const likeCount = cardBody.querySelector('#like-count');
  var commentForm = cardBody.querySelector('#comment-form');
  var commentInput = cardBody.querySelector('#comment-input');
  var commentsList = cardBody.querySelector('#comments-list');

  // likeBtn.addEventListener('click', () => {
  //     let count = parseInt(likeCount.textContent);
  //     count++;
  //     likeCount.textContent = count;
  //     localStorage.setItem(`likeCount_${movieId}`, count);
  // });

  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var comment = commentInput.value.trim();
    if (comment) {
      commentsFromStorage.push(comment);
      localStorage.setItem("comments_".concat(movieId), JSON.stringify(commentsFromStorage));
      var newComment = document.createElement('li');
      newComment.textContent = comment;
      commentsList.appendChild(newComment);
      commentInput.value = '';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovieData);

/***/ }),

/***/ "./src/modules/searchCode.js":
/*!***********************************!*\
  !*** ./src/modules/searchCode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");
/* harmony import */ var _renderMovieData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMovieData */ "./src/modules/renderMovieData.js");


var searchCode = function searchCode() {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var searchTerm = document.querySelector(".term").value;
    (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      return (0,_renderMovieData__WEBPACK_IMPORTED_MODULE_1__["default"])(result);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCode);
//sukoduoti klaidos pranesima, kad ismestu tokio adreso nera

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstudentsdatabase"] = self["webpackChunkstudentsdatabase"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;