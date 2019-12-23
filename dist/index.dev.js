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
    const { value, readOnly, onChange, name, } = props;
    const { options = [] } = props.props;
    const change = (target) => {
        const newValue = common_1.getTargetValue(target);
        onChange(name, newValue);
        if (props.props.onChange) {
            props.props.onChange(name, newValue);
        }
    };
    return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement(antd_1.Radio.Group, Object.assign({}, props.props, { value: value, onChange: change })));
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
    console.log('render', typeof render, render);
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
        const _a = button.props || {}, { type = 'primary', className = '', cb, addon, style = {} } = _a, rest = __rest(_a, ["type", "className", "cb", "addon", "style"]);
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
                React.createElement(antd_1.Button, Object.assign({ type: buttonType, className: className }, rest, { onClick: () => props.onButtonClick(key, cb) }), label),
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
const ButtonGroup_1 = __webpack_require__(/*! ./FooterButtons/ButtonGroup */ "./Form/FooterButtons/ButtonGroup.tsx");
const Field_1 = __webpack_require__(/*! ./Field */ "./Form/Field/index.tsx");
exports.default = (props) => {
    const { onButtonClick, gutter = config_1.DEFAULT_GUTTER, type, align = 'left', style = {}, className = '', fields, data, onChange, validation, labelDirection, } = props;
    return (React.createElement(antd_1.Row, { gutter: gutter },
        React.createElement("div", { className: `${className} ${labelDirection}` },
            type === 'FormButtons' && (React.createElement("div", { className: "react-conf-form-button-row-wrapper", style: Object.assign({ textAlign: align }, style) },
                React.createElement(ButtonGroup_1.default, { fields: fields, gutter: gutter, data: data, onButtonClick: onButtonClick }))),
            type !== 'FormButtons' && fields.map((field) => {
                const { key, span = config_1.DEFAULT_SPAN, label, display = true, } = field;
                const { rules, addon } = field.props;
                return display
                    ? (React.createElement(antd_1.Col, { key: field.key, span: span },
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
                    ? (React.createElement(Row_1.default, Object.assign({ key: key }, field, { onButtonClick: this.onButtonClick, data: this.data, validation: this.validation, labelDirection: labelDirection, onChange: this.onChange })))
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
    labelWidth: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9BdXRvQ29tcGxldGUudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0Nhc2NhZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL0RhdGVwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXQudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXROdW1iZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXRQYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9QaWNQcmV2aWV3LnNjc3M/YWQwZCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1BpY1ByZXZpZXcudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFkaW8udHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmFuZ2VwaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmVuZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9UZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9UaW1lcGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL1VwbG9hZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9Gb290ZXJCdXR0b25zL0J1dHRvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0Zvb3RlckJ1dHRvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vUm93LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2luZGV4LnNjc3M/MTBlZSIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL3V0aWxzL0Zvcm1WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtL2V4dGVybmFsIFwibWVtb2l6ZS1vbmVcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJy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O0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImluZGV4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRm9ybS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZFxuICBwcm9wczoge1xuICAgIGRhdGFTb3VyY2U6IGFueSxcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHByb3BzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5wcm9wcy5vbkNoYW5nZShwcm9wcy5uYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZShwcm9wcy5uYW1lLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRvQ29tcGxldGVcbiAgICAgIHsuLi5wcm9wcy5wcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvZXMvYnV0dG9uJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2J1dHRvbi9zdHlsZSdcblxuaW1wb3J0IHsgQnV0dG9uVHlwZSB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgZGF0YTogYW55LFxuICBwcm9wczoge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICB0eXBlOiBCdXR0b25UeXBlLFxuICAgIG9uQ2xpY2s6IChkYXRhOiBPYmplY3QpID0+IGFueVxuICB9XG4gIFtuYW1lOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIG9uQ2xpY2ssXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHMucHJvcHNcblxuICBsZXQgYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9ICdkZWZhdWx0J1xuICBjb25zdCBpbmRleCA9IGJ1dHRvblR5cGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHR5cGUpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHR5cGU9e2J1dHRvblR5cGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2J1dHRvblR5cGV9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGRhdGEpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvQnV0dG9uPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhc2NhZGVyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBDYXNjYWRlciBmcm9tICdhbnRkL2VzL2Nhc2NhZGVyJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2Nhc2NhZGVyL3N0eWxlJ1xuXG5mdW5jdGlvbiBnZXRDYXNjYWRlckxhYmVsKG9yaWdpbmFsVmFsdWUsIGN1ck9wdGlvbnMsIHZhbHVlSW5kZXgsIGxhYmVsQXJyKSB7XG4gIGxldCBpbmRleCA9IHZhbHVlSW5kZXhcbiAgaWYgKG9yaWdpbmFsVmFsdWUgJiYgaW5kZXggPCBvcmlnaW5hbFZhbHVlLmxlbmd0aCkge1xuICAgIGNvbnN0IHRlbXAgPSBjdXJPcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBvcmlnaW5hbFZhbHVlW3ZhbHVlSW5kZXhdKVxuICAgIGlmICh0ZW1wKSB7XG4gICAgICBsYWJlbEFyci5wdXNoKHRlbXAubGFiZWwpXG4gICAgfVxuICAgIGlmICh0ZW1wICYmIHRlbXAuY2hpbGRyZW4pIHtcbiAgICAgIGluZGV4ICs9IDFcbiAgICAgIHJldHVybiBnZXRDYXNjYWRlckxhYmVsKFxuICAgICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgICB0ZW1wLmNoaWxkcmVuLFxuICAgICAgICB2YWx1ZUluZGV4LFxuICAgICAgICBsYWJlbEFycixcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxBcnIuam9pbignIC8gJylcbiAgfVxuXG4gIHJldHVybiBsYWJlbEFyci5qb2luKCcgLyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNjYWRlckZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyByZWFkT25seSwgdmFsdWUsIG5hbWUgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucywgb25DaGFuZ2UsIHBsYWNlaG9sZGVyID0gJ+ivt+mAieaLqScgfSA9IHByb3BzLnByb3BzXG5cbiAgY29uc3QgY2hhbmdlID0gKHNlbGVjdGVkVmFsdWU6IGFueSwgc2VsZWN0ZWRPcHRpb25zOiBhbnkpID0+IHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkT3B0aW9ucylcbiAgICB9XG4gICAgcHJvcHMub25DaGFuZ2UobmFtZSwgc2VsZWN0ZWRWYWx1ZSlcbiAgfVxuXG4gIGlmICghcmVhZE9ubHkpIHtcbiAgICByZXR1cm4gPENhc2NhZGVyIHsuLi5wcm9wcy5wcm9wc30gb25DaGFuZ2U9e2NoYW5nZX0gdmFsdWU9e3ZhbHVlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gIH1cblxuICByZXR1cm4gZ2V0Q2FzY2FkZXJMYWJlbCh2YWx1ZSwgb3B0aW9ucywgMCwgW10pXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEl0ZW1MYWJlbEJ5VmFsdWUsIGdldFRhcmdldFZhbHVlLCBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveEZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlLCByZWFkT25seSwgb25DaGFuZ2UsIG5hbWUsXG4gIH0gPSBwcm9wc1xuICBjb25zdCB7IG9wdGlvbnMgPSBbXSwgY2hlY2tBbGxBYmxlID0gZmFsc2UgfSA9IHByb3BzLnByb3BzXG5cbiAgLy8g5YWo6YCJXG4gIGNvbnN0IG9uQ2hlY2tBbGxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbXVxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2goaXRlbSA9PiBuZXdWYWx1ZS5wdXNoKGl0ZW0udmFsdWUpKVxuICAgIH1cbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcblxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXNDaGVja2VkQWxsID0gKHZhbHVlcz86IGFueVtdKSA9PiAoXG4gICAgbm90RW1wdHlWYWx1ZSh2YWx1ZXMpICYmIHZhbHVlcy5sZW5ndGggPT09IG9wdGlvbnMubGVuZ3RoXG4gIClcblxuICBjb25zdCBjaGFuZ2UgPSAodGFyZ2V0OiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldFRhcmdldFZhbHVlKHRhcmdldClcbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWFkT25seSA/IChcbiAgICBnZXRJdGVtTGFiZWxCeVZhbHVlKG9wdGlvbnMsIHZhbHVlKVxuICApIDogKFxuICAgIDw+XG4gICAgICB7Y2hlY2tBbGxBYmxlICYmIChcbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkQWxsKHZhbHVlKX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGVja0FsbENoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIOWFqOmAiSAmbmJzcDtcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICl9XG4gICAgICA8Q2hlY2tib3guR3JvdXBcbiAgICAgICAgey4uLnByb3BzLnByb3BzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBEYXRlcGlja2VyIGZyb20gJ2FudGQvZXMvZGF0ZS1waWNrZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvZGF0ZS1waWNrZXIvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdZWVlZLU1NLUREJ1xuXG4gIEZPUk1BVF9USU1FID0gJ1lZWVktTU0tREQgSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gIXZhbHVlID8gdmFsdWUgOiB2YWx1ZS52YWx1ZU9mKClcbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0LCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIGNvbnN0IEZPUk1BVCA9IGZvcm1hdCB8fCAocmVzdC5zaG93VGltZSA/IHRoaXMuRk9STUFUX1RJTUUgOiB0aGlzLkZPUk1BVClcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gdmFsdWUgPyBtb21lbnQodmFsdWUpIDogdW5kZWZpbmVkXG5cbiAgICByZXR1cm4gcmVhZE9ubHlcbiAgICAgID8gKGZpZWxkVmFsdWUgJiYgZmllbGRWYWx1ZS5mb3JtYXQoZm9ybWF0KSlcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIGZvcm1hdD17Rk9STUFUfVxuICAgICAgICAgICAgdmFsdWU9e2ZpZWxkVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCB7IGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSwgcmVhZE9ubHksIHR5cGUsIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlIHx8ICdvZmYnXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHZhbHVlXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJudW1iZXJcIiAvPlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gIClcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiwgU3BpbiB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCAnLi9QaWNQcmV2aWV3LnNjc3MnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNob3dMaXN0OiBib29sZWFuLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIHVybDogc3RyaW5nW10gfCBzdHJpbmcsXG4gIHN0eWxlPzogT2JqZWN0XG4gIG9uSGlkZT86IFZvaWRGdW5jdGlvblxufVxuXG4vKipcbiAqIOWbvueJh+mihOiniFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNQcmV2aWV3ZXIoXG4gIHtcbiAgICBzaG93TGlzdCA9IHRydWUsXG4gICAgdXJsID0gW10sXG4gICAgc3R5bGUgPSB7fSxcbiAgICBjdXJyZW50ID0gJycsXG4gICAgb25IaWRlLFxuICB9OiBQcm9wcyxcbikge1xuICBsZXQgaW1hZ2VzID0gW11cbiAgaWYgKHVybCkge1xuICAgIGltYWdlcyA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gW3VybF0gOiB1cmxcbiAgfVxuICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKGN1cnJlbnQpXG4gIGNvbnN0IFtkZWcsIHNldERlZ10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaXNJbml0LCBzZXRJc0luaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVTaG93ID0gKHRhcmdldFNyYzogc3RyaW5nKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRTcmModGFyZ2V0U3JjKVxuICB9XG5cbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggLT0gMVxuICAgIGlkeCA9IGlkeCA8IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggKz0gMVxuICAgIGlkeCA9IGlkeCA+PSBpbWFnZXMubGVuZ3RoID8gMCA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cblxuICBjb25zdCByb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnICsgMSlcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uQmFjayA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnIC0gMSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgaWYgKCFzaG93TGlzdCAmJiAhaXNJbml0KSB7XG4gICAgaGFuZGxlU2hvdyhjdXJyZW50KVxuICAgIHNldElzSW5pdCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMaXN0XG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1yb3dcIj5cbiAgICAgICAgICB7aW1hZ2VzXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtpdGVtfV8ke2lkeH1gXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1ib3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7dmlzaWJsZVxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtdmlld2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXNwaW4gcmVhY3QtY29uZi1mb3JtLXBpYy13aGl0ZS1zcGluXCI+PFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9IHRpcD1cImxvYWRpbmcuLi5cIiBzaXplPVwibGFyZ2VcIiAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1jb250YWluZXJcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtwcmV2fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtuZXh0fT5cbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9ufT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cInJlZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9uQmFja30+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJ1bmRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwicHJldmltZ1wiXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke2RlZyAqIDkwfWRlZylgLCBvcGFjaXR5OiBsb2FkaW5nID8gMCA6IDEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaW1nLWNvbnRhaW5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0SXRlbUxhYmVsQnlWYWx1ZSwgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2FudGQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhZGlvRmllbGQocHJvcHM6IGFueSkge1xuICBjb25zdCB7XG4gICAgdmFsdWUsIHJlYWRPbmx5LCBvbkNoYW5nZSwgbmFtZSxcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHsgb3B0aW9ucyA9IFtdIH0gPSBwcm9wcy5wcm9wc1xuXG4gIGNvbnN0IGNoYW5nZSA9ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUodGFyZ2V0KVxuICAgIG9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlYWRPbmx5ID8gKFxuICAgIGdldEl0ZW1MYWJlbEJ5VmFsdWUob3B0aW9ucywgdmFsdWUpXG4gICkgOiAoXG4gICAgPFJhZGlvLkdyb3VwXG4gICAgICB7Li4ucHJvcHMucHJvcHN9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnYW50ZC9lcy9kYXRlLXBpY2tlcidcbi8vIGltcG9ydCAnYW50ZC9lcy9kYXRlLXBpY2tlci9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgc2ltcGxlQ2xvbmUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdZWVlZLU1NLUREJ1xuXG4gIEZPUk1BVF9USU1FID0gJ1lZWVktTU0tREQgSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBzaG93VGltZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZVswXSkpIHtcbiAgICAgIGlmICghc2hvd1RpbWUpIHtcbiAgICAgICAgdmFsdWUgPSBbXG4gICAgICAgICAgbW9tZW50KG1vbWVudCh2YWx1ZVswXSkuZm9ybWF0KCdZWVlZLU1NLUREIDAwOjAwOjAwJykpLnZhbHVlT2YoKSxcbiAgICAgICAgICBtb21lbnQobW9tZW50KHZhbHVlWzFdKS5mb3JtYXQoJ1lZWVktTU0tREQgMjM6NTk6NTknKSkudmFsdWVPZigpLFxuICAgICAgICBdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IFttb21lbnQodmFsdWVbMF0pLnZhbHVlT2YoKSwgbW9tZW50KHZhbHVlWzFdKS52YWx1ZU9mKCldXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSwgcHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZvcm1hdCwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICBjb25zdCBGT1JNQVQgPSBmb3JtYXQgfHwgKHJlc3Quc2hvd1RpbWUgPyB0aGlzLkZPUk1BVF9USU1FIDogdGhpcy5GT1JNQVQpXG5cbiAgICBsZXQgdGltZVZhbHVlID0gW251bGwsIG51bGxdXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGltZVZhbHVlID0gc2ltcGxlQ2xvbmUodmFsdWUpXG4gICAgICB0aW1lVmFsdWVbMF0gPSBtb21lbnQodmFsdWVbMF0pXG4gICAgICB0aW1lVmFsdWVbMV0gPSBtb21lbnQodmFsdWVbMV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IGAke21vbWVudCh0aW1lVmFsdWVbMF0pLmZvcm1hdChmb3JtYXQpfSB+ICR7bW9tZW50KHRpbWVWYWx1ZVsxXSkuZm9ybWF0KGZvcm1hdCl9YFxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgZm9ybWF0PXtGT1JNQVR9XG4gICAgICAgICAgICB2YWx1ZT17dGltZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmllbGRJdGVtVCB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSBGaWVsZEl0ZW1UICYge1xuICBkYXRhOiBPYmplY3RcbiAgcmVuZGVyOiAoZGF0YTpPYmplY3QpID0+IGFueVxufVxuXG5jb25zdCBSZW5kZXI6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wc1xuICBjb25zdCB7IHJlbmRlciB9ID0gcHJvcHMucHJvcHNcbiAgY29uc29sZS5sb2coJ3JlbmRlcicsIHR5cGVvZiByZW5kZXIsIHJlbmRlcilcbiAgcmV0dXJuIHR5cGVvZiByZW5kZXIgPT09ICdmdW5jdGlvbicgPyByZW5kZXIoZGF0YSkgOiAocmVuZGVyIHx8IG51bGwpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IFNlbGVjdCBmcm9tICdhbnRkL2VzL3NlbGVjdCdcbi8vIGltcG9ydCAnYW50ZC9lcy9zZWxlY3Qvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIGdldEl0ZW1MYWJlbEJ5VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZSAmJiBlLnRhcmdldFxuICAgIGxldCB2YWx1ZVxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGVcbiAgICB9XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSwgcHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyA9IFtdLFxuICAgICAgcGxhY2Vob2xkZXIgPSAn6K+36YCJ5oupJyxcbiAgICAgIHNob3dTZWFyY2ggPSB0cnVlLFxuICAgICAgb3B0aW9uRmlsdGVyUHJvcCA9ICdsYWJlbCcsXG4gICAgICBhbGxvd0NsZWFyID0gdHJ1ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyBnZXRJdGVtTGFiZWxCeVZhbHVlKGl0ZW1zLCB2YWx1ZSlcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD17b3B0aW9uRmlsdGVyUHJvcH1cbiAgICAgICAgICAgIHNob3dTZWFyY2g9e3Nob3dTZWFyY2h9XG4gICAgICAgICAgICBhbGxvd0NsZWFyPXthbGxvd0NsZWFyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZSAmJiBlLnRhcmdldFxuICAgIGxldCB2YWx1ZVxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGVcbiAgICB9XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSwgcmVhZE9ubHksIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlIHx8ICdvZmYnXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHZhbHVlXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IFRpbWVwaWNrZXIgZnJvbSAnYW50ZC9lcy90aW1lLXBpY2tlcidcbi8vIGltcG9ydCAnYW50ZC9lcy90aW1lLXBpY2tlci9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgc2ltcGxlQ2xvbmUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdISDptbSdcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdCA9IHRoaXMuRk9STUFUIH0gPSB0aGlzLnByb3BzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSBnZXRUYXJnZXRWYWx1ZShlKVxuICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpXG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCByZWFkT25seSwgcHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZvcm1hdCA9IHRoaXMuRk9STUFULCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGltZVZhbHVlID0gbm90RW1wdHlWYWx1ZSh2YWx1ZSlcbiAgICAgID8gbW9tZW50KHNpbXBsZUNsb25lKHZhbHVlKSwgZm9ybWF0KVxuICAgICAgOiB1bmRlZmluZWRcblxuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyBtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgdmFsdWU9e3RpbWVWYWx1ZX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcGxvYWQsIEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUGljUHJldmlldyBmcm9tICcuL1BpY1ByZXZpZXcnXG5cbi8qKlxuICogVXBsb2FkXG4gKiBAdHlwZSB7WE1MfVxuICovXG5jb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gIDxkaXY+XG4gICAgPEljb24gdHlwZT1cInBsdXNcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+5LiK5LygPC9kaXY+XG4gIDwvZGl2PlxuKVxuY29uc3QgdXBsb2FkQnV0dG9uVGV4dCA9IChcbiAgPEJ1dHRvbj5cbiAgICA8SWNvbiB0eXBlPVwidXBsb2FkXCIgLz5cbiAgICAmbmJzcDvkuIrkvKBcbiAgPC9CdXR0b24+XG4pXG5cbnR5cGUgVXBsb2FkRmllbGRQcm9wcyA9IHtcbiAgdmFsdWU/OiBBcnJheTxhbnk+LFxuICBuYW1lOiBzdHJpbmcsXG4gIHJlYWRPbmx5PzogYm9vbGVhbixcbiAgb25DaGFuZ2U6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnlbXSkgPT4gdm9pZFxuICBwcm9wczoge1xuICAgIGJsb2JOYW1lOiBzdHJpbmcsXG4gICAgbWF4RmlsZXM6IG51bWJlcixcbiAgICBtYXhGaWxlU2l6ZTogbnVtYmVyLFxuICAgIGhlaWdodFJhdGlvPzogbnVtYmVyLFxuICAgIHdpZHRoUmF0aW8/OiBudW1iZXIsXG4gICAgaGVhZGVycz86IGFueSxcbiAgICBsaXN0VHlwZT86ICd0ZXh0JyB8ICdwaWN0dXJlJyB8ICdwaWN0dXJlLWNhcmQnLFxuICAgIGZpbGVUeXBlOiBzdHJpbmcsIC8vIOS4iuS8oOaWh+S7tuexu+WeiyAgaW1nIC8gb3RoZXJcbiAgICBzaG93RXJyb3JNZXNzYWdlPzogYm9vbGVhbixcbiAgICBvbkNoYW5nZTogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLFxuICAgIG9uVXBsb2FkZWQ/OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXG4gICAgZ2V0UmVzcG9uc2VEYXRhPzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkIC8vIOiOt+WPlui/lOWbnueahOaVsOaNrlxuICAgIGFjdGlvbjogc3RyaW5nLFxuICB9XG59XG5cbnR5cGUgVXBsb2FkU3RhdGUgPSB7XG4gIHByZXZpZXdWaXNpYmxlOiBib29sZWFuLFxuICBwcmV2aWV3SW1hZ2U6IHN0cmluZ1xuICBlcnJvck1zZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWRGaWVsZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VXBsb2FkRmllbGRQcm9wcywgVXBsb2FkU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAvLyBwcm9wczoge1xuICAgIC8vICAgc2hvd0Vycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAvLyAgIG1heEZpbGVzOiA1LCAvLyDmnIDlpJrog73kuIrkvKDmlofku7bmlbBcbiAgICAvLyAgIG1heEZpbGVTaXplOiAxMCwgLy8g5pyA5aSn5LiK5Lyg5L2T56evXG4gICAgLy8gICBmaWxlVHlwZTogJ2ltZycsIC8vIOm7mOiupOS4iuS8oOWbvueJh1xuICAgIC8vIH0sXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBwcmV2aWV3VmlzaWJsZTogZmFsc2UsXG4gICAgcHJldmlld0ltYWdlOiAnJyxcbiAgICBlcnJvck1zZzogJycsXG4gIH1cblxuICBvbkNoYW5nZSA9IChpbmZvOiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnISEhISEh6L+b5YWlIG9uQ2hhbmdlICcpXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25VcGxvYWRlZCB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGxldCBmaWxlTGlzdCA9IFsuLi5pbmZvLmZpbGVMaXN0XVxuXG4gICAgZmlsZUxpc3QuZm9yRWFjaCgoZmlsZSwgaWR4KSA9PiB7XG4gICAgICBpZiAoZmlsZS5yZXNwb25zZSkge1xuICAgICAgICBmaWxlTGlzdFtpZHhdID0ge1xuICAgICAgICAgIC4uLmZpbGVMaXN0W2lkeF0sXG4gICAgICAgICAgdXJsOiBmaWxlLnJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb24sXG4gICAgICAgICAgbmFtZTogZmlsZS5yZXNwb25zZS5maWxlbmFtZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbGVcbiAgICB9KVxuXG4gICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMucHJvcHMuZ2V0UmVzcG9uc2VEYXRhKSB7XG4gICAgICAgIHRoaXMucHJvcHMucHJvcHMuZ2V0UmVzcG9uc2VEYXRhKGluZm8uZmlsZS5yZXNwb25zZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgIGZpbGVMaXN0ID0gW11cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogaW5mby5maWxlPy5yZXNwb25zZT8uaW52b2ljZT8ubWVzc2FnZSB8fCAn5LiK5Lyg6ZSZ6K+vLCDor7fph43or5UhJyB9KVxuICAgIH0gZWxzZSBpZiAoIWluZm8uZmlsZS5zdGF0dXMpIHtcbiAgICAgIC8vIOaWh+S7tui2hei/h+Wkp+Wwj+aIluWFtuWug+S4jea7oei2s+WJjeerr+mZkOWItuadoeS7tuaDheWGtVxuICAgICAgZmlsZUxpc3QgPSBmaWxlTGlzdC5zbGljZSgwLCBmaWxlTGlzdC5sZW5ndGggLSAxKVxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMubmFtZSwgZmlsZUxpc3QpXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShmaWxlTGlzdClcbiAgICB9XG4gICAgaWYgKG9uVXBsb2FkZWQpIHtcbiAgICAgIG9uVXBsb2FkZWQoZmlsZUxpc3QpXG4gICAgfVxuICB9XG5cbiAgb25QcmV2aWV3ID0gKGZpbGU6IGFueSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2aWV3VmlzaWJsZTogdHJ1ZSwgcHJldmlld0ltYWdlOiBmaWxlLnVybCB9KVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2aWV3VmlzaWJsZTogZmFsc2UsIHByZXZpZXdJbWFnZTogJycgfSlcbiAgfVxuXG4gIGN1c3RvbVJlcXVlc3QgPSAoXG4gICAge1xuICAgICAgZmlsZSxcbiAgICAgIG9uU3VjY2VzcyxcbiAgICAgIG9uRXJyb3IsXG4gICAgICBvblByb2dyZXNzLFxuICAgIH0sXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgaGVhZGVycywgYWN0aW9uIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKVxuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGFjdGlvbiwgZm9ybURhdGEsIHtcbiAgICAgICAgb25VcGxvYWRQcm9ncmVzczogb25Qcm9ncmVzcyxcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyB8fCB7fSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlKVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICfkuIrkvKDlpLHotKUhJyB9KVxuICAgICAgICBvbkVycm9yKClcbiAgICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGFib3J0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICfkuIrkvKDnu4jmraIhJyB9KVxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBiZWZvcmVVcGxvYWQoZmlsZTogYW55LCB0eXBlOiBzdHJpbmcpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnISEhISEh6L+b5YWlIGJlZm9yZVVwbG9hZCAnKVxuICAgIGNvbnN0IHsgbWF4RmlsZVNpemUgPSAxMCB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIC8vIGlmIChoZWlnaHRSYXRpbyAmJiB3aWR0aFJhdGlvKSB7IC8vIOmqjOivgemVv+WuveavlOS+i1xuICAgIC8vICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBhd2FpdCBnZXRGaWxlRGltZW5zaW9uKGZpbGUpXG4gICAgLy8gICBpZiAoaGVpZ2h0L3dpZHRoICE9PSBoZWlnaHRSYXRpby93aWR0aFJhdGlvKSB7XG4gICAgLy8gICAgIG1lc3NhZ2UuZXJyb3IoYOmVv+WuveavlOW/hemhu+aYryAke2hlaWdodFJhdGlvfSAvICR7d2lkdGhSYXRpb31gKVxuICAgIC8vICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8g6aqM6K+B5paH5Lu25aSn5bCPc2l6ZVxuICAgIGNvbnN0IGZpbGVTaXplTGFyZ2VyID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPiBtYXhGaWxlU2l6ZVxuICAgIGlmIChmaWxlU2l6ZUxhcmdlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiBg5paH5Lu25L2T56ev5aSn5bCP5LiN6LaF6L+HJHttYXhGaWxlU2l6ZX1NYCB9KVxuICAgICAgLy8gbWVzc2FnZS5lcnJvcihg5paH5Lu25L2T56ev5aSn5bCP5LiN6LaF6L+HJHttYXhGaWxlU2l6ZX1NYClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIOmqjOivgeaWh+S7tuagvOW8j1xuICAgIGlmICh0eXBlID09PSAnaW1nJykge1xuICAgICAgY29uc3QgaXNKUEcgPSBmaWxlLnR5cGVcbiAgICAgIGlmIChpc0pQRyA9PT0gJ2ltYWdlL2pwZWcnIHx8IGlzSlBHID09PSAnaW1hZ2UvcG5nJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S7heaUr+aMgeS4iuS8oGpwZy9wbmfmoLzlvI/lm77niYcnIH0pXG4gICAgICAvLyBtZXNzYWdlLmVycm9yKCfku4XmlK/mjIHkuIrkvKBqcGcvcG5n5qC85byP5Zu+54mHJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSA9IFtdLFxuICAgICAgcmVhZE9ubHksXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBtYXhGaWxlcyA9IDEwLFxuICAgICAgYmxvYk5hbWUgPSAnYmxvYicsXG4gICAgICBmaWxlVHlwZSA9ICdpbWcnLFxuICAgICAgc2hvd0Vycm9yTWVzc2FnZSA9IHRydWUsXG4gICAgICBsaXN0VHlwZSA9ICdwaWN0dXJlLWNhcmQnLFxuICAgICAgaGVhZGVycyA9IHt9LFxuICAgIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgLy8gdmFsdWUgPSB2YWx1ZSB8fCBbXVxuXG5cbiAgICBjb25zdCBidXR0b24gPSBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcgPyB1cGxvYWRCdXR0b24gOiB1cGxvYWRCdXR0b25UZXh0XG4gICAgY29uc3QgZm9ybWF0VmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICBjb25zdCBpbWFnZXNVcmxzID0gW11cbiAgICBmb3JtYXRWYWx1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaW1hZ2VzVXJscy5wdXNoKGVsZW1lbnQ/LnVybClcbiAgICB9KVxuXG4gICAgZm9ybWF0VmFsdWUuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvcm1hdFZhbHVlW2lkeF0gPSB7XG4gICAgICAgICAgdWlkOiBgJHtpdGVtfV8ke2lkeH1gLFxuICAgICAgICAgIHVybDogaXRlbSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pXG5cbiAgICAvLyBjb25zb2xlLmxvZygnZXJyJywgdGhpcy5zdGF0ZS5lcnJvck1zZywgc2hvd0Vycm9yTWVzc2FnZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgPFVwbG9hZFxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGtleT17YmxvYk5hbWV9XG4gICAgICAgICAgbmFtZT17YmxvYk5hbWV9XG4gICAgICAgICAgaGVhZGVycz17aGVhZGVyc31cbiAgICAgICAgICBsaXN0VHlwZT17bGlzdFR5cGV9XG4gICAgICAgICAgZmlsZUxpc3Q9e2Zvcm1hdFZhbHVlfVxuICAgICAgICAgIHNob3dVcGxvYWRMaXN0XG4gICAgICAgICAgb25DaGFuZ2U9e2ZpbGUgPT4gdGhpcy5vbkNoYW5nZShmaWxlKX1cbiAgICAgICAgICBiZWZvcmVVcGxvYWQ9e2ZpbGUgPT4gdGhpcy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZVR5cGUpfVxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICBvblByZXZpZXc9e3RoaXMub25QcmV2aWV3fVxuICAgICAgICAgIGN1c3RvbVJlcXVlc3Q9e3RoaXMuY3VzdG9tUmVxdWVzdH0gLyog6KaG55uW6buY6K6k55qE5LiK5Lyg6KGM5Li6ICovXG4gICAgICAgID5cbiAgICAgICAgICB7dmFsdWUubGVuZ3RoID49IG1heEZpbGVzIHx8IHJlYWRPbmx5ID8gbnVsbCA6IGJ1dHRvbn1cbiAgICAgICAgPC9VcGxvYWQ+XG5cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNc2cgJiYgc2hvd0Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtZXJyb3JcIj57dGhpcy5zdGF0ZS5lcnJvck1zZ308L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7dGhpcy5zdGF0ZS5wcmV2aWV3VmlzaWJsZSAmJiAoXG4gICAgICAgICAgPFBpY1ByZXZpZXdcbiAgICAgICAgICAgIHVybD17aW1hZ2VzVXJsc31cbiAgICAgICAgICAgIHNob3dMaXN0PXtmYWxzZX1cbiAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICBjdXJyZW50PXt0aGlzLnN0YXRlLnByZXZpZXdJbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpZWxkSXRlbVQsIEV4dGVuZEZpZWxkIH0gZnJvbSAnLi4vaW5kZXguZCdcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi9SZW5kZXInXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0J1xuaW1wb3J0IFRpbWVwaWNrZXIgZnJvbSAnLi9UaW1lcGlja2VyJ1xuaW1wb3J0IFJhbmdlcGlja2VyIGZyb20gJy4vUmFuZ2VwaWNrZXInXG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInXG5pbXBvcnQgQ2FzY2FkZXJGaWVsZCBmcm9tICcuL0Nhc2NhZGVyJ1xuaW1wb3J0IFVwbG9hZEJveCBmcm9tICcuL1VwbG9hZCdcbmltcG9ydCBBdXRvQ29tcGxldGUgZnJvbSAnLi9BdXRvQ29tcGxldGUnXG5pbXBvcnQgSW5wdXRQYXNzd29yZCBmcm9tICcuL0lucHV0UGFzc3dvcmQnXG5pbXBvcnQgSW5wdXROdW1iZXIgZnJvbSAnLi9JbnB1dE51bWJlcidcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vUmFkaW8nXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCdcblxuY29uc3QgbWFwID0ge1xuICByZW5kZXI6IFJlbmRlcixcbiAgaW5wdXQ6IElucHV0LFxuICBidXR0b246IEJ1dHRvbixcbiAgc2VsZWN0OiBTZWxlY3QsXG4gIHRpbWVwaWNrZXI6IFRpbWVwaWNrZXIsXG4gIHJhbmdlcGlja2VyOiBSYW5nZXBpY2tlcixcbiAgZGF0ZXBpY2tlcjogRGF0ZXBpY2tlcixcbiAgY2FzY2FkZXI6IENhc2NhZGVyRmllbGQsXG4gIGlucHV0UGFzc3dvcmQ6IElucHV0UGFzc3dvcmQsXG4gIGlucHV0TnVtYmVyOiBJbnB1dE51bWJlcixcbiAgdGV4dGFyZWE6IFRleHRhcmVhLFxuICByYWRpbzogUmFkaW8sXG4gIGNoZWNrYm94OiBDaGVja2JveCxcbiAgdXBsb2FkOiBVcGxvYWRCb3gsXG4gIGF1dG9Db21wbGV0ZTogQXV0b0NvbXBsZXRlLFxufVxuXG4vKiBBZGQgZXh0cmFjdCBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpZWxkcyA9IChleHRlbmRGaWVsZHM6IEFycmF5PEV4dGVuZEZpZWxkPikgPT4gKFxuICBleHRlbmRGaWVsZHMuZm9yRWFjaCgoZXh0ZW5kRmllbGQ6IEV4dGVuZEZpZWxkKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBjb21wb25lbnQgfSA9IGV4dGVuZEZpZWxkXG4gICAgbWFwW25hbWVdID0gY29tcG9uZW50XG4gIH0pXG4pXG5cbi8qIEZpZWxkIE1hcCAqL1xuY29uc3QgZ2V0Q29tcG9uZW50ID0gKHR5cGU6IHN0cmluZykgPT4gbWFwW3R5cGVdIHx8IG51bGxcblxuLyogRmllbGQgTWFwcGluZyAqL1xudHlwZSBQcm9wcyA9IHsgZGF0YTogT2JqZWN0LCBvbkNoYW5nZTogYW55LCBuYW1lPzogc3RyaW5nLCB2YWx1ZTogYW55IH0gJiBGaWVsZEl0ZW1UXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0eXBlLCAuLi5yZXN0IH0gPSBwcm9wc1xuICBjb25zdCBDb21wb25lbnQgPSBnZXRDb21wb25lbnQodHlwZSlcbiAgcmV0dXJuIENvbXBvbmVudFxuICAgID8gPENvbXBvbmVudCB7Li4ucmVzdH0gLz5cbiAgICA6IG51bGxcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdhbnRkL2VzL2J1dHRvbidcbi8vIGltcG9ydCAnYW50ZC9lcy9idXR0b24vc3R5bGUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgQnV0dG9uVCwgRmllbGRJdGVtVCwgQnV0dG9uVHlwZSB9IGZyb20gJy4uL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkcz86IEFycmF5PEZpZWxkSXRlbVQgfCBCdXR0b25UPlxuICBndXR0ZXI/OiBudW1iZXJcbiAgb25CdXR0b25DbGljaz86IChrZXk6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxuICBkYXRhPzogT2JqZWN0LFxufVxuXG5jb25zdCBidXR0b25UeXBlczogQXJyYXk8QnV0dG9uVHlwZT4gPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdkYW5nZXInLCAnbGluaycsICdnaG9zdCddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogUHJvcHMpOiBhbnkge1xuICBjb25zdCB7IGd1dHRlciA9IDE2LCBmaWVsZHMgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgZmllbGRzLm1hcCgoYnV0dG9uOiBCdXR0b25ULCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBrZXksXG4gICAgICAgIGxhYmVsID0gJycsXG4gICAgICAgIGRpc3BsYXkgPSB0cnVlLFxuICAgICAgfSA9IGJ1dHRvblxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHR5cGUgPSAncHJpbWFyeScsXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgICBjYixcbiAgICAgICAgYWRkb24sXG4gICAgICAgIHN0eWxlID0ge30sXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH0gPSBidXR0b24ucHJvcHMgfHwge31cblxuICAgICAgbGV0IGJ1dHRvblR5cGU6IGFueVxuICAgICAgY29uc3QgaW5kZXggPSBidXR0b25UeXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0eXBlKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0LmJsb2NrKSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXNwbGF5XG4gICAgICAgID8gKFxuICAgICAgICAgIDxzcGFuIGtleT17a2V5fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge2lkeCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLWJ1dHRvbi1zcGFjZS1iZXR3ZWVuXCIgc3R5bGU9e3sgd2lkdGg6IGd1dHRlciB9fSAvPn1cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT17YnV0dG9uVHlwZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJ1dHRvbkNsaWNrKGtleSwgY2IpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAge2FkZG9uICYmIGFkZG9uKHByb3BzLmRhdGEpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgICAgICA6IG51bGxcbiAgICB9KVxuICApXG59XG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vQnV0dG9uR3JvdXAnXG5pbXBvcnQgeyBGaWVsZHNDb25mVCB9IGZyb20gJy4uL2luZGV4LmQnXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEZpZWxkc0NvbmZUIHtcbiAgb25CdXR0b25DbGljazogKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxufVxuXG5jb25zdCBhbGlnbk1hcCA9IHtcbiAgbGVmdDogJ2ZsZXgtc3RhcnQnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxuICByaWdodDogJ2ZsZXgtZW5kJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyQnV0dG9ucyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHN0eWxlLFxuICAgIGFsaWduLFxuICAgIHR5cGUsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHNcbiAgY29uc3Qgd3JhcHBlclN0eWxlID0ge1xuICAgIGp1c3RpZnlDb250ZW50OiBhbGlnbk1hcFthbGlnbiB8fCAnY2VudGVyJ10sXG4gICAgLi4uc3R5bGUsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tYnV0dG9uLXdyYXBwZXJcIlxuICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZX1cbiAgICA+XG4gICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkZvb3RlckJ1dHRvbnMuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiB0cnVlLFxuICBzdHlsZToge30sXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29sLCBGb3JtIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBSb3cgZnJvbSAnYW50ZC9lcy9yb3cnXG4vLyBpbXBvcnQgQ29sIGZyb20gJ2FudGQvZXMvY29sJ1xuLy8gaW1wb3J0IEZvcm0gZnJvbSAnYW50ZC9lcy9mb3JtJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL3Jvdy9zdHlsZSdcbi8vIGltcG9ydCAnYW50ZC9lcy9jb2wvc3R5bGUnXG4vLyBpbXBvcnQgJ2FudGQvZXMvZm9ybS9zdHlsZSdcblxuaW1wb3J0IHsgREVGQVVMVF9HVVRURVIsIERFRkFVTFRfU1BBTiB9IGZyb20gJ0BGb3JtL2NvbmZpZydcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuL0Zvb3RlckJ1dHRvbnMvQnV0dG9uR3JvdXAnXG5pbXBvcnQgeyBGaWVsZHNDb25mVCwgRmllbGRJdGVtVCB9IGZyb20gJy4vaW5kZXguZCdcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJ1xuXG50eXBlIFByb3BzID0gRmllbGRzQ29uZlQgJiB7XG4gIG9uQnV0dG9uQ2xpY2s6ICh0eXBlOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pID0+IHZvaWRcbiAgb25DaGFuZ2U6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IGFueVxuICBkYXRhOiBPYmplY3RcbiAgdmFsaWRhdGlvbjogT2JqZWN0XG4gIGxhYmVsRGlyZWN0aW9uOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvcHMpOiBhbnkgPT4ge1xuICBjb25zdCB7XG4gICAgb25CdXR0b25DbGljayxcbiAgICBndXR0ZXIgPSBERUZBVUxUX0dVVFRFUixcbiAgICB0eXBlLFxuICAgIGFsaWduID0gJ2xlZnQnLFxuICAgIHN0eWxlID0ge30sXG4gICAgY2xhc3NOYW1lID0gJycsXG4gICAgZmllbGRzLFxuICAgIGRhdGEsXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsaWRhdGlvbixcbiAgICBsYWJlbERpcmVjdGlvbixcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7bGFiZWxEaXJlY3Rpb259YH0+XG4gICAgICAgIHsvKiDmjInpkq7nu4TlkIggKi99XG4gICAgICAgIHt0eXBlID09PSAnRm9ybUJ1dHRvbnMnICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tYnV0dG9uLXJvdy13cmFwcGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHsgdGV4dEFsaWduOiBhbGlnbiB9LCBzdHlsZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgICBndXR0ZXI9e2d1dHRlcn1cbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17b25CdXR0b25DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIOmdnuaMiemSruaOp+S7tue7hOWQiCAqL31cbiAgICAgICAge3R5cGUgIT09ICdGb3JtQnV0dG9ucycgJiYgZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkSXRlbVQpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBzcGFuID0gREVGQVVMVF9TUEFOLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5ID0gdHJ1ZSxcbiAgICAgICAgICB9ID0gZmllbGRcblxuICAgICAgICAgIGNvbnN0IHsgcnVsZXMsIGFkZG9uIH0gPSBmaWVsZC5wcm9wc1xuXG4gICAgICAgICAgcmV0dXJuIGRpc3BsYXlcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17ZmllbGQua2V5fSBzcGFuPXtzcGFufT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ZpZWxkLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtbJ2J1dHRvbicsICdyZW5kZXInXS5pbmRleE9mKGZpZWxkLnR5cGUpID09PSAtMSA/IGxhYmVsIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3J1bGVzICYmIHJ1bGVzLmluZGV4T2YoJ3JlcXVpcmVkJykgIT09IC0xfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xuICAgICAgICAgICAgICAgICAgICAodmFsaWRhdGlvbltrZXldICYmICF2YWxpZGF0aW9uW2tleV0udmFsaWRhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGhlbHA9e1xuICAgICAgICAgICAgICAgICAgICAodmFsaWRhdGlvbltrZXldICYmICF2YWxpZGF0aW9uW2tleV0udmFsaWRhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWRhdGlvbltrZXldLm1zZ1xuICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhW2tleV19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2FkZG9uICYmIGFkZG9uKGRhdGEpfVxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUm93PlxuICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TUEFOID0gOFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1VUVEVSID0gMTZcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IGFkZEZpZWxkcyB9IGZyb20gJ0BGb3JtL0ZpZWxkJ1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi91dGlscy9Gb3JtVmFsaWRhdG9yJ1xuaW1wb3J0IFJvdyBmcm9tICcuL1JvdydcbmltcG9ydCB7IFJKRm9ybVByb3BzLCBGaWVsZHNDb25mVCB9IGZyb20gJy4vaW5kZXguZCdcbmltcG9ydCB7IGFkZExhYmVsU3R5bGVXaWR0aCB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCBGb290ZXJCdXR0b25zIGZyb20gJy4vRm9vdGVyQnV0dG9ucydcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbnR5cGUgU3RhdGUgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSSkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UkpGb3JtUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3Bpbm5pbmc6IGZhbHNlLFxuICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgZGF0YVNvdXJjZToge30sXG4gICAgZXh0ZW5kVmFsaWRhdG9yczogW10sXG4gICAgZXh0ZW5kRmllbGRzOiBbXSxcbiAgICBmaWVsZHM6IFtdLFxuICAgIGxhYmVsRGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsIC8vICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCdcbiAgICBsYWJlbFdpZHRoOiAxMjAsXG4gIH1cblxuICBtb3VudGVkID0gZmFsc2VcblxuICBkYXRhID0ge30gLy8gZm9ybeaVsOaNrlxuXG4gIGRhdGFDaGFuZ2VkID0gZmFsc2VcblxuICB2YWxpZGF0aW9uID0ge30gLy8g6aqM6K+B57uT5p6cXG5cbiAgLyoqXG4gICAqIGRldGVjdCBkYXRhIHNvdXJjZSB3aGV0aGVyIGlzIGNoYW5nZWRcbiAgICovXG4gIGlzRGF0YVNvdXJjZUNoYW5nZWQgPSBtZW1vaXplKChkYXRhU291cmNlOiB7fSkgPT4ge1xuICAgIC8vIFVTRUxFU1MgXCJ8fCBjb25kaXRpb25cIlxuICAgIC8vIGJlY2F1c2UgZGF0YVNvdXJjZSBpcyB0aGUga2V5IG9mIG1ldGhvZCBydW5uaW5nIGFuZCBuZWVkIHRvXG4gICAgLy8gdXNlIGl0IHRvIGF2b2lkIHRoYXQgZXNsaW50IHJlcG9ydCBhbiBlcnJvciBcImRhdGFTb3VyY2UgaXNcbiAgICAvLyBkZWZpbmVkIGJ1dCBuZXZlciB1c2VkXCJcbiAgICB0aGlzLmRhdGFDaGFuZ2VkID0gdHJ1ZSB8fCB0eXBlb2YgZGF0YVNvdXJjZSA9PT0gJ29iamVjdCdcblxuICAgIHJldHVybiB0aGlzLmRhdGFDaGFuZ2VkXG4gIH0pXG5cbiAgLyoqXG4gICAqIGdldCBkYXRhIGZyb20gZGF0YVNvdXJjZSBvciBsb2NhbCBkYXRhLFxuICAgKiBhbmQgYWxzbyBzZXQgdXAgXCJ2YWxpZGF0aW9uXCJcbiAgICovXG4gIGNvbnZlcnREYXRhRnJvbUZpZWxkcyA9IG1lbW9pemUoKGZpZWxkczogQXJyYXk8YW55PiwgZGF0YVNvdXJjZTogYW55KSA9PiB7XG4gICAgZmllbGRzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAocm93LnR5cGUgIT09ICdGb3JtQnV0dG9ucycpIHtcbiAgICAgICAgcm93LmZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSBmYWxzZSAmJiBpdGVtLnR5cGUgIT09ICdyZW5kZXInICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOaVsOaNrua6kChwcm9wcynlj5HnlJ/mlLnlj5jvvIzlj5bmlbDmja7mupDvvIzlkKbliJnlj5bmnKzlnLAoc3RhdGUpXG4gICAgICAgICAgICB0aGlzLmRhdGFbaXRlbS5rZXldID0gdGhpcy5kYXRhQ2hhbmdlZFxuICAgICAgICAgICAgICA/IGRhdGFTb3VyY2VbaXRlbS5rZXldXG4gICAgICAgICAgICAgIDogdGhpcy5kYXRhW2l0ZW0ua2V5XVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mupAocHJvcHMp5Y+R55Sf5pS55Y+Y77yaIOWmguaenOacieWAvO+8jOmHjeaWsOagoemqjO+8m+ayoeacieWAvO+8jOS4jeagoemqjFxuICAgICAgICAgICAgY29uc3QgaW5pdCA9IHRoaXMudmFsaWRhdGVGaWVsZChpdGVtLmtleSwgdGhpcy5kYXRhW2l0ZW0ua2V5XSwgaXRlbS5wcm9wcz8ucnVsZXMgfHwgW10pXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25baXRlbS5rZXldID0ge1xuICAgICAgICAgICAgICAuLi5pbml0LFxuICAgICAgICAgICAgICBydWxlczogaXRlbS5wcm9wcz8ucnVsZXMgfHwgW10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kYXRhQ2hhbmdlZCA9IGZhbHNlXG4gIH0pXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICAvLyBhZGQgZXh0ZW5kRmllbGRzIGludG8gZm9ybSBnZW5lcmF0aW5nL21hcHBpbmdcbiAgICBhZGRGaWVsZHModGhpcy5wcm9wcy5leHRlbmRGaWVsZHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlXG4gICAgLy8gZXh0ZW5kIHZhbGlkYXRvcnMgaW50byBGb3JtIFZhbGlkYXRvclxuICAgIEZvcm1WYWxpZGF0b3IuZXh0ZW5kVmFsaWRhdG9ycyh0aGlzLnByb3BzLmV4dGVuZFZhbGlkYXRvcnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIGZpZWxkIGNoYW5nZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgb25DaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlkIGNoYW5nZScsIGtleSwgdmFsdWUpXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgW2tleV06IHZhbHVlLFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlICYmIHRoaXMudmFsaWRhdGlvbltrZXldKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgLi4uRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMpLFxuICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gIH1cblxuICAvKipcbiAgICog6aqM6K+B5omA5pyJZmllbGRzXG4gICAqL1xuICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdmFsaWRhdGVkID0gdHJ1ZVxuICAgIHRoaXMucHJvcHMuZmllbGRzLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICBpZiAocm93LnR5cGUgIT09ICdGb3JtQnV0dG9ucycpIHtcbiAgICAgICAgcm93LmZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSBmYWxzZSAmJiBpdGVtLnR5cGUgIT09ICdyZW5kZXInICYmIGl0ZW0udHlwZSAhPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5IH0gPSBpdGVtXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCB0aGlzLnZhbGlkYXRpb25ba2V5XS5ydWxlcylcblxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uW2tleV0gPSB7XG4gICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgcnVsZXM6IHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHt9KVxuICAgIHJldHVybiB2YWxpZGF0ZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBTdWJtaXRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uU3VibWl0ID0gKGU/OiBSZWFjdC5TeW50aGV0aWNFdmVudDxFdmVudFRhcmdldD4pOiB2b2lkID0+IHtcbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVyblxuXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCBkYXRhJywgdGhpcy5kYXRhKVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25TdWJtaXQpIHRoaXMucHJvcHMub25TdWJtaXQodGhpcy5kYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFJlc2V0XG4gICAqL1xuICBvblJlc2V0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXQpIHRoaXMucHJvcHMub25SZXNldCgpXG4gIH1cblxuICAvKipcbiAgICogYnV0dG9uIGNsaWNrXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgb25CdXR0b25DbGljayA9ICh0eXBlOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgIHRoaXMub25TdWJtaXQoKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgdGhpcy5vblJlc2V0KClcbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYih0aGlzLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluagoemqjFxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gcnVsZXNcbiAgICovXG4gIHZhbGlkYXRlRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHJ1bGVzOiBBcnJheTxzdHJpbmc+ID0gW10pID0+IHtcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uW2tleV0gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgcnVsZXMpXG4gICAgfVxuICAgIHJldHVybiB7IHZhbGlkYXRlZDogdHJ1ZSwgbXNnOiAnJyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzLCBkYXRhU291cmNlLCBsYWJlbERpcmVjdGlvbiwgbGFiZWxXaWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuaXNEYXRhU291cmNlQ2hhbmdlZChkYXRhU291cmNlKVxuICAgIHRoaXMuY29udmVydERhdGFGcm9tRmllbGRzKGZpZWxkcywgZGF0YVNvdXJjZSB8fCB7fSkgLy8gZGF0YSB0byBmaWVsZHNcbiAgICBhZGRMYWJlbFN0eWxlV2lkdGgobGFiZWxXaWR0aCwgbGFiZWxEaXJlY3Rpb24pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNwaW4gc3Bpbm5pbmc9e3RoaXMucHJvcHMuc3Bpbm5pbmd9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZHNDb25mVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGByb3dfJHtpZHh9YFxuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IGZpZWxkLmRpc3BsYXkgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5kaXNwbGF5XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZSB8fCAnZmllbGQnXG4gICAgICAgICAgICBpZiAoIWRpc3BsYXkpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAnZmllbGQnXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dGhpcy52YWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgbGFiZWxEaXJlY3Rpb249e2xhYmVsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICA8Rm9vdGVyQnV0dG9uc1xuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1NwaW4+XG4gICAgKVxuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgVmFsaWRhdG9yVCwgVmFsaWRhdG9yQ2hpbGRULCBFeHRlbmRWYWxpZGF0b3IgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG5jbGFzcyBWYWxpZGF0aW9uIHtcbiAgdmFsaWRhdG9yczogVmFsaWRhdG9yVCA9IHtcbiAgICAvLyDlv4XloatcbiAgICByZXF1aXJlZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdKSA9PiBub3RFbXB0eVZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XloasnLFxuICAgIH0sXG4gICAgbWluX2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lsI/kuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lpKfkuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbGVuZ3RoOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogbnVtYmVyKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgLy8g5omL5py6XG4gICAgbW9iaWxlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjFcXGR7MTB9Ly50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnLFxuICAgIH0sXG4gICAgLy8g5pWw5a2XXG4gICAgbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiAvXFxkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75L2N5pWw5a2X5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaVtOaVsFxuICAgIGludDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gIS9cXEQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmlbTmlbAnLFxuICAgIH0sXG4gICAgLy8g5q2j5pWwXG4gICAgcG9zaXRpdmVfbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IDAsXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S4uuato+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3kuLrotJ/mlbBcbiAgICBub3RfbmVnYXRpdmU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IDAsXG4gICAgICBlcnJvck1zZzogJ+S4jeiDveS4uui0n+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3lsI/kuo5cbiAgICBtaW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqO5oiW562J5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5aSn5LqOXG4gICAgbW9yZV90aGFuOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5LiN6IO95aSn5LqOXG4gICAgbWF4OiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA8PSBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWwj+S6jlxuICAgIGxlc3NfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIHByaWNlXG4gICAgcHJpY2U6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCEvXFxkLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWU6IHN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBwOiBzdHJpbmdbXSA9IHN0cmluZ1ZhbHVlLnNwbGl0KCcuJylcbiAgICAgICAgICBpZiAocC5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAocFsxXS5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG76KaB56ym5ZCI6LSn5biB5qC85byPLOWmgiAxMC4yMycsXG4gICAgfSxcblxuICAgIHByaWNlX2Zvcm1hdDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBhbnkgPSA4KSA9PiB7XG4gICAgICAgIGxldCBzdHJpbmdWYWx1ZSA9ICcnXG4gICAgICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkgc3RyaW5nVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oXFxcXCt8XFxcXC0pP1swLTldezEsJHtsZW5ndGh9fShcXFxcLlswLTldezEsMn0pPyRgKVxuICAgICAgICByZXR1cm4gcmVnLnRlc3Qoc3RyaW5nVmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6IChsZW5ndGg6IGFueSA9IDYpID0+IGDmnIDlpKcke2xlbmd0aH3kvY3mlbTmlbDvvIzlsI/mlbDkuI3otoXov4cy5L2NYCxcbiAgICB9LFxuXG4gICAgLyog5pW05pWw6YOo5YiG5pyA5aSn5YC8ICovXG4gICAgcG9zaXRpdmVfbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodmFsdWUpICE9PSB2YWx1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpXG4gICAgICAgICAgICBpZiAocFswXS5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg5pW05pWw6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuXG4gICAgdGVsZXBob25lOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfpnIDnrKblkIjvvIjljLrlj7ct55S16K+d5Y+356CB77yJ55qE5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueuseWQjue8gFxuICAgIGVtYWlsX3N1ZmZpeDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2VcbiAgICAgICAgY29uc3QgcmVnID0gL15AKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566x5ZCO57yAKOWMheaLrEApJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueusVxuICAgIGVtYWlsOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZyA9IC9bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKyg/Oi5bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrueahOmCrueusScsXG4gICAgfSxcbiAgICAvLyDnlKjmiLflkI1cbiAgICB1c2VybmFtZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oW2EtekEtWjAtOV8tXXs1LDIwfSkkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Ne+9njIw5L2N55qE5pWw5a2X44CB5a2X5q+N57uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOWvhueggVxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZC4qKSg/PS4qXFxXLiopW2EtekEtWjAtOVxcU11bXlxcdTRlMDAtXFx1OWZhNV17NiwyMH0kLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Nu+9njE25L2N55qE5pWw5a2X44CB5aSn5bCP5a2X5q+N5Lul5Y+K56ym5Y+357uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOi6q+S7veivgVxuICAgIGlkX2NhcmQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC8oXlxcZHsxNX0kKXwoXlxcZHsxOH0kKXwoXlxcZHsxN30oXFxkfFh8eCkkKS8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+i6q+S7veivgeWPt+eggeS4jeespuWQiCcsXG4gICAgfSxcbiAgfVxuXG4gIGV4dGVuZFZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8RXh0ZW5kVmFsaWRhdG9yPik6IHZvaWQge1xuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBFeHRlbmRWYWxpZGF0b3IpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgLi4ucmVzdCB9ID0gdmFsaWRhdG9yXG4gICAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSByZXN0XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrKHY6IHN0cmluZyB8IG51bWJlciwgcnVsZXM6IHN0cmluZ1tdKSB7XG4gICAgbGV0IHZhbHVlID0gdlxuICAgIGxldCBzdWNjZXNzID0geyB2YWxpZGF0ZWQ6IHRydWUsIG1zZzogJycgfVxuXG4gICAgaWYgKCFydWxlcyB8fCAhKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm4gc3VjY2Vzc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKVxuICAgIH1cblxuICAgIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICAgICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yQ2hpbGRUXG4gICAgICBsZXQgc1J1bGU6IGFueVtdID0gW11cblxuICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgIHJlc3VsdCA9IHZhbGlkYXRvci52YWxpZGF0b3IodmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGlmIChydWxlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgICBzUnVsZSA9IHJ1bGUuc3BsaXQoJzonKVxuICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tzUnVsZVswXV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlLCBzUnVsZVsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbcnVsZV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IHZhbGlkYXRvcj8uZXJyb3JNc2dcbiAgICAgICAgc3VjY2VzcyA9IHtcbiAgICAgICAgICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1zZzogdHlwZW9mIGVyciA9PT0gJ2Z1bmN0aW9uJyA/IGVycihzUnVsZVsxXSkgOiBlcnIsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHN1Y2Nlc3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvbigpXG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiAoXG4gIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG4pXG5cbmV4cG9ydCBjb25zdCBzaW1wbGVDbG9uZSA9IDxUPihkYXRhOiBUKTogVCA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG5leHBvcnQgY29uc3QgYWRkTGFiZWxTdHlsZVdpZHRoID0gKHdpZHRoOiBudW1iZXIsIGxhYmVsRGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSAnZm9ybS1sYWJlbC13aWR0aCdcbiAgY29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlTmFtZSlcbiAgaWYgKERPTSkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChET00pXG5cbiAgaWYgKGxhYmVsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBjb25zdCBTVFlMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWVcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBgLmFudC1mb3JtLWl0ZW0tbGFiZWwgeyB3aWR0aDogJHt3aWR0aH1weDsgfWBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNUWUxFKVxuICB9XG59XG5cblxuLyoqXG4gKiDmoLnmja52YWx1ZeaVsOe7hOiOt+WPluaVsOe7hOWvueixoVt7bGFiZWwsIHZhbHVlfV3nmoTlpJrkuKpsYWJlbOWAvFxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUxhYmVsc0J5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogQXJyYXk8YW55Pixcbik6IHN0cmluZyB8IEVsZW1lbnQgPT4ge1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW11cbiAgdmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGNvbnN0IGZpbmRJdGVtID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbClcbiAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgIGxhYmVscy5wdXNoKGZpbmRJdGVtLmxhYmVsKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGxhYmVscy5qb2luKCfvvIwnKVxufVxuXG4vKipcbiAqIOagueaNrnZhbHVl6I635Y+W5pWw57uE5a+56LGhW3tsYWJlbCwgdmFsdWV9XeeahGxhYmVs5YC8XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1MYWJlbEJ5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgZm91bmQgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSlcbiAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZm91bmRbMF0ubGFiZWxcbiAgfVxuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBnZXQgVGFyZ2V0IHZhbHVlXG4gKiBAcGFyYW0gZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGFyZ2V0VmFsdWUgPSAoZTogYW55KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgbGV0IHZhbHVlXG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGVcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWVtb2l6ZS1vbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=