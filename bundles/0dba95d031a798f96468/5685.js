(globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || []).push([[5685],{

/***/ "./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _defineProperty)
});

;// ./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/bs58/src/esm/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var base_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./matrix-js-sdk/node_modules/base-x/src/esm/index.js");

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,base_x__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(ALPHABET));


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/a-callable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/a-map.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var has = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js").has);

// Perform ? RequireInternalSlot(M, [[MapData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/a-possible-prototype.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPossiblePrototype = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-possible-prototype.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/an-instance.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/an-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-includes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-set-length.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/classof.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/copy-constructor-properties.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/correct-prototype-getter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/create-iter-result-object.js":
/***/ ((module) => {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/create-property-descriptor.js":
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/create-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/define-built-in-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var makeBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/define-built-ins.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/define-global-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/descriptors.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/document-create-element.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/engine-user-agent.js":
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/engine-v8-version.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/enum-bug-keys.js":
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/error-stack-clear.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/error-stack-install.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");
var clearErrorStack = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/error-stack-clear.js");
var ERROR_STACK_INSTALLABLE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/error-stack-installable.js");

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/error-stack-installable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var createPropertyDescriptor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/export.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/fails.js":
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-apply.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-bind-native.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-call.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-name.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this-clause.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classofRaw = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/get-iterator-direct.js":
/***/ ((module) => {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/get-iterator-method.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-method.js");
var isNullOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-null-or-undefined.js");
var Iterators = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/get-iterator.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator-method.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/get-method.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/global.js":
/***/ (function(module) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/hidden-keys.js":
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/html.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/ie8-dom-define.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/indexed-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/inherit-if-required.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/inspect-source.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/install-error-cause.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/internal-state.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-array-iterator-method.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-callable.js":
/***/ ((module) => {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-forced.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-null-or-undefined.js":
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-possible-prototype.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-pure.js":
/***/ ((module) => {

"use strict";

module.exports = false;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-symbol.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterate-simple.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterate.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterator-close.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterator-create-proxy.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var create = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIns = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-ins.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/internal-state.js");
var getMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-method.js");
var IteratorPrototype = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var createIterResultObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-iter-result-object.js");
var iteratorClose = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterator-close.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      try {
        var result = state.done ? undefined : state.nextHandler();
        return createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose(iterator, 'throw', error);
      }
      iteratorClose(iterator, 'normal');
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterator-map.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
module.exports = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterators-core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var create = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/iterators.js":
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/make-built-in.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var iterateSimple = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterate-simple.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
    return fn(entry[1], entry[0]);
  }) : forEach(map, fn);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/math-trunc.js":
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/normalize-string-argument.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-string.js");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-define-properties.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-names.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-symbols.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-get-prototype-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-is-prototype-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-keys-internal.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-keys.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-property-is-enumerable.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/object-set-prototype-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var requireObjectCoercible = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/require-object-coercible.js");
var aPossiblePrototype = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/ordinary-to-primitive.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/own-keys.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/parse-json-string.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");

var $SyntaxError = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

module.exports = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at(source, i);
    if (chr === '\\') {
      var twoChars = slice(source, i, i + 2);
      if (hasOwn(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice(source, i, i + 4);
        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/proxy-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/require-object-coercible.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/same-value-zero.js":
/***/ ((module) => {

"use strict";

// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x !== x && y !== y;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/shared-key.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/shared-store.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/shared.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var store = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared-store.js");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/symbol-constructor-detection.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-absolute-index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-indexed-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-length.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-primitive.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-property-key.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-string-tag-support.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-string.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/try-to-string.js":
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/uid.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/use-symbol-as-uid.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/v8-prototype-define-bug.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/validate-arguments-length.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/weak-map-basic-detection.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var shared = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");
var isPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/copy-constructor-properties.js");
var proxyAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/proxy-accessor.js");
var inheritIfRequired = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/normalize-string-argument.js");
var installErrorCause = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/install-error-cause.js");
var installErrorStack = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/error-stack-install.js");
var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.array.push.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.error.cause.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var apply = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-apply.js");
var wrapErrorConstructorWithCause = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/wrap-error-constructor-with-cause.js");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.constructor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var anInstance = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var getPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltInAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in-accessor.js");
var createProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");
var IteratorPrototype = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = global[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://github.com/tc39/proposal-iterator-helpers
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator-direct.js");

// `Iterator.prototype.forEach` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.map.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var map = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterator-map.js");
var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
  map: map
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.json.parse.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-array.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var toString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-string.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var parseJSONString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/parse-json-string.js");
var NATIVE_SYMBOL = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/symbol-constructor-detection.js");

var JSON = global.JSON;
var Number = global.Number;
var SyntaxError = global.SyntaxError;
var nativeParse = JSON && JSON.parse;
var enumerableOwnProperties = getBuiltIn('Object', 'keys');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);
var push = uncurryThis([].push);

var IS_DIGIT = /^\d$/;
var IS_NON_ZERO_DIGIT = /^[1-9]$/;
var IS_NUMBER_START = /^(?:-|\d)$/;
var IS_WHITESPACE = /^[\t\n\r ]$/;

var PRIMITIVE = 0;
var OBJECT = 1;

var $parse = function (source, reviver) {
  source = toString(source);
  var context = new Context(source, 0, '');
  var root = context.parse();
  var value = root.value;
  var endIndex = context.skip(IS_WHITESPACE, root.end);
  if (endIndex < source.length) {
    throw new SyntaxError('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
  }
  return isCallable(reviver) ? internalize({ '': value }, '', reviver, root) : value;
};

var internalize = function (holder, name, reviver, node) {
  var val = holder[name];
  var unmodified = node && val === node.value;
  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
  var elementRecordsLen, keys, len, i, P;
  if (isObject(val)) {
    var nodeIsArray = isArray(val);
    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
    if (nodeIsArray) {
      elementRecordsLen = nodes.length;
      len = lengthOfArrayLike(val);
      for (i = 0; i < len; i++) {
        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
      }
    } else {
      keys = enumerableOwnProperties(val);
      len = lengthOfArrayLike(keys);
      for (i = 0; i < len; i++) {
        P = keys[i];
        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : undefined));
      }
    }
  }
  return call(reviver, holder, name, val, context);
};

var internalizeProperty = function (object, key, value) {
  if (DESCRIPTORS) {
    var descriptor = getOwnPropertyDescriptor(object, key);
    if (descriptor && !descriptor.configurable) return;
  }
  if (value === undefined) delete object[key];
  else createProperty(object, key, value);
};

var Node = function (value, end, source, nodes) {
  this.value = value;
  this.end = end;
  this.source = source;
  this.nodes = nodes;
};

var Context = function (source, index) {
  this.source = source;
  this.index = index;
};

// https://www.json.org/json-en.html
Context.prototype = {
  fork: function (nextIndex) {
    return new Context(this.source, nextIndex);
  },
  parse: function () {
    var source = this.source;
    var i = this.skip(IS_WHITESPACE, this.index);
    var fork = this.fork(i);
    var chr = at(source, i);
    if (exec(IS_NUMBER_START, chr)) return fork.number();
    switch (chr) {
      case '{':
        return fork.object();
      case '[':
        return fork.array();
      case '"':
        return fork.string();
      case 't':
        return fork.keyword(true);
      case 'f':
        return fork.keyword(false);
      case 'n':
        return fork.keyword(null);
    } throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  },
  node: function (type, value, start, end, nodes) {
    return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
  },
  object: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectKeypair = false;
    var object = {};
    var nodes = {};
    while (i < source.length) {
      i = this.until(['"', '}'], i);
      if (at(source, i) === '}' && !expectKeypair) {
        i++;
        break;
      }
      // Parsing the key
      var result = this.fork(i).string();
      var key = result.value;
      i = result.end;
      i = this.until([':'], i) + 1;
      // Parsing value
      i = this.skip(IS_WHITESPACE, i);
      result = this.fork(i).parse();
      createProperty(nodes, key, result);
      createProperty(object, key, result.value);
      i = this.until([',', '}'], result.end);
      var chr = at(source, i);
      if (chr === ',') {
        expectKeypair = true;
        i++;
      } else if (chr === '}') {
        i++;
        break;
      }
    }
    return this.node(OBJECT, object, this.index, i, nodes);
  },
  array: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectElement = false;
    var array = [];
    var nodes = [];
    while (i < source.length) {
      i = this.skip(IS_WHITESPACE, i);
      if (at(source, i) === ']' && !expectElement) {
        i++;
        break;
      }
      var result = this.fork(i).parse();
      push(nodes, result);
      push(array, result.value);
      i = this.until([',', ']'], result.end);
      if (at(source, i) === ',') {
        expectElement = true;
        i++;
      } else if (at(source, i) === ']') {
        i++;
        break;
      }
    }
    return this.node(OBJECT, array, this.index, i, nodes);
  },
  string: function () {
    var index = this.index;
    var parsed = parseJSONString(this.source, this.index + 1);
    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
  },
  number: function () {
    var source = this.source;
    var startIndex = this.index;
    var i = startIndex;
    if (at(source, i) === '-') i++;
    if (at(source, i) === '0') i++;
    else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, ++i);
    else throw new SyntaxError('Failed to parse number at: ' + i);
    if (at(source, i) === '.') i = this.skip(IS_DIGIT, ++i);
    if (at(source, i) === 'e' || at(source, i) === 'E') {
      i++;
      if (at(source, i) === '+' || at(source, i) === '-') i++;
      var exponentStartIndex = i;
      i = this.skip(IS_DIGIT, i);
      if (exponentStartIndex === i) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
    }
    return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
  },
  keyword: function (value) {
    var keyword = '' + value;
    var index = this.index;
    var endIndex = index + keyword.length;
    if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError('Failed to parse value at: ' + index);
    return this.node(PRIMITIVE, value, index, endIndex);
  },
  skip: function (regex, i) {
    var source = this.source;
    for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
    return i;
  },
  until: function (array, i) {
    i = this.skip(IS_WHITESPACE, i);
    var chr = at(this.source, i);
    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
    throw new SyntaxError('Unexpected character: "' + chr + '" at: ' + i);
  }
};

var NO_SOURCE_SUPPORT = fails(function () {
  var unsafeInt = '9007199254740993';
  var source;
  nativeParse(unsafeInt, function (key, value, context) {
    source = context.source;
  });
  return source !== unsafeInt;
});

var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function () {
  // Safari 9 bug
  return 1 / nativeParse('-0 \t') !== -Infinity;
});

// `JSON.parse` method
// https://tc39.es/ecma262/#sec-json.parse
// https://github.com/tc39/proposal-json-parse-with-source
$({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
  parse: function parse(text, reviver) {
    return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.delete-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var remove = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js").remove);

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.emplace.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");

var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.emplace` method
// https://github.com/tc39/proposal-upsert
$({ target: 'Map', proto: true, real: true, forced: true }, {
  emplace: function emplace(key, handler) {
    var map = aMap(this);
    var value, inserted;
    if (has(map, key)) {
      value = get(map, key);
      if ('update' in handler) {
        value = handler.update(value, key, map);
        set(map, key, value);
      } return value;
    }
    inserted = handler.insert(key, map);
    set(map, key, inserted);
    return inserted;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.every.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (!boundFunction(value, key, map)) return false;
    }, true) !== false;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) set(newMap, key, value);
    });
    return newMap;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.find-key.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { key: key };
    }, true);
    return result && result.key;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.find.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { value: value };
    }, true);
    return result && result.value;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.includes.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var sameValueZero = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/same-value-zero.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  includes: function includes(searchElement) {
    return iterate(aMap(this), function (value) {
      if (sameValueZero(value, searchElement)) return true;
    }, true) === true;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.key-of.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.keyOf` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  keyOf: function keyOf(searchElement) {
    var result = iterate(aMap(this), function (value, key) {
      if (value === searchElement) return { key: key };
    }, true);
    return result && result.key;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.map-keys.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, boundFunction(value, key, map), value);
    });
    return newMap;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.map-values.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, key, boundFunction(value, key, map));
    });
    return newMap;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.merge.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterate.js");
var set = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js").set);

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  merge: function merge(iterable /* ...iterables */) {
    var map = aMap(this);
    var argumentsLength = arguments.length;
    var i = 0;
    while (i < argumentsLength) {
      iterate(arguments[i++], function (key, value) {
        set(map, key, value);
      }, { AS_ENTRIES: true });
    }
    return map;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.reduce.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

var $TypeError = TypeError;

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = aMap(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(map, function (value, key) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    });
    if (noInitial) throw new $TypeError('Reduce of empty map with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.some.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

// `Map.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return true;
    }, true) === true;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.map.update.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var aMap = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");

var $TypeError = TypeError;
var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  update: function update(key, callback /* , thunk */) {
    var map = aMap(this);
    var length = arguments.length;
    aCallable(callback);
    var isPresentInMap = has(map, key);
    if (!isPresentInMap && length < 3) {
      throw new $TypeError('Updating absent value');
    }
    var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
    set(map, key, callback(value, key, map));
    return map;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/web.url-search-params.delete.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/validate-arguments-length.js");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/web.url-search-params.has.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/validate-arguments-length.js");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/web.url-search-params.size.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in-accessor.js");

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/jwt-decode/build/esm/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports InvalidTokenError, jwtDecode */
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    }
    catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/loglevel/lib/loglevel.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else // removed by dead control flow
{}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    var _loggersByName = {};
    var defaultLogger = null;

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods() {
        /*jshint validthis:true */
        var level = this.getLevel();

        // Replace the actual methods.
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, this.name);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;

        // Return any important warnings.
        if (typeof console === undefinedType && level < this.levels.SILENT) {
            return "No console available for logging";
        }
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, _level, _loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, factory) {
      // Private instance variables.
      var self = this;
      /**
       * The level inherited from a parent logger (or a global default). We
       * cache this here rather than delegating to the parent so that it stays
       * in sync with the actual logging methods that we have installed (the
       * parent could change levels but we might not have rebuilt the loggers
       * in this child yet).
       * @type {number}
       */
      var inheritedLevel;
      /**
       * The default level for this logger, if any. If set, this overrides
       * `inheritedLevel`.
       * @type {number|null}
       */
      var defaultLevel;
      /**
       * A user-specific level for this logger. If set, this overrides
       * `defaultLevel`.
       * @type {number|null}
       */
      var userLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var cookieName = encodeURIComponent(storageKey);
                  var location = cookie.indexOf(cookieName + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(
                          cookie.slice(location + cookieName.length + 1)
                      )[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      function clearPersistedLevel() {
          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage.removeItem(storageKey);
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {}
      }

      function normalizeLevel(input) {
          var level = input;
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              return level;
          } else {
              throw new TypeError("log.setLevel() called with invalid level: " + input);
          }
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          if (userLevel != null) {
            return userLevel;
          } else if (defaultLevel != null) {
            return defaultLevel;
          } else {
            return inheritedLevel;
          }
      };

      self.setLevel = function (level, persist) {
          userLevel = normalizeLevel(level);
          if (persist !== false) {  // defaults to true
              persistLevelIfPossible(userLevel);
          }

          // NOTE: in v2, this should call rebuild(), which updates children.
          return replaceLoggingMethods.call(self);
      };

      self.setDefaultLevel = function (level) {
          defaultLevel = normalizeLevel(level);
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.resetLevel = function () {
          userLevel = null;
          clearPersistedLevel();
          replaceLoggingMethods.call(self);
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      self.rebuild = function () {
          if (defaultLogger !== self) {
              inheritedLevel = normalizeLevel(defaultLogger.getLevel());
          }
          replaceLoggingMethods.call(self);

          if (defaultLogger === self) {
              for (var childName in _loggersByName) {
                _loggersByName[childName].rebuild();
              }
          }
      };

      // Initialize all the internal levels.
      inheritedLevel = normalizeLevel(
          defaultLogger ? defaultLogger.getLevel() : "WARN"
      );
      var initialLevel = getPersistedLevel();
      if (initialLevel != null) {
          userLevel = normalizeLevel(initialLevel);
      }
      replaceLoggingMethods.call(self);
    }

    /*
     *
     * Top-level API
     *
     */

    defaultLogger = new Logger();

    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
            throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
            logger = _loggersByName[name] = new Logger(
                name,
                defaultLogger.methodFactory
            );
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));


/***/ }),

/***/ "./matrix-js-sdk/node_modules/p-retry/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lc: () => (/* binding */ AbortError),
  Ay: () => (/* binding */ pRetry)
});

// UNUSED EXPORTS: makeRetriable

;// ./matrix-js-sdk/node_modules/is-network-error/index.js
const objectToString = Object.prototype.toString;

const isError = value => objectToString.call(value) === '[object Error]';

const errorMessages = new Set([
	'network error', // Chrome
	'Failed to fetch', // Chrome
	'NetworkError when attempting to fetch resource.', // Firefox
	'The Internet connection appears to be offline.', // Safari 16
	'Network request failed', // `cross-fetch`
	'fetch failed', // Undici (Node.js)
	'terminated', // Undici (Node.js)
	' A network error occurred.', // Bun (WebKit)
	'Network connection lost', // Cloudflare Workers (fetch)
]);

function isNetworkError(error) {
	const isValid = error
		&& isError(error)
		&& error.name === 'TypeError'
		&& typeof error.message === 'string';

	if (!isValid) {
		return false;
	}

	const {message, stack} = error;

	// Safari 17+ has generic message but no stack for network errors
	if (message === 'Load failed') {
		return stack === undefined
			// Sentry adds its own stack trace to the fetch error, so also check for that
			|| '__sentry_captured__' in error;
	}

	// Deno network errors start with specific text
	if (message.startsWith('error sending request for url')) {
		return true;
	}

	// Standard network error messages
	return errorMessages.has(message);
}

;// ./matrix-js-sdk/node_modules/p-retry/index.js


function validateRetries(retries) {
	if (typeof retries === 'number') {
		if (retries < 0) {
			throw new TypeError('Expected `retries` to be a non-negative number.');
		}

		if (Number.isNaN(retries)) {
			throw new TypeError('Expected `retries` to be a valid number or Infinity, got NaN.');
		}
	} else if (retries !== undefined) {
		throw new TypeError('Expected `retries` to be a number or Infinity.');
	}
}

function validateNumberOption(name, value, {min = 0, allowInfinity = false} = {}) {
	if (value === undefined) {
		return;
	}

	if (typeof value !== 'number' || Number.isNaN(value)) {
		throw new TypeError(`Expected \`${name}\` to be a number${allowInfinity ? ' or Infinity' : ''}.`);
	}

	if (!allowInfinity && !Number.isFinite(value)) {
		throw new TypeError(`Expected \`${name}\` to be a finite number.`);
	}

	if (value < min) {
		throw new TypeError(`Expected \`${name}\` to be \u2265 ${min}.`);
	}
}

class AbortError extends Error {
	constructor(message) {
		super();

		if (message instanceof Error) {
			this.originalError = message;
			({message} = message);
		} else {
			this.originalError = new Error(message);
			this.originalError.stack = this.stack;
		}

		this.name = 'AbortError';
		this.message = message;
	}
}

function calculateDelay(retriesConsumed, options) {
	const attempt = Math.max(1, retriesConsumed + 1);
	const random = options.randomize ? (Math.random() + 1) : 1;

	let timeout = Math.round(random * options.minTimeout * (options.factor ** (attempt - 1)));
	timeout = Math.min(timeout, options.maxTimeout);

	return timeout;
}

function calculateRemainingTime(start, max) {
	if (!Number.isFinite(max)) {
		return max;
	}

	return max - (performance.now() - start);
}

async function onAttemptFailure({error, attemptNumber, retriesConsumed, startTime, options}) {
	const normalizedError = error instanceof Error
		? error
		: new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`);

	if (normalizedError instanceof AbortError) {
		throw normalizedError.originalError;
	}

	const retriesLeft = Number.isFinite(options.retries)
		? Math.max(0, options.retries - retriesConsumed)
		: options.retries;

	const maxRetryTime = options.maxRetryTime ?? Number.POSITIVE_INFINITY;

	const context = Object.freeze({
		error: normalizedError,
		attemptNumber,
		retriesLeft,
		retriesConsumed,
	});

	await options.onFailedAttempt(context);

	if (calculateRemainingTime(startTime, maxRetryTime) <= 0) {
		throw normalizedError;
	}

	const consumeRetry = await options.shouldConsumeRetry(context);

	const remainingTime = calculateRemainingTime(startTime, maxRetryTime);

	if (remainingTime <= 0 || retriesLeft <= 0) {
		throw normalizedError;
	}

	if (normalizedError instanceof TypeError && !isNetworkError(normalizedError)) {
		if (consumeRetry) {
			throw normalizedError;
		}

		options.signal?.throwIfAborted();
		return false;
	}

	if (!await options.shouldRetry(context)) {
		throw normalizedError;
	}

	if (!consumeRetry) {
		options.signal?.throwIfAborted();
		return false;
	}

	const delayTime = calculateDelay(retriesConsumed, options);
	const finalDelay = Math.min(delayTime, remainingTime);

	if (finalDelay > 0) {
		await new Promise((resolve, reject) => {
			const onAbort = () => {
				clearTimeout(timeoutToken);
				options.signal?.removeEventListener('abort', onAbort);
				reject(options.signal.reason);
			};

			const timeoutToken = setTimeout(() => {
				options.signal?.removeEventListener('abort', onAbort);
				resolve();
			}, finalDelay);

			if (options.unref) {
				timeoutToken.unref?.();
			}

			options.signal?.addEventListener('abort', onAbort, {once: true});
		});
	}

	options.signal?.throwIfAborted();

	return true;
}

async function pRetry(input, options = {}) {
	options = {...options};

	validateRetries(options.retries);

	if (Object.hasOwn(options, 'forever')) {
		throw new Error('The `forever` option is no longer supported. For many use-cases, you can set `retries: Infinity` instead.');
	}

	options.retries ??= 10;
	options.factor ??= 2;
	options.minTimeout ??= 1000;
	options.maxTimeout ??= Number.POSITIVE_INFINITY;
	options.maxRetryTime ??= Number.POSITIVE_INFINITY;
	options.randomize ??= false;
	options.onFailedAttempt ??= () => {};
	options.shouldRetry ??= () => true;
	options.shouldConsumeRetry ??= () => true;

	// Validate numeric options and normalize edge cases
	validateNumberOption('factor', options.factor, {min: 0, allowInfinity: false});
	validateNumberOption('minTimeout', options.minTimeout, {min: 0, allowInfinity: false});
	validateNumberOption('maxTimeout', options.maxTimeout, {min: 0, allowInfinity: true});
	validateNumberOption('maxRetryTime', options.maxRetryTime, {min: 0, allowInfinity: true});

	// Treat non-positive factor as 1 to avoid zero backoff or negative behavior
	if (!(options.factor > 0)) {
		options.factor = 1;
	}

	options.signal?.throwIfAborted();

	let attemptNumber = 0;
	let retriesConsumed = 0;
	const startTime = performance.now();

	while (Number.isFinite(options.retries) ? retriesConsumed <= options.retries : true) {
		attemptNumber++;

		try {
			options.signal?.throwIfAborted();

			const result = await input(attemptNumber);

			options.signal?.throwIfAborted();

			return result;
		} catch (error) {
			if (await onAttemptFailure({
				error,
				attemptNumber,
				retriesConsumed,
				startTime,
				options,
			})) {
				retriesConsumed++;
			}
		}
	}

	// Should not reach here, but in case it does, throw an error
	throw new Error('Retry attempts exhausted without throwing an error.');
}

function makeRetriable(function_, options) {
	return function (...arguments_) {
		return pRetry(() => function_.apply(this, arguments_), options);
	};
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/unhomoglyph/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



var data = __webpack_require__("./matrix-js-sdk/node_modules/unhomoglyph/data.json");

function escapeRegexp(str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

var REPLACE_RE = RegExp(Object.keys(data).map(escapeRegexp).join('|'), 'g');

function replace_fn(match) {
  return data[match];
}

function unhomoglyph(str) {
  return str.replace(REPLACE_RE, replace_fn);
}

module.exports = unhomoglyph;


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__("./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__("./node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ })

}]);
//# sourceMappingURL=5685.js.map