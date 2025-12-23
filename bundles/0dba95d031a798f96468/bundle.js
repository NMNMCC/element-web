/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./matrix-js-sdk/src/@types/location.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J1: () => (/* binding */ M_ASSET),
/* harmony export */   M6: () => (/* binding */ M_LOCATION),
/* harmony export */   Yg: () => (/* binding */ LocationAssetType),
/* harmony export */   vo: () => (/* binding */ M_TIMESTAMP)
/* harmony export */ });
/* harmony import */ var _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./matrix-js-sdk/src/NamespacedValue.ts");
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Types for MSC3488 - m.location: Extending events with location data


let LocationAssetType = /*#__PURE__*/function (LocationAssetType) {
  LocationAssetType["Self"] = "m.self";
  LocationAssetType["Pin"] = "m.pin";
  return LocationAssetType;
}({});
const M_ASSET = new _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_0__/* .UnstableValue */ .qr("m.asset", "org.matrix.msc3488.asset");

/**
 * The event definition for an m.asset event (in content)
 */

const M_TIMESTAMP = new _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_0__/* .UnstableValue */ .qr("m.ts", "org.matrix.msc3488.ts");
/**
 * The event definition for an m.ts event (in content)
 */

const M_LOCATION = new _NamespacedValue_ts__WEBPACK_IMPORTED_MODULE_0__/* .UnstableValue */ .qr("m.location", "org.matrix.msc3488.location");

/* From the spec at:
 * https://github.com/matrix-org/matrix-doc/blob/matthew/location/proposals/3488-location.md
{
    "type": "m.room.message",
    "content": {
        "body": "Matthew was at geo:51.5008,0.1247;u=35 as of Sat Nov 13 18:50:58 2021",
        "msgtype": "m.location",
        "geo_uri": "geo:51.5008,0.1247;u=35",
        "m.location": {
            "uri": "geo:51.5008,0.1247;u=35",
            "description": "Matthew's whereabouts",
        },
        "m.asset": {
            "type": "m.self"
        },
        "m.text": "Matthew was at geo:51.5008,0.1247;u=35 as of Sat Nov 13 18:50:58 2021",
        "m.ts": 1636829458432,
    }
}
*/

/**
 * The content for an m.location event
 */

/**
 * Possible content for location events as sent over the wire
 */

/***/ }),

/***/ "./matrix-js-sdk/src/@types/read_receipts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ReceiptType),
/* harmony export */   S: () => (/* binding */ MAIN_ROOM_TIMELINE)
/* harmony export */ });
/*
Copyright 2022 Šimon Brandner <simon.bra.ag@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

let ReceiptType = /*#__PURE__*/function (ReceiptType) {
  ReceiptType["Read"] = "m.read";
  ReceiptType["FullyRead"] = "m.fully_read";
  ReceiptType["ReadPrivate"] = "m.read.private";
  return ReceiptType;
}({});
const MAIN_ROOM_TIMELINE = "main";

// We will only hold a synthetic receipt if we do not have a real receipt or the synthetic is newer.
// map: receipt type → user Id → receipt

/***/ }),

/***/ "./matrix-js-sdk/src/NamespacedValue.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M6: () => (/* binding */ ServerControlledNamespacedValue),
/* harmony export */   qr: () => (/* binding */ UnstableValue),
/* harmony export */   xu: () => (/* binding */ NamespacedValue)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);



/*
Copyright 2021 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Represents a simple Matrix namespaced value. This will assume that if a stable prefix
 * is provided that the stable prefix should be used when representing the identifier.
 */
class NamespacedValue {
  // Stable is optional, but one of the two parameters is required, hence the weird-looking types.
  // Goal is to to have developers explicitly say there is no stable value (if applicable).

  constructor(stable, unstable) {
    this.stable = stable;
    this.unstable = unstable;
    if (!this.unstable && !this.stable) {
      throw new Error("One of stable or unstable values must be supplied");
    }
  }
  get name() {
    if (this.stable) {
      return this.stable;
    }
    return this.unstable;
  }
  get altName() {
    if (!this.stable) {
      return null;
    }
    return this.unstable;
  }
  get names() {
    const names = [this.name];
    const altName = this.altName;
    if (altName) names.push(altName);
    return names;
  }
  matches(val) {
    return this.name === val || this.altName === val;
  }

  // this desperately wants https://github.com/microsoft/TypeScript/pull/26349 at the top level of the class
  // so we can instantiate `NamespacedValue<string, _, _>` as a default type for that namespace.
  findIn(obj) {
    let val = undefined;
    if (this.name) {
      val = obj === null || obj === void 0 ? void 0 : obj[this.name];
    }
    if (!val && this.altName) {
      val = obj === null || obj === void 0 ? void 0 : obj[this.altName];
    }
    return val;
  }
  includedIn(arr) {
    let included = false;
    if (this.name) {
      included = arr.includes(this.name);
    }
    if (!included && this.altName) {
      included = arr.includes(this.altName);
    }
    return included;
  }
}
class ServerControlledNamespacedValue extends NamespacedValue {
  constructor(...args) {
    super(...args);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "preferUnstable", false);
  }
  setPreferUnstable(preferUnstable) {
    this.preferUnstable = preferUnstable;
  }
  get name() {
    if (this.stable && !this.preferUnstable) {
      return this.stable;
    }
    return this.unstable;
  }
}

/**
 * Represents a namespaced value which prioritizes the unstable value over the stable
 * value.
 */
class UnstableValue extends NamespacedValue {
  // Note: Constructor difference is that `unstable` is *required*.
  constructor(stable, unstable) {
    super(stable, unstable);
    if (!this.unstable) {
      throw new Error("Unstable value must be supplied");
    }
  }
  get name() {
    return this.unstable;
  }
  get altName() {
    return this.stable;
  }
}

/***/ }),

/***/ "./matrix-js-sdk/src/logger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tl: () => (/* binding */ LogSpan),
/* harmony export */   k$: () => (/* binding */ DebugLogger),
/* harmony export */   vF: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./matrix-js-sdk/node_modules/loglevel/lib/loglevel.js");
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_2__);


/*
Copyright 2018 André Jaenisch
Copyright 2019-2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/** Backwards-compatibility hack to expose `log` to applications that might still be relying on it. */

/** Logger interface used within the js-sdk codebase */

/** The basic interface for a logger which doesn't support children */

// This is to demonstrate, that you can use any namespace you want.
// Namespaces allow you to turn on/off the logging for specific parts of the
// application.
// An idea would be to control this via an environment variable (on Node.js).
// See https://www.npmjs.com/package/debug to see how this could be implemented
// Part of #332 is introducing a logging library in the first place.
const DEFAULT_NAMESPACE = "matrix";

// because rageshakes in react-sdk hijack the console log, also at module load time,
// initializing the logger here races with the initialization of rageshakes.
// to avoid the issue, we override the methodFactory of loglevel that binds to the
// console methods at initialization time by a factory that looks up the console methods
// when logging so we always get the current value of console methods.
(loglevel__WEBPACK_IMPORTED_MODULE_2___default().methodFactory) = function (methodName, logLevel, loggerName) {
  return function (...args) {
    /* eslint-disable @typescript-eslint/no-invalid-this */
    if (this.prefix) {
      args.unshift(this.prefix);
    }
    /* eslint-enable @typescript-eslint/no-invalid-this */
    const supportedByConsole = methodName === "error" || methodName === "warn" || methodName === "trace" || methodName === "info" || methodName === "debug";
    /* eslint-disable no-console */
    if (supportedByConsole) {
      return console[methodName](...args);
    } else {
      return console.log(...args);
    }
    /* eslint-enable no-console */
  };
};

/**
 * Implementation of {@link Logger} based on `loglevel`.
 */

/**
 * Internal utility function: gets a {@link Logger} based on `loglevel`.
 *
 * Child loggers produced by {@link Logger.getChild} add the name of the child logger as a prefix on each log line.
 *
 * @param prefix Prefix to add to each logged line. If undefined, no prefix will be added.
 */
function getPrefixedLogger(prefix) {
  const loggerName = DEFAULT_NAMESPACE + (prefix === undefined ? "" : `-${prefix}`);
  const prefixLogger = loglevel__WEBPACK_IMPORTED_MODULE_2___default().getLogger(loggerName);
  if (prefixLogger.getChild === undefined) {
    // This is a new loglevel Logger which has not been turned into a PrefixedLogger yet.
    prefixLogger.prefix = prefix;
    prefixLogger.getChild = childPrefix => {
      // create the new child logger
      const childLogger = getPrefixedLogger((prefix !== null && prefix !== void 0 ? prefix : "") + childPrefix);
      // Assign the methodFactory from the parent logger.
      // This is useful if we add extensions to the parent logger that modifies
      // its methodFactory. (An example extension is: storing each log to a rageshake db)
      childLogger.methodFactory = prefixLogger.methodFactory;
      // Rebuild the child logger with the new methodFactory.
      childLogger.rebuild();
      return childLogger;
    };
    prefixLogger.setLevel((loglevel__WEBPACK_IMPORTED_MODULE_2___default().levels).DEBUG, false);
  }
  return prefixLogger;
}

/**
 * Drop-in replacement for `console` using {@link https://www.npmjs.com/package/loglevel|loglevel}.
 * Can be tailored down to specific use cases if needed.
 *
 * @deprecated avoid the use of this unless you are the constructor of `MatrixClient`: you should be using the logger
 *    associated with `MatrixClient`.
 */
const logger = getPrefixedLogger();

/**
 * A "span" for grouping related log lines together.
 *
 * The current implementation just adds the name at the start of each log line.
 *
 * This offers a lighter-weight alternative to 'child' loggers returned by {@link Logger#getChild}. In particular,
 * it's not possible to apply individual filters to the LogSpan such as setting the verbosity level. On the other hand,
 * no reference to the LogSpan is retained in the logging framework, so it is safe to make lots of them over the course
 * of an application's life and just drop references to them when the job is done.
 */
class LogSpan {
  constructor(parent, name) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "name", void 0);
    this.parent = parent;
    this.name = name + ":";
  }
  trace(...msg) {
    this.parent.trace(this.name, ...msg);
  }
  debug(...msg) {
    this.parent.debug(this.name, ...msg);
  }
  info(...msg) {
    this.parent.info(this.name, ...msg);
  }
  warn(...msg) {
    this.parent.warn(this.name, ...msg);
  }
  error(...msg) {
    this.parent.error(this.name, ...msg);
  }
}

/**
 * A simplification of the `Debugger` type exposed by the `debug` library. We reimplement the bits we need here
 * to avoid a dependency on `debug`.
 */

/**
 * A `Logger` instance, suitable for use in {@link ICreateClientOpts.logger}, which will write to the `debug` library.
 *
 * @example
 * ```js
 *     import debug from "debug";
 *
 *     const client = createClient({
 *         baseUrl: homeserverUrl,
 *         userId: userId,
 *         accessToken: "akjgkrgjs",
 *         deviceId: "xzcvb",
 *         logger: new DebugLogger(debug(`matrix-js-sdk:${userId}`)),
 *     });
 * ```
 */
class DebugLogger {
  constructor(debugInstance) {
    this.debugInstance = debugInstance;
  }
  trace(...msg) {
    this.debugWithPrefix("[TRACE]", ...msg);
  }
  debug(...msg) {
    this.debugWithPrefix("[DEBUG]", ...msg);
  }
  info(...msg) {
    this.debugWithPrefix("[INFO]", ...msg);
  }
  warn(...msg) {
    this.debugWithPrefix("[WARN]", ...msg);
  }
  error(...msg) {
    this.debugWithPrefix("[ERROR]", ...msg);
  }
  getChild(namespace) {
    return new DebugLogger(this.debugInstance.extend(namespace));
  }
  debugWithPrefix(prefix, ...msg) {
    let formatter;

    // Convert the first argument to a string, so that we can safely add a prefix. This is much the same logic that
    // `debug()` uses.
    if (msg.length === 0) {
      formatter = "";
    } else if (msg[0] instanceof Error) {
      const err = msg.shift();
      formatter = err.stack || err.message;
    } else if (typeof msg[0] == "string") {
      formatter = msg.shift();
    } else {
      formatter = "%O";
    }
    this.debugInstance(prefix + " " + formatter, ...msg);
  }
}

/***/ }),

/***/ "./matrix-js-sdk/src/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $9: () => (/* binding */ nextString),
/* harmony export */   A4: () => (/* binding */ deepCopy),
/* harmony export */   Ab: () => (/* binding */ replaceParam),
/* harmony export */   Bi: () => (/* binding */ recursivelyAssign),
/* harmony export */   C6: () => (/* binding */ safeSet),
/* harmony export */   CC: () => (/* binding */ simpleRetryOperation),
/* harmony export */   Et: () => (/* binding */ isNumber),
/* harmony export */   Fq: () => (/* binding */ sortEventsByLatestContentTimestamp),
/* harmony export */   G$: () => (/* binding */ logDurationSync),
/* harmony export */   Gp: () => (/* binding */ removeHiddenChars),
/* harmony export */   HF: () => (/* binding */ recursiveMapToObject),
/* harmony export */   Mf: () => (/* binding */ DEFAULT_ALPHABET),
/* harmony export */   NQ: () => (/* binding */ logDuration),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   Ny: () => (/* binding */ decodeParams),
/* harmony export */   Nz: () => (/* binding */ removeElement),
/* harmony export */   O5: () => (/* binding */ noUnsafeEventProps),
/* harmony export */   RR: () => (/* binding */ encodeUri),
/* harmony export */   S8: () => (/* binding */ normalize),
/* harmony export */   UB: () => (/* binding */ checkObjectHasKeys),
/* harmony export */   YY: () => (/* binding */ unsafeProp),
/* harmony export */   _4: () => (/* binding */ stringToBase),
/* harmony export */   aw: () => (/* binding */ lexicographicCompare),
/* harmony export */   c7: () => (/* binding */ baseToString),
/* harmony export */   d7: () => (/* binding */ removeDirectionOverrideChars),
/* harmony export */   d8: () => (/* binding */ promiseMapSeries),
/* harmony export */   dn: () => (/* binding */ globToRegexp),
/* harmony export */   hX: () => (/* binding */ isNullOrUndefined),
/* harmony export */   hc: () => (/* binding */ ensureNoTrailingSlash),
/* harmony export */   hl: () => (/* binding */ deepSortedObjectEntries),
/* harmony export */   hm: () => (/* binding */ encodeParams),
/* harmony export */   j0: () => (/* binding */ promiseTry),
/* harmony export */   kG: () => (/* binding */ MapWithDefault),
/* harmony export */   kg: () => (/* binding */ mapsEqual),
/* harmony export */   ky: () => (/* binding */ deepCompare),
/* harmony export */   ll: () => (/* binding */ isSupportedReceiptType),
/* harmony export */   sy: () => (/* binding */ averageBetweenStrings),
/* harmony export */   tf: () => (/* binding */ alphabetPad),
/* harmony export */   yD: () => (/* binding */ internaliseString),
/* harmony export */   yy: () => (/* binding */ sleep),
/* harmony export */   zR: () => (/* binding */ prevString)
/* harmony export */ });
/* unused harmony exports isFunction, immediate, chunkPromises */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./matrix-js-sdk/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.delete-all.js");
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_emplace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.emplace.js");
/* harmony import */ var core_js_modules_esnext_map_emplace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_emplace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.every.js");
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.filter.js");
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.find.js");
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.find-key.js");
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.includes.js");
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.key-of.js");
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.map-keys.js");
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.map-values.js");
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.merge.js");
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.reduce.js");
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.some.js");
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.map.update.js");
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var unhomoglyph__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./matrix-js-sdk/node_modules/unhomoglyph/index.js");
/* harmony import */ var unhomoglyph__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(unhomoglyph__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var p_retry__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./matrix-js-sdk/node_modules/p-retry/index.js");
/* harmony import */ var _types_location_ts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./matrix-js-sdk/src/@types/location.ts");
/* harmony import */ var _types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./matrix-js-sdk/src/@types/read_receipts.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
























/*
Copyright 2015, 2016, 2019, 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * This is an internal module.
 */





const interns = new Map();

/**
 * Internalises a string, reusing a known pointer or storing the pointer
 * if needed for future strings.
 * @param str - The string to internalise.
 * @returns The internalised string.
 */
function internaliseString(str) {
  // Unwrap strings before entering the map, if we somehow got a wrapped
  // string as our input. This should only happen from tests.
  if (str instanceof String) {
    str = str.toString();
  }

  // Check the map to see if we can store the value
  if (!interns.has(str)) {
    interns.set(str, str);
  }

  // Return any cached string reference
  return interns.get(str);
}

/**
 * Encode a dictionary of query parameters.
 * Omits any undefined/null values.
 * @param params - A dict of key/values to encode e.g.
 * `{"foo": "bar", "baz": "taz"}`
 * @returns The encoded string e.g. foo=bar&baz=taz
 */
function encodeParams(params, urlSearchParams) {
  const searchParams = urlSearchParams !== null && urlSearchParams !== void 0 ? urlSearchParams : new URLSearchParams();
  for (const [key, val] of Object.entries(params)) {
    if (val !== undefined && val !== null) {
      if (Array.isArray(val)) {
        val.forEach(v => {
          searchParams.append(key, String(v));
        });
      } else {
        searchParams.append(key, String(val));
      }
    }
  }
  return searchParams;
}
/**
 * Replace a stable parameter with the unstable naming for params
 */
function replaceParam(stable, unstable, dict) {
  const result = _objectSpread(_objectSpread({}, dict), {}, {
    [unstable]: dict[stable]
  });
  delete result[stable];
  return result;
}

/**
 * Decode a query string in `application/x-www-form-urlencoded` format.
 * @param query - A query string to decode e.g.
 * foo=bar&via=server1&server2
 * @returns The decoded object, if any keys occurred multiple times
 * then the value will be an array of strings, else it will be an array.
 * This behaviour matches Node's qs.parse but is built on URLSearchParams
 * for native web compatibility
 */
function decodeParams(query) {
  const o = {};
  const params = new URLSearchParams(query);
  for (const key of params.keys()) {
    const val = params.getAll(key);
    o[key] = val.length === 1 ? val[0] : val;
  }
  return o;
}

/**
 * Encodes a URI according to a set of template variables. Variables will be
 * passed through encodeURIComponent.
 * @param pathTemplate - The path with template variables e.g. '/foo/$bar'.
 * @param variables - The key/value pairs to replace the template
 * variables with. E.g. `{ "$bar": "baz" }`.
 * @returns The result of replacing all template variables e.g. '/foo/baz'.
 */
function encodeUri(pathTemplate, variables) {
  for (const key in variables) {
    if (!variables.hasOwnProperty(key)) {
      continue;
    }
    const value = variables[key];
    if (value === undefined || value === null) {
      continue;
    }
    pathTemplate = pathTemplate.replace(key, encodeURIComponent(value));
  }
  return pathTemplate;
}

/**
 * The removeElement() method removes the first element in the array that
 * satisfies (returns true) the provided testing function.
 * @param array - The array.
 * @param fn - Function to execute on each value in the array, with the
 * function signature `fn(element, index, array)`. Return true to
 * remove this element and break.
 * @param reverse - True to search in reverse order.
 * @returns True if an element was removed.
 */
function removeElement(array, fn, reverse) {
  let i;
  if (reverse) {
    for (i = array.length - 1; i >= 0; i--) {
      if (fn(array[i], i, array)) {
        array.splice(i, 1);
        return true;
      }
    }
  } else {
    for (i = 0; i < array.length; i++) {
      if (fn(array[i], i, array)) {
        array.splice(i, 1);
        return true;
      }
    }
  }
  return false;
}

/**
 * Checks if the given thing is a function.
 * @param value - The thing to check.
 * @returns True if it is a function.
 */
function isFunction(value) {
  return Object.prototype.toString.call(value) === "[object Function]";
}

/**
 * Checks that the given object has the specified keys.
 * @param obj - The object to check.
 * @param keys - The list of keys that 'obj' must have.
 * @throws If the object is missing keys.
 */
// note using 'keys' here would shadow the 'keys' function defined above
function checkObjectHasKeys(obj, keys) {
  for (const key of keys) {
    if (!obj.hasOwnProperty(key)) {
      throw new Error("Missing required key: " + key);
    }
  }
}

/**
 * Deep copy the given object. The object MUST NOT have circular references and
 * MUST NOT have functions.
 * @param obj - The object to deep copy.
 * @returns A copy of the object without any references to the original.
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Compare two objects for equality. The objects MUST NOT have circular references.
 *
 * @param x - The first object to compare.
 * @param y - The second object to compare.
 *
 * @returns true if the two objects are equal
 */
function deepCompare(x, y) {
  // Inspired by
  // http://stackoverflow.com/questions/1068834/object-comparison-in-javascript#1144249

  // Compare primitives and functions.
  // Also check if both arguments link to the same object.
  if (x === y) {
    return true;
  }
  if (typeof x !== typeof y) {
    return false;
  }

  // special-case NaN (since NaN !== NaN)
  if (typeof x === "number" && isNaN(x) && isNaN(y)) {
    return true;
  }

  // special-case null (since typeof null == 'object', but null.constructor
  // throws)
  if (x === null || y === null) {
    return x === y;
  }

  // everything else is either an unequal primitive, or an object
  if (!(x instanceof Object)) {
    return false;
  }

  // check they are the same type of object
  if (x.constructor !== y.constructor || x.prototype !== y.prototype) {
    return false;
  }

  // special-casing for some special types of object
  if (x instanceof RegExp || x instanceof Date) {
    return x.toString() === y.toString();
  }

  // the object algorithm works for Array, but it's sub-optimal.
  if (Array.isArray(x)) {
    if (x.length !== y.length) {
      return false;
    }
    for (let i = 0; i < x.length; i++) {
      if (!deepCompare(x[i], y[i])) {
        return false;
      }
    }
  } else {
    // check that all of y's direct keys are in x
    for (const p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      }
    }

    // finally, compare each of x's keys with y
    for (const p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p) || !deepCompare(x[p], y[p])) {
        return false;
      }
    }
  }
  return true;
}

// Dev note: This returns an array of tuples, but jsdoc doesn't like that. https://github.com/jsdoc/jsdoc/issues/1703
/**
 * Creates an array of object properties/values (entries) then
 * sorts the result by key, recursively. The input object must
 * ensure it does not have loops. If the input is not an object
 * then it will be returned as-is.
 * @param obj - The object to get entries of
 * @returns The entries, sorted by key.
 */
function deepSortedObjectEntries(obj) {
  if (typeof obj !== "object") return obj;

  // Apparently these are object types...
  if (obj === null || obj === undefined || Array.isArray(obj)) return obj;
  const pairs = [];
  for (const [k, v] of Object.entries(obj)) {
    pairs.push([k, deepSortedObjectEntries(v)]);
  }

  // lexicographicCompare is faster than localeCompare, so let's use that.
  pairs.sort((a, b) => lexicographicCompare(a[0], b[0]));
  return pairs;
}

/**
 * Returns whether the given value is a finite number without type-coercion
 *
 * @param value - the value to test
 * @returns whether or not value is a finite number without type-coercion
 */
function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

/**
 * Removes zero width chars, diacritics and whitespace from the string
 * Also applies an unhomoglyph on the string, to prevent similar looking chars
 * @param str - the string to remove hidden characters from
 * @returns a string with the hidden characters removed
 */
function removeHiddenChars(str) {
  if (typeof str === "string") {
    return unhomoglyph__WEBPACK_IMPORTED_MODULE_25___default()(str.normalize("NFD").replace(removeHiddenCharsRegex, ""));
  }
  return "";
}

/**
 * Removes the direction override characters from a string
 * @returns string with chars removed
 */
function removeDirectionOverrideChars(str) {
  if (typeof str === "string") {
    return str.replace(/[\u202d-\u202e]/g, "");
  }
  return "";
}
function normalize(str) {
  // Note: we have to match the filter with the removeHiddenChars() because the
  // function strips spaces and other characters (M becomes RN for example, in lowercase).
  return removeHiddenChars(str.toLowerCase())
  // Strip all punctuation
  .replace(/[\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~\u2000-\u206f\u2e00-\u2e7f]/g, "")
  // We also doubly convert to lowercase to work around oddities of the library.
  .toLowerCase();
}

// Regex matching bunch of unicode control characters and otherwise misleading/invisible characters.
// Includes:
// various width spaces U+2000 - U+200D
// LTR and RTL marks U+200E and U+200F
// LTR/RTL and other directional formatting marks U+202A - U+202F
// Arabic Letter RTL mark U+061C
// Combining characters U+0300 - U+036F
// Zero width no-break space (BOM) U+FEFF
// Blank/invisible characters (U2800, U2062-U2063)
// eslint-disable-next-line no-misleading-character-class
const removeHiddenCharsRegex = /[\u2000-\u200F\u202A-\u202F\u0300-\u036F\uFEFF\u061C\u2800\u2062-\u2063\s]/g;
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Converts Matrix glob-style string to a regular expression
 * https://spec.matrix.org/v1.7/appendices/#glob-style-matching
 * @param glob - Matrix glob-style string
 * @returns regular expression
 */
function globToRegexp(glob) {
  return escapeRegExp(glob).replace(/\\\*/g, ".*").replace(/\?/g, ".");
}
function ensureNoTrailingSlash(url) {
  if (url !== null && url !== void 0 && url.endsWith("/")) {
    return url.slice(0, -1);
  } else {
    return url;
  }
}

/**
 * Returns a promise which resolves with a given value after the given number of ms
 */
function sleep(ms, value) {
  return new Promise(resolve => {
    setTimeout(resolve, ms, value);
  });
}

/**
 * Utility to log the duration of a promise.
 *
 * @param logger - The logger to log to.
 * @param name - The name of the operation.
 * @param block - The block to execute.
 */
async function logDuration(logger, name, block) {
  const start = Date.now();
  try {
    return await block();
  } finally {
    const end = Date.now();
    logger.debug(`[Perf]: ${name} took ${end - start}ms`);
  }
}

/**
 * Utility to log the duration of a synchronous block.
 *
 * @param logger - The logger to log to.
 * @param name - The name of the operation.
 * @param block - The block to execute.
 */
function logDurationSync(logger, name, block) {
  const start = Date.now();
  try {
    return block();
  } finally {
    const end = Date.now();
    logger.debug(`[Perf]: ${name} took ${end - start}ms`);
  }
}

/**
 * Promise/async version of {@link setImmediate}.
 *
 * Implementation is based on `setTimeout` for wider compatibility.
 * @deprecated Use {@link sleep} instead.
 */
function immediate() {
  return new Promise(resolve => setTimeout(resolve));
}
function isNullOrUndefined(val) {
  return val === null || val === undefined;
}
async function promiseMapSeries(promises, fn // if async we don't care about the type as we only await resolution
) {
  for (const o of promises) {
    await fn(await o);
  }
}
function promiseTry(fn) {
  return Promise.resolve(fn());
}

// Creates and awaits all promises, running no more than `chunkSize` at the same time
async function chunkPromises(fns, chunkSize) {
  const results = [];
  for (let i = 0; i < fns.length; i += chunkSize) {
    results.push(...(await Promise.all(fns.slice(i, i + chunkSize).map(fn => fn()))));
  }
  return results;
}

/**
 * Retries the function until it succeeds or is interrupted. The given function must return
 * a promise which throws/rejects on error, otherwise the retry will assume the request
 * succeeded. The promise chain returned will contain the successful promise. The given function
 * should always return a new promise.
 * @param promiseFn - The function to call to get a fresh promise instance. Takes an
 * attempt count as an argument, for logging/debugging purposes.
 * @param shouldRetry - Optional function which is called with the error the latest rejection from promiseFn,
 * retrying will ba aborted if this return false.
 * @returns The promise for the retried operation.
 */
function simpleRetryOperation(promiseFn, shouldRetry) {
  return (0,p_retry__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay)(attempt => {
    return promiseFn(attempt);
  }, {
    retries: Infinity,
    shouldRetry: shouldRetry ? ({
      error
    }) => shouldRetry(error) : undefined,
    factor: 2,
    minTimeout: 3000,
    // ms
    maxTimeout: 15000 // ms
  });
}

// String averaging inspired by https://stackoverflow.com/a/2510816
// Dev note: We make the alphabet a string because it's easier to write syntactically
// than arrays. Thankfully, strings implement the useful parts of the Array interface
// anyhow.

/**
 * The default alphabet used by string averaging in this SDK. This matches
 * all usefully printable ASCII characters (0x20-0x7E, inclusive).
 */
const DEFAULT_ALPHABET = (() => {
  let str = "";
  for (let c = 0x20; c <= 0x7e; c++) {
    str += String.fromCharCode(c);
  }
  return str;
})();

/**
 * Pads a string using the given alphabet as a base. The returned string will be
 * padded at the end with the first character in the alphabet.
 *
 * This is intended for use with string averaging.
 * @param s - The string to pad.
 * @param n - The length to pad to.
 * @param alphabet - The alphabet to use as a single string.
 * @returns The padded string.
 */
function alphabetPad(s, n, alphabet = DEFAULT_ALPHABET) {
  return s.padEnd(n, alphabet[0]);
}

/**
 * Converts a baseN number to a string, where N is the alphabet's length.
 *
 * This is intended for use with string averaging.
 * @param n - The baseN number.
 * @param alphabet - The alphabet to use as a single string.
 * @returns The baseN number encoded as a string from the alphabet.
 */
function baseToString(n, alphabet = DEFAULT_ALPHABET) {
  // Developer note: the stringToBase() function offsets the character set by 1 so that repeated
  // characters (ie: "aaaaaa" in a..z) don't come out as zero. We have to reverse this here as
  // otherwise we'll be wrong in our conversion. Undoing a +1 before an exponent isn't very fun
  // though, so we rely on a lengthy amount of `x - 1` and integer division rules to reach a
  // sane state. This also means we have to do rollover detection: see below.

  const len = BigInt(alphabet.length);
  if (n <= len) {
    var _alphabet;
    return (_alphabet = alphabet[Number(n) - 1]) !== null && _alphabet !== void 0 ? _alphabet : "";
  }
  let d = n / len;
  let r = Number(n % len) - 1;

  // Rollover detection: if the remainder is negative, it means that the string needs
  // to roll over by 1 character downwards (ie: in a..z, the previous to "aaa" would be
  // "zz").
  if (r < 0) {
    d -= BigInt(Math.abs(r)); // abs() is just to be clear what we're doing. Could also `+= r`.
    r = Number(len) - 1;
  }
  return baseToString(d, alphabet) + alphabet[r];
}

/**
 * Converts a string to a baseN number, where N is the alphabet's length.
 *
 * This is intended for use with string averaging.
 * @param s - The string to convert to a number.
 * @param alphabet - The alphabet to use as a single string.
 * @returns The baseN number.
 */
function stringToBase(s, alphabet = DEFAULT_ALPHABET) {
  const len = BigInt(alphabet.length);

  // In our conversion to baseN we do a couple performance optimizations to avoid using
  // excess CPU and such. To create baseN numbers, the input string needs to be reversed
  // so the exponents stack up appropriately, as the last character in the unreversed
  // string has less impact than the first character (in "abc" the A is a lot more important
  // for lexicographic sorts). We also do a trick with the character codes to optimize the
  // alphabet lookup, avoiding an index scan of `alphabet.indexOf(reversedStr[i])` - we know
  // that the alphabet and (theoretically) the input string are constrained on character sets
  // and thus can do simple subtraction to end up with the same result.

  // Developer caution: we carefully cast to BigInt here to avoid losing precision. We cannot
  // rely on Math.pow() (for example) to be capable of handling our insane numbers.

  let result = BigInt(0);
  for (let i = s.length - 1, j = BigInt(0); i >= 0; i--, j++) {
    const charIndex = s.charCodeAt(i) - alphabet.charCodeAt(0);

    // We add 1 to the char index to offset the whole numbering scheme. We unpack this in
    // the baseToString() function.
    result += BigInt(1 + charIndex) * len ** j;
  }
  return result;
}

/**
 * Averages two strings, returning the midpoint between them. This is accomplished by
 * converting both to baseN numbers (where N is the alphabet's length) then averaging
 * those before re-encoding as a string.
 * @param a - The first string.
 * @param b - The second string.
 * @param alphabet - The alphabet to use as a single string.
 * @returns The midpoint between the strings, as a string.
 */
function averageBetweenStrings(a, b, alphabet = DEFAULT_ALPHABET) {
  const padN = Math.max(a.length, b.length);
  const baseA = stringToBase(alphabetPad(a, padN, alphabet), alphabet);
  const baseB = stringToBase(alphabetPad(b, padN, alphabet), alphabet);
  const avg = (baseA + baseB) / BigInt(2);

  // Detect integer division conflicts. This happens when two numbers are divided too close so
  // we lose a .5 precision. We need to add a padding character in these cases.
  if (avg === baseA || avg == baseB) {
    return baseToString(avg, alphabet) + alphabet[0];
  }
  return baseToString(avg, alphabet);
}

/**
 * Finds the next string using the alphabet provided. This is done by converting the
 * string to a baseN number, where N is the alphabet's length, then adding 1 before
 * converting back to a string.
 * @param s - The string to start at.
 * @param alphabet - The alphabet to use as a single string.
 * @returns The string which follows the input string.
 */
function nextString(s, alphabet = DEFAULT_ALPHABET) {
  return baseToString(stringToBase(s, alphabet) + BigInt(1), alphabet);
}

/**
 * Finds the previous string using the alphabet provided. This is done by converting the
 * string to a baseN number, where N is the alphabet's length, then subtracting 1 before
 * converting back to a string.
 * @param s - The string to start at.
 * @param alphabet - The alphabet to use as a single string.
 * @returns The string which precedes the input string.
 */
function prevString(s, alphabet = DEFAULT_ALPHABET) {
  return baseToString(stringToBase(s, alphabet) - BigInt(1), alphabet);
}

/**
 * Compares strings lexicographically as a sort-safe function.
 * @param a - The first (reference) string.
 * @param b - The second (compare) string.
 * @returns Negative if the reference string is before the compare string;
 * positive if the reference string is after; and zero if equal.
 */
function lexicographicCompare(a, b) {
  // Dev note: this exists because I'm sad that you can use math operators on strings, so I've
  // hidden the operation in this function.
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * This function is similar to Object.assign() but it assigns recursively and
 * allows you to ignore nullish values from the source
 *
 * @returns the target object
 */
function recursivelyAssign(target, source, ignoreNullish = false) {
  for (const [sourceKey, sourceValue] of Object.entries(source)) {
    if (target[sourceKey] instanceof Object && sourceValue) {
      recursivelyAssign(target[sourceKey], sourceValue);
      continue;
    }
    if (sourceValue !== null && sourceValue !== undefined || !ignoreNullish) {
      safeSet(target, sourceKey, sourceValue);
      continue;
    }
  }
  return target;
}
function getContentTimestampWithFallback(event) {
  var _M_TIMESTAMP$findIn;
  return (_M_TIMESTAMP$findIn = _types_location_ts__WEBPACK_IMPORTED_MODULE_27__/* .M_TIMESTAMP */ .vo.findIn(event.getContent())) !== null && _M_TIMESTAMP$findIn !== void 0 ? _M_TIMESTAMP$findIn : -1;
}

/**
 * Sort events by their content m.ts property
 * Latest timestamp first
 */
function sortEventsByLatestContentTimestamp(left, right) {
  return getContentTimestampWithFallback(right) - getContentTimestampWithFallback(left);
}
function isSupportedReceiptType(receiptType) {
  return [_types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_28__/* .ReceiptType */ .L.Read, _types_read_receipts_ts__WEBPACK_IMPORTED_MODULE_28__/* .ReceiptType */ .L.ReadPrivate].includes(receiptType);
}

/**
 * Determines whether two maps are equal.
 * @param eq - The equivalence relation to compare values by. Defaults to strict equality.
 */
function mapsEqual(x, y, eq = (v1, v2) => v1 === v2) {
  if (x.size !== y.size) return false;
  for (const [k, v1] of x) {
    const v2 = y.get(k);
    if (v2 === undefined || !eq(v1, v2)) return false;
  }
  return true;
}
function processMapToObjectValue(value) {
  if (value instanceof Map) {
    // Value is a Map. Recursively map it to an object.
    return recursiveMapToObject(value);
  } else if (Array.isArray(value)) {
    // Value is an Array. Recursively map the value (e.g. to cover Array of Arrays).
    return value.map(v => processMapToObjectValue(v));
  } else {
    return value;
  }
}

/**
 * Recursively converts Maps to plain objects.
 * Also supports sub-lists of Maps.
 */
function recursiveMapToObject(map) {
  const targetMap = new Map();
  for (const [key, value] of map) {
    targetMap.set(key, processMapToObjectValue(value));
  }
  return Object.fromEntries(targetMap.entries());
}
function unsafeProp(prop) {
  return prop === "__proto__" || prop === "prototype" || prop === "constructor";
}
function safeSet(obj, prop, value) {
  if (unsafeProp(prop)) {
    throw new Error("Trying to modify prototype or constructor");
  }
  obj[prop] = value;
}
function noUnsafeEventProps(event) {
  return !(unsafeProp(event.room_id) || unsafeProp(event.sender) || unsafeProp(event.event_id));
}
class MapWithDefault extends Map {
  constructor(createDefault) {
    super();
    this.createDefault = createDefault;
  }

  /**
   * Returns the value if the key already exists.
   * If not, it creates a new value under that key using the ctor callback and returns it.
   */
  getOrCreate(key) {
    if (!this.has(key)) {
      this.set(key, this.createDefault());
    }
    return this.get(key);
  }
}

/***/ }),

/***/ "./node_modules/@formatjs/intl-segmenter/should-polyfill.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.Z = shouldPolyfill;
function shouldPolyfill() {
    return !Intl.Segmenter;
}


/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__("./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-map.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var has = (__webpack_require__("./node_modules/core-js/internals/map-helpers.js").has);

// Perform ? RequireInternalSlot(M, [[MapData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPossiblePrototype = __webpack_require__("./node_modules/core-js/internals/is-possible-prototype.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-set.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var has = (__webpack_require__("./node_modules/core-js/internals/set-helpers.js").has);

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-weak-map.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var has = (__webpack_require__("./node_modules/core-js/internals/weak-map-helpers.js").has);

// Perform ? RequireInternalSlot(M, [[WeakMapData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-weak-set.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var has = (__webpack_require__("./node_modules/core-js/internals/weak-set-helpers.js").has);

// Perform ? RequireInternalSlot(M, [[WeakSetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__("./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");

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

/***/ "./node_modules/core-js/internals/array-set-length.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__("./node_modules/core-js/internals/is-array.js");

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

/***/ "./node_modules/core-js/internals/classof-raw.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


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

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__("./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");

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

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
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

/***/ "./node_modules/core-js/internals/create-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var makeBuiltIn = __webpack_require__("./node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__("./node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__("./node_modules/core-js/internals/define-global-property.js");

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

/***/ "./node_modules/core-js/internals/define-global-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
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

/***/ "./node_modules/core-js/internals/environment-user-agent.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "./node_modules/core-js/internals/environment-v8-version.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__("./node_modules/core-js/internals/environment-user-agent.js");

var process = globalThis.process;
var Deno = globalThis.Deno;
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

/***/ "./node_modules/core-js/internals/error-stack-clear.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable, sonarjs/slow-regex -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "./node_modules/core-js/internals/error-stack-install.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js");
var clearErrorStack = __webpack_require__("./node_modules/core-js/internals/error-stack-clear.js");
var ERROR_STACK_INSTALLABLE = __webpack_require__("./node_modules/core-js/internals/error-stack-installable.js");

// non-standard V8
// eslint-disable-next-line es/no-nonstandard-error-properties -- safe
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/error-stack-installable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var getOwnPropertyDescriptor = (__webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__("./node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__("./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__("./node_modules/core-js/internals/is-forced.js");

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
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
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

/***/ "./node_modules/core-js/internals/fails.js":
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

/***/ "./node_modules/core-js/internals/function-apply.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__("./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__("./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__("./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");

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

/***/ "./node_modules/core-js/internals/function-uncurry-this-clause.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classofRaw = __webpack_require__("./node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__("./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-direct.js":
/***/ ((module) => {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__("./node_modules/core-js/internals/get-method.js");
var isNullOrUndefined = __webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js");
var Iterators = __webpack_require__("./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__("./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__("./node_modules/core-js/internals/get-iterator-method.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-set-record.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");
var getIteratorDirect = __webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js");

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global-this.js":
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

/***/ "./node_modules/core-js/internals/has-own-property.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__("./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__("./node_modules/core-js/internals/classof-raw.js");

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

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js");

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

/***/ "./node_modules/core-js/internals/inspect-source.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__("./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/install-error-cause.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js");

// `InstallErrorCause` abstract operation
// https://tc39.es/ecma262/#sec-installerrorcause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("./node_modules/core-js/internals/weak-map-basic-detection.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__("./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__("./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
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

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__("./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
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

/***/ "./node_modules/core-js/internals/is-forced.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");

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

/***/ "./node_modules/core-js/internals/is-iterable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var isNullOrUndefined = __webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__("./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var $Object = Object;

module.exports = function (it) {
  if (isNullOrUndefined(it)) return false;
  var O = $Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || hasOwn(Iterators, classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-possible-prototype.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/***/ ((module) => {

"use strict";

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__("./node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate-simple.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");

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

/***/ "./node_modules/core-js/internals/iterate.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__("./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__("./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__("./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__("./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__("./node_modules/core-js/internals/iterator-close.js");

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
    if (iterator) iteratorClose(iterator, 'normal');
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

/***/ "./node_modules/core-js/internals/iterator-close.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__("./node_modules/core-js/internals/get-method.js");

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

/***/ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__("./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__("./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__("./node_modules/core-js/internals/is-pure.js");

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

/***/ "./node_modules/core-js/internals/iterators.js":
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__("./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__("./node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__("./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__("./node_modules/core-js/internals/internal-state.js");

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

/***/ "./node_modules/core-js/internals/map-helpers.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

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

/***/ "./node_modules/core-js/internals/map-iterate.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");

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

/***/ "./node_modules/core-js/internals/math-trunc.js":
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

/***/ "./node_modules/core-js/internals/normalize-string-argument.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toString = __webpack_require__("./node_modules/core-js/internals/to-string.js");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__("./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__("./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__("./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__("./node_modules/core-js/internals/shared-key.js");

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
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
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

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("./node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__("./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__("./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__("./node_modules/core-js/internals/object-keys.js");

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

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__("./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__("./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__("./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/internals/ie8-dom-define.js");

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

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__("./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__("./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("./node_modules/core-js/internals/correct-prototype-getter.js");

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

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__("./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__("./node_modules/core-js/internals/hidden-keys.js");

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

/***/ "./node_modules/core-js/internals/object-keys.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__("./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
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

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this-accessor.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var requireObjectCoercible = __webpack_require__("./node_modules/core-js/internals/require-object-coercible.js");
var aPossiblePrototype = __webpack_require__("./node_modules/core-js/internals/a-possible-prototype.js");

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

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");

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

/***/ "./node_modules/core-js/internals/own-keys.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/parse-json-string.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");

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

/***/ "./node_modules/core-js/internals/proxy-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__("./node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value-zero.js":
/***/ ((module) => {

"use strict";

// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x !== x && y !== y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-clone.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-difference.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");
var clone = __webpack_require__("./node_modules/core-js/internals/set-clone.js");
var size = __webpack_require__("./node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");
var iterateSet = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(result, e)) remove(result, e);
  });
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-helpers.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-intersection.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");
var size = __webpack_require__("./node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");
var iterateSet = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-is-disjoint-from.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var has = (__webpack_require__("./node_modules/core-js/internals/set-helpers.js").has);
var size = __webpack_require__("./node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");
var iterateSet = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");
var iteratorClose = __webpack_require__("./node_modules/core-js/internals/iterator-close.js");

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-is-subset-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var size = __webpack_require__("./node_modules/core-js/internals/set-size.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-is-superset-of.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var has = (__webpack_require__("./node_modules/core-js/internals/set-helpers.js").has);
var size = __webpack_require__("./node_modules/core-js/internals/set-size.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");
var iteratorClose = __webpack_require__("./node_modules/core-js/internals/iterator-close.js");

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-iterate.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-method-accept-set-like.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

var createSetLikeWithInfinitySize = function (size) {
  return {
    size: size,
    has: function () {
      return true;
    },
    keys: function () {
      throw new Error('e');
    }
  };
};

module.exports = function (name, callback) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17 implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      // also covered engines with
      // https://bugs.webkit.org/show_bug.cgi?id=272679
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      if (!callback) return true;
      // early V8 implementation bug
      // https://issues.chromium.org/issues/351332634
      try {
        new Set()[name](createSetLikeWithInfinitySize(-Infinity));
        return false;
      } catch (error) {
        var set = new Set([1, 2]);
        return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
      }
    }
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-method-get-keys-before-cloning-detection.js":
/***/ ((module) => {

"use strict";

// Should get iterator record of a set-like object before cloning this
// https://bugs.webkit.org/show_bug.cgi?id=289430
module.exports = function (METHOD_NAME) {
  try {
    // eslint-disable-next-line es/no-set -- needed for test
    var baseSet = new Set();
    var setLike = {
      size: 0,
      has: function () { return true; },
      keys: function () {
        // eslint-disable-next-line es/no-object-defineproperty -- needed for test
        return Object.defineProperty({}, 'next', {
          get: function () {
            baseSet.clear();
            baseSet.add(4);
            return function () {
              return { done: true };
            };
          }
        });
      }
    };
    var result = baseSet[METHOD_NAME](setLike);

    return result.size === 1 && result.values().next().value === 4;
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-size.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThisAccessor = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this-accessor.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-symmetric-difference.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");
var clone = __webpack_require__("./node_modules/core-js/internals/set-clone.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-union.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var add = (__webpack_require__("./node_modules/core-js/internals/set-helpers.js").add);
var clone = __webpack_require__("./node_modules/core-js/internals/set-clone.js");
var getSetRecord = __webpack_require__("./node_modules/core-js/internals/get-set-record.js");
var iterateSimple = __webpack_require__("./node_modules/core-js/internals/iterate-simple.js");

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__("./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__("./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__("./node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var defineGlobalProperty = __webpack_require__("./node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.47.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)',
  license: 'https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var store = __webpack_require__("./node_modules/core-js/internals/shared-store.js");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("./node_modules/core-js/internals/environment-v8-version.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");

var $String = globalThis.String;

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

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");

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

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__("./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__("./node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__("./node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__("./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__("./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__("./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "./node_modules/core-js/internals/to-property-key.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__("./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__("./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-set-like.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isIterable = __webpack_require__("./node_modules/core-js/internals/is-iterable.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");

var Set = getBuiltIn('Set');

var isSetLike = function (it) {
  return isObject(it)
    && typeof it.size == 'number'
    && isCallable(it.has)
    && isCallable(it.keys);
};

// fallback old -> new set methods proposal arguments
module.exports = function (it) {
  if (isSetLike(it)) return it;
  return isIterable(it) ? new Set(it) : it;
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


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
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

/***/ "./node_modules/core-js/internals/uid.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("./node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

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

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-helpers.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-weak-map -- safe
var WeakMapPrototype = WeakMap.prototype;

module.exports = {
  // eslint-disable-next-line es/no-weak-map -- safe
  WeakMap: WeakMap,
  set: uncurryThis(WeakMapPrototype.set),
  get: uncurryThis(WeakMapPrototype.get),
  has: uncurryThis(WeakMapPrototype.has),
  remove: uncurryThis(WeakMapPrototype['delete'])
};


/***/ }),

/***/ "./node_modules/core-js/internals/weak-set-helpers.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

// eslint-disable-next-line es/no-weak-set -- safe
var WeakSetPrototype = WeakSet.prototype;

module.exports = {
  // eslint-disable-next-line es/no-weak-set -- safe
  WeakSet: WeakSet,
  add: uncurryThis(WeakSetPrototype.add),
  has: uncurryThis(WeakSetPrototype.has),
  remove: uncurryThis(WeakSetPrototype['delete'])
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var shared = __webpack_require__("./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__("./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__("./node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__("./node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = globalThis.Symbol;
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

/***/ "./node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js");
var isPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__("./node_modules/core-js/internals/copy-constructor-properties.js");
var proxyAccessor = __webpack_require__("./node_modules/core-js/internals/proxy-accessor.js");
var inheritIfRequired = __webpack_require__("./node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__("./node_modules/core-js/internals/normalize-string-argument.js");
var installErrorCause = __webpack_require__("./node_modules/core-js/internals/install-error-cause.js");
var installErrorStack = __webpack_require__("./node_modules/core-js/internals/error-stack-install.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/core-js/internals/is-pure.js");

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

/***/ "./node_modules/core-js/modules/es.array.push.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__("./node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__("./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

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

/***/ "./node_modules/core-js/modules/es.error.cause.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__("./node_modules/core-js/internals/function-apply.js");
var wrapErrorConstructorWithCause = __webpack_require__("./node_modules/core-js/internals/wrap-error-constructor-with-cause.js");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = globalThis[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
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

/***/ "./node_modules/core-js/modules/es.iterator.constructor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var anInstance = __webpack_require__("./node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js");
var createProperty = __webpack_require__("./node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");
var IteratorPrototype = (__webpack_require__("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./node_modules/core-js/internals/is-pure.js");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

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
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js");
var iteratorClose = __webpack_require__("./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__("./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.parse.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__("./node_modules/core-js/internals/is-array.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var toString = __webpack_require__("./node_modules/core-js/internals/to-string.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__("./node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var parseJSONString = __webpack_require__("./node_modules/core-js/internals/parse-json-string.js");
var NATIVE_SYMBOL = __webpack_require__("./node_modules/core-js/internals/symbol-constructor-detection.js");

var JSON = globalThis.JSON;
var Number = globalThis.Number;
var SyntaxError = globalThis.SyntaxError;
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
var IS_NUMBER_START = /^[\d-]$/;
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
    else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
    else throw new SyntaxError('Failed to parse number at: ' + i);
    if (at(source, i) === '.') i = this.skip(IS_DIGIT, i + 1);
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

/***/ "./node_modules/core-js/modules/es.set.difference.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var difference = __webpack_require__("./node_modules/core-js/internals/set-difference.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike('difference', function (result) {
  return result.size === 0;
});

var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails(function () {
  // https://bugs.webkit.org/show_bug.cgi?id=288595
  var setLike = {
    size: 1,
    has: function () { return true; },
    keys: function () {
      var index = 0;
      return {
        next: function () {
          var done = index++ > 1;
          if (baseSet.has(1)) baseSet.clear();
          return { done: done, value: 2 };
        }
      };
    }
  };
  // eslint-disable-next-line es/no-set -- testing
  var baseSet = new Set([1, 2, 3, 4]);
  // eslint-disable-next-line es/no-set-prototype-difference -- testing
  return baseSet.difference(setLike).size !== 3;
});

// `Set.prototype.difference` method
// https://tc39.es/ecma262/#sec-set.prototype.difference
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  difference: difference
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.intersection.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var intersection = __webpack_require__("./node_modules/core-js/internals/set-intersection.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var INCORRECT = !setMethodAcceptSetLike('intersection', function (result) {
  return result.size === 2 && result.has(1) && result.has(2);
}) || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set, es/no-set-prototype-intersection -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://tc39.es/ecma262/#sec-set.prototype.intersection
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var isDisjointFrom = __webpack_require__("./node_modules/core-js/internals/set-is-disjoint-from.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var INCORRECT = !setMethodAcceptSetLike('isDisjointFrom', function (result) {
  return !result;
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var isSubsetOf = __webpack_require__("./node_modules/core-js/internals/set-is-subset-of.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var INCORRECT = !setMethodAcceptSetLike('isSubsetOf', function (result) {
  return result;
});

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSubsetOf: isSubsetOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var isSupersetOf = __webpack_require__("./node_modules/core-js/internals/set-is-superset-of.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var INCORRECT = !setMethodAcceptSetLike('isSupersetOf', function (result) {
  return !result;
});

// `Set.prototype.isSupersetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issupersetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSupersetOf: isSupersetOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var symmetricDifference = __webpack_require__("./node_modules/core-js/internals/set-symmetric-difference.js");
var setMethodGetKeysBeforeCloning = __webpack_require__("./node_modules/core-js/internals/set-method-get-keys-before-cloning-detection.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var FORCED = !setMethodAcceptSetLike('symmetricDifference') || !setMethodGetKeysBeforeCloning('symmetricDifference');

// `Set.prototype.symmetricDifference` method
// https://tc39.es/ecma262/#sec-set.prototype.symmetricdifference
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  symmetricDifference: symmetricDifference
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.union.v2.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var union = __webpack_require__("./node_modules/core-js/internals/set-union.js");
var setMethodGetKeysBeforeCloning = __webpack_require__("./node_modules/core-js/internals/set-method-get-keys-before-cloning-detection.js");
var setMethodAcceptSetLike = __webpack_require__("./node_modules/core-js/internals/set-method-accept-set-like.js");

var FORCED = !setMethodAcceptSetLike('union') || !setMethodGetKeysBeforeCloning('union');

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  union: union
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.iterator.constructor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.iterator.constructor.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.iterator.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.iterator.for-each.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.json.parse.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.json.parse.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.map.delete-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var remove = (__webpack_require__("./node_modules/core-js/internals/map-helpers.js").remove);

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

/***/ "./node_modules/core-js/modules/esnext.map.emplace.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.every.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.find-key.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.find.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.includes.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var sameValueZero = __webpack_require__("./node_modules/core-js/internals/same-value-zero.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.key-of.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.map-keys.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.map-values.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.merge.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/iterate.js");
var set = (__webpack_require__("./node_modules/core-js/internals/map-helpers.js").set);

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

/***/ "./node_modules/core-js/modules/esnext.map.reduce.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.some.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

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

/***/ "./node_modules/core-js/modules/esnext.map.update.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var aMap = __webpack_require__("./node_modules/core-js/internals/a-map.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");

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

/***/ "./node_modules/core-js/modules/esnext.set.add-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var add = (__webpack_require__("./node_modules/core-js/internals/set-helpers.js").add);

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  addAll: function addAll(/* ...elements */) {
    var set = aSet(this);
    for (var k = 0, len = arguments.length; k < len; k++) {
      add(set, arguments[k]);
    } return set;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.delete-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var remove = (__webpack_require__("./node_modules/core-js/internals/set-helpers.js").remove);

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aSet(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.difference.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $difference = __webpack_require__("./node_modules/core-js/internals/set-difference.js");

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  difference: function difference(other) {
    return call($difference, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.every.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(set, function (value) {
      if (!boundFunction(value, value, set)) return false;
    }, true) !== false;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new Set();
    iterate(set, function (value) {
      if (boundFunction(value, value, set)) add(newSet, value);
    });
    return newSet;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.find.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(set, function (value) {
      if (boundFunction(value, value, set)) return { value: value };
    }, true);
    return result && result.value;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.intersection.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $intersection = __webpack_require__("./node_modules/core-js/internals/set-intersection.js");

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  intersection: function intersection(other) {
    return call($intersection, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.is-disjoint-from.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $isDisjointFrom = __webpack_require__("./node_modules/core-js/internals/set-is-disjoint-from.js");

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isDisjointFrom: function isDisjointFrom(other) {
    return call($isDisjointFrom, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.is-subset-of.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $isSubsetOf = __webpack_require__("./node_modules/core-js/internals/set-is-subset-of.js");

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSubsetOf: function isSubsetOf(other) {
    return call($isSubsetOf, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.is-superset-of.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $isSupersetOf = __webpack_require__("./node_modules/core-js/internals/set-is-superset-of.js");

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSupersetOf: function isSupersetOf(other) {
    return call($isSupersetOf, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.join.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");
var toString = __webpack_require__("./node_modules/core-js/internals/to-string.js");

var arrayJoin = uncurryThis([].join);
var push = uncurryThis([].push);

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  join: function join(separator) {
    var set = aSet(this);
    var sep = separator === undefined ? ',' : toString(separator);
    var array = [];
    iterate(set, function (value) {
      push(array, value);
    });
    return arrayJoin(array, sep);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.map.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var SetHelpers = __webpack_require__("./node_modules/core-js/internals/set-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newSet = new Set();
    iterate(set, function (value) {
      add(newSet, boundFunction(value, value, set));
    });
    return newSet;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.reduce.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

var $TypeError = TypeError;

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = aSet(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(set, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    });
    if (noInitial) throw new $TypeError('Reduce of empty set with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.some.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var aSet = __webpack_require__("./node_modules/core-js/internals/a-set.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/set-iterate.js");

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = aSet(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(set, function (value) {
      if (boundFunction(value, value, set)) return true;
    }, true) === true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.symmetric-difference.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $symmetricDifference = __webpack_require__("./node_modules/core-js/internals/set-symmetric-difference.js");

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  symmetricDifference: function symmetricDifference(other) {
    return call($symmetricDifference, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.set.union.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var toSetLike = __webpack_require__("./node_modules/core-js/internals/to-set-like.js");
var $union = __webpack_require__("./node_modules/core-js/internals/set-union.js");

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  union: function union(other) {
    return call($union, this, toSetLike(other));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.weak-map.delete-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aWeakMap = __webpack_require__("./node_modules/core-js/internals/a-weak-map.js");
var remove = (__webpack_require__("./node_modules/core-js/internals/weak-map-helpers.js").remove);

// `WeakMap.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aWeakMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.weak-map.emplace.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aWeakMap = __webpack_require__("./node_modules/core-js/internals/a-weak-map.js");
var WeakMapHelpers = __webpack_require__("./node_modules/core-js/internals/weak-map-helpers.js");

var get = WeakMapHelpers.get;
var has = WeakMapHelpers.has;
var set = WeakMapHelpers.set;

// `WeakMap.prototype.emplace` method
// https://github.com/tc39/proposal-upsert
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  emplace: function emplace(key, handler) {
    var map = aWeakMap(this);
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

/***/ "./node_modules/core-js/modules/esnext.weak-set.add-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aWeakSet = __webpack_require__("./node_modules/core-js/internals/a-weak-set.js");
var add = (__webpack_require__("./node_modules/core-js/internals/weak-set-helpers.js").add);

// `WeakSet.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
  addAll: function addAll(/* ...elements */) {
    var set = aWeakSet(this);
    for (var k = 0, len = arguments.length; k < len; k++) {
      add(set, arguments[k]);
    } return set;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.weak-set.delete-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var aWeakSet = __webpack_require__("./node_modules/core-js/internals/a-weak-set.js");
var remove = (__webpack_require__("./node_modules/core-js/internals/weak-set-helpers.js").remove);

// `WeakSet.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aWeakSet(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.delete.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__("./node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js");

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

/***/ "./node_modules/core-js/modules/web.url-search-params.has.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineBuiltIn = __webpack_require__("./node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__("./node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js");

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

/***/ "./node_modules/core-js/modules/web.url-search-params.size.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js");

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

/***/ "./node_modules/katex/dist/katex.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/vector/index.ts":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("./node_modules/core-js/modules/es.error.cause.js");
// EXTERNAL MODULE: ./matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./node_modules/@formatjs/intl-segmenter/should-polyfill.js
var should_polyfill = __webpack_require__("./node_modules/@formatjs/intl-segmenter/should-polyfill.js");
// EXTERNAL MODULE: ./src/vector/url_utils.ts
var url_utils = __webpack_require__("./src/vector/url_utils.ts");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("./node_modules/core-js/modules/es.array.push.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.difference.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.intersection.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__("./node_modules/core-js/modules/es.set.union.v2.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.json.parse.js
var esnext_json_parse = __webpack_require__("./node_modules/core-js/modules/esnext.json.parse.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.delete-all.js
var esnext_map_delete_all = __webpack_require__("./node_modules/core-js/modules/esnext.map.delete-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.emplace.js
var esnext_map_emplace = __webpack_require__("./node_modules/core-js/modules/esnext.map.emplace.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.every.js
var esnext_map_every = __webpack_require__("./node_modules/core-js/modules/esnext.map.every.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.filter.js
var esnext_map_filter = __webpack_require__("./node_modules/core-js/modules/esnext.map.filter.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find.js
var esnext_map_find = __webpack_require__("./node_modules/core-js/modules/esnext.map.find.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.find-key.js
var esnext_map_find_key = __webpack_require__("./node_modules/core-js/modules/esnext.map.find-key.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.includes.js
var esnext_map_includes = __webpack_require__("./node_modules/core-js/modules/esnext.map.includes.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.key-of.js
var esnext_map_key_of = __webpack_require__("./node_modules/core-js/modules/esnext.map.key-of.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-keys.js
var esnext_map_map_keys = __webpack_require__("./node_modules/core-js/modules/esnext.map.map-keys.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.map-values.js
var esnext_map_map_values = __webpack_require__("./node_modules/core-js/modules/esnext.map.map-values.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.merge.js
var esnext_map_merge = __webpack_require__("./node_modules/core-js/modules/esnext.map.merge.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.reduce.js
var esnext_map_reduce = __webpack_require__("./node_modules/core-js/modules/esnext.map.reduce.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.some.js
var esnext_map_some = __webpack_require__("./node_modules/core-js/modules/esnext.map.some.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.map.update.js
var esnext_map_update = __webpack_require__("./node_modules/core-js/modules/esnext.map.update.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__("./node_modules/core-js/modules/esnext.set.add-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__("./node_modules/core-js/modules/esnext.set.delete-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__("./node_modules/core-js/modules/esnext.set.difference.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__("./node_modules/core-js/modules/esnext.set.every.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__("./node_modules/core-js/modules/esnext.set.filter.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__("./node_modules/core-js/modules/esnext.set.find.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__("./node_modules/core-js/modules/esnext.set.intersection.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__("./node_modules/core-js/modules/esnext.set.is-disjoint-from.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__("./node_modules/core-js/modules/esnext.set.is-subset-of.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__("./node_modules/core-js/modules/esnext.set.is-superset-of.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__("./node_modules/core-js/modules/esnext.set.join.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__("./node_modules/core-js/modules/esnext.set.map.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__("./node_modules/core-js/modules/esnext.set.reduce.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__("./node_modules/core-js/modules/esnext.set.some.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__("./node_modules/core-js/modules/esnext.set.symmetric-difference.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__("./node_modules/core-js/modules/esnext.set.union.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.weak-map.delete-all.js
var esnext_weak_map_delete_all = __webpack_require__("./node_modules/core-js/modules/esnext.weak-map.delete-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.weak-map.emplace.js
var esnext_weak_map_emplace = __webpack_require__("./node_modules/core-js/modules/esnext.weak-map.emplace.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.weak-set.add-all.js
var esnext_weak_set_add_all = __webpack_require__("./node_modules/core-js/modules/esnext.weak-set.add-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.weak-set.delete-all.js
var esnext_weak_set_delete_all = __webpack_require__("./node_modules/core-js/modules/esnext.weak-set.delete-all.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__("./node_modules/core-js/modules/web.url-search-params.delete.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__("./node_modules/core-js/modules/web.url-search-params.has.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__("./node_modules/core-js/modules/web.url-search-params.size.js");
;// ./src/vector/modernizr.js














































/*!
 * modernizr v3.13.0
 * Build https://modernizr.com/download?-cors-cryptography-cssanimations-cssfilters-displaytable-es5date-es5function-es5object-es5undefined-es6array-es6collections-es6string-fetch-flexbox-json-localstorage-objectfit-promises-resizeobserver-sandbox-svg-svgasimg-svgfilters-urlparser-urlsearchparams-webaudio-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;
(function (scriptGlobalObject, window, document, undefined) {
  var tests = [];

  /**
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */
  var ModernizrProto = {
    _version: '3.13.0',
    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': false,
      'enableJSClass': true,
      'usePrefixes': true
    },
    // Queue of tests
    _q: [],
    // Stub these for people who are listening
    on: function (test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function () {
        cb(self[test]);
      }, 0);
    },
    addTest: function (name, fn, options) {
      tests.push({
        name: name,
        fn: fn,
        options: options
      });
    },
    addAsyncTest: function (fn) {
      tests.push({
        name: null,
        fn: fn
      });
    }
  };

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function () {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();
  var classes = [];

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean} true if the typeof the first parameter is exactly the specified type, false otherwise
   */
  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   * @returns {void}
   */
  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;
    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());
          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;

        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');
          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already or if it doesnt exist yet (like inputtypes)
            if (!Modernizr[featureNameSplit[0]] || Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }
            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }
          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * If the browsers follow the spec, then they would expose vendor-specific styles as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following (which is technically incorrect):
   *   elem.style.webkitBorderRadius
   *
   * WebKit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/
   *
   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */
  var omPrefixes = 'Moz O ms Webkit';
  var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : [];
  ModernizrProto._cssomPrefixes = cssomPrefixes;

  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean} true if and only if the first string 'str' contains the second string 'substr'
   */
  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */
  var docElement = document.documentElement;

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */
  var isSVG = docElement.nodeName.toLowerCase() === 'svg';

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */
  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }
  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */
  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function () {
    delete modElem.elem;
  });
  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function () {
    delete mStyle.style;
  });

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */
  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;
    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }
    return body;
  }
  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {Function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean} the result of the specified callback test
   */
  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();
    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }
    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);
    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;
    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }
    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake && body.parentNode) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }
    return !!ret;
  }
  ;

  /**
   * domToCSS takes a camelCase string and converts it to hyphen-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The hyphen-case version of the supplied name
   */
  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function (str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * wrapper around getComputedStyle, to fix issues with Firefox returning null when
   * called inside of a hidden iframe
   *
   * @access private
   * @function computedStyle
   * @param {HTMLElement|SVGElement} elem - The element we want to find the computed styles of
   * @param {string|null} [pseudo] - An optional pseudo element selector (e.g. :before), of null if none
   * @param {string} prop - A CSS property
   * @returns {CSSStyleDeclaration} the value of the specified CSS property
   */
  function computedStyle(elem, pseudo, prop) {
    var result;
    if ('getComputedStyle' in window) {
      result = getComputedStyle.call(window, elem, pseudo);
      var console = window.console;
      if (result !== null) {
        if (prop) {
          result = result.getPropertyValue(prop);
        }
      } else {
        if (console) {
          var method = console.error ? 'error' : 'log';
          console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
        }
      }
    } else {
      result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
    }
    return result;
  }
  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {Array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */
  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: https://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function (node) {
        return computedStyle(node, null, 'position') === 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a hyphen-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of hyphen-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */
  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or hyphen-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use.

    // Inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // For strict XHTML browsers the hardly used samp element is used.
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }
    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];
      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }
      if (mStyle.style[prop] !== undefined) {
        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {
          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] !== before) {
            cleanElems();
            return prefixed === 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed === 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }
  ;

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberOf Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than hyphen-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */
  var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : [];
  ModernizrProto._domPrefixes = domPrefixes;

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {Function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {Function} The wrapped version of the supplied function
   */
  function fnBind(fn, that) {
    return function () {
      return fn.apply(that, arguments);
    };
  }
  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {Array<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   * @returns {boolean|*} returns `false` if the prop is unsupported, otherwise the value that is supported
   */
  function testDOMProps(props, obj, elem) {
    var item;
    for (var i in props) {
      if (props[i] in obj) {
        // return the property name as a string
        if (elem === false) {
          return props[i];
        }
        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overridden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }
  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   * @returns {string|boolean} returns the string version of the property, or `false` if it is unsupported
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberOf Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or hyphen-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @returns {string|boolean} returns the string version of the property, or `false` if it is unsupported
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */
  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;

  /*!
  {
    "name": "CSS Animations",
    "property": "cssanimations",
    "caniuse": "css-animation",
    "polyfills": ["transformie", "csssandpaper"],
    "tags": ["css"],
    "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
    "notes": [{
      "name": "Article: 'Dispelling the Android CSS animation myths'",
      "href": "https://web.archive.org/web/20180602074607/https://daneden.me/2011/12/14/putting-up-with-androids-bullshit/"
    }]
  }
  !*/
  /* DOC
  Detects whether or not elements can be animated using CSS
  */

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));

  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberOf Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {Function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   */
  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;

  /*!
  {
    "name": "CSS Display table",
    "property": "displaytable",
    "caniuse": "css-table",
    "authors": ["scottjehl"],
    "tags": ["css"],
    "builderAliases": ["css_displaytable"],
    "notes": [{
      "name": "Detects for all additional table display values",
      "href": "https://pastebin.com/Gk9PeVaQ"
    }]
  }
  !*/
  /* DOC
  `display: table` and `table-cell` test. (both are tested under one name `table-cell` )
  */

  // If a document is in rtl mode this test will fail so we force ltr mode on the injected
  // element https://github.com/Modernizr/Modernizr/issues/716
  testStyles('#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}', function (elem) {
    var ret;
    var child = elem.childNodes;
    ret = child[0].offsetLeft < child[1].offsetLeft;
    Modernizr.addTest('displaytable', ret, {
      aliases: ['display-table']
    });
  }, 2);

  /**
   * List of property values to set for css tests. See ticket #21
   * https://github.com/modernizr/modernizr/issues/21
   *
   * @memberOf Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of hyphen-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */
  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  /*!
  {
    "name": "CSS Supports",
    "property": "supports",
    "caniuse": "css-featurequeries",
    "tags": ["css"],
    "builderAliases": ["css_supports"],
    "notes": [{
      "name": "W3C Spec (The @supports rule)",
      "href": "https://dev.w3.org/csswg/css3-conditional/#at-supports"
    }, {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/648"
    }, {
      "name": "W3C Spec (The CSSSupportsRule interface)",
      "href": "https://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
    }]
  }
  !*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);

  /*!
  {
    "name": "CSS Filters",
    "property": "cssfilters",
    "caniuse": "css-filters",
    "polyfills": ["polyfilter"],
    "tags": ["css"],
    "builderAliases": ["css_filters"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
    }]
  }
  !*/

  Modernizr.addTest('cssfilters', function () {
    if (Modernizr.supports) {
      return testAllProps('filter', 'blur(2px)');
    } else {
      var el = createElement('a');
      el.style.cssText = prefixes.join('filter:blur(2px); ');
      // https://github.com/Modernizr/Modernizr/issues/615
      // documentMode is needed for false positives in oldIE, please see issue above
      return !!el.style.length && (document.documentMode === undefined || document.documentMode > 9);
    }
  });

  /*!
  {
    "name": "Flexbox",
    "property": "flexbox",
    "caniuse": "flexbox",
    "tags": ["css"],
    "notes": [{
      "name": "The _new_ flexbox",
      "href": "https://www.w3.org/TR/css-flexbox-1/"
    }],
    "warnings": [
      "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
    ]
  }
  !*/
  /* DOC
  Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
  */

  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));

  /**
   * atRule returns a given CSS property at-rule (eg @keyframes), possibly in
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @memberOf Modernizr
   * @name Modernizr.atRule
   * @optionName Modernizr.atRule()
   * @optionProp atRule
   * @access public
   * @function atRule
   * @param {string} prop - String name of the @-rule to test for
   * @returns {string|boolean} The string representing the (possibly prefixed)
   * valid version of the @-rule, or `false` when it is unsupported.
   * @example
   * ```js
   *  var keyframes = Modernizr.atRule('@keyframes');
   *
   *  if (keyframes) {
   *    // keyframes are supported
   *    // could be `@-webkit-keyframes` or `@keyframes`
   *  } else {
   *    // keyframes === `false`
   *  }
   * ```
   */
  var atRule = function (prop) {
    var length = prefixes.length;
    var cssrule = window.CSSRule;
    var rule;
    if (typeof cssrule === 'undefined') {
      return undefined;
    }
    if (!prop) {
      return false;
    }

    // remove literal @ from beginning of provided property
    prop = prop.replace(/^@/, '');

    // CSSRules use underscores instead of dashes
    rule = prop.replace(/-/g, '_').toUpperCase() + '_RULE';
    if (rule in cssrule) {
      return '@' + prop;
    }
    for (var i = 0; i < length; i++) {
      // prefixes gives us something like -o-, and we want O_
      var prefix = prefixes[i];
      var thisRule = prefix.toUpperCase() + '_' + rule;
      if (thisRule in cssrule) {
        return '@-' + prefix.toLowerCase() + '-' + prop;
      }
    }
    return false;
  };
  ModernizrProto.atRule = atRule;

  /**
   * prefixed returns the prefixed or nonprefixed property name variant of your input
   *
   * @memberOf Modernizr
   * @name Modernizr.prefixed
   * @optionName Modernizr.prefixed()
   * @optionProp prefixed
   * @access public
   * @function prefixed
   * @param {string} prop - String name of the property to test for
   * @param {object} [obj] - An object to test for the prefixed properties on
   * @param {HTMLElement} [elem] - An element used to test specific properties against
   * @returns {string|boolean} The string representing the (possibly prefixed) valid
   * version of the property, or `false` when it is unsupported.
   * @example
   *
   * Modernizr.prefixed takes a string css value in the DOM style camelCase (as
   * opposed to the css style hyphen-case) form and returns the (possibly prefixed)
   * version of that property that the browser actually supports.
   *
   * For example, in older Firefox...
   * ```js
   * prefixed('boxSizing')
   * ```
   * returns 'MozBoxSizing'
   *
   * In newer Firefox, as well as any other browser that support the unprefixed
   * version would simply return `boxSizing`. Any browser that does not support
   * the property at all, it will return `false`.
   *
   * By default, prefixed is checked against a DOM element. If you want to check
   * for a property on another object, just pass it as a second argument
   *
   * ```js
   * var rAF = prefixed('requestAnimationFrame', window);
   *
   * raf(function() {
   *  renderFunction();
   * })
   * ```
   *
   * Note that this will return _the actual function_ - not the name of the function.
   * If you need the actual name of the property, pass in `false` as a third argument
   *
   * ```js
   * var rAFProp = prefixed('requestAnimationFrame', window, false);
   *
   * rafProp === 'WebkitRequestAnimationFrame' // in older webkit
   * ```
   *
   * One common use case for prefixed is if you're trying to determine which transition
   * end event to bind to, you might do something like...
   * ```js
   * var transEndEventNames = {
   *     'WebkitTransition' : 'webkitTransitionEnd', * Saf 6, Android Browser
   *     'MozTransition'    : 'transitionend',       * only for FF < 15
   *     'transition'       : 'transitionend'        * IE10, Opera, Chrome, FF 15+, Saf 7+
   * };
   *
   * var transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
   * ```
   *
   * If you want a similar lookup, but in hyphen-case, you can use [prefixedCSS](#modernizr-prefixedcss).
   */
  var prefixed = ModernizrProto.prefixed = function (prop, obj, elem) {
    if (prop.indexOf('@') === 0) {
      return atRule(prop);
    }
    if (prop.indexOf('-') !== -1) {
      // Convert hyphen-case to camelCase
      prop = cssToDOM(prop);
    }
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  };

  /*!
  {
    "name": "CSS Object Fit",
    "caniuse": "object-fit",
    "property": "objectfit",
    "tags": ["css"],
    "builderAliases": ["css_objectfit"],
    "notes": [{
      "name": "Opera Article on Object Fit",
      "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
    }]
  }
  !*/

  Modernizr.addTest('objectfit', !!prefixed('objectFit'), {
    aliases: ['object-fit']
  });

  /*!
  {
    "name": "ES5 Date",
    "property": "es5date",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "https://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 5 Date per specification.
  */

  Modernizr.addTest('es5date', function () {
    var isoDate = '2013-04-12T06:06:37.307Z',
      canParseISODate = false;
    try {
      canParseISODate = !!Date.parse(isoDate);
    } catch (e) {
      // no ISO date parsing yet
    }
    return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && canParseISODate);
  });

  /*!
  {
    "name": "ES5 Function",
    "property": "es5function",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "https://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 5 Function per specification.
  */

  Modernizr.addTest('es5function', function () {
    return !!(Function.prototype && Function.prototype.bind);
  });

  /*!
  {
    "name": "ES5 Object",
    "property": "es5object",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "https://www.ecma-international.org/ecma-262/5.1/"
    }],
    "polyfills": ["es5shim", "es5sham"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 5 Object per specification.
  */

  Modernizr.addTest('es5object', function () {
    return !!(Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions);
  });

  /*!
  {
    "name": "ES5 Immutable Undefined",
    "property": "es5undefined",
    "notes": [{
      "name": "ECMAScript 5.1 Language Specification",
      "href": "https://www.ecma-international.org/ecma-262/5.1/"
    }, {
      "name": "original implementation of detect code",
      "href": "https://kangax.github.io/compat-table/es5/"
    }],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["es5"]
  }
  !*/
  /* DOC
  Check if browser prevents assignment to global `undefined` per ECMAScript 5.
  */

  Modernizr.addTest('es5undefined', function () {
    var result, originalUndefined;
    try {
      originalUndefined = window.undefined;
      window.undefined = 12345;
      result = typeof window.undefined === 'undefined';
      window.undefined = originalUndefined;
    } catch (e) {
      return false;
    }
    return result;
  });

  /*!
  {
    "name": "ES6 Array",
    "property": "es6array",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://web.archive.org/web/20180825202128/https://tc39.github.io/ecma262/"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 6 Array per specification.
  */

  Modernizr.addTest('es6array', !!(Array.prototype && Array.prototype.copyWithin && Array.prototype.fill && Array.prototype.find && Array.prototype.findIndex && Array.prototype.keys && Array.prototype.entries && Array.prototype.values && Array.from && Array.of));

  /*!
  {
    "name": "ES6 Collections",
    "property": "es6collections",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://web.archive.org/web/20180825202128/https://tc39.github.io/ecma262/"
    }],
    "polyfills": ["es6shim", "weakmap"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 6 Map, Set, WeakMap and WeakSet
  */

  Modernizr.addTest('es6collections', !!(window.Map && window.Set && window.WeakMap && window.WeakSet));

  /*!
  {
    "name": "ES6 Promises",
    "property": "promises",
    "caniuse": "promises",
    "polyfills": ["es6promises"],
    "authors": ["Krister Kari", "Jake Archibald"],
    "tags": ["es6"],
    "notes": [{
      "name": "The ES6 promises spec",
      "href": "https://github.com/domenic/promises-unwrapping"
    }, {
      "name": "Chromium dashboard - ES6 Promises",
      "href": "https://www.chromestatus.com/features/5681726336532480"
    }, {
      "name": "JavaScript Promises: an Introduction",
      "href": "https://developers.google.com/web/fundamentals/primers/promises/"
    }]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 6 Promises per specification.
  */

  Modernizr.addTest('promises', function () {
    return 'Promise' in window &&
    // Some of these methods are missing from
    // Firefox/Chrome experimental implementations
    'resolve' in window.Promise && 'reject' in window.Promise && 'all' in window.Promise && 'race' in window.Promise &&
    // Older version of the spec had a resolver object
    // as the arg rather than a function
    function () {
      var resolve;
      new window.Promise(function (r) {
        resolve = r;
      });
      return typeof resolve === 'function';
    }();
  });

  /*!
  {
    "name": "ES6 String",
    "property": "es6string",
    "notes": [{
      "name": "unofficial ECMAScript 6 draft specification",
      "href": "https://web.archive.org/web/20180825202128/https://tc39.github.io/ecma262/"
    }],
    "polyfills": ["es6shim"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
    "tags": ["es6"]
  }
  !*/
  /* DOC
  Check if browser implements ECMAScript 6 String per specification.
  */

  Modernizr.addTest('es6string', !!(String.fromCodePoint && String.raw && String.prototype.codePointAt && String.prototype.repeat && String.prototype.startsWith && String.prototype.endsWith && String.prototype.includes));

  /*!
  {
    "name": "SVG",
    "property": "svg",
    "caniuse": "svg",
    "tags": ["svg"],
    "authors": ["Erik Dahlstrom"],
    "polyfills": [
      "svgweb",
      "raphael",
      "amplesdk",
      "canvg",
      "svg-boilerplate",
      "sie",
      "dojogfx",
      "fabricjs"
    ]
  }
  !*/
  /* DOC
  Detects support for SVG in `<embed>` or `<object>` elements.
  */

  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);

  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;
  (function () {
    var _hasOwnProperty = {}.hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    } else {
      hasOwnProp = function (object, property) {
        /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return property in object && is(object.constructor.prototype[property], 'undefined');
      };
    }
  })();

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */
  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';
    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }
    if (Modernizr._config.enableClasses) {
      // Add the new classes
      if (classes.length > 0) {
        className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      }
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }
  }
  ;

  // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberOf Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {Function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @returns {void}
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */
  ModernizrProto.on = function (feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function () {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberOf Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {Function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   * @returns {void}
   */
  ModernizrProto._trigger = function (feature, res) {
    if (!this._l[feature]) {
      return;
    }
    var cbs = this._l[feature];

    // Force async
    setTimeout(function () {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)).
   * Just like the official detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberOf Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {Function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @returns {object} the Modernizr object to allow chaining
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasjquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */
  function addTest(feature, test) {
    if (typeof feature === 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[key]);
        }
      }
    } else {
      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test existence. Get that right, though.
      if (featureNameSplit.length === 2) {
        last = last[featureNameSplit[1]];
      }
      if (typeof last !== 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }
      test = typeof test === 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length === 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }
        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      setClasses([(!!test && test !== false ? '' : 'no-') + featureNameSplit.join('-')]);

      // Trigger the event
      Modernizr._trigger(feature, test);
    }
    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function () {
    ModernizrProto.addTest = addTest;
  });

  /*!
  {
    "name": "SVG as an <img> tag source",
    "property": "svgasimg",
    "caniuse": "svg-img",
    "tags": ["svg"],
    "aliases": ["svgincss"],
    "authors": ["Chris Coyier"],
    "notes": [{
      "name": "HTML5 Spec",
      "href": "https://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
    }]
  }
  !*/

  // Original Async test by Stu Cox
  // https://gist.github.com/chriscoyier/8774501

  // Now a Sync test based on good results here
  // https://codepen.io/chriscoyier/pen/bADFx

  // Note http://www.w3.org/TR/SVG11/feature#Image is *supposed* to represent
  // support for the `<image>` tag in SVG, not an SVG file linked from an `<img>`
  // tag in HTML – but it’s a heuristic which works
  Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));

  /*!
  {
    "name": "SVG filters",
    "property": "svgfilters",
    "caniuse": "svg-filters",
    "tags": ["svg"],
    "builderAliases": ["svg_filters"],
    "authors": ["Erik Dahlstrom"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/SVG11/filters.html"
    }]
  }
  !*/

  // Should fail in Safari: https://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function () {
    var result = false;
    try {
      result = 'SVGFEColorMatrixElement' in window && SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE === 2;
    } catch (e) {}
    return result;
  });

  /*!
  {
    "name": "URL parser",
    "property": "urlparser",
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://url.spec.whatwg.org/"
    }],
    "polyfills": ["urlparser"],
    "authors": ["Ron Waldon (@jokeyrhyme)"],
    "tags": ["url"]
  }
  !*/
  /* DOC
  Check if browser implements the URL constructor for parsing URLs.
  */

  Modernizr.addTest('urlparser', function () {
    var url;
    try {
      // have to actually try use it, because Safari defines a dud constructor
      url = new URL('http://modernizr.com/');
      return url.href === 'http://modernizr.com/';
    } catch (e) {
      return false;
    }
  });

  /*!
  {
    "property": "urlsearchparams",
    "caniuse": "urlsearchparams",
    "tags": ["querystring", "url"],
    "authors": ["Cătălin Mariș"],
    "name": "URLSearchParams API",
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://url.spec.whatwg.org/#interface-urlsearchparams"
    }, {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"
    }]
  }
  !*/
  /* DOC
  Detects support for an API that provides utility methods for working with the query string of a URL.
  */

  Modernizr.addTest('urlsearchparams', 'URLSearchParams' in window);

  /*!
  {
    "name": "Cross-Origin Resource Sharing",
    "property": "cors",
    "caniuse": "cors",
    "authors": ["Theodoor van Donge"],
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
    }],
    "polyfills": ["pmxdr", "ppx", "flxhr"]
  }
  !*/
  /* DOC
  Detects support for Cross-Origin Resource Sharing: method of performing XMLHttpRequests across domains.
  */

  Modernizr.addTest('cors', 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest());

  /*!
  {
    "name": "Web Cryptography",
    "property": "cryptography",
    "caniuse": "cryptography",
    "tags": ["crypto"],
    "authors": ["roblarsen"],
    "notes": [{
      "name": "W3C Editor's Draft Spec",
      "href": "https://www.w3.org/TR/WebCryptoAPI/"
    }],
    "polyfills": ["polycrypt"]
  }
  !*/
  /* DOC
  Detects support for the cryptographic functionality available under window.crypto.subtle
  */

  var crypto = prefixed('crypto', window);
  Modernizr.addTest('crypto', !!prefixed('subtle', crypto));

  /*!
  {
    "name": "iframe[sandbox] Attribute",
    "property": "sandbox",
    "caniuse": "iframe-sandbox",
    "tags": ["iframe"],
    "builderAliases": ["iframe_sandbox"],
    "notes": [
    {
      "name": "WHATWG Spec",
      "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
    }],
    "knownBugs": ["False-positive on Firefox < 29"]
  }
  !*/
  /* DOC
  Test for `sandbox` attribute in iframes.
  */

  Modernizr.addTest('sandbox', 'sandbox' in createElement('iframe'));

  /*!
  {
    "name": "JSON",
    "property": "json",
    "caniuse": "json",
    "notes": [{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
    }],
    "polyfills": ["json2"]
  }
  !*/
  /* DOC
  Detects native support for JSON handling functions.
  */

  // this will also succeed if you've loaded the JSON2.js polyfill ahead of time
  //   ... but that should be obvious. :)

  Modernizr.addTest('json', 'JSON' in window && 'parse' in JSON && 'stringify' in JSON);

  /*!
  {
    "name": "Fetch API",
    "property": "fetch",
    "tags": ["network"],
    "caniuse": "fetch",
    "notes": [{
      "name": "WHATWG Spec",
      "href": "https://fetch.spec.whatwg.org/"
    }],
    "polyfills": ["fetch"]
  }
  !*/
  /* DOC
  Detects support for the fetch API, a modern replacement for XMLHttpRequest.
  */

  Modernizr.addTest('fetch', 'fetch' in window);

  /*!
  {
    "name": "Local Storage",
    "property": "localstorage",
    "caniuse": "namevalue-storage",
    "tags": ["storage"],
    "polyfills": [
      "joshuabell-polyfill",
      "cupcake",
      "storagepolyfill",
      "amplifyjs",
      "yui-cacheoffline"
    ]
  }
  !*/

  // In FF4, if disabled, window.localStorage should === null.

  // Normally, we could not test that directly and need to do a
  //   `('localStorage' in window)` test first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled

  // Similarly, in Chrome with "Block third-party cookies and site data" enabled,
  // attempting to access `window.sessionStorage` will throw an exception. crbug.com/357625

  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files

  Modernizr.addTest('localstorage', function () {
    var mod = 'modernizr';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

  /*!
  {
    "name": "ResizeObserver",
    "property": "resizeobserver",
    "caniuse": "resizeobserver",
    "tags": ["ResizeObserver"],
    "authors": ["Christian Andersson"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://www.w3.org/TR/resize-observer/"
    }, {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"
    }, {
      "name": "Web.dev Article",
      "href": "https://web.dev/resize-observer/"
    }, {
      "name": "Digital Ocean tutorial",
      "href": "https://www.digitalocean.com/community/tutorials/js-resize-observer"
    }]
  }
  !*/

  /* DOC
  Detects support for ResizeObserver.
  */

  Modernizr.addTest('resizeobserver', 'ResizeObserver' in window);

  /*!
  {
    "name": "Web Audio API",
    "property": "webaudio",
    "caniuse": "audio-api",
    "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
    "tags": ["audio", "media"],
    "builderAliases": ["audio_webaudio_api"],
    "authors": ["Addy Osmani"],
    "notes": [{
      "name": "W3C Spec",
      "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
    }]
  }
  !*/
  /* DOC
  Detects the older non standard webaudio API, (as opposed to the standards based AudioContext API)
  */

  Modernizr.addTest('webaudio', function () {
    var prefixed = 'webkitAudioContext' in window;
    var unprefixed = 'AudioContext' in window;
    if (Modernizr._config.usePrefixes) {
      return prefixed || unprefixed;
    }
    return unprefixed;
  });

  // Run each test
  testRunner();
  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  scriptGlobalObject.Modernizr = Modernizr;
  ;
})(window, window, document);
;// ./src/vector/index.ts

/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.
Copyright 2019 Michael Telatynski <7t3chguy@gmail.com>
Copyright 2018, 2019 New Vector Ltd
Copyright 2017 Vector Creations Ltd
Copyright 2015, 2016 OpenMarket Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




// These are things that can run before the skin loads - be careful not to reference the react-sdk though.



// Import shared components CSS


// Require common CSS here; this will make webpack process it into bundle.css.
// Our own CSS (which is themed) is imported via separate webpack entry points
// in webpack.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
__webpack_require__("./node_modules/katex/dist/katex.css");

// eslint-disable-next-line @typescript-eslint/no-require-imports
__webpack_require__("./src/vector/localstorage-fix.ts");
async function settled(...promises) {
  for (const prom of promises) {
    try {
      await prom;
    } catch (e) {
      logger/* logger */.vF.error(e);
    }
  }
}
function checkBrowserFeatures() {
  if (!window.Modernizr) {
    logger/* logger */.vF.error("Cannot check features - Modernizr global is missing.");
    return false;
  }

  // Custom checks atop Modernizr because it doesn't have checks in it for
  // some features we depend on.
  // Modernizr requires rules to be lowercase with no punctuation.
  // ES2018: http://262.ecma-international.org/9.0/#sec-promise.prototype.finally
  window.Modernizr.addTest("promiseprototypefinally", () => {
    var _window$Promise;
    return typeof ((_window$Promise = window.Promise) === null || _window$Promise === void 0 || (_window$Promise = _window$Promise.prototype) === null || _window$Promise === void 0 ? void 0 : _window$Promise.finally) === "function";
  });
  // ES2020: http://262.ecma-international.org/#sec-promise.allsettled
  window.Modernizr.addTest("promiseallsettled", () => {
    var _window$Promise2;
    return typeof ((_window$Promise2 = window.Promise) === null || _window$Promise2 === void 0 ? void 0 : _window$Promise2.allSettled) === "function";
  });
  // ES2024: https://2ality.com/2024/05/proposal-promise-with-resolvers.html
  window.Modernizr.addTest("promisewithresolvers", () => {
    var _window$Promise3;
    return typeof ((_window$Promise3 = window.Promise) === null || _window$Promise3 === void 0 ? void 0 : _window$Promise3.withResolvers) === "function";
  });
  // ES2018: https://262.ecma-international.org/9.0/#sec-get-regexp.prototype.dotAll
  window.Modernizr.addTest("regexpdotall", () => {
    var _window$RegExp, _Object$getOwnPropert;
    return ((_window$RegExp = window.RegExp) === null || _window$RegExp === void 0 ? void 0 : _window$RegExp.prototype) && !!((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(window.RegExp.prototype, "dotAll")) !== null && _Object$getOwnPropert !== void 0 && _Object$getOwnPropert.get);
  });
  // ES2019: http://262.ecma-international.org/10.0/#sec-object.fromentries
  window.Modernizr.addTest("objectfromentries", () => {
    var _window$Object;
    return typeof ((_window$Object = window.Object) === null || _window$Object === void 0 ? void 0 : _window$Object.fromEntries) === "function";
  });
  // ES2024: https://402.ecma-international.org/9.0/#sec-intl.segmenter
  // The built-in modernizer 'intl' check only checks for the presence of the Intl object, not the Segmenter,
  // and older Firefox has the former but not the latter, so we add our own.
  // This is polyfilled now, but we still want to show the warning because we want to remove the polyfill
  // at some point.
  window.Modernizr.addTest("intlsegmenter", () => {
    var _window$Intl;
    return typeof ((_window$Intl = window.Intl) === null || _window$Intl === void 0 ? void 0 : _window$Intl.Segmenter) === "function";
  });

  // Basic test for WebAssembly support. We could also try instantiating a simple module,
  // although this would start to make (more) assumptions about how rust-crypto loads its wasm.
  window.Modernizr.addTest("wasm", () => typeof WebAssembly === "object" && typeof WebAssembly.Module === "function");

  // Check that the session is in a secure context otherwise most Crypto & WebRTC APIs will be unavailable
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext
  window.Modernizr.addTest("securecontext", () => window.isSecureContext);
  const featureList = Object.keys(window.Modernizr);
  let featureComplete = true;
  for (const feature of featureList) {
    if (window.Modernizr[feature] === undefined) {
      logger/* logger */.vF.error("Looked for feature '%s' but Modernizr has no results for this. " + "Has it been configured correctly?", feature);
      return false;
    }
    if (window.Modernizr[feature] === false) {
      logger/* logger */.vF.error("Browser missing feature: '%s'", feature);
      // toggle flag rather than return early so we log all missing features rather than just the first.
      featureComplete = false;
    }
  }
  return featureComplete;
}
const supportedBrowser = checkBrowserFeatures();

// React depends on Map & Set which we check for using modernizr's es6collections
// if modernizr fails we may not have a functional react to show the error message.
// try in react but fallback to an `alert`
// We start loading stuff but don't block on it until as late as possible to allow
// the browser to use as much parallelism as it can.
// Load parallelism is based on research in https://github.com/element-hq/element-web/issues/12253
async function start() {
  if ((0,should_polyfill/* shouldPolyfill */.Z)()) {
    await __webpack_require__.e(/* import() | intl-segmenter-polyfill */ 2585).then(__webpack_require__.bind(__webpack_require__, "./node_modules/@formatjs/intl-segmenter/polyfill-force.js"));
  }

  // load init.ts async so that its code is not executed immediately and we can catch any exceptions
  const {
    rageshakePromise,
    setupLogStorage,
    preparePlatform,
    loadConfig,
    loadLanguage,
    loadTheme,
    loadApp,
    loadModules,
    loadPlugins,
    showError,
    showIncompatibleBrowser,
    _t,
    extractErrorMessageFromError
  } = await Promise.all(/* import() | init */[__webpack_require__.e(5022), __webpack_require__.e(5005), __webpack_require__.e(4627), __webpack_require__.e(1869), __webpack_require__.e(9314), __webpack_require__.e(5385)]).then(__webpack_require__.bind(__webpack_require__, "./src/vector/init.tsx"));

  // Now perform the next stage of initialisation. This has its own try/catch in which we render
  // a react error page on failure.
  try {
    // give rageshake a chance to load/fail, we don't actually assert rageshake loads, we allow it to fail if no IDB
    await settled(rageshakePromise);
    const fragparts = (0,url_utils/* parseQsFromFragment */._)(window.location);

    // don't try to redirect to the native apps if we're
    // verifying a 3pid (but after we've loaded the config)
    // or if the user is following a deep link
    // (https://github.com/element-hq/element-web/issues/7378)
    const preventRedirect = fragparts.params.client_secret || fragparts.location.length > 0;
    if (!preventRedirect) {
      const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isAndroid = /Android/.test(navigator.userAgent);
      if (isIos || isAndroid) {
        if (document.cookie.indexOf("element_mobile_redirect_to_guide=false") === -1) {
          window.location.href = "mobile_guide/";
          return;
        }
      }
    }

    // set the platform for react sdk
    preparePlatform();
    // load config requires the platform to be ready
    const loadConfigPromise = loadConfig();
    await settled(loadConfigPromise); // wait for it to settle
    // keep initialising so that we can show any possible error with as many features (theme, i18n) as possible

    // now that the config is ready, try to persist logs
    const persistLogsPromise = setupLogStorage();

    // Load language after loading config.json so that settingsDefaults.language can be applied
    const loadLanguagePromise = loadLanguage();
    // as quickly as we possibly can, set a default theme...
    const loadThemePromise = loadTheme();
    // await things settling so that any errors we have to render have features like i18n running
    await settled(loadThemePromise, loadLanguagePromise);
    const loadModulesPromise = loadModules();
    await settled(loadModulesPromise);
    const loadPluginsPromise = loadPlugins();
    await settled(loadPluginsPromise);
    let acceptBrowser = supportedBrowser;
    if (!acceptBrowser && window.localStorage) {
      acceptBrowser = Boolean(window.localStorage.getItem("mx_accepts_unsupported_browser"));
    }

    // ##########################
    // error handling begins here
    // ##########################
    if (!acceptBrowser) {
      await new Promise((resolve, reject) => {
        logger/* logger */.vF.error("Browser is missing required features.");
        // take to a different landing page to AWOOOOOGA at the user
        showIncompatibleBrowser(() => {
          if (window.localStorage) {
            window.localStorage.setItem("mx_accepts_unsupported_browser", String(true));
          }
          logger/* logger */.vF.log("User accepts the compatibility risks.");
          resolve();
        }).catch(reject);
      });
    }
    try {
      // await config here
      await loadConfigPromise;
    } catch (error) {
      // Now that we've loaded the theme (CSS), display the config syntax error if needed.
      if (error instanceof SyntaxError) {
        // This uses the default brand since the app config is unavailable.
        return showError(_t("error|misconfigured"), [_t("error|invalid_json"), _t("error|invalid_json_detail", {
          message: error.message || _t("error|invalid_json_generic")
        })]);
      }
      return showError(_t("error|cannot_load_config"));
    }

    // ##################################
    // app load critical path starts here
    // assert things started successfully
    // ##################################
    await loadPluginsPromise;
    await loadModulesPromise;
    await loadThemePromise;
    await loadLanguagePromise;

    // We don't care if the log persistence made it through successfully, but we do want to
    // make sure it had a chance to load before we move on. It's prepared much higher up in
    // the process, making this the first time we check that it did something.
    await settled(persistLogsPromise);

    // Finally, load the app. All of the other react-sdk imports are in this file which causes the skinner to
    // run on the components.
    await loadApp(fragparts.params);
  } catch (err) {
    logger/* logger */.vF.error(err);
    // Like the compatibility page, AWOOOOOGA at the user
    // This uses the default brand since the app config is unavailable.
    await showError(_t("error|misconfigured"), [extractErrorMessageFromError(err, _t("error|app_launch_unexpected_error"))]);
  }
}
start().catch(err => {
  var _document$getElementB;
  // If we get here, things have gone terribly wrong and we cannot load the app javascript at all.
  // Show a different, very simple iframed-static error page. Or actually, one of two different ones
  // depending on whether the browser is supported (ie. we think we should be able to load but
  // failed) or unsupported (where we tried anyway and, lo and behold, we failed).
  logger/* logger */.vF.error(err);
  // show the static error in an iframe to not lose any context / console data
  // with some basic styling to make the iframe full page
  document.body.style.removeProperty("height");
  const iframe = document.createElement("iframe");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - typescript seems to only like the IE syntax for iframe sandboxing
  iframe["sandbox"] = "";
  iframe.src = supportedBrowser ? "static/unable-to-load.html" : "static/incompatible-browser.html";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.border = "0";
  (_document$getElementB = document.getElementById("matrixchat")) === null || _document$getElementB === void 0 || _document$getElementB.appendChild(iframe);
});

/***/ }),

/***/ "./src/vector/localstorage-fix.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * Because we've been saving a lot of additional logger data in the localStorage for no particular reason
 * we need to, hopefully, unbrick user's devices by geting rid of unnecessary data.
 * */

if (window.localStorage) {
  Object.keys(window.localStorage).forEach(key => {
    if (key.startsWith("loglevel:")) {
      window.localStorage.removeItem(key);
    }
  });
}

/***/ }),

/***/ "./src/vector/url_utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ parseQsFromFragment),
/* harmony export */   u: () => (/* binding */ parseQs)
/* harmony export */ });
/* harmony import */ var matrix_js_sdk_src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./matrix-js-sdk/src/utils.ts");
/*
Copyright 2018-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



// We want to support some name / value pairs in the fragment
// so we're re-using query string like format
//
function parseQsFromFragment(location) {
  // if we have a fragment, it will start with '#', which we need to drop.
  // (if we don't, this will return '').
  const fragment = location.hash.substring(1);

  // our fragment may contain a query-param-like section. we need to fish
  // this out *before* URI-decoding because the params may contain ? and &
  // characters which are only URI-encoded once.
  const hashparts = fragment.split("?");
  const result = {
    location: decodeURIComponent(hashparts[0]),
    params: {}
  };
  if (hashparts.length > 1) {
    result.params = (0,matrix_js_sdk_src_utils__WEBPACK_IMPORTED_MODULE_0__/* .decodeParams */ .Ny)(hashparts[1]);
  }
  return result;
}
function parseQs(location) {
  return (0,matrix_js_sdk_src_utils__WEBPACK_IMPORTED_MODULE_0__/* .decodeParams */ .Ny)(location.search.substring(1));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload function */
/******/ 	(() => {
/******/ 		__webpack_require__.H = {};
/******/ 		__webpack_require__.G = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.H).map((key) => {
/******/ 				__webpack_require__.H[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "bundles/" + __webpack_require__.h() + "/" + ({"1869":"styles","2585":"intl-segmenter-polyfill","2702":"element-web-app","3304":"playback.worker","3444":"indexeddb.worker","4980":"blurhash.worker","5385":"init","5607":"error-view"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "bundles/" + __webpack_require__.h() + "/" + {"1869":"styles","5607":"error-view"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0dba95d031a798f96468")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "element-web:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "bundles/" + __webpack_require__.h() + "/" + wasmModuleHash + ".wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	(() => {
/******/ 	  if (typeof __webpack_require__ !== 'undefined') {
/******/ 	    var oldGetScript = __webpack_require__.u;
/******/ 	    var oldLoadScript = __webpack_require__.e;
/******/ 	    var queryMap = {};
/******/ 	    var countMap = {};
/******/ 	    var getRetryDelay = function () {
/******/ 	      return 500;
/******/ 	    };
/******/ 	    __webpack_require__.u = function (chunkId) {
/******/ 	      var result = oldGetScript(chunkId);
/******/ 	      return (
/******/ 	        result +
/******/ 	        (queryMap.hasOwnProperty(chunkId) ? '?' + queryMap[chunkId] : '')
/******/ 	      );
/******/ 	    };
/******/ 	    __webpack_require__.e = function (chunkId) {
/******/ 	      var result = oldLoadScript(chunkId);
/******/ 	      return result.catch(function (error) {
/******/ 	        var retries = countMap.hasOwnProperty(chunkId) ? countMap[chunkId] : 3;
/******/ 	        if (retries < 1) {
/******/ 	          var realSrc = oldGetScript(chunkId);
/******/ 	          error.message =
/******/ 	            'Loading chunk ' +
/******/ 	            chunkId +
/******/ 	            ' failed after 3 retries.\n(' +
/******/ 	            realSrc +
/******/ 	            ')';
/******/ 	          error.request = realSrc;
/******/ 	          throw error;
/******/ 	        }
/******/ 	        return new Promise(function (resolve) {
/******/ 	          var retryAttempt = 3 - retries + 1;
/******/ 	          setTimeout(function () {
/******/ 	            var retryAttemptString = '&retry-attempt=' + retryAttempt;
/******/ 	            var cacheBust = (() => Date.now())();
/******/ 	            +retryAttemptString;
/******/ 	            queryMap[chunkId] = cacheBust;
/******/ 	            countMap[chunkId] = retries - 1;
/******/ 	            resolve(__webpack_require__.e(chunkId));
/******/ 	          }, getRetryDelay(retryAttempt));
/******/ 	        });
/******/ 	      });
/******/ 	    };
/******/ 	  }
/******/ 	})();
/******/ 	
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			3023: 0,
/******/ 			5980: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"1869":1,"5607":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		__webpack_require__.H.miniCss = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedCssChunks, chunkId) || installedCssChunks[chunkId] === undefined) && /^(1869|3023|5607)$/.test(chunkId)) {
/******/ 				installedCssChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 				link.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "preload";
/******/ 				link.as = "style";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.miniCssF(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			3023: 0,
/******/ 			5980: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		__webpack_require__.H.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				link.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "preload";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk preload trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"5385": [
/******/ 				9483,
/******/ 				1436,
/******/ 				1869,
/******/ 				5727,
/******/ 				2702
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.preload = (chunkId) => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.G);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1040], () => (__webpack_require__("./src/vector/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map