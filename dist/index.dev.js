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
        common_1.addLabelStyleWidth(labelWidth, labelDirection);
        return (React.createElement(antd_1.Spin, { spinning: this.props.spinning },
            React.createElement("form", { onSubmit: this.onSubmit }, fields.map((field, idx) => {
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
exports.addLabelStyleWidth = (width, labelDirection) => {
    const attributeName = 'form-label-width';
    const DOM = document.getElementById(attributeName);
    if (DOM)
        document.body.removeChild(DOM);
    if (labelDirection === 'horizontal') {
        const STYLE = document.createElement('style');
        STYLE.id = attributeName;
        STYLE.innerHTML = `.ant-form-item-label { width: ${width}px; }`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9BdXRvQ29tcGxldGUudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0Nhc2NhZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0RhdGVwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXQudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXROdW1iZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXRQYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9QaWNQcmV2aWV3LnNjc3M/YWQwZCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1BpY1ByZXZpZXcudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFkaW8udHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFuZ2VwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmVuZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9UZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9UaW1lcGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1VwbG9hZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9Gb290ZXJCdXR0b25zL0J1dHRvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0Zvb3RlckJ1dHRvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vUm93LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2luZGV4LnNjc3M/MTBlZSIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL3V0aWxzL0Zvcm1WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtL2V4dGVybmFsIFwibWVtb2l6ZS1vbmVcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJy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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QyxpQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJpbmRleC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0Zvcm0vaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBdXRvQ29tcGxldGUgfSBmcm9tICdhbnRkJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgb25DaGFuZ2U6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWRcbiAgcHJvcHM6IHtcbiAgICBkYXRhU291cmNlOiBhbnksXG4gICAgW25hbWU6IHN0cmluZ106IGFueVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UocHJvcHMubmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMub25DaGFuZ2UocHJvcHMubmFtZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0b0NvbXBsZXRlXG4gICAgICB7Li4ucHJvcHMucHJvcHN9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgLz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdhbnRkL2VzL2J1dHRvbidcbi8vIGltcG9ydCAnYW50ZC9lcy9idXR0b24vc3R5bGUnXG5cbmltcG9ydCB7IEJ1dHRvblR5cGUgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGRhdGE6IGFueSxcbiAgcHJvcHM6IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgdHlwZTogQnV0dG9uVHlwZSxcbiAgICBvbkNsaWNrOiAoZGF0YTogT2JqZWN0KSA9PiBhbnlcbiAgfVxuICBbbmFtZTogc3RyaW5nXTogYW55XG59XG5cbmNvbnN0IGJ1dHRvblR5cGVzOiBBcnJheTxCdXR0b25UeXBlPiA9IFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2RhbmdlcicsICdsaW5rJywgJ2dob3N0J11cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGxhYmVsLCBkYXRhIH0gPSBwcm9wc1xuICBjb25zdCB7XG4gICAgdHlwZSA9ICdkZWZhdWx0JyxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgICBvbkNsaWNrLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzLnByb3BzXG5cbiAgbGV0IGJ1dHRvblR5cGU6IEJ1dHRvblR5cGUgPSAnZGVmYXVsdCdcbiAgY29uc3QgaW5kZXggPSBidXR0b25UeXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0eXBlKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgYnV0dG9uVHlwZSA9IGJ1dHRvblR5cGVzW2luZGV4XVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICB0eXBlPXtidXR0b25UeXBlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25UeXBlfSAke2NsYXNzTmFtZX1gfVxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhkYXRhKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXNjYWRlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgQ2FzY2FkZXIgZnJvbSAnYW50ZC9lcy9jYXNjYWRlcidcbi8vIGltcG9ydCAnYW50ZC9lcy9jYXNjYWRlci9zdHlsZSdcblxuZnVuY3Rpb24gZ2V0Q2FzY2FkZXJMYWJlbChvcmlnaW5hbFZhbHVlLCBjdXJPcHRpb25zLCB2YWx1ZUluZGV4LCBsYWJlbEFycikge1xuICBsZXQgaW5kZXggPSB2YWx1ZUluZGV4XG4gIGlmIChvcmlnaW5hbFZhbHVlICYmIGluZGV4IDwgb3JpZ2luYWxWYWx1ZS5sZW5ndGgpIHtcbiAgICBjb25zdCB0ZW1wID0gY3VyT3B0aW9ucy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gb3JpZ2luYWxWYWx1ZVt2YWx1ZUluZGV4XSlcbiAgICBpZiAodGVtcCkge1xuICAgICAgbGFiZWxBcnIucHVzaCh0ZW1wLmxhYmVsKVxuICAgIH1cbiAgICBpZiAodGVtcCAmJiB0ZW1wLmNoaWxkcmVuKSB7XG4gICAgICBpbmRleCArPSAxXG4gICAgICByZXR1cm4gZ2V0Q2FzY2FkZXJMYWJlbChcbiAgICAgICAgb3JpZ2luYWxWYWx1ZSxcbiAgICAgICAgdGVtcC5jaGlsZHJlbixcbiAgICAgICAgdmFsdWVJbmRleCxcbiAgICAgICAgbGFiZWxBcnIsXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsQXJyLmpvaW4oJyAvICcpXG4gIH1cblxuICByZXR1cm4gbGFiZWxBcnIuam9pbignIC8gJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzY2FkZXJGaWVsZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHsgcmVhZE9ubHksIHZhbHVlLCBuYW1lIH0gPSBwcm9wc1xuICBjb25zdCB7IG9wdGlvbnMsIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciA9ICfor7fpgInmi6knIH0gPSBwcm9wcy5wcm9wc1xuXG4gIGNvbnN0IGNoYW5nZSA9IChzZWxlY3RlZFZhbHVlOiBhbnksIHNlbGVjdGVkT3B0aW9uczogYW55KSA9PiB7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCBzZWxlY3RlZFZhbHVlLCBzZWxlY3RlZE9wdGlvbnMpXG4gICAgfVxuICAgIHByb3BzLm9uQ2hhbmdlKG5hbWUsIHNlbGVjdGVkVmFsdWUpXG4gIH1cblxuICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgcmV0dXJuIDxDYXNjYWRlciB7Li4ucHJvcHMucHJvcHN9IG9uQ2hhbmdlPXtjaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICB9XG5cbiAgcmV0dXJuIGdldENhc2NhZGVyTGFiZWwodmFsdWUsIG9wdGlvbnMsIDAsIFtdKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRJdGVtTGFiZWxCeVZhbHVlLCBnZXRUYXJnZXRWYWx1ZSwgbm90RW1wdHlWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hGaWVsZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHtcbiAgICB2YWx1ZSwgcmVhZE9ubHksIG9uQ2hhbmdlLCBuYW1lLFxuICB9ID0gcHJvcHNcbiAgY29uc3QgeyBvcHRpb25zID0gW10sIGNoZWNrQWxsQWJsZSA9IGZhbHNlIH0gPSBwcm9wcy5wcm9wc1xuXG4gIC8vIOWFqOmAiVxuICBjb25zdCBvbkNoZWNrQWxsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gW11cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgb3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4gbmV3VmFsdWUucHVzaChpdGVtLnZhbHVlKSlcbiAgICB9XG4gICAgb25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG5cbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlzQ2hlY2tlZEFsbCA9ICh2YWx1ZXM/OiBhbnlbXSkgPT4gKFxuICAgIG5vdEVtcHR5VmFsdWUodmFsdWVzKSAmJiB2YWx1ZXMubGVuZ3RoID09PSBvcHRpb25zLmxlbmd0aFxuICApXG5cbiAgY29uc3QgY2hhbmdlID0gKHRhcmdldDogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXRUYXJnZXRWYWx1ZSh0YXJnZXQpXG4gICAgb25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVhZE9ubHkgPyAoXG4gICAgZ2V0SXRlbUxhYmVsQnlWYWx1ZShvcHRpb25zLCB2YWx1ZSlcbiAgKSA6IChcbiAgICA8PlxuICAgICAge2NoZWNrQWxsQWJsZSAmJiAoXG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZEFsbCh2YWx1ZSl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hlY2tBbGxDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICDlhajpgIkgJm5ic3A7XG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICApfVxuICAgICAgPENoZWNrYm94Lkdyb3VwXG4gICAgICAgIHsuLi5wcm9wcy5wcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICdhbnRkL2VzL2RhdGUtcGlja2VyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2RhdGUtcGlja2VyL3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBGT1JNQVQgPSAnWVlZWS1NTS1ERCdcblxuICBGT1JNQVRfVElNRSA9ICdZWVlZLU1NLUREIEhIOm1tJ1xuXG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9ICF2YWx1ZSA/IHZhbHVlIDogdmFsdWUudmFsdWVPZigpXG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgcHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZvcm1hdCwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICBjb25zdCBGT1JNQVQgPSBmb3JtYXQgfHwgKHJlc3Quc2hvd1RpbWUgPyB0aGlzLkZPUk1BVF9USU1FIDogdGhpcy5GT1JNQVQpXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHZhbHVlID8gbW9tZW50KHZhbHVlKSA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IChmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUuZm9ybWF0KGZvcm1hdCkpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e0ZPUk1BVH1cbiAgICAgICAgICAgIHZhbHVlPXtmaWVsZFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgeyBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIHJlYWRPbmx5LCB0eXBlLCBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSB8fCAnb2ZmJ1xuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8SW5wdXQgey4uLnByb3BzfSB0eXBlPVwibnVtYmVyXCIgLz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8SW5wdXQgey4uLnByb3BzfSB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICApXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEljb24sIFNwaW4gfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgJy4vUGljUHJldmlldy5zY3NzJ1xuXG5jb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdFxuXG50eXBlIFByb3BzID0ge1xuICBzaG93TGlzdDogYm9vbGVhbixcbiAgY3VycmVudDogc3RyaW5nLFxuICB1cmw6IHN0cmluZ1tdIHwgc3RyaW5nLFxuICBzdHlsZT86IE9iamVjdFxuICBvbkhpZGU/OiBWb2lkRnVuY3Rpb25cbn1cblxuLyoqXG4gKiDlm77niYfpooTop4hcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGljUHJldmlld2VyKFxuICB7XG4gICAgc2hvd0xpc3QgPSB0cnVlLFxuICAgIHVybCA9IFtdLFxuICAgIHN0eWxlID0ge30sXG4gICAgY3VycmVudCA9ICcnLFxuICAgIG9uSGlkZSxcbiAgfTogUHJvcHMsXG4pIHtcbiAgbGV0IGltYWdlcyA9IFtdXG4gIGlmICh1cmwpIHtcbiAgICBpbWFnZXMgPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IFt1cmxdIDogdXJsXG4gIH1cbiAgaW1hZ2VzID0gaW1hZ2VzLmZpbHRlcihpdGVtID0+IGl0ZW0pXG5cbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShjdXJyZW50KVxuICBjb25zdCBbZGVnLCBzZXREZWddID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2lzSW5pdCwgc2V0SXNJbml0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAob25IaWRlKSBvbkhpZGUoKVxuICAgIHNldFZpc2libGUoZmFsc2UpXG4gIH1cbiAgY29uc3QgaGFuZGxlU2hvdyA9ICh0YXJnZXRTcmM6IHN0cmluZykgPT4ge1xuICAgIHNldFZpc2libGUodHJ1ZSlcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgc2V0U3JjKHRhcmdldFNyYylcbiAgfVxuXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGxldCBpZHggPSBpbWFnZXMuaW5kZXhPZihzcmMpXG4gICAgaWR4IC09IDFcbiAgICBpZHggPSBpZHggPCAwID8gaW1hZ2VzLmxlbmd0aCAtIDEgOiBpZHhcbiAgICBoYW5kbGVTaG93KGltYWdlc1tpZHhdKVxuICAgIC8vIHNldERlZygwKVxuICB9XG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGxldCBpZHggPSBpbWFnZXMuaW5kZXhPZihzcmMpXG4gICAgaWR4ICs9IDFcbiAgICBpZHggPSBpZHggPj0gaW1hZ2VzLmxlbmd0aCA/IDAgOiBpZHhcbiAgICBoYW5kbGVTaG93KGltYWdlc1tpZHhdKVxuICAgIC8vIHNldERlZygwKVxuICB9XG5cbiAgY29uc3Qgcm90YXRpb24gPSAoKSA9PiB7XG4gICAgc2V0RGVnKGRlZyArIDEpXG4gIH1cblxuICBjb25zdCByb3RhdGlvbkJhY2sgPSAoKSA9PiB7XG4gICAgc2V0RGVnKGRlZyAtIDEpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGlmICghc2hvd0xpc3QgJiYgIWlzSW5pdCkge1xuICAgIGhhbmRsZVNob3coY3VycmVudClcbiAgICBzZXRJc0luaXQodHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TGlzdFxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtcm93XCI+XG4gICAgICAgICAge2ltYWdlc1xuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaWR4KTogYW55ID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7aXRlbX1fJHtpZHh9YFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpZHh9XG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtYm94XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coaXRlbSl9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249eygpID0+IGhhbmRsZVNob3coaXRlbSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW19IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cblxuICAgICAge3Zpc2libGVcbiAgICAgICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXZpZXdlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1zcGluIHJlYWN0LWNvbmYtZm9ybS1waWMtd2hpdGUtc3BpblwiPjxTcGluIHNwaW5uaW5nPXtsb2FkaW5nfSB0aXA9XCJsb2FkaW5nLi4uXCIgc2l6ZT1cImxhcmdlXCIgLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtY29udGFpbmVyXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1idXR0b25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17cHJldn0+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17bmV4dH0+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtyb3RhdGlvbn0+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJyZWRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtyb3RhdGlvbkJhY2t9PlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidW5kb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cInByZXZpbWdcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoJHtkZWcgKiA5MH1kZWcpYCwgb3BhY2l0eTogbG9hZGluZyA/IDAgOiAxIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWltZy1jb250YWluZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEl0ZW1MYWJlbEJ5VmFsdWUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb0ZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHJlYWRPbmx5LFxuICAgIG9uQ2hhbmdlLFxuICAgIG5hbWUsXG4gICAgc3R5bGUgPSB7fSxcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucyA9IFtdIH0gPSBwcm9wcy5wcm9wc1xuXG4gIGNvbnN0IGNoYW5nZSA9ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUodGFyZ2V0KVxuICAgIG9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlYWRPbmx5ID8gKFxuICAgIGdldEl0ZW1MYWJlbEJ5VmFsdWUob3B0aW9ucywgdmFsdWUpXG4gICkgOiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgIHsuLi5wcm9wcy5wcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICdhbnRkL2VzL2RhdGUtcGlja2VyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2RhdGUtcGlja2VyL3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBzaW1wbGVDbG9uZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgRk9STUFUID0gJ1lZWVktTU0tREQnXG5cbiAgRk9STUFUX1RJTUUgPSAnWVlZWS1NTS1ERCBISDptbSdcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IHNob3dUaW1lIH0gPSB0aGlzLnByb3BzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlWzBdKSkge1xuICAgICAgaWYgKCFzaG93VGltZSkge1xuICAgICAgICB2YWx1ZSA9IFtcbiAgICAgICAgICBtb21lbnQobW9tZW50KHZhbHVlWzBdKS5mb3JtYXQoJ1lZWVktTU0tREQgMDA6MDA6MDAnKSkudmFsdWVPZigpLFxuICAgICAgICAgIG1vbWVudChtb21lbnQodmFsdWVbMV0pLmZvcm1hdCgnWVlZWS1NTS1ERCAyMzo1OTo1OScpKS52YWx1ZU9mKCksXG4gICAgICAgIF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gW21vbWVudCh2YWx1ZVswXSkudmFsdWVPZigpLCBtb21lbnQodmFsdWVbMV0pLnZhbHVlT2YoKV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0LCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIGNvbnN0IEZPUk1BVCA9IGZvcm1hdCB8fCAocmVzdC5zaG93VGltZSA/IHRoaXMuRk9STUFUX1RJTUUgOiB0aGlzLkZPUk1BVClcblxuICAgIGxldCB0aW1lVmFsdWUgPSBbbnVsbCwgbnVsbF1cbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JyAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aW1lVmFsdWUgPSBzaW1wbGVDbG9uZSh2YWx1ZSlcbiAgICAgIHRpbWVWYWx1ZVswXSA9IG1vbWVudCh2YWx1ZVswXSlcbiAgICAgIHRpbWVWYWx1ZVsxXSA9IG1vbWVudCh2YWx1ZVsxXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gYCR7bW9tZW50KHRpbWVWYWx1ZVswXSkuZm9ybWF0KGZvcm1hdCl9IH4gJHttb21lbnQodGltZVZhbHVlWzFdKS5mb3JtYXQoZm9ybWF0KX1gXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGF0ZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e0ZPUk1BVH1cbiAgICAgICAgICAgIHZhbHVlPXt0aW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWVsZEl0ZW1UIH0gZnJvbSAnLi4vaW5kZXguZCdcblxudHlwZSBQcm9wcyA9IEZpZWxkSXRlbVQgJiB7XG4gIGRhdGE6IE9iamVjdFxuICByZW5kZXI6IChkYXRhOk9iamVjdCkgPT4gYW55XG59XG5cbmNvbnN0IFJlbmRlcjogUmVhY3QuRkM8UHJvcHM+ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVuZGVyIH0gPSBwcm9wcy5wcm9wc1xuICAvLyBjb25zb2xlLmxvZygncmVuZGVyJywgdHlwZW9mIHJlbmRlciwgcmVuZGVyKVxuICByZXR1cm4gdHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IHJlbmRlcihkYXRhKSA6IChyZW5kZXIgfHwgbnVsbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgU2VsZWN0IGZyb20gJ2FudGQvZXMvc2VsZWN0J1xuLy8gaW1wb3J0ICdhbnRkL2VzL3NlbGVjdC9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgZ2V0SXRlbUxhYmVsQnlWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlICYmIGUudGFyZ2V0XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vdEVtcHR5VmFsdWUodGFyZ2V0Py52YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZVxuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zID0gW10sXG4gICAgICBwbGFjZWhvbGRlciA9ICfor7fpgInmi6knLFxuICAgICAgc2hvd1NlYXJjaCA9IHRydWUsXG4gICAgICBvcHRpb25GaWx0ZXJQcm9wID0gJ2xhYmVsJyxcbiAgICAgIGFsbG93Q2xlYXIgPSB0cnVlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IGdldEl0ZW1MYWJlbEJ5VmFsdWUoaXRlbXMsIHZhbHVlKVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPXtvcHRpb25GaWx0ZXJQcm9wfVxuICAgICAgICAgICAgc2hvd1NlYXJjaD17c2hvd1NlYXJjaH1cbiAgICAgICAgICAgIGFsbG93Q2xlYXI9e2FsbG93Q2xlYXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlICYmIGUudGFyZ2V0XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vdEVtcHR5VmFsdWUodGFyZ2V0Py52YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZVxuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLCByZWFkT25seSwgcHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhdXRvQ29tcGxldGUgPSBwcm9wcy5hdXRvQ29tcGxldGUgfHwgJ29mZidcbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gdmFsdWVcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgVGltZXBpY2tlciBmcm9tICdhbnRkL2VzL3RpbWUtcGlja2VyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL3RpbWUtcGlja2VyL3N0eWxlJ1xuXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlLCBzaW1wbGVDbG9uZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgRk9STUFUID0gJ0hIOm1tJ1xuXG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0ID0gdGhpcy5GT1JNQVQgfSA9IHRoaXMucHJvcHMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdClcbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0ID0gdGhpcy5GT1JNQVQsIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aW1lVmFsdWUgPSBub3RFbXB0eVZhbHVlKHZhbHVlKVxuICAgICAgPyBtb21lbnQoc2ltcGxlQ2xvbmUodmFsdWUpLCBmb3JtYXQpXG4gICAgICA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdClcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICB2YWx1ZT17dGltZVZhbHVlfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVwbG9hZCwgSWNvbiwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBQaWNQcmV2aWV3IGZyb20gJy4vUGljUHJldmlldydcblxuLyoqXG4gKiBVcGxvYWRcbiAqIEB0eXBlIHtYTUx9XG4gKi9cbmNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgPGRpdj5cbiAgICA8SWNvbiB0eXBlPVwicGx1c1wiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj7kuIrkvKA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5jb25zdCB1cGxvYWRCdXR0b25UZXh0ID0gKFxuICA8QnV0dG9uPlxuICAgIDxJY29uIHR5cGU9XCJ1cGxvYWRcIiAvPlxuICAgICZuYnNwO+S4iuS8oFxuICA8L0J1dHRvbj5cbilcblxudHlwZSBVcGxvYWRGaWVsZFByb3BzID0ge1xuICB2YWx1ZT86IEFycmF5PGFueT4sXG4gIG5hbWU6IHN0cmluZyxcbiAgcmVhZE9ubHk/OiBib29sZWFuLFxuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueVtdKSA9PiB2b2lkXG4gIHByb3BzOiB7XG4gICAgYmxvYk5hbWU6IHN0cmluZyxcbiAgICBtYXhGaWxlczogbnVtYmVyLFxuICAgIG1heEZpbGVTaXplOiBudW1iZXIsXG4gICAgaGVpZ2h0UmF0aW8/OiBudW1iZXIsXG4gICAgd2lkdGhSYXRpbz86IG51bWJlcixcbiAgICBoZWFkZXJzPzogYW55LFxuICAgIGxpc3RUeXBlPzogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCcsXG4gICAgZmlsZVR5cGU6IHN0cmluZywgLy8g5LiK5Lyg5paH5Lu257G75Z6LICBpbWcgLyBvdGhlclxuICAgIHNob3dFcnJvck1lc3NhZ2U/OiBib29sZWFuLFxuICAgIG9uQ2hhbmdlOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXG4gICAgb25VcGxvYWRlZD86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCxcbiAgICBnZXRSZXNwb25zZURhdGE/OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQgLy8g6I635Y+W6L+U5Zue55qE5pWw5o2uXG4gICAgYWN0aW9uOiBzdHJpbmcsXG4gIH1cbn1cblxudHlwZSBVcGxvYWRTdGF0ZSA9IHtcbiAgcHJldmlld1Zpc2libGU6IGJvb2xlYW4sXG4gIHByZXZpZXdJbWFnZTogc3RyaW5nXG4gIGVycm9yTXNnOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEZpZWxkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxVcGxvYWRGaWVsZFByb3BzLCBVcGxvYWRTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8vIHByb3BzOiB7XG4gICAgLy8gICBzaG93RXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgIC8vICAgbWF4RmlsZXM6IDUsIC8vIOacgOWkmuiDveS4iuS8oOaWh+S7tuaVsFxuICAgIC8vICAgbWF4RmlsZVNpemU6IDEwLCAvLyDmnIDlpKfkuIrkvKDkvZPnp69cbiAgICAvLyAgIGZpbGVUeXBlOiAnaW1nJywgLy8g6buY6K6k5LiK5Lyg5Zu+54mHXG4gICAgLy8gfSxcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHByZXZpZXdWaXNpYmxlOiBmYWxzZSxcbiAgICBwcmV2aWV3SW1hZ2U6ICcnLFxuICAgIGVycm9yTXNnOiAnJyxcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGluZm86IGFueSk6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCchISEhISHov5vlhaUgb25DaGFuZ2UgJylcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBvblVwbG9hZGVkIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgbGV0IGZpbGVMaXN0ID0gWy4uLmluZm8uZmlsZUxpc3RdXG5cbiAgICBmaWxlTGlzdC5mb3JFYWNoKChmaWxlLCBpZHgpID0+IHtcbiAgICAgIGlmIChmaWxlLnJlc3BvbnNlKSB7XG4gICAgICAgIGZpbGVMaXN0W2lkeF0gPSB7XG4gICAgICAgICAgLi4uZmlsZUxpc3RbaWR4XSxcbiAgICAgICAgICB1cmw6IGZpbGUucmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbixcbiAgICAgICAgICBuYW1lOiBmaWxlLnJlc3BvbnNlLmZpbGVuYW1lLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsZVxuICAgIH0pXG5cbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5wcm9wcy5nZXRSZXNwb25zZURhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9wcy5nZXRSZXNwb25zZURhdGEoaW5mby5maWxlLnJlc3BvbnNlKVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgZmlsZUxpc3QgPSBbXVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiBpbmZvLmZpbGU/LnJlc3BvbnNlPy5pbnZvaWNlPy5tZXNzYWdlIHx8ICfkuIrkvKDplJnor68sIOivt+mHjeivlSEnIH0pXG4gICAgfSBlbHNlIGlmICghaW5mby5maWxlLnN0YXR1cykge1xuICAgICAgLy8g5paH5Lu26LaF6L+H5aSn5bCP5oiW5YW25a6D5LiN5ruh6Laz5YmN56uv6ZmQ5Yi25p2h5Lu25oOF5Ya1XG4gICAgICBmaWxlTGlzdCA9IGZpbGVMaXN0LnNsaWNlKDAsIGZpbGVMaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBmaWxlTGlzdClcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGZpbGVMaXN0KVxuICAgIH1cbiAgICBpZiAob25VcGxvYWRlZCkge1xuICAgICAgb25VcGxvYWRlZChmaWxlTGlzdClcbiAgICB9XG4gIH1cblxuICBvblByZXZpZXcgPSAoZmlsZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiB0cnVlLCBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIH0pXG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiBmYWxzZSwgcHJldmlld0ltYWdlOiAnJyB9KVxuICB9XG5cbiAgY3VzdG9tUmVxdWVzdCA9IChcbiAgICB7XG4gICAgICBmaWxlLFxuICAgICAgb25TdWNjZXNzLFxuICAgICAgb25FcnJvcixcbiAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgfSxcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBhY3Rpb24gfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoYWN0aW9uLCBmb3JtRGF0YSwge1xuICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBvblByb2dyZXNzLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIHx8IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S4iuS8oOWksei0pSEnIH0pXG4gICAgICAgIG9uRXJyb3IoKVxuICAgICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgYWJvcnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S4iuS8oOe7iOatoiEnIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIGJlZm9yZVVwbG9hZChmaWxlOiBhbnksIHR5cGU6IHN0cmluZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCchISEhISHov5vlhaUgYmVmb3JlVXBsb2FkICcpXG4gICAgY29uc3QgeyBtYXhGaWxlU2l6ZSA9IDEwIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgLy8gaWYgKGhlaWdodFJhdGlvICYmIHdpZHRoUmF0aW8pIHsgLy8g6aqM6K+B6ZW/5a695q+U5L6LXG4gICAgLy8gICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGF3YWl0IGdldEZpbGVEaW1lbnNpb24oZmlsZSlcbiAgICAvLyAgIGlmIChoZWlnaHQvd2lkdGggIT09IGhlaWdodFJhdGlvL3dpZHRoUmF0aW8pIHtcbiAgICAvLyAgICAgbWVzc2FnZS5lcnJvcihg6ZW/5a695q+U5b+F6aG75pivICR7aGVpZ2h0UmF0aW99IC8gJHt3aWR0aFJhdGlvfWApXG4gICAgLy8gICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyDpqozor4Hmlofku7blpKflsI9zaXplXG4gICAgY29uc3QgZmlsZVNpemVMYXJnZXIgPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA+IG1heEZpbGVTaXplXG4gICAgaWYgKGZpbGVTaXplTGFyZ2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6IGDmlofku7bkvZPnp6/lpKflsI/kuI3otoXov4cke21heEZpbGVTaXplfU1gIH0pXG4gICAgICAvLyBtZXNzYWdlLmVycm9yKGDmlofku7bkvZPnp6/lpKflsI/kuI3otoXov4cke21heEZpbGVTaXplfU1gKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8g6aqM6K+B5paH5Lu25qC85byPXG4gICAgaWYgKHR5cGUgPT09ICdpbWcnKSB7XG4gICAgICBjb25zdCBpc0pQRyA9IGZpbGUudHlwZVxuICAgICAgaWYgKGlzSlBHID09PSAnaW1hZ2UvanBlZycgfHwgaXNKUEcgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LuF5pSv5oyB5LiK5LyganBnL3BuZ+agvOW8j+WbvueJhycgfSlcbiAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoJ+S7heaUr+aMgeS4iuS8oGpwZy9wbmfmoLzlvI/lm77niYcnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlID0gW10sXG4gICAgICByZWFkT25seSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIG1heEZpbGVzID0gMTAsXG4gICAgICBibG9iTmFtZSA9ICdibG9iJyxcbiAgICAgIGZpbGVUeXBlID0gJ2ltZycsXG4gICAgICBzaG93RXJyb3JNZXNzYWdlID0gdHJ1ZSxcbiAgICAgIGxpc3RUeXBlID0gJ3BpY3R1cmUtY2FyZCcsXG4gICAgICBoZWFkZXJzID0ge30sXG4gICAgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICAvLyB2YWx1ZSA9IHZhbHVlIHx8IFtdXG5cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyA/IHVwbG9hZEJ1dHRvbiA6IHVwbG9hZEJ1dHRvblRleHRcbiAgICBjb25zdCBmb3JtYXRWYWx1ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgIGNvbnN0IGltYWdlc1VybHMgPSBbXVxuICAgIGZvcm1hdFZhbHVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpbWFnZXNVcmxzLnB1c2goZWxlbWVudD8udXJsKVxuICAgIH0pXG5cbiAgICBmb3JtYXRWYWx1ZS5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9ybWF0VmFsdWVbaWR4XSA9IHtcbiAgICAgICAgICB1aWQ6IGAke2l0ZW19XyR7aWR4fWAsXG4gICAgICAgICAgdXJsOiBpdGVtLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSlcblxuICAgIC8vIGNvbnNvbGUubG9nKCdlcnInLCB0aGlzLnN0YXRlLmVycm9yTXNnLCBzaG93RXJyb3JNZXNzYWdlKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8VXBsb2FkXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAga2V5PXtibG9iTmFtZX1cbiAgICAgICAgICBuYW1lPXtibG9iTmFtZX1cbiAgICAgICAgICBoZWFkZXJzPXtoZWFkZXJzfVxuICAgICAgICAgIGxpc3RUeXBlPXtsaXN0VHlwZX1cbiAgICAgICAgICBmaWxlTGlzdD17Zm9ybWF0VmFsdWV9XG4gICAgICAgICAgc2hvd1VwbG9hZExpc3RcbiAgICAgICAgICBvbkNoYW5nZT17ZmlsZSA9PiB0aGlzLm9uQ2hhbmdlKGZpbGUpfVxuICAgICAgICAgIGJlZm9yZVVwbG9hZD17ZmlsZSA9PiB0aGlzLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlVHlwZSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIG9uUHJldmlldz17dGhpcy5vblByZXZpZXd9XG4gICAgICAgICAgY3VzdG9tUmVxdWVzdD17dGhpcy5jdXN0b21SZXF1ZXN0fSAvKiDopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLogKi9cbiAgICAgICAgPlxuICAgICAgICAgIHt2YWx1ZS5sZW5ndGggPj0gbWF4RmlsZXMgfHwgcmVhZE9ubHkgPyBudWxsIDogYnV0dG9ufVxuICAgICAgICA8L1VwbG9hZD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1zZyAmJiBzaG93RXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1lcnJvclwiPnt0aGlzLnN0YXRlLmVycm9yTXNnfTwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLnByZXZpZXdWaXNpYmxlICYmIChcbiAgICAgICAgICA8UGljUHJldmlld1xuICAgICAgICAgICAgdXJsPXtpbWFnZXNVcmxzfVxuICAgICAgICAgICAgc2hvd0xpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgIGN1cnJlbnQ9e3RoaXMuc3RhdGUucHJldmlld0ltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmllbGRJdGVtVCwgRXh0ZW5kRmllbGQgfSBmcm9tICcuLi9pbmRleC5kJ1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlcidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5pbXBvcnQgVGltZXBpY2tlciBmcm9tICcuL1RpbWVwaWNrZXInXG5pbXBvcnQgUmFuZ2VwaWNrZXIgZnJvbSAnLi9SYW5nZXBpY2tlcidcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcidcbmltcG9ydCBDYXNjYWRlckZpZWxkIGZyb20gJy4vQ2FzY2FkZXInXG5pbXBvcnQgVXBsb2FkQm94IGZyb20gJy4vVXBsb2FkJ1xuaW1wb3J0IEF1dG9Db21wbGV0ZSBmcm9tICcuL0F1dG9Db21wbGV0ZSdcbmltcG9ydCBJbnB1dFBhc3N3b3JkIGZyb20gJy4vSW5wdXRQYXNzd29yZCdcbmltcG9ydCBJbnB1dE51bWJlciBmcm9tICcuL0lucHV0TnVtYmVyJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9SYWRpbydcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xuXG5jb25zdCBtYXAgPSB7XG4gIHJlbmRlcjogUmVuZGVyLFxuICBpbnB1dDogSW5wdXQsXG4gIGJ1dHRvbjogQnV0dG9uLFxuICBzZWxlY3Q6IFNlbGVjdCxcbiAgdGltZXBpY2tlcjogVGltZXBpY2tlcixcbiAgcmFuZ2VwaWNrZXI6IFJhbmdlcGlja2VyLFxuICBkYXRlcGlja2VyOiBEYXRlcGlja2VyLFxuICBjYXNjYWRlcjogQ2FzY2FkZXJGaWVsZCxcbiAgaW5wdXRQYXNzd29yZDogSW5wdXRQYXNzd29yZCxcbiAgaW5wdXROdW1iZXI6IElucHV0TnVtYmVyLFxuICB0ZXh0YXJlYTogVGV4dGFyZWEsXG4gIHJhZGlvOiBSYWRpbyxcbiAgY2hlY2tib3g6IENoZWNrYm94LFxuICB1cGxvYWQ6IFVwbG9hZEJveCxcbiAgYXV0b0NvbXBsZXRlOiBBdXRvQ29tcGxldGUsXG59XG5cbi8qIEFkZCBleHRyYWN0IGZpZWxkICovXG5leHBvcnQgY29uc3QgYWRkRmllbGRzID0gKGV4dGVuZEZpZWxkczogQXJyYXk8RXh0ZW5kRmllbGQ+KSA9PiAoXG4gIGV4dGVuZEZpZWxkcy5mb3JFYWNoKChleHRlbmRGaWVsZDogRXh0ZW5kRmllbGQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIGNvbXBvbmVudCB9ID0gZXh0ZW5kRmllbGRcbiAgICBtYXBbbmFtZV0gPSBjb21wb25lbnRcbiAgfSlcbilcblxuLyogRmllbGQgTWFwICovXG5jb25zdCBnZXRDb21wb25lbnQgPSAodHlwZTogc3RyaW5nKSA9PiBtYXBbdHlwZV0gfHwgbnVsbFxuXG4vKiBGaWVsZCBNYXBwaW5nICovXG50eXBlIFByb3BzID0geyBkYXRhOiBPYmplY3QsIG9uQ2hhbmdlOiBhbnksIG5hbWU/OiBzdHJpbmcsIHZhbHVlOiBhbnkgfSAmIEZpZWxkSXRlbVRcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHR5cGUsIC4uLnJlc3QgfSA9IHByb3BzXG4gIGNvbnN0IENvbXBvbmVudCA9IGdldENvbXBvbmVudCh0eXBlKVxuICByZXR1cm4gQ29tcG9uZW50XG4gICAgPyA8Q29tcG9uZW50IHsuLi5yZXN0fSAvPlxuICAgIDogbnVsbFxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvZXMvYnV0dG9uJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2J1dHRvbi9zdHlsZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBCdXR0b25ULCBGaWVsZEl0ZW1ULCBCdXR0b25UeXBlIH0gZnJvbSAnLi4vaW5kZXguZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgZmllbGRzPzogQXJyYXk8RmllbGRJdGVtVCB8IEJ1dHRvblQ+XG4gIGd1dHRlcj86IG51bWJlclxuICBvbkJ1dHRvbkNsaWNrPzogKGtleTogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSA9PiB2b2lkXG4gIGRhdGE/OiBPYmplY3QsXG59XG5cbmNvbnN0IGJ1dHRvblR5cGVzOiBBcnJheTxCdXR0b25UeXBlPiA9IFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2RhbmdlcicsICdsaW5rJywgJ2dob3N0J11cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBQcm9wcyk6IGFueSB7XG4gIGNvbnN0IHsgZ3V0dGVyID0gMTYsIGZpZWxkcyB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBmaWVsZHMubWFwKChidXR0b246IEJ1dHRvblQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGtleSxcbiAgICAgICAgbGFiZWwgPSAnJyxcbiAgICAgICAgZGlzcGxheSA9IHRydWUsXG4gICAgICB9ID0gYnV0dG9uXG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHlwZSA9ICdkZWZhdWx0JyxcbiAgICAgICAgY2xhc3NOYW1lID0gJycsXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIGFkZG9uLFxuICAgICAgICBzdHlsZSA9IHt9LFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gYnV0dG9uLnByb3BzIHx8IHt9XG5cbiAgICAgIGxldCBidXR0b25UeXBlOiBhbnlcbiAgICAgIGNvbnN0IGluZGV4ID0gYnV0dG9uVHlwZXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdHlwZSlcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgYnV0dG9uVHlwZSA9IGJ1dHRvblR5cGVzW2luZGV4XVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdC5ibG9jaykge1xuICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICBzdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlzcGxheVxuICAgICAgICA/IChcbiAgICAgICAgICA8c3BhbiBrZXk9e2tleX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIHtpZHggPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1idXR0b24tc3BhY2UtYmV0d2VlblwiIHN0eWxlPXt7IHdpZHRoOiBndXR0ZXIgfX0gLz59XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9e2J1dHRvblR5cGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25CdXR0b25DbGljayhrZXksIG9uQ2xpY2spfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAge2FkZG9uICYmIGFkZG9uKHByb3BzLmRhdGEpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgICAgICA6IG51bGxcbiAgICB9KVxuICApXG59XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vQnV0dG9uR3JvdXAnXG5pbXBvcnQgeyBGaWVsZHNDb25mVCB9IGZyb20gJy4uL2luZGV4LmQnXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEZpZWxkc0NvbmZUIHtcbiAgb25CdXR0b25DbGljazogKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxufVxuXG5jb25zdCBhbGlnbk1hcCA9IHtcbiAgbGVmdDogJ2ZsZXgtc3RhcnQnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxuICByaWdodDogJ2ZsZXgtZW5kJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyQnV0dG9ucyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHN0eWxlLFxuICAgIGFsaWduLFxuICAgIHR5cGUsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcbiAgY29uc3Qgd3JhcHBlclN0eWxlID0ge1xuICAgIGp1c3RpZnlDb250ZW50OiBhbGlnbk1hcFthbGlnbiB8fCAnY2VudGVyJ10sXG4gICAgLi4uc3R5bGUsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tYnV0dG9uLXdyYXBwZXJcIlxuICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZX1cbiAgICA+XG4gICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkZvb3RlckJ1dHRvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiB0cnVlLFxuICBzdHlsZToge30sXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29sLCBGb3JtIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBSb3cgZnJvbSAnYW50ZC9lcy9yb3cnXG4vLyBpbXBvcnQgQ29sIGZyb20gJ2FudGQvZXMvY29sJ1xuLy8gaW1wb3J0IEZvcm0gZnJvbSAnYW50ZC9lcy9mb3JtJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL3Jvdy9zdHlsZSdcbi8vIGltcG9ydCAnYW50ZC9lcy9jb2wvc3R5bGUnXG4vLyBpbXBvcnQgJ2FudGQvZXMvZm9ybS9zdHlsZSdcblxuaW1wb3J0IHsgREVGQVVMVF9HVVRURVIsIERFRkFVTFRfU1BBTiB9IGZyb20gJ0BGb3JtL2NvbmZpZydcbmltcG9ydCB7IEZpZWxkc0NvbmZULCBGaWVsZEl0ZW1UIH0gZnJvbSAnLi9pbmRleC5kJ1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnXG5cbnR5cGUgUHJvcHMgPSBGaWVsZHNDb25mVCAmIHtcbiAgLy8gb25CdXR0b25DbGljazogKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gYW55XG4gIGRhdGE6IE9iamVjdFxuICB2YWxpZGF0aW9uOiBPYmplY3RcbiAgbGFiZWxEaXJlY3Rpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcyk6IGFueSA9PiB7XG4gIGNvbnN0IHtcbiAgICBndXR0ZXIgPSBERUZBVUxUX0dVVFRFUixcbiAgICB0eXBlLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGZpZWxkcyxcbiAgICBkYXRhLFxuICAgIG9uQ2hhbmdlLFxuICAgIHZhbGlkYXRpb24sXG4gICAgbGFiZWxEaXJlY3Rpb24sXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBndXR0ZXI9e2d1dHRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke2xhYmVsRGlyZWN0aW9ufWB9PlxuXG4gICAgICAgIHsvKiDpnZ7mjInpkq7mjqfku7bnu4TlkIggKi99XG4gICAgICAgIHt0eXBlICE9PSAnRm9ybUJ1dHRvbnMnICYmIGZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZEl0ZW1UKSA9PiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgc3BhbiA9IHByb3BzLnNwYW4gfHwgREVGQVVMVF9TUEFOLFxuICAgICAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheSA9IHRydWUsXG4gICAgICAgICAgfSA9IGZpZWxkXG5cbiAgICAgICAgICBjb25zdCB7IHJ1bGVzLCBhZGRvbiB9ID0gZmllbGQucHJvcHNcblxuICAgICAgICAgIHJldHVybiBkaXNwbGF5XG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPENvbCBrZXk9e2ZpZWxkLmtleX0gc3Bhbj17c3Bhbn0gb2Zmc2V0PXtvZmZzZXR9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZmllbGQuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e1snYnV0dG9uJywgJ3JlbmRlciddLmluZGV4T2YoZmllbGQudHlwZSkgPT09IC0xID8gbGFiZWwgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17cnVsZXMgJiYgcnVsZXMuaW5kZXhPZigncmVxdWlyZWQnKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17XG4gICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uW2tleV0gJiYgIXZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaGVscD17XG4gICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uW2tleV0gJiYgIXZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZGF0aW9uW2tleV0ubXNnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFba2V5XX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7YWRkb24gJiYgYWRkb24oZGF0YSl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3c+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHt9XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NQQU4gPSA4XG5leHBvcnQgY29uc3QgREVGQVVMVF9HVVRURVIgPSAxNlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSdcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgYWRkRmllbGRzIH0gZnJvbSAnQEZvcm0vRmllbGQnXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuL3V0aWxzL0Zvcm1WYWxpZGF0b3InXG5pbXBvcnQgUm93IGZyb20gJy4vUm93J1xuaW1wb3J0IHsgUkpGb3JtUHJvcHMsIEZpZWxkc0NvbmZUIH0gZnJvbSAnLi9pbmRleC5kJ1xuaW1wb3J0IHsgYWRkTGFiZWxTdHlsZVdpZHRoIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IEZvb3RlckJ1dHRvbnMgZnJvbSAnLi9Gb290ZXJCdXR0b25zJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxudHlwZSBTdGF0ZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJKRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSSkZvcm1Qcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzcGlubmluZzogZmFsc2UsXG4gICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICBkYXRhU291cmNlOiB7fSxcbiAgICBleHRlbmRWYWxpZGF0b3JzOiBbXSxcbiAgICBleHRlbmRGaWVsZHM6IFtdLFxuICAgIGZpZWxkczogW10sXG4gICAgbGFiZWxEaXJlY3Rpb246ICdob3Jpem9udGFsJywgLy8gJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJ1xuICAgIGxhYmVsV2lkdGg6IDgwLFxuICB9XG5cbiAgbW91bnRlZCA9IGZhbHNlXG5cbiAgZGF0YSA9IHt9IC8vIGZvcm3mlbDmja5cblxuICBkYXRhQ2hhbmdlZCA9IGZhbHNlXG5cbiAgdmFsaWRhdGlvbiA9IHt9IC8vIOmqjOivgee7k+aenFxuXG4gIC8qKlxuICAgKiBkZXRlY3QgZGF0YSBzb3VyY2Ugd2hldGhlciBpcyBjaGFuZ2VkXG4gICAqL1xuICBpc0RhdGFTb3VyY2VDaGFuZ2VkID0gbWVtb2l6ZSgoZGF0YVNvdXJjZToge30pID0+IHtcbiAgICAvLyBVU0VMRVNTIFwifHwgY29uZGl0aW9uXCJcbiAgICAvLyBiZWNhdXNlIGRhdGFTb3VyY2UgaXMgdGhlIGtleSBvZiBtZXRob2QgcnVubmluZyBhbmQgbmVlZCB0b1xuICAgIC8vIHVzZSBpdCB0byBhdm9pZCB0aGF0IGVzbGludCByZXBvcnQgYW4gZXJyb3IgXCJkYXRhU291cmNlIGlzXG4gICAgLy8gZGVmaW5lZCBidXQgbmV2ZXIgdXNlZFwiXG4gICAgdGhpcy5kYXRhQ2hhbmdlZCA9IHRydWUgfHwgdHlwZW9mIGRhdGFTb3VyY2UgPT09ICdvYmplY3QnXG5cbiAgICByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlZFxuICB9KVxuXG4gIC8qKlxuICAgKiBnZXQgZGF0YSBmcm9tIGRhdGFTb3VyY2Ugb3IgbG9jYWwgZGF0YSxcbiAgICogYW5kIGFsc28gc2V0IHVwIFwidmFsaWRhdGlvblwiXG4gICAqL1xuICBjb252ZXJ0RGF0YUZyb21GaWVsZHMgPSBtZW1vaXplKChmaWVsZHM6IEFycmF5PGFueT4sIGRhdGFTb3VyY2U6IGFueSkgPT4ge1xuICAgIGZpZWxkcy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgaWYgKHJvdy50eXBlICE9PSAnRm9ybUJ1dHRvbnMnKSB7XG4gICAgICAgIHJvdy5maWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZGlzcGxheSAhPT0gZmFsc2UgJiYgaXRlbS50eXBlICE9PSAncmVuZGVyJyAmJiBpdGVtLnR5cGUgIT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mupAocHJvcHMp5Y+R55Sf5pS55Y+Y77yM5Y+W5pWw5o2u5rqQ77yM5ZCm5YiZ5Y+W5pys5ZywKHN0YXRlKVxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW0ua2V5XSA9IHRoaXMuZGF0YUNoYW5nZWRcbiAgICAgICAgICAgICAgPyBkYXRhU291cmNlW2l0ZW0ua2V5XVxuICAgICAgICAgICAgICA6IHRoaXMuZGF0YVtpdGVtLmtleV1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5pWw5o2u5rqQKHByb3BzKeWPkeeUn+aUueWPmO+8miDlpoLmnpzmnInlgLzvvIzph43mlrDmoKHpqozvvJvmsqHmnInlgLzvvIzkuI3moKHpqoxcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSB0aGlzLnZhbGlkYXRlRmllbGQoaXRlbS5rZXksIHRoaXMuZGF0YVtpdGVtLmtleV0sIGl0ZW0ucHJvcHM/LnJ1bGVzIHx8IFtdKVxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uW2l0ZW0ua2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4uaW5pdCxcbiAgICAgICAgICAgICAgcnVsZXM6IGl0ZW0ucHJvcHM/LnJ1bGVzIHx8IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZGF0YUNoYW5nZWQgPSBmYWxzZVxuICB9KVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgLy8gYWRkIGV4dGVuZEZpZWxkcyBpbnRvIGZvcm0gZ2VuZXJhdGluZy9tYXBwaW5nXG4gICAgYWRkRmllbGRzKHRoaXMucHJvcHMuZXh0ZW5kRmllbGRzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZVxuICAgIC8vIGV4dGVuZCB2YWxpZGF0b3JzIGludG8gRm9ybSBWYWxpZGF0b3JcbiAgICBGb3JtVmFsaWRhdG9yLmV4dGVuZFZhbGlkYXRvcnModGhpcy5wcm9wcy5leHRlbmRWYWxpZGF0b3JzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBmaWVsZCBjaGFuZ2VcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RpZCBjaGFuZ2UnLCBrZXksIHZhbHVlKVxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGVPbkNoYW5nZSAmJiB0aGlzLnZhbGlkYXRpb25ba2V5XSkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uW2tleV0gPSB7XG4gICAgICAgIC4uLkZvcm1WYWxpZGF0b3IuY2hlY2sodmFsdWUsIHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzKSxcbiAgICAgICAgcnVsZXM6IHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShrZXksIHZhbHVlLCB0aGlzLmRhdGEpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gIH1cblxuICAvKipcbiAgICog6aqM6K+B5omA5pyJZmllbGRzXG4gICAqL1xuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdmFsaWRhdGVkID0gdHJ1ZVxuICAgIHRoaXMucHJvcHMuZmllbGRzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAocm93LnR5cGUgIT09ICdGb3JtQnV0dG9ucycpIHtcbiAgICAgICAgcm93LmZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSBmYWxzZSAmJiBpdGVtLnR5cGUgIT09ICdyZW5kZXInICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5IH0gPSBpdGVtXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCB0aGlzLnZhbGlkYXRpb25ba2V5XS5ydWxlcylcblxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uW2tleV0gPSB7XG4gICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgcnVsZXM6IHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHt9KVxuICAgIHJldHVybiB2YWxpZGF0ZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBTdWJtaXRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uU3VibWl0ID0gKGU/OiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pOiB2b2lkID0+IHtcbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVyblxuXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCBkYXRhJywgdGhpcy5kYXRhKVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdWJtaXQpIHRoaXMucHJvcHMub25TdWJtaXQodGhpcy5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFJlc2V0XG4gICAqL1xuICBvblJlc2V0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXQpIHRoaXMucHJvcHMub25SZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogYnV0dG9uIGNsaWNrXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgb25CdXR0b25DbGljayA9ICh0eXBlOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgIHRoaXMub25TdWJtaXQoKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgdGhpcy5vblJlc2V0KClcbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYih0aGlzLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluagoemqjFxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gcnVsZXNcbiAgICovXG4gIHZhbGlkYXRlRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHJ1bGVzOiBBcnJheTxzdHJpbmc+ID0gW10pID0+IHtcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uW2tleV0gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgcnVsZXMpXG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkYXRlZDogdHJ1ZSwgbXNnOiAnJyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzLCBkYXRhU291cmNlLCBsYWJlbERpcmVjdGlvbiwgbGFiZWxXaWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuaXNEYXRhU291cmNlQ2hhbmdlZChkYXRhU291cmNlKVxuICAgIHRoaXMuY29udmVydERhdGFGcm9tRmllbGRzKGZpZWxkcywgZGF0YVNvdXJjZSB8fCB7fSkgLy8gZGF0YSB0byBmaWVsZHNcbiAgICBhZGRMYWJlbFN0eWxlV2lkdGgobGFiZWxXaWR0aCwgbGFiZWxEaXJlY3Rpb24pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNwaW4gc3Bpbm5pbmc9e3RoaXMucHJvcHMuc3Bpbm5pbmd9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZHNDb25mVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGByb3dfJHtpZHh9YFxuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IGZpZWxkLmRpc3BsYXkgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5kaXNwbGF5XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZSB8fCAnZmllbGQnXG4gICAgICAgICAgICBpZiAoIWRpc3BsYXkpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAnZmllbGQnXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dGhpcy52YWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgbGFiZWxEaXJlY3Rpb249e2xhYmVsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICA8Rm9vdGVyQnV0dG9uc1xuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1NwaW4+XG4gICAgKVxuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgVmFsaWRhdG9yVCwgVmFsaWRhdG9yQ2hpbGRULCBFeHRlbmRWYWxpZGF0b3IgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG5jbGFzcyBWYWxpZGF0aW9uIHtcbiAgdmFsaWRhdG9yczogVmFsaWRhdG9yVCA9IHtcbiAgICAvLyDlv4XloatcbiAgICByZXF1aXJlZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdKSA9PiBub3RFbXB0eVZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XloasnLFxuICAgIH0sXG4gICAgbWluX2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lsI/kuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lpKfkuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbGVuZ3RoOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogbnVtYmVyKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgLy8g5omL5py6XG4gICAgbW9iaWxlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjFcXGR7MTB9Ly50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnLFxuICAgIH0sXG4gICAgLy8g5pWw5a2XXG4gICAgbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiAvXFxkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75L2N5pWw5a2X5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaVtOaVsFxuICAgIGludDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gIS9cXEQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmlbTmlbAnLFxuICAgIH0sXG4gICAgLy8g5q2j5pWwXG4gICAgcG9zaXRpdmVfbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IDAsXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S4uuato+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3kuLrotJ/mlbBcbiAgICBub3RfbmVnYXRpdmU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IDAsXG4gICAgICBlcnJvck1zZzogJ+S4jeiDveS4uui0n+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3lsI/kuo5cbiAgICBtaW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqO5oiW562J5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5aSn5LqOXG4gICAgbW9yZV90aGFuOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5LiN6IO95aSn5LqOXG4gICAgbWF4OiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA8PSBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWwj+S6jlxuICAgIGxlc3NfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIHByaWNlXG4gICAgcHJpY2U6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCEvXFxkLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWU6IHN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBwOiBzdHJpbmdbXSA9IHN0cmluZ1ZhbHVlLnNwbGl0KCcuJylcbiAgICAgICAgICBpZiAocC5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAocFsxXS5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG76KaB56ym5ZCI6LSn5biB5qC85byPLOWmgiAxMC4yMycsXG4gICAgfSxcblxuICAgIHByaWNlX2Zvcm1hdDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBhbnkgPSA4KSA9PiB7XG4gICAgICAgIGxldCBzdHJpbmdWYWx1ZSA9ICcnXG4gICAgICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkgc3RyaW5nVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oXFxcXCt8XFxcXC0pP1swLTldezEsJHtsZW5ndGh9fShcXFxcLlswLTldezEsMn0pPyRgKVxuICAgICAgICByZXR1cm4gcmVnLnRlc3Qoc3RyaW5nVmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6IChsZW5ndGg6IGFueSA9IDYpID0+IGDmnIDlpKcke2xlbmd0aH3kvY3mlbTmlbDvvIzlsI/mlbDkuI3otoXov4cy5L2NYCxcbiAgICB9LFxuXG4gICAgLyog5pW05pWw6YOo5YiG5pyA5aSn5YC8ICovXG4gICAgcG9zaXRpdmVfbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodmFsdWUpICE9PSB2YWx1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpXG4gICAgICAgICAgICBpZiAocFswXS5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg5pW05pWw6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuXG4gICAgdGVsZXBob25lOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfpnIDnrKblkIjvvIjljLrlj7ct55S16K+d5Y+356CB77yJ55qE5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueuseWQjue8gFxuICAgIGVtYWlsX3N1ZmZpeDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2VcbiAgICAgICAgY29uc3QgcmVnID0gL15AKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566x5ZCO57yAKOWMheaLrEApJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueusVxuICAgIGVtYWlsOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZyA9IC9bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKyg/Oi5bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrueahOmCrueusScsXG4gICAgfSxcbiAgICAvLyDnlKjmiLflkI1cbiAgICB1c2VybmFtZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oW2EtekEtWjAtOV8tXXs1LDIwfSkkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Ne+9njIw5L2N55qE5pWw5a2X44CB5a2X5q+N57uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOWvhueggVxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZC4qKSg/PS4qXFxXLiopW2EtekEtWjAtOVxcU11bXlxcdTRlMDAtXFx1OWZhNV17NiwyMH0kLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Nu+9njE25L2N55qE5pWw5a2X44CB5aSn5bCP5a2X5q+N5Lul5Y+K56ym5Y+357uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOi6q+S7veivgVxuICAgIGlkX2NhcmQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC8oXlxcZHsxNX0kKXwoXlxcZHsxOH0kKXwoXlxcZHsxN30oXFxkfFh8eCkkKS8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+i6q+S7veivgeWPt+eggeS4jeespuWQiCcsXG4gICAgfSxcbiAgfVxuXG4gIGV4dGVuZFZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8RXh0ZW5kVmFsaWRhdG9yPik6IHZvaWQge1xuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBFeHRlbmRWYWxpZGF0b3IpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgLi4ucmVzdCB9ID0gdmFsaWRhdG9yXG4gICAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSByZXN0XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrKHY6IHN0cmluZyB8IG51bWJlciwgcnVsZXM6IHN0cmluZ1tdKSB7XG4gICAgbGV0IHZhbHVlID0gdlxuICAgIGxldCBzdWNjZXNzID0geyB2YWxpZGF0ZWQ6IHRydWUsIG1zZzogJycgfVxuXG4gICAgaWYgKCFydWxlcyB8fCAhKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm4gc3VjY2Vzc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKVxuICAgIH1cblxuICAgIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICAgICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yQ2hpbGRUXG4gICAgICBsZXQgc1J1bGU6IGFueVtdID0gW11cblxuICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgIHJlc3VsdCA9IHZhbGlkYXRvci52YWxpZGF0b3IodmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGlmIChydWxlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgICBzUnVsZSA9IHJ1bGUuc3BsaXQoJzonKVxuICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tzUnVsZVswXV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlLCBzUnVsZVsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbcnVsZV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IHZhbGlkYXRvcj8uZXJyb3JNc2dcbiAgICAgICAgc3VjY2VzcyA9IHtcbiAgICAgICAgICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1zZzogdHlwZW9mIGVyciA9PT0gJ2Z1bmN0aW9uJyA/IGVycihzUnVsZVsxXSkgOiBlcnIsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHN1Y2Nlc3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvbigpXG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiAoXG4gIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG4pXG5cbmV4cG9ydCBjb25zdCBzaW1wbGVDbG9uZSA9IDxUPihkYXRhOiBUKTogVCA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG5leHBvcnQgY29uc3QgYWRkTGFiZWxTdHlsZVdpZHRoID0gKHdpZHRoOiBudW1iZXIsIGxhYmVsRGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSAnZm9ybS1sYWJlbC13aWR0aCdcbiAgY29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlTmFtZSlcbiAgaWYgKERPTSkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChET00pXG5cbiAgaWYgKGxhYmVsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBjb25zdCBTVFlMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWVcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBgLmFudC1mb3JtLWl0ZW0tbGFiZWwgeyB3aWR0aDogJHt3aWR0aH1weDsgfWBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNUWUxFKVxuICB9XG59XG5cblxuLyoqXG4gKiDmoLnmja52YWx1ZeaVsOe7hOiOt+WPluaVsOe7hOWvueixoVt7bGFiZWwsIHZhbHVlfV3nmoTlpJrkuKpsYWJlbOWAvFxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUxhYmVsc0J5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogQXJyYXk8YW55Pixcbik6IHN0cmluZyB8IEVsZW1lbnQgPT4ge1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW11cbiAgdmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGNvbnN0IGZpbmRJdGVtID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbClcbiAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgIGxhYmVscy5wdXNoKGZpbmRJdGVtLmxhYmVsKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGxhYmVscy5qb2luKCfvvIwnKVxufVxuXG4vKipcbiAqIOagueaNrnZhbHVl6I635Y+W5pWw57uE5a+56LGhW3tsYWJlbCwgdmFsdWV9XeeahGxhYmVs5YC8XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1MYWJlbEJ5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZm91bmQgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSlcbiAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZm91bmRbMF0ubGFiZWxcbiAgfVxuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBnZXQgVGFyZ2V0IHZhbHVlXG4gKiBAcGFyYW0gZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGFyZ2V0VmFsdWUgPSAoZTogYW55KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgbGV0IHZhbHVlXG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGVcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWVtb2l6ZS1vbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=