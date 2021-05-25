(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("moment"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["antd", "moment", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("antd"), require("moment"), require("react")) : factory(root["antd"], root["moment"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Form/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/Form/FormCol.tsx":
/*!******************************!*\
  !*** ./src/Form/FormCol.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields */ "./src/Form/fields/index.tsx");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/object */ "./src/Form/utils/object.ts");






/**
   * 渲染cell item
   * @param item
   * @param globalSpan
   * @returns
   */

var FormCol = function FormCol(colProps) {
  var item = colProps.item,
      span = colProps.span,
      isVertical = colProps.isVertical,
      value = colProps.value,
      onFieldChange = colProps.onFieldChange,
      onKeyPress = colProps.onKeyPress,
      validate = colProps.validate;

  var label = item.label,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(item, ["label"]);

  var lableText = typeof label === 'function' ? label() : label;
  var cols = isVertical ? {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  } : {};

  var isRequired = function isRequired(itemRules) {
    return !!Object(_utils_object__WEBPACK_IMPORTED_MODULE_5__["findArrayObject"])(itemRules, 'required', true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: span,
    onKeyPress: onKeyPress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: lableText,
    key: item.name,
    required: isRequired(item.rules),
    validateStatus: validate && !validate.state ? 'error' : '',
    help: validate === null || validate === void 0 ? void 0 : validate.message
  }, cols), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
    isVertical: isVertical,
    onFieldChange: onFieldChange,
    value: value
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormCol);

/***/ }),

/***/ "./src/Form/const/index.ts":
/*!*********************************!*\
  !*** ./src/Form/const/index.ts ***!
  \*********************************/
/*! exports provided: default, Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony default export */ __webpack_exports__["default"] = ({});
var Type;

(function (Type) {
  Type["input"] = "input";
  Type["search"] = "search";
  Type["number"] = "number";
  Type["password"] = "password";
  Type["textarea"] = "textarea";
  Type["select"] = "select";
  Type["switch"] = "switch";
  Type["autoComplete"] = "autoComplete";
  Type["checkbox"] = "checkbox";
  Type["checkboxGroup"] = "checkboxGroup";
  Type["datePicker"] = "datePicker";
  Type["rangePicker"] = "rangePicker";
  Type["timePicker"] = "timePicker";
  Type["radio"] = "radio";
  Type["radioGroup"] = "radioGroup";
})(Type || (Type = {}));

/***/ }),

/***/ "./src/Form/fields/AutoComplete/index.tsx":
/*!************************************************!*\
  !*** ./src/Form/fields/AutoComplete/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  if (!(fieldProps !== null && fieldProps !== void 0 && fieldProps.filterOption)) {
    fieldProps.filterOption = function (inputValue, option) {
      return inputValue && option.value.indexOf(inputValue) !== -1;
    };
  }

  var onChangeThis = function onChangeThis() {
    var newValue = arguments.length <= 0 ? undefined : arguments[0]; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Checkbox/index.tsx":
/*!********************************************!*\
  !*** ./src/Form/fields/Checkbox/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.checked; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    checked: value
  }), fieldProps.label);
}

/***/ }),

/***/ "./src/Form/fields/CheckboxGroup/index.tsx":
/*!*************************************************!*\
  !*** ./src/Form/fields/CheckboxGroup/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = arguments.length <= 0 ? undefined : arguments[0]; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"].Group, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: value
  }));
}

/***/ }),

/***/ "./src/Form/fields/DatePicker/index.tsx":
/*!**********************************************!*\
  !*** ./src/Form/fields/DatePicker/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePickerField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/date */ "./src/Form/utils/date.ts");




function DatePickerField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getDateTimeStamp"])(arguments.length <= 0 ? undefined : arguments[0]); // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getDateMoment"])(value)
  }));
}

/***/ }),

/***/ "./src/Form/fields/Input/index.tsx":
/*!*****************************************!*\
  !*** ./src/Form/fields/Input/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.value; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: value
  }));
}

/***/ }),

/***/ "./src/Form/fields/Number/index.tsx":
/*!******************************************!*\
  !*** ./src/Form/fields/Number/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis(newValue) {
    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(newValue);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Password/index.tsx":
/*!********************************************!*\
  !*** ./src/Form/fields/Password/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.value; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Radio/index.tsx":
/*!*****************************************!*\
  !*** ./src/Form/fields/Radio/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.checked; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    checked: value
  }), fieldProps.label);
}

/***/ }),

/***/ "./src/Form/fields/RadioGroup/index.tsx":
/*!**********************************************!*\
  !*** ./src/Form/fields/RadioGroup/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.value; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: value
  }));
}

/***/ }),

/***/ "./src/Form/fields/RangePicker/index.tsx":
/*!***********************************************!*\
  !*** ./src/Form/fields/RangePicker/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePickerField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/date */ "./src/Form/utils/date.ts");




function DatePickerField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getRangeTimeStamp"])(arguments.length <= 0 ? undefined : arguments[0]); // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  var val = Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getRangeMoment"])(value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"].RangePicker, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: val
  }));
}

/***/ }),

/***/ "./src/Form/fields/Search/index.tsx":
/*!******************************************!*\
  !*** ./src/Form/fields/Search/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



var Search = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search;
function SearchField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.value; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Search, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Select/index.tsx":
/*!******************************************!*\
  !*** ./src/Form/fields/Select/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis(newValue) {
    // const newValue = args[0].target.value;
    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(newValue);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Switch/index.tsx":
/*!******************************************!*\
  !*** ./src/Form/fields/Switch/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = arguments.length <= 0 ? undefined : arguments[0]; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, !!value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Switch"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Textarea/index.tsx":
/*!********************************************!*\
  !*** ./src/Form/fields/Textarea/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = args[0].target.value; // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, args);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/TimePicker/index.tsx":
/*!**********************************************!*\
  !*** ./src/Form/fields/TimePicker/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePickerField; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/date */ "./src/Form/utils/date.ts");




function TimePickerField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getDateTimeStamp"])(arguments.length <= 0 ? undefined : arguments[0]); // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["TimePicker"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getDateMoment"])(value)
  }));
}

/***/ }),

/***/ "./src/Form/fields/index.tsx":
/*!***********************************!*\
  !*** ./src/Form/fields/index.tsx ***!
  \***********************************/
/*! exports provided: default, extendFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendFields", function() { return extendFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./src/Form/fields/Input/index.tsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "./src/Form/fields/Search/index.tsx");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Textarea */ "./src/Form/fields/Textarea/index.tsx");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Password */ "./src/Form/fields/Password/index.tsx");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Number */ "./src/Form/fields/Number/index.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Select */ "./src/Form/fields/Select/index.tsx");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Switch */ "./src/Form/fields/Switch/index.tsx");
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AutoComplete */ "./src/Form/fields/AutoComplete/index.tsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Checkbox */ "./src/Form/fields/Checkbox/index.tsx");
/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckboxGroup */ "./src/Form/fields/CheckboxGroup/index.tsx");
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DatePicker */ "./src/Form/fields/DatePicker/index.tsx");
/* harmony import */ var _RangePicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RangePicker */ "./src/Form/fields/RangePicker/index.tsx");
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TimePicker */ "./src/Form/fields/TimePicker/index.tsx");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Radio */ "./src/Form/fields/Radio/index.tsx");
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RadioGroup */ "./src/Form/fields/RadioGroup/index.tsx");















 // FieldMap

var FieldMap = {
  input: _Input__WEBPACK_IMPORTED_MODULE_1__["default"],
  search: _Search__WEBPACK_IMPORTED_MODULE_2__["default"],
  textarea: _Textarea__WEBPACK_IMPORTED_MODULE_3__["default"],
  password: _Password__WEBPACK_IMPORTED_MODULE_4__["default"],
  number: _Number__WEBPACK_IMPORTED_MODULE_5__["default"],
  select: _Select__WEBPACK_IMPORTED_MODULE_6__["default"],
  switch: _Switch__WEBPACK_IMPORTED_MODULE_7__["default"],
  autoComplete: _AutoComplete__WEBPACK_IMPORTED_MODULE_8__["default"],
  checkbox: _Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"],
  checkboxGroup: _CheckboxGroup__WEBPACK_IMPORTED_MODULE_10__["default"],
  datePicker: _DatePicker__WEBPACK_IMPORTED_MODULE_11__["default"],
  rangePicker: _RangePicker__WEBPACK_IMPORTED_MODULE_12__["default"],
  timePicker: _TimePicker__WEBPACK_IMPORTED_MODULE_13__["default"],
  radio: _Radio__WEBPACK_IMPORTED_MODULE_14__["default"],
  radioGroup: _RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"]
};
function DynamicField(props) {
  var type = props.type,
      name = props.name,
      value = props.value,
      _props$fieldProps = props.fieldProps,
      fieldProps = _props$fieldProps === void 0 ? {} : _props$fieldProps,
      onFieldChange = props.onFieldChange;
  var Component = FieldMap[type];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
    name: name,
    value: value,
    fieldProps: fieldProps,
    onFieldChange: onFieldChange
  });
}
/**
 * 扩展组件库
 * @param fields
 */

var extendFields = function extendFields(fields) {
  fields.forEach(function (field) {
    var foundKey = Object.keys(FieldMap).find(function (key) {
      return key === field.name;
    });

    if (foundKey) {
      throw new Error("\u7EC4\u4EF6".concat(field.name, "\u5DF2\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u5B9A\u4E49"));
    }

    FieldMap[field.name] = field.component;
  });
};

/***/ }),

/***/ "./src/Form/index.tsx":
/*!****************************!*\
  !*** ./src/Form/index.tsx ***!
  \****************************/
/*! exports provided: Type, extendFields, extendRules, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/string */ "./src/Form/utils/string.ts");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/object */ "./src/Form/utils/object.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/style */ "./src/Form/utils/style.ts");
/* harmony import */ var _FormCol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormCol */ "./src/Form/FormCol.tsx");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules */ "./src/Form/rules/index.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./const */ "./src/Form/const/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _const__WEBPACK_IMPORTED_MODULE_9__["Type"]; });

/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields */ "./src/Form/fields/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendFields", function() { return _fields__WEBPACK_IMPORTED_MODULE_10__["extendFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendRules", function() { return _rules__WEBPACK_IMPORTED_MODULE_8__["extendRules"]; });













var useEffect = react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect,
    useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState;
var formID = "FORM_".concat(Object(_utils_string__WEBPACK_IMPORTED_MODULE_4__["randomString"])());
function Form(props) {
  var _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 24 : _props$gutter,
      _props$span = props.span,
      span = _props$span === void 0 ? 12 : _props$span,
      _props$labelDirection = props.labelDirection,
      labelDirection = _props$labelDirection === void 0 ? 'horizontal' : _props$labelDirection,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 120 : _props$labelWidth,
      _props$validateOnChan = props.validateOnChange,
      validateOnChange = _props$validateOnChan === void 0 ? true : _props$validateOnChan,
      schema = props.schema,
      onChange = props.onChange,
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data;

  var _useState = useState(data),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      validation = _useState4[0],
      setValidation = _useState4[1]; // 添加样式


  useEffect(function () {
    Object(_utils_style__WEBPACK_IMPORTED_MODULE_6__["addLabelStyleWidth"])(labelWidth, labelDirection, formID);
    return function () {
      return Object(_utils_style__WEBPACK_IMPORTED_MODULE_6__["removeLabelStyleWidth"])(formID);
    };
  }, [labelDirection, labelWidth]); // 初始化数据

  useEffect(function () {
    var result = [];
    schema.forEach(function (row) {
      row.forEach(function (item) {
        if (item.name && item.rules) {
          result.push({
            state: true,
            message: '',
            name: item.name,
            rules: item.rules
          });
          formData[item.name] = formData[item.name] || undefined;
        }
      });
    });
    setValidation(result);
  }, [schema]); // 获取validator

  var getValidateByName = function getValidateByName(name) {
    var validationItem = validation.find(function (item) {
      return item.name === name;
    });
    return {
      state: validationItem ? validationItem.state : true,
      message: (validationItem === null || validationItem === void 0 ? void 0 : validationItem.message) || ''
    };
  };
  /**
   * 检查是不是全部通过检验
   * @returns boolean
   */


  var isAllValidated = function isAllValidated() {
    var notValidatedItemIndex = Object.keys(validation).findIndex(function (key) {
      return validation[key].validated === false;
    });
    return notValidatedItemIndex === -1;
  };
  /**
   * 校验单个field
   * @param name
   * @param value
   */


  var validateField = function validateField(name, value) {
    var validationItem = validation.find(function (item) {
      return item.name === name;
    });

    if (validationItem) {
      var result = Object(_rules__WEBPACK_IMPORTED_MODULE_8__["validate"])(name, value, validationItem.rules);
      validationItem.message = result.message;
      validationItem.state = result.state;
      console.log("validated".concat(name), result);
      setValidation(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(validation));
    }
  };
  /**
   * Form field value is changed
   * @param key
   * @param value
   * @param oldValue
   */


  var onFieldChange = function onFieldChange(name, value, oldValue) {
    if (validateOnChange) {
      validateField(name, value);
    }

    console.log('form on field change', name, value, oldValue);
    formData[name] = value;
    setFormData(Object(_utils_object__WEBPACK_IMPORTED_MODULE_5__["simpleClone"])(formData));

    if (onChange) {
      onChange(name, value, oldValue);
    }
  };
  /**
   * get value
   * @param key
   * @param oldData
   * @returns
   */


  var getValue = function getValue(name) {
    if (!name) return null;
    var value = formData[name] || undefined;
    return value;
  };

  var isVertical = labelDirection === 'vertical';

  var onFormSubmit = function onFormSubmit() {
    // 提交前校验
    if (!isAllValidated()) return false;
    console.log('on submit', formData);
  };
  /**
   * 键盘按下Enter，只要不是textarea类型，提交
   * @param type
   * @returns
   */


  var onKeyPress = function onKeyPress(type) {
    return function (e) {
      if (type !== 'textarea' && e.charCode === 13) {
        onFormSubmit();
      }
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    id: formID,
    onSubmit: onFormSubmit,
    action: ""
  }, schema.map(function (row, idx) {
    var rowKey = "row_".concat(idx);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      key: rowKey,
      gutter: gutter
    }, row.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FormCol__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: item.name || Object(_utils_string__WEBPACK_IMPORTED_MODULE_4__["randomString"])(),
        item: item,
        span: item.span || span,
        isVertical: isVertical,
        value: getValue(item.name),
        onFieldChange: onFieldChange,
        onKeyPress: onKeyPress(item.type),
        validate: getValidateByName(item.name)
      });
    }));
  }));
}

/***/ }),

/***/ "./src/Form/rules/default.ts":
/*!***********************************!*\
  !*** ./src/Form/rules/default.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string */ "./src/Form/utils/string.ts");
 // 默认的规则

var defaultRules = [{
  name: 'required',
  validator: function validator(value) {
    return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value);
  },
  message: '必填'
}, {
  name: 'minLength',
  validator: function validator(value, length) {
    return value && value.length < Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u4E0D\u5C0F\u4E8E".concat(length);
  }
}, {
  name: 'maxLength',
  validator: function validator(value, length) {
    return value && value.length <= Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u4E0D\u5927\u4E8E".concat(length);
  }
}, {
  name: 'length',
  validator: function validator(value, length) {
    return value && value.length === Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u5FC5\u987B\u4E3A".concat(length);
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (defaultRules);

/***/ }),

/***/ "./src/Form/rules/index.ts":
/*!*********************************!*\
  !*** ./src/Form/rules/index.ts ***!
  \*********************************/
/*! exports provided: default, extendRules, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendRules", function() { return extendRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./src/Form/rules/default.ts");



/* harmony default export */ __webpack_exports__["default"] = ({});
/**
 * 扩展的方法
 * @param rules
 */

var extendRules = function extendRules(rules) {
  rules.forEach(function (rule) {
    var index = _default__WEBPACK_IMPORTED_MODULE_2__["default"].findIndex(function (item) {
      return rule.name === item.name;
    });

    if (index !== -1) {
      console.warn("\u89C4\u5219".concat(rule.name, "\u5DF2\u5B58\u5728, \u6269\u5C55\u89C4\u5219\u4F1A\u8986\u76D6\u9ED8\u8BA4\u89C4\u5219"));
      _default__WEBPACK_IMPORTED_MODULE_2__["default"][index] = rule;
    }

    _default__WEBPACK_IMPORTED_MODULE_2__["default"].push(rule);
  });
};
/**
 * 根据key查找
 * @param name
 * @returns
 */

var getRuleItemByName = function getRuleItemByName(name) {
  var foundRule = _default__WEBPACK_IMPORTED_MODULE_2__["default"].find(function (rule) {
    return rule.name === name;
  });
  return foundRule;
};
/**
 * 校验
 * @param value
 * @param rules
 * @returns
 */


var validate = function validate(key, value, rules) {
  var result = {
    state: true,
    message: ''
  };
  rules.some(function (rule) {
    var _Object$keys;

    var message = rule.message,
        ruleItem = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(rule, ["message"]);

    var ruleName = (_Object$keys = Object.keys(ruleItem)) === null || _Object$keys === void 0 ? void 0 : _Object$keys[0];
    var ruleValue = ruleItem === null || ruleItem === void 0 ? void 0 : ruleItem[ruleName];
    if (!ruleName) return false; // 否则需要在现有的规则去查找

    var defaultRuleItem = getRuleItemByName(ruleName);

    if (!defaultRuleItem) {
      console.warn("\u672A\u627E\u5230".concat(ruleName, "\u7684\u6821\u9A8C\u89C4\u5219"));
      return false;
    } // message


    var msg = message || defaultRuleItem.message;
    msg = typeof msg === 'function' ? msg(ruleValue) : msg; // 自定义的validator

    if (typeof ruleValue === 'function') {
      var state = ruleValue(value);
      result = {
        state: state,
        message: state ? '' : msg
      };
      return !state;
    } // 如果是boolean的时候，true值需要校验


    if (typeof ruleValue === 'boolean' && ruleValue || ['string', 'number'].indexOf(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(ruleValue)) !== -1) {
      var _state = defaultRuleItem.validator(value);

      result = {
        state: _state,
        message: _state ? '' : msg
      };
      return !_state;
    }

    return false;
  });
  return result;
};

/***/ }),

/***/ "./src/Form/utils/date.ts":
/*!********************************!*\
  !*** ./src/Form/utils/date.ts ***!
  \********************************/
/*! exports provided: default, getDateTimeStamp, getDateMoment, getRangeTimeStamp, getRangeMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeStamp", function() { return getDateTimeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateMoment", function() { return getDateMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeTimeStamp", function() { return getRangeTimeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeMoment", function() { return getRangeMoment; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./src/Form/utils/string.ts");


/* harmony default export */ __webpack_exports__["default"] = ({});
/**
 * 将值转换为时间戳
 * @param value
 * @returns
 */

var getDateTimeStamp = function getDateTimeStamp(value) {
  if (Object(_string__WEBPACK_IMPORTED_MODULE_1__["notEmptyValue"])(value)) return moment__WEBPACK_IMPORTED_MODULE_0___default()(value).valueOf();
  return null;
};
/**
 * 将值转换为时间戳
 * @param value
 * @returns
 */

var getDateMoment = function getDateMoment(value) {
  if (Object(_string__WEBPACK_IMPORTED_MODULE_1__["notEmptyValue"])(value)) return moment__WEBPACK_IMPORTED_MODULE_0___default()(value);
  return null;
};
/**
 * 将时间范围值转换为时间戳
 * @param value
 * @returns
 */

var getRangeTimeStamp = function getRangeTimeStamp(value) {
  var result = [null, null];

  if (Array.isArray(value)) {
    value.forEach(function (val, idx) {
      result[idx] = getDateTimeStamp(val);
    });
  }

  return result;
};
/**
 * 将时间戳数组转换为moment数组
 * @param value
 * @returns
 */

var getRangeMoment = function getRangeMoment(value) {
  var result = [null, null];

  if (value && Array.isArray(value)) {
    value.forEach(function (val, idx) {
      result[idx] = val ? moment__WEBPACK_IMPORTED_MODULE_0___default()(val) : null;
    });
  }

  return result;
};

/***/ }),

/***/ "./src/Form/utils/object.ts":
/*!**********************************!*\
  !*** ./src/Form/utils/object.ts ***!
  \**********************************/
/*! exports provided: default, findArrayObject, simpleClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findArrayObject", function() { return findArrayObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleClone", function() { return simpleClone; });
/* harmony default export */ __webpack_exports__["default"] = ({});
function findArrayObject() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;
  var found = array.find(function (item) {
    return item[key] === value;
  });
  return found || null;
}
var simpleClone = function simpleClone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

/***/ }),

/***/ "./src/Form/utils/string.ts":
/*!**********************************!*\
  !*** ./src/Form/utils/string.ts ***!
  \**********************************/
/*! exports provided: randomString, notEmptyValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomString", function() { return randomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmptyValue", function() { return notEmptyValue; });
var randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var stringArray = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var result = [];

  for (var i = 0; i < length; i++) {
    var index = Math.round(Math.random() * stringArray.length);
    result.push(stringArray[index]);
  }

  return result.join('');
};
var notEmptyValue = function notEmptyValue(value) {
  return value !== '' && value !== undefined && value !== null || // 非空
  Array.isArray(value) && value.length > 0 // 数组也非空
  ;
};
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/Form/utils/style.ts":
/*!*********************************!*\
  !*** ./src/Form/utils/style.ts ***!
  \*********************************/
/*! exports provided: removeLabelStyleWidth, addLabelStyleWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLabelStyleWidth", function() { return removeLabelStyleWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLabelStyleWidth", function() { return addLabelStyleWidth; });
var removeLabelStyleWidth = function removeLabelStyleWidth(id) {
  var attributeName = "form-label-width-".concat(id);
  var DOM = document.getElementById(attributeName);
  if (DOM) document.head.removeChild(DOM);
  return attributeName;
};
var addLabelStyleWidth = function addLabelStyleWidth(width, labelDirection, id) {
  var attributeName = removeLabelStyleWidth(id);

  if (labelDirection === 'horizontal') {
    var STYLE = document.createElement('style');
    STYLE.id = attributeName;
    var styles = "#".concat(id, " .ant-form-item {display: flex; width: 100%; flex-flow: row;}\n");
    styles += "#".concat(id, " .ant-form-item-label { width: ").concat(width, "px; }\n");
    styles += "#".concat(id, " .ant-form-item-control {flex-grow: 1}");
    STYLE.innerHTML = styles;
    document.head.appendChild(STYLE);
  }
};

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL0Zvcm1Db2wudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2NvbnN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9BdXRvQ29tcGxldGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9DaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0NoZWNrYm94R3JvdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9EYXRlUGlja2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9OdW1iZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9QYXNzd29yZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1JhZGlvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUmFkaW9Hcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1JhbmdlUGlja2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvU2VhcmNoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvU2VsZWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvU3dpdGNoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvVGV4dGFyZWEvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9UaW1lUGlja2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9ydWxlcy9kZWZhdWx0LnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3J1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3V0aWxzL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3V0aWxzL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9zdHlsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtQ29sIiwiY29sUHJvcHMiLCJpdGVtIiwic3BhbiIsImlzVmVydGljYWwiLCJ2YWx1ZSIsIm9uRmllbGRDaGFuZ2UiLCJvbktleVByZXNzIiwidmFsaWRhdGUiLCJsYWJlbCIsInJlc3QiLCJsYWJsZVRleHQiLCJjb2xzIiwibGFiZWxDb2wiLCJ3cmFwcGVyQ29sIiwiaXNSZXF1aXJlZCIsIml0ZW1SdWxlcyIsImZpbmRBcnJheU9iamVjdCIsIm5hbWUiLCJydWxlcyIsInN0YXRlIiwibWVzc2FnZSIsIlR5cGUiLCJJbnB1dEZpZWxkIiwicHJvcHMiLCJmaWVsZFByb3BzIiwiZmlsdGVyT3B0aW9uIiwiaW5wdXRWYWx1ZSIsIm9wdGlvbiIsImluZGV4T2YiLCJvbkNoYW5nZVRoaXMiLCJuZXdWYWx1ZSIsIm9uQ2hhbmdlIiwiYXJncyIsInRhcmdldCIsImNoZWNrZWQiLCJEYXRlUGlja2VyRmllbGQiLCJnZXREYXRlVGltZVN0YW1wIiwiZ2V0RGF0ZU1vbWVudCIsImdldFJhbmdlVGltZVN0YW1wIiwidmFsIiwiZ2V0UmFuZ2VNb21lbnQiLCJTZWFyY2giLCJJbnB1dCIsIlNlYXJjaEZpZWxkIiwiVGltZVBpY2tlckZpZWxkIiwiRmllbGRNYXAiLCJpbnB1dCIsInNlYXJjaCIsInRleHRhcmVhIiwiVGV4dGFyZWFGaWVsZCIsInBhc3N3b3JkIiwiUGFzc3dvcmRGaWVsZCIsIm51bWJlciIsIk51bWJlckZpZWxkIiwic2VsZWN0IiwiU2VsZWN0RmllbGQiLCJzd2l0Y2giLCJTd2l0Y2hGaWVsZCIsImF1dG9Db21wbGV0ZSIsIkF1dG9Db21wbGV0ZUZpZWxkIiwiY2hlY2tib3giLCJDaGVja2JveEZpZWxkIiwiY2hlY2tib3hHcm91cCIsIkNoZWNrYm94R3JvdXBGaWVsZCIsImRhdGVQaWNrZXIiLCJyYW5nZVBpY2tlciIsIlJhbmdlUGlja2VyRmllbGQiLCJ0aW1lUGlja2VyIiwicmFkaW8iLCJSYWRpb0ZpZWxkIiwicmFkaW9Hcm91cCIsIlJhZGlvR3JvdXBGaWVsZCIsIkR5bmFtaWNGaWVsZCIsInR5cGUiLCJDb21wb25lbnQiLCJleHRlbmRGaWVsZHMiLCJmaWVsZHMiLCJmb3JFYWNoIiwiZmllbGQiLCJmb3VuZEtleSIsIk9iamVjdCIsImtleXMiLCJmaW5kIiwia2V5IiwiRXJyb3IiLCJjb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwiZm9ybUlEIiwicmFuZG9tU3RyaW5nIiwiRm9ybSIsImd1dHRlciIsImxhYmVsRGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsInZhbGlkYXRlT25DaGFuZ2UiLCJzY2hlbWEiLCJkYXRhIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInZhbGlkYXRpb24iLCJzZXRWYWxpZGF0aW9uIiwiYWRkTGFiZWxTdHlsZVdpZHRoIiwicmVtb3ZlTGFiZWxTdHlsZVdpZHRoIiwicmVzdWx0Iiwicm93IiwicHVzaCIsInVuZGVmaW5lZCIsImdldFZhbGlkYXRlQnlOYW1lIiwidmFsaWRhdGlvbkl0ZW0iLCJpc0FsbFZhbGlkYXRlZCIsIm5vdFZhbGlkYXRlZEl0ZW1JbmRleCIsImZpbmRJbmRleCIsInZhbGlkYXRlZCIsInZhbGlkYXRlRmllbGQiLCJjb25zb2xlIiwibG9nIiwib2xkVmFsdWUiLCJzaW1wbGVDbG9uZSIsImdldFZhbHVlIiwib25Gb3JtU3VibWl0IiwiZSIsImNoYXJDb2RlIiwibWFwIiwiaWR4Iiwicm93S2V5IiwiZGVmYXVsdFJ1bGVzIiwidmFsaWRhdG9yIiwibm90RW1wdHlWYWx1ZSIsImxlbmd0aCIsIk51bWJlciIsImV4dGVuZFJ1bGVzIiwicnVsZSIsImluZGV4Iiwid2FybiIsImdldFJ1bGVJdGVtQnlOYW1lIiwiZm91bmRSdWxlIiwic29tZSIsInJ1bGVJdGVtIiwicnVsZU5hbWUiLCJydWxlVmFsdWUiLCJkZWZhdWx0UnVsZUl0ZW0iLCJtc2ciLCJtb21lbnQiLCJ2YWx1ZU9mIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyYXkiLCJmb3VuZCIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0cmluZ0FycmF5Iiwic3BsaXQiLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiam9pbiIsImlkIiwiYXR0cmlidXRlTmFtZSIsIkRPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkIiwicmVtb3ZlQ2hpbGQiLCJ3aWR0aCIsIlNUWUxFIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlcyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QyxHQUFKLEVBQVNDLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixHQUExQjtBQUNULFNBQU9ELGFBQVA7QUFDRCxDQUxNO0FBT0EsSUFBTTNELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2lFLEtBQUQsRUFBZ0IxRSxjQUFoQixFQUEyRG1FLEVBQTNELEVBQTBFO0FBQzFHLE1BQU1DLGFBQWEsR0FBRzFELHFCQUFxQixDQUFDeUQsRUFBRCxDQUEzQzs7QUFFQSxNQUFJbkUsY0FBYyxLQUFLLFlBQXZCLEVBQXFDO0FBQ25DLFFBQU0yRSxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FELFNBQUssQ0FBQ1IsRUFBTixHQUFXQyxhQUFYO0FBQ0EsUUFBSVMsTUFBTSxjQUFPVixFQUFQLG9FQUFWO0FBQ0FVLFVBQU0sZUFBUVYsRUFBUiw0Q0FBNENPLEtBQTVDLFlBQU47QUFDQUcsVUFBTSxlQUFRVixFQUFSLDJDQUFOO0FBQ0FRLFNBQUssQ0FBQ0csU0FBTixHQUFrQkQsTUFBbEI7QUFDQVAsWUFBUSxDQUFDRSxJQUFULENBQWNPLFdBQWQsQ0FBMEJKLEtBQTFCO0FBQ0Q7QUFDRixDQVpNLEM7Ozs7Ozs7Ozs7O0FDUlAsa0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFudGRcIiwgXCJtb21lbnRcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcImFudGRcIl0sIHJvb3RbXCJtb21lbnRcIl0sIHJvb3RbXCJyZWFjdFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9Gb3JtL2luZGV4LnRzeFwiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCwgRm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IER5bmFtaWNGaWVsZCBmcm9tICcuL2ZpZWxkcyc7XG5pbXBvcnQgeyBmaW5kQXJyYXlPYmplY3QgfSBmcm9tICcuL3V0aWxzL29iamVjdCc7XG5cbi8qKlxuICAgKiDmuLLmn5NjZWxsIGl0ZW1cbiAgICogQHBhcmFtIGl0ZW1cbiAgICogQHBhcmFtIGdsb2JhbFNwYW5cbiAgICogQHJldHVybnNcbiAgICovXG5jb25zdCBGb3JtQ29sID0gKGNvbFByb3BzOiBSSkZvcm0uSUNvbFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7XG4gICAgaXRlbSxcbiAgICBzcGFuLFxuICAgIGlzVmVydGljYWwsXG4gICAgdmFsdWUsXG4gICAgb25GaWVsZENoYW5nZSxcbiAgICBvbktleVByZXNzLFxuICAgIHZhbGlkYXRlLFxuICB9ID0gY29sUHJvcHM7XG5cbiAgY29uc3QgeyBsYWJlbCwgLi4ucmVzdCB9ID0gaXRlbTtcblxuICBjb25zdCBsYWJsZVRleHQgPSB0eXBlb2YgbGFiZWwgPT09ICdmdW5jdGlvbicgPyBsYWJlbCgpIDogbGFiZWw7XG5cbiAgY29uc3QgY29scyA9IGlzVmVydGljYWwgPyB7IGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSB9IDoge307XG5cbiAgY29uc3QgaXNSZXF1aXJlZCA9IChpdGVtUnVsZXM6IFJKRm9ybS5SdWxlc1tdKSA9PiAhIWZpbmRBcnJheU9iamVjdChpdGVtUnVsZXMsICdyZXF1aXJlZCcsIHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbCBzcGFuPXtzcGFufSBvbktleVByZXNzPXtvbktleVByZXNzfT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbGFiZWw9e2xhYmxlVGV4dH1cbiAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkKGl0ZW0ucnVsZXMpfVxuICAgICAgICB2YWxpZGF0ZVN0YXR1cz17XG4gICAgICAgICAgKHZhbGlkYXRlICYmICF2YWxpZGF0ZS5zdGF0ZSlcbiAgICAgICAgICAgID8gJ2Vycm9yJ1xuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICAgIGhlbHA9e3ZhbGlkYXRlPy5tZXNzYWdlfVxuICAgICAgICB7Li4uY29sc31cbiAgICAgID5cbiAgICAgICAgPER5bmFtaWNGaWVsZFxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGlzVmVydGljYWw9e2lzVmVydGljYWx9XG4gICAgICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICA8L0NvbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db2w7XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHt9O1xuXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgaW5wdXQgPSAnaW5wdXQnLFxuICBzZWFyY2ggPSAnc2VhcmNoJyxcbiAgbnVtYmVyID0gJ251bWJlcicsXG4gIHBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgdGV4dGFyZWEgPSAndGV4dGFyZWEnLFxuICBzZWxlY3QgPSAnc2VsZWN0JyxcbiAgc3dpdGNoID0gJ3N3aXRjaCcsXG4gIGF1dG9Db21wbGV0ZSA9ICdhdXRvQ29tcGxldGUnLFxuICBjaGVja2JveCA9ICdjaGVja2JveCcsXG4gIGNoZWNrYm94R3JvdXAgPSAnY2hlY2tib3hHcm91cCcsXG4gIGRhdGVQaWNrZXIgPSAnZGF0ZVBpY2tlcicsXG4gIHJhbmdlUGlja2VyID0gJ3JhbmdlUGlja2VyJyxcbiAgdGltZVBpY2tlciA9ICd0aW1lUGlja2VyJyxcbiAgcmFkaW8gPSAncmFkaW8nLFxuICByYWRpb0dyb3VwID0gJ3JhZGlvR3JvdXAnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghZmllbGRQcm9wcz8uZmlsdGVyT3B0aW9uKSB7XG4gICAgZmllbGRQcm9wcy5maWx0ZXJPcHRpb24gPSAoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxuICAgICAgaW5wdXRWYWx1ZSAmJiBvcHRpb24udmFsdWUuaW5kZXhPZihpbnB1dFZhbHVlKSAhPT0gLTE7XG4gIH1cblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxBdXRvQ29tcGxldGUgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC5jaGVja2VkO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDaGVja2JveCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gY2hlY2tlZD17dmFsdWV9PlxuICAgICAge2ZpZWxkUHJvcHMubGFiZWx9XG4gICAgPC9DaGVja2JveD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxDaGVja2JveC5Hcm91cCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXREYXRlVGltZVN0YW1wLCBnZXREYXRlTW9tZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVQaWNrZXJGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldERhdGVUaW1lU3RhbXAoYXJnc1swXSk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXtnZXREYXRlTW9tZW50KHZhbHVlKX1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPElucHV0TnVtYmVyIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8SW5wdXQuUGFzc3dvcmQgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC5jaGVja2VkO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSYWRpbyB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gY2hlY2tlZD17dmFsdWV9PlxuICAgICAge2ZpZWxkUHJvcHMubGFiZWx9XG4gICAgPC9SYWRpbz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvLkdyb3VwIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0UmFuZ2VUaW1lU3RhbXAsIGdldFJhbmdlTW9tZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVQaWNrZXJGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldFJhbmdlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2YWwgPSBnZXRSYW5nZU1vbWVudCh2YWx1ZSk7XG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXt2YWx9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U2VhcmNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8gY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U2VsZWN0IHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCAhIXZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTd2l0Y2ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dC5UZXh0QXJlYSB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdGFtcCwgZ2V0RGF0ZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXREYXRlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaW1lUGlja2VyXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICB2YWx1ZT17Z2V0RGF0ZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCBUZXh0YXJlYUZpZWxkIGZyb20gJy4vVGV4dGFyZWEnO1xuaW1wb3J0IFBhc3N3b3JkRmllbGQgZnJvbSAnLi9QYXNzd29yZCc7XG5pbXBvcnQgTnVtYmVyRmllbGQgZnJvbSAnLi9OdW1iZXInO1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCBTd2l0Y2hGaWVsZCBmcm9tICcuL1N3aXRjaCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlRmllbGQgZnJvbSAnLi9BdXRvQ29tcGxldGUnO1xuaW1wb3J0IENoZWNrYm94RmllbGQgZnJvbSAnLi9DaGVja2JveCc7XG5pbXBvcnQgQ2hlY2tib3hHcm91cEZpZWxkIGZyb20gJy4vQ2hlY2tib3hHcm91cCc7XG5pbXBvcnQgRGF0ZVBpY2tlckZpZWxkIGZyb20gJy4vRGF0ZVBpY2tlcic7XG5pbXBvcnQgUmFuZ2VQaWNrZXJGaWVsZCBmcm9tICcuL1JhbmdlUGlja2VyJztcbmltcG9ydCBUaW1lUGlja2VyRmllbGQgZnJvbSAnLi9UaW1lUGlja2VyJztcbmltcG9ydCBSYWRpb0ZpZWxkIGZyb20gJy4vUmFkaW8nO1xuaW1wb3J0IFJhZGlvR3JvdXBGaWVsZCBmcm9tICcuL1JhZGlvR3JvdXAnO1xuXG4vLyBGaWVsZE1hcFxuY29uc3QgRmllbGRNYXAgPSB7XG4gIGlucHV0OiBJbnB1dEZpZWxkLFxuICBzZWFyY2g6IFNlYXJjaEZpZWxkLFxuICB0ZXh0YXJlYTogVGV4dGFyZWFGaWVsZCxcbiAgcGFzc3dvcmQ6IFBhc3N3b3JkRmllbGQsXG4gIG51bWJlcjogTnVtYmVyRmllbGQsXG4gIHNlbGVjdDogU2VsZWN0RmllbGQsXG4gIHN3aXRjaDogU3dpdGNoRmllbGQsXG4gIGF1dG9Db21wbGV0ZTogQXV0b0NvbXBsZXRlRmllbGQsXG4gIGNoZWNrYm94OiBDaGVja2JveEZpZWxkLFxuICBjaGVja2JveEdyb3VwOiBDaGVja2JveEdyb3VwRmllbGQsXG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJGaWVsZCxcbiAgcmFuZ2VQaWNrZXI6IFJhbmdlUGlja2VyRmllbGQsXG4gIHRpbWVQaWNrZXI6IFRpbWVQaWNrZXJGaWVsZCxcbiAgcmFkaW86IFJhZGlvRmllbGQsXG4gIHJhZGlvR3JvdXA6IFJhZGlvR3JvdXBGaWVsZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNGaWVsZChwcm9wczogUkpGb3JtLkl0ZW1TY2hlbWEgJiBSSkZvcm0uSUZpZWxkUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIG5hbWUsXG4gICAgdmFsdWUsXG4gICAgZmllbGRQcm9wcyA9IHt9LFxuICAgIG9uRmllbGRDaGFuZ2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBDb21wb25lbnQgPSBGaWVsZE1hcFt0eXBlXTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBmaWVsZFByb3BzPXtmaWVsZFByb3BzfVxuICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAvPlxuICApO1xufVxuXG4vKipcbiAqIOaJqeWxlee7hOS7tuW6k1xuICogQHBhcmFtIGZpZWxkc1xuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kRmllbGRzID0gKGZpZWxkczogUkpGb3JtLkV4dGVuZEZpZWxkSXRlbVtdKTogdm9pZCA9PiB7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kS2V5ID0gT2JqZWN0LmtleXMoRmllbGRNYXApLmZpbmQoKGtleSkgPT4ga2V5ID09PSBmaWVsZC5uYW1lKTtcbiAgICBpZiAoZm91bmRLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg57uE5Lu2JHtmaWVsZC5uYW1lfeW3suWtmOWcqO+8jOivt+mHjeaWsOWumuS5iWApO1xuICAgIH1cbiAgICBGaWVsZE1hcFtmaWVsZC5uYW1lXSA9IGZpZWxkLmNvbXBvbmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuL3V0aWxzL3N0cmluZyc7XG5pbXBvcnQgeyBzaW1wbGVDbG9uZSB9IGZyb20gJy4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IGFkZExhYmVsU3R5bGVXaWR0aCwgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoIH0gZnJvbSAnLi91dGlscy9zdHlsZSc7XG5pbXBvcnQgRm9ybUNvbCBmcm9tICcuL0Zvcm1Db2wnO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuL3J1bGVzJztcblxuZXhwb3J0IHsgVHlwZSB9IGZyb20gJy4vY29uc3QnO1xuXG5leHBvcnQgeyBleHRlbmRGaWVsZHMgfSBmcm9tICcuL2ZpZWxkcyc7XG5cbmV4cG9ydCB7IGV4dGVuZFJ1bGVzIH0gZnJvbSAnLi9ydWxlcyc7XG5cbmNvbnN0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ID0gUmVhY3Q7XG5cbmNvbnN0IGZvcm1JRCA9IGBGT1JNXyR7cmFuZG9tU3RyaW5nKCl9YDtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm0ocHJvcHM6IFJKRm9ybS5Gb3JtUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBndXR0ZXIgPSAyNCxcbiAgICBzcGFuID0gMTIsXG4gICAgbGFiZWxEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcsXG4gICAgbGFiZWxXaWR0aCA9IDEyMCxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlID0gdHJ1ZSxcbiAgICBzY2hlbWEsXG4gICAgb25DaGFuZ2UsXG4gICAgZGF0YSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgY29uc3QgW3ZhbGlkYXRpb24sIHNldFZhbGlkYXRpb25dID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIOa3u+WKoOagt+W8j1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZExhYmVsU3R5bGVXaWR0aChsYWJlbFdpZHRoLCBsYWJlbERpcmVjdGlvbiwgZm9ybUlEKTtcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGZvcm1JRCk7XG4gIH0sIFtsYWJlbERpcmVjdGlvbiwgbGFiZWxXaWR0aF0pO1xuXG4gIC8vIOWIneWni+WMluaVsOaNrlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHNjaGVtYS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLm5hbWUgJiYgaXRlbS5ydWxlcykge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBydWxlczogaXRlbS5ydWxlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3JtRGF0YVtpdGVtLm5hbWVdID0gZm9ybURhdGFbaXRlbS5uYW1lXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldFZhbGlkYXRpb24ocmVzdWx0KTtcbiAgfSwgW3NjaGVtYV0pO1xuXG4gIC8vIOiOt+WPlnZhbGlkYXRvclxuICBjb25zdCBnZXRWYWxpZGF0ZUJ5TmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uSXRlbSA9IHZhbGlkYXRpb24uZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHZhbGlkYXRpb25JdGVtID8gdmFsaWRhdGlvbkl0ZW0uc3RhdGUgOiB0cnVlLFxuICAgICAgbWVzc2FnZTogdmFsaWRhdGlvbkl0ZW0/Lm1lc3NhZ2UgfHwgJycsXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog5qOA5p+l5piv5LiN5piv5YWo6YOo6YCa6L+H5qOA6aqMXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGNvbnN0IGlzQWxsVmFsaWRhdGVkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IG5vdFZhbGlkYXRlZEl0ZW1JbmRleCA9IE9iamVjdC5rZXlzKHZhbGlkYXRpb24pLmZpbmRJbmRleChcbiAgICAgIChrZXkpID0+IHZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQgPT09IGZhbHNlLFxuICAgICk7XG4gICAgcmV0dXJuIG5vdFZhbGlkYXRlZEl0ZW1JbmRleCA9PT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIOagoemqjOWNleS4qmZpZWxkXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgdmFsaWRhdGVGaWVsZCA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uSXRlbSA9IHZhbGlkYXRpb24uZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAodmFsaWRhdGlvbkl0ZW0pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlKG5hbWUsIHZhbHVlLCB2YWxpZGF0aW9uSXRlbS5ydWxlcyk7XG4gICAgICB2YWxpZGF0aW9uSXRlbS5tZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICB2YWxpZGF0aW9uSXRlbS5zdGF0ZSA9IHJlc3VsdC5zdGF0ZTtcblxuICAgICAgY29uc29sZS5sb2coYHZhbGlkYXRlZCR7bmFtZX1gLCByZXN1bHQpO1xuICAgICAgc2V0VmFsaWRhdGlvbihbLi4udmFsaWRhdGlvbl0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRm9ybSBmaWVsZCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgKi9cbiAgY29uc3Qgb25GaWVsZENoYW5nZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAodmFsaWRhdGVPbkNoYW5nZSkge1xuICAgICAgdmFsaWRhdGVGaWVsZChuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdmb3JtIG9uIGZpZWxkIGNoYW5nZScsIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgZm9ybURhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICBzZXRGb3JtRGF0YShzaW1wbGVDbG9uZShmb3JtRGF0YSkpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogZ2V0IHZhbHVlXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIG9sZERhdGFcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IGdldFZhbHVlID0gKG5hbWU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHZhbHVlID0gZm9ybURhdGFbbmFtZV0gfHwgdW5kZWZpbmVkO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBpc1ZlcnRpY2FsID0gbGFiZWxEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKCkgPT4ge1xuICAgIC8vIOaPkOS6pOWJjeagoemqjFxuICAgIGlmICghaXNBbGxWYWxpZGF0ZWQoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc29sZS5sb2coJ29uIHN1Ym1pdCcsIGZvcm1EYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICog6ZSu55uY5oyJ5LiLRW50ZXLvvIzlj6ropoHkuI3mmK90ZXh0YXJlYeexu+Wei++8jOaPkOS6pFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3Qgb25LZXlQcmVzcyA9ICh0eXBlOiBzdHJpbmcpID0+IChlKTogdm9pZCA9PiB7XG4gICAgaWYgKHR5cGUgIT09ICd0ZXh0YXJlYScgJiYgZS5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBpZD17Zm9ybUlEfVxuICAgICAgb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH1cbiAgICAgIGFjdGlvbj1cIlwiXG4gICAgPlxuICAgICAgeyBzY2hlbWEubWFwKChyb3csIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCByb3dLZXkgPSBgcm93XyR7aWR4fWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJvdyBrZXk9e3Jvd0tleX0gZ3V0dGVyPXtndXR0ZXJ9PlxuICAgICAgICAgICAge3Jvdy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEZvcm1Db2xcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZSB8fCByYW5kb21TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgIHNwYW49e2l0ZW0uc3BhbiB8fCBzcGFufVxuICAgICAgICAgICAgICAgIGlzVmVydGljYWw9e2lzVmVydGljYWx9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzKGl0ZW0udHlwZSl9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2dldFZhbGlkYXRlQnlOYW1lKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiIsImltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnO1xuXG4vLyDpu5jorqTnmoTop4TliJlcbmNvbnN0IGRlZmF1bHRSdWxlczogUkpGb3JtLlJ1bGVJdGVtW10gPSBbXG4gIHtcbiAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IG5vdEVtcHR5VmFsdWUodmFsdWUpLFxuICAgIG1lc3NhZ2U6ICflv4XloasnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbkxlbmd0aCcsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg/OiBzdHJpbmcpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWwj+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4TGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aD86IHN0cmluZykgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWkp+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogc3RyaW5nKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puW/hemhu+S4uiR7bGVuZ3RofWAsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UnVsZXM7XG4iLCJpbXBvcnQgZGVmYXVsdFJ1bGVzIGZyb20gJy4vZGVmYXVsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuXG4vKipcbiAqIOaJqeWxleeahOaWueazlVxuICogQHBhcmFtIHJ1bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRSdWxlcyA9IChydWxlczogUkpGb3JtLlJ1bGVJdGVtW10pOiB2b2lkID0+IHtcbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZGVmYXVsdFJ1bGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gcnVsZS5uYW1lID09PSBpdGVtLm5hbWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2Fybihg6KeE5YiZJHtydWxlLm5hbWV95bey5a2Y5ZyoLCDmianlsZXop4TliJnkvJropobnm5bpu5jorqTop4TliJlgKTtcbiAgICAgIGRlZmF1bHRSdWxlc1tpbmRleF0gPSBydWxlO1xuICAgIH1cbiAgICBkZWZhdWx0UnVsZXMucHVzaChydWxlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIOagueaNrmtleeafpeaJvlxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldFJ1bGVJdGVtQnlOYW1lID0gKG5hbWU6IHN0cmluZyk6IFJKRm9ybS5SdWxlSXRlbSB8IG51bGwgPT4ge1xuICBjb25zdCBmb3VuZFJ1bGUgPSBkZWZhdWx0UnVsZXMuZmluZCgocnVsZSkgPT4gcnVsZS5uYW1lID09PSBuYW1lKTtcbiAgcmV0dXJuIGZvdW5kUnVsZTtcbn07XG5cbi8qKlxuICog5qCh6aqMXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBydWxlc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxuICBrZXk6c3RyaW5nLFxuICB2YWx1ZTogYW55LFxuICBydWxlczogUkpGb3JtLlJ1bGVJdGVtW10sXG4pOiBSSkZvcm0uVmFsaWRhdGVkUmVzdWx0ID0+IHtcbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBzdGF0ZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfTtcblxuICBydWxlcy5zb21lKChydWxlKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCAuLi5ydWxlSXRlbSB9ID0gcnVsZTtcbiAgICBjb25zdCBydWxlTmFtZSA9IE9iamVjdC5rZXlzKHJ1bGVJdGVtKT8uWzBdO1xuICAgIGNvbnN0IHJ1bGVWYWx1ZSA9IHJ1bGVJdGVtPy5bcnVsZU5hbWVdO1xuICAgIGlmICghcnVsZU5hbWUpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIOWQpuWImemcgOimgeWcqOeOsOacieeahOinhOWImeWOu+afpeaJvlxuICAgIGNvbnN0IGRlZmF1bHRSdWxlSXRlbSA9IGdldFJ1bGVJdGVtQnlOYW1lKHJ1bGVOYW1lKTtcbiAgICBpZiAoIWRlZmF1bHRSdWxlSXRlbSkge1xuICAgICAgY29uc29sZS53YXJuKGDmnKrmib7liLAke3J1bGVOYW1lfeeahOagoemqjOinhOWImWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG1lc3NhZ2VcbiAgICBsZXQgbXNnID0gbWVzc2FnZSB8fCBkZWZhdWx0UnVsZUl0ZW0ubWVzc2FnZTtcbiAgICBtc2cgPSB0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nID8gbXNnKHJ1bGVWYWx1ZSkgOiBtc2c7XG5cbiAgICAvLyDoh6rlrprkuYnnmoR2YWxpZGF0b3JcbiAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgc3RhdGUgPSBydWxlVmFsdWUodmFsdWUpO1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUgPyAnJyA6IG1zZyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gIXN0YXRlO1xuICAgIH1cblxuICAgIC8vIOWmguaenOaYr2Jvb2xlYW7nmoTml7blgJnvvIx0cnVl5YC86ZyA6KaB5qCh6aqMXG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBydWxlVmFsdWUgPT09ICdib29sZWFuJyAmJiBydWxlVmFsdWUpXG4gICAgICB8fCBbJ3N0cmluZycsICdudW1iZXInXS5pbmRleE9mKHR5cGVvZiBydWxlVmFsdWUpICE9PSAtMVxuICAgICkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBkZWZhdWx0UnVsZUl0ZW0udmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge307XG5cbi8qKlxuICog5bCG5YC86L2s5o2i5Li65pe26Ze05oizXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREYXRlVGltZVN0YW1wID0gKHZhbHVlOiBhbnkpOiBudW1iZXIgPT4ge1xuICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiBtb21lbnQodmFsdWUpLnZhbHVlT2YoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGF0ZU1vbWVudCA9ICh2YWx1ZTogYW55KTogUkpGb3JtLkRhdGVUeXBlID0+IHtcbiAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gbW9tZW50KHZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuaXtumXtOiMg+WbtOWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0UmFuZ2VUaW1lU3RhbXAgPSAodmFsdWU6IGFueVtdKTogYW55W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbbnVsbCwgbnVsbF07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaWR4KSA9PiB7XG4gICAgICByZXN1bHRbaWR4XSA9IGdldERhdGVUaW1lU3RhbXAodmFsKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDlsIbml7bpl7TmiLPmlbDnu4TovazmjaLkuLptb21lbnTmlbDnu4RcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmdlTW9tZW50ID0gKFxuICB2YWx1ZTogW1JKRm9ybS5EYXRlVHlwZSwgUkpGb3JtLkRhdGVUeXBlXSB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0+IHtcbiAgY29uc3QgcmVzdWx0OiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0gW251bGwsIG51bGxdO1xuICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgcmVzdWx0W2lkeF0gPSB2YWwgPyBtb21lbnQodmFsKSA6IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBcnJheU9iamVjdDxUPihhcnJheTogVFtdID0gW10sIGtleTpzdHJpbmcsIHZhbHVlOiBhbnkpOlQge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICByZXR1cm4gZm91bmQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHNpbXBsZUNsb25lID0gKG9iajoge1tuYW1lOnN0cmluZ106YW55fSkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSAobGVuZ3RoID0gOCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9ICcxMjM0NTY3ODkwQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KCcnKTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHN0cmluZ0FycmF5Lmxlbmd0aCk7XG4gICAgcmVzdWx0LnB1c2goc3RyaW5nQXJyYXlbaW5kZXhdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5VmFsdWUgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIC8vIOmdnuepulxuICB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkgLy8g5pWw57uE5Lmf6Z2e56m6XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiIsIlxuZXhwb3J0IGNvbnN0IHJlbW92ZUxhYmVsU3R5bGVXaWR0aCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBgZm9ybS1sYWJlbC13aWR0aC0ke2lkfWA7XG4gIGNvbnN0IERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZU5hbWUpO1xuICBpZiAoRE9NKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKERPTSk7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGlkKTtcblxuICBpZiAobGFiZWxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0IFNUWUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWU7XG4gICAgbGV0IHN0eWxlcyA9IGAjJHtpZH0gLmFudC1mb3JtLWl0ZW0ge2Rpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlOyBmbGV4LWZsb3c6IHJvdzt9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1jb250cm9sIHtmbGV4LWdyb3c6IDF9YDtcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChTVFlMRSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9