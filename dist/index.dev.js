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

/***/ "./Form/ButtonGroup.tsx":
/*!******************************!*\
  !*** ./Form/ButtonGroup.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const antd_1 = __webpack_require__(/*! antd */ "antd");
const buttonTypes = ['default', 'primary', 'danger', 'link', 'ghost'];
exports.default = (props) => (props.fields.map((button, idx) => {
    const { key, label = '', className = 'default', cb, display = true, addon, } = button;
    let type = 'default';
    const index = buttonTypes.findIndex(item => item === className);
    if (index !== -1) {
        type = buttonTypes[index];
    }
    return display
        ? (React.createElement("span", { key: key },
            idx > 0 && React.createElement("span", { className: "react-conf-form-button-space-between", style: { width: props.gutter } }),
            React.createElement(antd_1.Button, { type: type, className: className, onClick: () => props.onButtonClick(key, cb) }, label),
            addon && addon(props.data)))
        : null;
}));


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
    const _a = props.props, { onClick, className = 'default' } = _a, rest = __rest(_a, ["onClick", "className"]);
    let type = 'default';
    const index = buttonTypes.findIndex(item => item === className);
    if (index !== -1) {
        type = buttonTypes[index];
    }
    return (React.createElement(antd_1.Button, Object.assign({ type: type, className: className, onClick: () => onClick(data) }, rest), label));
};


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
            var _a;
            const target = e && e.target;
            let value;
            if (target instanceof HTMLElement || common_1.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
                value = target.value;
            }
            else {
                value = e;
            }
            const { beforeChange, onChange, name } = this.props;
            if (beforeChange) {
                value = beforeChange(name, value);
            }
            onChange(name, value);
        };
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const _a = this.props.props, { rules } = _a, rest = __rest(_a, ["rules"]);
        return (React.createElement(antd_1.Input, Object.assign({ placeholder: "\u8BF7\u8F93\u5165" }, rest, { onChange: this.onChange, autoComplete: "off" })));
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
    const { render, data } = props;
    return render(data);
};
exports.default = Render;


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
const map = {
    render: Render_1.default,
    input: Input_1.default,
    button: Button_1.default,
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
const config_1 = __webpack_require__(/*! @Form/config */ "./Form/config.ts");
const ButtonGroup_1 = __webpack_require__(/*! ./ButtonGroup */ "./Form/ButtonGroup.tsx");
const Field_1 = __webpack_require__(/*! ./Field */ "./Form/Field/index.tsx");
exports.default = (props) => {
    const { onButtonClick, gutter = config_1.DEFAULT_GUTTER, type, align = 'left', style = {}, className = '', fields, data, onChange, validation, labelDirection, } = props;
    return (React.createElement(antd_1.Row, { gutter: gutter },
        React.createElement("div", { className: `${className} ${labelDirection}` },
            type === 'FormButtons' && (React.createElement("div", { className: "react-conf-form-button-row-wrapper", style: Object.assign({ textAlign: align }, style) },
                React.createElement(ButtonGroup_1.default, { fields: fields, gutter: gutter, data: data, onButtonClick: onButtonClick }))),
            type !== 'FormButtons' && fields.map((field) => {
                var _a, _b;
                const { key, span = config_1.DEFAULT_SPAN, label, addon, display = true, } = field;
                return display
                    ? (React.createElement(antd_1.Col, { key: field.key, span: span },
                        React.createElement(antd_1.Form.Item, { label: ['button', 'render'].indexOf(field.type) === -1 ? label : undefined, required: ((_a = field.props) === null || _a === void 0 ? void 0 : _a.rules) && ((_b = field.props) === null || _b === void 0 ? void 0 : _b.rules.indexOf('required')) !== -1, validateStatus: (validation[key] && !validation[key].validated)
                                ? 'error'
                                : '', help: (validation[key] && !validation[key].validated)
                                ? validation[key].msg
                                : '' },
                            React.createElement(Field_1.default, Object.assign({}, field, { name: key, data: data, value: data[key], onChange: onChange })),
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
            this.data[key] = value;
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
        this.convertDataFromFields(fields, dataSource); // 从fields配置里取得数据结构
        common_1.addLabelStyleWidth(labelWidth, labelDirection);
        return (React.createElement(antd_1.Spin, { spinning: this.props.spinning },
            React.createElement("form", { onSubmit: this.onSubmit }, fields.map((field, idx) => {
                const key = `row_${idx}`;
                return (React.createElement(Row_1.default, Object.assign({ key: key }, field, { onButtonClick: this.onButtonClick, data: this.data, validation: this.validation, labelDirection: labelDirection, onChange: this.onChange })));
            }))));
    }
}
exports.default = RJForm;
RJForm.defaultProps = {
    spinning: false,
    validateOnChange: true,
    // theme: '',
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
                validator: (value) => /^([a-zA-Z0-9_-]{2,20})$/.test(value),
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
            vin: {
                validator: (value) => /^([a-zA-Z0-9_-]{17})$/.test(value),
                errorMsg: '由长度为17位的数字、字母组成',
            },
            engine_no: {
                validator: (value) => /^([a-zA-Z0-9_-]{6,20})$/.test(value),
                errorMsg: '由长度为6~20位的数字、字母组成',
            },
            license_plate_number: {
                validator: (value) => /^([\u4E00-\u9FA5][a-zA-Z0-9_-]{6,7})$/.test(value),
                errorMsg: '由长度为7~8位的中文、数字、字母组成',
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9CdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9GaWVsZC9CdXR0b24udHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvSW5wdXQudHN4Iiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vRmllbGQvUmVuZGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL0ZpZWxkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vLi9Gb3JtL1Jvdy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9pbmRleC5zY3NzPzEwZWUiLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtanNvbi1mb3JtLy4vRm9ybS91dGlscy9Gb3JtVmFsaWRhdG9yLnRzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS8uL0Zvcm0vdXRpbHMvY29tbW9uLnRzIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9yZWFjdC1qc29uLWZvcm0vZXh0ZXJuYWwgXCJtZW1vaXplLW9uZVwiIiwid2VicGFjazovL3JlYWN0LWpzb24tZm9ybS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSx3REFBOEI7QUFDOUIsdURBQTZCO0FBVTdCLE1BQU0sV0FBVyxHQUFzQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFFeEYsa0JBQWUsQ0FBQyxLQUFZLEVBQU8sRUFBRSxDQUFDLENBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZSxFQUFFLEdBQVcsRUFBRSxFQUFFO0lBQ2hELE1BQU0sRUFDSixHQUFHLEVBQ0gsS0FBSyxHQUFHLEVBQUUsRUFDVixTQUFTLEdBQUcsU0FBUyxFQUNyQixFQUFFLEVBQ0YsT0FBTyxHQUFHLElBQUksRUFDZCxLQUFLLEdBQ04sR0FBRyxNQUFNO0lBRVYsSUFBSSxJQUFJLEdBQWUsU0FBUztJQUNoQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUMvRCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNoQixJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztLQUMxQjtJQUVELE9BQU8sT0FBTztRQUNaLENBQUMsQ0FBQyxDQUNBLDhCQUFNLEdBQUcsRUFBRSxHQUFHO1lBQ1gsR0FBRyxHQUFHLENBQUMsSUFBSSw4QkFBTSxTQUFTLEVBQUMsc0NBQXNDLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBSTtZQUNyRyxvQkFBQyxhQUFNLElBQ0wsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNwQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBRTFDLEtBQUssQ0FDQztZQUVSLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUN0QixDQUNSO1FBQ0QsQ0FBQyxDQUFDLElBQUk7QUFDVixDQUFDLENBQUMsQ0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0Qsd0RBQThCO0FBQzlCLHVEQUE2QjtBQWU3QixNQUFNLFdBQVcsR0FBc0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO0FBRXhGLGtCQUFlLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDOUIsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLO0lBQzdCLE1BQU0sZ0JBQXlELEVBQXpELEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxTQUFTLE9BQXlCLEVBQXZCLDJDQUF1QjtJQUMvRCxJQUFJLElBQUksR0FBZSxTQUFTO0lBQ2hDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQy9ELElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2hCLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO0tBQzFCO0lBRUQsT0FBTyxDQUNMLG9CQUFDLGFBQU0sa0JBQ0wsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNwQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUN4QixJQUFJLEdBRVAsS0FBSyxDQUNDLENBQ1Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCx3REFBOEI7QUFDOUIsdURBQTRCO0FBQzVCLHlGQUFrRDtBQVVsRCxlQUFxQixTQUFRLEtBQUssQ0FBQyxhQUFvQjtJQUF2RDs7UUFLRSxhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7WUFDcEIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO1lBQzVCLElBQUksS0FBSztZQUNULElBQUksTUFBTSxZQUFZLFdBQVcsSUFBSSxzQkFBYSxPQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pFLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSzthQUNyQjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcsQ0FBQzthQUNWO1lBQ0QsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDbkQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUNsQztZQUVELFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7SUFhSCxDQUFDO0lBL0JDLGlCQUFpQjtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBa0JELE1BQU07UUFDSixNQUFNLHFCQUFxQyxFQUFyQyxFQUFFLEtBQUssT0FBOEIsRUFBNUIsNEJBQTRCO1FBQzNDLE9BQU8sQ0FDTCxvQkFBQyxZQUFLLGtCQUNKLFdBQVcsRUFBQyxvQkFBSyxJQUNiLElBQUksSUFDUixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdkIsWUFBWSxFQUFDLEtBQUssSUFDbEIsQ0FDSDtJQUNILENBQUM7Q0FDRjtBQWhDRCw0QkFnQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRCxNQUFNLE1BQU0sR0FBb0IsS0FBSyxDQUFDLEVBQUU7SUFDdEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLO0lBQzlCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixDQUFDO0FBRUQsa0JBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickIsd0RBQThCO0FBRTlCLGdGQUE2QjtBQUM3Qiw2RUFBMkI7QUFDM0IsZ0ZBQTZCO0FBRTdCLE1BQU0sR0FBRyxHQUFHO0lBQ1YsTUFBTSxFQUFFLGdCQUFNO0lBQ2QsS0FBSyxFQUFFLGVBQUs7SUFDWixNQUFNLEVBQUUsZ0JBQU07Q0FDZjtBQUVELHVCQUF1QjtBQUNWLGlCQUFTLEdBQUcsQ0FBQyxZQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUM3RCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFO0lBQ2hELE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsV0FBVztJQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUztBQUN2QixDQUFDLENBQUMsQ0FDSDtBQUVELGVBQWU7QUFDZixNQUFNLFlBQVksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUk7QUFLeEQsa0JBQWUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtJQUM5QixNQUFNLEVBQUUsSUFBSSxLQUFjLEtBQUssRUFBakIsOEJBQWlCO0lBQy9CLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDcEMsT0FBTyxTQUFTO1FBQ2QsQ0FBQyxDQUFDLG9CQUFDLFNBQVMsb0JBQUssSUFBSSxFQUFJO1FBQ3pCLENBQUMsQ0FBQyxJQUFJO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENELHdEQUE4QjtBQUM5Qix1REFBcUM7QUFDckMsNkVBQTJEO0FBQzNELHlGQUF1QztBQUV2Qyw2RUFBMkI7QUFVM0Isa0JBQWUsQ0FBQyxLQUFZLEVBQU8sRUFBRTtJQUNuQyxNQUFNLEVBQ0osYUFBYSxFQUNiLE1BQU0sR0FBRyx1QkFBYyxFQUN2QixJQUFJLEVBQ0osS0FBSyxHQUFHLE1BQU0sRUFDZCxLQUFLLEdBQUcsRUFBRSxFQUNWLFNBQVMsR0FBRyxFQUFFLEVBQ2QsTUFBTSxFQUNOLElBQUksRUFDSixRQUFRLEVBQ1IsVUFBVSxFQUNWLGNBQWMsR0FDZixHQUFHLEtBQUs7SUFFVCxPQUFPLENBQ0wsb0JBQUMsVUFBRyxJQUFDLE1BQU0sRUFBRSxNQUFNO1FBQ2pCLDZCQUFLLFNBQVMsRUFBRSxHQUFHLFNBQVMsSUFBSSxjQUFjLEVBQUU7WUFFN0MsSUFBSSxLQUFLLGFBQWEsSUFBSSxDQUN6Qiw2QkFDRSxTQUFTLEVBQUMsb0NBQW9DLEVBQzlDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFFakQsb0JBQUMscUJBQVcsSUFDVixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixhQUFhLEVBQUUsYUFBYSxHQUM1QixDQUNFLENBQ1A7WUFHQSxJQUFJLEtBQUssYUFBYSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7O2dCQUMxRCxNQUFNLEVBQ0osR0FBRyxFQUNILElBQUksR0FBRyxxQkFBWSxFQUNuQixLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sR0FBRyxJQUFJLEdBQ2YsR0FBRyxLQUFLO2dCQUVULE9BQU8sT0FBTztvQkFDWixDQUFDLENBQUMsQ0FDQSxvQkFBQyxVQUFHLElBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7d0JBQzdCLG9CQUFDLFdBQUksQ0FBQyxJQUFJLElBQ1IsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUMxRSxRQUFRLEVBQUUsWUFBSyxDQUFDLEtBQUssMENBQUUsS0FBSyxLQUFJLFlBQUssQ0FBQyxLQUFLLDBDQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFNLENBQUMsQ0FBQyxFQUM3RSxjQUFjLEVBQ1osQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO2dDQUM3QyxDQUFDLENBQUMsT0FBTztnQ0FDVCxDQUFDLENBQUMsRUFBRSxFQUVSLElBQUksRUFDRixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0NBQzdDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRztnQ0FDckIsQ0FBQyxDQUFDLEVBQUU7NEJBR1Isb0JBQUMsZUFBSyxvQkFDQSxLQUFLLElBQ1QsSUFBSSxFQUFFLEdBQUcsRUFDVCxJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ2hCLFFBQVEsRUFBRSxRQUFRLElBQ2xCOzRCQUNELEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ1gsQ0FDUixDQUNQO29CQUNELENBQUMsQ0FBQyxJQUFJO1lBQ1YsQ0FBQyxDQUFDLENBQ0UsQ0FDRixDQUNQO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZELGtCQUFlLEVBQUU7QUFFSixvQkFBWSxHQUFHLENBQUM7QUFDaEIsc0JBQWMsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7QUNIaEMsdUM7Ozs7Ozs7Ozs7Ozs7O0FDQUEsd0RBQThCO0FBQzlCLDRFQUFpQztBQUNqQyx1REFBMkI7QUFDM0IsaUZBQXVDO0FBQ3ZDLDBHQUFpRDtBQUNqRCxpRUFBdUI7QUFFdkIseUZBQXVEO0FBRXZELDZEQUFxQjtBQUlyQixNQUFxQixNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQTZCO0lBNkRyRSxZQUFZLEtBQUs7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFDO1FBakRkLFlBQU8sR0FBRyxLQUFLO1FBRWYsU0FBSSxHQUFHLEVBQUUsRUFBQyxTQUFTO1FBRW5CLGdCQUFXLEdBQUcsS0FBSztRQUVuQixlQUFVLEdBQUcsRUFBRSxFQUFDLE9BQU87UUFFdkI7O1dBRUc7UUFDSCx3QkFBbUIsR0FBRyxxQkFBTyxDQUFDLENBQUMsVUFBYyxFQUFFLEVBQUU7WUFDL0MseUJBQXlCO1lBQ3pCLDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxJQUFJLEtBQThCO1lBRXpELE9BQU8sSUFBSSxDQUFDLFdBQVc7UUFDekIsQ0FBQyxDQUFDO1FBRUY7OztXQUdHO1FBQ0gsMEJBQXFCLEdBQUcscUJBQU8sQ0FBQyxDQUFDLE1BQWtCLEVBQUUsVUFBYyxFQUFFLEVBQUU7WUFDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUMxQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFOzt3QkFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs0QkFDOUUscUNBQXFDOzRCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztnQ0FDcEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dDQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzRCQUV2QixzQ0FBc0M7NEJBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFJLENBQUMsS0FBSywwQ0FBRSxLQUFLLEtBQUksRUFBRSxDQUFDOzRCQUN2RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQ3BCLElBQUksS0FDUCxLQUFLLEVBQUUsV0FBSSxDQUFDLEtBQUssMENBQUUsS0FBSyxLQUFJLEVBQUUsR0FDL0I7eUJBQ0Y7b0JBQ0gsQ0FBQyxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQzFCLENBQUMsQ0FBQztRQWtCRjs7OztXQUlHO1FBQ0gsYUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVUsRUFBUSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSztZQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUNBQ2YsdUJBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQ3pELEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FDbEM7YUFDRjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRDs7V0FFRztRQUNILGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxJQUFJLFNBQVMsR0FBRyxJQUFJO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOzRCQUM5RSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTs0QkFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7NEJBQzVCLE1BQU0sTUFBTSxHQUFHLHVCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFFckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUNBQ2YsTUFBTSxLQUNULEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FDbEM7NEJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO2dDQUNuQyxTQUFTLEdBQUcsS0FBSzs2QkFDbEI7eUJBQ0Y7b0JBQ0gsQ0FBQyxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDakIsT0FBTyxTQUFTO1FBQ2xCLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxhQUFRLEdBQUcsQ0FBQyxDQUFxQyxFQUFRLEVBQUU7WUFDekQsSUFBSSxDQUFDO2dCQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTTtZQUU1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pELENBQUM7UUFFRDs7V0FFRztRQUNILFlBQU8sR0FBRyxHQUFTLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDOUMsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxrQkFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQWEsRUFBUSxFQUFFO1lBQ3BELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRTthQUNoQjtpQkFBTSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDZjtpQkFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDYixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkO1FBQ0gsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsa0JBQWEsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsUUFBdUIsRUFBRSxFQUFFLEVBQUU7WUFDckUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM3RCxPQUFPLHVCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7YUFDekM7WUFDRCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQ3JDLENBQUM7UUF0R0MsZ0RBQWdEO1FBQ2hELGlCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUNuQix3Q0FBd0M7UUFDeEMsdUJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQzdELENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO0lBQ3RCLENBQUM7SUE0RkQsTUFBTTtRQUNKLE1BQU0sRUFDSixNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxVQUFVLEdBQy9DLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUMsbUJBQW1CO1FBQ2xFLDJCQUFrQixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUM7UUFDOUMsT0FBTyxDQUNMLG9CQUFDLFdBQUksSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ2pDLDhCQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBa0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtnQkFDOUMsTUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FDTCxvQkFBQyxhQUFHLGtCQUNGLEdBQUcsRUFBRSxHQUFHLElBQ0osS0FBSyxJQUNULGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDM0IsY0FBYyxFQUFFLGNBQWMsRUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQ3ZCLENBQ0g7WUFDSCxDQUFDLENBQUMsQ0FDRyxDQUNGLENBQ1I7SUFDSCxDQUFDOztBQWxNSCx5QkFtTUM7QUFsTVEsbUJBQVksR0FBRztJQUNwQixRQUFRLEVBQUUsS0FBSztJQUNmLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsYUFBYTtJQUNiLFVBQVUsRUFBRSxFQUFFO0lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixZQUFZLEVBQUUsRUFBRTtJQUNoQixNQUFNLEVBQUUsRUFBRTtJQUNWLGNBQWMsRUFBRSxZQUFZO0lBQzVCLFVBQVUsRUFBRSxHQUFHO0NBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCSCxRQUFRO0FBQ1IsK0VBQXdDO0FBR3hDLE1BQU0sVUFBVTtJQUFoQjtRQUNFLGVBQVUsR0FBZTtZQUN2QixLQUFLO1lBQ0wsUUFBUSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLHNCQUFhLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUM5RSxRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxDQUFDLEtBQXFCLEVBQUUsTUFBYyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNO2dCQUNyRixRQUFRLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLFFBQVEsTUFBTSxFQUFFO2FBQy9DO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxDQUFDLEtBQXFCLEVBQUUsTUFBYyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNO2dCQUNyRixRQUFRLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLFFBQVEsTUFBTSxFQUFFO2FBQy9DO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxDQUFDLEtBQXFCLEVBQUUsTUFBYyxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNO2dCQUN0RixRQUFRLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLFFBQVEsTUFBTSxFQUFFO2FBQy9DO1lBQ0QsS0FBSztZQUNMLE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNwRCxRQUFRLEVBQUUsYUFBYTthQUN4QjtZQUNELEtBQUs7WUFDTCxNQUFNLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDM0MsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxPQUFPO1lBQ1AsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUMsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxLQUFLO1lBQ0wsZUFBZSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2hELFFBQVEsRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsT0FBTztZQUNQLFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsT0FBTzthQUNsQjtZQUNELE1BQU07WUFDTixHQUFHLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRO2dCQUMxRSxRQUFRLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxVQUFVLFFBQVEsRUFBRTthQUNyRDtZQUNELEtBQUs7WUFDTCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRO2dCQUN6RSxRQUFRLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLFFBQVEsRUFBRTthQUNsRDtZQUNELE9BQU87WUFDUCxHQUFHLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRO2dCQUMxRSxRQUFRLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxVQUFVLFFBQVEsRUFBRTthQUNyRDtZQUNELEtBQUs7WUFDTCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRO2dCQUN6RSxRQUFRLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLFFBQVEsRUFBRTthQUNsRDtZQUNELFFBQVE7WUFDUixLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFBRSxPQUFPLEtBQUs7b0JBRW5DLE1BQU0sV0FBVyxHQUFXLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQzVDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDbkMsTUFBTSxDQUFDLEdBQWEsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7d0JBQzFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLE9BQU8sS0FBSzt3QkFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsT0FBTyxLQUFLO3FCQUNsQztvQkFDRCxPQUFPLElBQUk7Z0JBQ2IsQ0FBQztnQkFDRCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUQsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtZQUNELFNBQVM7WUFDVCxZQUFZLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU8sS0FBSztvQkFDeEIsTUFBTSxHQUFHLEdBQUcseUVBQXlFO29CQUNyRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7WUFDRCxPQUFPO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO29CQUMzQixNQUFNLEdBQUcsR0FBRyxzSUFBc0k7b0JBQ2xKLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLFVBQVU7YUFDckI7WUFDRCxNQUFNO1lBQ04sUUFBUSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbkUsUUFBUSxFQUFFLG1CQUFtQjthQUM5QjtZQUNELEtBQUs7WUFDTCxRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxpRkFBaUYsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMzSCxRQUFRLEVBQUUseUJBQXlCO2FBQ3BDO1lBQ0QsTUFBTTtZQUNOLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BGLFFBQVEsRUFBRSxVQUFVO2FBQ3JCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDakUsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtZQUNELFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25FLFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7WUFDRCxvQkFBb0IsRUFBRTtnQkFDcEIsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNqRixRQUFRLEVBQUUscUJBQXFCO2FBQ2hDO1NBQ0Y7SUFxREgsQ0FBQztJQW5EQyxnQkFBZ0IsQ0FBQyxVQUFrQztRQUNqRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBMEIsRUFBUSxFQUFFO1lBQ3RELE1BQU0sRUFBRSxJQUFJLEtBQWMsU0FBUyxFQUFyQixrQ0FBcUI7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQzlCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBa0IsRUFBRSxLQUFlO1FBQ3ZDLElBQUksS0FBSyxHQUFHLENBQUM7UUFDYixJQUFJLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUUxQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxPQUFPO1NBQ2Y7UUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRTtTQUNyQjtRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7O1lBQ2hCLElBQUksTUFBTSxHQUFHLElBQUk7WUFDakIsSUFBSSxTQUEwQjtZQUM5QixJQUFJLEtBQUssR0FBVSxFQUFFO1lBRXJCLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDdkIsSUFBSSxzQkFBYSxDQUFDLEtBQUssQ0FBQztvQkFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDcEM7aUJBQU0sSUFBSSxzQkFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzVCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztxQkFBTTtvQkFDTCxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztpQkFDcEM7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxHQUFHLFNBQUcsU0FBUywwQ0FBRSxRQUFRO2dCQUMvQixPQUFPLEdBQUc7b0JBQ1IsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLEdBQUcsRUFBRSxPQUFPLEdBQUcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztpQkFDckQ7Z0JBQ0QsT0FBTyxJQUFJO2FBQ1o7WUFDRCxPQUFPLEtBQUs7UUFDZCxDQUFDLENBQUM7UUFDRixPQUFPLE9BQU87SUFDaEIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQzFML0Isa0JBQWUsRUFBRTtBQUVKLHFCQUFhLEdBQUcsQ0FBQyxLQUFVLEVBQVcsRUFBRSxDQUFDLENBQ3BELEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUN0RDtBQUVZLG1CQUFXLEdBQUcsQ0FBSSxJQUFPLEVBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqRSwwQkFBa0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxjQUF5QyxFQUFFLEVBQUU7SUFDN0YsTUFBTSxhQUFhLEdBQUcsa0JBQWtCO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQ2xELElBQUksR0FBRztRQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUV2QyxJQUFJLGNBQWMsS0FBSyxZQUFZLEVBQUU7UUFDbkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsR0FBRyxhQUFhO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUNBQWlDLEtBQUssT0FBTztRQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7S0FDakM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQkQsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9Gb3JtL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEJ1dHRvblQsIEJ1dHRvblR5cGUsIEZpZWxkSXRlbVQgfSBmcm9tICcuL2luZGV4LmQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkczogQXJyYXk8RmllbGRJdGVtVCB8IEJ1dHRvblQ+XG4gIGd1dHRlcjogbnVtYmVyXG4gIG9uQnV0dG9uQ2xpY2s6IChrZXk6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxuICBkYXRhOiBPYmplY3Rcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKTogYW55ID0+IChcbiAgcHJvcHMuZmllbGRzLm1hcCgoYnV0dG9uOiBCdXR0b25ULCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGtleSxcbiAgICAgIGxhYmVsID0gJycsXG4gICAgICBjbGFzc05hbWUgPSAnZGVmYXVsdCcsXG4gICAgICBjYixcbiAgICAgIGRpc3BsYXkgPSB0cnVlLFxuICAgICAgYWRkb24sXG4gICAgfSA9IGJ1dHRvblxuXG4gICAgbGV0IHR5cGU6IEJ1dHRvblR5cGUgPSAnZGVmYXVsdCdcbiAgICBjb25zdCBpbmRleCA9IGJ1dHRvblR5cGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGNsYXNzTmFtZSlcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0eXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BsYXlcbiAgICAgID8gKFxuICAgICAgICA8c3BhbiBrZXk9e2tleX0+XG4gICAgICAgICAge2lkeCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLWJ1dHRvbi1zcGFjZS1iZXR3ZWVuXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLmd1dHRlciB9fSAvPn1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJ1dHRvbkNsaWNrKGtleSwgY2IpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIHthZGRvbiAmJiBhZGRvbihwcm9wcy5kYXRhKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgICAgOiBudWxsXG4gIH0pXG4pXG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEJ1dHRvblR5cGUgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGRhdGE6IGFueSxcbiAgYmVmb3JlQ2hhbmdlPzogKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBhbnlcbiAgb25DaGFuZ2U6IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gYW55XG4gIHByb3BzOiB7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgJiBCdXR0b25UeXBlLFxuICAgIG9uQ2xpY2s6IChkYXRhOiBPYmplY3QpID0+IGFueVxuICB9XG4gIFtuYW1lOiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHsgb25DbGljaywgY2xhc3NOYW1lID0gJ2RlZmF1bHQnLCAuLi5yZXN0IH0gPSBwcm9wcy5wcm9wc1xuICBsZXQgdHlwZTogQnV0dG9uVHlwZSA9ICdkZWZhdWx0J1xuICBjb25zdCBpbmRleCA9IGJ1dHRvblR5cGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGNsYXNzTmFtZSlcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHR5cGUgPSBidXR0b25UeXBlc1tpbmRleF1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhkYXRhKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuXG50eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGJlZm9yZUNoYW5nZT86IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gYW55XG4gIG9uQ2hhbmdlOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IGFueVxuICBwcm9wczogYW55XG4gIFtuYW1lOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlICYmIGUudGFyZ2V0XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vdEVtcHR5VmFsdWUodGFyZ2V0Py52YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZVxuICAgIH1cbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UsIG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgeyBydWxlcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWVsZEl0ZW1UIH0gZnJvbSAnLi4vaW5kZXguZCdcblxudHlwZSBQcm9wcyA9IEZpZWxkSXRlbVQgJiB7XG4gIGRhdGE6IE9iamVjdFxuICByZW5kZXI6IChkYXRhOk9iamVjdCkgPT4gYW55XG59XG5cbmNvbnN0IFJlbmRlcjogUmVhY3QuRkM8UHJvcHM+ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJlbmRlciwgZGF0YSB9ID0gcHJvcHNcbiAgcmV0dXJuIHJlbmRlcihkYXRhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmllbGRJdGVtVCwgRXh0ZW5kRmllbGQgfSBmcm9tICcuLi9pbmRleC5kJ1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlcidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuY29uc3QgbWFwID0ge1xuICByZW5kZXI6IFJlbmRlcixcbiAgaW5wdXQ6IElucHV0LFxuICBidXR0b246IEJ1dHRvbixcbn1cblxuLyogQWRkIGV4dHJhY3QgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBhZGRGaWVsZHMgPSAoZXh0ZW5kRmllbGRzOiBBcnJheTxFeHRlbmRGaWVsZD4pID0+IChcbiAgZXh0ZW5kRmllbGRzLmZvckVhY2goKGV4dGVuZEZpZWxkOiBFeHRlbmRGaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgY29tcG9uZW50IH0gPSBleHRlbmRGaWVsZFxuICAgIG1hcFtuYW1lXSA9IGNvbXBvbmVudFxuICB9KVxuKVxuXG4vKiBGaWVsZCBNYXAgKi9cbmNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcpID0+IG1hcFt0eXBlXSB8fCBudWxsXG5cbi8qIEZpZWxkIE1hcHBpbmcgKi9cbnR5cGUgUHJvcHMgPSB7IGRhdGE6IE9iamVjdCwgb25DaGFuZ2U6IGFueSwgbmFtZT86IHN0cmluZywgdmFsdWU6IGFueSB9ICYgRmllbGRJdGVtVFxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHR5cGUpXG4gIHJldHVybiBDb21wb25lbnRcbiAgICA/IDxDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgOiBudWxsXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29sLCBGb3JtIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IERFRkFVTFRfR1VUVEVSLCBERUZBVUxUX1NQQU4gfSBmcm9tICdARm9ybS9jb25maWcnXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi9CdXR0b25Hcm91cCdcbmltcG9ydCB7IEZpZWxkc0NvbmZULCBGaWVsZEl0ZW1UIH0gZnJvbSAnLi9pbmRleC5kJ1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnXG5cbnR5cGUgUHJvcHMgPSBGaWVsZHNDb25mVCAmIHtcbiAgb25CdXR0b25DbGljazogKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbikgPT4gdm9pZFxuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gYW55XG4gIGRhdGE6IE9iamVjdFxuICB2YWxpZGF0aW9uOiBPYmplY3RcbiAgbGFiZWxEaXJlY3Rpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcyk6IGFueSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbkJ1dHRvbkNsaWNrLFxuICAgIGd1dHRlciA9IERFRkFVTFRfR1VUVEVSLFxuICAgIHR5cGUsXG4gICAgYWxpZ24gPSAnbGVmdCcsXG4gICAgc3R5bGUgPSB7fSxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgICBmaWVsZHMsXG4gICAgZGF0YSxcbiAgICBvbkNoYW5nZSxcbiAgICB2YWxpZGF0aW9uLFxuICAgIGxhYmVsRGlyZWN0aW9uLFxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtsYWJlbERpcmVjdGlvbn1gfT5cbiAgICAgICAgey8qIOaMiemSrue7hOWQiCAqL31cbiAgICAgICAge3R5cGUgPT09ICdGb3JtQnV0dG9ucycgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1idXR0b24tcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oeyB0ZXh0QWxpZ246IGFsaWduIH0sIHN0eWxlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgIGd1dHRlcj17Z3V0dGVyfVxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7Lyog6Z2e5oyJ6ZKu5o6n5Lu257uE5ZCIICovfVxuICAgICAgICB7dHlwZSAhPT0gJ0Zvcm1CdXR0b25zJyAmJiBmaWVsZHMubWFwKChmaWVsZDogRmllbGRJdGVtVCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHNwYW4gPSBERUZBVUxUX1NQQU4sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGFkZG9uLFxuICAgICAgICAgICAgZGlzcGxheSA9IHRydWUsXG4gICAgICAgICAgfSA9IGZpZWxkXG5cbiAgICAgICAgICByZXR1cm4gZGlzcGxheVxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxDb2wga2V5PXtmaWVsZC5rZXl9IHNwYW49e3NwYW59PlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtbJ2J1dHRvbicsICdyZW5kZXInXS5pbmRleE9mKGZpZWxkLnR5cGUpID09PSAtMSA/IGxhYmVsIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZpZWxkLnByb3BzPy5ydWxlcyAmJiBmaWVsZC5wcm9wcz8ucnVsZXMuaW5kZXhPZigncmVxdWlyZWQnKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17XG4gICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uW2tleV0gJiYgIXZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZXJyb3InXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaGVscD17XG4gICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uW2tleV0gJiYgIXZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZGF0aW9uW2tleV0ubXNnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHthZGRvbiAmJiBhZGRvbihkYXRhKX1cbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvdz5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge31cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1BBTiA9IDhcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dVVFRFUiA9IDE2XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJ1xuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBhZGRGaWVsZHMgfSBmcm9tICdARm9ybS9GaWVsZCdcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vdXRpbHMvRm9ybVZhbGlkYXRvcidcbmltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnXG5pbXBvcnQgeyBSSkZvcm1Qcm9wcywgRmllbGRzQ29uZlQgfSBmcm9tICcuL2luZGV4LmQnXG5pbXBvcnQgeyBhZGRMYWJlbFN0eWxlV2lkdGggfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG50eXBlIFN0YXRlID0ge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUkpGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJKRm9ybVByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNwaW5uaW5nOiBmYWxzZSxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgIC8vIHRoZW1lOiAnJyxcbiAgICBkYXRhU291cmNlOiB7fSxcbiAgICBleHRlbmRWYWxpZGF0b3JzOiBbXSxcbiAgICBleHRlbmRGaWVsZHM6IFtdLFxuICAgIGZpZWxkczogW10sXG4gICAgbGFiZWxEaXJlY3Rpb246ICdob3Jpem9udGFsJywgLy8gJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJ1xuICAgIGxhYmVsV2lkdGg6IDEyMCxcbiAgfVxuXG4gIG1vdW50ZWQgPSBmYWxzZVxuXG4gIGRhdGEgPSB7fSAvLyBmb3Jt5pWw5o2uXG5cbiAgZGF0YUNoYW5nZWQgPSBmYWxzZVxuXG4gIHZhbGlkYXRpb24gPSB7fSAvLyDpqozor4Hnu5PmnpxcblxuICAvKipcbiAgICogZGV0ZWN0IGRhdGEgc291cmNlIHdoZXRoZXIgaXMgY2hhbmdlZFxuICAgKi9cbiAgaXNEYXRhU291cmNlQ2hhbmdlZCA9IG1lbW9pemUoKGRhdGFTb3VyY2U6IHt9KSA9PiB7XG4gICAgLy8gVVNFTEVTUyBcInx8IGNvbmRpdGlvblwiXG4gICAgLy8gYmVjYXVzZSBkYXRhU291cmNlIGlzIHRoZSBrZXkgb2YgbWV0aG9kIHJ1bm5pbmcgYW5kIG5lZWQgdG9cbiAgICAvLyB1c2UgaXQgdG8gYXZvaWQgdGhhdCBlc2xpbnQgcmVwb3J0IGFuIGVycm9yIFwiZGF0YVNvdXJjZSBpc1xuICAgIC8vIGRlZmluZWQgYnV0IG5ldmVyIHVzZWRcIlxuICAgIHRoaXMuZGF0YUNoYW5nZWQgPSB0cnVlIHx8IHR5cGVvZiBkYXRhU291cmNlID09PSAnb2JqZWN0J1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YUNoYW5nZWRcbiAgfSlcblxuICAvKipcbiAgICogZ2V0IGRhdGEgZnJvbSBkYXRhU291cmNlIG9yIGxvY2FsIGRhdGEsXG4gICAqIGFuZCBhbHNvIHNldCB1cCBcInZhbGlkYXRpb25cIlxuICAgKi9cbiAgY29udmVydERhdGFGcm9tRmllbGRzID0gbWVtb2l6ZSgoZmllbGRzOiBBcnJheTxhbnk+LCBkYXRhU291cmNlOiB7fSkgPT4ge1xuICAgIGZpZWxkcy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgaWYgKHJvdy50eXBlICE9PSAnRm9ybUJ1dHRvbnMnKSB7XG4gICAgICAgIHJvdy5maWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZGlzcGxheSAhPT0gZmFsc2UgJiYgaXRlbS50eXBlICE9PSAncmVuZGVyJyAmJiBpdGVtLnR5cGUgIT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mupAocHJvcHMp5Y+R55Sf5pS55Y+Y77yM5Y+W5pWw5o2u5rqQ77yM5ZCm5YiZ5Y+W5pys5ZywKHN0YXRlKVxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW0ua2V5XSA9IHRoaXMuZGF0YUNoYW5nZWRcbiAgICAgICAgICAgICAgPyBkYXRhU291cmNlW2l0ZW0ua2V5XVxuICAgICAgICAgICAgICA6IHRoaXMuZGF0YVtpdGVtLmtleV1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5pWw5o2u5rqQKHByb3BzKeWPkeeUn+aUueWPmO+8miDlpoLmnpzmnInlgLzvvIzph43mlrDmoKHpqozvvJvmsqHmnInlgLzvvIzkuI3moKHpqoxcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSB0aGlzLnZhbGlkYXRlRmllbGQoaXRlbS5rZXksIHRoaXMuZGF0YVtpdGVtLmtleV0sIGl0ZW0ucHJvcHM/LnJ1bGVzIHx8IFtdKVxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uW2l0ZW0ua2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4uaW5pdCxcbiAgICAgICAgICAgICAgcnVsZXM6IGl0ZW0ucHJvcHM/LnJ1bGVzIHx8IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZGF0YUNoYW5nZWQgPSBmYWxzZVxuICB9KVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgLy8gYWRkIGV4dGVuZEZpZWxkcyBpbnRvIGZvcm0gZ2VuZXJhdGluZy9tYXBwaW5nXG4gICAgYWRkRmllbGRzKHRoaXMucHJvcHMuZXh0ZW5kRmllbGRzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZVxuICAgIC8vIGV4dGVuZCB2YWxpZGF0b3JzIGludG8gRm9ybSBWYWxpZGF0b3JcbiAgICBGb3JtVmFsaWRhdG9yLmV4dGVuZFZhbGlkYXRvcnModGhpcy5wcm9wcy5leHRlbmRWYWxpZGF0b3JzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBmaWVsZCBjaGFuZ2VcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCA9PiB7XG4gICAgdGhpcy5kYXRhW2tleV0gPSB2YWx1ZVxuICAgIGlmICh0aGlzLnByb3BzLnZhbGlkYXRlT25DaGFuZ2UgJiYgdGhpcy52YWxpZGF0aW9uW2tleV0pIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbltrZXldID0ge1xuICAgICAgICAuLi5Gb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCB0aGlzLnZhbGlkYXRpb25ba2V5XS5ydWxlcyksXG4gICAgICAgIHJ1bGVzOiB0aGlzLnZhbGlkYXRpb25ba2V5XS5ydWxlcyxcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSlcbiAgfVxuXG4gIC8qKlxuICAgKiDpqozor4HmiYDmnIlmaWVsZHNcbiAgICovXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGxldCB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgIGlmIChyb3cudHlwZSAhPT0gJ0Zvcm1CdXR0b25zJykge1xuICAgICAgICByb3cuZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmRpc3BsYXkgIT09IGZhbHNlICYmIGl0ZW0udHlwZSAhPT0gJ3JlbmRlcicgJiYgaXRlbS50eXBlICE9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXkgfSA9IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEZvcm1WYWxpZGF0b3IuY2hlY2sodmFsdWUsIHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzKVxuXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gICAgcmV0dXJuIHZhbGlkYXRlZFxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFN1Ym1pdFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25TdWJtaXQgPSAoZT86IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0Pik6IHZvaWQgPT4ge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN1Ym1pdCkgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogb24gUmVzZXRcbiAgICovXG4gIG9uUmVzZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZXNldCkgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBidXR0b24gY2xpY2tcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBvbkJ1dHRvbkNsaWNrID0gKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgdGhpcy5vblN1Ym1pdCgpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICB0aGlzLm9uUmVzZXQoKVxuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKHRoaXMuZGF0YSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5qCh6aqMXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBydWxlc1xuICAgKi9cbiAgdmFsaWRhdGVGaWVsZCA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZXM6IEFycmF5PHN0cmluZz4gPSBbXSkgPT4ge1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb25ba2V5XSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCBydWxlcylcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsaWRhdGVkOiB0cnVlLCBtc2c6ICcnIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsIGRhdGFTb3VyY2UsIGxhYmVsRGlyZWN0aW9uLCBsYWJlbFdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5pc0RhdGFTb3VyY2VDaGFuZ2VkKGRhdGFTb3VyY2UpXG4gICAgdGhpcy5jb252ZXJ0RGF0YUZyb21GaWVsZHMoZmllbGRzLCBkYXRhU291cmNlKSAvLyDku45maWVsZHPphY3nva7ph4zlj5blvpfmlbDmja7nu5PmnoRcbiAgICBhZGRMYWJlbFN0eWxlV2lkdGgobGFiZWxXaWR0aCwgbGFiZWxEaXJlY3Rpb24pXG4gICAgcmV0dXJuIChcbiAgICAgIDxTcGluIHNwaW5uaW5nPXt0aGlzLnByb3BzLnNwaW5uaW5nfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZDogRmllbGRzQ29uZlQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgcm93XyR7aWR4fWBcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZGF0YX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt0aGlzLnZhbGlkYXRpb259XG4gICAgICAgICAgICAgICAgbGFiZWxEaXJlY3Rpb249e2xhYmVsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1NwaW4+XG4gICAgKVxuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgVmFsaWRhdG9yVCwgVmFsaWRhdG9yQ2hpbGRULCBFeHRlbmRWYWxpZGF0b3IgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG5jbGFzcyBWYWxpZGF0aW9uIHtcbiAgdmFsaWRhdG9yczogVmFsaWRhdG9yVCA9IHtcbiAgICAvLyDlv4XloatcbiAgICByZXF1aXJlZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdKSA9PiBub3RFbXB0eVZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XloasnLFxuICAgIH0sXG4gICAgbWluX2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lsI/kuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lpKfkuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbGVuZ3RoOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogbnVtYmVyKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgLy8g5omL5py6XG4gICAgbW9iaWxlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjFcXGR7MTB9Ly50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnLFxuICAgIH0sXG4gICAgLy8g5pWw5a2XXG4gICAgbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiAvXFxkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75L2N5pWw5a2X5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaVtOaVsFxuICAgIGludDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gIS9cXEQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmlbTmlbAnLFxuICAgIH0sXG4gICAgLy8g5q2j5pWwXG4gICAgcG9zaXRpdmVfbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IDAsXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S4uuato+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3kuLrotJ/mlbBcbiAgICBub3RfbmVnYXRpdmU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IDAsXG4gICAgICBlcnJvck1zZzogJ+S4jeiDveS4uui0n+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3lsI/kuo5cbiAgICBtaW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqO5oiW562J5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5aSn5LqOXG4gICAgbW9yZV90aGFuOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5LiN6IO95aSn5LqOXG4gICAgbWF4OiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA8PSBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWwj+S6jlxuICAgIGxlc3NfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIHByaWNlXG4gICAgcHJpY2U6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCEvXFxkLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWU6IHN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBwOiBzdHJpbmdbXSA9IHN0cmluZ1ZhbHVlLnNwbGl0KCcuJylcbiAgICAgICAgICBpZiAocC5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAocFsxXS5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG76KaB56ym5ZCI6LSn5biB5qC85byPLOWmgiAxMC4yMycsXG4gICAgfSxcbiAgICB0ZWxlcGhvbmU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC9eMFxcZHsyLDN9LVxcZHs3LDh9JC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+mcgOespuWQiO+8iOWMuuWPty3nlLXor53lj7fnoIHvvInnmoTmoLzlvI8nLFxuICAgIH0sXG4gICAgLy8g55S15a2Q6YKu566x5ZCO57yAXG4gICAgZW1haWxfc3VmZml4OiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZVxuICAgICAgICBjb25zdCByZWcgPSAvXkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/L1xuICAgICAgICByZXR1cm4gcmVnLnRlc3QodmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6ICfor7fovpPlhaXmraPnoa7nmoTpgq7nrrHlkI7nvIAo5YyF5ousQCknLFxuICAgIH0sXG4gICAgLy8g55S15a2Q6YKu566xXG4gICAgZW1haWw6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVnID0gL1thLXowLTkhIyQlJicqK1wiPT9eX2B7fH1+LV0rKD86LlthLXowLTkhIyQlJicqK1wiPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566xJyxcbiAgICB9LFxuICAgIC8vIOeUqOaIt+WQjVxuICAgIHVzZXJuYW1lOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXihbYS16QS1aMC05Xy1dezIsMjB9KSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfnlLHplb/luqbkuLo1772eMjDkvY3nmoTmlbDlrZfjgIHlrZfmr43nu4TmiJAnLFxuICAgIH0sXG4gICAgLy8g5a+G56CBXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkLiopKD89LipcXFcuKilbYS16QS1aMC05XFxTXVteXFx1NGUwMC1cXHU5ZmE1XXs2LDIwfSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfnlLHplb/luqbkuLo2772eMTbkvY3nmoTmlbDlrZfjgIHlpKflsI/lrZfmr43ku6Xlj4rnrKblj7fnu4TmiJAnLFxuICAgIH0sXG4gICAgLy8g6Lqr5Lu96K+BXG4gICAgaWRfY2FyZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gLyheXFxkezE1fSQpfCheXFxkezE4fSQpfCheXFxkezE3fShcXGR8WHx4KSQpLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6Lqr5Lu96K+B5Y+356CB5LiN56ym5ZCIJyxcbiAgICB9LFxuICAgIHZpbjogeyAvLyDovabmnrblj7dcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC9eKFthLXpBLVowLTlfLV17MTd9KSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfnlLHplb/luqbkuLoxN+S9jeeahOaVsOWtl+OAgeWtl+avjee7hOaIkCcsXG4gICAgfSxcbiAgICBlbmdpbmVfbm86IHsgLy8g5Y+R5Yqo5py65Y+3XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXihbYS16QS1aMC05Xy1dezYsMjB9KSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfnlLHplb/luqbkuLo2fjIw5L2N55qE5pWw5a2X44CB5a2X5q+N57uE5oiQJyxcbiAgICB9LFxuICAgIGxpY2Vuc2VfcGxhdGVfbnVtYmVyOiB7IC8vIOi9pueJjOWPt1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oW1xcdTRFMDAtXFx1OUZBNV1bYS16QS1aMC05Xy1dezYsN30pJC8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+eUsemVv+W6puS4ujd+OOS9jeeahOS4reaWh+OAgeaVsOWtl+OAgeWtl+avjee7hOaIkCcsXG4gICAgfSxcbiAgfVxuXG4gIGV4dGVuZFZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8RXh0ZW5kVmFsaWRhdG9yPik6IHZvaWQge1xuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBFeHRlbmRWYWxpZGF0b3IpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgLi4ucmVzdCB9ID0gdmFsaWRhdG9yXG4gICAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSByZXN0XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrKHY6IHN0cmluZyB8IG51bWJlciwgcnVsZXM6IHN0cmluZ1tdKSB7XG4gICAgbGV0IHZhbHVlID0gdlxuICAgIGxldCBzdWNjZXNzID0geyB2YWxpZGF0ZWQ6IHRydWUsIG1zZzogJycgfVxuXG4gICAgaWYgKCFydWxlcyB8fCAhKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm4gc3VjY2Vzc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKVxuICAgIH1cblxuICAgIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICAgICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yQ2hpbGRUXG4gICAgICBsZXQgc1J1bGU6IGFueVtdID0gW11cblxuICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgIHJlc3VsdCA9IHZhbGlkYXRvci52YWxpZGF0b3IodmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGlmIChydWxlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgICBzUnVsZSA9IHJ1bGUuc3BsaXQoJzonKVxuICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tzUnVsZVswXV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlLCBzUnVsZVsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbcnVsZV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IHZhbGlkYXRvcj8uZXJyb3JNc2dcbiAgICAgICAgc3VjY2VzcyA9IHtcbiAgICAgICAgICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1zZzogdHlwZW9mIGVyciA9PT0gJ2Z1bmN0aW9uJyA/IGVycihzUnVsZVsxXSkgOiBlcnIsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHN1Y2Nlc3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvbigpXG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiAoXG4gIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG4pXG5cbmV4cG9ydCBjb25zdCBzaW1wbGVDbG9uZSA9IDxUPihkYXRhOiBUKTogVCA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG5leHBvcnQgY29uc3QgYWRkTGFiZWxTdHlsZVdpZHRoID0gKHdpZHRoOiBudW1iZXIsIGxhYmVsRGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSAnZm9ybS1sYWJlbC13aWR0aCdcbiAgY29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlTmFtZSlcbiAgaWYgKERPTSkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChET00pXG5cbiAgaWYgKGxhYmVsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBjb25zdCBTVFlMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWVcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBgLmFudC1mb3JtLWl0ZW0tbGFiZWwgeyB3aWR0aDogJHt3aWR0aH1weDsgfWBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFNUWUxFKVxuICB9XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWVtb2l6ZS1vbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==