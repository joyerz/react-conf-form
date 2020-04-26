(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('antd'), require('axios'), require('memoize-one'), require('moment'), require('react'))
  else if (typeof define === 'function' && define.amd)
    define(['antd', 'axios', 'memoize-one', 'moment', 'react'], factory)
  else {
    var a = typeof exports === 'object' ? factory(require('antd'), require('axios'), require('memoize-one'), require('moment'), require('react')) : factory(root['antd'], root['axios'], root['memoize-one'], root['moment'], root['react'])
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i]
  }
})(window, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_axios__, __WEBPACK_EXTERNAL_MODULE_memoize_one__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports
        /******/
      }
      /******/ 		// Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/      i: moduleId,
        /******/      l: false,
        /******/      exports: {},
        /******/
      }
      /******/
      /******/ 		// Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/
      /******/ 		// Flag the module as loaded
      /******/
      module.l = true
      /******/
      /******/ 		// Return the exports of the module
      /******/
      return module.exports
      /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/
      }
      /******/
    }
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value)
      /******/
      if (mode & 8) return value
      /******/
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      /******/
      var ns = Object.create(null)
      /******/
      __webpack_require__.r(ns)
      /******/
      Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/
      if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function(key) {
        return value[key]
      }.bind(null, key))
      /******/
      return ns
      /******/
    }
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
      /******/
      var getter = module && module.__esModule ?
        /******/      function getDefault() {
          return module['default']
        } :
        /******/      function getModuleExports() {
          return module
        }
      /******/
      __webpack_require__.d(getter, 'a', getter)
      /******/
      return getter
      /******/
    }
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    }
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = './Form/index.tsx')
    /******/
  })
    /************************************************************************/
    /******/ ({

      /***/ './Form/Field/AutoComplete.tsx':
      /*!*************************************!*\
       !*** ./Form/Field/AutoComplete.tsx ***!
       \*************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')

        function default_1(props) {
          const onChange = (value) => {
            if (props.props.onChange) {
              props.props.onChange(props.name, value)
            }
            if (props.onChange) {
              props.onChange(props.name, value)
            }
          }
          const _a = props.props, { addon } = _a, rest = __rest(_a, ['addon'])
          return (React.createElement(antd_1.AutoComplete, Object.assign({}, rest, { onChange: onChange })))
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Button.tsx':
      /*!*******************************!*\
       !*** ./Form/Field/Button.tsx ***!
       \*******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const buttonTypes = ['default', 'primary', 'danger', 'link', 'ghost']
        exports.default = (props) => {
          const { label, data } = props
          const _a = props.props, { type = 'default', className = '', onClick, addon } = _a,
            rest = __rest(_a, ['type', 'className', 'onClick', 'addon'])
          let buttonType = 'default'
          const index = buttonTypes.findIndex(item => item === type)
          if (index !== -1) {
            buttonType = buttonTypes[index]
          }
          return (React.createElement(antd_1.Button, Object.assign({
            type: buttonType,
            className: `${buttonType} ${className}`,
            onClick: () => onClick(data),
          }, rest), label))
        }


        /***/
      }),

      /***/ './Form/Field/Cascader.tsx':
      /*!*********************************!*\
       !*** ./Form/Field/Cascader.tsx ***!
       \*********************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
// import Cascader from 'antd/es/cascader'
// import 'antd/es/cascader/style'
        function getCascaderLabel(originalValue, curOptions, valueIndex, labelArr) {
          let index = valueIndex
          if (originalValue && index < originalValue.length) {
            const temp = curOptions.find(item => item.value === originalValue[valueIndex])
            if (temp) {
              labelArr.push(temp.label)
            }
            if (temp && temp.children) {
              index += 1
              return getCascaderLabel(originalValue, temp.children, valueIndex, labelArr)
            }
            return labelArr.join(' / ')
          }
          return labelArr.join(' / ')
        }

        function CascaderField(props) {
          const { readOnly, value, name } = props
          const { options, onChange, placeholder = '请选择' } = props.props
          const change = (selectedValue, selectedOptions) => {
            if (onChange) {
              onChange(name, selectedValue, selectedOptions)
            }
            props.onChange(name, selectedValue)
          }
          const _a = props.props, { addon } = _a, rest = __rest(_a, ['addon'])
          if (!readOnly) {
            return React.createElement(antd_1.Cascader, Object.assign({}, rest, {
              onChange: change,
              value: value,
              placeholder: placeholder,
            }))
          }
          return getCascaderLabel(value, options, 0, [])
        }

        exports.default = CascaderField


        /***/
      }),

      /***/ './Form/Field/Checkbox.tsx':
      /*!*********************************!*\
       !*** ./Form/Field/Checkbox.tsx ***!
       \*********************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')

        function CheckboxField(props) {
          const { value, readOnly, onChange, name } = props
          const { options = [], checkAllAble = false } = props.props
          // 全选
          const onCheckAllChange = (e) => {
            const newValue = []
            if (e.target.checked) {
              options.forEach(item => newValue.push(item.value))
            }
            onChange(name, newValue)
            if (props.props.onChange) {
              props.props.onChange(name, newValue)
            }
          }
          const isCheckedAll = (values) => (common_1.notEmptyValue(values) && values.length === options.length)
          const change = (target) => {
            const newValue = common_1.getTargetValue(target)
            onChange(name, newValue)
            if (props.props.onChange) {
              props.props.onChange(name, newValue)
            }
          }
          const _a = props.props, { addon } = _a, rest = __rest(_a, ['addon'])
          return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement(React.Fragment, null,
            checkAllAble && (React.createElement(antd_1.Checkbox, {
              checked: isCheckedAll(value),
              onChange: onCheckAllChange,
            }, '\u5168\u9009 \u00A0')),
            React.createElement(antd_1.Checkbox.Group, Object.assign({}, rest, { value: value, onChange: change }))))
        }

        exports.default = CheckboxField


        /***/
      }),

      /***/ './Form/Field/Datepicker.tsx':
      /*!***********************************!*\
       !*** ./Form/Field/Datepicker.tsx ***!
       \***********************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const moment = __webpack_require__(/*! moment */ 'moment')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')

        class default_1 extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.FORMAT = 'YYYY-MM-DD'
            this.FORMAT_TIME = 'YYYY-MM-DD HH:mm'
            this.onChange = (e) => {
              let value = common_1.getTargetValue(e)
              if (common_1.notEmptyValue(value)) {
                value = !value ? value : value.valueOf()
              }
              const { name } = this.props
              const { beforeChange, onChange } = this.props.props
              if (beforeChange) {
                value = beforeChange(name, value)
              }
              if (onChange) {
                onChange(name, value)
              }
              this.props.onChange(name, value)
            }
          }

          render() {
            const { value, readOnly, props } = this.props
            const { format, addon } = props, rest = __rest(props, ['format', 'addon'])
            const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT)
            const fieldValue = value ? moment(value) : undefined
            return readOnly
              ? ((fieldValue && fieldValue.format(format)) || null)
              : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.DatePicker, Object.assign({}, rest, {
                  format: FORMAT,
                  value: fieldValue,
                  onChange: this.onChange,
                }))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Input.tsx':
      /*!******************************!*\
       !*** ./Form/Field/Input.tsx ***!
       \******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')

        class default_1 extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.onChange = (e) => {
              let value = common_1.getTargetValue(e)
              const { name } = this.props
              const { beforeChange, onChange } = this.props.props
              if (beforeChange) {
                value = beforeChange(name, value)
              }
              if (onChange) {
                onChange(name, value)
              }
              this.props.onChange(name, value)
            }
            this.staticValue = (value, suffix, prefix) => {
              if (!value)
                return null
              let string = value
              if (suffix)
                string = `${value} ${suffix}`
              if (prefix)
                string = `${prefix} ${string}`
              return string
            }
          }

          render() {
            const { value, readOnly, type, props } = this.props
            const { addon, suffix, prefix } = props, rest = __rest(props, ['addon', 'suffix', 'prefix'])
            const autoComplete = props.autoComplete || 'off'
            return readOnly
              ? this.staticValue(value, suffix, prefix)
              : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input, Object.assign({ placeholder: '\u8BF7\u8F93\u5165' }, rest, {
                  suffix: suffix,
                  prefix: prefix,
                  type: type,
                  value: value,
                  onChange: this.onChange,
                  autoComplete: autoComplete,
                }))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/InputNumber.tsx':
      /*!************************************!*\
       !*** ./Form/Field/InputNumber.tsx ***!
       \************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const Input_1 = __webpack_require__(/*! ./Input */ './Form/Field/Input.tsx')

        function default_1(props) {
          return (React.createElement(Input_1.default, Object.assign({}, props, { type: 'number' })))
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/InputPassword.tsx':
      /*!**************************************!*\
       !*** ./Form/Field/InputPassword.tsx ***!
       \**************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const Input_1 = __webpack_require__(/*! ./Input */ './Form/Field/Input.tsx')

        function default_1(props) {
          return (React.createElement(Input_1.default, Object.assign({}, props, { type: 'password' })))
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/PicPreview.scss':
      /*!************************************!*\
       !*** ./Form/Field/PicPreview.scss ***!
       \************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

        /***/
      }),

      /***/ './Form/Field/PicPreview.tsx':
      /*!***********************************!*\
       !*** ./Form/Field/PicPreview.tsx ***!
       \***********************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        __webpack_require__(/*! ./PicPreview.scss */ './Form/Field/PicPreview.scss')
        const { useState } = React

        /**
         * 图片预览
         */
        function PicPreviewer({ showList = true, url = [], style = {}, current = '', onHide }) {
          let images = []
          if (url) {
            images = typeof url === 'string' ? [url] : url
          }
          images = images.filter(item => item)
          const [visible, setVisible] = useState(false)
          const [src, setSrc] = useState(current)
          const [deg, setDeg] = useState(0)
          const [loading, setLoading] = useState(true)
          const [isInit, setIsInit] = useState(false)
          const handleCancel = () => {
            if (onHide)
              onHide()
            setVisible(false)
          }
          const handleShow = (targetSrc) => {
            setVisible(true)
            setLoading(true)
            setSrc(targetSrc)
          }
          const prev = () => {
            setLoading(true)
            let idx = images.indexOf(src)
            idx -= 1
            idx = idx < 0 ? images.length - 1 : idx
            handleShow(images[idx])
            // setDeg(0)
          }
          const next = () => {
            setLoading(true)
            let idx = images.indexOf(src)
            idx += 1
            idx = idx >= images.length ? 0 : idx
            handleShow(images[idx])
            // setDeg(0)
          }
          const rotation = () => {
            setDeg(deg + 1)
          }
          const rotationBack = () => {
            setDeg(deg - 1)
          }
          const onLoad = () => {
            setLoading(false)
          }
          if (!showList && !isInit) {
            handleShow(current)
            setIsInit(true)
          }
          return (React.createElement(React.Fragment, null,
            showList
            && (React.createElement('div', { className: 'react-conf-form-pic-row' }, images
              .map((item, idx) => {
                const key = `${item}_${idx}`
                return (React.createElement('div', {
                    role: 'link',
                    tabIndex: idx,
                    key: key,
                    className: 'react-conf-form-pic-box',
                    onClick: () => handleShow(item),
                    onKeyDown: () => handleShow(item),
                    style: style,
                  },
                  React.createElement('img', { src: item, alt: '' })))
              }))),
            visible
            && (React.createElement('div', { className: 'react-conf-form-pic-viewer' },
            React.createElement('div', { className: 'react-conf-form-pic-spin react-conf-form-pic-white-spin' },
              React.createElement(antd_1.Spin, { spinning: loading, tip: 'loading...', size: 'large' })),
            React.createElement('div', { className: 'react-conf-form-pic-container', onClick: handleCancel }),
            React.createElement('div', { className: 'react-conf-form-pic-buttons' },
              React.createElement('div', { className: 'react-conf-form-pic-icon', onClick: handleCancel },
                React.createElement(antd_1.Icon, { type: 'close' })),
              images.length > 1 && (React.createElement('div', { className: 'react-conf-form-pic-icon', onClick: prev },
              React.createElement(antd_1.Icon, { type: 'left' }))),
              images.length > 1 && (React.createElement('div', { className: 'react-conf-form-pic-icon', onClick: next },
              React.createElement(antd_1.Icon, { type: 'right' }))),
              React.createElement('div', { className: 'react-conf-form-pic-icon', onClick: rotation },
                React.createElement(antd_1.Icon, { type: 'redo' })),
              React.createElement('div', { className: 'react-conf-form-pic-icon', onClick: rotationBack },
                React.createElement(antd_1.Icon, { type: 'undo' }))),
            React.createElement('img', {
              alt: 'previmg',
              src: src,
              onLoad: onLoad,
              style: { transform: `translate(-50%, -50%) rotate(${deg * 90}deg)`, opacity: loading ? 0 : 1 },
              className: 'react-conf-form-pic-img-container',
            })))))
        }

        exports.default = PicPreviewer


        /***/
      }),

      /***/ './Form/Field/Radio.tsx':
      /*!******************************!*\
       !*** ./Form/Field/Radio.tsx ***!
       \******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')

        function RadioField(props) {
          const { value, readOnly, onChange, name, style = {} } = props
          const { options = [] } = props.props
          const change = (target) => {
            const newValue = common_1.getTargetValue(target)
            onChange(name, newValue)
            if (props.props.onChange) {
              props.props.onChange(name, newValue)
            }
          }
          const _a = props.props, { addon } = _a, rest = __rest(_a, ['addon'])
          return readOnly ? (common_1.getItemLabelByValue(options, value)) : (React.createElement('div', { style: style },
            React.createElement(antd_1.Radio.Group, Object.assign({}, rest, { value: value, onChange: change }))))
        }

        exports.default = RadioField


        /***/
      }),

      /***/ './Form/Field/Rangepicker.tsx':
      /*!************************************!*\
       !*** ./Form/Field/Rangepicker.tsx ***!
       \************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const moment = __webpack_require__(/*! moment */ 'moment')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
// import Datepicker from 'antd/es/date-picker'
// import 'antd/es/date-picker/style'
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')

        class default_1 extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.FORMAT = 'YYYY-MM-DD'
            this.FORMAT_TIME = 'YYYY-MM-DD HH:mm'
            this.onChange = (e) => {
              const { showTime } = this.props.props
              let value = common_1.getTargetValue(e)
              if (common_1.notEmptyValue(value[0])) {
                if (!showTime) {
                  value = [
                    moment(moment(value[0]).format('YYYY-MM-DD 00:00:00')).valueOf(),
                    moment(moment(value[1]).format('YYYY-MM-DD 23:59:59')).valueOf(),
                  ]
                }
                else {
                  value = [moment(value[0]).valueOf(), moment(value[1]).valueOf()]
                }
              }
              else {
                value = null
              }
              const { name } = this.props
              const { beforeChange, onChange } = this.props.props
              if (beforeChange) {
                value = beforeChange(name, value)
              }
              if (onChange) {
                onChange(name, value)
              }
              console.log('name', name, value)
              this.props.onChange(name, value)
            }
            this.staticTime = (value, FORMAT) => {
              if (!value)
                return moment(value).format(FORMAT)
              return ''
            }
            this.showTime = (timeValue, FORMAT) => {
              if (timeValue[0] && timeValue[1]) {
                return `${this.staticTime(timeValue[0], FORMAT)} ~ ${this.staticTime(timeValue[1], FORMAT)}`
              }
              return null
            }
          }

          render() {
            const { value, readOnly, props } = this.props
            const { format, addon } = props, rest = __rest(props, ['format', 'addon'])
            const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT)
            let timeValue = [null, null]
            if (value && value.constructor.name === 'Array' && value.length > 0) {
              timeValue = common_1.simpleClone(value)
              timeValue[0] = moment(value[0])
              timeValue[1] = moment(value[1])
            }
            return readOnly
              ? this.showTime(timeValue, FORMAT)
              : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.DatePicker.RangePicker, Object.assign({}, rest, {
                  format: FORMAT,
                  value: timeValue,
                  onChange: this.onChange,
                }))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Render.tsx':
      /*!*******************************!*\
       !*** ./Form/Field/Render.tsx ***!
       \*******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        const Render = props => {
          const { data } = props
          const { render } = props.props
          // console.log('render', typeof render, render)
          return typeof render === 'function' ? render(data) : (render || null)
        }
        exports.default = Render


        /***/
      }),

      /***/ './Form/Field/Select.tsx':
      /*!*******************************!*\
       !*** ./Form/Field/Select.tsx ***!
       \*******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
// import Select from 'antd/es/select'
// import 'antd/es/select/style'
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')
        const { Option, OptGroup } = antd_1.Select

        class default_1 extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.onChange = (e) => {
              var _a
              const target = e && e.target
              let value
              if (target instanceof HTMLElement || common_1.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
                value = target.value
              }
              else {
                value = e
              }
              const { name } = this.props
              const { beforeChange, onChange } = this.props.props
              if (beforeChange) {
                value = beforeChange(name, value)
              }
              if (onChange) {
                onChange(name, value)
              }
              this.props.onChange(name, value)
            }
            this.renderGroup = (items) => {
              const result = []
              Object.keys(items).forEach(key => {
                const children = []
                items[key].forEach(item => {
                  children.push(React.createElement(Option, { key: item.value, title: item.label }, item.label))
                })
                result.push(React.createElement(OptGroup, { label: key, key: key }, children))
              })
              return result
            }
          }

          render() {
            const { value, readOnly, props } = this.props
            const { items = [], placeholder = '请选择', showSearch = true, optionFilterProp = 'title', allowClear = true, addon } = props,
              rest = __rest(props, ['items', 'placeholder', 'showSearch', 'optionFilterProp', 'allowClear', 'addon'])
            const { mode } = rest
            return readOnly
              ? React.createElement('span', { style: {} }, common_1.getItemLabelByValue(items, value, mode))
              : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Select, Object.assign({}, rest, {
                    placeholder: placeholder,
                    value: value,
                    optionFilterProp: optionFilterProp === 'label' ? 'title' : optionFilterProp,
                    showSearch: showSearch,
                    allowClear: allowClear,
                    onChange: this.onChange,
                  }),
                  Array.isArray(items) && items.map((item) => (React.createElement(Option, {
                    key: item.value,
                    title: item.label,
                    disabled: item.value === undefined,
                  }, item.label))),
                  !Array.isArray(items) && this.renderGroup(items))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Switch.tsx':
      /*!*******************************!*\
       !*** ./Form/Field/Switch.tsx ***!
       \*******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')

        class default_1 extends React.Component {
          constructor() {
            super(...arguments)
            this.onChange = (checked) => {
              if (this.props.onChange) {
                this.props.onChange(this.props.name, checked)
              }
              if (this.props.props.onClick) {
                this.props.props.onClick(this.props.data)
              }
            }
          }

          render() {
            const { value } = this.props
            const _a = this.props.props, { onClick } = _a, rest = __rest(_a, ['onClick'])
            return (React.createElement(React.Fragment, null,
              React.createElement(antd_1.Switch, Object.assign({}, rest, {
                checked: value,
                onChange: this.onChange,
              }))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Textarea.tsx':
      /*!*********************************!*\
       !*** ./Form/Field/Textarea.tsx ***!
       \*********************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')

        class default_1 extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.onChange = (e) => {
              var _a
              const target = e && e.target
              let value
              if (target instanceof HTMLElement || common_1.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
                value = target.value
              }
              else {
                value = e
              }
              const { name } = this.props
              const { beforeChange, onChange } = this.props.props
              if (beforeChange) {
                value = beforeChange(name, value)
              }
              if (onChange) {
                onChange(name, value)
              }
              this.props.onChange(name, value)
            }
          }

          render() {
            const { value, readOnly, props } = this.props
            const autoComplete = props.autoComplete || 'off'
            const { addon } = props, rest = __rest(props, ['addon'])
            return readOnly
              ? (value || null)
              : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Input.TextArea, Object.assign({ placeholder: '\u8BF7\u8F93\u5165' }, rest, {
                  value: value,
                  onChange: this.onChange,
                  autoComplete: autoComplete,
                }))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Timepicker.tsx':
      /*!***********************************!*\
       !*** ./Form/Field/Timepicker.tsx ***!
       \***********************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const moment = __webpack_require__(/*! moment */ 'moment')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
// import Timepicker from 'antd/es/time-picker'
// import 'antd/es/time-picker/style'
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')

        class default_1 extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.FORMAT = 'HH:mm'
            this.onChange = (e) => {
              const { format = this.FORMAT } = this.props.props
              let value = common_1.getTargetValue(e)
              if (common_1.notEmptyValue(value)) {
                value = moment(value).format(format)
              }
              const { name } = this.props
              const { beforeChange, onChange } = this.props.props
              if (beforeChange) {
                value = beforeChange(name, value)
              }
              if (onChange) {
                onChange(name, value)
              }
              this.props.onChange(name, value)
            }
            this.staticTime = (value, FORMAT) => {
              if (!value)
                return moment(value).format(FORMAT)
              return ''
            }
          }

          render() {
            const { value, readOnly, props } = this.props
            const { format = this.FORMAT, addon } = props, rest = __rest(props, ['format', 'addon'])
            const timeValue = common_1.notEmptyValue(value)
              ? moment(common_1.simpleClone(value), format)
              : undefined
            return readOnly
              ? this.staticTime(value, format)
              : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.TimePicker, Object.assign({ value: timeValue }, rest, {
                  format: format,
                  onChange: this.onChange,
                }))))
          }
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/Field/Upload.tsx':
      /*!*******************************!*\
       !*** ./Form/Field/Upload.tsx ***!
       \*******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const axios_1 = __webpack_require__(/*! axios */ 'axios')
        const PicPreview_1 = __webpack_require__(/*! ./PicPreview */ './Form/Field/PicPreview.tsx')
        /**
         * Upload
         * @type {XML}
         */
        const uploadButton = (React.createElement('div', null,
          React.createElement(antd_1.Icon, { type: 'plus' }),
          React.createElement('div', { className: 'ant-upload-text' }, '\u4E0A\u4F20')))
        const uploadButtonText = (React.createElement(antd_1.Button, null,
          React.createElement(antd_1.Icon, { type: 'upload' }),
          '\u00A0\u4E0A\u4F20'))

        class UploadField extends React.PureComponent {
          constructor() {
            super(...arguments)
            this.state = {
              previewVisible: false,
              previewImage: '',
              errorMsg: '',
            }
            this.onChange = (info) => {
              var _a, _b, _c
              // console.log('!!!!!!进入 onChange ')
              const { onChange, onUploaded, responseHandler } = this.props.props
              let fileList = [...info.fileList]
              fileList.forEach((file, idx) => {
                if (file.response) {
                  if (responseHandler) {
                    fileList[idx] = Object.assign(Object.assign({}, fileList[idx]), {
                      url: responseHandler.url(file.response),
                      name: responseHandler.name(file.response),
                    })
                  }
                  else {
                    fileList[idx] = Object.assign(Object.assign({}, fileList[idx]), {
                      url: file.response.headers.location,
                      name: file.response.filename,
                    })
                  }
                }
                return file
              })
              if (info.file.status === 'done') {
                if (this.props.props.getResponseData) {
                  this.props.props.getResponseData(info.file.response)
                }
                this.setState({ errorMsg: '' })
              }
              else if (info.file.status === 'error') {
                fileList = []
                this.setState({ errorMsg: ((_c = (_b = (_a = info.file) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.invoice) === null || _c === void 0 ? void 0 : _c.message) || '上传错误, 请重试!' })
              }
              else if (!info.file.status) {
                // 文件超过大小或其它不满足前端限制条件情况
                fileList = fileList.slice(0, fileList.length - 1)
                // this.setState({ errorMsg: '' })
              }
              this.props.onChange(this.props.name, fileList)
              if (onChange) {
                onChange(fileList)
              }
              if (onUploaded) {
                onUploaded(fileList)
              }
            }
            this.onPreview = (file) => {
              this.setState({ previewVisible: true, previewImage: file.url })
            }
            this.handleCancel = () => {
              this.setState({ previewVisible: false, previewImage: '' })
            }
            this.customRequest = ({ file, onSuccess, onError, onProgress }) => {
              const { headers, action } = this.props.props
              // console.log(action)
              const formData = new FormData()
              formData.append('file', file)
              axios_1.default
                     .post(action, formData, {
                       onUploadProgress: onProgress,
                       headers: headers || {},
                     })
                     .then(response => {
                       this.setState({ errorMsg: '' })
                       onSuccess(response)
                     }, () => {
                       this.setState({ errorMsg: '上传失败!' })
                       onError()
                     })
              return {
                abort() {
                  this.setState({ errorMsg: '上传终止!' })
                },
              }
            }
          }

          beforeUpload(file, type) {
            // console.log('!!!!!!进入 beforeUpload ')
            const { maxFileSize = 10 } = this.props.props
            // if (heightRatio && widthRatio) { // 验证长宽比例
            //   const { height, width } = await getFileDimension(file)
            //   if (height/width !== heightRatio/widthRatio) {
            //     message.error(`长宽比必须是 ${heightRatio} / ${widthRatio}`)
            //     return false
            //   }
            // }
            // 验证文件大小size
            const fileSizeLarger = file.size / 1024 / 1024 > maxFileSize
            if (fileSizeLarger) {
              this.setState({ errorMsg: `文件体积大小不超过${maxFileSize}M` })
              // message.error(`文件体积大小不超过${maxFileSize}M`)
              return false
            }
            // 验证文件格式
            if (type === 'img') {
              const isJPG = file.type
              if (isJPG === 'image/jpeg' || isJPG === 'image/png') {
                this.setState({ errorMsg: '' })
                return true
              }
              this.setState({ errorMsg: '仅支持上传jpg/png格式图片' })
              // message.error('仅支持上传jpg/png格式图片')
              return false
            }
            this.setState({ errorMsg: '' })
          }

          render() {
            const { value = [], readOnly, props } = this.props
            const { maxFiles = 10, blobName = 'blob', fileType = 'img', showErrorMessage = true, listType = 'picture-card', headers = {} } = props
            // value = value || []
            const button = listType === 'picture-card' ? uploadButton : uploadButtonText
            const formatValue = JSON.parse(JSON.stringify(value))
            const imagesUrls = []
            formatValue.forEach(element => {
              var _a
              imagesUrls.push((_a = element) === null || _a === void 0 ? void 0 : _a.url)
            })
            formatValue.forEach((item, idx) => {
              if (typeof item !== 'object') {
                formatValue[idx] = {
                  uid: `${item}_${idx}`,
                  url: item,
                }
              }
              return item
            })
            const { addon } = props, rest = __rest(props
              // console.log('err', this.state.errorMsg, showErrorMessage)
              , ['addon'])
            // console.log('err', this.state.errorMsg, showErrorMessage)
            return (React.createElement('div', { style: { position: 'relative' } },
              React.createElement(antd_1.Upload, Object.assign({}, rest, {
                key: blobName,
                name: blobName,
                headers: headers,
                listType: listType,
                fileList: formatValue,
                showUploadList: true,
                onChange: file => this.onChange(file),
                beforeUpload: file => this.beforeUpload(file, fileType),
                disabled: readOnly,
                onPreview: this.onPreview,
                customRequest: this.customRequest,
              }), value.length >= maxFiles || readOnly ? null : button),
              this.state.errorMsg && showErrorMessage && (React.createElement('div', { className: 'upload-error' }, this.state.errorMsg)),
              this.state.previewVisible && (React.createElement(PicPreview_1.default, {
                url: imagesUrls,
                showList: false,
                onHide: this.handleCancel,
                current: this.state.previewImage,
              }))))
          }
        }

        exports.default = UploadField
        UploadField.defaultProps = {
// props: {
//   showErrorMessage: true,
//   maxFiles: 5, // 最多能上传文件数
//   maxFileSize: 10, // 最大上传体积
//   fileType: 'img', // 默认上传图片
// },
        }


        /***/
      }),

      /***/ './Form/Field/index.tsx':
      /*!******************************!*\
       !*** ./Form/Field/index.tsx ***!
       \******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const Render_1 = __webpack_require__(/*! ./Render */ './Form/Field/Render.tsx')
        const Input_1 = __webpack_require__(/*! ./Input */ './Form/Field/Input.tsx')
        const Button_1 = __webpack_require__(/*! ./Button */ './Form/Field/Button.tsx')
        const Select_1 = __webpack_require__(/*! ./Select */ './Form/Field/Select.tsx')
        const Timepicker_1 = __webpack_require__(/*! ./Timepicker */ './Form/Field/Timepicker.tsx')
        const Rangepicker_1 = __webpack_require__(/*! ./Rangepicker */ './Form/Field/Rangepicker.tsx')
        const Datepicker_1 = __webpack_require__(/*! ./Datepicker */ './Form/Field/Datepicker.tsx')
        const Cascader_1 = __webpack_require__(/*! ./Cascader */ './Form/Field/Cascader.tsx')
        const Upload_1 = __webpack_require__(/*! ./Upload */ './Form/Field/Upload.tsx')
        const AutoComplete_1 = __webpack_require__(/*! ./AutoComplete */ './Form/Field/AutoComplete.tsx')
        const InputPassword_1 = __webpack_require__(/*! ./InputPassword */ './Form/Field/InputPassword.tsx')
        const InputNumber_1 = __webpack_require__(/*! ./InputNumber */ './Form/Field/InputNumber.tsx')
        const Textarea_1 = __webpack_require__(/*! ./Textarea */ './Form/Field/Textarea.tsx')
        const Radio_1 = __webpack_require__(/*! ./Radio */ './Form/Field/Radio.tsx')
        const Checkbox_1 = __webpack_require__(/*! ./Checkbox */ './Form/Field/Checkbox.tsx')
        const Switch_1 = __webpack_require__(/*! ./Switch */ './Form/Field/Switch.tsx')
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
        }
        /* Add extract field */
        exports.addFields = (extendFields) => (extendFields.forEach((extendField) => {
          const { name, component } = extendField
          map[name] = component
        }))
        /* Field Map */
        const getComponent = (type) => map[type] || null
        exports.default = (props) => {
          const { type } = props, rest = __rest(props, ['type'])
          const Component = getComponent(type)
          return Component
            ? React.createElement(Component, Object.assign({}, rest))
            : null
        }


        /***/
      }),

      /***/ './Form/FooterButtons/ButtonGroup.tsx':
      /*!********************************************!*\
       !*** ./Form/FooterButtons/ButtonGroup.tsx ***!
       \********************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
// import Button from 'antd/es/button'
// import 'antd/es/button/style'
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const buttonTypes = ['default', 'primary', 'danger', 'link', 'ghost']

        function default_1(props) {
          const { gutter = 16, fields } = props
          return (fields.map((button, idx) => {
            const { key, label = '', display = true } = button
            const _a = button.props || {}, { type = 'default', className = '', onClick, addon, style = {} } = _a,
              rest = __rest(_a, ['type', 'className', 'onClick', 'addon', 'style'])
            let buttonType
            const index = buttonTypes.findIndex(item => item === type)
            if (index !== -1) {
              buttonType = buttonTypes[index]
            }
            if (rest.block) {
              style.display = 'block'
              style.width = '100%'
            }
            return display
              ? (React.createElement('span', { key: key, style: style },
                idx > 0 && React.createElement('span', {
                  className: 'react-conf-form-button-space-between',
                  style: { width: gutter },
                }),
                React.createElement(antd_1.Button, Object.assign({
                  type: buttonType,
                  className: className,
                }, rest, { onClick: () => props.onButtonClick(key, onClick) }), label),
                addon && addon(props.data)))
              : null
          }))
        }

        exports.default = default_1


        /***/
      }),

      /***/ './Form/FooterButtons/index.tsx':
      /*!**************************************!*\
       !*** ./Form/FooterButtons/index.tsx ***!
       \**************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const ButtonGroup_1 = __webpack_require__(/*! ./ButtonGroup */ './Form/FooterButtons/ButtonGroup.tsx')
// const alignMap = {
//   left: 'flex-start',
//   center: 'center',
//   right: 'flex-end',
// }
        function FooterButtons(props) {
          const { style, align, type } = props, rest = __rest(props, ['style', 'align', 'type'])
          const wrapperStyle = Object.assign({
            // justifyContent: alignMap[align || 'center'],
            textAlign: align || 'center',
          }, style)
          return (React.createElement('div', { className: 'react-conf-form-button-wrapper', style: wrapperStyle },
            React.createElement(ButtonGroup_1.default, Object.assign({}, rest))))
        }

        exports.default = FooterButtons
        FooterButtons.defaultProps = {
          display: true,
          style: {},
        }


        /***/
      }),

      /***/ './Form/Row.tsx':
      /*!**********************!*\
       !*** ./Form/Row.tsx ***!
       \**********************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
// import Row from 'antd/es/row'
// import Col from 'antd/es/col'
// import Form from 'antd/es/form'
// import 'antd/es/row/style'
// import 'antd/es/col/style'
// import 'antd/es/form/style'
        const config_1 = __webpack_require__(/*! @Form/config */ './Form/config.ts')
        const Field_1 = __webpack_require__(/*! ./Field */ './Form/Field/index.tsx')
        exports.default = (props) => {
          const { gutter = config_1.DEFAULT_GUTTER, type, className = '', fields, data, onChange, validation, labelDirection } = props
          return (React.createElement(antd_1.Row, { gutter: gutter },
            React.createElement('div', { className: `${className} ${labelDirection}` }, type !== 'FormButtons' && fields.map((field) => {
              const { key, span = props.span || config_1.DEFAULT_SPAN, offset = 0, label, display = true } = field
              const { rules, addon } = field.props
              return display
                ? (React.createElement(antd_1.Col, { key: field.key, span: span, offset: offset },
                  React.createElement(antd_1.Form.Item, {
                      className: field.className,
                      label: ['button', 'render'].indexOf(field.type) === -1 ? label : undefined,
                      required: rules && rules.indexOf('required') !== -1,
                      validateStatus: (validation[key] && !validation[key].validated)
                        ? 'error'
                        : '',
                      help: (validation[key] && !validation[key].validated)
                        ? validation[key].msg
                        : '',
                    },
                    React.createElement(Field_1.default, Object.assign({}, field, {
                      name: key,
                      key: key,
                      data: data,
                      onChange: onChange,
                      value: data[key],
                    })),
                    addon && addon(data))))
                : null
            }))))
        }


        /***/
      }),

      /***/ './Form/config.ts':
      /*!************************!*\
       !*** ./Form/config.ts ***!
       \************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        exports.default = {}
        exports.DEFAULT_SPAN = 8
        exports.DEFAULT_GUTTER = 16


        /***/
      }),

      /***/ './Form/index.scss':
      /*!*************************!*\
       !*** ./Form/index.scss ***!
       \*************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

        /***/
      }),

      /***/ './Form/index.tsx':
      /*!************************!*\
       !*** ./Form/index.tsx ***!
       \************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        const React = __webpack_require__(/*! react */ 'react')
        const memoize_one_1 = __webpack_require__(/*! memoize-one */ 'memoize-one')
        const antd_1 = __webpack_require__(/*! antd */ 'antd')
        const Field_1 = __webpack_require__(/*! @Form/Field */ './Form/Field/index.tsx')
        const FormValidator_1 = __webpack_require__(/*! ./utils/FormValidator */ './Form/utils/FormValidator.ts')
        const Row_1 = __webpack_require__(/*! ./Row */ './Form/Row.tsx')
        const common_1 = __webpack_require__(/*! @Form/utils/common */ './Form/utils/common.ts')
        const FooterButtons_1 = __webpack_require__(/*! ./FooterButtons */ './Form/FooterButtons/index.tsx')
        __webpack_require__(/*! ./index.scss */ './Form/index.scss')

        class RJForm extends React.Component {
          constructor(props) {
            super(props)
            this.mounted = false
            this.data = {} // form数据
            this.dataChanged = false
            this.validation = {} // 验证结果
            /**
             * detect data source whether is changed
             */
            this.isDataSourceChanged = memoize_one_1.default((dataSource) => {
              // USELESS "|| condition"
              // because dataSource is the key of method running and need to
              // use it to avoid that eslint report an error "dataSource is
              // defined but never used"
              this.dataChanged = true || false
              return this.dataChanged
            })
            /**
             * get data from dataSource or local data,
             * and also set up "validation"
             */
            this.convertDataFromFields = memoize_one_1.default((fields, dataSource) => {
              fields.forEach((row) => {
                if (row.type !== 'FormButtons') {
                  row.fields.forEach((item) => {
                    var _a, _b
                    if (item.display !== false && item.type !== 'render' && item.type !== 'button') {
                      // 如果数据源(props)发生改变，取数据源，否则取本地(state)
                      this.data[item.key] = this.dataChanged
                        ? dataSource[item.key]
                        : this.data[item.key]
                      // 如果数据源(props)发生改变： 如果有值，重新校验；没有值，不校验
                      const init = this.validateField(item.key, this.data[item.key], ((_a = item.props) === null || _a === void 0 ? void 0 : _a.rules) || [])
                      this.validation[item.key] = Object.assign(Object.assign({}, init), { rules: ((_b = item.props) === null || _b === void 0 ? void 0 : _b.rules) || [] })
                    }
                  })
                }
              })
              this.dataChanged = false
            })
            this.id = `FORM_${parseInt((Math.random() * 10000).toString(), 10).toString()}`
            /**
             * on field change
             * @param key
             * @param value
             */
            this.onChange = (key, value) => {
              // console.log('did change', key, value)
              this.data = Object.assign(Object.assign({}, this.data), { [key]: value })
              if (this.props.validateOnChange && this.validation[key]) {
                this.validation[key] = Object.assign(Object.assign({}, FormValidator_1.default.check(value, this.validation[key].rules)), { rules: this.validation[key].rules })
              }
              if (this.props.onChange) {
                this.props.onChange(key, value, this.data)
              }
              this.setState({})
            }
            /**
             * 验证所有fields
             */
            this.validate = () => {
              let validated = true
              this.props.fields.forEach((row) => {
                if (row.type !== 'FormButtons') {
                  row.fields.forEach((item) => {
                    if (item.display !== false && item.type !== 'render' && item.type !== 'button') {
                      const { key } = item
                      const value = this.data[key]
                      const result = FormValidator_1.default.check(value, this.validation[key].rules)
                      this.validation[key] = Object.assign(Object.assign({}, result), { rules: this.validation[key].rules })
                      if (!this.validation[key].validated) {
                        validated = false
                      }
                    }
                  })
                }
              })
              this.setState({})
              return validated
            }
            /**
             * on Submit
             * @param e
             */
            this.onSubmit = (e) => {
              if (e)
                e.preventDefault()
              if (!this.validate())
                return
              console.log('submit data', this.data)
              if (this.props.onSubmit)
                this.props.onSubmit(this.data)
            }
            /**
             * on Reset
             */
            this.onReset = () => {
              if (this.props.onReset)
                this.props.onReset()
            }
            /**
             * button click
             * @param type
             * @param cb
             */
            this.onButtonClick = (type, cb) => {
              if (type === 'submit') {
                this.onSubmit()
              }
              else if (type === 'reset') {
                this.onReset()
              }
              else if (cb) {
                cb(this.data)
              }
            }
            /**
             * 获取校验
             * @param key
             * @param value
             * @param rules
             */
            this.validateField = (key, value, rules = []) => {
              if (this.validation[key] !== undefined && value !== undefined) {
                return FormValidator_1.default.check(value, rules)
              }
              return { validated: true, msg: '' }
            }
            // add extendFields into form generating/mapping
            Field_1.addFields(this.props.extendFields)
          }

          componentDidMount() {
            this.mounted = true
            // extend validators into Form Validator
            FormValidator_1.default.extendValidators(this.props.extendValidators)
          }

          componentWillUnmount() {
            common_1.removeLabelStyleWidth(this.id)
            this.mounted = false
          }

          render() {
            const { fields, dataSource, labelDirection, labelWidth } = this.props
            this.isDataSourceChanged(dataSource)
            this.convertDataFromFields(fields, dataSource || {}) // data to fields
            common_1.addLabelStyleWidth(labelWidth, labelDirection, this.id)
            return (React.createElement(antd_1.Spin, { spinning: this.props.spinning },
              React.createElement('form', { onSubmit: this.onSubmit, id: this.id }, fields.map((field, idx) => {
                const key = `row_${idx}`
                const display = field.display === undefined ? true : field.display
                const type = field.type || 'field'
                if (!display)
                  return null
                return type === 'field'
                  ? (React.createElement(Row_1.default, Object.assign({ key: key }, field, {
                    data: this.data,
                    validation: this.validation,
                    labelDirection: labelDirection,
                    onChange: this.onChange,
                  })))
                  : (React.createElement(FooterButtons_1.default, Object.assign({ key: key }, field, { onButtonClick: this.onButtonClick })))
              }))))
          }
        }

        exports.default = RJForm
        RJForm.defaultProps = {
          spinning: false,
          validateOnChange: true,
          dataSource: {},
          extendValidators: [],
          extendFields: [],
          fields: [],
          labelDirection: 'horizontal',
          labelWidth: 80,
        }


        /***/
      }),

      /***/ './Form/utils/FormValidator.ts':
      /*!*************************************!*\
       !*** ./Form/utils/FormValidator.ts ***!
       \*************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        var __rest = (this && this.__rest) || function(s, e) {
          var t = {}
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p]
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]]
            }
          return t
        }
        Object.defineProperty(exports, '__esModule', { value: true })
// @flow
        const common_1 = __webpack_require__(/*! ./common */ './Form/utils/common.ts')

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
                    return false
                  const stringValue = value.toString()
                  if (stringValue.indexOf('.') !== -1) {
                    const p = stringValue.split('.')
                    if (p.length > 2)
                      return false
                    if (p[1].length > 2)
                      return false
                  }
                  return true
                },
                errorMsg: '必须要符合货币格式,如 10.23',
              },
              price_format: {
                validator: (value, length = 8) => {
                  let stringValue = ''
                  if (common_1.notEmptyValue(value))
                    stringValue = value.toString()
                  const reg = new RegExp(`^(\\+|\\-)?[0-9]{1,${length}}(\\.[0-9]{1,2})?$`)
                  return reg.test(stringValue)
                },
                errorMsg: (length = 6) => `最大${length}位整数，小数不超过2位`,
              },
              /* 整数部分最大值 */
              positive_max_length: {
                validator: (value, length) => {
                  if (parseFloat(value) !== value)
                    return false
                  const stringValue = value.toString()
                  if (stringValue && stringValue.length > length) {
                    if (stringValue.indexOf('.') !== -1) {
                      const p = stringValue.split('.')
                      if (p[0].length > length)
                        return false
                    }
                    else if (stringValue.length > length) {
                      return false
                    }
                  }
                  return true
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
                    return false
                  const reg = /^@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                  return reg.test(value)
                },
                errorMsg: '请输入正确的邮箱后缀(包括@)',
              },
              // 电子邮箱
              email: {
                validator: (value) => {
                  const reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                  return reg.test(value)
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
            }
          }

          extendValidators(validators) {
            validators.forEach((validator) => {
              const { name } = validator, rest = __rest(validator, ['name'])
              this.validators[name] = rest
            })
          }

          check(v, rules) {
            let value = v
            let success = { validated: true, msg: '' }
            if (!rules || !(rules instanceof Array)) {
              return success
            }
            if (typeof value === 'string') {
              value = value.trim()
            }
            rules.some(rule => {
              var _a
              let result = true
              let validator
              let sRule = []
              if (rule === 'required') {
                if (common_1.notEmptyValue(value))
                  value = value.toString()
                validator = this.validators[rule]
                result = validator.validator(value)
              }
              else if (common_1.notEmptyValue(value)) {
                if (rule.indexOf(':') !== -1) {
                  sRule = rule.split(':')
                  validator = this.validators[sRule[0]]
                  result = validator.validator(value, sRule[1])
                }
                else {
                  validator = this.validators[rule]
                  result = validator.validator(value)
                }
              }
              if (!result) {
                const err = (_a = validator) === null || _a === void 0 ? void 0 : _a.errorMsg
                success = {
                  validated: false,
                  msg: typeof err === 'function' ? err(sRule[1]) : err,
                }
                return true
              }
              return false
            })
            return success
          }
        }

        exports.default = new Validation()


        /***/
      }),

      /***/ './Form/utils/common.ts':
      /*!******************************!*\
       !*** ./Form/utils/common.ts ***!
       \******************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {

        'use strict'

        Object.defineProperty(exports, '__esModule', { value: true })
        exports.default = {}
        exports.notEmptyValue = (value) => (value !== '' && value !== undefined && value !== null)
        exports.simpleClone = (data) => JSON.parse(JSON.stringify(data))
        exports.removeLabelStyleWidth = (id) => {
          const attributeName = `form-label-width-${id}`
          const DOM = document.getElementById(attributeName)
          if (DOM)
            document.body.removeChild(DOM)
          return attributeName
        }
        exports.addLabelStyleWidth = (width, labelDirection, id) => {
          const attributeName = exports.removeLabelStyleWidth(id)
          if (labelDirection === 'horizontal') {
            const STYLE = document.createElement('style')
            STYLE.id = attributeName
            STYLE.innerHTML = `#${id} .ant-form-item-label { width: ${width}px; }`
            document.body.appendChild(STYLE)
          }
        }
        /**
         * 根据value数组获取数组对象[{label, value}]的多个label值
         */
        exports.getItemLabelsByValue = (items, value) => {
          const labels = []
          value.forEach(val => {
            const findItem = items.find(item => item.value === val)
            if (findItem) {
              labels.push(findItem.label)
            }
          })
          return labels.join('，')
        }
        /**
         * 根据value获取数组对象[{label, value}]的label值
         * @param items
         * @param value
         * @param mode
         * @return {any}
         */
        exports.getItemLabelByValue = (items, value, mode) => {
          let newItems = items
          if (!Array.isArray(items)) {
            newItems = []
            Object.keys(items).forEach(key => {
              const group = items[key]
              if (Array.isArray(group)) {
                newItems = [...newItems, ...group]
              }
            })
          }
          if (!mode) {
            const found = newItems.filter(item => item.value === value)
            if (found.length > 0) {
              return found[0].label
            }
          }
          else if (value && Array.isArray(value)) {
            const found = newItems.filter(item => value.indexOf(item.value) !== -1)
            if (found.length > 0) {
              return found.map(foundItem => foundItem.label).join(', ')
            }
          }
          return ''
        }
        /**
         * get Target value
         * @param e
         */
        exports.getTargetValue = (e) => {
          var _a
          const target = e && e.target
          let value
          if (target instanceof HTMLElement || exports.notEmptyValue((_a = target) === null || _a === void 0 ? void 0 : _a.value)) {
            value = target.value
          }
          else {
            value = e
          }
          return value
        }


        /***/
      }),

      /***/ 'antd':
      /*!***********************!*\
       !*** external "antd" ***!
       \***********************/
      /*! no static exports found */
      /***/ (function(module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_antd__

        /***/
      }),

      /***/ 'axios':
      /*!************************!*\
       !*** external "axios" ***!
       \************************/
      /*! no static exports found */
      /***/ (function(module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_axios__

        /***/
      }),

      /***/ 'memoize-one':
      /*!******************************!*\
       !*** external "memoize-one" ***!
       \******************************/
      /*! no static exports found */
      /***/ (function(module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_memoize_one__

        /***/
      }),

      /***/ 'moment':
      /*!*************************!*\
       !*** external "moment" ***!
       \*************************/
      /*! no static exports found */
      /***/ (function(module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_moment__

        /***/
      }),

      /***/ 'react':
      /*!************************!*\
       !*** external "react" ***!
       \************************/
      /*! no static exports found */
      /***/ (function(module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE_react__

        /***/
      }),

      /******/
    })
})
//#
// sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL0F1dG9Db21wbGV0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvQ2FzY2FkZXIudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvQ2hlY2tib3gudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvRGF0ZXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9JbnB1dE51bWJlci50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9JbnB1dFBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL1BpY1ByZXZpZXcuc2Nzcz9hZDBkIiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvUGljUHJldmlldy50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9SYWRpby50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9SYW5nZXBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9SZW5kZXIudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vRmllbGQvU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL1N3aXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9UZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9UaW1lcGlja2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0ZpZWxkL1VwbG9hZC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9GaWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vRm9ybS9Gb290ZXJCdXR0b25zL0J1dHRvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL0Zvb3RlckJ1dHRvbnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0Zvcm0vUm93LnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9Gb3JtL2luZGV4LnNjc3M/MTBlZSIsIndlYnBhY2s6Ly8vLi9Gb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9Gb3JtL3V0aWxzL0Zvcm1WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWVtb2l6ZS1vbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSx3REFBOEI7QUFDOUIsdURBQW1DO0FBV25DLG1CQUF5QixLQUFZO0lBQ25DLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7UUFDOUIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztTQUN4QztRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELE1BQU0sZ0JBQWdDLEVBQWhDLEVBQUUsS0FBSyxPQUF5QixFQUF2Qiw0QkFBdUI7SUFFdEMsT0FBTyxDQUNMLG9CQUFDLG1CQUFZLG9CQUNQLElBQUksSUFDUixRQUFRLEVBQUUsUUFBUSxJQUNsQixDQUNIO0FBQ0gsQ0FBQztBQWxCRCw0QkFrQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJELHdEQUE4QjtBQUM5Qix1REFBNkI7QUFrQjdCLE1BQU0sV0FBVyxHQUFzQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7QUFFeEYsa0JBQWUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtJQUM5QixNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUs7SUFDN0IsTUFBTSxnQkFNUyxFQU5ULEVBQ0osSUFBSSxHQUFHLFNBQVMsRUFDaEIsU0FBUyxHQUFHLEVBQUUsRUFDZCxPQUFPLEVBQ1AsS0FBSyxPQUVRLEVBRGIsNERBQ2E7SUFFZixJQUFJLFVBQVUsR0FBZSxTQUFTO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzFELElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2hCLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO0tBQ2hDO0lBRUQsT0FBTyxDQUNMLG9CQUFDLGFBQU0sa0JBQ0wsSUFBSSxFQUFFLFVBQVUsRUFDaEIsU0FBUyxFQUFFLEdBQUcsVUFBVSxJQUFJLFNBQVMsRUFBRSxFQUN2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUN4QixJQUFJLEdBRVAsS0FBSyxDQUNDLENBQ1Y7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRCx3REFBOEI7QUFDOUIsdURBQStCO0FBQy9CLDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFFbEMsU0FBUyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRO0lBQ3ZFLElBQUksS0FBSyxHQUFHLFVBQVU7SUFDdEIsSUFBSSxhQUFhLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDakQsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLElBQUksSUFBSSxFQUFFO1lBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN6QixLQUFLLElBQUksQ0FBQztZQUNWLE9BQU8sZ0JBQWdCLENBQ3JCLGFBQWEsRUFDYixJQUFJLENBQUMsUUFBUSxFQUNiLFVBQVUsRUFDVixRQUFRLENBQ1Q7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUI7SUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzdCLENBQUM7QUFFRCxTQUF3QixhQUFhLENBQUMsS0FBVTtJQUM5QyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLO0lBQ3ZDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSztJQUU5RCxNQUFNLE1BQU0sR0FBRyxDQUFDLGFBQWtCLEVBQUUsZUFBb0IsRUFBRSxFQUFFO1FBQzFELElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO1NBQy9DO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNLGdCQUFnQyxFQUFoQyxFQUFFLEtBQUssT0FBeUIsRUFBdkIsNEJBQXVCO0lBRXRDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLG9CQUFDLGVBQVEsb0JBQUssSUFBSSxJQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxJQUFJO0tBQ3hGO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDaEQsQ0FBQztBQWxCRCxnQ0FrQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNELHdEQUE4QjtBQUM5Qix5RkFBdUY7QUFDdkYsdURBQStCO0FBRS9CLFNBQXdCLGFBQWEsQ0FBQyxLQUFVO0lBQzlDLE1BQU0sRUFDSixLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQ2hDLEdBQUcsS0FBSztJQUNULE1BQU0sRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSztJQUUxRCxLQUFLO0lBQ0wsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztRQUV4QixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLENBQ3ZDLHNCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUMxRDtJQUVELE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7UUFDN0IsTUFBTSxRQUFRLEdBQUcsdUJBQWMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7UUFDeEIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE1BQU0sZ0JBQWdDLEVBQWhDLEVBQUUsS0FBSyxPQUF5QixFQUF2Qiw0QkFBdUI7SUFFdEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ2hCLDRCQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FDcEMsQ0FBQyxDQUFDLENBQUMsQ0FDRjtRQUNHLFlBQVksSUFBSSxDQUNmLG9CQUFDLGVBQVEsSUFDUCxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUM1QixRQUFRLEVBQUUsZ0JBQWdCLDBCQUdqQixDQUNaO1FBQ0Qsb0JBQUMsZUFBUSxDQUFDLEtBQUssb0JBQ1QsSUFBSSxJQUNSLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLE1BQU0sSUFDaEIsQ0FDRCxDQUNKO0FBQ0gsQ0FBQztBQXBERCxnQ0FvREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERELHdEQUE4QjtBQUM5QiwyREFBZ0M7QUFDaEMsdURBQWlDO0FBRWpDLHlGQUFrRTtBQUdsRSxlQUFxQixTQUFRLEtBQUssQ0FBQyxhQUFrQztJQUFyRTs7UUFDRSxXQUFNLEdBQUcsWUFBWTtRQUVyQixnQkFBVyxHQUFHLGtCQUFrQjtRQUVoQyxhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNwQixJQUFJLEtBQUssR0FBRyx1QkFBYyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLHNCQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2FBQ3pDO1lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzNCLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ25ELElBQUksWUFBWSxFQUFFO2dCQUNoQixLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDbEM7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUN0QjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7UUFDbEMsQ0FBQztJQXlCSCxDQUFDO0lBdkJDLE1BQU07UUFDSixNQUFNLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixLQUFLLEdBQ04sR0FBRyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUFjLEtBQUssRUFBakIseUNBQWlCO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFFcEQsT0FBTyxRQUFRO1lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FDQTtnQkFDRSxvQkFBQyxpQkFBVSxvQkFDTCxJQUFJLElBQ1IsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsVUFBVSxFQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFDdkIsQ0FDRCxDQUNKO0lBQ0wsQ0FBQztDQUNGO0FBOUNELDRCQThDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQsd0RBQThCO0FBQzlCLHVEQUE0QjtBQUU1Qix5RkFBbUQ7QUFHbkQsZUFBcUIsU0FBUSxLQUFLLENBQUMsYUFBa0M7SUFBckU7O1FBQ0UsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxLQUFLLEdBQUcsdUJBQWMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzNCLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ25ELElBQUksWUFBWSxFQUFFO2dCQUNoQixLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDbEM7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUN0QjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7UUFDbEMsQ0FBQztRQUVELGdCQUFXLEdBQUcsQ0FBQyxLQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sSUFBSTtZQUV2QixJQUFJLE1BQU0sR0FBRyxLQUFLO1lBQ2xCLElBQUksTUFBTTtnQkFBRSxNQUFNLEdBQUcsR0FBRyxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pDLElBQUksTUFBTTtnQkFBRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksTUFBTSxFQUFFO1lBRTFDLE9BQU8sTUFBTTtRQUNmLENBQUM7SUE4QkgsQ0FBQztJQTVCQyxNQUFNO1FBQ0osTUFBTSxFQUNKLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FDN0IsR0FBRyxJQUFJLENBQUMsS0FBSztRQUNkLE1BQU0sRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sS0FFSixLQUFLLEVBRFAsbURBQ087UUFDVCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUs7UUFDaEQsT0FBTyxRQUFRO1lBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQ0E7Z0JBQ0Usb0JBQUMsWUFBSyxrQkFDSixXQUFXLEVBQUMsb0JBQUssSUFDYixJQUFJLElBQ1IsTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsTUFBTSxFQUNkLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdkIsWUFBWSxFQUFFLFlBQVksSUFDMUIsQ0FDRCxDQUNKO0lBQ0wsQ0FBQztDQUNGO0FBckRELDRCQXFEQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RELHdEQUE4QjtBQUM5Qiw2RUFBMkI7QUFFM0IsbUJBQXlCLEtBQVU7SUFDakMsT0FBTyxDQUNMLG9CQUFDLGVBQUssb0JBQUssS0FBSyxJQUFFLElBQUksRUFBQyxRQUFRLElBQUcsQ0FDbkM7QUFDSCxDQUFDO0FBSkQsNEJBSUM7Ozs7Ozs7Ozs7Ozs7OztBQ1BELHdEQUE4QjtBQUM5Qiw2RUFBMkI7QUFFM0IsbUJBQXlCLEtBQVU7SUFDakMsT0FBTyxDQUNMLG9CQUFDLGVBQUssb0JBQUssS0FBSyxJQUFFLElBQUksRUFBQyxVQUFVLElBQUcsQ0FDckM7QUFDSCxDQUFDO0FBSkQsNEJBSUM7Ozs7Ozs7Ozs7OztBQ1BELHVDOzs7Ozs7Ozs7Ozs7OztBQ0FBLHdEQUE4QjtBQUM5Qix1REFBaUM7QUFFakMsNkVBQTBCO0FBRTFCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLO0FBVTFCOztHQUVHO0FBQ0gsU0FBd0IsWUFBWSxDQUNsQyxFQUNFLFFBQVEsR0FBRyxJQUFJLEVBQ2YsR0FBRyxHQUFHLEVBQUUsRUFDUixLQUFLLEdBQUcsRUFBRSxFQUNWLE9BQU8sR0FBRyxFQUFFLEVBQ1osTUFBTSxHQUNBO0lBRVIsSUFBSSxNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUksR0FBRyxFQUFFO1FBQ1AsTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztLQUMvQztJQUNELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM3QyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFFM0MsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLElBQUksTUFBTTtZQUFFLE1BQU0sRUFBRTtRQUNwQixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxNQUFNLFVBQVUsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtRQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDN0IsR0FBRyxJQUFJLENBQUM7UUFDUixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDdkMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixZQUFZO0lBQ2QsQ0FBQztJQUNELE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzdCLEdBQUcsSUFBSSxDQUFDO1FBQ1IsR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDcEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixZQUFZO0lBQ2QsQ0FBQztJQUVELE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtRQUNwQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN4QixVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDaEI7SUFFRCxPQUFPLENBQ0w7UUFDRyxRQUFRO2VBQ04sQ0FDRCw2QkFBSyxTQUFTLEVBQUMseUJBQXlCLElBQ3JDLE1BQU07aUJBQ0osR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBTyxFQUFFO2dCQUN0QixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQzVCLE9BQU8sQ0FDTCw2QkFDRSxJQUFJLEVBQUMsTUFBTSxFQUNYLFFBQVEsRUFBRSxHQUFHLEVBQ2IsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUMseUJBQXlCLEVBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQy9CLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQ2pDLEtBQUssRUFBRSxLQUFLO29CQUVaLDZCQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUNyQixDQUNQO1lBQ0gsQ0FBQyxDQUFDLENBRUEsQ0FDUDtRQUdBLE9BQU87ZUFDTCxDQUNELDZCQUFLLFNBQVMsRUFBQyw0QkFBNEI7Z0JBQ3pDLDZCQUFLLFNBQVMsRUFBQyx5REFBeUQ7b0JBQUMsb0JBQUMsV0FBSSxJQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFHLENBQU07Z0JBQ3hJLDZCQUFLLFNBQVMsRUFBQywrQkFBK0IsRUFBQyxPQUFPLEVBQUUsWUFBWSxHQUFJO2dCQUN4RSw2QkFBSyxTQUFTLEVBQUMsNkJBQTZCO29CQUMxQyw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsT0FBTyxFQUFFLFlBQVk7d0JBQzdELG9CQUFDLFdBQUksSUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFHLENBQ2pCO29CQUNMLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQ3BCLDZCQUFLLFNBQVMsRUFBQywwQkFBMEIsRUFBQyxPQUFPLEVBQUUsSUFBSTt3QkFDckQsb0JBQUMsV0FBSSxJQUFDLElBQUksRUFBQyxNQUFNLEdBQUcsQ0FDaEIsQ0FDUDtvQkFFQSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUNwQiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsT0FBTyxFQUFFLElBQUk7d0JBQ3JELG9CQUFDLFdBQUksSUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFHLENBQ2pCLENBQ1A7b0JBQ0QsNkJBQUssU0FBUyxFQUFDLDBCQUEwQixFQUFDLE9BQU8sRUFBRSxRQUFRO3dCQUN6RCxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRyxDQUNoQjtvQkFDTiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsT0FBTyxFQUFFLFlBQVk7d0JBQzdELG9CQUFDLFdBQUksSUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHLENBQ2hCLENBQ0Y7Z0JBRU4sNkJBQ0UsR0FBRyxFQUFDLFNBQVMsRUFDYixHQUFHLEVBQUUsR0FBRyxFQUNSLE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFnQyxHQUFHLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDOUYsU0FBUyxFQUFDLG1DQUFtQyxHQUM3QyxDQUNFLENBQ1AsQ0FFQSxDQUNKO0FBQ0gsQ0FBQztBQXBJRCwrQkFvSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpELHdEQUE4QjtBQUM5Qix5RkFBd0U7QUFDeEUsdURBQTRCO0FBRTVCLFNBQXdCLFVBQVUsQ0FBQyxLQUFVO0lBQzNDLE1BQU0sRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxHQUFHLEVBQUUsR0FDWCxHQUFHLEtBQUs7SUFDVCxNQUFNLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBRXBDLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7UUFDN0IsTUFBTSxRQUFRLEdBQUcsdUJBQWMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7UUFDeEIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE1BQU0sZ0JBQWdDLEVBQWhDLEVBQUUsS0FBSyxPQUF5QixFQUF2Qiw0QkFBdUI7SUFFdEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ2hCLDRCQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FDcEMsQ0FBQyxDQUFDLENBQUMsQ0FDRiw2QkFBSyxLQUFLLEVBQUUsS0FBSztRQUNmLG9CQUFDLFlBQUssQ0FBQyxLQUFLLG9CQUNOLElBQUksSUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxNQUFNLElBQ2hCLENBQ0UsQ0FDUDtBQUNILENBQUM7QUEvQkQsNkJBK0JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRCx3REFBOEI7QUFDOUIsMkRBQWdDO0FBQ2hDLHVEQUFpQztBQUNqQywrQ0FBK0M7QUFDL0MscUNBQXFDO0FBRXJDLHlGQUErRTtBQUcvRSxlQUFxQixTQUFRLEtBQUssQ0FBQyxhQUFrQztJQUFyRTs7UUFDRSxXQUFNLEdBQUcsWUFBWTtRQUVyQixnQkFBVyxHQUFHLGtCQUFrQjtRQUVoQyxhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNwQixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBRXJDLElBQUksS0FBSyxHQUFHLHVCQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksc0JBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixLQUFLLEdBQUc7d0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTt3QkFDaEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtxQkFDakU7aUJBQ0Y7cUJBQU07b0JBQ0wsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDakU7YUFDRjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcsSUFBSTthQUNiO1lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzNCLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ25ELElBQUksWUFBWSxFQUFFO2dCQUNoQixLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDbEM7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUN0QjtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7WUFFaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUNsQyxDQUFDO1FBRUQsZUFBVSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDL0MsT0FBTyxFQUFFO1FBQ1gsQ0FBQztRQUVELGFBQVEsR0FBRyxDQUFDLFNBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDN0Y7WUFDRCxPQUFPLElBQUk7UUFDYixDQUFDO0lBMkJILENBQUM7SUF6QkMsTUFBTTtRQUNKLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzdDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUFjLEtBQUssRUFBakIseUNBQWlCO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekUsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQzVCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRSxTQUFTLEdBQUcsb0JBQVcsQ0FBQyxLQUFLLENBQUM7WUFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLFFBQVE7WUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUNBO2dCQUNFLG9CQUFDLGlCQUFVLENBQUMsV0FBVyxvQkFDakIsSUFBSSxJQUNSLE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFLFNBQVMsRUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQ3ZCLENBQ0QsQ0FDSjtJQUNMLENBQUM7Q0FDRjtBQXpFRCw0QkF5RUM7Ozs7Ozs7Ozs7Ozs7OztBQzFFRCxNQUFNLE1BQU0sR0FBb0IsS0FBSyxDQUFDLEVBQUU7SUFDdEMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUs7SUFDdEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQzlCLCtDQUErQztJQUMvQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDdkUsQ0FBQztBQUVELGtCQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnJCLHdEQUE4QjtBQUM5Qix1REFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLGdDQUFnQztBQUVoQyx5RkFBdUU7QUFHdkUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxhQUFNO0FBQ25DLGVBQXFCLFNBQVEsS0FBSyxDQUFDLGFBQWtDO0lBQXJFOztRQUNFLGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFOztZQUNwQixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07WUFDNUIsSUFBSSxLQUFLO1lBQ1QsSUFBSSxNQUFNLFlBQVksV0FBVyxJQUFJLHNCQUFhLE9BQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUMsRUFBRTtnQkFDakUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO2FBQ3JCO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxDQUFDO2FBQ1Y7WUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDM0IsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDbkQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUNsQztZQUNELElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUNsQyxDQUFDO1FBRUQsZ0JBQVcsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzNCLE1BQU0sTUFBTSxHQUFHLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sUUFBUSxHQUFHLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsb0JBQUMsTUFBTSxJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUN2QyxJQUFJLENBQUMsS0FBSyxDQUNKLENBQ1Y7Z0JBQ0gsQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQ1Qsb0JBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFDM0IsUUFBUSxDQUNBLENBQ1o7WUFDSCxDQUFDLENBQUM7WUFDRixPQUFPLE1BQU07UUFDZixDQUFDO0lBMENILENBQUM7SUF4Q0MsTUFBTTtRQUNKLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzdDLE1BQU0sRUFDSixLQUFLLEdBQUcsRUFBRSxFQUNWLFdBQVcsR0FBRyxLQUFLLEVBQ25CLFVBQVUsR0FBRyxJQUFJLEVBQ2pCLGdCQUFnQixHQUFHLE9BQU8sRUFDMUIsVUFBVSxHQUFHLElBQUksRUFDakIsS0FBSyxLQUVILEtBQUssRUFEUCx1R0FDTztRQUVULE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJO1FBQ3JCLE9BQU8sUUFBUTtZQUNiLENBQUMsQ0FBQyw4QkFBTSxLQUFLLEVBQUUsRUFBRyxJQUFHLDRCQUFtQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQVE7WUFDcEUsQ0FBQyxDQUFDLENBQ0E7Z0JBQ0Usb0JBQUMsYUFBTSxvQkFDRCxJQUFJLElBQ1IsV0FBVyxFQUFFLFdBQVcsRUFDeEIsS0FBSyxFQUFFLEtBQUssRUFDWixnQkFBZ0IsRUFBRSxnQkFBZ0IsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQzNFLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFFckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUNqRCxvQkFBQyxNQUFNLElBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFFakMsSUFBSSxDQUFDLEtBQUssQ0FDSixDQUNWLENBQUM7b0JBQ0EsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQzNDLENBQ1IsQ0FDSjtJQUNMLENBQUM7Q0FDRjtBQWpGRCw0QkFpRkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZELHdEQUE4QjtBQUM5Qix1REFBNkI7QUFHN0IsZUFBcUIsU0FBUSxLQUFLLENBQUMsU0FBOEI7SUFBakU7O1FBQ0UsYUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQzthQUM5QztZQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDMUM7UUFDSCxDQUFDO0lBbUJILENBQUM7SUFqQkMsTUFBTTtRQUNKLE1BQU0sRUFDSixLQUFLLEdBQ04sR0FBRyxJQUFJLENBQUMsS0FBSztRQUVkLE1BQU0scUJBQXVDLEVBQXZDLEVBQUUsT0FBTyxPQUE4QixFQUE1Qiw4QkFBNEI7UUFFN0MsT0FBTyxDQUNMO1lBQ0Usb0JBQUMsYUFBTSxvQkFDRCxJQUFJLElBQ1IsT0FBTyxFQUFFLEtBQUssRUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFDdkIsQ0FDRCxDQUNKO0lBQ0gsQ0FBQztDQUNGO0FBM0JELDRCQTJCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQsd0RBQThCO0FBQzlCLHVEQUE0QjtBQUU1Qix5RkFBa0Q7QUFHbEQsZUFBcUIsU0FBUSxLQUFLLENBQUMsYUFBa0M7SUFBckU7O1FBQ0UsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7O1lBQ3BCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtZQUM1QixJQUFJLEtBQUs7WUFDVCxJQUFJLE1BQU0sWUFBWSxXQUFXLElBQUksc0JBQWEsT0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNqRSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUs7YUFDckI7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLENBQUM7YUFDVjtZQUNELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUMzQixNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUNuRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDdEI7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFzQkgsQ0FBQztJQXBCQyxNQUFNO1FBQ0osTUFBTSxFQUNKLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUN2QixHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ2QsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLO1FBQ2hELE1BQU0sRUFBRSxLQUFLLEtBQWMsS0FBSyxFQUFqQiwrQkFBaUI7UUFDaEMsT0FBTyxRQUFRO1lBQ2IsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FDQTtnQkFDRSxvQkFBQyxZQUFLLENBQUMsUUFBUSxrQkFDYixXQUFXLEVBQUMsb0JBQUssSUFDYixJQUFJLElBQ1IsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdkIsWUFBWSxFQUFFLFlBQVksSUFDMUIsQ0FDRCxDQUNKO0lBQ0wsQ0FBQztDQUNGO0FBekNELDRCQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0Qsd0RBQThCO0FBQzlCLDJEQUFnQztBQUNoQyx1REFBaUM7QUFDakMsK0NBQStDO0FBQy9DLHFDQUFxQztBQUVyQyx5RkFBK0U7QUFHL0UsZUFBcUIsU0FBUSxLQUFLLENBQUMsYUFBa0M7SUFBckU7O1FBQ0UsV0FBTSxHQUFHLE9BQU87UUFFaEIsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDcEIsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBRWpELElBQUksS0FBSyxHQUFHLHVCQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksc0JBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3JDO1lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzNCLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ25ELElBQUksWUFBWSxFQUFFO2dCQUNoQixLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDbEM7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUN0QjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7UUFDbEMsQ0FBQztRQUVELGVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQy9DLE9BQU8sRUFBRTtRQUNYLENBQUM7SUF1QkgsQ0FBQztJQXJCQyxNQUFNO1FBQ0osTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDN0MsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssS0FBYyxLQUFLLEVBQWpCLHlDQUFpQjtRQUV0RCxNQUFNLFNBQVMsR0FBRyxzQkFBYSxDQUFDLEtBQUssQ0FBQztZQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxTQUFTO1FBRWIsT0FBTyxRQUFRO1lBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FDQTtnQkFDRSxvQkFBQyxpQkFBVSxrQkFDVCxLQUFLLEVBQUUsU0FBUyxJQUNaLElBQUksSUFDUixNQUFNLEVBQUUsTUFBTSxFQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUN2QixDQUNELENBQ0o7SUFDTCxDQUFDO0NBQ0Y7QUFqREQsNEJBaURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFERCx3REFBOEI7QUFDOUIsdURBQTJDO0FBQzNDLDBEQUF5QjtBQUN6Qiw0RkFBcUM7QUFFckM7OztHQUdHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsQ0FDbkI7SUFDRSxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRztJQUNwQiw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCLG1CQUFTLENBQ3JDLENBQ1A7QUFDRCxNQUFNLGdCQUFnQixHQUFHLENBQ3ZCLG9CQUFDLGFBQU07SUFDTCxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFDLFFBQVEsR0FBRzt5QkFFZixDQUNWO0FBbUNELE1BQXFCLFdBQVksU0FBUSxLQUFLLENBQUMsYUFBNEM7SUFBM0Y7O1FBVUUsVUFBSyxHQUFHO1lBQ04sY0FBYyxFQUFFLEtBQUs7WUFDckIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUVELGFBQVEsR0FBRyxDQUFDLElBQVMsRUFBUSxFQUFFOztZQUM3QixvQ0FBb0M7WUFDcEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ2xFLElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRWpDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxlQUFlLEVBQUU7d0JBQ25CLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUNBQ1IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUNoQixHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3ZDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FDMUM7cUJBQ0Y7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQ0FDUixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FDN0I7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJO1lBQ2IsQ0FBQyxDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO29CQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ3JEO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDaEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7Z0JBQ3ZDLFFBQVEsR0FBRyxFQUFFO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsdUJBQUksQ0FBQyxJQUFJLDBDQUFFLFFBQVEsMENBQUUsT0FBTywwQ0FBRSxPQUFPLEtBQUksWUFBWSxFQUFFLENBQUM7YUFDbkY7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM1Qix1QkFBdUI7Z0JBQ3ZCLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDakQsa0NBQWtDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1lBQzlDLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbkI7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsUUFBUSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQztRQUVELGNBQVMsR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakUsQ0FBQztRQUVELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM1RCxDQUFDO1FBRUQsa0JBQWEsR0FBRyxDQUNkLEVBQ0UsSUFBSSxFQUNKLFNBQVMsRUFDVCxPQUFPLEVBQ1AsVUFBVSxHQUNYLEVBQ0QsRUFBRTtZQUNGLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQzVDLHNCQUFzQjtZQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUMvQixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7WUFFN0IsZUFBSztpQkFDRixJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRTtnQkFDdEIsZ0JBQWdCLEVBQUUsVUFBVTtnQkFDNUIsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2FBQ3ZCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckIsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUNwQyxPQUFPLEVBQUU7WUFDWCxDQUFDLENBQUM7WUFDSixPQUFPO2dCQUNMLEtBQUs7b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDdEMsQ0FBQzthQUNGO1FBQ0gsQ0FBQztJQTZHSCxDQUFDO0lBM0dDLFlBQVksQ0FBQyxJQUFTLEVBQUUsSUFBWTtRQUNsQyx3Q0FBd0M7UUFDeEMsTUFBTSxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7UUFDN0MsNkNBQTZDO1FBQzdDLDJEQUEyRDtRQUMzRCxtREFBbUQ7UUFDbkQsNkRBQTZEO1FBQzdELG1CQUFtQjtRQUNuQixNQUFNO1FBQ04sSUFBSTtRQUNKLGFBQWE7UUFDYixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsV0FBVztRQUM1RCxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2RCw0Q0FBNEM7WUFDNUMsT0FBTyxLQUFLO1NBQ2I7UUFFRCxTQUFTO1FBQ1QsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ2xCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFlBQVksSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUMvQixPQUFPLElBQUk7YUFDWjtZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztZQUMvQyxvQ0FBb0M7WUFDcEMsT0FBTyxLQUFLO1NBQ2I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxFQUNKLEtBQUssR0FBRyxFQUFFLEVBQ1YsUUFBUSxFQUNSLEtBQUssR0FDTixHQUFHLElBQUksQ0FBQyxLQUFLO1FBRWQsTUFBTSxFQUNKLFFBQVEsR0FBRyxFQUFFLEVBQ2IsUUFBUSxHQUFHLE1BQU0sRUFDakIsUUFBUSxHQUFHLEtBQUssRUFDaEIsZ0JBQWdCLEdBQUcsSUFBSSxFQUN2QixRQUFRLEdBQUcsY0FBYyxFQUN6QixPQUFPLEdBQUcsRUFBRSxHQUNiLEdBQUcsS0FBSztRQUNULHNCQUFzQjtRQUd0QixNQUFNLE1BQU0sR0FBRyxRQUFRLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtRQUM1RSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsTUFBTSxVQUFVLEdBQUcsRUFBRTtRQUNyQixXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFOztZQUM1QixVQUFVLENBQUMsSUFBSSxPQUFDLE9BQU8sMENBQUUsR0FBRyxDQUFDO1FBQy9CLENBQUMsQ0FBQztRQUVGLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFDakIsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRTtvQkFDckIsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7YUFDRjtZQUVELE9BQU8sSUFBSTtRQUNiLENBQUMsQ0FBQztRQUVGLE1BQU0sRUFBRSxLQUFLLEtBQWMsS0FBSyxFQUFqQjs7b0JBQWlCO1FBRWhDLDREQUE0RDtRQUM1RCxPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtZQUNsQyxvQkFBQyxhQUFNLG9CQUNELElBQUksSUFDUixHQUFHLEVBQUUsUUFBUSxFQUNiLElBQUksRUFBRSxRQUFRLEVBQ2QsT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsUUFBUSxFQUFFLFdBQVcsRUFDckIsY0FBYyxRQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUN2RCxRQUFRLEVBQUUsUUFBUSxFQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEtBRWhDLEtBQUssQ0FBQyxNQUFNLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQzlDO1lBRVIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksZ0JBQWdCLElBQUksQ0FDMUMsNkJBQUssU0FBUyxFQUFDLGNBQWMsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBTyxDQUMxRDtZQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLENBQzVCLG9CQUFDLG9CQUFVLElBQ1QsR0FBRyxFQUFFLFVBQVUsRUFDZixRQUFRLEVBQUUsS0FBSyxFQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQ2hDLENBQ0gsQ0FDRyxDQUNQO0lBQ0gsQ0FBQzs7QUFoTkgsOEJBaU5DO0FBaE5RLHdCQUFZLEdBQUc7QUFDcEIsV0FBVztBQUNYLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQixLQUFLO0NBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RILHdEQUE4QjtBQUU5QixnRkFBNkI7QUFDN0IsNkVBQTJCO0FBQzNCLGdGQUE2QjtBQUM3QixnRkFBNkI7QUFDN0IsNEZBQXFDO0FBQ3JDLCtGQUF1QztBQUN2Qyw0RkFBcUM7QUFDckMsc0ZBQXNDO0FBQ3RDLGdGQUFnQztBQUNoQyxrR0FBeUM7QUFDekMscUdBQTJDO0FBQzNDLCtGQUF1QztBQUN2QyxzRkFBaUM7QUFDakMsNkVBQTJCO0FBQzNCLHNGQUFpQztBQUNqQyxnRkFBNkI7QUFFN0IsTUFBTSxHQUFHLEdBQUc7SUFDVixNQUFNLEVBQUUsZ0JBQU07SUFDZCxNQUFNLEVBQUUsZ0JBQU07SUFDZCxLQUFLLEVBQUUsZUFBSztJQUNaLE1BQU0sRUFBRSxnQkFBTTtJQUNkLE1BQU0sRUFBRSxnQkFBTTtJQUNkLFVBQVUsRUFBRSxvQkFBVTtJQUN0QixXQUFXLEVBQUUscUJBQVc7SUFDeEIsVUFBVSxFQUFFLG9CQUFVO0lBQ3RCLFFBQVEsRUFBRSxrQkFBYTtJQUN2QixhQUFhLEVBQUUsdUJBQWE7SUFDNUIsV0FBVyxFQUFFLHFCQUFXO0lBQ3hCLFFBQVEsRUFBRSxrQkFBUTtJQUNsQixLQUFLLEVBQUUsZUFBSztJQUNaLFFBQVEsRUFBRSxrQkFBUTtJQUNsQixNQUFNLEVBQUUsZ0JBQVM7SUFDakIsWUFBWSxFQUFFLHNCQUFZO0NBQzNCO0FBRUQsdUJBQXVCO0FBQ1YsaUJBQVMsR0FBRyxDQUFDLFlBQWdDLEVBQUUsRUFBRSxDQUFDLENBQzdELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUU7SUFDaEQsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxXQUFXO0lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTO0FBQ3ZCLENBQUMsQ0FBQyxDQUNIO0FBRUQsZUFBZTtBQUNmLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSTtBQUt4RCxrQkFBZSxDQUFDLEtBQVksRUFBRSxFQUFFO0lBQzlCLE1BQU0sRUFBRSxJQUFJLEtBQWMsS0FBSyxFQUFqQiw4QkFBaUI7SUFDL0IsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNwQyxPQUFPLFNBQVM7UUFDZCxDQUFDLENBQUMsb0JBQUMsU0FBUyxvQkFBSyxJQUFJLEVBQUk7UUFDekIsQ0FBQyxDQUFDLElBQUk7QUFDVixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFERCx3REFBOEI7QUFDOUIsc0NBQXNDO0FBQ3RDLGdDQUFnQztBQUNoQyx1REFBNkI7QUFVN0IsTUFBTSxXQUFXLEdBQXNCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUV4RixtQkFBeUIsS0FBWTtJQUNuQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLO0lBQ3JDLE9BQU8sQ0FDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZSxFQUFFLEdBQVcsRUFBRSxFQUFFO1FBQzFDLE1BQU0sRUFDSixHQUFHLEVBQ0gsS0FBSyxHQUFHLEVBQUUsRUFDVixPQUFPLEdBQUcsSUFBSSxHQUNmLEdBQUcsTUFBTTtRQUVWLE1BQU0sdUJBT2dCLEVBUGhCLEVBQ0osSUFBSSxHQUFHLFNBQVMsRUFDaEIsU0FBUyxHQUFHLEVBQUUsRUFDZCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssR0FBRyxFQUFFLE9BRVUsRUFEcEIscUVBQ29CO1FBRXRCLElBQUksVUFBZTtRQUNuQixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUMxRCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTztZQUN2QixLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU07U0FDckI7UUFFRCxPQUFPLE9BQU87WUFDWixDQUFDLENBQUMsQ0FDQSw4QkFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUN6QixHQUFHLEdBQUcsQ0FBQyxJQUFJLDhCQUFNLFNBQVMsRUFBQyxzQ0FBc0MsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUk7Z0JBQy9GLG9CQUFDLGFBQU0sa0JBQ0wsSUFBSSxFQUFFLFVBQVUsRUFDaEIsU0FBUyxFQUFFLFNBQVMsSUFDaEIsSUFBSSxJQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FFL0MsS0FBSyxDQUNDO2dCQUVSLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUN0QixDQUNSO1lBQ0QsQ0FBQyxDQUFDLElBQUk7SUFDVixDQUFDLENBQUMsQ0FDSDtBQUNILENBQUM7QUFqREQsNEJBaURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRCx3REFBOEI7QUFDOUIsdUdBQXVDO0FBT3ZDLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosU0FBd0IsYUFBYSxDQUFDLEtBQVk7SUFDaEQsTUFBTSxFQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0wsSUFBSSxLQUVGLEtBQUssRUFEUCxnREFDTztJQUNULE1BQU0sWUFBWTtRQUNoQiwrQ0FBK0M7UUFDL0MsU0FBUyxFQUFFLEtBQUssSUFBSSxRQUFRLElBQ3pCLEtBQUssQ0FDVDtJQUNELE9BQU8sQ0FDTCw2QkFDRSxTQUFTLEVBQUMsZ0NBQWdDLEVBQzFDLEtBQUssRUFBRSxZQUFZO1FBRW5CLG9CQUFDLHFCQUFXLG9CQUNOLElBQUksRUFDUixDQUNFLENBQ1A7QUFDSCxDQUFDO0FBdEJELGdDQXNCQztBQUVELGFBQWEsQ0FBQyxZQUFZLEdBQUc7SUFDM0IsT0FBTyxFQUFFLElBQUk7SUFDYixLQUFLLEVBQUUsRUFBRTtDQUNWOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Qsd0RBQThCO0FBQzlCLHVEQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUNsQyw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUU5Qiw2RUFBMkQ7QUFFM0QsNkVBQTJCO0FBVTNCLGtCQUFlLENBQUMsS0FBWSxFQUFPLEVBQUU7SUFDbkMsTUFBTSxFQUNKLE1BQU0sR0FBRyx1QkFBYyxFQUN2QixJQUFJLEVBQ0osU0FBUyxHQUFHLEVBQUUsRUFDZCxNQUFNLEVBQ04sSUFBSSxFQUNKLFFBQVEsRUFDUixVQUFVLEVBQ1YsY0FBYyxHQUNmLEdBQUcsS0FBSztJQUVULE9BQU8sQ0FDTCxvQkFBQyxVQUFHLElBQUMsTUFBTSxFQUFFLE1BQU07UUFDakIsNkJBQUssU0FBUyxFQUFFLEdBQUcsU0FBUyxJQUFJLGNBQWMsRUFBRSxJQUc3QyxJQUFJLEtBQUssYUFBYSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDMUQsTUFBTSxFQUNKLEdBQUcsRUFDSCxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxxQkFBWSxFQUNqQyxNQUFNLEdBQUcsQ0FBQyxFQUNWLEtBQUssRUFDTCxPQUFPLEdBQUcsSUFBSSxHQUNmLEdBQUcsS0FBSztZQUVULE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUs7WUFFcEMsT0FBTyxPQUFPO2dCQUNaLENBQUMsQ0FBQyxDQUNBLG9CQUFDLFVBQUcsSUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM3QyxvQkFBQyxXQUFJLENBQUMsSUFBSSxJQUNSLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUMxQixLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQzFFLFFBQVEsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDbkQsY0FBYyxFQUNaLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDN0MsQ0FBQyxDQUFDLE9BQU87NEJBQ1QsQ0FBQyxDQUFDLEVBQUUsRUFFUixJQUFJLEVBQ0YsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUM3QyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7NEJBQ3JCLENBQUMsQ0FBQyxFQUFFO3dCQUdSLG9CQUFDLGVBQUssb0JBQ0EsS0FBSyxJQUNULElBQUksRUFBRSxHQUFHLEVBQ1QsR0FBRyxFQUFFLEdBQUcsRUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQ2hCO3dCQUNELEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ1gsQ0FDUixDQUNQO2dCQUNELENBQUMsQ0FBQyxJQUFJO1FBQ1YsQ0FBQyxDQUFDLENBQ0UsQ0FDRixDQUNQO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZELGtCQUFlLEVBQUU7QUFFSixvQkFBWSxHQUFHLENBQUM7QUFDaEIsc0JBQWMsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7QUNIaEMsdUM7Ozs7Ozs7Ozs7Ozs7O0FDQUEsd0RBQThCO0FBQzlCLDRFQUFpQztBQUNqQyx1REFBMkI7QUFDM0IsaUZBQXVDO0FBQ3ZDLDBHQUFpRDtBQUNqRCxpRUFBdUI7QUFFdkIseUZBQThFO0FBQzlFLHFHQUEyQztBQUUzQyw2REFBcUI7QUFJckIsTUFBcUIsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUE2QjtJQThEckUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQztRQW5EZCxZQUFPLEdBQUcsS0FBSztRQUVmLFNBQUksR0FBRyxFQUFFLEVBQUMsU0FBUztRQUVuQixnQkFBVyxHQUFHLEtBQUs7UUFFbkIsZUFBVSxHQUFHLEVBQUUsRUFBQyxPQUFPO1FBRXZCOztXQUVHO1FBQ0gsd0JBQW1CLEdBQUcscUJBQU8sQ0FBQyxDQUFDLFVBQWMsRUFBRSxFQUFFO1lBQy9DLHlCQUF5QjtZQUN6Qiw4REFBOEQ7WUFDOUQsNkRBQTZEO1lBQzdELDBCQUEwQjtZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksSUFBSSxLQUE4QjtZQUV6RCxPQUFPLElBQUksQ0FBQyxXQUFXO1FBQ3pCLENBQUMsQ0FBQztRQUVGOzs7V0FHRztRQUNILDBCQUFxQixHQUFHLHFCQUFPLENBQUMsQ0FBQyxNQUFrQixFQUFFLFVBQWUsRUFBRSxFQUFFO1lBQ3RFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs7d0JBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7NEJBQzlFLHFDQUFxQzs0QkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVc7Z0NBQ3BDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQ0FDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs0QkFFdkIsc0NBQXNDOzRCQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBSSxDQUFDLEtBQUssMENBQUUsS0FBSyxLQUFJLEVBQUUsQ0FBQzs0QkFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUNwQixJQUFJLEtBQ1AsS0FBSyxFQUFFLFdBQUksQ0FBQyxLQUFLLDBDQUFFLEtBQUssS0FBSSxFQUFFLEdBQy9CO3lCQUNGO29CQUNILENBQUMsQ0FBQztpQkFDSDtZQUNILENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUMxQixDQUFDLENBQUM7UUFFRixPQUFFLEdBQUcsUUFBUSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFtQjFFOzs7O1dBSUc7UUFDSCxhQUFRLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVSxFQUFRLEVBQUU7WUFDM0Msd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLG1DQUNKLElBQUksQ0FBQyxJQUFJLEtBQ1osQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQ2I7WUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUNBQ2YsdUJBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQ3pELEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FDbEM7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMzQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRDs7V0FFRztRQUNILGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxJQUFJLFNBQVMsR0FBRyxJQUFJO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO3dCQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOzRCQUM5RSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTs0QkFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7NEJBQzVCLE1BQU0sTUFBTSxHQUFHLHVCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFFckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUNBQ2YsTUFBTSxLQUNULEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FDbEM7NEJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO2dDQUNuQyxTQUFTLEdBQUcsS0FBSzs2QkFDbEI7eUJBQ0Y7b0JBQ0gsQ0FBQyxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDakIsT0FBTyxTQUFTO1FBQ2xCLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxhQUFRLEdBQUcsQ0FBQyxDQUFxQyxFQUFRLEVBQUU7WUFDekQsSUFBSSxDQUFDO2dCQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTTtZQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRXJDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsWUFBTyxHQUFHLEdBQVMsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUM5QyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILGtCQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBYSxFQUFRLEVBQUU7WUFDcEQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFO2FBQ2hCO2lCQUFNLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDM0IsSUFBSSxDQUFDLE9BQU8sRUFBRTthQUNmO2lCQUFNLElBQUksRUFBRSxFQUFFO2dCQUNiLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2Q7UUFDSCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxrQkFBYSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVUsRUFBRSxRQUF1QixFQUFFLEVBQUUsRUFBRTtZQUNyRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzdELE9BQU8sdUJBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzthQUN6QztZQUNELE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDckMsQ0FBQztRQWhIQyxnREFBZ0Q7UUFDaEQsaUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ25CLHdDQUF3QztRQUN4Qyx1QkFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDN0QsQ0FBQztJQUVELG9CQUFvQjtRQUNsQiw4QkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztJQUN0QixDQUFDO0lBcUdELE1BQU07UUFDSixNQUFNLEVBQ0osTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxHQUMvQyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBQyxpQkFBaUI7UUFDdEUsMkJBQWtCLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXZELE9BQU8sQ0FDTCxvQkFBQyxXQUFJLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUNqQyw4QkFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBQzlDLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxFQUFFO2dCQUN4QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFDbEUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxPQUFPO2dCQUNsQyxJQUFJLENBQUMsT0FBTztvQkFBRSxPQUFPLElBQUk7Z0JBRXpCLE9BQU8sSUFBSSxLQUFLLE9BQU87b0JBQ3JCLENBQUMsQ0FBQyxDQUNBLG9CQUFDLGFBQUcsa0JBQ0YsR0FBRyxFQUFFLEdBQUcsSUFDSixLQUFLLElBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQzNCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUN2QixDQUNIO29CQUNELENBQUMsQ0FBQyxDQUNBLG9CQUFDLHVCQUFhLGtCQUNaLEdBQUcsRUFBRSxHQUFHLElBQ0osS0FBSyxJQUNULGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxJQUNqQyxDQUNIO1lBQ0wsQ0FBQyxDQUFDLENBQ0csQ0FDRixDQUNSO0lBQ0gsQ0FBQzs7QUF6TkgseUJBME5DO0FBek5RLG1CQUFZLEdBQUc7SUFDcEIsUUFBUSxFQUFFLEtBQUs7SUFDZixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFVBQVUsRUFBRSxFQUFFO0lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixZQUFZLEVBQUUsRUFBRTtJQUNoQixNQUFNLEVBQUUsRUFBRTtJQUNWLGNBQWMsRUFBRSxZQUFZO0lBQzVCLFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJILFFBQVE7QUFDUiwrRUFBd0M7QUFHeEMsTUFBTSxVQUFVO0lBQWhCO1FBQ0UsZUFBVSxHQUFlO1lBQ3ZCLEtBQUs7WUFDTCxRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsc0JBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzlFLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU07Z0JBQ3JGLFFBQVEsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsUUFBUSxNQUFNLEVBQUU7YUFDL0M7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU07Z0JBQ3JGLFFBQVEsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsUUFBUSxNQUFNLEVBQUU7YUFDL0M7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU07Z0JBQ3RGLFFBQVEsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsUUFBUSxNQUFNLEVBQUU7YUFDL0M7WUFDRCxLQUFLO1lBQ0wsTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BELFFBQVEsRUFBRSxhQUFhO2FBQ3hCO1lBQ0QsS0FBSztZQUNMLE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELE9BQU87WUFDUCxHQUFHLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxRQUFRLEVBQUUsT0FBTzthQUNsQjtZQUNELEtBQUs7WUFDTCxlQUFlLEVBQUU7Z0JBQ2YsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDaEQsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxPQUFPO1lBQ1AsWUFBWSxFQUFFO2dCQUNaLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2pELFFBQVEsRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsTUFBTTtZQUNOLEdBQUcsRUFBRTtnQkFDSCxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVE7Z0JBQzFFLFFBQVEsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFVBQVUsUUFBUSxFQUFFO2FBQ3JEO1lBQ0QsS0FBSztZQUNMLFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVE7Z0JBQ3pFLFFBQVEsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sUUFBUSxFQUFFO2FBQ2xEO1lBQ0QsT0FBTztZQUNQLEdBQUcsRUFBRTtnQkFDSCxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVE7Z0JBQzFFLFFBQVEsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFVBQVUsUUFBUSxFQUFFO2FBQ3JEO1lBQ0QsS0FBSztZQUNMLFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVE7Z0JBQ3pFLFFBQVEsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLE9BQU8sUUFBUSxFQUFFO2FBQ2xEO1lBQ0QsUUFBUTtZQUNSLEtBQUssRUFBRTtnQkFDTCxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUFFLE9BQU8sS0FBSztvQkFFbkMsTUFBTSxXQUFXLEdBQVcsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDNUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUNuQyxNQUFNLENBQUMsR0FBYSxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUsT0FBTyxLQUFLO3dCQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFBRSxPQUFPLEtBQUs7cUJBQ2xDO29CQUNELE9BQU8sSUFBSTtnQkFDYixDQUFDO2dCQUNELFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7WUFFRCxZQUFZLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLFNBQWMsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pDLElBQUksV0FBVyxHQUFHLEVBQUU7b0JBQ3BCLElBQUksc0JBQWEsQ0FBQyxLQUFLLENBQUM7d0JBQUUsV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ3hELE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLHNCQUFzQixNQUFNLG9CQUFvQixDQUFDO29CQUN4RSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELFFBQVEsRUFBRSxDQUFDLFNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLE1BQU0sYUFBYTthQUN4RDtZQUVELGFBQWE7WUFDYixtQkFBbUIsRUFBRTtnQkFDbkIsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLE1BQWMsRUFBRSxFQUFFO29CQUN4QyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLO3dCQUFFLE9BQU8sS0FBSztvQkFDN0MsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDcEMsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7d0JBQzlDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDbkMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNO2dDQUFFLE9BQU8sS0FBSzt5QkFDdkM7NkJBQU0sSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTs0QkFDdEMsT0FBTyxLQUFLO3lCQUNiO3FCQUNGO29CQUNELE9BQU8sSUFBSTtnQkFDYixDQUFDO2dCQUNELFFBQVEsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsVUFBVSxNQUFNLEVBQUU7YUFDakQ7WUFFRCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM5RCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCO1lBQ0QsU0FBUztZQUNULFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLEtBQUs7d0JBQUUsT0FBTyxLQUFLO29CQUN4QixNQUFNLEdBQUcsR0FBRyx5RUFBeUU7b0JBQ3JGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtZQUNELE9BQU87WUFDUCxLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7b0JBQzNCLE1BQU0sR0FBRyxHQUFHLHNJQUFzSTtvQkFDbEosT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCxRQUFRLEVBQUUsVUFBVTthQUNyQjtZQUNELE1BQU07WUFDTixRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuRSxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCO1lBQ0QsS0FBSztZQUNMLFFBQVEsRUFBRTtnQkFDUixTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLGlGQUFpRixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzNILFFBQVEsRUFBRSx5QkFBeUI7YUFDcEM7WUFDRCxNQUFNO1lBQ04sT0FBTyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsMENBQTBDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDcEYsUUFBUSxFQUFFLFVBQVU7YUFDckI7U0FDRjtJQXFESCxDQUFDO0lBbkRDLGdCQUFnQixDQUFDLFVBQWtDO1FBQ2pELFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUEwQixFQUFRLEVBQUU7WUFDdEQsTUFBTSxFQUFFLElBQUksS0FBYyxTQUFTLEVBQXJCLGtDQUFxQjtZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDOUIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFrQixFQUFFLEtBQWU7UUFDdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUNiLElBQUksT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBRTFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLE9BQU87U0FDZjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFO1NBQ3JCO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs7WUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSTtZQUNqQixJQUFJLFNBQTBCO1lBQzlCLElBQUksS0FBSyxHQUFVLEVBQUU7WUFFckIsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUN2QixJQUFJLHNCQUFhLENBQUMsS0FBSyxDQUFDO29CQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUNwQztpQkFBTSxJQUFJLHNCQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlDO3FCQUFNO29CQUNMLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDakMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2lCQUNwQzthQUNGO1lBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxNQUFNLEdBQUcsU0FBRyxTQUFTLDBDQUFFLFFBQVE7Z0JBQy9CLE9BQU8sR0FBRztvQkFDUixTQUFTLEVBQUUsS0FBSztvQkFDaEIsR0FBRyxFQUFFLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO2lCQUNyRDtnQkFDRCxPQUFPLElBQUk7YUFDWjtZQUNELE9BQU8sS0FBSztRQUNkLENBQUMsQ0FBQztRQUNGLE9BQU8sT0FBTztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDM00vQixrQkFBZSxFQUFFO0FBRUoscUJBQWEsR0FBRyxDQUFDLEtBQVUsRUFBVyxFQUFFLENBQUMsQ0FDcEQsS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQ3REO0FBRVksbUJBQVcsR0FBRyxDQUFJLElBQU8sRUFBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWpFLDZCQUFxQixHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsRUFBRTtJQUM5QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFJLEdBQUc7UUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDdkMsT0FBTyxhQUFhO0FBQ3RCLENBQUM7QUFFWSwwQkFBa0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxjQUF5QyxFQUFFLEVBQVUsRUFBRSxFQUFFO0lBQ3pHLE1BQU0sYUFBYSxHQUFHLDZCQUFxQixDQUFDLEVBQUUsQ0FBQztJQUUvQyxJQUFJLGNBQWMsS0FBSyxZQUFZLEVBQUU7UUFDbkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsS0FBSyxDQUFDLEVBQUUsR0FBRyxhQUFhO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLGtDQUFrQyxLQUFLLE9BQU87UUFDdEUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ1UsNEJBQW9CLEdBQUcsQ0FDbEMsS0FBaUIsRUFDakIsS0FBaUIsRUFDQyxFQUFFO0lBQ3BCLE1BQU0sTUFBTSxHQUFhLEVBQUU7SUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNsQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUM7UUFDdkQsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3pCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDVSwyQkFBbUIsR0FBRyxDQUNqQyxLQUFpQixFQUNqQixLQUFVLEVBQ1YsSUFBVSxFQUNGLEVBQUU7SUFDVixJQUFJLFFBQVEsR0FBRyxLQUFLO0lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLFFBQVEsR0FBRyxFQUFFO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxLQUFLLEdBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO1FBQzNELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUN0QjtLQUNGO1NBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMxRDtLQUNGO0lBQ0QsT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUVEOzs7R0FHRztBQUNVLHNCQUFjLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7SUFDdkMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO0lBQzVCLElBQUksS0FBSztJQUNULElBQUksTUFBTSxZQUFZLFdBQVcsSUFBSSxxQkFBYSxPQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLEVBQUU7UUFDakUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO0tBQ3JCO1NBQU07UUFDTCxLQUFLLEdBQUcsQ0FBQztLQUNWO0lBQ0QsT0FBTyxLQUFLO0FBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN0ZELGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6ImluZGV4LmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJheGlvc1wiKSwgcmVxdWlyZShcIm1lbW9pemUtb25lXCIpLCByZXF1aXJlKFwibW9tZW50XCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiYW50ZFwiLCBcImF4aW9zXCIsIFwibWVtb2l6ZS1vbmVcIiwgXCJtb21lbnRcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcImF4aW9zXCIpLCByZXF1aXJlKFwibWVtb2l6ZS1vbmVcIiksIHJlcXVpcmUoXCJtb21lbnRcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJhbnRkXCJdLCByb290W1wiYXhpb3NcIl0sIHJvb3RbXCJtZW1vaXplLW9uZVwiXSwgcm9vdFtcIm1vbWVudFwiXSwgcm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tZW1vaXplX29uZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0Zvcm0vaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBdXRvQ29tcGxldGUgfSBmcm9tICdhbnRkJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgb25DaGFuZ2U6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWRcbiAgcHJvcHM6IHtcbiAgICBkYXRhU291cmNlOiBhbnksXG4gICAgW25hbWU6IHN0cmluZ106IGFueVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UocHJvcHMubmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMub25DaGFuZ2UocHJvcHMubmFtZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgeyBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHMucHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxBdXRvQ29tcGxldGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9lcy9idXR0b24nXG4vLyBpbXBvcnQgJ2FudGQvZXMvYnV0dG9uL3N0eWxlJ1xuXG5pbXBvcnQgeyBCdXR0b25UeXBlIH0gZnJvbSAnLi4vaW5kZXguZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBkYXRhOiBhbnksXG4gIHByb3BzOiB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIHR5cGU6IEJ1dHRvblR5cGUsXG4gICAgb25DbGljazogKGRhdGE6IE9iamVjdCkgPT4gYW55LFxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnksXG4gIH1cbiAgW25hbWU6IHN0cmluZ106IGFueVxufVxuXG5jb25zdCBidXR0b25UeXBlczogQXJyYXk8QnV0dG9uVHlwZT4gPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdkYW5nZXInLCAnbGluaycsICdnaG9zdCddXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYWJlbCwgZGF0YSB9ID0gcHJvcHNcbiAgY29uc3Qge1xuICAgIHR5cGUgPSAnZGVmYXVsdCcsXG4gICAgY2xhc3NOYW1lID0gJycsXG4gICAgb25DbGljayxcbiAgICBhZGRvbixcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcy5wcm9wc1xuXG4gIGxldCBidXR0b25UeXBlOiBCdXR0b25UeXBlID0gJ2RlZmF1bHQnXG4gIGNvbnN0IGluZGV4ID0gYnV0dG9uVHlwZXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdHlwZSlcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGJ1dHRvblR5cGUgPSBidXR0b25UeXBlc1tpbmRleF1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgdHlwZT17YnV0dG9uVHlwZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7YnV0dG9uVHlwZX0gJHtjbGFzc05hbWV9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZGF0YSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9CdXR0b24+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FzY2FkZXIgfSBmcm9tICdhbnRkJ1xuLy8gaW1wb3J0IENhc2NhZGVyIGZyb20gJ2FudGQvZXMvY2FzY2FkZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvY2FzY2FkZXIvc3R5bGUnXG5cbmZ1bmN0aW9uIGdldENhc2NhZGVyTGFiZWwob3JpZ2luYWxWYWx1ZSwgY3VyT3B0aW9ucywgdmFsdWVJbmRleCwgbGFiZWxBcnIpIHtcbiAgbGV0IGluZGV4ID0gdmFsdWVJbmRleFxuICBpZiAob3JpZ2luYWxWYWx1ZSAmJiBpbmRleCA8IG9yaWdpbmFsVmFsdWUubGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcCA9IGN1ck9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IG9yaWdpbmFsVmFsdWVbdmFsdWVJbmRleF0pXG4gICAgaWYgKHRlbXApIHtcbiAgICAgIGxhYmVsQXJyLnB1c2godGVtcC5sYWJlbClcbiAgICB9XG4gICAgaWYgKHRlbXAgJiYgdGVtcC5jaGlsZHJlbikge1xuICAgICAgaW5kZXggKz0gMVxuICAgICAgcmV0dXJuIGdldENhc2NhZGVyTGFiZWwoXG4gICAgICAgIG9yaWdpbmFsVmFsdWUsXG4gICAgICAgIHRlbXAuY2hpbGRyZW4sXG4gICAgICAgIHZhbHVlSW5kZXgsXG4gICAgICAgIGxhYmVsQXJyLFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbEFyci5qb2luKCcgLyAnKVxuICB9XG5cbiAgcmV0dXJuIGxhYmVsQXJyLmpvaW4oJyAvICcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2NhZGVyRmllbGQocHJvcHM6IGFueSkge1xuICBjb25zdCB7IHJlYWRPbmx5LCB2YWx1ZSwgbmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSAn6K+36YCJ5oupJyB9ID0gcHJvcHMucHJvcHNcblxuICBjb25zdCBjaGFuZ2UgPSAoc2VsZWN0ZWRWYWx1ZTogYW55LCBzZWxlY3RlZE9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgc2VsZWN0ZWRWYWx1ZSwgc2VsZWN0ZWRPcHRpb25zKVxuICAgIH1cbiAgICBwcm9wcy5vbkNoYW5nZShuYW1lLCBzZWxlY3RlZFZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHMucHJvcHNcblxuICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgcmV0dXJuIDxDYXNjYWRlciB7Li4ucmVzdH0gb25DaGFuZ2U9e2NoYW5nZX0gdmFsdWU9e3ZhbHVlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gIH1cblxuICByZXR1cm4gZ2V0Q2FzY2FkZXJMYWJlbCh2YWx1ZSwgb3B0aW9ucywgMCwgW10pXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldEl0ZW1MYWJlbEJ5VmFsdWUsIGdldFRhcmdldFZhbHVlLCBub3RFbXB0eVZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveEZpZWxkKHByb3BzOiBhbnkpIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlLCByZWFkT25seSwgb25DaGFuZ2UsIG5hbWUsXG4gIH0gPSBwcm9wc1xuICBjb25zdCB7IG9wdGlvbnMgPSBbXSwgY2hlY2tBbGxBYmxlID0gZmFsc2UgfSA9IHByb3BzLnByb3BzXG5cbiAgLy8g5YWo6YCJXG4gIGNvbnN0IG9uQ2hlY2tBbGxDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbXVxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2goaXRlbSA9PiBuZXdWYWx1ZS5wdXNoKGl0ZW0udmFsdWUpKVxuICAgIH1cbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcblxuICAgIGlmIChwcm9wcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMucHJvcHMub25DaGFuZ2UobmFtZSwgbmV3VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXNDaGVja2VkQWxsID0gKHZhbHVlcz86IGFueVtdKSA9PiAoXG4gICAgbm90RW1wdHlWYWx1ZSh2YWx1ZXMpICYmIHZhbHVlcy5sZW5ndGggPT09IG9wdGlvbnMubGVuZ3RoXG4gIClcblxuICBjb25zdCBjaGFuZ2UgPSAodGFyZ2V0OiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldFRhcmdldFZhbHVlKHRhcmdldClcbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzLnByb3BzXG5cbiAgcmV0dXJuIHJlYWRPbmx5ID8gKFxuICAgIGdldEl0ZW1MYWJlbEJ5VmFsdWUob3B0aW9ucywgdmFsdWUpXG4gICkgOiAoXG4gICAgPD5cbiAgICAgIHtjaGVja0FsbEFibGUgJiYgKFxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWRBbGwodmFsdWUpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoZWNrQWxsQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAg5YWo6YCJICZuYnNwO1xuICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgKX1cbiAgICAgIDxDaGVja2JveC5Hcm91cFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIGdldFRhcmdldFZhbHVlIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BGb3JtL2luZGV4LmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWVsZENvbXBvbmVudFByb3BzPiB7XG4gIEZPUk1BVCA9ICdZWVlZLU1NLUREJ1xuXG4gIEZPUk1BVF9USU1FID0gJ1lZWVktTU0tREQgSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gIXZhbHVlID8gdmFsdWUgOiB2YWx1ZS52YWx1ZU9mKClcbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcmVhZE9ubHksXG4gICAgICBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0LCBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICBjb25zdCBGT1JNQVQgPSBmb3JtYXQgfHwgKHJlc3Quc2hvd1RpbWUgPyB0aGlzLkZPUk1BVF9USU1FIDogdGhpcy5GT1JNQVQpXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHZhbHVlID8gbW9tZW50KHZhbHVlKSA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/ICgoZmllbGRWYWx1ZSAmJiBmaWVsZFZhbHVlLmZvcm1hdChmb3JtYXQpKSB8fCBudWxsKVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgZm9ybWF0PXtGT1JNQVR9XG4gICAgICAgICAgICB2YWx1ZT17ZmllbGRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCdcblxuaW1wb3J0IHsgZ2V0VGFyZ2V0VmFsdWUgfSBmcm9tICdARm9ybS91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgc3RhdGljVmFsdWUgPSAodmFsdWU6IGFueSwgc3VmZml4OiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGxcblxuICAgIGxldCBzdHJpbmcgPSB2YWx1ZVxuICAgIGlmIChzdWZmaXgpIHN0cmluZyA9IGAke3ZhbHVlfSAke3N1ZmZpeH1gXG4gICAgaWYgKHByZWZpeCkgc3RyaW5nID0gYCR7cHJlZml4fSAke3N0cmluZ31gXG5cbiAgICByZXR1cm4gc3RyaW5nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIHJlYWRPbmx5LCB0eXBlLCBwcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZG9uLFxuICAgICAgc3VmZml4LFxuICAgICAgcHJlZml4LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSB8fCAnb2ZmJ1xuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyB0aGlzLnN0YXRpY1ZhbHVlKHZhbHVlLCBzdWZmaXgsIHByZWZpeClcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIlxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBzdWZmaXg9e3N1ZmZpeH1cbiAgICAgICAgICAgIHByZWZpeD17cHJlZml4fVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPElucHV0IHsuLi5wcm9wc30gdHlwZT1cIm51bWJlclwiIC8+XG4gIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPElucHV0IHsuLi5wcm9wc30gdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgKVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uLCBTcGluIH0gZnJvbSAnYW50ZCdcblxuaW1wb3J0ICcuL1BpY1ByZXZpZXcuc2NzcydcblxuY29uc3QgeyB1c2VTdGF0ZSB9ID0gUmVhY3RcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvd0xpc3Q6IGJvb2xlYW4sXG4gIGN1cnJlbnQ6IHN0cmluZyxcbiAgdXJsOiBzdHJpbmdbXSB8IHN0cmluZyxcbiAgc3R5bGU/OiBPYmplY3RcbiAgb25IaWRlPzogVm9pZEZ1bmN0aW9uXG59XG5cbi8qKlxuICog5Zu+54mH6aKE6KeIXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpY1ByZXZpZXdlcihcbiAge1xuICAgIHNob3dMaXN0ID0gdHJ1ZSxcbiAgICB1cmwgPSBbXSxcbiAgICBzdHlsZSA9IHt9LFxuICAgIGN1cnJlbnQgPSAnJyxcbiAgICBvbkhpZGUsXG4gIH06IFByb3BzLFxuKSB7XG4gIGxldCBpbWFnZXMgPSBbXVxuICBpZiAodXJsKSB7XG4gICAgaW1hZ2VzID0gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyBbdXJsXSA6IHVybFxuICB9XG4gIGltYWdlcyA9IGltYWdlcy5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoY3VycmVudClcbiAgY29uc3QgW2RlZywgc2V0RGVnXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtpc0luaXQsIHNldElzSW5pdF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgaWYgKG9uSGlkZSkgb25IaWRlKClcbiAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICB9XG4gIGNvbnN0IGhhbmRsZVNob3cgPSAodGFyZ2V0U3JjOiBzdHJpbmcpID0+IHtcbiAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldFNyYyh0YXJnZXRTcmMpXG4gIH1cblxuICBjb25zdCBwcmV2ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBsZXQgaWR4ID0gaW1hZ2VzLmluZGV4T2Yoc3JjKVxuICAgIGlkeCAtPSAxXG4gICAgaWR4ID0gaWR4IDwgMCA/IGltYWdlcy5sZW5ndGggLSAxIDogaWR4XG4gICAgaGFuZGxlU2hvdyhpbWFnZXNbaWR4XSlcbiAgICAvLyBzZXREZWcoMClcbiAgfVxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBsZXQgaWR4ID0gaW1hZ2VzLmluZGV4T2Yoc3JjKVxuICAgIGlkeCArPSAxXG4gICAgaWR4ID0gaWR4ID49IGltYWdlcy5sZW5ndGggPyAwIDogaWR4XG4gICAgaGFuZGxlU2hvdyhpbWFnZXNbaWR4XSlcbiAgICAvLyBzZXREZWcoMClcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uID0gKCkgPT4ge1xuICAgIHNldERlZyhkZWcgKyAxKVxuICB9XG5cbiAgY29uc3Qgcm90YXRpb25CYWNrID0gKCkgPT4ge1xuICAgIHNldERlZyhkZWcgLSAxKVxuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBpZiAoIXNob3dMaXN0ICYmICFpc0luaXQpIHtcbiAgICBoYW5kbGVTaG93KGN1cnJlbnQpXG4gICAgc2V0SXNJbml0KHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd0xpc3RcbiAgICAgICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXJvd1wiPlxuICAgICAgICAgIHtpbWFnZXNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGlkeCk6IGFueSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2l0ZW19XyR7aWR4fWBcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICByb2xlPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17aWR4fVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJveFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBoYW5kbGVTaG93KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG5cbiAgICAgIHt2aXNpYmxlXG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy12aWV3ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtc3BpbiByZWFjdC1jb25mLWZvcm0tcGljLXdoaXRlLXNwaW5cIj48U3BpbiBzcGlubmluZz17bG9hZGluZ30gdGlwPVwibG9hZGluZy4uLlwiIHNpemU9XCJsYXJnZVwiIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWNvbnRhaW5lclwiIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiY2xvc2VcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3ByZXZ9PlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e25leHR9PlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17cm90YXRpb259PlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicmVkb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17cm90YXRpb25CYWNrfT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVuZG9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJwcmV2aW1nXCJcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKCR7ZGVnICogOTB9ZGVnKWAsIG9wYWNpdHk6IGxvYWRpbmcgPyAwIDogMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pbWctY29udGFpbmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRJdGVtTGFiZWxCeVZhbHVlLCBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFkaW9GaWVsZChwcm9wczogYW55KSB7XG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICByZWFkT25seSxcbiAgICBvbkNoYW5nZSxcbiAgICBuYW1lLFxuICAgIHN0eWxlID0ge30sXG4gIH0gPSBwcm9wc1xuICBjb25zdCB7IG9wdGlvbnMgPSBbXSB9ID0gcHJvcHMucHJvcHNcblxuICBjb25zdCBjaGFuZ2UgPSAodGFyZ2V0OiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGdldFRhcmdldFZhbHVlKHRhcmdldClcbiAgICBvbkNoYW5nZShuYW1lLCBuZXdWYWx1ZSlcbiAgICBpZiAocHJvcHMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgYWRkb24sIC4uLnJlc3QgfSA9IHByb3BzLnByb3BzXG5cbiAgcmV0dXJuIHJlYWRPbmx5ID8gKFxuICAgIGdldEl0ZW1MYWJlbEJ5VmFsdWUob3B0aW9ucywgdmFsdWUpXG4gICkgOiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBEYXRlcGlja2VyIGZyb20gJ2FudGQvZXMvZGF0ZS1waWNrZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvZGF0ZS1waWNrZXIvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIHNpbXBsZUNsb25lLCBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBGT1JNQVQgPSAnWVlZWS1NTS1ERCdcblxuICBGT1JNQVRfVElNRSA9ICdZWVlZLU1NLUREIEhIOm1tJ1xuXG4gIG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd1RpbWUgfSA9IHRoaXMucHJvcHMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IGdldFRhcmdldFZhbHVlKGUpXG4gICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWVbMF0pKSB7XG4gICAgICBpZiAoIXNob3dUaW1lKSB7XG4gICAgICAgIHZhbHVlID0gW1xuICAgICAgICAgIG1vbWVudChtb21lbnQodmFsdWVbMF0pLmZvcm1hdCgnWVlZWS1NTS1ERCAwMDowMDowMCcpKS52YWx1ZU9mKCksXG4gICAgICAgICAgbW9tZW50KG1vbWVudCh2YWx1ZVsxXSkuZm9ybWF0KCdZWVlZLU1NLUREIDIzOjU5OjU5JykpLnZhbHVlT2YoKSxcbiAgICAgICAgXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBbbW9tZW50KHZhbHVlWzBdKS52YWx1ZU9mKCksIG1vbWVudCh2YWx1ZVsxXSkudmFsdWVPZigpXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnbmFtZScsIG5hbWUsIHZhbHVlKVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHN0YXRpY1RpbWUgPSAodmFsdWUsIEZPUk1BVCkgPT4ge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChGT1JNQVQpXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBzaG93VGltZSA9ICh0aW1lVmFsdWU6IGFueVtdLCBGT1JNQVQ6IHN0cmluZykgPT4ge1xuICAgIGlmICh0aW1lVmFsdWVbMF0gJiYgdGltZVZhbHVlWzFdKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5zdGF0aWNUaW1lKHRpbWVWYWx1ZVswXSwgRk9STUFUKX0gfiAke3RoaXMuc3RhdGljVGltZSh0aW1lVmFsdWVbMV0sIEZPUk1BVCl9YFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0LCBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICBjb25zdCBGT1JNQVQgPSBmb3JtYXQgfHwgKHJlc3Quc2hvd1RpbWUgPyB0aGlzLkZPUk1BVF9USU1FIDogdGhpcy5GT1JNQVQpXG5cbiAgICBsZXQgdGltZVZhbHVlID0gW251bGwsIG51bGxdXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBcnJheScgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGltZVZhbHVlID0gc2ltcGxlQ2xvbmUodmFsdWUpXG4gICAgICB0aW1lVmFsdWVbMF0gPSBtb21lbnQodmFsdWVbMF0pXG4gICAgICB0aW1lVmFsdWVbMV0gPSBtb21lbnQodmFsdWVbMV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRPbmx5XG4gICAgICA/IHRoaXMuc2hvd1RpbWUodGltZVZhbHVlLCBGT1JNQVQpXG4gICAgICA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGF0ZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e0ZPUk1BVH1cbiAgICAgICAgICAgIHZhbHVlPXt0aW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaWVsZEl0ZW1UIH0gZnJvbSAnLi4vaW5kZXguZCdcblxudHlwZSBQcm9wcyA9IEZpZWxkSXRlbVQgJiB7XG4gIGRhdGE6IE9iamVjdFxuICByZW5kZXI6IChkYXRhOk9iamVjdCkgPT4gYW55XG59XG5cbmNvbnN0IFJlbmRlcjogUmVhY3QuRkM8UHJvcHM+ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVuZGVyIH0gPSBwcm9wcy5wcm9wc1xuICAvLyBjb25zb2xlLmxvZygncmVuZGVyJywgdHlwZW9mIHJlbmRlciwgcmVuZGVyKVxuICByZXR1cm4gdHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IHJlbmRlcihkYXRhKSA6IChyZW5kZXIgfHwgbnVsbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgU2VsZWN0IGZyb20gJ2FudGQvZXMvc2VsZWN0J1xuLy8gaW1wb3J0ICdhbnRkL2VzL3NlbGVjdC9zdHlsZSdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSwgZ2V0SXRlbUxhYmVsQnlWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5jb25zdCB7IE9wdGlvbiwgT3B0R3JvdXAgfSA9IFNlbGVjdFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpZWxkQ29tcG9uZW50UHJvcHM+IHtcbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZSAmJiBlLnRhcmdldFxuICAgIGxldCB2YWx1ZVxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGVcbiAgICB9XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiZWZvcmVDaGFuZ2UsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgdmFsdWUgPSBiZWZvcmVDaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlckdyb3VwID0gKGl0ZW1zOiBhbnkpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG4gICAgICBpdGVtc1trZXldLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgPE9wdGlvbiBrZXk9e2l0ZW0udmFsdWV9IHRpdGxlPXtpdGVtLmxhYmVsfT5cbiAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgIDwvT3B0aW9uPixcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8T3B0R3JvdXAgbGFiZWw9e2tleX0ga2V5PXtrZXl9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9PcHRHcm91cD4sXG4gICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgcmVhZE9ubHksIHByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMgPSBbXSxcbiAgICAgIHBsYWNlaG9sZGVyID0gJ+ivt+mAieaLqScsXG4gICAgICBzaG93U2VhcmNoID0gdHJ1ZSxcbiAgICAgIG9wdGlvbkZpbHRlclByb3AgPSAndGl0bGUnLFxuICAgICAgYWxsb3dDbGVhciA9IHRydWUsXG4gICAgICBhZGRvbixcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IHsgbW9kZSB9ID0gcmVzdFxuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyA8c3BhbiBzdHlsZT17eyB9fT57Z2V0SXRlbUxhYmVsQnlWYWx1ZShpdGVtcywgdmFsdWUsIG1vZGUpfTwvc3Bhbj5cbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD17b3B0aW9uRmlsdGVyUHJvcCA9PT0gJ2xhYmVsJyA/ICd0aXRsZScgOiBvcHRpb25GaWx0ZXJQcm9wfVxuICAgICAgICAgICAgc2hvd1NlYXJjaD17c2hvd1NlYXJjaH1cbiAgICAgICAgICAgIGFsbG93Q2xlYXI9e2FsbG93Q2xlYXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0udmFsdWUgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgeyAhQXJyYXkuaXNBcnJheShpdGVtcykgJiYgdGhpcy5yZW5kZXJHcm91cChpdGVtcyl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudFByb3BzIH0gZnJvbSAnQEZvcm0vaW5kZXguZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBjaGVja2VkKVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBvbkNsaWNrLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCdcblxuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlICYmIGUudGFyZ2V0XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG5vdEVtcHR5VmFsdWUodGFyZ2V0Py52YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZVxuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICBpZiAoYmVmb3JlQ2hhbmdlKSB7XG4gICAgICB2YWx1ZSA9IGJlZm9yZUNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLCByZWFkT25seSwgcHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhdXRvQ29tcGxldGUgPSBwcm9wcy5hdXRvQ29tcGxldGUgfHwgJ29mZidcbiAgICBjb25zdCB7IGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyAodmFsdWUgfHwgbnVsbClcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIlxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSAnYW50ZCdcbi8vIGltcG9ydCBUaW1lcGlja2VyIGZyb20gJ2FudGQvZXMvdGltZS1waWNrZXInXG4vLyBpbXBvcnQgJ2FudGQvZXMvdGltZS1waWNrZXIvc3R5bGUnXG5cbmltcG9ydCB7IG5vdEVtcHR5VmFsdWUsIHNpbXBsZUNsb25lLCBnZXRUYXJnZXRWYWx1ZSB9IGZyb20gJ0BGb3JtL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdARm9ybS9pbmRleC5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmllbGRDb21wb25lbnRQcm9wcz4ge1xuICBGT1JNQVQgPSAnSEg6bW0nXG5cbiAgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXQgPSB0aGlzLkZPUk1BVCB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gZ2V0VGFyZ2V0VmFsdWUoZSlcbiAgICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYmVmb3JlQ2hhbmdlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgIHZhbHVlID0gYmVmb3JlQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZSwgdmFsdWUpXG4gIH1cblxuICBzdGF0aWNUaW1lID0gKHZhbHVlLCBGT1JNQVQpID0+IHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoRk9STUFUKVxuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHJlYWRPbmx5LCBwcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZm9ybWF0ID0gdGhpcy5GT1JNQVQsIGFkZG9uLCAuLi5yZXN0IH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGltZVZhbHVlID0gbm90RW1wdHlWYWx1ZSh2YWx1ZSlcbiAgICAgID8gbW9tZW50KHNpbXBsZUNsb25lKHZhbHVlKSwgZm9ybWF0KVxuICAgICAgOiB1bmRlZmluZWRcblxuICAgIHJldHVybiByZWFkT25seVxuICAgICAgPyB0aGlzLnN0YXRpY1RpbWUodmFsdWUsIGZvcm1hdClcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICB2YWx1ZT17dGltZVZhbHVlfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVwbG9hZCwgSWNvbiwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBQaWNQcmV2aWV3IGZyb20gJy4vUGljUHJldmlldydcblxuLyoqXG4gKiBVcGxvYWRcbiAqIEB0eXBlIHtYTUx9XG4gKi9cbmNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgPGRpdj5cbiAgICA8SWNvbiB0eXBlPVwicGx1c1wiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj7kuIrkvKA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5jb25zdCB1cGxvYWRCdXR0b25UZXh0ID0gKFxuICA8QnV0dG9uPlxuICAgIDxJY29uIHR5cGU9XCJ1cGxvYWRcIiAvPlxuICAgICZuYnNwO+S4iuS8oFxuICA8L0J1dHRvbj5cbilcblxudHlwZSBVcGxvYWRGaWVsZFByb3BzID0ge1xuICB2YWx1ZT86IEFycmF5PGFueT4sXG4gIG5hbWU6IHN0cmluZyxcbiAgcmVhZE9ubHk/OiBib29sZWFuLFxuICBvbkNoYW5nZTogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueVtdKSA9PiB2b2lkXG4gIHByb3BzOiB7XG4gICAgYmxvYk5hbWU6IHN0cmluZyxcbiAgICBtYXhGaWxlczogbnVtYmVyLFxuICAgIG1heEZpbGVTaXplOiBudW1iZXIsXG4gICAgaGVpZ2h0UmF0aW8/OiBudW1iZXIsXG4gICAgd2lkdGhSYXRpbz86IG51bWJlcixcbiAgICBoZWFkZXJzPzogYW55LFxuICAgIGxpc3RUeXBlPzogJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCcsXG4gICAgZmlsZVR5cGU6IHN0cmluZywgLy8g5LiK5Lyg5paH5Lu257G75Z6LICBpbWcgLyBvdGhlclxuICAgIHNob3dFcnJvck1lc3NhZ2U/OiBib29sZWFuLFxuICAgIG9uQ2hhbmdlOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsXG4gICAgb25VcGxvYWRlZD86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCxcbiAgICBnZXRSZXNwb25zZURhdGE/OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQgLy8g6I635Y+W6L+U5Zue55qE5pWw5o2uXG4gICAgYWN0aW9uOiBzdHJpbmcsXG4gICAgYWRkb24/OiBhbnlcbiAgICByZXNwb25zZUhhbmRsZXI6IHtcbiAgICAgIHVybDogKHJlc3BvbnNlOiBhbnkpID0+IHN0cmluZ1xuICAgICAgbmFtZTogKHJlc3BvbnNlOiBhbnkpID0+IHN0cmluZ1xuICAgIH1cbiAgfVxufVxuXG50eXBlIFVwbG9hZFN0YXRlID0ge1xuICBwcmV2aWV3VmlzaWJsZTogYm9vbGVhbixcbiAgcHJldmlld0ltYWdlOiBzdHJpbmdcbiAgZXJyb3JNc2c6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkRmllbGQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFVwbG9hZEZpZWxkUHJvcHMsIFVwbG9hZFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gcHJvcHM6IHtcbiAgICAvLyAgIHNob3dFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgLy8gICBtYXhGaWxlczogNSwgLy8g5pyA5aSa6IO95LiK5Lyg5paH5Lu25pWwXG4gICAgLy8gICBtYXhGaWxlU2l6ZTogMTAsIC8vIOacgOWkp+S4iuS8oOS9k+enr1xuICAgIC8vICAgZmlsZVR5cGU6ICdpbWcnLCAvLyDpu5jorqTkuIrkvKDlm77niYdcbiAgICAvLyB9LFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcHJldmlld1Zpc2libGU6IGZhbHNlLFxuICAgIHByZXZpZXdJbWFnZTogJycsXG4gICAgZXJyb3JNc2c6ICcnLFxuICB9XG5cbiAgb25DaGFuZ2UgPSAoaW5mbzogYW55KTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJyEhISEhIei/m+WFpSBvbkNoYW5nZSAnKVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uVXBsb2FkZWQsIHJlc3BvbnNlSGFuZGxlciB9ID0gdGhpcy5wcm9wcy5wcm9wc1xuICAgIGxldCBmaWxlTGlzdCA9IFsuLi5pbmZvLmZpbGVMaXN0XVxuXG4gICAgZmlsZUxpc3QuZm9yRWFjaCgoZmlsZSwgaWR4KSA9PiB7XG4gICAgICBpZiAoZmlsZS5yZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2VIYW5kbGVyKSB7XG4gICAgICAgICAgZmlsZUxpc3RbaWR4XSA9IHtcbiAgICAgICAgICAgIC4uLmZpbGVMaXN0W2lkeF0sXG4gICAgICAgICAgICB1cmw6IHJlc3BvbnNlSGFuZGxlci51cmwoZmlsZS5yZXNwb25zZSksXG4gICAgICAgICAgICBuYW1lOiByZXNwb25zZUhhbmRsZXIubmFtZShmaWxlLnJlc3BvbnNlKSxcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsZUxpc3RbaWR4XSA9IHtcbiAgICAgICAgICAgIC4uLmZpbGVMaXN0W2lkeF0sXG4gICAgICAgICAgICB1cmw6IGZpbGUucmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbixcbiAgICAgICAgICAgIG5hbWU6IGZpbGUucmVzcG9uc2UuZmlsZW5hbWUsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsZVxuICAgIH0pXG5cbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5wcm9wcy5nZXRSZXNwb25zZURhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcm9wcy5nZXRSZXNwb25zZURhdGEoaW5mby5maWxlLnJlc3BvbnNlKVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgZmlsZUxpc3QgPSBbXVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiBpbmZvLmZpbGU/LnJlc3BvbnNlPy5pbnZvaWNlPy5tZXNzYWdlIHx8ICfkuIrkvKDplJnor68sIOivt+mHjeivlSEnIH0pXG4gICAgfSBlbHNlIGlmICghaW5mby5maWxlLnN0YXR1cykge1xuICAgICAgLy8g5paH5Lu26LaF6L+H5aSn5bCP5oiW5YW25a6D5LiN5ruh6Laz5YmN56uv6ZmQ5Yi25p2h5Lu25oOF5Ya1XG4gICAgICBmaWxlTGlzdCA9IGZpbGVMaXN0LnNsaWNlKDAsIGZpbGVMaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6ICcnIH0pXG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBmaWxlTGlzdClcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGZpbGVMaXN0KVxuICAgIH1cbiAgICBpZiAob25VcGxvYWRlZCkge1xuICAgICAgb25VcGxvYWRlZChmaWxlTGlzdClcbiAgICB9XG4gIH1cblxuICBvblByZXZpZXcgPSAoZmlsZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiB0cnVlLCBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIH0pXG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiBmYWxzZSwgcHJldmlld0ltYWdlOiAnJyB9KVxuICB9XG5cbiAgY3VzdG9tUmVxdWVzdCA9IChcbiAgICB7XG4gICAgICBmaWxlLFxuICAgICAgb25TdWNjZXNzLFxuICAgICAgb25FcnJvcixcbiAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgfSxcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBoZWFkZXJzLCBhY3Rpb24gfSA9IHRoaXMucHJvcHMucHJvcHNcbiAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoYWN0aW9uLCBmb3JtRGF0YSwge1xuICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBvblByb2dyZXNzLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzIHx8IHt9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S4iuS8oOWksei0pSEnIH0pXG4gICAgICAgIG9uRXJyb3IoKVxuICAgICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgYWJvcnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJ+S4iuS8oOe7iOatoiEnIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIGJlZm9yZVVwbG9hZChmaWxlOiBhbnksIHR5cGU6IHN0cmluZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCchISEhISHov5vlhaUgYmVmb3JlVXBsb2FkICcpXG4gICAgY29uc3QgeyBtYXhGaWxlU2l6ZSA9IDEwIH0gPSB0aGlzLnByb3BzLnByb3BzXG4gICAgLy8gaWYgKGhlaWdodFJhdGlvICYmIHdpZHRoUmF0aW8pIHsgLy8g6aqM6K+B6ZW/5a695q+U5L6LXG4gICAgLy8gICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGF3YWl0IGdldEZpbGVEaW1lbnNpb24oZmlsZSlcbiAgICAvLyAgIGlmIChoZWlnaHQvd2lkdGggIT09IGhlaWdodFJhdGlvL3dpZHRoUmF0aW8pIHtcbiAgICAvLyAgICAgbWVzc2FnZS5lcnJvcihg6ZW/5a695q+U5b+F6aG75pivICR7aGVpZ2h0UmF0aW99IC8gJHt3aWR0aFJhdGlvfWApXG4gICAgLy8gICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyDpqozor4Hmlofku7blpKflsI9zaXplXG4gICAgY29uc3QgZmlsZVNpemVMYXJnZXIgPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA+IG1heEZpbGVTaXplXG4gICAgaWYgKGZpbGVTaXplTGFyZ2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6IGDmlofku7bkvZPnp6/lpKflsI/kuI3otoXov4cke21heEZpbGVTaXplfU1gIH0pXG4gICAgICAvLyBtZXNzYWdlLmVycm9yKGDmlofku7bkvZPnp6/lpKflsI/kuI3otoXov4cke21heEZpbGVTaXplfU1gKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8g6aqM6K+B5paH5Lu25qC85byPXG4gICAgaWYgKHR5cGUgPT09ICdpbWcnKSB7XG4gICAgICBjb25zdCBpc0pQRyA9IGZpbGUudHlwZVxuICAgICAgaWYgKGlzSlBHID09PSAnaW1hZ2UvanBlZycgfHwgaXNKUEcgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZzogJycgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAn5LuF5pSv5oyB5LiK5LyganBnL3BuZ+agvOW8j+WbvueJhycgfSlcbiAgICAgIC8vIG1lc3NhZ2UuZXJyb3IoJ+S7heaUr+aMgeS4iuS8oGpwZy9wbmfmoLzlvI/lm77niYcnKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlID0gW10sXG4gICAgICByZWFkT25seSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBtYXhGaWxlcyA9IDEwLFxuICAgICAgYmxvYk5hbWUgPSAnYmxvYicsXG4gICAgICBmaWxlVHlwZSA9ICdpbWcnLFxuICAgICAgc2hvd0Vycm9yTWVzc2FnZSA9IHRydWUsXG4gICAgICBsaXN0VHlwZSA9ICdwaWN0dXJlLWNhcmQnLFxuICAgICAgaGVhZGVycyA9IHt9LFxuICAgIH0gPSBwcm9wc1xuICAgIC8vIHZhbHVlID0gdmFsdWUgfHwgW11cblxuXG4gICAgY29uc3QgYnV0dG9uID0gbGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnID8gdXBsb2FkQnV0dG9uIDogdXBsb2FkQnV0dG9uVGV4dFxuICAgIGNvbnN0IGZvcm1hdFZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgY29uc3QgaW1hZ2VzVXJscyA9IFtdXG4gICAgZm9ybWF0VmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGltYWdlc1VybHMucHVzaChlbGVtZW50Py51cmwpXG4gICAgfSlcblxuICAgIGZvcm1hdFZhbHVlLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3JtYXRWYWx1ZVtpZHhdID0ge1xuICAgICAgICAgIHVpZDogYCR7aXRlbX1fJHtpZHh9YCxcbiAgICAgICAgICB1cmw6IGl0ZW0sXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRvbiwgLi4ucmVzdCB9ID0gcHJvcHNcblxuICAgIC8vIGNvbnNvbGUubG9nKCdlcnInLCB0aGlzLnN0YXRlLmVycm9yTXNnLCBzaG93RXJyb3JNZXNzYWdlKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICA8VXBsb2FkXG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAga2V5PXtibG9iTmFtZX1cbiAgICAgICAgICBuYW1lPXtibG9iTmFtZX1cbiAgICAgICAgICBoZWFkZXJzPXtoZWFkZXJzfVxuICAgICAgICAgIGxpc3RUeXBlPXtsaXN0VHlwZX1cbiAgICAgICAgICBmaWxlTGlzdD17Zm9ybWF0VmFsdWV9XG4gICAgICAgICAgc2hvd1VwbG9hZExpc3RcbiAgICAgICAgICBvbkNoYW5nZT17ZmlsZSA9PiB0aGlzLm9uQ2hhbmdlKGZpbGUpfVxuICAgICAgICAgIGJlZm9yZVVwbG9hZD17ZmlsZSA9PiB0aGlzLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlVHlwZSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIG9uUHJldmlldz17dGhpcy5vblByZXZpZXd9XG4gICAgICAgICAgY3VzdG9tUmVxdWVzdD17dGhpcy5jdXN0b21SZXF1ZXN0fSAvKiDopobnm5bpu5jorqTnmoTkuIrkvKDooYzkuLogKi9cbiAgICAgICAgPlxuICAgICAgICAgIHt2YWx1ZS5sZW5ndGggPj0gbWF4RmlsZXMgfHwgcmVhZE9ubHkgPyBudWxsIDogYnV0dG9ufVxuICAgICAgICA8L1VwbG9hZD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1zZyAmJiBzaG93RXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1lcnJvclwiPnt0aGlzLnN0YXRlLmVycm9yTXNnfTwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLnByZXZpZXdWaXNpYmxlICYmIChcbiAgICAgICAgICA8UGljUHJldmlld1xuICAgICAgICAgICAgdXJsPXtpbWFnZXNVcmxzfVxuICAgICAgICAgICAgc2hvd0xpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgIGN1cnJlbnQ9e3RoaXMuc3RhdGUucHJldmlld0ltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmllbGRJdGVtVCwgRXh0ZW5kRmllbGQgfSBmcm9tICcuLi9pbmRleC5kJ1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlcidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5pbXBvcnQgVGltZXBpY2tlciBmcm9tICcuL1RpbWVwaWNrZXInXG5pbXBvcnQgUmFuZ2VwaWNrZXIgZnJvbSAnLi9SYW5nZXBpY2tlcidcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcidcbmltcG9ydCBDYXNjYWRlckZpZWxkIGZyb20gJy4vQ2FzY2FkZXInXG5pbXBvcnQgVXBsb2FkQm94IGZyb20gJy4vVXBsb2FkJ1xuaW1wb3J0IEF1dG9Db21wbGV0ZSBmcm9tICcuL0F1dG9Db21wbGV0ZSdcbmltcG9ydCBJbnB1dFBhc3N3b3JkIGZyb20gJy4vSW5wdXRQYXNzd29yZCdcbmltcG9ydCBJbnB1dE51bWJlciBmcm9tICcuL0lucHV0TnVtYmVyJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9SYWRpbydcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xuaW1wb3J0IFN3aXRjaCBmcm9tICcuL1N3aXRjaCdcblxuY29uc3QgbWFwID0ge1xuICByZW5kZXI6IFJlbmRlcixcbiAgc3dpdGNoOiBTd2l0Y2gsXG4gIGlucHV0OiBJbnB1dCxcbiAgYnV0dG9uOiBCdXR0b24sXG4gIHNlbGVjdDogU2VsZWN0LFxuICB0aW1lcGlja2VyOiBUaW1lcGlja2VyLFxuICByYW5nZXBpY2tlcjogUmFuZ2VwaWNrZXIsXG4gIGRhdGVwaWNrZXI6IERhdGVwaWNrZXIsXG4gIGNhc2NhZGVyOiBDYXNjYWRlckZpZWxkLFxuICBpbnB1dFBhc3N3b3JkOiBJbnB1dFBhc3N3b3JkLFxuICBpbnB1dE51bWJlcjogSW5wdXROdW1iZXIsXG4gIHRleHRhcmVhOiBUZXh0YXJlYSxcbiAgcmFkaW86IFJhZGlvLFxuICBjaGVja2JveDogQ2hlY2tib3gsXG4gIHVwbG9hZDogVXBsb2FkQm94LFxuICBhdXRvQ29tcGxldGU6IEF1dG9Db21wbGV0ZSxcbn1cblxuLyogQWRkIGV4dHJhY3QgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBhZGRGaWVsZHMgPSAoZXh0ZW5kRmllbGRzOiBBcnJheTxFeHRlbmRGaWVsZD4pID0+IChcbiAgZXh0ZW5kRmllbGRzLmZvckVhY2goKGV4dGVuZEZpZWxkOiBFeHRlbmRGaWVsZCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgY29tcG9uZW50IH0gPSBleHRlbmRGaWVsZFxuICAgIG1hcFtuYW1lXSA9IGNvbXBvbmVudFxuICB9KVxuKVxuXG4vKiBGaWVsZCBNYXAgKi9cbmNvbnN0IGdldENvbXBvbmVudCA9ICh0eXBlOiBzdHJpbmcpID0+IG1hcFt0eXBlXSB8fCBudWxsXG5cbi8qIEZpZWxkIE1hcHBpbmcgKi9cbnR5cGUgUHJvcHMgPSB7IGRhdGE6IE9iamVjdCwgb25DaGFuZ2U6IGFueSwgbmFtZT86IHN0cmluZywgdmFsdWU6IGFueSB9ICYgRmllbGRJdGVtVFxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgY29uc3QgQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHR5cGUpXG4gIHJldHVybiBDb21wb25lbnRcbiAgICA/IDxDb21wb25lbnQgey4uLnJlc3R9IC8+XG4gICAgOiBudWxsXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9lcy9idXR0b24nXG4vLyBpbXBvcnQgJ2FudGQvZXMvYnV0dG9uL3N0eWxlJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEJ1dHRvblQsIEZpZWxkSXRlbVQsIEJ1dHRvblR5cGUgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZHM/OiBBcnJheTxGaWVsZEl0ZW1UIHwgQnV0dG9uVD5cbiAgZ3V0dGVyPzogbnVtYmVyXG4gIG9uQnV0dG9uQ2xpY2s/OiAoa2V5OiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pID0+IHZvaWRcbiAgZGF0YT86IE9iamVjdCxcbn1cblxuY29uc3QgYnV0dG9uVHlwZXM6IEFycmF5PEJ1dHRvblR5cGU+ID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnZGFuZ2VyJywgJ2xpbmsnLCAnZ2hvc3QnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IFByb3BzKTogYW55IHtcbiAgY29uc3QgeyBndXR0ZXIgPSAxNiwgZmllbGRzIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIGZpZWxkcy5tYXAoKGJ1dHRvbjogQnV0dG9uVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICBsYWJlbCA9ICcnLFxuICAgICAgICBkaXNwbGF5ID0gdHJ1ZSxcbiAgICAgIH0gPSBidXR0b25cblxuICAgICAgY29uc3Qge1xuICAgICAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgICAgICBjbGFzc05hbWUgPSAnJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgYWRkb24sXG4gICAgICAgIHN0eWxlID0ge30sXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH0gPSBidXR0b24ucHJvcHMgfHwge31cblxuICAgICAgbGV0IGJ1dHRvblR5cGU6IGFueVxuICAgICAgY29uc3QgaW5kZXggPSBidXR0b25UeXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0eXBlKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBidXR0b25UeXBlID0gYnV0dG9uVHlwZXNbaW5kZXhdXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN0LmJsb2NrKSB7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXNwbGF5XG4gICAgICAgID8gKFxuICAgICAgICAgIDxzcGFuIGtleT17a2V5fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge2lkeCA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLWJ1dHRvbi1zcGFjZS1iZXR3ZWVuXCIgc3R5bGU9e3sgd2lkdGg6IGd1dHRlciB9fSAvPn1cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT17YnV0dG9uVHlwZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJ1dHRvbkNsaWNrKGtleSwgb25DbGljayl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICB7YWRkb24gJiYgYWRkb24ocHJvcHMuZGF0YSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgICAgIDogbnVsbFxuICAgIH0pXG4gIClcbn1cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi9CdXR0b25Hcm91cCdcbmltcG9ydCB7IEZpZWxkc0NvbmZUIH0gZnJvbSAnLi4vaW5kZXguZCdcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRmllbGRzQ29uZlQge1xuICBvbkJ1dHRvbkNsaWNrOiAodHlwZTogc3RyaW5nLCBjYj86IEZ1bmN0aW9uKSA9PiB2b2lkXG59XG5cbi8vIGNvbnN0IGFsaWduTWFwID0ge1xuLy8gICBsZWZ0OiAnZmxleC1zdGFydCcsXG4vLyAgIGNlbnRlcjogJ2NlbnRlcicsXG4vLyAgIHJpZ2h0OiAnZmxleC1lbmQnLFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJCdXR0b25zKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgc3R5bGUsXG4gICAgYWxpZ24sXG4gICAgdHlwZSxcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wc1xuICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6IGFsaWduTWFwW2FsaWduIHx8ICdjZW50ZXInXSxcbiAgICB0ZXh0QWxpZ246IGFsaWduIHx8ICdjZW50ZXInLFxuICAgIC4uLnN0eWxlLFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLWJ1dHRvbi13cmFwcGVyXCJcbiAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGV9XG4gICAgPlxuICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Gb290ZXJCdXR0b25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogdHJ1ZSxcbiAgc3R5bGU6IHt9LFxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCwgRm9ybSB9IGZyb20gJ2FudGQnXG4vLyBpbXBvcnQgUm93IGZyb20gJ2FudGQvZXMvcm93J1xuLy8gaW1wb3J0IENvbCBmcm9tICdhbnRkL2VzL2NvbCdcbi8vIGltcG9ydCBGb3JtIGZyb20gJ2FudGQvZXMvZm9ybSdcbi8vIGltcG9ydCAnYW50ZC9lcy9yb3cvc3R5bGUnXG4vLyBpbXBvcnQgJ2FudGQvZXMvY29sL3N0eWxlJ1xuLy8gaW1wb3J0ICdhbnRkL2VzL2Zvcm0vc3R5bGUnXG5cbmltcG9ydCB7IERFRkFVTFRfR1VUVEVSLCBERUZBVUxUX1NQQU4gfSBmcm9tICdARm9ybS9jb25maWcnXG5pbXBvcnQgeyBGaWVsZHNDb25mVCwgRmllbGRJdGVtVCB9IGZyb20gJy4vaW5kZXguZCdcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJ1xuXG50eXBlIFByb3BzID0gRmllbGRzQ29uZlQgJiB7XG4gIC8vIG9uQnV0dG9uQ2xpY2s6ICh0eXBlOiBzdHJpbmcsIGNiPzogRnVuY3Rpb24pID0+IHZvaWRcbiAgb25DaGFuZ2U6IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IGFueVxuICBkYXRhOiBPYmplY3RcbiAgdmFsaWRhdGlvbjogT2JqZWN0XG4gIGxhYmVsRGlyZWN0aW9uOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvcHMpOiBhbnkgPT4ge1xuICBjb25zdCB7XG4gICAgZ3V0dGVyID0gREVGQVVMVF9HVVRURVIsXG4gICAgdHlwZSxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgICBmaWVsZHMsXG4gICAgZGF0YSxcbiAgICBvbkNoYW5nZSxcbiAgICB2YWxpZGF0aW9uLFxuICAgIGxhYmVsRGlyZWN0aW9uLFxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxSb3cgZ3V0dGVyPXtndXR0ZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtsYWJlbERpcmVjdGlvbn1gfT5cblxuICAgICAgICB7Lyog6Z2e5oyJ6ZKu5o6n5Lu257uE5ZCIICovfVxuICAgICAgICB7dHlwZSAhPT0gJ0Zvcm1CdXR0b25zJyAmJiBmaWVsZHMubWFwKChmaWVsZDogRmllbGRJdGVtVCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHNwYW4gPSBwcm9wcy5zcGFuIHx8IERFRkFVTFRfU1BBTixcbiAgICAgICAgICAgIG9mZnNldCA9IDAsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXkgPSB0cnVlLFxuICAgICAgICAgIH0gPSBmaWVsZFxuXG4gICAgICAgICAgY29uc3QgeyBydWxlcywgYWRkb24gfSA9IGZpZWxkLnByb3BzXG5cbiAgICAgICAgICByZXR1cm4gZGlzcGxheVxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxDb2wga2V5PXtmaWVsZC5rZXl9IHNwYW49e3NwYW59IG9mZnNldD17b2Zmc2V0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ZpZWxkLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtbJ2J1dHRvbicsICdyZW5kZXInXS5pbmRleE9mKGZpZWxkLnR5cGUpID09PSAtMSA/IGxhYmVsIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3J1bGVzICYmIHJ1bGVzLmluZGV4T2YoJ3JlcXVpcmVkJykgIT09IC0xfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xuICAgICAgICAgICAgICAgICAgICAodmFsaWRhdGlvbltrZXldICYmICF2YWxpZGF0aW9uW2tleV0udmFsaWRhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGhlbHA9e1xuICAgICAgICAgICAgICAgICAgICAodmFsaWRhdGlvbltrZXldICYmICF2YWxpZGF0aW9uW2tleV0udmFsaWRhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgID8gdmFsaWRhdGlvbltrZXldLm1zZ1xuICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhW2tleV19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2FkZG9uICYmIGFkZG9uKGRhdGEpfVxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUm93PlxuICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TUEFOID0gOFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1VUVEVSID0gMTZcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IGFkZEZpZWxkcyB9IGZyb20gJ0BGb3JtL0ZpZWxkJ1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi91dGlscy9Gb3JtVmFsaWRhdG9yJ1xuaW1wb3J0IFJvdyBmcm9tICcuL1JvdydcbmltcG9ydCB7IFJKRm9ybVByb3BzLCBGaWVsZHNDb25mVCB9IGZyb20gJy4vaW5kZXguZCdcbmltcG9ydCB7IGFkZExhYmVsU3R5bGVXaWR0aCwgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoIH0gZnJvbSAnQEZvcm0vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IEZvb3RlckJ1dHRvbnMgZnJvbSAnLi9Gb290ZXJCdXR0b25zJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxudHlwZSBTdGF0ZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJKRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSSkZvcm1Qcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzcGlubmluZzogZmFsc2UsXG4gICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICBkYXRhU291cmNlOiB7fSxcbiAgICBleHRlbmRWYWxpZGF0b3JzOiBbXSxcbiAgICBleHRlbmRGaWVsZHM6IFtdLFxuICAgIGZpZWxkczogW10sXG4gICAgbGFiZWxEaXJlY3Rpb246ICdob3Jpem9udGFsJywgLy8gJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJ1xuICAgIGxhYmVsV2lkdGg6IDgwLFxuICB9XG5cbiAgbW91bnRlZCA9IGZhbHNlXG5cbiAgZGF0YSA9IHt9IC8vIGZvcm3mlbDmja5cblxuICBkYXRhQ2hhbmdlZCA9IGZhbHNlXG5cbiAgdmFsaWRhdGlvbiA9IHt9IC8vIOmqjOivgee7k+aenFxuXG4gIC8qKlxuICAgKiBkZXRlY3QgZGF0YSBzb3VyY2Ugd2hldGhlciBpcyBjaGFuZ2VkXG4gICAqL1xuICBpc0RhdGFTb3VyY2VDaGFuZ2VkID0gbWVtb2l6ZSgoZGF0YVNvdXJjZToge30pID0+IHtcbiAgICAvLyBVU0VMRVNTIFwifHwgY29uZGl0aW9uXCJcbiAgICAvLyBiZWNhdXNlIGRhdGFTb3VyY2UgaXMgdGhlIGtleSBvZiBtZXRob2QgcnVubmluZyBhbmQgbmVlZCB0b1xuICAgIC8vIHVzZSBpdCB0byBhdm9pZCB0aGF0IGVzbGludCByZXBvcnQgYW4gZXJyb3IgXCJkYXRhU291cmNlIGlzXG4gICAgLy8gZGVmaW5lZCBidXQgbmV2ZXIgdXNlZFwiXG4gICAgdGhpcy5kYXRhQ2hhbmdlZCA9IHRydWUgfHwgdHlwZW9mIGRhdGFTb3VyY2UgPT09ICdvYmplY3QnXG5cbiAgICByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlZFxuICB9KVxuXG4gIC8qKlxuICAgKiBnZXQgZGF0YSBmcm9tIGRhdGFTb3VyY2Ugb3IgbG9jYWwgZGF0YSxcbiAgICogYW5kIGFsc28gc2V0IHVwIFwidmFsaWRhdGlvblwiXG4gICAqL1xuICBjb252ZXJ0RGF0YUZyb21GaWVsZHMgPSBtZW1vaXplKChmaWVsZHM6IEFycmF5PGFueT4sIGRhdGFTb3VyY2U6IGFueSkgPT4ge1xuICAgIGZpZWxkcy5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgaWYgKHJvdy50eXBlICE9PSAnRm9ybUJ1dHRvbnMnKSB7XG4gICAgICAgIHJvdy5maWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZGlzcGxheSAhPT0gZmFsc2UgJiYgaXRlbS50eXBlICE9PSAncmVuZGVyJyAmJiBpdGVtLnR5cGUgIT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmlbDmja7mupAocHJvcHMp5Y+R55Sf5pS55Y+Y77yM5Y+W5pWw5o2u5rqQ77yM5ZCm5YiZ5Y+W5pys5ZywKHN0YXRlKVxuICAgICAgICAgICAgdGhpcy5kYXRhW2l0ZW0ua2V5XSA9IHRoaXMuZGF0YUNoYW5nZWRcbiAgICAgICAgICAgICAgPyBkYXRhU291cmNlW2l0ZW0ua2V5XVxuICAgICAgICAgICAgICA6IHRoaXMuZGF0YVtpdGVtLmtleV1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5pWw5o2u5rqQKHByb3BzKeWPkeeUn+aUueWPmO+8miDlpoLmnpzmnInlgLzvvIzph43mlrDmoKHpqozvvJvmsqHmnInlgLzvvIzkuI3moKHpqoxcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSB0aGlzLnZhbGlkYXRlRmllbGQoaXRlbS5rZXksIHRoaXMuZGF0YVtpdGVtLmtleV0sIGl0ZW0ucHJvcHM/LnJ1bGVzIHx8IFtdKVxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uW2l0ZW0ua2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4uaW5pdCxcbiAgICAgICAgICAgICAgcnVsZXM6IGl0ZW0ucHJvcHM/LnJ1bGVzIHx8IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZGF0YUNoYW5nZWQgPSBmYWxzZVxuICB9KVxuXG4gIGlkID0gYEZPUk1fJHtwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b1N0cmluZygpLCAxMCkudG9TdHJpbmcoKX1gXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICAvLyBhZGQgZXh0ZW5kRmllbGRzIGludG8gZm9ybSBnZW5lcmF0aW5nL21hcHBpbmdcbiAgICBhZGRGaWVsZHModGhpcy5wcm9wcy5leHRlbmRGaWVsZHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlXG4gICAgLy8gZXh0ZW5kIHZhbGlkYXRvcnMgaW50byBGb3JtIFZhbGlkYXRvclxuICAgIEZvcm1WYWxpZGF0b3IuZXh0ZW5kVmFsaWRhdG9ycyh0aGlzLnByb3BzLmV4dGVuZFZhbGlkYXRvcnMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICByZW1vdmVMYWJlbFN0eWxlV2lkdGgodGhpcy5pZClcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIGZpZWxkIGNoYW5nZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgb25DaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlkIGNoYW5nZScsIGtleSwgdmFsdWUpXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgW2tleV06IHZhbHVlLFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlICYmIHRoaXMudmFsaWRhdGlvbltrZXldKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgLi4uRm9ybVZhbGlkYXRvci5jaGVjayh2YWx1ZSwgdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMpLFxuICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGtleSwgdmFsdWUsIHRoaXMuZGF0YSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSlcbiAgfVxuXG4gIC8qKlxuICAgKiDpqozor4HmiYDmnIlmaWVsZHNcbiAgICovXG4gIHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIGxldCB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgIGlmIChyb3cudHlwZSAhPT0gJ0Zvcm1CdXR0b25zJykge1xuICAgICAgICByb3cuZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmRpc3BsYXkgIT09IGZhbHNlICYmIGl0ZW0udHlwZSAhPT0gJ3JlbmRlcicgJiYgaXRlbS50eXBlICE9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXkgfSA9IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2tleV1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEZvcm1WYWxpZGF0b3IuY2hlY2sodmFsdWUsIHRoaXMudmFsaWRhdGlvbltrZXldLnJ1bGVzKVxuXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25ba2V5XSA9IHtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICBydWxlczogdGhpcy52YWxpZGF0aW9uW2tleV0ucnVsZXMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe30pXG4gICAgcmV0dXJuIHZhbGlkYXRlZFxuICB9XG5cbiAgLyoqXG4gICAqIG9uIFN1Ym1pdFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25TdWJtaXQgPSAoZT86IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEV2ZW50VGFyZ2V0Pik6IHZvaWQgPT4ge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuXG5cbiAgICBjb25zb2xlLmxvZygnc3VibWl0IGRhdGEnLCB0aGlzLmRhdGEpXG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN1Ym1pdCkgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLmRhdGEpXG4gIH1cblxuICAvKipcbiAgICogb24gUmVzZXRcbiAgICovXG4gIG9uUmVzZXQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZXNldCkgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBidXR0b24gY2xpY2tcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBvbkJ1dHRvbkNsaWNrID0gKHR5cGU6IHN0cmluZywgY2I/OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgdGhpcy5vblN1Ym1pdCgpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICB0aGlzLm9uUmVzZXQoKVxuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKHRoaXMuZGF0YSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5qCh6aqMXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBydWxlc1xuICAgKi9cbiAgdmFsaWRhdGVGaWVsZCA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZXM6IEFycmF5PHN0cmluZz4gPSBbXSkgPT4ge1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb25ba2V5XSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBGb3JtVmFsaWRhdG9yLmNoZWNrKHZhbHVlLCBydWxlcylcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsaWRhdGVkOiB0cnVlLCBtc2c6ICcnIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsIGRhdGFTb3VyY2UsIGxhYmVsRGlyZWN0aW9uLCBsYWJlbFdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5pc0RhdGFTb3VyY2VDaGFuZ2VkKGRhdGFTb3VyY2UpXG4gICAgdGhpcy5jb252ZXJ0RGF0YUZyb21GaWVsZHMoZmllbGRzLCBkYXRhU291cmNlIHx8IHt9KSAvLyBkYXRhIHRvIGZpZWxkc1xuICAgIGFkZExhYmVsU3R5bGVXaWR0aChsYWJlbFdpZHRoLCBsYWJlbERpcmVjdGlvbiwgdGhpcy5pZClcblxuICAgIHJldHVybiAoXG4gICAgICA8U3BpbiBzcGlubmluZz17dGhpcy5wcm9wcy5zcGlubmluZ30+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBpZD17dGhpcy5pZH0+XG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkOiBGaWVsZHNDb25mVCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGByb3dfJHtpZHh9YFxuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IGZpZWxkLmRpc3BsYXkgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmaWVsZC5kaXNwbGF5XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZSB8fCAnZmllbGQnXG4gICAgICAgICAgICBpZiAoIWRpc3BsYXkpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAnZmllbGQnXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dGhpcy52YWxpZGF0aW9ufVxuICAgICAgICAgICAgICAgICAgbGFiZWxEaXJlY3Rpb249e2xhYmVsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICA8Rm9vdGVyQnV0dG9uc1xuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1NwaW4+XG4gICAgKVxuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgVmFsaWRhdG9yVCwgVmFsaWRhdG9yQ2hpbGRULCBFeHRlbmRWYWxpZGF0b3IgfSBmcm9tICcuLi9pbmRleC5kJ1xuXG5jbGFzcyBWYWxpZGF0aW9uIHtcbiAgdmFsaWRhdG9yczogVmFsaWRhdG9yVCA9IHtcbiAgICAvLyDlv4XloatcbiAgICByZXF1aXJlZDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdKSA9PiBub3RFbXB0eVZhbHVlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwLFxuICAgICAgZXJyb3JNc2c6ICflv4XloasnLFxuICAgIH0sXG4gICAgbWluX2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID49IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lsI/kuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IG51bWJlcikgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lpKfkuo4ke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgbGVuZ3RoOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aDogbnVtYmVyKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCxcbiAgICAgIGVycm9yTXNnOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICAgIH0sXG4gICAgLy8g5omL5py6XG4gICAgbW9iaWxlOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjFcXGR7MTB9Ly50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnLFxuICAgIH0sXG4gICAgLy8g5pWw5a2XXG4gICAgbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiAvXFxkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG75L2N5pWw5a2X5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaVtOaVsFxuICAgIGludDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gIS9cXEQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICflv4XpobvkuLrmlbTmlbAnLFxuICAgIH0sXG4gICAgLy8g5q2j5pWwXG4gICAgcG9zaXRpdmVfbnVtYmVyOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IDAsXG4gICAgICBlcnJvck1zZzogJ+W/hemhu+S4uuato+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3kuLrotJ/mlbBcbiAgICBub3RfbmVnYXRpdmU6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IDAsXG4gICAgICBlcnJvck1zZzogJ+S4jeiDveS4uui0n+aVsCcsXG4gICAgfSxcbiAgICAvLyDkuI3lsI/kuo5cbiAgICBtaW46IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqO5oiW562J5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5aSn5LqOXG4gICAgbW9yZV90aGFuOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtaW5WYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA+IG1pblZhbHVlLFxuICAgICAgZXJyb3JNc2c6IChtaW5WYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75aSn5LqOJHttaW5WYWx1ZX1gLFxuICAgIH0sXG4gICAgLy8g5LiN6IO95aSn5LqOXG4gICAgbWF4OiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KHZhbHVlKSA8PSBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIOWwj+S6jlxuICAgIGxlc3NfdGhhbjoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZSxcbiAgICAgIGVycm9yTXNnOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6jiR7bWF4VmFsdWV9YCxcbiAgICB9LFxuICAgIC8vIHByaWNlXG4gICAgcHJpY2U6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCEvXFxkLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWU6IHN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBwOiBzdHJpbmdbXSA9IHN0cmluZ1ZhbHVlLnNwbGl0KCcuJylcbiAgICAgICAgICBpZiAocC5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAocFsxXS5sZW5ndGggPiAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn5b+F6aG76KaB56ym5ZCI6LSn5biB5qC85byPLOWmgiAxMC4yMycsXG4gICAgfSxcblxuICAgIHByaWNlX2Zvcm1hdDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBhbnkgPSA4KSA9PiB7XG4gICAgICAgIGxldCBzdHJpbmdWYWx1ZSA9ICcnXG4gICAgICAgIGlmIChub3RFbXB0eVZhbHVlKHZhbHVlKSkgc3RyaW5nVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYF4oXFxcXCt8XFxcXC0pP1swLTldezEsJHtsZW5ndGh9fShcXFxcLlswLTldezEsMn0pPyRgKVxuICAgICAgICByZXR1cm4gcmVnLnRlc3Qoc3RyaW5nVmFsdWUpXG4gICAgICB9LFxuICAgICAgZXJyb3JNc2c6IChsZW5ndGg6IGFueSA9IDYpID0+IGDmnIDlpKcke2xlbmd0aH3kvY3mlbTmlbDvvIzlsI/mlbDkuI3otoXov4cy5L2NYCxcbiAgICB9LFxuXG4gICAgLyog5pW05pWw6YOo5YiG5pyA5aSn5YC8ICovXG4gICAgcG9zaXRpdmVfbWF4X2xlbmd0aDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodmFsdWUpICE9PSB2YWx1ZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgJiYgc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpXG4gICAgICAgICAgICBpZiAocFswXS5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nVmFsdWUubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogKGxlbmd0aDogbnVtYmVyKSA9PiBg5pW05pWw6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgICB9LFxuXG4gICAgdGVsZXBob25lOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSQvLnRlc3QodmFsdWUpLFxuICAgICAgZXJyb3JNc2c6ICfpnIDnrKblkIjvvIjljLrlj7ct55S16K+d5Y+356CB77yJ55qE5qC85byPJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueuseWQjue8gFxuICAgIGVtYWlsX3N1ZmZpeDoge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2VcbiAgICAgICAgY29uc3QgcmVnID0gL15AKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgICAgcmV0dXJuIHJlZy50ZXN0KHZhbHVlKVxuICAgICAgfSxcbiAgICAgIGVycm9yTXNnOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566x5ZCO57yAKOWMheaLrEApJyxcbiAgICB9LFxuICAgIC8vIOeUteWtkOmCrueusVxuICAgIGVtYWlsOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZyA9IC9bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKyg/Oi5bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBlcnJvck1zZzogJ+ivt+i+k+WFpeato+ehrueahOmCrueusScsXG4gICAgfSxcbiAgICAvLyDnlKjmiLflkI1cbiAgICB1c2VybmFtZToge1xuICAgICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4gL14oW2EtekEtWjAtOV8tXXs1LDIwfSkkLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Ne+9njIw5L2N55qE5pWw5a2X44CB5a2X5q+N57uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOWvhueggVxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZC4qKSg/PS4qXFxXLiopW2EtekEtWjAtOVxcU11bXlxcdTRlMDAtXFx1OWZhNV17NiwyMH0kLy50ZXN0KHZhbHVlKSxcbiAgICAgIGVycm9yTXNnOiAn55Sx6ZW/5bqm5Li6Nu+9njE25L2N55qE5pWw5a2X44CB5aSn5bCP5a2X5q+N5Lul5Y+K56ym5Y+357uE5oiQJyxcbiAgICB9LFxuICAgIC8vIOi6q+S7veivgVxuICAgIGlkX2NhcmQ6IHtcbiAgICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IC8oXlxcZHsxNX0kKXwoXlxcZHsxOH0kKXwoXlxcZHsxN30oXFxkfFh8eCkkKS8udGVzdCh2YWx1ZSksXG4gICAgICBlcnJvck1zZzogJ+i6q+S7veivgeWPt+eggeS4jeespuWQiCcsXG4gICAgfSxcbiAgfVxuXG4gIGV4dGVuZFZhbGlkYXRvcnModmFsaWRhdG9yczogQXJyYXk8RXh0ZW5kVmFsaWRhdG9yPik6IHZvaWQge1xuICAgIHZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yOiBFeHRlbmRWYWxpZGF0b3IpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgLi4ucmVzdCB9ID0gdmFsaWRhdG9yXG4gICAgICB0aGlzLnZhbGlkYXRvcnNbbmFtZV0gPSByZXN0XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrKHY6IHN0cmluZyB8IG51bWJlciwgcnVsZXM6IHN0cmluZ1tdKSB7XG4gICAgbGV0IHZhbHVlID0gdlxuICAgIGxldCBzdWNjZXNzID0geyB2YWxpZGF0ZWQ6IHRydWUsIG1zZzogJycgfVxuXG4gICAgaWYgKCFydWxlcyB8fCAhKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm4gc3VjY2Vzc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKVxuICAgIH1cblxuICAgIHJ1bGVzLnNvbWUocnVsZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICAgICAgbGV0IHZhbGlkYXRvcjogVmFsaWRhdG9yQ2hpbGRUXG4gICAgICBsZXQgc1J1bGU6IGFueVtdID0gW11cblxuICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3JzW3J1bGVdXG4gICAgICAgIHJlc3VsdCA9IHZhbGlkYXRvci52YWxpZGF0b3IodmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGlmIChydWxlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICAgICAgICBzUnVsZSA9IHJ1bGUuc3BsaXQoJzonKVxuICAgICAgICAgIHZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yc1tzUnVsZVswXV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlLCBzUnVsZVsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcnNbcnVsZV1cbiAgICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdG9yKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IHZhbGlkYXRvcj8uZXJyb3JNc2dcbiAgICAgICAgc3VjY2VzcyA9IHtcbiAgICAgICAgICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1zZzogdHlwZW9mIGVyciA9PT0gJ2Z1bmN0aW9uJyA/IGVycihzUnVsZVsxXSkgOiBlcnIsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHN1Y2Nlc3NcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvbigpXG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiAoXG4gIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsXG4pXG5cbmV4cG9ydCBjb25zdCBzaW1wbGVDbG9uZSA9IDxUPihkYXRhOiBUKTogVCA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGBmb3JtLWxhYmVsLXdpZHRoLSR7aWR9YFxuICBjb25zdCBET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRyaWJ1dGVOYW1lKVxuICBpZiAoRE9NKSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKERPTSlcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGlkKVxuXG4gIGlmIChsYWJlbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3QgU1RZTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgU1RZTEUuaWQgPSBhdHRyaWJ1dGVOYW1lXG4gICAgU1RZTEUuaW5uZXJIVE1MID0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9YFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoU1RZTEUpXG4gIH1cbn1cblxuLyoqXG4gKiDmoLnmja52YWx1ZeaVsOe7hOiOt+WPluaVsOe7hOWvueixoVt7bGFiZWwsIHZhbHVlfV3nmoTlpJrkuKpsYWJlbOWAvFxuICovXG5leHBvcnQgY29uc3QgZ2V0SXRlbUxhYmVsc0J5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogQXJyYXk8YW55Pixcbik6IHN0cmluZyB8IEVsZW1lbnQgPT4ge1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW11cbiAgdmFsdWUuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGNvbnN0IGZpbmRJdGVtID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbClcbiAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgIGxhYmVscy5wdXNoKGZpbmRJdGVtLmxhYmVsKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGxhYmVscy5qb2luKCfvvIwnKVxufVxuXG4vKipcbiAqIOagueaNrnZhbHVl6I635Y+W5pWw57uE5a+56LGhW3tsYWJlbCwgdmFsdWV9XeeahGxhYmVs5YC8XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIG1vZGVcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEl0ZW1MYWJlbEJ5VmFsdWUgPSAoXG4gIGl0ZW1zOiBBcnJheTxhbnk+LFxuICB2YWx1ZTogYW55LFxuICBtb2RlPzogYW55LFxuKTogc3RyaW5nID0+IHtcbiAgbGV0IG5ld0l0ZW1zID0gaXRlbXNcbiAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgIG5ld0l0ZW1zID0gW11cbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXA6IGFueSA9IGl0ZW1zW2tleV1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGdyb3VwKSkge1xuICAgICAgICBuZXdJdGVtcyA9IFsuLi5uZXdJdGVtcywgLi4uZ3JvdXBdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlmICghbW9kZSkge1xuICAgIGNvbnN0IGZvdW5kID0gbmV3SXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWUpXG4gICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmb3VuZFswXS5sYWJlbFxuICAgIH1cbiAgfSBlbHNlIGlmICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGZvdW5kID0gbmV3SXRlbXMuZmlsdGVyKGl0ZW0gPT4gdmFsdWUuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpXG4gICAgaWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmb3VuZC5tYXAoZm91bmRJdGVtID0+IGZvdW5kSXRlbS5sYWJlbCkuam9pbignLCAnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gJydcbn1cblxuLyoqXG4gKiBnZXQgVGFyZ2V0IHZhbHVlXG4gKiBAcGFyYW0gZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGFyZ2V0VmFsdWUgPSAoZTogYW55KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUgJiYgZS50YXJnZXRcbiAgbGV0IHZhbHVlXG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub3RFbXB0eVZhbHVlKHRhcmdldD8udmFsdWUpKSB7XG4gICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGVcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2F4aW9zX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21lbW9pemVfb25lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=
