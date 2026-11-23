(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gridviz"));
	else if(typeof define === 'function' && define.amd)
		define(["gridviz"], factory);
	else if(typeof exports === 'object')
		exports["gridviz"] = factory(require("gridviz"));
	else
		root["gridviz"] = root["gridviz"] || {}, root["gridviz"]["tiff"] = factory(root["gridviz"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_gridviz__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "gridviz"
/*!**********************************************************************************************!*\
  !*** external {"root":"gridviz","commonjs":"gridviz","commonjs2":"gridviz","amd":"gridviz"} ***!
  \**********************************************************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_gridviz__;

/***/ },

/***/ "?cdec"
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
() {

/* (ignored) */

/***/ },

/***/ "?753a"
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
() {

/* (ignored) */

/***/ },

/***/ "?4e4d"
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
() {

/* (ignored) */

/***/ },

/***/ "?662e"
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
() {

/* (ignored) */

/***/ },

/***/ "./node_modules/@petamoriken/float16/src/DataView.mjs"
/*!************************************************************!*\
  !*** ./node_modules/@petamoriken/float16/src/DataView.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFloat16: () => (/* binding */ getFloat16),
/* harmony export */   setFloat16: () => (/* binding */ setFloat16)
/* harmony export */ });
/* harmony import */ var _util_arrayIterator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_util/arrayIterator.mjs */ "./node_modules/@petamoriken/float16/src/_util/arrayIterator.mjs");
/* harmony import */ var _util_converter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_util/converter.mjs */ "./node_modules/@petamoriken/float16/src/_util/converter.mjs");
/* harmony import */ var _util_primordials_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_util/primordials.mjs */ "./node_modules/@petamoriken/float16/src/_util/primordials.mjs");




/**
 * returns an unsigned 16-bit float at the specified byte offset from the start of the DataView
 * @param {DataView} dataView
 * @param {number} byteOffset
 * @param {[boolean]} opts
 * @returns {number}
 */
function getFloat16(dataView, byteOffset, ...opts) {
  return (0,_util_converter_mjs__WEBPACK_IMPORTED_MODULE_1__.convertToNumber)(
    (0,_util_primordials_mjs__WEBPACK_IMPORTED_MODULE_2__.DataViewPrototypeGetUint16)(dataView, byteOffset, ...(0,_util_arrayIterator_mjs__WEBPACK_IMPORTED_MODULE_0__.safeIfNeeded)(opts))
  );
}

/**
 * stores an unsigned 16-bit float value at the specified byte offset from the start of the DataView
 * @param {DataView} dataView
 * @param {number} byteOffset
 * @param {number} value
 * @param {[boolean]} opts
 */
function setFloat16(dataView, byteOffset, value, ...opts) {
  return (0,_util_primordials_mjs__WEBPACK_IMPORTED_MODULE_2__.DataViewPrototypeSetUint16)(
    dataView,
    byteOffset,
    (0,_util_converter_mjs__WEBPACK_IMPORTED_MODULE_1__.roundToFloat16Bits)(value),
    ...(0,_util_arrayIterator_mjs__WEBPACK_IMPORTED_MODULE_0__.safeIfNeeded)(opts)
  );
}


/***/ },

/***/ "./node_modules/@petamoriken/float16/src/_util/arrayIterator.mjs"
/*!***********************************************************************!*\
  !*** ./node_modules/@petamoriken/float16/src/_util/arrayIterator.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeIfNeeded: () => (/* binding */ safeIfNeeded),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primordials.mjs */ "./node_modules/@petamoriken/float16/src/_util/primordials.mjs");


/** @type {WeakMap<{}, IterableIterator<any>>} */
const arrayIterators = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeWeakMap();

const SafeIteratorPrototype = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ObjectCreate)(null, {
  next: {
    value: function next() {
      const arrayIterator = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.WeakMapPrototypeGet)(arrayIterators, this);
      return (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ArrayIteratorPrototypeNext)(arrayIterator);
    },
  },

  [_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.SymbolIterator]: {
    value: function values() {
      return this;
    },
  },
});

/**
 * Wrap the Array around the SafeIterator If Array.prototype [@@iterator] has been modified
 * @type {<T>(array: T[]) => Iterable<T>}
 */
function safeIfNeeded(array) {
  if (
    array[_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.SymbolIterator] === _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeArrayPrototypeSymbolIterator &&
    _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ArrayIteratorPrototype.next === _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ArrayIteratorPrototypeNext
  ) {
    return array;
  }

  const safe = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ObjectCreate)(SafeIteratorPrototype);
  (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.WeakMapPrototypeSet)(arrayIterators, safe, (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ArrayPrototypeSymbolIterator)(array));
  return safe;
}

/** @type {WeakMap<{}, Generator<any>>} */
const generators = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeWeakMap();

/** @see https://tc39.es/ecma262/#sec-%arrayiteratorprototype%-object */
const DummyArrayIteratorPrototype = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ObjectCreate)(_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.IteratorPrototype, {
  next: {
    value: function next() {
      const generator = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.WeakMapPrototypeGet)(generators, this);
      return (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.GeneratorPrototypeNext)(generator);
    },
    writable: true,
    configurable: true,
  },
});

for (const key of (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ReflectOwnKeys)(_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ArrayIteratorPrototype)) {
  // next method has already defined
  if (key === "next") {
    continue;
  }

  // Copy ArrayIteratorPrototype descriptors to DummyArrayIteratorPrototype
  ;(0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ObjectDefineProperty)(DummyArrayIteratorPrototype, key, (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ReflectGetOwnPropertyDescriptor)(_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ArrayIteratorPrototype, key));
}

/**
 * Wrap the Generator around the dummy ArrayIterator
 * @type {<T>(generator: Generator<T>) => IterableIterator<T>}
 */
function wrap(generator) {
  const dummy = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.ObjectCreate)(DummyArrayIteratorPrototype);
  (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.WeakMapPrototypeSet)(generators, dummy, generator);
  return dummy;
}


/***/ },

/***/ "./node_modules/@petamoriken/float16/src/_util/converter.mjs"
/*!*******************************************************************!*\
  !*** ./node_modules/@petamoriken/float16/src/_util/converter.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToNumber: () => (/* binding */ convertToNumber),
/* harmony export */   roundToFloat16: () => (/* binding */ roundToFloat16),
/* harmony export */   roundToFloat16Bits: () => (/* binding */ roundToFloat16Bits)
/* harmony export */ });
/* harmony import */ var _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primordials.mjs */ "./node_modules/@petamoriken/float16/src/_util/primordials.mjs");


const INVERSE_OF_EPSILON = 1 / _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.EPSILON;

/**
 * rounds to the nearest value;
 * if the number falls midway, it is rounded to the nearest value with an even least significant digit
 * @param {number} num
 * @returns {number}
 */
function roundTiesToEven(num) {
  return (num + INVERSE_OF_EPSILON) - INVERSE_OF_EPSILON;
}

const FLOAT16_MIN_VALUE = 6.103515625e-05;
const FLOAT16_MAX_VALUE = 65504;
const FLOAT16_EPSILON = 0.0009765625;

const FLOAT16_EPSILON_MULTIPLIED_BY_FLOAT16_MIN_VALUE = FLOAT16_EPSILON * FLOAT16_MIN_VALUE;
const FLOAT16_EPSILON_DEVIDED_BY_EPSILON = FLOAT16_EPSILON * INVERSE_OF_EPSILON;

/**
 * round a number to a half float number
 * @param {unknown} num - double float
 * @returns {number} half float number
 */
function roundToFloat16(num) {
  const number = +num;

  // NaN, Infinity, -Infinity, 0, -0
  if (!(0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NumberIsFinite)(number) || number === 0) {
    return number;
  }

  // finite except 0, -0
  const sign = number > 0 ? 1 : -1;
  const absolute = (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.MathAbs)(number);

  // small number
  if (absolute < FLOAT16_MIN_VALUE) {
    return sign * roundTiesToEven(absolute / FLOAT16_EPSILON_MULTIPLIED_BY_FLOAT16_MIN_VALUE) * FLOAT16_EPSILON_MULTIPLIED_BY_FLOAT16_MIN_VALUE;
  }

  const temp = (1 + FLOAT16_EPSILON_DEVIDED_BY_EPSILON) * absolute;
  const result = temp - (temp - absolute);

  // large number
  if (result > FLOAT16_MAX_VALUE || (0,_primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NumberIsNaN)(result)) {
    return sign * Infinity;
  }

  return sign * result;
}

// base algorithm: http://fox-toolkit.org/ftp/fasthalffloatconversion.pdf

const buffer = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeArrayBuffer(4);
const floatView = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeFloat32Array(buffer);
const uint32View = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeUint32Array(buffer);

const baseTable = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeUint16Array(512);
const shiftTable = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeUint8Array(512);

for (let i = 0; i < 256; ++i) {
  const e = i - 127;

  // very small number (0, -0)
  if (e < -24) {
    baseTable[i]         = 0x0000;
    baseTable[i | 0x100] = 0x8000;
    shiftTable[i]         = 24;
    shiftTable[i | 0x100] = 24;

  // small number (denorm)
  } else if (e < -14) {
    baseTable[i]         =  0x0400 >> (-e - 14);
    baseTable[i | 0x100] = (0x0400 >> (-e - 14)) | 0x8000;
    shiftTable[i]         = -e - 1;
    shiftTable[i | 0x100] = -e - 1;

  // normal number
  } else if (e <= 15) {
    baseTable[i]         =  (e + 15) << 10;
    baseTable[i | 0x100] = ((e + 15) << 10) | 0x8000;
    shiftTable[i]         = 13;
    shiftTable[i | 0x100] = 13;

  // large number (Infinity, -Infinity)
  } else if (e < 128) {
    baseTable[i]         = 0x7c00;
    baseTable[i | 0x100] = 0xfc00;
    shiftTable[i]         = 24;
    shiftTable[i | 0x100] = 24;

  // stay (NaN, Infinity, -Infinity)
  } else {
    baseTable[i]         = 0x7c00;
    baseTable[i | 0x100] = 0xfc00;
    shiftTable[i]         = 13;
    shiftTable[i | 0x100] = 13;
  }
}

/**
 * round a number to a half float number bits
 * @param {unknown} num - double float
 * @returns {number} half float number bits
 */
function roundToFloat16Bits(num) {
  floatView[0] = roundToFloat16(num);
  const f = uint32View[0];
  const e = (f >> 23) & 0x1ff;
  return baseTable[e] + ((f & 0x007fffff) >> shiftTable[e]);
}

const mantissaTable = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeUint32Array(2048);
for (let i = 1; i < 1024; ++i) {
  let m = i << 13; // zero pad mantissa bits
  let e = 0; // zero exponent

  // normalized
  while ((m & 0x00800000) === 0) {
    m <<= 1;
    e -= 0x00800000; // decrement exponent
  }

  m &= ~0x00800000; // clear leading 1 bit
  e += 0x38800000; // adjust bias

  mantissaTable[i] = m | e;
}
for (let i = 1024; i < 2048; ++i) {
  mantissaTable[i] = 0x38000000 + ((i - 1024) << 13);
}

const exponentTable = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeUint32Array(64);
for (let i = 1; i < 31; ++i) {
  exponentTable[i] = i << 23;
}
exponentTable[31] = 0x47800000;
exponentTable[32] = 0x80000000;
for (let i = 33; i < 63; ++i) {
  exponentTable[i] = 0x80000000 + ((i - 32) << 23);
}
exponentTable[63] = 0xc7800000;

const offsetTable = new _primordials_mjs__WEBPACK_IMPORTED_MODULE_0__.NativeUint16Array(64);
for (let i = 1; i < 64; ++i) {
  if (i !== 32) {
    offsetTable[i] = 1024;
  }
}

/**
 * convert a half float number bits to a number
 * @param {number} float16bits - half float number bits
 * @returns {number} double float
 */
function convertToNumber(float16bits) {
  const i = float16bits >> 10;
  uint32View[0] = mantissaTable[offsetTable[i] + (float16bits & 0x3ff)] + exponentTable[i];
  return floatView[0];
}


/***/ },

/***/ "./node_modules/@petamoriken/float16/src/_util/messages.mjs"
/*!******************************************************************!*\
  !*** ./node_modules/@petamoriken/float16/src/_util/messages.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER: () => (/* binding */ ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER),
/* harmony export */   CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT: () => (/* binding */ CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT),
/* harmony export */   CANNOT_MIX_BIGINT_AND_OTHER_TYPES: () => (/* binding */ CANNOT_MIX_BIGINT_AND_OTHER_TYPES),
/* harmony export */   DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH: () => (/* binding */ DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH),
/* harmony export */   ITERATOR_PROPERTY_IS_NOT_CALLABLE: () => (/* binding */ ITERATOR_PROPERTY_IS_NOT_CALLABLE),
/* harmony export */   OFFSET_IS_OUT_OF_BOUNDS: () => (/* binding */ OFFSET_IS_OUT_OF_BOUNDS),
/* harmony export */   REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE: () => (/* binding */ REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE),
/* harmony export */   SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT: () => (/* binding */ SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT),
/* harmony export */   THE_COMPARISON_FUNCTION_MUST_BE_EITHER_A_FUNCTION_OR_UNDEFINED: () => (/* binding */ THE_COMPARISON_FUNCTION_MUST_BE_EITHER_A_FUNCTION_OR_UNDEFINED),
/* harmony export */   THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT: () => (/* binding */ THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT),
/* harmony export */   THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY: () => (/* binding */ THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY),
/* harmony export */   THIS_IS_NOT_AN_OBJECT: () => (/* binding */ THIS_IS_NOT_AN_OBJECT),
/* harmony export */   THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT: () => (/* binding */ THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT)
/* harmony export */ });
const THIS_IS_NOT_AN_OBJECT = "This is not an object";
const THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT = "This is not a Float16Array object";
const THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY =
  "This constructor is not a subclass of Float16Array";
const THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT =
  "The constructor property value is not an object";
const SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT =
  "Species constructor didn't return TypedArray object";
const DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH =
  "Derived constructor created TypedArray object which was too small length";
const ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER =
  "Attempting to access detached ArrayBuffer";
const CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT =
  "Cannot convert undefined or null to object";
const CANNOT_MIX_BIGINT_AND_OTHER_TYPES =
  "Cannot mix BigInt and other types, use explicit conversions";
const ITERATOR_PROPERTY_IS_NOT_CALLABLE = "@@iterator property is not callable";
const REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE =
  "Reduce of empty array with no initial value";
const THE_COMPARISON_FUNCTION_MUST_BE_EITHER_A_FUNCTION_OR_UNDEFINED =
  "The comparison function must be either a function or undefined";
const OFFSET_IS_OUT_OF_BOUNDS = "Offset is out of bounds";


/***/ },

/***/ "./node_modules/@petamoriken/float16/src/_util/primordials.mjs"
/*!*********************************************************************!*\
  !*** ./node_modules/@petamoriken/float16/src/_util/primordials.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayBufferIsView: () => (/* binding */ ArrayBufferIsView),
/* harmony export */   ArrayBufferPrototypeGetByteLength: () => (/* binding */ ArrayBufferPrototypeGetByteLength),
/* harmony export */   ArrayBufferPrototypeSlice: () => (/* binding */ ArrayBufferPrototypeSlice),
/* harmony export */   ArrayIsArray: () => (/* binding */ ArrayIsArray),
/* harmony export */   ArrayIteratorPrototype: () => (/* binding */ ArrayIteratorPrototype),
/* harmony export */   ArrayIteratorPrototypeNext: () => (/* binding */ ArrayIteratorPrototypeNext),
/* harmony export */   ArrayPrototypeJoin: () => (/* binding */ ArrayPrototypeJoin),
/* harmony export */   ArrayPrototypePush: () => (/* binding */ ArrayPrototypePush),
/* harmony export */   ArrayPrototypeSymbolIterator: () => (/* binding */ ArrayPrototypeSymbolIterator),
/* harmony export */   ArrayPrototypeToLocaleString: () => (/* binding */ ArrayPrototypeToLocaleString),
/* harmony export */   DataViewPrototypeGetUint16: () => (/* binding */ DataViewPrototypeGetUint16),
/* harmony export */   DataViewPrototypeSetUint16: () => (/* binding */ DataViewPrototypeSetUint16),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   GeneratorPrototypeNext: () => (/* binding */ GeneratorPrototypeNext),
/* harmony export */   IteratorPrototype: () => (/* binding */ IteratorPrototype),
/* harmony export */   MAX_SAFE_INTEGER: () => (/* binding */ MAX_SAFE_INTEGER),
/* harmony export */   MathAbs: () => (/* binding */ MathAbs),
/* harmony export */   MathTrunc: () => (/* binding */ MathTrunc),
/* harmony export */   NativeArrayBuffer: () => (/* binding */ NativeArrayBuffer),
/* harmony export */   NativeArrayPrototypeSymbolIterator: () => (/* binding */ NativeArrayPrototypeSymbolIterator),
/* harmony export */   NativeFloat32Array: () => (/* binding */ NativeFloat32Array),
/* harmony export */   NativeObject: () => (/* binding */ NativeObject),
/* harmony export */   NativeProxy: () => (/* binding */ NativeProxy),
/* harmony export */   NativeRangeError: () => (/* binding */ NativeRangeError),
/* harmony export */   NativeSharedArrayBuffer: () => (/* binding */ NativeSharedArrayBuffer),
/* harmony export */   NativeTypeError: () => (/* binding */ NativeTypeError),
/* harmony export */   NativeTypedArrayPrototypeSymbolIterator: () => (/* binding */ NativeTypedArrayPrototypeSymbolIterator),
/* harmony export */   NativeUint16Array: () => (/* binding */ NativeUint16Array),
/* harmony export */   NativeUint32Array: () => (/* binding */ NativeUint32Array),
/* harmony export */   NativeUint8Array: () => (/* binding */ NativeUint8Array),
/* harmony export */   NativeWeakMap: () => (/* binding */ NativeWeakMap),
/* harmony export */   NativeWeakSet: () => (/* binding */ NativeWeakSet),
/* harmony export */   NumberIsFinite: () => (/* binding */ NumberIsFinite),
/* harmony export */   NumberIsNaN: () => (/* binding */ NumberIsNaN),
/* harmony export */   ObjectCreate: () => (/* binding */ ObjectCreate),
/* harmony export */   ObjectDefineProperty: () => (/* binding */ ObjectDefineProperty),
/* harmony export */   ObjectFreeze: () => (/* binding */ ObjectFreeze),
/* harmony export */   ObjectHasOwn: () => (/* binding */ ObjectHasOwn),
/* harmony export */   ObjectIs: () => (/* binding */ ObjectIs),
/* harmony export */   ObjectPrototype__lookupGetter__: () => (/* binding */ ObjectPrototype__lookupGetter__),
/* harmony export */   ReflectApply: () => (/* binding */ ReflectApply),
/* harmony export */   ReflectConstruct: () => (/* binding */ ReflectConstruct),
/* harmony export */   ReflectDefineProperty: () => (/* binding */ ReflectDefineProperty),
/* harmony export */   ReflectGet: () => (/* binding */ ReflectGet),
/* harmony export */   ReflectGetOwnPropertyDescriptor: () => (/* binding */ ReflectGetOwnPropertyDescriptor),
/* harmony export */   ReflectGetPrototypeOf: () => (/* binding */ ReflectGetPrototypeOf),
/* harmony export */   ReflectHas: () => (/* binding */ ReflectHas),
/* harmony export */   ReflectOwnKeys: () => (/* binding */ ReflectOwnKeys),
/* harmony export */   ReflectSet: () => (/* binding */ ReflectSet),
/* harmony export */   ReflectSetPrototypeOf: () => (/* binding */ ReflectSetPrototypeOf),
/* harmony export */   SharedArrayBufferPrototypeGetByteLength: () => (/* binding */ SharedArrayBufferPrototypeGetByteLength),
/* harmony export */   SymbolFor: () => (/* binding */ SymbolFor),
/* harmony export */   SymbolIterator: () => (/* binding */ SymbolIterator),
/* harmony export */   SymbolSpecies: () => (/* binding */ SymbolSpecies),
/* harmony export */   SymbolToStringTag: () => (/* binding */ SymbolToStringTag),
/* harmony export */   TypedArray: () => (/* binding */ TypedArray),
/* harmony export */   TypedArrayPrototype: () => (/* binding */ TypedArrayPrototype),
/* harmony export */   TypedArrayPrototypeCopyWithin: () => (/* binding */ TypedArrayPrototypeCopyWithin),
/* harmony export */   TypedArrayPrototypeEntries: () => (/* binding */ TypedArrayPrototypeEntries),
/* harmony export */   TypedArrayPrototypeFill: () => (/* binding */ TypedArrayPrototypeFill),
/* harmony export */   TypedArrayPrototypeGetBuffer: () => (/* binding */ TypedArrayPrototypeGetBuffer),
/* harmony export */   TypedArrayPrototypeGetByteOffset: () => (/* binding */ TypedArrayPrototypeGetByteOffset),
/* harmony export */   TypedArrayPrototypeGetLength: () => (/* binding */ TypedArrayPrototypeGetLength),
/* harmony export */   TypedArrayPrototypeGetSymbolToStringTag: () => (/* binding */ TypedArrayPrototypeGetSymbolToStringTag),
/* harmony export */   TypedArrayPrototypeKeys: () => (/* binding */ TypedArrayPrototypeKeys),
/* harmony export */   TypedArrayPrototypeReverse: () => (/* binding */ TypedArrayPrototypeReverse),
/* harmony export */   TypedArrayPrototypeSet: () => (/* binding */ TypedArrayPrototypeSet),
/* harmony export */   TypedArrayPrototypeSlice: () => (/* binding */ TypedArrayPrototypeSlice),
/* harmony export */   TypedArrayPrototypeSort: () => (/* binding */ TypedArrayPrototypeSort),
/* harmony export */   TypedArrayPrototypeSubarray: () => (/* binding */ TypedArrayPrototypeSubarray),
/* harmony export */   TypedArrayPrototypeValues: () => (/* binding */ TypedArrayPrototypeValues),
/* harmony export */   Uint16ArrayFrom: () => (/* binding */ Uint16ArrayFrom),
/* harmony export */   WeakMapPrototypeGet: () => (/* binding */ WeakMapPrototypeGet),
/* harmony export */   WeakMapPrototypeHas: () => (/* binding */ WeakMapPrototypeHas),
/* harmony export */   WeakMapPrototypeSet: () => (/* binding */ WeakMapPrototypeSet),
/* harmony export */   WeakSetPrototypeAdd: () => (/* binding */ WeakSetPrototypeAdd),
/* harmony export */   WeakSetPrototypeHas: () => (/* binding */ WeakSetPrototypeHas)
/* harmony export */ });
/* harmony import */ var _messages_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.mjs */ "./node_modules/@petamoriken/float16/src/_util/messages.mjs");
/* eslint-disable no-restricted-globals, no-restricted-syntax */
/* global SharedArrayBuffer */



/** @type {<T extends (...args: any) => any>(target: T) => (thisArg: ThisType<T>, ...args: any[]) => any} */
function uncurryThis(target) {
  return (thisArg, ...args) => {
    return ReflectApply(target, thisArg, args);
  };
}

/** @type {(target: any, key: string | symbol) => (thisArg: any, ...args: any[]) => any} */
function uncurryThisGetter(target, key) {
  return uncurryThis(
    ReflectGetOwnPropertyDescriptor(
      target,
      key
    ).get
  );
}

// Reflect
const {
  apply: ReflectApply,
  construct: ReflectConstruct,
  defineProperty: ReflectDefineProperty,
  get: ReflectGet,
  getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor,
  getPrototypeOf: ReflectGetPrototypeOf,
  has: ReflectHas,
  ownKeys: ReflectOwnKeys,
  set: ReflectSet,
  setPrototypeOf: ReflectSetPrototypeOf,
} = Reflect;

// Proxy
const NativeProxy = Proxy;

// Number
const {
  EPSILON,
  MAX_SAFE_INTEGER,
  isFinite: NumberIsFinite,
  isNaN: NumberIsNaN,
} = Number;

// Symbol
const {
  iterator: SymbolIterator,
  species: SymbolSpecies,
  toStringTag: SymbolToStringTag,
  for: SymbolFor,
} = Symbol;

// Object
const NativeObject = Object;
const {
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  freeze: ObjectFreeze,
  is: ObjectIs,
} = NativeObject;
const ObjectPrototype = NativeObject.prototype;
/** @type {(object: object, key: PropertyKey) => Function | undefined} */
const ObjectPrototype__lookupGetter__ = /** @type {any} */ (ObjectPrototype).__lookupGetter__
  ? uncurryThis(/** @type {any} */ (ObjectPrototype).__lookupGetter__)
  : (object, key) => {
    if (object == null) {
      throw NativeTypeError(
        _messages_mjs__WEBPACK_IMPORTED_MODULE_0__.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT
      );
    }

    let target = NativeObject(object);
    do {
      const descriptor = ReflectGetOwnPropertyDescriptor(target, key);
      if (descriptor !== undefined) {
        if (ObjectHasOwn(descriptor, "get")) {
          return descriptor.get;
        }

        return;
      }
    } while ((target = ReflectGetPrototypeOf(target)) !== null);
  };
/** @type {(object: object, key: PropertyKey) => boolean} */
const ObjectHasOwn = /** @type {any} */ (NativeObject).hasOwn ||
  uncurryThis(ObjectPrototype.hasOwnProperty);

// Array
const NativeArray = Array;
const ArrayIsArray = NativeArray.isArray;
const ArrayPrototype = NativeArray.prototype;
/** @type {(array: ArrayLike<unknown>, separator?: string) => string} */
const ArrayPrototypeJoin = uncurryThis(ArrayPrototype.join);
/** @type {<T>(array: T[], ...items: T[]) => number} */
const ArrayPrototypePush = uncurryThis(ArrayPrototype.push);
/** @type {(array: ArrayLike<unknown>, ...opts: any[]) => string} */
const ArrayPrototypeToLocaleString = uncurryThis(
  ArrayPrototype.toLocaleString
);
const NativeArrayPrototypeSymbolIterator = ArrayPrototype[SymbolIterator];
/** @type {<T>(array: T[]) => IterableIterator<T>} */
const ArrayPrototypeSymbolIterator = uncurryThis(NativeArrayPrototypeSymbolIterator);

// Math
const {
  abs: MathAbs,
  trunc: MathTrunc,
} = Math;

// ArrayBuffer
const NativeArrayBuffer = ArrayBuffer;
const ArrayBufferIsView = NativeArrayBuffer.isView;
const ArrayBufferPrototype = NativeArrayBuffer.prototype;
/** @type {(buffer: ArrayBuffer, begin?: number, end?: number) => number} */
const ArrayBufferPrototypeSlice = uncurryThis(ArrayBufferPrototype.slice);
/** @type {(buffer: ArrayBuffer) => ArrayBuffer} */
const ArrayBufferPrototypeGetByteLength = uncurryThisGetter(ArrayBufferPrototype, "byteLength");

// SharedArrayBuffer
const NativeSharedArrayBuffer = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : null;
/** @type {(buffer: SharedArrayBuffer) => SharedArrayBuffer} */
const SharedArrayBufferPrototypeGetByteLength = NativeSharedArrayBuffer
  && uncurryThisGetter(NativeSharedArrayBuffer.prototype, "byteLength");

// TypedArray
/** @typedef {Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|Int8Array|Int16Array|Int32Array|Float32Array|Float64Array|BigUint64Array|BigInt64Array} TypedArray */
/** @type {any} */
const TypedArray = ReflectGetPrototypeOf(Uint8Array);
const TypedArrayFrom = TypedArray.from;
const TypedArrayPrototype = TypedArray.prototype;
const NativeTypedArrayPrototypeSymbolIterator = TypedArrayPrototype[SymbolIterator];
/** @type {(typedArray: TypedArray) => IterableIterator<number>} */
const TypedArrayPrototypeKeys = uncurryThis(TypedArrayPrototype.keys);
/** @type {(typedArray: TypedArray) => IterableIterator<number>} */
const TypedArrayPrototypeValues = uncurryThis(
  TypedArrayPrototype.values
);
/** @type {(typedArray: TypedArray) => IterableIterator<[number, number]>} */
const TypedArrayPrototypeEntries = uncurryThis(
  TypedArrayPrototype.entries
);
/** @type {(typedArray: TypedArray, array: ArrayLike<number>, offset?: number) => void} */
const TypedArrayPrototypeSet = uncurryThis(TypedArrayPrototype.set);
/** @type {<T extends TypedArray>(typedArray: T) => T} */
const TypedArrayPrototypeReverse = uncurryThis(
  TypedArrayPrototype.reverse
);
/** @type {<T extends TypedArray>(typedArray: T, value: number, start?: number, end?: number) => T} */
const TypedArrayPrototypeFill = uncurryThis(TypedArrayPrototype.fill);
/** @type {<T extends TypedArray>(typedArray: T, target: number, start: number, end?: number) => T} */
const TypedArrayPrototypeCopyWithin = uncurryThis(
  TypedArrayPrototype.copyWithin
);
/** @type {<T extends TypedArray>(typedArray: T, compareFn?: (a: number, b: number) => number) => T} */
const TypedArrayPrototypeSort = uncurryThis(TypedArrayPrototype.sort);
/** @type {<T extends TypedArray>(typedArray: T, start?: number, end?: number) => T} */
const TypedArrayPrototypeSlice = uncurryThis(TypedArrayPrototype.slice);
/** @type {<T extends TypedArray>(typedArray: T, start?: number, end?: number) => T} */
const TypedArrayPrototypeSubarray = uncurryThis(
  TypedArrayPrototype.subarray
);
/** @type {((typedArray: TypedArray) => ArrayBuffer)} */
const TypedArrayPrototypeGetBuffer = uncurryThisGetter(
  TypedArrayPrototype,
  "buffer"
);
/** @type {((typedArray: TypedArray) => number)} */
const TypedArrayPrototypeGetByteOffset = uncurryThisGetter(
  TypedArrayPrototype,
  "byteOffset"
);
/** @type {((typedArray: TypedArray) => number)} */
const TypedArrayPrototypeGetLength = uncurryThisGetter(
  TypedArrayPrototype,
  "length"
);
/** @type {(target: unknown) => string} */
const TypedArrayPrototypeGetSymbolToStringTag = uncurryThisGetter(
  TypedArrayPrototype,
  SymbolToStringTag
);

// Uint8Array
const NativeUint8Array = Uint8Array;

// Uint16Array
const NativeUint16Array = Uint16Array;
/** @type {Uint16ArrayConstructor["from"]} */
const Uint16ArrayFrom = (...args) => {
  return ReflectApply(TypedArrayFrom, NativeUint16Array, args);
};

// Uint32Array
const NativeUint32Array = Uint32Array;

// Float32Array
const NativeFloat32Array = Float32Array;

// ArrayIterator
/** @type {any} */
const ArrayIteratorPrototype = ReflectGetPrototypeOf([][SymbolIterator]());
/** @type {<T>(arrayIterator: IterableIterator<T>) => IteratorResult<T>} */
const ArrayIteratorPrototypeNext = uncurryThis(ArrayIteratorPrototype.next);

// Generator
/** @type {<T = unknown, TReturn = any, TNext = unknown>(generator: Generator<T, TReturn, TNext>, value?: TNext) => T} */
const GeneratorPrototypeNext = uncurryThis((function* () {})().next);

// Iterator
const IteratorPrototype = ReflectGetPrototypeOf(ArrayIteratorPrototype);

// DataView
const DataViewPrototype = DataView.prototype;
/** @type {(dataView: DataView, byteOffset: number, littleEndian?: boolean) => number} */
const DataViewPrototypeGetUint16 = uncurryThis(
  DataViewPrototype.getUint16
);
/** @type {(dataView: DataView, byteOffset: number, value: number, littleEndian?: boolean) => void} */
const DataViewPrototypeSetUint16 = uncurryThis(
  DataViewPrototype.setUint16
);

// Error
const NativeTypeError = TypeError;
const NativeRangeError = RangeError;

// WeakSet
/**
 * Do not construct with arguments to avoid calling the "add" method
 * @type {{new <T extends {}>(): WeakSet<T>}}
 */
const NativeWeakSet = WeakSet;
const WeakSetPrototype = NativeWeakSet.prototype;
/** @type {<T extends {}>(set: WeakSet<T>, value: T) => Set<T>} */
const WeakSetPrototypeAdd = uncurryThis(WeakSetPrototype.add);
/** @type {<T extends {}>(set: WeakSet<T>, value: T) => boolean} */
const WeakSetPrototypeHas = uncurryThis(WeakSetPrototype.has);

// WeakMap
/**
 * Do not construct with arguments to avoid calling the "set" method
 * @type {{new <K extends {}, V>(): WeakMap<K, V>}}
 */
const NativeWeakMap = WeakMap;
const WeakMapPrototype = NativeWeakMap.prototype;
/** @type {<K extends {}, V>(weakMap: WeakMap<K, V>, key: K) => V} */
const WeakMapPrototypeGet = uncurryThis(WeakMapPrototype.get);
/** @type {<K extends {}, V>(weakMap: WeakMap<K, V>, key: K) => boolean} */
const WeakMapPrototypeHas = uncurryThis(WeakMapPrototype.has);
/** @type {<K extends {}, V>(weakMap: WeakMap<K, V>, key: K, value: V) => WeakMap} */
const WeakMapPrototypeSet = uncurryThis(WeakMapPrototype.set);


/***/ },

/***/ "./node_modules/geotiff/dist-module/compression/index.js"
/*!***************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/index.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDecoder: () => (/* binding */ addDecoder),
/* harmony export */   getDecoder: () => (/* binding */ getDecoder),
/* harmony export */   getDecoderParameters: () => (/* binding */ getDecoderParameters),
/* harmony export */   preferWorker: () => (/* binding */ preferWorker)
/* harmony export */ });
/** @import BaseDecoder, {BaseDecoderParameters} from "./basedecoder.js" */
/**
 * @typedef {Object} RegistryEntry
 * @property {function():Promise<typeof BaseDecoder>} importFn
 * @property {function(import("../imagefiledirectory.js").ImageFileDirectory):Promise<BaseDecoderParameters>} decoderParameterFn
 * @property {boolean} preferWorker
 */
/** @type {Map<number | undefined, RegistryEntry>} */
const registry = new Map();
/**
 * Default decoder parameter retrieval function
 * @param {import("../imagefiledirectory.js").ImageFileDirectory} fileDirectory
 * @returns {Promise<BaseDecoderParameters>}
 */
async function defaultDecoderParameterFn(fileDirectory) {
    const isTiled = !fileDirectory.hasTag('StripOffsets');
    return /** @type {BaseDecoderParameters} */ ({
        tileWidth: isTiled
            ? await fileDirectory.loadValue('TileWidth')
            : await fileDirectory.loadValue('ImageWidth'),
        tileHeight: isTiled
            ? await fileDirectory.loadValue('TileLength')
            : (await fileDirectory.loadValue('RowsPerStrip')
                || await fileDirectory.loadValue('ImageLength')),
        planarConfiguration: await fileDirectory.loadValue('PlanarConfiguration'),
        bitsPerSample: await fileDirectory.loadValue('BitsPerSample'),
        predictor: await fileDirectory.loadValue('Predictor') || 1,
    });
}
/**
 * Register a decoder for a specific compression method or a range of compressions
 * @param {(number|undefined|(number|undefined)[])} cases ids of the compression methods to register for
 * @param {function():Promise<typeof BaseDecoder>} importFn the function to import the decoder
 * @param {function(import("../imagefiledirectory.js").ImageFileDirectory):Promise<BaseDecoderParameters>} decoderParameterFn
 * @param {boolean} preferWorker_ Whether to prefer running the decoder in a worker
 */
function addDecoder(cases, importFn, decoderParameterFn = defaultDecoderParameterFn, preferWorker_ = true) {
    if (!Array.isArray(cases)) {
        cases = [cases]; // eslint-disable-line no-param-reassign
    }
    cases.forEach((c) => {
        registry.set(c, { importFn, decoderParameterFn, preferWorker: preferWorker_ });
    });
}
/**
 * Get the required decoder parameters for a specific compression method
 * @param {number|undefined} compression
 * @param {import('../imagefiledirectory.js').ImageFileDirectory} fileDirectory
 */
async function getDecoderParameters(compression, fileDirectory) {
    if (!registry.has(compression)) {
        throw new Error(`Unknown compression method identifier: ${compression}`);
    }
    const { decoderParameterFn } = /** @type {RegistryEntry} */ (registry.get(compression));
    return decoderParameterFn(fileDirectory);
}
/**
 * Get a decoder for a specific compression and parameters
 * @param {number} compression the compression method identifier
 * @param {BaseDecoderParameters} decoderParameters the parameters for the decoder
 * @returns {Promise<import('./basedecoder.js').default>}
 */
async function getDecoder(compression, decoderParameters) {
    if (!registry.has(compression)) {
        throw new Error(`Unknown compression method identifier: ${compression}`);
    }
    const { importFn } = /** @type {RegistryEntry} */ (registry.get(compression));
    const Decoder = await importFn();
    return new Decoder(decoderParameters);
}
/**
 * Whether to prefer running the decoder in a worker
 * @param {number|undefined} compression the compression method identifier
 * @returns {boolean}
 */
function preferWorker(compression) {
    if (!registry.has(compression)) {
        throw new Error(`Unknown compression method identifier: ${compression}`);
    }
    return /** @type {RegistryEntry} */ (registry.get(compression)).preferWorker;
}
const defaultDecoderDefinitions = [
    // No compression
    {
        cases: [undefined, 1],
        importFn: () => __webpack_require__.e(/*! import() */ "node_modules_geotiff_dist-module_compression_raw_js").then(() => (__webpack_require__(/*! ./raw.js */ "./node_modules/geotiff/dist-module/compression/raw.js"))).then((m) => m.default),
        preferWorker: false,
    },
    // LZW
    {
        cases: 5,
        importFn: () => __webpack_require__.e(/*! import() */ "node_modules_geotiff_dist-module_compression_lzw_js").then(() => (__webpack_require__(/*! ./lzw.js */ "./node_modules/geotiff/dist-module/compression/lzw.js"))).then((m) => m.default),
    },
    // Old-style JPEG
    {
        cases: 6,
        importFn: () => {
            throw new Error('old style JPEG compression is not supported.');
        },
    },
    // JPEG
    {
        cases: 7,
        importFn: () => __webpack_require__.e(/*! import() */ "vendors-node_modules_geotiff_dist-module_compression_jpeg_js").then(() => (__webpack_require__(/*! ./jpeg.js */ "./node_modules/geotiff/dist-module/compression/jpeg.js"))).then((m) => m.default),
        /**
         * @param {import("../imagefiledirectory.js").ImageFileDirectory} fileDirectory
         */
        decoderParameterFn: async (fileDirectory) => {
            return {
                ...await defaultDecoderParameterFn(fileDirectory),
                JPEGTables: await fileDirectory.loadValue('JPEGTables'),
            };
        },
    },
    // Deflate / Adobe Deflate
    {
        cases: [8, 32946],
        importFn: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_geotiff_dist-module_compression_basedecoder_js-node_modules_pako_dist_pa-20f471"), __webpack_require__.e("node_modules_geotiff_dist-module_compression_deflate_js")]).then(() => (__webpack_require__(/*! ./deflate.js */ "./node_modules/geotiff/dist-module/compression/deflate.js"))).then((m) => m.default),
    },
    // PackBits
    {
        cases: 32773,
        importFn: () => __webpack_require__.e(/*! import() */ "node_modules_geotiff_dist-module_compression_packbits_js").then(() => (__webpack_require__(/*! ./packbits.js */ "./node_modules/geotiff/dist-module/compression/packbits.js"))).then((m) => m.default),
    },
    // LERC
    {
        cases: 34887,
        importFn: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_geotiff_dist-module_compression_basedecoder_js-node_modules_pako_dist_pa-20f471"), __webpack_require__.e("vendors-node_modules_geotiff_dist-module_compression_lerc_js")]).then(() => (__webpack_require__(/*! ./lerc.js */ "./node_modules/geotiff/dist-module/compression/lerc.js")))
            .then(async (m) => {
            await m.zstd.init();
            return m;
        })
            .then((m) => m.default),
        /**
         * @param {import("../imagefiledirectory.js").ImageFileDirectory} fileDirectory
         */
        decoderParameterFn: async (fileDirectory) => {
            return {
                ...await defaultDecoderParameterFn(fileDirectory),
                LercParameters: await fileDirectory.loadValue('LercParameters'),
            };
        },
    },
    // zstd
    {
        cases: 50000,
        importFn: () => __webpack_require__.e(/*! import() */ "vendors-node_modules_geotiff_dist-module_compression_zstd_js").then(() => (__webpack_require__(/*! ./zstd.js */ "./node_modules/geotiff/dist-module/compression/zstd.js")))
            .then(async (m) => {
            await m.zstd.init();
            return m;
        })
            .then((m) => m.default),
    },
    // WebP Images
    {
        cases: 50001,
        importFn: () => __webpack_require__.e(/*! import() */ "node_modules_geotiff_dist-module_compression_webimage_js").then(() => (__webpack_require__(/*! ./webimage.js */ "./node_modules/geotiff/dist-module/compression/webimage.js"))).then((m) => m.default),
        /**
         * @param {import("../imagefiledirectory.js").ImageFileDirectory} fileDirectory
         */
        decoderParameterFn: async (fileDirectory) => {
            return {
                ...await defaultDecoderParameterFn(fileDirectory),
                samplesPerPixel: Number(await fileDirectory.loadValue('SamplesPerPixel')) || 4,
            };
        },
        preferWorker: false,
    },
];
// Add default decoders to registry (end-user may override with other implementations)
for (const decoderDefinition of defaultDecoderDefinitions) {
    const { cases, importFn, decoderParameterFn, preferWorker: preferWorker_ } = decoderDefinition;
    addDecoder(cases, importFn, decoderParameterFn, preferWorker_);
}
//# sourceMappingURL=index.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/dataslice.js"
/*!*******************************************************!*\
  !*** ./node_modules/geotiff/dist-module/dataslice.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataSlice)
/* harmony export */ });
class DataSlice {
    /**
     * @param {ArrayBufferLike} arrayBuffer
     * @param {number} sliceOffset
     * @param {boolean} littleEndian
     * @param {boolean} bigTiff
     */
    constructor(arrayBuffer, sliceOffset, littleEndian, bigTiff) {
        this._dataView = new DataView(arrayBuffer);
        this._sliceOffset = sliceOffset;
        this._littleEndian = littleEndian;
        this._bigTiff = bigTiff;
    }
    get sliceOffset() {
        return this._sliceOffset;
    }
    get sliceTop() {
        return this._sliceOffset + this.buffer.byteLength;
    }
    get littleEndian() {
        return this._littleEndian;
    }
    get bigTiff() {
        return this._bigTiff;
    }
    get buffer() {
        return this._dataView.buffer;
    }
    /**
     * @param {number} offset
     * @param {number} length
     * @returns {boolean}
     */
    covers(offset, length) {
        return this.sliceOffset <= offset && this.sliceTop >= offset + length;
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readUint8(offset) {
        return this._dataView.getUint8(offset - this._sliceOffset);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readInt8(offset) {
        return this._dataView.getInt8(offset - this._sliceOffset);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readUint16(offset) {
        return this._dataView.getUint16(offset - this._sliceOffset, this._littleEndian);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readInt16(offset) {
        return this._dataView.getInt16(offset - this._sliceOffset, this._littleEndian);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readUint32(offset) {
        return this._dataView.getUint32(offset - this._sliceOffset, this._littleEndian);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readInt32(offset) {
        return this._dataView.getInt32(offset - this._sliceOffset, this._littleEndian);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readFloat32(offset) {
        return this._dataView.getFloat32(offset - this._sliceOffset, this._littleEndian);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readFloat64(offset) {
        return this._dataView.getFloat64(offset - this._sliceOffset, this._littleEndian);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readUint64(offset) {
        const left = this.readUint32(offset);
        const right = this.readUint32(offset + 4);
        let combined;
        if (this._littleEndian) {
            combined = left + ((2 ** 32) * right);
            if (!Number.isSafeInteger(combined)) {
                throw new Error(`${combined} exceeds MAX_SAFE_INTEGER. `
                    + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
            }
            return combined;
        }
        combined = ((2 ** 32) * left) + right;
        if (!Number.isSafeInteger(combined)) {
            throw new Error(`${combined} exceeds MAX_SAFE_INTEGER. `
                + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
        }
        return combined;
    }
    /**
     * Adapted from https://stackoverflow.com/a/55338384/8060591
     * @param {number} offset
     * @returns {number}
     */
    readInt64(offset) {
        let value = 0;
        const isNegative = (this._dataView.getUint8(offset + (this._littleEndian ? 7 : 0)) & 0x80)
            > 0;
        let carrying = true;
        for (let i = 0; i < 8; i++) {
            let byte = this._dataView.getUint8(offset + (this._littleEndian ? i : 7 - i));
            if (isNegative) {
                if (carrying) {
                    if (byte !== 0x00) {
                        byte = ~(byte - 1) & 0xff;
                        carrying = false;
                    }
                }
                else {
                    byte = ~byte & 0xff;
                }
            }
            value += byte * (256 ** i);
        }
        if (isNegative) {
            value = -value;
        }
        return value;
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    readOffset(offset) {
        if (this._bigTiff) {
            return this.readUint64(offset);
        }
        return this.readUint32(offset);
    }
}
//# sourceMappingURL=dataslice.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/dataview64.js"
/*!********************************************************!*\
  !*** ./node_modules/geotiff/dist-module/dataview64.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataView64)
/* harmony export */ });
/* harmony import */ var _petamoriken_float16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @petamoriken/float16 */ "./node_modules/@petamoriken/float16/src/DataView.mjs");

class DataView64 {
    /**
     * @param {ArrayBufferLike} arrayBuffer
     */
    constructor(arrayBuffer) {
        this._dataView = new DataView(arrayBuffer);
    }
    get buffer() {
        return this._dataView.buffer;
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getUint64(offset, littleEndian) {
        const left = this.getUint32(offset, littleEndian);
        const right = this.getUint32(offset + 4, littleEndian);
        let combined;
        if (littleEndian) {
            combined = left + ((2 ** 32) * right);
            if (!Number.isSafeInteger(combined)) {
                throw new Error(`${combined} exceeds MAX_SAFE_INTEGER. `
                    + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
            }
            return combined;
        }
        combined = ((2 ** 32) * left) + right;
        if (!Number.isSafeInteger(combined)) {
            throw new Error(`${combined} exceeds MAX_SAFE_INTEGER. `
                + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
        }
        return combined;
    }
    /**
     * Adapted from https://stackoverflow.com/a/55338384/8060591
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getInt64(offset, littleEndian) {
        let value = 0;
        const isNegative = (this._dataView.getUint8(offset + (littleEndian ? 7 : 0)) & 0x80) > 0;
        let carrying = true;
        for (let i = 0; i < 8; i++) {
            let byte = this._dataView.getUint8(offset + (littleEndian ? i : 7 - i));
            if (isNegative) {
                if (carrying) {
                    if (byte !== 0x00) {
                        byte = ~(byte - 1) & 0xff;
                        carrying = false;
                    }
                }
                else {
                    byte = ~byte & 0xff;
                }
            }
            value += byte * (256 ** i);
        }
        if (isNegative) {
            value = -value;
        }
        return value;
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    getUint8(offset) {
        return this._dataView.getUint8(offset);
    }
    /**
     * @param {number} offset
     * @returns {number}
     */
    getInt8(offset) {
        return this._dataView.getInt8(offset);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getUint16(offset, littleEndian) {
        return this._dataView.getUint16(offset, littleEndian);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getInt16(offset, littleEndian) {
        return this._dataView.getInt16(offset, littleEndian);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getUint32(offset, littleEndian) {
        return this._dataView.getUint32(offset, littleEndian);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getInt32(offset, littleEndian) {
        return this._dataView.getInt32(offset, littleEndian);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getFloat16(offset, littleEndian) {
        return (0,_petamoriken_float16__WEBPACK_IMPORTED_MODULE_0__.getFloat16)(this._dataView, offset, littleEndian);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getFloat32(offset, littleEndian) {
        return this._dataView.getFloat32(offset, littleEndian);
    }
    /**
     * @param {number} offset
     * @param {boolean} littleEndian
     * @returns {number}
     */
    getFloat64(offset, littleEndian) {
        return this._dataView.getFloat64(offset, littleEndian);
    }
}
//# sourceMappingURL=dataview64.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/geotiff.js"
/*!*****************************************************!*\
  !*** ./node_modules/geotiff/dist-module/geotiff.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoTIFF: () => (/* binding */ GeoTIFF),
/* harmony export */   MultiGeoTIFF: () => (/* binding */ MultiGeoTIFF),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),
/* harmony export */   fromBlob: () => (/* binding */ fromBlob),
/* harmony export */   fromCustomClient: () => (/* binding */ fromCustomClient),
/* harmony export */   fromFile: () => (/* binding */ fromFile),
/* harmony export */   fromUrl: () => (/* binding */ fromUrl),
/* harmony export */   fromUrls: () => (/* binding */ fromUrls),
/* harmony export */   writeArrayBuffer: () => (/* binding */ writeArrayBuffer)
/* harmony export */ });
/* harmony import */ var _geotiffimage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geotiffimage.js */ "./node_modules/geotiff/dist-module/geotiffimage.js");
/* harmony import */ var _dataview64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataview64.js */ "./node_modules/geotiff/dist-module/dataview64.js");
/* harmony import */ var _dataslice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataslice.js */ "./node_modules/geotiff/dist-module/dataslice.js");
/* harmony import */ var _source_remote_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source/remote.js */ "./node_modules/geotiff/dist-module/source/remote.js");
/* harmony import */ var _source_arraybuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./source/arraybuffer.js */ "./node_modules/geotiff/dist-module/source/arraybuffer.js");
/* harmony import */ var _source_filereader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source/filereader.js */ "./node_modules/geotiff/dist-module/source/filereader.js");
/* harmony import */ var _source_file_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source/file.js */ "./node_modules/geotiff/dist-module/source/file.js");
/* harmony import */ var _imagefiledirectory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imagefiledirectory.js */ "./node_modules/geotiff/dist-module/imagefiledirectory.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./globals.js */ "./node_modules/geotiff/dist-module/globals.js");
/* harmony import */ var _geotiffwriter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geotiffwriter.js */ "./node_modules/geotiff/dist-module/geotiffwriter.js");
/** @module geotiff */
















/** @import { BaseSource } from './source/basesource.js' */







/**
 * @typedef {Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array}
 * TypedArray
 */
/**
 * @typedef {{ height:number, width: number }} Dimensions
 */
/**
 * The autogenerated docs are a little confusing here. The effective type is:
 *
 * `TypedArray & { height: number; width: number}`
 * @typedef {TypedArray & Dimensions} TypedArrayWithDimensions
 */
/**
 * The autogenerated docs are a little confusing here. The effective type is:
 *
 * `TypedArray[] & { height: number; width: number}`
 * @typedef {TypedArray[] & Dimensions} TypedArrayArrayWithDimensions
 */
/**
 * @typedef {Object} GeotiffWriterMetadata
 * @property {number | number[]} [ImageWidth]
 * @property {number | number[]} [ImageLength]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number | number[]} [BitsPerSample]
 * @property {number | number[]} [Compression]
 * @property {number | number[]} [PlanarConfiguration]
 * @property {number | number[]} [ExtraSamples]
 * @property {number | number[]} [PhotometricInterpretation]
 * @property {number | number[]} [SamplesPerPixel]
 * @property {number | number[]} [StripByteCounts]
 * @property {number[]} [ModelPixelScale]
 * @property {number[]} [ModelTransformation]
 * @property {number[]} [ModelTiepoint]
 * @property {number[]} [GeoKeyDirectory]
 * @property {string} [GeoAsciiParams]
 * @property {number[]} [GeoDoubleParams]
 * @property {number | number[]} [Orientation]
 * @property {number | number[]} [ResolutionUnit]
 * @property {number | number[]} [XPosition]
 * @property {number | number[]} [YPosition]
 * @property {number | number[]} [RowsPerStrip]
 * @property {number[]} [SampleFormat]
 * @property {number | number[]} [TileWidth]
 * @property {number | number[]} [TileLength]
 * @property {number[]} [TileOffsets]
 * @property {number[]} [TileByteCounts]
 * @property {string} [GDAL_NODATA]
 * @property {number | number[]} [GeographicTypeGeoKey]
 * @property {number | number[]} [ProjectedCSTypeGeoKey]
 * @property {string} [GeogCitationGeoKey]
 * @property {string} [GTCitationGeoKey]
 * @property {number | number[]} [GTModelTypeGeoKey]
 * @property {number | number[]} [GTRasterTypeGeoKey]
 */
/**
 *  The autogenerated docs are a little confusing here. The effective type is:
 *
 * `(TypedArray | TypedArray[]) & { height: number; width: number}`
 * @typedef {TypedArrayWithDimensions | TypedArrayArrayWithDimensions} ReadRasterResult
 */
/**
 * @typedef {Object} DecoderWorker
 * Use the {@link Pool.bindParameters} method to get a decoder worker for
 * a specific compression and its parameters.
 *
 * @property {(buffer: ArrayBufferLike) => Promise<ArrayBufferLike>} decode
 *   A function that takes a compressed buffer and returns a promise resolving to the decoded buffer.
 */
/**
 * @typedef {Object} ReadRastersOptions
 * @property {Array<number>} [window] the subset to read data from in pixels. Whole window if not specified.
 * @property {Array<number>} [samples] the selection of samples to read from. Default is all samples.
 *     All samples if not specified.
 * @property {Pool|null} [pool=null] The optional decoder pool to use.
 * @property {number} [width] The desired width of the output. When the width is not the
 *                                 same as the images, resampling will be performed.
 * @property {number} [height] The desired height of the output. When the width is not the
 *                                  same as the images, resampling will be performed.
 * @property {string} [resampleMethod='nearest'] The desired resampling method.
 * @property {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                                       to be aborted
 * @property {number|number[]} [fillValue] The value to use for parts of the image
 *     outside of the images extent. When multiple samples are requested and `interleave` is
 *     `false`, an array of fill values can be passed.
 * @property {boolean|true|false} [interleave] whether the data shall be read
 *     in one single array or separate arrays.
 */
/**
 * @typedef {Object} ReadRGBOptions
 * @property {Array<number>} [window] the subset to read data from in pixels. Whole window if not specified.
 * @property {Pool|null} [pool=null] The optional decoder pool to use.
 * @property {number} [width] The desired width of the output. When the width is no the
 *                                 same as the images, resampling will be performed.
 * @property {number} [height] The desired height of the output. When the width is no the
 *                                  same as the images, resampling will be performed.
 * @property {string} [resampleMethod='nearest'] The desired resampling method.
 * @property {boolean} [enableAlpha=false] Enable reading alpha channel if present.
 * @property {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                                       to be aborted
 * @property {boolean|true|false} [interleave] whether the data shall be read
 *     in one single array or separate arrays.
 */
/**
 * @typedef {Object} BlockedSourceOptions
 * @property {number} [blockSize] Block size for a BlockedSource.
 * @property {number} [cacheSize=100] The number of blocks to cache.
 */
/**
 * @typedef {Object} RemoteSourceOptions
 * @property {Record<string, string>} [headers={}] Additional headers to add to each request
 * @property {number} [maxRanges=0] Maximum number of ranges to request in a single HTTP request. 0 means no multi-range requests.
 * @property {boolean} [allowFullFile=false] Whether to allow full file responses when requesting ranges
 * @property {boolean} [forceXHR=false] When the Fetch API would be used, force using XMLHttpRequest instead.
 */
/**
 * @overload
 * @param {DataSlice} dataSlice
 * @param {0x0002} fieldType
 * @param {number} count
 * @param {number} offset
 * @returns {string}
 */
/**
 * @param {DataSlice} dataSlice
 * @param {import('./globals.js').FieldType} fieldType
 * @param {number} count
 * @param {number} offset
 * @returns {TypedArray|Array<number>|string}
 */
function getValues(dataSlice, fieldType, count, offset) {
    /** @type {TypedArray|Array<number>|null} */
    let values = null;
    let readMethod = null;
    const fieldTypeLength = (0,_globals_js__WEBPACK_IMPORTED_MODULE_8__.getFieldTypeSize)(fieldType);
    switch (fieldType) {
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.BYTE:
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.ASCII:
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.UNDEFINED:
            values = new Uint8Array(count);
            readMethod = dataSlice.readUint8;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SBYTE:
            values = new Int8Array(count);
            readMethod = dataSlice.readInt8;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SHORT:
            values = new Uint16Array(count);
            readMethod = dataSlice.readUint16;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SSHORT:
            values = new Int16Array(count);
            readMethod = dataSlice.readInt16;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.LONG:
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.IFD:
            values = new Uint32Array(count);
            readMethod = dataSlice.readUint32;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SLONG:
            values = new Int32Array(count);
            readMethod = dataSlice.readInt32;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.LONG8:
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.IFD8:
            values = new Array(count);
            readMethod = dataSlice.readUint64;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SLONG8:
            values = new Array(count);
            readMethod = dataSlice.readInt64;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.RATIONAL:
            values = new Uint32Array(count * 2);
            readMethod = dataSlice.readUint32;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SRATIONAL:
            values = new Int32Array(count * 2);
            readMethod = dataSlice.readInt32;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.FLOAT:
            values = new Float32Array(count);
            readMethod = dataSlice.readFloat32;
            break;
        case _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.DOUBLE:
            values = new Float64Array(count);
            readMethod = dataSlice.readFloat64;
            break;
        default:
        // will throw below
    }
    if (values === null || readMethod === null) {
        throw new RangeError(`Invalid field type: ${fieldType}`);
    }
    // normal fields
    if (!(fieldType === _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.RATIONAL || fieldType === _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.SRATIONAL)) {
        for (let i = 0; i < count; ++i) {
            values[i] = readMethod.call(dataSlice, offset + (i * fieldTypeLength));
        }
    }
    else { // RATIONAL or SRATIONAL
        for (let i = 0; i < count; i += 2) {
            values[i] = readMethod.call(dataSlice, offset + (i * fieldTypeLength));
            values[i + 1] = readMethod.call(dataSlice, offset + ((i * fieldTypeLength) + 4));
        }
    }
    if (fieldType === _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.ASCII) {
        return new TextDecoder('utf-8').decode(/** @type {Uint8Array} */ (values));
    }
    return values;
}
/**
 * Error class for cases when an IFD index was requested, that does not exist
 * in the file.
 */
class GeoTIFFImageIndexError extends Error {
    /**
     * @param {number} index
     */
    constructor(index) {
        super(`No image at index ${index}`);
        this.index = index;
    }
}
class GeoTIFFBase {
    /**
     * @param {number} [_index=0] the index of the image to return.
     * @returns {Promise<GeoTIFFImage>} the image at the given index
     */
    async getImage(_index = 0) {
        throw new Error('Not implemented');
    }
    /**
     * @returns {Promise<number>} the number of internal subfile images
     */
    async getImageCount() {
        throw new Error('Not implemented');
    }
    /**
     * @typedef {Object} ReadRastersWindowOptions
     * @property {number} [resX] desired Y resolution (world units per pixel)
     * @property {number} [resY] desired X resolution (world units per pixel)
     * @property {Array<number>} [bbox] the subset to read data from in
     *     geographical coordinates. Whole image if not specified.
     */
    /**
     * (experimental) Reads raster data from the best fitting image. This function uses
     * the image with the lowest resolution that is still a higher resolution than the
     * requested resolution.
     * When specified, the `bbox` option is translated to the `window` option and the
     * `resX` and `resY` to `width` and `height` respectively.
     * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
     * image is called and the result returned.
     * @see GeoTIFFImage.readRasters
     * @param {ReadRastersOptions & ReadRastersWindowOptions} options optional parameters
     * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
     */
    async readRasters(options = {}) {
        const { window: imageWindow, width, height } = options;
        let { resX, resY, bbox } = options;
        const firstImage = await this.getImage();
        let usedImage = firstImage;
        const imageCount = await this.getImageCount();
        const imgBBox = firstImage.getBoundingBox();
        if (imageWindow && bbox) {
            throw new Error('Both "bbox" and "window" passed.');
        }
        // if width/height is passed, transform it to resolution
        if (width || height) {
            // if we have an image window (pixel coordinates), transform it to a BBox
            // using the origin/resolution of the first image.
            if (imageWindow) {
                const [oX, oY] = firstImage.getOrigin();
                const [rX, rY] = firstImage.getResolution();
                bbox = [
                    oX + (imageWindow[0] * rX),
                    oY + (imageWindow[1] * rY),
                    oX + (imageWindow[2] * rX),
                    oY + (imageWindow[3] * rY),
                ];
            }
            // if we have a bbox (or calculated one)
            const usedBBox = bbox || imgBBox;
            if (width) {
                if (resX) {
                    throw new Error('Both width and resX passed');
                }
                resX = (usedBBox[2] - usedBBox[0]) / width;
            }
            if (height) {
                if (resY) {
                    throw new Error('Both width and resY passed');
                }
                resY = (usedBBox[3] - usedBBox[1]) / height;
            }
        }
        // if resolution is set or calculated, try to get the image with the worst acceptable resolution
        if (resX || resY) {
            const allImages = [];
            for (let i = 0; i < imageCount; ++i) {
                const image = await this.getImage(i);
                const subfileType = image.fileDirectory.getValue('SubfileType');
                const newSubfileType = image.fileDirectory.getValue('NewSubfileType');
                if (i === 0 || subfileType === 2 || (newSubfileType || 0) & 1) {
                    allImages.push(image);
                }
            }
            allImages.sort((a, b) => a.getWidth() - b.getWidth());
            for (let i = 0; i < allImages.length; ++i) {
                const image = allImages[i];
                const imgResX = (imgBBox[2] - imgBBox[0]) / image.getWidth();
                const imgResY = (imgBBox[3] - imgBBox[1]) / image.getHeight();
                usedImage = image;
                if ((resX && resX > imgResX) || (resY && resY > imgResY)) {
                    break;
                }
            }
        }
        let wnd = imageWindow;
        if (bbox) {
            const [oX, oY] = firstImage.getOrigin();
            const [imageResX, imageResY] = usedImage.getResolution(firstImage);
            wnd = [
                Math.round((bbox[0] - oX) / imageResX),
                Math.round((bbox[1] - oY) / imageResY),
                Math.round((bbox[2] - oX) / imageResX),
                Math.round((bbox[3] - oY) / imageResY),
            ];
            wnd = [
                Math.min(wnd[0], wnd[2]),
                Math.min(wnd[1], wnd[3]),
                Math.max(wnd[0], wnd[2]),
                Math.max(wnd[1], wnd[3]),
            ];
        }
        return usedImage.readRasters({ ...options, window: wnd });
    }
}
/**
 * @typedef {Object} GeoTIFFOptions
 * @property {boolean} [cache=false] whether or not decoded tiles shall be cached.
 */
/**
 * The abstraction for a whole GeoTIFF file.
 */
class GeoTIFF extends GeoTIFFBase {
    /**
     * @constructor
     * @param {BaseSource} source The datasource to read from.
     * @param {boolean} littleEndian Whether the image uses little endian.
     * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
     * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
     *                                to the first IFD.
     * @param {GeoTIFFOptions} [options] further options.
     */
    constructor(source, littleEndian, bigTiff, firstIFDOffset, options = {}) {
        super();
        this.source = source;
        this.parser = new _imagefiledirectory_js__WEBPACK_IMPORTED_MODULE_7__.ImageFileDirectoryParser(source, littleEndian, bigTiff, false);
        this.littleEndian = littleEndian;
        this.bigTiff = bigTiff;
        this.firstIFDOffset = firstIFDOffset;
        this.cache = options.cache || false;
        /** @type {Array<Promise<import('./imagefiledirectory.js').ImageFileDirectory> | undefined>} */
        this.ifdRequests = [];
        /** @type {Record<string, unknown>|null} */
        this.ghostValues = null;
    }
    /**
     * @param {number} offset
     * @param {number} [size]
     * @returns {Promise<DataSlice>}
     */
    async getSlice(offset, size) {
        const fallbackSize = this.bigTiff ? 4048 : 1024;
        return new _dataslice_js__WEBPACK_IMPORTED_MODULE_2__["default"]((await this.source.fetch([{
                offset,
                length: typeof size !== 'undefined' ? size : fallbackSize,
            }]))[0], offset, this.littleEndian, this.bigTiff);
    }
    /**
     * @param {number} index
     * @return {Promise<import('./imagefiledirectory.js').ImageFileDirectory>}
     */
    async requestIFD(index) {
        // see if we already have that IFD index requested.
        if (this.ifdRequests[index]) {
            // attach to an already requested IFD
            return this.ifdRequests[index];
        }
        else if (index === 0) {
            // special case for index 0
            this.ifdRequests[index] = this.parser.parseFileDirectoryAt(this.firstIFDOffset);
            return this.ifdRequests[index];
        }
        else if (!this.ifdRequests[index - 1]) {
            // if the previous IFD was not yet loaded, load that one first
            // this is the recursive call.
            try {
                this.ifdRequests[index - 1] = this.requestIFD(index - 1);
            }
            catch (e) {
                // if the previous one already was an index error, rethrow
                // with the current index
                if (e instanceof GeoTIFFImageIndexError) {
                    throw new GeoTIFFImageIndexError(index);
                }
                // rethrow anything else
                throw e;
            }
        }
        // if the previous IFD was loaded, we can finally fetch the one we are interested in.
        // we need to wrap this in an IIFE, otherwise this.ifdRequests[index] would be delayed
        this.ifdRequests[index] = (async () => {
            const previousPromise = this.ifdRequests[index - 1];
            if (!previousPromise) {
                throw new Error('Previous IFD request missing');
            }
            const previousIfd = await previousPromise;
            if (previousIfd.nextIFDByteOffset === 0) {
                throw new GeoTIFFImageIndexError(index);
            }
            return this.parser.parseFileDirectoryAt(previousIfd.nextIFDByteOffset);
        })();
        return this.ifdRequests[index];
    }
    /**
     * Get the n-th internal subfile of an image. By default, the first is returned.
     *
     * @param {number} [index=0] the index of the image to return.
     * @returns {Promise<GeoTIFFImage>} the image at the given index
     */
    async getImage(index = 0) {
        return new _geotiffimage_js__WEBPACK_IMPORTED_MODULE_0__["default"](await this.requestIFD(index), this.littleEndian, this.cache, this.source);
    }
    /**
     * Returns the count of the internal subfiles.
     *
     * @returns {Promise<number>} the number of internal subfile images
     */
    async getImageCount() {
        let index = 0;
        // loop until we run out of IFDs
        let hasNext = true;
        while (hasNext) {
            try {
                await this.requestIFD(index);
                ++index;
            }
            catch (e) {
                if (e instanceof GeoTIFFImageIndexError) {
                    hasNext = false;
                }
                else {
                    throw e;
                }
            }
        }
        return index;
    }
    /**
     * Get the values of the COG ghost area as a parsed map.
     * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
     * @returns {Promise<Record<string, unknown>|null>} the parsed ghost area or null, if no such area was found
     */
    async getGhostValues() {
        const offset = this.bigTiff ? 16 : 8;
        if (this.ghostValues !== null) {
            return this.ghostValues;
        }
        const detectionString = 'GDAL_STRUCTURAL_METADATA_SIZE=';
        const heuristicAreaSize = detectionString.length + 100;
        let slice = await this.getSlice(offset, heuristicAreaSize);
        if (detectionString === getValues(slice, _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.ASCII, detectionString.length, offset)) {
            const valuesString = getValues(slice, _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.ASCII, heuristicAreaSize, offset);
            const firstLine = valuesString.split('\n')[0];
            const metadataSize = Number(firstLine.split('=')[1].split(' ')[0]) + firstLine.length;
            if (metadataSize > heuristicAreaSize) {
                slice = await this.getSlice(offset, metadataSize);
            }
            const fullString = getValues(slice, _globals_js__WEBPACK_IMPORTED_MODULE_8__.fieldTypes.ASCII, metadataSize, offset);
            /** @type {Record<string, unknown>} */
            const ghostValues = {};
            fullString
                .split('\n')
                .filter((line) => line.length > 0)
                .map((line) => line.split('='))
                .forEach(([key, value]) => {
                ghostValues[key] = value;
            });
            this.ghostValues = ghostValues;
        }
        return this.ghostValues;
    }
    /**
     * Parse a (Geo)TIFF file from the given source.
     *
     * @param {BaseSource} source The source of data to parse from.
     * @param {GeoTIFFOptions} [options] Additional options.
     * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
     *                               to be aborted
     */
    static async fromSource(source, options, signal) {
        const headerData = (await source.fetch([{ offset: 0, length: 1024 }], signal))[0];
        const dataView = new _dataview64_js__WEBPACK_IMPORTED_MODULE_1__["default"](headerData);
        const BOM = dataView.getUint16(0, false);
        let littleEndian;
        if (BOM === 0x4949) {
            littleEndian = true;
        }
        else if (BOM === 0x4D4D) {
            littleEndian = false;
        }
        else {
            throw new TypeError('Invalid byte order value.');
        }
        const magicNumber = dataView.getUint16(2, littleEndian);
        let bigTiff;
        if (magicNumber === 42) {
            bigTiff = false;
        }
        else if (magicNumber === 43) {
            bigTiff = true;
            const offsetByteSize = dataView.getUint16(4, littleEndian);
            if (offsetByteSize !== 8) {
                throw new Error('Unsupported offset byte-size.');
            }
        }
        else {
            throw new TypeError('Invalid magic number.');
        }
        const firstIFDOffset = bigTiff
            ? dataView.getUint64(8, littleEndian)
            : dataView.getUint32(4, littleEndian);
        return new GeoTIFF(source, littleEndian, bigTiff, firstIFDOffset, options);
    }
    /**
     * Closes the underlying file buffer
     * N.B. After the GeoTIFF has been completely processed it needs
     * to be closed but only if it has been constructed from a file.
     */
    close() {
        if (typeof this.source.close === 'function') {
            return this.source.close();
        }
        return false;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeoTIFF);
/**
 * Wrapper for GeoTIFF files that have external overviews.
 * @augments GeoTIFFBase
 */
class MultiGeoTIFF extends GeoTIFFBase {
    /**
     * Construct a new MultiGeoTIFF from a main and several overview files.
     * @param {GeoTIFF} mainFile The main GeoTIFF file.
     * @param {GeoTIFF[]} overviewFiles An array of overview files.
     */
    constructor(mainFile, overviewFiles) {
        super();
        this.mainFile = mainFile;
        this.overviewFiles = overviewFiles;
        this.imageFiles = [mainFile].concat(overviewFiles);
        this.fileDirectoriesPerFile = null;
        this.fileDirectoriesPerFileParsing = null;
        this.imageCount = null;
    }
    async parseFileDirectoriesPerFile() {
        const requests = [this.mainFile.parser.parseFileDirectoryAt(this.mainFile.firstIFDOffset)]
            .concat(this.overviewFiles.map((file) => file.parser.parseFileDirectoryAt(file.firstIFDOffset)));
        this.fileDirectoriesPerFile = await Promise.all(requests);
        return this.fileDirectoriesPerFile;
    }
    /**
     * Get the n-th internal subfile of an image. By default, the first is returned.
     *
     * @param {number} [index=0] the index of the image to return.
     * @returns {Promise<GeoTIFFImage>} the image at the given index
     */
    async getImage(index = 0) {
        // Initialize this.imageCounts if not yet done
        await this.getImageCount();
        if (!this.imageCounts) {
            throw new Error('Image counts not available');
        }
        await this.parseFileDirectoriesPerFile();
        let visited = 0;
        let relativeIndex = 0;
        for (let i = 0; i < this.imageFiles.length; i++) {
            const imageFile = this.imageFiles[i];
            for (let ii = 0; ii < this.imageCounts[i]; ii++) {
                if (index === visited) {
                    return new _geotiffimage_js__WEBPACK_IMPORTED_MODULE_0__["default"](await imageFile.requestIFD(relativeIndex), imageFile.littleEndian, imageFile.cache, imageFile.source);
                }
                visited++;
                relativeIndex++;
            }
            relativeIndex = 0;
        }
        throw new RangeError('Invalid image index');
    }
    /**
     * Returns the count of the internal subfiles.
     *
     * @returns {Promise<number>} the number of internal subfile images
     */
    async getImageCount() {
        if (this.imageCount !== null) {
            return this.imageCount;
        }
        const requests = [this.mainFile.getImageCount()]
            .concat(this.overviewFiles.map((file) => file.getImageCount()));
        this.imageCounts = await Promise.all(requests);
        this.imageCount = this.imageCounts.reduce((count, ifds) => count + ifds, 0);
        return this.imageCount;
    }
}

/**
 * Creates a new GeoTIFF from a remote URL.
 * @param {string} url The URL to access the image from
 * @param {RemoteSourceOptions} [options] Additional options to pass to the source.
 *                           See {@link makeRemoteSource} for details.
 * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                               to be aborted
 * @returns {Promise<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromUrl(url, options = {}, signal) {
    return GeoTIFF.fromSource((0,_source_remote_js__WEBPACK_IMPORTED_MODULE_3__.makeRemoteSource)(url, options), undefined, signal);
}
/**
 * Creates a new GeoTIFF from a custom {@link BaseClient}.
 * @param {BaseClient} client The client.
 * @param {RemoteSourceOptions} [options] Additional options to pass to the source.
 *                           See {@link makeRemoteSource} for details.
 * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                               to be aborted
 * @returns {Promise<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromCustomClient(client, options = {}, signal) {
    return GeoTIFF.fromSource((0,_source_remote_js__WEBPACK_IMPORTED_MODULE_3__.makeCustomSource)(client, options), undefined, signal);
}
/**
 * Construct a new GeoTIFF from an
 * [ArrayBuffer]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer}.
 * @param {ArrayBuffer} arrayBuffer The data to read the file from.
 * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                               to be aborted
 * @returns {Promise<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromArrayBuffer(arrayBuffer, signal) {
    return GeoTIFF.fromSource((0,_source_arraybuffer_js__WEBPACK_IMPORTED_MODULE_4__.makeBufferSource)(arrayBuffer), undefined, signal);
}
/**
 * Construct a GeoTIFF from a local file path. This uses the node
 * [filesystem API]{@link https://nodejs.org/api/fs.html} and is
 * not available on browsers.
 *
 * N.B. After the GeoTIFF has been completely processed it needs
 * to be closed but only if it has been constructed from a file.
 * @param {string} path The file path to read from.
 * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                               to be aborted
 * @returns {Promise<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromFile(path, signal) {
    return GeoTIFF.fromSource((0,_source_file_js__WEBPACK_IMPORTED_MODULE_6__.makeFileSource)(path), undefined, signal);
}
/**
 * Construct a GeoTIFF from an HTML
 * [Blob]{@link https://developer.mozilla.org/en-US/docs/Web/API/Blob} or
 * [File]{@link https://developer.mozilla.org/en-US/docs/Web/API/File}
 * object.
 * @param {Blob|File} blob The Blob or File object to read from.
 * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                               to be aborted
 * @returns {Promise<GeoTIFF>} The resulting GeoTIFF file.
 */
async function fromBlob(blob, signal) {
    return GeoTIFF.fromSource((0,_source_filereader_js__WEBPACK_IMPORTED_MODULE_5__.makeFileReaderSource)(blob), undefined, signal);
}
/**
 * Construct a MultiGeoTIFF from the given URLs.
 * @param {string} mainUrl The URL for the main file.
 * @param {string[]} overviewUrls An array of URLs for the overview images.
 * @param {RemoteSourceOptions} [options] Additional options to pass to the source.
 *                           See [makeRemoteSource]{@link module:source.makeRemoteSource}
 *                           for details.
 * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
 *                               to be aborted
 * @returns {Promise<MultiGeoTIFF>} The resulting MultiGeoTIFF file.
 */
async function fromUrls(mainUrl, overviewUrls = [], options = {}, signal) {
    const mainFile = await GeoTIFF.fromSource((0,_source_remote_js__WEBPACK_IMPORTED_MODULE_3__.makeRemoteSource)(mainUrl, options), undefined, signal);
    const overviewFiles = await Promise.all(overviewUrls.map((url) => GeoTIFF.fromSource((0,_source_remote_js__WEBPACK_IMPORTED_MODULE_3__.makeRemoteSource)(url, options), undefined, signal)));
    return new MultiGeoTIFF(mainFile, overviewFiles);
}
/**
 * Main creating function for GeoTIFF files.
 * @param {Array<number>|Array<Array<Array<number>>>|TypedArray} values The pixel values to write.
 * Can be a flat array of all pixels or a 3-dimensional array of shape `[band][row][column]`.
 * @param {GeotiffWriterMetadata} metadata
 * @returns {ArrayBuffer}
 */
function writeArrayBuffer(values, metadata) {
    return (0,_geotiffwriter_js__WEBPACK_IMPORTED_MODULE_9__.writeGeotiff)(values, metadata);
}



//# sourceMappingURL=geotiff.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/geotiffimage.js"
/*!**********************************************************!*\
  !*** ./node_modules/geotiff/dist-module/geotiffimage.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _petamoriken_float16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @petamoriken/float16 */ "./node_modules/@petamoriken/float16/src/DataView.mjs");
/* harmony import */ var xml_utils_get_attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xml-utils/get-attribute */ "./node_modules/xml-utils/get-attribute.mjs");
/* harmony import */ var xml_utils_find_tags_by_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xml-utils/find-tags-by-name */ "./node_modules/xml-utils/find-tags-by-name.mjs");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.js */ "./node_modules/geotiff/dist-module/globals.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/geotiff/dist-module/rgb.js");
/* harmony import */ var _compression_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compression/index.js */ "./node_modules/geotiff/dist-module/compression/index.js");
/* harmony import */ var _resample_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resample.js */ "./node_modules/geotiff/dist-module/resample.js");
/** @module geotiffimage */

// @ts-expect-error
 // eslint-disable-line import/extensions
// @ts-expect-error
 // eslint-disable-line import/extensions




/** @import {DecoderWorker, TypedArray} from "./geotiff.js" */
/** @import {ReadRasterResult} from "./geotiff.js" */
/** @import {ReadRastersOptions} from "./geotiff.js" */
/** @import {ReadRGBOptions} from "./geotiff.js" */
/**
 * @param {Array<number>|TypedArray} array
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function sum(array, start, end) {
    let s = 0;
    for (let i = start; i < end; ++i) {
        s += array[i];
    }
    return s;
}
/**
 * @param {1|2|3} format
 * @param {number} bitsPerSample
 * @param {number|ArrayBufferLike} sizeOrData
 * @returns {TypedArray}
 */
function arrayForType(format, bitsPerSample, sizeOrData) {
    let TypedArrayConstructor;
    switch (format) {
        case 1: // unsigned integer data
            if (bitsPerSample <= 8) {
                TypedArrayConstructor = Uint8Array;
            }
            else if (bitsPerSample <= 16) {
                TypedArrayConstructor = Uint16Array;
            }
            else if (bitsPerSample <= 32) {
                TypedArrayConstructor = Uint32Array;
            }
            break;
        case 2: // twos complement signed integer data
            if (bitsPerSample === 8) {
                TypedArrayConstructor = Int8Array;
            }
            else if (bitsPerSample === 16) {
                TypedArrayConstructor = Int16Array;
            }
            else if (bitsPerSample === 32) {
                TypedArrayConstructor = Int32Array;
            }
            break;
        case 3: // floating point data
            switch (bitsPerSample) {
                case 16:
                case 32:
                    TypedArrayConstructor = Float32Array;
                    break;
                case 64:
                    TypedArrayConstructor = Float64Array;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    if (TypedArrayConstructor) {
        if (typeof sizeOrData === 'number') {
            return new TypedArrayConstructor(sizeOrData);
        }
        else if (sizeOrData instanceof ArrayBuffer) {
            return new TypedArrayConstructor(sizeOrData);
        }
    }
    throw Error('Unsupported data format/bitsPerSample');
}
/**
 * @param {1|2|3} format
 * @param {number} bitsPerSample
 * @returns {boolean}
 */
function needsNormalization(format, bitsPerSample) {
    if ((format === 1 || format === 2) && bitsPerSample <= 32 && bitsPerSample % 8 === 0) {
        return false;
    }
    else if (format === 3 && (bitsPerSample === 16 || bitsPerSample === 32 || bitsPerSample === 64)) {
        return false;
    }
    return true;
}
/**
 * @param {ArrayBufferLike} inBuffer
 * @param {1|2|3} format
 * @param {1|2} planarConfiguration
 * @param {number} samplesPerPixel
 * @param {number} bitsPerSample
 * @param {number} tileWidth
 * @param {number} tileHeight
 * @returns {ArrayBufferLike}
 */
function normalizeArray(inBuffer, format, planarConfiguration, samplesPerPixel, bitsPerSample, tileWidth, tileHeight) {
    // const inByteArray = new Uint8Array(inBuffer);
    const view = new DataView(inBuffer);
    const outSize = planarConfiguration === 2
        ? tileHeight * tileWidth
        : tileHeight * tileWidth * samplesPerPixel;
    const samplesToTransfer = planarConfiguration === 2
        ? 1 : samplesPerPixel;
    const outArray = arrayForType(format, bitsPerSample, outSize);
    // let pixel = 0;
    const bitMask = parseInt('1'.repeat(bitsPerSample), 2);
    if (format === 1) { // unsigned integer
        // translation of https://github.com/OSGeo/gdal/blob/master/gdal/frmts/gtiff/geotiff.cpp#L7337
        let pixelBitSkip;
        // let sampleBitOffset = 0;
        if (planarConfiguration === 1) {
            pixelBitSkip = samplesPerPixel * bitsPerSample;
            // sampleBitOffset = (samplesPerPixel - 1) * bitsPerSample;
        }
        else {
            pixelBitSkip = bitsPerSample;
        }
        // Bits per line rounds up to next byte boundary.
        let bitsPerLine = tileWidth * pixelBitSkip;
        if ((bitsPerLine & 7) !== 0) {
            bitsPerLine = (bitsPerLine + 7) & (~7);
        }
        for (let y = 0; y < tileHeight; ++y) {
            const lineBitOffset = y * bitsPerLine;
            for (let x = 0; x < tileWidth; ++x) {
                const pixelBitOffset = lineBitOffset + (x * samplesToTransfer * bitsPerSample);
                for (let i = 0; i < samplesToTransfer; ++i) {
                    const bitOffset = pixelBitOffset + (i * bitsPerSample);
                    const outIndex = (((y * tileWidth) + x) * samplesToTransfer) + i;
                    const byteOffset = Math.floor(bitOffset / 8);
                    const innerBitOffset = bitOffset % 8;
                    if (innerBitOffset + bitsPerSample <= 8) {
                        outArray[outIndex] = (view.getUint8(byteOffset) >> (8 - bitsPerSample) - innerBitOffset) & bitMask;
                    }
                    else if (innerBitOffset + bitsPerSample <= 16) {
                        outArray[outIndex] = (view.getUint16(byteOffset) >> (16 - bitsPerSample) - innerBitOffset) & bitMask;
                    }
                    else if (innerBitOffset + bitsPerSample <= 24) {
                        const raw = (view.getUint16(byteOffset) << 8) | (view.getUint8(byteOffset + 2));
                        outArray[outIndex] = (raw >> (24 - bitsPerSample) - innerBitOffset) & bitMask;
                    }
                    else {
                        outArray[outIndex] = (view.getUint32(byteOffset) >> (32 - bitsPerSample) - innerBitOffset) & bitMask;
                    }
                    // let outWord = 0;
                    // for (let bit = 0; bit < bitsPerSample; ++bit) {
                    //   if (inByteArray[bitOffset >> 3]
                    //     & (0x80 >> (bitOffset & 7))) {
                    //     outWord |= (1 << (bitsPerSample - 1 - bit));
                    //   }
                    //   ++bitOffset;
                    // }
                    // outArray[outIndex] = outWord;
                    // outArray[pixel] = outWord;
                    // pixel += 1;
                }
                // bitOffset = bitOffset + pixelBitSkip - bitsPerSample;
            }
        }
    }
    else if (format === 3) { // floating point
        // Float16 is handled elsewhere
        // normalize 16/24 bit floats to 32 bit floats in the array
        // console.time();
        // if (bitsPerSample === 16) {
        //   for (let byte = 0, outIndex = 0; byte < inBuffer.byteLength; byte += 2, ++outIndex) {
        //     outArray[outIndex] = getFloat16(view, byte);
        //   }
        // }
        // console.timeEnd()
    }
    return outArray.buffer;
}
/**
 * GeoTIFF sub-file image.
 */
class GeoTIFFImage {
    /**
     * @constructor
     * @param {import("./imagefiledirectory.js").ImageFileDirectory} fileDirectory The parsed file directory
     * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
     * @param {Boolean} cache Whether or not decoded tiles shall be cached
     * @param {import('./source/basesource.js').BaseSource} source The datasource to read from
     */
    constructor(fileDirectory, littleEndian, cache, source) {
        this.fileDirectory = fileDirectory;
        this.littleEndian = littleEndian;
        /** @type {Array<Promise<ArrayBufferLike>>|null} */
        this.tiles = cache ? [] : null;
        this.isTiled = !fileDirectory.hasTag('StripOffsets');
        const planarConfiguration = fileDirectory.getValue('PlanarConfiguration') ?? 1;
        if (planarConfiguration !== 1 && planarConfiguration !== 2) {
            throw new Error('Invalid planar configuration.');
        }
        /** @type {1 | 2} */
        this.planarConfiguration = planarConfiguration;
        this.source = source;
    }
    /**
     * Returns the associated parsed file directory.
     * @returns {import("./imagefiledirectory.js").ImageFileDirectory} the parsed file directory
     */
    getFileDirectory() {
        return this.fileDirectory;
    }
    /**
     * Returns the associated parsed geo keys.
     * @returns {Partial<Record<import('./globals.js').GeoKeyName, *>>|null} the parsed geo keys
     */
    getGeoKeys() {
        return this.fileDirectory.parseGeoKeyDirectory();
    }
    /**
     * Returns the width of the image.
     * @returns {Number} the width of the image
     */
    getWidth() {
        return this.fileDirectory.getValue('ImageWidth') || 0;
    }
    /**
     * Returns the height of the image.
     * @returns {Number} the height of the image
     */
    getHeight() {
        return this.fileDirectory.getValue('ImageLength') || 0;
    }
    /**
     * Returns the number of samples per pixel.
     * @returns {number} the number of samples per pixel
     */
    getSamplesPerPixel() {
        return this.fileDirectory.getValue('SamplesPerPixel') ?? 1;
    }
    /**
     * Returns the width of each tile.
     * @returns {number} the width of each tile
     */
    getTileWidth() {
        return this.isTiled ? (this.fileDirectory.getValue('TileWidth') || 0) : this.getWidth();
    }
    /**
     * Returns the height of each tile.
     * @returns {number} the height of each tile
     */
    getTileHeight() {
        if (this.isTiled) {
            return this.fileDirectory.getValue('TileLength') || 0;
        }
        const rowsPerStrip = this.fileDirectory.hasTag('RowsPerStrip') && this.fileDirectory.getValue('RowsPerStrip');
        if (rowsPerStrip) {
            return Math.min(rowsPerStrip, this.getHeight());
        }
        return this.getHeight();
    }
    getBlockWidth() {
        return this.getTileWidth();
    }
    /**
     * @param {number} y
     * @returns {number}
     */
    getBlockHeight(y) {
        if (this.isTiled || (y + 1) * this.getTileHeight() <= this.getHeight()) {
            return this.getTileHeight();
        }
        else {
            return this.getHeight() - (y * this.getTileHeight());
        }
    }
    /**
     * Calculates the number of bytes for each pixel across all samples. Only full
     * bytes are supported, an exception is thrown when this is not the case.
     * @returns {Number} the bytes per pixel
     */
    getBytesPerPixel() {
        let bytes = 0;
        // this is a short list, so we assume this is already loaded
        const bitsPerSample = this.fileDirectory.getValue('BitsPerSample') || [];
        for (let i = 0; i < bitsPerSample.length; ++i) {
            bytes += this.getSampleByteSize(i);
        }
        return bytes;
    }
    /**
     * @param {number} i
     * @returns {number}
     */
    getSampleByteSize(i) {
        const bitsPerSample = this.fileDirectory.getValue('BitsPerSample') || [];
        if (i >= bitsPerSample.length) {
            throw new RangeError(`Sample index ${i} is out of range.`);
        }
        return Math.ceil(bitsPerSample[i] / 8);
    }
    /**
     * @param {number} sampleIndex
     * @returns {(this: DataView, byteOffset: number, littleEndian: boolean) => number}
     */
    getReaderForSample(sampleIndex) {
        const sampleFormat = this.fileDirectory.getValue('SampleFormat');
        const format = sampleFormat
            ? sampleFormat[sampleIndex] : 1;
        const bitsPerSample = (this.fileDirectory.getValue('BitsPerSample') || [])[sampleIndex];
        switch (format) {
            case 1: // unsigned integer data
                if (bitsPerSample <= 8) {
                    return DataView.prototype.getUint8;
                }
                else if (bitsPerSample <= 16) {
                    return DataView.prototype.getUint16;
                }
                else if (bitsPerSample <= 32) {
                    return DataView.prototype.getUint32;
                }
                break;
            case 2: // twos complement signed integer data
                if (bitsPerSample <= 8) {
                    return DataView.prototype.getInt8;
                }
                else if (bitsPerSample <= 16) {
                    return DataView.prototype.getInt16;
                }
                else if (bitsPerSample <= 32) {
                    return DataView.prototype.getInt32;
                }
                break;
            case 3:
                switch (bitsPerSample) {
                    case 16:
                        return function (offset, littleEndian) {
                            return (0,_petamoriken_float16__WEBPACK_IMPORTED_MODULE_0__.getFloat16)(this, offset, littleEndian);
                        };
                    case 32:
                        return DataView.prototype.getFloat32;
                    case 64:
                        return DataView.prototype.getFloat64;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        throw Error('Unsupported data format/bitsPerSample');
    }
    getSampleFormat(sampleIndex = 0) {
        const sampleFormat = this.fileDirectory.getValue('SampleFormat');
        return sampleFormat ? sampleFormat[sampleIndex] : 1;
    }
    getBitsPerSample(sampleIndex = 0) {
        const bitsPerSample = this.fileDirectory.getValue('BitsPerSample');
        return bitsPerSample ? bitsPerSample[sampleIndex] : 0;
    }
    /**
     * @param {number} sampleIndex
     * @param {number|ArrayBufferLike} sizeOrData
     * @returns {TypedArray}
     */
    getArrayForSample(sampleIndex, sizeOrData) {
        const format = /** @type {1|2|3} */ (this.getSampleFormat(sampleIndex));
        const bitsPerSample = this.getBitsPerSample(sampleIndex);
        return arrayForType(format, bitsPerSample, sizeOrData);
    }
    /**
     * Returns the decoded strip or tile.
     * @param {Number} x the strip or tile x-offset
     * @param {Number} y the tile y-offset (0 for stripped images)
     * @param {Number} sample the sample to get for separated samples
     * @param {DecoderWorker|import("./geotiff.js").BaseDecoder} poolOrDecoder the decoder or decoder pool
     * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
     *                               to be aborted
     * @returns {Promise.<{x: number, y: number, sample: number, data: ArrayBufferLike}>} the decoded strip or tile
     */
    async getTileOrStrip(x, y, sample, poolOrDecoder, signal) {
        const numTilesPerRow = Math.ceil(this.getWidth() / this.getTileWidth());
        const numTilesPerCol = Math.ceil(this.getHeight() / this.getTileHeight());
        let index;
        const { tiles } = this;
        if (this.planarConfiguration === 1) {
            index = (y * numTilesPerRow) + x;
        }
        else if (this.planarConfiguration === 2) {
            index = (sample * numTilesPerRow * numTilesPerCol) + (y * numTilesPerRow) + x;
        }
        if (index === undefined) {
            throw new Error('Could not determine tile or strip index.');
        }
        let offset;
        let byteCount;
        if (this.isTiled) {
            offset = Number(await this.fileDirectory.loadValueIndexed('TileOffsets', index));
            byteCount = Number(await this.fileDirectory.loadValueIndexed('TileByteCounts', index));
        }
        else {
            offset = Number(await this.fileDirectory.loadValueIndexed('StripOffsets', index));
            byteCount = Number(await this.fileDirectory.loadValueIndexed('StripByteCounts', index));
        }
        if (byteCount === 0) {
            const nPixels = this.getBlockHeight(y) * this.getTileWidth();
            const bytesPerPixel = (this.planarConfiguration === 2) ? this.getSampleByteSize(sample) : this.getBytesPerPixel();
            const data = new ArrayBuffer(nPixels * bytesPerPixel);
            const view = this.getArrayForSample(sample, data);
            view.fill(this.getGDALNoData() || 0);
            return { x, y, sample, data };
        }
        const slice = (await this.source.fetch([{ offset, length: byteCount }], signal))[0];
        let request;
        if (tiles === null || !tiles[index]) {
            // resolve each request by potentially applying array normalization
            request = (async () => {
                let data = await poolOrDecoder.decode(slice);
                const sampleFormat = /** @type {1|2|3} */ (this.getSampleFormat());
                const bitsPerSample = this.getBitsPerSample();
                if (needsNormalization(sampleFormat, bitsPerSample)) {
                    data = normalizeArray(data, sampleFormat, this.planarConfiguration, this.getSamplesPerPixel(), bitsPerSample, this.getTileWidth(), this.getBlockHeight(y));
                }
                return data;
            })();
            // set the cache
            if (tiles !== null) {
                tiles[index] = request;
            }
        }
        else {
            // get from the cache
            request = tiles[index];
        }
        // cache the tile request
        return { x, y, sample, data: await request };
    }
    /**
     * Internal read function.
     * @private
     * @param {Array<number>} imageWindow The image window in pixel coordinates
     * @param {Array<number>} samples The selected samples (0-based indices)
     * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
     * @param {boolean|undefined} interleave Whether or not to write in an interleaved manner
     * @param {DecoderWorker|import("./geotiff.js").BaseDecoder} poolOrDecoder the decoder or decoder pool
     * @param {number} [width] the width of window to be read into
     * @param {number} [height] the height of window to be read into
     * @param {string} [resampleMethod] the resampling method to be used when interpolating
     * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
     *                               to be aborted
     * @returns {Promise<ReadRasterResult>}
     */
    async _readRaster(imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod, signal) {
        const tileWidth = this.getTileWidth();
        const tileHeight = this.getTileHeight();
        const imageWidth = this.getWidth();
        const imageHeight = this.getHeight();
        const minXTile = Math.max(Math.floor(imageWindow[0] / tileWidth), 0);
        const maxXTile = Math.min(Math.ceil(imageWindow[2] / tileWidth), Math.ceil(imageWidth / tileWidth));
        const minYTile = Math.max(Math.floor(imageWindow[1] / tileHeight), 0);
        const maxYTile = Math.min(Math.ceil(imageWindow[3] / tileHeight), Math.ceil(imageHeight / tileHeight));
        const windowWidth = imageWindow[2] - imageWindow[0];
        let bytesPerPixel = this.getBytesPerPixel();
        /** @type {Array<number>} */
        const srcSampleOffsets = [];
        /** @type {Array<(this: DataView, byteOffset: number, littleEndian: boolean) => number>} */
        const sampleReaders = [];
        for (let i = 0; i < samples.length; ++i) {
            if (this.planarConfiguration === 1) {
                const bitsPerSample = await this.fileDirectory.loadValue('BitsPerSample');
                if (typeof bitsPerSample !== 'object') {
                    throw new Error('Expected BitsPerSample to be an array or typed array.');
                }
                srcSampleOffsets.push(sum(bitsPerSample, 0, samples[i]) / 8);
            }
            else {
                srcSampleOffsets.push(0);
            }
            sampleReaders.push(this.getReaderForSample(samples[i]));
        }
        const promises = [];
        const { littleEndian } = this;
        for (let yTile = minYTile; yTile < maxYTile; ++yTile) {
            for (let xTile = minXTile; xTile < maxXTile; ++xTile) {
                let getPromise;
                if (this.planarConfiguration === 1) {
                    getPromise = this.getTileOrStrip(xTile, yTile, 0, poolOrDecoder, signal);
                }
                for (let sampleIndex = 0; sampleIndex < samples.length; ++sampleIndex) {
                    const si = sampleIndex;
                    const sample = samples[sampleIndex];
                    if (this.planarConfiguration === 2) {
                        bytesPerPixel = this.getSampleByteSize(sample);
                        getPromise = this.getTileOrStrip(xTile, yTile, sample, poolOrDecoder, signal);
                    }
                    if (!getPromise) {
                        throw new Error('Could not get tile or strip data.');
                    }
                    const promise = getPromise.then((tile) => {
                        const buffer = tile.data;
                        const dataView = new DataView(buffer);
                        const blockHeight = this.getBlockHeight(tile.y);
                        const firstLine = tile.y * tileHeight;
                        const firstCol = tile.x * tileWidth;
                        const lastLine = firstLine + blockHeight;
                        const lastCol = (tile.x + 1) * tileWidth;
                        const reader = sampleReaders[si];
                        const ymax = Math.min(blockHeight, blockHeight - (lastLine - imageWindow[3]), imageHeight - firstLine);
                        const xmax = Math.min(tileWidth, tileWidth - (lastCol - imageWindow[2]), imageWidth - firstCol);
                        for (let y = Math.max(0, imageWindow[1] - firstLine); y < ymax; ++y) {
                            for (let x = Math.max(0, imageWindow[0] - firstCol); x < xmax; ++x) {
                                const pixelOffset = ((y * tileWidth) + x) * bytesPerPixel;
                                const value = reader.call(dataView, pixelOffset + srcSampleOffsets[si], littleEndian);
                                let windowCoordinate;
                                if (interleave) {
                                    windowCoordinate = ((y + firstLine - imageWindow[1]) * windowWidth * samples.length)
                                        + ((x + firstCol - imageWindow[0]) * samples.length)
                                        + si;
                                    valueArrays[windowCoordinate] = value;
                                }
                                else {
                                    windowCoordinate = ((y + firstLine - imageWindow[1]) * windowWidth) + x + firstCol - imageWindow[0];
                                    /** @type {TypedArray} */ (valueArrays[si])[windowCoordinate] = value;
                                }
                            }
                        }
                    });
                    promises.push(promise);
                }
            }
        }
        await Promise.all(promises);
        if ((width && (imageWindow[2] - imageWindow[0]) !== width)
            || (height && (imageWindow[3] - imageWindow[1]) !== height)) {
            let resampled;
            if (interleave) {
                resampled = (0,_resample_js__WEBPACK_IMPORTED_MODULE_6__.resampleInterleaved)(
                /** @type {TypedArray} */ (valueArrays), imageWindow[2] - imageWindow[0], imageWindow[3] - imageWindow[1], 
                /** @type {number} */ (width), /** @type {number} */ (height), samples.length, resampleMethod);
            }
            else {
                resampled = (0,_resample_js__WEBPACK_IMPORTED_MODULE_6__.resample)(
                /** @type {TypedArray[]} */ (valueArrays), imageWindow[2] - imageWindow[0], imageWindow[3] - imageWindow[1], 
                /** @type {number} */ (width), /** @type {number} */ (height), resampleMethod);
            }
            const resampledWithDimensions = /** @type {ReadRasterResult} */ (resampled);
            resampledWithDimensions.width = width ?? imageWindow[2] - imageWindow[0];
            resampledWithDimensions.height = height ?? imageWindow[3] - imageWindow[1];
            return resampledWithDimensions;
        }
        const valueArraysWithDimensions = /** @type {ReadRasterResult} */ (valueArrays);
        valueArraysWithDimensions.width = width || imageWindow[2] - imageWindow[0];
        valueArraysWithDimensions.height = height || imageWindow[3] - imageWindow[1];
        return valueArraysWithDimensions;
    }
    /**
     * @overload
     * @param {ReadRastersOptions & {interleave: true}} options optional parameters
     * @returns {Promise<import("./geotiff.js").TypedArrayWithDimensions>} the decoded arrays as a promise
     */
    /**
     * @overload
     * @param {ReadRastersOptions & {interleave: false}} options optional parameters
     * @returns {Promise<import("./geotiff.js").TypedArrayArrayWithDimensions>} the decoded arrays as a promise
     */
    /**
     * @overload
     * @param {ReadRastersOptions & {interleave: boolean}} options optional parameters
     * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
     */
    /**
     * @overload
     * @param {ReadRastersOptions} [options={}] optional parameters
     * @returns {Promise<import("./geotiff.js").TypedArrayArrayWithDimensions>} the decoded arrays as a promise
     */
    /**
     * Reads raster data from the image. This function reads all selected samples
     * into separate arrays of the correct type for that sample or into a single
     * combined array when `interleave` is set. When provided, only a subset
     * of the raster is read for each sample.
     *
     * @param {ReadRastersOptions} [options={}] optional parameters
     * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
     */
    async readRasters(options = {}) {
        const { window: wnd, samples = [], pool = null, width, height, resampleMethod, fillValue, signal, } = options;
        const interleave = 'interleave' in options && options.interleave;
        const imageWindow = wnd || [0, 0, this.getWidth(), this.getHeight()];
        // check parameters
        if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {
            throw new Error('Invalid subsets');
        }
        const imageWindowWidth = imageWindow[2] - imageWindow[0];
        const imageWindowHeight = imageWindow[3] - imageWindow[1];
        const numPixels = imageWindowWidth * imageWindowHeight;
        const samplesPerPixel = this.getSamplesPerPixel();
        if (!samples || !samples.length) {
            for (let i = 0; i < samplesPerPixel; ++i) {
                samples.push(i);
            }
        }
        else {
            for (let i = 0; i < samples.length; ++i) {
                if (samples[i] >= samplesPerPixel) {
                    return Promise.reject(new RangeError(`Invalid sample index '${samples[i]}'.`));
                }
            }
        }
        /** @type {TypedArray|TypedArray[]} */
        let valueArrays;
        if (interleave) {
            const { fileDirectory } = this;
            const sampleFormat = fileDirectory.getValue('SampleFormat');
            const format = sampleFormat
                ? Math.max.apply(null, Array.from(sampleFormat)) : 1;
            if (format !== 1 && format !== 2 && format !== 3) {
                throw new Error('Unsupported sample format for interleaved data. Must be 1, 2, or 3.');
            }
            const bitsPerSample_ = fileDirectory.getValue('BitsPerSample');
            const bitsPerSample = bitsPerSample_
                ? Math.max.apply(null, Array.from(bitsPerSample_)) : 8;
            valueArrays = arrayForType(format, bitsPerSample, numPixels * samples.length);
            if (fillValue) {
                if (Array.isArray(fillValue)) {
                    throw new Error('When reading interleaved data, fillValue must be a single number.');
                }
                valueArrays.fill(fillValue);
            }
        }
        else {
            valueArrays = [];
            for (let i = 0; i < samples.length; ++i) {
                const valueArray = this.getArrayForSample(samples[i], numPixels);
                if (Array.isArray(fillValue) && i < fillValue.length) {
                    valueArray.fill(fillValue[i]);
                }
                else if (fillValue && !Array.isArray(fillValue)) {
                    valueArray.fill(fillValue);
                }
                valueArrays.push(valueArray);
            }
        }
        const compression = this.fileDirectory.getValue('Compression') || 1;
        const decoderParameters = await (0,_compression_index_js__WEBPACK_IMPORTED_MODULE_5__.getDecoderParameters)(compression, this.fileDirectory);
        const poolOrDecoder = pool
            ? pool.bindParameters(compression, decoderParameters)
            : await (0,_compression_index_js__WEBPACK_IMPORTED_MODULE_5__.getDecoder)(compression, decoderParameters);
        const result = await this._readRaster(imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod, signal);
        return result;
    }
    /**
     * @overload
     * @param {ReadRGBOptions & {interleave: true}} options optional parameters
     * @returns {Promise<import("./geotiff.js").TypedArrayWithDimensions>} the RGB array as a Promise
     */
    /**
     * @overload
     * @param {ReadRGBOptions & {interleave: false}} options optional parameters
     * @returns {Promise<import("./geotiff.js").TypedArrayArrayWithDimensions>} the RGB array as a Promise
     */
    /**
     * @overload
     * @param {ReadRGBOptions & {interleave: boolean}} options optional parameters
     * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
     */
    /**
     * @overload
     * @param {ReadRGBOptions} [options={}] optional parameters
     * @returns {Promise<import("./geotiff.js").TypedArrayArrayWithDimensions>} the RGB array as a Promise
     */
    /**
     * Reads raster data from the image as RGB.
     * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
     * When no other method is applicable, the first sample is used to produce a
     * grayscale image.
     * When provided, only a subset of the raster is read for each sample.
     *
     * @param {ReadRGBOptions} [options] optional parameters
     * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
     */
    async readRGB(options = {}) {
        const { window, pool = null, width, height, resampleMethod, enableAlpha = false, signal } = options;
        const interleave = ('interleave' in options && options.interleave) ?? false;
        const imageWindow = window || [0, 0, this.getWidth(), this.getHeight()];
        // check parameters
        if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {
            throw new Error('Invalid subsets');
        }
        const pi = this.fileDirectory.getValue('PhotometricInterpretation');
        if (pi === _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.RGB) {
            let s = [0, 1, 2];
            const extraSamples = this.fileDirectory.getValue('ExtraSamples');
            if (extraSamples && extraSamples[0] !== _globals_js__WEBPACK_IMPORTED_MODULE_3__.ExtraSamplesValues.Unspecified && enableAlpha) {
                s = [];
                const bitsPerSample = this.fileDirectory.getValue('BitsPerSample') || [];
                for (let i = 0; i < bitsPerSample.length; i += 1) {
                    s.push(i);
                }
            }
            return this.readRasters({
                window,
                interleave,
                samples: s,
                pool,
                width,
                height,
                resampleMethod,
                signal,
            });
        }
        let samples;
        switch (pi) {
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.WhiteIsZero:
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.BlackIsZero:
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.Palette:
                samples = [0];
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.CMYK:
                samples = [0, 1, 2, 3];
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.YCbCr:
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.CIELab:
                samples = [0, 1, 2];
                break;
            default:
                throw new Error('Invalid or unsupported photometric interpretation.');
        }
        const subOptions = {
            window: imageWindow,
            /** @type {true} */
            interleave: true,
            samples,
            pool,
            width,
            height,
            resampleMethod,
            signal,
        };
        const { fileDirectory } = this;
        const raster = await this.readRasters(subOptions);
        const max = 2 ** this.getBitsPerSample(0);
        let data;
        switch (pi) {
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.WhiteIsZero:
                data = (0,_rgb_js__WEBPACK_IMPORTED_MODULE_4__.fromWhiteIsZero)(raster, max);
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.BlackIsZero:
                data = (0,_rgb_js__WEBPACK_IMPORTED_MODULE_4__.fromBlackIsZero)(raster, max);
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.Palette:
                data = (0,_rgb_js__WEBPACK_IMPORTED_MODULE_4__.fromPalette)(raster, /** @type {Uint16Array} */ (await fileDirectory.loadValue('ColorMap')));
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.CMYK:
                data = (0,_rgb_js__WEBPACK_IMPORTED_MODULE_4__.fromCMYK)(raster);
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.YCbCr:
                data = (0,_rgb_js__WEBPACK_IMPORTED_MODULE_4__.fromYCbCr)(raster);
                break;
            case _globals_js__WEBPACK_IMPORTED_MODULE_3__.photometricInterpretations.CIELab:
                data = (0,_rgb_js__WEBPACK_IMPORTED_MODULE_4__.fromCIELab)(raster);
                break;
            default:
                throw new Error('Unsupported photometric interpretation.');
        }
        // if non-interleaved data is requested, we must split the channels
        // into their respective arrays
        if (!interleave) {
            const red = new Uint8Array(data.length / 3);
            const green = new Uint8Array(data.length / 3);
            const blue = new Uint8Array(data.length / 3);
            for (let i = 0, j = 0; i < data.length; i += 3, ++j) {
                red[j] = data[i];
                green[j] = data[i + 1];
                blue[j] = data[i + 2];
            }
            data = [red, green, blue];
        }
        const dataWithDimensions = /** @type {import("./geotiff.js").ReadRasterResult} */ (data);
        dataWithDimensions.width = raster.width;
        dataWithDimensions.height = raster.height;
        return dataWithDimensions;
    }
    /**
     * Returns an array of tiepoints.
     * @returns {Promise<Array<{i: number, j: number, k: number, x: number, y: number, z: number}>>} the tiepoints
     */
    async getTiePoints() {
        if (!this.fileDirectory.hasTag('ModelTiepoint')) {
            return [];
        }
        const modelTiePoint = await this.fileDirectory.loadValue('ModelTiepoint');
        if (typeof modelTiePoint !== 'object') {
            throw new Error('Expected ModelTiepoint to be an array or typed array.');
        }
        const tiePoints = [];
        for (let i = 0; i < modelTiePoint.length; i += 6) {
            tiePoints.push({
                i: modelTiePoint[i],
                j: modelTiePoint[i + 1],
                k: modelTiePoint[i + 2],
                x: modelTiePoint[i + 3],
                y: modelTiePoint[i + 4],
                z: modelTiePoint[i + 5],
            });
        }
        return tiePoints;
    }
    /**
     * Returns the parsed GDAL metadata items.
     *
     * If sample is passed to null, dataset-level metadata will be returned.
     * Otherwise only metadata specific to the provided sample will be returned.
     *
     * @param {number|null} [sample=null] The sample index.
     * @returns {Promise<Record<string, unknown>|null>} The GDAL metadata items
     */
    async getGDALMetadata(sample = null) {
        /** @type {Record<string, unknown>} */
        const metadata = {};
        if (!this.fileDirectory.hasTag('GDAL_METADATA')) {
            return null;
        }
        const string = await this.fileDirectory.loadValue('GDAL_METADATA');
        /** @type {Array<{inner: unknown}>} */
        let items = (0,xml_utils_find_tags_by_name__WEBPACK_IMPORTED_MODULE_2__["default"])(string, 'Item');
        if (sample === null) {
            items = items.filter((item) => (0,xml_utils_get_attribute__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 'sample') === undefined);
        }
        else {
            items = items.filter((item) => Number((0,xml_utils_get_attribute__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 'sample')) === sample);
        }
        for (let i = 0; i < items.length; ++i) {
            const item = items[i];
            metadata[(0,xml_utils_get_attribute__WEBPACK_IMPORTED_MODULE_1__["default"])(item, 'name')] = item.inner;
        }
        return metadata;
    }
    /**
     * Returns the GDAL nodata value
     * @returns {number|null}
     */
    getGDALNoData() {
        const string = this.fileDirectory.hasTag('GDAL_NODATA') && this.fileDirectory.getValue('GDAL_NODATA');
        if (!string) {
            return null;
        }
        return Number(string.substring(0, string.length - 1));
    }
    /**
     * Returns the image origin as a XYZ-vector. When the image has no affine
     * transformation, then an exception is thrown.
     * @returns {Array<number>} The origin as a vector
     */
    getOrigin() {
        const tiePoints = this.fileDirectory.getValue('ModelTiepoint');
        const modelTransformation = this.fileDirectory.getValue('ModelTransformation');
        if (tiePoints && tiePoints.length === 6) {
            return [
                tiePoints[3],
                tiePoints[4],
                tiePoints[5],
            ];
        }
        if (modelTransformation) {
            return [
                modelTransformation[3],
                modelTransformation[7],
                modelTransformation[11],
            ];
        }
        throw new Error('The image does not have an affine transformation.');
    }
    /**
     * Returns the image resolution as a XYZ-vector. When the image has no affine
     * transformation, then an exception is thrown.
     * @param {GeoTIFFImage|null} [referenceImage=null] A reference image to calculate the resolution from
     *                                             in cases when the current image does not have the
     *                                             required tags on its own.
     * @returns {Array<number>} The resolution as a vector
     */
    getResolution(referenceImage = null) {
        const modelPixelScale = this.fileDirectory.getValue('ModelPixelScale');
        const modelTransformation = this.fileDirectory.getValue('ModelTransformation');
        if (modelPixelScale) {
            return [
                modelPixelScale[0],
                -modelPixelScale[1],
                modelPixelScale[2],
            ];
        }
        if (modelTransformation) {
            if (modelTransformation[1] === 0 && modelTransformation[4] === 0) {
                return [
                    modelTransformation[0],
                    -modelTransformation[5],
                    modelTransformation[10],
                ];
            }
            return [
                Math.sqrt((modelTransformation[0] * modelTransformation[0])
                    + (modelTransformation[4] * modelTransformation[4])),
                -Math.sqrt((modelTransformation[1] * modelTransformation[1])
                    + (modelTransformation[5] * modelTransformation[5])),
                modelTransformation[10]
            ];
        }
        if (referenceImage) {
            const [refResX, refResY, refResZ] = referenceImage.getResolution();
            return [
                refResX * referenceImage.getWidth() / this.getWidth(),
                refResY * referenceImage.getHeight() / this.getHeight(),
                refResZ * referenceImage.getWidth() / this.getWidth(),
            ];
        }
        throw new Error('The image does not have an affine transformation.');
    }
    /**
     * Returns whether or not the pixels of the image depict an area (or point).
     * @returns {Boolean} Whether the pixels are a point
     */
    pixelIsArea() {
        return this.getGeoKeys()?.GTRasterTypeGeoKey === 1;
    }
    /**
     * Returns the image bounding box as an array of 4 values: min-x, min-y,
     * max-x and max-y. When the image has no affine transformation, then an
     * exception is thrown.
     * @param {boolean} [tilegrid=false] If true return extent for a tilegrid
     *                                   without adjustment for ModelTransformation.
     * @returns {Array<number>} The bounding box
     */
    getBoundingBox(tilegrid = false) {
        const height = this.getHeight();
        const width = this.getWidth();
        const modelTransformation = this.fileDirectory.getValue('ModelTransformation');
        if (modelTransformation && !tilegrid) {
            const [a, b, , d, e, f, , h] = modelTransformation;
            const corners = [
                [0, 0],
                [0, height],
                [width, 0],
                [width, height],
            ];
            const projected = corners.map(([I, J]) => [
                d + (a * I) + (b * J),
                h + (e * I) + (f * J),
            ]);
            const xs = projected.map((pt) => pt[0]);
            const ys = projected.map((pt) => pt[1]);
            return [
                Math.min(...xs),
                Math.min(...ys),
                Math.max(...xs),
                Math.max(...ys),
            ];
        }
        else {
            const origin = this.getOrigin();
            const resolution = this.getResolution();
            const x1 = origin[0];
            const y1 = origin[1];
            const x2 = x1 + (resolution[0] * width);
            const y2 = y1 + (resolution[1] * height);
            return [
                Math.min(x1, x2),
                Math.min(y1, y2),
                Math.max(x1, x2),
                Math.max(y1, y2),
            ];
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeoTIFFImage);
//# sourceMappingURL=geotiffimage.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/geotiffwriter.js"
/*!***********************************************************!*\
  !*** ./node_modules/geotiff/dist-module/geotiffwriter.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeGeotiff: () => (/* binding */ writeGeotiff)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./node_modules/geotiff/dist-module/globals.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/geotiff/dist-module/utils.js");
/*
  Some parts of this file are based on UTIF.js,
  which was released under the MIT License.
  You can view that here:
  https://github.com/photopea/UTIF.js/blob/master/LICENSE
*/


/** @import {GeotiffWriterMetadata} from './geotiff.js' */
/** @typedef {(buff: Uint8Array, p: number) => number} Read */
const tagName2Code = _globals_js__WEBPACK_IMPORTED_MODULE_0__.tags;
const geoKeyName2Code = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.invert)(_globals_js__WEBPACK_IMPORTED_MODULE_0__.geoKeyNames);
/** @type {Record<number|string, keyof fieldTagTypes>} */
const name2code = {};
(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.assign)(name2code, tagName2Code);
(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.assign)(name2code, geoKeyName2Code);
const typeName2byte = _globals_js__WEBPACK_IMPORTED_MODULE_0__.fieldTypes;
// config variables
const numBytesInIfd = 1000;
/**
 * @typedef {Object} BinBE
 * @property {(data: Uint8Array, o: number) => number} nextZero
 * @property {Read} readUshort
 * @property {Read} readShort
 * @property {Read} readInt
 * @property {Read} readUint
 * @property {(buff: Uint8Array, p: number, l: Array<number>) => string} readASCII
 * @property {Read} readFloat
 * @property {Read} readDouble
 * @property {(buff: Uint8Array, p: number, n: number) => void} writeUshort
 * @property {(buff: Uint8Array, p: number, n: number) => void} writeUint
 * @property {(buff: Uint8Array, p: number, s: string) => void} writeASCII
 * @property {Uint8Array} ui8
 * @property {Float64Array} fl64
 * @property {Float32Array} fl32
 * @property {Uint32Array} ui32
 * @property {Int32Array} i32
 * @property {Int16Array} i16
 * @property {(buff: Uint8Array, p: number, n: number) => void} writeDouble
 */
const ui8 = new Uint8Array(8);
/** @type {BinBE} */
const _binBE = {
    /** @type {Read} */
    nextZero: (data, o) => {
        let oincr = o;
        while (data[oincr] !== 0) {
            oincr++;
        }
        return oincr;
    },
    /** @type {Read} */
    readUshort: (buff, p) => {
        return (buff[p] << 8) | buff[p + 1];
    },
    /** @type {Read} */
    readShort: (buff, p) => {
        const a = _binBE.ui8;
        a[0] = buff[p + 1];
        a[1] = buff[p + 0];
        return _binBE.i16[0];
    },
    /** @type {Read} */
    readInt: (buff, p) => {
        const a = _binBE.ui8;
        a[0] = buff[p + 3];
        a[1] = buff[p + 2];
        a[2] = buff[p + 1];
        a[3] = buff[p + 0];
        return _binBE.i32[0];
    },
    /** @type {Read} */
    readUint: (buff, p) => {
        const a = _binBE.ui8;
        a[0] = buff[p + 3];
        a[1] = buff[p + 2];
        a[2] = buff[p + 1];
        a[3] = buff[p + 0];
        return _binBE.ui32[0];
    },
    /**
     * @param {Uint8Array} buff
     * @param {number} p
     * @param {Array<number>} l
     * @returns {string}
     */
    readASCII: (buff, p, l) => {
        return l.map((i) => String.fromCharCode(buff[p + i])).join('');
    },
    /** @type {Read} */
    readFloat: (buff, p) => {
        const a = _binBE.ui8;
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(4, (i) => {
            a[i] = buff[p + 3 - i];
        });
        return _binBE.fl32[0];
    },
    /** @type {Read} */
    readDouble: (buff, p) => {
        const a = _binBE.ui8;
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(8, (i) => {
            a[i] = buff[p + 7 - i];
        });
        return _binBE.fl64[0];
    },
    /**
     * @param {Uint8Array} buff
     * @param {number} p
     * @param {number} n
     */
    writeUshort: (buff, p, n) => {
        buff[p] = (n >> 8) & 255;
        buff[p + 1] = n & 255;
    },
    /**
     * @param {Uint8Array} buff
     * @param {number} p
     * @param {number} n
     */
    writeUint: (buff, p, n) => {
        buff[p] = (n >> 24) & 255;
        buff[p + 1] = (n >> 16) & 255;
        buff[p + 2] = (n >> 8) & 255;
        buff[p + 3] = (n >> 0) & 255;
    },
    /**
     * @param {Uint8Array} buff
     * @param {number} p
     * @param {string} s
     */
    writeASCII: (buff, p, s) => {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(s.length, (i) => {
            buff[p + i] = s.charCodeAt(i);
        });
    },
    ui8,
    fl64: new Float64Array(ui8.buffer),
    fl32: new Float32Array(ui8.buffer),
    ui32: new Uint32Array(ui8.buffer),
    i32: new Int32Array(ui8.buffer),
    i16: new Int16Array(ui8.buffer),
    /**
      * @param {Uint8Array} buff
      * @param {number} p
      * @param {number} n
      */
    writeDouble: (buff, p, n) => {
        _binBE.fl64[0] = n;
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(8, (i) => {
            buff[p + i] = _binBE.ui8[7 - i];
        });
    },
};
/**
 * @param {BinBE} bin
 * @param {Uint8Array} data
 * @param {number} _offset
 * @param {Record<keyof fieldTagTypes, any>} ifd
 * @returns {[number, number]}
 */
const _writeIFD = (bin, data, _offset, ifd) => {
    let offset = _offset;
    const keys = /** @type {Array<keyof fieldTagTypes>} */ (Object.keys(ifd).filter((key) => {
        return key !== undefined && key !== null && key !== 'undefined';
    }).map(Number));
    bin.writeUshort(data, offset, keys.length);
    offset += 2;
    let eoff = offset + (12 * keys.length) + 4;
    for (const key of keys) {
        const typeName = /** @type {keyof typeName2byte} */ (_globals_js__WEBPACK_IMPORTED_MODULE_0__.fieldTagTypes[key]);
        const typeNum = typeName2byte[typeName];
        if (typeName == null || typeName === undefined || typeof typeName === 'undefined') {
            throw new Error(`unknown type of tag: ${key}`);
        }
        let val = ifd[key];
        if (val === undefined) {
            throw new Error(`failed to get value for key ${key}`);
        }
        // ASCIIZ format with trailing 0 character
        // http://www.fileformat.info/format/tiff/corion.htm
        // https://stackoverflow.com/questions/7783044/whats-the-difference-between-asciiz-vs-ascii
        if (typeName === 'ASCII' && typeof val === 'string' && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.endsWith)(val, '\u0000') === false) {
            val += '\u0000';
        }
        const num = val.length;
        bin.writeUshort(data, offset, key);
        offset += 2;
        bin.writeUshort(data, offset, typeNum);
        offset += 2;
        bin.writeUint(data, offset, num);
        offset += 4;
        let dlen = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][typeNum] * num;
        let toff = offset;
        if (dlen > 4) {
            bin.writeUint(data, offset, eoff);
            toff = eoff;
        }
        if (typeName === 'ASCII') {
            bin.writeASCII(data, toff, val);
        }
        else if (typeName === 'SHORT') {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(num, (i) => {
                bin.writeUshort(data, toff + (2 * i), val[i]);
            });
        }
        else if (typeName === 'LONG') {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(num, (i) => {
                bin.writeUint(data, toff + (4 * i), val[i]);
            });
        }
        else if (typeName === 'RATIONAL') {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(num, (i) => {
                bin.writeUint(data, toff + (8 * i), Math.round(val[i] * 10000));
                bin.writeUint(data, toff + (8 * i) + 4, 10000);
            });
        }
        else if (typeName === 'DOUBLE') {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(num, (i) => {
                bin.writeDouble(data, toff + (8 * i), val[i]);
            });
        }
        if (dlen > 4) {
            dlen += (dlen & 1);
            eoff += dlen;
        }
        offset += 4;
    }
    return [offset, eoff];
};
/**
 * @param {Array<Record<keyof fieldTagTypes, unknown>>} ifds
 * @returns {ArrayBuffer}
 */
const encodeIfds = (ifds) => {
    const data = new Uint8Array(numBytesInIfd);
    let offset = 4;
    const bin = _binBE;
    // set big-endian byte-order
    // https://en.wikipedia.org/wiki/TIFF#Byte_order
    data[0] = 77;
    data[1] = 77;
    // set format-version number
    // https://en.wikipedia.org/wiki/TIFF#Byte_order
    data[3] = 42;
    let ifdo = 8;
    bin.writeUint(data, offset, ifdo);
    offset += 4;
    ifds.forEach((ifd, i) => {
        const noffs = _writeIFD(bin, data, ifdo, ifd);
        ifdo = noffs[1];
        if (i < ifds.length - 1) {
            bin.writeUint(data, noffs[0], ifdo);
        }
    });
    if (data.slice) {
        return data.slice(0, ifdo).buffer;
    }
    // node hasn't implemented slice on Uint8Array yet
    const result = new Uint8Array(ifdo);
    for (let i = 0; i < ifdo; i++) {
        result[i] = data[i];
    }
    return result.buffer;
};
/**
 * @param {Array<number>|import('./geotiff.js').TypedArray} values
 * @param {number} width
 * @param {number} height
 * @param {GeotiffWriterMetadata} metadata
 * @returns {ArrayBuffer}
 */
const encodeImage = (values, width, height, metadata) => {
    if (height === undefined || height === null) {
        throw new Error(`you passed into encodeImage a width of type ${height}`);
    }
    if (width === undefined || width === null) {
        throw new Error(`you passed into encodeImage a width of type ${width}`);
    }
    /** @type {Record<number|string, Array<number|string>|number|string|undefined>} */
    const ifd = {
        256: [width], // ImageWidth
        257: [height], // ImageLength
        273: [numBytesInIfd], // strips offset
        278: [height], // RowsPerStrip
        305: 'geotiff.js', // no array for ASCII(Z)
    };
    if (metadata) {
        for (const i in metadata) {
            if (metadata.hasOwnProperty(i)) {
                ifd[i] = metadata[ /** @type {keyof GeotiffWriterMetadata} */(i)];
            }
        }
    }
    const prfx = new Uint8Array(encodeIfds([ifd]));
    const dataType = /** @type {keyof typeMap} */ (values.constructor.name);
    const TypedArray = _utils_js__WEBPACK_IMPORTED_MODULE_1__.typeMap[dataType];
    // default for Float64
    let elementSize = 8;
    if (TypedArray) {
        elementSize = TypedArray.BYTES_PER_ELEMENT;
    }
    const data = new Uint8Array(numBytesInIfd + (values.length * elementSize));
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(prfx.length, (i) => {
        data[i] = prfx[i];
    });
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.forEach)(values, (value, i) => {
        if (!TypedArray) {
            data[numBytesInIfd + i] = value;
            return;
        }
        const buffer = new ArrayBuffer(elementSize);
        const view = new DataView(buffer);
        if (dataType === 'Float64Array') {
            view.setFloat64(0, value, false);
        }
        else if (dataType === 'Float32Array') {
            view.setFloat32(0, value, false);
        }
        else if (dataType === 'Uint32Array') {
            view.setUint32(0, value, false);
        }
        else if (dataType === 'Uint16Array') {
            view.setUint16(0, value, false);
        }
        else if (dataType === 'Uint8Array') {
            view.setUint8(0, value);
        }
        const typedArray = new Uint8Array(view.buffer);
        const idx = numBytesInIfd + (i * elementSize);
        for (let j = 0; j < elementSize; j++) {
            data[idx + j] = typedArray[j];
        }
    });
    return data.buffer;
};
/**
 * @template T
 * @param {Record<number|string, T>} input
 * @returns {Record<number|string, T>}
 */
const convertToTids = (input) => {
    /** @type {Record<number|string, T>} */
    const result = {};
    for (const key in input) {
        if (key !== 'StripOffsets') {
            if (!name2code[key]) {
                console.error(key, 'not in name2code:', Object.keys(name2code));
            }
            result[name2code[key]] = input[key];
        }
    }
    return result;
};
/**
 * @template T
 * @param {T} input
 * @returns {T extends any[] ? T : T[]}
 */
const toArray = (input) => {
    if (Array.isArray(input)) {
        return /** @type {T extends any[] ? T : T[]} */ (input);
    }
    return /** @type {T extends any[] ? T : T[]} */ ([input]);
};
/** @type {Partial<GeotiffWriterMetadata>} */
const metadataDefaults = {
    Compression: 1, // no compression
    PlanarConfiguration: 1,
    ExtraSamples: 0,
};
/**
 * @param {Array<number>|Array<Array<Array<number>>>|import('./geotiff.js').TypedArray} data
 * @param {GeotiffWriterMetadata} metadata
 * @returns {ArrayBuffer}
 */
function writeGeotiff(data, metadata) {
    const isFlattened = typeof data[0] === 'number';
    /** @type {number} */
    let height;
    /** @type {number} */
    let numBands;
    /** @type {number} */
    let width;
    /** @type {Array<number>} */
    let flattenedValues;
    if (isFlattened) {
        const arrayFlat = /** @type {Array<number>} */ (data);
        const metaHeight = metadata.height || metadata.ImageLength;
        if (metaHeight === undefined || typeof metaHeight !== 'number') {
            throw new Error('height is required to be a number in metadata if data is a flat array');
        }
        height = metaHeight;
        const metaWidth = metadata.width || metadata.ImageWidth;
        if (metaWidth === undefined || typeof metaWidth !== 'number') {
            throw new Error('width is required to be a number in metadata if data is a flat array');
        }
        width = metaWidth;
        numBands = arrayFlat.length / (height * width);
        flattenedValues = arrayFlat;
    }
    else {
        const array3d = /** @type {Array<Array<Array<number>>>} */ (data);
        numBands = array3d.length;
        height = array3d[0].length;
        width = array3d[0][0].length;
        flattenedValues = [];
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(height, (rowIndex) => {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(width, (columnIndex) => {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(numBands, (bandIndex) => {
                    flattenedValues.push(array3d[bandIndex][rowIndex][columnIndex]);
                });
            });
        });
    }
    metadata.ImageLength = height;
    delete metadata.height;
    metadata.ImageWidth = width;
    delete metadata.width;
    // consult https://www.loc.gov/preservation/digital/formats/content/tiff_tags.shtml
    if (!metadata.BitsPerSample) {
        let bitsPerSample = 8;
        if (ArrayBuffer.isView(flattenedValues)) {
            bitsPerSample = 8 * Object.getPrototypeOf(flattenedValues).BYTES_PER_ELEMENT;
        }
        metadata.BitsPerSample = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(numBands, () => bitsPerSample);
    }
    const finalMetadata = metadata;
    if (!('Compression' in finalMetadata)) {
        finalMetadata.Compression = metadataDefaults.Compression;
    }
    if (!('PlanarConfiguration' in finalMetadata)) {
        finalMetadata.PlanarConfiguration = metadataDefaults.PlanarConfiguration;
    }
    if (!('ExtraSamples' in finalMetadata)) {
        finalMetadata.ExtraSamples = metadataDefaults.ExtraSamples;
    }
    // The color space of the image data.
    // 1=black is zero and 2=RGB.
    if (!finalMetadata.PhotometricInterpretation) {
        if (!Array.isArray(finalMetadata.BitsPerSample)) {
            throw new Error('BitsPerSample must be an array when PhotometricInterpretation is not provided');
        }
        finalMetadata.PhotometricInterpretation = finalMetadata.BitsPerSample.length === 3 ? 2 : 1;
    }
    // The number of components per pixel.
    if (!finalMetadata.SamplesPerPixel) {
        finalMetadata.SamplesPerPixel = [numBands];
    }
    if (!finalMetadata.StripByteCounts) {
        // we are only writing one strip
        // default for Float64
        let elementSize = 8;
        if (ArrayBuffer.isView(flattenedValues)) {
            elementSize = Object.getPrototypeOf(flattenedValues).BYTES_PER_ELEMENT;
        }
        finalMetadata.StripByteCounts = [numBands * elementSize * height * width];
    }
    if (!finalMetadata.ModelPixelScale && !finalMetadata.ModelTransformation) {
        // assumes raster takes up exactly the whole globe
        finalMetadata.ModelPixelScale = [360 / width, 180 / height, 0];
    }
    if (!finalMetadata.SampleFormat) {
        let sampleFormat = 1;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTypedFloatArray)(flattenedValues)) {
            sampleFormat = 3;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTypedIntArray)(flattenedValues)) {
            sampleFormat = 2;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTypedUintArray)(flattenedValues)) {
            sampleFormat = 1;
        }
        finalMetadata.SampleFormat = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.times)(numBands, () => sampleFormat);
    }
    // if didn't pass in projection information, assume the popular 4326 "geographic projection"
    if (!finalMetadata.hasOwnProperty('GeographicTypeGeoKey') && !finalMetadata.hasOwnProperty('ProjectedCSTypeGeoKey')) {
        finalMetadata.GeographicTypeGeoKey = 4326;
        if (!finalMetadata.ModelTransformation) {
            finalMetadata.ModelTiepoint = [0, 0, 0, -180, 90, 0]; // raster fits whole globe
        }
        finalMetadata.GeogCitationGeoKey = 'WGS 84';
        finalMetadata.GTModelTypeGeoKey = 2;
    }
    const geoKeys = Object.keys(finalMetadata)
        .filter((key) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.endsWith)(key, 'GeoKey'))
        .sort((a, b) => name2code[a] - name2code[b]);
    // If not provided, build GeoKeyDirectory as well as GeoAsciiParamsTag and GeoDoubleParamsTag
    // if GeoAsciiParams/GeoDoubleParams were passed in, we assume offsets are already correct
    // Spec http://geotiff.maptools.org/spec/geotiff2.4.html
    if (!finalMetadata.GeoKeyDirectory) {
        // Only build ASCII / DOUBLE params if not provided
        let geoAsciiParams = finalMetadata.GeoAsciiParams || '';
        if (typeof geoAsciiParams !== 'string') {
            throw new Error('GeoAsciiParams must be a string if provided');
        }
        let currentAsciiOffset = geoAsciiParams.length;
        const geoDoubleParams = finalMetadata.GeoDoubleParams || [];
        if (!Array.isArray(geoDoubleParams)) {
            throw new Error('GeoDoubleParams must be an array if provided');
        }
        let currentDoubleIndex = geoDoubleParams.length;
        // Since geoKeys already sorted and filtered, do a single pass to append to corresponding directory for SHORT/ASCII/DOUBLE
        const GeoKeyDirectory = [1, 1, 0, 0];
        let validKeys = 0;
        geoKeys.forEach((geoKey) => {
            const KeyID = name2code[geoKey];
            const tagType = _globals_js__WEBPACK_IMPORTED_MODULE_0__.fieldTagTypes[KeyID];
            const val = finalMetadata[ /** @type {keyof import('./geotiff.js').GeotiffWriterMetadata} */(geoKey)];
            if (val === undefined) {
                return;
            }
            let Count;
            let TIFFTagLocation;
            /** @type {number} */
            let valueOffset;
            if (tagType === 'SHORT') {
                Count = 1;
                TIFFTagLocation = 0;
                if (typeof val !== 'number') {
                    throw new Error(`GeoKey ${geoKey} with type SHORT must have a number value`);
                }
                valueOffset = val;
            }
            else if (tagType === 'ASCII') {
                if (!finalMetadata.GeoAsciiParams) {
                    const valStr = `${val.toString()}\u0000`;
                    TIFFTagLocation = Number(name2code.GeoAsciiParams); // 34737
                    valueOffset = currentAsciiOffset;
                    Count = valStr.length;
                    geoAsciiParams += valStr;
                    currentAsciiOffset += valStr.length;
                }
                else {
                    return;
                }
            }
            else if (tagType === 'DOUBLE') {
                if (!finalMetadata.GeoDoubleParams) {
                    const arr = toArray(val);
                    TIFFTagLocation = Number(name2code.GeoDoubleParams); // 34736
                    valueOffset = currentDoubleIndex;
                    Count = arr.length;
                    for (const v of arr) {
                        geoDoubleParams.push(Number(v));
                        currentDoubleIndex++;
                    }
                }
                else {
                    return;
                }
            }
            else {
                console.warn(`[geotiff.js] couldn't get TIFFTagLocation for ${geoKey}`);
                return;
            }
            GeoKeyDirectory.push(KeyID, TIFFTagLocation, Count, valueOffset);
            validKeys++;
        });
        // Write GeoKeyDirectory, GeoAsciiParams, GeoDoubleParams
        GeoKeyDirectory[3] = validKeys;
        finalMetadata.GeoKeyDirectory = GeoKeyDirectory;
        if (!finalMetadata.GeoAsciiParams && geoAsciiParams.length > 0) {
            finalMetadata.GeoAsciiParams = geoAsciiParams;
        }
        if (!finalMetadata.GeoDoubleParams && geoDoubleParams.length > 0) {
            finalMetadata.GeoDoubleParams = geoDoubleParams;
        }
    }
    // cleanup original GeoKeys metadata, because stored in GeoKeyDirectory tag
    for (const geoKey of geoKeys) {
        if (finalMetadata.hasOwnProperty(geoKey)) {
            delete finalMetadata[ /** @type {keyof import('./geotiff.js').GeotiffWriterMetadata} */(geoKey)];
        }
    }
    /** @type {const} */ ([
        'Compression',
        'ExtraSamples',
        'GeographicTypeGeoKey',
        'GTModelTypeGeoKey',
        'GTRasterTypeGeoKey',
        'ImageLength', // synonym of ImageHeight
        'ImageWidth',
        'Orientation',
        'PhotometricInterpretation',
        'ProjectedCSTypeGeoKey',
        'PlanarConfiguration',
        'ResolutionUnit',
        'SamplesPerPixel',
        'XPosition',
        'YPosition',
        'RowsPerStrip',
    ]).forEach((name) => {
        if (finalMetadata[name]) {
            finalMetadata[name] = toArray(finalMetadata[name]);
        }
    });
    const encodedMetadata = convertToTids(finalMetadata);
    const outputImage = encodeImage(flattenedValues, width, height, encodedMetadata);
    return outputImage;
}
//# sourceMappingURL=geotiffwriter.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/globals.js"
/*!*****************************************************!*\
  !*** ./node_modules/geotiff/dist-module/globals.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtraSamplesValues: () => (/* binding */ ExtraSamplesValues),
/* harmony export */   LercAddCompression: () => (/* binding */ LercAddCompression),
/* harmony export */   LercParameters: () => (/* binding */ LercParameters),
/* harmony export */   fieldTagTypes: () => (/* binding */ fieldTagTypes),
/* harmony export */   fieldTypeSizes: () => (/* binding */ fieldTypeSizes),
/* harmony export */   fieldTypes: () => (/* binding */ fieldTypes),
/* harmony export */   geoKeyNames: () => (/* binding */ geoKeyNames),
/* harmony export */   geoKeys: () => (/* binding */ geoKeys),
/* harmony export */   getFieldTypeSize: () => (/* binding */ getFieldTypeSize),
/* harmony export */   getTag: () => (/* binding */ getTag),
/* harmony export */   photometricInterpretations: () => (/* binding */ photometricInterpretations),
/* harmony export */   registerTag: () => (/* binding */ registerTag),
/* harmony export */   resolveTag: () => (/* binding */ resolveTag),
/* harmony export */   tagDefinitions: () => (/* binding */ tagDefinitions),
/* harmony export */   tagDictionary: () => (/* binding */ tagDictionary),
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
/** @import {TypedArray} from './geotiff.js' */
const fieldTypes = {
    BYTE: /** @type {1} */ (0x0001),
    ASCII: /** @type {2} */ (0x0002),
    SHORT: /** @type {3} */ (0x0003),
    LONG: /** @type {4} */ (0x0004),
    RATIONAL: /** @type {5} */ (0x0005),
    SBYTE: /** @type {6} */ (0x0006),
    UNDEFINED: /** @type {7} */ (0x0007),
    SSHORT: /** @type {8} */ (0x0008),
    SLONG: /** @type {9} */ (0x0009),
    SRATIONAL: /** @type {10} */ (0x000a),
    FLOAT: /** @type {11} */ (0x000b),
    DOUBLE: /** @type {12} */ (0x000c),
    // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
    IFD: /** @type {13} */ (0x000d),
    // introduced by BigTIFF
    LONG8: /** @type {16} */ (0x0010),
    SLONG8: /** @type {17} */ (0x0011),
    IFD8: /** @type {18} */ (0x0012),
};
/** @typedef {keyof fieldTypes} FieldTypeName */
/** @typedef {fieldTypes[keyof typeof fieldTypes]} FieldType */
/** @typedef {Record<FieldTypeName, number>} FieldTypeSizes */
const fieldTypeSizes = /** @type {const} */ ({
    [fieldTypes.BYTE]: 1,
    [fieldTypes.ASCII]: 1,
    [fieldTypes.SBYTE]: 1,
    [fieldTypes.UNDEFINED]: 1,
    [fieldTypes.SHORT]: 2,
    [fieldTypes.SSHORT]: 2,
    [fieldTypes.LONG]: 4,
    [fieldTypes.SLONG]: 4,
    [fieldTypes.FLOAT]: 4,
    [fieldTypes.IFD]: 4,
    [fieldTypes.RATIONAL]: 8,
    [fieldTypes.SRATIONAL]: 8,
    [fieldTypes.DOUBLE]: 8,
    [fieldTypes.LONG8]: 8,
    [fieldTypes.SLONG8]: 8,
    [fieldTypes.IFD8]: 8,
});
/** @typedef {fieldTypeSizes[keyof typeof fieldTypeSizes]} FieldTypeSize */
/**
 * Get the byte size for a given field type.
 * @param {FieldType} fieldType The TIFF field type constant
 * @returns {number} The size in bytes
 * @throws {RangeError} If the field type is invalid
 */
function getFieldTypeSize(fieldType) {
    const size = fieldTypeSizes[fieldType];
    if (size === undefined) {
        throw new RangeError(`Invalid field type: ${fieldType}`);
    }
    return size;
}
/**
 * @typedef {Object} TagDictionaryEntry
 * @property {number} tag
 * @property {string} [name]
 * @property {number} [type]
 * @property {boolean} [isArray]
 * @property {boolean} [eager]
 */
const tagDictionary = /** @type {const} */ ({
    NewSubfileType: { tag: 254, type: fieldTypes.LONG, eager: true },
    SubfileType: { tag: 255, type: fieldTypes.SHORT, eager: true },
    ImageWidth: { tag: 256, type: fieldTypes.SHORT, eager: true },
    ImageLength: { tag: 257, type: fieldTypes.SHORT, eager: true },
    BitsPerSample: { tag: 258, type: fieldTypes.SHORT, isArray: true, eager: true },
    Compression: { tag: 259, type: fieldTypes.SHORT, eager: true },
    PhotometricInterpretation: { tag: 262, type: fieldTypes.SHORT, eager: true },
    Threshholding: { tag: 263, type: fieldTypes.SHORT },
    CellWidth: { tag: 264, type: fieldTypes.SHORT },
    CellLength: { tag: 265, type: fieldTypes.SHORT },
    FillOrder: { tag: 266, type: fieldTypes.SHORT },
    DocumentName: { tag: 269, type: fieldTypes.ASCII },
    ImageDescription: { tag: 270, type: fieldTypes.ASCII },
    Make: { tag: 271, type: fieldTypes.ASCII },
    Model: { tag: 272, type: fieldTypes.ASCII },
    StripOffsets: { tag: 273, type: fieldTypes.SHORT, isArray: true },
    Orientation: { tag: 274, type: fieldTypes.SHORT },
    SamplesPerPixel: { tag: 277, type: fieldTypes.SHORT, eager: true },
    RowsPerStrip: { tag: 278, type: fieldTypes.SHORT, eager: true },
    StripByteCounts: { tag: 279, type: fieldTypes.LONG, isArray: true },
    MinSampleValue: { tag: 280, type: fieldTypes.SHORT, isArray: true },
    MaxSampleValue: { tag: 281, type: fieldTypes.SHORT, isArray: true },
    XResolution: { tag: 282, type: fieldTypes.RATIONAL },
    YResolution: { tag: 283, type: fieldTypes.RATIONAL },
    PlanarConfiguration: { tag: 284, type: fieldTypes.SHORT, eager: true },
    PageName: { tag: 285, type: fieldTypes.ASCII },
    XPosition: { tag: 286, type: fieldTypes.RATIONAL },
    YPosition: { tag: 287, type: fieldTypes.RATIONAL },
    FreeOffsets: { tag: 288, type: fieldTypes.LONG },
    FreeByteCounts: { tag: 289, type: fieldTypes.LONG },
    GrayResponseUnit: { tag: 290, type: fieldTypes.SHORT },
    GrayResponseCurve: { tag: 291, type: fieldTypes.SHORT, isArray: true },
    T4Options: { tag: 292, type: fieldTypes.LONG },
    T6Options: { tag: 293, type: fieldTypes.LONG },
    ResolutionUnit: { tag: 296, type: fieldTypes.SHORT },
    PageNumber: { tag: 297, type: fieldTypes.SHORT, isArray: true },
    TransferFunction: { tag: 301, type: fieldTypes.SHORT, isArray: true },
    Software: { tag: 305, type: fieldTypes.ASCII },
    DateTime: { tag: 306, type: fieldTypes.ASCII },
    Artist: { tag: 315, type: fieldTypes.ASCII },
    HostComputer: { tag: 316, type: fieldTypes.ASCII },
    Predictor: { tag: 317, type: fieldTypes.SHORT },
    WhitePoint: { tag: 318, type: fieldTypes.RATIONAL, isArray: true },
    PrimaryChromaticities: { tag: 319, type: fieldTypes.RATIONAL, isArray: true },
    ColorMap: { tag: 320, type: fieldTypes.SHORT, isArray: true },
    HalftoneHints: { tag: 321, type: fieldTypes.SHORT, isArray: true },
    TileWidth: { tag: 322, type: fieldTypes.SHORT, eager: true },
    TileLength: { tag: 323, type: fieldTypes.SHORT, eager: true },
    TileOffsets: { tag: 324, type: fieldTypes.LONG, isArray: true },
    TileByteCounts: { tag: 325, type: fieldTypes.SHORT, isArray: true },
    InkSet: { tag: 332, type: fieldTypes.SHORT },
    InkNames: { tag: 333, type: fieldTypes.ASCII },
    NumberOfInks: { tag: 334, type: fieldTypes.SHORT },
    DotRange: { tag: 336, type: fieldTypes.BYTE, isArray: true },
    TargetPrinter: { tag: 337, type: fieldTypes.ASCII },
    ExtraSamples: { tag: 338, type: fieldTypes.BYTE, isArray: true, eager: true },
    SampleFormat: { tag: 339, type: fieldTypes.SHORT, isArray: true, eager: true },
    SMinSampleValue: { tag: 340, isArray: true },
    SMaxSampleValue: { tag: 341, isArray: true },
    TransferRange: { tag: 342, type: fieldTypes.SHORT, isArray: true },
    JPEGProc: { tag: 512, type: fieldTypes.SHORT },
    JPEGInterchangeFormat: { tag: 513, type: fieldTypes.LONG },
    JPEGInterchangeFormatLngth: { tag: 514, type: fieldTypes.LONG },
    JPEGRestartInterval: { tag: 515, type: fieldTypes.SHORT },
    JPEGLosslessPredictors: { tag: 517, type: fieldTypes.SHORT, isArray: true },
    JPEGPointTransforms: { tag: 518, type: fieldTypes.SHORT, isArray: true },
    JPEGQTables: { tag: 519, type: fieldTypes.LONG, isArray: true },
    JPEGDCTables: { tag: 520, type: fieldTypes.LONG, isArray: true },
    JPEGACTables: { tag: 521, type: fieldTypes.LONG, isArray: true },
    YCbCrCoefficients: { tag: 529, type: fieldTypes.RATIONAL, isArray: true },
    YCbCrSubSampling: { tag: 530, type: fieldTypes.SHORT, isArray: true },
    YCbCrPositioning: { tag: 531, type: fieldTypes.SHORT },
    ReferenceBlackWhite: { tag: 532, type: fieldTypes.LONG, isArray: true },
    Copyright: { tag: 33432, type: fieldTypes.ASCII },
    BadFaxLines: { tag: 326 },
    CleanFaxData: { tag: 327 },
    ClipPath: { tag: 343 },
    ConsecutiveBadFaxLines: { tag: 328 },
    Decode: { tag: 433 },
    DefaultImageColor: { tag: 434 },
    Indexed: { tag: 346 },
    JPEGTables: { tag: 347, isArray: true, eager: true },
    StripRowCounts: { tag: 559, isArray: true },
    SubIFDs: { tag: 330, isArray: true },
    XClipPathUnits: { tag: 344 },
    YClipPathUnits: { tag: 345 },
    ApertureValue: { tag: 37378 },
    ColorSpace: { tag: 40961 },
    DateTimeDigitized: { tag: 36868 },
    DateTimeOriginal: { tag: 36867 },
    ExifIFD: { tag: 34665, name: 'Exif IFD', type: fieldTypes.LONG },
    ExifVersion: { tag: 36864 },
    ExposureTime: { tag: 33434 },
    FileSource: { tag: 41728 },
    Flash: { tag: 37385 },
    FlashpixVersion: { tag: 40960 },
    FNumber: { tag: 33437 },
    ImageUniqueID: { tag: 42016 },
    LightSource: { tag: 37384 },
    MakerNote: { tag: 37500 },
    ShutterSpeedValue: { tag: 37377 },
    UserComment: { tag: 37510 },
    IPTC: { tag: 33723 },
    CZ_LSMINFO: { tag: 34412 },
    ICCProfile: { tag: 34675, name: 'ICC Profile' },
    XMP: { tag: 700 },
    GDAL_METADATA: { tag: 42112 },
    GDAL_NODATA: { tag: 42113, type: fieldTypes.ASCII, eager: true },
    Photoshop: { tag: 34377 },
    ModelPixelScale: { tag: 33550, type: fieldTypes.DOUBLE, isArray: true, eager: true },
    ModelTiepoint: { tag: 33922, type: fieldTypes.DOUBLE, isArray: true, eager: true },
    ModelTransformation: { tag: 34264, type: fieldTypes.DOUBLE, isArray: true, eager: true },
    GeoKeyDirectory: { tag: 34735, type: fieldTypes.SHORT, isArray: true, eager: true },
    GeoDoubleParams: { tag: 34736, type: fieldTypes.DOUBLE, isArray: true, eager: true },
    GeoAsciiParams: { tag: 34737, type: fieldTypes.ASCII, eager: true },
    LercParameters: { tag: 50674, eager: true },
});
/** @typedef {keyof typeof tagDictionary} TagName */
/** @typedef {typeof tagDictionary[keyof typeof tagDictionary]['tag']} Tag */
/**
 * @typedef {Extract<keyof typeof tagDictionary,
 *   { [K in keyof typeof tagDictionary]: (typeof tagDictionary)[K] extends { eager: true }
 *   ? K : never }[keyof typeof tagDictionary]>} EagerTagName
 */
/**
 * @typedef {Extract<Tag, { [K in keyof typeof tagDictionary]: (typeof tagDictionary)[K] extends { eager: true }
 *   ? (typeof tagDictionary)[K]['tag'] : never }[keyof typeof tagDictionary]>} EagerTag
 */
/** @typedef {Extract<typeof tagDictionary[keyof typeof tagDictionary], {type: any}>['type']} TagType */
/**
 * @template {number} T
 * @typedef {T extends 2 ? string : number} GeoTiffPrimitive
 */
/**
 * @template {TagName} T
 * @typedef {typeof tagDictionary[T]} TagDef
 */
/**
 * @typedef {{
 *   1: number;
 *   2: string;
 *   3: number;
 *   4: number;
 *   5: number;
 *   6: number;
 *   7: ArrayBuffer;
 *   8: number;
 *   9: number;
 *   10: number;
 *   11: number;
 *   12: number;
 *   16: number;
 *   17: number;
 *   18: number;
 * }} FieldTypeMap
 */
/**
 * @template {TagName} T
 * @typedef {TagDef<T> extends { isArray: true }
 *   ? (TagDef<T> extends { type: typeof fieldTypes.DOUBLE } ? number[] :
 *      TagDef<T> extends { type: typeof fieldTypes.ASCII } ? string[] :
 *      TagDef<T> extends { type: typeof fieldTypes.BYTE | typeof fieldTypes.SBYTE | typeof fieldTypes.UNDEFINED }
 *        ? Uint8Array | Int8Array :
 *      (number[] | TypedArray))
 *   : (TagDef<T> extends { type: keyof FieldTypeMap } ? FieldTypeMap[TagDef<T>['type']] : any)} TagValue
 */
/**
 * Maps tag names to their numeric values
 * @type {Record<string, number>}
 */
const tags = {};
/**
 * Maps tag numbers to their definitions
 * @type {Record<number, { tag: number, name: string, type: string|number|undefined, isArray: boolean, eager: boolean }>}
 */
const tagDefinitions = {};
/**
 * Registers a new field tag
 * @param {number} tag the numeric tiff tag
 * @param {string} name the name of the tag that will be reported in the IFD
 * @param {keyof fieldTypes|number|undefined} type the tags data type
 * @param {Boolean} isArray whether the tag is an array
 * @param {boolean} [eager=false] whether to eagerly fetch deferred fields.
 *                                 When false (default), tags are loaded lazily on-demand.
 *                                 When true, all tags are loaded immediately during parsing.
 */
function registerTag(tag, name, type, isArray = false, eager = false) {
    tags[name] = tag;
    tagDefinitions[tag] = { tag, name, type: typeof type === 'string' ? fieldTypes[type] : type, isArray, eager };
}
for (const [key, value] of Object.entries(tagDictionary)) {
    const entry = /** @type {TagDictionaryEntry} */ (value);
    registerTag(entry.tag, entry.name || key, entry.type, entry.isArray, entry.eager);
}
/**
 * @param {number|string} tagIdentifier The field tag ID or name
 * @returns {number} the resolved tag ID
 */
function resolveTag(tagIdentifier) {
    if (typeof tagIdentifier === 'number') {
        return tagIdentifier;
    }
    return tags[tagIdentifier];
}
/**
 * @param {number|string} tagIdentifier The field tag ID or name
 * @returns {{ tag: number, name: string, type: string|number|undefined, isArray: boolean, eager: boolean }} the tag definition
 */
function getTag(tagIdentifier) {
    return tagDefinitions[resolveTag(tagIdentifier)];
}
const fieldTagTypes = {
    256: 'SHORT',
    257: 'SHORT',
    258: 'SHORT',
    259: 'SHORT',
    262: 'SHORT',
    270: 'ASCII',
    271: 'ASCII',
    272: 'ASCII',
    273: 'LONG',
    274: 'SHORT',
    277: 'SHORT',
    278: 'LONG',
    279: 'LONG',
    282: 'RATIONAL',
    283: 'RATIONAL',
    284: 'SHORT',
    286: 'SHORT',
    287: 'RATIONAL',
    296: 'SHORT',
    297: 'SHORT',
    305: 'ASCII',
    306: 'ASCII',
    315: 'ASCII',
    338: 'SHORT',
    339: 'SHORT',
    513: 'LONG',
    514: 'LONG',
    1024: 'SHORT',
    1025: 'SHORT',
    1026: 'ASCII',
    2048: 'SHORT',
    2049: 'ASCII',
    2052: 'SHORT',
    2054: 'SHORT',
    2057: 'DOUBLE',
    2059: 'DOUBLE',
    2060: 'SHORT',
    3072: 'SHORT',
    3073: 'ASCII',
    3076: 'SHORT',
    4096: 'SHORT',
    4097: 'ASCII',
    4099: 'SHORT',
    33432: 'ASCII',
    33550: 'DOUBLE',
    33922: 'DOUBLE',
    34264: 'DOUBLE',
    34665: 'LONG',
    34735: 'SHORT',
    34736: 'DOUBLE',
    34737: 'ASCII',
    42113: 'ASCII',
};
const photometricInterpretations = {
    WhiteIsZero: 0,
    BlackIsZero: 1,
    RGB: 2,
    Palette: 3,
    TransparencyMask: 4,
    CMYK: 5,
    YCbCr: 6,
    CIELab: 8,
    ICCLab: 9,
};
const ExtraSamplesValues = {
    Unspecified: 0,
    Assocalpha: 1,
    Unassalpha: 2,
};
const LercParameters = {
    Version: 0,
    AddCompression: 1,
};
const LercAddCompression = {
    None: 0,
    Deflate: 1,
    Zstandard: 2,
};
const geoKeyNames = /** @type {const} */ ({
    1024: 'GTModelTypeGeoKey',
    1025: 'GTRasterTypeGeoKey',
    1026: 'GTCitationGeoKey',
    2048: 'GeographicTypeGeoKey',
    2049: 'GeogCitationGeoKey',
    2050: 'GeogGeodeticDatumGeoKey',
    2051: 'GeogPrimeMeridianGeoKey',
    2052: 'GeogLinearUnitsGeoKey',
    2053: 'GeogLinearUnitSizeGeoKey',
    2054: 'GeogAngularUnitsGeoKey',
    2055: 'GeogAngularUnitSizeGeoKey',
    2056: 'GeogEllipsoidGeoKey',
    2057: 'GeogSemiMajorAxisGeoKey',
    2058: 'GeogSemiMinorAxisGeoKey',
    2059: 'GeogInvFlatteningGeoKey',
    2060: 'GeogAzimuthUnitsGeoKey',
    2061: 'GeogPrimeMeridianLongGeoKey',
    2062: 'GeogTOWGS84GeoKey',
    3072: 'ProjectedCSTypeGeoKey',
    3073: 'PCSCitationGeoKey',
    3074: 'ProjectionGeoKey',
    3075: 'ProjCoordTransGeoKey',
    3076: 'ProjLinearUnitsGeoKey',
    3077: 'ProjLinearUnitSizeGeoKey',
    3078: 'ProjStdParallel1GeoKey',
    3079: 'ProjStdParallel2GeoKey',
    3080: 'ProjNatOriginLongGeoKey',
    3081: 'ProjNatOriginLatGeoKey',
    3082: 'ProjFalseEastingGeoKey',
    3083: 'ProjFalseNorthingGeoKey',
    3084: 'ProjFalseOriginLongGeoKey',
    3085: 'ProjFalseOriginLatGeoKey',
    3086: 'ProjFalseOriginEastingGeoKey',
    3087: 'ProjFalseOriginNorthingGeoKey',
    3088: 'ProjCenterLongGeoKey',
    3089: 'ProjCenterLatGeoKey',
    3090: 'ProjCenterEastingGeoKey',
    3091: 'ProjCenterNorthingGeoKey',
    3092: 'ProjScaleAtNatOriginGeoKey',
    3093: 'ProjScaleAtCenterGeoKey',
    3094: 'ProjAzimuthAngleGeoKey',
    3095: 'ProjStraightVertPoleLongGeoKey',
    3096: 'ProjRectifiedGridAngleGeoKey',
    4096: 'VerticalCSTypeGeoKey',
    4097: 'VerticalCitationGeoKey',
    4098: 'VerticalDatumGeoKey',
    4099: 'VerticalUnitsGeoKey',
});
/** @typedef {geoKeyNames[keyof typeof geoKeyNames]} GeoKeyName */
/**
 * @type {Record<GeoKeyName, number>}
 */
const geoKeys = /** @type {Record<GeoKeyName, number>} */ ({});
for (const [key, name] of Object.entries(geoKeyNames)) {
    geoKeys[ /** @type {GeoKeyName} */(name)] = parseInt(key, 10);
}
//# sourceMappingURL=globals.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/imagefiledirectory.js"
/*!****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/imagefiledirectory.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFileDirectory: () => (/* binding */ ImageFileDirectory),
/* harmony export */   ImageFileDirectoryParser: () => (/* binding */ ImageFileDirectoryParser)
/* harmony export */ });
/* harmony import */ var _dataslice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataslice.js */ "./node_modules/geotiff/dist-module/dataslice.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ "./node_modules/geotiff/dist-module/globals.js");


/**
 * Allocates an appropriate TypedArray based on the TIFF field type.
 * @param {number} fieldType - TIFF field type constant from fieldTypes
 * @param {number} count - Number of elements to allocate
 * @returns {import('./geotiff.js').TypedArray|Array<number>} The allocated typed array for the given field type
 * @throws {RangeError} If the field type is invalid
 */
function getArrayForSamples(fieldType, count) {
    switch (fieldType) {
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.BYTE:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.ASCII:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.UNDEFINED:
            return new Uint8Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SBYTE:
            return new Int8Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SHORT:
            return new Uint16Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SSHORT:
            return new Int16Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.LONG:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.IFD:
            return new Uint32Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SLONG:
            return new Int32Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.LONG8:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.IFD8:
            return new Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SLONG8:
            return new Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.RATIONAL:
            return new Uint32Array(count * 2);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SRATIONAL:
            return new Int32Array(count * 2);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.FLOAT:
            return new Float32Array(count);
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.DOUBLE:
            return new Float64Array(count);
        default:
            throw new RangeError(`Invalid field type: ${fieldType}`);
    }
}
/**
 * Returns the appropriate DataSlice read method for a given field type.
 * @param {DataSlice} dataSlice - The DataSlice instance to get the reader from
 * @param {number} fieldType - TIFF field type constant from fieldTypes
 * @returns {Function} The bound read method (e.g., readUint16, readFloat32)
 * @throws {RangeError} If the field type is invalid
 */
function getDataSliceReader(dataSlice, fieldType) {
    switch (fieldType) {
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.BYTE:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.ASCII:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.UNDEFINED:
            return dataSlice.readUint8;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SBYTE:
            return dataSlice.readInt8;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SHORT:
            return dataSlice.readUint16;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SSHORT:
            return dataSlice.readInt16;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.LONG:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.IFD:
            return dataSlice.readUint32;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SLONG:
            return dataSlice.readInt32;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.LONG8:
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.IFD8:
            return dataSlice.readUint64;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SLONG8:
            return dataSlice.readInt64;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.RATIONAL:
            return dataSlice.readUint32;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SRATIONAL:
            return dataSlice.readInt32;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.FLOAT:
            return dataSlice.readFloat32;
        case _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.DOUBLE:
            return dataSlice.readFloat64;
        default:
            throw new RangeError(`Invalid field type: ${fieldType}`);
    }
}
/**
 * @overload
 * @param {import('./geotiff.js').TypedArray|Array<number>|null} outValues - Optional pre-allocated output array
 * @param {Function} readMethod - DataView read method (e.g., getUint16)
 * @param {DataSlice} dataSlice - Source data slice
 * @param {number} fieldType - TIFF field type constant
 * @param {number} count - Number of values to read
 * @param {number} offset - Byte offset to start reading
 * @param {true} isArray - Whether to always return an array (vs single value)
 * @returns {import('./geotiff.js').TypedArray|Array<number>} The decoded value(s)
 */
/**
 * @overload
 * @param {import('./geotiff.js').TypedArray|Array<number>|null} outValues - Optional pre-allocated output array
 * @param {Function} readMethod - DataView read method (e.g., getUint16)
 * @param {DataSlice} dataSlice - Source data slice
 * @param {number} fieldType - TIFF field type constant
 * @param {number} count - Number of values to read
 * @param {number} offset - Byte offset to start reading
 * @param {boolean} [isArray] - Whether to always return an array (vs single value)
 * @returns {import('./geotiff.js').TypedArray|Array<number>|string|number} The decoded value(s)
 */
/**
 * Reads field values from a DataSlice.
 * @param {import('./geotiff.js').TypedArray|Array<number>|null} outValues - Optional pre-allocated output array
 * @param {Function} readMethod - DataView read method (e.g., getUint16)
 * @param {DataSlice} dataSlice - Source data slice
 * @param {import('./globals.js').FieldType} fieldType - TIFF field type constant
 * @param {number} count - Number of values to read
 * @param {number} offset - Byte offset to start reading
 * @param {boolean} [isArray] - Whether to always return an array (vs single value)
 * @returns {import('./geotiff.js').TypedArray|Array<number>|string|number} The decoded value(s)
 */
function getValues(outValues = null, readMethod, dataSlice, fieldType, count, offset, isArray = false) {
    const fieldTypeLength = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.getFieldTypeSize)(fieldType);
    const values = outValues || getArrayForSamples(fieldType, count);
    // const readMethod = getDataSliceReader(dataSlice, fieldType);
    const isRational = (fieldType === _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.RATIONAL || fieldType === _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.SRATIONAL);
    // normal fields
    if (!isRational) {
        for (let i = 0; i < count; ++i) {
            values[i] = readMethod.call(dataSlice, offset + (i * fieldTypeLength));
        }
    }
    else {
        // RATIONAL or SRATIONAL
        for (let i = 0; i < count; i += 2) {
            values[i] = readMethod.call(dataSlice, offset + (i * fieldTypeLength));
            values[i + 1] = readMethod.call(dataSlice, offset + ((i * fieldTypeLength) + 4));
        }
    }
    if (fieldType === _globals_js__WEBPACK_IMPORTED_MODULE_1__.fieldTypes.ASCII) {
        return new TextDecoder('utf-8').decode(/** @type {Uint8Array} */ (values));
    }
    if (count === 1 && !isArray && !isRational) {
        return values[0];
    }
    return values;
}
/**
 * Lazily-loaded array for large TIFF field values that are fetched on-demand.
 * Supports loading individual indices or the entire array. Uses a bitmap to track
 * which values have been loaded to avoid redundant fetches.
 */
class DeferredArray {
    /**
     * Creates a DeferredArray for lazy-loading of large TIFF field arrays.
     * @param {import("./source/basesource.js").BaseSource} source - Data source for fetching
     * @param {number} arrayOffset - Byte offset where the array data starts
     * @param {boolean} littleEndian - Endianness of the data
     * @param {import('./globals.js').FieldType} fieldType - TIFF field type constant
     * @param {number} length - Number of elements in the array
     */
    constructor(source, arrayOffset, littleEndian, fieldType, length) {
        this.source = source;
        this.arrayOffset = arrayOffset;
        this.littleEndian = littleEndian;
        this.fieldType = fieldType;
        this.length = length;
        this.data = getArrayForSamples(fieldType, length);
        this.itemSize = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.getFieldTypeSize)(fieldType);
        this.maskBitmap = new Uint8Array(Math.ceil(length / 8));
        this.fetchIndexPromises = new Map();
        this.fullFetchPromise = null;
    }
    /**
     * Loads all values in the deferred array at once.
     * Subsequent calls return the same promise to avoid redundant fetches.
     * @returns {Promise<import('./geotiff.js').TypedArray|Array<number>>} Promise resolving to the fully loaded array
     */
    async loadAll() {
        if (!this.fullFetchPromise) {
            this.fullFetchPromise = this.source.fetch([{
                    offset: this.arrayOffset,
                    length: this.itemSize * this.length,
                }]).then((data) => {
                const dataSlice = new _dataslice_js__WEBPACK_IMPORTED_MODULE_0__["default"](data[0], this.arrayOffset, true, false);
                const result = getValues(this.data, getDataSliceReader(dataSlice, this.fieldType), dataSlice, this.fieldType, this.length, this.arrayOffset, true);
                // Mark all items as loaded in the bitmap
                this.maskBitmap.fill(0xFF);
                // Clean up any pending individual fetch promises since all data is now loaded
                this.fetchIndexPromises.clear();
                return result;
            });
        }
        return this.fullFetchPromise;
    }
    /**
     * Loads and returns a single value at the specified index.
     * If the value is already loaded, returns it immediately. Otherwise, fetches it
     * from the source. Multiple calls for the same index reuse the same promise.
     * @param {number} index - Zero-based index of the value to load
     * @returns {Promise<number|bigint>} Promise resolving to the value at the given index
     * @throws {RangeError} If index is out of bounds
     */
    async get(index) {
        if (index < 0 || index >= this.data.length) {
            throw new RangeError(`Index ${index} out of bounds for length ${this.data.length}`);
        }
        const byteIndex = Math.floor(index / 8);
        const bitMask = 1 << index % 8;
        const offset = this.arrayOffset + (index * this.itemSize);
        if ((this.maskBitmap[byteIndex] & bitMask) === 0) {
            if (!this.fetchIndexPromises.has(index)) {
                const fetchPromise = this.source.fetch([{
                        offset,
                        length: this.itemSize,
                    }]).then((data) => {
                    const dataSlice = new _dataslice_js__WEBPACK_IMPORTED_MODULE_0__["default"](data[0], this.arrayOffset + (index * this.itemSize), true, false);
                    const readMethod = getDataSliceReader(dataSlice, this.fieldType);
                    const value = readMethod.call(dataSlice, offset);
                    this.data[index] = value;
                    this.maskBitmap[byteIndex] |= bitMask;
                    this.fetchIndexPromises.delete(index);
                    return value;
                });
                this.fetchIndexPromises.set(index, fetchPromise);
            }
            return this.fetchIndexPromises.get(index);
        }
        return this.data[index];
    }
}
class ImageFileDirectory {
    /**
     * Create an ImageFileDirectory.
     * @param {Map<string|number, number|string|Array<number|string>>} actualizedFields the file directory,
     * mapping tag names to values
     * @param {Map<string|number, Function>} deferredFields the deferred fields, mapping tag names to async functions
     * @param {Map<string|number, DeferredArray>} deferredArrays the deferred arrays, mapping tag names to
     * DeferredArray objects
     * @param {number} nextIFDByteOffset the byte offset to the next IFD
     */
    constructor(actualizedFields, deferredFields, deferredArrays, nextIFDByteOffset) {
        this.actualizedFields = actualizedFields;
        this.deferredFields = deferredFields;
        this.deferredFieldsBeingResolved = new Map();
        this.deferredArrays = deferredArrays;
        this.nextIFDByteOffset = nextIFDByteOffset;
    }
    /**
     * @param {import('./globals.js').TagName|number} tagIdentifier The field tag ID or name
     * @returns {boolean} whether the field exists (actualized or deferred)
     */
    hasTag(tagIdentifier) {
        const tag = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.resolveTag)(tagIdentifier);
        return this.actualizedFields.has(tag) || this.deferredFields.has(tag) || this.deferredArrays.has(tag);
    }
    /**
     * Synchronously retrieves the value for a given tag. If it is deferred, an error is thrown.
     * @template {import('./globals.js').EagerTagName | import('./globals.js').EagerTag} [T=any]
     * @param {T} tagIdentifier The field tag ID or name
     * @returns {T extends import('./globals.js').TagName ? (import('./globals.js').TagValue<T> | undefined) : any}
     * the field value,
     * or undefined if it does not exist
     * @throws {Error} If the tag is deferred and requires asynchronous loading
     */
    getValue(tagIdentifier) {
        const tag = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.resolveTag)(tagIdentifier);
        if (this.deferredFields.has(tag) || this.deferredArrays.has(tag)) {
            const tagDef = _globals_js__WEBPACK_IMPORTED_MODULE_1__.tagDefinitions[tag];
            const tagName = tagDef?.name || `Tag${tag}`;
            throw new Error(`Field '${tagName}' (${tag}) is deferred. Use loadValue() to load it asynchronously.`);
        }
        if (!this.actualizedFields.has(tag)) {
            return /** @type {any} */ (undefined);
        }
        return /** @type {any} */ (this.actualizedFields.get(tag));
    }
    /**
     * Retrieves the value for a given tag. If it is deferred, it will be loaded first.
     * @template {import('./globals.js').TagName} [T=any]
     * @param {T|number} tagIdentifier The field tag ID or name
     * @returns {Promise<T extends import('./globals.js').TagName ? (import('./globals.js').TagValue<T> | undefined) : any>}
     *   the field value, or undefined if it does not exist
     */
    async loadValue(tagIdentifier) {
        const tag = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.resolveTag)(tagIdentifier);
        if (this.actualizedFields.has(tag)) {
            return /** @type {any} */ (this.actualizedFields.get(tag));
        }
        if (this.deferredFieldsBeingResolved.has(tag)) {
            return /** @type {any} */ (this.deferredFieldsBeingResolved.get(tag));
        }
        const loaderFn = this.deferredFields.get(tag);
        if (loaderFn) {
            this.deferredFields.delete(tag);
            // Set promise BEFORE starting async work to prevent race conditions
            const valuePromise = (async () => {
                try {
                    const value = await loaderFn();
                    this.actualizedFields.set(tag, value);
                    return value;
                }
                finally {
                    this.deferredFieldsBeingResolved.delete(tag);
                }
            })();
            this.deferredFieldsBeingResolved.set(tag, valuePromise);
            return /** @type {any} */ (valuePromise);
        }
        const deferredArray = this.deferredArrays.get(tag);
        if (deferredArray) {
            return /** @type {any} */ (deferredArray.loadAll());
        }
        return /** @type {any} */ (undefined);
    }
    /**
     * Retrieves the value at a given index for a tag that is an array. If it is deferred, it will be loaded first.
     * @param {number|string} tagIdentifier The field tag ID or name
     * @param {number} index The index within the array
     * @returns {Promise<number|string|bigint|undefined>} the field value at the given index, or undefined if it does not exist
     */
    async loadValueIndexed(tagIdentifier, index) {
        const tag = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.resolveTag)(tagIdentifier);
        if (this.actualizedFields.has(tag)) {
            const value = this.actualizedFields.get(tag);
            return /** @type {any} */ (value)[index];
        }
        else if (this.deferredArrays.has(tag)) {
            const deferredArray = /** @type {DeferredArray} */ (this.deferredArrays.get(tag));
            return deferredArray.get(index);
        }
        else if (this.hasTag(tag)) {
            const value = await this.loadValue(tag);
            if (value && typeof value !== 'number') {
                return value[index];
            }
        }
        return undefined;
    }
    /**
     * Parses the GeoTIFF GeoKeyDirectory tag into a structured object.
     * The GeoKeyDirectory is a special TIFF tag that contains geographic metadata
     * in a key-value format as defined by the GeoTIFF specification.
     * @returns {Partial<Record<import('./globals.js').GeoKeyName, *>>|null} Parsed geo key directory
     *     mapping key names to values, or null if not present
     * @throws {Error} If a referenced geo key value cannot be retrieved
     */
    parseGeoKeyDirectory() {
        const rawGeoKeyDirectory = this.getValue('GeoKeyDirectory');
        if (!rawGeoKeyDirectory) {
            return null;
        }
        /** @type {Partial<Record<import('./globals.js').GeoKeyName, *>>} */
        const geoKeyDirectory = {};
        for (let i = 4; i <= rawGeoKeyDirectory[3] * 4; i += 4) {
            const key = ( /** @type {Record<number, import('./globals.js').GeoKeyName>} */(_globals_js__WEBPACK_IMPORTED_MODULE_1__.geoKeyNames))[rawGeoKeyDirectory[i]];
            const location = /** @type {import('./globals.js').EagerTag} */ (rawGeoKeyDirectory[i + 1]) || null;
            const count = rawGeoKeyDirectory[i + 2];
            const offset = rawGeoKeyDirectory[i + 3];
            let value = null;
            if (!location) {
                value = offset;
            }
            else {
                value = this.getValue(location);
                if (typeof value === 'undefined' || value === null) {
                    throw new Error(`Could not get value of geoKey '${key}'.`);
                }
                else if (typeof value === 'string') {
                    value = value.substring(offset, offset + count - 1);
                }
                else if (value.subarray) {
                    value = value.subarray(offset, offset + count);
                    if (count === 1) {
                        value = value[0];
                    }
                }
            }
            geoKeyDirectory[key] = value;
        }
        return geoKeyDirectory;
    }
    toObject() {
        /** @type {Record<string, unknown>} */
        const obj = {};
        for (const [tag, value] of this.actualizedFields.entries()) {
            const tagDefinition = typeof tag === 'number' ? _globals_js__WEBPACK_IMPORTED_MODULE_1__.tagDefinitions[tag] : undefined;
            const tagName = tagDefinition ? tagDefinition.name : `Tag${tag}`;
            obj[tagName] = value;
        }
        return obj;
    }
}
/**
 * Parser for Image File Directories (IFDs).
 */
class ImageFileDirectoryParser {
    /**
     * @param {import("./source/basesource.js").BaseSource} source the data source to fetch from
     * @param {boolean} littleEndian the endianness of the file
     * @param {boolean} bigTiff whether the file is a BigTIFF
     * @param {boolean} [eager=false] whether to eagerly fetch deferred fields.
     *                                 When false (default), tags are loaded lazily on-demand.
     *                                 When true, all tags are loaded immediately during parsing.
     */
    constructor(source, littleEndian, bigTiff, eager = false) {
        this.source = source;
        this.littleEndian = littleEndian;
        this.bigTiff = bigTiff;
        this.eager = eager;
    }
    /**
     * Helper function to retrieve a DataSlice from the source.
     * @param {number} offset Byte offset of the slice
     * @param {number} [length] Length of the slice
     * @returns {Promise<DataSlice>}
     */
    async getSlice(offset, length) {
        const fallbackLength = this.bigTiff ? 4048 : 1024;
        return new _dataslice_js__WEBPACK_IMPORTED_MODULE_0__["default"]((await this.source.fetch([
            {
                offset,
                length: typeof length !== 'undefined' ? length : fallbackLength,
            },
        ]))[0], offset, this.littleEndian, this.bigTiff);
    }
    /**
     * Instructs to parse an image file directory at the given file offset.
     * As there is no way to ensure that a location is indeed the start of an IFD,
     * this function must be called with caution (e.g only using the IFD offsets from
     * the headers or other IFDs).
     * @param {number} offset the offset to parse the IFD at
     * @returns {Promise<ImageFileDirectory>} the parsed IFD
     */
    async parseFileDirectoryAt(offset) {
        const entrySize = this.bigTiff ? 20 : 12;
        const offsetSize = this.bigTiff ? 8 : 2;
        let dataSlice = await this.getSlice(offset);
        const numDirEntries = this.bigTiff
            ? dataSlice.readUint64(offset)
            : dataSlice.readUint16(offset);
        // if the slice does not cover the whole IFD, request a bigger slice, where the
        // whole IFD fits: num of entries + n x tag length + offset to next IFD
        const byteSize = numDirEntries * (entrySize + (this.bigTiff ? 16 : 6));
        if (!dataSlice.covers(offset, byteSize)) {
            dataSlice = await this.getSlice(offset, byteSize);
        }
        const actualizedFields = new Map();
        const deferredFields = new Map();
        const deferredArrays = new Map();
        // loop over the IFD and create a file directory object
        let i = offset + (this.bigTiff ? 8 : 2);
        for (let entryCount = 0; entryCount < numDirEntries; i += entrySize, ++entryCount) {
            const fieldTag = dataSlice.readUint16(i);
            const fieldType = /** @type {import('./globals.js').FieldType} */ (dataSlice.readUint16(i + 2));
            const typeCount = this.bigTiff
                ? dataSlice.readUint64(i + 4)
                : dataSlice.readUint32(i + 4);
            let fieldValues = null;
            let deferredFieldValues = null;
            let deferredArray = null;
            const fieldTypeLength = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.getFieldTypeSize)(fieldType);
            const valueOffset = i + (this.bigTiff ? 12 : 8);
            const isArray = _globals_js__WEBPACK_IMPORTED_MODULE_1__.tagDefinitions[fieldTag]?.isArray;
            const eager = _globals_js__WEBPACK_IMPORTED_MODULE_1__.tagDefinitions[fieldTag]?.eager || this.eager;
            // check whether the value is directly encoded in the tag or refers to a
            // different external byte range
            if (fieldTypeLength * typeCount <= (this.bigTiff ? 8 : 4)) {
                fieldValues = getValues(getArrayForSamples(fieldType, typeCount), getDataSliceReader(dataSlice, fieldType), dataSlice, fieldType, typeCount, valueOffset, isArray);
            }
            else {
                // resolve the reference to the actual byte range
                const actualOffset = dataSlice.readOffset(valueOffset);
                const length = (0,_globals_js__WEBPACK_IMPORTED_MODULE_1__.getFieldTypeSize)(fieldType) * typeCount;
                // check, whether we actually cover the referenced byte range
                if (dataSlice.covers(actualOffset, length)) {
                    fieldValues = getValues(getArrayForSamples(fieldType, typeCount), getDataSliceReader(dataSlice, fieldType), dataSlice, fieldType, typeCount, actualOffset, isArray);
                }
                else if (eager) {
                    // eager evaluation: fetch the data right now
                    // TODO: instead of fetching the slice right here, collect all slices and fetch them together
                    // to allow conjoined requests
                    const fieldDataSlice = await this.getSlice(actualOffset, length);
                    fieldValues = getValues(getArrayForSamples(fieldType, typeCount), getDataSliceReader(fieldDataSlice, fieldType), fieldDataSlice, fieldType, typeCount, actualOffset, isArray);
                }
                else if (isArray) {
                    deferredArray = new DeferredArray(this.source, actualOffset, this.littleEndian, fieldType, typeCount);
                }
                else {
                    deferredFieldValues = async () => {
                        const fieldDataSlice = await this.getSlice(actualOffset, length);
                        return getValues(getArrayForSamples(fieldType, typeCount), getDataSliceReader(fieldDataSlice, fieldType), fieldDataSlice, fieldType, typeCount, actualOffset, isArray);
                    };
                }
            }
            if (fieldValues !== null) {
                actualizedFields.set(fieldTag, fieldValues);
            }
            else if (deferredFieldValues !== null) {
                deferredFields.set(fieldTag, deferredFieldValues);
            }
            else if (deferredArray !== null) {
                deferredArrays.set(fieldTag, deferredArray);
            }
        }
        const nextIFDByteOffset = dataSlice.readOffset(offset + offsetSize + (entrySize * numDirEntries));
        return new ImageFileDirectory(actualizedFields, deferredFields, deferredArrays, nextIFDByteOffset);
    }
}
//# sourceMappingURL=imagefiledirectory.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/resample.js"
/*!******************************************************!*\
  !*** ./node_modules/geotiff/dist-module/resample.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resample: () => (/* binding */ resample),
/* harmony export */   resampleBilinear: () => (/* binding */ resampleBilinear),
/* harmony export */   resampleBilinearInterleaved: () => (/* binding */ resampleBilinearInterleaved),
/* harmony export */   resampleInterleaved: () => (/* binding */ resampleInterleaved),
/* harmony export */   resampleNearest: () => (/* binding */ resampleNearest),
/* harmony export */   resampleNearestInterleaved: () => (/* binding */ resampleNearestInterleaved)
/* harmony export */ });
/**
 * @module resample
 */
/**
 * @param {import("./geotiff.js").TypedArray} array
 * @param {number} width
 * @param {number} height
 * @param {number} [samplesPerPixel=1]
 */
function copyNewSize(array, width, height, samplesPerPixel = 1) {
    return new (Object.getPrototypeOf(array).constructor)(width * height * samplesPerPixel);
}
/**
 * Resample the input arrays using nearest neighbor value selection.
 * @param {import("./geotiff.js").TypedArray[]} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @returns {import("./geotiff.js").TypedArray[]} The resampled rasters
 */
function resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight) {
    const relX = inWidth / outWidth;
    const relY = inHeight / outHeight;
    return valueArrays.map((array) => {
        const newArray = copyNewSize(array, outWidth, outHeight);
        for (let y = 0; y < outHeight; ++y) {
            const cy = Math.min(Math.round(relY * y), inHeight - 1);
            for (let x = 0; x < outWidth; ++x) {
                const cx = Math.min(Math.round(relX * x), inWidth - 1);
                const value = array[(cy * inWidth) + cx];
                newArray[(y * outWidth) + x] = value;
            }
        }
        return newArray;
    });
}
// simple linear interpolation, code from:
// https://en.wikipedia.org/wiki/Linear_interpolation#Programming_language_support
/**
 * @param {number} v0
 * @param {number} v1
 * @param {number} t
 */
function lerp(v0, v1, t) {
    return ((1 - t) * v0) + (t * v1);
}
/**
 * Resample the input arrays using bilinear interpolation.
 * @param {import("./geotiff.js").TypedArray[]} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @returns {import("./geotiff.js").TypedArray[]} The resampled rasters
 */
function resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight) {
    const relX = inWidth / outWidth;
    const relY = inHeight / outHeight;
    return valueArrays.map((array) => {
        const newArray = copyNewSize(array, outWidth, outHeight);
        for (let y = 0; y < outHeight; ++y) {
            const rawY = relY * y;
            const yl = Math.floor(rawY);
            const yh = Math.min(Math.ceil(rawY), (inHeight - 1));
            for (let x = 0; x < outWidth; ++x) {
                const rawX = relX * x;
                const tx = rawX % 1;
                const xl = Math.floor(rawX);
                const xh = Math.min(Math.ceil(rawX), (inWidth - 1));
                const ll = array[(yl * inWidth) + xl];
                const hl = array[(yl * inWidth) + xh];
                const lh = array[(yh * inWidth) + xl];
                const hh = array[(yh * inWidth) + xh];
                const value = lerp(lerp(ll, hl, tx), lerp(lh, hh, tx), rawY % 1);
                newArray[(y * outWidth) + x] = value;
            }
        }
        return newArray;
    });
}
/**
 * Resample the input arrays using the selected resampling method.
 * @param {import("./geotiff.js").TypedArray[]} valueArrays The input arrays to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {string} [method = 'nearest'] The desired resampling method
 * @returns {import("./geotiff.js").TypedArray[]} The resampled rasters
 */
function resample(valueArrays, inWidth, inHeight, outWidth, outHeight, method = 'nearest') {
    switch (method.toLowerCase()) {
        case 'nearest':
            return resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight);
        case 'bilinear':
        case 'linear':
            return resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight);
        default:
            throw new Error(`Unsupported resampling method: '${method}'`);
    }
}
/**
 * Resample the pixel interleaved input array using nearest neighbor value selection.
 * @param {import("./geotiff.js").TypedArray} valueArray The input array to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {number} samples The number of samples per pixel for pixel
 *                         interleaved data
 * @returns {import("./geotiff.js").TypedArray} The resampled raster
 */
function resampleNearestInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples) {
    const relX = inWidth / outWidth;
    const relY = inHeight / outHeight;
    const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);
    for (let y = 0; y < outHeight; ++y) {
        const cy = Math.min(Math.round(relY * y), inHeight - 1);
        for (let x = 0; x < outWidth; ++x) {
            const cx = Math.min(Math.round(relX * x), inWidth - 1);
            for (let i = 0; i < samples; ++i) {
                const value = valueArray[(cy * inWidth * samples) + (cx * samples) + i];
                newArray[(y * outWidth * samples) + (x * samples) + i] = value;
            }
        }
    }
    return newArray;
}
/**
 * Resample the pixel interleaved input array using bilinear interpolation.
 * @param {import("./geotiff.js").TypedArray} valueArray The input array to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {number} samples The number of samples per pixel for pixel
 *                         interleaved data
 * @returns {import("./geotiff.js").TypedArray} The resampled raster
 */
function resampleBilinearInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples) {
    const relX = inWidth / outWidth;
    const relY = inHeight / outHeight;
    const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);
    for (let y = 0; y < outHeight; ++y) {
        const rawY = relY * y;
        const yl = Math.floor(rawY);
        const yh = Math.min(Math.ceil(rawY), (inHeight - 1));
        for (let x = 0; x < outWidth; ++x) {
            const rawX = relX * x;
            const tx = rawX % 1;
            const xl = Math.floor(rawX);
            const xh = Math.min(Math.ceil(rawX), (inWidth - 1));
            for (let i = 0; i < samples; ++i) {
                const ll = valueArray[(yl * inWidth * samples) + (xl * samples) + i];
                const hl = valueArray[(yl * inWidth * samples) + (xh * samples) + i];
                const lh = valueArray[(yh * inWidth * samples) + (xl * samples) + i];
                const hh = valueArray[(yh * inWidth * samples) + (xh * samples) + i];
                const value = lerp(lerp(ll, hl, tx), lerp(lh, hh, tx), rawY % 1);
                newArray[(y * outWidth * samples) + (x * samples) + i] = value;
            }
        }
    }
    return newArray;
}
/**
 * Resample the pixel interleaved input array using the selected resampling method.
 * @param {import("./geotiff.js").TypedArray} valueArray The input array to resample
 * @param {number} inWidth The width of the input rasters
 * @param {number} inHeight The height of the input rasters
 * @param {number} outWidth The desired width of the output rasters
 * @param {number} outHeight The desired height of the output rasters
 * @param {number} samples The number of samples per pixel for pixel
 *                                 interleaved data
 * @param {string} [method = 'nearest'] The desired resampling method
 * @returns {import("./geotiff.js").TypedArray} The resampled rasters
 */
function resampleInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples, method = 'nearest') {
    switch (method.toLowerCase()) {
        case 'nearest':
            return resampleNearestInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples);
        case 'bilinear':
        case 'linear':
            return resampleBilinearInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples);
        default:
            throw new Error(`Unsupported resampling method: '${method}'`);
    }
}
//# sourceMappingURL=resample.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/rgb.js"
/*!*************************************************!*\
  !*** ./node_modules/geotiff/dist-module/rgb.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromBlackIsZero: () => (/* binding */ fromBlackIsZero),
/* harmony export */   fromCIELab: () => (/* binding */ fromCIELab),
/* harmony export */   fromCMYK: () => (/* binding */ fromCMYK),
/* harmony export */   fromPalette: () => (/* binding */ fromPalette),
/* harmony export */   fromWhiteIsZero: () => (/* binding */ fromWhiteIsZero),
/* harmony export */   fromYCbCr: () => (/* binding */ fromYCbCr)
/* harmony export */ });
function fromWhiteIsZero(raster, max) {
    const { width, height } = raster;
    const rgbRaster = new Uint8Array(width * height * 3);
    let value;
    for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {
        value = 256 - (raster[i] / max) * 256;
        rgbRaster[j] = value;
        rgbRaster[j + 1] = value;
        rgbRaster[j + 2] = value;
    }
    return rgbRaster;
}
function fromBlackIsZero(raster, max) {
    const { width, height } = raster;
    const rgbRaster = new Uint8Array(width * height * 3);
    let value;
    for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {
        value = (raster[i] / max) * 256;
        rgbRaster[j] = value;
        rgbRaster[j + 1] = value;
        rgbRaster[j + 2] = value;
    }
    return rgbRaster;
}
function fromPalette(raster, colorMap) {
    const { width, height } = raster;
    const rgbRaster = new Uint8Array(width * height * 3);
    const greenOffset = colorMap.length / 3;
    const blueOffset = (colorMap.length / 3) * 2;
    for (let i = 0, j = 0; i < raster.length; ++i, j += 3) {
        const mapIndex = raster[i];
        rgbRaster[j] = (colorMap[mapIndex] / 65536) * 256;
        rgbRaster[j + 1] = (colorMap[mapIndex + greenOffset] / 65536) * 256;
        rgbRaster[j + 2] = (colorMap[mapIndex + blueOffset] / 65536) * 256;
    }
    return rgbRaster;
}
function fromCMYK(cmykRaster) {
    const { width, height } = cmykRaster;
    const rgbRaster = new Uint8Array(width * height * 3);
    for (let i = 0, j = 0; i < cmykRaster.length; i += 4, j += 3) {
        const c = cmykRaster[i];
        const m = cmykRaster[i + 1];
        const y = cmykRaster[i + 2];
        const k = cmykRaster[i + 3];
        rgbRaster[j] = 255 * ((255 - c) / 256) * ((255 - k) / 256);
        rgbRaster[j + 1] = 255 * ((255 - m) / 256) * ((255 - k) / 256);
        rgbRaster[j + 2] = 255 * ((255 - y) / 256) * ((255 - k) / 256);
    }
    return rgbRaster;
}
function fromYCbCr(yCbCrRaster) {
    const { width, height } = yCbCrRaster;
    const rgbRaster = new Uint8ClampedArray(width * height * 3);
    for (let i = 0, j = 0; i < yCbCrRaster.length; i += 3, j += 3) {
        const y = yCbCrRaster[i];
        const cb = yCbCrRaster[i + 1];
        const cr = yCbCrRaster[i + 2];
        rgbRaster[j] = y + 1.402 * (cr - 0x80);
        rgbRaster[j + 1] = y - 0.34414 * (cb - 0x80) - 0.71414 * (cr - 0x80);
        rgbRaster[j + 2] = y + 1.772 * (cb - 0x80);
    }
    return rgbRaster;
}
const Xn = 0.95047;
const Yn = 1.0;
const Zn = 1.08883;
// from https://github.com/antimatter15/rgb-lab/blob/master/color.js
function fromCIELab(cieLabRaster) {
    const { width, height } = cieLabRaster;
    const rgbRaster = new Uint8Array(width * height * 3);
    for (let i = 0, j = 0; i < cieLabRaster.length; i += 3, j += 3) {
        const L = cieLabRaster[i + 0];
        const a_ = (cieLabRaster[i + 1] << 24) >> 24; // conversion from uint8 to int8
        const b_ = (cieLabRaster[i + 2] << 24) >> 24; // same
        let y = (L + 16) / 116;
        let x = a_ / 500 + y;
        let z = y - b_ / 200;
        let r;
        let g;
        let b;
        x = Xn * (x * x * x > 0.008856 ? x * x * x : (x - 16 / 116) / 7.787);
        y = Yn * (y * y * y > 0.008856 ? y * y * y : (y - 16 / 116) / 7.787);
        z = Zn * (z * z * z > 0.008856 ? z * z * z : (z - 16 / 116) / 7.787);
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r;
        g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g;
        b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b;
        rgbRaster[j] = Math.max(0, Math.min(1, r)) * 255;
        rgbRaster[j + 1] = Math.max(0, Math.min(1, g)) * 255;
        rgbRaster[j + 2] = Math.max(0, Math.min(1, b)) * 255;
    }
    return rgbRaster;
}
//# sourceMappingURL=rgb.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/arraybuffer.js"
/*!****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/arraybuffer.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeBufferSource: () => (/* binding */ makeBufferSource)
/* harmony export */ });
/* harmony import */ var _basesource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basesource.js */ "./node_modules/geotiff/dist-module/source/basesource.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/geotiff/dist-module/utils.js");


class ArrayBufferSource extends _basesource_js__WEBPACK_IMPORTED_MODULE_0__.BaseSource {
    /**
     * @param {ArrayBuffer} arrayBuffer
     */
    constructor(arrayBuffer) {
        super();
        this.arrayBuffer = arrayBuffer;
    }
    /**
     * @param {import('./basesource.js').Slice} slice
     * @param {AbortSignal} [signal]
     * @returns {Promise<import('./basesource.js').SliceWithData>}
     */
    fetchSlice(slice, signal) {
        if (signal && signal.aborted) {
            throw new _utils_js__WEBPACK_IMPORTED_MODULE_1__.AbortError('Request aborted');
        }
        return Promise.resolve({
            data: this.arrayBuffer.slice(slice.offset, slice.offset + slice.length),
            offset: slice.offset,
            length: slice.length,
        });
    }
}
/** @param {ArrayBuffer} arrayBuffer */
function makeBufferSource(arrayBuffer) {
    return new ArrayBufferSource(arrayBuffer);
}
//# sourceMappingURL=arraybuffer.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/basesource.js"
/*!***************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/basesource.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseSource: () => (/* binding */ BaseSource)
/* harmony export */ });
/**
 * @typedef {Object} Slice
 * @property {number} offset
 * @property {number} length
 */
/** @typedef {Slice & {data: ArrayBufferLike}} SliceWithData */
class BaseSource {
    /**
     * @param {Array<Slice>} slices
     * @param {AbortSignal} [signal]
     * @returns {Promise<ArrayBufferLike[]>}
     */
    async fetch(slices, signal) {
        return Promise.all(slices.map(async (slice) => (await this.fetchSlice(slice, signal)).data));
    }
    /**
     * @param {Slice} slice
     * @param {AbortSignal} [_signal]
     * @returns {Promise<SliceWithData>}
     */
    async fetchSlice(slice, _signal) {
        throw new Error(`fetching of slice ${slice} not possible, not implemented`);
    }
    /**
     * Returns the filesize if already determined and null otherwise
     * @returns {number|null}
     */
    get fileSize() {
        return null;
    }
    async close() {
        // no-op by default
    }
}
//# sourceMappingURL=basesource.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/blockedsource.js"
/*!******************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/blockedsource.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockedSource: () => (/* binding */ BlockedSource)
/* harmony export */ });
/* harmony import */ var quick_lru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quick-lru */ "./node_modules/quick-lru/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/geotiff/dist-module/utils.js");
/* harmony import */ var _basesource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basesource.js */ "./node_modules/geotiff/dist-module/source/basesource.js");



class Block {
    /**
     *
     * @param {number} offset
     * @param {number} length
     * @param {ArrayBuffer} data
     */
    constructor(offset, length, data) {
        this.offset = offset;
        this.length = length;
        this.data = data;
    }
    /**
     * @returns {number} the top byte border
     */
    get top() {
        return this.offset + this.length;
    }
}
class BlockGroup {
    /**
     *
     * @param {number} offset
     * @param {number} length
     * @param {number[]} blockIds
     */
    constructor(offset, length, blockIds) {
        this.offset = offset;
        this.length = length;
        this.blockIds = blockIds;
    }
}
class BlockedSource extends _basesource_js__WEBPACK_IMPORTED_MODULE_2__.BaseSource {
    /**
     *
     * @param {BaseSource} source The underlying source that shall be blocked and cached
     * @param {object} options
     * @param {number} [options.blockSize]
     * @param {number} [options.cacheSize]
     */
    constructor(source, { blockSize = 65536, cacheSize = 100 } = {}) {
        super();
        this.source = source;
        this.blockSize = blockSize;
        this.blockCache = new quick_lru__WEBPACK_IMPORTED_MODULE_0__["default"]({
            maxSize: cacheSize,
            onEviction: (blockId, block) => {
                this.evictedBlocks.set(blockId, block);
            },
        });
        /** @type {Map<number, Block>} */
        this.evictedBlocks = new Map();
        // mapping blockId -> Block instance
        this.blockRequests = new Map();
        // set of blockIds missing for the current requests
        this.blockIdsToFetch = new Set();
        this.abortedBlockIds = new Set();
    }
    get fileSize() {
        return this.source.fileSize;
    }
    /**
     * @param {import("./basesource.js").Slice[]} slices
     * @param {AbortSignal} [signal]
     * @return {Promise<ArrayBuffer[]>}
     */
    async fetch(slices, signal) {
        const blockRequests = [];
        const missingBlockIds = [];
        const allBlockIds = [];
        this.evictedBlocks.clear();
        for (const { offset, length } of slices) {
            let top = offset + length;
            const { fileSize } = this;
            if (fileSize !== null) {
                top = Math.min(top, fileSize);
            }
            const firstBlockOffset = Math.floor(offset / this.blockSize) * this.blockSize;
            for (let current = firstBlockOffset; current < top; current += this.blockSize) {
                const blockId = Math.floor(current / this.blockSize);
                if (!this.blockCache.has(blockId) && !this.blockRequests.has(blockId)) {
                    this.blockIdsToFetch.add(blockId);
                    missingBlockIds.push(blockId);
                }
                if (this.blockRequests.has(blockId)) {
                    blockRequests.push(this.blockRequests.get(blockId));
                }
                allBlockIds.push(blockId);
            }
        }
        // allow additional block requests to accumulate
        await (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.wait)();
        this.fetchBlocks(signal);
        // Gather all of the new requests that this fetch call is contributing to `fetch`.
        const missingRequests = [];
        for (const blockId of missingBlockIds) {
            // The requested missing block could already be in the cache
            // instead of having its request still be outstanding.
            if (this.blockRequests.has(blockId)) {
                missingRequests.push(this.blockRequests.get(blockId));
            }
        }
        // Actually await all pending requests that are needed for this `fetch`.
        await Promise.allSettled(blockRequests);
        await Promise.allSettled(missingRequests);
        // Perform retries if a block was interrupted by a previous signal
        const abortedBlockRequests = [];
        const abortedBlockIds = allBlockIds
            .filter((id) => this.abortedBlockIds.has(id) || !this.blockCache.has(id));
        abortedBlockIds.forEach((id) => this.blockIdsToFetch.add(id));
        // start the retry of some blocks if required
        if (abortedBlockIds.length > 0 && signal && !signal.aborted) {
            this.fetchBlocks();
            for (const blockId of abortedBlockIds) {
                const block = this.blockRequests.get(blockId);
                if (!block) {
                    throw new Error(`Block ${blockId} is not in the block requests`);
                }
                abortedBlockRequests.push(block);
            }
            await Promise.allSettled(abortedBlockRequests);
        }
        // throw an  abort error
        if (signal && signal.aborted) {
            throw new _utils_js__WEBPACK_IMPORTED_MODULE_1__.AbortError('Request was aborted');
        }
        const blocks = allBlockIds.map((id) => this.blockCache.get(id) || this.evictedBlocks.get(id));
        const failedBlocks = blocks.filter((i) => !i);
        if (failedBlocks.length) {
            throw new _utils_js__WEBPACK_IMPORTED_MODULE_1__.AggregateError(failedBlocks, 'Request failed');
        }
        // create a final Map, with all required blocks for this request to satisfy
        const requiredBlocks = new Map((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.zip)(allBlockIds, blocks));
        // TODO: satisfy each slice
        return this.readSliceData(slices, requiredBlocks);
    }
    /**
     * @param {AbortSignal} [signal]
     */
    fetchBlocks(signal) {
        // check if we still need to
        if (this.blockIdsToFetch.size > 0) {
            const groups = this.groupBlocks(this.blockIdsToFetch);
            // start requesting slices of data
            const groupRequests = groups.map(async (group) => ({ ...group, ...(await this.source.fetchSlice(group, signal)) }));
            for (let groupIndex = 0; groupIndex < groups.length; ++groupIndex) {
                const group = groups[groupIndex];
                for (const blockId of group.blockIds) {
                    // make an async IIFE for each block
                    this.blockRequests.set(blockId, (async () => {
                        try {
                            const response = (await Promise.all(groupRequests))[groupIndex];
                            const blockOffset = blockId * this.blockSize;
                            const o = blockOffset - response.offset;
                            const t = Math.min(o + this.blockSize, response.data.byteLength);
                            const data = response.data.slice(o, t);
                            const block = new Block(blockOffset, data.byteLength, 
                            /** @type {ArrayBuffer} */ (data));
                            this.blockCache.set(blockId, block);
                            this.abortedBlockIds.delete(blockId);
                        }
                        catch (err) {
                            if (err instanceof _utils_js__WEBPACK_IMPORTED_MODULE_1__.AbortError && err.name === 'AbortError') {
                                // store the signal here, we need it to determine later if an
                                // error was caused by this signal
                                err.signal = signal;
                                this.blockCache.delete(blockId);
                                this.abortedBlockIds.add(blockId);
                            }
                            else {
                                throw err;
                            }
                        }
                        finally {
                            this.blockRequests.delete(blockId);
                        }
                    })());
                }
            }
            this.blockIdsToFetch.clear();
        }
    }
    /**
     *
     * @param {Set<number>} blockIds
     * @returns {BlockGroup[]}
     */
    groupBlocks(blockIds) {
        const sortedBlockIds = Array.from(blockIds).sort((a, b) => a - b);
        if (sortedBlockIds.length === 0) {
            return [];
        }
        /** @type {number[]} */
        let current = [];
        let lastBlockId = null;
        const groups = [];
        for (const blockId of sortedBlockIds) {
            if (lastBlockId === null || lastBlockId + 1 === blockId) {
                current.push(blockId);
                lastBlockId = blockId;
            }
            else {
                groups.push(new BlockGroup(current[0] * this.blockSize, current.length * this.blockSize, current));
                current = [blockId];
                lastBlockId = blockId;
            }
        }
        groups.push(new BlockGroup(current[0] * this.blockSize, current.length * this.blockSize, current));
        return groups;
    }
    /**
     * @param {import("./basesource.js").Slice[]} slices
     * @param {Map<number, Block>} blocks
     * @returns {ArrayBuffer[]}
     */
    readSliceData(slices, blocks) {
        return slices.map((slice) => {
            let top = slice.offset + slice.length;
            if (this.fileSize !== null) {
                top = Math.min(this.fileSize, top);
            }
            const blockIdLow = Math.floor(slice.offset / this.blockSize);
            const blockIdHigh = Math.floor((top - 1) / this.blockSize);
            const sliceData = new ArrayBuffer(slice.length);
            const sliceView = new Uint8Array(sliceData);
            for (let blockId = blockIdLow; blockId <= blockIdHigh; ++blockId) {
                const block = blocks.get(blockId);
                if (!block) {
                    continue;
                }
                const delta = block.offset - slice.offset;
                const topDelta = block.top - top;
                let blockInnerOffset = 0;
                let rangeInnerOffset = 0;
                let usedBlockLength;
                if (delta < 0) {
                    blockInnerOffset = -delta;
                }
                else if (delta > 0) {
                    rangeInnerOffset = delta;
                }
                if (topDelta < 0) {
                    usedBlockLength = block.length - blockInnerOffset;
                }
                else {
                    usedBlockLength = top - block.offset - blockInnerOffset;
                }
                const blockView = new Uint8Array(block.data, blockInnerOffset, usedBlockLength);
                sliceView.set(blockView, rangeInnerOffset);
            }
            return sliceData;
        });
    }
}
//# sourceMappingURL=blockedsource.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/client/base.js"
/*!****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/client/base.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseClient: () => (/* binding */ BaseClient),
/* harmony export */   BaseResponse: () => (/* binding */ BaseResponse)
/* harmony export */ });
class BaseResponse {
    /**
     * Returns whether the response has an ok'ish status code
     */
    get ok() {
        return this.status >= 200 && this.status <= 299;
    }
    /**
     * Returns the status code of the response
     * @returns {number} the status code
     */
    get status() {
        throw new Error('not implemented');
    }
    /**
     * Returns the value of the specified header
     * @param {string} _headerName the header name
     * @returns {string|undefined} the header value
     */
    getHeader(_headerName) {
        throw new Error('not implemented');
    }
    /**
     * @returns {Promise<ArrayBuffer>} the response data of the request
     */
    async getData() {
        throw new Error('not implemented');
    }
}
class BaseClient {
    /** @param {string} url */
    constructor(url) {
        this.url = url;
    }
    /**
     * Send a request with the options
     * @param {RequestInit} [_options={}]
     * @returns {Promise<BaseResponse>}
     */
    async request(_options) {
        throw new Error('request is not implemented');
    }
}
//# sourceMappingURL=base.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/client/fetch.js"
/*!*****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/client/fetch.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchClient: () => (/* binding */ FetchClient)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/geotiff/dist-module/source/client/base.js");

class FetchResponse extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseResponse {
    /**
     * BaseResponse facade for fetch API Response
     * @param {Response} response
     */
    constructor(response) {
        super();
        this.response = response;
    }
    get status() {
        return this.response.status;
    }
    /**
     * @param {string} name
     * @returns {string|undefined}
     */
    getHeader(name) {
        return this.response.headers.get(name) || undefined;
    }
    async getData() {
        const data = this.response.arrayBuffer
            ? await this.response.arrayBuffer()
            // FIXME Can this really have a buffer property?
            : (await /** @type {*} */ (this.response).buffer()).buffer;
        return data;
    }
}
class FetchClient extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseClient {
    /**
     * @param {string} url
     * @param {RequestCredentials} [credentials]
     */
    constructor(url, credentials) {
        super(url);
        this.credentials = credentials;
    }
    /**
     * @param {RequestInit} [options={}]
     * @returns {Promise<FetchResponse>}
     */
    async request({ headers, signal } = {}) {
        const response = await fetch(this.url, {
            headers, credentials: this.credentials, signal,
        });
        return new FetchResponse(response);
    }
}
//# sourceMappingURL=fetch.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/client/http.js"
/*!****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/client/http.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpClient: () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "?cdec");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https */ "?753a");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "?4e4d");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/geotiff/dist-module/source/client/base.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/geotiff/dist-module/utils.js");





class HttpResponse extends _base_js__WEBPACK_IMPORTED_MODULE_3__.BaseResponse {
    /**
     * BaseResponse facade for node HTTP/HTTPS API Response
     * @param {import('http').IncomingMessage} response
     * @param {Promise<ArrayBuffer>} dataPromise
     */
    constructor(response, dataPromise) {
        super();
        this.response = response;
        this.dataPromise = dataPromise;
    }
    get status() {
        return /** @type {number} */ (this.response.statusCode);
    }
    /**
     * @param {string} name
     * @returns {string|undefined}
     */
    getHeader(name) {
        const value = this.response.headers[name];
        return Array.isArray(value) ? value.join(', ') : value;
    }
    async getData() {
        const data = await this.dataPromise;
        return data;
    }
}
class HttpClient extends _base_js__WEBPACK_IMPORTED_MODULE_3__.BaseClient {
    /** @param {string} url */
    constructor(url) {
        super(url);
        this.parsedUrl = url__WEBPACK_IMPORTED_MODULE_2__.parse(this.url);
        this.httpApi = (this.parsedUrl.protocol === 'http:' ? http__WEBPACK_IMPORTED_MODULE_0__ : https__WEBPACK_IMPORTED_MODULE_1__);
    }
    /**
     * @param {Object<string, string>} headers
     * @param {AbortSignal} [signal]
     * @returns {Promise<HttpResponse>}
     */
    constructRequest(headers, signal) {
        return new Promise((resolve, reject) => {
            const request = this.httpApi.get({
                ...this.parsedUrl,
                headers,
            }, (response) => {
                const dataPromise = new Promise((resolveData) => {
                    /** @type {Uint8Array[]} */
                    const chunks = [];
                    // collect chunks
                    response.on('data', (chunk) => {
                        chunks.push(chunk);
                    });
                    // concatenate all chunks and resolve the promise with the resulting buffer
                    response.on('end', () => {
                        const data = Buffer.concat(chunks).buffer;
                        resolveData(data);
                    });
                    response.on('error', reject);
                });
                resolve(new HttpResponse(response, dataPromise));
            });
            request.on('error', reject);
            if (signal) {
                if (signal.aborted) {
                    request.destroy(new _utils_js__WEBPACK_IMPORTED_MODULE_4__.AbortError('Request aborted'));
                }
                signal.addEventListener('abort', () => request.destroy(new _utils_js__WEBPACK_IMPORTED_MODULE_4__.AbortError('Request aborted')));
            }
        });
    }
    async request({ headers = {}, signal = undefined } = {}) {
        const response = await this.constructRequest(headers, signal);
        return response;
    }
}
//# sourceMappingURL=http.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/client/xhr.js"
/*!***************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/client/xhr.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XHRClient: () => (/* binding */ XHRClient)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/geotiff/dist-module/source/client/base.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/geotiff/dist-module/utils.js");


class XHRResponse extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseResponse {
    /**
     * BaseResponse facade for XMLHttpRequest
     * @param {XMLHttpRequest} xhr
     * @param {ArrayBuffer} data
     */
    constructor(xhr, data) {
        super();
        this.xhr = xhr;
        this.data = data;
    }
    get status() {
        return this.xhr.status;
    }
    /**
     * @param {string} name
     * @returns {string|undefined}
     */
    getHeader(name) {
        return this.xhr.getResponseHeader(name) || undefined;
    }
    async getData() {
        return this.data;
    }
}
class XHRClient extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseClient {
    /**
     * @param {Object<string, string>} headers
     * @param {AbortSignal} [signal]
     * @returns {Promise<XHRResponse>}
     */
    constructRequest(headers, signal) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this.url);
            xhr.responseType = 'arraybuffer';
            for (const [key, value] of Object.entries(headers)) {
                xhr.setRequestHeader(key, value);
            }
            // hook signals
            xhr.onload = () => {
                const data = xhr.response;
                resolve(new XHRResponse(xhr, data));
            };
            xhr.onerror = reject;
            xhr.onabort = () => reject(new _utils_js__WEBPACK_IMPORTED_MODULE_1__.AbortError('Request aborted'));
            xhr.send();
            if (signal) {
                if (signal.aborted) {
                    xhr.abort();
                }
                signal.addEventListener('abort', () => xhr.abort());
            }
        });
    }
    async request({ headers = {}, signal = undefined } = {}) {
        const response = await this.constructRequest(headers, signal);
        return response;
    }
}
//# sourceMappingURL=xhr.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/file.js"
/*!*********************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/file.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeFileSource: () => (/* binding */ makeFileSource)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "?662e");
/* harmony import */ var _basesource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basesource.js */ "./node_modules/geotiff/dist-module/source/basesource.js");


/**
 * @param {number} fd
 * @returns {Promise<void>}
 */
function closeAsync(fd) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__.close(fd, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
/**
 * @param {string} path
 * @param {string} flags
 * @param {number|undefined} mode
 * @returns {Promise<number>}
 */
function openAsync(path, flags, mode = undefined) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__.open(path, flags, mode, (err, fd) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(fd);
            }
        });
    });
}
/**
 * @param {number} fd
 * @param {Uint8Array} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @returns {Promise<{bytesRead: number, buffer: Uint8Array}>}
 */
function readAsync(fd, buffer, offset, length, position) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__.read(fd, buffer, offset, length, position, (err, bytesRead, outBuffer) => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ bytesRead, buffer: outBuffer });
            }
        });
    });
}
class FileSource extends _basesource_js__WEBPACK_IMPORTED_MODULE_1__.BaseSource {
    /**
     * @param {string} path
     */
    constructor(path) {
        super();
        this.path = path;
        this.openRequest = openAsync(path, 'r');
    }
    /**
     * @param {import('./basesource.js').Slice} slice
     * @param {AbortSignal} [_signal] not implemented
     * @returns {Promise<import('./basesource.js').SliceWithData>}
     */
    async fetchSlice(slice, _signal) {
        // TODO: use `signal`
        const fd = await this.openRequest;
        const { buffer } = await readAsync(fd, new Uint8Array(slice.length), 0, slice.length, slice.offset);
        return {
            data: buffer.buffer,
            offset: slice.offset,
            length: slice.length,
        };
    }
    async close() {
        const fd = await this.openRequest;
        await closeAsync(fd);
    }
}
/** @param {string} path */
function makeFileSource(path) {
    return new FileSource(path);
}
//# sourceMappingURL=file.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/filereader.js"
/*!***************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/filereader.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeFileReaderSource: () => (/* binding */ makeFileReaderSource)
/* harmony export */ });
/* harmony import */ var _basesource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basesource.js */ "./node_modules/geotiff/dist-module/source/basesource.js");

class FileReaderSource extends _basesource_js__WEBPACK_IMPORTED_MODULE_0__.BaseSource {
    /**
     * @param {Blob} file
     */
    constructor(file) {
        super();
        this.file = file;
    }
    /**
     * @param {import('./basesource.js').Slice} slice
     * @param {AbortSignal} signal
     * @returns {Promise<import('./basesource.js').SliceWithData>}
     */
    async fetchSlice(slice, signal) {
        return new Promise((resolve, reject) => {
            const blob = this.file.slice(slice.offset, slice.offset + slice.length);
            const reader = new FileReader();
            reader.onload = () => resolve({
                data: /** @type {ArrayBuffer} */ (reader.result),
                offset: slice.offset,
                length: slice.length,
            });
            reader.onerror = reject;
            reader.onabort = reject;
            reader.readAsArrayBuffer(blob);
            if (signal) {
                signal.addEventListener('abort', () => reader.abort());
            }
        });
    }
}
/**
 * Create a new source from a given file/blob.
 * @param {Blob} file The file or blob to read from.
 * @returns {FileReaderSource} The constructed source
 */
function makeFileReaderSource(file) {
    return new FileReaderSource(file);
}
//# sourceMappingURL=filereader.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/httputils.js"
/*!**************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/httputils.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseByteRanges: () => (/* binding */ parseByteRanges),
/* harmony export */   parseContentRange: () => (/* binding */ parseContentRange),
/* harmony export */   parseContentType: () => (/* binding */ parseContentType)
/* harmony export */ });
const CRLFCRLF = '\r\n\r\n';
/**
 * Shim for 'Object.fromEntries'
 * @template T
 * @param {Array<[string, T]>} items
 * @return {Record<string, T>}
 */
function itemsToObject(items) {
    if (typeof Object.fromEntries !== 'undefined') {
        return Object.fromEntries(items);
    }
    /** @type {Record<string, T>} */
    const obj = {};
    for (const [key, value] of items) {
        obj[key.toLowerCase()] = value;
    }
    return obj;
}
/**
 * Parse HTTP headers from a given string.
 * @param {string} text the text to parse the headers from
 * @returns {Record<string, string>} the parsed headers with lowercase keys
 */
function parseHeaders(text) {
    /** @type {Array<[string, string]>} */
    const items = text
        .split('\r\n')
        .map((line) => {
        const kv = /** @type {[string, string]} */ (line.split(':').map((str) => str.trim()));
        kv[0] = kv[0].toLowerCase();
        return kv;
    });
    return itemsToObject(items);
}
/**
 * Parse a 'Content-Type' header value to the content-type and parameters
 * @param {string|undefined} rawContentType the raw string to parse from
 * @returns {{type: string|null, params: Record<string, string>}}
 *     the parsed content type with the fields: type and params
 */
function parseContentType(rawContentType) {
    if (!rawContentType) {
        return { type: null, params: {} };
    }
    const [type, ...rawParams] = rawContentType.split(';').map((s) => s.trim());
    const paramsItems = /** @type {Array<[string, string]>} */ (rawParams.map((param) => param.split('=')));
    return { type, params: itemsToObject(paramsItems) };
}
/**
 * Parse a 'Content-Range' header value to its start, end, and total parts
 * @param {string|undefined} rawContentRange the raw string to parse from
 * @returns {{start: number, end: number, total: number}} the parsed parts
 */
function parseContentRange(rawContentRange) {
    let start = NaN;
    let end = NaN;
    let total = NaN;
    if (rawContentRange) {
        [, start, end, total] = (rawContentRange.match(/bytes (\d+)-(\d+)\/(\d+)/) || []).map(Number);
    }
    return { start, end, total };
}
/**
 * Parses a list of byteranges from the given 'multipart/byteranges' HTTP response.
 * Each item in the list has the following properties:
 * - headers: the HTTP headers
 * - data: the sliced ArrayBuffer for that specific part
 * - offset: the offset of the byterange within its originating file
 * - length: the length of the byterange
 * @param {ArrayBuffer} responseArrayBuffer the response to be parsed and split
 * @param {string} boundary the boundary string used to split the sections
 * @returns {Array<{headers: Record<string, string>, data: ArrayBuffer, offset: number, length: number, fileSize: number}>}
 *     the parsed byteranges
 */
function parseByteRanges(responseArrayBuffer, boundary) {
    let offset = -1;
    const decoder = new TextDecoder('ascii');
    const out = [];
    const startBoundary = `--${boundary}`;
    const endBoundary = `${startBoundary}--`;
    // search for the initial boundary, may be offset by some bytes
    // TODO: more efficient to check for `--` in bytes directly
    for (let i = 0; i < 10; ++i) {
        const text = decoder.decode(new Uint8Array(responseArrayBuffer, i, startBoundary.length));
        if (text === startBoundary) {
            offset = i;
        }
    }
    if (offset === -1) {
        throw new Error('Could not find initial boundary');
    }
    while (offset < responseArrayBuffer.byteLength) {
        const text = decoder.decode(new Uint8Array(responseArrayBuffer, offset, Math.min(startBoundary.length + 1024, responseArrayBuffer.byteLength - offset)));
        // break if we arrived at the end
        if (text.length === 0 || text.startsWith(endBoundary)) {
            break;
        }
        // assert that we are actually dealing with a byterange and are at the correct offset
        if (!text.startsWith(startBoundary)) {
            throw new Error('Part does not start with boundary');
        }
        // get a substring from where we read the headers
        const innerText = text.substr(startBoundary.length + 2);
        if (innerText.length === 0) {
            break;
        }
        // find the double linebreak that denotes the end of the headers
        const endOfHeaders = innerText.indexOf(CRLFCRLF);
        // parse the headers to get the content range size
        const headers = parseHeaders(innerText.substr(0, endOfHeaders));
        const { start, end, total } = parseContentRange(headers['content-range']);
        // calculate the length of the slice and the next offset
        const startOfData = offset + startBoundary.length + endOfHeaders + CRLFCRLF.length;
        const length = end + 1 - start;
        out.push({
            headers,
            data: responseArrayBuffer.slice(startOfData, startOfData + length),
            offset: start,
            length,
            fileSize: total,
        });
        offset = startOfData + length + 4;
    }
    return out;
}
//# sourceMappingURL=httputils.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/source/remote.js"
/*!***********************************************************!*\
  !*** ./node_modules/geotiff/dist-module/source/remote.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeCustomSource: () => (/* binding */ makeCustomSource),
/* harmony export */   makeFetchSource: () => (/* binding */ makeFetchSource),
/* harmony export */   makeHttpSource: () => (/* binding */ makeHttpSource),
/* harmony export */   makeRemoteSource: () => (/* binding */ makeRemoteSource),
/* harmony export */   makeXHRSource: () => (/* binding */ makeXHRSource)
/* harmony export */ });
/* harmony import */ var _httputils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httputils.js */ "./node_modules/geotiff/dist-module/source/httputils.js");
/* harmony import */ var _basesource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basesource.js */ "./node_modules/geotiff/dist-module/source/basesource.js");
/* harmony import */ var _blockedsource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockedsource.js */ "./node_modules/geotiff/dist-module/source/blockedsource.js");
/* harmony import */ var _client_fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/fetch.js */ "./node_modules/geotiff/dist-module/source/client/fetch.js");
/* harmony import */ var _client_xhr_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/xhr.js */ "./node_modules/geotiff/dist-module/source/client/xhr.js");
/* harmony import */ var _client_http_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/http.js */ "./node_modules/geotiff/dist-module/source/client/http.js");






/** @import { RemoteSourceOptions, BlockedSourceOptions } from '../geotiff.js' */
class RemoteSource extends _basesource_js__WEBPACK_IMPORTED_MODULE_1__.BaseSource {
    /**
     * @param {import("../geotiff.js").BaseClient} client
     * @param {RemoteSourceOptions} options
     */
    constructor(client, { headers, maxRanges = 0, allowFullFile } = {}) {
        super();
        this.client = client;
        this.headers = headers;
        this.maxRanges = maxRanges;
        this.allowFullFile = allowFullFile;
        this._fileSize = null;
    }
    /**
     * @param {import('./basesource.js').Slice[]} slices
     * @param {AbortSignal} [signal]
     * @returns {Promise<ArrayBufferLike[]>}
     */
    async fetch(slices, signal) {
        // if we allow multi-ranges, split the incoming request into that many sub-requests
        // and join them afterwards
        if (this.maxRanges >= slices.length) {
            return this.fetchSlices(slices, signal).then((results) => results.map((r) => r.data));
        }
        else if (this.maxRanges > 0 && slices.length > 1) {
            // TODO: split into multiple multi-range requests
            // const subSlicesRequests = [];
            // for (let i = 0; i < slices.length; i += this.maxRanges) {
            //   subSlicesRequests.push(
            //     this.fetchSlices(slices.slice(i, i + this.maxRanges), signal),
            //   );
            // }
            // return (await Promise.all(subSlicesRequests)).flat();
        }
        // otherwise make a single request for each slice
        return Promise.all(slices.map(async (slice) => (await this.fetchSlice(slice, signal)).data));
    }
    /**
     * @param {Array<import('./basesource.js').Slice>} slices
     * @param {AbortSignal} [signal]
     * @returns {Promise<Array<import('./basesource.js').SliceWithData>>}
     */
    async fetchSlices(slices, signal) {
        const response = await this.client.request({
            headers: {
                ...this.headers,
                Range: `bytes=${slices
                    .map(({ offset, length }) => `${offset}-${offset + length - 1}`)
                    .join(',')}`,
            },
            signal,
        });
        if (!response.ok) {
            throw new Error('Error fetching data.');
        }
        else if (response.status === 206) {
            const { type, params } = (0,_httputils_js__WEBPACK_IMPORTED_MODULE_0__.parseContentType)(response.getHeader('content-type'));
            if (type === 'multipart/byteranges') {
                const byteRanges = (0,_httputils_js__WEBPACK_IMPORTED_MODULE_0__.parseByteRanges)(await response.getData(), params.boundary);
                this._fileSize = byteRanges[0].fileSize || null;
                return byteRanges;
            }
            const data = await response.getData();
            const { start, end, total } = (0,_httputils_js__WEBPACK_IMPORTED_MODULE_0__.parseContentRange)(response.getHeader('content-range'));
            this._fileSize = total || null;
            /** @type {import('./basesource.js').SliceWithData[]} */
            const first = [{
                    data,
                    offset: start,
                    length: end + 1 - start,
                }];
            if (slices.length > 1) {
                // we requested more than one slice, but got only the first
                // unfortunately, some HTTP Servers don't support multi-ranges
                // and return only the first
                // get the rest of the slices and fetch them iteratively
                const others = await Promise.all(slices.slice(1).map((slice) => this.fetchSlice(slice, signal)));
                return first.concat(others);
            }
            return first;
        }
        else {
            if (!this.allowFullFile) {
                throw new Error('Server responded with full file');
            }
            const data = await response.getData();
            this._fileSize = data.byteLength;
            return [{
                    data,
                    offset: 0,
                    length: data.byteLength,
                }];
        }
    }
    /**
     * @param {import('./basesource.js').Slice} slice
     * @param {AbortSignal} [signal]
     * @returns {Promise<import('./basesource.js').SliceWithData>}
     */
    async fetchSlice(slice, signal) {
        const { offset, length } = slice;
        const response = await this.client.request({
            headers: {
                ...this.headers,
                Range: `bytes=${offset}-${offset + length - 1}`,
            },
            signal,
        });
        // check the response was okay and if the server actually understands range requests
        if (!response.ok) {
            throw new Error('Error fetching data.');
        }
        else if (response.status === 206) {
            const data = await response.getData();
            const { total } = (0,_httputils_js__WEBPACK_IMPORTED_MODULE_0__.parseContentRange)(response.getHeader('content-range'));
            this._fileSize = total || null;
            return {
                data,
                offset,
                length,
            };
        }
        else {
            if (!this.allowFullFile) {
                throw new Error('Server responded with full file');
            }
            const data = await response.getData();
            this._fileSize = data.byteLength;
            return {
                data,
                offset: 0,
                length: data.byteLength,
            };
        }
    }
    get fileSize() {
        return this._fileSize;
    }
}
/**
 * @param {BaseSource} source
 * @param {BlockedSourceOptions} blockedSourceOptions
 * @returns {BaseSource}
 */
function maybeWrapInBlockedSource(source, { blockSize, cacheSize }) {
    if (blockSize === undefined) {
        return source;
    }
    return new _blockedsource_js__WEBPACK_IMPORTED_MODULE_2__.BlockedSource(source, { blockSize, cacheSize });
}
/**
 * @param {string} url
 * @param {RemoteSourceOptions & BlockedSourceOptions & { credentials?: RequestCredentials}} [param1]
 * @returns {BaseSource}
 */
function makeFetchSource(url, { headers = {}, credentials, maxRanges = 0, allowFullFile = false, ...blockOptions } = {}) {
    const client = new _client_fetch_js__WEBPACK_IMPORTED_MODULE_3__.FetchClient(url, credentials);
    const source = new RemoteSource(client, { headers, maxRanges, allowFullFile });
    return maybeWrapInBlockedSource(source, blockOptions);
}
/**
 * @param {string} url
 * @param {RemoteSourceOptions & BlockedSourceOptions} [param1]
 * @returns {BaseSource}
 */
function makeXHRSource(url, { headers = {}, maxRanges = 0, allowFullFile = false, ...blockOptions } = {}) {
    const client = new _client_xhr_js__WEBPACK_IMPORTED_MODULE_4__.XHRClient(url);
    const source = new RemoteSource(client, { headers, maxRanges, allowFullFile });
    return maybeWrapInBlockedSource(source, blockOptions);
}
/**
 * @param {string} url
 * @param {RemoteSourceOptions & BlockedSourceOptions} [param1]
 * @returns {BaseSource}
 */
function makeHttpSource(url, { headers = {}, maxRanges = 0, allowFullFile = false, ...blockOptions } = {}) {
    const client = new _client_http_js__WEBPACK_IMPORTED_MODULE_5__.HttpClient(url);
    const source = new RemoteSource(client, { headers, maxRanges, allowFullFile });
    return maybeWrapInBlockedSource(source, blockOptions);
}
/**
 * @param {import("../geotiff.js").BaseClient} client
 * @param {RemoteSourceOptions & BlockedSourceOptions} [param1]
 * @returns {BaseSource}
 */
function makeCustomSource(client, { headers = {}, maxRanges = 0, allowFullFile = false, ...blockOptions } = {}) {
    const source = new RemoteSource(client, { headers, maxRanges, allowFullFile });
    return maybeWrapInBlockedSource(source, blockOptions);
}
/**
 *
 * @param {string} url
 * @param {RemoteSourceOptions} options
 */
function makeRemoteSource(url, { forceXHR = false, ...clientOptions } = {}) {
    if (typeof fetch === 'function' && !forceXHR) {
        return makeFetchSource(url, clientOptions);
    }
    if (typeof XMLHttpRequest !== 'undefined') {
        return makeXHRSource(url, clientOptions);
    }
    return makeHttpSource(url, clientOptions);
}
//# sourceMappingURL=remote.js.map

/***/ },

/***/ "./node_modules/geotiff/dist-module/utils.js"
/*!***************************************************!*\
  !*** ./node_modules/geotiff/dist-module/utils.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortError: () => (/* binding */ AbortError),
/* harmony export */   AggregateError: () => (/* binding */ AggregateError),
/* harmony export */   CustomAggregateError: () => (/* binding */ CustomAggregateError),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   chunk: () => (/* binding */ chunk),
/* harmony export */   endsWith: () => (/* binding */ endsWith),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   isTypedFloatArray: () => (/* binding */ isTypedFloatArray),
/* harmony export */   isTypedIntArray: () => (/* binding */ isTypedIntArray),
/* harmony export */   isTypedUintArray: () => (/* binding */ isTypedUintArray),
/* harmony export */   parseContentRange: () => (/* binding */ parseContentRange),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   times: () => (/* binding */ times),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   toArrayRecursively: () => (/* binding */ toArrayRecursively),
/* harmony export */   typeMap: () => (/* binding */ typeMap),
/* harmony export */   wait: () => (/* binding */ wait),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
function assign(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}
function chunk(iterable, length) {
    const results = [];
    const lengthOfIterable = iterable.length;
    for (let i = 0; i < lengthOfIterable; i += length) {
        const chunked = [];
        for (let ci = i; ci < i + length; ci++) {
            chunked.push(iterable[ci]);
        }
        results.push(chunked);
    }
    return results;
}
function endsWith(string, expectedEnding) {
    if (string.length < expectedEnding.length) {
        return false;
    }
    const actualEnding = string.substr(string.length - expectedEnding.length);
    return actualEnding === expectedEnding;
}
function forEach(iterable, func) {
    const { length } = iterable;
    for (let i = 0; i < length; i++) {
        func(iterable[i], i);
    }
}
function invert(oldObj) {
    const newObj = {};
    for (const key in oldObj) {
        if (oldObj.hasOwnProperty(key)) {
            const value = oldObj[key];
            newObj[value] = key;
        }
    }
    return newObj;
}
function range(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push(i);
    }
    return results;
}
function times(numTimes, func) {
    const results = [];
    for (let i = 0; i < numTimes; i++) {
        results.push(func(i));
    }
    return results;
}
function toArray(iterable) {
    const results = [];
    const { length } = iterable;
    for (let i = 0; i < length; i++) {
        results.push(iterable[i]);
    }
    return results;
}
function toArrayRecursively(input) {
    if (isArrayLike(input)) {
        return toArray(input).map(toArrayRecursively);
    }
    return input;
}
function isArrayLike(v) {
    return Boolean(typeof v === 'object' && v !== null && 'length' in v);
}
/** Copied from https://github.com/academia-de-codigo/parse-content-range-header/blob/master/index.js */
function parseContentRange(headerValue) {
    if (!headerValue) {
        return null;
    }
    if (typeof headerValue !== 'string') {
        throw new Error('invalid argument');
    }
    const parseInt = (number) => Number.parseInt(number, 10);
    // Check for presence of unit
    let matches = headerValue.match(/^(\w*) /);
    const unit = matches && matches[1];
    // check for start-end/size header format
    matches = headerValue.match(/(\d+)-(\d+)\/(\d+|\*)/);
    if (matches) {
        return {
            unit,
            first: parseInt(matches[1]),
            last: parseInt(matches[2]),
            length: matches[3] === '*' ? null : parseInt(matches[3]),
        };
    }
    // check for size header format
    matches = headerValue.match(/(\d+|\*)/);
    if (matches) {
        return {
            unit,
            first: null,
            last: null,
            length: matches[1] === '*' ? null : parseInt(matches[1]),
        };
    }
    return null;
}
/**
 * Promisified wrapper around 'setTimeout' to allow 'await'
 * @param {number} [milliseconds]
 * @returns {Promise<void>}
 */
async function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function zip(a, b) {
    const A = Array.isArray(a) ? a : Array.from(a);
    const B = Array.isArray(b) ? b : Array.from(b);
    return A.map((k, i) => [k, B[i]]);
}
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
class AbortError extends Error {
    constructor(...args) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...args);
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AbortError);
        }
        this.name = 'AbortError';
        this.signal = undefined;
    }
}
class CustomAggregateError extends Error {
    constructor(errors, message) {
        super(message);
        this.errors = errors;
        this.message = message;
        this.name = 'AggregateError';
    }
}
const AggregateError = CustomAggregateError;
function isTypedFloatArray(input) {
    if (ArrayBuffer.isView(input)) {
        const ctr = input.constructor;
        if (ctr === Float32Array || ctr === Float64Array) {
            return true;
        }
    }
    return false;
}
function isTypedIntArray(input) {
    if (ArrayBuffer.isView(input)) {
        const ctr = input.constructor;
        if (ctr === Int8Array || ctr === Int16Array || ctr === Int32Array) {
            return true;
        }
    }
    return false;
}
function isTypedUintArray(input) {
    if (ArrayBuffer.isView(input)) {
        const ctr = input.constructor;
        if (ctr === Uint8Array ||
            ctr === Uint16Array ||
            ctr === Uint32Array ||
            ctr === Uint8ClampedArray) {
            return true;
        }
    }
    return false;
}
const typeMap = {
    Float64Array,
    Float32Array,
    Uint32Array,
    Uint16Array,
    Uint8Array,
};
//# sourceMappingURL=utils.js.map

/***/ },

/***/ "./node_modules/quick-lru/index.js"
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickLRU)
/* harmony export */ });
class QuickLRU extends Map {
	constructor(options = {}) {
		super();

		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		if (typeof options.maxAge === 'number' && options.maxAge === 0) {
			throw new TypeError('`maxAge` must be a number greater than 0');
		}

		// TODO: Use private class fields when ESLint supports them.
		this.maxSize = options.maxSize;
		this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
		this.onEviction = options.onEviction;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	// TODO: Use private class methods when targeting Node.js 16.
	_emitEvictions(cache) {
		if (typeof this.onEviction !== 'function') {
			return;
		}

		for (const [key, item] of cache) {
			this.onEviction(key, item.value);
		}
	}

	_deleteIfExpired(key, item) {
		if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
			if (typeof this.onEviction === 'function') {
				this.onEviction(key, item.value);
			}

			return this.delete(key);
		}

		return false;
	}

	_getOrDeleteIfExpired(key, item) {
		const deleted = this._deleteIfExpired(key, item);
		if (deleted === false) {
			return item.value;
		}
	}

	_getItemValue(key, item) {
		return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
	}

	_peek(key, cache) {
		const item = cache.get(key);

		return this._getItemValue(key, item);
	}

	_set(key, value) {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;
			this._emitEvictions(this.oldCache);
			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}

	_moveToRecent(key, item) {
		this.oldCache.delete(key);
		this._set(key, item);
	}

	* _entriesAscending() {
		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield item;
				}
			}
		}

		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield item;
			}
		}
	}

	get(key) {
		if (this.cache.has(key)) {
			const item = this.cache.get(key);

			return this._getItemValue(key, item);
		}

		if (this.oldCache.has(key)) {
			const item = this.oldCache.get(key);
			if (this._deleteIfExpired(key, item) === false) {
				this._moveToRecent(key, item);
				return item.value;
			}
		}
	}

	set(key, value, {maxAge = this.maxAge} = {}) {
		const expiry =
			typeof maxAge === 'number' && maxAge !== Number.POSITIVE_INFINITY ?
				Date.now() + maxAge :
				undefined;
		if (this.cache.has(key)) {
			this.cache.set(key, {
				value,
				expiry
			});
		} else {
			this._set(key, {value, expiry});
		}

		return this;
	}

	has(key) {
		if (this.cache.has(key)) {
			return !this._deleteIfExpired(key, this.cache.get(key));
		}

		if (this.oldCache.has(key)) {
			return !this._deleteIfExpired(key, this.oldCache.get(key));
		}

		return false;
	}

	peek(key) {
		if (this.cache.has(key)) {
			return this._peek(key, this.cache);
		}

		if (this.oldCache.has(key)) {
			return this._peek(key, this.oldCache);
		}
	}

	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}

	resize(newSize) {
		if (!(newSize && newSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		const items = [...this._entriesAscending()];
		const removeCount = items.length - newSize;
		if (removeCount < 0) {
			this.cache = new Map(items);
			this.oldCache = new Map();
			this._size = items.length;
		} else {
			if (removeCount > 0) {
				this._emitEvictions(items.slice(0, removeCount));
			}

			this.oldCache = new Map(items.slice(removeCount));
			this.cache = new Map();
			this._size = 0;
		}

		this.maxSize = newSize;
	}

	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}

	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}

		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}

	* entriesDescending() {
		let items = [...this.cache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}

		items = [...this.oldCache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}

	* entriesAscending() {
		for (const [key, value] of this._entriesAscending()) {
			yield [key, value.value];
		}
	}

	get size() {
		if (!this._size) {
			return this.oldCache.size;
		}

		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}

		return Math.min(this._size + oldCacheSize, this.maxSize);
	}

	entries() {
		return this.entriesAscending();
	}

	forEach(callbackFunction, thisArgument = this) {
		for (const [key, value] of this.entriesAscending()) {
			callbackFunction.call(thisArgument, value, key, this);
		}
	}

	get [Symbol.toStringTag]() {
		return JSON.stringify([...this.entriesAscending()]);
	}
}


/***/ },

/***/ "./node_modules/xml-utils/count-substring.mjs"
/*!****************************************************!*\
  !*** ./node_modules/xml-utils/count-substring.mjs ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countSubstring)
/* harmony export */ });
function countSubstring(string, substring) {
  const pattern = new RegExp(substring, "g");
  const match = string.match(pattern);
  return match ? match.length : 0;
}


/***/ },

/***/ "./node_modules/xml-utils/find-tag-by-name.mjs"
/*!*****************************************************!*\
  !*** ./node_modules/xml-utils/find-tag-by-name.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findTagByName)
/* harmony export */ });
/* harmony import */ var _index_of_match_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-of-match.mjs */ "./node_modules/xml-utils/index-of-match.mjs");
/* harmony import */ var _index_of_match_end_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-of-match-end.mjs */ "./node_modules/xml-utils/index-of-match-end.mjs");
/* harmony import */ var _count_substring_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-substring.mjs */ "./node_modules/xml-utils/count-substring.mjs");




function findTagByName(xml, tagName, options) {
  const debug = (options && options.debug) || false;
  const nested = !(options && typeof options.nested === false);

  const startIndex = (options && options.startIndex) || 0;

  if (debug) console.log("[xml-utils] starting findTagByName with", tagName, " and ", options);

  const start = (0,_index_of_match_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(xml, `\<${tagName}[ \n\>\/]`, startIndex);
  if (debug) console.log("[xml-utils] start:", start);
  if (start === -1) return undefined;

  const afterStart = xml.slice(start + tagName.length);

  let relativeEnd = (0,_index_of_match_end_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(afterStart, "^[^<]*[ /]>", 0);

  const selfClosing = relativeEnd !== -1 && afterStart[relativeEnd - 1] === "/";
  if (debug) console.log("[xml-utils] selfClosing:", selfClosing);

  if (selfClosing === false) {
    // check if tag has subtags with the same name
    if (nested) {
      let startIndex = 0;
      let openings = 1;
      let closings = 0;
      while ((relativeEnd = (0,_index_of_match_end_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(afterStart, "[ /]" + tagName + ">", startIndex)) !== -1) {
        const clip = afterStart.substring(startIndex, relativeEnd + 1);
        openings += (0,_count_substring_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(clip, "<" + tagName + "[ \n\t>]");
        closings += (0,_count_substring_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(clip, "</" + tagName + ">");
        // we can't have more openings than closings
        if (closings >= openings) break;
        startIndex = relativeEnd;
      }
    } else {
      relativeEnd = (0,_index_of_match_end_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(afterStart, "[ /]" + tagName + ">", 0);
    }
  }

  const end = start + tagName.length + relativeEnd + 1;
  if (debug) console.log("[xml-utils] end:", end);
  if (end === -1) return undefined;

  const outer = xml.slice(start, end);
  // tag is like <gml:identifier codeSpace="OGP">urn:ogc:def:crs:EPSG::32617</gml:identifier>

  let inner;
  if (selfClosing) {
    inner = null;
  } else {
    inner = outer.slice(outer.indexOf(">") + 1, outer.lastIndexOf("<"));
  }

  return { inner, outer, start, end };
}


/***/ },

/***/ "./node_modules/xml-utils/find-tags-by-name.mjs"
/*!******************************************************!*\
  !*** ./node_modules/xml-utils/find-tags-by-name.mjs ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findTagsByName)
/* harmony export */ });
/* harmony import */ var _find_tag_by_name_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-tag-by-name.mjs */ "./node_modules/xml-utils/find-tag-by-name.mjs");


function findTagsByName(xml, tagName, options) {
  const tags = [];
  const debug = (options && options.debug) || false;
  const nested = options && typeof options.nested === "boolean" ? options.nested : true;
  let startIndex = (options && options.startIndex) || 0;
  let tag;
  while ((tag = (0,_find_tag_by_name_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(xml, tagName, { debug, startIndex }))) {
    if (nested) {
      startIndex = tag.start + 1 + tagName.length;
    } else {
      startIndex = tag.end;
    }
    tags.push(tag);
  }
  if (debug) console.log("findTagsByName found", tags.length, "tags");
  return tags;
}


/***/ },

/***/ "./node_modules/xml-utils/get-attribute.mjs"
/*!**************************************************!*\
  !*** ./node_modules/xml-utils/get-attribute.mjs ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAttribute)
/* harmony export */ });
function getAttribute(tag, attributeName, options) {
  const debug = (options && options.debug) || false;
  if (debug) console.log("[xml-utils] getting " + attributeName + " in " + tag);

  const xml = typeof tag === "object" ? tag.outer : tag;

  // only search for attributes in the opening tag
  const opening = xml.slice(0, xml.indexOf(">") + 1);

  const quotechars = ['"', "'"];
  for (let i = 0; i < quotechars.length; i++) {
    const char = quotechars[i];
    const pattern = attributeName + "\\=" + char + "([^" + char + "]*)" + char;
    if (debug) console.log("[xml-utils] pattern:", pattern);

    const re = new RegExp(pattern);
    const match = re.exec(opening);
    if (debug) console.log("[xml-utils] match:", match);
    if (match) return match[1];
  }
}


/***/ },

/***/ "./node_modules/xml-utils/index-of-match-end.mjs"
/*!*******************************************************!*\
  !*** ./node_modules/xml-utils/index-of-match-end.mjs ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ indexOfMatchEnd)
/* harmony export */ });
function indexOfMatchEnd(xml, pattern, startIndex) {
  const re = new RegExp(pattern);
  const match = re.exec(xml.slice(startIndex));
  if (match) return startIndex + match.index + match[0].length - 1;
  else return -1;
}


/***/ },

/***/ "./node_modules/xml-utils/index-of-match.mjs"
/*!***************************************************!*\
  !*** ./node_modules/xml-utils/index-of-match.mjs ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ indexOfMatch)
/* harmony export */ });
function indexOfMatch(xml, pattern, startIndex) {
  const re = new RegExp(pattern);
  const match = re.exec(xml.slice(startIndex));
  if (match) return startIndex + match.index;
  else return -1;
}


/***/ },

/***/ "./src/COGeo.js"
/*!**********************!*\
  !*** ./src/COGeo.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COGeo: () => (/* binding */ COGeo)
/* harmony export */ });
/* harmony import */ var gridviz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gridviz */ "gridviz");
/* harmony import */ var geotiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geotiff */ "./node_modules/geotiff/dist-module/geotiff.js");
/* harmony import */ var _COGeoTileReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./COGeoTileReader.js */ "./src/COGeoTileReader.js");
//@ts-check


;



/**
 * A dataset composed of a COGeo file.
 * @see https://www.cogeo.org/
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
class COGeo extends gridviz__WEBPACK_IMPORTED_MODULE_0__.Dataset {
    /**
     * @param {import('gridviz').Map} map
     * @param {string} url
     * @param {number} resolution Initial resolution; the COG pixel size is used after loading.
     * @param {{
     *  preprocess?:function(object):boolean,
     *  bands?:number[],
     *  headers?:Record<string,string>,
     *  credentials?:RequestCredentials,
     *  maxRanges?:number,
     *  remoteOptions?:{headers?:Record<string,string>,credentials?:RequestCredentials,maxRanges?:number}
     * }} opts
     */
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)
        this.remoteOptions = opts.remoteOptions || opts

        /** @type {Array.<COGeoCell>} */
        this.cells = []

        /** @type {number[]|undefined} */
        this.bands = opts.bands

        /** @type {string} */
        this.infoLoadingStatus = 'notLoaded'

        /** @type {string} */
        this.dataLoadingStatus = 'notLoaded'

        /** @type {any} */
        this.tiff = undefined

        /** @type {any} */
        this.image = undefined

        /** @type {COGeoRasterInfo|undefined} */
        this.rasterInfo = undefined

        /** @type {Map<string, Array.<any>>} */
        this.tileCache = new Map()

        /** @type {Map<string, Promise<Array.<any>>>} */
        this.pendingTiles = new Map()

        /** @type {{xMin:number,xMax:number,yMin:number,yMax:number}|undefined} */
        this.pendingView = undefined
        this.viewGeneration = 0

        this.getData()
    }

    /** @returns {this} */
    getData(extGeo = undefined) {
        if (extGeo) this.pendingView = extGeo

        if (this.infoLoadingStatus === 'notLoaded') {
            this.infoLoadingStatus = 'loading'
            ;(async () => {
                try {
                    const remoteOptions = {
                        allowFullFile: false,
                        ...(this.remoteOptions.headers ? { headers: this.remoteOptions.headers } : {}),
                        ...(this.remoteOptions.credentials
                            ? { credentials: this.remoteOptions.credentials }
                            : {}),
                        ...(Number.isInteger(this.remoteOptions.maxRanges)
                            ? { maxRanges: this.remoteOptions.maxRanges }
                            : {}),
                    }
                    this.tiff = await (0,geotiff__WEBPACK_IMPORTED_MODULE_1__.fromUrl)(
                        this.url,
                        remoteOptions
                    )
                    this.image = await this.tiff.getImage()
                    const bandCount = this.image.getSamplesPerPixel()
                    const bands =
                        this.bands === undefined
                            ? Array.from({ length: bandCount }, (_, index) => index)
                            : this.bands

                    validateBands(bands, bandCount)
                    const metadata = await Promise.all(bands.map((band) => this.image.getGDALMetadata(band)))
                    const bandNames = metadata.map((bandMetadata, index) => {
                        const description = bandMetadata && bandMetadata.DESCRIPTION
                        return typeof description === 'string' && description.length
                            ? description
                            : `band${bands[index] + 1}`
                    })
                    validateBandNames(bandNames)

                    const [resolutionX, resolutionY] = this.image.getResolution()
                    validateRaster(resolutionX, resolutionY, this.image)

                    this.rasterInfo = {
                        count: bands.length,
                        names: bandNames,
                        noData: this.image.getGDALNoData(),
                        metadata,
                    }
                    this.bands = bands

                    //console.log(this.rasterInfo)

                    const cellWidth = Math.abs(resolutionX)
                    //console.log(`COGeo pixel size: ${cellWidth} x ${Math.abs(resolutionY)}`)
                    this.resolution = cellWidth
                    this.infoLoadingStatus = 'loaded'

                    if (this.pendingView) this.loadView(this.pendingView)
                    if (this.map) this.map.redraw()
                } catch (error) {
                    if (error && error.name === 'AbortError') return
                    console.error('Could not load metadata from ' + this.url)
                    console.error(error)
                    this.infoLoadingStatus = 'failed'
                    this.cells = []
                }
            })()
        } else if (this.infoLoadingStatus === 'loaded' && extGeo) {
            this.loadView(extGeo)
        }

        return this
    }

    /**
     * @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo
     * @returns {Promise<void>}
     */
    async loadView(extGeo) {
        if (!this.image || !this.rasterInfo || !this.bands) return

        const generation = ++this.viewGeneration
        const bbox = getClippedBoundingBox(this.image, extGeo)
        if (!bbox) {
            this.cells = []
            this.cellsViewCache = []
            this.dataLoadingStatus = 'loaded'
            return
        }

        this.dataLoadingStatus = 'loading'

        try {
            const [originX, originY] = this.image.getOrigin()
            const [resolutionX, resolutionY] = this.image.getResolution()
            const isPixelArea = this.image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
            const window = getPixelWindow(
                originX,
                originY,
                resolutionX,
                resolutionY,
                this.image.getWidth(),
                this.image.getHeight(),
                bbox
            )

            if (!window) {
                this.cells = []
                this.cellsViewCache = []
                this.dataLoadingStatus = 'loaded'
                return
            }

            const tileWidth = this.image.getTileWidth()
            const tileHeight = this.image.getTileHeight()

            //console.log(this.image.getOrigin())
            //console.log(`COGeo tile size: ${tileWidth} x ${tileHeight}`)

            if (
                !Number.isInteger(tileWidth) ||
                tileWidth <= 0 ||
                !Number.isInteger(tileHeight) ||
                tileHeight <= 0
            )
                throw new Error('COGeo image tile dimensions must be positive integers.')
            const minTileX = Math.floor(window[0] / tileWidth)
            const maxTileX = Math.ceil(window[2] / tileWidth)
            const minTileY = Math.floor(window[1] / tileHeight)
            const maxTileY = Math.ceil(window[3] / tileHeight)
            const remoteOptions = getRemoteOptions(this.remoteOptions)
            const tileTasks = []
            for (let tileY = minTileY; tileY < maxTileY; tileY++) {
                for (let tileX = minTileX; tileX < maxTileX; tileX++) {
                    tileTasks.push({ tileX, tileY })
                }
            }

            const cells = []
            for (let index = 0; index < tileTasks.length; index += 4) {
                const batch = tileTasks.slice(index, index + 4)
                const rasters = await Promise.all(
                    batch.map(({ tileX, tileY }) =>
                        this.getTile(tileX, tileY, tileWidth, tileHeight, remoteOptions)
                    )
                )
                if (generation !== this.viewGeneration) return

                for (let tileIndex = 0; tileIndex < batch.length; tileIndex++) {
                    const { tileX, tileY } = batch[tileIndex]
                    const raster = rasters[tileIndex]
                    const tileWindow = getTileWindow(
                        tileX,
                        tileY,
                        tileWidth,
                        tileHeight,
                        this.image.getWidth(),
                        this.image.getHeight()
                    )
                    const tileCells = cellsFromRaster({
                        raster,
                        tileWindow,
                        window,
                        originX,
                        originY,
                        resolutionX,
                        resolutionY,
                        isPixelArea,
                        bands: this.bands,
                        rasterInfo: this.rasterInfo,
                        preprocess: this.preprocess,
                    })
                    cells.push(...tileCells)
                }
            }

            this.cells = cells
            this.dataLoadingStatus = 'loaded'
            this.updateViewCache(extGeo)
            if (this.map) this.map.redraw()
        } catch (error) {
            if (generation !== this.viewGeneration) return
            console.error('Could not load view from ' + this.url)
            console.error(error)
            this.dataLoadingStatus = 'failed'
            this.cells = []
        }
    }

    /**
     * @param {number} tileX
     * @param {number} tileY
     * @param {number} tileWidth
     * @param {number} tileHeight
     * @param {object} remoteOptions
     * @returns {Promise<Array.<any>>}
     */
    getTile(tileX, tileY, tileWidth, tileHeight, remoteOptions) {
        const bands = this.bands
        if (!bands) throw new Error('COGeo bands have not been initialized.')
        const key = `${tileX},${tileY}`
        if (this.tileCache.has(key)) {
            const raster = this.tileCache.get(key)
            if (!raster) throw new Error('Cached COGeo tile is unavailable.')
            this.tileCache.delete(key)
            this.tileCache.set(key, raster)
            return Promise.resolve(raster)
        }
        const pendingRequest = this.pendingTiles.get(key)
        if (pendingRequest) return pendingRequest

        const window = getTileWindow(
            tileX,
            tileY,
            tileWidth,
            tileHeight,
            this.image.getWidth(),
            this.image.getHeight()
        )
        const request = (0,_COGeoTileReader_js__WEBPACK_IMPORTED_MODULE_2__.readTile)(this.url, remoteOptions, this.image, window, bands)
        const tilePromise = request.then(
            (raster) => {
                if (!Array.isArray(raster) || raster.length !== bands.length)
                    throw new Error('COGeo tile data does not match the selected bands.')
                const pixelCount = (window[2] - window[0]) * (window[3] - window[1])
                if (raster.some((band) => band.length !== pixelCount))
                    throw new Error('COGeo tile data does not match its dimensions.')
                this.tileCache.set(key, raster)
                while (this.tileCache.size > 64) {
                    const oldest = this.tileCache.keys().next().value
                    if (oldest === undefined) break
                    this.tileCache.delete(oldest)
                }
                return raster
            }
        ).finally(() => {
            if (this.pendingTiles.get(key) === tilePromise) this.pendingTiles.delete(key)
        })
        this.pendingTiles.set(key, tilePromise)
        return tilePromise
    }

    /** @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo */
    updateViewCache(extGeo) {
        this.cellsViewCache = []
        for (const cell of this.cells) {
            if (+cell.x + this.resolution < extGeo.xMin) continue
            if (+cell.x - this.resolution > extGeo.xMax) continue
            if (+cell.y + this.resolution < extGeo.yMin) continue
            if (+cell.y - this.resolution > extGeo.yMax) continue
            this.cellsViewCache.push(cell)
        }
    }

}



function validateBands(bands, sampleCount) {
    if (!Array.isArray(bands) || bands.length === 0)
        throw new Error('The bands option must be a non-empty array of zero-based sample indexes.')
    if (bands.some((band) => !Number.isInteger(band) || band < 0 || band >= sampleCount))
        throw new RangeError(`Band indexes must be integers between 0 and ${sampleCount - 1}.`)
    if (new Set(bands).size !== bands.length)
        throw new Error('The bands option must not contain duplicate indexes.')
}

function validateBandNames(bandNames) {
    if (new Set(bandNames).size !== bandNames.length)
        throw new Error('COGeo band names must be unique to create cell properties.')
    if (bandNames.some((name) => name === 'x' || name === 'y'))
        throw new Error('COGeo band names cannot be "x" or "y", which are reserved for cell coordinates.')
}

function validateRaster(resolutionX, resolutionY, image) {
    const cellWidth = Math.abs(resolutionX)
    const cellHeight = Math.abs(resolutionY)
    if (!Number.isFinite(cellWidth) || !Number.isFinite(cellHeight) || cellWidth <= 0 || cellHeight <= 0)
        throw new Error('COGeo pixel dimensions must be finite and greater than zero.')
    if (Math.abs(cellWidth - cellHeight) > Math.max(cellWidth, cellHeight) * 1e-9)
        throw new Error('GridViz requires square COGeo pixels.')
    const transformation = image.getFileDirectory().getValue('ModelTransformation')
    if (
        transformation &&
        (Math.abs(transformation[1]) > cellWidth * 1e-12 ||
            Math.abs(transformation[4]) > cellHeight * 1e-12)
    )
        throw new Error('Rotated COGeo images are not supported.')
}

/**
 * @param {any} image
 * @param {{xMin:number,xMax:number,yMin:number,yMax:number}} extGeo
 * @returns {[number,number,number,number]|undefined}
 */
function getClippedBoundingBox(image, extGeo) {
    const bbox = image.getBoundingBox()
    if (!Array.isArray(bbox) || bbox.length !== 4) return undefined
    const xMin = Math.max(extGeo.xMin, bbox[0])
    const xMax = Math.min(extGeo.xMax, bbox[2])
    const yMin = Math.max(extGeo.yMin, bbox[1])
    const yMax = Math.min(extGeo.yMax, bbox[3])
    if (xMin >= xMax || yMin >= yMax) return undefined
    return [xMin, yMin, xMax, yMax]
}

/**
 * @typedef {{x:number,y:number,[key:string]:any}} COGeoCell
 * @typedef {{count:number,names:string[],noData:any,metadata:Array.<Record<string,any>|null>}} COGeoRasterInfo
 */

/**
 * @param {{headers?:Record<string,string>,credentials?:RequestCredentials,maxRanges?:number}} options
 * @returns {object}
 */
function getRemoteOptions(options) {
    return {
        allowFullFile: false,
        ...(options.headers ? { headers: options.headers } : {}),
        ...(options.credentials ? { credentials: options.credentials } : {}),
        ...(Number.isInteger(options.maxRanges) ? { maxRanges: options.maxRanges } : {}),
    }
}

/**
 * @param {number} tileX
 * @param {number} tileY
 * @param {number} tileWidth
 * @param {number} tileHeight
 * @param {number} imageWidth
 * @param {number} imageHeight
 * @returns {[number,number,number,number]}
 */
function getTileWindow(tileX, tileY, tileWidth, tileHeight, imageWidth, imageHeight) {
    const xMin = tileX * tileWidth
    const yMin = tileY * tileHeight
    return [
        xMin,
        yMin,
        Math.min(xMin + tileWidth, imageWidth),
        Math.min(yMin + tileHeight, imageHeight),
    ]
}

/**
 * @param {{
 *  raster:Array.<ArrayLike<number>>,
 *  tileWindow:[number,number,number,number],
 *  window:[number,number,number,number],
 *  originX:number,
 *  originY:number,
 *  resolutionX:number,
 *  resolutionY:number,
 *  isPixelArea:boolean,
 *  bands:number[],
 *  rasterInfo:COGeoRasterInfo,
 *  preprocess?:function(COGeoCell):boolean
 * }} options
 * @returns {Array.<COGeoCell>}
 */
function cellsFromRaster({
    raster,
    tileWindow,
    window,
    originX,
    originY,
    resolutionX,
    resolutionY,
    isPixelArea,
    bands,
    rasterInfo,
    preprocess,
}) {
    if (!Array.isArray(raster) || raster.length !== bands.length)
        throw new Error('COGeo tile data does not match the selected bands.')

    const tileWidth = tileWindow[2] - tileWindow[0]
    const tileHeight = tileWindow[3] - tileWindow[1]
    if (raster.some((band) => band.length !== tileWidth * tileHeight))
        throw new Error('COGeo tile data does not match its dimensions.')

    const xStart = Math.max(tileWindow[0], window[0])
    const yStart = Math.max(tileWindow[1], window[1])
    const xStop = Math.min(tileWindow[2], window[2])
    const yStop = Math.min(tileWindow[3], window[3])
    /** @type {Array.<COGeoCell>} */
    const cells = []

    for (let y = yStart; y < yStop; y++) {
        for (let x = xStart; x < xStop; x++) {
            const pixel = (y - tileWindow[1]) * tileWidth + x - tileWindow[0]
            const left = originX + x * resolutionX
            const top = originY + y * resolutionY
            const cell = /** @type {COGeoCell} */ ({
                x: snapIntegerNoise(
                    isPixelArea ? Math.min(left, left + resolutionX) : left - Math.abs(resolutionX) / 2
                ),
                y: snapIntegerNoise(
                    isPixelArea ? Math.min(top, top + resolutionY) : top - Math.abs(resolutionY) / 2
                ),
            })
            let hasData = false

            for (let bandIndex = 0; bandIndex < bands.length; bandIndex++) {
                const value = raster[bandIndex][pixel]
                const bandNoData = getBandNoData(rasterInfo.noData, rasterInfo.metadata[bandIndex])
                const isNoData = Number.isNaN(value) || isNoDataValue(value, bandNoData)
                cell[rasterInfo.names[bandIndex]] = isNoData ? undefined : value
                if (!isNoData) hasData = true
            }

            if (!hasData) continue
            if (preprocess && preprocess(cell) === false) continue
            cells.push(cell)
        }
    }
    return cells
}

/** @param {number} value */
function snapIntegerNoise(value) {
    const nearestInteger = Math.round(value)
    return Math.abs(value - nearestInteger) < 1e-9 ? nearestInteger : value
}

/**
 * @param {number} originX
 * @param {number} originY
 * @param {number} resolutionX
 * @param {number} resolutionY
 * @param {number} width
 * @param {number} height
 * @param {[number,number,number,number]} bbox
 * @returns {[number,number,number,number]|undefined}
 */
function getPixelWindow(originX, originY, resolutionX, resolutionY, width, height, bbox) {
    const columns = [
        (bbox[0] - originX) / resolutionX,
        (bbox[2] - originX) / resolutionX,
    ]
    const rows = [
        (bbox[1] - originY) / resolutionY,
        (bbox[3] - originY) / resolutionY,
    ]
    const xMin = Math.max(0, Math.floor(Math.min(...columns)))
    const xMax = Math.min(width, Math.ceil(Math.max(...columns)))
    const yMin = Math.max(0, Math.floor(Math.min(...rows)))
    const yMax = Math.min(height, Math.ceil(Math.max(...rows)))
    if (xMin >= xMax || yMin >= yMax) return undefined
    return [xMin, yMin, xMax, yMax]
}

function getBandNoData(globalNoData, metadata) {
    const value = metadata ? metadata.NODATA_VALUE : undefined
    if (value !== undefined) return Number(value)
    return globalNoData
}

function isNoDataValue(value, noDataValue) {
    if (noDataValue === null) return false
    return Number.isNaN(noDataValue) ? Number.isNaN(value) : value === noDataValue
}


/***/ },

/***/ "./src/COGeoTileReader.js"
/*!********************************!*\
  !*** ./src/COGeoTileReader.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readTile: () => (/* binding */ readTile)
/* harmony export */ });
const WORKER_COUNT = 2
const workers = []
const requests = new Map()
let nextWorker = 0
let nextRequest = 0
let workersFailed = typeof Worker === 'undefined'

function useMainThread(request) {
    request.image
        .readRasters({ window: request.window, samples: request.samples })
        .then(request.resolve, request.reject)
}

function disableWorkers() {
    workersFailed = true
    for (const worker of workers) worker.terminate()
    workers.length = 0

    const pending = [...requests.values()]
    requests.clear()
    for (const request of pending) useMainThread(request)
}

function getWorkers() {
    if (workersFailed) return undefined
    if (workers.length) return workers

    try {
        for (let index = 0; index < WORKER_COUNT; index++) {
            const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_COGeoTileWorker_js"), __webpack_require__.b), {
                type: undefined,
            })
            worker.onerror = disableWorkers
            worker.onmessageerror = disableWorkers
            worker.onmessage = ({ data }) => {
                const request = requests.get(data.id)
                if (!request) return
                requests.delete(data.id)
                if (data.error) request.reject(new Error(data.error))
                else request.resolve(data.raster)
            }
            workers.push(worker)
        }
    } catch (error) {
        disableWorkers()
        return undefined
    }
    return workers
}

/**
 * Read one complete TIFF tile. The worker's GeoTIFF decoder also performs
 * compressed-tile decoding off the main thread.
 */
function readTile(url, remoteOptions, image, window, samples) {
    const request = { image, window, samples }
    const pool = getWorkers()
    if (!pool) {
        return new Promise((resolve, reject) => useMainThread({ ...request, resolve, reject }))
    }

    return new Promise((resolve, reject) => {
        const id = nextRequest++
        const worker = pool[nextWorker]
        nextWorker = (nextWorker + 1) % pool.length
        requests.set(id, { ...request, resolve, reject })
        try {
            console.log(url, remoteOptions, window, samples)
            worker.postMessage({ id, url, remoteOptions, window, samples })
        } catch (error) {
            disableWorkers()
        }
    })
}


/***/ },

/***/ "./src/GeoTIFF.js"
/*!************************!*\
  !*** ./src/GeoTIFF.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoTIFF: () => (/* binding */ GeoTIFF)
/* harmony export */ });
/* harmony import */ var gridviz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gridviz */ "gridviz");
/* harmony import */ var geotiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geotiff */ "./node_modules/geotiff/dist-module/geotiff.js");
//@ts-check


;


/**
 * A dataset composed of a single GeoTiff file.
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
class GeoTIFF extends gridviz__WEBPACK_IMPORTED_MODULE_0__.Dataset {
    /**
     * @param {object} map
     * @param {string} url
     * @param {{preprocess?:function(object):boolean, bands?:number[]}} opts
     */
    constructor(map, url, opts = {}) {
        super(map, url, -1, opts)

        /**
         * @private
         * @type {Array.<object>}
         */
        this.cells = []

        /**
         * Zero-based band indexes to load; undefined means all bands.
         * @type {number[]|undefined}
         * @private
         */
        this.bands = opts.bands

        /**
         * @type {string}
         * @private
         */
        this.infoLoadingStatus = 'notLoaded'

        this.getData()
    }

    /**
     * Load the GeoTIFF once and convert its pixels to GridViz cells.
     * @returns {this}
     */
    getData() {
        if (this.infoLoadingStatus !== 'notLoaded') return this

        this.infoLoadingStatus = 'loading'
        ;(async () => {
            try {
                const tiff = await (0,geotiff__WEBPACK_IMPORTED_MODULE_1__.fromUrl)(this.url, { allowFullFile: true })
                const image = await tiff.getImage()

                // handle band indexes

                const bandCount = image.getSamplesPerPixel()
                const bands =
                    this.bands === undefined
                        ? Array.from({ length: bandCount }, (_, index) => index)
                        : this.bands

                if (!Array.isArray(bands) || bands.length === 0)
                    throw new Error(
                        'The bands option must be a non-empty array of zero-based band indexes.'
                    )
                if (bands.some((band) => !Number.isInteger(band) || band < 0 || band >= bandCount))
                    throw new RangeError(`Band indexes must be integers between 0 and ${bandCount - 1}.`)
                if (new Set(bands).size !== bands.length)
                    throw new Error('The bands option must not contain duplicate indexes.')

                // handle band names

                const metadata = await Promise.all(bands.map((band) => image.getGDALMetadata(band)))
                const bandNames = metadata.map((bandMetadata, index) => {
                    const description = bandMetadata && bandMetadata.DESCRIPTION
                    return typeof description === 'string' && description.length
                        ? description
                        : `band${bands[index] + 1}`
                })
                if (new Set(bandNames).size !== bandNames.length)
                    throw new Error('GeoTIFF band names must be unique to create cell properties.')
                if (bandNames.some((name) => name === 'x' || name === 'y'))
                    throw new Error(
                        'GeoTIFF band names cannot be "x" or "y", which are reserved for cell coordinates.'
                    )

                // handle resolutions

                const [resolutionX, resolutionY] = image.getResolution()
                const cellWidth = Math.abs(resolutionX)
                const cellHeight = Math.abs(resolutionY)
                if (
                    !Number.isFinite(cellWidth) ||
                    !Number.isFinite(cellHeight) ||
                    cellWidth <= 0 ||
                    cellHeight <= 0
                )
                    throw new Error('GeoTIFF pixel dimensions must be finite and greater than zero.')
                if (Math.abs(cellWidth - cellHeight) > Math.max(cellWidth, cellHeight) * 1e-9)
                    throw new Error('GridViz requires square GeoTIFF pixels.')

                // check non rotated images

                const transformation = image.getFileDirectory().getValue('ModelTransformation')
                if (
                    transformation &&
                    (Math.abs(transformation[1]) > cellWidth * 1e-12 ||
                        Math.abs(transformation[4]) > cellHeight * 1e-12)
                )
                    throw new Error('Rotated GeoTIFF images are not supported.')


                // handle raster size

                const width = image.getWidth()
                const height = image.getHeight()
                const pixelCount = width * height

                const raster = await image.readRasters({ samples: bands })
                if (raster.length !== bands.length || raster.some((band) => band.length !== pixelCount))
                    throw new Error('GeoTIFF raster data does not match the image dimensions.')

                // read raster data and convert to GridViz cells

                const [originX, originY] = image.getOrigin()
                const isPixelArea = image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
                const noDataValue = image.getGDALNoData()

                const cells = []
                for (let row = 0; row < height; row++) {
                    for (let column = 0; column < width; column++) {
                        const pixel = row * width + column
                        const cell = {
                            x: isPixelArea
                                ? Math.min(
                                      originX + column * resolutionX,
                                      originX + (column + 1) * resolutionX
                                  )
                                : originX + column * resolutionX - cellWidth / 2,
                            y: isPixelArea
                                ? Math.min(originY + row * resolutionY, originY + (row + 1) * resolutionY)
                                : originY + row * resolutionY - cellHeight / 2,
                        }
                        let hasData = false

                        for (let bandIndex = 0; bandIndex < bands.length; bandIndex++) {
                            const value = raster[bandIndex][pixel]
                            const bandNoData = getBandNoData(noDataValue, metadata[bandIndex])
                            const isNoData = Number.isNaN(value) || isNoDataValue(value, bandNoData)
                            cell[bandNames[bandIndex]] = isNoData ? undefined : value
                            if (!isNoData) hasData = true
                        }

                        if (!hasData) continue
                        if (this.preprocess && this.preprocess(cell) === false) continue
                        cells.push(cell)
                    }
                }

                this.resolution = cellWidth
                this.cells = cells
                this.infoLoadingStatus = 'loaded'
                if (this.map) this.map.redraw()
            } catch (error) {
                console.error('Could not load data from ' + this.url)
                console.error(error)
                this.infoLoadingStatus = 'failed'
                this.cells = []
            }
        })()

        return this
    }

    /**
     * Select cells intersecting the current geographic extent.
     * @param {{xMin:number, xMax:number, yMin:number, yMax:number}} extGeo
     */
    updateViewCache(extGeo) {
        this.cellsViewCache = []
        for (const cell of this.cells) {
            if (+cell.x + this.resolution < extGeo.xMin) continue
            if (+cell.x - this.resolution > extGeo.xMax) continue
            if (+cell.y + this.resolution < extGeo.yMin) continue
            if (+cell.y - this.resolution > extGeo.yMax) continue
            this.cellsViewCache.push(cell)
        }
    }
}

function getBandNoData(globalNoData, metadata) {
    const value = metadata ? metadata.NODATA_VALUE : undefined
    if (value !== undefined) return Number(value)
    return globalNoData
}

function isNoDataValue(value, noDataValue) {
    if (noDataValue === null) return false
    return Number.isNaN(noDataValue) ? Number.isNaN(value) : value === noDataValue
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		const promises = [];
/******/ 		__webpack_require__.f.j(chunkId, promises);
/******/ 		return Promise.all(promises);
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => (chunkId + ".gridviz-tiff.js");
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		const inProgress = {};
/******/ 		const dataWebpackPrefix = "gridviz.tiff:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			let script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					const s = scripts[i];
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
/******/ 			const onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				const doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode?.removeChild(script);
/******/ 				doneFns?.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			const timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				let installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							const promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							const error = new Error();
/******/ 							const loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										const errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										const realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										error.event = event;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(__webpack_require__.p + __webpack_require__.u(chunkId), loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkgridviz_tiff"] = self["webpackChunkgridviz_tiff"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COGeo: () => (/* reexport safe */ _COGeo_js__WEBPACK_IMPORTED_MODULE_1__.COGeo),
/* harmony export */   GeoTIFF: () => (/* reexport safe */ _GeoTIFF_js__WEBPACK_IMPORTED_MODULE_0__.GeoTIFF)
/* harmony export */ });
/* harmony import */ var _GeoTIFF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeoTIFF.js */ "./src/GeoTIFF.js");
/* harmony import */ var _COGeo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./COGeo.js */ "./src/COGeo.js");
//@ts-check





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BMZTtBQUNmLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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b2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dyaWR2aXoudGlmZi9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiZ3JpZHZpelwiLFwiY29tbW9uanNcIjpcImdyaWR2aXpcIixcImNvbW1vbmpzMlwiOlwiZ3JpZHZpelwiLFwiYW1kXCI6XCJncmlkdml6XCJ9Iiwid2VicGFjazovL2dyaWR2aXoudGlmZi9pZ25vcmVkfC9ob21lL2p1anUvd29ya3NwYWNlL2dyaWR2aXotdGlmZi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50fGh0dHAiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL2lnbm9yZWR8L2hvbWUvanVqdS93b3Jrc3BhY2UvZ3JpZHZpei10aWZmL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnR8aHR0cHMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL2lnbm9yZWR8L2hvbWUvanVqdS93b3Jrc3BhY2UvZ3JpZHZpei10aWZmL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnR8dXJsIiwid2VicGFjazovL2dyaWR2aXoudGlmZi9pZ25vcmVkfC9ob21lL2p1anUvd29ya3NwYWNlL2dyaWR2aXotdGlmZi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2V8ZnMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9EYXRhVmlldy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9hcnJheUl0ZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvQHBldGFtb3Jpa2VuL2Zsb2F0MTYvc3JjL191dGlsL2NvbnZlcnRlci5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9tZXNzYWdlcy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9wcmltb3JkaWFscy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZGF0YXNsaWNlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2RhdGF2aWV3NjQuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZ2VvdGlmZi5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9nZW90aWZmaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZ2VvdGlmZndyaXRlci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9nbG9iYWxzLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2ltYWdlZmlsZWRpcmVjdG9yeS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9yZ2IuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2FycmF5YnVmZmVyLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9iYXNlc291cmNlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9ibG9ja2Vkc291cmNlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnQvYmFzZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50L2ZldGNoLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnQvaHR0cC5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50L3hoci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvZmlsZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvZmlsZXJlYWRlci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvaHR0cHV0aWxzLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9yZW1vdGUuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3F1aWNrLWxydS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2NvdW50LXN1YnN0cmluZy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3htbC11dGlscy9maW5kLXRhZy1ieS1uYW1lLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2ZpbmQtdGFncy1ieS1uYW1lLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2dldC1hdHRyaWJ1dGUubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy94bWwtdXRpbHMvaW5kZXgtb2YtbWF0Y2gtZW5kLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2luZGV4LW9mLW1hdGNoLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9zcmMvQ09HZW8uanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vc3JjL0NPR2VvVGlsZVJlYWRlci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9zcmMvR2VvVElGRi5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZ3JpZHZpelwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJncmlkdml6XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdyaWR2aXpcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJncmlkdml6XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJncmlkdml6XCJdID0gcm9vdFtcImdyaWR2aXpcIl0gfHwge30sIHJvb3RbXCJncmlkdml6XCJdW1widGlmZlwiXSA9IGZhY3Rvcnkocm9vdFtcImdyaWR2aXpcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3JpZHZpel9fKSA9PiB7XG5yZXR1cm4gIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2dyaWR2aXpfXzsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgeyBzYWZlSWZOZWVkZWQgfSBmcm9tIFwiLi9fdXRpbC9hcnJheUl0ZXJhdG9yLm1qc1wiO1xuaW1wb3J0IHsgY29udmVydFRvTnVtYmVyLCByb3VuZFRvRmxvYXQxNkJpdHMgfSBmcm9tIFwiLi9fdXRpbC9jb252ZXJ0ZXIubWpzXCI7XG5pbXBvcnQge1xuICBEYXRhVmlld1Byb3RvdHlwZUdldFVpbnQxNixcbiAgRGF0YVZpZXdQcm90b3R5cGVTZXRVaW50MTYsXG59IGZyb20gXCIuL191dGlsL3ByaW1vcmRpYWxzLm1qc1wiO1xuXG4vKipcbiAqIHJldHVybnMgYW4gdW5zaWduZWQgMTYtYml0IGZsb2F0IGF0IHRoZSBzcGVjaWZpZWQgYnl0ZSBvZmZzZXQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIERhdGFWaWV3XG4gKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlld1xuICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVPZmZzZXRcbiAqIEBwYXJhbSB7W2Jvb2xlYW5dfSBvcHRzXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmxvYXQxNihkYXRhVmlldywgYnl0ZU9mZnNldCwgLi4ub3B0cykge1xuICByZXR1cm4gY29udmVydFRvTnVtYmVyKFxuICAgIERhdGFWaWV3UHJvdG90eXBlR2V0VWludDE2KGRhdGFWaWV3LCBieXRlT2Zmc2V0LCAuLi5zYWZlSWZOZWVkZWQob3B0cykpXG4gICk7XG59XG5cbi8qKlxuICogc3RvcmVzIGFuIHVuc2lnbmVkIDE2LWJpdCBmbG9hdCB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGJ5dGUgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBEYXRhVmlld1xuICogQHBhcmFtIHtEYXRhVmlld30gZGF0YVZpZXdcbiAqIEBwYXJhbSB7bnVtYmVyfSBieXRlT2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7W2Jvb2xlYW5dfSBvcHRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGbG9hdDE2KGRhdGFWaWV3LCBieXRlT2Zmc2V0LCB2YWx1ZSwgLi4ub3B0cykge1xuICByZXR1cm4gRGF0YVZpZXdQcm90b3R5cGVTZXRVaW50MTYoXG4gICAgZGF0YVZpZXcsXG4gICAgYnl0ZU9mZnNldCxcbiAgICByb3VuZFRvRmxvYXQxNkJpdHModmFsdWUpLFxuICAgIC4uLnNhZmVJZk5lZWRlZChvcHRzKVxuICApO1xufVxuIiwiaW1wb3J0IHtcbiAgQXJyYXlJdGVyYXRvclByb3RvdHlwZSxcbiAgQXJyYXlJdGVyYXRvclByb3RvdHlwZU5leHQsXG4gIEFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IsXG4gIEdlbmVyYXRvclByb3RvdHlwZU5leHQsXG4gIEl0ZXJhdG9yUHJvdG90eXBlLFxuICBOYXRpdmVBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yLFxuICBOYXRpdmVXZWFrTWFwLFxuICBPYmplY3RDcmVhdGUsXG4gIE9iamVjdERlZmluZVByb3BlcnR5LFxuICBSZWZsZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBSZWZsZWN0T3duS2V5cyxcbiAgU3ltYm9sSXRlcmF0b3IsXG4gIFdlYWtNYXBQcm90b3R5cGVHZXQsXG4gIFdlYWtNYXBQcm90b3R5cGVTZXQsXG59IGZyb20gXCIuL3ByaW1vcmRpYWxzLm1qc1wiO1xuXG4vKiogQHR5cGUge1dlYWtNYXA8e30sIEl0ZXJhYmxlSXRlcmF0b3I8YW55Pj59ICovXG5jb25zdCBhcnJheUl0ZXJhdG9ycyA9IG5ldyBOYXRpdmVXZWFrTWFwKCk7XG5cbmNvbnN0IFNhZmVJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdENyZWF0ZShudWxsLCB7XG4gIG5leHQ6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGNvbnN0IGFycmF5SXRlcmF0b3IgPSBXZWFrTWFwUHJvdG90eXBlR2V0KGFycmF5SXRlcmF0b3JzLCB0aGlzKTtcbiAgICAgIHJldHVybiBBcnJheUl0ZXJhdG9yUHJvdG90eXBlTmV4dChhcnJheUl0ZXJhdG9yKTtcbiAgICB9LFxuICB9LFxuXG4gIFtTeW1ib2xJdGVyYXRvcl06IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vKipcbiAqIFdyYXAgdGhlIEFycmF5IGFyb3VuZCB0aGUgU2FmZUl0ZXJhdG9yIElmIEFycmF5LnByb3RvdHlwZSBbQEBpdGVyYXRvcl0gaGFzIGJlZW4gbW9kaWZpZWRcbiAqIEB0eXBlIHs8VD4oYXJyYXk6IFRbXSkgPT4gSXRlcmFibGU8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYWZlSWZOZWVkZWQoYXJyYXkpIHtcbiAgaWYgKFxuICAgIGFycmF5W1N5bWJvbEl0ZXJhdG9yXSA9PT0gTmF0aXZlQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvciAmJlxuICAgIEFycmF5SXRlcmF0b3JQcm90b3R5cGUubmV4dCA9PT0gQXJyYXlJdGVyYXRvclByb3RvdHlwZU5leHRcbiAgKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3Qgc2FmZSA9IE9iamVjdENyZWF0ZShTYWZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICBXZWFrTWFwUHJvdG90eXBlU2V0KGFycmF5SXRlcmF0b3JzLCBzYWZlLCBBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yKGFycmF5KSk7XG4gIHJldHVybiBzYWZlO1xufVxuXG4vKiogQHR5cGUge1dlYWtNYXA8e30sIEdlbmVyYXRvcjxhbnk+Pn0gKi9cbmNvbnN0IGdlbmVyYXRvcnMgPSBuZXcgTmF0aXZlV2Vha01hcCgpO1xuXG4vKiogQHNlZSBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3QgKi9cbmNvbnN0IER1bW15QXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdENyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge1xuICBuZXh0OiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBjb25zdCBnZW5lcmF0b3IgPSBXZWFrTWFwUHJvdG90eXBlR2V0KGdlbmVyYXRvcnMsIHRoaXMpO1xuICAgICAgcmV0dXJuIEdlbmVyYXRvclByb3RvdHlwZU5leHQoZ2VuZXJhdG9yKTtcbiAgICB9LFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5mb3IgKGNvbnN0IGtleSBvZiBSZWZsZWN0T3duS2V5cyhBcnJheUl0ZXJhdG9yUHJvdG90eXBlKSkge1xuICAvLyBuZXh0IG1ldGhvZCBoYXMgYWxyZWFkeSBkZWZpbmVkXG4gIGlmIChrZXkgPT09IFwibmV4dFwiKSB7XG4gICAgY29udGludWU7XG4gIH1cblxuICAvLyBDb3B5IEFycmF5SXRlcmF0b3JQcm90b3R5cGUgZGVzY3JpcHRvcnMgdG8gRHVtbXlBcnJheUl0ZXJhdG9yUHJvdG90eXBlXG4gIE9iamVjdERlZmluZVByb3BlcnR5KER1bW15QXJyYXlJdGVyYXRvclByb3RvdHlwZSwga2V5LCBSZWZsZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGtleSkpO1xufVxuXG4vKipcbiAqIFdyYXAgdGhlIEdlbmVyYXRvciBhcm91bmQgdGhlIGR1bW15IEFycmF5SXRlcmF0b3JcbiAqIEB0eXBlIHs8VD4oZ2VuZXJhdG9yOiBHZW5lcmF0b3I8VD4pID0+IEl0ZXJhYmxlSXRlcmF0b3I8VD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKGdlbmVyYXRvcikge1xuICBjb25zdCBkdW1teSA9IE9iamVjdENyZWF0ZShEdW1teUFycmF5SXRlcmF0b3JQcm90b3R5cGUpO1xuICBXZWFrTWFwUHJvdG90eXBlU2V0KGdlbmVyYXRvcnMsIGR1bW15LCBnZW5lcmF0b3IpO1xuICByZXR1cm4gZHVtbXk7XG59XG4iLCJpbXBvcnQge1xuICBFUFNJTE9OLFxuICBNYXRoQWJzLFxuICBOYXRpdmVBcnJheUJ1ZmZlcixcbiAgTmF0aXZlRmxvYXQzMkFycmF5LFxuICBOYXRpdmVVaW50MTZBcnJheSxcbiAgTmF0aXZlVWludDMyQXJyYXksXG4gIE5hdGl2ZVVpbnQ4QXJyYXksXG4gIE51bWJlcklzRmluaXRlLFxuICBOdW1iZXJJc05hTixcbn0gZnJvbSBcIi4vcHJpbW9yZGlhbHMubWpzXCI7XG5cbmNvbnN0IElOVkVSU0VfT0ZfRVBTSUxPTiA9IDEgLyBFUFNJTE9OO1xuXG4vKipcbiAqIHJvdW5kcyB0byB0aGUgbmVhcmVzdCB2YWx1ZTtcbiAqIGlmIHRoZSBudW1iZXIgZmFsbHMgbWlkd2F5LCBpdCBpcyByb3VuZGVkIHRvIHRoZSBuZWFyZXN0IHZhbHVlIHdpdGggYW4gZXZlbiBsZWFzdCBzaWduaWZpY2FudCBkaWdpdFxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcm91bmRUaWVzVG9FdmVuKG51bSkge1xuICByZXR1cm4gKG51bSArIElOVkVSU0VfT0ZfRVBTSUxPTikgLSBJTlZFUlNFX09GX0VQU0lMT047XG59XG5cbmNvbnN0IEZMT0FUMTZfTUlOX1ZBTFVFID0gNi4xMDM1MTU2MjVlLTA1O1xuY29uc3QgRkxPQVQxNl9NQVhfVkFMVUUgPSA2NTUwNDtcbmNvbnN0IEZMT0FUMTZfRVBTSUxPTiA9IDAuMDAwOTc2NTYyNTtcblxuY29uc3QgRkxPQVQxNl9FUFNJTE9OX01VTFRJUExJRURfQllfRkxPQVQxNl9NSU5fVkFMVUUgPSBGTE9BVDE2X0VQU0lMT04gKiBGTE9BVDE2X01JTl9WQUxVRTtcbmNvbnN0IEZMT0FUMTZfRVBTSUxPTl9ERVZJREVEX0JZX0VQU0lMT04gPSBGTE9BVDE2X0VQU0lMT04gKiBJTlZFUlNFX09GX0VQU0lMT047XG5cbi8qKlxuICogcm91bmQgYSBudW1iZXIgdG8gYSBoYWxmIGZsb2F0IG51bWJlclxuICogQHBhcmFtIHt1bmtub3dufSBudW0gLSBkb3VibGUgZmxvYXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGhhbGYgZmxvYXQgbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvRmxvYXQxNihudW0pIHtcbiAgY29uc3QgbnVtYmVyID0gK251bTtcblxuICAvLyBOYU4sIEluZmluaXR5LCAtSW5maW5pdHksIDAsIC0wXG4gIGlmICghTnVtYmVySXNGaW5pdGUobnVtYmVyKSB8fCBudW1iZXIgPT09IDApIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgLy8gZmluaXRlIGV4Y2VwdCAwLCAtMFxuICBjb25zdCBzaWduID0gbnVtYmVyID4gMCA/IDEgOiAtMTtcbiAgY29uc3QgYWJzb2x1dGUgPSBNYXRoQWJzKG51bWJlcik7XG5cbiAgLy8gc21hbGwgbnVtYmVyXG4gIGlmIChhYnNvbHV0ZSA8IEZMT0FUMTZfTUlOX1ZBTFVFKSB7XG4gICAgcmV0dXJuIHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oYWJzb2x1dGUgLyBGTE9BVDE2X0VQU0lMT05fTVVMVElQTElFRF9CWV9GTE9BVDE2X01JTl9WQUxVRSkgKiBGTE9BVDE2X0VQU0lMT05fTVVMVElQTElFRF9CWV9GTE9BVDE2X01JTl9WQUxVRTtcbiAgfVxuXG4gIGNvbnN0IHRlbXAgPSAoMSArIEZMT0FUMTZfRVBTSUxPTl9ERVZJREVEX0JZX0VQU0lMT04pICogYWJzb2x1dGU7XG4gIGNvbnN0IHJlc3VsdCA9IHRlbXAgLSAodGVtcCAtIGFic29sdXRlKTtcblxuICAvLyBsYXJnZSBudW1iZXJcbiAgaWYgKHJlc3VsdCA+IEZMT0FUMTZfTUFYX1ZBTFVFIHx8IE51bWJlcklzTmFOKHJlc3VsdCkpIHtcbiAgICByZXR1cm4gc2lnbiAqIEluZmluaXR5O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiByZXN1bHQ7XG59XG5cbi8vIGJhc2UgYWxnb3JpdGhtOiBodHRwOi8vZm94LXRvb2xraXQub3JnL2Z0cC9mYXN0aGFsZmZsb2F0Y29udmVyc2lvbi5wZGZcblxuY29uc3QgYnVmZmVyID0gbmV3IE5hdGl2ZUFycmF5QnVmZmVyKDQpO1xuY29uc3QgZmxvYXRWaWV3ID0gbmV3IE5hdGl2ZUZsb2F0MzJBcnJheShidWZmZXIpO1xuY29uc3QgdWludDMyVmlldyA9IG5ldyBOYXRpdmVVaW50MzJBcnJheShidWZmZXIpO1xuXG5jb25zdCBiYXNlVGFibGUgPSBuZXcgTmF0aXZlVWludDE2QXJyYXkoNTEyKTtcbmNvbnN0IHNoaWZ0VGFibGUgPSBuZXcgTmF0aXZlVWludDhBcnJheSg1MTIpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGNvbnN0IGUgPSBpIC0gMTI3O1xuXG4gIC8vIHZlcnkgc21hbGwgbnVtYmVyICgwLCAtMClcbiAgaWYgKGUgPCAtMjQpIHtcbiAgICBiYXNlVGFibGVbaV0gICAgICAgICA9IDB4MDAwMDtcbiAgICBiYXNlVGFibGVbaSB8IDB4MTAwXSA9IDB4ODAwMDtcbiAgICBzaGlmdFRhYmxlW2ldICAgICAgICAgPSAyNDtcbiAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAyNDtcblxuICAvLyBzbWFsbCBudW1iZXIgKGRlbm9ybSlcbiAgfSBlbHNlIGlmIChlIDwgLTE0KSB7XG4gICAgYmFzZVRhYmxlW2ldICAgICAgICAgPSAgMHgwNDAwID4+ICgtZSAtIDE0KTtcbiAgICBiYXNlVGFibGVbaSB8IDB4MTAwXSA9ICgweDA0MDAgPj4gKC1lIC0gMTQpKSB8IDB4ODAwMDtcbiAgICBzaGlmdFRhYmxlW2ldICAgICAgICAgPSAtZSAtIDE7XG4gICAgc2hpZnRUYWJsZVtpIHwgMHgxMDBdID0gLWUgLSAxO1xuXG4gIC8vIG5vcm1hbCBudW1iZXJcbiAgfSBlbHNlIGlmIChlIDw9IDE1KSB7XG4gICAgYmFzZVRhYmxlW2ldICAgICAgICAgPSAgKGUgKyAxNSkgPDwgMTA7XG4gICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAoKGUgKyAxNSkgPDwgMTApIHwgMHg4MDAwO1xuICAgIHNoaWZ0VGFibGVbaV0gICAgICAgICA9IDEzO1xuICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IDEzO1xuXG4gIC8vIGxhcmdlIG51bWJlciAoSW5maW5pdHksIC1JbmZpbml0eSlcbiAgfSBlbHNlIGlmIChlIDwgMTI4KSB7XG4gICAgYmFzZVRhYmxlW2ldICAgICAgICAgPSAweDdjMDA7XG4gICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAweGZjMDA7XG4gICAgc2hpZnRUYWJsZVtpXSAgICAgICAgID0gMjQ7XG4gICAgc2hpZnRUYWJsZVtpIHwgMHgxMDBdID0gMjQ7XG5cbiAgLy8gc3RheSAoTmFOLCBJbmZpbml0eSwgLUluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIGJhc2VUYWJsZVtpXSAgICAgICAgID0gMHg3YzAwO1xuICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gMHhmYzAwO1xuICAgIHNoaWZ0VGFibGVbaV0gICAgICAgICA9IDEzO1xuICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IDEzO1xuICB9XG59XG5cbi8qKlxuICogcm91bmQgYSBudW1iZXIgdG8gYSBoYWxmIGZsb2F0IG51bWJlciBiaXRzXG4gKiBAcGFyYW0ge3Vua25vd259IG51bSAtIGRvdWJsZSBmbG9hdFxuICogQHJldHVybnMge251bWJlcn0gaGFsZiBmbG9hdCBudW1iZXIgYml0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0Zsb2F0MTZCaXRzKG51bSkge1xuICBmbG9hdFZpZXdbMF0gPSByb3VuZFRvRmxvYXQxNihudW0pO1xuICBjb25zdCBmID0gdWludDMyVmlld1swXTtcbiAgY29uc3QgZSA9IChmID4+IDIzKSAmIDB4MWZmO1xuICByZXR1cm4gYmFzZVRhYmxlW2VdICsgKChmICYgMHgwMDdmZmZmZikgPj4gc2hpZnRUYWJsZVtlXSk7XG59XG5cbmNvbnN0IG1hbnRpc3NhVGFibGUgPSBuZXcgTmF0aXZlVWludDMyQXJyYXkoMjA0OCk7XG5mb3IgKGxldCBpID0gMTsgaSA8IDEwMjQ7ICsraSkge1xuICBsZXQgbSA9IGkgPDwgMTM7IC8vIHplcm8gcGFkIG1hbnRpc3NhIGJpdHNcbiAgbGV0IGUgPSAwOyAvLyB6ZXJvIGV4cG9uZW50XG5cbiAgLy8gbm9ybWFsaXplZFxuICB3aGlsZSAoKG0gJiAweDAwODAwMDAwKSA9PT0gMCkge1xuICAgIG0gPDw9IDE7XG4gICAgZSAtPSAweDAwODAwMDAwOyAvLyBkZWNyZW1lbnQgZXhwb25lbnRcbiAgfVxuXG4gIG0gJj0gfjB4MDA4MDAwMDA7IC8vIGNsZWFyIGxlYWRpbmcgMSBiaXRcbiAgZSArPSAweDM4ODAwMDAwOyAvLyBhZGp1c3QgYmlhc1xuXG4gIG1hbnRpc3NhVGFibGVbaV0gPSBtIHwgZTtcbn1cbmZvciAobGV0IGkgPSAxMDI0OyBpIDwgMjA0ODsgKytpKSB7XG4gIG1hbnRpc3NhVGFibGVbaV0gPSAweDM4MDAwMDAwICsgKChpIC0gMTAyNCkgPDwgMTMpO1xufVxuXG5jb25zdCBleHBvbmVudFRhYmxlID0gbmV3IE5hdGl2ZVVpbnQzMkFycmF5KDY0KTtcbmZvciAobGV0IGkgPSAxOyBpIDwgMzE7ICsraSkge1xuICBleHBvbmVudFRhYmxlW2ldID0gaSA8PCAyMztcbn1cbmV4cG9uZW50VGFibGVbMzFdID0gMHg0NzgwMDAwMDtcbmV4cG9uZW50VGFibGVbMzJdID0gMHg4MDAwMDAwMDtcbmZvciAobGV0IGkgPSAzMzsgaSA8IDYzOyArK2kpIHtcbiAgZXhwb25lbnRUYWJsZVtpXSA9IDB4ODAwMDAwMDAgKyAoKGkgLSAzMikgPDwgMjMpO1xufVxuZXhwb25lbnRUYWJsZVs2M10gPSAweGM3ODAwMDAwO1xuXG5jb25zdCBvZmZzZXRUYWJsZSA9IG5ldyBOYXRpdmVVaW50MTZBcnJheSg2NCk7XG5mb3IgKGxldCBpID0gMTsgaSA8IDY0OyArK2kpIHtcbiAgaWYgKGkgIT09IDMyKSB7XG4gICAgb2Zmc2V0VGFibGVbaV0gPSAxMDI0O1xuICB9XG59XG5cbi8qKlxuICogY29udmVydCBhIGhhbGYgZmxvYXQgbnVtYmVyIGJpdHMgdG8gYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbG9hdDE2Yml0cyAtIGhhbGYgZmxvYXQgbnVtYmVyIGJpdHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGRvdWJsZSBmbG9hdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvTnVtYmVyKGZsb2F0MTZiaXRzKSB7XG4gIGNvbnN0IGkgPSBmbG9hdDE2Yml0cyA+PiAxMDtcbiAgdWludDMyVmlld1swXSA9IG1hbnRpc3NhVGFibGVbb2Zmc2V0VGFibGVbaV0gKyAoZmxvYXQxNmJpdHMgJiAweDNmZildICsgZXhwb25lbnRUYWJsZVtpXTtcbiAgcmV0dXJuIGZsb2F0Vmlld1swXTtcbn1cbiIsImV4cG9ydCBjb25zdCBUSElTX0lTX05PVF9BTl9PQkpFQ1QgPSBcIlRoaXMgaXMgbm90IGFuIG9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFRISVNfSVNfTk9UX0FfRkxPQVQxNkFSUkFZX09CSkVDVCA9IFwiVGhpcyBpcyBub3QgYSBGbG9hdDE2QXJyYXkgb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgVEhJU19DT05TVFJVQ1RPUl9JU19OT1RfQV9TVUJDTEFTU19PRl9GTE9BVDE2QVJSQVkgPVxuICBcIlRoaXMgY29uc3RydWN0b3IgaXMgbm90IGEgc3ViY2xhc3Mgb2YgRmxvYXQxNkFycmF5XCI7XG5leHBvcnQgY29uc3QgVEhFX0NPTlNUUlVDVE9SX1BST1BFUlRZX1ZBTFVFX0lTX05PVF9BTl9PQkpFQ1QgPVxuICBcIlRoZSBjb25zdHJ1Y3RvciBwcm9wZXJ0eSB2YWx1ZSBpcyBub3QgYW4gb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgU1BFQ0lFU19DT05TVFJVQ1RPUl9ESUROVF9SRVRVUk5fVFlQRURBUlJBWV9PQkpFQ1QgPVxuICBcIlNwZWNpZXMgY29uc3RydWN0b3IgZGlkbid0IHJldHVybiBUeXBlZEFycmF5IG9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IERFUklWRURfQ09OU1RSVUNUT1JfQ1JFQVRFRF9UWVBFREFSUkFZX09CSkVDVF9XSElDSF9XQVNfVE9PX1NNQUxMX0xFTkdUSCA9XG4gIFwiRGVyaXZlZCBjb25zdHJ1Y3RvciBjcmVhdGVkIFR5cGVkQXJyYXkgb2JqZWN0IHdoaWNoIHdhcyB0b28gc21hbGwgbGVuZ3RoXCI7XG5leHBvcnQgY29uc3QgQVRURU1QVElOR19UT19BQ0NFU1NfREVUQUNIRURfQVJSQVlCVUZGRVIgPVxuICBcIkF0dGVtcHRpbmcgdG8gYWNjZXNzIGRldGFjaGVkIEFycmF5QnVmZmVyXCI7XG5leHBvcnQgY29uc3QgQ0FOTk9UX0NPTlZFUlRfVU5ERUZJTkVEX09SX05VTExfVE9fT0JKRUNUID1cbiAgXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBDQU5OT1RfTUlYX0JJR0lOVF9BTkRfT1RIRVJfVFlQRVMgPVxuICBcIkNhbm5vdCBtaXggQmlnSW50IGFuZCBvdGhlciB0eXBlcywgdXNlIGV4cGxpY2l0IGNvbnZlcnNpb25zXCI7XG5leHBvcnQgY29uc3QgSVRFUkFUT1JfUFJPUEVSVFlfSVNfTk9UX0NBTExBQkxFID0gXCJAQGl0ZXJhdG9yIHByb3BlcnR5IGlzIG5vdCBjYWxsYWJsZVwiO1xuZXhwb3J0IGNvbnN0IFJFRFVDRV9PRl9FTVBUWV9BUlJBWV9XSVRIX05PX0lOSVRJQUxfVkFMVUUgPVxuICBcIlJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIjtcbmV4cG9ydCBjb25zdCBUSEVfQ09NUEFSSVNPTl9GVU5DVElPTl9NVVNUX0JFX0VJVEhFUl9BX0ZVTkNUSU9OX09SX1VOREVGSU5FRCA9XG4gIFwiVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gbXVzdCBiZSBlaXRoZXIgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIjtcbmV4cG9ydCBjb25zdCBPRkZTRVRfSVNfT1VUX09GX0JPVU5EUyA9IFwiT2Zmc2V0IGlzIG91dCBvZiBib3VuZHNcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGdsb2JhbCBTaGFyZWRBcnJheUJ1ZmZlciAqL1xuXG5pbXBvcnQgeyBDQU5OT1RfQ09OVkVSVF9VTkRFRklORURfT1JfTlVMTF9UT19PQkpFQ1QgfSBmcm9tIFwiLi9tZXNzYWdlcy5tanNcIjtcblxuLyoqIEB0eXBlIHs8VCBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueT4odGFyZ2V0OiBUKSA9PiAodGhpc0FyZzogVGhpc1R5cGU8VD4sIC4uLmFyZ3M6IGFueVtdKSA9PiBhbnl9ICovXG5mdW5jdGlvbiB1bmN1cnJ5VGhpcyh0YXJnZXQpIHtcbiAgcmV0dXJuICh0aGlzQXJnLCAuLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIFJlZmxlY3RBcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufVxuXG4vKiogQHR5cGUgeyh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcgfCBzeW1ib2wpID0+ICh0aGlzQXJnOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiBhbnl9ICovXG5mdW5jdGlvbiB1bmN1cnJ5VGhpc0dldHRlcih0YXJnZXQsIGtleSkge1xuICByZXR1cm4gdW5jdXJyeVRoaXMoXG4gICAgUmVmbGVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIHRhcmdldCxcbiAgICAgIGtleVxuICAgICkuZ2V0XG4gICk7XG59XG5cbi8vIFJlZmxlY3RcbmV4cG9ydCBjb25zdCB7XG4gIGFwcGx5OiBSZWZsZWN0QXBwbHksXG4gIGNvbnN0cnVjdDogUmVmbGVjdENvbnN0cnVjdCxcbiAgZGVmaW5lUHJvcGVydHk6IFJlZmxlY3REZWZpbmVQcm9wZXJ0eSxcbiAgZ2V0OiBSZWZsZWN0R2V0LFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IFJlZmxlY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGdldFByb3RvdHlwZU9mOiBSZWZsZWN0R2V0UHJvdG90eXBlT2YsXG4gIGhhczogUmVmbGVjdEhhcyxcbiAgb3duS2V5czogUmVmbGVjdE93bktleXMsXG4gIHNldDogUmVmbGVjdFNldCxcbiAgc2V0UHJvdG90eXBlT2Y6IFJlZmxlY3RTZXRQcm90b3R5cGVPZixcbn0gPSBSZWZsZWN0O1xuXG4vLyBQcm94eVxuZXhwb3J0IGNvbnN0IE5hdGl2ZVByb3h5ID0gUHJveHk7XG5cbi8vIE51bWJlclxuZXhwb3J0IGNvbnN0IHtcbiAgRVBTSUxPTixcbiAgTUFYX1NBRkVfSU5URUdFUixcbiAgaXNGaW5pdGU6IE51bWJlcklzRmluaXRlLFxuICBpc05hTjogTnVtYmVySXNOYU4sXG59ID0gTnVtYmVyO1xuXG4vLyBTeW1ib2xcbmV4cG9ydCBjb25zdCB7XG4gIGl0ZXJhdG9yOiBTeW1ib2xJdGVyYXRvcixcbiAgc3BlY2llczogU3ltYm9sU3BlY2llcyxcbiAgdG9TdHJpbmdUYWc6IFN5bWJvbFRvU3RyaW5nVGFnLFxuICBmb3I6IFN5bWJvbEZvcixcbn0gPSBTeW1ib2w7XG5cbi8vIE9iamVjdFxuZXhwb3J0IGNvbnN0IE5hdGl2ZU9iamVjdCA9IE9iamVjdDtcbmV4cG9ydCBjb25zdCB7XG4gIGNyZWF0ZTogT2JqZWN0Q3JlYXRlLFxuICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0RGVmaW5lUHJvcGVydHksXG4gIGZyZWV6ZTogT2JqZWN0RnJlZXplLFxuICBpczogT2JqZWN0SXMsXG59ID0gTmF0aXZlT2JqZWN0O1xuY29uc3QgT2JqZWN0UHJvdG90eXBlID0gTmF0aXZlT2JqZWN0LnByb3RvdHlwZTtcbi8qKiBAdHlwZSB7KG9iamVjdDogb2JqZWN0LCBrZXk6IFByb3BlcnR5S2V5KSA9PiBGdW5jdGlvbiB8IHVuZGVmaW5lZH0gKi9cbmV4cG9ydCBjb25zdCBPYmplY3RQcm90b3R5cGVfX2xvb2t1cEdldHRlcl9fID0gLyoqIEB0eXBlIHthbnl9ICovIChPYmplY3RQcm90b3R5cGUpLl9fbG9va3VwR2V0dGVyX19cbiAgPyB1bmN1cnJ5VGhpcygvKiogQHR5cGUge2FueX0gKi8gKE9iamVjdFByb3RvdHlwZSkuX19sb29rdXBHZXR0ZXJfXylcbiAgOiAob2JqZWN0LCBrZXkpID0+IHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHRocm93IE5hdGl2ZVR5cGVFcnJvcihcbiAgICAgICAgQ0FOTk9UX0NPTlZFUlRfVU5ERUZJTkVEX09SX05VTExfVE9fT0JKRUNUXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCB0YXJnZXQgPSBOYXRpdmVPYmplY3Qob2JqZWN0KTtcbiAgICBkbyB7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChPYmplY3RIYXNPd24oZGVzY3JpcHRvciwgXCJnZXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSB3aGlsZSAoKHRhcmdldCA9IFJlZmxlY3RHZXRQcm90b3R5cGVPZih0YXJnZXQpKSAhPT0gbnVsbCk7XG4gIH07XG4vKiogQHR5cGUgeyhvYmplY3Q6IG9iamVjdCwga2V5OiBQcm9wZXJ0eUtleSkgPT4gYm9vbGVhbn0gKi9cbmV4cG9ydCBjb25zdCBPYmplY3RIYXNPd24gPSAvKiogQHR5cGUge2FueX0gKi8gKE5hdGl2ZU9iamVjdCkuaGFzT3duIHx8XG4gIHVuY3VycnlUaGlzKE9iamVjdFByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIEFycmF5XG5jb25zdCBOYXRpdmVBcnJheSA9IEFycmF5O1xuZXhwb3J0IGNvbnN0IEFycmF5SXNBcnJheSA9IE5hdGl2ZUFycmF5LmlzQXJyYXk7XG5jb25zdCBBcnJheVByb3RvdHlwZSA9IE5hdGl2ZUFycmF5LnByb3RvdHlwZTtcbi8qKiBAdHlwZSB7KGFycmF5OiBBcnJheUxpa2U8dW5rbm93bj4sIHNlcGFyYXRvcj86IHN0cmluZykgPT4gc3RyaW5nfSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5UHJvdG90eXBlSm9pbiA9IHVuY3VycnlUaGlzKEFycmF5UHJvdG90eXBlLmpvaW4pO1xuLyoqIEB0eXBlIHs8VD4oYXJyYXk6IFRbXSwgLi4uaXRlbXM6IFRbXSkgPT4gbnVtYmVyfSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5UHJvdG90eXBlUHVzaCA9IHVuY3VycnlUaGlzKEFycmF5UHJvdG90eXBlLnB1c2gpO1xuLyoqIEB0eXBlIHsoYXJyYXk6IEFycmF5TGlrZTx1bmtub3duPiwgLi4ub3B0czogYW55W10pID0+IHN0cmluZ30gKi9cbmV4cG9ydCBjb25zdCBBcnJheVByb3RvdHlwZVRvTG9jYWxlU3RyaW5nID0gdW5jdXJyeVRoaXMoXG4gIEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nXG4pO1xuZXhwb3J0IGNvbnN0IE5hdGl2ZUFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IgPSBBcnJheVByb3RvdHlwZVtTeW1ib2xJdGVyYXRvcl07XG4vKiogQHR5cGUgezxUPihhcnJheTogVFtdKSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFQ+fSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IgPSB1bmN1cnJ5VGhpcyhOYXRpdmVBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yKTtcblxuLy8gTWF0aFxuZXhwb3J0IGNvbnN0IHtcbiAgYWJzOiBNYXRoQWJzLFxuICB0cnVuYzogTWF0aFRydW5jLFxufSA9IE1hdGg7XG5cbi8vIEFycmF5QnVmZmVyXG5leHBvcnQgY29uc3QgTmF0aXZlQXJyYXlCdWZmZXIgPSBBcnJheUJ1ZmZlcjtcbmV4cG9ydCBjb25zdCBBcnJheUJ1ZmZlcklzVmlldyA9IE5hdGl2ZUFycmF5QnVmZmVyLmlzVmlldztcbmNvbnN0IEFycmF5QnVmZmVyUHJvdG90eXBlID0gTmF0aXZlQXJyYXlCdWZmZXIucHJvdG90eXBlO1xuLyoqIEB0eXBlIHsoYnVmZmVyOiBBcnJheUJ1ZmZlciwgYmVnaW4/OiBudW1iZXIsIGVuZD86IG51bWJlcikgPT4gbnVtYmVyfSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5QnVmZmVyUHJvdG90eXBlU2xpY2UgPSB1bmN1cnJ5VGhpcyhBcnJheUJ1ZmZlclByb3RvdHlwZS5zbGljZSk7XG4vKiogQHR5cGUgeyhidWZmZXI6IEFycmF5QnVmZmVyKSA9PiBBcnJheUJ1ZmZlcn0gKi9cbmV4cG9ydCBjb25zdCBBcnJheUJ1ZmZlclByb3RvdHlwZUdldEJ5dGVMZW5ndGggPSB1bmN1cnJ5VGhpc0dldHRlcihBcnJheUJ1ZmZlclByb3RvdHlwZSwgXCJieXRlTGVuZ3RoXCIpO1xuXG4vLyBTaGFyZWRBcnJheUJ1ZmZlclxuZXhwb3J0IGNvbnN0IE5hdGl2ZVNoYXJlZEFycmF5QnVmZmVyID0gdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSBcInVuZGVmaW5lZFwiID8gU2hhcmVkQXJyYXlCdWZmZXIgOiBudWxsO1xuLyoqIEB0eXBlIHsoYnVmZmVyOiBTaGFyZWRBcnJheUJ1ZmZlcikgPT4gU2hhcmVkQXJyYXlCdWZmZXJ9ICovXG5leHBvcnQgY29uc3QgU2hhcmVkQXJyYXlCdWZmZXJQcm90b3R5cGVHZXRCeXRlTGVuZ3RoID0gTmF0aXZlU2hhcmVkQXJyYXlCdWZmZXJcbiAgJiYgdW5jdXJyeVRoaXNHZXR0ZXIoTmF0aXZlU2hhcmVkQXJyYXlCdWZmZXIucHJvdG90eXBlLCBcImJ5dGVMZW5ndGhcIik7XG5cbi8vIFR5cGVkQXJyYXlcbi8qKiBAdHlwZWRlZiB7VWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxJbnQ4QXJyYXl8SW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXl8QmlnVWludDY0QXJyYXl8QmlnSW50NjRBcnJheX0gVHlwZWRBcnJheSAqL1xuLyoqIEB0eXBlIHthbnl9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheSA9IFJlZmxlY3RHZXRQcm90b3R5cGVPZihVaW50OEFycmF5KTtcbmNvbnN0IFR5cGVkQXJyYXlGcm9tID0gVHlwZWRBcnJheS5mcm9tO1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5LnByb3RvdHlwZTtcbmV4cG9ydCBjb25zdCBOYXRpdmVUeXBlZEFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IgPSBUeXBlZEFycmF5UHJvdG90eXBlW1N5bWJvbEl0ZXJhdG9yXTtcbi8qKiBAdHlwZSB7KHR5cGVkQXJyYXk6IFR5cGVkQXJyYXkpID0+IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPn0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlS2V5cyA9IHVuY3VycnlUaGlzKFR5cGVkQXJyYXlQcm90b3R5cGUua2V5cyk7XG4vKiogQHR5cGUgeyh0eXBlZEFycmF5OiBUeXBlZEFycmF5KSA9PiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj59ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZVZhbHVlcyA9IHVuY3VycnlUaGlzKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLnZhbHVlc1xuKTtcbi8qKiBAdHlwZSB7KHR5cGVkQXJyYXk6IFR5cGVkQXJyYXkpID0+IEl0ZXJhYmxlSXRlcmF0b3I8W251bWJlciwgbnVtYmVyXT59ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUVudHJpZXMgPSB1bmN1cnJ5VGhpcyhcbiAgVHlwZWRBcnJheVByb3RvdHlwZS5lbnRyaWVzXG4pO1xuLyoqIEB0eXBlIHsodHlwZWRBcnJheTogVHlwZWRBcnJheSwgYXJyYXk6IEFycmF5TGlrZTxudW1iZXI+LCBvZmZzZXQ/OiBudW1iZXIpID0+IHZvaWR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZVNldCA9IHVuY3VycnlUaGlzKFR5cGVkQXJyYXlQcm90b3R5cGUuc2V0KTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBUeXBlZEFycmF5Pih0eXBlZEFycmF5OiBUKSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVSZXZlcnNlID0gdW5jdXJyeVRoaXMoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUucmV2ZXJzZVxuKTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBUeXBlZEFycmF5Pih0eXBlZEFycmF5OiBULCB2YWx1ZTogbnVtYmVyLCBzdGFydD86IG51bWJlciwgZW5kPzogbnVtYmVyKSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVGaWxsID0gdW5jdXJyeVRoaXMoVHlwZWRBcnJheVByb3RvdHlwZS5maWxsKTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBUeXBlZEFycmF5Pih0eXBlZEFycmF5OiBULCB0YXJnZXQ6IG51bWJlciwgc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVDb3B5V2l0aGluID0gdW5jdXJyeVRoaXMoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUuY29weVdpdGhpblxuKTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBUeXBlZEFycmF5Pih0eXBlZEFycmF5OiBULCBjb21wYXJlRm4/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcikgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlU29ydCA9IHVuY3VycnlUaGlzKFR5cGVkQXJyYXlQcm90b3R5cGUuc29ydCk7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMgVHlwZWRBcnJheT4odHlwZWRBcnJheTogVCwgc3RhcnQ/OiBudW1iZXIsIGVuZD86IG51bWJlcikgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlU2xpY2UgPSB1bmN1cnJ5VGhpcyhUeXBlZEFycmF5UHJvdG90eXBlLnNsaWNlKTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBUeXBlZEFycmF5Pih0eXBlZEFycmF5OiBULCBzdGFydD86IG51bWJlciwgZW5kPzogbnVtYmVyKSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVTdWJhcnJheSA9IHVuY3VycnlUaGlzKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLnN1YmFycmF5XG4pO1xuLyoqIEB0eXBlIHsoKHR5cGVkQXJyYXk6IFR5cGVkQXJyYXkpID0+IEFycmF5QnVmZmVyKX0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlR2V0QnVmZmVyID0gdW5jdXJyeVRoaXNHZXR0ZXIoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUsXG4gIFwiYnVmZmVyXCJcbik7XG4vKiogQHR5cGUgeygodHlwZWRBcnJheTogVHlwZWRBcnJheSkgPT4gbnVtYmVyKX0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlR2V0Qnl0ZU9mZnNldCA9IHVuY3VycnlUaGlzR2V0dGVyKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLFxuICBcImJ5dGVPZmZzZXRcIlxuKTtcbi8qKiBAdHlwZSB7KCh0eXBlZEFycmF5OiBUeXBlZEFycmF5KSA9PiBudW1iZXIpfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVHZXRMZW5ndGggPSB1bmN1cnJ5VGhpc0dldHRlcihcbiAgVHlwZWRBcnJheVByb3RvdHlwZSxcbiAgXCJsZW5ndGhcIlxuKTtcbi8qKiBAdHlwZSB7KHRhcmdldDogdW5rbm93bikgPT4gc3RyaW5nfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVHZXRTeW1ib2xUb1N0cmluZ1RhZyA9IHVuY3VycnlUaGlzR2V0dGVyKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLFxuICBTeW1ib2xUb1N0cmluZ1RhZ1xuKTtcblxuLy8gVWludDhBcnJheVxuZXhwb3J0IGNvbnN0IE5hdGl2ZVVpbnQ4QXJyYXkgPSBVaW50OEFycmF5O1xuXG4vLyBVaW50MTZBcnJheVxuZXhwb3J0IGNvbnN0IE5hdGl2ZVVpbnQxNkFycmF5ID0gVWludDE2QXJyYXk7XG4vKiogQHR5cGUge1VpbnQxNkFycmF5Q29uc3RydWN0b3JbXCJmcm9tXCJdfSAqL1xuZXhwb3J0IGNvbnN0IFVpbnQxNkFycmF5RnJvbSA9ICguLi5hcmdzKSA9PiB7XG4gIHJldHVybiBSZWZsZWN0QXBwbHkoVHlwZWRBcnJheUZyb20sIE5hdGl2ZVVpbnQxNkFycmF5LCBhcmdzKTtcbn07XG5cbi8vIFVpbnQzMkFycmF5XG5leHBvcnQgY29uc3QgTmF0aXZlVWludDMyQXJyYXkgPSBVaW50MzJBcnJheTtcblxuLy8gRmxvYXQzMkFycmF5XG5leHBvcnQgY29uc3QgTmF0aXZlRmxvYXQzMkFycmF5ID0gRmxvYXQzMkFycmF5O1xuXG4vLyBBcnJheUl0ZXJhdG9yXG4vKiogQHR5cGUge2FueX0gKi9cbmV4cG9ydCBjb25zdCBBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gUmVmbGVjdEdldFByb3RvdHlwZU9mKFtdW1N5bWJvbEl0ZXJhdG9yXSgpKTtcbi8qKiBAdHlwZSB7PFQ+KGFycmF5SXRlcmF0b3I6IEl0ZXJhYmxlSXRlcmF0b3I8VD4pID0+IEl0ZXJhdG9yUmVzdWx0PFQ+fSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5SXRlcmF0b3JQcm90b3R5cGVOZXh0ID0gdW5jdXJyeVRoaXMoQXJyYXlJdGVyYXRvclByb3RvdHlwZS5uZXh0KTtcblxuLy8gR2VuZXJhdG9yXG4vKiogQHR5cGUgezxUID0gdW5rbm93biwgVFJldHVybiA9IGFueSwgVE5leHQgPSB1bmtub3duPihnZW5lcmF0b3I6IEdlbmVyYXRvcjxULCBUUmV0dXJuLCBUTmV4dD4sIHZhbHVlPzogVE5leHQpID0+IFR9ICovXG5leHBvcnQgY29uc3QgR2VuZXJhdG9yUHJvdG90eXBlTmV4dCA9IHVuY3VycnlUaGlzKChmdW5jdGlvbiogKCkge30pKCkubmV4dCk7XG5cbi8vIEl0ZXJhdG9yXG5leHBvcnQgY29uc3QgSXRlcmF0b3JQcm90b3R5cGUgPSBSZWZsZWN0R2V0UHJvdG90eXBlT2YoQXJyYXlJdGVyYXRvclByb3RvdHlwZSk7XG5cbi8vIERhdGFWaWV3XG5jb25zdCBEYXRhVmlld1Byb3RvdHlwZSA9IERhdGFWaWV3LnByb3RvdHlwZTtcbi8qKiBAdHlwZSB7KGRhdGFWaWV3OiBEYXRhVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCBsaXR0bGVFbmRpYW4/OiBib29sZWFuKSA9PiBudW1iZXJ9ICovXG5leHBvcnQgY29uc3QgRGF0YVZpZXdQcm90b3R5cGVHZXRVaW50MTYgPSB1bmN1cnJ5VGhpcyhcbiAgRGF0YVZpZXdQcm90b3R5cGUuZ2V0VWludDE2XG4pO1xuLyoqIEB0eXBlIHsoZGF0YVZpZXc6IERhdGFWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIGxpdHRsZUVuZGlhbj86IGJvb2xlYW4pID0+IHZvaWR9ICovXG5leHBvcnQgY29uc3QgRGF0YVZpZXdQcm90b3R5cGVTZXRVaW50MTYgPSB1bmN1cnJ5VGhpcyhcbiAgRGF0YVZpZXdQcm90b3R5cGUuc2V0VWludDE2XG4pO1xuXG4vLyBFcnJvclxuZXhwb3J0IGNvbnN0IE5hdGl2ZVR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbmV4cG9ydCBjb25zdCBOYXRpdmVSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblxuLy8gV2Vha1NldFxuLyoqXG4gKiBEbyBub3QgY29uc3RydWN0IHdpdGggYXJndW1lbnRzIHRvIGF2b2lkIGNhbGxpbmcgdGhlIFwiYWRkXCIgbWV0aG9kXG4gKiBAdHlwZSB7e25ldyA8VCBleHRlbmRzIHt9PigpOiBXZWFrU2V0PFQ+fX1cbiAqL1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVdlYWtTZXQgPSBXZWFrU2V0O1xuY29uc3QgV2Vha1NldFByb3RvdHlwZSA9IE5hdGl2ZVdlYWtTZXQucHJvdG90eXBlO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIHt9PihzZXQ6IFdlYWtTZXQ8VD4sIHZhbHVlOiBUKSA9PiBTZXQ8VD59ICovXG5leHBvcnQgY29uc3QgV2Vha1NldFByb3RvdHlwZUFkZCA9IHVuY3VycnlUaGlzKFdlYWtTZXRQcm90b3R5cGUuYWRkKTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyB7fT4oc2V0OiBXZWFrU2V0PFQ+LCB2YWx1ZTogVCkgPT4gYm9vbGVhbn0gKi9cbmV4cG9ydCBjb25zdCBXZWFrU2V0UHJvdG90eXBlSGFzID0gdW5jdXJyeVRoaXMoV2Vha1NldFByb3RvdHlwZS5oYXMpO1xuXG4vLyBXZWFrTWFwXG4vKipcbiAqIERvIG5vdCBjb25zdHJ1Y3Qgd2l0aCBhcmd1bWVudHMgdG8gYXZvaWQgY2FsbGluZyB0aGUgXCJzZXRcIiBtZXRob2RcbiAqIEB0eXBlIHt7bmV3IDxLIGV4dGVuZHMge30sIFY+KCk6IFdlYWtNYXA8SywgVj59fVxuICovXG5leHBvcnQgY29uc3QgTmF0aXZlV2Vha01hcCA9IFdlYWtNYXA7XG5jb25zdCBXZWFrTWFwUHJvdG90eXBlID0gTmF0aXZlV2Vha01hcC5wcm90b3R5cGU7XG4vKiogQHR5cGUgezxLIGV4dGVuZHMge30sIFY+KHdlYWtNYXA6IFdlYWtNYXA8SywgVj4sIGtleTogSykgPT4gVn0gKi9cbmV4cG9ydCBjb25zdCBXZWFrTWFwUHJvdG90eXBlR2V0ID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5nZXQpO1xuLyoqIEB0eXBlIHs8SyBleHRlbmRzIHt9LCBWPih3ZWFrTWFwOiBXZWFrTWFwPEssIFY+LCBrZXk6IEspID0+IGJvb2xlYW59ICovXG5leHBvcnQgY29uc3QgV2Vha01hcFByb3RvdHlwZUhhcyA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuaGFzKTtcbi8qKiBAdHlwZSB7PEsgZXh0ZW5kcyB7fSwgVj4od2Vha01hcDogV2Vha01hcDxLLCBWPiwga2V5OiBLLCB2YWx1ZTogVikgPT4gV2Vha01hcH0gKi9cbmV4cG9ydCBjb25zdCBXZWFrTWFwUHJvdG90eXBlU2V0ID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5zZXQpO1xuIiwiLyoqIEBpbXBvcnQgQmFzZURlY29kZXIsIHtCYXNlRGVjb2RlclBhcmFtZXRlcnN9IGZyb20gXCIuL2Jhc2VkZWNvZGVyLmpzXCIgKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVnaXN0cnlFbnRyeVxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOlByb21pc2U8dHlwZW9mIEJhc2VEZWNvZGVyPn0gaW1wb3J0Rm5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeSk6UHJvbWlzZTxCYXNlRGVjb2RlclBhcmFtZXRlcnM+fSBkZWNvZGVyUGFyYW1ldGVyRm5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJlZmVyV29ya2VyXG4gKi9cbi8qKiBAdHlwZSB7TWFwPG51bWJlciB8IHVuZGVmaW5lZCwgUmVnaXN0cnlFbnRyeT59ICovXG5jb25zdCByZWdpc3RyeSA9IG5ldyBNYXAoKTtcbi8qKlxuICogRGVmYXVsdCBkZWNvZGVyIHBhcmFtZXRlciByZXRyaWV2YWwgZnVuY3Rpb25cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeX0gZmlsZURpcmVjdG9yeVxuICogQHJldHVybnMge1Byb21pc2U8QmFzZURlY29kZXJQYXJhbWV0ZXJzPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdERlY29kZXJQYXJhbWV0ZXJGbihmaWxlRGlyZWN0b3J5KSB7XG4gICAgY29uc3QgaXNUaWxlZCA9ICFmaWxlRGlyZWN0b3J5Lmhhc1RhZygnU3RyaXBPZmZzZXRzJyk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7QmFzZURlY29kZXJQYXJhbWV0ZXJzfSAqLyAoe1xuICAgICAgICB0aWxlV2lkdGg6IGlzVGlsZWRcbiAgICAgICAgICAgID8gYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ1RpbGVXaWR0aCcpXG4gICAgICAgICAgICA6IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdJbWFnZVdpZHRoJyksXG4gICAgICAgIHRpbGVIZWlnaHQ6IGlzVGlsZWRcbiAgICAgICAgICAgID8gYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ1RpbGVMZW5ndGgnKVxuICAgICAgICAgICAgOiAoYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ1Jvd3NQZXJTdHJpcCcpXG4gICAgICAgICAgICAgICAgfHwgYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0ltYWdlTGVuZ3RoJykpLFxuICAgICAgICBwbGFuYXJDb25maWd1cmF0aW9uOiBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnUGxhbmFyQ29uZmlndXJhdGlvbicpLFxuICAgICAgICBiaXRzUGVyU2FtcGxlOiBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnQml0c1BlclNhbXBsZScpLFxuICAgICAgICBwcmVkaWN0b3I6IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdQcmVkaWN0b3InKSB8fCAxLFxuICAgIH0pO1xufVxuLyoqXG4gKiBSZWdpc3RlciBhIGRlY29kZXIgZm9yIGEgc3BlY2lmaWMgY29tcHJlc3Npb24gbWV0aG9kIG9yIGEgcmFuZ2Ugb2YgY29tcHJlc3Npb25zXG4gKiBAcGFyYW0geyhudW1iZXJ8dW5kZWZpbmVkfChudW1iZXJ8dW5kZWZpbmVkKVtdKX0gY2FzZXMgaWRzIG9mIHRoZSBjb21wcmVzc2lvbiBtZXRob2RzIHRvIHJlZ2lzdGVyIGZvclxuICogQHBhcmFtIHtmdW5jdGlvbigpOlByb21pc2U8dHlwZW9mIEJhc2VEZWNvZGVyPn0gaW1wb3J0Rm4gdGhlIGZ1bmN0aW9uIHRvIGltcG9ydCB0aGUgZGVjb2RlclxuICogQHBhcmFtIHtmdW5jdGlvbihpbXBvcnQoXCIuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5KTpQcm9taXNlPEJhc2VEZWNvZGVyUGFyYW1ldGVycz59IGRlY29kZXJQYXJhbWV0ZXJGblxuICogQHBhcmFtIHtib29sZWFufSBwcmVmZXJXb3JrZXJfIFdoZXRoZXIgdG8gcHJlZmVyIHJ1bm5pbmcgdGhlIGRlY29kZXIgaW4gYSB3b3JrZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlY29kZXIoY2FzZXMsIGltcG9ydEZuLCBkZWNvZGVyUGFyYW1ldGVyRm4gPSBkZWZhdWx0RGVjb2RlclBhcmFtZXRlckZuLCBwcmVmZXJXb3JrZXJfID0gdHJ1ZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjYXNlcykpIHtcbiAgICAgICAgY2FzZXMgPSBbY2FzZXNdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICAgIGNhc2VzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgcmVnaXN0cnkuc2V0KGMsIHsgaW1wb3J0Rm4sIGRlY29kZXJQYXJhbWV0ZXJGbiwgcHJlZmVyV29ya2VyOiBwcmVmZXJXb3JrZXJfIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBHZXQgdGhlIHJlcXVpcmVkIGRlY29kZXIgcGFyYW1ldGVycyBmb3IgYSBzcGVjaWZpYyBjb21wcmVzc2lvbiBtZXRob2RcbiAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gY29tcHJlc3Npb25cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanMnKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IGZpbGVEaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlY29kZXJQYXJhbWV0ZXJzKGNvbXByZXNzaW9uLCBmaWxlRGlyZWN0b3J5KSB7XG4gICAgaWYgKCFyZWdpc3RyeS5oYXMoY29tcHJlc3Npb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21wcmVzc2lvbiBtZXRob2QgaWRlbnRpZmllcjogJHtjb21wcmVzc2lvbn1gKTtcbiAgICB9XG4gICAgY29uc3QgeyBkZWNvZGVyUGFyYW1ldGVyRm4gfSA9IC8qKiBAdHlwZSB7UmVnaXN0cnlFbnRyeX0gKi8gKHJlZ2lzdHJ5LmdldChjb21wcmVzc2lvbikpO1xuICAgIHJldHVybiBkZWNvZGVyUGFyYW1ldGVyRm4oZmlsZURpcmVjdG9yeSk7XG59XG4vKipcbiAqIEdldCBhIGRlY29kZXIgZm9yIGEgc3BlY2lmaWMgY29tcHJlc3Npb24gYW5kIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb21wcmVzc2lvbiB0aGUgY29tcHJlc3Npb24gbWV0aG9kIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7QmFzZURlY29kZXJQYXJhbWV0ZXJzfSBkZWNvZGVyUGFyYW1ldGVycyB0aGUgcGFyYW1ldGVycyBmb3IgdGhlIGRlY29kZXJcbiAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9iYXNlZGVjb2Rlci5qcycpLmRlZmF1bHQ+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGVjb2Rlcihjb21wcmVzc2lvbiwgZGVjb2RlclBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXJlZ2lzdHJ5Lmhhcyhjb21wcmVzc2lvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCBpZGVudGlmaWVyOiAke2NvbXByZXNzaW9ufWApO1xuICAgIH1cbiAgICBjb25zdCB7IGltcG9ydEZuIH0gPSAvKiogQHR5cGUge1JlZ2lzdHJ5RW50cnl9ICovIChyZWdpc3RyeS5nZXQoY29tcHJlc3Npb24pKTtcbiAgICBjb25zdCBEZWNvZGVyID0gYXdhaXQgaW1wb3J0Rm4oKTtcbiAgICByZXR1cm4gbmV3IERlY29kZXIoZGVjb2RlclBhcmFtZXRlcnMpO1xufVxuLyoqXG4gKiBXaGV0aGVyIHRvIHByZWZlciBydW5uaW5nIHRoZSBkZWNvZGVyIGluIGEgd29ya2VyXG4gKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IGNvbXByZXNzaW9uIHRoZSBjb21wcmVzc2lvbiBtZXRob2QgaWRlbnRpZmllclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmZXJXb3JrZXIoY29tcHJlc3Npb24pIHtcbiAgICBpZiAoIXJlZ2lzdHJ5Lmhhcyhjb21wcmVzc2lvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCBpZGVudGlmaWVyOiAke2NvbXByZXNzaW9ufWApO1xuICAgIH1cbiAgICByZXR1cm4gLyoqIEB0eXBlIHtSZWdpc3RyeUVudHJ5fSAqLyAocmVnaXN0cnkuZ2V0KGNvbXByZXNzaW9uKSkucHJlZmVyV29ya2VyO1xufVxuY29uc3QgZGVmYXVsdERlY29kZXJEZWZpbml0aW9ucyA9IFtcbiAgICAvLyBObyBjb21wcmVzc2lvblxuICAgIHtcbiAgICAgICAgY2FzZXM6IFt1bmRlZmluZWQsIDFdLFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL3Jhdy5qcycpLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgICAgIHByZWZlcldvcmtlcjogZmFsc2UsXG4gICAgfSxcbiAgICAvLyBMWldcbiAgICB7XG4gICAgICAgIGNhc2VzOiA1LFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL2x6dy5qcycpLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgfSxcbiAgICAvLyBPbGQtc3R5bGUgSlBFR1xuICAgIHtcbiAgICAgICAgY2FzZXM6IDYsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ29sZCBzdHlsZSBKUEVHIGNvbXByZXNzaW9uIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBKUEVHXG4gICAge1xuICAgICAgICBjYXNlczogNyxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi9qcGVnLmpzJykudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeX0gZmlsZURpcmVjdG9yeVxuICAgICAgICAgKi9cbiAgICAgICAgZGVjb2RlclBhcmFtZXRlckZuOiBhc3luYyAoZmlsZURpcmVjdG9yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5hd2FpdCBkZWZhdWx0RGVjb2RlclBhcmFtZXRlckZuKGZpbGVEaXJlY3RvcnkpLFxuICAgICAgICAgICAgICAgIEpQRUdUYWJsZXM6IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdKUEVHVGFibGVzJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgLy8gRGVmbGF0ZSAvIEFkb2JlIERlZmxhdGVcbiAgICB7XG4gICAgICAgIGNhc2VzOiBbOCwgMzI5NDZdLFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL2RlZmxhdGUuanMnKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgIH0sXG4gICAgLy8gUGFja0JpdHNcbiAgICB7XG4gICAgICAgIGNhc2VzOiAzMjc3MyxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi9wYWNrYml0cy5qcycpLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgfSxcbiAgICAvLyBMRVJDXG4gICAge1xuICAgICAgICBjYXNlczogMzQ4ODcsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vbGVyYy5qcycpXG4gICAgICAgICAgICAudGhlbihhc3luYyAobSkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgbS56c3RkLmluaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IGZpbGVEaXJlY3RvcnlcbiAgICAgICAgICovXG4gICAgICAgIGRlY29kZXJQYXJhbWV0ZXJGbjogYXN5bmMgKGZpbGVEaXJlY3RvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uYXdhaXQgZGVmYXVsdERlY29kZXJQYXJhbWV0ZXJGbihmaWxlRGlyZWN0b3J5KSxcbiAgICAgICAgICAgICAgICBMZXJjUGFyYW1ldGVyczogYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0xlcmNQYXJhbWV0ZXJzJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgLy8genN0ZFxuICAgIHtcbiAgICAgICAgY2FzZXM6IDUwMDAwLFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL3pzdGQuanMnKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKG0pID0+IHtcbiAgICAgICAgICAgIGF3YWl0IG0uenN0ZC5pbml0KCk7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgIH0sXG4gICAgLy8gV2ViUCBJbWFnZXNcbiAgICB7XG4gICAgICAgIGNhc2VzOiA1MDAwMSxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi93ZWJpbWFnZS5qcycpLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IGZpbGVEaXJlY3RvcnlcbiAgICAgICAgICovXG4gICAgICAgIGRlY29kZXJQYXJhbWV0ZXJGbjogYXN5bmMgKGZpbGVEaXJlY3RvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uYXdhaXQgZGVmYXVsdERlY29kZXJQYXJhbWV0ZXJGbihmaWxlRGlyZWN0b3J5KSxcbiAgICAgICAgICAgICAgICBzYW1wbGVzUGVyUGl4ZWw6IE51bWJlcihhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnU2FtcGxlc1BlclBpeGVsJykpIHx8IDQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXJXb3JrZXI6IGZhbHNlLFxuICAgIH0sXG5dO1xuLy8gQWRkIGRlZmF1bHQgZGVjb2RlcnMgdG8gcmVnaXN0cnkgKGVuZC11c2VyIG1heSBvdmVycmlkZSB3aXRoIG90aGVyIGltcGxlbWVudGF0aW9ucylcbmZvciAoY29uc3QgZGVjb2RlckRlZmluaXRpb24gb2YgZGVmYXVsdERlY29kZXJEZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHsgY2FzZXMsIGltcG9ydEZuLCBkZWNvZGVyUGFyYW1ldGVyRm4sIHByZWZlcldvcmtlcjogcHJlZmVyV29ya2VyXyB9ID0gZGVjb2RlckRlZmluaXRpb247XG4gICAgYWRkRGVjb2RlcihjYXNlcywgaW1wb3J0Rm4sIGRlY29kZXJQYXJhbWV0ZXJGbiwgcHJlZmVyV29ya2VyXyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU2xpY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJMaWtlfSBhcnJheUJ1ZmZlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzbGljZU9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiaWdUaWZmXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJyYXlCdWZmZXIsIHNsaWNlT2Zmc2V0LCBsaXR0bGVFbmRpYW4sIGJpZ1RpZmYpIHtcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgICAgICB0aGlzLl9zbGljZU9mZnNldCA9IHNsaWNlT2Zmc2V0O1xuICAgICAgICB0aGlzLl9saXR0bGVFbmRpYW4gPSBsaXR0bGVFbmRpYW47XG4gICAgICAgIHRoaXMuX2JpZ1RpZmYgPSBiaWdUaWZmO1xuICAgIH1cbiAgICBnZXQgc2xpY2VPZmZzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbGljZU9mZnNldDtcbiAgICB9XG4gICAgZ2V0IHNsaWNlVG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2xpY2VPZmZzZXQgKyB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgICBnZXQgbGl0dGxlRW5kaWFuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGl0dGxlRW5kaWFuO1xuICAgIH1cbiAgICBnZXQgYmlnVGlmZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpZ1RpZmY7XG4gICAgfVxuICAgIGdldCBidWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5idWZmZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY292ZXJzKG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlT2Zmc2V0IDw9IG9mZnNldCAmJiB0aGlzLnNsaWNlVG9wID49IG9mZnNldCArIGxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZFVpbnQ4KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkSW50OChvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEludDgob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkVWludDE2KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0LCB0aGlzLl9saXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkSW50MTYob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRJbnQxNihvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCwgdGhpcy5fbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZFVpbnQzMihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCwgdGhpcy5fbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZEludDMyKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0SW50MzIob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQsIHRoaXMuX2xpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRGbG9hdDMyKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCwgdGhpcy5fbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZEZsb2F0NjQob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDY0KG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0LCB0aGlzLl9saXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkVWludDY0KG9mZnNldCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5yZWFkVWludDMyKG9mZnNldCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5yZWFkVWludDMyKG9mZnNldCArIDQpO1xuICAgICAgICBsZXQgY29tYmluZWQ7XG4gICAgICAgIGlmICh0aGlzLl9saXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgIGNvbWJpbmVkID0gbGVmdCArICgoMiAqKiAzMikgKiByaWdodCk7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKGNvbWJpbmVkKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb21iaW5lZH0gZXhjZWVkcyBNQVhfU0FGRV9JTlRFR0VSLiBgXG4gICAgICAgICAgICAgICAgICAgICsgJ1ByZWNpc2lvbiBtYXkgYmUgbG9zdC4gUGxlYXNlIHJlcG9ydCBpZiB5b3UgZ2V0IHRoaXMgbWVzc2FnZSB0byBodHRwczovL2dpdGh1Yi5jb20vZ2VvdGlmZmpzL2dlb3RpZmYuanMvaXNzdWVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29tYmluZWQgPSAoKDIgKiogMzIpICogbGVmdCkgKyByaWdodDtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb21iaW5lZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb21iaW5lZH0gZXhjZWVkcyBNQVhfU0FGRV9JTlRFR0VSLiBgXG4gICAgICAgICAgICAgICAgKyAnUHJlY2lzaW9uIG1heSBiZSBsb3N0LiBQbGVhc2UgcmVwb3J0IGlmIHlvdSBnZXQgdGhpcyBtZXNzYWdlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9nZW90aWZmanMvZ2VvdGlmZi5qcy9pc3N1ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTUzMzgzODQvODA2MDU5MVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRJbnQ2NChvZmZzZXQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgY29uc3QgaXNOZWdhdGl2ZSA9ICh0aGlzLl9kYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAodGhpcy5fbGl0dGxlRW5kaWFuID8gNyA6IDApKSAmIDB4ODApXG4gICAgICAgICAgICA+IDA7XG4gICAgICAgIGxldCBjYXJyeWluZyA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnl0ZSA9IHRoaXMuX2RhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArICh0aGlzLl9saXR0bGVFbmRpYW4gPyBpIDogNyAtIGkpKTtcbiAgICAgICAgICAgIGlmIChpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhcnJ5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChieXRlICE9PSAweDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlID0gfihieXRlIC0gMSkgJiAweGZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnl0ZSA9IH5ieXRlICYgMHhmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSArPSBieXRlICogKDI1NiAqKiBpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSAtdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkT2Zmc2V0KG9mZnNldCkge1xuICAgICAgICBpZiAodGhpcy5fYmlnVGlmZikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZFVpbnQ2NChvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRVaW50MzIob2Zmc2V0KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhc2xpY2UuanMubWFwIiwiaW1wb3J0IHsgZ2V0RmxvYXQxNiB9IGZyb20gJ0BwZXRhbW9yaWtlbi9mbG9hdDE2JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFWaWV3NjQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJMaWtlfSBhcnJheUJ1ZmZlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICB9XG4gICAgZ2V0IGJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmJ1ZmZlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRVaW50NjQob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZ2V0VWludDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmdldFVpbnQzMihvZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBsZXQgY29tYmluZWQ7XG4gICAgICAgIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgIGNvbWJpbmVkID0gbGVmdCArICgoMiAqKiAzMikgKiByaWdodCk7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKGNvbWJpbmVkKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb21iaW5lZH0gZXhjZWVkcyBNQVhfU0FGRV9JTlRFR0VSLiBgXG4gICAgICAgICAgICAgICAgICAgICsgJ1ByZWNpc2lvbiBtYXkgYmUgbG9zdC4gUGxlYXNlIHJlcG9ydCBpZiB5b3UgZ2V0IHRoaXMgbWVzc2FnZSB0byBodHRwczovL2dpdGh1Yi5jb20vZ2VvdGlmZmpzL2dlb3RpZmYuanMvaXNzdWVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29tYmluZWQgPSAoKDIgKiogMzIpICogbGVmdCkgKyByaWdodDtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb21iaW5lZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb21iaW5lZH0gZXhjZWVkcyBNQVhfU0FGRV9JTlRFR0VSLiBgXG4gICAgICAgICAgICAgICAgKyAnUHJlY2lzaW9uIG1heSBiZSBsb3N0LiBQbGVhc2UgcmVwb3J0IGlmIHlvdSBnZXQgdGhpcyBtZXNzYWdlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9nZW90aWZmanMvZ2VvdGlmZi5qcy9pc3N1ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTUzMzgzODQvODA2MDU5MVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW50NjQob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgY29uc3QgaXNOZWdhdGl2ZSA9ICh0aGlzLl9kYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAobGl0dGxlRW5kaWFuID8gNyA6IDApKSAmIDB4ODApID4gMDtcbiAgICAgICAgbGV0IGNhcnJ5aW5nID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBieXRlID0gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgKGxpdHRsZUVuZGlhbiA/IGkgOiA3IC0gaSkpO1xuICAgICAgICAgICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FycnlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGUgIT09IDB4MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGUgPSB+KGJ5dGUgLSAxKSAmIDB4ZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBieXRlID0gfmJ5dGUgJiAweGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlICs9IGJ5dGUgKiAoMjU2ICoqIGkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFVpbnQ4KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW50OChvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEludDgob2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRVaW50MTYob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW50MTYob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEludDE2KG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRVaW50MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW50MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEludDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRGbG9hdDE2KG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiBnZXRGbG9hdDE2KHRoaXMuX2RhdGFWaWV3LCBvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0RmxvYXQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0RmxvYXQ2NChvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YXZpZXc2NC5qcy5tYXAiLCIvKiogQG1vZHVsZSBnZW90aWZmICovXG5pbXBvcnQgR2VvVElGRkltYWdlIGZyb20gJy4vZ2VvdGlmZmltYWdlLmpzJztcbmltcG9ydCBEYXRhVmlldzY0IGZyb20gJy4vZGF0YXZpZXc2NC5qcyc7XG5pbXBvcnQgRGF0YVNsaWNlIGZyb20gJy4vZGF0YXNsaWNlLmpzJztcbmltcG9ydCBQb29sIGZyb20gJy4vcG9vbC5qcyc7XG5pbXBvcnQgeyBtYWtlUmVtb3RlU291cmNlLCBtYWtlQ3VzdG9tU291cmNlIH0gZnJvbSAnLi9zb3VyY2UvcmVtb3RlLmpzJztcbmltcG9ydCB7IG1ha2VCdWZmZXJTb3VyY2UgfSBmcm9tICcuL3NvdXJjZS9hcnJheWJ1ZmZlci5qcyc7XG5pbXBvcnQgeyBtYWtlRmlsZVJlYWRlclNvdXJjZSB9IGZyb20gJy4vc291cmNlL2ZpbGVyZWFkZXIuanMnO1xuaW1wb3J0IHsgbWFrZUZpbGVTb3VyY2UgfSBmcm9tICcuL3NvdXJjZS9maWxlLmpzJztcbmltcG9ydCB7IEJhc2VDbGllbnQsIEJhc2VSZXNwb25zZSB9IGZyb20gJy4vc291cmNlL2NsaWVudC9iYXNlLmpzJztcbmltcG9ydCB7IEltYWdlRmlsZURpcmVjdG9yeVBhcnNlciB9IGZyb20gJy4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzJztcbmltcG9ydCB7IGZpZWxkVHlwZXMsIGdldEZpZWxkVHlwZVNpemUsIHJlZ2lzdGVyVGFnIH0gZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB7IHdyaXRlR2VvdGlmZiB9IGZyb20gJy4vZ2VvdGlmZndyaXRlci5qcyc7XG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgKiBhcyByZ2IgZnJvbSAnLi9yZ2IuanMnO1xuaW1wb3J0IHsgZ2V0RGVjb2RlciwgYWRkRGVjb2RlciB9IGZyb20gJy4vY29tcHJlc3Npb24vaW5kZXguanMnO1xuaW1wb3J0IHsgc2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnaW5nLmpzJztcbi8qKiBAaW1wb3J0IHsgQmFzZVNvdXJjZSB9IGZyb20gJy4vc291cmNlL2Jhc2Vzb3VyY2UuanMnICovXG5leHBvcnQgeyBnbG9iYWxzIH07XG5leHBvcnQgeyByZWdpc3RlclRhZyB9O1xuZXhwb3J0IHsgcmdiIH07XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VEZWNvZGVyIH0gZnJvbSAnLi9jb21wcmVzc2lvbi9iYXNlZGVjb2Rlci5qcyc7XG5leHBvcnQgeyBnZXREZWNvZGVyLCBhZGREZWNvZGVyIH07XG5leHBvcnQgeyBzZXRMb2dnZXIgfTtcbmV4cG9ydCB7IEltYWdlRmlsZURpcmVjdG9yeSB9IGZyb20gJy4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzJztcbi8qKlxuICogQHR5cGVkZWYge1VpbnQ4QXJyYXkgfCBJbnQ4QXJyYXkgfCBVaW50MTZBcnJheSB8IEludDE2QXJyYXkgfCBVaW50MzJBcnJheSB8IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBGbG9hdDY0QXJyYXl9XG4gKiBUeXBlZEFycmF5XG4gKi9cbi8qKlxuICogQHR5cGVkZWYge3sgaGVpZ2h0Om51bWJlciwgd2lkdGg6IG51bWJlciB9fSBEaW1lbnNpb25zXG4gKi9cbi8qKlxuICogVGhlIGF1dG9nZW5lcmF0ZWQgZG9jcyBhcmUgYSBsaXR0bGUgY29uZnVzaW5nIGhlcmUuIFRoZSBlZmZlY3RpdmUgdHlwZSBpczpcbiAqXG4gKiBgVHlwZWRBcnJheSAmIHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXJ9YFxuICogQHR5cGVkZWYge1R5cGVkQXJyYXkgJiBEaW1lbnNpb25zfSBUeXBlZEFycmF5V2l0aERpbWVuc2lvbnNcbiAqL1xuLyoqXG4gKiBUaGUgYXV0b2dlbmVyYXRlZCBkb2NzIGFyZSBhIGxpdHRsZSBjb25mdXNpbmcgaGVyZS4gVGhlIGVmZmVjdGl2ZSB0eXBlIGlzOlxuICpcbiAqIGBUeXBlZEFycmF5W10gJiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyfWBcbiAqIEB0eXBlZGVmIHtUeXBlZEFycmF5W10gJiBEaW1lbnNpb25zfSBUeXBlZEFycmF5QXJyYXlXaXRoRGltZW5zaW9uc1xuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEdlb3RpZmZXcml0ZXJNZXRhZGF0YVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0ltYWdlV2lkdGhdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbSW1hZ2VMZW5ndGhdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpZHRoXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtoZWlnaHRdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbQml0c1BlclNhbXBsZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtDb21wcmVzc2lvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtQbGFuYXJDb25maWd1cmF0aW9uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0V4dHJhU2FtcGxlc11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtQaG90b21ldHJpY0ludGVycHJldGF0aW9uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1NhbXBsZXNQZXJQaXhlbF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtTdHJpcEJ5dGVDb3VudHNdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbTW9kZWxQaXhlbFNjYWxlXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW01vZGVsVHJhbnNmb3JtYXRpb25dXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbTW9kZWxUaWVwb2ludF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtHZW9LZXlEaXJlY3RvcnldXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW0dlb0FzY2lpUGFyYW1zXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW0dlb0RvdWJsZVBhcmFtc11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtPcmllbnRhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtSZXNvbHV0aW9uVW5pdF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtYUG9zaXRpb25dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbWVBvc2l0aW9uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1Jvd3NQZXJTdHJpcF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtTYW1wbGVGb3JtYXRdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbVGlsZVdpZHRoXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1RpbGVMZW5ndGhdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbVGlsZU9mZnNldHNdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbVGlsZUJ5dGVDb3VudHNdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW0dEQUxfTk9EQVRBXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0dlb2dyYXBoaWNUeXBlR2VvS2V5XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1Byb2plY3RlZENTVHlwZUdlb0tleV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbR2VvZ0NpdGF0aW9uR2VvS2V5XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtHVENpdGF0aW9uR2VvS2V5XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0dUTW9kZWxUeXBlR2VvS2V5XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0dUUmFzdGVyVHlwZUdlb0tleV1cbiAqL1xuLyoqXG4gKiAgVGhlIGF1dG9nZW5lcmF0ZWQgZG9jcyBhcmUgYSBsaXR0bGUgY29uZnVzaW5nIGhlcmUuIFRoZSBlZmZlY3RpdmUgdHlwZSBpczpcbiAqXG4gKiBgKFR5cGVkQXJyYXkgfCBUeXBlZEFycmF5W10pICYgeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcn1gXG4gKiBAdHlwZWRlZiB7VHlwZWRBcnJheVdpdGhEaW1lbnNpb25zIHwgVHlwZWRBcnJheUFycmF5V2l0aERpbWVuc2lvbnN9IFJlYWRSYXN0ZXJSZXN1bHRcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWNvZGVyV29ya2VyXG4gKiBVc2UgdGhlIHtAbGluayBQb29sLmJpbmRQYXJhbWV0ZXJzfSBtZXRob2QgdG8gZ2V0IGEgZGVjb2RlciB3b3JrZXIgZm9yXG4gKiBhIHNwZWNpZmljIGNvbXByZXNzaW9uIGFuZCBpdHMgcGFyYW1ldGVycy5cbiAqXG4gKiBAcHJvcGVydHkgeyhidWZmZXI6IEFycmF5QnVmZmVyTGlrZSkgPT4gUHJvbWlzZTxBcnJheUJ1ZmZlckxpa2U+fSBkZWNvZGVcbiAqICAgQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgY29tcHJlc3NlZCBidWZmZXIgYW5kIHJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyB0byB0aGUgZGVjb2RlZCBidWZmZXIuXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhZFJhc3RlcnNPcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IFt3aW5kb3ddIHRoZSBzdWJzZXQgdG8gcmVhZCBkYXRhIGZyb20gaW4gcGl4ZWxzLiBXaG9sZSB3aW5kb3cgaWYgbm90IHNwZWNpZmllZC5cbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gW3NhbXBsZXNdIHRoZSBzZWxlY3Rpb24gb2Ygc2FtcGxlcyB0byByZWFkIGZyb20uIERlZmF1bHQgaXMgYWxsIHNhbXBsZXMuXG4gKiAgICAgQWxsIHNhbXBsZXMgaWYgbm90IHNwZWNpZmllZC5cbiAqIEBwcm9wZXJ0eSB7UG9vbHxudWxsfSBbcG9vbD1udWxsXSBUaGUgb3B0aW9uYWwgZGVjb2RlciBwb29sIHRvIHVzZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lkdGhdIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQuIFdoZW4gdGhlIHdpZHRoIGlzIG5vdCB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZSBhcyB0aGUgaW1hZ2VzLCByZXNhbXBsaW5nIHdpbGwgYmUgcGVyZm9ybWVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtoZWlnaHRdIFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0LiBXaGVuIHRoZSB3aWR0aCBpcyBub3QgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lIGFzIHRoZSBpbWFnZXMsIHJlc2FtcGxpbmcgd2lsbCBiZSBwZXJmb3JtZWQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3Jlc2FtcGxlTWV0aG9kPSduZWFyZXN0J10gVGhlIGRlc2lyZWQgcmVzYW1wbGluZyBtZXRob2QuXG4gKiBAcHJvcGVydHkge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHByb3BlcnR5IHtudW1iZXJ8bnVtYmVyW119IFtmaWxsVmFsdWVdIFRoZSB2YWx1ZSB0byB1c2UgZm9yIHBhcnRzIG9mIHRoZSBpbWFnZVxuICogICAgIG91dHNpZGUgb2YgdGhlIGltYWdlcyBleHRlbnQuIFdoZW4gbXVsdGlwbGUgc2FtcGxlcyBhcmUgcmVxdWVzdGVkIGFuZCBgaW50ZXJsZWF2ZWAgaXNcbiAqICAgICBgZmFsc2VgLCBhbiBhcnJheSBvZiBmaWxsIHZhbHVlcyBjYW4gYmUgcGFzc2VkLlxuICogQHByb3BlcnR5IHtib29sZWFufHRydWV8ZmFsc2V9IFtpbnRlcmxlYXZlXSB3aGV0aGVyIHRoZSBkYXRhIHNoYWxsIGJlIHJlYWRcbiAqICAgICBpbiBvbmUgc2luZ2xlIGFycmF5IG9yIHNlcGFyYXRlIGFycmF5cy5cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFkUkdCT3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBbd2luZG93XSB0aGUgc3Vic2V0IHRvIHJlYWQgZGF0YSBmcm9tIGluIHBpeGVscy4gV2hvbGUgd2luZG93IGlmIG5vdCBzcGVjaWZpZWQuXG4gKiBAcHJvcGVydHkge1Bvb2x8bnVsbH0gW3Bvb2w9bnVsbF0gVGhlIG9wdGlvbmFsIGRlY29kZXIgcG9vbCB0byB1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpZHRoXSBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0LiBXaGVuIHRoZSB3aWR0aCBpcyBubyB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZSBhcyB0aGUgaW1hZ2VzLCByZXNhbXBsaW5nIHdpbGwgYmUgcGVyZm9ybWVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtoZWlnaHRdIFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0LiBXaGVuIHRoZSB3aWR0aCBpcyBubyB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWUgYXMgdGhlIGltYWdlcywgcmVzYW1wbGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcmVzYW1wbGVNZXRob2Q9J25lYXJlc3QnXSBUaGUgZGVzaXJlZCByZXNhbXBsaW5nIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2VuYWJsZUFscGhhPWZhbHNlXSBFbmFibGUgcmVhZGluZyBhbHBoYSBjaGFubmVsIGlmIHByZXNlbnQuXG4gKiBAcHJvcGVydHkge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHByb3BlcnR5IHtib29sZWFufHRydWV8ZmFsc2V9IFtpbnRlcmxlYXZlXSB3aGV0aGVyIHRoZSBkYXRhIHNoYWxsIGJlIHJlYWRcbiAqICAgICBpbiBvbmUgc2luZ2xlIGFycmF5IG9yIHNlcGFyYXRlIGFycmF5cy5cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCbG9ja2VkU291cmNlT3B0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFtibG9ja1NpemVdIEJsb2NrIHNpemUgZm9yIGEgQmxvY2tlZFNvdXJjZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY2FjaGVTaXplPTEwMF0gVGhlIG51bWJlciBvZiBibG9ja3MgdG8gY2FjaGUuXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVtb3RlU291cmNlT3B0aW9uc1xuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBbaGVhZGVycz17fV0gQWRkaXRpb25hbCBoZWFkZXJzIHRvIGFkZCB0byBlYWNoIHJlcXVlc3RcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWF4UmFuZ2VzPTBdIE1heGltdW0gbnVtYmVyIG9mIHJhbmdlcyB0byByZXF1ZXN0IGluIGEgc2luZ2xlIEhUVFAgcmVxdWVzdC4gMCBtZWFucyBubyBtdWx0aS1yYW5nZSByZXF1ZXN0cy5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2FsbG93RnVsbEZpbGU9ZmFsc2VdIFdoZXRoZXIgdG8gYWxsb3cgZnVsbCBmaWxlIHJlc3BvbnNlcyB3aGVuIHJlcXVlc3RpbmcgcmFuZ2VzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtmb3JjZVhIUj1mYWxzZV0gV2hlbiB0aGUgRmV0Y2ggQVBJIHdvdWxkIGJlIHVzZWQsIGZvcmNlIHVzaW5nIFhNTEh0dHBSZXF1ZXN0IGluc3RlYWQuXG4gKi9cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge0RhdGFTbGljZX0gZGF0YVNsaWNlXG4gKiBAcGFyYW0gezB4MDAwMn0gZmllbGRUeXBlXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbi8qKlxuICogQHBhcmFtIHtEYXRhU2xpY2V9IGRhdGFTbGljZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkZpZWxkVHlwZX0gZmllbGRUeXBlXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEByZXR1cm5zIHtUeXBlZEFycmF5fEFycmF5PG51bWJlcj58c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZXMoZGF0YVNsaWNlLCBmaWVsZFR5cGUsIGNvdW50LCBvZmZzZXQpIHtcbiAgICAvKiogQHR5cGUge1R5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxudWxsfSAqL1xuICAgIGxldCB2YWx1ZXMgPSBudWxsO1xuICAgIGxldCByZWFkTWV0aG9kID0gbnVsbDtcbiAgICBjb25zdCBmaWVsZFR5cGVMZW5ndGggPSBnZXRGaWVsZFR5cGVTaXplKGZpZWxkVHlwZSk7XG4gICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkJZVEU6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5BU0NJSTpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlVOREVGSU5FRDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBVaW50OEFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZFVpbnQ4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TQllURTpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBJbnQ4QXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkSW50ODtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0hPUlQ6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgVWludDE2QXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkVWludDE2O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TU0hPUlQ6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgSW50MTZBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRJbnQxNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuTE9ORzpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLklGRDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBVaW50MzJBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRVaW50MzI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNMT05HOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEludDMyQXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkSW50MzI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkxPTkc4OlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuSUZEODpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRVaW50NjQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNMT05HODpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRJbnQ2NDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuUkFUSU9OQUw6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgVWludDMyQXJyYXkoY291bnQgKiAyKTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZFVpbnQzMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU1JBVElPTkFMOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEludDMyQXJyYXkoY291bnQgKiAyKTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEludDMyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5GTE9BVDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkRmxvYXQzMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuRE9VQkxFOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEZsb2F0NjRBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRGbG9hdDY0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHdpbGwgdGhyb3cgYmVsb3dcbiAgICB9XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCB8fCByZWFkTWV0aG9kID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBJbnZhbGlkIGZpZWxkIHR5cGU6ICR7ZmllbGRUeXBlfWApO1xuICAgIH1cbiAgICAvLyBub3JtYWwgZmllbGRzXG4gICAgaWYgKCEoZmllbGRUeXBlID09PSBmaWVsZFR5cGVzLlJBVElPTkFMIHx8IGZpZWxkVHlwZSA9PT0gZmllbGRUeXBlcy5TUkFUSU9OQUwpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0ICsgKGkgKiBmaWVsZFR5cGVMZW5ndGgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHsgLy8gUkFUSU9OQUwgb3IgU1JBVElPTkFMXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMikge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0ICsgKGkgKiBmaWVsZFR5cGVMZW5ndGgpKTtcbiAgICAgICAgICAgIHZhbHVlc1tpICsgMV0gPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQgKyAoKGkgKiBmaWVsZFR5cGVMZW5ndGgpICsgNCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmaWVsZFR5cGUgPT09IGZpZWxkVHlwZXMuQVNDSUkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKS5kZWNvZGUoLyoqIEB0eXBlIHtVaW50OEFycmF5fSAqLyAodmFsdWVzKSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG4vKipcbiAqIEVycm9yIGNsYXNzIGZvciBjYXNlcyB3aGVuIGFuIElGRCBpbmRleCB3YXMgcmVxdWVzdGVkLCB0aGF0IGRvZXMgbm90IGV4aXN0XG4gKiBpbiB0aGUgZmlsZS5cbiAqL1xuY2xhc3MgR2VvVElGRkltYWdlSW5kZXhFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbmRleCkge1xuICAgICAgICBzdXBlcihgTm8gaW1hZ2UgYXQgaW5kZXggJHtpbmRleH1gKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbmNsYXNzIEdlb1RJRkZCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW19pbmRleD0wXSB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHRvIHJldHVybi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGSW1hZ2U+fSB0aGUgaW1hZ2UgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1hZ2UoX2luZGV4ID0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSB0aGUgbnVtYmVyIG9mIGludGVybmFsIHN1YmZpbGUgaW1hZ2VzXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1hZ2VDb3VudCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gUmVhZFJhc3RlcnNXaW5kb3dPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtyZXNYXSBkZXNpcmVkIFkgcmVzb2x1dGlvbiAod29ybGQgdW5pdHMgcGVyIHBpeGVsKVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVzWV0gZGVzaXJlZCBYIHJlc29sdXRpb24gKHdvcmxkIHVuaXRzIHBlciBwaXhlbClcbiAgICAgKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IFtiYm94XSB0aGUgc3Vic2V0IHRvIHJlYWQgZGF0YSBmcm9tIGluXG4gICAgICogICAgIGdlb2dyYXBoaWNhbCBjb29yZGluYXRlcy4gV2hvbGUgaW1hZ2UgaWYgbm90IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiAoZXhwZXJpbWVudGFsKSBSZWFkcyByYXN0ZXIgZGF0YSBmcm9tIHRoZSBiZXN0IGZpdHRpbmcgaW1hZ2UuIFRoaXMgZnVuY3Rpb24gdXNlc1xuICAgICAqIHRoZSBpbWFnZSB3aXRoIHRoZSBsb3dlc3QgcmVzb2x1dGlvbiB0aGF0IGlzIHN0aWxsIGEgaGlnaGVyIHJlc29sdXRpb24gdGhhbiB0aGVcbiAgICAgKiByZXF1ZXN0ZWQgcmVzb2x1dGlvbi5cbiAgICAgKiBXaGVuIHNwZWNpZmllZCwgdGhlIGBiYm94YCBvcHRpb24gaXMgdHJhbnNsYXRlZCB0byB0aGUgYHdpbmRvd2Agb3B0aW9uIGFuZCB0aGVcbiAgICAgKiBgcmVzWGAgYW5kIGByZXNZYCB0byBgd2lkdGhgIGFuZCBgaGVpZ2h0YCByZXNwZWN0aXZlbHkuXG4gICAgICogVGhlbiwgdGhlIFtyZWFkUmFzdGVyc117QGxpbmsgR2VvVElGRkltYWdlI3JlYWRSYXN0ZXJzfSBtZXRob2Qgb2YgdGhlIHNlbGVjdGVkXG4gICAgICogaW1hZ2UgaXMgY2FsbGVkIGFuZCB0aGUgcmVzdWx0IHJldHVybmVkLlxuICAgICAqIEBzZWUgR2VvVElGRkltYWdlLnJlYWRSYXN0ZXJzXG4gICAgICogQHBhcmFtIHtSZWFkUmFzdGVyc09wdGlvbnMgJiBSZWFkUmFzdGVyc1dpbmRvd09wdGlvbnN9IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlYWRSYXN0ZXJSZXN1bHQ+fSB0aGUgZGVjb2RlZCBhcnJheShzKSwgd2l0aCBgaGVpZ2h0YCBhbmQgYHdpZHRoYCwgYXMgYSBwcm9taXNlXG4gICAgICovXG4gICAgYXN5bmMgcmVhZFJhc3RlcnMob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgd2luZG93OiBpbWFnZVdpbmRvdywgd2lkdGgsIGhlaWdodCB9ID0gb3B0aW9ucztcbiAgICAgICAgbGV0IHsgcmVzWCwgcmVzWSwgYmJveCB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3QgZmlyc3RJbWFnZSA9IGF3YWl0IHRoaXMuZ2V0SW1hZ2UoKTtcbiAgICAgICAgbGV0IHVzZWRJbWFnZSA9IGZpcnN0SW1hZ2U7XG4gICAgICAgIGNvbnN0IGltYWdlQ291bnQgPSBhd2FpdCB0aGlzLmdldEltYWdlQ291bnQoKTtcbiAgICAgICAgY29uc3QgaW1nQkJveCA9IGZpcnN0SW1hZ2UuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgaWYgKGltYWdlV2luZG93ICYmIGJib3gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm90aCBcImJib3hcIiBhbmQgXCJ3aW5kb3dcIiBwYXNzZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgd2lkdGgvaGVpZ2h0IGlzIHBhc3NlZCwgdHJhbnNmb3JtIGl0IHRvIHJlc29sdXRpb25cbiAgICAgICAgaWYgKHdpZHRoIHx8IGhlaWdodCkge1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbiBpbWFnZSB3aW5kb3cgKHBpeGVsIGNvb3JkaW5hdGVzKSwgdHJhbnNmb3JtIGl0IHRvIGEgQkJveFxuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIG9yaWdpbi9yZXNvbHV0aW9uIG9mIHRoZSBmaXJzdCBpbWFnZS5cbiAgICAgICAgICAgIGlmIChpbWFnZVdpbmRvdykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtvWCwgb1ldID0gZmlyc3RJbWFnZS5nZXRPcmlnaW4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbclgsIHJZXSA9IGZpcnN0SW1hZ2UuZ2V0UmVzb2x1dGlvbigpO1xuICAgICAgICAgICAgICAgIGJib3ggPSBbXG4gICAgICAgICAgICAgICAgICAgIG9YICsgKGltYWdlV2luZG93WzBdICogclgpLFxuICAgICAgICAgICAgICAgICAgICBvWSArIChpbWFnZVdpbmRvd1sxXSAqIHJZKSxcbiAgICAgICAgICAgICAgICAgICAgb1ggKyAoaW1hZ2VXaW5kb3dbMl0gKiByWCksXG4gICAgICAgICAgICAgICAgICAgIG9ZICsgKGltYWdlV2luZG93WzNdICogclkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgYmJveCAob3IgY2FsY3VsYXRlZCBvbmUpXG4gICAgICAgICAgICBjb25zdCB1c2VkQkJveCA9IGJib3ggfHwgaW1nQkJveDtcbiAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNYKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm90aCB3aWR0aCBhbmQgcmVzWCBwYXNzZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzWCA9ICh1c2VkQkJveFsyXSAtIHVzZWRCQm94WzBdKSAvIHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNZKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm90aCB3aWR0aCBhbmQgcmVzWSBwYXNzZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzWSA9ICh1c2VkQkJveFszXSAtIHVzZWRCQm94WzFdKSAvIGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiByZXNvbHV0aW9uIGlzIHNldCBvciBjYWxjdWxhdGVkLCB0cnkgdG8gZ2V0IHRoZSBpbWFnZSB3aXRoIHRoZSB3b3JzdCBhY2NlcHRhYmxlIHJlc29sdXRpb25cbiAgICAgICAgaWYgKHJlc1ggfHwgcmVzWSkge1xuICAgICAgICAgICAgY29uc3QgYWxsSW1hZ2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgdGhpcy5nZXRJbWFnZShpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJmaWxlVHlwZSA9IGltYWdlLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1N1YmZpbGVUeXBlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3ViZmlsZVR5cGUgPSBpbWFnZS5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdOZXdTdWJmaWxlVHlwZScpO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAwIHx8IHN1YmZpbGVUeXBlID09PSAyIHx8IChuZXdTdWJmaWxlVHlwZSB8fCAwKSAmIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsSW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbEltYWdlcy5zb3J0KChhLCBiKSA9PiBhLmdldFdpZHRoKCkgLSBiLmdldFdpZHRoKCkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGFsbEltYWdlc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdSZXNYID0gKGltZ0JCb3hbMl0gLSBpbWdCQm94WzBdKSAvIGltYWdlLmdldFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nUmVzWSA9IChpbWdCQm94WzNdIC0gaW1nQkJveFsxXSkgLyBpbWFnZS5nZXRIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB1c2VkSW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICBpZiAoKHJlc1ggJiYgcmVzWCA+IGltZ1Jlc1gpIHx8IChyZXNZICYmIHJlc1kgPiBpbWdSZXNZKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHduZCA9IGltYWdlV2luZG93O1xuICAgICAgICBpZiAoYmJveCkge1xuICAgICAgICAgICAgY29uc3QgW29YLCBvWV0gPSBmaXJzdEltYWdlLmdldE9yaWdpbigpO1xuICAgICAgICAgICAgY29uc3QgW2ltYWdlUmVzWCwgaW1hZ2VSZXNZXSA9IHVzZWRJbWFnZS5nZXRSZXNvbHV0aW9uKGZpcnN0SW1hZ2UpO1xuICAgICAgICAgICAgd25kID0gW1xuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKGJib3hbMF0gLSBvWCkgLyBpbWFnZVJlc1gpLFxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKGJib3hbMV0gLSBvWSkgLyBpbWFnZVJlc1kpLFxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKGJib3hbMl0gLSBvWCkgLyBpbWFnZVJlc1gpLFxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKGJib3hbM10gLSBvWSkgLyBpbWFnZVJlc1kpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHduZCA9IFtcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih3bmRbMF0sIHduZFsyXSksXG4gICAgICAgICAgICAgICAgTWF0aC5taW4od25kWzFdLCB3bmRbM10pLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHduZFswXSwgd25kWzJdKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heCh3bmRbMV0sIHduZFszXSksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VkSW1hZ2UucmVhZFJhc3RlcnMoeyAuLi5vcHRpb25zLCB3aW5kb3c6IHduZCB9KTtcbiAgICB9XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEdlb1RJRkZPcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjYWNoZT1mYWxzZV0gd2hldGhlciBvciBub3QgZGVjb2RlZCB0aWxlcyBzaGFsbCBiZSBjYWNoZWQuXG4gKi9cbi8qKlxuICogVGhlIGFic3RyYWN0aW9uIGZvciBhIHdob2xlIEdlb1RJRkYgZmlsZS5cbiAqL1xuY2xhc3MgR2VvVElGRiBleHRlbmRzIEdlb1RJRkZCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0Jhc2VTb3VyY2V9IHNvdXJjZSBUaGUgZGF0YXNvdXJjZSB0byByZWFkIGZyb20uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW4gV2hldGhlciB0aGUgaW1hZ2UgdXNlcyBsaXR0bGUgZW5kaWFuLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYmlnVGlmZiBXaGV0aGVyIHRoZSBpbWFnZSB1c2VzIGJpZ1RJRkYgY29udmVudGlvbnMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZpcnN0SUZET2Zmc2V0IFRoZSBudW1lcmljIGJ5dGUtb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBpbWFnZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byB0aGUgZmlyc3QgSUZELlxuICAgICAqIEBwYXJhbSB7R2VvVElGRk9wdGlvbnN9IFtvcHRpb25zXSBmdXJ0aGVyIG9wdGlvbnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBsaXR0bGVFbmRpYW4sIGJpZ1RpZmYsIGZpcnN0SUZET2Zmc2V0LCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMucGFyc2VyID0gbmV3IEltYWdlRmlsZURpcmVjdG9yeVBhcnNlcihzb3VyY2UsIGxpdHRsZUVuZGlhbiwgYmlnVGlmZiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmxpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhbjtcbiAgICAgICAgdGhpcy5iaWdUaWZmID0gYmlnVGlmZjtcbiAgICAgICAgdGhpcy5maXJzdElGRE9mZnNldCA9IGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICB0aGlzLmNhY2hlID0gb3B0aW9ucy5jYWNoZSB8fCBmYWxzZTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxQcm9taXNlPGltcG9ydCgnLi9pbWFnZWZpbGVkaXJlY3RvcnkuanMnKS5JbWFnZUZpbGVEaXJlY3Rvcnk+IHwgdW5kZWZpbmVkPn0gKi9cbiAgICAgICAgdGhpcy5pZmRSZXF1ZXN0cyA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fG51bGx9ICovXG4gICAgICAgIHRoaXMuZ2hvc3RWYWx1ZXMgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPERhdGFTbGljZT59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0U2xpY2Uob2Zmc2V0LCBzaXplKSB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrU2l6ZSA9IHRoaXMuYmlnVGlmZiA/IDQwNDggOiAxMDI0O1xuICAgICAgICByZXR1cm4gbmV3IERhdGFTbGljZSgoYXdhaXQgdGhpcy5zb3VyY2UuZmV0Y2goW3tcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiB0eXBlb2Ygc2l6ZSAhPT0gJ3VuZGVmaW5lZCcgPyBzaXplIDogZmFsbGJhY2tTaXplLFxuICAgICAgICAgICAgfV0pKVswXSwgb2Zmc2V0LCB0aGlzLmxpdHRsZUVuZGlhbiwgdGhpcy5iaWdUaWZmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxpbXBvcnQoJy4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzJykuSW1hZ2VGaWxlRGlyZWN0b3J5Pn1cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0SUZEKGluZGV4KSB7XG4gICAgICAgIC8vIHNlZSBpZiB3ZSBhbHJlYWR5IGhhdmUgdGhhdCBJRkQgaW5kZXggcmVxdWVzdGVkLlxuICAgICAgICBpZiAodGhpcy5pZmRSZXF1ZXN0c1tpbmRleF0pIHtcbiAgICAgICAgICAgIC8vIGF0dGFjaCB0byBhbiBhbHJlYWR5IHJlcXVlc3RlZCBJRkRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmZFJlcXVlc3RzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBpbmRleCAwXG4gICAgICAgICAgICB0aGlzLmlmZFJlcXVlc3RzW2luZGV4XSA9IHRoaXMucGFyc2VyLnBhcnNlRmlsZURpcmVjdG9yeUF0KHRoaXMuZmlyc3RJRkRPZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmlmZFJlcXVlc3RzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBJRkQgd2FzIG5vdCB5ZXQgbG9hZGVkLCBsb2FkIHRoYXQgb25lIGZpcnN0XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSByZWN1cnNpdmUgY2FsbC5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZmRSZXF1ZXN0c1tpbmRleCAtIDFdID0gdGhpcy5yZXF1ZXN0SUZEKGluZGV4IC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBvbmUgYWxyZWFkeSB3YXMgYW4gaW5kZXggZXJyb3IsIHJldGhyb3dcbiAgICAgICAgICAgICAgICAvLyB3aXRoIHRoZSBjdXJyZW50IGluZGV4XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBHZW9USUZGSW1hZ2VJbmRleEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBHZW9USUZGSW1hZ2VJbmRleEVycm9yKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcmV0aHJvdyBhbnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgSUZEIHdhcyBsb2FkZWQsIHdlIGNhbiBmaW5hbGx5IGZldGNoIHRoZSBvbmUgd2UgYXJlIGludGVyZXN0ZWQgaW4uXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIGFuIElJRkUsIG90aGVyd2lzZSB0aGlzLmlmZFJlcXVlc3RzW2luZGV4XSB3b3VsZCBiZSBkZWxheWVkXG4gICAgICAgIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUHJvbWlzZSA9IHRoaXMuaWZkUmVxdWVzdHNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIGlmICghcHJldmlvdXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmV2aW91cyBJRkQgcmVxdWVzdCBtaXNzaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0lmZCA9IGF3YWl0IHByZXZpb3VzUHJvbWlzZTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c0lmZC5uZXh0SUZEQnl0ZU9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHZW9USUZGSW1hZ2VJbmRleEVycm9yKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5wYXJzZUZpbGVEaXJlY3RvcnlBdChwcmV2aW91c0lmZC5uZXh0SUZEQnl0ZU9mZnNldCk7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlmZFJlcXVlc3RzW2luZGV4XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuLXRoIGludGVybmFsIHN1YmZpbGUgb2YgYW4gaW1hZ2UuIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9MF0gdGhlIGluZGV4IG9mIHRoZSBpbWFnZSB0byByZXR1cm4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRkltYWdlPn0gdGhlIGltYWdlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqL1xuICAgIGFzeW5jIGdldEltYWdlKGluZGV4ID0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IEdlb1RJRkZJbWFnZShhd2FpdCB0aGlzLnJlcXVlc3RJRkQoaW5kZXgpLCB0aGlzLmxpdHRsZUVuZGlhbiwgdGhpcy5jYWNoZSwgdGhpcy5zb3VyY2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3VudCBvZiB0aGUgaW50ZXJuYWwgc3ViZmlsZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSB0aGUgbnVtYmVyIG9mIGludGVybmFsIHN1YmZpbGUgaW1hZ2VzXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1hZ2VDb3VudCgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgLy8gbG9vcCB1bnRpbCB3ZSBydW4gb3V0IG9mIElGRHNcbiAgICAgICAgbGV0IGhhc05leHQgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoaGFzTmV4dCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RJRkQoaW5kZXgpO1xuICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgR2VvVElGRkltYWdlSW5kZXhFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBoYXNOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWVzIG9mIHRoZSBDT0cgZ2hvc3QgYXJlYSBhcyBhIHBhcnNlZCBtYXAuXG4gICAgICogU2VlIGh0dHBzOi8vZ2RhbC5vcmcvZHJpdmVycy9yYXN0ZXIvY29nLmh0bWwjaGVhZGVyLWdob3N0LWFyZWEgZm9yIHJlZmVyZW5jZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+fG51bGw+fSB0aGUgcGFyc2VkIGdob3N0IGFyZWEgb3IgbnVsbCwgaWYgbm8gc3VjaCBhcmVhIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGFzeW5jIGdldEdob3N0VmFsdWVzKCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmJpZ1RpZmYgPyAxNiA6IDg7XG4gICAgICAgIGlmICh0aGlzLmdob3N0VmFsdWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5naG9zdFZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXRlY3Rpb25TdHJpbmcgPSAnR0RBTF9TVFJVQ1RVUkFMX01FVEFEQVRBX1NJWkU9JztcbiAgICAgICAgY29uc3QgaGV1cmlzdGljQXJlYVNpemUgPSBkZXRlY3Rpb25TdHJpbmcubGVuZ3RoICsgMTAwO1xuICAgICAgICBsZXQgc2xpY2UgPSBhd2FpdCB0aGlzLmdldFNsaWNlKG9mZnNldCwgaGV1cmlzdGljQXJlYVNpemUpO1xuICAgICAgICBpZiAoZGV0ZWN0aW9uU3RyaW5nID09PSBnZXRWYWx1ZXMoc2xpY2UsIGZpZWxkVHlwZXMuQVNDSUksIGRldGVjdGlvblN0cmluZy5sZW5ndGgsIG9mZnNldCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IGdldFZhbHVlcyhzbGljZSwgZmllbGRUeXBlcy5BU0NJSSwgaGV1cmlzdGljQXJlYVNpemUsIG9mZnNldCk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmUgPSB2YWx1ZXNTdHJpbmcuc3BsaXQoJ1xcbicpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGFTaXplID0gTnVtYmVyKGZpcnN0TGluZS5zcGxpdCgnPScpWzFdLnNwbGl0KCcgJylbMF0pICsgZmlyc3RMaW5lLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YVNpemUgPiBoZXVyaXN0aWNBcmVhU2l6ZSkge1xuICAgICAgICAgICAgICAgIHNsaWNlID0gYXdhaXQgdGhpcy5nZXRTbGljZShvZmZzZXQsIG1ldGFkYXRhU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmdWxsU3RyaW5nID0gZ2V0VmFsdWVzKHNsaWNlLCBmaWVsZFR5cGVzLkFTQ0lJLCBtZXRhZGF0YVNpemUsIG9mZnNldCk7XG4gICAgICAgICAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgICAgICAgICAgY29uc3QgZ2hvc3RWYWx1ZXMgPSB7fTtcbiAgICAgICAgICAgIGZ1bGxTdHJpbmdcbiAgICAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gbGluZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUuc3BsaXQoJz0nKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2hvc3RWYWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdob3N0VmFsdWVzID0gZ2hvc3RWYWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2hvc3RWYWx1ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlIGEgKEdlbylUSUZGIGZpbGUgZnJvbSB0aGUgZ2l2ZW4gc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCYXNlU291cmNlfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiBkYXRhIHRvIHBhcnNlIGZyb20uXG4gICAgICogQHBhcmFtIHtHZW9USUZGT3B0aW9uc30gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGZyb21Tb3VyY2Uoc291cmNlLCBvcHRpb25zLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyRGF0YSA9IChhd2FpdCBzb3VyY2UuZmV0Y2goW3sgb2Zmc2V0OiAwLCBsZW5ndGg6IDEwMjQgfV0sIHNpZ25hbCkpWzBdO1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldzY0KGhlYWRlckRhdGEpO1xuICAgICAgICBjb25zdCBCT00gPSBkYXRhVmlldy5nZXRVaW50MTYoMCwgZmFsc2UpO1xuICAgICAgICBsZXQgbGl0dGxlRW5kaWFuO1xuICAgICAgICBpZiAoQk9NID09PSAweDQ5NDkpIHtcbiAgICAgICAgICAgIGxpdHRsZUVuZGlhbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQk9NID09PSAweDRENEQpIHtcbiAgICAgICAgICAgIGxpdHRsZUVuZGlhbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBieXRlIG9yZGVyIHZhbHVlLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hZ2ljTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDE2KDIsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIGxldCBiaWdUaWZmO1xuICAgICAgICBpZiAobWFnaWNOdW1iZXIgPT09IDQyKSB7XG4gICAgICAgICAgICBiaWdUaWZmID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWFnaWNOdW1iZXIgPT09IDQzKSB7XG4gICAgICAgICAgICBiaWdUaWZmID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJ5dGVTaXplID0gZGF0YVZpZXcuZ2V0VWludDE2KDQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBpZiAob2Zmc2V0Qnl0ZVNpemUgIT09IDgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIG9mZnNldCBieXRlLXNpemUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1hZ2ljIG51bWJlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaXJzdElGRE9mZnNldCA9IGJpZ1RpZmZcbiAgICAgICAgICAgID8gZGF0YVZpZXcuZ2V0VWludDY0KDgsIGxpdHRsZUVuZGlhbilcbiAgICAgICAgICAgIDogZGF0YVZpZXcuZ2V0VWludDMyKDQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHJldHVybiBuZXcgR2VvVElGRihzb3VyY2UsIGxpdHRsZUVuZGlhbiwgYmlnVGlmZiwgZmlyc3RJRkRPZmZzZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHVuZGVybHlpbmcgZmlsZSBidWZmZXJcbiAgICAgKiBOLkIuIEFmdGVyIHRoZSBHZW9USUZGIGhhcyBiZWVuIGNvbXBsZXRlbHkgcHJvY2Vzc2VkIGl0IG5lZWRzXG4gICAgICogdG8gYmUgY2xvc2VkIGJ1dCBvbmx5IGlmIGl0IGhhcyBiZWVuIGNvbnN0cnVjdGVkIGZyb20gYSBmaWxlLlxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc291cmNlLmNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgR2VvVElGRiB9O1xuZXhwb3J0IGRlZmF1bHQgR2VvVElGRjtcbi8qKlxuICogV3JhcHBlciBmb3IgR2VvVElGRiBmaWxlcyB0aGF0IGhhdmUgZXh0ZXJuYWwgb3ZlcnZpZXdzLlxuICogQGF1Z21lbnRzIEdlb1RJRkZCYXNlXG4gKi9cbmNsYXNzIE11bHRpR2VvVElGRiBleHRlbmRzIEdlb1RJRkZCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgTXVsdGlHZW9USUZGIGZyb20gYSBtYWluIGFuZCBzZXZlcmFsIG92ZXJ2aWV3IGZpbGVzLlxuICAgICAqIEBwYXJhbSB7R2VvVElGRn0gbWFpbkZpbGUgVGhlIG1haW4gR2VvVElGRiBmaWxlLlxuICAgICAqIEBwYXJhbSB7R2VvVElGRltdfSBvdmVydmlld0ZpbGVzIEFuIGFycmF5IG9mIG92ZXJ2aWV3IGZpbGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW5GaWxlLCBvdmVydmlld0ZpbGVzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWFpbkZpbGUgPSBtYWluRmlsZTtcbiAgICAgICAgdGhpcy5vdmVydmlld0ZpbGVzID0gb3ZlcnZpZXdGaWxlcztcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVzID0gW21haW5GaWxlXS5jb25jYXQob3ZlcnZpZXdGaWxlcyk7XG4gICAgICAgIHRoaXMuZmlsZURpcmVjdG9yaWVzUGVyRmlsZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsZURpcmVjdG9yaWVzUGVyRmlsZVBhcnNpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSBudWxsO1xuICAgIH1cbiAgICBhc3luYyBwYXJzZUZpbGVEaXJlY3Rvcmllc1BlckZpbGUoKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW3RoaXMubWFpbkZpbGUucGFyc2VyLnBhcnNlRmlsZURpcmVjdG9yeUF0KHRoaXMubWFpbkZpbGUuZmlyc3RJRkRPZmZzZXQpXVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLm92ZXJ2aWV3RmlsZXMubWFwKChmaWxlKSA9PiBmaWxlLnBhcnNlci5wYXJzZUZpbGVEaXJlY3RvcnlBdChmaWxlLmZpcnN0SUZET2Zmc2V0KSkpO1xuICAgICAgICB0aGlzLmZpbGVEaXJlY3Rvcmllc1BlckZpbGUgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cyk7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3Rvcmllc1BlckZpbGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbi10aCBpbnRlcm5hbCBzdWJmaWxlIG9mIGFuIGltYWdlLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PTBdIHRoZSBpbmRleCBvZiB0aGUgaW1hZ2UgdG8gcmV0dXJuLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkZJbWFnZT59IHRoZSBpbWFnZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJbWFnZShpbmRleCA9IDApIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGlzLmltYWdlQ291bnRzIGlmIG5vdCB5ZXQgZG9uZVxuICAgICAgICBhd2FpdCB0aGlzLmdldEltYWdlQ291bnQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmltYWdlQ291bnRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltYWdlIGNvdW50cyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5wYXJzZUZpbGVEaXJlY3Rvcmllc1BlckZpbGUoKTtcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSAwO1xuICAgICAgICBsZXQgcmVsYXRpdmVJbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZUZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSB0aGlzLmltYWdlRmlsZXNbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgdGhpcy5pbWFnZUNvdW50c1tpXTsgaWkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdmlzaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdlb1RJRkZJbWFnZShhd2FpdCBpbWFnZUZpbGUucmVxdWVzdElGRChyZWxhdGl2ZUluZGV4KSwgaW1hZ2VGaWxlLmxpdHRsZUVuZGlhbiwgaW1hZ2VGaWxlLmNhY2hlLCBpbWFnZUZpbGUuc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlzaXRlZCsrO1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0aXZlSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGltYWdlIGluZGV4Jyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvdW50IG9mIHRoZSBpbnRlcm5hbCBzdWJmaWxlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHRoZSBudW1iZXIgb2YgaW50ZXJuYWwgc3ViZmlsZSBpbWFnZXNcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJbWFnZUNvdW50KCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZUNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW3RoaXMubWFpbkZpbGUuZ2V0SW1hZ2VDb3VudCgpXVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLm92ZXJ2aWV3RmlsZXMubWFwKChmaWxlKSA9PiBmaWxlLmdldEltYWdlQ291bnQoKSkpO1xuICAgICAgICB0aGlzLmltYWdlQ291bnRzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xuICAgICAgICB0aGlzLmltYWdlQ291bnQgPSB0aGlzLmltYWdlQ291bnRzLnJlZHVjZSgoY291bnQsIGlmZHMpID0+IGNvdW50ICsgaWZkcywgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQ291bnQ7XG4gICAgfVxufVxuZXhwb3J0IHsgTXVsdGlHZW9USUZGIH07XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgR2VvVElGRiBmcm9tIGEgcmVtb3RlIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byBhY2Nlc3MgdGhlIGltYWdlIGZyb21cbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9uc30gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBzb3VyY2UuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSB7QGxpbmsgbWFrZVJlbW90ZVNvdXJjZX0gZm9yIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkY+fSBUaGUgcmVzdWx0aW5nIEdlb1RJRkYgZmlsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZyb21VcmwodXJsLCBvcHRpb25zID0ge30sIHNpZ25hbCkge1xuICAgIHJldHVybiBHZW9USUZGLmZyb21Tb3VyY2UobWFrZVJlbW90ZVNvdXJjZSh1cmwsIG9wdGlvbnMpLCB1bmRlZmluZWQsIHNpZ25hbCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgR2VvVElGRiBmcm9tIGEgY3VzdG9tIHtAbGluayBCYXNlQ2xpZW50fS5cbiAqIEBwYXJhbSB7QmFzZUNsaWVudH0gY2xpZW50IFRoZSBjbGllbnQuXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnN9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc291cmNlLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBTZWUge0BsaW5rIG1ha2VSZW1vdGVTb3VyY2V9IGZvciBkZXRhaWxzLlxuICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGPn0gVGhlIHJlc3VsdGluZyBHZW9USUZGIGZpbGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmcm9tQ3VzdG9tQ2xpZW50KGNsaWVudCwgb3B0aW9ucyA9IHt9LCBzaWduYWwpIHtcbiAgICByZXR1cm4gR2VvVElGRi5mcm9tU291cmNlKG1ha2VDdXN0b21Tb3VyY2UoY2xpZW50LCBvcHRpb25zKSwgdW5kZWZpbmVkLCBzaWduYWwpO1xufVxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBuZXcgR2VvVElGRiBmcm9tIGFuXG4gKiBbQXJyYXlCdWZmZXJde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5QnVmZmVyfS5cbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBkYXRhIHRvIHJlYWQgdGhlIGZpbGUgZnJvbS5cbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRj59IFRoZSByZXN1bHRpbmcgR2VvVElGRiBmaWxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyKGFycmF5QnVmZmVyLCBzaWduYWwpIHtcbiAgICByZXR1cm4gR2VvVElGRi5mcm9tU291cmNlKG1ha2VCdWZmZXJTb3VyY2UoYXJyYXlCdWZmZXIpLCB1bmRlZmluZWQsIHNpZ25hbCk7XG59XG4vKipcbiAqIENvbnN0cnVjdCBhIEdlb1RJRkYgZnJvbSBhIGxvY2FsIGZpbGUgcGF0aC4gVGhpcyB1c2VzIHRoZSBub2RlXG4gKiBbZmlsZXN5c3RlbSBBUElde0BsaW5rIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZnMuaHRtbH0gYW5kIGlzXG4gKiBub3QgYXZhaWxhYmxlIG9uIGJyb3dzZXJzLlxuICpcbiAqIE4uQi4gQWZ0ZXIgdGhlIEdlb1RJRkYgaGFzIGJlZW4gY29tcGxldGVseSBwcm9jZXNzZWQgaXQgbmVlZHNcbiAqIHRvIGJlIGNsb3NlZCBidXQgb25seSBpZiBpdCBoYXMgYmVlbiBjb25zdHJ1Y3RlZCBmcm9tIGEgZmlsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBmaWxlIHBhdGggdG8gcmVhZCBmcm9tLlxuICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGPn0gVGhlIHJlc3VsdGluZyBHZW9USUZGIGZpbGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmcm9tRmlsZShwYXRoLCBzaWduYWwpIHtcbiAgICByZXR1cm4gR2VvVElGRi5mcm9tU291cmNlKG1ha2VGaWxlU291cmNlKHBhdGgpLCB1bmRlZmluZWQsIHNpZ25hbCk7XG59XG4vKipcbiAqIENvbnN0cnVjdCBhIEdlb1RJRkYgZnJvbSBhbiBIVE1MXG4gKiBbQmxvYl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Jsb2J9IG9yXG4gKiBbRmlsZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGV9XG4gKiBvYmplY3QuXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gYmxvYiBUaGUgQmxvYiBvciBGaWxlIG9iamVjdCB0byByZWFkIGZyb20uXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkY+fSBUaGUgcmVzdWx0aW5nIEdlb1RJRkYgZmlsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZyb21CbG9iKGJsb2IsIHNpZ25hbCkge1xuICAgIHJldHVybiBHZW9USUZGLmZyb21Tb3VyY2UobWFrZUZpbGVSZWFkZXJTb3VyY2UoYmxvYiksIHVuZGVmaW5lZCwgc2lnbmFsKTtcbn1cbi8qKlxuICogQ29uc3RydWN0IGEgTXVsdGlHZW9USUZGIGZyb20gdGhlIGdpdmVuIFVSTHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFpblVybCBUaGUgVVJMIGZvciB0aGUgbWFpbiBmaWxlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gb3ZlcnZpZXdVcmxzIEFuIGFycmF5IG9mIFVSTHMgZm9yIHRoZSBvdmVydmlldyBpbWFnZXMuXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnN9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc291cmNlLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBTZWUgW21ha2VSZW1vdGVTb3VyY2Vde0BsaW5rIG1vZHVsZTpzb3VyY2UubWFrZVJlbW90ZVNvdXJjZX1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPE11bHRpR2VvVElGRj59IFRoZSByZXN1bHRpbmcgTXVsdGlHZW9USUZGIGZpbGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmcm9tVXJscyhtYWluVXJsLCBvdmVydmlld1VybHMgPSBbXSwgb3B0aW9ucyA9IHt9LCBzaWduYWwpIHtcbiAgICBjb25zdCBtYWluRmlsZSA9IGF3YWl0IEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlUmVtb3RlU291cmNlKG1haW5VcmwsIG9wdGlvbnMpLCB1bmRlZmluZWQsIHNpZ25hbCk7XG4gICAgY29uc3Qgb3ZlcnZpZXdGaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKG92ZXJ2aWV3VXJscy5tYXAoKHVybCkgPT4gR2VvVElGRi5mcm9tU291cmNlKG1ha2VSZW1vdGVTb3VyY2UodXJsLCBvcHRpb25zKSwgdW5kZWZpbmVkLCBzaWduYWwpKSk7XG4gICAgcmV0dXJuIG5ldyBNdWx0aUdlb1RJRkYobWFpbkZpbGUsIG92ZXJ2aWV3RmlsZXMpO1xufVxuLyoqXG4gKiBNYWluIGNyZWF0aW5nIGZ1bmN0aW9uIGZvciBHZW9USUZGIGZpbGVzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fEFycmF5PEFycmF5PEFycmF5PG51bWJlcj4+PnxUeXBlZEFycmF5fSB2YWx1ZXMgVGhlIHBpeGVsIHZhbHVlcyB0byB3cml0ZS5cbiAqIENhbiBiZSBhIGZsYXQgYXJyYXkgb2YgYWxsIHBpeGVscyBvciBhIDMtZGltZW5zaW9uYWwgYXJyYXkgb2Ygc2hhcGUgYFtiYW5kXVtyb3ddW2NvbHVtbl1gLlxuICogQHBhcmFtIHtHZW90aWZmV3JpdGVyTWV0YWRhdGF9IG1ldGFkYXRhXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUFycmF5QnVmZmVyKHZhbHVlcywgbWV0YWRhdGEpIHtcbiAgICByZXR1cm4gd3JpdGVHZW90aWZmKHZhbHVlcywgbWV0YWRhdGEpO1xufVxuZXhwb3J0IHsgUG9vbCB9O1xuZXhwb3J0IHsgR2VvVElGRkltYWdlIH07XG5leHBvcnQgeyBCYXNlQ2xpZW50LCBCYXNlUmVzcG9uc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlb3RpZmYuanMubWFwIiwiLyoqIEBtb2R1bGUgZ2VvdGlmZmltYWdlICovXG5pbXBvcnQgeyBnZXRGbG9hdDE2IH0gZnJvbSAnQHBldGFtb3Jpa2VuL2Zsb2F0MTYnO1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuaW1wb3J0IGdldEF0dHJpYnV0ZSBmcm9tICd4bWwtdXRpbHMvZ2V0LWF0dHJpYnV0ZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBmaW5kVGFnc0J5TmFtZSBmcm9tICd4bWwtdXRpbHMvZmluZC10YWdzLWJ5LW5hbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgeyBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucywgRXh0cmFTYW1wbGVzVmFsdWVzIH0gZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB7IGZyb21XaGl0ZUlzWmVybywgZnJvbUJsYWNrSXNaZXJvLCBmcm9tUGFsZXR0ZSwgZnJvbUNNWUssIGZyb21ZQ2JDciwgZnJvbUNJRUxhYiB9IGZyb20gJy4vcmdiLmpzJztcbmltcG9ydCB7IGdldERlY29kZXIsIGdldERlY29kZXJQYXJhbWV0ZXJzIH0gZnJvbSAnLi9jb21wcmVzc2lvbi9pbmRleC5qcyc7XG5pbXBvcnQgeyByZXNhbXBsZSwgcmVzYW1wbGVJbnRlcmxlYXZlZCB9IGZyb20gJy4vcmVzYW1wbGUuanMnO1xuLyoqIEBpbXBvcnQge0RlY29kZXJXb3JrZXIsIFR5cGVkQXJyYXl9IGZyb20gXCIuL2dlb3RpZmYuanNcIiAqL1xuLyoqIEBpbXBvcnQge1JlYWRSYXN0ZXJSZXN1bHR9IGZyb20gXCIuL2dlb3RpZmYuanNcIiAqL1xuLyoqIEBpbXBvcnQge1JlYWRSYXN0ZXJzT3B0aW9uc30gZnJvbSBcIi4vZ2VvdGlmZi5qc1wiICovXG4vKiogQGltcG9ydCB7UmVhZFJHQk9wdGlvbnN9IGZyb20gXCIuL2dlb3RpZmYuanNcIiAqL1xuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj58VHlwZWRBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gc3VtKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IHMgPSAwO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICAgIHMgKz0gYXJyYXlbaV07XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuLyoqXG4gKiBAcGFyYW0gezF8MnwzfSBmb3JtYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRzUGVyU2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcnxBcnJheUJ1ZmZlckxpa2V9IHNpemVPckRhdGFcbiAqIEByZXR1cm5zIHtUeXBlZEFycmF5fVxuICovXG5mdW5jdGlvbiBhcnJheUZvclR5cGUoZm9ybWF0LCBiaXRzUGVyU2FtcGxlLCBzaXplT3JEYXRhKSB7XG4gICAgbGV0IFR5cGVkQXJyYXlDb25zdHJ1Y3RvcjtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICBjYXNlIDE6IC8vIHVuc2lnbmVkIGludGVnZXIgZGF0YVxuICAgICAgICAgICAgaWYgKGJpdHNQZXJTYW1wbGUgPD0gOCkge1xuICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IFVpbnQ4QXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlIDw9IDE2KSB7XG4gICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gVWludDE2QXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlIDw9IDMyKSB7XG4gICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gVWludDMyQXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyB0d29zIGNvbXBsZW1lbnQgc2lnbmVkIGludGVnZXIgZGF0YVxuICAgICAgICAgICAgaWYgKGJpdHNQZXJTYW1wbGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBJbnQ4QXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlID09PSAxNikge1xuICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEludDE2QXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlID09PSAzMikge1xuICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEludDMyQXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiAvLyBmbG9hdGluZyBwb2ludCBkYXRhXG4gICAgICAgICAgICBzd2l0Y2ggKGJpdHNQZXJTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEZsb2F0MzJBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gRmxvYXQ2NEFycmF5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplT3JEYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlZEFycmF5Q29uc3RydWN0b3Ioc2l6ZU9yRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZU9yRGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVkQXJyYXlDb25zdHJ1Y3RvcihzaXplT3JEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBFcnJvcignVW5zdXBwb3J0ZWQgZGF0YSBmb3JtYXQvYml0c1BlclNhbXBsZScpO1xufVxuLyoqXG4gKiBAcGFyYW0gezF8MnwzfSBmb3JtYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRzUGVyU2FtcGxlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbmVlZHNOb3JtYWxpemF0aW9uKGZvcm1hdCwgYml0c1BlclNhbXBsZSkge1xuICAgIGlmICgoZm9ybWF0ID09PSAxIHx8IGZvcm1hdCA9PT0gMikgJiYgYml0c1BlclNhbXBsZSA8PSAzMiAmJiBiaXRzUGVyU2FtcGxlICUgOCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gMyAmJiAoYml0c1BlclNhbXBsZSA9PT0gMTYgfHwgYml0c1BlclNhbXBsZSA9PT0gMzIgfHwgYml0c1BlclNhbXBsZSA9PT0gNjQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJMaWtlfSBpbkJ1ZmZlclxuICogQHBhcmFtIHsxfDJ8M30gZm9ybWF0XG4gKiBAcGFyYW0gezF8Mn0gcGxhbmFyQ29uZmlndXJhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHNhbXBsZXNQZXJQaXhlbFxuICogQHBhcmFtIHtudW1iZXJ9IGJpdHNQZXJTYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlV2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlSGVpZ2h0XG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJMaWtlfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShpbkJ1ZmZlciwgZm9ybWF0LCBwbGFuYXJDb25maWd1cmF0aW9uLCBzYW1wbGVzUGVyUGl4ZWwsIGJpdHNQZXJTYW1wbGUsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkge1xuICAgIC8vIGNvbnN0IGluQnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoaW5CdWZmZXIpO1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoaW5CdWZmZXIpO1xuICAgIGNvbnN0IG91dFNpemUgPSBwbGFuYXJDb25maWd1cmF0aW9uID09PSAyXG4gICAgICAgID8gdGlsZUhlaWdodCAqIHRpbGVXaWR0aFxuICAgICAgICA6IHRpbGVIZWlnaHQgKiB0aWxlV2lkdGggKiBzYW1wbGVzUGVyUGl4ZWw7XG4gICAgY29uc3Qgc2FtcGxlc1RvVHJhbnNmZXIgPSBwbGFuYXJDb25maWd1cmF0aW9uID09PSAyXG4gICAgICAgID8gMSA6IHNhbXBsZXNQZXJQaXhlbDtcbiAgICBjb25zdCBvdXRBcnJheSA9IGFycmF5Rm9yVHlwZShmb3JtYXQsIGJpdHNQZXJTYW1wbGUsIG91dFNpemUpO1xuICAgIC8vIGxldCBwaXhlbCA9IDA7XG4gICAgY29uc3QgYml0TWFzayA9IHBhcnNlSW50KCcxJy5yZXBlYXQoYml0c1BlclNhbXBsZSksIDIpO1xuICAgIGlmIChmb3JtYXQgPT09IDEpIHsgLy8gdW5zaWduZWQgaW50ZWdlclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vT1NHZW8vZ2RhbC9ibG9iL21hc3Rlci9nZGFsL2ZybXRzL2d0aWZmL2dlb3RpZmYuY3BwI0w3MzM3XG4gICAgICAgIGxldCBwaXhlbEJpdFNraXA7XG4gICAgICAgIC8vIGxldCBzYW1wbGVCaXRPZmZzZXQgPSAwO1xuICAgICAgICBpZiAocGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgcGl4ZWxCaXRTa2lwID0gc2FtcGxlc1BlclBpeGVsICogYml0c1BlclNhbXBsZTtcbiAgICAgICAgICAgIC8vIHNhbXBsZUJpdE9mZnNldCA9IChzYW1wbGVzUGVyUGl4ZWwgLSAxKSAqIGJpdHNQZXJTYW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwaXhlbEJpdFNraXAgPSBiaXRzUGVyU2FtcGxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpdHMgcGVyIGxpbmUgcm91bmRzIHVwIHRvIG5leHQgYnl0ZSBib3VuZGFyeS5cbiAgICAgICAgbGV0IGJpdHNQZXJMaW5lID0gdGlsZVdpZHRoICogcGl4ZWxCaXRTa2lwO1xuICAgICAgICBpZiAoKGJpdHNQZXJMaW5lICYgNykgIT09IDApIHtcbiAgICAgICAgICAgIGJpdHNQZXJMaW5lID0gKGJpdHNQZXJMaW5lICsgNykgJiAofjcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGlsZUhlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lQml0T2Zmc2V0ID0geSAqIGJpdHNQZXJMaW5lO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aWxlV2lkdGg7ICsreCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsQml0T2Zmc2V0ID0gbGluZUJpdE9mZnNldCArICh4ICogc2FtcGxlc1RvVHJhbnNmZXIgKiBiaXRzUGVyU2FtcGxlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXNUb1RyYW5zZmVyOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYml0T2Zmc2V0ID0gcGl4ZWxCaXRPZmZzZXQgKyAoaSAqIGJpdHNQZXJTYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRJbmRleCA9ICgoKHkgKiB0aWxlV2lkdGgpICsgeCkgKiBzYW1wbGVzVG9UcmFuc2ZlcikgKyBpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlT2Zmc2V0ID0gTWF0aC5mbG9vcihiaXRPZmZzZXQgLyA4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5uZXJCaXRPZmZzZXQgPSBiaXRPZmZzZXQgJSA4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJCaXRPZmZzZXQgKyBiaXRzUGVyU2FtcGxlIDw9IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEFycmF5W291dEluZGV4XSA9ICh2aWV3LmdldFVpbnQ4KGJ5dGVPZmZzZXQpID4+ICg4IC0gYml0c1BlclNhbXBsZSkgLSBpbm5lckJpdE9mZnNldCkgJiBiaXRNYXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlubmVyQml0T2Zmc2V0ICsgYml0c1BlclNhbXBsZSA8PSAxNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0QXJyYXlbb3V0SW5kZXhdID0gKHZpZXcuZ2V0VWludDE2KGJ5dGVPZmZzZXQpID4+ICgxNiAtIGJpdHNQZXJTYW1wbGUpIC0gaW5uZXJCaXRPZmZzZXQpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbm5lckJpdE9mZnNldCArIGJpdHNQZXJTYW1wbGUgPD0gMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9ICh2aWV3LmdldFVpbnQxNihieXRlT2Zmc2V0KSA8PCA4KSB8ICh2aWV3LmdldFVpbnQ4KGJ5dGVPZmZzZXQgKyAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRBcnJheVtvdXRJbmRleF0gPSAocmF3ID4+ICgyNCAtIGJpdHNQZXJTYW1wbGUpIC0gaW5uZXJCaXRPZmZzZXQpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEFycmF5W291dEluZGV4XSA9ICh2aWV3LmdldFVpbnQzMihieXRlT2Zmc2V0KSA+PiAoMzIgLSBiaXRzUGVyU2FtcGxlKSAtIGlubmVyQml0T2Zmc2V0KSAmIGJpdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG91dFdvcmQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBiaXQgPSAwOyBiaXQgPCBiaXRzUGVyU2FtcGxlOyArK2JpdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmIChpbkJ5dGVBcnJheVtiaXRPZmZzZXQgPj4gM11cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICYgKDB4ODAgPj4gKGJpdE9mZnNldCAmIDcpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3V0V29yZCB8PSAoMSA8PCAoYml0c1BlclNhbXBsZSAtIDEgLSBiaXQpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgKytiaXRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0QXJyYXlbb3V0SW5kZXhdID0gb3V0V29yZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0QXJyYXlbcGl4ZWxdID0gb3V0V29yZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGl4ZWwgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYml0T2Zmc2V0ID0gYml0T2Zmc2V0ICsgcGl4ZWxCaXRTa2lwIC0gYml0c1BlclNhbXBsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IDMpIHsgLy8gZmxvYXRpbmcgcG9pbnRcbiAgICAgICAgLy8gRmxvYXQxNiBpcyBoYW5kbGVkIGVsc2V3aGVyZVxuICAgICAgICAvLyBub3JtYWxpemUgMTYvMjQgYml0IGZsb2F0cyB0byAzMiBiaXQgZmxvYXRzIGluIHRoZSBhcnJheVxuICAgICAgICAvLyBjb25zb2xlLnRpbWUoKTtcbiAgICAgICAgLy8gaWYgKGJpdHNQZXJTYW1wbGUgPT09IDE2KSB7XG4gICAgICAgIC8vICAgZm9yIChsZXQgYnl0ZSA9IDAsIG91dEluZGV4ID0gMDsgYnl0ZSA8IGluQnVmZmVyLmJ5dGVMZW5ndGg7IGJ5dGUgKz0gMiwgKytvdXRJbmRleCkge1xuICAgICAgICAvLyAgICAgb3V0QXJyYXlbb3V0SW5kZXhdID0gZ2V0RmxvYXQxNih2aWV3LCBieXRlKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS50aW1lRW5kKClcbiAgICB9XG4gICAgcmV0dXJuIG91dEFycmF5LmJ1ZmZlcjtcbn1cbi8qKlxuICogR2VvVElGRiBzdWItZmlsZSBpbWFnZS5cbiAqL1xuY2xhc3MgR2VvVElGRkltYWdlIHtcbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeX0gZmlsZURpcmVjdG9yeSBUaGUgcGFyc2VkIGZpbGUgZGlyZWN0b3J5XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBsaXR0bGVFbmRpYW4gV2hldGhlciB0aGUgZmlsZSBpcyBlbmNvZGVkIGluIGxpdHRsZSBvciBiaWcgZW5kaWFuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjYWNoZSBXaGV0aGVyIG9yIG5vdCBkZWNvZGVkIHRpbGVzIHNoYWxsIGJlIGNhY2hlZFxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL3NvdXJjZS9iYXNlc291cmNlLmpzJykuQmFzZVNvdXJjZX0gc291cmNlIFRoZSBkYXRhc291cmNlIHRvIHJlYWQgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZpbGVEaXJlY3RvcnksIGxpdHRsZUVuZGlhbiwgY2FjaGUsIHNvdXJjZSkge1xuICAgICAgICB0aGlzLmZpbGVEaXJlY3RvcnkgPSBmaWxlRGlyZWN0b3J5O1xuICAgICAgICB0aGlzLmxpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhbjtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxQcm9taXNlPEFycmF5QnVmZmVyTGlrZT4+fG51bGx9ICovXG4gICAgICAgIHRoaXMudGlsZXMgPSBjYWNoZSA/IFtdIDogbnVsbDtcbiAgICAgICAgdGhpcy5pc1RpbGVkID0gIWZpbGVEaXJlY3RvcnkuaGFzVGFnKCdTdHJpcE9mZnNldHMnKTtcbiAgICAgICAgY29uc3QgcGxhbmFyQ29uZmlndXJhdGlvbiA9IGZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1BsYW5hckNvbmZpZ3VyYXRpb24nKSA/PyAxO1xuICAgICAgICBpZiAocGxhbmFyQ29uZmlndXJhdGlvbiAhPT0gMSAmJiBwbGFuYXJDb25maWd1cmF0aW9uICE9PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGxhbmFyIGNvbmZpZ3VyYXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEB0eXBlIHsxIHwgMn0gKi9cbiAgICAgICAgdGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID0gcGxhbmFyQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFzc29jaWF0ZWQgcGFyc2VkIGZpbGUgZGlyZWN0b3J5LlxuICAgICAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IHRoZSBwYXJzZWQgZmlsZSBkaXJlY3RvcnlcbiAgICAgKi9cbiAgICBnZXRGaWxlRGlyZWN0b3J5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3J5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIHBhcnNlZCBnZW8ga2V5cy5cbiAgICAgKiBAcmV0dXJucyB7UGFydGlhbDxSZWNvcmQ8aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5HZW9LZXlOYW1lLCAqPj58bnVsbH0gdGhlIHBhcnNlZCBnZW8ga2V5c1xuICAgICAqL1xuICAgIGdldEdlb0tleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3RvcnkucGFyc2VHZW9LZXlEaXJlY3RvcnkoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGltYWdlLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgaW1hZ2VcbiAgICAgKi9cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnSW1hZ2VXaWR0aCcpIHx8IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2VcbiAgICAgKi9cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0ltYWdlTGVuZ3RoJykgfHwgMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHNhbXBsZXMgcGVyIHBpeGVsLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2FtcGxlcyBwZXIgcGl4ZWxcbiAgICAgKi9cbiAgICBnZXRTYW1wbGVzUGVyUGl4ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1NhbXBsZXNQZXJQaXhlbCcpID8/IDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIGVhY2ggdGlsZS5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgd2lkdGggb2YgZWFjaCB0aWxlXG4gICAgICovXG4gICAgZ2V0VGlsZVdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1RpbGVkID8gKHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnVGlsZVdpZHRoJykgfHwgMCkgOiB0aGlzLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhlaWdodCBvZiBlYWNoIHRpbGUuXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIGhlaWdodCBvZiBlYWNoIHRpbGVcbiAgICAgKi9cbiAgICBnZXRUaWxlSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1RpbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdUaWxlTGVuZ3RoJykgfHwgMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3dzUGVyU3RyaXAgPSB0aGlzLmZpbGVEaXJlY3RvcnkuaGFzVGFnKCdSb3dzUGVyU3RyaXAnKSAmJiB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1Jvd3NQZXJTdHJpcCcpO1xuICAgICAgICBpZiAocm93c1BlclN0cmlwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4ocm93c1BlclN0cmlwLCB0aGlzLmdldEhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICB9XG4gICAgZ2V0QmxvY2tXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGlsZVdpZHRoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRCbG9ja0hlaWdodCh5KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGlsZWQgfHwgKHkgKyAxKSAqIHRoaXMuZ2V0VGlsZUhlaWdodCgpIDw9IHRoaXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbGVIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhlaWdodCgpIC0gKHkgKiB0aGlzLmdldFRpbGVIZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGJ5dGVzIGZvciBlYWNoIHBpeGVsIGFjcm9zcyBhbGwgc2FtcGxlcy4gT25seSBmdWxsXG4gICAgICogYnl0ZXMgYXJlIHN1cHBvcnRlZCwgYW4gZXhjZXB0aW9uIGlzIHRocm93biB3aGVuIHRoaXMgaXMgbm90IHRoZSBjYXNlLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBieXRlcyBwZXIgcGl4ZWxcbiAgICAgKi9cbiAgICBnZXRCeXRlc1BlclBpeGVsKCkge1xuICAgICAgICBsZXQgYnl0ZXMgPSAwO1xuICAgICAgICAvLyB0aGlzIGlzIGEgc2hvcnQgbGlzdCwgc28gd2UgYXNzdW1lIHRoaXMgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQml0c1BlclNhbXBsZScpIHx8IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpdHNQZXJTYW1wbGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGJ5dGVzICs9IHRoaXMuZ2V0U2FtcGxlQnl0ZVNpemUoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2FtcGxlQnl0ZVNpemUoaSkge1xuICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdCaXRzUGVyU2FtcGxlJykgfHwgW107XG4gICAgICAgIGlmIChpID49IGJpdHNQZXJTYW1wbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgU2FtcGxlIGluZGV4ICR7aX0gaXMgb3V0IG9mIHJhbmdlLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoYml0c1BlclNhbXBsZVtpXSAvIDgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2FtcGxlSW5kZXhcbiAgICAgKiBAcmV0dXJucyB7KHRoaXM6IERhdGFWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIGxpdHRsZUVuZGlhbjogYm9vbGVhbikgPT4gbnVtYmVyfVxuICAgICAqL1xuICAgIGdldFJlYWRlckZvclNhbXBsZShzYW1wbGVJbmRleCkge1xuICAgICAgICBjb25zdCBzYW1wbGVGb3JtYXQgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1NhbXBsZUZvcm1hdCcpO1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBzYW1wbGVGb3JtYXRcbiAgICAgICAgICAgID8gc2FtcGxlRm9ybWF0W3NhbXBsZUluZGV4XSA6IDE7XG4gICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSAodGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdCaXRzUGVyU2FtcGxlJykgfHwgW10pW3NhbXBsZUluZGV4XTtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gdW5zaWduZWQgaW50ZWdlciBkYXRhXG4gICAgICAgICAgICAgICAgaWYgKGJpdHNQZXJTYW1wbGUgPD0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldFVpbnQ4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlIDw9IDE2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0VWludDE2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlIDw9IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0VWludDMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogLy8gdHdvcyBjb21wbGVtZW50IHNpZ25lZCBpbnRlZ2VyIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAoYml0c1BlclNhbXBsZSA8PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0SW50ODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA8PSAxNikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldEludDE2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlIDw9IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0SW50MzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYml0c1BlclNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRGbG9hdDE2KHRoaXMsIG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldEZsb2F0MzI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldEZsb2F0NjQ7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IEVycm9yKCdVbnN1cHBvcnRlZCBkYXRhIGZvcm1hdC9iaXRzUGVyU2FtcGxlJyk7XG4gICAgfVxuICAgIGdldFNhbXBsZUZvcm1hdChzYW1wbGVJbmRleCA9IDApIHtcbiAgICAgICAgY29uc3Qgc2FtcGxlRm9ybWF0ID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdTYW1wbGVGb3JtYXQnKTtcbiAgICAgICAgcmV0dXJuIHNhbXBsZUZvcm1hdCA/IHNhbXBsZUZvcm1hdFtzYW1wbGVJbmRleF0gOiAxO1xuICAgIH1cbiAgICBnZXRCaXRzUGVyU2FtcGxlKHNhbXBsZUluZGV4ID0gMCkge1xuICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdCaXRzUGVyU2FtcGxlJyk7XG4gICAgICAgIHJldHVybiBiaXRzUGVyU2FtcGxlID8gYml0c1BlclNhbXBsZVtzYW1wbGVJbmRleF0gOiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2FtcGxlSW5kZXhcbiAgICAgKiBAcGFyYW0ge251bWJlcnxBcnJheUJ1ZmZlckxpa2V9IHNpemVPckRhdGFcbiAgICAgKiBAcmV0dXJucyB7VHlwZWRBcnJheX1cbiAgICAgKi9cbiAgICBnZXRBcnJheUZvclNhbXBsZShzYW1wbGVJbmRleCwgc2l6ZU9yRGF0YSkge1xuICAgICAgICBjb25zdCBmb3JtYXQgPSAvKiogQHR5cGUgezF8MnwzfSAqLyAodGhpcy5nZXRTYW1wbGVGb3JtYXQoc2FtcGxlSW5kZXgpKTtcbiAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IHRoaXMuZ2V0Qml0c1BlclNhbXBsZShzYW1wbGVJbmRleCk7XG4gICAgICAgIHJldHVybiBhcnJheUZvclR5cGUoZm9ybWF0LCBiaXRzUGVyU2FtcGxlLCBzaXplT3JEYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGVjb2RlZCBzdHJpcCBvciB0aWxlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IHRoZSBzdHJpcCBvciB0aWxlIHgtb2Zmc2V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgdGhlIHRpbGUgeS1vZmZzZXQgKDAgZm9yIHN0cmlwcGVkIGltYWdlcylcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2FtcGxlIHRoZSBzYW1wbGUgdG8gZ2V0IGZvciBzZXBhcmF0ZWQgc2FtcGxlc1xuICAgICAqIEBwYXJhbSB7RGVjb2RlcldvcmtlcnxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuQmFzZURlY29kZXJ9IHBvb2xPckRlY29kZXIgdGhlIGRlY29kZXIgb3IgZGVjb2RlciBwb29sXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjx7eDogbnVtYmVyLCB5OiBudW1iZXIsIHNhbXBsZTogbnVtYmVyLCBkYXRhOiBBcnJheUJ1ZmZlckxpa2V9Pn0gdGhlIGRlY29kZWQgc3RyaXAgb3IgdGlsZVxuICAgICAqL1xuICAgIGFzeW5jIGdldFRpbGVPclN0cmlwKHgsIHksIHNhbXBsZSwgcG9vbE9yRGVjb2Rlciwgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IG51bVRpbGVzUGVyUm93ID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIHRoaXMuZ2V0VGlsZVdpZHRoKCkpO1xuICAgICAgICBjb25zdCBudW1UaWxlc1BlckNvbCA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gdGhpcy5nZXRUaWxlSGVpZ2h0KCkpO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGNvbnN0IHsgdGlsZXMgfSA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gKHkgKiBudW1UaWxlc1BlclJvdykgKyB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgaW5kZXggPSAoc2FtcGxlICogbnVtVGlsZXNQZXJSb3cgKiBudW1UaWxlc1BlckNvbCkgKyAoeSAqIG51bVRpbGVzUGVyUm93KSArIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGRldGVybWluZSB0aWxlIG9yIHN0cmlwIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgIGxldCBieXRlQ291bnQ7XG4gICAgICAgIGlmICh0aGlzLmlzVGlsZWQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IE51bWJlcihhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlSW5kZXhlZCgnVGlsZU9mZnNldHMnLCBpbmRleCkpO1xuICAgICAgICAgICAgYnl0ZUNvdW50ID0gTnVtYmVyKGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWVJbmRleGVkKCdUaWxlQnl0ZUNvdW50cycsIGluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBOdW1iZXIoYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZUluZGV4ZWQoJ1N0cmlwT2Zmc2V0cycsIGluZGV4KSk7XG4gICAgICAgICAgICBieXRlQ291bnQgPSBOdW1iZXIoYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZUluZGV4ZWQoJ1N0cmlwQnl0ZUNvdW50cycsIGluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ5dGVDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgblBpeGVscyA9IHRoaXMuZ2V0QmxvY2tIZWlnaHQoeSkgKiB0aGlzLmdldFRpbGVXaWR0aCgpO1xuICAgICAgICAgICAgY29uc3QgYnl0ZXNQZXJQaXhlbCA9ICh0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDIpID8gdGhpcy5nZXRTYW1wbGVCeXRlU2l6ZShzYW1wbGUpIDogdGhpcy5nZXRCeXRlc1BlclBpeGVsKCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEFycmF5QnVmZmVyKG5QaXhlbHMgKiBieXRlc1BlclBpeGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldEFycmF5Rm9yU2FtcGxlKHNhbXBsZSwgZGF0YSk7XG4gICAgICAgICAgICB2aWV3LmZpbGwodGhpcy5nZXRHREFMTm9EYXRhKCkgfHwgMCk7XG4gICAgICAgICAgICByZXR1cm4geyB4LCB5LCBzYW1wbGUsIGRhdGEgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzbGljZSA9IChhd2FpdCB0aGlzLnNvdXJjZS5mZXRjaChbeyBvZmZzZXQsIGxlbmd0aDogYnl0ZUNvdW50IH1dLCBzaWduYWwpKVswXTtcbiAgICAgICAgbGV0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aWxlcyA9PT0gbnVsbCB8fCAhdGlsZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggcmVxdWVzdCBieSBwb3RlbnRpYWxseSBhcHBseWluZyBhcnJheSBub3JtYWxpemF0aW9uXG4gICAgICAgICAgICByZXF1ZXN0ID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHBvb2xPckRlY29kZXIuZGVjb2RlKHNsaWNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVGb3JtYXQgPSAvKiogQHR5cGUgezF8MnwzfSAqLyAodGhpcy5nZXRTYW1wbGVGb3JtYXQoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IHRoaXMuZ2V0Qml0c1BlclNhbXBsZSgpO1xuICAgICAgICAgICAgICAgIGlmIChuZWVkc05vcm1hbGl6YXRpb24oc2FtcGxlRm9ybWF0LCBiaXRzUGVyU2FtcGxlKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gbm9ybWFsaXplQXJyYXkoZGF0YSwgc2FtcGxlRm9ybWF0LCB0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24sIHRoaXMuZ2V0U2FtcGxlc1BlclBpeGVsKCksIGJpdHNQZXJTYW1wbGUsIHRoaXMuZ2V0VGlsZVdpZHRoKCksIHRoaXMuZ2V0QmxvY2tIZWlnaHQoeSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGNhY2hlXG4gICAgICAgICAgICBpZiAodGlsZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpbmRleF0gPSByZXF1ZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZ2V0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICByZXF1ZXN0ID0gdGlsZXNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhY2hlIHRoZSB0aWxlIHJlcXVlc3RcbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgc2FtcGxlLCBkYXRhOiBhd2FpdCByZXF1ZXN0IH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIHJlYWQgZnVuY3Rpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGltYWdlV2luZG93IFRoZSBpbWFnZSB3aW5kb3cgaW4gcGl4ZWwgY29vcmRpbmF0ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNhbXBsZXMgVGhlIHNlbGVjdGVkIHNhbXBsZXMgKDAtYmFzZWQgaW5kaWNlcylcbiAgICAgKiBAcGFyYW0ge1R5cGVkQXJyYXl8VHlwZWRBcnJheVtdfSB2YWx1ZUFycmF5cyBUaGUgYXJyYXkocykgdG8gd3JpdGUgaW50b1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGludGVybGVhdmUgV2hldGhlciBvciBub3QgdG8gd3JpdGUgaW4gYW4gaW50ZXJsZWF2ZWQgbWFubmVyXG4gICAgICogQHBhcmFtIHtEZWNvZGVyV29ya2VyfGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5CYXNlRGVjb2Rlcn0gcG9vbE9yRGVjb2RlciB0aGUgZGVjb2RlciBvciBkZWNvZGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSB0aGUgd2lkdGggb2Ygd2luZG93IHRvIGJlIHJlYWQgaW50b1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSB0aGUgaGVpZ2h0IG9mIHdpbmRvdyB0byBiZSByZWFkIGludG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc2FtcGxlTWV0aG9kXSB0aGUgcmVzYW1wbGluZyBtZXRob2QgdG8gYmUgdXNlZCB3aGVuIGludGVycG9sYXRpbmdcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVhZFJhc3RlclJlc3VsdD59XG4gICAgICovXG4gICAgYXN5bmMgX3JlYWRSYXN0ZXIoaW1hZ2VXaW5kb3csIHNhbXBsZXMsIHZhbHVlQXJyYXlzLCBpbnRlcmxlYXZlLCBwb29sT3JEZWNvZGVyLCB3aWR0aCwgaGVpZ2h0LCByZXNhbXBsZU1ldGhvZCwgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IHRpbGVXaWR0aCA9IHRoaXMuZ2V0VGlsZVdpZHRoKCk7XG4gICAgICAgIGNvbnN0IHRpbGVIZWlnaHQgPSB0aGlzLmdldFRpbGVIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgY29uc3QgaW1hZ2VIZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCBtaW5YVGlsZSA9IE1hdGgubWF4KE1hdGguZmxvb3IoaW1hZ2VXaW5kb3dbMF0gLyB0aWxlV2lkdGgpLCAwKTtcbiAgICAgICAgY29uc3QgbWF4WFRpbGUgPSBNYXRoLm1pbihNYXRoLmNlaWwoaW1hZ2VXaW5kb3dbMl0gLyB0aWxlV2lkdGgpLCBNYXRoLmNlaWwoaW1hZ2VXaWR0aCAvIHRpbGVXaWR0aCkpO1xuICAgICAgICBjb25zdCBtaW5ZVGlsZSA9IE1hdGgubWF4KE1hdGguZmxvb3IoaW1hZ2VXaW5kb3dbMV0gLyB0aWxlSGVpZ2h0KSwgMCk7XG4gICAgICAgIGNvbnN0IG1heFlUaWxlID0gTWF0aC5taW4oTWF0aC5jZWlsKGltYWdlV2luZG93WzNdIC8gdGlsZUhlaWdodCksIE1hdGguY2VpbChpbWFnZUhlaWdodCAvIHRpbGVIZWlnaHQpKTtcbiAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSBpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdO1xuICAgICAgICBsZXQgYnl0ZXNQZXJQaXhlbCA9IHRoaXMuZ2V0Qnl0ZXNQZXJQaXhlbCgpO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovXG4gICAgICAgIGNvbnN0IHNyY1NhbXBsZU9mZnNldHMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTwodGhpczogRGF0YVZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgbGl0dGxlRW5kaWFuOiBib29sZWFuKSA9PiBudW1iZXI+fSAqL1xuICAgICAgICBjb25zdCBzYW1wbGVSZWFkZXJzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSBhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdCaXRzUGVyU2FtcGxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiaXRzUGVyU2FtcGxlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIEJpdHNQZXJTYW1wbGUgdG8gYmUgYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNyY1NhbXBsZU9mZnNldHMucHVzaChzdW0oYml0c1BlclNhbXBsZSwgMCwgc2FtcGxlc1tpXSkgLyA4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNyY1NhbXBsZU9mZnNldHMucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbXBsZVJlYWRlcnMucHVzaCh0aGlzLmdldFJlYWRlckZvclNhbXBsZShzYW1wbGVzW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3QgeyBsaXR0bGVFbmRpYW4gfSA9IHRoaXM7XG4gICAgICAgIGZvciAobGV0IHlUaWxlID0gbWluWVRpbGU7IHlUaWxlIDwgbWF4WVRpbGU7ICsreVRpbGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHhUaWxlID0gbWluWFRpbGU7IHhUaWxlIDwgbWF4WFRpbGU7ICsreFRpbGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V0UHJvbWlzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFByb21pc2UgPSB0aGlzLmdldFRpbGVPclN0cmlwKHhUaWxlLCB5VGlsZSwgMCwgcG9vbE9yRGVjb2Rlciwgc2lnbmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2FtcGxlSW5kZXggPSAwOyBzYW1wbGVJbmRleCA8IHNhbXBsZXMubGVuZ3RoOyArK3NhbXBsZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpID0gc2FtcGxlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZSA9IHNhbXBsZXNbc2FtcGxlSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlc1BlclBpeGVsID0gdGhpcy5nZXRTYW1wbGVCeXRlU2l6ZShzYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJvbWlzZSA9IHRoaXMuZ2V0VGlsZU9yU3RyaXAoeFRpbGUsIHlUaWxlLCBzYW1wbGUsIHBvb2xPckRlY29kZXIsIHNpZ25hbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgdGlsZSBvciBzdHJpcCBkYXRhLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRQcm9taXNlLnRoZW4oKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRpbGUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja0hlaWdodCA9IHRoaXMuZ2V0QmxvY2tIZWlnaHQodGlsZS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGluZSA9IHRpbGUueSAqIHRpbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdENvbCA9IHRpbGUueCAqIHRpbGVXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMaW5lID0gZmlyc3RMaW5lICsgYmxvY2tIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q29sID0gKHRpbGUueCArIDEpICogdGlsZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gc2FtcGxlUmVhZGVyc1tzaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5bWF4ID0gTWF0aC5taW4oYmxvY2tIZWlnaHQsIGJsb2NrSGVpZ2h0IC0gKGxhc3RMaW5lIC0gaW1hZ2VXaW5kb3dbM10pLCBpbWFnZUhlaWdodCAtIGZpcnN0TGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4bWF4ID0gTWF0aC5taW4odGlsZVdpZHRoLCB0aWxlV2lkdGggLSAobGFzdENvbCAtIGltYWdlV2luZG93WzJdKSwgaW1hZ2VXaWR0aCAtIGZpcnN0Q29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSBNYXRoLm1heCgwLCBpbWFnZVdpbmRvd1sxXSAtIGZpcnN0TGluZSk7IHkgPCB5bWF4OyArK3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gTWF0aC5tYXgoMCwgaW1hZ2VXaW5kb3dbMF0gLSBmaXJzdENvbCk7IHggPCB4bWF4OyArK3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxPZmZzZXQgPSAoKHkgKiB0aWxlV2lkdGgpICsgeCkgKiBieXRlc1BlclBpeGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlYWRlci5jYWxsKGRhdGFWaWV3LCBwaXhlbE9mZnNldCArIHNyY1NhbXBsZU9mZnNldHNbc2ldLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2luZG93Q29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybGVhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0Nvb3JkaW5hdGUgPSAoKHkgKyBmaXJzdExpbmUgLSBpbWFnZVdpbmRvd1sxXSkgKiB3aW5kb3dXaWR0aCAqIHNhbXBsZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKCh4ICsgZmlyc3RDb2wgLSBpbWFnZVdpbmRvd1swXSkgKiBzYW1wbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHNpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBcnJheXNbd2luZG93Q29vcmRpbmF0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0Nvb3JkaW5hdGUgPSAoKHkgKyBmaXJzdExpbmUgLSBpbWFnZVdpbmRvd1sxXSkgKiB3aW5kb3dXaWR0aCkgKyB4ICsgZmlyc3RDb2wgLSBpbWFnZVdpbmRvd1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7VHlwZWRBcnJheX0gKi8gKHZhbHVlQXJyYXlzW3NpXSlbd2luZG93Q29vcmRpbmF0ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgaWYgKCh3aWR0aCAmJiAoaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXSkgIT09IHdpZHRoKVxuICAgICAgICAgICAgfHwgKGhlaWdodCAmJiAoaW1hZ2VXaW5kb3dbM10gLSBpbWFnZVdpbmRvd1sxXSkgIT09IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGxldCByZXNhbXBsZWQ7XG4gICAgICAgICAgICBpZiAoaW50ZXJsZWF2ZSkge1xuICAgICAgICAgICAgICAgIHJlc2FtcGxlZCA9IHJlc2FtcGxlSW50ZXJsZWF2ZWQoXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtUeXBlZEFycmF5fSAqLyAodmFsdWVBcnJheXMpLCBpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdLCBpbWFnZVdpbmRvd1szXSAtIGltYWdlV2luZG93WzFdLCBcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi8gKHdpZHRoKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovIChoZWlnaHQpLCBzYW1wbGVzLmxlbmd0aCwgcmVzYW1wbGVNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzYW1wbGVkID0gcmVzYW1wbGUoXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtUeXBlZEFycmF5W119ICovICh2YWx1ZUFycmF5cyksIGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF0sIGltYWdlV2luZG93WzNdIC0gaW1hZ2VXaW5kb3dbMV0sIFxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAod2lkdGgpLCAvKiogQHR5cGUge251bWJlcn0gKi8gKGhlaWdodCksIHJlc2FtcGxlTWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc2FtcGxlZFdpdGhEaW1lbnNpb25zID0gLyoqIEB0eXBlIHtSZWFkUmFzdGVyUmVzdWx0fSAqLyAocmVzYW1wbGVkKTtcbiAgICAgICAgICAgIHJlc2FtcGxlZFdpdGhEaW1lbnNpb25zLndpZHRoID0gd2lkdGggPz8gaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXTtcbiAgICAgICAgICAgIHJlc2FtcGxlZFdpdGhEaW1lbnNpb25zLmhlaWdodCA9IGhlaWdodCA/PyBpbWFnZVdpbmRvd1szXSAtIGltYWdlV2luZG93WzFdO1xuICAgICAgICAgICAgcmV0dXJuIHJlc2FtcGxlZFdpdGhEaW1lbnNpb25zO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlQXJyYXlzV2l0aERpbWVuc2lvbnMgPSAvKiogQHR5cGUge1JlYWRSYXN0ZXJSZXN1bHR9ICovICh2YWx1ZUFycmF5cyk7XG4gICAgICAgIHZhbHVlQXJyYXlzV2l0aERpbWVuc2lvbnMud2lkdGggPSB3aWR0aCB8fCBpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdO1xuICAgICAgICB2YWx1ZUFycmF5c1dpdGhEaW1lbnNpb25zLmhlaWdodCA9IGhlaWdodCB8fCBpbWFnZVdpbmRvd1szXSAtIGltYWdlV2luZG93WzFdO1xuICAgICAgICByZXR1cm4gdmFsdWVBcnJheXNXaXRoRGltZW5zaW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUmFzdGVyc09wdGlvbnMgJiB7aW50ZXJsZWF2ZTogdHJ1ZX19IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5V2l0aERpbWVuc2lvbnM+fSB0aGUgZGVjb2RlZCBhcnJheXMgYXMgYSBwcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUmFzdGVyc09wdGlvbnMgJiB7aW50ZXJsZWF2ZTogZmFsc2V9fSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheUFycmF5V2l0aERpbWVuc2lvbnM+fSB0aGUgZGVjb2RlZCBhcnJheXMgYXMgYSBwcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUmFzdGVyc09wdGlvbnMgJiB7aW50ZXJsZWF2ZTogYm9vbGVhbn19IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlYWRSYXN0ZXJSZXN1bHQ+fSB0aGUgZGVjb2RlZCBhcnJheXMgYXMgYSBwcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUmFzdGVyc09wdGlvbnN9IFtvcHRpb25zPXt9XSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlBcnJheVdpdGhEaW1lbnNpb25zPn0gdGhlIGRlY29kZWQgYXJyYXlzIGFzIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJlYWRzIHJhc3RlciBkYXRhIGZyb20gdGhlIGltYWdlLiBUaGlzIGZ1bmN0aW9uIHJlYWRzIGFsbCBzZWxlY3RlZCBzYW1wbGVzXG4gICAgICogaW50byBzZXBhcmF0ZSBhcnJheXMgb2YgdGhlIGNvcnJlY3QgdHlwZSBmb3IgdGhhdCBzYW1wbGUgb3IgaW50byBhIHNpbmdsZVxuICAgICAqIGNvbWJpbmVkIGFycmF5IHdoZW4gYGludGVybGVhdmVgIGlzIHNldC4gV2hlbiBwcm92aWRlZCwgb25seSBhIHN1YnNldFxuICAgICAqIG9mIHRoZSByYXN0ZXIgaXMgcmVhZCBmb3IgZWFjaCBzYW1wbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWRSYXN0ZXJzT3B0aW9uc30gW29wdGlvbnM9e31dIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWFkUmFzdGVyUmVzdWx0Pn0gdGhlIGRlY29kZWQgYXJyYXlzIGFzIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIGFzeW5jIHJlYWRSYXN0ZXJzKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHdpbmRvdzogd25kLCBzYW1wbGVzID0gW10sIHBvb2wgPSBudWxsLCB3aWR0aCwgaGVpZ2h0LCByZXNhbXBsZU1ldGhvZCwgZmlsbFZhbHVlLCBzaWduYWwsIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCBpbnRlcmxlYXZlID0gJ2ludGVybGVhdmUnIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcmxlYXZlO1xuICAgICAgICBjb25zdCBpbWFnZVdpbmRvdyA9IHduZCB8fCBbMCwgMCwgdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpXTtcbiAgICAgICAgLy8gY2hlY2sgcGFyYW1ldGVyc1xuICAgICAgICBpZiAoaW1hZ2VXaW5kb3dbMF0gPiBpbWFnZVdpbmRvd1syXSB8fCBpbWFnZVdpbmRvd1sxXSA+IGltYWdlV2luZG93WzNdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3Vic2V0cycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGltYWdlV2luZG93V2lkdGggPSBpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdO1xuICAgICAgICBjb25zdCBpbWFnZVdpbmRvd0hlaWdodCA9IGltYWdlV2luZG93WzNdIC0gaW1hZ2VXaW5kb3dbMV07XG4gICAgICAgIGNvbnN0IG51bVBpeGVscyA9IGltYWdlV2luZG93V2lkdGggKiBpbWFnZVdpbmRvd0hlaWdodDtcbiAgICAgICAgY29uc3Qgc2FtcGxlc1BlclBpeGVsID0gdGhpcy5nZXRTYW1wbGVzUGVyUGl4ZWwoKTtcbiAgICAgICAgaWYgKCFzYW1wbGVzIHx8ICFzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzUGVyUGl4ZWw7ICsraSkge1xuICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChzYW1wbGVzW2ldID49IHNhbXBsZXNQZXJQaXhlbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFJhbmdlRXJyb3IoYEludmFsaWQgc2FtcGxlIGluZGV4ICcke3NhbXBsZXNbaV19Jy5gKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7VHlwZWRBcnJheXxUeXBlZEFycmF5W119ICovXG4gICAgICAgIGxldCB2YWx1ZUFycmF5cztcbiAgICAgICAgaWYgKGludGVybGVhdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsZURpcmVjdG9yeSB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZUZvcm1hdCA9IGZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1NhbXBsZUZvcm1hdCcpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gc2FtcGxlRm9ybWF0XG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heC5hcHBseShudWxsLCBBcnJheS5mcm9tKHNhbXBsZUZvcm1hdCkpIDogMTtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgIT09IDEgJiYgZm9ybWF0ICE9PSAyICYmIGZvcm1hdCAhPT0gMykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgc2FtcGxlIGZvcm1hdCBmb3IgaW50ZXJsZWF2ZWQgZGF0YS4gTXVzdCBiZSAxLCAyLCBvciAzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZV8gPSBmaWxlRGlyZWN0b3J5LmdldFZhbHVlKCdCaXRzUGVyU2FtcGxlJyk7XG4gICAgICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gYml0c1BlclNhbXBsZV9cbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4LmFwcGx5KG51bGwsIEFycmF5LmZyb20oYml0c1BlclNhbXBsZV8pKSA6IDg7XG4gICAgICAgICAgICB2YWx1ZUFycmF5cyA9IGFycmF5Rm9yVHlwZShmb3JtYXQsIGJpdHNQZXJTYW1wbGUsIG51bVBpeGVscyAqIHNhbXBsZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChmaWxsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2hlbiByZWFkaW5nIGludGVybGVhdmVkIGRhdGEsIGZpbGxWYWx1ZSBtdXN0IGJlIGEgc2luZ2xlIG51bWJlci4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVBcnJheXMuZmlsbChmaWxsVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVBcnJheXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlQXJyYXkgPSB0aGlzLmdldEFycmF5Rm9yU2FtcGxlKHNhbXBsZXNbaV0sIG51bVBpeGVscyk7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbFZhbHVlKSAmJiBpIDwgZmlsbFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUFycmF5LmZpbGwoZmlsbFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsbFZhbHVlICYmICFBcnJheS5pc0FycmF5KGZpbGxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVBcnJheS5maWxsKGZpbGxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlQXJyYXlzLnB1c2godmFsdWVBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcHJlc3Npb24gPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0NvbXByZXNzaW9uJykgfHwgMTtcbiAgICAgICAgY29uc3QgZGVjb2RlclBhcmFtZXRlcnMgPSBhd2FpdCBnZXREZWNvZGVyUGFyYW1ldGVycyhjb21wcmVzc2lvbiwgdGhpcy5maWxlRGlyZWN0b3J5KTtcbiAgICAgICAgY29uc3QgcG9vbE9yRGVjb2RlciA9IHBvb2xcbiAgICAgICAgICAgID8gcG9vbC5iaW5kUGFyYW1ldGVycyhjb21wcmVzc2lvbiwgZGVjb2RlclBhcmFtZXRlcnMpXG4gICAgICAgICAgICA6IGF3YWl0IGdldERlY29kZXIoY29tcHJlc3Npb24sIGRlY29kZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fcmVhZFJhc3RlcihpbWFnZVdpbmRvdywgc2FtcGxlcywgdmFsdWVBcnJheXMsIGludGVybGVhdmUsIHBvb2xPckRlY29kZXIsIHdpZHRoLCBoZWlnaHQsIHJlc2FtcGxlTWV0aG9kLCBzaWduYWwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSR0JPcHRpb25zICYge2ludGVybGVhdmU6IHRydWV9fSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVdpdGhEaW1lbnNpb25zPn0gdGhlIFJHQiBhcnJheSBhcyBhIFByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSR0JPcHRpb25zICYge2ludGVybGVhdmU6IGZhbHNlfX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlBcnJheVdpdGhEaW1lbnNpb25zPn0gdGhlIFJHQiBhcnJheSBhcyBhIFByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSR0JPcHRpb25zICYge2ludGVybGVhdmU6IGJvb2xlYW59fSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWFkUmFzdGVyUmVzdWx0Pn0gdGhlIFJHQiBhcnJheSBhcyBhIFByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSR0JPcHRpb25zfSBbb3B0aW9ucz17fV0gb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5QXJyYXlXaXRoRGltZW5zaW9ucz59IHRoZSBSR0IgYXJyYXkgYXMgYSBQcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmVhZHMgcmFzdGVyIGRhdGEgZnJvbSB0aGUgaW1hZ2UgYXMgUkdCLlxuICAgICAqIENvbG9yc3BhY2VzIG90aGVyIHRoYW4gUkdCIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gUkdCLCBjb2xvciBtYXBzIGV4cGFuZGVkLlxuICAgICAqIFdoZW4gbm8gb3RoZXIgbWV0aG9kIGlzIGFwcGxpY2FibGUsIHRoZSBmaXJzdCBzYW1wbGUgaXMgdXNlZCB0byBwcm9kdWNlIGFcbiAgICAgKiBncmF5c2NhbGUgaW1hZ2UuXG4gICAgICogV2hlbiBwcm92aWRlZCwgb25seSBhIHN1YnNldCBvZiB0aGUgcmFzdGVyIGlzIHJlYWQgZm9yIGVhY2ggc2FtcGxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFkUkdCT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWFkUmFzdGVyUmVzdWx0Pn0gdGhlIFJHQiBhcnJheSBhcyBhIFByb21pc2VcbiAgICAgKi9cbiAgICBhc3luYyByZWFkUkdCKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHdpbmRvdywgcG9vbCA9IG51bGwsIHdpZHRoLCBoZWlnaHQsIHJlc2FtcGxlTWV0aG9kLCBlbmFibGVBbHBoYSA9IGZhbHNlLCBzaWduYWwgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGludGVybGVhdmUgPSAoJ2ludGVybGVhdmUnIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcmxlYXZlKSA/PyBmYWxzZTtcbiAgICAgICAgY29uc3QgaW1hZ2VXaW5kb3cgPSB3aW5kb3cgfHwgWzAsIDAsIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKV07XG4gICAgICAgIC8vIGNoZWNrIHBhcmFtZXRlcnNcbiAgICAgICAgaWYgKGltYWdlV2luZG93WzBdID4gaW1hZ2VXaW5kb3dbMl0gfHwgaW1hZ2VXaW5kb3dbMV0gPiBpbWFnZVdpbmRvd1szXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN1YnNldHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaSA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbicpO1xuICAgICAgICBpZiAocGkgPT09IHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLlJHQikge1xuICAgICAgICAgICAgbGV0IHMgPSBbMCwgMSwgMl07XG4gICAgICAgICAgICBjb25zdCBleHRyYVNhbXBsZXMgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0V4dHJhU2FtcGxlcycpO1xuICAgICAgICAgICAgaWYgKGV4dHJhU2FtcGxlcyAmJiBleHRyYVNhbXBsZXNbMF0gIT09IEV4dHJhU2FtcGxlc1ZhbHVlcy5VbnNwZWNpZmllZCAmJiBlbmFibGVBbHBoYSkge1xuICAgICAgICAgICAgICAgIHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdCaXRzUGVyU2FtcGxlJykgfHwgW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaXRzUGVyU2FtcGxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkUmFzdGVycyh7XG4gICAgICAgICAgICAgICAgd2luZG93LFxuICAgICAgICAgICAgICAgIGludGVybGVhdmUsXG4gICAgICAgICAgICAgICAgc2FtcGxlczogcyxcbiAgICAgICAgICAgICAgICBwb29sLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICByZXNhbXBsZU1ldGhvZCxcbiAgICAgICAgICAgICAgICBzaWduYWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2FtcGxlcztcbiAgICAgICAgc3dpdGNoIChwaSkge1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5XaGl0ZUlzWmVybzpcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuQmxhY2tJc1plcm86XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLlBhbGV0dGU6XG4gICAgICAgICAgICAgICAgc2FtcGxlcyA9IFswXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuQ01ZSzpcbiAgICAgICAgICAgICAgICBzYW1wbGVzID0gWzAsIDEsIDIsIDNdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5ZQ2JDcjpcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuQ0lFTGFiOlxuICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBbMCwgMSwgMl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvciB1bnN1cHBvcnRlZCBwaG90b21ldHJpYyBpbnRlcnByZXRhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJPcHRpb25zID0ge1xuICAgICAgICAgICAgd2luZG93OiBpbWFnZVdpbmRvdyxcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7dHJ1ZX0gKi9cbiAgICAgICAgICAgIGludGVybGVhdmU6IHRydWUsXG4gICAgICAgICAgICBzYW1wbGVzLFxuICAgICAgICAgICAgcG9vbCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgcmVzYW1wbGVNZXRob2QsXG4gICAgICAgICAgICBzaWduYWwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZmlsZURpcmVjdG9yeSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgcmFzdGVyID0gYXdhaXQgdGhpcy5yZWFkUmFzdGVycyhzdWJPcHRpb25zKTtcbiAgICAgICAgY29uc3QgbWF4ID0gMiAqKiB0aGlzLmdldEJpdHNQZXJTYW1wbGUoMCk7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHBpKSB7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLldoaXRlSXNaZXJvOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBmcm9tV2hpdGVJc1plcm8ocmFzdGVyLCBtYXgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5CbGFja0lzWmVybzpcbiAgICAgICAgICAgICAgICBkYXRhID0gZnJvbUJsYWNrSXNaZXJvKHJhc3RlciwgbWF4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuUGFsZXR0ZTpcbiAgICAgICAgICAgICAgICBkYXRhID0gZnJvbVBhbGV0dGUocmFzdGVyLCAvKiogQHR5cGUge1VpbnQxNkFycmF5fSAqLyAoYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0NvbG9yTWFwJykpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuQ01ZSzpcbiAgICAgICAgICAgICAgICBkYXRhID0gZnJvbUNNWUsocmFzdGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuWUNiQ3I6XG4gICAgICAgICAgICAgICAgZGF0YSA9IGZyb21ZQ2JDcihyYXN0ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5DSUVMYWI6XG4gICAgICAgICAgICAgICAgZGF0YSA9IGZyb21DSUVMYWIocmFzdGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBwaG90b21ldHJpYyBpbnRlcnByZXRhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBub24taW50ZXJsZWF2ZWQgZGF0YSBpcyByZXF1ZXN0ZWQsIHdlIG11c3Qgc3BsaXQgdGhlIGNoYW5uZWxzXG4gICAgICAgIC8vIGludG8gdGhlaXIgcmVzcGVjdGl2ZSBhcnJheXNcbiAgICAgICAgaWYgKCFpbnRlcmxlYXZlKSB7XG4gICAgICAgICAgICBjb25zdCByZWQgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCAvIDMpO1xuICAgICAgICAgICAgY29uc3QgZ3JlZW4gPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCAvIDMpO1xuICAgICAgICAgICAgY29uc3QgYmx1ZSA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoIC8gMyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAzLCArK2opIHtcbiAgICAgICAgICAgICAgICByZWRbal0gPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIGdyZWVuW2pdID0gZGF0YVtpICsgMV07XG4gICAgICAgICAgICAgICAgYmx1ZVtqXSA9IGRhdGFbaSArIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YSA9IFtyZWQsIGdyZWVuLCBibHVlXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhV2l0aERpbWVuc2lvbnMgPSAvKiogQHR5cGUge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5SZWFkUmFzdGVyUmVzdWx0fSAqLyAoZGF0YSk7XG4gICAgICAgIGRhdGFXaXRoRGltZW5zaW9ucy53aWR0aCA9IHJhc3Rlci53aWR0aDtcbiAgICAgICAgZGF0YVdpdGhEaW1lbnNpb25zLmhlaWdodCA9IHJhc3Rlci5oZWlnaHQ7XG4gICAgICAgIHJldHVybiBkYXRhV2l0aERpbWVuc2lvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGllcG9pbnRzLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHtpOiBudW1iZXIsIGo6IG51bWJlciwgazogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyfT4+fSB0aGUgdGllcG9pbnRzXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VGllUG9pbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmlsZURpcmVjdG9yeS5oYXNUYWcoJ01vZGVsVGllcG9pbnQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsVGllUG9pbnQgPSBhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdNb2RlbFRpZXBvaW50Jyk7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxUaWVQb2ludCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgTW9kZWxUaWVwb2ludCB0byBiZSBhbiBhcnJheSBvciB0eXBlZCBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aWVQb2ludHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbFRpZVBvaW50Lmxlbmd0aDsgaSArPSA2KSB7XG4gICAgICAgICAgICB0aWVQb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgICAgaTogbW9kZWxUaWVQb2ludFtpXSxcbiAgICAgICAgICAgICAgICBqOiBtb2RlbFRpZVBvaW50W2kgKyAxXSxcbiAgICAgICAgICAgICAgICBrOiBtb2RlbFRpZVBvaW50W2kgKyAyXSxcbiAgICAgICAgICAgICAgICB4OiBtb2RlbFRpZVBvaW50W2kgKyAzXSxcbiAgICAgICAgICAgICAgICB5OiBtb2RlbFRpZVBvaW50W2kgKyA0XSxcbiAgICAgICAgICAgICAgICB6OiBtb2RlbFRpZVBvaW50W2kgKyA1XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWVQb2ludHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhcnNlZCBHREFMIG1ldGFkYXRhIGl0ZW1zLlxuICAgICAqXG4gICAgICogSWYgc2FtcGxlIGlzIHBhc3NlZCB0byBudWxsLCBkYXRhc2V0LWxldmVsIG1ldGFkYXRhIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICogT3RoZXJ3aXNlIG9ubHkgbWV0YWRhdGEgc3BlY2lmaWMgdG8gdGhlIHByb3ZpZGVkIHNhbXBsZSB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gW3NhbXBsZT1udWxsXSBUaGUgc2FtcGxlIGluZGV4LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+fG51bGw+fSBUaGUgR0RBTCBtZXRhZGF0YSBpdGVtc1xuICAgICAqL1xuICAgIGFzeW5jIGdldEdEQUxNZXRhZGF0YShzYW1wbGUgPSBudWxsKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0ge307XG4gICAgICAgIGlmICghdGhpcy5maWxlRGlyZWN0b3J5Lmhhc1RhZygnR0RBTF9NRVRBREFUQScpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJpbmcgPSBhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdHREFMX01FVEFEQVRBJyk7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8e2lubmVyOiB1bmtub3dufT59ICovXG4gICAgICAgIGxldCBpdGVtcyA9IGZpbmRUYWdzQnlOYW1lKHN0cmluZywgJ0l0ZW0nKTtcbiAgICAgICAgaWYgKHNhbXBsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGdldEF0dHJpYnV0ZShpdGVtLCAnc2FtcGxlJykgPT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gTnVtYmVyKGdldEF0dHJpYnV0ZShpdGVtLCAnc2FtcGxlJykpID09PSBzYW1wbGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIG1ldGFkYXRhW2dldEF0dHJpYnV0ZShpdGVtLCAnbmFtZScpXSA9IGl0ZW0uaW5uZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBHREFMIG5vZGF0YSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRHREFMTm9EYXRhKCkge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmZpbGVEaXJlY3RvcnkuaGFzVGFnKCdHREFMX05PREFUQScpICYmIHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnR0RBTF9OT0RBVEEnKTtcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIoc3RyaW5nLnN1YnN0cmluZygwLCBzdHJpbmcubGVuZ3RoIC0gMSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbWFnZSBvcmlnaW4gYXMgYSBYWVotdmVjdG9yLiBXaGVuIHRoZSBpbWFnZSBoYXMgbm8gYWZmaW5lXG4gICAgICogdHJhbnNmb3JtYXRpb24sIHRoZW4gYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gVGhlIG9yaWdpbiBhcyBhIHZlY3RvclxuICAgICAqL1xuICAgIGdldE9yaWdpbigpIHtcbiAgICAgICAgY29uc3QgdGllUG9pbnRzID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdNb2RlbFRpZXBvaW50Jyk7XG4gICAgICAgIGNvbnN0IG1vZGVsVHJhbnNmb3JtYXRpb24gPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ01vZGVsVHJhbnNmb3JtYXRpb24nKTtcbiAgICAgICAgaWYgKHRpZVBvaW50cyAmJiB0aWVQb2ludHMubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHRpZVBvaW50c1szXSxcbiAgICAgICAgICAgICAgICB0aWVQb2ludHNbNF0sXG4gICAgICAgICAgICAgICAgdGllUG9pbnRzWzVdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZWxUcmFuc2Zvcm1hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBtb2RlbFRyYW5zZm9ybWF0aW9uWzNdLFxuICAgICAgICAgICAgICAgIG1vZGVsVHJhbnNmb3JtYXRpb25bN10sXG4gICAgICAgICAgICAgICAgbW9kZWxUcmFuc2Zvcm1hdGlvblsxMV0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGltYWdlIGRvZXMgbm90IGhhdmUgYW4gYWZmaW5lIHRyYW5zZm9ybWF0aW9uLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbWFnZSByZXNvbHV0aW9uIGFzIGEgWFlaLXZlY3Rvci4gV2hlbiB0aGUgaW1hZ2UgaGFzIG5vIGFmZmluZVxuICAgICAqIHRyYW5zZm9ybWF0aW9uLCB0aGVuIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAgICogQHBhcmFtIHtHZW9USUZGSW1hZ2V8bnVsbH0gW3JlZmVyZW5jZUltYWdlPW51bGxdIEEgcmVmZXJlbmNlIGltYWdlIHRvIGNhbGN1bGF0ZSB0aGUgcmVzb2x1dGlvbiBmcm9tXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiBjYXNlcyB3aGVuIHRoZSBjdXJyZW50IGltYWdlIGRvZXMgbm90IGhhdmUgdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCB0YWdzIG9uIGl0cyBvd24uXG4gICAgICogQHJldHVybnMge0FycmF5PG51bWJlcj59IFRoZSByZXNvbHV0aW9uIGFzIGEgdmVjdG9yXG4gICAgICovXG4gICAgZ2V0UmVzb2x1dGlvbihyZWZlcmVuY2VJbWFnZSA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxQaXhlbFNjYWxlID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdNb2RlbFBpeGVsU2NhbGUnKTtcbiAgICAgICAgY29uc3QgbW9kZWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTW9kZWxUcmFuc2Zvcm1hdGlvbicpO1xuICAgICAgICBpZiAobW9kZWxQaXhlbFNjYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG1vZGVsUGl4ZWxTY2FsZVswXSxcbiAgICAgICAgICAgICAgICAtbW9kZWxQaXhlbFNjYWxlWzFdLFxuICAgICAgICAgICAgICAgIG1vZGVsUGl4ZWxTY2FsZVsyXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGVsVHJhbnNmb3JtYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChtb2RlbFRyYW5zZm9ybWF0aW9uWzFdID09PSAwICYmIG1vZGVsVHJhbnNmb3JtYXRpb25bNF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFRyYW5zZm9ybWF0aW9uWzBdLFxuICAgICAgICAgICAgICAgICAgICAtbW9kZWxUcmFuc2Zvcm1hdGlvbls1XSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxUcmFuc2Zvcm1hdGlvblsxMF0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgTWF0aC5zcXJ0KChtb2RlbFRyYW5zZm9ybWF0aW9uWzBdICogbW9kZWxUcmFuc2Zvcm1hdGlvblswXSlcbiAgICAgICAgICAgICAgICAgICAgKyAobW9kZWxUcmFuc2Zvcm1hdGlvbls0XSAqIG1vZGVsVHJhbnNmb3JtYXRpb25bNF0pKSxcbiAgICAgICAgICAgICAgICAtTWF0aC5zcXJ0KChtb2RlbFRyYW5zZm9ybWF0aW9uWzFdICogbW9kZWxUcmFuc2Zvcm1hdGlvblsxXSlcbiAgICAgICAgICAgICAgICAgICAgKyAobW9kZWxUcmFuc2Zvcm1hdGlvbls1XSAqIG1vZGVsVHJhbnNmb3JtYXRpb25bNV0pKSxcbiAgICAgICAgICAgICAgICBtb2RlbFRyYW5zZm9ybWF0aW9uWzEwXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmZXJlbmNlSW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IFtyZWZSZXNYLCByZWZSZXNZLCByZWZSZXNaXSA9IHJlZmVyZW5jZUltYWdlLmdldFJlc29sdXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgcmVmUmVzWCAqIHJlZmVyZW5jZUltYWdlLmdldFdpZHRoKCkgLyB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgcmVmUmVzWSAqIHJlZmVyZW5jZUltYWdlLmdldEhlaWdodCgpIC8gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICByZWZSZXNaICogcmVmZXJlbmNlSW1hZ2UuZ2V0V2lkdGgoKSAvIHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBhbiBhZmZpbmUgdHJhbnNmb3JtYXRpb24uJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBpeGVscyBvZiB0aGUgaW1hZ2UgZGVwaWN0IGFuIGFyZWEgKG9yIHBvaW50KS5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGUgcGl4ZWxzIGFyZSBhIHBvaW50XG4gICAgICovXG4gICAgcGl4ZWxJc0FyZWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEdlb0tleXMoKT8uR1RSYXN0ZXJUeXBlR2VvS2V5ID09PSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbWFnZSBib3VuZGluZyBib3ggYXMgYW4gYXJyYXkgb2YgNCB2YWx1ZXM6IG1pbi14LCBtaW4teSxcbiAgICAgKiBtYXgteCBhbmQgbWF4LXkuIFdoZW4gdGhlIGltYWdlIGhhcyBubyBhZmZpbmUgdHJhbnNmb3JtYXRpb24sIHRoZW4gYW5cbiAgICAgKiBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RpbGVncmlkPWZhbHNlXSBJZiB0cnVlIHJldHVybiBleHRlbnQgZm9yIGEgdGlsZWdyaWRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aG91dCBhZGp1c3RtZW50IGZvciBNb2RlbFRyYW5zZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxudW1iZXI+fSBUaGUgYm91bmRpbmcgYm94XG4gICAgICovXG4gICAgZ2V0Qm91bmRpbmdCb3godGlsZWdyaWQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICAgICAgY29uc3QgbW9kZWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTW9kZWxUcmFuc2Zvcm1hdGlvbicpO1xuICAgICAgICBpZiAobW9kZWxUcmFuc2Zvcm1hdGlvbiAmJiAhdGlsZWdyaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IFthLCBiLCAsIGQsIGUsIGYsICwgaF0gPSBtb2RlbFRyYW5zZm9ybWF0aW9uO1xuICAgICAgICAgICAgY29uc3QgY29ybmVycyA9IFtcbiAgICAgICAgICAgICAgICBbMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIGhlaWdodF0sXG4gICAgICAgICAgICAgICAgW3dpZHRoLCAwXSxcbiAgICAgICAgICAgICAgICBbd2lkdGgsIGhlaWdodF0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkID0gY29ybmVycy5tYXAoKFtJLCBKXSkgPT4gW1xuICAgICAgICAgICAgICAgIGQgKyAoYSAqIEkpICsgKGIgKiBKKSxcbiAgICAgICAgICAgICAgICBoICsgKGUgKiBJKSArIChmICogSiksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IHhzID0gcHJvamVjdGVkLm1hcCgocHQpID0+IHB0WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHlzID0gcHJvamVjdGVkLm1hcCgocHQpID0+IHB0WzFdKTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oLi4ueHMpLFxuICAgICAgICAgICAgICAgIE1hdGgubWluKC4uLnlzKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heCguLi54cyksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoLi4ueXMpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IHRoaXMuZ2V0T3JpZ2luKCk7XG4gICAgICAgICAgICBjb25zdCByZXNvbHV0aW9uID0gdGhpcy5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCB4MSA9IG9yaWdpblswXTtcbiAgICAgICAgICAgIGNvbnN0IHkxID0gb3JpZ2luWzFdO1xuICAgICAgICAgICAgY29uc3QgeDIgPSB4MSArIChyZXNvbHV0aW9uWzBdICogd2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgeTIgPSB5MSArIChyZXNvbHV0aW9uWzFdICogaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oeDEsIHgyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih5MSwgeTIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHgxLCB4MiksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoeTEsIHkyKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBHZW9USUZGSW1hZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW90aWZmaW1hZ2UuanMubWFwIiwiLypcbiAgU29tZSBwYXJ0cyBvZiB0aGlzIGZpbGUgYXJlIGJhc2VkIG9uIFVUSUYuanMsXG4gIHdoaWNoIHdhcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gIFlvdSBjYW4gdmlldyB0aGF0IGhlcmU6XG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b3BlYS9VVElGLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5pbXBvcnQgeyB0YWdzLCBmaWVsZFRhZ1R5cGVzLCBmaWVsZFR5cGVzLCBnZW9LZXlOYW1lcyB9IGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgeyBhc3NpZ24sIGVuZHNXaXRoLCBmb3JFYWNoLCBpbnZlcnQsIHRpbWVzLCB0eXBlTWFwLCBpc1R5cGVkVWludEFycmF5LCBpc1R5cGVkSW50QXJyYXksIGlzVHlwZWRGbG9hdEFycmF5IH0gZnJvbSAnLi91dGlscy5qcyc7XG4vKiogQGltcG9ydCB7R2VvdGlmZldyaXRlck1ldGFkYXRhfSBmcm9tICcuL2dlb3RpZmYuanMnICovXG4vKiogQHR5cGVkZWYgeyhidWZmOiBVaW50OEFycmF5LCBwOiBudW1iZXIpID0+IG51bWJlcn0gUmVhZCAqL1xuY29uc3QgdGFnTmFtZTJDb2RlID0gdGFncztcbmNvbnN0IGdlb0tleU5hbWUyQ29kZSA9IGludmVydChnZW9LZXlOYW1lcyk7XG4vKiogQHR5cGUge1JlY29yZDxudW1iZXJ8c3RyaW5nLCBrZXlvZiBmaWVsZFRhZ1R5cGVzPn0gKi9cbmNvbnN0IG5hbWUyY29kZSA9IHt9O1xuYXNzaWduKG5hbWUyY29kZSwgdGFnTmFtZTJDb2RlKTtcbmFzc2lnbihuYW1lMmNvZGUsIGdlb0tleU5hbWUyQ29kZSk7XG5jb25zdCB0eXBlTmFtZTJieXRlID0gZmllbGRUeXBlcztcbi8vIGNvbmZpZyB2YXJpYWJsZXNcbmNvbnN0IG51bUJ5dGVzSW5JZmQgPSAxMDAwO1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCaW5CRVxuICogQHByb3BlcnR5IHsoZGF0YTogVWludDhBcnJheSwgbzogbnVtYmVyKSA9PiBudW1iZXJ9IG5leHRaZXJvXG4gKiBAcHJvcGVydHkge1JlYWR9IHJlYWRVc2hvcnRcbiAqIEBwcm9wZXJ0eSB7UmVhZH0gcmVhZFNob3J0XG4gKiBAcHJvcGVydHkge1JlYWR9IHJlYWRJbnRcbiAqIEBwcm9wZXJ0eSB7UmVhZH0gcmVhZFVpbnRcbiAqIEBwcm9wZXJ0eSB7KGJ1ZmY6IFVpbnQ4QXJyYXksIHA6IG51bWJlciwgbDogQXJyYXk8bnVtYmVyPikgPT4gc3RyaW5nfSByZWFkQVNDSUlcbiAqIEBwcm9wZXJ0eSB7UmVhZH0gcmVhZEZsb2F0XG4gKiBAcHJvcGVydHkge1JlYWR9IHJlYWREb3VibGVcbiAqIEBwcm9wZXJ0eSB7KGJ1ZmY6IFVpbnQ4QXJyYXksIHA6IG51bWJlciwgbjogbnVtYmVyKSA9PiB2b2lkfSB3cml0ZVVzaG9ydFxuICogQHByb3BlcnR5IHsoYnVmZjogVWludDhBcnJheSwgcDogbnVtYmVyLCBuOiBudW1iZXIpID0+IHZvaWR9IHdyaXRlVWludFxuICogQHByb3BlcnR5IHsoYnVmZjogVWludDhBcnJheSwgcDogbnVtYmVyLCBzOiBzdHJpbmcpID0+IHZvaWR9IHdyaXRlQVNDSUlcbiAqIEBwcm9wZXJ0eSB7VWludDhBcnJheX0gdWk4XG4gKiBAcHJvcGVydHkge0Zsb2F0NjRBcnJheX0gZmw2NFxuICogQHByb3BlcnR5IHtGbG9hdDMyQXJyYXl9IGZsMzJcbiAqIEBwcm9wZXJ0eSB7VWludDMyQXJyYXl9IHVpMzJcbiAqIEBwcm9wZXJ0eSB7SW50MzJBcnJheX0gaTMyXG4gKiBAcHJvcGVydHkge0ludDE2QXJyYXl9IGkxNlxuICogQHByb3BlcnR5IHsoYnVmZjogVWludDhBcnJheSwgcDogbnVtYmVyLCBuOiBudW1iZXIpID0+IHZvaWR9IHdyaXRlRG91YmxlXG4gKi9cbmNvbnN0IHVpOCA9IG5ldyBVaW50OEFycmF5KDgpO1xuLyoqIEB0eXBlIHtCaW5CRX0gKi9cbmNvbnN0IF9iaW5CRSA9IHtcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgbmV4dFplcm86IChkYXRhLCBvKSA9PiB7XG4gICAgICAgIGxldCBvaW5jciA9IG87XG4gICAgICAgIHdoaWxlIChkYXRhW29pbmNyXSAhPT0gMCkge1xuICAgICAgICAgICAgb2luY3IrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2luY3I7XG4gICAgfSxcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgcmVhZFVzaG9ydDogKGJ1ZmYsIHApID0+IHtcbiAgICAgICAgcmV0dXJuIChidWZmW3BdIDw8IDgpIHwgYnVmZltwICsgMV07XG4gICAgfSxcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgcmVhZFNob3J0OiAoYnVmZiwgcCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gX2JpbkJFLnVpODtcbiAgICAgICAgYVswXSA9IGJ1ZmZbcCArIDFdO1xuICAgICAgICBhWzFdID0gYnVmZltwICsgMF07XG4gICAgICAgIHJldHVybiBfYmluQkUuaTE2WzBdO1xuICAgIH0sXG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIHJlYWRJbnQ6IChidWZmLCBwKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBfYmluQkUudWk4O1xuICAgICAgICBhWzBdID0gYnVmZltwICsgM107XG4gICAgICAgIGFbMV0gPSBidWZmW3AgKyAyXTtcbiAgICAgICAgYVsyXSA9IGJ1ZmZbcCArIDFdO1xuICAgICAgICBhWzNdID0gYnVmZltwICsgMF07XG4gICAgICAgIHJldHVybiBfYmluQkUuaTMyWzBdO1xuICAgIH0sXG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIHJlYWRVaW50OiAoYnVmZiwgcCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gX2JpbkJFLnVpODtcbiAgICAgICAgYVswXSA9IGJ1ZmZbcCArIDNdO1xuICAgICAgICBhWzFdID0gYnVmZltwICsgMl07XG4gICAgICAgIGFbMl0gPSBidWZmW3AgKyAxXTtcbiAgICAgICAgYVszXSA9IGJ1ZmZbcCArIDBdO1xuICAgICAgICByZXR1cm4gX2JpbkJFLnVpMzJbMF07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcFxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcmVhZEFTQ0lJOiAoYnVmZiwgcCwgbCkgPT4ge1xuICAgICAgICByZXR1cm4gbC5tYXAoKGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmZltwICsgaV0pKS5qb2luKCcnKTtcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICByZWFkRmxvYXQ6IChidWZmLCBwKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBfYmluQkUudWk4O1xuICAgICAgICB0aW1lcyg0LCAoaSkgPT4ge1xuICAgICAgICAgICAgYVtpXSA9IGJ1ZmZbcCArIDMgLSBpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfYmluQkUuZmwzMlswXTtcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICByZWFkRG91YmxlOiAoYnVmZiwgcCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gX2JpbkJFLnVpODtcbiAgICAgICAgdGltZXMoOCwgKGkpID0+IHtcbiAgICAgICAgICAgIGFbaV0gPSBidWZmW3AgKyA3IC0gaV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX2JpbkJFLmZsNjRbMF07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gICAgICovXG4gICAgd3JpdGVVc2hvcnQ6IChidWZmLCBwLCBuKSA9PiB7XG4gICAgICAgIGJ1ZmZbcF0gPSAobiA+PiA4KSAmIDI1NTtcbiAgICAgICAgYnVmZltwICsgMV0gPSBuICYgMjU1O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gblxuICAgICAqL1xuICAgIHdyaXRlVWludDogKGJ1ZmYsIHAsIG4pID0+IHtcbiAgICAgICAgYnVmZltwXSA9IChuID4+IDI0KSAmIDI1NTtcbiAgICAgICAgYnVmZltwICsgMV0gPSAobiA+PiAxNikgJiAyNTU7XG4gICAgICAgIGJ1ZmZbcCArIDJdID0gKG4gPj4gOCkgJiAyNTU7XG4gICAgICAgIGJ1ZmZbcCArIDNdID0gKG4gPj4gMCkgJiAyNTU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gICAgICovXG4gICAgd3JpdGVBU0NJSTogKGJ1ZmYsIHAsIHMpID0+IHtcbiAgICAgICAgdGltZXMocy5sZW5ndGgsIChpKSA9PiB7XG4gICAgICAgICAgICBidWZmW3AgKyBpXSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB1aTgsXG4gICAgZmw2NDogbmV3IEZsb2F0NjRBcnJheSh1aTguYnVmZmVyKSxcbiAgICBmbDMyOiBuZXcgRmxvYXQzMkFycmF5KHVpOC5idWZmZXIpLFxuICAgIHVpMzI6IG5ldyBVaW50MzJBcnJheSh1aTguYnVmZmVyKSxcbiAgICBpMzI6IG5ldyBJbnQzMkFycmF5KHVpOC5idWZmZXIpLFxuICAgIGkxNjogbmV3IEludDE2QXJyYXkodWk4LmJ1ZmZlciksXG4gICAgLyoqXG4gICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZlxuICAgICAgKiBAcGFyYW0ge251bWJlcn0gcFxuICAgICAgKiBAcGFyYW0ge251bWJlcn0gblxuICAgICAgKi9cbiAgICB3cml0ZURvdWJsZTogKGJ1ZmYsIHAsIG4pID0+IHtcbiAgICAgICAgX2JpbkJFLmZsNjRbMF0gPSBuO1xuICAgICAgICB0aW1lcyg4LCAoaSkgPT4ge1xuICAgICAgICAgICAgYnVmZltwICsgaV0gPSBfYmluQkUudWk4WzcgLSBpXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG4vKipcbiAqIEBwYXJhbSB7QmluQkV9IGJpblxuICogQHBhcmFtIHtVaW50OEFycmF5fSBkYXRhXG4gKiBAcGFyYW0ge251bWJlcn0gX29mZnNldFxuICogQHBhcmFtIHtSZWNvcmQ8a2V5b2YgZmllbGRUYWdUeXBlcywgYW55Pn0gaWZkXG4gKiBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyXX1cbiAqL1xuY29uc3QgX3dyaXRlSUZEID0gKGJpbiwgZGF0YSwgX29mZnNldCwgaWZkKSA9PiB7XG4gICAgbGV0IG9mZnNldCA9IF9vZmZzZXQ7XG4gICAgY29uc3Qga2V5cyA9IC8qKiBAdHlwZSB7QXJyYXk8a2V5b2YgZmllbGRUYWdUeXBlcz59ICovIChPYmplY3Qua2V5cyhpZmQpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBrZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IG51bGwgJiYga2V5ICE9PSAndW5kZWZpbmVkJztcbiAgICB9KS5tYXAoTnVtYmVyKSk7XG4gICAgYmluLndyaXRlVXNob3J0KGRhdGEsIG9mZnNldCwga2V5cy5sZW5ndGgpO1xuICAgIG9mZnNldCArPSAyO1xuICAgIGxldCBlb2ZmID0gb2Zmc2V0ICsgKDEyICoga2V5cy5sZW5ndGgpICsgNDtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gLyoqIEB0eXBlIHtrZXlvZiB0eXBlTmFtZTJieXRlfSAqLyAoZmllbGRUYWdUeXBlc1trZXldKTtcbiAgICAgICAgY29uc3QgdHlwZU51bSA9IHR5cGVOYW1lMmJ5dGVbdHlwZU5hbWVdO1xuICAgICAgICBpZiAodHlwZU5hbWUgPT0gbnVsbCB8fCB0eXBlTmFtZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biB0eXBlIG9mIHRhZzogJHtrZXl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbCA9IGlmZFtrZXldO1xuICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIGdldCB2YWx1ZSBmb3Iga2V5ICR7a2V5fWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFTQ0lJWiBmb3JtYXQgd2l0aCB0cmFpbGluZyAwIGNoYXJhY3RlclxuICAgICAgICAvLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9mb3JtYXQvdGlmZi9jb3Jpb24uaHRtXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc3ODMwNDQvd2hhdHMtdGhlLWRpZmZlcmVuY2UtYmV0d2Vlbi1hc2NpaXotdnMtYXNjaWlcbiAgICAgICAgaWYgKHR5cGVOYW1lID09PSAnQVNDSUknICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIGVuZHNXaXRoKHZhbCwgJ1xcdTAwMDAnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhbCArPSAnXFx1MDAwMCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtID0gdmFsLmxlbmd0aDtcbiAgICAgICAgYmluLndyaXRlVXNob3J0KGRhdGEsIG9mZnNldCwga2V5KTtcbiAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgIGJpbi53cml0ZVVzaG9ydChkYXRhLCBvZmZzZXQsIHR5cGVOdW0pO1xuICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgYmluLndyaXRlVWludChkYXRhLCBvZmZzZXQsIG51bSk7XG4gICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICBsZXQgZGxlbiA9IFstMSwgMSwgMSwgMiwgNCwgOCwgMCwgMCwgMCwgMCwgMCwgMCwgOF1bdHlwZU51bV0gKiBudW07XG4gICAgICAgIGxldCB0b2ZmID0gb2Zmc2V0O1xuICAgICAgICBpZiAoZGxlbiA+IDQpIHtcbiAgICAgICAgICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBlb2ZmKTtcbiAgICAgICAgICAgIHRvZmYgPSBlb2ZmO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlTmFtZSA9PT0gJ0FTQ0lJJykge1xuICAgICAgICAgICAgYmluLndyaXRlQVNDSUkoZGF0YSwgdG9mZiwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlTmFtZSA9PT0gJ1NIT1JUJykge1xuICAgICAgICAgICAgdGltZXMobnVtLCAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGJpbi53cml0ZVVzaG9ydChkYXRhLCB0b2ZmICsgKDIgKiBpKSwgdmFsW2ldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVOYW1lID09PSAnTE9ORycpIHtcbiAgICAgICAgICAgIHRpbWVzKG51bSwgKGkpID0+IHtcbiAgICAgICAgICAgICAgICBiaW4ud3JpdGVVaW50KGRhdGEsIHRvZmYgKyAoNCAqIGkpLCB2YWxbaV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZU5hbWUgPT09ICdSQVRJT05BTCcpIHtcbiAgICAgICAgICAgIHRpbWVzKG51bSwgKGkpID0+IHtcbiAgICAgICAgICAgICAgICBiaW4ud3JpdGVVaW50KGRhdGEsIHRvZmYgKyAoOCAqIGkpLCBNYXRoLnJvdW5kKHZhbFtpXSAqIDEwMDAwKSk7XG4gICAgICAgICAgICAgICAgYmluLndyaXRlVWludChkYXRhLCB0b2ZmICsgKDggKiBpKSArIDQsIDEwMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVOYW1lID09PSAnRE9VQkxFJykge1xuICAgICAgICAgICAgdGltZXMobnVtLCAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGJpbi53cml0ZURvdWJsZShkYXRhLCB0b2ZmICsgKDggKiBpKSwgdmFsW2ldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkbGVuID4gNCkge1xuICAgICAgICAgICAgZGxlbiArPSAoZGxlbiAmIDEpO1xuICAgICAgICAgICAgZW9mZiArPSBkbGVuO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCArPSA0O1xuICAgIH1cbiAgICByZXR1cm4gW29mZnNldCwgZW9mZl07XG59O1xuLyoqXG4gKiBAcGFyYW0ge0FycmF5PFJlY29yZDxrZXlvZiBmaWVsZFRhZ1R5cGVzLCB1bmtub3duPj59IGlmZHNcbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn1cbiAqL1xuY29uc3QgZW5jb2RlSWZkcyA9IChpZmRzKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KG51bUJ5dGVzSW5JZmQpO1xuICAgIGxldCBvZmZzZXQgPSA0O1xuICAgIGNvbnN0IGJpbiA9IF9iaW5CRTtcbiAgICAvLyBzZXQgYmlnLWVuZGlhbiBieXRlLW9yZGVyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVElGRiNCeXRlX29yZGVyXG4gICAgZGF0YVswXSA9IDc3O1xuICAgIGRhdGFbMV0gPSA3NztcbiAgICAvLyBzZXQgZm9ybWF0LXZlcnNpb24gbnVtYmVyXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVElGRiNCeXRlX29yZGVyXG4gICAgZGF0YVszXSA9IDQyO1xuICAgIGxldCBpZmRvID0gODtcbiAgICBiaW4ud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgaWZkbyk7XG4gICAgb2Zmc2V0ICs9IDQ7XG4gICAgaWZkcy5mb3JFYWNoKChpZmQsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgbm9mZnMgPSBfd3JpdGVJRkQoYmluLCBkYXRhLCBpZmRvLCBpZmQpO1xuICAgICAgICBpZmRvID0gbm9mZnNbMV07XG4gICAgICAgIGlmIChpIDwgaWZkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBiaW4ud3JpdGVVaW50KGRhdGEsIG5vZmZzWzBdLCBpZmRvKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkYXRhLnNsaWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKDAsIGlmZG8pLmJ1ZmZlcjtcbiAgICB9XG4gICAgLy8gbm9kZSBoYXNuJ3QgaW1wbGVtZW50ZWQgc2xpY2Ugb24gVWludDhBcnJheSB5ZXRcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShpZmRvKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlmZG87IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSBkYXRhW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmJ1ZmZlcjtcbn07XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPnxpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl9IHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge0dlb3RpZmZXcml0ZXJNZXRhZGF0YX0gbWV0YWRhdGFcbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn1cbiAqL1xuY29uc3QgZW5jb2RlSW1hZ2UgPSAodmFsdWVzLCB3aWR0aCwgaGVpZ2h0LCBtZXRhZGF0YSkgPT4ge1xuICAgIGlmIChoZWlnaHQgPT09IHVuZGVmaW5lZCB8fCBoZWlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgcGFzc2VkIGludG8gZW5jb2RlSW1hZ2UgYSB3aWR0aCBvZiB0eXBlICR7aGVpZ2h0fWApO1xuICAgIH1cbiAgICBpZiAod2lkdGggPT09IHVuZGVmaW5lZCB8fCB3aWR0aCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBwYXNzZWQgaW50byBlbmNvZGVJbWFnZSBhIHdpZHRoIG9mIHR5cGUgJHt3aWR0aH1gKTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8bnVtYmVyfHN0cmluZywgQXJyYXk8bnVtYmVyfHN0cmluZz58bnVtYmVyfHN0cmluZ3x1bmRlZmluZWQ+fSAqL1xuICAgIGNvbnN0IGlmZCA9IHtcbiAgICAgICAgMjU2OiBbd2lkdGhdLCAvLyBJbWFnZVdpZHRoXG4gICAgICAgIDI1NzogW2hlaWdodF0sIC8vIEltYWdlTGVuZ3RoXG4gICAgICAgIDI3MzogW251bUJ5dGVzSW5JZmRdLCAvLyBzdHJpcHMgb2Zmc2V0XG4gICAgICAgIDI3ODogW2hlaWdodF0sIC8vIFJvd3NQZXJTdHJpcFxuICAgICAgICAzMDU6ICdnZW90aWZmLmpzJywgLy8gbm8gYXJyYXkgZm9yIEFTQ0lJKFopXG4gICAgfTtcbiAgICBpZiAobWV0YWRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZmRbaV0gPSBtZXRhZGF0YVsgLyoqIEB0eXBlIHtrZXlvZiBHZW90aWZmV3JpdGVyTWV0YWRhdGF9ICovKGkpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwcmZ4ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlSWZkcyhbaWZkXSkpO1xuICAgIGNvbnN0IGRhdGFUeXBlID0gLyoqIEB0eXBlIHtrZXlvZiB0eXBlTWFwfSAqLyAodmFsdWVzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIGNvbnN0IFR5cGVkQXJyYXkgPSB0eXBlTWFwW2RhdGFUeXBlXTtcbiAgICAvLyBkZWZhdWx0IGZvciBGbG9hdDY0XG4gICAgbGV0IGVsZW1lbnRTaXplID0gODtcbiAgICBpZiAoVHlwZWRBcnJheSkge1xuICAgICAgICBlbGVtZW50U2l6ZSA9IFR5cGVkQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShudW1CeXRlc0luSWZkICsgKHZhbHVlcy5sZW5ndGggKiBlbGVtZW50U2l6ZSkpO1xuICAgIHRpbWVzKHByZngubGVuZ3RoLCAoaSkgPT4ge1xuICAgICAgICBkYXRhW2ldID0gcHJmeFtpXTtcbiAgICB9KTtcbiAgICBmb3JFYWNoKHZhbHVlcywgKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgIGlmICghVHlwZWRBcnJheSkge1xuICAgICAgICAgICAgZGF0YVtudW1CeXRlc0luSWZkICsgaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoZWxlbWVudFNpemUpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ0Zsb2F0NjRBcnJheScpIHtcbiAgICAgICAgICAgIHZpZXcuc2V0RmxvYXQ2NCgwLCB2YWx1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAnRmxvYXQzMkFycmF5Jykge1xuICAgICAgICAgICAgdmlldy5zZXRGbG9hdDMyKDAsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdVaW50MzJBcnJheScpIHtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDAsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdVaW50MTZBcnJheScpIHtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDAsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdVaW50OEFycmF5Jykge1xuICAgICAgICAgICAgdmlldy5zZXRVaW50OCgwLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZWRBcnJheSA9IG5ldyBVaW50OEFycmF5KHZpZXcuYnVmZmVyKTtcbiAgICAgICAgY29uc3QgaWR4ID0gbnVtQnl0ZXNJbklmZCArIChpICogZWxlbWVudFNpemUpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsZW1lbnRTaXplOyBqKyspIHtcbiAgICAgICAgICAgIGRhdGFbaWR4ICsgal0gPSB0eXBlZEFycmF5W2pdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xufTtcbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7UmVjb3JkPG51bWJlcnxzdHJpbmcsIFQ+fSBpbnB1dFxuICogQHJldHVybnMge1JlY29yZDxudW1iZXJ8c3RyaW5nLCBUPn1cbiAqL1xuY29uc3QgY29udmVydFRvVGlkcyA9IChpbnB1dCkgPT4ge1xuICAgIC8qKiBAdHlwZSB7UmVjb3JkPG51bWJlcnxzdHJpbmcsIFQ+fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGlucHV0KSB7XG4gICAgICAgIGlmIChrZXkgIT09ICdTdHJpcE9mZnNldHMnKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWUyY29kZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihrZXksICdub3QgaW4gbmFtZTJjb2RlOicsIE9iamVjdC5rZXlzKG5hbWUyY29kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W25hbWUyY29kZVtrZXldXSA9IGlucHV0W2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IGlucHV0XG4gKiBAcmV0dXJucyB7VCBleHRlbmRzIGFueVtdID8gVCA6IFRbXX1cbiAqL1xuY29uc3QgdG9BcnJheSA9IChpbnB1dCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHtUIGV4dGVuZHMgYW55W10gPyBUIDogVFtdfSAqLyAoaW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gLyoqIEB0eXBlIHtUIGV4dGVuZHMgYW55W10gPyBUIDogVFtdfSAqLyAoW2lucHV0XSk7XG59O1xuLyoqIEB0eXBlIHtQYXJ0aWFsPEdlb3RpZmZXcml0ZXJNZXRhZGF0YT59ICovXG5jb25zdCBtZXRhZGF0YURlZmF1bHRzID0ge1xuICAgIENvbXByZXNzaW9uOiAxLCAvLyBubyBjb21wcmVzc2lvblxuICAgIFBsYW5hckNvbmZpZ3VyYXRpb246IDEsXG4gICAgRXh0cmFTYW1wbGVzOiAwLFxufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fEFycmF5PEFycmF5PEFycmF5PG51bWJlcj4+PnxpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl9IGRhdGFcbiAqIEBwYXJhbSB7R2VvdGlmZldyaXRlck1ldGFkYXRhfSBtZXRhZGF0YVxuICogQHJldHVybnMge0FycmF5QnVmZmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVHZW90aWZmKGRhdGEsIG1ldGFkYXRhKSB7XG4gICAgY29uc3QgaXNGbGF0dGVuZWQgPSB0eXBlb2YgZGF0YVswXSA9PT0gJ251bWJlcic7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgbGV0IGhlaWdodDtcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICBsZXQgbnVtQmFuZHM7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgbGV0IHdpZHRoO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi9cbiAgICBsZXQgZmxhdHRlbmVkVmFsdWVzO1xuICAgIGlmIChpc0ZsYXR0ZW5lZCkge1xuICAgICAgICBjb25zdCBhcnJheUZsYXQgPSAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovIChkYXRhKTtcbiAgICAgICAgY29uc3QgbWV0YUhlaWdodCA9IG1ldGFkYXRhLmhlaWdodCB8fCBtZXRhZGF0YS5JbWFnZUxlbmd0aDtcbiAgICAgICAgaWYgKG1ldGFIZWlnaHQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgbWV0YUhlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaGVpZ2h0IGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyIGluIG1ldGFkYXRhIGlmIGRhdGEgaXMgYSBmbGF0IGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaGVpZ2h0ID0gbWV0YUhlaWdodDtcbiAgICAgICAgY29uc3QgbWV0YVdpZHRoID0gbWV0YWRhdGEud2lkdGggfHwgbWV0YWRhdGEuSW1hZ2VXaWR0aDtcbiAgICAgICAgaWYgKG1ldGFXaWR0aCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBtZXRhV2lkdGggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpZHRoIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyIGluIG1ldGFkYXRhIGlmIGRhdGEgaXMgYSBmbGF0IGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBtZXRhV2lkdGg7XG4gICAgICAgIG51bUJhbmRzID0gYXJyYXlGbGF0Lmxlbmd0aCAvIChoZWlnaHQgKiB3aWR0aCk7XG4gICAgICAgIGZsYXR0ZW5lZFZhbHVlcyA9IGFycmF5RmxhdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGFycmF5M2QgPSAvKiogQHR5cGUge0FycmF5PEFycmF5PEFycmF5PG51bWJlcj4+Pn0gKi8gKGRhdGEpO1xuICAgICAgICBudW1CYW5kcyA9IGFycmF5M2QubGVuZ3RoO1xuICAgICAgICBoZWlnaHQgPSBhcnJheTNkWzBdLmxlbmd0aDtcbiAgICAgICAgd2lkdGggPSBhcnJheTNkWzBdWzBdLmxlbmd0aDtcbiAgICAgICAgZmxhdHRlbmVkVmFsdWVzID0gW107XG4gICAgICAgIHRpbWVzKGhlaWdodCwgKHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICB0aW1lcyh3aWR0aCwgKGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGltZXMobnVtQmFuZHMsIChiYW5kSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkVmFsdWVzLnB1c2goYXJyYXkzZFtiYW5kSW5kZXhdW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtZXRhZGF0YS5JbWFnZUxlbmd0aCA9IGhlaWdodDtcbiAgICBkZWxldGUgbWV0YWRhdGEuaGVpZ2h0O1xuICAgIG1ldGFkYXRhLkltYWdlV2lkdGggPSB3aWR0aDtcbiAgICBkZWxldGUgbWV0YWRhdGEud2lkdGg7XG4gICAgLy8gY29uc3VsdCBodHRwczovL3d3dy5sb2MuZ292L3ByZXNlcnZhdGlvbi9kaWdpdGFsL2Zvcm1hdHMvY29udGVudC90aWZmX3RhZ3Muc2h0bWxcbiAgICBpZiAoIW1ldGFkYXRhLkJpdHNQZXJTYW1wbGUpIHtcbiAgICAgICAgbGV0IGJpdHNQZXJTYW1wbGUgPSA4O1xuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZsYXR0ZW5lZFZhbHVlcykpIHtcbiAgICAgICAgICAgIGJpdHNQZXJTYW1wbGUgPSA4ICogT2JqZWN0LmdldFByb3RvdHlwZU9mKGZsYXR0ZW5lZFZhbHVlcykuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgIH1cbiAgICAgICAgbWV0YWRhdGEuQml0c1BlclNhbXBsZSA9IHRpbWVzKG51bUJhbmRzLCAoKSA9PiBiaXRzUGVyU2FtcGxlKTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxNZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgIGlmICghKCdDb21wcmVzc2lvbicgaW4gZmluYWxNZXRhZGF0YSkpIHtcbiAgICAgICAgZmluYWxNZXRhZGF0YS5Db21wcmVzc2lvbiA9IG1ldGFkYXRhRGVmYXVsdHMuQ29tcHJlc3Npb247XG4gICAgfVxuICAgIGlmICghKCdQbGFuYXJDb25maWd1cmF0aW9uJyBpbiBmaW5hbE1ldGFkYXRhKSkge1xuICAgICAgICBmaW5hbE1ldGFkYXRhLlBsYW5hckNvbmZpZ3VyYXRpb24gPSBtZXRhZGF0YURlZmF1bHRzLlBsYW5hckNvbmZpZ3VyYXRpb247XG4gICAgfVxuICAgIGlmICghKCdFeHRyYVNhbXBsZXMnIGluIGZpbmFsTWV0YWRhdGEpKSB7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuRXh0cmFTYW1wbGVzID0gbWV0YWRhdGFEZWZhdWx0cy5FeHRyYVNhbXBsZXM7XG4gICAgfVxuICAgIC8vIFRoZSBjb2xvciBzcGFjZSBvZiB0aGUgaW1hZ2UgZGF0YS5cbiAgICAvLyAxPWJsYWNrIGlzIHplcm8gYW5kIDI9UkdCLlxuICAgIGlmICghZmluYWxNZXRhZGF0YS5QaG90b21ldHJpY0ludGVycHJldGF0aW9uKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaW5hbE1ldGFkYXRhLkJpdHNQZXJTYW1wbGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpdHNQZXJTYW1wbGUgbXVzdCBiZSBhbiBhcnJheSB3aGVuIFBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24gaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxNZXRhZGF0YS5QaG90b21ldHJpY0ludGVycHJldGF0aW9uID0gZmluYWxNZXRhZGF0YS5CaXRzUGVyU2FtcGxlLmxlbmd0aCA9PT0gMyA/IDIgOiAxO1xuICAgIH1cbiAgICAvLyBUaGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgcGVyIHBpeGVsLlxuICAgIGlmICghZmluYWxNZXRhZGF0YS5TYW1wbGVzUGVyUGl4ZWwpIHtcbiAgICAgICAgZmluYWxNZXRhZGF0YS5TYW1wbGVzUGVyUGl4ZWwgPSBbbnVtQmFuZHNdO1xuICAgIH1cbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuU3RyaXBCeXRlQ291bnRzKSB7XG4gICAgICAgIC8vIHdlIGFyZSBvbmx5IHdyaXRpbmcgb25lIHN0cmlwXG4gICAgICAgIC8vIGRlZmF1bHQgZm9yIEZsb2F0NjRcbiAgICAgICAgbGV0IGVsZW1lbnRTaXplID0gODtcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhmbGF0dGVuZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBlbGVtZW50U2l6ZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihmbGF0dGVuZWRWYWx1ZXMpLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuU3RyaXBCeXRlQ291bnRzID0gW251bUJhbmRzICogZWxlbWVudFNpemUgKiBoZWlnaHQgKiB3aWR0aF07XG4gICAgfVxuICAgIGlmICghZmluYWxNZXRhZGF0YS5Nb2RlbFBpeGVsU2NhbGUgJiYgIWZpbmFsTWV0YWRhdGEuTW9kZWxUcmFuc2Zvcm1hdGlvbikge1xuICAgICAgICAvLyBhc3N1bWVzIHJhc3RlciB0YWtlcyB1cCBleGFjdGx5IHRoZSB3aG9sZSBnbG9iZVxuICAgICAgICBmaW5hbE1ldGFkYXRhLk1vZGVsUGl4ZWxTY2FsZSA9IFszNjAgLyB3aWR0aCwgMTgwIC8gaGVpZ2h0LCAwXTtcbiAgICB9XG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLlNhbXBsZUZvcm1hdCkge1xuICAgICAgICBsZXQgc2FtcGxlRm9ybWF0ID0gMTtcbiAgICAgICAgaWYgKGlzVHlwZWRGbG9hdEFycmF5KGZsYXR0ZW5lZFZhbHVlcykpIHtcbiAgICAgICAgICAgIHNhbXBsZUZvcm1hdCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVHlwZWRJbnRBcnJheShmbGF0dGVuZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBzYW1wbGVGb3JtYXQgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1R5cGVkVWludEFycmF5KGZsYXR0ZW5lZFZhbHVlcykpIHtcbiAgICAgICAgICAgIHNhbXBsZUZvcm1hdCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxNZXRhZGF0YS5TYW1wbGVGb3JtYXQgPSB0aW1lcyhudW1CYW5kcywgKCkgPT4gc2FtcGxlRm9ybWF0KTtcbiAgICB9XG4gICAgLy8gaWYgZGlkbid0IHBhc3MgaW4gcHJvamVjdGlvbiBpbmZvcm1hdGlvbiwgYXNzdW1lIHRoZSBwb3B1bGFyIDQzMjYgXCJnZW9ncmFwaGljIHByb2plY3Rpb25cIlxuICAgIGlmICghZmluYWxNZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eSgnR2VvZ3JhcGhpY1R5cGVHZW9LZXknKSAmJiAhZmluYWxNZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eSgnUHJvamVjdGVkQ1NUeXBlR2VvS2V5JykpIHtcbiAgICAgICAgZmluYWxNZXRhZGF0YS5HZW9ncmFwaGljVHlwZUdlb0tleSA9IDQzMjY7XG4gICAgICAgIGlmICghZmluYWxNZXRhZGF0YS5Nb2RlbFRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICBmaW5hbE1ldGFkYXRhLk1vZGVsVGllcG9pbnQgPSBbMCwgMCwgMCwgLTE4MCwgOTAsIDBdOyAvLyByYXN0ZXIgZml0cyB3aG9sZSBnbG9iZVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuR2VvZ0NpdGF0aW9uR2VvS2V5ID0gJ1dHUyA4NCc7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuR1RNb2RlbFR5cGVHZW9LZXkgPSAyO1xuICAgIH1cbiAgICBjb25zdCBnZW9LZXlzID0gT2JqZWN0LmtleXMoZmluYWxNZXRhZGF0YSlcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBlbmRzV2l0aChrZXksICdHZW9LZXknKSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IG5hbWUyY29kZVthXSAtIG5hbWUyY29kZVtiXSk7XG4gICAgLy8gSWYgbm90IHByb3ZpZGVkLCBidWlsZCBHZW9LZXlEaXJlY3RvcnkgYXMgd2VsbCBhcyBHZW9Bc2NpaVBhcmFtc1RhZyBhbmQgR2VvRG91YmxlUGFyYW1zVGFnXG4gICAgLy8gaWYgR2VvQXNjaWlQYXJhbXMvR2VvRG91YmxlUGFyYW1zIHdlcmUgcGFzc2VkIGluLCB3ZSBhc3N1bWUgb2Zmc2V0cyBhcmUgYWxyZWFkeSBjb3JyZWN0XG4gICAgLy8gU3BlYyBodHRwOi8vZ2VvdGlmZi5tYXB0b29scy5vcmcvc3BlYy9nZW90aWZmMi40Lmh0bWxcbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuR2VvS2V5RGlyZWN0b3J5KSB7XG4gICAgICAgIC8vIE9ubHkgYnVpbGQgQVNDSUkgLyBET1VCTEUgcGFyYW1zIGlmIG5vdCBwcm92aWRlZFxuICAgICAgICBsZXQgZ2VvQXNjaWlQYXJhbXMgPSBmaW5hbE1ldGFkYXRhLkdlb0FzY2lpUGFyYW1zIHx8ICcnO1xuICAgICAgICBpZiAodHlwZW9mIGdlb0FzY2lpUGFyYW1zICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9Bc2NpaVBhcmFtcyBtdXN0IGJlIGEgc3RyaW5nIGlmIHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRBc2NpaU9mZnNldCA9IGdlb0FzY2lpUGFyYW1zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZ2VvRG91YmxlUGFyYW1zID0gZmluYWxNZXRhZGF0YS5HZW9Eb3VibGVQYXJhbXMgfHwgW107XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShnZW9Eb3VibGVQYXJhbXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlb0RvdWJsZVBhcmFtcyBtdXN0IGJlIGFuIGFycmF5IGlmIHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnREb3VibGVJbmRleCA9IGdlb0RvdWJsZVBhcmFtcy5sZW5ndGg7XG4gICAgICAgIC8vIFNpbmNlIGdlb0tleXMgYWxyZWFkeSBzb3J0ZWQgYW5kIGZpbHRlcmVkLCBkbyBhIHNpbmdsZSBwYXNzIHRvIGFwcGVuZCB0byBjb3JyZXNwb25kaW5nIGRpcmVjdG9yeSBmb3IgU0hPUlQvQVNDSUkvRE9VQkxFXG4gICAgICAgIGNvbnN0IEdlb0tleURpcmVjdG9yeSA9IFsxLCAxLCAwLCAwXTtcbiAgICAgICAgbGV0IHZhbGlkS2V5cyA9IDA7XG4gICAgICAgIGdlb0tleXMuZm9yRWFjaCgoZ2VvS2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBLZXlJRCA9IG5hbWUyY29kZVtnZW9LZXldO1xuICAgICAgICAgICAgY29uc3QgdGFnVHlwZSA9IGZpZWxkVGFnVHlwZXNbS2V5SURdO1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZmluYWxNZXRhZGF0YVsgLyoqIEB0eXBlIHtrZXlvZiBpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLkdlb3RpZmZXcml0ZXJNZXRhZGF0YX0gKi8oZ2VvS2V5KV07XG4gICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgQ291bnQ7XG4gICAgICAgICAgICBsZXQgVElGRlRhZ0xvY2F0aW9uO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICAgICAgICBsZXQgdmFsdWVPZmZzZXQ7XG4gICAgICAgICAgICBpZiAodGFnVHlwZSA9PT0gJ1NIT1JUJykge1xuICAgICAgICAgICAgICAgIENvdW50ID0gMTtcbiAgICAgICAgICAgICAgICBUSUZGVGFnTG9jYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEdlb0tleSAke2dlb0tleX0gd2l0aCB0eXBlIFNIT1JUIG11c3QgaGF2ZSBhIG51bWJlciB2YWx1ZWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZU9mZnNldCA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhZ1R5cGUgPT09ICdBU0NJSScpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsTWV0YWRhdGEuR2VvQXNjaWlQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsU3RyID0gYCR7dmFsLnRvU3RyaW5nKCl9XFx1MDAwMGA7XG4gICAgICAgICAgICAgICAgICAgIFRJRkZUYWdMb2NhdGlvbiA9IE51bWJlcihuYW1lMmNvZGUuR2VvQXNjaWlQYXJhbXMpOyAvLyAzNDczN1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9mZnNldCA9IGN1cnJlbnRBc2NpaU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgQ291bnQgPSB2YWxTdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBnZW9Bc2NpaVBhcmFtcyArPSB2YWxTdHI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBc2NpaU9mZnNldCArPSB2YWxTdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhZ1R5cGUgPT09ICdET1VCTEUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbE1ldGFkYXRhLkdlb0RvdWJsZVBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSB0b0FycmF5KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIFRJRkZUYWdMb2NhdGlvbiA9IE51bWJlcihuYW1lMmNvZGUuR2VvRG91YmxlUGFyYW1zKTsgLy8gMzQ3MzZcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVPZmZzZXQgPSBjdXJyZW50RG91YmxlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIENvdW50ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIGFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvRG91YmxlUGFyYW1zLnB1c2goTnVtYmVyKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREb3VibGVJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbZ2VvdGlmZi5qc10gY291bGRuJ3QgZ2V0IFRJRkZUYWdMb2NhdGlvbiBmb3IgJHtnZW9LZXl9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2VvS2V5RGlyZWN0b3J5LnB1c2goS2V5SUQsIFRJRkZUYWdMb2NhdGlvbiwgQ291bnQsIHZhbHVlT2Zmc2V0KTtcbiAgICAgICAgICAgIHZhbGlkS2V5cysrO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gV3JpdGUgR2VvS2V5RGlyZWN0b3J5LCBHZW9Bc2NpaVBhcmFtcywgR2VvRG91YmxlUGFyYW1zXG4gICAgICAgIEdlb0tleURpcmVjdG9yeVszXSA9IHZhbGlkS2V5cztcbiAgICAgICAgZmluYWxNZXRhZGF0YS5HZW9LZXlEaXJlY3RvcnkgPSBHZW9LZXlEaXJlY3Rvcnk7XG4gICAgICAgIGlmICghZmluYWxNZXRhZGF0YS5HZW9Bc2NpaVBhcmFtcyAmJiBnZW9Bc2NpaVBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaW5hbE1ldGFkYXRhLkdlb0FzY2lpUGFyYW1zID0gZ2VvQXNjaWlQYXJhbXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5hbE1ldGFkYXRhLkdlb0RvdWJsZVBhcmFtcyAmJiBnZW9Eb3VibGVQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmluYWxNZXRhZGF0YS5HZW9Eb3VibGVQYXJhbXMgPSBnZW9Eb3VibGVQYXJhbXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xlYW51cCBvcmlnaW5hbCBHZW9LZXlzIG1ldGFkYXRhLCBiZWNhdXNlIHN0b3JlZCBpbiBHZW9LZXlEaXJlY3RvcnkgdGFnXG4gICAgZm9yIChjb25zdCBnZW9LZXkgb2YgZ2VvS2V5cykge1xuICAgICAgICBpZiAoZmluYWxNZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eShnZW9LZXkpKSB7XG4gICAgICAgICAgICBkZWxldGUgZmluYWxNZXRhZGF0YVsgLyoqIEB0eXBlIHtrZXlvZiBpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLkdlb3RpZmZXcml0ZXJNZXRhZGF0YX0gKi8oZ2VvS2V5KV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEB0eXBlIHtjb25zdH0gKi8gKFtcbiAgICAgICAgJ0NvbXByZXNzaW9uJyxcbiAgICAgICAgJ0V4dHJhU2FtcGxlcycsXG4gICAgICAgICdHZW9ncmFwaGljVHlwZUdlb0tleScsXG4gICAgICAgICdHVE1vZGVsVHlwZUdlb0tleScsXG4gICAgICAgICdHVFJhc3RlclR5cGVHZW9LZXknLFxuICAgICAgICAnSW1hZ2VMZW5ndGgnLCAvLyBzeW5vbnltIG9mIEltYWdlSGVpZ2h0XG4gICAgICAgICdJbWFnZVdpZHRoJyxcbiAgICAgICAgJ09yaWVudGF0aW9uJyxcbiAgICAgICAgJ1Bob3RvbWV0cmljSW50ZXJwcmV0YXRpb24nLFxuICAgICAgICAnUHJvamVjdGVkQ1NUeXBlR2VvS2V5JyxcbiAgICAgICAgJ1BsYW5hckNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAnUmVzb2x1dGlvblVuaXQnLFxuICAgICAgICAnU2FtcGxlc1BlclBpeGVsJyxcbiAgICAgICAgJ1hQb3NpdGlvbicsXG4gICAgICAgICdZUG9zaXRpb24nLFxuICAgICAgICAnUm93c1BlclN0cmlwJyxcbiAgICBdKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChmaW5hbE1ldGFkYXRhW25hbWVdKSB7XG4gICAgICAgICAgICBmaW5hbE1ldGFkYXRhW25hbWVdID0gdG9BcnJheShmaW5hbE1ldGFkYXRhW25hbWVdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGVuY29kZWRNZXRhZGF0YSA9IGNvbnZlcnRUb1RpZHMoZmluYWxNZXRhZGF0YSk7XG4gICAgY29uc3Qgb3V0cHV0SW1hZ2UgPSBlbmNvZGVJbWFnZShmbGF0dGVuZWRWYWx1ZXMsIHdpZHRoLCBoZWlnaHQsIGVuY29kZWRNZXRhZGF0YSk7XG4gICAgcmV0dXJuIG91dHB1dEltYWdlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvdGlmZndyaXRlci5qcy5tYXAiLCIvKiogQGltcG9ydCB7VHlwZWRBcnJheX0gZnJvbSAnLi9nZW90aWZmLmpzJyAqL1xuZXhwb3J0IGNvbnN0IGZpZWxkVHlwZXMgPSB7XG4gICAgQllURTogLyoqIEB0eXBlIHsxfSAqLyAoMHgwMDAxKSxcbiAgICBBU0NJSTogLyoqIEB0eXBlIHsyfSAqLyAoMHgwMDAyKSxcbiAgICBTSE9SVDogLyoqIEB0eXBlIHszfSAqLyAoMHgwMDAzKSxcbiAgICBMT05HOiAvKiogQHR5cGUgezR9ICovICgweDAwMDQpLFxuICAgIFJBVElPTkFMOiAvKiogQHR5cGUgezV9ICovICgweDAwMDUpLFxuICAgIFNCWVRFOiAvKiogQHR5cGUgezZ9ICovICgweDAwMDYpLFxuICAgIFVOREVGSU5FRDogLyoqIEB0eXBlIHs3fSAqLyAoMHgwMDA3KSxcbiAgICBTU0hPUlQ6IC8qKiBAdHlwZSB7OH0gKi8gKDB4MDAwOCksXG4gICAgU0xPTkc6IC8qKiBAdHlwZSB7OX0gKi8gKDB4MDAwOSksXG4gICAgU1JBVElPTkFMOiAvKiogQHR5cGUgezEwfSAqLyAoMHgwMDBhKSxcbiAgICBGTE9BVDogLyoqIEB0eXBlIHsxMX0gKi8gKDB4MDAwYiksXG4gICAgRE9VQkxFOiAvKiogQHR5cGUgezEyfSAqLyAoMHgwMDBjKSxcbiAgICAvLyBJRkQgb2Zmc2V0LCBzdWdnZXN0ZWQgYnkgaHR0cHM6Ly9vd2wucGh5LnF1ZWVuc3UuY2EvfnBoaWwvZXhpZnRvb2wvc3RhbmRhcmRzLmh0bWxcbiAgICBJRkQ6IC8qKiBAdHlwZSB7MTN9ICovICgweDAwMGQpLFxuICAgIC8vIGludHJvZHVjZWQgYnkgQmlnVElGRlxuICAgIExPTkc4OiAvKiogQHR5cGUgezE2fSAqLyAoMHgwMDEwKSxcbiAgICBTTE9ORzg6IC8qKiBAdHlwZSB7MTd9ICovICgweDAwMTEpLFxuICAgIElGRDg6IC8qKiBAdHlwZSB7MTh9ICovICgweDAwMTIpLFxufTtcbi8qKiBAdHlwZWRlZiB7a2V5b2YgZmllbGRUeXBlc30gRmllbGRUeXBlTmFtZSAqL1xuLyoqIEB0eXBlZGVmIHtmaWVsZFR5cGVzW2tleW9mIHR5cGVvZiBmaWVsZFR5cGVzXX0gRmllbGRUeXBlICovXG4vKiogQHR5cGVkZWYge1JlY29yZDxGaWVsZFR5cGVOYW1lLCBudW1iZXI+fSBGaWVsZFR5cGVTaXplcyAqL1xuZXhwb3J0IGNvbnN0IGZpZWxkVHlwZVNpemVzID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKHtcbiAgICBbZmllbGRUeXBlcy5CWVRFXTogMSxcbiAgICBbZmllbGRUeXBlcy5BU0NJSV06IDEsXG4gICAgW2ZpZWxkVHlwZXMuU0JZVEVdOiAxLFxuICAgIFtmaWVsZFR5cGVzLlVOREVGSU5FRF06IDEsXG4gICAgW2ZpZWxkVHlwZXMuU0hPUlRdOiAyLFxuICAgIFtmaWVsZFR5cGVzLlNTSE9SVF06IDIsXG4gICAgW2ZpZWxkVHlwZXMuTE9OR106IDQsXG4gICAgW2ZpZWxkVHlwZXMuU0xPTkddOiA0LFxuICAgIFtmaWVsZFR5cGVzLkZMT0FUXTogNCxcbiAgICBbZmllbGRUeXBlcy5JRkRdOiA0LFxuICAgIFtmaWVsZFR5cGVzLlJBVElPTkFMXTogOCxcbiAgICBbZmllbGRUeXBlcy5TUkFUSU9OQUxdOiA4LFxuICAgIFtmaWVsZFR5cGVzLkRPVUJMRV06IDgsXG4gICAgW2ZpZWxkVHlwZXMuTE9ORzhdOiA4LFxuICAgIFtmaWVsZFR5cGVzLlNMT05HOF06IDgsXG4gICAgW2ZpZWxkVHlwZXMuSUZEOF06IDgsXG59KTtcbi8qKiBAdHlwZWRlZiB7ZmllbGRUeXBlU2l6ZXNba2V5b2YgdHlwZW9mIGZpZWxkVHlwZVNpemVzXX0gRmllbGRUeXBlU2l6ZSAqL1xuLyoqXG4gKiBHZXQgdGhlIGJ5dGUgc2l6ZSBmb3IgYSBnaXZlbiBmaWVsZCB0eXBlLlxuICogQHBhcmFtIHtGaWVsZFR5cGV9IGZpZWxkVHlwZSBUaGUgVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgc2l6ZSBpbiBieXRlc1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgdGhlIGZpZWxkIHR5cGUgaXMgaW52YWxpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRUeXBlU2l6ZShmaWVsZFR5cGUpIHtcbiAgICBjb25zdCBzaXplID0gZmllbGRUeXBlU2l6ZXNbZmllbGRUeXBlXTtcbiAgICBpZiAoc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBJbnZhbGlkIGZpZWxkIHR5cGU6ICR7ZmllbGRUeXBlfWApO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbn1cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVGFnRGljdGlvbmFyeUVudHJ5XG4gKiBAcHJvcGVydHkge251bWJlcn0gdGFnXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW25hbWVdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3R5cGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtpc0FycmF5XVxuICogQHByb3BlcnR5IHtib29sZWFufSBbZWFnZXJdXG4gKi9cbmV4cG9ydCBjb25zdCB0YWdEaWN0aW9uYXJ5ID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKHtcbiAgICBOZXdTdWJmaWxlVHlwZTogeyB0YWc6IDI1NCwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBlYWdlcjogdHJ1ZSB9LFxuICAgIFN1YmZpbGVUeXBlOiB7IHRhZzogMjU1LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIEltYWdlV2lkdGg6IHsgdGFnOiAyNTYsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgSW1hZ2VMZW5ndGg6IHsgdGFnOiAyNTcsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgQml0c1BlclNhbXBsZTogeyB0YWc6IDI1OCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBDb21wcmVzc2lvbjogeyB0YWc6IDI1OSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBQaG90b21ldHJpY0ludGVycHJldGF0aW9uOiB7IHRhZzogMjYyLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFRocmVzaGhvbGRpbmc6IHsgdGFnOiAyNjMsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBDZWxsV2lkdGg6IHsgdGFnOiAyNjQsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBDZWxsTGVuZ3RoOiB7IHRhZzogMjY1LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgRmlsbE9yZGVyOiB7IHRhZzogMjY2LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgRG9jdW1lbnROYW1lOiB7IHRhZzogMjY5LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgSW1hZ2VEZXNjcmlwdGlvbjogeyB0YWc6IDI3MCwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIE1ha2U6IHsgdGFnOiAyNzEsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBNb2RlbDogeyB0YWc6IDI3MiwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIFN0cmlwT2Zmc2V0czogeyB0YWc6IDI3MywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIE9yaWVudGF0aW9uOiB7IHRhZzogMjc0LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgU2FtcGxlc1BlclBpeGVsOiB7IHRhZzogMjc3LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFJvd3NQZXJTdHJpcDogeyB0YWc6IDI3OCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBTdHJpcEJ5dGVDb3VudHM6IHsgdGFnOiAyNzksIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgaXNBcnJheTogdHJ1ZSB9LFxuICAgIE1pblNhbXBsZVZhbHVlOiB7IHRhZzogMjgwLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgTWF4U2FtcGxlVmFsdWU6IHsgdGFnOiAyODEsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBYUmVzb2x1dGlvbjogeyB0YWc6IDI4MiwgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCB9LFxuICAgIFlSZXNvbHV0aW9uOiB7IHRhZzogMjgzLCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMIH0sXG4gICAgUGxhbmFyQ29uZmlndXJhdGlvbjogeyB0YWc6IDI4NCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBQYWdlTmFtZTogeyB0YWc6IDI4NSwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIFhQb3NpdGlvbjogeyB0YWc6IDI4NiwgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCB9LFxuICAgIFlQb3NpdGlvbjogeyB0YWc6IDI4NywgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCB9LFxuICAgIEZyZWVPZmZzZXRzOiB7IHRhZzogMjg4LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBGcmVlQnl0ZUNvdW50czogeyB0YWc6IDI4OSwgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgR3JheVJlc3BvbnNlVW5pdDogeyB0YWc6IDI5MCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIEdyYXlSZXNwb25zZUN1cnZlOiB7IHRhZzogMjkxLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgVDRPcHRpb25zOiB7IHRhZzogMjkyLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBUNk9wdGlvbnM6IHsgdGFnOiAyOTMsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIFJlc29sdXRpb25Vbml0OiB7IHRhZzogMjk2LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgUGFnZU51bWJlcjogeyB0YWc6IDI5NywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFRyYW5zZmVyRnVuY3Rpb246IHsgdGFnOiAzMDEsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBTb2Z0d2FyZTogeyB0YWc6IDMwNSwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIERhdGVUaW1lOiB7IHRhZzogMzA2LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgQXJ0aXN0OiB7IHRhZzogMzE1LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgSG9zdENvbXB1dGVyOiB7IHRhZzogMzE2LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgUHJlZGljdG9yOiB7IHRhZzogMzE3LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgV2hpdGVQb2ludDogeyB0YWc6IDMxOCwgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFByaW1hcnlDaHJvbWF0aWNpdGllczogeyB0YWc6IDMxOSwgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIENvbG9yTWFwOiB7IHRhZzogMzIwLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSGFsZnRvbmVIaW50czogeyB0YWc6IDMyMSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFRpbGVXaWR0aDogeyB0YWc6IDMyMiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBUaWxlTGVuZ3RoOiB7IHRhZzogMzIzLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFRpbGVPZmZzZXRzOiB7IHRhZzogMzI0LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBUaWxlQnl0ZUNvdW50czogeyB0YWc6IDMyNSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIElua1NldDogeyB0YWc6IDMzMiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIElua05hbWVzOiB7IHRhZzogMzMzLCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgTnVtYmVyT2ZJbmtzOiB7IHRhZzogMzM0LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgRG90UmFuZ2U6IHsgdGFnOiAzMzYsIHR5cGU6IGZpZWxkVHlwZXMuQllURSwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFRhcmdldFByaW50ZXI6IHsgdGFnOiAzMzcsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBFeHRyYVNhbXBsZXM6IHsgdGFnOiAzMzgsIHR5cGU6IGZpZWxkVHlwZXMuQllURSwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBTYW1wbGVGb3JtYXQ6IHsgdGFnOiAzMzksIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgU01pblNhbXBsZVZhbHVlOiB7IHRhZzogMzQwLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgU01heFNhbXBsZVZhbHVlOiB7IHRhZzogMzQxLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgVHJhbnNmZXJSYW5nZTogeyB0YWc6IDM0MiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIEpQRUdQcm9jOiB7IHRhZzogNTEyLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgSlBFR0ludGVyY2hhbmdlRm9ybWF0OiB7IHRhZzogNTEzLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMbmd0aDogeyB0YWc6IDUxNCwgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgSlBFR1Jlc3RhcnRJbnRlcnZhbDogeyB0YWc6IDUxNSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIEpQRUdMb3NzbGVzc1ByZWRpY3RvcnM6IHsgdGFnOiA1MTcsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBKUEVHUG9pbnRUcmFuc2Zvcm1zOiB7IHRhZzogNTE4LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSlBFR1FUYWJsZXM6IHsgdGFnOiA1MTksIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgaXNBcnJheTogdHJ1ZSB9LFxuICAgIEpQRUdEQ1RhYmxlczogeyB0YWc6IDUyMCwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSlBFR0FDVGFibGVzOiB7IHRhZzogNTIxLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBZQ2JDckNvZWZmaWNpZW50czogeyB0YWc6IDUyOSwgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFlDYkNyU3ViU2FtcGxpbmc6IHsgdGFnOiA1MzAsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBZQ2JDclBvc2l0aW9uaW5nOiB7IHRhZzogNTMxLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgUmVmZXJlbmNlQmxhY2tXaGl0ZTogeyB0YWc6IDUzMiwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgQ29weXJpZ2h0OiB7IHRhZzogMzM0MzIsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBCYWRGYXhMaW5lczogeyB0YWc6IDMyNiB9LFxuICAgIENsZWFuRmF4RGF0YTogeyB0YWc6IDMyNyB9LFxuICAgIENsaXBQYXRoOiB7IHRhZzogMzQzIH0sXG4gICAgQ29uc2VjdXRpdmVCYWRGYXhMaW5lczogeyB0YWc6IDMyOCB9LFxuICAgIERlY29kZTogeyB0YWc6IDQzMyB9LFxuICAgIERlZmF1bHRJbWFnZUNvbG9yOiB7IHRhZzogNDM0IH0sXG4gICAgSW5kZXhlZDogeyB0YWc6IDM0NiB9LFxuICAgIEpQRUdUYWJsZXM6IHsgdGFnOiAzNDcsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgU3RyaXBSb3dDb3VudHM6IHsgdGFnOiA1NTksIGlzQXJyYXk6IHRydWUgfSxcbiAgICBTdWJJRkRzOiB7IHRhZzogMzMwLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgWENsaXBQYXRoVW5pdHM6IHsgdGFnOiAzNDQgfSxcbiAgICBZQ2xpcFBhdGhVbml0czogeyB0YWc6IDM0NSB9LFxuICAgIEFwZXJ0dXJlVmFsdWU6IHsgdGFnOiAzNzM3OCB9LFxuICAgIENvbG9yU3BhY2U6IHsgdGFnOiA0MDk2MSB9LFxuICAgIERhdGVUaW1lRGlnaXRpemVkOiB7IHRhZzogMzY4NjggfSxcbiAgICBEYXRlVGltZU9yaWdpbmFsOiB7IHRhZzogMzY4NjcgfSxcbiAgICBFeGlmSUZEOiB7IHRhZzogMzQ2NjUsIG5hbWU6ICdFeGlmIElGRCcsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIEV4aWZWZXJzaW9uOiB7IHRhZzogMzY4NjQgfSxcbiAgICBFeHBvc3VyZVRpbWU6IHsgdGFnOiAzMzQzNCB9LFxuICAgIEZpbGVTb3VyY2U6IHsgdGFnOiA0MTcyOCB9LFxuICAgIEZsYXNoOiB7IHRhZzogMzczODUgfSxcbiAgICBGbGFzaHBpeFZlcnNpb246IHsgdGFnOiA0MDk2MCB9LFxuICAgIEZOdW1iZXI6IHsgdGFnOiAzMzQzNyB9LFxuICAgIEltYWdlVW5pcXVlSUQ6IHsgdGFnOiA0MjAxNiB9LFxuICAgIExpZ2h0U291cmNlOiB7IHRhZzogMzczODQgfSxcbiAgICBNYWtlck5vdGU6IHsgdGFnOiAzNzUwMCB9LFxuICAgIFNodXR0ZXJTcGVlZFZhbHVlOiB7IHRhZzogMzczNzcgfSxcbiAgICBVc2VyQ29tbWVudDogeyB0YWc6IDM3NTEwIH0sXG4gICAgSVBUQzogeyB0YWc6IDMzNzIzIH0sXG4gICAgQ1pfTFNNSU5GTzogeyB0YWc6IDM0NDEyIH0sXG4gICAgSUNDUHJvZmlsZTogeyB0YWc6IDM0Njc1LCBuYW1lOiAnSUNDIFByb2ZpbGUnIH0sXG4gICAgWE1QOiB7IHRhZzogNzAwIH0sXG4gICAgR0RBTF9NRVRBREFUQTogeyB0YWc6IDQyMTEyIH0sXG4gICAgR0RBTF9OT0RBVEE6IHsgdGFnOiA0MjExMywgdHlwZTogZmllbGRUeXBlcy5BU0NJSSwgZWFnZXI6IHRydWUgfSxcbiAgICBQaG90b3Nob3A6IHsgdGFnOiAzNDM3NyB9LFxuICAgIE1vZGVsUGl4ZWxTY2FsZTogeyB0YWc6IDMzNTUwLCB0eXBlOiBmaWVsZFR5cGVzLkRPVUJMRSwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBNb2RlbFRpZXBvaW50OiB7IHRhZzogMzM5MjIsIHR5cGU6IGZpZWxkVHlwZXMuRE9VQkxFLCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIE1vZGVsVHJhbnNmb3JtYXRpb246IHsgdGFnOiAzNDI2NCwgdHlwZTogZmllbGRUeXBlcy5ET1VCTEUsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgR2VvS2V5RGlyZWN0b3J5OiB7IHRhZzogMzQ3MzUsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgR2VvRG91YmxlUGFyYW1zOiB7IHRhZzogMzQ3MzYsIHR5cGU6IGZpZWxkVHlwZXMuRE9VQkxFLCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIEdlb0FzY2lpUGFyYW1zOiB7IHRhZzogMzQ3MzcsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUksIGVhZ2VyOiB0cnVlIH0sXG4gICAgTGVyY1BhcmFtZXRlcnM6IHsgdGFnOiA1MDY3NCwgZWFnZXI6IHRydWUgfSxcbn0pO1xuLyoqIEB0eXBlZGVmIHtrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeX0gVGFnTmFtZSAqL1xuLyoqIEB0eXBlZGVmIHt0eXBlb2YgdGFnRGljdGlvbmFyeVtrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeV1bJ3RhZyddfSBUYWcgKi9cbi8qKlxuICogQHR5cGVkZWYge0V4dHJhY3Q8a2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnksXG4gKiAgIHsgW0sgaW4ga2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnldOiAodHlwZW9mIHRhZ0RpY3Rpb25hcnkpW0tdIGV4dGVuZHMgeyBlYWdlcjogdHJ1ZSB9XG4gKiAgID8gSyA6IG5ldmVyIH1ba2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnldPn0gRWFnZXJUYWdOYW1lXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge0V4dHJhY3Q8VGFnLCB7IFtLIGluIGtleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5XTogKHR5cGVvZiB0YWdEaWN0aW9uYXJ5KVtLXSBleHRlbmRzIHsgZWFnZXI6IHRydWUgfVxuICogICA/ICh0eXBlb2YgdGFnRGljdGlvbmFyeSlbS11bJ3RhZyddIDogbmV2ZXIgfVtrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeV0+fSBFYWdlclRhZ1xuICovXG4vKiogQHR5cGVkZWYge0V4dHJhY3Q8dHlwZW9mIHRhZ0RpY3Rpb25hcnlba2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnldLCB7dHlwZTogYW55fT5bJ3R5cGUnXX0gVGFnVHlwZSAqL1xuLyoqXG4gKiBAdGVtcGxhdGUge251bWJlcn0gVFxuICogQHR5cGVkZWYge1QgZXh0ZW5kcyAyID8gc3RyaW5nIDogbnVtYmVyfSBHZW9UaWZmUHJpbWl0aXZlXG4gKi9cbi8qKlxuICogQHRlbXBsYXRlIHtUYWdOYW1lfSBUXG4gKiBAdHlwZWRlZiB7dHlwZW9mIHRhZ0RpY3Rpb25hcnlbVF19IFRhZ0RlZlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIDE6IG51bWJlcjtcbiAqICAgMjogc3RyaW5nO1xuICogICAzOiBudW1iZXI7XG4gKiAgIDQ6IG51bWJlcjtcbiAqICAgNTogbnVtYmVyO1xuICogICA2OiBudW1iZXI7XG4gKiAgIDc6IEFycmF5QnVmZmVyO1xuICogICA4OiBudW1iZXI7XG4gKiAgIDk6IG51bWJlcjtcbiAqICAgMTA6IG51bWJlcjtcbiAqICAgMTE6IG51bWJlcjtcbiAqICAgMTI6IG51bWJlcjtcbiAqICAgMTY6IG51bWJlcjtcbiAqICAgMTc6IG51bWJlcjtcbiAqICAgMTg6IG51bWJlcjtcbiAqIH19IEZpZWxkVHlwZU1hcFxuICovXG4vKipcbiAqIEB0ZW1wbGF0ZSB7VGFnTmFtZX0gVFxuICogQHR5cGVkZWYge1RhZ0RlZjxUPiBleHRlbmRzIHsgaXNBcnJheTogdHJ1ZSB9XG4gKiAgID8gKFRhZ0RlZjxUPiBleHRlbmRzIHsgdHlwZTogdHlwZW9mIGZpZWxkVHlwZXMuRE9VQkxFIH0gPyBudW1iZXJbXSA6XG4gKiAgICAgIFRhZ0RlZjxUPiBleHRlbmRzIHsgdHlwZTogdHlwZW9mIGZpZWxkVHlwZXMuQVNDSUkgfSA/IHN0cmluZ1tdIDpcbiAqICAgICAgVGFnRGVmPFQ+IGV4dGVuZHMgeyB0eXBlOiB0eXBlb2YgZmllbGRUeXBlcy5CWVRFIHwgdHlwZW9mIGZpZWxkVHlwZXMuU0JZVEUgfCB0eXBlb2YgZmllbGRUeXBlcy5VTkRFRklORUQgfVxuICogICAgICAgID8gVWludDhBcnJheSB8IEludDhBcnJheSA6XG4gKiAgICAgIChudW1iZXJbXSB8IFR5cGVkQXJyYXkpKVxuICogICA6IChUYWdEZWY8VD4gZXh0ZW5kcyB7IHR5cGU6IGtleW9mIEZpZWxkVHlwZU1hcCB9ID8gRmllbGRUeXBlTWFwW1RhZ0RlZjxUPlsndHlwZSddXSA6IGFueSl9IFRhZ1ZhbHVlXG4gKi9cbi8qKlxuICogTWFwcyB0YWcgbmFtZXMgdG8gdGhlaXIgbnVtZXJpYyB2YWx1ZXNcbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fVxuICovXG5leHBvcnQgY29uc3QgdGFncyA9IHt9O1xuLyoqXG4gKiBNYXBzIHRhZyBudW1iZXJzIHRvIHRoZWlyIGRlZmluaXRpb25zXG4gKiBAdHlwZSB7UmVjb3JkPG51bWJlciwgeyB0YWc6IG51bWJlciwgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmd8bnVtYmVyfHVuZGVmaW5lZCwgaXNBcnJheTogYm9vbGVhbiwgZWFnZXI6IGJvb2xlYW4gfT59XG4gKi9cbmV4cG9ydCBjb25zdCB0YWdEZWZpbml0aW9ucyA9IHt9O1xuLyoqXG4gKiBSZWdpc3RlcnMgYSBuZXcgZmllbGQgdGFnXG4gKiBAcGFyYW0ge251bWJlcn0gdGFnIHRoZSBudW1lcmljIHRpZmYgdGFnXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgd2lsbCBiZSByZXBvcnRlZCBpbiB0aGUgSUZEXG4gKiBAcGFyYW0ge2tleW9mIGZpZWxkVHlwZXN8bnVtYmVyfHVuZGVmaW5lZH0gdHlwZSB0aGUgdGFncyBkYXRhIHR5cGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNBcnJheSB3aGV0aGVyIHRoZSB0YWcgaXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VhZ2VyPWZhbHNlXSB3aGV0aGVyIHRvIGVhZ2VybHkgZmV0Y2ggZGVmZXJyZWQgZmllbGRzLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIGZhbHNlIChkZWZhdWx0KSwgdGFncyBhcmUgbG9hZGVkIGxhemlseSBvbi1kZW1hbmQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdHJ1ZSwgYWxsIHRhZ3MgYXJlIGxvYWRlZCBpbW1lZGlhdGVseSBkdXJpbmcgcGFyc2luZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVGFnKHRhZywgbmFtZSwgdHlwZSwgaXNBcnJheSA9IGZhbHNlLCBlYWdlciA9IGZhbHNlKSB7XG4gICAgdGFnc1tuYW1lXSA9IHRhZztcbiAgICB0YWdEZWZpbml0aW9uc1t0YWddID0geyB0YWcsIG5hbWUsIHR5cGU6IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IGZpZWxkVHlwZXNbdHlwZV0gOiB0eXBlLCBpc0FycmF5LCBlYWdlciB9O1xufVxuZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGFnRGljdGlvbmFyeSkpIHtcbiAgICBjb25zdCBlbnRyeSA9IC8qKiBAdHlwZSB7VGFnRGljdGlvbmFyeUVudHJ5fSAqLyAodmFsdWUpO1xuICAgIHJlZ2lzdGVyVGFnKGVudHJ5LnRhZywgZW50cnkubmFtZSB8fCBrZXksIGVudHJ5LnR5cGUsIGVudHJ5LmlzQXJyYXksIGVudHJ5LmVhZ2VyKTtcbn1cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0YWdJZGVudGlmaWVyIFRoZSBmaWVsZCB0YWcgSUQgb3IgbmFtZVxuICogQHJldHVybnMge251bWJlcn0gdGhlIHJlc29sdmVkIHRhZyBJRFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVRhZyh0YWdJZGVudGlmaWVyKSB7XG4gICAgaWYgKHR5cGVvZiB0YWdJZGVudGlmaWVyID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdGFnSWRlbnRpZmllcjtcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3NbdGFnSWRlbnRpZmllcl07XG59XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdGFnSWRlbnRpZmllciBUaGUgZmllbGQgdGFnIElEIG9yIG5hbWVcbiAqIEByZXR1cm5zIHt7IHRhZzogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZ3xudW1iZXJ8dW5kZWZpbmVkLCBpc0FycmF5OiBib29sZWFuLCBlYWdlcjogYm9vbGVhbiB9fSB0aGUgdGFnIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZyh0YWdJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIHRhZ0RlZmluaXRpb25zW3Jlc29sdmVUYWcodGFnSWRlbnRpZmllcildO1xufVxuZXhwb3J0IGNvbnN0IGZpZWxkVGFnVHlwZXMgPSB7XG4gICAgMjU2OiAnU0hPUlQnLFxuICAgIDI1NzogJ1NIT1JUJyxcbiAgICAyNTg6ICdTSE9SVCcsXG4gICAgMjU5OiAnU0hPUlQnLFxuICAgIDI2MjogJ1NIT1JUJyxcbiAgICAyNzA6ICdBU0NJSScsXG4gICAgMjcxOiAnQVNDSUknLFxuICAgIDI3MjogJ0FTQ0lJJyxcbiAgICAyNzM6ICdMT05HJyxcbiAgICAyNzQ6ICdTSE9SVCcsXG4gICAgMjc3OiAnU0hPUlQnLFxuICAgIDI3ODogJ0xPTkcnLFxuICAgIDI3OTogJ0xPTkcnLFxuICAgIDI4MjogJ1JBVElPTkFMJyxcbiAgICAyODM6ICdSQVRJT05BTCcsXG4gICAgMjg0OiAnU0hPUlQnLFxuICAgIDI4NjogJ1NIT1JUJyxcbiAgICAyODc6ICdSQVRJT05BTCcsXG4gICAgMjk2OiAnU0hPUlQnLFxuICAgIDI5NzogJ1NIT1JUJyxcbiAgICAzMDU6ICdBU0NJSScsXG4gICAgMzA2OiAnQVNDSUknLFxuICAgIDMxNTogJ0FTQ0lJJyxcbiAgICAzMzg6ICdTSE9SVCcsXG4gICAgMzM5OiAnU0hPUlQnLFxuICAgIDUxMzogJ0xPTkcnLFxuICAgIDUxNDogJ0xPTkcnLFxuICAgIDEwMjQ6ICdTSE9SVCcsXG4gICAgMTAyNTogJ1NIT1JUJyxcbiAgICAxMDI2OiAnQVNDSUknLFxuICAgIDIwNDg6ICdTSE9SVCcsXG4gICAgMjA0OTogJ0FTQ0lJJyxcbiAgICAyMDUyOiAnU0hPUlQnLFxuICAgIDIwNTQ6ICdTSE9SVCcsXG4gICAgMjA1NzogJ0RPVUJMRScsXG4gICAgMjA1OTogJ0RPVUJMRScsXG4gICAgMjA2MDogJ1NIT1JUJyxcbiAgICAzMDcyOiAnU0hPUlQnLFxuICAgIDMwNzM6ICdBU0NJSScsXG4gICAgMzA3NjogJ1NIT1JUJyxcbiAgICA0MDk2OiAnU0hPUlQnLFxuICAgIDQwOTc6ICdBU0NJSScsXG4gICAgNDA5OTogJ1NIT1JUJyxcbiAgICAzMzQzMjogJ0FTQ0lJJyxcbiAgICAzMzU1MDogJ0RPVUJMRScsXG4gICAgMzM5MjI6ICdET1VCTEUnLFxuICAgIDM0MjY0OiAnRE9VQkxFJyxcbiAgICAzNDY2NTogJ0xPTkcnLFxuICAgIDM0NzM1OiAnU0hPUlQnLFxuICAgIDM0NzM2OiAnRE9VQkxFJyxcbiAgICAzNDczNzogJ0FTQ0lJJyxcbiAgICA0MjExMzogJ0FTQ0lJJyxcbn07XG5leHBvcnQgY29uc3QgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMgPSB7XG4gICAgV2hpdGVJc1plcm86IDAsXG4gICAgQmxhY2tJc1plcm86IDEsXG4gICAgUkdCOiAyLFxuICAgIFBhbGV0dGU6IDMsXG4gICAgVHJhbnNwYXJlbmN5TWFzazogNCxcbiAgICBDTVlLOiA1LFxuICAgIFlDYkNyOiA2LFxuICAgIENJRUxhYjogOCxcbiAgICBJQ0NMYWI6IDksXG59O1xuZXhwb3J0IGNvbnN0IEV4dHJhU2FtcGxlc1ZhbHVlcyA9IHtcbiAgICBVbnNwZWNpZmllZDogMCxcbiAgICBBc3NvY2FscGhhOiAxLFxuICAgIFVuYXNzYWxwaGE6IDIsXG59O1xuZXhwb3J0IGNvbnN0IExlcmNQYXJhbWV0ZXJzID0ge1xuICAgIFZlcnNpb246IDAsXG4gICAgQWRkQ29tcHJlc3Npb246IDEsXG59O1xuZXhwb3J0IGNvbnN0IExlcmNBZGRDb21wcmVzc2lvbiA9IHtcbiAgICBOb25lOiAwLFxuICAgIERlZmxhdGU6IDEsXG4gICAgWnN0YW5kYXJkOiAyLFxufTtcbmV4cG9ydCBjb25zdCBnZW9LZXlOYW1lcyA9IC8qKiBAdHlwZSB7Y29uc3R9ICovICh7XG4gICAgMTAyNDogJ0dUTW9kZWxUeXBlR2VvS2V5JyxcbiAgICAxMDI1OiAnR1RSYXN0ZXJUeXBlR2VvS2V5JyxcbiAgICAxMDI2OiAnR1RDaXRhdGlvbkdlb0tleScsXG4gICAgMjA0ODogJ0dlb2dyYXBoaWNUeXBlR2VvS2V5JyxcbiAgICAyMDQ5OiAnR2VvZ0NpdGF0aW9uR2VvS2V5JyxcbiAgICAyMDUwOiAnR2VvZ0dlb2RldGljRGF0dW1HZW9LZXknLFxuICAgIDIwNTE6ICdHZW9nUHJpbWVNZXJpZGlhbkdlb0tleScsXG4gICAgMjA1MjogJ0dlb2dMaW5lYXJVbml0c0dlb0tleScsXG4gICAgMjA1MzogJ0dlb2dMaW5lYXJVbml0U2l6ZUdlb0tleScsXG4gICAgMjA1NDogJ0dlb2dBbmd1bGFyVW5pdHNHZW9LZXknLFxuICAgIDIwNTU6ICdHZW9nQW5ndWxhclVuaXRTaXplR2VvS2V5JyxcbiAgICAyMDU2OiAnR2VvZ0VsbGlwc29pZEdlb0tleScsXG4gICAgMjA1NzogJ0dlb2dTZW1pTWFqb3JBeGlzR2VvS2V5JyxcbiAgICAyMDU4OiAnR2VvZ1NlbWlNaW5vckF4aXNHZW9LZXknLFxuICAgIDIwNTk6ICdHZW9nSW52RmxhdHRlbmluZ0dlb0tleScsXG4gICAgMjA2MDogJ0dlb2dBemltdXRoVW5pdHNHZW9LZXknLFxuICAgIDIwNjE6ICdHZW9nUHJpbWVNZXJpZGlhbkxvbmdHZW9LZXknLFxuICAgIDIwNjI6ICdHZW9nVE9XR1M4NEdlb0tleScsXG4gICAgMzA3MjogJ1Byb2plY3RlZENTVHlwZUdlb0tleScsXG4gICAgMzA3MzogJ1BDU0NpdGF0aW9uR2VvS2V5JyxcbiAgICAzMDc0OiAnUHJvamVjdGlvbkdlb0tleScsXG4gICAgMzA3NTogJ1Byb2pDb29yZFRyYW5zR2VvS2V5JyxcbiAgICAzMDc2OiAnUHJvakxpbmVhclVuaXRzR2VvS2V5JyxcbiAgICAzMDc3OiAnUHJvakxpbmVhclVuaXRTaXplR2VvS2V5JyxcbiAgICAzMDc4OiAnUHJvalN0ZFBhcmFsbGVsMUdlb0tleScsXG4gICAgMzA3OTogJ1Byb2pTdGRQYXJhbGxlbDJHZW9LZXknLFxuICAgIDMwODA6ICdQcm9qTmF0T3JpZ2luTG9uZ0dlb0tleScsXG4gICAgMzA4MTogJ1Byb2pOYXRPcmlnaW5MYXRHZW9LZXknLFxuICAgIDMwODI6ICdQcm9qRmFsc2VFYXN0aW5nR2VvS2V5JyxcbiAgICAzMDgzOiAnUHJvakZhbHNlTm9ydGhpbmdHZW9LZXknLFxuICAgIDMwODQ6ICdQcm9qRmFsc2VPcmlnaW5Mb25nR2VvS2V5JyxcbiAgICAzMDg1OiAnUHJvakZhbHNlT3JpZ2luTGF0R2VvS2V5JyxcbiAgICAzMDg2OiAnUHJvakZhbHNlT3JpZ2luRWFzdGluZ0dlb0tleScsXG4gICAgMzA4NzogJ1Byb2pGYWxzZU9yaWdpbk5vcnRoaW5nR2VvS2V5JyxcbiAgICAzMDg4OiAnUHJvakNlbnRlckxvbmdHZW9LZXknLFxuICAgIDMwODk6ICdQcm9qQ2VudGVyTGF0R2VvS2V5JyxcbiAgICAzMDkwOiAnUHJvakNlbnRlckVhc3RpbmdHZW9LZXknLFxuICAgIDMwOTE6ICdQcm9qQ2VudGVyTm9ydGhpbmdHZW9LZXknLFxuICAgIDMwOTI6ICdQcm9qU2NhbGVBdE5hdE9yaWdpbkdlb0tleScsXG4gICAgMzA5MzogJ1Byb2pTY2FsZUF0Q2VudGVyR2VvS2V5JyxcbiAgICAzMDk0OiAnUHJvakF6aW11dGhBbmdsZUdlb0tleScsXG4gICAgMzA5NTogJ1Byb2pTdHJhaWdodFZlcnRQb2xlTG9uZ0dlb0tleScsXG4gICAgMzA5NjogJ1Byb2pSZWN0aWZpZWRHcmlkQW5nbGVHZW9LZXknLFxuICAgIDQwOTY6ICdWZXJ0aWNhbENTVHlwZUdlb0tleScsXG4gICAgNDA5NzogJ1ZlcnRpY2FsQ2l0YXRpb25HZW9LZXknLFxuICAgIDQwOTg6ICdWZXJ0aWNhbERhdHVtR2VvS2V5JyxcbiAgICA0MDk5OiAnVmVydGljYWxVbml0c0dlb0tleScsXG59KTtcbi8qKiBAdHlwZWRlZiB7Z2VvS2V5TmFtZXNba2V5b2YgdHlwZW9mIGdlb0tleU5hbWVzXX0gR2VvS2V5TmFtZSAqL1xuLyoqXG4gKiBAdHlwZSB7UmVjb3JkPEdlb0tleU5hbWUsIG51bWJlcj59XG4gKi9cbmV4cG9ydCBjb25zdCBnZW9LZXlzID0gLyoqIEB0eXBlIHtSZWNvcmQ8R2VvS2V5TmFtZSwgbnVtYmVyPn0gKi8gKHt9KTtcbmZvciAoY29uc3QgW2tleSwgbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoZ2VvS2V5TmFtZXMpKSB7XG4gICAgZ2VvS2V5c1sgLyoqIEB0eXBlIHtHZW9LZXlOYW1lfSAqLyhuYW1lKV0gPSBwYXJzZUludChrZXksIDEwKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbHMuanMubWFwIiwiaW1wb3J0IERhdGFTbGljZSBmcm9tICcuL2RhdGFzbGljZS5qcyc7XG5pbXBvcnQgeyBmaWVsZFR5cGVzLCBnZW9LZXlOYW1lcywgdGFnRGVmaW5pdGlvbnMsIHJlc29sdmVUYWcsIGdldEZpZWxkVHlwZVNpemUsIH0gZnJvbSAnLi9nbG9iYWxzLmpzJztcbi8qKlxuICogQWxsb2NhdGVzIGFuIGFwcHJvcHJpYXRlIFR5cGVkQXJyYXkgYmFzZWQgb24gdGhlIFRJRkYgZmllbGQgdHlwZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZFR5cGUgLSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnQgZnJvbSBmaWVsZFR5cGVzXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBOdW1iZXIgb2YgZWxlbWVudHMgdG8gYWxsb2NhdGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPn0gVGhlIGFsbG9jYXRlZCB0eXBlZCBhcnJheSBmb3IgdGhlIGdpdmVuIGZpZWxkIHR5cGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIHRoZSBmaWVsZCB0eXBlIGlzIGludmFsaWRcbiAqL1xuZnVuY3Rpb24gZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgY291bnQpIHtcbiAgICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuQllURTpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkFTQ0lJOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuVU5ERUZJTkVEOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNCWVRFOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0hPUlQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNTSE9SVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5MT05HOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuSUZEOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TTE9ORzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5MT05HODpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLklGRDg6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNMT05HODpcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuUkFUSU9OQUw6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGNvdW50ICogMik7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TUkFUSU9OQUw6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoY291bnQgKiAyKTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkZMT0FUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuRE9VQkxFOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkoY291bnQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEludmFsaWQgZmllbGQgdHlwZTogJHtmaWVsZFR5cGV9YCk7XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBEYXRhU2xpY2UgcmVhZCBtZXRob2QgZm9yIGEgZ2l2ZW4gZmllbGQgdHlwZS5cbiAqIEBwYXJhbSB7RGF0YVNsaWNlfSBkYXRhU2xpY2UgLSBUaGUgRGF0YVNsaWNlIGluc3RhbmNlIHRvIGdldCB0aGUgcmVhZGVyIGZyb21cbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZFR5cGUgLSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnQgZnJvbSBmaWVsZFR5cGVzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFRoZSBib3VuZCByZWFkIG1ldGhvZCAoZS5nLiwgcmVhZFVpbnQxNiwgcmVhZEZsb2F0MzIpXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiB0aGUgZmllbGQgdHlwZSBpcyBpbnZhbGlkXG4gKi9cbmZ1bmN0aW9uIGdldERhdGFTbGljZVJlYWRlcihkYXRhU2xpY2UsIGZpZWxkVHlwZSkge1xuICAgIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5CWVRFOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuQVNDSUk6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5VTkRFRklORUQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRVaW50ODtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNCWVRFOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkSW50ODtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNIT1JUOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkVWludDE2O1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU1NIT1JUOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkSW50MTY7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5MT05HOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuSUZEOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkVWludDMyO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0xPTkc6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRJbnQzMjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkxPTkc4OlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuSUZEODpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZFVpbnQ2NDtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNMT05HODpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEludDY0O1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuUkFUSU9OQUw6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRVaW50MzI7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TUkFUSU9OQUw6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRJbnQzMjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkZMT0FUOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkRmxvYXQzMjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkRPVUJMRTpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEZsb2F0NjQ7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCBmaWVsZCB0eXBlOiAke2ZpZWxkVHlwZX1gKTtcbiAgICB9XG59XG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxudWxsfSBvdXRWYWx1ZXMgLSBPcHRpb25hbCBwcmUtYWxsb2NhdGVkIG91dHB1dCBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVhZE1ldGhvZCAtIERhdGFWaWV3IHJlYWQgbWV0aG9kIChlLmcuLCBnZXRVaW50MTYpXG4gKiBAcGFyYW0ge0RhdGFTbGljZX0gZGF0YVNsaWNlIC0gU291cmNlIGRhdGEgc2xpY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZFR5cGUgLSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCAtIE51bWJlciBvZiB2YWx1ZXMgdG8gcmVhZFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIEJ5dGUgb2Zmc2V0IHRvIHN0YXJ0IHJlYWRpbmdcbiAqIEBwYXJhbSB7dHJ1ZX0gaXNBcnJheSAtIFdoZXRoZXIgdG8gYWx3YXlzIHJldHVybiBhbiBhcnJheSAodnMgc2luZ2xlIHZhbHVlKVxuICogQHJldHVybnMge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fSBUaGUgZGVjb2RlZCB2YWx1ZShzKVxuICovXG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxudWxsfSBvdXRWYWx1ZXMgLSBPcHRpb25hbCBwcmUtYWxsb2NhdGVkIG91dHB1dCBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVhZE1ldGhvZCAtIERhdGFWaWV3IHJlYWQgbWV0aG9kIChlLmcuLCBnZXRVaW50MTYpXG4gKiBAcGFyYW0ge0RhdGFTbGljZX0gZGF0YVNsaWNlIC0gU291cmNlIGRhdGEgc2xpY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZFR5cGUgLSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCAtIE51bWJlciBvZiB2YWx1ZXMgdG8gcmVhZFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIEJ5dGUgb2Zmc2V0IHRvIHN0YXJ0IHJlYWRpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzQXJyYXldIC0gV2hldGhlciB0byBhbHdheXMgcmV0dXJuIGFuIGFycmF5ICh2cyBzaW5nbGUgdmFsdWUpXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj58c3RyaW5nfG51bWJlcn0gVGhlIGRlY29kZWQgdmFsdWUocylcbiAqL1xuLyoqXG4gKiBSZWFkcyBmaWVsZCB2YWx1ZXMgZnJvbSBhIERhdGFTbGljZS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj58bnVsbH0gb3V0VmFsdWVzIC0gT3B0aW9uYWwgcHJlLWFsbG9jYXRlZCBvdXRwdXQgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlYWRNZXRob2QgLSBEYXRhVmlldyByZWFkIG1ldGhvZCAoZS5nLiwgZ2V0VWludDE2KVxuICogQHBhcmFtIHtEYXRhU2xpY2V9IGRhdGFTbGljZSAtIFNvdXJjZSBkYXRhIHNsaWNlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuRmllbGRUeXBlfSBmaWVsZFR5cGUgLSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCAtIE51bWJlciBvZiB2YWx1ZXMgdG8gcmVhZFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIEJ5dGUgb2Zmc2V0IHRvIHN0YXJ0IHJlYWRpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzQXJyYXldIC0gV2hldGhlciB0byBhbHdheXMgcmV0dXJuIGFuIGFycmF5ICh2cyBzaW5nbGUgdmFsdWUpXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj58c3RyaW5nfG51bWJlcn0gVGhlIGRlY29kZWQgdmFsdWUocylcbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWVzKG91dFZhbHVlcyA9IG51bGwsIHJlYWRNZXRob2QsIGRhdGFTbGljZSwgZmllbGRUeXBlLCBjb3VudCwgb2Zmc2V0LCBpc0FycmF5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBmaWVsZFR5cGVMZW5ndGggPSBnZXRGaWVsZFR5cGVTaXplKGZpZWxkVHlwZSk7XG4gICAgY29uc3QgdmFsdWVzID0gb3V0VmFsdWVzIHx8IGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIGNvdW50KTtcbiAgICAvLyBjb25zdCByZWFkTWV0aG9kID0gZ2V0RGF0YVNsaWNlUmVhZGVyKGRhdGFTbGljZSwgZmllbGRUeXBlKTtcbiAgICBjb25zdCBpc1JhdGlvbmFsID0gKGZpZWxkVHlwZSA9PT0gZmllbGRUeXBlcy5SQVRJT05BTCB8fCBmaWVsZFR5cGUgPT09IGZpZWxkVHlwZXMuU1JBVElPTkFMKTtcbiAgICAvLyBub3JtYWwgZmllbGRzXG4gICAgaWYgKCFpc1JhdGlvbmFsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0ICsgKGkgKiBmaWVsZFR5cGVMZW5ndGgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gUkFUSU9OQUwgb3IgU1JBVElPTkFMXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMikge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0ICsgKGkgKiBmaWVsZFR5cGVMZW5ndGgpKTtcbiAgICAgICAgICAgIHZhbHVlc1tpICsgMV0gPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQgKyAoKGkgKiBmaWVsZFR5cGVMZW5ndGgpICsgNCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmaWVsZFR5cGUgPT09IGZpZWxkVHlwZXMuQVNDSUkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKS5kZWNvZGUoLyoqIEB0eXBlIHtVaW50OEFycmF5fSAqLyAodmFsdWVzKSk7XG4gICAgfVxuICAgIGlmIChjb3VudCA9PT0gMSAmJiAhaXNBcnJheSAmJiAhaXNSYXRpb25hbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuLyoqXG4gKiBMYXppbHktbG9hZGVkIGFycmF5IGZvciBsYXJnZSBUSUZGIGZpZWxkIHZhbHVlcyB0aGF0IGFyZSBmZXRjaGVkIG9uLWRlbWFuZC5cbiAqIFN1cHBvcnRzIGxvYWRpbmcgaW5kaXZpZHVhbCBpbmRpY2VzIG9yIHRoZSBlbnRpcmUgYXJyYXkuIFVzZXMgYSBiaXRtYXAgdG8gdHJhY2tcbiAqIHdoaWNoIHZhbHVlcyBoYXZlIGJlZW4gbG9hZGVkIHRvIGF2b2lkIHJlZHVuZGFudCBmZXRjaGVzLlxuICovXG5jbGFzcyBEZWZlcnJlZEFycmF5IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRGVmZXJyZWRBcnJheSBmb3IgbGF6eS1sb2FkaW5nIG9mIGxhcmdlIFRJRkYgZmllbGQgYXJyYXlzLlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9zb3VyY2UvYmFzZXNvdXJjZS5qc1wiKS5CYXNlU291cmNlfSBzb3VyY2UgLSBEYXRhIHNvdXJjZSBmb3IgZmV0Y2hpbmdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlPZmZzZXQgLSBCeXRlIG9mZnNldCB3aGVyZSB0aGUgYXJyYXkgZGF0YSBzdGFydHNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiAtIEVuZGlhbm5lc3Mgb2YgdGhlIGRhdGFcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuRmllbGRUeXBlfSBmaWVsZFR5cGUgLSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gTnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBhcnJheVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSwgYXJyYXlPZmZzZXQsIGxpdHRsZUVuZGlhbiwgZmllbGRUeXBlLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuYXJyYXlPZmZzZXQgPSBhcnJheU9mZnNldDtcbiAgICAgICAgdGhpcy5saXR0bGVFbmRpYW4gPSBsaXR0bGVFbmRpYW47XG4gICAgICAgIHRoaXMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kYXRhID0gZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5pdGVtU2l6ZSA9IGdldEZpZWxkVHlwZVNpemUoZmllbGRUeXBlKTtcbiAgICAgICAgdGhpcy5tYXNrQml0bWFwID0gbmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIDgpKTtcbiAgICAgICAgdGhpcy5mZXRjaEluZGV4UHJvbWlzZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZnVsbEZldGNoUHJvbWlzZSA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWRzIGFsbCB2YWx1ZXMgaW4gdGhlIGRlZmVycmVkIGFycmF5IGF0IG9uY2UuXG4gICAgICogU3Vic2VxdWVudCBjYWxscyByZXR1cm4gdGhlIHNhbWUgcHJvbWlzZSB0byBhdm9pZCByZWR1bmRhbnQgZmV0Y2hlcy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPj59IFByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSBmdWxseSBsb2FkZWQgYXJyYXlcbiAgICAgKi9cbiAgICBhc3luYyBsb2FkQWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuZnVsbEZldGNoUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5mdWxsRmV0Y2hQcm9taXNlID0gdGhpcy5zb3VyY2UuZmV0Y2goW3tcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLmFycmF5T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuaXRlbVNpemUgKiB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB9XSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTbGljZSA9IG5ldyBEYXRhU2xpY2UoZGF0YVswXSwgdGhpcy5hcnJheU9mZnNldCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGdldFZhbHVlcyh0aGlzLmRhdGEsIGdldERhdGFTbGljZVJlYWRlcihkYXRhU2xpY2UsIHRoaXMuZmllbGRUeXBlKSwgZGF0YVNsaWNlLCB0aGlzLmZpZWxkVHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMuYXJyYXlPZmZzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIE1hcmsgYWxsIGl0ZW1zIGFzIGxvYWRlZCBpbiB0aGUgYml0bWFwXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrQml0bWFwLmZpbGwoMHhGRik7XG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgYW55IHBlbmRpbmcgaW5kaXZpZHVhbCBmZXRjaCBwcm9taXNlcyBzaW5jZSBhbGwgZGF0YSBpcyBub3cgbG9hZGVkXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaEluZGV4UHJvbWlzZXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbEZldGNoUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZHMgYW5kIHJldHVybnMgYSBzaW5nbGUgdmFsdWUgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSBsb2FkZWQsIHJldHVybnMgaXQgaW1tZWRpYXRlbHkuIE90aGVyd2lzZSwgZmV0Y2hlcyBpdFxuICAgICAqIGZyb20gdGhlIHNvdXJjZS4gTXVsdGlwbGUgY2FsbHMgZm9yIHRoZSBzYW1lIGluZGV4IHJldXNlIHRoZSBzYW1lIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gWmVyby1iYXNlZCBpbmRleCBvZiB0aGUgdmFsdWUgdG8gbG9hZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcnxiaWdpbnQ+fSBQcm9taXNlIHJlc29sdmluZyB0byB0aGUgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgaW5kZXggaXMgb3V0IG9mIGJvdW5kc1xuICAgICAqL1xuICAgIGFzeW5jIGdldChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBJbmRleCAke2luZGV4fSBvdXQgb2YgYm91bmRzIGZvciBsZW5ndGggJHt0aGlzLmRhdGEubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ5dGVJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcbiAgICAgICAgY29uc3QgYml0TWFzayA9IDEgPDwgaW5kZXggJSA4O1xuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmFycmF5T2Zmc2V0ICsgKGluZGV4ICogdGhpcy5pdGVtU2l6ZSk7XG4gICAgICAgIGlmICgodGhpcy5tYXNrQml0bWFwW2J5dGVJbmRleF0gJiBiaXRNYXNrKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZldGNoSW5kZXhQcm9taXNlcy5oYXMoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hQcm9taXNlID0gdGhpcy5zb3VyY2UuZmV0Y2goW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5pdGVtU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgfV0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVNsaWNlID0gbmV3IERhdGFTbGljZShkYXRhWzBdLCB0aGlzLmFycmF5T2Zmc2V0ICsgKGluZGV4ICogdGhpcy5pdGVtU2l6ZSksIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZE1ldGhvZCA9IGdldERhdGFTbGljZVJlYWRlcihkYXRhU2xpY2UsIHRoaXMuZmllbGRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza0JpdG1hcFtieXRlSW5kZXhdIHw9IGJpdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hJbmRleFByb21pc2VzLmRlbGV0ZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoSW5kZXhQcm9taXNlcy5zZXQoaW5kZXgsIGZldGNoUHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaEluZGV4UHJvbWlzZXMuZ2V0KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VGaWxlRGlyZWN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gSW1hZ2VGaWxlRGlyZWN0b3J5LlxuICAgICAqIEBwYXJhbSB7TWFwPHN0cmluZ3xudW1iZXIsIG51bWJlcnxzdHJpbmd8QXJyYXk8bnVtYmVyfHN0cmluZz4+fSBhY3R1YWxpemVkRmllbGRzIHRoZSBmaWxlIGRpcmVjdG9yeSxcbiAgICAgKiBtYXBwaW5nIHRhZyBuYW1lcyB0byB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmd8bnVtYmVyLCBGdW5jdGlvbj59IGRlZmVycmVkRmllbGRzIHRoZSBkZWZlcnJlZCBmaWVsZHMsIG1hcHBpbmcgdGFnIG5hbWVzIHRvIGFzeW5jIGZ1bmN0aW9uc1xuICAgICAqIEBwYXJhbSB7TWFwPHN0cmluZ3xudW1iZXIsIERlZmVycmVkQXJyYXk+fSBkZWZlcnJlZEFycmF5cyB0aGUgZGVmZXJyZWQgYXJyYXlzLCBtYXBwaW5nIHRhZyBuYW1lcyB0b1xuICAgICAqIERlZmVycmVkQXJyYXkgb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0SUZEQnl0ZU9mZnNldCB0aGUgYnl0ZSBvZmZzZXQgdG8gdGhlIG5leHQgSUZEXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWN0dWFsaXplZEZpZWxkcywgZGVmZXJyZWRGaWVsZHMsIGRlZmVycmVkQXJyYXlzLCBuZXh0SUZEQnl0ZU9mZnNldCkge1xuICAgICAgICB0aGlzLmFjdHVhbGl6ZWRGaWVsZHMgPSBhY3R1YWxpemVkRmllbGRzO1xuICAgICAgICB0aGlzLmRlZmVycmVkRmllbGRzID0gZGVmZXJyZWRGaWVsZHM7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRGaWVsZHNCZWluZ1Jlc29sdmVkID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmRlZmVycmVkQXJyYXlzID0gZGVmZXJyZWRBcnJheXM7XG4gICAgICAgIHRoaXMubmV4dElGREJ5dGVPZmZzZXQgPSBuZXh0SUZEQnl0ZU9mZnNldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLlRhZ05hbWV8bnVtYmVyfSB0YWdJZGVudGlmaWVyIFRoZSBmaWVsZCB0YWcgSUQgb3IgbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIHRoZSBmaWVsZCBleGlzdHMgKGFjdHVhbGl6ZWQgb3IgZGVmZXJyZWQpXG4gICAgICovXG4gICAgaGFzVGFnKHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgICAgY29uc3QgdGFnID0gcmVzb2x2ZVRhZyh0YWdJZGVudGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsaXplZEZpZWxkcy5oYXModGFnKSB8fCB0aGlzLmRlZmVycmVkRmllbGRzLmhhcyh0YWcpIHx8IHRoaXMuZGVmZXJyZWRBcnJheXMuaGFzKHRhZyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmNocm9ub3VzbHkgcmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBnaXZlbiB0YWcuIElmIGl0IGlzIGRlZmVycmVkLCBhbiBlcnJvciBpcyB0aHJvd24uXG4gICAgICogQHRlbXBsYXRlIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkVhZ2VyVGFnTmFtZSB8IGltcG9ydCgnLi9nbG9iYWxzLmpzJykuRWFnZXJUYWd9IFtUPWFueV1cbiAgICAgKiBAcGFyYW0ge1R9IHRhZ0lkZW50aWZpZXIgVGhlIGZpZWxkIHRhZyBJRCBvciBuYW1lXG4gICAgICogQHJldHVybnMge1QgZXh0ZW5kcyBpbXBvcnQoJy4vZ2xvYmFscy5qcycpLlRhZ05hbWUgPyAoaW1wb3J0KCcuL2dsb2JhbHMuanMnKS5UYWdWYWx1ZTxUPiB8IHVuZGVmaW5lZCkgOiBhbnl9XG4gICAgICogdGhlIGZpZWxkIHZhbHVlLFxuICAgICAqIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgdGFnIGlzIGRlZmVycmVkIGFuZCByZXF1aXJlcyBhc3luY2hyb25vdXMgbG9hZGluZ1xuICAgICAqL1xuICAgIGdldFZhbHVlKHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgICAgY29uc3QgdGFnID0gcmVzb2x2ZVRhZyh0YWdJZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKHRoaXMuZGVmZXJyZWRGaWVsZHMuaGFzKHRhZykgfHwgdGhpcy5kZWZlcnJlZEFycmF5cy5oYXModGFnKSkge1xuICAgICAgICAgICAgY29uc3QgdGFnRGVmID0gdGFnRGVmaW5pdGlvbnNbdGFnXTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdEZWY/Lm5hbWUgfHwgYFRhZyR7dGFnfWA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZpZWxkICcke3RhZ05hbWV9JyAoJHt0YWd9KSBpcyBkZWZlcnJlZC4gVXNlIGxvYWRWYWx1ZSgpIHRvIGxvYWQgaXQgYXN5bmNocm9ub3VzbHkuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuaGFzKHRhZykpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodGhpcy5hY3R1YWxpemVkRmllbGRzLmdldCh0YWcpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBnaXZlbiB0YWcuIElmIGl0IGlzIGRlZmVycmVkLCBpdCB3aWxsIGJlIGxvYWRlZCBmaXJzdC5cbiAgICAgKiBAdGVtcGxhdGUge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuVGFnTmFtZX0gW1Q9YW55XVxuICAgICAqIEBwYXJhbSB7VHxudW1iZXJ9IHRhZ0lkZW50aWZpZXIgVGhlIGZpZWxkIHRhZyBJRCBvciBuYW1lXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VCBleHRlbmRzIGltcG9ydCgnLi9nbG9iYWxzLmpzJykuVGFnTmFtZSA/IChpbXBvcnQoJy4vZ2xvYmFscy5qcycpLlRhZ1ZhbHVlPFQ+IHwgdW5kZWZpbmVkKSA6IGFueT59XG4gICAgICogICB0aGUgZmllbGQgdmFsdWUsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgICAqL1xuICAgIGFzeW5jIGxvYWRWYWx1ZSh0YWdJZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHJlc29sdmVUYWcodGFnSWRlbnRpZmllcik7XG4gICAgICAgIGlmICh0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuaGFzKHRhZykpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHRoaXMuYWN0dWFsaXplZEZpZWxkcy5nZXQodGFnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVmZXJyZWRGaWVsZHNCZWluZ1Jlc29sdmVkLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh0aGlzLmRlZmVycmVkRmllbGRzQmVpbmdSZXNvbHZlZC5nZXQodGFnKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGVyRm4gPSB0aGlzLmRlZmVycmVkRmllbGRzLmdldCh0YWcpO1xuICAgICAgICBpZiAobG9hZGVyRm4pIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWRGaWVsZHMuZGVsZXRlKHRhZyk7XG4gICAgICAgICAgICAvLyBTZXQgcHJvbWlzZSBCRUZPUkUgc3RhcnRpbmcgYXN5bmMgd29yayB0byBwcmV2ZW50IHJhY2UgY29uZGl0aW9uc1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQcm9taXNlID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGxvYWRlckZuKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsaXplZEZpZWxkcy5zZXQodGFnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZXJyZWRGaWVsZHNCZWluZ1Jlc29sdmVkLmRlbGV0ZSh0YWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkRmllbGRzQmVpbmdSZXNvbHZlZC5zZXQodGFnLCB2YWx1ZVByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodmFsdWVQcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWZlcnJlZEFycmF5ID0gdGhpcy5kZWZlcnJlZEFycmF5cy5nZXQodGFnKTtcbiAgICAgICAgaWYgKGRlZmVycmVkQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGRlZmVycmVkQXJyYXkubG9hZEFsbCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh1bmRlZmluZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGF0IGEgZ2l2ZW4gaW5kZXggZm9yIGEgdGFnIHRoYXQgaXMgYW4gYXJyYXkuIElmIGl0IGlzIGRlZmVycmVkLCBpdCB3aWxsIGJlIGxvYWRlZCBmaXJzdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRhZ0lkZW50aWZpZXIgVGhlIGZpZWxkIHRhZyBJRCBvciBuYW1lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5XG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyfHN0cmluZ3xiaWdpbnR8dW5kZWZpbmVkPn0gdGhlIGZpZWxkIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleCwgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgICovXG4gICAgYXN5bmMgbG9hZFZhbHVlSW5kZXhlZCh0YWdJZGVudGlmaWVyLCBpbmRleCkge1xuICAgICAgICBjb25zdCB0YWcgPSByZXNvbHZlVGFnKHRhZ0lkZW50aWZpZXIpO1xuICAgICAgICBpZiAodGhpcy5hY3R1YWxpemVkRmllbGRzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYWN0dWFsaXplZEZpZWxkcy5nZXQodGFnKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHZhbHVlKVtpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kZWZlcnJlZEFycmF5cy5oYXModGFnKSkge1xuICAgICAgICAgICAgY29uc3QgZGVmZXJyZWRBcnJheSA9IC8qKiBAdHlwZSB7RGVmZXJyZWRBcnJheX0gKi8gKHRoaXMuZGVmZXJyZWRBcnJheXMuZ2V0KHRhZykpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkQXJyYXkuZ2V0KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhhc1RhZyh0YWcpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXMubG9hZFZhbHVlKHRhZyk7XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVtpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBHZW9USUZGIEdlb0tleURpcmVjdG9yeSB0YWcgaW50byBhIHN0cnVjdHVyZWQgb2JqZWN0LlxuICAgICAqIFRoZSBHZW9LZXlEaXJlY3RvcnkgaXMgYSBzcGVjaWFsIFRJRkYgdGFnIHRoYXQgY29udGFpbnMgZ2VvZ3JhcGhpYyBtZXRhZGF0YVxuICAgICAqIGluIGEga2V5LXZhbHVlIGZvcm1hdCBhcyBkZWZpbmVkIGJ5IHRoZSBHZW9USUZGIHNwZWNpZmljYXRpb24uXG4gICAgICogQHJldHVybnMge1BhcnRpYWw8UmVjb3JkPGltcG9ydCgnLi9nbG9iYWxzLmpzJykuR2VvS2V5TmFtZSwgKj4+fG51bGx9IFBhcnNlZCBnZW8ga2V5IGRpcmVjdG9yeVxuICAgICAqICAgICBtYXBwaW5nIGtleSBuYW1lcyB0byB2YWx1ZXMsIG9yIG51bGwgaWYgbm90IHByZXNlbnRcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgYSByZWZlcmVuY2VkIGdlbyBrZXkgdmFsdWUgY2Fubm90IGJlIHJldHJpZXZlZFxuICAgICAqL1xuICAgIHBhcnNlR2VvS2V5RGlyZWN0b3J5KCkge1xuICAgICAgICBjb25zdCByYXdHZW9LZXlEaXJlY3RvcnkgPSB0aGlzLmdldFZhbHVlKCdHZW9LZXlEaXJlY3RvcnknKTtcbiAgICAgICAgaWYgKCFyYXdHZW9LZXlEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7UGFydGlhbDxSZWNvcmQ8aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5HZW9LZXlOYW1lLCAqPj59ICovXG4gICAgICAgIGNvbnN0IGdlb0tleURpcmVjdG9yeSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gNDsgaSA8PSByYXdHZW9LZXlEaXJlY3RvcnlbM10gKiA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICggLyoqIEB0eXBlIHtSZWNvcmQ8bnVtYmVyLCBpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkdlb0tleU5hbWU+fSAqLyhnZW9LZXlOYW1lcykpW3Jhd0dlb0tleURpcmVjdG9yeVtpXV07XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5FYWdlclRhZ30gKi8gKHJhd0dlb0tleURpcmVjdG9yeVtpICsgMV0pIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHJhd0dlb0tleURpcmVjdG9yeVtpICsgMl07XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSByYXdHZW9LZXlEaXJlY3RvcnlbaSArIDNdO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXRWYWx1ZShsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZ2V0IHZhbHVlIG9mIGdlb0tleSAnJHtrZXl9Jy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZyhvZmZzZXQsIG9mZnNldCArIGNvdW50IC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlLnN1YmFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyBjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdlb0tleURpcmVjdG9yeVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdlb0tleURpcmVjdG9yeTtcbiAgICB9XG4gICAgdG9PYmplY3QoKSB7XG4gICAgICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFt0YWcsIHZhbHVlXSBvZiB0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuZW50cmllcygpKSB7XG4gICAgICAgICAgICBjb25zdCB0YWdEZWZpbml0aW9uID0gdHlwZW9mIHRhZyA9PT0gJ251bWJlcicgPyB0YWdEZWZpbml0aW9uc1t0YWddIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ0RlZmluaXRpb24gPyB0YWdEZWZpbml0aW9uLm5hbWUgOiBgVGFnJHt0YWd9YDtcbiAgICAgICAgICAgIG9ialt0YWdOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxuLyoqXG4gKiBQYXJzZXIgZm9yIEltYWdlIEZpbGUgRGlyZWN0b3JpZXMgKElGRHMpLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VGaWxlRGlyZWN0b3J5UGFyc2VyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vc291cmNlL2Jhc2Vzb3VyY2UuanNcIikuQmFzZVNvdXJjZX0gc291cmNlIHRoZSBkYXRhIHNvdXJjZSB0byBmZXRjaCBmcm9tXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW4gdGhlIGVuZGlhbm5lc3Mgb2YgdGhlIGZpbGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJpZ1RpZmYgd2hldGhlciB0aGUgZmlsZSBpcyBhIEJpZ1RJRkZcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlYWdlcj1mYWxzZV0gd2hldGhlciB0byBlYWdlcmx5IGZldGNoIGRlZmVycmVkIGZpZWxkcy5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gZmFsc2UgKGRlZmF1bHQpLCB0YWdzIGFyZSBsb2FkZWQgbGF6aWx5IG9uLWRlbWFuZC5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdHJ1ZSwgYWxsIHRhZ3MgYXJlIGxvYWRlZCBpbW1lZGlhdGVseSBkdXJpbmcgcGFyc2luZy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UsIGxpdHRsZUVuZGlhbiwgYmlnVGlmZiwgZWFnZXIgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5saXR0bGVFbmRpYW4gPSBsaXR0bGVFbmRpYW47XG4gICAgICAgIHRoaXMuYmlnVGlmZiA9IGJpZ1RpZmY7XG4gICAgICAgIHRoaXMuZWFnZXIgPSBlYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGEgRGF0YVNsaWNlIGZyb20gdGhlIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IEJ5dGUgb2Zmc2V0IG9mIHRoZSBzbGljZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBMZW5ndGggb2YgdGhlIHNsaWNlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8RGF0YVNsaWNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRTbGljZShvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBmYWxsYmFja0xlbmd0aCA9IHRoaXMuYmlnVGlmZiA/IDQwNDggOiAxMDI0O1xuICAgICAgICByZXR1cm4gbmV3IERhdGFTbGljZSgoYXdhaXQgdGhpcy5zb3VyY2UuZmV0Y2goW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHR5cGVvZiBsZW5ndGggIT09ICd1bmRlZmluZWQnID8gbGVuZ3RoIDogZmFsbGJhY2tMZW5ndGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKSlbMF0sIG9mZnNldCwgdGhpcy5saXR0bGVFbmRpYW4sIHRoaXMuYmlnVGlmZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc3RydWN0cyB0byBwYXJzZSBhbiBpbWFnZSBmaWxlIGRpcmVjdG9yeSBhdCB0aGUgZ2l2ZW4gZmlsZSBvZmZzZXQuXG4gICAgICogQXMgdGhlcmUgaXMgbm8gd2F5IHRvIGVuc3VyZSB0aGF0IGEgbG9jYXRpb24gaXMgaW5kZWVkIHRoZSBzdGFydCBvZiBhbiBJRkQsXG4gICAgICogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCB3aXRoIGNhdXRpb24gKGUuZyBvbmx5IHVzaW5nIHRoZSBJRkQgb2Zmc2V0cyBmcm9tXG4gICAgICogdGhlIGhlYWRlcnMgb3Igb3RoZXIgSUZEcykuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCB0aGUgb2Zmc2V0IHRvIHBhcnNlIHRoZSBJRkQgYXRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJbWFnZUZpbGVEaXJlY3Rvcnk+fSB0aGUgcGFyc2VkIElGRFxuICAgICAqL1xuICAgIGFzeW5jIHBhcnNlRmlsZURpcmVjdG9yeUF0KG9mZnNldCkge1xuICAgICAgICBjb25zdCBlbnRyeVNpemUgPSB0aGlzLmJpZ1RpZmYgPyAyMCA6IDEyO1xuICAgICAgICBjb25zdCBvZmZzZXRTaXplID0gdGhpcy5iaWdUaWZmID8gOCA6IDI7XG4gICAgICAgIGxldCBkYXRhU2xpY2UgPSBhd2FpdCB0aGlzLmdldFNsaWNlKG9mZnNldCk7XG4gICAgICAgIGNvbnN0IG51bURpckVudHJpZXMgPSB0aGlzLmJpZ1RpZmZcbiAgICAgICAgICAgID8gZGF0YVNsaWNlLnJlYWRVaW50NjQob2Zmc2V0KVxuICAgICAgICAgICAgOiBkYXRhU2xpY2UucmVhZFVpbnQxNihvZmZzZXQpO1xuICAgICAgICAvLyBpZiB0aGUgc2xpY2UgZG9lcyBub3QgY292ZXIgdGhlIHdob2xlIElGRCwgcmVxdWVzdCBhIGJpZ2dlciBzbGljZSwgd2hlcmUgdGhlXG4gICAgICAgIC8vIHdob2xlIElGRCBmaXRzOiBudW0gb2YgZW50cmllcyArIG4geCB0YWcgbGVuZ3RoICsgb2Zmc2V0IHRvIG5leHQgSUZEXG4gICAgICAgIGNvbnN0IGJ5dGVTaXplID0gbnVtRGlyRW50cmllcyAqIChlbnRyeVNpemUgKyAodGhpcy5iaWdUaWZmID8gMTYgOiA2KSk7XG4gICAgICAgIGlmICghZGF0YVNsaWNlLmNvdmVycyhvZmZzZXQsIGJ5dGVTaXplKSkge1xuICAgICAgICAgICAgZGF0YVNsaWNlID0gYXdhaXQgdGhpcy5nZXRTbGljZShvZmZzZXQsIGJ5dGVTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3R1YWxpemVkRmllbGRzID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBkZWZlcnJlZEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgZGVmZXJyZWRBcnJheXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIGxvb3Agb3ZlciB0aGUgSUZEIGFuZCBjcmVhdGUgYSBmaWxlIGRpcmVjdG9yeSBvYmplY3RcbiAgICAgICAgbGV0IGkgPSBvZmZzZXQgKyAodGhpcy5iaWdUaWZmID8gOCA6IDIpO1xuICAgICAgICBmb3IgKGxldCBlbnRyeUNvdW50ID0gMDsgZW50cnlDb3VudCA8IG51bURpckVudHJpZXM7IGkgKz0gZW50cnlTaXplLCArK2VudHJ5Q291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVGFnID0gZGF0YVNsaWNlLnJlYWRVaW50MTYoaSk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFR5cGUgPSAvKiogQHR5cGUge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuRmllbGRUeXBlfSAqLyAoZGF0YVNsaWNlLnJlYWRVaW50MTYoaSArIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVDb3VudCA9IHRoaXMuYmlnVGlmZlxuICAgICAgICAgICAgICAgID8gZGF0YVNsaWNlLnJlYWRVaW50NjQoaSArIDQpXG4gICAgICAgICAgICAgICAgOiBkYXRhU2xpY2UucmVhZFVpbnQzMihpICsgNCk7XG4gICAgICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGRlZmVycmVkRmllbGRWYWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGRlZmVycmVkQXJyYXkgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgZmllbGRUeXBlTGVuZ3RoID0gZ2V0RmllbGRUeXBlU2l6ZShmaWVsZFR5cGUpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWVPZmZzZXQgPSBpICsgKHRoaXMuYmlnVGlmZiA/IDEyIDogOCk7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gdGFnRGVmaW5pdGlvbnNbZmllbGRUYWddPy5pc0FycmF5O1xuICAgICAgICAgICAgY29uc3QgZWFnZXIgPSB0YWdEZWZpbml0aW9uc1tmaWVsZFRhZ10/LmVhZ2VyIHx8IHRoaXMuZWFnZXI7XG4gICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBkaXJlY3RseSBlbmNvZGVkIGluIHRoZSB0YWcgb3IgcmVmZXJzIHRvIGFcbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBleHRlcm5hbCBieXRlIHJhbmdlXG4gICAgICAgICAgICBpZiAoZmllbGRUeXBlTGVuZ3RoICogdHlwZUNvdW50IDw9ICh0aGlzLmJpZ1RpZmYgPyA4IDogNCkpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlcyA9IGdldFZhbHVlcyhnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCB0eXBlQ291bnQpLCBnZXREYXRhU2xpY2VSZWFkZXIoZGF0YVNsaWNlLCBmaWVsZFR5cGUpLCBkYXRhU2xpY2UsIGZpZWxkVHlwZSwgdHlwZUNvdW50LCB2YWx1ZU9mZnNldCwgaXNBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZXNvbHZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIGFjdHVhbCBieXRlIHJhbmdlXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsT2Zmc2V0ID0gZGF0YVNsaWNlLnJlYWRPZmZzZXQodmFsdWVPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGdldEZpZWxkVHlwZVNpemUoZmllbGRUeXBlKSAqIHR5cGVDb3VudDtcbiAgICAgICAgICAgICAgICAvLyBjaGVjaywgd2hldGhlciB3ZSBhY3R1YWxseSBjb3ZlciB0aGUgcmVmZXJlbmNlZCBieXRlIHJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFTbGljZS5jb3ZlcnMoYWN0dWFsT2Zmc2V0LCBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gZ2V0VmFsdWVzKGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIHR5cGVDb3VudCksIGdldERhdGFTbGljZVJlYWRlcihkYXRhU2xpY2UsIGZpZWxkVHlwZSksIGRhdGFTbGljZSwgZmllbGRUeXBlLCB0eXBlQ291bnQsIGFjdHVhbE9mZnNldCwgaXNBcnJheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVhZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVhZ2VyIGV2YWx1YXRpb246IGZldGNoIHRoZSBkYXRhIHJpZ2h0IG5vd1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpbnN0ZWFkIG9mIGZldGNoaW5nIHRoZSBzbGljZSByaWdodCBoZXJlLCBjb2xsZWN0IGFsbCBzbGljZXMgYW5kIGZldGNoIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgY29uam9pbmVkIHJlcXVlc3RzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGF0YVNsaWNlID0gYXdhaXQgdGhpcy5nZXRTbGljZShhY3R1YWxPZmZzZXQsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gZ2V0VmFsdWVzKGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIHR5cGVDb3VudCksIGdldERhdGFTbGljZVJlYWRlcihmaWVsZERhdGFTbGljZSwgZmllbGRUeXBlKSwgZmllbGREYXRhU2xpY2UsIGZpZWxkVHlwZSwgdHlwZUNvdW50LCBhY3R1YWxPZmZzZXQsIGlzQXJyYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkQXJyYXkgPSBuZXcgRGVmZXJyZWRBcnJheSh0aGlzLnNvdXJjZSwgYWN0dWFsT2Zmc2V0LCB0aGlzLmxpdHRsZUVuZGlhbiwgZmllbGRUeXBlLCB0eXBlQ291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRGaWVsZFZhbHVlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGF0YVNsaWNlID0gYXdhaXQgdGhpcy5nZXRTbGljZShhY3R1YWxPZmZzZXQsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVzKGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIHR5cGVDb3VudCksIGdldERhdGFTbGljZVJlYWRlcihmaWVsZERhdGFTbGljZSwgZmllbGRUeXBlKSwgZmllbGREYXRhU2xpY2UsIGZpZWxkVHlwZSwgdHlwZUNvdW50LCBhY3R1YWxPZmZzZXQsIGlzQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFjdHVhbGl6ZWRGaWVsZHMuc2V0KGZpZWxkVGFnLCBmaWVsZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWZlcnJlZEZpZWxkVmFsdWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWRGaWVsZHMuc2V0KGZpZWxkVGFnLCBkZWZlcnJlZEZpZWxkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRlZmVycmVkQXJyYXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZEFycmF5cy5zZXQoZmllbGRUYWcsIGRlZmVycmVkQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHRJRkRCeXRlT2Zmc2V0ID0gZGF0YVNsaWNlLnJlYWRPZmZzZXQob2Zmc2V0ICsgb2Zmc2V0U2l6ZSArIChlbnRyeVNpemUgKiBudW1EaXJFbnRyaWVzKSk7XG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2VGaWxlRGlyZWN0b3J5KGFjdHVhbGl6ZWRGaWVsZHMsIGRlZmVycmVkRmllbGRzLCBkZWZlcnJlZEFycmF5cywgbmV4dElGREJ5dGVPZmZzZXQpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlZmlsZWRpcmVjdG9yeS5qcy5tYXAiLCIvKipcbiAqIEBtb2R1bGUgcmVzYW1wbGVcbiAqL1xuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXNQZXJQaXhlbD0xXVxuICovXG5mdW5jdGlvbiBjb3B5TmV3U2l6ZShhcnJheSwgd2lkdGgsIGhlaWdodCwgc2FtcGxlc1BlclBpeGVsID0gMSkge1xuICAgIHJldHVybiBuZXcgKE9iamVjdC5nZXRQcm90b3R5cGVPZihhcnJheSkuY29uc3RydWN0b3IpKHdpZHRoICogaGVpZ2h0ICogc2FtcGxlc1BlclBpeGVsKTtcbn1cbi8qKlxuICogUmVzYW1wbGUgdGhlIGlucHV0IGFycmF5cyB1c2luZyBuZWFyZXN0IG5laWdoYm9yIHZhbHVlIHNlbGVjdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlbXX0gdmFsdWVBcnJheXMgVGhlIGlucHV0IGFycmF5cyB0byByZXNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGluV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gaW5IZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dFdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dEhlaWdodCBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlbXX0gVGhlIHJlc2FtcGxlZCByYXN0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNhbXBsZU5lYXJlc3QodmFsdWVBcnJheXMsIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0KSB7XG4gICAgY29uc3QgcmVsWCA9IGluV2lkdGggLyBvdXRXaWR0aDtcbiAgICBjb25zdCByZWxZID0gaW5IZWlnaHQgLyBvdXRIZWlnaHQ7XG4gICAgcmV0dXJuIHZhbHVlQXJyYXlzLm1hcCgoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBjb3B5TmV3U2l6ZShhcnJheSwgb3V0V2lkdGgsIG91dEhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgb3V0SGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIGNvbnN0IGN5ID0gTWF0aC5taW4oTWF0aC5yb3VuZChyZWxZICogeSksIGluSGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG91dFdpZHRoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjeCA9IE1hdGgubWluKE1hdGgucm91bmQocmVsWCAqIHgpLCBpbldpZHRoIC0gMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhcnJheVsoY3kgKiBpbldpZHRoKSArIGN4XTtcbiAgICAgICAgICAgICAgICBuZXdBcnJheVsoeSAqIG91dFdpZHRoKSArIHhdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0pO1xufVxuLy8gc2ltcGxlIGxpbmVhciBpbnRlcnBvbGF0aW9uLCBjb2RlIGZyb206XG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfaW50ZXJwb2xhdGlvbiNQcm9ncmFtbWluZ19sYW5ndWFnZV9zdXBwb3J0XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2MFxuICogQHBhcmFtIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICovXG5mdW5jdGlvbiBsZXJwKHYwLCB2MSwgdCkge1xuICAgIHJldHVybiAoKDEgLSB0KSAqIHYwKSArICh0ICogdjEpO1xufVxuLyoqXG4gKiBSZXNhbXBsZSB0aGUgaW5wdXQgYXJyYXlzIHVzaW5nIGJpbGluZWFyIGludGVycG9sYXRpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5W119IHZhbHVlQXJyYXlzIFRoZSBpbnB1dCBhcnJheXMgdG8gcmVzYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGluSGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRXaWR0aCBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRIZWlnaHQgVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHJldHVybnMge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5W119IFRoZSByZXNhbXBsZWQgcmFzdGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzYW1wbGVCaWxpbmVhcih2YWx1ZUFycmF5cywgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQpIHtcbiAgICBjb25zdCByZWxYID0gaW5XaWR0aCAvIG91dFdpZHRoO1xuICAgIGNvbnN0IHJlbFkgPSBpbkhlaWdodCAvIG91dEhlaWdodDtcbiAgICByZXR1cm4gdmFsdWVBcnJheXMubWFwKChhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcnJheSA9IGNvcHlOZXdTaXplKGFycmF5LCBvdXRXaWR0aCwgb3V0SGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBvdXRIZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgY29uc3QgcmF3WSA9IHJlbFkgKiB5O1xuICAgICAgICAgICAgY29uc3QgeWwgPSBNYXRoLmZsb29yKHJhd1kpO1xuICAgICAgICAgICAgY29uc3QgeWggPSBNYXRoLm1pbihNYXRoLmNlaWwocmF3WSksIChpbkhlaWdodCAtIDEpKTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgb3V0V2lkdGg7ICsreCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhd1ggPSByZWxYICogeDtcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IHJhd1ggJSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhsID0gTWF0aC5mbG9vcihyYXdYKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aCA9IE1hdGgubWluKE1hdGguY2VpbChyYXdYKSwgKGluV2lkdGggLSAxKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGwgPSBhcnJheVsoeWwgKiBpbldpZHRoKSArIHhsXTtcbiAgICAgICAgICAgICAgICBjb25zdCBobCA9IGFycmF5Wyh5bCAqIGluV2lkdGgpICsgeGhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxoID0gYXJyYXlbKHloICogaW5XaWR0aCkgKyB4bF07XG4gICAgICAgICAgICAgICAgY29uc3QgaGggPSBhcnJheVsoeWggKiBpbldpZHRoKSArIHhoXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxlcnAobGVycChsbCwgaGwsIHR4KSwgbGVycChsaCwgaGgsIHR4KSwgcmF3WSAlIDEpO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5Wyh5ICogb3V0V2lkdGgpICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSk7XG59XG4vKipcbiAqIFJlc2FtcGxlIHRoZSBpbnB1dCBhcnJheXMgdXNpbmcgdGhlIHNlbGVjdGVkIHJlc2FtcGxpbmcgbWV0aG9kLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVtdfSB2YWx1ZUFycmF5cyBUaGUgaW5wdXQgYXJyYXlzIHRvIHJlc2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5XaWR0aCBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbkhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0V2lkdGggVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0SGVpZ2h0IFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kID0gJ25lYXJlc3QnXSBUaGUgZGVzaXJlZCByZXNhbXBsaW5nIG1ldGhvZFxuICogQHJldHVybnMge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5W119IFRoZSByZXNhbXBsZWQgcmFzdGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzYW1wbGUodmFsdWVBcnJheXMsIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBtZXRob2QgPSAnbmVhcmVzdCcpIHtcbiAgICBzd2l0Y2ggKG1ldGhvZC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ25lYXJlc3QnOlxuICAgICAgICAgICAgcmV0dXJuIHJlc2FtcGxlTmVhcmVzdCh2YWx1ZUFycmF5cywgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQpO1xuICAgICAgICBjYXNlICdiaWxpbmVhcic6XG4gICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICByZXR1cm4gcmVzYW1wbGVCaWxpbmVhcih2YWx1ZUFycmF5cywgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCByZXNhbXBsaW5nIG1ldGhvZDogJyR7bWV0aG9kfSdgKTtcbiAgICB9XG59XG4vKipcbiAqIFJlc2FtcGxlIHRoZSBwaXhlbCBpbnRlcmxlYXZlZCBpbnB1dCBhcnJheSB1c2luZyBuZWFyZXN0IG5laWdoYm9yIHZhbHVlIHNlbGVjdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IHZhbHVlQXJyYXkgVGhlIGlucHV0IGFycmF5IHRvIHJlc2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5XaWR0aCBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbkhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0V2lkdGggVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0SGVpZ2h0IFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBzYW1wbGVzIFRoZSBudW1iZXIgb2Ygc2FtcGxlcyBwZXIgcGl4ZWwgZm9yIHBpeGVsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmxlYXZlZCBkYXRhXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IFRoZSByZXNhbXBsZWQgcmFzdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNhbXBsZU5lYXJlc3RJbnRlcmxlYXZlZCh2YWx1ZUFycmF5LCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcykge1xuICAgIGNvbnN0IHJlbFggPSBpbldpZHRoIC8gb3V0V2lkdGg7XG4gICAgY29uc3QgcmVsWSA9IGluSGVpZ2h0IC8gb3V0SGVpZ2h0O1xuICAgIGNvbnN0IG5ld0FycmF5ID0gY29weU5ld1NpemUodmFsdWVBcnJheSwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcyk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBvdXRIZWlnaHQ7ICsreSkge1xuICAgICAgICBjb25zdCBjeSA9IE1hdGgubWluKE1hdGgucm91bmQocmVsWSAqIHkpLCBpbkhlaWdodCAtIDEpO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG91dFdpZHRoOyArK3gpIHtcbiAgICAgICAgICAgIGNvbnN0IGN4ID0gTWF0aC5taW4oTWF0aC5yb3VuZChyZWxYICogeCksIGluV2lkdGggLSAxKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlczsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZUFycmF5WyhjeSAqIGluV2lkdGggKiBzYW1wbGVzKSArIChjeCAqIHNhbXBsZXMpICsgaV07XG4gICAgICAgICAgICAgICAgbmV3QXJyYXlbKHkgKiBvdXRXaWR0aCAqIHNhbXBsZXMpICsgKHggKiBzYW1wbGVzKSArIGldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xufVxuLyoqXG4gKiBSZXNhbXBsZSB0aGUgcGl4ZWwgaW50ZXJsZWF2ZWQgaW5wdXQgYXJyYXkgdXNpbmcgYmlsaW5lYXIgaW50ZXJwb2xhdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IHZhbHVlQXJyYXkgVGhlIGlucHV0IGFycmF5IHRvIHJlc2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5XaWR0aCBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbkhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0V2lkdGggVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0SGVpZ2h0IFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBzYW1wbGVzIFRoZSBudW1iZXIgb2Ygc2FtcGxlcyBwZXIgcGl4ZWwgZm9yIHBpeGVsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmxlYXZlZCBkYXRhXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IFRoZSByZXNhbXBsZWQgcmFzdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNhbXBsZUJpbGluZWFySW50ZXJsZWF2ZWQodmFsdWVBcnJheSwgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMpIHtcbiAgICBjb25zdCByZWxYID0gaW5XaWR0aCAvIG91dFdpZHRoO1xuICAgIGNvbnN0IHJlbFkgPSBpbkhlaWdodCAvIG91dEhlaWdodDtcbiAgICBjb25zdCBuZXdBcnJheSA9IGNvcHlOZXdTaXplKHZhbHVlQXJyYXksIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgb3V0SGVpZ2h0OyArK3kpIHtcbiAgICAgICAgY29uc3QgcmF3WSA9IHJlbFkgKiB5O1xuICAgICAgICBjb25zdCB5bCA9IE1hdGguZmxvb3IocmF3WSk7XG4gICAgICAgIGNvbnN0IHloID0gTWF0aC5taW4oTWF0aC5jZWlsKHJhd1kpLCAoaW5IZWlnaHQgLSAxKSk7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgb3V0V2lkdGg7ICsreCkge1xuICAgICAgICAgICAgY29uc3QgcmF3WCA9IHJlbFggKiB4O1xuICAgICAgICAgICAgY29uc3QgdHggPSByYXdYICUgMTtcbiAgICAgICAgICAgIGNvbnN0IHhsID0gTWF0aC5mbG9vcihyYXdYKTtcbiAgICAgICAgICAgIGNvbnN0IHhoID0gTWF0aC5taW4oTWF0aC5jZWlsKHJhd1gpLCAoaW5XaWR0aCAtIDEpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlczsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGwgPSB2YWx1ZUFycmF5Wyh5bCAqIGluV2lkdGggKiBzYW1wbGVzKSArICh4bCAqIHNhbXBsZXMpICsgaV07XG4gICAgICAgICAgICAgICAgY29uc3QgaGwgPSB2YWx1ZUFycmF5Wyh5bCAqIGluV2lkdGggKiBzYW1wbGVzKSArICh4aCAqIHNhbXBsZXMpICsgaV07XG4gICAgICAgICAgICAgICAgY29uc3QgbGggPSB2YWx1ZUFycmF5Wyh5aCAqIGluV2lkdGggKiBzYW1wbGVzKSArICh4bCAqIHNhbXBsZXMpICsgaV07XG4gICAgICAgICAgICAgICAgY29uc3QgaGggPSB2YWx1ZUFycmF5Wyh5aCAqIGluV2lkdGggKiBzYW1wbGVzKSArICh4aCAqIHNhbXBsZXMpICsgaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsZXJwKGxlcnAobGwsIGhsLCB0eCksIGxlcnAobGgsIGhoLCB0eCksIHJhd1kgJSAxKTtcbiAgICAgICAgICAgICAgICBuZXdBcnJheVsoeSAqIG91dFdpZHRoICogc2FtcGxlcykgKyAoeCAqIHNhbXBsZXMpICsgaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG59XG4vKipcbiAqIFJlc2FtcGxlIHRoZSBwaXhlbCBpbnRlcmxlYXZlZCBpbnB1dCBhcnJheSB1c2luZyB0aGUgc2VsZWN0ZWQgcmVzYW1wbGluZyBtZXRob2QuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSB2YWx1ZUFycmF5IFRoZSBpbnB1dCBhcnJheSB0byByZXNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGluV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gaW5IZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dFdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dEhlaWdodCBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gc2FtcGxlcyBUaGUgbnVtYmVyIG9mIHNhbXBsZXMgcGVyIHBpeGVsIGZvciBwaXhlbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmxlYXZlZCBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZCA9ICduZWFyZXN0J10gVGhlIGRlc2lyZWQgcmVzYW1wbGluZyBtZXRob2RcbiAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gVGhlIHJlc2FtcGxlZCByYXN0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNhbXBsZUludGVybGVhdmVkKHZhbHVlQXJyYXksIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzLCBtZXRob2QgPSAnbmVhcmVzdCcpIHtcbiAgICBzd2l0Y2ggKG1ldGhvZC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ25lYXJlc3QnOlxuICAgICAgICAgICAgcmV0dXJuIHJlc2FtcGxlTmVhcmVzdEludGVybGVhdmVkKHZhbHVlQXJyYXksIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzKTtcbiAgICAgICAgY2FzZSAnYmlsaW5lYXInOlxuICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgcmV0dXJuIHJlc2FtcGxlQmlsaW5lYXJJbnRlcmxlYXZlZCh2YWx1ZUFycmF5LCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHJlc2FtcGxpbmcgbWV0aG9kOiAnJHttZXRob2R9J2ApO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc2FtcGxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBmcm9tV2hpdGVJc1plcm8ocmFzdGVyLCBtYXgpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJhc3RlcjtcbiAgICBjb25zdCByZ2JSYXN0ZXIgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xuICAgIGxldCB2YWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCByYXN0ZXIubGVuZ3RoOyArK2ksIGogKz0gMykge1xuICAgICAgICB2YWx1ZSA9IDI1NiAtIChyYXN0ZXJbaV0gLyBtYXgpICogMjU2O1xuICAgICAgICByZ2JSYXN0ZXJbal0gPSB2YWx1ZTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAxXSA9IHZhbHVlO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDJdID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZ2JSYXN0ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUJsYWNrSXNaZXJvKHJhc3RlciwgbWF4KSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByYXN0ZXI7XG4gICAgY29uc3QgcmdiUmFzdGVyID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcbiAgICBsZXQgdmFsdWU7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcmFzdGVyLmxlbmd0aDsgKytpLCBqICs9IDMpIHtcbiAgICAgICAgdmFsdWUgPSAocmFzdGVyW2ldIC8gbWF4KSAqIDI1NjtcbiAgICAgICAgcmdiUmFzdGVyW2pdID0gdmFsdWU7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMV0gPSB2YWx1ZTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAyXSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmdiUmFzdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21QYWxldHRlKHJhc3RlciwgY29sb3JNYXApIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJhc3RlcjtcbiAgICBjb25zdCByZ2JSYXN0ZXIgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xuICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY29sb3JNYXAubGVuZ3RoIC8gMztcbiAgICBjb25zdCBibHVlT2Zmc2V0ID0gKGNvbG9yTWFwLmxlbmd0aCAvIDMpICogMjtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCByYXN0ZXIubGVuZ3RoOyArK2ksIGogKz0gMykge1xuICAgICAgICBjb25zdCBtYXBJbmRleCA9IHJhc3RlcltpXTtcbiAgICAgICAgcmdiUmFzdGVyW2pdID0gKGNvbG9yTWFwW21hcEluZGV4XSAvIDY1NTM2KSAqIDI1NjtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAxXSA9IChjb2xvck1hcFttYXBJbmRleCArIGdyZWVuT2Zmc2V0XSAvIDY1NTM2KSAqIDI1NjtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAyXSA9IChjb2xvck1hcFttYXBJbmRleCArIGJsdWVPZmZzZXRdIC8gNjU1MzYpICogMjU2O1xuICAgIH1cbiAgICByZXR1cm4gcmdiUmFzdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21DTVlLKGNteWtSYXN0ZXIpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNteWtSYXN0ZXI7XG4gICAgY29uc3QgcmdiUmFzdGVyID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBjbXlrUmFzdGVyLmxlbmd0aDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICAgICAgY29uc3QgYyA9IGNteWtSYXN0ZXJbaV07XG4gICAgICAgIGNvbnN0IG0gPSBjbXlrUmFzdGVyW2kgKyAxXTtcbiAgICAgICAgY29uc3QgeSA9IGNteWtSYXN0ZXJbaSArIDJdO1xuICAgICAgICBjb25zdCBrID0gY215a1Jhc3RlcltpICsgM107XG4gICAgICAgIHJnYlJhc3RlcltqXSA9IDI1NSAqICgoMjU1IC0gYykgLyAyNTYpICogKCgyNTUgLSBrKSAvIDI1Nik7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMV0gPSAyNTUgKiAoKDI1NSAtIG0pIC8gMjU2KSAqICgoMjU1IC0gaykgLyAyNTYpO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDJdID0gMjU1ICogKCgyNTUgLSB5KSAvIDI1NikgKiAoKDI1NSAtIGspIC8gMjU2KTtcbiAgICB9XG4gICAgcmV0dXJuIHJnYlJhc3Rlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWUNiQ3IoeUNiQ3JSYXN0ZXIpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHlDYkNyUmFzdGVyO1xuICAgIGNvbnN0IHJnYlJhc3RlciA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHlDYkNyUmFzdGVyLmxlbmd0aDsgaSArPSAzLCBqICs9IDMpIHtcbiAgICAgICAgY29uc3QgeSA9IHlDYkNyUmFzdGVyW2ldO1xuICAgICAgICBjb25zdCBjYiA9IHlDYkNyUmFzdGVyW2kgKyAxXTtcbiAgICAgICAgY29uc3QgY3IgPSB5Q2JDclJhc3RlcltpICsgMl07XG4gICAgICAgIHJnYlJhc3RlcltqXSA9IHkgKyAxLjQwMiAqIChjciAtIDB4ODApO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDFdID0geSAtIDAuMzQ0MTQgKiAoY2IgLSAweDgwKSAtIDAuNzE0MTQgKiAoY3IgLSAweDgwKTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAyXSA9IHkgKyAxLjc3MiAqIChjYiAtIDB4ODApO1xuICAgIH1cbiAgICByZXR1cm4gcmdiUmFzdGVyO1xufVxuY29uc3QgWG4gPSAwLjk1MDQ3O1xuY29uc3QgWW4gPSAxLjA7XG5jb25zdCBabiA9IDEuMDg4ODM7XG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRpbWF0dGVyMTUvcmdiLWxhYi9ibG9iL21hc3Rlci9jb2xvci5qc1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21DSUVMYWIoY2llTGFiUmFzdGVyKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjaWVMYWJSYXN0ZXI7XG4gICAgY29uc3QgcmdiUmFzdGVyID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBjaWVMYWJSYXN0ZXIubGVuZ3RoOyBpICs9IDMsIGogKz0gMykge1xuICAgICAgICBjb25zdCBMID0gY2llTGFiUmFzdGVyW2kgKyAwXTtcbiAgICAgICAgY29uc3QgYV8gPSAoY2llTGFiUmFzdGVyW2kgKyAxXSA8PCAyNCkgPj4gMjQ7IC8vIGNvbnZlcnNpb24gZnJvbSB1aW50OCB0byBpbnQ4XG4gICAgICAgIGNvbnN0IGJfID0gKGNpZUxhYlJhc3RlcltpICsgMl0gPDwgMjQpID4+IDI0OyAvLyBzYW1lXG4gICAgICAgIGxldCB5ID0gKEwgKyAxNikgLyAxMTY7XG4gICAgICAgIGxldCB4ID0gYV8gLyA1MDAgKyB5O1xuICAgICAgICBsZXQgeiA9IHkgLSBiXyAvIDIwMDtcbiAgICAgICAgbGV0IHI7XG4gICAgICAgIGxldCBnO1xuICAgICAgICBsZXQgYjtcbiAgICAgICAgeCA9IFhuICogKHggKiB4ICogeCA+IDAuMDA4ODU2ID8geCAqIHggKiB4IDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nyk7XG4gICAgICAgIHkgPSBZbiAqICh5ICogeSAqIHkgPiAwLjAwODg1NiA/IHkgKiB5ICogeSA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODcpO1xuICAgICAgICB6ID0gWm4gKiAoeiAqIHogKiB6ID4gMC4wMDg4NTYgPyB6ICogeiAqIHogOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3KTtcbiAgICAgICAgciA9IHggKiAzLjI0MDYgKyB5ICogLTEuNTM3MiArIHogKiAtMC40OTg2O1xuICAgICAgICBnID0geCAqIC0wLjk2ODkgKyB5ICogMS44NzU4ICsgeiAqIDAuMDQxNTtcbiAgICAgICAgYiA9IHggKiAwLjA1NTcgKyB5ICogLTAuMjA0ICsgeiAqIDEuMDU3O1xuICAgICAgICByID0gciA+IDAuMDAzMTMwOCA/IDEuMDU1ICogciAqKiAoMSAvIDIuNCkgLSAwLjA1NSA6IDEyLjkyICogcjtcbiAgICAgICAgZyA9IGcgPiAwLjAwMzEzMDggPyAxLjA1NSAqIGcgKiogKDEgLyAyLjQpIC0gMC4wNTUgOiAxMi45MiAqIGc7XG4gICAgICAgIGIgPSBiID4gMC4wMDMxMzA4ID8gMS4wNTUgKiBiICoqICgxIC8gMi40KSAtIDAuMDU1IDogMTIuOTIgKiBiO1xuICAgICAgICByZ2JSYXN0ZXJbal0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCByKSkgKiAyNTU7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMV0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBnKSkgKiAyNTU7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMl0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBiKSkgKiAyNTU7XG4gICAgfVxuICAgIHJldHVybiByZ2JSYXN0ZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZ2IuanMubWFwIiwiaW1wb3J0IHsgQmFzZVNvdXJjZSB9IGZyb20gJy4vYmFzZXNvdXJjZS5qcyc7XG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuY2xhc3MgQXJyYXlCdWZmZXJTb3VyY2UgZXh0ZW5kcyBCYXNlU291cmNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBhcnJheUJ1ZmZlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlfSBzbGljZVxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVdpdGhEYXRhPn1cbiAgICAgKi9cbiAgICBmZXRjaFNsaWNlKHNsaWNlLCBzaWduYWwpIHtcbiAgICAgICAgaWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgZGF0YTogdGhpcy5hcnJheUJ1ZmZlci5zbGljZShzbGljZS5vZmZzZXQsIHNsaWNlLm9mZnNldCArIHNsaWNlLmxlbmd0aCksXG4gICAgICAgICAgICBvZmZzZXQ6IHNsaWNlLm9mZnNldCxcbiAgICAgICAgICAgIGxlbmd0aDogc2xpY2UubGVuZ3RoLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vKiogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQnVmZmVyU291cmNlKGFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlclNvdXJjZShhcnJheUJ1ZmZlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheWJ1ZmZlci5qcy5tYXAiLCIvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNsaWNlXG4gKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoXG4gKi9cbi8qKiBAdHlwZWRlZiB7U2xpY2UgJiB7ZGF0YTogQXJyYXlCdWZmZXJMaWtlfX0gU2xpY2VXaXRoRGF0YSAqL1xuZXhwb3J0IGNsYXNzIEJhc2VTb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8U2xpY2U+fSBzbGljZXNcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyTGlrZVtdPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaChzbGljZXMsIHNpZ25hbCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc2xpY2VzLm1hcChhc3luYyAoc2xpY2UpID0+IChhd2FpdCB0aGlzLmZldGNoU2xpY2Uoc2xpY2UsIHNpZ25hbCkpLmRhdGEpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTbGljZX0gc2xpY2VcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbX3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTbGljZVdpdGhEYXRhPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaFNsaWNlKHNsaWNlLCBfc2lnbmFsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2hpbmcgb2Ygc2xpY2UgJHtzbGljZX0gbm90IHBvc3NpYmxlLCBub3QgaW1wbGVtZW50ZWRgKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlsZXNpemUgaWYgYWxyZWFkeSBkZXRlcm1pbmVkIGFuZCBudWxsIG90aGVyd2lzZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ8bnVsbH1cbiAgICAgKi9cbiAgICBnZXQgZmlsZVNpemUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgLy8gbm8tb3AgYnkgZGVmYXVsdFxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2Vzb3VyY2UuanMubWFwIiwiaW1wb3J0IFF1aWNrTFJVIGZyb20gJ3F1aWNrLWxydSc7XG5pbXBvcnQgeyBBYm9ydEVycm9yLCBBZ2dyZWdhdGVFcnJvciwgd2FpdCwgemlwIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgQmFzZVNvdXJjZSB9IGZyb20gJy4vYmFzZXNvdXJjZS5qcyc7XG5jbGFzcyBCbG9jayB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvZmZzZXQsIGxlbmd0aCwgZGF0YSkge1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSB0b3AgYnl0ZSBib3JkZXJcbiAgICAgKi9cbiAgICBnZXQgdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aDtcbiAgICB9XG59XG5jbGFzcyBCbG9ja0dyb3VwIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gYmxvY2tJZHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvZmZzZXQsIGxlbmd0aCwgYmxvY2tJZHMpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmJsb2NrSWRzID0gYmxvY2tJZHM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJsb2NrZWRTb3VyY2UgZXh0ZW5kcyBCYXNlU291cmNlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QmFzZVNvdXJjZX0gc291cmNlIFRoZSB1bmRlcmx5aW5nIHNvdXJjZSB0aGF0IHNoYWxsIGJlIGJsb2NrZWQgYW5kIGNhY2hlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmJsb2NrU2l6ZV1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuY2FjaGVTaXplXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSwgeyBibG9ja1NpemUgPSA2NTUzNiwgY2FjaGVTaXplID0gMTAwIH0gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIHRoaXMuYmxvY2tDYWNoZSA9IG5ldyBRdWlja0xSVSh7XG4gICAgICAgICAgICBtYXhTaXplOiBjYWNoZVNpemUsXG4gICAgICAgICAgICBvbkV2aWN0aW9uOiAoYmxvY2tJZCwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2aWN0ZWRCbG9ja3Muc2V0KGJsb2NrSWQsIGJsb2NrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvKiogQHR5cGUge01hcDxudW1iZXIsIEJsb2NrPn0gKi9cbiAgICAgICAgdGhpcy5ldmljdGVkQmxvY2tzID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYXBwaW5nIGJsb2NrSWQgLT4gQmxvY2sgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5ibG9ja1JlcXVlc3RzID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBzZXQgb2YgYmxvY2tJZHMgbWlzc2luZyBmb3IgdGhlIGN1cnJlbnQgcmVxdWVzdHNcbiAgICAgICAgdGhpcy5ibG9ja0lkc1RvRmV0Y2ggPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuYWJvcnRlZEJsb2NrSWRzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQgZmlsZVNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5maWxlU2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuL2Jhc2Vzb3VyY2UuanNcIikuU2xpY2VbXX0gc2xpY2VzXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyW10+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoKHNsaWNlcywgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgY29uc3QgbWlzc2luZ0Jsb2NrSWRzID0gW107XG4gICAgICAgIGNvbnN0IGFsbEJsb2NrSWRzID0gW107XG4gICAgICAgIHRoaXMuZXZpY3RlZEJsb2Nrcy5jbGVhcigpO1xuICAgICAgICBmb3IgKGNvbnN0IHsgb2Zmc2V0LCBsZW5ndGggfSBvZiBzbGljZXMpIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSBvZmZzZXQgKyBsZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB7IGZpbGVTaXplIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGZpbGVTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5taW4odG9wLCBmaWxlU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaXJzdEJsb2NrT2Zmc2V0ID0gTWF0aC5mbG9vcihvZmZzZXQgLyB0aGlzLmJsb2NrU2l6ZSkgKiB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGN1cnJlbnQgPSBmaXJzdEJsb2NrT2Zmc2V0OyBjdXJyZW50IDwgdG9wOyBjdXJyZW50ICs9IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tJZCA9IE1hdGguZmxvb3IoY3VycmVudCAvIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYmxvY2tDYWNoZS5oYXMoYmxvY2tJZCkgJiYgIXRoaXMuYmxvY2tSZXF1ZXN0cy5oYXMoYmxvY2tJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja0lkc1RvRmV0Y2guYWRkKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nQmxvY2tJZHMucHVzaChibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxvY2tSZXF1ZXN0cy5oYXMoYmxvY2tJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tSZXF1ZXN0cy5wdXNoKHRoaXMuYmxvY2tSZXF1ZXN0cy5nZXQoYmxvY2tJZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGxCbG9ja0lkcy5wdXNoKGJsb2NrSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFsbG93IGFkZGl0aW9uYWwgYmxvY2sgcmVxdWVzdHMgdG8gYWNjdW11bGF0ZVxuICAgICAgICBhd2FpdCB3YWl0KCk7XG4gICAgICAgIHRoaXMuZmV0Y2hCbG9ja3Moc2lnbmFsKTtcbiAgICAgICAgLy8gR2F0aGVyIGFsbCBvZiB0aGUgbmV3IHJlcXVlc3RzIHRoYXQgdGhpcyBmZXRjaCBjYWxsIGlzIGNvbnRyaWJ1dGluZyB0byBgZmV0Y2hgLlxuICAgICAgICBjb25zdCBtaXNzaW5nUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBibG9ja0lkIG9mIG1pc3NpbmdCbG9ja0lkcykge1xuICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3RlZCBtaXNzaW5nIGJsb2NrIGNvdWxkIGFscmVhZHkgYmUgaW4gdGhlIGNhY2hlXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBpdHMgcmVxdWVzdCBzdGlsbCBiZSBvdXRzdGFuZGluZy5cbiAgICAgICAgICAgIGlmICh0aGlzLmJsb2NrUmVxdWVzdHMuaGFzKGJsb2NrSWQpKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1JlcXVlc3RzLnB1c2godGhpcy5ibG9ja1JlcXVlc3RzLmdldChibG9ja0lkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWN0dWFsbHkgYXdhaXQgYWxsIHBlbmRpbmcgcmVxdWVzdHMgdGhhdCBhcmUgbmVlZGVkIGZvciB0aGlzIGBmZXRjaGAuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChibG9ja1JlcXVlc3RzKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKG1pc3NpbmdSZXF1ZXN0cyk7XG4gICAgICAgIC8vIFBlcmZvcm0gcmV0cmllcyBpZiBhIGJsb2NrIHdhcyBpbnRlcnJ1cHRlZCBieSBhIHByZXZpb3VzIHNpZ25hbFxuICAgICAgICBjb25zdCBhYm9ydGVkQmxvY2tSZXF1ZXN0cyA9IFtdO1xuICAgICAgICBjb25zdCBhYm9ydGVkQmxvY2tJZHMgPSBhbGxCbG9ja0lkc1xuICAgICAgICAgICAgLmZpbHRlcigoaWQpID0+IHRoaXMuYWJvcnRlZEJsb2NrSWRzLmhhcyhpZCkgfHwgIXRoaXMuYmxvY2tDYWNoZS5oYXMoaWQpKTtcbiAgICAgICAgYWJvcnRlZEJsb2NrSWRzLmZvckVhY2goKGlkKSA9PiB0aGlzLmJsb2NrSWRzVG9GZXRjaC5hZGQoaWQpKTtcbiAgICAgICAgLy8gc3RhcnQgdGhlIHJldHJ5IG9mIHNvbWUgYmxvY2tzIGlmIHJlcXVpcmVkXG4gICAgICAgIGlmIChhYm9ydGVkQmxvY2tJZHMubGVuZ3RoID4gMCAmJiBzaWduYWwgJiYgIXNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoQmxvY2tzKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrSWQgb2YgYWJvcnRlZEJsb2NrSWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmJsb2NrUmVxdWVzdHMuZ2V0KGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCbG9jayAke2Jsb2NrSWR9IGlzIG5vdCBpbiB0aGUgYmxvY2sgcmVxdWVzdHNgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWJvcnRlZEJsb2NrUmVxdWVzdHMucHVzaChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoYWJvcnRlZEJsb2NrUmVxdWVzdHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRocm93IGFuICBhYm9ydCBlcnJvclxuICAgICAgICBpZiAoc2lnbmFsICYmIHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQWJvcnRFcnJvcignUmVxdWVzdCB3YXMgYWJvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IGFsbEJsb2NrSWRzLm1hcCgoaWQpID0+IHRoaXMuYmxvY2tDYWNoZS5nZXQoaWQpIHx8IHRoaXMuZXZpY3RlZEJsb2Nrcy5nZXQoaWQpKTtcbiAgICAgICAgY29uc3QgZmFpbGVkQmxvY2tzID0gYmxvY2tzLmZpbHRlcigoaSkgPT4gIWkpO1xuICAgICAgICBpZiAoZmFpbGVkQmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFnZ3JlZ2F0ZUVycm9yKGZhaWxlZEJsb2NrcywgJ1JlcXVlc3QgZmFpbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGEgZmluYWwgTWFwLCB3aXRoIGFsbCByZXF1aXJlZCBibG9ja3MgZm9yIHRoaXMgcmVxdWVzdCB0byBzYXRpc2Z5XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQmxvY2tzID0gbmV3IE1hcCh6aXAoYWxsQmxvY2tJZHMsIGJsb2NrcykpO1xuICAgICAgICAvLyBUT0RPOiBzYXRpc2Z5IGVhY2ggc2xpY2VcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNsaWNlRGF0YShzbGljZXMsIHJlcXVpcmVkQmxvY2tzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKi9cbiAgICBmZXRjaEJsb2NrcyhzaWduYWwpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2Ugc3RpbGwgbmVlZCB0b1xuICAgICAgICBpZiAodGhpcy5ibG9ja0lkc1RvRmV0Y2guc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMuZ3JvdXBCbG9ja3ModGhpcy5ibG9ja0lkc1RvRmV0Y2gpO1xuICAgICAgICAgICAgLy8gc3RhcnQgcmVxdWVzdGluZyBzbGljZXMgb2YgZGF0YVxuICAgICAgICAgICAgY29uc3QgZ3JvdXBSZXF1ZXN0cyA9IGdyb3Vwcy5tYXAoYXN5bmMgKGdyb3VwKSA9PiAoeyAuLi5ncm91cCwgLi4uKGF3YWl0IHRoaXMuc291cmNlLmZldGNoU2xpY2UoZ3JvdXAsIHNpZ25hbCkpIH0pKTtcbiAgICAgICAgICAgIGZvciAobGV0IGdyb3VwSW5kZXggPSAwOyBncm91cEluZGV4IDwgZ3JvdXBzLmxlbmd0aDsgKytncm91cEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHNbZ3JvdXBJbmRleF07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBibG9ja0lkIG9mIGdyb3VwLmJsb2NrSWRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYW4gYXN5bmMgSUlGRSBmb3IgZWFjaCBibG9ja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrUmVxdWVzdHMuc2V0KGJsb2NrSWQsIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IFByb21pc2UuYWxsKGdyb3VwUmVxdWVzdHMpKVtncm91cEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja09mZnNldCA9IGJsb2NrSWQgKiB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvID0gYmxvY2tPZmZzZXQgLSByZXNwb25zZS5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKG8gKyB0aGlzLmJsb2NrU2l6ZSwgcmVzcG9uc2UuZGF0YS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5zbGljZShvLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IG5ldyBCbG9jayhibG9ja09mZnNldCwgZGF0YS5ieXRlTGVuZ3RoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUge0FycmF5QnVmZmVyfSAqLyAoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tDYWNoZS5zZXQoYmxvY2tJZCwgYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRlZEJsb2NrSWRzLmRlbGV0ZShibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQWJvcnRFcnJvciAmJiBlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBzaWduYWwgaGVyZSwgd2UgbmVlZCBpdCB0byBkZXRlcm1pbmUgbGF0ZXIgaWYgYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3Igd2FzIGNhdXNlZCBieSB0aGlzIHNpZ25hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIuc2lnbmFsID0gc2lnbmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrQ2FjaGUuZGVsZXRlKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0ZWRCbG9ja0lkcy5hZGQoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlcXVlc3RzLmRlbGV0ZShibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ibG9ja0lkc1RvRmV0Y2guY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2V0PG51bWJlcj59IGJsb2NrSWRzXG4gICAgICogQHJldHVybnMge0Jsb2NrR3JvdXBbXX1cbiAgICAgKi9cbiAgICBncm91cEJsb2NrcyhibG9ja0lkcykge1xuICAgICAgICBjb25zdCBzb3J0ZWRCbG9ja0lkcyA9IEFycmF5LmZyb20oYmxvY2tJZHMpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgaWYgKHNvcnRlZEJsb2NrSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyW119ICovXG4gICAgICAgIGxldCBjdXJyZW50ID0gW107XG4gICAgICAgIGxldCBsYXN0QmxvY2tJZCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrSWQgb2Ygc29ydGVkQmxvY2tJZHMpIHtcbiAgICAgICAgICAgIGlmIChsYXN0QmxvY2tJZCA9PT0gbnVsbCB8fCBsYXN0QmxvY2tJZCArIDEgPT09IGJsb2NrSWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnB1c2goYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgbGFzdEJsb2NrSWQgPSBibG9ja0lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnB1c2gobmV3IEJsb2NrR3JvdXAoY3VycmVudFswXSAqIHRoaXMuYmxvY2tTaXplLCBjdXJyZW50Lmxlbmd0aCAqIHRoaXMuYmxvY2tTaXplLCBjdXJyZW50KSk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IFtibG9ja0lkXTtcbiAgICAgICAgICAgICAgICBsYXN0QmxvY2tJZCA9IGJsb2NrSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBzLnB1c2gobmV3IEJsb2NrR3JvdXAoY3VycmVudFswXSAqIHRoaXMuYmxvY2tTaXplLCBjdXJyZW50Lmxlbmd0aCAqIHRoaXMuYmxvY2tTaXplLCBjdXJyZW50KSk7XG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9iYXNlc291cmNlLmpzXCIpLlNsaWNlW119IHNsaWNlc1xuICAgICAqIEBwYXJhbSB7TWFwPG51bWJlciwgQmxvY2s+fSBibG9ja3NcbiAgICAgKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJbXX1cbiAgICAgKi9cbiAgICByZWFkU2xpY2VEYXRhKHNsaWNlcywgYmxvY2tzKSB7XG4gICAgICAgIHJldHVybiBzbGljZXMubWFwKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvcCA9IHNsaWNlLm9mZnNldCArIHNsaWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gTWF0aC5taW4odGhpcy5maWxlU2l6ZSwgdG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrSWRMb3cgPSBNYXRoLmZsb29yKHNsaWNlLm9mZnNldCAvIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrSWRIaWdoID0gTWF0aC5mbG9vcigodG9wIC0gMSkgLyB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgICAgICBjb25zdCBzbGljZURhdGEgPSBuZXcgQXJyYXlCdWZmZXIoc2xpY2UubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlVmlldyA9IG5ldyBVaW50OEFycmF5KHNsaWNlRGF0YSk7XG4gICAgICAgICAgICBmb3IgKGxldCBibG9ja0lkID0gYmxvY2tJZExvdzsgYmxvY2tJZCA8PSBibG9ja0lkSGlnaDsgKytibG9ja0lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBibG9ja3MuZ2V0KGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYmxvY2sub2Zmc2V0IC0gc2xpY2Uub2Zmc2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcERlbHRhID0gYmxvY2sudG9wIC0gdG9wO1xuICAgICAgICAgICAgICAgIGxldCBibG9ja0lubmVyT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VJbm5lck9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHVzZWRCbG9ja0xlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrSW5uZXJPZmZzZXQgPSAtZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZUlubmVyT2Zmc2V0ID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0b3BEZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlZEJsb2NrTGVuZ3RoID0gYmxvY2subGVuZ3RoIC0gYmxvY2tJbm5lck9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZWRCbG9ja0xlbmd0aCA9IHRvcCAtIGJsb2NrLm9mZnNldCAtIGJsb2NrSW5uZXJPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrVmlldyA9IG5ldyBVaW50OEFycmF5KGJsb2NrLmRhdGEsIGJsb2NrSW5uZXJPZmZzZXQsIHVzZWRCbG9ja0xlbmd0aCk7XG4gICAgICAgICAgICAgICAgc2xpY2VWaWV3LnNldChibG9ja1ZpZXcsIHJhbmdlSW5uZXJPZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNsaWNlRGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tlZHNvdXJjZS5qcy5tYXAiLCJleHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHJlc3BvbnNlIGhhcyBhbiBvaydpc2ggc3RhdHVzIGNvZGVcbiAgICAgKi9cbiAgICBnZXQgb2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPD0gMjk5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdGF0dXMgY29kZSBvZiB0aGUgcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgc3RhdHVzIGNvZGVcbiAgICAgKi9cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGhlYWRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfaGVhZGVyTmFtZSB0aGUgaGVhZGVyIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH0gdGhlIGhlYWRlciB2YWx1ZVxuICAgICAqL1xuICAgIGdldEhlYWRlcihfaGVhZGVyTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IHRoZSByZXNwb25zZSBkYXRhIG9mIHRoZSByZXF1ZXN0XG4gICAgICovXG4gICAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZUNsaWVudCB7XG4gICAgLyoqIEBwYXJhbSB7c3RyaW5nfSB1cmwgKi9cbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmQgYSByZXF1ZXN0IHdpdGggdGhlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBbX29wdGlvbnM9e31dXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QmFzZVJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0KF9vcHRpb25zKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncmVxdWVzdCBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlLmpzLm1hcCIsImltcG9ydCB7IEJhc2VDbGllbnQsIEJhc2VSZXNwb25zZSB9IGZyb20gJy4vYmFzZS5qcyc7XG5jbGFzcyBGZXRjaFJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBCYXNlUmVzcG9uc2UgZmFjYWRlIGZvciBmZXRjaCBBUEkgUmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2Uuc3RhdHVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEhlYWRlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KG5hbWUpIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzcG9uc2UuYXJyYXlCdWZmZXJcbiAgICAgICAgICAgID8gYXdhaXQgdGhpcy5yZXNwb25zZS5hcnJheUJ1ZmZlcigpXG4gICAgICAgICAgICAvLyBGSVhNRSBDYW4gdGhpcyByZWFsbHkgaGF2ZSBhIGJ1ZmZlciBwcm9wZXJ0eT9cbiAgICAgICAgICAgIDogKGF3YWl0IC8qKiBAdHlwZSB7Kn0gKi8gKHRoaXMucmVzcG9uc2UpLmJ1ZmZlcigpKS5idWZmZXI7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGZXRjaENsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RDcmVkZW50aWFsc30gW2NyZWRlbnRpYWxzXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3JlZGVudGlhbHMpIHtcbiAgICAgICAgc3VwZXIodXJsKTtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBbb3B0aW9ucz17fV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGZXRjaFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0KHsgaGVhZGVycywgc2lnbmFsIH0gPSB7fSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzLCBjcmVkZW50aWFsczogdGhpcy5jcmVkZW50aWFscywgc2lnbmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBGZXRjaFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZXRjaC5qcy5tYXAiLCJpbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgdXJsTW9kIGZyb20gJ3VybCc7XG5pbXBvcnQgeyBCYXNlQ2xpZW50LCBCYXNlUmVzcG9uc2UgfSBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJztcbmNsYXNzIEh0dHBSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogQmFzZVJlc3BvbnNlIGZhY2FkZSBmb3Igbm9kZSBIVFRQL0hUVFBTIEFQSSBSZXNwb25zZVxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCdodHRwJykuSW5jb21pbmdNZXNzYWdlfSByZXNwb25zZVxuICAgICAqIEBwYXJhbSB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IGRhdGFQcm9taXNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UsIGRhdGFQcm9taXNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgdGhpcy5kYXRhUHJvbWlzZSA9IGRhdGFQcm9taXNlO1xuICAgIH1cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovICh0aGlzLnJlc3BvbnNlLnN0YXR1c0NvZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEhlYWRlcihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXNwb25zZS5oZWFkZXJzW25hbWVdO1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XG4gICAgfVxuICAgIGFzeW5jIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRhdGFQcm9taXNlO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSHR0cENsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gdXJsICovXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHN1cGVyKHVybCk7XG4gICAgICAgIHRoaXMucGFyc2VkVXJsID0gdXJsTW9kLnBhcnNlKHRoaXMudXJsKTtcbiAgICAgICAgdGhpcy5odHRwQXBpID0gKHRoaXMucGFyc2VkVXJsLnByb3RvY29sID09PSAnaHR0cDonID8gaHR0cCA6IGh0dHBzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBoZWFkZXJzXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIdHRwUmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdFJlcXVlc3QoaGVhZGVycywgc2lnbmFsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5odHRwQXBpLmdldCh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5wYXJzZWRVcmwsXG4gICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7VWludDhBcnJheVtdfSAqL1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sbGVjdCBjaHVua3NcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbmNhdGVuYXRlIGFsbCBjaHVua3MgYW5kIHJlc29sdmUgdGhlIHByb21pc2Ugd2l0aCB0aGUgcmVzdWx0aW5nIGJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEJ1ZmZlci5jb25jYXQoY2h1bmtzKS5idWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgSHR0cFJlc3BvbnNlKHJlc3BvbnNlLCBkYXRhUHJvbWlzZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuZGVzdHJveShuZXcgQWJvcnRFcnJvcignUmVxdWVzdCBhYm9ydGVkJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZXF1ZXN0LmRlc3Ryb3kobmV3IEFib3J0RXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0KHsgaGVhZGVycyA9IHt9LCBzaWduYWwgPSB1bmRlZmluZWQgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jb25zdHJ1Y3RSZXF1ZXN0KGhlYWRlcnMsIHNpZ25hbCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLmpzLm1hcCIsImltcG9ydCB7IEJhc2VDbGllbnQsIEJhc2VSZXNwb25zZSB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnO1xuY2xhc3MgWEhSUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIEJhc2VSZXNwb25zZSBmYWNhZGUgZm9yIFhNTEh0dHBSZXF1ZXN0XG4gICAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHhociwgZGF0YSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnhociA9IHhocjtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyLnN0YXR1cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRIZWFkZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSkgfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBYSFJDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIHN0cmluZz59IGhlYWRlcnNcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFhIUlJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RSZXF1ZXN0KGhlYWRlcnMsIHNpZ25hbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdGhpcy51cmwpO1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhoZWFkZXJzKSkge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaG9vayBzaWduYWxzXG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgWEhSUmVzcG9uc2UoeGhyLCBkYXRhKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICB4aHIub25hYm9ydCA9ICgpID0+IHJlamVjdChuZXcgQWJvcnRFcnJvcignUmVxdWVzdCBhYm9ydGVkJykpO1xuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHhoci5hYm9ydCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3QoeyBoZWFkZXJzID0ge30sIHNpZ25hbCA9IHVuZGVmaW5lZCB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNvbnN0cnVjdFJlcXVlc3QoaGVhZGVycywgc2lnbmFsKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXhoci5qcy5tYXAiLCJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgQmFzZVNvdXJjZSB9IGZyb20gJy4vYmFzZXNvdXJjZS5qcyc7XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBmZFxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmZ1bmN0aW9uIGNsb3NlQXN5bmMoZmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5jbG9zZShmZCwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmbGFnc1xuICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBtb2RlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICovXG5mdW5jdGlvbiBvcGVuQXN5bmMocGF0aCwgZmxhZ3MsIG1vZGUgPSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5vcGVuKHBhdGgsIGZsYWdzLCBtb2RlLCAoZXJyLCBmZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gZmRcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cbiAqIEByZXR1cm5zIHtQcm9taXNlPHtieXRlc1JlYWQ6IG51bWJlciwgYnVmZmVyOiBVaW50OEFycmF5fT59XG4gKi9cbmZ1bmN0aW9uIHJlYWRBc3luYyhmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5yZWFkKGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbiwgKGVyciwgYnl0ZXNSZWFkLCBvdXRCdWZmZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyBieXRlc1JlYWQsIGJ1ZmZlcjogb3V0QnVmZmVyIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmNsYXNzIEZpbGVTb3VyY2UgZXh0ZW5kcyBCYXNlU291cmNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5vcGVuUmVxdWVzdCA9IG9wZW5Bc3luYyhwYXRoLCAncicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2V9IHNsaWNlXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW19zaWduYWxdIG5vdCBpbXBsZW1lbnRlZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VXaXRoRGF0YT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hTbGljZShzbGljZSwgX3NpZ25hbCkge1xuICAgICAgICAvLyBUT0RPOiB1c2UgYHNpZ25hbGBcbiAgICAgICAgY29uc3QgZmQgPSBhd2FpdCB0aGlzLm9wZW5SZXF1ZXN0O1xuICAgICAgICBjb25zdCB7IGJ1ZmZlciB9ID0gYXdhaXQgcmVhZEFzeW5jKGZkLCBuZXcgVWludDhBcnJheShzbGljZS5sZW5ndGgpLCAwLCBzbGljZS5sZW5ndGgsIHNsaWNlLm9mZnNldCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBidWZmZXIuYnVmZmVyLFxuICAgICAgICAgICAgb2Zmc2V0OiBzbGljZS5vZmZzZXQsXG4gICAgICAgICAgICBsZW5ndGg6IHNsaWNlLmxlbmd0aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGNvbnN0IGZkID0gYXdhaXQgdGhpcy5vcGVuUmVxdWVzdDtcbiAgICAgICAgYXdhaXQgY2xvc2VBc3luYyhmZCk7XG4gICAgfVxufVxuLyoqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZpbGVTb3VyY2UocGF0aCkge1xuICAgIHJldHVybiBuZXcgRmlsZVNvdXJjZShwYXRoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGUuanMubWFwIiwiaW1wb3J0IHsgQmFzZVNvdXJjZSB9IGZyb20gJy4vYmFzZXNvdXJjZS5qcyc7XG5jbGFzcyBGaWxlUmVhZGVyU291cmNlIGV4dGVuZHMgQmFzZVNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtCbG9ifSBmaWxlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2V9IHNsaWNlXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gc2lnbmFsXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVdpdGhEYXRhPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaFNsaWNlKHNsaWNlLCBzaWduYWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB0aGlzLmZpbGUuc2xpY2Uoc2xpY2Uub2Zmc2V0LCBzbGljZS5vZmZzZXQgKyBzbGljZS5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiAvKiogQHR5cGUge0FycmF5QnVmZmVyfSAqLyAocmVhZGVyLnJlc3VsdCksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBzbGljZS5vZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBzbGljZS5sZW5ndGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSByZWplY3Q7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gcmVhZGVyLmFib3J0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBzb3VyY2UgZnJvbSBhIGdpdmVuIGZpbGUvYmxvYi5cbiAqIEBwYXJhbSB7QmxvYn0gZmlsZSBUaGUgZmlsZSBvciBibG9iIHRvIHJlYWQgZnJvbS5cbiAqIEByZXR1cm5zIHtGaWxlUmVhZGVyU291cmNlfSBUaGUgY29uc3RydWN0ZWQgc291cmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmlsZVJlYWRlclNvdXJjZShmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlUmVhZGVyU291cmNlKGZpbGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZXJlYWRlci5qcy5tYXAiLCJjb25zdCBDUkxGQ1JMRiA9ICdcXHJcXG5cXHJcXG4nO1xuLyoqXG4gKiBTaGltIGZvciAnT2JqZWN0LmZyb21FbnRyaWVzJ1xuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QXJyYXk8W3N0cmluZywgVF0+fSBpdGVtc1xuICogQHJldHVybiB7UmVjb3JkPHN0cmluZywgVD59XG4gKi9cbmZ1bmN0aW9uIGl0ZW1zVG9PYmplY3QoaXRlbXMpIHtcbiAgICBpZiAodHlwZW9mIE9iamVjdC5mcm9tRW50cmllcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhpdGVtcyk7XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgVD59ICovXG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgaXRlbXMpIHtcbiAgICAgICAgb2JqW2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuLyoqXG4gKiBQYXJzZSBIVFRQIGhlYWRlcnMgZnJvbSBhIGdpdmVuIHN0cmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRvIHBhcnNlIHRoZSBoZWFkZXJzIGZyb21cbiAqIEByZXR1cm5zIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSB0aGUgcGFyc2VkIGhlYWRlcnMgd2l0aCBsb3dlcmNhc2Uga2V5c1xuICovXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnModGV4dCkge1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8W3N0cmluZywgc3RyaW5nXT59ICovXG4gICAgY29uc3QgaXRlbXMgPSB0ZXh0XG4gICAgICAgIC5zcGxpdCgnXFxyXFxuJylcbiAgICAgICAgLm1hcCgobGluZSkgPT4ge1xuICAgICAgICBjb25zdCBrdiA9IC8qKiBAdHlwZSB7W3N0cmluZywgc3RyaW5nXX0gKi8gKGxpbmUuc3BsaXQoJzonKS5tYXAoKHN0cikgPT4gc3RyLnRyaW0oKSkpO1xuICAgICAgICBrdlswXSA9IGt2WzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBrdjtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbXNUb09iamVjdChpdGVtcyk7XG59XG4vKipcbiAqIFBhcnNlIGEgJ0NvbnRlbnQtVHlwZScgaGVhZGVyIHZhbHVlIHRvIHRoZSBjb250ZW50LXR5cGUgYW5kIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcmF3Q29udGVudFR5cGUgdGhlIHJhdyBzdHJpbmcgdG8gcGFyc2UgZnJvbVxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmd8bnVsbCwgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fX1cbiAqICAgICB0aGUgcGFyc2VkIGNvbnRlbnQgdHlwZSB3aXRoIHRoZSBmaWVsZHM6IHR5cGUgYW5kIHBhcmFtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50VHlwZShyYXdDb250ZW50VHlwZSkge1xuICAgIGlmICghcmF3Q29udGVudFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogbnVsbCwgcGFyYW1zOiB7fSB9O1xuICAgIH1cbiAgICBjb25zdCBbdHlwZSwgLi4ucmF3UGFyYW1zXSA9IHJhd0NvbnRlbnRUeXBlLnNwbGl0KCc7JykubWFwKChzKSA9PiBzLnRyaW0oKSk7XG4gICAgY29uc3QgcGFyYW1zSXRlbXMgPSAvKiogQHR5cGUge0FycmF5PFtzdHJpbmcsIHN0cmluZ10+fSAqLyAocmF3UGFyYW1zLm1hcCgocGFyYW0pID0+IHBhcmFtLnNwbGl0KCc9JykpKTtcbiAgICByZXR1cm4geyB0eXBlLCBwYXJhbXM6IGl0ZW1zVG9PYmplY3QocGFyYW1zSXRlbXMpIH07XG59XG4vKipcbiAqIFBhcnNlIGEgJ0NvbnRlbnQtUmFuZ2UnIGhlYWRlciB2YWx1ZSB0byBpdHMgc3RhcnQsIGVuZCwgYW5kIHRvdGFsIHBhcnRzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHJhd0NvbnRlbnRSYW5nZSB0aGUgcmF3IHN0cmluZyB0byBwYXJzZSBmcm9tXG4gKiBAcmV0dXJucyB7e3N0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyfX0gdGhlIHBhcnNlZCBwYXJ0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50UmFuZ2UocmF3Q29udGVudFJhbmdlKSB7XG4gICAgbGV0IHN0YXJ0ID0gTmFOO1xuICAgIGxldCBlbmQgPSBOYU47XG4gICAgbGV0IHRvdGFsID0gTmFOO1xuICAgIGlmIChyYXdDb250ZW50UmFuZ2UpIHtcbiAgICAgICAgWywgc3RhcnQsIGVuZCwgdG90YWxdID0gKHJhd0NvbnRlbnRSYW5nZS5tYXRjaCgvYnl0ZXMgKFxcZCspLShcXGQrKVxcLyhcXGQrKS8pIHx8IFtdKS5tYXAoTnVtYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgdG90YWwgfTtcbn1cbi8qKlxuICogUGFyc2VzIGEgbGlzdCBvZiBieXRlcmFuZ2VzIGZyb20gdGhlIGdpdmVuICdtdWx0aXBhcnQvYnl0ZXJhbmdlcycgSFRUUCByZXNwb25zZS5cbiAqIEVhY2ggaXRlbSBpbiB0aGUgbGlzdCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogLSBoZWFkZXJzOiB0aGUgSFRUUCBoZWFkZXJzXG4gKiAtIGRhdGE6IHRoZSBzbGljZWQgQXJyYXlCdWZmZXIgZm9yIHRoYXQgc3BlY2lmaWMgcGFydFxuICogLSBvZmZzZXQ6IHRoZSBvZmZzZXQgb2YgdGhlIGJ5dGVyYW5nZSB3aXRoaW4gaXRzIG9yaWdpbmF0aW5nIGZpbGVcbiAqIC0gbGVuZ3RoOiB0aGUgbGVuZ3RoIG9mIHRoZSBieXRlcmFuZ2VcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IHJlc3BvbnNlQXJyYXlCdWZmZXIgdGhlIHJlc3BvbnNlIHRvIGJlIHBhcnNlZCBhbmQgc3BsaXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGFyeSB0aGUgYm91bmRhcnkgc3RyaW5nIHVzZWQgdG8gc3BsaXQgdGhlIHNlY3Rpb25zXG4gKiBAcmV0dXJucyB7QXJyYXk8e2hlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIGRhdGE6IEFycmF5QnVmZmVyLCBvZmZzZXQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsIGZpbGVTaXplOiBudW1iZXJ9Pn1cbiAqICAgICB0aGUgcGFyc2VkIGJ5dGVyYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQnl0ZVJhbmdlcyhyZXNwb25zZUFycmF5QnVmZmVyLCBib3VuZGFyeSkge1xuICAgIGxldCBvZmZzZXQgPSAtMTtcbiAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCdhc2NpaScpO1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0Qm91bmRhcnkgPSBgLS0ke2JvdW5kYXJ5fWA7XG4gICAgY29uc3QgZW5kQm91bmRhcnkgPSBgJHtzdGFydEJvdW5kYXJ5fS0tYDtcbiAgICAvLyBzZWFyY2ggZm9yIHRoZSBpbml0aWFsIGJvdW5kYXJ5LCBtYXkgYmUgb2Zmc2V0IGJ5IHNvbWUgYnl0ZXNcbiAgICAvLyBUT0RPOiBtb3JlIGVmZmljaWVudCB0byBjaGVjayBmb3IgYC0tYCBpbiBieXRlcyBkaXJlY3RseVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gZGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkocmVzcG9uc2VBcnJheUJ1ZmZlciwgaSwgc3RhcnRCb3VuZGFyeS5sZW5ndGgpKTtcbiAgICAgICAgaWYgKHRleHQgPT09IHN0YXJ0Qm91bmRhcnkpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBpbml0aWFsIGJvdW5kYXJ5Jyk7XG4gICAgfVxuICAgIHdoaWxlIChvZmZzZXQgPCByZXNwb25zZUFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRlY29kZXIuZGVjb2RlKG5ldyBVaW50OEFycmF5KHJlc3BvbnNlQXJyYXlCdWZmZXIsIG9mZnNldCwgTWF0aC5taW4oc3RhcnRCb3VuZGFyeS5sZW5ndGggKyAxMDI0LCByZXNwb25zZUFycmF5QnVmZmVyLmJ5dGVMZW5ndGggLSBvZmZzZXQpKSk7XG4gICAgICAgIC8vIGJyZWFrIGlmIHdlIGFycml2ZWQgYXQgdGhlIGVuZFxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPT09IDAgfHwgdGV4dC5zdGFydHNXaXRoKGVuZEJvdW5kYXJ5KSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNzZXJ0IHRoYXQgd2UgYXJlIGFjdHVhbGx5IGRlYWxpbmcgd2l0aCBhIGJ5dGVyYW5nZSBhbmQgYXJlIGF0IHRoZSBjb3JyZWN0IG9mZnNldFxuICAgICAgICBpZiAoIXRleHQuc3RhcnRzV2l0aChzdGFydEJvdW5kYXJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJ0IGRvZXMgbm90IHN0YXJ0IHdpdGggYm91bmRhcnknKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgYSBzdWJzdHJpbmcgZnJvbSB3aGVyZSB3ZSByZWFkIHRoZSBoZWFkZXJzXG4gICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IHRleHQuc3Vic3RyKHN0YXJ0Qm91bmRhcnkubGVuZ3RoICsgMik7XG4gICAgICAgIGlmIChpbm5lclRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBmaW5kIHRoZSBkb3VibGUgbGluZWJyZWFrIHRoYXQgZGVub3RlcyB0aGUgZW5kIG9mIHRoZSBoZWFkZXJzXG4gICAgICAgIGNvbnN0IGVuZE9mSGVhZGVycyA9IGlubmVyVGV4dC5pbmRleE9mKENSTEZDUkxGKTtcbiAgICAgICAgLy8gcGFyc2UgdGhlIGhlYWRlcnMgdG8gZ2V0IHRoZSBjb250ZW50IHJhbmdlIHNpemVcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHBhcnNlSGVhZGVycyhpbm5lclRleHQuc3Vic3RyKDAsIGVuZE9mSGVhZGVycykpO1xuICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQsIHRvdGFsIH0gPSBwYXJzZUNvbnRlbnRSYW5nZShoZWFkZXJzWydjb250ZW50LXJhbmdlJ10pO1xuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UgYW5kIHRoZSBuZXh0IG9mZnNldFxuICAgICAgICBjb25zdCBzdGFydE9mRGF0YSA9IG9mZnNldCArIHN0YXJ0Qm91bmRhcnkubGVuZ3RoICsgZW5kT2ZIZWFkZXJzICsgQ1JMRkNSTEYubGVuZ3RoO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBlbmQgKyAxIC0gc3RhcnQ7XG4gICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZUFycmF5QnVmZmVyLnNsaWNlKHN0YXJ0T2ZEYXRhLCBzdGFydE9mRGF0YSArIGxlbmd0aCksXG4gICAgICAgICAgICBvZmZzZXQ6IHN0YXJ0LFxuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgZmlsZVNpemU6IHRvdGFsLFxuICAgICAgICB9KTtcbiAgICAgICAgb2Zmc2V0ID0gc3RhcnRPZkRhdGEgKyBsZW5ndGggKyA0O1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cHV0aWxzLmpzLm1hcCIsImltcG9ydCB7IHBhcnNlQnl0ZVJhbmdlcywgcGFyc2VDb250ZW50UmFuZ2UsIHBhcnNlQ29udGVudFR5cGUgfSBmcm9tICcuL2h0dHB1dGlscy5qcyc7XG5pbXBvcnQgeyBCYXNlU291cmNlIH0gZnJvbSAnLi9iYXNlc291cmNlLmpzJztcbmltcG9ydCB7IEJsb2NrZWRTb3VyY2UgfSBmcm9tICcuL2Jsb2NrZWRzb3VyY2UuanMnO1xuaW1wb3J0IHsgRmV0Y2hDbGllbnQgfSBmcm9tICcuL2NsaWVudC9mZXRjaC5qcyc7XG5pbXBvcnQgeyBYSFJDbGllbnQgfSBmcm9tICcuL2NsaWVudC94aHIuanMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJy4vY2xpZW50L2h0dHAuanMnO1xuLyoqIEBpbXBvcnQgeyBSZW1vdGVTb3VyY2VPcHRpb25zLCBCbG9ja2VkU291cmNlT3B0aW9ucyB9IGZyb20gJy4uL2dlb3RpZmYuanMnICovXG5jbGFzcyBSZW1vdGVTb3VyY2UgZXh0ZW5kcyBCYXNlU291cmNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2dlb3RpZmYuanNcIikuQmFzZUNsaWVudH0gY2xpZW50XG4gICAgICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zfSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2xpZW50LCB7IGhlYWRlcnMsIG1heFJhbmdlcyA9IDAsIGFsbG93RnVsbEZpbGUgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgICAgICB0aGlzLm1heFJhbmdlcyA9IG1heFJhbmdlcztcbiAgICAgICAgdGhpcy5hbGxvd0Z1bGxGaWxlID0gYWxsb3dGdWxsRmlsZTtcbiAgICAgICAgdGhpcy5fZmlsZVNpemUgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VbXX0gc2xpY2VzXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlckxpa2VbXT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2goc2xpY2VzLCBzaWduYWwpIHtcbiAgICAgICAgLy8gaWYgd2UgYWxsb3cgbXVsdGktcmFuZ2VzLCBzcGxpdCB0aGUgaW5jb21pbmcgcmVxdWVzdCBpbnRvIHRoYXQgbWFueSBzdWItcmVxdWVzdHNcbiAgICAgICAgLy8gYW5kIGpvaW4gdGhlbSBhZnRlcndhcmRzXG4gICAgICAgIGlmICh0aGlzLm1heFJhbmdlcyA+PSBzbGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFNsaWNlcyhzbGljZXMsIHNpZ25hbCkudGhlbigocmVzdWx0cykgPT4gcmVzdWx0cy5tYXAoKHIpID0+IHIuZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWF4UmFuZ2VzID4gMCAmJiBzbGljZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gVE9ETzogc3BsaXQgaW50byBtdWx0aXBsZSBtdWx0aS1yYW5nZSByZXF1ZXN0c1xuICAgICAgICAgICAgLy8gY29uc3Qgc3ViU2xpY2VzUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2VzLmxlbmd0aDsgaSArPSB0aGlzLm1heFJhbmdlcykge1xuICAgICAgICAgICAgLy8gICBzdWJTbGljZXNSZXF1ZXN0cy5wdXNoKFxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZmV0Y2hTbGljZXMoc2xpY2VzLnNsaWNlKGksIGkgKyB0aGlzLm1heFJhbmdlcyksIHNpZ25hbCksXG4gICAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKHN1YlNsaWNlc1JlcXVlc3RzKSkuZmxhdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBtYWtlIGEgc2luZ2xlIHJlcXVlc3QgZm9yIGVhY2ggc2xpY2VcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHNsaWNlcy5tYXAoYXN5bmMgKHNsaWNlKSA9PiAoYXdhaXQgdGhpcy5mZXRjaFNsaWNlKHNsaWNlLCBzaWduYWwpKS5kYXRhKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZT59IHNsaWNlc1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVdpdGhEYXRhPj59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hTbGljZXMoc2xpY2VzLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgUmFuZ2U6IGBieXRlcz0ke3NsaWNlc1xuICAgICAgICAgICAgICAgICAgICAubWFwKCh7IG9mZnNldCwgbGVuZ3RoIH0pID0+IGAke29mZnNldH0tJHtvZmZzZXQgKyBsZW5ndGggLSAxfWApXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWduYWwsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDYpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgcGFyYW1zIH0gPSBwYXJzZUNvbnRlbnRUeXBlKHJlc3BvbnNlLmdldEhlYWRlcignY29udGVudC10eXBlJykpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtdWx0aXBhcnQvYnl0ZXJhbmdlcycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlUmFuZ2VzID0gcGFyc2VCeXRlUmFuZ2VzKGF3YWl0IHJlc3BvbnNlLmdldERhdGEoKSwgcGFyYW1zLmJvdW5kYXJ5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxlU2l6ZSA9IGJ5dGVSYW5nZXNbMF0uZmlsZVNpemUgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnl0ZVJhbmdlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5nZXREYXRhKCk7XG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQsIHRvdGFsIH0gPSBwYXJzZUNvbnRlbnRSYW5nZShyZXNwb25zZS5nZXRIZWFkZXIoJ2NvbnRlbnQtcmFuZ2UnKSk7XG4gICAgICAgICAgICB0aGlzLl9maWxlU2l6ZSA9IHRvdGFsIHx8IG51bGw7XG4gICAgICAgICAgICAvKiogQHR5cGUge2ltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VXaXRoRGF0YVtdfSAqL1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBbe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IGVuZCArIDEgLSBzdGFydCxcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIGlmIChzbGljZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIHdlIHJlcXVlc3RlZCBtb3JlIHRoYW4gb25lIHNsaWNlLCBidXQgZ290IG9ubHkgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy8gdW5mb3J0dW5hdGVseSwgc29tZSBIVFRQIFNlcnZlcnMgZG9uJ3Qgc3VwcG9ydCBtdWx0aS1yYW5nZXNcbiAgICAgICAgICAgICAgICAvLyBhbmQgcmV0dXJuIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSByZXN0IG9mIHRoZSBzbGljZXMgYW5kIGZldGNoIHRoZW0gaXRlcmF0aXZlbHlcbiAgICAgICAgICAgICAgICBjb25zdCBvdGhlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChzbGljZXMuc2xpY2UoMSkubWFwKChzbGljZSkgPT4gdGhpcy5mZXRjaFNsaWNlKHNsaWNlLCBzaWduYWwpKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0LmNvbmNhdChvdGhlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbG93RnVsbEZpbGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciByZXNwb25kZWQgd2l0aCBmdWxsIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5nZXREYXRhKCk7XG4gICAgICAgICAgICB0aGlzLl9maWxlU2l6ZSA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogZGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZX0gc2xpY2VcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VXaXRoRGF0YT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hTbGljZShzbGljZSwgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0LCBsZW5ndGggfSA9IHNsaWNlO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgICBSYW5nZTogYGJ5dGVzPSR7b2Zmc2V0fS0ke29mZnNldCArIGxlbmd0aCAtIDF9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaWduYWwsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjaGVjayB0aGUgcmVzcG9uc2Ugd2FzIG9rYXkgYW5kIGlmIHRoZSBzZXJ2ZXIgYWN0dWFsbHkgdW5kZXJzdGFuZHMgcmFuZ2UgcmVxdWVzdHNcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA2KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgeyB0b3RhbCB9ID0gcGFyc2VDb250ZW50UmFuZ2UocmVzcG9uc2UuZ2V0SGVhZGVyKCdjb250ZW50LXJhbmdlJykpO1xuICAgICAgICAgICAgdGhpcy5fZmlsZVNpemUgPSB0b3RhbCB8fCBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbG93RnVsbEZpbGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciByZXNwb25kZWQgd2l0aCBmdWxsIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5nZXREYXRhKCk7XG4gICAgICAgICAgICB0aGlzLl9maWxlU2l6ZSA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBmaWxlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVTaXplO1xuICAgIH1cbn1cbi8qKlxuICogQHBhcmFtIHtCYXNlU291cmNlfSBzb3VyY2VcbiAqIEBwYXJhbSB7QmxvY2tlZFNvdXJjZU9wdGlvbnN9IGJsb2NrZWRTb3VyY2VPcHRpb25zXG4gKiBAcmV0dXJucyB7QmFzZVNvdXJjZX1cbiAqL1xuZnVuY3Rpb24gbWF5YmVXcmFwSW5CbG9ja2VkU291cmNlKHNvdXJjZSwgeyBibG9ja1NpemUsIGNhY2hlU2l6ZSB9KSB7XG4gICAgaWYgKGJsb2NrU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvY2tlZFNvdXJjZShzb3VyY2UsIHsgYmxvY2tTaXplLCBjYWNoZVNpemUgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9ucyAmIEJsb2NrZWRTb3VyY2VPcHRpb25zICYgeyBjcmVkZW50aWFscz86IFJlcXVlc3RDcmVkZW50aWFsc319IFtwYXJhbTFdXG4gKiBAcmV0dXJucyB7QmFzZVNvdXJjZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGZXRjaFNvdXJjZSh1cmwsIHsgaGVhZGVycyA9IHt9LCBjcmVkZW50aWFscywgbWF4UmFuZ2VzID0gMCwgYWxsb3dGdWxsRmlsZSA9IGZhbHNlLCAuLi5ibG9ja09wdGlvbnMgfSA9IHt9KSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEZldGNoQ2xpZW50KHVybCwgY3JlZGVudGlhbHMpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBSZW1vdGVTb3VyY2UoY2xpZW50LCB7IGhlYWRlcnMsIG1heFJhbmdlcywgYWxsb3dGdWxsRmlsZSB9KTtcbiAgICByZXR1cm4gbWF5YmVXcmFwSW5CbG9ja2VkU291cmNlKHNvdXJjZSwgYmxvY2tPcHRpb25zKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zICYgQmxvY2tlZFNvdXJjZU9wdGlvbnN9IFtwYXJhbTFdXG4gKiBAcmV0dXJucyB7QmFzZVNvdXJjZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VYSFJTb3VyY2UodXJsLCB7IGhlYWRlcnMgPSB7fSwgbWF4UmFuZ2VzID0gMCwgYWxsb3dGdWxsRmlsZSA9IGZhbHNlLCAuLi5ibG9ja09wdGlvbnMgfSA9IHt9KSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFhIUkNsaWVudCh1cmwpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBSZW1vdGVTb3VyY2UoY2xpZW50LCB7IGhlYWRlcnMsIG1heFJhbmdlcywgYWxsb3dGdWxsRmlsZSB9KTtcbiAgICByZXR1cm4gbWF5YmVXcmFwSW5CbG9ja2VkU291cmNlKHNvdXJjZSwgYmxvY2tPcHRpb25zKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zICYgQmxvY2tlZFNvdXJjZU9wdGlvbnN9IFtwYXJhbTFdXG4gKiBAcmV0dXJucyB7QmFzZVNvdXJjZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VIdHRwU291cmNlKHVybCwgeyBoZWFkZXJzID0ge30sIG1heFJhbmdlcyA9IDAsIGFsbG93RnVsbEZpbGUgPSBmYWxzZSwgLi4uYmxvY2tPcHRpb25zIH0gPSB7fSkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KHVybCk7XG4gICAgY29uc3Qgc291cmNlID0gbmV3IFJlbW90ZVNvdXJjZShjbGllbnQsIHsgaGVhZGVycywgbWF4UmFuZ2VzLCBhbGxvd0Z1bGxGaWxlIH0pO1xuICAgIHJldHVybiBtYXliZVdyYXBJbkJsb2NrZWRTb3VyY2Uoc291cmNlLCBibG9ja09wdGlvbnMpO1xufVxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uL2dlb3RpZmYuanNcIikuQmFzZUNsaWVudH0gY2xpZW50XG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnMgJiBCbG9ja2VkU291cmNlT3B0aW9uc30gW3BhcmFtMV1cbiAqIEByZXR1cm5zIHtCYXNlU291cmNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUN1c3RvbVNvdXJjZShjbGllbnQsIHsgaGVhZGVycyA9IHt9LCBtYXhSYW5nZXMgPSAwLCBhbGxvd0Z1bGxGaWxlID0gZmFsc2UsIC4uLmJsb2NrT3B0aW9ucyB9ID0ge30pIHtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVtb3RlU291cmNlKGNsaWVudCwgeyBoZWFkZXJzLCBtYXhSYW5nZXMsIGFsbG93RnVsbEZpbGUgfSk7XG4gICAgcmV0dXJuIG1heWJlV3JhcEluQmxvY2tlZFNvdXJjZShzb3VyY2UsIGJsb2NrT3B0aW9ucyk7XG59XG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnN9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZW1vdGVTb3VyY2UodXJsLCB7IGZvcmNlWEhSID0gZmFsc2UsIC4uLmNsaWVudE9wdGlvbnMgfSA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiAhZm9yY2VYSFIpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VGZXRjaFNvdXJjZSh1cmwsIGNsaWVudE9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbWFrZVhIUlNvdXJjZSh1cmwsIGNsaWVudE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbWFrZUh0dHBTb3VyY2UodXJsLCBjbGllbnRPcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbW90ZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNodW5rKGl0ZXJhYmxlLCBsZW5ndGgpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgbGVuZ3RoT2ZJdGVyYWJsZSA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aE9mSXRlcmFibGU7IGkgKz0gbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNodW5rZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY2kgPSBpOyBjaSA8IGkgKyBsZW5ndGg7IGNpKyspIHtcbiAgICAgICAgICAgIGNodW5rZWQucHVzaChpdGVyYWJsZVtjaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMucHVzaChjaHVua2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5kc1dpdGgoc3RyaW5nLCBleHBlY3RlZEVuZGluZykge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDwgZXhwZWN0ZWRFbmRpbmcubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0dWFsRW5kaW5nID0gc3RyaW5nLnN1YnN0cihzdHJpbmcubGVuZ3RoIC0gZXhwZWN0ZWRFbmRpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4gYWN0dWFsRW5kaW5nID09PSBleHBlY3RlZEVuZGluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGl0ZXJhYmxlLCBmdW5jKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGl0ZXJhYmxlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnVuYyhpdGVyYWJsZVtpXSwgaSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvbGRPYmopIHtcbiAgICBjb25zdCBuZXdPYmogPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvbGRPYmopIHtcbiAgICAgICAgaWYgKG9sZE9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9sZE9ialtrZXldO1xuICAgICAgICAgICAgbmV3T2JqW3ZhbHVlXSA9IGtleTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG4pIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcyhudW1UaW1lcywgZnVuYykge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRpbWVzOyBpKyspIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGZ1bmMoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGl0ZXJhYmxlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBpdGVyYWJsZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpdGVyYWJsZVtpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXlSZWN1cnNpdmVseShpbnB1dCkge1xuICAgIGlmIChpc0FycmF5TGlrZShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHRvQXJyYXkoaW5wdXQpLm1hcCh0b0FycmF5UmVjdXJzaXZlbHkpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odHlwZW9mIHYgPT09ICdvYmplY3QnICYmIHYgIT09IG51bGwgJiYgJ2xlbmd0aCcgaW4gdik7XG59XG4vKiogQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FjYWRlbWlhLWRlLWNvZGlnby9wYXJzZS1jb250ZW50LXJhbmdlLWhlYWRlci9ibG9iL21hc3Rlci9pbmRleC5qcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudFJhbmdlKGhlYWRlclZhbHVlKSB7XG4gICAgaWYgKCFoZWFkZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoZWFkZXJWYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcnNlSW50ID0gKG51bWJlcikgPT4gTnVtYmVyLnBhcnNlSW50KG51bWJlciwgMTApO1xuICAgIC8vIENoZWNrIGZvciBwcmVzZW5jZSBvZiB1bml0XG4gICAgbGV0IG1hdGNoZXMgPSBoZWFkZXJWYWx1ZS5tYXRjaCgvXihcXHcqKSAvKTtcbiAgICBjb25zdCB1bml0ID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICAgIC8vIGNoZWNrIGZvciBzdGFydC1lbmQvc2l6ZSBoZWFkZXIgZm9ybWF0XG4gICAgbWF0Y2hlcyA9IGhlYWRlclZhbHVlLm1hdGNoKC8oXFxkKyktKFxcZCspXFwvKFxcZCt8XFwqKS8pO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgZmlyc3Q6IHBhcnNlSW50KG1hdGNoZXNbMV0pLFxuICAgICAgICAgICAgbGFzdDogcGFyc2VJbnQobWF0Y2hlc1syXSksXG4gICAgICAgICAgICBsZW5ndGg6IG1hdGNoZXNbM10gPT09ICcqJyA/IG51bGwgOiBwYXJzZUludChtYXRjaGVzWzNdKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gY2hlY2sgZm9yIHNpemUgaGVhZGVyIGZvcm1hdFxuICAgIG1hdGNoZXMgPSBoZWFkZXJWYWx1ZS5tYXRjaCgvKFxcZCt8XFwqKS8pO1xuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgZmlyc3Q6IG51bGwsXG4gICAgICAgICAgICBsYXN0OiBudWxsLFxuICAgICAgICAgICAgbGVuZ3RoOiBtYXRjaGVzWzFdID09PSAnKicgPyBudWxsIDogcGFyc2VJbnQobWF0Y2hlc1sxXSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBQcm9taXNpZmllZCB3cmFwcGVyIGFyb3VuZCAnc2V0VGltZW91dCcgdG8gYWxsb3cgJ2F3YWl0J1xuICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZHNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXQobWlsbGlzZWNvbmRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHppcChhLCBiKSB7XG4gICAgY29uc3QgQSA9IEFycmF5LmlzQXJyYXkoYSkgPyBhIDogQXJyYXkuZnJvbShhKTtcbiAgICBjb25zdCBCID0gQXJyYXkuaXNBcnJheShiKSA/IGIgOiBBcnJheS5mcm9tKGIpO1xuICAgIHJldHVybiBBLm1hcCgoaywgaSkgPT4gW2ssIEJbaV1dKTtcbn1cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yXG5leHBvcnQgY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIC8vIFBhc3MgcmVtYWluaW5nIGFyZ3VtZW50cyAoaW5jbHVkaW5nIHZlbmRvciBzcGVjaWZpYyBvbmVzKSB0byBwYXJlbnQgY29uc3RydWN0b3JcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgZm9yIHdoZXJlIG91ciBlcnJvciB3YXMgdGhyb3duIChvbmx5IGF2YWlsYWJsZSBvbiBWOClcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBBYm9ydEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSAnQWJvcnRFcnJvcic7XG4gICAgICAgIHRoaXMuc2lnbmFsID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDdXN0b21BZ2dyZWdhdGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvcnMsIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQWdncmVnYXRlRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBBZ2dyZWdhdGVFcnJvciA9IEN1c3RvbUFnZ3JlZ2F0ZUVycm9yO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZWRGbG9hdEFycmF5KGlucHV0KSB7XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhpbnB1dCkpIHtcbiAgICAgICAgY29uc3QgY3RyID0gaW5wdXQuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChjdHIgPT09IEZsb2F0MzJBcnJheSB8fCBjdHIgPT09IEZsb2F0NjRBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZWRJbnRBcnJheShpbnB1dCkge1xuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoaW5wdXQpKSB7XG4gICAgICAgIGNvbnN0IGN0ciA9IGlucHV0LmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoY3RyID09PSBJbnQ4QXJyYXkgfHwgY3RyID09PSBJbnQxNkFycmF5IHx8IGN0ciA9PT0gSW50MzJBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZWRVaW50QXJyYXkoaW5wdXQpIHtcbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGlucHV0KSkge1xuICAgICAgICBjb25zdCBjdHIgPSBpbnB1dC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGN0ciA9PT0gVWludDhBcnJheSB8fFxuICAgICAgICAgICAgY3RyID09PSBVaW50MTZBcnJheSB8fFxuICAgICAgICAgICAgY3RyID09PSBVaW50MzJBcnJheSB8fFxuICAgICAgICAgICAgY3RyID09PSBVaW50OENsYW1wZWRBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgRmxvYXQ2NEFycmF5LFxuICAgIEZsb2F0MzJBcnJheSxcbiAgICBVaW50MzJBcnJheSxcbiAgICBVaW50MTZBcnJheSxcbiAgICBVaW50OEFycmF5LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrTFJVIGV4dGVuZHMgTWFwIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmICghKG9wdGlvbnMubWF4U2l6ZSAmJiBvcHRpb25zLm1heFNpemUgPiAwKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYG1heFNpemVgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAnKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMubWF4QWdlID09PSAnbnVtYmVyJyAmJiBvcHRpb25zLm1heEFnZSA9PT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYG1heEFnZWAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMCcpO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IFVzZSBwcml2YXRlIGNsYXNzIGZpZWxkcyB3aGVuIEVTTGludCBzdXBwb3J0cyB0aGVtLlxuXHRcdHRoaXMubWF4U2l6ZSA9IG9wdGlvbnMubWF4U2l6ZTtcblx0XHR0aGlzLm1heEFnZSA9IG9wdGlvbnMubWF4QWdlIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblx0XHR0aGlzLm9uRXZpY3Rpb24gPSBvcHRpb25zLm9uRXZpY3Rpb247XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLm9sZENhY2hlID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuX3NpemUgPSAwO1xuXHR9XG5cblx0Ly8gVE9ETzogVXNlIHByaXZhdGUgY2xhc3MgbWV0aG9kcyB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDE2LlxuXHRfZW1pdEV2aWN0aW9ucyhjYWNoZSkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vbkV2aWN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBba2V5LCBpdGVtXSBvZiBjYWNoZSkge1xuXHRcdFx0dGhpcy5vbkV2aWN0aW9uKGtleSwgaXRlbS52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0X2RlbGV0ZUlmRXhwaXJlZChrZXksIGl0ZW0pIHtcblx0XHRpZiAodHlwZW9mIGl0ZW0uZXhwaXJ5ID09PSAnbnVtYmVyJyAmJiBpdGVtLmV4cGlyeSA8PSBEYXRlLm5vdygpKSB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMub25FdmljdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLm9uRXZpY3Rpb24oa2V5LCBpdGVtLnZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuZGVsZXRlKGtleSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0X2dldE9yRGVsZXRlSWZFeHBpcmVkKGtleSwgaXRlbSkge1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCBpdGVtKTtcblx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBpdGVtLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdF9nZXRJdGVtVmFsdWUoa2V5LCBpdGVtKSB7XG5cdFx0cmV0dXJuIGl0ZW0uZXhwaXJ5ID8gdGhpcy5fZ2V0T3JEZWxldGVJZkV4cGlyZWQoa2V5LCBpdGVtKSA6IGl0ZW0udmFsdWU7XG5cdH1cblxuXHRfcGVlayhrZXksIGNhY2hlKSB7XG5cdFx0Y29uc3QgaXRlbSA9IGNhY2hlLmdldChrZXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShrZXksIGl0ZW0pO1xuXHR9XG5cblx0X3NldChrZXksIHZhbHVlKSB7XG5cdFx0dGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5fc2l6ZSsrO1xuXG5cdFx0aWYgKHRoaXMuX3NpemUgPj0gdGhpcy5tYXhTaXplKSB7XG5cdFx0XHR0aGlzLl9zaXplID0gMDtcblx0XHRcdHRoaXMuX2VtaXRFdmljdGlvbnModGhpcy5vbGRDYWNoZSk7XG5cdFx0XHR0aGlzLm9sZENhY2hlID0gdGhpcy5jYWNoZTtcblx0XHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0fVxuXHR9XG5cblx0X21vdmVUb1JlY2VudChrZXksIGl0ZW0pIHtcblx0XHR0aGlzLm9sZENhY2hlLmRlbGV0ZShrZXkpO1xuXHRcdHRoaXMuX3NldChrZXksIGl0ZW0pO1xuXHR9XG5cblx0KiBfZW50cmllc0FzY2VuZGluZygpIHtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5vbGRDYWNoZSkge1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR5aWVsZCBpdGVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMuY2FjaGUpIHtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW07XG5cdFx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdmFsdWUpO1xuXHRcdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHlpZWxkIGl0ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0KGtleSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRjb25zdCBpdGVtID0gdGhpcy5jYWNoZS5nZXQoa2V5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShrZXksIGl0ZW0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRjb25zdCBpdGVtID0gdGhpcy5vbGRDYWNoZS5nZXQoa2V5KTtcblx0XHRcdGlmICh0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCBpdGVtKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fbW92ZVRvUmVjZW50KGtleSwgaXRlbSk7XG5cdFx0XHRcdHJldHVybiBpdGVtLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHNldChrZXksIHZhbHVlLCB7bWF4QWdlID0gdGhpcy5tYXhBZ2V9ID0ge30pIHtcblx0XHRjb25zdCBleHBpcnkgPVxuXHRcdFx0dHlwZW9mIG1heEFnZSA9PT0gJ251bWJlcicgJiYgbWF4QWdlICE9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgP1xuXHRcdFx0XHREYXRlLm5vdygpICsgbWF4QWdlIDpcblx0XHRcdFx0dW5kZWZpbmVkO1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHR0aGlzLmNhY2hlLnNldChrZXksIHtcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdGV4cGlyeVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NldChrZXksIHt2YWx1ZSwgZXhwaXJ5fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXMoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiAhdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdGhpcy5jYWNoZS5nZXQoa2V5KSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiAhdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdGhpcy5vbGRDYWNoZS5nZXQoa2V5KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cGVlayhrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3BlZWsoa2V5LCB0aGlzLmNhY2hlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vbGRDYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3BlZWsoa2V5LCB0aGlzLm9sZENhY2hlKTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGUoa2V5KSB7XG5cdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XG5cdFx0aWYgKGRlbGV0ZWQpIHtcblx0XHRcdHRoaXMuX3NpemUtLTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5vbGRDYWNoZS5kZWxldGUoa2V5KSB8fCBkZWxldGVkO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5jYWNoZS5jbGVhcigpO1xuXHRcdHRoaXMub2xkQ2FjaGUuY2xlYXIoKTtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdHJlc2l6ZShuZXdTaXplKSB7XG5cdFx0aWYgKCEobmV3U2l6ZSAmJiBuZXdTaXplID4gMCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2BtYXhTaXplYCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXRlbXMgPSBbLi4udGhpcy5fZW50cmllc0FzY2VuZGluZygpXTtcblx0XHRjb25zdCByZW1vdmVDb3VudCA9IGl0ZW1zLmxlbmd0aCAtIG5ld1NpemU7XG5cdFx0aWYgKHJlbW92ZUNvdW50IDwgMCkge1xuXHRcdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoaXRlbXMpO1xuXHRcdFx0dGhpcy5vbGRDYWNoZSA9IG5ldyBNYXAoKTtcblx0XHRcdHRoaXMuX3NpemUgPSBpdGVtcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChyZW1vdmVDb3VudCA+IDApIHtcblx0XHRcdFx0dGhpcy5fZW1pdEV2aWN0aW9ucyhpdGVtcy5zbGljZSgwLCByZW1vdmVDb3VudCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9sZENhY2hlID0gbmV3IE1hcChpdGVtcy5zbGljZShyZW1vdmVDb3VudCkpO1xuXHRcdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHRcdHRoaXMuX3NpemUgPSAwO1xuXHRcdH1cblxuXHRcdHRoaXMubWF4U2l6ZSA9IG5ld1NpemU7XG5cdH1cblxuXHQqIGtleXMoKSB7XG5cdFx0Zm9yIChjb25zdCBba2V5XSBvZiB0aGlzKSB7XG5cdFx0XHR5aWVsZCBrZXk7XG5cdFx0fVxuXHR9XG5cblx0KiB2YWx1ZXMoKSB7XG5cdFx0Zm9yIChjb25zdCBbLCB2YWx1ZV0gb2YgdGhpcykge1xuXHRcdFx0eWllbGQgdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0KiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5jYWNoZSkge1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcblx0XHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0eWllbGQgW2tleSwgdmFsdWUudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9sZENhY2hlKSB7XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtO1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHlpZWxkIFtrZXksIHZhbHVlLnZhbHVlXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCogZW50cmllc0Rlc2NlbmRpbmcoKSB7XG5cdFx0bGV0IGl0ZW1zID0gWy4uLnRoaXMuY2FjaGVdO1xuXHRcdGZvciAobGV0IGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcblx0XHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0eWllbGQgW2tleSwgdmFsdWUudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGl0ZW1zID0gWy4uLnRoaXMub2xkQ2FjaGVdO1xuXHRcdGZvciAobGV0IGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR5aWVsZCBba2V5LCB2YWx1ZS52YWx1ZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQqIGVudHJpZXNBc2NlbmRpbmcoKSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5fZW50cmllc0FzY2VuZGluZygpKSB7XG5cdFx0XHR5aWVsZCBba2V5LCB2YWx1ZS52YWx1ZV07XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHNpemUoKSB7XG5cdFx0aWYgKCF0aGlzLl9zaXplKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vbGRDYWNoZS5zaXplO1xuXHRcdH1cblxuXHRcdGxldCBvbGRDYWNoZVNpemUgPSAwO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIHRoaXMub2xkQ2FjaGUua2V5cygpKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0b2xkQ2FjaGVTaXplKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWluKHRoaXMuX3NpemUgKyBvbGRDYWNoZVNpemUsIHRoaXMubWF4U2l6ZSk7XG5cdH1cblxuXHRlbnRyaWVzKCkge1xuXHRcdHJldHVybiB0aGlzLmVudHJpZXNBc2NlbmRpbmcoKTtcblx0fVxuXG5cdGZvckVhY2goY2FsbGJhY2tGdW5jdGlvbiwgdGhpc0FyZ3VtZW50ID0gdGhpcykge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuZW50cmllc0FzY2VuZGluZygpKSB7XG5cdFx0XHRjYWxsYmFja0Z1bmN0aW9uLmNhbGwodGhpc0FyZ3VtZW50LCB2YWx1ZSwga2V5LCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KFsuLi50aGlzLmVudHJpZXNBc2NlbmRpbmcoKV0pO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudFN1YnN0cmluZyhzdHJpbmcsIHN1YnN0cmluZykge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChzdWJzdHJpbmcsIFwiZ1wiKTtcbiAgY29uc3QgbWF0Y2ggPSBzdHJpbmcubWF0Y2gocGF0dGVybik7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoLmxlbmd0aCA6IDA7XG59XG4iLCJpbXBvcnQgaW5kZXhPZk1hdGNoIGZyb20gXCIuL2luZGV4LW9mLW1hdGNoLm1qc1wiO1xuaW1wb3J0IGluZGV4T2ZNYXRjaEVuZCBmcm9tIFwiLi9pbmRleC1vZi1tYXRjaC1lbmQubWpzXCI7XG5pbXBvcnQgY291bnRTdWJzdHJpbmcgZnJvbSBcIi4vY291bnQtc3Vic3RyaW5nLm1qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVGFnQnlOYW1lKHhtbCwgdGFnTmFtZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWJ1ZyA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpIHx8IGZhbHNlO1xuICBjb25zdCBuZXN0ZWQgPSAhKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubmVzdGVkID09PSBmYWxzZSk7XG5cbiAgY29uc3Qgc3RhcnRJbmRleCA9IChvcHRpb25zICYmIG9wdGlvbnMuc3RhcnRJbmRleCkgfHwgMDtcblxuICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gc3RhcnRpbmcgZmluZFRhZ0J5TmFtZSB3aXRoXCIsIHRhZ05hbWUsIFwiIGFuZCBcIiwgb3B0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnQgPSBpbmRleE9mTWF0Y2goeG1sLCBgXFw8JHt0YWdOYW1lfVsgXFxuXFw+XFwvXWAsIHN0YXJ0SW5kZXgpO1xuICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gc3RhcnQ6XCIsIHN0YXJ0KTtcbiAgaWYgKHN0YXJ0ID09PSAtMSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICBjb25zdCBhZnRlclN0YXJ0ID0geG1sLnNsaWNlKHN0YXJ0ICsgdGFnTmFtZS5sZW5ndGgpO1xuXG4gIGxldCByZWxhdGl2ZUVuZCA9IGluZGV4T2ZNYXRjaEVuZChhZnRlclN0YXJ0LCBcIl5bXjxdKlsgL10+XCIsIDApO1xuXG4gIGNvbnN0IHNlbGZDbG9zaW5nID0gcmVsYXRpdmVFbmQgIT09IC0xICYmIGFmdGVyU3RhcnRbcmVsYXRpdmVFbmQgLSAxXSA9PT0gXCIvXCI7XG4gIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBzZWxmQ2xvc2luZzpcIiwgc2VsZkNsb3NpbmcpO1xuXG4gIGlmIChzZWxmQ2xvc2luZyA9PT0gZmFsc2UpIHtcbiAgICAvLyBjaGVjayBpZiB0YWcgaGFzIHN1YnRhZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICAgICAgbGV0IG9wZW5pbmdzID0gMTtcbiAgICAgIGxldCBjbG9zaW5ncyA9IDA7XG4gICAgICB3aGlsZSAoKHJlbGF0aXZlRW5kID0gaW5kZXhPZk1hdGNoRW5kKGFmdGVyU3RhcnQsIFwiWyAvXVwiICsgdGFnTmFtZSArIFwiPlwiLCBzdGFydEluZGV4KSkgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBhZnRlclN0YXJ0LnN1YnN0cmluZyhzdGFydEluZGV4LCByZWxhdGl2ZUVuZCArIDEpO1xuICAgICAgICBvcGVuaW5ncyArPSBjb3VudFN1YnN0cmluZyhjbGlwLCBcIjxcIiArIHRhZ05hbWUgKyBcIlsgXFxuXFx0Pl1cIik7XG4gICAgICAgIGNsb3NpbmdzICs9IGNvdW50U3Vic3RyaW5nKGNsaXAsIFwiPC9cIiArIHRhZ05hbWUgKyBcIj5cIik7XG4gICAgICAgIC8vIHdlIGNhbid0IGhhdmUgbW9yZSBvcGVuaW5ncyB0aGFuIGNsb3NpbmdzXG4gICAgICAgIGlmIChjbG9zaW5ncyA+PSBvcGVuaW5ncykgYnJlYWs7XG4gICAgICAgIHN0YXJ0SW5kZXggPSByZWxhdGl2ZUVuZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVsYXRpdmVFbmQgPSBpbmRleE9mTWF0Y2hFbmQoYWZ0ZXJTdGFydCwgXCJbIC9dXCIgKyB0YWdOYW1lICsgXCI+XCIsIDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGFnTmFtZS5sZW5ndGggKyByZWxhdGl2ZUVuZCArIDE7XG4gIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBlbmQ6XCIsIGVuZCk7XG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IG91dGVyID0geG1sLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAvLyB0YWcgaXMgbGlrZSA8Z21sOmlkZW50aWZpZXIgY29kZVNwYWNlPVwiT0dQXCI+dXJuOm9nYzpkZWY6Y3JzOkVQU0c6OjMyNjE3PC9nbWw6aWRlbnRpZmllcj5cblxuICBsZXQgaW5uZXI7XG4gIGlmIChzZWxmQ2xvc2luZykge1xuICAgIGlubmVyID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBpbm5lciA9IG91dGVyLnNsaWNlKG91dGVyLmluZGV4T2YoXCI+XCIpICsgMSwgb3V0ZXIubGFzdEluZGV4T2YoXCI8XCIpKTtcbiAgfVxuXG4gIHJldHVybiB7IGlubmVyLCBvdXRlciwgc3RhcnQsIGVuZCB9O1xufVxuIiwiaW1wb3J0IGZpbmRUYWdCeU5hbWUgZnJvbSBcIi4vZmluZC10YWctYnktbmFtZS5tanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFRhZ3NCeU5hbWUoeG1sLCB0YWdOYW1lLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRhZ3MgPSBbXTtcbiAgY29uc3QgZGVidWcgPSAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKSB8fCBmYWxzZTtcbiAgY29uc3QgbmVzdGVkID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5uZXN0ZWQgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5uZXN0ZWQgOiB0cnVlO1xuICBsZXQgc3RhcnRJbmRleCA9IChvcHRpb25zICYmIG9wdGlvbnMuc3RhcnRJbmRleCkgfHwgMDtcbiAgbGV0IHRhZztcbiAgd2hpbGUgKCh0YWcgPSBmaW5kVGFnQnlOYW1lKHhtbCwgdGFnTmFtZSwgeyBkZWJ1Zywgc3RhcnRJbmRleCB9KSkpIHtcbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBzdGFydEluZGV4ID0gdGFnLnN0YXJ0ICsgMSArIHRhZ05hbWUubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEluZGV4ID0gdGFnLmVuZDtcbiAgICB9XG4gICAgdGFncy5wdXNoKHRhZyk7XG4gIH1cbiAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcImZpbmRUYWdzQnlOYW1lIGZvdW5kXCIsIHRhZ3MubGVuZ3RoLCBcInRhZ3NcIik7XG4gIHJldHVybiB0YWdzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlKHRhZywgYXR0cmlidXRlTmFtZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWJ1ZyA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpIHx8IGZhbHNlO1xuICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gZ2V0dGluZyBcIiArIGF0dHJpYnV0ZU5hbWUgKyBcIiBpbiBcIiArIHRhZyk7XG5cbiAgY29uc3QgeG1sID0gdHlwZW9mIHRhZyA9PT0gXCJvYmplY3RcIiA/IHRhZy5vdXRlciA6IHRhZztcblxuICAvLyBvbmx5IHNlYXJjaCBmb3IgYXR0cmlidXRlcyBpbiB0aGUgb3BlbmluZyB0YWdcbiAgY29uc3Qgb3BlbmluZyA9IHhtbC5zbGljZSgwLCB4bWwuaW5kZXhPZihcIj5cIikgKyAxKTtcblxuICBjb25zdCBxdW90ZWNoYXJzID0gWydcIicsIFwiJ1wiXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdW90ZWNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHF1b3RlY2hhcnNbaV07XG4gICAgY29uc3QgcGF0dGVybiA9IGF0dHJpYnV0ZU5hbWUgKyBcIlxcXFw9XCIgKyBjaGFyICsgXCIoW15cIiArIGNoYXIgKyBcIl0qKVwiICsgY2hhcjtcbiAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gcGF0dGVybjpcIiwgcGF0dGVybik7XG5cbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgY29uc3QgbWF0Y2ggPSByZS5leGVjKG9wZW5pbmcpO1xuICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBtYXRjaDpcIiwgbWF0Y2gpO1xuICAgIGlmIChtYXRjaCkgcmV0dXJuIG1hdGNoWzFdO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleE9mTWF0Y2hFbmQoeG1sLCBwYXR0ZXJuLCBzdGFydEluZGV4KSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgY29uc3QgbWF0Y2ggPSByZS5leGVjKHhtbC5zbGljZShzdGFydEluZGV4KSk7XG4gIGlmIChtYXRjaCkgcmV0dXJuIHN0YXJ0SW5kZXggKyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIDE7XG4gIGVsc2UgcmV0dXJuIC0xO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXhPZk1hdGNoKHhtbCwgcGF0dGVybiwgc3RhcnRJbmRleCkge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gIGNvbnN0IG1hdGNoID0gcmUuZXhlYyh4bWwuc2xpY2Uoc3RhcnRJbmRleCkpO1xuICBpZiAobWF0Y2gpIHJldHVybiBzdGFydEluZGV4ICsgbWF0Y2guaW5kZXg7XG4gIGVsc2UgcmV0dXJuIC0xO1xufVxuIiwiLy9AdHMtY2hlY2tcbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBEYXRhc2V0IH0gZnJvbSAnZ3JpZHZpeidcbmltcG9ydCB7IGZyb21VcmwgfSBmcm9tICdnZW90aWZmJ1xuaW1wb3J0IHsgcmVhZFRpbGUgfSBmcm9tICcuL0NPR2VvVGlsZVJlYWRlci5qcydcblxuLyoqXG4gKiBBIGRhdGFzZXQgY29tcG9zZWQgb2YgYSBDT0dlbyBmaWxlLlxuICogQHNlZSBodHRwczovL3d3dy5jb2dlby5vcmcvXG4gKlxuICogQG1vZHVsZSBkYXRhc2V0XG4gKiBAYXV0aG9yIEpvc2VwaCBEYXZpZXMsIEp1bGllbiBHYWZmdXJpXG4gKi9cbmV4cG9ydCBjbGFzcyBDT0dlbyBleHRlbmRzIERhdGFzZXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCdncmlkdml6JykuTWFwfSBtYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gSW5pdGlhbCByZXNvbHV0aW9uOyB0aGUgQ09HIHBpeGVsIHNpemUgaXMgdXNlZCBhZnRlciBsb2FkaW5nLlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICBwcmVwcm9jZXNzPzpmdW5jdGlvbihvYmplY3QpOmJvb2xlYW4sXG4gICAgICogIGJhbmRzPzpudW1iZXJbXSxcbiAgICAgKiAgaGVhZGVycz86UmVjb3JkPHN0cmluZyxzdHJpbmc+LFxuICAgICAqICBjcmVkZW50aWFscz86UmVxdWVzdENyZWRlbnRpYWxzLFxuICAgICAqICBtYXhSYW5nZXM/Om51bWJlcixcbiAgICAgKiAgcmVtb3RlT3B0aW9ucz86e2hlYWRlcnM/OlJlY29yZDxzdHJpbmcsc3RyaW5nPixjcmVkZW50aWFscz86UmVxdWVzdENyZWRlbnRpYWxzLG1heFJhbmdlcz86bnVtYmVyfVxuICAgICAqIH19IG9wdHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYXAsIHVybCwgcmVzb2x1dGlvbiwgb3B0cyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG1hcCwgdXJsLCByZXNvbHV0aW9uLCBvcHRzKVxuICAgICAgICB0aGlzLnJlbW90ZU9wdGlvbnMgPSBvcHRzLnJlbW90ZU9wdGlvbnMgfHwgb3B0c1xuXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPENPR2VvQ2VsbD59ICovXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyW118dW5kZWZpbmVkfSAqL1xuICAgICAgICB0aGlzLmJhbmRzID0gb3B0cy5iYW5kc1xuXG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ25vdExvYWRlZCdcblxuICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N0YXR1cyA9ICdub3RMb2FkZWQnXG5cbiAgICAgICAgLyoqIEB0eXBlIHthbnl9ICovXG4gICAgICAgIHRoaXMudGlmZiA9IHVuZGVmaW5lZFxuXG4gICAgICAgIC8qKiBAdHlwZSB7YW55fSAqL1xuICAgICAgICB0aGlzLmltYWdlID0gdW5kZWZpbmVkXG5cbiAgICAgICAgLyoqIEB0eXBlIHtDT0dlb1Jhc3RlckluZm98dW5kZWZpbmVkfSAqL1xuICAgICAgICB0aGlzLnJhc3RlckluZm8gPSB1bmRlZmluZWRcblxuICAgICAgICAvKiogQHR5cGUge01hcDxzdHJpbmcsIEFycmF5Ljxhbnk+Pn0gKi9cbiAgICAgICAgdGhpcy50aWxlQ2FjaGUgPSBuZXcgTWFwKClcblxuICAgICAgICAvKiogQHR5cGUge01hcDxzdHJpbmcsIFByb21pc2U8QXJyYXkuPGFueT4+Pn0gKi9cbiAgICAgICAgdGhpcy5wZW5kaW5nVGlsZXMgPSBuZXcgTWFwKClcblxuICAgICAgICAvKiogQHR5cGUge3t4TWluOm51bWJlcix4TWF4Om51bWJlcix5TWluOm51bWJlcix5TWF4Om51bWJlcn18dW5kZWZpbmVkfSAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdWaWV3ID0gdW5kZWZpbmVkXG4gICAgICAgIHRoaXMudmlld0dlbmVyYXRpb24gPSAwXG5cbiAgICAgICAgdGhpcy5nZXREYXRhKClcbiAgICB9XG5cbiAgICAvKiogQHJldHVybnMge3RoaXN9ICovXG4gICAgZ2V0RGF0YShleHRHZW8gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGV4dEdlbykgdGhpcy5wZW5kaW5nVmlldyA9IGV4dEdlb1xuXG4gICAgICAgIGlmICh0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID09PSAnbm90TG9hZGVkJykge1xuICAgICAgICAgICAgdGhpcy5pbmZvTG9hZGluZ1N0YXR1cyA9ICdsb2FkaW5nJ1xuICAgICAgICAgICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbEZpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMucmVtb3RlT3B0aW9ucy5oZWFkZXJzID8geyBoZWFkZXJzOiB0aGlzLnJlbW90ZU9wdGlvbnMuaGVhZGVycyB9IDoge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMucmVtb3RlT3B0aW9ucy5jcmVkZW50aWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBjcmVkZW50aWFsczogdGhpcy5yZW1vdGVPcHRpb25zLmNyZWRlbnRpYWxzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihOdW1iZXIuaXNJbnRlZ2VyKHRoaXMucmVtb3RlT3B0aW9ucy5tYXhSYW5nZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IG1heFJhbmdlczogdGhpcy5yZW1vdGVPcHRpb25zLm1heFJhbmdlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWZmID0gYXdhaXQgZnJvbVVybChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBhd2FpdCB0aGlzLnRpZmYuZ2V0SW1hZ2UoKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kQ291bnQgPSB0aGlzLmltYWdlLmdldFNhbXBsZXNQZXJQaXhlbCgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhbmRzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFuZHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQXJyYXkuZnJvbSh7IGxlbmd0aDogYmFuZENvdW50IH0sIChfLCBpbmRleCkgPT4gaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhbmRzXG5cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVCYW5kcyhiYW5kcywgYmFuZENvdW50KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGJhbmRzLm1hcCgoYmFuZCkgPT4gdGhpcy5pbWFnZS5nZXRHREFMTWV0YWRhdGEoYmFuZCkpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kTmFtZXMgPSBtZXRhZGF0YS5tYXAoKGJhbmRNZXRhZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYmFuZE1ldGFkYXRhICYmIGJhbmRNZXRhZGF0YS5ERVNDUklQVElPTlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgJiYgZGVzY3JpcHRpb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGJhbmQke2JhbmRzW2luZGV4XSArIDF9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUJhbmROYW1lcyhiYW5kTmFtZXMpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25YLCByZXNvbHV0aW9uWV0gPSB0aGlzLmltYWdlLmdldFJlc29sdXRpb24oKVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVJhc3RlcihyZXNvbHV0aW9uWCwgcmVzb2x1dGlvblksIHRoaXMuaW1hZ2UpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXN0ZXJJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGJhbmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzOiBiYW5kTmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBub0RhdGE6IHRoaXMuaW1hZ2UuZ2V0R0RBTE5vRGF0YSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5kcyA9IGJhbmRzXG5cbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJhc3RlckluZm8pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gTWF0aC5hYnMocmVzb2x1dGlvblgpXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYENPR2VvIHBpeGVsIHNpemU6ICR7Y2VsbFdpZHRofSB4ICR7TWF0aC5hYnMocmVzb2x1dGlvblkpfWApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IGNlbGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nVmlldykgdGhpcy5sb2FkVmlldyh0aGlzLnBlbmRpbmdWaWV3KVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLnJlZHJhdygpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIG1ldGFkYXRhIGZyb20gJyArIHRoaXMudXJsKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2ZhaWxlZCdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5mb0xvYWRpbmdTdGF0dXMgPT09ICdsb2FkZWQnICYmIGV4dEdlbykge1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlldyhleHRHZW8pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7e3hNaW46bnVtYmVyLHhNYXg6bnVtYmVyLHlNaW46bnVtYmVyLHlNYXg6bnVtYmVyfX0gZXh0R2VvXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgbG9hZFZpZXcoZXh0R2VvKSB7XG4gICAgICAgIGlmICghdGhpcy5pbWFnZSB8fCAhdGhpcy5yYXN0ZXJJbmZvIHx8ICF0aGlzLmJhbmRzKSByZXR1cm5cblxuICAgICAgICBjb25zdCBnZW5lcmF0aW9uID0gKyt0aGlzLnZpZXdHZW5lcmF0aW9uXG4gICAgICAgIGNvbnN0IGJib3ggPSBnZXRDbGlwcGVkQm91bmRpbmdCb3godGhpcy5pbWFnZSwgZXh0R2VvKVxuICAgICAgICBpZiAoIWJib3gpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZSA9IFtdXG4gICAgICAgICAgICB0aGlzLmRhdGFMb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N0YXR1cyA9ICdsb2FkaW5nJ1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luWV0gPSB0aGlzLmltYWdlLmdldE9yaWdpbigpXG4gICAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvblgsIHJlc29sdXRpb25ZXSA9IHRoaXMuaW1hZ2UuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgICAgICBjb25zdCBpc1BpeGVsQXJlYSA9IHRoaXMuaW1hZ2UuZ2V0R2VvS2V5cygpPy5HVFJhc3RlclR5cGVHZW9LZXkgIT09IDJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGdldFBpeGVsV2luZG93KFxuICAgICAgICAgICAgICAgIG9yaWdpblgsXG4gICAgICAgICAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uWCxcbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uWSxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZS5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBiYm94XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmICghd2luZG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZSA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N0YXR1cyA9ICdsb2FkZWQnXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbGVXaWR0aCA9IHRoaXMuaW1hZ2UuZ2V0VGlsZVdpZHRoKClcbiAgICAgICAgICAgIGNvbnN0IHRpbGVIZWlnaHQgPSB0aGlzLmltYWdlLmdldFRpbGVIZWlnaHQoKVxuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaW1hZ2UuZ2V0T3JpZ2luKCkpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBDT0dlbyB0aWxlIHNpemU6ICR7dGlsZVdpZHRofSB4ICR7dGlsZUhlaWdodH1gKVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIU51bWJlci5pc0ludGVnZXIodGlsZVdpZHRoKSB8fFxuICAgICAgICAgICAgICAgIHRpbGVXaWR0aCA8PSAwIHx8XG4gICAgICAgICAgICAgICAgIU51bWJlci5pc0ludGVnZXIodGlsZUhlaWdodCkgfHxcbiAgICAgICAgICAgICAgICB0aWxlSGVpZ2h0IDw9IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPR2VvIGltYWdlIHRpbGUgZGltZW5zaW9ucyBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXJzLicpXG4gICAgICAgICAgICBjb25zdCBtaW5UaWxlWCA9IE1hdGguZmxvb3Iod2luZG93WzBdIC8gdGlsZVdpZHRoKVxuICAgICAgICAgICAgY29uc3QgbWF4VGlsZVggPSBNYXRoLmNlaWwod2luZG93WzJdIC8gdGlsZVdpZHRoKVxuICAgICAgICAgICAgY29uc3QgbWluVGlsZVkgPSBNYXRoLmZsb29yKHdpbmRvd1sxXSAvIHRpbGVIZWlnaHQpXG4gICAgICAgICAgICBjb25zdCBtYXhUaWxlWSA9IE1hdGguY2VpbCh3aW5kb3dbM10gLyB0aWxlSGVpZ2h0KVxuICAgICAgICAgICAgY29uc3QgcmVtb3RlT3B0aW9ucyA9IGdldFJlbW90ZU9wdGlvbnModGhpcy5yZW1vdGVPcHRpb25zKVxuICAgICAgICAgICAgY29uc3QgdGlsZVRhc2tzID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IHRpbGVZID0gbWluVGlsZVk7IHRpbGVZIDwgbWF4VGlsZVk7IHRpbGVZKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0aWxlWCA9IG1pblRpbGVYOyB0aWxlWCA8IG1heFRpbGVYOyB0aWxlWCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUYXNrcy5wdXNoKHsgdGlsZVgsIHRpbGVZIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlsZVRhc2tzLmxlbmd0aDsgaW5kZXggKz0gNCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhdGNoID0gdGlsZVRhc2tzLnNsaWNlKGluZGV4LCBpbmRleCArIDQpXG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVycyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICBiYXRjaC5tYXAoKHsgdGlsZVgsIHRpbGVZIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRpbGUodGlsZVgsIHRpbGVZLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHJlbW90ZU9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRpb24gIT09IHRoaXMudmlld0dlbmVyYXRpb24pIHJldHVyblxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdGlsZUluZGV4ID0gMDsgdGlsZUluZGV4IDwgYmF0Y2gubGVuZ3RoOyB0aWxlSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHRpbGVYLCB0aWxlWSB9ID0gYmF0Y2hbdGlsZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXIgPSByYXN0ZXJzW3RpbGVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlsZVdpbmRvdyA9IGdldFRpbGVXaW5kb3coXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVZLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UuZ2V0SGVpZ2h0KClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWxlQ2VsbHMgPSBjZWxsc0Zyb21SYXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFzdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVdpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvblgsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHV0aW9uWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGl4ZWxBcmVhLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFuZHM6IHRoaXMuYmFuZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXN0ZXJJbmZvOiB0aGlzLnJhc3RlckluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwcm9jZXNzOiB0aGlzLnByZXByb2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goLi4udGlsZUNlbGxzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jZWxscyA9IGNlbGxzXG4gICAgICAgICAgICB0aGlzLmRhdGFMb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld0NhY2hlKGV4dEdlbylcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcCkgdGhpcy5tYXAucmVkcmF3KClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0aW9uICE9PSB0aGlzLnZpZXdHZW5lcmF0aW9uKSByZXR1cm5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHZpZXcgZnJvbSAnICsgdGhpcy51cmwpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N0YXR1cyA9ICdmYWlsZWQnXG4gICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlWVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlV2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGlsZUhlaWdodFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZW1vdGVPcHRpb25zXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXkuPGFueT4+fVxuICAgICAqL1xuICAgIGdldFRpbGUodGlsZVgsIHRpbGVZLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIHJlbW90ZU9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYmFuZHMgPSB0aGlzLmJhbmRzXG4gICAgICAgIGlmICghYmFuZHMpIHRocm93IG5ldyBFcnJvcignQ09HZW8gYmFuZHMgaGF2ZSBub3QgYmVlbiBpbml0aWFsaXplZC4nKVxuICAgICAgICBjb25zdCBrZXkgPSBgJHt0aWxlWH0sJHt0aWxlWX1gXG4gICAgICAgIGlmICh0aGlzLnRpbGVDYWNoZS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgcmFzdGVyID0gdGhpcy50aWxlQ2FjaGUuZ2V0KGtleSlcbiAgICAgICAgICAgIGlmICghcmFzdGVyKSB0aHJvdyBuZXcgRXJyb3IoJ0NhY2hlZCBDT0dlbyB0aWxlIGlzIHVuYXZhaWxhYmxlLicpXG4gICAgICAgICAgICB0aGlzLnRpbGVDYWNoZS5kZWxldGUoa2V5KVxuICAgICAgICAgICAgdGhpcy50aWxlQ2FjaGUuc2V0KGtleSwgcmFzdGVyKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyYXN0ZXIpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGVuZGluZ1JlcXVlc3QgPSB0aGlzLnBlbmRpbmdUaWxlcy5nZXQoa2V5KVxuICAgICAgICBpZiAocGVuZGluZ1JlcXVlc3QpIHJldHVybiBwZW5kaW5nUmVxdWVzdFxuXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IGdldFRpbGVXaW5kb3coXG4gICAgICAgICAgICB0aWxlWCxcbiAgICAgICAgICAgIHRpbGVZLFxuICAgICAgICAgICAgdGlsZVdpZHRoLFxuICAgICAgICAgICAgdGlsZUhlaWdodCxcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuZ2V0SGVpZ2h0KClcbiAgICAgICAgKVxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gcmVhZFRpbGUodGhpcy51cmwsIHJlbW90ZU9wdGlvbnMsIHRoaXMuaW1hZ2UsIHdpbmRvdywgYmFuZHMpXG4gICAgICAgIGNvbnN0IHRpbGVQcm9taXNlID0gcmVxdWVzdC50aGVuKFxuICAgICAgICAgICAgKHJhc3RlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyYXN0ZXIpIHx8IHJhc3Rlci5sZW5ndGggIT09IGJhbmRzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT0dlbyB0aWxlIGRhdGEgZG9lcyBub3QgbWF0Y2ggdGhlIHNlbGVjdGVkIGJhbmRzLicpXG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxDb3VudCA9ICh3aW5kb3dbMl0gLSB3aW5kb3dbMF0pICogKHdpbmRvd1szXSAtIHdpbmRvd1sxXSlcbiAgICAgICAgICAgICAgICBpZiAocmFzdGVyLnNvbWUoKGJhbmQpID0+IGJhbmQubGVuZ3RoICE9PSBwaXhlbENvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT0dlbyB0aWxlIGRhdGEgZG9lcyBub3QgbWF0Y2ggaXRzIGRpbWVuc2lvbnMuJylcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVDYWNoZS5zZXQoa2V5LCByYXN0ZXIpXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMudGlsZUNhY2hlLnNpemUgPiA2NCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRlc3QgPSB0aGlzLnRpbGVDYWNoZS5rZXlzKCkubmV4dCgpLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRlc3QgPT09IHVuZGVmaW5lZCkgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQ2FjaGUuZGVsZXRlKG9sZGVzdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhc3RlclxuICAgICAgICAgICAgfVxuICAgICAgICApLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZ1RpbGVzLmdldChrZXkpID09PSB0aWxlUHJvbWlzZSkgdGhpcy5wZW5kaW5nVGlsZXMuZGVsZXRlKGtleSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wZW5kaW5nVGlsZXMuc2V0KGtleSwgdGlsZVByb21pc2UpXG4gICAgICAgIHJldHVybiB0aWxlUHJvbWlzZVxuICAgIH1cblxuICAgIC8qKiBAcGFyYW0ge3t4TWluOm51bWJlcix4TWF4Om51bWJlcix5TWluOm51bWJlcix5TWF4Om51bWJlcn19IGV4dEdlbyAqL1xuICAgIHVwZGF0ZVZpZXdDYWNoZShleHRHZW8pIHtcbiAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZSA9IFtdXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0aGlzLmNlbGxzKSB7XG4gICAgICAgICAgICBpZiAoK2NlbGwueCArIHRoaXMucmVzb2x1dGlvbiA8IGV4dEdlby54TWluKSBjb250aW51ZVxuICAgICAgICAgICAgaWYgKCtjZWxsLnggLSB0aGlzLnJlc29sdXRpb24gPiBleHRHZW8ueE1heCkgY29udGludWVcbiAgICAgICAgICAgIGlmICgrY2VsbC55ICsgdGhpcy5yZXNvbHV0aW9uIDwgZXh0R2VvLnlNaW4pIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAoK2NlbGwueSAtIHRoaXMucmVzb2x1dGlvbiA+IGV4dEdlby55TWF4KSBjb250aW51ZVxuICAgICAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZS5wdXNoKGNlbGwpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQmFuZHMoYmFuZHMsIHNhbXBsZUNvdW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJhbmRzKSB8fCBiYW5kcy5sZW5ndGggPT09IDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGJhbmRzIG9wdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IGFycmF5IG9mIHplcm8tYmFzZWQgc2FtcGxlIGluZGV4ZXMuJylcbiAgICBpZiAoYmFuZHMuc29tZSgoYmFuZCkgPT4gIU51bWJlci5pc0ludGVnZXIoYmFuZCkgfHwgYmFuZCA8IDAgfHwgYmFuZCA+PSBzYW1wbGVDb3VudCkpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBCYW5kIGluZGV4ZXMgbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kICR7c2FtcGxlQ291bnQgLSAxfS5gKVxuICAgIGlmIChuZXcgU2V0KGJhbmRzKS5zaXplICE9PSBiYW5kcy5sZW5ndGgpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGJhbmRzIG9wdGlvbiBtdXN0IG5vdCBjb250YWluIGR1cGxpY2F0ZSBpbmRleGVzLicpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQmFuZE5hbWVzKGJhbmROYW1lcykge1xuICAgIGlmIChuZXcgU2V0KGJhbmROYW1lcykuc2l6ZSAhPT0gYmFuZE5hbWVzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT0dlbyBiYW5kIG5hbWVzIG11c3QgYmUgdW5pcXVlIHRvIGNyZWF0ZSBjZWxsIHByb3BlcnRpZXMuJylcbiAgICBpZiAoYmFuZE5hbWVzLnNvbWUoKG5hbWUpID0+IG5hbWUgPT09ICd4JyB8fCBuYW1lID09PSAneScpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPR2VvIGJhbmQgbmFtZXMgY2Fubm90IGJlIFwieFwiIG9yIFwieVwiLCB3aGljaCBhcmUgcmVzZXJ2ZWQgZm9yIGNlbGwgY29vcmRpbmF0ZXMuJylcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVSYXN0ZXIocmVzb2x1dGlvblgsIHJlc29sdXRpb25ZLCBpbWFnZSkge1xuICAgIGNvbnN0IGNlbGxXaWR0aCA9IE1hdGguYWJzKHJlc29sdXRpb25YKVxuICAgIGNvbnN0IGNlbGxIZWlnaHQgPSBNYXRoLmFicyhyZXNvbHV0aW9uWSlcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShjZWxsV2lkdGgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoY2VsbEhlaWdodCkgfHwgY2VsbFdpZHRoIDw9IDAgfHwgY2VsbEhlaWdodCA8PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPR2VvIHBpeGVsIGRpbWVuc2lvbnMgbXVzdCBiZSBmaW5pdGUgYW5kIGdyZWF0ZXIgdGhhbiB6ZXJvLicpXG4gICAgaWYgKE1hdGguYWJzKGNlbGxXaWR0aCAtIGNlbGxIZWlnaHQpID4gTWF0aC5tYXgoY2VsbFdpZHRoLCBjZWxsSGVpZ2h0KSAqIDFlLTkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignR3JpZFZpeiByZXF1aXJlcyBzcXVhcmUgQ09HZW8gcGl4ZWxzLicpXG4gICAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBpbWFnZS5nZXRGaWxlRGlyZWN0b3J5KCkuZ2V0VmFsdWUoJ01vZGVsVHJhbnNmb3JtYXRpb24nKVxuICAgIGlmIChcbiAgICAgICAgdHJhbnNmb3JtYXRpb24gJiZcbiAgICAgICAgKE1hdGguYWJzKHRyYW5zZm9ybWF0aW9uWzFdKSA+IGNlbGxXaWR0aCAqIDFlLTEyIHx8XG4gICAgICAgICAgICBNYXRoLmFicyh0cmFuc2Zvcm1hdGlvbls0XSkgPiBjZWxsSGVpZ2h0ICogMWUtMTIpXG4gICAgKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdGF0ZWQgQ09HZW8gaW1hZ2VzIGFyZSBub3Qgc3VwcG9ydGVkLicpXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGltYWdlXG4gKiBAcGFyYW0ge3t4TWluOm51bWJlcix4TWF4Om51bWJlcix5TWluOm51bWJlcix5TWF4Om51bWJlcn19IGV4dEdlb1xuICogQHJldHVybnMge1tudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdfHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gZ2V0Q2xpcHBlZEJvdW5kaW5nQm94KGltYWdlLCBleHRHZW8pIHtcbiAgICBjb25zdCBiYm94ID0gaW1hZ2UuZ2V0Qm91bmRpbmdCb3goKVxuICAgIGlmICghQXJyYXkuaXNBcnJheShiYm94KSB8fCBiYm94Lmxlbmd0aCAhPT0gNCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIGNvbnN0IHhNaW4gPSBNYXRoLm1heChleHRHZW8ueE1pbiwgYmJveFswXSlcbiAgICBjb25zdCB4TWF4ID0gTWF0aC5taW4oZXh0R2VvLnhNYXgsIGJib3hbMl0pXG4gICAgY29uc3QgeU1pbiA9IE1hdGgubWF4KGV4dEdlby55TWluLCBiYm94WzFdKVxuICAgIGNvbnN0IHlNYXggPSBNYXRoLm1pbihleHRHZW8ueU1heCwgYmJveFszXSlcbiAgICBpZiAoeE1pbiA+PSB4TWF4IHx8IHlNaW4gPj0geU1heCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBbeE1pbiwgeU1pbiwgeE1heCwgeU1heF1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7e3g6bnVtYmVyLHk6bnVtYmVyLFtrZXk6c3RyaW5nXTphbnl9fSBDT0dlb0NlbGxcbiAqIEB0eXBlZGVmIHt7Y291bnQ6bnVtYmVyLG5hbWVzOnN0cmluZ1tdLG5vRGF0YTphbnksbWV0YWRhdGE6QXJyYXkuPFJlY29yZDxzdHJpbmcsYW55PnxudWxsPn19IENPR2VvUmFzdGVySW5mb1xuICovXG5cbi8qKlxuICogQHBhcmFtIHt7aGVhZGVycz86UmVjb3JkPHN0cmluZyxzdHJpbmc+LGNyZWRlbnRpYWxzPzpSZXF1ZXN0Q3JlZGVudGlhbHMsbWF4UmFuZ2VzPzpudW1iZXJ9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRSZW1vdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxvd0Z1bGxGaWxlOiBmYWxzZSxcbiAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzIH0gOiB7fSksXG4gICAgICAgIC4uLihvcHRpb25zLmNyZWRlbnRpYWxzID8geyBjcmVkZW50aWFsczogb3B0aW9ucy5jcmVkZW50aWFscyB9IDoge30pLFxuICAgICAgICAuLi4oTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLm1heFJhbmdlcykgPyB7IG1heFJhbmdlczogb3B0aW9ucy5tYXhSYW5nZXMgfSA6IHt9KSxcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbGVYXG4gKiBAcGFyYW0ge251bWJlcn0gdGlsZVlcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlV2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aWxlSGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gaW1hZ2VXaWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGltYWdlSGVpZ2h0XG4gKiBAcmV0dXJucyB7W251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl19XG4gKi9cbmZ1bmN0aW9uIGdldFRpbGVXaW5kb3codGlsZVgsIHRpbGVZLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0KSB7XG4gICAgY29uc3QgeE1pbiA9IHRpbGVYICogdGlsZVdpZHRoXG4gICAgY29uc3QgeU1pbiA9IHRpbGVZICogdGlsZUhlaWdodFxuICAgIHJldHVybiBbXG4gICAgICAgIHhNaW4sXG4gICAgICAgIHlNaW4sXG4gICAgICAgIE1hdGgubWluKHhNaW4gKyB0aWxlV2lkdGgsIGltYWdlV2lkdGgpLFxuICAgICAgICBNYXRoLm1pbih5TWluICsgdGlsZUhlaWdodCwgaW1hZ2VIZWlnaHQpLFxuICAgIF1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3tcbiAqICByYXN0ZXI6QXJyYXkuPEFycmF5TGlrZTxudW1iZXI+PixcbiAqICB0aWxlV2luZG93OltudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxuICogIHdpbmRvdzpbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcbiAqICBvcmlnaW5YOm51bWJlcixcbiAqICBvcmlnaW5ZOm51bWJlcixcbiAqICByZXNvbHV0aW9uWDpudW1iZXIsXG4gKiAgcmVzb2x1dGlvblk6bnVtYmVyLFxuICogIGlzUGl4ZWxBcmVhOmJvb2xlYW4sXG4gKiAgYmFuZHM6bnVtYmVyW10sXG4gKiAgcmFzdGVySW5mbzpDT0dlb1Jhc3RlckluZm8sXG4gKiAgcHJlcHJvY2Vzcz86ZnVuY3Rpb24oQ09HZW9DZWxsKTpib29sZWFuXG4gKiB9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7QXJyYXkuPENPR2VvQ2VsbD59XG4gKi9cbmZ1bmN0aW9uIGNlbGxzRnJvbVJhc3Rlcih7XG4gICAgcmFzdGVyLFxuICAgIHRpbGVXaW5kb3csXG4gICAgd2luZG93LFxuICAgIG9yaWdpblgsXG4gICAgb3JpZ2luWSxcbiAgICByZXNvbHV0aW9uWCxcbiAgICByZXNvbHV0aW9uWSxcbiAgICBpc1BpeGVsQXJlYSxcbiAgICBiYW5kcyxcbiAgICByYXN0ZXJJbmZvLFxuICAgIHByZXByb2Nlc3MsXG59KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJhc3RlcikgfHwgcmFzdGVyLmxlbmd0aCAhPT0gYmFuZHMubGVuZ3RoKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPR2VvIHRpbGUgZGF0YSBkb2VzIG5vdCBtYXRjaCB0aGUgc2VsZWN0ZWQgYmFuZHMuJylcblxuICAgIGNvbnN0IHRpbGVXaWR0aCA9IHRpbGVXaW5kb3dbMl0gLSB0aWxlV2luZG93WzBdXG4gICAgY29uc3QgdGlsZUhlaWdodCA9IHRpbGVXaW5kb3dbM10gLSB0aWxlV2luZG93WzFdXG4gICAgaWYgKHJhc3Rlci5zb21lKChiYW5kKSA9PiBiYW5kLmxlbmd0aCAhPT0gdGlsZVdpZHRoICogdGlsZUhlaWdodCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ09HZW8gdGlsZSBkYXRhIGRvZXMgbm90IG1hdGNoIGl0cyBkaW1lbnNpb25zLicpXG5cbiAgICBjb25zdCB4U3RhcnQgPSBNYXRoLm1heCh0aWxlV2luZG93WzBdLCB3aW5kb3dbMF0pXG4gICAgY29uc3QgeVN0YXJ0ID0gTWF0aC5tYXgodGlsZVdpbmRvd1sxXSwgd2luZG93WzFdKVxuICAgIGNvbnN0IHhTdG9wID0gTWF0aC5taW4odGlsZVdpbmRvd1syXSwgd2luZG93WzJdKVxuICAgIGNvbnN0IHlTdG9wID0gTWF0aC5taW4odGlsZVdpbmRvd1szXSwgd2luZG93WzNdKVxuICAgIC8qKiBAdHlwZSB7QXJyYXkuPENPR2VvQ2VsbD59ICovXG4gICAgY29uc3QgY2VsbHMgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IHlTdGFydDsgeSA8IHlTdG9wOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IHhTdGFydDsgeCA8IHhTdG9wOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gKHkgLSB0aWxlV2luZG93WzFdKSAqIHRpbGVXaWR0aCArIHggLSB0aWxlV2luZG93WzBdXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gb3JpZ2luWCArIHggKiByZXNvbHV0aW9uWFxuICAgICAgICAgICAgY29uc3QgdG9wID0gb3JpZ2luWSArIHkgKiByZXNvbHV0aW9uWVxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IC8qKiBAdHlwZSB7Q09HZW9DZWxsfSAqLyAoe1xuICAgICAgICAgICAgICAgIHg6IHNuYXBJbnRlZ2VyTm9pc2UoXG4gICAgICAgICAgICAgICAgICAgIGlzUGl4ZWxBcmVhID8gTWF0aC5taW4obGVmdCwgbGVmdCArIHJlc29sdXRpb25YKSA6IGxlZnQgLSBNYXRoLmFicyhyZXNvbHV0aW9uWCkgLyAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB5OiBzbmFwSW50ZWdlck5vaXNlKFxuICAgICAgICAgICAgICAgICAgICBpc1BpeGVsQXJlYSA/IE1hdGgubWluKHRvcCwgdG9wICsgcmVzb2x1dGlvblkpIDogdG9wIC0gTWF0aC5hYnMocmVzb2x1dGlvblkpIC8gMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGhhc0RhdGEgPSBmYWxzZVxuXG4gICAgICAgICAgICBmb3IgKGxldCBiYW5kSW5kZXggPSAwOyBiYW5kSW5kZXggPCBiYW5kcy5sZW5ndGg7IGJhbmRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByYXN0ZXJbYmFuZEluZGV4XVtwaXhlbF1cbiAgICAgICAgICAgICAgICBjb25zdCBiYW5kTm9EYXRhID0gZ2V0QmFuZE5vRGF0YShyYXN0ZXJJbmZvLm5vRGF0YSwgcmFzdGVySW5mby5tZXRhZGF0YVtiYW5kSW5kZXhdKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzTm9EYXRhID0gTnVtYmVyLmlzTmFOKHZhbHVlKSB8fCBpc05vRGF0YVZhbHVlKHZhbHVlLCBiYW5kTm9EYXRhKVxuICAgICAgICAgICAgICAgIGNlbGxbcmFzdGVySW5mby5uYW1lc1tiYW5kSW5kZXhdXSA9IGlzTm9EYXRhID8gdW5kZWZpbmVkIDogdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9EYXRhKSBoYXNEYXRhID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc0RhdGEpIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAocHJlcHJvY2VzcyAmJiBwcmVwcm9jZXNzKGNlbGwpID09PSBmYWxzZSkgY29udGludWVcbiAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2VsbHNcbn1cblxuLyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xuZnVuY3Rpb24gc25hcEludGVnZXJOb2lzZSh2YWx1ZSkge1xuICAgIGNvbnN0IG5lYXJlc3RJbnRlZ2VyID0gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgICByZXR1cm4gTWF0aC5hYnModmFsdWUgLSBuZWFyZXN0SW50ZWdlcikgPCAxZS05ID8gbmVhcmVzdEludGVnZXIgOiB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcmlnaW5YXG4gKiBAcGFyYW0ge251bWJlcn0gb3JpZ2luWVxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb25YXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbllcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXX0gYmJveFxuICogQHJldHVybnMge1tudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdfHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gZ2V0UGl4ZWxXaW5kb3cob3JpZ2luWCwgb3JpZ2luWSwgcmVzb2x1dGlvblgsIHJlc29sdXRpb25ZLCB3aWR0aCwgaGVpZ2h0LCBiYm94KSB7XG4gICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgKGJib3hbMF0gLSBvcmlnaW5YKSAvIHJlc29sdXRpb25YLFxuICAgICAgICAoYmJveFsyXSAtIG9yaWdpblgpIC8gcmVzb2x1dGlvblgsXG4gICAgXVxuICAgIGNvbnN0IHJvd3MgPSBbXG4gICAgICAgIChiYm94WzFdIC0gb3JpZ2luWSkgLyByZXNvbHV0aW9uWSxcbiAgICAgICAgKGJib3hbM10gLSBvcmlnaW5ZKSAvIHJlc29sdXRpb25ZLFxuICAgIF1cbiAgICBjb25zdCB4TWluID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihNYXRoLm1pbiguLi5jb2x1bW5zKSkpXG4gICAgY29uc3QgeE1heCA9IE1hdGgubWluKHdpZHRoLCBNYXRoLmNlaWwoTWF0aC5tYXgoLi4uY29sdW1ucykpKVxuICAgIGNvbnN0IHlNaW4gPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKE1hdGgubWluKC4uLnJvd3MpKSlcbiAgICBjb25zdCB5TWF4ID0gTWF0aC5taW4oaGVpZ2h0LCBNYXRoLmNlaWwoTWF0aC5tYXgoLi4ucm93cykpKVxuICAgIGlmICh4TWluID49IHhNYXggfHwgeU1pbiA+PSB5TWF4KSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIFt4TWluLCB5TWluLCB4TWF4LCB5TWF4XVxufVxuXG5mdW5jdGlvbiBnZXRCYW5kTm9EYXRhKGdsb2JhbE5vRGF0YSwgbWV0YWRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1ldGFkYXRhID8gbWV0YWRhdGEuTk9EQVRBX1ZBTFVFIDogdW5kZWZpbmVkXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgcmV0dXJuIGdsb2JhbE5vRGF0YVxufVxuXG5mdW5jdGlvbiBpc05vRGF0YVZhbHVlKHZhbHVlLCBub0RhdGFWYWx1ZSkge1xuICAgIGlmIChub0RhdGFWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIE51bWJlci5pc05hTihub0RhdGFWYWx1ZSkgPyBOdW1iZXIuaXNOYU4odmFsdWUpIDogdmFsdWUgPT09IG5vRGF0YVZhbHVlXG59XG4iLCJjb25zdCBXT1JLRVJfQ09VTlQgPSAyXG5jb25zdCB3b3JrZXJzID0gW11cbmNvbnN0IHJlcXVlc3RzID0gbmV3IE1hcCgpXG5sZXQgbmV4dFdvcmtlciA9IDBcbmxldCBuZXh0UmVxdWVzdCA9IDBcbmxldCB3b3JrZXJzRmFpbGVkID0gdHlwZW9mIFdvcmtlciA9PT0gJ3VuZGVmaW5lZCdcblxuZnVuY3Rpb24gdXNlTWFpblRocmVhZChyZXF1ZXN0KSB7XG4gICAgcmVxdWVzdC5pbWFnZVxuICAgICAgICAucmVhZFJhc3RlcnMoeyB3aW5kb3c6IHJlcXVlc3Qud2luZG93LCBzYW1wbGVzOiByZXF1ZXN0LnNhbXBsZXMgfSlcbiAgICAgICAgLnRoZW4ocmVxdWVzdC5yZXNvbHZlLCByZXF1ZXN0LnJlamVjdClcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVdvcmtlcnMoKSB7XG4gICAgd29ya2Vyc0ZhaWxlZCA9IHRydWVcbiAgICBmb3IgKGNvbnN0IHdvcmtlciBvZiB3b3JrZXJzKSB3b3JrZXIudGVybWluYXRlKClcbiAgICB3b3JrZXJzLmxlbmd0aCA9IDBcblxuICAgIGNvbnN0IHBlbmRpbmcgPSBbLi4ucmVxdWVzdHMudmFsdWVzKCldXG4gICAgcmVxdWVzdHMuY2xlYXIoKVxuICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBwZW5kaW5nKSB1c2VNYWluVGhyZWFkKHJlcXVlc3QpXG59XG5cbmZ1bmN0aW9uIGdldFdvcmtlcnMoKSB7XG4gICAgaWYgKHdvcmtlcnNGYWlsZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICBpZiAod29ya2Vycy5sZW5ndGgpIHJldHVybiB3b3JrZXJzXG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgV09SS0VSX0NPVU5UOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoJy4vQ09HZW9UaWxlV29ya2VyLmpzJywgaW1wb3J0Lm1ldGEudXJsKSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdvcmtlci5vbmVycm9yID0gZGlzYWJsZVdvcmtlcnNcbiAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2VlcnJvciA9IGRpc2FibGVXb3JrZXJzXG4gICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHJlcXVlc3RzLmdldChkYXRhLmlkKVxuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgcmVxdWVzdHMuZGVsZXRlKGRhdGEuaWQpXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJlcXVlc3QucmVqZWN0KG5ldyBFcnJvcihkYXRhLmVycm9yKSlcbiAgICAgICAgICAgICAgICBlbHNlIHJlcXVlc3QucmVzb2x2ZShkYXRhLnJhc3RlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdvcmtlcnMucHVzaCh3b3JrZXIpXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkaXNhYmxlV29ya2VycygpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgcmV0dXJuIHdvcmtlcnNcbn1cblxuLyoqXG4gKiBSZWFkIG9uZSBjb21wbGV0ZSBUSUZGIHRpbGUuIFRoZSB3b3JrZXIncyBHZW9USUZGIGRlY29kZXIgYWxzbyBwZXJmb3Jtc1xuICogY29tcHJlc3NlZC10aWxlIGRlY29kaW5nIG9mZiB0aGUgbWFpbiB0aHJlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkVGlsZSh1cmwsIHJlbW90ZU9wdGlvbnMsIGltYWdlLCB3aW5kb3csIHNhbXBsZXMpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0geyBpbWFnZSwgd2luZG93LCBzYW1wbGVzIH1cbiAgICBjb25zdCBwb29sID0gZ2V0V29ya2VycygpXG4gICAgaWYgKCFwb29sKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB1c2VNYWluVGhyZWFkKHsgLi4ucmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0IH0pKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gbmV4dFJlcXVlc3QrK1xuICAgICAgICBjb25zdCB3b3JrZXIgPSBwb29sW25leHRXb3JrZXJdXG4gICAgICAgIG5leHRXb3JrZXIgPSAobmV4dFdvcmtlciArIDEpICUgcG9vbC5sZW5ndGhcbiAgICAgICAgcmVxdWVzdHMuc2V0KGlkLCB7IC4uLnJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCB9KVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXJsLCByZW1vdGVPcHRpb25zLCB3aW5kb3csIHNhbXBsZXMpXG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCwgdXJsLCByZW1vdGVPcHRpb25zLCB3aW5kb3csIHNhbXBsZXMgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc2FibGVXb3JrZXJzKClcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCIvL0B0cy1jaGVja1xuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IERhdGFzZXQgfSBmcm9tICdncmlkdml6J1xuaW1wb3J0IHsgZnJvbVVybCB9IGZyb20gJ2dlb3RpZmYnXG5cbi8qKlxuICogQSBkYXRhc2V0IGNvbXBvc2VkIG9mIGEgc2luZ2xlIEdlb1RpZmYgZmlsZS5cbiAqXG4gKiBAbW9kdWxlIGRhdGFzZXRcbiAqIEBhdXRob3IgSm9zZXBoIERhdmllcywgSnVsaWVuIEdhZmZ1cmlcbiAqL1xuZXhwb3J0IGNsYXNzIEdlb1RJRkYgZXh0ZW5kcyBEYXRhc2V0IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWFwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7e3ByZXByb2Nlc3M/OmZ1bmN0aW9uKG9iamVjdCk6Ym9vbGVhbiwgYmFuZHM/Om51bWJlcltdfX0gb3B0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgdXJsLCBvcHRzID0ge30pIHtcbiAgICAgICAgc3VwZXIobWFwLCB1cmwsIC0xLCBvcHRzKVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPG9iamVjdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNlbGxzID0gW11cblxuICAgICAgICAvKipcbiAgICAgICAgICogWmVyby1iYXNlZCBiYW5kIGluZGV4ZXMgdG8gbG9hZDsgdW5kZWZpbmVkIG1lYW5zIGFsbCBiYW5kcy5cbiAgICAgICAgICogQHR5cGUge251bWJlcltdfHVuZGVmaW5lZH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFuZHMgPSBvcHRzLmJhbmRzXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ25vdExvYWRlZCdcblxuICAgICAgICB0aGlzLmdldERhdGEoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIEdlb1RJRkYgb25jZSBhbmQgY29udmVydCBpdHMgcGl4ZWxzIHRvIEdyaWRWaXogY2VsbHMuXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5mb0xvYWRpbmdTdGF0dXMgIT09ICdub3RMb2FkZWQnKSByZXR1cm4gdGhpc1xuXG4gICAgICAgIHRoaXMuaW5mb0xvYWRpbmdTdGF0dXMgPSAnbG9hZGluZydcbiAgICAgICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpZmYgPSBhd2FpdCBmcm9tVXJsKHRoaXMudXJsLCB7IGFsbG93RnVsbEZpbGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHRpZmYuZ2V0SW1hZ2UoKVxuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGJhbmQgaW5kZXhlc1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYmFuZENvdW50ID0gaW1hZ2UuZ2V0U2FtcGxlc1BlclBpeGVsKClcbiAgICAgICAgICAgICAgICBjb25zdCBiYW5kcyA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFuZHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBBcnJheS5mcm9tKHsgbGVuZ3RoOiBiYW5kQ291bnQgfSwgKF8sIGluZGV4KSA9PiBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYW5kc1xuXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJhbmRzKSB8fCBiYW5kcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaGUgYmFuZHMgb3B0aW9uIG11c3QgYmUgYSBub24tZW1wdHkgYXJyYXkgb2YgemVyby1iYXNlZCBiYW5kIGluZGV4ZXMuJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKGJhbmRzLnNvbWUoKGJhbmQpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKGJhbmQpIHx8IGJhbmQgPCAwIHx8IGJhbmQgPj0gYmFuZENvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEJhbmQgaW5kZXhlcyBtdXN0IGJlIGludGVnZXJzIGJldHdlZW4gMCBhbmQgJHtiYW5kQ291bnQgLSAxfS5gKVxuICAgICAgICAgICAgICAgIGlmIChuZXcgU2V0KGJhbmRzKS5zaXplICE9PSBiYW5kcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGJhbmRzIG9wdGlvbiBtdXN0IG5vdCBjb250YWluIGR1cGxpY2F0ZSBpbmRleGVzLicpXG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYmFuZCBuYW1lc1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChiYW5kcy5tYXAoKGJhbmQpID0+IGltYWdlLmdldEdEQUxNZXRhZGF0YShiYW5kKSkpXG4gICAgICAgICAgICAgICAgY29uc3QgYmFuZE5hbWVzID0gbWV0YWRhdGEubWFwKChiYW5kTWV0YWRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYmFuZE1ldGFkYXRhICYmIGJhbmRNZXRhZGF0YS5ERVNDUklQVElPTlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRlc2NyaXB0aW9uID09PSAnc3RyaW5nJyAmJiBkZXNjcmlwdGlvbi5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDogYGJhbmQke2JhbmRzW2luZGV4XSArIDF9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKG5ldyBTZXQoYmFuZE5hbWVzKS5zaXplICE9PSBiYW5kTmFtZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlb1RJRkYgYmFuZCBuYW1lcyBtdXN0IGJlIHVuaXF1ZSB0byBjcmVhdGUgY2VsbCBwcm9wZXJ0aWVzLicpXG4gICAgICAgICAgICAgICAgaWYgKGJhbmROYW1lcy5zb21lKChuYW1lKSA9PiBuYW1lID09PSAneCcgfHwgbmFtZSA9PT0gJ3knKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0dlb1RJRkYgYmFuZCBuYW1lcyBjYW5ub3QgYmUgXCJ4XCIgb3IgXCJ5XCIsIHdoaWNoIGFyZSByZXNlcnZlZCBmb3IgY2VsbCBjb29yZGluYXRlcy4nXG4gICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSByZXNvbHV0aW9uc1xuXG4gICAgICAgICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25YLCByZXNvbHV0aW9uWV0gPSBpbWFnZS5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsV2lkdGggPSBNYXRoLmFicyhyZXNvbHV0aW9uWClcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gTWF0aC5hYnMocmVzb2x1dGlvblkpXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhTnVtYmVyLmlzRmluaXRlKGNlbGxXaWR0aCkgfHxcbiAgICAgICAgICAgICAgICAgICAgIU51bWJlci5pc0Zpbml0ZShjZWxsSGVpZ2h0KSB8fFxuICAgICAgICAgICAgICAgICAgICBjZWxsV2lkdGggPD0gMCB8fFxuICAgICAgICAgICAgICAgICAgICBjZWxsSGVpZ2h0IDw9IDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvVElGRiBwaXhlbCBkaW1lbnNpb25zIG11c3QgYmUgZmluaXRlIGFuZCBncmVhdGVyIHRoYW4gemVyby4nKVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhjZWxsV2lkdGggLSBjZWxsSGVpZ2h0KSA+IE1hdGgubWF4KGNlbGxXaWR0aCwgY2VsbEhlaWdodCkgKiAxZS05KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dyaWRWaXogcmVxdWlyZXMgc3F1YXJlIEdlb1RJRkYgcGl4ZWxzLicpXG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBub24gcm90YXRlZCBpbWFnZXNcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWF0aW9uID0gaW1hZ2UuZ2V0RmlsZURpcmVjdG9yeSgpLmdldFZhbHVlKCdNb2RlbFRyYW5zZm9ybWF0aW9uJylcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyh0cmFuc2Zvcm1hdGlvblsxXSkgPiBjZWxsV2lkdGggKiAxZS0xMiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnModHJhbnNmb3JtYXRpb25bNF0pID4gY2VsbEhlaWdodCAqIDFlLTEyKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3RhdGVkIEdlb1RJRkYgaW1hZ2VzIGFyZSBub3Qgc3VwcG9ydGVkLicpXG5cblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSByYXN0ZXIgc2l6ZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS5nZXRXaWR0aCgpXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuZ2V0SGVpZ2h0KClcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbENvdW50ID0gd2lkdGggKiBoZWlnaHRcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhc3RlciA9IGF3YWl0IGltYWdlLnJlYWRSYXN0ZXJzKHsgc2FtcGxlczogYmFuZHMgfSlcbiAgICAgICAgICAgICAgICBpZiAocmFzdGVyLmxlbmd0aCAhPT0gYmFuZHMubGVuZ3RoIHx8IHJhc3Rlci5zb21lKChiYW5kKSA9PiBiYW5kLmxlbmd0aCAhPT0gcGl4ZWxDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvVElGRiByYXN0ZXIgZGF0YSBkb2VzIG5vdCBtYXRjaCB0aGUgaW1hZ2UgZGltZW5zaW9ucy4nKVxuXG4gICAgICAgICAgICAgICAgLy8gcmVhZCByYXN0ZXIgZGF0YSBhbmQgY29udmVydCB0byBHcmlkVml6IGNlbGxzXG5cbiAgICAgICAgICAgICAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luWV0gPSBpbWFnZS5nZXRPcmlnaW4oKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGl4ZWxBcmVhID0gaW1hZ2UuZ2V0R2VvS2V5cygpPy5HVFJhc3RlclR5cGVHZW9LZXkgIT09IDJcbiAgICAgICAgICAgICAgICBjb25zdCBub0RhdGFWYWx1ZSA9IGltYWdlLmdldEdEQUxOb0RhdGEoKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBbXVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgd2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHJvdyAqIHdpZHRoICsgY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGlzUGl4ZWxBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblggKyBjb2x1bW4gKiByZXNvbHV0aW9uWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWCArIChjb2x1bW4gKyAxKSAqIHJlc29sdXRpb25YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9yaWdpblggKyBjb2x1bW4gKiByZXNvbHV0aW9uWCAtIGNlbGxXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogaXNQaXhlbEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihvcmlnaW5ZICsgcm93ICogcmVzb2x1dGlvblksIG9yaWdpblkgKyAocm93ICsgMSkgKiByZXNvbHV0aW9uWSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvcmlnaW5ZICsgcm93ICogcmVzb2x1dGlvblkgLSBjZWxsSGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNEYXRhID0gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYmFuZEluZGV4ID0gMDsgYmFuZEluZGV4IDwgYmFuZHMubGVuZ3RoOyBiYW5kSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmFzdGVyW2JhbmRJbmRleF1bcGl4ZWxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFuZE5vRGF0YSA9IGdldEJhbmROb0RhdGEobm9EYXRhVmFsdWUsIG1ldGFkYXRhW2JhbmRJbmRleF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNOb0RhdGEgPSBOdW1iZXIuaXNOYU4odmFsdWUpIHx8IGlzTm9EYXRhVmFsdWUodmFsdWUsIGJhbmROb0RhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFtiYW5kTmFtZXNbYmFuZEluZGV4XV0gPSBpc05vRGF0YSA/IHVuZGVmaW5lZCA6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05vRGF0YSkgaGFzRGF0YSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEYXRhKSBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlcHJvY2VzcyAmJiB0aGlzLnByZXByb2Nlc3MoY2VsbCkgPT09IGZhbHNlKSBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gY2VsbFdpZHRoXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IGNlbGxzXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTG9hZGluZ1N0YXR1cyA9ICdsb2FkZWQnXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwKSB0aGlzLm1hcC5yZWRyYXcoKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgbG9hZCBkYXRhIGZyb20gJyArIHRoaXMudXJsKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTG9hZGluZ1N0YXR1cyA9ICdmYWlsZWQnXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBjZWxscyBpbnRlcnNlY3RpbmcgdGhlIGN1cnJlbnQgZ2VvZ3JhcGhpYyBleHRlbnQuXG4gICAgICogQHBhcmFtIHt7eE1pbjpudW1iZXIsIHhNYXg6bnVtYmVyLCB5TWluOm51bWJlciwgeU1heDpudW1iZXJ9fSBleHRHZW9cbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3Q2FjaGUoZXh0R2VvKSB7XG4gICAgICAgIHRoaXMuY2VsbHNWaWV3Q2FjaGUgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5jZWxscykge1xuICAgICAgICAgICAgaWYgKCtjZWxsLnggKyB0aGlzLnJlc29sdXRpb24gPCBleHRHZW8ueE1pbikgY29udGludWVcbiAgICAgICAgICAgIGlmICgrY2VsbC54IC0gdGhpcy5yZXNvbHV0aW9uID4gZXh0R2VvLnhNYXgpIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAoK2NlbGwueSArIHRoaXMucmVzb2x1dGlvbiA8IGV4dEdlby55TWluKSBjb250aW51ZVxuICAgICAgICAgICAgaWYgKCtjZWxsLnkgLSB0aGlzLnJlc29sdXRpb24gPiBleHRHZW8ueU1heCkgY29udGludWVcbiAgICAgICAgICAgIHRoaXMuY2VsbHNWaWV3Q2FjaGUucHVzaChjZWxsKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRCYW5kTm9EYXRhKGdsb2JhbE5vRGF0YSwgbWV0YWRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1ldGFkYXRhID8gbWV0YWRhdGEuTk9EQVRBX1ZBTFVFIDogdW5kZWZpbmVkXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybiBOdW1iZXIodmFsdWUpXG4gICAgcmV0dXJuIGdsb2JhbE5vRGF0YVxufVxuXG5mdW5jdGlvbiBpc05vRGF0YVZhbHVlKHZhbHVlLCBub0RhdGFWYWx1ZSkge1xuICAgIGlmIChub0RhdGFWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIE51bWJlci5pc05hTihub0RhdGFWYWx1ZSkgPyBOdW1iZXIuaXNOYU4odmFsdWUpIDogdmFsdWUgPT09IG5vRGF0YVZhbHVlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmooY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiAoY2h1bmtJZCArIFwiLmdyaWR2aXotdGlmZi5qc1wiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSk7IiwiY29uc3QgaW5Qcm9ncmVzcyA9IHt9O1xuY29uc3QgZGF0YVdlYnBhY2tQcmVmaXggPSBcImdyaWR2aXoudGlmZjpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdGxldCBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0Y29uc3Qgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRjb25zdCBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucz8uZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwibGV0IHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbmNvbnN0IGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ/LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0Y29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHRsZXQgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cHM/Oi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6fFs/I10uKiQvZywgXCJcIikucmVwbGFjZSgvXFwvW14vXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9ICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmJhc2VVUkkpIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG5jb25zdCBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHRsZXQgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0Y29uc3QgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5ldmVudCA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCksIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmNvbnN0IHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdGxldCBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbmNvbnN0IGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtncmlkdml6X3RpZmZcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ3JpZHZpel90aWZmXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvL0B0cy1jaGVja1xuJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCB7IEdlb1RJRkYgfSBmcm9tIFwiLi9HZW9USUZGLmpzXCJcbmV4cG9ydCB7IENPR2VvIH0gZnJvbSBcIi4vQ09HZW8uanNcIlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9