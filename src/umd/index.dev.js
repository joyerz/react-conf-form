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

/***/ "./src/Form/Footer.tsx":
/*!*****************************!*\
  !*** ./src/Form/Footer.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function Footer(props) {
  var buttonTexts = props.buttonTexts,
      render = props.render,
      _props$align = props.align,
      align = _props$align === void 0 ? 'center' : _props$align,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? '42px 0 24px 0' : _props$padding,
      onReset = props.onReset,
      onSubmit = props.onSubmit;

  var _ref = buttonTexts || {},
      reset = _ref.reset,
      submit = _ref.submit;

  var config = {
    reset: {
      type: 'default',
      cb: onReset,
      text: reset
    },
    submit: {
      type: 'primary',
      cb: onSubmit,
      text: submit
    }
  };
  var defaultDom = [];
  Object.keys(buttonTexts).forEach(function (key) {
    var item = buttonTexts[key];

    if (item) {
      defaultDom.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: config[key].type,
        key: key,
        onClick: config[key].cb
      }, config[key].text));
    }
  });
  console.log(defaultDom);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: padding,
      textAlign: align
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    align: align,
    direction: direction
  }, render ? render(props, defaultDom) : defaultDom));
}

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
    onChange: onChangeThis,
    value: value
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
    onChange: onChangeThis,
    value: value
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"].RangePicker, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    onChange: onChangeThis,
    value: Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["getRangeMoment"])(value)
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
    onChange: onChangeThis,
    value: value
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
    onChange: onChangeThis,
    value: value
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
    onChange: onChangeThis,
    checked: value
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
    onChange: onChangeThis,
    value: value
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
/*! exports provided: extendFields, extendRules, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/string */ "./src/Form/utils/string.ts");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/object */ "./src/Form/utils/object.ts");
/* harmony import */ var _utils_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/style */ "./src/Form/utils/style.ts");
/* harmony import */ var _FormCol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormCol */ "./src/Form/FormCol.tsx");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules */ "./src/Form/rules/index.ts");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./src/Form/Footer.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields */ "./src/Form/fields/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendFields", function() { return _fields__WEBPACK_IMPORTED_MODULE_11__["extendFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendRules", function() { return _rules__WEBPACK_IMPORTED_MODULE_9__["extendRules"]; });














var useEffect = react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect,
    useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState;
var formID = "FORM_".concat(Object(_utils_string__WEBPACK_IMPORTED_MODULE_5__["randomString"])());
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
      data = _props$data === void 0 ? {} : _props$data,
      submitter = props.submitter;

  var _useState = useState(data),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      validation = _useState4[0],
      setValidation = _useState4[1]; // 添加样式


  useEffect(function () {
    Object(_utils_style__WEBPACK_IMPORTED_MODULE_7__["addLabelStyleWidth"])(labelWidth, labelDirection, formID);
    return function () {
      Object(_utils_style__WEBPACK_IMPORTED_MODULE_7__["removeLabelStyleWidth"])(formID);
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
    Object.keys(formData).forEach(function (key) {
      validateField(key, formData[key]);
    });
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
      var result = Object(_rules__WEBPACK_IMPORTED_MODULE_9__["validate"])(name, value, validationItem.rules);
      validationItem.message = result.message;
      validationItem.state = result.state;
      console.log("validated".concat(name), result);
      setValidation(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(validation));
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

    console.log('change:', name, value, oldValue);
    formData[name] = value;
    setFormData(Object(_utils_object__WEBPACK_IMPORTED_MODULE_6__["simpleClone"])(formData));

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

  var onFormSubmit = function onFormSubmit(e) {
    e && e.stopPropagation(); // 提交前校验

    if (!isAllValidated()) return;
    console.log('on submit', formData);
    return formData;
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

  var onReset = function onReset() {
    console.log('reset');
    var newValue = {};
    Object.keys(formData).forEach(function (key) {
      newValue[key] = null;
    });
    setFormData(newValue);
  };

  console.log('formData: ', formData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    id: formID,
    onSubmit: onFormSubmit
  }, schema.map(function (row, idx) {
    var rowKey = "row_".concat(idx);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      key: rowKey,
      gutter: gutter
    }, row.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormCol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: item.name || Object(_utils_string__WEBPACK_IMPORTED_MODULE_5__["randomString"])(),
        item: item,
        span: item.span || span,
        isVertical: isVertical,
        value: getValue(item.name),
        onFieldChange: onFieldChange,
        onKeyPress: onKeyPress(item.type),
        validate: getValidateByName(item.name)
      });
    }));
  }), JSON.stringify(submitter), submitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, submitter, {
    onReset: onReset,
    onSubmit: onFormSubmit
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vRm9ybUNvbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0F1dG9Db21wbGV0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0NoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQ2hlY2tib3hHcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0RhdGVQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9JbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL051bWJlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1Bhc3N3b3JkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUmFkaW8vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9SYWRpb0dyb3VwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUmFuZ2VQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9TZWFyY2gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9TZWxlY3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9Td2l0Y2gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9UZXh0YXJlYS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1RpbWVQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3J1bGVzL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vcnVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3V0aWxzL3N0eWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwiYnV0dG9uVGV4dHMiLCJyZW5kZXIiLCJhbGlnbiIsImRpcmVjdGlvbiIsInBhZGRpbmciLCJvblJlc2V0Iiwib25TdWJtaXQiLCJyZXNldCIsInN1Ym1pdCIsImNvbmZpZyIsInR5cGUiLCJjYiIsInRleHQiLCJkZWZhdWx0RG9tIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpdGVtIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJGb3JtQ29sIiwiY29sUHJvcHMiLCJzcGFuIiwiaXNWZXJ0aWNhbCIsInZhbHVlIiwib25GaWVsZENoYW5nZSIsIm9uS2V5UHJlc3MiLCJ2YWxpZGF0ZSIsImxhYmVsIiwicmVzdCIsImxhYmxlVGV4dCIsImNvbHMiLCJsYWJlbENvbCIsIndyYXBwZXJDb2wiLCJpc1JlcXVpcmVkIiwiaXRlbVJ1bGVzIiwiZmluZEFycmF5T2JqZWN0IiwibmFtZSIsInJ1bGVzIiwic3RhdGUiLCJtZXNzYWdlIiwiSW5wdXRGaWVsZCIsImZpZWxkUHJvcHMiLCJmaWx0ZXJPcHRpb24iLCJpbnB1dFZhbHVlIiwib3B0aW9uIiwiaW5kZXhPZiIsIm9uQ2hhbmdlVGhpcyIsIm5ld1ZhbHVlIiwib25DaGFuZ2UiLCJhcmdzIiwidGFyZ2V0IiwiY2hlY2tlZCIsIkRhdGVQaWNrZXJGaWVsZCIsImdldERhdGVUaW1lU3RhbXAiLCJnZXREYXRlTW9tZW50IiwiZ2V0UmFuZ2VUaW1lU3RhbXAiLCJnZXRSYW5nZU1vbWVudCIsIlNlYXJjaCIsIklucHV0IiwiU2VhcmNoRmllbGQiLCJUaW1lUGlja2VyRmllbGQiLCJGaWVsZE1hcCIsImlucHV0Iiwic2VhcmNoIiwidGV4dGFyZWEiLCJUZXh0YXJlYUZpZWxkIiwicGFzc3dvcmQiLCJQYXNzd29yZEZpZWxkIiwibnVtYmVyIiwiTnVtYmVyRmllbGQiLCJzZWxlY3QiLCJTZWxlY3RGaWVsZCIsInN3aXRjaCIsIlN3aXRjaEZpZWxkIiwiYXV0b0NvbXBsZXRlIiwiQXV0b0NvbXBsZXRlRmllbGQiLCJjaGVja2JveCIsIkNoZWNrYm94RmllbGQiLCJjaGVja2JveEdyb3VwIiwiQ2hlY2tib3hHcm91cEZpZWxkIiwiZGF0ZVBpY2tlciIsInJhbmdlUGlja2VyIiwiUmFuZ2VQaWNrZXJGaWVsZCIsInRpbWVQaWNrZXIiLCJyYWRpbyIsIlJhZGlvRmllbGQiLCJyYWRpb0dyb3VwIiwiUmFkaW9Hcm91cEZpZWxkIiwiRHluYW1pY0ZpZWxkIiwiQ29tcG9uZW50IiwiZXh0ZW5kRmllbGRzIiwiZmllbGRzIiwiZmllbGQiLCJmb3VuZEtleSIsImZpbmQiLCJFcnJvciIsImNvbXBvbmVudCIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJmb3JtSUQiLCJyYW5kb21TdHJpbmciLCJGb3JtIiwiZ3V0dGVyIiwibGFiZWxEaXJlY3Rpb24iLCJsYWJlbFdpZHRoIiwidmFsaWRhdGVPbkNoYW5nZSIsInNjaGVtYSIsImRhdGEiLCJzdWJtaXR0ZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidmFsaWRhdGlvbiIsInNldFZhbGlkYXRpb24iLCJhZGRMYWJlbFN0eWxlV2lkdGgiLCJyZW1vdmVMYWJlbFN0eWxlV2lkdGgiLCJyZXN1bHQiLCJyb3ciLCJ1bmRlZmluZWQiLCJnZXRWYWxpZGF0ZUJ5TmFtZSIsInZhbGlkYXRpb25JdGVtIiwiaXNBbGxWYWxpZGF0ZWQiLCJ2YWxpZGF0ZUZpZWxkIiwibm90VmFsaWRhdGVkSXRlbUluZGV4IiwiZmluZEluZGV4IiwidmFsaWRhdGVkIiwib2xkVmFsdWUiLCJzaW1wbGVDbG9uZSIsImdldFZhbHVlIiwib25Gb3JtU3VibWl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoYXJDb2RlIiwibWFwIiwiaWR4Iiwicm93S2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlZmF1bHRSdWxlcyIsInZhbGlkYXRvciIsIm5vdEVtcHR5VmFsdWUiLCJsZW5ndGgiLCJOdW1iZXIiLCJleHRlbmRSdWxlcyIsInJ1bGUiLCJpbmRleCIsIndhcm4iLCJnZXRSdWxlSXRlbUJ5TmFtZSIsImZvdW5kUnVsZSIsInNvbWUiLCJydWxlSXRlbSIsInJ1bGVOYW1lIiwicnVsZVZhbHVlIiwiZGVmYXVsdFJ1bGVJdGVtIiwibXNnIiwibW9tZW50IiwidmFsdWVPZiIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsImFycmF5IiwiZm91bmQiLCJvYmoiLCJwYXJzZSIsInN0cmluZ0FycmF5Iiwic3BsaXQiLCJpIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiam9pbiIsImlkIiwiYXR0cmlidXRlTmFtZSIsIkRPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkIiwicmVtb3ZlQ2hpbGQiLCJ3aWR0aCIsIlNUWUxFIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlcyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQiwrQkFBK0I7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDTEEsbUNBQW1DLG1CQUFPLENBQUMsZ0hBQW1DOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ2hCQSxxQkFBcUIsbUJBQU8sQ0FBQyxvRkFBcUI7O0FBRWxELDJCQUEyQixtQkFBTyxDQUFDLGdHQUEyQjs7QUFFOUQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDOztBQUUxRSxzQkFBc0IsbUJBQU8sQ0FBQyxzRkFBc0I7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ2JBLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQsc0JBQXNCLG1CQUFPLENBQUMsc0ZBQXNCOztBQUVwRCxpQ0FBaUMsbUJBQU8sQ0FBQyw0R0FBaUM7O0FBRTFFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDckJBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBK0Q7QUFDNUUsTUFDRUMsV0FERixHQVFJRCxLQVJKLENBQ0VDLFdBREY7QUFBQSxNQUVFQyxNQUZGLEdBUUlGLEtBUkosQ0FFRUUsTUFGRjtBQUFBLHFCQVFJRixLQVJKLENBR0VHLEtBSEY7QUFBQSxNQUdFQSxLQUhGLDZCQUdVLFFBSFY7QUFBQSx5QkFRSUgsS0FSSixDQUlFSSxTQUpGO0FBQUEsTUFJRUEsU0FKRixpQ0FJYyxZQUpkO0FBQUEsdUJBUUlKLEtBUkosQ0FLRUssT0FMRjtBQUFBLE1BS0VBLE9BTEYsK0JBS1ksZUFMWjtBQUFBLE1BTUVDLE9BTkYsR0FRSU4sS0FSSixDQU1FTSxPQU5GO0FBQUEsTUFPRUMsUUFQRixHQVFJUCxLQVJKLENBT0VPLFFBUEY7O0FBU0EsYUFBMEJOLFdBQVcsSUFBSSxFQUF6QztBQUFBLE1BQVFPLEtBQVIsUUFBUUEsS0FBUjtBQUFBLE1BQWVDLE1BQWYsUUFBZUEsTUFBZjs7QUFDQSxNQUFNQyxNQUFNLEdBQUc7QUFDYkYsU0FBSyxFQUFFO0FBQ0xHLFVBQUksRUFBRSxTQUREO0FBRUxDLFFBQUUsRUFBRU4sT0FGQztBQUdMTyxVQUFJLEVBQUVMO0FBSEQsS0FETTtBQU1iQyxVQUFNLEVBQUU7QUFDTkUsVUFBSSxFQUFFLFNBREE7QUFFTkMsUUFBRSxFQUFFTCxRQUZFO0FBR05NLFVBQUksRUFBRUo7QUFIQTtBQU5LLEdBQWY7QUFhQSxNQUFNSyxVQUFVLEdBQUcsRUFBbkI7QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVlmLFdBQVosRUFBeUJnQixPQUF6QixDQUFpQyxVQUFDQyxHQUFELEVBQVM7QUFDeEMsUUFBTUMsSUFBSSxHQUFHbEIsV0FBVyxDQUFDaUIsR0FBRCxDQUF4Qjs7QUFDQSxRQUFJQyxJQUFKLEVBQVU7QUFDUkwsZ0JBQVUsQ0FBQ00sSUFBWCxlQUNFLDJEQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFFVixNQUFNLENBQUNRLEdBQUQsQ0FBTixDQUFZUCxJQUExQjtBQUFnQyxXQUFHLEVBQUVPLEdBQXJDO0FBQTBDLGVBQU8sRUFBRVIsTUFBTSxDQUFDUSxHQUFELENBQU4sQ0FBWU47QUFBL0QsU0FDR0YsTUFBTSxDQUFDUSxHQUFELENBQU4sQ0FBWUwsSUFEZixDQURGO0FBS0Q7QUFDRixHQVREO0FBV0FRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRVQsYUFBTyxFQUFQQSxPQUFGO0FBQVdrQixlQUFTLEVBQUVwQjtBQUF0QjtBQUFaLGtCQUNFLDJEQUFDLDBDQUFEO0FBQU8sU0FBSyxFQUFFQSxLQUFkO0FBQXFCLGFBQVMsRUFBRUM7QUFBaEMsS0FDR0YsTUFBTSxHQUFHQSxNQUFNLENBQUNGLEtBQUQsRUFBUWMsVUFBUixDQUFULEdBQStCQSxVQUR4QyxDQURGLENBREY7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBNkM7QUFDM0QsTUFDRU4sSUFERixHQVFJTSxRQVJKLENBQ0VOLElBREY7QUFBQSxNQUVFTyxJQUZGLEdBUUlELFFBUkosQ0FFRUMsSUFGRjtBQUFBLE1BR0VDLFVBSEYsR0FRSUYsUUFSSixDQUdFRSxVQUhGO0FBQUEsTUFJRUMsS0FKRixHQVFJSCxRQVJKLENBSUVHLEtBSkY7QUFBQSxNQUtFQyxhQUxGLEdBUUlKLFFBUkosQ0FLRUksYUFMRjtBQUFBLE1BTUVDLFVBTkYsR0FRSUwsUUFSSixDQU1FSyxVQU5GO0FBQUEsTUFPRUMsUUFQRixHQVFJTixRQVJKLENBT0VNLFFBUEY7O0FBVUEsTUFBUUMsS0FBUixHQUEyQmIsSUFBM0IsQ0FBUWEsS0FBUjtBQUFBLE1BQWtCQyxJQUFsQix5RkFBMkJkLElBQTNCOztBQUVBLE1BQU1lLFNBQVMsR0FBRyxPQUFPRixLQUFQLEtBQWlCLFVBQWpCLEdBQThCQSxLQUFLLEVBQW5DLEdBQXdDQSxLQUExRDtBQUVBLE1BQU1HLElBQUksR0FBR1IsVUFBVSxHQUFHO0FBQUVTLFlBQVEsRUFBRTtBQUFFVixVQUFJLEVBQUU7QUFBUixLQUFaO0FBQTBCVyxjQUFVLEVBQUU7QUFBRVgsVUFBSSxFQUFFO0FBQVI7QUFBdEMsR0FBSCxHQUEwRCxFQUFqRjs7QUFFQSxNQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxTQUFEO0FBQUEsV0FBK0IsQ0FBQyxDQUFDQyxxRUFBZSxDQUFDRCxTQUFELEVBQVksVUFBWixFQUF3QixJQUF4QixDQUFoRDtBQUFBLEdBQW5COztBQUVBLHNCQUNFLDJEQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFYixJQUFYO0FBQWlCLGNBQVUsRUFBRUk7QUFBN0Isa0JBQ0UsMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFFSSxTQURUO0FBRUUsT0FBRyxFQUFFZixJQUFJLENBQUNzQixJQUZaO0FBR0UsWUFBUSxFQUFFSCxVQUFVLENBQUNuQixJQUFJLENBQUN1QixLQUFOLENBSHRCO0FBSUUsa0JBQWMsRUFDWFgsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ1ksS0FBdkIsR0FDSSxPQURKLEdBRUksRUFQUjtBQVNFLFFBQUksRUFBRVosUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVhO0FBVGxCLEtBVU1ULElBVk4sZ0JBWUUsMkRBQUMsK0NBQUQsNEVBQ01GLElBRE47QUFFRSxjQUFVLEVBQUVOLFVBRmQ7QUFHRSxpQkFBYSxFQUFFRSxhQUhqQjtBQUlFLFNBQUssRUFBRUQ7QUFKVCxLQVpGLENBREYsQ0FERjtBQXVCRCxDQTFDRDs7QUE0Q2VKLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBRWUsU0FBU3FCLFVBQVQsQ0FBb0I3QyxLQUFwQixFQUF1RDtBQUNwRSxNQUFRNkIsYUFBUixHQUFtRDdCLEtBQW5ELENBQVE2QixhQUFSO0FBQUEsTUFBdUJZLElBQXZCLEdBQW1EekMsS0FBbkQsQ0FBdUJ5QyxJQUF2QjtBQUFBLE1BQTZCYixLQUE3QixHQUFtRDVCLEtBQW5ELENBQTZCNEIsS0FBN0I7QUFBQSxNQUFvQ2tCLFVBQXBDLEdBQW1EOUMsS0FBbkQsQ0FBb0M4QyxVQUFwQzs7QUFFQSxNQUFJLEVBQUNBLFVBQUQsYUFBQ0EsVUFBRCxlQUFDQSxVQUFVLENBQUVDLFlBQWIsQ0FBSixFQUErQjtBQUM3QkQsY0FBVSxDQUFDQyxZQUFYLEdBQTBCLFVBQUNDLFVBQUQsRUFBYUMsTUFBYjtBQUFBLGFBQ3hCRCxVQUFVLElBQUlDLE1BQU0sQ0FBQ3JCLEtBQVAsQ0FBYXNCLE9BQWIsQ0FBcUJGLFVBQXJCLE1BQXFDLENBQUMsQ0FENUI7QUFBQSxLQUExQjtBQUVEOztBQUVELE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWE7QUFDaEMsUUFBTUMsUUFBUSxtREFBZCxDQURnQyxDQUdoQzs7QUFDQSxRQUFJTixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxZQUFWO0FBQ0QsS0FOK0IsQ0FRaEM7OztBQUNBLFFBQUlqQixhQUFKLEVBQW1CO0FBQ2pCQSxtQkFBYSxDQUFDWSxJQUFELEVBQU9XLFFBQVAsRUFBaUJ4QixLQUFqQixDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLHNCQUFPLDJEQUFDLGlEQUFELDRFQUFrQmtCLFVBQWxCO0FBQThCLFlBQVEsRUFBRUs7QUFBeEMsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUNBO0FBRWUsU0FBU04sVUFBVCxDQUFvQjdDLEtBQXBCLEVBQXVEO0FBQ3BFLE1BQVE2QixhQUFSLEdBQW1EN0IsS0FBbkQsQ0FBUTZCLGFBQVI7QUFBQSxNQUF1QlksSUFBdkIsR0FBbUR6QyxLQUFuRCxDQUF1QnlDLElBQXZCO0FBQUEsTUFBNkJiLEtBQTdCLEdBQW1ENUIsS0FBbkQsQ0FBNkI0QixLQUE3QjtBQUFBLE1BQW9Da0IsVUFBcEMsR0FBbUQ5QyxLQUFuRCxDQUFvQzhDLFVBQXBDOztBQUVBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWE7QUFBQSxzQ0FBVEcsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ2hDLFFBQU1GLFFBQVEsR0FBR0UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxNQUFSLENBQWVDLE9BQWhDLENBRGdDLENBR2hDOztBQUNBLFFBQUlWLFVBQVUsQ0FBQ08sUUFBZixFQUF5QjtBQUN2QlAsZ0JBQVUsQ0FBQ08sUUFBWCxPQUFBUCxVQUFVLEVBQWFRLElBQWIsQ0FBVjtBQUNELEtBTitCLENBUWhDOzs7QUFDQSxRQUFJekIsYUFBSixFQUFtQjtBQUNqQkEsbUJBQWEsQ0FBQ1ksSUFBRCxFQUFPVyxRQUFQLEVBQWlCeEIsS0FBakIsQ0FBYjtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxzQkFDRSwyREFBQyw2Q0FBRCw0RUFBY2tCLFVBQWQ7QUFBMEIsWUFBUSxFQUFFSyxZQUFwQztBQUFrRCxXQUFPLEVBQUV2QjtBQUEzRCxNQUNHa0IsVUFBVSxDQUFDZCxLQURkLENBREY7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUVlLFNBQVNhLFVBQVQsQ0FBb0I3QyxLQUFwQixFQUF1RDtBQUNwRSxNQUFRNkIsYUFBUixHQUFtRDdCLEtBQW5ELENBQVE2QixhQUFSO0FBQUEsTUFBdUJZLElBQXZCLEdBQW1EekMsS0FBbkQsQ0FBdUJ5QyxJQUF2QjtBQUFBLE1BQTZCYixLQUE3QixHQUFtRDVCLEtBQW5ELENBQTZCNEIsS0FBN0I7QUFBQSxNQUFvQ2tCLFVBQXBDLEdBQW1EOUMsS0FBbkQsQ0FBb0M4QyxVQUFwQzs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQ2hDLFFBQU1DLFFBQVEsbURBQWQsQ0FEZ0MsQ0FHaEM7O0FBQ0EsUUFBSU4sVUFBVSxDQUFDTyxRQUFmLEVBQXlCO0FBQ3ZCUCxnQkFBVSxDQUFDTyxRQUFYLE9BQUFQLFVBQVUsWUFBVjtBQUNELEtBTitCLENBUWhDOzs7QUFDQSxRQUFJakIsYUFBSixFQUFtQjtBQUNqQkEsbUJBQWEsQ0FBQ1ksSUFBRCxFQUFPVyxRQUFQLEVBQWlCeEIsS0FBakIsQ0FBYjtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxzQkFDRSwyREFBQyw2Q0FBRCxDQUFVLEtBQVYsNEVBQW9Ca0IsVUFBcEI7QUFBZ0MsWUFBUSxFQUFFSyxZQUExQztBQUF3RCxTQUFLLEVBQUV2QjtBQUEvRCxLQURGO0FBR0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUNBO0FBQ0E7QUFFZSxTQUFTNkIsZUFBVCxDQUF5QnpELEtBQXpCLEVBQTREO0FBQ3pFLE1BQVE2QixhQUFSLEdBQW1EN0IsS0FBbkQsQ0FBUTZCLGFBQVI7QUFBQSxNQUF1QlksSUFBdkIsR0FBbUR6QyxLQUFuRCxDQUF1QnlDLElBQXZCO0FBQUEsTUFBNkJiLEtBQTdCLEdBQW1ENUIsS0FBbkQsQ0FBNkI0QixLQUE3QjtBQUFBLE1BQW9Da0IsVUFBcEMsR0FBbUQ5QyxLQUFuRCxDQUFvQzhDLFVBQXBDOztBQUVBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWE7QUFDaEMsUUFBTUMsUUFBUSxHQUFHTSxvRUFBZ0Isa0RBQWpDLENBRGdDLENBR2hDOztBQUNBLFFBQUlaLFVBQVUsQ0FBQ08sUUFBZixFQUF5QjtBQUN2QlAsZ0JBQVUsQ0FBQ08sUUFBWCxPQUFBUCxVQUFVLFlBQVY7QUFDRCxLQU4rQixDQVFoQzs7O0FBQ0EsUUFBSWpCLGFBQUosRUFBbUI7QUFDakJBLG1CQUFhLENBQUNZLElBQUQsRUFBT1csUUFBUCxFQUFpQnhCLEtBQWpCLENBQWI7QUFDRDtBQUNGLEdBWkQ7O0FBY0Esc0JBQ0UsMkRBQUMsK0NBQUQsNEVBQ01rQixVQUROO0FBRUUsWUFBUSxFQUFFSyxZQUZaO0FBR0UsU0FBSyxFQUFFUSxpRUFBYSxDQUFDL0IsS0FBRDtBQUh0QixLQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQ0E7QUFFZSxTQUFTaUIsVUFBVCxDQUFvQjdDLEtBQXBCLEVBQXVEO0FBQ3BFLE1BQVE2QixhQUFSLEdBQW1EN0IsS0FBbkQsQ0FBUTZCLGFBQVI7QUFBQSxNQUF1QlksSUFBdkIsR0FBbUR6QyxLQUFuRCxDQUF1QnlDLElBQXZCO0FBQUEsTUFBNkJiLEtBQTdCLEdBQW1ENUIsS0FBbkQsQ0FBNkI0QixLQUE3QjtBQUFBLE1BQW9Da0IsVUFBcEMsR0FBbUQ5QyxLQUFuRCxDQUFvQzhDLFVBQXBDOztBQUVBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWE7QUFBQSxzQ0FBVEcsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ2hDLFFBQU1GLFFBQVEsR0FBR0UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxNQUFSLENBQWUzQixLQUFoQyxDQURnQyxDQUdoQzs7QUFDQSxRQUFJa0IsVUFBVSxDQUFDTyxRQUFmLEVBQXlCO0FBQ3ZCUCxnQkFBVSxDQUFDTyxRQUFYLE9BQUFQLFVBQVUsRUFBYVEsSUFBYixDQUFWO0FBQ0QsS0FOK0IsQ0FRaEM7OztBQUNBLFFBQUl6QixhQUFKLEVBQW1CO0FBQ2pCQSxtQkFBYSxDQUFDWSxJQUFELEVBQU9XLFFBQVAsRUFBaUJ4QixLQUFqQixDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLHNCQUFPLDJEQUFDLDBDQUFELDRFQUFXa0IsVUFBWDtBQUF1QixZQUFRLEVBQUVLLFlBQWpDO0FBQStDLFNBQUssRUFBRXZCO0FBQXRELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUVlLFNBQVNpQixVQUFULENBQW9CN0MsS0FBcEIsRUFBdUQ7QUFDcEUsTUFBUTZCLGFBQVIsR0FBbUQ3QixLQUFuRCxDQUFRNkIsYUFBUjtBQUFBLE1BQXVCWSxJQUF2QixHQUFtRHpDLEtBQW5ELENBQXVCeUMsSUFBdkI7QUFBQSxNQUE2QmIsS0FBN0IsR0FBbUQ1QixLQUFuRCxDQUE2QjRCLEtBQTdCO0FBQUEsTUFBb0NrQixVQUFwQyxHQUFtRDlDLEtBQW5ELENBQW9DOEMsVUFBcEM7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDO0FBQ0EsUUFBSU4sVUFBVSxDQUFDTyxRQUFmLEVBQXlCO0FBQ3ZCUCxnQkFBVSxDQUFDTyxRQUFYLENBQW9CRCxRQUFwQjtBQUNELEtBSmdDLENBTWpDOzs7QUFDQSxRQUFJdkIsYUFBSixFQUFtQjtBQUNqQkEsbUJBQWEsQ0FBQ1ksSUFBRCxFQUFPVyxRQUFQLEVBQWlCeEIsS0FBakIsQ0FBYjtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxzQkFBTywyREFBQyxnREFBRCw0RUFBaUJrQixVQUFqQjtBQUE2QixZQUFRLEVBQUVLLFlBQXZDO0FBQXFELFNBQUssRUFBRXZCO0FBQTVELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUVlLFNBQVNpQixVQUFULENBQW9CN0MsS0FBcEIsRUFBdUQ7QUFDcEUsTUFBUTZCLGFBQVIsR0FBbUQ3QixLQUFuRCxDQUFRNkIsYUFBUjtBQUFBLE1BQXVCWSxJQUF2QixHQUFtRHpDLEtBQW5ELENBQXVCeUMsSUFBdkI7QUFBQSxNQUE2QmIsS0FBN0IsR0FBbUQ1QixLQUFuRCxDQUE2QjRCLEtBQTdCO0FBQUEsTUFBb0NrQixVQUFwQyxHQUFtRDlDLEtBQW5ELENBQW9DOEMsVUFBcEM7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBYTtBQUFBLHNDQUFURyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFDaEMsUUFBTUYsUUFBUSxHQUFHRSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLE1BQVIsQ0FBZTNCLEtBQWhDLENBRGdDLENBR2hDOztBQUNBLFFBQUlrQixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxFQUFhUSxJQUFiLENBQVY7QUFDRCxLQU4rQixDQVFoQzs7O0FBQ0EsUUFBSXpCLGFBQUosRUFBbUI7QUFDakJBLG1CQUFhLENBQUNZLElBQUQsRUFBT1csUUFBUCxFQUFpQnhCLEtBQWpCLENBQWI7QUFDRDtBQUNGLEdBWkQ7O0FBY0Esc0JBQ0UsMkRBQUMsMENBQUQsQ0FBTyxRQUFQLDRFQUFvQmtCLFVBQXBCO0FBQWdDLFlBQVEsRUFBRUssWUFBMUM7QUFBd0QsU0FBSyxFQUFFdkI7QUFBL0QsS0FERjtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUNBO0FBRWUsU0FBU2lCLFVBQVQsQ0FBb0I3QyxLQUFwQixFQUF1RDtBQUNwRSxNQUFRNkIsYUFBUixHQUFtRDdCLEtBQW5ELENBQVE2QixhQUFSO0FBQUEsTUFBdUJZLElBQXZCLEdBQW1EekMsS0FBbkQsQ0FBdUJ5QyxJQUF2QjtBQUFBLE1BQTZCYixLQUE3QixHQUFtRDVCLEtBQW5ELENBQTZCNEIsS0FBN0I7QUFBQSxNQUFvQ2tCLFVBQXBDLEdBQW1EOUMsS0FBbkQsQ0FBb0M4QyxVQUFwQzs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQUEsc0NBQVRHLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUNoQyxRQUFNRixRQUFRLEdBQUdFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsTUFBUixDQUFlQyxPQUFoQyxDQURnQyxDQUdoQzs7QUFDQSxRQUFJVixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxFQUFhUSxJQUFiLENBQVY7QUFDRCxLQU4rQixDQVFoQzs7O0FBQ0EsUUFBSXpCLGFBQUosRUFBbUI7QUFDakJBLG1CQUFhLENBQUNZLElBQUQsRUFBT1csUUFBUCxFQUFpQnhCLEtBQWpCLENBQWI7QUFDRDtBQUNGLEdBWkQ7O0FBY0Esc0JBQ0UsMkRBQUMsMENBQUQsNEVBQVdrQixVQUFYO0FBQXVCLFlBQVEsRUFBRUssWUFBakM7QUFBK0MsV0FBTyxFQUFFdkI7QUFBeEQsTUFDR2tCLFVBQVUsQ0FBQ2QsS0FEZCxDQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0FBQ0E7QUFFZSxTQUFTYSxVQUFULENBQW9CN0MsS0FBcEIsRUFBdUQ7QUFDcEUsTUFBUTZCLGFBQVIsR0FBbUQ3QixLQUFuRCxDQUFRNkIsYUFBUjtBQUFBLE1BQXVCWSxJQUF2QixHQUFtRHpDLEtBQW5ELENBQXVCeUMsSUFBdkI7QUFBQSxNQUE2QmIsS0FBN0IsR0FBbUQ1QixLQUFuRCxDQUE2QjRCLEtBQTdCO0FBQUEsTUFBb0NrQixVQUFwQyxHQUFtRDlDLEtBQW5ELENBQW9DOEMsVUFBcEM7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBYTtBQUFBLHNDQUFURyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFDaEMsUUFBTUYsUUFBUSxHQUFHRSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLE1BQVIsQ0FBZTNCLEtBQWhDLENBRGdDLENBR2hDOztBQUNBLFFBQUlrQixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxFQUFhUSxJQUFiLENBQVY7QUFDRCxLQU4rQixDQVFoQzs7O0FBQ0EsUUFBSXpCLGFBQUosRUFBbUI7QUFDakJBLG1CQUFhLENBQUNZLElBQUQsRUFBT1csUUFBUCxFQUFpQnhCLEtBQWpCLENBQWI7QUFDRDtBQUNGLEdBWkQ7O0FBY0Esc0JBQU8sMkRBQUMsMENBQUQsQ0FBTyxLQUFQLDRFQUFpQmtCLFVBQWpCO0FBQTZCLFlBQVEsRUFBRUssWUFBdkM7QUFBcUQsU0FBSyxFQUFFdkI7QUFBNUQsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBRWUsU0FBUzZCLGVBQVQsQ0FBeUJ6RCxLQUF6QixFQUE0RDtBQUN6RSxNQUFRNkIsYUFBUixHQUFtRDdCLEtBQW5ELENBQVE2QixhQUFSO0FBQUEsTUFBdUJZLElBQXZCLEdBQW1EekMsS0FBbkQsQ0FBdUJ5QyxJQUF2QjtBQUFBLE1BQTZCYixLQUE3QixHQUFtRDVCLEtBQW5ELENBQTZCNEIsS0FBN0I7QUFBQSxNQUFvQ2tCLFVBQXBDLEdBQW1EOUMsS0FBbkQsQ0FBb0M4QyxVQUFwQzs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQ2hDLFFBQU1DLFFBQVEsR0FBR1EscUVBQWlCLGtEQUFsQyxDQURnQyxDQUdoQzs7QUFDQSxRQUFJZCxVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxZQUFWO0FBQ0QsS0FOK0IsQ0FRaEM7OztBQUNBLFFBQUlqQixhQUFKLEVBQW1CO0FBQ2pCQSxtQkFBYSxDQUFDWSxJQUFELEVBQU9XLFFBQVAsRUFBaUJ4QixLQUFqQixDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLHNCQUNFLDJEQUFDLCtDQUFELENBQVksV0FBWiw0RUFDTWtCLFVBRE47QUFFRSxZQUFRLEVBQUVLLFlBRlo7QUFHRSxTQUFLLEVBQUVVLGtFQUFjLENBQUNqQyxLQUFEO0FBSHZCLEtBREY7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQTtBQUVBLElBQVFrQyxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjtBQUVlLFNBQVNFLFdBQVQsQ0FBcUJoRSxLQUFyQixFQUF3RDtBQUNyRSxNQUFRNkIsYUFBUixHQUFtRDdCLEtBQW5ELENBQVE2QixhQUFSO0FBQUEsTUFBdUJZLElBQXZCLEdBQW1EekMsS0FBbkQsQ0FBdUJ5QyxJQUF2QjtBQUFBLE1BQTZCYixLQUE3QixHQUFtRDVCLEtBQW5ELENBQTZCNEIsS0FBN0I7QUFBQSxNQUFvQ2tCLFVBQXBDLEdBQW1EOUMsS0FBbkQsQ0FBb0M4QyxVQUFwQzs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQUEsc0NBQVRHLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUNoQyxRQUFNRixRQUFRLEdBQUdFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUMsTUFBUixDQUFlM0IsS0FBaEMsQ0FEZ0MsQ0FHaEM7O0FBQ0EsUUFBSWtCLFVBQVUsQ0FBQ08sUUFBZixFQUF5QjtBQUN2QlAsZ0JBQVUsQ0FBQ08sUUFBWCxPQUFBUCxVQUFVLEVBQWFRLElBQWIsQ0FBVjtBQUNELEtBTitCLENBUWhDOzs7QUFDQSxRQUFJekIsYUFBSixFQUFtQjtBQUNqQkEsbUJBQWEsQ0FBQ1ksSUFBRCxFQUFPVyxRQUFQLEVBQWlCeEIsS0FBakIsQ0FBYjtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxzQkFBTywyREFBQyxNQUFELDRFQUFZa0IsVUFBWjtBQUF3QixZQUFRLEVBQUVLLFlBQWxDO0FBQWdELFNBQUssRUFBRXZCO0FBQXZELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFDQTtBQUVlLFNBQVNpQixVQUFULENBQW9CN0MsS0FBcEIsRUFBdUQ7QUFDcEUsTUFBUTZCLGFBQVIsR0FBbUQ3QixLQUFuRCxDQUFRNkIsYUFBUjtBQUFBLE1BQXVCWSxJQUF2QixHQUFtRHpDLEtBQW5ELENBQXVCeUMsSUFBdkI7QUFBQSxNQUE2QmIsS0FBN0IsR0FBbUQ1QixLQUFuRCxDQUE2QjRCLEtBQTdCO0FBQUEsTUFBb0NrQixVQUFwQyxHQUFtRDlDLEtBQW5ELENBQW9DOEMsVUFBcEM7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDO0FBRUE7QUFDQSxRQUFJTixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsQ0FBb0JELFFBQXBCO0FBQ0QsS0FOZ0MsQ0FRakM7OztBQUNBLFFBQUl2QixhQUFKLEVBQW1CO0FBQ2pCQSxtQkFBYSxDQUFDWSxJQUFELEVBQU9XLFFBQVAsRUFBaUJ4QixLQUFqQixDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLHNCQUFPLDJEQUFDLDJDQUFELDRFQUFZa0IsVUFBWjtBQUF3QixZQUFRLEVBQUVLLFlBQWxDO0FBQWdELFNBQUssRUFBRXZCO0FBQXZELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUVlLFNBQVNpQixVQUFULENBQW9CN0MsS0FBcEIsRUFBdUQ7QUFDcEUsTUFBUTZCLGFBQVIsR0FBbUQ3QixLQUFuRCxDQUFRNkIsYUFBUjtBQUFBLE1BQXVCWSxJQUF2QixHQUFtRHpDLEtBQW5ELENBQXVCeUMsSUFBdkI7QUFBQSxNQUE2QmIsS0FBN0IsR0FBbUQ1QixLQUFuRCxDQUE2QjRCLEtBQTdCO0FBQUEsTUFBb0NrQixVQUFwQyxHQUFtRDlDLEtBQW5ELENBQW9DOEMsVUFBcEM7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBYTtBQUNoQyxRQUFNQyxRQUFRLG1EQUFkLENBRGdDLENBR2hDOztBQUNBLFFBQUlOLFVBQVUsQ0FBQ08sUUFBZixFQUF5QjtBQUN2QlAsZ0JBQVUsQ0FBQ08sUUFBWCxPQUFBUCxVQUFVLFlBQVY7QUFDRCxLQU4rQixDQVFoQzs7O0FBQ0EsUUFBSWpCLGFBQUosRUFBbUI7QUFDakJBLG1CQUFhLENBQUNZLElBQUQsRUFBT1csUUFBUCxFQUFpQixDQUFDLENBQUN4QixLQUFuQixDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLHNCQUFPLDJEQUFDLDJDQUFELDRFQUFZa0IsVUFBWjtBQUF3QixZQUFRLEVBQUVLLFlBQWxDO0FBQWdELFdBQU8sRUFBRXZCO0FBQXpELEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUVlLFNBQVNpQixVQUFULENBQW9CN0MsS0FBcEIsRUFBdUQ7QUFDcEUsTUFBUTZCLGFBQVIsR0FBbUQ3QixLQUFuRCxDQUFRNkIsYUFBUjtBQUFBLE1BQXVCWSxJQUF2QixHQUFtRHpDLEtBQW5ELENBQXVCeUMsSUFBdkI7QUFBQSxNQUE2QmIsS0FBN0IsR0FBbUQ1QixLQUFuRCxDQUE2QjRCLEtBQTdCO0FBQUEsTUFBb0NrQixVQUFwQyxHQUFtRDlDLEtBQW5ELENBQW9DOEMsVUFBcEM7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBYTtBQUFBLHNDQUFURyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFDaEMsUUFBTUYsUUFBUSxHQUFHRSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLE1BQVIsQ0FBZTNCLEtBQWhDLENBRGdDLENBR2hDOztBQUNBLFFBQUlrQixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxFQUFhUSxJQUFiLENBQVY7QUFDRCxLQU4rQixDQVFoQzs7O0FBQ0EsUUFBSXpCLGFBQUosRUFBbUI7QUFDakJBLG1CQUFhLENBQUNZLElBQUQsRUFBT1csUUFBUCxFQUFpQnhCLEtBQWpCLENBQWI7QUFDRDtBQUNGLEdBWkQ7O0FBY0Esc0JBQ0UsMkRBQUMsMENBQUQsQ0FBTyxRQUFQLDRFQUFvQmtCLFVBQXBCO0FBQWdDLFlBQVEsRUFBRUssWUFBMUM7QUFBd0QsU0FBSyxFQUFFdkI7QUFBL0QsS0FERjtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFDQTtBQUNBO0FBRWUsU0FBU3FDLGVBQVQsQ0FBeUJqRSxLQUF6QixFQUE0RDtBQUN6RSxNQUFRNkIsYUFBUixHQUFtRDdCLEtBQW5ELENBQVE2QixhQUFSO0FBQUEsTUFBdUJZLElBQXZCLEdBQW1EekMsS0FBbkQsQ0FBdUJ5QyxJQUF2QjtBQUFBLE1BQTZCYixLQUE3QixHQUFtRDVCLEtBQW5ELENBQTZCNEIsS0FBN0I7QUFBQSxNQUFvQ2tCLFVBQXBDLEdBQW1EOUMsS0FBbkQsQ0FBb0M4QyxVQUFwQzs7QUFFQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQ2hDLFFBQU1DLFFBQVEsR0FBR00sb0VBQWdCLGtEQUFqQyxDQURnQyxDQUdoQzs7QUFDQSxRQUFJWixVQUFVLENBQUNPLFFBQWYsRUFBeUI7QUFDdkJQLGdCQUFVLENBQUNPLFFBQVgsT0FBQVAsVUFBVSxZQUFWO0FBQ0QsS0FOK0IsQ0FRaEM7OztBQUNBLFFBQUlqQixhQUFKLEVBQW1CO0FBQ2pCQSxtQkFBYSxDQUFDWSxJQUFELEVBQU9XLFFBQVAsRUFBaUJ4QixLQUFqQixDQUFiO0FBQ0Q7QUFDRixHQVpEOztBQWNBLHNCQUNFLDJEQUFDLCtDQUFELDRFQUNNa0IsVUFETjtBQUVFLFlBQVEsRUFBRUssWUFGWjtBQUdFLFNBQUssRUFBRVEsaUVBQWEsQ0FBQy9CLEtBQUQ7QUFIdEIsS0FERjtBQU9ELEM7Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTXNDLFFBQVEsR0FBRztBQUNmQyxPQUFLLEVBQUV0Qiw4Q0FEUTtBQUVmdUIsUUFBTSxFQUFFSiwrQ0FGTztBQUdmSyxVQUFRLEVBQUVDLGlEQUhLO0FBSWZDLFVBQVEsRUFBRUMsaURBSks7QUFLZkMsUUFBTSxFQUFFQywrQ0FMTztBQU1mQyxRQUFNLEVBQUVDLCtDQU5PO0FBT2ZDLFFBQU0sRUFBRUMsK0NBUE87QUFRZkMsY0FBWSxFQUFFQyxxREFSQztBQVNmQyxVQUFRLEVBQUVDLGlEQVRLO0FBVWZDLGVBQWEsRUFBRUMsdURBVkE7QUFXZkMsWUFBVSxFQUFFNUIsb0RBWEc7QUFZZjZCLGFBQVcsRUFBRUMscURBWkU7QUFhZkMsWUFBVSxFQUFFdkIsb0RBYkc7QUFjZndCLE9BQUssRUFBRUMsK0NBZFE7QUFlZkMsWUFBVSxFQUFFQyxvREFBZUE7QUFmWixDQUFqQjtBQWtCZSxTQUFTQyxZQUFULENBQXNCN0YsS0FBdEIsRUFBa0Y7QUFDL0YsTUFDRVcsSUFERixHQU1JWCxLQU5KLENBQ0VXLElBREY7QUFBQSxNQUVFOEIsSUFGRixHQU1JekMsS0FOSixDQUVFeUMsSUFGRjtBQUFBLE1BR0ViLEtBSEYsR0FNSTVCLEtBTkosQ0FHRTRCLEtBSEY7QUFBQSwwQkFNSTVCLEtBTkosQ0FJRThDLFVBSkY7QUFBQSxNQUlFQSxVQUpGLGtDQUllLEVBSmY7QUFBQSxNQUtFakIsYUFMRixHQU1JN0IsS0FOSixDQUtFNkIsYUFMRjtBQVFBLE1BQU1pRSxTQUFTLEdBQUc1QixRQUFRLENBQUN2RCxJQUFELENBQTFCO0FBRUEsc0JBQ0UsMkRBQUMsU0FBRDtBQUNFLFFBQUksRUFBRThCLElBRFI7QUFFRSxTQUFLLEVBQUViLEtBRlQ7QUFHRSxjQUFVLEVBQUVrQixVQUhkO0FBSUUsaUJBQWEsRUFBRWpCO0FBSmpCLElBREY7QUFRRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1rRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQTRDO0FBQ3RFQSxRQUFNLENBQUMvRSxPQUFQLENBQWUsVUFBQ2dGLEtBQUQsRUFBVztBQUN4QixRQUFNQyxRQUFRLEdBQUduRixNQUFNLENBQUNDLElBQVAsQ0FBWWtELFFBQVosRUFBc0JpQyxJQUF0QixDQUEyQixVQUFDakYsR0FBRDtBQUFBLGFBQVNBLEdBQUcsS0FBSytFLEtBQUssQ0FBQ3hELElBQXZCO0FBQUEsS0FBM0IsQ0FBakI7O0FBQ0EsUUFBSXlELFFBQUosRUFBYztBQUNaLFlBQU0sSUFBSUUsS0FBSix1QkFBZUgsS0FBSyxDQUFDeEQsSUFBckIsNERBQU47QUFDRDs7QUFDRHlCLFlBQVEsQ0FBQytCLEtBQUssQ0FBQ3hELElBQVAsQ0FBUixHQUF1QndELEtBQUssQ0FBQ0ksU0FBN0I7QUFDRCxHQU5EO0FBT0QsQ0FSTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEUDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQVFDLFNBQVIsR0FBZ0NDLDRDQUFoQyxDQUFRRCxTQUFSO0FBQUEsSUFBbUJFLFFBQW5CLEdBQWdDRCw0Q0FBaEMsQ0FBbUJDLFFBQW5CO0FBRUEsSUFBTUMsTUFBTSxrQkFBV0Msa0VBQVksRUFBdkIsQ0FBWjtBQUVPLFNBQVNDLElBQVQsQ0FBYzNHLEtBQWQsRUFBb0Q7QUFDekQsc0JBVUlBLEtBVkosQ0FDRTRHLE1BREY7QUFBQSxNQUNFQSxNQURGLDhCQUNXLEVBRFg7QUFBQSxvQkFVSTVHLEtBVkosQ0FFRTBCLElBRkY7QUFBQSxNQUVFQSxJQUZGLDRCQUVTLEVBRlQ7QUFBQSw4QkFVSTFCLEtBVkosQ0FHRTZHLGNBSEY7QUFBQSxNQUdFQSxjQUhGLHNDQUdtQixZQUhuQjtBQUFBLDBCQVVJN0csS0FWSixDQUlFOEcsVUFKRjtBQUFBLE1BSUVBLFVBSkYsa0NBSWUsR0FKZjtBQUFBLDhCQVVJOUcsS0FWSixDQUtFK0csZ0JBTEY7QUFBQSxNQUtFQSxnQkFMRixzQ0FLcUIsSUFMckI7QUFBQSxNQU1FQyxNQU5GLEdBVUloSCxLQVZKLENBTUVnSCxNQU5GO0FBQUEsTUFPRTNELFFBUEYsR0FVSXJELEtBVkosQ0FPRXFELFFBUEY7QUFBQSxvQkFVSXJELEtBVkosQ0FRRWlILElBUkY7QUFBQSxNQVFFQSxJQVJGLDRCQVFTLEVBUlQ7QUFBQSxNQVNFQyxTQVRGLEdBVUlsSCxLQVZKLENBU0VrSCxTQVRGOztBQVlBLGtCQUFnQ1YsUUFBUSxDQUFDUyxJQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPRSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFvQ1osUUFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU9hLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkIsaUJBZHlELENBZ0J6RDs7O0FBQ0FoQixXQUFTLENBQUMsWUFBTTtBQUNkaUIsMkVBQWtCLENBQUNULFVBQUQsRUFBYUQsY0FBYixFQUE2QkosTUFBN0IsQ0FBbEI7QUFDQSxXQUFPLFlBQU07QUFDWGUsZ0ZBQXFCLENBQUNmLE1BQUQsQ0FBckI7QUFDRCxLQUZEO0FBR0QsR0FMUSxFQUtOLENBQUNJLGNBQUQsRUFBaUJDLFVBQWpCLENBTE0sQ0FBVCxDQWpCeUQsQ0F3QnpEOztBQUNBUixXQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1tQixNQUFNLEdBQUcsRUFBZjtBQUNBVCxVQUFNLENBQUMvRixPQUFQLENBQWUsVUFBQ3lHLEdBQUQsRUFBUztBQUN0QkEsU0FBRyxDQUFDekcsT0FBSixDQUFZLFVBQUNFLElBQUQsRUFBVTtBQUNwQixZQUFJQSxJQUFJLENBQUNzQixJQUFMLElBQWF0QixJQUFJLENBQUN1QixLQUF0QixFQUE2QjtBQUMzQitFLGdCQUFNLENBQUNyRyxJQUFQLENBQVk7QUFDVnVCLGlCQUFLLEVBQUUsSUFERztBQUVWQyxtQkFBTyxFQUFFLEVBRkM7QUFHVkgsZ0JBQUksRUFBRXRCLElBQUksQ0FBQ3NCLElBSEQ7QUFJVkMsaUJBQUssRUFBRXZCLElBQUksQ0FBQ3VCO0FBSkYsV0FBWjtBQU1BeUUsa0JBQVEsQ0FBQ2hHLElBQUksQ0FBQ3NCLElBQU4sQ0FBUixHQUFzQjBFLFFBQVEsQ0FBQ2hHLElBQUksQ0FBQ3NCLElBQU4sQ0FBUixJQUF1QmtGLFNBQTdDO0FBQ0Q7QUFDRixPQVZEO0FBV0QsS0FaRDtBQWFBTCxpQkFBYSxDQUFDRyxNQUFELENBQWI7QUFDRCxHQWhCUSxFQWdCTixDQUFDVCxNQUFELENBaEJNLENBQVQsQ0F6QnlELENBMkN6RDs7QUFDQSxNQUFNWSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNuRixJQUFELEVBQWtCO0FBQzFDLFFBQU1vRixjQUFjLEdBQUdSLFVBQVUsQ0FBQ2xCLElBQVgsQ0FBZ0IsVUFBQ2hGLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNzQixJQUFMLEtBQWNBLElBQXhCO0FBQUEsS0FBaEIsQ0FBdkI7QUFDQSxXQUFPO0FBQ0xFLFdBQUssRUFBRWtGLGNBQWMsR0FBR0EsY0FBYyxDQUFDbEYsS0FBbEIsR0FBMEIsSUFEMUM7QUFFTEMsYUFBTyxFQUFFLENBQUFpRixjQUFjLFNBQWQsSUFBQUEsY0FBYyxXQUFkLFlBQUFBLGNBQWMsQ0FBRWpGLE9BQWhCLEtBQTJCO0FBRi9CLEtBQVA7QUFJRCxHQU5EO0FBUUE7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLE1BQU1rRixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWU7QUFDcEMvRyxVQUFNLENBQUNDLElBQVAsQ0FBWW1HLFFBQVosRUFBc0JsRyxPQUF0QixDQUE4QixVQUFDQyxHQUFELEVBQVM7QUFDckM2RyxtQkFBYSxDQUFDN0csR0FBRCxFQUFNaUcsUUFBUSxDQUFDakcsR0FBRCxDQUFkLENBQWI7QUFDRCxLQUZEO0FBR0EsUUFBTThHLHFCQUFxQixHQUFHakgsTUFBTSxDQUFDQyxJQUFQLENBQVlxRyxVQUFaLEVBQXdCWSxTQUF4QixDQUM1QixVQUFDL0csR0FBRDtBQUFBLGFBQVNtRyxVQUFVLENBQUNuRyxHQUFELENBQVYsQ0FBZ0JnSCxTQUFoQixLQUE4QixLQUF2QztBQUFBLEtBRDRCLENBQTlCO0FBR0EsV0FBT0YscUJBQXFCLEtBQUssQ0FBQyxDQUFsQztBQUNELEdBUkQ7QUFVQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxNQUFNRCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUN0RixJQUFELEVBQWViLEtBQWYsRUFBb0M7QUFDeEQsUUFBTWlHLGNBQWMsR0FBR1IsVUFBVSxDQUFDbEIsSUFBWCxDQUFnQixVQUFDaEYsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ3NCLElBQUwsS0FBY0EsSUFBeEI7QUFBQSxLQUFoQixDQUF2Qjs7QUFDQSxRQUFJb0YsY0FBSixFQUFvQjtBQUNsQixVQUFNSixNQUFNLEdBQUcxRix1REFBUSxDQUFDVSxJQUFELEVBQU9iLEtBQVAsRUFBY2lHLGNBQWMsQ0FBQ25GLEtBQTdCLENBQXZCO0FBQ0FtRixvQkFBYyxDQUFDakYsT0FBZixHQUF5QjZFLE1BQU0sQ0FBQzdFLE9BQWhDO0FBQ0FpRixvQkFBYyxDQUFDbEYsS0FBZixHQUF1QjhFLE1BQU0sQ0FBQzlFLEtBQTlCO0FBRUF0QixhQUFPLENBQUNDLEdBQVIsb0JBQXdCbUIsSUFBeEIsR0FBZ0NnRixNQUFoQztBQUNBSCxtQkFBYSxDQUFDLGdGQUFJRCxVQUFMLEVBQWI7QUFDRDtBQUNGLEdBVkQ7QUFZQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLE1BQU14RixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNZLElBQUQsRUFBZWIsS0FBZixFQUEyQnVHLFFBQTNCLEVBQW1EO0FBQ3ZFLFFBQUlwQixnQkFBSixFQUFzQjtBQUNwQmdCLG1CQUFhLENBQUN0RixJQUFELEVBQU9iLEtBQVAsQ0FBYjtBQUNEOztBQUNEUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCbUIsSUFBdkIsRUFBNkJiLEtBQTdCLEVBQW9DdUcsUUFBcEM7QUFDQWhCLFlBQVEsQ0FBQzFFLElBQUQsQ0FBUixHQUFpQmIsS0FBakI7QUFDQXdGLGVBQVcsQ0FBQ2dCLGlFQUFXLENBQUNqQixRQUFELENBQVosQ0FBWDs7QUFFQSxRQUFJOUQsUUFBSixFQUFjO0FBQ1pBLGNBQVEsQ0FBQ1osSUFBRCxFQUFPYixLQUFQLEVBQWN1RyxRQUFkLENBQVI7QUFDRDtBQUNGLEdBWEQ7QUFhQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUM1RixJQUFELEVBQW1CO0FBQ2xDLFFBQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sSUFBUDtBQUNYLFFBQU1iLEtBQUssR0FBR3VGLFFBQVEsQ0FBQzFFLElBQUQsQ0FBUixJQUFrQmtGLFNBQWhDO0FBQ0EsV0FBTy9GLEtBQVA7QUFDRCxHQUpEOztBQU1BLE1BQU1ELFVBQVUsR0FBR2tGLGNBQWMsS0FBSyxVQUF0Qzs7QUFFQSxNQUFNeUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUF3QztBQUMzREEsS0FBQyxJQUFJQSxDQUFDLENBQUNDLGVBQUYsRUFBTCxDQUQyRCxDQUUzRDs7QUFDQSxRQUFJLENBQUNWLGNBQWMsRUFBbkIsRUFBdUI7QUFDdkJ6RyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCNkYsUUFBekI7QUFDQSxXQUFPQSxRQUFQO0FBQ0QsR0FORDtBQVFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLE1BQU1yRixVQUFVLEdBQ2QsU0FESUEsVUFDSixDQUFDbkIsSUFBRDtBQUFBLFdBQ0EsVUFBQzRILENBQUQsRUFBYTtBQUNYLFVBQUk1SCxJQUFJLEtBQUssVUFBVCxJQUF1QjRILENBQUMsQ0FBQ0UsUUFBRixLQUFlLEVBQTFDLEVBQThDO0FBQzVDSCxvQkFBWTtBQUNiO0FBQ0YsS0FMRDtBQUFBLEdBREY7O0FBUUEsTUFBTWhJLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxRQUFNOEIsUUFBUSxHQUFHLEVBQWpCO0FBQ0FyQyxVQUFNLENBQUNDLElBQVAsQ0FBWW1HLFFBQVosRUFBc0JsRyxPQUF0QixDQUE4QixVQUFDQyxHQUFELEVBQVM7QUFDckNrQyxjQUFRLENBQUNsQyxHQUFELENBQVIsR0FBZ0IsSUFBaEI7QUFDRCxLQUZEO0FBR0FrRyxlQUFXLENBQUNoRSxRQUFELENBQVg7QUFDRCxHQVBEOztBQVNBL0IsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQjZGLFFBQTFCO0FBQ0Esc0JBQ0U7QUFBTSxNQUFFLEVBQUVWLE1BQVY7QUFBa0IsWUFBUSxFQUFFNkI7QUFBNUIsS0FDR3RCLE1BQU0sQ0FBQzBCLEdBQVAsQ0FBVyxVQUFDaEIsR0FBRCxFQUFNaUIsR0FBTixFQUFjO0FBQ3hCLFFBQU1DLE1BQU0saUJBQVVELEdBQVYsQ0FBWjtBQUNBLHdCQUNFLDJEQUFDLHdDQUFEO0FBQUssU0FBRyxFQUFFQyxNQUFWO0FBQWtCLFlBQU0sRUFBRWhDO0FBQTFCLE9BQ0djLEdBQUcsQ0FBQ2dCLEdBQUosQ0FBUSxVQUFDdkgsSUFBRDtBQUFBLDBCQUNQLDJEQUFDLGdEQUFEO0FBQ0UsV0FBRyxFQUFFQSxJQUFJLENBQUNzQixJQUFMLElBQWFpRSxrRUFBWSxFQURoQztBQUVFLFlBQUksRUFBRXZGLElBRlI7QUFHRSxZQUFJLEVBQUVBLElBQUksQ0FBQ08sSUFBTCxJQUFhQSxJQUhyQjtBQUlFLGtCQUFVLEVBQUVDLFVBSmQ7QUFLRSxhQUFLLEVBQUUwRyxRQUFRLENBQUNsSCxJQUFJLENBQUNzQixJQUFOLENBTGpCO0FBTUUscUJBQWEsRUFBRVosYUFOakI7QUFPRSxrQkFBVSxFQUFFQyxVQUFVLENBQUNYLElBQUksQ0FBQ1IsSUFBTixDQVB4QjtBQVFFLGdCQUFRLEVBQUVpSCxpQkFBaUIsQ0FBQ3pHLElBQUksQ0FBQ3NCLElBQU47QUFSN0IsUUFETztBQUFBLEtBQVIsQ0FESCxDQURGO0FBZ0JELEdBbEJBLENBREgsRUFxQkdvRyxJQUFJLENBQUNDLFNBQUwsQ0FBZTVCLFNBQWYsQ0FyQkgsRUF1QkdBLFNBQVMsaUJBQ1IsMkRBQUMsZ0RBQUQsNEVBQVlBLFNBQVo7QUFBdUIsV0FBTyxFQUFFNUcsT0FBaEM7QUFBeUMsWUFBUSxFQUFFZ0k7QUFBbkQsS0F4QkosQ0FERjtBQTZCRCxDOzs7Ozs7Ozs7Ozs7QUNsTUQ7QUFBQTtDQUVBOztBQUNBLElBQU1TLFlBQStCLEdBQUcsQ0FDdEM7QUFDRXRHLE1BQUksRUFBRSxVQURSO0FBRUV1RyxXQUFTLEVBQUUsbUJBQUNwSCxLQUFEO0FBQUEsV0FBZ0JxSCxtRUFBYSxDQUFDckgsS0FBRCxDQUE3QjtBQUFBLEdBRmI7QUFHRWdCLFNBQU8sRUFBRTtBQUhYLENBRHNDLEVBTXRDO0FBQ0VILE1BQUksRUFBRSxXQURSO0FBRUV1RyxXQUFTLEVBQUUsbUJBQUNwSCxLQUFELEVBQXdCc0gsTUFBeEI7QUFBQSxXQUE0Q3RILEtBQUssSUFBSUEsS0FBSyxDQUFDc0gsTUFBTixHQUFlQyxNQUFNLENBQUNELE1BQUQsQ0FBMUU7QUFBQSxHQUZiO0FBR0V0RyxTQUFPLEVBQUUsaUJBQUNzRyxNQUFEO0FBQUEsbURBQTRCQSxNQUE1QjtBQUFBO0FBSFgsQ0FOc0MsRUFXdEM7QUFDRXpHLE1BQUksRUFBRSxXQURSO0FBRUV1RyxXQUFTLEVBQUUsbUJBQUNwSCxLQUFELEVBQXdCc0gsTUFBeEI7QUFBQSxXQUE0Q3RILEtBQUssSUFBSUEsS0FBSyxDQUFDc0gsTUFBTixJQUFnQkMsTUFBTSxDQUFDRCxNQUFELENBQTNFO0FBQUEsR0FGYjtBQUdFdEcsU0FBTyxFQUFFLGlCQUFDc0csTUFBRDtBQUFBLG1EQUE0QkEsTUFBNUI7QUFBQTtBQUhYLENBWHNDLEVBZ0J0QztBQUNFekcsTUFBSSxFQUFFLFFBRFI7QUFFRXVHLFdBQVMsRUFBRSxtQkFBQ3BILEtBQUQsRUFBd0JzSCxNQUF4QjtBQUFBLFdBQTJDdEgsS0FBSyxJQUFJQSxLQUFLLENBQUNzSCxNQUFOLEtBQWlCQyxNQUFNLENBQUNELE1BQUQsQ0FBM0U7QUFBQSxHQUZiO0FBR0V0RyxTQUFPLEVBQUUsaUJBQUNzRyxNQUFEO0FBQUEsbURBQTRCQSxNQUE1QjtBQUFBO0FBSFgsQ0FoQnNDLENBQXhDO0FBdUJlSCwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRWUsaUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDMUcsS0FBRCxFQUFvQztBQUM3REEsT0FBSyxDQUFDekIsT0FBTixDQUFjLFVBQUNvSSxJQUFELEVBQVU7QUFDdEIsUUFBTUMsS0FBSyxHQUFHUCxnREFBWSxDQUFDZCxTQUFiLENBQXVCLFVBQUM5RyxJQUFEO0FBQUEsYUFBVWtJLElBQUksQ0FBQzVHLElBQUwsS0FBY3RCLElBQUksQ0FBQ3NCLElBQTdCO0FBQUEsS0FBdkIsQ0FBZDs7QUFDQSxRQUFJNkcsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQmpJLGFBQU8sQ0FBQ2tJLElBQVIsdUJBQWtCRixJQUFJLENBQUM1RyxJQUF2QjtBQUNBc0csc0RBQVksQ0FBQ08sS0FBRCxDQUFaLEdBQXNCRCxJQUF0QjtBQUNEOztBQUNETixvREFBWSxDQUFDM0gsSUFBYixDQUFrQmlJLElBQWxCO0FBQ0QsR0FQRDtBQVFELENBVE07QUFXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQy9HLElBQUQsRUFBMEM7QUFDbEUsTUFBTWdILFNBQVMsR0FBR1YsZ0RBQVksQ0FBQzVDLElBQWIsQ0FBa0IsVUFBQ2tELElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUM1RyxJQUFMLEtBQWNBLElBQXhCO0FBQUEsR0FBbEIsQ0FBbEI7QUFDQSxTQUFPZ0gsU0FBUDtBQUNELENBSEQ7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU0xSCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUN0QmIsR0FEc0IsRUFFdEJVLEtBRnNCLEVBR3RCYyxLQUhzQixFQUlLO0FBQzNCLE1BQUkrRSxNQUFNLEdBQUc7QUFDWDlFLFNBQUssRUFBRSxJQURJO0FBRVhDLFdBQU8sRUFBRTtBQUZFLEdBQWI7QUFLQUYsT0FBSyxDQUFDZ0gsSUFBTixDQUFXLFVBQUNMLElBQUQsRUFBVTtBQUFBOztBQUNuQixRQUFRekcsT0FBUixHQUFpQ3lHLElBQWpDLENBQVF6RyxPQUFSO0FBQUEsUUFBb0IrRyxRQUFwQix5RkFBaUNOLElBQWpDOztBQUNBLFFBQU1PLFFBQVEsbUJBQUc3SSxNQUFNLENBQUNDLElBQVAsQ0FBWTJJLFFBQVosQ0FBSCxpREFBRyxhQUF3QixDQUF4QixDQUFqQjtBQUNBLFFBQU1FLFNBQVMsR0FBR0YsUUFBSCxhQUFHQSxRQUFILHVCQUFHQSxRQUFRLENBQUdDLFFBQUgsQ0FBMUI7QUFDQSxRQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEtBQVAsQ0FKSSxDQU1uQjs7QUFDQSxRQUFNRSxlQUFlLEdBQUdOLGlCQUFpQixDQUFDSSxRQUFELENBQXpDOztBQUNBLFFBQUksQ0FBQ0UsZUFBTCxFQUFzQjtBQUNwQnpJLGFBQU8sQ0FBQ2tJLElBQVIsNkJBQW1CSyxRQUFuQjtBQUNBLGFBQU8sS0FBUDtBQUNELEtBWGtCLENBYW5COzs7QUFDQSxRQUFJRyxHQUFHLEdBQUduSCxPQUFPLElBQUlrSCxlQUFlLENBQUNsSCxPQUFyQztBQUNBbUgsT0FBRyxHQUFHLE9BQU9BLEdBQVAsS0FBZSxVQUFmLEdBQTRCQSxHQUFHLENBQUNGLFNBQUQsQ0FBL0IsR0FBNkNFLEdBQW5ELENBZm1CLENBaUJuQjs7QUFDQSxRQUFJLE9BQU9GLFNBQVAsS0FBcUIsVUFBekIsRUFBcUM7QUFDbkMsVUFBTWxILEtBQUssR0FBR2tILFNBQVMsQ0FBQ2pJLEtBQUQsQ0FBdkI7QUFDQTZGLFlBQU0sR0FBRztBQUNQOUUsYUFBSyxFQUFMQSxLQURPO0FBRVBDLGVBQU8sRUFBRUQsS0FBSyxHQUFHLEVBQUgsR0FBUW9IO0FBRmYsT0FBVDtBQUlBLGFBQU8sQ0FBQ3BILEtBQVI7QUFDRCxLQXpCa0IsQ0EyQm5COzs7QUFDQSxRQUNHLE9BQU9rSCxTQUFQLEtBQXFCLFNBQXJCLElBQWtDQSxTQUFuQyxJQUNHLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIzRyxPQUFyQixzRUFBb0MyRyxTQUFwQyxPQUFtRCxDQUFDLENBRnpELEVBR0U7QUFDQSxVQUFNbEgsTUFBSyxHQUFHbUgsZUFBZSxDQUFDZCxTQUFoQixDQUEwQnBILEtBQTFCLENBQWQ7O0FBQ0E2RixZQUFNLEdBQUc7QUFDUDlFLGFBQUssRUFBTEEsTUFETztBQUVQQyxlQUFPLEVBQUVELE1BQUssR0FBRyxFQUFILEdBQVFvSDtBQUZmLE9BQVQ7QUFJQSxhQUFPLENBQUNwSCxNQUFSO0FBQ0Q7O0FBRUQsV0FBTyxLQUFQO0FBQ0QsR0F6Q0Q7QUEyQ0EsU0FBTzhFLE1BQVA7QUFDRCxDQXRETSxDOzs7Ozs7Ozs7Ozs7QUNuQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxpRUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTS9ELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQzlCLEtBQUQsRUFBd0I7QUFDdEQsTUFBSXFILDZEQUFhLENBQUNySCxLQUFELENBQWpCLEVBQTBCLE9BQU9vSSw2Q0FBTSxDQUFDcEksS0FBRCxDQUFOLENBQWNxSSxPQUFkLEVBQVA7QUFDMUIsU0FBTyxJQUFQO0FBQ0QsQ0FITTtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTXRHLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQy9CLEtBQUQsRUFBaUM7QUFDNUQsTUFBSXFILDZEQUFhLENBQUNySCxLQUFELENBQWpCLEVBQTBCLE9BQU9vSSw2Q0FBTSxDQUFDcEksS0FBRCxDQUFiO0FBQzFCLFNBQU8sSUFBUDtBQUNELENBSE07QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1nQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNoQyxLQUFELEVBQXlCO0FBQ3hELE1BQU02RixNQUFNLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFmOztBQUNBLE1BQUl5QyxLQUFLLENBQUNDLE9BQU4sQ0FBY3ZJLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsU0FBSyxDQUFDWCxPQUFOLENBQWMsVUFBQ21KLEdBQUQsRUFBTXpCLEdBQU4sRUFBYztBQUMxQmxCLFlBQU0sQ0FBQ2tCLEdBQUQsQ0FBTixHQUFjakYsZ0JBQWdCLENBQUMwRyxHQUFELENBQTlCO0FBQ0QsS0FGRDtBQUdEOztBQUNELFNBQU8zQyxNQUFQO0FBQ0QsQ0FSTTtBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTTVELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FDNUJqQyxLQUQ0QixFQUVXO0FBQ3ZDLE1BQU02RixNQUEwQyxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBbkQ7O0FBQ0EsTUFBSTdGLEtBQUssSUFBSXNJLEtBQUssQ0FBQ0MsT0FBTixDQUFjdkksS0FBZCxDQUFiLEVBQW1DO0FBQ2pDQSxTQUFLLENBQUNYLE9BQU4sQ0FBYyxVQUFDbUosR0FBRCxFQUFNekIsR0FBTixFQUFjO0FBQzFCbEIsWUFBTSxDQUFDa0IsR0FBRCxDQUFOLEdBQWN5QixHQUFHLEdBQUdKLDZDQUFNLENBQUNJLEdBQUQsQ0FBVCxHQUFpQixJQUFsQztBQUNELEtBRkQ7QUFHRDs7QUFDRCxTQUFPM0MsTUFBUDtBQUNELENBVk0sQzs7Ozs7Ozs7Ozs7O0FDN0NQO0FBQUE7QUFBQTtBQUFlLGlFQUFmO0FBRU8sU0FBU2pGLGVBQVQsR0FBdUU7QUFBQSxNQUEzQzZILEtBQTJDLHVFQUE5QixFQUE4QjtBQUFBLE1BQTFCbkosR0FBMEI7QUFBQSxNQUFkVSxLQUFjO0FBQzVFLE1BQU0wSSxLQUFLLEdBQUdELEtBQUssQ0FBQ2xFLElBQU4sQ0FBVyxVQUFDaEYsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0QsR0FBRCxDQUFKLEtBQWNVLEtBQXhCO0FBQUEsR0FBWCxDQUFkO0FBQ0EsU0FBTzBJLEtBQUssSUFBSSxJQUFoQjtBQUNEO0FBRU0sSUFBTWxDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNtQyxHQUFEO0FBQUEsU0FBOEIxQixJQUFJLENBQUMyQixLQUFMLENBQVczQixJQUFJLENBQUNDLFNBQUwsQ0FBZXlCLEdBQWYsQ0FBWCxDQUE5QjtBQUFBLENBQXBCLEM7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQTtBQUFPLElBQU03RCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUF3QjtBQUFBLE1BQXZCd0MsTUFBdUIsdUVBQWQsQ0FBYztBQUNsRCxNQUFNdUIsV0FBcUIsR0FBRyx1Q0FBdUNDLEtBQXZDLENBQTZDLEVBQTdDLENBQTlCO0FBQ0EsTUFBTWpELE1BQU0sR0FBRyxFQUFmOztBQUNBLE9BQUssSUFBSWtELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd6QixNQUFwQixFQUE0QnlCLENBQUMsRUFBN0IsRUFBaUM7QUFDL0IsUUFBTXJCLEtBQUssR0FBR3NCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLFdBQVcsQ0FBQ3ZCLE1BQXZDLENBQWQ7QUFDQXpCLFVBQU0sQ0FBQ3JHLElBQVAsQ0FBWXFKLFdBQVcsQ0FBQ25CLEtBQUQsQ0FBdkI7QUFDRDs7QUFDRCxTQUFPN0IsTUFBTSxDQUFDc0QsSUFBUCxDQUFZLEVBQVosQ0FBUDtBQUNELENBUk07QUFVQSxJQUFNOUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDckgsS0FBRDtBQUFBLFNBQzFCQSxLQUFLLEtBQUssRUFBVixJQUFnQkEsS0FBSyxLQUFLK0YsU0FBMUIsSUFBdUMvRixLQUFLLEtBQUssSUFBbEQsSUFBd0Q7QUFDcERzSSxPQUFLLENBQUNDLE9BQU4sQ0FBY3ZJLEtBQWQsS0FBd0JBLEtBQUssQ0FBQ3NILE1BQU4sR0FBZSxDQUZoQixDQUVtQjtBQUZuQjtBQUFBLENBQXRCO0FBS1EsaUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQU8sSUFBTTFCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ3dELEVBQUQsRUFBZ0I7QUFDbkQsTUFBTUMsYUFBYSw4QkFBdUJELEVBQXZCLENBQW5CO0FBQ0EsTUFBTUUsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILGFBQXhCLENBQVo7QUFDQSxNQUFJQyxHQUFKLEVBQVNDLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixHQUExQjtBQUNULFNBQU9ELGFBQVA7QUFDRCxDQUxNO0FBT0EsSUFBTTFELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2dFLEtBQUQsRUFBZ0IxRSxjQUFoQixFQUEyRG1FLEVBQTNELEVBQTBFO0FBQzFHLE1BQU1DLGFBQWEsR0FBR3pELHFCQUFxQixDQUFDd0QsRUFBRCxDQUEzQzs7QUFFQSxNQUFJbkUsY0FBYyxLQUFLLFlBQXZCLEVBQXFDO0FBQ25DLFFBQU0yRSxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FELFNBQUssQ0FBQ1IsRUFBTixHQUFXQyxhQUFYO0FBQ0EsUUFBSVMsTUFBTSxjQUFPVixFQUFQLG9FQUFWO0FBQ0FVLFVBQU0sZUFBUVYsRUFBUiw0Q0FBNENPLEtBQTVDLFlBQU47QUFDQUcsVUFBTSxlQUFRVixFQUFSLDJDQUFOO0FBQ0FRLFNBQUssQ0FBQ0csU0FBTixHQUFrQkQsTUFBbEI7QUFDQVAsWUFBUSxDQUFDRSxJQUFULENBQWNPLFdBQWQsQ0FBMEJKLEtBQTFCO0FBQ0Q7QUFDRixDQVpNLEM7Ozs7Ozs7Ozs7O0FDUlAsa0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFudGRcIiwgXCJtb21lbnRcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcImFudGRcIl0sIHJvb3RbXCJtb21lbnRcIl0sIHJvb3RbXCJyZWFjdFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9Gb3JtL2luZGV4LnRzeFwiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgU3BhY2UgfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIElwcm9wcyB7XG4gIG9uUmVzZXQ6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAoKSA9PiB2b2lkO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzOiBSSkZvcm0uU3VibWl0dGVyICYgSXByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgYnV0dG9uVGV4dHMsXG4gICAgcmVuZGVyLFxuICAgIGFsaWduID0gJ2NlbnRlcicsXG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnLFxuICAgIHBhZGRpbmcgPSAnNDJweCAwIDI0cHggMCcsXG4gICAgb25SZXNldCxcbiAgICBvblN1Ym1pdCxcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IHJlc2V0LCBzdWJtaXQgfSA9IGJ1dHRvblRleHRzIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgcmVzZXQ6IHtcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIGNiOiBvblJlc2V0LFxuICAgICAgdGV4dDogcmVzZXQsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgIGNiOiBvblN1Ym1pdCxcbiAgICAgIHRleHQ6IHN1Ym1pdCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGRlZmF1bHREb20gPSBbXTtcbiAgT2JqZWN0LmtleXMoYnV0dG9uVGV4dHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBidXR0b25UZXh0c1trZXldO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBkZWZhdWx0RG9tLnB1c2goXG4gICAgICAgIDxCdXR0b24gdHlwZT17Y29uZmlnW2tleV0udHlwZX0ga2V5PXtrZXl9IG9uQ2xpY2s9e2NvbmZpZ1trZXldLmNifT5cbiAgICAgICAgICB7Y29uZmlnW2tleV0udGV4dH1cbiAgICAgICAgPC9CdXR0b24+LFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGRlZmF1bHREb20pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZywgdGV4dEFsaWduOiBhbGlnbiB9fT5cbiAgICAgIDxTcGFjZSBhbGlnbj17YWxpZ259IGRpcmVjdGlvbj17ZGlyZWN0aW9ufT5cbiAgICAgICAge3JlbmRlciA/IHJlbmRlcihwcm9wcywgZGVmYXVsdERvbSkgOiBkZWZhdWx0RG9tfVxuICAgICAgPC9TcGFjZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2wsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCBEeW5hbWljRmllbGQgZnJvbSAnLi9maWVsZHMnO1xuaW1wb3J0IHsgZmluZEFycmF5T2JqZWN0IH0gZnJvbSAnLi91dGlscy9vYmplY3QnO1xuXG4vKipcbiAgICog5riy5p+TY2VsbCBpdGVtXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqIEBwYXJhbSBnbG9iYWxTcGFuXG4gICAqIEByZXR1cm5zXG4gICAqL1xuY29uc3QgRm9ybUNvbCA9IChjb2xQcm9wczogUkpGb3JtLklDb2xQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIGl0ZW0sXG4gICAgc3BhbixcbiAgICBpc1ZlcnRpY2FsLFxuICAgIHZhbHVlLFxuICAgIG9uRmllbGRDaGFuZ2UsXG4gICAgb25LZXlQcmVzcyxcbiAgICB2YWxpZGF0ZSxcbiAgfSA9IGNvbFByb3BzO1xuXG4gIGNvbnN0IHsgbGFiZWwsIC4uLnJlc3QgfSA9IGl0ZW07XG5cbiAgY29uc3QgbGFibGVUZXh0ID0gdHlwZW9mIGxhYmVsID09PSAnZnVuY3Rpb24nID8gbGFiZWwoKSA6IGxhYmVsO1xuXG4gIGNvbnN0IGNvbHMgPSBpc1ZlcnRpY2FsID8geyBsYWJlbENvbDogeyBzcGFuOiAyNCB9LCB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0gfSA6IHt9O1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSAoaXRlbVJ1bGVzOiBSSkZvcm0uUnVsZXNbXSkgPT4gISFmaW5kQXJyYXlPYmplY3QoaXRlbVJ1bGVzLCAncmVxdWlyZWQnLCB0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxDb2wgc3Bhbj17c3Bhbn0gb25LZXlQcmVzcz17b25LZXlQcmVzc30+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPXtsYWJsZVRleHR9XG4gICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZChpdGVtLnJ1bGVzKX1cbiAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xuICAgICAgICAgICh2YWxpZGF0ZSAmJiAhdmFsaWRhdGUuc3RhdGUpXG4gICAgICAgICAgICA/ICdlcnJvcidcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBoZWxwPXt2YWxpZGF0ZT8ubWVzc2FnZX1cbiAgICAgICAgey4uLmNvbHN9XG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljRmllbGRcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgIG9uRmllbGRDaGFuZ2U9e29uRmllbGRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Db2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29sO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBpZiAoIWZpZWxkUHJvcHM/LmZpbHRlck9wdGlvbikge1xuICAgIGZpZWxkUHJvcHMuZmlsdGVyT3B0aW9uID0gKGlucHV0VmFsdWUsIG9wdGlvbikgPT5cbiAgICAgIGlucHV0VmFsdWUgJiYgb3B0aW9uLnZhbHVlLmluZGV4T2YoaW5wdXRWYWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8QXV0b0NvbXBsZXRlIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQuY2hlY2tlZDtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IGNoZWNrZWQ9e3ZhbHVlfT5cbiAgICAgIHtmaWVsZFByb3BzLmxhYmVsfVxuICAgIDwvQ2hlY2tib3g+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENoZWNrYm94Lkdyb3VwIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdGFtcCwgZ2V0RGF0ZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXREYXRlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICB2YWx1ZT17Z2V0RGF0ZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8SW5wdXQgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dE51bWJlciB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0LlBhc3N3b3JkIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0+XG4gICAgICB7ZmllbGRQcm9wcy5sYWJlbH1cbiAgICA8L1JhZGlvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxSYWRpby5Hcm91cCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSYW5nZVRpbWVTdGFtcCwgZ2V0UmFuZ2VNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0UmFuZ2VUaW1lU3RhbXAoYXJnc1swXSk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXtnZXRSYW5nZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U2VhcmNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTZWxlY3Qgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U3dpdGNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dC5UZXh0QXJlYSB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldERhdGVUaW1lU3RhbXAsIGdldERhdGVNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0RGF0ZVRpbWVTdGFtcChhcmdzWzBdKTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGltZVBpY2tlclxuICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfVxuICAgICAgdmFsdWU9e2dldERhdGVNb21lbnQodmFsdWUpfVxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgVGV4dGFyZWFGaWVsZCBmcm9tICcuL1RleHRhcmVhJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vUGFzc3dvcmQnO1xuaW1wb3J0IE51bWJlckZpZWxkIGZyb20gJy4vTnVtYmVyJztcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICcuL1NlbGVjdCc7XG5pbXBvcnQgU3dpdGNoRmllbGQgZnJvbSAnLi9Td2l0Y2gnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUZpZWxkIGZyb20gJy4vQXV0b0NvbXBsZXRlJztcbmltcG9ydCBDaGVja2JveEZpZWxkIGZyb20gJy4vQ2hlY2tib3gnO1xuaW1wb3J0IENoZWNrYm94R3JvdXBGaWVsZCBmcm9tICcuL0NoZWNrYm94R3JvdXAnO1xuaW1wb3J0IERhdGVQaWNrZXJGaWVsZCBmcm9tICcuL0RhdGVQaWNrZXInO1xuaW1wb3J0IFJhbmdlUGlja2VyRmllbGQgZnJvbSAnLi9SYW5nZVBpY2tlcic7XG5pbXBvcnQgVGltZVBpY2tlckZpZWxkIGZyb20gJy4vVGltZVBpY2tlcic7XG5pbXBvcnQgUmFkaW9GaWVsZCBmcm9tICcuL1JhZGlvJztcbmltcG9ydCBSYWRpb0dyb3VwRmllbGQgZnJvbSAnLi9SYWRpb0dyb3VwJztcblxuLy8gRmllbGRNYXBcbmNvbnN0IEZpZWxkTWFwID0ge1xuICBpbnB1dDogSW5wdXRGaWVsZCxcbiAgc2VhcmNoOiBTZWFyY2hGaWVsZCxcbiAgdGV4dGFyZWE6IFRleHRhcmVhRmllbGQsXG4gIHBhc3N3b3JkOiBQYXNzd29yZEZpZWxkLFxuICBudW1iZXI6IE51bWJlckZpZWxkLFxuICBzZWxlY3Q6IFNlbGVjdEZpZWxkLFxuICBzd2l0Y2g6IFN3aXRjaEZpZWxkLFxuICBhdXRvQ29tcGxldGU6IEF1dG9Db21wbGV0ZUZpZWxkLFxuICBjaGVja2JveDogQ2hlY2tib3hGaWVsZCxcbiAgY2hlY2tib3hHcm91cDogQ2hlY2tib3hHcm91cEZpZWxkLFxuICBkYXRlUGlja2VyOiBEYXRlUGlja2VyRmllbGQsXG4gIHJhbmdlUGlja2VyOiBSYW5nZVBpY2tlckZpZWxkLFxuICB0aW1lUGlja2VyOiBUaW1lUGlja2VyRmllbGQsXG4gIHJhZGlvOiBSYWRpb0ZpZWxkLFxuICByYWRpb0dyb3VwOiBSYWRpb0dyb3VwRmllbGQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEeW5hbWljRmllbGQocHJvcHM6IFJKRm9ybS5JdGVtU2NoZW1hICYgUkpGb3JtLklGaWVsZFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBuYW1lLFxuICAgIHZhbHVlLFxuICAgIGZpZWxkUHJvcHMgPSB7fSxcbiAgICBvbkZpZWxkQ2hhbmdlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgQ29tcG9uZW50ID0gRmllbGRNYXBbdHlwZV07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgZmllbGRQcm9wcz17ZmllbGRQcm9wc31cbiAgICAgIG9uRmllbGRDaGFuZ2U9e29uRmllbGRDaGFuZ2V9XG4gICAgLz5cbiAgKTtcbn1cblxuLyoqXG4gKiDmianlsZXnu4Tku7blupNcbiAqIEBwYXJhbSBmaWVsZHNcbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZEZpZWxkcyA9IChmaWVsZHM6IFJKRm9ybS5FeHRlbmRGaWVsZEl0ZW1bXSk6IHZvaWQgPT4ge1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBmb3VuZEtleSA9IE9iamVjdC5rZXlzKEZpZWxkTWFwKS5maW5kKChrZXkpID0+IGtleSA9PT0gZmllbGQubmFtZSk7XG4gICAgaWYgKGZvdW5kS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYOe7hOS7tiR7ZmllbGQubmFtZX3lt7LlrZjlnKjvvIzor7fph43mlrDlrprkuYlgKTtcbiAgICB9XG4gICAgRmllbGRNYXBbZmllbGQubmFtZV0gPSBmaWVsZC5jb21wb25lbnQ7XG4gIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSAnLi91dGlscy9zdHJpbmcnO1xuaW1wb3J0IHsgc2ltcGxlQ2xvbmUgfSBmcm9tICcuL3V0aWxzL29iamVjdCc7XG5pbXBvcnQgeyBhZGRMYWJlbFN0eWxlV2lkdGgsIHJlbW92ZUxhYmVsU3R5bGVXaWR0aCB9IGZyb20gJy4vdXRpbHMvc3R5bGUnO1xuaW1wb3J0IEZvcm1Db2wgZnJvbSAnLi9Gb3JtQ29sJztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuZXhwb3J0IHsgZXh0ZW5kRmllbGRzIH0gZnJvbSAnLi9maWVsZHMnO1xuXG5leHBvcnQgeyBleHRlbmRSdWxlcyB9IGZyb20gJy4vcnVsZXMnO1xuXG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG5jb25zdCBmb3JtSUQgPSBgRk9STV8ke3JhbmRvbVN0cmluZygpfWA7XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHByb3BzOiBSSkZvcm0uRm9ybVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgZ3V0dGVyID0gMjQsXG4gICAgc3BhbiA9IDEyLFxuICAgIGxhYmVsRGlyZWN0aW9uID0gJ2hvcml6b250YWwnLFxuICAgIGxhYmVsV2lkdGggPSAxMjAsXG4gICAgdmFsaWRhdGVPbkNoYW5nZSA9IHRydWUsXG4gICAgc2NoZW1hLFxuICAgIG9uQ2hhbmdlLFxuICAgIGRhdGEgPSB7fSxcbiAgICBzdWJtaXR0ZXIsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbdmFsaWRhdGlvbiwgc2V0VmFsaWRhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8g5re75Yqg5qC35byPXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWRkTGFiZWxTdHlsZVdpZHRoKGxhYmVsV2lkdGgsIGxhYmVsRGlyZWN0aW9uLCBmb3JtSUQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVMYWJlbFN0eWxlV2lkdGgoZm9ybUlEKTtcbiAgICB9O1xuICB9LCBbbGFiZWxEaXJlY3Rpb24sIGxhYmVsV2lkdGhdKTtcblxuICAvLyDliJ3lp4vljJbmlbDmja5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBzY2hlbWEuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5uYW1lICYmIGl0ZW0ucnVsZXMpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgcnVsZXM6IGl0ZW0ucnVsZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9ybURhdGFbaXRlbS5uYW1lXSA9IGZvcm1EYXRhW2l0ZW0ubmFtZV0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRWYWxpZGF0aW9uKHJlc3VsdCk7XG4gIH0sIFtzY2hlbWFdKTtcblxuICAvLyDojrflj5Z2YWxpZGF0b3JcbiAgY29uc3QgZ2V0VmFsaWRhdGVCeU5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbkl0ZW0gPSB2YWxpZGF0aW9uLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB2YWxpZGF0aW9uSXRlbSA/IHZhbGlkYXRpb25JdGVtLnN0YXRlIDogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IHZhbGlkYXRpb25JdGVtPy5tZXNzYWdlIHx8ICcnLFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOajgOafpeaYr+S4jeaYr+WFqOmDqOmAmui/h+ajgOmqjFxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBjb25zdCBpc0FsbFZhbGlkYXRlZCA9ICgpOiBib29sZWFuID0+IHtcbiAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB2YWxpZGF0ZUZpZWxkKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgY29uc3Qgbm90VmFsaWRhdGVkSXRlbUluZGV4ID0gT2JqZWN0LmtleXModmFsaWRhdGlvbikuZmluZEluZGV4KFxuICAgICAgKGtleSkgPT4gdmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZCA9PT0gZmFsc2UsXG4gICAgKTtcbiAgICByZXR1cm4gbm90VmFsaWRhdGVkSXRlbUluZGV4ID09PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICog5qCh6aqM5Y2V5LiqZmllbGRcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb25JdGVtID0gdmFsaWRhdGlvbi5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuICAgIGlmICh2YWxpZGF0aW9uSXRlbSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdGUobmFtZSwgdmFsdWUsIHZhbGlkYXRpb25JdGVtLnJ1bGVzKTtcbiAgICAgIHZhbGlkYXRpb25JdGVtLm1lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgIHZhbGlkYXRpb25JdGVtLnN0YXRlID0gcmVzdWx0LnN0YXRlO1xuXG4gICAgICBjb25zb2xlLmxvZyhgdmFsaWRhdGVkJHtuYW1lfWAsIHJlc3VsdCk7XG4gICAgICBzZXRWYWxpZGF0aW9uKFsuLi52YWxpZGF0aW9uXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtIGZpZWxkIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAqL1xuICBjb25zdCBvbkZpZWxkQ2hhbmdlID0gKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICh2YWxpZGF0ZU9uQ2hhbmdlKSB7XG4gICAgICB2YWxpZGF0ZUZpZWxkKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZTonLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIGZvcm1EYXRhW25hbWVdID0gdmFsdWU7XG4gICAgc2V0Rm9ybURhdGEoc2ltcGxlQ2xvbmUoZm9ybURhdGEpKTtcblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldCB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSBvbGREYXRhXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBnZXRWYWx1ZSA9IChuYW1lPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhW25hbWVdIHx8IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGxhYmVsRGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlPyk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgZSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIOaPkOS6pOWJjeagoemqjFxuICAgIGlmICghaXNBbGxWYWxpZGF0ZWQoKSkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKCdvbiBzdWJtaXQnLCBmb3JtRGF0YSk7XG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiDplK7nm5jmjInkuItFbnRlcu+8jOWPquimgeS4jeaYr3RleHRhcmVh57G75Z6L77yM5o+Q5LqkXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBvbktleVByZXNzID1cbiAgICAodHlwZTogc3RyaW5nKSA9PlxuICAgIChlKTogdm9pZCA9PiB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3RleHRhcmVhJyAmJiBlLmNoYXJDb2RlID09PSAxMykge1xuICAgICAgICBvbkZvcm1TdWJtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Jlc2V0Jyk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBuZXdWYWx1ZVtrZXldID0gbnVsbDtcbiAgICB9KTtcbiAgICBzZXRGb3JtRGF0YShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coJ2Zvcm1EYXRhOiAnLCBmb3JtRGF0YSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gaWQ9e2Zvcm1JRH0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XG4gICAgICB7c2NoZW1hLm1hcCgocm93LCBpZHgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93S2V5ID0gYHJvd18ke2lkeH1gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSb3cga2V5PXtyb3dLZXl9IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAgICAgIHtyb3cubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtQ29sXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWUgfHwgcmFuZG9tU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICBzcGFuPXtpdGVtLnNwYW4gfHwgc3Bhbn1cbiAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgIG9uRmllbGRDaGFuZ2U9e29uRmllbGRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzcyhpdGVtLnR5cGUpfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtnZXRWYWxpZGF0ZUJ5TmFtZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAge0pTT04uc3RyaW5naWZ5KHN1Ym1pdHRlcil9XG5cbiAgICAgIHtzdWJtaXR0ZXIgJiYgKFxuICAgICAgICA8Rm9vdGVyIHsuLi5zdWJtaXR0ZXJ9IG9uUmVzZXQ9e29uUmVzZXR9IG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9IC8+XG4gICAgICApfVxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiIsImltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnO1xuXG4vLyDpu5jorqTnmoTop4TliJlcbmNvbnN0IGRlZmF1bHRSdWxlczogUkpGb3JtLlJ1bGVJdGVtW10gPSBbXG4gIHtcbiAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IG5vdEVtcHR5VmFsdWUodmFsdWUpLFxuICAgIG1lc3NhZ2U6ICflv4XloasnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbkxlbmd0aCcsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg/OiBzdHJpbmcpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWwj+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4TGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aD86IHN0cmluZykgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWkp+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogc3RyaW5nKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puW/hemhu+S4uiR7bGVuZ3RofWAsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UnVsZXM7XG4iLCJpbXBvcnQgZGVmYXVsdFJ1bGVzIGZyb20gJy4vZGVmYXVsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuXG4vKipcbiAqIOaJqeWxleeahOaWueazlVxuICogQHBhcmFtIHJ1bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRSdWxlcyA9IChydWxlczogUkpGb3JtLlJ1bGVJdGVtW10pOiB2b2lkID0+IHtcbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZGVmYXVsdFJ1bGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gcnVsZS5uYW1lID09PSBpdGVtLm5hbWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2Fybihg6KeE5YiZJHtydWxlLm5hbWV95bey5a2Y5ZyoLCDmianlsZXop4TliJnkvJropobnm5bpu5jorqTop4TliJlgKTtcbiAgICAgIGRlZmF1bHRSdWxlc1tpbmRleF0gPSBydWxlO1xuICAgIH1cbiAgICBkZWZhdWx0UnVsZXMucHVzaChydWxlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIOagueaNrmtleeafpeaJvlxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldFJ1bGVJdGVtQnlOYW1lID0gKG5hbWU6IHN0cmluZyk6IFJKRm9ybS5SdWxlSXRlbSB8IG51bGwgPT4ge1xuICBjb25zdCBmb3VuZFJ1bGUgPSBkZWZhdWx0UnVsZXMuZmluZCgocnVsZSkgPT4gcnVsZS5uYW1lID09PSBuYW1lKTtcbiAgcmV0dXJuIGZvdW5kUnVsZTtcbn07XG5cbi8qKlxuICog5qCh6aqMXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBydWxlc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxuICBrZXk6c3RyaW5nLFxuICB2YWx1ZTogYW55LFxuICBydWxlczogUkpGb3JtLlJ1bGVJdGVtW10sXG4pOiBSSkZvcm0uVmFsaWRhdGVkUmVzdWx0ID0+IHtcbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBzdGF0ZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfTtcblxuICBydWxlcy5zb21lKChydWxlKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCAuLi5ydWxlSXRlbSB9ID0gcnVsZTtcbiAgICBjb25zdCBydWxlTmFtZSA9IE9iamVjdC5rZXlzKHJ1bGVJdGVtKT8uWzBdO1xuICAgIGNvbnN0IHJ1bGVWYWx1ZSA9IHJ1bGVJdGVtPy5bcnVsZU5hbWVdO1xuICAgIGlmICghcnVsZU5hbWUpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIOWQpuWImemcgOimgeWcqOeOsOacieeahOinhOWImeWOu+afpeaJvlxuICAgIGNvbnN0IGRlZmF1bHRSdWxlSXRlbSA9IGdldFJ1bGVJdGVtQnlOYW1lKHJ1bGVOYW1lKTtcbiAgICBpZiAoIWRlZmF1bHRSdWxlSXRlbSkge1xuICAgICAgY29uc29sZS53YXJuKGDmnKrmib7liLAke3J1bGVOYW1lfeeahOagoemqjOinhOWImWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG1lc3NhZ2VcbiAgICBsZXQgbXNnID0gbWVzc2FnZSB8fCBkZWZhdWx0UnVsZUl0ZW0ubWVzc2FnZTtcbiAgICBtc2cgPSB0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nID8gbXNnKHJ1bGVWYWx1ZSkgOiBtc2c7XG5cbiAgICAvLyDoh6rlrprkuYnnmoR2YWxpZGF0b3JcbiAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgc3RhdGUgPSBydWxlVmFsdWUodmFsdWUpO1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUgPyAnJyA6IG1zZyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gIXN0YXRlO1xuICAgIH1cblxuICAgIC8vIOWmguaenOaYr2Jvb2xlYW7nmoTml7blgJnvvIx0cnVl5YC86ZyA6KaB5qCh6aqMXG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBydWxlVmFsdWUgPT09ICdib29sZWFuJyAmJiBydWxlVmFsdWUpXG4gICAgICB8fCBbJ3N0cmluZycsICdudW1iZXInXS5pbmRleE9mKHR5cGVvZiBydWxlVmFsdWUpICE9PSAtMVxuICAgICkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBkZWZhdWx0UnVsZUl0ZW0udmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge307XG5cbi8qKlxuICog5bCG5YC86L2s5o2i5Li65pe26Ze05oizXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREYXRlVGltZVN0YW1wID0gKHZhbHVlOiBhbnkpOiBudW1iZXIgPT4ge1xuICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiBtb21lbnQodmFsdWUpLnZhbHVlT2YoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGF0ZU1vbWVudCA9ICh2YWx1ZTogYW55KTogUkpGb3JtLkRhdGVUeXBlID0+IHtcbiAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gbW9tZW50KHZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuaXtumXtOiMg+WbtOWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0UmFuZ2VUaW1lU3RhbXAgPSAodmFsdWU6IGFueVtdKTogYW55W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbbnVsbCwgbnVsbF07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaWR4KSA9PiB7XG4gICAgICByZXN1bHRbaWR4XSA9IGdldERhdGVUaW1lU3RhbXAodmFsKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDlsIbml7bpl7TmiLPmlbDnu4TovazmjaLkuLptb21lbnTmlbDnu4RcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmdlTW9tZW50ID0gKFxuICB2YWx1ZTogW1JKRm9ybS5EYXRlVHlwZSwgUkpGb3JtLkRhdGVUeXBlXSB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0+IHtcbiAgY29uc3QgcmVzdWx0OiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0gW251bGwsIG51bGxdO1xuICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgcmVzdWx0W2lkeF0gPSB2YWwgPyBtb21lbnQodmFsKSA6IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBcnJheU9iamVjdDxUPihhcnJheTogVFtdID0gW10sIGtleTpzdHJpbmcsIHZhbHVlOiBhbnkpOlQge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICByZXR1cm4gZm91bmQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHNpbXBsZUNsb25lID0gKG9iajoge1tuYW1lOnN0cmluZ106YW55fSkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSAobGVuZ3RoID0gOCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9ICcxMjM0NTY3ODkwQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KCcnKTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHN0cmluZ0FycmF5Lmxlbmd0aCk7XG4gICAgcmVzdWx0LnB1c2goc3RyaW5nQXJyYXlbaW5kZXhdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5VmFsdWUgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICAodmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIC8vIOmdnuepulxuICB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkgLy8g5pWw57uE5Lmf6Z2e56m6XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiIsIlxuZXhwb3J0IGNvbnN0IHJlbW92ZUxhYmVsU3R5bGVXaWR0aCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBgZm9ybS1sYWJlbC13aWR0aC0ke2lkfWA7XG4gIGNvbnN0IERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZU5hbWUpO1xuICBpZiAoRE9NKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKERPTSk7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGlkKTtcblxuICBpZiAobGFiZWxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0IFNUWUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWU7XG4gICAgbGV0IHN0eWxlcyA9IGAjJHtpZH0gLmFudC1mb3JtLWl0ZW0ge2Rpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlOyBmbGV4LWZsb3c6IHJvdzt9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1jb250cm9sIHtmbGV4LWdyb3c6IDF9YDtcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChTVFlMRSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9