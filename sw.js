/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/a-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/a-string.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'string') return argument;
  throw new $TypeError('Argument is not a string');
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/an-object-or-undefined.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (argument === undefined || isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object or undefined');
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/an-uint8-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof.js");

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(argument, [[TypedArrayName]])
// If argument.[[TypedArrayName]] is not "Uint8Array", throw a TypeError exception
module.exports = function (argument) {
  if (classof(argument) === 'Uint8Array') return argument;
  throw new $TypeError('Argument is not an Uint8Array');
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-buffer-basic-detection.js":
/***/ ((module) => {

"use strict";

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-buffer-byte-length.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThisAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js");

var $TypeError = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new $TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-buffer-is-detached.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var arrayBufferByteLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-byte-length.js");

var slice = uncurryThis(ArrayBuffer.prototype.slice);

module.exports = function (O) {
  if (arrayBufferByteLength(O) !== 0) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-buffer-transfer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var uncurryThisAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var toIndex = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-index.js");
var isDetached = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-is-detached.js");
var arrayBufferByteLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-byte-length.js");
var detachTransferable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/detach-transferable.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/structured-clone-proper-transfer.js");

var structuredClone = global.structuredClone;
var ArrayBuffer = global.ArrayBuffer;
var DataView = global.DataView;
var TypeError = global.TypeError;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  if (isDetached(arrayBuffer)) throw new TypeError('ArrayBuffer is detached');
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-basic-detection.js");
var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof.js");
var tryToString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/try-to-string.js");
var createNonEnumerableProperty = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in-accessor.js");
var isPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-is-prototype-of.js");
var getPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-set-prototype-of.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");
var uid = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/uid.js");
var InternalStateModule = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-from-constructor-and-list.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-group.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var toPropertyKey = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-property-key.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var objectCreate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-create.js");
var arrayFromConstructorAndList = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-from-constructor-and-list.js");

var $Array = Array;
var push = uncurryThis([].push);

module.exports = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject($this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, that);
  var target = objectCreate(null);
  var length = lengthOfArrayLike(self);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = self[index];
    key = toPropertyKey(boundFunction(value, index, O));
    // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push(target[key], value);
    else target[key] = [value];
  }
  // TODO: Remove this block from `core-js@4`
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== $Array) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-iteration-from-last.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var index = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-iteration.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-method-is-strict.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-reduce.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-species-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-species-create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arraySpeciesConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-to-reversed.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-unique-by.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-null-or-undefined.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var toObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var MapHelpers = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push = uncurryThis([].push);

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  iterate(map, function (value) {
    push(result, value);
  });
  return result;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/array-with.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/base64-map.js":
/***/ ((module) => {

"use strict";

var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var base64Alphabet = commonAlphabet + '+/';
var base64UrlAlphabet = commonAlphabet + '-_';

var inverse = function (characters) {
  // TODO: use `Object.create(null)` in `core-js@4`
  var result = {};
  var index = 0;
  for (; index < 64; index++) result[characters.charAt(index)] = index;
  return result;
};

module.exports = {
  i2c: base64Alphabet,
  c2i: inverse(base64Alphabet),
  i2cUrl: base64UrlAlphabet,
  c2iUrl: inverse(base64UrlAlphabet)
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/detach-transferable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var tryNodeRequire = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/try-node-require.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/structured-clone-proper-transfer.js");

var structuredClone = global.structuredClone;
var $ArrayBuffer = global.ArrayBuffer;
var $MessageChannel = global.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/dom-exception-constants.js":
/***/ ((module) => {

"use strict";

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/engine-is-browser.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_DENO = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-deno.js");
var IS_NODE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-node.js");

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/engine-is-deno.js":
/***/ ((module) => {

"use strict";

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/engine-is-node.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof-raw.js");

module.exports = classof(global.process) === 'process';


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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/get-alphabet-option.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (options) {
  var alphabet = options && options.alphabet;
  if (alphabet === undefined || alphabet === 'base64' || alphabet === 'base64url') return alphabet || 'base64';
  throw new $TypeError('Incorrect `alphabet` option');
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-big-int-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof.js");

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/is-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/species-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-constructor.js");
var isNullOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-null-or-undefined.js");
var wellKnownSymbol = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/structured-clone-proper-transfer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");
var V8 = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-v8-version.js");
var IS_BROWSER = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-browser.js");
var IS_DENO = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-deno.js");
var IS_NODE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-node.js");

var structuredClone = global.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-big-int.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-primitive.js");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-length.js");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-offset.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPositiveInteger = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-positive-integer.js");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/to-positive-integer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw new $RangeError("The argument can't be less than 0");
  return result;
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/try-node-require.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_NODE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-node.js");

module.exports = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
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

/***/ "./matrix-js-sdk/node_modules/core-js/internals/typed-array-from-species-and-list.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayFromConstructorAndList = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-from-constructor-and-list.js");
var typedArraySpeciesConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/typed-array-species-constructor.js");

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/internals/typed-array-species-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var speciesConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/species-constructor.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
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

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.detached.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var defineBuiltInAccessor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/define-built-in-accessor.js");
var isDetached = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-is-detached.js");

var ArrayBufferPrototype = ArrayBuffer.prototype;

if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var $transfer = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-transfer.js");

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.transfer.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var $transfer = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-transfer.js");

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.array.reduce.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/engine-is-node.js");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
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

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.at.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.find-last-index.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var $findLastIndex = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-iteration-from-last.js").findLastIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.find-last.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var $findLast = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-iteration-from-last.js").findLast);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.set.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var call = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-call.js");
var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var toOffset = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-offset.js");
var toIndexedObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw new RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.to-reversed.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayToReversed = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-to-reversed.js");
var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.to-sorted.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var arrayFromConstructorAndList = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-from-constructor-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.with.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayWith = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-with.js");
var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var isBigIntArray = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-big-int-array.js");
var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");
var toBigInt = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-big-int.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


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

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.reduce.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-iterator-direct.js");

var $TypeError = TypeError;

// `Iterator.prototype.reduce` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    aCallable(reducer);
    var record = getIteratorDirect(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.filter-reject.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var $filterReject = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-iteration.js").filterReject);
var fromSpeciesAndList = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/typed-array-from-species-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
exportTypedArrayMethod('filterReject', function filterReject(callbackfn /* , thisArg */) {
  var list = $filterReject(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
}, true);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.group-by.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var $group = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-group.js");
var typedArraySpeciesConstructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/typed-array-species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
exportTypedArrayMethod('groupBy', function groupBy(callbackfn /* , thisArg */) {
  var thisArg = arguments.length > 1 ? arguments[1] : undefined;
  return $group(aTypedArray(this), callbackfn, thisArg, typedArraySpeciesConstructor);
}, true);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.to-spliced.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/length-of-array-like.js");
var isBigIntArray = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-big-int-array.js");
var toAbsoluteIndex = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-absolute-index.js");
var toBigInt = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-big-int.js");
var toIntegerOrInfinity = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/to-integer-or-infinity.js");
var fails = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var max = Math.max;
var min = Math.min;

// some early implementations, like WebKit, does not follow the final semantic
var PROPER_ORDER = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Int8Array([1]);

  var spliced = array.toSpliced(1, 0, {
    valueOf: function () {
      array[0] = 2;
      return 3;
    }
  });

  return spliced[0] !== 2 || spliced[1] !== 3;
});

// `%TypedArray%.prototype.toSpliced` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toSpliced
exportTypedArrayMethod('toSpliced', function toSpliced(start, deleteCount /* , ...items */) {
  var O = aTypedArray(this);
  var C = getTypedArrayConstructor(O);
  var len = lengthOfArrayLike(O);
  var actualStart = toAbsoluteIndex(start, len);
  var argumentsLength = arguments.length;
  var k = 0;
  var insertCount, actualDeleteCount, thisIsBigIntArray, convertedItems, value, newLen, A;
  if (argumentsLength === 0) {
    insertCount = actualDeleteCount = 0;
  } else if (argumentsLength === 1) {
    insertCount = 0;
    actualDeleteCount = len - actualStart;
  } else {
    actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    insertCount = argumentsLength - 2;
    if (insertCount) {
      convertedItems = new C(insertCount);
      thisIsBigIntArray = isBigIntArray(convertedItems);
      for (var i = 2; i < argumentsLength; i++) {
        value = arguments[i];
        // FF30- typed arrays doesn't properly convert objects to typed array values
        convertedItems[i - 2] = thisIsBigIntArray ? toBigInt(value) : +value;
      }
    }
  }
  newLen = len + insertCount - actualDeleteCount;
  A = new C(newLen);

  for (; k < actualStart; k++) A[k] = O[k];
  for (; k < actualStart + insertCount; k++) A[k] = convertedItems[k - actualStart];
  for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

  return A;
}, !PROPER_ORDER);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.unique-by.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-buffer-view-core.js");
var arrayFromConstructorAndList = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-from-constructor-and-list.js");
var $arrayUniqueBy = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-unique-by.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var arrayUniqueBy = uncurryThis($arrayUniqueBy);

// `%TypedArray%.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
exportTypedArrayMethod('uniqueBy', function uniqueBy(resolver) {
  aTypedArray(this);
  return arrayFromConstructorAndList(getTypedArrayConstructor(this), arrayUniqueBy(this, resolver));
}, true);


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.from-base64.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var anObjectOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object-or-undefined.js");
var aString = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/a-string.js");
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var arrayFromConstructorAndList = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/array-from-constructor-and-list.js");
var base64Map = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/base64-map.js");
var getAlphabetOption = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-alphabet-option.js");

var base64Alphabet = base64Map.c2i;
var base64UrlAlphabet = base64Map.c2iUrl;

var Uint8Array = global.Uint8Array;
var SyntaxError = global.SyntaxError;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var push = uncurryThis([].push);
var SPACES = /[\t\n\f\r ]/g;
var EXTRA_BITS = 'Extra bits';

// `Uint8Array.fromBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', stat: true, forced: true }, {
  fromBase64: function fromBase64(string /* , options */) {
    aString(string);
    var options = arguments.length > 1 ? anObjectOrUndefined(arguments[1]) : undefined;
    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
    var strict = options ? !!options.strict : false;

    var input = strict ? string : replace(string, SPACES, '');

    if (input.length % 4 === 0) {
      if (stringSlice(input, -2) === '==') input = stringSlice(input, 0, -2);
      else if (stringSlice(input, -1) === '=') input = stringSlice(input, 0, -1);
    } else if (strict) throw new SyntaxError('Input is not correctly padded');

    var lastChunkSize = input.length % 4;

    switch (lastChunkSize) {
      case 1: throw new SyntaxError('Bad input length');
      case 2: input += 'AA'; break;
      case 3: input += 'A';
    }

    var bytes = [];
    var i = 0;
    var inputLength = input.length;

    var at = function (shift) {
      var chr = charAt(input, i + shift);
      if (!hasOwn(alphabet, chr)) throw new SyntaxError('Bad char in input: "' + chr + '"');
      return alphabet[chr] << (18 - 6 * shift);
    };

    for (; i < inputLength; i += 4) {
      var triplet = at(0) + at(1) + at(2) + at(3);
      push(bytes, (triplet >> 16) & 255, (triplet >> 8) & 255, triplet & 255);
    }

    var byteLength = bytes.length;

    if (lastChunkSize === 2) {
      if (strict && bytes[byteLength - 2] !== 0) throw new SyntaxError(EXTRA_BITS);
      byteLength -= 2;
    } else if (lastChunkSize === 3) {
      if (strict && bytes[byteLength - 1] !== 0) throw new SyntaxError(EXTRA_BITS);
      byteLength--;
    }

    return arrayFromConstructorAndList(Uint8Array, bytes, byteLength);
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.to-base64.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var anObjectOrUndefined = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-object-or-undefined.js");
var anUint8Array = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-uint8-array.js");
var base64Map = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/base64-map.js");
var getAlphabetOption = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-alphabet-option.js");

var base64Alphabet = base64Map.i2c;
var base64UrlAlphabet = base64Map.i2cUrl;

var Uint8Array = global.Uint8Array;
var charAt = uncurryThis(''.charAt);

// `Uint8Array.prototype.toBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: true }, {
  toBase64: function toBase64(/* options */) {
    var array = anUint8Array(this);
    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : undefined;
    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;

    var result = '';
    var i = 0;
    var length = array.length;
    var triplet;

    var at = function (shift) {
      return charAt(alphabet, (triplet >> (6 * shift)) & 63);
    };

    for (; i + 2 < length; i += 3) {
      triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
      result += at(3) + at(2) + at(1) + at(0);
    }
    if (i + 2 === length) {
      triplet = (array[i] << 16) + (array[i + 1] << 8);
      result += at(3) + at(2) + at(1) + '=';
    } else if (i + 1 === length) {
      triplet = array[i] << 16;
      result += at(3) + at(2) + '==';
    }

    return result;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.to-hex.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/function-uncurry-this.js");
var anUint8Array = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-uint8-array.js");

var Uint8Array = global.Uint8Array;
var numberToString = uncurryThis(1.0.toString);

// `Uint8Array.prototype.toHex` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: true }, {
  toHex: function toHex() {
    anUint8Array(this);
    var result = '';
    for (var i = 0, length = this.length; i < length; i++) {
      var hex = numberToString(this[i], 16);
      result += hex.length === 1 ? '0' + hex : hex;
    }
    return result;
  }
});


/***/ }),

/***/ "./matrix-js-sdk/node_modules/core-js/modules/web.dom-exception.stack.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/export.js");
var global = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/get-built-in.js");
var createPropertyDescriptor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/create-property-descriptor.js");
var defineProperty = (__webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/has-own-property.js");
var anInstance = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/an-instance.js");
var inheritIfRequired = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/normalize-string-argument.js");
var DOMExceptionConstants = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/dom-exception-constants.js");
var clearErrorStack = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/error-stack-clear.js");
var DESCRIPTORS = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__("./matrix-js-sdk/node_modules/core-js/internals/is-pure.js");

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
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

/***/ "./node_modules/core-js/internals/a-string.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'string') return argument;
  throw new $TypeError('Argument is not a string');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object-or-undefined.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (argument === undefined || isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object or undefined');
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

/***/ "./node_modules/core-js/internals/an-uint8-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(argument, [[TypedArrayName]])
// If argument.[[TypedArrayName]] is not "Uint8Array", throw a TypeError exception
module.exports = function (argument) {
  if (classof(argument) === 'Uint8Array') return argument;
  throw new $TypeError('Argument is not an Uint8Array');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-basic-detection.js":
/***/ ((module) => {

"use strict";

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-byte-length.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var uncurryThisAccessor = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this-accessor.js");
var classof = __webpack_require__("./node_modules/core-js/internals/classof-raw.js");

var ArrayBuffer = globalThis.ArrayBuffer;
var TypeError = globalThis.TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = ArrayBuffer && uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-is-detached.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__("./node_modules/core-js/internals/array-buffer-basic-detection.js");
var arrayBufferByteLength = __webpack_require__("./node_modules/core-js/internals/array-buffer-byte-length.js");

var DataView = globalThis.DataView;

module.exports = function (O) {
  if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength(O) !== 0) return false;
  try {
    // eslint-disable-next-line no-new -- thrower
    new DataView(O);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-not-detached.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-is-detached.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isDetached(it)) throw new $TypeError('ArrayBuffer is detached');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-transfer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var uncurryThisAccessor = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this-accessor.js");
var toIndex = __webpack_require__("./node_modules/core-js/internals/to-index.js");
var notDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-not-detached.js");
var arrayBufferByteLength = __webpack_require__("./node_modules/core-js/internals/array-buffer-byte-length.js");
var detachTransferable = __webpack_require__("./node_modules/core-js/internals/detach-transferable.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./node_modules/core-js/internals/structured-clone-proper-transfer.js");

var structuredClone = globalThis.structuredClone;
var ArrayBuffer = globalThis.ArrayBuffer;
var DataView = globalThis.DataView;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  notDetached(arrayBuffer);
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("./node_modules/core-js/internals/array-buffer-basic-detection.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");
var tryToString = __webpack_require__("./node_modules/core-js/internals/try-to-string.js");
var createNonEnumerableProperty = __webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__("./node_modules/core-js/internals/define-built-in.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js");
var isPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");
var uid = __webpack_require__("./node_modules/core-js/internals/uid.js");
var InternalStateModule = __webpack_require__("./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = globalThis.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = globalThis.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = globalThis.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = globalThis[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = globalThis[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = globalThis[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (globalThis[NAME]) setPrototypeOf(globalThis[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (globalThis[NAME]) {
    createNonEnumerableProperty(globalThis[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from-constructor-and-list.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-group.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var toPropertyKey = __webpack_require__("./node_modules/core-js/internals/to-property-key.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var objectCreate = __webpack_require__("./node_modules/core-js/internals/object-create.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js");

var $Array = Array;
var push = uncurryThis([].push);

module.exports = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject($this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, that);
  var target = objectCreate(null);
  var length = lengthOfArrayLike(self);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = self[index];
    key = toPropertyKey(boundFunction(value, index, O));
    // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push(target[key], value);
    else target[key] = [value];
  }
  // TODO: Remove this block from `core-js@4`
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== $Array) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
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

/***/ "./node_modules/core-js/internals/array-iteration-from-last.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__("./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var index = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__("./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__("./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__("./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__("./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__("./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__("./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arraySpeciesConstructor = __webpack_require__("./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-to-reversed.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");

// https://tc39.es/ecma262/#sec-array.prototype.toreversed
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-unique-by.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var toObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var MapHelpers = __webpack_require__("./node_modules/core-js/internals/map-helpers.js");
var iterate = __webpack_require__("./node_modules/core-js/internals/map-iterate.js");

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push = uncurryThis([].push);

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  iterate(map, function (value) {
    push(result, value);
  });
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-with.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

// https://tc39.es/ecma262/#sec-array.prototype.with
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ "./node_modules/core-js/internals/base64-map.js":
/***/ ((module) => {

"use strict";

var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var base64Alphabet = commonAlphabet + '+/';
var base64UrlAlphabet = commonAlphabet + '-_';

var inverse = function (characters) {
  // TODO: use `Object.create(null)` in `core-js@4`
  var result = {};
  var index = 0;
  for (; index < 64; index++) result[characters.charAt(index)] = index;
  return result;
};

module.exports = {
  i2c: base64Alphabet,
  c2i: inverse(base64Alphabet),
  i2cUrl: base64UrlAlphabet,
  c2iUrl: inverse(base64UrlAlphabet)
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

/***/ "./node_modules/core-js/internals/detach-transferable.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var getBuiltInNodeModule = __webpack_require__("./node_modules/core-js/internals/get-built-in-node-module.js");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("./node_modules/core-js/internals/structured-clone-proper-transfer.js");

var structuredClone = globalThis.structuredClone;
var $ArrayBuffer = globalThis.ArrayBuffer;
var $MessageChannel = globalThis.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = getBuiltInNodeModule('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


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

/***/ "./node_modules/core-js/internals/environment-is-node.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ENVIRONMENT = __webpack_require__("./node_modules/core-js/internals/environment.js");

module.exports = ENVIRONMENT === 'NODE';


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

/***/ "./node_modules/core-js/internals/environment.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__("./node_modules/core-js/internals/environment-user-agent.js");
var classof = __webpack_require__("./node_modules/core-js/internals/classof-raw.js");

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


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

/***/ "./node_modules/core-js/internals/get-alphabet-option.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;

module.exports = function (options) {
  var alphabet = options && options.alphabet;
  if (alphabet === undefined || alphabet === 'base64' || alphabet === 'base64url') return alphabet || 'base64';
  throw new $TypeError('Incorrect `alphabet` option');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in-node-module.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var IS_NODE = __webpack_require__("./node_modules/core-js/internals/environment-is-node.js");

module.exports = function (name) {
  if (IS_NODE) {
    try {
      return globalThis.process.getBuiltinModule(name);
    } catch (error) { /* empty */ }
    try {
      // eslint-disable-next-line no-new-func -- safe
      return Function('return require("' + name + '")')();
    } catch (error) { /* empty */ }
  }
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

/***/ "./node_modules/core-js/internals/is-big-int-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
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

/***/ "./node_modules/core-js/internals/is-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__("./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__("./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__("./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


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

/***/ "./node_modules/core-js/internals/structured-clone-proper-transfer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");
var V8 = __webpack_require__("./node_modules/core-js/internals/environment-v8-version.js");
var ENVIRONMENT = __webpack_require__("./node_modules/core-js/internals/environment.js");

var structuredClone = globalThis.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((ENVIRONMENT === 'DENO' && V8 > 92) || (ENVIRONMENT === 'NODE' && V8 > 94) || (ENVIRONMENT === 'BROWSER' && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


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

/***/ "./node_modules/core-js/internals/to-big-int.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__("./node_modules/core-js/internals/to-primitive.js");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("./node_modules/core-js/internals/to-length.js");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
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

/***/ "./node_modules/core-js/internals/to-offset.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPositiveInteger = __webpack_require__("./node_modules/core-js/internals/to-positive-integer.js");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw new $RangeError("The argument can't be less than 0");
  return result;
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

/***/ "./node_modules/core-js/internals/typed-array-from-same-type-and-list.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayFromConstructorAndList = __webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js");
var getTypedArrayConstructor = (__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js").getTypedArrayConstructor);

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(getTypedArrayConstructor(instance), list);
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

/***/ "./node_modules/core-js/internals/uint8-from-base64.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var anObjectOrUndefined = __webpack_require__("./node_modules/core-js/internals/an-object-or-undefined.js");
var aString = __webpack_require__("./node_modules/core-js/internals/a-string.js");
var hasOwn = __webpack_require__("./node_modules/core-js/internals/has-own-property.js");
var base64Map = __webpack_require__("./node_modules/core-js/internals/base64-map.js");
var getAlphabetOption = __webpack_require__("./node_modules/core-js/internals/get-alphabet-option.js");
var notDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-not-detached.js");

var base64Alphabet = base64Map.c2i;
var base64UrlAlphabet = base64Map.c2iUrl;

var SyntaxError = globalThis.SyntaxError;
var TypeError = globalThis.TypeError;
var at = uncurryThis(''.charAt);

var skipAsciiWhitespace = function (string, index) {
  var length = string.length;
  for (;index < length; index++) {
    var chr = at(string, index);
    if (chr !== ' ' && chr !== '\t' && chr !== '\n' && chr !== '\f' && chr !== '\r') break;
  } return index;
};

var decodeBase64Chunk = function (chunk, alphabet, throwOnExtraBits) {
  var chunkLength = chunk.length;

  if (chunkLength < 4) {
    chunk += chunkLength === 2 ? 'AA' : 'A';
  }

  var triplet = (alphabet[at(chunk, 0)] << 18)
    + (alphabet[at(chunk, 1)] << 12)
    + (alphabet[at(chunk, 2)] << 6)
    + alphabet[at(chunk, 3)];

  var chunkBytes = [
    (triplet >> 16) & 255,
    (triplet >> 8) & 255,
    triplet & 255
  ];

  if (chunkLength === 2) {
    if (throwOnExtraBits && chunkBytes[1] !== 0) {
      throw new SyntaxError('Extra bits');
    }
    return [chunkBytes[0]];
  }

  if (chunkLength === 3) {
    if (throwOnExtraBits && chunkBytes[2] !== 0) {
      throw new SyntaxError('Extra bits');
    }
    return [chunkBytes[0], chunkBytes[1]];
  }

  return chunkBytes;
};

var writeBytes = function (bytes, elements, written) {
  var elementsLength = elements.length;
  for (var index = 0; index < elementsLength; index++) {
    bytes[written + index] = elements[index];
  }
  return written + elementsLength;
};

/* eslint-disable max-statements, max-depth -- TODO */
module.exports = function (string, options, into, maxLength) {
  aString(string);
  anObjectOrUndefined(options);
  var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
  var lastChunkHandling = options ? options.lastChunkHandling : undefined;

  if (lastChunkHandling === undefined) lastChunkHandling = 'loose';

  if (lastChunkHandling !== 'loose' && lastChunkHandling !== 'strict' && lastChunkHandling !== 'stop-before-partial') {
    throw new TypeError('Incorrect `lastChunkHandling` option');
  }

  if (into) notDetached(into.buffer);

  var stringLength = string.length;
  var bytes = into || [];
  var written = 0;
  var read = 0;
  var chunk = '';
  var index = 0;

  if (maxLength) while (true) {
    index = skipAsciiWhitespace(string, index);
    if (index === stringLength) {
      if (chunk.length > 0) {
        if (lastChunkHandling === 'stop-before-partial') {
          break;
        }
        if (lastChunkHandling === 'loose') {
          if (chunk.length === 1) {
            throw new SyntaxError('Malformed padding: exactly one additional character');
          }
          written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
        } else {
          throw new SyntaxError('Missing padding');
        }
      }
      read = stringLength;
      break;
    }
    var chr = at(string, index);
    ++index;
    if (chr === '=') {
      if (chunk.length < 2) {
        throw new SyntaxError('Padding is too early');
      }
      index = skipAsciiWhitespace(string, index);
      if (chunk.length === 2) {
        if (index === stringLength) {
          if (lastChunkHandling === 'stop-before-partial') {
            break;
          }
          throw new SyntaxError('Malformed padding: only one =');
        }
        if (at(string, index) === '=') {
          ++index;
          index = skipAsciiWhitespace(string, index);
        }
      }
      if (index < stringLength) {
        throw new SyntaxError('Unexpected character after padding');
      }
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === 'strict'), written);
      read = stringLength;
      break;
    }
    if (!hasOwn(alphabet, chr)) {
      throw new SyntaxError('Unexpected character');
    }
    var remainingBytes = maxLength - written;
    if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
      // special case: we can fit exactly the number of bytes currently represented by chunk, so we were just checking for `=`
      break;
    }

    chunk += chr;
    if (chunk.length === 4) {
      written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
      chunk = '';
      read = index;
      if (written === maxLength) {
        break;
      }
    }
  }

  return { bytes: bytes, read: read, written: written };
};


/***/ }),

/***/ "./node_modules/core-js/internals/uint8-from-hex.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");

var Uint8Array = globalThis.Uint8Array;
var SyntaxError = globalThis.SyntaxError;
var parseInt = globalThis.parseInt;
var min = Math.min;
var NOT_HEX = /[^\da-f]/i;
var exec = uncurryThis(NOT_HEX.exec);
var stringSlice = uncurryThis(''.slice);

module.exports = function (string, into) {
  var stringLength = string.length;
  if (stringLength % 2 !== 0) throw new SyntaxError('String should be an even number of characters');
  var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
  var bytes = into || new Uint8Array(maxLength);
  var read = 0;
  var written = 0;
  while (written < maxLength) {
    var hexits = stringSlice(string, read, read += 2);
    if (exec(NOT_HEX, hexits)) throw new SyntaxError('String should only contain hex characters');
    bytes[written++] = parseInt(hexits, 16);
  }
  return { bytes: bytes, read: read };
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

/***/ "./node_modules/core-js/modules/es.array-buffer.detached.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js");
var isDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-is-detached.js");

var ArrayBufferPrototype = ArrayBuffer.prototype;

// `ArrayBuffer.prototype.detached` getter
// https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.detached
if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var $transfer = __webpack_require__("./node_modules/core-js/internals/array-buffer-transfer.js");

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.transfer.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var $transfer = __webpack_require__("./node_modules/core-js/internals/array-buffer-transfer.js");

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
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

/***/ "./node_modules/core-js/modules/es.typed-array.at.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-last-index.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var $findLastIndex = (__webpack_require__("./node_modules/core-js/internals/array-iteration-from-last.js").findLastIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-last.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var $findLast = (__webpack_require__("./node_modules/core-js/internals/array-iteration-from-last.js").findLast);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var call = __webpack_require__("./node_modules/core-js/internals/function-call.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var toOffset = __webpack_require__("./node_modules/core-js/internals/to-offset.js");
var toIndexedObject = __webpack_require__("./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__("./node_modules/core-js/internals/fails.js");

var RangeError = globalThis.RangeError;
var Int8Array = globalThis.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw new RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-reversed.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayToReversed = __webpack_require__("./node_modules/core-js/internals/array-to-reversed.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-sorted.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("./node_modules/core-js/internals/a-callable.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.with.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var arrayWith = __webpack_require__("./node_modules/core-js/internals/array-with.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var isBigIntArray = __webpack_require__("./node_modules/core-js/internals/is-big-int-array.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");
var toBigInt = __webpack_require__("./node_modules/core-js/internals/to-big-int.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// Bug in WebKit. It should truncate a negative fractional index to zero, but instead throws an error
var THROW_ON_NEGATIVE_FRACTIONAL_INDEX = PROPER_ORDER && function () {
  try {
    // eslint-disable-next-line es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](-0.5, 1);
  } catch (error) {
    return true;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.uint8-array.set-from-base64.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var $fromBase64 = __webpack_require__("./node_modules/core-js/internals/uint8-from-base64.js");
var anUint8Array = __webpack_require__("./node_modules/core-js/internals/an-uint8-array.js");

var Uint8Array = globalThis.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array || !Uint8Array.prototype.setFromBase64 || !function () {
  var target = new Uint8Array([255, 255, 255, 255, 255]);
  try {
    target.setFromBase64('', null);
    return;
  } catch (error) { /* empty */ }
  // Webkit not throw an error on odd length string
  try {
    target.setFromBase64('a');
    return;
  } catch (error) { /* empty */ }
  try {
    target.setFromBase64('MjYyZg===');
  } catch (error) {
    return target[0] === 50 && target[1] === 54 && target[2] === 50 && target[3] === 255 && target[4] === 255;
  }
}();

// `Uint8Array.prototype.setFromBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  setFromBase64: function setFromBase64(string /* , options */) {
    anUint8Array(this);

    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : undefined, this, this.length);

    return { read: result.read, written: result.written };
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.uint8-array.set-from-hex.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var aString = __webpack_require__("./node_modules/core-js/internals/a-string.js");
var anUint8Array = __webpack_require__("./node_modules/core-js/internals/an-uint8-array.js");
var notDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-not-detached.js");
var $fromHex = __webpack_require__("./node_modules/core-js/internals/uint8-from-hex.js");

// `Uint8Array.prototype.setFromHex` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (globalThis.Uint8Array) $({ target: 'Uint8Array', proto: true }, {
  setFromHex: function setFromHex(string) {
    anUint8Array(this);
    aString(string);
    notDetached(this.buffer);
    var read = $fromHex(string, this).read;
    return { read: read, written: read / 2 };
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.uint8-array.to-base64.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var anObjectOrUndefined = __webpack_require__("./node_modules/core-js/internals/an-object-or-undefined.js");
var anUint8Array = __webpack_require__("./node_modules/core-js/internals/an-uint8-array.js");
var notDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-not-detached.js");
var base64Map = __webpack_require__("./node_modules/core-js/internals/base64-map.js");
var getAlphabetOption = __webpack_require__("./node_modules/core-js/internals/get-alphabet-option.js");

var base64Alphabet = base64Map.i2c;
var base64UrlAlphabet = base64Map.i2cUrl;

var charAt = uncurryThis(''.charAt);

var Uint8Array = globalThis.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array || !Uint8Array.prototype.toBase64 || !function () {
  try {
    var target = new Uint8Array();
    target.toBase64(null);
  } catch (error) {
    return true;
  }
}();

// `Uint8Array.prototype.toBase64` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  toBase64: function toBase64(/* options */) {
    var array = anUint8Array(this);
    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : undefined;
    var alphabet = getAlphabetOption(options) === 'base64' ? base64Alphabet : base64UrlAlphabet;
    var omitPadding = !!options && !!options.omitPadding;
    notDetached(this.buffer);

    var result = '';
    var i = 0;
    var length = array.length;
    var triplet;

    var at = function (shift) {
      return charAt(alphabet, (triplet >> (6 * shift)) & 63);
    };

    for (; i + 2 < length; i += 3) {
      triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
      result += at(3) + at(2) + at(1) + at(0);
    }
    if (i + 2 === length) {
      triplet = (array[i] << 16) + (array[i + 1] << 8);
      result += at(3) + at(2) + at(1) + (omitPadding ? '' : '=');
    } else if (i + 1 === length) {
      triplet = array[i] << 16;
      result += at(3) + at(2) + (omitPadding ? '' : '==');
    }

    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.uint8-array.to-hex.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var anUint8Array = __webpack_require__("./node_modules/core-js/internals/an-uint8-array.js");
var notDetached = __webpack_require__("./node_modules/core-js/internals/array-buffer-not-detached.js");

var numberToString = uncurryThis(1.1.toString);

var Uint8Array = globalThis.Uint8Array;

var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array || !Uint8Array.prototype.toHex || !(function () {
  try {
    var target = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255]);
    return target.toHex() === 'ffffffffffffffff';
  } catch (error) {
    return false;
  }
})();

// `Uint8Array.prototype.toHex` method
// https://github.com/tc39/proposal-arraybuffer-base64
if (Uint8Array) $({ target: 'Uint8Array', proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
  toHex: function toHex() {
    anUint8Array(this);
    notDetached(this.buffer);
    var result = '';
    for (var i = 0, length = this.length; i < length; i++) {
      var hex = numberToString(this[i], 16);
      result += hex.length === 1 ? '0' + hex : hex;
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.filter-reject.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var $filterReject = (__webpack_require__("./node_modules/core-js/internals/array-iteration.js").filterReject);
var fromSameTypeAndList = __webpack_require__("./node_modules/core-js/internals/typed-array-from-same-type-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
exportTypedArrayMethod('filterReject', function filterReject(callbackfn /* , thisArg */) {
  var list = $filterReject(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSameTypeAndList(this, list);
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.group-by.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var $group = __webpack_require__("./node_modules/core-js/internals/array-group.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
exportTypedArrayMethod('groupBy', function groupBy(callbackfn /* , thisArg */) {
  var thisArg = arguments.length > 1 ? arguments[1] : undefined;
  return $group(aTypedArray(this), callbackfn, thisArg, getTypedArrayConstructor);
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.to-spliced.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");
var isBigIntArray = __webpack_require__("./node_modules/core-js/internals/is-big-int-array.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/internals/to-absolute-index.js");
var toBigInt = __webpack_require__("./node_modules/core-js/internals/to-big-int.js");
var toIntegerOrInfinity = __webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var max = Math.max;
var min = Math.min;

// `%TypedArray%.prototype.toSpliced` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toSpliced
exportTypedArrayMethod('toSpliced', function toSpliced(start, deleteCount /* , ...items */) {
  var O = aTypedArray(this);
  var C = getTypedArrayConstructor(O);
  var len = lengthOfArrayLike(O);
  var actualStart = toAbsoluteIndex(start, len);
  var argumentsLength = arguments.length;
  var k = 0;
  var insertCount, actualDeleteCount, thisIsBigIntArray, convertedItems, value, newLen, A;
  if (argumentsLength === 0) {
    insertCount = actualDeleteCount = 0;
  } else if (argumentsLength === 1) {
    insertCount = 0;
    actualDeleteCount = len - actualStart;
  } else {
    actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    insertCount = argumentsLength - 2;
    if (insertCount) {
      convertedItems = new C(insertCount);
      thisIsBigIntArray = isBigIntArray(convertedItems);
      for (var i = 2; i < argumentsLength; i++) {
        value = arguments[i];
        // FF30- typed arrays doesn't properly convert objects to typed array values
        convertedItems[i - 2] = thisIsBigIntArray ? toBigInt(value) : +value;
      }
    }
  }
  newLen = len + insertCount - actualDeleteCount;
  A = new C(newLen);

  for (; k < actualStart; k++) A[k] = O[k];
  for (; k < actualStart + insertCount; k++) A[k] = convertedItems[k - actualStart];
  for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

  return A;
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.typed-array.unique-by.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js");
var arrayFromConstructorAndList = __webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js");
var $arrayUniqueBy = __webpack_require__("./node_modules/core-js/internals/array-unique-by.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var arrayUniqueBy = uncurryThis($arrayUniqueBy);

// `%TypedArray%.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
exportTypedArrayMethod('uniqueBy', function uniqueBy(resolver) {
  aTypedArray(this);
  return arrayFromConstructorAndList(getTypedArrayConstructor(this), arrayUniqueBy(this, resolver));
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.uint8-array.set-from-base64.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.uint8-array.set-from-base64.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.uint8-array.set-from-hex.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.uint8-array.set-from-hex.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.uint8-array.to-base64.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.uint8-array.to-base64.js");


/***/ }),

/***/ "./node_modules/core-js/modules/esnext.uint8-array.to-hex.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("./node_modules/core-js/modules/es.uint8-array.to-hex.js");


/***/ }),

/***/ "./node_modules/core-js/modules/web.self.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__("./node_modules/core-js/internals/global-this.js");
var defineBuiltInAccessor = __webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/internals/descriptors.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var INCORRECT_VALUE = globalThis.self !== globalThis;

// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try {
  if (DESCRIPTORS) {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var descriptor = Object.getOwnPropertyDescriptor(globalThis, 'self');
    // some engines have `self`, but with incorrect descriptor
    // https://github.com/denoland/deno/issues/15765
    if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) {
      defineBuiltInAccessor(globalThis, 'self', {
        get: function self() {
          return globalThis;
        },
        set: function self(value) {
          if (this !== globalThis) throw new $TypeError('Illegal invocation');
          defineProperty(globalThis, 'self', {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
          });
        },
        configurable: true,
        enumerable: true
      });
    }
  } else $({ global: true, simple: true, forced: INCORRECT_VALUE }, {
    self: globalThis
  });
} catch (error) { /* empty */ }


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("./node_modules/core-js/modules/es.error.cause.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__("./node_modules/core-js/modules/web.url-search-params.delete.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__("./node_modules/core-js/modules/web.url-search-params.has.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__("./node_modules/core-js/modules/web.url-search-params.size.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.self.js
var web_self = __webpack_require__("./node_modules/core-js/modules/web.self.js");
;// ./src/utils/StorageAccess.ts


/*
Copyright 2024 New Vector Ltd.
Copyright 2019-2021 , 2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * Retrieves the IndexedDB factory object.
 *
 * @returns {IDBFactory | undefined} The IndexedDB factory object if available, or undefined if it is not supported.
 */
function getIDBFactory() {
  // IndexedDB loading is lazy for easier testing.

  // just *accessing* _indexedDB throws an exception in firefox with
  // indexeddb disabled.
  try {
    var _self;
    // `self` is preferred for service workers, which access this file's functions.
    // We check `self` first because `window` returns something which doesn't work for service workers.
    // Note: `self?.indexedDB ?? window.indexedDB` breaks in service workers for unknown reasons.
    return (_self = self) !== null && _self !== void 0 && _self.indexedDB ? self.indexedDB : window.indexedDB;
  } catch {}
}
let idb = null;
async function idbInit() {
  if (!getIDBFactory()) {
    throw new Error("IndexedDB not available");
  }
  idb = await new Promise((resolve, reject) => {
    const request = getIDBFactory().open("matrix-react-sdk", 1);
    request.onerror = reject;
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore("pickleKey");
      db.createObjectStore("account");
    };
  });
}
async function idbTransaction(table, mode, fn) {
  if (!idb) {
    await idbInit();
  }
  return new Promise((resolve, reject) => {
    const txn = idb.transaction([table], mode);
    txn.onerror = reject;
    const objectStore = txn.objectStore(table);
    const request = fn(objectStore);
    request.onerror = reject;
    request.onsuccess = () => {
      resolve(request.result);
    };
  });
}

/**
 * Loads an item from an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store in IndexedDB.
 * @param {string | string[]} key The key where the data is stored.
 * @returns {Promise<any>} A promise that resolves with the retrieved item from the table.
 */
async function idbLoad(table, key) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readonly", objectStore => objectStore.get(key));
}

/**
 * Saves data to an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store in the IndexedDB.
 * @param {string|string[]} key The key to use for storing the data.
 * @param {*} data The data to be saved.
 * @returns {Promise<void>} A promise that resolves when the data is saved successfully.
 */
async function idbSave(table, key, data) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readwrite", objectStore => objectStore.put(data, key));
}

/**
 * Deletes a record from an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store where the record is stored.
 * @param {string|string[]} key The key of the record to be deleted.
 * @returns {Promise<void>} A Promise that resolves when the record(s) have been successfully deleted.
 */
async function idbDelete(table, key) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readwrite", objectStore => objectStore.delete(key));
}

/**
 * Clears all records from an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store where the records are stored.
 * @returns {Promise<void>} A Promise that resolves when the record(s) have been successfully deleted.
 */
async function idbClear(table) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readwrite", objectStore => objectStore.clear());
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.detached.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.transfer.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__("./node_modules/core-js/modules/es.typed-array.at.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last.js
var es_typed_array_find_last = __webpack_require__("./node_modules/core-js/modules/es.typed-array.find-last.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last-index.js
var es_typed_array_find_last_index = __webpack_require__("./node_modules/core-js/modules/es.typed-array.find-last-index.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__("./node_modules/core-js/modules/es.typed-array.set.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__("./node_modules/core-js/modules/es.typed-array.to-reversed.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__("./node_modules/core-js/modules/es.typed-array.to-sorted.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__("./node_modules/core-js/modules/es.typed-array.with.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.filter-reject.js
var esnext_typed_array_filter_reject = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.filter-reject.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.group-by.js
var esnext_typed_array_group_by = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.group-by.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.to-spliced.js
var esnext_typed_array_to_spliced = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.to-spliced.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.typed-array.unique-by.js
var esnext_typed_array_unique_by = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.unique-by.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.uint8-array.set-from-base64.js
var esnext_uint8_array_set_from_base64 = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.set-from-base64.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.uint8-array.set-from-hex.js
var esnext_uint8_array_set_from_hex = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.set-from-hex.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.uint8-array.to-base64.js
var esnext_uint8_array_to_base64 = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.to-base64.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.uint8-array.to-hex.js
var esnext_uint8_array_to_hex = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.to-hex.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.error.cause.js
var modules_es_error_cause = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.error.cause.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/loglevel/lib/loglevel.js
var loglevel = __webpack_require__("./matrix-js-sdk/node_modules/loglevel/lib/loglevel.js");
var loglevel_default = /*#__PURE__*/__webpack_require__.n(loglevel);
;// ./matrix-js-sdk/src/logger.ts


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
(loglevel_default()).methodFactory = function (methodName, logLevel, loggerName) {
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
  const prefixLogger = loglevel_default().getLogger(loggerName);
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
    prefixLogger.setLevel((loglevel_default()).levels.DEBUG, false);
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
const logger_logger = getPrefixedLogger();

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
    _defineProperty(this, "name", void 0);
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
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.detached.js
var modules_es_array_buffer_detached = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.detached.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.transfer.js
var modules_es_array_buffer_transfer = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.transfer.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var modules_es_array_buffer_transfer_to_fixed_length = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.at.js
var modules_es_typed_array_at = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.at.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.find-last.js
var modules_es_typed_array_find_last = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.find-last.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.find-last-index.js
var modules_es_typed_array_find_last_index = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.find-last-index.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.set.js
var modules_es_typed_array_set = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.set.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.to-reversed.js
var modules_es_typed_array_to_reversed = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.to-reversed.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.to-sorted.js
var modules_es_typed_array_to_sorted = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.to-sorted.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.with.js
var modules_es_typed_array_with = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.typed-array.with.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.filter-reject.js
var modules_esnext_typed_array_filter_reject = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.filter-reject.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.group-by.js
var modules_esnext_typed_array_group_by = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.group-by.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.to-spliced.js
var modules_esnext_typed_array_to_spliced = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.to-spliced.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.unique-by.js
var modules_esnext_typed_array_unique_by = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.typed-array.unique-by.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.to-base64.js
var modules_esnext_uint8_array_to_base64 = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.to-base64.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.to-hex.js
var modules_esnext_uint8_array_to_hex = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.to-hex.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/es.array.reduce.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.constructor.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.reduce.js
var esnext_iterator_reduce = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.iterator.reduce.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.from-base64.js
var esnext_uint8_array_from_base64 = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/esnext.uint8-array.from-base64.js");
// EXTERNAL MODULE: ./matrix-js-sdk/node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("./matrix-js-sdk/node_modules/core-js/modules/web.dom-exception.stack.js");
;// ./matrix-js-sdk/src/base64.ts



















/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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
 * Base64 encoding and decoding utilities
 */

function toBase64(uint8Array, options) {
  if (typeof uint8Array.toBase64 === "function") {
    // Currently this is only supported in Firefox,
    // but we match the options in the hope in the future we can rely on it for all environments.
    // https://tc39.es/proposal-arraybuffer-base64/spec/#sec-uint8array.prototype.tobase64
    return uint8Array.toBase64(options);
  }
  let base64 = btoa(uint8Array.reduce((acc, current) => acc + String.fromCharCode(current), ""));
  if (options.omitPadding) {
    base64 = base64.replace(/={1,2}$/, "");
  }
  if (options.alphabet === "base64url") {
    base64 = base64.replace(/\+/g, "-").replace(/\//g, "_");
  }
  return base64;
}

/**
 * Encode a typed array of uint8 as base64.
 * @param uint8Array - The data to encode.
 * @returns The base64.
 */
function base64_encodeBase64(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64",
    omitPadding: false
  });
}

/**
 * Encode a typed array of uint8 as unpadded base64.
 * @param uint8Array - The data to encode.
 * @returns The unpadded base64.
 */
function encodeUnpaddedBase64(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64",
    omitPadding: true
  });
}

/**
 * Encode a typed array of uint8 as unpadded base64 using the URL-safe encoding.
 * @param uint8Array - The data to encode.
 * @returns The unpadded base64.
 */
function encodeUnpaddedBase64Url(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64url",
    omitPadding: true
  });
}
function fromBase64(base64, options) {
  if (typeof Uint8Array.fromBase64 === "function") {
    // Currently this is only supported in Firefox,
    // but we match the options in the hope in the future we can rely on it for all environments.
    // https://tc39.es/proposal-arraybuffer-base64/spec/#sec-uint8array.frombase64
    return Uint8Array.fromBase64(base64, options);
  }
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

/**
 * Decode a base64 (or base64url) string to a typed array of uint8.
 * @param base64 - The base64 to decode.
 * @returns The decoded data.
 */
function base64_decodeBase64(base64) {
  // The function requires us to select an alphabet, but we don't know if base64url was used so we convert.
  return fromBase64(base64.replace(/-/g, "+").replace(/_/g, "/"), {
    alphabet: "base64",
    lastChunkHandling: "loose"
  });
}
;// ./matrix-js-sdk/src/utils/internal/deriveKeys.ts


















/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// salt for HKDF, with 8 bytes of zeros
const zeroSalt = new Uint8Array(8);

/**
 * Derive AES and HMAC keys from a master key.
 *
 * This is used for deriving secret storage keys: see https://spec.matrix.org/v1.11/client-server-api/#msecret_storagev1aes-hmac-sha2 (step 1).
 *
 * @param key
 * @param name
 */
async function deriveKeys_deriveKeys(key, name) {
  const hkdfkey = await globalThis.crypto.subtle.importKey("raw", key, {
    name: "HKDF"
  }, false, ["deriveBits"]);
  const keybits = await globalThis.crypto.subtle.deriveBits({
    name: "HKDF",
    salt: zeroSalt,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/879
    info: new TextEncoder().encode(name),
    hash: "SHA-256"
  }, hkdfkey, 512);
  const aesKey = keybits.slice(0, 32);
  const hmacKey = keybits.slice(32);
  const aesProm = globalThis.crypto.subtle.importKey("raw", aesKey, {
    name: "AES-CTR"
  }, false, ["encrypt", "decrypt"]);
  const hmacProm = globalThis.crypto.subtle.importKey("raw", hmacKey, {
    name: "HMAC",
    hash: {
      name: "SHA-256"
    }
  }, false, ["sign", "verify"]);
  return Promise.all([aesProm, hmacProm]);
}
;// ./matrix-js-sdk/src/utils/decryptAESSecretStorageItem.ts



















/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Decrypt an AES-encrypted Secret Storage item.
 *
 * @param data - the encrypted data, returned by {@link utils/encryptAESSecretStorageItem.default | encryptAESSecretStorageItem}.
 * @param key - the encryption key to use as an input to the HKDF function which is used to derive the AES key. Must
 *    be the same as provided to {@link utils/encryptAESSecretStorageItem.default | encryptAESSecretStorageItem}.
 * @param name - the name of the secret. Also used as an input to the HKDF operation which is used to derive the AES
 *    key, so again must be the same as provided to {@link utils/encryptAESSecretStorageItem.default | encryptAESSecretStorageItem}.
 */
async function decryptAESSecretStorageItem(data, key, name) {
  const [aesKey, hmacKey] = await deriveKeys_deriveKeys(key, name);
  const ciphertext = base64_decodeBase64(data.ciphertext);
  if (!(await globalThis.crypto.subtle.verify({
    name: "HMAC"
  }, hmacKey, base64_decodeBase64(data.mac), ciphertext))) {
    throw new Error(`Error decrypting secret ${name}: bad MAC`);
  }
  const plaintext = await globalThis.crypto.subtle.decrypt({
    name: "AES-CTR",
    counter: base64_decodeBase64(data.iv),
    length: 64
  }, aesKey, ciphertext);
  return new TextDecoder().decode(new Uint8Array(plaintext));
}
;// ./matrix-js-sdk/src/utils/encryptAESSecretStorageItem.ts


















/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Encrypt a string as a secret storage item, using AES-CTR.
 *
 * @param data - the plaintext to encrypt
 * @param key - the encryption key to use as an input to the HKDF function which is used to derive the AES key for
 *    encryption. Obviously, the same key must be provided when decrypting.
 * @param name - the name of the secret. Used as an input to the HKDF operation which is used to derive the AES key,
 *    so again the same value must be provided when decrypting.
 * @param ivStr - the base64-encoded initialization vector to use. If not supplied, a random one will be generated.
 *
 * @returns The encrypted result, including the ciphertext itself, the initialization vector (as supplied in `ivStr`,
 *   or generated), and an HMAC on the ciphertext — all base64-encoded.
 */
async function encryptAESSecretStorageItem_encryptAESSecretStorageItem(data, key, name, ivStr) {
  let iv;
  if (ivStr) {
    iv = decodeBase64(ivStr);
  } else {
    iv = new Uint8Array(16);
    globalThis.crypto.getRandomValues(iv);

    // clear bit 63 of the IV to stop us hitting the 64-bit counter boundary
    // (which would mean we wouldn't be able to decrypt on Android). The loss
    // of a single bit of iv is a price we have to pay.
    iv[8] &= 0x7f;
  }
  const [aesKey, hmacKey] = await deriveKeys(key, name);
  const encodedData = new TextEncoder().encode(data);
  const ciphertext = await globalThis.crypto.subtle.encrypt({
    name: "AES-CTR",
    counter: iv,
    length: 64
  }, aesKey, encodedData);
  const hmac = await globalThis.crypto.subtle.sign({
    name: "HMAC"
  }, hmacKey, ciphertext);
  return {
    iv: encodeBase64(iv),
    ciphertext: encodeBase64(new Uint8Array(ciphertext)),
    mac: encodeBase64(new Uint8Array(hmac))
  };
}
;// ./src/utils/tokens/tokens.ts



















/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/**
 * Utility functions related to the storage and retrieval of access tokens
 */

/*
 * Names used when storing the tokens in indexeddb or localstorage
 */
const ACCESS_TOKEN_STORAGE_KEY = "mx_access_token";
const REFRESH_TOKEN_STORAGE_KEY = "mx_refresh_token";
/*
 * Names of the tokens. Used as part of the calculation to derive AES keys during encryption in persistTokenInStorage,
 * and decryption in restoreSessionFromStorage.
 */
const ACCESS_TOKEN_IV = "access_token";
const REFRESH_TOKEN_IV = "refresh_token";
/*
 * Keys for localstorage items which indicate whether we expect a token in indexeddb.
 */
const HAS_ACCESS_TOKEN_STORAGE_KEY = "mx_has_access_token";
const HAS_REFRESH_TOKEN_STORAGE_KEY = "mx_has_refresh_token";

/**
 * The pickle key is a string of unspecified length and format.  For AES, we need a 256-bit Uint8Array. So we HKDF the pickle key to generate the AES key.  The AES key should be zeroed after it is used.
 * @param pickleKey
 * @returns AES key
 */
async function pickleKeyToAesKey(pickleKey) {
  const pickleKeyBuffer = new Uint8Array(pickleKey.length);
  for (let i = 0; i < pickleKey.length; i++) {
    pickleKeyBuffer[i] = pickleKey.charCodeAt(i);
  }
  const hkdfKey = await crypto.subtle.importKey("raw", pickleKeyBuffer, "HKDF", false, ["deriveBits"]);
  pickleKeyBuffer.fill(0);
  return new Uint8Array(await crypto.subtle.deriveBits({
    name: "HKDF",
    hash: "SHA-256",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/879
    salt: new Uint8Array(32),
    info: new Uint8Array(0)
  }, hkdfKey, 256));
}

/**
 * Try to decrypt a token retrieved from storage
 *
 * Where token is not encrypted (plain text) returns the plain text token.
 *
 * Where token is encrypted, attempts decryption. Returns successfully decrypted token, or throws if
 * decryption failed.
 *
 * @param pickleKey Pickle key: used to derive the encryption key, or undefined if the token is not encrypted.
 *   Must be the same as provided to {@link persistTokenInStorage}.
 * @param token token to be decrypted.
 * @param tokenName Name of the token. Used in logging, but also used as an input when generating the actual AES key,
 *    so the same value must be provided to {@link persistTokenInStorage}.
 *
 * @returns the decrypted token, or the plain text token.
 */
async function tryDecryptToken(pickleKey, token, tokenName) {
  if (typeof token === "string") {
    // Looks like an unencrypted token
    return token;
  }

  // Otherwise, it must be an encrypted token.
  if (!pickleKey) {
    throw new Error(`Error decrypting secret ${tokenName}: no pickle key found.`);
  }
  const encrKey = await pickleKeyToAesKey(pickleKey);
  const decryptedToken = await decryptAESSecretStorageItem(token, encrKey, tokenName);
  encrKey.fill(0);
  return decryptedToken;
}

/**
 * Persist a token in storage
 *
 * When pickle key is present, will attempt to encrypt the token. If encryption fails (typically because
 * WebCrypto is unavailable), the key will be stored unencrypted.
 *
 * Stores in IndexedDB, falling back to localStorage.
 *
 * @param storageKey key used to store the token. Note: not an encryption key; rather a localstorage or indexeddb key.
 * @param tokenName Name of the token. Used in logging, but also used as an input when generating the actual AES key,
 *    so the same value must be provided to {@link tryDecryptToken} when decrypting.
 * @param token the token to store. When undefined, any existing token at the `storageKey` is removed from storage.
 * @param pickleKey Pickle key: used to derive the key used to encrypt token. If `undefined`, the token will be stored
 *    unencrypted.
 * @param hasTokenStorageKey Localstorage key for an item which stores whether we expect to have a token in indexeddb,
 *    eg "mx_has_access_token".
 */
async function persistTokenInStorage(storageKey, tokenName, token, pickleKey, hasTokenStorageKey) {
  // store whether we expect to find a token, to detect the case
  // where IndexedDB is blown away
  if (token) {
    localStorage.setItem(hasTokenStorageKey, "true");
  } else {
    localStorage.removeItem(hasTokenStorageKey);
  }
  if (pickleKey) {
    let encryptedToken;
    if (token) {
      try {
        // try to encrypt the access token using the pickle key
        const encrKey = await pickleKeyToAesKey(pickleKey);
        encryptedToken = await encryptAESSecretStorageItem(token, encrKey, tokenName);
        encrKey.fill(0);
      } catch (e) {
        // This is likely due to the browser not having WebCrypto or somesuch.
        // Warn about it, but fall back to storing the unencrypted token.
        logger.warn(`Could not encrypt token for ${tokenName}`, e);
      }
    }
    try {
      // Save either the encrypted access token, or the plain access
      // token if there is no token or we were unable to encrypt (e.g. if the browser doesn't
      // have WebCrypto).
      await StorageAccess.idbSave("account", storageKey, encryptedToken || token);
    } catch {
      // if we couldn't save to indexedDB, fall back to localStorage.  We
      // store the access token unencrypted since localStorage only saves
      // strings.
      if (!!token) {
        localStorage.setItem(storageKey, token);
      } else {
        localStorage.removeItem(storageKey);
      }
    }
  } else {
    try {
      await StorageAccess.idbSave("account", storageKey, token);
    } catch {
      if (!!token) {
        localStorage.setItem(storageKey, token);
      } else {
        localStorage.removeItem(storageKey);
      }
    }
  }
}

/**
 * Wraps {@link persistTokenInStorage} with accessToken storage keys
 *
 * @param token - The token to store. When undefined, any existing accessToken is removed from storage.
 * @param pickleKey - Pickle key: used to derive the key used to encrypt token. If `undefined`, the token will be stored
 *    unencrypted.
 */
async function persistAccessTokenInStorage(token, pickleKey) {
  return persistTokenInStorage(ACCESS_TOKEN_STORAGE_KEY, ACCESS_TOKEN_IV, token, pickleKey, HAS_ACCESS_TOKEN_STORAGE_KEY);
}

/**
 * Wraps {@link persistTokenInStorage} with refreshToken storage keys.
 *
 * @param token - The token to store. When undefined, any existing refreshToken is removed from storage.
 * @param pickleKey - Pickle key: used to derive the key used to encrypt token. If `undefined`, the token will be stored
 *    unencrypted.
 */
async function persistRefreshTokenInStorage(token, pickleKey) {
  return persistTokenInStorage(REFRESH_TOKEN_STORAGE_KEY, REFRESH_TOKEN_IV, token, pickleKey, HAS_REFRESH_TOKEN_STORAGE_KEY);
}
;// ./src/utils/tokens/pickling.ts


















/*
Copyright 2024 New Vector Ltd.
Copyright 2020-2024 The Matrix.org Foundation C.I.C.
Copyright 2018 New Vector Ltd
Copyright 2016 Aviral Dasgupta
Copyright 2016 OpenMarket Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// Note: we don't import the base64 utils from `matrix-js-sdk/src/matrix` because this file
// is used by Element Web's service worker, and importing `matrix` brings in ~1mb of stuff
// we don't need. Instead, we ignore the import restriction and only bring in what we actually
// need.
// Note: `base64` is not public in the js-sdk, so if it changes/breaks, that's on us. We should
// be okay with our frequent tests, locked versioning, etc though. We'll pick up problems well
// before release.
// eslint-disable-next-line no-restricted-imports



/**
 * Encrypted format of a pickle key, as stored in IndexedDB.
 */

/**
 * Calculates the `additionalData` for the AES-GCM key used by the pickling processes. This
 * additional data is *not* encrypted, but *is* authenticated. The additional data is constructed
 * from the user ID and device ID provided.
 *
 * The later-constructed pickle key is used to decrypt values, such as access tokens, from IndexedDB.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams for more information on
 * `additionalData`.
 *
 * @param {string} userId The user ID who owns the pickle key.
 * @param {string} deviceId The device ID which owns the pickle key.
 * @return {Uint8Array} The additional data as a Uint8Array.
 */
function getPickleAdditionalData(userId, deviceId) {
  const additionalData = new Uint8Array(userId.length + deviceId.length + 1);
  for (let i = 0; i < userId.length; i++) {
    additionalData[i] = userId.charCodeAt(i);
  }
  additionalData[userId.length] = 124; // "|"
  for (let i = 0; i < deviceId.length; i++) {
    additionalData[userId.length + 1 + i] = deviceId.charCodeAt(i);
  }
  return additionalData;
}

/**
 * Encrypt the given pickle key, ready for storage in the database.
 *
 * @param pickleKey - The key to be encrypted.
 * @param userId - The user ID the pickle key belongs to.
 * @param deviceId - The device ID the pickle key belongs to.
 *
 * @returns Data object ready for storing in indexeddb.
 */
async function encryptPickleKey(pickleKey, userId, deviceId) {
  var _crypto;
  if (!((_crypto = crypto) !== null && _crypto !== void 0 && _crypto.subtle)) {
    return undefined;
  }
  const cryptoKey = await crypto.subtle.generateKey({
    name: "AES-GCM",
    length: 256
  }, false, ["encrypt", "decrypt"]);
  const iv = new Uint8Array(32);
  crypto.getRandomValues(iv);
  const additionalData = getPickleAdditionalData(userId, deviceId);
  const encrypted = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv,
    additionalData
  }, cryptoKey, pickleKey);
  return {
    encrypted,
    iv,
    cryptoKey
  };
}

/**
 * Decrypts the provided data into a pickle key and base64-encodes it ready for use elsewhere.
 *
 * If `data` is undefined in part or in full, returns undefined.
 *
 *  If crypto functions are not available, returns undefined regardless of input.
 *
 * @param data An object containing the encrypted pickle key data: encrypted payload, initialization vector (IV), and crypto key. Typically loaded from indexedDB.
 * @param userId The user ID the pickle key belongs to.
 * @param deviceId The device ID the pickle key belongs to.
 * @returns A promise that resolves to the encoded pickle key, or undefined if the key cannot be built and encoded.
 */
async function buildAndEncodePickleKey(data, userId, deviceId) {
  var _crypto2;
  if (!((_crypto2 = crypto) !== null && _crypto2 !== void 0 && _crypto2.subtle)) {
    return undefined;
  }
  if (!data || !data.encrypted || !data.iv || !data.cryptoKey) {
    return undefined;
  }
  try {
    const additionalData = getPickleAdditionalData(userId, deviceId);
    const pickleKeyBuf = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv: data.iv,
      additionalData
    }, data.cryptoKey, data.encrypted);
    if (pickleKeyBuf) {
      return encodeUnpaddedBase64(new Uint8Array(pickleKeyBuf));
    }
  } catch {
    logger_logger.error("Error decrypting pickle key");
  }
  return undefined;
}
;// ./src/serviceworker/index.ts




/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




const serverSupportMap = {};
globalThis.addEventListener("install", event => {
  // We skipWaiting() to update the service worker more frequently, particularly in development environments.
  // @ts-expect-error - service worker types are not available. See 'fetch' event handler.
  event.waitUntil(skipWaiting());
});
globalThis.addEventListener("activate", event => {
  // We force all clients to be under our control, immediately. This could be old tabs.
  // @ts-expect-error - service worker types are not available. See 'fetch' event handler.
  event.waitUntil(clients.claim());
});

// @ts-expect-error - the service worker types conflict with the DOM types available through TypeScript. Many hours
// have been spent trying to convince the type system that there's no actual conflict, but it has yet to work. Instead
// of trying to make it do the thing, we force-cast to something close enough where we can (and ignore errors otherwise).
globalThis.addEventListener("fetch", event => {
  // This is the authenticated media (MSC3916) check, proxying what was unauthenticated to the authenticated variants.

  if (event.request.method !== "GET") {
    return; // not important to us
  }

  // Note: ideally we'd keep the request headers etc, but in practice we can't even see those details.
  // See https://stackoverflow.com/a/59152482
  const url = new URL(event.request.url);

  // We only intercept v3 download and thumbnail requests as presumably everything else is deliberate.
  // For example, `/_matrix/media/unstable` or `/_matrix/media/v3/preview_url` are something well within
  // the control of the application, and appear to be choices made at a higher level than us.
  if (!url.pathname.startsWith("/_matrix/media/v3/download") && !url.pathname.startsWith("/_matrix/media/v3/thumbnail")) {
    return; // not a URL we care about
  }

  // We need to call respondWith synchronously, otherwise we may never execute properly. This means
  // later on we need to proxy the request through if it turns out the server doesn't support authentication.
  event.respondWith((async _auth => {
    let auth;
    try {
      // Figure out which homeserver we're communicating with
      const csApi = url.origin;

      // Add jitter to reduce request spam, particularly to `/versions` on initial page load
      await new Promise(resolve => setTimeout(() => resolve(), Math.random() * 10));

      // Locate the access token and homeserver url
      // @ts-expect-error - service worker types are not available. See 'fetch' event handler.
      const client = await globalThis.clients.get(event.clientId);
      auth = await getAuthData(client);

      // Is this request actually going to the homeserver?
      const isRequestToHomeServer = url.origin === new URL(auth.homeserver).origin;
      if (!isRequestToHomeServer) {
        throw new Error("Request appears to be for media endpoint but wrong homeserver!");
      }

      // Update or populate the server support map using a (usually) authenticated `/versions` call.
      await tryUpdateServerSupportMap(csApi, auth.accessToken);

      // If we have server support (and a means of authentication), rewrite the URL to use MSC3916 endpoints.
      if (serverSupportMap[csApi].supportsAuthedMedia && auth.accessToken) {
        url.href = url.href.replace(/\/media\/v3\/(.*)\//, "/client/v1/media/$1/");
      } // else by default we make no changes
    } catch (err) {
      // In case of some error, we stay safe by not adding the access-token to the request.
      auth = undefined;
      console.error("SW: Error in request rewrite.", err);
    }

    // Add authentication and send the request. We add authentication even if MSC3916 endpoints aren't
    // being used to ensure patches like this work:
    // https://github.com/matrix-org/synapse/commit/2390b66bf0ec3ff5ffb0c7333f3c9b239eeb92bb
    return fetch(url, fetchConfigForToken((_auth = auth) === null || _auth === void 0 ? void 0 : _auth.accessToken));
  })());
});
async function tryUpdateServerSupportMap(clientApiUrl, accessToken) {
  var _serverSupportMap$cli, _versions$versions;
  // only update if we don't know about it, or if the data is stale
  if (((_serverSupportMap$cli = serverSupportMap[clientApiUrl]) === null || _serverSupportMap$cli === void 0 ? void 0 : _serverSupportMap$cli.cacheExpiryTimeMs) > new Date().getTime()) {
    return; // up to date
  }
  const config = fetchConfigForToken(accessToken);
  const versions = await (await fetch(`${clientApiUrl}/_matrix/client/versions`, config)).json();
  console.log(`[ServiceWorker] /versions response for '${clientApiUrl}': ${JSON.stringify(versions)}`);
  serverSupportMap[clientApiUrl] = {
    supportsAuthedMedia: Boolean(versions === null || versions === void 0 || (_versions$versions = versions.versions) === null || _versions$versions === void 0 ? void 0 : _versions$versions.includes("v1.11")),
    cacheExpiryTimeMs: new Date().getTime() + 2 * 60 * 60 * 1000 // 2 hours from now
  };
  console.log(`[ServiceWorker] serverSupportMap update for '${clientApiUrl}': ${JSON.stringify(serverSupportMap[clientApiUrl])}`);
}

// Ideally we'd use the `Client` interface for `client`, but since it's not available (see 'fetch' listener), we use
// unknown for now and force-cast it to something close enough later.
async function getAuthData(client) {
  // Access tokens are encrypted at rest, so while we can grab the "access token", we'll need to do work to get the
  // real thing.
  const encryptedAccessToken = await idbLoad("account", "mx_access_token");

  // We need to extract a user ID and device ID from localstorage, which means calling WebPlatform for the
  // read operation. Service workers can't access localstorage.
  const {
    userId,
    deviceId,
    homeserver
  } = await askClientForUserIdParams(client);

  // ... and this is why we need the user ID and device ID: they're index keys for the pickle key table.
  const pickleKeyData = await idbLoad("pickleKey", [userId, deviceId]);
  if (pickleKeyData && (!pickleKeyData.encrypted || !pickleKeyData.iv || !pickleKeyData.cryptoKey)) {
    throw new Error("SW: Invalid pickle key loaded - ignoring");
  }

  // Finally, try decrypting the thing and return that. This may fail, but that's okay.
  try {
    const pickleKey = await buildAndEncodePickleKey(pickleKeyData, userId, deviceId);
    const accessToken = await tryDecryptToken(pickleKey, encryptedAccessToken, ACCESS_TOKEN_IV);
    return {
      accessToken,
      homeserver
    };
  } catch (e) {
    throw new Error("SW: Error decrypting access token.", {
      cause: e
    });
  }
}

// Ideally we'd use the `Client` interface for `client`, but since it's not available (see 'fetch' listener), we use
// unknown for now and force-cast it to something close enough inside the function.
async function askClientForUserIdParams(client) {
  return new Promise((resolve, reject) => {
    // Dev note: this uses postMessage, which is a highly insecure channel. postMessage is typically visible to other
    // tabs, windows, browser extensions, etc, making it far from ideal for sharing sensitive information. This is
    // why our service worker calculates/decrypts the access token manually: we don't want the user's access token
    // to be available to (potentially) malicious listeners. We do require some information for that decryption to
    // work though, and request that in the least sensitive way possible.
    //
    // We could also potentially use some version of TLS to encrypt postMessage, though that feels way more involved
    // than just reading IndexedDB ourselves.

    // Avoid stalling the tab in case something goes wrong.
    const timeoutId = setTimeout(() => reject(new Error("timeout in postMessage")), 1000);

    // We don't need particularly good randomness here - we just use this to generate a request ID, so we know
    // which postMessage reply is for our active request.
    const responseKey = Math.random().toString(36);

    // Add the listener first, just in case the tab is *really* fast.
    const listener = event => {
      var _event$data;
      if (((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.responseKey) !== responseKey) return; // not for us
      clearTimeout(timeoutId); // do this as soon as possible, avoiding a race between resolve and reject.
      resolve(event.data); // "unblock" the remainder of the thread, if that were such a thing in JavaScript.
      globalThis.removeEventListener("message", listener); // cleanup, since we're not going to do anything else.
    };
    globalThis.addEventListener("message", listener);

    // Ask the tab for the information we need. This is handled by WebPlatform.
    client.postMessage({
      responseKey,
      type: "userinfo"
    });
  });
}
function fetchConfigForToken(accessToken) {
  if (!accessToken) {
    return undefined; // no headers/config to specify
  }
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
}
})();

/******/ })()
;
//# sourceMappingURL=sw.js.map