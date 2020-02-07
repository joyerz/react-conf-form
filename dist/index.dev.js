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
    return (React.createElement(antd_1.AutoComplete, Object.assign({}, props.props, { onChange: onChange })));
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
    const _a = props.props, { type = 'default', className = '', onClick } = _a, rest = __rest(_a, ["type", "className", "onClick"]);
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
    if (!readOnly) {
        return React.createElement(antd_1.Cascader, Object.assign({}, props.props, { onChange: change, value: value, placeholder: placeholder }));
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
    return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement(React.Fragment, null,
        checkAllAble && (React.createElement(antd_1.Checkbox, { checked: isCheckedAll(value), onChange: onCheckAllChange }, "\u5168\u9009 \u00A0")),
        React.createElement(antd_1.Checkbox.Group, Object.assign({}, props.props, { value: value, onChange: change }))));
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
        const { format } = props, rest = __rest(props, ["format"]);
        const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT);
        const fieldValue = value ? moment(value) : undefined;
        return readOnly
            ? (fieldValue && fieldValue.format(format))
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
        const autoComplete = props.autoComplete || 'off';
        return readOnly
            ? value
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input, Object.assign({ placeholder: "\u8BF7\u8F93\u5165" }, props, { type: type, value: value, onChange: this.onChange, autoComplete: autoComplete }))));
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
    return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement("div", { style: style },
        React.createElement(antd_1.Radio.Group, Object.assign({}, props.props, { value: value, onChange: change }))));
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
        const { format } = props, rest = __rest(props, ["format"]);
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
const { Option } = antd_1.Select;
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
        const { value, readOnly, props } = this.props;
        const { items = [], placeholder = '请选择', showSearch = true, optionFilterProp = 'label', allowClear = true } = props, rest = __rest(props, ["items", "placeholder", "showSearch", "optionFilterProp", "allowClear"]);
        return readOnly
            ? common_1.getItemLabelByValue(items, value)
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Select, Object.assign({}, rest, { placeholder: placeholder, value: value, optionFilterProp: optionFilterProp, showSearch: showSearch, allowClear: allowClear, onChange: this.onChange }), items.map(item => (React.createElement(Option, { key: item.value }, item.label))))));
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
        return readOnly
            ? value
            : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input.TextArea, Object.assign({ placeholder: "\u8BF7\u8F93\u5165" }, props, { value: value, onChange: this.onChange, autoComplete: autoComplete }))));
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
        const { format = this.FORMAT } = props, rest = __rest(props, ["format"]);
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
        const _a = this.props, { value = [], readOnly } = _a, rest = __rest(_a, ["value", "readOnly"]);
        const { maxFiles = 10, blobName = 'blob', fileType = 'img', showErrorMessage = true, listType = 'picture-card', headers = {}, } = this.props.props;
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
const map = {
    render: Render_1.default,
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
        this.mounted = false;
    }
    render() {
        const { fields, dataSource, labelDirection, labelWidth, } = this.props;
        this.isDataSourceChanged(dataSource);
        this.convertDataFromFields(fields, dataSource || {}); // data to fields
        const ID = `FORM_${parseInt((Math.random() * 10000).toString(), 10).toString()}`;
        common_1.addLabelStyleWidth(labelWidth, labelDirection, ID);
        return (React.createElement(antd_1.Spin, { spinning: this.props.spinning },
            React.createElement("form", { onSubmit: this.onSubmit, id: ID }, fields.map((field, idx) => {
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
exports.addLabelStyleWidth = (width, labelDirection, id) => {
    const attributeName = 'form-label-width';
    const DOM = document.getElementById(attributeName);
    if (DOM)
        document.body.removeChild(DOM);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9BdXRvQ29tcGxldGUudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0Nhc2NhZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0RhdGVwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXQudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXROdW1iZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXRQYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9QaWNQcmV2aWV3LnNjc3M/YWQwZCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1BpY1ByZXZpZXcudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFkaW8udHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFuZ2VwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmVuZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9UZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9UaW1lcGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1VwbG9hZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9Gb290ZXJCdXR0b25zL0J1dHRvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0Zvb3RlckJ1dHRvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vUm93LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2luZGV4LnNjc3M/MTBlZSIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL3V0aWxzL0Zvcm1WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtL2V4dGVybmFsIFwibWVtb2l6ZS1vbmVcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJy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OztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xC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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImluZGV4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRm9ybS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZFxuICBwcm9wczoge1xuICAgIGRhdGFTb3VyY2U6IGFueSxcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShwcm9wcy5uYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZShwcm9wcy5uYW1lLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRvQ29tcGxldGVcbiAgICAgIHsuLi5wcm9wcy5wcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvZXMvYnV0dG9uJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2J1dHRvbi9zdHlsZSdcblxuaW1wb3J0IHsgQnV0dG9uVHlwZSB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgZGF0YTogYW55LFxuICBwcm9wczoge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICB0eXBlOiBCdXR0b25UeXBlLFxuICAgIG9uQ2xpY2s6IChkYXRhOiBPYmplY3QpID0+IGFueVxuICB9XG4gIFtuYW1lOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIG9uQ2xpY2ssXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHMucHJvcHNcblxuICBsZXQgYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9ICdkZWZhdWx0J1xuICBjb25zdCBpbmRleCA9IGJ1dHRvblR5cGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHR5cGUpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHR5cGU9e2J1dHRvblR5cGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2J1dHRvblR5cGV9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGRhdGEpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvQnV0dG9uPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhc2NhZGVyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBDYXNjYWRlciBmcm9tICdhbnRkL2VzL2Nhc2NhZGVyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2Nhc2NhZGVyL3N0eWxlJ1xuXG5mdW5jdGlvbiBnZXRDYXNjYWRlckxhYmVsKG9yaWdpbmFsVmFsdWUsIGN1ck9wdGlvbnMsIHZhbHVlSW5kZXgsIGxhYmVsQXJyKSB7XG4gIGxldCBpbmRleCA9IHZhbHVlSW5kZXhcbiAgaWYgKG9yaWdpbmFsVmFsdWUgJiYgaW5kZXggPCBvcmlnaW5hbFZhbHVlLmxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXAgPSBjdXJPcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBvcmlnaW5hbFZhbHVlW3ZhbHVlSW5kZXhdKVxuICAgIGlmICh0ZW1wKSB7XG4gICAgICBsYWJlbEFyci5wdXNoKHRlbXAubGFiZWwpXG4gICAgfVxuICAgIGlmICh0ZW1wICYmIHRlbXAuY2hpbGRyZW4pIHtcbiAgICAgIGluZGV4ICs9IDFcbiAgICAgIHJldHVybiBnZXRDYXNjYWRlckxhYmVsKFxuICAgICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgICB0ZW1wLmNoaWxkcmVuLFxuICAgICAgICB2YWx1ZUluZGV4LFxuICAgICAgICBsYWJlbEFycixcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxBcnIuam9pbignIC8gJylcbiAgfVxuXG4gIHJldHVybiBsYWJlbEFyci5qb2luKCcgLyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNjYWRlckZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyByZWFkT25seSwgdmFsdWUsIG5hbWUgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UsIHBsYWNlaG9sZGVyID0gJ+ivt+mAieaLqScgfSA9IHByb3BzLnByb3BzXG5cbiAgY29uc3QgY2hhbmdlID0gKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRPcHRpb25zOiBhbnkpID0+IHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkT3B0aW9ucylcbiAgICB9XG4gICAgcHJvcHMub25DaGFuZ2UobmFtZSwgc2VsZWN0ZWRWYWx1ZSlcbiAgfVxuXG4gIGlmICghcmVhZE9ubHkpIHtcbiAgICByZXR1cm4gPENhc2NhZGVyIHsuLi5wcm9wcy5wcm9wc30gb25DaGFuZ2U9e2NoYW5nZX0gdmFsdWU9e3ZhbHVlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gIH1cblxuICByZXR1cm4gZ2V0Q2FzY2FkZXJMYWJlbCh2YWx1ZSwgb3B0aW9ucywgMCwgW10pXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEl0ZW1MYWJlbEJ5VmFsdWUsIGdldFRhcmdldFZhbHVlLCBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveEZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlLCByZWFkT25seSwgb25DaGFuZ2UsIG5hbWUsXG4gIH0gPSBwcm9wc1xuICBjb25zdCB7IG9wdGlvbnMgPSBbXSwgY2hlY2tBbGxBYmxlID0gZmFsc2UgfSA9IHByb3BzLnByb3BzXG5cbiAgLy8g5YWo6YCJXG4gIGNvbnN0IG9uQ2hlY2tBbGxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbXVxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2goaXRlbSA9PiBuZXdWYWx1ZS5wdXNoKGl0ZW0udmFsdWUpKVxuICAgIH1cbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcblxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXNDaGVja2VkQWxsID0gKHZhbHVlcz86IGFueVtdKSA9PiAoXG4gICAgbm90RW1wdHlWYWx1ZSh2YWx1ZXMpICYmIHZhbHVlcy5sZW5ndGggPT09IG9wdGlvbnMubGVuZ3RoXG4gIClcblxuICBjb25zdCBjaGFuZ2UgPSAodGFyZ2V0OiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldFRhcmdldFZhbHVlKHRhcmdldClcbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWFkT25seSA/IChcbiAgICBnZXRJdGVtTGFiZWxCeVZhbHVlKG9wdGlvbnMsIHZhbHVlKVxuICApIDogKFxuICAgIDw+XG4gICAgICB7Y2hlY2tBbGxBYmxlICYmIChcbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkQWxsKHZhbHVlKX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGVja0FsbENoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIOWFqOmAiSAmbmJzcDtcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICl9XG4gICAgICA8Q2hlY2tib3guR3JvdXBcbiAgICAgICAgey4uLnByb3BzLnByb3BzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBEYXRlcGlja2VyIGZyb20gJ2FudGQvZXMvZGF0ZS1waWNrZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvZGF0ZS1waWNrZXIvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdZWVlZLU1NLUREJ1xuXG4gIEZPUk1BVF9USU1FID0gJ1lZWVktTU0tREQgSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gIXZhbHVlID8gdmFsdWUgOiB2YWx1ZS52YWx1ZU9mKClcbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0LCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIGNvbnN0IEZPUk1BVCA9IGZvcm1hdCB8fCAocmVzdC5zaG93VGltZSA/IHRoaXMuRk9STUFUX1RJTUUgOiB0aGlzLkZPUk1BVClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gdmFsdWUgPyBtb21lbnQodmFsdWUpIDogdW5kZWZpbmVkXG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gKGZpZWxkVmFsdWUgJiYgZmllbGRWYWx1ZS5mb3JtYXQoZm9ybWF0KSlcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIGZvcm1hdD17Rk9STUFUfVxuICAgICAgICAgICAgdmFsdWU9e2ZpZWxkVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCB7IGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSwgcmVhZE9ubHksIHR5cGUsIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlIHx8ICdvZmYnXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHZhbHVlXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJudW1iZXJcIiAvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gIClcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiwgU3BpbiB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCAnLi9QaWNQcmV2aWV3LnNjc3MnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNob3dMaXN0OiBib29sZWFuLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIHVybDogc3RyaW5nW10gfCBzdHJpbmcsXG4gIHN0eWxlPzogT2JqZWN0XG4gIG9uSGlkZT86IFZvaWRGdW5jdGlvblxufVxuXG4vKipcbiAqIOWbvueJh+mihOiniFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNQcmV2aWV3ZXIoXG4gIHtcbiAgICBzaG93TGlzdCA9IHRydWUsXG4gICAgdXJsID0gW10sXG4gICAgc3R5bGUgPSB7fSxcbiAgICBjdXJyZW50ID0gJycsXG4gICAgb25IaWRlLFxuICB9OiBQcm9wcyxcbikge1xuICBsZXQgaW1hZ2VzID0gW11cbiAgaWYgKHVybCkge1xuICAgIGltYWdlcyA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gW3VybF0gOiB1cmxcbiAgfVxuICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKGN1cnJlbnQpXG4gIGNvbnN0IFtkZWcsIHNldERlZ10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaXNJbml0LCBzZXRJc0luaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVTaG93ID0gKHRhcmdldFNyYzogc3RyaW5nKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRTcmModGFyZ2V0U3JjKVxuICB9XG5cbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggLT0gMVxuICAgIGlkeCA9IGlkeCA8IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggKz0gMVxuICAgIGlkeCA9IGlkeCA+PSBpbWFnZXMubGVuZ3RoID8gMCA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cblxuICBjb25zdCByb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnICsgMSlcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uQmFjayA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnIC0gMSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgaWYgKCFzaG93TGlzdCAmJiAhaXNJbml0KSB7XG4gICAgaGFuZGxlU2hvdyhjdXJyZW50KVxuICAgIHNldElzSW5pdCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMaXN0XG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1yb3dcIj5cbiAgICAgICAgICB7aW1hZ2VzXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtpdGVtfV8ke2lkeH1gXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1ib3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7dmlzaWJsZVxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtdmlld2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXNwaW4gcmVhY3QtY29uZi1mb3JtLXBpYy13aGl0ZS1zcGluXCI+PFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9IHRpcD1cImxvYWRpbmcuLi5cIiBzaXplPVwibGFyZ2VcIiAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1jb250YWluZXJcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtwcmV2fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtuZXh0fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9ufT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cInJlZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9uQmFja30+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1bmRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwicHJldmltZ1wiXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke2RlZyAqIDkwfWRlZylgLCBvcGFjaXR5OiBsb2FkaW5nID8gMCA6IDEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaW1nLWNvbnRhaW5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0SXRlbUxhYmVsQnlWYWx1ZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhZGlvRmllbGQocHJvcHM6IGFueSkge1xuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgcmVhZE9ubHksXG4gICAgb25DaGFuZ2UsXG4gICAgbmFtZSxcbiAgICBzdHlsZSA9IHt9LFxuICB9ID0gcHJvcHNcbiAgY29uc3QgeyBvcHRpb25zID0gW10gfSA9IHByb3BzLnByb3BzXG5cbiAgY29uc3QgY2hhbmdlID0gKHRhcmdldDogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXRUYXJnZXRWYWx1ZSh0YXJnZXQpXG4gICAgb25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVhZE9ubHkgPyAoXG4gICAgZ2V0SXRlbUxhYmVsQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSlcbiAgKSA6IChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8UmFkaW8uR3JvdXBcbiAgICAgICAgey4uLnByb3BzLnByb3BzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBEYXRlcGlja2VyIGZyb20gJ2FudGQvZXMvZGF0ZS1waWNrZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvZGF0ZS1waWNrZXIvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIHNpbXBsZUNsb25lLCBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBGT1JNQVQgPSAnWVlZWS1NTS1ERCdcblxuICBGT1JNQVRfVElNRSA9ICdZWVlZLU1NLUREIEhIOm1tJ1xuXG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd1RpbWUgfSA9IHRoaXMucHJvcHMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWVbMF0pKSB7XG4gICAgICBpZiAoIXNob3dUaW1lKSB7XG4gICAgICAgIHZhbHVlID0gW1xuICAgICAgICAgIG1vbWVudChtb21lbnQodmFsdWVbMF0pLmZvcm1hdCgnWVlZWS1NTS1ERCAwMDowMDowMCcpKS52YWx1ZU9mKCksXG4gICAgICAgICAgbW9tZW50KG1vbWVudCh2YWx1ZVsxXSkuZm9ybWF0KCdZWVlZLU1NLUREIDIzOjU5OjU5JykpLnZhbHVlT2YoKSxcbiAgICAgICAgXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBbbW9tZW50KHZhbHVlWzBdKS52YWx1ZU9mKCksIG1vbWVudCh2YWx1ZVsxXSkudmFsdWVPZigpXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHksIHByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmb3JtYXQsIC4uLnJlc3QgfSA9IHByb3BzXG4gICAgY29uc3QgRk9STUFUID0gZm9ybWF0IHx8IChyZXN0LnNob3dUaW1lID8gdGhpcy5GT1JNQVRfVElNRSA6IHRoaXMuRk9STUFUKVxuXG4gICAgbGV0IHRpbWVWYWx1ZSA9IFtudWxsLCBudWxsXVxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRpbWVWYWx1ZSA9IHNpbXBsZUNsb25lKHZhbHVlKVxuICAgICAgdGltZVZhbHVlWzBdID0gbW9tZW50KHZhbHVlWzBdKVxuICAgICAgdGltZVZhbHVlWzFdID0gbW9tZW50KHZhbHVlWzFdKVxuICAgIH1cblxuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyBgJHttb21lbnQodGltZVZhbHVlWzBdKS5mb3JtYXQoZm9ybWF0KX0gfiAke21vbWVudCh0aW1lVmFsdWVbMV0pLmZvcm1hdChmb3JtYXQpfWBcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEYXRlUGlja2VyLlJhbmdlUGlja2VyXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIGZvcm1hdD17Rk9STUFUfVxuICAgICAgICAgICAgdmFsdWU9e3RpbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpZWxkSXRlbVQgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0gRmllbGRJdGVtVCAmIHtcbiAgZGF0YTogT2JqZWN0XG4gIHJlbmRlcjogKGRhdGE6T2JqZWN0KSA9PiBhbnlcbn1cblxuY29uc3QgUmVuZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHNcbiAgY29uc3QgeyByZW5kZXIgfSA9IHByb3BzLnByb3BzXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXInLCB0eXBlb2YgcmVuZGVyLCByZW5kZXIpXG4gIHJldHVybiB0eXBlb2YgcmVuZGVyID09PSAnZnVuY3Rpb24nID8gcmVuZGVyKGRhdGEpIDogKHJlbmRlciB8fCBudWxsKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBTZWxlY3QgZnJvbSAnYW50ZC9lcy9zZWxlY3QnXG4vLyBpbXBvcnQgJ2FudGQvZXMvc2VsZWN0L3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBnZXRJdGVtTGFiZWxCeVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm90RW1wdHlWYWx1ZSh0YXJnZXQ/LnZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlXG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHksIHByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMgPSBbXSxcbiAgICAgIHBsYWNlaG9sZGVyID0gJ+ivt+mAieaLqScsXG4gICAgICBzaG93U2VhcmNoID0gdHJ1ZSxcbiAgICAgIG9wdGlvbkZpbHRlclByb3AgPSAnbGFiZWwnLFxuICAgICAgYWxsb3dDbGVhciA9IHRydWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gZ2V0SXRlbUxhYmVsQnlWYWx1ZShpdGVtcywgdmFsdWUpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9e29wdGlvbkZpbHRlclByb3B9XG4gICAgICAgICAgICBzaG93U2VhcmNoPXtzaG93U2VhcmNofVxuICAgICAgICAgICAgYWxsb3dDbGVhcj17YWxsb3dDbGVhcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpdGVtLnZhbHVlfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm90RW1wdHlWYWx1ZSh0YXJnZXQ/LnZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlXG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSB8fCAnb2ZmJ1xuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBUaW1lcGlja2VyIGZyb20gJ2FudGQvZXMvdGltZS1waWNrZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvdGltZS1waWNrZXIvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIHNpbXBsZUNsb25lLCBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBGT1JNQVQgPSAnSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXQgPSB0aGlzLkZPUk1BVCB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHksIHByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmb3JtYXQgPSB0aGlzLkZPUk1BVCwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHRpbWVWYWx1ZSA9IG5vdEVtcHR5VmFsdWUodmFsdWUpXG4gICAgICA/IG1vbWVudChzaW1wbGVDbG9uZSh2YWx1ZSksIGZvcm1hdClcbiAgICAgIDogdW5kZWZpbmVkXG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIHZhbHVlPXt0aW1lVmFsdWV9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXBsb2FkLCBJY29uLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFBpY1ByZXZpZXcgZnJvbSAnLi9QaWNQcmV2aWV3J1xuXG4vKipcbiAqIFVwbG9hZFxuICogQHR5cGUge1hNTH1cbiAqL1xuY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICA8ZGl2PlxuICAgIDxJY29uIHR5cGU9XCJwbHVzXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPuS4iuS8oDwvZGl2PlxuICA8L2Rpdj5cbilcbmNvbnN0IHVwbG9hZEJ1dHRvblRleHQgPSAoXG4gIDxCdXR0b24+XG4gICAgPEljb24gdHlwZT1cInVwbG9hZFwiIC8+XG4gICAgJm5ic3A75LiK5LygXG4gIDwvQnV0dG9uPlxuKVxuXG50eXBlIFVwbG9hZEZpZWxkUHJvcHMgPSB7XG4gIHZhbHVlPzogQXJyYXk8YW55PixcbiAgbmFtZTogc3RyaW5nLFxuICByZWFkT25seT86IGJvb2xlYW4sXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55W10pID0+IHZvaWRcbiAgcHJvcHM6IHtcbiAgICBibG9iTmFtZTogc3RyaW5nLFxuICAgIG1heEZpbGVzOiBudW1iZXIsXG4gICAgbWF4RmlsZVNpemU6IG51bWJlcixcbiAgICBoZWlnaHRSYXRpbz86IG51bWJlcixcbiAgICB3aWR0aFJhdGlvPzogbnVtYmVyLFxuICAgIGhlYWRlcnM/OiBhbnksXG4gICAgbGlzdFR5cGU/OiAndGV4dCcgfCAncGljdHVyZScgfCAncGljdHVyZS1jYXJkJyxcbiAgICBmaWxlVHlwZTogc3RyaW5nLCAvLyDkuIrkvKDmlofku7bnsbvlnosgIGltZyAvIG90aGVyXG4gICAgc2hvd0Vycm9yTWVzc2FnZT86IGJvb2xlYW4sXG4gICAgb25DaGFuZ2U6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCxcbiAgICBvblVwbG9hZGVkPzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLFxuICAgIGdldFJlc3BvbnNlRGF0YT86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCAvLyDojrflj5bov5Tlm57nmoTmlbDmja5cbiAgICBhY3Rpb246IHN0cmluZyxcbiAgfVxufVxuXG50eXBlIFVwbG9hZFN0YXRlID0ge1xuICBwcmV2aWV3VmlzaWJsZTogYm9vbGVhbixcbiAgcHJldmlld0ltYWdlOiBzdHJpbmdcbiAgZXJyb3JNc2c6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkRmllbGQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFVwbG9hZEZpZWxkUHJvcHMsIFVwbG9hZFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gcHJvcHM6IHtcbiAgICAvLyAgIHNob3dFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgLy8gICBtYXhGaWxlczogNSwgLy8g5pyA5aSa6IO95LiK5Lyg5paH5Lu25pWwXG4gICAgLy8gICBtYXhGaWxlU2l6ZTogMTAsIC8vIOacgOWkp+S4iuS8oOS9k+enr1xuICAgIC8vICAgZmlsZVR5cGU6ICdpbWcnLCAvLyDpu5jorqTkuIrkvKDlm77niYdcbiAgICAvLyB9LFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcHJldmlld1Zpc2libGU6IGZhbHNlLFxuICAgIHByZXZpZXdJbWFnZTogJycsXG4gICAgZXJyb3JNc2c6ICcnLFxuICB9XG5cbiAgb25DaGFuZ2UgPSAoaW5mbzogYW55KTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJyEhISEhIei/m+WFpSBvbkNoYW5nZSAnKVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uVXBsb2FkZWQgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBsZXQgZmlsZUxpc3QgPSBbLi4uaW5mby5maWxlTGlzdF1cblxuICAgIGZpbGVMaXN0LmZvckVhY2goKGZpbGUsIGlkeCkgPT4ge1xuICAgICAgaWYgKGZpbGUucmVzcG9uc2UpIHtcbiAgICAgICAgZmlsZUxpc3RbaWR4XSA9IHtcbiAgICAgICAgICAuLi5maWxlTGlzdFtpZHhdLFxuICAgICAgICAgIHVybDogZmlsZS5yZXNwb25zZS5oZWFkZXJzLmxvY2F0aW9uLFxuICAgICAgICAgIG5hbWU6IGZpbGUucmVzcG9uc2UuZmlsZW5hbWUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWxlXG4gICAgfSlcblxuICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnByb3BzLmdldFJlc3BvbnNlRGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLnByb3BzLmdldFJlc3BvbnNlRGF0YShpbmZvLmZpbGUucmVzcG9uc2UpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICBmaWxlTGlzdCA9IFtdXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6IGluZm8uZmlsZT8ucmVzcG9uc2U/Lmludm9pY2U/Lm1lc3NhZ2UgfHwgJ+S4iuS8oOmUmeivrywg6K+36YeN6K+VIScgfSlcbiAgICB9IGVsc2UgaWYgKCFpbmZvLmZpbGUuc3RhdHVzKSB7XG4gICAgICAvLyDmlofku7botoXov4flpKflsI/miJblhbblroPkuI3mu6HotrPliY3nq6/pmZDliLbmnaHku7bmg4XlhrVcbiAgICAgIGZpbGVMaXN0ID0gZmlsZUxpc3Quc2xpY2UoMCwgZmlsZUxpc3QubGVuZ3RoIC0gMSlcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIGZpbGVMaXN0KVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZmlsZUxpc3QpXG4gICAgfVxuICAgIGlmIChvblVwbG9hZGVkKSB7XG4gICAgICBvblVwbG9hZGVkKGZpbGVMaXN0KVxuICAgIH1cbiAgfVxuXG4gIG9uUHJldmlldyA9IChmaWxlOiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1Zpc2libGU6IHRydWUsIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfSlcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1Zpc2libGU6IGZhbHNlLCBwcmV2aWV3SW1hZ2U6ICcnIH0pXG4gIH1cblxuICBjdXN0b21SZXF1ZXN0ID0gKFxuICAgIHtcbiAgICAgIGZpbGUsXG4gICAgICBvblN1Y2Nlc3MsXG4gICAgICBvbkVycm9yLFxuICAgICAgb25Qcm9ncmVzcyxcbiAgICB9LFxuICApID0+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIGFjdGlvbiB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbilcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChhY3Rpb24sIGZvcm1EYXRhLCB7XG4gICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IG9uUHJvZ3Jlc3MsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMgfHwge30sXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSlcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LiK5Lyg5aSx6LSlIScgfSlcbiAgICAgICAgb25FcnJvcigpXG4gICAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBhYm9ydCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LiK5Lyg57uI5q2iIScgfSlcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgYmVmb3JlVXBsb2FkKGZpbGU6IGFueSwgdHlwZTogc3RyaW5nKSB7XG4gICAgLy8gY29uc29sZS5sb2coJyEhISEhIei/m+WFpSBiZWZvcmVVcGxvYWQgJylcbiAgICBjb25zdCB7IG1heEZpbGVTaXplID0gMTAgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICAvLyBpZiAoaGVpZ2h0UmF0aW8gJiYgd2lkdGhSYXRpbykgeyAvLyDpqozor4Hplb/lrr3mr5TkvotcbiAgICAvLyAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gYXdhaXQgZ2V0RmlsZURpbWVuc2lvbihmaWxlKVxuICAgIC8vICAgaWYgKGhlaWdodC93aWR0aCAhPT0gaGVpZ2h0UmF0aW8vd2lkdGhSYXRpbykge1xuICAgIC8vICAgICBtZXNzYWdlLmVycm9yKGDplb/lrr3mr5Tlv4XpobvmmK8gJHtoZWlnaHRSYXRpb30gLyAke3dpZHRoUmF0aW99YClcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIOmqjOivgeaWh+S7tuWkp+Wwj3NpemVcbiAgICBjb25zdCBmaWxlU2l6ZUxhcmdlciA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0ID4gbWF4RmlsZVNpemVcbiAgICBpZiAoZmlsZVNpemVMYXJnZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogYOaWh+S7tuS9k+enr+Wkp+Wwj+S4jei2hei/hyR7bWF4RmlsZVNpemV9TWAgfSlcbiAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoYOaWh+S7tuS9k+enr+Wkp+Wwj+S4jei2hei/hyR7bWF4RmlsZVNpemV9TWApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyDpqozor4Hmlofku7bmoLzlvI9cbiAgICBpZiAodHlwZSA9PT0gJ2ltZycpIHtcbiAgICAgIGNvbnN0IGlzSlBHID0gZmlsZS50eXBlXG4gICAgICBpZiAoaXNKUEcgPT09ICdpbWFnZS9qcGVnJyB8fCBpc0pQRyA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICfku4XmlK/mjIHkuIrkvKBqcGcvcG5n5qC85byP5Zu+54mHJyB9KVxuICAgICAgLy8gbWVzc2FnZS5lcnJvcign5LuF5pSv5oyB5LiK5LyganBnL3BuZ+agvOW8j+WbvueJhycpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUgPSBbXSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgbWF4RmlsZXMgPSAxMCxcbiAgICAgIGJsb2JOYW1lID0gJ2Jsb2InLFxuICAgICAgZmlsZVR5cGUgPSAnaW1nJyxcbiAgICAgIHNob3dFcnJvck1lc3NhZ2UgPSB0cnVlLFxuICAgICAgbGlzdFR5cGUgPSAncGljdHVyZS1jYXJkJyxcbiAgICAgIGhlYWRlcnMgPSB7fSxcbiAgICB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIC8vIHZhbHVlID0gdmFsdWUgfHwgW11cblxuXG4gICAgY29uc3QgYnV0dG9uID0gbGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnID8gdXBsb2FkQnV0dG9uIDogdXBsb2FkQnV0dG9uVGV4dFxuICAgIGNvbnN0IGZvcm1hdFZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgY29uc3QgaW1hZ2VzVXJscyA9IFtdXG4gICAgZm9ybWF0VmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGltYWdlc1VybHMucHVzaChlbGVtZW50Py51cmwpXG4gICAgfSlcblxuICAgIGZvcm1hdFZhbHVlLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3JtYXRWYWx1ZVtpZHhdID0ge1xuICAgICAgICAgIHVpZDogYCR7aXRlbX1fJHtpZHh9YCxcbiAgICAgICAgICB1cmw6IGl0ZW0sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9KVxuXG4gICAgLy8gY29uc29sZS5sb2coJ2VycicsIHRoaXMuc3RhdGUuZXJyb3JNc2csIHNob3dFcnJvck1lc3NhZ2UpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgIDxVcGxvYWRcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBrZXk9e2Jsb2JOYW1lfVxuICAgICAgICAgIG5hbWU9e2Jsb2JOYW1lfVxuICAgICAgICAgIGhlYWRlcnM9e2hlYWRlcnN9XG4gICAgICAgICAgbGlzdFR5cGU9e2xpc3RUeXBlfVxuICAgICAgICAgIGZpbGVMaXN0PXtmb3JtYXRWYWx1ZX1cbiAgICAgICAgICBzaG93VXBsb2FkTGlzdFxuICAgICAgICAgIG9uQ2hhbmdlPXtmaWxlID0+IHRoaXMub25DaGFuZ2UoZmlsZSl9XG4gICAgICAgICAgYmVmb3JlVXBsb2FkPXtmaWxlID0+IHRoaXMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVUeXBlKX1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgb25QcmV2aWV3PXt0aGlzLm9uUHJldmlld31cbiAgICAgICAgICBjdXN0b21SZXF1ZXN0PXt0aGlzLmN1c3RvbVJlcXVlc3R9IC8qIOimhueblum7mOiupOeahOS4iuS8oOihjOS4uiAqL1xuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlLmxlbmd0aCA+PSBtYXhGaWxlcyB8fCByZWFkT25seSA/IG51bGwgOiBidXR0b259XG4gICAgICAgIDwvVXBsb2FkPlxuXG4gICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTXNnICYmIHNob3dFcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWVycm9yXCI+e3RoaXMuc3RhdGUuZXJyb3JNc2d9PC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMuc3RhdGUucHJldmlld1Zpc2libGUgJiYgKFxuICAgICAgICAgIDxQaWNQcmV2aWV3XG4gICAgICAgICAgICB1cmw9e2ltYWdlc1VybHN9XG4gICAgICAgICAgICBzaG93TGlzdD17ZmFsc2V9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgY3VycmVudD17dGhpcy5zdGF0ZS5wcmV2aWV3SW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWVsZEl0ZW1ULCBFeHRlbmRGaWVsZCB9IGZyb20gJy4uL2luZGV4LmQnXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4vUmVuZGVyJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCdcbmltcG9ydCBUaW1lcGlja2VyIGZyb20gJy4vVGltZXBpY2tlcidcbmltcG9ydCBSYW5nZXBpY2tlciBmcm9tICcuL1JhbmdlcGlja2VyJ1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyJ1xuaW1wb3J0IENhc2NhZGVyRmllbGQgZnJvbSAnLi9DYXNjYWRlcidcbmltcG9ydCBVcGxvYWRCb3ggZnJvbSAnLi9VcGxvYWQnXG5pbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gJy4vQXV0b0NvbXBsZXRlJ1xuaW1wb3J0IElucHV0UGFzc3dvcmQgZnJvbSAnLi9JbnB1dFBhc3N3b3JkJ1xuaW1wb3J0IElucHV0TnVtYmVyIGZyb20gJy4vSW5wdXROdW1iZXInXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmltcG9ydCBSYWRpbyBmcm9tICcuL1JhZGlvJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXG5cbmNvbnN0IG1hcCA9IHtcbiAgcmVuZGVyOiBSZW5kZXIsXG4gIGlucHV0OiBJbnB1dCxcbiAgYnV0dG9uOiBCdXR0b24sXG4gIHNlbGVjdDogU2VsZWN0LFxuICB0aW1lcGlja2VyOiBUaW1lcGlja2VyLFxuICByYW5nZXBpY2tlcjogUmFuZ2VwaWNrZXIsXG4gIGRhdGVwaWNrZXI6IERhdGVwaWNrZXIsXG4gIGNhc2NhZGVyOiBDYXNjYWRlckZpZWxkLFxuICBpbnB1dFBhc3N3b3JkOiBJbnB1dFBhc3N3b3JkLFxuICBpbnB1dE51bWJlcjogSW5wdXROdW1iZXIsXG4gIHRleHRhcmVhOiBUZXh0YXJlYSxcbiAgcmFkaW86IFJhZGlvLFxuICBjaGVja2JveDogQ2hlY2tib3gsXG4gIHVwbG9hZDogVXBsb2FkQm94LFxuICBhdXRvQ29tcGxldGU6IEF1dG9Db21wbGV0ZSxcbn1cblxuLyogQWRkIGV4dHJhY3QgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBhZGRGaWVsZHMgPSAoZXh0ZW5kRmllbGRzOiBBcnJheTxFeHRlbmRGaWVsZD4pID0+IChcbiAgZXh0ZW5kRmllbGRzLmZvckVhY2goKGV4dGVuZEZpZWxkOiBFeHRlbmRGaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgY29tcG9uZW50IH0gPSBleHRlbmRGaWVsZFxuICAgIG1hcFtuYW1lXSA9IGNvbXBvbmVudFxuICB9KVxuKVxuXG4vKiBGaWVsZCBNYXAgKi9cbmNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcpID0+IG1hcFt0eXBlXSB8fCBudWxsXG5cbi8qIEZpZWxkIE1hcHBpbmcgKi9cbnR5cGUgUHJvcHMgPSB7IGRhdGE6IE9iamVjdCwgb25DaGFuZ2U6IGFueSwgbmFtZT86IHN0cmluZywgdmFsdWU6IGFueSB9ICYgRmllbGRJdGVtVFxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHR5cGUpXG4gIHJldHVybiBDb21wb25lbnRcbiAgICA/IDxDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgOiBudWxsXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9lcy9idXR0b24nXG4vLyBpbXBvcnQgJ2FudGQvZXMvYnV0dG9uL3N0eWxlJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEJ1dHRvblQsIEZpZWxkSXRlbVQsIEJ1dHRvblR5cGUgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZHM/OiBBcnJheTxGaWVsZEl0ZW1UIHwgQnV0dG9uVD5cbiAgZ3V0dGVyPzogbnVtYmVyXG4gIG9uQnV0dG9uQ2xpY2s/OiAoa2V5OiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pID0+IHZvaWRcbiAgZGF0YT86IE9iamVjdCxcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IFByb3BzKTogYW55IHtcbiAgY29uc3QgeyBndXR0ZXIgPSAxNiwgZmllbGRzIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIGZpZWxkcy5tYXAoKGJ1dHRvbjogQnV0dG9uVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICBsYWJlbCA9ICcnLFxuICAgICAgICBkaXNwbGF5ID0gdHJ1ZSxcbiAgICAgIH0gPSBidXR0b25cblxuICAgICAgY29uc3Qge1xuICAgICAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgICAgICBjbGFzc05hbWUgPSAnJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgYWRkb24sXG4gICAgICAgIHN0eWxlID0ge30sXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH0gPSBidXR0b24ucHJvcHMgfHwge31cblxuICAgICAgbGV0IGJ1dHRvblR5cGU6IGFueVxuICAgICAgY29uc3QgaW5kZXggPSBidXR0b25UeXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0eXBlKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0LmJsb2NrKSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXNwbGF5XG4gICAgICAgID8gKFxuICAgICAgICAgIDxzcGFuIGtleT17a2V5fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge2lkeCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLWJ1dHRvbi1zcGFjZS1iZXR3ZWVuXCIgc3R5bGU9e3sgd2lkdGg6IGd1dHRlciB9fSAvPn1cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT17YnV0dG9uVHlwZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJ1dHRvbkNsaWNrKGtleSwgb25DbGljayl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICB7YWRkb24gJiYgYWRkb24ocHJvcHMuZGF0YSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgIH0pXG4gIClcbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi9CdXR0b25Hcm91cCdcbmltcG9ydCB7IEZpZWxkc0NvbmZUIH0gZnJvbSAnLi4vaW5kZXguZCdcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRmllbGRzQ29uZlQge1xuICBvbkJ1dHRvbkNsaWNrOiAodHlwZTogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSA9PiB2b2lkXG59XG5cbmNvbnN0IGFsaWduTWFwID0ge1xuICBsZWZ0OiAnZmxleC1zdGFydCcsXG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gIHJpZ2h0OiAnZmxleC1lbmQnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJCdXR0b25zKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgc3R5bGUsXG4gICAgYWxpZ24sXG4gICAgdHlwZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gICAganVzdGlmeUNvbnRlbnQ6IGFsaWduTWFwW2FsaWduIHx8ICdjZW50ZXInXSxcbiAgICAuLi5zdHlsZSxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1idXR0b24td3JhcHBlclwiXG4gICAgICBzdHlsZT17d3JhcHBlclN0eWxlfVxuICAgID5cbiAgICAgIDxCdXR0b25Hcm91cFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuRm9vdGVyQnV0dG9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXk6IHRydWUsXG4gIHN0eWxlOiB7fSxcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm93LCBDb2wsIEZvcm0gfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IFJvdyBmcm9tICdhbnRkL2VzL3Jvdydcbi8vIGltcG9ydCBDb2wgZnJvbSAnYW50ZC9lcy9jb2wnXG4vLyBpbXBvcnQgRm9ybSBmcm9tICdhbnRkL2VzL2Zvcm0nXG4vLyBpbXBvcnQgJ2FudGQvZXMvcm93L3N0eWxlJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2NvbC9zdHlsZSdcbi8vIGltcG9ydCAnYW50ZC9lcy9mb3JtL3N0eWxlJ1xuXG5pbXBvcnQgeyBERUZBVUxUX0dVVFRFUiwgREVGQVVMVF9TUEFOIH0gZnJvbSAnQEZvcm0vY29uZmlnJ1xuaW1wb3J0IHsgRmllbGRzQ29uZlQsIEZpZWxkSXRlbVQgfSBmcm9tICcuL2luZGV4LmQnXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCdcblxudHlwZSBQcm9wcyA9IEZpZWxkc0NvbmZUICYge1xuICAvLyBvbkJ1dHRvbkNsaWNrOiAodHlwZTogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBhbnlcbiAgZGF0YTogT2JqZWN0XG4gIHZhbGlkYXRpb246IE9iamVjdFxuICBsYWJlbERpcmVjdGlvbjogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKTogYW55ID0+IHtcbiAgY29uc3Qge1xuICAgIGd1dHRlciA9IERFRkFVTFRfR1VUVEVSLFxuICAgIHR5cGUsXG4gICAgY2xhc3NOYW1lID0gJycsXG4gICAgZmllbGRzLFxuICAgIGRhdGEsXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsaWRhdGlvbixcbiAgICBsYWJlbERpcmVjdGlvbixcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7bGFiZWxEaXJlY3Rpb259YH0+XG5cbiAgICAgICAgey8qIOmdnuaMiemSruaOp+S7tue7hOWQiCAqL31cbiAgICAgICAge3R5cGUgIT09ICdGb3JtQnV0dG9ucycgJiYgZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkSXRlbVQpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBzcGFuID0gcHJvcHMuc3BhbiB8fCBERUZBVUxUX1NQQU4sXG4gICAgICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5ID0gdHJ1ZSxcbiAgICAgICAgICB9ID0gZmllbGRcblxuICAgICAgICAgIGNvbnN0IHsgcnVsZXMsIGFkZG9uIH0gPSBmaWVsZC5wcm9wc1xuXG4gICAgICAgICAgcmV0dXJuIGRpc3BsYXlcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17ZmllbGQua2V5fSBzcGFuPXtzcGFufSBvZmZzZXQ9e29mZnNldH0+XG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmaWVsZC5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17WydidXR0b24nLCAncmVuZGVyJ10uaW5kZXhPZihmaWVsZC50eXBlKSA9PT0gLTEgPyBsYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtydWxlcyAmJiBydWxlcy5pbmRleE9mKCdyZXF1aXJlZCcpICE9PSAtMX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtcbiAgICAgICAgICAgICAgICAgICAgKHZhbGlkYXRpb25ba2V5XSAmJiAhdmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICA/ICdlcnJvcidcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICAgICAgKHZhbGlkYXRpb25ba2V5XSAmJiAhdmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkYXRpb25ba2V5XS5tc2dcbiAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVtrZXldfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthZGRvbiAmJiBhZGRvbihkYXRhKX1cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvdz5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge31cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1BBTiA9IDhcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dVVFRFUiA9IDE2XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJ1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBhZGRGaWVsZHMgfSBmcm9tICdARm9ybS9GaWVsZCdcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vdXRpbHMvRm9ybVZhbGlkYXRvcidcbmltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnXG5pbXBvcnQgeyBSSkZvcm1Qcm9wcywgRmllbGRzQ29uZlQgfSBmcm9tICcuL2luZGV4LmQnXG5pbXBvcnQgeyBhZGRMYWJlbFN0eWxlV2lkdGggfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgRm9vdGVyQnV0dG9ucyBmcm9tICcuL0Zvb3RlckJ1dHRvbnMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG50eXBlIFN0YXRlID0ge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUkpGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJKRm9ybVByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNwaW5uaW5nOiBmYWxzZSxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgIGRhdGFTb3VyY2U6IHt9LFxuICAgIGV4dGVuZFZhbGlkYXRvcnM6IFtdLFxuICAgIGV4dGVuZEZpZWxkczogW10sXG4gICAgZmllbGRzOiBbXSxcbiAgICBsYWJlbERpcmVjdGlvbjogJ2hvcml6b250YWwnLCAvLyAndmVydGljYWwnIHwgJ2hvcml6b250YWwnXG4gICAgbGFiZWxXaWR0aDogODAsXG4gIH1cblxuICBtb3VudGVkID0gZmFsc2VcblxuICBkYXRhID0ge30gLy8gZm9ybeaVsOaNrlxuXG4gIGRhdGFDaGFuZ2VkID0gZmFsc2VcblxuICB2YWxpZGF0aW9uID0ge30gLy8g6aqM6K+B57uT5p6cXG5cbiAgLyoqXG4gICAqIGRldGVjdCBkYXRhIHNvdXJjZSB3aGV0aGVyIGlzIGNoYW5nZWRcbiAgICovXG4gIGlzRGF0YVNvdXJjZUNoYW5nZWQgPSBtZW1vaXplKChkYXRhU291cmNlOiB7fSkgPT4ge1xuICAgIC8vIFVTRUxFU1MgXCJ8fCBjb25kaXRpb25cIlxuICAgIC8vIGJlY2F1c2UgZGF0YVNvdXJjZSBpcyB0aGUga2V5IG9mIG1ldGhvZCBydW5uaW5nIGFuZCBuZWVkIHRvXG4gICAgLy8gdXNlIGl0IHRvIGF2b2lkIHRoYXQgZXNsaW50IHJlcG9ydCBhbiBlcnJvciBcImRhdGFTb3VyY2UgaXNcbiAgICAvLyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkXCJcbiAgICB0aGlzLmRhdGFDaGFuZ2VkID0gdHJ1ZSB8fCB0eXBlb2YgZGF0YVNvdXJjZSA9PT0gJ29iamVjdCdcblxuICAgIHJldHVybiB0aGlzLmRhdGFDaGFuZ2VkXG4gIH0pXG5cbiAgLyoqXG4gICAqIGdldCBkYXRhIGZyb20gZGF0YVNvdXJjZSBvciBsb2NhbCBkYXRhLFxuICAgKiBhbmQgYWxzbyBzZXQgdXAgXCJ2YWxpZGF0aW9uXCJcbiAgICovXG4gIGNvbnZlcnREYXRhRnJvbUZpZWxkcyA9IG1lbW9pemUoKGZpZWxkczogQXJyYXk8YW55PiwgZGF0YVNvdXJjZTogYW55KSA9PiB7XG4gICAgZmllbGRzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAocm93LnR5cGUgIT09ICdGb3JtQnV0dG9ucycpIHtcbiAgICAgICAgcm93LmZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSBmYWxzZSAmJiBpdGVtLnR5cGUgIT09ICdyZW5kZXInICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOaVsOaNrua6kChwcm9wcynlj5HnlJ/mlLnlj5jvvIzlj5bmlbDmja7mupDvvIzlkKbliJnlj5bmnKzlnLAoc3RhdGUpXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbS5rZXldID0gdGhpcy5kYXRhQ2hhbmdlZFxuICAgICAgICAgICAgICA/IGRhdGFTb3VyY2VbaXRlbS5rZXldXG4gICAgICAgICAgICAgIDogdGhpcy5kYXRhW2l0ZW0ua2V5XVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mupAocHJvcHMp5Y+R55Sf5pS55Y+Y77yaIOWmguaenOacieWAvO+8jOmHjeaWsOagoemqjO+8m+ayoeacieWAvO+8jOS4jeagoemqjFxuICAgICAgICAgICAgY29uc3QgaW5pdCA9IHRoaXMudmFsaWRhdGVGaWVsZChpdGVtLmtleSwgdGhpcy5kYXRhW2l0ZW0ua2V5XSwgaXRlbS5wcm9wcz8ucnVsZXMgfHwgW10pXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25baXRlbS5rZXldID0ge1xuICAgICAgICAgICAgICAuLi5pbml0LFxuICAgICAgICAgICAgICBydWxlczogaXRlbS5wcm9wcz8ucnVsZXMgfHwgW10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kYXRhQ2hhbmdlZCA9IGZhbHNlXG4gIH0pXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICAvLyBhZGQgZXh0ZW5kRmllbGRzIGludG8gZm9ybSBnZW5lcmF0aW5nL21hcHBpbmdcbiAgICBhZGRGaWVsZHModGhpcy5wcm9wcy5leHRlbmRGaWVsZHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlXG4gICAgLy8gZXh0ZW5kIHZhbGlkYXRvcnMgaW50byBGb3JtIFZhbGlkYXRvclxuICAgIEZvcm1WYWxpZGF0b3IuZXh0ZW5kVmFsaWRhdG9ycyh0aGlzLnByb3BzLmV4dGVuZFZhbGlkYXRvcnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIGZpZWxkIGNoYW5nZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgb25DaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlkIGNoYW5nZScsIGtleSwgdmFsdWUpXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgW2tleV06IHZhbHVlLFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlICYmIHRoaXMudmFsaWRhdGlvbltrZXldKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgLi4uRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMpLFxuICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGtleSwgdmFsdWUsIHRoaXMuZGF0YSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSlcbiAgfVxuXG4gIC8qKlxuICAgKiDpqozor4HmiYDmnIlmaWVsZHNcbiAgICovXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGxldCB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgIGlmIChyb3cudHlwZSAhPT0gJ0Zvcm1CdXR0b25zJykge1xuICAgICAgICByb3cuZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmRpc3BsYXkgIT09IGZhbHNlICYmIGl0ZW0udHlwZSAhPT0gJ3JlbmRlcicgJiYgaXRlbS50eXBlICE9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXkgfSA9IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEZvcm1WYWxpZGF0b3IuY2hlY2sodmFsdWUsIHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzKVxuXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gICAgcmV0dXJuIHZhbGlkYXRlZFxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFN1Ym1pdFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25TdWJtaXQgPSAoZT86IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0Pik6IHZvaWQgPT4ge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuXG5cbiAgICBjb25zb2xlLmxvZygnc3VibWl0IGRhdGEnLCB0aGlzLmRhdGEpXG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN1Ym1pdCkgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogb24gUmVzZXRcbiAgICovXG4gIG9uUmVzZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZXNldCkgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBidXR0b24gY2xpY2tcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBvbkJ1dHRvbkNsaWNrID0gKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgdGhpcy5vblN1Ym1pdCgpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICB0aGlzLm9uUmVzZXQoKVxuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKHRoaXMuZGF0YSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5qCh6aqMXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBydWxlc1xuICAgKi9cbiAgdmFsaWRhdGVGaWVsZCA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZXM6IEFycmF5PHN0cmluZz4gPSBbXSkgPT4ge1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb25ba2V5XSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCBydWxlcylcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsaWRhdGVkOiB0cnVlLCBtc2c6ICcnIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsIGRhdGFTb3VyY2UsIGxhYmVsRGlyZWN0aW9uLCBsYWJlbFdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5pc0RhdGFTb3VyY2VDaGFuZ2VkKGRhdGFTb3VyY2UpXG4gICAgdGhpcy5jb252ZXJ0RGF0YUZyb21GaWVsZHMoZmllbGRzLCBkYXRhU291cmNlIHx8IHt9KSAvLyBkYXRhIHRvIGZpZWxkc1xuICAgIGNvbnN0IElEID0gYEZPUk1fJHtwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b1N0cmluZygpLCAxMCkudG9TdHJpbmcoKX1gXG4gICAgYWRkTGFiZWxTdHlsZVdpZHRoKGxhYmVsV2lkdGgsIGxhYmVsRGlyZWN0aW9uLCBJRClcblxuICAgIHJldHVybiAoXG4gICAgICA8U3BpbiBzcGlubmluZz17dGhpcy5wcm9wcy5zcGlubmluZ30+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBpZD17SUR9PlxuICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZDogRmllbGRzQ29uZlQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgcm93XyR7aWR4fWBcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSBmaWVsZC5kaXNwbGF5ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmllbGQuZGlzcGxheVxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGZpZWxkLnR5cGUgfHwgJ2ZpZWxkJ1xuICAgICAgICAgICAgaWYgKCFkaXNwbGF5KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2ZpZWxkJ1xuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8Um93XG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZGF0YX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb249e3RoaXMudmFsaWRhdGlvbn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsRGlyZWN0aW9uPXtsYWJlbERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPEZvb3RlckJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9TcGluPlxuICAgIClcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCB7IFZhbGlkYXRvclQsIFZhbGlkYXRvckNoaWxkVCwgRXh0ZW5kVmFsaWRhdG9yIH0gZnJvbSAnLi4vaW5kZXguZCdcblxuY2xhc3MgVmFsaWRhdGlvbiB7XG4gIHZhbGlkYXRvcnM6IFZhbGlkYXRvclQgPSB7XG4gICAgLy8g5b+F5aGrXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSkgPT4gbm90RW1wdHlWYWx1ZSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCxcbiAgICAgIGVycm9yTXNnOiAn5b+F5aGrJyxcbiAgICB9LFxuICAgIG1pbl9sZW5ndGg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgbGVuZ3RoOiBudW1iZXIpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSBsZW5ndGgsXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5LiN5bCP5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuICAgIG1heF9sZW5ndGg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgbGVuZ3RoOiBudW1iZXIpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8PSBsZW5ndGgsXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuICAgIGxlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSBsZW5ndGgsXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5b+F6aG75Li6JHtsZW5ndGh9YCxcbiAgICB9LFxuICAgIC8vIOaJi+aculxuICAgIG1vYmlsZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14xXFxkezEwfS8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrjEx5L2N5omL5py65Y+3JyxcbiAgICB9LFxuICAgIC8vIOaVsOWtl1xuICAgIG51bWJlcjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gL1xcZC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S9jeaVsOWtl+agvOW8jycsXG4gICAgfSxcbiAgICAvLyDmmK/lkKbmlbTmlbBcbiAgICBpbnQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+ICEvXFxELy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75Li65pW05pWwJyxcbiAgICB9LFxuICAgIC8vIOato+aVsFxuICAgIHBvc2l0aXZlX251bWJlcjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmraPmlbAnLFxuICAgIH0sXG4gICAgLy8g5LiN5Li66LSf5pWwXG4gICAgbm90X25lZ2F0aXZlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+PSAwLFxuICAgICAgZXJyb3JNc2c6ICfkuI3og73kuLrotJ/mlbAnLFxuICAgIH0sXG4gICAgLy8g5LiN5bCP5LqOXG4gICAgbWluOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+PSBtaW5WYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWluVmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wkp+S6juaIluetieS6jiR7bWluVmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWkp+S6jlxuICAgIG1vcmVfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWluVmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPiBtaW5WYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWluVmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wkp+S6jiR7bWluVmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOS4jeiDveWkp+S6jlxuICAgIG1heDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPD0gbWF4VmFsdWUsXG4gICAgICBlcnJvck1zZzogKG1heFZhbHVlOiBudW1iZXIpID0+IGDlv4XpobvlsI/kuo7miJbnrYnkuo4ke21heFZhbHVlfWAsXG4gICAgfSxcbiAgICAvLyDlsI/kuo5cbiAgICBsZXNzX3RoYW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1heFZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpIDwgbWF4VmFsdWUsXG4gICAgICBlcnJvck1zZzogKG1heFZhbHVlOiBudW1iZXIpID0+IGDlv4XpobvlsI/kuo4ke21heFZhbHVlfWAsXG4gICAgfSxcbiAgICAvLyBwcmljZVxuICAgIHByaWNlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIGlmICghL1xcZC8udGVzdCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlOiBzdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgcDogc3RyaW5nW10gPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpXG4gICAgICAgICAgaWYgKHAubGVuZ3RoID4gMikgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgaWYgKHBbMV0ubGVuZ3RoID4gMikgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+imgeespuWQiOi0p+W4geagvOW8jyzlpoIgMTAuMjMnLFxuICAgIH0sXG5cbiAgICBwcmljZV9mb3JtYXQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIGxlbmd0aDogYW55ID0gOCkgPT4ge1xuICAgICAgICBsZXQgc3RyaW5nVmFsdWUgPSAnJ1xuICAgICAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHN0cmluZ1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBeKFxcXFwrfFxcXFwtKT9bMC05XXsxLCR7bGVuZ3RofX0oXFxcXC5bMC05XXsxLDJ9KT8kYClcbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHN0cmluZ1ZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBhbnkgPSA2KSA9PiBg5pyA5aSnJHtsZW5ndGh95L2N5pW05pWw77yM5bCP5pWw5LiN6LaF6L+HMuS9jWAsXG4gICAgfSxcblxuICAgIC8qIOaVtOaVsOmDqOWIhuacgOWkp+WAvCAqL1xuICAgIHBvc2l0aXZlX21heF9sZW5ndGg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHZhbHVlKSAhPT0gdmFsdWUpIHJldHVybiBmYWxzZVxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlICYmIHN0cmluZ1ZhbHVlLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChzdHJpbmdWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gc3RyaW5nVmFsdWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgaWYgKHBbMF0ubGVuZ3RoID4gbGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0cmluZ1ZhbHVlLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6IChsZW5ndGg6IG51bWJlcikgPT4gYOaVtOaVsOmVv+W6puS4jeWkp+S6jiR7bGVuZ3RofWAsXG4gICAgfSxcblxuICAgIHRlbGVwaG9uZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14wXFxkezIsM30tXFxkezcsOH0kLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6ZyA56ym5ZCI77yI5Yy65Y+3LeeUteivneWPt+egge+8ieeahOagvOW8jycsXG4gICAgfSxcbiAgICAvLyDnlLXlrZDpgq7nrrHlkI7nvIBcbiAgICBlbWFpbF9zdWZmaXg6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHJlZyA9IC9eQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrueahOmCrueuseWQjue8gCjljIXmi6xAKScsXG4gICAgfSxcbiAgICAvLyDnlLXlrZDpgq7nrrFcbiAgICBlbWFpbDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCByZWcgPSAvW2EtejAtOSEjJCUmJyorXCI9P15fYHt8fX4tXSsoPzouW2EtejAtOSEjJCUmJyorXCI9P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/L1xuICAgICAgICByZXR1cm4gcmVnLnRlc3QodmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6ICfor7fovpPlhaXmraPnoa7nmoTpgq7nrrEnLFxuICAgIH0sXG4gICAgLy8g55So5oi35ZCNXG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC9eKFthLXpBLVowLTlfLV17NSwyMH0pJC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+eUsemVv+W6puS4ujXvvZ4yMOS9jeeahOaVsOWtl+OAgeWtl+avjee7hOaIkCcsXG4gICAgfSxcbiAgICAvLyDlr4bnoIFcbiAgICBwYXNzd29yZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQuKikoPz0uKlxcVy4qKVthLXpBLVowLTlcXFNdW15cXHU0ZTAwLVxcdTlmYTVdezYsMjB9JC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+eUsemVv+W6puS4ujbvvZ4xNuS9jeeahOaVsOWtl+OAgeWkp+Wwj+Wtl+avjeS7peWPiuespuWPt+e7hOaIkCcsXG4gICAgfSxcbiAgICAvLyDouqvku73or4FcbiAgICBpZF9jYXJkOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvKF5cXGR7MTV9JCl8KF5cXGR7MTh9JCl8KF5cXGR7MTd9KFxcZHxYfHgpJCkvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfouqvku73or4Hlj7fnoIHkuI3nrKblkIgnLFxuICAgIH0sXG4gIH1cblxuICBleHRlbmRWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IEFycmF5PEV4dGVuZFZhbGlkYXRvcj4pOiB2b2lkIHtcbiAgICB2YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogRXh0ZW5kVmFsaWRhdG9yKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUsIC4uLnJlc3QgfSA9IHZhbGlkYXRvclxuICAgICAgdGhpcy52YWxpZGF0b3JzW25hbWVdID0gcmVzdFxuICAgIH0pXG4gIH1cblxuICBjaGVjayh2OiBzdHJpbmcgfCBudW1iZXIsIHJ1bGVzOiBzdHJpbmdbXSkge1xuICAgIGxldCB2YWx1ZSA9IHZcbiAgICBsZXQgc3VjY2VzcyA9IHsgdmFsaWRhdGVkOiB0cnVlLCBtc2c6ICcnIH1cblxuICAgIGlmICghcnVsZXMgfHwgIShydWxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgcmV0dXJuIHN1Y2Nlc3NcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKClcbiAgICB9XG5cbiAgICBydWxlcy5zb21lKHJ1bGUgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IHRydWVcbiAgICAgIGxldCB2YWxpZGF0b3I6IFZhbGlkYXRvckNoaWxkVFxuICAgICAgbGV0IHNSdWxlOiBhbnlbXSA9IFtdXG5cbiAgICAgIGlmIChydWxlID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tydWxlXVxuICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgICBpZiAocnVsZS5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgICAgICAgc1J1bGUgPSBydWxlLnNwbGl0KCc6JylcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbc1J1bGVbMF1dXG4gICAgICAgICAgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRvcih2YWx1ZSwgc1J1bGVbMV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgICAgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRvcih2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBjb25zdCBlcnIgPSB2YWxpZGF0b3I/LmVycm9yTXNnXG4gICAgICAgIHN1Y2Nlc3MgPSB7XG4gICAgICAgICAgdmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICBtc2c6IHR5cGVvZiBlcnIgPT09ICdmdW5jdGlvbicgPyBlcnIoc1J1bGVbMV0pIDogZXJyLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBzdWNjZXNzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZhbGlkYXRpb24oKVxuIiwiZXhwb3J0IGRlZmF1bHQge31cblxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5VmFsdWUgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxuKVxuXG5leHBvcnQgY29uc3Qgc2ltcGxlQ2xvbmUgPSA8VD4oZGF0YTogVCk6IFQgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gJ2Zvcm0tbGFiZWwtd2lkdGgnXG4gIGNvbnN0IERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZU5hbWUpXG4gIGlmIChET00pIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoRE9NKVxuXG4gIGlmIChsYWJlbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3QgU1RZTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgU1RZTEUuaWQgPSBhdHRyaWJ1dGVOYW1lXG4gICAgU1RZTEUuaW5uZXJIVE1MID0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9YFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU1RZTEUpXG4gIH1cbn1cblxuXG4vKipcbiAqIOagueaNrnZhbHVl5pWw57uE6I635Y+W5pWw57uE5a+56LGhW3tsYWJlbCwgdmFsdWV9XeeahOWkmuS4qmxhYmVs5YC8XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJdGVtTGFiZWxzQnlWYWx1ZSA9IChcbiAgaXRlbXM6IEFycmF5PGFueT4sXG4gIHZhbHVlOiBBcnJheTxhbnk+LFxuKTogc3RyaW5nIHwgRWxlbWVudCA9PiB7XG4gIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBbXVxuICB2YWx1ZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgY29uc3QgZmluZEl0ZW0gPSBpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsKVxuICAgIGlmIChmaW5kSXRlbSkge1xuICAgICAgbGFiZWxzLnB1c2goZmluZEl0ZW0ubGFiZWwpXG4gICAgfVxuICB9KVxuICByZXR1cm4gbGFiZWxzLmpvaW4oJ++8jCcpXG59XG5cbi8qKlxuICog5qC55o2udmFsdWXojrflj5bmlbDnu4Tlr7nosaFbe2xhYmVsLCB2YWx1ZX1d55qEbGFiZWzlgLxcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmcgfCBudWxsfVxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUxhYmVsQnlWYWx1ZSA9IChcbiAgaXRlbXM6IEFycmF5PGFueT4sXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBmb3VuZCA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlKVxuICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBmb3VuZFswXS5sYWJlbFxuICB9XG4gIHJldHVybiAnJ1xufVxuXG4vKipcbiAqIGdldCBUYXJnZXQgdmFsdWVcbiAqIEBwYXJhbSBlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUYXJnZXRWYWx1ZSA9IChlOiBhbnkpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZSAmJiBlLnRhcmdldFxuICBsZXQgdmFsdWVcbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vdEVtcHR5VmFsdWUodGFyZ2V0Py52YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gZVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JztcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHV0aWxzLmZvckVhY2goWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ10sIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J10sIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnbWF4Q29udGVudExlbmd0aCcsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsXG4gICAgJ3NvY2tldFBhdGgnXG4gIF0sIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIC8vIE9ubHkgTm9kZS5KUyBoYXMgYSBwcm9jZXNzIHZhcmlhYmxlIHRoYXQgaXMgb2YgW1tDbGFzc11dIHByb2Nlc3NcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZW1vaXplLW9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==