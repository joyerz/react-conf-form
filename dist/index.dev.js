module.exports =
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
// import Datepicker from 'antd/es/date-picker'
// import 'antd/es/date-picker/style'
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
    }
    render() {
        const { value, readOnly, type, props, } = this.props;
        const { addon } = props, rest = __rest(props, ["addon"]);
        const autoComplete = props.autoComplete || 'off';
        return readOnly
            ? (value || null)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input, Object.assign({ placeholder: "\u8BF7\u8F93\u5165" }, rest, { type: type, value: value, onChange: this.onChange, autoComplete: autoComplete }))));
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
            ? `${moment(timeValue[0]).format(format)} ~ ${moment(timeValue[1]).format(format)}`
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
                    children.push(React.createElement(Option, { key: item.value }, item.label));
                });
                result.push(React.createElement(OptGroup, { label: key }, children));
            });
            return result;
        };
    }
    render() {
        const { value, readOnly, props } = this.props;
        const { items = [], placeholder = '请选择', showSearch = true, optionFilterProp = 'label', allowClear = true, addon } = props, rest = __rest(props, ["items", "placeholder", "showSearch", "optionFilterProp", "allowClear", "addon"]);
        return readOnly
            ? common_1.getItemLabelByValue(items, value)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Select, Object.assign({}, rest, { placeholder: placeholder, value: value, optionFilterProp: optionFilterProp, showSearch: showSearch, allowClear: allowClear, onChange: this.onChange }),
                    Object.prototype.toString.call(items) === '[Object Array]' && items.map(item => (React.createElement(Option, { key: item.value }, item.label))),
                    Object.prototype.toString.call(items) === '[Object Object]' && this.renderGroup(items))));
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
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Switch, { checked: value, onChange: this.onChange })));
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
            ? value
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
    }
    render() {
        const { value, readOnly, props } = this.props;
        const { format = this.FORMAT, addon } = props, rest = __rest(props, ["format", "addon"]);
        const timeValue = common_1.notEmptyValue(value)
            ? moment(common_1.simpleClone(value), format)
            : undefined;
        return readOnly
            ? moment(value).format(format)
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
const axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
            const { onChange, onUploaded } = this.props.props;
            let fileList = [...info.fileList];
            fileList.forEach((file, idx) => {
                if (file.response) {
                    fileList[idx] = Object.assign(Object.assign({}, fileList[idx]), { url: file.response.headers.location, name: file.response.filename });
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
const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
function FooterButtons(props) {
    const { style, align, type } = props, rest = __rest(props, ["style", "align", "type"]);
    const wrapperStyle = Object.assign({ justifyContent: alignMap[align || 'center'] }, style);
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
 * @return {string | null}
 */
exports.getItemLabelByValue = (items, value) => {
    const found = items.filter(item => item.value === value);
    if (found.length > 0) {
        return found[0].label;
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

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "memoize-one":
/*!******************************!*\
  !*** external "memoize-one" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("memoize-one");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9BdXRvQ29tcGxldGUudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0Nhc2NhZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0RhdGVwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXQudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXROdW1iZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXRQYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9QaWNQcmV2aWV3LnNjc3M/YWQwZCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1BpY1ByZXZpZXcudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFkaW8udHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFuZ2VwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmVuZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9Td2l0Y2gudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvVGV4dGFyZWEudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvVGltZXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9VcGxvYWQudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRm9vdGVyQnV0dG9ucy9CdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9Gb290ZXJCdXR0b25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL1Jvdy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9pbmRleC5zY3NzPzEwZWUiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS91dGlscy9Gb3JtVmFsaWRhdG9yLnRzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vdXRpbHMvY29tbW9uLnRzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS9leHRlcm5hbCBcIm1lbW9pemUtb25lXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsd0RBQThCO0FBQzlCLHVEQUFtQztBQVduQyxtQkFBeUIsS0FBWTtJQUNuQyxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1FBQzlCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7U0FDeEM7UUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxNQUFNLGdC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QTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEMsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9Gb3JtL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB2b2lkXG4gIHByb3BzOiB7XG4gICAgZGF0YVNvdXJjZTogYW55LFxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKHByb3BzLm5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKHByb3BzLm5hbWUsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzLnByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0b0NvbXBsZXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvZXMvYnV0dG9uJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2J1dHRvbi9zdHlsZSdcblxuaW1wb3J0IHsgQnV0dG9uVHlwZSB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgZGF0YTogYW55LFxuICBwcm9wczoge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICB0eXBlOiBCdXR0b25UeXBlLFxuICAgIG9uQ2xpY2s6IChkYXRhOiBPYmplY3QpID0+IGFueSxcbiAgICBbbmFtZTogc3RyaW5nXTogYW55LFxuICB9XG4gIFtuYW1lOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIG9uQ2xpY2ssXG4gICAgYWRkb24sXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHMucHJvcHNcblxuICBsZXQgYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9ICdkZWZhdWx0J1xuICBjb25zdCBpbmRleCA9IGJ1dHRvblR5cGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHR5cGUpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHR5cGU9e2J1dHRvblR5cGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2J1dHRvblR5cGV9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGRhdGEpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvQnV0dG9uPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhc2NhZGVyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBDYXNjYWRlciBmcm9tICdhbnRkL2VzL2Nhc2NhZGVyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2Nhc2NhZGVyL3N0eWxlJ1xuXG5mdW5jdGlvbiBnZXRDYXNjYWRlckxhYmVsKG9yaWdpbmFsVmFsdWUsIGN1ck9wdGlvbnMsIHZhbHVlSW5kZXgsIGxhYmVsQXJyKSB7XG4gIGxldCBpbmRleCA9IHZhbHVlSW5kZXhcbiAgaWYgKG9yaWdpbmFsVmFsdWUgJiYgaW5kZXggPCBvcmlnaW5hbFZhbHVlLmxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXAgPSBjdXJPcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBvcmlnaW5hbFZhbHVlW3ZhbHVlSW5kZXhdKVxuICAgIGlmICh0ZW1wKSB7XG4gICAgICBsYWJlbEFyci5wdXNoKHRlbXAubGFiZWwpXG4gICAgfVxuICAgIGlmICh0ZW1wICYmIHRlbXAuY2hpbGRyZW4pIHtcbiAgICAgIGluZGV4ICs9IDFcbiAgICAgIHJldHVybiBnZXRDYXNjYWRlckxhYmVsKFxuICAgICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgICB0ZW1wLmNoaWxkcmVuLFxuICAgICAgICB2YWx1ZUluZGV4LFxuICAgICAgICBsYWJlbEFycixcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxBcnIuam9pbignIC8gJylcbiAgfVxuXG4gIHJldHVybiBsYWJlbEFyci5qb2luKCcgLyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNjYWRlckZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyByZWFkT25seSwgdmFsdWUsIG5hbWUgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UsIHBsYWNlaG9sZGVyID0gJ+ivt+mAieaLqScgfSA9IHByb3BzLnByb3BzXG5cbiAgY29uc3QgY2hhbmdlID0gKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRPcHRpb25zOiBhbnkpID0+IHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkT3B0aW9ucylcbiAgICB9XG4gICAgcHJvcHMub25DaGFuZ2UobmFtZSwgc2VsZWN0ZWRWYWx1ZSlcbiAgfVxuXG4gIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzLnByb3BzXG5cbiAgaWYgKCFyZWFkT25seSkge1xuICAgIHJldHVybiA8Q2FzY2FkZXIgey4uLnJlc3R9IG9uQ2hhbmdlPXtjaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICB9XG5cbiAgcmV0dXJuIGdldENhc2NhZGVyTGFiZWwodmFsdWUsIG9wdGlvbnMsIDAsIFtdKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRJdGVtTGFiZWxCeVZhbHVlLCBnZXRUYXJnZXRWYWx1ZSwgbm90RW1wdHlWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hGaWVsZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHtcbiAgICB2YWx1ZSwgcmVhZE9ubHksIG9uQ2hhbmdlLCBuYW1lLFxuICB9ID0gcHJvcHNcbiAgY29uc3QgeyBvcHRpb25zID0gW10sIGNoZWNrQWxsQWJsZSA9IGZhbHNlIH0gPSBwcm9wcy5wcm9wc1xuXG4gIC8vIOWFqOmAiVxuICBjb25zdCBvbkNoZWNrQWxsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gW11cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgb3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4gbmV3VmFsdWUucHVzaChpdGVtLnZhbHVlKSlcbiAgICB9XG4gICAgb25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG5cbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlzQ2hlY2tlZEFsbCA9ICh2YWx1ZXM/OiBhbnlbXSkgPT4gKFxuICAgIG5vdEVtcHR5VmFsdWUodmFsdWVzKSAmJiB2YWx1ZXMubGVuZ3RoID09PSBvcHRpb25zLmxlbmd0aFxuICApXG5cbiAgY29uc3QgY2hhbmdlID0gKHRhcmdldDogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXRUYXJnZXRWYWx1ZSh0YXJnZXQpXG4gICAgb25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wcy5wcm9wc1xuXG4gIHJldHVybiByZWFkT25seSA/IChcbiAgICBnZXRJdGVtTGFiZWxCeVZhbHVlKG9wdGlvbnMsIHZhbHVlKVxuICApIDogKFxuICAgIDw+XG4gICAgICB7Y2hlY2tBbGxBYmxlICYmIChcbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkQWxsKHZhbHVlKX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGVja0FsbENoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIOWFqOmAiSAmbmJzcDtcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICl9XG4gICAgICA8Q2hlY2tib3guR3JvdXBcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2NoYW5nZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnYW50ZC9lcy9kYXRlLXBpY2tlcidcbi8vIGltcG9ydCAnYW50ZC9lcy9kYXRlLXBpY2tlci9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgRk9STUFUID0gJ1lZWVktTU0tREQnXG5cbiAgRk9STUFUX1RJTUUgPSAnWVlZWS1NTS1ERCBISDptbSdcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSAhdmFsdWUgPyB2YWx1ZSA6IHZhbHVlLnZhbHVlT2YoKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICByZWFkT25seSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmb3JtYXQsIGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIGNvbnN0IEZPUk1BVCA9IGZvcm1hdCB8fCAocmVzdC5zaG93VGltZSA/IHRoaXMuRk9STUFUX1RJTUUgOiB0aGlzLkZPUk1BVClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gdmFsdWUgPyBtb21lbnQodmFsdWUpIDogdW5kZWZpbmVkXG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gKChmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUuZm9ybWF0KGZvcm1hdCkpIHx8IG51bGwpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e0ZPUk1BVH1cbiAgICAgICAgICAgIHZhbHVlPXtmaWVsZFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgeyBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIHJlYWRPbmx5LCB0eXBlLCBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlIHx8ICdvZmYnXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/ICh2YWx1ZSB8fCBudWxsKVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJudW1iZXJcIiAvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gIClcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiwgU3BpbiB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCAnLi9QaWNQcmV2aWV3LnNjc3MnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNob3dMaXN0OiBib29sZWFuLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIHVybDogc3RyaW5nW10gfCBzdHJpbmcsXG4gIHN0eWxlPzogT2JqZWN0XG4gIG9uSGlkZT86IFZvaWRGdW5jdGlvblxufVxuXG4vKipcbiAqIOWbvueJh+mihOiniFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNQcmV2aWV3ZXIoXG4gIHtcbiAgICBzaG93TGlzdCA9IHRydWUsXG4gICAgdXJsID0gW10sXG4gICAgc3R5bGUgPSB7fSxcbiAgICBjdXJyZW50ID0gJycsXG4gICAgb25IaWRlLFxuICB9OiBQcm9wcyxcbikge1xuICBsZXQgaW1hZ2VzID0gW11cbiAgaWYgKHVybCkge1xuICAgIGltYWdlcyA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gW3VybF0gOiB1cmxcbiAgfVxuICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKGN1cnJlbnQpXG4gIGNvbnN0IFtkZWcsIHNldERlZ10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaXNJbml0LCBzZXRJc0luaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVTaG93ID0gKHRhcmdldFNyYzogc3RyaW5nKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRTcmModGFyZ2V0U3JjKVxuICB9XG5cbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggLT0gMVxuICAgIGlkeCA9IGlkeCA8IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggKz0gMVxuICAgIGlkeCA9IGlkeCA+PSBpbWFnZXMubGVuZ3RoID8gMCA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cblxuICBjb25zdCByb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnICsgMSlcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uQmFjayA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnIC0gMSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgaWYgKCFzaG93TGlzdCAmJiAhaXNJbml0KSB7XG4gICAgaGFuZGxlU2hvdyhjdXJyZW50KVxuICAgIHNldElzSW5pdCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMaXN0XG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1yb3dcIj5cbiAgICAgICAgICB7aW1hZ2VzXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtpdGVtfV8ke2lkeH1gXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1ib3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7dmlzaWJsZVxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtdmlld2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXNwaW4gcmVhY3QtY29uZi1mb3JtLXBpYy13aGl0ZS1zcGluXCI+PFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9IHRpcD1cImxvYWRpbmcuLi5cIiBzaXplPVwibGFyZ2VcIiAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1jb250YWluZXJcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtwcmV2fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtuZXh0fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9ufT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cInJlZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9uQmFja30+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1bmRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwicHJldmltZ1wiXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke2RlZyAqIDkwfWRlZylgLCBvcGFjaXR5OiBsb2FkaW5nID8gMCA6IDEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaW1nLWNvbnRhaW5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0SXRlbUxhYmVsQnlWYWx1ZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhZGlvRmllbGQocHJvcHM6IGFueSkge1xuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgcmVhZE9ubHksXG4gICAgb25DaGFuZ2UsXG4gICAgbmFtZSxcbiAgICBzdHlsZSA9IHt9LFxuICB9ID0gcHJvcHNcbiAgY29uc3QgeyBvcHRpb25zID0gW10gfSA9IHByb3BzLnByb3BzXG5cbiAgY29uc3QgY2hhbmdlID0gKHRhcmdldDogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXRUYXJnZXRWYWx1ZSh0YXJnZXQpXG4gICAgb25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wcy5wcm9wc1xuXG4gIHJldHVybiByZWFkT25seSA/IChcbiAgICBnZXRJdGVtTGFiZWxCeVZhbHVlKG9wdGlvbnMsIHZhbHVlKVxuICApIDogKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxSYWRpby5Hcm91cFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICdhbnRkL2VzL2RhdGUtcGlja2VyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2RhdGUtcGlja2VyL3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBzaW1wbGVDbG9uZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgRk9STUFUID0gJ1lZWVktTU0tREQnXG5cbiAgRk9STUFUX1RJTUUgPSAnWVlZWS1NTS1ERCBISDptbSdcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IHNob3dUaW1lIH0gPSB0aGlzLnByb3BzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlWzBdKSkge1xuICAgICAgaWYgKCFzaG93VGltZSkge1xuICAgICAgICB2YWx1ZSA9IFtcbiAgICAgICAgICBtb21lbnQobW9tZW50KHZhbHVlWzBdKS5mb3JtYXQoJ1lZWVktTU0tREQgMDA6MDA6MDAnKSkudmFsdWVPZigpLFxuICAgICAgICAgIG1vbWVudChtb21lbnQodmFsdWVbMV0pLmZvcm1hdCgnWVlZWS1NTS1ERCAyMzo1OTo1OScpKS52YWx1ZU9mKCksXG4gICAgICAgIF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gW21vbWVudCh2YWx1ZVswXSkudmFsdWVPZigpLCBtb21lbnQodmFsdWVbMV0pLnZhbHVlT2YoKV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0LCBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICBjb25zdCBGT1JNQVQgPSBmb3JtYXQgfHwgKHJlc3Quc2hvd1RpbWUgPyB0aGlzLkZPUk1BVF9USU1FIDogdGhpcy5GT1JNQVQpXG5cbiAgICBsZXQgdGltZVZhbHVlID0gW251bGwsIG51bGxdXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGltZVZhbHVlID0gc2ltcGxlQ2xvbmUodmFsdWUpXG4gICAgICB0aW1lVmFsdWVbMF0gPSBtb21lbnQodmFsdWVbMF0pXG4gICAgICB0aW1lVmFsdWVbMV0gPSBtb21lbnQodmFsdWVbMV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IGAke21vbWVudCh0aW1lVmFsdWVbMF0pLmZvcm1hdChmb3JtYXQpfSB+ICR7bW9tZW50KHRpbWVWYWx1ZVsxXSkuZm9ybWF0KGZvcm1hdCl9YFxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgZm9ybWF0PXtGT1JNQVR9XG4gICAgICAgICAgICB2YWx1ZT17dGltZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmllbGRJdGVtVCB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSBGaWVsZEl0ZW1UICYge1xuICBkYXRhOiBPYmplY3RcbiAgcmVuZGVyOiAoZGF0YTpPYmplY3QpID0+IGFueVxufVxuXG5jb25zdCBSZW5kZXI6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wc1xuICBjb25zdCB7IHJlbmRlciB9ID0gcHJvcHMucHJvcHNcbiAgLy8gY29uc29sZS5sb2coJ3JlbmRlcicsIHR5cGVvZiByZW5kZXIsIHJlbmRlcilcbiAgcmV0dXJuIHR5cGVvZiByZW5kZXIgPT09ICdmdW5jdGlvbicgPyByZW5kZXIoZGF0YSkgOiAocmVuZGVyIHx8IG51bGwpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IFNlbGVjdCBmcm9tICdhbnRkL2VzL3NlbGVjdCdcbi8vIGltcG9ydCAnYW50ZC9lcy9zZWxlY3Qvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIGdldEl0ZW1MYWJlbEJ5VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuY29uc3QgeyBPcHRpb24sIE9wdEdyb3VwIH0gPSBTZWxlY3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm90RW1wdHlWYWx1ZSh0YXJnZXQ/LnZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlXG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXJHcm91cCA9IChpdGVtczogYW55KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuICAgICAgaXRlbXNba2V5XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIDxPcHRpb24ga2V5PXtpdGVtLnZhbHVlfT5cbiAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgIDwvT3B0aW9uPixcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8T3B0R3JvdXAgbGFiZWw9e2tleX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L09wdEdyb3VwPixcbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSwgcHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyA9IFtdLFxuICAgICAgcGxhY2Vob2xkZXIgPSAn6K+36YCJ5oupJyxcbiAgICAgIHNob3dTZWFyY2ggPSB0cnVlLFxuICAgICAgb3B0aW9uRmlsdGVyUHJvcCA9ICdsYWJlbCcsXG4gICAgICBhbGxvd0NsZWFyID0gdHJ1ZSxcbiAgICAgIGFkZG9uLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IGdldEl0ZW1MYWJlbEJ5VmFsdWUoaXRlbXMsIHZhbHVlKVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPXtvcHRpb25GaWx0ZXJQcm9wfVxuICAgICAgICAgICAgc2hvd1NlYXJjaD17c2hvd1NlYXJjaH1cbiAgICAgICAgICAgIGFsbG93Q2xlYXI9e2FsbG93Q2xlYXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtcykgPT09ICdbT2JqZWN0IEFycmF5XScgJiYgaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW1zKSA9PT0gJ1tPYmplY3QgT2JqZWN0XScgJiYgdGhpcy5yZW5kZXJHcm91cChpdGVtcyl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBjaGVja2VkKVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgY2hlY2tlZD17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm90RW1wdHlWYWx1ZSh0YXJnZXQ/LnZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlXG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSB8fCAnb2ZmJ1xuICAgIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHZhbHVlXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgVGltZXBpY2tlciBmcm9tICdhbnRkL2VzL3RpbWUtcGlja2VyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL3RpbWUtcGlja2VyL3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBzaW1wbGVDbG9uZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgRk9STUFUID0gJ0hIOm1tJ1xuXG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0ID0gdGhpcy5GT1JNQVQgfSA9IHRoaXMucHJvcHMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdClcbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0ID0gdGhpcy5GT1JNQVQsIGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGltZVZhbHVlID0gbm90RW1wdHlWYWx1ZSh2YWx1ZSlcbiAgICAgID8gbW9tZW50KHNpbXBsZUNsb25lKHZhbHVlKSwgZm9ybWF0KVxuICAgICAgOiB1bmRlZmluZWRcblxuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgdmFsdWU9e3RpbWVWYWx1ZX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcGxvYWQsIEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUGljUHJldmlldyBmcm9tICcuL1BpY1ByZXZpZXcnXG5cbi8qKlxuICogVXBsb2FkXG4gKiBAdHlwZSB7WE1MfVxuICovXG5jb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gIDxkaXY+XG4gICAgPEljb24gdHlwZT1cInBsdXNcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+5LiK5LygPC9kaXY+XG4gIDwvZGl2PlxuKVxuY29uc3QgdXBsb2FkQnV0dG9uVGV4dCA9IChcbiAgPEJ1dHRvbj5cbiAgICA8SWNvbiB0eXBlPVwidXBsb2FkXCIgLz5cbiAgICAmbmJzcDvkuIrkvKBcbiAgPC9CdXR0b24+XG4pXG5cbnR5cGUgVXBsb2FkRmllbGRQcm9wcyA9IHtcbiAgdmFsdWU/OiBBcnJheTxhbnk+LFxuICBuYW1lOiBzdHJpbmcsXG4gIHJlYWRPbmx5PzogYm9vbGVhbixcbiAgb25DaGFuZ2U6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnlbXSkgPT4gdm9pZFxuICBwcm9wczoge1xuICAgIGJsb2JOYW1lOiBzdHJpbmcsXG4gICAgbWF4RmlsZXM6IG51bWJlcixcbiAgICBtYXhGaWxlU2l6ZTogbnVtYmVyLFxuICAgIGhlaWdodFJhdGlvPzogbnVtYmVyLFxuICAgIHdpZHRoUmF0aW8/OiBudW1iZXIsXG4gICAgaGVhZGVycz86IGFueSxcbiAgICBsaXN0VHlwZT86ICd0ZXh0JyB8ICdwaWN0dXJlJyB8ICdwaWN0dXJlLWNhcmQnLFxuICAgIGZpbGVUeXBlOiBzdHJpbmcsIC8vIOS4iuS8oOaWh+S7tuexu+WeiyAgaW1nIC8gb3RoZXJcbiAgICBzaG93RXJyb3JNZXNzYWdlPzogYm9vbGVhbixcbiAgICBvbkNoYW5nZTogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLFxuICAgIG9uVXBsb2FkZWQ/OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXG4gICAgZ2V0UmVzcG9uc2VEYXRhPzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkIC8vIOiOt+WPlui/lOWbnueahOaVsOaNrlxuICAgIGFjdGlvbjogc3RyaW5nLFxuICAgIGFkZG9uPzogYW55XG4gIH1cbn1cblxudHlwZSBVcGxvYWRTdGF0ZSA9IHtcbiAgcHJldmlld1Zpc2libGU6IGJvb2xlYW4sXG4gIHByZXZpZXdJbWFnZTogc3RyaW5nXG4gIGVycm9yTXNnOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEZpZWxkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxVcGxvYWRGaWVsZFByb3BzLCBVcGxvYWRTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8vIHByb3BzOiB7XG4gICAgLy8gICBzaG93RXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgIC8vICAgbWF4RmlsZXM6IDUsIC8vIOacgOWkmuiDveS4iuS8oOaWh+S7tuaVsFxuICAgIC8vICAgbWF4RmlsZVNpemU6IDEwLCAvLyDmnIDlpKfkuIrkvKDkvZPnp69cbiAgICAvLyAgIGZpbGVUeXBlOiAnaW1nJywgLy8g6buY6K6k5LiK5Lyg5Zu+54mHXG4gICAgLy8gfSxcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHByZXZpZXdWaXNpYmxlOiBmYWxzZSxcbiAgICBwcmV2aWV3SW1hZ2U6ICcnLFxuICAgIGVycm9yTXNnOiAnJyxcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGluZm86IGFueSk6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCchISEhISHov5vlhaUgb25DaGFuZ2UgJylcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBvblVwbG9hZGVkIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgbGV0IGZpbGVMaXN0ID0gWy4uLmluZm8uZmlsZUxpc3RdXG5cbiAgICBmaWxlTGlzdC5mb3JFYWNoKChmaWxlLCBpZHgpID0+IHtcbiAgICAgIGlmIChmaWxlLnJlc3BvbnNlKSB7XG4gICAgICAgIGZpbGVMaXN0W2lkeF0gPSB7XG4gICAgICAgICAgLi4uZmlsZUxpc3RbaWR4XSxcbiAgICAgICAgICB1cmw6IGZpbGUucmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbixcbiAgICAgICAgICBuYW1lOiBmaWxlLnJlc3BvbnNlLmZpbGVuYW1lLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsZVxuICAgIH0pXG5cbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5wcm9wcy5nZXRSZXNwb25zZURhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9wcy5nZXRSZXNwb25zZURhdGEoaW5mby5maWxlLnJlc3BvbnNlKVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgZmlsZUxpc3QgPSBbXVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiBpbmZvLmZpbGU/LnJlc3BvbnNlPy5pbnZvaWNlPy5tZXNzYWdlIHx8ICfkuIrkvKDplJnor68sIOivt+mHjeivlSEnIH0pXG4gICAgfSBlbHNlIGlmICghaW5mby5maWxlLnN0YXR1cykge1xuICAgICAgLy8g5paH5Lu26LaF6L+H5aSn5bCP5oiW5YW25a6D5LiN5ruh6Laz5YmN56uv6ZmQ5Yi25p2h5Lu25oOF5Ya1XG4gICAgICBmaWxlTGlzdCA9IGZpbGVMaXN0LnNsaWNlKDAsIGZpbGVMaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBmaWxlTGlzdClcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGZpbGVMaXN0KVxuICAgIH1cbiAgICBpZiAob25VcGxvYWRlZCkge1xuICAgICAgb25VcGxvYWRlZChmaWxlTGlzdClcbiAgICB9XG4gIH1cblxuICBvblByZXZpZXcgPSAoZmlsZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiB0cnVlLCBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIH0pXG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiBmYWxzZSwgcHJldmlld0ltYWdlOiAnJyB9KVxuICB9XG5cbiAgY3VzdG9tUmVxdWVzdCA9IChcbiAgICB7XG4gICAgICBmaWxlLFxuICAgICAgb25TdWNjZXNzLFxuICAgICAgb25FcnJvcixcbiAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgfSxcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBhY3Rpb24gfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoYWN0aW9uLCBmb3JtRGF0YSwge1xuICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBvblByb2dyZXNzLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIHx8IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S4iuS8oOWksei0pSEnIH0pXG4gICAgICAgIG9uRXJyb3IoKVxuICAgICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgYWJvcnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S4iuS8oOe7iOatoiEnIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIGJlZm9yZVVwbG9hZChmaWxlOiBhbnksIHR5cGU6IHN0cmluZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCchISEhISHov5vlhaUgYmVmb3JlVXBsb2FkICcpXG4gICAgY29uc3QgeyBtYXhGaWxlU2l6ZSA9IDEwIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgLy8gaWYgKGhlaWdodFJhdGlvICYmIHdpZHRoUmF0aW8pIHsgLy8g6aqM6K+B6ZW/5a695q+U5L6LXG4gICAgLy8gICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGF3YWl0IGdldEZpbGVEaW1lbnNpb24oZmlsZSlcbiAgICAvLyAgIGlmIChoZWlnaHQvd2lkdGggIT09IGhlaWdodFJhdGlvL3dpZHRoUmF0aW8pIHtcbiAgICAvLyAgICAgbWVzc2FnZS5lcnJvcihg6ZW/5a695q+U5b+F6aG75pivICR7aGVpZ2h0UmF0aW99IC8gJHt3aWR0aFJhdGlvfWApXG4gICAgLy8gICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyDpqozor4Hmlofku7blpKflsI9zaXplXG4gICAgY29uc3QgZmlsZVNpemVMYXJnZXIgPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA+IG1heEZpbGVTaXplXG4gICAgaWYgKGZpbGVTaXplTGFyZ2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6IGDmlofku7bkvZPnp6/lpKflsI/kuI3otoXov4cke21heEZpbGVTaXplfU1gIH0pXG4gICAgICAvLyBtZXNzYWdlLmVycm9yKGDmlofku7bkvZPnp6/lpKflsI/kuI3otoXov4cke21heEZpbGVTaXplfU1gKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8g6aqM6K+B5paH5Lu25qC85byPXG4gICAgaWYgKHR5cGUgPT09ICdpbWcnKSB7XG4gICAgICBjb25zdCBpc0pQRyA9IGZpbGUudHlwZVxuICAgICAgaWYgKGlzSlBHID09PSAnaW1hZ2UvanBlZycgfHwgaXNKUEcgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LuF5pSv5oyB5LiK5LyganBnL3BuZ+agvOW8j+WbvueJhycgfSlcbiAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoJ+S7heaUr+aMgeS4iuS8oGpwZy9wbmfmoLzlvI/lm77niYcnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlID0gW10sXG4gICAgICByZWFkT25seSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBtYXhGaWxlcyA9IDEwLFxuICAgICAgYmxvYk5hbWUgPSAnYmxvYicsXG4gICAgICBmaWxlVHlwZSA9ICdpbWcnLFxuICAgICAgc2hvd0Vycm9yTWVzc2FnZSA9IHRydWUsXG4gICAgICBsaXN0VHlwZSA9ICdwaWN0dXJlLWNhcmQnLFxuICAgICAgaGVhZGVycyA9IHt9LFxuICAgIH0gPSBwcm9wc1xuICAgIC8vIHZhbHVlID0gdmFsdWUgfHwgW11cblxuXG4gICAgY29uc3QgYnV0dG9uID0gbGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnID8gdXBsb2FkQnV0dG9uIDogdXBsb2FkQnV0dG9uVGV4dFxuICAgIGNvbnN0IGZvcm1hdFZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgY29uc3QgaW1hZ2VzVXJscyA9IFtdXG4gICAgZm9ybWF0VmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGltYWdlc1VybHMucHVzaChlbGVtZW50Py51cmwpXG4gICAgfSlcblxuICAgIGZvcm1hdFZhbHVlLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3JtYXRWYWx1ZVtpZHhdID0ge1xuICAgICAgICAgIHVpZDogYCR7aXRlbX1fJHtpZHh9YCxcbiAgICAgICAgICB1cmw6IGl0ZW0sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICAgIC8vIGNvbnNvbGUubG9nKCdlcnInLCB0aGlzLnN0YXRlLmVycm9yTXNnLCBzaG93RXJyb3JNZXNzYWdlKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8VXBsb2FkXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAga2V5PXtibG9iTmFtZX1cbiAgICAgICAgICBuYW1lPXtibG9iTmFtZX1cbiAgICAgICAgICBoZWFkZXJzPXtoZWFkZXJzfVxuICAgICAgICAgIGxpc3RUeXBlPXtsaXN0VHlwZX1cbiAgICAgICAgICBmaWxlTGlzdD17Zm9ybWF0VmFsdWV9XG4gICAgICAgICAgc2hvd1VwbG9hZExpc3RcbiAgICAgICAgICBvbkNoYW5nZT17ZmlsZSA9PiB0aGlzLm9uQ2hhbmdlKGZpbGUpfVxuICAgICAgICAgIGJlZm9yZVVwbG9hZD17ZmlsZSA9PiB0aGlzLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlVHlwZSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIG9uUHJldmlldz17dGhpcy5vblByZXZpZXd9XG4gICAgICAgICAgY3VzdG9tUmVxdWVzdD17dGhpcy5jdXN0b21SZXF1ZXN0fSAvKiDopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLogKi9cbiAgICAgICAgPlxuICAgICAgICAgIHt2YWx1ZS5sZW5ndGggPj0gbWF4RmlsZXMgfHwgcmVhZE9ubHkgPyBudWxsIDogYnV0dG9ufVxuICAgICAgICA8L1VwbG9hZD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1zZyAmJiBzaG93RXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1lcnJvclwiPnt0aGlzLnN0YXRlLmVycm9yTXNnfTwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLnByZXZpZXdWaXNpYmxlICYmIChcbiAgICAgICAgICA8UGljUHJldmlld1xuICAgICAgICAgICAgdXJsPXtpbWFnZXNVcmxzfVxuICAgICAgICAgICAgc2hvd0xpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgIGN1cnJlbnQ9e3RoaXMuc3RhdGUucHJldmlld0ltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmllbGRJdGVtVCwgRXh0ZW5kRmllbGQgfSBmcm9tICcuLi9pbmRleC5kJ1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlcidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5pbXBvcnQgVGltZXBpY2tlciBmcm9tICcuL1RpbWVwaWNrZXInXG5pbXBvcnQgUmFuZ2VwaWNrZXIgZnJvbSAnLi9SYW5nZXBpY2tlcidcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcidcbmltcG9ydCBDYXNjYWRlckZpZWxkIGZyb20gJy4vQ2FzY2FkZXInXG5pbXBvcnQgVXBsb2FkQm94IGZyb20gJy4vVXBsb2FkJ1xuaW1wb3J0IEF1dG9Db21wbGV0ZSBmcm9tICcuL0F1dG9Db21wbGV0ZSdcbmltcG9ydCBJbnB1dFBhc3N3b3JkIGZyb20gJy4vSW5wdXRQYXNzd29yZCdcbmltcG9ydCBJbnB1dE51bWJlciBmcm9tICcuL0lucHV0TnVtYmVyJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9SYWRpbydcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xuaW1wb3J0IFN3aXRjaCBmcm9tICcuL1N3aXRjaCdcblxuY29uc3QgbWFwID0ge1xuICByZW5kZXI6IFJlbmRlcixcbiAgc3dpdGNoOiBTd2l0Y2gsXG4gIGlucHV0OiBJbnB1dCxcbiAgYnV0dG9uOiBCdXR0b24sXG4gIHNlbGVjdDogU2VsZWN0LFxuICB0aW1lcGlja2VyOiBUaW1lcGlja2VyLFxuICByYW5nZXBpY2tlcjogUmFuZ2VwaWNrZXIsXG4gIGRhdGVwaWNrZXI6IERhdGVwaWNrZXIsXG4gIGNhc2NhZGVyOiBDYXNjYWRlckZpZWxkLFxuICBpbnB1dFBhc3N3b3JkOiBJbnB1dFBhc3N3b3JkLFxuICBpbnB1dE51bWJlcjogSW5wdXROdW1iZXIsXG4gIHRleHRhcmVhOiBUZXh0YXJlYSxcbiAgcmFkaW86IFJhZGlvLFxuICBjaGVja2JveDogQ2hlY2tib3gsXG4gIHVwbG9hZDogVXBsb2FkQm94LFxuICBhdXRvQ29tcGxldGU6IEF1dG9Db21wbGV0ZSxcbn1cblxuLyogQWRkIGV4dHJhY3QgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBhZGRGaWVsZHMgPSAoZXh0ZW5kRmllbGRzOiBBcnJheTxFeHRlbmRGaWVsZD4pID0+IChcbiAgZXh0ZW5kRmllbGRzLmZvckVhY2goKGV4dGVuZEZpZWxkOiBFeHRlbmRGaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgY29tcG9uZW50IH0gPSBleHRlbmRGaWVsZFxuICAgIG1hcFtuYW1lXSA9IGNvbXBvbmVudFxuICB9KVxuKVxuXG4vKiBGaWVsZCBNYXAgKi9cbmNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcpID0+IG1hcFt0eXBlXSB8fCBudWxsXG5cbi8qIEZpZWxkIE1hcHBpbmcgKi9cbnR5cGUgUHJvcHMgPSB7IGRhdGE6IE9iamVjdCwgb25DaGFuZ2U6IGFueSwgbmFtZT86IHN0cmluZywgdmFsdWU6IGFueSB9ICYgRmllbGRJdGVtVFxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHR5cGUpXG4gIHJldHVybiBDb21wb25lbnRcbiAgICA/IDxDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgOiBudWxsXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9lcy9idXR0b24nXG4vLyBpbXBvcnQgJ2FudGQvZXMvYnV0dG9uL3N0eWxlJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEJ1dHRvblQsIEZpZWxkSXRlbVQsIEJ1dHRvblR5cGUgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZHM/OiBBcnJheTxGaWVsZEl0ZW1UIHwgQnV0dG9uVD5cbiAgZ3V0dGVyPzogbnVtYmVyXG4gIG9uQnV0dG9uQ2xpY2s/OiAoa2V5OiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pID0+IHZvaWRcbiAgZGF0YT86IE9iamVjdCxcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IFByb3BzKTogYW55IHtcbiAgY29uc3QgeyBndXR0ZXIgPSAxNiwgZmllbGRzIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIGZpZWxkcy5tYXAoKGJ1dHRvbjogQnV0dG9uVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICBsYWJlbCA9ICcnLFxuICAgICAgICBkaXNwbGF5ID0gdHJ1ZSxcbiAgICAgIH0gPSBidXR0b25cblxuICAgICAgY29uc3Qge1xuICAgICAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgICAgICBjbGFzc05hbWUgPSAnJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgYWRkb24sXG4gICAgICAgIHN0eWxlID0ge30sXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH0gPSBidXR0b24ucHJvcHMgfHwge31cblxuICAgICAgbGV0IGJ1dHRvblR5cGU6IGFueVxuICAgICAgY29uc3QgaW5kZXggPSBidXR0b25UeXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0eXBlKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0LmJsb2NrKSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXNwbGF5XG4gICAgICAgID8gKFxuICAgICAgICAgIDxzcGFuIGtleT17a2V5fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge2lkeCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLWJ1dHRvbi1zcGFjZS1iZXR3ZWVuXCIgc3R5bGU9e3sgd2lkdGg6IGd1dHRlciB9fSAvPn1cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT17YnV0dG9uVHlwZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJ1dHRvbkNsaWNrKGtleSwgb25DbGljayl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICB7YWRkb24gJiYgYWRkb24ocHJvcHMuZGF0YSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgIH0pXG4gIClcbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi9CdXR0b25Hcm91cCdcbmltcG9ydCB7IEZpZWxkc0NvbmZUIH0gZnJvbSAnLi4vaW5kZXguZCdcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRmllbGRzQ29uZlQge1xuICBvbkJ1dHRvbkNsaWNrOiAodHlwZTogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSA9PiB2b2lkXG59XG5cbmNvbnN0IGFsaWduTWFwID0ge1xuICBsZWZ0OiAnZmxleC1zdGFydCcsXG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gIHJpZ2h0OiAnZmxleC1lbmQnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJCdXR0b25zKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgc3R5bGUsXG4gICAgYWxpZ24sXG4gICAgdHlwZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gICAganVzdGlmeUNvbnRlbnQ6IGFsaWduTWFwW2FsaWduIHx8ICdjZW50ZXInXSxcbiAgICAuLi5zdHlsZSxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1idXR0b24td3JhcHBlclwiXG4gICAgICBzdHlsZT17d3JhcHBlclN0eWxlfVxuICAgID5cbiAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuRm9vdGVyQnV0dG9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXk6IHRydWUsXG4gIHN0eWxlOiB7fSxcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0gfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IFJvdyBmcm9tICdhbnRkL2VzL3Jvdydcbi8vIGltcG9ydCBDb2wgZnJvbSAnYW50ZC9lcy9jb2wnXG4vLyBpbXBvcnQgRm9ybSBmcm9tICdhbnRkL2VzL2Zvcm0nXG4vLyBpbXBvcnQgJ2FudGQvZXMvcm93L3N0eWxlJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2NvbC9zdHlsZSdcbi8vIGltcG9ydCAnYW50ZC9lcy9mb3JtL3N0eWxlJ1xuXG5pbXBvcnQgeyBERUZBVUxUX0dVVFRFUiwgREVGQVVMVF9TUEFOIH0gZnJvbSAnQEZvcm0vY29uZmlnJ1xuaW1wb3J0IHsgRmllbGRzQ29uZlQsIEZpZWxkSXRlbVQgfSBmcm9tICcuL2luZGV4LmQnXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCdcblxudHlwZSBQcm9wcyA9IEZpZWxkc0NvbmZUICYge1xuICAvLyBvbkJ1dHRvbkNsaWNrOiAodHlwZTogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBhbnlcbiAgZGF0YTogT2JqZWN0XG4gIHZhbGlkYXRpb246IE9iamVjdFxuICBsYWJlbERpcmVjdGlvbjogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKTogYW55ID0+IHtcbiAgY29uc3Qge1xuICAgIGd1dHRlciA9IERFRkFVTFRfR1VUVEVSLFxuICAgIHR5cGUsXG4gICAgY2xhc3NOYW1lID0gJycsXG4gICAgZmllbGRzLFxuICAgIGRhdGEsXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsaWRhdGlvbixcbiAgICBsYWJlbERpcmVjdGlvbixcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7bGFiZWxEaXJlY3Rpb259YH0+XG5cbiAgICAgICAgey8qIOmdnuaMiemSruaOp+S7tue7hOWQiCAqL31cbiAgICAgICAge3R5cGUgIT09ICdGb3JtQnV0dG9ucycgJiYgZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkSXRlbVQpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBzcGFuID0gcHJvcHMuc3BhbiB8fCBERUZBVUxUX1NQQU4sXG4gICAgICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5ID0gdHJ1ZSxcbiAgICAgICAgICB9ID0gZmllbGRcblxuICAgICAgICAgIGNvbnN0IHsgcnVsZXMsIGFkZG9uIH0gPSBmaWVsZC5wcm9wc1xuXG4gICAgICAgICAgcmV0dXJuIGRpc3BsYXlcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17ZmllbGQua2V5fSBzcGFuPXtzcGFufSBvZmZzZXQ9e29mZnNldH0+XG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmaWVsZC5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17WydidXR0b24nLCAncmVuZGVyJ10uaW5kZXhPZihmaWVsZC50eXBlKSA9PT0gLTEgPyBsYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtydWxlcyAmJiBydWxlcy5pbmRleE9mKCdyZXF1aXJlZCcpICE9PSAtMX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtcbiAgICAgICAgICAgICAgICAgICAgKHZhbGlkYXRpb25ba2V5XSAmJiAhdmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICA/ICdlcnJvcidcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICAgICAgKHZhbGlkYXRpb25ba2V5XSAmJiAhdmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkYXRpb25ba2V5XS5tc2dcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtrZXldfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthZGRvbiAmJiBhZGRvbihkYXRhKX1cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvdz5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge31cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1BBTiA9IDhcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dVVFRFUiA9IDE2XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJ1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBhZGRGaWVsZHMgfSBmcm9tICdARm9ybS9GaWVsZCdcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vdXRpbHMvRm9ybVZhbGlkYXRvcidcbmltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnXG5pbXBvcnQgeyBSSkZvcm1Qcm9wcywgRmllbGRzQ29uZlQgfSBmcm9tICcuL2luZGV4LmQnXG5pbXBvcnQgeyBhZGRMYWJlbFN0eWxlV2lkdGgsIHJlbW92ZUxhYmVsU3R5bGVXaWR0aCB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCBGb290ZXJCdXR0b25zIGZyb20gJy4vRm9vdGVyQnV0dG9ucydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbnR5cGUgU3RhdGUgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSSkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UkpGb3JtUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3Bpbm5pbmc6IGZhbHNlLFxuICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgZGF0YVNvdXJjZToge30sXG4gICAgZXh0ZW5kVmFsaWRhdG9yczogW10sXG4gICAgZXh0ZW5kRmllbGRzOiBbXSxcbiAgICBmaWVsZHM6IFtdLFxuICAgIGxhYmVsRGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsIC8vICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCdcbiAgICBsYWJlbFdpZHRoOiA4MCxcbiAgfVxuXG4gIG1vdW50ZWQgPSBmYWxzZVxuXG4gIGRhdGEgPSB7fSAvLyBmb3Jt5pWw5o2uXG5cbiAgZGF0YUNoYW5nZWQgPSBmYWxzZVxuXG4gIHZhbGlkYXRpb24gPSB7fSAvLyDpqozor4Hnu5PmnpxcblxuICAvKipcbiAgICogZGV0ZWN0IGRhdGEgc291cmNlIHdoZXRoZXIgaXMgY2hhbmdlZFxuICAgKi9cbiAgaXNEYXRhU291cmNlQ2hhbmdlZCA9IG1lbW9pemUoKGRhdGFTb3VyY2U6IHt9KSA9PiB7XG4gICAgLy8gVVNFTEVTUyBcInx8IGNvbmRpdGlvblwiXG4gICAgLy8gYmVjYXVzZSBkYXRhU291cmNlIGlzIHRoZSBrZXkgb2YgbWV0aG9kIHJ1bm5pbmcgYW5kIG5lZWQgdG9cbiAgICAvLyB1c2UgaXQgdG8gYXZvaWQgdGhhdCBlc2xpbnQgcmVwb3J0IGFuIGVycm9yIFwiZGF0YVNvdXJjZSBpc1xuICAgIC8vIGRlZmluZWQgYnV0IG5ldmVyIHVzZWRcIlxuICAgIHRoaXMuZGF0YUNoYW5nZWQgPSB0cnVlIHx8IHR5cGVvZiBkYXRhU291cmNlID09PSAnb2JqZWN0J1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZWRcbiAgfSlcblxuICAvKipcbiAgICogZ2V0IGRhdGEgZnJvbSBkYXRhU291cmNlIG9yIGxvY2FsIGRhdGEsXG4gICAqIGFuZCBhbHNvIHNldCB1cCBcInZhbGlkYXRpb25cIlxuICAgKi9cbiAgY29udmVydERhdGFGcm9tRmllbGRzID0gbWVtb2l6ZSgoZmllbGRzOiBBcnJheTxhbnk+LCBkYXRhU291cmNlOiBhbnkpID0+IHtcbiAgICBmaWVsZHMuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgIGlmIChyb3cudHlwZSAhPT0gJ0Zvcm1CdXR0b25zJykge1xuICAgICAgICByb3cuZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmRpc3BsYXkgIT09IGZhbHNlICYmIGl0ZW0udHlwZSAhPT0gJ3JlbmRlcicgJiYgaXRlbS50eXBlICE9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgLy8g5aaC5p6c5pWw5o2u5rqQKHByb3BzKeWPkeeUn+aUueWPmO+8jOWPluaVsOaNrua6kO+8jOWQpuWImeWPluacrOWcsChzdGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpdGVtLmtleV0gPSB0aGlzLmRhdGFDaGFuZ2VkXG4gICAgICAgICAgICAgID8gZGF0YVNvdXJjZVtpdGVtLmtleV1cbiAgICAgICAgICAgICAgOiB0aGlzLmRhdGFbaXRlbS5rZXldXG5cbiAgICAgICAgICAgIC8vIOWmguaenOaVsOaNrua6kChwcm9wcynlj5HnlJ/mlLnlj5jvvJog5aaC5p6c5pyJ5YC877yM6YeN5paw5qCh6aqM77yb5rKh5pyJ5YC877yM5LiN5qCh6aqMXG4gICAgICAgICAgICBjb25zdCBpbml0ID0gdGhpcy52YWxpZGF0ZUZpZWxkKGl0ZW0ua2V5LCB0aGlzLmRhdGFbaXRlbS5rZXldLCBpdGVtLnByb3BzPy5ydWxlcyB8fCBbXSlcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbltpdGVtLmtleV0gPSB7XG4gICAgICAgICAgICAgIC4uLmluaXQsXG4gICAgICAgICAgICAgIHJ1bGVzOiBpdGVtLnByb3BzPy5ydWxlcyB8fCBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRhdGFDaGFuZ2VkID0gZmFsc2VcbiAgfSlcblxuICBpZCA9IGBGT1JNXyR7cGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9TdHJpbmcoKSwgMTApLnRvU3RyaW5nKCl9YFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgLy8gYWRkIGV4dGVuZEZpZWxkcyBpbnRvIGZvcm0gZ2VuZXJhdGluZy9tYXBwaW5nXG4gICAgYWRkRmllbGRzKHRoaXMucHJvcHMuZXh0ZW5kRmllbGRzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZVxuICAgIC8vIGV4dGVuZCB2YWxpZGF0b3JzIGludG8gRm9ybSBWYWxpZGF0b3JcbiAgICBGb3JtVmFsaWRhdG9yLmV4dGVuZFZhbGlkYXRvcnModGhpcy5wcm9wcy5leHRlbmRWYWxpZGF0b3JzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKHRoaXMuaWQpXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBmaWVsZCBjaGFuZ2VcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RpZCBjaGFuZ2UnLCBrZXksIHZhbHVlKVxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGVPbkNoYW5nZSAmJiB0aGlzLnZhbGlkYXRpb25ba2V5XSkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uW2tleV0gPSB7XG4gICAgICAgIC4uLkZvcm1WYWxpZGF0b3IuY2hlY2sodmFsdWUsIHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzKSxcbiAgICAgICAgcnVsZXM6IHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShrZXksIHZhbHVlLCB0aGlzLmRhdGEpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gIH1cblxuICAvKipcbiAgICog6aqM6K+B5omA5pyJZmllbGRzXG4gICAqL1xuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdmFsaWRhdGVkID0gdHJ1ZVxuICAgIHRoaXMucHJvcHMuZmllbGRzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAocm93LnR5cGUgIT09ICdGb3JtQnV0dG9ucycpIHtcbiAgICAgICAgcm93LmZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSBmYWxzZSAmJiBpdGVtLnR5cGUgIT09ICdyZW5kZXInICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5IH0gPSBpdGVtXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCB0aGlzLnZhbGlkYXRpb25ba2V5XS5ydWxlcylcblxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uW2tleV0gPSB7XG4gICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgcnVsZXM6IHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHt9KVxuICAgIHJldHVybiB2YWxpZGF0ZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBTdWJtaXRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uU3VibWl0ID0gKGU/OiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pOiB2b2lkID0+IHtcbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVyblxuXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCBkYXRhJywgdGhpcy5kYXRhKVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdWJtaXQpIHRoaXMucHJvcHMub25TdWJtaXQodGhpcy5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFJlc2V0XG4gICAqL1xuICBvblJlc2V0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXQpIHRoaXMucHJvcHMub25SZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogYnV0dG9uIGNsaWNrXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgb25CdXR0b25DbGljayA9ICh0eXBlOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgIHRoaXMub25TdWJtaXQoKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgdGhpcy5vblJlc2V0KClcbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYih0aGlzLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluagoemqjFxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gcnVsZXNcbiAgICovXG4gIHZhbGlkYXRlRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHJ1bGVzOiBBcnJheTxzdHJpbmc+ID0gW10pID0+IHtcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uW2tleV0gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgcnVsZXMpXG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkYXRlZDogdHJ1ZSwgbXNnOiAnJyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzLCBkYXRhU291cmNlLCBsYWJlbERpcmVjdGlvbiwgbGFiZWxXaWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuaXNEYXRhU291cmNlQ2hhbmdlZChkYXRhU291cmNlKVxuICAgIHRoaXMuY29udmVydERhdGFGcm9tRmllbGRzKGZpZWxkcywgZGF0YVNvdXJjZSB8fCB7fSkgLy8gZGF0YSB0byBmaWVsZHNcbiAgICBhZGRMYWJlbFN0eWxlV2lkdGgobGFiZWxXaWR0aCwgbGFiZWxEaXJlY3Rpb24sIHRoaXMuaWQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNwaW4gc3Bpbm5pbmc9e3RoaXMucHJvcHMuc3Bpbm5pbmd9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gaWQ9e3RoaXMuaWR9PlxuICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZDogRmllbGRzQ29uZlQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgcm93XyR7aWR4fWBcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSBmaWVsZC5kaXNwbGF5ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmllbGQuZGlzcGxheVxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGZpZWxkLnR5cGUgfHwgJ2ZpZWxkJ1xuICAgICAgICAgICAgaWYgKCFkaXNwbGF5KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2ZpZWxkJ1xuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8Um93XG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZGF0YX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb249e3RoaXMudmFsaWRhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsRGlyZWN0aW9uPXtsYWJlbERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPEZvb3RlckJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9TcGluPlxuICAgIClcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCB7IFZhbGlkYXRvclQsIFZhbGlkYXRvckNoaWxkVCwgRXh0ZW5kVmFsaWRhdG9yIH0gZnJvbSAnLi4vaW5kZXguZCdcblxuY2xhc3MgVmFsaWRhdGlvbiB7XG4gIHZhbGlkYXRvcnM6IFZhbGlkYXRvclQgPSB7XG4gICAgLy8g5b+F5aGrXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSkgPT4gbm90RW1wdHlWYWx1ZSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCxcbiAgICAgIGVycm9yTXNnOiAn5b+F5aGrJyxcbiAgICB9LFxuICAgIG1pbl9sZW5ndGg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgbGVuZ3RoOiBudW1iZXIpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSBsZW5ndGgsXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5LiN5bCP5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuICAgIG1heF9sZW5ndGg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgbGVuZ3RoOiBudW1iZXIpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8PSBsZW5ndGgsXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuICAgIGxlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSBsZW5ndGgsXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5b+F6aG75Li6JHtsZW5ndGh9YCxcbiAgICB9LFxuICAgIC8vIOaJi+aculxuICAgIG1vYmlsZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14xXFxkezEwfS8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrjEx5L2N5omL5py65Y+3JyxcbiAgICB9LFxuICAgIC8vIOaVsOWtl1xuICAgIG51bWJlcjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gL1xcZC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S9jeaVsOWtl+agvOW8jycsXG4gICAgfSxcbiAgICAvLyDmmK/lkKbmlbTmlbBcbiAgICBpbnQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+ICEvXFxELy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75Li65pW05pWwJyxcbiAgICB9LFxuICAgIC8vIOato+aVsFxuICAgIHBvc2l0aXZlX251bWJlcjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmraPmlbAnLFxuICAgIH0sXG4gICAgLy8g5LiN5Li66LSf5pWwXG4gICAgbm90X25lZ2F0aXZlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+PSAwLFxuICAgICAgZXJyb3JNc2c6ICfkuI3og73kuLrotJ/mlbAnLFxuICAgIH0sXG4gICAgLy8g5LiN5bCP5LqOXG4gICAgbWluOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+PSBtaW5WYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWluVmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wkp+S6juaIluetieS6jiR7bWluVmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWkp+S6jlxuICAgIG1vcmVfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWluVmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPiBtaW5WYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWluVmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wkp+S6jiR7bWluVmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOS4jeiDveWkp+S6jlxuICAgIG1heDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPD0gbWF4VmFsdWUsXG4gICAgICBlcnJvck1zZzogKG1heFZhbHVlOiBudW1iZXIpID0+IGDlv4XpobvlsI/kuo7miJbnrYnkuo4ke21heFZhbHVlfWAsXG4gICAgfSxcbiAgICAvLyDlsI/kuo5cbiAgICBsZXNzX3RoYW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1heFZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpIDwgbWF4VmFsdWUsXG4gICAgICBlcnJvck1zZzogKG1heFZhbHVlOiBudW1iZXIpID0+IGDlv4XpobvlsI/kuo4ke21heFZhbHVlfWAsXG4gICAgfSxcbiAgICAvLyBwcmljZVxuICAgIHByaWNlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIGlmICghL1xcZC8udGVzdCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlOiBzdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgcDogc3RyaW5nW10gPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpXG4gICAgICAgICAgaWYgKHAubGVuZ3RoID4gMikgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgaWYgKHBbMV0ubGVuZ3RoID4gMikgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+imgeespuWQiOi0p+W4geagvOW8jyzlpoIgMTAuMjMnLFxuICAgIH0sXG5cbiAgICBwcmljZV9mb3JtYXQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIGxlbmd0aDogYW55ID0gOCkgPT4ge1xuICAgICAgICBsZXQgc3RyaW5nVmFsdWUgPSAnJ1xuICAgICAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHN0cmluZ1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBeKFxcXFwrfFxcXFwtKT9bMC05XXsxLCR7bGVuZ3RofX0oXFxcXC5bMC05XXsxLDJ9KT8kYClcbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHN0cmluZ1ZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBhbnkgPSA2KSA9PiBg5pyA5aSnJHtsZW5ndGh95L2N5pW05pWw77yM5bCP5pWw5LiN6LaF6L+HMuS9jWAsXG4gICAgfSxcblxuICAgIC8qIOaVtOaVsOmDqOWIhuacgOWkp+WAvCAqL1xuICAgIHBvc2l0aXZlX21heF9sZW5ndGg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHZhbHVlKSAhPT0gdmFsdWUpIHJldHVybiBmYWxzZVxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHN0cmluZ1ZhbHVlLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChzdHJpbmdWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gc3RyaW5nVmFsdWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgaWYgKHBbMF0ubGVuZ3RoID4gbGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0cmluZ1ZhbHVlLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6IChsZW5ndGg6IG51bWJlcikgPT4gYOaVtOaVsOmVv+W6puS4jeWkp+S6jiR7bGVuZ3RofWAsXG4gICAgfSxcblxuICAgIHRlbGVwaG9uZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14wXFxkezIsM30tXFxkezcsOH0kLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6ZyA56ym5ZCI77yI5Yy65Y+3LeeUteivneWPt+egge+8ieeahOagvOW8jycsXG4gICAgfSxcbiAgICAvLyDnlLXlrZDpgq7nrrHlkI7nvIBcbiAgICBlbWFpbF9zdWZmaXg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHJlZyA9IC9eQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrueahOmCrueuseWQjue8gCjljIXmi6xAKScsXG4gICAgfSxcbiAgICAvLyDnlLXlrZDpgq7nrrFcbiAgICBlbWFpbDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCByZWcgPSAvW2EtejAtOSEjJCUmJyorXCI9P15fYHt8fX4tXSsoPzouW2EtejAtOSEjJCUmJyorXCI9P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/L1xuICAgICAgICByZXR1cm4gcmVnLnRlc3QodmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6ICfor7fovpPlhaXmraPnoa7nmoTpgq7nrrEnLFxuICAgIH0sXG4gICAgLy8g55So5oi35ZCNXG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC9eKFthLXpBLVowLTlfLV17NSwyMH0pJC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+eUsemVv+W6puS4ujXvvZ4yMOS9jeeahOaVsOWtl+OAgeWtl+avjee7hOaIkCcsXG4gICAgfSxcbiAgICAvLyDlr4bnoIFcbiAgICBwYXNzd29yZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQuKikoPz0uKlxcVy4qKVthLXpBLVowLTlcXFNdW15cXHU0ZTAwLVxcdTlmYTVdezYsMjB9JC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+eUsemVv+W6puS4ujbvvZ4xNuS9jeeahOaVsOWtl+OAgeWkp+Wwj+Wtl+avjeS7peWPiuespuWPt+e7hOaIkCcsXG4gICAgfSxcbiAgICAvLyDouqvku73or4FcbiAgICBpZF9jYXJkOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvKF5cXGR7MTV9JCl8KF5cXGR7MTh9JCl8KF5cXGR7MTd9KFxcZHxYfHgpJCkvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfouqvku73or4Hlj7fnoIHkuI3nrKblkIgnLFxuICAgIH0sXG4gIH1cblxuICBleHRlbmRWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IEFycmF5PEV4dGVuZFZhbGlkYXRvcj4pOiB2b2lkIHtcbiAgICB2YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogRXh0ZW5kVmFsaWRhdG9yKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIC4uLnJlc3QgfSA9IHZhbGlkYXRvclxuICAgICAgdGhpcy52YWxpZGF0b3JzW25hbWVdID0gcmVzdFxuICAgIH0pXG4gIH1cblxuICBjaGVjayh2OiBzdHJpbmcgfCBudW1iZXIsIHJ1bGVzOiBzdHJpbmdbXSkge1xuICAgIGxldCB2YWx1ZSA9IHZcbiAgICBsZXQgc3VjY2VzcyA9IHsgdmFsaWRhdGVkOiB0cnVlLCBtc2c6ICcnIH1cblxuICAgIGlmICghcnVsZXMgfHwgIShydWxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgcmV0dXJuIHN1Y2Nlc3NcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKClcbiAgICB9XG5cbiAgICBydWxlcy5zb21lKHJ1bGUgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IHRydWVcbiAgICAgIGxldCB2YWxpZGF0b3I6IFZhbGlkYXRvckNoaWxkVFxuICAgICAgbGV0IHNSdWxlOiBhbnlbXSA9IFtdXG5cbiAgICAgIGlmIChydWxlID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tydWxlXVxuICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgICBpZiAocnVsZS5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgICAgICAgc1J1bGUgPSBydWxlLnNwbGl0KCc6JylcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbc1J1bGVbMF1dXG4gICAgICAgICAgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRvcih2YWx1ZSwgc1J1bGVbMV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgICAgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRvcih2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnIgPSB2YWxpZGF0b3I/LmVycm9yTXNnXG4gICAgICAgIHN1Y2Nlc3MgPSB7XG4gICAgICAgICAgdmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICBtc2c6IHR5cGVvZiBlcnIgPT09ICdmdW5jdGlvbicgPyBlcnIoc1J1bGVbMV0pIDogZXJyLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBzdWNjZXNzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZhbGlkYXRpb24oKVxuIiwiZXhwb3J0IGRlZmF1bHQge31cblxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5VmFsdWUgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxuKVxuXG5leHBvcnQgY29uc3Qgc2ltcGxlQ2xvbmUgPSA8VD4oZGF0YTogVCk6IFQgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUxhYmVsU3R5bGVXaWR0aCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBgZm9ybS1sYWJlbC13aWR0aC0ke2lkfWBcbiAgY29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlTmFtZSlcbiAgaWYgKERPTSkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChET00pXG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lXG59XG5cbmV4cG9ydCBjb25zdCBhZGRMYWJlbFN0eWxlV2lkdGggPSAod2lkdGg6IG51bWJlciwgbGFiZWxEaXJlY3Rpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcsIGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHJlbW92ZUxhYmVsU3R5bGVXaWR0aChpZClcblxuICBpZiAobGFiZWxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0IFNUWUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIFNUWUxFLmlkID0gYXR0cmlidXRlTmFtZVxuICAgIFNUWUxFLmlubmVySFRNTCA9IGAjJHtpZH0gLmFudC1mb3JtLWl0ZW0tbGFiZWwgeyB3aWR0aDogJHt3aWR0aH1weDsgfWBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNUWUxFKVxuICB9XG59XG5cbi8qKlxuICog5qC55o2udmFsdWXmlbDnu4Tojrflj5bmlbDnu4Tlr7nosaFbe2xhYmVsLCB2YWx1ZX1d55qE5aSa5LiqbGFiZWzlgLxcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1MYWJlbHNCeVZhbHVlID0gKFxuICBpdGVtczogQXJyYXk8YW55PixcbiAgdmFsdWU6IEFycmF5PGFueT4sXG4pOiBzdHJpbmcgfCBFbGVtZW50ID0+IHtcbiAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IFtdXG4gIHZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICBjb25zdCBmaW5kSXRlbSA9IGl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSB2YWwpXG4gICAgaWYgKGZpbmRJdGVtKSB7XG4gICAgICBsYWJlbHMucHVzaChmaW5kSXRlbS5sYWJlbClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBsYWJlbHMuam9pbign77yMJylcbn1cblxuLyoqXG4gKiDmoLnmja52YWx1ZeiOt+WPluaVsOe7hOWvueixoVt7bGFiZWwsIHZhbHVlfV3nmoRsYWJlbOWAvFxuICogQHBhcmFtIGl0ZW1zXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZyB8IG51bGx9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJdGVtTGFiZWxCeVZhbHVlID0gKFxuICBpdGVtczogQXJyYXk8YW55PixcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcixcbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGZvdW5kID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWUpXG4gIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGZvdW5kWzBdLmxhYmVsXG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbi8qKlxuICogZ2V0IFRhcmdldCB2YWx1ZVxuICogQHBhcmFtIGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRhcmdldFZhbHVlID0gKGU6IGFueSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlICYmIGUudGFyZ2V0XG4gIGxldCB2YWx1ZVxuICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm90RW1wdHlWYWx1ZSh0YXJnZXQ/LnZhbHVlKSkge1xuICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBlXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcbiAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcbiAgICAnc29ja2V0UGF0aCdcbiAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1lbW9pemUtb25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9