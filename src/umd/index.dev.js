(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ant-design/icons"), require("antd"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@ant-design/icons", "antd", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@ant-design/icons"), require("antd"), require("react")) : factory(root["@ant-design/icons"], root["antd"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__ant_design_icons__, __WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./src/Form/Footer.tsx":
/*!*****************************!*\
  !*** ./src/Form/Footer.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/objectWithoutProperties'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);




function Footer(props) {
  var _buttonProps$reset, _buttonProps$submit;

  var buttonTexts = props.buttonTexts,
      _props$buttonProps = props.buttonProps,
      buttonProps = _props$buttonProps === void 0 ? {} : _props$buttonProps,
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
      type: (buttonProps === null || buttonProps === void 0 ? void 0 : (_buttonProps$reset = buttonProps.reset) === null || _buttonProps$reset === void 0 ? void 0 : _buttonProps$reset.type) || 'default',
      cb: onReset,
      text: reset
    },
    submit: {
      type: (buttonProps === null || buttonProps === void 0 ? void 0 : (_buttonProps$submit = buttonProps.submit) === null || _buttonProps$submit === void 0 ? void 0 : _buttonProps$submit.type) || 'primary',
      cb: onSubmit,
      text: submit
    }
  };
  var defaultDom = [];
  Object.keys(buttonTexts).forEach(function (key) {
    var _ref2 = buttonProps[key] || {},
        type = _ref2.type,
        restProps = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/objectWithoutProperties'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ref2, ["type"]);

    var item = buttonTexts[key];

    if (item) {
      defaultDom.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        type: config[key].type,
        key: key,
        onClick: config[key].cb
      }, restProps), config[key].text));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: padding,
      textAlign: align
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/objectWithoutProperties'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields */ "./src/Form/fields/index.tsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/object'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






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
      type = item.type,
      rest = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/objectWithoutProperties'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item, ["label", "type"]);

  var lableText = typeof label === 'function' ? label() : label;
  var cols = isVertical ? {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  } : {};

  var isRequired = function isRequired() {
    var itemRules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return !!!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/object'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(itemRules, 'required', true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: span,
    onKeyPress: onKeyPress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    label: lableText,
    key: item.name,
    required: isRequired(item.rules),
    validateStatus: validate && !validate.state ? 'error' : '',
    help: validate === null || validate === void 0 ? void 0 : validate.message
  }, cols), type === 'render' && (typeof rest.render === 'function' ? rest.render() : rest.render), type !== 'render' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_3__["default"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, rest, {
    type: type,
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function InputField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  if (!(fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.filterOption)) {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
    onChange: onChangeThis
  }));
}

/***/ }),

/***/ "./src/Form/fields/Cascader/index.tsx":
/*!********************************************!*\
  !*** ./src/Form/fields/Cascader/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputField; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Cascader"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
    onChange: onChangeThis,
    value: value
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"].Group, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function DatePickerField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = !(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arguments.length <= 0 ? undefined : arguments[0]); // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
    onChange: onChangeThis,
    value: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function DatePickerField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = !(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arguments.length <= 0 ? undefined : arguments[0]); // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"].RangePicker, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
    onChange: onChangeThis,
    value: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Search, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Switch"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function TimePickerField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps;

  var onChangeThis = function onChangeThis() {
    var newValue = !(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arguments.length <= 0 ? undefined : arguments[0]); // 组件原来的onChange事件

    if (fieldProps.onChange) {
      fieldProps.onChange.apply(fieldProps, arguments);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["TimePicker"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
    onChange: onChangeThis,
    value: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/date'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)
  }));
}

/***/ }),

/***/ "./src/Form/fields/Upload/PicPreview.tsx":
/*!***********************************************!*\
  !*** ./src/Form/fields/Upload/PicPreview.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PicPreviewer; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './PicPreview.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"];

/**
 * 图片预览
 */
function PicPreviewer(_ref) {
  var _ref$showList = _ref.showList,
      showList = _ref$showList === void 0 ? true : _ref$showList,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? [] : _ref$url,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? '' : _ref$current,
      onHide = _ref.onHide;
  var images = [];

  if (url) {
    images = typeof url === 'string' ? [url] : url;
  }

  images = images.filter(function (item) {
    return item;
  });

  var _useState = useState(false),
      _useState2 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(current),
      _useState4 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState3, 2),
      src = _useState4[0],
      setSrc = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState5, 2),
      deg = _useState6[0],
      setDeg = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState9, 2),
      isInit = _useState10[0],
      setIsInit = _useState10[1];

  var handleCancel = function handleCancel() {
    if (onHide) onHide();
    setVisible(false);
  };

  var handleShow = function handleShow(targetSrc) {
    setVisible(true);
    setLoading(true);
    setSrc(targetSrc);
  };

  var prev = function prev() {
    setLoading(true);
    var idx = images.indexOf(src);
    idx -= 1;
    idx = idx < 0 ? images.length - 1 : idx;
    handleShow(images[idx]); // setDeg(0)
  };

  var next = function next() {
    setLoading(true);
    var idx = images.indexOf(src);
    idx += 1;
    idx = idx >= images.length ? 0 : idx;
    handleShow(images[idx]); // setDeg(0)
  };

  var rotation = function rotation() {
    setDeg(deg + 1);
  };

  var rotationBack = function rotationBack() {
    setDeg(deg - 1);
  };

  var onLoad = function onLoad() {
    setLoading(false);
  };

  if (!showList && !isInit) {
    handleShow(current);
    setIsInit(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, showList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-row"
  }, images.map(function (item, idx) {
    var key = "".concat(item, "_").concat(idx);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      role: "link",
      tabIndex: idx,
      key: key,
      className: "react-conf-form-pic-box",
      onClick: function onClick() {
        return handleShow(item);
      },
      onKeyDown: function onKeyDown() {
        return handleShow(item);
      },
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
      src: item,
      alt: ""
    }));
  })), visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-viewer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-spin react-conf-form-pic-white-spin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: loading,
    tip: "loading...",
    size: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-container",
    onClick: handleCancel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-icon",
    onClick: handleCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], null)), images.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-icon",
    onClick: prev
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LeftOutlined"], null)), images.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-icon",
    onClick: next
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RightOutlined"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-icon",
    onClick: rotation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RedoOutlined"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "react-conf-form-pic-icon",
    onClick: rotationBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UndoOutlined"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    alt: "previmg",
    src: src,
    onLoad: onLoad,
    style: {
      transform: "translate(-50%, -50%) rotate(".concat(deg * 90, "deg)"),
      opacity: loading ? 0 : 1
    },
    className: "react-conf-form-pic-img-container"
  })));
}

/***/ }),

/***/ "./src/Form/fields/Upload/index.tsx":
/*!******************************************!*\
  !*** ./src/Form/fields/Upload/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadField; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/regenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/asyncToGenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './hepler'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PicPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PicPreview */ "./src/Form/fields/Upload/PicPreview.tsx");









var useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState,
    useEffect = react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect;
function UploadField(props) {
  var onFieldChange = props.onFieldChange,
      name = props.name,
      value = props.value,
      fieldProps = props.fieldProps,
      customProps = props.customProps;
  var _customProps$maxSize = customProps.maxSize,
      maxSize = _customProps$maxSize === void 0 ? 2 : _customProps$maxSize,
      _customProps$maxLengt = customProps.maxLength,
      maxLength = _customProps$maxLengt === void 0 ? 1 : _customProps$maxLengt,
      _customProps$editMode = customProps.editMode,
      editMode = _customProps$editMode === void 0 ? false : _customProps$editMode,
      _customProps$disabled = customProps.disabled,
      disabled = _customProps$disabled === void 0 ? false : _customProps$disabled;

  var _useState = useState([]),
      _useState2 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = useState({
    visible: false,
    url: ''
  }),
      _useState4 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState5, 2),
      imagesUrls = _useState6[0],
      setImagesUrls = _useState6[1];

  useEffect(function () {
    console.log('value', value);

    if (Array.isArray(value)) {
      var defaultFileList = [];
      value.forEach(function (item) {
        if (typeof item === 'string') {
          defaultFileList.push(!(function webpackMissingModule() { var e = new Error("Cannot find module './hepler'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item));
        } else {
          defaultFileList.push(item);
        }
      });
      setFileList(defaultFileList);
    }
  }, [value]);
  /**
   * onChange变化
   * @param files
   */

  var onChangeThis = function onChangeThis(files) {
    var fileList = files.fileList; // 转存response.url 到url

    fileList.forEach(function (file) {
      var _file$response;

      if (!file.url && ((_file$response = file.response) === null || _file$response === void 0 ? void 0 : _file$response.url)) {
        var _file$response2;

        file.url = (_file$response2 = file.response) === null || _file$response2 === void 0 ? void 0 : _file$response2.url;
      }
    });

    if (maxLength === 1 && editMode) {
      fileList.splice(0, fileList.length - 1);
    } else {
      setFileList(fileList);
    } // 组件原来的onChange事件


    if (fieldProps.onChange) {
      fieldProps.onChange(files);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, fileList, value);
    }
  };
  /**
   * 上传进度模拟<假进度>
   */


  var processID = 0;

  var process = function process(onProgress) {
    var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var nextPercent = percent + Math.random() * 10;
    nextPercent = nextPercent > 99 ? 99 : nextPercent;
    onProgress({
      percent: nextPercent
    });
    processID = setTimeout(function () {
      return process(onProgress, nextPercent);
    }, 300);
  };
  /**
   * 自定义上传方法
   * @param args
   * @returns
   */


  var customRequest = /*#__PURE__*/function () {
    var _ref = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/asyncToGenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/regenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).mark(function _callee(args) {
      var file, onSuccess, onError, onProgress, fileUrl;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/regenerator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (fieldProps.customRequest) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              file = args.file, onSuccess = args.onSuccess, onError = args.onError, onProgress = args.onProgress;
              process(onProgress); // onProgress();

              _context.prev = 4;
              _context.next = 7;
              return fieldProps.customRequest(file);

            case 7:
              fileUrl = _context.sent;
              onSuccess({
                url: fileUrl
              });
              clearTimeout(processID);
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              clearTimeout(processID);
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('上传失败', _context.t0);
              onError();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12]]);
    }));

    return function customRequest(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * 上传前的校
   * @param file
   * @returns
   */


  var beforeUpload = function beforeUpload(file) {
    var isFileSizeExccessLimited = file.size / 1024 / 1024 > maxSize; // const fileType = file.type;

    if (isFileSizeExccessLimited) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('仅支持：JPEG/PNG/SVG/BVP 格式 2M以内');
      return antd__WEBPACK_IMPORTED_MODULE_2__["Upload"].LIST_IGNORE;
    }

    return true;
  };

  var uploadButtonText = customProps.uploadButtonText;
  var uploadButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 8
    }
  }, uploadButtonText));

  var handlePreview = function handlePreview(file) {
    setPreview({
      visible: true,
      url: file.url
    });
    var urls = fileList.filter(function (item) {
      return item.status === 'done' && item.url;
    }).map(function (item) {
      return item.url;
    });
    setImagesUrls(urls);
  };

  var handlePreviewCancel = function handlePreviewCancel() {
    setPreview({
      visible: false,
      url: ''
    });
  };

  var showButton = false; // 如果文件数小于限制

  if (fileList.length < maxLength) {
    showButton = true;
  } // 如果文件数等于1并且是编辑模式


  if (!showButton) {
    showButton = fileList.length === 1 && editMode;
  }

  if (disabled) {
    showButton = false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, fieldProps, {
    customRequest: customRequest,
    beforeUpload: beforeUpload,
    onChange: onChangeThis,
    onPreview: handlePreview,
    fileList: fileList
  }), showButton && uploadButton), preview.visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PicPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: imagesUrls,
    showList: false,
    onHide: handlePreviewCancel,
    current: preview.url
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
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Upload */ "./src/Form/fields/Upload/index.tsx");
/* harmony import */ var _Cascader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Cascader */ "./src/Form/fields/Cascader/index.tsx");

















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
  radioGroup: _RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"],
  upload: _Upload__WEBPACK_IMPORTED_MODULE_16__["default"],
  cascader: _Cascader__WEBPACK_IMPORTED_MODULE_17__["default"]
};
function DynamicField(props) {
  var type = props.type,
      name = props.name,
      value = props.value,
      _props$fieldProps = props.fieldProps,
      fieldProps = _props$fieldProps === void 0 ? {} : _props$fieldProps,
      customProps = props.customProps,
      onFieldChange = props.onFieldChange;
  var Component = FieldMap[type];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
    name: name,
    value: value,
    fieldProps: fieldProps,
    customProps: customProps,
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
/*! exports provided: extendFields, extendRules, generateFileObjectByUrl, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/toConsumableArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/object'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _FormCol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormCol */ "./src/Form/FormCol.tsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module './rules'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/Form/Footer.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields */ "./src/Form/fields/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendFields", function() { return _fields__WEBPACK_IMPORTED_MODULE_5__["extendFields"]; });

throw new Error("Cannot find module './rules'");
!(function webpackMissingModule() { var e = new Error("Cannot find module './fields/Upload/hepler'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module './fields/Upload/hepler'");














var useEffect = react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect,
    useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState,
    useImperativeHandle = react__WEBPACK_IMPORTED_MODULE_1___default.a.useImperativeHandle,
    forwardRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef;
var formID = "FORM_".concat(!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());

function JForm(props, ref) {
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
      onSubmit = props.onSubmit,
      onReset = props.onReset,
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      submitter = props.submitter,
      _props$spinning = props.spinning,
      spinning = _props$spinning === void 0 ? false : _props$spinning;

  var _useState = useState(data),
      _useState2 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/slicedToArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_useState3, 2),
      validation = _useState4[0],
      setValidation = _useState4[1]; // 添加样式


  useEffect(function () {
    !(function webpackMissingModule() { var e = new Error("Cannot find module './utils/style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(labelWidth, labelDirection, formID);
    return function () {
      !(function webpackMissingModule() { var e = new Error("Cannot find module './utils/style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(formID);
    };
  }, [labelDirection, labelWidth]); // data变化

  useEffect(function () {
    setFormData(data);
  }, [data]); // 初始化数据

  useEffect(function () {
    var result = [];
    schema.forEach(function (row) {
      row.forEach(function (item) {
        if (item.name) {
          result.push({
            state: true,
            message: '',
            name: item.name,
            type: item.type,
            rules: item.rules
          });
          formData[item.name] = formData[item.name] || undefined;
        }
      });
    }); // console.log('init:', result, formData);

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
      var validateItem = validation.find(function (v) {
        return v.name === key;
      });
      validateField(key, formData[key], validateItem === null || validateItem === void 0 ? void 0 : validateItem.type);
    });
    var notValidatedItemIndex = Object.keys(validation).findIndex(function (key) {
      return validation[key].state === false;
    });
    return notValidatedItemIndex === -1;
  };
  /**
   * 校验单个field
   * @param name
   * @param value
   */


  var validateField = function validateField(name, value, type) {
    var validationItem = validation.find(function (item) {
      return item.name === name;
    });

    if (validationItem && validationItem.rules) {
      var validatedValue = value; // 上传图片需要过滤掉status不等于"done"的

      if (type === 'upload') {
        validatedValue = (value || []).filter(function (item) {
          return item.status === 'done';
        });
        console.log('upload validate', value, validatedValue);
      }

      var result = !(function webpackMissingModule() { var e = new Error("Cannot find module './rules'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(name, validatedValue, validationItem.rules);
      validationItem.message = result.message;
      validationItem.state = result.state;
      console.log("validated ".concat(name), result);
      setValidation(!(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/toConsumableArray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(validation));
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
    setFormData(!(function webpackMissingModule() { var e = new Error("Cannot find module './utils/object'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(formData));

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

  var isVertical = labelDirection === 'vertical'; // if(ref){

  useImperativeHandle(ref, function () {
    return {
      callSubmit: function callSubmit() {
        return onFormSubmit();
      },
      callValidate: function callValidate() {
        return isAllValidated();
      },
      getData: function getData() {
        return formData;
      }
    };
  }); // }

  var onFormSubmit = function onFormSubmit(e) {
    e && e.stopPropagation(); // 提交前校验

    if (!isAllValidated()) return false;
    console.log('on submit', formData);
    onSubmit && onSubmit(formData);
    return false;
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
  }; // const onFormReset = () => {
  //   console.log('reset');
  //   const newValue = {};
  //   Object.keys(formData).forEach((key) => {
  //     newValue[key] = null;
  //   });
  //   setFormData(newValue);
  //   onReset && onReset();
  // };
  // console.log('formData: ', formData);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: spinning
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    id: formID,
    onSubmit: onFormSubmit
  }, schema.map(function (row, idx) {
    var rowKey = "row_".concat(idx);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      key: rowKey,
      gutter: gutter
    }, row.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormCol__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: item.name || !(function webpackMissingModule() { var e = new Error("Cannot find module './utils/string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
        item: item,
        span: item.span || span,
        isVertical: isVertical,
        value: getValue(item.name),
        onFieldChange: onFieldChange,
        onKeyPress: onKeyPress(item.type),
        validate: getValidateByName(item.name)
      });
    }));
  }), submitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], !(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/extends'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}, submitter, {
    onReset: onReset,
    onSubmit: onFormSubmit
  }))));
}

var Form = forwardRef(JForm);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__ant_design_icons__;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL0Zvcm1Db2wudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9BdXRvQ29tcGxldGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9DYXNjYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0NoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQ2hlY2tib3hHcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0RhdGVQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9JbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL051bWJlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1Bhc3N3b3JkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUmFkaW8vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9SYWRpb0dyb3VwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUmFuZ2VQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9TZWFyY2gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9TZWxlY3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9Td2l0Y2gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9UZXh0YXJlYS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1RpbWVQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9VcGxvYWQvUGljUHJldmlldy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1VwbG9hZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImJ1dHRvblRleHRzIiwiYnV0dG9uUHJvcHMiLCJyZW5kZXIiLCJhbGlnbiIsImRpcmVjdGlvbiIsInBhZGRpbmciLCJvblJlc2V0Iiwib25TdWJtaXQiLCJyZXNldCIsInN1Ym1pdCIsImNvbmZpZyIsInR5cGUiLCJjYiIsInRleHQiLCJkZWZhdWx0RG9tIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJyZXN0UHJvcHMiLCJpdGVtIiwicHVzaCIsInRleHRBbGlnbiIsIkZvcm1Db2wiLCJjb2xQcm9wcyIsInNwYW4iLCJpc1ZlcnRpY2FsIiwidmFsdWUiLCJvbkZpZWxkQ2hhbmdlIiwib25LZXlQcmVzcyIsInZhbGlkYXRlIiwibGFiZWwiLCJyZXN0IiwibGFibGVUZXh0IiwiY29scyIsImxhYmVsQ29sIiwid3JhcHBlckNvbCIsImlzUmVxdWlyZWQiLCJpdGVtUnVsZXMiLCJmaW5kQXJyYXlPYmplY3QiLCJuYW1lIiwicnVsZXMiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJJbnB1dEZpZWxkIiwiZmllbGRQcm9wcyIsImZpbHRlck9wdGlvbiIsImlucHV0VmFsdWUiLCJvcHRpb24iLCJpbmRleE9mIiwib25DaGFuZ2VUaGlzIiwibmV3VmFsdWUiLCJvbkNoYW5nZSIsImFyZ3MiLCJ0YXJnZXQiLCJjaGVja2VkIiwiRGF0ZVBpY2tlckZpZWxkIiwiZ2V0RGF0ZVRpbWVTdGFtcCIsImdldERhdGVNb21lbnQiLCJnZXRSYW5nZVRpbWVTdGFtcCIsImdldFJhbmdlTW9tZW50IiwiU2VhcmNoIiwiSW5wdXQiLCJTZWFyY2hGaWVsZCIsIlRpbWVQaWNrZXJGaWVsZCIsInVzZVN0YXRlIiwiUmVhY3QiLCJQaWNQcmV2aWV3ZXIiLCJzaG93TGlzdCIsInVybCIsInN0eWxlIiwiY3VycmVudCIsIm9uSGlkZSIsImltYWdlcyIsImZpbHRlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic3JjIiwic2V0U3JjIiwiZGVnIiwic2V0RGVnIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0luaXQiLCJzZXRJc0luaXQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVTaG93IiwidGFyZ2V0U3JjIiwicHJldiIsImlkeCIsImxlbmd0aCIsIm5leHQiLCJyb3RhdGlvbiIsInJvdGF0aW9uQmFjayIsIm9uTG9hZCIsIm1hcCIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ1c2VFZmZlY3QiLCJVcGxvYWRGaWVsZCIsImN1c3RvbVByb3BzIiwibWF4U2l6ZSIsIm1heExlbmd0aCIsImVkaXRNb2RlIiwiZGlzYWJsZWQiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwicHJldmlldyIsInNldFByZXZpZXciLCJpbWFnZXNVcmxzIiwic2V0SW1hZ2VzVXJscyIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImlzQXJyYXkiLCJkZWZhdWx0RmlsZUxpc3QiLCJnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCIsImZpbGVzIiwiZmlsZSIsInJlc3BvbnNlIiwic3BsaWNlIiwicHJvY2Vzc0lEIiwicHJvY2VzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwibmV4dFBlcmNlbnQiLCJNYXRoIiwicmFuZG9tIiwic2V0VGltZW91dCIsImN1c3RvbVJlcXVlc3QiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZmlsZVVybCIsImNsZWFyVGltZW91dCIsImVycm9yIiwiYmVmb3JlVXBsb2FkIiwiaXNGaWxlU2l6ZUV4Y2Nlc3NMaW1pdGVkIiwic2l6ZSIsIlVwbG9hZCIsIkxJU1RfSUdOT1JFIiwidXBsb2FkQnV0dG9uVGV4dCIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsImhhbmRsZVByZXZpZXciLCJ1cmxzIiwic3RhdHVzIiwiaGFuZGxlUHJldmlld0NhbmNlbCIsInNob3dCdXR0b24iLCJGaWVsZE1hcCIsImlucHV0Iiwic2VhcmNoIiwidGV4dGFyZWEiLCJUZXh0YXJlYUZpZWxkIiwicGFzc3dvcmQiLCJQYXNzd29yZEZpZWxkIiwibnVtYmVyIiwiTnVtYmVyRmllbGQiLCJzZWxlY3QiLCJTZWxlY3RGaWVsZCIsInN3aXRjaCIsIlN3aXRjaEZpZWxkIiwiYXV0b0NvbXBsZXRlIiwiQXV0b0NvbXBsZXRlRmllbGQiLCJjaGVja2JveCIsIkNoZWNrYm94RmllbGQiLCJjaGVja2JveEdyb3VwIiwiQ2hlY2tib3hHcm91cEZpZWxkIiwiZGF0ZVBpY2tlciIsInJhbmdlUGlja2VyIiwiUmFuZ2VQaWNrZXJGaWVsZCIsInRpbWVQaWNrZXIiLCJyYWRpbyIsIlJhZGlvRmllbGQiLCJyYWRpb0dyb3VwIiwiUmFkaW9Hcm91cEZpZWxkIiwidXBsb2FkIiwiY2FzY2FkZXIiLCJDYXNjYWRlckZpZWxkIiwiRHluYW1pY0ZpZWxkIiwiQ29tcG9uZW50IiwiZXh0ZW5kRmllbGRzIiwiZmllbGRzIiwiZmllbGQiLCJmb3VuZEtleSIsImZpbmQiLCJFcnJvciIsImNvbXBvbmVudCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJmb3J3YXJkUmVmIiwiZm9ybUlEIiwicmFuZG9tU3RyaW5nIiwiSkZvcm0iLCJyZWYiLCJndXR0ZXIiLCJsYWJlbERpcmVjdGlvbiIsImxhYmVsV2lkdGgiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwic2NoZW1hIiwiZGF0YSIsInN1Ym1pdHRlciIsInNwaW5uaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInZhbGlkYXRpb24iLCJzZXRWYWxpZGF0aW9uIiwiYWRkTGFiZWxTdHlsZVdpZHRoIiwicmVtb3ZlTGFiZWxTdHlsZVdpZHRoIiwicmVzdWx0Iiwicm93IiwidW5kZWZpbmVkIiwiZ2V0VmFsaWRhdGVCeU5hbWUiLCJ2YWxpZGF0aW9uSXRlbSIsImlzQWxsVmFsaWRhdGVkIiwidmFsaWRhdGVJdGVtIiwidiIsInZhbGlkYXRlRmllbGQiLCJub3RWYWxpZGF0ZWRJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJ2YWxpZGF0ZWRWYWx1ZSIsIm9sZFZhbHVlIiwic2ltcGxlQ2xvbmUiLCJnZXRWYWx1ZSIsImNhbGxTdWJtaXQiLCJvbkZvcm1TdWJtaXQiLCJjYWxsVmFsaWRhdGUiLCJnZXREYXRhIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoYXJDb2RlIiwicm93S2V5IiwiRm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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QUF5QyxZQUFRLEVBQUV5TjtBQUFuRCxLQXRCSixDQURGLENBREY7QUE2QkQ7O0FBR00sSUFBTU8sSUFBSSxHQUFHMUMsVUFBVSxDQUFDRyxLQUFELENBQXZCLEM7Ozs7Ozs7Ozs7O0FDcE9QLCtEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6ImluZGV4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbnQtZGVzaWduL2ljb25zXCIsIFwiYW50ZFwiLCBcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJAYW50LWRlc2lnbi9pY29uc1wiXSwgcm9vdFtcImFudGRcIl0sIHJvb3RbXCJyZWFjdFwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0Zvcm0vaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgU3BhY2UgfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIElwcm9wcyB7XG4gIG9uUmVzZXQ6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAoKSA9PiB2b2lkO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzOiBSSkZvcm0uU3VibWl0dGVyICYgSXByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgYnV0dG9uVGV4dHMsXG4gICAgYnV0dG9uUHJvcHMgPSB7fSxcbiAgICByZW5kZXIsXG4gICAgYWxpZ24gPSAnY2VudGVyJyxcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcsXG4gICAgcGFkZGluZyA9ICc0MnB4IDAgMjRweCAwJyxcbiAgICBvblJlc2V0LFxuICAgIG9uU3VibWl0LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVzZXQsIHN1Ym1pdCB9ID0gYnV0dG9uVGV4dHMgfHwge307XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICByZXNldDoge1xuICAgICAgdHlwZTogYnV0dG9uUHJvcHM/LnJlc2V0Py50eXBlIHx8ICdkZWZhdWx0JyxcbiAgICAgIGNiOiBvblJlc2V0LFxuICAgICAgdGV4dDogcmVzZXQsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIHR5cGU6IGJ1dHRvblByb3BzPy5zdWJtaXQ/LnR5cGUgfHwgJ3ByaW1hcnknLFxuICAgICAgY2I6IG9uU3VibWl0LFxuICAgICAgdGV4dDogc3VibWl0LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZGVmYXVsdERvbSA9IFtdO1xuICBPYmplY3Qua2V5cyhidXR0b25UZXh0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgeyAgdHlwZSwgLi4ucmVzdFByb3BzfSA9IGJ1dHRvblByb3BzW2tleV0gfHwge307XG4gICAgY29uc3QgaXRlbSA9IGJ1dHRvblRleHRzW2tleV07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRlZmF1bHREb20ucHVzaChcbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICB0eXBlPXtjb25maWdba2V5XS50eXBlfSBcbiAgICAgICAgICBrZXk9e2tleX0gXG4gICAgICAgICAgb25DbGljaz17Y29uZmlnW2tleV0uY2J9XG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjb25maWdba2V5XS50ZXh0fVxuICAgICAgICA8L0J1dHRvbj4sXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmcsIHRleHRBbGlnbjogYWxpZ24gfX0+XG4gICAgICA8U3BhY2UgYWxpZ249e2FsaWdufSBkaXJlY3Rpb249e2RpcmVjdGlvbn0+XG4gICAgICAgIHtyZW5kZXIgPyByZW5kZXIocHJvcHMsIGRlZmF1bHREb20pIDogZGVmYXVsdERvbX1cbiAgICAgIDwvU3BhY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRHluYW1pY0ZpZWxkIGZyb20gJy4vZmllbGRzJztcbmltcG9ydCB7IGZpbmRBcnJheU9iamVjdCB9IGZyb20gJy4vdXRpbHMvb2JqZWN0JztcblxuLyoqXG4gKiDmuLLmn5NjZWxsIGl0ZW1cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcGFyYW0gZ2xvYmFsU3BhblxuICogQHJldHVybnNcbiAqL1xuY29uc3QgRm9ybUNvbCA9IChjb2xQcm9wczogUkpGb3JtLklDb2xQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgeyBpdGVtLCBzcGFuLCBpc1ZlcnRpY2FsLCB2YWx1ZSwgb25GaWVsZENoYW5nZSwgb25LZXlQcmVzcywgdmFsaWRhdGUgfSA9XG4gICAgY29sUHJvcHM7XG5cbiAgY29uc3QgeyBsYWJlbCwgdHlwZSwgLi4ucmVzdCB9ID0gaXRlbTtcblxuICBjb25zdCBsYWJsZVRleHQgPSB0eXBlb2YgbGFiZWwgPT09ICdmdW5jdGlvbicgPyBsYWJlbCgpIDogbGFiZWw7XG5cbiAgY29uc3QgY29scyA9IGlzVmVydGljYWxcbiAgICA/IHsgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSwgd3JhcHBlckNvbDogeyBzcGFuOiAyNCB9IH1cbiAgICA6IHt9O1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSAoaXRlbVJ1bGVzOiBSSkZvcm0uUnVsZXNbXSA9IFtdKSA9PlxuICAgICEhZmluZEFycmF5T2JqZWN0KGl0ZW1SdWxlcywgJ3JlcXVpcmVkJywgdHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sIHNwYW49e3NwYW59IG9uS2V5UHJlc3M9e29uS2V5UHJlc3N9PlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBsYWJlbD17bGFibGVUZXh0fVxuICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWQoaXRlbS5ydWxlcyl9XG4gICAgICAgIHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZSAmJiAhdmFsaWRhdGUuc3RhdGUgPyAnZXJyb3InIDogJyd9XG4gICAgICAgIGhlbHA9e3ZhbGlkYXRlPy5tZXNzYWdlfVxuICAgICAgICB7Li4uY29sc31cbiAgICAgID5cbiAgICAgICAge3R5cGUgPT09ICdyZW5kZXInICYmICh0eXBlb2YgcmVzdC5yZW5kZXIgPT09ICdmdW5jdGlvbicgPyByZXN0LnJlbmRlcigpIDogcmVzdC5yZW5kZXIgKX1cbiAgICAgICAge3R5cGUgIT09ICdyZW5kZXInICYmIChcbiAgICAgICAgICA8RHluYW1pY0ZpZWxkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Db2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29sO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBpZiAoIWZpZWxkUHJvcHM/LmZpbHRlck9wdGlvbikge1xuICAgIGZpZWxkUHJvcHMuZmlsdGVyT3B0aW9uID0gKGlucHV0VmFsdWUsIG9wdGlvbikgPT5cbiAgICAgIGlucHV0VmFsdWUgJiYgb3B0aW9uLnZhbHVlLmluZGV4T2YoaW5wdXRWYWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8QXV0b0NvbXBsZXRlIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXNjYWRlciB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPENhc2NhZGVyIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC5jaGVja2VkO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDaGVja2JveCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gY2hlY2tlZD17dmFsdWV9PlxuICAgICAge2ZpZWxkUHJvcHMubGFiZWx9XG4gICAgPC9DaGVja2JveD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3guR3JvdXAgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXREYXRlVGltZVN0YW1wLCBnZXREYXRlTW9tZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVQaWNrZXJGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldERhdGVUaW1lU3RhbXAoYXJnc1swXSk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXtnZXREYXRlTW9tZW50KHZhbHVlKX1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPElucHV0TnVtYmVyIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXQuUGFzc3dvcmQgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQuY2hlY2tlZDtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmFkaW8gey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IGNoZWNrZWQ9e3ZhbHVlfT5cbiAgICAgIHtmaWVsZFByb3BzLmxhYmVsfVxuICAgIDwvUmFkaW8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPFJhZGlvLkdyb3VwIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldFJhbmdlVGltZVN0YW1wLCBnZXRSYW5nZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXRSYW5nZVRpbWVTdGFtcChhcmdzWzBdKTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGF0ZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfVxuICAgICAgdmFsdWU9e2dldFJhbmdlTW9tZW50KHZhbHVlKX1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTZWFyY2ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9IChuZXdWYWx1ZSkgPT4ge1xuICAgIC8vIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPFNlbGVjdCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCAhIXZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTd2l0Y2ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IGNoZWNrZWQ9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0LlRleHRBcmVhIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdGFtcCwgZ2V0RGF0ZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXREYXRlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaW1lUGlja2VyXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICB2YWx1ZT17Z2V0RGF0ZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgIFNwaW4gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgVW5kb091dGxpbmVkLCBSZWRvT3V0bGluZWQsIExlZnRPdXRsaW5lZCwgUmlnaHRPdXRsaW5lZCwgQ2xvc2VPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuaW1wb3J0ICcuL1BpY1ByZXZpZXcuc2NzcydcblxuY29uc3QgeyB1c2VTdGF0ZSB9ID0gUmVhY3RcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvd0xpc3Q6IGJvb2xlYW4sXG4gIGN1cnJlbnQ6IHN0cmluZyxcbiAgdXJsOiBzdHJpbmdbXSB8IHN0cmluZyxcbiAgc3R5bGU/OiBPYmplY3RcbiAgb25IaWRlPzogVm9pZEZ1bmN0aW9uXG59XG5cbi8qKlxuICog5Zu+54mH6aKE6KeIXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpY1ByZXZpZXdlcihcbiAge1xuICAgIHNob3dMaXN0ID0gdHJ1ZSxcbiAgICB1cmwgPSBbXSxcbiAgICBzdHlsZSA9IHt9LFxuICAgIGN1cnJlbnQgPSAnJyxcbiAgICBvbkhpZGUsXG4gIH06IFByb3BzLFxuKSB7XG4gIGxldCBpbWFnZXMgPSBbXVxuICBpZiAodXJsKSB7XG4gICAgaW1hZ2VzID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyBbdXJsXSA6IHVybFxuICB9XG4gIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoY3VycmVudClcbiAgY29uc3QgW2RlZywgc2V0RGVnXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtpc0luaXQsIHNldElzSW5pdF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKG9uSGlkZSkgb25IaWRlKClcbiAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICB9XG4gIGNvbnN0IGhhbmRsZVNob3cgPSAodGFyZ2V0U3JjOiBzdHJpbmcpID0+IHtcbiAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldFNyYyh0YXJnZXRTcmMpXG4gIH1cblxuICBjb25zdCBwcmV2ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBsZXQgaWR4ID0gaW1hZ2VzLmluZGV4T2Yoc3JjKVxuICAgIGlkeCAtPSAxXG4gICAgaWR4ID0gaWR4IDwgMCA/IGltYWdlcy5sZW5ndGggLSAxIDogaWR4XG4gICAgaGFuZGxlU2hvdyhpbWFnZXNbaWR4XSlcbiAgICAvLyBzZXREZWcoMClcbiAgfVxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBsZXQgaWR4ID0gaW1hZ2VzLmluZGV4T2Yoc3JjKVxuICAgIGlkeCArPSAxXG4gICAgaWR4ID0gaWR4ID49IGltYWdlcy5sZW5ndGggPyAwIDogaWR4XG4gICAgaGFuZGxlU2hvdyhpbWFnZXNbaWR4XSlcbiAgICAvLyBzZXREZWcoMClcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uID0gKCkgPT4ge1xuICAgIHNldERlZyhkZWcgKyAxKVxuICB9XG5cbiAgY29uc3Qgcm90YXRpb25CYWNrID0gKCkgPT4ge1xuICAgIHNldERlZyhkZWcgLSAxKVxuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBpZiAoIXNob3dMaXN0ICYmICFpc0luaXQpIHtcbiAgICBoYW5kbGVTaG93KGN1cnJlbnQpXG4gICAgc2V0SXNJbml0KHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd0xpc3RcbiAgICAgICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXJvd1wiPlxuICAgICAgICAgIHtpbWFnZXNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGlkeCk6IGFueSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2l0ZW19XyR7aWR4fWBcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICByb2xlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17aWR4fVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJveFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBoYW5kbGVTaG93KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG5cbiAgICAgIHt2aXNpYmxlXG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy12aWV3ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtc3BpbiByZWFjdC1jb25mLWZvcm0tcGljLXdoaXRlLXNwaW5cIj48U3BpbiBzcGlubmluZz17bG9hZGluZ30gdGlwPVwibG9hZGluZy4uLlwiIHNpemU9XCJsYXJnZVwiIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWNvbnRhaW5lclwiIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlxuICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3ByZXZ9PlxuICAgICAgICAgICAgICAgIDxMZWZ0T3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e25leHR9PlxuICAgICAgICAgICAgICAgIDxSaWdodE91dGxpbmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17cm90YXRpb259PlxuICAgICAgICAgICAgICA8UmVkb091dGxpbmVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17cm90YXRpb25CYWNrfT5cbiAgICAgICAgICAgICAgPFVuZG9PdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJwcmV2aW1nXCJcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKCR7ZGVnICogOTB9ZGVnKWAsIG9wYWNpdHk6IGxvYWRpbmcgPyAwIDogMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pbWctY29udGFpbmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVwbG9hZCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVGaWxlT2JqZWN0QnlVcmwgfSBmcm9tICcuL2hlcGxlcic7XG5pbXBvcnQgUGljUHJldmlldyBmcm9tICcuL1BpY1ByZXZpZXcnXG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzLCBjdXN0b21Qcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbWF4U2l6ZSA9IDIsIG1heExlbmd0aCA9IDEsIGVkaXRNb2RlID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UgfSA9IGN1c3RvbVByb3BzO1xuXG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZSh7dmlzaWJsZTogZmFsc2UsIHVybDogJyd9KTtcbiAgY29uc3QgW2ltYWdlc1VybHMsIHNldEltYWdlc1VybHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlJywgdmFsdWUpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgZGVmYXVsdEZpbGVMaXN0ID0gW107XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkZWZhdWx0RmlsZUxpc3QucHVzaChnZW5lcmF0ZUZpbGVPYmplY3RCeVVybChpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdEZpbGVMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0RmlsZUxpc3QoZGVmYXVsdEZpbGVMaXN0KTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIC8qKlxuICAgKiBvbkNoYW5nZeWPmOWMllxuICAgKiBAcGFyYW0gZmlsZXNcbiAgICovXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9IChmaWxlcykgPT4ge1xuICAgIGNvbnN0IHsgZmlsZUxpc3QgfSA9IGZpbGVzO1xuICAgIC8vIOi9rOWtmHJlc3BvbnNlLnVybCDliLB1cmxcbiAgICBmaWxlTGlzdC5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBpZiAoIWZpbGUudXJsICYmIGZpbGUucmVzcG9uc2U/LnVybCkge1xuICAgICAgICBmaWxlLnVybCA9IGZpbGUucmVzcG9uc2U/LnVybDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXhMZW5ndGggPT09IDEgJiYgZWRpdE1vZGUpIHtcbiAgICAgIGZpbGVMaXN0LnNwbGljZSgwLCBmaWxlTGlzdC5sZW5ndGggLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWxlTGlzdChmaWxlTGlzdCk7XG4gICAgfVxuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShmaWxlcyk7XG4gICAgfVxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIGZpbGVMaXN0LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiDkuIrkvKDov5vluqbmqKHmi5885YGH6L+b5bqmPlxuICAgKi9cbiAgbGV0IHByb2Nlc3NJRCA9IDA7XG4gIGNvbnN0IHByb2Nlc3MgPSAob25Qcm9ncmVzcywgcGVyY2VudCA9IDApID0+IHtcbiAgICBsZXQgbmV4dFBlcmNlbnQgPSBwZXJjZW50ICsgTWF0aC5yYW5kb20oKSAqIDEwO1xuICAgIG5leHRQZXJjZW50ID0gbmV4dFBlcmNlbnQgPiA5OSA/IDk5IDogbmV4dFBlcmNlbnQ7XG4gICAgb25Qcm9ncmVzcyh7IHBlcmNlbnQ6IG5leHRQZXJjZW50IH0pO1xuICAgIHByb2Nlc3NJRCA9IHNldFRpbWVvdXQoKCkgPT4gcHJvY2VzcyhvblByb2dyZXNzLCBuZXh0UGVyY2VudCksIDMwMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieS4iuS8oOaWueazlVxuICAgKiBAcGFyYW0gYXJnc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3QgY3VzdG9tUmVxdWVzdCA9IGFzeW5jIChhcmdzKSA9PiB7XG4gICAgaWYgKCFmaWVsZFByb3BzLmN1c3RvbVJlcXVlc3QpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZmlsZSwgb25TdWNjZXNzLCBvbkVycm9yLCBvblByb2dyZXNzIH0gPSBhcmdzO1xuXG4gICAgcHJvY2VzcyhvblByb2dyZXNzKTtcbiAgICAvLyBvblByb2dyZXNzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVVcmwgPSBhd2FpdCBmaWVsZFByb3BzLmN1c3RvbVJlcXVlc3QoZmlsZSk7XG4gICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICB1cmw6IGZpbGVVcmwsXG4gICAgICB9KTtcbiAgICAgIGNsZWFyVGltZW91dChwcm9jZXNzSUQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNsZWFyVGltZW91dChwcm9jZXNzSUQpO1xuICAgICAgbWVzc2FnZS5lcnJvcign5LiK5Lyg5aSx6LSlJywgZSk7XG4gICAgICBvbkVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiDkuIrkvKDliY3nmoTmoKFcbiAgICogQHBhcmFtIGZpbGVcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IGJlZm9yZVVwbG9hZCA9IChmaWxlKSA9PiB7XG4gICAgY29uc3QgaXNGaWxlU2l6ZUV4Y2Nlc3NMaW1pdGVkID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPiBtYXhTaXplO1xuXG4gICAgLy8gY29uc3QgZmlsZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgaWYgKGlzRmlsZVNpemVFeGNjZXNzTGltaXRlZCkge1xuICAgICAgbWVzc2FnZS5lcnJvcign5LuF5pSv5oyB77yaSlBFRy9QTkcvU1ZHL0JWUCDmoLzlvI8gMk3ku6XlhoUnKTtcbiAgICAgIHJldHVybiBVcGxvYWQuTElTVF9JR05PUkU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgeyB1cGxvYWRCdXR0b25UZXh0IH0gPSBjdXN0b21Qcm9wcztcblxuICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gICAgPGRpdj5cbiAgICAgIDxQbHVzT3V0bGluZWQgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19Pnt1cGxvYWRCdXR0b25UZXh0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVByZXZpZXcgPSAoZmlsZSkgPT4ge1xuICAgIHNldFByZXZpZXcoe1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIHVybDogZmlsZS51cmwsXG4gICAgfSk7XG4gICAgY29uc3QgdXJscyA9IGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uc3RhdHVzID09PSAnZG9uZScgJiYgaXRlbS51cmwpLm1hcChpdGVtID0+IGl0ZW0udXJsKTtcbiAgICBzZXRJbWFnZXNVcmxzKHVybHMpO1xuICB9XG4gIGNvbnN0IGhhbmRsZVByZXZpZXdDYW5jZWwgPSAoKSA9PiB7XG4gICAgc2V0UHJldmlldyh7XG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgIHVybDogJycsXG4gICAgfSk7XG4gIH1cblxuICBsZXQgc2hvd0J1dHRvbiA9IGZhbHNlO1xuICAvLyDlpoLmnpzmlofku7bmlbDlsI/kuo7pmZDliLZcbiAgaWYoZmlsZUxpc3QubGVuZ3RoIDwgbWF4TGVuZ3RoKSB7XG4gICAgc2hvd0J1dHRvbiA9IHRydWVcbiAgfVxuICAvLyDlpoLmnpzmlofku7bmlbDnrYnkuo4x5bm25LiU5piv57yW6L6R5qih5byPXG4gIGlmICghc2hvd0J1dHRvbikge1xuICAgIHNob3dCdXR0b24gPSBmaWxlTGlzdC5sZW5ndGggPT09IDEgJiYgZWRpdE1vZGUgXG4gIH1cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgc2hvd0J1dHRvbiA9IGZhbHNlO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFVwbG9hZFxuICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICBjdXN0b21SZXF1ZXN0PXtjdXN0b21SZXF1ZXN0fVxuICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfVxuICAgICAgb25QcmV2aWV3PXtoYW5kbGVQcmV2aWV3fVxuICAgICAgZmlsZUxpc3Q9e2ZpbGVMaXN0fVxuICAgID5cbiAgICAgIHtzaG93QnV0dG9uICYmIHVwbG9hZEJ1dHRvbn1cbiAgICA8L1VwbG9hZD5cblxuICAgIHtwcmV2aWV3LnZpc2libGUgJiYgKFxuICAgICAgPFBpY1ByZXZpZXdcbiAgICAgICAgdXJsPXtpbWFnZXNVcmxzfVxuICAgICAgICBzaG93TGlzdD17ZmFsc2V9XG4gICAgICAgIG9uSGlkZT17aGFuZGxlUHJldmlld0NhbmNlbH1cbiAgICAgICAgY3VycmVudD17cHJldmlldy51cmx9XG4gICAgICAvPlxuICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgVGV4dGFyZWFGaWVsZCBmcm9tICcuL1RleHRhcmVhJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vUGFzc3dvcmQnO1xuaW1wb3J0IE51bWJlckZpZWxkIGZyb20gJy4vTnVtYmVyJztcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICcuL1NlbGVjdCc7XG5pbXBvcnQgU3dpdGNoRmllbGQgZnJvbSAnLi9Td2l0Y2gnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUZpZWxkIGZyb20gJy4vQXV0b0NvbXBsZXRlJztcbmltcG9ydCBDaGVja2JveEZpZWxkIGZyb20gJy4vQ2hlY2tib3gnO1xuaW1wb3J0IENoZWNrYm94R3JvdXBGaWVsZCBmcm9tICcuL0NoZWNrYm94R3JvdXAnO1xuaW1wb3J0IERhdGVQaWNrZXJGaWVsZCBmcm9tICcuL0RhdGVQaWNrZXInO1xuaW1wb3J0IFJhbmdlUGlja2VyRmllbGQgZnJvbSAnLi9SYW5nZVBpY2tlcic7XG5pbXBvcnQgVGltZVBpY2tlckZpZWxkIGZyb20gJy4vVGltZVBpY2tlcic7XG5pbXBvcnQgUmFkaW9GaWVsZCBmcm9tICcuL1JhZGlvJztcbmltcG9ydCBSYWRpb0dyb3VwRmllbGQgZnJvbSAnLi9SYWRpb0dyb3VwJztcbmltcG9ydCBVcGxvYWRGaWVsZCBmcm9tICcuL1VwbG9hZCc7XG5pbXBvcnQgQ2FzY2FkZXJGaWVsZCBmcm9tICcuL0Nhc2NhZGVyJztcblxuXG4vLyBGaWVsZE1hcFxuY29uc3QgRmllbGRNYXAgPSB7XG4gIGlucHV0OiBJbnB1dEZpZWxkLFxuICBzZWFyY2g6IFNlYXJjaEZpZWxkLFxuICB0ZXh0YXJlYTogVGV4dGFyZWFGaWVsZCxcbiAgcGFzc3dvcmQ6IFBhc3N3b3JkRmllbGQsXG4gIG51bWJlcjogTnVtYmVyRmllbGQsXG4gIHNlbGVjdDogU2VsZWN0RmllbGQsXG4gIHN3aXRjaDogU3dpdGNoRmllbGQsXG4gIGF1dG9Db21wbGV0ZTogQXV0b0NvbXBsZXRlRmllbGQsXG4gIGNoZWNrYm94OiBDaGVja2JveEZpZWxkLFxuICBjaGVja2JveEdyb3VwOiBDaGVja2JveEdyb3VwRmllbGQsXG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJGaWVsZCxcbiAgcmFuZ2VQaWNrZXI6IFJhbmdlUGlja2VyRmllbGQsXG4gIHRpbWVQaWNrZXI6IFRpbWVQaWNrZXJGaWVsZCxcbiAgcmFkaW86IFJhZGlvRmllbGQsXG4gIHJhZGlvR3JvdXA6IFJhZGlvR3JvdXBGaWVsZCxcbiAgdXBsb2FkOiBVcGxvYWRGaWVsZCxcbiAgY2FzY2FkZXI6IENhc2NhZGVyRmllbGQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEeW5hbWljRmllbGQoXG4gIHByb3BzOiBSSkZvcm0uSXRlbVNjaGVtYSAmIFJKRm9ybS5JRmllbGRQcm9wcyxcbik6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgbmFtZSxcbiAgICB2YWx1ZSxcbiAgICBmaWVsZFByb3BzID0ge30sXG4gICAgY3VzdG9tUHJvcHMsXG4gICAgb25GaWVsZENoYW5nZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IENvbXBvbmVudCA9IEZpZWxkTWFwW3R5cGVdO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudFxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIGZpZWxkUHJvcHM9e2ZpZWxkUHJvcHN9XG4gICAgICBjdXN0b21Qcm9wcz17Y3VzdG9tUHJvcHN9XG4gICAgICBvbkZpZWxkQ2hhbmdlPXtvbkZpZWxkQ2hhbmdlfVxuICAgIC8+XG4gICk7XG59XG5cbi8qKlxuICog5omp5bGV57uE5Lu25bqTXG4gKiBAcGFyYW0gZmllbGRzXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRGaWVsZHMgPSAoZmllbGRzOiBSSkZvcm0uRXh0ZW5kRmllbGRJdGVtW10pOiB2b2lkID0+IHtcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgY29uc3QgZm91bmRLZXkgPSBPYmplY3Qua2V5cyhGaWVsZE1hcCkuZmluZCgoa2V5KSA9PiBrZXkgPT09IGZpZWxkLm5hbWUpO1xuICAgIGlmIChmb3VuZEtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGDnu4Tku7Yke2ZpZWxkLm5hbWV95bey5a2Y5Zyo77yM6K+36YeN5paw5a6a5LmJYCk7XG4gICAgfVxuICAgIEZpZWxkTWFwW2ZpZWxkLm5hbWVdID0gZmllbGQuY29tcG9uZW50O1xuICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBTcGluIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCB7IHJhbmRvbVN0cmluZyB9IGZyb20gJy4vdXRpbHMvc3RyaW5nJztcbmltcG9ydCB7IHNpbXBsZUNsb25lIH0gZnJvbSAnLi91dGlscy9vYmplY3QnO1xuaW1wb3J0IHsgYWRkTGFiZWxTdHlsZVdpZHRoLCByZW1vdmVMYWJlbFN0eWxlV2lkdGggfSBmcm9tICcuL3V0aWxzL3N0eWxlJztcbmltcG9ydCBGb3JtQ29sIGZyb20gJy4vRm9ybUNvbCc7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4vcnVsZXMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmV4cG9ydCB7IGV4dGVuZEZpZWxkcyB9IGZyb20gJy4vZmllbGRzJztcbmV4cG9ydCB7IGV4dGVuZFJ1bGVzIH0gZnJvbSAnLi9ydWxlcyc7XG5cbmV4cG9ydCB7IGdlbmVyYXRlRmlsZU9iamVjdEJ5VXJsIH0gZnJvbSAnLi9maWVsZHMvVXBsb2FkL2hlcGxlcic7XG5cbmNvbnN0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgZm9yd2FyZFJlZiB9ID0gUmVhY3Q7XG5cbmNvbnN0IGZvcm1JRCA9IGBGT1JNXyR7cmFuZG9tU3RyaW5nKCl9YDtcblxuZnVuY3Rpb24gSkZvcm0ocHJvcHM6IFJKRm9ybS5Gb3JtUHJvcHMsIHJlZik6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGd1dHRlciA9IDI0LFxuICAgIHNwYW4gPSAxMixcbiAgICBsYWJlbERpcmVjdGlvbiA9ICdob3Jpem9udGFsJyxcbiAgICBsYWJlbFdpZHRoID0gMTIwLFxuICAgIHZhbGlkYXRlT25DaGFuZ2UgPSB0cnVlLFxuICAgIHNjaGVtYSxcbiAgICBvbkNoYW5nZSxcbiAgICBvblN1Ym1pdCxcbiAgICBvblJlc2V0LFxuICAgIGRhdGEgPSB7fSxcbiAgICBzdWJtaXR0ZXIsXG4gICAgc3Bpbm5pbmcgPSBmYWxzZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIGNvbnN0IFt2YWxpZGF0aW9uLCBzZXRWYWxpZGF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyDmt7vliqDmoLflvI9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhZGRMYWJlbFN0eWxlV2lkdGgobGFiZWxXaWR0aCwgbGFiZWxEaXJlY3Rpb24sIGZvcm1JRCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZUxhYmVsU3R5bGVXaWR0aChmb3JtSUQpO1xuICAgIH07XG4gIH0sIFtsYWJlbERpcmVjdGlvbiwgbGFiZWxXaWR0aF0pO1xuXG4gIC8vIGRhdGHlj5jljJZcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGb3JtRGF0YShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICAvLyDliJ3lp4vljJbmlbDmja5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBzY2hlbWEuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5uYW1lKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcbiAgICAgICAgICAgIHJ1bGVzOiBpdGVtLnJ1bGVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvcm1EYXRhW2l0ZW0ubmFtZV0gPSBmb3JtRGF0YVtpdGVtLm5hbWVdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2luaXQ6JywgcmVzdWx0LCBmb3JtRGF0YSk7XG4gICAgc2V0VmFsaWRhdGlvbihyZXN1bHQpO1xuICB9LCBbc2NoZW1hXSk7XG5cbiAgLy8g6I635Y+WdmFsaWRhdG9yXG4gIGNvbnN0IGdldFZhbGlkYXRlQnlOYW1lID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb25JdGVtID0gdmFsaWRhdGlvbi5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogdmFsaWRhdGlvbkl0ZW0gPyB2YWxpZGF0aW9uSXRlbS5zdGF0ZSA6IHRydWUsXG4gICAgICBtZXNzYWdlOiB2YWxpZGF0aW9uSXRlbT8ubWVzc2FnZSB8fCAnJyxcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiDmo4Dmn6XmmK/kuI3mmK/lhajpg6jpgJrov4fmo4DpqoxcbiAgICogQHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgY29uc3QgaXNBbGxWYWxpZGF0ZWQgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVJdGVtID0gdmFsaWRhdGlvbi5maW5kKCh2KSA9PiB2Lm5hbWUgPT09IGtleSk7XG4gICAgICB2YWxpZGF0ZUZpZWxkKGtleSwgZm9ybURhdGFba2V5XSwgdmFsaWRhdGVJdGVtPy50eXBlKTtcbiAgICB9KTtcbiAgICBjb25zdCBub3RWYWxpZGF0ZWRJdGVtSW5kZXggPSBPYmplY3Qua2V5cyh2YWxpZGF0aW9uKS5maW5kSW5kZXgoXG4gICAgICAoa2V5KSA9PiB2YWxpZGF0aW9uW2tleV0uc3RhdGUgPT09IGZhbHNlLFxuICAgICk7XG4gICAgcmV0dXJuIG5vdFZhbGlkYXRlZEl0ZW1JbmRleCA9PT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIOagoemqjOWNleS4qmZpZWxkXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgdmFsaWRhdGVGaWVsZCA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIHR5cGU/OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uSXRlbSA9IHZhbGlkYXRpb24uZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAodmFsaWRhdGlvbkl0ZW0gJiYgdmFsaWRhdGlvbkl0ZW0ucnVsZXMpIHtcbiAgICAgIGxldCB2YWxpZGF0ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAvLyDkuIrkvKDlm77niYfpnIDopoHov4fmu6TmjolzdGF0dXPkuI3nrYnkuo5cImRvbmVcIueahFxuICAgICAgaWYgKHR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICAgIHZhbGlkYXRlZFZhbHVlID0gKHZhbHVlIHx8IFtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhdHVzID09PSAnZG9uZScpO1xuICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkIHZhbGlkYXRlJywgdmFsdWUsIHZhbGlkYXRlZFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdGUobmFtZSwgdmFsaWRhdGVkVmFsdWUsIHZhbGlkYXRpb25JdGVtLnJ1bGVzKTtcbiAgICAgIHZhbGlkYXRpb25JdGVtLm1lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgIHZhbGlkYXRpb25JdGVtLnN0YXRlID0gcmVzdWx0LnN0YXRlO1xuXG4gICAgICBjb25zb2xlLmxvZyhgdmFsaWRhdGVkICR7bmFtZX1gLCByZXN1bHQpO1xuICAgICAgc2V0VmFsaWRhdGlvbihbLi4udmFsaWRhdGlvbl0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRm9ybSBmaWVsZCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgKi9cbiAgY29uc3Qgb25GaWVsZENoYW5nZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAodmFsaWRhdGVPbkNoYW5nZSkge1xuICAgICAgdmFsaWRhdGVGaWVsZChuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2U6JywgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICBmb3JtRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIHNldEZvcm1EYXRhKHNpbXBsZUNsb25lKGZvcm1EYXRhKSk7XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBnZXQgdmFsdWVcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gb2xkRGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3QgZ2V0VmFsdWUgPSAobmFtZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YVtuYW1lXSB8fCB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBsYWJlbERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcblxuICAvLyBpZihyZWYpe1xuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgY2FsbFN1Ym1pdDogKCkgPT4gb25Gb3JtU3VibWl0KCksXG4gICAgICBjYWxsVmFsaWRhdGU6ICgpID0+IGlzQWxsVmFsaWRhdGVkKCksXG4gICAgICBnZXREYXRhOiAoKSA9PiBmb3JtRGF0YSxcbiAgICB9KSk7XG4gIC8vIH1cblxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZT8pOiBib29sZWFuID0+IHtcbiAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8g5o+Q5Lqk5YmN5qCh6aqMXG4gICAgaWYgKCFpc0FsbFZhbGlkYXRlZCgpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc29sZS5sb2coJ29uIHN1Ym1pdCcsIGZvcm1EYXRhKTtcbiAgICBvblN1Ym1pdCAmJiBvblN1Ym1pdChmb3JtRGF0YSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIOmUruebmOaMieS4i0VudGVy77yM5Y+q6KaB5LiN5pivdGV4dGFyZWHnsbvlnovvvIzmj5DkuqRcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IG9uS2V5UHJlc3MgPVxuICAgICh0eXBlOiBzdHJpbmcpID0+XG4gICAgKGUpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0eXBlICE9PSAndGV4dGFyZWEnICYmIGUuY2hhckNvZGUgPT09IDEzKSB7XG4gICAgICAgIG9uRm9ybVN1Ym1pdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgLy8gY29uc3Qgb25Gb3JtUmVzZXQgPSAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ3Jlc2V0Jyk7XG4gIC8vICAgY29uc3QgbmV3VmFsdWUgPSB7fTtcbiAgLy8gICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gIC8vICAgICBuZXdWYWx1ZVtrZXldID0gbnVsbDtcbiAgLy8gICB9KTtcbiAgLy8gICBzZXRGb3JtRGF0YShuZXdWYWx1ZSk7XG4gIC8vICAgb25SZXNldCAmJiBvblJlc2V0KCk7XG4gIC8vIH07XG5cbiAgLy8gY29uc29sZS5sb2coJ2Zvcm1EYXRhOiAnLCBmb3JtRGF0YSk7XG4gIHJldHVybiAoXG4gICAgPFNwaW4gc3Bpbm5pbmc9e3NwaW5uaW5nfT5cbiAgICAgIDxmb3JtIGlkPXtmb3JtSUR9IG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxuICAgICAgICB7c2NoZW1hLm1hcCgocm93LCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3dLZXkgPSBgcm93XyR7aWR4fWA7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3cga2V5PXtyb3dLZXl9IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWUgfHwgcmFuZG9tU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgc3Bhbj17aXRlbS5zcGFuIHx8IHNwYW59XG4gICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvbkZpZWxkQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzcyhpdGVtLnR5cGUpfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e2dldFZhbGlkYXRlQnlOYW1lKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICB7c3VibWl0dGVyICYmIChcbiAgICAgICAgICA8Rm9vdGVyIHsuLi5zdWJtaXR0ZXJ9IG9uUmVzZXQ9e29uUmVzZXR9IG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Zvcm0+XG4gICAgPC9TcGluPlxuICApO1xufVxuXG5cbmV4cG9ydCBjb25zdCBGb3JtID0gZm9yd2FyZFJlZihKRm9ybSk7XG4gIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hbnRfZGVzaWduX2ljb25zX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9