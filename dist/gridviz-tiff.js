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
//@ts-check


;

/**
 * @todo
 * A dataset composed of a COGeo file.
 * @see https://www.cogeo.org/
 *
 * @module dataset
 * @author Joseph Davies, Julien Gaffuri
 */
class COGeo extends gridviz__WEBPACK_IMPORTED_MODULE_0__.Dataset {
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)
    }

    //TODO

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
     * @param {number} resolution Initial resolution; the GeoTIFF pixel size is used after loading.
     * @param {{preprocess?:function(object):boolean, bands?:number[]}} opts
     */
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)

        /**
         * @private
         * @type {Array.<object>}
         */
        this.cells = []

        /**
         * Zero-based sample indexes to load; undefined means all samples.
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
                //similar to what class ParquetGrid from NPM gridviz-parquet plugin does with geotiff.js library
                const tiff = await (0,geotiff__WEBPACK_IMPORTED_MODULE_1__.fromUrl)(this.url, { allowFullFile: true })
                const image = await tiff.getImage()
                const sampleCount = image.getSamplesPerPixel()
                const bands =
                    this.bands === undefined
                        ? Array.from({ length: sampleCount }, (_, index) => index)
                        : this.bands

                if (!Array.isArray(bands) || bands.length === 0)
                    throw new Error(
                        'The bands option must be a non-empty array of zero-based sample indexes.'
                    )
                if (bands.some((band) => !Number.isInteger(band) || band < 0 || band >= sampleCount))
                    throw new RangeError(`Band indexes must be integers between 0 and ${sampleCount - 1}.`)
                if (new Set(bands).size !== bands.length)
                    throw new Error('The bands option must not contain duplicate indexes.')

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

                const transformation = image.getFileDirectory().getValue('ModelTransformation')
                if (
                    transformation &&
                    (Math.abs(transformation[1]) > cellWidth * 1e-12 ||
                        Math.abs(transformation[4]) > cellHeight * 1e-12)
                )
                    throw new Error('Rotated GeoTIFF images are not supported.')

                const width = image.getWidth()
                const height = image.getHeight()
                const pixelCount = width * height
                const raster = await image.readRasters({ samples: bands })
                if (raster.length !== bands.length || raster.some((band) => band.length !== pixelCount))
                    throw new Error('GeoTIFF raster data does not match the image dimensions.')

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
/******/ 		// no baseURI
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BMZTtBQUNmLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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RTs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDOztXQUVqQztXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsZUFBZTtXQUNmO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNZOztBQUUwQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcImdyaWR2aXpcIixcImNvbW1vbmpzXCI6XCJncmlkdml6XCIsXCJjb21tb25qczJcIjpcImdyaWR2aXpcIixcImFtZFwiOlwiZ3JpZHZpelwifSIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvaWdub3JlZHwvaG9tZS9qdWp1L3dvcmtzcGFjZS9ncmlkdml6LXRpZmYvbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2NsaWVudHxodHRwIiwid2VicGFjazovL2dyaWR2aXoudGlmZi9pZ25vcmVkfC9ob21lL2p1anUvd29ya3NwYWNlL2dyaWR2aXotdGlmZi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50fGh0dHBzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi9pZ25vcmVkfC9ob21lL2p1anUvd29ya3NwYWNlL2dyaWR2aXotdGlmZi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50fHVybCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvaWdub3JlZHwvaG9tZS9qdWp1L3dvcmtzcGFjZS9ncmlkdml6LXRpZmYvbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlfGZzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9AcGV0YW1vcmlrZW4vZmxvYXQxNi9zcmMvRGF0YVZpZXcubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9AcGV0YW1vcmlrZW4vZmxvYXQxNi9zcmMvX3V0aWwvYXJyYXlJdGVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9jb252ZXJ0ZXIubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9AcGV0YW1vcmlrZW4vZmxvYXQxNi9zcmMvX3V0aWwvbWVzc2FnZXMubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9AcGV0YW1vcmlrZW4vZmxvYXQxNi9zcmMvX3V0aWwvcHJpbW9yZGlhbHMubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2NvbXByZXNzaW9uL2luZGV4LmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2RhdGFzbGljZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9kYXRhdmlldzY0LmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2dlb3RpZmYuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZ2VvdGlmZmltYWdlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2dlb3RpZmZ3cml0ZXIuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9pbWFnZWZpbGVkaXJlY3RvcnkuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvcmVzYW1wbGUuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvcmdiLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9hcnJheWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvYmFzZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvYmxvY2tlZHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2NsaWVudC9mZXRjaC5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50L2h0dHAuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2NsaWVudC94aHIuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2ZpbGVyZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2h0dHB1dGlscy5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvcmVtb3RlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3V0aWxzLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9xdWljay1scnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3htbC11dGlscy9jb3VudC1zdWJzdHJpbmcubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy94bWwtdXRpbHMvZmluZC10YWctYnktbmFtZS5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3htbC11dGlscy9maW5kLXRhZ3MtYnktbmFtZS5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3htbC11dGlscy9nZXQtYXR0cmlidXRlLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2luZGV4LW9mLW1hdGNoLWVuZC5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3htbC11dGlscy9pbmRleC1vZi1tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vc3JjL0NPR2VvLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL3NyYy9HZW9USUZGLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJncmlkdml6XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImdyaWR2aXpcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3JpZHZpelwiXSA9IGZhY3RvcnkocmVxdWlyZShcImdyaWR2aXpcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImdyaWR2aXpcIl0gPSByb290W1wiZ3JpZHZpelwiXSB8fCB7fSwgcm9vdFtcImdyaWR2aXpcIl1bXCJ0aWZmXCJdID0gZmFjdG9yeShyb290W1wiZ3JpZHZpelwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ncmlkdml6X18pID0+IHtcbnJldHVybiAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3JpZHZpel9fOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsImltcG9ydCB7IHNhZmVJZk5lZWRlZCB9IGZyb20gXCIuL191dGlsL2FycmF5SXRlcmF0b3IubWpzXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9OdW1iZXIsIHJvdW5kVG9GbG9hdDE2Qml0cyB9IGZyb20gXCIuL191dGlsL2NvbnZlcnRlci5tanNcIjtcbmltcG9ydCB7XG4gIERhdGFWaWV3UHJvdG90eXBlR2V0VWludDE2LFxuICBEYXRhVmlld1Byb3RvdHlwZVNldFVpbnQxNixcbn0gZnJvbSBcIi4vX3V0aWwvcHJpbW9yZGlhbHMubWpzXCI7XG5cbi8qKlxuICogcmV0dXJucyBhbiB1bnNpZ25lZCAxNi1iaXQgZmxvYXQgYXQgdGhlIHNwZWNpZmllZCBieXRlIG9mZnNldCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgRGF0YVZpZXdcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3XG4gKiBAcGFyYW0ge251bWJlcn0gYnl0ZU9mZnNldFxuICogQHBhcmFtIHtbYm9vbGVhbl19IG9wdHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGbG9hdDE2KGRhdGFWaWV3LCBieXRlT2Zmc2V0LCAuLi5vcHRzKSB7XG4gIHJldHVybiBjb252ZXJ0VG9OdW1iZXIoXG4gICAgRGF0YVZpZXdQcm90b3R5cGVHZXRVaW50MTYoZGF0YVZpZXcsIGJ5dGVPZmZzZXQsIC4uLnNhZmVJZk5lZWRlZChvcHRzKSlcbiAgKTtcbn1cblxuLyoqXG4gKiBzdG9yZXMgYW4gdW5zaWduZWQgMTYtYml0IGZsb2F0IHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgYnl0ZSBvZmZzZXQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIERhdGFWaWV3XG4gKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlld1xuICogQHBhcmFtIHtudW1iZXJ9IGJ5dGVPZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtbYm9vbGVhbl19IG9wdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZsb2F0MTYoZGF0YVZpZXcsIGJ5dGVPZmZzZXQsIHZhbHVlLCAuLi5vcHRzKSB7XG4gIHJldHVybiBEYXRhVmlld1Byb3RvdHlwZVNldFVpbnQxNihcbiAgICBkYXRhVmlldyxcbiAgICBieXRlT2Zmc2V0LFxuICAgIHJvdW5kVG9GbG9hdDE2Qml0cyh2YWx1ZSksXG4gICAgLi4uc2FmZUlmTmVlZGVkKG9wdHMpXG4gICk7XG59XG4iLCJpbXBvcnQge1xuICBBcnJheUl0ZXJhdG9yUHJvdG90eXBlLFxuICBBcnJheUl0ZXJhdG9yUHJvdG90eXBlTmV4dCxcbiAgQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvcixcbiAgR2VuZXJhdG9yUHJvdG90eXBlTmV4dCxcbiAgSXRlcmF0b3JQcm90b3R5cGUsXG4gIE5hdGl2ZUFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IsXG4gIE5hdGl2ZVdlYWtNYXAsXG4gIE9iamVjdENyZWF0ZSxcbiAgT2JqZWN0RGVmaW5lUHJvcGVydHksXG4gIFJlZmxlY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIFJlZmxlY3RPd25LZXlzLFxuICBTeW1ib2xJdGVyYXRvcixcbiAgV2Vha01hcFByb3RvdHlwZUdldCxcbiAgV2Vha01hcFByb3RvdHlwZVNldCxcbn0gZnJvbSBcIi4vcHJpbW9yZGlhbHMubWpzXCI7XG5cbi8qKiBAdHlwZSB7V2Vha01hcDx7fSwgSXRlcmFibGVJdGVyYXRvcjxhbnk+Pn0gKi9cbmNvbnN0IGFycmF5SXRlcmF0b3JzID0gbmV3IE5hdGl2ZVdlYWtNYXAoKTtcblxuY29uc3QgU2FmZUl0ZXJhdG9yUHJvdG90eXBlID0gT2JqZWN0Q3JlYXRlKG51bGwsIHtcbiAgbmV4dDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgY29uc3QgYXJyYXlJdGVyYXRvciA9IFdlYWtNYXBQcm90b3R5cGVHZXQoYXJyYXlJdGVyYXRvcnMsIHRoaXMpO1xuICAgICAgcmV0dXJuIEFycmF5SXRlcmF0b3JQcm90b3R5cGVOZXh0KGFycmF5SXRlcmF0b3IpO1xuICAgIH0sXG4gIH0sXG5cbiAgW1N5bWJvbEl0ZXJhdG9yXToge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICB9LFxufSk7XG5cbi8qKlxuICogV3JhcCB0aGUgQXJyYXkgYXJvdW5kIHRoZSBTYWZlSXRlcmF0b3IgSWYgQXJyYXkucHJvdG90eXBlIFtAQGl0ZXJhdG9yXSBoYXMgYmVlbiBtb2RpZmllZFxuICogQHR5cGUgezxUPihhcnJheTogVFtdKSA9PiBJdGVyYWJsZTxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhZmVJZk5lZWRlZChhcnJheSkge1xuICBpZiAoXG4gICAgYXJyYXlbU3ltYm9sSXRlcmF0b3JdID09PSBOYXRpdmVBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yICYmXG4gICAgQXJyYXlJdGVyYXRvclByb3RvdHlwZS5uZXh0ID09PSBBcnJheUl0ZXJhdG9yUHJvdG90eXBlTmV4dFxuICApIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBzYWZlID0gT2JqZWN0Q3JlYXRlKFNhZmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIFdlYWtNYXBQcm90b3R5cGVTZXQoYXJyYXlJdGVyYXRvcnMsIHNhZmUsIEFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IoYXJyYXkpKTtcbiAgcmV0dXJuIHNhZmU7XG59XG5cbi8qKiBAdHlwZSB7V2Vha01hcDx7fSwgR2VuZXJhdG9yPGFueT4+fSAqL1xuY29uc3QgZ2VuZXJhdG9ycyA9IG5ldyBOYXRpdmVXZWFrTWFwKCk7XG5cbi8qKiBAc2VlIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdCAqL1xuY29uc3QgRHVtbXlBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gT2JqZWN0Q3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7XG4gIG5leHQ6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGNvbnN0IGdlbmVyYXRvciA9IFdlYWtNYXBQcm90b3R5cGVHZXQoZ2VuZXJhdG9ycywgdGhpcyk7XG4gICAgICByZXR1cm4gR2VuZXJhdG9yUHJvdG90eXBlTmV4dChnZW5lcmF0b3IpO1xuICAgIH0sXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB9LFxufSk7XG5cbmZvciAoY29uc3Qga2V5IG9mIFJlZmxlY3RPd25LZXlzKEFycmF5SXRlcmF0b3JQcm90b3R5cGUpKSB7XG4gIC8vIG5leHQgbWV0aG9kIGhhcyBhbHJlYWR5IGRlZmluZWRcbiAgaWYgKGtleSA9PT0gXCJuZXh0XCIpIHtcbiAgICBjb250aW51ZTtcbiAgfVxuXG4gIC8vIENvcHkgQXJyYXlJdGVyYXRvclByb3RvdHlwZSBkZXNjcmlwdG9ycyB0byBEdW1teUFycmF5SXRlcmF0b3JQcm90b3R5cGVcbiAgT2JqZWN0RGVmaW5lUHJvcGVydHkoRHVtbXlBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBrZXksIFJlZmxlY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQXJyYXlJdGVyYXRvclByb3RvdHlwZSwga2V5KSk7XG59XG5cbi8qKlxuICogV3JhcCB0aGUgR2VuZXJhdG9yIGFyb3VuZCB0aGUgZHVtbXkgQXJyYXlJdGVyYXRvclxuICogQHR5cGUgezxUPihnZW5lcmF0b3I6IEdlbmVyYXRvcjxUPikgPT4gSXRlcmFibGVJdGVyYXRvcjxUPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAoZ2VuZXJhdG9yKSB7XG4gIGNvbnN0IGR1bW15ID0gT2JqZWN0Q3JlYXRlKER1bW15QXJyYXlJdGVyYXRvclByb3RvdHlwZSk7XG4gIFdlYWtNYXBQcm90b3R5cGVTZXQoZ2VuZXJhdG9ycywgZHVtbXksIGdlbmVyYXRvcik7XG4gIHJldHVybiBkdW1teTtcbn1cbiIsImltcG9ydCB7XG4gIEVQU0lMT04sXG4gIE1hdGhBYnMsXG4gIE5hdGl2ZUFycmF5QnVmZmVyLFxuICBOYXRpdmVGbG9hdDMyQXJyYXksXG4gIE5hdGl2ZVVpbnQxNkFycmF5LFxuICBOYXRpdmVVaW50MzJBcnJheSxcbiAgTmF0aXZlVWludDhBcnJheSxcbiAgTnVtYmVySXNGaW5pdGUsXG4gIE51bWJlcklzTmFOLFxufSBmcm9tIFwiLi9wcmltb3JkaWFscy5tanNcIjtcblxuY29uc3QgSU5WRVJTRV9PRl9FUFNJTE9OID0gMSAvIEVQU0lMT047XG5cbi8qKlxuICogcm91bmRzIHRvIHRoZSBuZWFyZXN0IHZhbHVlO1xuICogaWYgdGhlIG51bWJlciBmYWxscyBtaWR3YXksIGl0IGlzIHJvdW5kZWQgdG8gdGhlIG5lYXJlc3QgdmFsdWUgd2l0aCBhbiBldmVuIGxlYXN0IHNpZ25pZmljYW50IGRpZ2l0XG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiByb3VuZFRpZXNUb0V2ZW4obnVtKSB7XG4gIHJldHVybiAobnVtICsgSU5WRVJTRV9PRl9FUFNJTE9OKSAtIElOVkVSU0VfT0ZfRVBTSUxPTjtcbn1cblxuY29uc3QgRkxPQVQxNl9NSU5fVkFMVUUgPSA2LjEwMzUxNTYyNWUtMDU7XG5jb25zdCBGTE9BVDE2X01BWF9WQUxVRSA9IDY1NTA0O1xuY29uc3QgRkxPQVQxNl9FUFNJTE9OID0gMC4wMDA5NzY1NjI1O1xuXG5jb25zdCBGTE9BVDE2X0VQU0lMT05fTVVMVElQTElFRF9CWV9GTE9BVDE2X01JTl9WQUxVRSA9IEZMT0FUMTZfRVBTSUxPTiAqIEZMT0FUMTZfTUlOX1ZBTFVFO1xuY29uc3QgRkxPQVQxNl9FUFNJTE9OX0RFVklERURfQllfRVBTSUxPTiA9IEZMT0FUMTZfRVBTSUxPTiAqIElOVkVSU0VfT0ZfRVBTSUxPTjtcblxuLyoqXG4gKiByb3VuZCBhIG51bWJlciB0byBhIGhhbGYgZmxvYXQgbnVtYmVyXG4gKiBAcGFyYW0ge3Vua25vd259IG51bSAtIGRvdWJsZSBmbG9hdFxuICogQHJldHVybnMge251bWJlcn0gaGFsZiBmbG9hdCBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG9GbG9hdDE2KG51bSkge1xuICBjb25zdCBudW1iZXIgPSArbnVtO1xuXG4gIC8vIE5hTiwgSW5maW5pdHksIC1JbmZpbml0eSwgMCwgLTBcbiAgaWYgKCFOdW1iZXJJc0Zpbml0ZShudW1iZXIpIHx8IG51bWJlciA9PT0gMCkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICAvLyBmaW5pdGUgZXhjZXB0IDAsIC0wXG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPiAwID8gMSA6IC0xO1xuICBjb25zdCBhYnNvbHV0ZSA9IE1hdGhBYnMobnVtYmVyKTtcblxuICAvLyBzbWFsbCBudW1iZXJcbiAgaWYgKGFic29sdXRlIDwgRkxPQVQxNl9NSU5fVkFMVUUpIHtcbiAgICByZXR1cm4gc2lnbiAqIHJvdW5kVGllc1RvRXZlbihhYnNvbHV0ZSAvIEZMT0FUMTZfRVBTSUxPTl9NVUxUSVBMSUVEX0JZX0ZMT0FUMTZfTUlOX1ZBTFVFKSAqIEZMT0FUMTZfRVBTSUxPTl9NVUxUSVBMSUVEX0JZX0ZMT0FUMTZfTUlOX1ZBTFVFO1xuICB9XG5cbiAgY29uc3QgdGVtcCA9ICgxICsgRkxPQVQxNl9FUFNJTE9OX0RFVklERURfQllfRVBTSUxPTikgKiBhYnNvbHV0ZTtcbiAgY29uc3QgcmVzdWx0ID0gdGVtcCAtICh0ZW1wIC0gYWJzb2x1dGUpO1xuXG4gIC8vIGxhcmdlIG51bWJlclxuICBpZiAocmVzdWx0ID4gRkxPQVQxNl9NQVhfVkFMVUUgfHwgTnVtYmVySXNOYU4ocmVzdWx0KSkge1xuICAgIHJldHVybiBzaWduICogSW5maW5pdHk7XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIHJlc3VsdDtcbn1cblxuLy8gYmFzZSBhbGdvcml0aG06IGh0dHA6Ly9mb3gtdG9vbGtpdC5vcmcvZnRwL2Zhc3RoYWxmZmxvYXRjb252ZXJzaW9uLnBkZlxuXG5jb25zdCBidWZmZXIgPSBuZXcgTmF0aXZlQXJyYXlCdWZmZXIoNCk7XG5jb25zdCBmbG9hdFZpZXcgPSBuZXcgTmF0aXZlRmxvYXQzMkFycmF5KGJ1ZmZlcik7XG5jb25zdCB1aW50MzJWaWV3ID0gbmV3IE5hdGl2ZVVpbnQzMkFycmF5KGJ1ZmZlcik7XG5cbmNvbnN0IGJhc2VUYWJsZSA9IG5ldyBOYXRpdmVVaW50MTZBcnJheSg1MTIpO1xuY29uc3Qgc2hpZnRUYWJsZSA9IG5ldyBOYXRpdmVVaW50OEFycmF5KDUxMik7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgY29uc3QgZSA9IGkgLSAxMjc7XG5cbiAgLy8gdmVyeSBzbWFsbCBudW1iZXIgKDAsIC0wKVxuICBpZiAoZSA8IC0yNCkge1xuICAgIGJhc2VUYWJsZVtpXSAgICAgICAgID0gMHgwMDAwO1xuICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gMHg4MDAwO1xuICAgIHNoaWZ0VGFibGVbaV0gICAgICAgICA9IDI0O1xuICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IDI0O1xuXG4gIC8vIHNtYWxsIG51bWJlciAoZGVub3JtKVxuICB9IGVsc2UgaWYgKGUgPCAtMTQpIHtcbiAgICBiYXNlVGFibGVbaV0gICAgICAgICA9ICAweDA0MDAgPj4gKC1lIC0gMTQpO1xuICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gKDB4MDQwMCA+PiAoLWUgLSAxNCkpIHwgMHg4MDAwO1xuICAgIHNoaWZ0VGFibGVbaV0gICAgICAgICA9IC1lIC0gMTtcbiAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAtZSAtIDE7XG5cbiAgLy8gbm9ybWFsIG51bWJlclxuICB9IGVsc2UgaWYgKGUgPD0gMTUpIHtcbiAgICBiYXNlVGFibGVbaV0gICAgICAgICA9ICAoZSArIDE1KSA8PCAxMDtcbiAgICBiYXNlVGFibGVbaSB8IDB4MTAwXSA9ICgoZSArIDE1KSA8PCAxMCkgfCAweDgwMDA7XG4gICAgc2hpZnRUYWJsZVtpXSAgICAgICAgID0gMTM7XG4gICAgc2hpZnRUYWJsZVtpIHwgMHgxMDBdID0gMTM7XG5cbiAgLy8gbGFyZ2UgbnVtYmVyIChJbmZpbml0eSwgLUluZmluaXR5KVxuICB9IGVsc2UgaWYgKGUgPCAxMjgpIHtcbiAgICBiYXNlVGFibGVbaV0gICAgICAgICA9IDB4N2MwMDtcbiAgICBiYXNlVGFibGVbaSB8IDB4MTAwXSA9IDB4ZmMwMDtcbiAgICBzaGlmdFRhYmxlW2ldICAgICAgICAgPSAyNDtcbiAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAyNDtcblxuICAvLyBzdGF5IChOYU4sIEluZmluaXR5LCAtSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgYmFzZVRhYmxlW2ldICAgICAgICAgPSAweDdjMDA7XG4gICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAweGZjMDA7XG4gICAgc2hpZnRUYWJsZVtpXSAgICAgICAgID0gMTM7XG4gICAgc2hpZnRUYWJsZVtpIHwgMHgxMDBdID0gMTM7XG4gIH1cbn1cblxuLyoqXG4gKiByb3VuZCBhIG51bWJlciB0byBhIGhhbGYgZmxvYXQgbnVtYmVyIGJpdHNcbiAqIEBwYXJhbSB7dW5rbm93bn0gbnVtIC0gZG91YmxlIGZsb2F0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBoYWxmIGZsb2F0IG51bWJlciBiaXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZFRvRmxvYXQxNkJpdHMobnVtKSB7XG4gIGZsb2F0Vmlld1swXSA9IHJvdW5kVG9GbG9hdDE2KG51bSk7XG4gIGNvbnN0IGYgPSB1aW50MzJWaWV3WzBdO1xuICBjb25zdCBlID0gKGYgPj4gMjMpICYgMHgxZmY7XG4gIHJldHVybiBiYXNlVGFibGVbZV0gKyAoKGYgJiAweDAwN2ZmZmZmKSA+PiBzaGlmdFRhYmxlW2VdKTtcbn1cblxuY29uc3QgbWFudGlzc2FUYWJsZSA9IG5ldyBOYXRpdmVVaW50MzJBcnJheSgyMDQ4KTtcbmZvciAobGV0IGkgPSAxOyBpIDwgMTAyNDsgKytpKSB7XG4gIGxldCBtID0gaSA8PCAxMzsgLy8gemVybyBwYWQgbWFudGlzc2EgYml0c1xuICBsZXQgZSA9IDA7IC8vIHplcm8gZXhwb25lbnRcblxuICAvLyBub3JtYWxpemVkXG4gIHdoaWxlICgobSAmIDB4MDA4MDAwMDApID09PSAwKSB7XG4gICAgbSA8PD0gMTtcbiAgICBlIC09IDB4MDA4MDAwMDA7IC8vIGRlY3JlbWVudCBleHBvbmVudFxuICB9XG5cbiAgbSAmPSB+MHgwMDgwMDAwMDsgLy8gY2xlYXIgbGVhZGluZyAxIGJpdFxuICBlICs9IDB4Mzg4MDAwMDA7IC8vIGFkanVzdCBiaWFzXG5cbiAgbWFudGlzc2FUYWJsZVtpXSA9IG0gfCBlO1xufVxuZm9yIChsZXQgaSA9IDEwMjQ7IGkgPCAyMDQ4OyArK2kpIHtcbiAgbWFudGlzc2FUYWJsZVtpXSA9IDB4MzgwMDAwMDAgKyAoKGkgLSAxMDI0KSA8PCAxMyk7XG59XG5cbmNvbnN0IGV4cG9uZW50VGFibGUgPSBuZXcgTmF0aXZlVWludDMyQXJyYXkoNjQpO1xuZm9yIChsZXQgaSA9IDE7IGkgPCAzMTsgKytpKSB7XG4gIGV4cG9uZW50VGFibGVbaV0gPSBpIDw8IDIzO1xufVxuZXhwb25lbnRUYWJsZVszMV0gPSAweDQ3ODAwMDAwO1xuZXhwb25lbnRUYWJsZVszMl0gPSAweDgwMDAwMDAwO1xuZm9yIChsZXQgaSA9IDMzOyBpIDwgNjM7ICsraSkge1xuICBleHBvbmVudFRhYmxlW2ldID0gMHg4MDAwMDAwMCArICgoaSAtIDMyKSA8PCAyMyk7XG59XG5leHBvbmVudFRhYmxlWzYzXSA9IDB4Yzc4MDAwMDA7XG5cbmNvbnN0IG9mZnNldFRhYmxlID0gbmV3IE5hdGl2ZVVpbnQxNkFycmF5KDY0KTtcbmZvciAobGV0IGkgPSAxOyBpIDwgNjQ7ICsraSkge1xuICBpZiAoaSAhPT0gMzIpIHtcbiAgICBvZmZzZXRUYWJsZVtpXSA9IDEwMjQ7XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IGEgaGFsZiBmbG9hdCBudW1iZXIgYml0cyB0byBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGZsb2F0MTZiaXRzIC0gaGFsZiBmbG9hdCBudW1iZXIgYml0c1xuICogQHJldHVybnMge251bWJlcn0gZG91YmxlIGZsb2F0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9OdW1iZXIoZmxvYXQxNmJpdHMpIHtcbiAgY29uc3QgaSA9IGZsb2F0MTZiaXRzID4+IDEwO1xuICB1aW50MzJWaWV3WzBdID0gbWFudGlzc2FUYWJsZVtvZmZzZXRUYWJsZVtpXSArIChmbG9hdDE2Yml0cyAmIDB4M2ZmKV0gKyBleHBvbmVudFRhYmxlW2ldO1xuICByZXR1cm4gZmxvYXRWaWV3WzBdO1xufVxuIiwiZXhwb3J0IGNvbnN0IFRISVNfSVNfTk9UX0FOX09CSkVDVCA9IFwiVGhpcyBpcyBub3QgYW4gb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgVEhJU19JU19OT1RfQV9GTE9BVDE2QVJSQVlfT0JKRUNUID0gXCJUaGlzIGlzIG5vdCBhIEZsb2F0MTZBcnJheSBvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBUSElTX0NPTlNUUlVDVE9SX0lTX05PVF9BX1NVQkNMQVNTX09GX0ZMT0FUMTZBUlJBWSA9XG4gIFwiVGhpcyBjb25zdHJ1Y3RvciBpcyBub3QgYSBzdWJjbGFzcyBvZiBGbG9hdDE2QXJyYXlcIjtcbmV4cG9ydCBjb25zdCBUSEVfQ09OU1RSVUNUT1JfUFJPUEVSVFlfVkFMVUVfSVNfTk9UX0FOX09CSkVDVCA9XG4gIFwiVGhlIGNvbnN0cnVjdG9yIHByb3BlcnR5IHZhbHVlIGlzIG5vdCBhbiBvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBTUEVDSUVTX0NPTlNUUlVDVE9SX0RJRE5UX1JFVFVSTl9UWVBFREFSUkFZX09CSkVDVCA9XG4gIFwiU3BlY2llcyBjb25zdHJ1Y3RvciBkaWRuJ3QgcmV0dXJuIFR5cGVkQXJyYXkgb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgREVSSVZFRF9DT05TVFJVQ1RPUl9DUkVBVEVEX1RZUEVEQVJSQVlfT0JKRUNUX1dISUNIX1dBU19UT09fU01BTExfTEVOR1RIID1cbiAgXCJEZXJpdmVkIGNvbnN0cnVjdG9yIGNyZWF0ZWQgVHlwZWRBcnJheSBvYmplY3Qgd2hpY2ggd2FzIHRvbyBzbWFsbCBsZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBBVFRFTVBUSU5HX1RPX0FDQ0VTU19ERVRBQ0hFRF9BUlJBWUJVRkZFUiA9XG4gIFwiQXR0ZW1wdGluZyB0byBhY2Nlc3MgZGV0YWNoZWQgQXJyYXlCdWZmZXJcIjtcbmV4cG9ydCBjb25zdCBDQU5OT1RfQ09OVkVSVF9VTkRFRklORURfT1JfTlVMTF9UT19PQkpFQ1QgPVxuICBcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IENBTk5PVF9NSVhfQklHSU5UX0FORF9PVEhFUl9UWVBFUyA9XG4gIFwiQ2Fubm90IG1peCBCaWdJbnQgYW5kIG90aGVyIHR5cGVzLCB1c2UgZXhwbGljaXQgY29udmVyc2lvbnNcIjtcbmV4cG9ydCBjb25zdCBJVEVSQVRPUl9QUk9QRVJUWV9JU19OT1RfQ0FMTEFCTEUgPSBcIkBAaXRlcmF0b3IgcHJvcGVydHkgaXMgbm90IGNhbGxhYmxlXCI7XG5leHBvcnQgY29uc3QgUkVEVUNFX09GX0VNUFRZX0FSUkFZX1dJVEhfTk9fSU5JVElBTF9WQUxVRSA9XG4gIFwiUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiO1xuZXhwb3J0IGNvbnN0IFRIRV9DT01QQVJJU09OX0ZVTkNUSU9OX01VU1RfQkVfRUlUSEVSX0FfRlVOQ1RJT05fT1JfVU5ERUZJTkVEID1cbiAgXCJUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiBtdXN0IGJlIGVpdGhlciBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiO1xuZXhwb3J0IGNvbnN0IE9GRlNFVF9JU19PVVRfT0ZfQk9VTkRTID0gXCJPZmZzZXQgaXMgb3V0IG9mIGJvdW5kc1wiO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzLCBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZ2xvYmFsIFNoYXJlZEFycmF5QnVmZmVyICovXG5cbmltcG9ydCB7IENBTk5PVF9DT05WRVJUX1VOREVGSU5FRF9PUl9OVUxMX1RPX09CSkVDVCB9IGZyb20gXCIuL21lc3NhZ2VzLm1qc1wiO1xuXG4vKiogQHR5cGUgezxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueSkgPT4gYW55Pih0YXJnZXQ6IFQpID0+ICh0aGlzQXJnOiBUaGlzVHlwZTxUPiwgLi4uYXJnczogYW55W10pID0+IGFueX0gKi9cbmZ1bmN0aW9uIHVuY3VycnlUaGlzKHRhcmdldCkge1xuICByZXR1cm4gKHRoaXNBcmcsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gUmVmbGVjdEFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJncyk7XG4gIH07XG59XG5cbi8qKiBAdHlwZSB7KHRhcmdldDogYW55LCBrZXk6IHN0cmluZyB8IHN5bWJvbCkgPT4gKHRoaXNBcmc6IGFueSwgLi4uYXJnczogYW55W10pID0+IGFueX0gKi9cbmZ1bmN0aW9uIHVuY3VycnlUaGlzR2V0dGVyKHRhcmdldCwga2V5KSB7XG4gIHJldHVybiB1bmN1cnJ5VGhpcyhcbiAgICBSZWZsZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5XG4gICAgKS5nZXRcbiAgKTtcbn1cblxuLy8gUmVmbGVjdFxuZXhwb3J0IGNvbnN0IHtcbiAgYXBwbHk6IFJlZmxlY3RBcHBseSxcbiAgY29uc3RydWN0OiBSZWZsZWN0Q29uc3RydWN0LFxuICBkZWZpbmVQcm9wZXJ0eTogUmVmbGVjdERlZmluZVByb3BlcnR5LFxuICBnZXQ6IFJlZmxlY3RHZXQsXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogUmVmbGVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgZ2V0UHJvdG90eXBlT2Y6IFJlZmxlY3RHZXRQcm90b3R5cGVPZixcbiAgaGFzOiBSZWZsZWN0SGFzLFxuICBvd25LZXlzOiBSZWZsZWN0T3duS2V5cyxcbiAgc2V0OiBSZWZsZWN0U2V0LFxuICBzZXRQcm90b3R5cGVPZjogUmVmbGVjdFNldFByb3RvdHlwZU9mLFxufSA9IFJlZmxlY3Q7XG5cbi8vIFByb3h5XG5leHBvcnQgY29uc3QgTmF0aXZlUHJveHkgPSBQcm94eTtcblxuLy8gTnVtYmVyXG5leHBvcnQgY29uc3Qge1xuICBFUFNJTE9OLFxuICBNQVhfU0FGRV9JTlRFR0VSLFxuICBpc0Zpbml0ZTogTnVtYmVySXNGaW5pdGUsXG4gIGlzTmFOOiBOdW1iZXJJc05hTixcbn0gPSBOdW1iZXI7XG5cbi8vIFN5bWJvbFxuZXhwb3J0IGNvbnN0IHtcbiAgaXRlcmF0b3I6IFN5bWJvbEl0ZXJhdG9yLFxuICBzcGVjaWVzOiBTeW1ib2xTcGVjaWVzLFxuICB0b1N0cmluZ1RhZzogU3ltYm9sVG9TdHJpbmdUYWcsXG4gIGZvcjogU3ltYm9sRm9yLFxufSA9IFN5bWJvbDtcblxuLy8gT2JqZWN0XG5leHBvcnQgY29uc3QgTmF0aXZlT2JqZWN0ID0gT2JqZWN0O1xuZXhwb3J0IGNvbnN0IHtcbiAgY3JlYXRlOiBPYmplY3RDcmVhdGUsXG4gIGRlZmluZVByb3BlcnR5OiBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgZnJlZXplOiBPYmplY3RGcmVlemUsXG4gIGlzOiBPYmplY3RJcyxcbn0gPSBOYXRpdmVPYmplY3Q7XG5jb25zdCBPYmplY3RQcm90b3R5cGUgPSBOYXRpdmVPYmplY3QucHJvdG90eXBlO1xuLyoqIEB0eXBlIHsob2JqZWN0OiBvYmplY3QsIGtleTogUHJvcGVydHlLZXkpID0+IEZ1bmN0aW9uIHwgdW5kZWZpbmVkfSAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdFByb3RvdHlwZV9fbG9va3VwR2V0dGVyX18gPSAvKiogQHR5cGUge2FueX0gKi8gKE9iamVjdFByb3RvdHlwZSkuX19sb29rdXBHZXR0ZXJfX1xuICA/IHVuY3VycnlUaGlzKC8qKiBAdHlwZSB7YW55fSAqLyAoT2JqZWN0UHJvdG90eXBlKS5fX2xvb2t1cEdldHRlcl9fKVxuICA6IChvYmplY3QsIGtleSkgPT4ge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgTmF0aXZlVHlwZUVycm9yKFxuICAgICAgICBDQU5OT1RfQ09OVkVSVF9VTkRFRklORURfT1JfTlVMTF9UT19PQkpFQ1RcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IHRhcmdldCA9IE5hdGl2ZU9iamVjdChvYmplY3QpO1xuICAgIGRvIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKE9iamVjdEhhc093bihkZXNjcmlwdG9yLCBcImdldFwiKSkge1xuICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLmdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IHdoaWxlICgodGFyZ2V0ID0gUmVmbGVjdEdldFByb3RvdHlwZU9mKHRhcmdldCkpICE9PSBudWxsKTtcbiAgfTtcbi8qKiBAdHlwZSB7KG9iamVjdDogb2JqZWN0LCBrZXk6IFByb3BlcnR5S2V5KSA9PiBib29sZWFufSAqL1xuZXhwb3J0IGNvbnN0IE9iamVjdEhhc093biA9IC8qKiBAdHlwZSB7YW55fSAqLyAoTmF0aXZlT2JqZWN0KS5oYXNPd24gfHxcbiAgdW5jdXJyeVRoaXMoT2JqZWN0UHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuLy8gQXJyYXlcbmNvbnN0IE5hdGl2ZUFycmF5ID0gQXJyYXk7XG5leHBvcnQgY29uc3QgQXJyYXlJc0FycmF5ID0gTmF0aXZlQXJyYXkuaXNBcnJheTtcbmNvbnN0IEFycmF5UHJvdG90eXBlID0gTmF0aXZlQXJyYXkucHJvdG90eXBlO1xuLyoqIEB0eXBlIHsoYXJyYXk6IEFycmF5TGlrZTx1bmtub3duPiwgc2VwYXJhdG9yPzogc3RyaW5nKSA9PiBzdHJpbmd9ICovXG5leHBvcnQgY29uc3QgQXJyYXlQcm90b3R5cGVKb2luID0gdW5jdXJyeVRoaXMoQXJyYXlQcm90b3R5cGUuam9pbik7XG4vKiogQHR5cGUgezxUPihhcnJheTogVFtdLCAuLi5pdGVtczogVFtdKSA9PiBudW1iZXJ9ICovXG5leHBvcnQgY29uc3QgQXJyYXlQcm90b3R5cGVQdXNoID0gdW5jdXJyeVRoaXMoQXJyYXlQcm90b3R5cGUucHVzaCk7XG4vKiogQHR5cGUgeyhhcnJheTogQXJyYXlMaWtlPHVua25vd24+LCAuLi5vcHRzOiBhbnlbXSkgPT4gc3RyaW5nfSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5UHJvdG90eXBlVG9Mb2NhbGVTdHJpbmcgPSB1bmN1cnJ5VGhpcyhcbiAgQXJyYXlQcm90b3R5cGUudG9Mb2NhbGVTdHJpbmdcbik7XG5leHBvcnQgY29uc3QgTmF0aXZlQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvciA9IEFycmF5UHJvdG90eXBlW1N5bWJvbEl0ZXJhdG9yXTtcbi8qKiBAdHlwZSB7PFQ+KGFycmF5OiBUW10pID0+IEl0ZXJhYmxlSXRlcmF0b3I8VD59ICovXG5leHBvcnQgY29uc3QgQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvciA9IHVuY3VycnlUaGlzKE5hdGl2ZUFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IpO1xuXG4vLyBNYXRoXG5leHBvcnQgY29uc3Qge1xuICBhYnM6IE1hdGhBYnMsXG4gIHRydW5jOiBNYXRoVHJ1bmMsXG59ID0gTWF0aDtcblxuLy8gQXJyYXlCdWZmZXJcbmV4cG9ydCBjb25zdCBOYXRpdmVBcnJheUJ1ZmZlciA9IEFycmF5QnVmZmVyO1xuZXhwb3J0IGNvbnN0IEFycmF5QnVmZmVySXNWaWV3ID0gTmF0aXZlQXJyYXlCdWZmZXIuaXNWaWV3O1xuY29uc3QgQXJyYXlCdWZmZXJQcm90b3R5cGUgPSBOYXRpdmVBcnJheUJ1ZmZlci5wcm90b3R5cGU7XG4vKiogQHR5cGUgeyhidWZmZXI6IEFycmF5QnVmZmVyLCBiZWdpbj86IG51bWJlciwgZW5kPzogbnVtYmVyKSA9PiBudW1iZXJ9ICovXG5leHBvcnQgY29uc3QgQXJyYXlCdWZmZXJQcm90b3R5cGVTbGljZSA9IHVuY3VycnlUaGlzKEFycmF5QnVmZmVyUHJvdG90eXBlLnNsaWNlKTtcbi8qKiBAdHlwZSB7KGJ1ZmZlcjogQXJyYXlCdWZmZXIpID0+IEFycmF5QnVmZmVyfSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5QnVmZmVyUHJvdG90eXBlR2V0Qnl0ZUxlbmd0aCA9IHVuY3VycnlUaGlzR2V0dGVyKEFycmF5QnVmZmVyUHJvdG90eXBlLCBcImJ5dGVMZW5ndGhcIik7XG5cbi8vIFNoYXJlZEFycmF5QnVmZmVyXG5leHBvcnQgY29uc3QgTmF0aXZlU2hhcmVkQXJyYXlCdWZmZXIgPSB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgPyBTaGFyZWRBcnJheUJ1ZmZlciA6IG51bGw7XG4vKiogQHR5cGUgeyhidWZmZXI6IFNoYXJlZEFycmF5QnVmZmVyKSA9PiBTaGFyZWRBcnJheUJ1ZmZlcn0gKi9cbmV4cG9ydCBjb25zdCBTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZUdldEJ5dGVMZW5ndGggPSBOYXRpdmVTaGFyZWRBcnJheUJ1ZmZlclxuICAmJiB1bmN1cnJ5VGhpc0dldHRlcihOYXRpdmVTaGFyZWRBcnJheUJ1ZmZlci5wcm90b3R5cGUsIFwiYnl0ZUxlbmd0aFwiKTtcblxuLy8gVHlwZWRBcnJheVxuLyoqIEB0eXBlZGVmIHtVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheXxCaWdVaW50NjRBcnJheXxCaWdJbnQ2NEFycmF5fSBUeXBlZEFycmF5ICovXG4vKiogQHR5cGUge2FueX0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5ID0gUmVmbGVjdEdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpO1xuY29uc3QgVHlwZWRBcnJheUZyb20gPSBUeXBlZEFycmF5LmZyb207XG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkucHJvdG90eXBlO1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVR5cGVkQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvciA9IFR5cGVkQXJyYXlQcm90b3R5cGVbU3ltYm9sSXRlcmF0b3JdO1xuLyoqIEB0eXBlIHsodHlwZWRBcnJheTogVHlwZWRBcnJheSkgPT4gSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+fSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVLZXlzID0gdW5jdXJyeVRoaXMoVHlwZWRBcnJheVByb3RvdHlwZS5rZXlzKTtcbi8qKiBAdHlwZSB7KHR5cGVkQXJyYXk6IFR5cGVkQXJyYXkpID0+IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPn0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlVmFsdWVzID0gdW5jdXJyeVRoaXMoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUudmFsdWVzXG4pO1xuLyoqIEB0eXBlIHsodHlwZWRBcnJheTogVHlwZWRBcnJheSkgPT4gSXRlcmFibGVJdGVyYXRvcjxbbnVtYmVyLCBudW1iZXJdPn0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlRW50cmllcyA9IHVuY3VycnlUaGlzKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLmVudHJpZXNcbik7XG4vKiogQHR5cGUgeyh0eXBlZEFycmF5OiBUeXBlZEFycmF5LCBhcnJheTogQXJyYXlMaWtlPG51bWJlcj4sIG9mZnNldD86IG51bWJlcikgPT4gdm9pZH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlU2V0ID0gdW5jdXJyeVRoaXMoVHlwZWRBcnJheVByb3RvdHlwZS5zZXQpO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIFR5cGVkQXJyYXk+KHR5cGVkQXJyYXk6IFQpID0+IFR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZVJldmVyc2UgPSB1bmN1cnJ5VGhpcyhcbiAgVHlwZWRBcnJheVByb3RvdHlwZS5yZXZlcnNlXG4pO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIFR5cGVkQXJyYXk+KHR5cGVkQXJyYXk6IFQsIHZhbHVlOiBudW1iZXIsIHN0YXJ0PzogbnVtYmVyLCBlbmQ/OiBudW1iZXIpID0+IFR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUZpbGwgPSB1bmN1cnJ5VGhpcyhUeXBlZEFycmF5UHJvdG90eXBlLmZpbGwpO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIFR5cGVkQXJyYXk+KHR5cGVkQXJyYXk6IFQsIHRhcmdldDogbnVtYmVyLCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpID0+IFR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUNvcHlXaXRoaW4gPSB1bmN1cnJ5VGhpcyhcbiAgVHlwZWRBcnJheVByb3RvdHlwZS5jb3B5V2l0aGluXG4pO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIFR5cGVkQXJyYXk+KHR5cGVkQXJyYXk6IFQsIGNvbXBhcmVGbj86IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyKSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVTb3J0ID0gdW5jdXJyeVRoaXMoVHlwZWRBcnJheVByb3RvdHlwZS5zb3J0KTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBUeXBlZEFycmF5Pih0eXBlZEFycmF5OiBULCBzdGFydD86IG51bWJlciwgZW5kPzogbnVtYmVyKSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVTbGljZSA9IHVuY3VycnlUaGlzKFR5cGVkQXJyYXlQcm90b3R5cGUuc2xpY2UpO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIFR5cGVkQXJyYXk+KHR5cGVkQXJyYXk6IFQsIHN0YXJ0PzogbnVtYmVyLCBlbmQ/OiBudW1iZXIpID0+IFR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZVN1YmFycmF5ID0gdW5jdXJyeVRoaXMoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUuc3ViYXJyYXlcbik7XG4vKiogQHR5cGUgeygodHlwZWRBcnJheTogVHlwZWRBcnJheSkgPT4gQXJyYXlCdWZmZXIpfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVHZXRCdWZmZXIgPSB1bmN1cnJ5VGhpc0dldHRlcihcbiAgVHlwZWRBcnJheVByb3RvdHlwZSxcbiAgXCJidWZmZXJcIlxuKTtcbi8qKiBAdHlwZSB7KCh0eXBlZEFycmF5OiBUeXBlZEFycmF5KSA9PiBudW1iZXIpfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVHZXRCeXRlT2Zmc2V0ID0gdW5jdXJyeVRoaXNHZXR0ZXIoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUsXG4gIFwiYnl0ZU9mZnNldFwiXG4pO1xuLyoqIEB0eXBlIHsoKHR5cGVkQXJyYXk6IFR5cGVkQXJyYXkpID0+IG51bWJlcil9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUdldExlbmd0aCA9IHVuY3VycnlUaGlzR2V0dGVyKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLFxuICBcImxlbmd0aFwiXG4pO1xuLyoqIEB0eXBlIHsodGFyZ2V0OiB1bmtub3duKSA9PiBzdHJpbmd9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUdldFN5bWJvbFRvU3RyaW5nVGFnID0gdW5jdXJyeVRoaXNHZXR0ZXIoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUsXG4gIFN5bWJvbFRvU3RyaW5nVGFnXG4pO1xuXG4vLyBVaW50OEFycmF5XG5leHBvcnQgY29uc3QgTmF0aXZlVWludDhBcnJheSA9IFVpbnQ4QXJyYXk7XG5cbi8vIFVpbnQxNkFycmF5XG5leHBvcnQgY29uc3QgTmF0aXZlVWludDE2QXJyYXkgPSBVaW50MTZBcnJheTtcbi8qKiBAdHlwZSB7VWludDE2QXJyYXlDb25zdHJ1Y3RvcltcImZyb21cIl19ICovXG5leHBvcnQgY29uc3QgVWludDE2QXJyYXlGcm9tID0gKC4uLmFyZ3MpID0+IHtcbiAgcmV0dXJuIFJlZmxlY3RBcHBseShUeXBlZEFycmF5RnJvbSwgTmF0aXZlVWludDE2QXJyYXksIGFyZ3MpO1xufTtcblxuLy8gVWludDMyQXJyYXlcbmV4cG9ydCBjb25zdCBOYXRpdmVVaW50MzJBcnJheSA9IFVpbnQzMkFycmF5O1xuXG4vLyBGbG9hdDMyQXJyYXlcbmV4cG9ydCBjb25zdCBOYXRpdmVGbG9hdDMyQXJyYXkgPSBGbG9hdDMyQXJyYXk7XG5cbi8vIEFycmF5SXRlcmF0b3Jcbi8qKiBAdHlwZSB7YW55fSAqL1xuZXhwb3J0IGNvbnN0IEFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBSZWZsZWN0R2V0UHJvdG90eXBlT2YoW11bU3ltYm9sSXRlcmF0b3JdKCkpO1xuLyoqIEB0eXBlIHs8VD4oYXJyYXlJdGVyYXRvcjogSXRlcmFibGVJdGVyYXRvcjxUPikgPT4gSXRlcmF0b3JSZXN1bHQ8VD59ICovXG5leHBvcnQgY29uc3QgQXJyYXlJdGVyYXRvclByb3RvdHlwZU5leHQgPSB1bmN1cnJ5VGhpcyhBcnJheUl0ZXJhdG9yUHJvdG90eXBlLm5leHQpO1xuXG4vLyBHZW5lcmF0b3Jcbi8qKiBAdHlwZSB7PFQgPSB1bmtub3duLCBUUmV0dXJuID0gYW55LCBUTmV4dCA9IHVua25vd24+KGdlbmVyYXRvcjogR2VuZXJhdG9yPFQsIFRSZXR1cm4sIFROZXh0PiwgdmFsdWU/OiBUTmV4dCkgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBHZW5lcmF0b3JQcm90b3R5cGVOZXh0ID0gdW5jdXJyeVRoaXMoKGZ1bmN0aW9uKiAoKSB7fSkoKS5uZXh0KTtcblxuLy8gSXRlcmF0b3JcbmV4cG9ydCBjb25zdCBJdGVyYXRvclByb3RvdHlwZSA9IFJlZmxlY3RHZXRQcm90b3R5cGVPZihBcnJheUl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gRGF0YVZpZXdcbmNvbnN0IERhdGFWaWV3UHJvdG90eXBlID0gRGF0YVZpZXcucHJvdG90eXBlO1xuLyoqIEB0eXBlIHsoZGF0YVZpZXc6IERhdGFWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIGxpdHRsZUVuZGlhbj86IGJvb2xlYW4pID0+IG51bWJlcn0gKi9cbmV4cG9ydCBjb25zdCBEYXRhVmlld1Byb3RvdHlwZUdldFVpbnQxNiA9IHVuY3VycnlUaGlzKFxuICBEYXRhVmlld1Byb3RvdHlwZS5nZXRVaW50MTZcbik7XG4vKiogQHR5cGUgeyhkYXRhVmlldzogRGF0YVZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgbGl0dGxlRW5kaWFuPzogYm9vbGVhbikgPT4gdm9pZH0gKi9cbmV4cG9ydCBjb25zdCBEYXRhVmlld1Byb3RvdHlwZVNldFVpbnQxNiA9IHVuY3VycnlUaGlzKFxuICBEYXRhVmlld1Byb3RvdHlwZS5zZXRVaW50MTZcbik7XG5cbi8vIEVycm9yXG5leHBvcnQgY29uc3QgTmF0aXZlVHlwZUVycm9yID0gVHlwZUVycm9yO1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXG4vLyBXZWFrU2V0XG4vKipcbiAqIERvIG5vdCBjb25zdHJ1Y3Qgd2l0aCBhcmd1bWVudHMgdG8gYXZvaWQgY2FsbGluZyB0aGUgXCJhZGRcIiBtZXRob2RcbiAqIEB0eXBlIHt7bmV3IDxUIGV4dGVuZHMge30+KCk6IFdlYWtTZXQ8VD59fVxuICovXG5leHBvcnQgY29uc3QgTmF0aXZlV2Vha1NldCA9IFdlYWtTZXQ7XG5jb25zdCBXZWFrU2V0UHJvdG90eXBlID0gTmF0aXZlV2Vha1NldC5wcm90b3R5cGU7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMge30+KHNldDogV2Vha1NldDxUPiwgdmFsdWU6IFQpID0+IFNldDxUPn0gKi9cbmV4cG9ydCBjb25zdCBXZWFrU2V0UHJvdG90eXBlQWRkID0gdW5jdXJyeVRoaXMoV2Vha1NldFByb3RvdHlwZS5hZGQpO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIHt9PihzZXQ6IFdlYWtTZXQ8VD4sIHZhbHVlOiBUKSA9PiBib29sZWFufSAqL1xuZXhwb3J0IGNvbnN0IFdlYWtTZXRQcm90b3R5cGVIYXMgPSB1bmN1cnJ5VGhpcyhXZWFrU2V0UHJvdG90eXBlLmhhcyk7XG5cbi8vIFdlYWtNYXBcbi8qKlxuICogRG8gbm90IGNvbnN0cnVjdCB3aXRoIGFyZ3VtZW50cyB0byBhdm9pZCBjYWxsaW5nIHRoZSBcInNldFwiIG1ldGhvZFxuICogQHR5cGUge3tuZXcgPEsgZXh0ZW5kcyB7fSwgVj4oKTogV2Vha01hcDxLLCBWPn19XG4gKi9cbmV4cG9ydCBjb25zdCBOYXRpdmVXZWFrTWFwID0gV2Vha01hcDtcbmNvbnN0IFdlYWtNYXBQcm90b3R5cGUgPSBOYXRpdmVXZWFrTWFwLnByb3RvdHlwZTtcbi8qKiBAdHlwZSB7PEsgZXh0ZW5kcyB7fSwgVj4od2Vha01hcDogV2Vha01hcDxLLCBWPiwga2V5OiBLKSA9PiBWfSAqL1xuZXhwb3J0IGNvbnN0IFdlYWtNYXBQcm90b3R5cGVHZXQgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLmdldCk7XG4vKiogQHR5cGUgezxLIGV4dGVuZHMge30sIFY+KHdlYWtNYXA6IFdlYWtNYXA8SywgVj4sIGtleTogSykgPT4gYm9vbGVhbn0gKi9cbmV4cG9ydCBjb25zdCBXZWFrTWFwUHJvdG90eXBlSGFzID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5oYXMpO1xuLyoqIEB0eXBlIHs8SyBleHRlbmRzIHt9LCBWPih3ZWFrTWFwOiBXZWFrTWFwPEssIFY+LCBrZXk6IEssIHZhbHVlOiBWKSA9PiBXZWFrTWFwfSAqL1xuZXhwb3J0IGNvbnN0IFdlYWtNYXBQcm90b3R5cGVTZXQgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLnNldCk7XG4iLCIvKiogQGltcG9ydCBCYXNlRGVjb2Rlciwge0Jhc2VEZWNvZGVyUGFyYW1ldGVyc30gZnJvbSBcIi4vYmFzZWRlY29kZXIuanNcIiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWdpc3RyeUVudHJ5XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCk6UHJvbWlzZTx0eXBlb2YgQmFzZURlY29kZXI+fSBpbXBvcnRGblxuICogQHByb3BlcnR5IHtmdW5jdGlvbihpbXBvcnQoXCIuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5KTpQcm9taXNlPEJhc2VEZWNvZGVyUGFyYW1ldGVycz59IGRlY29kZXJQYXJhbWV0ZXJGblxuICogQHByb3BlcnR5IHtib29sZWFufSBwcmVmZXJXb3JrZXJcbiAqL1xuLyoqIEB0eXBlIHtNYXA8bnVtYmVyIHwgdW5kZWZpbmVkLCBSZWdpc3RyeUVudHJ5Pn0gKi9cbmNvbnN0IHJlZ2lzdHJ5ID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBEZWZhdWx0IGRlY29kZXIgcGFyYW1ldGVyIHJldHJpZXZhbCBmdW5jdGlvblxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5fSBmaWxlRGlyZWN0b3J5XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxCYXNlRGVjb2RlclBhcmFtZXRlcnM+fVxuICovXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0RGVjb2RlclBhcmFtZXRlckZuKGZpbGVEaXJlY3RvcnkpIHtcbiAgICBjb25zdCBpc1RpbGVkID0gIWZpbGVEaXJlY3RvcnkuaGFzVGFnKCdTdHJpcE9mZnNldHMnKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHtCYXNlRGVjb2RlclBhcmFtZXRlcnN9ICovICh7XG4gICAgICAgIHRpbGVXaWR0aDogaXNUaWxlZFxuICAgICAgICAgICAgPyBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnVGlsZVdpZHRoJylcbiAgICAgICAgICAgIDogYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0ltYWdlV2lkdGgnKSxcbiAgICAgICAgdGlsZUhlaWdodDogaXNUaWxlZFxuICAgICAgICAgICAgPyBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnVGlsZUxlbmd0aCcpXG4gICAgICAgICAgICA6IChhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnUm93c1BlclN0cmlwJylcbiAgICAgICAgICAgICAgICB8fCBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnSW1hZ2VMZW5ndGgnKSksXG4gICAgICAgIHBsYW5hckNvbmZpZ3VyYXRpb246IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdQbGFuYXJDb25maWd1cmF0aW9uJyksXG4gICAgICAgIGJpdHNQZXJTYW1wbGU6IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdCaXRzUGVyU2FtcGxlJyksXG4gICAgICAgIHByZWRpY3RvcjogYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ1ByZWRpY3RvcicpIHx8IDEsXG4gICAgfSk7XG59XG4vKipcbiAqIFJlZ2lzdGVyIGEgZGVjb2RlciBmb3IgYSBzcGVjaWZpYyBjb21wcmVzc2lvbiBtZXRob2Qgb3IgYSByYW5nZSBvZiBjb21wcmVzc2lvbnNcbiAqIEBwYXJhbSB7KG51bWJlcnx1bmRlZmluZWR8KG51bWJlcnx1bmRlZmluZWQpW10pfSBjYXNlcyBpZHMgb2YgdGhlIGNvbXByZXNzaW9uIG1ldGhvZHMgdG8gcmVnaXN0ZXIgZm9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6UHJvbWlzZTx0eXBlb2YgQmFzZURlY29kZXI+fSBpbXBvcnRGbiB0aGUgZnVuY3Rpb24gdG8gaW1wb3J0IHRoZSBkZWNvZGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGltcG9ydChcIi4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3RvcnkpOlByb21pc2U8QmFzZURlY29kZXJQYXJhbWV0ZXJzPn0gZGVjb2RlclBhcmFtZXRlckZuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByZWZlcldvcmtlcl8gV2hldGhlciB0byBwcmVmZXIgcnVubmluZyB0aGUgZGVjb2RlciBpbiBhIHdvcmtlclxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVjb2RlcihjYXNlcywgaW1wb3J0Rm4sIGRlY29kZXJQYXJhbWV0ZXJGbiA9IGRlZmF1bHREZWNvZGVyUGFyYW1ldGVyRm4sIHByZWZlcldvcmtlcl8gPSB0cnVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNhc2VzKSkge1xuICAgICAgICBjYXNlcyA9IFtjYXNlc107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgY2FzZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICByZWdpc3RyeS5zZXQoYywgeyBpbXBvcnRGbiwgZGVjb2RlclBhcmFtZXRlckZuLCBwcmVmZXJXb3JrZXI6IHByZWZlcldvcmtlcl8gfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdldCB0aGUgcmVxdWlyZWQgZGVjb2RlciBwYXJhbWV0ZXJzIGZvciBhIHNwZWNpZmljIGNvbXByZXNzaW9uIG1ldGhvZFxuICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBjb21wcmVzc2lvblxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qcycpLkltYWdlRmlsZURpcmVjdG9yeX0gZmlsZURpcmVjdG9yeVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGVjb2RlclBhcmFtZXRlcnMoY29tcHJlc3Npb24sIGZpbGVEaXJlY3RvcnkpIHtcbiAgICBpZiAoIXJlZ2lzdHJ5Lmhhcyhjb21wcmVzc2lvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCBpZGVudGlmaWVyOiAke2NvbXByZXNzaW9ufWApO1xuICAgIH1cbiAgICBjb25zdCB7IGRlY29kZXJQYXJhbWV0ZXJGbiB9ID0gLyoqIEB0eXBlIHtSZWdpc3RyeUVudHJ5fSAqLyAocmVnaXN0cnkuZ2V0KGNvbXByZXNzaW9uKSk7XG4gICAgcmV0dXJuIGRlY29kZXJQYXJhbWV0ZXJGbihmaWxlRGlyZWN0b3J5KTtcbn1cbi8qKlxuICogR2V0IGEgZGVjb2RlciBmb3IgYSBzcGVjaWZpYyBjb21wcmVzc2lvbiBhbmQgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGNvbXByZXNzaW9uIHRoZSBjb21wcmVzc2lvbiBtZXRob2QgaWRlbnRpZmllclxuICogQHBhcmFtIHtCYXNlRGVjb2RlclBhcmFtZXRlcnN9IGRlY29kZXJQYXJhbWV0ZXJzIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgZGVjb2RlclxuICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KCcuL2Jhc2VkZWNvZGVyLmpzJykuZGVmYXVsdD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZWNvZGVyKGNvbXByZXNzaW9uLCBkZWNvZGVyUGFyYW1ldGVycykge1xuICAgIGlmICghcmVnaXN0cnkuaGFzKGNvbXByZXNzaW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY29tcHJlc3Npb24gbWV0aG9kIGlkZW50aWZpZXI6ICR7Y29tcHJlc3Npb259YCk7XG4gICAgfVxuICAgIGNvbnN0IHsgaW1wb3J0Rm4gfSA9IC8qKiBAdHlwZSB7UmVnaXN0cnlFbnRyeX0gKi8gKHJlZ2lzdHJ5LmdldChjb21wcmVzc2lvbikpO1xuICAgIGNvbnN0IERlY29kZXIgPSBhd2FpdCBpbXBvcnRGbigpO1xuICAgIHJldHVybiBuZXcgRGVjb2RlcihkZWNvZGVyUGFyYW1ldGVycyk7XG59XG4vKipcbiAqIFdoZXRoZXIgdG8gcHJlZmVyIHJ1bm5pbmcgdGhlIGRlY29kZXIgaW4gYSB3b3JrZXJcbiAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gY29tcHJlc3Npb24gdGhlIGNvbXByZXNzaW9uIG1ldGhvZCBpZGVudGlmaWVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZlcldvcmtlcihjb21wcmVzc2lvbikge1xuICAgIGlmICghcmVnaXN0cnkuaGFzKGNvbXByZXNzaW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY29tcHJlc3Npb24gbWV0aG9kIGlkZW50aWZpZXI6ICR7Y29tcHJlc3Npb259YCk7XG4gICAgfVxuICAgIHJldHVybiAvKiogQHR5cGUge1JlZ2lzdHJ5RW50cnl9ICovIChyZWdpc3RyeS5nZXQoY29tcHJlc3Npb24pKS5wcmVmZXJXb3JrZXI7XG59XG5jb25zdCBkZWZhdWx0RGVjb2RlckRlZmluaXRpb25zID0gW1xuICAgIC8vIE5vIGNvbXByZXNzaW9uXG4gICAge1xuICAgICAgICBjYXNlczogW3VuZGVmaW5lZCwgMV0sXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vcmF3LmpzJykudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgcHJlZmVyV29ya2VyOiBmYWxzZSxcbiAgICB9LFxuICAgIC8vIExaV1xuICAgIHtcbiAgICAgICAgY2FzZXM6IDUsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vbHp3LmpzJykudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICB9LFxuICAgIC8vIE9sZC1zdHlsZSBKUEVHXG4gICAge1xuICAgICAgICBjYXNlczogNixcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignb2xkIHN0eWxlIEpQRUcgY29tcHJlc3Npb24gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIEpQRUdcbiAgICB7XG4gICAgICAgIGNhc2VzOiA3LFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL2pwZWcuanMnKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5fSBmaWxlRGlyZWN0b3J5XG4gICAgICAgICAqL1xuICAgICAgICBkZWNvZGVyUGFyYW1ldGVyRm46IGFzeW5jIChmaWxlRGlyZWN0b3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmF3YWl0IGRlZmF1bHREZWNvZGVyUGFyYW1ldGVyRm4oZmlsZURpcmVjdG9yeSksXG4gICAgICAgICAgICAgICAgSlBFR1RhYmxlczogYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0pQRUdUYWJsZXMnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBEZWZsYXRlIC8gQWRvYmUgRGVmbGF0ZVxuICAgIHtcbiAgICAgICAgY2FzZXM6IFs4LCAzMjk0Nl0sXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vZGVmbGF0ZS5qcycpLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgfSxcbiAgICAvLyBQYWNrQml0c1xuICAgIHtcbiAgICAgICAgY2FzZXM6IDMyNzczLFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL3BhY2tiaXRzLmpzJykudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICB9LFxuICAgIC8vIExFUkNcbiAgICB7XG4gICAgICAgIGNhc2VzOiAzNDg4NyxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi9sZXJjLmpzJylcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIChtKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBtLnpzdGQuaW5pdCgpO1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeX0gZmlsZURpcmVjdG9yeVxuICAgICAgICAgKi9cbiAgICAgICAgZGVjb2RlclBhcmFtZXRlckZuOiBhc3luYyAoZmlsZURpcmVjdG9yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5hd2FpdCBkZWZhdWx0RGVjb2RlclBhcmFtZXRlckZuKGZpbGVEaXJlY3RvcnkpLFxuICAgICAgICAgICAgICAgIExlcmNQYXJhbWV0ZXJzOiBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnTGVyY1BhcmFtZXRlcnMnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyB6c3RkXG4gICAge1xuICAgICAgICBjYXNlczogNTAwMDAsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4venN0ZC5qcycpXG4gICAgICAgICAgICAudGhlbihhc3luYyAobSkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgbS56c3RkLmluaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgfSxcbiAgICAvLyBXZWJQIEltYWdlc1xuICAgIHtcbiAgICAgICAgY2FzZXM6IDUwMDAxLFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL3dlYmltYWdlLmpzJykudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeX0gZmlsZURpcmVjdG9yeVxuICAgICAgICAgKi9cbiAgICAgICAgZGVjb2RlclBhcmFtZXRlckZuOiBhc3luYyAoZmlsZURpcmVjdG9yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5hd2FpdCBkZWZhdWx0RGVjb2RlclBhcmFtZXRlckZuKGZpbGVEaXJlY3RvcnkpLFxuICAgICAgICAgICAgICAgIHNhbXBsZXNQZXJQaXhlbDogTnVtYmVyKGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdTYW1wbGVzUGVyUGl4ZWwnKSkgfHwgNCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZlcldvcmtlcjogZmFsc2UsXG4gICAgfSxcbl07XG4vLyBBZGQgZGVmYXVsdCBkZWNvZGVycyB0byByZWdpc3RyeSAoZW5kLXVzZXIgbWF5IG92ZXJyaWRlIHdpdGggb3RoZXIgaW1wbGVtZW50YXRpb25zKVxuZm9yIChjb25zdCBkZWNvZGVyRGVmaW5pdGlvbiBvZiBkZWZhdWx0RGVjb2RlckRlZmluaXRpb25zKSB7XG4gICAgY29uc3QgeyBjYXNlcywgaW1wb3J0Rm4sIGRlY29kZXJQYXJhbWV0ZXJGbiwgcHJlZmVyV29ya2VyOiBwcmVmZXJXb3JrZXJfIH0gPSBkZWNvZGVyRGVmaW5pdGlvbjtcbiAgICBhZGREZWNvZGVyKGNhc2VzLCBpbXBvcnRGbiwgZGVjb2RlclBhcmFtZXRlckZuLCBwcmVmZXJXb3JrZXJfKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTbGljZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlckxpa2V9IGFycmF5QnVmZmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsaWNlT2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJpZ1RpZmZcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcnJheUJ1ZmZlciwgc2xpY2VPZmZzZXQsIGxpdHRsZUVuZGlhbiwgYmlnVGlmZikge1xuICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlcik7XG4gICAgICAgIHRoaXMuX3NsaWNlT2Zmc2V0ID0gc2xpY2VPZmZzZXQ7XG4gICAgICAgIHRoaXMuX2xpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhbjtcbiAgICAgICAgdGhpcy5fYmlnVGlmZiA9IGJpZ1RpZmY7XG4gICAgfVxuICAgIGdldCBzbGljZU9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWNlT2Zmc2V0O1xuICAgIH1cbiAgICBnZXQgc2xpY2VUb3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbGljZU9mZnNldCArIHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIGdldCBsaXR0bGVFbmRpYW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXR0bGVFbmRpYW47XG4gICAgfVxuICAgIGdldCBiaWdUaWZmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmlnVGlmZjtcbiAgICB9XG4gICAgZ2V0IGJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmJ1ZmZlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb3ZlcnMob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2VPZmZzZXQgPD0gb2Zmc2V0ICYmIHRoaXMuc2xpY2VUb3AgPj0gb2Zmc2V0ICsgbGVuZ3RoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkVWludDgob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50OChvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRJbnQ4KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0SW50OChvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRVaW50MTYob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQsIHRoaXMuX2xpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRJbnQxNihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEludDE2KG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0LCB0aGlzLl9saXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkVWludDMyKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0LCB0aGlzLl9saXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkSW50MzIob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRJbnQzMihvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCwgdGhpcy5fbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZEZsb2F0MzIob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDMyKG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0LCB0aGlzLl9saXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkRmxvYXQ2NChvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEZsb2F0NjQob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQsIHRoaXMuX2xpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRVaW50NjQob2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnJlYWRVaW50MzIob2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnJlYWRVaW50MzIob2Zmc2V0ICsgNCk7XG4gICAgICAgIGxldCBjb21iaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuX2xpdHRsZUVuZGlhbikge1xuICAgICAgICAgICAgY29tYmluZWQgPSBsZWZ0ICsgKCgyICoqIDMyKSAqIHJpZ2h0KTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29tYmluZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbWJpbmVkfSBleGNlZWRzIE1BWF9TQUZFX0lOVEVHRVIuIGBcbiAgICAgICAgICAgICAgICAgICAgKyAnUHJlY2lzaW9uIG1heSBiZSBsb3N0LiBQbGVhc2UgcmVwb3J0IGlmIHlvdSBnZXQgdGhpcyBtZXNzYWdlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9nZW90aWZmanMvZ2VvdGlmZi5qcy9pc3N1ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb21iaW5lZCA9ICgoMiAqKiAzMikgKiBsZWZ0KSArIHJpZ2h0O1xuICAgICAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKGNvbWJpbmVkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbWJpbmVkfSBleGNlZWRzIE1BWF9TQUZFX0lOVEVHRVIuIGBcbiAgICAgICAgICAgICAgICArICdQcmVjaXNpb24gbWF5IGJlIGxvc3QuIFBsZWFzZSByZXBvcnQgaWYgeW91IGdldCB0aGlzIG1lc3NhZ2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL2dlb3RpZmZqcy9nZW90aWZmLmpzL2lzc3VlcycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRhcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NTMzODM4NC84MDYwNTkxXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZEludDY0KG9mZnNldCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICBjb25zdCBpc05lZ2F0aXZlID0gKHRoaXMuX2RhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArICh0aGlzLl9saXR0bGVFbmRpYW4gPyA3IDogMCkpICYgMHg4MClcbiAgICAgICAgICAgID4gMDtcbiAgICAgICAgbGV0IGNhcnJ5aW5nID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBieXRlID0gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgKHRoaXMuX2xpdHRsZUVuZGlhbiA/IGkgOiA3IC0gaSkpO1xuICAgICAgICAgICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FycnlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGUgIT09IDB4MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGUgPSB+KGJ5dGUgLSAxKSAmIDB4ZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBieXRlID0gfmJ5dGUgJiAweGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlICs9IGJ5dGUgKiAoMjU2ICoqIGkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRPZmZzZXQob2Zmc2V0KSB7XG4gICAgICAgIGlmICh0aGlzLl9iaWdUaWZmKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkVWludDY0KG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFVpbnQzMihvZmZzZXQpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFzbGljZS5qcy5tYXAiLCJpbXBvcnQgeyBnZXRGbG9hdDE2IH0gZnJvbSAnQHBldGFtb3Jpa2VuL2Zsb2F0MTYnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVZpZXc2NCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlckxpa2V9IGFycmF5QnVmZmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIH1cbiAgICBnZXQgYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuYnVmZmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFVpbnQ2NChvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5nZXRVaW50MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZ2V0VWludDMyKG9mZnNldCArIDQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIGxldCBjb21iaW5lZDtcbiAgICAgICAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgICAgICAgICAgY29tYmluZWQgPSBsZWZ0ICsgKCgyICoqIDMyKSAqIHJpZ2h0KTtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29tYmluZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbWJpbmVkfSBleGNlZWRzIE1BWF9TQUZFX0lOVEVHRVIuIGBcbiAgICAgICAgICAgICAgICAgICAgKyAnUHJlY2lzaW9uIG1heSBiZSBsb3N0LiBQbGVhc2UgcmVwb3J0IGlmIHlvdSBnZXQgdGhpcyBtZXNzYWdlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9nZW90aWZmanMvZ2VvdGlmZi5qcy9pc3N1ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb21iaW5lZCA9ICgoMiAqKiAzMikgKiBsZWZ0KSArIHJpZ2h0O1xuICAgICAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKGNvbWJpbmVkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbWJpbmVkfSBleGNlZWRzIE1BWF9TQUZFX0lOVEVHRVIuIGBcbiAgICAgICAgICAgICAgICArICdQcmVjaXNpb24gbWF5IGJlIGxvc3QuIFBsZWFzZSByZXBvcnQgaWYgeW91IGdldCB0aGlzIG1lc3NhZ2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL2dlb3RpZmZqcy9nZW90aWZmLmpzL2lzc3VlcycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRhcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NTMzODM4NC84MDYwNTkxXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbnQ2NChvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICBjb25zdCBpc05lZ2F0aXZlID0gKHRoaXMuX2RhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIChsaXR0bGVFbmRpYW4gPyA3IDogMCkpICYgMHg4MCkgPiAwO1xuICAgICAgICBsZXQgY2FycnlpbmcgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ5dGUgPSB0aGlzLl9kYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAobGl0dGxlRW5kaWFuID8gaSA6IDcgLSBpKSk7XG4gICAgICAgICAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYXJyeWluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZSAhPT0gMHgwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZSA9IH4oYnl0ZSAtIDEpICYgMHhmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ5dGUgPSB+Ynl0ZSAmIDB4ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgKz0gYnl0ZSAqICgyNTYgKiogaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gLXZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VWludDgob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50OChvZmZzZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbnQ4KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0SW50OChvZmZzZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFVpbnQxNihvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbnQxNihvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0SW50MTYob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFVpbnQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbnQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0SW50MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEZsb2F0MTYob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIGdldEZsb2F0MTYodGhpcy5fZGF0YVZpZXcsIG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRGbG9hdDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRGbG9hdDY0KG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRGbG9hdDY0KG9mZnNldCwgbGl0dGxlRW5kaWFuKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhdmlldzY0LmpzLm1hcCIsIi8qKiBAbW9kdWxlIGdlb3RpZmYgKi9cbmltcG9ydCBHZW9USUZGSW1hZ2UgZnJvbSAnLi9nZW90aWZmaW1hZ2UuanMnO1xuaW1wb3J0IERhdGFWaWV3NjQgZnJvbSAnLi9kYXRhdmlldzY0LmpzJztcbmltcG9ydCBEYXRhU2xpY2UgZnJvbSAnLi9kYXRhc2xpY2UuanMnO1xuaW1wb3J0IFBvb2wgZnJvbSAnLi9wb29sLmpzJztcbmltcG9ydCB7IG1ha2VSZW1vdGVTb3VyY2UsIG1ha2VDdXN0b21Tb3VyY2UgfSBmcm9tICcuL3NvdXJjZS9yZW1vdGUuanMnO1xuaW1wb3J0IHsgbWFrZUJ1ZmZlclNvdXJjZSB9IGZyb20gJy4vc291cmNlL2FycmF5YnVmZmVyLmpzJztcbmltcG9ydCB7IG1ha2VGaWxlUmVhZGVyU291cmNlIH0gZnJvbSAnLi9zb3VyY2UvZmlsZXJlYWRlci5qcyc7XG5pbXBvcnQgeyBtYWtlRmlsZVNvdXJjZSB9IGZyb20gJy4vc291cmNlL2ZpbGUuanMnO1xuaW1wb3J0IHsgQmFzZUNsaWVudCwgQmFzZVJlc3BvbnNlIH0gZnJvbSAnLi9zb3VyY2UvY2xpZW50L2Jhc2UuanMnO1xuaW1wb3J0IHsgSW1hZ2VGaWxlRGlyZWN0b3J5UGFyc2VyIH0gZnJvbSAnLi9pbWFnZWZpbGVkaXJlY3RvcnkuanMnO1xuaW1wb3J0IHsgZmllbGRUeXBlcywgZ2V0RmllbGRUeXBlU2l6ZSwgcmVnaXN0ZXJUYWcgfSBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHsgd3JpdGVHZW90aWZmIH0gZnJvbSAnLi9nZW90aWZmd3JpdGVyLmpzJztcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCAqIGFzIHJnYiBmcm9tICcuL3JnYi5qcyc7XG5pbXBvcnQgeyBnZXREZWNvZGVyLCBhZGREZWNvZGVyIH0gZnJvbSAnLi9jb21wcmVzc2lvbi9pbmRleC5qcyc7XG5pbXBvcnQgeyBzZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dpbmcuanMnO1xuLyoqIEBpbXBvcnQgeyBCYXNlU291cmNlIH0gZnJvbSAnLi9zb3VyY2UvYmFzZXNvdXJjZS5qcycgKi9cbmV4cG9ydCB7IGdsb2JhbHMgfTtcbmV4cG9ydCB7IHJlZ2lzdGVyVGFnIH07XG5leHBvcnQgeyByZ2IgfTtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzZURlY29kZXIgfSBmcm9tICcuL2NvbXByZXNzaW9uL2Jhc2VkZWNvZGVyLmpzJztcbmV4cG9ydCB7IGdldERlY29kZXIsIGFkZERlY29kZXIgfTtcbmV4cG9ydCB7IHNldExvZ2dlciB9O1xuZXhwb3J0IHsgSW1hZ2VGaWxlRGlyZWN0b3J5IH0gZnJvbSAnLi9pbWFnZWZpbGVkaXJlY3RvcnkuanMnO1xuLyoqXG4gKiBAdHlwZWRlZiB7VWludDhBcnJheSB8IEludDhBcnJheSB8IFVpbnQxNkFycmF5IHwgSW50MTZBcnJheSB8IFVpbnQzMkFycmF5IHwgSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheX1cbiAqIFR5cGVkQXJyYXlcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7eyBoZWlnaHQ6bnVtYmVyLCB3aWR0aDogbnVtYmVyIH19IERpbWVuc2lvbnNcbiAqL1xuLyoqXG4gKiBUaGUgYXV0b2dlbmVyYXRlZCBkb2NzIGFyZSBhIGxpdHRsZSBjb25mdXNpbmcgaGVyZS4gVGhlIGVmZmVjdGl2ZSB0eXBlIGlzOlxuICpcbiAqIGBUeXBlZEFycmF5ICYgeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcn1gXG4gKiBAdHlwZWRlZiB7VHlwZWRBcnJheSAmIERpbWVuc2lvbnN9IFR5cGVkQXJyYXlXaXRoRGltZW5zaW9uc1xuICovXG4vKipcbiAqIFRoZSBhdXRvZ2VuZXJhdGVkIGRvY3MgYXJlIGEgbGl0dGxlIGNvbmZ1c2luZyBoZXJlLiBUaGUgZWZmZWN0aXZlIHR5cGUgaXM6XG4gKlxuICogYFR5cGVkQXJyYXlbXSAmIHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXJ9YFxuICogQHR5cGVkZWYge1R5cGVkQXJyYXlbXSAmIERpbWVuc2lvbnN9IFR5cGVkQXJyYXlBcnJheVdpdGhEaW1lbnNpb25zXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gR2VvdGlmZldyaXRlck1ldGFkYXRhXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbSW1hZ2VXaWR0aF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtJbWFnZUxlbmd0aF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lkdGhdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2hlaWdodF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtCaXRzUGVyU2FtcGxlXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0NvbXByZXNzaW9uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1BsYW5hckNvbmZpZ3VyYXRpb25dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbRXh0cmFTYW1wbGVzXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1Bob3RvbWV0cmljSW50ZXJwcmV0YXRpb25dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbU2FtcGxlc1BlclBpeGVsXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1N0cmlwQnl0ZUNvdW50c11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtNb2RlbFBpeGVsU2NhbGVdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbTW9kZWxUcmFuc2Zvcm1hdGlvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtNb2RlbFRpZXBvaW50XVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW0dlb0tleURpcmVjdG9yeV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbR2VvQXNjaWlQYXJhbXNdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbR2VvRG91YmxlUGFyYW1zXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW09yaWVudGF0aW9uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1Jlc29sdXRpb25Vbml0XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1hQb3NpdGlvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtZUG9zaXRpb25dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbUm93c1BlclN0cmlwXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW1NhbXBsZUZvcm1hdF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtUaWxlV2lkdGhdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbVGlsZUxlbmd0aF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtUaWxlT2Zmc2V0c11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtUaWxlQnl0ZUNvdW50c11cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbR0RBTF9OT0RBVEFdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbR2VvZ3JhcGhpY1R5cGVHZW9LZXldXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbUHJvamVjdGVkQ1NUeXBlR2VvS2V5XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtHZW9nQ2l0YXRpb25HZW9LZXldXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW0dUQ2l0YXRpb25HZW9LZXldXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbR1RNb2RlbFR5cGVHZW9LZXldXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbR1RSYXN0ZXJUeXBlR2VvS2V5XVxuICovXG4vKipcbiAqICBUaGUgYXV0b2dlbmVyYXRlZCBkb2NzIGFyZSBhIGxpdHRsZSBjb25mdXNpbmcgaGVyZS4gVGhlIGVmZmVjdGl2ZSB0eXBlIGlzOlxuICpcbiAqIGAoVHlwZWRBcnJheSB8IFR5cGVkQXJyYXlbXSkgJiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyfWBcbiAqIEB0eXBlZGVmIHtUeXBlZEFycmF5V2l0aERpbWVuc2lvbnMgfCBUeXBlZEFycmF5QXJyYXlXaXRoRGltZW5zaW9uc30gUmVhZFJhc3RlclJlc3VsdFxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlY29kZXJXb3JrZXJcbiAqIFVzZSB0aGUge0BsaW5rIFBvb2wuYmluZFBhcmFtZXRlcnN9IG1ldGhvZCB0byBnZXQgYSBkZWNvZGVyIHdvcmtlciBmb3JcbiAqIGEgc3BlY2lmaWMgY29tcHJlc3Npb24gYW5kIGl0cyBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwcm9wZXJ0eSB7KGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKSA9PiBQcm9taXNlPEFycmF5QnVmZmVyTGlrZT59IGRlY29kZVxuICogICBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBjb21wcmVzc2VkIGJ1ZmZlciBhbmQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSBkZWNvZGVkIGJ1ZmZlci5cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFkUmFzdGVyc09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gW3dpbmRvd10gdGhlIHN1YnNldCB0byByZWFkIGRhdGEgZnJvbSBpbiBwaXhlbHMuIFdob2xlIHdpbmRvdyBpZiBub3Qgc3BlY2lmaWVkLlxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBbc2FtcGxlc10gdGhlIHNlbGVjdGlvbiBvZiBzYW1wbGVzIHRvIHJlYWQgZnJvbS4gRGVmYXVsdCBpcyBhbGwgc2FtcGxlcy5cbiAqICAgICBBbGwgc2FtcGxlcyBpZiBub3Qgc3BlY2lmaWVkLlxuICogQHByb3BlcnR5IHtQb29sfG51bGx9IFtwb29sPW51bGxdIFRoZSBvcHRpb25hbCBkZWNvZGVyIHBvb2wgdG8gdXNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWR0aF0gVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dC4gV2hlbiB0aGUgd2lkdGggaXMgbm90IHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lIGFzIHRoZSBpbWFnZXMsIHJlc2FtcGxpbmcgd2lsbCBiZSBwZXJmb3JtZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2hlaWdodF0gVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQuIFdoZW4gdGhlIHdpZHRoIGlzIG5vdCB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWUgYXMgdGhlIGltYWdlcywgcmVzYW1wbGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcmVzYW1wbGVNZXRob2Q9J25lYXJlc3QnXSBUaGUgZGVzaXJlZCByZXNhbXBsaW5nIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcHJvcGVydHkge251bWJlcnxudW1iZXJbXX0gW2ZpbGxWYWx1ZV0gVGhlIHZhbHVlIHRvIHVzZSBmb3IgcGFydHMgb2YgdGhlIGltYWdlXG4gKiAgICAgb3V0c2lkZSBvZiB0aGUgaW1hZ2VzIGV4dGVudC4gV2hlbiBtdWx0aXBsZSBzYW1wbGVzIGFyZSByZXF1ZXN0ZWQgYW5kIGBpbnRlcmxlYXZlYCBpc1xuICogICAgIGBmYWxzZWAsIGFuIGFycmF5IG9mIGZpbGwgdmFsdWVzIGNhbiBiZSBwYXNzZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW58dHJ1ZXxmYWxzZX0gW2ludGVybGVhdmVdIHdoZXRoZXIgdGhlIGRhdGEgc2hhbGwgYmUgcmVhZFxuICogICAgIGluIG9uZSBzaW5nbGUgYXJyYXkgb3Igc2VwYXJhdGUgYXJyYXlzLlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWRSR0JPcHRpb25zXG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IFt3aW5kb3ddIHRoZSBzdWJzZXQgdG8gcmVhZCBkYXRhIGZyb20gaW4gcGl4ZWxzLiBXaG9sZSB3aW5kb3cgaWYgbm90IHNwZWNpZmllZC5cbiAqIEBwcm9wZXJ0eSB7UG9vbHxudWxsfSBbcG9vbD1udWxsXSBUaGUgb3B0aW9uYWwgZGVjb2RlciBwb29sIHRvIHVzZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lkdGhdIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQuIFdoZW4gdGhlIHdpZHRoIGlzIG5vIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lIGFzIHRoZSBpbWFnZXMsIHJlc2FtcGxpbmcgd2lsbCBiZSBwZXJmb3JtZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2hlaWdodF0gVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQuIFdoZW4gdGhlIHdpZHRoIGlzIG5vIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZSBhcyB0aGUgaW1hZ2VzLCByZXNhbXBsaW5nIHdpbGwgYmUgcGVyZm9ybWVkLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtyZXNhbXBsZU1ldGhvZD0nbmVhcmVzdCddIFRoZSBkZXNpcmVkIHJlc2FtcGxpbmcgbWV0aG9kLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbZW5hYmxlQWxwaGE9ZmFsc2VdIEVuYWJsZSByZWFkaW5nIGFscGhhIGNoYW5uZWwgaWYgcHJlc2VudC5cbiAqIEBwcm9wZXJ0eSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW58dHJ1ZXxmYWxzZX0gW2ludGVybGVhdmVdIHdoZXRoZXIgdGhlIGRhdGEgc2hhbGwgYmUgcmVhZFxuICogICAgIGluIG9uZSBzaW5nbGUgYXJyYXkgb3Igc2VwYXJhdGUgYXJyYXlzLlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJsb2NrZWRTb3VyY2VPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Jsb2NrU2l6ZV0gQmxvY2sgc2l6ZSBmb3IgYSBCbG9ja2VkU291cmNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtjYWNoZVNpemU9MTAwXSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0byBjYWNoZS5cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZW1vdGVTb3VyY2VPcHRpb25zXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IFtoZWFkZXJzPXt9XSBBZGRpdGlvbmFsIGhlYWRlcnMgdG8gYWRkIHRvIGVhY2ggcmVxdWVzdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttYXhSYW5nZXM9MF0gTWF4aW11bSBudW1iZXIgb2YgcmFuZ2VzIHRvIHJlcXVlc3QgaW4gYSBzaW5nbGUgSFRUUCByZXF1ZXN0LiAwIG1lYW5zIG5vIG11bHRpLXJhbmdlIHJlcXVlc3RzLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbYWxsb3dGdWxsRmlsZT1mYWxzZV0gV2hldGhlciB0byBhbGxvdyBmdWxsIGZpbGUgcmVzcG9uc2VzIHdoZW4gcmVxdWVzdGluZyByYW5nZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2ZvcmNlWEhSPWZhbHNlXSBXaGVuIHRoZSBGZXRjaCBBUEkgd291bGQgYmUgdXNlZCwgZm9yY2UgdXNpbmcgWE1MSHR0cFJlcXVlc3QgaW5zdGVhZC5cbiAqL1xuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7RGF0YVNsaWNlfSBkYXRhU2xpY2VcbiAqIEBwYXJhbSB7MHgwMDAyfSBmaWVsZFR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuLyoqXG4gKiBAcGFyYW0ge0RhdGFTbGljZX0gZGF0YVNsaWNlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuRmllbGRUeXBlfSBmaWVsZFR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHJldHVybnMge1R5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlcyhkYXRhU2xpY2UsIGZpZWxkVHlwZSwgY291bnQsIG9mZnNldCkge1xuICAgIC8qKiBAdHlwZSB7VHlwZWRBcnJheXxBcnJheTxudW1iZXI+fG51bGx9ICovXG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG4gICAgbGV0IHJlYWRNZXRob2QgPSBudWxsO1xuICAgIGNvbnN0IGZpZWxkVHlwZUxlbmd0aCA9IGdldEZpZWxkVHlwZVNpemUoZmllbGRUeXBlKTtcbiAgICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuQllURTpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkFTQ0lJOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuVU5ERUZJTkVEOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IFVpbnQ4QXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkVWludDg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNCWVRFOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEludDhBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRJbnQ4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TSE9SVDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBVaW50MTZBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRVaW50MTY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNTSE9SVDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBJbnQxNkFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEludDE2O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5MT05HOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuSUZEOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IFVpbnQzMkFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZFVpbnQzMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0xPTkc6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgSW50MzJBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRJbnQzMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuTE9ORzg6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5JRkQ4OlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZFVpbnQ2NDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0xPTkc4OlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEludDY0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5SQVRJT05BTDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBVaW50MzJBcnJheShjb3VudCAqIDIpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkVWludDMyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TUkFUSU9OQUw6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgSW50MzJBcnJheShjb3VudCAqIDIpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkSW50MzI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkZMT0FUOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRGbG9hdDMyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5ET1VCTEU6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgRmxvYXQ2NEFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEZsb2F0NjQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gd2lsbCB0aHJvdyBiZWxvd1xuICAgIH1cbiAgICBpZiAodmFsdWVzID09PSBudWxsIHx8IHJlYWRNZXRob2QgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEludmFsaWQgZmllbGQgdHlwZTogJHtmaWVsZFR5cGV9YCk7XG4gICAgfVxuICAgIC8vIG5vcm1hbCBmaWVsZHNcbiAgICBpZiAoIShmaWVsZFR5cGUgPT09IGZpZWxkVHlwZXMuUkFUSU9OQUwgfHwgZmllbGRUeXBlID09PSBmaWVsZFR5cGVzLlNSQVRJT05BTCkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQgKyAoaSAqIGZpZWxkVHlwZUxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgeyAvLyBSQVRJT05BTCBvciBTUkFUSU9OQUxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAyKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQgKyAoaSAqIGZpZWxkVHlwZUxlbmd0aCkpO1xuICAgICAgICAgICAgdmFsdWVzW2kgKyAxXSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCArICgoaSAqIGZpZWxkVHlwZUxlbmd0aCkgKyA0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpZWxkVHlwZSA9PT0gZmllbGRUeXBlcy5BU0NJSSkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpLmRlY29kZSgvKiogQHR5cGUge1VpbnQ4QXJyYXl9ICovICh2YWx1ZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cbi8qKlxuICogRXJyb3IgY2xhc3MgZm9yIGNhc2VzIHdoZW4gYW4gSUZEIGluZGV4IHdhcyByZXF1ZXN0ZWQsIHRoYXQgZG9lcyBub3QgZXhpc3RcbiAqIGluIHRoZSBmaWxlLlxuICovXG5jbGFzcyBHZW9USUZGSW1hZ2VJbmRleEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGluZGV4KSB7XG4gICAgICAgIHN1cGVyKGBObyBpbWFnZSBhdCBpbmRleCAke2luZGV4fWApO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxufVxuY2xhc3MgR2VvVElGRkJhc2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbX2luZGV4PTBdIHRoZSBpbmRleCBvZiB0aGUgaW1hZ2UgdG8gcmV0dXJuLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkZJbWFnZT59IHRoZSBpbWFnZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJbWFnZShfaW5kZXggPSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHRoZSBudW1iZXIgb2YgaW50ZXJuYWwgc3ViZmlsZSBpbWFnZXNcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJbWFnZUNvdW50KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFkUmFzdGVyc1dpbmRvd09wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gW3Jlc1hdIGRlc2lyZWQgWSByZXNvbHV0aW9uICh3b3JsZCB1bml0cyBwZXIgcGl4ZWwpXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtyZXNZXSBkZXNpcmVkIFggcmVzb2x1dGlvbiAod29ybGQgdW5pdHMgcGVyIHBpeGVsKVxuICAgICAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gW2Jib3hdIHRoZSBzdWJzZXQgdG8gcmVhZCBkYXRhIGZyb20gaW5cbiAgICAgKiAgICAgZ2VvZ3JhcGhpY2FsIGNvb3JkaW5hdGVzLiBXaG9sZSBpbWFnZSBpZiBub3Qgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIChleHBlcmltZW50YWwpIFJlYWRzIHJhc3RlciBkYXRhIGZyb20gdGhlIGJlc3QgZml0dGluZyBpbWFnZS4gVGhpcyBmdW5jdGlvbiB1c2VzXG4gICAgICogdGhlIGltYWdlIHdpdGggdGhlIGxvd2VzdCByZXNvbHV0aW9uIHRoYXQgaXMgc3RpbGwgYSBoaWdoZXIgcmVzb2x1dGlvbiB0aGFuIHRoZVxuICAgICAqIHJlcXVlc3RlZCByZXNvbHV0aW9uLlxuICAgICAqIFdoZW4gc3BlY2lmaWVkLCB0aGUgYGJib3hgIG9wdGlvbiBpcyB0cmFuc2xhdGVkIHRvIHRoZSBgd2luZG93YCBvcHRpb24gYW5kIHRoZVxuICAgICAqIGByZXNYYCBhbmQgYHJlc1lgIHRvIGB3aWR0aGAgYW5kIGBoZWlnaHRgIHJlc3BlY3RpdmVseS5cbiAgICAgKiBUaGVuLCB0aGUgW3JlYWRSYXN0ZXJzXXtAbGluayBHZW9USUZGSW1hZ2UjcmVhZFJhc3RlcnN9IG1ldGhvZCBvZiB0aGUgc2VsZWN0ZWRcbiAgICAgKiBpbWFnZSBpcyBjYWxsZWQgYW5kIHRoZSByZXN1bHQgcmV0dXJuZWQuXG4gICAgICogQHNlZSBHZW9USUZGSW1hZ2UucmVhZFJhc3RlcnNcbiAgICAgKiBAcGFyYW0ge1JlYWRSYXN0ZXJzT3B0aW9ucyAmIFJlYWRSYXN0ZXJzV2luZG93T3B0aW9uc30gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVhZFJhc3RlclJlc3VsdD59IHRoZSBkZWNvZGVkIGFycmF5KHMpLCB3aXRoIGBoZWlnaHRgIGFuZCBgd2lkdGhgLCBhcyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBhc3luYyByZWFkUmFzdGVycyhvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgeyB3aW5kb3c6IGltYWdlV2luZG93LCB3aWR0aCwgaGVpZ2h0IH0gPSBvcHRpb25zO1xuICAgICAgICBsZXQgeyByZXNYLCByZXNZLCBiYm94IH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCBmaXJzdEltYWdlID0gYXdhaXQgdGhpcy5nZXRJbWFnZSgpO1xuICAgICAgICBsZXQgdXNlZEltYWdlID0gZmlyc3RJbWFnZTtcbiAgICAgICAgY29uc3QgaW1hZ2VDb3VudCA9IGF3YWl0IHRoaXMuZ2V0SW1hZ2VDb3VudCgpO1xuICAgICAgICBjb25zdCBpbWdCQm94ID0gZmlyc3RJbWFnZS5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICBpZiAoaW1hZ2VXaW5kb3cgJiYgYmJveCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3RoIFwiYmJveFwiIGFuZCBcIndpbmRvd1wiIHBhc3NlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3aWR0aC9oZWlnaHQgaXMgcGFzc2VkLCB0cmFuc2Zvcm0gaXQgdG8gcmVzb2x1dGlvblxuICAgICAgICBpZiAod2lkdGggfHwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGltYWdlIHdpbmRvdyAocGl4ZWwgY29vcmRpbmF0ZXMpLCB0cmFuc2Zvcm0gaXQgdG8gYSBCQm94XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgb3JpZ2luL3Jlc29sdXRpb24gb2YgdGhlIGZpcnN0IGltYWdlLlxuICAgICAgICAgICAgaWYgKGltYWdlV2luZG93KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW29YLCBvWV0gPSBmaXJzdEltYWdlLmdldE9yaWdpbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyWCwgclldID0gZmlyc3RJbWFnZS5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICAgICAgICAgICAgYmJveCA9IFtcbiAgICAgICAgICAgICAgICAgICAgb1ggKyAoaW1hZ2VXaW5kb3dbMF0gKiByWCksXG4gICAgICAgICAgICAgICAgICAgIG9ZICsgKGltYWdlV2luZG93WzFdICogclkpLFxuICAgICAgICAgICAgICAgICAgICBvWCArIChpbWFnZVdpbmRvd1syXSAqIHJYKSxcbiAgICAgICAgICAgICAgICAgICAgb1kgKyAoaW1hZ2VXaW5kb3dbM10gKiByWSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYSBiYm94IChvciBjYWxjdWxhdGVkIG9uZSlcbiAgICAgICAgICAgIGNvbnN0IHVzZWRCQm94ID0gYmJveCB8fCBpbWdCQm94O1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc1gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3RoIHdpZHRoIGFuZCByZXNYIHBhc3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNYID0gKHVzZWRCQm94WzJdIC0gdXNlZEJCb3hbMF0pIC8gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc1kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3RoIHdpZHRoIGFuZCByZXNZIHBhc3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNZID0gKHVzZWRCQm94WzNdIC0gdXNlZEJCb3hbMV0pIC8gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHJlc29sdXRpb24gaXMgc2V0IG9yIGNhbGN1bGF0ZWQsIHRyeSB0byBnZXQgdGhlIGltYWdlIHdpdGggdGhlIHdvcnN0IGFjY2VwdGFibGUgcmVzb2x1dGlvblxuICAgICAgICBpZiAocmVzWCB8fCByZXNZKSB7XG4gICAgICAgICAgICBjb25zdCBhbGxJbWFnZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VDb3VudDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCB0aGlzLmdldEltYWdlKGkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YmZpbGVUeXBlID0gaW1hZ2UuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnU3ViZmlsZVR5cGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdWJmaWxlVHlwZSA9IGltYWdlLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ05ld1N1YmZpbGVUeXBlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgc3ViZmlsZVR5cGUgPT09IDIgfHwgKG5ld1N1YmZpbGVUeXBlIHx8IDApICYgMSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxJbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsSW1hZ2VzLnNvcnQoKGEsIGIpID0+IGEuZ2V0V2lkdGgoKSAtIGIuZ2V0V2lkdGgoKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEltYWdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYWxsSW1hZ2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Jlc1ggPSAoaW1nQkJveFsyXSAtIGltZ0JCb3hbMF0pIC8gaW1hZ2UuZ2V0V2lkdGgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdSZXNZID0gKGltZ0JCb3hbM10gLSBpbWdCQm94WzFdKSAvIGltYWdlLmdldEhlaWdodCgpO1xuICAgICAgICAgICAgICAgIHVzZWRJbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgIGlmICgocmVzWCAmJiByZXNYID4gaW1nUmVzWCkgfHwgKHJlc1kgJiYgcmVzWSA+IGltZ1Jlc1kpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgd25kID0gaW1hZ2VXaW5kb3c7XG4gICAgICAgIGlmIChiYm94KSB7XG4gICAgICAgICAgICBjb25zdCBbb1gsIG9ZXSA9IGZpcnN0SW1hZ2UuZ2V0T3JpZ2luKCk7XG4gICAgICAgICAgICBjb25zdCBbaW1hZ2VSZXNYLCBpbWFnZVJlc1ldID0gdXNlZEltYWdlLmdldFJlc29sdXRpb24oZmlyc3RJbWFnZSk7XG4gICAgICAgICAgICB3bmQgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgoYmJveFswXSAtIG9YKSAvIGltYWdlUmVzWCksXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgoYmJveFsxXSAtIG9ZKSAvIGltYWdlUmVzWSksXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgoYmJveFsyXSAtIG9YKSAvIGltYWdlUmVzWCksXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCgoYmJveFszXSAtIG9ZKSAvIGltYWdlUmVzWSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgd25kID0gW1xuICAgICAgICAgICAgICAgIE1hdGgubWluKHduZFswXSwgd25kWzJdKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih3bmRbMV0sIHduZFszXSksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgod25kWzBdLCB3bmRbMl0pLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHduZFsxXSwgd25kWzNdKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZWRJbWFnZS5yZWFkUmFzdGVycyh7IC4uLm9wdGlvbnMsIHdpbmRvdzogd25kIH0pO1xuICAgIH1cbn1cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gR2VvVElGRk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NhY2hlPWZhbHNlXSB3aGV0aGVyIG9yIG5vdCBkZWNvZGVkIHRpbGVzIHNoYWxsIGJlIGNhY2hlZC5cbiAqL1xuLyoqXG4gKiBUaGUgYWJzdHJhY3Rpb24gZm9yIGEgd2hvbGUgR2VvVElGRiBmaWxlLlxuICovXG5jbGFzcyBHZW9USUZGIGV4dGVuZHMgR2VvVElGRkJhc2Uge1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7QmFzZVNvdXJjZX0gc291cmNlIFRoZSBkYXRhc291cmNlIHRvIHJlYWQgZnJvbS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiBXaGV0aGVyIHRoZSBpbWFnZSB1c2VzIGxpdHRsZSBlbmRpYW4uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiaWdUaWZmIFdoZXRoZXIgdGhlIGltYWdlIHVzZXMgYmlnVElGRiBjb252ZW50aW9ucy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZmlyc3RJRkRPZmZzZXQgVGhlIG51bWVyaWMgYnl0ZS1vZmZzZXQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGltYWdlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHRoZSBmaXJzdCBJRkQuXG4gICAgICogQHBhcmFtIHtHZW9USUZGT3B0aW9uc30gW29wdGlvbnNdIGZ1cnRoZXIgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UsIGxpdHRsZUVuZGlhbiwgYmlnVGlmZiwgZmlyc3RJRkRPZmZzZXQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgSW1hZ2VGaWxlRGlyZWN0b3J5UGFyc2VyKHNvdXJjZSwgbGl0dGxlRW5kaWFuLCBiaWdUaWZmLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubGl0dGxlRW5kaWFuID0gbGl0dGxlRW5kaWFuO1xuICAgICAgICB0aGlzLmJpZ1RpZmYgPSBiaWdUaWZmO1xuICAgICAgICB0aGlzLmZpcnN0SUZET2Zmc2V0ID0gZmlyc3RJRkRPZmZzZXQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBvcHRpb25zLmNhY2hlIHx8IGZhbHNlO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5PFByb21pc2U8aW1wb3J0KCcuL2ltYWdlZmlsZWRpcmVjdG9yeS5qcycpLkltYWdlRmlsZURpcmVjdG9yeT4gfCB1bmRlZmluZWQ+fSAqL1xuICAgICAgICB0aGlzLmlmZFJlcXVlc3RzID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj58bnVsbH0gKi9cbiAgICAgICAgdGhpcy5naG9zdFZhbHVlcyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NpemVdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8RGF0YVNsaWNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRTbGljZShvZmZzZXQsIHNpemUpIHtcbiAgICAgICAgY29uc3QgZmFsbGJhY2tTaXplID0gdGhpcy5iaWdUaWZmID8gNDA0OCA6IDEwMjQ7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVNsaWNlKChhd2FpdCB0aGlzLnNvdXJjZS5mZXRjaChbe1xuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHR5cGVvZiBzaXplICE9PSAndW5kZWZpbmVkJyA/IHNpemUgOiBmYWxsYmFja1NpemUsXG4gICAgICAgICAgICB9XSkpWzBdLCBvZmZzZXQsIHRoaXMubGl0dGxlRW5kaWFuLCB0aGlzLmJpZ1RpZmYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGltcG9ydCgnLi9pbWFnZWZpbGVkaXJlY3RvcnkuanMnKS5JbWFnZUZpbGVEaXJlY3Rvcnk+fVxuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3RJRkQoaW5kZXgpIHtcbiAgICAgICAgLy8gc2VlIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGF0IElGRCBpbmRleCByZXF1ZXN0ZWQuXG4gICAgICAgIGlmICh0aGlzLmlmZFJlcXVlc3RzW2luZGV4XSkge1xuICAgICAgICAgICAgLy8gYXR0YWNoIHRvIGFuIGFscmVhZHkgcmVxdWVzdGVkIElGRFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIGluZGV4IDBcbiAgICAgICAgICAgIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdID0gdGhpcy5wYXJzZXIucGFyc2VGaWxlRGlyZWN0b3J5QXQodGhpcy5maXJzdElGRE9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZmRSZXF1ZXN0c1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaWZkUmVxdWVzdHNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIElGRCB3YXMgbm90IHlldCBsb2FkZWQsIGxvYWQgdGhhdCBvbmUgZmlyc3RcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHJlY3Vyc2l2ZSBjYWxsLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlmZFJlcXVlc3RzW2luZGV4IC0gMV0gPSB0aGlzLnJlcXVlc3RJRkQoaW5kZXggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIG9uZSBhbHJlYWR5IHdhcyBhbiBpbmRleCBlcnJvciwgcmV0aHJvd1xuICAgICAgICAgICAgICAgIC8vIHdpdGggdGhlIGN1cnJlbnQgaW5kZXhcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEdlb1RJRkZJbWFnZUluZGV4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdlb1RJRkZJbWFnZUluZGV4RXJyb3IoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZXRocm93IGFueXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBJRkQgd2FzIGxvYWRlZCwgd2UgY2FuIGZpbmFsbHkgZmV0Y2ggdGhlIG9uZSB3ZSBhcmUgaW50ZXJlc3RlZCBpbi5cbiAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gYW4gSUlGRSwgb3RoZXJ3aXNlIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdIHdvdWxkIGJlIGRlbGF5ZWRcbiAgICAgICAgdGhpcy5pZmRSZXF1ZXN0c1tpbmRleF0gPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQcm9taXNlID0gdGhpcy5pZmRSZXF1ZXN0c1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgaWYgKCFwcmV2aW91c1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ByZXZpb3VzIElGRCByZXF1ZXN0IG1pc3NpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSWZkID0gYXdhaXQgcHJldmlvdXNQcm9taXNlO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzSWZkLm5leHRJRkRCeXRlT2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdlb1RJRkZJbWFnZUluZGV4RXJyb3IoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLnBhcnNlRmlsZURpcmVjdG9yeUF0KHByZXZpb3VzSWZkLm5leHRJRkRCeXRlT2Zmc2V0KTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG4tdGggaW50ZXJuYWwgc3ViZmlsZSBvZiBhbiBpbWFnZS4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD0wXSB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHRvIHJldHVybi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGSW1hZ2U+fSB0aGUgaW1hZ2UgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1hZ2UoaW5kZXggPSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2VvVElGRkltYWdlKGF3YWl0IHRoaXMucmVxdWVzdElGRChpbmRleCksIHRoaXMubGl0dGxlRW5kaWFuLCB0aGlzLmNhY2hlLCB0aGlzLnNvdXJjZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvdW50IG9mIHRoZSBpbnRlcm5hbCBzdWJmaWxlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHRoZSBudW1iZXIgb2YgaW50ZXJuYWwgc3ViZmlsZSBpbWFnZXNcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJbWFnZUNvdW50KCkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAvLyBsb29wIHVudGlsIHdlIHJ1biBvdXQgb2YgSUZEc1xuICAgICAgICBsZXQgaGFzTmV4dCA9IHRydWU7XG4gICAgICAgIHdoaWxlIChoYXNOZXh0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVxdWVzdElGRChpbmRleCk7XG4gICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBHZW9USUZGSW1hZ2VJbmRleEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc05leHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZXMgb2YgdGhlIENPRyBnaG9zdCBhcmVhIGFzIGEgcGFyc2VkIG1hcC5cbiAgICAgKiBTZWUgaHR0cHM6Ly9nZGFsLm9yZy9kcml2ZXJzL3Jhc3Rlci9jb2cuaHRtbCNoZWFkZXItZ2hvc3QtYXJlYSBmb3IgcmVmZXJlbmNlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj58bnVsbD59IHRoZSBwYXJzZWQgZ2hvc3QgYXJlYSBvciBudWxsLCBpZiBubyBzdWNoIGFyZWEgd2FzIGZvdW5kXG4gICAgICovXG4gICAgYXN5bmMgZ2V0R2hvc3RWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuYmlnVGlmZiA/IDE2IDogODtcbiAgICAgICAgaWYgKHRoaXMuZ2hvc3RWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdob3N0VmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldGVjdGlvblN0cmluZyA9ICdHREFMX1NUUlVDVFVSQUxfTUVUQURBVEFfU0laRT0nO1xuICAgICAgICBjb25zdCBoZXVyaXN0aWNBcmVhU2l6ZSA9IGRldGVjdGlvblN0cmluZy5sZW5ndGggKyAxMDA7XG4gICAgICAgIGxldCBzbGljZSA9IGF3YWl0IHRoaXMuZ2V0U2xpY2Uob2Zmc2V0LCBoZXVyaXN0aWNBcmVhU2l6ZSk7XG4gICAgICAgIGlmIChkZXRlY3Rpb25TdHJpbmcgPT09IGdldFZhbHVlcyhzbGljZSwgZmllbGRUeXBlcy5BU0NJSSwgZGV0ZWN0aW9uU3RyaW5nLmxlbmd0aCwgb2Zmc2V0KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzU3RyaW5nID0gZ2V0VmFsdWVzKHNsaWNlLCBmaWVsZFR5cGVzLkFTQ0lJLCBoZXVyaXN0aWNBcmVhU2l6ZSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TGluZSA9IHZhbHVlc1N0cmluZy5zcGxpdCgnXFxuJylbMF07XG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YVNpemUgPSBOdW1iZXIoZmlyc3RMaW5lLnNwbGl0KCc9JylbMV0uc3BsaXQoJyAnKVswXSkgKyBmaXJzdExpbmUubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhU2l6ZSA+IGhldXJpc3RpY0FyZWFTaXplKSB7XG4gICAgICAgICAgICAgICAgc2xpY2UgPSBhd2FpdCB0aGlzLmdldFNsaWNlKG9mZnNldCwgbWV0YWRhdGFTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZ1bGxTdHJpbmcgPSBnZXRWYWx1ZXMoc2xpY2UsIGZpZWxkVHlwZXMuQVNDSUksIG1ldGFkYXRhU2l6ZSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgICAgICAgICBjb25zdCBnaG9zdFZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgZnVsbFN0cmluZ1xuICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiBsaW5lLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgLm1hcCgobGluZSkgPT4gbGluZS5zcGxpdCgnPScpKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBnaG9zdFZhbHVlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2hvc3RWYWx1ZXMgPSBnaG9zdFZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5naG9zdFZhbHVlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2UgYSAoR2VvKVRJRkYgZmlsZSBmcm9tIHRoZSBnaXZlbiBzb3VyY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jhc2VTb3VyY2V9IHNvdXJjZSBUaGUgc291cmNlIG9mIGRhdGEgdG8gcGFyc2UgZnJvbS5cbiAgICAgKiBAcGFyYW0ge0dlb1RJRkZPcHRpb25zfSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgZnJvbVNvdXJjZShzb3VyY2UsIG9wdGlvbnMsIHNpZ25hbCkge1xuICAgICAgICBjb25zdCBoZWFkZXJEYXRhID0gKGF3YWl0IHNvdXJjZS5mZXRjaChbeyBvZmZzZXQ6IDAsIGxlbmd0aDogMTAyNCB9XSwgc2lnbmFsKSlbMF07XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3NjQoaGVhZGVyRGF0YSk7XG4gICAgICAgIGNvbnN0IEJPTSA9IGRhdGFWaWV3LmdldFVpbnQxNigwLCBmYWxzZSk7XG4gICAgICAgIGxldCBsaXR0bGVFbmRpYW47XG4gICAgICAgIGlmIChCT00gPT09IDB4NDk0OSkge1xuICAgICAgICAgICAgbGl0dGxlRW5kaWFuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCT00gPT09IDB4NEQ0RCkge1xuICAgICAgICAgICAgbGl0dGxlRW5kaWFuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGJ5dGUgb3JkZXIgdmFsdWUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWFnaWNOdW1iZXIgPSBkYXRhVmlldy5nZXRVaW50MTYoMiwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgbGV0IGJpZ1RpZmY7XG4gICAgICAgIGlmIChtYWdpY051bWJlciA9PT0gNDIpIHtcbiAgICAgICAgICAgIGJpZ1RpZmYgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYWdpY051bWJlciA9PT0gNDMpIHtcbiAgICAgICAgICAgIGJpZ1RpZmYgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Qnl0ZVNpemUgPSBkYXRhVmlldy5nZXRVaW50MTYoNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgIGlmIChvZmZzZXRCeXRlU2l6ZSAhPT0gOCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgb2Zmc2V0IGJ5dGUtc2l6ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFnaWMgbnVtYmVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpcnN0SUZET2Zmc2V0ID0gYmlnVGlmZlxuICAgICAgICAgICAgPyBkYXRhVmlldy5nZXRVaW50NjQoOCwgbGl0dGxlRW5kaWFuKVxuICAgICAgICAgICAgOiBkYXRhVmlldy5nZXRVaW50MzIoNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgcmV0dXJuIG5ldyBHZW9USUZGKHNvdXJjZSwgbGl0dGxlRW5kaWFuLCBiaWdUaWZmLCBmaXJzdElGRE9mZnNldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgdW5kZXJseWluZyBmaWxlIGJ1ZmZlclxuICAgICAqIE4uQi4gQWZ0ZXIgdGhlIEdlb1RJRkYgaGFzIGJlZW4gY29tcGxldGVseSBwcm9jZXNzZWQgaXQgbmVlZHNcbiAgICAgKiB0byBiZSBjbG9zZWQgYnV0IG9ubHkgaWYgaXQgaGFzIGJlZW4gY29uc3RydWN0ZWQgZnJvbSBhIGZpbGUuXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zb3VyY2UuY2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgeyBHZW9USUZGIH07XG5leHBvcnQgZGVmYXVsdCBHZW9USUZGO1xuLyoqXG4gKiBXcmFwcGVyIGZvciBHZW9USUZGIGZpbGVzIHRoYXQgaGF2ZSBleHRlcm5hbCBvdmVydmlld3MuXG4gKiBAYXVnbWVudHMgR2VvVElGRkJhc2VcbiAqL1xuY2xhc3MgTXVsdGlHZW9USUZGIGV4dGVuZHMgR2VvVElGRkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBNdWx0aUdlb1RJRkYgZnJvbSBhIG1haW4gYW5kIHNldmVyYWwgb3ZlcnZpZXcgZmlsZXMuXG4gICAgICogQHBhcmFtIHtHZW9USUZGfSBtYWluRmlsZSBUaGUgbWFpbiBHZW9USUZGIGZpbGUuXG4gICAgICogQHBhcmFtIHtHZW9USUZGW119IG92ZXJ2aWV3RmlsZXMgQW4gYXJyYXkgb2Ygb3ZlcnZpZXcgZmlsZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFpbkZpbGUsIG92ZXJ2aWV3RmlsZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tYWluRmlsZSA9IG1haW5GaWxlO1xuICAgICAgICB0aGlzLm92ZXJ2aWV3RmlsZXMgPSBvdmVydmlld0ZpbGVzO1xuICAgICAgICB0aGlzLmltYWdlRmlsZXMgPSBbbWFpbkZpbGVdLmNvbmNhdChvdmVydmlld0ZpbGVzKTtcbiAgICAgICAgdGhpcy5maWxlRGlyZWN0b3JpZXNQZXJGaWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxlRGlyZWN0b3JpZXNQZXJGaWxlUGFyc2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IG51bGw7XG4gICAgfVxuICAgIGFzeW5jIHBhcnNlRmlsZURpcmVjdG9yaWVzUGVyRmlsZSgpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbdGhpcy5tYWluRmlsZS5wYXJzZXIucGFyc2VGaWxlRGlyZWN0b3J5QXQodGhpcy5tYWluRmlsZS5maXJzdElGRE9mZnNldCldXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMub3ZlcnZpZXdGaWxlcy5tYXAoKGZpbGUpID0+IGZpbGUucGFyc2VyLnBhcnNlRmlsZURpcmVjdG9yeUF0KGZpbGUuZmlyc3RJRkRPZmZzZXQpKSk7XG4gICAgICAgIHRoaXMuZmlsZURpcmVjdG9yaWVzUGVyRmlsZSA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yaWVzUGVyRmlsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuLXRoIGludGVybmFsIHN1YmZpbGUgb2YgYW4gaW1hZ2UuIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9MF0gdGhlIGluZGV4IG9mIHRoZSBpbWFnZSB0byByZXR1cm4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRkltYWdlPn0gdGhlIGltYWdlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqL1xuICAgIGFzeW5jIGdldEltYWdlKGluZGV4ID0gMCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHRoaXMuaW1hZ2VDb3VudHMgaWYgbm90IHlldCBkb25lXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0SW1hZ2VDb3VudCgpO1xuICAgICAgICBpZiAoIXRoaXMuaW1hZ2VDb3VudHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2UgY291bnRzIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLnBhcnNlRmlsZURpcmVjdG9yaWVzUGVyRmlsZSgpO1xuICAgICAgICBsZXQgdmlzaXRlZCA9IDA7XG4gICAgICAgIGxldCByZWxhdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IHRoaXMuaW1hZ2VGaWxlc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCB0aGlzLmltYWdlQ291bnRzW2ldOyBpaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSB2aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR2VvVElGRkltYWdlKGF3YWl0IGltYWdlRmlsZS5yZXF1ZXN0SUZEKHJlbGF0aXZlSW5kZXgpLCBpbWFnZUZpbGUubGl0dGxlRW5kaWFuLCBpbWFnZUZpbGUuY2FjaGUsIGltYWdlRmlsZS5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aXNpdGVkKys7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsYXRpdmVJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW1hZ2UgaW5kZXgnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY291bnQgb2YgdGhlIGludGVybmFsIHN1YmZpbGVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gdGhlIG51bWJlciBvZiBpbnRlcm5hbCBzdWJmaWxlIGltYWdlc1xuICAgICAqL1xuICAgIGFzeW5jIGdldEltYWdlQ291bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ291bnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbdGhpcy5tYWluRmlsZS5nZXRJbWFnZUNvdW50KCldXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMub3ZlcnZpZXdGaWxlcy5tYXAoKGZpbGUpID0+IGZpbGUuZ2V0SW1hZ2VDb3VudCgpKSk7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudHMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cyk7XG4gICAgICAgIHRoaXMuaW1hZ2VDb3VudCA9IHRoaXMuaW1hZ2VDb3VudHMucmVkdWNlKChjb3VudCwgaWZkcykgPT4gY291bnQgKyBpZmRzLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VDb3VudDtcbiAgICB9XG59XG5leHBvcnQgeyBNdWx0aUdlb1RJRkYgfTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBHZW9USUZGIGZyb20gYSByZW1vdGUgVVJMLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGFjY2VzcyB0aGUgaW1hZ2UgZnJvbVxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zfSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHNvdXJjZS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIHtAbGluayBtYWtlUmVtb3RlU291cmNlfSBmb3IgZGV0YWlscy5cbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRj59IFRoZSByZXN1bHRpbmcgR2VvVElGRiBmaWxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZnJvbVVybCh1cmwsIG9wdGlvbnMgPSB7fSwgc2lnbmFsKSB7XG4gICAgcmV0dXJuIEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlUmVtb3RlU291cmNlKHVybCwgb3B0aW9ucyksIHVuZGVmaW5lZCwgc2lnbmFsKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBHZW9USUZGIGZyb20gYSBjdXN0b20ge0BsaW5rIEJhc2VDbGllbnR9LlxuICogQHBhcmFtIHtCYXNlQ2xpZW50fSBjbGllbnQgVGhlIGNsaWVudC5cbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9uc30gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBzb3VyY2UuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSB7QGxpbmsgbWFrZVJlbW90ZVNvdXJjZX0gZm9yIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkY+fSBUaGUgcmVzdWx0aW5nIEdlb1RJRkYgZmlsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZyb21DdXN0b21DbGllbnQoY2xpZW50LCBvcHRpb25zID0ge30sIHNpZ25hbCkge1xuICAgIHJldHVybiBHZW9USUZGLmZyb21Tb3VyY2UobWFrZUN1c3RvbVNvdXJjZShjbGllbnQsIG9wdGlvbnMpLCB1bmRlZmluZWQsIHNpZ25hbCk7XG59XG4vKipcbiAqIENvbnN0cnVjdCBhIG5ldyBHZW9USUZGIGZyb20gYW5cbiAqIFtBcnJheUJ1ZmZlcl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXlCdWZmZXJ9LlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGRhdGEgdG8gcmVhZCB0aGUgZmlsZSBmcm9tLlxuICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGPn0gVGhlIHJlc3VsdGluZyBHZW9USUZGIGZpbGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIsIHNpZ25hbCkge1xuICAgIHJldHVybiBHZW9USUZGLmZyb21Tb3VyY2UobWFrZUJ1ZmZlclNvdXJjZShhcnJheUJ1ZmZlciksIHVuZGVmaW5lZCwgc2lnbmFsKTtcbn1cbi8qKlxuICogQ29uc3RydWN0IGEgR2VvVElGRiBmcm9tIGEgbG9jYWwgZmlsZSBwYXRoLiBUaGlzIHVzZXMgdGhlIG5vZGVcbiAqIFtmaWxlc3lzdGVtIEFQSV17QGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9mcy5odG1sfSBhbmQgaXNcbiAqIG5vdCBhdmFpbGFibGUgb24gYnJvd3NlcnMuXG4gKlxuICogTi5CLiBBZnRlciB0aGUgR2VvVElGRiBoYXMgYmVlbiBjb21wbGV0ZWx5IHByb2Nlc3NlZCBpdCBuZWVkc1xuICogdG8gYmUgY2xvc2VkIGJ1dCBvbmx5IGlmIGl0IGhhcyBiZWVuIGNvbnN0cnVjdGVkIGZyb20gYSBmaWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIGZpbGUgcGF0aCB0byByZWFkIGZyb20uXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkY+fSBUaGUgcmVzdWx0aW5nIEdlb1RJRkYgZmlsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZyb21GaWxlKHBhdGgsIHNpZ25hbCkge1xuICAgIHJldHVybiBHZW9USUZGLmZyb21Tb3VyY2UobWFrZUZpbGVTb3VyY2UocGF0aCksIHVuZGVmaW5lZCwgc2lnbmFsKTtcbn1cbi8qKlxuICogQ29uc3RydWN0IGEgR2VvVElGRiBmcm9tIGFuIEhUTUxcbiAqIFtCbG9iXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQmxvYn0gb3JcbiAqIFtGaWxlXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZX1cbiAqIG9iamVjdC5cbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBibG9iIFRoZSBCbG9iIG9yIEZpbGUgb2JqZWN0IHRvIHJlYWQgZnJvbS5cbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRj59IFRoZSByZXN1bHRpbmcgR2VvVElGRiBmaWxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZnJvbUJsb2IoYmxvYiwgc2lnbmFsKSB7XG4gICAgcmV0dXJuIEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlRmlsZVJlYWRlclNvdXJjZShibG9iKSwgdW5kZWZpbmVkLCBzaWduYWwpO1xufVxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBNdWx0aUdlb1RJRkYgZnJvbSB0aGUgZ2l2ZW4gVVJMcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtYWluVXJsIFRoZSBVUkwgZm9yIHRoZSBtYWluIGZpbGUuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvdmVydmlld1VybHMgQW4gYXJyYXkgb2YgVVJMcyBmb3IgdGhlIG92ZXJ2aWV3IGltYWdlcy5cbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9uc30gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBzb3VyY2UuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlZSBbbWFrZVJlbW90ZVNvdXJjZV17QGxpbmsgbW9kdWxlOnNvdXJjZS5tYWtlUmVtb3RlU291cmNlfVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgZGV0YWlscy5cbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHJldHVybnMge1Byb21pc2U8TXVsdGlHZW9USUZGPn0gVGhlIHJlc3VsdGluZyBNdWx0aUdlb1RJRkYgZmlsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZyb21VcmxzKG1haW5VcmwsIG92ZXJ2aWV3VXJscyA9IFtdLCBvcHRpb25zID0ge30sIHNpZ25hbCkge1xuICAgIGNvbnN0IG1haW5GaWxlID0gYXdhaXQgR2VvVElGRi5mcm9tU291cmNlKG1ha2VSZW1vdGVTb3VyY2UobWFpblVybCwgb3B0aW9ucyksIHVuZGVmaW5lZCwgc2lnbmFsKTtcbiAgICBjb25zdCBvdmVydmlld0ZpbGVzID0gYXdhaXQgUHJvbWlzZS5hbGwob3ZlcnZpZXdVcmxzLm1hcCgodXJsKSA9PiBHZW9USUZGLmZyb21Tb3VyY2UobWFrZVJlbW90ZVNvdXJjZSh1cmwsIG9wdGlvbnMpLCB1bmRlZmluZWQsIHNpZ25hbCkpKTtcbiAgICByZXR1cm4gbmV3IE11bHRpR2VvVElGRihtYWluRmlsZSwgb3ZlcnZpZXdGaWxlcyk7XG59XG4vKipcbiAqIE1haW4gY3JlYXRpbmcgZnVuY3Rpb24gZm9yIEdlb1RJRkYgZmlsZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj58QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fFR5cGVkQXJyYXl9IHZhbHVlcyBUaGUgcGl4ZWwgdmFsdWVzIHRvIHdyaXRlLlxuICogQ2FuIGJlIGEgZmxhdCBhcnJheSBvZiBhbGwgcGl4ZWxzIG9yIGEgMy1kaW1lbnNpb25hbCBhcnJheSBvZiBzaGFwZSBgW2JhbmRdW3Jvd11bY29sdW1uXWAuXG4gKiBAcGFyYW0ge0dlb3RpZmZXcml0ZXJNZXRhZGF0YX0gbWV0YWRhdGFcbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlQXJyYXlCdWZmZXIodmFsdWVzLCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB3cml0ZUdlb3RpZmYodmFsdWVzLCBtZXRhZGF0YSk7XG59XG5leHBvcnQgeyBQb29sIH07XG5leHBvcnQgeyBHZW9USUZGSW1hZ2UgfTtcbmV4cG9ydCB7IEJhc2VDbGllbnQsIEJhc2VSZXNwb25zZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvdGlmZi5qcy5tYXAiLCIvKiogQG1vZHVsZSBnZW90aWZmaW1hZ2UgKi9cbmltcG9ydCB7IGdldEZsb2F0MTYgfSBmcm9tICdAcGV0YW1vcmlrZW4vZmxvYXQxNic7XG4vLyBAdHMtZXhwZWN0LWVycm9yXG5pbXBvcnQgZ2V0QXR0cmlidXRlIGZyb20gJ3htbC11dGlscy9nZXQtYXR0cmlidXRlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuaW1wb3J0IGZpbmRUYWdzQnlOYW1lIGZyb20gJ3htbC11dGlscy9maW5kLXRhZ3MtYnktbmFtZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCB7IHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLCBFeHRyYVNhbXBsZXNWYWx1ZXMgfSBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHsgZnJvbVdoaXRlSXNaZXJvLCBmcm9tQmxhY2tJc1plcm8sIGZyb21QYWxldHRlLCBmcm9tQ01ZSywgZnJvbVlDYkNyLCBmcm9tQ0lFTGFiIH0gZnJvbSAnLi9yZ2IuanMnO1xuaW1wb3J0IHsgZ2V0RGVjb2RlciwgZ2V0RGVjb2RlclBhcmFtZXRlcnMgfSBmcm9tICcuL2NvbXByZXNzaW9uL2luZGV4LmpzJztcbmltcG9ydCB7IHJlc2FtcGxlLCByZXNhbXBsZUludGVybGVhdmVkIH0gZnJvbSAnLi9yZXNhbXBsZS5qcyc7XG4vKiogQGltcG9ydCB7RGVjb2RlcldvcmtlciwgVHlwZWRBcnJheX0gZnJvbSBcIi4vZ2VvdGlmZi5qc1wiICovXG4vKiogQGltcG9ydCB7UmVhZFJhc3RlclJlc3VsdH0gZnJvbSBcIi4vZ2VvdGlmZi5qc1wiICovXG4vKiogQGltcG9ydCB7UmVhZFJhc3RlcnNPcHRpb25zfSBmcm9tIFwiLi9nZW90aWZmLmpzXCIgKi9cbi8qKiBAaW1wb3J0IHtSZWFkUkdCT3B0aW9uc30gZnJvbSBcIi4vZ2VvdGlmZi5qc1wiICovXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPnxUeXBlZEFycmF5fSBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBzdW0oYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgcyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgICAgcyArPSBhcnJheVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG59XG4vKipcbiAqIEBwYXJhbSB7MXwyfDN9IGZvcm1hdFxuICogQHBhcmFtIHtudW1iZXJ9IGJpdHNQZXJTYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfEFycmF5QnVmZmVyTGlrZX0gc2l6ZU9yRGF0YVxuICogQHJldHVybnMge1R5cGVkQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGFycmF5Rm9yVHlwZShmb3JtYXQsIGJpdHNQZXJTYW1wbGUsIHNpemVPckRhdGEpIHtcbiAgICBsZXQgVHlwZWRBcnJheUNvbnN0cnVjdG9yO1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgMTogLy8gdW5zaWduZWQgaW50ZWdlciBkYXRhXG4gICAgICAgICAgICBpZiAoYml0c1BlclNhbXBsZSA8PSA4KSB7XG4gICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gVWludDhBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPD0gMTYpIHtcbiAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBVaW50MTZBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPD0gMzIpIHtcbiAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBVaW50MzJBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6IC8vIHR3b3MgY29tcGxlbWVudCBzaWduZWQgaW50ZWdlciBkYXRhXG4gICAgICAgICAgICBpZiAoYml0c1BlclNhbXBsZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEludDhBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPT09IDE2KSB7XG4gICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gSW50MTZBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gSW50MzJBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6IC8vIGZsb2F0aW5nIHBvaW50IGRhdGFcbiAgICAgICAgICAgIHN3aXRjaCAoYml0c1BlclNhbXBsZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gRmxvYXQzMkFycmF5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBGbG9hdDY0QXJyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAodHlwZW9mIHNpemVPckRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVkQXJyYXlDb25zdHJ1Y3RvcihzaXplT3JEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaXplT3JEYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWRBcnJheUNvbnN0cnVjdG9yKHNpemVPckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IEVycm9yKCdVbnN1cHBvcnRlZCBkYXRhIGZvcm1hdC9iaXRzUGVyU2FtcGxlJyk7XG59XG4vKipcbiAqIEBwYXJhbSB7MXwyfDN9IGZvcm1hdFxuICogQHBhcmFtIHtudW1iZXJ9IGJpdHNQZXJTYW1wbGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBuZWVkc05vcm1hbGl6YXRpb24oZm9ybWF0LCBiaXRzUGVyU2FtcGxlKSB7XG4gICAgaWYgKChmb3JtYXQgPT09IDEgfHwgZm9ybWF0ID09PSAyKSAmJiBiaXRzUGVyU2FtcGxlIDw9IDMyICYmIGJpdHNQZXJTYW1wbGUgJSA4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSAzICYmIChiaXRzUGVyU2FtcGxlID09PSAxNiB8fCBiaXRzUGVyU2FtcGxlID09PSAzMiB8fCBiaXRzUGVyU2FtcGxlID09PSA2NCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheUJ1ZmZlckxpa2V9IGluQnVmZmVyXG4gKiBAcGFyYW0gezF8MnwzfSBmb3JtYXRcbiAqIEBwYXJhbSB7MXwyfSBwbGFuYXJDb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gc2FtcGxlc1BlclBpeGVsXG4gKiBAcGFyYW0ge251bWJlcn0gYml0c1BlclNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IHRpbGVXaWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IHRpbGVIZWlnaHRcbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlckxpa2V9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KGluQnVmZmVyLCBmb3JtYXQsIHBsYW5hckNvbmZpZ3VyYXRpb24sIHNhbXBsZXNQZXJQaXhlbCwgYml0c1BlclNhbXBsZSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSB7XG4gICAgLy8gY29uc3QgaW5CeXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShpbkJ1ZmZlcik7XG4gICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhpbkJ1ZmZlcik7XG4gICAgY29uc3Qgb3V0U2l6ZSA9IHBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDJcbiAgICAgICAgPyB0aWxlSGVpZ2h0ICogdGlsZVdpZHRoXG4gICAgICAgIDogdGlsZUhlaWdodCAqIHRpbGVXaWR0aCAqIHNhbXBsZXNQZXJQaXhlbDtcbiAgICBjb25zdCBzYW1wbGVzVG9UcmFuc2ZlciA9IHBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDJcbiAgICAgICAgPyAxIDogc2FtcGxlc1BlclBpeGVsO1xuICAgIGNvbnN0IG91dEFycmF5ID0gYXJyYXlGb3JUeXBlKGZvcm1hdCwgYml0c1BlclNhbXBsZSwgb3V0U2l6ZSk7XG4gICAgLy8gbGV0IHBpeGVsID0gMDtcbiAgICBjb25zdCBiaXRNYXNrID0gcGFyc2VJbnQoJzEnLnJlcGVhdChiaXRzUGVyU2FtcGxlKSwgMik7XG4gICAgaWYgKGZvcm1hdCA9PT0gMSkgeyAvLyB1bnNpZ25lZCBpbnRlZ2VyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9PU0dlby9nZGFsL2Jsb2IvbWFzdGVyL2dkYWwvZnJtdHMvZ3RpZmYvZ2VvdGlmZi5jcHAjTDczMzdcbiAgICAgICAgbGV0IHBpeGVsQml0U2tpcDtcbiAgICAgICAgLy8gbGV0IHNhbXBsZUJpdE9mZnNldCA9IDA7XG4gICAgICAgIGlmIChwbGFuYXJDb25maWd1cmF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICBwaXhlbEJpdFNraXAgPSBzYW1wbGVzUGVyUGl4ZWwgKiBiaXRzUGVyU2FtcGxlO1xuICAgICAgICAgICAgLy8gc2FtcGxlQml0T2Zmc2V0ID0gKHNhbXBsZXNQZXJQaXhlbCAtIDEpICogYml0c1BlclNhbXBsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBpeGVsQml0U2tpcCA9IGJpdHNQZXJTYW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQml0cyBwZXIgbGluZSByb3VuZHMgdXAgdG8gbmV4dCBieXRlIGJvdW5kYXJ5LlxuICAgICAgICBsZXQgYml0c1BlckxpbmUgPSB0aWxlV2lkdGggKiBwaXhlbEJpdFNraXA7XG4gICAgICAgIGlmICgoYml0c1BlckxpbmUgJiA3KSAhPT0gMCkge1xuICAgICAgICAgICAgYml0c1BlckxpbmUgPSAoYml0c1BlckxpbmUgKyA3KSAmICh+Nyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aWxlSGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVCaXRPZmZzZXQgPSB5ICogYml0c1BlckxpbmU7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRpbGVXaWR0aDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxCaXRPZmZzZXQgPSBsaW5lQml0T2Zmc2V0ICsgKHggKiBzYW1wbGVzVG9UcmFuc2ZlciAqIGJpdHNQZXJTYW1wbGUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlc1RvVHJhbnNmZXI7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiaXRPZmZzZXQgPSBwaXhlbEJpdE9mZnNldCArIChpICogYml0c1BlclNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEluZGV4ID0gKCgoeSAqIHRpbGVXaWR0aCkgKyB4KSAqIHNhbXBsZXNUb1RyYW5zZmVyKSArIGk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSBNYXRoLmZsb29yKGJpdE9mZnNldCAvIDgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbm5lckJpdE9mZnNldCA9IGJpdE9mZnNldCAlIDg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lckJpdE9mZnNldCArIGJpdHNQZXJTYW1wbGUgPD0gOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0QXJyYXlbb3V0SW5kZXhdID0gKHZpZXcuZ2V0VWludDgoYnl0ZU9mZnNldCkgPj4gKDggLSBiaXRzUGVyU2FtcGxlKSAtIGlubmVyQml0T2Zmc2V0KSAmIGJpdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5uZXJCaXRPZmZzZXQgKyBiaXRzUGVyU2FtcGxlIDw9IDE2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRBcnJheVtvdXRJbmRleF0gPSAodmlldy5nZXRVaW50MTYoYnl0ZU9mZnNldCkgPj4gKDE2IC0gYml0c1BlclNhbXBsZSkgLSBpbm5lckJpdE9mZnNldCkgJiBiaXRNYXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlubmVyQml0T2Zmc2V0ICsgYml0c1BlclNhbXBsZSA8PSAyNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3ID0gKHZpZXcuZ2V0VWludDE2KGJ5dGVPZmZzZXQpIDw8IDgpIHwgKHZpZXcuZ2V0VWludDgoYnl0ZU9mZnNldCArIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEFycmF5W291dEluZGV4XSA9IChyYXcgPj4gKDI0IC0gYml0c1BlclNhbXBsZSkgLSBpbm5lckJpdE9mZnNldCkgJiBiaXRNYXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0QXJyYXlbb3V0SW5kZXhdID0gKHZpZXcuZ2V0VWludDMyKGJ5dGVPZmZzZXQpID4+ICgzMiAtIGJpdHNQZXJTYW1wbGUpIC0gaW5uZXJCaXRPZmZzZXQpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb3V0V29yZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGJpdCA9IDA7IGJpdCA8IGJpdHNQZXJTYW1wbGU7ICsrYml0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKGluQnl0ZUFycmF5W2JpdE9mZnNldCA+PiAzXVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJiAoMHg4MCA+PiAoYml0T2Zmc2V0ICYgNykpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvdXRXb3JkIHw9ICgxIDw8IChiaXRzUGVyU2FtcGxlIC0gMSAtIGJpdCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICArK2JpdE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBvdXRBcnJheVtvdXRJbmRleF0gPSBvdXRXb3JkO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdXRBcnJheVtwaXhlbF0gPSBvdXRXb3JkO1xuICAgICAgICAgICAgICAgICAgICAvLyBwaXhlbCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBiaXRPZmZzZXQgPSBiaXRPZmZzZXQgKyBwaXhlbEJpdFNraXAgLSBiaXRzUGVyU2FtcGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gMykgeyAvLyBmbG9hdGluZyBwb2ludFxuICAgICAgICAvLyBGbG9hdDE2IGlzIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgICAgIC8vIG5vcm1hbGl6ZSAxNi8yNCBiaXQgZmxvYXRzIHRvIDMyIGJpdCBmbG9hdHMgaW4gdGhlIGFycmF5XG4gICAgICAgIC8vIGNvbnNvbGUudGltZSgpO1xuICAgICAgICAvLyBpZiAoYml0c1BlclNhbXBsZSA9PT0gMTYpIHtcbiAgICAgICAgLy8gICBmb3IgKGxldCBieXRlID0gMCwgb3V0SW5kZXggPSAwOyBieXRlIDwgaW5CdWZmZXIuYnl0ZUxlbmd0aDsgYnl0ZSArPSAyLCArK291dEluZGV4KSB7XG4gICAgICAgIC8vICAgICBvdXRBcnJheVtvdXRJbmRleF0gPSBnZXRGbG9hdDE2KHZpZXcsIGJ5dGUpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zb2xlLnRpbWVFbmQoKVxuICAgIH1cbiAgICByZXR1cm4gb3V0QXJyYXkuYnVmZmVyO1xufVxuLyoqXG4gKiBHZW9USUZGIHN1Yi1maWxlIGltYWdlLlxuICovXG5jbGFzcyBHZW9USUZGSW1hZ2Uge1xuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5fSBmaWxlRGlyZWN0b3J5IFRoZSBwYXJzZWQgZmlsZSBkaXJlY3RvcnlcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGxpdHRsZUVuZGlhbiBXaGV0aGVyIHRoZSBmaWxlIGlzIGVuY29kZWQgaW4gbGl0dGxlIG9yIGJpZyBlbmRpYW5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNhY2hlIFdoZXRoZXIgb3Igbm90IGRlY29kZWQgdGlsZXMgc2hhbGwgYmUgY2FjaGVkXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vc291cmNlL2Jhc2Vzb3VyY2UuanMnKS5CYXNlU291cmNlfSBzb3VyY2UgVGhlIGRhdGFzb3VyY2UgdG8gcmVhZCBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZmlsZURpcmVjdG9yeSwgbGl0dGxlRW5kaWFuLCBjYWNoZSwgc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmlsZURpcmVjdG9yeSA9IGZpbGVEaXJlY3Rvcnk7XG4gICAgICAgIHRoaXMubGl0dGxlRW5kaWFuID0gbGl0dGxlRW5kaWFuO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5PFByb21pc2U8QXJyYXlCdWZmZXJMaWtlPj58bnVsbH0gKi9cbiAgICAgICAgdGhpcy50aWxlcyA9IGNhY2hlID8gW10gOiBudWxsO1xuICAgICAgICB0aGlzLmlzVGlsZWQgPSAhZmlsZURpcmVjdG9yeS5oYXNUYWcoJ1N0cmlwT2Zmc2V0cycpO1xuICAgICAgICBjb25zdCBwbGFuYXJDb25maWd1cmF0aW9uID0gZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnUGxhbmFyQ29uZmlndXJhdGlvbicpID8/IDE7XG4gICAgICAgIGlmIChwbGFuYXJDb25maWd1cmF0aW9uICE9PSAxICYmIHBsYW5hckNvbmZpZ3VyYXRpb24gIT09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwbGFuYXIgY29uZmlndXJhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUgezEgfCAyfSAqL1xuICAgICAgICB0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPSBwbGFuYXJDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXNzb2NpYXRlZCBwYXJzZWQgZmlsZSBkaXJlY3RvcnkuXG4gICAgICogQHJldHVybnMge2ltcG9ydChcIi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeX0gdGhlIHBhcnNlZCBmaWxlIGRpcmVjdG9yeVxuICAgICAqL1xuICAgIGdldEZpbGVEaXJlY3RvcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3Rvcnk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFzc29jaWF0ZWQgcGFyc2VkIGdlbyBrZXlzLlxuICAgICAqIEByZXR1cm5zIHtQYXJ0aWFsPFJlY29yZDxpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkdlb0tleU5hbWUsICo+PnxudWxsfSB0aGUgcGFyc2VkIGdlbyBrZXlzXG4gICAgICovXG4gICAgZ2V0R2VvS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yeS5wYXJzZUdlb0tleURpcmVjdG9yeSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBpbWFnZVxuICAgICAqL1xuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdJbWFnZVdpZHRoJykgfHwgMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoZSBpbWFnZVxuICAgICAqL1xuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnSW1hZ2VMZW5ndGgnKSB8fCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc2FtcGxlcyBwZXIgcGl4ZWwuXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbFxuICAgICAqL1xuICAgIGdldFNhbXBsZXNQZXJQaXhlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnU2FtcGxlc1BlclBpeGVsJykgPz8gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgZWFjaCB0aWxlLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiBlYWNoIHRpbGVcbiAgICAgKi9cbiAgICBnZXRUaWxlV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVGlsZWQgPyAodGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdUaWxlV2lkdGgnKSB8fCAwKSA6IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIGVhY2ggdGlsZS5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgaGVpZ2h0IG9mIGVhY2ggdGlsZVxuICAgICAqL1xuICAgIGdldFRpbGVIZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGlsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1RpbGVMZW5ndGgnKSB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvd3NQZXJTdHJpcCA9IHRoaXMuZmlsZURpcmVjdG9yeS5oYXNUYWcoJ1Jvd3NQZXJTdHJpcCcpICYmIHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnUm93c1BlclN0cmlwJyk7XG4gICAgICAgIGlmIChyb3dzUGVyU3RyaXApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihyb3dzUGVyU3RyaXAsIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEhlaWdodCgpO1xuICAgIH1cbiAgICBnZXRCbG9ja1dpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaWxlV2lkdGgoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEJsb2NrSGVpZ2h0KHkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUaWxlZCB8fCAoeSArIDEpICogdGhpcy5nZXRUaWxlSGVpZ2h0KCkgPD0gdGhpcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGlsZUhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGVpZ2h0KCkgLSAoeSAqIHRoaXMuZ2V0VGlsZUhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgYnl0ZXMgZm9yIGVhY2ggcGl4ZWwgYWNyb3NzIGFsbCBzYW1wbGVzLiBPbmx5IGZ1bGxcbiAgICAgKiBieXRlcyBhcmUgc3VwcG9ydGVkLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIHdoZW4gdGhpcyBpcyBub3QgdGhlIGNhc2UuXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGJ5dGVzIHBlciBwaXhlbFxuICAgICAqL1xuICAgIGdldEJ5dGVzUGVyUGl4ZWwoKSB7XG4gICAgICAgIGxldCBieXRlcyA9IDA7XG4gICAgICAgIC8vIHRoaXMgaXMgYSBzaG9ydCBsaXN0LCBzbyB3ZSBhc3N1bWUgdGhpcyBpcyBhbHJlYWR5IGxvYWRlZFxuICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdCaXRzUGVyU2FtcGxlJykgfHwgW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYml0c1BlclNhbXBsZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYnl0ZXMgKz0gdGhpcy5nZXRTYW1wbGVCeXRlU2l6ZShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTYW1wbGVCeXRlU2l6ZShpKSB7XG4gICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0JpdHNQZXJTYW1wbGUnKSB8fCBbXTtcbiAgICAgICAgaWYgKGkgPj0gYml0c1BlclNhbXBsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBTYW1wbGUgaW5kZXggJHtpfSBpcyBvdXQgb2YgcmFuZ2UuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChiaXRzUGVyU2FtcGxlW2ldIC8gOCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzYW1wbGVJbmRleFxuICAgICAqIEByZXR1cm5zIHsodGhpczogRGF0YVZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgbGl0dGxlRW5kaWFuOiBib29sZWFuKSA9PiBudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0UmVhZGVyRm9yU2FtcGxlKHNhbXBsZUluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNhbXBsZUZvcm1hdCA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnU2FtcGxlRm9ybWF0Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHNhbXBsZUZvcm1hdFxuICAgICAgICAgICAgPyBzYW1wbGVGb3JtYXRbc2FtcGxlSW5kZXhdIDogMTtcbiAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9ICh0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0JpdHNQZXJTYW1wbGUnKSB8fCBbXSlbc2FtcGxlSW5kZXhdO1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgY2FzZSAxOiAvLyB1bnNpZ25lZCBpbnRlZ2VyIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAoYml0c1BlclNhbXBsZSA8PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0VWludDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPD0gMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRVaW50MTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPD0gMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRVaW50MzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvLyB0d29zIGNvbXBsZW1lbnQgc2lnbmVkIGludGVnZXIgZGF0YVxuICAgICAgICAgICAgICAgIGlmIChiaXRzUGVyU2FtcGxlIDw9IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRJbnQ4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChiaXRzUGVyU2FtcGxlIDw9IDE2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0SW50MTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPD0gMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRJbnQzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChiaXRzUGVyU2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEZsb2F0MTYodGhpcywgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0RmxvYXQzMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVmlldy5wcm90b3R5cGUuZ2V0RmxvYXQ2NDtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRXJyb3IoJ1Vuc3VwcG9ydGVkIGRhdGEgZm9ybWF0L2JpdHNQZXJTYW1wbGUnKTtcbiAgICB9XG4gICAgZ2V0U2FtcGxlRm9ybWF0KHNhbXBsZUluZGV4ID0gMCkge1xuICAgICAgICBjb25zdCBzYW1wbGVGb3JtYXQgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1NhbXBsZUZvcm1hdCcpO1xuICAgICAgICByZXR1cm4gc2FtcGxlRm9ybWF0ID8gc2FtcGxlRm9ybWF0W3NhbXBsZUluZGV4XSA6IDE7XG4gICAgfVxuICAgIGdldEJpdHNQZXJTYW1wbGUoc2FtcGxlSW5kZXggPSAwKSB7XG4gICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0JpdHNQZXJTYW1wbGUnKTtcbiAgICAgICAgcmV0dXJuIGJpdHNQZXJTYW1wbGUgPyBiaXRzUGVyU2FtcGxlW3NhbXBsZUluZGV4XSA6IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzYW1wbGVJbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfEFycmF5QnVmZmVyTGlrZX0gc2l6ZU9yRGF0YVxuICAgICAqIEByZXR1cm5zIHtUeXBlZEFycmF5fVxuICAgICAqL1xuICAgIGdldEFycmF5Rm9yU2FtcGxlKHNhbXBsZUluZGV4LCBzaXplT3JEYXRhKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IC8qKiBAdHlwZSB7MXwyfDN9ICovICh0aGlzLmdldFNhbXBsZUZvcm1hdChzYW1wbGVJbmRleCkpO1xuICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gdGhpcy5nZXRCaXRzUGVyU2FtcGxlKHNhbXBsZUluZGV4KTtcbiAgICAgICAgcmV0dXJuIGFycmF5Rm9yVHlwZShmb3JtYXQsIGJpdHNQZXJTYW1wbGUsIHNpemVPckRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWNvZGVkIHN0cmlwIG9yIHRpbGUuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggdGhlIHN0cmlwIG9yIHRpbGUgeC1vZmZzZXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSB0aGUgdGlsZSB5LW9mZnNldCAoMCBmb3Igc3RyaXBwZWQgaW1hZ2VzKVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzYW1wbGUgdGhlIHNhbXBsZSB0byBnZXQgZm9yIHNlcGFyYXRlZCBzYW1wbGVzXG4gICAgICogQHBhcmFtIHtEZWNvZGVyV29ya2VyfGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5CYXNlRGVjb2Rlcn0gcG9vbE9yRGVjb2RlciB0aGUgZGVjb2RlciBvciBkZWNvZGVyIHBvb2xcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHt4OiBudW1iZXIsIHk6IG51bWJlciwgc2FtcGxlOiBudW1iZXIsIGRhdGE6IEFycmF5QnVmZmVyTGlrZX0+fSB0aGUgZGVjb2RlZCBzdHJpcCBvciB0aWxlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VGlsZU9yU3RyaXAoeCwgeSwgc2FtcGxlLCBwb29sT3JEZWNvZGVyLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgbnVtVGlsZXNQZXJSb3cgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gdGhpcy5nZXRUaWxlV2lkdGgoKSk7XG4gICAgICAgIGNvbnN0IG51bVRpbGVzUGVyQ29sID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyB0aGlzLmdldFRpbGVIZWlnaHQoKSk7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgY29uc3QgeyB0aWxlcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgaW5kZXggPSAoeSAqIG51bVRpbGVzUGVyUm93KSArIHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID09PSAyKSB7XG4gICAgICAgICAgICBpbmRleCA9IChzYW1wbGUgKiBudW1UaWxlc1BlclJvdyAqIG51bVRpbGVzUGVyQ29sKSArICh5ICogbnVtVGlsZXNQZXJSb3cpICsgeDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZGV0ZXJtaW5lIHRpbGUgb3Igc3RyaXAgaW5kZXguJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9mZnNldDtcbiAgICAgICAgbGV0IGJ5dGVDb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaXNUaWxlZCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gTnVtYmVyKGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWVJbmRleGVkKCdUaWxlT2Zmc2V0cycsIGluZGV4KSk7XG4gICAgICAgICAgICBieXRlQ291bnQgPSBOdW1iZXIoYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZUluZGV4ZWQoJ1RpbGVCeXRlQ291bnRzJywgaW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCA9IE51bWJlcihhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlSW5kZXhlZCgnU3RyaXBPZmZzZXRzJywgaW5kZXgpKTtcbiAgICAgICAgICAgIGJ5dGVDb3VudCA9IE51bWJlcihhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlSW5kZXhlZCgnU3RyaXBCeXRlQ291bnRzJywgaW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnl0ZUNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBuUGl4ZWxzID0gdGhpcy5nZXRCbG9ja0hlaWdodCh5KSAqIHRoaXMuZ2V0VGlsZVdpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBieXRlc1BlclBpeGVsID0gKHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMikgPyB0aGlzLmdldFNhbXBsZUJ5dGVTaXplKHNhbXBsZSkgOiB0aGlzLmdldEJ5dGVzUGVyUGl4ZWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgQXJyYXlCdWZmZXIoblBpeGVscyAqIGJ5dGVzUGVyUGl4ZWwpO1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0QXJyYXlGb3JTYW1wbGUoc2FtcGxlLCBkYXRhKTtcbiAgICAgICAgICAgIHZpZXcuZmlsbCh0aGlzLmdldEdEQUxOb0RhdGEoKSB8fCAwKTtcbiAgICAgICAgICAgIHJldHVybiB7IHgsIHksIHNhbXBsZSwgZGF0YSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNsaWNlID0gKGF3YWl0IHRoaXMuc291cmNlLmZldGNoKFt7IG9mZnNldCwgbGVuZ3RoOiBieXRlQ291bnQgfV0sIHNpZ25hbCkpWzBdO1xuICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgaWYgKHRpbGVzID09PSBudWxsIHx8ICF0aWxlc1tpbmRleF0pIHtcbiAgICAgICAgICAgIC8vIHJlc29sdmUgZWFjaCByZXF1ZXN0IGJ5IHBvdGVudGlhbGx5IGFwcGx5aW5nIGFycmF5IG5vcm1hbGl6YXRpb25cbiAgICAgICAgICAgIHJlcXVlc3QgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcG9vbE9yRGVjb2Rlci5kZWNvZGUoc2xpY2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUZvcm1hdCA9IC8qKiBAdHlwZSB7MXwyfDN9ICovICh0aGlzLmdldFNhbXBsZUZvcm1hdCgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gdGhpcy5nZXRCaXRzUGVyU2FtcGxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRzTm9ybWFsaXphdGlvbihzYW1wbGVGb3JtYXQsIGJpdHNQZXJTYW1wbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBub3JtYWxpemVBcnJheShkYXRhLCBzYW1wbGVGb3JtYXQsIHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiwgdGhpcy5nZXRTYW1wbGVzUGVyUGl4ZWwoKSwgYml0c1BlclNhbXBsZSwgdGhpcy5nZXRUaWxlV2lkdGgoKSwgdGhpcy5nZXRCbG9ja0hlaWdodCh5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgY2FjaGVcbiAgICAgICAgICAgIGlmICh0aWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRpbGVzW2luZGV4XSA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBnZXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgIHJlcXVlc3QgPSB0aWxlc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2FjaGUgdGhlIHRpbGUgcmVxdWVzdFxuICAgICAgICByZXR1cm4geyB4LCB5LCBzYW1wbGUsIGRhdGE6IGF3YWl0IHJlcXVlc3QgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgcmVhZCBmdW5jdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW1hZ2VXaW5kb3cgVGhlIGltYWdlIHdpbmRvdyBpbiBwaXhlbCBjb29yZGluYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2FtcGxlcyBUaGUgc2VsZWN0ZWQgc2FtcGxlcyAoMC1iYXNlZCBpbmRpY2VzKVxuICAgICAqIEBwYXJhbSB7VHlwZWRBcnJheXxUeXBlZEFycmF5W119IHZhbHVlQXJyYXlzIFRoZSBhcnJheShzKSB0byB3cml0ZSBpbnRvXG4gICAgICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW50ZXJsZWF2ZSBXaGV0aGVyIG9yIG5vdCB0byB3cml0ZSBpbiBhbiBpbnRlcmxlYXZlZCBtYW5uZXJcbiAgICAgKiBAcGFyYW0ge0RlY29kZXJXb3JrZXJ8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLkJhc2VEZWNvZGVyfSBwb29sT3JEZWNvZGVyIHRoZSBkZWNvZGVyIG9yIGRlY29kZXIgcG9vbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHRoZSB3aWR0aCBvZiB3aW5kb3cgdG8gYmUgcmVhZCBpbnRvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRdIHRoZSBoZWlnaHQgb2Ygd2luZG93IHRvIGJlIHJlYWQgaW50b1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzYW1wbGVNZXRob2RdIHRoZSByZXNhbXBsaW5nIG1ldGhvZCB0byBiZSB1c2VkIHdoZW4gaW50ZXJwb2xhdGluZ1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWFkUmFzdGVyUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBhc3luYyBfcmVhZFJhc3RlcihpbWFnZVdpbmRvdywgc2FtcGxlcywgdmFsdWVBcnJheXMsIGludGVybGVhdmUsIHBvb2xPckRlY29kZXIsIHdpZHRoLCBoZWlnaHQsIHJlc2FtcGxlTWV0aG9kLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgdGlsZVdpZHRoID0gdGhpcy5nZXRUaWxlV2lkdGgoKTtcbiAgICAgICAgY29uc3QgdGlsZUhlaWdodCA9IHRoaXMuZ2V0VGlsZUhlaWdodCgpO1xuICAgICAgICBjb25zdCBpbWFnZVdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBpbWFnZUhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IG1pblhUaWxlID0gTWF0aC5tYXgoTWF0aC5mbG9vcihpbWFnZVdpbmRvd1swXSAvIHRpbGVXaWR0aCksIDApO1xuICAgICAgICBjb25zdCBtYXhYVGlsZSA9IE1hdGgubWluKE1hdGguY2VpbChpbWFnZVdpbmRvd1syXSAvIHRpbGVXaWR0aCksIE1hdGguY2VpbChpbWFnZVdpZHRoIC8gdGlsZVdpZHRoKSk7XG4gICAgICAgIGNvbnN0IG1pbllUaWxlID0gTWF0aC5tYXgoTWF0aC5mbG9vcihpbWFnZVdpbmRvd1sxXSAvIHRpbGVIZWlnaHQpLCAwKTtcbiAgICAgICAgY29uc3QgbWF4WVRpbGUgPSBNYXRoLm1pbihNYXRoLmNlaWwoaW1hZ2VXaW5kb3dbM10gLyB0aWxlSGVpZ2h0KSwgTWF0aC5jZWlsKGltYWdlSGVpZ2h0IC8gdGlsZUhlaWdodCkpO1xuICAgICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF07XG4gICAgICAgIGxldCBieXRlc1BlclBpeGVsID0gdGhpcy5nZXRCeXRlc1BlclBpeGVsKCk7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi9cbiAgICAgICAgY29uc3Qgc3JjU2FtcGxlT2Zmc2V0cyA9IFtdO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5PCh0aGlzOiBEYXRhVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCBsaXR0bGVFbmRpYW46IGJvb2xlYW4pID0+IG51bWJlcj59ICovXG4gICAgICAgIGNvbnN0IHNhbXBsZVJlYWRlcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0JpdHNQZXJTYW1wbGUnKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJpdHNQZXJTYW1wbGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgQml0c1BlclNhbXBsZSB0byBiZSBhbiBhcnJheSBvciB0eXBlZCBhcnJheS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3JjU2FtcGxlT2Zmc2V0cy5wdXNoKHN1bShiaXRzUGVyU2FtcGxlLCAwLCBzYW1wbGVzW2ldKSAvIDgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3JjU2FtcGxlT2Zmc2V0cy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FtcGxlUmVhZGVycy5wdXNoKHRoaXMuZ2V0UmVhZGVyRm9yU2FtcGxlKHNhbXBsZXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBjb25zdCB7IGxpdHRsZUVuZGlhbiB9ID0gdGhpcztcbiAgICAgICAgZm9yIChsZXQgeVRpbGUgPSBtaW5ZVGlsZTsgeVRpbGUgPCBtYXhZVGlsZTsgKyt5VGlsZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgeFRpbGUgPSBtaW5YVGlsZTsgeFRpbGUgPCBtYXhYVGlsZTsgKyt4VGlsZSkge1xuICAgICAgICAgICAgICAgIGxldCBnZXRQcm9taXNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvbWlzZSA9IHRoaXMuZ2V0VGlsZU9yU3RyaXAoeFRpbGUsIHlUaWxlLCAwLCBwb29sT3JEZWNvZGVyLCBzaWduYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzYW1wbGVJbmRleCA9IDA7IHNhbXBsZUluZGV4IDwgc2FtcGxlcy5sZW5ndGg7ICsrc2FtcGxlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2kgPSBzYW1wbGVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlID0gc2FtcGxlc1tzYW1wbGVJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzUGVyUGl4ZWwgPSB0aGlzLmdldFNhbXBsZUJ5dGVTaXplKHNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9taXNlID0gdGhpcy5nZXRUaWxlT3JTdHJpcCh4VGlsZSwgeVRpbGUsIHNhbXBsZSwgcG9vbE9yRGVjb2Rlciwgc2lnbmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCB0aWxlIG9yIHN0cmlwIGRhdGEuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFByb21pc2UudGhlbigodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gdGlsZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrSGVpZ2h0ID0gdGhpcy5nZXRCbG9ja0hlaWdodCh0aWxlLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5lID0gdGlsZS55ICogdGlsZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q29sID0gdGlsZS54ICogdGlsZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdExpbmUgPSBmaXJzdExpbmUgKyBibG9ja0hlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RDb2wgPSAodGlsZS54ICsgMSkgKiB0aWxlV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBzYW1wbGVSZWFkZXJzW3NpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHltYXggPSBNYXRoLm1pbihibG9ja0hlaWdodCwgYmxvY2tIZWlnaHQgLSAobGFzdExpbmUgLSBpbWFnZVdpbmRvd1szXSksIGltYWdlSGVpZ2h0IC0gZmlyc3RMaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhtYXggPSBNYXRoLm1pbih0aWxlV2lkdGgsIHRpbGVXaWR0aCAtIChsYXN0Q29sIC0gaW1hZ2VXaW5kb3dbMl0pLCBpbWFnZVdpZHRoIC0gZmlyc3RDb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IE1hdGgubWF4KDAsIGltYWdlV2luZG93WzFdIC0gZmlyc3RMaW5lKTsgeSA8IHltYXg7ICsreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBNYXRoLm1heCgwLCBpbWFnZVdpbmRvd1swXSAtIGZpcnN0Q29sKTsgeCA8IHhtYXg7ICsreCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbE9mZnNldCA9ICgoeSAqIHRpbGVXaWR0aCkgKyB4KSAqIGJ5dGVzUGVyUGl4ZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVhZGVyLmNhbGwoZGF0YVZpZXcsIHBpeGVsT2Zmc2V0ICsgc3JjU2FtcGxlT2Zmc2V0c1tzaV0sIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aW5kb3dDb29yZGluYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJsZWF2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q29vcmRpbmF0ZSA9ICgoeSArIGZpcnN0TGluZSAtIGltYWdlV2luZG93WzFdKSAqIHdpbmRvd1dpZHRoICogc2FtcGxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoKHggKyBmaXJzdENvbCAtIGltYWdlV2luZG93WzBdKSAqIHNhbXBsZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgc2k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUFycmF5c1t3aW5kb3dDb29yZGluYXRlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q29vcmRpbmF0ZSA9ICgoeSArIGZpcnN0TGluZSAtIGltYWdlV2luZG93WzFdKSAqIHdpbmRvd1dpZHRoKSArIHggKyBmaXJzdENvbCAtIGltYWdlV2luZG93WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtUeXBlZEFycmF5fSAqLyAodmFsdWVBcnJheXNbc2ldKVt3aW5kb3dDb29yZGluYXRlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICBpZiAoKHdpZHRoICYmIChpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdKSAhPT0gd2lkdGgpXG4gICAgICAgICAgICB8fCAoaGVpZ2h0ICYmIChpbWFnZVdpbmRvd1szXSAtIGltYWdlV2luZG93WzFdKSAhPT0gaGVpZ2h0KSkge1xuICAgICAgICAgICAgbGV0IHJlc2FtcGxlZDtcbiAgICAgICAgICAgIGlmIChpbnRlcmxlYXZlKSB7XG4gICAgICAgICAgICAgICAgcmVzYW1wbGVkID0gcmVzYW1wbGVJbnRlcmxlYXZlZChcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge1R5cGVkQXJyYXl9ICovICh2YWx1ZUFycmF5cyksIGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF0sIGltYWdlV2luZG93WzNdIC0gaW1hZ2VXaW5kb3dbMV0sIFxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAod2lkdGgpLCAvKiogQHR5cGUge251bWJlcn0gKi8gKGhlaWdodCksIHNhbXBsZXMubGVuZ3RoLCByZXNhbXBsZU1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNhbXBsZWQgPSByZXNhbXBsZShcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge1R5cGVkQXJyYXlbXX0gKi8gKHZhbHVlQXJyYXlzKSwgaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXSwgaW1hZ2VXaW5kb3dbM10gLSBpbWFnZVdpbmRvd1sxXSwgXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovICh3aWR0aCksIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaGVpZ2h0KSwgcmVzYW1wbGVNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzYW1wbGVkV2l0aERpbWVuc2lvbnMgPSAvKiogQHR5cGUge1JlYWRSYXN0ZXJSZXN1bHR9ICovIChyZXNhbXBsZWQpO1xuICAgICAgICAgICAgcmVzYW1wbGVkV2l0aERpbWVuc2lvbnMud2lkdGggPSB3aWR0aCA/PyBpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdO1xuICAgICAgICAgICAgcmVzYW1wbGVkV2l0aERpbWVuc2lvbnMuaGVpZ2h0ID0gaGVpZ2h0ID8/IGltYWdlV2luZG93WzNdIC0gaW1hZ2VXaW5kb3dbMV07XG4gICAgICAgICAgICByZXR1cm4gcmVzYW1wbGVkV2l0aERpbWVuc2lvbnM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVBcnJheXNXaXRoRGltZW5zaW9ucyA9IC8qKiBAdHlwZSB7UmVhZFJhc3RlclJlc3VsdH0gKi8gKHZhbHVlQXJyYXlzKTtcbiAgICAgICAgdmFsdWVBcnJheXNXaXRoRGltZW5zaW9ucy53aWR0aCA9IHdpZHRoIHx8IGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF07XG4gICAgICAgIHZhbHVlQXJyYXlzV2l0aERpbWVuc2lvbnMuaGVpZ2h0ID0gaGVpZ2h0IHx8IGltYWdlV2luZG93WzNdIC0gaW1hZ2VXaW5kb3dbMV07XG4gICAgICAgIHJldHVybiB2YWx1ZUFycmF5c1dpdGhEaW1lbnNpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSYXN0ZXJzT3B0aW9ucyAmIHtpbnRlcmxlYXZlOiB0cnVlfX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlXaXRoRGltZW5zaW9ucz59IHRoZSBkZWNvZGVkIGFycmF5cyBhcyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSYXN0ZXJzT3B0aW9ucyAmIHtpbnRlcmxlYXZlOiBmYWxzZX19IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5QXJyYXlXaXRoRGltZW5zaW9ucz59IHRoZSBkZWNvZGVkIGFycmF5cyBhcyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSYXN0ZXJzT3B0aW9ucyAmIHtpbnRlcmxlYXZlOiBib29sZWFufX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVhZFJhc3RlclJlc3VsdD59IHRoZSBkZWNvZGVkIGFycmF5cyBhcyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAb3ZlcmxvYWRcbiAgICAgKiBAcGFyYW0ge1JlYWRSYXN0ZXJzT3B0aW9uc30gW29wdGlvbnM9e31dIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheUFycmF5V2l0aERpbWVuc2lvbnM+fSB0aGUgZGVjb2RlZCBhcnJheXMgYXMgYSBwcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmVhZHMgcmFzdGVyIGRhdGEgZnJvbSB0aGUgaW1hZ2UuIFRoaXMgZnVuY3Rpb24gcmVhZHMgYWxsIHNlbGVjdGVkIHNhbXBsZXNcbiAgICAgKiBpbnRvIHNlcGFyYXRlIGFycmF5cyBvZiB0aGUgY29ycmVjdCB0eXBlIGZvciB0aGF0IHNhbXBsZSBvciBpbnRvIGEgc2luZ2xlXG4gICAgICogY29tYmluZWQgYXJyYXkgd2hlbiBgaW50ZXJsZWF2ZWAgaXMgc2V0LiBXaGVuIHByb3ZpZGVkLCBvbmx5IGEgc3Vic2V0XG4gICAgICogb2YgdGhlIHJhc3RlciBpcyByZWFkIGZvciBlYWNoIHNhbXBsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVhZFJhc3RlcnNPcHRpb25zfSBbb3B0aW9ucz17fV0gb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlYWRSYXN0ZXJSZXN1bHQ+fSB0aGUgZGVjb2RlZCBhcnJheXMgYXMgYSBwcm9taXNlXG4gICAgICovXG4gICAgYXN5bmMgcmVhZFJhc3RlcnMob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgd2luZG93OiB3bmQsIHNhbXBsZXMgPSBbXSwgcG9vbCA9IG51bGwsIHdpZHRoLCBoZWlnaHQsIHJlc2FtcGxlTWV0aG9kLCBmaWxsVmFsdWUsIHNpZ25hbCwgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGludGVybGVhdmUgPSAnaW50ZXJsZWF2ZScgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmludGVybGVhdmU7XG4gICAgICAgIGNvbnN0IGltYWdlV2luZG93ID0gd25kIHx8IFswLCAwLCB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCldO1xuICAgICAgICAvLyBjaGVjayBwYXJhbWV0ZXJzXG4gICAgICAgIGlmIChpbWFnZVdpbmRvd1swXSA+IGltYWdlV2luZG93WzJdIHx8IGltYWdlV2luZG93WzFdID4gaW1hZ2VXaW5kb3dbM10pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdWJzZXRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW1hZ2VXaW5kb3dXaWR0aCA9IGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF07XG4gICAgICAgIGNvbnN0IGltYWdlV2luZG93SGVpZ2h0ID0gaW1hZ2VXaW5kb3dbM10gLSBpbWFnZVdpbmRvd1sxXTtcbiAgICAgICAgY29uc3QgbnVtUGl4ZWxzID0gaW1hZ2VXaW5kb3dXaWR0aCAqIGltYWdlV2luZG93SGVpZ2h0O1xuICAgICAgICBjb25zdCBzYW1wbGVzUGVyUGl4ZWwgPSB0aGlzLmdldFNhbXBsZXNQZXJQaXhlbCgpO1xuICAgICAgICBpZiAoIXNhbXBsZXMgfHwgIXNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXNQZXJQaXhlbDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNhbXBsZXNbaV0gPj0gc2FtcGxlc1BlclBpeGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCBzYW1wbGUgaW5kZXggJyR7c2FtcGxlc1tpXX0nLmApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEB0eXBlIHtUeXBlZEFycmF5fFR5cGVkQXJyYXlbXX0gKi9cbiAgICAgICAgbGV0IHZhbHVlQXJyYXlzO1xuICAgICAgICBpZiAoaW50ZXJsZWF2ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBmaWxlRGlyZWN0b3J5IH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3Qgc2FtcGxlRm9ybWF0ID0gZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnU2FtcGxlRm9ybWF0Jyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBzYW1wbGVGb3JtYXRcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4LmFwcGx5KG51bGwsIEFycmF5LmZyb20oc2FtcGxlRm9ybWF0KSkgOiAxO1xuICAgICAgICAgICAgaWYgKGZvcm1hdCAhPT0gMSAmJiBmb3JtYXQgIT09IDIgJiYgZm9ybWF0ICE9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBzYW1wbGUgZm9ybWF0IGZvciBpbnRlcmxlYXZlZCBkYXRhLiBNdXN0IGJlIDEsIDIsIG9yIDMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlXyA9IGZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0JpdHNQZXJTYW1wbGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSBiaXRzUGVyU2FtcGxlX1xuICAgICAgICAgICAgICAgID8gTWF0aC5tYXguYXBwbHkobnVsbCwgQXJyYXkuZnJvbShiaXRzUGVyU2FtcGxlXykpIDogODtcbiAgICAgICAgICAgIHZhbHVlQXJyYXlzID0gYXJyYXlGb3JUeXBlKGZvcm1hdCwgYml0c1BlclNhbXBsZSwgbnVtUGl4ZWxzICogc2FtcGxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGZpbGxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXaGVuIHJlYWRpbmcgaW50ZXJsZWF2ZWQgZGF0YSwgZmlsbFZhbHVlIG11c3QgYmUgYSBzaW5nbGUgbnVtYmVyLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZUFycmF5cy5maWxsKGZpbGxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZUFycmF5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVBcnJheSA9IHRoaXMuZ2V0QXJyYXlGb3JTYW1wbGUoc2FtcGxlc1tpXSwgbnVtUGl4ZWxzKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsVmFsdWUpICYmIGkgPCBmaWxsVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQXJyYXkuZmlsbChmaWxsVmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWxsVmFsdWUgJiYgIUFycmF5LmlzQXJyYXkoZmlsbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUFycmF5LmZpbGwoZmlsbFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVBcnJheXMucHVzaCh2YWx1ZUFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wcmVzc2lvbiA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQ29tcHJlc3Npb24nKSB8fCAxO1xuICAgICAgICBjb25zdCBkZWNvZGVyUGFyYW1ldGVycyA9IGF3YWl0IGdldERlY29kZXJQYXJhbWV0ZXJzKGNvbXByZXNzaW9uLCB0aGlzLmZpbGVEaXJlY3RvcnkpO1xuICAgICAgICBjb25zdCBwb29sT3JEZWNvZGVyID0gcG9vbFxuICAgICAgICAgICAgPyBwb29sLmJpbmRQYXJhbWV0ZXJzKGNvbXByZXNzaW9uLCBkZWNvZGVyUGFyYW1ldGVycylcbiAgICAgICAgICAgIDogYXdhaXQgZ2V0RGVjb2Rlcihjb21wcmVzc2lvbiwgZGVjb2RlclBhcmFtZXRlcnMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9yZWFkUmFzdGVyKGltYWdlV2luZG93LCBzYW1wbGVzLCB2YWx1ZUFycmF5cywgaW50ZXJsZWF2ZSwgcG9vbE9yRGVjb2Rlciwgd2lkdGgsIGhlaWdodCwgcmVzYW1wbGVNZXRob2QsIHNpZ25hbCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJHQk9wdGlvbnMgJiB7aW50ZXJsZWF2ZTogdHJ1ZX19IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5V2l0aERpbWVuc2lvbnM+fSB0aGUgUkdCIGFycmF5IGFzIGEgUHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJHQk9wdGlvbnMgJiB7aW50ZXJsZWF2ZTogZmFsc2V9fSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheUFycmF5V2l0aERpbWVuc2lvbnM+fSB0aGUgUkdCIGFycmF5IGFzIGEgUHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJHQk9wdGlvbnMgJiB7aW50ZXJsZWF2ZTogYm9vbGVhbn19IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlYWRSYXN0ZXJSZXN1bHQ+fSB0aGUgUkdCIGFycmF5IGFzIGEgUHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJHQk9wdGlvbnN9IFtvcHRpb25zPXt9XSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlBcnJheVdpdGhEaW1lbnNpb25zPn0gdGhlIFJHQiBhcnJheSBhcyBhIFByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZWFkcyByYXN0ZXIgZGF0YSBmcm9tIHRoZSBpbWFnZSBhcyBSR0IuXG4gICAgICogQ29sb3JzcGFjZXMgb3RoZXIgdGhhbiBSR0Igd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byBSR0IsIGNvbG9yIG1hcHMgZXhwYW5kZWQuXG4gICAgICogV2hlbiBubyBvdGhlciBtZXRob2QgaXMgYXBwbGljYWJsZSwgdGhlIGZpcnN0IHNhbXBsZSBpcyB1c2VkIHRvIHByb2R1Y2UgYVxuICAgICAqIGdyYXlzY2FsZSBpbWFnZS5cbiAgICAgKiBXaGVuIHByb3ZpZGVkLCBvbmx5IGEgc3Vic2V0IG9mIHRoZSByYXN0ZXIgaXMgcmVhZCBmb3IgZWFjaCBzYW1wbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWRSR0JPcHRpb25zfSBbb3B0aW9uc10gb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlYWRSYXN0ZXJSZXN1bHQ+fSB0aGUgUkdCIGFycmF5IGFzIGEgUHJvbWlzZVxuICAgICAqL1xuICAgIGFzeW5jIHJlYWRSR0Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgd2luZG93LCBwb29sID0gbnVsbCwgd2lkdGgsIGhlaWdodCwgcmVzYW1wbGVNZXRob2QsIGVuYWJsZUFscGhhID0gZmFsc2UsIHNpZ25hbCB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3QgaW50ZXJsZWF2ZSA9ICgnaW50ZXJsZWF2ZScgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmludGVybGVhdmUpID8/IGZhbHNlO1xuICAgICAgICBjb25zdCBpbWFnZVdpbmRvdyA9IHdpbmRvdyB8fCBbMCwgMCwgdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpXTtcbiAgICAgICAgLy8gY2hlY2sgcGFyYW1ldGVyc1xuICAgICAgICBpZiAoaW1hZ2VXaW5kb3dbMF0gPiBpbWFnZVdpbmRvd1syXSB8fCBpbWFnZVdpbmRvd1sxXSA+IGltYWdlV2luZG93WzNdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3Vic2V0cycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBpID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdQaG90b21ldHJpY0ludGVycHJldGF0aW9uJyk7XG4gICAgICAgIGlmIChwaSA9PT0gcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuUkdCKSB7XG4gICAgICAgICAgICBsZXQgcyA9IFswLCAxLCAyXTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhU2FtcGxlcyA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnRXh0cmFTYW1wbGVzJyk7XG4gICAgICAgICAgICBpZiAoZXh0cmFTYW1wbGVzICYmIGV4dHJhU2FtcGxlc1swXSAhPT0gRXh0cmFTYW1wbGVzVmFsdWVzLlVuc3BlY2lmaWVkICYmIGVuYWJsZUFscGhhKSB7XG4gICAgICAgICAgICAgICAgcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0JpdHNQZXJTYW1wbGUnKSB8fCBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpdHNQZXJTYW1wbGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRSYXN0ZXJzKHtcbiAgICAgICAgICAgICAgICB3aW5kb3csXG4gICAgICAgICAgICAgICAgaW50ZXJsZWF2ZSxcbiAgICAgICAgICAgICAgICBzYW1wbGVzOiBzLFxuICAgICAgICAgICAgICAgIHBvb2wsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlc2FtcGxlTWV0aG9kLFxuICAgICAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzYW1wbGVzO1xuICAgICAgICBzd2l0Y2ggKHBpKSB7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLldoaXRlSXNaZXJvOlxuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5CbGFja0lzWmVybzpcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuUGFsZXR0ZTpcbiAgICAgICAgICAgICAgICBzYW1wbGVzID0gWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5DTVlLOlxuICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBbMCwgMSwgMiwgM107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLllDYkNyOlxuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5DSUVMYWI6XG4gICAgICAgICAgICAgICAgc2FtcGxlcyA9IFswLCAxLCAyXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHBob3RvbWV0cmljIGludGVycHJldGF0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Yk9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aW5kb3c6IGltYWdlV2luZG93LFxuICAgICAgICAgICAgLyoqIEB0eXBlIHt0cnVlfSAqL1xuICAgICAgICAgICAgaW50ZXJsZWF2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNhbXBsZXMsXG4gICAgICAgICAgICBwb29sLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICByZXNhbXBsZU1ldGhvZCxcbiAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBmaWxlRGlyZWN0b3J5IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCByYXN0ZXIgPSBhd2FpdCB0aGlzLnJlYWRSYXN0ZXJzKHN1Yk9wdGlvbnMpO1xuICAgICAgICBjb25zdCBtYXggPSAyICoqIHRoaXMuZ2V0Qml0c1BlclNhbXBsZSgwKTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIHN3aXRjaCAocGkpIHtcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuV2hpdGVJc1plcm86XG4gICAgICAgICAgICAgICAgZGF0YSA9IGZyb21XaGl0ZUlzWmVybyhyYXN0ZXIsIG1heCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLkJsYWNrSXNaZXJvOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBmcm9tQmxhY2tJc1plcm8ocmFzdGVyLCBtYXgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5QYWxldHRlOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBmcm9tUGFsZXR0ZShyYXN0ZXIsIC8qKiBAdHlwZSB7VWludDE2QXJyYXl9ICovIChhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnQ29sb3JNYXAnKSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5DTVlLOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBmcm9tQ01ZSyhyYXN0ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5ZQ2JDcjpcbiAgICAgICAgICAgICAgICBkYXRhID0gZnJvbVlDYkNyKHJhc3Rlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLkNJRUxhYjpcbiAgICAgICAgICAgICAgICBkYXRhID0gZnJvbUNJRUxhYihyYXN0ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHBob3RvbWV0cmljIGludGVycHJldGF0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIG5vbi1pbnRlcmxlYXZlZCBkYXRhIGlzIHJlcXVlc3RlZCwgd2UgbXVzdCBzcGxpdCB0aGUgY2hhbm5lbHNcbiAgICAgICAgLy8gaW50byB0aGVpciByZXNwZWN0aXZlIGFycmF5c1xuICAgICAgICBpZiAoIWludGVybGVhdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoIC8gMyk7XG4gICAgICAgICAgICBjb25zdCBncmVlbiA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoIC8gMyk7XG4gICAgICAgICAgICBjb25zdCBibHVlID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGggLyAzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDMsICsraikge1xuICAgICAgICAgICAgICAgIHJlZFtqXSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgZ3JlZW5bal0gPSBkYXRhW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBibHVlW2pdID0gZGF0YVtpICsgMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhID0gW3JlZCwgZ3JlZW4sIGJsdWVdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGFXaXRoRGltZW5zaW9ucyA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlJlYWRSYXN0ZXJSZXN1bHR9ICovIChkYXRhKTtcbiAgICAgICAgZGF0YVdpdGhEaW1lbnNpb25zLndpZHRoID0gcmFzdGVyLndpZHRoO1xuICAgICAgICBkYXRhV2l0aERpbWVuc2lvbnMuaGVpZ2h0ID0gcmFzdGVyLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIGRhdGFXaXRoRGltZW5zaW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWVwb2ludHMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8e2k6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXJ9Pj59IHRoZSB0aWVwb2ludHNcbiAgICAgKi9cbiAgICBhc3luYyBnZXRUaWVQb2ludHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5maWxlRGlyZWN0b3J5Lmhhc1RhZygnTW9kZWxUaWVwb2ludCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxUaWVQb2ludCA9IGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ01vZGVsVGllcG9pbnQnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RlbFRpZVBvaW50ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBNb2RlbFRpZXBvaW50IHRvIGJlIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpZVBvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsVGllUG9pbnQubGVuZ3RoOyBpICs9IDYpIHtcbiAgICAgICAgICAgIHRpZVBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpOiBtb2RlbFRpZVBvaW50W2ldLFxuICAgICAgICAgICAgICAgIGo6IG1vZGVsVGllUG9pbnRbaSArIDFdLFxuICAgICAgICAgICAgICAgIGs6IG1vZGVsVGllUG9pbnRbaSArIDJdLFxuICAgICAgICAgICAgICAgIHg6IG1vZGVsVGllUG9pbnRbaSArIDNdLFxuICAgICAgICAgICAgICAgIHk6IG1vZGVsVGllUG9pbnRbaSArIDRdLFxuICAgICAgICAgICAgICAgIHo6IG1vZGVsVGllUG9pbnRbaSArIDVdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpZVBvaW50cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGFyc2VkIEdEQUwgbWV0YWRhdGEgaXRlbXMuXG4gICAgICpcbiAgICAgKiBJZiBzYW1wbGUgaXMgcGFzc2VkIHRvIG51bGwsIGRhdGFzZXQtbGV2ZWwgbWV0YWRhdGEgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKiBPdGhlcndpc2Ugb25seSBtZXRhZGF0YSBzcGVjaWZpYyB0byB0aGUgcHJvdmlkZWQgc2FtcGxlIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfSBbc2FtcGxlPW51bGxdIFRoZSBzYW1wbGUgaW5kZXguXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj58bnVsbD59IFRoZSBHREFMIG1ldGFkYXRhIGl0ZW1zXG4gICAgICovXG4gICAgYXN5bmMgZ2V0R0RBTE1ldGFkYXRhKHNhbXBsZSA9IG51bGwpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi9cbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB7fTtcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVEaXJlY3RvcnkuaGFzVGFnKCdHREFMX01FVEFEQVRBJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0dEQUxfTUVUQURBVEEnKTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTx7aW5uZXI6IHVua25vd259Pn0gKi9cbiAgICAgICAgbGV0IGl0ZW1zID0gZmluZFRhZ3NCeU5hbWUoc3RyaW5nLCAnSXRlbScpO1xuICAgICAgICBpZiAoc2FtcGxlID09PSBudWxsKSB7XG4gICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gZ2V0QXR0cmlidXRlKGl0ZW0sICdzYW1wbGUnKSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBOdW1iZXIoZ2V0QXR0cmlidXRlKGl0ZW0sICdzYW1wbGUnKSkgPT09IHNhbXBsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgbWV0YWRhdGFbZ2V0QXR0cmlidXRlKGl0ZW0sICduYW1lJyldID0gaXRlbS5pbm5lcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIEdEQUwgbm9kYXRhIHZhbHVlXG4gICAgICogQHJldHVybnMge251bWJlcnxudWxsfVxuICAgICAqL1xuICAgIGdldEdEQUxOb0RhdGEoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZmlsZURpcmVjdG9yeS5oYXNUYWcoJ0dEQUxfTk9EQVRBJykgJiYgdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdHREFMX05PREFUQScpO1xuICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlcihzdHJpbmcuc3Vic3RyaW5nKDAsIHN0cmluZy5sZW5ndGggLSAxKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGltYWdlIG9yaWdpbiBhcyBhIFhZWi12ZWN0b3IuIFdoZW4gdGhlIGltYWdlIGhhcyBubyBhZmZpbmVcbiAgICAgKiB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxudW1iZXI+fSBUaGUgb3JpZ2luIGFzIGEgdmVjdG9yXG4gICAgICovXG4gICAgZ2V0T3JpZ2luKCkge1xuICAgICAgICBjb25zdCB0aWVQb2ludHMgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ01vZGVsVGllcG9pbnQnKTtcbiAgICAgICAgY29uc3QgbW9kZWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTW9kZWxUcmFuc2Zvcm1hdGlvbicpO1xuICAgICAgICBpZiAodGllUG9pbnRzICYmIHRpZVBvaW50cy5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgdGllUG9pbnRzWzNdLFxuICAgICAgICAgICAgICAgIHRpZVBvaW50c1s0XSxcbiAgICAgICAgICAgICAgICB0aWVQb2ludHNbNV0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlbFRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG1vZGVsVHJhbnNmb3JtYXRpb25bM10sXG4gICAgICAgICAgICAgICAgbW9kZWxUcmFuc2Zvcm1hdGlvbls3XSxcbiAgICAgICAgICAgICAgICBtb2RlbFRyYW5zZm9ybWF0aW9uWzExXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBhbiBhZmZpbmUgdHJhbnNmb3JtYXRpb24uJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGltYWdlIHJlc29sdXRpb24gYXMgYSBYWVotdmVjdG9yLiBXaGVuIHRoZSBpbWFnZSBoYXMgbm8gYWZmaW5lXG4gICAgICogdHJhbnNmb3JtYXRpb24sIHRoZW4gYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbiAgICAgKiBAcGFyYW0ge0dlb1RJRkZJbWFnZXxudWxsfSBbcmVmZXJlbmNlSW1hZ2U9bnVsbF0gQSByZWZlcmVuY2UgaW1hZ2UgdG8gY2FsY3VsYXRlIHRoZSByZXNvbHV0aW9uIGZyb21cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIGNhc2VzIHdoZW4gdGhlIGN1cnJlbnQgaW1hZ2UgZG9lcyBub3QgaGF2ZSB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHRhZ3Mgb24gaXRzIG93bi5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gVGhlIHJlc29sdXRpb24gYXMgYSB2ZWN0b3JcbiAgICAgKi9cbiAgICBnZXRSZXNvbHV0aW9uKHJlZmVyZW5jZUltYWdlID0gbnVsbCkge1xuICAgICAgICBjb25zdCBtb2RlbFBpeGVsU2NhbGUgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ01vZGVsUGl4ZWxTY2FsZScpO1xuICAgICAgICBjb25zdCBtb2RlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdNb2RlbFRyYW5zZm9ybWF0aW9uJyk7XG4gICAgICAgIGlmIChtb2RlbFBpeGVsU2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbW9kZWxQaXhlbFNjYWxlWzBdLFxuICAgICAgICAgICAgICAgIC1tb2RlbFBpeGVsU2NhbGVbMV0sXG4gICAgICAgICAgICAgICAgbW9kZWxQaXhlbFNjYWxlWzJdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZWxUcmFuc2Zvcm1hdGlvbikge1xuICAgICAgICAgICAgaWYgKG1vZGVsVHJhbnNmb3JtYXRpb25bMV0gPT09IDAgJiYgbW9kZWxUcmFuc2Zvcm1hdGlvbls0XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVHJhbnNmb3JtYXRpb25bMF0sXG4gICAgICAgICAgICAgICAgICAgIC1tb2RlbFRyYW5zZm9ybWF0aW9uWzVdLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbFRyYW5zZm9ybWF0aW9uWzEwXSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQoKG1vZGVsVHJhbnNmb3JtYXRpb25bMF0gKiBtb2RlbFRyYW5zZm9ybWF0aW9uWzBdKVxuICAgICAgICAgICAgICAgICAgICArIChtb2RlbFRyYW5zZm9ybWF0aW9uWzRdICogbW9kZWxUcmFuc2Zvcm1hdGlvbls0XSkpLFxuICAgICAgICAgICAgICAgIC1NYXRoLnNxcnQoKG1vZGVsVHJhbnNmb3JtYXRpb25bMV0gKiBtb2RlbFRyYW5zZm9ybWF0aW9uWzFdKVxuICAgICAgICAgICAgICAgICAgICArIChtb2RlbFRyYW5zZm9ybWF0aW9uWzVdICogbW9kZWxUcmFuc2Zvcm1hdGlvbls1XSkpLFxuICAgICAgICAgICAgICAgIG1vZGVsVHJhbnNmb3JtYXRpb25bMTBdXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWZlcmVuY2VJbWFnZSkge1xuICAgICAgICAgICAgY29uc3QgW3JlZlJlc1gsIHJlZlJlc1ksIHJlZlJlc1pdID0gcmVmZXJlbmNlSW1hZ2UuZ2V0UmVzb2x1dGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICByZWZSZXNYICogcmVmZXJlbmNlSW1hZ2UuZ2V0V2lkdGgoKSAvIHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICByZWZSZXNZICogcmVmZXJlbmNlSW1hZ2UuZ2V0SGVpZ2h0KCkgLyB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgICAgIHJlZlJlc1ogKiByZWZlcmVuY2VJbWFnZS5nZXRXaWR0aCgpIC8gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbWFnZSBkb2VzIG5vdCBoYXZlIGFuIGFmZmluZSB0cmFuc2Zvcm1hdGlvbi4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcGl4ZWxzIG9mIHRoZSBpbWFnZSBkZXBpY3QgYW4gYXJlYSAob3IgcG9pbnQpLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoZSBwaXhlbHMgYXJlIGEgcG9pbnRcbiAgICAgKi9cbiAgICBwaXhlbElzQXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0R2VvS2V5cygpPy5HVFJhc3RlclR5cGVHZW9LZXkgPT09IDE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGltYWdlIGJvdW5kaW5nIGJveCBhcyBhbiBhcnJheSBvZiA0IHZhbHVlczogbWluLXgsIG1pbi15LFxuICAgICAqIG1heC14IGFuZCBtYXgteS4gV2hlbiB0aGUgaW1hZ2UgaGFzIG5vIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBhblxuICAgICAqIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdGlsZWdyaWQ9ZmFsc2VdIElmIHRydWUgcmV0dXJuIGV4dGVudCBmb3IgYSB0aWxlZ3JpZFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IGFkanVzdG1lbnQgZm9yIE1vZGVsVHJhbnNmb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge0FycmF5PG51bWJlcj59IFRoZSBib3VuZGluZyBib3hcbiAgICAgKi9cbiAgICBnZXRCb3VuZGluZ0JveCh0aWxlZ3JpZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBtb2RlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdNb2RlbFRyYW5zZm9ybWF0aW9uJyk7XG4gICAgICAgIGlmIChtb2RlbFRyYW5zZm9ybWF0aW9uICYmICF0aWxlZ3JpZCkge1xuICAgICAgICAgICAgY29uc3QgW2EsIGIsICwgZCwgZSwgZiwgLCBoXSA9IG1vZGVsVHJhbnNmb3JtYXRpb247XG4gICAgICAgICAgICBjb25zdCBjb3JuZXJzID0gW1xuICAgICAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgaGVpZ2h0XSxcbiAgICAgICAgICAgICAgICBbd2lkdGgsIDBdLFxuICAgICAgICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWQgPSBjb3JuZXJzLm1hcCgoW0ksIEpdKSA9PiBbXG4gICAgICAgICAgICAgICAgZCArIChhICogSSkgKyAoYiAqIEopLFxuICAgICAgICAgICAgICAgIGggKyAoZSAqIEkpICsgKGYgKiBKKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgY29uc3QgeHMgPSBwcm9qZWN0ZWQubWFwKChwdCkgPT4gcHRbMF0pO1xuICAgICAgICAgICAgY29uc3QgeXMgPSBwcm9qZWN0ZWQubWFwKChwdCkgPT4gcHRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBNYXRoLm1pbiguLi54cyksXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oLi4ueXMpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KC4uLnhzKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heCguLi55cyksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gdGhpcy5nZXRPcmlnaW4oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdXRpb24gPSB0aGlzLmdldFJlc29sdXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHgxID0gb3JpZ2luWzBdO1xuICAgICAgICAgICAgY29uc3QgeTEgPSBvcmlnaW5bMV07XG4gICAgICAgICAgICBjb25zdCB4MiA9IHgxICsgKHJlc29sdXRpb25bMF0gKiB3aWR0aCk7XG4gICAgICAgICAgICBjb25zdCB5MiA9IHkxICsgKHJlc29sdXRpb25bMV0gKiBoZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBNYXRoLm1pbih4MSwgeDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWluKHkxLCB5MiksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoeDEsIHgyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heCh5MSwgeTIpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdlb1RJRkZJbWFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlb3RpZmZpbWFnZS5qcy5tYXAiLCIvKlxuICBTb21lIHBhcnRzIG9mIHRoaXMgZmlsZSBhcmUgYmFzZWQgb24gVVRJRi5qcyxcbiAgd2hpY2ggd2FzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAgWW91IGNhbiB2aWV3IHRoYXQgaGVyZTpcbiAgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvcGVhL1VUSUYuanMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbmltcG9ydCB7IHRhZ3MsIGZpZWxkVGFnVHlwZXMsIGZpZWxkVHlwZXMsIGdlb0tleU5hbWVzIH0gZnJvbSAnLi9nbG9iYWxzLmpzJztcbmltcG9ydCB7IGFzc2lnbiwgZW5kc1dpdGgsIGZvckVhY2gsIGludmVydCwgdGltZXMsIHR5cGVNYXAsIGlzVHlwZWRVaW50QXJyYXksIGlzVHlwZWRJbnRBcnJheSwgaXNUeXBlZEZsb2F0QXJyYXkgfSBmcm9tICcuL3V0aWxzLmpzJztcbi8qKiBAaW1wb3J0IHtHZW90aWZmV3JpdGVyTWV0YWRhdGF9IGZyb20gJy4vZ2VvdGlmZi5qcycgKi9cbi8qKiBAdHlwZWRlZiB7KGJ1ZmY6IFVpbnQ4QXJyYXksIHA6IG51bWJlcikgPT4gbnVtYmVyfSBSZWFkICovXG5jb25zdCB0YWdOYW1lMkNvZGUgPSB0YWdzO1xuY29uc3QgZ2VvS2V5TmFtZTJDb2RlID0gaW52ZXJ0KGdlb0tleU5hbWVzKTtcbi8qKiBAdHlwZSB7UmVjb3JkPG51bWJlcnxzdHJpbmcsIGtleW9mIGZpZWxkVGFnVHlwZXM+fSAqL1xuY29uc3QgbmFtZTJjb2RlID0ge307XG5hc3NpZ24obmFtZTJjb2RlLCB0YWdOYW1lMkNvZGUpO1xuYXNzaWduKG5hbWUyY29kZSwgZ2VvS2V5TmFtZTJDb2RlKTtcbmNvbnN0IHR5cGVOYW1lMmJ5dGUgPSBmaWVsZFR5cGVzO1xuLy8gY29uZmlnIHZhcmlhYmxlc1xuY29uc3QgbnVtQnl0ZXNJbklmZCA9IDEwMDA7XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJpbkJFXG4gKiBAcHJvcGVydHkgeyhkYXRhOiBVaW50OEFycmF5LCBvOiBudW1iZXIpID0+IG51bWJlcn0gbmV4dFplcm9cbiAqIEBwcm9wZXJ0eSB7UmVhZH0gcmVhZFVzaG9ydFxuICogQHByb3BlcnR5IHtSZWFkfSByZWFkU2hvcnRcbiAqIEBwcm9wZXJ0eSB7UmVhZH0gcmVhZEludFxuICogQHByb3BlcnR5IHtSZWFkfSByZWFkVWludFxuICogQHByb3BlcnR5IHsoYnVmZjogVWludDhBcnJheSwgcDogbnVtYmVyLCBsOiBBcnJheTxudW1iZXI+KSA9PiBzdHJpbmd9IHJlYWRBU0NJSVxuICogQHByb3BlcnR5IHtSZWFkfSByZWFkRmxvYXRcbiAqIEBwcm9wZXJ0eSB7UmVhZH0gcmVhZERvdWJsZVxuICogQHByb3BlcnR5IHsoYnVmZjogVWludDhBcnJheSwgcDogbnVtYmVyLCBuOiBudW1iZXIpID0+IHZvaWR9IHdyaXRlVXNob3J0XG4gKiBAcHJvcGVydHkgeyhidWZmOiBVaW50OEFycmF5LCBwOiBudW1iZXIsIG46IG51bWJlcikgPT4gdm9pZH0gd3JpdGVVaW50XG4gKiBAcHJvcGVydHkgeyhidWZmOiBVaW50OEFycmF5LCBwOiBudW1iZXIsIHM6IHN0cmluZykgPT4gdm9pZH0gd3JpdGVBU0NJSVxuICogQHByb3BlcnR5IHtVaW50OEFycmF5fSB1aThcbiAqIEBwcm9wZXJ0eSB7RmxvYXQ2NEFycmF5fSBmbDY0XG4gKiBAcHJvcGVydHkge0Zsb2F0MzJBcnJheX0gZmwzMlxuICogQHByb3BlcnR5IHtVaW50MzJBcnJheX0gdWkzMlxuICogQHByb3BlcnR5IHtJbnQzMkFycmF5fSBpMzJcbiAqIEBwcm9wZXJ0eSB7SW50MTZBcnJheX0gaTE2XG4gKiBAcHJvcGVydHkgeyhidWZmOiBVaW50OEFycmF5LCBwOiBudW1iZXIsIG46IG51bWJlcikgPT4gdm9pZH0gd3JpdGVEb3VibGVcbiAqL1xuY29uc3QgdWk4ID0gbmV3IFVpbnQ4QXJyYXkoOCk7XG4vKiogQHR5cGUge0JpbkJFfSAqL1xuY29uc3QgX2JpbkJFID0ge1xuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICBuZXh0WmVybzogKGRhdGEsIG8pID0+IHtcbiAgICAgICAgbGV0IG9pbmNyID0gbztcbiAgICAgICAgd2hpbGUgKGRhdGFbb2luY3JdICE9PSAwKSB7XG4gICAgICAgICAgICBvaW5jcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvaW5jcjtcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICByZWFkVXNob3J0OiAoYnVmZiwgcCkgPT4ge1xuICAgICAgICByZXR1cm4gKGJ1ZmZbcF0gPDwgOCkgfCBidWZmW3AgKyAxXTtcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICByZWFkU2hvcnQ6IChidWZmLCBwKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBfYmluQkUudWk4O1xuICAgICAgICBhWzBdID0gYnVmZltwICsgMV07XG4gICAgICAgIGFbMV0gPSBidWZmW3AgKyAwXTtcbiAgICAgICAgcmV0dXJuIF9iaW5CRS5pMTZbMF07XG4gICAgfSxcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgcmVhZEludDogKGJ1ZmYsIHApID0+IHtcbiAgICAgICAgY29uc3QgYSA9IF9iaW5CRS51aTg7XG4gICAgICAgIGFbMF0gPSBidWZmW3AgKyAzXTtcbiAgICAgICAgYVsxXSA9IGJ1ZmZbcCArIDJdO1xuICAgICAgICBhWzJdID0gYnVmZltwICsgMV07XG4gICAgICAgIGFbM10gPSBidWZmW3AgKyAwXTtcbiAgICAgICAgcmV0dXJuIF9iaW5CRS5pMzJbMF07XG4gICAgfSxcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgcmVhZFVpbnQ6IChidWZmLCBwKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBfYmluQkUudWk4O1xuICAgICAgICBhWzBdID0gYnVmZltwICsgM107XG4gICAgICAgIGFbMV0gPSBidWZmW3AgKyAyXTtcbiAgICAgICAgYVsyXSA9IGJ1ZmZbcCArIDFdO1xuICAgICAgICBhWzNdID0gYnVmZltwICsgMF07XG4gICAgICAgIHJldHVybiBfYmluQkUudWkzMlswXTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICByZWFkQVNDSUk6IChidWZmLCBwLCBsKSA9PiB7XG4gICAgICAgIHJldHVybiBsLm1hcCgoaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShidWZmW3AgKyBpXSkpLmpvaW4oJycpO1xuICAgIH0sXG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIHJlYWRGbG9hdDogKGJ1ZmYsIHApID0+IHtcbiAgICAgICAgY29uc3QgYSA9IF9iaW5CRS51aTg7XG4gICAgICAgIHRpbWVzKDQsIChpKSA9PiB7XG4gICAgICAgICAgICBhW2ldID0gYnVmZltwICsgMyAtIGldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9iaW5CRS5mbDMyWzBdO1xuICAgIH0sXG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIHJlYWREb3VibGU6IChidWZmLCBwKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBfYmluQkUudWk4O1xuICAgICAgICB0aW1lcyg4LCAoaSkgPT4ge1xuICAgICAgICAgICAgYVtpXSA9IGJ1ZmZbcCArIDcgLSBpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfYmluQkUuZmw2NFswXTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5cbiAgICAgKi9cbiAgICB3cml0ZVVzaG9ydDogKGJ1ZmYsIHAsIG4pID0+IHtcbiAgICAgICAgYnVmZltwXSA9IChuID4+IDgpICYgMjU1O1xuICAgICAgICBidWZmW3AgKyAxXSA9IG4gJiAyNTU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gICAgICovXG4gICAgd3JpdGVVaW50OiAoYnVmZiwgcCwgbikgPT4ge1xuICAgICAgICBidWZmW3BdID0gKG4gPj4gMjQpICYgMjU1O1xuICAgICAgICBidWZmW3AgKyAxXSA9IChuID4+IDE2KSAmIDI1NTtcbiAgICAgICAgYnVmZltwICsgMl0gPSAobiA+PiA4KSAmIDI1NTtcbiAgICAgICAgYnVmZltwICsgM10gPSAobiA+PiAwKSAmIDI1NTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICAgKi9cbiAgICB3cml0ZUFTQ0lJOiAoYnVmZiwgcCwgcykgPT4ge1xuICAgICAgICB0aW1lcyhzLmxlbmd0aCwgKGkpID0+IHtcbiAgICAgICAgICAgIGJ1ZmZbcCArIGldID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHVpOCxcbiAgICBmbDY0OiBuZXcgRmxvYXQ2NEFycmF5KHVpOC5idWZmZXIpLFxuICAgIGZsMzI6IG5ldyBGbG9hdDMyQXJyYXkodWk4LmJ1ZmZlciksXG4gICAgdWkzMjogbmV3IFVpbnQzMkFycmF5KHVpOC5idWZmZXIpLFxuICAgIGkzMjogbmV3IEludDMyQXJyYXkodWk4LmJ1ZmZlciksXG4gICAgaTE2OiBuZXcgSW50MTZBcnJheSh1aTguYnVmZmVyKSxcbiAgICAvKipcbiAgICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmXG4gICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwXG4gICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gICAgICAqL1xuICAgIHdyaXRlRG91YmxlOiAoYnVmZiwgcCwgbikgPT4ge1xuICAgICAgICBfYmluQkUuZmw2NFswXSA9IG47XG4gICAgICAgIHRpbWVzKDgsIChpKSA9PiB7XG4gICAgICAgICAgICBidWZmW3AgKyBpXSA9IF9iaW5CRS51aThbNyAtIGldO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcbi8qKlxuICogQHBhcmFtIHtCaW5CRX0gYmluXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGRhdGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBfb2Zmc2V0XG4gKiBAcGFyYW0ge1JlY29yZDxrZXlvZiBmaWVsZFRhZ1R5cGVzLCBhbnk+fSBpZmRcbiAqIEByZXR1cm5zIHtbbnVtYmVyLCBudW1iZXJdfVxuICovXG5jb25zdCBfd3JpdGVJRkQgPSAoYmluLCBkYXRhLCBfb2Zmc2V0LCBpZmQpID0+IHtcbiAgICBsZXQgb2Zmc2V0ID0gX29mZnNldDtcbiAgICBjb25zdCBrZXlzID0gLyoqIEB0eXBlIHtBcnJheTxrZXlvZiBmaWVsZFRhZ1R5cGVzPn0gKi8gKE9iamVjdC5rZXlzKGlmZCkuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gbnVsbCAmJiBrZXkgIT09ICd1bmRlZmluZWQnO1xuICAgIH0pLm1hcChOdW1iZXIpKTtcbiAgICBiaW4ud3JpdGVVc2hvcnQoZGF0YSwgb2Zmc2V0LCBrZXlzLmxlbmd0aCk7XG4gICAgb2Zmc2V0ICs9IDI7XG4gICAgbGV0IGVvZmYgPSBvZmZzZXQgKyAoMTIgKiBrZXlzLmxlbmd0aCkgKyA0O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSAvKiogQHR5cGUge2tleW9mIHR5cGVOYW1lMmJ5dGV9ICovIChmaWVsZFRhZ1R5cGVzW2tleV0pO1xuICAgICAgICBjb25zdCB0eXBlTnVtID0gdHlwZU5hbWUyYnl0ZVt0eXBlTmFtZV07XG4gICAgICAgIGlmICh0eXBlTmFtZSA9PSBudWxsIHx8IHR5cGVOYW1lID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGVOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIHR5cGUgb2YgdGFnOiAke2tleX1gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsID0gaWZkW2tleV07XG4gICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gZ2V0IHZhbHVlIGZvciBrZXkgJHtrZXl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQVNDSUlaIGZvcm1hdCB3aXRoIHRyYWlsaW5nIDAgY2hhcmFjdGVyXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2Zvcm1hdC90aWZmL2Nvcmlvbi5odG1cbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzc4MzA0NC93aGF0cy10aGUtZGlmZmVyZW5jZS1iZXR3ZWVuLWFzY2lpei12cy1hc2NpaVxuICAgICAgICBpZiAodHlwZU5hbWUgPT09ICdBU0NJSScgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgZW5kc1dpdGgodmFsLCAnXFx1MDAwMCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFsICs9ICdcXHUwMDAwJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBudW0gPSB2YWwubGVuZ3RoO1xuICAgICAgICBiaW4ud3JpdGVVc2hvcnQoZGF0YSwgb2Zmc2V0LCBrZXkpO1xuICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgYmluLndyaXRlVXNob3J0KGRhdGEsIG9mZnNldCwgdHlwZU51bSk7XG4gICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICBiaW4ud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgbnVtKTtcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgIGxldCBkbGVuID0gWy0xLCAxLCAxLCAyLCA0LCA4LCAwLCAwLCAwLCAwLCAwLCAwLCA4XVt0eXBlTnVtXSAqIG51bTtcbiAgICAgICAgbGV0IHRvZmYgPSBvZmZzZXQ7XG4gICAgICAgIGlmIChkbGVuID4gNCkge1xuICAgICAgICAgICAgYmluLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGVvZmYpO1xuICAgICAgICAgICAgdG9mZiA9IGVvZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVOYW1lID09PSAnQVNDSUknKSB7XG4gICAgICAgICAgICBiaW4ud3JpdGVBU0NJSShkYXRhLCB0b2ZmLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVOYW1lID09PSAnU0hPUlQnKSB7XG4gICAgICAgICAgICB0aW1lcyhudW0sIChpKSA9PiB7XG4gICAgICAgICAgICAgICAgYmluLndyaXRlVXNob3J0KGRhdGEsIHRvZmYgKyAoMiAqIGkpLCB2YWxbaV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZU5hbWUgPT09ICdMT05HJykge1xuICAgICAgICAgICAgdGltZXMobnVtLCAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgdG9mZiArICg0ICogaSksIHZhbFtpXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlTmFtZSA9PT0gJ1JBVElPTkFMJykge1xuICAgICAgICAgICAgdGltZXMobnVtLCAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgdG9mZiArICg4ICogaSksIE1hdGgucm91bmQodmFsW2ldICogMTAwMDApKTtcbiAgICAgICAgICAgICAgICBiaW4ud3JpdGVVaW50KGRhdGEsIHRvZmYgKyAoOCAqIGkpICsgNCwgMTAwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZU5hbWUgPT09ICdET1VCTEUnKSB7XG4gICAgICAgICAgICB0aW1lcyhudW0sIChpKSA9PiB7XG4gICAgICAgICAgICAgICAgYmluLndyaXRlRG91YmxlKGRhdGEsIHRvZmYgKyAoOCAqIGkpLCB2YWxbaV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRsZW4gPiA0KSB7XG4gICAgICAgICAgICBkbGVuICs9IChkbGVuICYgMSk7XG4gICAgICAgICAgICBlb2ZmICs9IGRsZW47XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgfVxuICAgIHJldHVybiBbb2Zmc2V0LCBlb2ZmXTtcbn07XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8UmVjb3JkPGtleW9mIGZpZWxkVGFnVHlwZXMsIHVua25vd24+Pn0gaWZkc1xuICogQHJldHVybnMge0FycmF5QnVmZmVyfVxuICovXG5jb25zdCBlbmNvZGVJZmRzID0gKGlmZHMpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobnVtQnl0ZXNJbklmZCk7XG4gICAgbGV0IG9mZnNldCA9IDQ7XG4gICAgY29uc3QgYmluID0gX2JpbkJFO1xuICAgIC8vIHNldCBiaWctZW5kaWFuIGJ5dGUtb3JkZXJcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9USUZGI0J5dGVfb3JkZXJcbiAgICBkYXRhWzBdID0gNzc7XG4gICAgZGF0YVsxXSA9IDc3O1xuICAgIC8vIHNldCBmb3JtYXQtdmVyc2lvbiBudW1iZXJcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9USUZGI0J5dGVfb3JkZXJcbiAgICBkYXRhWzNdID0gNDI7XG4gICAgbGV0IGlmZG8gPSA4O1xuICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBpZmRvKTtcbiAgICBvZmZzZXQgKz0gNDtcbiAgICBpZmRzLmZvckVhY2goKGlmZCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBub2ZmcyA9IF93cml0ZUlGRChiaW4sIGRhdGEsIGlmZG8sIGlmZCk7XG4gICAgICAgIGlmZG8gPSBub2Zmc1sxXTtcbiAgICAgICAgaWYgKGkgPCBpZmRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgbm9mZnNbMF0sIGlmZG8pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGRhdGEuc2xpY2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoMCwgaWZkbykuYnVmZmVyO1xuICAgIH1cbiAgICAvLyBub2RlIGhhc24ndCBpbXBsZW1lbnRlZCBzbGljZSBvbiBVaW50OEFycmF5IHlldFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGlmZG8pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWZkbzsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGRhdGFbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuYnVmZmVyO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fGltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheX0gdmFsdWVzXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7R2VvdGlmZldyaXRlck1ldGFkYXRhfSBtZXRhZGF0YVxuICogQHJldHVybnMge0FycmF5QnVmZmVyfVxuICovXG5jb25zdCBlbmNvZGVJbWFnZSA9ICh2YWx1ZXMsIHdpZHRoLCBoZWlnaHQsIG1ldGFkYXRhKSA9PiB7XG4gICAgaWYgKGhlaWdodCA9PT0gdW5kZWZpbmVkIHx8IGhlaWdodCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBwYXNzZWQgaW50byBlbmNvZGVJbWFnZSBhIHdpZHRoIG9mIHR5cGUgJHtoZWlnaHR9YCk7XG4gICAgfVxuICAgIGlmICh3aWR0aCA9PT0gdW5kZWZpbmVkIHx8IHdpZHRoID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgeW91IHBhc3NlZCBpbnRvIGVuY29kZUltYWdlIGEgd2lkdGggb2YgdHlwZSAke3dpZHRofWApO1xuICAgIH1cbiAgICAvKiogQHR5cGUge1JlY29yZDxudW1iZXJ8c3RyaW5nLCBBcnJheTxudW1iZXJ8c3RyaW5nPnxudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZD59ICovXG4gICAgY29uc3QgaWZkID0ge1xuICAgICAgICAyNTY6IFt3aWR0aF0sIC8vIEltYWdlV2lkdGhcbiAgICAgICAgMjU3OiBbaGVpZ2h0XSwgLy8gSW1hZ2VMZW5ndGhcbiAgICAgICAgMjczOiBbbnVtQnl0ZXNJbklmZF0sIC8vIHN0cmlwcyBvZmZzZXRcbiAgICAgICAgMjc4OiBbaGVpZ2h0XSwgLy8gUm93c1BlclN0cmlwXG4gICAgICAgIDMwNTogJ2dlb3RpZmYuanMnLCAvLyBubyBhcnJheSBmb3IgQVNDSUkoWilcbiAgICB9O1xuICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGlmZFtpXSA9IG1ldGFkYXRhWyAvKiogQHR5cGUge2tleW9mIEdlb3RpZmZXcml0ZXJNZXRhZGF0YX0gKi8oaSldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHByZnggPSBuZXcgVWludDhBcnJheShlbmNvZGVJZmRzKFtpZmRdKSk7XG4gICAgY29uc3QgZGF0YVR5cGUgPSAvKiogQHR5cGUge2tleW9mIHR5cGVNYXB9ICovICh2YWx1ZXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgY29uc3QgVHlwZWRBcnJheSA9IHR5cGVNYXBbZGF0YVR5cGVdO1xuICAgIC8vIGRlZmF1bHQgZm9yIEZsb2F0NjRcbiAgICBsZXQgZWxlbWVudFNpemUgPSA4O1xuICAgIGlmIChUeXBlZEFycmF5KSB7XG4gICAgICAgIGVsZW1lbnRTaXplID0gVHlwZWRBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KG51bUJ5dGVzSW5JZmQgKyAodmFsdWVzLmxlbmd0aCAqIGVsZW1lbnRTaXplKSk7XG4gICAgdGltZXMocHJmeC5sZW5ndGgsIChpKSA9PiB7XG4gICAgICAgIGRhdGFbaV0gPSBwcmZ4W2ldO1xuICAgIH0pO1xuICAgIGZvckVhY2godmFsdWVzLCAodmFsdWUsIGkpID0+IHtcbiAgICAgICAgaWYgKCFUeXBlZEFycmF5KSB7XG4gICAgICAgICAgICBkYXRhW251bUJ5dGVzSW5JZmQgKyBpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihlbGVtZW50U2l6ZSk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAgICAgaWYgKGRhdGFUeXBlID09PSAnRmxvYXQ2NEFycmF5Jykge1xuICAgICAgICAgICAgdmlldy5zZXRGbG9hdDY0KDAsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdGbG9hdDMyQXJyYXknKSB7XG4gICAgICAgICAgICB2aWV3LnNldEZsb2F0MzIoMCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ1VpbnQzMkFycmF5Jykge1xuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoMCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ1VpbnQxNkFycmF5Jykge1xuICAgICAgICAgICAgdmlldy5zZXRVaW50MTYoMCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ1VpbnQ4QXJyYXknKSB7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQ4KDAsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodmlldy5idWZmZXIpO1xuICAgICAgICBjb25zdCBpZHggPSBudW1CeXRlc0luSWZkICsgKGkgKiBlbGVtZW50U2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxlbWVudFNpemU7IGorKykge1xuICAgICAgICAgICAgZGF0YVtpZHggKyBqXSA9IHR5cGVkQXJyYXlbal07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YS5idWZmZXI7XG59O1xuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtSZWNvcmQ8bnVtYmVyfHN0cmluZywgVD59IGlucHV0XG4gKiBAcmV0dXJucyB7UmVjb3JkPG51bWJlcnxzdHJpbmcsIFQ+fVxuICovXG5jb25zdCBjb252ZXJ0VG9UaWRzID0gKGlucHV0KSA9PiB7XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8bnVtYmVyfHN0cmluZywgVD59ICovXG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5wdXQpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ1N0cmlwT2Zmc2V0cycpIHtcbiAgICAgICAgICAgIGlmICghbmFtZTJjb2RlW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGtleSwgJ25vdCBpbiBuYW1lMmNvZGU6JywgT2JqZWN0LmtleXMobmFtZTJjb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbbmFtZTJjb2RlW2tleV1dID0gaW5wdXRba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gaW5wdXRcbiAqIEByZXR1cm5zIHtUIGV4dGVuZHMgYW55W10gPyBUIDogVFtdfVxuICovXG5jb25zdCB0b0FycmF5ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiAvKiogQHR5cGUge1QgZXh0ZW5kcyBhbnlbXSA/IFQgOiBUW119ICovIChpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiAvKiogQHR5cGUge1QgZXh0ZW5kcyBhbnlbXSA/IFQgOiBUW119ICovIChbaW5wdXRdKTtcbn07XG4vKiogQHR5cGUge1BhcnRpYWw8R2VvdGlmZldyaXRlck1ldGFkYXRhPn0gKi9cbmNvbnN0IG1ldGFkYXRhRGVmYXVsdHMgPSB7XG4gICAgQ29tcHJlc3Npb246IDEsIC8vIG5vIGNvbXByZXNzaW9uXG4gICAgUGxhbmFyQ29uZmlndXJhdGlvbjogMSxcbiAgICBFeHRyYVNhbXBsZXM6IDAsXG59O1xuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj58QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fGltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheX0gZGF0YVxuICogQHBhcmFtIHtHZW90aWZmV3JpdGVyTWV0YWRhdGF9IG1ldGFkYXRhXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUdlb3RpZmYoZGF0YSwgbWV0YWRhdGEpIHtcbiAgICBjb25zdCBpc0ZsYXR0ZW5lZCA9IHR5cGVvZiBkYXRhWzBdID09PSAnbnVtYmVyJztcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICBsZXQgaGVpZ2h0O1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIGxldCBudW1CYW5kcztcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICBsZXQgd2lkdGg7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICAgIGxldCBmbGF0dGVuZWRWYWx1ZXM7XG4gICAgaWYgKGlzRmxhdHRlbmVkKSB7XG4gICAgICAgIGNvbnN0IGFycmF5RmxhdCA9IC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi8gKGRhdGEpO1xuICAgICAgICBjb25zdCBtZXRhSGVpZ2h0ID0gbWV0YWRhdGEuaGVpZ2h0IHx8IG1ldGFkYXRhLkltYWdlTGVuZ3RoO1xuICAgICAgICBpZiAobWV0YUhlaWdodCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBtZXRhSGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWlnaHQgaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIgaW4gbWV0YWRhdGEgaWYgZGF0YSBpcyBhIGZsYXQgYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQgPSBtZXRhSGVpZ2h0O1xuICAgICAgICBjb25zdCBtZXRhV2lkdGggPSBtZXRhZGF0YS53aWR0aCB8fCBtZXRhZGF0YS5JbWFnZVdpZHRoO1xuICAgICAgICBpZiAobWV0YVdpZHRoID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIG1ldGFXaWR0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignd2lkdGggaXMgcmVxdWlyZWQgdG8gYmUgYSBudW1iZXIgaW4gbWV0YWRhdGEgaWYgZGF0YSBpcyBhIGZsYXQgYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IG1ldGFXaWR0aDtcbiAgICAgICAgbnVtQmFuZHMgPSBhcnJheUZsYXQubGVuZ3RoIC8gKGhlaWdodCAqIHdpZHRoKTtcbiAgICAgICAgZmxhdHRlbmVkVmFsdWVzID0gYXJyYXlGbGF0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgYXJyYXkzZCA9IC8qKiBAdHlwZSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSAqLyAoZGF0YSk7XG4gICAgICAgIG51bUJhbmRzID0gYXJyYXkzZC5sZW5ndGg7XG4gICAgICAgIGhlaWdodCA9IGFycmF5M2RbMF0ubGVuZ3RoO1xuICAgICAgICB3aWR0aCA9IGFycmF5M2RbMF1bMF0ubGVuZ3RoO1xuICAgICAgICBmbGF0dGVuZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGltZXMoaGVpZ2h0LCAocm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRpbWVzKHdpZHRoLCAoY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1lcyhudW1CYW5kcywgKGJhbmRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmbGF0dGVuZWRWYWx1ZXMucHVzaChhcnJheTNkW2JhbmRJbmRleF1bcm93SW5kZXhdW2NvbHVtbkluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1ldGFkYXRhLkltYWdlTGVuZ3RoID0gaGVpZ2h0O1xuICAgIGRlbGV0ZSBtZXRhZGF0YS5oZWlnaHQ7XG4gICAgbWV0YWRhdGEuSW1hZ2VXaWR0aCA9IHdpZHRoO1xuICAgIGRlbGV0ZSBtZXRhZGF0YS53aWR0aDtcbiAgICAvLyBjb25zdWx0IGh0dHBzOi8vd3d3LmxvYy5nb3YvcHJlc2VydmF0aW9uL2RpZ2l0YWwvZm9ybWF0cy9jb250ZW50L3RpZmZfdGFncy5zaHRtbFxuICAgIGlmICghbWV0YWRhdGEuQml0c1BlclNhbXBsZSkge1xuICAgICAgICBsZXQgYml0c1BlclNhbXBsZSA9IDg7XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZmxhdHRlbmVkVmFsdWVzKSkge1xuICAgICAgICAgICAgYml0c1BlclNhbXBsZSA9IDggKiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZmxhdHRlbmVkVmFsdWVzKS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICAgICAgfVxuICAgICAgICBtZXRhZGF0YS5CaXRzUGVyU2FtcGxlID0gdGltZXMobnVtQmFuZHMsICgpID0+IGJpdHNQZXJTYW1wbGUpO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbE1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgaWYgKCEoJ0NvbXByZXNzaW9uJyBpbiBmaW5hbE1ldGFkYXRhKSkge1xuICAgICAgICBmaW5hbE1ldGFkYXRhLkNvbXByZXNzaW9uID0gbWV0YWRhdGFEZWZhdWx0cy5Db21wcmVzc2lvbjtcbiAgICB9XG4gICAgaWYgKCEoJ1BsYW5hckNvbmZpZ3VyYXRpb24nIGluIGZpbmFsTWV0YWRhdGEpKSB7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuUGxhbmFyQ29uZmlndXJhdGlvbiA9IG1ldGFkYXRhRGVmYXVsdHMuUGxhbmFyQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKCEoJ0V4dHJhU2FtcGxlcycgaW4gZmluYWxNZXRhZGF0YSkpIHtcbiAgICAgICAgZmluYWxNZXRhZGF0YS5FeHRyYVNhbXBsZXMgPSBtZXRhZGF0YURlZmF1bHRzLkV4dHJhU2FtcGxlcztcbiAgICB9XG4gICAgLy8gVGhlIGNvbG9yIHNwYWNlIG9mIHRoZSBpbWFnZSBkYXRhLlxuICAgIC8vIDE9YmxhY2sgaXMgemVybyBhbmQgMj1SR0IuXG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24pIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbmFsTWV0YWRhdGEuQml0c1BlclNhbXBsZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQml0c1BlclNhbXBsZSBtdXN0IGJlIGFuIGFycmF5IHdoZW4gUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbiBpcyBub3QgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbE1ldGFkYXRhLlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24gPSBmaW5hbE1ldGFkYXRhLkJpdHNQZXJTYW1wbGUubGVuZ3RoID09PSAzID8gMiA6IDE7XG4gICAgfVxuICAgIC8vIFRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBwZXIgcGl4ZWwuXG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLlNhbXBsZXNQZXJQaXhlbCkge1xuICAgICAgICBmaW5hbE1ldGFkYXRhLlNhbXBsZXNQZXJQaXhlbCA9IFtudW1CYW5kc107XG4gICAgfVxuICAgIGlmICghZmluYWxNZXRhZGF0YS5TdHJpcEJ5dGVDb3VudHMpIHtcbiAgICAgICAgLy8gd2UgYXJlIG9ubHkgd3JpdGluZyBvbmUgc3RyaXBcbiAgICAgICAgLy8gZGVmYXVsdCBmb3IgRmxvYXQ2NFxuICAgICAgICBsZXQgZWxlbWVudFNpemUgPSA4O1xuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZsYXR0ZW5lZFZhbHVlcykpIHtcbiAgICAgICAgICAgIGVsZW1lbnRTaXplID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZsYXR0ZW5lZFZhbHVlcykuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxNZXRhZGF0YS5TdHJpcEJ5dGVDb3VudHMgPSBbbnVtQmFuZHMgKiBlbGVtZW50U2l6ZSAqIGhlaWdodCAqIHdpZHRoXTtcbiAgICB9XG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLk1vZGVsUGl4ZWxTY2FsZSAmJiAhZmluYWxNZXRhZGF0YS5Nb2RlbFRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgcmFzdGVyIHRha2VzIHVwIGV4YWN0bHkgdGhlIHdob2xlIGdsb2JlXG4gICAgICAgIGZpbmFsTWV0YWRhdGEuTW9kZWxQaXhlbFNjYWxlID0gWzM2MCAvIHdpZHRoLCAxODAgLyBoZWlnaHQsIDBdO1xuICAgIH1cbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuU2FtcGxlRm9ybWF0KSB7XG4gICAgICAgIGxldCBzYW1wbGVGb3JtYXQgPSAxO1xuICAgICAgICBpZiAoaXNUeXBlZEZsb2F0QXJyYXkoZmxhdHRlbmVkVmFsdWVzKSkge1xuICAgICAgICAgICAgc2FtcGxlRm9ybWF0ID0gMztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNUeXBlZEludEFycmF5KGZsYXR0ZW5lZFZhbHVlcykpIHtcbiAgICAgICAgICAgIHNhbXBsZUZvcm1hdCA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVHlwZWRVaW50QXJyYXkoZmxhdHRlbmVkVmFsdWVzKSkge1xuICAgICAgICAgICAgc2FtcGxlRm9ybWF0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbE1ldGFkYXRhLlNhbXBsZUZvcm1hdCA9IHRpbWVzKG51bUJhbmRzLCAoKSA9PiBzYW1wbGVGb3JtYXQpO1xuICAgIH1cbiAgICAvLyBpZiBkaWRuJ3QgcGFzcyBpbiBwcm9qZWN0aW9uIGluZm9ybWF0aW9uLCBhc3N1bWUgdGhlIHBvcHVsYXIgNDMyNiBcImdlb2dyYXBoaWMgcHJvamVjdGlvblwiXG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLmhhc093blByb3BlcnR5KCdHZW9ncmFwaGljVHlwZUdlb0tleScpICYmICFmaW5hbE1ldGFkYXRhLmhhc093blByb3BlcnR5KCdQcm9qZWN0ZWRDU1R5cGVHZW9LZXknKSkge1xuICAgICAgICBmaW5hbE1ldGFkYXRhLkdlb2dyYXBoaWNUeXBlR2VvS2V5ID0gNDMyNjtcbiAgICAgICAgaWYgKCFmaW5hbE1ldGFkYXRhLk1vZGVsVHJhbnNmb3JtYXRpb24pIHtcbiAgICAgICAgICAgIGZpbmFsTWV0YWRhdGEuTW9kZWxUaWVwb2ludCA9IFswLCAwLCAwLCAtMTgwLCA5MCwgMF07IC8vIHJhc3RlciBmaXRzIHdob2xlIGdsb2JlXG4gICAgICAgIH1cbiAgICAgICAgZmluYWxNZXRhZGF0YS5HZW9nQ2l0YXRpb25HZW9LZXkgPSAnV0dTIDg0JztcbiAgICAgICAgZmluYWxNZXRhZGF0YS5HVE1vZGVsVHlwZUdlb0tleSA9IDI7XG4gICAgfVxuICAgIGNvbnN0IGdlb0tleXMgPSBPYmplY3Qua2V5cyhmaW5hbE1ldGFkYXRhKVxuICAgICAgICAuZmlsdGVyKChrZXkpID0+IGVuZHNXaXRoKGtleSwgJ0dlb0tleScpKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gbmFtZTJjb2RlW2FdIC0gbmFtZTJjb2RlW2JdKTtcbiAgICAvLyBJZiBub3QgcHJvdmlkZWQsIGJ1aWxkIEdlb0tleURpcmVjdG9yeSBhcyB3ZWxsIGFzIEdlb0FzY2lpUGFyYW1zVGFnIGFuZCBHZW9Eb3VibGVQYXJhbXNUYWdcbiAgICAvLyBpZiBHZW9Bc2NpaVBhcmFtcy9HZW9Eb3VibGVQYXJhbXMgd2VyZSBwYXNzZWQgaW4sIHdlIGFzc3VtZSBvZmZzZXRzIGFyZSBhbHJlYWR5IGNvcnJlY3RcbiAgICAvLyBTcGVjIGh0dHA6Ly9nZW90aWZmLm1hcHRvb2xzLm9yZy9zcGVjL2dlb3RpZmYyLjQuaHRtbFxuICAgIGlmICghZmluYWxNZXRhZGF0YS5HZW9LZXlEaXJlY3RvcnkpIHtcbiAgICAgICAgLy8gT25seSBidWlsZCBBU0NJSSAvIERPVUJMRSBwYXJhbXMgaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGxldCBnZW9Bc2NpaVBhcmFtcyA9IGZpbmFsTWV0YWRhdGEuR2VvQXNjaWlQYXJhbXMgfHwgJyc7XG4gICAgICAgIGlmICh0eXBlb2YgZ2VvQXNjaWlQYXJhbXMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlb0FzY2lpUGFyYW1zIG11c3QgYmUgYSBzdHJpbmcgaWYgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudEFzY2lpT2Zmc2V0ID0gZ2VvQXNjaWlQYXJhbXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBnZW9Eb3VibGVQYXJhbXMgPSBmaW5hbE1ldGFkYXRhLkdlb0RvdWJsZVBhcmFtcyB8fCBbXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGdlb0RvdWJsZVBhcmFtcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvRG91YmxlUGFyYW1zIG11c3QgYmUgYW4gYXJyYXkgaWYgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudERvdWJsZUluZGV4ID0gZ2VvRG91YmxlUGFyYW1zLmxlbmd0aDtcbiAgICAgICAgLy8gU2luY2UgZ2VvS2V5cyBhbHJlYWR5IHNvcnRlZCBhbmQgZmlsdGVyZWQsIGRvIGEgc2luZ2xlIHBhc3MgdG8gYXBwZW5kIHRvIGNvcnJlc3BvbmRpbmcgZGlyZWN0b3J5IGZvciBTSE9SVC9BU0NJSS9ET1VCTEVcbiAgICAgICAgY29uc3QgR2VvS2V5RGlyZWN0b3J5ID0gWzEsIDEsIDAsIDBdO1xuICAgICAgICBsZXQgdmFsaWRLZXlzID0gMDtcbiAgICAgICAgZ2VvS2V5cy5mb3JFYWNoKChnZW9LZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEtleUlEID0gbmFtZTJjb2RlW2dlb0tleV07XG4gICAgICAgICAgICBjb25zdCB0YWdUeXBlID0gZmllbGRUYWdUeXBlc1tLZXlJRF07XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBmaW5hbE1ldGFkYXRhWyAvKiogQHR5cGUge2tleW9mIGltcG9ydCgnLi9nZW90aWZmLmpzJykuR2VvdGlmZldyaXRlck1ldGFkYXRhfSAqLyhnZW9LZXkpXTtcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBDb3VudDtcbiAgICAgICAgICAgIGxldCBUSUZGVGFnTG9jYXRpb247XG4gICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgICAgICAgICAgIGxldCB2YWx1ZU9mZnNldDtcbiAgICAgICAgICAgIGlmICh0YWdUeXBlID09PSAnU0hPUlQnKSB7XG4gICAgICAgICAgICAgICAgQ291bnQgPSAxO1xuICAgICAgICAgICAgICAgIFRJRkZUYWdMb2NhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgR2VvS2V5ICR7Z2VvS2V5fSB3aXRoIHR5cGUgU0hPUlQgbXVzdCBoYXZlIGEgbnVtYmVyIHZhbHVlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlT2Zmc2V0ID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFnVHlwZSA9PT0gJ0FTQ0lJJykge1xuICAgICAgICAgICAgICAgIGlmICghZmluYWxNZXRhZGF0YS5HZW9Bc2NpaVBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxTdHIgPSBgJHt2YWwudG9TdHJpbmcoKX1cXHUwMDAwYDtcbiAgICAgICAgICAgICAgICAgICAgVElGRlRhZ0xvY2F0aW9uID0gTnVtYmVyKG5hbWUyY29kZS5HZW9Bc2NpaVBhcmFtcyk7IC8vIDM0NzM3XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlT2Zmc2V0ID0gY3VycmVudEFzY2lpT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBDb3VudCA9IHZhbFN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGdlb0FzY2lpUGFyYW1zICs9IHZhbFN0cjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFzY2lpT2Zmc2V0ICs9IHZhbFN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFnVHlwZSA9PT0gJ0RPVUJMRScpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmFsTWV0YWRhdGEuR2VvRG91YmxlUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHRvQXJyYXkodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgVElGRlRhZ0xvY2F0aW9uID0gTnVtYmVyKG5hbWUyY29kZS5HZW9Eb3VibGVQYXJhbXMpOyAvLyAzNDczNlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9mZnNldCA9IGN1cnJlbnREb3VibGVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgQ291bnQgPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHYgb2YgYXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9Eb3VibGVQYXJhbXMucHVzaChOdW1iZXIodikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERvdWJsZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtnZW90aWZmLmpzXSBjb3VsZG4ndCBnZXQgVElGRlRhZ0xvY2F0aW9uIGZvciAke2dlb0tleX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHZW9LZXlEaXJlY3RvcnkucHVzaChLZXlJRCwgVElGRlRhZ0xvY2F0aW9uLCBDb3VudCwgdmFsdWVPZmZzZXQpO1xuICAgICAgICAgICAgdmFsaWRLZXlzKys7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBXcml0ZSBHZW9LZXlEaXJlY3RvcnksIEdlb0FzY2lpUGFyYW1zLCBHZW9Eb3VibGVQYXJhbXNcbiAgICAgICAgR2VvS2V5RGlyZWN0b3J5WzNdID0gdmFsaWRLZXlzO1xuICAgICAgICBmaW5hbE1ldGFkYXRhLkdlb0tleURpcmVjdG9yeSA9IEdlb0tleURpcmVjdG9yeTtcbiAgICAgICAgaWYgKCFmaW5hbE1ldGFkYXRhLkdlb0FzY2lpUGFyYW1zICYmIGdlb0FzY2lpUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpbmFsTWV0YWRhdGEuR2VvQXNjaWlQYXJhbXMgPSBnZW9Bc2NpaVBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbmFsTWV0YWRhdGEuR2VvRG91YmxlUGFyYW1zICYmIGdlb0RvdWJsZVBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaW5hbE1ldGFkYXRhLkdlb0RvdWJsZVBhcmFtcyA9IGdlb0RvdWJsZVBhcmFtcztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjbGVhbnVwIG9yaWdpbmFsIEdlb0tleXMgbWV0YWRhdGEsIGJlY2F1c2Ugc3RvcmVkIGluIEdlb0tleURpcmVjdG9yeSB0YWdcbiAgICBmb3IgKGNvbnN0IGdlb0tleSBvZiBnZW9LZXlzKSB7XG4gICAgICAgIGlmIChmaW5hbE1ldGFkYXRhLmhhc093blByb3BlcnR5KGdlb0tleSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBmaW5hbE1ldGFkYXRhWyAvKiogQHR5cGUge2tleW9mIGltcG9ydCgnLi9nZW90aWZmLmpzJykuR2VvdGlmZldyaXRlck1ldGFkYXRhfSAqLyhnZW9LZXkpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQHR5cGUge2NvbnN0fSAqLyAoW1xuICAgICAgICAnQ29tcHJlc3Npb24nLFxuICAgICAgICAnRXh0cmFTYW1wbGVzJyxcbiAgICAgICAgJ0dlb2dyYXBoaWNUeXBlR2VvS2V5JyxcbiAgICAgICAgJ0dUTW9kZWxUeXBlR2VvS2V5JyxcbiAgICAgICAgJ0dUUmFzdGVyVHlwZUdlb0tleScsXG4gICAgICAgICdJbWFnZUxlbmd0aCcsIC8vIHN5bm9ueW0gb2YgSW1hZ2VIZWlnaHRcbiAgICAgICAgJ0ltYWdlV2lkdGgnLFxuICAgICAgICAnT3JpZW50YXRpb24nLFxuICAgICAgICAnUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbicsXG4gICAgICAgICdQcm9qZWN0ZWRDU1R5cGVHZW9LZXknLFxuICAgICAgICAnUGxhbmFyQ29uZmlndXJhdGlvbicsXG4gICAgICAgICdSZXNvbHV0aW9uVW5pdCcsXG4gICAgICAgICdTYW1wbGVzUGVyUGl4ZWwnLFxuICAgICAgICAnWFBvc2l0aW9uJyxcbiAgICAgICAgJ1lQb3NpdGlvbicsXG4gICAgICAgICdSb3dzUGVyU3RyaXAnLFxuICAgIF0pLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKGZpbmFsTWV0YWRhdGFbbmFtZV0pIHtcbiAgICAgICAgICAgIGZpbmFsTWV0YWRhdGFbbmFtZV0gPSB0b0FycmF5KGZpbmFsTWV0YWRhdGFbbmFtZV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZW5jb2RlZE1ldGFkYXRhID0gY29udmVydFRvVGlkcyhmaW5hbE1ldGFkYXRhKTtcbiAgICBjb25zdCBvdXRwdXRJbWFnZSA9IGVuY29kZUltYWdlKGZsYXR0ZW5lZFZhbHVlcywgd2lkdGgsIGhlaWdodCwgZW5jb2RlZE1ldGFkYXRhKTtcbiAgICByZXR1cm4gb3V0cHV0SW1hZ2U7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW90aWZmd3JpdGVyLmpzLm1hcCIsIi8qKiBAaW1wb3J0IHtUeXBlZEFycmF5fSBmcm9tICcuL2dlb3RpZmYuanMnICovXG5leHBvcnQgY29uc3QgZmllbGRUeXBlcyA9IHtcbiAgICBCWVRFOiAvKiogQHR5cGUgezF9ICovICgweDAwMDEpLFxuICAgIEFTQ0lJOiAvKiogQHR5cGUgezJ9ICovICgweDAwMDIpLFxuICAgIFNIT1JUOiAvKiogQHR5cGUgezN9ICovICgweDAwMDMpLFxuICAgIExPTkc6IC8qKiBAdHlwZSB7NH0gKi8gKDB4MDAwNCksXG4gICAgUkFUSU9OQUw6IC8qKiBAdHlwZSB7NX0gKi8gKDB4MDAwNSksXG4gICAgU0JZVEU6IC8qKiBAdHlwZSB7Nn0gKi8gKDB4MDAwNiksXG4gICAgVU5ERUZJTkVEOiAvKiogQHR5cGUgezd9ICovICgweDAwMDcpLFxuICAgIFNTSE9SVDogLyoqIEB0eXBlIHs4fSAqLyAoMHgwMDA4KSxcbiAgICBTTE9ORzogLyoqIEB0eXBlIHs5fSAqLyAoMHgwMDA5KSxcbiAgICBTUkFUSU9OQUw6IC8qKiBAdHlwZSB7MTB9ICovICgweDAwMGEpLFxuICAgIEZMT0FUOiAvKiogQHR5cGUgezExfSAqLyAoMHgwMDBiKSxcbiAgICBET1VCTEU6IC8qKiBAdHlwZSB7MTJ9ICovICgweDAwMGMpLFxuICAgIC8vIElGRCBvZmZzZXQsIHN1Z2dlc3RlZCBieSBodHRwczovL293bC5waHkucXVlZW5zdS5jYS9+cGhpbC9leGlmdG9vbC9zdGFuZGFyZHMuaHRtbFxuICAgIElGRDogLyoqIEB0eXBlIHsxM30gKi8gKDB4MDAwZCksXG4gICAgLy8gaW50cm9kdWNlZCBieSBCaWdUSUZGXG4gICAgTE9ORzg6IC8qKiBAdHlwZSB7MTZ9ICovICgweDAwMTApLFxuICAgIFNMT05HODogLyoqIEB0eXBlIHsxN30gKi8gKDB4MDAxMSksXG4gICAgSUZEODogLyoqIEB0eXBlIHsxOH0gKi8gKDB4MDAxMiksXG59O1xuLyoqIEB0eXBlZGVmIHtrZXlvZiBmaWVsZFR5cGVzfSBGaWVsZFR5cGVOYW1lICovXG4vKiogQHR5cGVkZWYge2ZpZWxkVHlwZXNba2V5b2YgdHlwZW9mIGZpZWxkVHlwZXNdfSBGaWVsZFR5cGUgKi9cbi8qKiBAdHlwZWRlZiB7UmVjb3JkPEZpZWxkVHlwZU5hbWUsIG51bWJlcj59IEZpZWxkVHlwZVNpemVzICovXG5leHBvcnQgY29uc3QgZmllbGRUeXBlU2l6ZXMgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoe1xuICAgIFtmaWVsZFR5cGVzLkJZVEVdOiAxLFxuICAgIFtmaWVsZFR5cGVzLkFTQ0lJXTogMSxcbiAgICBbZmllbGRUeXBlcy5TQllURV06IDEsXG4gICAgW2ZpZWxkVHlwZXMuVU5ERUZJTkVEXTogMSxcbiAgICBbZmllbGRUeXBlcy5TSE9SVF06IDIsXG4gICAgW2ZpZWxkVHlwZXMuU1NIT1JUXTogMixcbiAgICBbZmllbGRUeXBlcy5MT05HXTogNCxcbiAgICBbZmllbGRUeXBlcy5TTE9OR106IDQsXG4gICAgW2ZpZWxkVHlwZXMuRkxPQVRdOiA0LFxuICAgIFtmaWVsZFR5cGVzLklGRF06IDQsXG4gICAgW2ZpZWxkVHlwZXMuUkFUSU9OQUxdOiA4LFxuICAgIFtmaWVsZFR5cGVzLlNSQVRJT05BTF06IDgsXG4gICAgW2ZpZWxkVHlwZXMuRE9VQkxFXTogOCxcbiAgICBbZmllbGRUeXBlcy5MT05HOF06IDgsXG4gICAgW2ZpZWxkVHlwZXMuU0xPTkc4XTogOCxcbiAgICBbZmllbGRUeXBlcy5JRkQ4XTogOCxcbn0pO1xuLyoqIEB0eXBlZGVmIHtmaWVsZFR5cGVTaXplc1trZXlvZiB0eXBlb2YgZmllbGRUeXBlU2l6ZXNdfSBGaWVsZFR5cGVTaXplICovXG4vKipcbiAqIEdldCB0aGUgYnl0ZSBzaXplIGZvciBhIGdpdmVuIGZpZWxkIHR5cGUuXG4gKiBAcGFyYW0ge0ZpZWxkVHlwZX0gZmllbGRUeXBlIFRoZSBUSUZGIGZpZWxkIHR5cGUgY29uc3RhbnRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBzaXplIGluIGJ5dGVzXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiB0aGUgZmllbGQgdHlwZSBpcyBpbnZhbGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWVsZFR5cGVTaXplKGZpZWxkVHlwZSkge1xuICAgIGNvbnN0IHNpemUgPSBmaWVsZFR5cGVTaXplc1tmaWVsZFR5cGVdO1xuICAgIGlmIChzaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEludmFsaWQgZmllbGQgdHlwZTogJHtmaWVsZFR5cGV9YCk7XG4gICAgfVxuICAgIHJldHVybiBzaXplO1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUYWdEaWN0aW9uYXJ5RW50cnlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0YWdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbmFtZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHlwZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2lzQXJyYXldXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtlYWdlcl1cbiAqL1xuZXhwb3J0IGNvbnN0IHRhZ0RpY3Rpb25hcnkgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoe1xuICAgIE5ld1N1YmZpbGVUeXBlOiB7IHRhZzogMjU0LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGVhZ2VyOiB0cnVlIH0sXG4gICAgU3ViZmlsZVR5cGU6IHsgdGFnOiAyNTUsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgSW1hZ2VXaWR0aDogeyB0YWc6IDI1NiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBJbWFnZUxlbmd0aDogeyB0YWc6IDI1NywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBCaXRzUGVyU2FtcGxlOiB7IHRhZzogMjU4LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIENvbXByZXNzaW9uOiB7IHRhZzogMjU5LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFBob3RvbWV0cmljSW50ZXJwcmV0YXRpb246IHsgdGFnOiAyNjIsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgVGhyZXNoaG9sZGluZzogeyB0YWc6IDI2MywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIENlbGxXaWR0aDogeyB0YWc6IDI2NCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIENlbGxMZW5ndGg6IHsgdGFnOiAyNjUsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBGaWxsT3JkZXI6IHsgdGFnOiAyNjYsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBEb2N1bWVudE5hbWU6IHsgdGFnOiAyNjksIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBJbWFnZURlc2NyaXB0aW9uOiB7IHRhZzogMjcwLCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgTWFrZTogeyB0YWc6IDI3MSwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIE1vZGVsOiB7IHRhZzogMjcyLCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgU3RyaXBPZmZzZXRzOiB7IHRhZzogMjczLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgT3JpZW50YXRpb246IHsgdGFnOiAyNzQsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBTYW1wbGVzUGVyUGl4ZWw6IHsgdGFnOiAyNzcsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgUm93c1BlclN0cmlwOiB7IHRhZzogMjc4LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFN0cmlwQnl0ZUNvdW50czogeyB0YWc6IDI3OSwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgTWluU2FtcGxlVmFsdWU6IHsgdGFnOiAyODAsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBNYXhTYW1wbGVWYWx1ZTogeyB0YWc6IDI4MSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFhSZXNvbHV0aW9uOiB7IHRhZzogMjgyLCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMIH0sXG4gICAgWVJlc29sdXRpb246IHsgdGFnOiAyODMsIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwgfSxcbiAgICBQbGFuYXJDb25maWd1cmF0aW9uOiB7IHRhZzogMjg0LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFBhZ2VOYW1lOiB7IHRhZzogMjg1LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgWFBvc2l0aW9uOiB7IHRhZzogMjg2LCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMIH0sXG4gICAgWVBvc2l0aW9uOiB7IHRhZzogMjg3LCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMIH0sXG4gICAgRnJlZU9mZnNldHM6IHsgdGFnOiAyODgsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIEZyZWVCeXRlQ291bnRzOiB7IHRhZzogMjg5LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBHcmF5UmVzcG9uc2VVbml0OiB7IHRhZzogMjkwLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgR3JheVJlc3BvbnNlQ3VydmU6IHsgdGFnOiAyOTEsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBUNE9wdGlvbnM6IHsgdGFnOiAyOTIsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIFQ2T3B0aW9uczogeyB0YWc6IDI5MywgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgUmVzb2x1dGlvblVuaXQ6IHsgdGFnOiAyOTYsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBQYWdlTnVtYmVyOiB7IHRhZzogMjk3LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgVHJhbnNmZXJGdW5jdGlvbjogeyB0YWc6IDMwMSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFNvZnR3YXJlOiB7IHRhZzogMzA1LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgRGF0ZVRpbWU6IHsgdGFnOiAzMDYsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBBcnRpc3Q6IHsgdGFnOiAzMTUsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBIb3N0Q29tcHV0ZXI6IHsgdGFnOiAzMTYsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBQcmVkaWN0b3I6IHsgdGFnOiAzMTcsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBXaGl0ZVBvaW50OiB7IHRhZzogMzE4LCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgUHJpbWFyeUNocm9tYXRpY2l0aWVzOiB7IHRhZzogMzE5LCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgQ29sb3JNYXA6IHsgdGFnOiAzMjAsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBIYWxmdG9uZUhpbnRzOiB7IHRhZzogMzIxLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgVGlsZVdpZHRoOiB7IHRhZzogMzIyLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIFRpbGVMZW5ndGg6IHsgdGFnOiAzMjMsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgVGlsZU9mZnNldHM6IHsgdGFnOiAzMjQsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFRpbGVCeXRlQ291bnRzOiB7IHRhZzogMzI1LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSW5rU2V0OiB7IHRhZzogMzMyLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgSW5rTmFtZXM6IHsgdGFnOiAzMzMsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBOdW1iZXJPZklua3M6IHsgdGFnOiAzMzQsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBEb3RSYW5nZTogeyB0YWc6IDMzNiwgdHlwZTogZmllbGRUeXBlcy5CWVRFLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgVGFyZ2V0UHJpbnRlcjogeyB0YWc6IDMzNywgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIEV4dHJhU2FtcGxlczogeyB0YWc6IDMzOCwgdHlwZTogZmllbGRUeXBlcy5CWVRFLCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIFNhbXBsZUZvcm1hdDogeyB0YWc6IDMzOSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBTTWluU2FtcGxlVmFsdWU6IHsgdGFnOiAzNDAsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBTTWF4U2FtcGxlVmFsdWU6IHsgdGFnOiAzNDEsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBUcmFuc2ZlclJhbmdlOiB7IHRhZzogMzQyLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSlBFR1Byb2M6IHsgdGFnOiA1MTIsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBKUEVHSW50ZXJjaGFuZ2VGb3JtYXQ6IHsgdGFnOiA1MTMsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIEpQRUdJbnRlcmNoYW5nZUZvcm1hdExuZ3RoOiB7IHRhZzogNTE0LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBKUEVHUmVzdGFydEludGVydmFsOiB7IHRhZzogNTE1LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgSlBFR0xvc3NsZXNzUHJlZGljdG9yczogeyB0YWc6IDUxNywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIEpQRUdQb2ludFRyYW5zZm9ybXM6IHsgdGFnOiA1MTgsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBKUEVHUVRhYmxlczogeyB0YWc6IDUxOSwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSlBFR0RDVGFibGVzOiB7IHRhZzogNTIwLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBKUEVHQUNUYWJsZXM6IHsgdGFnOiA1MjEsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFlDYkNyQ29lZmZpY2llbnRzOiB7IHRhZzogNTI5LCB0eXBlOiBmaWVsZFR5cGVzLlJBVElPTkFMLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgWUNiQ3JTdWJTYW1wbGluZzogeyB0YWc6IDUzMCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFlDYkNyUG9zaXRpb25pbmc6IHsgdGFnOiA1MzEsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBSZWZlcmVuY2VCbGFja1doaXRlOiB7IHRhZzogNTMyLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBDb3B5cmlnaHQ6IHsgdGFnOiAzMzQzMiwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIEJhZEZheExpbmVzOiB7IHRhZzogMzI2IH0sXG4gICAgQ2xlYW5GYXhEYXRhOiB7IHRhZzogMzI3IH0sXG4gICAgQ2xpcFBhdGg6IHsgdGFnOiAzNDMgfSxcbiAgICBDb25zZWN1dGl2ZUJhZEZheExpbmVzOiB7IHRhZzogMzI4IH0sXG4gICAgRGVjb2RlOiB7IHRhZzogNDMzIH0sXG4gICAgRGVmYXVsdEltYWdlQ29sb3I6IHsgdGFnOiA0MzQgfSxcbiAgICBJbmRleGVkOiB7IHRhZzogMzQ2IH0sXG4gICAgSlBFR1RhYmxlczogeyB0YWc6IDM0NywgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBTdHJpcFJvd0NvdW50czogeyB0YWc6IDU1OSwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFN1YklGRHM6IHsgdGFnOiAzMzAsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBYQ2xpcFBhdGhVbml0czogeyB0YWc6IDM0NCB9LFxuICAgIFlDbGlwUGF0aFVuaXRzOiB7IHRhZzogMzQ1IH0sXG4gICAgQXBlcnR1cmVWYWx1ZTogeyB0YWc6IDM3Mzc4IH0sXG4gICAgQ29sb3JTcGFjZTogeyB0YWc6IDQwOTYxIH0sXG4gICAgRGF0ZVRpbWVEaWdpdGl6ZWQ6IHsgdGFnOiAzNjg2OCB9LFxuICAgIERhdGVUaW1lT3JpZ2luYWw6IHsgdGFnOiAzNjg2NyB9LFxuICAgIEV4aWZJRkQ6IHsgdGFnOiAzNDY2NSwgbmFtZTogJ0V4aWYgSUZEJywgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgRXhpZlZlcnNpb246IHsgdGFnOiAzNjg2NCB9LFxuICAgIEV4cG9zdXJlVGltZTogeyB0YWc6IDMzNDM0IH0sXG4gICAgRmlsZVNvdXJjZTogeyB0YWc6IDQxNzI4IH0sXG4gICAgRmxhc2g6IHsgdGFnOiAzNzM4NSB9LFxuICAgIEZsYXNocGl4VmVyc2lvbjogeyB0YWc6IDQwOTYwIH0sXG4gICAgRk51bWJlcjogeyB0YWc6IDMzNDM3IH0sXG4gICAgSW1hZ2VVbmlxdWVJRDogeyB0YWc6IDQyMDE2IH0sXG4gICAgTGlnaHRTb3VyY2U6IHsgdGFnOiAzNzM4NCB9LFxuICAgIE1ha2VyTm90ZTogeyB0YWc6IDM3NTAwIH0sXG4gICAgU2h1dHRlclNwZWVkVmFsdWU6IHsgdGFnOiAzNzM3NyB9LFxuICAgIFVzZXJDb21tZW50OiB7IHRhZzogMzc1MTAgfSxcbiAgICBJUFRDOiB7IHRhZzogMzM3MjMgfSxcbiAgICBDWl9MU01JTkZPOiB7IHRhZzogMzQ0MTIgfSxcbiAgICBJQ0NQcm9maWxlOiB7IHRhZzogMzQ2NzUsIG5hbWU6ICdJQ0MgUHJvZmlsZScgfSxcbiAgICBYTVA6IHsgdGFnOiA3MDAgfSxcbiAgICBHREFMX01FVEFEQVRBOiB7IHRhZzogNDIxMTIgfSxcbiAgICBHREFMX05PREFUQTogeyB0YWc6IDQyMTEzLCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJLCBlYWdlcjogdHJ1ZSB9LFxuICAgIFBob3Rvc2hvcDogeyB0YWc6IDM0Mzc3IH0sXG4gICAgTW9kZWxQaXhlbFNjYWxlOiB7IHRhZzogMzM1NTAsIHR5cGU6IGZpZWxkVHlwZXMuRE9VQkxFLCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIE1vZGVsVGllcG9pbnQ6IHsgdGFnOiAzMzkyMiwgdHlwZTogZmllbGRUeXBlcy5ET1VCTEUsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgTW9kZWxUcmFuc2Zvcm1hdGlvbjogeyB0YWc6IDM0MjY0LCB0eXBlOiBmaWVsZFR5cGVzLkRPVUJMRSwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBHZW9LZXlEaXJlY3Rvcnk6IHsgdGFnOiAzNDczNSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBHZW9Eb3VibGVQYXJhbXM6IHsgdGFnOiAzNDczNiwgdHlwZTogZmllbGRUeXBlcy5ET1VCTEUsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgR2VvQXNjaWlQYXJhbXM6IHsgdGFnOiAzNDczNywgdHlwZTogZmllbGRUeXBlcy5BU0NJSSwgZWFnZXI6IHRydWUgfSxcbiAgICBMZXJjUGFyYW1ldGVyczogeyB0YWc6IDUwNjc0LCBlYWdlcjogdHJ1ZSB9LFxufSk7XG4vKiogQHR5cGVkZWYge2tleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5fSBUYWdOYW1lICovXG4vKiogQHR5cGVkZWYge3R5cGVvZiB0YWdEaWN0aW9uYXJ5W2tleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5XVsndGFnJ119IFRhZyAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7RXh0cmFjdDxrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeSxcbiAqICAgeyBbSyBpbiBrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeV06ICh0eXBlb2YgdGFnRGljdGlvbmFyeSlbS10gZXh0ZW5kcyB7IGVhZ2VyOiB0cnVlIH1cbiAqICAgPyBLIDogbmV2ZXIgfVtrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeV0+fSBFYWdlclRhZ05hbWVcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7RXh0cmFjdDxUYWcsIHsgW0sgaW4ga2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnldOiAodHlwZW9mIHRhZ0RpY3Rpb25hcnkpW0tdIGV4dGVuZHMgeyBlYWdlcjogdHJ1ZSB9XG4gKiAgID8gKHR5cGVvZiB0YWdEaWN0aW9uYXJ5KVtLXVsndGFnJ10gOiBuZXZlciB9W2tleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5XT59IEVhZ2VyVGFnXG4gKi9cbi8qKiBAdHlwZWRlZiB7RXh0cmFjdDx0eXBlb2YgdGFnRGljdGlvbmFyeVtrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeV0sIHt0eXBlOiBhbnl9PlsndHlwZSddfSBUYWdUeXBlICovXG4vKipcbiAqIEB0ZW1wbGF0ZSB7bnVtYmVyfSBUXG4gKiBAdHlwZWRlZiB7VCBleHRlbmRzIDIgPyBzdHJpbmcgOiBudW1iZXJ9IEdlb1RpZmZQcmltaXRpdmVcbiAqL1xuLyoqXG4gKiBAdGVtcGxhdGUge1RhZ05hbWV9IFRcbiAqIEB0eXBlZGVmIHt0eXBlb2YgdGFnRGljdGlvbmFyeVtUXX0gVGFnRGVmXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgMTogbnVtYmVyO1xuICogICAyOiBzdHJpbmc7XG4gKiAgIDM6IG51bWJlcjtcbiAqICAgNDogbnVtYmVyO1xuICogICA1OiBudW1iZXI7XG4gKiAgIDY6IG51bWJlcjtcbiAqICAgNzogQXJyYXlCdWZmZXI7XG4gKiAgIDg6IG51bWJlcjtcbiAqICAgOTogbnVtYmVyO1xuICogICAxMDogbnVtYmVyO1xuICogICAxMTogbnVtYmVyO1xuICogICAxMjogbnVtYmVyO1xuICogICAxNjogbnVtYmVyO1xuICogICAxNzogbnVtYmVyO1xuICogICAxODogbnVtYmVyO1xuICogfX0gRmllbGRUeXBlTWFwXG4gKi9cbi8qKlxuICogQHRlbXBsYXRlIHtUYWdOYW1lfSBUXG4gKiBAdHlwZWRlZiB7VGFnRGVmPFQ+IGV4dGVuZHMgeyBpc0FycmF5OiB0cnVlIH1cbiAqICAgPyAoVGFnRGVmPFQ+IGV4dGVuZHMgeyB0eXBlOiB0eXBlb2YgZmllbGRUeXBlcy5ET1VCTEUgfSA/IG51bWJlcltdIDpcbiAqICAgICAgVGFnRGVmPFQ+IGV4dGVuZHMgeyB0eXBlOiB0eXBlb2YgZmllbGRUeXBlcy5BU0NJSSB9ID8gc3RyaW5nW10gOlxuICogICAgICBUYWdEZWY8VD4gZXh0ZW5kcyB7IHR5cGU6IHR5cGVvZiBmaWVsZFR5cGVzLkJZVEUgfCB0eXBlb2YgZmllbGRUeXBlcy5TQllURSB8IHR5cGVvZiBmaWVsZFR5cGVzLlVOREVGSU5FRCB9XG4gKiAgICAgICAgPyBVaW50OEFycmF5IHwgSW50OEFycmF5IDpcbiAqICAgICAgKG51bWJlcltdIHwgVHlwZWRBcnJheSkpXG4gKiAgIDogKFRhZ0RlZjxUPiBleHRlbmRzIHsgdHlwZToga2V5b2YgRmllbGRUeXBlTWFwIH0gPyBGaWVsZFR5cGVNYXBbVGFnRGVmPFQ+Wyd0eXBlJ11dIDogYW55KX0gVGFnVmFsdWVcbiAqL1xuLyoqXG4gKiBNYXBzIHRhZyBuYW1lcyB0byB0aGVpciBudW1lcmljIHZhbHVlc1xuICogQHR5cGUge1JlY29yZDxzdHJpbmcsIG51bWJlcj59XG4gKi9cbmV4cG9ydCBjb25zdCB0YWdzID0ge307XG4vKipcbiAqIE1hcHMgdGFnIG51bWJlcnMgdG8gdGhlaXIgZGVmaW5pdGlvbnNcbiAqIEB0eXBlIHtSZWNvcmQ8bnVtYmVyLCB7IHRhZzogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZ3xudW1iZXJ8dW5kZWZpbmVkLCBpc0FycmF5OiBib29sZWFuLCBlYWdlcjogYm9vbGVhbiB9Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IHRhZ0RlZmluaXRpb25zID0ge307XG4vKipcbiAqIFJlZ2lzdGVycyBhIG5ldyBmaWVsZCB0YWdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWcgdGhlIG51bWVyaWMgdGlmZiB0YWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCB3aWxsIGJlIHJlcG9ydGVkIGluIHRoZSBJRkRcbiAqIEBwYXJhbSB7a2V5b2YgZmllbGRUeXBlc3xudW1iZXJ8dW5kZWZpbmVkfSB0eXBlIHRoZSB0YWdzIGRhdGEgdHlwZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0FycmF5IHdoZXRoZXIgdGhlIHRhZyBpcyBhbiBhcnJheVxuICogQHBhcmFtIHtib29sZWFufSBbZWFnZXI9ZmFsc2VdIHdoZXRoZXIgdG8gZWFnZXJseSBmZXRjaCBkZWZlcnJlZCBmaWVsZHMuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gZmFsc2UgKGRlZmF1bHQpLCB0YWdzIGFyZSBsb2FkZWQgbGF6aWx5IG9uLWRlbWFuZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB0cnVlLCBhbGwgdGFncyBhcmUgbG9hZGVkIGltbWVkaWF0ZWx5IGR1cmluZyBwYXJzaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJUYWcodGFnLCBuYW1lLCB0eXBlLCBpc0FycmF5ID0gZmFsc2UsIGVhZ2VyID0gZmFsc2UpIHtcbiAgICB0YWdzW25hbWVdID0gdGFnO1xuICAgIHRhZ0RlZmluaXRpb25zW3RhZ10gPSB7IHRhZywgbmFtZSwgdHlwZTogdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gZmllbGRUeXBlc1t0eXBlXSA6IHR5cGUsIGlzQXJyYXksIGVhZ2VyIH07XG59XG5mb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0YWdEaWN0aW9uYXJ5KSkge1xuICAgIGNvbnN0IGVudHJ5ID0gLyoqIEB0eXBlIHtUYWdEaWN0aW9uYXJ5RW50cnl9ICovICh2YWx1ZSk7XG4gICAgcmVnaXN0ZXJUYWcoZW50cnkudGFnLCBlbnRyeS5uYW1lIHx8IGtleSwgZW50cnkudHlwZSwgZW50cnkuaXNBcnJheSwgZW50cnkuZWFnZXIpO1xufVxuLyoqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRhZ0lkZW50aWZpZXIgVGhlIGZpZWxkIHRhZyBJRCBvciBuYW1lXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgcmVzb2x2ZWQgdGFnIElEXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVGFnKHRhZ0lkZW50aWZpZXIpIHtcbiAgICBpZiAodHlwZW9mIHRhZ0lkZW50aWZpZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB0YWdJZGVudGlmaWVyO1xuICAgIH1cbiAgICByZXR1cm4gdGFnc1t0YWdJZGVudGlmaWVyXTtcbn1cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0YWdJZGVudGlmaWVyIFRoZSBmaWVsZCB0YWcgSUQgb3IgbmFtZVxuICogQHJldHVybnMge3sgdGFnOiBudW1iZXIsIG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nfG51bWJlcnx1bmRlZmluZWQsIGlzQXJyYXk6IGJvb2xlYW4sIGVhZ2VyOiBib29sZWFuIH19IHRoZSB0YWcgZGVmaW5pdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnKHRhZ0lkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdGFnRGVmaW5pdGlvbnNbcmVzb2x2ZVRhZyh0YWdJZGVudGlmaWVyKV07XG59XG5leHBvcnQgY29uc3QgZmllbGRUYWdUeXBlcyA9IHtcbiAgICAyNTY6ICdTSE9SVCcsXG4gICAgMjU3OiAnU0hPUlQnLFxuICAgIDI1ODogJ1NIT1JUJyxcbiAgICAyNTk6ICdTSE9SVCcsXG4gICAgMjYyOiAnU0hPUlQnLFxuICAgIDI3MDogJ0FTQ0lJJyxcbiAgICAyNzE6ICdBU0NJSScsXG4gICAgMjcyOiAnQVNDSUknLFxuICAgIDI3MzogJ0xPTkcnLFxuICAgIDI3NDogJ1NIT1JUJyxcbiAgICAyNzc6ICdTSE9SVCcsXG4gICAgMjc4OiAnTE9ORycsXG4gICAgMjc5OiAnTE9ORycsXG4gICAgMjgyOiAnUkFUSU9OQUwnLFxuICAgIDI4MzogJ1JBVElPTkFMJyxcbiAgICAyODQ6ICdTSE9SVCcsXG4gICAgMjg2OiAnU0hPUlQnLFxuICAgIDI4NzogJ1JBVElPTkFMJyxcbiAgICAyOTY6ICdTSE9SVCcsXG4gICAgMjk3OiAnU0hPUlQnLFxuICAgIDMwNTogJ0FTQ0lJJyxcbiAgICAzMDY6ICdBU0NJSScsXG4gICAgMzE1OiAnQVNDSUknLFxuICAgIDMzODogJ1NIT1JUJyxcbiAgICAzMzk6ICdTSE9SVCcsXG4gICAgNTEzOiAnTE9ORycsXG4gICAgNTE0OiAnTE9ORycsXG4gICAgMTAyNDogJ1NIT1JUJyxcbiAgICAxMDI1OiAnU0hPUlQnLFxuICAgIDEwMjY6ICdBU0NJSScsXG4gICAgMjA0ODogJ1NIT1JUJyxcbiAgICAyMDQ5OiAnQVNDSUknLFxuICAgIDIwNTI6ICdTSE9SVCcsXG4gICAgMjA1NDogJ1NIT1JUJyxcbiAgICAyMDU3OiAnRE9VQkxFJyxcbiAgICAyMDU5OiAnRE9VQkxFJyxcbiAgICAyMDYwOiAnU0hPUlQnLFxuICAgIDMwNzI6ICdTSE9SVCcsXG4gICAgMzA3MzogJ0FTQ0lJJyxcbiAgICAzMDc2OiAnU0hPUlQnLFxuICAgIDQwOTY6ICdTSE9SVCcsXG4gICAgNDA5NzogJ0FTQ0lJJyxcbiAgICA0MDk5OiAnU0hPUlQnLFxuICAgIDMzNDMyOiAnQVNDSUknLFxuICAgIDMzNTUwOiAnRE9VQkxFJyxcbiAgICAzMzkyMjogJ0RPVUJMRScsXG4gICAgMzQyNjQ6ICdET1VCTEUnLFxuICAgIDM0NjY1OiAnTE9ORycsXG4gICAgMzQ3MzU6ICdTSE9SVCcsXG4gICAgMzQ3MzY6ICdET1VCTEUnLFxuICAgIDM0NzM3OiAnQVNDSUknLFxuICAgIDQyMTEzOiAnQVNDSUknLFxufTtcbmV4cG9ydCBjb25zdCBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucyA9IHtcbiAgICBXaGl0ZUlzWmVybzogMCxcbiAgICBCbGFja0lzWmVybzogMSxcbiAgICBSR0I6IDIsXG4gICAgUGFsZXR0ZTogMyxcbiAgICBUcmFuc3BhcmVuY3lNYXNrOiA0LFxuICAgIENNWUs6IDUsXG4gICAgWUNiQ3I6IDYsXG4gICAgQ0lFTGFiOiA4LFxuICAgIElDQ0xhYjogOSxcbn07XG5leHBvcnQgY29uc3QgRXh0cmFTYW1wbGVzVmFsdWVzID0ge1xuICAgIFVuc3BlY2lmaWVkOiAwLFxuICAgIEFzc29jYWxwaGE6IDEsXG4gICAgVW5hc3NhbHBoYTogMixcbn07XG5leHBvcnQgY29uc3QgTGVyY1BhcmFtZXRlcnMgPSB7XG4gICAgVmVyc2lvbjogMCxcbiAgICBBZGRDb21wcmVzc2lvbjogMSxcbn07XG5leHBvcnQgY29uc3QgTGVyY0FkZENvbXByZXNzaW9uID0ge1xuICAgIE5vbmU6IDAsXG4gICAgRGVmbGF0ZTogMSxcbiAgICBac3RhbmRhcmQ6IDIsXG59O1xuZXhwb3J0IGNvbnN0IGdlb0tleU5hbWVzID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKHtcbiAgICAxMDI0OiAnR1RNb2RlbFR5cGVHZW9LZXknLFxuICAgIDEwMjU6ICdHVFJhc3RlclR5cGVHZW9LZXknLFxuICAgIDEwMjY6ICdHVENpdGF0aW9uR2VvS2V5JyxcbiAgICAyMDQ4OiAnR2VvZ3JhcGhpY1R5cGVHZW9LZXknLFxuICAgIDIwNDk6ICdHZW9nQ2l0YXRpb25HZW9LZXknLFxuICAgIDIwNTA6ICdHZW9nR2VvZGV0aWNEYXR1bUdlb0tleScsXG4gICAgMjA1MTogJ0dlb2dQcmltZU1lcmlkaWFuR2VvS2V5JyxcbiAgICAyMDUyOiAnR2VvZ0xpbmVhclVuaXRzR2VvS2V5JyxcbiAgICAyMDUzOiAnR2VvZ0xpbmVhclVuaXRTaXplR2VvS2V5JyxcbiAgICAyMDU0OiAnR2VvZ0FuZ3VsYXJVbml0c0dlb0tleScsXG4gICAgMjA1NTogJ0dlb2dBbmd1bGFyVW5pdFNpemVHZW9LZXknLFxuICAgIDIwNTY6ICdHZW9nRWxsaXBzb2lkR2VvS2V5JyxcbiAgICAyMDU3OiAnR2VvZ1NlbWlNYWpvckF4aXNHZW9LZXknLFxuICAgIDIwNTg6ICdHZW9nU2VtaU1pbm9yQXhpc0dlb0tleScsXG4gICAgMjA1OTogJ0dlb2dJbnZGbGF0dGVuaW5nR2VvS2V5JyxcbiAgICAyMDYwOiAnR2VvZ0F6aW11dGhVbml0c0dlb0tleScsXG4gICAgMjA2MTogJ0dlb2dQcmltZU1lcmlkaWFuTG9uZ0dlb0tleScsXG4gICAgMjA2MjogJ0dlb2dUT1dHUzg0R2VvS2V5JyxcbiAgICAzMDcyOiAnUHJvamVjdGVkQ1NUeXBlR2VvS2V5JyxcbiAgICAzMDczOiAnUENTQ2l0YXRpb25HZW9LZXknLFxuICAgIDMwNzQ6ICdQcm9qZWN0aW9uR2VvS2V5JyxcbiAgICAzMDc1OiAnUHJvakNvb3JkVHJhbnNHZW9LZXknLFxuICAgIDMwNzY6ICdQcm9qTGluZWFyVW5pdHNHZW9LZXknLFxuICAgIDMwNzc6ICdQcm9qTGluZWFyVW5pdFNpemVHZW9LZXknLFxuICAgIDMwNzg6ICdQcm9qU3RkUGFyYWxsZWwxR2VvS2V5JyxcbiAgICAzMDc5OiAnUHJvalN0ZFBhcmFsbGVsMkdlb0tleScsXG4gICAgMzA4MDogJ1Byb2pOYXRPcmlnaW5Mb25nR2VvS2V5JyxcbiAgICAzMDgxOiAnUHJvak5hdE9yaWdpbkxhdEdlb0tleScsXG4gICAgMzA4MjogJ1Byb2pGYWxzZUVhc3RpbmdHZW9LZXknLFxuICAgIDMwODM6ICdQcm9qRmFsc2VOb3J0aGluZ0dlb0tleScsXG4gICAgMzA4NDogJ1Byb2pGYWxzZU9yaWdpbkxvbmdHZW9LZXknLFxuICAgIDMwODU6ICdQcm9qRmFsc2VPcmlnaW5MYXRHZW9LZXknLFxuICAgIDMwODY6ICdQcm9qRmFsc2VPcmlnaW5FYXN0aW5nR2VvS2V5JyxcbiAgICAzMDg3OiAnUHJvakZhbHNlT3JpZ2luTm9ydGhpbmdHZW9LZXknLFxuICAgIDMwODg6ICdQcm9qQ2VudGVyTG9uZ0dlb0tleScsXG4gICAgMzA4OTogJ1Byb2pDZW50ZXJMYXRHZW9LZXknLFxuICAgIDMwOTA6ICdQcm9qQ2VudGVyRWFzdGluZ0dlb0tleScsXG4gICAgMzA5MTogJ1Byb2pDZW50ZXJOb3J0aGluZ0dlb0tleScsXG4gICAgMzA5MjogJ1Byb2pTY2FsZUF0TmF0T3JpZ2luR2VvS2V5JyxcbiAgICAzMDkzOiAnUHJvalNjYWxlQXRDZW50ZXJHZW9LZXknLFxuICAgIDMwOTQ6ICdQcm9qQXppbXV0aEFuZ2xlR2VvS2V5JyxcbiAgICAzMDk1OiAnUHJvalN0cmFpZ2h0VmVydFBvbGVMb25nR2VvS2V5JyxcbiAgICAzMDk2OiAnUHJvalJlY3RpZmllZEdyaWRBbmdsZUdlb0tleScsXG4gICAgNDA5NjogJ1ZlcnRpY2FsQ1NUeXBlR2VvS2V5JyxcbiAgICA0MDk3OiAnVmVydGljYWxDaXRhdGlvbkdlb0tleScsXG4gICAgNDA5ODogJ1ZlcnRpY2FsRGF0dW1HZW9LZXknLFxuICAgIDQwOTk6ICdWZXJ0aWNhbFVuaXRzR2VvS2V5Jyxcbn0pO1xuLyoqIEB0eXBlZGVmIHtnZW9LZXlOYW1lc1trZXlvZiB0eXBlb2YgZ2VvS2V5TmFtZXNdfSBHZW9LZXlOYW1lICovXG4vKipcbiAqIEB0eXBlIHtSZWNvcmQ8R2VvS2V5TmFtZSwgbnVtYmVyPn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdlb0tleXMgPSAvKiogQHR5cGUge1JlY29yZDxHZW9LZXlOYW1lLCBudW1iZXI+fSAqLyAoe30pO1xuZm9yIChjb25zdCBba2V5LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhnZW9LZXlOYW1lcykpIHtcbiAgICBnZW9LZXlzWyAvKiogQHR5cGUge0dlb0tleU5hbWV9ICovKG5hbWUpXSA9IHBhcnNlSW50KGtleSwgMTApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFscy5qcy5tYXAiLCJpbXBvcnQgRGF0YVNsaWNlIGZyb20gJy4vZGF0YXNsaWNlLmpzJztcbmltcG9ydCB7IGZpZWxkVHlwZXMsIGdlb0tleU5hbWVzLCB0YWdEZWZpbml0aW9ucywgcmVzb2x2ZVRhZywgZ2V0RmllbGRUeXBlU2l6ZSwgfSBmcm9tICcuL2dsb2JhbHMuanMnO1xuLyoqXG4gKiBBbGxvY2F0ZXMgYW4gYXBwcm9wcmlhdGUgVHlwZWRBcnJheSBiYXNlZCBvbiB0aGUgVElGRiBmaWVsZCB0eXBlLlxuICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkVHlwZSAtIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudCBmcm9tIGZpZWxkVHlwZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCAtIE51bWJlciBvZiBlbGVtZW50cyB0byBhbGxvY2F0ZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fSBUaGUgYWxsb2NhdGVkIHR5cGVkIGFycmF5IGZvciB0aGUgZ2l2ZW4gZmllbGQgdHlwZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgdGhlIGZpZWxkIHR5cGUgaXMgaW52YWxpZFxuICovXG5mdW5jdGlvbiBnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCBjb3VudCkge1xuICAgIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5CWVRFOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuQVNDSUk6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5VTkRFRklORUQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0JZVEU6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TSE9SVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDE2QXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU1NIT1JUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkxPTkc6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5JRkQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNMT05HOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkxPTkc4OlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuSUZEODpcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0xPTkc4OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5SQVRJT05BTDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoY291bnQgKiAyKTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNSQVRJT05BTDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShjb3VudCAqIDIpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuRkxPQVQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5ET1VCTEU6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShjb3VudCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCBmaWVsZCB0eXBlOiAke2ZpZWxkVHlwZX1gKTtcbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIERhdGFTbGljZSByZWFkIG1ldGhvZCBmb3IgYSBnaXZlbiBmaWVsZCB0eXBlLlxuICogQHBhcmFtIHtEYXRhU2xpY2V9IGRhdGFTbGljZSAtIFRoZSBEYXRhU2xpY2UgaW5zdGFuY2UgdG8gZ2V0IHRoZSByZWFkZXIgZnJvbVxuICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkVHlwZSAtIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudCBmcm9tIGZpZWxkVHlwZXNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGJvdW5kIHJlYWQgbWV0aG9kIChlLmcuLCByZWFkVWludDE2LCByZWFkRmxvYXQzMilcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIHRoZSBmaWVsZCB0eXBlIGlzIGludmFsaWRcbiAqL1xuZnVuY3Rpb24gZ2V0RGF0YVNsaWNlUmVhZGVyKGRhdGFTbGljZSwgZmllbGRUeXBlKSB7XG4gICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkJZVEU6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5BU0NJSTpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlVOREVGSU5FRDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZFVpbnQ4O1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0JZVEU6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRJbnQ4O1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0hPUlQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRVaW50MTY7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TU0hPUlQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRJbnQxNjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkxPTkc6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5JRkQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRVaW50MzI7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TTE9ORzpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEludDMyO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuTE9ORzg6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5JRkQ4OlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkVWludDY0O1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0xPTkc4OlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkSW50NjQ7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5SQVRJT05BTDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZFVpbnQzMjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNSQVRJT05BTDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEludDMyO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuRkxPQVQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRGbG9hdDMyO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuRE9VQkxFOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkRmxvYXQ2NDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBJbnZhbGlkIGZpZWxkIHR5cGU6ICR7ZmllbGRUeXBlfWApO1xuICAgIH1cbn1cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fG51bGx9IG91dFZhbHVlcyAtIE9wdGlvbmFsIHByZS1hbGxvY2F0ZWQgb3V0cHV0IGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWFkTWV0aG9kIC0gRGF0YVZpZXcgcmVhZCBtZXRob2QgKGUuZy4sIGdldFVpbnQxNilcbiAqIEBwYXJhbSB7RGF0YVNsaWNlfSBkYXRhU2xpY2UgLSBTb3VyY2UgZGF0YSBzbGljZVxuICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkVHlwZSAtIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IC0gTnVtYmVyIG9mIHZhbHVlcyB0byByZWFkXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gQnl0ZSBvZmZzZXQgdG8gc3RhcnQgcmVhZGluZ1xuICogQHBhcmFtIHt0cnVlfSBpc0FycmF5IC0gV2hldGhlciB0byBhbHdheXMgcmV0dXJuIGFuIGFycmF5ICh2cyBzaW5nbGUgdmFsdWUpXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj59IFRoZSBkZWNvZGVkIHZhbHVlKHMpXG4gKi9cbi8qKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fG51bGx9IG91dFZhbHVlcyAtIE9wdGlvbmFsIHByZS1hbGxvY2F0ZWQgb3V0cHV0IGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWFkTWV0aG9kIC0gRGF0YVZpZXcgcmVhZCBtZXRob2QgKGUuZy4sIGdldFVpbnQxNilcbiAqIEBwYXJhbSB7RGF0YVNsaWNlfSBkYXRhU2xpY2UgLSBTb3VyY2UgZGF0YSBzbGljZVxuICogQHBhcmFtIHtudW1iZXJ9IGZpZWxkVHlwZSAtIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IC0gTnVtYmVyIG9mIHZhbHVlcyB0byByZWFkXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gQnl0ZSBvZmZzZXQgdG8gc3RhcnQgcmVhZGluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNBcnJheV0gLSBXaGV0aGVyIHRvIGFsd2F5cyByZXR1cm4gYW4gYXJyYXkgKHZzIHNpbmdsZSB2YWx1ZSlcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxzdHJpbmd8bnVtYmVyfSBUaGUgZGVjb2RlZCB2YWx1ZShzKVxuICovXG4vKipcbiAqIFJlYWRzIGZpZWxkIHZhbHVlcyBmcm9tIGEgRGF0YVNsaWNlLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxudWxsfSBvdXRWYWx1ZXMgLSBPcHRpb25hbCBwcmUtYWxsb2NhdGVkIG91dHB1dCBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVhZE1ldGhvZCAtIERhdGFWaWV3IHJlYWQgbWV0aG9kIChlLmcuLCBnZXRVaW50MTYpXG4gKiBAcGFyYW0ge0RhdGFTbGljZX0gZGF0YVNsaWNlIC0gU291cmNlIGRhdGEgc2xpY2VcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5GaWVsZFR5cGV9IGZpZWxkVHlwZSAtIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IC0gTnVtYmVyIG9mIHZhbHVlcyB0byByZWFkXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gQnl0ZSBvZmZzZXQgdG8gc3RhcnQgcmVhZGluZ1xuICogQHBhcmFtIHtib29sZWFufSBbaXNBcnJheV0gLSBXaGV0aGVyIHRvIGFsd2F5cyByZXR1cm4gYW4gYXJyYXkgKHZzIHNpbmdsZSB2YWx1ZSlcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxzdHJpbmd8bnVtYmVyfSBUaGUgZGVjb2RlZCB2YWx1ZShzKVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZXMob3V0VmFsdWVzID0gbnVsbCwgcmVhZE1ldGhvZCwgZGF0YVNsaWNlLCBmaWVsZFR5cGUsIGNvdW50LCBvZmZzZXQsIGlzQXJyYXkgPSBmYWxzZSkge1xuICAgIGNvbnN0IGZpZWxkVHlwZUxlbmd0aCA9IGdldEZpZWxkVHlwZVNpemUoZmllbGRUeXBlKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBvdXRWYWx1ZXMgfHwgZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgY291bnQpO1xuICAgIC8vIGNvbnN0IHJlYWRNZXRob2QgPSBnZXREYXRhU2xpY2VSZWFkZXIoZGF0YVNsaWNlLCBmaWVsZFR5cGUpO1xuICAgIGNvbnN0IGlzUmF0aW9uYWwgPSAoZmllbGRUeXBlID09PSBmaWVsZFR5cGVzLlJBVElPTkFMIHx8IGZpZWxkVHlwZSA9PT0gZmllbGRUeXBlcy5TUkFUSU9OQUwpO1xuICAgIC8vIG5vcm1hbCBmaWVsZHNcbiAgICBpZiAoIWlzUmF0aW9uYWwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQgKyAoaSAqIGZpZWxkVHlwZUxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBSQVRJT05BTCBvciBTUkFUSU9OQUxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAyKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaV0gPSByZWFkTWV0aG9kLmNhbGwoZGF0YVNsaWNlLCBvZmZzZXQgKyAoaSAqIGZpZWxkVHlwZUxlbmd0aCkpO1xuICAgICAgICAgICAgdmFsdWVzW2kgKyAxXSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCArICgoaSAqIGZpZWxkVHlwZUxlbmd0aCkgKyA0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpZWxkVHlwZSA9PT0gZmllbGRUeXBlcy5BU0NJSSkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpLmRlY29kZSgvKiogQHR5cGUge1VpbnQ4QXJyYXl9ICovICh2YWx1ZXMpKTtcbiAgICB9XG4gICAgaWYgKGNvdW50ID09PSAxICYmICFpc0FycmF5ICYmICFpc1JhdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG4vKipcbiAqIExhemlseS1sb2FkZWQgYXJyYXkgZm9yIGxhcmdlIFRJRkYgZmllbGQgdmFsdWVzIHRoYXQgYXJlIGZldGNoZWQgb24tZGVtYW5kLlxuICogU3VwcG9ydHMgbG9hZGluZyBpbmRpdmlkdWFsIGluZGljZXMgb3IgdGhlIGVudGlyZSBhcnJheS4gVXNlcyBhIGJpdG1hcCB0byB0cmFja1xuICogd2hpY2ggdmFsdWVzIGhhdmUgYmVlbiBsb2FkZWQgdG8gYXZvaWQgcmVkdW5kYW50IGZldGNoZXMuXG4gKi9cbmNsYXNzIERlZmVycmVkQXJyYXkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBEZWZlcnJlZEFycmF5IGZvciBsYXp5LWxvYWRpbmcgb2YgbGFyZ2UgVElGRiBmaWVsZCBhcnJheXMuXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuL3NvdXJjZS9iYXNlc291cmNlLmpzXCIpLkJhc2VTb3VyY2V9IHNvdXJjZSAtIERhdGEgc291cmNlIGZvciBmZXRjaGluZ1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheU9mZnNldCAtIEJ5dGUgb2Zmc2V0IHdoZXJlIHRoZSBhcnJheSBkYXRhIHN0YXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIC0gRW5kaWFubmVzcyBvZiB0aGUgZGF0YVxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5GaWVsZFR5cGV9IGZpZWxkVHlwZSAtIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBOdW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGFycmF5XG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBhcnJheU9mZnNldCwgbGl0dGxlRW5kaWFuLCBmaWVsZFR5cGUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5hcnJheU9mZnNldCA9IGFycmF5T2Zmc2V0O1xuICAgICAgICB0aGlzLmxpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhbjtcbiAgICAgICAgdGhpcy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRhdGEgPSBnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCBsZW5ndGgpO1xuICAgICAgICB0aGlzLml0ZW1TaXplID0gZ2V0RmllbGRUeXBlU2l6ZShmaWVsZFR5cGUpO1xuICAgICAgICB0aGlzLm1hc2tCaXRtYXAgPSBuZXcgVWludDhBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gOCkpO1xuICAgICAgICB0aGlzLmZldGNoSW5kZXhQcm9taXNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mdWxsRmV0Y2hQcm9taXNlID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZHMgYWxsIHZhbHVlcyBpbiB0aGUgZGVmZXJyZWQgYXJyYXkgYXQgb25jZS5cbiAgICAgKiBTdWJzZXF1ZW50IGNhbGxzIHJldHVybiB0aGUgc2FtZSBwcm9taXNlIHRvIGF2b2lkIHJlZHVuZGFudCBmZXRjaGVzLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+Pn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIGZ1bGx5IGxvYWRlZCBhcnJheVxuICAgICAqL1xuICAgIGFzeW5jIGxvYWRBbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5mdWxsRmV0Y2hQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bGxGZXRjaFByb21pc2UgPSB0aGlzLnNvdXJjZS5mZXRjaChbe1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMuYXJyYXlPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5pdGVtU2l6ZSAqIHRoaXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIH1dKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVNsaWNlID0gbmV3IERhdGFTbGljZShkYXRhWzBdLCB0aGlzLmFycmF5T2Zmc2V0LCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2V0VmFsdWVzKHRoaXMuZGF0YSwgZ2V0RGF0YVNsaWNlUmVhZGVyKGRhdGFTbGljZSwgdGhpcy5maWVsZFR5cGUpLCBkYXRhU2xpY2UsIHRoaXMuZmllbGRUeXBlLCB0aGlzLmxlbmd0aCwgdGhpcy5hcnJheU9mZnNldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gTWFyayBhbGwgaXRlbXMgYXMgbG9hZGVkIGluIHRoZSBiaXRtYXBcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tCaXRtYXAuZmlsbCgweEZGKTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCBhbnkgcGVuZGluZyBpbmRpdmlkdWFsIGZldGNoIHByb21pc2VzIHNpbmNlIGFsbCBkYXRhIGlzIG5vdyBsb2FkZWRcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoSW5kZXhQcm9taXNlcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mdWxsRmV0Y2hQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkcyBhbmQgcmV0dXJucyBhIHNpbmdsZSB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGxvYWRlZCwgcmV0dXJucyBpdCBpbW1lZGlhdGVseS4gT3RoZXJ3aXNlLCBmZXRjaGVzIGl0XG4gICAgICogZnJvbSB0aGUgc291cmNlLiBNdWx0aXBsZSBjYWxscyBmb3IgdGhlIHNhbWUgaW5kZXggcmV1c2UgdGhlIHNhbWUgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBaZXJvLWJhc2VkIGluZGV4IG9mIHRoZSB2YWx1ZSB0byBsb2FkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyfGJpZ2ludD59IFByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSB2YWx1ZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiBpbmRleCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICovXG4gICAgYXN5bmMgZ2V0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEluZGV4ICR7aW5kZXh9IG91dCBvZiBib3VuZHMgZm9yIGxlbmd0aCAke3RoaXMuZGF0YS5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnl0ZUluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgICBjb25zdCBiaXRNYXNrID0gMSA8PCBpbmRleCAlIDg7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuYXJyYXlPZmZzZXQgKyAoaW5kZXggKiB0aGlzLml0ZW1TaXplKTtcbiAgICAgICAgaWYgKCh0aGlzLm1hc2tCaXRtYXBbYnl0ZUluZGV4XSAmIGJpdE1hc2spID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmV0Y2hJbmRleFByb21pc2VzLmhhcyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmZXRjaFByb21pc2UgPSB0aGlzLnNvdXJjZS5mZXRjaChbe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLml0ZW1TaXplLFxuICAgICAgICAgICAgICAgICAgICB9XSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhU2xpY2UgPSBuZXcgRGF0YVNsaWNlKGRhdGFbMF0sIHRoaXMuYXJyYXlPZmZzZXQgKyAoaW5kZXggKiB0aGlzLml0ZW1TaXplKSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkTWV0aG9kID0gZ2V0RGF0YVNsaWNlUmVhZGVyKGRhdGFTbGljZSwgdGhpcy5maWVsZFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrQml0bWFwW2J5dGVJbmRleF0gfD0gYml0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaEluZGV4UHJvbWlzZXMuZGVsZXRlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hJbmRleFByb21pc2VzLnNldChpbmRleCwgZmV0Y2hQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoSW5kZXhQcm9taXNlcy5nZXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZUZpbGVEaXJlY3Rvcnkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBJbWFnZUZpbGVEaXJlY3RvcnkuXG4gICAgICogQHBhcmFtIHtNYXA8c3RyaW5nfG51bWJlciwgbnVtYmVyfHN0cmluZ3xBcnJheTxudW1iZXJ8c3RyaW5nPj59IGFjdHVhbGl6ZWRGaWVsZHMgdGhlIGZpbGUgZGlyZWN0b3J5LFxuICAgICAqIG1hcHBpbmcgdGFnIG5hbWVzIHRvIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7TWFwPHN0cmluZ3xudW1iZXIsIEZ1bmN0aW9uPn0gZGVmZXJyZWRGaWVsZHMgdGhlIGRlZmVycmVkIGZpZWxkcywgbWFwcGluZyB0YWcgbmFtZXMgdG8gYXN5bmMgZnVuY3Rpb25zXG4gICAgICogQHBhcmFtIHtNYXA8c3RyaW5nfG51bWJlciwgRGVmZXJyZWRBcnJheT59IGRlZmVycmVkQXJyYXlzIHRoZSBkZWZlcnJlZCBhcnJheXMsIG1hcHBpbmcgdGFnIG5hbWVzIHRvXG4gICAgICogRGVmZXJyZWRBcnJheSBvYmplY3RzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJRkRCeXRlT2Zmc2V0IHRoZSBieXRlIG9mZnNldCB0byB0aGUgbmV4dCBJRkRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhY3R1YWxpemVkRmllbGRzLCBkZWZlcnJlZEZpZWxkcywgZGVmZXJyZWRBcnJheXMsIG5leHRJRkRCeXRlT2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuYWN0dWFsaXplZEZpZWxkcyA9IGFjdHVhbGl6ZWRGaWVsZHM7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRGaWVsZHMgPSBkZWZlcnJlZEZpZWxkcztcbiAgICAgICAgdGhpcy5kZWZlcnJlZEZpZWxkc0JlaW5nUmVzb2x2ZWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRBcnJheXMgPSBkZWZlcnJlZEFycmF5cztcbiAgICAgICAgdGhpcy5uZXh0SUZEQnl0ZU9mZnNldCA9IG5leHRJRkRCeXRlT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuVGFnTmFtZXxudW1iZXJ9IHRhZ0lkZW50aWZpZXIgVGhlIGZpZWxkIHRhZyBJRCBvciBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGZpZWxkIGV4aXN0cyAoYWN0dWFsaXplZCBvciBkZWZlcnJlZClcbiAgICAgKi9cbiAgICBoYXNUYWcodGFnSWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCB0YWcgPSByZXNvbHZlVGFnKHRhZ0lkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxpemVkRmllbGRzLmhhcyh0YWcpIHx8IHRoaXMuZGVmZXJyZWRGaWVsZHMuaGFzKHRhZykgfHwgdGhpcy5kZWZlcnJlZEFycmF5cy5oYXModGFnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25vdXNseSByZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIGdpdmVuIHRhZy4gSWYgaXQgaXMgZGVmZXJyZWQsIGFuIGVycm9yIGlzIHRocm93bi5cbiAgICAgKiBAdGVtcGxhdGUge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuRWFnZXJUYWdOYW1lIHwgaW1wb3J0KCcuL2dsb2JhbHMuanMnKS5FYWdlclRhZ30gW1Q9YW55XVxuICAgICAqIEBwYXJhbSB7VH0gdGFnSWRlbnRpZmllciBUaGUgZmllbGQgdGFnIElEIG9yIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7VCBleHRlbmRzIGltcG9ydCgnLi9nbG9iYWxzLmpzJykuVGFnTmFtZSA/IChpbXBvcnQoJy4vZ2xvYmFscy5qcycpLlRhZ1ZhbHVlPFQ+IHwgdW5kZWZpbmVkKSA6IGFueX1cbiAgICAgKiB0aGUgZmllbGQgdmFsdWUsXG4gICAgICogb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSB0YWcgaXMgZGVmZXJyZWQgYW5kIHJlcXVpcmVzIGFzeW5jaHJvbm91cyBsb2FkaW5nXG4gICAgICovXG4gICAgZ2V0VmFsdWUodGFnSWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCB0YWcgPSByZXNvbHZlVGFnKHRhZ0lkZW50aWZpZXIpO1xuICAgICAgICBpZiAodGhpcy5kZWZlcnJlZEZpZWxkcy5oYXModGFnKSB8fCB0aGlzLmRlZmVycmVkQXJyYXlzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICBjb25zdCB0YWdEZWYgPSB0YWdEZWZpbml0aW9uc1t0YWddO1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRhZ0RlZj8ubmFtZSB8fCBgVGFnJHt0YWd9YDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmllbGQgJyR7dGFnTmFtZX0nICgke3RhZ30pIGlzIGRlZmVycmVkLiBVc2UgbG9hZFZhbHVlKCkgdG8gbG9hZCBpdCBhc3luY2hyb25vdXNseS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYWN0dWFsaXplZEZpZWxkcy5oYXModGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuZ2V0KHRhZykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIGdpdmVuIHRhZy4gSWYgaXQgaXMgZGVmZXJyZWQsIGl0IHdpbGwgYmUgbG9hZGVkIGZpcnN0LlxuICAgICAqIEB0ZW1wbGF0ZSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5UYWdOYW1lfSBbVD1hbnldXG4gICAgICogQHBhcmFtIHtUfG51bWJlcn0gdGFnSWRlbnRpZmllciBUaGUgZmllbGQgdGFnIElEIG9yIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUIGV4dGVuZHMgaW1wb3J0KCcuL2dsb2JhbHMuanMnKS5UYWdOYW1lID8gKGltcG9ydCgnLi9nbG9iYWxzLmpzJykuVGFnVmFsdWU8VD4gfCB1bmRlZmluZWQpIDogYW55Pn1cbiAgICAgKiAgIHRoZSBmaWVsZCB2YWx1ZSwgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgICovXG4gICAgYXN5bmMgbG9hZFZhbHVlKHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgICAgY29uc3QgdGFnID0gcmVzb2x2ZVRhZyh0YWdJZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsaXplZEZpZWxkcy5oYXModGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodGhpcy5hY3R1YWxpemVkRmllbGRzLmdldCh0YWcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kZWZlcnJlZEZpZWxkc0JlaW5nUmVzb2x2ZWQuaGFzKHRhZykpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHRoaXMuZGVmZXJyZWRGaWVsZHNCZWluZ1Jlc29sdmVkLmdldCh0YWcpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkZXJGbiA9IHRoaXMuZGVmZXJyZWRGaWVsZHMuZ2V0KHRhZyk7XG4gICAgICAgIGlmIChsb2FkZXJGbikge1xuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZEZpZWxkcy5kZWxldGUodGFnKTtcbiAgICAgICAgICAgIC8vIFNldCBwcm9taXNlIEJFRk9SRSBzdGFydGluZyBhc3luYyB3b3JrIHRvIHByZXZlbnQgcmFjZSBjb25kaXRpb25zXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgbG9hZGVyRm4oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxpemVkRmllbGRzLnNldCh0YWcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlcnJlZEZpZWxkc0JlaW5nUmVzb2x2ZWQuZGVsZXRlKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWRGaWVsZHNCZWluZ1Jlc29sdmVkLnNldCh0YWcsIHZhbHVlUHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh2YWx1ZVByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZmVycmVkQXJyYXkgPSB0aGlzLmRlZmVycmVkQXJyYXlzLmdldCh0YWcpO1xuICAgICAgICBpZiAoZGVmZXJyZWRBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoZGVmZXJyZWRBcnJheS5sb2FkQWxsKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgYXQgYSBnaXZlbiBpbmRleCBmb3IgYSB0YWcgdGhhdCBpcyBhbiBhcnJheS4gSWYgaXQgaXMgZGVmZXJyZWQsIGl0IHdpbGwgYmUgbG9hZGVkIGZpcnN0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdGFnSWRlbnRpZmllciBUaGUgZmllbGQgdGFnIElEIG9yIG5hbWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXlcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJ8c3RyaW5nfGJpZ2ludHx1bmRlZmluZWQ+fSB0aGUgZmllbGQgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4LCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QgZXhpc3RcbiAgICAgKi9cbiAgICBhc3luYyBsb2FkVmFsdWVJbmRleGVkKHRhZ0lkZW50aWZpZXIsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHJlc29sdmVUYWcodGFnSWRlbnRpZmllcik7XG4gICAgICAgIGlmICh0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuaGFzKHRhZykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hY3R1YWxpemVkRmllbGRzLmdldCh0YWcpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodmFsdWUpW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmRlZmVycmVkQXJyYXlzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZlcnJlZEFycmF5ID0gLyoqIEB0eXBlIHtEZWZlcnJlZEFycmF5fSAqLyAodGhpcy5kZWZlcnJlZEFycmF5cy5nZXQodGFnKSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRBcnJheS5nZXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzVGFnKHRhZykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5sb2FkVmFsdWUodGFnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIEdlb1RJRkYgR2VvS2V5RGlyZWN0b3J5IHRhZyBpbnRvIGEgc3RydWN0dXJlZCBvYmplY3QuXG4gICAgICogVGhlIEdlb0tleURpcmVjdG9yeSBpcyBhIHNwZWNpYWwgVElGRiB0YWcgdGhhdCBjb250YWlucyBnZW9ncmFwaGljIG1ldGFkYXRhXG4gICAgICogaW4gYSBrZXktdmFsdWUgZm9ybWF0IGFzIGRlZmluZWQgYnkgdGhlIEdlb1RJRkYgc3BlY2lmaWNhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UGFydGlhbDxSZWNvcmQ8aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5HZW9LZXlOYW1lLCAqPj58bnVsbH0gUGFyc2VkIGdlbyBrZXkgZGlyZWN0b3J5XG4gICAgICogICAgIG1hcHBpbmcga2V5IG5hbWVzIHRvIHZhbHVlcywgb3IgbnVsbCBpZiBub3QgcHJlc2VudFxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhIHJlZmVyZW5jZWQgZ2VvIGtleSB2YWx1ZSBjYW5ub3QgYmUgcmV0cmlldmVkXG4gICAgICovXG4gICAgcGFyc2VHZW9LZXlEaXJlY3RvcnkoKSB7XG4gICAgICAgIGNvbnN0IHJhd0dlb0tleURpcmVjdG9yeSA9IHRoaXMuZ2V0VmFsdWUoJ0dlb0tleURpcmVjdG9yeScpO1xuICAgICAgICBpZiAoIXJhd0dlb0tleURpcmVjdG9yeSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEB0eXBlIHtQYXJ0aWFsPFJlY29yZDxpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkdlb0tleU5hbWUsICo+Pn0gKi9cbiAgICAgICAgY29uc3QgZ2VvS2V5RGlyZWN0b3J5ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSA0OyBpIDw9IHJhd0dlb0tleURpcmVjdG9yeVszXSAqIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gKCAvKiogQHR5cGUge1JlY29yZDxudW1iZXIsIGltcG9ydCgnLi9nbG9iYWxzLmpzJykuR2VvS2V5TmFtZT59ICovKGdlb0tleU5hbWVzKSlbcmF3R2VvS2V5RGlyZWN0b3J5W2ldXTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkVhZ2VyVGFnfSAqLyAocmF3R2VvS2V5RGlyZWN0b3J5W2kgKyAxXSkgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcmF3R2VvS2V5RGlyZWN0b3J5W2kgKyAyXTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHJhd0dlb0tleURpcmVjdG9yeVtpICsgM107XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gb2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBnZXQgdmFsdWUgb2YgZ2VvS2V5ICcke2tleX0nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKG9mZnNldCwgb2Zmc2V0ICsgY291bnQgLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUuc3ViYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIGNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2VvS2V5RGlyZWN0b3J5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2VvS2V5RGlyZWN0b3J5O1xuICAgIH1cbiAgICB0b09iamVjdCgpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi9cbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW3RhZywgdmFsdWVdIG9mIHRoaXMuYWN0dWFsaXplZEZpZWxkcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ0RlZmluaXRpb24gPSB0eXBlb2YgdGFnID09PSAnbnVtYmVyJyA/IHRhZ0RlZmluaXRpb25zW3RhZ10gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnRGVmaW5pdGlvbiA/IHRhZ0RlZmluaXRpb24ubmFtZSA6IGBUYWcke3RhZ31gO1xuICAgICAgICAgICAgb2JqW3RhZ05hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG4vKipcbiAqIFBhcnNlciBmb3IgSW1hZ2UgRmlsZSBEaXJlY3RvcmllcyAoSUZEcykuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZUZpbGVEaXJlY3RvcnlQYXJzZXIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9zb3VyY2UvYmFzZXNvdXJjZS5qc1wiKS5CYXNlU291cmNlfSBzb3VyY2UgdGhlIGRhdGEgc291cmNlIHRvIGZldGNoIGZyb21cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiB0aGUgZW5kaWFubmVzcyBvZiB0aGUgZmlsZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYmlnVGlmZiB3aGV0aGVyIHRoZSBmaWxlIGlzIGEgQmlnVElGRlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VhZ2VyPWZhbHNlXSB3aGV0aGVyIHRvIGVhZ2VybHkgZmV0Y2ggZGVmZXJyZWQgZmllbGRzLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBmYWxzZSAoZGVmYXVsdCksIHRhZ3MgYXJlIGxvYWRlZCBsYXppbHkgb24tZGVtYW5kLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB0cnVlLCBhbGwgdGFncyBhcmUgbG9hZGVkIGltbWVkaWF0ZWx5IGR1cmluZyBwYXJzaW5nLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSwgbGl0dGxlRW5kaWFuLCBiaWdUaWZmLCBlYWdlciA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLmxpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhbjtcbiAgICAgICAgdGhpcy5iaWdUaWZmID0gYmlnVGlmZjtcbiAgICAgICAgdGhpcy5lYWdlciA9IGVhZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYSBEYXRhU2xpY2UgZnJvbSB0aGUgc291cmNlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgQnl0ZSBvZmZzZXQgb2YgdGhlIHNsaWNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIExlbmd0aCBvZiB0aGUgc2xpY2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEYXRhU2xpY2U+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldFNsaWNlKG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTGVuZ3RoID0gdGhpcy5iaWdUaWZmID8gNDA0OCA6IDEwMjQ7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVNsaWNlKChhd2FpdCB0aGlzLnNvdXJjZS5mZXRjaChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlbmd0aDogdHlwZW9mIGxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgPyBsZW5ndGggOiBmYWxsYmFja0xlbmd0aCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pKVswXSwgb2Zmc2V0LCB0aGlzLmxpdHRsZUVuZGlhbiwgdGhpcy5iaWdUaWZmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zdHJ1Y3RzIHRvIHBhcnNlIGFuIGltYWdlIGZpbGUgZGlyZWN0b3J5IGF0IHRoZSBnaXZlbiBmaWxlIG9mZnNldC5cbiAgICAgKiBBcyB0aGVyZSBpcyBubyB3YXkgdG8gZW5zdXJlIHRoYXQgYSBsb2NhdGlvbiBpcyBpbmRlZWQgdGhlIHN0YXJ0IG9mIGFuIElGRCxcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIHdpdGggY2F1dGlvbiAoZS5nIG9ubHkgdXNpbmcgdGhlIElGRCBvZmZzZXRzIGZyb21cbiAgICAgKiB0aGUgaGVhZGVycyBvciBvdGhlciBJRkRzKS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IHRoZSBvZmZzZXQgdG8gcGFyc2UgdGhlIElGRCBhdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEltYWdlRmlsZURpcmVjdG9yeT59IHRoZSBwYXJzZWQgSUZEXG4gICAgICovXG4gICAgYXN5bmMgcGFyc2VGaWxlRGlyZWN0b3J5QXQob2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGVudHJ5U2l6ZSA9IHRoaXMuYmlnVGlmZiA/IDIwIDogMTI7XG4gICAgICAgIGNvbnN0IG9mZnNldFNpemUgPSB0aGlzLmJpZ1RpZmYgPyA4IDogMjtcbiAgICAgICAgbGV0IGRhdGFTbGljZSA9IGF3YWl0IHRoaXMuZ2V0U2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgY29uc3QgbnVtRGlyRW50cmllcyA9IHRoaXMuYmlnVGlmZlxuICAgICAgICAgICAgPyBkYXRhU2xpY2UucmVhZFVpbnQ2NChvZmZzZXQpXG4gICAgICAgICAgICA6IGRhdGFTbGljZS5yZWFkVWludDE2KG9mZnNldCk7XG4gICAgICAgIC8vIGlmIHRoZSBzbGljZSBkb2VzIG5vdCBjb3ZlciB0aGUgd2hvbGUgSUZELCByZXF1ZXN0IGEgYmlnZ2VyIHNsaWNlLCB3aGVyZSB0aGVcbiAgICAgICAgLy8gd2hvbGUgSUZEIGZpdHM6IG51bSBvZiBlbnRyaWVzICsgbiB4IHRhZyBsZW5ndGggKyBvZmZzZXQgdG8gbmV4dCBJRkRcbiAgICAgICAgY29uc3QgYnl0ZVNpemUgPSBudW1EaXJFbnRyaWVzICogKGVudHJ5U2l6ZSArICh0aGlzLmJpZ1RpZmYgPyAxNiA6IDYpKTtcbiAgICAgICAgaWYgKCFkYXRhU2xpY2UuY292ZXJzKG9mZnNldCwgYnl0ZVNpemUpKSB7XG4gICAgICAgICAgICBkYXRhU2xpY2UgPSBhd2FpdCB0aGlzLmdldFNsaWNlKG9mZnNldCwgYnl0ZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdHVhbGl6ZWRGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGRlZmVycmVkRmllbGRzID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBkZWZlcnJlZEFycmF5cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbG9vcCBvdmVyIHRoZSBJRkQgYW5kIGNyZWF0ZSBhIGZpbGUgZGlyZWN0b3J5IG9iamVjdFxuICAgICAgICBsZXQgaSA9IG9mZnNldCArICh0aGlzLmJpZ1RpZmYgPyA4IDogMik7XG4gICAgICAgIGZvciAobGV0IGVudHJ5Q291bnQgPSAwOyBlbnRyeUNvdW50IDwgbnVtRGlyRW50cmllczsgaSArPSBlbnRyeVNpemUsICsrZW50cnlDb3VudCkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRUYWcgPSBkYXRhU2xpY2UucmVhZFVpbnQxNihpKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVHlwZSA9IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5GaWVsZFR5cGV9ICovIChkYXRhU2xpY2UucmVhZFVpbnQxNihpICsgMikpO1xuICAgICAgICAgICAgY29uc3QgdHlwZUNvdW50ID0gdGhpcy5iaWdUaWZmXG4gICAgICAgICAgICAgICAgPyBkYXRhU2xpY2UucmVhZFVpbnQ2NChpICsgNClcbiAgICAgICAgICAgICAgICA6IGRhdGFTbGljZS5yZWFkVWludDMyKGkgKyA0KTtcbiAgICAgICAgICAgIGxldCBmaWVsZFZhbHVlcyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgZGVmZXJyZWRGaWVsZFZhbHVlcyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgZGVmZXJyZWRBcnJheSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFR5cGVMZW5ndGggPSBnZXRGaWVsZFR5cGVTaXplKGZpZWxkVHlwZSk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZU9mZnNldCA9IGkgKyAodGhpcy5iaWdUaWZmID8gMTIgOiA4KTtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSB0YWdEZWZpbml0aW9uc1tmaWVsZFRhZ10/LmlzQXJyYXk7XG4gICAgICAgICAgICBjb25zdCBlYWdlciA9IHRhZ0RlZmluaXRpb25zW2ZpZWxkVGFnXT8uZWFnZXIgfHwgdGhpcy5lYWdlcjtcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGRpcmVjdGx5IGVuY29kZWQgaW4gdGhlIHRhZyBvciByZWZlcnMgdG8gYVxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGV4dGVybmFsIGJ5dGUgcmFuZ2VcbiAgICAgICAgICAgIGlmIChmaWVsZFR5cGVMZW5ndGggKiB0eXBlQ291bnQgPD0gKHRoaXMuYmlnVGlmZiA/IDggOiA0KSkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gZ2V0VmFsdWVzKGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIHR5cGVDb3VudCksIGdldERhdGFTbGljZVJlYWRlcihkYXRhU2xpY2UsIGZpZWxkVHlwZSksIGRhdGFTbGljZSwgZmllbGRUeXBlLCB0eXBlQ291bnQsIHZhbHVlT2Zmc2V0LCBpc0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlc29sdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgYWN0dWFsIGJ5dGUgcmFuZ2VcbiAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWxPZmZzZXQgPSBkYXRhU2xpY2UucmVhZE9mZnNldCh2YWx1ZU9mZnNldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZ2V0RmllbGRUeXBlU2l6ZShmaWVsZFR5cGUpICogdHlwZUNvdW50O1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrLCB3aGV0aGVyIHdlIGFjdHVhbGx5IGNvdmVyIHRoZSByZWZlcmVuY2VkIGJ5dGUgcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVNsaWNlLmNvdmVycyhhY3R1YWxPZmZzZXQsIGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSBnZXRWYWx1ZXMoZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgdHlwZUNvdW50KSwgZ2V0RGF0YVNsaWNlUmVhZGVyKGRhdGFTbGljZSwgZmllbGRUeXBlKSwgZGF0YVNsaWNlLCBmaWVsZFR5cGUsIHR5cGVDb3VudCwgYWN0dWFsT2Zmc2V0LCBpc0FycmF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWFnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZWFnZXIgZXZhbHVhdGlvbjogZmV0Y2ggdGhlIGRhdGEgcmlnaHQgbm93XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGluc3RlYWQgb2YgZmV0Y2hpbmcgdGhlIHNsaWNlIHJpZ2h0IGhlcmUsIGNvbGxlY3QgYWxsIHNsaWNlcyBhbmQgZmV0Y2ggdGhlbSB0b2dldGhlclxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyBjb25qb2luZWQgcmVxdWVzdHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGREYXRhU2xpY2UgPSBhd2FpdCB0aGlzLmdldFNsaWNlKGFjdHVhbE9mZnNldCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSBnZXRWYWx1ZXMoZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgdHlwZUNvdW50KSwgZ2V0RGF0YVNsaWNlUmVhZGVyKGZpZWxkRGF0YVNsaWNlLCBmaWVsZFR5cGUpLCBmaWVsZERhdGFTbGljZSwgZmllbGRUeXBlLCB0eXBlQ291bnQsIGFjdHVhbE9mZnNldCwgaXNBcnJheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRBcnJheSA9IG5ldyBEZWZlcnJlZEFycmF5KHRoaXMuc291cmNlLCBhY3R1YWxPZmZzZXQsIHRoaXMubGl0dGxlRW5kaWFuLCBmaWVsZFR5cGUsIHR5cGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZEZpZWxkVmFsdWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGREYXRhU2xpY2UgPSBhd2FpdCB0aGlzLmdldFNsaWNlKGFjdHVhbE9mZnNldCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZXMoZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgdHlwZUNvdW50KSwgZ2V0RGF0YVNsaWNlUmVhZGVyKGZpZWxkRGF0YVNsaWNlLCBmaWVsZFR5cGUpLCBmaWVsZERhdGFTbGljZSwgZmllbGRUeXBlLCB0eXBlQ291bnQsIGFjdHVhbE9mZnNldCwgaXNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsaXplZEZpZWxkcy5zZXQoZmllbGRUYWcsIGZpZWxkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRlZmVycmVkRmllbGRWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZEZpZWxkcy5zZXQoZmllbGRUYWcsIGRlZmVycmVkRmllbGRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGVmZXJyZWRBcnJheSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkQXJyYXlzLnNldChmaWVsZFRhZywgZGVmZXJyZWRBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV4dElGREJ5dGVPZmZzZXQgPSBkYXRhU2xpY2UucmVhZE9mZnNldChvZmZzZXQgKyBvZmZzZXRTaXplICsgKGVudHJ5U2l6ZSAqIG51bURpckVudHJpZXMpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZUZpbGVEaXJlY3RvcnkoYWN0dWFsaXplZEZpZWxkcywgZGVmZXJyZWRGaWVsZHMsIGRlZmVycmVkQXJyYXlzLCBuZXh0SUZEQnl0ZU9mZnNldCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2VmaWxlZGlyZWN0b3J5LmpzLm1hcCIsIi8qKlxuICogQG1vZHVsZSByZXNhbXBsZVxuICovXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlc1BlclBpeGVsPTFdXG4gKi9cbmZ1bmN0aW9uIGNvcHlOZXdTaXplKGFycmF5LCB3aWR0aCwgaGVpZ2h0LCBzYW1wbGVzUGVyUGl4ZWwgPSAxKSB7XG4gICAgcmV0dXJuIG5ldyAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGFycmF5KS5jb25zdHJ1Y3Rvcikod2lkdGggKiBoZWlnaHQgKiBzYW1wbGVzUGVyUGl4ZWwpO1xufVxuLyoqXG4gKiBSZXNhbXBsZSB0aGUgaW5wdXQgYXJyYXlzIHVzaW5nIG5lYXJlc3QgbmVpZ2hib3IgdmFsdWUgc2VsZWN0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVtdfSB2YWx1ZUFycmF5cyBUaGUgaW5wdXQgYXJyYXlzIHRvIHJlc2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5XaWR0aCBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbkhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0V2lkdGggVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0SGVpZ2h0IFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVtdfSBUaGUgcmVzYW1wbGVkIHJhc3RlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2FtcGxlTmVhcmVzdCh2YWx1ZUFycmF5cywgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQpIHtcbiAgICBjb25zdCByZWxYID0gaW5XaWR0aCAvIG91dFdpZHRoO1xuICAgIGNvbnN0IHJlbFkgPSBpbkhlaWdodCAvIG91dEhlaWdodDtcbiAgICByZXR1cm4gdmFsdWVBcnJheXMubWFwKChhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcnJheSA9IGNvcHlOZXdTaXplKGFycmF5LCBvdXRXaWR0aCwgb3V0SGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBvdXRIZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgY29uc3QgY3kgPSBNYXRoLm1pbihNYXRoLnJvdW5kKHJlbFkgKiB5KSwgaW5IZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgb3V0V2lkdGg7ICsreCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN4ID0gTWF0aC5taW4oTWF0aC5yb3VuZChyZWxYICogeCksIGluV2lkdGggLSAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFycmF5WyhjeSAqIGluV2lkdGgpICsgY3hdO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5Wyh5ICogb3V0V2lkdGgpICsgeF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSk7XG59XG4vLyBzaW1wbGUgbGluZWFyIGludGVycG9sYXRpb24sIGNvZGUgZnJvbTpcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpbmVhcl9pbnRlcnBvbGF0aW9uI1Byb2dyYW1taW5nX2xhbmd1YWdlX3N1cHBvcnRcbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0ge251bWJlcn0gdjFcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKi9cbmZ1bmN0aW9uIGxlcnAodjAsIHYxLCB0KSB7XG4gICAgcmV0dXJuICgoMSAtIHQpICogdjApICsgKHQgKiB2MSk7XG59XG4vKipcbiAqIFJlc2FtcGxlIHRoZSBpbnB1dCBhcnJheXMgdXNpbmcgYmlsaW5lYXIgaW50ZXJwb2xhdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlbXX0gdmFsdWVBcnJheXMgVGhlIGlucHV0IGFycmF5cyB0byByZXNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGluV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gaW5IZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dFdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dEhlaWdodCBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlbXX0gVGhlIHJlc2FtcGxlZCByYXN0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNhbXBsZUJpbGluZWFyKHZhbHVlQXJyYXlzLCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCkge1xuICAgIGNvbnN0IHJlbFggPSBpbldpZHRoIC8gb3V0V2lkdGg7XG4gICAgY29uc3QgcmVsWSA9IGluSGVpZ2h0IC8gb3V0SGVpZ2h0O1xuICAgIHJldHVybiB2YWx1ZUFycmF5cy5tYXAoKGFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gY29weU5ld1NpemUoYXJyYXksIG91dFdpZHRoLCBvdXRIZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG91dEhlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICBjb25zdCByYXdZID0gcmVsWSAqIHk7XG4gICAgICAgICAgICBjb25zdCB5bCA9IE1hdGguZmxvb3IocmF3WSk7XG4gICAgICAgICAgICBjb25zdCB5aCA9IE1hdGgubWluKE1hdGguY2VpbChyYXdZKSwgKGluSGVpZ2h0IC0gMSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBvdXRXaWR0aDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmF3WCA9IHJlbFggKiB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gcmF3WCAlIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeGwgPSBNYXRoLmZsb29yKHJhd1gpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhoID0gTWF0aC5taW4oTWF0aC5jZWlsKHJhd1gpLCAoaW5XaWR0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsbCA9IGFycmF5Wyh5bCAqIGluV2lkdGgpICsgeGxdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhsID0gYXJyYXlbKHlsICogaW5XaWR0aCkgKyB4aF07XG4gICAgICAgICAgICAgICAgY29uc3QgbGggPSBhcnJheVsoeWggKiBpbldpZHRoKSArIHhsXTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaCA9IGFycmF5Wyh5aCAqIGluV2lkdGgpICsgeGhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGVycChsZXJwKGxsLCBobCwgdHgpLCBsZXJwKGxoLCBoaCwgdHgpLCByYXdZICUgMSk7XG4gICAgICAgICAgICAgICAgbmV3QXJyYXlbKHkgKiBvdXRXaWR0aCkgKyB4XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9KTtcbn1cbi8qKlxuICogUmVzYW1wbGUgdGhlIGlucHV0IGFycmF5cyB1c2luZyB0aGUgc2VsZWN0ZWQgcmVzYW1wbGluZyBtZXRob2QuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5W119IHZhbHVlQXJyYXlzIFRoZSBpbnB1dCBhcnJheXMgdG8gcmVzYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGluSGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRXaWR0aCBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRIZWlnaHQgVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2QgPSAnbmVhcmVzdCddIFRoZSBkZXNpcmVkIHJlc2FtcGxpbmcgbWV0aG9kXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlbXX0gVGhlIHJlc2FtcGxlZCByYXN0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNhbXBsZSh2YWx1ZUFycmF5cywgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQsIG1ldGhvZCA9ICduZWFyZXN0Jykge1xuICAgIHN3aXRjaCAobWV0aG9kLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnbmVhcmVzdCc6XG4gICAgICAgICAgICByZXR1cm4gcmVzYW1wbGVOZWFyZXN0KHZhbHVlQXJyYXlzLCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCk7XG4gICAgICAgIGNhc2UgJ2JpbGluZWFyJzpcbiAgICAgICAgY2FzZSAnbGluZWFyJzpcbiAgICAgICAgICAgIHJldHVybiByZXNhbXBsZUJpbGluZWFyKHZhbHVlQXJyYXlzLCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHJlc2FtcGxpbmcgbWV0aG9kOiAnJHttZXRob2R9J2ApO1xuICAgIH1cbn1cbi8qKlxuICogUmVzYW1wbGUgdGhlIHBpeGVsIGludGVybGVhdmVkIGlucHV0IGFycmF5IHVzaW5nIG5lYXJlc3QgbmVpZ2hib3IgdmFsdWUgc2VsZWN0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gdmFsdWVBcnJheSBUaGUgaW5wdXQgYXJyYXkgdG8gcmVzYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGluSGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRXaWR0aCBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRIZWlnaHQgVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHNhbXBsZXMgVGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbCBmb3IgcGl4ZWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIGludGVybGVhdmVkIGRhdGFcbiAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gVGhlIHJlc2FtcGxlZCByYXN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2FtcGxlTmVhcmVzdEludGVybGVhdmVkKHZhbHVlQXJyYXksIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzKSB7XG4gICAgY29uc3QgcmVsWCA9IGluV2lkdGggLyBvdXRXaWR0aDtcbiAgICBjb25zdCByZWxZID0gaW5IZWlnaHQgLyBvdXRIZWlnaHQ7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBjb3B5TmV3U2l6ZSh2YWx1ZUFycmF5LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzKTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG91dEhlaWdodDsgKyt5KSB7XG4gICAgICAgIGNvbnN0IGN5ID0gTWF0aC5taW4oTWF0aC5yb3VuZChyZWxZICogeSksIGluSGVpZ2h0IC0gMSk7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgb3V0V2lkdGg7ICsreCkge1xuICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLm1pbihNYXRoLnJvdW5kKHJlbFggKiB4KSwgaW5XaWR0aCAtIDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlQXJyYXlbKGN5ICogaW5XaWR0aCAqIHNhbXBsZXMpICsgKGN4ICogc2FtcGxlcykgKyBpXTtcbiAgICAgICAgICAgICAgICBuZXdBcnJheVsoeSAqIG91dFdpZHRoICogc2FtcGxlcykgKyAoeCAqIHNhbXBsZXMpICsgaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG59XG4vKipcbiAqIFJlc2FtcGxlIHRoZSBwaXhlbCBpbnRlcmxlYXZlZCBpbnB1dCBhcnJheSB1c2luZyBiaWxpbmVhciBpbnRlcnBvbGF0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gdmFsdWVBcnJheSBUaGUgaW5wdXQgYXJyYXkgdG8gcmVzYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGluSGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRXaWR0aCBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRIZWlnaHQgVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHNhbXBsZXMgVGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbCBmb3IgcGl4ZWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIGludGVybGVhdmVkIGRhdGFcbiAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gVGhlIHJlc2FtcGxlZCByYXN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2FtcGxlQmlsaW5lYXJJbnRlcmxlYXZlZCh2YWx1ZUFycmF5LCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcykge1xuICAgIGNvbnN0IHJlbFggPSBpbldpZHRoIC8gb3V0V2lkdGg7XG4gICAgY29uc3QgcmVsWSA9IGluSGVpZ2h0IC8gb3V0SGVpZ2h0O1xuICAgIGNvbnN0IG5ld0FycmF5ID0gY29weU5ld1NpemUodmFsdWVBcnJheSwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcyk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBvdXRIZWlnaHQ7ICsreSkge1xuICAgICAgICBjb25zdCByYXdZID0gcmVsWSAqIHk7XG4gICAgICAgIGNvbnN0IHlsID0gTWF0aC5mbG9vcihyYXdZKTtcbiAgICAgICAgY29uc3QgeWggPSBNYXRoLm1pbihNYXRoLmNlaWwocmF3WSksIChpbkhlaWdodCAtIDEpKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBvdXRXaWR0aDsgKyt4KSB7XG4gICAgICAgICAgICBjb25zdCByYXdYID0gcmVsWCAqIHg7XG4gICAgICAgICAgICBjb25zdCB0eCA9IHJhd1ggJSAxO1xuICAgICAgICAgICAgY29uc3QgeGwgPSBNYXRoLmZsb29yKHJhd1gpO1xuICAgICAgICAgICAgY29uc3QgeGggPSBNYXRoLm1pbihNYXRoLmNlaWwocmF3WCksIChpbldpZHRoIC0gMSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsbCA9IHZhbHVlQXJyYXlbKHlsICogaW5XaWR0aCAqIHNhbXBsZXMpICsgKHhsICogc2FtcGxlcykgKyBpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBobCA9IHZhbHVlQXJyYXlbKHlsICogaW5XaWR0aCAqIHNhbXBsZXMpICsgKHhoICogc2FtcGxlcykgKyBpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaCA9IHZhbHVlQXJyYXlbKHloICogaW5XaWR0aCAqIHNhbXBsZXMpICsgKHhsICogc2FtcGxlcykgKyBpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaCA9IHZhbHVlQXJyYXlbKHloICogaW5XaWR0aCAqIHNhbXBsZXMpICsgKHhoICogc2FtcGxlcykgKyBpXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxlcnAobGVycChsbCwgaGwsIHR4KSwgbGVycChsaCwgaGgsIHR4KSwgcmF3WSAlIDEpO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5Wyh5ICogb3V0V2lkdGggKiBzYW1wbGVzKSArICh4ICogc2FtcGxlcykgKyBpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbn1cbi8qKlxuICogUmVzYW1wbGUgdGhlIHBpeGVsIGludGVybGVhdmVkIGlucHV0IGFycmF5IHVzaW5nIHRoZSBzZWxlY3RlZCByZXNhbXBsaW5nIG1ldGhvZC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IHZhbHVlQXJyYXkgVGhlIGlucHV0IGFycmF5IHRvIHJlc2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5XaWR0aCBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbkhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0V2lkdGggVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0SGVpZ2h0IFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBzYW1wbGVzIFRoZSBudW1iZXIgb2Ygc2FtcGxlcyBwZXIgcGl4ZWwgZm9yIHBpeGVsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVybGVhdmVkIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kID0gJ25lYXJlc3QnXSBUaGUgZGVzaXJlZCByZXNhbXBsaW5nIG1ldGhvZFxuICogQHJldHVybnMge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSBUaGUgcmVzYW1wbGVkIHJhc3RlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2FtcGxlSW50ZXJsZWF2ZWQodmFsdWVBcnJheSwgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMsIG1ldGhvZCA9ICduZWFyZXN0Jykge1xuICAgIHN3aXRjaCAobWV0aG9kLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnbmVhcmVzdCc6XG4gICAgICAgICAgICByZXR1cm4gcmVzYW1wbGVOZWFyZXN0SW50ZXJsZWF2ZWQodmFsdWVBcnJheSwgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMpO1xuICAgICAgICBjYXNlICdiaWxpbmVhcic6XG4gICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICByZXR1cm4gcmVzYW1wbGVCaWxpbmVhckludGVybGVhdmVkKHZhbHVlQXJyYXksIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcmVzYW1wbGluZyBtZXRob2Q6ICcke21ldGhvZH0nYCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzYW1wbGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGZyb21XaGl0ZUlzWmVybyhyYXN0ZXIsIG1heCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmFzdGVyO1xuICAgIGNvbnN0IHJnYlJhc3RlciA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMyk7XG4gICAgbGV0IHZhbHVlO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHJhc3Rlci5sZW5ndGg7ICsraSwgaiArPSAzKSB7XG4gICAgICAgIHZhbHVlID0gMjU2IC0gKHJhc3RlcltpXSAvIG1heCkgKiAyNTY7XG4gICAgICAgIHJnYlJhc3RlcltqXSA9IHZhbHVlO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDFdID0gdmFsdWU7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMl0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJnYlJhc3Rlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQmxhY2tJc1plcm8ocmFzdGVyLCBtYXgpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJhc3RlcjtcbiAgICBjb25zdCByZ2JSYXN0ZXIgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xuICAgIGxldCB2YWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCByYXN0ZXIubGVuZ3RoOyArK2ksIGogKz0gMykge1xuICAgICAgICB2YWx1ZSA9IChyYXN0ZXJbaV0gLyBtYXgpICogMjU2O1xuICAgICAgICByZ2JSYXN0ZXJbal0gPSB2YWx1ZTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAxXSA9IHZhbHVlO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDJdID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZ2JSYXN0ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbVBhbGV0dGUocmFzdGVyLCBjb2xvck1hcCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmFzdGVyO1xuICAgIGNvbnN0IHJnYlJhc3RlciA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMyk7XG4gICAgY29uc3QgZ3JlZW5PZmZzZXQgPSBjb2xvck1hcC5sZW5ndGggLyAzO1xuICAgIGNvbnN0IGJsdWVPZmZzZXQgPSAoY29sb3JNYXAubGVuZ3RoIC8gMykgKiAyO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHJhc3Rlci5sZW5ndGg7ICsraSwgaiArPSAzKSB7XG4gICAgICAgIGNvbnN0IG1hcEluZGV4ID0gcmFzdGVyW2ldO1xuICAgICAgICByZ2JSYXN0ZXJbal0gPSAoY29sb3JNYXBbbWFwSW5kZXhdIC8gNjU1MzYpICogMjU2O1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDFdID0gKGNvbG9yTWFwW21hcEluZGV4ICsgZ3JlZW5PZmZzZXRdIC8gNjU1MzYpICogMjU2O1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDJdID0gKGNvbG9yTWFwW21hcEluZGV4ICsgYmx1ZU9mZnNldF0gLyA2NTUzNikgKiAyNTY7XG4gICAgfVxuICAgIHJldHVybiByZ2JSYXN0ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUNNWUsoY215a1Jhc3Rlcikge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY215a1Jhc3RlcjtcbiAgICBjb25zdCByZ2JSYXN0ZXIgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGNteWtSYXN0ZXIubGVuZ3RoOyBpICs9IDQsIGogKz0gMykge1xuICAgICAgICBjb25zdCBjID0gY215a1Jhc3RlcltpXTtcbiAgICAgICAgY29uc3QgbSA9IGNteWtSYXN0ZXJbaSArIDFdO1xuICAgICAgICBjb25zdCB5ID0gY215a1Jhc3RlcltpICsgMl07XG4gICAgICAgIGNvbnN0IGsgPSBjbXlrUmFzdGVyW2kgKyAzXTtcbiAgICAgICAgcmdiUmFzdGVyW2pdID0gMjU1ICogKCgyNTUgLSBjKSAvIDI1NikgKiAoKDI1NSAtIGspIC8gMjU2KTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAxXSA9IDI1NSAqICgoMjU1IC0gbSkgLyAyNTYpICogKCgyNTUgLSBrKSAvIDI1Nik7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMl0gPSAyNTUgKiAoKDI1NSAtIHkpIC8gMjU2KSAqICgoMjU1IC0gaykgLyAyNTYpO1xuICAgIH1cbiAgICByZXR1cm4gcmdiUmFzdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21ZQ2JDcih5Q2JDclJhc3Rlcikge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0geUNiQ3JSYXN0ZXI7XG4gICAgY29uc3QgcmdiUmFzdGVyID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHdpZHRoICogaGVpZ2h0ICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgeUNiQ3JSYXN0ZXIubGVuZ3RoOyBpICs9IDMsIGogKz0gMykge1xuICAgICAgICBjb25zdCB5ID0geUNiQ3JSYXN0ZXJbaV07XG4gICAgICAgIGNvbnN0IGNiID0geUNiQ3JSYXN0ZXJbaSArIDFdO1xuICAgICAgICBjb25zdCBjciA9IHlDYkNyUmFzdGVyW2kgKyAyXTtcbiAgICAgICAgcmdiUmFzdGVyW2pdID0geSArIDEuNDAyICogKGNyIC0gMHg4MCk7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMV0gPSB5IC0gMC4zNDQxNCAqIChjYiAtIDB4ODApIC0gMC43MTQxNCAqIChjciAtIDB4ODApO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDJdID0geSArIDEuNzcyICogKGNiIC0gMHg4MCk7XG4gICAgfVxuICAgIHJldHVybiByZ2JSYXN0ZXI7XG59XG5jb25zdCBYbiA9IDAuOTUwNDc7XG5jb25zdCBZbiA9IDEuMDtcbmNvbnN0IFpuID0gMS4wODg4Mztcbi8vIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNS9yZ2ItbGFiL2Jsb2IvbWFzdGVyL2NvbG9yLmpzXG5leHBvcnQgZnVuY3Rpb24gZnJvbUNJRUxhYihjaWVMYWJSYXN0ZXIpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNpZUxhYlJhc3RlcjtcbiAgICBjb25zdCByZ2JSYXN0ZXIgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IGNpZUxhYlJhc3Rlci5sZW5ndGg7IGkgKz0gMywgaiArPSAzKSB7XG4gICAgICAgIGNvbnN0IEwgPSBjaWVMYWJSYXN0ZXJbaSArIDBdO1xuICAgICAgICBjb25zdCBhXyA9IChjaWVMYWJSYXN0ZXJbaSArIDFdIDw8IDI0KSA+PiAyNDsgLy8gY29udmVyc2lvbiBmcm9tIHVpbnQ4IHRvIGludDhcbiAgICAgICAgY29uc3QgYl8gPSAoY2llTGFiUmFzdGVyW2kgKyAyXSA8PCAyNCkgPj4gMjQ7IC8vIHNhbWVcbiAgICAgICAgbGV0IHkgPSAoTCArIDE2KSAvIDExNjtcbiAgICAgICAgbGV0IHggPSBhXyAvIDUwMCArIHk7XG4gICAgICAgIGxldCB6ID0geSAtIGJfIC8gMjAwO1xuICAgICAgICBsZXQgcjtcbiAgICAgICAgbGV0IGc7XG4gICAgICAgIGxldCBiO1xuICAgICAgICB4ID0gWG4gKiAoeCAqIHggKiB4ID4gMC4wMDg4NTYgPyB4ICogeCAqIHggOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3KTtcbiAgICAgICAgeSA9IFluICogKHkgKiB5ICogeSA+IDAuMDA4ODU2ID8geSAqIHkgKiB5IDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nyk7XG4gICAgICAgIHogPSBabiAqICh6ICogeiAqIHogPiAwLjAwODg1NiA/IHogKiB6ICogeiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODcpO1xuICAgICAgICByID0geCAqIDMuMjQwNiArIHkgKiAtMS41MzcyICsgeiAqIC0wLjQ5ODY7XG4gICAgICAgIGcgPSB4ICogLTAuOTY4OSArIHkgKiAxLjg3NTggKyB6ICogMC4wNDE1O1xuICAgICAgICBiID0geCAqIDAuMDU1NyArIHkgKiAtMC4yMDQgKyB6ICogMS4wNTc7XG4gICAgICAgIHIgPSByID4gMC4wMDMxMzA4ID8gMS4wNTUgKiByICoqICgxIC8gMi40KSAtIDAuMDU1IDogMTIuOTIgKiByO1xuICAgICAgICBnID0gZyA+IDAuMDAzMTMwOCA/IDEuMDU1ICogZyAqKiAoMSAvIDIuNCkgLSAwLjA1NSA6IDEyLjkyICogZztcbiAgICAgICAgYiA9IGIgPiAwLjAwMzEzMDggPyAxLjA1NSAqIGIgKiogKDEgLyAyLjQpIC0gMC4wNTUgOiAxMi45MiAqIGI7XG4gICAgICAgIHJnYlJhc3RlcltqXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHIpKSAqIDI1NTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAxXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGcpKSAqIDI1NTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAyXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGIpKSAqIDI1NTtcbiAgICB9XG4gICAgcmV0dXJuIHJnYlJhc3Rlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJnYi5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlU291cmNlIH0gZnJvbSAnLi9iYXNlc291cmNlLmpzJztcbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tICcuLi91dGlscy5qcyc7XG5jbGFzcyBBcnJheUJ1ZmZlclNvdXJjZSBleHRlbmRzIEJhc2VTb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGFycmF5QnVmZmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2V9IHNsaWNlXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlV2l0aERhdGE+fVxuICAgICAqL1xuICAgIGZldGNoU2xpY2Uoc2xpY2UsIHNpZ25hbCkge1xuICAgICAgICBpZiAoc2lnbmFsICYmIHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQWJvcnRFcnJvcignUmVxdWVzdCBhYm9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLmFycmF5QnVmZmVyLnNsaWNlKHNsaWNlLm9mZnNldCwgc2xpY2Uub2Zmc2V0ICsgc2xpY2UubGVuZ3RoKSxcbiAgICAgICAgICAgIG9mZnNldDogc2xpY2Uub2Zmc2V0LFxuICAgICAgICAgICAgbGVuZ3RoOiBzbGljZS5sZW5ndGgsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCdWZmZXJTb3VyY2UoYXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyU291cmNlKGFycmF5QnVmZmVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5YnVmZmVyLmpzLm1hcCIsIi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2xpY2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGhcbiAqL1xuLyoqIEB0eXBlZGVmIHtTbGljZSAmIHtkYXRhOiBBcnJheUJ1ZmZlckxpa2V9fSBTbGljZVdpdGhEYXRhICovXG5leHBvcnQgY2xhc3MgQmFzZVNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheTxTbGljZT59IHNsaWNlc1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXJMaWtlW10+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoKHNsaWNlcywgc2lnbmFsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzbGljZXMubWFwKGFzeW5jIChzbGljZSkgPT4gKGF3YWl0IHRoaXMuZmV0Y2hTbGljZShzbGljZSwgc2lnbmFsKSkuZGF0YSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NsaWNlfSBzbGljZVxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtfc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFNsaWNlV2l0aERhdGE+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoU2xpY2Uoc2xpY2UsIF9zaWduYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaGluZyBvZiBzbGljZSAke3NsaWNlfSBub3QgcG9zc2libGUsIG5vdCBpbXBsZW1lbnRlZGApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaWxlc2l6ZSBpZiBhbHJlYWR5IGRldGVybWluZWQgYW5kIG51bGwgb3RoZXJ3aXNlXG4gICAgICogQHJldHVybnMge251bWJlcnxudWxsfVxuICAgICAqL1xuICAgIGdldCBmaWxlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICAvLyBuby1vcCBieSBkZWZhdWx0XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZXNvdXJjZS5qcy5tYXAiLCJpbXBvcnQgUXVpY2tMUlUgZnJvbSAncXVpY2stbHJ1JztcbmltcG9ydCB7IEFib3J0RXJyb3IsIEFnZ3JlZ2F0ZUVycm9yLCB3YWl0LCB6aXAgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBCYXNlU291cmNlIH0gZnJvbSAnLi9iYXNlc291cmNlLmpzJztcbmNsYXNzIEJsb2NrIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9mZnNldCwgbGVuZ3RoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIHRvcCBieXRlIGJvcmRlclxuICAgICAqL1xuICAgIGdldCB0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoO1xuICAgIH1cbn1cbmNsYXNzIEJsb2NrR3JvdXAge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBibG9ja0lkc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9mZnNldCwgbGVuZ3RoLCBibG9ja0lkcykge1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuYmxvY2tJZHMgPSBibG9ja0lkcztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmxvY2tlZFNvdXJjZSBleHRlbmRzIEJhc2VTb3VyY2Uge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCYXNlU291cmNlfSBzb3VyY2UgVGhlIHVuZGVybHlpbmcgc291cmNlIHRoYXQgc2hhbGwgYmUgYmxvY2tlZCBhbmQgY2FjaGVkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuYmxvY2tTaXplXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5jYWNoZVNpemVdXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCB7IGJsb2NrU2l6ZSA9IDY1NTM2LCBjYWNoZVNpemUgPSAxMDAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja0NhY2hlID0gbmV3IFF1aWNrTFJVKHtcbiAgICAgICAgICAgIG1heFNpemU6IGNhY2hlU2l6ZSxcbiAgICAgICAgICAgIG9uRXZpY3Rpb246IChibG9ja0lkLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZpY3RlZEJsb2Nrcy5zZXQoYmxvY2tJZCwgYmxvY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKiBAdHlwZSB7TWFwPG51bWJlciwgQmxvY2s+fSAqL1xuICAgICAgICB0aGlzLmV2aWN0ZWRCbG9ja3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIG1hcHBpbmcgYmxvY2tJZCAtPiBCbG9jayBpbnN0YW5jZVxuICAgICAgICB0aGlzLmJsb2NrUmVxdWVzdHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIHNldCBvZiBibG9ja0lkcyBtaXNzaW5nIGZvciB0aGUgY3VycmVudCByZXF1ZXN0c1xuICAgICAgICB0aGlzLmJsb2NrSWRzVG9GZXRjaCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5hYm9ydGVkQmxvY2tJZHMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldCBmaWxlU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmZpbGVTaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vYmFzZXNvdXJjZS5qc1wiKS5TbGljZVtdfSBzbGljZXNcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXJbXT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2goc2xpY2VzLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgYmxvY2tSZXF1ZXN0cyA9IFtdO1xuICAgICAgICBjb25zdCBtaXNzaW5nQmxvY2tJZHMgPSBbXTtcbiAgICAgICAgY29uc3QgYWxsQmxvY2tJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5ldmljdGVkQmxvY2tzLmNsZWFyKCk7XG4gICAgICAgIGZvciAoY29uc3QgeyBvZmZzZXQsIGxlbmd0aCB9IG9mIHNsaWNlcykge1xuICAgICAgICAgICAgbGV0IHRvcCA9IG9mZnNldCArIGxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsZVNpemUgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoZmlsZVNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1pbih0b3AsIGZpbGVTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0QmxvY2tPZmZzZXQgPSBNYXRoLmZsb29yKG9mZnNldCAvIHRoaXMuYmxvY2tTaXplKSAqIHRoaXMuYmxvY2tTaXplO1xuICAgICAgICAgICAgZm9yIChsZXQgY3VycmVudCA9IGZpcnN0QmxvY2tPZmZzZXQ7IGN1cnJlbnQgPCB0b3A7IGN1cnJlbnQgKz0gdGhpcy5ibG9ja1NpemUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0lkID0gTWF0aC5mbG9vcihjdXJyZW50IC8gdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ibG9ja0NhY2hlLmhhcyhibG9ja0lkKSAmJiAhdGhpcy5ibG9ja1JlcXVlc3RzLmhhcyhibG9ja0lkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrSWRzVG9GZXRjaC5hZGQoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdCbG9ja0lkcy5wdXNoKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibG9ja1JlcXVlc3RzLmhhcyhibG9ja0lkKSkge1xuICAgICAgICAgICAgICAgICAgICBibG9ja1JlcXVlc3RzLnB1c2godGhpcy5ibG9ja1JlcXVlc3RzLmdldChibG9ja0lkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsbEJsb2NrSWRzLnB1c2goYmxvY2tJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWxsb3cgYWRkaXRpb25hbCBibG9jayByZXF1ZXN0cyB0byBhY2N1bXVsYXRlXG4gICAgICAgIGF3YWl0IHdhaXQoKTtcbiAgICAgICAgdGhpcy5mZXRjaEJsb2NrcyhzaWduYWwpO1xuICAgICAgICAvLyBHYXRoZXIgYWxsIG9mIHRoZSBuZXcgcmVxdWVzdHMgdGhhdCB0aGlzIGZldGNoIGNhbGwgaXMgY29udHJpYnV0aW5nIHRvIGBmZXRjaGAuXG4gICAgICAgIGNvbnN0IG1pc3NpbmdSZXF1ZXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrSWQgb2YgbWlzc2luZ0Jsb2NrSWRzKSB7XG4gICAgICAgICAgICAvLyBUaGUgcmVxdWVzdGVkIG1pc3NpbmcgYmxvY2sgY291bGQgYWxyZWFkeSBiZSBpbiB0aGUgY2FjaGVcbiAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgaGF2aW5nIGl0cyByZXF1ZXN0IHN0aWxsIGJlIG91dHN0YW5kaW5nLlxuICAgICAgICAgICAgaWYgKHRoaXMuYmxvY2tSZXF1ZXN0cy5oYXMoYmxvY2tJZCkpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nUmVxdWVzdHMucHVzaCh0aGlzLmJsb2NrUmVxdWVzdHMuZ2V0KGJsb2NrSWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBY3R1YWxseSBhd2FpdCBhbGwgcGVuZGluZyByZXF1ZXN0cyB0aGF0IGFyZSBuZWVkZWQgZm9yIHRoaXMgYGZldGNoYC5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKGJsb2NrUmVxdWVzdHMpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQobWlzc2luZ1JlcXVlc3RzKTtcbiAgICAgICAgLy8gUGVyZm9ybSByZXRyaWVzIGlmIGEgYmxvY2sgd2FzIGludGVycnVwdGVkIGJ5IGEgcHJldmlvdXMgc2lnbmFsXG4gICAgICAgIGNvbnN0IGFib3J0ZWRCbG9ja1JlcXVlc3RzID0gW107XG4gICAgICAgIGNvbnN0IGFib3J0ZWRCbG9ja0lkcyA9IGFsbEJsb2NrSWRzXG4gICAgICAgICAgICAuZmlsdGVyKChpZCkgPT4gdGhpcy5hYm9ydGVkQmxvY2tJZHMuaGFzKGlkKSB8fCAhdGhpcy5ibG9ja0NhY2hlLmhhcyhpZCkpO1xuICAgICAgICBhYm9ydGVkQmxvY2tJZHMuZm9yRWFjaCgoaWQpID0+IHRoaXMuYmxvY2tJZHNUb0ZldGNoLmFkZChpZCkpO1xuICAgICAgICAvLyBzdGFydCB0aGUgcmV0cnkgb2Ygc29tZSBibG9ja3MgaWYgcmVxdWlyZWRcbiAgICAgICAgaWYgKGFib3J0ZWRCbG9ja0lkcy5sZW5ndGggPiAwICYmIHNpZ25hbCAmJiAhc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hCbG9ja3MoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2tJZCBvZiBhYm9ydGVkQmxvY2tJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuYmxvY2tSZXF1ZXN0cy5nZXQoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJsb2NrICR7YmxvY2tJZH0gaXMgbm90IGluIHRoZSBibG9jayByZXF1ZXN0c2ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhYm9ydGVkQmxvY2tSZXF1ZXN0cy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChhYm9ydGVkQmxvY2tSZXF1ZXN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhyb3cgYW4gIGFib3J0IGVycm9yXG4gICAgICAgIGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBYm9ydEVycm9yKCdSZXF1ZXN0IHdhcyBhYm9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2tzID0gYWxsQmxvY2tJZHMubWFwKChpZCkgPT4gdGhpcy5ibG9ja0NhY2hlLmdldChpZCkgfHwgdGhpcy5ldmljdGVkQmxvY2tzLmdldChpZCkpO1xuICAgICAgICBjb25zdCBmYWlsZWRCbG9ja3MgPSBibG9ja3MuZmlsdGVyKChpKSA9PiAhaSk7XG4gICAgICAgIGlmIChmYWlsZWRCbG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQWdncmVnYXRlRXJyb3IoZmFpbGVkQmxvY2tzLCAnUmVxdWVzdCBmYWlsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgYSBmaW5hbCBNYXAsIHdpdGggYWxsIHJlcXVpcmVkIGJsb2NrcyBmb3IgdGhpcyByZXF1ZXN0IHRvIHNhdGlzZnlcbiAgICAgICAgY29uc3QgcmVxdWlyZWRCbG9ja3MgPSBuZXcgTWFwKHppcChhbGxCbG9ja0lkcywgYmxvY2tzKSk7XG4gICAgICAgIC8vIFRPRE86IHNhdGlzZnkgZWFjaCBzbGljZVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2xpY2VEYXRhKHNsaWNlcywgcmVxdWlyZWRCbG9ja3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqL1xuICAgIGZldGNoQmxvY2tzKHNpZ25hbCkge1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBzdGlsbCBuZWVkIHRvXG4gICAgICAgIGlmICh0aGlzLmJsb2NrSWRzVG9GZXRjaC5zaXplID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gdGhpcy5ncm91cEJsb2Nrcyh0aGlzLmJsb2NrSWRzVG9GZXRjaCk7XG4gICAgICAgICAgICAvLyBzdGFydCByZXF1ZXN0aW5nIHNsaWNlcyBvZiBkYXRhXG4gICAgICAgICAgICBjb25zdCBncm91cFJlcXVlc3RzID0gZ3JvdXBzLm1hcChhc3luYyAoZ3JvdXApID0+ICh7IC4uLmdyb3VwLCAuLi4oYXdhaXQgdGhpcy5zb3VyY2UuZmV0Y2hTbGljZShncm91cCwgc2lnbmFsKSkgfSkpO1xuICAgICAgICAgICAgZm9yIChsZXQgZ3JvdXBJbmRleCA9IDA7IGdyb3VwSW5kZXggPCBncm91cHMubGVuZ3RoOyArK2dyb3VwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tncm91cEluZGV4XTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrSWQgb2YgZ3JvdXAuYmxvY2tJZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBhbiBhc3luYyBJSUZFIGZvciBlYWNoIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZXF1ZXN0cy5zZXQoYmxvY2tJZCwgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgUHJvbWlzZS5hbGwoZ3JvdXBSZXF1ZXN0cykpW2dyb3VwSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrT2Zmc2V0ID0gYmxvY2tJZCAqIHRoaXMuYmxvY2tTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG8gPSBibG9ja09mZnNldCAtIHJlc3BvbnNlLm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4obyArIHRoaXMuYmxvY2tTaXplLCByZXNwb25zZS5kYXRhLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLnNsaWNlKG8sIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gbmV3IEJsb2NrKGJsb2NrT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXlCdWZmZXJ9ICovIChkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja0NhY2hlLnNldChibG9ja0lkLCBibG9jayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hYm9ydGVkQmxvY2tJZHMuZGVsZXRlKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBBYm9ydEVycm9yICYmIGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNpZ25hbCBoZXJlLCB3ZSBuZWVkIGl0IHRvIGRldGVybWluZSBsYXRlciBpZiBhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciB3YXMgY2F1c2VkIGJ5IHRoaXMgc2lnbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyci5zaWduYWwgPSBzaWduYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tDYWNoZS5kZWxldGUoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRlZEJsb2NrSWRzLmFkZChibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrUmVxdWVzdHMuZGVsZXRlKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJsb2NrSWRzVG9GZXRjaC5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTZXQ8bnVtYmVyPn0gYmxvY2tJZHNcbiAgICAgKiBAcmV0dXJucyB7QmxvY2tHcm91cFtdfVxuICAgICAqL1xuICAgIGdyb3VwQmxvY2tzKGJsb2NrSWRzKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZEJsb2NrSWRzID0gQXJyYXkuZnJvbShibG9ja0lkcykuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICBpZiAoc29ydGVkQmxvY2tJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJbXX0gKi9cbiAgICAgICAgbGV0IGN1cnJlbnQgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RCbG9ja0lkID0gbnVsbDtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2tJZCBvZiBzb3J0ZWRCbG9ja0lkcykge1xuICAgICAgICAgICAgaWYgKGxhc3RCbG9ja0lkID09PSBudWxsIHx8IGxhc3RCbG9ja0lkICsgMSA9PT0gYmxvY2tJZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQucHVzaChibG9ja0lkKTtcbiAgICAgICAgICAgICAgICBsYXN0QmxvY2tJZCA9IGJsb2NrSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cHMucHVzaChuZXcgQmxvY2tHcm91cChjdXJyZW50WzBdICogdGhpcy5ibG9ja1NpemUsIGN1cnJlbnQubGVuZ3RoICogdGhpcy5ibG9ja1NpemUsIGN1cnJlbnQpKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gW2Jsb2NrSWRdO1xuICAgICAgICAgICAgICAgIGxhc3RCbG9ja0lkID0gYmxvY2tJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncm91cHMucHVzaChuZXcgQmxvY2tHcm91cChjdXJyZW50WzBdICogdGhpcy5ibG9ja1NpemUsIGN1cnJlbnQubGVuZ3RoICogdGhpcy5ibG9ja1NpemUsIGN1cnJlbnQpKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuL2Jhc2Vzb3VyY2UuanNcIikuU2xpY2VbXX0gc2xpY2VzXG4gICAgICogQHBhcmFtIHtNYXA8bnVtYmVyLCBCbG9jaz59IGJsb2Nrc1xuICAgICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcltdfVxuICAgICAqL1xuICAgIHJlYWRTbGljZURhdGEoc2xpY2VzLCBibG9ja3MpIHtcbiAgICAgICAgcmV0dXJuIHNsaWNlcy5tYXAoKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9wID0gc2xpY2Uub2Zmc2V0ICsgc2xpY2UubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZVNpemUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1pbih0aGlzLmZpbGVTaXplLCB0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmxvY2tJZExvdyA9IE1hdGguZmxvb3Ioc2xpY2Uub2Zmc2V0IC8gdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tJZEhpZ2ggPSBNYXRoLmZsb29yKCh0b3AgLSAxKSAvIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlRGF0YSA9IG5ldyBBcnJheUJ1ZmZlcihzbGljZS5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3Qgc2xpY2VWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoc2xpY2VEYXRhKTtcbiAgICAgICAgICAgIGZvciAobGV0IGJsb2NrSWQgPSBibG9ja0lkTG93OyBibG9ja0lkIDw9IGJsb2NrSWRIaWdoOyArK2Jsb2NrSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IGJsb2Nrcy5nZXQoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBibG9jay5vZmZzZXQgLSBzbGljZS5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wRGVsdGEgPSBibG9jay50b3AgLSB0b3A7XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrSW5uZXJPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGxldCByYW5nZUlubmVyT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdXNlZEJsb2NrTGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJbm5lck9mZnNldCA9IC1kZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlSW5uZXJPZmZzZXQgPSBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRvcERlbHRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VkQmxvY2tMZW5ndGggPSBibG9jay5sZW5ndGggLSBibG9ja0lubmVyT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlZEJsb2NrTGVuZ3RoID0gdG9wIC0gYmxvY2sub2Zmc2V0IC0gYmxvY2tJbm5lck9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYmxvY2suZGF0YSwgYmxvY2tJbm5lck9mZnNldCwgdXNlZEJsb2NrTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzbGljZVZpZXcuc2V0KGJsb2NrVmlldywgcmFuZ2VJbm5lck9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2xpY2VEYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2Vkc291cmNlLmpzLm1hcCIsImV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcmVzcG9uc2UgaGFzIGFuIG9rJ2lzaCBzdGF0dXMgY29kZVxuICAgICAqL1xuICAgIGdldCBvaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8PSAyOTk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN0YXR1cyBjb2RlIG9mIHRoZSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBzdGF0dXMgY29kZVxuICAgICAqL1xuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgaGVhZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9oZWFkZXJOYW1lIHRoZSBoZWFkZXIgbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfSB0aGUgaGVhZGVyIHZhbHVlXG4gICAgICovXG4gICAgZ2V0SGVhZGVyKF9oZWFkZXJOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gdGhlIHJlc3BvbnNlIGRhdGEgb2YgdGhlIHJlcXVlc3RcbiAgICAgKi9cbiAgICBhc3luYyBnZXREYXRhKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlQ2xpZW50IHtcbiAgICAvKiogQHBhcmFtIHtzdHJpbmd9IHVybCAqL1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBhIHJlcXVlc3Qgd2l0aCB0aGUgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdEluaXR9IFtfb3B0aW9ucz17fV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCYXNlUmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3QoX29wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXF1ZXN0IGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiaW1wb3J0IHsgQmFzZUNsaWVudCwgQmFzZVJlc3BvbnNlIH0gZnJvbSAnLi9iYXNlLmpzJztcbmNsYXNzIEZldGNoUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIEJhc2VSZXNwb25zZSBmYWNhZGUgZm9yIGZldGNoIEFQSSBSZXNwb25zZVxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZS5zdGF0dXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0SGVhZGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2UuaGVhZGVycy5nZXQobmFtZSkgfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXNwb25zZS5hcnJheUJ1ZmZlclxuICAgICAgICAgICAgPyBhd2FpdCB0aGlzLnJlc3BvbnNlLmFycmF5QnVmZmVyKClcbiAgICAgICAgICAgIC8vIEZJWE1FIENhbiB0aGlzIHJlYWxseSBoYXZlIGEgYnVmZmVyIHByb3BlcnR5P1xuICAgICAgICAgICAgOiAoYXdhaXQgLyoqIEB0eXBlIHsqfSAqLyAodGhpcy5yZXNwb25zZSkuYnVmZmVyKCkpLmJ1ZmZlcjtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZldGNoQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdENyZWRlbnRpYWxzfSBbY3JlZGVudGlhbHNdXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBjcmVkZW50aWFscykge1xuICAgICAgICBzdXBlcih1cmwpO1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEluaXR9IFtvcHRpb25zPXt9XVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEZldGNoUmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3QoeyBoZWFkZXJzLCBzaWduYWwgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnMsIGNyZWRlbnRpYWxzOiB0aGlzLmNyZWRlbnRpYWxzLCBzaWduYWwsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IEZldGNoUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZldGNoLmpzLm1hcCIsImltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCB1cmxNb2QgZnJvbSAndXJsJztcbmltcG9ydCB7IEJhc2VDbGllbnQsIEJhc2VSZXNwb25zZSB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBBYm9ydEVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnO1xuY2xhc3MgSHR0cFJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBCYXNlUmVzcG9uc2UgZmFjYWRlIGZvciBub2RlIEhUVFAvSFRUUFMgQVBJIFJlc3BvbnNlXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJ2h0dHAnKS5JbmNvbWluZ01lc3NhZ2V9IHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gZGF0YVByb21pc2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXNwb25zZSwgZGF0YVByb21pc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLmRhdGFQcm9taXNlID0gZGF0YVByb21pc2U7XG4gICAgfVxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKHRoaXMucmVzcG9uc2Uuc3RhdHVzQ29kZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0SGVhZGVyKG5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlc3BvbnNlLmhlYWRlcnNbbmFtZV07XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZGF0YVByb21pc2U7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XG4gICAgLyoqIEBwYXJhbSB7c3RyaW5nfSB1cmwgKi9cbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICAgICAgc3VwZXIodXJsKTtcbiAgICAgICAgdGhpcy5wYXJzZWRVcmwgPSB1cmxNb2QucGFyc2UodGhpcy51cmwpO1xuICAgICAgICB0aGlzLmh0dHBBcGkgPSAodGhpcy5wYXJzZWRVcmwucHJvdG9jb2wgPT09ICdodHRwOicgPyBodHRwIDogaHR0cHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIHN0cmluZz59IGhlYWRlcnNcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEh0dHBSZXNwb25zZT59XG4gICAgICovXG4gICAgY29uc3RydWN0UmVxdWVzdChoZWFkZXJzLCBzaWduYWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmh0dHBBcGkuZ2V0KHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnBhcnNlZFVybCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtVaW50OEFycmF5W119ICovXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xsZWN0IGNodW5rc1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uY2F0ZW5hdGUgYWxsIGNodW5rcyBhbmQgcmVzb2x2ZSB0aGUgcHJvbWlzZSB3aXRoIHRoZSByZXN1bHRpbmcgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gQnVmZmVyLmNvbmNhdChjaHVua3MpLmJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVEYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBIdHRwUmVzcG9uc2UocmVzcG9uc2UsIGRhdGFQcm9taXNlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcXVlc3Qub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5kZXN0cm95KG5ldyBBYm9ydEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlcXVlc3QuZGVzdHJveShuZXcgQWJvcnRFcnJvcignUmVxdWVzdCBhYm9ydGVkJykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3QoeyBoZWFkZXJzID0ge30sIHNpZ25hbCA9IHVuZGVmaW5lZCB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNvbnN0cnVjdFJlcXVlc3QoaGVhZGVycywgc2lnbmFsKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAuanMubWFwIiwiaW1wb3J0IHsgQmFzZUNsaWVudCwgQmFzZVJlc3BvbnNlIH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy5qcyc7XG5jbGFzcyBYSFJSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogQmFzZVJlc3BvbnNlIGZhY2FkZSBmb3IgWE1MSHR0cFJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBkYXRhXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeGhyLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMueGhyID0geGhyO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54aHIuc3RhdHVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEhlYWRlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcihuYW1lKSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFhIUkNsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gaGVhZGVyc1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8WEhSUmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdFJlcXVlc3QoaGVhZGVycywgc2lnbmFsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLnVybCk7XG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBob29rIHNpZ25hbHNcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBYSFJSZXNwb25zZSh4aHIsIGRhdGEpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgIHhoci5vbmFib3J0ID0gKCkgPT4gcmVqZWN0KG5ldyBBYm9ydEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnKSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4geGhyLmFib3J0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdCh7IGhlYWRlcnMgPSB7fSwgc2lnbmFsID0gdW5kZWZpbmVkIH0gPSB7fSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY29uc3RydWN0UmVxdWVzdChoZWFkZXJzLCBzaWduYWwpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9eGhyLmpzLm1hcCIsImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBCYXNlU291cmNlIH0gZnJvbSAnLi9iYXNlc291cmNlLmpzJztcbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGZkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VBc3luYyhmZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLmNsb3NlKGZkLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG4gKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG1vZGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XG4gKi9cbmZ1bmN0aW9uIG9wZW5Bc3luYyhwYXRoLCBmbGFncywgbW9kZSA9IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLm9wZW4ocGF0aCwgZmxhZ3MsIG1vZGUsIChlcnIsIGZkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBmZFxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICogQHJldHVybnMge1Byb21pc2U8e2J5dGVzUmVhZDogbnVtYmVyLCBidWZmZXI6IFVpbnQ4QXJyYXl9Pn1cbiAqL1xuZnVuY3Rpb24gcmVhZEFzeW5jKGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLnJlYWQoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uLCAoZXJyLCBieXRlc1JlYWQsIG91dEJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGJ5dGVzUmVhZCwgYnVmZmVyOiBvdXRCdWZmZXIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuY2xhc3MgRmlsZVNvdXJjZSBleHRlbmRzIEJhc2VTb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGF0aCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLm9wZW5SZXF1ZXN0ID0gb3BlbkFzeW5jKHBhdGgsICdyJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZX0gc2xpY2VcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbX3NpZ25hbF0gbm90IGltcGxlbWVudGVkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVdpdGhEYXRhPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaFNsaWNlKHNsaWNlLCBfc2lnbmFsKSB7XG4gICAgICAgIC8vIFRPRE86IHVzZSBgc2lnbmFsYFxuICAgICAgICBjb25zdCBmZCA9IGF3YWl0IHRoaXMub3BlblJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHsgYnVmZmVyIH0gPSBhd2FpdCByZWFkQXN5bmMoZmQsIG5ldyBVaW50OEFycmF5KHNsaWNlLmxlbmd0aCksIDAsIHNsaWNlLmxlbmd0aCwgc2xpY2Uub2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGJ1ZmZlci5idWZmZXIsXG4gICAgICAgICAgICBvZmZzZXQ6IHNsaWNlLm9mZnNldCxcbiAgICAgICAgICAgIGxlbmd0aDogc2xpY2UubGVuZ3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgY29uc3QgZmQgPSBhd2FpdCB0aGlzLm9wZW5SZXF1ZXN0O1xuICAgICAgICBhd2FpdCBjbG9zZUFzeW5jKGZkKTtcbiAgICB9XG59XG4vKiogQHBhcmFtIHtzdHJpbmd9IHBhdGggKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmlsZVNvdXJjZShwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBGaWxlU291cmNlKHBhdGgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZS5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlU291cmNlIH0gZnJvbSAnLi9iYXNlc291cmNlLmpzJztcbmNsYXNzIEZpbGVSZWFkZXJTb3VyY2UgZXh0ZW5kcyBCYXNlU291cmNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jsb2J9IGZpbGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZX0gc2xpY2VcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBzaWduYWxcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlV2l0aERhdGE+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoU2xpY2Uoc2xpY2UsIHNpZ25hbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxvYiA9IHRoaXMuZmlsZS5zbGljZShzbGljZS5vZmZzZXQsIHNsaWNlLm9mZnNldCArIHNsaWNlLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IC8qKiBAdHlwZSB7QXJyYXlCdWZmZXJ9ICovIChyZWFkZXIucmVzdWx0KSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHNsaWNlLm9mZnNldCxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHNsaWNlLmxlbmd0aCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICByZWFkZXIub25hYm9ydCA9IHJlamVjdDtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZWFkZXIuYWJvcnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHNvdXJjZSBmcm9tIGEgZ2l2ZW4gZmlsZS9ibG9iLlxuICogQHBhcmFtIHtCbG9ifSBmaWxlIFRoZSBmaWxlIG9yIGJsb2IgdG8gcmVhZCBmcm9tLlxuICogQHJldHVybnMge0ZpbGVSZWFkZXJTb3VyY2V9IFRoZSBjb25zdHJ1Y3RlZCBzb3VyY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGaWxlUmVhZGVyU291cmNlKGZpbGUpIHtcbiAgICByZXR1cm4gbmV3IEZpbGVSZWFkZXJTb3VyY2UoZmlsZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlcmVhZGVyLmpzLm1hcCIsImNvbnN0IENSTEZDUkxGID0gJ1xcclxcblxcclxcbic7XG4vKipcbiAqIFNoaW0gZm9yICdPYmplY3QuZnJvbUVudHJpZXMnXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtBcnJheTxbc3RyaW5nLCBUXT59IGl0ZW1zXG4gKiBAcmV0dXJuIHtSZWNvcmQ8c3RyaW5nLCBUPn1cbiAqL1xuZnVuY3Rpb24gaXRlbXNUb09iamVjdChpdGVtcykge1xuICAgIGlmICh0eXBlb2YgT2JqZWN0LmZyb21FbnRyaWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGl0ZW1zKTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBUPn0gKi9cbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBpdGVtcykge1xuICAgICAgICBvYmpba2V5LnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4vKipcbiAqIFBhcnNlIEhUVFAgaGVhZGVycyBmcm9tIGEgZ2l2ZW4gc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGhlIHRleHQgdG8gcGFyc2UgdGhlIGhlYWRlcnMgZnJvbVxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IHRoZSBwYXJzZWQgaGVhZGVycyB3aXRoIGxvd2VyY2FzZSBrZXlzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyh0ZXh0KSB7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxbc3RyaW5nLCBzdHJpbmddPn0gKi9cbiAgICBjb25zdCBpdGVtcyA9IHRleHRcbiAgICAgICAgLnNwbGl0KCdcXHJcXG4nKVxuICAgICAgICAubWFwKChsaW5lKSA9PiB7XG4gICAgICAgIGNvbnN0IGt2ID0gLyoqIEB0eXBlIHtbc3RyaW5nLCBzdHJpbmddfSAqLyAobGluZS5zcGxpdCgnOicpLm1hcCgoc3RyKSA9PiBzdHIudHJpbSgpKSk7XG4gICAgICAgIGt2WzBdID0ga3ZbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGt2O1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtc1RvT2JqZWN0KGl0ZW1zKTtcbn1cbi8qKlxuICogUGFyc2UgYSAnQ29udGVudC1UeXBlJyBoZWFkZXIgdmFsdWUgdG8gdGhlIGNvbnRlbnQtdHlwZSBhbmQgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSByYXdDb250ZW50VHlwZSB0aGUgcmF3IHN0cmluZyB0byBwYXJzZSBmcm9tXG4gKiBAcmV0dXJucyB7e3R5cGU6IHN0cmluZ3xudWxsLCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz59fVxuICogICAgIHRoZSBwYXJzZWQgY29udGVudCB0eXBlIHdpdGggdGhlIGZpZWxkczogdHlwZSBhbmQgcGFyYW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRlbnRUeXBlKHJhd0NvbnRlbnRUeXBlKSB7XG4gICAgaWYgKCFyYXdDb250ZW50VHlwZSkge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBudWxsLCBwYXJhbXM6IHt9IH07XG4gICAgfVxuICAgIGNvbnN0IFt0eXBlLCAuLi5yYXdQYXJhbXNdID0gcmF3Q29udGVudFR5cGUuc3BsaXQoJzsnKS5tYXAoKHMpID0+IHMudHJpbSgpKTtcbiAgICBjb25zdCBwYXJhbXNJdGVtcyA9IC8qKiBAdHlwZSB7QXJyYXk8W3N0cmluZywgc3RyaW5nXT59ICovIChyYXdQYXJhbXMubWFwKChwYXJhbSkgPT4gcGFyYW0uc3BsaXQoJz0nKSkpO1xuICAgIHJldHVybiB7IHR5cGUsIHBhcmFtczogaXRlbXNUb09iamVjdChwYXJhbXNJdGVtcykgfTtcbn1cbi8qKlxuICogUGFyc2UgYSAnQ29udGVudC1SYW5nZScgaGVhZGVyIHZhbHVlIHRvIGl0cyBzdGFydCwgZW5kLCBhbmQgdG90YWwgcGFydHNcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gcmF3Q29udGVudFJhbmdlIHRoZSByYXcgc3RyaW5nIHRvIHBhcnNlIGZyb21cbiAqIEByZXR1cm5zIHt7c3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHRvdGFsOiBudW1iZXJ9fSB0aGUgcGFyc2VkIHBhcnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRlbnRSYW5nZShyYXdDb250ZW50UmFuZ2UpIHtcbiAgICBsZXQgc3RhcnQgPSBOYU47XG4gICAgbGV0IGVuZCA9IE5hTjtcbiAgICBsZXQgdG90YWwgPSBOYU47XG4gICAgaWYgKHJhd0NvbnRlbnRSYW5nZSkge1xuICAgICAgICBbLCBzdGFydCwgZW5kLCB0b3RhbF0gPSAocmF3Q29udGVudFJhbmdlLm1hdGNoKC9ieXRlcyAoXFxkKyktKFxcZCspXFwvKFxcZCspLykgfHwgW10pLm1hcChOdW1iZXIpO1xuICAgIH1cbiAgICByZXR1cm4geyBzdGFydCwgZW5kLCB0b3RhbCB9O1xufVxuLyoqXG4gKiBQYXJzZXMgYSBsaXN0IG9mIGJ5dGVyYW5nZXMgZnJvbSB0aGUgZ2l2ZW4gJ211bHRpcGFydC9ieXRlcmFuZ2VzJyBIVFRQIHJlc3BvbnNlLlxuICogRWFjaCBpdGVtIGluIHRoZSBsaXN0IGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiAtIGhlYWRlcnM6IHRoZSBIVFRQIGhlYWRlcnNcbiAqIC0gZGF0YTogdGhlIHNsaWNlZCBBcnJheUJ1ZmZlciBmb3IgdGhhdCBzcGVjaWZpYyBwYXJ0XG4gKiAtIG9mZnNldDogdGhlIG9mZnNldCBvZiB0aGUgYnl0ZXJhbmdlIHdpdGhpbiBpdHMgb3JpZ2luYXRpbmcgZmlsZVxuICogLSBsZW5ndGg6IHRoZSBsZW5ndGggb2YgdGhlIGJ5dGVyYW5nZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gcmVzcG9uc2VBcnJheUJ1ZmZlciB0aGUgcmVzcG9uc2UgdG8gYmUgcGFyc2VkIGFuZCBzcGxpdFxuICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kYXJ5IHRoZSBib3VuZGFyeSBzdHJpbmcgdXNlZCB0byBzcGxpdCB0aGUgc2VjdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheTx7aGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgZGF0YTogQXJyYXlCdWZmZXIsIG9mZnNldDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgZmlsZVNpemU6IG51bWJlcn0+fVxuICogICAgIHRoZSBwYXJzZWQgYnl0ZXJhbmdlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCeXRlUmFuZ2VzKHJlc3BvbnNlQXJyYXlCdWZmZXIsIGJvdW5kYXJ5KSB7XG4gICAgbGV0IG9mZnNldCA9IC0xO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ2FzY2lpJyk7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgY29uc3Qgc3RhcnRCb3VuZGFyeSA9IGAtLSR7Ym91bmRhcnl9YDtcbiAgICBjb25zdCBlbmRCb3VuZGFyeSA9IGAke3N0YXJ0Qm91bmRhcnl9LS1gO1xuICAgIC8vIHNlYXJjaCBmb3IgdGhlIGluaXRpYWwgYm91bmRhcnksIG1heSBiZSBvZmZzZXQgYnkgc29tZSBieXRlc1xuICAgIC8vIFRPRE86IG1vcmUgZWZmaWNpZW50IHRvIGNoZWNrIGZvciBgLS1gIGluIGJ5dGVzIGRpcmVjdGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkZWNvZGVyLmRlY29kZShuZXcgVWludDhBcnJheShyZXNwb25zZUFycmF5QnVmZmVyLCBpLCBzdGFydEJvdW5kYXJ5Lmxlbmd0aCkpO1xuICAgICAgICBpZiAodGV4dCA9PT0gc3RhcnRCb3VuZGFyeSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGluaXRpYWwgYm91bmRhcnknKTtcbiAgICB9XG4gICAgd2hpbGUgKG9mZnNldCA8IHJlc3BvbnNlQXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gZGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkocmVzcG9uc2VBcnJheUJ1ZmZlciwgb2Zmc2V0LCBNYXRoLm1pbihzdGFydEJvdW5kYXJ5Lmxlbmd0aCArIDEwMjQsIHJlc3BvbnNlQXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCAtIG9mZnNldCkpKTtcbiAgICAgICAgLy8gYnJlYWsgaWYgd2UgYXJyaXZlZCBhdCB0aGUgZW5kXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCB8fCB0ZXh0LnN0YXJ0c1dpdGgoZW5kQm91bmRhcnkpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBhc3NlcnQgdGhhdCB3ZSBhcmUgYWN0dWFsbHkgZGVhbGluZyB3aXRoIGEgYnl0ZXJhbmdlIGFuZCBhcmUgYXQgdGhlIGNvcnJlY3Qgb2Zmc2V0XG4gICAgICAgIGlmICghdGV4dC5zdGFydHNXaXRoKHN0YXJ0Qm91bmRhcnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcnQgZG9lcyBub3Qgc3RhcnQgd2l0aCBib3VuZGFyeScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdldCBhIHN1YnN0cmluZyBmcm9tIHdoZXJlIHdlIHJlYWQgdGhlIGhlYWRlcnNcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gdGV4dC5zdWJzdHIoc3RhcnRCb3VuZGFyeS5sZW5ndGggKyAyKTtcbiAgICAgICAgaWYgKGlubmVyVGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZpbmQgdGhlIGRvdWJsZSBsaW5lYnJlYWsgdGhhdCBkZW5vdGVzIHRoZSBlbmQgb2YgdGhlIGhlYWRlcnNcbiAgICAgICAgY29uc3QgZW5kT2ZIZWFkZXJzID0gaW5uZXJUZXh0LmluZGV4T2YoQ1JMRkNSTEYpO1xuICAgICAgICAvLyBwYXJzZSB0aGUgaGVhZGVycyB0byBnZXQgdGhlIGNvbnRlbnQgcmFuZ2Ugc2l6ZVxuICAgICAgICBjb25zdCBoZWFkZXJzID0gcGFyc2VIZWFkZXJzKGlubmVyVGV4dC5zdWJzdHIoMCwgZW5kT2ZIZWFkZXJzKSk7XG4gICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCwgdG90YWwgfSA9IHBhcnNlQ29udGVudFJhbmdlKGhlYWRlcnNbJ2NvbnRlbnQtcmFuZ2UnXSk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBzbGljZSBhbmQgdGhlIG5leHQgb2Zmc2V0XG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZEYXRhID0gb2Zmc2V0ICsgc3RhcnRCb3VuZGFyeS5sZW5ndGggKyBlbmRPZkhlYWRlcnMgKyBDUkxGQ1JMRi5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGVuZCArIDEgLSBzdGFydDtcbiAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlQXJyYXlCdWZmZXIuc2xpY2Uoc3RhcnRPZkRhdGEsIHN0YXJ0T2ZEYXRhICsgbGVuZ3RoKSxcbiAgICAgICAgICAgIG9mZnNldDogc3RhcnQsXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBmaWxlU2l6ZTogdG90YWwsXG4gICAgICAgIH0pO1xuICAgICAgICBvZmZzZXQgPSBzdGFydE9mRGF0YSArIGxlbmd0aCArIDQ7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwdXRpbHMuanMubWFwIiwiaW1wb3J0IHsgcGFyc2VCeXRlUmFuZ2VzLCBwYXJzZUNvbnRlbnRSYW5nZSwgcGFyc2VDb250ZW50VHlwZSB9IGZyb20gJy4vaHR0cHV0aWxzLmpzJztcbmltcG9ydCB7IEJhc2VTb3VyY2UgfSBmcm9tICcuL2Jhc2Vzb3VyY2UuanMnO1xuaW1wb3J0IHsgQmxvY2tlZFNvdXJjZSB9IGZyb20gJy4vYmxvY2tlZHNvdXJjZS5qcyc7XG5pbXBvcnQgeyBGZXRjaENsaWVudCB9IGZyb20gJy4vY2xpZW50L2ZldGNoLmpzJztcbmltcG9ydCB7IFhIUkNsaWVudCB9IGZyb20gJy4vY2xpZW50L3hoci5qcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQvaHR0cC5qcyc7XG4vKiogQGltcG9ydCB7IFJlbW90ZVNvdXJjZU9wdGlvbnMsIEJsb2NrZWRTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vZ2VvdGlmZi5qcycgKi9cbmNsYXNzIFJlbW90ZVNvdXJjZSBleHRlbmRzIEJhc2VTb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZ2VvdGlmZi5qc1wiKS5CYXNlQ2xpZW50fSBjbGllbnRcbiAgICAgKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnN9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjbGllbnQsIHsgaGVhZGVycywgbWF4UmFuZ2VzID0gMCwgYWxsb3dGdWxsRmlsZSB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgIHRoaXMubWF4UmFuZ2VzID0gbWF4UmFuZ2VzO1xuICAgICAgICB0aGlzLmFsbG93RnVsbEZpbGUgPSBhbGxvd0Z1bGxGaWxlO1xuICAgICAgICB0aGlzLl9maWxlU2l6ZSA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVtdfSBzbGljZXNcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyTGlrZVtdPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaChzbGljZXMsIHNpZ25hbCkge1xuICAgICAgICAvLyBpZiB3ZSBhbGxvdyBtdWx0aS1yYW5nZXMsIHNwbGl0IHRoZSBpbmNvbWluZyByZXF1ZXN0IGludG8gdGhhdCBtYW55IHN1Yi1yZXF1ZXN0c1xuICAgICAgICAvLyBhbmQgam9pbiB0aGVtIGFmdGVyd2FyZHNcbiAgICAgICAgaWYgKHRoaXMubWF4UmFuZ2VzID49IHNsaWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoU2xpY2VzKHNsaWNlcywgc2lnbmFsKS50aGVuKChyZXN1bHRzKSA9PiByZXN1bHRzLm1hcCgocikgPT4gci5kYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYXhSYW5nZXMgPiAwICYmIHNsaWNlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzcGxpdCBpbnRvIG11bHRpcGxlIG11bHRpLXJhbmdlIHJlcXVlc3RzXG4gICAgICAgICAgICAvLyBjb25zdCBzdWJTbGljZXNSZXF1ZXN0cyA9IFtdO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZXMubGVuZ3RoOyBpICs9IHRoaXMubWF4UmFuZ2VzKSB7XG4gICAgICAgICAgICAvLyAgIHN1YlNsaWNlc1JlcXVlc3RzLnB1c2goXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5mZXRjaFNsaWNlcyhzbGljZXMuc2xpY2UoaSwgaSArIHRoaXMubWF4UmFuZ2VzKSwgc2lnbmFsKSxcbiAgICAgICAgICAgIC8vICAgKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoc3ViU2xpY2VzUmVxdWVzdHMpKS5mbGF0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIG1ha2UgYSBzaW5nbGUgcmVxdWVzdCBmb3IgZWFjaCBzbGljZVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc2xpY2VzLm1hcChhc3luYyAoc2xpY2UpID0+IChhd2FpdCB0aGlzLmZldGNoU2xpY2Uoc2xpY2UsIHNpZ25hbCkpLmRhdGEpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlPn0gc2xpY2VzXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlV2l0aERhdGE+Pn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaFNsaWNlcyhzbGljZXMsIHNpZ25hbCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgICBSYW5nZTogYGJ5dGVzPSR7c2xpY2VzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHsgb2Zmc2V0LCBsZW5ndGggfSkgPT4gYCR7b2Zmc2V0fS0ke29mZnNldCArIGxlbmd0aCAtIDF9YClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywnKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YS4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNikge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBwYXJhbXMgfSA9IHBhcnNlQ29udGVudFR5cGUocmVzcG9uc2UuZ2V0SGVhZGVyKCdjb250ZW50LXR5cGUnKSk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ211bHRpcGFydC9ieXRlcmFuZ2VzJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVSYW5nZXMgPSBwYXJzZUJ5dGVSYW5nZXMoYXdhaXQgcmVzcG9uc2UuZ2V0RGF0YSgpLCBwYXJhbXMuYm91bmRhcnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbGVTaXplID0gYnl0ZVJhbmdlc1swXS5maWxlU2l6ZSB8fCBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBieXRlUmFuZ2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmdldERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCwgdG90YWwgfSA9IHBhcnNlQ29udGVudFJhbmdlKHJlc3BvbnNlLmdldEhlYWRlcignY29udGVudC1yYW5nZScpKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpbGVTaXplID0gdG90YWwgfHwgbnVsbDtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVdpdGhEYXRhW119ICovXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogZW5kICsgMSAtIHN0YXJ0LFxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgaWYgKHNsaWNlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgcmVxdWVzdGVkIG1vcmUgdGhhbiBvbmUgc2xpY2UsIGJ1dCBnb3Qgb25seSB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyB1bmZvcnR1bmF0ZWx5LCBzb21lIEhUVFAgU2VydmVycyBkb24ndCBzdXBwb3J0IG11bHRpLXJhbmdlc1xuICAgICAgICAgICAgICAgIC8vIGFuZCByZXR1cm4gb25seSB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHJlc3Qgb2YgdGhlIHNsaWNlcyBhbmQgZmV0Y2ggdGhlbSBpdGVyYXRpdmVseVxuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVycyA9IGF3YWl0IFByb21pc2UuYWxsKHNsaWNlcy5zbGljZSgxKS5tYXAoKHNsaWNlKSA9PiB0aGlzLmZldGNoU2xpY2Uoc2xpY2UsIHNpZ25hbCkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3QuY29uY2F0KG90aGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlyc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dGdWxsRmlsZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHJlc3BvbmRlZCB3aXRoIGZ1bGwgZmlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmdldERhdGEoKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpbGVTaXplID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlfSBzbGljZVxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZVdpdGhEYXRhPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaFNsaWNlKHNsaWNlLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgeyBvZmZzZXQsIGxlbmd0aCB9ID0gc2xpY2U7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIFJhbmdlOiBgYnl0ZXM9JHtvZmZzZXR9LSR7b2Zmc2V0ICsgbGVuZ3RoIC0gMX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNoZWNrIHRoZSByZXNwb25zZSB3YXMgb2theSBhbmQgaWYgdGhlIHNlcnZlciBhY3R1YWxseSB1bmRlcnN0YW5kcyByYW5nZSByZXF1ZXN0c1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDYpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5nZXREYXRhKCk7XG4gICAgICAgICAgICBjb25zdCB7IHRvdGFsIH0gPSBwYXJzZUNvbnRlbnRSYW5nZShyZXNwb25zZS5nZXRIZWFkZXIoJ2NvbnRlbnQtcmFuZ2UnKSk7XG4gICAgICAgICAgICB0aGlzLl9maWxlU2l6ZSA9IHRvdGFsIHx8IG51bGw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dGdWxsRmlsZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHJlc3BvbmRlZCB3aXRoIGZ1bGwgZmlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmdldERhdGEoKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpbGVTaXplID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGZpbGVTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZVNpemU7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge0Jhc2VTb3VyY2V9IHNvdXJjZVxuICogQHBhcmFtIHtCbG9ja2VkU291cmNlT3B0aW9uc30gYmxvY2tlZFNvdXJjZU9wdGlvbnNcbiAqIEByZXR1cm5zIHtCYXNlU291cmNlfVxuICovXG5mdW5jdGlvbiBtYXliZVdyYXBJbkJsb2NrZWRTb3VyY2Uoc291cmNlLCB7IGJsb2NrU2l6ZSwgY2FjaGVTaXplIH0pIHtcbiAgICBpZiAoYmxvY2tTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9ja2VkU291cmNlKHNvdXJjZSwgeyBibG9ja1NpemUsIGNhY2hlU2l6ZSB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zICYgQmxvY2tlZFNvdXJjZU9wdGlvbnMgJiB7IGNyZWRlbnRpYWxzPzogUmVxdWVzdENyZWRlbnRpYWxzfX0gW3BhcmFtMV1cbiAqIEByZXR1cm5zIHtCYXNlU291cmNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZldGNoU291cmNlKHVybCwgeyBoZWFkZXJzID0ge30sIGNyZWRlbnRpYWxzLCBtYXhSYW5nZXMgPSAwLCBhbGxvd0Z1bGxGaWxlID0gZmFsc2UsIC4uLmJsb2NrT3B0aW9ucyB9ID0ge30pIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgRmV0Y2hDbGllbnQodXJsLCBjcmVkZW50aWFscyk7XG4gICAgY29uc3Qgc291cmNlID0gbmV3IFJlbW90ZVNvdXJjZShjbGllbnQsIHsgaGVhZGVycywgbWF4UmFuZ2VzLCBhbGxvd0Z1bGxGaWxlIH0pO1xuICAgIHJldHVybiBtYXliZVdyYXBJbkJsb2NrZWRTb3VyY2Uoc291cmNlLCBibG9ja09wdGlvbnMpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnMgJiBCbG9ja2VkU291cmNlT3B0aW9uc30gW3BhcmFtMV1cbiAqIEByZXR1cm5zIHtCYXNlU291cmNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVhIUlNvdXJjZSh1cmwsIHsgaGVhZGVycyA9IHt9LCBtYXhSYW5nZXMgPSAwLCBhbGxvd0Z1bGxGaWxlID0gZmFsc2UsIC4uLmJsb2NrT3B0aW9ucyB9ID0ge30pIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgWEhSQ2xpZW50KHVybCk7XG4gICAgY29uc3Qgc291cmNlID0gbmV3IFJlbW90ZVNvdXJjZShjbGllbnQsIHsgaGVhZGVycywgbWF4UmFuZ2VzLCBhbGxvd0Z1bGxGaWxlIH0pO1xuICAgIHJldHVybiBtYXliZVdyYXBJbkJsb2NrZWRTb3VyY2Uoc291cmNlLCBibG9ja09wdGlvbnMpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnMgJiBCbG9ja2VkU291cmNlT3B0aW9uc30gW3BhcmFtMV1cbiAqIEByZXR1cm5zIHtCYXNlU291cmNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUh0dHBTb3VyY2UodXJsLCB7IGhlYWRlcnMgPSB7fSwgbWF4UmFuZ2VzID0gMCwgYWxsb3dGdWxsRmlsZSA9IGZhbHNlLCAuLi5ibG9ja09wdGlvbnMgfSA9IHt9KSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQodXJsKTtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVtb3RlU291cmNlKGNsaWVudCwgeyBoZWFkZXJzLCBtYXhSYW5nZXMsIGFsbG93RnVsbEZpbGUgfSk7XG4gICAgcmV0dXJuIG1heWJlV3JhcEluQmxvY2tlZFNvdXJjZShzb3VyY2UsIGJsb2NrT3B0aW9ucyk7XG59XG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZ2VvdGlmZi5qc1wiKS5CYXNlQ2xpZW50fSBjbGllbnRcbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9ucyAmIEJsb2NrZWRTb3VyY2VPcHRpb25zfSBbcGFyYW0xXVxuICogQHJldHVybnMge0Jhc2VTb3VyY2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ3VzdG9tU291cmNlKGNsaWVudCwgeyBoZWFkZXJzID0ge30sIG1heFJhbmdlcyA9IDAsIGFsbG93RnVsbEZpbGUgPSBmYWxzZSwgLi4uYmxvY2tPcHRpb25zIH0gPSB7fSkge1xuICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBSZW1vdGVTb3VyY2UoY2xpZW50LCB7IGhlYWRlcnMsIG1heFJhbmdlcywgYWxsb3dGdWxsRmlsZSB9KTtcbiAgICByZXR1cm4gbWF5YmVXcmFwSW5CbG9ja2VkU291cmNlKHNvdXJjZSwgYmxvY2tPcHRpb25zKTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9uc30gb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJlbW90ZVNvdXJjZSh1cmwsIHsgZm9yY2VYSFIgPSBmYWxzZSwgLi4uY2xpZW50T3B0aW9ucyB9ID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nICYmICFmb3JjZVhIUikge1xuICAgICAgICByZXR1cm4gbWFrZUZldGNoU291cmNlKHVybCwgY2xpZW50T3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBtYWtlWEhSU291cmNlKHVybCwgY2xpZW50T3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBtYWtlSHR0cFNvdXJjZSh1cmwsIGNsaWVudE9wdGlvbnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVtb3RlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2h1bmsoaXRlcmFibGUsIGxlbmd0aCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBsZW5ndGhPZkl0ZXJhYmxlID0gaXRlcmFibGUubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoT2ZJdGVyYWJsZTsgaSArPSBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY2h1bmtlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjaSA9IGk7IGNpIDwgaSArIGxlbmd0aDsgY2krKykge1xuICAgICAgICAgICAgY2h1bmtlZC5wdXNoKGl0ZXJhYmxlW2NpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0cy5wdXNoKGNodW5rZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmRzV2l0aChzdHJpbmcsIGV4cGVjdGVkRW5kaW5nKSB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPCBleHBlY3RlZEVuZGluZy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3R1YWxFbmRpbmcgPSBzdHJpbmcuc3Vic3RyKHN0cmluZy5sZW5ndGggLSBleHBlY3RlZEVuZGluZy5sZW5ndGgpO1xuICAgIHJldHVybiBhY3R1YWxFbmRpbmcgPT09IGV4cGVjdGVkRW5kaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goaXRlcmFibGUsIGZ1bmMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gaXRlcmFibGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBmdW5jKGl0ZXJhYmxlW2ldLCBpKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG9sZE9iaikge1xuICAgIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9sZE9iaikge1xuICAgICAgICBpZiAob2xkT2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2xkT2JqW2tleV07XG4gICAgICAgICAgICBuZXdPYmpbdmFsdWVdID0ga2V5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdPYmo7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZ2Uobikge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICByZXN1bHRzLnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzKG51bVRpbWVzLCBmdW5jKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGltZXM7IGkrKykge1xuICAgICAgICByZXN1bHRzLnB1c2goZnVuYyhpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoaXRlcmFibGUpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGl0ZXJhYmxlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhYmxlW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheVJlY3Vyc2l2ZWx5KGlucHV0KSB7XG4gICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gdG9BcnJheShpbnB1dCkubWFwKHRvQXJyYXlSZWN1cnNpdmVseSk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHYpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0eXBlb2YgdiA9PT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCAmJiAnbGVuZ3RoJyBpbiB2KTtcbn1cbi8qKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWNhZGVtaWEtZGUtY29kaWdvL3BhcnNlLWNvbnRlbnQtcmFuZ2UtaGVhZGVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50UmFuZ2UoaGVhZGVyVmFsdWUpIHtcbiAgICBpZiAoIWhlYWRlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGhlYWRlclZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgY29uc3QgcGFyc2VJbnQgPSAobnVtYmVyKSA9PiBOdW1iZXIucGFyc2VJbnQobnVtYmVyLCAxMCk7XG4gICAgLy8gQ2hlY2sgZm9yIHByZXNlbmNlIG9mIHVuaXRcbiAgICBsZXQgbWF0Y2hlcyA9IGhlYWRlclZhbHVlLm1hdGNoKC9eKFxcdyopIC8pO1xuICAgIGNvbnN0IHVuaXQgPSBtYXRjaGVzICYmIG1hdGNoZXNbMV07XG4gICAgLy8gY2hlY2sgZm9yIHN0YXJ0LWVuZC9zaXplIGhlYWRlciBmb3JtYXRcbiAgICBtYXRjaGVzID0gaGVhZGVyVmFsdWUubWF0Y2goLyhcXGQrKS0oXFxkKylcXC8oXFxkK3xcXCopLyk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgICBmaXJzdDogcGFyc2VJbnQobWF0Y2hlc1sxXSksXG4gICAgICAgICAgICBsYXN0OiBwYXJzZUludChtYXRjaGVzWzJdKSxcbiAgICAgICAgICAgIGxlbmd0aDogbWF0Y2hlc1szXSA9PT0gJyonID8gbnVsbCA6IHBhcnNlSW50KG1hdGNoZXNbM10pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3Igc2l6ZSBoZWFkZXIgZm9ybWF0XG4gICAgbWF0Y2hlcyA9IGhlYWRlclZhbHVlLm1hdGNoKC8oXFxkK3xcXCopLyk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgICBmaXJzdDogbnVsbCxcbiAgICAgICAgICAgIGxhc3Q6IG51bGwsXG4gICAgICAgICAgICBsZW5ndGg6IG1hdGNoZXNbMV0gPT09ICcqJyA/IG51bGwgOiBwYXJzZUludChtYXRjaGVzWzFdKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIFByb21pc2lmaWVkIHdyYXBwZXIgYXJvdW5kICdzZXRUaW1lb3V0JyB0byBhbGxvdyAnYXdhaXQnXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kc11cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdChtaWxsaXNlY29uZHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIpIHtcbiAgICBjb25zdCBBID0gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBBcnJheS5mcm9tKGEpO1xuICAgIGNvbnN0IEIgPSBBcnJheS5pc0FycmF5KGIpID8gYiA6IEFycmF5LmZyb20oYik7XG4gICAgcmV0dXJuIEEubWFwKChrLCBpKSA9PiBbaywgQltpXV0pO1xufVxuLy8gQmFzZWQgb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3JcbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gUGFzcyByZW1haW5pbmcgYXJndW1lbnRzIChpbmNsdWRpbmcgdmVuZG9yIHNwZWNpZmljIG9uZXMpIHRvIHBhcmVudCBjb25zdHJ1Y3RvclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSBmb3Igd2hlcmUgb3VyIGVycm9yIHdhcyB0aHJvd24gKG9ubHkgYXZhaWxhYmxlIG9uIFY4KVxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEFib3J0RXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9ICdBYm9ydEVycm9yJztcbiAgICAgICAgdGhpcy5zaWduYWwgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEN1c3RvbUFnZ3JlZ2F0ZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGVycm9ycywgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9ICdBZ2dyZWdhdGVFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0ZUVycm9yID0gQ3VzdG9tQWdncmVnYXRlRXJyb3I7XG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlZEZsb2F0QXJyYXkoaW5wdXQpIHtcbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGlucHV0KSkge1xuICAgICAgICBjb25zdCBjdHIgPSBpbnB1dC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGN0ciA9PT0gRmxvYXQzMkFycmF5IHx8IGN0ciA9PT0gRmxvYXQ2NEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlZEludEFycmF5KGlucHV0KSB7XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhpbnB1dCkpIHtcbiAgICAgICAgY29uc3QgY3RyID0gaW5wdXQuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChjdHIgPT09IEludDhBcnJheSB8fCBjdHIgPT09IEludDE2QXJyYXkgfHwgY3RyID09PSBJbnQzMkFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlZFVpbnRBcnJheShpbnB1dCkge1xuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoaW5wdXQpKSB7XG4gICAgICAgIGNvbnN0IGN0ciA9IGlucHV0LmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoY3RyID09PSBVaW50OEFycmF5IHx8XG4gICAgICAgICAgICBjdHIgPT09IFVpbnQxNkFycmF5IHx8XG4gICAgICAgICAgICBjdHIgPT09IFVpbnQzMkFycmF5IHx8XG4gICAgICAgICAgICBjdHIgPT09IFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgY29uc3QgdHlwZU1hcCA9IHtcbiAgICBGbG9hdDY0QXJyYXksXG4gICAgRmxvYXQzMkFycmF5LFxuICAgIFVpbnQzMkFycmF5LFxuICAgIFVpbnQxNkFycmF5LFxuICAgIFVpbnQ4QXJyYXksXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tMUlUgZXh0ZW5kcyBNYXAge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKCEob3B0aW9ucy5tYXhTaXplICYmIG9wdGlvbnMubWF4U2l6ZSA+IDApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdgbWF4U2l6ZWAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMCcpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhBZ2UgPT09ICdudW1iZXInICYmIG9wdGlvbnMubWF4QWdlID09PSAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdgbWF4QWdlYCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwJyk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogVXNlIHByaXZhdGUgY2xhc3MgZmllbGRzIHdoZW4gRVNMaW50IHN1cHBvcnRzIHRoZW0uXG5cdFx0dGhpcy5tYXhTaXplID0gb3B0aW9ucy5tYXhTaXplO1xuXHRcdHRoaXMubWF4QWdlID0gb3B0aW9ucy5tYXhBZ2UgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdHRoaXMub25FdmljdGlvbiA9IG9wdGlvbnMub25FdmljdGlvbjtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMub2xkQ2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdH1cblxuXHQvLyBUT0RPOiBVc2UgcHJpdmF0ZSBjbGFzcyBtZXRob2RzIHdoZW4gdGFyZ2V0aW5nIE5vZGUuanMgMTYuXG5cdF9lbWl0RXZpY3Rpb25zKGNhY2hlKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9uRXZpY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IFtrZXksIGl0ZW1dIG9mIGNhY2hlKSB7XG5cdFx0XHR0aGlzLm9uRXZpY3Rpb24oa2V5LCBpdGVtLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRfZGVsZXRlSWZFeHBpcmVkKGtleSwgaXRlbSkge1xuXHRcdGlmICh0eXBlb2YgaXRlbS5leHBpcnkgPT09ICdudW1iZXInICYmIGl0ZW0uZXhwaXJ5IDw9IERhdGUubm93KCkpIHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vbkV2aWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMub25FdmljdGlvbihrZXksIGl0ZW0udmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5kZWxldGUoa2V5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRfZ2V0T3JEZWxldGVJZkV4cGlyZWQoa2V5LCBpdGVtKSB7XG5cdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIGl0ZW0pO1xuXHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGl0ZW0udmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0X2dldEl0ZW1WYWx1ZShrZXksIGl0ZW0pIHtcblx0XHRyZXR1cm4gaXRlbS5leHBpcnkgPyB0aGlzLl9nZXRPckRlbGV0ZUlmRXhwaXJlZChrZXksIGl0ZW0pIDogaXRlbS52YWx1ZTtcblx0fVxuXG5cdF9wZWVrKGtleSwgY2FjaGUpIHtcblx0XHRjb25zdCBpdGVtID0gY2FjaGUuZ2V0KGtleSk7XG5cblx0XHRyZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGtleSwgaXRlbSk7XG5cdH1cblxuXHRfc2V0KGtleSwgdmFsdWUpIHtcblx0XHR0aGlzLmNhY2hlLnNldChrZXksIHZhbHVlKTtcblx0XHR0aGlzLl9zaXplKys7XG5cblx0XHRpZiAodGhpcy5fc2l6ZSA+PSB0aGlzLm1heFNpemUpIHtcblx0XHRcdHRoaXMuX3NpemUgPSAwO1xuXHRcdFx0dGhpcy5fZW1pdEV2aWN0aW9ucyh0aGlzLm9sZENhY2hlKTtcblx0XHRcdHRoaXMub2xkQ2FjaGUgPSB0aGlzLmNhY2hlO1xuXHRcdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR9XG5cdH1cblxuXHRfbW92ZVRvUmVjZW50KGtleSwgaXRlbSkge1xuXHRcdHRoaXMub2xkQ2FjaGUuZGVsZXRlKGtleSk7XG5cdFx0dGhpcy5fc2V0KGtleSwgaXRlbSk7XG5cdH1cblxuXHQqIF9lbnRyaWVzQXNjZW5kaW5nKCkge1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9sZENhY2hlKSB7XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtO1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHlpZWxkIGl0ZW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5jYWNoZSkge1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcblx0XHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0eWllbGQgaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXQoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlLmdldChrZXkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGtleSwgaXRlbSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLm9sZENhY2hlLmdldChrZXkpO1xuXHRcdFx0aWYgKHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIGl0ZW0pID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLl9tb3ZlVG9SZWNlbnQoa2V5LCBpdGVtKTtcblx0XHRcdFx0cmV0dXJuIGl0ZW0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2V0KGtleSwgdmFsdWUsIHttYXhBZ2UgPSB0aGlzLm1heEFnZX0gPSB7fSkge1xuXHRcdGNvbnN0IGV4cGlyeSA9XG5cdFx0XHR0eXBlb2YgbWF4QWdlID09PSAnbnVtYmVyJyAmJiBtYXhBZ2UgIT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA/XG5cdFx0XHRcdERhdGUubm93KCkgKyBtYXhBZ2UgOlxuXHRcdFx0XHR1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHRoaXMuY2FjaGUuc2V0KGtleSwge1xuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0ZXhwaXJ5XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc2V0KGtleSwge3ZhbHVlLCBleHBpcnl9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhcyhrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuICF0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB0aGlzLmNhY2hlLmdldChrZXkpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vbGRDYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuICF0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB0aGlzLm9sZENhY2hlLmdldChrZXkpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwZWVrKGtleSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fcGVlayhrZXksIHRoaXMuY2FjaGUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fcGVlayhrZXksIHRoaXMub2xkQ2FjaGUpO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZShrZXkpIHtcblx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcblx0XHRpZiAoZGVsZXRlZCkge1xuXHRcdFx0dGhpcy5fc2l6ZS0tO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm9sZENhY2hlLmRlbGV0ZShrZXkpIHx8IGRlbGV0ZWQ7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKCk7XG5cdFx0dGhpcy5vbGRDYWNoZS5jbGVhcigpO1xuXHRcdHRoaXMuX3NpemUgPSAwO1xuXHR9XG5cblx0cmVzaXplKG5ld1NpemUpIHtcblx0XHRpZiAoIShuZXdTaXplICYmIG5ld1NpemUgPiAwKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYG1heFNpemVgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAnKTtcblx0XHR9XG5cblx0XHRjb25zdCBpdGVtcyA9IFsuLi50aGlzLl9lbnRyaWVzQXNjZW5kaW5nKCldO1xuXHRcdGNvbnN0IHJlbW92ZUNvdW50ID0gaXRlbXMubGVuZ3RoIC0gbmV3U2l6ZTtcblx0XHRpZiAocmVtb3ZlQ291bnQgPCAwKSB7XG5cdFx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcChpdGVtcyk7XG5cdFx0XHR0aGlzLm9sZENhY2hlID0gbmV3IE1hcCgpO1xuXHRcdFx0dGhpcy5fc2l6ZSA9IGl0ZW1zLmxlbmd0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMCkge1xuXHRcdFx0XHR0aGlzLl9lbWl0RXZpY3Rpb25zKGl0ZW1zLnNsaWNlKDAsIHJlbW92ZUNvdW50KSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub2xkQ2FjaGUgPSBuZXcgTWFwKGl0ZW1zLnNsaWNlKHJlbW92ZUNvdW50KSk7XG5cdFx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5tYXhTaXplID0gbmV3U2l6ZTtcblx0fVxuXG5cdCoga2V5cygpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXldIG9mIHRoaXMpIHtcblx0XHRcdHlpZWxkIGtleTtcblx0XHR9XG5cdH1cblxuXHQqIHZhbHVlcygpIHtcblx0XHRmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiB0aGlzKSB7XG5cdFx0XHR5aWVsZCB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHQqIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmNhY2hlKSB7XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtO1xuXHRcdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHZhbHVlKTtcblx0XHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHR5aWVsZCBba2V5LCB2YWx1ZS52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMub2xkQ2FjaGUpIHtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW07XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHZhbHVlKTtcblx0XHRcdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0eWllbGQgW2tleSwgdmFsdWUudmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0KiBlbnRyaWVzRGVzY2VuZGluZygpIHtcblx0XHRsZXQgaXRlbXMgPSBbLi4udGhpcy5jYWNoZV07XG5cdFx0Zm9yIChsZXQgaSA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtO1xuXHRcdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHZhbHVlKTtcblx0XHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHR5aWVsZCBba2V5LCB2YWx1ZS52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aXRlbXMgPSBbLi4udGhpcy5vbGRDYWNoZV07XG5cdFx0Zm9yIChsZXQgaSA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtO1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLl9kZWxldGVJZkV4cGlyZWQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHlpZWxkIFtrZXksIHZhbHVlLnZhbHVlXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCogZW50cmllc0FzY2VuZGluZygpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLl9lbnRyaWVzQXNjZW5kaW5nKCkpIHtcblx0XHRcdHlpZWxkIFtrZXksIHZhbHVlLnZhbHVlXTtcblx0XHR9XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRpZiAoIXRoaXMuX3NpemUpIHtcblx0XHRcdHJldHVybiB0aGlzLm9sZENhY2hlLnNpemU7XG5cdFx0fVxuXG5cdFx0bGV0IG9sZENhY2hlU2l6ZSA9IDA7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgdGhpcy5vbGRDYWNoZS5rZXlzKCkpIHtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRvbGRDYWNoZVNpemUrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5taW4odGhpcy5fc2l6ZSArIG9sZENhY2hlU2l6ZSwgdGhpcy5tYXhTaXplKTtcblx0fVxuXG5cdGVudHJpZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW50cmllc0FzY2VuZGluZygpO1xuXHR9XG5cblx0Zm9yRWFjaChjYWxsYmFja0Z1bmN0aW9uLCB0aGlzQXJndW1lbnQgPSB0aGlzKSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5lbnRyaWVzQXNjZW5kaW5nKCkpIHtcblx0XHRcdGNhbGxiYWNrRnVuY3Rpb24uY2FsbCh0aGlzQXJndW1lbnQsIHZhbHVlLCBrZXksIHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoWy4uLnRoaXMuZW50cmllc0FzY2VuZGluZygpXSk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50U3Vic3RyaW5nKHN0cmluZywgc3Vic3RyaW5nKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKHN1YnN0cmluZywgXCJnXCIpO1xuICBjb25zdCBtYXRjaCA9IHN0cmluZy5tYXRjaChwYXR0ZXJuKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2gubGVuZ3RoIDogMDtcbn1cbiIsImltcG9ydCBpbmRleE9mTWF0Y2ggZnJvbSBcIi4vaW5kZXgtb2YtbWF0Y2gubWpzXCI7XG5pbXBvcnQgaW5kZXhPZk1hdGNoRW5kIGZyb20gXCIuL2luZGV4LW9mLW1hdGNoLWVuZC5tanNcIjtcbmltcG9ydCBjb3VudFN1YnN0cmluZyBmcm9tIFwiLi9jb3VudC1zdWJzdHJpbmcubWpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRUYWdCeU5hbWUoeG1sLCB0YWdOYW1lLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlYnVnID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZykgfHwgZmFsc2U7XG4gIGNvbnN0IG5lc3RlZCA9ICEob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5uZXN0ZWQgPT09IGZhbHNlKTtcblxuICBjb25zdCBzdGFydEluZGV4ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5zdGFydEluZGV4KSB8fCAwO1xuXG4gIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBzdGFydGluZyBmaW5kVGFnQnlOYW1lIHdpdGhcIiwgdGFnTmFtZSwgXCIgYW5kIFwiLCBvcHRpb25zKTtcblxuICBjb25zdCBzdGFydCA9IGluZGV4T2ZNYXRjaCh4bWwsIGBcXDwke3RhZ05hbWV9WyBcXG5cXD5cXC9dYCwgc3RhcnRJbmRleCk7XG4gIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBzdGFydDpcIiwgc3RhcnQpO1xuICBpZiAoc3RhcnQgPT09IC0xKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGFmdGVyU3RhcnQgPSB4bWwuc2xpY2Uoc3RhcnQgKyB0YWdOYW1lLmxlbmd0aCk7XG5cbiAgbGV0IHJlbGF0aXZlRW5kID0gaW5kZXhPZk1hdGNoRW5kKGFmdGVyU3RhcnQsIFwiXltePF0qWyAvXT5cIiwgMCk7XG5cbiAgY29uc3Qgc2VsZkNsb3NpbmcgPSByZWxhdGl2ZUVuZCAhPT0gLTEgJiYgYWZ0ZXJTdGFydFtyZWxhdGl2ZUVuZCAtIDFdID09PSBcIi9cIjtcbiAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIHNlbGZDbG9zaW5nOlwiLCBzZWxmQ2xvc2luZyk7XG5cbiAgaWYgKHNlbGZDbG9zaW5nID09PSBmYWxzZSkge1xuICAgIC8vIGNoZWNrIGlmIHRhZyBoYXMgc3VidGFncyB3aXRoIHRoZSBzYW1lIG5hbWVcbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gICAgICBsZXQgb3BlbmluZ3MgPSAxO1xuICAgICAgbGV0IGNsb3NpbmdzID0gMDtcbiAgICAgIHdoaWxlICgocmVsYXRpdmVFbmQgPSBpbmRleE9mTWF0Y2hFbmQoYWZ0ZXJTdGFydCwgXCJbIC9dXCIgKyB0YWdOYW1lICsgXCI+XCIsIHN0YXJ0SW5kZXgpKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgY2xpcCA9IGFmdGVyU3RhcnQuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIHJlbGF0aXZlRW5kICsgMSk7XG4gICAgICAgIG9wZW5pbmdzICs9IGNvdW50U3Vic3RyaW5nKGNsaXAsIFwiPFwiICsgdGFnTmFtZSArIFwiWyBcXG5cXHQ+XVwiKTtcbiAgICAgICAgY2xvc2luZ3MgKz0gY291bnRTdWJzdHJpbmcoY2xpcCwgXCI8L1wiICsgdGFnTmFtZSArIFwiPlwiKTtcbiAgICAgICAgLy8gd2UgY2FuJ3QgaGF2ZSBtb3JlIG9wZW5pbmdzIHRoYW4gY2xvc2luZ3NcbiAgICAgICAgaWYgKGNsb3NpbmdzID49IG9wZW5pbmdzKSBicmVhaztcbiAgICAgICAgc3RhcnRJbmRleCA9IHJlbGF0aXZlRW5kO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWxhdGl2ZUVuZCA9IGluZGV4T2ZNYXRjaEVuZChhZnRlclN0YXJ0LCBcIlsgL11cIiArIHRhZ05hbWUgKyBcIj5cIiwgMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZW5kID0gc3RhcnQgKyB0YWdOYW1lLmxlbmd0aCArIHJlbGF0aXZlRW5kICsgMTtcbiAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIGVuZDpcIiwgZW5kKTtcbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgY29uc3Qgb3V0ZXIgPSB4bWwuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIC8vIHRhZyBpcyBsaWtlIDxnbWw6aWRlbnRpZmllciBjb2RlU3BhY2U9XCJPR1BcIj51cm46b2djOmRlZjpjcnM6RVBTRzo6MzI2MTc8L2dtbDppZGVudGlmaWVyPlxuXG4gIGxldCBpbm5lcjtcbiAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgaW5uZXIgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIGlubmVyID0gb3V0ZXIuc2xpY2Uob3V0ZXIuaW5kZXhPZihcIj5cIikgKyAxLCBvdXRlci5sYXN0SW5kZXhPZihcIjxcIikpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5uZXIsIG91dGVyLCBzdGFydCwgZW5kIH07XG59XG4iLCJpbXBvcnQgZmluZFRhZ0J5TmFtZSBmcm9tIFwiLi9maW5kLXRhZy1ieS1uYW1lLm1qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVGFnc0J5TmFtZSh4bWwsIHRhZ05hbWUsIG9wdGlvbnMpIHtcbiAgY29uc3QgdGFncyA9IFtdO1xuICBjb25zdCBkZWJ1ZyA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpIHx8IGZhbHNlO1xuICBjb25zdCBuZXN0ZWQgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm5lc3RlZCA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLm5lc3RlZCA6IHRydWU7XG4gIGxldCBzdGFydEluZGV4ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5zdGFydEluZGV4KSB8fCAwO1xuICBsZXQgdGFnO1xuICB3aGlsZSAoKHRhZyA9IGZpbmRUYWdCeU5hbWUoeG1sLCB0YWdOYW1lLCB7IGRlYnVnLCBzdGFydEluZGV4IH0pKSkge1xuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIHN0YXJ0SW5kZXggPSB0YWcuc3RhcnQgKyAxICsgdGFnTmFtZS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0SW5kZXggPSB0YWcuZW5kO1xuICAgIH1cbiAgICB0YWdzLnB1c2godGFnKTtcbiAgfVxuICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiZmluZFRhZ3NCeU5hbWUgZm91bmRcIiwgdGFncy5sZW5ndGgsIFwidGFnc1wiKTtcbiAgcmV0dXJuIHRhZ3M7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUodGFnLCBhdHRyaWJ1dGVOYW1lLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlYnVnID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZykgfHwgZmFsc2U7XG4gIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBnZXR0aW5nIFwiICsgYXR0cmlidXRlTmFtZSArIFwiIGluIFwiICsgdGFnKTtcblxuICBjb25zdCB4bWwgPSB0eXBlb2YgdGFnID09PSBcIm9iamVjdFwiID8gdGFnLm91dGVyIDogdGFnO1xuXG4gIC8vIG9ubHkgc2VhcmNoIGZvciBhdHRyaWJ1dGVzIGluIHRoZSBvcGVuaW5nIHRhZ1xuICBjb25zdCBvcGVuaW5nID0geG1sLnNsaWNlKDAsIHhtbC5pbmRleE9mKFwiPlwiKSArIDEpO1xuXG4gIGNvbnN0IHF1b3RlY2hhcnMgPSBbJ1wiJywgXCInXCJdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1b3RlY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGFyID0gcXVvdGVjaGFyc1tpXTtcbiAgICBjb25zdCBwYXR0ZXJuID0gYXR0cmlidXRlTmFtZSArIFwiXFxcXD1cIiArIGNoYXIgKyBcIihbXlwiICsgY2hhciArIFwiXSopXCIgKyBjaGFyO1xuICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJbeG1sLXV0aWxzXSBwYXR0ZXJuOlwiLCBwYXR0ZXJuKTtcblxuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICBjb25zdCBtYXRjaCA9IHJlLmV4ZWMob3BlbmluZyk7XG4gICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIG1hdGNoOlwiLCBtYXRjaCk7XG4gICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hbMV07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4T2ZNYXRjaEVuZCh4bWwsIHBhdHRlcm4sIHN0YXJ0SW5kZXgpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICBjb25zdCBtYXRjaCA9IHJlLmV4ZWMoeG1sLnNsaWNlKHN0YXJ0SW5kZXgpKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gc3RhcnRJbmRleCArIG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gMTtcbiAgZWxzZSByZXR1cm4gLTE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleE9mTWF0Y2goeG1sLCBwYXR0ZXJuLCBzdGFydEluZGV4KSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgY29uc3QgbWF0Y2ggPSByZS5leGVjKHhtbC5zbGljZShzdGFydEluZGV4KSk7XG4gIGlmIChtYXRjaCkgcmV0dXJuIHN0YXJ0SW5kZXggKyBtYXRjaC5pbmRleDtcbiAgZWxzZSByZXR1cm4gLTE7XG59XG4iLCIvL0B0cy1jaGVja1xuJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7IERhdGFzZXQgfSBmcm9tICdncmlkdml6J1xuXG4vKipcbiAqIEB0b2RvXG4gKiBBIGRhdGFzZXQgY29tcG9zZWQgb2YgYSBDT0dlbyBmaWxlLlxuICogQHNlZSBodHRwczovL3d3dy5jb2dlby5vcmcvXG4gKlxuICogQG1vZHVsZSBkYXRhc2V0XG4gKiBAYXV0aG9yIEpvc2VwaCBEYXZpZXMsIEp1bGllbiBHYWZmdXJpXG4gKi9cbmV4cG9ydCBjbGFzcyBDT0dlbyBleHRlbmRzIERhdGFzZXQge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgdXJsLCByZXNvbHV0aW9uLCBvcHRzID0ge30pIHtcbiAgICAgICAgc3VwZXIobWFwLCB1cmwsIHJlc29sdXRpb24sIG9wdHMpXG4gICAgfVxuXG4gICAgLy9UT0RPXG5cbn1cbiIsIi8vQHRzLWNoZWNrXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgRGF0YXNldCB9IGZyb20gJ2dyaWR2aXonXG5pbXBvcnQgeyBmcm9tVXJsIH0gZnJvbSAnZ2VvdGlmZidcblxuLyoqXG4gKiBBIGRhdGFzZXQgY29tcG9zZWQgb2YgYSBzaW5nbGUgR2VvVGlmZiBmaWxlLlxuICpcbiAqIEBtb2R1bGUgZGF0YXNldFxuICogQGF1dGhvciBKb3NlcGggRGF2aWVzLCBKdWxpZW4gR2FmZnVyaVxuICovXG5leHBvcnQgY2xhc3MgR2VvVElGRiBleHRlbmRzIERhdGFzZXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gSW5pdGlhbCByZXNvbHV0aW9uOyB0aGUgR2VvVElGRiBwaXhlbCBzaXplIGlzIHVzZWQgYWZ0ZXIgbG9hZGluZy5cbiAgICAgKiBAcGFyYW0ge3twcmVwcm9jZXNzPzpmdW5jdGlvbihvYmplY3QpOmJvb2xlYW4sIGJhbmRzPzpudW1iZXJbXX19IG9wdHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYXAsIHVybCwgcmVzb2x1dGlvbiwgb3B0cyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG1hcCwgdXJsLCByZXNvbHV0aW9uLCBvcHRzKVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPG9iamVjdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNlbGxzID0gW11cblxuICAgICAgICAvKipcbiAgICAgICAgICogWmVyby1iYXNlZCBzYW1wbGUgaW5kZXhlcyB0byBsb2FkOyB1bmRlZmluZWQgbWVhbnMgYWxsIHNhbXBsZXMuXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXXx1bmRlZmluZWR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhbmRzID0gb3B0cy5iYW5kc1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbmZvTG9hZGluZ1N0YXR1cyA9ICdub3RMb2FkZWQnXG5cbiAgICAgICAgdGhpcy5nZXREYXRhKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBHZW9USUZGIG9uY2UgYW5kIGNvbnZlcnQgaXRzIHBpeGVscyB0byBHcmlkVml6IGNlbGxzLlxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZm9Mb2FkaW5nU3RhdHVzICE9PSAnbm90TG9hZGVkJykgcmV0dXJuIHRoaXNcblxuICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2xvYWRpbmcnXG4gICAgICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvL3NpbWlsYXIgdG8gd2hhdCBjbGFzcyBQYXJxdWV0R3JpZCBmcm9tIE5QTSBncmlkdml6LXBhcnF1ZXQgcGx1Z2luIGRvZXMgd2l0aCBnZW90aWZmLmpzIGxpYnJhcnlcbiAgICAgICAgICAgICAgICBjb25zdCB0aWZmID0gYXdhaXQgZnJvbVVybCh0aGlzLnVybCwgeyBhbGxvd0Z1bGxGaWxlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCB0aWZmLmdldEltYWdlKClcbiAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVDb3VudCA9IGltYWdlLmdldFNhbXBsZXNQZXJQaXhlbCgpXG4gICAgICAgICAgICAgICAgY29uc3QgYmFuZHMgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbmRzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2FtcGxlQ291bnQgfSwgKF8sIGluZGV4KSA9PiBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYW5kc1xuXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJhbmRzKSB8fCBiYW5kcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaGUgYmFuZHMgb3B0aW9uIG11c3QgYmUgYSBub24tZW1wdHkgYXJyYXkgb2YgemVyby1iYXNlZCBzYW1wbGUgaW5kZXhlcy4nXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAoYmFuZHMuc29tZSgoYmFuZCkgPT4gIU51bWJlci5pc0ludGVnZXIoYmFuZCkgfHwgYmFuZCA8IDAgfHwgYmFuZCA+PSBzYW1wbGVDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBCYW5kIGluZGV4ZXMgbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDAgYW5kICR7c2FtcGxlQ291bnQgLSAxfS5gKVxuICAgICAgICAgICAgICAgIGlmIChuZXcgU2V0KGJhbmRzKS5zaXplICE9PSBiYW5kcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGJhbmRzIG9wdGlvbiBtdXN0IG5vdCBjb250YWluIGR1cGxpY2F0ZSBpbmRleGVzLicpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGJhbmRzLm1hcCgoYmFuZCkgPT4gaW1hZ2UuZ2V0R0RBTE1ldGFkYXRhKGJhbmQpKSlcbiAgICAgICAgICAgICAgICBjb25zdCBiYW5kTmFtZXMgPSBtZXRhZGF0YS5tYXAoKGJhbmRNZXRhZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBiYW5kTWV0YWRhdGEgJiYgYmFuZE1ldGFkYXRhLkRFU0NSSVBUSU9OXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVzY3JpcHRpb24gPT09ICdzdHJpbmcnICYmIGRlc2NyaXB0aW9uLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgYmFuZCR7YmFuZHNbaW5kZXhdICsgMX1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAobmV3IFNldChiYW5kTmFtZXMpLnNpemUgIT09IGJhbmROYW1lcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvVElGRiBiYW5kIG5hbWVzIG11c3QgYmUgdW5pcXVlIHRvIGNyZWF0ZSBjZWxsIHByb3BlcnRpZXMuJylcbiAgICAgICAgICAgICAgICBpZiAoYmFuZE5hbWVzLnNvbWUoKG5hbWUpID0+IG5hbWUgPT09ICd4JyB8fCBuYW1lID09PSAneScpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnR2VvVElGRiBiYW5kIG5hbWVzIGNhbm5vdCBiZSBcInhcIiBvciBcInlcIiwgd2hpY2ggYXJlIHJlc2VydmVkIGZvciBjZWxsIGNvb3JkaW5hdGVzLidcbiAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25YLCByZXNvbHV0aW9uWV0gPSBpbWFnZS5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsV2lkdGggPSBNYXRoLmFicyhyZXNvbHV0aW9uWClcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsSGVpZ2h0ID0gTWF0aC5hYnMocmVzb2x1dGlvblkpXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhTnVtYmVyLmlzRmluaXRlKGNlbGxXaWR0aCkgfHxcbiAgICAgICAgICAgICAgICAgICAgIU51bWJlci5pc0Zpbml0ZShjZWxsSGVpZ2h0KSB8fFxuICAgICAgICAgICAgICAgICAgICBjZWxsV2lkdGggPD0gMCB8fFxuICAgICAgICAgICAgICAgICAgICBjZWxsSGVpZ2h0IDw9IDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvVElGRiBwaXhlbCBkaW1lbnNpb25zIG11c3QgYmUgZmluaXRlIGFuZCBncmVhdGVyIHRoYW4gemVyby4nKVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhjZWxsV2lkdGggLSBjZWxsSGVpZ2h0KSA+IE1hdGgubWF4KGNlbGxXaWR0aCwgY2VsbEhlaWdodCkgKiAxZS05KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dyaWRWaXogcmVxdWlyZXMgc3F1YXJlIEdlb1RJRkYgcGl4ZWxzLicpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1hdGlvbiA9IGltYWdlLmdldEZpbGVEaXJlY3RvcnkoKS5nZXRWYWx1ZSgnTW9kZWxUcmFuc2Zvcm1hdGlvbicpXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5hYnModHJhbnNmb3JtYXRpb25bMV0pID4gY2VsbFdpZHRoICogMWUtMTIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHRyYW5zZm9ybWF0aW9uWzRdKSA+IGNlbGxIZWlnaHQgKiAxZS0xMilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUm90YXRlZCBHZW9USUZGIGltYWdlcyBhcmUgbm90IHN1cHBvcnRlZC4nKVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS5nZXRXaWR0aCgpXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuZ2V0SGVpZ2h0KClcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbENvdW50ID0gd2lkdGggKiBoZWlnaHRcbiAgICAgICAgICAgICAgICBjb25zdCByYXN0ZXIgPSBhd2FpdCBpbWFnZS5yZWFkUmFzdGVycyh7IHNhbXBsZXM6IGJhbmRzIH0pXG4gICAgICAgICAgICAgICAgaWYgKHJhc3Rlci5sZW5ndGggIT09IGJhbmRzLmxlbmd0aCB8fCByYXN0ZXIuc29tZSgoYmFuZCkgPT4gYmFuZC5sZW5ndGggIT09IHBpeGVsQ291bnQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlb1RJRkYgcmFzdGVyIGRhdGEgZG9lcyBub3QgbWF0Y2ggdGhlIGltYWdlIGRpbWVuc2lvbnMuJylcblxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5ZXSA9IGltYWdlLmdldE9yaWdpbigpXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQaXhlbEFyZWEgPSBpbWFnZS5nZXRHZW9LZXlzKCk/LkdUUmFzdGVyVHlwZUdlb0tleSAhPT0gMlxuICAgICAgICAgICAgICAgIGNvbnN0IG5vRGF0YVZhbHVlID0gaW1hZ2UuZ2V0R0RBTE5vRGF0YSgpXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBbXVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB3aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gcm93ICogd2lkdGggKyBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXNQaXhlbEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWCArIGNvbHVtbiAqIHJlc29sdXRpb25YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5YICsgKGNvbHVtbiArIDEpICogcmVzb2x1dGlvblhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3JpZ2luWCArIGNvbHVtbiAqIHJlc29sdXRpb25YIC0gY2VsbFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpc1BpeGVsQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1hdGgubWluKG9yaWdpblkgKyByb3cgKiByZXNvbHV0aW9uWSwgb3JpZ2luWSArIChyb3cgKyAxKSAqIHJlc29sdXRpb25ZKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9yaWdpblkgKyByb3cgKiByZXNvbHV0aW9uWSAtIGNlbGxIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0RhdGEgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBiYW5kSW5kZXggPSAwOyBiYW5kSW5kZXggPCBiYW5kcy5sZW5ndGg7IGJhbmRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByYXN0ZXJbYmFuZEluZGV4XVtwaXhlbF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kTm9EYXRhID0gZ2V0QmFuZE5vRGF0YShub0RhdGFWYWx1ZSwgbWV0YWRhdGFbYmFuZEluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05vRGF0YSA9IE51bWJlci5pc05hTih2YWx1ZSkgfHwgaXNOb0RhdGFWYWx1ZSh2YWx1ZSwgYmFuZE5vRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsW2JhbmROYW1lc1tiYW5kSW5kZXhdXSA9IGlzTm9EYXRhID8gdW5kZWZpbmVkIDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTm9EYXRhKSBoYXNEYXRhID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0RhdGEpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVwcm9jZXNzICYmIHRoaXMucHJlcHJvY2VzcyhjZWxsKSA9PT0gZmFsc2UpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGNlbGwpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSBjZWxsV2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gY2VsbHNcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLnJlZHJhdygpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIGRhdGEgZnJvbSAnICsgdGhpcy51cmwpXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2ZhaWxlZCdcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGNlbGxzIGludGVyc2VjdGluZyB0aGUgY3VycmVudCBnZW9ncmFwaGljIGV4dGVudC5cbiAgICAgKiBAcGFyYW0ge3t4TWluOm51bWJlciwgeE1heDpudW1iZXIsIHlNaW46bnVtYmVyLCB5TWF4Om51bWJlcn19IGV4dEdlb1xuICAgICAqL1xuICAgIHVwZGF0ZVZpZXdDYWNoZShleHRHZW8pIHtcbiAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZSA9IFtdXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0aGlzLmNlbGxzKSB7XG4gICAgICAgICAgICBpZiAoK2NlbGwueCArIHRoaXMucmVzb2x1dGlvbiA8IGV4dEdlby54TWluKSBjb250aW51ZVxuICAgICAgICAgICAgaWYgKCtjZWxsLnggLSB0aGlzLnJlc29sdXRpb24gPiBleHRHZW8ueE1heCkgY29udGludWVcbiAgICAgICAgICAgIGlmICgrY2VsbC55ICsgdGhpcy5yZXNvbHV0aW9uIDwgZXh0R2VvLnlNaW4pIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAoK2NlbGwueSAtIHRoaXMucmVzb2x1dGlvbiA+IGV4dEdlby55TWF4KSBjb250aW51ZVxuICAgICAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZS5wdXNoKGNlbGwpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEJhbmROb0RhdGEoZ2xvYmFsTm9EYXRhLCBtZXRhZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gbWV0YWRhdGEgPyBtZXRhZGF0YS5OT0RBVEFfVkFMVUUgOiB1bmRlZmluZWRcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICByZXR1cm4gZ2xvYmFsTm9EYXRhXG59XG5cbmZ1bmN0aW9uIGlzTm9EYXRhVmFsdWUodmFsdWUsIG5vRGF0YVZhbHVlKSB7XG4gICAgaWYgKG5vRGF0YVZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKG5vRGF0YVZhbHVlKSA/IE51bWJlci5pc05hTih2YWx1ZSkgOiB2YWx1ZSA9PT0gbm9EYXRhVmFsdWVcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuaihjaHVua0lkLCBwcm9taXNlcyk7XG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IChjaHVua0lkICsgXCIuZ3JpZHZpei10aWZmLmpzXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKTsiLCJjb25zdCBpblByb2dyZXNzID0ge307XG5jb25zdCBkYXRhV2VicGFja1ByZWZpeCA9IFwiZ3JpZHZpei50aWZmOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0bGV0IHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHRjb25zdCBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGNvbnN0IGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zPy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xuY29uc3QgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdD8udGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdGxldCBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwcz86Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjp8Wz8jXS4qJC9nLCBcIlwiKS5yZXBsYWNlKC9cXC9bXi9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbmNvbnN0IGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdGxldCBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHRjb25zdCBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLmV2ZW50ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuY29uc3Qgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0bGV0IFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxuY29uc3QgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dyaWR2aXpfdGlmZlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtncmlkdml6X3RpZmZcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vQHRzLWNoZWNrXG4ndXNlIHN0cmljdCdcblxuZXhwb3J0IHsgR2VvVElGRiB9IGZyb20gXCIuL0dlb1RJRkYuanNcIlxuZXhwb3J0IHsgQ09HZW8gfSBmcm9tIFwiLi9DT0dlby5qc1wiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=