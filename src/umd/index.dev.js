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
  upload: _Upload__WEBPACK_IMPORTED_MODULE_16__["default"]
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
      }); // console.log(key, validateItem);

      validateField(key, formData[key], validateItem === null || validateItem === void 0 ? void 0 : validateItem.type);
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

    if (!isAllValidated()) return;
    console.log('on submit', formData);
    onSubmit && onSubmit(formData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9Gb3JtQ29sLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQXV0b0NvbXBsZXRlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQ2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9DaGVja2JveEdyb3VwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvRGF0ZVBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0lucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvTnVtYmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUGFzc3dvcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9SYWRpby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1JhZGlvR3JvdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9SYW5nZVBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1NlYXJjaC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1N3aXRjaC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1RleHRhcmVhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvVGltZVBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1VwbG9hZC9QaWNQcmV2aWV3LnNjc3M/ODUwNCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvVXBsb2FkL1BpY1ByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9VcGxvYWQvaGVwbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9VcGxvYWQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3J1bGVzL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vcnVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3V0aWxzL3N0eWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRm9vdGVyIiwicHJvcHMiLCJidXR0b25UZXh0cyIsImJ1dHRvblByb3BzIiwicmVuZGVyIiwiYWxpZ24iLCJkaXJlY3Rpb24iLCJwYWRkaW5nIiwib25SZXNldCIsIm9uU3VibWl0IiwicmVzZXQiLCJzdWJtaXQiLCJjb25maWciLCJ0eXBlIiwiY2IiLCJ0ZXh0IiwiZGVmYXVsdERvbSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicmVzdFByb3BzIiwiaXRlbSIsInB1c2giLCJ0ZXh0QWxpZ24iLCJGb3JtQ29sIiwiY29sUHJvcHMiLCJzcGFuIiwiaXNWZXJ0aWNhbCIsInZhbHVlIiwib25GaWVsZENoYW5nZSIsIm9uS2V5UHJlc3MiLCJ2YWxpZGF0ZSIsImxhYmVsIiwicmVzdCIsImxhYmxlVGV4dCIsImNvbHMiLCJsYWJlbENvbCIsIndyYXBwZXJDb2wiLCJpc1JlcXVpcmVkIiwiaXRlbVJ1bGVzIiwiZmluZEFycmF5T2JqZWN0IiwibmFtZSIsInJ1bGVzIiwic3RhdGUiLCJtZXNzYWdlIiwiSW5wdXRGaWVsZCIsImZpZWxkUHJvcHMiLCJmaWx0ZXJPcHRpb24iLCJpbnB1dFZhbHVlIiwib3B0aW9uIiwiaW5kZXhPZiIsIm9uQ2hhbmdlVGhpcyIsIm5ld1ZhbHVlIiwib25DaGFuZ2UiLCJhcmdzIiwidGFyZ2V0IiwiY2hlY2tlZCIsIkRhdGVQaWNrZXJGaWVsZCIsImdldERhdGVUaW1lU3RhbXAiLCJnZXREYXRlTW9tZW50IiwiZ2V0UmFuZ2VUaW1lU3RhbXAiLCJnZXRSYW5nZU1vbWVudCIsIlNlYXJjaCIsIklucHV0IiwiU2VhcmNoRmllbGQiLCJUaW1lUGlja2VyRmllbGQiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiUGljUHJldmlld2VyIiwic2hvd0xpc3QiLCJ1cmwiLCJzdHlsZSIsImN1cnJlbnQiLCJvbkhpZGUiLCJpbWFnZXMiLCJmaWx0ZXIiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNyYyIsInNldFNyYyIsImRlZyIsInNldERlZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNJbml0Iiwic2V0SXNJbml0IiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlU2hvdyIsInRhcmdldFNyYyIsInByZXYiLCJpZHgiLCJsZW5ndGgiLCJuZXh0Iiwicm90YXRpb24iLCJyb3RhdGlvbkJhY2siLCJvbkxvYWQiLCJtYXAiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiZ2VuZXJhdGVGaWxlT2JqZWN0QnlVcmwiLCJmaWxlIiwidWlkIiwidjQiLCJyZXBsYWNlIiwic3RhdHVzIiwidXNlRWZmZWN0IiwiVXBsb2FkRmllbGQiLCJjdXN0b21Qcm9wcyIsIm1heFNpemUiLCJtYXhMZW5ndGgiLCJlZGl0TW9kZSIsImRpc2FibGVkIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsInByZXZpZXciLCJzZXRQcmV2aWV3IiwiaW1hZ2VzVXJscyIsInNldEltYWdlc1VybHMiLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdEZpbGVMaXN0IiwiZmlsZXMiLCJyZXNwb25zZSIsInNwbGljZSIsInByb2Nlc3NJRCIsInByb2Nlc3MiLCJvblByb2dyZXNzIiwicGVyY2VudCIsIm5leHRQZXJjZW50IiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJjdXN0b21SZXF1ZXN0Iiwib25TdWNjZXNzIiwib25FcnJvciIsImZpbGVVcmwiLCJjbGVhclRpbWVvdXQiLCJlcnJvciIsImJlZm9yZVVwbG9hZCIsImlzRmlsZVNpemVFeGNjZXNzTGltaXRlZCIsInNpemUiLCJVcGxvYWQiLCJMSVNUX0lHTk9SRSIsInVwbG9hZEJ1dHRvblRleHQiLCJ1cGxvYWRCdXR0b24iLCJtYXJnaW5Ub3AiLCJoYW5kbGVQcmV2aWV3IiwidXJscyIsImhhbmRsZVByZXZpZXdDYW5jZWwiLCJzaG93QnV0dG9uIiwiRmllbGRNYXAiLCJpbnB1dCIsInNlYXJjaCIsInRleHRhcmVhIiwiVGV4dGFyZWFGaWVsZCIsInBhc3N3b3JkIiwiUGFzc3dvcmRGaWVsZCIsIm51bWJlciIsIk51bWJlckZpZWxkIiwic2VsZWN0IiwiU2VsZWN0RmllbGQiLCJzd2l0Y2giLCJTd2l0Y2hGaWVsZCIsImF1dG9Db21wbGV0ZSIsIkF1dG9Db21wbGV0ZUZpZWxkIiwiY2hlY2tib3giLCJDaGVja2JveEZpZWxkIiwiY2hlY2tib3hHcm91cCIsIkNoZWNrYm94R3JvdXBGaWVsZCIsImRhdGVQaWNrZXIiLCJyYW5nZVBpY2tlciIsIlJhbmdlUGlja2VyRmllbGQiLCJ0aW1lUGlja2VyIiwicmFkaW8iLCJSYWRpb0ZpZWxkIiwicmFkaW9Hcm91cCIsIlJhZGlvR3JvdXBGaWVsZCIsInVwbG9hZCIsIkR5bmFtaWNGaWVsZCIsIkNvbXBvbmVudCIsImV4dGVuZEZpZWxkcyIsImZpZWxkcyIsImZpZWxkIiwiZm91bmRLZXkiLCJmaW5kIiwiRXJyb3IiLCJjb21wb25lbnQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiZm9yd2FyZFJlZiIsImZvcm1JRCIsInJhbmRvbVN0cmluZyIsIkpGb3JtIiwicmVmIiwiZ3V0dGVyIiwibGFiZWxEaXJlY3Rpb24iLCJsYWJlbFdpZHRoIiwidmFsaWRhdGVPbkNoYW5nZSIsInNjaGVtYSIsImRhdGEiLCJzdWJtaXR0ZXIiLCJzcGlubmluZyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ2YWxpZGF0aW9uIiwic2V0VmFsaWRhdGlvbiIsImFkZExhYmVsU3R5bGVXaWR0aCIsInJlbW92ZUxhYmVsU3R5bGVXaWR0aCIsInJlc3VsdCIsInJvdyIsInVuZGVmaW5lZCIsImdldFZhbGlkYXRlQnlOYW1lIiwidmFsaWRhdGlvbkl0ZW0iLCJpc0FsbFZhbGlkYXRlZCIsInZhbGlkYXRlSXRlbSIsInYiLCJ2YWxpZGF0ZUZpZWxkIiwibm90VmFsaWRhdGVkSXRlbUluZGV4IiwiZmluZEluZGV4IiwidmFsaWRhdGVkIiwidmFsaWRhdGVkVmFsdWUiLCJvbGRWYWx1ZSIsInNpbXBsZUNsb25lIiwiZ2V0VmFsdWUiLCJjYWxsU3VibWl0Iiwib25Gb3JtU3VibWl0IiwiY2FsbFZhbGlkYXRlIiwiZ2V0RGF0YSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGFyQ29kZSIsInJvd0tleSIsIkZvcm0iLCJkZWZhdWx0UnVsZXMiLCJ2YWxpZGF0b3IiLCJub3RFbXB0eVZhbHVlIiwiTnVtYmVyIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwibWF4VmFsdWUiLCJ0ZXN0IiwicmVnIiwiZXh0ZW5kUnVsZXMiLCJydWxlIiwiaW5kZXgiLCJ3YXJuIiwiZ2V0UnVsZUl0ZW1CeU5hbWUiLCJmb3VuZFJ1bGUiLCJzb21lIiwicnVsZUl0ZW0iLCJydWxlTmFtZSIsInJ1bGVWYWx1ZSIsImRlZmF1bHRSdWxlSXRlbSIsIm1zZyIsIm1vbWVudCIsInZhbHVlT2YiLCJ2YWwiLCJhcnJheSIsImZvdW5kIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RyaW5nQXJyYXkiLCJzcGxpdCIsImkiLCJyb3VuZCIsImpvaW4iLCJlbXB0eVZhbHVlIiwiaWQiLCJhdHRyaWJ1dGVOYW1lIiwiRE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlYWQiLCJyZW1vdmVDaGlsZCIsIndpZHRoIiwiU1RZTEUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Y08sV0FBZCxDQUEwQkosS0FBMUI7QUFDRDtBQUNGLENBWk0sQzs7Ozs7Ozs7Ozs7QUNSUCwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJpbmRleC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJtb21lbnRcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW50LWRlc2lnbi9pY29uc1wiLCBcImFudGRcIiwgXCJtb21lbnRcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwibW9tZW50XCIpLCByZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wiQGFudC1kZXNpZ24vaWNvbnNcIl0sIHJvb3RbXCJhbnRkXCJdLCByb290W1wibW9tZW50XCJdLCByb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hbnRfZGVzaWduX2ljb25zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9Gb3JtL2luZGV4LnRzeFwiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOSUwgfSBmcm9tICcuL25pbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlIH0gZnJvbSAnLi9wYXJzZS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImV4cG9ydCBkZWZhdWx0ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgc3RyaW5naWZ5KGIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2MTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xudmFyIHYzID0gdjM1KCd2MycsIDB4MzAsIG1kNSk7XG5leHBvcnQgZGVmYXVsdCB2MzsiLCJpbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIHZhciBieXRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZXM7XG59XG5cbmV4cG9ydCB2YXIgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgdmFyIFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gcGFyc2UobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZXNwYWNlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zdWJzdHIoMTQsIDEpLCAxNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnNpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgU3BhY2UgfSBmcm9tICdhbnRkJztcblxuaW50ZXJmYWNlIElwcm9wcyB7XG4gIG9uUmVzZXQ6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAoKSA9PiB2b2lkO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzOiBSSkZvcm0uU3VibWl0dGVyICYgSXByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgYnV0dG9uVGV4dHMsXG4gICAgYnV0dG9uUHJvcHMgPSB7fSxcbiAgICByZW5kZXIsXG4gICAgYWxpZ24gPSAnY2VudGVyJyxcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcsXG4gICAgcGFkZGluZyA9ICc0MnB4IDAgMjRweCAwJyxcbiAgICBvblJlc2V0LFxuICAgIG9uU3VibWl0LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVzZXQsIHN1Ym1pdCB9ID0gYnV0dG9uVGV4dHMgfHwge307XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICByZXNldDoge1xuICAgICAgdHlwZTogYnV0dG9uUHJvcHM/LnJlc2V0Py50eXBlIHx8ICdkZWZhdWx0JyxcbiAgICAgIGNiOiBvblJlc2V0LFxuICAgICAgdGV4dDogcmVzZXQsXG4gICAgfSxcbiAgICBzdWJtaXQ6IHtcbiAgICAgIHR5cGU6IGJ1dHRvblByb3BzPy5zdWJtaXQ/LnR5cGUgfHwgJ3ByaW1hcnknLFxuICAgICAgY2I6IG9uU3VibWl0LFxuICAgICAgdGV4dDogc3VibWl0LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZGVmYXVsdERvbSA9IFtdO1xuICBPYmplY3Qua2V5cyhidXR0b25UZXh0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgeyAgdHlwZSwgLi4ucmVzdFByb3BzfSA9IGJ1dHRvblByb3BzW2tleV0gfHwge307XG4gICAgY29uc3QgaXRlbSA9IGJ1dHRvblRleHRzW2tleV07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRlZmF1bHREb20ucHVzaChcbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICB0eXBlPXtjb25maWdba2V5XS50eXBlfSBcbiAgICAgICAgICBrZXk9e2tleX0gXG4gICAgICAgICAgb25DbGljaz17Y29uZmlnW2tleV0uY2J9XG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjb25maWdba2V5XS50ZXh0fVxuICAgICAgICA8L0J1dHRvbj4sXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmcsIHRleHRBbGlnbjogYWxpZ24gfX0+XG4gICAgICA8U3BhY2UgYWxpZ249e2FsaWdufSBkaXJlY3Rpb249e2RpcmVjdGlvbn0+XG4gICAgICAgIHtyZW5kZXIgPyByZW5kZXIocHJvcHMsIGRlZmF1bHREb20pIDogZGVmYXVsdERvbX1cbiAgICAgIDwvU3BhY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRHluYW1pY0ZpZWxkIGZyb20gJy4vZmllbGRzJztcbmltcG9ydCB7IGZpbmRBcnJheU9iamVjdCB9IGZyb20gJy4vdXRpbHMvb2JqZWN0JztcblxuLyoqXG4gKiDmuLLmn5NjZWxsIGl0ZW1cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcGFyYW0gZ2xvYmFsU3BhblxuICogQHJldHVybnNcbiAqL1xuY29uc3QgRm9ybUNvbCA9IChjb2xQcm9wczogUkpGb3JtLklDb2xQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgeyBpdGVtLCBzcGFuLCBpc1ZlcnRpY2FsLCB2YWx1ZSwgb25GaWVsZENoYW5nZSwgb25LZXlQcmVzcywgdmFsaWRhdGUgfSA9XG4gICAgY29sUHJvcHM7XG5cbiAgY29uc3QgeyBsYWJlbCwgdHlwZSwgLi4ucmVzdCB9ID0gaXRlbTtcblxuICBjb25zdCBsYWJsZVRleHQgPSB0eXBlb2YgbGFiZWwgPT09ICdmdW5jdGlvbicgPyBsYWJlbCgpIDogbGFiZWw7XG5cbiAgY29uc3QgY29scyA9IGlzVmVydGljYWxcbiAgICA/IHsgbGFiZWxDb2w6IHsgc3BhbjogMjQgfSwgd3JhcHBlckNvbDogeyBzcGFuOiAyNCB9IH1cbiAgICA6IHt9O1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSAoaXRlbVJ1bGVzOiBSSkZvcm0uUnVsZXNbXSA9IFtdKSA9PlxuICAgICEhZmluZEFycmF5T2JqZWN0KGl0ZW1SdWxlcywgJ3JlcXVpcmVkJywgdHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sIHNwYW49e3NwYW59IG9uS2V5UHJlc3M9e29uS2V5UHJlc3N9PlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBsYWJlbD17bGFibGVUZXh0fVxuICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWQoaXRlbS5ydWxlcyl9XG4gICAgICAgIHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZSAmJiAhdmFsaWRhdGUuc3RhdGUgPyAnZXJyb3InIDogJyd9XG4gICAgICAgIGhlbHA9e3ZhbGlkYXRlPy5tZXNzYWdlfVxuICAgICAgICB7Li4uY29sc31cbiAgICAgID5cbiAgICAgICAge3R5cGUgPT09ICdyZW5kZXInICYmICh0eXBlb2YgcmVzdC5yZW5kZXIgPT09ICdmdW5jdGlvbicgPyByZXN0LnJlbmRlcigpIDogcmVzdC5yZW5kZXIgKX1cbiAgICAgICAge3R5cGUgIT09ICdyZW5kZXInICYmIChcbiAgICAgICAgICA8RHluYW1pY0ZpZWxkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Db2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29sO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBpZiAoIWZpZWxkUHJvcHM/LmZpbHRlck9wdGlvbikge1xuICAgIGZpZWxkUHJvcHMuZmlsdGVyT3B0aW9uID0gKGlucHV0VmFsdWUsIG9wdGlvbikgPT5cbiAgICAgIGlucHV0VmFsdWUgJiYgb3B0aW9uLnZhbHVlLmluZGV4T2YoaW5wdXRWYWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8QXV0b0NvbXBsZXRlIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQuY2hlY2tlZDtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IGNoZWNrZWQ9e3ZhbHVlfT5cbiAgICAgIHtmaWVsZFByb3BzLmxhYmVsfVxuICAgIDwvQ2hlY2tib3g+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENoZWNrYm94Lkdyb3VwIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdGFtcCwgZ2V0RGF0ZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXREYXRlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICB2YWx1ZT17Z2V0RGF0ZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8SW5wdXQgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dE51bWJlciB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0LlBhc3N3b3JkIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0+XG4gICAgICB7ZmllbGRQcm9wcy5sYWJlbH1cbiAgICA8L1JhZGlvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxSYWRpby5Hcm91cCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSYW5nZVRpbWVTdGFtcCwgZ2V0UmFuZ2VNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0UmFuZ2VUaW1lU3RhbXAoYXJnc1swXSk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXtnZXRSYW5nZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U2VhcmNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTZWxlY3Qgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U3dpdGNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dC5UZXh0QXJlYSB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldERhdGVUaW1lU3RhbXAsIGdldERhdGVNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0RGF0ZVRpbWVTdGFtcChhcmdzWzBdKTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGltZVBpY2tlclxuICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfVxuICAgICAgdmFsdWU9e2dldERhdGVNb21lbnQodmFsdWUpfVxuICAgIC8+XG4gICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7ICBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IFVuZG9PdXRsaW5lZCwgUmVkb091dGxpbmVkLCBMZWZ0T3V0bGluZWQsIFJpZ2h0T3V0bGluZWQsIENsb3NlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmltcG9ydCAnLi9QaWNQcmV2aWV3LnNjc3MnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNob3dMaXN0OiBib29sZWFuLFxuICBjdXJyZW50OiBzdHJpbmcsXG4gIHVybDogc3RyaW5nW10gfCBzdHJpbmcsXG4gIHN0eWxlPzogT2JqZWN0XG4gIG9uSGlkZT86IFZvaWRGdW5jdGlvblxufVxuXG4vKipcbiAqIOWbvueJh+mihOiniFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWNQcmV2aWV3ZXIoXG4gIHtcbiAgICBzaG93TGlzdCA9IHRydWUsXG4gICAgdXJsID0gW10sXG4gICAgc3R5bGUgPSB7fSxcbiAgICBjdXJyZW50ID0gJycsXG4gICAgb25IaWRlLFxuICB9OiBQcm9wcyxcbikge1xuICBsZXQgaW1hZ2VzID0gW11cbiAgaWYgKHVybCkge1xuICAgIGltYWdlcyA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gW3VybF0gOiB1cmxcbiAgfVxuICBpbWFnZXMgPSBpbWFnZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKGN1cnJlbnQpXG4gIGNvbnN0IFtkZWcsIHNldERlZ10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaXNJbml0LCBzZXRJc0luaXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVTaG93ID0gKHRhcmdldFNyYzogc3RyaW5nKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRTcmModGFyZ2V0U3JjKVxuICB9XG5cbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggLT0gMVxuICAgIGlkeCA9IGlkeCA8IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgbGV0IGlkeCA9IGltYWdlcy5pbmRleE9mKHNyYylcbiAgICBpZHggKz0gMVxuICAgIGlkeCA9IGlkeCA+PSBpbWFnZXMubGVuZ3RoID8gMCA6IGlkeFxuICAgIGhhbmRsZVNob3coaW1hZ2VzW2lkeF0pXG4gICAgLy8gc2V0RGVnKDApXG4gIH1cblxuICBjb25zdCByb3RhdGlvbiA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnICsgMSlcbiAgfVxuXG4gIGNvbnN0IHJvdGF0aW9uQmFjayA9ICgpID0+IHtcbiAgICBzZXREZWcoZGVnIC0gMSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgaWYgKCFzaG93TGlzdCAmJiAhaXNJbml0KSB7XG4gICAgaGFuZGxlU2hvdyhjdXJyZW50KVxuICAgIHNldElzSW5pdCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMaXN0XG4gICAgICAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1yb3dcIj5cbiAgICAgICAgICB7aW1hZ2VzXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpZHgpOiBhbnkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtpdGVtfV8ke2lkeH1gXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1ib3hcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gaGFuZGxlU2hvdyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7dmlzaWJsZVxuICAgICAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtdmlld2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLXNwaW4gcmVhY3QtY29uZi1mb3JtLXBpYy13aGl0ZS1zcGluXCI+PFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9IHRpcD1cImxvYWRpbmcuLi5cIiBzaXplPVwibGFyZ2VcIiAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1jb250YWluZXJcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29uZi1mb3JtLXBpYy1pY29uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtwcmV2fT5cbiAgICAgICAgICAgICAgICA8TGVmdE91dGxpbmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jb25mLWZvcm0tcGljLWljb25cIiBvbkNsaWNrPXtuZXh0fT5cbiAgICAgICAgICAgICAgICA8UmlnaHRPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9ufT5cbiAgICAgICAgICAgICAgPFJlZG9PdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaWNvblwiIG9uQ2xpY2s9e3JvdGF0aW9uQmFja30+XG4gICAgICAgICAgICAgIDxVbmRvT3V0bGluZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwicHJldmltZ1wiXG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke2RlZyAqIDkwfWRlZylgLCBvcGFjaXR5OiBsb2FkaW5nID8gMCA6IDEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNvbmYtZm9ybS1waWMtaW1nLWNvbnRhaW5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5leHBvcnQgaW50ZXJmYWNlIEZpbGVEYXRhIHtcbiAgdWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgW2tleXM6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCA9ICh1cmw6IHN0cmluZyk6IEZpbGVEYXRhID0+IHtcbiAgY29uc3QgZmlsZSA9IHtcbiAgICB1aWQ6IHY0KCksXG4gICAgLy8gbmFtZTogdXJsLnJlcGxhY2UoLyguKlxcLykqKFteLl0rKS9pLCAnJDInKS5zcGxpdCgnPycpWzBdLFxuICAgIG5hbWU6IHVybC5yZXBsYWNlKC8oLipcXC8pKihbXi5dKykvaSwgJyQyJyksXG4gICAgc3RhdHVzOiAnZG9uZScsXG4gICAgdXJsOiB1cmwsXG4gIH07XG4gIHJldHVybiBmaWxlO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVcGxvYWQsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IGdlbmVyYXRlRmlsZU9iamVjdEJ5VXJsIH0gZnJvbSAnLi9oZXBsZXInO1xuaW1wb3J0IFBpY1ByZXZpZXcgZnJvbSAnLi9QaWNQcmV2aWV3J1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcywgY3VzdG9tUHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCB7IG1heFNpemUgPSAyLCBtYXhMZW5ndGggPSAxLCBlZGl0TW9kZSA9IGZhbHNlLCBkaXNhYmxlZCA9IGZhbHNlIH0gPSBjdXN0b21Qcm9wcztcblxuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoe3Zpc2libGU6IGZhbHNlLCB1cmw6ICcnfSk7XG4gIGNvbnN0IFtpbWFnZXNVcmxzLCBzZXRJbWFnZXNVcmxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRGaWxlTGlzdCA9IFtdO1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGVmYXVsdEZpbGVMaXN0LnB1c2goZ2VuZXJhdGVGaWxlT2JqZWN0QnlVcmwoaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRGaWxlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldEZpbGVMaXN0KGRlZmF1bHRGaWxlTGlzdCk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcblxuICAvKipcbiAgICogb25DaGFuZ2Xlj5jljJZcbiAgICogQHBhcmFtIGZpbGVzXG4gICAqL1xuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoZmlsZXMpID0+IHtcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSBmaWxlcztcbiAgICAvLyDovazlrZhyZXNwb25zZS51cmwg5YiwdXJsXG4gICAgZmlsZUxpc3QuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKCFmaWxlLnVybCAmJiBmaWxlLnJlc3BvbnNlPy51cmwpIHtcbiAgICAgICAgZmlsZS51cmwgPSBmaWxlLnJlc3BvbnNlPy51cmw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWF4TGVuZ3RoID09PSAxICYmIGVkaXRNb2RlKSB7XG4gICAgICBmaWxlTGlzdC5zcGxpY2UoMCwgZmlsZUxpc3QubGVuZ3RoIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsZUxpc3QoZmlsZUxpc3QpO1xuICAgIH1cblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoZmlsZXMpO1xuICAgIH1cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBmaWxlTGlzdCwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICog5LiK5Lyg6L+b5bqm5qih5oufPOWBh+i/m+W6pj5cbiAgICovXG4gIGxldCBwcm9jZXNzSUQgPSAwO1xuICBjb25zdCBwcm9jZXNzID0gKG9uUHJvZ3Jlc3MsIHBlcmNlbnQgPSAwKSA9PiB7XG4gICAgbGV0IG5leHRQZXJjZW50ID0gcGVyY2VudCArIE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICBuZXh0UGVyY2VudCA9IG5leHRQZXJjZW50ID4gOTkgPyA5OSA6IG5leHRQZXJjZW50O1xuICAgIG9uUHJvZ3Jlc3MoeyBwZXJjZW50OiBuZXh0UGVyY2VudCB9KTtcbiAgICBwcm9jZXNzSUQgPSBzZXRUaW1lb3V0KCgpID0+IHByb2Nlc3Mob25Qcm9ncmVzcywgbmV4dFBlcmNlbnQpLCAzMDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnkuIrkvKDmlrnms5VcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogQHJldHVybnNcbiAgICovXG4gIGNvbnN0IGN1c3RvbVJlcXVlc3QgPSBhc3luYyAoYXJncykgPT4ge1xuICAgIGlmICghZmllbGRQcm9wcy5jdXN0b21SZXF1ZXN0KSByZXR1cm47XG5cbiAgICBjb25zdCB7IGZpbGUsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyB9ID0gYXJncztcblxuICAgIHByb2Nlc3Mob25Qcm9ncmVzcyk7XG4gICAgLy8gb25Qcm9ncmVzcygpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlVXJsID0gYXdhaXQgZmllbGRQcm9wcy5jdXN0b21SZXF1ZXN0KGZpbGUpO1xuICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgdXJsOiBmaWxlVXJsLFxuICAgICAgfSk7XG4gICAgICBjbGVhclRpbWVvdXQocHJvY2Vzc0lEKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjbGVhclRpbWVvdXQocHJvY2Vzc0lEKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ+S4iuS8oOWksei0pScsIGUpO1xuICAgICAgb25FcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICog5LiK5Lyg5YmN55qE5qChXG4gICAqIEBwYXJhbSBmaWxlXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBiZWZvcmVVcGxvYWQgPSAoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGlzRmlsZVNpemVFeGNjZXNzTGltaXRlZCA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0ID4gbWF4U2l6ZTtcblxuICAgIC8vIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlO1xuICAgIGlmIChpc0ZpbGVTaXplRXhjY2Vzc0xpbWl0ZWQpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ+S7heaUr+aMge+8mkpQRUcvUE5HL1NWRy9CVlAg5qC85byPIDJN5Lul5YaFJyk7XG4gICAgICByZXR1cm4gVXBsb2FkLkxJU1RfSUdOT1JFO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHsgdXBsb2FkQnV0dG9uVGV4dCB9ID0gY3VzdG9tUHJvcHM7XG5cbiAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxuICAgIDxkaXY+XG4gICAgICA8UGx1c091dGxpbmVkIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT57dXBsb2FkQnV0dG9uVGV4dH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCBoYW5kbGVQcmV2aWV3ID0gKGZpbGUpID0+IHtcbiAgICBzZXRQcmV2aWV3KHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB1cmw6IGZpbGUudXJsLFxuICAgIH0pO1xuICAgIGNvbnN0IHVybHMgPSBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXR1cyA9PT0gJ2RvbmUnICYmIGl0ZW0udXJsKS5tYXAoaXRlbSA9PiBpdGVtLnVybCk7XG4gICAgc2V0SW1hZ2VzVXJscyh1cmxzKTtcbiAgfVxuICBjb25zdCBoYW5kbGVQcmV2aWV3Q2FuY2VsID0gKCkgPT4ge1xuICAgIHNldFByZXZpZXcoe1xuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICB1cmw6ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IHNob3dCdXR0b24gPSBmYWxzZTtcbiAgLy8g5aaC5p6c5paH5Lu25pWw5bCP5LqO6ZmQ5Yi2XG4gIGlmKGZpbGVMaXN0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHNob3dCdXR0b24gPSB0cnVlXG4gIH1cbiAgLy8g5aaC5p6c5paH5Lu25pWw562J5LqOMeW5tuS4lOaYr+e8lui+keaooeW8j1xuICBpZiAoIXNob3dCdXR0b24pIHtcbiAgICBzaG93QnV0dG9uID0gZmlsZUxpc3QubGVuZ3RoID09PSAxICYmIGVkaXRNb2RlIFxuICB9XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHNob3dCdXR0b24gPSBmYWxzZTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxVcGxvYWRcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgY3VzdG9tUmVxdWVzdD17Y3VzdG9tUmVxdWVzdH1cbiAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIG9uUHJldmlldz17aGFuZGxlUHJldmlld31cbiAgICAgIGZpbGVMaXN0PXtmaWxlTGlzdH1cbiAgICA+XG4gICAgICB7c2hvd0J1dHRvbiAmJiB1cGxvYWRCdXR0b259XG4gICAgPC9VcGxvYWQ+XG5cbiAgICB7cHJldmlldy52aXNpYmxlICYmIChcbiAgICAgIDxQaWNQcmV2aWV3XG4gICAgICAgIHVybD17aW1hZ2VzVXJsc31cbiAgICAgICAgc2hvd0xpc3Q9e2ZhbHNlfVxuICAgICAgICBvbkhpZGU9e2hhbmRsZVByZXZpZXdDYW5jZWx9XG4gICAgICAgIGN1cnJlbnQ9e3ByZXZpZXcudXJsfVxuICAgICAgLz5cbiAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IFRleHRhcmVhRmllbGQgZnJvbSAnLi9UZXh0YXJlYSc7XG5pbXBvcnQgUGFzc3dvcmRGaWVsZCBmcm9tICcuL1Bhc3N3b3JkJztcbmltcG9ydCBOdW1iZXJGaWVsZCBmcm9tICcuL051bWJlcic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IFN3aXRjaEZpZWxkIGZyb20gJy4vU3dpdGNoJztcbmltcG9ydCBBdXRvQ29tcGxldGVGaWVsZCBmcm9tICcuL0F1dG9Db21wbGV0ZSc7XG5pbXBvcnQgQ2hlY2tib3hGaWVsZCBmcm9tICcuL0NoZWNrYm94JztcbmltcG9ydCBDaGVja2JveEdyb3VwRmllbGQgZnJvbSAnLi9DaGVja2JveEdyb3VwJztcbmltcG9ydCBEYXRlUGlja2VyRmllbGQgZnJvbSAnLi9EYXRlUGlja2VyJztcbmltcG9ydCBSYW5nZVBpY2tlckZpZWxkIGZyb20gJy4vUmFuZ2VQaWNrZXInO1xuaW1wb3J0IFRpbWVQaWNrZXJGaWVsZCBmcm9tICcuL1RpbWVQaWNrZXInO1xuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAnLi9SYWRpbyc7XG5pbXBvcnQgUmFkaW9Hcm91cEZpZWxkIGZyb20gJy4vUmFkaW9Hcm91cCc7XG5pbXBvcnQgVXBsb2FkRmllbGQgZnJvbSAnLi9VcGxvYWQnO1xuXG5cbi8vIEZpZWxkTWFwXG5jb25zdCBGaWVsZE1hcCA9IHtcbiAgaW5wdXQ6IElucHV0RmllbGQsXG4gIHNlYXJjaDogU2VhcmNoRmllbGQsXG4gIHRleHRhcmVhOiBUZXh0YXJlYUZpZWxkLFxuICBwYXNzd29yZDogUGFzc3dvcmRGaWVsZCxcbiAgbnVtYmVyOiBOdW1iZXJGaWVsZCxcbiAgc2VsZWN0OiBTZWxlY3RGaWVsZCxcbiAgc3dpdGNoOiBTd2l0Y2hGaWVsZCxcbiAgYXV0b0NvbXBsZXRlOiBBdXRvQ29tcGxldGVGaWVsZCxcbiAgY2hlY2tib3g6IENoZWNrYm94RmllbGQsXG4gIGNoZWNrYm94R3JvdXA6IENoZWNrYm94R3JvdXBGaWVsZCxcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlckZpZWxkLFxuICByYW5nZVBpY2tlcjogUmFuZ2VQaWNrZXJGaWVsZCxcbiAgdGltZVBpY2tlcjogVGltZVBpY2tlckZpZWxkLFxuICByYWRpbzogUmFkaW9GaWVsZCxcbiAgcmFkaW9Hcm91cDogUmFkaW9Hcm91cEZpZWxkLFxuICB1cGxvYWQ6IFVwbG9hZEZpZWxkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHluYW1pY0ZpZWxkKFxuICBwcm9wczogUkpGb3JtLkl0ZW1TY2hlbWEgJiBSSkZvcm0uSUZpZWxkUHJvcHMsXG4pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIG5hbWUsXG4gICAgdmFsdWUsXG4gICAgZmllbGRQcm9wcyA9IHt9LFxuICAgIGN1c3RvbVByb3BzLFxuICAgIG9uRmllbGRDaGFuZ2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBDb21wb25lbnQgPSBGaWVsZE1hcFt0eXBlXTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRcbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBmaWVsZFByb3BzPXtmaWVsZFByb3BzfVxuICAgICAgY3VzdG9tUHJvcHM9e2N1c3RvbVByb3BzfVxuICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAvPlxuICApO1xufVxuXG4vKipcbiAqIOaJqeWxlee7hOS7tuW6k1xuICogQHBhcmFtIGZpZWxkc1xuICovXG5leHBvcnQgY29uc3QgZXh0ZW5kRmllbGRzID0gKGZpZWxkczogUkpGb3JtLkV4dGVuZEZpZWxkSXRlbVtdKTogdm9pZCA9PiB7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kS2V5ID0gT2JqZWN0LmtleXMoRmllbGRNYXApLmZpbmQoKGtleSkgPT4ga2V5ID09PSBmaWVsZC5uYW1lKTtcbiAgICBpZiAoZm91bmRLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihg57uE5Lu2JHtmaWVsZC5uYW1lfeW3suWtmOWcqO+8jOivt+mHjeaWsOWumuS5iWApO1xuICAgIH1cbiAgICBGaWVsZE1hcFtmaWVsZC5uYW1lXSA9IGZpZWxkLmNvbXBvbmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgU3BpbiB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuL3V0aWxzL3N0cmluZyc7XG5pbXBvcnQgeyBzaW1wbGVDbG9uZSB9IGZyb20gJy4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IGFkZExhYmVsU3R5bGVXaWR0aCwgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoIH0gZnJvbSAnLi91dGlscy9zdHlsZSc7XG5pbXBvcnQgRm9ybUNvbCBmcm9tICcuL0Zvcm1Db2wnO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICcuL3J1bGVzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5leHBvcnQgeyBleHRlbmRGaWVsZHMgfSBmcm9tICcuL2ZpZWxkcyc7XG5leHBvcnQgeyBleHRlbmRSdWxlcyB9IGZyb20gJy4vcnVsZXMnO1xuXG5leHBvcnQgeyBnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCB9IGZyb20gJy4vZmllbGRzL1VwbG9hZC9oZXBsZXInO1xuXG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUltcGVyYXRpdmVIYW5kbGUsIGZvcndhcmRSZWYgfSA9IFJlYWN0O1xuXG5jb25zdCBmb3JtSUQgPSBgRk9STV8ke3JhbmRvbVN0cmluZygpfWA7XG5cbmZ1bmN0aW9uIEpGb3JtKHByb3BzOiBSSkZvcm0uRm9ybVByb3BzLCByZWYpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBndXR0ZXIgPSAyNCxcbiAgICBzcGFuID0gMTIsXG4gICAgbGFiZWxEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcsXG4gICAgbGFiZWxXaWR0aCA9IDEyMCxcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlID0gdHJ1ZSxcbiAgICBzY2hlbWEsXG4gICAgb25DaGFuZ2UsXG4gICAgb25TdWJtaXQsXG4gICAgb25SZXNldCxcbiAgICBkYXRhID0ge30sXG4gICAgc3VibWl0dGVyLFxuICAgIHNwaW5uaW5nID0gZmFsc2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbdmFsaWRhdGlvbiwgc2V0VmFsaWRhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8g5re75Yqg5qC35byPXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWRkTGFiZWxTdHlsZVdpZHRoKGxhYmVsV2lkdGgsIGxhYmVsRGlyZWN0aW9uLCBmb3JtSUQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZW1vdmVMYWJlbFN0eWxlV2lkdGgoZm9ybUlEKTtcbiAgICB9O1xuICB9LCBbbGFiZWxEaXJlY3Rpb24sIGxhYmVsV2lkdGhdKTtcblxuICAvLyBkYXRh5Y+Y5YyWXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgLy8g5Yid5aeL5YyW5pWw5o2uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgc2NoZW1hLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ubmFtZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXG4gICAgICAgICAgICBydWxlczogaXRlbS5ydWxlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3JtRGF0YVtpdGVtLm5hbWVdID0gZm9ybURhdGFbaXRlbS5uYW1lXSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbml0OicsIHJlc3VsdCwgZm9ybURhdGEpO1xuICAgIHNldFZhbGlkYXRpb24ocmVzdWx0KTtcbiAgfSwgW3NjaGVtYV0pO1xuXG4gIC8vIOiOt+WPlnZhbGlkYXRvclxuICBjb25zdCBnZXRWYWxpZGF0ZUJ5TmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uSXRlbSA9IHZhbGlkYXRpb24uZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHZhbGlkYXRpb25JdGVtID8gdmFsaWRhdGlvbkl0ZW0uc3RhdGUgOiB0cnVlLFxuICAgICAgbWVzc2FnZTogdmFsaWRhdGlvbkl0ZW0/Lm1lc3NhZ2UgfHwgJycsXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog5qOA5p+l5piv5LiN5piv5YWo6YOo6YCa6L+H5qOA6aqMXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGNvbnN0IGlzQWxsVmFsaWRhdGVkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlSXRlbSA9IHZhbGlkYXRpb24uZmluZCgodikgPT4gdi5uYW1lID09PSBrZXkpO1xuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWxpZGF0ZUl0ZW0pO1xuICAgICAgdmFsaWRhdGVGaWVsZChrZXksIGZvcm1EYXRhW2tleV0sIHZhbGlkYXRlSXRlbT8udHlwZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgbm90VmFsaWRhdGVkSXRlbUluZGV4ID0gT2JqZWN0LmtleXModmFsaWRhdGlvbikuZmluZEluZGV4KFxuICAgICAgKGtleSkgPT4gdmFsaWRhdGlvbltrZXldLnZhbGlkYXRlZCA9PT0gZmFsc2UsXG4gICAgKTtcbiAgICByZXR1cm4gbm90VmFsaWRhdGVkSXRlbUluZGV4ID09PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICog5qCh6aqM5Y2V5LiqZmllbGRcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgdHlwZT86IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb25JdGVtID0gdmFsaWRhdGlvbi5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuICAgIGlmICh2YWxpZGF0aW9uSXRlbSAmJiB2YWxpZGF0aW9uSXRlbS5ydWxlcykge1xuICAgICAgbGV0IHZhbGlkYXRlZFZhbHVlID0gdmFsdWU7XG5cbiAgICAgIC8vIOS4iuS8oOWbvueJh+mcgOimgei/h+a7pOaOiXN0YXR1c+S4jeetieS6jlwiZG9uZVwi55qEXG4gICAgICBpZiAodHlwZSA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgICAgdmFsaWRhdGVkVmFsdWUgPSAodmFsdWUgfHwgW10pLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09ICdkb25lJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWQgdmFsaWRhdGUnLCB2YWx1ZSwgdmFsaWRhdGVkVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0ZShuYW1lLCB2YWxpZGF0ZWRWYWx1ZSwgdmFsaWRhdGlvbkl0ZW0ucnVsZXMpO1xuICAgICAgdmFsaWRhdGlvbkl0ZW0ubWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgdmFsaWRhdGlvbkl0ZW0uc3RhdGUgPSByZXN1bHQuc3RhdGU7XG5cbiAgICAgIGNvbnNvbGUubG9nKGB2YWxpZGF0ZWQgJHtuYW1lfWAsIHJlc3VsdCk7XG4gICAgICBzZXRWYWxpZGF0aW9uKFsuLi52YWxpZGF0aW9uXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtIGZpZWxkIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAqL1xuICBjb25zdCBvbkZpZWxkQ2hhbmdlID0gKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICh2YWxpZGF0ZU9uQ2hhbmdlKSB7XG4gICAgICB2YWxpZGF0ZUZpZWxkKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZTonLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIGZvcm1EYXRhW25hbWVdID0gdmFsdWU7XG4gICAgc2V0Rm9ybURhdGEoc2ltcGxlQ2xvbmUoZm9ybURhdGEpKTtcblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmFtZSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldCB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSBvbGREYXRhXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBnZXRWYWx1ZSA9IChuYW1lPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhW25hbWVdIHx8IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGxhYmVsRGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuXG4gIC8vIGlmKHJlZil7XG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBjYWxsU3VibWl0OiAoKSA9PiBvbkZvcm1TdWJtaXQoKSxcbiAgICAgIGNhbGxWYWxpZGF0ZTogKCkgPT4gaXNBbGxWYWxpZGF0ZWQoKSxcbiAgICAgIGdldERhdGE6ICgpID0+IGZvcm1EYXRhLFxuICAgIH0pKTtcbiAgLy8gfVxuXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlPyk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgZSAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIOaPkOS6pOWJjeagoemqjFxuICAgIGlmICghaXNBbGxWYWxpZGF0ZWQoKSkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKCdvbiBzdWJtaXQnLCBmb3JtRGF0YSk7XG4gICAgb25TdWJtaXQgJiYgb25TdWJtaXQoZm9ybURhdGEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiDplK7nm5jmjInkuItFbnRlcu+8jOWPquimgeS4jeaYr3RleHRhcmVh57G75Z6L77yM5o+Q5LqkXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBvbktleVByZXNzID1cbiAgICAodHlwZTogc3RyaW5nKSA9PlxuICAgIChlKTogdm9pZCA9PiB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3RleHRhcmVhJyAmJiBlLmNoYXJDb2RlID09PSAxMykge1xuICAgICAgICBvbkZvcm1TdWJtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIC8vIGNvbnN0IG9uRm9ybVJlc2V0ID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdyZXNldCcpO1xuICAvLyAgIGNvbnN0IG5ld1ZhbHVlID0ge307XG4gIC8vICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAvLyAgICAgbmV3VmFsdWVba2V5XSA9IG51bGw7XG4gIC8vICAgfSk7XG4gIC8vICAgc2V0Rm9ybURhdGEobmV3VmFsdWUpO1xuICAvLyAgIG9uUmVzZXQgJiYgb25SZXNldCgpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnNvbGUubG9nKCdmb3JtRGF0YTogJywgZm9ybURhdGEpO1xuICByZXR1cm4gKFxuICAgIDxTcGluIHNwaW5uaW5nPXtzcGlubmluZ30+XG4gICAgICA8Zm9ybSBpZD17Zm9ybUlEfSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fT5cbiAgICAgICAge3NjaGVtYS5tYXAoKHJvdywgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93S2V5ID0gYHJvd18ke2lkeH1gO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um93IGtleT17cm93S2V5fSBndXR0ZXI9e2d1dHRlcn0+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm1Db2xcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lIHx8IHJhbmRvbVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIHNwYW49e2l0ZW0uc3BhbiB8fCBzcGFufVxuICAgICAgICAgICAgICAgICAgaXNWZXJ0aWNhbD17aXNWZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZXRWYWx1ZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgb25GaWVsZENoYW5nZT17b25GaWVsZENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3MoaXRlbS50eXBlKX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtnZXRWYWxpZGF0ZUJ5TmFtZShpdGVtLm5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgICAge3N1Ym1pdHRlciAmJiAoXG4gICAgICAgICAgPEZvb3RlciB7Li4uc3VibWl0dGVyfSBvblJlc2V0PXtvblJlc2V0fSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSAvPlxuICAgICAgICApfVxuICAgICAgPC9mb3JtPlxuICAgIDwvU3Bpbj5cbiAgKTtcbn1cblxuXG5leHBvcnQgY29uc3QgRm9ybSA9IGZvcndhcmRSZWYoSkZvcm0pO1xuICIsImltcG9ydCB7IG5vdEVtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnO1xuXG4vLyDpu5jorqTnmoTop4TliJlcbmNvbnN0IGRlZmF1bHRSdWxlczogUkpGb3JtLlJ1bGVJdGVtW10gPSBbXG4gIHtcbiAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IG5vdEVtcHR5VmFsdWUodmFsdWUpLFxuICAgIG1lc3NhZ2U6ICflv4XloasnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbkxlbmd0aCcsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg/OiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSBOdW1iZXIobGVuZ3RoKTtcbiAgICB9LFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWwj+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4TGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aD86IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoIDw9IE51bWJlcihsZW5ndGgpO1xuICAgIH0sXG4gICAgbWVzc2FnZTogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5LiN5aSn5LqOJHtsZW5ndGh9YCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsZW5ndGgnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgbGVuZ3RoOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gTnVtYmVyKGxlbmd0aCk7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqblv4XpobvkuLoke2xlbmd0aH1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbicsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWluVmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gIHBhcnNlRmxvYXQodmFsdWUpID49IG1pblZhbHVlO1xuICAgIH0sXG4gICAgbWVzc2FnZTogKG1pblZhbHVlOiBudW1iZXIpID0+IGDlv4XpobvlpKfkuo7miJbnrYnkuo4ke21pblZhbHVlfWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4JyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogYW55LCBtYXhWYWx1ZTogbnVtYmVyKSA9PiB7IFxuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgPD0gbWF4VmFsdWU7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wwj+S6juaIluetieS6jiR7bWF4VmFsdWV9YCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtb3JlX3RoYW4nLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBhbnksIG1pblZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpID4gbWluVmFsdWU7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAobWF4VmFsdWU6IG51bWJlcikgPT4gYOW/hemhu+Wkp+S6jiR7bWF4VmFsdWV9YCxcbiAgfSxcbiAgLy8g5bCP5LqOXG4gICB7XG4gICAgbmFtZTogJ2xlc3NfdGhhbicsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSwgbWF4VmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgPCBtYXhWYWx1ZTtcbiAgICB9LFxuICAgIG1lc3NhZ2U6IChtYXhWYWx1ZTogbnVtYmVyKSA9PiBg5b+F6aG75bCP5LqOJHttYXhWYWx1ZX1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21vYmlsZScsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFub3RFbXB0eVZhbHVlKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gL14xXFxkezEwfS8udGVzdCh2YWx1ZSk7XG4gICAgfSxcbiAgICBtZXNzYWdlOiAn6K+36L6T5YWl5q2j56GuMTHkvY3miYvmnLrlj7cnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbnVtYmVyJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAvXFxkLy50ZXN0KHZhbHVlKTtcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmraPnoa4xMeS9jeaJi+acuuWPtydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbnQnLFxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuICAhL1xcRC8udGVzdCh2YWx1ZSlcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICflv4XpobvkuLrmlbTmlbAnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndGVsZXBob25lJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAvXjBcXGR7MiwzfS1cXGR7Nyw4fSQvLnRlc3QodmFsdWUpO1xuICAgIH0sXG4gICAgbWVzc2FnZTogJ+mcgOespuWQiO+8iOWMuuWPty3nlLXor53lj7fnoIHvvInnmoTmoLzlvI8nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZW1haWwnLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHZhbGlkYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghbm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgY29uc3QgcmVnID0gL1thLXowLTkhIyQlJicqK1wiPT9eX2B7fH1+LV0rKD86LlthLXowLTkhIyQlJicqK1wiPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy9cbiAgICAgIHJldHVybiByZWcudGVzdCh2YWx1ZSlcbiAgICB9LFxuICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmraPnoa7nmoTpgq7nrrEnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZW1haWxfc3VmZml4JyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlZyA9IC9bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKyg/Oi5bYS16MC05ISMkJSYnKitcIj0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vXG4gICAgICByZXR1cm4gcmVnLnRlc3QodmFsdWUpXG4gICAgfSxcbiAgICBtZXNzYWdlOiAn6K+36L6T5YWl5q2j56Gu55qE6YKu566xJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkLiopKD89LipcXFcuKilbYS16QS1aMC05XFxTXVteXFx1NGUwMC1cXHU5ZmE1XXs2LDIwfSQvLnRlc3QodmFsdWUpO1xuICAgIH0sXG4gICAgbWVzc2FnZTogJ+eUsemVv+W6puS4ujbvvZ4xNuS9jeeahOaVsOWtl+OAgeWkp+Wwj+Wtl+avjeS7peWPiuespuWPt+e7hOaIkCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpZF9jYXJkJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIW5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAvKF5cXGR7MTV9JCl8KF5cXGR7MTh9JCl8KF5cXGR7MTd9KFxcZHxYfHgpJCkvLnRlc3QodmFsdWUpXG4gICAgfSxcbiAgICBtZXNzYWdlOiAn6Lqr5Lu96K+B5Y+356CB5LiN56ym5ZCIJ1xuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UnVsZXM7XG4iLCJpbXBvcnQgZGVmYXVsdFJ1bGVzIGZyb20gJy4vZGVmYXVsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuXG4vKipcbiAqIOaJqeWxleeahOaWueazlVxuICogQHBhcmFtIHJ1bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBleHRlbmRSdWxlcyA9IChydWxlczogUkpGb3JtLlJ1bGVJdGVtW10pOiB2b2lkID0+IHtcbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZGVmYXVsdFJ1bGVzLmZpbmRJbmRleCgoaXRlbSkgPT4gcnVsZS5uYW1lID09PSBpdGVtLm5hbWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2Fybihg6KeE5YiZJHtydWxlLm5hbWV95bey5a2Y5ZyoLCDmianlsZXop4TliJnkvJropobnm5bpu5jorqTop4TliJlgKTtcbiAgICAgIGRlZmF1bHRSdWxlc1tpbmRleF0gPSBydWxlO1xuICAgIH1cbiAgICBkZWZhdWx0UnVsZXMucHVzaChydWxlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIOagueaNrmtleeafpeaJvlxuICogQHBhcmFtIG5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldFJ1bGVJdGVtQnlOYW1lID0gKG5hbWU6IHN0cmluZyk6IFJKRm9ybS5SdWxlSXRlbSB8IG51bGwgPT4ge1xuICBjb25zdCBmb3VuZFJ1bGUgPSBkZWZhdWx0UnVsZXMuZmluZCgocnVsZSkgPT4gcnVsZS5uYW1lID09PSBuYW1lKTtcbiAgcmV0dXJuIGZvdW5kUnVsZTtcbn07XG5cbi8qKlxuICog5qCh6aqMXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBydWxlc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbiAgcnVsZXM6IFJKRm9ybS5SdWxlSXRlbVtdLFxuKTogUkpGb3JtLlZhbGlkYXRlZFJlc3VsdCA9PiB7XG4gIGxldCByZXN1bHQgPSB7XG4gICAgc3RhdGU6IHRydWUsXG4gICAgbWVzc2FnZTogJycsXG4gIH07XG5cbiAgcnVsZXMuc29tZSgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgLi4ucnVsZUl0ZW0gfSA9IHJ1bGU7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBPYmplY3Qua2V5cyhydWxlSXRlbSk/LlswXTtcbiAgICBjb25zdCBydWxlVmFsdWUgPSBydWxlSXRlbT8uW3J1bGVOYW1lXTtcbiAgICBpZiAoIXJ1bGVOYW1lKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyDlkKbliJnpnIDopoHlnKjnjrDmnInnmoTop4TliJnljrvmn6Xmib5cbiAgICBjb25zdCBkZWZhdWx0UnVsZUl0ZW0gPSBnZXRSdWxlSXRlbUJ5TmFtZShydWxlTmFtZSk7XG4gICAgaWYgKCFkZWZhdWx0UnVsZUl0ZW0pIHtcbiAgICAgIGNvbnNvbGUud2Fybihg5pyq5om+5YiwJHtydWxlTmFtZX3nmoTmoKHpqozop4TliJlgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBtZXNzYWdlXG4gICAgbGV0IG1zZyA9IG1lc3NhZ2UgfHwgZGVmYXVsdFJ1bGVJdGVtLm1lc3NhZ2U7XG4gICAgbXNnID0gdHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJyA/IG1zZyhydWxlVmFsdWUpIDogbXNnO1xuXG4gICAgLy8g6Ieq5a6a5LmJ55qEdmFsaWRhdG9yXG4gICAgaWYgKHR5cGVvZiBydWxlVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gcnVsZVZhbHVlKHZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpzmmK9ib29sZWFu55qE5pe25YCZ77yMdHJ1ZeWAvOmcgOimgeagoemqjFxuICAgIGlmIChcbiAgICAgICh0eXBlb2YgcnVsZVZhbHVlID09PSAnYm9vbGVhbicgJiYgcnVsZVZhbHVlKSB8fFxuICAgICAgWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5kZXhPZih0eXBlb2YgcnVsZVZhbHVlKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZGVmYXVsdFJ1bGVJdGVtLnZhbGlkYXRvcih2YWx1ZSwgcnVsZVZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge307XG5cbi8qKlxuICog5bCG5YC86L2s5o2i5Li65pe26Ze05oizXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREYXRlVGltZVN0YW1wID0gKHZhbHVlOiBhbnkpOiBudW1iZXIgPT4ge1xuICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiBtb21lbnQodmFsdWUpLnZhbHVlT2YoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGF0ZU1vbWVudCA9ICh2YWx1ZTogYW55KTogUkpGb3JtLkRhdGVUeXBlID0+IHtcbiAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gbW9tZW50KHZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuaXtumXtOiMg+WbtOWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0UmFuZ2VUaW1lU3RhbXAgPSAodmFsdWU6IGFueVtdKTogYW55W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbbnVsbCwgbnVsbF07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaWR4KSA9PiB7XG4gICAgICByZXN1bHRbaWR4XSA9IGdldERhdGVUaW1lU3RhbXAodmFsKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDlsIbml7bpl7TmiLPmlbDnu4TovazmjaLkuLptb21lbnTmlbDnu4RcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmdlTW9tZW50ID0gKFxuICB2YWx1ZTogW1JKRm9ybS5EYXRlVHlwZSwgUkpGb3JtLkRhdGVUeXBlXSB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0+IHtcbiAgY29uc3QgcmVzdWx0OiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0gW251bGwsIG51bGxdO1xuICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgcmVzdWx0W2lkeF0gPSB2YWwgPyBtb21lbnQodmFsKSA6IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBcnJheU9iamVjdDxUPihhcnJheTogVFtdID0gW10sIGtleTpzdHJpbmcsIHZhbHVlOiBhbnkpOlQge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICByZXR1cm4gZm91bmQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHNpbXBsZUNsb25lID0gKG9iajoge1tuYW1lOnN0cmluZ106YW55fSkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSAobGVuZ3RoID0gOCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9ICcxMjM0NTY3ODkwQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KFxuICAgICcnLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3RyaW5nQXJyYXkubGVuZ3RoKTtcbiAgICByZXN1bHQucHVzaChzdHJpbmdBcnJheVtpbmRleF0pO1xuICB9XG4gIHJldHVybiByZXN1bHQuam9pbignJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGVtcHR5VmFsdWUgPSBbbnVsbCwgdW5kZWZpbmVkLCAnJ107XG4gIC8vIOmdnuepulxuICBpZiAoZW1wdHlWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8g5pWw57uE5Lmf6Z2e56m6XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7fTtcbiIsIlxuZXhwb3J0IGNvbnN0IHJlbW92ZUxhYmVsU3R5bGVXaWR0aCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBgZm9ybS1sYWJlbC13aWR0aC0ke2lkfWA7XG4gIGNvbnN0IERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dHJpYnV0ZU5hbWUpO1xuICBpZiAoRE9NKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKERPTSk7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExhYmVsU3R5bGVXaWR0aCA9ICh3aWR0aDogbnVtYmVyLCBsYWJlbERpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJywgaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcmVtb3ZlTGFiZWxTdHlsZVdpZHRoKGlkKTtcblxuICBpZiAobGFiZWxEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0IFNUWUxFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBTVFlMRS5pZCA9IGF0dHJpYnV0ZU5hbWU7XG4gICAgbGV0IHN0eWxlcyA9IGAjJHtpZH0gLmFudC1mb3JtLWl0ZW0ge2Rpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlOyBmbGV4LWZsb3c6IHJvdzt9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1sYWJlbCB7IHdpZHRoOiAke3dpZHRofXB4OyB9XFxuYDtcbiAgICBzdHlsZXMgKz0gYCMke2lkfSAuYW50LWZvcm0taXRlbS1jb250cm9sIHtmbGV4LWdyb3c6IDF9YDtcbiAgICBTVFlMRS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChTVFlMRSk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9