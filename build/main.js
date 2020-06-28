/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertService\", function() { return AlertService; });\n/* harmony import */ var _utils_input_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/input-are-valid */ \"./src/app/utils/input-are-valid.js\");\n\n\nclass AlertService {\n  constructor() {\n    this.errorBox = document.getElementById(\"error\");\n  }\n\n  handleAdditionError(inputs, numbers) {\n    const fullMessage = inputs.reduce((message, str, index) => {\n      if (Object(_utils_input_are_valid__WEBPACK_IMPORTED_MODULE_0__[\"inputsAreValid\"])(numbers[index])) {\n        return message + \"\";\n      } else {\n        return message + `${str} is not a number. `;\n      }\n    }, \"Please enter two valid numbers! \");\n\n    this.errorBox.classList.remove(\"invisible\");\n    this.errorBox.innerText = fullMessage;\n  }\n\n  hideErrors() {\n    this.errorBox.classList.add(\"invisible\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/app/alert.service.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony import */ var _utils_input_are_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/input-are-valid */ \"./src/app/utils/input-are-valid.js\");\n/* harmony import */ var _utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/parse-inputs */ \"./src/app/utils/parse-inputs.js\");\n\n\n\nconst run = (alertService, componentService) => {\n  alertService.hideErrors();\n\n  componentService.onClick(() => {\n    alertService.hideErrors();\n    const inputs = componentService.getInputs();\n    const parsedInputs = Object(_utils_parse_inputs__WEBPACK_IMPORTED_MODULE_1__[\"parseInputs\"])(...inputs);\n    if (Object(_utils_input_are_valid__WEBPACK_IMPORTED_MODULE_0__[\"inputsAreValid\"])(...parsedInputs)) {\n      const [numA, numB] = parsedInputs;\n      componentService.setResult(numA + numB);\n    } else {\n      componentService.setResult(\"\");\n      alertService.handleAdditionError(inputs, parsedInputs);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/components.service.js":
/*!***************************************!*\
  !*** ./src/app/components.service.js ***!
  \***************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComponentService\", function() { return ComponentService; });\nclass ComponentService {\n  constructor() {\n    this.numberOneInput = document.getElementById(\"numberOne\");\n    this.numberTwoInput = document.getElementById(\"numberTwo\");\n    this.addValuesButton = document.getElementById(\"addValues\");\n    this.resultDiv = document.getElementById(\"result\");\n  }\n\n  getInputs() {\n    return [this.numberOneInput.value, this.numberTwoInput.value];\n  }\n\n  setResult(str) {\n    this.resultDiv.innerText = str;\n  }\n\n  onClick(cb) {\n    this.addValuesButton.addEventListener(\"click\", cb);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/app/components.service.js?");

/***/ }),

/***/ "./src/app/utils/input-are-valid.js":
/*!******************************************!*\
  !*** ./src/app/utils/input-are-valid.js ***!
  \******************************************/
/*! exports provided: inputsAreValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputsAreValid\", function() { return inputsAreValid; });\nconst inputsAreValid = (...input) => {\n  return input.every((num) => typeof num === \"number\" && !isNaN(num));\n};\n\n\n//# sourceURL=webpack:///./src/app/utils/input-are-valid.js?");

/***/ }),

/***/ "./src/app/utils/parse-inputs.js":
/*!***************************************!*\
  !*** ./src/app/utils/parse-inputs.js ***!
  \***************************************/
/*! exports provided: parseInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseInputs\", function() { return parseInputs; });\nconst parseInputs = (...input) => {\n  return input.map((str) => parseInt(str));\n};\n\n\n//# sourceURL=webpack:///./src/app/utils/parse-inputs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/alert.service */ \"./src/app/alert.service.js\");\n/* harmony import */ var _app_components_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components.service */ \"./src/app/components.service.js\");\n\n\n\n\nconst alertService = new _app_alert_service__WEBPACK_IMPORTED_MODULE_1__[\"AlertService\"]();\nconst componentService = new _app_components_service__WEBPACK_IMPORTED_MODULE_2__[\"ComponentService\"]();\n\nObject(_app_app__WEBPACK_IMPORTED_MODULE_0__[\"run\"])(alertService, componentService);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });