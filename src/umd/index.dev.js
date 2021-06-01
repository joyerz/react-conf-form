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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function Footer(props) {
  var buttonTexts = props.buttonTexts,
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
      type: 'default',
      cb: onReset,
      text: reset
    },
    submit: {
      type: 'primary',
      cb: onSubmit,
      text: submit
    }
  };
  var defaultDom = [];
  Object.keys(buttonTexts).forEach(function (key) {
    var item = buttonTexts[key];

    if (item) {
      defaultDom.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: config[key].type,
        key: key,
        onClick: config[key].cb
      }, config[key].text));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: padding,
      textAlign: align
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
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
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(item, ["label"]);

  var lableText = typeof label === 'function' ? label() : label;
  var cols = isVertical ? {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  } : {};

  var isRequired = function isRequired(itemRules) {
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
  }, cols), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fields__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
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
      maxLength = _customProps$maxLengt === void 0 ? 1 : _customProps$maxLengt;

  var _useState = useState([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  useEffect(function () {
    if (Array.isArray(value)) {
      var hasStringFile = value.findIndex(function (item) {
        return typeof item === 'string';
      }) !== -1;
      if (!hasStringFile) return;
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
    var fileList = files.fileList;
    fileList.forEach(function (file) {
      var _file$response;

      if (!file.url && (_file$response = file.response) !== null && _file$response !== void 0 && _file$response.url) {
        var _file$response2;

        file.url = (_file$response2 = file.response) === null || _file$response2 === void 0 ? void 0 : _file$response2.url;
      }
    });
    setFileList(fileList); // 组件原来的onChange事件

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fieldProps, {
    customRequest: customRequest,
    beforeUpload: beforeUpload,
    onChange: onChangeThis,
    fileList: fileList
  }), fileList.length >= maxLength ? null : uploadButton);
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
/*! exports provided: extendFields, extendRules, Form */
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














var useEffect = react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect,
    useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState;
var formID = "FORM_".concat(Object(_utils_string__WEBPACK_IMPORTED_MODULE_5__["randomString"])());
function Form(props) {
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
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      submitter = props.submitter,
      _props$spining = props.spining,
      spining = _props$spining === void 0 ? false : _props$spining;

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
  }, [labelDirection, labelWidth]); // 初始化数据

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
    });
    console.log('init:', result, formData);
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

  var isVertical = labelDirection === 'vertical';

  var onFormSubmit = function onFormSubmit(e) {
    e && e.stopPropagation(); // 提交前校验

    if (!isAllValidated()) return;
    console.log('on submit', formData);
    return formData;
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
  };

  var onReset = function onReset() {
    console.log('reset');
    var newValue = {};
    Object.keys(formData).forEach(function (key) {
      newValue[key] = null;
    });
    setFormData(newValue);
  }; // console.log('formData: ', formData);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
    spinning: spining
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
    return value && value.length < Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u4E0D\u5C0F\u4E8E".concat(length);
  }
}, {
  name: 'maxLength',
  validator: function validator(value, length) {
    return value && value.length <= Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u4E0D\u5927\u4E8E".concat(length);
  }
}, {
  name: 'length',
  validator: function validator(value, length) {
    return value && value.length === Number(length);
  },
  message: function message(length) {
    return "\u957F\u5EA6\u5FC5\u987B\u4E3A".concat(length);
  }
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
      var _state = defaultRuleItem.validator(value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9Gb3JtQ29sLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQXV0b0NvbXBsZXRlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvQ2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9DaGVja2JveEdyb3VwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvRGF0ZVBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL0lucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvTnVtYmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvUGFzc3dvcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9SYWRpby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1JhZGlvR3JvdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtL2ZpZWxkcy9SYW5nZVBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1NlYXJjaC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1N3aXRjaC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1RleHRhcmVhL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9maWVsZHMvVGltZVBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1VwbG9hZC9oZXBsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL1VwbG9hZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vZmllbGRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vcnVsZXMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS9ydWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9kYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtL3V0aWxzL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS91dGlscy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0vdXRpbHMvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImJ1dHRvblRleHRzIiwicmVuZGVyIiwiYWxpZ24iLCJkaXJlY3Rpb24iLCJwYWRkaW5nIiwib25SZXNldCIsIm9uU3VibWl0IiwicmVzZXQiLCJzdWJtaXQiLCJjb25maWciLCJ0eXBlIiwiY2IiLCJ0ZXh0IiwiZGVmYXVsdERvbSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaXRlbSIsInB1c2giLCJ0ZXh0QWxpZ24iLCJGb3JtQ29sIiwiY29sUHJvcHMiLCJzcGFuIiwiaXNWZXJ0aWNhbCIsInZhbHVlIiwib25GaWVsZENoYW5nZSIsIm9uS2V5UHJlc3MiLCJ2YWxpZGF0ZSIsImxhYmVsIiwicmVzdCIsImxhYmxlVGV4dCIsImNvbHMiLCJsYWJlbENvbCIsIndyYXBwZXJDb2wiLCJpc1JlcXVpcmVkIiwiaXRlbVJ1bGVzIiwiZmluZEFycmF5T2JqZWN0IiwibmFtZSIsInJ1bGVzIiwic3RhdGUiLCJtZXNzYWdlIiwiSW5wdXRGaWVsZCIsImZpZWxkUHJvcHMiLCJmaWx0ZXJPcHRpb24iLCJpbnB1dFZhbHVlIiwib3B0aW9uIiwiaW5kZXhPZiIsIm9uQ2hhbmdlVGhpcyIsIm5ld1ZhbHVlIiwib25DaGFuZ2UiLCJhcmdzIiwidGFyZ2V0IiwiY2hlY2tlZCIsIkRhdGVQaWNrZXJGaWVsZCIsImdldERhdGVUaW1lU3RhbXAiLCJnZXREYXRlTW9tZW50IiwiZ2V0UmFuZ2VUaW1lU3RhbXAiLCJnZXRSYW5nZU1vbWVudCIsIlNlYXJjaCIsIklucHV0IiwiU2VhcmNoRmllbGQiLCJUaW1lUGlja2VyRmllbGQiLCJnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCIsInVybCIsImZpbGUiLCJ1aWQiLCJ2NCIsInJlcGxhY2UiLCJzdGF0dXMiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiVXBsb2FkRmllbGQiLCJjdXN0b21Qcm9wcyIsIm1heFNpemUiLCJtYXhMZW5ndGgiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzU3RyaW5nRmlsZSIsImZpbmRJbmRleCIsImRlZmF1bHRGaWxlTGlzdCIsImZpbGVzIiwicmVzcG9uc2UiLCJwcm9jZXNzSUQiLCJwcm9jZXNzIiwib25Qcm9ncmVzcyIsInBlcmNlbnQiLCJuZXh0UGVyY2VudCIsIk1hdGgiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiY3VzdG9tUmVxdWVzdCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJmaWxlVXJsIiwiY2xlYXJUaW1lb3V0IiwiZXJyb3IiLCJiZWZvcmVVcGxvYWQiLCJpc0ZpbGVTaXplRXhjY2Vzc0xpbWl0ZWQiLCJzaXplIiwiVXBsb2FkIiwiTElTVF9JR05PUkUiLCJ1cGxvYWRCdXR0b25UZXh0IiwidXBsb2FkQnV0dG9uIiwibWFyZ2luVG9wIiwibGVuZ3RoIiwiRmllbGRNYXAiLCJpbnB1dCIsInNlYXJjaCIsInRleHRhcmVhIiwiVGV4dGFyZWFGaWVsZCIsInBhc3N3b3JkIiwiUGFzc3dvcmRGaWVsZCIsIm51bWJlciIsIk51bWJlckZpZWxkIiwic2VsZWN0IiwiU2VsZWN0RmllbGQiLCJzd2l0Y2giLCJTd2l0Y2hGaWVsZCIsImF1dG9Db21wbGV0ZSIsIkF1dG9Db21wbGV0ZUZpZWxkIiwiY2hlY2tib3giLCJDaGVja2JveEZpZWxkIiwiY2hlY2tib3hHcm91cCIsIkNoZWNrYm94R3JvdXBGaWVsZCIsImRhdGVQaWNrZXIiLCJyYW5nZVBpY2tlciIsIlJhbmdlUGlja2VyRmllbGQiLCJ0aW1lUGlja2VyIiwicmFkaW8iLCJSYWRpb0ZpZWxkIiwicmFkaW9Hcm91cCIsIlJhZGlvR3JvdXBGaWVsZCIsInVwbG9hZCIsIkR5bmFtaWNGaWVsZCIsIkNvbXBvbmVudCIsImV4dGVuZEZpZWxkcyIsImZpZWxkcyIsImZpZWxkIiwiZm91bmRLZXkiLCJmaW5kIiwiRXJyb3IiLCJjb21wb25lbnQiLCJmb3JtSUQiLCJyYW5kb21TdHJpbmciLCJGb3JtIiwiZ3V0dGVyIiwibGFiZWxEaXJlY3Rpb24iLCJsYWJlbFdpZHRoIiwidmFsaWRhdGVPbkNoYW5nZSIsInNjaGVtYSIsImRhdGEiLCJzdWJtaXR0ZXIiLCJzcGluaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInZhbGlkYXRpb24iLCJzZXRWYWxpZGF0aW9uIiwiYWRkTGFiZWxTdHlsZVdpZHRoIiwicmVtb3ZlTGFiZWxTdHlsZVdpZHRoIiwicmVzdWx0Iiwicm93IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImdldFZhbGlkYXRlQnlOYW1lIiwidmFsaWRhdGlvbkl0ZW0iLCJpc0FsbFZhbGlkYXRlZCIsInZhbGlkYXRlSXRlbSIsInYiLCJ2YWxpZGF0ZUZpZWxkIiwibm90VmFsaWRhdGVkSXRlbUluZGV4IiwidmFsaWRhdGVkIiwidmFsaWRhdGVkVmFsdWUiLCJmaWx0ZXIiLCJvbGRWYWx1ZSIsInNpbXBsZUNsb25lIiwiZ2V0VmFsdWUiLCJvbkZvcm1TdWJtaXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hhckNvZGUiLCJtYXAiLCJpZHgiLCJyb3dLZXkiLCJkZWZhdWx0UnVsZXMiLCJ2YWxpZGF0b3IiLCJub3RFbXB0eVZhbHVlIiwiTnVtYmVyIiwiZXh0ZW5kUnVsZXMiLCJydWxlIiwiaW5kZXgiLCJ3YXJuIiwiZ2V0UnVsZUl0ZW1CeU5hbWUiLCJmb3VuZFJ1bGUiLCJzb21lIiwicnVsZUl0ZW0iLCJydWxlTmFtZSIsInJ1bGVWYWx1ZSIsImRlZmF1bHRSdWxlSXRlbSIsIm1zZyIsIm1vbWVudCIsInZhbHVlT2YiLCJ2YWwiLCJhcnJheSIsImZvdW5kIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RyaW5nQXJyYXkiLCJzcGxpdCIsImkiLCJyb3VuZCIsImpvaW4iLCJlbXB0eVZhbHVlIiwiaWQiLCJhdHRyaWJ1dGVOYW1lIiwiRE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlYWQiLCJyZW1vdmVDaGlsZCIsIndpZHRoIiwiU1RZTEUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0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Z0I7QUFDbkQsTUFBTUMsYUFBYSw4QkFBdUJELEVBQXZCLENBQW5CO0FBQ0EsTUFBTUUsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILGFBQXhCLENBQVo7QUFDQSxNQUFJQyxHQUFKLEVBQVNDLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixHQUExQjtBQUNULFNBQU9ELGFBQVA7QUFDRCxDQUxNO0FBT0EsSUFBTTNELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2lFLEtBQUQsRUFBZ0I1RSxjQUFoQixFQUEyRHFFLEVBQTNELEVBQTBFO0FBQzFHLE1BQU1DLGFBQWEsR0FBRzFELHFCQUFxQixDQUFDeUQsRUFBRCxDQUEzQzs7QUFFQSxNQUFJckUsY0FBYyxLQUFLLFlBQXZCLEVBQXFDO0FBQ25DLFFBQU02RSxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FELFNBQUssQ0FBQ1IsRUFBTixHQUFXQyxhQUFYO0FBQ0EsUUFBSVMsTUFBTSxjQUFPVixFQUFQLG9FQUFWO0FBQ0FVLFVBQU0sZUFBUVYsRUFBUiw0Q0FBNENPLEtBQTVDLFlBQU47QUFDQUcsVUFBTSxlQUFRVixFQUFSLDJDQUFOO0FBQ0FRLFNBQUssQ0FBQ0csU0FBTixHQUFrQkQsTUFBbEI7QUFDQVAsWUFBUSxDQUFDRSxJQUFULENBQWNPLFdBQWQsQ0FBMEJKLEtBQTFCO0FBQ0Q7QUFDRixDQVpNLEM7Ozs7Ozs7Ozs7O0FDUlAsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwibW9tZW50XCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFudC1kZXNpZ24vaWNvbnNcIiwgXCJhbnRkXCIsIFwibW9tZW50XCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBhbnQtZGVzaWduL2ljb25zXCJdLCByb290W1wiYW50ZFwiXSwgcm9vdFtcIm1vbWVudFwiXSwgcm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9tb21lbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvRm9ybS9pbmRleC50c3hcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdjEgfSBmcm9tICcuL3YxLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjMgfSBmcm9tICcuL3YzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjQgfSBmcm9tICcuL3Y0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjUgfSBmcm9tICcuL3Y1LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTklMIH0gZnJvbSAnLi9uaWwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uIH0gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmFsaWRhdGUgfSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZSB9IGZyb20gJy4vcGFyc2UuanMnOyIsIi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJleHBvcnQgZGVmYXVsdCAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJzsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICB2YXIgdjtcbiAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7IC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG5cbnZhciBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHN0cmluZ2lmeShiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9wYXJzZS5qcyc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9IC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG5cblxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdpZnkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbnZhciB2NSA9IHYzNSgndjUnLCAweDUwLCBzaGExKTtcbmV4cG9ydCBkZWZhdWx0IHY1OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc3Vic3RyKDE0LCAxKSwgMTYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFNwYWNlIH0gZnJvbSAnYW50ZCc7XG5cbmludGVyZmFjZSBJcHJvcHMge1xuICBvblJlc2V0OiAoKSA9PiB2b2lkO1xuICBvblN1Ym1pdDogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wczogUkpGb3JtLlN1Ym1pdHRlciAmIElwcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGJ1dHRvblRleHRzLFxuICAgIHJlbmRlcixcbiAgICBhbGlnbiA9ICdjZW50ZXInLFxuICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJyxcbiAgICBwYWRkaW5nID0gJzQycHggMCAyNHB4IDAnLFxuICAgIG9uUmVzZXQsXG4gICAgb25TdWJtaXQsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyByZXNldCwgc3VibWl0IH0gPSBidXR0b25UZXh0cyB8fCB7fTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJlc2V0OiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICBjYjogb25SZXNldCxcbiAgICAgIHRleHQ6IHJlc2V0LFxuICAgIH0sXG4gICAgc3VibWl0OiB7XG4gICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICBjYjogb25TdWJtaXQsXG4gICAgICB0ZXh0OiBzdWJtaXQsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBkZWZhdWx0RG9tID0gW107XG4gIE9iamVjdC5rZXlzKGJ1dHRvblRleHRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBpdGVtID0gYnV0dG9uVGV4dHNba2V5XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgZGVmYXVsdERvbS5wdXNoKFxuICAgICAgICA8QnV0dG9uIHR5cGU9e2NvbmZpZ1trZXldLnR5cGV9IGtleT17a2V5fSBvbkNsaWNrPXtjb25maWdba2V5XS5jYn0+XG4gICAgICAgICAge2NvbmZpZ1trZXldLnRleHR9XG4gICAgICAgIDwvQnV0dG9uPixcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZywgdGV4dEFsaWduOiBhbGlnbiB9fT5cbiAgICAgIDxTcGFjZSBhbGlnbj17YWxpZ259IGRpcmVjdGlvbj17ZGlyZWN0aW9ufT5cbiAgICAgICAge3JlbmRlciA/IHJlbmRlcihwcm9wcywgZGVmYXVsdERvbSkgOiBkZWZhdWx0RG9tfVxuICAgICAgPC9TcGFjZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2wsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCBEeW5hbWljRmllbGQgZnJvbSAnLi9maWVsZHMnO1xuaW1wb3J0IHsgZmluZEFycmF5T2JqZWN0IH0gZnJvbSAnLi91dGlscy9vYmplY3QnO1xuXG4vKipcbiAgICog5riy5p+TY2VsbCBpdGVtXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqIEBwYXJhbSBnbG9iYWxTcGFuXG4gICAqIEByZXR1cm5zXG4gICAqL1xuY29uc3QgRm9ybUNvbCA9IChjb2xQcm9wczogUkpGb3JtLklDb2xQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIGl0ZW0sXG4gICAgc3BhbixcbiAgICBpc1ZlcnRpY2FsLFxuICAgIHZhbHVlLFxuICAgIG9uRmllbGRDaGFuZ2UsXG4gICAgb25LZXlQcmVzcyxcbiAgICB2YWxpZGF0ZSxcbiAgfSA9IGNvbFByb3BzO1xuXG4gIGNvbnN0IHsgbGFiZWwsIC4uLnJlc3QgfSA9IGl0ZW07XG5cbiAgY29uc3QgbGFibGVUZXh0ID0gdHlwZW9mIGxhYmVsID09PSAnZnVuY3Rpb24nID8gbGFiZWwoKSA6IGxhYmVsO1xuXG4gIGNvbnN0IGNvbHMgPSBpc1ZlcnRpY2FsID8geyBsYWJlbENvbDogeyBzcGFuOiAyNCB9LCB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0gfSA6IHt9O1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSAoaXRlbVJ1bGVzOiBSSkZvcm0uUnVsZXNbXSkgPT4gISFmaW5kQXJyYXlPYmplY3QoaXRlbVJ1bGVzLCAncmVxdWlyZWQnLCB0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxDb2wgc3Bhbj17c3Bhbn0gb25LZXlQcmVzcz17b25LZXlQcmVzc30+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPXtsYWJsZVRleHR9XG4gICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZChpdGVtLnJ1bGVzKX1cbiAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xuICAgICAgICAgICh2YWxpZGF0ZSAmJiAhdmFsaWRhdGUuc3RhdGUpXG4gICAgICAgICAgICA/ICdlcnJvcidcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBoZWxwPXt2YWxpZGF0ZT8ubWVzc2FnZX1cbiAgICAgICAgey4uLmNvbHN9XG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljRmllbGRcbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgIG9uRmllbGRDaGFuZ2U9e29uRmllbGRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Db2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29sO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZSB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBpZiAoIWZpZWxkUHJvcHM/LmZpbHRlck9wdGlvbikge1xuICAgIGZpZWxkUHJvcHMuZmlsdGVyT3B0aW9uID0gKGlucHV0VmFsdWUsIG9wdGlvbikgPT5cbiAgICAgIGlucHV0VmFsdWUgJiYgb3B0aW9uLnZhbHVlLmluZGV4T2YoaW5wdXRWYWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8QXV0b0NvbXBsZXRlIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQuY2hlY2tlZDtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3ggey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IGNoZWNrZWQ9e3ZhbHVlfT5cbiAgICAgIHtmaWVsZFByb3BzLmxhYmVsfVxuICAgIDwvQ2hlY2tib3g+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF07XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENoZWNrYm94Lkdyb3VwIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdGFtcCwgZ2V0RGF0ZU1vbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlUGlja2VyRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBnZXREYXRlVGltZVN0YW1wKGFyZ3NbMF0pO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICB2YWx1ZT17Z2V0RGF0ZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8SW5wdXQgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxJbnB1dE51bWJlciB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0LlBhc3N3b3JkIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0+XG4gICAgICB7ZmllbGRQcm9wcy5sYWJlbH1cbiAgICA8L1JhZGlvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdLnRhcmdldC52YWx1ZTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxSYWRpby5Hcm91cCB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSYW5nZVRpbWVTdGFtcCwgZ2V0UmFuZ2VNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0UmFuZ2VUaW1lU3RhbXAoYXJnc1swXSk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgIHsuLi5maWVsZFByb3BzfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGhpc31cbiAgICAgIHZhbHVlPXtnZXRSYW5nZU1vbWVudCh2YWx1ZSl9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJnc1swXS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGZvcm3nmoRvbkNoYW5nZVxuICAgIGlmIChvbkZpZWxkQ2hhbmdlKSB7XG4gICAgICBvbkZpZWxkQ2hhbmdlKG5hbWUsIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U2VhcmNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSB2YWx1ZT17dmFsdWV9IC8+O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAobmV3VmFsdWUpID0+IHtcbiAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIDxTZWxlY3Qgey4uLmZpZWxkUHJvcHN9IG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9IHZhbHVlPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0RmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVGhpcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcmdzWzBdO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgISF2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiA8U3dpdGNoIHsuLi5maWVsZFByb3BzfSBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfSBjaGVja2VkPXt2YWx1ZX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGaWVsZChwcm9wczogUkpGb3JtLklQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBvbkZpZWxkQ2hhbmdlLCBuYW1lLCB2YWx1ZSwgZmllbGRQcm9wcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25DaGFuZ2VUaGlzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFyZ3NbMF0udGFyZ2V0LnZhbHVlO1xuXG4gICAgLy8g57uE5Lu25Y6f5p2l55qEb25DaGFuZ2Xkuovku7ZcbiAgICBpZiAoZmllbGRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgZmllbGRQcm9wcy5vbkNoYW5nZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvLyBmb3Jt55qEb25DaGFuZ2VcbiAgICBpZiAob25GaWVsZENoYW5nZSkge1xuICAgICAgb25GaWVsZENoYW5nZShuYW1lLCBuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dC5UZXh0QXJlYSB7Li4uZmllbGRQcm9wc30gb25DaGFuZ2U9e29uQ2hhbmdlVGhpc30gdmFsdWU9e3ZhbHVlfSAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldERhdGVUaW1lU3RhbXAsIGdldERhdGVNb21lbnQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVBpY2tlckZpZWxkKHByb3BzOiBSSkZvcm0uSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uRmllbGRDaGFuZ2UsIG5hbWUsIHZhbHVlLCBmaWVsZFByb3BzIH0gPSBwcm9wcztcblxuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0RGF0ZVRpbWVTdGFtcChhcmdzWzBdKTtcblxuICAgIC8vIOe7hOS7tuWOn+adpeeahG9uQ2hhbmdl5LqL5Lu2XG4gICAgaWYgKGZpZWxkUHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGZpZWxkUHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGltZVBpY2tlclxuICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaGlzfVxuICAgICAgdmFsdWU9e2dldERhdGVNb21lbnQodmFsdWUpfVxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuZXhwb3J0IGludGVyZmFjZSBGaWxlRGF0YSB7XG4gIHVpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFtrZXlzOiBzdHJpbmddOiBhbnk7XG59XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWxlT2JqZWN0QnlVcmwgPSAodXJsOiBzdHJpbmcpOiBGaWxlRGF0YSA9PiB7XG4gIGNvbnN0IGZpbGUgPSB7XG4gICAgdWlkOiB2NCgpLFxuICAgIC8vIG5hbWU6IHVybC5yZXBsYWNlKC8oLipcXC8pKihbXi5dKykvaSwgJyQyJykuc3BsaXQoJz8nKVswXSxcbiAgICBuYW1lOiB1cmwucmVwbGFjZSgvKC4qXFwvKSooW14uXSspL2ksICckMicpLFxuICAgIHN0YXR1czogJ2RvbmUnLFxuICAgIHVybDogdXJsLFxuICB9O1xuICByZXR1cm4gZmlsZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXBsb2FkLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUZpbGVPYmplY3RCeVVybCB9IGZyb20gJy4vaGVwbGVyJztcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkRmllbGQocHJvcHM6IFJKRm9ybS5JUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgb25GaWVsZENoYW5nZSwgbmFtZSwgdmFsdWUsIGZpZWxkUHJvcHMsIGN1c3RvbVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBtYXhTaXplID0gMiwgbWF4TGVuZ3RoID0gMSB9ID0gY3VzdG9tUHJvcHM7XG5cbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGhhc1N0cmluZ0ZpbGUgPVxuICAgICAgICB2YWx1ZS5maW5kSW5kZXgoKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykgIT09IC0xO1xuICAgICAgaWYgKCFoYXNTdHJpbmdGaWxlKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRGaWxlTGlzdCA9IFtdO1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGVmYXVsdEZpbGVMaXN0LnB1c2goZ2VuZXJhdGVGaWxlT2JqZWN0QnlVcmwoaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRGaWxlTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldEZpbGVMaXN0KGRlZmF1bHRGaWxlTGlzdCk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcblxuICAvKipcbiAgICogb25DaGFuZ2Xlj5jljJZcbiAgICogQHBhcmFtIGZpbGVzXG4gICAqL1xuICBjb25zdCBvbkNoYW5nZVRoaXMgPSAoZmlsZXMpID0+IHtcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSBmaWxlcztcbiAgICBmaWxlTGlzdC5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBpZiAoIWZpbGUudXJsICYmIGZpbGUucmVzcG9uc2U/LnVybCkge1xuICAgICAgICBmaWxlLnVybCA9IGZpbGUucmVzcG9uc2U/LnVybDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRGaWxlTGlzdChmaWxlTGlzdCk7XG5cbiAgICAvLyDnu4Tku7bljp/mnaXnmoRvbkNoYW5nZeS6i+S7tlxuICAgIGlmIChmaWVsZFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlKGZpbGVzKTtcbiAgICB9XG4gICAgLy8gZm9ybeeahG9uQ2hhbmdlXG4gICAgaWYgKG9uRmllbGRDaGFuZ2UpIHtcbiAgICAgIG9uRmllbGRDaGFuZ2UobmFtZSwgZmlsZUxpc3QsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIOS4iuS8oOi/m+W6puaooeaLnzzlgYfov5vluqY+XG4gICAqL1xuICBsZXQgcHJvY2Vzc0lEID0gMDtcbiAgY29uc3QgcHJvY2VzcyA9IChvblByb2dyZXNzLCBwZXJjZW50ID0gMCkgPT4ge1xuICAgIGxldCBuZXh0UGVyY2VudCA9IHBlcmNlbnQgKyBNYXRoLnJhbmRvbSgpICogMTA7XG4gICAgbmV4dFBlcmNlbnQgPSBuZXh0UGVyY2VudCA+IDk5ID8gOTkgOiBuZXh0UGVyY2VudDtcbiAgICBvblByb2dyZXNzKHsgcGVyY2VudDogbmV4dFBlcmNlbnQgfSk7XG4gICAgcHJvY2Vzc0lEID0gc2V0VGltZW91dCgoKSA9PiBwcm9jZXNzKG9uUHJvZ3Jlc3MsIG5leHRQZXJjZW50KSwgMzAwKTtcbiAgfTtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5LiK5Lyg5pa55rOVXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBjb25zdCBjdXN0b21SZXF1ZXN0ID0gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICBpZiAoIWZpZWxkUHJvcHMuY3VzdG9tUmVxdWVzdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBmaWxlLCBvblN1Y2Nlc3MsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MgfSA9IGFyZ3M7XG5cbiAgICBwcm9jZXNzKG9uUHJvZ3Jlc3MpO1xuICAgIC8vIG9uUHJvZ3Jlc3MoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZVVybCA9IGF3YWl0IGZpZWxkUHJvcHMuY3VzdG9tUmVxdWVzdChmaWxlKTtcbiAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgIHVybDogZmlsZVVybCxcbiAgICAgIH0pO1xuICAgICAgY2xlYXJUaW1lb3V0KHByb2Nlc3NJRCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHByb2Nlc3NJRCk7XG4gICAgICBtZXNzYWdlLmVycm9yKCfkuIrkvKDlpLHotKUnLCBlKTtcbiAgICAgIG9uRXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIOS4iuS8oOWJjeeahOagoVxuICAgKiBAcGFyYW0gZmlsZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGUpID0+IHtcbiAgICBjb25zdCBpc0ZpbGVTaXplRXhjY2Vzc0xpbWl0ZWQgPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA+IG1heFNpemU7XG5cbiAgICAvLyBjb25zdCBmaWxlVHlwZSA9IGZpbGUudHlwZTtcbiAgICBpZiAoaXNGaWxlU2l6ZUV4Y2Nlc3NMaW1pdGVkKSB7XG4gICAgICBtZXNzYWdlLmVycm9yKCfku4XmlK/mjIHvvJpKUEVHL1BORy9TVkcvQlZQIOagvOW8jyAyTeS7peWGhScpO1xuICAgICAgcmV0dXJuIFVwbG9hZC5MSVNUX0lHTk9SRTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCB7IHVwbG9hZEJ1dHRvblRleHQgfSA9IGN1c3RvbVByb3BzO1xuXG4gIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcbiAgICA8ZGl2PlxuICAgICAgPFBsdXNPdXRsaW5lZCAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+e3VwbG9hZEJ1dHRvblRleHR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXBsb2FkXG4gICAgICB7Li4uZmllbGRQcm9wc31cbiAgICAgIGN1c3RvbVJlcXVlc3Q9e2N1c3RvbVJlcXVlc3R9XG4gICAgICBiZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRoaXN9XG4gICAgICBmaWxlTGlzdD17ZmlsZUxpc3R9XG4gICAgPlxuICAgICAge2ZpbGVMaXN0Lmxlbmd0aCA+PSBtYXhMZW5ndGggPyBudWxsIDogdXBsb2FkQnV0dG9ufVxuICAgIDwvVXBsb2FkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IFRleHRhcmVhRmllbGQgZnJvbSAnLi9UZXh0YXJlYSc7XG5pbXBvcnQgUGFzc3dvcmRGaWVsZCBmcm9tICcuL1Bhc3N3b3JkJztcbmltcG9ydCBOdW1iZXJGaWVsZCBmcm9tICcuL051bWJlcic7XG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IFN3aXRjaEZpZWxkIGZyb20gJy4vU3dpdGNoJztcbmltcG9ydCBBdXRvQ29tcGxldGVGaWVsZCBmcm9tICcuL0F1dG9Db21wbGV0ZSc7XG5pbXBvcnQgQ2hlY2tib3hGaWVsZCBmcm9tICcuL0NoZWNrYm94JztcbmltcG9ydCBDaGVja2JveEdyb3VwRmllbGQgZnJvbSAnLi9DaGVja2JveEdyb3VwJztcbmltcG9ydCBEYXRlUGlja2VyRmllbGQgZnJvbSAnLi9EYXRlUGlja2VyJztcbmltcG9ydCBSYW5nZVBpY2tlckZpZWxkIGZyb20gJy4vUmFuZ2VQaWNrZXInO1xuaW1wb3J0IFRpbWVQaWNrZXJGaWVsZCBmcm9tICcuL1RpbWVQaWNrZXInO1xuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAnLi9SYWRpbyc7XG5pbXBvcnQgUmFkaW9Hcm91cEZpZWxkIGZyb20gJy4vUmFkaW9Hcm91cCc7XG5pbXBvcnQgVXBsb2FkRmllbGQgZnJvbSAnLi9VcGxvYWQnO1xuXG4vLyBGaWVsZE1hcFxuY29uc3QgRmllbGRNYXAgPSB7XG4gIGlucHV0OiBJbnB1dEZpZWxkLFxuICBzZWFyY2g6IFNlYXJjaEZpZWxkLFxuICB0ZXh0YXJlYTogVGV4dGFyZWFGaWVsZCxcbiAgcGFzc3dvcmQ6IFBhc3N3b3JkRmllbGQsXG4gIG51bWJlcjogTnVtYmVyRmllbGQsXG4gIHNlbGVjdDogU2VsZWN0RmllbGQsXG4gIHN3aXRjaDogU3dpdGNoRmllbGQsXG4gIGF1dG9Db21wbGV0ZTogQXV0b0NvbXBsZXRlRmllbGQsXG4gIGNoZWNrYm94OiBDaGVja2JveEZpZWxkLFxuICBjaGVja2JveEdyb3VwOiBDaGVja2JveEdyb3VwRmllbGQsXG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJGaWVsZCxcbiAgcmFuZ2VQaWNrZXI6IFJhbmdlUGlja2VyRmllbGQsXG4gIHRpbWVQaWNrZXI6IFRpbWVQaWNrZXJGaWVsZCxcbiAgcmFkaW86IFJhZGlvRmllbGQsXG4gIHJhZGlvR3JvdXA6IFJhZGlvR3JvdXBGaWVsZCxcbiAgdXBsb2FkOiBVcGxvYWRGaWVsZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNGaWVsZChcbiAgcHJvcHM6IFJKRm9ybS5JdGVtU2NoZW1hICYgUkpGb3JtLklGaWVsZFByb3BzLFxuKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBuYW1lLFxuICAgIHZhbHVlLFxuICAgIGZpZWxkUHJvcHMgPSB7fSxcbiAgICBjdXN0b21Qcm9wcyxcbiAgICBvbkZpZWxkQ2hhbmdlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgQ29tcG9uZW50ID0gRmllbGRNYXBbdHlwZV07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgZmllbGRQcm9wcz17ZmllbGRQcm9wc31cbiAgICAgIGN1c3RvbVByb3BzPXtjdXN0b21Qcm9wc31cbiAgICAgIG9uRmllbGRDaGFuZ2U9e29uRmllbGRDaGFuZ2V9XG4gICAgLz5cbiAgKTtcbn1cblxuLyoqXG4gKiDmianlsZXnu4Tku7blupNcbiAqIEBwYXJhbSBmaWVsZHNcbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZEZpZWxkcyA9IChmaWVsZHM6IFJKRm9ybS5FeHRlbmRGaWVsZEl0ZW1bXSk6IHZvaWQgPT4ge1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBmb3VuZEtleSA9IE9iamVjdC5rZXlzKEZpZWxkTWFwKS5maW5kKChrZXkpID0+IGtleSA9PT0gZmllbGQubmFtZSk7XG4gICAgaWYgKGZvdW5kS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYOe7hOS7tiR7ZmllbGQubmFtZX3lt7LlrZjlnKjvvIzor7fph43mlrDlrprkuYlgKTtcbiAgICB9XG4gICAgRmllbGRNYXBbZmllbGQubmFtZV0gPSBmaWVsZC5jb21wb25lbnQ7XG4gIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3csIFNwaW4gfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSAnLi91dGlscy9zdHJpbmcnO1xuaW1wb3J0IHsgc2ltcGxlQ2xvbmUgfSBmcm9tICcuL3V0aWxzL29iamVjdCc7XG5pbXBvcnQgeyBhZGRMYWJlbFN0eWxlV2lkdGgsIHJlbW92ZUxhYmVsU3R5bGVXaWR0aCB9IGZyb20gJy4vdXRpbHMvc3R5bGUnO1xuaW1wb3J0IEZvcm1Db2wgZnJvbSAnLi9Gb3JtQ29sJztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuZXhwb3J0IHsgZXh0ZW5kRmllbGRzIH0gZnJvbSAnLi9maWVsZHMnO1xuZXhwb3J0IHsgZXh0ZW5kUnVsZXMgfSBmcm9tICcuL3J1bGVzJztcblxuY29uc3QgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gPSBSZWFjdDtcblxuY29uc3QgZm9ybUlEID0gYEZPUk1fJHtyYW5kb21TdHJpbmcoKX1gO1xuXG5leHBvcnQgZnVuY3Rpb24gRm9ybShwcm9wczogUkpGb3JtLkZvcm1Qcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGd1dHRlciA9IDI0LFxuICAgIHNwYW4gPSAxMixcbiAgICBsYWJlbERpcmVjdGlvbiA9ICdob3Jpem9udGFsJyxcbiAgICBsYWJlbFdpZHRoID0gMTIwLFxuICAgIHZhbGlkYXRlT25DaGFuZ2UgPSB0cnVlLFxuICAgIHNjaGVtYSxcbiAgICBvbkNoYW5nZSxcbiAgICBkYXRhID0ge30sXG4gICAgc3VibWl0dGVyLFxuICAgIHNwaW5pbmcgPSBmYWxzZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIGNvbnN0IFt2YWxpZGF0aW9uLCBzZXRWYWxpZGF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyDmt7vliqDmoLflvI9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhZGRMYWJlbFN0eWxlV2lkdGgobGFiZWxXaWR0aCwgbGFiZWxEaXJlY3Rpb24sIGZvcm1JRCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZUxhYmVsU3R5bGVXaWR0aChmb3JtSUQpO1xuICAgIH07XG4gIH0sIFtsYWJlbERpcmVjdGlvbiwgbGFiZWxXaWR0aF0pO1xuXG4gIC8vIOWIneWni+WMluaVsOaNrlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHNjaGVtYS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLm5hbWUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxuICAgICAgICAgICAgcnVsZXM6IGl0ZW0ucnVsZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9ybURhdGFbaXRlbS5uYW1lXSA9IGZvcm1EYXRhW2l0ZW0ubmFtZV0gfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnaW5pdDonLCByZXN1bHQsIGZvcm1EYXRhKTtcbiAgICBzZXRWYWxpZGF0aW9uKHJlc3VsdCk7XG4gIH0sIFtzY2hlbWFdKTtcblxuICAvLyDojrflj5Z2YWxpZGF0b3JcbiAgY29uc3QgZ2V0VmFsaWRhdGVCeU5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbkl0ZW0gPSB2YWxpZGF0aW9uLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB2YWxpZGF0aW9uSXRlbSA/IHZhbGlkYXRpb25JdGVtLnN0YXRlIDogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IHZhbGlkYXRpb25JdGVtPy5tZXNzYWdlIHx8ICcnLFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOajgOafpeaYr+S4jeaYr+WFqOmDqOmAmui/h+ajgOmqjFxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBjb25zdCBpc0FsbFZhbGlkYXRlZCA9ICgpOiBib29sZWFuID0+IHtcbiAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZUl0ZW0gPSB2YWxpZGF0aW9uLmZpbmQoKHYpID0+IHYubmFtZSA9PT0ga2V5KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSwgdmFsaWRhdGVJdGVtKTtcbiAgICAgIHZhbGlkYXRlRmllbGQoa2V5LCBmb3JtRGF0YVtrZXldLCB2YWxpZGF0ZUl0ZW0/LnR5cGUpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5vdFZhbGlkYXRlZEl0ZW1JbmRleCA9IE9iamVjdC5rZXlzKHZhbGlkYXRpb24pLmZpbmRJbmRleChcbiAgICAgIChrZXkpID0+IHZhbGlkYXRpb25ba2V5XS52YWxpZGF0ZWQgPT09IGZhbHNlLFxuICAgICk7XG4gICAgcmV0dXJuIG5vdFZhbGlkYXRlZEl0ZW1JbmRleCA9PT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIOagoemqjOWNleS4qmZpZWxkXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgdmFsaWRhdGVGaWVsZCA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIHR5cGU/OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uSXRlbSA9IHZhbGlkYXRpb24uZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAodmFsaWRhdGlvbkl0ZW0gJiYgdmFsaWRhdGlvbkl0ZW0ucnVsZXMpIHtcbiAgICAgIGxldCB2YWxpZGF0ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAvLyDkuIrkvKDlm77niYfpnIDopoHov4fmu6TmjolzdGF0dXPkuI3nrYnkuo5cImRvbmVcIueahFxuICAgICAgaWYgKHR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICAgIHZhbGlkYXRlZFZhbHVlID0gKHZhbHVlIHx8IFtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhdHVzID09PSAnZG9uZScpO1xuICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkIHZhbGlkYXRlJywgdmFsdWUsIHZhbGlkYXRlZFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdGUobmFtZSwgdmFsaWRhdGVkVmFsdWUsIHZhbGlkYXRpb25JdGVtLnJ1bGVzKTtcbiAgICAgIHZhbGlkYXRpb25JdGVtLm1lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgIHZhbGlkYXRpb25JdGVtLnN0YXRlID0gcmVzdWx0LnN0YXRlO1xuXG4gICAgICBjb25zb2xlLmxvZyhgdmFsaWRhdGVkICR7bmFtZX1gLCByZXN1bHQpO1xuICAgICAgc2V0VmFsaWRhdGlvbihbLi4udmFsaWRhdGlvbl0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRm9ybSBmaWVsZCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgKi9cbiAgY29uc3Qgb25GaWVsZENoYW5nZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAodmFsaWRhdGVPbkNoYW5nZSkge1xuICAgICAgdmFsaWRhdGVGaWVsZChuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2U6JywgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICBmb3JtRGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgIHNldEZvcm1EYXRhKHNpbXBsZUNsb25lKGZvcm1EYXRhKSk7XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBnZXQgdmFsdWVcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gb2xkRGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3QgZ2V0VmFsdWUgPSAobmFtZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YVtuYW1lXSB8fCB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBsYWJlbERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcblxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZT8pOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGUgJiYgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyDmj5DkuqTliY3moKHpqoxcbiAgICBpZiAoIWlzQWxsVmFsaWRhdGVkKCkpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZygnb24gc3VibWl0JywgZm9ybURhdGEpO1xuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICog6ZSu55uY5oyJ5LiLRW50ZXLvvIzlj6ropoHkuI3mmK90ZXh0YXJlYeexu+Wei++8jOaPkOS6pFxuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgY29uc3Qgb25LZXlQcmVzcyA9XG4gICAgKHR5cGU6IHN0cmluZykgPT5cbiAgICAoZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHR5cGUgIT09ICd0ZXh0YXJlYScgJiYgZS5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgICAgb25Gb3JtU3VibWl0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZXNldCcpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0ge307XG4gICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbmV3VmFsdWVba2V5XSA9IG51bGw7XG4gICAgfSk7XG4gICAgc2V0Rm9ybURhdGEobmV3VmFsdWUpO1xuICB9O1xuXG4gIC8vIGNvbnNvbGUubG9nKCdmb3JtRGF0YTogJywgZm9ybURhdGEpO1xuICByZXR1cm4gKFxuICAgIDxTcGluIHNwaW5uaW5nPXtzcGluaW5nfT5cbiAgICAgIDxmb3JtIGlkPXtmb3JtSUR9IG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxuICAgICAgICB7c2NoZW1hLm1hcCgocm93LCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCByb3dLZXkgPSBgcm93XyR7aWR4fWA7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3cga2V5PXtyb3dLZXl9IGd1dHRlcj17Z3V0dGVyfT5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbFxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWUgfHwgcmFuZG9tU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgc3Bhbj17aXRlbS5zcGFuIHx8IHNwYW59XG4gICAgICAgICAgICAgICAgICBpc1ZlcnRpY2FsPXtpc1ZlcnRpY2FsfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2dldFZhbHVlKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgICBvbkZpZWxkQ2hhbmdlPXtvbkZpZWxkQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzcyhpdGVtLnR5cGUpfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e2dldFZhbGlkYXRlQnlOYW1lKGl0ZW0ubmFtZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICB7c3VibWl0dGVyICYmIChcbiAgICAgICAgICA8Rm9vdGVyIHsuLi5zdWJtaXR0ZXJ9IG9uUmVzZXQ9e29uUmVzZXR9IG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Zvcm0+XG4gICAgPC9TcGluPlxuICApO1xufVxuIiwiaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZyc7XG5cbi8vIOm7mOiupOeahOinhOWImVxuY29uc3QgZGVmYXVsdFJ1bGVzOiBSSkZvcm0uUnVsZUl0ZW1bXSA9IFtcbiAge1xuICAgIG5hbWU6ICdyZXF1aXJlZCcsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gbm90RW1wdHlWYWx1ZSh2YWx1ZSksXG4gICAgbWVzc2FnZTogJ+W/heWhqycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWluTGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aD86IHN0cmluZykgPT5cbiAgICAgIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8IE51bWJlcihsZW5ndGgpLFxuICAgIG1lc3NhZ2U6IChsZW5ndGg6IG51bWJlcikgPT4gYOmVv+W6puS4jeWwj+S6jiR7bGVuZ3RofWAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWF4TGVuZ3RoJyxcbiAgICB2YWxpZGF0b3I6ICh2YWx1ZTogc3RyaW5nIHwgYW55W10sIGxlbmd0aD86IHN0cmluZykgPT5cbiAgICAgIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA8PSBOdW1iZXIobGVuZ3RoKSxcbiAgICBtZXNzYWdlOiAobGVuZ3RoOiBudW1iZXIpID0+IGDplb/luqbkuI3lpKfkuo4ke2xlbmd0aH1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgdmFsaWRhdG9yOiAodmFsdWU6IHN0cmluZyB8IGFueVtdLCBsZW5ndGg6IHN0cmluZykgPT5cbiAgICAgIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gTnVtYmVyKGxlbmd0aCksXG4gICAgbWVzc2FnZTogKGxlbmd0aDogbnVtYmVyKSA9PiBg6ZW/5bqm5b+F6aG75Li6JHtsZW5ndGh9YCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRSdWxlcztcbiIsImltcG9ydCBkZWZhdWx0UnVsZXMgZnJvbSAnLi9kZWZhdWx0JztcblxuZXhwb3J0IGRlZmF1bHQge307XG5cbi8qKlxuICog5omp5bGV55qE5pa55rOVXG4gKiBAcGFyYW0gcnVsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGV4dGVuZFJ1bGVzID0gKHJ1bGVzOiBSSkZvcm0uUnVsZUl0ZW1bXSk6IHZvaWQgPT4ge1xuICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBkZWZhdWx0UnVsZXMuZmluZEluZGV4KChpdGVtKSA9PiBydWxlLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKGDop4TliJkke3J1bGUubmFtZX3lt7LlrZjlnKgsIOaJqeWxleinhOWImeS8muimhueblum7mOiupOinhOWImWApO1xuICAgICAgZGVmYXVsdFJ1bGVzW2luZGV4XSA9IHJ1bGU7XG4gICAgfVxuICAgIGRlZmF1bHRSdWxlcy5wdXNoKHJ1bGUpO1xuICB9KTtcbn07XG5cbi8qKlxuICog5qC55o2ua2V55p+l5om+XG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybnNcbiAqL1xuY29uc3QgZ2V0UnVsZUl0ZW1CeU5hbWUgPSAobmFtZTogc3RyaW5nKTogUkpGb3JtLlJ1bGVJdGVtIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGZvdW5kUnVsZSA9IGRlZmF1bHRSdWxlcy5maW5kKChydWxlKSA9PiBydWxlLm5hbWUgPT09IG5hbWUpO1xuICByZXR1cm4gZm91bmRSdWxlO1xufTtcblxuLyoqXG4gKiDmoKHpqoxcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHJ1bGVzXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGUgPSAoXG4gIGtleTogc3RyaW5nLFxuICB2YWx1ZTogYW55LFxuICBydWxlczogUkpGb3JtLlJ1bGVJdGVtW10sXG4pOiBSSkZvcm0uVmFsaWRhdGVkUmVzdWx0ID0+IHtcbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBzdGF0ZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfTtcblxuICBydWxlcy5zb21lKChydWxlKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCAuLi5ydWxlSXRlbSB9ID0gcnVsZTtcbiAgICBjb25zdCBydWxlTmFtZSA9IE9iamVjdC5rZXlzKHJ1bGVJdGVtKT8uWzBdO1xuICAgIGNvbnN0IHJ1bGVWYWx1ZSA9IHJ1bGVJdGVtPy5bcnVsZU5hbWVdO1xuICAgIGlmICghcnVsZU5hbWUpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIOWQpuWImemcgOimgeWcqOeOsOacieeahOinhOWImeWOu+afpeaJvlxuICAgIGNvbnN0IGRlZmF1bHRSdWxlSXRlbSA9IGdldFJ1bGVJdGVtQnlOYW1lKHJ1bGVOYW1lKTtcbiAgICBpZiAoIWRlZmF1bHRSdWxlSXRlbSkge1xuICAgICAgY29uc29sZS53YXJuKGDmnKrmib7liLAke3J1bGVOYW1lfeeahOagoemqjOinhOWImWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG1lc3NhZ2VcbiAgICBsZXQgbXNnID0gbWVzc2FnZSB8fCBkZWZhdWx0UnVsZUl0ZW0ubWVzc2FnZTtcbiAgICBtc2cgPSB0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nID8gbXNnKHJ1bGVWYWx1ZSkgOiBtc2c7XG5cbiAgICAvLyDoh6rlrprkuYnnmoR2YWxpZGF0b3JcbiAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgc3RhdGUgPSBydWxlVmFsdWUodmFsdWUpO1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgbWVzc2FnZTogc3RhdGUgPyAnJyA6IG1zZyxcbiAgICAgIH07XG4gICAgICByZXR1cm4gIXN0YXRlO1xuICAgIH1cblxuICAgIC8vIOWmguaenOaYr2Jvb2xlYW7nmoTml7blgJnvvIx0cnVl5YC86ZyA6KaB5qCh6aqMXG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBydWxlVmFsdWUgPT09ICdib29sZWFuJyAmJiBydWxlVmFsdWUpIHx8XG4gICAgICBbJ3N0cmluZycsICdudW1iZXInXS5pbmRleE9mKHR5cGVvZiBydWxlVmFsdWUpICE9PSAtMVxuICAgICkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBkZWZhdWx0UnVsZUl0ZW0udmFsaWRhdG9yKHZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXRlID8gJycgOiBtc2csXG4gICAgICB9O1xuICAgICAgcmV0dXJuICFzdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbm90RW1wdHlWYWx1ZSB9IGZyb20gJy4vc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge307XG5cbi8qKlxuICog5bCG5YC86L2s5o2i5Li65pe26Ze05oizXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREYXRlVGltZVN0YW1wID0gKHZhbHVlOiBhbnkpOiBudW1iZXIgPT4ge1xuICBpZiAobm90RW1wdHlWYWx1ZSh2YWx1ZSkpIHJldHVybiBtb21lbnQodmFsdWUpLnZhbHVlT2YoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGF0ZU1vbWVudCA9ICh2YWx1ZTogYW55KTogUkpGb3JtLkRhdGVUeXBlID0+IHtcbiAgaWYgKG5vdEVtcHR5VmFsdWUodmFsdWUpKSByZXR1cm4gbW9tZW50KHZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIOWwhuaXtumXtOiMg+WbtOWAvOi9rOaNouS4uuaXtumXtOaIs1xuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0UmFuZ2VUaW1lU3RhbXAgPSAodmFsdWU6IGFueVtdKTogYW55W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbbnVsbCwgbnVsbF07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaWR4KSA9PiB7XG4gICAgICByZXN1bHRbaWR4XSA9IGdldERhdGVUaW1lU3RhbXAodmFsKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDlsIbml7bpl7TmiLPmlbDnu4TovazmjaLkuLptb21lbnTmlbDnu4RcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmdlTW9tZW50ID0gKFxuICB2YWx1ZTogW1JKRm9ybS5EYXRlVHlwZSwgUkpGb3JtLkRhdGVUeXBlXSB8IHVuZGVmaW5lZCB8IG51bGwsXG4pOiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0+IHtcbiAgY29uc3QgcmVzdWx0OiBbUkpGb3JtLkRhdGVUeXBlLCBSSkZvcm0uRGF0ZVR5cGVdID0gW251bGwsIG51bGxdO1xuICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgcmVzdWx0W2lkeF0gPSB2YWwgPyBtb21lbnQodmFsKSA6IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBcnJheU9iamVjdDxUPihhcnJheTogVFtdID0gW10sIGtleTpzdHJpbmcsIHZhbHVlOiBhbnkpOlQge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LmZpbmQoKGl0ZW0pID0+IGl0ZW1ba2V5XSA9PT0gdmFsdWUpO1xuICByZXR1cm4gZm91bmQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHNpbXBsZUNsb25lID0gKG9iajoge1tuYW1lOnN0cmluZ106YW55fSkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSAobGVuZ3RoID0gOCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9ICcxMjM0NTY3ODkwQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLnNwbGl0KFxuICAgICcnLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3RyaW5nQXJyYXkubGVuZ3RoKTtcbiAgICByZXN1bHQucHVzaChzdHJpbmdBcnJheVtpbmRleF0pO1xuICB9XG4gIHJldHVybiByZXN1bHQuam9pbignJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm90RW1wdHlWYWx1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGVtcHR5VmFsdWUgPSBbbnVsbCwgdW5kZWZpbmVkLCAnJ107XG4gIC8vIOmdnuepulxuICBpZiAoZW1wdHlWYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8g5pWw57uE5Lmf6Z2e56m6XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIiwiXG5leHBvcnQgY29uc3QgcmVtb3ZlTGFiZWxTdHlsZVdpZHRoID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGBmb3JtLWxhYmVsLXdpZHRoLSR7aWR9YDtcbiAgY29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0cmlidXRlTmFtZSk7XG4gIGlmIChET00pIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoRE9NKTtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGFiZWxTdHlsZVdpZHRoID0gKHdpZHRoOiBudW1iZXIsIGxhYmVsRGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnLCBpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSByZW1vdmVMYWJlbFN0eWxlV2lkdGgoaWQpO1xuXG4gIGlmIChsYWJlbERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3QgU1RZTEUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIFNUWUxFLmlkID0gYXR0cmlidXRlTmFtZTtcbiAgICBsZXQgc3R5bGVzID0gYCMke2lkfSAuYW50LWZvcm0taXRlbSB7ZGlzcGxheTogZmxleDsgd2lkdGg6IDEwMCU7IGZsZXgtZmxvdzogcm93O31cXG5gO1xuICAgIHN0eWxlcyArPSBgIyR7aWR9IC5hbnQtZm9ybS1pdGVtLWxhYmVsIHsgd2lkdGg6ICR7d2lkdGh9cHg7IH1cXG5gO1xuICAgIHN0eWxlcyArPSBgIyR7aWR9IC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge2ZsZXgtZ3JvdzogMX1gO1xuICAgIFNUWUxFLmlubmVySFRNTCA9IHN0eWxlcztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFNUWUxFKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX21vbWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=