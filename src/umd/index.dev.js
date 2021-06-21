(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ant-design/icons"), require("antd"), require("moment"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@ant-design/icons", "antd", "moment", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@ant-design/icons"), require("antd"), require("moment"), require("react")) : factory(root["@ant-design/icons"], root["antd"], root["moment"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__ant_design_icons__, __WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);




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
        restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["type"]);

    var item = buttonTexts[key];

    if (item) {
      defaultDom.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        type: config[key].type,
        key: key,
        onClick: config[key].cb
      }, restProps), config[key].text));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: padding,
      textAlign: align
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
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
      type = item.type,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(item, ["label", "type"]);

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
  }, cols), type === 'render' && (typeof rest.render === 'function' ? rest.render() : rest.render), type !== 'render' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
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

/***/ "./src/Form/fields/Cascader/index.tsx":
/*!********************************************!*\
  !*** ./src/Form/fields/Cascader/index.tsx ***!
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

  var onChangeThis = function onChangeThis(newValue) {
    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(newValue);
    } // form的onChange


    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Cascader"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
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

/***/ "./src/Form/fields/Upload/PicPreview.scss":
/*!************************************************!*\
  !*** ./src/Form/fields/Upload/PicPreview.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PicPreview_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PicPreview.scss */ "./src/Form/fields/Upload/PicPreview.scss");
/* harmony import */ var _PicPreview_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PicPreview_scss__WEBPACK_IMPORTED_MODULE_4__);





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
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(current),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      src = _useState4[0],
      setSrc = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      deg = _useState6[0],
      setDeg = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
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

/***/ "./src/Form/fields/Upload/hepler.ts":
/*!******************************************!*\
  !*** ./src/Form/fields/Upload/hepler.ts ***!
  \******************************************/
/*! exports provided: generateFileObjectByUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFileObjectByUrl", function() { return generateFileObjectByUrl; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

var generateFileObjectByUrl = function generateFileObjectByUrl(url) {
  var file = {
    uid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    // name: url.replace(/(.*\/)*([^.]+)/i, '$2').split('?')[0],
    name: url.replace(/(.*\/)*([^.]+)/i, '$2'),
    status: 'done',
    url: url
  };
  return file;
};

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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hepler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hepler */ "./src/Form/fields/Upload/hepler.ts");
/* harmony import */ var _PicPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PicPreview */ "./src/Form/fields/Upload/PicPreview.tsx");









var useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState,
    useEffect = react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect;
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
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = useState({
    visible: false,
    url: ''
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      imagesUrls = _useState6[0],
      setImagesUrls = _useState6[1];

  useEffect(function () {
    console.log('value', value);

    if (Array.isArray(value)) {
      var defaultFileList = [];
      value.forEach(function (item) {
        if (typeof item === 'string') {
          defaultFileList.push(Object(_hepler__WEBPACK_IMPORTED_MODULE_7__["generateFileObjectByUrl"])(item));
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

      if (!file.url && (_file$response = file.response) !== null && _file$response !== void 0 && _file$response.url) {
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
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(args) {
      var file, onSuccess, onError, onProgress, fileUrl;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
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
              antd__WEBPACK_IMPORTED_MODULE_5__["message"].error('上传失败', _context.t0);
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
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].error('仅支持：JPEG/PNG/SVG/BVP 格式 2M以内');
      return antd__WEBPACK_IMPORTED_MODULE_5__["Upload"].LIST_IGNORE;
    }

    return true;
  };

  var uploadButtonText = customProps.uploadButtonText;
  var uploadButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["PlusOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    customRequest: customRequest,
    beforeUpload: beforeUpload,
    onChange: onChangeThis,
    onPreview: handlePreview,
    fileList: fileList
  }), showButton && uploadButton), preview.visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PicPreview__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

/* harmony import */ var _fields_Upload_hepler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/Upload/hepler */ "./src/Form/fields/Upload/hepler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFileObjectByUrl", function() { return _fields_Upload_hepler__WEBPACK_IMPORTED_MODULE_12__["generateFileObjectByUrl"]; });















var useEffect = react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect,
    useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState,
    useImperativeHandle = react__WEBPACK_IMPORTED_MODULE_3___default.a.useImperativeHandle,
    forwardRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef;
var formID = "FORM_".concat(Object(_utils_string__WEBPACK_IMPORTED_MODULE_5__["randomString"])());

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

      var result = Object(_rules__WEBPACK_IMPORTED_MODULE_9__["validate"])(name, validatedValue, validationItem.rules);
      validationItem.message = result.message;
      validationItem.state = result.state;
      console.log("validated ".concat(name), result);
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


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
    spinning: spinning
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
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
  }), submitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, submitter, {
    onReset: onReset,
    onSubmit: onFormSubmit
  }))));
}

var Form = forwardRef(JForm);

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
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return value.length >= Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u4E0D\u5C0F\u4E8E".concat(length);
  }
}, {
  name: 'maxLength',
  validator: function validator(value, length) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return value.length <= Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u4E0D\u5927\u4E8E".concat(length);
  }
}, {
  name: 'length',
  validator: function validator(value, length) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return value.length === Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u5FC5\u987B\u4E3A".concat(length);
  }
}, {
  name: 'min',
  validator: function validator(value, minValue) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return parseFloat(value) >= minValue;
  },
  message: function message(minValue) {
    return "\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E".concat(minValue);
  }
}, {
  name: 'max',
  validator: function validator(value, maxValue) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return parseFloat(value) <= maxValue;
  },
  message: function message(maxValue) {
    return "\u5FC5\u987B\u5C0F\u4E8E\u6216\u7B49\u4E8E".concat(maxValue);
  }
}, {
  name: 'more_than',
  validator: function validator(value, minValue) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return parseFloat(value) > minValue;
  },
  message: function message(maxValue) {
    return "\u5FC5\u987B\u5927\u4E8E".concat(maxValue);
  }
}, // 小于
{
  name: 'less_than',
  validator: function validator(value, maxValue) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return parseFloat(value) < maxValue;
  },
  message: function message(maxValue) {
    return "\u5FC5\u987B\u5C0F\u4E8E".concat(maxValue);
  }
}, {
  name: 'mobile',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return /^1\d{10}/.test(value);
  },
  message: '请输入正确11位手机号'
}, {
  name: 'number',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return /\d/.test(value);
  },
  message: '请输入正确11位手机号'
}, {
  name: 'int',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return !/\D/.test(value);
  },
  message: '必须为整数'
}, {
  name: 'positive_number',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return parseFloat(value) > 0;
  },
  message: '必须为正数'
}, {
  name: 'telephone',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return /^0\d{2,3}-\d{7,8}$/.test(value);
  },
  message: '需符合（区号-电话号码）的格式'
}, {
  name: 'email',
  // eslint-disable-next-line
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    var reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return reg.test(value);
  },
  message: '请输入正确的邮箱'
}, {
  name: 'email_suffix',
  // eslint-disable-next-line
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    var reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return reg.test(value);
  },
  message: '请输入正确的邮箱'
}, {
  name: 'password',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S][^\u4e00-\u9fa5]{6,20}$/.test(value);
  },
  message: '由长度为6～16位的数字、大小字母以及符号组成'
}, {
  name: 'id_card',
  validator: function validator(value) {
    if (!Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["notEmptyValue"])(value)) return true;
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
  },
  message: '身份证号码不符合'
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
      var _state = defaultRuleItem.validator(value, ruleValue);

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
  var emptyValue = [null, undefined, '']; // 非空

  if (emptyValue.indexOf(value) !== -1) {
    return false;
  } // 数组也非空


  if (Array.isArray(value) && value.length === 0) {
    return false;
  }

  return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9Gb3JtQ29sLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQXV0b0NvbXBsZXRlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQ2FzY2FkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9DaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0NoZWNrYm94R3JvdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9EYXRlUGlja2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9OdW1iZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9QYXNzd29yZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1JhZGlvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUmFkaW9Hcm91cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1JhbmdlUGlja2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvU2VhcmNoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvU2VsZWN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvU3dpdGNoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvVGV4dGFyZWEvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9UaW1lUGlja2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvVXBsb2FkL1BpY1ByZXZpZXcuc2Nzcz84NTA0Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9VcGxvYWQvUGljUHJldmlldy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1VwbG9hZC9oZXBsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1VwbG9hZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vcnVsZXMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9ydWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9kYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3V0aWxzL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImJ1dHRvblRleHRzIiwiYnV0dG9uUHJvcHMiLCJyZW5kZXIiLCJhbGlnbiIsImRpcmVjdGlvbiIsInBhZGRpbmciLCJvblJlc2V0Iiwib25TdWJtaXQiLCJyZXNldCIsInN1Ym1pdCIsImNvbmZpZyIsInR5cGUiLCJjYiIsInRleHQiLCJkZWZhdWx0RG9tIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJyZXN0UHJvcHMiLCJpdGVtIiwicHVzaCIsInRleHRBbGlnbiIsIkZvcm1Db2wiLCJjb2xQcm9wcyIsInNwYW4iLCJpc1ZlcnRpY2FsIiwidmFsdWUiLCJvbkZpZWxkQ2hhbmdlIiwib25LZXlQcmVzcyIsInZhbGlkYXRlIiwibGFiZWwiLCJyZXN0IiwibGFibGVUZXh0IiwiY29scyIsImxhYmVsQ29sIiwid3JhcHBlckNvbCIsImlzUmVxdWlyZWQiLCJpdGVtUnVsZXMiLCJmaW5kQXJyYXlPYmplY3QiLCJuYW1lIiwicnVsZXMiLCJzdGF0ZSIsIm1lc3NhZ2UiLCJJbnB1dEZpZWxkIiwiZmllbGRQcm9wcyIsImZpbHRlck9wdGlvbiIsImlucHV0VmFsdWUiLCJvcHRpb24iLCJpbmRleE9mIiwib25DaGFuZ2VUaGlzIiwibmV3VmFsdWUiLCJvbkNoYW5nZSIsImFyZ3MiLCJ0YXJnZXQiLCJjaGVja2VkIiwiRGF0ZVBpY2tlckZpZWxkIiwiZ2V0RGF0ZVRpbWVTdGFtcCIsImdldERhdGVNb21lbnQiLCJnZXRSYW5nZVRpbWVTdGFtcCIsImdldFJhbmdlTW9tZW50IiwiU2VhcmNoIiwiSW5wdXQiLCJTZWFyY2hGaWVsZCIsIlRpbWVQaWNrZXJGaWVsZCIsInVzZVN0YXRlIiwiUmVhY3QiLCJQaWNQcmV2aWV3ZXIiLCJzaG93TGlzdCIsInVybCIsInN0eWxlIiwiY3VycmVudCIsIm9uSGlkZSIsImltYWdlcyIsImZpbHRlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic3JjIiwic2V0U3JjIiwiZGVnIiwic2V0RGVnIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0luaXQiLCJzZXRJc0luaXQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVTaG93IiwidGFyZ2V0U3JjIiwicHJldiIsImlkeCIsImxlbmd0aCIsIm5leHQiLCJyb3RhdGlvbiIsInJvdGF0aW9uQmFjayIsIm9uTG9hZCIsIm1hcCIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCIsImZpbGUiLCJ1aWQiLCJ2NCIsInJlcGxhY2UiLCJzdGF0dXMiLCJ1c2VFZmZlY3QiLCJVcGxvYWRGaWVsZCIsImN1c3RvbVByb3BzIiwibWF4U2l6ZSIsIm1heExlbmd0aCIsImVkaXRNb2RlIiwiZGlzYWJsZWQiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwicHJldmlldyIsInNldFByZXZpZXciLCJpbWFnZXNVcmxzIiwic2V0SW1hZ2VzVXJscyIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImlzQXJyYXkiLCJkZWZhdWx0RmlsZUxpc3QiLCJmaWxlcyIsInJlc3BvbnNlIiwic3BsaWNlIiwicHJvY2Vzc0lEIiwicHJvY2VzcyIsIm9uUHJvZ3Jlc3MiLCJwZXJjZW50IiwibmV4dFBlcmNlbnQiLCJNYXRoIiwicmFuZG9tIiwic2V0VGltZW91dCIsImN1c3RvbVJlcXVlc3QiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZmlsZVVybCIsImNsZWFyVGltZW91dCIsImVycm9yIiwiYmVmb3JlVXBsb2FkIiwiaXNGaWxlU2l6ZUV4Y2Nlc3NMaW1pdGVkIiwic2l6ZSIsIlVwbG9hZCIsIkxJU1RfSUdOT1JFIiwidXBsb2FkQnV0dG9uVGV4dCIsInVwbG9hZEJ1dHRvbiIsIm1hcmdpblRvcCIsImhhbmRsZVByZXZpZXciLCJ1cmxzIiwiaGFuZGxlUHJldmlld0NhbmNlbCIsInNob3dCdXR0b24iLCJGaWVsZE1hcCIsImlucHV0Iiwic2VhcmNoIiwidGV4dGFyZWEiLCJUZXh0YXJlYUZpZWxkIiwicGFzc3dvcmQiLCJQYXNzd29yZEZpZWxkIiwibnVtYmVyIiwiTnVtYmVyRmllbGQiLCJzZWxlY3QiLCJTZWxlY3RGaWVsZCIsInN3aXRjaCIsIlN3aXRjaEZpZWxkIiwiYXV0b0NvbXBsZXRlIiwiQXV0b0NvbXBsZXRlRmllbGQiLCJjaGVja2JveCIsIkNoZWNrYm94RmllbGQiLCJjaGVja2JveEdyb3VwIiwiQ2hlY2tib3hHcm91cEZpZWxkIiwiZGF0ZVBpY2tlciIsInJhbmdlUGlja2VyIiwiUmFuZ2VQaWNrZXJGaWVsZCIsInRpbWVQaWNrZXIiLCJyYWRpbyIsIlJhZGlvRmllbGQiLCJyYWRpb0dyb3VwIiwiUmFkaW9Hcm91cEZpZWxkIiwidXBsb2FkIiwiY2FzY2FkZXIiLCJDYXNjYWRlckZpZWxkIiwiRHluYW1pY0ZpZWxkIiwiQ29tcG9uZW50IiwiZXh0ZW5kRmllbGRzIiwiZmllbGRzIiwiZmllbGQiLCJmb3VuZEtleSIsImZpbmQiLCJFcnJvciIsImNvbXBvbmVudCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJmb3J3YXJkUmVmIiwiZm9ybUlEIiwicmFuZG9tU3RyaW5nIiwiSkZvcm0iLCJyZWYiLCJndXR0ZXIiLCJsYWJlbERpcmVjdGlvbiIsImxhYmVsV2lkdGgiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwic2NoZW1hIiwiZGF0YSIsInN1Ym1pdHRlciIsInNwaW5uaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInZhbGlkYXRpb24iLCJzZXRWYWxpZGF0aW9uIiwiYWRkTGFiZWxTdHlsZVdpZHRoIiwicmVtb3ZlTGFiZWxTdHlsZVdpZHRoIiwicmVzdWx0Iiwicm93IiwidW5kZWZpbmVkIiwiZ2V0VmFsaWRhdGVCeU5hbWUiLCJ2YWxpZGF0aW9uSXRlbSIsImlzQWxsVmFsaWRhdGVkIiwidmFsaWRhdGVJdGVtIiwidiIsInZhbGlkYXRlRmllbGQiLCJub3RWYWxpZGF0ZWRJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJ2YWxpZGF0ZWRWYWx1ZSIsIm9sZFZhbHVlIiwic2ltcGxlQ2xvbmUiLCJnZXRWYWx1ZSIsImNhbGxTdWJtaXQiLCJvbkZvcm1TdWJtaXQiLCJjYWxsVmFsaWRhdGUiLCJnZXREYXRhIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoYXJDb2RlIiwicm93S2V5IiwiRm9ybSIsImRlZmF1bHRSdWxlcyIsInZhbGlkYXRvciIsIm5vdEVtcHR5VmFsdWUiLCJOdW1iZXIiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCJtYXhWYWx1ZSIsInRlc3QiLCJyZWciLCJleHRlbmRSdWxlcyIsInJ1bGUiLCJpbmRleCIsIndhcm4iLCJnZXRSdWxlSXRlbUJ5TmFtZSIsImZvdW5kUnVsZSIsInNvbWUiLCJydWxlSXRlbSIsInJ1bGVOYW1lIiwicnVsZVZhbHVlIiwiZGVmYXVsdFJ1bGVJdGVtIiwibXNnIiwibW9tZW50IiwidmFsdWVPZiIsInZhbCIsImFycmF5IiwiZm91bmQiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdHJpbmdBcnJheSIsInNwbGl0IiwiaSIsInJvdW5kIiwiam9pbiIsImVtcHR5VmFsdWUiLCJpZCIsImF0dHJpYnV0ZU5hbWUiLCJET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZCIsInJlbW92ZUNoaWxkIiwid2lkdGgiLCJTVFlMRSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZXMiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQWNPLFdBQWQsQ0FBMEJKLEtBQTFCO0FBQ0Q7QUFDRixDQVpNLEM7Ozs7Ozs7Ozs7O0FDUlAsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwibW9tZW50XCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFudC1kZXNpZ24vaWNvbnNcIiwgXCJhbnRkXCIsIFwibW9tZW50XCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBhbnQtZGVzaWduL2ljb25zXCJdLCByb290W1wiYW50ZFwiXSwgcm9vdFtcIm1vbWVudFwiXSwgcm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvRm9ybS9pbmRleC50c3hcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdjEgfSBmcm9tICcuL3YxLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjMgfSBmcm9tICcuL3YzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjQgfSBmcm9tICcuL3Y0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjUgfSBmcm9tICcuL3Y1LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTklMIH0gZnJvbSAnLi9uaWwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsaWRhdGUgfSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZSB9IGZyb20gJy4vcGFyc2UuanMnOyIsIi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJleHBvcnQgZGVmYXVsdCAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJzsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICB2YXIgdjtcbiAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7IC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG5cbnZhciBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHN0cmluZ2lmeShiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9wYXJzZS5qcyc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9IC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG5cblxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdpZnkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbnZhciB2NSA9IHYzNSgndjUnLCAweDUwLCBzaGExKTtcbmV4cG9ydCBkZWZhdWx0IHY1OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc3Vic3RyKDE0LCAxKSwgMTYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFNwYWNlIH0gZnJvbSAnYW50ZCc7XG5cbmludGVyZmFjZSBJcHJvcHMge1xuICBvblJlc2V0OiAoKSA9PiB2b2lkO1xuICBvblN1Ym1pdDogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wczogUkpGb3JtLlN1Ym1pdHRlciAmIElwcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGJ1dHRvblRleHRzLFxuICAgIGJ1dHRvblByb3BzID0ge30sXG4gICAgcmVuZGVyLFxuICAgIGFsaWduID0gJ2NlbnRlcicsXG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnLFxuICAgIHBhZGRpbmcgPSAnNDJweCAwIDI0cHggMCcsXG4gICAgb25SZXNldCxcbiAgICBvblN1Ym1pdCxcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IHJlc2V0LCBzdWJtaXQgfSA9IGJ1dHRvblRleHRzIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgcmVzZXQ6IHtcbiAgICAgIHR5cGU6IGJ1dHRvblByb3BzPy5yZXNldD8udHlwZSB8fCAnZGVmYXVsdCcsXG4gICAgICBjYjogb25SZXNldCxcbiAgICAgIHRleHQ6IHJlc2V0LFxuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICB0eXBlOiBidXR0b25Qcm9wcz8uc3VibWl0Py50eXBlIHx8ICdwcmltYXJ5JyxcbiAgICAgIGNiOiBvblN1Ym1pdCxcbiAgICAgIHRleHQ6IHN1Ym1pdCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGRlZmF1bHREb20gPSBbXTtcbiAgT2JqZWN0LmtleXMoYnV0dG9uVGV4dHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHsgIHR5cGUsIC4uLnJlc3RQcm9wc30gPSBidXR0b25Qcm9wc1trZXldIHx8IHt9O1xuICAgIGNvbnN0IGl0ZW0gPSBidXR0b25UZXh0c1trZXldO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBkZWZhdWx0RG9tLnB1c2goXG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdHlwZT17Y29uZmlnW2tleV0udHlwZX0gXG4gICAgICAgICAga2V5PXtrZXl9IFxuICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpZ1trZXldLmNifVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29uZmlnW2tleV0udGV4dH1cbiAgICAgICAgPC9CdXR0b24+LFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nLCB0ZXh0QWxpZ246IGFsaWduIH19PlxuICAgICAgPFNwYWNlIGFsaWduPXthbGlnbn0gZGlyZWN0aW9uPXtkaXJlY3Rpb259PlxuICAgICAgICB7cmVuZGVyID8gcmVuZGVyKHByb3BzLCBkZWZhdWx0RG9tKSA6IGRlZmF1bHREb219XG4gICAgICA8L1NwYWNlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCwgRm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IER5bmFtaWNGaWVsZCBmcm9tICcuL2ZpZWxkcyc7XG5pbXBvcnQgeyBmaW5kQXJyYXlPYmplY3QgfSBmcm9tICcuL3V0aWxzL29iamVjdCc7XG5cbi8qKlxuICog5riy5p+TY2VsbCBpdGVtXG4gKiBAcGFyYW0gaXRlbVxuICogQHBhcmFtIGdsb2JhbFNwYW5cbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IEZvcm1Db2wgPSAoY29sUHJvcHM6IFJKRm9ybS5JQ29sUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgaXRlbSwgc3BhbiwgaXNWZXJ0aWNhbCwgdmFsdWUsIG9uRmllbGRDaGFuZ2UsIG9uS2V5UHJlc3MsIHZhbGlkYXRlIH0gPVxuICAgIGNvbFByb3BzO1xuXG4gIGNvbnN0IHsgbGFiZWwsIHR5cGUsIC4uLnJlc3QgfSA9IGl0ZW07XG5cbiAgY29uc3QgbGFibGVUZXh0ID0gdHlwZW9mIGxhYmVsID09PSAnZnVuY3Rpb24nID8gbGFiZWwoKSA6IGxhYmVsO1xuXG4gIGNvbnN0IGNvbHMgPSBpc1ZlcnRpY2FsXG4gICAgPyB7IGxhYmVsQ29sOiB7IHNwYW46IDI0IH0sIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSB9XG4gICAgOiB7fTtcblxuICBjb25zdCBpc1JlcXVpcmVkID0gKGl0ZW1SdWxlczogUkpGb3JtLlJ1bGVzW10gPSBbXSkgPT5cbiAgICAhIWZpbmRBcnJheU9iamVjdChpdGVtUnVsZXMsICdyZXF1aXJlZCcsIHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbCBzcGFuPXtzcGFufSBvbktleVByZXNzPXtvbktleVByZXNzfT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbGFiZWw9e2xhYmxlVGV4dH1cbiAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkKGl0ZW0ucnVsZXMpfVxuICAgICAgICB2YWxpZGF0ZVN0YXR1cz17dmFsaWRhdGUgJiYgIXZhbGlkYXRlLnN0YXRlID8gJ2Vycm9yJyA6ICcnfVxuICAgICAgICBoZWxwPXt2YWxpZGF0ZT8ubWVzc2FnZX1cbiAgICAgICAgey4uLmNvbHN9XG4gICAgICA+XG4gICAgICAgIHt0eXBlID09PSAncmVuZGVyJyAmJiAodHlwZW9mIHJlc3QucmVuZGVyID09PSAnZnVuY3Rpb24nID8gcmVzdC5yZW5kZXIoKSA6IHJlc3QucmVuZGVyICl9XG4gICAgICAgIHt0eXBlICE9PSAncmVuZGVyJyAmJiAoXG4gICAgICAgICAgPER5bmFtaWNGaWVsZFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH1cbiAgICAgICAgICAgIG9uRmllbGRDaGFuZ2U9e29uRmllbGRDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvQ29sPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGUgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgaWYgKCFmaWVsZFByb3BzPy5maWx0ZXJPcHRpb24pIHtcbiAgICBmaWVsZFByb3BzLmZpbHRlck9wdGlvbiA9IChpbnB1dFZhbHVlLCBvcHRpb24pID0+XG4gICAgICBpbnB1dFZhbHVlICYmIG9wdGlvbi52YWx1ZS5pbmRleE9mKGlucHV0VmFsdWUpICE9PSAtMTtcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPEF1dG9Db21wbGV0ZSB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FzY2FkZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxDYXNjYWRlciB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQuY2hlY2tlZDtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IGNoZWNrZWQ9e3ZhbHVlfT5cbiAgICAgIHtmaWVsZFByb3BzLmxhYmVsfVxuICAgIDwvQ2hlY2tib3g+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENoZWNrYm94Lkdyb3VwIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdGFtcCwgZ2V0RGF0ZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXREYXRlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICB2YWx1ZT17Z2V0RGF0ZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8SW5wdXQgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dE51bWJlciB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0LlBhc3N3b3JkIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0+XG4gICAgICB7ZmllbGRQcm9wcy5sYWJlbH1cbiAgICA8L1JhZGlvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxSYWRpby5Hcm91cCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSYW5nZVRpbWVTdGFtcCwgZ2V0UmFuZ2VNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0UmFuZ2VUaW1lU3RhbXAoYXJnc1swXSk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXtnZXRSYW5nZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U2VhcmNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTZWxlY3Qgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U3dpdGNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dC5UZXh0QXJlYSB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldERhdGVUaW1lU3RhbXAsIGdldERhdGVNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0RGF0ZVRpbWVTdGFtcChhcmdzWzBdKTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGltZVBpY2tlclxuICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfVxuICAgICAgdmFsdWU9e2dldERhdGVNb21lbnQodmFsdWUpfVxuICAgIC8+XG4gICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7ICBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IFVuZG9PdXRsaW5lZCwgUmVkb091dGxpbmVkLCBMZWZ0T3V0bGluZWQsIFJpZ2h0T3V0bGluZWQsIENsb3NlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmltcG9ydCAnLi9QaWNQcmV2aWV3LnNjc3MnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNob3dMaXN0OiBib29sZWFuLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIHVybDogc3RyaW5nW10gfCBzdHJpbmcsXG4gIHN0eWxlPzogT2JqZWN0XG4gIG9uSGlkZT86IFZvaWRGdW5jdGlvblxufVxuXG4vKipcbiAqIOWbvueJh+mihOiniFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNQcmV2aWV3ZXIoXG4gIHtcbiAgICBzaG93TGlzdCA9IHRydWUsXG4gICAgdXJsID0gW10sXG4gICAgc3R5bGUgPSB7fSxcbiAgICBjdXJyZW50ID0gJycsXG4gICAgb25IaWRlLFxuICB9OiBQcm9wcyxcbikge1xuICBsZXQgaW1hZ2VzID0gW11cbiAgaWYgKHVybCkge1xuICAgIGltYWdlcyA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gW3VybF0gOiB1cmxcbiAgfVxuICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKGN1cnJlbnQpXG4gIGNvbnN0IFtkZWcsIHNldERlZ10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaXNJbml0LCBzZXRJc0luaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVTaG93ID0gKHRhcmdldFNyYzogc3RyaW5nKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRTcmModGFyZ2V0U3JjKVxuICB9XG5cbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggLT0gMVxuICAgIGlkeCA9IGlkeCA8IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggKz0gMVxuICAgIGlkeCA9IGlkeCA+PSBpbWFnZXMubGVuZ3RoID8gMCA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cblxuICBjb25zdCByb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnICsgMSlcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uQmFjayA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnIC0gMSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgaWYgKCFzaG93TGlzdCAmJiAhaXNJbml0KSB7XG4gICAgaGFuZGxlU2hvdyhjdXJyZW50KVxuICAgIHNldElzSW5pdCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMaXN0XG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1yb3dcIj5cbiAgICAgICAgICB7aW1hZ2VzXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtpdGVtfV8ke2lkeH1gXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1ib3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7dmlzaWJsZVxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtdmlld2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXNwaW4gcmVhY3QtY29uZi1mb3JtLXBpYy13aGl0ZS1zcGluXCI+PFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9IHRpcD1cImxvYWRpbmcuLi5cIiBzaXplPVwibGFyZ2VcIiAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1jb250YWluZXJcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtwcmV2fT5cbiAgICAgICAgICAgICAgICA8TGVmdE91dGxpbmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtuZXh0fT5cbiAgICAgICAgICAgICAgICA8UmlnaHRPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9ufT5cbiAgICAgICAgICAgICAgPFJlZG9PdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9uQmFja30+XG4gICAgICAgICAgICAgIDxVbmRvT3V0bGluZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwicHJldmltZ1wiXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke2RlZyAqIDkwfWRlZylgLCBvcGFjaXR5OiBsb2FkaW5nID8gMCA6IDEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaW1nLWNvbnRhaW5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5leHBvcnQgaW50ZXJmYWNlIEZpbGVEYXRhIHtcbiAgdWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgW2tleXM6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCA9ICh1cmw6IHN0cmluZyk6IEZpbGVEYXRhID0+IHtcbiAgY29uc3QgZmlsZSA9IHtcbiAgICB1aWQ6IHY0KCksXG4gICAgLy8gbmFtZTogdXJsLnJlcGxhY2UoLyguKlxcLykqKFteLl0rKS9pLCAnJDInKS5zcGxpdCgnPycpWzBdLFxuICAgIG5hbWU6IHVybC5yZXBsYWNlKC8oLipcXC8pKihbXi5dKykvaSwgJyQyJyksXG4gICAgc3RhdHVzOiAnZG9uZScsXG4gICAgdXJsOiB1cmwsXG4gIH07XG4gIHJldHVybiBmaWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IGdlbmVyYXRlRmlsZU9iamVjdEJ5VXJsIH0gZnJvbSAnLi9oZXBsZXInO1xuaW1wb3J0IFBpY1ByZXZpZXcgZnJvbSAnLi9QaWNQcmV2aWV3J1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcywgY3VzdG9tUHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCB7IG1heFNpemUgPSAyLCBtYXhMZW5ndGggPSAxLCBlZGl0TW9kZSA9IGZhbHNlLCBkaXNhYmxlZCA9IGZhbHNlIH0gPSBjdXN0b21Qcm9wcztcblxuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoe3Zpc2libGU6IGZhbHNlLCB1cmw6ICcnfSk7XG4gIGNvbnN0IFtpbWFnZXNVcmxzLCBzZXRJbWFnZXNVcmxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRGaWxlTGlzdCA9IFtdO1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGVmYXVsdEZpbGVMaXN0LnB1c2goZ2VuZXJhdGVGaWxlT2JqZWN0QnlVcmwoaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRGaWxlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldEZpbGVMaXN0KGRlZmF1bHRGaWxlTGlzdCk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcblxuICAvKipcbiAgICogb25DaGFuZ2Xlj5jljJZcbiAgICogQHBhcmFtIGZpbGVzXG4gICAqL1xuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoZmlsZXMpID0+IHtcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSBmaWxlcztcbiAgICAvLyDovazlrZhyZXNwb25zZS51cmwg5YiwdXJsXG4gICAgZmlsZUxpc3QuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKCFmaWxlLnVybCAmJiBmaWxlLnJlc3BvbnNlPy51cmwpIHtcbiAgICAgICAgZmlsZS51cmwgPSBmaWxlLnJlc3BvbnNlPy51cmw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWF4TGVuZ3RoID09PSAxICYmIGVkaXRNb2RlKSB7XG4gICAgICBmaWxlTGlzdC5zcGxpY2UoMCwgZmlsZUxpc3QubGVuZ3RoIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsZUxpc3QoZmlsZUxpc3QpO1xuICAgIH1cblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoZmlsZXMpO1xuICAgIH1cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBmaWxlTGlzdCwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICog5LiK5Lyg6L+b5bqm5qih5oufPOWBh+i/m+W6pj5cbiAgICovXG4gIGxldCBwcm9jZXNzSUQgPSAwO1xuICBjb25zdCBwcm9jZXNzID0gKG9uUHJvZ3Jlc3MsIHBlcmNlbnQgPSAwKSA9PiB7XG4gICAgbGV0IG5leHRQZXJjZW50ID0gcGVyY2VudCArIE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICBuZXh0UGVyY2VudCA9IG5leHRQZXJjZW50ID4gOTkgPyA5OSA6IG5leHRQZXJjZW50O1xuICAgIG9uUHJvZ3Jlc3MoeyBwZXJjZW50OiBuZXh0UGVyY2VudCB9KTtcbiAgICBwcm9jZXNzSUQgPSBzZXRUaW1lb3V0KCgpID0+IHByb2Nlc3Mob25Qcm9ncmVzcywgbmV4dFBlcmNlbnQpLCAzMDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnkuIrkvKDmlrnms5VcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IGN1c3RvbVJlcXVlc3QgPSBhc3luYyAoYXJncykgPT4ge1xuICAgIGlmICghZmllbGRQcm9wcy5jdXN0b21SZXF1ZXN0KSByZXR1cm47XG5cbiAgICBjb25zdCB7IGZpbGUsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyB9ID0gYXJncztcblxuICAgIHByb2Nlc3Mob25Qcm9ncmVzcyk7XG4gICAgLy8gb25Qcm9ncmVzcygpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlVXJsID0gYXdhaXQgZmllbGRQcm9wcy5jdXN0b21SZXF1ZXN0KGZpbGUpO1xuICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgdXJsOiBmaWxlVXJsLFxuICAgICAgfSk7XG4gICAgICBjbGVhclRpbWVvdXQocHJvY2Vzc0lEKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjbGVhclRpbWVvdXQocHJvY2Vzc0lEKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ+S4iuS8oOWksei0pScsIGUpO1xuICAgICAgb25FcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICog5LiK5Lyg5YmN55qE5qChXG4gICAqIEBwYXJhbSBmaWxlXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBiZWZvcmVVcGxvYWQgPSAoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGlzRmlsZVNpemVFeGNjZXNzTGltaXRlZCA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0ID4gbWF4U2l6ZTtcblxuICAgIC8vIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlO1xuICAgIGlmIChpc0ZpbGVTaXplRXhjY2Vzc0xpbWl0ZWQpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ+S7heaUr+aMge+8mkpQRUcvUE5HL1NWRy9CVlAg5qC85byPIDJN5Lul5YaFJyk7XG4gICAgICByZXR1cm4gVXBsb2FkLkxJU1RfSUdOT1JFO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHsgdXBsb2FkQnV0dG9uVGV4dCB9ID0gY3VzdG9tUHJvcHM7XG5cbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgIDxkaXY+XG4gICAgICA8UGx1c091dGxpbmVkIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT57dXBsb2FkQnV0dG9uVGV4dH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCBoYW5kbGVQcmV2aWV3ID0gKGZpbGUpID0+IHtcbiAgICBzZXRQcmV2aWV3KHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB1cmw6IGZpbGUudXJsLFxuICAgIH0pO1xuICAgIGNvbnN0IHVybHMgPSBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXR1cyA9PT0gJ2RvbmUnICYmIGl0ZW0udXJsKS5tYXAoaXRlbSA9PiBpdGVtLnVybCk7XG4gICAgc2V0SW1hZ2VzVXJscyh1cmxzKTtcbiAgfVxuICBjb25zdCBoYW5kbGVQcmV2aWV3Q2FuY2VsID0gKCkgPT4ge1xuICAgIHNldFByZXZpZXcoe1xuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICB1cmw6ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IHNob3dCdXR0b24gPSBmYWxzZTtcbiAgLy8g5aaC5p6c5paH5Lu25pWw5bCP5LqO6ZmQ5Yi2XG4gIGlmKGZpbGVMaXN0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHNob3dCdXR0b24gPSB0cnVlXG4gIH1cbiAgLy8g5aaC5p6c5paH5Lu25pWw562J5LqOMeW5tuS4lOaYr+e8lui+keaooeW8j1xuICBpZiAoIXNob3dCdXR0b24pIHtcbiAgICBzaG93QnV0dG9uID0gZmlsZUxpc3QubGVuZ3RoID09PSAxICYmIGVkaXRNb2RlIFxuICB9XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHNob3dCdXR0b24gPSBmYWxzZTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxVcGxvYWRcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgY3VzdG9tUmVxdWVzdD17Y3VzdG9tUmVxdWVzdH1cbiAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIG9uUHJldmlldz17aGFuZGxlUHJldmlld31cbiAgICAgIGZpbGVMaXN0PXtmaWxlTGlzdH1cbiAgICA+XG4gICAgICB7c2hvd0J1dHRvbiAmJiB1cGxvYWRCdXR0b259XG4gICAgPC9VcGxvYWQ+XG5cbiAgICB7cHJldmlldy52aXNpYmxlICYmIChcbiAgICAgIDxQaWNQcmV2aWV3XG4gICAgICAgIHVybD17aW1hZ2VzVXJsc31cbiAgICAgICAgc2hvd0xpc3Q9e2ZhbHNlfVxuICAgICAgICBvbkhpZGU9e2hhbmRsZVByZXZpZXdDYW5jZWx9XG4gICAgICAgIGN1cnJlbnQ9e3ByZXZpZXcudXJsfVxuICAgICAgLz5cbiAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IFRleHRhcmVhRmllbGQgZnJvbSAnLi9UZXh0YXJlYSc7XG5pbXBvcnQgUGFzc3dvcmRGaWVsZCBmcm9tICcuL1Bhc3N3b3JkJztcbmltcG9ydCBOdW1iZXJGaWVsZCBmcm9tICcuL051bWJlcic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IFN3aXRjaEZpZWxkIGZyb20gJy4vU3dpdGNoJztcbmltcG9ydCBBdXRvQ29tcGxldGVGaWVsZCBmcm9tICcuL0F1dG9Db21wbGV0ZSc7XG5pbXBvcnQgQ2hlY2tib3hGaWVsZCBmcm9tICcuL0NoZWNrYm94JztcbmltcG9ydCBDaGVja2JveEdyb3VwRmllbGQgZnJvbSAnLi9DaGVja2JveEdyb3VwJztcbmltcG9ydCBEYXRlUGlja2VyRmllbGQgZnJvbSAnLi9EYXRlUGlja2VyJztcbmltcG9ydCBSYW5nZVBpY2tlckZpZWxkIGZyb20gJy4vUmFuZ2VQaWNrZXInO1xuaW1wb3J0IFRpbWVQaWNrZXJGaWVsZCBmcm9tICcuL1RpbWVQaWNrZXInO1xuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAnLi9SYWRpbyc7XG5pbXBvcnQgUmFkaW9Hcm91cEZpZWxkIGZyb20gJy4vUmFkaW9Hcm91cCc7XG5pbXBvcnQgVXBsb2FkRmllbGQgZnJvbSAnLi9VcGxvYWQnO1xuaW1wb3J0IENhc2NhZGVyRmllbGQgZnJvbSAnLi9DYXNjYWRlcic7XG5cblxuLy8gRmllbGRNYXBcbmNvbnN0IEZpZWxkTWFwID0ge1xuICBpbnB1dDogSW5wdXRGaWVsZCxcbiAgc2VhcmNoOiBTZWFyY2hGaWVsZCxcbiAgdGV4dGFyZWE6IFRleHRhcmVhRmllbGQsXG4gIHBhc3N3b3JkOiBQYXNzd29yZEZpZWxkLFxuICBudW1iZXI6IE51bWJlckZpZWxkLFxuICBzZWxlY3Q6IFNlbGVjdEZpZWxkLFxuICBzd2l0Y2g6IFN3aXRjaEZpZWxkLFxuICBhdXRvQ29tcGxldGU6IEF1dG9Db21wbGV0ZUZpZWxkLFxuICBjaGVja2JveDogQ2hlY2tib3hGaWVsZCxcbiAgY2hlY2tib3hHcm91cDogQ2hlY2tib3hHcm91cEZpZWxkLFxuICBkYXRlUGlja2VyOiBEYXRlUGlja2VyRmllbGQsXG4gIHJhbmdlUGlja2VyOiBSYW5nZVBpY2tlckZpZWxkLFxuICB0aW1lUGlja2VyOiBUaW1lUGlja2VyRmllbGQsXG4gIHJhZGlvOiBSYWRpb0ZpZWxkLFxuICByYWRpb0dyb3VwOiBSYWRpb0dyb3VwRmllbGQsXG4gIHVwbG9hZDogVXBsb2FkRmllbGQsXG4gIGNhc2NhZGVyOiBDYXNjYWRlckZpZWxkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY0ZpZWxkKFxuICBwcm9wczogUkpGb3JtLkl0ZW1TY2hlbWEgJiBSSkZvcm0uSUZpZWxkUHJvcHMsXG4pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIG5hbWUsXG4gICAgdmFsdWUsXG4gICAgZmllbGRQcm9wcyA9IHt9LFxuICAgIGN1c3RvbVByb3BzLFxuICAgIG9uRmllbGRDaGFuZ2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBDb21wb25lbnQgPSBGaWVsZE1hcFt0eXBlXTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBmaWVsZFByb3BzPXtmaWVsZFByb3BzfVxuICAgICAgY3VzdG9tUHJvcHM9e2N1c3RvbVByb3BzfVxuICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAvPlxuICApO1xufVxuXG4vKipcbiAqIOaJqeWxlee7hOS7tuW6k1xuICogQHBhcmFtIGZpZWxkc1xuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kRmllbGRzID0gKGZpZWxkczogUkpGb3JtLkV4dGVuZEZpZWxkSXRlbVtdKTogdm9pZCA9PiB7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kS2V5ID0gT2JqZWN0LmtleXMoRmllbGRNYXApLmZpbmQoKGtleSkgPT4ga2V5ID09PSBmaWVsZC5uYW1lKTtcbiAgICBpZiAoZm91bmRLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg57uE5Lu2JHtmaWVsZC5uYW1lfeW3suWtmOWcqO+8jOivt+mHjeaWsOWumuS5iWApO1xuICAgIH1cbiAgICBGaWVsZE1hcFtmaWVsZC5uYW1lXSA9IGZpZWxkLmNvbXBvbmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgU3BpbiB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuL3V0aWxzL3N0cmluZyc7XG5pbXBvcnQgeyBzaW1wbGVDbG9uZSB9IGZyb20gJy4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IGFkZExhYmVsU3R5bGVXaWR0aCwgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoIH0gZnJvbSAnLi91dGlscy9zdHlsZSc7XG5pbXBvcnQgRm9ybUNvbCBmcm9tICcuL0Zvcm1Db2wnO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuL3J1bGVzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5leHBvcnQgeyBleHRlbmRGaWVsZHMgfSBmcm9tICcuL2ZpZWxkcyc7XG5leHBvcnQgeyBleHRlbmRSdWxlcyB9IGZyb20gJy4vcnVsZXMnO1xuXG5leHBvcnQgeyBnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCB9IGZyb20gJy4vZmllbGRzL1VwbG9hZC9oZXBsZXInO1xuXG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUltcGVyYXRpdmVIYW5kbGUsIGZvcndhcmRSZWYgfSA9IFJlYWN0O1xuXG5jb25zdCBmb3JtSUQgPSBgRk9STV8ke3JhbmRvbVN0cmluZygpfWA7XG5cbmZ1bmN0aW9uIEpGb3JtKHByb3BzOiBSSkZvcm0uRm9ybVByb3BzLCByZWYpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBndXR0ZXIgPSAyNCxcbiAgICBzcGFuID0gMTIsXG4gICAgbGFiZWxEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcsXG4gICAgbGFiZWxXaWR0aCA9IDEyMCxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlID0gdHJ1ZSxcbiAgICBzY2hlbWEsXG4gICAgb25DaGFuZ2UsXG4gICAgb25TdWJtaXQsXG4gICAgb25SZXNldCxcbiAgICBkYXRhID0ge30sXG4gICAgc3VibWl0dGVyLFxuICAgIHNwaW5uaW5nID0gZmFsc2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbdmFsaWRhdGlvbiwgc2V0VmFsaWRhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8g5re75Yqg5qC35byPXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWRkTGFiZWxTdHlsZVdpZHRoKGxhYmVsV2lkdGgsIGxhYmVsRGlyZWN0aW9uLCBmb3JtSUQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVMYWJlbFN0eWxlV2lkdGgoZm9ybUlEKTtcbiAgICB9O1xuICB9LCBbbGFiZWxEaXJlY3Rpb24sIGxhYmVsV2lkdGhdKTtcblxuICAvLyBkYXRh5Y+Y5YyWXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgLy8g5Yid5aeL5YyW5pWw5o2uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgc2NoZW1hLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ubmFtZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXG4gICAgICAgICAgICBydWxlczogaXRlbS5ydWxlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3JtRGF0YVtpdGVtLm5hbWVdID0gZm9ybURhdGFbaXRlbS5uYW1lXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0OicsIHJlc3VsdCwgZm9ybURhdGEpO1xuICAgIHNldFZhbGlkYXRpb24ocmVzdWx0KTtcbiAgfSwgW3NjaGVtYV0pO1xuXG4gIC8vIOiOt+WPlnZhbGlkYXRvclxuICBjb25zdCBnZXRWYWxpZGF0ZUJ5TmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uSXRlbSA9IHZhbGlkYXRpb24uZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHZhbGlkYXRpb25JdGVtID8gdmFsaWRhdGlvbkl0ZW0uc3RhdGUgOiB0cnVlLFxuICAgICAgbWVzc2FnZTogdmFsaWRhdGlvbkl0ZW0/Lm1lc3NhZ2UgfHwgJycsXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog5qOA5p+l5piv5LiN5piv5YWo6YOo6YCa6L+H5qOA6aqMXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGNvbnN0IGlzQWxsVmFsaWRhdGVkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlSXRlbSA9IHZhbGlkYXRpb24uZmluZCgodikgPT4gdi5uYW1lID09PSBrZXkpO1xuICAgICAgdmFsaWRhdGVGaWVsZChrZXksIGZvcm1EYXRhW2tleV0sIHZhbGlkYXRlSXRlbT8udHlwZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgbm90VmFsaWRhdGVkSXRlbUluZGV4ID0gT2JqZWN0LmtleXModmFsaWRhdGlvbikuZmluZEluZGV4KFxuICAgICAgKGtleSkgPT4gdmFsaWRhdGlvbltrZXldLnN0YXRlID09PSBmYWxzZSxcbiAgICApO1xuICAgIHJldHVybiBub3RWYWxpZGF0ZWRJdGVtSW5kZXggPT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiDmoKHpqozljZXkuKpmaWVsZFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIGNvbnN0IHZhbGlkYXRlRmllbGQgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCB0eXBlPzogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbkl0ZW0gPSB2YWxpZGF0aW9uLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gICAgaWYgKHZhbGlkYXRpb25JdGVtICYmIHZhbGlkYXRpb25JdGVtLnJ1bGVzKSB7XG4gICAgICBsZXQgdmFsaWRhdGVkVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgLy8g5LiK5Lyg5Zu+54mH6ZyA6KaB6L+H5ruk5o6Jc3RhdHVz5LiN562J5LqOXCJkb25lXCLnmoRcbiAgICAgIGlmICh0eXBlID09PSAndXBsb2FkJykge1xuICAgICAgICB2YWxpZGF0ZWRWYWx1ZSA9ICh2YWx1ZSB8fCBbXSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gJ2RvbmUnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZCB2YWxpZGF0ZScsIHZhbHVlLCB2YWxpZGF0ZWRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlKG5hbWUsIHZhbGlkYXRlZFZhbHVlLCB2YWxpZGF0aW9uSXRlbS5ydWxlcyk7XG4gICAgICB2YWxpZGF0aW9uSXRlbS5tZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICB2YWxpZGF0aW9uSXRlbS5zdGF0ZSA9IHJlc3VsdC5zdGF0ZTtcblxuICAgICAgY29uc29sZS5sb2coYHZhbGlkYXRlZCAke25hbWV9YCwgcmVzdWx0KTtcbiAgICAgIHNldFZhbGlkYXRpb24oWy4uLnZhbGlkYXRpb25dKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcm0gZmllbGQgdmFsdWUgaXMgY2hhbmdlZFxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICovXG4gIGNvbnN0IG9uRmllbGRDaGFuZ2UgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBvbGRWYWx1ZTogYW55KTogdm9pZCA9PiB7XG4gICAgaWYgKHZhbGlkYXRlT25DaGFuZ2UpIHtcbiAgICAgIHZhbGlkYXRlRmllbGQobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnY2hhbmdlOicsIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgZm9ybURhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICBzZXRGb3JtRGF0YShzaW1wbGVDbG9uZShmb3JtRGF0YSkpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogZ2V0IHZhbHVlXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIG9sZERhdGFcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IGdldFZhbHVlID0gKG5hbWU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHZhbHVlID0gZm9ybURhdGFbbmFtZV0gfHwgdW5kZWZpbmVkO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBpc1ZlcnRpY2FsID0gbGFiZWxEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG5cbiAgLy8gaWYocmVmKXtcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGNhbGxTdWJtaXQ6ICgpID0+IG9uRm9ybVN1Ym1pdCgpLFxuICAgICAgY2FsbFZhbGlkYXRlOiAoKSA9PiBpc0FsbFZhbGlkYXRlZCgpLFxuICAgICAgZ2V0RGF0YTogKCkgPT4gZm9ybURhdGEsXG4gICAgfSkpO1xuICAvLyB9XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGU/KTogYm9vbGVhbiA9PiB7XG4gICAgZSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIOaPkOS6pOWJjeagoemqjFxuICAgIGlmICghaXNBbGxWYWxpZGF0ZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKCdvbiBzdWJtaXQnLCBmb3JtRGF0YSk7XG4gICAgb25TdWJtaXQgJiYgb25TdWJtaXQoZm9ybURhdGEpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiDplK7nm5jmjInkuItFbnRlcu+8jOWPquimgeS4jeaYr3RleHRhcmVh57G75Z6L77yM5o+Q5LqkXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBvbktleVByZXNzID1cbiAgICAodHlwZTogc3RyaW5nKSA9PlxuICAgIChlKTogdm9pZCA9PiB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3RleHRhcmVhJyAmJiBlLmNoYXJDb2RlID09PSAxMykge1xuICAgICAgICBvbkZvcm1TdWJtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIC8vIGNvbnN0IG9uRm9ybVJlc2V0ID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdyZXNldCcpO1xuICAvLyAgIGNvbnN0IG5ld1ZhbHVlID0ge307XG4gIC8vICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAvLyAgICAgbmV3VmFsdWVba2V5XSA9IG51bGw7XG4gIC8vICAgfSk7XG4gIC8vICAgc2V0Rm9ybURhdGEobmV3VmFsdWUpO1xuICAvLyAgIG9uUmVzZXQgJiYgb25SZXNldCgpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnNvbGUubG9nKCdmb3JtRGF0YTogJywgZm9ybURhdGEpO1xuICByZXR1cm4gKFxuICAgIDxTcGluIHNwaW5uaW5nPXtzcGlubmluZ30+XG4gICAgICA8Zm9ybSBpZD17Zm9ybUlEfSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fT5cbiAgICAgICAge3NjaGVtYS5tYXAoKHJvdywgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93S2V5ID0gYHJvd18ke2lkeH1gO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um93IGtleT17cm93S2V5fSBndXR0ZXI9e2d1dHRlcn0+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm1Db2xcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lIHx8IHJhbmRvbVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIHNwYW49e2l0ZW0uc3BhbiB8fCBzcGFufVxuICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3MoaXRlbS50eXBlKX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtnZXRWYWxpZGF0ZUJ5TmFtZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgICAge3N1Ym1pdHRlciAmJiAoXG4gICAgICAgICAgPEZvb3RlciB7Li4uc3VibWl0dGVyfSBvblJlc2V0PXtvblJlc2V0fSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSAvPlxuICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgIDwvU3Bpbj5cbiAgKTtcbn1cblxuXG5leHBvcnQgY29uc3QgRm9ybSA9IGZvcndhcmRSZWYoSkZvcm0pO1xuICIsImltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnO1xuXG4vLyDpu5jorqTnmoTop4TliJlcbmNvbnN0IGRlZmF1bHRSdWxlczogUkpGb3JtLlJ1bGVJdGVtW10gPSBbXG4gIHtcbiAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IG5vdEVtcHR5VmFsdWUodmFsdWUpLFxuICAgIG1lc3NhZ2U6ICflv4XloasnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbkxlbmd0aCcsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg/OiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSBOdW1iZXIobGVuZ3RoKTtcbiAgICB9LFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWwj+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4TGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aD86IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoIDw9IE51bWJlcihsZW5ndGgpO1xuICAgIH0sXG4gICAgbWVzc2FnZTogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsZW5ndGgnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgbGVuZ3RoOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gTnVtYmVyKGxlbmd0aCk7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbicsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWluVmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gIHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlO1xuICAgIH0sXG4gICAgbWVzc2FnZTogKG1pblZhbHVlOiBudW1iZXIpID0+IGDlv4XpobvlpKfkuo7miJbnrYnkuo4ke21pblZhbHVlfWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4JyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiB7IFxuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgPD0gbWF4VmFsdWU7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtb3JlX3RoYW4nLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpID4gbWluVmFsdWU7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wkp+S6jiR7bWF4VmFsdWV9YCxcbiAgfSxcbiAgLy8g5bCP5LqOXG4gICB7XG4gICAgbmFtZTogJ2xlc3NfdGhhbicsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZTtcbiAgICB9LFxuICAgIG1lc3NhZ2U6IChtYXhWYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75bCP5LqOJHttYXhWYWx1ZX1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21vYmlsZScsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gL14xXFxkezEwfS8udGVzdCh2YWx1ZSk7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbnVtYmVyJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAvXFxkLy50ZXN0KHZhbHVlKTtcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmraPnoa4xMeS9jeaJi+acuuWPtydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbnQnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuICAhL1xcRC8udGVzdCh2YWx1ZSlcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICflv4XpobvkuLrmlbTmlbAnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncG9zaXRpdmVfbnVtYmVyJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSA+IDBcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICflv4XpobvkuLrmraPmlbAnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndGVsZXBob25lJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSQvLnRlc3QodmFsdWUpO1xuICAgIH0sXG4gICAgbWVzc2FnZTogJ+mcgOespuWQiO+8iOWMuuWPty3nlLXor53lj7fnoIHvvInnmoTmoLzlvI8nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZW1haWwnLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgY29uc3QgcmVnID0gL1thLXowLTkhIyQlJicqK1wiPT9eX2B7fH1+LV0rKD86LlthLXowLTkhIyQlJicqK1wiPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmraPnoa7nmoTpgq7nrrEnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZW1haWxfc3VmZml4JyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlZyA9IC9bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKyg/Oi5bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICByZXR1cm4gcmVnLnRlc3QodmFsdWUpXG4gICAgfSxcbiAgICBtZXNzYWdlOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566xJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkLiopKD89LipcXFcuKilbYS16QS1aMC05XFxTXVteXFx1NGUwMC1cXHU5ZmE1XXs2LDIwfSQvLnRlc3QodmFsdWUpO1xuICAgIH0sXG4gICAgbWVzc2FnZTogJ+eUsemVv+W6puS4ujbvvZ4xNuS9jeeahOaVsOWtl+OAgeWkp+Wwj+Wtl+avjeS7peWPiuespuWPt+e7hOaIkCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpZF9jYXJkJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAvKF5cXGR7MTV9JCl8KF5cXGR7MTh9JCl8KF5cXGR7MTd9KFxcZHxYfHgpJCkvLnRlc3QodmFsdWUpXG4gICAgfSxcbiAgICBtZXNzYWdlOiAn6Lqr5Lu96K+B5Y+356CB5LiN56ym5ZCIJ1xuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UnVsZXM7XG4iLCJpbXBvcnQgZGVmYXVsdFJ1bGVzIGZyb20gJy4vZGVmYXVsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuXG4vKipcbiAqIOaJqeWxleeahOaWueazlVxuICogQHBhcmFtIHJ1bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRSdWxlcyA9IChydWxlczogUkpGb3JtLlJ1bGVJdGVtW10pOiB2b2lkID0+IHtcbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZGVmYXVsdFJ1bGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gcnVsZS5uYW1lID09PSBpdGVtLm5hbWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2Fybihg6KeE5YiZJHtydWxlLm5hbWV95bey5a2Y5ZyoLCDmianlsZXop4TliJnkvJropobnm5bpu5jorqTop4TliJlgKTtcbiAgICAgIGRlZmF1bHRSdWxlc1tpbmRleF0gPSBydWxlO1xuICAgIH1cbiAgICBkZWZhdWx0UnVsZXMucHVzaChydWxlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIOagueaNrmtleeafpeaJvlxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldFJ1bGVJdGVtQnlOYW1lID0gKG5hbWU6IHN0cmluZyk6IFJKRm9ybS5SdWxlSXRlbSB8IG51bGwgPT4ge1xuICBjb25zdCBmb3VuZFJ1bGUgPSBkZWZhdWx0UnVsZXMuZmluZCgocnVsZSkgPT4gcnVsZS5uYW1lID09PSBuYW1lKTtcbiAgcmV0dXJuIGZvdW5kUnVsZTtcbn07XG5cbi8qKlxuICog5qCh6aqMXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBydWxlc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbiAgcnVsZXM6IFJKRm9ybS5SdWxlSXRlbVtdLFxuKTogUkpGb3JtLlZhbGlkYXRlZFJlc3VsdCA9PiB7XG4gIGxldCByZXN1bHQgPSB7XG4gICAgc3RhdGU6IHRydWUsXG4gICAgbWVzc2FnZTogJycsXG4gIH07XG5cbiAgcnVsZXMuc29tZSgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgLi4ucnVsZUl0ZW0gfSA9IHJ1bGU7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBPYmplY3Qua2V5cyhydWxlSXRlbSk/LlswXTtcbiAgICBjb25zdCBydWxlVmFsdWUgPSBydWxlSXRlbT8uW3J1bGVOYW1lXTtcbiAgICBpZiAoIXJ1bGVOYW1lKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyDlkKbliJnpnIDopoHlnKjnjrDmnInnmoTop4TliJnljrvmn6Xmib5cbiAgICBjb25zdCBkZWZhdWx0UnVsZUl0ZW0gPSBnZXRSdWxlSXRlbUJ5TmFtZShydWxlTmFtZSk7XG4gICAgaWYgKCFkZWZhdWx0UnVsZUl0ZW0pIHtcbiAgICAgIGNvbnNvbGUud2Fybihg5pyq5om+5YiwJHtydWxlTmFtZX3nmoTmoKHpqozop4TliJlgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBtZXNzYWdlXG4gICAgbGV0IG1zZyA9IG1lc3NhZ2UgfHwgZGVmYXVsdFJ1bGVJdGVtLm1lc3NhZ2U7XG4gICAgbXNnID0gdHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJyA/IG1zZyhydWxlVmFsdWUpIDogbXNnO1xuXG4gICAgLy8g6Ieq5a6a5LmJ55qEdmFsaWRhdG9yXG4gICAgaWYgKHR5cGVvZiBydWxlVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gcnVsZVZhbHVlKHZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpzmmK9ib29sZWFu55qE5pe25YCZ77yMdHJ1ZeWAvOmcgOimgeagoemqjFxuICAgIGlmIChcbiAgICAgICh0eXBlb2YgcnVsZVZhbHVlID09PSAnYm9vbGVhbicgJiYgcnVsZVZhbHVlKSB8fFxuICAgICAgWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5kZXhPZih0eXBlb2YgcnVsZVZhbHVlKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZGVmYXVsdFJ1bGVJdGVtLnZhbGlkYXRvcih2YWx1ZSwgcnVsZVZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge307XG5cbi8qKlxuICog5bCG5YC86L2s5o2i5Li65pe26Ze05oizXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREYXRlVGltZVN0YW1wID0gKHZhbHVlOiBhbnkpOiBudW1iZXIgPT4ge1xuICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiBtb21lbnQodmFsdWUpLnZhbHVlT2YoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGF0ZU1vbWVudCA9ICh2YWx1ZTogYW55KTogUkpGb3JtLkRhdGVUeXBlID0+IHtcbiAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gbW9tZW50KHZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuaXtumXtOiMg+WbtOWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0UmFuZ2VUaW1lU3RhbXAgPSAodmFsdWU6IGFueVtdKTogYW55W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbbnVsbCwgbnVsbF07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaWR4KSA9PiB7XG4gICAgICByZXN1bHRbaWR4XSA9IGdldERhdGVUaW1lU3RhbXAodmFsKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDlsIbml7bpl7TmiLPmlbDnu4TovazmjaLkuLptb21lbnTmlbDnu4RcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmdlTW9tZW50ID0gKFxuICB2YWx1ZTogW1JKRm9ybS5EYXRlVHlwZSwgUkpGb3JtLkRhdGVUeXBlXSB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0+IHtcbiAgY29uc3QgcmVzdWx0OiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0gW251bGwsIG51bGxdO1xuICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgcmVzdWx0W2lkeF0gPSB2YWwgPyBtb21lbnQodmFsKSA6IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBcnJheU9iamVjdDxUPihhcnJheTogVFtdID0gW10sIGtleTpzdHJpbmcsIHZhbHVlOiBhbnkpOlQge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICByZXR1cm4gZm91bmQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHNpbXBsZUNsb25lID0gKG9iajoge1tuYW1lOnN0cmluZ106YW55fSkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSAobGVuZ3RoID0gOCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9ICcxMjM0NTY3ODkwQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KFxuICAgICcnLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3RyaW5nQXJyYXkubGVuZ3RoKTtcbiAgICByZXN1bHQucHVzaChzdHJpbmdBcnJheVtpbmRleF0pO1xuICB9XG4gIHJldHVybiByZXN1bHQuam9pbignJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGVtcHR5VmFsdWUgPSBbbnVsbCwgdW5kZWZpbmVkLCAnJ107XG4gIC8vIOmdnuepulxuICBpZiAoZW1wdHlWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8g5pWw57uE5Lmf6Z2e56m6XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiIsIlxuZXhwb3J0IGNvbnN0IHJlbW92ZUxhYmVsU3R5bGVXaWR0aCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBgZm9ybS1sYWJlbC13aWR0aC0ke2lkfWA7XG4gIGNvbnN0IERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZU5hbWUpO1xuICBpZiAoRE9NKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKERPTSk7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGlkKTtcblxuICBpZiAobGFiZWxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0IFNUWUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWU7XG4gICAgbGV0IHN0eWxlcyA9IGAjJHtpZH0gLmFudC1mb3JtLWl0ZW0ge2Rpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlOyBmbGV4LWZsb3c6IHJvdzt9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1jb250cm9sIHtmbGV4LWdyb3c6IDF9YDtcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChTVFlMRSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9