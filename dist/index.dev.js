(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("axios"), require("memoize-one"), require("moment"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["antd", "axios", "memoize-one", "moment", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("antd"), require("axios"), require("memoize-one"), require("moment"), require("react")) : factory(root["antd"], root["axios"], root["memoize-one"], root["moment"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_axios__, __WEBPACK_EXTERNAL_MODULE_memoize_one__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Form/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Form/Field/AutoComplete.tsx":
/*!*************************************!*\
  !*** ./Form/Field/AutoComplete.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
function default_1(props) {
    const onChange = (value) => {
        if (props.props.onChange) {
            props.props.onChange(props.name, value);
        }
        if (props.onChange) {
            props.onChange(props.name, value);
        }
    };
    const _a = props.props, { addon } = _a, rest = __rest(_a, ["addon"]);
    return (React.createElement(antd_1.AutoComplete, Object.assign({}, rest, { onChange: onChange })));
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Button.tsx":
/*!*******************************!*\
  !*** ./Form/Field/Button.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const buttonTypes = ['default', 'primary', 'danger', 'link', 'ghost'];
exports.default = (props) => {
    const { label, data } = props;
    const _a = props.props, { type = 'default', className = '', onClick, addon } = _a, rest = __rest(_a, ["type", "className", "onClick", "addon"]);
    let buttonType = 'default';
    const index = buttonTypes.findIndex(item => item === type);
    if (index !== -1) {
        buttonType = buttonTypes[index];
    }
    return (React.createElement(antd_1.Button, Object.assign({ type: buttonType, className: `${buttonType} ${className}`, onClick: () => onClick(data) }, rest), label));
};


/***/ }),

/***/ "./Form/Field/Cascader.tsx":
/*!*********************************!*\
  !*** ./Form/Field/Cascader.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
// import Cascader from 'antd/es/cascader'
// import 'antd/es/cascader/style'
function getCascaderLabel(originalValue, curOptions, valueIndex, labelArr) {
    let index = valueIndex;
    if (originalValue && index < originalValue.length) {
        const temp = curOptions.find(item => item.value === originalValue[valueIndex]);
        if (temp) {
            labelArr.push(temp.label);
        }
        if (temp && temp.children) {
            index += 1;
            return getCascaderLabel(originalValue, temp.children, valueIndex, labelArr);
        }
        return labelArr.join(' / ');
    }
    return labelArr.join(' / ');
}
function CascaderField(props) {
    const { readOnly, value, name } = props;
    const { options, onChange, placeholder = '请选择' } = props.props;
    const change = (selectedValue, selectedOptions) => {
        if (onChange) {
            onChange(name, selectedValue, selectedOptions);
        }
        props.onChange(name, selectedValue);
    };
    const _a = props.props, { addon } = _a, rest = __rest(_a, ["addon"]);
    if (!readOnly) {
        return React.createElement(antd_1.Cascader, Object.assign({}, rest, { onChange: change, value: value, placeholder: placeholder }));
    }
    return getCascaderLabel(value, options, 0, []);
}
exports.default = CascaderField;


/***/ }),

/***/ "./Form/Field/Checkbox.tsx":
/*!*********************************!*\
  !*** ./Form/Field/Checkbox.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
const antd_1 = __webpack_require__(/*! antd */ "antd");
function CheckboxField(props) {
    const { value, readOnly, onChange, name, } = props;
    const { options = [], checkAllAble = false } = props.props;
    // 全选
    const onCheckAllChange = (e) => {
        const newValue = [];
        if (e.target.checked) {
            options.forEach(item => newValue.push(item.value));
        }
        onChange(name, newValue);
        if (props.props.onChange) {
            props.props.onChange(name, newValue);
        }
    };
    const isCheckedAll = (values) => (common_1.notEmptyValue(values) && values.length === options.length);
    const change = (target) => {
        const newValue = common_1.getTargetValue(target);
        onChange(name, newValue);
        if (props.props.onChange) {
            props.props.onChange(name, newValue);
        }
    };
    const _a = props.props, { addon } = _a, rest = __rest(_a, ["addon"]);
    return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement(React.Fragment, null,
        checkAllAble && (React.createElement(antd_1.Checkbox, { checked: isCheckedAll(value), onChange: onCheckAllChange }, "\u5168\u9009 \u00A0")),
        React.createElement(antd_1.Checkbox.Group, Object.assign({}, rest, { value: value, onChange: change }))));
}
exports.default = CheckboxField;


/***/ }),

/***/ "./Form/Field/Datepicker.tsx":
/*!***********************************!*\
  !*** ./Form/Field/Datepicker.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const moment = __webpack_require__(/*! moment */ "moment");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
class default_1 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.FORMAT = 'YYYY-MM-DD';
        this.FORMAT_TIME = 'YYYY-MM-DD HH:mm';
        this.onChange = (e) => {
            let value = common_1.getTargetValue(e);
            if (common_1.notEmptyValue(value)) {
                value = !value ? value : value.valueOf();
            }
            const { name } = this.props;
            const { beforeChange, onChange } = this.props.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            if (onChange) {
                onChange(name, value);
            }
            this.props.onChange(name, value);
        };
    }
    render() {
        const { value, readOnly, props, } = this.props;
        const { format, addon } = props, rest = __rest(props, ["format", "addon"]);
        const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT);
        const fieldValue = value ? moment(value) : undefined;
        return readOnly
            ? ((fieldValue && fieldValue.format(format)) || null)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.DatePicker, Object.assign({}, rest, { format: FORMAT, value: fieldValue, onChange: this.onChange }))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Input.tsx":
/*!******************************!*\
  !*** ./Form/Field/Input.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
class default_1 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            let value = common_1.getTargetValue(e);
            const { name } = this.props;
            const { beforeChange, onChange } = this.props.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            if (onChange) {
                onChange(name, value);
            }
            this.props.onChange(name, value);
        };
        this.staticValue = (value, suffix, prefix) => {
            if (!value)
                return null;
            let string = value;
            if (suffix)
                string = `${value} ${suffix}`;
            if (prefix)
                string = `${prefix} ${string}`;
            return string;
        };
    }
    render() {
        const { value, readOnly, type, props, } = this.props;
        const { addon, suffix, prefix } = props, rest = __rest(props, ["addon", "suffix", "prefix"]);
        const autoComplete = props.autoComplete || 'off';
        return readOnly
            ? this.staticValue(value, suffix, prefix)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input, Object.assign({ placeholder: "\u8BF7\u8F93\u5165" }, rest, { suffix: suffix, prefix: prefix, type: type, value: value, onChange: this.onChange, autoComplete: autoComplete }))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/InputNumber.tsx":
/*!************************************!*\
  !*** ./Form/Field/InputNumber.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Input_1 = __webpack_require__(/*! ./Input */ "./Form/Field/Input.tsx");
function default_1(props) {
    return (React.createElement(Input_1.default, Object.assign({}, props, { type: "number" })));
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/InputPassword.tsx":
/*!**************************************!*\
  !*** ./Form/Field/InputPassword.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Input_1 = __webpack_require__(/*! ./Input */ "./Form/Field/Input.tsx");
function default_1(props) {
    return (React.createElement(Input_1.default, Object.assign({}, props, { type: "password" })));
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/PicPreview.scss":
/*!************************************!*\
  !*** ./Form/Field/PicPreview.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./Form/Field/PicPreview.tsx":
/*!***********************************!*\
  !*** ./Form/Field/PicPreview.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
__webpack_require__(/*! ./PicPreview.scss */ "./Form/Field/PicPreview.scss");
const { useState } = React;
/**
 * 图片预览
 */
function PicPreviewer({ showList = true, url = [], style = {}, current = '', onHide, }) {
    let images = [];
    if (url) {
        images = typeof url === 'string' ? [url] : url;
    }
    images = images.filter(item => item);
    const [visible, setVisible] = useState(false);
    const [src, setSrc] = useState(current);
    const [deg, setDeg] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isInit, setIsInit] = useState(false);
    const handleCancel = () => {
        if (onHide)
            onHide();
        setVisible(false);
    };
    const handleShow = (targetSrc) => {
        setVisible(true);
        setLoading(true);
        setSrc(targetSrc);
    };
    const prev = () => {
        setLoading(true);
        let idx = images.indexOf(src);
        idx -= 1;
        idx = idx < 0 ? images.length - 1 : idx;
        handleShow(images[idx]);
        // setDeg(0)
    };
    const next = () => {
        setLoading(true);
        let idx = images.indexOf(src);
        idx += 1;
        idx = idx >= images.length ? 0 : idx;
        handleShow(images[idx]);
        // setDeg(0)
    };
    const rotation = () => {
        setDeg(deg + 1);
    };
    const rotationBack = () => {
        setDeg(deg - 1);
    };
    const onLoad = () => {
        setLoading(false);
    };
    if (!showList && !isInit) {
        handleShow(current);
        setIsInit(true);
    }
    return (React.createElement(React.Fragment, null,
        showList
            && (React.createElement("div", { className: "react-conf-form-pic-row" }, images
                .map((item, idx) => {
                const key = `${item}_${idx}`;
                return (React.createElement("div", { role: "link", tabIndex: idx, key: key, className: "react-conf-form-pic-box", onClick: () => handleShow(item), onKeyDown: () => handleShow(item), style: style },
                    React.createElement("img", { src: item, alt: "" })));
            }))),
        visible
            && (React.createElement("div", { className: "react-conf-form-pic-viewer" },
                React.createElement("div", { className: "react-conf-form-pic-spin react-conf-form-pic-white-spin" },
                    React.createElement(antd_1.Spin, { spinning: loading, tip: "loading...", size: "large" })),
                React.createElement("div", { className: "react-conf-form-pic-container", onClick: handleCancel }),
                React.createElement("div", { className: "react-conf-form-pic-buttons" },
                    React.createElement("div", { className: "react-conf-form-pic-icon", onClick: handleCancel },
                        React.createElement(antd_1.Icon, { type: "close" })),
                    images.length > 1 && (React.createElement("div", { className: "react-conf-form-pic-icon", onClick: prev },
                        React.createElement(antd_1.Icon, { type: "left" }))),
                    images.length > 1 && (React.createElement("div", { className: "react-conf-form-pic-icon", onClick: next },
                        React.createElement(antd_1.Icon, { type: "right" }))),
                    React.createElement("div", { className: "react-conf-form-pic-icon", onClick: rotation },
                        React.createElement(antd_1.Icon, { type: "redo" })),
                    React.createElement("div", { className: "react-conf-form-pic-icon", onClick: rotationBack },
                        React.createElement(antd_1.Icon, { type: "undo" }))),
                React.createElement("img", { alt: "previmg", src: src, onLoad: onLoad, style: { transform: `translate(-50%, -50%) rotate(${deg * 90}deg)`, opacity: loading ? 0 : 1 }, className: "react-conf-form-pic-img-container" })))));
}
exports.default = PicPreviewer;


/***/ }),

/***/ "./Form/Field/Radio.tsx":
/*!******************************!*\
  !*** ./Form/Field/Radio.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
const antd_1 = __webpack_require__(/*! antd */ "antd");
function RadioField(props) {
    const { value, readOnly, onChange, name, style = {}, } = props;
    const { options = [] } = props.props;
    const change = (target) => {
        const newValue = common_1.getTargetValue(target);
        onChange(name, newValue);
        if (props.props.onChange) {
            props.props.onChange(name, newValue);
        }
    };
    const _a = props.props, { addon } = _a, rest = __rest(_a, ["addon"]);
    return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement("div", { style: style },
        React.createElement(antd_1.Radio.Group, Object.assign({}, rest, { value: value, onChange: change }))));
}
exports.default = RadioField;


/***/ }),

/***/ "./Form/Field/Rangepicker.tsx":
/*!************************************!*\
  !*** ./Form/Field/Rangepicker.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const moment = __webpack_require__(/*! moment */ "moment");
const antd_1 = __webpack_require__(/*! antd */ "antd");
// import Datepicker from 'antd/es/date-picker'
// import 'antd/es/date-picker/style'
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
class default_1 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.FORMAT = 'YYYY-MM-DD';
        this.FORMAT_TIME = 'YYYY-MM-DD HH:mm';
        this.onChange = (e) => {
            const { showTime } = this.props.props;
            let value = common_1.getTargetValue(e);
            if (common_1.notEmptyValue(value[0])) {
                if (!showTime) {
                    value = [
                        moment(moment(value[0]).format('YYYY-MM-DD 00:00:00')).valueOf(),
                        moment(moment(value[1]).format('YYYY-MM-DD 23:59:59')).valueOf(),
                    ];
                }
                else {
                    value = [moment(value[0]).valueOf(), moment(value[1]).valueOf()];
                }
            }
            else {
                value = null;
            }
            const { name } = this.props;
            const { beforeChange, onChange } = this.props.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            if (onChange) {
                onChange(name, value);
            }
            console.log('name', name, value);
            this.props.onChange(name, value);
        };
        this.staticTime = (value, FORMAT) => {
            if (!value)
                return moment(value).format(FORMAT);
            return '';
        };
        this.showTime = (timeValue, FORMAT) => {
            if (timeValue[0] && timeValue[1]) {
                return `${this.staticTime(timeValue[0], FORMAT)} ~ ${this.staticTime(timeValue[1], FORMAT)}`;
            }
            return null;
        };
    }
    render() {
        const { value, readOnly, props } = this.props;
        const { format, addon } = props, rest = __rest(props, ["format", "addon"]);
        const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT);
        let timeValue = [null, null];
        if (value && value.constructor.name === 'Array' && value.length > 0) {
            timeValue = common_1.simpleClone(value);
            timeValue[0] = moment(value[0]);
            timeValue[1] = moment(value[1]);
        }
        return readOnly
            ? this.showTime(timeValue, FORMAT)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.DatePicker.RangePicker, Object.assign({}, rest, { format: FORMAT, value: timeValue, onChange: this.onChange }))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Render.tsx":
/*!*******************************!*\
  !*** ./Form/Field/Render.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Render = props => {
    const { data } = props;
    const { render } = props.props;
    // console.log('render', typeof render, render)
    return typeof render === 'function' ? render(data) : (render || null);
};
exports.default = Render;


/***/ }),

/***/ "./Form/Field/Select.tsx":
/*!*******************************!*\
  !*** ./Form/Field/Select.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
// import Select from 'antd/es/select'
// import 'antd/es/select/style'
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
const { Option, OptGroup } = antd_1.Select;
class default_1 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            var _a;
            const target = e && e.target;
            let value;
            if (target instanceof HTMLElement || common_1.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
                value = target.value;
            }
            else {
                value = e;
            }
            const { name } = this.props;
            const { beforeChange, onChange } = this.props.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            if (onChange) {
                onChange(name, value);
            }
            this.props.onChange(name, value);
        };
        this.renderGroup = (items) => {
            const result = [];
            Object.keys(items).forEach(key => {
                const children = [];
                items[key].forEach(item => {
                    children.push(React.createElement(Option, { key: item.value, title: item.label }, item.label));
                });
                result.push(React.createElement(OptGroup, { label: key, key: key }, children));
            });
            return result;
        };
    }
    render() {
        const { value, readOnly, props } = this.props;
        const { items = [], placeholder = '请选择', showSearch = true, optionFilterProp = 'title', allowClear = true, addon } = props, rest = __rest(props, ["items", "placeholder", "showSearch", "optionFilterProp", "allowClear", "addon"]);
        const { mode } = rest;
        return readOnly
            ? React.createElement("span", { style: {} }, common_1.getItemLabelByValue(items, value, mode))
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Select, Object.assign({}, rest, { placeholder: placeholder, value: value, optionFilterProp: optionFilterProp === 'label' ? 'title' : optionFilterProp, showSearch: showSearch, allowClear: allowClear, onChange: this.onChange }),
                    Array.isArray(items) && items.map((item) => (React.createElement(Option, { key: item.value, title: item.label, disabled: item.value === undefined }, item.label))),
                    !Array.isArray(items) && this.renderGroup(items))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Switch.tsx":
/*!*******************************!*\
  !*** ./Form/Field/Switch.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
class default_1 extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (checked) => {
            if (this.props.onChange) {
                this.props.onChange(this.props.name, checked);
            }
            if (this.props.props.onClick) {
                this.props.props.onClick(this.props.data);
            }
        };
    }
    render() {
        const { value, } = this.props;
        const _a = this.props.props, { onClick } = _a, rest = __rest(_a, ["onClick"]);
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Switch, Object.assign({}, rest, { checked: value, onChange: this.onChange }))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Textarea.tsx":
/*!*********************************!*\
  !*** ./Form/Field/Textarea.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
class default_1 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            var _a;
            const target = e && e.target;
            let value;
            if (target instanceof HTMLElement || common_1.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
                value = target.value;
            }
            else {
                value = e;
            }
            const { name } = this.props;
            const { beforeChange, onChange } = this.props.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            if (onChange) {
                onChange(name, value);
            }
            this.props.onChange(name, value);
        };
    }
    render() {
        const { value, readOnly, props, } = this.props;
        const autoComplete = props.autoComplete || 'off';
        const { addon } = props, rest = __rest(props, ["addon"]);
        return readOnly
            ? (value || null)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input.TextArea, Object.assign({ placeholder: "\u8BF7\u8F93\u5165" }, rest, { value: value, onChange: this.onChange, autoComplete: autoComplete }))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Timepicker.tsx":
/*!***********************************!*\
  !*** ./Form/Field/Timepicker.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const moment = __webpack_require__(/*! moment */ "moment");
const antd_1 = __webpack_require__(/*! antd */ "antd");
// import Timepicker from 'antd/es/time-picker'
// import 'antd/es/time-picker/style'
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
class default_1 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.FORMAT = 'HH:mm';
        this.onChange = (e) => {
            const { format = this.FORMAT } = this.props.props;
            let value = common_1.getTargetValue(e);
            if (common_1.notEmptyValue(value)) {
                value = moment(value).format(format);
            }
            const { name } = this.props;
            const { beforeChange, onChange } = this.props.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            if (onChange) {
                onChange(name, value);
            }
            this.props.onChange(name, value);
        };
        this.staticTime = (value, FORMAT) => {
            if (!value)
                return moment(value).format(FORMAT);
            return '';
        };
    }
    render() {
        const { value, readOnly, props } = this.props;
        const { format = this.FORMAT, addon } = props, rest = __rest(props, ["format", "addon"]);
        const timeValue = common_1.notEmptyValue(value)
            ? moment(common_1.simpleClone(value), format)
            : undefined;
        return readOnly
            ? this.staticTime(value, format)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.TimePicker, Object.assign({ value: timeValue }, rest, { format: format, onChange: this.onChange }))));
    }
}
exports.default = default_1;


/***/ }),

/***/ "./Form/Field/Upload.tsx":
/*!*******************************!*\
  !*** ./Form/Field/Upload.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const PicPreview_1 = __webpack_require__(/*! ./PicPreview */ "./Form/Field/PicPreview.tsx");
/**
 * Upload
 * @type {XML}
 */
const uploadButton = (React.createElement("div", null,
    React.createElement(antd_1.Icon, { type: "plus" }),
    React.createElement("div", { className: "ant-upload-text" }, "\u4E0A\u4F20")));
const uploadButtonText = (React.createElement(antd_1.Button, null,
    React.createElement(antd_1.Icon, { type: "upload" }),
    "\u00A0\u4E0A\u4F20"));
class UploadField extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            previewVisible: false,
            previewImage: '',
            errorMsg: '',
        };
        this.onChange = (info) => {
            var _a, _b, _c;
            // console.log('!!!!!!进入 onChange ')
            const { onChange, onUploaded, responseHandler } = this.props.props;
            let fileList = [...info.fileList];
            fileList.forEach((file, idx) => {
                if (file.response) {
                    if (responseHandler) {
                        fileList[idx] = Object.assign(Object.assign({}, fileList[idx]), { url: responseHandler.url(file.response), name: responseHandler.name(file.response) });
                    }
                    else {
                        fileList[idx] = Object.assign(Object.assign({}, fileList[idx]), { url: file.response.headers.location, name: file.response.filename });
                    }
                }
                return file;
            });
            if (info.file.status === 'done') {
                if (this.props.props.getResponseData) {
                    this.props.props.getResponseData(info.file.response);
                }
                this.setState({ errorMsg: '' });
            }
            else if (info.file.status === 'error') {
                fileList = [];
                this.setState({ errorMsg: ((_c = (_b = (_a = info.file) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.invoice) === null || _c === void 0 ? void 0 : _c.message) || '上传错误, 请重试!' });
            }
            else if (!info.file.status) {
                // 文件超过大小或其它不满足前端限制条件情况
                fileList = fileList.slice(0, fileList.length - 1);
                // this.setState({ errorMsg: '' })
            }
            this.props.onChange(this.props.name, fileList);
            if (onChange) {
                onChange(fileList);
            }
            if (onUploaded) {
                onUploaded(fileList);
            }
        };
        this.onPreview = (file) => {
            this.setState({ previewVisible: true, previewImage: file.url });
        };
        this.handleCancel = () => {
            this.setState({ previewVisible: false, previewImage: '' });
        };
        this.customRequest = ({ file, onSuccess, onError, onProgress, }) => {
            const { headers, action } = this.props.props;
            // console.log(action)
            const formData = new FormData();
            formData.append('file', file);
            axios_1.default
                .post(action, formData, {
                onUploadProgress: onProgress,
                headers: headers || {},
            })
                .then(response => {
                this.setState({ errorMsg: '' });
                onSuccess(response);
            }, () => {
                this.setState({ errorMsg: '上传失败!' });
                onError();
            });
            return {
                abort() {
                    this.setState({ errorMsg: '上传终止!' });
                },
            };
        };
    }
    beforeUpload(file, type) {
        // console.log('!!!!!!进入 beforeUpload ')
        const { maxFileSize = 10 } = this.props.props;
        // if (heightRatio && widthRatio) { // 验证长宽比例
        //   const { height, width } = await getFileDimension(file)
        //   if (height/width !== heightRatio/widthRatio) {
        //     message.error(`长宽比必须是 ${heightRatio} / ${widthRatio}`)
        //     return false
        //   }
        // }
        // 验证文件大小size
        const fileSizeLarger = file.size / 1024 / 1024 > maxFileSize;
        if (fileSizeLarger) {
            this.setState({ errorMsg: `文件体积大小不超过${maxFileSize}M` });
            // message.error(`文件体积大小不超过${maxFileSize}M`)
            return false;
        }
        // 验证文件格式
        if (type === 'img') {
            const isJPG = file.type;
            if (isJPG === 'image/jpeg' || isJPG === 'image/png') {
                this.setState({ errorMsg: '' });
                return true;
            }
            this.setState({ errorMsg: '仅支持上传jpg/png格式图片' });
            // message.error('仅支持上传jpg/png格式图片')
            return false;
        }
        this.setState({ errorMsg: '' });
    }
    render() {
        const { value = [], readOnly, props, } = this.props;
        const { maxFiles = 10, blobName = 'blob', fileType = 'img', showErrorMessage = true, listType = 'picture-card', headers = {}, } = props;
        // value = value || []
        const button = listType === 'picture-card' ? uploadButton : uploadButtonText;
        const formatValue = JSON.parse(JSON.stringify(value));
        const imagesUrls = [];
        formatValue.forEach(element => {
            var _a;
            imagesUrls.push((_a = element) === null || _a === void 0 ? void 0 : _a.url);
        });
        formatValue.forEach((item, idx) => {
            if (typeof item !== 'object') {
                formatValue[idx] = {
                    uid: `${item}_${idx}`,
                    url: item,
                };
            }
            return item;
        });
        const { addon } = props, rest = __rest(props
        // console.log('err', this.state.errorMsg, showErrorMessage)
        , ["addon"]);
        // console.log('err', this.state.errorMsg, showErrorMessage)
        return (React.createElement("div", { style: { position: 'relative' } },
            React.createElement(antd_1.Upload, Object.assign({}, rest, { key: blobName, name: blobName, headers: headers, listType: listType, fileList: formatValue, showUploadList: true, onChange: file => this.onChange(file), beforeUpload: file => this.beforeUpload(file, fileType), disabled: readOnly, onPreview: this.onPreview, customRequest: this.customRequest }), value.length >= maxFiles || readOnly ? null : button),
            this.state.errorMsg && showErrorMessage && (React.createElement("div", { className: "upload-error" }, this.state.errorMsg)),
            this.state.previewVisible && (React.createElement(PicPreview_1.default, { url: imagesUrls, showList: false, onHide: this.handleCancel, current: this.state.previewImage }))));
    }
}
exports.default = UploadField;
UploadField.defaultProps = {
// props: {
//   showErrorMessage: true,
//   maxFiles: 5, // 最多能上传文件数
//   maxFileSize: 10, // 最大上传体积
//   fileType: 'img', // 默认上传图片
// },
};


/***/ }),

/***/ "./Form/Field/index.tsx":
/*!******************************!*\
  !*** ./Form/Field/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Render_1 = __webpack_require__(/*! ./Render */ "./Form/Field/Render.tsx");
const Input_1 = __webpack_require__(/*! ./Input */ "./Form/Field/Input.tsx");
const Button_1 = __webpack_require__(/*! ./Button */ "./Form/Field/Button.tsx");
const Select_1 = __webpack_require__(/*! ./Select */ "./Form/Field/Select.tsx");
const Timepicker_1 = __webpack_require__(/*! ./Timepicker */ "./Form/Field/Timepicker.tsx");
const Rangepicker_1 = __webpack_require__(/*! ./Rangepicker */ "./Form/Field/Rangepicker.tsx");
const Datepicker_1 = __webpack_require__(/*! ./Datepicker */ "./Form/Field/Datepicker.tsx");
const Cascader_1 = __webpack_require__(/*! ./Cascader */ "./Form/Field/Cascader.tsx");
const Upload_1 = __webpack_require__(/*! ./Upload */ "./Form/Field/Upload.tsx");
const AutoComplete_1 = __webpack_require__(/*! ./AutoComplete */ "./Form/Field/AutoComplete.tsx");
const InputPassword_1 = __webpack_require__(/*! ./InputPassword */ "./Form/Field/InputPassword.tsx");
const InputNumber_1 = __webpack_require__(/*! ./InputNumber */ "./Form/Field/InputNumber.tsx");
const Textarea_1 = __webpack_require__(/*! ./Textarea */ "./Form/Field/Textarea.tsx");
const Radio_1 = __webpack_require__(/*! ./Radio */ "./Form/Field/Radio.tsx");
const Checkbox_1 = __webpack_require__(/*! ./Checkbox */ "./Form/Field/Checkbox.tsx");
const Switch_1 = __webpack_require__(/*! ./Switch */ "./Form/Field/Switch.tsx");
const map = {
    render: Render_1.default,
    switch: Switch_1.default,
    input: Input_1.default,
    button: Button_1.default,
    select: Select_1.default,
    timepicker: Timepicker_1.default,
    rangepicker: Rangepicker_1.default,
    datepicker: Datepicker_1.default,
    cascader: Cascader_1.default,
    inputPassword: InputPassword_1.default,
    inputNumber: InputNumber_1.default,
    textarea: Textarea_1.default,
    radio: Radio_1.default,
    checkbox: Checkbox_1.default,
    upload: Upload_1.default,
    autoComplete: AutoComplete_1.default,
};
/* Add extract field */
exports.addFields = (extendFields) => (extendFields.forEach((extendField) => {
    const { name, component } = extendField;
    map[name] = component;
}));
/* Field Map */
const getComponent = (type) => map[type] || null;
exports.default = (props) => {
    const { type } = props, rest = __rest(props, ["type"]);
    const Component = getComponent(type);
    return Component
        ? React.createElement(Component, Object.assign({}, rest))
        : null;
};


/***/ }),

/***/ "./Form/FooterButtons/ButtonGroup.tsx":
/*!********************************************!*\
  !*** ./Form/FooterButtons/ButtonGroup.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// import Button from 'antd/es/button'
// import 'antd/es/button/style'
const antd_1 = __webpack_require__(/*! antd */ "antd");
const buttonTypes = ['default', 'primary', 'danger', 'link', 'ghost'];
function default_1(props) {
    const { gutter = 16, fields } = props;
    return (fields.map((button, idx) => {
        const { key, label = '', display = true, } = button;
        const _a = button.props || {}, { type = 'default', className = '', onClick, addon, style = {} } = _a, rest = __rest(_a, ["type", "className", "onClick", "addon", "style"]);
        let buttonType;
        const index = buttonTypes.findIndex(item => item === type);
        if (index !== -1) {
            buttonType = buttonTypes[index];
        }
        if (rest.block) {
            style.display = 'block';
            style.width = '100%';
        }
        return display
            ? (React.createElement("span", { key: key, style: style },
                idx > 0 && React.createElement("span", { className: "react-conf-form-button-space-between", style: { width: gutter } }),
                React.createElement(antd_1.Button, Object.assign({ type: buttonType, className: className }, rest, { onClick: () => props.onButtonClick(key, onClick) }), label),
                addon && addon(props.data)))
            : null;
    }));
}
exports.default = default_1;


/***/ }),

/***/ "./Form/FooterButtons/index.tsx":
/*!**************************************!*\
  !*** ./Form/FooterButtons/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ButtonGroup_1 = __webpack_require__(/*! ./ButtonGroup */ "./Form/FooterButtons/ButtonGroup.tsx");
// const alignMap = {
//   left: 'flex-start',
//   center: 'center',
//   right: 'flex-end',
// }
function FooterButtons(props) {
    const { style, align, type } = props, rest = __rest(props, ["style", "align", "type"]);
    const wrapperStyle = Object.assign({
        // justifyContent: alignMap[align || 'center'],
        textAlign: align || 'center' }, style);
    return (React.createElement("div", { className: "react-conf-form-button-wrapper", style: wrapperStyle },
        React.createElement(ButtonGroup_1.default, Object.assign({}, rest))));
}
exports.default = FooterButtons;
FooterButtons.defaultProps = {
    display: true,
    style: {},
};


/***/ }),

/***/ "./Form/Row.tsx":
/*!**********************!*\
  !*** ./Form/Row.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
// import Row from 'antd/es/row'
// import Col from 'antd/es/col'
// import Form from 'antd/es/form'
// import 'antd/es/row/style'
// import 'antd/es/col/style'
// import 'antd/es/form/style'
const config_1 = __webpack_require__(/*! @Form/config */ "./Form/config.ts");
const Field_1 = __webpack_require__(/*! ./Field */ "./Form/Field/index.tsx");
exports.default = (props) => {
    const { gutter = config_1.DEFAULT_GUTTER, type, className = '', fields, data, onChange, validation, labelDirection, } = props;
    return (React.createElement(antd_1.Row, { gutter: gutter },
        React.createElement("div", { className: `${className} ${labelDirection}` }, type !== 'FormButtons' && fields.map((field) => {
            const { key, span = props.span || config_1.DEFAULT_SPAN, offset = 0, label, display = true, } = field;
            const { rules, addon } = field.props;
            return display
                ? (React.createElement(antd_1.Col, { key: field.key, span: span, offset: offset },
                    React.createElement(antd_1.Form.Item, { className: field.className, label: ['button', 'render'].indexOf(field.type) === -1 ? label : undefined, required: rules && rules.indexOf('required') !== -1, validateStatus: (validation[key] && !validation[key].validated)
                            ? 'error'
                            : '', help: (validation[key] && !validation[key].validated)
                            ? validation[key].msg
                            : '' },
                        React.createElement(Field_1.default, Object.assign({}, field, { name: key, key: key, data: data, onChange: onChange, value: data[key] })),
                        addon && addon(data))))
                : null;
        }))));
};


/***/ }),

/***/ "./Form/config.ts":
/*!************************!*\
  !*** ./Form/config.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
exports.DEFAULT_SPAN = 8;
exports.DEFAULT_GUTTER = 16;


/***/ }),

/***/ "./Form/index.scss":
/*!*************************!*\
  !*** ./Form/index.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./Form/index.tsx":
/*!************************!*\
  !*** ./Form/index.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const memoize_one_1 = __webpack_require__(/*! memoize-one */ "memoize-one");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const Field_1 = __webpack_require__(/*! @Form/Field */ "./Form/Field/index.tsx");
const FormValidator_1 = __webpack_require__(/*! ./utils/FormValidator */ "./Form/utils/FormValidator.ts");
const Row_1 = __webpack_require__(/*! ./Row */ "./Form/Row.tsx");
const common_1 = __webpack_require__(/*! @Form/utils/common */ "./Form/utils/common.ts");
const FooterButtons_1 = __webpack_require__(/*! ./FooterButtons */ "./Form/FooterButtons/index.tsx");
__webpack_require__(/*! ./index.scss */ "./Form/index.scss");

if (typeof memoize_one_1.default === 'function') {
    memoize_one_1.default = memoize_one_1
}
class RJForm extends React.Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.data = {}; // form数据
        this.dataChanged = false;
        this.validation = {}; // 验证结果
        /**
         * detect data source whether is changed
         */
        this.isDataSourceChanged = memoize_one_1.default((dataSource) => {
            // USELESS "|| condition"
            // because dataSource is the key of method running and need to
            // use it to avoid that eslint report an error "dataSource is
            // defined but never used"
            this.dataChanged =  true || false;
            return this.dataChanged;
        });
        /**
         * get data from dataSource or local data,
         * and also set up "validation"
         */
        this.convertDataFromFields = memoize_one_1.default((fields, dataSource) => {
            fields.forEach((row) => {
                if (row.type !== 'FormButtons') {
                    row.fields.forEach((item) => {
                        var _a, _b;
                        if (item.display !== false && item.type !== 'render' && item.type !== 'button') {
                            // 如果数据源(props)发生改变，取数据源，否则取本地(state)
                            this.data[item.key] = this.dataChanged
                                ? dataSource[item.key]
                                : this.data[item.key];
                            // 如果数据源(props)发生改变： 如果有值，重新校验；没有值，不校验
                            const init = this.validateField(item.key, this.data[item.key], ((_a = item.props) === null || _a === void 0 ? void 0 : _a.rules) || []);
                            this.validation[item.key] = Object.assign(Object.assign({}, init), { rules: ((_b = item.props) === null || _b === void 0 ? void 0 : _b.rules) || [] });
                        }
                    });
                }
            });
            this.dataChanged = false;
        });
        this.id = `FORM_${parseInt((Math.random() * 10000).toString(), 10).toString()}`;
        /**
         * on field change
         * @param key
         * @param value
         */
        this.onChange = (key, value) => {
            // console.log('did change', key, value)
            this.data = Object.assign(Object.assign({}, this.data), { [key]: value });
            if (this.props.validateOnChange && this.validation[key]) {
                this.validation[key] = Object.assign(Object.assign({}, FormValidator_1.default.check(value, this.validation[key].rules)), { rules: this.validation[key].rules });
            }
            if (this.props.onChange) {
                this.props.onChange(key, value, this.data);
            }
            this.setState({});
        };
        /**
         * 验证所有fields
         */
        this.validate = () => {
            let validated = true;
            this.props.fields.forEach((row) => {
                if (row.type !== 'FormButtons') {
                    row.fields.forEach((item) => {
                        if (item.display !== false && item.type !== 'render' && item.type !== 'button') {
                            const { key } = item;
                            const value = this.data[key];
                            const result = FormValidator_1.default.check(value, this.validation[key].rules);
                            this.validation[key] = Object.assign(Object.assign({}, result), { rules: this.validation[key].rules });
                            if (!this.validation[key].validated) {
                                validated = false;
                            }
                        }
                    });
                }
            });
            this.setState({});
            return validated;
        };
        /**
         * on Submit
         * @param e
         */
        this.onSubmit = (e) => {
            if (e)
                e.preventDefault();
            if (!this.validate())
                return;
            console.log('submit data', this.data);
            if (this.props.onSubmit)
                this.props.onSubmit(this.data);
        };
        /**
         * on Reset
         */
        this.onReset = () => {
            if (this.props.onReset)
                this.props.onReset();
        };
        /**
         * button click
         * @param type
         * @param cb
         */
        this.onButtonClick = (type, cb) => {
            if (type === 'submit') {
                this.onSubmit();
            }
            else if (type === 'reset') {
                this.onReset();
            }
            else if (cb) {
                cb(this.data);
            }
        };
        /**
         * 获取校验
         * @param key
         * @param value
         * @param rules
         */
        this.validateField = (key, value, rules = []) => {
            if (this.validation[key] !== undefined && value !== undefined) {
                return FormValidator_1.default.check(value, rules);
            }
            return { validated: true, msg: '' };
        };
        // add extendFields into form generating/mapping
        Field_1.addFields(this.props.extendFields);
        if (props.id) {
            this.id = `FORM_${props.id}`;
        }
    }
    componentDidMount() {
        this.mounted = true;
        // extend validators into Form Validator
        FormValidator_1.default.extendValidators(this.props.extendValidators);
    }
    componentWillUnmount() {
        common_1.removeLabelStyleWidth(this.id);
        this.mounted = false;
    }
    render() {
        const { fields, dataSource, labelDirection, labelWidth, } = this.props;
        this.isDataSourceChanged(dataSource);
        this.convertDataFromFields(fields, dataSource || {}); // data to fields
        common_1.addLabelStyleWidth(labelWidth, labelDirection, this.id);
        return (React.createElement(antd_1.Spin, { spinning: this.props.spinning },
            React.createElement("form", { onSubmit: this.onSubmit, id: this.id }, fields.map((field, idx) => {
                const key = `row_${idx}`;
                const display = field.display === undefined ? true : field.display;
                const type = field.type || 'field';
                if (!display)
                    return null;
                return type === 'field'
                    ? (React.createElement(Row_1.default, Object.assign({ key: key }, field, { data: this.data, validation: this.validation, labelDirection: labelDirection, onChange: this.onChange })))
                    : (React.createElement(FooterButtons_1.default, Object.assign({ key: key }, field, { onButtonClick: this.onButtonClick })));
            }))));
    }
}
exports.default = RJForm;
RJForm.defaultProps = {
    spinning: false,
    validateOnChange: true,
    dataSource: {},
    extendValidators: [],
    extendFields: [],
    fields: [],
    labelDirection: 'horizontal',
    labelWidth: 80,
};


/***/ }),

/***/ "./Form/utils/FormValidator.ts":
/*!*************************************!*\
  !*** ./Form/utils/FormValidator.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const common_1 = __webpack_require__(/*! ./common */ "./Form/utils/common.ts");
class Validation {
    constructor() {
        this.validators = {
            // 必填
            required: {
                validator: (value) => common_1.notEmptyValue(value) && value.length > 0,
                errorMsg: '必填',
            },
            min_length: {
                validator: (value, length) => value && value.length >= length,
                errorMsg: (length) => `长度不小于${length}`,
            },
            max_length: {
                validator: (value, length) => value && value.length <= length,
                errorMsg: (length) => `长度不大于${length}`,
            },
            length: {
                validator: (value, length) => value && value.length === length,
                errorMsg: (length) => `长度必须为${length}`,
            },
            // 手机
            mobile: {
                validator: (value) => /^1\d{10}/.test(value),
                errorMsg: '请输入正确11位手机号',
            },
            // 数字
            number: {
                validator: (value) => /\d/.test(value),
                errorMsg: '必须位数字格式',
            },
            // 是否整数
            int: {
                validator: (value) => !/\D/.test(value),
                errorMsg: '必须为整数',
            },
            // 正数
            positive_number: {
                validator: (value) => parseFloat(value) > 0,
                errorMsg: '必须为正数',
            },
            // 不为负数
            not_negative: {
                validator: (value) => parseFloat(value) >= 0,
                errorMsg: '不能为负数',
            },
            // 不小于
            min: {
                validator: (value, minValue) => parseFloat(value) >= minValue,
                errorMsg: (minValue) => `必须大于或等于${minValue}`,
            },
            // 大于
            more_than: {
                validator: (value, minValue) => parseFloat(value) > minValue,
                errorMsg: (minValue) => `必须大于${minValue}`,
            },
            // 不能大于
            max: {
                validator: (value, maxValue) => parseFloat(value) <= maxValue,
                errorMsg: (maxValue) => `必须小于或等于${maxValue}`,
            },
            // 小于
            less_than: {
                validator: (value, maxValue) => parseFloat(value) < maxValue,
                errorMsg: (maxValue) => `必须小于${maxValue}`,
            },
            // price
            price: {
                validator: (value) => {
                    if (!/\d/.test(value))
                        return false;
                    const stringValue = value.toString();
                    if (stringValue.indexOf('.') !== -1) {
                        const p = stringValue.split('.');
                        if (p.length > 2)
                            return false;
                        if (p[1].length > 2)
                            return false;
                    }
                    return true;
                },
                errorMsg: '必须要符合货币格式,如 10.23',
            },
            price_format: {
                validator: (value, length = 8) => {
                    let stringValue = '';
                    if (common_1.notEmptyValue(value))
                        stringValue = value.toString();
                    const reg = new RegExp(`^(\\+|\\-)?[0-9]{1,${length}}(\\.[0-9]{1,2})?$`);
                    return reg.test(stringValue);
                },
                errorMsg: (length = 6) => `最大${length}位整数，小数不超过2位`,
            },
            /* 整数部分最大值 */
            positive_max_length: {
                validator: (value, length) => {
                    if (parseFloat(value) !== value)
                        return false;
                    const stringValue = value.toString();
                    if (stringValue && stringValue.length > length) {
                        if (stringValue.indexOf('.') !== -1) {
                            const p = stringValue.split('.');
                            if (p[0].length > length)
                                return false;
                        }
                        else if (stringValue.length > length) {
                            return false;
                        }
                    }
                    return true;
                },
                errorMsg: (length) => `整数长度不大于${length}`,
            },
            telephone: {
                validator: (value) => /^0\d{2,3}-\d{7,8}$/.test(value),
                errorMsg: '需符合（区号-电话号码）的格式',
            },
            // 电子邮箱后缀
            email_suffix: {
                validator: (value) => {
                    if (!value)
                        return false;
                    const reg = /^@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                    return reg.test(value);
                },
                errorMsg: '请输入正确的邮箱后缀(包括@)',
            },
            // 电子邮箱
            email: {
                validator: (value) => {
                    const reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                    return reg.test(value);
                },
                errorMsg: '请输入正确的邮箱',
            },
            // 用户名
            username: {
                validator: (value) => /^([a-zA-Z0-9_-]{5,20})$/.test(value),
                errorMsg: '由长度为5～20位的数字、字母组成',
            },
            // 密码
            password: {
                validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S][^\u4e00-\u9fa5]{6,20}$/.test(value),
                errorMsg: '由长度为6～16位的数字、大小字母以及符号组成',
            },
            // 身份证
            id_card: {
                validator: (value) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value),
                errorMsg: '身份证号码不符合',
            },
        };
    }
    extendValidators(validators) {
        validators.forEach((validator) => {
            const { name } = validator, rest = __rest(validator, ["name"]);
            this.validators[name] = rest;
        });
    }
    check(v, rules) {
        let value = v;
        let success = { validated: true, msg: '' };
        if (!rules || !(rules instanceof Array)) {
            return success;
        }
        if (typeof value === 'string') {
            value = value.trim();
        }
        rules.some(rule => {
            var _a;
            let result = true;
            let validator;
            let sRule = [];
            if (rule === 'required') {
                if (common_1.notEmptyValue(value))
                    value = value.toString();
                validator = this.validators[rule];
                result = validator.validator(value);
            }
            else if (common_1.notEmptyValue(value)) {
                if (rule.indexOf(':') !== -1) {
                    sRule = rule.split(':');
                    validator = this.validators[sRule[0]];
                    result = validator.validator(value, sRule[1]);
                }
                else {
                    validator = this.validators[rule];
                    result = validator.validator(value);
                }
            }
            if (!result) {
                const err = (_a = validator) === null || _a === void 0 ? void 0 : _a.errorMsg;
                success = {
                    validated: false,
                    msg: typeof err === 'function' ? err(sRule[1]) : err,
                };
                return true;
            }
            return false;
        });
        return success;
    }
}
exports.default = new Validation();


/***/ }),

/***/ "./Form/utils/common.ts":
/*!******************************!*\
  !*** ./Form/utils/common.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
exports.notEmptyValue = (value) => (value !== '' && value !== undefined && value !== null);
exports.simpleClone = (data) => JSON.parse(JSON.stringify(data));
exports.removeLabelStyleWidth = (id) => {
    const attributeName = `form-label-width-${id}`;
    const DOM = document.getElementById(attributeName);
    if (DOM)
        document.body.removeChild(DOM);
    return attributeName;
};
exports.addLabelStyleWidth = (width, labelDirection, id) => {
    const attributeName = exports.removeLabelStyleWidth(id);
    if (labelDirection === 'horizontal') {
        const STYLE = document.createElement('style');
        STYLE.id = attributeName;
        STYLE.innerHTML = `#${id} .ant-form-item-label { width: ${width}px; }`;
        document.body.appendChild(STYLE);
    }
};
/**
 * 根据value数组获取数组对象[{label, value}]的多个label值
 */
exports.getItemLabelsByValue = (items, value) => {
    const labels = [];
    value.forEach(val => {
        const findItem = items.find(item => item.value === val);
        if (findItem) {
            labels.push(findItem.label);
        }
    });
    return labels.join('，');
};
/**
 * 根据value获取数组对象[{label, value}]的label值
 * @param items
 * @param value
 * @param mode
 * @return {any}
 */
exports.getItemLabelByValue = (items, value, mode) => {
    let newItems = items;
    if (!Array.isArray(items)) {
        newItems = [];
        Object.keys(items).forEach(key => {
            const group = items[key];
            if (Array.isArray(group)) {
                newItems = [...newItems, ...group];
            }
        });
    }
    if (!mode) {
        const found = newItems.filter(item => item.value === value);
        if (found.length > 0) {
            return found[0].label;
        }
    }
    else if (value && Array.isArray(value)) {
        const found = newItems.filter(item => value.indexOf(item.value) !== -1);
        if (found.length > 0) {
            return found.map(foundItem => foundItem.label).join(', ');
        }
    }
    return '';
};
/**
 * get Target value
 * @param e
 */
exports.getTargetValue = (e) => {
    var _a;
    const target = e && e.target;
    let value;
    if (target instanceof HTMLElement || exports.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
        value = target.value;
    }
    else {
        value = e;
    }
    return value;
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ }),

/***/ "memoize-one":
/*!******************************!*\
  !*** external "memoize-one" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_memoize_one__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL0F1dG9Db21wbGV0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvQ2FzY2FkZXIudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvQ2hlY2tib3gudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvRGF0ZXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9JbnB1dE51bWJlci50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9JbnB1dFBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL1BpY1ByZXZpZXcuc2Nzcz9hZDBkIiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvUGljUHJldmlldy50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9SYWRpby50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9SYW5nZXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9SZW5kZXIudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL1N3aXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9UZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9UaW1lcGlja2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL1VwbG9hZC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9Gb290ZXJCdXR0b25zL0J1dHRvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0Zvb3RlckJ1dHRvbnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9Gb3JtL2luZGV4LnNjc3M/MTBlZSIsIndlYnBhY2s6Ly8vLi9Gb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL3V0aWxzL0Zvcm1WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWVtb2l6ZS1vbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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c291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcImF4aW9zXCIpLCByZXF1aXJlKFwibWVtb2l6ZS1vbmVcIiksIHJlcXVpcmUoXCJtb21lbnRcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJhbnRkXCIsIFwiYXhpb3NcIiwgXCJtZW1vaXplLW9uZVwiLCBcIm1vbWVudFwiLCBcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwiYXhpb3NcIiksIHJlcXVpcmUoXCJtZW1vaXplLW9uZVwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcImFudGRcIl0sIHJvb3RbXCJheGlvc1wiXSwgcm9vdFtcIm1lbW9pemUtb25lXCJdLCByb290W1wibW9tZW50XCJdLCByb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21lbW9pemVfb25lX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbW9tZW50X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRm9ybS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZFxuICBwcm9wczoge1xuICAgIGRhdGFTb3VyY2U6IGFueSxcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShwcm9wcy5uYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZShwcm9wcy5uYW1lLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wcy5wcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPEF1dG9Db21wbGV0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgLz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdhbnRkL2VzL2J1dHRvbidcbi8vIGltcG9ydCAnYW50ZC9lcy9idXR0b24vc3R5bGUnXG5cbmltcG9ydCB7IEJ1dHRvblR5cGUgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGRhdGE6IGFueSxcbiAgcHJvcHM6IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgdHlwZTogQnV0dG9uVHlwZSxcbiAgICBvbkNsaWNrOiAoZGF0YTogT2JqZWN0KSA9PiBhbnksXG4gICAgW25hbWU6IHN0cmluZ106IGFueSxcbiAgfVxuICBbbmFtZTogc3RyaW5nXTogYW55XG59XG5cbmNvbnN0IGJ1dHRvblR5cGVzOiBBcnJheTxCdXR0b25UeXBlPiA9IFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2RhbmdlcicsICdsaW5rJywgJ2dob3N0J11cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGxhYmVsLCBkYXRhIH0gPSBwcm9wc1xuICBjb25zdCB7XG4gICAgdHlwZSA9ICdkZWZhdWx0JyxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgICBvbkNsaWNrLFxuICAgIGFkZG9uLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzLnByb3BzXG5cbiAgbGV0IGJ1dHRvblR5cGU6IEJ1dHRvblR5cGUgPSAnZGVmYXVsdCdcbiAgY29uc3QgaW5kZXggPSBidXR0b25UeXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0eXBlKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgYnV0dG9uVHlwZSA9IGJ1dHRvblR5cGVzW2luZGV4XVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICB0eXBlPXtidXR0b25UeXBlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25UeXBlfSAke2NsYXNzTmFtZX1gfVxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhkYXRhKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXNjYWRlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgQ2FzY2FkZXIgZnJvbSAnYW50ZC9lcy9jYXNjYWRlcidcbi8vIGltcG9ydCAnYW50ZC9lcy9jYXNjYWRlci9zdHlsZSdcblxuZnVuY3Rpb24gZ2V0Q2FzY2FkZXJMYWJlbChvcmlnaW5hbFZhbHVlLCBjdXJPcHRpb25zLCB2YWx1ZUluZGV4LCBsYWJlbEFycikge1xuICBsZXQgaW5kZXggPSB2YWx1ZUluZGV4XG4gIGlmIChvcmlnaW5hbFZhbHVlICYmIGluZGV4IDwgb3JpZ2luYWxWYWx1ZS5sZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wID0gY3VyT3B0aW9ucy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gb3JpZ2luYWxWYWx1ZVt2YWx1ZUluZGV4XSlcbiAgICBpZiAodGVtcCkge1xuICAgICAgbGFiZWxBcnIucHVzaCh0ZW1wLmxhYmVsKVxuICAgIH1cbiAgICBpZiAodGVtcCAmJiB0ZW1wLmNoaWxkcmVuKSB7XG4gICAgICBpbmRleCArPSAxXG4gICAgICByZXR1cm4gZ2V0Q2FzY2FkZXJMYWJlbChcbiAgICAgICAgb3JpZ2luYWxWYWx1ZSxcbiAgICAgICAgdGVtcC5jaGlsZHJlbixcbiAgICAgICAgdmFsdWVJbmRleCxcbiAgICAgICAgbGFiZWxBcnIsXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsQXJyLmpvaW4oJyAvICcpXG4gIH1cblxuICByZXR1cm4gbGFiZWxBcnIuam9pbignIC8gJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzY2FkZXJGaWVsZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHsgcmVhZE9ubHksIHZhbHVlLCBuYW1lIH0gPSBwcm9wc1xuICBjb25zdCB7IG9wdGlvbnMsIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciA9ICfor7fpgInmi6knIH0gPSBwcm9wcy5wcm9wc1xuXG4gIGNvbnN0IGNoYW5nZSA9IChzZWxlY3RlZFZhbHVlOiBhbnksIHNlbGVjdGVkT3B0aW9uczogYW55KSA9PiB7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCBzZWxlY3RlZFZhbHVlLCBzZWxlY3RlZE9wdGlvbnMpXG4gICAgfVxuICAgIHByb3BzLm9uQ2hhbmdlKG5hbWUsIHNlbGVjdGVkVmFsdWUpXG4gIH1cblxuICBjb25zdCB7IGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wcy5wcm9wc1xuXG4gIGlmICghcmVhZE9ubHkpIHtcbiAgICByZXR1cm4gPENhc2NhZGVyIHsuLi5yZXN0fSBvbkNoYW5nZT17Y2hhbmdlfSB2YWx1ZT17dmFsdWV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgfVxuXG4gIHJldHVybiBnZXRDYXNjYWRlckxhYmVsKHZhbHVlLCBvcHRpb25zLCAwLCBbXSlcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0SXRlbUxhYmVsQnlWYWx1ZSwgZ2V0VGFyZ2V0VmFsdWUsIG5vdEVtcHR5VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94RmllbGQocHJvcHM6IGFueSkge1xuICBjb25zdCB7XG4gICAgdmFsdWUsIHJlYWRPbmx5LCBvbkNoYW5nZSwgbmFtZSxcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucyA9IFtdLCBjaGVja0FsbEFibGUgPSBmYWxzZSB9ID0gcHJvcHMucHJvcHNcblxuICAvLyDlhajpgIlcbiAgY29uc3Qgb25DaGVja0FsbENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IFtdXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIG9wdGlvbnMuZm9yRWFjaChpdGVtID0+IG5ld1ZhbHVlLnB1c2goaXRlbS52YWx1ZSkpXG4gICAgfVxuICAgIG9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuXG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBpc0NoZWNrZWRBbGwgPSAodmFsdWVzPzogYW55W10pID0+IChcbiAgICBub3RFbXB0eVZhbHVlKHZhbHVlcykgJiYgdmFsdWVzLmxlbmd0aCA9PT0gb3B0aW9ucy5sZW5ndGhcbiAgKVxuXG4gIGNvbnN0IGNoYW5nZSA9ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUodGFyZ2V0KVxuICAgIG9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHMucHJvcHNcblxuICByZXR1cm4gcmVhZE9ubHkgPyAoXG4gICAgZ2V0SXRlbUxhYmVsQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSlcbiAgKSA6IChcbiAgICA8PlxuICAgICAge2NoZWNrQWxsQWJsZSAmJiAoXG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZEFsbCh2YWx1ZSl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hlY2tBbGxDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICDlhajpgIkgJm5ic3A7XG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICApfVxuICAgICAgPENoZWNrYm94Lkdyb3VwXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgRk9STUFUID0gJ1lZWVktTU0tREQnXG5cbiAgRk9STUFUX1RJTUUgPSAnWVlZWS1NTS1ERCBISDptbSdcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSAhdmFsdWUgPyB2YWx1ZSA6IHZhbHVlLnZhbHVlT2YoKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICByZWFkT25seSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmb3JtYXQsIGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIGNvbnN0IEZPUk1BVCA9IGZvcm1hdCB8fCAocmVzdC5zaG93VGltZSA/IHRoaXMuRk9STUFUX1RJTUUgOiB0aGlzLkZPUk1BVClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gdmFsdWUgPyBtb21lbnQodmFsdWUpIDogdW5kZWZpbmVkXG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gKChmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUuZm9ybWF0KGZvcm1hdCkpIHx8IG51bGwpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e0ZPUk1BVH1cbiAgICAgICAgICAgIHZhbHVlPXtmaWVsZFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgeyBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICBzdGF0aWNWYWx1ZSA9ICh2YWx1ZTogYW55LCBzdWZmaXg6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbFxuXG4gICAgbGV0IHN0cmluZyA9IHZhbHVlXG4gICAgaWYgKHN1ZmZpeCkgc3RyaW5nID0gYCR7dmFsdWV9ICR7c3VmZml4fWBcbiAgICBpZiAocHJlZml4KSBzdHJpbmcgPSBgJHtwcmVmaXh9ICR7c3RyaW5nfWBcblxuICAgIHJldHVybiBzdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSwgcmVhZE9ubHksIHR5cGUsIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgYWRkb24sXG4gICAgICBzdWZmaXgsXG4gICAgICBwcmVmaXgsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlIHx8ICdvZmYnXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHRoaXMuc3RhdGljVmFsdWUodmFsdWUsIHN1ZmZpeCwgcHJlZml4KVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHN1ZmZpeD17c3VmZml4fVxuICAgICAgICAgICAgcHJlZml4PXtwcmVmaXh9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8SW5wdXQgey4uLnByb3BzfSB0eXBlPVwibnVtYmVyXCIgLz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8SW5wdXQgey4uLnByb3BzfSB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICApXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEljb24sIFNwaW4gfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgJy4vUGljUHJldmlldy5zY3NzJ1xuXG5jb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdFxuXG50eXBlIFByb3BzID0ge1xuICBzaG93TGlzdDogYm9vbGVhbixcbiAgY3VycmVudDogc3RyaW5nLFxuICB1cmw6IHN0cmluZ1tdIHwgc3RyaW5nLFxuICBzdHlsZT86IE9iamVjdFxuICBvbkhpZGU/OiBWb2lkRnVuY3Rpb25cbn1cblxuLyoqXG4gKiDlm77niYfpooTop4hcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGljUHJldmlld2VyKFxuICB7XG4gICAgc2hvd0xpc3QgPSB0cnVlLFxuICAgIHVybCA9IFtdLFxuICAgIHN0eWxlID0ge30sXG4gICAgY3VycmVudCA9ICcnLFxuICAgIG9uSGlkZSxcbiAgfTogUHJvcHMsXG4pIHtcbiAgbGV0IGltYWdlcyA9IFtdXG4gIGlmICh1cmwpIHtcbiAgICBpbWFnZXMgPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IFt1cmxdIDogdXJsXG4gIH1cbiAgaW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihpdGVtID0+IGl0ZW0pXG5cbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShjdXJyZW50KVxuICBjb25zdCBbZGVnLCBzZXREZWddID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2lzSW5pdCwgc2V0SXNJbml0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAob25IaWRlKSBvbkhpZGUoKVxuICAgIHNldFZpc2libGUoZmFsc2UpXG4gIH1cbiAgY29uc3QgaGFuZGxlU2hvdyA9ICh0YXJnZXRTcmM6IHN0cmluZykgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgc2V0U3JjKHRhcmdldFNyYylcbiAgfVxuXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGxldCBpZHggPSBpbWFnZXMuaW5kZXhPZihzcmMpXG4gICAgaWR4IC09IDFcbiAgICBpZHggPSBpZHggPCAwID8gaW1hZ2VzLmxlbmd0aCAtIDEgOiBpZHhcbiAgICBoYW5kbGVTaG93KGltYWdlc1tpZHhdKVxuICAgIC8vIHNldERlZygwKVxuICB9XG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGxldCBpZHggPSBpbWFnZXMuaW5kZXhPZihzcmMpXG4gICAgaWR4ICs9IDFcbiAgICBpZHggPSBpZHggPj0gaW1hZ2VzLmxlbmd0aCA/IDAgOiBpZHhcbiAgICBoYW5kbGVTaG93KGltYWdlc1tpZHhdKVxuICAgIC8vIHNldERlZygwKVxuICB9XG5cbiAgY29uc3Qgcm90YXRpb24gPSAoKSA9PiB7XG4gICAgc2V0RGVnKGRlZyArIDEpXG4gIH1cblxuICBjb25zdCByb3RhdGlvbkJhY2sgPSAoKSA9PiB7XG4gICAgc2V0RGVnKGRlZyAtIDEpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGlmICghc2hvd0xpc3QgJiYgIWlzSW5pdCkge1xuICAgIGhhbmRsZVNob3coY3VycmVudClcbiAgICBzZXRJc0luaXQodHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TGlzdFxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtcm93XCI+XG4gICAgICAgICAge2ltYWdlc1xuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaWR4KTogYW55ID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7aXRlbX1fJHtpZHh9YFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpZHh9XG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtYm94XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coaXRlbSl9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IGhhbmRsZVNob3coaXRlbSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW19IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cblxuICAgICAge3Zpc2libGVcbiAgICAgICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXZpZXdlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1zcGluIHJlYWN0LWNvbmYtZm9ybS1waWMtd2hpdGUtc3BpblwiPjxTcGluIHNwaW5uaW5nPXtsb2FkaW5nfSB0aXA9XCJsb2FkaW5nLi4uXCIgc2l6ZT1cImxhcmdlXCIgLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtY29udGFpbmVyXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1idXR0b25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17cHJldn0+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17bmV4dH0+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtyb3RhdGlvbn0+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJyZWRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtyb3RhdGlvbkJhY2t9PlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidW5kb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cInByZXZpbWdcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoJHtkZWcgKiA5MH1kZWcpYCwgb3BhY2l0eTogbG9hZGluZyA/IDAgOiAxIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWltZy1jb250YWluZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEl0ZW1MYWJlbEJ5VmFsdWUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb0ZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHJlYWRPbmx5LFxuICAgIG9uQ2hhbmdlLFxuICAgIG5hbWUsXG4gICAgc3R5bGUgPSB7fSxcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucyA9IFtdIH0gPSBwcm9wcy5wcm9wc1xuXG4gIGNvbnN0IGNoYW5nZSA9ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUodGFyZ2V0KVxuICAgIG9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHMucHJvcHNcblxuICByZXR1cm4gcmVhZE9ubHkgPyAoXG4gICAgZ2V0SXRlbUxhYmVsQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSlcbiAgKSA6IChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8UmFkaW8uR3JvdXBcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2NoYW5nZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnYW50ZC9lcy9kYXRlLXBpY2tlcidcbi8vIGltcG9ydCAnYW50ZC9lcy9kYXRlLXBpY2tlci9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgc2ltcGxlQ2xvbmUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdZWVlZLU1NLUREJ1xuXG4gIEZPUk1BVF9USU1FID0gJ1lZWVktTU0tREQgSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBzaG93VGltZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZVswXSkpIHtcbiAgICAgIGlmICghc2hvd1RpbWUpIHtcbiAgICAgICAgdmFsdWUgPSBbXG4gICAgICAgICAgbW9tZW50KG1vbWVudCh2YWx1ZVswXSkuZm9ybWF0KCdZWVlZLU1NLUREIDAwOjAwOjAwJykpLnZhbHVlT2YoKSxcbiAgICAgICAgICBtb21lbnQobW9tZW50KHZhbHVlWzFdKS5mb3JtYXQoJ1lZWVktTU0tREQgMjM6NTk6NTknKSkudmFsdWVPZigpLFxuICAgICAgICBdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IFttb21lbnQodmFsdWVbMF0pLnZhbHVlT2YoKSwgbW9tZW50KHZhbHVlWzFdKS52YWx1ZU9mKCldXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCduYW1lJywgbmFtZSwgdmFsdWUpXG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgc3RhdGljVGltZSA9ICh2YWx1ZSwgRk9STUFUKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KEZPUk1BVClcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHNob3dUaW1lID0gKHRpbWVWYWx1ZTogYW55W10sIEZPUk1BVDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRpbWVWYWx1ZVswXSAmJiB0aW1lVmFsdWVbMV0pIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnN0YXRpY1RpbWUodGltZVZhbHVlWzBdLCBGT1JNQVQpfSB+ICR7dGhpcy5zdGF0aWNUaW1lKHRpbWVWYWx1ZVsxXSwgRk9STUFUKX1gXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHksIHByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmb3JtYXQsIGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIGNvbnN0IEZPUk1BVCA9IGZvcm1hdCB8fCAocmVzdC5zaG93VGltZSA/IHRoaXMuRk9STUFUX1RJTUUgOiB0aGlzLkZPUk1BVClcblxuICAgIGxldCB0aW1lVmFsdWUgPSBbbnVsbCwgbnVsbF1cbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JyAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aW1lVmFsdWUgPSBzaW1wbGVDbG9uZSh2YWx1ZSlcbiAgICAgIHRpbWVWYWx1ZVswXSA9IG1vbWVudCh2YWx1ZVswXSlcbiAgICAgIHRpbWVWYWx1ZVsxXSA9IG1vbWVudCh2YWx1ZVsxXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gdGhpcy5zaG93VGltZSh0aW1lVmFsdWUsIEZPUk1BVClcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEYXRlUGlja2VyLlJhbmdlUGlja2VyXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIGZvcm1hdD17Rk9STUFUfVxuICAgICAgICAgICAgdmFsdWU9e3RpbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpZWxkSXRlbVQgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0gRmllbGRJdGVtVCAmIHtcbiAgZGF0YTogT2JqZWN0XG4gIHJlbmRlcjogKGRhdGE6T2JqZWN0KSA9PiBhbnlcbn1cblxuY29uc3QgUmVuZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHNcbiAgY29uc3QgeyByZW5kZXIgfSA9IHByb3BzLnByb3BzXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXInLCB0eXBlb2YgcmVuZGVyLCByZW5kZXIpXG4gIHJldHVybiB0eXBlb2YgcmVuZGVyID09PSAnZnVuY3Rpb24nID8gcmVuZGVyKGRhdGEpIDogKHJlbmRlciB8fCBudWxsKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBTZWxlY3QgZnJvbSAnYW50ZC9lcy9zZWxlY3QnXG4vLyBpbXBvcnQgJ2FudGQvZXMvc2VsZWN0L3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBnZXRJdGVtTGFiZWxCeVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmNvbnN0IHsgT3B0aW9uLCBPcHRHcm91cCB9ID0gU2VsZWN0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlICYmIGUudGFyZ2V0XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vdEVtcHR5VmFsdWUodGFyZ2V0Py52YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZVxuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyR3JvdXAgPSAoaXRlbXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgICAgIGl0ZW1zW2tleV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICA8T3B0aW9uIGtleT17aXRlbS52YWx1ZX0gdGl0bGU9e2l0ZW0ubGFiZWx9PlxuICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgPC9PcHRpb24+LFxuICAgICAgICApXG4gICAgICB9KVxuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIDxPcHRHcm91cCBsYWJlbD17a2V5fSBrZXk9e2tleX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L09wdEdyb3VwPixcbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSwgcHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyA9IFtdLFxuICAgICAgcGxhY2Vob2xkZXIgPSAn6K+36YCJ5oupJyxcbiAgICAgIHNob3dTZWFyY2ggPSB0cnVlLFxuICAgICAgb3B0aW9uRmlsdGVyUHJvcCA9ICd0aXRsZScsXG4gICAgICBhbGxvd0NsZWFyID0gdHJ1ZSxcbiAgICAgIGFkZG9uLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgeyBtb2RlIH0gPSByZXN0XG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IDxzcGFuIHN0eWxlPXt7IH19PntnZXRJdGVtTGFiZWxCeVZhbHVlKGl0ZW1zLCB2YWx1ZSwgbW9kZSl9PC9zcGFuPlxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPXtvcHRpb25GaWx0ZXJQcm9wID09PSAnbGFiZWwnID8gJ3RpdGxlJyA6IG9wdGlvbkZpbHRlclByb3B9XG4gICAgICAgICAgICBzaG93U2VhcmNoPXtzaG93U2VhcmNofVxuICAgICAgICAgICAgYWxsb3dDbGVhcj17YWxsb3dDbGVhcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS52YWx1ZSA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7ICFBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiB0aGlzLnJlbmRlckdyb3VwKGl0ZW1zKX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIGNoZWNrZWQpXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMucHJvcHMub25DbGljayh0aGlzLnByb3BzLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IG9uQ2xpY2ssIC4uLnJlc3QgfSA9IHRoaXMucHJvcHMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgY2hlY2tlZD17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm90RW1wdHlWYWx1ZSh0YXJnZXQ/LnZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlXG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSB8fCAnb2ZmJ1xuICAgIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/ICh2YWx1ZSB8fCBudWxsKVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IFRpbWVwaWNrZXIgZnJvbSAnYW50ZC9lcy90aW1lLXBpY2tlcidcbi8vIGltcG9ydCAnYW50ZC9lcy90aW1lLXBpY2tlci9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgc2ltcGxlQ2xvbmUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdISDptbSdcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdCA9IHRoaXMuRk9STUFUIH0gPSB0aGlzLnByb3BzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpXG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHN0YXRpY1RpbWUgPSAodmFsdWUsIEZPUk1BVCkgPT4ge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChGT1JNQVQpXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHksIHByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmb3JtYXQgPSB0aGlzLkZPUk1BVCwgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aW1lVmFsdWUgPSBub3RFbXB0eVZhbHVlKHZhbHVlKVxuICAgICAgPyBtb21lbnQoc2ltcGxlQ2xvbmUodmFsdWUpLCBmb3JtYXQpXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHRoaXMuc3RhdGljVGltZSh2YWx1ZSwgZm9ybWF0KVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIHZhbHVlPXt0aW1lVmFsdWV9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXBsb2FkLCBJY29uLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFBpY1ByZXZpZXcgZnJvbSAnLi9QaWNQcmV2aWV3J1xuXG4vKipcbiAqIFVwbG9hZFxuICogQHR5cGUge1hNTH1cbiAqL1xuY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICA8ZGl2PlxuICAgIDxJY29uIHR5cGU9XCJwbHVzXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPuS4iuS8oDwvZGl2PlxuICA8L2Rpdj5cbilcbmNvbnN0IHVwbG9hZEJ1dHRvblRleHQgPSAoXG4gIDxCdXR0b24+XG4gICAgPEljb24gdHlwZT1cInVwbG9hZFwiIC8+XG4gICAgJm5ic3A75LiK5LygXG4gIDwvQnV0dG9uPlxuKVxuXG50eXBlIFVwbG9hZEZpZWxkUHJvcHMgPSB7XG4gIHZhbHVlPzogQXJyYXk8YW55PixcbiAgbmFtZTogc3RyaW5nLFxuICByZWFkT25seT86IGJvb2xlYW4sXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55W10pID0+IHZvaWRcbiAgcHJvcHM6IHtcbiAgICBibG9iTmFtZTogc3RyaW5nLFxuICAgIG1heEZpbGVzOiBudW1iZXIsXG4gICAgbWF4RmlsZVNpemU6IG51bWJlcixcbiAgICBoZWlnaHRSYXRpbz86IG51bWJlcixcbiAgICB3aWR0aFJhdGlvPzogbnVtYmVyLFxuICAgIGhlYWRlcnM/OiBhbnksXG4gICAgbGlzdFR5cGU/OiAndGV4dCcgfCAncGljdHVyZScgfCAncGljdHVyZS1jYXJkJyxcbiAgICBmaWxlVHlwZTogc3RyaW5nLCAvLyDkuIrkvKDmlofku7bnsbvlnosgIGltZyAvIG90aGVyXG4gICAgc2hvd0Vycm9yTWVzc2FnZT86IGJvb2xlYW4sXG4gICAgb25DaGFuZ2U6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCxcbiAgICBvblVwbG9hZGVkPzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLFxuICAgIGdldFJlc3BvbnNlRGF0YT86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCAvLyDojrflj5bov5Tlm57nmoTmlbDmja5cbiAgICBhY3Rpb246IHN0cmluZyxcbiAgICBhZGRvbj86IGFueVxuICAgIHJlc3BvbnNlSGFuZGxlcjoge1xuICAgICAgdXJsOiAocmVzcG9uc2U6IGFueSkgPT4gc3RyaW5nXG4gICAgICBuYW1lOiAocmVzcG9uc2U6IGFueSkgPT4gc3RyaW5nXG4gICAgfVxuICB9XG59XG5cbnR5cGUgVXBsb2FkU3RhdGUgPSB7XG4gIHByZXZpZXdWaXNpYmxlOiBib29sZWFuLFxuICBwcmV2aWV3SW1hZ2U6IHN0cmluZ1xuICBlcnJvck1zZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWRGaWVsZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VXBsb2FkRmllbGRQcm9wcywgVXBsb2FkU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAvLyBwcm9wczoge1xuICAgIC8vICAgc2hvd0Vycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAvLyAgIG1heEZpbGVzOiA1LCAvLyDmnIDlpJrog73kuIrkvKDmlofku7bmlbBcbiAgICAvLyAgIG1heEZpbGVTaXplOiAxMCwgLy8g5pyA5aSn5LiK5Lyg5L2T56evXG4gICAgLy8gICBmaWxlVHlwZTogJ2ltZycsIC8vIOm7mOiupOS4iuS8oOWbvueJh1xuICAgIC8vIH0sXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBwcmV2aWV3VmlzaWJsZTogZmFsc2UsXG4gICAgcHJldmlld0ltYWdlOiAnJyxcbiAgICBlcnJvck1zZzogJycsXG4gIH1cblxuICBvbkNoYW5nZSA9IChpbmZvOiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnISEhISEh6L+b5YWlIG9uQ2hhbmdlICcpXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25VcGxvYWRlZCwgcmVzcG9uc2VIYW5kbGVyIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgbGV0IGZpbGVMaXN0ID0gWy4uLmluZm8uZmlsZUxpc3RdXG5cbiAgICBmaWxlTGlzdC5mb3JFYWNoKChmaWxlLCBpZHgpID0+IHtcbiAgICAgIGlmIChmaWxlLnJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgICAgICBmaWxlTGlzdFtpZHhdID0ge1xuICAgICAgICAgICAgLi4uZmlsZUxpc3RbaWR4XSxcbiAgICAgICAgICAgIHVybDogcmVzcG9uc2VIYW5kbGVyLnVybChmaWxlLnJlc3BvbnNlKSxcbiAgICAgICAgICAgIG5hbWU6IHJlc3BvbnNlSGFuZGxlci5uYW1lKGZpbGUucmVzcG9uc2UpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWxlTGlzdFtpZHhdID0ge1xuICAgICAgICAgICAgLi4uZmlsZUxpc3RbaWR4XSxcbiAgICAgICAgICAgIHVybDogZmlsZS5yZXNwb25zZS5oZWFkZXJzLmxvY2F0aW9uLFxuICAgICAgICAgICAgbmFtZTogZmlsZS5yZXNwb25zZS5maWxlbmFtZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWxlXG4gICAgfSlcblxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnByb3BzLmdldFJlc3BvbnNlRGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLnByb3BzLmdldFJlc3BvbnNlRGF0YShpbmZvLmZpbGUucmVzcG9uc2UpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICBmaWxlTGlzdCA9IFtdXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6IGluZm8uZmlsZT8ucmVzcG9uc2U/Lmludm9pY2U/Lm1lc3NhZ2UgfHwgJ+S4iuS8oOmUmeivrywg6K+36YeN6K+VIScgfSlcbiAgICB9IGVsc2UgaWYgKCFpbmZvLmZpbGUuc3RhdHVzKSB7XG4gICAgICAvLyDmlofku7botoXov4flpKflsI/miJblhbblroPkuI3mu6HotrPliY3nq6/pmZDliLbmnaHku7bmg4XlhrVcbiAgICAgIGZpbGVMaXN0ID0gZmlsZUxpc3Quc2xpY2UoMCwgZmlsZUxpc3QubGVuZ3RoIC0gMSlcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIGZpbGVMaXN0KVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZmlsZUxpc3QpXG4gICAgfVxuICAgIGlmIChvblVwbG9hZGVkKSB7XG4gICAgICBvblVwbG9hZGVkKGZpbGVMaXN0KVxuICAgIH1cbiAgfVxuXG4gIG9uUHJldmlldyA9IChmaWxlOiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1Zpc2libGU6IHRydWUsIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfSlcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1Zpc2libGU6IGZhbHNlLCBwcmV2aWV3SW1hZ2U6ICcnIH0pXG4gIH1cblxuICBjdXN0b21SZXF1ZXN0ID0gKFxuICAgIHtcbiAgICAgIGZpbGUsXG4gICAgICBvblN1Y2Nlc3MsXG4gICAgICBvbkVycm9yLFxuICAgICAgb25Qcm9ncmVzcyxcbiAgICB9LFxuICApID0+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIGFjdGlvbiB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbilcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChhY3Rpb24sIGZvcm1EYXRhLCB7XG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IG9uUHJvZ3Jlc3MsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgfHwge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSlcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LiK5Lyg5aSx6LSlIScgfSlcbiAgICAgICAgb25FcnJvcigpXG4gICAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBhYm9ydCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LiK5Lyg57uI5q2iIScgfSlcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgYmVmb3JlVXBsb2FkKGZpbGU6IGFueSwgdHlwZTogc3RyaW5nKSB7XG4gICAgLy8gY29uc29sZS5sb2coJyEhISEhIei/m+WFpSBiZWZvcmVVcGxvYWQgJylcbiAgICBjb25zdCB7IG1heEZpbGVTaXplID0gMTAgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICAvLyBpZiAoaGVpZ2h0UmF0aW8gJiYgd2lkdGhSYXRpbykgeyAvLyDpqozor4Hplb/lrr3mr5TkvotcbiAgICAvLyAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gYXdhaXQgZ2V0RmlsZURpbWVuc2lvbihmaWxlKVxuICAgIC8vICAgaWYgKGhlaWdodC93aWR0aCAhPT0gaGVpZ2h0UmF0aW8vd2lkdGhSYXRpbykge1xuICAgIC8vICAgICBtZXNzYWdlLmVycm9yKGDplb/lrr3mr5Tlv4XpobvmmK8gJHtoZWlnaHRSYXRpb30gLyAke3dpZHRoUmF0aW99YClcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIOmqjOivgeaWh+S7tuWkp+Wwj3NpemVcbiAgICBjb25zdCBmaWxlU2l6ZUxhcmdlciA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0ID4gbWF4RmlsZVNpemVcbiAgICBpZiAoZmlsZVNpemVMYXJnZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogYOaWh+S7tuS9k+enr+Wkp+Wwj+S4jei2hei/hyR7bWF4RmlsZVNpemV9TWAgfSlcbiAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoYOaWh+S7tuS9k+enr+Wkp+Wwj+S4jei2hei/hyR7bWF4RmlsZVNpemV9TWApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyDpqozor4Hmlofku7bmoLzlvI9cbiAgICBpZiAodHlwZSA9PT0gJ2ltZycpIHtcbiAgICAgIGNvbnN0IGlzSlBHID0gZmlsZS50eXBlXG4gICAgICBpZiAoaXNKUEcgPT09ICdpbWFnZS9qcGVnJyB8fCBpc0pQRyA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICfku4XmlK/mjIHkuIrkvKBqcGcvcG5n5qC85byP5Zu+54mHJyB9KVxuICAgICAgLy8gbWVzc2FnZS5lcnJvcign5LuF5pSv5oyB5LiK5LyganBnL3BuZ+agvOW8j+WbvueJhycpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUgPSBbXSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIG1heEZpbGVzID0gMTAsXG4gICAgICBibG9iTmFtZSA9ICdibG9iJyxcbiAgICAgIGZpbGVUeXBlID0gJ2ltZycsXG4gICAgICBzaG93RXJyb3JNZXNzYWdlID0gdHJ1ZSxcbiAgICAgIGxpc3RUeXBlID0gJ3BpY3R1cmUtY2FyZCcsXG4gICAgICBoZWFkZXJzID0ge30sXG4gICAgfSA9IHByb3BzXG4gICAgLy8gdmFsdWUgPSB2YWx1ZSB8fCBbXVxuXG5cbiAgICBjb25zdCBidXR0b24gPSBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcgPyB1cGxvYWRCdXR0b24gOiB1cGxvYWRCdXR0b25UZXh0XG4gICAgY29uc3QgZm9ybWF0VmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICBjb25zdCBpbWFnZXNVcmxzID0gW11cbiAgICBmb3JtYXRWYWx1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaW1hZ2VzVXJscy5wdXNoKGVsZW1lbnQ/LnVybClcbiAgICB9KVxuXG4gICAgZm9ybWF0VmFsdWUuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvcm1hdFZhbHVlW2lkeF0gPSB7XG4gICAgICAgICAgdWlkOiBgJHtpdGVtfV8ke2lkeH1gLFxuICAgICAgICAgIHVybDogaXRlbSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pXG5cbiAgICBjb25zdCB7IGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2VycicsIHRoaXMuc3RhdGUuZXJyb3JNc2csIHNob3dFcnJvck1lc3NhZ2UpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxVcGxvYWRcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBrZXk9e2Jsb2JOYW1lfVxuICAgICAgICAgIG5hbWU9e2Jsb2JOYW1lfVxuICAgICAgICAgIGhlYWRlcnM9e2hlYWRlcnN9XG4gICAgICAgICAgbGlzdFR5cGU9e2xpc3RUeXBlfVxuICAgICAgICAgIGZpbGVMaXN0PXtmb3JtYXRWYWx1ZX1cbiAgICAgICAgICBzaG93VXBsb2FkTGlzdFxuICAgICAgICAgIG9uQ2hhbmdlPXtmaWxlID0+IHRoaXMub25DaGFuZ2UoZmlsZSl9XG4gICAgICAgICAgYmVmb3JlVXBsb2FkPXtmaWxlID0+IHRoaXMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVUeXBlKX1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgb25QcmV2aWV3PXt0aGlzLm9uUHJldmlld31cbiAgICAgICAgICBjdXN0b21SZXF1ZXN0PXt0aGlzLmN1c3RvbVJlcXVlc3R9IC8qIOimhueblum7mOiupOeahOS4iuS8oOihjOS4uiAqL1xuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlLmxlbmd0aCA+PSBtYXhGaWxlcyB8fCByZWFkT25seSA/IG51bGwgOiBidXR0b259XG4gICAgICAgIDwvVXBsb2FkPlxuXG4gICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTXNnICYmIHNob3dFcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWVycm9yXCI+e3RoaXMuc3RhdGUuZXJyb3JNc2d9PC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMuc3RhdGUucHJldmlld1Zpc2libGUgJiYgKFxuICAgICAgICAgIDxQaWNQcmV2aWV3XG4gICAgICAgICAgICB1cmw9e2ltYWdlc1VybHN9XG4gICAgICAgICAgICBzaG93TGlzdD17ZmFsc2V9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgY3VycmVudD17dGhpcy5zdGF0ZS5wcmV2aWV3SW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWVsZEl0ZW1ULCBFeHRlbmRGaWVsZCB9IGZyb20gJy4uL2luZGV4LmQnXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4vUmVuZGVyJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCdcbmltcG9ydCBUaW1lcGlja2VyIGZyb20gJy4vVGltZXBpY2tlcidcbmltcG9ydCBSYW5nZXBpY2tlciBmcm9tICcuL1JhbmdlcGlja2VyJ1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyJ1xuaW1wb3J0IENhc2NhZGVyRmllbGQgZnJvbSAnLi9DYXNjYWRlcidcbmltcG9ydCBVcGxvYWRCb3ggZnJvbSAnLi9VcGxvYWQnXG5pbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gJy4vQXV0b0NvbXBsZXRlJ1xuaW1wb3J0IElucHV0UGFzc3dvcmQgZnJvbSAnLi9JbnB1dFBhc3N3b3JkJ1xuaW1wb3J0IElucHV0TnVtYmVyIGZyb20gJy4vSW5wdXROdW1iZXInXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmltcG9ydCBSYWRpbyBmcm9tICcuL1JhZGlvJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJ1xuXG5jb25zdCBtYXAgPSB7XG4gIHJlbmRlcjogUmVuZGVyLFxuICBzd2l0Y2g6IFN3aXRjaCxcbiAgaW5wdXQ6IElucHV0LFxuICBidXR0b246IEJ1dHRvbixcbiAgc2VsZWN0OiBTZWxlY3QsXG4gIHRpbWVwaWNrZXI6IFRpbWVwaWNrZXIsXG4gIHJhbmdlcGlja2VyOiBSYW5nZXBpY2tlcixcbiAgZGF0ZXBpY2tlcjogRGF0ZXBpY2tlcixcbiAgY2FzY2FkZXI6IENhc2NhZGVyRmllbGQsXG4gIGlucHV0UGFzc3dvcmQ6IElucHV0UGFzc3dvcmQsXG4gIGlucHV0TnVtYmVyOiBJbnB1dE51bWJlcixcbiAgdGV4dGFyZWE6IFRleHRhcmVhLFxuICByYWRpbzogUmFkaW8sXG4gIGNoZWNrYm94OiBDaGVja2JveCxcbiAgdXBsb2FkOiBVcGxvYWRCb3gsXG4gIGF1dG9Db21wbGV0ZTogQXV0b0NvbXBsZXRlLFxufVxuXG4vKiBBZGQgZXh0cmFjdCBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpZWxkcyA9IChleHRlbmRGaWVsZHM6IEFycmF5PEV4dGVuZEZpZWxkPikgPT4gKFxuICBleHRlbmRGaWVsZHMuZm9yRWFjaCgoZXh0ZW5kRmllbGQ6IEV4dGVuZEZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBjb21wb25lbnQgfSA9IGV4dGVuZEZpZWxkXG4gICAgbWFwW25hbWVdID0gY29tcG9uZW50XG4gIH0pXG4pXG5cbi8qIEZpZWxkIE1hcCAqL1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gKHR5cGU6IHN0cmluZykgPT4gbWFwW3R5cGVdIHx8IG51bGxcblxuLyogRmllbGQgTWFwcGluZyAqL1xudHlwZSBQcm9wcyA9IHsgZGF0YTogT2JqZWN0LCBvbkNoYW5nZTogYW55LCBuYW1lPzogc3RyaW5nLCB2YWx1ZTogYW55IH0gJiBGaWVsZEl0ZW1UXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0eXBlLCAuLi5yZXN0IH0gPSBwcm9wc1xuICBjb25zdCBDb21wb25lbnQgPSBnZXRDb21wb25lbnQodHlwZSlcbiAgcmV0dXJuIENvbXBvbmVudFxuICAgID8gPENvbXBvbmVudCB7Li4ucmVzdH0gLz5cbiAgICA6IG51bGxcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdhbnRkL2VzL2J1dHRvbidcbi8vIGltcG9ydCAnYW50ZC9lcy9idXR0b24vc3R5bGUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgQnV0dG9uVCwgRmllbGRJdGVtVCwgQnV0dG9uVHlwZSB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkcz86IEFycmF5PEZpZWxkSXRlbVQgfCBCdXR0b25UPlxuICBndXR0ZXI/OiBudW1iZXJcbiAgb25CdXR0b25DbGljaz86IChrZXk6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxuICBkYXRhPzogT2JqZWN0LFxufVxuXG5jb25zdCBidXR0b25UeXBlczogQXJyYXk8QnV0dG9uVHlwZT4gPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdkYW5nZXInLCAnbGluaycsICdnaG9zdCddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogUHJvcHMpOiBhbnkge1xuICBjb25zdCB7IGd1dHRlciA9IDE2LCBmaWVsZHMgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgZmllbGRzLm1hcCgoYnV0dG9uOiBCdXR0b25ULCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBrZXksXG4gICAgICAgIGxhYmVsID0gJycsXG4gICAgICAgIGRpc3BsYXkgPSB0cnVlLFxuICAgICAgfSA9IGJ1dHRvblxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHR5cGUgPSAnZGVmYXVsdCcsXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgICBvbkNsaWNrLFxuICAgICAgICBhZGRvbixcbiAgICAgICAgc3R5bGUgPSB7fSxcbiAgICAgICAgLi4ucmVzdFxuICAgICAgfSA9IGJ1dHRvbi5wcm9wcyB8fCB7fVxuXG4gICAgICBsZXQgYnV0dG9uVHlwZTogYW55XG4gICAgICBjb25zdCBpbmRleCA9IGJ1dHRvblR5cGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHR5cGUpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGJ1dHRvblR5cGUgPSBidXR0b25UeXBlc1tpbmRleF1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3QuYmxvY2spIHtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpc3BsYXlcbiAgICAgICAgPyAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICB7aWR4ID4gMCAmJiA8c3BhbiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tYnV0dG9uLXNwYWNlLWJldHdlZW5cIiBzdHlsZT17eyB3aWR0aDogZ3V0dGVyIH19IC8+fVxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPXtidXR0b25UeXBlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQnV0dG9uQ2xpY2soa2V5LCBvbkNsaWNrKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIHthZGRvbiAmJiBhZGRvbihwcm9wcy5kYXRhKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICAgICAgOiBudWxsXG4gICAgfSlcbiAgKVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuL0J1dHRvbkdyb3VwJ1xuaW1wb3J0IHsgRmllbGRzQ29uZlQgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBGaWVsZHNDb25mVCB7XG4gIG9uQnV0dG9uQ2xpY2s6ICh0eXBlOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pID0+IHZvaWRcbn1cblxuLy8gY29uc3QgYWxpZ25NYXAgPSB7XG4vLyAgIGxlZnQ6ICdmbGV4LXN0YXJ0Jyxcbi8vICAgY2VudGVyOiAnY2VudGVyJyxcbi8vICAgcmlnaHQ6ICdmbGV4LWVuZCcsXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlckJ1dHRvbnMocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzdHlsZSxcbiAgICBhbGlnbixcbiAgICB0eXBlLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogYWxpZ25NYXBbYWxpZ24gfHwgJ2NlbnRlciddLFxuICAgIHRleHRBbGlnbjogYWxpZ24gfHwgJ2NlbnRlcicsXG4gICAgLi4uc3R5bGUsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tYnV0dG9uLXdyYXBwZXJcIlxuICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZX1cbiAgICA+XG4gICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkZvb3RlckJ1dHRvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiB0cnVlLFxuICBzdHlsZToge30sXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29sLCBGb3JtIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBSb3cgZnJvbSAnYW50ZC9lcy9yb3cnXG4vLyBpbXBvcnQgQ29sIGZyb20gJ2FudGQvZXMvY29sJ1xuLy8gaW1wb3J0IEZvcm0gZnJvbSAnYW50ZC9lcy9mb3JtJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL3Jvdy9zdHlsZSdcbi8vIGltcG9ydCAnYW50ZC9lcy9jb2wvc3R5bGUnXG4vLyBpbXBvcnQgJ2FudGQvZXMvZm9ybS9zdHlsZSdcblxuaW1wb3J0IHsgREVGQVVMVF9HVVRURVIsIERFRkFVTFRfU1BBTiB9IGZyb20gJ0BGb3JtL2NvbmZpZydcbmltcG9ydCB7IEZpZWxkc0NvbmZULCBGaWVsZEl0ZW1UIH0gZnJvbSAnLi9pbmRleC5kJ1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnXG5cbnR5cGUgUHJvcHMgPSBGaWVsZHNDb25mVCAmIHtcbiAgLy8gb25CdXR0b25DbGljazogKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gYW55XG4gIGRhdGE6IE9iamVjdFxuICB2YWxpZGF0aW9uOiBPYmplY3RcbiAgbGFiZWxEaXJlY3Rpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcyk6IGFueSA9PiB7XG4gIGNvbnN0IHtcbiAgICBndXR0ZXIgPSBERUZBVUxUX0dVVFRFUixcbiAgICB0eXBlLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGZpZWxkcyxcbiAgICBkYXRhLFxuICAgIG9uQ2hhbmdlLFxuICAgIHZhbGlkYXRpb24sXG4gICAgbGFiZWxEaXJlY3Rpb24sXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke2xhYmVsRGlyZWN0aW9ufWB9PlxuXG4gICAgICAgIHsvKiDpnZ7mjInpkq7mjqfku7bnu4TlkIggKi99XG4gICAgICAgIHt0eXBlICE9PSAnRm9ybUJ1dHRvbnMnICYmIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZEl0ZW1UKSA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgc3BhbiA9IHByb3BzLnNwYW4gfHwgREVGQVVMVF9TUEFOLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheSA9IHRydWUsXG4gICAgICAgICAgfSA9IGZpZWxkXG5cbiAgICAgICAgICBjb25zdCB7IHJ1bGVzLCBhZGRvbiB9ID0gZmllbGQucHJvcHNcblxuICAgICAgICAgIHJldHVybiBkaXNwbGF5XG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPENvbCBrZXk9e2ZpZWxkLmtleX0gc3Bhbj17c3Bhbn0gb2Zmc2V0PXtvZmZzZXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZmllbGQuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e1snYnV0dG9uJywgJ3JlbmRlciddLmluZGV4T2YoZmllbGQudHlwZSkgPT09IC0xID8gbGFiZWwgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17cnVsZXMgJiYgcnVsZXMuaW5kZXhPZigncmVxdWlyZWQnKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17XG4gICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uW2tleV0gJiYgIXZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaGVscD17XG4gICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uW2tleV0gJiYgIXZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZGF0aW9uW2tleV0ubXNnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFba2V5XX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7YWRkb24gJiYgYWRkb24oZGF0YSl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3c+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHt9XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NQQU4gPSA4XG5leHBvcnQgY29uc3QgREVGQVVMVF9HVVRURVIgPSAxNlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSdcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgYWRkRmllbGRzIH0gZnJvbSAnQEZvcm0vRmllbGQnXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuL3V0aWxzL0Zvcm1WYWxpZGF0b3InXG5pbXBvcnQgUm93IGZyb20gJy4vUm93J1xuaW1wb3J0IHsgUkpGb3JtUHJvcHMsIEZpZWxkc0NvbmZUIH0gZnJvbSAnLi9pbmRleC5kJ1xuaW1wb3J0IHsgYWRkTGFiZWxTdHlsZVdpZHRoLCByZW1vdmVMYWJlbFN0eWxlV2lkdGggfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgRm9vdGVyQnV0dG9ucyBmcm9tICcuL0Zvb3RlckJ1dHRvbnMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG50eXBlIFN0YXRlID0ge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUkpGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJKRm9ybVByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNwaW5uaW5nOiBmYWxzZSxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgIGRhdGFTb3VyY2U6IHt9LFxuICAgIGV4dGVuZFZhbGlkYXRvcnM6IFtdLFxuICAgIGV4dGVuZEZpZWxkczogW10sXG4gICAgZmllbGRzOiBbXSxcbiAgICBsYWJlbERpcmVjdGlvbjogJ2hvcml6b250YWwnLCAvLyAndmVydGljYWwnIHwgJ2hvcml6b250YWwnXG4gICAgbGFiZWxXaWR0aDogODAsXG4gIH1cblxuICBtb3VudGVkID0gZmFsc2VcblxuICBkYXRhID0ge30gLy8gZm9ybeaVsOaNrlxuXG4gIGRhdGFDaGFuZ2VkID0gZmFsc2VcblxuICB2YWxpZGF0aW9uID0ge30gLy8g6aqM6K+B57uT5p6cXG5cbiAgLyoqXG4gICAqIGRldGVjdCBkYXRhIHNvdXJjZSB3aGV0aGVyIGlzIGNoYW5nZWRcbiAgICovXG4gIGlzRGF0YVNvdXJjZUNoYW5nZWQgPSBtZW1vaXplKChkYXRhU291cmNlOiB7fSkgPT4ge1xuICAgIC8vIFVTRUxFU1MgXCJ8fCBjb25kaXRpb25cIlxuICAgIC8vIGJlY2F1c2UgZGF0YVNvdXJjZSBpcyB0aGUga2V5IG9mIG1ldGhvZCBydW5uaW5nIGFuZCBuZWVkIHRvXG4gICAgLy8gdXNlIGl0IHRvIGF2b2lkIHRoYXQgZXNsaW50IHJlcG9ydCBhbiBlcnJvciBcImRhdGFTb3VyY2UgaXNcbiAgICAvLyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkXCJcbiAgICB0aGlzLmRhdGFDaGFuZ2VkID0gdHJ1ZSB8fCB0eXBlb2YgZGF0YVNvdXJjZSA9PT0gJ29iamVjdCdcblxuICAgIHJldHVybiB0aGlzLmRhdGFDaGFuZ2VkXG4gIH0pXG5cbiAgLyoqXG4gICAqIGdldCBkYXRhIGZyb20gZGF0YVNvdXJjZSBvciBsb2NhbCBkYXRhLFxuICAgKiBhbmQgYWxzbyBzZXQgdXAgXCJ2YWxpZGF0aW9uXCJcbiAgICovXG4gIGNvbnZlcnREYXRhRnJvbUZpZWxkcyA9IG1lbW9pemUoKGZpZWxkczogQXJyYXk8YW55PiwgZGF0YVNvdXJjZTogYW55KSA9PiB7XG4gICAgZmllbGRzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAocm93LnR5cGUgIT09ICdGb3JtQnV0dG9ucycpIHtcbiAgICAgICAgcm93LmZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSBmYWxzZSAmJiBpdGVtLnR5cGUgIT09ICdyZW5kZXInICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOaVsOaNrua6kChwcm9wcynlj5HnlJ/mlLnlj5jvvIzlj5bmlbDmja7mupDvvIzlkKbliJnlj5bmnKzlnLAoc3RhdGUpXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbS5rZXldID0gdGhpcy5kYXRhQ2hhbmdlZFxuICAgICAgICAgICAgICA/IGRhdGFTb3VyY2VbaXRlbS5rZXldXG4gICAgICAgICAgICAgIDogdGhpcy5kYXRhW2l0ZW0ua2V5XVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mupAocHJvcHMp5Y+R55Sf5pS55Y+Y77yaIOWmguaenOacieWAvO+8jOmHjeaWsOagoemqjO+8m+ayoeacieWAvO+8jOS4jeagoemqjFxuICAgICAgICAgICAgY29uc3QgaW5pdCA9IHRoaXMudmFsaWRhdGVGaWVsZChpdGVtLmtleSwgdGhpcy5kYXRhW2l0ZW0ua2V5XSwgaXRlbS5wcm9wcz8ucnVsZXMgfHwgW10pXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25baXRlbS5rZXldID0ge1xuICAgICAgICAgICAgICAuLi5pbml0LFxuICAgICAgICAgICAgICBydWxlczogaXRlbS5wcm9wcz8ucnVsZXMgfHwgW10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kYXRhQ2hhbmdlZCA9IGZhbHNlXG4gIH0pXG5cbiAgaWQgPSBgRk9STV8ke3BhcnNlSW50KChNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvU3RyaW5nKCksIDEwKS50b1N0cmluZygpfWBcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIC8vIGFkZCBleHRlbmRGaWVsZHMgaW50byBmb3JtIGdlbmVyYXRpbmcvbWFwcGluZ1xuICAgIGFkZEZpZWxkcyh0aGlzLnByb3BzLmV4dGVuZEZpZWxkcylcbiAgICBpZiAocHJvcHMuaWQpIHtcbiAgICAgIHRoaXMuaWQgPSBgRk9STV8ke3Byb3BzLmlkfWBcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlXG4gICAgLy8gZXh0ZW5kIHZhbGlkYXRvcnMgaW50byBGb3JtIFZhbGlkYXRvclxuICAgIEZvcm1WYWxpZGF0b3IuZXh0ZW5kVmFsaWRhdG9ycyh0aGlzLnByb3BzLmV4dGVuZFZhbGlkYXRvcnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICByZW1vdmVMYWJlbFN0eWxlV2lkdGgodGhpcy5pZClcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIGZpZWxkIGNoYW5nZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgb25DaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlkIGNoYW5nZScsIGtleSwgdmFsdWUpXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgW2tleV06IHZhbHVlLFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlICYmIHRoaXMudmFsaWRhdGlvbltrZXldKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgLi4uRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMpLFxuICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGtleSwgdmFsdWUsIHRoaXMuZGF0YSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSlcbiAgfVxuXG4gIC8qKlxuICAgKiDpqozor4HmiYDmnIlmaWVsZHNcbiAgICovXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGxldCB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgIGlmIChyb3cudHlwZSAhPT0gJ0Zvcm1CdXR0b25zJykge1xuICAgICAgICByb3cuZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmRpc3BsYXkgIT09IGZhbHNlICYmIGl0ZW0udHlwZSAhPT0gJ3JlbmRlcicgJiYgaXRlbS50eXBlICE9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXkgfSA9IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEZvcm1WYWxpZGF0b3IuY2hlY2sodmFsdWUsIHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzKVxuXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gICAgcmV0dXJuIHZhbGlkYXRlZFxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFN1Ym1pdFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25TdWJtaXQgPSAoZT86IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0Pik6IHZvaWQgPT4ge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuXG5cbiAgICBjb25zb2xlLmxvZygnc3VibWl0IGRhdGEnLCB0aGlzLmRhdGEpXG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN1Ym1pdCkgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogb24gUmVzZXRcbiAgICovXG4gIG9uUmVzZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZXNldCkgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBidXR0b24gY2xpY2tcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBvbkJ1dHRvbkNsaWNrID0gKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgdGhpcy5vblN1Ym1pdCgpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICB0aGlzLm9uUmVzZXQoKVxuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKHRoaXMuZGF0YSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5qCh6aqMXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBydWxlc1xuICAgKi9cbiAgdmFsaWRhdGVGaWVsZCA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZXM6IEFycmF5PHN0cmluZz4gPSBbXSkgPT4ge1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb25ba2V5XSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCBydWxlcylcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsaWRhdGVkOiB0cnVlLCBtc2c6ICcnIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsIGRhdGFTb3VyY2UsIGxhYmVsRGlyZWN0aW9uLCBsYWJlbFdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5pc0RhdGFTb3VyY2VDaGFuZ2VkKGRhdGFTb3VyY2UpXG4gICAgdGhpcy5jb252ZXJ0RGF0YUZyb21GaWVsZHMoZmllbGRzLCBkYXRhU291cmNlIHx8IHt9KSAvLyBkYXRhIHRvIGZpZWxkc1xuICAgIGFkZExhYmVsU3R5bGVXaWR0aChsYWJlbFdpZHRoLCBsYWJlbERpcmVjdGlvbiwgdGhpcy5pZClcblxuICAgIHJldHVybiAoXG4gICAgICA8U3BpbiBzcGlubmluZz17dGhpcy5wcm9wcy5zcGlubmluZ30+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBpZD17dGhpcy5pZH0+XG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZHNDb25mVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGByb3dfJHtpZHh9YFxuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IGZpZWxkLmRpc3BsYXkgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5kaXNwbGF5XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZSB8fCAnZmllbGQnXG4gICAgICAgICAgICBpZiAoIWRpc3BsYXkpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAnZmllbGQnXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dGhpcy52YWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgbGFiZWxEaXJlY3Rpb249e2xhYmVsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICA8Rm9vdGVyQnV0dG9uc1xuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1NwaW4+XG4gICAgKVxuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgVmFsaWRhdG9yVCwgVmFsaWRhdG9yQ2hpbGRULCBFeHRlbmRWYWxpZGF0b3IgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG5jbGFzcyBWYWxpZGF0aW9uIHtcbiAgdmFsaWRhdG9yczogVmFsaWRhdG9yVCA9IHtcbiAgICAvLyDlv4XloatcbiAgICByZXF1aXJlZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdKSA9PiBub3RFbXB0eVZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XloasnLFxuICAgIH0sXG4gICAgbWluX2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lsI/kuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lpKfkuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbGVuZ3RoOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogbnVtYmVyKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgLy8g5omL5py6XG4gICAgbW9iaWxlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjFcXGR7MTB9Ly50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnLFxuICAgIH0sXG4gICAgLy8g5pWw5a2XXG4gICAgbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiAvXFxkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75L2N5pWw5a2X5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaVtOaVsFxuICAgIGludDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gIS9cXEQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmlbTmlbAnLFxuICAgIH0sXG4gICAgLy8g5q2j5pWwXG4gICAgcG9zaXRpdmVfbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IDAsXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S4uuato+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3kuLrotJ/mlbBcbiAgICBub3RfbmVnYXRpdmU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IDAsXG4gICAgICBlcnJvck1zZzogJ+S4jeiDveS4uui0n+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3lsI/kuo5cbiAgICBtaW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqO5oiW562J5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5aSn5LqOXG4gICAgbW9yZV90aGFuOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5LiN6IO95aSn5LqOXG4gICAgbWF4OiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA8PSBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWwj+S6jlxuICAgIGxlc3NfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIHByaWNlXG4gICAgcHJpY2U6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCEvXFxkLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWU6IHN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBwOiBzdHJpbmdbXSA9IHN0cmluZ1ZhbHVlLnNwbGl0KCcuJylcbiAgICAgICAgICBpZiAocC5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAocFsxXS5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG76KaB56ym5ZCI6LSn5biB5qC85byPLOWmgiAxMC4yMycsXG4gICAgfSxcblxuICAgIHByaWNlX2Zvcm1hdDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBhbnkgPSA4KSA9PiB7XG4gICAgICAgIGxldCBzdHJpbmdWYWx1ZSA9ICcnXG4gICAgICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkgc3RyaW5nVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oXFxcXCt8XFxcXC0pP1swLTldezEsJHtsZW5ndGh9fShcXFxcLlswLTldezEsMn0pPyRgKVxuICAgICAgICByZXR1cm4gcmVnLnRlc3Qoc3RyaW5nVmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6IChsZW5ndGg6IGFueSA9IDYpID0+IGDmnIDlpKcke2xlbmd0aH3kvY3mlbTmlbDvvIzlsI/mlbDkuI3otoXov4cy5L2NYCxcbiAgICB9LFxuXG4gICAgLyog5pW05pWw6YOo5YiG5pyA5aSn5YC8ICovXG4gICAgcG9zaXRpdmVfbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodmFsdWUpICE9PSB2YWx1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpXG4gICAgICAgICAgICBpZiAocFswXS5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg5pW05pWw6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuXG4gICAgdGVsZXBob25lOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfpnIDnrKblkIjvvIjljLrlj7ct55S16K+d5Y+356CB77yJ55qE5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueuseWQjue8gFxuICAgIGVtYWlsX3N1ZmZpeDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2VcbiAgICAgICAgY29uc3QgcmVnID0gL15AKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566x5ZCO57yAKOWMheaLrEApJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueusVxuICAgIGVtYWlsOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZyA9IC9bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKyg/Oi5bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrueahOmCrueusScsXG4gICAgfSxcbiAgICAvLyDnlKjmiLflkI1cbiAgICB1c2VybmFtZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oW2EtekEtWjAtOV8tXXs1LDIwfSkkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Ne+9njIw5L2N55qE5pWw5a2X44CB5a2X5q+N57uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOWvhueggVxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZC4qKSg/PS4qXFxXLiopW2EtekEtWjAtOVxcU11bXlxcdTRlMDAtXFx1OWZhNV17NiwyMH0kLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Nu+9njE25L2N55qE5pWw5a2X44CB5aSn5bCP5a2X5q+N5Lul5Y+K56ym5Y+357uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOi6q+S7veivgVxuICAgIGlkX2NhcmQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC8oXlxcZHsxNX0kKXwoXlxcZHsxOH0kKXwoXlxcZHsxN30oXFxkfFh8eCkkKS8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+i6q+S7veivgeWPt+eggeS4jeespuWQiCcsXG4gICAgfSxcbiAgfVxuXG4gIGV4dGVuZFZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8RXh0ZW5kVmFsaWRhdG9yPik6IHZvaWQge1xuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBFeHRlbmRWYWxpZGF0b3IpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgLi4ucmVzdCB9ID0gdmFsaWRhdG9yXG4gICAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSByZXN0XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrKHY6IHN0cmluZyB8IG51bWJlciwgcnVsZXM6IHN0cmluZ1tdKSB7XG4gICAgbGV0IHZhbHVlID0gdlxuICAgIGxldCBzdWNjZXNzID0geyB2YWxpZGF0ZWQ6IHRydWUsIG1zZzogJycgfVxuXG4gICAgaWYgKCFydWxlcyB8fCAhKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm4gc3VjY2Vzc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKVxuICAgIH1cblxuICAgIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICAgICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yQ2hpbGRUXG4gICAgICBsZXQgc1J1bGU6IGFueVtdID0gW11cblxuICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgIHJlc3VsdCA9IHZhbGlkYXRvci52YWxpZGF0b3IodmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGlmIChydWxlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgICBzUnVsZSA9IHJ1bGUuc3BsaXQoJzonKVxuICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tzUnVsZVswXV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlLCBzUnVsZVsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbcnVsZV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IHZhbGlkYXRvcj8uZXJyb3JNc2dcbiAgICAgICAgc3VjY2VzcyA9IHtcbiAgICAgICAgICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1zZzogdHlwZW9mIGVyciA9PT0gJ2Z1bmN0aW9uJyA/IGVycihzUnVsZVsxXSkgOiBlcnIsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHN1Y2Nlc3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvbigpXG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiAoXG4gIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG4pXG5cbmV4cG9ydCBjb25zdCBzaW1wbGVDbG9uZSA9IDxUPihkYXRhOiBUKTogVCA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGBmb3JtLWxhYmVsLXdpZHRoLSR7aWR9YFxuICBjb25zdCBET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVOYW1lKVxuICBpZiAoRE9NKSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKERPTSlcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGlkKVxuXG4gIGlmIChsYWJlbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3QgU1RZTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgU1RZTEUuaWQgPSBhdHRyaWJ1dGVOYW1lXG4gICAgU1RZTEUuaW5uZXJIVE1MID0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9YFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU1RZTEUpXG4gIH1cbn1cblxuLyoqXG4gKiDmoLnmja52YWx1ZeaVsOe7hOiOt+WPluaVsOe7hOWvueixoVt7bGFiZWwsIHZhbHVlfV3nmoTlpJrkuKpsYWJlbOWAvFxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUxhYmVsc0J5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogQXJyYXk8YW55Pixcbik6IHN0cmluZyB8IEVsZW1lbnQgPT4ge1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW11cbiAgdmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGNvbnN0IGZpbmRJdGVtID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbClcbiAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgIGxhYmVscy5wdXNoKGZpbmRJdGVtLmxhYmVsKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGxhYmVscy5qb2luKCfvvIwnKVxufVxuXG4vKipcbiAqIOagueaNrnZhbHVl6I635Y+W5pWw57uE5a+56LGhW3tsYWJlbCwgdmFsdWV9XeeahGxhYmVs5YC8XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIG1vZGVcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1MYWJlbEJ5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogYW55LFxuICBtb2RlPzogYW55LFxuKTogc3RyaW5nID0+IHtcbiAgbGV0IG5ld0l0ZW1zID0gaXRlbXNcbiAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgIG5ld0l0ZW1zID0gW11cbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXA6IGFueSA9IGl0ZW1zW2tleV1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGdyb3VwKSkge1xuICAgICAgICBuZXdJdGVtcyA9IFsuLi5uZXdJdGVtcywgLi4uZ3JvdXBdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlmICghbW9kZSkge1xuICAgIGNvbnN0IGZvdW5kID0gbmV3SXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWUpXG4gICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmb3VuZFswXS5sYWJlbFxuICAgIH1cbiAgfSBlbHNlIGlmICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGZvdW5kID0gbmV3SXRlbXMuZmlsdGVyKGl0ZW0gPT4gdmFsdWUuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpXG4gICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmb3VuZC5tYXAoZm91bmRJdGVtID0+IGZvdW5kSXRlbS5sYWJlbCkuam9pbignLCAnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBnZXQgVGFyZ2V0IHZhbHVlXG4gKiBAcGFyYW0gZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGFyZ2V0VmFsdWUgPSAoZTogYW55KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgbGV0IHZhbHVlXG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGVcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21lbW9pemVfb25lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=
