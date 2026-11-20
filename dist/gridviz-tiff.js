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
     * @param {object} map
     * @param {string} url
     * @param {number} resolution Initial resolution; the COG pixel size is used after loading.
     * @param {{preprocess?:function(object):boolean, bands?:number[], headers?:object, credentials?:RequestCredentials, maxRanges?:number}} opts
     */
    constructor(map, url, resolution, opts = {}) {
        super(map, url, resolution, opts)
        this.remoteOptions = opts.remoteOptions || opts

        /** @type {Array.<object>} */
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

        /** @type {{count:number,names:string[],noData:any} | undefined} */
        this.rasterInfo = undefined

        /** @type {Map<string, Array.<object>>} */
        this.viewCache = new Map()

        /** @type {AbortController|undefined} */
        this.abortController = undefined

        /** @type {{xMin:number,xMax:number,yMin:number,yMax:number}|undefined} */
        this.pendingView = undefined

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
                    this.abortController = new AbortController()
                    this.tiff = await (0,geotiff__WEBPACK_IMPORTED_MODULE_1__.fromUrl)(
                        this.url,
                        remoteOptions,
                        this.abortController.signal
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

                    const cellWidth = Math.abs(resolutionX)
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
        if (!this.image || !this.rasterInfo) return

        const bbox = getClippedBoundingBox(this.image, extGeo)
        if (!bbox) {
            this.cells = []
            this.cellsViewCache = []
            return
        }

        const key = [
            bbox[0].toPrecision(12),
            bbox[1].toPrecision(12),
            bbox[2].toPrecision(12),
            bbox[3].toPrecision(12),
        ].join(',')
        if (this.viewCache.has(key)) {
            this.cells = this.viewCache.get(key) || []
            this.updateViewCache(extGeo)
            if (this.map) this.map.redraw()
            return
        }

        this.cancelCurrentRequests()
        this.abortController = new AbortController()
        this.dataLoadingStatus = 'loading'

        try {
            const [originX, originY] = this.image.getOrigin()
            const [fullResolutionX, fullResolutionY] = this.image.getResolution()
            const imageCount = await this.tiff.getImageCount()
            const selectedImage = await getBestImage(
                this.tiff,
                imageCount,
                this.resolution,
                fullResolutionX,
                fullResolutionY
            )
            const [resolutionX, resolutionY] = selectedImage.getResolution(this.image)
            const isPixelArea = this.image.getGeoKeys()?.GTRasterTypeGeoKey !== 2
            const window = getPixelWindow(
                originX,
                originY,
                resolutionX,
                resolutionY,
                selectedImage.getWidth(),
                selectedImage.getHeight(),
                bbox
            )

            if (!window) {
                this.cells = []
                this.cellsViewCache = []
                this.dataLoadingStatus = 'loaded'
                return
            }

            const raster = await selectedImage.readRasters({
                window,
                samples: this.bands,
                signal: this.abortController.signal,
            })
            if (this.abortController.signal.aborted) return
            if (!Array.isArray(raster) || raster.length !== this.bands.length)
                throw new Error('COGeo raster data does not match the selected bands.')

            const width = window[2] - window[0]
            const height = window[3] - window[1]
            const pixelCount = width * height
            if (raster.some((band) => band.length !== pixelCount))
                throw new Error('COGeo raster data does not match the image window.')

            const cells = []
            for (let row = 0; row < height; row++) {
                for (let column = 0; column < width; column++) {
                    const pixel = row * width + column
                    const cell = {
                        x: isPixelArea
                            ? Math.min(
                                  originX + (window[0] + column) * resolutionX,
                                  originX + (window[0] + column + 1) * resolutionX
                              )
                            : originX + (window[0] + column) * resolutionX - Math.abs(resolutionX) / 2,
                        y: isPixelArea
                            ? Math.min(
                                  originY + (window[1] + row) * resolutionY,
                                  originY + (window[1] + row + 1) * resolutionY
                              )
                            : originY + (window[1] + row) * resolutionY - Math.abs(resolutionY) / 2,
                    }
                    let hasData = false

                    for (let bandIndex = 0; bandIndex < this.bands.length; bandIndex++) {
                        const value = raster[bandIndex][pixel]
                        const bandNoData = getBandNoData(
                            this.rasterInfo.noData,
                            this.rasterInfo.metadata[bandIndex]
                        )
                        const isNoData = Number.isNaN(value) || isNoDataValue(value, bandNoData)
                        cell[this.rasterInfo.names[bandIndex]] = isNoData ? undefined : value
                        if (!isNoData) hasData = true
                    }

                    if (!hasData) continue
                    if (this.preprocess && this.preprocess(cell) === false) continue
                    cells.push(cell)
                }
            }

            if (this.viewCache.size >= 20) {
                const oldest = this.viewCache.keys().next().value
                if (oldest) this.viewCache.delete(oldest)
            }
            this.viewCache.set(key, cells)
            this.cells = cells
            this.dataLoadingStatus = 'loaded'
            this.updateViewCache(extGeo)
            if (this.map) this.map.redraw()
        } catch (error) {
            if (error && error.name === 'AbortError') return
            console.error('Could not load view from ' + this.url)
            console.error(error)
            this.dataLoadingStatus = 'failed'
            this.cells = []
        }
    }

    cancelCurrentRequests() {
        if (this.abortController) this.abortController.abort()
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

async function getBestImage(tiff, imageCount, desiredResolution) {
    const allImages = []
    for (let index = 0; index < imageCount; index++) {
        const image = await tiff.getImage(index)
        const subfileType = image.fileDirectory.getValue('SubfileType')
        const newSubfileType = image.fileDirectory.getValue('NewSubfileType')
        if (index === 0 || subfileType === 2 || (newSubfileType || 0) & 1)
            allImages.push(image)
    }
    allImages.sort((a, b) => a.getWidth() - b.getWidth())

    const firstImage = allImages[0]
    let selected = firstImage
    for (const image of allImages) {
        selected = image
        const imageResolution = Math.abs(image.getResolution(firstImage)[0])
        if (desiredResolution > imageResolution) break
    }
    return selected
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHZpei10aWZmLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWQSxxRDs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDbUI7QUFJM0M7O0FBRWpDO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixhQUFhO0FBQ2I7QUFDTztBQUNQLFNBQVMsb0VBQWU7QUFDeEIsSUFBSSxpRkFBMEIsMEJBQTBCLHFFQUFZO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QjtBQUNPO0FBQ1AsU0FBUyxpRkFBMEI7QUFDbkM7QUFDQTtBQUNBLElBQUksdUVBQWtCO0FBQ3RCLE9BQU8scUVBQVk7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIyQjs7QUFFM0IsV0FBVyxVQUFVLDBCQUEwQjtBQUMvQywyQkFBMkIsMkRBQWE7O0FBRXhDLDhCQUE4Qiw4REFBWTtBQUMxQztBQUNBO0FBQ0EsNEJBQTRCLHFFQUFtQjtBQUMvQyxhQUFhLDRFQUEwQjtBQUN2QyxLQUFLO0FBQ0wsR0FBRzs7QUFFSCxHQUFHLDREQUFjO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQSxVQUFVLDREQUFjLE1BQU0sZ0ZBQWtDO0FBQ2hFLElBQUksb0VBQXNCLFVBQVUsd0VBQTBCO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDhEQUFZO0FBQzNCLEVBQUUscUVBQW1CLHVCQUF1Qiw4RUFBNEI7QUFDeEU7QUFDQTs7QUFFQSxXQUFXLFVBQVUsbUJBQW1CO0FBQ3hDLHVCQUF1QiwyREFBYTs7QUFFcEM7QUFDQSxvQ0FBb0MsOERBQVksQ0FBQywrREFBaUI7QUFDbEU7QUFDQTtBQUNBLHdCQUF3QixxRUFBbUI7QUFDM0MsYUFBYSx3RUFBc0I7QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxrQkFBa0IsZ0VBQWMsQ0FBQyxvRUFBc0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVFQUFvQixtQ0FBbUMsaUZBQStCLENBQUMsb0VBQXNCO0FBQy9HOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQLGdCQUFnQiw4REFBWTtBQUM1QixFQUFFLHFFQUFtQjtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0UyQjs7QUFFM0IsK0JBQStCLHFEQUFPOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDs7QUFFQTtBQUNBLE9BQU8sZ0VBQWM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFPOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLDZEQUFXO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsK0RBQWlCO0FBQ3BDLHNCQUFzQixnRUFBa0I7QUFDeEMsdUJBQXVCLCtEQUFpQjs7QUFFeEMsc0JBQXNCLCtEQUFpQjtBQUN2Qyx1QkFBdUIsOERBQWdCOztBQUV2QyxnQkFBZ0IsU0FBUztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwrREFBaUI7QUFDM0MsZ0JBQWdCLFVBQVU7QUFDMUIsbUJBQW1CO0FBQ25CLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBLG9CQUFvQjtBQUNwQixtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBOztBQUVBLDBCQUEwQiwrREFBaUI7QUFDM0MsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLCtEQUFpQjtBQUN6QyxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S087QUFDQTtBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNBO0FBQ1A7QUFDTztBQUNQO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUNBOztBQUU0RTs7QUFFNUUsV0FBVywrRkFBK0Y7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDhFQUE4RTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDTzs7QUFFUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxXQUFXLDREQUE0RDtBQUNoRSxtREFBbUQsS0FBSztBQUMvRCwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHFGQUEwQztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxXQUFXLCtDQUErQztBQUNuRCxnQ0FBZ0MsS0FBSztBQUM1Qzs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBLFdBQVcsMkRBQTJEO0FBQy9EO0FBQ1AsV0FBVywwQ0FBMEM7QUFDOUM7QUFDUCxXQUFXLHVEQUF1RDtBQUMzRDtBQUNQO0FBQ0E7QUFDTztBQUNQLFdBQVcsd0NBQXdDO0FBQzVDOztBQUVQO0FBQ087QUFDUDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNPO0FBQ0E7QUFDUDtBQUNBLFdBQVcsK0RBQStEO0FBQ25FO0FBQ1AsV0FBVyxzQ0FBc0M7QUFDMUM7O0FBRVA7QUFDTztBQUNQLFdBQVcsa0RBQWtEO0FBQ3REO0FBQ1A7O0FBRUE7QUFDQSxjQUFjLDZJQUE2STtBQUMzSixXQUFXLEtBQUs7QUFDVDtBQUNQO0FBQ087QUFDQTtBQUNQLFdBQVcsc0RBQXNEO0FBQzFEO0FBQ1AsV0FBVyxzREFBc0Q7QUFDMUQ7QUFDUDtBQUNBO0FBQ0EsV0FBVyxnRUFBZ0U7QUFDcEU7QUFDUDtBQUNBO0FBQ0EsV0FBVyw2RUFBNkU7QUFDakY7QUFDUCxXQUFXLDRDQUE0QztBQUNoRDtBQUNQO0FBQ0E7QUFDQSxXQUFXLHlGQUF5RjtBQUM3RjtBQUNQLFdBQVcseUZBQXlGO0FBQzdGO0FBQ1A7QUFDQTtBQUNBLFdBQVcsMEZBQTBGO0FBQzlGO0FBQ1AsV0FBVywwRUFBMEU7QUFDOUU7QUFDUCxXQUFXLDBFQUEwRTtBQUM5RTtBQUNQO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQztBQUMvQztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0NBQXNDO0FBQzFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDMUM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUNqQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPOztBQUVQO0FBQ087QUFDUCxXQUFXLGdDQUFnQztBQUNwQztBQUNQO0FBQ0E7O0FBRUE7QUFDTzs7QUFFUDtBQUNPOztBQUVQO0FBQ0EsV0FBVyxLQUFLO0FBQ1Q7QUFDUCxXQUFXLDhEQUE4RDtBQUNsRTs7QUFFUDtBQUNBLFdBQVcsNEdBQTRHO0FBQ2hILDJEQUEyRDs7QUFFbEU7QUFDTzs7QUFFUDtBQUNBO0FBQ0EsV0FBVyw0RUFBNEU7QUFDaEY7QUFDUDtBQUNBO0FBQ0EsV0FBVyx5RkFBeUY7QUFDN0Y7QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNPO0FBQ1A7QUFDQSxXQUFXLGFBQWEsd0NBQXdDO0FBQ3pEO0FBQ1AsV0FBVyxhQUFhLHlDQUF5QztBQUMxRDs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNPO0FBQ1A7QUFDQSxXQUFXLGFBQWEsMkNBQTJDO0FBQzVEO0FBQ1AsV0FBVyxhQUFhLGlEQUFpRDtBQUNsRTtBQUNQLFdBQVcsYUFBYSwyREFBMkQ7QUFDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UFAsMEJBQTBCLHVCQUF1QjtBQUNqRDtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLHdDQUF3QztBQUN0RCxjQUFjLGdHQUFnRztBQUM5RyxjQUFjLFNBQVM7QUFDdkI7QUFDQSxXQUFXLHdDQUF3QztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUF1RDtBQUNsRSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlDQUF5QztBQUNwRCxXQUFXLHdDQUF3QztBQUNuRCxXQUFXLGdHQUFnRztBQUMzRyxXQUFXLFNBQVM7QUFDcEI7QUFDTztBQUNQO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQTJEO0FBQ3JGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLHVEQUF1RDtBQUNsRTtBQUNPO0FBQ1A7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBLFlBQVkscUJBQXFCLGFBQWEsZUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLHVCQUF1QjtBQUNsQyxhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0Esa0VBQWtFLFlBQVk7QUFDOUU7QUFDQSxZQUFZLFdBQVcsYUFBYSxlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0Esa0VBQWtFLFlBQVk7QUFDOUU7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVNQUFrQjtBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdU1BQWtCO0FBQzFDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa05BQW1CO0FBQzNDO0FBQ0EsbUJBQW1CLHVEQUF1RDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnV0FBc0I7QUFDOUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzTkFBdUI7QUFDL0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrVkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQkFBbUIsdURBQXVEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtOQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNOQUF1QjtBQUMvQztBQUNBLG1CQUFtQix1REFBdUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQW1FO0FBQy9FO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUtlO0FBQ2Y7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQyxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUprRDtBQUNuQztBQUNmO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZUFBZSxnRUFBVTtBQUN6QjtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUM2QztBQUNKO0FBQ0Y7QUFDVjtBQUMyQztBQUNiO0FBQ0c7QUFDWjtBQUNpQjtBQUNBO0FBQ007QUFDdkI7QUFDVjtBQUNSO0FBQ2dDO0FBQ3ZCO0FBQ3pDLGNBQWMsYUFBYTtBQUNSO0FBQ0k7QUFDUjtBQUN1RDtBQUNwQztBQUNiO0FBQ3dDO0FBQzdEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQixjQUFjO0FBQ2pELGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQixjQUFjO0FBQ25ELGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLFVBQVU7QUFDeEIsY0FBYyxVQUFVO0FBQ3hCLGNBQWMsVUFBVTtBQUN4QixjQUFjLFVBQVU7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsVUFBVTtBQUN4QixjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLFVBQVU7QUFDeEIsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxVQUFVO0FBQ3hCLGNBQWMsVUFBVTtBQUN4QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0IsY0FBYztBQUNsRSxhQUFhLDBEQUEwRDtBQUN2RTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQSxjQUFjLHVEQUF1RDtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxlQUFlO0FBQzdCLGNBQWMsZUFBZTtBQUM3QjtBQUNBLGNBQWMsV0FBVztBQUN6QixjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxhQUFhO0FBQzNCO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLGVBQWU7QUFDN0IsY0FBYyxXQUFXO0FBQ3pCLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFNBQVM7QUFDdkIsY0FBYyxhQUFhO0FBQzNCO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLHdCQUF3QixXQUFXO0FBQ2pELGNBQWMsUUFBUTtBQUN0QixjQUFjLFNBQVM7QUFDdkIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QixXQUFXLGtDQUFrQztBQUM3QyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZSwrQkFBK0I7QUFDOUM7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZ0I7QUFDNUM7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkIsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBLHdCQUF3QixtREFBVSwyQkFBMkIsbURBQVU7QUFDdkUsd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDLDBEQUEwRCxZQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsUUFBUTtBQUMxQixrQkFBa0IsZUFBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdDQUFnQztBQUMvRDtBQUNBO0FBQ0EsZUFBZSwrQ0FBK0M7QUFDOUQsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBLGtDQUFrQztBQUNsQyxnQkFBZ0IscUNBQXFDO0FBQ3JELGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx5QkFBeUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQSwwQkFBMEIsNEVBQXdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtGQUFrRjtBQUNyRztBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFTO0FBQzVCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1Q0FBdUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG1EQUFVO0FBQzNELGtEQUFrRCxtREFBVTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1EQUFVO0FBQzFELHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx5QkFBeUI7QUFDM0UsNkJBQTZCLHNEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21CO0FBQ25CLGlFQUFlLE9BQU8sRUFBQztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQSw2QkFBNkIsMEJBQTBCO0FBQ3ZEO0FBQ0EsK0JBQStCLHdEQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUJBQXFCO0FBQ2hDLGtDQUFrQyx3QkFBd0I7QUFDMUQsV0FBVyxhQUFhO0FBQ3hCO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDTyx3Q0FBd0M7QUFDL0MsOEJBQThCLG1FQUFnQjtBQUM5QztBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RCxXQUFXLFlBQVk7QUFDdkIsV0FBVyxxQkFBcUI7QUFDaEMsa0NBQWtDLHdCQUF3QjtBQUMxRCxXQUFXLGFBQWE7QUFDeEI7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNPLG9EQUFvRDtBQUMzRCw4QkFBOEIsbUVBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtR0FBbUc7QUFDcEgsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QjtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ087QUFDUCw4QkFBOEIsd0VBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDTztBQUNQLDhCQUE4QiwrREFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQSxVQUFVLDZEQUE2RDtBQUN2RSxVQUFVO0FBQ1Y7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDTztBQUNQLDhCQUE4QiwyRUFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLHFCQUFxQjtBQUNoQyxvREFBb0Q7QUFDcEQ7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNPLGdFQUFnRTtBQUN2RSw4Q0FBOEMsbUVBQWdCO0FBQzlELHlGQUF5RixtRUFBZ0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFzRDtBQUNqRTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLGFBQWE7QUFDYjtBQUNPO0FBQ1AsV0FBVywrREFBWTtBQUN2QjtBQUNnQjtBQUNRO0FBQ1k7QUFDcEMsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsdUJBO0FBQ2tEO0FBQ2xEO0FBQ21ELENBQUM7QUFDcEQ7QUFDeUQsQ0FBQztBQUNvQjtBQUM0QjtBQUNoQztBQUNaO0FBQzlELGFBQWEsMkJBQTJCO0FBQ3hDLGFBQWEsa0JBQWtCO0FBQy9CLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0EsV0FBVywwQkFBMEI7QUFDckMsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyx3QkFBd0I7QUFDbkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxQkFBcUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0QkFBNEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNEQUFzRDtBQUNyRSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsNkNBQTZDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFzRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQTREO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsR0FBRztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdFQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSx3QkFBd0I7QUFDdkMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxrREFBa0Q7QUFDakUsZUFBZSxhQUFhO0FBQzVCO0FBQ0EsaUJBQWlCLFVBQVUsNERBQTRELEdBQUc7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esa0RBQWtELDJCQUEyQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixlQUFlLGVBQWU7QUFDOUIsZUFBZSx5QkFBeUI7QUFDeEMsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxrREFBa0Q7QUFDakUsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxhQUFhO0FBQzVCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0EsbUJBQW1CLDhFQUE4RTtBQUNqRztBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQixtQ0FBbUMsa0JBQWtCO0FBQ3JELHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOEJBQThCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsVUFBVTtBQUN4RixpRkFBaUYsVUFBVTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpRUFBbUI7QUFDL0MsMkJBQTJCLFlBQVk7QUFDdkMsMkJBQTJCLFFBQVEsdUJBQXVCLFFBQVE7QUFDbEU7QUFDQTtBQUNBLDRCQUE0QixzREFBUTtBQUNwQywyQkFBMkIsY0FBYztBQUN6QywyQkFBMkIsUUFBUSx1QkFBdUIsUUFBUTtBQUNsRTtBQUNBLHVEQUF1RCxrQkFBa0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0JBQWtCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCLG1CQUFtQjtBQUN4RCxpQkFBaUIsMERBQTBEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCLG9CQUFvQjtBQUN6RCxpQkFBaUIsK0RBQStEO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCLHNCQUFzQjtBQUMzRCxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CLFdBQVc7QUFDOUMsaUJBQWlCLCtEQUErRDtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CLFdBQVc7QUFDOUMsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBLGtDQUFrQztBQUNsQyxnQkFBZ0IsNEZBQTRGO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBLGtGQUFrRixXQUFXO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkVBQW9CO0FBQzVEO0FBQ0E7QUFDQSxvQkFBb0IsaUVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCLG1CQUFtQjtBQUNwRCxpQkFBaUIsMERBQTBEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCLG9CQUFvQjtBQUNyRCxpQkFBaUIsK0RBQStEO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCLHNCQUFzQjtBQUN2RCxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLFdBQVc7QUFDMUMsaUJBQWlCLCtEQUErRDtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBLDhCQUE4QjtBQUM5QixnQkFBZ0Isa0ZBQWtGO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUEwQjtBQUM3QztBQUNBO0FBQ0Esb0RBQW9ELDJEQUFrQjtBQUN0RTtBQUNBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1FQUEwQjtBQUMzQyxpQkFBaUIsbUVBQTBCO0FBQzNDLGlCQUFpQixtRUFBMEI7QUFDM0M7QUFDQTtBQUNBLGlCQUFpQixtRUFBMEI7QUFDM0M7QUFDQTtBQUNBLGlCQUFpQixtRUFBMEI7QUFDM0MsaUJBQWlCLG1FQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1FQUEwQjtBQUMzQyx1QkFBdUIsd0RBQWU7QUFDdEM7QUFDQSxpQkFBaUIsbUVBQTBCO0FBQzNDLHVCQUF1Qix3REFBZTtBQUN0QztBQUNBLGlCQUFpQixtRUFBMEI7QUFDM0MsdUJBQXVCLG9EQUFXLG9CQUFvQixhQUFhO0FBQ25FO0FBQ0EsaUJBQWlCLG1FQUEwQjtBQUMzQyx1QkFBdUIsaURBQVE7QUFDL0I7QUFDQSxpQkFBaUIsbUVBQTBCO0FBQzNDLHVCQUF1QixrREFBUztBQUNoQztBQUNBLGlCQUFpQixtRUFBMEI7QUFDM0MsdUJBQXVCLG1EQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseUNBQXlDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlLGlFQUFpRSxJQUFJO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCLHVDQUF1QztBQUN4RDtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sZUFBZSxHQUFHO0FBQzVDLG9CQUFvQix1RUFBYztBQUNsQztBQUNBLDJDQUEyQyxtRUFBWTtBQUN2RDtBQUNBO0FBQ0Esa0RBQWtELG1FQUFZO0FBQzlEO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBLHFCQUFxQixtRUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7QUFDNUIsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbjlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEU7QUFDeUQ7QUFDckksYUFBYSx1QkFBdUI7QUFDcEMsY0FBYyx5Q0FBeUM7QUFDdkQscUJBQXFCLDZDQUFJO0FBQ3pCLHdCQUF3QixpREFBTSxDQUFDLG9EQUFXO0FBQzFDLFdBQVcsNENBQTRDO0FBQ3ZEO0FBQ0EsaURBQU07QUFDTixpREFBTTtBQUNOLHNCQUFzQixtREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyx5Q0FBeUM7QUFDdkQsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsTUFBTTtBQUNwQixjQUFjLE1BQU07QUFDcEIsY0FBYyxNQUFNO0FBQ3BCLGNBQWMsMkRBQTJEO0FBQ3pFLGNBQWMsTUFBTTtBQUNwQixjQUFjLE1BQU07QUFDcEIsY0FBYyxrREFBa0Q7QUFDaEUsY0FBYyxrREFBa0Q7QUFDaEUsY0FBYyxrREFBa0Q7QUFDaEUsY0FBYyxZQUFZO0FBQzFCLGNBQWMsY0FBYztBQUM1QixjQUFjLGNBQWM7QUFDNUIsY0FBYyxhQUFhO0FBQzNCLGNBQWMsWUFBWTtBQUMxQixjQUFjLFlBQVk7QUFDMUIsY0FBYyxrREFBa0Q7QUFDaEU7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxlQUFlO0FBQzlCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxRQUFRLGdEQUFLO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxRQUFRLGdEQUFLO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLGdEQUFLO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBSztBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsWUFBWTtBQUN2QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxrQ0FBa0M7QUFDN0MsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCLElBQUksc0RBQWE7QUFDMUU7QUFDQTtBQUNBLG9EQUFvRCxJQUFJO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxJQUFJO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELG1EQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBSztBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxnREFBSztBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxnREFBSztBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGdEQUFLO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2Q0FBNkM7QUFDeEQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQWlEO0FBQzVELFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyx1QkFBdUI7QUFDbEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxPQUFPO0FBQzlFO0FBQ0E7QUFDQSx1RUFBdUUsTUFBTTtBQUM3RTtBQUNBLGVBQWUscUVBQXFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZCQUE2QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DLHVCQUF1Qiw4Q0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFLO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsSUFBSSxrREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBCQUEwQjtBQUNyQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2RUFBNkU7QUFDeEYsV0FBVyx1QkFBdUI7QUFDbEMsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2QkFBNkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFLO0FBQ2IsWUFBWSxnREFBSztBQUNqQixnQkFBZ0IsZ0RBQUs7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFpQjtBQUM3QjtBQUNBO0FBQ0EsWUFBWSwwREFBZTtBQUMzQjtBQUNBO0FBQ0EsWUFBWSwyREFBZ0I7QUFDNUI7QUFDQTtBQUNBLHFDQUFxQyxnREFBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNEQUFhO0FBQ3pDLGtEQUFrRCxvREFBb0Q7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQsd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsT0FBTztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxvREFBb0Q7QUFDakc7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hsQkEsYUFBYSxZQUFZO0FBQ2xCO0FBQ1AscUJBQXFCLEdBQUc7QUFDeEIsc0JBQXNCLEdBQUc7QUFDekIsc0JBQXNCLEdBQUc7QUFDekIscUJBQXFCLEdBQUc7QUFDeEIseUJBQXlCLEdBQUc7QUFDNUIsc0JBQXNCLEdBQUc7QUFDekIsMEJBQTBCLEdBQUc7QUFDN0IsdUJBQXVCLEdBQUc7QUFDMUIsc0JBQXNCLEdBQUc7QUFDekIsMEJBQTBCLElBQUk7QUFDOUIsc0JBQXNCLElBQUk7QUFDMUIsdUJBQXVCLElBQUk7QUFDM0I7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBLHNCQUFzQixJQUFJO0FBQzFCLHVCQUF1QixJQUFJO0FBQzNCLHFCQUFxQixJQUFJO0FBQ3pCO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEMsY0FBYyxxQ0FBcUM7QUFDbkQsY0FBYywrQkFBK0I7QUFDdEMsa0NBQWtDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsY0FBYyw2Q0FBNkM7QUFDM0Q7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QixhQUFhLFFBQVE7QUFDckIsWUFBWSxZQUFZO0FBQ3hCO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsU0FBUztBQUN2QjtBQUNPLGlDQUFpQyxPQUFPO0FBQy9DLHNCQUFzQiw4Q0FBOEM7QUFDcEUsbUJBQW1CLCtDQUErQztBQUNsRSxrQkFBa0IsK0NBQStDO0FBQ2pFLG1CQUFtQiwrQ0FBK0M7QUFDbEUscUJBQXFCLDhEQUE4RDtBQUNuRixtQkFBbUIsK0NBQStDO0FBQ2xFLGlDQUFpQywrQ0FBK0M7QUFDaEYscUJBQXFCLGtDQUFrQztBQUN2RCxpQkFBaUIsa0NBQWtDO0FBQ25ELGtCQUFrQixrQ0FBa0M7QUFDcEQsaUJBQWlCLGtDQUFrQztBQUNuRCxvQkFBb0Isa0NBQWtDO0FBQ3RELHdCQUF3QixrQ0FBa0M7QUFDMUQsWUFBWSxrQ0FBa0M7QUFDOUMsYUFBYSxrQ0FBa0M7QUFDL0Msb0JBQW9CLGlEQUFpRDtBQUNyRSxtQkFBbUIsa0NBQWtDO0FBQ3JELHVCQUF1QiwrQ0FBK0M7QUFDdEUsb0JBQW9CLCtDQUErQztBQUNuRSx1QkFBdUIsZ0RBQWdEO0FBQ3ZFLHNCQUFzQixpREFBaUQ7QUFDdkUsc0JBQXNCLGlEQUFpRDtBQUN2RSxtQkFBbUIscUNBQXFDO0FBQ3hELG1CQUFtQixxQ0FBcUM7QUFDeEQsMkJBQTJCLCtDQUErQztBQUMxRSxnQkFBZ0Isa0NBQWtDO0FBQ2xELGlCQUFpQixxQ0FBcUM7QUFDdEQsaUJBQWlCLHFDQUFxQztBQUN0RCxtQkFBbUIsaUNBQWlDO0FBQ3BELHNCQUFzQixpQ0FBaUM7QUFDdkQsd0JBQXdCLGtDQUFrQztBQUMxRCx5QkFBeUIsaURBQWlEO0FBQzFFLGlCQUFpQixpQ0FBaUM7QUFDbEQsaUJBQWlCLGlDQUFpQztBQUNsRCxzQkFBc0Isa0NBQWtDO0FBQ3hELGtCQUFrQixpREFBaUQ7QUFDbkUsd0JBQXdCLGlEQUFpRDtBQUN6RSxnQkFBZ0Isa0NBQWtDO0FBQ2xELGdCQUFnQixrQ0FBa0M7QUFDbEQsY0FBYyxrQ0FBa0M7QUFDaEQsb0JBQW9CLGtDQUFrQztBQUN0RCxpQkFBaUIsa0NBQWtDO0FBQ25ELGtCQUFrQixvREFBb0Q7QUFDdEUsNkJBQTZCLG9EQUFvRDtBQUNqRixnQkFBZ0IsaURBQWlEO0FBQ2pFLHFCQUFxQixpREFBaUQ7QUFDdEUsaUJBQWlCLCtDQUErQztBQUNoRSxrQkFBa0IsK0NBQStDO0FBQ2pFLG1CQUFtQixnREFBZ0Q7QUFDbkUsc0JBQXNCLGlEQUFpRDtBQUN2RSxjQUFjLGtDQUFrQztBQUNoRCxnQkFBZ0Isa0NBQWtDO0FBQ2xELG9CQUFvQixrQ0FBa0M7QUFDdEQsZ0JBQWdCLGdEQUFnRDtBQUNoRSxxQkFBcUIsa0NBQWtDO0FBQ3ZELG9CQUFvQiw2REFBNkQ7QUFDakYsb0JBQW9CLDhEQUE4RDtBQUNsRix1QkFBdUIseUJBQXlCO0FBQ2hELHVCQUF1Qix5QkFBeUI7QUFDaEQscUJBQXFCLGlEQUFpRDtBQUN0RSxnQkFBZ0Isa0NBQWtDO0FBQ2xELDZCQUE2QixpQ0FBaUM7QUFDOUQsa0NBQWtDLGlDQUFpQztBQUNuRSwyQkFBMkIsa0NBQWtDO0FBQzdELDhCQUE4QixpREFBaUQ7QUFDL0UsMkJBQTJCLGlEQUFpRDtBQUM1RSxtQkFBbUIsZ0RBQWdEO0FBQ25FLG9CQUFvQixnREFBZ0Q7QUFDcEUsb0JBQW9CLGdEQUFnRDtBQUNwRSx5QkFBeUIsb0RBQW9EO0FBQzdFLHdCQUF3QixpREFBaUQ7QUFDekUsd0JBQXdCLGtDQUFrQztBQUMxRCwyQkFBMkIsZ0RBQWdEO0FBQzNFLGlCQUFpQixvQ0FBb0M7QUFDckQsbUJBQW1CLFVBQVU7QUFDN0Isb0JBQW9CLFVBQVU7QUFDOUIsZ0JBQWdCLFVBQVU7QUFDMUIsOEJBQThCLFVBQVU7QUFDeEMsY0FBYyxVQUFVO0FBQ3hCLHlCQUF5QixVQUFVO0FBQ25DLGVBQWUsVUFBVTtBQUN6QixrQkFBa0Isc0NBQXNDO0FBQ3hELHNCQUFzQix5QkFBeUI7QUFDL0MsZUFBZSx5QkFBeUI7QUFDeEMsc0JBQXNCLFVBQVU7QUFDaEMsc0JBQXNCLFVBQVU7QUFDaEMscUJBQXFCLFlBQVk7QUFDakMsa0JBQWtCLFlBQVk7QUFDOUIseUJBQXlCLFlBQVk7QUFDckMsd0JBQXdCLFlBQVk7QUFDcEMsZUFBZSxxREFBcUQ7QUFDcEUsbUJBQW1CLFlBQVk7QUFDL0Isb0JBQW9CLFlBQVk7QUFDaEMsa0JBQWtCLFlBQVk7QUFDOUIsYUFBYSxZQUFZO0FBQ3pCLHVCQUF1QixZQUFZO0FBQ25DLGVBQWUsWUFBWTtBQUMzQixxQkFBcUIsWUFBWTtBQUNqQyxtQkFBbUIsWUFBWTtBQUMvQixpQkFBaUIsWUFBWTtBQUM3Qix5QkFBeUIsWUFBWTtBQUNyQyxtQkFBbUIsWUFBWTtBQUMvQixZQUFZLFlBQVk7QUFDeEIsa0JBQWtCLFlBQVk7QUFDOUIsa0JBQWtCLGlDQUFpQztBQUNuRCxXQUFXLFVBQVU7QUFDckIscUJBQXFCLFlBQVk7QUFDakMsbUJBQW1CLGlEQUFpRDtBQUNwRSxpQkFBaUIsWUFBWTtBQUM3Qix1QkFBdUIsaUVBQWlFO0FBQ3hGLHFCQUFxQixpRUFBaUU7QUFDdEYsMkJBQTJCLGlFQUFpRTtBQUM1Rix1QkFBdUIsZ0VBQWdFO0FBQ3ZGLHVCQUF1QixpRUFBaUU7QUFDeEYsc0JBQXNCLGlEQUFpRDtBQUN2RSxzQkFBc0IseUJBQXlCO0FBQy9DLENBQUM7QUFDRCxjQUFjLDRCQUE0QjtBQUMxQyxjQUFjLHlEQUF5RDtBQUN2RTtBQUNBLGFBQWE7QUFDYixPQUFPLHVFQUF1RTtBQUM5RSxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQSxhQUFhLGVBQWUsdUVBQXVFO0FBQ25HLGlEQUFpRCwrQkFBK0I7QUFDaEY7QUFDQSxjQUFjLDJEQUEyRCxVQUFVLFdBQVc7QUFDOUY7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLG9CQUFvQjtBQUNqQyw0QkFBNEIsaUNBQWlDO0FBQzdELDRCQUE0QixnQ0FBZ0M7QUFDNUQsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCLDBDQUEwQztBQUNqRztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQSxVQUFVLGlCQUFpQiw0RkFBNEY7QUFDdkg7QUFDTztBQUNQO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsbUNBQW1DO0FBQzlDLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsZUFBZSw4RkFBOEY7QUFDN0c7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPLCtCQUErQixPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsY0FBYyx1Q0FBdUM7QUFDckQ7QUFDQSxVQUFVO0FBQ1Y7QUFDTywyQkFBMkIsNEJBQTRCLE1BQU07QUFDcEU7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WnVDO0FBQytEO0FBQ3RHO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsaURBQWlEO0FBQzlELFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkIsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkIsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBO0FBQ0Esd0RBQXdELFVBQVU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsVUFBVTtBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBVTtBQUN2QixhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QixhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQSxhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0EsYUFBYSxtREFBVTtBQUN2QjtBQUNBLGFBQWEsbURBQVU7QUFDdkI7QUFDQTtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBc0Q7QUFDakUsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsV0FBVztBQUN0QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE1BQU07QUFDakIsYUFBYSxpREFBaUQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBc0Q7QUFDakUsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsV0FBVztBQUN0QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSwrREFBK0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBc0Q7QUFDakUsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsV0FBVztBQUN0QixXQUFXLGtDQUFrQztBQUM3QyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixhQUFhLCtEQUErRDtBQUM1RTtBQUNBO0FBQ0EsNEJBQTRCLDZEQUFnQjtBQUM1QztBQUNBO0FBQ0Esc0NBQXNDLG1EQUFVLDJCQUEyQixtREFBVTtBQUNyRjtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFVO0FBQ2hDLDBEQUEwRCxZQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUE2QztBQUM1RCxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsa0NBQWtDO0FBQ2pELGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBMEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHNDQUFzQyxxREFBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLHdCQUF3QjtBQUN6QyxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTywyQkFBMkIsaUJBQWlCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiwwQ0FBMEMscURBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZSx3REFBd0Q7QUFDdkU7QUFDQSxlQUFlLDhCQUE4QjtBQUM3QyxlQUFlLG1DQUFtQztBQUNsRDtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVDQUF1QztBQUN0RCxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVFQUF1RTtBQUN6RixlQUFlLEdBQUc7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0EsMkJBQTJCLHVEQUFjO0FBQ3pDLGtEQUFrRCxJQUFJO0FBQ3RELHNDQUFzQyxRQUFRLEtBQUssSUFBSTtBQUN2RDtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkM7QUFDQSwwQkFBMEIsS0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0NBQWdDO0FBQ2xELGVBQWUsVUFBVTtBQUN6QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkM7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLHlDQUF5QztBQUMxRDtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0REFBNEQ7QUFDN0U7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQXVEO0FBQzFFO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RCxxQ0FBcUMsbURBQW1ELEdBQUcsb0RBQVc7QUFDdEcsd0NBQXdDLGlDQUFpQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsSUFBSTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBLDREQUE0RCx1REFBYztBQUMxRSx1RUFBdUUsSUFBSTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsNkNBQTZDO0FBQzVELGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNEJBQTRCO0FBQzdEO0FBQ0EseUNBQXlDLGtDQUFrQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkRBQWdCO0FBQ3BEO0FBQ0EsNEJBQTRCLHVEQUFjO0FBQzFDLDBCQUEwQix1REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZEQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUMsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUNBQXFDO0FBQ2hELFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELE9BQU87QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QyxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxPQUFPO0FBQ3RFO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TE87QUFDUCxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQSxzREFBc0Q7QUFDdEQsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHNkM7QUFDSjtBQUN6QyxnQ0FBZ0Msc0RBQVU7QUFDMUM7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQ0FBaUM7QUFDaEQsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ2xCO0FBQ1A7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsU0FBUyx3QkFBd0I7QUFDeEM7QUFDUDtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENpQztBQUNtQztBQUN2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDRCQUE0QixzREFBVTtBQUM3QztBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsMEJBQTBCLHFDQUFxQyxJQUFJO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGVBQWUsYUFBYTtBQUM1QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywrQ0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBYztBQUNwQztBQUNBO0FBQ0EsdUNBQXVDLDhDQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw0REFBNEQ7QUFDN0gscUNBQXFDLDRCQUE0QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaURBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGVBQWUsb0JBQW9CO0FBQ25DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYSxZQUFZO0FBQ3hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3FEO0FBQ3JELDRCQUE0QixrREFBWTtBQUN4QztBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxHQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNPLDBCQUEwQixnREFBVTtBQUMzQztBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWEsV0FBVztBQUN2QyxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0Isa0JBQWtCLElBQUk7QUFDMUM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHdCO0FBQ0U7QUFDRDtBQUM0QjtBQUNUO0FBQzVDLDJCQUEyQixrREFBWTtBQUN2QztBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0MsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5QixnREFBVTtBQUMxQyxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EseUJBQXlCLHNDQUFZO0FBQ3JDLDhEQUE4RCxpQ0FBSSxHQUFHLGtDQUFLO0FBQzFFO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QyxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpREFBVTtBQUNsRDtBQUNBLDJFQUEyRSxpREFBVTtBQUNyRjtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixZQUFZLHVCQUF1QixJQUFJO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZxRDtBQUNUO0FBQzVDLDBCQUEwQixrREFBWTtBQUN0QztBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sd0JBQXdCLGdEQUFVO0FBQ3pDO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkMsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsWUFBWSx1QkFBdUIsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlEb0I7QUFDeUI7QUFDN0M7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUNBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLGtCQUFrQjtBQUM3QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQ0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFlBQVk7QUFDdkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTLHNDQUFzQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9DQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHlCQUF5QixzREFBVTtBQUNuQztBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUNBQWlDO0FBQ2hELGVBQWUsYUFBYTtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ2I7QUFDUDtBQUNBO0FBQ0EsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RjZDO0FBQzdDLCtCQUErQixzREFBVTtBQUN6QztBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRCxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ087QUFDUDtBQUNBO0FBQ0Esc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QixjQUFjO0FBQ2Q7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSx3REFBd0Q7QUFDeEQsbUNBQW1DLHlCQUF5QjtBQUM1RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0IsY0FBYyw0Q0FBNEM7QUFDMUQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU8scUdBQXFHO0FBQ3pIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hzRjtBQUN6QztBQUNNO0FBQ0g7QUFDSjtBQUNFO0FBQzlDLGNBQWMsNENBQTRDO0FBQzFELDJCQUEyQixzREFBVTtBQUNyQztBQUNBLGVBQWUsb0NBQW9DO0FBQ25ELGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0EsMEJBQTBCLHdDQUF3QyxJQUFJO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRCxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZELGVBQWUsYUFBYTtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEIsZ0JBQWdCLFFBQVEsT0FBTyxHQUFHLG9CQUFvQjtBQUNsRiwrQkFBK0I7QUFDL0IsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWUsRUFBRSwrREFBZ0I7QUFDckQ7QUFDQSxtQ0FBbUMsOERBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CLEVBQUUsZ0VBQWlCO0FBQzNEO0FBQ0EsdUJBQXVCLDJDQUEyQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUNBQWlDO0FBQ2hELGVBQWUsYUFBYTtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU8sR0FBRyxvQkFBb0I7QUFDOUQsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRLEVBQUUsZ0VBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLDRDQUE0QyxzQkFBc0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0REFBYSxXQUFXLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsK0NBQStDLG1DQUFtQztBQUM3RixhQUFhO0FBQ2I7QUFDTyxnQ0FBZ0MsWUFBWSx1RUFBdUUsSUFBSTtBQUM5SCx1QkFBdUIseURBQVc7QUFDbEMsOENBQThDLG1DQUFtQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyw0Q0FBNEM7QUFDdkQsYUFBYTtBQUNiO0FBQ08sOEJBQThCLFlBQVksMERBQTBELElBQUk7QUFDL0csdUJBQXVCLHFEQUFTO0FBQ2hDLDhDQUE4QyxtQ0FBbUM7QUFDakY7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsNENBQTRDO0FBQ3ZELGFBQWE7QUFDYjtBQUNPLCtCQUErQixZQUFZLDBEQUEwRCxJQUFJO0FBQ2hILHVCQUF1Qix1REFBVTtBQUNqQyw4Q0FBOEMsbUNBQW1DO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DLFdBQVcsNENBQTRDO0FBQ3ZELGFBQWE7QUFDYjtBQUNPLG9DQUFvQyxZQUFZLDBEQUEwRCxJQUFJO0FBQ3JILDhDQUE4QyxtQ0FBbUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxxQkFBcUI7QUFDaEM7QUFDTyxpQ0FBaUMscUNBQXFDLElBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxZQUFZLFNBQVM7QUFDckIsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BMZTtBQUNmLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dyaWR2aXoudGlmZi9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiZ3JpZHZpelwiLFwiY29tbW9uanNcIjpcImdyaWR2aXpcIixcImNvbW1vbmpzMlwiOlwiZ3JpZHZpelwiLFwiYW1kXCI6XCJncmlkdml6XCJ9Iiwid2VicGFjazovL2dyaWR2aXoudGlmZi9pZ25vcmVkfC9ob21lL2p1anUvd29ya3NwYWNlL2dyaWR2aXotdGlmZi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50fGh0dHAiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL2lnbm9yZWR8L2hvbWUvanVqdS93b3Jrc3BhY2UvZ3JpZHZpei10aWZmL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnR8aHR0cHMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL2lnbm9yZWR8L2hvbWUvanVqdS93b3Jrc3BhY2UvZ3JpZHZpei10aWZmL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnR8dXJsIiwid2VicGFjazovL2dyaWR2aXoudGlmZi9pZ25vcmVkfC9ob21lL2p1anUvd29ya3NwYWNlL2dyaWR2aXotdGlmZi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2V8ZnMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9EYXRhVmlldy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9hcnJheUl0ZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvQHBldGFtb3Jpa2VuL2Zsb2F0MTYvc3JjL191dGlsL2NvbnZlcnRlci5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9tZXNzYWdlcy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL0BwZXRhbW9yaWtlbi9mbG9hdDE2L3NyYy9fdXRpbC9wcmltb3JkaWFscy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZGF0YXNsaWNlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2RhdGF2aWV3NjQuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZ2VvdGlmZi5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9nZW90aWZmaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvZ2VvdGlmZndyaXRlci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9nbG9iYWxzLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2ltYWdlZmlsZWRpcmVjdG9yeS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9yZ2IuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvc291cmNlL2FycmF5YnVmZmVyLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9iYXNlc291cmNlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9ibG9ja2Vkc291cmNlLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnQvYmFzZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50L2ZldGNoLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9jbGllbnQvaHR0cC5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvY2xpZW50L3hoci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvZmlsZS5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvZmlsZXJlYWRlci5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9zb3VyY2UvaHR0cHV0aWxzLmpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL3NvdXJjZS9yZW1vdGUuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3F1aWNrLWxydS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2NvdW50LXN1YnN0cmluZy5tanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vbm9kZV9tb2R1bGVzL3htbC11dGlscy9maW5kLXRhZy1ieS1uYW1lLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2ZpbmQtdGFncy1ieS1uYW1lLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2dldC1hdHRyaWJ1dGUubWpzIiwid2VicGFjazovL2dyaWR2aXoudGlmZi8uL25vZGVfbW9kdWxlcy94bWwtdXRpbHMvaW5kZXgtb2YtbWF0Y2gtZW5kLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9ub2RlX21vZHVsZXMveG1sLXV0aWxzL2luZGV4LW9mLW1hdGNoLm1qcyIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvLi9zcmMvQ09HZW8uanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vc3JjL0dlb1RJRkYuanMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyaWR2aXoudGlmZi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ncmlkdml6LnRpZmYvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZ3JpZHZpei50aWZmLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImdyaWR2aXpcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZ3JpZHZpelwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJncmlkdml6XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZ3JpZHZpelwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3JpZHZpelwiXSA9IHJvb3RbXCJncmlkdml6XCJdIHx8IHt9LCByb290W1wiZ3JpZHZpelwiXVtcInRpZmZcIl0gPSBmYWN0b3J5KHJvb3RbXCJncmlkdml6XCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2dyaWR2aXpfXykgPT4ge1xucmV0dXJuICIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ncmlkdml6X187IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiaW1wb3J0IHsgc2FmZUlmTmVlZGVkIH0gZnJvbSBcIi4vX3V0aWwvYXJyYXlJdGVyYXRvci5tanNcIjtcbmltcG9ydCB7IGNvbnZlcnRUb051bWJlciwgcm91bmRUb0Zsb2F0MTZCaXRzIH0gZnJvbSBcIi4vX3V0aWwvY29udmVydGVyLm1qc1wiO1xuaW1wb3J0IHtcbiAgRGF0YVZpZXdQcm90b3R5cGVHZXRVaW50MTYsXG4gIERhdGFWaWV3UHJvdG90eXBlU2V0VWludDE2LFxufSBmcm9tIFwiLi9fdXRpbC9wcmltb3JkaWFscy5tanNcIjtcblxuLyoqXG4gKiByZXR1cm5zIGFuIHVuc2lnbmVkIDE2LWJpdCBmbG9hdCBhdCB0aGUgc3BlY2lmaWVkIGJ5dGUgb2Zmc2V0IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBEYXRhVmlld1xuICogQHBhcmFtIHtEYXRhVmlld30gZGF0YVZpZXdcbiAqIEBwYXJhbSB7bnVtYmVyfSBieXRlT2Zmc2V0XG4gKiBAcGFyYW0ge1tib29sZWFuXX0gb3B0c1xuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZsb2F0MTYoZGF0YVZpZXcsIGJ5dGVPZmZzZXQsIC4uLm9wdHMpIHtcbiAgcmV0dXJuIGNvbnZlcnRUb051bWJlcihcbiAgICBEYXRhVmlld1Byb3RvdHlwZUdldFVpbnQxNihkYXRhVmlldywgYnl0ZU9mZnNldCwgLi4uc2FmZUlmTmVlZGVkKG9wdHMpKVxuICApO1xufVxuXG4vKipcbiAqIHN0b3JlcyBhbiB1bnNpZ25lZCAxNi1iaXQgZmxvYXQgdmFsdWUgYXQgdGhlIHNwZWNpZmllZCBieXRlIG9mZnNldCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgRGF0YVZpZXdcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3XG4gKiBAcGFyYW0ge251bWJlcn0gYnl0ZU9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge1tib29sZWFuXX0gb3B0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmxvYXQxNihkYXRhVmlldywgYnl0ZU9mZnNldCwgdmFsdWUsIC4uLm9wdHMpIHtcbiAgcmV0dXJuIERhdGFWaWV3UHJvdG90eXBlU2V0VWludDE2KFxuICAgIGRhdGFWaWV3LFxuICAgIGJ5dGVPZmZzZXQsXG4gICAgcm91bmRUb0Zsb2F0MTZCaXRzKHZhbHVlKSxcbiAgICAuLi5zYWZlSWZOZWVkZWQob3B0cylcbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIEFycmF5SXRlcmF0b3JQcm90b3R5cGUsXG4gIEFycmF5SXRlcmF0b3JQcm90b3R5cGVOZXh0LFxuICBBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yLFxuICBHZW5lcmF0b3JQcm90b3R5cGVOZXh0LFxuICBJdGVyYXRvclByb3RvdHlwZSxcbiAgTmF0aXZlQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvcixcbiAgTmF0aXZlV2Vha01hcCxcbiAgT2JqZWN0Q3JlYXRlLFxuICBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgUmVmbGVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgUmVmbGVjdE93bktleXMsXG4gIFN5bWJvbEl0ZXJhdG9yLFxuICBXZWFrTWFwUHJvdG90eXBlR2V0LFxuICBXZWFrTWFwUHJvdG90eXBlU2V0LFxufSBmcm9tIFwiLi9wcmltb3JkaWFscy5tanNcIjtcblxuLyoqIEB0eXBlIHtXZWFrTWFwPHt9LCBJdGVyYWJsZUl0ZXJhdG9yPGFueT4+fSAqL1xuY29uc3QgYXJyYXlJdGVyYXRvcnMgPSBuZXcgTmF0aXZlV2Vha01hcCgpO1xuXG5jb25zdCBTYWZlSXRlcmF0b3JQcm90b3R5cGUgPSBPYmplY3RDcmVhdGUobnVsbCwge1xuICBuZXh0OiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBjb25zdCBhcnJheUl0ZXJhdG9yID0gV2Vha01hcFByb3RvdHlwZUdldChhcnJheUl0ZXJhdG9ycywgdGhpcyk7XG4gICAgICByZXR1cm4gQXJyYXlJdGVyYXRvclByb3RvdHlwZU5leHQoYXJyYXlJdGVyYXRvcik7XG4gICAgfSxcbiAgfSxcblxuICBbU3ltYm9sSXRlcmF0b3JdOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLyoqXG4gKiBXcmFwIHRoZSBBcnJheSBhcm91bmQgdGhlIFNhZmVJdGVyYXRvciBJZiBBcnJheS5wcm90b3R5cGUgW0BAaXRlcmF0b3JdIGhhcyBiZWVuIG1vZGlmaWVkXG4gKiBAdHlwZSB7PFQ+KGFycmF5OiBUW10pID0+IEl0ZXJhYmxlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZUlmTmVlZGVkKGFycmF5KSB7XG4gIGlmIChcbiAgICBhcnJheVtTeW1ib2xJdGVyYXRvcl0gPT09IE5hdGl2ZUFycmF5UHJvdG90eXBlU3ltYm9sSXRlcmF0b3IgJiZcbiAgICBBcnJheUl0ZXJhdG9yUHJvdG90eXBlLm5leHQgPT09IEFycmF5SXRlcmF0b3JQcm90b3R5cGVOZXh0XG4gICkge1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0IHNhZmUgPSBPYmplY3RDcmVhdGUoU2FmZUl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgV2Vha01hcFByb3RvdHlwZVNldChhcnJheUl0ZXJhdG9ycywgc2FmZSwgQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvcihhcnJheSkpO1xuICByZXR1cm4gc2FmZTtcbn1cblxuLyoqIEB0eXBlIHtXZWFrTWFwPHt9LCBHZW5lcmF0b3I8YW55Pj59ICovXG5jb25zdCBnZW5lcmF0b3JzID0gbmV3IE5hdGl2ZVdlYWtNYXAoKTtcblxuLyoqIEBzZWUgaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0lYXJyYXlpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0ICovXG5jb25zdCBEdW1teUFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBPYmplY3RDcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtcbiAgbmV4dDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgY29uc3QgZ2VuZXJhdG9yID0gV2Vha01hcFByb3RvdHlwZUdldChnZW5lcmF0b3JzLCB0aGlzKTtcbiAgICAgIHJldHVybiBHZW5lcmF0b3JQcm90b3R5cGVOZXh0KGdlbmVyYXRvcik7XG4gICAgfSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gIH0sXG59KTtcblxuZm9yIChjb25zdCBrZXkgb2YgUmVmbGVjdE93bktleXMoQXJyYXlJdGVyYXRvclByb3RvdHlwZSkpIHtcbiAgLy8gbmV4dCBtZXRob2QgaGFzIGFscmVhZHkgZGVmaW5lZFxuICBpZiAoa2V5ID09PSBcIm5leHRcIikge1xuICAgIGNvbnRpbnVlO1xuICB9XG5cbiAgLy8gQ29weSBBcnJheUl0ZXJhdG9yUHJvdG90eXBlIGRlc2NyaXB0b3JzIHRvIER1bW15QXJyYXlJdGVyYXRvclByb3RvdHlwZVxuICBPYmplY3REZWZpbmVQcm9wZXJ0eShEdW1teUFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGtleSwgUmVmbGVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBrZXkpKTtcbn1cblxuLyoqXG4gKiBXcmFwIHRoZSBHZW5lcmF0b3IgYXJvdW5kIHRoZSBkdW1teSBBcnJheUl0ZXJhdG9yXG4gKiBAdHlwZSB7PFQ+KGdlbmVyYXRvcjogR2VuZXJhdG9yPFQ+KSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcChnZW5lcmF0b3IpIHtcbiAgY29uc3QgZHVtbXkgPSBPYmplY3RDcmVhdGUoRHVtbXlBcnJheUl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgV2Vha01hcFByb3RvdHlwZVNldChnZW5lcmF0b3JzLCBkdW1teSwgZ2VuZXJhdG9yKTtcbiAgcmV0dXJuIGR1bW15O1xufVxuIiwiaW1wb3J0IHtcbiAgRVBTSUxPTixcbiAgTWF0aEFicyxcbiAgTmF0aXZlQXJyYXlCdWZmZXIsXG4gIE5hdGl2ZUZsb2F0MzJBcnJheSxcbiAgTmF0aXZlVWludDE2QXJyYXksXG4gIE5hdGl2ZVVpbnQzMkFycmF5LFxuICBOYXRpdmVVaW50OEFycmF5LFxuICBOdW1iZXJJc0Zpbml0ZSxcbiAgTnVtYmVySXNOYU4sXG59IGZyb20gXCIuL3ByaW1vcmRpYWxzLm1qc1wiO1xuXG5jb25zdCBJTlZFUlNFX09GX0VQU0lMT04gPSAxIC8gRVBTSUxPTjtcblxuLyoqXG4gKiByb3VuZHMgdG8gdGhlIG5lYXJlc3QgdmFsdWU7XG4gKiBpZiB0aGUgbnVtYmVyIGZhbGxzIG1pZHdheSwgaXQgaXMgcm91bmRlZCB0byB0aGUgbmVhcmVzdCB2YWx1ZSB3aXRoIGFuIGV2ZW4gbGVhc3Qgc2lnbmlmaWNhbnQgZGlnaXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHJvdW5kVGllc1RvRXZlbihudW0pIHtcbiAgcmV0dXJuIChudW0gKyBJTlZFUlNFX09GX0VQU0lMT04pIC0gSU5WRVJTRV9PRl9FUFNJTE9OO1xufVxuXG5jb25zdCBGTE9BVDE2X01JTl9WQUxVRSA9IDYuMTAzNTE1NjI1ZS0wNTtcbmNvbnN0IEZMT0FUMTZfTUFYX1ZBTFVFID0gNjU1MDQ7XG5jb25zdCBGTE9BVDE2X0VQU0lMT04gPSAwLjAwMDk3NjU2MjU7XG5cbmNvbnN0IEZMT0FUMTZfRVBTSUxPTl9NVUxUSVBMSUVEX0JZX0ZMT0FUMTZfTUlOX1ZBTFVFID0gRkxPQVQxNl9FUFNJTE9OICogRkxPQVQxNl9NSU5fVkFMVUU7XG5jb25zdCBGTE9BVDE2X0VQU0lMT05fREVWSURFRF9CWV9FUFNJTE9OID0gRkxPQVQxNl9FUFNJTE9OICogSU5WRVJTRV9PRl9FUFNJTE9OO1xuXG4vKipcbiAqIHJvdW5kIGEgbnVtYmVyIHRvIGEgaGFsZiBmbG9hdCBudW1iZXJcbiAqIEBwYXJhbSB7dW5rbm93bn0gbnVtIC0gZG91YmxlIGZsb2F0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBoYWxmIGZsb2F0IG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0Zsb2F0MTYobnVtKSB7XG4gIGNvbnN0IG51bWJlciA9ICtudW07XG5cbiAgLy8gTmFOLCBJbmZpbml0eSwgLUluZmluaXR5LCAwLCAtMFxuICBpZiAoIU51bWJlcklzRmluaXRlKG51bWJlcikgfHwgbnVtYmVyID09PSAwKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIC8vIGZpbml0ZSBleGNlcHQgMCwgLTBcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA+IDAgPyAxIDogLTE7XG4gIGNvbnN0IGFic29sdXRlID0gTWF0aEFicyhudW1iZXIpO1xuXG4gIC8vIHNtYWxsIG51bWJlclxuICBpZiAoYWJzb2x1dGUgPCBGTE9BVDE2X01JTl9WQUxVRSkge1xuICAgIHJldHVybiBzaWduICogcm91bmRUaWVzVG9FdmVuKGFic29sdXRlIC8gRkxPQVQxNl9FUFNJTE9OX01VTFRJUExJRURfQllfRkxPQVQxNl9NSU5fVkFMVUUpICogRkxPQVQxNl9FUFNJTE9OX01VTFRJUExJRURfQllfRkxPQVQxNl9NSU5fVkFMVUU7XG4gIH1cblxuICBjb25zdCB0ZW1wID0gKDEgKyBGTE9BVDE2X0VQU0lMT05fREVWSURFRF9CWV9FUFNJTE9OKSAqIGFic29sdXRlO1xuICBjb25zdCByZXN1bHQgPSB0ZW1wIC0gKHRlbXAgLSBhYnNvbHV0ZSk7XG5cbiAgLy8gbGFyZ2UgbnVtYmVyXG4gIGlmIChyZXN1bHQgPiBGTE9BVDE2X01BWF9WQUxVRSB8fCBOdW1iZXJJc05hTihyZXN1bHQpKSB7XG4gICAgcmV0dXJuIHNpZ24gKiBJbmZpbml0eTtcbiAgfVxuXG4gIHJldHVybiBzaWduICogcmVzdWx0O1xufVxuXG4vLyBiYXNlIGFsZ29yaXRobTogaHR0cDovL2ZveC10b29sa2l0Lm9yZy9mdHAvZmFzdGhhbGZmbG9hdGNvbnZlcnNpb24ucGRmXG5cbmNvbnN0IGJ1ZmZlciA9IG5ldyBOYXRpdmVBcnJheUJ1ZmZlcig0KTtcbmNvbnN0IGZsb2F0VmlldyA9IG5ldyBOYXRpdmVGbG9hdDMyQXJyYXkoYnVmZmVyKTtcbmNvbnN0IHVpbnQzMlZpZXcgPSBuZXcgTmF0aXZlVWludDMyQXJyYXkoYnVmZmVyKTtcblxuY29uc3QgYmFzZVRhYmxlID0gbmV3IE5hdGl2ZVVpbnQxNkFycmF5KDUxMik7XG5jb25zdCBzaGlmdFRhYmxlID0gbmV3IE5hdGl2ZVVpbnQ4QXJyYXkoNTEyKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBjb25zdCBlID0gaSAtIDEyNztcblxuICAvLyB2ZXJ5IHNtYWxsIG51bWJlciAoMCwgLTApXG4gIGlmIChlIDwgLTI0KSB7XG4gICAgYmFzZVRhYmxlW2ldICAgICAgICAgPSAweDAwMDA7XG4gICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAweDgwMDA7XG4gICAgc2hpZnRUYWJsZVtpXSAgICAgICAgID0gMjQ7XG4gICAgc2hpZnRUYWJsZVtpIHwgMHgxMDBdID0gMjQ7XG5cbiAgLy8gc21hbGwgbnVtYmVyIChkZW5vcm0pXG4gIH0gZWxzZSBpZiAoZSA8IC0xNCkge1xuICAgIGJhc2VUYWJsZVtpXSAgICAgICAgID0gIDB4MDQwMCA+PiAoLWUgLSAxNCk7XG4gICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAoMHgwNDAwID4+ICgtZSAtIDE0KSkgfCAweDgwMDA7XG4gICAgc2hpZnRUYWJsZVtpXSAgICAgICAgID0gLWUgLSAxO1xuICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IC1lIC0gMTtcblxuICAvLyBub3JtYWwgbnVtYmVyXG4gIH0gZWxzZSBpZiAoZSA8PSAxNSkge1xuICAgIGJhc2VUYWJsZVtpXSAgICAgICAgID0gIChlICsgMTUpIDw8IDEwO1xuICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gKChlICsgMTUpIDw8IDEwKSB8IDB4ODAwMDtcbiAgICBzaGlmdFRhYmxlW2ldICAgICAgICAgPSAxMztcbiAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAxMztcblxuICAvLyBsYXJnZSBudW1iZXIgKEluZmluaXR5LCAtSW5maW5pdHkpXG4gIH0gZWxzZSBpZiAoZSA8IDEyOCkge1xuICAgIGJhc2VUYWJsZVtpXSAgICAgICAgID0gMHg3YzAwO1xuICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gMHhmYzAwO1xuICAgIHNoaWZ0VGFibGVbaV0gICAgICAgICA9IDI0O1xuICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IDI0O1xuXG4gIC8vIHN0YXkgKE5hTiwgSW5maW5pdHksIC1JbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBiYXNlVGFibGVbaV0gICAgICAgICA9IDB4N2MwMDtcbiAgICBiYXNlVGFibGVbaSB8IDB4MTAwXSA9IDB4ZmMwMDtcbiAgICBzaGlmdFRhYmxlW2ldICAgICAgICAgPSAxMztcbiAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAxMztcbiAgfVxufVxuXG4vKipcbiAqIHJvdW5kIGEgbnVtYmVyIHRvIGEgaGFsZiBmbG9hdCBudW1iZXIgYml0c1xuICogQHBhcmFtIHt1bmtub3dufSBudW0gLSBkb3VibGUgZmxvYXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGhhbGYgZmxvYXQgbnVtYmVyIGJpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG9GbG9hdDE2Qml0cyhudW0pIHtcbiAgZmxvYXRWaWV3WzBdID0gcm91bmRUb0Zsb2F0MTYobnVtKTtcbiAgY29uc3QgZiA9IHVpbnQzMlZpZXdbMF07XG4gIGNvbnN0IGUgPSAoZiA+PiAyMykgJiAweDFmZjtcbiAgcmV0dXJuIGJhc2VUYWJsZVtlXSArICgoZiAmIDB4MDA3ZmZmZmYpID4+IHNoaWZ0VGFibGVbZV0pO1xufVxuXG5jb25zdCBtYW50aXNzYVRhYmxlID0gbmV3IE5hdGl2ZVVpbnQzMkFycmF5KDIwNDgpO1xuZm9yIChsZXQgaSA9IDE7IGkgPCAxMDI0OyArK2kpIHtcbiAgbGV0IG0gPSBpIDw8IDEzOyAvLyB6ZXJvIHBhZCBtYW50aXNzYSBiaXRzXG4gIGxldCBlID0gMDsgLy8gemVybyBleHBvbmVudFxuXG4gIC8vIG5vcm1hbGl6ZWRcbiAgd2hpbGUgKChtICYgMHgwMDgwMDAwMCkgPT09IDApIHtcbiAgICBtIDw8PSAxO1xuICAgIGUgLT0gMHgwMDgwMDAwMDsgLy8gZGVjcmVtZW50IGV4cG9uZW50XG4gIH1cblxuICBtICY9IH4weDAwODAwMDAwOyAvLyBjbGVhciBsZWFkaW5nIDEgYml0XG4gIGUgKz0gMHgzODgwMDAwMDsgLy8gYWRqdXN0IGJpYXNcblxuICBtYW50aXNzYVRhYmxlW2ldID0gbSB8IGU7XG59XG5mb3IgKGxldCBpID0gMTAyNDsgaSA8IDIwNDg7ICsraSkge1xuICBtYW50aXNzYVRhYmxlW2ldID0gMHgzODAwMDAwMCArICgoaSAtIDEwMjQpIDw8IDEzKTtcbn1cblxuY29uc3QgZXhwb25lbnRUYWJsZSA9IG5ldyBOYXRpdmVVaW50MzJBcnJheSg2NCk7XG5mb3IgKGxldCBpID0gMTsgaSA8IDMxOyArK2kpIHtcbiAgZXhwb25lbnRUYWJsZVtpXSA9IGkgPDwgMjM7XG59XG5leHBvbmVudFRhYmxlWzMxXSA9IDB4NDc4MDAwMDA7XG5leHBvbmVudFRhYmxlWzMyXSA9IDB4ODAwMDAwMDA7XG5mb3IgKGxldCBpID0gMzM7IGkgPCA2MzsgKytpKSB7XG4gIGV4cG9uZW50VGFibGVbaV0gPSAweDgwMDAwMDAwICsgKChpIC0gMzIpIDw8IDIzKTtcbn1cbmV4cG9uZW50VGFibGVbNjNdID0gMHhjNzgwMDAwMDtcblxuY29uc3Qgb2Zmc2V0VGFibGUgPSBuZXcgTmF0aXZlVWludDE2QXJyYXkoNjQpO1xuZm9yIChsZXQgaSA9IDE7IGkgPCA2NDsgKytpKSB7XG4gIGlmIChpICE9PSAzMikge1xuICAgIG9mZnNldFRhYmxlW2ldID0gMTAyNDtcbiAgfVxufVxuXG4vKipcbiAqIGNvbnZlcnQgYSBoYWxmIGZsb2F0IG51bWJlciBiaXRzIHRvIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gZmxvYXQxNmJpdHMgLSBoYWxmIGZsb2F0IG51bWJlciBiaXRzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkb3VibGUgZmxvYXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb051bWJlcihmbG9hdDE2Yml0cykge1xuICBjb25zdCBpID0gZmxvYXQxNmJpdHMgPj4gMTA7XG4gIHVpbnQzMlZpZXdbMF0gPSBtYW50aXNzYVRhYmxlW29mZnNldFRhYmxlW2ldICsgKGZsb2F0MTZiaXRzICYgMHgzZmYpXSArIGV4cG9uZW50VGFibGVbaV07XG4gIHJldHVybiBmbG9hdFZpZXdbMF07XG59XG4iLCJleHBvcnQgY29uc3QgVEhJU19JU19OT1RfQU5fT0JKRUNUID0gXCJUaGlzIGlzIG5vdCBhbiBvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBUSElTX0lTX05PVF9BX0ZMT0FUMTZBUlJBWV9PQkpFQ1QgPSBcIlRoaXMgaXMgbm90IGEgRmxvYXQxNkFycmF5IG9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFRISVNfQ09OU1RSVUNUT1JfSVNfTk9UX0FfU1VCQ0xBU1NfT0ZfRkxPQVQxNkFSUkFZID1cbiAgXCJUaGlzIGNvbnN0cnVjdG9yIGlzIG5vdCBhIHN1YmNsYXNzIG9mIEZsb2F0MTZBcnJheVwiO1xuZXhwb3J0IGNvbnN0IFRIRV9DT05TVFJVQ1RPUl9QUk9QRVJUWV9WQUxVRV9JU19OT1RfQU5fT0JKRUNUID1cbiAgXCJUaGUgY29uc3RydWN0b3IgcHJvcGVydHkgdmFsdWUgaXMgbm90IGFuIG9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFNQRUNJRVNfQ09OU1RSVUNUT1JfRElETlRfUkVUVVJOX1RZUEVEQVJSQVlfT0JKRUNUID1cbiAgXCJTcGVjaWVzIGNvbnN0cnVjdG9yIGRpZG4ndCByZXR1cm4gVHlwZWRBcnJheSBvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBERVJJVkVEX0NPTlNUUlVDVE9SX0NSRUFURURfVFlQRURBUlJBWV9PQkpFQ1RfV0hJQ0hfV0FTX1RPT19TTUFMTF9MRU5HVEggPVxuICBcIkRlcml2ZWQgY29uc3RydWN0b3IgY3JlYXRlZCBUeXBlZEFycmF5IG9iamVjdCB3aGljaCB3YXMgdG9vIHNtYWxsIGxlbmd0aFwiO1xuZXhwb3J0IGNvbnN0IEFUVEVNUFRJTkdfVE9fQUNDRVNTX0RFVEFDSEVEX0FSUkFZQlVGRkVSID1cbiAgXCJBdHRlbXB0aW5nIHRvIGFjY2VzcyBkZXRhY2hlZCBBcnJheUJ1ZmZlclwiO1xuZXhwb3J0IGNvbnN0IENBTk5PVF9DT05WRVJUX1VOREVGSU5FRF9PUl9OVUxMX1RPX09CSkVDVCA9XG4gIFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgQ0FOTk9UX01JWF9CSUdJTlRfQU5EX09USEVSX1RZUEVTID1cbiAgXCJDYW5ub3QgbWl4IEJpZ0ludCBhbmQgb3RoZXIgdHlwZXMsIHVzZSBleHBsaWNpdCBjb252ZXJzaW9uc1wiO1xuZXhwb3J0IGNvbnN0IElURVJBVE9SX1BST1BFUlRZX0lTX05PVF9DQUxMQUJMRSA9IFwiQEBpdGVyYXRvciBwcm9wZXJ0eSBpcyBub3QgY2FsbGFibGVcIjtcbmV4cG9ydCBjb25zdCBSRURVQ0VfT0ZfRU1QVFlfQVJSQVlfV0lUSF9OT19JTklUSUFMX1ZBTFVFID1cbiAgXCJSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlXCI7XG5leHBvcnQgY29uc3QgVEhFX0NPTVBBUklTT05fRlVOQ1RJT05fTVVTVF9CRV9FSVRIRVJfQV9GVU5DVElPTl9PUl9VTkRFRklORUQgPVxuICBcIlRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIG11c3QgYmUgZWl0aGVyIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCI7XG5leHBvcnQgY29uc3QgT0ZGU0VUX0lTX09VVF9PRl9CT1VORFMgPSBcIk9mZnNldCBpcyBvdXQgb2YgYm91bmRzXCI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBnbG9iYWwgU2hhcmVkQXJyYXlCdWZmZXIgKi9cblxuaW1wb3J0IHsgQ0FOTk9UX0NPTlZFUlRfVU5ERUZJTkVEX09SX05VTExfVE9fT0JKRUNUIH0gZnJvbSBcIi4vbWVzc2FnZXMubWpzXCI7XG5cbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyAoLi4uYXJnczogYW55KSA9PiBhbnk+KHRhcmdldDogVCkgPT4gKHRoaXNBcmc6IFRoaXNUeXBlPFQ+LCAuLi5hcmdzOiBhbnlbXSkgPT4gYW55fSAqL1xuZnVuY3Rpb24gdW5jdXJyeVRoaXModGFyZ2V0KSB7XG4gIHJldHVybiAodGhpc0FyZywgLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBSZWZsZWN0QXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn1cblxuLyoqIEB0eXBlIHsodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nIHwgc3ltYm9sKSA9PiAodGhpc0FyZzogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4gYW55fSAqL1xuZnVuY3Rpb24gdW5jdXJyeVRoaXNHZXR0ZXIodGFyZ2V0LCBrZXkpIHtcbiAgcmV0dXJuIHVuY3VycnlUaGlzKFxuICAgIFJlZmxlY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICB0YXJnZXQsXG4gICAgICBrZXlcbiAgICApLmdldFxuICApO1xufVxuXG4vLyBSZWZsZWN0XG5leHBvcnQgY29uc3Qge1xuICBhcHBseTogUmVmbGVjdEFwcGx5LFxuICBjb25zdHJ1Y3Q6IFJlZmxlY3RDb25zdHJ1Y3QsXG4gIGRlZmluZVByb3BlcnR5OiBSZWZsZWN0RGVmaW5lUHJvcGVydHksXG4gIGdldDogUmVmbGVjdEdldCxcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBSZWZsZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBnZXRQcm90b3R5cGVPZjogUmVmbGVjdEdldFByb3RvdHlwZU9mLFxuICBoYXM6IFJlZmxlY3RIYXMsXG4gIG93bktleXM6IFJlZmxlY3RPd25LZXlzLFxuICBzZXQ6IFJlZmxlY3RTZXQsXG4gIHNldFByb3RvdHlwZU9mOiBSZWZsZWN0U2V0UHJvdG90eXBlT2YsXG59ID0gUmVmbGVjdDtcblxuLy8gUHJveHlcbmV4cG9ydCBjb25zdCBOYXRpdmVQcm94eSA9IFByb3h5O1xuXG4vLyBOdW1iZXJcbmV4cG9ydCBjb25zdCB7XG4gIEVQU0lMT04sXG4gIE1BWF9TQUZFX0lOVEVHRVIsXG4gIGlzRmluaXRlOiBOdW1iZXJJc0Zpbml0ZSxcbiAgaXNOYU46IE51bWJlcklzTmFOLFxufSA9IE51bWJlcjtcblxuLy8gU3ltYm9sXG5leHBvcnQgY29uc3Qge1xuICBpdGVyYXRvcjogU3ltYm9sSXRlcmF0b3IsXG4gIHNwZWNpZXM6IFN5bWJvbFNwZWNpZXMsXG4gIHRvU3RyaW5nVGFnOiBTeW1ib2xUb1N0cmluZ1RhZyxcbiAgZm9yOiBTeW1ib2xGb3IsXG59ID0gU3ltYm9sO1xuXG4vLyBPYmplY3RcbmV4cG9ydCBjb25zdCBOYXRpdmVPYmplY3QgPSBPYmplY3Q7XG5leHBvcnQgY29uc3Qge1xuICBjcmVhdGU6IE9iamVjdENyZWF0ZSxcbiAgZGVmaW5lUHJvcGVydHk6IE9iamVjdERlZmluZVByb3BlcnR5LFxuICBmcmVlemU6IE9iamVjdEZyZWV6ZSxcbiAgaXM6IE9iamVjdElzLFxufSA9IE5hdGl2ZU9iamVjdDtcbmNvbnN0IE9iamVjdFByb3RvdHlwZSA9IE5hdGl2ZU9iamVjdC5wcm90b3R5cGU7XG4vKiogQHR5cGUgeyhvYmplY3Q6IG9iamVjdCwga2V5OiBQcm9wZXJ0eUtleSkgPT4gRnVuY3Rpb24gfCB1bmRlZmluZWR9ICovXG5leHBvcnQgY29uc3QgT2JqZWN0UHJvdG90eXBlX19sb29rdXBHZXR0ZXJfXyA9IC8qKiBAdHlwZSB7YW55fSAqLyAoT2JqZWN0UHJvdG90eXBlKS5fX2xvb2t1cEdldHRlcl9fXG4gID8gdW5jdXJyeVRoaXMoLyoqIEB0eXBlIHthbnl9ICovIChPYmplY3RQcm90b3R5cGUpLl9fbG9va3VwR2V0dGVyX18pXG4gIDogKG9iamVjdCwga2V5KSA9PiB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBOYXRpdmVUeXBlRXJyb3IoXG4gICAgICAgIENBTk5PVF9DT05WRVJUX1VOREVGSU5FRF9PUl9OVUxMX1RPX09CSkVDVFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0ID0gTmF0aXZlT2JqZWN0KG9iamVjdCk7XG4gICAgZG8ge1xuICAgICAgY29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoT2JqZWN0SGFzT3duKGRlc2NyaXB0b3IsIFwiZ2V0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKCh0YXJnZXQgPSBSZWZsZWN0R2V0UHJvdG90eXBlT2YodGFyZ2V0KSkgIT09IG51bGwpO1xuICB9O1xuLyoqIEB0eXBlIHsob2JqZWN0OiBvYmplY3QsIGtleTogUHJvcGVydHlLZXkpID0+IGJvb2xlYW59ICovXG5leHBvcnQgY29uc3QgT2JqZWN0SGFzT3duID0gLyoqIEB0eXBlIHthbnl9ICovIChOYXRpdmVPYmplY3QpLmhhc093biB8fFxuICB1bmN1cnJ5VGhpcyhPYmplY3RQcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4vLyBBcnJheVxuY29uc3QgTmF0aXZlQXJyYXkgPSBBcnJheTtcbmV4cG9ydCBjb25zdCBBcnJheUlzQXJyYXkgPSBOYXRpdmVBcnJheS5pc0FycmF5O1xuY29uc3QgQXJyYXlQcm90b3R5cGUgPSBOYXRpdmVBcnJheS5wcm90b3R5cGU7XG4vKiogQHR5cGUgeyhhcnJheTogQXJyYXlMaWtlPHVua25vd24+LCBzZXBhcmF0b3I/OiBzdHJpbmcpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBjb25zdCBBcnJheVByb3RvdHlwZUpvaW4gPSB1bmN1cnJ5VGhpcyhBcnJheVByb3RvdHlwZS5qb2luKTtcbi8qKiBAdHlwZSB7PFQ+KGFycmF5OiBUW10sIC4uLml0ZW1zOiBUW10pID0+IG51bWJlcn0gKi9cbmV4cG9ydCBjb25zdCBBcnJheVByb3RvdHlwZVB1c2ggPSB1bmN1cnJ5VGhpcyhBcnJheVByb3RvdHlwZS5wdXNoKTtcbi8qKiBAdHlwZSB7KGFycmF5OiBBcnJheUxpa2U8dW5rbm93bj4sIC4uLm9wdHM6IGFueVtdKSA9PiBzdHJpbmd9ICovXG5leHBvcnQgY29uc3QgQXJyYXlQcm90b3R5cGVUb0xvY2FsZVN0cmluZyA9IHVuY3VycnlUaGlzKFxuICBBcnJheVByb3RvdHlwZS50b0xvY2FsZVN0cmluZ1xuKTtcbmV4cG9ydCBjb25zdCBOYXRpdmVBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yID0gQXJyYXlQcm90b3R5cGVbU3ltYm9sSXRlcmF0b3JdO1xuLyoqIEB0eXBlIHs8VD4oYXJyYXk6IFRbXSkgPT4gSXRlcmFibGVJdGVyYXRvcjxUPn0gKi9cbmV4cG9ydCBjb25zdCBBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yID0gdW5jdXJyeVRoaXMoTmF0aXZlQXJyYXlQcm90b3R5cGVTeW1ib2xJdGVyYXRvcik7XG5cbi8vIE1hdGhcbmV4cG9ydCBjb25zdCB7XG4gIGFiczogTWF0aEFicyxcbiAgdHJ1bmM6IE1hdGhUcnVuYyxcbn0gPSBNYXRoO1xuXG4vLyBBcnJheUJ1ZmZlclxuZXhwb3J0IGNvbnN0IE5hdGl2ZUFycmF5QnVmZmVyID0gQXJyYXlCdWZmZXI7XG5leHBvcnQgY29uc3QgQXJyYXlCdWZmZXJJc1ZpZXcgPSBOYXRpdmVBcnJheUJ1ZmZlci5pc1ZpZXc7XG5jb25zdCBBcnJheUJ1ZmZlclByb3RvdHlwZSA9IE5hdGl2ZUFycmF5QnVmZmVyLnByb3RvdHlwZTtcbi8qKiBAdHlwZSB7KGJ1ZmZlcjogQXJyYXlCdWZmZXIsIGJlZ2luPzogbnVtYmVyLCBlbmQ/OiBudW1iZXIpID0+IG51bWJlcn0gKi9cbmV4cG9ydCBjb25zdCBBcnJheUJ1ZmZlclByb3RvdHlwZVNsaWNlID0gdW5jdXJyeVRoaXMoQXJyYXlCdWZmZXJQcm90b3R5cGUuc2xpY2UpO1xuLyoqIEB0eXBlIHsoYnVmZmVyOiBBcnJheUJ1ZmZlcikgPT4gQXJyYXlCdWZmZXJ9ICovXG5leHBvcnQgY29uc3QgQXJyYXlCdWZmZXJQcm90b3R5cGVHZXRCeXRlTGVuZ3RoID0gdW5jdXJyeVRoaXNHZXR0ZXIoQXJyYXlCdWZmZXJQcm90b3R5cGUsIFwiYnl0ZUxlbmd0aFwiKTtcblxuLy8gU2hhcmVkQXJyYXlCdWZmZXJcbmV4cG9ydCBjb25zdCBOYXRpdmVTaGFyZWRBcnJheUJ1ZmZlciA9IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiA/IFNoYXJlZEFycmF5QnVmZmVyIDogbnVsbDtcbi8qKiBAdHlwZSB7KGJ1ZmZlcjogU2hhcmVkQXJyYXlCdWZmZXIpID0+IFNoYXJlZEFycmF5QnVmZmVyfSAqL1xuZXhwb3J0IGNvbnN0IFNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlR2V0Qnl0ZUxlbmd0aCA9IE5hdGl2ZVNoYXJlZEFycmF5QnVmZmVyXG4gICYmIHVuY3VycnlUaGlzR2V0dGVyKE5hdGl2ZVNoYXJlZEFycmF5QnVmZmVyLnByb3RvdHlwZSwgXCJieXRlTGVuZ3RoXCIpO1xuXG4vLyBUeXBlZEFycmF5XG4vKiogQHR5cGVkZWYge1VpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8SW50OEFycmF5fEludDE2QXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5fEJpZ1VpbnQ2NEFycmF5fEJpZ0ludDY0QXJyYXl9IFR5cGVkQXJyYXkgKi9cbi8qKiBAdHlwZSB7YW55fSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXkgPSBSZWZsZWN0R2V0UHJvdG90eXBlT2YoVWludDhBcnJheSk7XG5jb25zdCBUeXBlZEFycmF5RnJvbSA9IFR5cGVkQXJyYXkuZnJvbTtcbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheS5wcm90b3R5cGU7XG5leHBvcnQgY29uc3QgTmF0aXZlVHlwZWRBcnJheVByb3RvdHlwZVN5bWJvbEl0ZXJhdG9yID0gVHlwZWRBcnJheVByb3RvdHlwZVtTeW1ib2xJdGVyYXRvcl07XG4vKiogQHR5cGUgeyh0eXBlZEFycmF5OiBUeXBlZEFycmF5KSA9PiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj59ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUtleXMgPSB1bmN1cnJ5VGhpcyhUeXBlZEFycmF5UHJvdG90eXBlLmtleXMpO1xuLyoqIEB0eXBlIHsodHlwZWRBcnJheTogVHlwZWRBcnJheSkgPT4gSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+fSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVWYWx1ZXMgPSB1bmN1cnJ5VGhpcyhcbiAgVHlwZWRBcnJheVByb3RvdHlwZS52YWx1ZXNcbik7XG4vKiogQHR5cGUgeyh0eXBlZEFycmF5OiBUeXBlZEFycmF5KSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFtudW1iZXIsIG51bWJlcl0+fSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVFbnRyaWVzID0gdW5jdXJyeVRoaXMoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUuZW50cmllc1xuKTtcbi8qKiBAdHlwZSB7KHR5cGVkQXJyYXk6IFR5cGVkQXJyYXksIGFycmF5OiBBcnJheUxpa2U8bnVtYmVyPiwgb2Zmc2V0PzogbnVtYmVyKSA9PiB2b2lkfSAqL1xuZXhwb3J0IGNvbnN0IFR5cGVkQXJyYXlQcm90b3R5cGVTZXQgPSB1bmN1cnJ5VGhpcyhUeXBlZEFycmF5UHJvdG90eXBlLnNldCk7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMgVHlwZWRBcnJheT4odHlwZWRBcnJheTogVCkgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlUmV2ZXJzZSA9IHVuY3VycnlUaGlzKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLnJldmVyc2Vcbik7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMgVHlwZWRBcnJheT4odHlwZWRBcnJheTogVCwgdmFsdWU6IG51bWJlciwgc3RhcnQ/OiBudW1iZXIsIGVuZD86IG51bWJlcikgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlRmlsbCA9IHVuY3VycnlUaGlzKFR5cGVkQXJyYXlQcm90b3R5cGUuZmlsbCk7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMgVHlwZWRBcnJheT4odHlwZWRBcnJheTogVCwgdGFyZ2V0OiBudW1iZXIsIHN0YXJ0OiBudW1iZXIsIGVuZD86IG51bWJlcikgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlQ29weVdpdGhpbiA9IHVuY3VycnlUaGlzKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLmNvcHlXaXRoaW5cbik7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMgVHlwZWRBcnJheT4odHlwZWRBcnJheTogVCwgY29tcGFyZUZuPzogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBudW1iZXIpID0+IFR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZVNvcnQgPSB1bmN1cnJ5VGhpcyhUeXBlZEFycmF5UHJvdG90eXBlLnNvcnQpO1xuLyoqIEB0eXBlIHs8VCBleHRlbmRzIFR5cGVkQXJyYXk+KHR5cGVkQXJyYXk6IFQsIHN0YXJ0PzogbnVtYmVyLCBlbmQ/OiBudW1iZXIpID0+IFR9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZVNsaWNlID0gdW5jdXJyeVRoaXMoVHlwZWRBcnJheVByb3RvdHlwZS5zbGljZSk7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMgVHlwZWRBcnJheT4odHlwZWRBcnJheTogVCwgc3RhcnQ/OiBudW1iZXIsIGVuZD86IG51bWJlcikgPT4gVH0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlU3ViYXJyYXkgPSB1bmN1cnJ5VGhpcyhcbiAgVHlwZWRBcnJheVByb3RvdHlwZS5zdWJhcnJheVxuKTtcbi8qKiBAdHlwZSB7KCh0eXBlZEFycmF5OiBUeXBlZEFycmF5KSA9PiBBcnJheUJ1ZmZlcil9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUdldEJ1ZmZlciA9IHVuY3VycnlUaGlzR2V0dGVyKFxuICBUeXBlZEFycmF5UHJvdG90eXBlLFxuICBcImJ1ZmZlclwiXG4pO1xuLyoqIEB0eXBlIHsoKHR5cGVkQXJyYXk6IFR5cGVkQXJyYXkpID0+IG51bWJlcil9ICovXG5leHBvcnQgY29uc3QgVHlwZWRBcnJheVByb3RvdHlwZUdldEJ5dGVPZmZzZXQgPSB1bmN1cnJ5VGhpc0dldHRlcihcbiAgVHlwZWRBcnJheVByb3RvdHlwZSxcbiAgXCJieXRlT2Zmc2V0XCJcbik7XG4vKiogQHR5cGUgeygodHlwZWRBcnJheTogVHlwZWRBcnJheSkgPT4gbnVtYmVyKX0gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlR2V0TGVuZ3RoID0gdW5jdXJyeVRoaXNHZXR0ZXIoXG4gIFR5cGVkQXJyYXlQcm90b3R5cGUsXG4gIFwibGVuZ3RoXCJcbik7XG4vKiogQHR5cGUgeyh0YXJnZXQ6IHVua25vd24pID0+IHN0cmluZ30gKi9cbmV4cG9ydCBjb25zdCBUeXBlZEFycmF5UHJvdG90eXBlR2V0U3ltYm9sVG9TdHJpbmdUYWcgPSB1bmN1cnJ5VGhpc0dldHRlcihcbiAgVHlwZWRBcnJheVByb3RvdHlwZSxcbiAgU3ltYm9sVG9TdHJpbmdUYWdcbik7XG5cbi8vIFVpbnQ4QXJyYXlcbmV4cG9ydCBjb25zdCBOYXRpdmVVaW50OEFycmF5ID0gVWludDhBcnJheTtcblxuLy8gVWludDE2QXJyYXlcbmV4cG9ydCBjb25zdCBOYXRpdmVVaW50MTZBcnJheSA9IFVpbnQxNkFycmF5O1xuLyoqIEB0eXBlIHtVaW50MTZBcnJheUNvbnN0cnVjdG9yW1wiZnJvbVwiXX0gKi9cbmV4cG9ydCBjb25zdCBVaW50MTZBcnJheUZyb20gPSAoLi4uYXJncykgPT4ge1xuICByZXR1cm4gUmVmbGVjdEFwcGx5KFR5cGVkQXJyYXlGcm9tLCBOYXRpdmVVaW50MTZBcnJheSwgYXJncyk7XG59O1xuXG4vLyBVaW50MzJBcnJheVxuZXhwb3J0IGNvbnN0IE5hdGl2ZVVpbnQzMkFycmF5ID0gVWludDMyQXJyYXk7XG5cbi8vIEZsb2F0MzJBcnJheVxuZXhwb3J0IGNvbnN0IE5hdGl2ZUZsb2F0MzJBcnJheSA9IEZsb2F0MzJBcnJheTtcblxuLy8gQXJyYXlJdGVyYXRvclxuLyoqIEB0eXBlIHthbnl9ICovXG5leHBvcnQgY29uc3QgQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IFJlZmxlY3RHZXRQcm90b3R5cGVPZihbXVtTeW1ib2xJdGVyYXRvcl0oKSk7XG4vKiogQHR5cGUgezxUPihhcnJheUl0ZXJhdG9yOiBJdGVyYWJsZUl0ZXJhdG9yPFQ+KSA9PiBJdGVyYXRvclJlc3VsdDxUPn0gKi9cbmV4cG9ydCBjb25zdCBBcnJheUl0ZXJhdG9yUHJvdG90eXBlTmV4dCA9IHVuY3VycnlUaGlzKEFycmF5SXRlcmF0b3JQcm90b3R5cGUubmV4dCk7XG5cbi8vIEdlbmVyYXRvclxuLyoqIEB0eXBlIHs8VCA9IHVua25vd24sIFRSZXR1cm4gPSBhbnksIFROZXh0ID0gdW5rbm93bj4oZ2VuZXJhdG9yOiBHZW5lcmF0b3I8VCwgVFJldHVybiwgVE5leHQ+LCB2YWx1ZT86IFROZXh0KSA9PiBUfSAqL1xuZXhwb3J0IGNvbnN0IEdlbmVyYXRvclByb3RvdHlwZU5leHQgPSB1bmN1cnJ5VGhpcygoZnVuY3Rpb24qICgpIHt9KSgpLm5leHQpO1xuXG4vLyBJdGVyYXRvclxuZXhwb3J0IGNvbnN0IEl0ZXJhdG9yUHJvdG90eXBlID0gUmVmbGVjdEdldFByb3RvdHlwZU9mKEFycmF5SXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBEYXRhVmlld1xuY29uc3QgRGF0YVZpZXdQcm90b3R5cGUgPSBEYXRhVmlldy5wcm90b3R5cGU7XG4vKiogQHR5cGUgeyhkYXRhVmlldzogRGF0YVZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgbGl0dGxlRW5kaWFuPzogYm9vbGVhbikgPT4gbnVtYmVyfSAqL1xuZXhwb3J0IGNvbnN0IERhdGFWaWV3UHJvdG90eXBlR2V0VWludDE2ID0gdW5jdXJyeVRoaXMoXG4gIERhdGFWaWV3UHJvdG90eXBlLmdldFVpbnQxNlxuKTtcbi8qKiBAdHlwZSB7KGRhdGFWaWV3OiBEYXRhVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBsaXR0bGVFbmRpYW4/OiBib29sZWFuKSA9PiB2b2lkfSAqL1xuZXhwb3J0IGNvbnN0IERhdGFWaWV3UHJvdG90eXBlU2V0VWludDE2ID0gdW5jdXJyeVRoaXMoXG4gIERhdGFWaWV3UHJvdG90eXBlLnNldFVpbnQxNlxuKTtcblxuLy8gRXJyb3JcbmV4cG9ydCBjb25zdCBOYXRpdmVUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5leHBvcnQgY29uc3QgTmF0aXZlUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cbi8vIFdlYWtTZXRcbi8qKlxuICogRG8gbm90IGNvbnN0cnVjdCB3aXRoIGFyZ3VtZW50cyB0byBhdm9pZCBjYWxsaW5nIHRoZSBcImFkZFwiIG1ldGhvZFxuICogQHR5cGUge3tuZXcgPFQgZXh0ZW5kcyB7fT4oKTogV2Vha1NldDxUPn19XG4gKi9cbmV4cG9ydCBjb25zdCBOYXRpdmVXZWFrU2V0ID0gV2Vha1NldDtcbmNvbnN0IFdlYWtTZXRQcm90b3R5cGUgPSBOYXRpdmVXZWFrU2V0LnByb3RvdHlwZTtcbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyB7fT4oc2V0OiBXZWFrU2V0PFQ+LCB2YWx1ZTogVCkgPT4gU2V0PFQ+fSAqL1xuZXhwb3J0IGNvbnN0IFdlYWtTZXRQcm90b3R5cGVBZGQgPSB1bmN1cnJ5VGhpcyhXZWFrU2V0UHJvdG90eXBlLmFkZCk7XG4vKiogQHR5cGUgezxUIGV4dGVuZHMge30+KHNldDogV2Vha1NldDxUPiwgdmFsdWU6IFQpID0+IGJvb2xlYW59ICovXG5leHBvcnQgY29uc3QgV2Vha1NldFByb3RvdHlwZUhhcyA9IHVuY3VycnlUaGlzKFdlYWtTZXRQcm90b3R5cGUuaGFzKTtcblxuLy8gV2Vha01hcFxuLyoqXG4gKiBEbyBub3QgY29uc3RydWN0IHdpdGggYXJndW1lbnRzIHRvIGF2b2lkIGNhbGxpbmcgdGhlIFwic2V0XCIgbWV0aG9kXG4gKiBAdHlwZSB7e25ldyA8SyBleHRlbmRzIHt9LCBWPigpOiBXZWFrTWFwPEssIFY+fX1cbiAqL1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVdlYWtNYXAgPSBXZWFrTWFwO1xuY29uc3QgV2Vha01hcFByb3RvdHlwZSA9IE5hdGl2ZVdlYWtNYXAucHJvdG90eXBlO1xuLyoqIEB0eXBlIHs8SyBleHRlbmRzIHt9LCBWPih3ZWFrTWFwOiBXZWFrTWFwPEssIFY+LCBrZXk6IEspID0+IFZ9ICovXG5leHBvcnQgY29uc3QgV2Vha01hcFByb3RvdHlwZUdldCA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuZ2V0KTtcbi8qKiBAdHlwZSB7PEsgZXh0ZW5kcyB7fSwgVj4od2Vha01hcDogV2Vha01hcDxLLCBWPiwga2V5OiBLKSA9PiBib29sZWFufSAqL1xuZXhwb3J0IGNvbnN0IFdlYWtNYXBQcm90b3R5cGVIYXMgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLmhhcyk7XG4vKiogQHR5cGUgezxLIGV4dGVuZHMge30sIFY+KHdlYWtNYXA6IFdlYWtNYXA8SywgVj4sIGtleTogSywgdmFsdWU6IFYpID0+IFdlYWtNYXB9ICovXG5leHBvcnQgY29uc3QgV2Vha01hcFByb3RvdHlwZVNldCA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuc2V0KTtcbiIsIi8qKiBAaW1wb3J0IEJhc2VEZWNvZGVyLCB7QmFzZURlY29kZXJQYXJhbWV0ZXJzfSBmcm9tIFwiLi9iYXNlZGVjb2Rlci5qc1wiICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlZ2lzdHJ5RW50cnlcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKTpQcm9taXNlPHR5cGVvZiBCYXNlRGVjb2Rlcj59IGltcG9ydEZuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKGltcG9ydChcIi4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3RvcnkpOlByb21pc2U8QmFzZURlY29kZXJQYXJhbWV0ZXJzPn0gZGVjb2RlclBhcmFtZXRlckZuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByZWZlcldvcmtlclxuICovXG4vKiogQHR5cGUge01hcDxudW1iZXIgfCB1bmRlZmluZWQsIFJlZ2lzdHJ5RW50cnk+fSAqL1xuY29uc3QgcmVnaXN0cnkgPSBuZXcgTWFwKCk7XG4vKipcbiAqIERlZmF1bHQgZGVjb2RlciBwYXJhbWV0ZXIgcmV0cmlldmFsIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IGZpbGVEaXJlY3RvcnlcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJhc2VEZWNvZGVyUGFyYW1ldGVycz59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHREZWNvZGVyUGFyYW1ldGVyRm4oZmlsZURpcmVjdG9yeSkge1xuICAgIGNvbnN0IGlzVGlsZWQgPSAhZmlsZURpcmVjdG9yeS5oYXNUYWcoJ1N0cmlwT2Zmc2V0cycpO1xuICAgIHJldHVybiAvKiogQHR5cGUge0Jhc2VEZWNvZGVyUGFyYW1ldGVyc30gKi8gKHtcbiAgICAgICAgdGlsZVdpZHRoOiBpc1RpbGVkXG4gICAgICAgICAgICA/IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdUaWxlV2lkdGgnKVxuICAgICAgICAgICAgOiBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnSW1hZ2VXaWR0aCcpLFxuICAgICAgICB0aWxlSGVpZ2h0OiBpc1RpbGVkXG4gICAgICAgICAgICA/IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdUaWxlTGVuZ3RoJylcbiAgICAgICAgICAgIDogKGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdSb3dzUGVyU3RyaXAnKVxuICAgICAgICAgICAgICAgIHx8IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdJbWFnZUxlbmd0aCcpKSxcbiAgICAgICAgcGxhbmFyQ29uZmlndXJhdGlvbjogYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ1BsYW5hckNvbmZpZ3VyYXRpb24nKSxcbiAgICAgICAgYml0c1BlclNhbXBsZTogYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ0JpdHNQZXJTYW1wbGUnKSxcbiAgICAgICAgcHJlZGljdG9yOiBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnUHJlZGljdG9yJykgfHwgMSxcbiAgICB9KTtcbn1cbi8qKlxuICogUmVnaXN0ZXIgYSBkZWNvZGVyIGZvciBhIHNwZWNpZmljIGNvbXByZXNzaW9uIG1ldGhvZCBvciBhIHJhbmdlIG9mIGNvbXByZXNzaW9uc1xuICogQHBhcmFtIHsobnVtYmVyfHVuZGVmaW5lZHwobnVtYmVyfHVuZGVmaW5lZClbXSl9IGNhc2VzIGlkcyBvZiB0aGUgY29tcHJlc3Npb24gbWV0aG9kcyB0byByZWdpc3RlciBmb3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKTpQcm9taXNlPHR5cGVvZiBCYXNlRGVjb2Rlcj59IGltcG9ydEZuIHRoZSBmdW5jdGlvbiB0byBpbXBvcnQgdGhlIGRlY29kZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzXCIpLkltYWdlRmlsZURpcmVjdG9yeSk6UHJvbWlzZTxCYXNlRGVjb2RlclBhcmFtZXRlcnM+fSBkZWNvZGVyUGFyYW1ldGVyRm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlZmVyV29ya2VyXyBXaGV0aGVyIHRvIHByZWZlciBydW5uaW5nIHRoZSBkZWNvZGVyIGluIGEgd29ya2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWNvZGVyKGNhc2VzLCBpbXBvcnRGbiwgZGVjb2RlclBhcmFtZXRlckZuID0gZGVmYXVsdERlY29kZXJQYXJhbWV0ZXJGbiwgcHJlZmVyV29ya2VyXyA9IHRydWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2FzZXMpKSB7XG4gICAgICAgIGNhc2VzID0gW2Nhc2VzXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBjYXNlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIHJlZ2lzdHJ5LnNldChjLCB7IGltcG9ydEZuLCBkZWNvZGVyUGFyYW1ldGVyRm4sIHByZWZlcldvcmtlcjogcHJlZmVyV29ya2VyXyB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogR2V0IHRoZSByZXF1aXJlZCBkZWNvZGVyIHBhcmFtZXRlcnMgZm9yIGEgc3BlY2lmaWMgY29tcHJlc3Npb24gbWV0aG9kXG4gKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IGNvbXByZXNzaW9uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzJykuSW1hZ2VGaWxlRGlyZWN0b3J5fSBmaWxlRGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZWNvZGVyUGFyYW1ldGVycyhjb21wcmVzc2lvbiwgZmlsZURpcmVjdG9yeSkge1xuICAgIGlmICghcmVnaXN0cnkuaGFzKGNvbXByZXNzaW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY29tcHJlc3Npb24gbWV0aG9kIGlkZW50aWZpZXI6ICR7Y29tcHJlc3Npb259YCk7XG4gICAgfVxuICAgIGNvbnN0IHsgZGVjb2RlclBhcmFtZXRlckZuIH0gPSAvKiogQHR5cGUge1JlZ2lzdHJ5RW50cnl9ICovIChyZWdpc3RyeS5nZXQoY29tcHJlc3Npb24pKTtcbiAgICByZXR1cm4gZGVjb2RlclBhcmFtZXRlckZuKGZpbGVEaXJlY3RvcnkpO1xufVxuLyoqXG4gKiBHZXQgYSBkZWNvZGVyIGZvciBhIHNwZWNpZmljIGNvbXByZXNzaW9uIGFuZCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gY29tcHJlc3Npb24gdGhlIGNvbXByZXNzaW9uIG1ldGhvZCBpZGVudGlmaWVyXG4gKiBAcGFyYW0ge0Jhc2VEZWNvZGVyUGFyYW1ldGVyc30gZGVjb2RlclBhcmFtZXRlcnMgdGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBkZWNvZGVyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoJy4vYmFzZWRlY29kZXIuanMnKS5kZWZhdWx0Pn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlY29kZXIoY29tcHJlc3Npb24sIGRlY29kZXJQYXJhbWV0ZXJzKSB7XG4gICAgaWYgKCFyZWdpc3RyeS5oYXMoY29tcHJlc3Npb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21wcmVzc2lvbiBtZXRob2QgaWRlbnRpZmllcjogJHtjb21wcmVzc2lvbn1gKTtcbiAgICB9XG4gICAgY29uc3QgeyBpbXBvcnRGbiB9ID0gLyoqIEB0eXBlIHtSZWdpc3RyeUVudHJ5fSAqLyAocmVnaXN0cnkuZ2V0KGNvbXByZXNzaW9uKSk7XG4gICAgY29uc3QgRGVjb2RlciA9IGF3YWl0IGltcG9ydEZuKCk7XG4gICAgcmV0dXJuIG5ldyBEZWNvZGVyKGRlY29kZXJQYXJhbWV0ZXJzKTtcbn1cbi8qKlxuICogV2hldGhlciB0byBwcmVmZXIgcnVubmluZyB0aGUgZGVjb2RlciBpbiBhIHdvcmtlclxuICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBjb21wcmVzc2lvbiB0aGUgY29tcHJlc3Npb24gbWV0aG9kIGlkZW50aWZpZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZmVyV29ya2VyKGNvbXByZXNzaW9uKSB7XG4gICAgaWYgKCFyZWdpc3RyeS5oYXMoY29tcHJlc3Npb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjb21wcmVzc2lvbiBtZXRob2QgaWRlbnRpZmllcjogJHtjb21wcmVzc2lvbn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7UmVnaXN0cnlFbnRyeX0gKi8gKHJlZ2lzdHJ5LmdldChjb21wcmVzc2lvbikpLnByZWZlcldvcmtlcjtcbn1cbmNvbnN0IGRlZmF1bHREZWNvZGVyRGVmaW5pdGlvbnMgPSBbXG4gICAgLy8gTm8gY29tcHJlc3Npb25cbiAgICB7XG4gICAgICAgIGNhc2VzOiBbdW5kZWZpbmVkLCAxXSxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi9yYXcuanMnKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICBwcmVmZXJXb3JrZXI6IGZhbHNlLFxuICAgIH0sXG4gICAgLy8gTFpXXG4gICAge1xuICAgICAgICBjYXNlczogNSxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi9sencuanMnKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgIH0sXG4gICAgLy8gT2xkLXN0eWxlIEpQRUdcbiAgICB7XG4gICAgICAgIGNhc2VzOiA2LFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbGQgc3R5bGUgSlBFRyBjb21wcmVzc2lvbiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgLy8gSlBFR1xuICAgIHtcbiAgICAgICAgY2FzZXM6IDcsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vanBlZy5qcycpLnRoZW4oKG0pID0+IG0uZGVmYXVsdCksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IGZpbGVEaXJlY3RvcnlcbiAgICAgICAgICovXG4gICAgICAgIGRlY29kZXJQYXJhbWV0ZXJGbjogYXN5bmMgKGZpbGVEaXJlY3RvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uYXdhaXQgZGVmYXVsdERlY29kZXJQYXJhbWV0ZXJGbihmaWxlRGlyZWN0b3J5KSxcbiAgICAgICAgICAgICAgICBKUEVHVGFibGVzOiBhd2FpdCBmaWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnSlBFR1RhYmxlcycpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIERlZmxhdGUgLyBBZG9iZSBEZWZsYXRlXG4gICAge1xuICAgICAgICBjYXNlczogWzgsIDMyOTQ2XSxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi9kZWZsYXRlLmpzJykudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICB9LFxuICAgIC8vIFBhY2tCaXRzXG4gICAge1xuICAgICAgICBjYXNlczogMzI3NzMsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vcGFja2JpdHMuanMnKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgIH0sXG4gICAgLy8gTEVSQ1xuICAgIHtcbiAgICAgICAgY2FzZXM6IDM0ODg3LFxuICAgICAgICBpbXBvcnRGbjogKCkgPT4gaW1wb3J0KCcuL2xlcmMuanMnKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKG0pID0+IHtcbiAgICAgICAgICAgIGF3YWl0IG0uenN0ZC5pbml0KCk7XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5fSBmaWxlRGlyZWN0b3J5XG4gICAgICAgICAqL1xuICAgICAgICBkZWNvZGVyUGFyYW1ldGVyRm46IGFzeW5jIChmaWxlRGlyZWN0b3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmF3YWl0IGRlZmF1bHREZWNvZGVyUGFyYW1ldGVyRm4oZmlsZURpcmVjdG9yeSksXG4gICAgICAgICAgICAgICAgTGVyY1BhcmFtZXRlcnM6IGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdMZXJjUGFyYW1ldGVycycpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIHpzdGRcbiAgICB7XG4gICAgICAgIGNhc2VzOiA1MDAwMCxcbiAgICAgICAgaW1wb3J0Rm46ICgpID0+IGltcG9ydCgnLi96c3RkLmpzJylcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIChtKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBtLnpzdGQuaW5pdCgpO1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgICB9LFxuICAgIC8vIFdlYlAgSW1hZ2VzXG4gICAge1xuICAgICAgICBjYXNlczogNTAwMDEsXG4gICAgICAgIGltcG9ydEZuOiAoKSA9PiBpbXBvcnQoJy4vd2ViaW1hZ2UuanMnKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5fSBmaWxlRGlyZWN0b3J5XG4gICAgICAgICAqL1xuICAgICAgICBkZWNvZGVyUGFyYW1ldGVyRm46IGFzeW5jIChmaWxlRGlyZWN0b3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmF3YWl0IGRlZmF1bHREZWNvZGVyUGFyYW1ldGVyRm4oZmlsZURpcmVjdG9yeSksXG4gICAgICAgICAgICAgICAgc2FtcGxlc1BlclBpeGVsOiBOdW1iZXIoYXdhaXQgZmlsZURpcmVjdG9yeS5sb2FkVmFsdWUoJ1NhbXBsZXNQZXJQaXhlbCcpKSB8fCA0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmVyV29ya2VyOiBmYWxzZSxcbiAgICB9LFxuXTtcbi8vIEFkZCBkZWZhdWx0IGRlY29kZXJzIHRvIHJlZ2lzdHJ5IChlbmQtdXNlciBtYXkgb3ZlcnJpZGUgd2l0aCBvdGhlciBpbXBsZW1lbnRhdGlvbnMpXG5mb3IgKGNvbnN0IGRlY29kZXJEZWZpbml0aW9uIG9mIGRlZmF1bHREZWNvZGVyRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCB7IGNhc2VzLCBpbXBvcnRGbiwgZGVjb2RlclBhcmFtZXRlckZuLCBwcmVmZXJXb3JrZXI6IHByZWZlcldvcmtlcl8gfSA9IGRlY29kZXJEZWZpbml0aW9uO1xuICAgIGFkZERlY29kZXIoY2FzZXMsIGltcG9ydEZuLCBkZWNvZGVyUGFyYW1ldGVyRm4sIHByZWZlcldvcmtlcl8pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNsaWNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyTGlrZX0gYXJyYXlCdWZmZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2xpY2VPZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYmlnVGlmZlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLCBzbGljZU9mZnNldCwgbGl0dGxlRW5kaWFuLCBiaWdUaWZmKSB7XG4gICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGFycmF5QnVmZmVyKTtcbiAgICAgICAgdGhpcy5fc2xpY2VPZmZzZXQgPSBzbGljZU9mZnNldDtcbiAgICAgICAgdGhpcy5fbGl0dGxlRW5kaWFuID0gbGl0dGxlRW5kaWFuO1xuICAgICAgICB0aGlzLl9iaWdUaWZmID0gYmlnVGlmZjtcbiAgICB9XG4gICAgZ2V0IHNsaWNlT2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2xpY2VPZmZzZXQ7XG4gICAgfVxuICAgIGdldCBzbGljZVRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWNlT2Zmc2V0ICsgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgZ2V0IGxpdHRsZUVuZGlhbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpdHRsZUVuZGlhbjtcbiAgICB9XG4gICAgZ2V0IGJpZ1RpZmYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaWdUaWZmO1xuICAgIH1cbiAgICBnZXQgYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuYnVmZmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvdmVycyhvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZU9mZnNldCA8PSBvZmZzZXQgJiYgdGhpcy5zbGljZVRvcCA+PSBvZmZzZXQgKyBsZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRVaW50OChvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZEludDgob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRJbnQ4KG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZFVpbnQxNihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCwgdGhpcy5fbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZEludDE2KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0SW50MTYob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQsIHRoaXMuX2xpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRVaW50MzIob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQsIHRoaXMuX2xpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRJbnQzMihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEludDMyKG9mZnNldCAtIHRoaXMuX3NsaWNlT2Zmc2V0LCB0aGlzLl9saXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkRmxvYXQzMihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0IC0gdGhpcy5fc2xpY2VPZmZzZXQsIHRoaXMuX2xpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJlYWRGbG9hdDY0KG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQgLSB0aGlzLl9zbGljZU9mZnNldCwgdGhpcy5fbGl0dGxlRW5kaWFuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZFVpbnQ2NChvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMucmVhZFVpbnQzMihvZmZzZXQpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucmVhZFVpbnQzMihvZmZzZXQgKyA0KTtcbiAgICAgICAgbGV0IGNvbWJpbmVkO1xuICAgICAgICBpZiAodGhpcy5fbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICBjb21iaW5lZCA9IGxlZnQgKyAoKDIgKiogMzIpICogcmlnaHQpO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb21iaW5lZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29tYmluZWR9IGV4Y2VlZHMgTUFYX1NBRkVfSU5URUdFUi4gYFxuICAgICAgICAgICAgICAgICAgICArICdQcmVjaXNpb24gbWF5IGJlIGxvc3QuIFBsZWFzZSByZXBvcnQgaWYgeW91IGdldCB0aGlzIG1lc3NhZ2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL2dlb3RpZmZqcy9nZW90aWZmLmpzL2lzc3VlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbWJpbmVkID0gKCgyICoqIDMyKSAqIGxlZnQpICsgcmlnaHQ7XG4gICAgICAgIGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29tYmluZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29tYmluZWR9IGV4Y2VlZHMgTUFYX1NBRkVfSU5URUdFUi4gYFxuICAgICAgICAgICAgICAgICsgJ1ByZWNpc2lvbiBtYXkgYmUgbG9zdC4gUGxlYXNlIHJlcG9ydCBpZiB5b3UgZ2V0IHRoaXMgbWVzc2FnZSB0byBodHRwczovL2dpdGh1Yi5jb20vZ2VvdGlmZmpzL2dlb3RpZmYuanMvaXNzdWVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU1MzM4Mzg0LzgwNjA1OTFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZWFkSW50NjQob2Zmc2V0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgIGNvbnN0IGlzTmVnYXRpdmUgPSAodGhpcy5fZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgKHRoaXMuX2xpdHRsZUVuZGlhbiA/IDcgOiAwKSkgJiAweDgwKVxuICAgICAgICAgICAgPiAwO1xuICAgICAgICBsZXQgY2FycnlpbmcgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ5dGUgPSB0aGlzLl9kYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAodGhpcy5fbGl0dGxlRW5kaWFuID8gaSA6IDcgLSBpKSk7XG4gICAgICAgICAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYXJyeWluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZSAhPT0gMHgwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZSA9IH4oYnl0ZSAtIDEpICYgMHhmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ5dGUgPSB+Ynl0ZSAmIDB4ZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgKz0gYnl0ZSAqICgyNTYgKiogaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gLXZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmVhZE9mZnNldChvZmZzZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JpZ1RpZmYpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRVaW50NjQob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkVWludDMyKG9mZnNldCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YXNsaWNlLmpzLm1hcCIsImltcG9ydCB7IGdldEZsb2F0MTYgfSBmcm9tICdAcGV0YW1vcmlrZW4vZmxvYXQxNic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVmlldzY0IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyTGlrZX0gYXJyYXlCdWZmZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcnJheUJ1ZmZlcikge1xuICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlcik7XG4gICAgfVxuICAgIGdldCBidWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5idWZmZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VWludDY0KG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmdldFVpbnQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5nZXRVaW50MzIob2Zmc2V0ICsgNCwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgbGV0IGNvbWJpbmVkO1xuICAgICAgICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgICAgICAgICBjb21iaW5lZCA9IGxlZnQgKyAoKDIgKiogMzIpICogcmlnaHQpO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihjb21iaW5lZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29tYmluZWR9IGV4Y2VlZHMgTUFYX1NBRkVfSU5URUdFUi4gYFxuICAgICAgICAgICAgICAgICAgICArICdQcmVjaXNpb24gbWF5IGJlIGxvc3QuIFBsZWFzZSByZXBvcnQgaWYgeW91IGdldCB0aGlzIG1lc3NhZ2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL2dlb3RpZmZqcy9nZW90aWZmLmpzL2lzc3VlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbWJpbmVkID0gKCgyICoqIDMyKSAqIGxlZnQpICsgcmlnaHQ7XG4gICAgICAgIGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29tYmluZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29tYmluZWR9IGV4Y2VlZHMgTUFYX1NBRkVfSU5URUdFUi4gYFxuICAgICAgICAgICAgICAgICsgJ1ByZWNpc2lvbiBtYXkgYmUgbG9zdC4gUGxlYXNlIHJlcG9ydCBpZiB5b3UgZ2V0IHRoaXMgbWVzc2FnZSB0byBodHRwczovL2dpdGh1Yi5jb20vZ2VvdGlmZmpzL2dlb3RpZmYuanMvaXNzdWVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU1MzM4Mzg0LzgwNjA1OTFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEludDY0KG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgIGNvbnN0IGlzTmVnYXRpdmUgPSAodGhpcy5fZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgKGxpdHRsZUVuZGlhbiA/IDcgOiAwKSkgJiAweDgwKSA+IDA7XG4gICAgICAgIGxldCBjYXJyeWluZyA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnl0ZSA9IHRoaXMuX2RhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIChsaXR0bGVFbmRpYW4gPyBpIDogNyAtIGkpKTtcbiAgICAgICAgICAgIGlmIChpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhcnJ5aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChieXRlICE9PSAweDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlID0gfihieXRlIC0gMSkgJiAweGZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnl0ZSA9IH5ieXRlICYgMHhmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSArPSBieXRlICogKDI1NiAqKiBpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSAtdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRVaW50OChvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEludDgob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRJbnQ4KG9mZnNldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VWludDE2KG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEludDE2KG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRJbnQxNihvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VWludDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEludDMyKG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhVmlldy5nZXRJbnQzMihvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0RmxvYXQxNihvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICAgICAgICByZXR1cm4gZ2V0RmxvYXQxNih0aGlzLl9kYXRhVmlldywgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEZsb2F0MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEZsb2F0NjQob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFWaWV3LmdldEZsb2F0NjQob2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGF2aWV3NjQuanMubWFwIiwiLyoqIEBtb2R1bGUgZ2VvdGlmZiAqL1xuaW1wb3J0IEdlb1RJRkZJbWFnZSBmcm9tICcuL2dlb3RpZmZpbWFnZS5qcyc7XG5pbXBvcnQgRGF0YVZpZXc2NCBmcm9tICcuL2RhdGF2aWV3NjQuanMnO1xuaW1wb3J0IERhdGFTbGljZSBmcm9tICcuL2RhdGFzbGljZS5qcyc7XG5pbXBvcnQgUG9vbCBmcm9tICcuL3Bvb2wuanMnO1xuaW1wb3J0IHsgbWFrZVJlbW90ZVNvdXJjZSwgbWFrZUN1c3RvbVNvdXJjZSB9IGZyb20gJy4vc291cmNlL3JlbW90ZS5qcyc7XG5pbXBvcnQgeyBtYWtlQnVmZmVyU291cmNlIH0gZnJvbSAnLi9zb3VyY2UvYXJyYXlidWZmZXIuanMnO1xuaW1wb3J0IHsgbWFrZUZpbGVSZWFkZXJTb3VyY2UgfSBmcm9tICcuL3NvdXJjZS9maWxlcmVhZGVyLmpzJztcbmltcG9ydCB7IG1ha2VGaWxlU291cmNlIH0gZnJvbSAnLi9zb3VyY2UvZmlsZS5qcyc7XG5pbXBvcnQgeyBCYXNlQ2xpZW50LCBCYXNlUmVzcG9uc2UgfSBmcm9tICcuL3NvdXJjZS9jbGllbnQvYmFzZS5qcyc7XG5pbXBvcnQgeyBJbWFnZUZpbGVEaXJlY3RvcnlQYXJzZXIgfSBmcm9tICcuL2ltYWdlZmlsZWRpcmVjdG9yeS5qcyc7XG5pbXBvcnQgeyBmaWVsZFR5cGVzLCBnZXRGaWVsZFR5cGVTaXplLCByZWdpc3RlclRhZyB9IGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgeyB3cml0ZUdlb3RpZmYgfSBmcm9tICcuL2dlb3RpZmZ3cml0ZXIuanMnO1xuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0ICogYXMgcmdiIGZyb20gJy4vcmdiLmpzJztcbmltcG9ydCB7IGdldERlY29kZXIsIGFkZERlY29kZXIgfSBmcm9tICcuL2NvbXByZXNzaW9uL2luZGV4LmpzJztcbmltcG9ydCB7IHNldExvZ2dlciB9IGZyb20gJy4vbG9nZ2luZy5qcyc7XG4vKiogQGltcG9ydCB7IEJhc2VTb3VyY2UgfSBmcm9tICcuL3NvdXJjZS9iYXNlc291cmNlLmpzJyAqL1xuZXhwb3J0IHsgZ2xvYmFscyB9O1xuZXhwb3J0IHsgcmVnaXN0ZXJUYWcgfTtcbmV4cG9ydCB7IHJnYiB9O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlRGVjb2RlciB9IGZyb20gJy4vY29tcHJlc3Npb24vYmFzZWRlY29kZXIuanMnO1xuZXhwb3J0IHsgZ2V0RGVjb2RlciwgYWRkRGVjb2RlciB9O1xuZXhwb3J0IHsgc2V0TG9nZ2VyIH07XG5leHBvcnQgeyBJbWFnZUZpbGVEaXJlY3RvcnkgfSBmcm9tICcuL2ltYWdlZmlsZWRpcmVjdG9yeS5qcyc7XG4vKipcbiAqIEB0eXBlZGVmIHtVaW50OEFycmF5IHwgSW50OEFycmF5IHwgVWludDE2QXJyYXkgfCBJbnQxNkFycmF5IHwgVWludDMyQXJyYXkgfCBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5IHwgRmxvYXQ2NEFycmF5fVxuICogVHlwZWRBcnJheVxuICovXG4vKipcbiAqIEB0eXBlZGVmIHt7IGhlaWdodDpudW1iZXIsIHdpZHRoOiBudW1iZXIgfX0gRGltZW5zaW9uc1xuICovXG4vKipcbiAqIFRoZSBhdXRvZ2VuZXJhdGVkIGRvY3MgYXJlIGEgbGl0dGxlIGNvbmZ1c2luZyBoZXJlLiBUaGUgZWZmZWN0aXZlIHR5cGUgaXM6XG4gKlxuICogYFR5cGVkQXJyYXkgJiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyfWBcbiAqIEB0eXBlZGVmIHtUeXBlZEFycmF5ICYgRGltZW5zaW9uc30gVHlwZWRBcnJheVdpdGhEaW1lbnNpb25zXG4gKi9cbi8qKlxuICogVGhlIGF1dG9nZW5lcmF0ZWQgZG9jcyBhcmUgYSBsaXR0bGUgY29uZnVzaW5nIGhlcmUuIFRoZSBlZmZlY3RpdmUgdHlwZSBpczpcbiAqXG4gKiBgVHlwZWRBcnJheVtdICYgeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcn1gXG4gKiBAdHlwZWRlZiB7VHlwZWRBcnJheVtdICYgRGltZW5zaW9uc30gVHlwZWRBcnJheUFycmF5V2l0aERpbWVuc2lvbnNcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBHZW90aWZmV3JpdGVyTWV0YWRhdGFcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtJbWFnZVdpZHRoXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0ltYWdlTGVuZ3RoXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWR0aF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaGVpZ2h0XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW0JpdHNQZXJTYW1wbGVdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbQ29tcHJlc3Npb25dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbUGxhbmFyQ29uZmlndXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtFeHRyYVNhbXBsZXNdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtTYW1wbGVzUGVyUGl4ZWxdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbU3RyaXBCeXRlQ291bnRzXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW01vZGVsUGl4ZWxTY2FsZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtNb2RlbFRyYW5zZm9ybWF0aW9uXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW01vZGVsVGllcG9pbnRdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbR2VvS2V5RGlyZWN0b3J5XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtHZW9Bc2NpaVBhcmFtc11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFtHZW9Eb3VibGVQYXJhbXNdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbT3JpZW50YXRpb25dXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbUmVzb2x1dGlvblVuaXRdXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bWJlcltdfSBbWFBvc2l0aW9uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1lQb3NpdGlvbl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtSb3dzUGVyU3RyaXBdXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbU2FtcGxlRm9ybWF0XVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudW1iZXJbXX0gW1RpbGVXaWR0aF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtUaWxlTGVuZ3RoXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW1RpbGVPZmZzZXRzXVxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW1RpbGVCeXRlQ291bnRzXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtHREFMX05PREFUQV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtHZW9ncmFwaGljVHlwZUdlb0tleV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtQcm9qZWN0ZWRDU1R5cGVHZW9LZXldXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW0dlb2dDaXRhdGlvbkdlb0tleV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbR1RDaXRhdGlvbkdlb0tleV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtHVE1vZGVsVHlwZUdlb0tleV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyIHwgbnVtYmVyW119IFtHVFJhc3RlclR5cGVHZW9LZXldXG4gKi9cbi8qKlxuICogIFRoZSBhdXRvZ2VuZXJhdGVkIGRvY3MgYXJlIGEgbGl0dGxlIGNvbmZ1c2luZyBoZXJlLiBUaGUgZWZmZWN0aXZlIHR5cGUgaXM6XG4gKlxuICogYChUeXBlZEFycmF5IHwgVHlwZWRBcnJheVtdKSAmIHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXJ9YFxuICogQHR5cGVkZWYge1R5cGVkQXJyYXlXaXRoRGltZW5zaW9ucyB8IFR5cGVkQXJyYXlBcnJheVdpdGhEaW1lbnNpb25zfSBSZWFkUmFzdGVyUmVzdWx0XG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRGVjb2RlcldvcmtlclxuICogVXNlIHRoZSB7QGxpbmsgUG9vbC5iaW5kUGFyYW1ldGVyc30gbWV0aG9kIHRvIGdldCBhIGRlY29kZXIgd29ya2VyIGZvclxuICogYSBzcGVjaWZpYyBjb21wcmVzc2lvbiBhbmQgaXRzIHBhcmFtZXRlcnMuXG4gKlxuICogQHByb3BlcnR5IHsoYnVmZmVyOiBBcnJheUJ1ZmZlckxpa2UpID0+IFByb21pc2U8QXJyYXlCdWZmZXJMaWtlPn0gZGVjb2RlXG4gKiAgIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGNvbXByZXNzZWQgYnVmZmVyIGFuZCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIGRlY29kZWQgYnVmZmVyLlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWRSYXN0ZXJzT3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBbd2luZG93XSB0aGUgc3Vic2V0IHRvIHJlYWQgZGF0YSBmcm9tIGluIHBpeGVscy4gV2hvbGUgd2luZG93IGlmIG5vdCBzcGVjaWZpZWQuXG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IFtzYW1wbGVzXSB0aGUgc2VsZWN0aW9uIG9mIHNhbXBsZXMgdG8gcmVhZCBmcm9tLiBEZWZhdWx0IGlzIGFsbCBzYW1wbGVzLlxuICogICAgIEFsbCBzYW1wbGVzIGlmIG5vdCBzcGVjaWZpZWQuXG4gKiBAcHJvcGVydHkge1Bvb2x8bnVsbH0gW3Bvb2w9bnVsbF0gVGhlIG9wdGlvbmFsIGRlY29kZXIgcG9vbCB0byB1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpZHRoXSBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0LiBXaGVuIHRoZSB3aWR0aCBpcyBub3QgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWUgYXMgdGhlIGltYWdlcywgcmVzYW1wbGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaGVpZ2h0XSBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dC4gV2hlbiB0aGUgd2lkdGggaXMgbm90IHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZSBhcyB0aGUgaW1hZ2VzLCByZXNhbXBsaW5nIHdpbGwgYmUgcGVyZm9ybWVkLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtyZXNhbXBsZU1ldGhvZD0nbmVhcmVzdCddIFRoZSBkZXNpcmVkIHJlc2FtcGxpbmcgbWV0aG9kLlxuICogQHByb3BlcnR5IHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bWJlcltdfSBbZmlsbFZhbHVlXSBUaGUgdmFsdWUgdG8gdXNlIGZvciBwYXJ0cyBvZiB0aGUgaW1hZ2VcbiAqICAgICBvdXRzaWRlIG9mIHRoZSBpbWFnZXMgZXh0ZW50LiBXaGVuIG11bHRpcGxlIHNhbXBsZXMgYXJlIHJlcXVlc3RlZCBhbmQgYGludGVybGVhdmVgIGlzXG4gKiAgICAgYGZhbHNlYCwgYW4gYXJyYXkgb2YgZmlsbCB2YWx1ZXMgY2FuIGJlIHBhc3NlZC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbnx0cnVlfGZhbHNlfSBbaW50ZXJsZWF2ZV0gd2hldGhlciB0aGUgZGF0YSBzaGFsbCBiZSByZWFkXG4gKiAgICAgaW4gb25lIHNpbmdsZSBhcnJheSBvciBzZXBhcmF0ZSBhcnJheXMuXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhZFJHQk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gW3dpbmRvd10gdGhlIHN1YnNldCB0byByZWFkIGRhdGEgZnJvbSBpbiBwaXhlbHMuIFdob2xlIHdpbmRvdyBpZiBub3Qgc3BlY2lmaWVkLlxuICogQHByb3BlcnR5IHtQb29sfG51bGx9IFtwb29sPW51bGxdIFRoZSBvcHRpb25hbCBkZWNvZGVyIHBvb2wgdG8gdXNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWR0aF0gVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dC4gV2hlbiB0aGUgd2lkdGggaXMgbm8gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWUgYXMgdGhlIGltYWdlcywgcmVzYW1wbGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaGVpZ2h0XSBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dC4gV2hlbiB0aGUgd2lkdGggaXMgbm8gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lIGFzIHRoZSBpbWFnZXMsIHJlc2FtcGxpbmcgd2lsbCBiZSBwZXJmb3JtZWQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3Jlc2FtcGxlTWV0aG9kPSduZWFyZXN0J10gVGhlIGRlc2lyZWQgcmVzYW1wbGluZyBtZXRob2QuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtlbmFibGVBbHBoYT1mYWxzZV0gRW5hYmxlIHJlYWRpbmcgYWxwaGEgY2hhbm5lbCBpZiBwcmVzZW50LlxuICogQHByb3BlcnR5IHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbnx0cnVlfGZhbHNlfSBbaW50ZXJsZWF2ZV0gd2hldGhlciB0aGUgZGF0YSBzaGFsbCBiZSByZWFkXG4gKiAgICAgaW4gb25lIHNpbmdsZSBhcnJheSBvciBzZXBhcmF0ZSBhcnJheXMuXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQmxvY2tlZFNvdXJjZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYmxvY2tTaXplXSBCbG9jayBzaXplIGZvciBhIEJsb2NrZWRTb3VyY2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2NhY2hlU2l6ZT0xMDBdIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRvIGNhY2hlLlxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlbW90ZVNvdXJjZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gW2hlYWRlcnM9e31dIEFkZGl0aW9uYWwgaGVhZGVycyB0byBhZGQgdG8gZWFjaCByZXF1ZXN0XG4gKiBAcHJvcGVydHkge251bWJlcn0gW21heFJhbmdlcz0wXSBNYXhpbXVtIG51bWJlciBvZiByYW5nZXMgdG8gcmVxdWVzdCBpbiBhIHNpbmdsZSBIVFRQIHJlcXVlc3QuIDAgbWVhbnMgbm8gbXVsdGktcmFuZ2UgcmVxdWVzdHMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFthbGxvd0Z1bGxGaWxlPWZhbHNlXSBXaGV0aGVyIHRvIGFsbG93IGZ1bGwgZmlsZSByZXNwb25zZXMgd2hlbiByZXF1ZXN0aW5nIHJhbmdlc1xuICogQHByb3BlcnR5IHtib29sZWFufSBbZm9yY2VYSFI9ZmFsc2VdIFdoZW4gdGhlIEZldGNoIEFQSSB3b3VsZCBiZSB1c2VkLCBmb3JjZSB1c2luZyBYTUxIdHRwUmVxdWVzdCBpbnN0ZWFkLlxuICovXG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtEYXRhU2xpY2V9IGRhdGFTbGljZVxuICogQHBhcmFtIHsweDAwMDJ9IGZpZWxkVHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG4vKipcbiAqIEBwYXJhbSB7RGF0YVNsaWNlfSBkYXRhU2xpY2VcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5GaWVsZFR5cGV9IGZpZWxkVHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcmV0dXJucyB7VHlwZWRBcnJheXxBcnJheTxudW1iZXI+fHN0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWVzKGRhdGFTbGljZSwgZmllbGRUeXBlLCBjb3VudCwgb2Zmc2V0KSB7XG4gICAgLyoqIEB0eXBlIHtUeXBlZEFycmF5fEFycmF5PG51bWJlcj58bnVsbH0gKi9cbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcbiAgICBsZXQgcmVhZE1ldGhvZCA9IG51bGw7XG4gICAgY29uc3QgZmllbGRUeXBlTGVuZ3RoID0gZ2V0RmllbGRUeXBlU2l6ZShmaWVsZFR5cGUpO1xuICAgIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5CWVRFOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuQVNDSUk6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5VTkRFRklORUQ6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgVWludDhBcnJheShjb3VudCk7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRVaW50ODtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0JZVEU6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgSW50OEFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEludDg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNIT1JUOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IFVpbnQxNkFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZFVpbnQxNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU1NIT1JUOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IEludDE2QXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkSW50MTY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkxPTkc6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5JRkQ6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgVWludDMyQXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkVWludDMyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TTE9ORzpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBJbnQzMkFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEludDMyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5MT05HODpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLklGRDg6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgQXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkVWludDY0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TTE9ORzg6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgQXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkSW50NjQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlJBVElPTkFMOlxuICAgICAgICAgICAgdmFsdWVzID0gbmV3IFVpbnQzMkFycmF5KGNvdW50ICogMik7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRVaW50MzI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNSQVRJT05BTDpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBJbnQzMkFycmF5KGNvdW50ICogMik7XG4gICAgICAgICAgICByZWFkTWV0aG9kID0gZGF0YVNsaWNlLnJlYWRJbnQzMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuRkxPQVQ6XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50KTtcbiAgICAgICAgICAgIHJlYWRNZXRob2QgPSBkYXRhU2xpY2UucmVhZEZsb2F0MzI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkRPVUJMRTpcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBGbG9hdDY0QXJyYXkoY291bnQpO1xuICAgICAgICAgICAgcmVhZE1ldGhvZCA9IGRhdGFTbGljZS5yZWFkRmxvYXQ2NDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvLyB3aWxsIHRocm93IGJlbG93XG4gICAgfVxuICAgIGlmICh2YWx1ZXMgPT09IG51bGwgfHwgcmVhZE1ldGhvZCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCBmaWVsZCB0eXBlOiAke2ZpZWxkVHlwZX1gKTtcbiAgICB9XG4gICAgLy8gbm9ybWFsIGZpZWxkc1xuICAgIGlmICghKGZpZWxkVHlwZSA9PT0gZmllbGRUeXBlcy5SQVRJT05BTCB8fCBmaWVsZFR5cGUgPT09IGZpZWxkVHlwZXMuU1JBVElPTkFMKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCArIChpICogZmllbGRUeXBlTGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIFJBVElPTkFMIG9yIFNSQVRJT05BTFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDIpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCArIChpICogZmllbGRUeXBlTGVuZ3RoKSk7XG4gICAgICAgICAgICB2YWx1ZXNbaSArIDFdID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0ICsgKChpICogZmllbGRUeXBlTGVuZ3RoKSArIDQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmllbGRUeXBlID09PSBmaWVsZFR5cGVzLkFTQ0lJKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykuZGVjb2RlKC8qKiBAdHlwZSB7VWludDhBcnJheX0gKi8gKHZhbHVlcykpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuLyoqXG4gKiBFcnJvciBjbGFzcyBmb3IgY2FzZXMgd2hlbiBhbiBJRkQgaW5kZXggd2FzIHJlcXVlc3RlZCwgdGhhdCBkb2VzIG5vdCBleGlzdFxuICogaW4gdGhlIGZpbGUuXG4gKi9cbmNsYXNzIEdlb1RJRkZJbWFnZUluZGV4RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW5kZXgpIHtcbiAgICAgICAgc3VwZXIoYE5vIGltYWdlIGF0IGluZGV4ICR7aW5kZXh9YCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB9XG59XG5jbGFzcyBHZW9USUZGQmFzZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtfaW5kZXg9MF0gdGhlIGluZGV4IG9mIHRoZSBpbWFnZSB0byByZXR1cm4uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRkltYWdlPn0gdGhlIGltYWdlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqL1xuICAgIGFzeW5jIGdldEltYWdlKF9pbmRleCA9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gdGhlIG51bWJlciBvZiBpbnRlcm5hbCBzdWJmaWxlIGltYWdlc1xuICAgICAqL1xuICAgIGFzeW5jIGdldEltYWdlQ291bnQoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWRSYXN0ZXJzV2luZG93T3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVzWF0gZGVzaXJlZCBZIHJlc29sdXRpb24gKHdvcmxkIHVuaXRzIHBlciBwaXhlbClcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gW3Jlc1ldIGRlc2lyZWQgWCByZXNvbHV0aW9uICh3b3JsZCB1bml0cyBwZXIgcGl4ZWwpXG4gICAgICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBbYmJveF0gdGhlIHN1YnNldCB0byByZWFkIGRhdGEgZnJvbSBpblxuICAgICAqICAgICBnZW9ncmFwaGljYWwgY29vcmRpbmF0ZXMuIFdob2xlIGltYWdlIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogKGV4cGVyaW1lbnRhbCkgUmVhZHMgcmFzdGVyIGRhdGEgZnJvbSB0aGUgYmVzdCBmaXR0aW5nIGltYWdlLiBUaGlzIGZ1bmN0aW9uIHVzZXNcbiAgICAgKiB0aGUgaW1hZ2Ugd2l0aCB0aGUgbG93ZXN0IHJlc29sdXRpb24gdGhhdCBpcyBzdGlsbCBhIGhpZ2hlciByZXNvbHV0aW9uIHRoYW4gdGhlXG4gICAgICogcmVxdWVzdGVkIHJlc29sdXRpb24uXG4gICAgICogV2hlbiBzcGVjaWZpZWQsIHRoZSBgYmJveGAgb3B0aW9uIGlzIHRyYW5zbGF0ZWQgdG8gdGhlIGB3aW5kb3dgIG9wdGlvbiBhbmQgdGhlXG4gICAgICogYHJlc1hgIGFuZCBgcmVzWWAgdG8gYHdpZHRoYCBhbmQgYGhlaWdodGAgcmVzcGVjdGl2ZWx5LlxuICAgICAqIFRoZW4sIHRoZSBbcmVhZFJhc3RlcnNde0BsaW5rIEdlb1RJRkZJbWFnZSNyZWFkUmFzdGVyc30gbWV0aG9kIG9mIHRoZSBzZWxlY3RlZFxuICAgICAqIGltYWdlIGlzIGNhbGxlZCBhbmQgdGhlIHJlc3VsdCByZXR1cm5lZC5cbiAgICAgKiBAc2VlIEdlb1RJRkZJbWFnZS5yZWFkUmFzdGVyc1xuICAgICAqIEBwYXJhbSB7UmVhZFJhc3RlcnNPcHRpb25zICYgUmVhZFJhc3RlcnNXaW5kb3dPcHRpb25zfSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWFkUmFzdGVyUmVzdWx0Pn0gdGhlIGRlY29kZWQgYXJyYXkocyksIHdpdGggYGhlaWdodGAgYW5kIGB3aWR0aGAsIGFzIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIGFzeW5jIHJlYWRSYXN0ZXJzKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHdpbmRvdzogaW1hZ2VXaW5kb3csIHdpZHRoLCBoZWlnaHQgfSA9IG9wdGlvbnM7XG4gICAgICAgIGxldCB7IHJlc1gsIHJlc1ksIGJib3ggfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBhd2FpdCB0aGlzLmdldEltYWdlKCk7XG4gICAgICAgIGxldCB1c2VkSW1hZ2UgPSBmaXJzdEltYWdlO1xuICAgICAgICBjb25zdCBpbWFnZUNvdW50ID0gYXdhaXQgdGhpcy5nZXRJbWFnZUNvdW50KCk7XG4gICAgICAgIGNvbnN0IGltZ0JCb3ggPSBmaXJzdEltYWdlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIGlmIChpbWFnZVdpbmRvdyAmJiBiYm94KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggXCJiYm94XCIgYW5kIFwid2luZG93XCIgcGFzc2VkLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdpZHRoL2hlaWdodCBpcyBwYXNzZWQsIHRyYW5zZm9ybSBpdCB0byByZXNvbHV0aW9uXG4gICAgICAgIGlmICh3aWR0aCB8fCBoZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW1hZ2Ugd2luZG93IChwaXhlbCBjb29yZGluYXRlcyksIHRyYW5zZm9ybSBpdCB0byBhIEJCb3hcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBvcmlnaW4vcmVzb2x1dGlvbiBvZiB0aGUgZmlyc3QgaW1hZ2UuXG4gICAgICAgICAgICBpZiAoaW1hZ2VXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbb1gsIG9ZXSA9IGZpcnN0SW1hZ2UuZ2V0T3JpZ2luKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW3JYLCByWV0gPSBmaXJzdEltYWdlLmdldFJlc29sdXRpb24oKTtcbiAgICAgICAgICAgICAgICBiYm94ID0gW1xuICAgICAgICAgICAgICAgICAgICBvWCArIChpbWFnZVdpbmRvd1swXSAqIHJYKSxcbiAgICAgICAgICAgICAgICAgICAgb1kgKyAoaW1hZ2VXaW5kb3dbMV0gKiByWSksXG4gICAgICAgICAgICAgICAgICAgIG9YICsgKGltYWdlV2luZG93WzJdICogclgpLFxuICAgICAgICAgICAgICAgICAgICBvWSArIChpbWFnZVdpbmRvd1szXSAqIHJZKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIGJib3ggKG9yIGNhbGN1bGF0ZWQgb25lKVxuICAgICAgICAgICAgY29uc3QgdXNlZEJCb3ggPSBiYm94IHx8IGltZ0JCb3g7XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzWCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggd2lkdGggYW5kIHJlc1ggcGFzc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc1ggPSAodXNlZEJCb3hbMl0gLSB1c2VkQkJveFswXSkgLyB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzWSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggd2lkdGggYW5kIHJlc1kgcGFzc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc1kgPSAodXNlZEJCb3hbM10gLSB1c2VkQkJveFsxXSkgLyBoZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcmVzb2x1dGlvbiBpcyBzZXQgb3IgY2FsY3VsYXRlZCwgdHJ5IHRvIGdldCB0aGUgaW1hZ2Ugd2l0aCB0aGUgd29yc3QgYWNjZXB0YWJsZSByZXNvbHV0aW9uXG4gICAgICAgIGlmIChyZXNYIHx8IHJlc1kpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbEltYWdlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHRoaXMuZ2V0SW1hZ2UoaSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViZmlsZVR5cGUgPSBpbWFnZS5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdTdWJmaWxlVHlwZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N1YmZpbGVUeXBlID0gaW1hZ2UuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTmV3U3ViZmlsZVR5cGUnKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBzdWJmaWxlVHlwZSA9PT0gMiB8fCAobmV3U3ViZmlsZVR5cGUgfHwgMCkgJiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxJbWFnZXMuc29ydCgoYSwgYikgPT4gYS5nZXRXaWR0aCgpIC0gYi5nZXRXaWR0aCgpKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsSW1hZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhbGxJbWFnZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1nUmVzWCA9IChpbWdCQm94WzJdIC0gaW1nQkJveFswXSkgLyBpbWFnZS5nZXRXaWR0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Jlc1kgPSAoaW1nQkJveFszXSAtIGltZ0JCb3hbMV0pIC8gaW1hZ2UuZ2V0SGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdXNlZEltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgaWYgKChyZXNYICYmIHJlc1ggPiBpbWdSZXNYKSB8fCAocmVzWSAmJiByZXNZID4gaW1nUmVzWSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB3bmQgPSBpbWFnZVdpbmRvdztcbiAgICAgICAgaWYgKGJib3gpIHtcbiAgICAgICAgICAgIGNvbnN0IFtvWCwgb1ldID0gZmlyc3RJbWFnZS5nZXRPcmlnaW4oKTtcbiAgICAgICAgICAgIGNvbnN0IFtpbWFnZVJlc1gsIGltYWdlUmVzWV0gPSB1c2VkSW1hZ2UuZ2V0UmVzb2x1dGlvbihmaXJzdEltYWdlKTtcbiAgICAgICAgICAgIHduZCA9IFtcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKChiYm94WzBdIC0gb1gpIC8gaW1hZ2VSZXNYKSxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKChiYm94WzFdIC0gb1kpIC8gaW1hZ2VSZXNZKSxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKChiYm94WzJdIC0gb1gpIC8gaW1hZ2VSZXNYKSxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKChiYm94WzNdIC0gb1kpIC8gaW1hZ2VSZXNZKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB3bmQgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5taW4od25kWzBdLCB3bmRbMl0pLFxuICAgICAgICAgICAgICAgIE1hdGgubWluKHduZFsxXSwgd25kWzNdKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heCh3bmRbMF0sIHduZFsyXSksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgod25kWzFdLCB3bmRbM10pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlZEltYWdlLnJlYWRSYXN0ZXJzKHsgLi4ub3B0aW9ucywgd2luZG93OiB3bmQgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBHZW9USUZGT3B0aW9uc1xuICogQHByb3BlcnR5IHtib29sZWFufSBbY2FjaGU9ZmFsc2VdIHdoZXRoZXIgb3Igbm90IGRlY29kZWQgdGlsZXMgc2hhbGwgYmUgY2FjaGVkLlxuICovXG4vKipcbiAqIFRoZSBhYnN0cmFjdGlvbiBmb3IgYSB3aG9sZSBHZW9USUZGIGZpbGUuXG4gKi9cbmNsYXNzIEdlb1RJRkYgZXh0ZW5kcyBHZW9USUZGQmFzZSB7XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtCYXNlU291cmNlfSBzb3VyY2UgVGhlIGRhdGFzb3VyY2UgdG8gcmVhZCBmcm9tLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIFdoZXRoZXIgdGhlIGltYWdlIHVzZXMgbGl0dGxlIGVuZGlhbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJpZ1RpZmYgV2hldGhlciB0aGUgaW1hZ2UgdXNlcyBiaWdUSUZGIGNvbnZlbnRpb25zLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmaXJzdElGRE9mZnNldCBUaGUgbnVtZXJpYyBieXRlLW9mZnNldCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgaW1hZ2VcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gdGhlIGZpcnN0IElGRC5cbiAgICAgKiBAcGFyYW0ge0dlb1RJRkZPcHRpb25zfSBbb3B0aW9uc10gZnVydGhlciBvcHRpb25zLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSwgbGl0dGxlRW5kaWFuLCBiaWdUaWZmLCBmaXJzdElGRE9mZnNldCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLnBhcnNlciA9IG5ldyBJbWFnZUZpbGVEaXJlY3RvcnlQYXJzZXIoc291cmNlLCBsaXR0bGVFbmRpYW4sIGJpZ1RpZmYsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5saXR0bGVFbmRpYW4gPSBsaXR0bGVFbmRpYW47XG4gICAgICAgIHRoaXMuYmlnVGlmZiA9IGJpZ1RpZmY7XG4gICAgICAgIHRoaXMuZmlyc3RJRkRPZmZzZXQgPSBmaXJzdElGRE9mZnNldDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG9wdGlvbnMuY2FjaGUgfHwgZmFsc2U7XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8UHJvbWlzZTxpbXBvcnQoJy4vaW1hZ2VmaWxlZGlyZWN0b3J5LmpzJykuSW1hZ2VGaWxlRGlyZWN0b3J5PiB8IHVuZGVmaW5lZD59ICovXG4gICAgICAgIHRoaXMuaWZkUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPnxudWxsfSAqL1xuICAgICAgICB0aGlzLmdob3N0VmFsdWVzID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEYXRhU2xpY2U+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldFNsaWNlKG9mZnNldCwgc2l6ZSkge1xuICAgICAgICBjb25zdCBmYWxsYmFja1NpemUgPSB0aGlzLmJpZ1RpZmYgPyA0MDQ4IDogMTAyNDtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhU2xpY2UoKGF3YWl0IHRoaXMuc291cmNlLmZldGNoKFt7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlbmd0aDogdHlwZW9mIHNpemUgIT09ICd1bmRlZmluZWQnID8gc2l6ZSA6IGZhbGxiYWNrU2l6ZSxcbiAgICAgICAgICAgIH1dKSlbMF0sIG9mZnNldCwgdGhpcy5saXR0bGVFbmRpYW4sIHRoaXMuYmlnVGlmZik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8aW1wb3J0KCcuL2ltYWdlZmlsZWRpcmVjdG9yeS5qcycpLkltYWdlRmlsZURpcmVjdG9yeT59XG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdElGRChpbmRleCkge1xuICAgICAgICAvLyBzZWUgaWYgd2UgYWxyZWFkeSBoYXZlIHRoYXQgSUZEIGluZGV4IHJlcXVlc3RlZC5cbiAgICAgICAgaWYgKHRoaXMuaWZkUmVxdWVzdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAvLyBhdHRhY2ggdG8gYW4gYWxyZWFkeSByZXF1ZXN0ZWQgSUZEXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZmRSZXF1ZXN0c1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgaW5kZXggMFxuICAgICAgICAgICAgdGhpcy5pZmRSZXF1ZXN0c1tpbmRleF0gPSB0aGlzLnBhcnNlci5wYXJzZUZpbGVEaXJlY3RvcnlBdCh0aGlzLmZpcnN0SUZET2Zmc2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmZFJlcXVlc3RzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pZmRSZXF1ZXN0c1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgSUZEIHdhcyBub3QgeWV0IGxvYWRlZCwgbG9hZCB0aGF0IG9uZSBmaXJzdFxuICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgcmVjdXJzaXZlIGNhbGwuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWZkUmVxdWVzdHNbaW5kZXggLSAxXSA9IHRoaXMucmVxdWVzdElGRChpbmRleCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgb25lIGFscmVhZHkgd2FzIGFuIGluZGV4IGVycm9yLCByZXRocm93XG4gICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUgY3VycmVudCBpbmRleFxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgR2VvVElGRkltYWdlSW5kZXhFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR2VvVElGRkltYWdlSW5kZXhFcnJvcihpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJldGhyb3cgYW55dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIElGRCB3YXMgbG9hZGVkLCB3ZSBjYW4gZmluYWxseSBmZXRjaCB0aGUgb25lIHdlIGFyZSBpbnRlcmVzdGVkIGluLlxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiBhbiBJSUZFLCBvdGhlcndpc2UgdGhpcy5pZmRSZXF1ZXN0c1tpbmRleF0gd291bGQgYmUgZGVsYXllZFxuICAgICAgICB0aGlzLmlmZFJlcXVlc3RzW2luZGV4XSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1Byb21pc2UgPSB0aGlzLmlmZFJlcXVlc3RzW2luZGV4IC0gMV07XG4gICAgICAgICAgICBpZiAoIXByZXZpb3VzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJldmlvdXMgSUZEIHJlcXVlc3QgbWlzc2luZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJZmQgPSBhd2FpdCBwcmV2aW91c1Byb21pc2U7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNJZmQubmV4dElGREJ5dGVPZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR2VvVElGRkltYWdlSW5kZXhFcnJvcihpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIucGFyc2VGaWxlRGlyZWN0b3J5QXQocHJldmlvdXNJZmQubmV4dElGREJ5dGVPZmZzZXQpO1xuICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pZmRSZXF1ZXN0c1tpbmRleF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbi10aCBpbnRlcm5hbCBzdWJmaWxlIG9mIGFuIGltYWdlLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PTBdIHRoZSBpbmRleCBvZiB0aGUgaW1hZ2UgdG8gcmV0dXJuLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkZJbWFnZT59IHRoZSBpbWFnZSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJbWFnZShpbmRleCA9IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHZW9USUZGSW1hZ2UoYXdhaXQgdGhpcy5yZXF1ZXN0SUZEKGluZGV4KSwgdGhpcy5saXR0bGVFbmRpYW4sIHRoaXMuY2FjaGUsIHRoaXMuc291cmNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY291bnQgb2YgdGhlIGludGVybmFsIHN1YmZpbGVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gdGhlIG51bWJlciBvZiBpbnRlcm5hbCBzdWJmaWxlIGltYWdlc1xuICAgICAqL1xuICAgIGFzeW5jIGdldEltYWdlQ291bnQoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIC8vIGxvb3AgdW50aWwgd2UgcnVuIG91dCBvZiBJRkRzXG4gICAgICAgIGxldCBoYXNOZXh0ID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0SUZEKGluZGV4KTtcbiAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEdlb1RJRkZJbWFnZUluZGV4RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlcyBvZiB0aGUgQ09HIGdob3N0IGFyZWEgYXMgYSBwYXJzZWQgbWFwLlxuICAgICAqIFNlZSBodHRwczovL2dkYWwub3JnL2RyaXZlcnMvcmFzdGVyL2NvZy5odG1sI2hlYWRlci1naG9zdC1hcmVhIGZvciByZWZlcmVuY2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPnxudWxsPn0gdGhlIHBhcnNlZCBnaG9zdCBhcmVhIG9yIG51bGwsIGlmIG5vIHN1Y2ggYXJlYSB3YXMgZm91bmRcbiAgICAgKi9cbiAgICBhc3luYyBnZXRHaG9zdFZhbHVlcygpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5iaWdUaWZmID8gMTYgOiA4O1xuICAgICAgICBpZiAodGhpcy5naG9zdFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2hvc3RWYWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGV0ZWN0aW9uU3RyaW5nID0gJ0dEQUxfU1RSVUNUVVJBTF9NRVRBREFUQV9TSVpFPSc7XG4gICAgICAgIGNvbnN0IGhldXJpc3RpY0FyZWFTaXplID0gZGV0ZWN0aW9uU3RyaW5nLmxlbmd0aCArIDEwMDtcbiAgICAgICAgbGV0IHNsaWNlID0gYXdhaXQgdGhpcy5nZXRTbGljZShvZmZzZXQsIGhldXJpc3RpY0FyZWFTaXplKTtcbiAgICAgICAgaWYgKGRldGVjdGlvblN0cmluZyA9PT0gZ2V0VmFsdWVzKHNsaWNlLCBmaWVsZFR5cGVzLkFTQ0lJLCBkZXRlY3Rpb25TdHJpbmcubGVuZ3RoLCBvZmZzZXQpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXNTdHJpbmcgPSBnZXRWYWx1ZXMoc2xpY2UsIGZpZWxkVHlwZXMuQVNDSUksIGhldXJpc3RpY0FyZWFTaXplLCBvZmZzZXQpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5lID0gdmFsdWVzU3RyaW5nLnNwbGl0KCdcXG4nKVswXTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhU2l6ZSA9IE51bWJlcihmaXJzdExpbmUuc3BsaXQoJz0nKVsxXS5zcGxpdCgnICcpWzBdKSArIGZpcnN0TGluZS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGFTaXplID4gaGV1cmlzdGljQXJlYVNpemUpIHtcbiAgICAgICAgICAgICAgICBzbGljZSA9IGF3YWl0IHRoaXMuZ2V0U2xpY2Uob2Zmc2V0LCBtZXRhZGF0YVNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZnVsbFN0cmluZyA9IGdldFZhbHVlcyhzbGljZSwgZmllbGRUeXBlcy5BU0NJSSwgbWV0YWRhdGFTaXplLCBvZmZzZXQpO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gKi9cbiAgICAgICAgICAgIGNvbnN0IGdob3N0VmFsdWVzID0ge307XG4gICAgICAgICAgICBmdWxsU3RyaW5nXG4gICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGxpbmUpID0+IGxpbmUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAubWFwKChsaW5lKSA9PiBsaW5lLnNwbGl0KCc9JykpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGdob3N0VmFsdWVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5naG9zdFZhbHVlcyA9IGdob3N0VmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdob3N0VmFsdWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhIChHZW8pVElGRiBmaWxlIGZyb20gdGhlIGdpdmVuIHNvdXJjZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QmFzZVNvdXJjZX0gc291cmNlIFRoZSBzb3VyY2Ugb2YgZGF0YSB0byBwYXJzZSBmcm9tLlxuICAgICAqIEBwYXJhbSB7R2VvVElGRk9wdGlvbnN9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBmcm9tU291cmNlKHNvdXJjZSwgb3B0aW9ucywgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckRhdGEgPSAoYXdhaXQgc291cmNlLmZldGNoKFt7IG9mZnNldDogMCwgbGVuZ3RoOiAxMDI0IH1dLCBzaWduYWwpKVswXTtcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXc2NChoZWFkZXJEYXRhKTtcbiAgICAgICAgY29uc3QgQk9NID0gZGF0YVZpZXcuZ2V0VWludDE2KDAsIGZhbHNlKTtcbiAgICAgICAgbGV0IGxpdHRsZUVuZGlhbjtcbiAgICAgICAgaWYgKEJPTSA9PT0gMHg0OTQ5KSB7XG4gICAgICAgICAgICBsaXR0bGVFbmRpYW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJPTSA9PT0gMHg0RDREKSB7XG4gICAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYnl0ZSBvcmRlciB2YWx1ZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYWdpY051bWJlciA9IGRhdGFWaWV3LmdldFVpbnQxNigyLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBsZXQgYmlnVGlmZjtcbiAgICAgICAgaWYgKG1hZ2ljTnVtYmVyID09PSA0Mikge1xuICAgICAgICAgICAgYmlnVGlmZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hZ2ljTnVtYmVyID09PSA0Mykge1xuICAgICAgICAgICAgYmlnVGlmZiA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRCeXRlU2l6ZSA9IGRhdGFWaWV3LmdldFVpbnQxNig0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgaWYgKG9mZnNldEJ5dGVTaXplICE9PSA4KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBvZmZzZXQgYnl0ZS1zaXplLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWdpYyBudW1iZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlyc3RJRkRPZmZzZXQgPSBiaWdUaWZmXG4gICAgICAgICAgICA/IGRhdGFWaWV3LmdldFVpbnQ2NCg4LCBsaXR0bGVFbmRpYW4pXG4gICAgICAgICAgICA6IGRhdGFWaWV3LmdldFVpbnQzMig0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICByZXR1cm4gbmV3IEdlb1RJRkYoc291cmNlLCBsaXR0bGVFbmRpYW4sIGJpZ1RpZmYsIGZpcnN0SUZET2Zmc2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSB1bmRlcmx5aW5nIGZpbGUgYnVmZmVyXG4gICAgICogTi5CLiBBZnRlciB0aGUgR2VvVElGRiBoYXMgYmVlbiBjb21wbGV0ZWx5IHByb2Nlc3NlZCBpdCBuZWVkc1xuICAgICAqIHRvIGJlIGNsb3NlZCBidXQgb25seSBpZiBpdCBoYXMgYmVlbiBjb25zdHJ1Y3RlZCBmcm9tIGEgZmlsZS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNvdXJjZS5jbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IEdlb1RJRkYgfTtcbmV4cG9ydCBkZWZhdWx0IEdlb1RJRkY7XG4vKipcbiAqIFdyYXBwZXIgZm9yIEdlb1RJRkYgZmlsZXMgdGhhdCBoYXZlIGV4dGVybmFsIG92ZXJ2aWV3cy5cbiAqIEBhdWdtZW50cyBHZW9USUZGQmFzZVxuICovXG5jbGFzcyBNdWx0aUdlb1RJRkYgZXh0ZW5kcyBHZW9USUZGQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IE11bHRpR2VvVElGRiBmcm9tIGEgbWFpbiBhbmQgc2V2ZXJhbCBvdmVydmlldyBmaWxlcy5cbiAgICAgKiBAcGFyYW0ge0dlb1RJRkZ9IG1haW5GaWxlIFRoZSBtYWluIEdlb1RJRkYgZmlsZS5cbiAgICAgKiBAcGFyYW0ge0dlb1RJRkZbXX0gb3ZlcnZpZXdGaWxlcyBBbiBhcnJheSBvZiBvdmVydmlldyBmaWxlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluRmlsZSwgb3ZlcnZpZXdGaWxlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1haW5GaWxlID0gbWFpbkZpbGU7XG4gICAgICAgIHRoaXMub3ZlcnZpZXdGaWxlcyA9IG92ZXJ2aWV3RmlsZXM7XG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IFttYWluRmlsZV0uY29uY2F0KG92ZXJ2aWV3RmlsZXMpO1xuICAgICAgICB0aGlzLmZpbGVEaXJlY3Rvcmllc1BlckZpbGUgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGVEaXJlY3Rvcmllc1BlckZpbGVQYXJzaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgcGFyc2VGaWxlRGlyZWN0b3JpZXNQZXJGaWxlKCkge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFt0aGlzLm1haW5GaWxlLnBhcnNlci5wYXJzZUZpbGVEaXJlY3RvcnlBdCh0aGlzLm1haW5GaWxlLmZpcnN0SUZET2Zmc2V0KV1cbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5vdmVydmlld0ZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5wYXJzZXIucGFyc2VGaWxlRGlyZWN0b3J5QXQoZmlsZS5maXJzdElGRE9mZnNldCkpKTtcbiAgICAgICAgdGhpcy5maWxlRGlyZWN0b3JpZXNQZXJGaWxlID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3JpZXNQZXJGaWxlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG4tdGggaW50ZXJuYWwgc3ViZmlsZSBvZiBhbiBpbWFnZS4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD0wXSB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHRvIHJldHVybi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGSW1hZ2U+fSB0aGUgaW1hZ2UgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1hZ2UoaW5kZXggPSAwKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhpcy5pbWFnZUNvdW50cyBpZiBub3QgeWV0IGRvbmVcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRJbWFnZUNvdW50KCk7XG4gICAgICAgIGlmICghdGhpcy5pbWFnZUNvdW50cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbWFnZSBjb3VudHMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMucGFyc2VGaWxlRGlyZWN0b3JpZXNQZXJGaWxlKCk7XG4gICAgICAgIGxldCB2aXNpdGVkID0gMDtcbiAgICAgICAgbGV0IHJlbGF0aXZlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlID0gdGhpcy5pbWFnZUZpbGVzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHRoaXMuaW1hZ2VDb3VudHNbaV07IGlpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHZW9USUZGSW1hZ2UoYXdhaXQgaW1hZ2VGaWxlLnJlcXVlc3RJRkQocmVsYXRpdmVJbmRleCksIGltYWdlRmlsZS5saXR0bGVFbmRpYW4sIGltYWdlRmlsZS5jYWNoZSwgaW1hZ2VGaWxlLnNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZpc2l0ZWQrKztcbiAgICAgICAgICAgICAgICByZWxhdGl2ZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbWFnZSBpbmRleCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb3VudCBvZiB0aGUgaW50ZXJuYWwgc3ViZmlsZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSB0aGUgbnVtYmVyIG9mIGludGVybmFsIHN1YmZpbGUgaW1hZ2VzXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SW1hZ2VDb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VDb3VudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VDb3VudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFt0aGlzLm1haW5GaWxlLmdldEltYWdlQ291bnQoKV1cbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5vdmVydmlld0ZpbGVzLm1hcCgoZmlsZSkgPT4gZmlsZS5nZXRJbWFnZUNvdW50KCkpKTtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50cyA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcbiAgICAgICAgdGhpcy5pbWFnZUNvdW50ID0gdGhpcy5pbWFnZUNvdW50cy5yZWR1Y2UoKGNvdW50LCBpZmRzKSA9PiBjb3VudCArIGlmZHMsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUNvdW50O1xuICAgIH1cbn1cbmV4cG9ydCB7IE11bHRpR2VvVElGRiB9O1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEdlb1RJRkYgZnJvbSBhIHJlbW90ZSBVUkwuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYWNjZXNzIHRoZSBpbWFnZSBmcm9tXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnN9IFtvcHRpb25zXSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc291cmNlLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBTZWUge0BsaW5rIG1ha2VSZW1vdGVTb3VyY2V9IGZvciBkZXRhaWxzLlxuICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGPn0gVGhlIHJlc3VsdGluZyBHZW9USUZGIGZpbGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmcm9tVXJsKHVybCwgb3B0aW9ucyA9IHt9LCBzaWduYWwpIHtcbiAgICByZXR1cm4gR2VvVElGRi5mcm9tU291cmNlKG1ha2VSZW1vdGVTb3VyY2UodXJsLCBvcHRpb25zKSwgdW5kZWZpbmVkLCBzaWduYWwpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEdlb1RJRkYgZnJvbSBhIGN1c3RvbSB7QGxpbmsgQmFzZUNsaWVudH0uXG4gKiBAcGFyYW0ge0Jhc2VDbGllbnR9IGNsaWVudCBUaGUgY2xpZW50LlxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zfSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHNvdXJjZS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIHtAbGluayBtYWtlUmVtb3RlU291cmNlfSBmb3IgZGV0YWlscy5cbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRj59IFRoZSByZXN1bHRpbmcgR2VvVElGRiBmaWxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZnJvbUN1c3RvbUNsaWVudChjbGllbnQsIG9wdGlvbnMgPSB7fSwgc2lnbmFsKSB7XG4gICAgcmV0dXJuIEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlQ3VzdG9tU291cmNlKGNsaWVudCwgb3B0aW9ucyksIHVuZGVmaW5lZCwgc2lnbmFsKTtcbn1cbi8qKlxuICogQ29uc3RydWN0IGEgbmV3IEdlb1RJRkYgZnJvbSBhblxuICogW0FycmF5QnVmZmVyXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheUJ1ZmZlcn0uXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgZGF0YSB0byByZWFkIHRoZSBmaWxlIGZyb20uXG4gKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXSBBbiBBYm9ydFNpZ25hbCB0aGF0IG1heSBiZSBzaWduYWxsZWQgaWYgdGhlIHJlcXVlc3QgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEdlb1RJRkY+fSBUaGUgcmVzdWx0aW5nIEdlb1RJRkYgZmlsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlcihhcnJheUJ1ZmZlciwgc2lnbmFsKSB7XG4gICAgcmV0dXJuIEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlQnVmZmVyU291cmNlKGFycmF5QnVmZmVyKSwgdW5kZWZpbmVkLCBzaWduYWwpO1xufVxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBHZW9USUZGIGZyb20gYSBsb2NhbCBmaWxlIHBhdGguIFRoaXMgdXNlcyB0aGUgbm9kZVxuICogW2ZpbGVzeXN0ZW0gQVBJXXtAbGluayBodHRwczovL25vZGVqcy5vcmcvYXBpL2ZzLmh0bWx9IGFuZCBpc1xuICogbm90IGF2YWlsYWJsZSBvbiBicm93c2Vycy5cbiAqXG4gKiBOLkIuIEFmdGVyIHRoZSBHZW9USUZGIGhhcyBiZWVuIGNvbXBsZXRlbHkgcHJvY2Vzc2VkIGl0IG5lZWRzXG4gKiB0byBiZSBjbG9zZWQgYnV0IG9ubHkgaWYgaXQgaGFzIGJlZW4gY29uc3RydWN0ZWQgZnJvbSBhIGZpbGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgZmlsZSBwYXRoIHRvIHJlYWQgZnJvbS5cbiAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICogQHJldHVybnMge1Byb21pc2U8R2VvVElGRj59IFRoZSByZXN1bHRpbmcgR2VvVElGRiBmaWxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZnJvbUZpbGUocGF0aCwgc2lnbmFsKSB7XG4gICAgcmV0dXJuIEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlRmlsZVNvdXJjZShwYXRoKSwgdW5kZWZpbmVkLCBzaWduYWwpO1xufVxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBHZW9USUZGIGZyb20gYW4gSFRNTFxuICogW0Jsb2Jde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9CbG9ifSBvclxuICogW0ZpbGVde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlfVxuICogb2JqZWN0LlxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGJsb2IgVGhlIEJsb2Igb3IgRmlsZSBvYmplY3QgdG8gcmVhZCBmcm9tLlxuICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9USUZGPn0gVGhlIHJlc3VsdGluZyBHZW9USUZGIGZpbGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmcm9tQmxvYihibG9iLCBzaWduYWwpIHtcbiAgICByZXR1cm4gR2VvVElGRi5mcm9tU291cmNlKG1ha2VGaWxlUmVhZGVyU291cmNlKGJsb2IpLCB1bmRlZmluZWQsIHNpZ25hbCk7XG59XG4vKipcbiAqIENvbnN0cnVjdCBhIE11bHRpR2VvVElGRiBmcm9tIHRoZSBnaXZlbiBVUkxzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1haW5VcmwgVGhlIFVSTCBmb3IgdGhlIG1haW4gZmlsZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IG92ZXJ2aWV3VXJscyBBbiBhcnJheSBvZiBVUkxzIGZvciB0aGUgb3ZlcnZpZXcgaW1hZ2VzLlxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zfSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHNvdXJjZS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VlIFttYWtlUmVtb3RlU291cmNlXXtAbGluayBtb2R1bGU6c291cmNlLm1ha2VSZW1vdGVTb3VyY2V9XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBkZXRhaWxzLlxuICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBhYm9ydGVkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxNdWx0aUdlb1RJRkY+fSBUaGUgcmVzdWx0aW5nIE11bHRpR2VvVElGRiBmaWxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZnJvbVVybHMobWFpblVybCwgb3ZlcnZpZXdVcmxzID0gW10sIG9wdGlvbnMgPSB7fSwgc2lnbmFsKSB7XG4gICAgY29uc3QgbWFpbkZpbGUgPSBhd2FpdCBHZW9USUZGLmZyb21Tb3VyY2UobWFrZVJlbW90ZVNvdXJjZShtYWluVXJsLCBvcHRpb25zKSwgdW5kZWZpbmVkLCBzaWduYWwpO1xuICAgIGNvbnN0IG92ZXJ2aWV3RmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChvdmVydmlld1VybHMubWFwKCh1cmwpID0+IEdlb1RJRkYuZnJvbVNvdXJjZShtYWtlUmVtb3RlU291cmNlKHVybCwgb3B0aW9ucyksIHVuZGVmaW5lZCwgc2lnbmFsKSkpO1xuICAgIHJldHVybiBuZXcgTXVsdGlHZW9USUZGKG1haW5GaWxlLCBvdmVydmlld0ZpbGVzKTtcbn1cbi8qKlxuICogTWFpbiBjcmVhdGluZyBmdW5jdGlvbiBmb3IgR2VvVElGRiBmaWxlcy5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPnxBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj58VHlwZWRBcnJheX0gdmFsdWVzIFRoZSBwaXhlbCB2YWx1ZXMgdG8gd3JpdGUuXG4gKiBDYW4gYmUgYSBmbGF0IGFycmF5IG9mIGFsbCBwaXhlbHMgb3IgYSAzLWRpbWVuc2lvbmFsIGFycmF5IG9mIHNoYXBlIGBbYmFuZF1bcm93XVtjb2x1bW5dYC5cbiAqIEBwYXJhbSB7R2VvdGlmZldyaXRlck1ldGFkYXRhfSBtZXRhZGF0YVxuICogQHJldHVybnMge0FycmF5QnVmZmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVBcnJheUJ1ZmZlcih2YWx1ZXMsIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHdyaXRlR2VvdGlmZih2YWx1ZXMsIG1ldGFkYXRhKTtcbn1cbmV4cG9ydCB7IFBvb2wgfTtcbmV4cG9ydCB7IEdlb1RJRkZJbWFnZSB9O1xuZXhwb3J0IHsgQmFzZUNsaWVudCwgQmFzZVJlc3BvbnNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW90aWZmLmpzLm1hcCIsIi8qKiBAbW9kdWxlIGdlb3RpZmZpbWFnZSAqL1xuaW1wb3J0IHsgZ2V0RmxvYXQxNiB9IGZyb20gJ0BwZXRhbW9yaWtlbi9mbG9hdDE2Jztcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmltcG9ydCBnZXRBdHRyaWJ1dGUgZnJvbSAneG1sLXV0aWxzL2dldC1hdHRyaWJ1dGUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9leHRlbnNpb25zXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5pbXBvcnQgZmluZFRhZ3NCeU5hbWUgZnJvbSAneG1sLXV0aWxzL2ZpbmQtdGFncy1ieS1uYW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IHsgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMsIEV4dHJhU2FtcGxlc1ZhbHVlcyB9IGZyb20gJy4vZ2xvYmFscy5qcyc7XG5pbXBvcnQgeyBmcm9tV2hpdGVJc1plcm8sIGZyb21CbGFja0lzWmVybywgZnJvbVBhbGV0dGUsIGZyb21DTVlLLCBmcm9tWUNiQ3IsIGZyb21DSUVMYWIgfSBmcm9tICcuL3JnYi5qcyc7XG5pbXBvcnQgeyBnZXREZWNvZGVyLCBnZXREZWNvZGVyUGFyYW1ldGVycyB9IGZyb20gJy4vY29tcHJlc3Npb24vaW5kZXguanMnO1xuaW1wb3J0IHsgcmVzYW1wbGUsIHJlc2FtcGxlSW50ZXJsZWF2ZWQgfSBmcm9tICcuL3Jlc2FtcGxlLmpzJztcbi8qKiBAaW1wb3J0IHtEZWNvZGVyV29ya2VyLCBUeXBlZEFycmF5fSBmcm9tIFwiLi9nZW90aWZmLmpzXCIgKi9cbi8qKiBAaW1wb3J0IHtSZWFkUmFzdGVyUmVzdWx0fSBmcm9tIFwiLi9nZW90aWZmLmpzXCIgKi9cbi8qKiBAaW1wb3J0IHtSZWFkUmFzdGVyc09wdGlvbnN9IGZyb20gXCIuL2dlb3RpZmYuanNcIiAqL1xuLyoqIEBpbXBvcnQge1JlYWRSR0JPcHRpb25zfSBmcm9tIFwiLi9nZW90aWZmLmpzXCIgKi9cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fFR5cGVkQXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHN1bShhcnJheSwgc3RhcnQsIGVuZCkge1xuICAgIGxldCBzID0gMDtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICBzICs9IGFycmF5W2ldO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cbi8qKlxuICogQHBhcmFtIHsxfDJ8M30gZm9ybWF0XG4gKiBAcGFyYW0ge251bWJlcn0gYml0c1BlclNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ8QXJyYXlCdWZmZXJMaWtlfSBzaXplT3JEYXRhXG4gKiBAcmV0dXJucyB7VHlwZWRBcnJheX1cbiAqL1xuZnVuY3Rpb24gYXJyYXlGb3JUeXBlKGZvcm1hdCwgYml0c1BlclNhbXBsZSwgc2l6ZU9yRGF0YSkge1xuICAgIGxldCBUeXBlZEFycmF5Q29uc3RydWN0b3I7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgY2FzZSAxOiAvLyB1bnNpZ25lZCBpbnRlZ2VyIGRhdGFcbiAgICAgICAgICAgIGlmIChiaXRzUGVyU2FtcGxlIDw9IDgpIHtcbiAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBVaW50OEFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA8PSAxNikge1xuICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IFVpbnQxNkFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA8PSAzMikge1xuICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IFVpbnQzMkFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogLy8gdHdvcyBjb21wbGVtZW50IHNpZ25lZCBpbnRlZ2VyIGRhdGFcbiAgICAgICAgICAgIGlmIChiaXRzUGVyU2FtcGxlID09PSA4KSB7XG4gICAgICAgICAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gSW50OEFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA9PT0gMTYpIHtcbiAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBJbnQxNkFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBJbnQzMkFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogLy8gZmxvYXRpbmcgcG9pbnQgZGF0YVxuICAgICAgICAgICAgc3dpdGNoIChiaXRzUGVyU2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBGbG9hdDMyQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgICAgIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IEZsb2F0NjRBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoVHlwZWRBcnJheUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZU9yRGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWRBcnJheUNvbnN0cnVjdG9yKHNpemVPckRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemVPckRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlZEFycmF5Q29uc3RydWN0b3Ioc2l6ZU9yRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgRXJyb3IoJ1Vuc3VwcG9ydGVkIGRhdGEgZm9ybWF0L2JpdHNQZXJTYW1wbGUnKTtcbn1cbi8qKlxuICogQHBhcmFtIHsxfDJ8M30gZm9ybWF0XG4gKiBAcGFyYW0ge251bWJlcn0gYml0c1BlclNhbXBsZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5lZWRzTm9ybWFsaXphdGlvbihmb3JtYXQsIGJpdHNQZXJTYW1wbGUpIHtcbiAgICBpZiAoKGZvcm1hdCA9PT0gMSB8fCBmb3JtYXQgPT09IDIpICYmIGJpdHNQZXJTYW1wbGUgPD0gMzIgJiYgYml0c1BlclNhbXBsZSAlIDggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IDMgJiYgKGJpdHNQZXJTYW1wbGUgPT09IDE2IHx8IGJpdHNQZXJTYW1wbGUgPT09IDMyIHx8IGJpdHNQZXJTYW1wbGUgPT09IDY0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyTGlrZX0gaW5CdWZmZXJcbiAqIEBwYXJhbSB7MXwyfDN9IGZvcm1hdFxuICogQHBhcmFtIHsxfDJ9IHBsYW5hckNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBzYW1wbGVzUGVyUGl4ZWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRzUGVyU2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gdGlsZVdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gdGlsZUhlaWdodFxuICogQHJldHVybnMge0FycmF5QnVmZmVyTGlrZX1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkoaW5CdWZmZXIsIGZvcm1hdCwgcGxhbmFyQ29uZmlndXJhdGlvbiwgc2FtcGxlc1BlclBpeGVsLCBiaXRzUGVyU2FtcGxlLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpIHtcbiAgICAvLyBjb25zdCBpbkJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGluQnVmZmVyKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGluQnVmZmVyKTtcbiAgICBjb25zdCBvdXRTaXplID0gcGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMlxuICAgICAgICA/IHRpbGVIZWlnaHQgKiB0aWxlV2lkdGhcbiAgICAgICAgOiB0aWxlSGVpZ2h0ICogdGlsZVdpZHRoICogc2FtcGxlc1BlclBpeGVsO1xuICAgIGNvbnN0IHNhbXBsZXNUb1RyYW5zZmVyID0gcGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMlxuICAgICAgICA/IDEgOiBzYW1wbGVzUGVyUGl4ZWw7XG4gICAgY29uc3Qgb3V0QXJyYXkgPSBhcnJheUZvclR5cGUoZm9ybWF0LCBiaXRzUGVyU2FtcGxlLCBvdXRTaXplKTtcbiAgICAvLyBsZXQgcGl4ZWwgPSAwO1xuICAgIGNvbnN0IGJpdE1hc2sgPSBwYXJzZUludCgnMScucmVwZWF0KGJpdHNQZXJTYW1wbGUpLCAyKTtcbiAgICBpZiAoZm9ybWF0ID09PSAxKSB7IC8vIHVuc2lnbmVkIGludGVnZXJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL09TR2VvL2dkYWwvYmxvYi9tYXN0ZXIvZ2RhbC9mcm10cy9ndGlmZi9nZW90aWZmLmNwcCNMNzMzN1xuICAgICAgICBsZXQgcGl4ZWxCaXRTa2lwO1xuICAgICAgICAvLyBsZXQgc2FtcGxlQml0T2Zmc2V0ID0gMDtcbiAgICAgICAgaWYgKHBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgIHBpeGVsQml0U2tpcCA9IHNhbXBsZXNQZXJQaXhlbCAqIGJpdHNQZXJTYW1wbGU7XG4gICAgICAgICAgICAvLyBzYW1wbGVCaXRPZmZzZXQgPSAoc2FtcGxlc1BlclBpeGVsIC0gMSkgKiBiaXRzUGVyU2FtcGxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGl4ZWxCaXRTa2lwID0gYml0c1BlclNhbXBsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCaXRzIHBlciBsaW5lIHJvdW5kcyB1cCB0byBuZXh0IGJ5dGUgYm91bmRhcnkuXG4gICAgICAgIGxldCBiaXRzUGVyTGluZSA9IHRpbGVXaWR0aCAqIHBpeGVsQml0U2tpcDtcbiAgICAgICAgaWYgKChiaXRzUGVyTGluZSAmIDcpICE9PSAwKSB7XG4gICAgICAgICAgICBiaXRzUGVyTGluZSA9IChiaXRzUGVyTGluZSArIDcpICYgKH43KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRpbGVIZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgY29uc3QgbGluZUJpdE9mZnNldCA9IHkgKiBiaXRzUGVyTGluZTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGlsZVdpZHRoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXhlbEJpdE9mZnNldCA9IGxpbmVCaXRPZmZzZXQgKyAoeCAqIHNhbXBsZXNUb1RyYW5zZmVyICogYml0c1BlclNhbXBsZSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzVG9UcmFuc2ZlcjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpdE9mZnNldCA9IHBpeGVsQml0T2Zmc2V0ICsgKGkgKiBiaXRzUGVyU2FtcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0SW5kZXggPSAoKCh5ICogdGlsZVdpZHRoKSArIHgpICogc2FtcGxlc1RvVHJhbnNmZXIpICsgaTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IE1hdGguZmxvb3IoYml0T2Zmc2V0IC8gOCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyQml0T2Zmc2V0ID0gYml0T2Zmc2V0ICUgODtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyQml0T2Zmc2V0ICsgYml0c1BlclNhbXBsZSA8PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRBcnJheVtvdXRJbmRleF0gPSAodmlldy5nZXRVaW50OChieXRlT2Zmc2V0KSA+PiAoOCAtIGJpdHNQZXJTYW1wbGUpIC0gaW5uZXJCaXRPZmZzZXQpICYgYml0TWFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbm5lckJpdE9mZnNldCArIGJpdHNQZXJTYW1wbGUgPD0gMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEFycmF5W291dEluZGV4XSA9ICh2aWV3LmdldFVpbnQxNihieXRlT2Zmc2V0KSA+PiAoMTYgLSBiaXRzUGVyU2FtcGxlKSAtIGlubmVyQml0T2Zmc2V0KSAmIGJpdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5uZXJCaXRPZmZzZXQgKyBiaXRzUGVyU2FtcGxlIDw9IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSAodmlldy5nZXRVaW50MTYoYnl0ZU9mZnNldCkgPDwgOCkgfCAodmlldy5nZXRVaW50OChieXRlT2Zmc2V0ICsgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0QXJyYXlbb3V0SW5kZXhdID0gKHJhdyA+PiAoMjQgLSBiaXRzUGVyU2FtcGxlKSAtIGlubmVyQml0T2Zmc2V0KSAmIGJpdE1hc2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRBcnJheVtvdXRJbmRleF0gPSAodmlldy5nZXRVaW50MzIoYnl0ZU9mZnNldCkgPj4gKDMyIC0gYml0c1BlclNhbXBsZSkgLSBpbm5lckJpdE9mZnNldCkgJiBiaXRNYXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvdXRXb3JkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgYml0ID0gMDsgYml0IDwgYml0c1BlclNhbXBsZTsgKytiaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAoaW5CeXRlQXJyYXlbYml0T2Zmc2V0ID4+IDNdXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAmICgweDgwID4+IChiaXRPZmZzZXQgJiA3KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG91dFdvcmQgfD0gKDEgPDwgKGJpdHNQZXJTYW1wbGUgLSAxIC0gYml0KSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICsrYml0T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG91dEFycmF5W291dEluZGV4XSA9IG91dFdvcmQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIG91dEFycmF5W3BpeGVsXSA9IG91dFdvcmQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGJpdE9mZnNldCA9IGJpdE9mZnNldCArIHBpeGVsQml0U2tpcCAtIGJpdHNQZXJTYW1wbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSAzKSB7IC8vIGZsb2F0aW5nIHBvaW50XG4gICAgICAgIC8vIEZsb2F0MTYgaXMgaGFuZGxlZCBlbHNld2hlcmVcbiAgICAgICAgLy8gbm9ybWFsaXplIDE2LzI0IGJpdCBmbG9hdHMgdG8gMzIgYml0IGZsb2F0cyBpbiB0aGUgYXJyYXlcbiAgICAgICAgLy8gY29uc29sZS50aW1lKCk7XG4gICAgICAgIC8vIGlmIChiaXRzUGVyU2FtcGxlID09PSAxNikge1xuICAgICAgICAvLyAgIGZvciAobGV0IGJ5dGUgPSAwLCBvdXRJbmRleCA9IDA7IGJ5dGUgPCBpbkJ1ZmZlci5ieXRlTGVuZ3RoOyBieXRlICs9IDIsICsrb3V0SW5kZXgpIHtcbiAgICAgICAgLy8gICAgIG91dEFycmF5W291dEluZGV4XSA9IGdldEZsb2F0MTYodmlldywgYnl0ZSk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUudGltZUVuZCgpXG4gICAgfVxuICAgIHJldHVybiBvdXRBcnJheS5idWZmZXI7XG59XG4vKipcbiAqIEdlb1RJRkYgc3ViLWZpbGUgaW1hZ2UuXG4gKi9cbmNsYXNzIEdlb1RJRkZJbWFnZSB7XG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuL2ltYWdlZmlsZWRpcmVjdG9yeS5qc1wiKS5JbWFnZUZpbGVEaXJlY3Rvcnl9IGZpbGVEaXJlY3RvcnkgVGhlIHBhcnNlZCBmaWxlIGRpcmVjdG9yeVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gbGl0dGxlRW5kaWFuIFdoZXRoZXIgdGhlIGZpbGUgaXMgZW5jb2RlZCBpbiBsaXR0bGUgb3IgYmlnIGVuZGlhblxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FjaGUgV2hldGhlciBvciBub3QgZGVjb2RlZCB0aWxlcyBzaGFsbCBiZSBjYWNoZWRcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9zb3VyY2UvYmFzZXNvdXJjZS5qcycpLkJhc2VTb3VyY2V9IHNvdXJjZSBUaGUgZGF0YXNvdXJjZSB0byByZWFkIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihmaWxlRGlyZWN0b3J5LCBsaXR0bGVFbmRpYW4sIGNhY2hlLCBzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5maWxlRGlyZWN0b3J5ID0gZmlsZURpcmVjdG9yeTtcbiAgICAgICAgdGhpcy5saXR0bGVFbmRpYW4gPSBsaXR0bGVFbmRpYW47XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8UHJvbWlzZTxBcnJheUJ1ZmZlckxpa2U+PnxudWxsfSAqL1xuICAgICAgICB0aGlzLnRpbGVzID0gY2FjaGUgPyBbXSA6IG51bGw7XG4gICAgICAgIHRoaXMuaXNUaWxlZCA9ICFmaWxlRGlyZWN0b3J5Lmhhc1RhZygnU3RyaXBPZmZzZXRzJyk7XG4gICAgICAgIGNvbnN0IHBsYW5hckNvbmZpZ3VyYXRpb24gPSBmaWxlRGlyZWN0b3J5LmdldFZhbHVlKCdQbGFuYXJDb25maWd1cmF0aW9uJykgPz8gMTtcbiAgICAgICAgaWYgKHBsYW5hckNvbmZpZ3VyYXRpb24gIT09IDEgJiYgcGxhbmFyQ29uZmlndXJhdGlvbiAhPT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBsYW5hciBjb25maWd1cmF0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBAdHlwZSB7MSB8IDJ9ICovXG4gICAgICAgIHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9IHBsYW5hckNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIHBhcnNlZCBmaWxlIGRpcmVjdG9yeS5cbiAgICAgKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9pbWFnZWZpbGVkaXJlY3RvcnkuanNcIikuSW1hZ2VGaWxlRGlyZWN0b3J5fSB0aGUgcGFyc2VkIGZpbGUgZGlyZWN0b3J5XG4gICAgICovXG4gICAgZ2V0RmlsZURpcmVjdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXNzb2NpYXRlZCBwYXJzZWQgZ2VvIGtleXMuXG4gICAgICogQHJldHVybnMge1BhcnRpYWw8UmVjb3JkPGltcG9ydCgnLi9nbG9iYWxzLmpzJykuR2VvS2V5TmFtZSwgKj4+fG51bGx9IHRoZSBwYXJzZWQgZ2VvIGtleXNcbiAgICAgKi9cbiAgICBnZXRHZW9LZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3J5LnBhcnNlR2VvS2V5RGlyZWN0b3J5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSBpbWFnZS5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgd2lkdGggb2YgdGhlIGltYWdlXG4gICAgICovXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0ltYWdlV2lkdGgnKSB8fCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlXG4gICAgICovXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdJbWFnZUxlbmd0aCcpIHx8IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNhbXBsZXMgcGVyIHBpeGVsXG4gICAgICovXG4gICAgZ2V0U2FtcGxlc1BlclBpeGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdTYW1wbGVzUGVyUGl4ZWwnKSA/PyAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiBlYWNoIHRpbGUuXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIHdpZHRoIG9mIGVhY2ggdGlsZVxuICAgICAqL1xuICAgIGdldFRpbGVXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUaWxlZCA/ICh0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1RpbGVXaWR0aCcpIHx8IDApIDogdGhpcy5nZXRXaWR0aCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgZWFjaCB0aWxlLlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBoZWlnaHQgb2YgZWFjaCB0aWxlXG4gICAgICovXG4gICAgZ2V0VGlsZUhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUaWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnVGlsZUxlbmd0aCcpIHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93c1BlclN0cmlwID0gdGhpcy5maWxlRGlyZWN0b3J5Lmhhc1RhZygnUm93c1BlclN0cmlwJykgJiYgdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdSb3dzUGVyU3RyaXAnKTtcbiAgICAgICAgaWYgKHJvd3NQZXJTdHJpcCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHJvd3NQZXJTdHJpcCwgdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgfVxuICAgIGdldEJsb2NrV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRpbGVXaWR0aCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0QmxvY2tIZWlnaHQoeSkge1xuICAgICAgICBpZiAodGhpcy5pc1RpbGVkIHx8ICh5ICsgMSkgKiB0aGlzLmdldFRpbGVIZWlnaHQoKSA8PSB0aGlzLmdldEhlaWdodCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaWxlSGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoKSAtICh5ICogdGhpcy5nZXRUaWxlSGVpZ2h0KCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBieXRlcyBmb3IgZWFjaCBwaXhlbCBhY3Jvc3MgYWxsIHNhbXBsZXMuIE9ubHkgZnVsbFxuICAgICAqIGJ5dGVzIGFyZSBzdXBwb3J0ZWQsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gd2hlbiB0aGlzIGlzIG5vdCB0aGUgY2FzZS5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgYnl0ZXMgcGVyIHBpeGVsXG4gICAgICovXG4gICAgZ2V0Qnl0ZXNQZXJQaXhlbCgpIHtcbiAgICAgICAgbGV0IGJ5dGVzID0gMDtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHNob3J0IGxpc3QsIHNvIHdlIGFzc3VtZSB0aGlzIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0JpdHNQZXJTYW1wbGUnKSB8fCBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaXRzUGVyU2FtcGxlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBieXRlcyArPSB0aGlzLmdldFNhbXBsZUJ5dGVTaXplKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFNhbXBsZUJ5dGVTaXplKGkpIHtcbiAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQml0c1BlclNhbXBsZScpIHx8IFtdO1xuICAgICAgICBpZiAoaSA+PSBiaXRzUGVyU2FtcGxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFNhbXBsZSBpbmRleCAke2l9IGlzIG91dCBvZiByYW5nZS5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKGJpdHNQZXJTYW1wbGVbaV0gLyA4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNhbXBsZUluZGV4XG4gICAgICogQHJldHVybnMgeyh0aGlzOiBEYXRhVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCBsaXR0bGVFbmRpYW46IGJvb2xlYW4pID0+IG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRSZWFkZXJGb3JTYW1wbGUoc2FtcGxlSW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2FtcGxlRm9ybWF0ID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdTYW1wbGVGb3JtYXQnKTtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2FtcGxlRm9ybWF0XG4gICAgICAgICAgICA/IHNhbXBsZUZvcm1hdFtzYW1wbGVJbmRleF0gOiAxO1xuICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gKHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQml0c1BlclNhbXBsZScpIHx8IFtdKVtzYW1wbGVJbmRleF07XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIHVuc2lnbmVkIGludGVnZXIgZGF0YVxuICAgICAgICAgICAgICAgIGlmIChiaXRzUGVyU2FtcGxlIDw9IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRVaW50ODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA8PSAxNikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldFVpbnQxNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA8PSAzMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldFVpbnQzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IC8vIHR3b3MgY29tcGxlbWVudCBzaWduZWQgaW50ZWdlciBkYXRhXG4gICAgICAgICAgICAgICAgaWYgKGJpdHNQZXJTYW1wbGUgPD0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldEludDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQZXJTYW1wbGUgPD0gMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRJbnQxNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYml0c1BlclNhbXBsZSA8PSAzMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YVZpZXcucHJvdG90eXBlLmdldEludDMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGJpdHNQZXJTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RmxvYXQxNih0aGlzLCBvZmZzZXQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRGbG9hdDMyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGFWaWV3LnByb3RvdHlwZS5nZXRGbG9hdDY0O1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBFcnJvcignVW5zdXBwb3J0ZWQgZGF0YSBmb3JtYXQvYml0c1BlclNhbXBsZScpO1xuICAgIH1cbiAgICBnZXRTYW1wbGVGb3JtYXQoc2FtcGxlSW5kZXggPSAwKSB7XG4gICAgICAgIGNvbnN0IHNhbXBsZUZvcm1hdCA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnU2FtcGxlRm9ybWF0Jyk7XG4gICAgICAgIHJldHVybiBzYW1wbGVGb3JtYXQgPyBzYW1wbGVGb3JtYXRbc2FtcGxlSW5kZXhdIDogMTtcbiAgICB9XG4gICAgZ2V0Qml0c1BlclNhbXBsZShzYW1wbGVJbmRleCA9IDApIHtcbiAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQml0c1BlclNhbXBsZScpO1xuICAgICAgICByZXR1cm4gYml0c1BlclNhbXBsZSA/IGJpdHNQZXJTYW1wbGVbc2FtcGxlSW5kZXhdIDogMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNhbXBsZUluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ8QXJyYXlCdWZmZXJMaWtlfSBzaXplT3JEYXRhXG4gICAgICogQHJldHVybnMge1R5cGVkQXJyYXl9XG4gICAgICovXG4gICAgZ2V0QXJyYXlGb3JTYW1wbGUoc2FtcGxlSW5kZXgsIHNpemVPckRhdGEpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gLyoqIEB0eXBlIHsxfDJ8M30gKi8gKHRoaXMuZ2V0U2FtcGxlRm9ybWF0KHNhbXBsZUluZGV4KSk7XG4gICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSB0aGlzLmdldEJpdHNQZXJTYW1wbGUoc2FtcGxlSW5kZXgpO1xuICAgICAgICByZXR1cm4gYXJyYXlGb3JUeXBlKGZvcm1hdCwgYml0c1BlclNhbXBsZSwgc2l6ZU9yRGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlY29kZWQgc3RyaXAgb3IgdGlsZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCB0aGUgc3RyaXAgb3IgdGlsZSB4LW9mZnNldFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IHRoZSB0aWxlIHktb2Zmc2V0ICgwIGZvciBzdHJpcHBlZCBpbWFnZXMpXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNhbXBsZSB0aGUgc2FtcGxlIHRvIGdldCBmb3Igc2VwYXJhdGVkIHNhbXBsZXNcbiAgICAgKiBAcGFyYW0ge0RlY29kZXJXb3JrZXJ8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLkJhc2VEZWNvZGVyfSBwb29sT3JEZWNvZGVyIHRoZSBkZWNvZGVyIG9yIGRlY29kZXIgcG9vbFxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdIEFuIEFib3J0U2lnbmFsIHRoYXQgbWF5IGJlIHNpZ25hbGxlZCBpZiB0aGUgcmVxdWVzdCBpc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGJlIGFib3J0ZWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48e3g6IG51bWJlciwgeTogbnVtYmVyLCBzYW1wbGU6IG51bWJlciwgZGF0YTogQXJyYXlCdWZmZXJMaWtlfT59IHRoZSBkZWNvZGVkIHN0cmlwIG9yIHRpbGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRUaWxlT3JTdHJpcCh4LCB5LCBzYW1wbGUsIHBvb2xPckRlY29kZXIsIHNpZ25hbCkge1xuICAgICAgICBjb25zdCBudW1UaWxlc1BlclJvdyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyB0aGlzLmdldFRpbGVXaWR0aCgpKTtcbiAgICAgICAgY29uc3QgbnVtVGlsZXNQZXJDb2wgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIHRoaXMuZ2V0VGlsZUhlaWdodCgpKTtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBjb25zdCB7IHRpbGVzIH0gPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICBpbmRleCA9ICh5ICogbnVtVGlsZXNQZXJSb3cpICsgeDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDIpIHtcbiAgICAgICAgICAgIGluZGV4ID0gKHNhbXBsZSAqIG51bVRpbGVzUGVyUm93ICogbnVtVGlsZXNQZXJDb2wpICsgKHkgKiBudW1UaWxlc1BlclJvdykgKyB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgdGlsZSBvciBzdHJpcCBpbmRleC4nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICBsZXQgYnl0ZUNvdW50O1xuICAgICAgICBpZiAodGhpcy5pc1RpbGVkKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBOdW1iZXIoYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZUluZGV4ZWQoJ1RpbGVPZmZzZXRzJywgaW5kZXgpKTtcbiAgICAgICAgICAgIGJ5dGVDb3VudCA9IE51bWJlcihhd2FpdCB0aGlzLmZpbGVEaXJlY3RvcnkubG9hZFZhbHVlSW5kZXhlZCgnVGlsZUJ5dGVDb3VudHMnLCBpbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ID0gTnVtYmVyKGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWVJbmRleGVkKCdTdHJpcE9mZnNldHMnLCBpbmRleCkpO1xuICAgICAgICAgICAgYnl0ZUNvdW50ID0gTnVtYmVyKGF3YWl0IHRoaXMuZmlsZURpcmVjdG9yeS5sb2FkVmFsdWVJbmRleGVkKCdTdHJpcEJ5dGVDb3VudHMnLCBpbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChieXRlQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5QaXhlbHMgPSB0aGlzLmdldEJsb2NrSGVpZ2h0KHkpICogdGhpcy5nZXRUaWxlV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzUGVyUGl4ZWwgPSAodGhpcy5wbGFuYXJDb25maWd1cmF0aW9uID09PSAyKSA/IHRoaXMuZ2V0U2FtcGxlQnl0ZVNpemUoc2FtcGxlKSA6IHRoaXMuZ2V0Qnl0ZXNQZXJQaXhlbCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBBcnJheUJ1ZmZlcihuUGl4ZWxzICogYnl0ZXNQZXJQaXhlbCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRBcnJheUZvclNhbXBsZShzYW1wbGUsIGRhdGEpO1xuICAgICAgICAgICAgdmlldy5maWxsKHRoaXMuZ2V0R0RBTE5vRGF0YSgpIHx8IDApO1xuICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSwgc2FtcGxlLCBkYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2xpY2UgPSAoYXdhaXQgdGhpcy5zb3VyY2UuZmV0Y2goW3sgb2Zmc2V0LCBsZW5ndGg6IGJ5dGVDb3VudCB9XSwgc2lnbmFsKSlbMF07XG4gICAgICAgIGxldCByZXF1ZXN0O1xuICAgICAgICBpZiAodGlsZXMgPT09IG51bGwgfHwgIXRpbGVzW2luZGV4XSkge1xuICAgICAgICAgICAgLy8gcmVzb2x2ZSBlYWNoIHJlcXVlc3QgYnkgcG90ZW50aWFsbHkgYXBwbHlpbmcgYXJyYXkgbm9ybWFsaXphdGlvblxuICAgICAgICAgICAgcmVxdWVzdCA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBwb29sT3JEZWNvZGVyLmRlY29kZShzbGljZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlRm9ybWF0ID0gLyoqIEB0eXBlIHsxfDJ8M30gKi8gKHRoaXMuZ2V0U2FtcGxlRm9ybWF0KCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSB0aGlzLmdldEJpdHNQZXJTYW1wbGUoKTtcbiAgICAgICAgICAgICAgICBpZiAobmVlZHNOb3JtYWxpemF0aW9uKHNhbXBsZUZvcm1hdCwgYml0c1BlclNhbXBsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG5vcm1hbGl6ZUFycmF5KGRhdGEsIHNhbXBsZUZvcm1hdCwgdGhpcy5wbGFuYXJDb25maWd1cmF0aW9uLCB0aGlzLmdldFNhbXBsZXNQZXJQaXhlbCgpLCBiaXRzUGVyU2FtcGxlLCB0aGlzLmdldFRpbGVXaWR0aCgpLCB0aGlzLmdldEJsb2NrSGVpZ2h0KHkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBjYWNoZVxuICAgICAgICAgICAgaWYgKHRpbGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGlsZXNbaW5kZXhdID0gcmVxdWVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgcmVxdWVzdCA9IHRpbGVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYWNoZSB0aGUgdGlsZSByZXF1ZXN0XG4gICAgICAgIHJldHVybiB7IHgsIHksIHNhbXBsZSwgZGF0YTogYXdhaXQgcmVxdWVzdCB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCByZWFkIGZ1bmN0aW9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbWFnZVdpbmRvdyBUaGUgaW1hZ2Ugd2luZG93IGluIHBpeGVsIGNvb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzYW1wbGVzIFRoZSBzZWxlY3RlZCBzYW1wbGVzICgwLWJhc2VkIGluZGljZXMpXG4gICAgICogQHBhcmFtIHtUeXBlZEFycmF5fFR5cGVkQXJyYXlbXX0gdmFsdWVBcnJheXMgVGhlIGFycmF5KHMpIHRvIHdyaXRlIGludG9cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbnRlcmxlYXZlIFdoZXRoZXIgb3Igbm90IHRvIHdyaXRlIGluIGFuIGludGVybGVhdmVkIG1hbm5lclxuICAgICAqIEBwYXJhbSB7RGVjb2RlcldvcmtlcnxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuQmFzZURlY29kZXJ9IHBvb2xPckRlY29kZXIgdGhlIGRlY29kZXIgb3IgZGVjb2RlciBwb29sXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gdGhlIHdpZHRoIG9mIHdpbmRvdyB0byBiZSByZWFkIGludG9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gdGhlIGhlaWdodCBvZiB3aW5kb3cgdG8gYmUgcmVhZCBpbnRvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXNhbXBsZU1ldGhvZF0gdGhlIHJlc2FtcGxpbmcgbWV0aG9kIHRvIGJlIHVzZWQgd2hlbiBpbnRlcnBvbGF0aW5nXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF0gQW4gQWJvcnRTaWduYWwgdGhhdCBtYXkgYmUgc2lnbmFsbGVkIGlmIHRoZSByZXF1ZXN0IGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgYWJvcnRlZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFJlYWRSYXN0ZXJSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFzeW5jIF9yZWFkUmFzdGVyKGltYWdlV2luZG93LCBzYW1wbGVzLCB2YWx1ZUFycmF5cywgaW50ZXJsZWF2ZSwgcG9vbE9yRGVjb2Rlciwgd2lkdGgsIGhlaWdodCwgcmVzYW1wbGVNZXRob2QsIHNpZ25hbCkge1xuICAgICAgICBjb25zdCB0aWxlV2lkdGggPSB0aGlzLmdldFRpbGVXaWR0aCgpO1xuICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5nZXRUaWxlSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGltYWdlV2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgbWluWFRpbGUgPSBNYXRoLm1heChNYXRoLmZsb29yKGltYWdlV2luZG93WzBdIC8gdGlsZVdpZHRoKSwgMCk7XG4gICAgICAgIGNvbnN0IG1heFhUaWxlID0gTWF0aC5taW4oTWF0aC5jZWlsKGltYWdlV2luZG93WzJdIC8gdGlsZVdpZHRoKSwgTWF0aC5jZWlsKGltYWdlV2lkdGggLyB0aWxlV2lkdGgpKTtcbiAgICAgICAgY29uc3QgbWluWVRpbGUgPSBNYXRoLm1heChNYXRoLmZsb29yKGltYWdlV2luZG93WzFdIC8gdGlsZUhlaWdodCksIDApO1xuICAgICAgICBjb25zdCBtYXhZVGlsZSA9IE1hdGgubWluKE1hdGguY2VpbChpbWFnZVdpbmRvd1szXSAvIHRpbGVIZWlnaHQpLCBNYXRoLmNlaWwoaW1hZ2VIZWlnaHQgLyB0aWxlSGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXTtcbiAgICAgICAgbGV0IGJ5dGVzUGVyUGl4ZWwgPSB0aGlzLmdldEJ5dGVzUGVyUGl4ZWwoKTtcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICAgICAgICBjb25zdCBzcmNTYW1wbGVPZmZzZXRzID0gW107XG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8KHRoaXM6IERhdGFWaWV3LCBieXRlT2Zmc2V0OiBudW1iZXIsIGxpdHRsZUVuZGlhbjogYm9vbGVhbikgPT4gbnVtYmVyPn0gKi9cbiAgICAgICAgY29uc3Qgc2FtcGxlUmVhZGVycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYW5hckNvbmZpZ3VyYXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRzUGVyU2FtcGxlID0gYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnQml0c1BlclNhbXBsZScpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYml0c1BlclNhbXBsZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBCaXRzUGVyU2FtcGxlIHRvIGJlIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcmNTYW1wbGVPZmZzZXRzLnB1c2goc3VtKGJpdHNQZXJTYW1wbGUsIDAsIHNhbXBsZXNbaV0pIC8gOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcmNTYW1wbGVPZmZzZXRzLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYW1wbGVSZWFkZXJzLnB1c2godGhpcy5nZXRSZWFkZXJGb3JTYW1wbGUoc2FtcGxlc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGNvbnN0IHsgbGl0dGxlRW5kaWFuIH0gPSB0aGlzO1xuICAgICAgICBmb3IgKGxldCB5VGlsZSA9IG1pbllUaWxlOyB5VGlsZSA8IG1heFlUaWxlOyArK3lUaWxlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4VGlsZSA9IG1pblhUaWxlOyB4VGlsZSA8IG1heFhUaWxlOyArK3hUaWxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdldFByb21pc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBnZXRQcm9taXNlID0gdGhpcy5nZXRUaWxlT3JTdHJpcCh4VGlsZSwgeVRpbGUsIDAsIHBvb2xPckRlY29kZXIsIHNpZ25hbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNhbXBsZUluZGV4ID0gMDsgc2FtcGxlSW5kZXggPCBzYW1wbGVzLmxlbmd0aDsgKytzYW1wbGVJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaSA9IHNhbXBsZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGUgPSBzYW1wbGVzW3NhbXBsZUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNQZXJQaXhlbCA9IHRoaXMuZ2V0U2FtcGxlQnl0ZVNpemUoc2FtcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb21pc2UgPSB0aGlzLmdldFRpbGVPclN0cmlwKHhUaWxlLCB5VGlsZSwgc2FtcGxlLCBwb29sT3JEZWNvZGVyLCBzaWduYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0IHRpbGUgb3Igc3RyaXAgZGF0YS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0UHJvbWlzZS50aGVuKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aWxlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tIZWlnaHQgPSB0aGlzLmdldEJsb2NrSGVpZ2h0KHRpbGUueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdExpbmUgPSB0aWxlLnkgKiB0aWxlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDb2wgPSB0aWxlLnggKiB0aWxlV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TGluZSA9IGZpcnN0TGluZSArIGJsb2NrSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdENvbCA9ICh0aWxlLnggKyAxKSAqIHRpbGVXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IHNhbXBsZVJlYWRlcnNbc2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeW1heCA9IE1hdGgubWluKGJsb2NrSGVpZ2h0LCBibG9ja0hlaWdodCAtIChsYXN0TGluZSAtIGltYWdlV2luZG93WzNdKSwgaW1hZ2VIZWlnaHQgLSBmaXJzdExpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeG1heCA9IE1hdGgubWluKHRpbGVXaWR0aCwgdGlsZVdpZHRoIC0gKGxhc3RDb2wgLSBpbWFnZVdpbmRvd1syXSksIGltYWdlV2lkdGggLSBmaXJzdENvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gTWF0aC5tYXgoMCwgaW1hZ2VXaW5kb3dbMV0gLSBmaXJzdExpbmUpOyB5IDwgeW1heDsgKyt5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IE1hdGgubWF4KDAsIGltYWdlV2luZG93WzBdIC0gZmlyc3RDb2wpOyB4IDwgeG1heDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsT2Zmc2V0ID0gKCh5ICogdGlsZVdpZHRoKSArIHgpICogYnl0ZXNQZXJQaXhlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWFkZXIuY2FsbChkYXRhVmlldywgcGl4ZWxPZmZzZXQgKyBzcmNTYW1wbGVPZmZzZXRzW3NpXSwgbGl0dGxlRW5kaWFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpbmRvd0Nvb3JkaW5hdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcmxlYXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDb29yZGluYXRlID0gKCh5ICsgZmlyc3RMaW5lIC0gaW1hZ2VXaW5kb3dbMV0pICogd2luZG93V2lkdGggKiBzYW1wbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICgoeCArIGZpcnN0Q29sIC0gaW1hZ2VXaW5kb3dbMF0pICogc2FtcGxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBzaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQXJyYXlzW3dpbmRvd0Nvb3JkaW5hdGVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDb29yZGluYXRlID0gKCh5ICsgZmlyc3RMaW5lIC0gaW1hZ2VXaW5kb3dbMV0pICogd2luZG93V2lkdGgpICsgeCArIGZpcnN0Q29sIC0gaW1hZ2VXaW5kb3dbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUge1R5cGVkQXJyYXl9ICovICh2YWx1ZUFycmF5c1tzaV0pW3dpbmRvd0Nvb3JkaW5hdGVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIGlmICgod2lkdGggJiYgKGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF0pICE9PSB3aWR0aClcbiAgICAgICAgICAgIHx8IChoZWlnaHQgJiYgKGltYWdlV2luZG93WzNdIC0gaW1hZ2VXaW5kb3dbMV0pICE9PSBoZWlnaHQpKSB7XG4gICAgICAgICAgICBsZXQgcmVzYW1wbGVkO1xuICAgICAgICAgICAgaWYgKGludGVybGVhdmUpIHtcbiAgICAgICAgICAgICAgICByZXNhbXBsZWQgPSByZXNhbXBsZUludGVybGVhdmVkKFxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7VHlwZWRBcnJheX0gKi8gKHZhbHVlQXJyYXlzKSwgaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXSwgaW1hZ2VXaW5kb3dbM10gLSBpbWFnZVdpbmRvd1sxXSwgXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovICh3aWR0aCksIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaGVpZ2h0KSwgc2FtcGxlcy5sZW5ndGgsIHJlc2FtcGxlTWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc2FtcGxlZCA9IHJlc2FtcGxlKFxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7VHlwZWRBcnJheVtdfSAqLyAodmFsdWVBcnJheXMpLCBpbWFnZVdpbmRvd1syXSAtIGltYWdlV2luZG93WzBdLCBpbWFnZVdpbmRvd1szXSAtIGltYWdlV2luZG93WzFdLCBcbiAgICAgICAgICAgICAgICAvKiogQHR5cGUge251bWJlcn0gKi8gKHdpZHRoKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovIChoZWlnaHQpLCByZXNhbXBsZU1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNhbXBsZWRXaXRoRGltZW5zaW9ucyA9IC8qKiBAdHlwZSB7UmVhZFJhc3RlclJlc3VsdH0gKi8gKHJlc2FtcGxlZCk7XG4gICAgICAgICAgICByZXNhbXBsZWRXaXRoRGltZW5zaW9ucy53aWR0aCA9IHdpZHRoID8/IGltYWdlV2luZG93WzJdIC0gaW1hZ2VXaW5kb3dbMF07XG4gICAgICAgICAgICByZXNhbXBsZWRXaXRoRGltZW5zaW9ucy5oZWlnaHQgPSBoZWlnaHQgPz8gaW1hZ2VXaW5kb3dbM10gLSBpbWFnZVdpbmRvd1sxXTtcbiAgICAgICAgICAgIHJldHVybiByZXNhbXBsZWRXaXRoRGltZW5zaW9ucztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZUFycmF5c1dpdGhEaW1lbnNpb25zID0gLyoqIEB0eXBlIHtSZWFkUmFzdGVyUmVzdWx0fSAqLyAodmFsdWVBcnJheXMpO1xuICAgICAgICB2YWx1ZUFycmF5c1dpdGhEaW1lbnNpb25zLndpZHRoID0gd2lkdGggfHwgaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXTtcbiAgICAgICAgdmFsdWVBcnJheXNXaXRoRGltZW5zaW9ucy5oZWlnaHQgPSBoZWlnaHQgfHwgaW1hZ2VXaW5kb3dbM10gLSBpbWFnZVdpbmRvd1sxXTtcbiAgICAgICAgcmV0dXJuIHZhbHVlQXJyYXlzV2l0aERpbWVuc2lvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJhc3RlcnNPcHRpb25zICYge2ludGVybGVhdmU6IHRydWV9fSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVdpdGhEaW1lbnNpb25zPn0gdGhlIGRlY29kZWQgYXJyYXlzIGFzIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJhc3RlcnNPcHRpb25zICYge2ludGVybGVhdmU6IGZhbHNlfX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlBcnJheVdpdGhEaW1lbnNpb25zPn0gdGhlIGRlY29kZWQgYXJyYXlzIGFzIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJhc3RlcnNPcHRpb25zICYge2ludGVybGVhdmU6IGJvb2xlYW59fSBvcHRpb25zIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWFkUmFzdGVyUmVzdWx0Pn0gdGhlIGRlY29kZWQgYXJyYXlzIGFzIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBvdmVybG9hZFxuICAgICAqIEBwYXJhbSB7UmVhZFJhc3RlcnNPcHRpb25zfSBbb3B0aW9ucz17fV0gb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5QXJyYXlXaXRoRGltZW5zaW9ucz59IHRoZSBkZWNvZGVkIGFycmF5cyBhcyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZWFkcyByYXN0ZXIgZGF0YSBmcm9tIHRoZSBpbWFnZS4gVGhpcyBmdW5jdGlvbiByZWFkcyBhbGwgc2VsZWN0ZWQgc2FtcGxlc1xuICAgICAqIGludG8gc2VwYXJhdGUgYXJyYXlzIG9mIHRoZSBjb3JyZWN0IHR5cGUgZm9yIHRoYXQgc2FtcGxlIG9yIGludG8gYSBzaW5nbGVcbiAgICAgKiBjb21iaW5lZCBhcnJheSB3aGVuIGBpbnRlcmxlYXZlYCBpcyBzZXQuIFdoZW4gcHJvdmlkZWQsIG9ubHkgYSBzdWJzZXRcbiAgICAgKiBvZiB0aGUgcmFzdGVyIGlzIHJlYWQgZm9yIGVhY2ggc2FtcGxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFkUmFzdGVyc09wdGlvbnN9IFtvcHRpb25zPXt9XSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVhZFJhc3RlclJlc3VsdD59IHRoZSBkZWNvZGVkIGFycmF5cyBhcyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBhc3luYyByZWFkUmFzdGVycyhvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgeyB3aW5kb3c6IHduZCwgc2FtcGxlcyA9IFtdLCBwb29sID0gbnVsbCwgd2lkdGgsIGhlaWdodCwgcmVzYW1wbGVNZXRob2QsIGZpbGxWYWx1ZSwgc2lnbmFsLCB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3QgaW50ZXJsZWF2ZSA9ICdpbnRlcmxlYXZlJyBpbiBvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJsZWF2ZTtcbiAgICAgICAgY29uc3QgaW1hZ2VXaW5kb3cgPSB3bmQgfHwgWzAsIDAsIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKV07XG4gICAgICAgIC8vIGNoZWNrIHBhcmFtZXRlcnNcbiAgICAgICAgaWYgKGltYWdlV2luZG93WzBdID4gaW1hZ2VXaW5kb3dbMl0gfHwgaW1hZ2VXaW5kb3dbMV0gPiBpbWFnZVdpbmRvd1szXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN1YnNldHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbWFnZVdpbmRvd1dpZHRoID0gaW1hZ2VXaW5kb3dbMl0gLSBpbWFnZVdpbmRvd1swXTtcbiAgICAgICAgY29uc3QgaW1hZ2VXaW5kb3dIZWlnaHQgPSBpbWFnZVdpbmRvd1szXSAtIGltYWdlV2luZG93WzFdO1xuICAgICAgICBjb25zdCBudW1QaXhlbHMgPSBpbWFnZVdpbmRvd1dpZHRoICogaW1hZ2VXaW5kb3dIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNhbXBsZXNQZXJQaXhlbCA9IHRoaXMuZ2V0U2FtcGxlc1BlclBpeGVsKCk7XG4gICAgICAgIGlmICghc2FtcGxlcyB8fCAhc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlc1BlclBpeGVsOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2FtcGxlc1tpXSA+PSBzYW1wbGVzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBSYW5nZUVycm9yKGBJbnZhbGlkIHNhbXBsZSBpbmRleCAnJHtzYW1wbGVzW2ldfScuYCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUge1R5cGVkQXJyYXl8VHlwZWRBcnJheVtdfSAqL1xuICAgICAgICBsZXQgdmFsdWVBcnJheXM7XG4gICAgICAgIGlmIChpbnRlcmxlYXZlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbGVEaXJlY3RvcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVGb3JtYXQgPSBmaWxlRGlyZWN0b3J5LmdldFZhbHVlKCdTYW1wbGVGb3JtYXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IHNhbXBsZUZvcm1hdFxuICAgICAgICAgICAgICAgID8gTWF0aC5tYXguYXBwbHkobnVsbCwgQXJyYXkuZnJvbShzYW1wbGVGb3JtYXQpKSA6IDE7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ICE9PSAxICYmIGZvcm1hdCAhPT0gMiAmJiBmb3JtYXQgIT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHNhbXBsZSBmb3JtYXQgZm9yIGludGVybGVhdmVkIGRhdGEuIE11c3QgYmUgMSwgMiwgb3IgMy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJpdHNQZXJTYW1wbGVfID0gZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQml0c1BlclNhbXBsZScpO1xuICAgICAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IGJpdHNQZXJTYW1wbGVfXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heC5hcHBseShudWxsLCBBcnJheS5mcm9tKGJpdHNQZXJTYW1wbGVfKSkgOiA4O1xuICAgICAgICAgICAgdmFsdWVBcnJheXMgPSBhcnJheUZvclR5cGUoZm9ybWF0LCBiaXRzUGVyU2FtcGxlLCBudW1QaXhlbHMgKiBzYW1wbGVzLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoZmlsbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1doZW4gcmVhZGluZyBpbnRlcmxlYXZlZCBkYXRhLCBmaWxsVmFsdWUgbXVzdCBiZSBhIHNpbmdsZSBudW1iZXIuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlQXJyYXlzLmZpbGwoZmlsbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlQXJyYXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUFycmF5ID0gdGhpcy5nZXRBcnJheUZvclNhbXBsZShzYW1wbGVzW2ldLCBudW1QaXhlbHMpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGxWYWx1ZSkgJiYgaSA8IGZpbGxWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVBcnJheS5maWxsKGZpbGxWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpbGxWYWx1ZSAmJiAhQXJyYXkuaXNBcnJheShmaWxsVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQXJyYXkuZmlsbChmaWxsVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZUFycmF5cy5wdXNoKHZhbHVlQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXByZXNzaW9uID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdDb21wcmVzc2lvbicpIHx8IDE7XG4gICAgICAgIGNvbnN0IGRlY29kZXJQYXJhbWV0ZXJzID0gYXdhaXQgZ2V0RGVjb2RlclBhcmFtZXRlcnMoY29tcHJlc3Npb24sIHRoaXMuZmlsZURpcmVjdG9yeSk7XG4gICAgICAgIGNvbnN0IHBvb2xPckRlY29kZXIgPSBwb29sXG4gICAgICAgICAgICA/IHBvb2wuYmluZFBhcmFtZXRlcnMoY29tcHJlc3Npb24sIGRlY29kZXJQYXJhbWV0ZXJzKVxuICAgICAgICAgICAgOiBhd2FpdCBnZXREZWNvZGVyKGNvbXByZXNzaW9uLCBkZWNvZGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3JlYWRSYXN0ZXIoaW1hZ2VXaW5kb3csIHNhbXBsZXMsIHZhbHVlQXJyYXlzLCBpbnRlcmxlYXZlLCBwb29sT3JEZWNvZGVyLCB3aWR0aCwgaGVpZ2h0LCByZXNhbXBsZU1ldGhvZCwgc2lnbmFsKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUkdCT3B0aW9ucyAmIHtpbnRlcmxlYXZlOiB0cnVlfX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlXaXRoRGltZW5zaW9ucz59IHRoZSBSR0IgYXJyYXkgYXMgYSBQcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUkdCT3B0aW9ucyAmIHtpbnRlcmxlYXZlOiBmYWxzZX19IG9wdGlvbnMgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5QXJyYXlXaXRoRGltZW5zaW9ucz59IHRoZSBSR0IgYXJyYXkgYXMgYSBQcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUkdCT3B0aW9ucyAmIHtpbnRlcmxlYXZlOiBib29sZWFufX0gb3B0aW9ucyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVhZFJhc3RlclJlc3VsdD59IHRoZSBSR0IgYXJyYXkgYXMgYSBQcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG92ZXJsb2FkXG4gICAgICogQHBhcmFtIHtSZWFkUkdCT3B0aW9uc30gW29wdGlvbnM9e31dIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheUFycmF5V2l0aERpbWVuc2lvbnM+fSB0aGUgUkdCIGFycmF5IGFzIGEgUHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJlYWRzIHJhc3RlciBkYXRhIGZyb20gdGhlIGltYWdlIGFzIFJHQi5cbiAgICAgKiBDb2xvcnNwYWNlcyBvdGhlciB0aGFuIFJHQiB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIFJHQiwgY29sb3IgbWFwcyBleHBhbmRlZC5cbiAgICAgKiBXaGVuIG5vIG90aGVyIG1ldGhvZCBpcyBhcHBsaWNhYmxlLCB0aGUgZmlyc3Qgc2FtcGxlIGlzIHVzZWQgdG8gcHJvZHVjZSBhXG4gICAgICogZ3JheXNjYWxlIGltYWdlLlxuICAgICAqIFdoZW4gcHJvdmlkZWQsIG9ubHkgYSBzdWJzZXQgb2YgdGhlIHJhc3RlciBpcyByZWFkIGZvciBlYWNoIHNhbXBsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVhZFJHQk9wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UmVhZFJhc3RlclJlc3VsdD59IHRoZSBSR0IgYXJyYXkgYXMgYSBQcm9taXNlXG4gICAgICovXG4gICAgYXN5bmMgcmVhZFJHQihvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgeyB3aW5kb3csIHBvb2wgPSBudWxsLCB3aWR0aCwgaGVpZ2h0LCByZXNhbXBsZU1ldGhvZCwgZW5hYmxlQWxwaGEgPSBmYWxzZSwgc2lnbmFsIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCBpbnRlcmxlYXZlID0gKCdpbnRlcmxlYXZlJyBpbiBvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJsZWF2ZSkgPz8gZmFsc2U7XG4gICAgICAgIGNvbnN0IGltYWdlV2luZG93ID0gd2luZG93IHx8IFswLCAwLCB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCldO1xuICAgICAgICAvLyBjaGVjayBwYXJhbWV0ZXJzXG4gICAgICAgIGlmIChpbWFnZVdpbmRvd1swXSA+IGltYWdlV2luZG93WzJdIHx8IGltYWdlV2luZG93WzFdID4gaW1hZ2VXaW5kb3dbM10pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdWJzZXRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGkgPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ1Bob3RvbWV0cmljSW50ZXJwcmV0YXRpb24nKTtcbiAgICAgICAgaWYgKHBpID09PSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5SR0IpIHtcbiAgICAgICAgICAgIGxldCBzID0gWzAsIDEsIDJdO1xuICAgICAgICAgICAgY29uc3QgZXh0cmFTYW1wbGVzID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdFeHRyYVNhbXBsZXMnKTtcbiAgICAgICAgICAgIGlmIChleHRyYVNhbXBsZXMgJiYgZXh0cmFTYW1wbGVzWzBdICE9PSBFeHRyYVNhbXBsZXNWYWx1ZXMuVW5zcGVjaWZpZWQgJiYgZW5hYmxlQWxwaGEpIHtcbiAgICAgICAgICAgICAgICBzID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgYml0c1BlclNhbXBsZSA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnQml0c1BlclNhbXBsZScpIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYml0c1BlclNhbXBsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZFJhc3RlcnMoe1xuICAgICAgICAgICAgICAgIHdpbmRvdyxcbiAgICAgICAgICAgICAgICBpbnRlcmxlYXZlLFxuICAgICAgICAgICAgICAgIHNhbXBsZXM6IHMsXG4gICAgICAgICAgICAgICAgcG9vbCxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcmVzYW1wbGVNZXRob2QsXG4gICAgICAgICAgICAgICAgc2lnbmFsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNhbXBsZXM7XG4gICAgICAgIHN3aXRjaCAocGkpIHtcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuV2hpdGVJc1plcm86XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLkJsYWNrSXNaZXJvOlxuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5QYWxldHRlOlxuICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBbMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLkNNWUs6XG4gICAgICAgICAgICAgICAgc2FtcGxlcyA9IFswLCAxLCAyLCAzXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuWUNiQ3I6XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLkNJRUxhYjpcbiAgICAgICAgICAgICAgICBzYW1wbGVzID0gWzAsIDEsIDJdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3IgdW5zdXBwb3J0ZWQgcGhvdG9tZXRyaWMgaW50ZXJwcmV0YXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ViT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdpbmRvdzogaW1hZ2VXaW5kb3csXG4gICAgICAgICAgICAvKiogQHR5cGUge3RydWV9ICovXG4gICAgICAgICAgICBpbnRlcmxlYXZlOiB0cnVlLFxuICAgICAgICAgICAgc2FtcGxlcyxcbiAgICAgICAgICAgIHBvb2wsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHJlc2FtcGxlTWV0aG9kLFxuICAgICAgICAgICAgc2lnbmFsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGZpbGVEaXJlY3RvcnkgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJhc3RlciA9IGF3YWl0IHRoaXMucmVhZFJhc3RlcnMoc3ViT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IG1heCA9IDIgKiogdGhpcy5nZXRCaXRzUGVyU2FtcGxlKDApO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgc3dpdGNoIChwaSkge1xuICAgICAgICAgICAgY2FzZSBwaG90b21ldHJpY0ludGVycHJldGF0aW9ucy5XaGl0ZUlzWmVybzpcbiAgICAgICAgICAgICAgICBkYXRhID0gZnJvbVdoaXRlSXNaZXJvKHJhc3RlciwgbWF4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuQmxhY2tJc1plcm86XG4gICAgICAgICAgICAgICAgZGF0YSA9IGZyb21CbGFja0lzWmVybyhyYXN0ZXIsIG1heCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLlBhbGV0dGU6XG4gICAgICAgICAgICAgICAgZGF0YSA9IGZyb21QYWxldHRlKHJhc3RlciwgLyoqIEB0eXBlIHtVaW50MTZBcnJheX0gKi8gKGF3YWl0IGZpbGVEaXJlY3RvcnkubG9hZFZhbHVlKCdDb2xvck1hcCcpKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLkNNWUs6XG4gICAgICAgICAgICAgICAgZGF0YSA9IGZyb21DTVlLKHJhc3Rlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zLllDYkNyOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBmcm9tWUNiQ3IocmFzdGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbnMuQ0lFTGFiOlxuICAgICAgICAgICAgICAgIGRhdGEgPSBmcm9tQ0lFTGFiKHJhc3Rlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcGhvdG9tZXRyaWMgaW50ZXJwcmV0YXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbm9uLWludGVybGVhdmVkIGRhdGEgaXMgcmVxdWVzdGVkLCB3ZSBtdXN0IHNwbGl0IHRoZSBjaGFubmVsc1xuICAgICAgICAvLyBpbnRvIHRoZWlyIHJlc3BlY3RpdmUgYXJyYXlzXG4gICAgICAgIGlmICghaW50ZXJsZWF2ZSkge1xuICAgICAgICAgICAgY29uc3QgcmVkID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGggLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IGdyZWVuID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGggLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IGJsdWUgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCAvIDMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMywgKytqKSB7XG4gICAgICAgICAgICAgICAgcmVkW2pdID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBncmVlbltqXSA9IGRhdGFbaSArIDFdO1xuICAgICAgICAgICAgICAgIGJsdWVbal0gPSBkYXRhW2kgKyAyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEgPSBbcmVkLCBncmVlbiwgYmx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YVdpdGhEaW1lbnNpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuUmVhZFJhc3RlclJlc3VsdH0gKi8gKGRhdGEpO1xuICAgICAgICBkYXRhV2l0aERpbWVuc2lvbnMud2lkdGggPSByYXN0ZXIud2lkdGg7XG4gICAgICAgIGRhdGFXaXRoRGltZW5zaW9ucy5oZWlnaHQgPSByYXN0ZXIuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gZGF0YVdpdGhEaW1lbnNpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRpZXBvaW50cy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTx7aTogbnVtYmVyLCBqOiBudW1iZXIsIGs6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcn0+Pn0gdGhlIHRpZXBvaW50c1xuICAgICAqL1xuICAgIGFzeW5jIGdldFRpZVBvaW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVEaXJlY3RvcnkuaGFzVGFnKCdNb2RlbFRpZXBvaW50JykpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbFRpZVBvaW50ID0gYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnTW9kZWxUaWVwb2ludCcpO1xuICAgICAgICBpZiAodHlwZW9mIG1vZGVsVGllUG9pbnQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIE1vZGVsVGllcG9pbnQgdG8gYmUgYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGllUG9pbnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxUaWVQb2ludC5sZW5ndGg7IGkgKz0gNikge1xuICAgICAgICAgICAgdGllUG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGk6IG1vZGVsVGllUG9pbnRbaV0sXG4gICAgICAgICAgICAgICAgajogbW9kZWxUaWVQb2ludFtpICsgMV0sXG4gICAgICAgICAgICAgICAgazogbW9kZWxUaWVQb2ludFtpICsgMl0sXG4gICAgICAgICAgICAgICAgeDogbW9kZWxUaWVQb2ludFtpICsgM10sXG4gICAgICAgICAgICAgICAgeTogbW9kZWxUaWVQb2ludFtpICsgNF0sXG4gICAgICAgICAgICAgICAgejogbW9kZWxUaWVQb2ludFtpICsgNV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllUG9pbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgR0RBTCBtZXRhZGF0YSBpdGVtcy5cbiAgICAgKlxuICAgICAqIElmIHNhbXBsZSBpcyBwYXNzZWQgdG8gbnVsbCwgZGF0YXNldC1sZXZlbCBtZXRhZGF0YSB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIE90aGVyd2lzZSBvbmx5IG1ldGFkYXRhIHNwZWNpZmljIHRvIHRoZSBwcm92aWRlZCBzYW1wbGUgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IFtzYW1wbGU9bnVsbF0gVGhlIHNhbXBsZSBpbmRleC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPnxudWxsPn0gVGhlIEdEQUwgbWV0YWRhdGEgaXRlbXNcbiAgICAgKi9cbiAgICBhc3luYyBnZXRHREFMTWV0YWRhdGEoc2FtcGxlID0gbnVsbCkge1xuICAgICAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHt9O1xuICAgICAgICBpZiAoIXRoaXMuZmlsZURpcmVjdG9yeS5oYXNUYWcoJ0dEQUxfTUVUQURBVEEnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyaW5nID0gYXdhaXQgdGhpcy5maWxlRGlyZWN0b3J5LmxvYWRWYWx1ZSgnR0RBTF9NRVRBREFUQScpO1xuICAgICAgICAvKiogQHR5cGUge0FycmF5PHtpbm5lcjogdW5rbm93bn0+fSAqL1xuICAgICAgICBsZXQgaXRlbXMgPSBmaW5kVGFnc0J5TmFtZShzdHJpbmcsICdJdGVtJyk7XG4gICAgICAgIGlmIChzYW1wbGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBnZXRBdHRyaWJ1dGUoaXRlbSwgJ3NhbXBsZScpID09PSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IE51bWJlcihnZXRBdHRyaWJ1dGUoaXRlbSwgJ3NhbXBsZScpKSA9PT0gc2FtcGxlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBtZXRhZGF0YVtnZXRBdHRyaWJ1dGUoaXRlbSwgJ25hbWUnKV0gPSBpdGVtLmlubmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgR0RBTCBub2RhdGEgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9XG4gICAgICovXG4gICAgZ2V0R0RBTE5vRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5maWxlRGlyZWN0b3J5Lmhhc1RhZygnR0RBTF9OT0RBVEEnKSAmJiB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ0dEQUxfTk9EQVRBJyk7XG4gICAgICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTnVtYmVyKHN0cmluZy5zdWJzdHJpbmcoMCwgc3RyaW5nLmxlbmd0aCAtIDEpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW1hZ2Ugb3JpZ2luIGFzIGEgWFlaLXZlY3Rvci4gV2hlbiB0aGUgaW1hZ2UgaGFzIG5vIGFmZmluZVxuICAgICAqIHRyYW5zZm9ybWF0aW9uLCB0aGVuIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAgICogQHJldHVybnMge0FycmF5PG51bWJlcj59IFRoZSBvcmlnaW4gYXMgYSB2ZWN0b3JcbiAgICAgKi9cbiAgICBnZXRPcmlnaW4oKSB7XG4gICAgICAgIGNvbnN0IHRpZVBvaW50cyA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTW9kZWxUaWVwb2ludCcpO1xuICAgICAgICBjb25zdCBtb2RlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdNb2RlbFRyYW5zZm9ybWF0aW9uJyk7XG4gICAgICAgIGlmICh0aWVQb2ludHMgJiYgdGllUG9pbnRzLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB0aWVQb2ludHNbM10sXG4gICAgICAgICAgICAgICAgdGllUG9pbnRzWzRdLFxuICAgICAgICAgICAgICAgIHRpZVBvaW50c1s1XSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGVsVHJhbnNmb3JtYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbW9kZWxUcmFuc2Zvcm1hdGlvblszXSxcbiAgICAgICAgICAgICAgICBtb2RlbFRyYW5zZm9ybWF0aW9uWzddLFxuICAgICAgICAgICAgICAgIG1vZGVsVHJhbnNmb3JtYXRpb25bMTFdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbWFnZSBkb2VzIG5vdCBoYXZlIGFuIGFmZmluZSB0cmFuc2Zvcm1hdGlvbi4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW1hZ2UgcmVzb2x1dGlvbiBhcyBhIFhZWi12ZWN0b3IuIFdoZW4gdGhlIGltYWdlIGhhcyBubyBhZmZpbmVcbiAgICAgKiB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgICAqIEBwYXJhbSB7R2VvVElGRkltYWdlfG51bGx9IFtyZWZlcmVuY2VJbWFnZT1udWxsXSBBIHJlZmVyZW5jZSBpbWFnZSB0byBjYWxjdWxhdGUgdGhlIHJlc29sdXRpb24gZnJvbVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gY2FzZXMgd2hlbiB0aGUgY3VycmVudCBpbWFnZSBkb2VzIG5vdCBoYXZlIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgdGFncyBvbiBpdHMgb3duLlxuICAgICAqIEByZXR1cm5zIHtBcnJheTxudW1iZXI+fSBUaGUgcmVzb2x1dGlvbiBhcyBhIHZlY3RvclxuICAgICAqL1xuICAgIGdldFJlc29sdXRpb24ocmVmZXJlbmNlSW1hZ2UgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsUGl4ZWxTY2FsZSA9IHRoaXMuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTW9kZWxQaXhlbFNjYWxlJyk7XG4gICAgICAgIGNvbnN0IG1vZGVsVHJhbnNmb3JtYXRpb24gPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ01vZGVsVHJhbnNmb3JtYXRpb24nKTtcbiAgICAgICAgaWYgKG1vZGVsUGl4ZWxTY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBtb2RlbFBpeGVsU2NhbGVbMF0sXG4gICAgICAgICAgICAgICAgLW1vZGVsUGl4ZWxTY2FsZVsxXSxcbiAgICAgICAgICAgICAgICBtb2RlbFBpeGVsU2NhbGVbMl0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlbFRyYW5zZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICBpZiAobW9kZWxUcmFuc2Zvcm1hdGlvblsxXSA9PT0gMCAmJiBtb2RlbFRyYW5zZm9ybWF0aW9uWzRdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxUcmFuc2Zvcm1hdGlvblswXSxcbiAgICAgICAgICAgICAgICAgICAgLW1vZGVsVHJhbnNmb3JtYXRpb25bNV0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVHJhbnNmb3JtYXRpb25bMTBdLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIE1hdGguc3FydCgobW9kZWxUcmFuc2Zvcm1hdGlvblswXSAqIG1vZGVsVHJhbnNmb3JtYXRpb25bMF0pXG4gICAgICAgICAgICAgICAgICAgICsgKG1vZGVsVHJhbnNmb3JtYXRpb25bNF0gKiBtb2RlbFRyYW5zZm9ybWF0aW9uWzRdKSksXG4gICAgICAgICAgICAgICAgLU1hdGguc3FydCgobW9kZWxUcmFuc2Zvcm1hdGlvblsxXSAqIG1vZGVsVHJhbnNmb3JtYXRpb25bMV0pXG4gICAgICAgICAgICAgICAgICAgICsgKG1vZGVsVHJhbnNmb3JtYXRpb25bNV0gKiBtb2RlbFRyYW5zZm9ybWF0aW9uWzVdKSksXG4gICAgICAgICAgICAgICAgbW9kZWxUcmFuc2Zvcm1hdGlvblsxMF1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZmVyZW5jZUltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBbcmVmUmVzWCwgcmVmUmVzWSwgcmVmUmVzWl0gPSByZWZlcmVuY2VJbWFnZS5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHJlZlJlc1ggKiByZWZlcmVuY2VJbWFnZS5nZXRXaWR0aCgpIC8gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICAgIHJlZlJlc1kgKiByZWZlcmVuY2VJbWFnZS5nZXRIZWlnaHQoKSAvIHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgcmVmUmVzWiAqIHJlZmVyZW5jZUltYWdlLmdldFdpZHRoKCkgLyB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGltYWdlIGRvZXMgbm90IGhhdmUgYW4gYWZmaW5lIHRyYW5zZm9ybWF0aW9uLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwaXhlbHMgb2YgdGhlIGltYWdlIGRlcGljdCBhbiBhcmVhIChvciBwb2ludCkuXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgdGhlIHBpeGVscyBhcmUgYSBwb2ludFxuICAgICAqL1xuICAgIHBpeGVsSXNBcmVhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRHZW9LZXlzKCk/LkdUUmFzdGVyVHlwZUdlb0tleSA9PT0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW1hZ2UgYm91bmRpbmcgYm94IGFzIGFuIGFycmF5IG9mIDQgdmFsdWVzOiBtaW4teCwgbWluLXksXG4gICAgICogbWF4LXggYW5kIG1heC15LiBXaGVuIHRoZSBpbWFnZSBoYXMgbm8gYWZmaW5lIHRyYW5zZm9ybWF0aW9uLCB0aGVuIGFuXG4gICAgICogZXhjZXB0aW9uIGlzIHRocm93bi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0aWxlZ3JpZD1mYWxzZV0gSWYgdHJ1ZSByZXR1cm4gZXh0ZW50IGZvciBhIHRpbGVncmlkXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXQgYWRqdXN0bWVudCBmb3IgTW9kZWxUcmFuc2Zvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gVGhlIGJvdW5kaW5nIGJveFxuICAgICAqL1xuICAgIGdldEJvdW5kaW5nQm94KHRpbGVncmlkID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IG1vZGVsVHJhbnNmb3JtYXRpb24gPSB0aGlzLmZpbGVEaXJlY3RvcnkuZ2V0VmFsdWUoJ01vZGVsVHJhbnNmb3JtYXRpb24nKTtcbiAgICAgICAgaWYgKG1vZGVsVHJhbnNmb3JtYXRpb24gJiYgIXRpbGVncmlkKSB7XG4gICAgICAgICAgICBjb25zdCBbYSwgYiwgLCBkLCBlLCBmLCAsIGhdID0gbW9kZWxUcmFuc2Zvcm1hdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lcnMgPSBbXG4gICAgICAgICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCBoZWlnaHRdLFxuICAgICAgICAgICAgICAgIFt3aWR0aCwgMF0sXG4gICAgICAgICAgICAgICAgW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IGNvcm5lcnMubWFwKChbSSwgSl0pID0+IFtcbiAgICAgICAgICAgICAgICBkICsgKGEgKiBJKSArIChiICogSiksXG4gICAgICAgICAgICAgICAgaCArIChlICogSSkgKyAoZiAqIEopLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCB4cyA9IHByb2plY3RlZC5tYXAoKHB0KSA9PiBwdFswXSk7XG4gICAgICAgICAgICBjb25zdCB5cyA9IHByb2plY3RlZC5tYXAoKHB0KSA9PiBwdFsxXSk7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIE1hdGgubWluKC4uLnhzKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbiguLi55cyksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoLi4ueHMpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KC4uLnlzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSB0aGlzLmdldE9yaWdpbigpO1xuICAgICAgICAgICAgY29uc3QgcmVzb2x1dGlvbiA9IHRoaXMuZ2V0UmVzb2x1dGlvbigpO1xuICAgICAgICAgICAgY29uc3QgeDEgPSBvcmlnaW5bMF07XG4gICAgICAgICAgICBjb25zdCB5MSA9IG9yaWdpblsxXTtcbiAgICAgICAgICAgIGNvbnN0IHgyID0geDEgKyAocmVzb2x1dGlvblswXSAqIHdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IHkyID0geTEgKyAocmVzb2x1dGlvblsxXSAqIGhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIE1hdGgubWluKHgxLCB4MiksXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oeTEsIHkyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heCh4MSwgeDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHkxLCB5MiksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgR2VvVElGRkltYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvdGlmZmltYWdlLmpzLm1hcCIsIi8qXG4gIFNvbWUgcGFydHMgb2YgdGhpcyBmaWxlIGFyZSBiYXNlZCBvbiBVVElGLmpzLFxuICB3aGljaCB3YXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICBZb3UgY2FuIHZpZXcgdGhhdCBoZXJlOlxuICBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9wZWEvVVRJRi5qcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuaW1wb3J0IHsgdGFncywgZmllbGRUYWdUeXBlcywgZmllbGRUeXBlcywgZ2VvS2V5TmFtZXMgfSBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHsgYXNzaWduLCBlbmRzV2l0aCwgZm9yRWFjaCwgaW52ZXJ0LCB0aW1lcywgdHlwZU1hcCwgaXNUeXBlZFVpbnRBcnJheSwgaXNUeXBlZEludEFycmF5LCBpc1R5cGVkRmxvYXRBcnJheSB9IGZyb20gJy4vdXRpbHMuanMnO1xuLyoqIEBpbXBvcnQge0dlb3RpZmZXcml0ZXJNZXRhZGF0YX0gZnJvbSAnLi9nZW90aWZmLmpzJyAqL1xuLyoqIEB0eXBlZGVmIHsoYnVmZjogVWludDhBcnJheSwgcDogbnVtYmVyKSA9PiBudW1iZXJ9IFJlYWQgKi9cbmNvbnN0IHRhZ05hbWUyQ29kZSA9IHRhZ3M7XG5jb25zdCBnZW9LZXlOYW1lMkNvZGUgPSBpbnZlcnQoZ2VvS2V5TmFtZXMpO1xuLyoqIEB0eXBlIHtSZWNvcmQ8bnVtYmVyfHN0cmluZywga2V5b2YgZmllbGRUYWdUeXBlcz59ICovXG5jb25zdCBuYW1lMmNvZGUgPSB7fTtcbmFzc2lnbihuYW1lMmNvZGUsIHRhZ05hbWUyQ29kZSk7XG5hc3NpZ24obmFtZTJjb2RlLCBnZW9LZXlOYW1lMkNvZGUpO1xuY29uc3QgdHlwZU5hbWUyYnl0ZSA9IGZpZWxkVHlwZXM7XG4vLyBjb25maWcgdmFyaWFibGVzXG5jb25zdCBudW1CeXRlc0luSWZkID0gMTAwMDtcbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQmluQkVcbiAqIEBwcm9wZXJ0eSB7KGRhdGE6IFVpbnQ4QXJyYXksIG86IG51bWJlcikgPT4gbnVtYmVyfSBuZXh0WmVyb1xuICogQHByb3BlcnR5IHtSZWFkfSByZWFkVXNob3J0XG4gKiBAcHJvcGVydHkge1JlYWR9IHJlYWRTaG9ydFxuICogQHByb3BlcnR5IHtSZWFkfSByZWFkSW50XG4gKiBAcHJvcGVydHkge1JlYWR9IHJlYWRVaW50XG4gKiBAcHJvcGVydHkgeyhidWZmOiBVaW50OEFycmF5LCBwOiBudW1iZXIsIGw6IEFycmF5PG51bWJlcj4pID0+IHN0cmluZ30gcmVhZEFTQ0lJXG4gKiBAcHJvcGVydHkge1JlYWR9IHJlYWRGbG9hdFxuICogQHByb3BlcnR5IHtSZWFkfSByZWFkRG91YmxlXG4gKiBAcHJvcGVydHkgeyhidWZmOiBVaW50OEFycmF5LCBwOiBudW1iZXIsIG46IG51bWJlcikgPT4gdm9pZH0gd3JpdGVVc2hvcnRcbiAqIEBwcm9wZXJ0eSB7KGJ1ZmY6IFVpbnQ4QXJyYXksIHA6IG51bWJlciwgbjogbnVtYmVyKSA9PiB2b2lkfSB3cml0ZVVpbnRcbiAqIEBwcm9wZXJ0eSB7KGJ1ZmY6IFVpbnQ4QXJyYXksIHA6IG51bWJlciwgczogc3RyaW5nKSA9PiB2b2lkfSB3cml0ZUFTQ0lJXG4gKiBAcHJvcGVydHkge1VpbnQ4QXJyYXl9IHVpOFxuICogQHByb3BlcnR5IHtGbG9hdDY0QXJyYXl9IGZsNjRcbiAqIEBwcm9wZXJ0eSB7RmxvYXQzMkFycmF5fSBmbDMyXG4gKiBAcHJvcGVydHkge1VpbnQzMkFycmF5fSB1aTMyXG4gKiBAcHJvcGVydHkge0ludDMyQXJyYXl9IGkzMlxuICogQHByb3BlcnR5IHtJbnQxNkFycmF5fSBpMTZcbiAqIEBwcm9wZXJ0eSB7KGJ1ZmY6IFVpbnQ4QXJyYXksIHA6IG51bWJlciwgbjogbnVtYmVyKSA9PiB2b2lkfSB3cml0ZURvdWJsZVxuICovXG5jb25zdCB1aTggPSBuZXcgVWludDhBcnJheSg4KTtcbi8qKiBAdHlwZSB7QmluQkV9ICovXG5jb25zdCBfYmluQkUgPSB7XG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIG5leHRaZXJvOiAoZGF0YSwgbykgPT4ge1xuICAgICAgICBsZXQgb2luY3IgPSBvO1xuICAgICAgICB3aGlsZSAoZGF0YVtvaW5jcl0gIT09IDApIHtcbiAgICAgICAgICAgIG9pbmNyKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9pbmNyO1xuICAgIH0sXG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIHJlYWRVc2hvcnQ6IChidWZmLCBwKSA9PiB7XG4gICAgICAgIHJldHVybiAoYnVmZltwXSA8PCA4KSB8IGJ1ZmZbcCArIDFdO1xuICAgIH0sXG4gICAgLyoqIEB0eXBlIHtSZWFkfSAqL1xuICAgIHJlYWRTaG9ydDogKGJ1ZmYsIHApID0+IHtcbiAgICAgICAgY29uc3QgYSA9IF9iaW5CRS51aTg7XG4gICAgICAgIGFbMF0gPSBidWZmW3AgKyAxXTtcbiAgICAgICAgYVsxXSA9IGJ1ZmZbcCArIDBdO1xuICAgICAgICByZXR1cm4gX2JpbkJFLmkxNlswXTtcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICByZWFkSW50OiAoYnVmZiwgcCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gX2JpbkJFLnVpODtcbiAgICAgICAgYVswXSA9IGJ1ZmZbcCArIDNdO1xuICAgICAgICBhWzFdID0gYnVmZltwICsgMl07XG4gICAgICAgIGFbMl0gPSBidWZmW3AgKyAxXTtcbiAgICAgICAgYVszXSA9IGJ1ZmZbcCArIDBdO1xuICAgICAgICByZXR1cm4gX2JpbkJFLmkzMlswXTtcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7UmVhZH0gKi9cbiAgICByZWFkVWludDogKGJ1ZmYsIHApID0+IHtcbiAgICAgICAgY29uc3QgYSA9IF9iaW5CRS51aTg7XG4gICAgICAgIGFbMF0gPSBidWZmW3AgKyAzXTtcbiAgICAgICAgYVsxXSA9IGJ1ZmZbcCArIDJdO1xuICAgICAgICBhWzJdID0gYnVmZltwICsgMV07XG4gICAgICAgIGFbM10gPSBidWZmW3AgKyAwXTtcbiAgICAgICAgcmV0dXJuIF9iaW5CRS51aTMyWzBdO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHJlYWRBU0NJSTogKGJ1ZmYsIHAsIGwpID0+IHtcbiAgICAgICAgcmV0dXJuIGwubWFwKChpKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZmZbcCArIGldKSkuam9pbignJyk7XG4gICAgfSxcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgcmVhZEZsb2F0OiAoYnVmZiwgcCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gX2JpbkJFLnVpODtcbiAgICAgICAgdGltZXMoNCwgKGkpID0+IHtcbiAgICAgICAgICAgIGFbaV0gPSBidWZmW3AgKyAzIC0gaV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX2JpbkJFLmZsMzJbMF07XG4gICAgfSxcbiAgICAvKiogQHR5cGUge1JlYWR9ICovXG4gICAgcmVhZERvdWJsZTogKGJ1ZmYsIHApID0+IHtcbiAgICAgICAgY29uc3QgYSA9IF9iaW5CRS51aTg7XG4gICAgICAgIHRpbWVzKDgsIChpKSA9PiB7XG4gICAgICAgICAgICBhW2ldID0gYnVmZltwICsgNyAtIGldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9iaW5CRS5mbDY0WzBdO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gblxuICAgICAqL1xuICAgIHdyaXRlVXNob3J0OiAoYnVmZiwgcCwgbikgPT4ge1xuICAgICAgICBidWZmW3BdID0gKG4gPj4gOCkgJiAyNTU7XG4gICAgICAgIGJ1ZmZbcCArIDFdID0gbiAmIDI1NTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5cbiAgICAgKi9cbiAgICB3cml0ZVVpbnQ6IChidWZmLCBwLCBuKSA9PiB7XG4gICAgICAgIGJ1ZmZbcF0gPSAobiA+PiAyNCkgJiAyNTU7XG4gICAgICAgIGJ1ZmZbcCArIDFdID0gKG4gPj4gMTYpICYgMjU1O1xuICAgICAgICBidWZmW3AgKyAyXSA9IChuID4+IDgpICYgMjU1O1xuICAgICAgICBidWZmW3AgKyAzXSA9IChuID4+IDApICYgMjU1O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgICAqL1xuICAgIHdyaXRlQVNDSUk6IChidWZmLCBwLCBzKSA9PiB7XG4gICAgICAgIHRpbWVzKHMubGVuZ3RoLCAoaSkgPT4ge1xuICAgICAgICAgICAgYnVmZltwICsgaV0gPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgdWk4LFxuICAgIGZsNjQ6IG5ldyBGbG9hdDY0QXJyYXkodWk4LmJ1ZmZlciksXG4gICAgZmwzMjogbmV3IEZsb2F0MzJBcnJheSh1aTguYnVmZmVyKSxcbiAgICB1aTMyOiBuZXcgVWludDMyQXJyYXkodWk4LmJ1ZmZlciksXG4gICAgaTMyOiBuZXcgSW50MzJBcnJheSh1aTguYnVmZmVyKSxcbiAgICBpMTY6IG5ldyBJbnQxNkFycmF5KHVpOC5idWZmZXIpLFxuICAgIC8qKlxuICAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZcbiAgICAgICogQHBhcmFtIHtudW1iZXJ9IHBcbiAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5cbiAgICAgICovXG4gICAgd3JpdGVEb3VibGU6IChidWZmLCBwLCBuKSA9PiB7XG4gICAgICAgIF9iaW5CRS5mbDY0WzBdID0gbjtcbiAgICAgICAgdGltZXMoOCwgKGkpID0+IHtcbiAgICAgICAgICAgIGJ1ZmZbcCArIGldID0gX2JpbkJFLnVpOFs3IC0gaV07XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuLyoqXG4gKiBAcGFyYW0ge0JpbkJFfSBiaW5cbiAqIEBwYXJhbSB7VWludDhBcnJheX0gZGF0YVxuICogQHBhcmFtIHtudW1iZXJ9IF9vZmZzZXRcbiAqIEBwYXJhbSB7UmVjb3JkPGtleW9mIGZpZWxkVGFnVHlwZXMsIGFueT59IGlmZFxuICogQHJldHVybnMge1tudW1iZXIsIG51bWJlcl19XG4gKi9cbmNvbnN0IF93cml0ZUlGRCA9IChiaW4sIGRhdGEsIF9vZmZzZXQsIGlmZCkgPT4ge1xuICAgIGxldCBvZmZzZXQgPSBfb2Zmc2V0O1xuICAgIGNvbnN0IGtleXMgPSAvKiogQHR5cGUge0FycmF5PGtleW9mIGZpZWxkVGFnVHlwZXM+fSAqLyAoT2JqZWN0LmtleXMoaWZkKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSBudWxsICYmIGtleSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfSkubWFwKE51bWJlcikpO1xuICAgIGJpbi53cml0ZVVzaG9ydChkYXRhLCBvZmZzZXQsIGtleXMubGVuZ3RoKTtcbiAgICBvZmZzZXQgKz0gMjtcbiAgICBsZXQgZW9mZiA9IG9mZnNldCArICgxMiAqIGtleXMubGVuZ3RoKSArIDQ7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IC8qKiBAdHlwZSB7a2V5b2YgdHlwZU5hbWUyYnl0ZX0gKi8gKGZpZWxkVGFnVHlwZXNba2V5XSk7XG4gICAgICAgIGNvbnN0IHR5cGVOdW0gPSB0eXBlTmFtZTJieXRlW3R5cGVOYW1lXTtcbiAgICAgICAgaWYgKHR5cGVOYW1lID09IG51bGwgfHwgdHlwZU5hbWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZU5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gdHlwZSBvZiB0YWc6ICR7a2V5fWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWwgPSBpZmRba2V5XTtcbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBnZXQgdmFsdWUgZm9yIGtleSAke2tleX1gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBU0NJSVogZm9ybWF0IHdpdGggdHJhaWxpbmcgMCBjaGFyYWN0ZXJcbiAgICAgICAgLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vZm9ybWF0L3RpZmYvY29yaW9uLmh0bVxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NzgzMDQ0L3doYXRzLXRoZS1kaWZmZXJlbmNlLWJldHdlZW4tYXNjaWl6LXZzLWFzY2lpXG4gICAgICAgIGlmICh0eXBlTmFtZSA9PT0gJ0FTQ0lJJyAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiBlbmRzV2l0aCh2YWwsICdcXHUwMDAwJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YWwgKz0gJ1xcdTAwMDAnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bSA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGJpbi53cml0ZVVzaG9ydChkYXRhLCBvZmZzZXQsIGtleSk7XG4gICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICBiaW4ud3JpdGVVc2hvcnQoZGF0YSwgb2Zmc2V0LCB0eXBlTnVtKTtcbiAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgb2Zmc2V0LCBudW0pO1xuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgbGV0IGRsZW4gPSBbLTEsIDEsIDEsIDIsIDQsIDgsIDAsIDAsIDAsIDAsIDAsIDAsIDhdW3R5cGVOdW1dICogbnVtO1xuICAgICAgICBsZXQgdG9mZiA9IG9mZnNldDtcbiAgICAgICAgaWYgKGRsZW4gPiA0KSB7XG4gICAgICAgICAgICBiaW4ud3JpdGVVaW50KGRhdGEsIG9mZnNldCwgZW9mZik7XG4gICAgICAgICAgICB0b2ZmID0gZW9mZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZU5hbWUgPT09ICdBU0NJSScpIHtcbiAgICAgICAgICAgIGJpbi53cml0ZUFTQ0lJKGRhdGEsIHRvZmYsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZU5hbWUgPT09ICdTSE9SVCcpIHtcbiAgICAgICAgICAgIHRpbWVzKG51bSwgKGkpID0+IHtcbiAgICAgICAgICAgICAgICBiaW4ud3JpdGVVc2hvcnQoZGF0YSwgdG9mZiArICgyICogaSksIHZhbFtpXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlTmFtZSA9PT0gJ0xPTkcnKSB7XG4gICAgICAgICAgICB0aW1lcyhudW0sIChpKSA9PiB7XG4gICAgICAgICAgICAgICAgYmluLndyaXRlVWludChkYXRhLCB0b2ZmICsgKDQgKiBpKSwgdmFsW2ldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVOYW1lID09PSAnUkFUSU9OQUwnKSB7XG4gICAgICAgICAgICB0aW1lcyhudW0sIChpKSA9PiB7XG4gICAgICAgICAgICAgICAgYmluLndyaXRlVWludChkYXRhLCB0b2ZmICsgKDggKiBpKSwgTWF0aC5yb3VuZCh2YWxbaV0gKiAxMDAwMCkpO1xuICAgICAgICAgICAgICAgIGJpbi53cml0ZVVpbnQoZGF0YSwgdG9mZiArICg4ICogaSkgKyA0LCAxMDAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlTmFtZSA9PT0gJ0RPVUJMRScpIHtcbiAgICAgICAgICAgIHRpbWVzKG51bSwgKGkpID0+IHtcbiAgICAgICAgICAgICAgICBiaW4ud3JpdGVEb3VibGUoZGF0YSwgdG9mZiArICg4ICogaSksIHZhbFtpXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGxlbiA+IDQpIHtcbiAgICAgICAgICAgIGRsZW4gKz0gKGRsZW4gJiAxKTtcbiAgICAgICAgICAgIGVvZmYgKz0gZGxlbjtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICB9XG4gICAgcmV0dXJuIFtvZmZzZXQsIGVvZmZdO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxSZWNvcmQ8a2V5b2YgZmllbGRUYWdUeXBlcywgdW5rbm93bj4+fSBpZmRzXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9XG4gKi9cbmNvbnN0IGVuY29kZUlmZHMgPSAoaWZkcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShudW1CeXRlc0luSWZkKTtcbiAgICBsZXQgb2Zmc2V0ID0gNDtcbiAgICBjb25zdCBiaW4gPSBfYmluQkU7XG4gICAgLy8gc2V0IGJpZy1lbmRpYW4gYnl0ZS1vcmRlclxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RJRkYjQnl0ZV9vcmRlclxuICAgIGRhdGFbMF0gPSA3NztcbiAgICBkYXRhWzFdID0gNzc7XG4gICAgLy8gc2V0IGZvcm1hdC12ZXJzaW9uIG51bWJlclxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RJRkYjQnl0ZV9vcmRlclxuICAgIGRhdGFbM10gPSA0MjtcbiAgICBsZXQgaWZkbyA9IDg7XG4gICAgYmluLndyaXRlVWludChkYXRhLCBvZmZzZXQsIGlmZG8pO1xuICAgIG9mZnNldCArPSA0O1xuICAgIGlmZHMuZm9yRWFjaCgoaWZkLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZmZzID0gX3dyaXRlSUZEKGJpbiwgZGF0YSwgaWZkbywgaWZkKTtcbiAgICAgICAgaWZkbyA9IG5vZmZzWzFdO1xuICAgICAgICBpZiAoaSA8IGlmZHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgYmluLndyaXRlVWludChkYXRhLCBub2Zmc1swXSwgaWZkbyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGF0YS5zbGljZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5zbGljZSgwLCBpZmRvKS5idWZmZXI7XG4gICAgfVxuICAgIC8vIG5vZGUgaGFzbid0IGltcGxlbWVudGVkIHNsaWNlIG9uIFVpbnQ4QXJyYXkgeWV0XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoaWZkbyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZmRvOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZGF0YVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5idWZmZXI7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj58aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtHZW90aWZmV3JpdGVyTWV0YWRhdGF9IG1ldGFkYXRhXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9XG4gKi9cbmNvbnN0IGVuY29kZUltYWdlID0gKHZhbHVlcywgd2lkdGgsIGhlaWdodCwgbWV0YWRhdGEpID0+IHtcbiAgICBpZiAoaGVpZ2h0ID09PSB1bmRlZmluZWQgfHwgaGVpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgeW91IHBhc3NlZCBpbnRvIGVuY29kZUltYWdlIGEgd2lkdGggb2YgdHlwZSAke2hlaWdodH1gKTtcbiAgICB9XG4gICAgaWYgKHdpZHRoID09PSB1bmRlZmluZWQgfHwgd2lkdGggPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgcGFzc2VkIGludG8gZW5jb2RlSW1hZ2UgYSB3aWR0aCBvZiB0eXBlICR7d2lkdGh9YCk7XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPG51bWJlcnxzdHJpbmcsIEFycmF5PG51bWJlcnxzdHJpbmc+fG51bWJlcnxzdHJpbmd8dW5kZWZpbmVkPn0gKi9cbiAgICBjb25zdCBpZmQgPSB7XG4gICAgICAgIDI1NjogW3dpZHRoXSwgLy8gSW1hZ2VXaWR0aFxuICAgICAgICAyNTc6IFtoZWlnaHRdLCAvLyBJbWFnZUxlbmd0aFxuICAgICAgICAyNzM6IFtudW1CeXRlc0luSWZkXSwgLy8gc3RyaXBzIG9mZnNldFxuICAgICAgICAyNzg6IFtoZWlnaHRdLCAvLyBSb3dzUGVyU3RyaXBcbiAgICAgICAgMzA1OiAnZ2VvdGlmZi5qcycsIC8vIG5vIGFycmF5IGZvciBBU0NJSShaKVxuICAgIH07XG4gICAgaWYgKG1ldGFkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBtZXRhZGF0YSkge1xuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWZkW2ldID0gbWV0YWRhdGFbIC8qKiBAdHlwZSB7a2V5b2YgR2VvdGlmZldyaXRlck1ldGFkYXRhfSAqLyhpKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJmeCA9IG5ldyBVaW50OEFycmF5KGVuY29kZUlmZHMoW2lmZF0pKTtcbiAgICBjb25zdCBkYXRhVHlwZSA9IC8qKiBAdHlwZSB7a2V5b2YgdHlwZU1hcH0gKi8gKHZhbHVlcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICBjb25zdCBUeXBlZEFycmF5ID0gdHlwZU1hcFtkYXRhVHlwZV07XG4gICAgLy8gZGVmYXVsdCBmb3IgRmxvYXQ2NFxuICAgIGxldCBlbGVtZW50U2l6ZSA9IDg7XG4gICAgaWYgKFR5cGVkQXJyYXkpIHtcbiAgICAgICAgZWxlbWVudFNpemUgPSBUeXBlZEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobnVtQnl0ZXNJbklmZCArICh2YWx1ZXMubGVuZ3RoICogZWxlbWVudFNpemUpKTtcbiAgICB0aW1lcyhwcmZ4Lmxlbmd0aCwgKGkpID0+IHtcbiAgICAgICAgZGF0YVtpXSA9IHByZnhbaV07XG4gICAgfSk7XG4gICAgZm9yRWFjaCh2YWx1ZXMsICh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAoIVR5cGVkQXJyYXkpIHtcbiAgICAgICAgICAgIGRhdGFbbnVtQnl0ZXNJbklmZCArIGldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGVsZW1lbnRTaXplKTtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICBpZiAoZGF0YVR5cGUgPT09ICdGbG9hdDY0QXJyYXknKSB7XG4gICAgICAgICAgICB2aWV3LnNldEZsb2F0NjQoMCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ0Zsb2F0MzJBcnJheScpIHtcbiAgICAgICAgICAgIHZpZXcuc2V0RmxvYXQzMigwLCB2YWx1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAnVWludDMyQXJyYXknKSB7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMigwLCB2YWx1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAnVWludDE2QXJyYXknKSB7XG4gICAgICAgICAgICB2aWV3LnNldFVpbnQxNigwLCB2YWx1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAnVWludDhBcnJheScpIHtcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDgoMCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGVkQXJyYXkgPSBuZXcgVWludDhBcnJheSh2aWV3LmJ1ZmZlcik7XG4gICAgICAgIGNvbnN0IGlkeCA9IG51bUJ5dGVzSW5JZmQgKyAoaSAqIGVsZW1lbnRTaXplKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbGVtZW50U2l6ZTsgaisrKSB7XG4gICAgICAgICAgICBkYXRhW2lkeCArIGpdID0gdHlwZWRBcnJheVtqXTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbn07XG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1JlY29yZDxudW1iZXJ8c3RyaW5nLCBUPn0gaW5wdXRcbiAqIEByZXR1cm5zIHtSZWNvcmQ8bnVtYmVyfHN0cmluZywgVD59XG4gKi9cbmNvbnN0IGNvbnZlcnRUb1RpZHMgPSAoaW5wdXQpID0+IHtcbiAgICAvKiogQHR5cGUge1JlY29yZDxudW1iZXJ8c3RyaW5nLCBUPn0gKi9cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgICAgICBpZiAoa2V5ICE9PSAnU3RyaXBPZmZzZXRzJykge1xuICAgICAgICAgICAgaWYgKCFuYW1lMmNvZGVba2V5XSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioa2V5LCAnbm90IGluIG5hbWUyY29kZTonLCBPYmplY3Qua2V5cyhuYW1lMmNvZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFtuYW1lMmNvZGVba2V5XV0gPSBpbnB1dFtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBpbnB1dFxuICogQHJldHVybnMge1QgZXh0ZW5kcyBhbnlbXSA/IFQgOiBUW119XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7VCBleHRlbmRzIGFueVtdID8gVCA6IFRbXX0gKi8gKGlucHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7VCBleHRlbmRzIGFueVtdID8gVCA6IFRbXX0gKi8gKFtpbnB1dF0pO1xufTtcbi8qKiBAdHlwZSB7UGFydGlhbDxHZW90aWZmV3JpdGVyTWV0YWRhdGE+fSAqL1xuY29uc3QgbWV0YWRhdGFEZWZhdWx0cyA9IHtcbiAgICBDb21wcmVzc2lvbjogMSwgLy8gbm8gY29tcHJlc3Npb25cbiAgICBQbGFuYXJDb25maWd1cmF0aW9uOiAxLFxuICAgIEV4dHJhU2FtcGxlczogMCxcbn07XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPnxBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj58aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fSBkYXRhXG4gKiBAcGFyYW0ge0dlb3RpZmZXcml0ZXJNZXRhZGF0YX0gbWV0YWRhdGFcbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlR2VvdGlmZihkYXRhLCBtZXRhZGF0YSkge1xuICAgIGNvbnN0IGlzRmxhdHRlbmVkID0gdHlwZW9mIGRhdGFbMF0gPT09ICdudW1iZXInO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIGxldCBoZWlnaHQ7XG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgbGV0IG51bUJhbmRzO1xuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIGxldCB3aWR0aDtcbiAgICAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovXG4gICAgbGV0IGZsYXR0ZW5lZFZhbHVlcztcbiAgICBpZiAoaXNGbGF0dGVuZWQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlGbGF0ID0gLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqLyAoZGF0YSk7XG4gICAgICAgIGNvbnN0IG1ldGFIZWlnaHQgPSBtZXRhZGF0YS5oZWlnaHQgfHwgbWV0YWRhdGEuSW1hZ2VMZW5ndGg7XG4gICAgICAgIGlmIChtZXRhSGVpZ2h0ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIG1ldGFIZWlnaHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hlaWdodCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlciBpbiBtZXRhZGF0YSBpZiBkYXRhIGlzIGEgZmxhdCBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IG1ldGFIZWlnaHQ7XG4gICAgICAgIGNvbnN0IG1ldGFXaWR0aCA9IG1ldGFkYXRhLndpZHRoIHx8IG1ldGFkYXRhLkltYWdlV2lkdGg7XG4gICAgICAgIGlmIChtZXRhV2lkdGggPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgbWV0YVdpZHRoICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aWR0aCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlciBpbiBtZXRhZGF0YSBpZiBkYXRhIGlzIGEgZmxhdCBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gbWV0YVdpZHRoO1xuICAgICAgICBudW1CYW5kcyA9IGFycmF5RmxhdC5sZW5ndGggLyAoaGVpZ2h0ICogd2lkdGgpO1xuICAgICAgICBmbGF0dGVuZWRWYWx1ZXMgPSBhcnJheUZsYXQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBhcnJheTNkID0gLyoqIEB0eXBlIHtBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj59ICovIChkYXRhKTtcbiAgICAgICAgbnVtQmFuZHMgPSBhcnJheTNkLmxlbmd0aDtcbiAgICAgICAgaGVpZ2h0ID0gYXJyYXkzZFswXS5sZW5ndGg7XG4gICAgICAgIHdpZHRoID0gYXJyYXkzZFswXVswXS5sZW5ndGg7XG4gICAgICAgIGZsYXR0ZW5lZFZhbHVlcyA9IFtdO1xuICAgICAgICB0aW1lcyhoZWlnaHQsIChyb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgdGltZXMod2lkdGgsIChjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVzKG51bUJhbmRzLCAoYmFuZEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZsYXR0ZW5lZFZhbHVlcy5wdXNoKGFycmF5M2RbYmFuZEluZGV4XVtyb3dJbmRleF1bY29sdW1uSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWV0YWRhdGEuSW1hZ2VMZW5ndGggPSBoZWlnaHQ7XG4gICAgZGVsZXRlIG1ldGFkYXRhLmhlaWdodDtcbiAgICBtZXRhZGF0YS5JbWFnZVdpZHRoID0gd2lkdGg7XG4gICAgZGVsZXRlIG1ldGFkYXRhLndpZHRoO1xuICAgIC8vIGNvbnN1bHQgaHR0cHM6Ly93d3cubG9jLmdvdi9wcmVzZXJ2YXRpb24vZGlnaXRhbC9mb3JtYXRzL2NvbnRlbnQvdGlmZl90YWdzLnNodG1sXG4gICAgaWYgKCFtZXRhZGF0YS5CaXRzUGVyU2FtcGxlKSB7XG4gICAgICAgIGxldCBiaXRzUGVyU2FtcGxlID0gODtcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhmbGF0dGVuZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBiaXRzUGVyU2FtcGxlID0gOCAqIE9iamVjdC5nZXRQcm90b3R5cGVPZihmbGF0dGVuZWRWYWx1ZXMpLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgICAgICB9XG4gICAgICAgIG1ldGFkYXRhLkJpdHNQZXJTYW1wbGUgPSB0aW1lcyhudW1CYW5kcywgKCkgPT4gYml0c1BlclNhbXBsZSk7XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsTWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICBpZiAoISgnQ29tcHJlc3Npb24nIGluIGZpbmFsTWV0YWRhdGEpKSB7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuQ29tcHJlc3Npb24gPSBtZXRhZGF0YURlZmF1bHRzLkNvbXByZXNzaW9uO1xuICAgIH1cbiAgICBpZiAoISgnUGxhbmFyQ29uZmlndXJhdGlvbicgaW4gZmluYWxNZXRhZGF0YSkpIHtcbiAgICAgICAgZmluYWxNZXRhZGF0YS5QbGFuYXJDb25maWd1cmF0aW9uID0gbWV0YWRhdGFEZWZhdWx0cy5QbGFuYXJDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAoISgnRXh0cmFTYW1wbGVzJyBpbiBmaW5hbE1ldGFkYXRhKSkge1xuICAgICAgICBmaW5hbE1ldGFkYXRhLkV4dHJhU2FtcGxlcyA9IG1ldGFkYXRhRGVmYXVsdHMuRXh0cmFTYW1wbGVzO1xuICAgIH1cbiAgICAvLyBUaGUgY29sb3Igc3BhY2Ugb2YgdGhlIGltYWdlIGRhdGEuXG4gICAgLy8gMT1ibGFjayBpcyB6ZXJvIGFuZCAyPVJHQi5cbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbikge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmluYWxNZXRhZGF0YS5CaXRzUGVyU2FtcGxlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCaXRzUGVyU2FtcGxlIG11c3QgYmUgYW4gYXJyYXkgd2hlbiBQaG90b21ldHJpY0ludGVycHJldGF0aW9uIGlzIG5vdCBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbiA9IGZpbmFsTWV0YWRhdGEuQml0c1BlclNhbXBsZS5sZW5ndGggPT09IDMgPyAyIDogMTtcbiAgICB9XG4gICAgLy8gVGhlIG51bWJlciBvZiBjb21wb25lbnRzIHBlciBwaXhlbC5cbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuU2FtcGxlc1BlclBpeGVsKSB7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuU2FtcGxlc1BlclBpeGVsID0gW251bUJhbmRzXTtcbiAgICB9XG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLlN0cmlwQnl0ZUNvdW50cykge1xuICAgICAgICAvLyB3ZSBhcmUgb25seSB3cml0aW5nIG9uZSBzdHJpcFxuICAgICAgICAvLyBkZWZhdWx0IGZvciBGbG9hdDY0XG4gICAgICAgIGxldCBlbGVtZW50U2l6ZSA9IDg7XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZmxhdHRlbmVkVmFsdWVzKSkge1xuICAgICAgICAgICAgZWxlbWVudFNpemUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZmxhdHRlbmVkVmFsdWVzKS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbE1ldGFkYXRhLlN0cmlwQnl0ZUNvdW50cyA9IFtudW1CYW5kcyAqIGVsZW1lbnRTaXplICogaGVpZ2h0ICogd2lkdGhdO1xuICAgIH1cbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuTW9kZWxQaXhlbFNjYWxlICYmICFmaW5hbE1ldGFkYXRhLk1vZGVsVHJhbnNmb3JtYXRpb24pIHtcbiAgICAgICAgLy8gYXNzdW1lcyByYXN0ZXIgdGFrZXMgdXAgZXhhY3RseSB0aGUgd2hvbGUgZ2xvYmVcbiAgICAgICAgZmluYWxNZXRhZGF0YS5Nb2RlbFBpeGVsU2NhbGUgPSBbMzYwIC8gd2lkdGgsIDE4MCAvIGhlaWdodCwgMF07XG4gICAgfVxuICAgIGlmICghZmluYWxNZXRhZGF0YS5TYW1wbGVGb3JtYXQpIHtcbiAgICAgICAgbGV0IHNhbXBsZUZvcm1hdCA9IDE7XG4gICAgICAgIGlmIChpc1R5cGVkRmxvYXRBcnJheShmbGF0dGVuZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBzYW1wbGVGb3JtYXQgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1R5cGVkSW50QXJyYXkoZmxhdHRlbmVkVmFsdWVzKSkge1xuICAgICAgICAgICAgc2FtcGxlRm9ybWF0ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNUeXBlZFVpbnRBcnJheShmbGF0dGVuZWRWYWx1ZXMpKSB7XG4gICAgICAgICAgICBzYW1wbGVGb3JtYXQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuU2FtcGxlRm9ybWF0ID0gdGltZXMobnVtQmFuZHMsICgpID0+IHNhbXBsZUZvcm1hdCk7XG4gICAgfVxuICAgIC8vIGlmIGRpZG4ndCBwYXNzIGluIHByb2plY3Rpb24gaW5mb3JtYXRpb24sIGFzc3VtZSB0aGUgcG9wdWxhciA0MzI2IFwiZ2VvZ3JhcGhpYyBwcm9qZWN0aW9uXCJcbiAgICBpZiAoIWZpbmFsTWV0YWRhdGEuaGFzT3duUHJvcGVydHkoJ0dlb2dyYXBoaWNUeXBlR2VvS2V5JykgJiYgIWZpbmFsTWV0YWRhdGEuaGFzT3duUHJvcGVydHkoJ1Byb2plY3RlZENTVHlwZUdlb0tleScpKSB7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuR2VvZ3JhcGhpY1R5cGVHZW9LZXkgPSA0MzI2O1xuICAgICAgICBpZiAoIWZpbmFsTWV0YWRhdGEuTW9kZWxUcmFuc2Zvcm1hdGlvbikge1xuICAgICAgICAgICAgZmluYWxNZXRhZGF0YS5Nb2RlbFRpZXBvaW50ID0gWzAsIDAsIDAsIC0xODAsIDkwLCAwXTsgLy8gcmFzdGVyIGZpdHMgd2hvbGUgZ2xvYmVcbiAgICAgICAgfVxuICAgICAgICBmaW5hbE1ldGFkYXRhLkdlb2dDaXRhdGlvbkdlb0tleSA9ICdXR1MgODQnO1xuICAgICAgICBmaW5hbE1ldGFkYXRhLkdUTW9kZWxUeXBlR2VvS2V5ID0gMjtcbiAgICB9XG4gICAgY29uc3QgZ2VvS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsTWV0YWRhdGEpXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gZW5kc1dpdGgoa2V5LCAnR2VvS2V5JykpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBuYW1lMmNvZGVbYV0gLSBuYW1lMmNvZGVbYl0pO1xuICAgIC8vIElmIG5vdCBwcm92aWRlZCwgYnVpbGQgR2VvS2V5RGlyZWN0b3J5IGFzIHdlbGwgYXMgR2VvQXNjaWlQYXJhbXNUYWcgYW5kIEdlb0RvdWJsZVBhcmFtc1RhZ1xuICAgIC8vIGlmIEdlb0FzY2lpUGFyYW1zL0dlb0RvdWJsZVBhcmFtcyB3ZXJlIHBhc3NlZCBpbiwgd2UgYXNzdW1lIG9mZnNldHMgYXJlIGFscmVhZHkgY29ycmVjdFxuICAgIC8vIFNwZWMgaHR0cDovL2dlb3RpZmYubWFwdG9vbHMub3JnL3NwZWMvZ2VvdGlmZjIuNC5odG1sXG4gICAgaWYgKCFmaW5hbE1ldGFkYXRhLkdlb0tleURpcmVjdG9yeSkge1xuICAgICAgICAvLyBPbmx5IGJ1aWxkIEFTQ0lJIC8gRE9VQkxFIHBhcmFtcyBpZiBub3QgcHJvdmlkZWRcbiAgICAgICAgbGV0IGdlb0FzY2lpUGFyYW1zID0gZmluYWxNZXRhZGF0YS5HZW9Bc2NpaVBhcmFtcyB8fCAnJztcbiAgICAgICAgaWYgKHR5cGVvZiBnZW9Bc2NpaVBhcmFtcyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvQXNjaWlQYXJhbXMgbXVzdCBiZSBhIHN0cmluZyBpZiBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50QXNjaWlPZmZzZXQgPSBnZW9Bc2NpaVBhcmFtcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGdlb0RvdWJsZVBhcmFtcyA9IGZpbmFsTWV0YWRhdGEuR2VvRG91YmxlUGFyYW1zIHx8IFtdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZ2VvRG91YmxlUGFyYW1zKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9Eb3VibGVQYXJhbXMgbXVzdCBiZSBhbiBhcnJheSBpZiBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50RG91YmxlSW5kZXggPSBnZW9Eb3VibGVQYXJhbXMubGVuZ3RoO1xuICAgICAgICAvLyBTaW5jZSBnZW9LZXlzIGFscmVhZHkgc29ydGVkIGFuZCBmaWx0ZXJlZCwgZG8gYSBzaW5nbGUgcGFzcyB0byBhcHBlbmQgdG8gY29ycmVzcG9uZGluZyBkaXJlY3RvcnkgZm9yIFNIT1JUL0FTQ0lJL0RPVUJMRVxuICAgICAgICBjb25zdCBHZW9LZXlEaXJlY3RvcnkgPSBbMSwgMSwgMCwgMF07XG4gICAgICAgIGxldCB2YWxpZEtleXMgPSAwO1xuICAgICAgICBnZW9LZXlzLmZvckVhY2goKGdlb0tleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgS2V5SUQgPSBuYW1lMmNvZGVbZ2VvS2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1R5cGUgPSBmaWVsZFRhZ1R5cGVzW0tleUlEXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGZpbmFsTWV0YWRhdGFbIC8qKiBAdHlwZSB7a2V5b2YgaW1wb3J0KCcuL2dlb3RpZmYuanMnKS5HZW90aWZmV3JpdGVyTWV0YWRhdGF9ICovKGdlb0tleSldO1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IENvdW50O1xuICAgICAgICAgICAgbGV0IFRJRkZUYWdMb2NhdGlvbjtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgICAgICAgbGV0IHZhbHVlT2Zmc2V0O1xuICAgICAgICAgICAgaWYgKHRhZ1R5cGUgPT09ICdTSE9SVCcpIHtcbiAgICAgICAgICAgICAgICBDb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgVElGRlRhZ0xvY2F0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBHZW9LZXkgJHtnZW9LZXl9IHdpdGggdHlwZSBTSE9SVCBtdXN0IGhhdmUgYSBudW1iZXIgdmFsdWVgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVPZmZzZXQgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0YWdUeXBlID09PSAnQVNDSUknKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbE1ldGFkYXRhLkdlb0FzY2lpUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbFN0ciA9IGAke3ZhbC50b1N0cmluZygpfVxcdTAwMDBgO1xuICAgICAgICAgICAgICAgICAgICBUSUZGVGFnTG9jYXRpb24gPSBOdW1iZXIobmFtZTJjb2RlLkdlb0FzY2lpUGFyYW1zKTsgLy8gMzQ3MzdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVPZmZzZXQgPSBjdXJyZW50QXNjaWlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIENvdW50ID0gdmFsU3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZ2VvQXNjaWlQYXJhbXMgKz0gdmFsU3RyO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXNjaWlPZmZzZXQgKz0gdmFsU3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0YWdUeXBlID09PSAnRE9VQkxFJykge1xuICAgICAgICAgICAgICAgIGlmICghZmluYWxNZXRhZGF0YS5HZW9Eb3VibGVQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gdG9BcnJheSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICBUSUZGVGFnTG9jYXRpb24gPSBOdW1iZXIobmFtZTJjb2RlLkdlb0RvdWJsZVBhcmFtcyk7IC8vIDM0NzM2XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlT2Zmc2V0ID0gY3VycmVudERvdWJsZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICBDb3VudCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdiBvZiBhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb0RvdWJsZVBhcmFtcy5wdXNoKE51bWJlcih2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RG91YmxlSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW2dlb3RpZmYuanNdIGNvdWxkbid0IGdldCBUSUZGVGFnTG9jYXRpb24gZm9yICR7Z2VvS2V5fWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdlb0tleURpcmVjdG9yeS5wdXNoKEtleUlELCBUSUZGVGFnTG9jYXRpb24sIENvdW50LCB2YWx1ZU9mZnNldCk7XG4gICAgICAgICAgICB2YWxpZEtleXMrKztcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdyaXRlIEdlb0tleURpcmVjdG9yeSwgR2VvQXNjaWlQYXJhbXMsIEdlb0RvdWJsZVBhcmFtc1xuICAgICAgICBHZW9LZXlEaXJlY3RvcnlbM10gPSB2YWxpZEtleXM7XG4gICAgICAgIGZpbmFsTWV0YWRhdGEuR2VvS2V5RGlyZWN0b3J5ID0gR2VvS2V5RGlyZWN0b3J5O1xuICAgICAgICBpZiAoIWZpbmFsTWV0YWRhdGEuR2VvQXNjaWlQYXJhbXMgJiYgZ2VvQXNjaWlQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmluYWxNZXRhZGF0YS5HZW9Bc2NpaVBhcmFtcyA9IGdlb0FzY2lpUGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmluYWxNZXRhZGF0YS5HZW9Eb3VibGVQYXJhbXMgJiYgZ2VvRG91YmxlUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpbmFsTWV0YWRhdGEuR2VvRG91YmxlUGFyYW1zID0gZ2VvRG91YmxlUGFyYW1zO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsZWFudXAgb3JpZ2luYWwgR2VvS2V5cyBtZXRhZGF0YSwgYmVjYXVzZSBzdG9yZWQgaW4gR2VvS2V5RGlyZWN0b3J5IHRhZ1xuICAgIGZvciAoY29uc3QgZ2VvS2V5IG9mIGdlb0tleXMpIHtcbiAgICAgICAgaWYgKGZpbmFsTWV0YWRhdGEuaGFzT3duUHJvcGVydHkoZ2VvS2V5KSkge1xuICAgICAgICAgICAgZGVsZXRlIGZpbmFsTWV0YWRhdGFbIC8qKiBAdHlwZSB7a2V5b2YgaW1wb3J0KCcuL2dlb3RpZmYuanMnKS5HZW90aWZmV3JpdGVyTWV0YWRhdGF9ICovKGdlb0tleSldO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7Y29uc3R9ICovIChbXG4gICAgICAgICdDb21wcmVzc2lvbicsXG4gICAgICAgICdFeHRyYVNhbXBsZXMnLFxuICAgICAgICAnR2VvZ3JhcGhpY1R5cGVHZW9LZXknLFxuICAgICAgICAnR1RNb2RlbFR5cGVHZW9LZXknLFxuICAgICAgICAnR1RSYXN0ZXJUeXBlR2VvS2V5JyxcbiAgICAgICAgJ0ltYWdlTGVuZ3RoJywgLy8gc3lub255bSBvZiBJbWFnZUhlaWdodFxuICAgICAgICAnSW1hZ2VXaWR0aCcsXG4gICAgICAgICdPcmllbnRhdGlvbicsXG4gICAgICAgICdQaG90b21ldHJpY0ludGVycHJldGF0aW9uJyxcbiAgICAgICAgJ1Byb2plY3RlZENTVHlwZUdlb0tleScsXG4gICAgICAgICdQbGFuYXJDb25maWd1cmF0aW9uJyxcbiAgICAgICAgJ1Jlc29sdXRpb25Vbml0JyxcbiAgICAgICAgJ1NhbXBsZXNQZXJQaXhlbCcsXG4gICAgICAgICdYUG9zaXRpb24nLFxuICAgICAgICAnWVBvc2l0aW9uJyxcbiAgICAgICAgJ1Jvd3NQZXJTdHJpcCcsXG4gICAgXSkuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAoZmluYWxNZXRhZGF0YVtuYW1lXSkge1xuICAgICAgICAgICAgZmluYWxNZXRhZGF0YVtuYW1lXSA9IHRvQXJyYXkoZmluYWxNZXRhZGF0YVtuYW1lXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBlbmNvZGVkTWV0YWRhdGEgPSBjb252ZXJ0VG9UaWRzKGZpbmFsTWV0YWRhdGEpO1xuICAgIGNvbnN0IG91dHB1dEltYWdlID0gZW5jb2RlSW1hZ2UoZmxhdHRlbmVkVmFsdWVzLCB3aWR0aCwgaGVpZ2h0LCBlbmNvZGVkTWV0YWRhdGEpO1xuICAgIHJldHVybiBvdXRwdXRJbWFnZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlb3RpZmZ3cml0ZXIuanMubWFwIiwiLyoqIEBpbXBvcnQge1R5cGVkQXJyYXl9IGZyb20gJy4vZ2VvdGlmZi5qcycgKi9cbmV4cG9ydCBjb25zdCBmaWVsZFR5cGVzID0ge1xuICAgIEJZVEU6IC8qKiBAdHlwZSB7MX0gKi8gKDB4MDAwMSksXG4gICAgQVNDSUk6IC8qKiBAdHlwZSB7Mn0gKi8gKDB4MDAwMiksXG4gICAgU0hPUlQ6IC8qKiBAdHlwZSB7M30gKi8gKDB4MDAwMyksXG4gICAgTE9ORzogLyoqIEB0eXBlIHs0fSAqLyAoMHgwMDA0KSxcbiAgICBSQVRJT05BTDogLyoqIEB0eXBlIHs1fSAqLyAoMHgwMDA1KSxcbiAgICBTQllURTogLyoqIEB0eXBlIHs2fSAqLyAoMHgwMDA2KSxcbiAgICBVTkRFRklORUQ6IC8qKiBAdHlwZSB7N30gKi8gKDB4MDAwNyksXG4gICAgU1NIT1JUOiAvKiogQHR5cGUgezh9ICovICgweDAwMDgpLFxuICAgIFNMT05HOiAvKiogQHR5cGUgezl9ICovICgweDAwMDkpLFxuICAgIFNSQVRJT05BTDogLyoqIEB0eXBlIHsxMH0gKi8gKDB4MDAwYSksXG4gICAgRkxPQVQ6IC8qKiBAdHlwZSB7MTF9ICovICgweDAwMGIpLFxuICAgIERPVUJMRTogLyoqIEB0eXBlIHsxMn0gKi8gKDB4MDAwYyksXG4gICAgLy8gSUZEIG9mZnNldCwgc3VnZ2VzdGVkIGJ5IGh0dHBzOi8vb3dsLnBoeS5xdWVlbnN1LmNhL35waGlsL2V4aWZ0b29sL3N0YW5kYXJkcy5odG1sXG4gICAgSUZEOiAvKiogQHR5cGUgezEzfSAqLyAoMHgwMDBkKSxcbiAgICAvLyBpbnRyb2R1Y2VkIGJ5IEJpZ1RJRkZcbiAgICBMT05HODogLyoqIEB0eXBlIHsxNn0gKi8gKDB4MDAxMCksXG4gICAgU0xPTkc4OiAvKiogQHR5cGUgezE3fSAqLyAoMHgwMDExKSxcbiAgICBJRkQ4OiAvKiogQHR5cGUgezE4fSAqLyAoMHgwMDEyKSxcbn07XG4vKiogQHR5cGVkZWYge2tleW9mIGZpZWxkVHlwZXN9IEZpZWxkVHlwZU5hbWUgKi9cbi8qKiBAdHlwZWRlZiB7ZmllbGRUeXBlc1trZXlvZiB0eXBlb2YgZmllbGRUeXBlc119IEZpZWxkVHlwZSAqL1xuLyoqIEB0eXBlZGVmIHtSZWNvcmQ8RmllbGRUeXBlTmFtZSwgbnVtYmVyPn0gRmllbGRUeXBlU2l6ZXMgKi9cbmV4cG9ydCBjb25zdCBmaWVsZFR5cGVTaXplcyA9IC8qKiBAdHlwZSB7Y29uc3R9ICovICh7XG4gICAgW2ZpZWxkVHlwZXMuQllURV06IDEsXG4gICAgW2ZpZWxkVHlwZXMuQVNDSUldOiAxLFxuICAgIFtmaWVsZFR5cGVzLlNCWVRFXTogMSxcbiAgICBbZmllbGRUeXBlcy5VTkRFRklORURdOiAxLFxuICAgIFtmaWVsZFR5cGVzLlNIT1JUXTogMixcbiAgICBbZmllbGRUeXBlcy5TU0hPUlRdOiAyLFxuICAgIFtmaWVsZFR5cGVzLkxPTkddOiA0LFxuICAgIFtmaWVsZFR5cGVzLlNMT05HXTogNCxcbiAgICBbZmllbGRUeXBlcy5GTE9BVF06IDQsXG4gICAgW2ZpZWxkVHlwZXMuSUZEXTogNCxcbiAgICBbZmllbGRUeXBlcy5SQVRJT05BTF06IDgsXG4gICAgW2ZpZWxkVHlwZXMuU1JBVElPTkFMXTogOCxcbiAgICBbZmllbGRUeXBlcy5ET1VCTEVdOiA4LFxuICAgIFtmaWVsZFR5cGVzLkxPTkc4XTogOCxcbiAgICBbZmllbGRUeXBlcy5TTE9ORzhdOiA4LFxuICAgIFtmaWVsZFR5cGVzLklGRDhdOiA4LFxufSk7XG4vKiogQHR5cGVkZWYge2ZpZWxkVHlwZVNpemVzW2tleW9mIHR5cGVvZiBmaWVsZFR5cGVTaXplc119IEZpZWxkVHlwZVNpemUgKi9cbi8qKlxuICogR2V0IHRoZSBieXRlIHNpemUgZm9yIGEgZ2l2ZW4gZmllbGQgdHlwZS5cbiAqIEBwYXJhbSB7RmllbGRUeXBlfSBmaWVsZFR5cGUgVGhlIFRJRkYgZmllbGQgdHlwZSBjb25zdGFudFxuICogQHJldHVybnMge251bWJlcn0gVGhlIHNpemUgaW4gYnl0ZXNcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIHRoZSBmaWVsZCB0eXBlIGlzIGludmFsaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkVHlwZVNpemUoZmllbGRUeXBlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkVHlwZVNpemVzW2ZpZWxkVHlwZV07XG4gICAgaWYgKHNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCBmaWVsZCB0eXBlOiAke2ZpZWxkVHlwZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRhZ0RpY3Rpb25hcnlFbnRyeVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRhZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtuYW1lXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbaXNBcnJheV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2VhZ2VyXVxuICovXG5leHBvcnQgY29uc3QgdGFnRGljdGlvbmFyeSA9IC8qKiBAdHlwZSB7Y29uc3R9ICovICh7XG4gICAgTmV3U3ViZmlsZVR5cGU6IHsgdGFnOiAyNTQsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgZWFnZXI6IHRydWUgfSxcbiAgICBTdWJmaWxlVHlwZTogeyB0YWc6IDI1NSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBJbWFnZVdpZHRoOiB7IHRhZzogMjU2LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIEltYWdlTGVuZ3RoOiB7IHRhZzogMjU3LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBlYWdlcjogdHJ1ZSB9LFxuICAgIEJpdHNQZXJTYW1wbGU6IHsgdGFnOiAyNTgsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgQ29tcHJlc3Npb246IHsgdGFnOiAyNTksIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbjogeyB0YWc6IDI2MiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBUaHJlc2hob2xkaW5nOiB7IHRhZzogMjYzLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgQ2VsbFdpZHRoOiB7IHRhZzogMjY0LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JUIH0sXG4gICAgQ2VsbExlbmd0aDogeyB0YWc6IDI2NSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIEZpbGxPcmRlcjogeyB0YWc6IDI2NiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIERvY3VtZW50TmFtZTogeyB0YWc6IDI2OSwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIEltYWdlRGVzY3JpcHRpb246IHsgdGFnOiAyNzAsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBNYWtlOiB7IHRhZzogMjcxLCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgTW9kZWw6IHsgdGFnOiAyNzIsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBTdHJpcE9mZnNldHM6IHsgdGFnOiAyNzMsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBPcmllbnRhdGlvbjogeyB0YWc6IDI3NCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIFNhbXBsZXNQZXJQaXhlbDogeyB0YWc6IDI3NywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBSb3dzUGVyU3RyaXA6IHsgdGFnOiAyNzgsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgU3RyaXBCeXRlQ291bnRzOiB7IHRhZzogMjc5LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBNaW5TYW1wbGVWYWx1ZTogeyB0YWc6IDI4MCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIE1heFNhbXBsZVZhbHVlOiB7IHRhZzogMjgxLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgWFJlc29sdXRpb246IHsgdGFnOiAyODIsIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwgfSxcbiAgICBZUmVzb2x1dGlvbjogeyB0YWc6IDI4MywgdHlwZTogZmllbGRUeXBlcy5SQVRJT05BTCB9LFxuICAgIFBsYW5hckNvbmZpZ3VyYXRpb246IHsgdGFnOiAyODQsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgUGFnZU5hbWU6IHsgdGFnOiAyODUsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBYUG9zaXRpb246IHsgdGFnOiAyODYsIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwgfSxcbiAgICBZUG9zaXRpb246IHsgdGFnOiAyODcsIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwgfSxcbiAgICBGcmVlT2Zmc2V0czogeyB0YWc6IDI4OCwgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgRnJlZUJ5dGVDb3VudHM6IHsgdGFnOiAyODksIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIEdyYXlSZXNwb25zZVVuaXQ6IHsgdGFnOiAyOTAsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBHcmF5UmVzcG9uc2VDdXJ2ZTogeyB0YWc6IDI5MSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFQ0T3B0aW9uczogeyB0YWc6IDI5MiwgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgVDZPcHRpb25zOiB7IHRhZzogMjkzLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBSZXNvbHV0aW9uVW5pdDogeyB0YWc6IDI5NiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIFBhZ2VOdW1iZXI6IHsgdGFnOiAyOTcsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBUcmFuc2ZlckZ1bmN0aW9uOiB7IHRhZzogMzAxLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgU29mdHdhcmU6IHsgdGFnOiAzMDUsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUkgfSxcbiAgICBEYXRlVGltZTogeyB0YWc6IDMwNiwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIEFydGlzdDogeyB0YWc6IDMxNSwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIEhvc3RDb21wdXRlcjogeyB0YWc6IDMxNiwgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIFByZWRpY3RvcjogeyB0YWc6IDMxNywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIFdoaXRlUG9pbnQ6IHsgdGFnOiAzMTgsIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBQcmltYXJ5Q2hyb21hdGljaXRpZXM6IHsgdGFnOiAzMTksIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBDb2xvck1hcDogeyB0YWc6IDMyMCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIEhhbGZ0b25lSGludHM6IHsgdGFnOiAzMjEsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBUaWxlV2lkdGg6IHsgdGFnOiAzMjIsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGVhZ2VyOiB0cnVlIH0sXG4gICAgVGlsZUxlbmd0aDogeyB0YWc6IDMyMywgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgZWFnZXI6IHRydWUgfSxcbiAgICBUaWxlT2Zmc2V0czogeyB0YWc6IDMyNCwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgVGlsZUJ5dGVDb3VudHM6IHsgdGFnOiAzMjUsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBJbmtTZXQ6IHsgdGFnOiAzMzIsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBJbmtOYW1lczogeyB0YWc6IDMzMywgdHlwZTogZmllbGRUeXBlcy5BU0NJSSB9LFxuICAgIE51bWJlck9mSW5rczogeyB0YWc6IDMzNCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIERvdFJhbmdlOiB7IHRhZzogMzM2LCB0eXBlOiBmaWVsZFR5cGVzLkJZVEUsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBUYXJnZXRQcmludGVyOiB7IHRhZzogMzM3LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgRXh0cmFTYW1wbGVzOiB7IHRhZzogMzM4LCB0eXBlOiBmaWVsZFR5cGVzLkJZVEUsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgU2FtcGxlRm9ybWF0OiB7IHRhZzogMzM5LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIFNNaW5TYW1wbGVWYWx1ZTogeyB0YWc6IDM0MCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFNNYXhTYW1wbGVWYWx1ZTogeyB0YWc6IDM0MSwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFRyYW5zZmVyUmFuZ2U6IHsgdGFnOiAzNDIsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBKUEVHUHJvYzogeyB0YWc6IDUxMiwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIEpQRUdJbnRlcmNoYW5nZUZvcm1hdDogeyB0YWc6IDUxMywgdHlwZTogZmllbGRUeXBlcy5MT05HIH0sXG4gICAgSlBFR0ludGVyY2hhbmdlRm9ybWF0TG5ndGg6IHsgdGFnOiA1MTQsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORyB9LFxuICAgIEpQRUdSZXN0YXJ0SW50ZXJ2YWw6IHsgdGFnOiA1MTUsIHR5cGU6IGZpZWxkVHlwZXMuU0hPUlQgfSxcbiAgICBKUEVHTG9zc2xlc3NQcmVkaWN0b3JzOiB7IHRhZzogNTE3LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgSlBFR1BvaW50VHJhbnNmb3JtczogeyB0YWc6IDUxOCwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIEpQRUdRVGFibGVzOiB7IHRhZzogNTE5LCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBKUEVHRENUYWJsZXM6IHsgdGFnOiA1MjAsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgaXNBcnJheTogdHJ1ZSB9LFxuICAgIEpQRUdBQ1RhYmxlczogeyB0YWc6IDUyMSwgdHlwZTogZmllbGRUeXBlcy5MT05HLCBpc0FycmF5OiB0cnVlIH0sXG4gICAgWUNiQ3JDb2VmZmljaWVudHM6IHsgdGFnOiA1MjksIHR5cGU6IGZpZWxkVHlwZXMuUkFUSU9OQUwsIGlzQXJyYXk6IHRydWUgfSxcbiAgICBZQ2JDclN1YlNhbXBsaW5nOiB7IHRhZzogNTMwLCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlIH0sXG4gICAgWUNiQ3JQb3NpdGlvbmluZzogeyB0YWc6IDUzMSwgdHlwZTogZmllbGRUeXBlcy5TSE9SVCB9LFxuICAgIFJlZmVyZW5jZUJsYWNrV2hpdGU6IHsgdGFnOiA1MzIsIHR5cGU6IGZpZWxkVHlwZXMuTE9ORywgaXNBcnJheTogdHJ1ZSB9LFxuICAgIENvcHlyaWdodDogeyB0YWc6IDMzNDMyLCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJIH0sXG4gICAgQmFkRmF4TGluZXM6IHsgdGFnOiAzMjYgfSxcbiAgICBDbGVhbkZheERhdGE6IHsgdGFnOiAzMjcgfSxcbiAgICBDbGlwUGF0aDogeyB0YWc6IDM0MyB9LFxuICAgIENvbnNlY3V0aXZlQmFkRmF4TGluZXM6IHsgdGFnOiAzMjggfSxcbiAgICBEZWNvZGU6IHsgdGFnOiA0MzMgfSxcbiAgICBEZWZhdWx0SW1hZ2VDb2xvcjogeyB0YWc6IDQzNCB9LFxuICAgIEluZGV4ZWQ6IHsgdGFnOiAzNDYgfSxcbiAgICBKUEVHVGFibGVzOiB7IHRhZzogMzQ3LCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIFN0cmlwUm93Q291bnRzOiB7IHRhZzogNTU5LCBpc0FycmF5OiB0cnVlIH0sXG4gICAgU3ViSUZEczogeyB0YWc6IDMzMCwgaXNBcnJheTogdHJ1ZSB9LFxuICAgIFhDbGlwUGF0aFVuaXRzOiB7IHRhZzogMzQ0IH0sXG4gICAgWUNsaXBQYXRoVW5pdHM6IHsgdGFnOiAzNDUgfSxcbiAgICBBcGVydHVyZVZhbHVlOiB7IHRhZzogMzczNzggfSxcbiAgICBDb2xvclNwYWNlOiB7IHRhZzogNDA5NjEgfSxcbiAgICBEYXRlVGltZURpZ2l0aXplZDogeyB0YWc6IDM2ODY4IH0sXG4gICAgRGF0ZVRpbWVPcmlnaW5hbDogeyB0YWc6IDM2ODY3IH0sXG4gICAgRXhpZklGRDogeyB0YWc6IDM0NjY1LCBuYW1lOiAnRXhpZiBJRkQnLCB0eXBlOiBmaWVsZFR5cGVzLkxPTkcgfSxcbiAgICBFeGlmVmVyc2lvbjogeyB0YWc6IDM2ODY0IH0sXG4gICAgRXhwb3N1cmVUaW1lOiB7IHRhZzogMzM0MzQgfSxcbiAgICBGaWxlU291cmNlOiB7IHRhZzogNDE3MjggfSxcbiAgICBGbGFzaDogeyB0YWc6IDM3Mzg1IH0sXG4gICAgRmxhc2hwaXhWZXJzaW9uOiB7IHRhZzogNDA5NjAgfSxcbiAgICBGTnVtYmVyOiB7IHRhZzogMzM0MzcgfSxcbiAgICBJbWFnZVVuaXF1ZUlEOiB7IHRhZzogNDIwMTYgfSxcbiAgICBMaWdodFNvdXJjZTogeyB0YWc6IDM3Mzg0IH0sXG4gICAgTWFrZXJOb3RlOiB7IHRhZzogMzc1MDAgfSxcbiAgICBTaHV0dGVyU3BlZWRWYWx1ZTogeyB0YWc6IDM3Mzc3IH0sXG4gICAgVXNlckNvbW1lbnQ6IHsgdGFnOiAzNzUxMCB9LFxuICAgIElQVEM6IHsgdGFnOiAzMzcyMyB9LFxuICAgIENaX0xTTUlORk86IHsgdGFnOiAzNDQxMiB9LFxuICAgIElDQ1Byb2ZpbGU6IHsgdGFnOiAzNDY3NSwgbmFtZTogJ0lDQyBQcm9maWxlJyB9LFxuICAgIFhNUDogeyB0YWc6IDcwMCB9LFxuICAgIEdEQUxfTUVUQURBVEE6IHsgdGFnOiA0MjExMiB9LFxuICAgIEdEQUxfTk9EQVRBOiB7IHRhZzogNDIxMTMsIHR5cGU6IGZpZWxkVHlwZXMuQVNDSUksIGVhZ2VyOiB0cnVlIH0sXG4gICAgUGhvdG9zaG9wOiB7IHRhZzogMzQzNzcgfSxcbiAgICBNb2RlbFBpeGVsU2NhbGU6IHsgdGFnOiAzMzU1MCwgdHlwZTogZmllbGRUeXBlcy5ET1VCTEUsIGlzQXJyYXk6IHRydWUsIGVhZ2VyOiB0cnVlIH0sXG4gICAgTW9kZWxUaWVwb2ludDogeyB0YWc6IDMzOTIyLCB0eXBlOiBmaWVsZFR5cGVzLkRPVUJMRSwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBNb2RlbFRyYW5zZm9ybWF0aW9uOiB7IHRhZzogMzQyNjQsIHR5cGU6IGZpZWxkVHlwZXMuRE9VQkxFLCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIEdlb0tleURpcmVjdG9yeTogeyB0YWc6IDM0NzM1LCB0eXBlOiBmaWVsZFR5cGVzLlNIT1JULCBpc0FycmF5OiB0cnVlLCBlYWdlcjogdHJ1ZSB9LFxuICAgIEdlb0RvdWJsZVBhcmFtczogeyB0YWc6IDM0NzM2LCB0eXBlOiBmaWVsZFR5cGVzLkRPVUJMRSwgaXNBcnJheTogdHJ1ZSwgZWFnZXI6IHRydWUgfSxcbiAgICBHZW9Bc2NpaVBhcmFtczogeyB0YWc6IDM0NzM3LCB0eXBlOiBmaWVsZFR5cGVzLkFTQ0lJLCBlYWdlcjogdHJ1ZSB9LFxuICAgIExlcmNQYXJhbWV0ZXJzOiB7IHRhZzogNTA2NzQsIGVhZ2VyOiB0cnVlIH0sXG59KTtcbi8qKiBAdHlwZWRlZiB7a2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnl9IFRhZ05hbWUgKi9cbi8qKiBAdHlwZWRlZiB7dHlwZW9mIHRhZ0RpY3Rpb25hcnlba2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnldWyd0YWcnXX0gVGFnICovXG4vKipcbiAqIEB0eXBlZGVmIHtFeHRyYWN0PGtleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5LFxuICogICB7IFtLIGluIGtleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5XTogKHR5cGVvZiB0YWdEaWN0aW9uYXJ5KVtLXSBleHRlbmRzIHsgZWFnZXI6IHRydWUgfVxuICogICA/IEsgOiBuZXZlciB9W2tleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5XT59IEVhZ2VyVGFnTmFtZVxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtFeHRyYWN0PFRhZywgeyBbSyBpbiBrZXlvZiB0eXBlb2YgdGFnRGljdGlvbmFyeV06ICh0eXBlb2YgdGFnRGljdGlvbmFyeSlbS10gZXh0ZW5kcyB7IGVhZ2VyOiB0cnVlIH1cbiAqICAgPyAodHlwZW9mIHRhZ0RpY3Rpb25hcnkpW0tdWyd0YWcnXSA6IG5ldmVyIH1ba2V5b2YgdHlwZW9mIHRhZ0RpY3Rpb25hcnldPn0gRWFnZXJUYWdcbiAqL1xuLyoqIEB0eXBlZGVmIHtFeHRyYWN0PHR5cGVvZiB0YWdEaWN0aW9uYXJ5W2tleW9mIHR5cGVvZiB0YWdEaWN0aW9uYXJ5XSwge3R5cGU6IGFueX0+Wyd0eXBlJ119IFRhZ1R5cGUgKi9cbi8qKlxuICogQHRlbXBsYXRlIHtudW1iZXJ9IFRcbiAqIEB0eXBlZGVmIHtUIGV4dGVuZHMgMiA/IHN0cmluZyA6IG51bWJlcn0gR2VvVGlmZlByaW1pdGl2ZVxuICovXG4vKipcbiAqIEB0ZW1wbGF0ZSB7VGFnTmFtZX0gVFxuICogQHR5cGVkZWYge3R5cGVvZiB0YWdEaWN0aW9uYXJ5W1RdfSBUYWdEZWZcbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAxOiBudW1iZXI7XG4gKiAgIDI6IHN0cmluZztcbiAqICAgMzogbnVtYmVyO1xuICogICA0OiBudW1iZXI7XG4gKiAgIDU6IG51bWJlcjtcbiAqICAgNjogbnVtYmVyO1xuICogICA3OiBBcnJheUJ1ZmZlcjtcbiAqICAgODogbnVtYmVyO1xuICogICA5OiBudW1iZXI7XG4gKiAgIDEwOiBudW1iZXI7XG4gKiAgIDExOiBudW1iZXI7XG4gKiAgIDEyOiBudW1iZXI7XG4gKiAgIDE2OiBudW1iZXI7XG4gKiAgIDE3OiBudW1iZXI7XG4gKiAgIDE4OiBudW1iZXI7XG4gKiB9fSBGaWVsZFR5cGVNYXBcbiAqL1xuLyoqXG4gKiBAdGVtcGxhdGUge1RhZ05hbWV9IFRcbiAqIEB0eXBlZGVmIHtUYWdEZWY8VD4gZXh0ZW5kcyB7IGlzQXJyYXk6IHRydWUgfVxuICogICA/IChUYWdEZWY8VD4gZXh0ZW5kcyB7IHR5cGU6IHR5cGVvZiBmaWVsZFR5cGVzLkRPVUJMRSB9ID8gbnVtYmVyW10gOlxuICogICAgICBUYWdEZWY8VD4gZXh0ZW5kcyB7IHR5cGU6IHR5cGVvZiBmaWVsZFR5cGVzLkFTQ0lJIH0gPyBzdHJpbmdbXSA6XG4gKiAgICAgIFRhZ0RlZjxUPiBleHRlbmRzIHsgdHlwZTogdHlwZW9mIGZpZWxkVHlwZXMuQllURSB8IHR5cGVvZiBmaWVsZFR5cGVzLlNCWVRFIHwgdHlwZW9mIGZpZWxkVHlwZXMuVU5ERUZJTkVEIH1cbiAqICAgICAgICA/IFVpbnQ4QXJyYXkgfCBJbnQ4QXJyYXkgOlxuICogICAgICAobnVtYmVyW10gfCBUeXBlZEFycmF5KSlcbiAqICAgOiAoVGFnRGVmPFQ+IGV4dGVuZHMgeyB0eXBlOiBrZXlvZiBGaWVsZFR5cGVNYXAgfSA/IEZpZWxkVHlwZU1hcFtUYWdEZWY8VD5bJ3R5cGUnXV0gOiBhbnkpfSBUYWdWYWx1ZVxuICovXG4vKipcbiAqIE1hcHMgdGFnIG5hbWVzIHRvIHRoZWlyIG51bWVyaWMgdmFsdWVzXG4gKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgbnVtYmVyPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHRhZ3MgPSB7fTtcbi8qKlxuICogTWFwcyB0YWcgbnVtYmVycyB0byB0aGVpciBkZWZpbml0aW9uc1xuICogQHR5cGUge1JlY29yZDxudW1iZXIsIHsgdGFnOiBudW1iZXIsIG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nfG51bWJlcnx1bmRlZmluZWQsIGlzQXJyYXk6IGJvb2xlYW4sIGVhZ2VyOiBib29sZWFuIH0+fVxuICovXG5leHBvcnQgY29uc3QgdGFnRGVmaW5pdGlvbnMgPSB7fTtcbi8qKlxuICogUmVnaXN0ZXJzIGEgbmV3IGZpZWxkIHRhZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRhZyB0aGUgbnVtZXJpYyB0aWZmIHRhZ1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IHdpbGwgYmUgcmVwb3J0ZWQgaW4gdGhlIElGRFxuICogQHBhcmFtIHtrZXlvZiBmaWVsZFR5cGVzfG51bWJlcnx1bmRlZmluZWR9IHR5cGUgdGhlIHRhZ3MgZGF0YSB0eXBlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzQXJyYXkgd2hldGhlciB0aGUgdGFnIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtlYWdlcj1mYWxzZV0gd2hldGhlciB0byBlYWdlcmx5IGZldGNoIGRlZmVycmVkIGZpZWxkcy5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBmYWxzZSAoZGVmYXVsdCksIHRhZ3MgYXJlIGxvYWRlZCBsYXppbHkgb24tZGVtYW5kLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRydWUsIGFsbCB0YWdzIGFyZSBsb2FkZWQgaW1tZWRpYXRlbHkgZHVyaW5nIHBhcnNpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclRhZyh0YWcsIG5hbWUsIHR5cGUsIGlzQXJyYXkgPSBmYWxzZSwgZWFnZXIgPSBmYWxzZSkge1xuICAgIHRhZ3NbbmFtZV0gPSB0YWc7XG4gICAgdGFnRGVmaW5pdGlvbnNbdGFnXSA9IHsgdGFnLCBuYW1lLCB0eXBlOiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyBmaWVsZFR5cGVzW3R5cGVdIDogdHlwZSwgaXNBcnJheSwgZWFnZXIgfTtcbn1cbmZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRhZ0RpY3Rpb25hcnkpKSB7XG4gICAgY29uc3QgZW50cnkgPSAvKiogQHR5cGUge1RhZ0RpY3Rpb25hcnlFbnRyeX0gKi8gKHZhbHVlKTtcbiAgICByZWdpc3RlclRhZyhlbnRyeS50YWcsIGVudHJ5Lm5hbWUgfHwga2V5LCBlbnRyeS50eXBlLCBlbnRyeS5pc0FycmF5LCBlbnRyeS5lYWdlcik7XG59XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdGFnSWRlbnRpZmllciBUaGUgZmllbGQgdGFnIElEIG9yIG5hbWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSByZXNvbHZlZCB0YWcgSURcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVUYWcodGFnSWRlbnRpZmllcikge1xuICAgIGlmICh0eXBlb2YgdGFnSWRlbnRpZmllciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHRhZ0lkZW50aWZpZXI7XG4gICAgfVxuICAgIHJldHVybiB0YWdzW3RhZ0lkZW50aWZpZXJdO1xufVxuLyoqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHRhZ0lkZW50aWZpZXIgVGhlIGZpZWxkIHRhZyBJRCBvciBuYW1lXG4gKiBAcmV0dXJucyB7eyB0YWc6IG51bWJlciwgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmd8bnVtYmVyfHVuZGVmaW5lZCwgaXNBcnJheTogYm9vbGVhbiwgZWFnZXI6IGJvb2xlYW4gfX0gdGhlIHRhZyBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWcodGFnSWRlbnRpZmllcikge1xuICAgIHJldHVybiB0YWdEZWZpbml0aW9uc1tyZXNvbHZlVGFnKHRhZ0lkZW50aWZpZXIpXTtcbn1cbmV4cG9ydCBjb25zdCBmaWVsZFRhZ1R5cGVzID0ge1xuICAgIDI1NjogJ1NIT1JUJyxcbiAgICAyNTc6ICdTSE9SVCcsXG4gICAgMjU4OiAnU0hPUlQnLFxuICAgIDI1OTogJ1NIT1JUJyxcbiAgICAyNjI6ICdTSE9SVCcsXG4gICAgMjcwOiAnQVNDSUknLFxuICAgIDI3MTogJ0FTQ0lJJyxcbiAgICAyNzI6ICdBU0NJSScsXG4gICAgMjczOiAnTE9ORycsXG4gICAgMjc0OiAnU0hPUlQnLFxuICAgIDI3NzogJ1NIT1JUJyxcbiAgICAyNzg6ICdMT05HJyxcbiAgICAyNzk6ICdMT05HJyxcbiAgICAyODI6ICdSQVRJT05BTCcsXG4gICAgMjgzOiAnUkFUSU9OQUwnLFxuICAgIDI4NDogJ1NIT1JUJyxcbiAgICAyODY6ICdTSE9SVCcsXG4gICAgMjg3OiAnUkFUSU9OQUwnLFxuICAgIDI5NjogJ1NIT1JUJyxcbiAgICAyOTc6ICdTSE9SVCcsXG4gICAgMzA1OiAnQVNDSUknLFxuICAgIDMwNjogJ0FTQ0lJJyxcbiAgICAzMTU6ICdBU0NJSScsXG4gICAgMzM4OiAnU0hPUlQnLFxuICAgIDMzOTogJ1NIT1JUJyxcbiAgICA1MTM6ICdMT05HJyxcbiAgICA1MTQ6ICdMT05HJyxcbiAgICAxMDI0OiAnU0hPUlQnLFxuICAgIDEwMjU6ICdTSE9SVCcsXG4gICAgMTAyNjogJ0FTQ0lJJyxcbiAgICAyMDQ4OiAnU0hPUlQnLFxuICAgIDIwNDk6ICdBU0NJSScsXG4gICAgMjA1MjogJ1NIT1JUJyxcbiAgICAyMDU0OiAnU0hPUlQnLFxuICAgIDIwNTc6ICdET1VCTEUnLFxuICAgIDIwNTk6ICdET1VCTEUnLFxuICAgIDIwNjA6ICdTSE9SVCcsXG4gICAgMzA3MjogJ1NIT1JUJyxcbiAgICAzMDczOiAnQVNDSUknLFxuICAgIDMwNzY6ICdTSE9SVCcsXG4gICAgNDA5NjogJ1NIT1JUJyxcbiAgICA0MDk3OiAnQVNDSUknLFxuICAgIDQwOTk6ICdTSE9SVCcsXG4gICAgMzM0MzI6ICdBU0NJSScsXG4gICAgMzM1NTA6ICdET1VCTEUnLFxuICAgIDMzOTIyOiAnRE9VQkxFJyxcbiAgICAzNDI2NDogJ0RPVUJMRScsXG4gICAgMzQ2NjU6ICdMT05HJyxcbiAgICAzNDczNTogJ1NIT1JUJyxcbiAgICAzNDczNjogJ0RPVUJMRScsXG4gICAgMzQ3Mzc6ICdBU0NJSScsXG4gICAgNDIxMTM6ICdBU0NJSScsXG59O1xuZXhwb3J0IGNvbnN0IHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb25zID0ge1xuICAgIFdoaXRlSXNaZXJvOiAwLFxuICAgIEJsYWNrSXNaZXJvOiAxLFxuICAgIFJHQjogMixcbiAgICBQYWxldHRlOiAzLFxuICAgIFRyYW5zcGFyZW5jeU1hc2s6IDQsXG4gICAgQ01ZSzogNSxcbiAgICBZQ2JDcjogNixcbiAgICBDSUVMYWI6IDgsXG4gICAgSUNDTGFiOiA5LFxufTtcbmV4cG9ydCBjb25zdCBFeHRyYVNhbXBsZXNWYWx1ZXMgPSB7XG4gICAgVW5zcGVjaWZpZWQ6IDAsXG4gICAgQXNzb2NhbHBoYTogMSxcbiAgICBVbmFzc2FscGhhOiAyLFxufTtcbmV4cG9ydCBjb25zdCBMZXJjUGFyYW1ldGVycyA9IHtcbiAgICBWZXJzaW9uOiAwLFxuICAgIEFkZENvbXByZXNzaW9uOiAxLFxufTtcbmV4cG9ydCBjb25zdCBMZXJjQWRkQ29tcHJlc3Npb24gPSB7XG4gICAgTm9uZTogMCxcbiAgICBEZWZsYXRlOiAxLFxuICAgIFpzdGFuZGFyZDogMixcbn07XG5leHBvcnQgY29uc3QgZ2VvS2V5TmFtZXMgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoe1xuICAgIDEwMjQ6ICdHVE1vZGVsVHlwZUdlb0tleScsXG4gICAgMTAyNTogJ0dUUmFzdGVyVHlwZUdlb0tleScsXG4gICAgMTAyNjogJ0dUQ2l0YXRpb25HZW9LZXknLFxuICAgIDIwNDg6ICdHZW9ncmFwaGljVHlwZUdlb0tleScsXG4gICAgMjA0OTogJ0dlb2dDaXRhdGlvbkdlb0tleScsXG4gICAgMjA1MDogJ0dlb2dHZW9kZXRpY0RhdHVtR2VvS2V5JyxcbiAgICAyMDUxOiAnR2VvZ1ByaW1lTWVyaWRpYW5HZW9LZXknLFxuICAgIDIwNTI6ICdHZW9nTGluZWFyVW5pdHNHZW9LZXknLFxuICAgIDIwNTM6ICdHZW9nTGluZWFyVW5pdFNpemVHZW9LZXknLFxuICAgIDIwNTQ6ICdHZW9nQW5ndWxhclVuaXRzR2VvS2V5JyxcbiAgICAyMDU1OiAnR2VvZ0FuZ3VsYXJVbml0U2l6ZUdlb0tleScsXG4gICAgMjA1NjogJ0dlb2dFbGxpcHNvaWRHZW9LZXknLFxuICAgIDIwNTc6ICdHZW9nU2VtaU1ham9yQXhpc0dlb0tleScsXG4gICAgMjA1ODogJ0dlb2dTZW1pTWlub3JBeGlzR2VvS2V5JyxcbiAgICAyMDU5OiAnR2VvZ0ludkZsYXR0ZW5pbmdHZW9LZXknLFxuICAgIDIwNjA6ICdHZW9nQXppbXV0aFVuaXRzR2VvS2V5JyxcbiAgICAyMDYxOiAnR2VvZ1ByaW1lTWVyaWRpYW5Mb25nR2VvS2V5JyxcbiAgICAyMDYyOiAnR2VvZ1RPV0dTODRHZW9LZXknLFxuICAgIDMwNzI6ICdQcm9qZWN0ZWRDU1R5cGVHZW9LZXknLFxuICAgIDMwNzM6ICdQQ1NDaXRhdGlvbkdlb0tleScsXG4gICAgMzA3NDogJ1Byb2plY3Rpb25HZW9LZXknLFxuICAgIDMwNzU6ICdQcm9qQ29vcmRUcmFuc0dlb0tleScsXG4gICAgMzA3NjogJ1Byb2pMaW5lYXJVbml0c0dlb0tleScsXG4gICAgMzA3NzogJ1Byb2pMaW5lYXJVbml0U2l6ZUdlb0tleScsXG4gICAgMzA3ODogJ1Byb2pTdGRQYXJhbGxlbDFHZW9LZXknLFxuICAgIDMwNzk6ICdQcm9qU3RkUGFyYWxsZWwyR2VvS2V5JyxcbiAgICAzMDgwOiAnUHJvak5hdE9yaWdpbkxvbmdHZW9LZXknLFxuICAgIDMwODE6ICdQcm9qTmF0T3JpZ2luTGF0R2VvS2V5JyxcbiAgICAzMDgyOiAnUHJvakZhbHNlRWFzdGluZ0dlb0tleScsXG4gICAgMzA4MzogJ1Byb2pGYWxzZU5vcnRoaW5nR2VvS2V5JyxcbiAgICAzMDg0OiAnUHJvakZhbHNlT3JpZ2luTG9uZ0dlb0tleScsXG4gICAgMzA4NTogJ1Byb2pGYWxzZU9yaWdpbkxhdEdlb0tleScsXG4gICAgMzA4NjogJ1Byb2pGYWxzZU9yaWdpbkVhc3RpbmdHZW9LZXknLFxuICAgIDMwODc6ICdQcm9qRmFsc2VPcmlnaW5Ob3J0aGluZ0dlb0tleScsXG4gICAgMzA4ODogJ1Byb2pDZW50ZXJMb25nR2VvS2V5JyxcbiAgICAzMDg5OiAnUHJvakNlbnRlckxhdEdlb0tleScsXG4gICAgMzA5MDogJ1Byb2pDZW50ZXJFYXN0aW5nR2VvS2V5JyxcbiAgICAzMDkxOiAnUHJvakNlbnRlck5vcnRoaW5nR2VvS2V5JyxcbiAgICAzMDkyOiAnUHJvalNjYWxlQXROYXRPcmlnaW5HZW9LZXknLFxuICAgIDMwOTM6ICdQcm9qU2NhbGVBdENlbnRlckdlb0tleScsXG4gICAgMzA5NDogJ1Byb2pBemltdXRoQW5nbGVHZW9LZXknLFxuICAgIDMwOTU6ICdQcm9qU3RyYWlnaHRWZXJ0UG9sZUxvbmdHZW9LZXknLFxuICAgIDMwOTY6ICdQcm9qUmVjdGlmaWVkR3JpZEFuZ2xlR2VvS2V5JyxcbiAgICA0MDk2OiAnVmVydGljYWxDU1R5cGVHZW9LZXknLFxuICAgIDQwOTc6ICdWZXJ0aWNhbENpdGF0aW9uR2VvS2V5JyxcbiAgICA0MDk4OiAnVmVydGljYWxEYXR1bUdlb0tleScsXG4gICAgNDA5OTogJ1ZlcnRpY2FsVW5pdHNHZW9LZXknLFxufSk7XG4vKiogQHR5cGVkZWYge2dlb0tleU5hbWVzW2tleW9mIHR5cGVvZiBnZW9LZXlOYW1lc119IEdlb0tleU5hbWUgKi9cbi8qKlxuICogQHR5cGUge1JlY29yZDxHZW9LZXlOYW1lLCBudW1iZXI+fVxuICovXG5leHBvcnQgY29uc3QgZ2VvS2V5cyA9IC8qKiBAdHlwZSB7UmVjb3JkPEdlb0tleU5hbWUsIG51bWJlcj59ICovICh7fSk7XG5mb3IgKGNvbnN0IFtrZXksIG5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKGdlb0tleU5hbWVzKSkge1xuICAgIGdlb0tleXNbIC8qKiBAdHlwZSB7R2VvS2V5TmFtZX0gKi8obmFtZSldID0gcGFyc2VJbnQoa2V5LCAxMCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxzLmpzLm1hcCIsImltcG9ydCBEYXRhU2xpY2UgZnJvbSAnLi9kYXRhc2xpY2UuanMnO1xuaW1wb3J0IHsgZmllbGRUeXBlcywgZ2VvS2V5TmFtZXMsIHRhZ0RlZmluaXRpb25zLCByZXNvbHZlVGFnLCBnZXRGaWVsZFR5cGVTaXplLCB9IGZyb20gJy4vZ2xvYmFscy5qcyc7XG4vKipcbiAqIEFsbG9jYXRlcyBhbiBhcHByb3ByaWF0ZSBUeXBlZEFycmF5IGJhc2VkIG9uIHRoZSBUSUZGIGZpZWxkIHR5cGUuXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRUeXBlIC0gVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50IGZyb20gZmllbGRUeXBlc1xuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IC0gTnVtYmVyIG9mIGVsZW1lbnRzIHRvIGFsbG9jYXRlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj59IFRoZSBhbGxvY2F0ZWQgdHlwZWQgYXJyYXkgZm9yIHRoZSBnaXZlbiBmaWVsZCB0eXBlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiB0aGUgZmllbGQgdHlwZSBpcyBpbnZhbGlkXG4gKi9cbmZ1bmN0aW9uIGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIGNvdW50KSB7XG4gICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkJZVEU6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5BU0NJSTpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlVOREVGSU5FRDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TQllURTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNIT1JUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TU0hPUlQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDE2QXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuTE9ORzpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLklGRDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU0xPTkc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoY291bnQpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuTE9ORzg6XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5JRkQ4OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheShjb3VudCk7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TTE9ORzg6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlJBVElPTkFMOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShjb3VudCAqIDIpO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU1JBVElPTkFMOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGNvdW50ICogMik7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5GTE9BVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGNvdW50KTtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkRPVUJMRTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KGNvdW50KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBJbnZhbGlkIGZpZWxkIHR5cGU6ICR7ZmllbGRUeXBlfWApO1xuICAgIH1cbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgRGF0YVNsaWNlIHJlYWQgbWV0aG9kIGZvciBhIGdpdmVuIGZpZWxkIHR5cGUuXG4gKiBAcGFyYW0ge0RhdGFTbGljZX0gZGF0YVNsaWNlIC0gVGhlIERhdGFTbGljZSBpbnN0YW5jZSB0byBnZXQgdGhlIHJlYWRlciBmcm9tXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRUeXBlIC0gVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50IGZyb20gZmllbGRUeXBlc1xuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgYm91bmQgcmVhZCBtZXRob2QgKGUuZy4sIHJlYWRVaW50MTYsIHJlYWRGbG9hdDMyKVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgdGhlIGZpZWxkIHR5cGUgaXMgaW52YWxpZFxuICovXG5mdW5jdGlvbiBnZXREYXRhU2xpY2VSZWFkZXIoZGF0YVNsaWNlLCBmaWVsZFR5cGUpIHtcbiAgICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuQllURTpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLkFTQ0lJOlxuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuVU5ERUZJTkVEOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkVWludDg7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TQllURTpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEludDg7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TSE9SVDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZFVpbnQxNjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNTSE9SVDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEludDE2O1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuTE9ORzpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLklGRDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZFVpbnQzMjtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlNMT05HOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkSW50MzI7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5MT05HODpcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLklGRDg6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRVaW50NjQ7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5TTE9ORzg6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRJbnQ2NDtcbiAgICAgICAgY2FzZSBmaWVsZFR5cGVzLlJBVElPTkFMOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkVWludDMyO1xuICAgICAgICBjYXNlIGZpZWxkVHlwZXMuU1JBVElPTkFMOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZS5yZWFkSW50MzI7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5GTE9BVDpcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2UucmVhZEZsb2F0MzI7XG4gICAgICAgIGNhc2UgZmllbGRUeXBlcy5ET1VCTEU6XG4gICAgICAgICAgICByZXR1cm4gZGF0YVNsaWNlLnJlYWRGbG9hdDY0O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEludmFsaWQgZmllbGQgdHlwZTogJHtmaWVsZFR5cGV9YCk7XG4gICAgfVxufVxuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj58bnVsbH0gb3V0VmFsdWVzIC0gT3B0aW9uYWwgcHJlLWFsbG9jYXRlZCBvdXRwdXQgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlYWRNZXRob2QgLSBEYXRhVmlldyByZWFkIG1ldGhvZCAoZS5nLiwgZ2V0VWludDE2KVxuICogQHBhcmFtIHtEYXRhU2xpY2V9IGRhdGFTbGljZSAtIFNvdXJjZSBkYXRhIHNsaWNlXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRUeXBlIC0gVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBOdW1iZXIgb2YgdmFsdWVzIHRvIHJlYWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBCeXRlIG9mZnNldCB0byBzdGFydCByZWFkaW5nXG4gKiBAcGFyYW0ge3RydWV9IGlzQXJyYXkgLSBXaGV0aGVyIHRvIGFsd2F5cyByZXR1cm4gYW4gYXJyYXkgKHZzIHNpbmdsZSB2YWx1ZSlcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vZ2VvdGlmZi5qcycpLlR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPn0gVGhlIGRlY29kZWQgdmFsdWUocylcbiAqL1xuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj58bnVsbH0gb3V0VmFsdWVzIC0gT3B0aW9uYWwgcHJlLWFsbG9jYXRlZCBvdXRwdXQgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlYWRNZXRob2QgLSBEYXRhVmlldyByZWFkIG1ldGhvZCAoZS5nLiwgZ2V0VWludDE2KVxuICogQHBhcmFtIHtEYXRhU2xpY2V9IGRhdGFTbGljZSAtIFNvdXJjZSBkYXRhIHNsaWNlXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRUeXBlIC0gVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBOdW1iZXIgb2YgdmFsdWVzIHRvIHJlYWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBCeXRlIG9mZnNldCB0byBzdGFydCByZWFkaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0FycmF5XSAtIFdoZXRoZXIgdG8gYWx3YXlzIHJldHVybiBhbiBhcnJheSAodnMgc2luZ2xlIHZhbHVlKVxuICogQHJldHVybnMge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fHN0cmluZ3xudW1iZXJ9IFRoZSBkZWNvZGVkIHZhbHVlKHMpXG4gKi9cbi8qKlxuICogUmVhZHMgZmllbGQgdmFsdWVzIGZyb20gYSBEYXRhU2xpY2UuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fG51bGx9IG91dFZhbHVlcyAtIE9wdGlvbmFsIHByZS1hbGxvY2F0ZWQgb3V0cHV0IGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWFkTWV0aG9kIC0gRGF0YVZpZXcgcmVhZCBtZXRob2QgKGUuZy4sIGdldFVpbnQxNilcbiAqIEBwYXJhbSB7RGF0YVNsaWNlfSBkYXRhU2xpY2UgLSBTb3VyY2UgZGF0YSBzbGljZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkZpZWxkVHlwZX0gZmllbGRUeXBlIC0gVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBOdW1iZXIgb2YgdmFsdWVzIHRvIHJlYWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBCeXRlIG9mZnNldCB0byBzdGFydCByZWFkaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0FycmF5XSAtIFdoZXRoZXIgdG8gYWx3YXlzIHJldHVybiBhbiBhcnJheSAodnMgc2luZ2xlIHZhbHVlKVxuICogQHJldHVybnMge2ltcG9ydCgnLi9nZW90aWZmLmpzJykuVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fHN0cmluZ3xudW1iZXJ9IFRoZSBkZWNvZGVkIHZhbHVlKHMpXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlcyhvdXRWYWx1ZXMgPSBudWxsLCByZWFkTWV0aG9kLCBkYXRhU2xpY2UsIGZpZWxkVHlwZSwgY291bnQsIG9mZnNldCwgaXNBcnJheSA9IGZhbHNlKSB7XG4gICAgY29uc3QgZmllbGRUeXBlTGVuZ3RoID0gZ2V0RmllbGRUeXBlU2l6ZShmaWVsZFR5cGUpO1xuICAgIGNvbnN0IHZhbHVlcyA9IG91dFZhbHVlcyB8fCBnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCBjb3VudCk7XG4gICAgLy8gY29uc3QgcmVhZE1ldGhvZCA9IGdldERhdGFTbGljZVJlYWRlcihkYXRhU2xpY2UsIGZpZWxkVHlwZSk7XG4gICAgY29uc3QgaXNSYXRpb25hbCA9IChmaWVsZFR5cGUgPT09IGZpZWxkVHlwZXMuUkFUSU9OQUwgfHwgZmllbGRUeXBlID09PSBmaWVsZFR5cGVzLlNSQVRJT05BTCk7XG4gICAgLy8gbm9ybWFsIGZpZWxkc1xuICAgIGlmICghaXNSYXRpb25hbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCArIChpICogZmllbGRUeXBlTGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFJBVElPTkFMIG9yIFNSQVRJT05BTFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDIpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHJlYWRNZXRob2QuY2FsbChkYXRhU2xpY2UsIG9mZnNldCArIChpICogZmllbGRUeXBlTGVuZ3RoKSk7XG4gICAgICAgICAgICB2YWx1ZXNbaSArIDFdID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0ICsgKChpICogZmllbGRUeXBlTGVuZ3RoKSArIDQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmllbGRUeXBlID09PSBmaWVsZFR5cGVzLkFTQ0lJKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykuZGVjb2RlKC8qKiBAdHlwZSB7VWludDhBcnJheX0gKi8gKHZhbHVlcykpO1xuICAgIH1cbiAgICBpZiAoY291bnQgPT09IDEgJiYgIWlzQXJyYXkgJiYgIWlzUmF0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cbi8qKlxuICogTGF6aWx5LWxvYWRlZCBhcnJheSBmb3IgbGFyZ2UgVElGRiBmaWVsZCB2YWx1ZXMgdGhhdCBhcmUgZmV0Y2hlZCBvbi1kZW1hbmQuXG4gKiBTdXBwb3J0cyBsb2FkaW5nIGluZGl2aWR1YWwgaW5kaWNlcyBvciB0aGUgZW50aXJlIGFycmF5LiBVc2VzIGEgYml0bWFwIHRvIHRyYWNrXG4gKiB3aGljaCB2YWx1ZXMgaGF2ZSBiZWVuIGxvYWRlZCB0byBhdm9pZCByZWR1bmRhbnQgZmV0Y2hlcy5cbiAqL1xuY2xhc3MgRGVmZXJyZWRBcnJheSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIERlZmVycmVkQXJyYXkgZm9yIGxhenktbG9hZGluZyBvZiBsYXJnZSBUSUZGIGZpZWxkIGFycmF5cy5cbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vc291cmNlL2Jhc2Vzb3VyY2UuanNcIikuQmFzZVNvdXJjZX0gc291cmNlIC0gRGF0YSBzb3VyY2UgZm9yIGZldGNoaW5nXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5T2Zmc2V0IC0gQnl0ZSBvZmZzZXQgd2hlcmUgdGhlIGFycmF5IGRhdGEgc3RhcnRzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW4gLSBFbmRpYW5uZXNzIG9mIHRoZSBkYXRhXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkZpZWxkVHlwZX0gZmllbGRUeXBlIC0gVElGRiBmaWVsZCB0eXBlIGNvbnN0YW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIE51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UsIGFycmF5T2Zmc2V0LCBsaXR0bGVFbmRpYW4sIGZpZWxkVHlwZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLmFycmF5T2Zmc2V0ID0gYXJyYXlPZmZzZXQ7XG4gICAgICAgIHRoaXMubGl0dGxlRW5kaWFuID0gbGl0dGxlRW5kaWFuO1xuICAgICAgICB0aGlzLmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuZGF0YSA9IGdldEFycmF5Rm9yU2FtcGxlcyhmaWVsZFR5cGUsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMuaXRlbVNpemUgPSBnZXRGaWVsZFR5cGVTaXplKGZpZWxkVHlwZSk7XG4gICAgICAgIHRoaXMubWFza0JpdG1hcCA9IG5ldyBVaW50OEFycmF5KE1hdGguY2VpbChsZW5ndGggLyA4KSk7XG4gICAgICAgIHRoaXMuZmV0Y2hJbmRleFByb21pc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmZ1bGxGZXRjaFByb21pc2UgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkcyBhbGwgdmFsdWVzIGluIHRoZSBkZWZlcnJlZCBhcnJheSBhdCBvbmNlLlxuICAgICAqIFN1YnNlcXVlbnQgY2FsbHMgcmV0dXJuIHRoZSBzYW1lIHByb21pc2UgdG8gYXZvaWQgcmVkdW5kYW50IGZldGNoZXMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aW1wb3J0KCcuL2dlb3RpZmYuanMnKS5UeXBlZEFycmF5fEFycmF5PG51bWJlcj4+fSBQcm9taXNlIHJlc29sdmluZyB0byB0aGUgZnVsbHkgbG9hZGVkIGFycmF5XG4gICAgICovXG4gICAgYXN5bmMgbG9hZEFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZ1bGxGZXRjaFByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZnVsbEZldGNoUHJvbWlzZSA9IHRoaXMuc291cmNlLmZldGNoKFt7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogdGhpcy5hcnJheU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLml0ZW1TaXplICogdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgfV0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhU2xpY2UgPSBuZXcgRGF0YVNsaWNlKGRhdGFbMF0sIHRoaXMuYXJyYXlPZmZzZXQsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBnZXRWYWx1ZXModGhpcy5kYXRhLCBnZXREYXRhU2xpY2VSZWFkZXIoZGF0YVNsaWNlLCB0aGlzLmZpZWxkVHlwZSksIGRhdGFTbGljZSwgdGhpcy5maWVsZFR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLmFycmF5T2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIGFsbCBpdGVtcyBhcyBsb2FkZWQgaW4gdGhlIGJpdG1hcFxuICAgICAgICAgICAgICAgIHRoaXMubWFza0JpdG1hcC5maWxsKDB4RkYpO1xuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIGFueSBwZW5kaW5nIGluZGl2aWR1YWwgZmV0Y2ggcHJvbWlzZXMgc2luY2UgYWxsIGRhdGEgaXMgbm93IGxvYWRlZFxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hJbmRleFByb21pc2VzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxGZXRjaFByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWRzIGFuZCByZXR1cm5zIGEgc2luZ2xlIHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICogSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgbG9hZGVkLCByZXR1cm5zIGl0IGltbWVkaWF0ZWx5LiBPdGhlcndpc2UsIGZldGNoZXMgaXRcbiAgICAgKiBmcm9tIHRoZSBzb3VyY2UuIE11bHRpcGxlIGNhbGxzIGZvciB0aGUgc2FtZSBpbmRleCByZXVzZSB0aGUgc2FtZSBwcm9taXNlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFplcm8tYmFzZWQgaW5kZXggb2YgdGhlIHZhbHVlIHRvIGxvYWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJ8YmlnaW50Pn0gUHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IElmIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAgICAgKi9cbiAgICBhc3luYyBnZXQoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgSW5kZXggJHtpbmRleH0gb3V0IG9mIGJvdW5kcyBmb3IgbGVuZ3RoICR7dGhpcy5kYXRhLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBieXRlSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gOCk7XG4gICAgICAgIGNvbnN0IGJpdE1hc2sgPSAxIDw8IGluZGV4ICUgODtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5hcnJheU9mZnNldCArIChpbmRleCAqIHRoaXMuaXRlbVNpemUpO1xuICAgICAgICBpZiAoKHRoaXMubWFza0JpdG1hcFtieXRlSW5kZXhdICYgYml0TWFzaykgPT09IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5mZXRjaEluZGV4UHJvbWlzZXMuaGFzKGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoUHJvbWlzZSA9IHRoaXMuc291cmNlLmZldGNoKFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuaXRlbVNpemUsXG4gICAgICAgICAgICAgICAgICAgIH1dKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTbGljZSA9IG5ldyBEYXRhU2xpY2UoZGF0YVswXSwgdGhpcy5hcnJheU9mZnNldCArIChpbmRleCAqIHRoaXMuaXRlbVNpemUpLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRNZXRob2QgPSBnZXREYXRhU2xpY2VSZWFkZXIoZGF0YVNsaWNlLCB0aGlzLmZpZWxkVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVhZE1ldGhvZC5jYWxsKGRhdGFTbGljZSwgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tCaXRtYXBbYnl0ZUluZGV4XSB8PSBiaXRNYXNrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoSW5kZXhQcm9taXNlcy5kZWxldGUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaEluZGV4UHJvbWlzZXMuc2V0KGluZGV4LCBmZXRjaFByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hJbmRleFByb21pc2VzLmdldChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlRmlsZURpcmVjdG9yeSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIEltYWdlRmlsZURpcmVjdG9yeS5cbiAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmd8bnVtYmVyLCBudW1iZXJ8c3RyaW5nfEFycmF5PG51bWJlcnxzdHJpbmc+Pn0gYWN0dWFsaXplZEZpZWxkcyB0aGUgZmlsZSBkaXJlY3RvcnksXG4gICAgICogbWFwcGluZyB0YWcgbmFtZXMgdG8gdmFsdWVzXG4gICAgICogQHBhcmFtIHtNYXA8c3RyaW5nfG51bWJlciwgRnVuY3Rpb24+fSBkZWZlcnJlZEZpZWxkcyB0aGUgZGVmZXJyZWQgZmllbGRzLCBtYXBwaW5nIHRhZyBuYW1lcyB0byBhc3luYyBmdW5jdGlvbnNcbiAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmd8bnVtYmVyLCBEZWZlcnJlZEFycmF5Pn0gZGVmZXJyZWRBcnJheXMgdGhlIGRlZmVycmVkIGFycmF5cywgbWFwcGluZyB0YWcgbmFtZXMgdG9cbiAgICAgKiBEZWZlcnJlZEFycmF5IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmV4dElGREJ5dGVPZmZzZXQgdGhlIGJ5dGUgb2Zmc2V0IHRvIHRoZSBuZXh0IElGRFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFjdHVhbGl6ZWRGaWVsZHMsIGRlZmVycmVkRmllbGRzLCBkZWZlcnJlZEFycmF5cywgbmV4dElGREJ5dGVPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5hY3R1YWxpemVkRmllbGRzID0gYWN0dWFsaXplZEZpZWxkcztcbiAgICAgICAgdGhpcy5kZWZlcnJlZEZpZWxkcyA9IGRlZmVycmVkRmllbGRzO1xuICAgICAgICB0aGlzLmRlZmVycmVkRmllbGRzQmVpbmdSZXNvbHZlZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5kZWZlcnJlZEFycmF5cyA9IGRlZmVycmVkQXJyYXlzO1xuICAgICAgICB0aGlzLm5leHRJRkRCeXRlT2Zmc2V0ID0gbmV4dElGREJ5dGVPZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5UYWdOYW1lfG51bWJlcn0gdGFnSWRlbnRpZmllciBUaGUgZmllbGQgdGFnIElEIG9yIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciB0aGUgZmllbGQgZXhpc3RzIChhY3R1YWxpemVkIG9yIGRlZmVycmVkKVxuICAgICAqL1xuICAgIGhhc1RhZyh0YWdJZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHJlc29sdmVUYWcodGFnSWRlbnRpZmllcik7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuaGFzKHRhZykgfHwgdGhpcy5kZWZlcnJlZEZpZWxkcy5oYXModGFnKSB8fCB0aGlzLmRlZmVycmVkQXJyYXlzLmhhcyh0YWcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbm91c2x5IHJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4gdGFnLiBJZiBpdCBpcyBkZWZlcnJlZCwgYW4gZXJyb3IgaXMgdGhyb3duLlxuICAgICAqIEB0ZW1wbGF0ZSB7aW1wb3J0KCcuL2dsb2JhbHMuanMnKS5FYWdlclRhZ05hbWUgfCBpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkVhZ2VyVGFnfSBbVD1hbnldXG4gICAgICogQHBhcmFtIHtUfSB0YWdJZGVudGlmaWVyIFRoZSBmaWVsZCB0YWcgSUQgb3IgbmFtZVxuICAgICAqIEByZXR1cm5zIHtUIGV4dGVuZHMgaW1wb3J0KCcuL2dsb2JhbHMuanMnKS5UYWdOYW1lID8gKGltcG9ydCgnLi9nbG9iYWxzLmpzJykuVGFnVmFsdWU8VD4gfCB1bmRlZmluZWQpIDogYW55fVxuICAgICAqIHRoZSBmaWVsZCB2YWx1ZSxcbiAgICAgKiBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHRhZyBpcyBkZWZlcnJlZCBhbmQgcmVxdWlyZXMgYXN5bmNocm9ub3VzIGxvYWRpbmdcbiAgICAgKi9cbiAgICBnZXRWYWx1ZSh0YWdJZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHJlc29sdmVUYWcodGFnSWRlbnRpZmllcik7XG4gICAgICAgIGlmICh0aGlzLmRlZmVycmVkRmllbGRzLmhhcyh0YWcpIHx8IHRoaXMuZGVmZXJyZWRBcnJheXMuaGFzKHRhZykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ0RlZiA9IHRhZ0RlZmluaXRpb25zW3RhZ107XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gdGFnRGVmPy5uYW1lIHx8IGBUYWcke3RhZ31gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGaWVsZCAnJHt0YWdOYW1lfScgKCR7dGFnfSkgaXMgZGVmZXJyZWQuIFVzZSBsb2FkVmFsdWUoKSB0byBsb2FkIGl0IGFzeW5jaHJvbm91c2x5LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hY3R1YWxpemVkRmllbGRzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHRoaXMuYWN0dWFsaXplZEZpZWxkcy5nZXQodGFnKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4gdGFnLiBJZiBpdCBpcyBkZWZlcnJlZCwgaXQgd2lsbCBiZSBsb2FkZWQgZmlyc3QuXG4gICAgICogQHRlbXBsYXRlIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLlRhZ05hbWV9IFtUPWFueV1cbiAgICAgKiBAcGFyYW0ge1R8bnVtYmVyfSB0YWdJZGVudGlmaWVyIFRoZSBmaWVsZCB0YWcgSUQgb3IgbmFtZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQgZXh0ZW5kcyBpbXBvcnQoJy4vZ2xvYmFscy5qcycpLlRhZ05hbWUgPyAoaW1wb3J0KCcuL2dsb2JhbHMuanMnKS5UYWdWYWx1ZTxUPiB8IHVuZGVmaW5lZCkgOiBhbnk+fVxuICAgICAqICAgdGhlIGZpZWxkIHZhbHVlLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QgZXhpc3RcbiAgICAgKi9cbiAgICBhc3luYyBsb2FkVmFsdWUodGFnSWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCB0YWcgPSByZXNvbHZlVGFnKHRhZ0lkZW50aWZpZXIpO1xuICAgICAgICBpZiAodGhpcy5hY3R1YWxpemVkRmllbGRzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuZ2V0KHRhZykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRlZmVycmVkRmllbGRzQmVpbmdSZXNvbHZlZC5oYXModGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodGhpcy5kZWZlcnJlZEZpZWxkc0JlaW5nUmVzb2x2ZWQuZ2V0KHRhZykpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvYWRlckZuID0gdGhpcy5kZWZlcnJlZEZpZWxkcy5nZXQodGFnKTtcbiAgICAgICAgaWYgKGxvYWRlckZuKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkRmllbGRzLmRlbGV0ZSh0YWcpO1xuICAgICAgICAgICAgLy8gU2V0IHByb21pc2UgQkVGT1JFIHN0YXJ0aW5nIGFzeW5jIHdvcmsgdG8gcHJldmVudCByYWNlIGNvbmRpdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvbWlzZSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBsb2FkZXJGbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuc2V0KHRhZywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVycmVkRmllbGRzQmVpbmdSZXNvbHZlZC5kZWxldGUodGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZEZpZWxkc0JlaW5nUmVzb2x2ZWQuc2V0KHRhZywgdmFsdWVQcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKHZhbHVlUHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVmZXJyZWRBcnJheSA9IHRoaXMuZGVmZXJyZWRBcnJheXMuZ2V0KHRhZyk7XG4gICAgICAgIGlmIChkZWZlcnJlZEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChkZWZlcnJlZEFycmF5LmxvYWRBbGwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBhdCBhIGdpdmVuIGluZGV4IGZvciBhIHRhZyB0aGF0IGlzIGFuIGFycmF5LiBJZiBpdCBpcyBkZWZlcnJlZCwgaXQgd2lsbCBiZSBsb2FkZWQgZmlyc3QuXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0YWdJZGVudGlmaWVyIFRoZSBmaWVsZCB0YWcgSUQgb3IgbmFtZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBhcnJheVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcnxzdHJpbmd8YmlnaW50fHVuZGVmaW5lZD59IHRoZSBmaWVsZCB2YWx1ZSBhdCB0aGUgZ2l2ZW4gaW5kZXgsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgICAqL1xuICAgIGFzeW5jIGxvYWRWYWx1ZUluZGV4ZWQodGFnSWRlbnRpZmllciwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFnID0gcmVzb2x2ZVRhZyh0YWdJZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsaXplZEZpZWxkcy5oYXModGFnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFjdHVhbGl6ZWRGaWVsZHMuZ2V0KHRhZyk7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovICh2YWx1ZSlbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGVmZXJyZWRBcnJheXMuaGFzKHRhZykpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkQXJyYXkgPSAvKiogQHR5cGUge0RlZmVycmVkQXJyYXl9ICovICh0aGlzLmRlZmVycmVkQXJyYXlzLmdldCh0YWcpKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZEFycmF5LmdldChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNUYWcodGFnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0aGlzLmxvYWRWYWx1ZSh0YWcpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgR2VvVElGRiBHZW9LZXlEaXJlY3RvcnkgdGFnIGludG8gYSBzdHJ1Y3R1cmVkIG9iamVjdC5cbiAgICAgKiBUaGUgR2VvS2V5RGlyZWN0b3J5IGlzIGEgc3BlY2lhbCBUSUZGIHRhZyB0aGF0IGNvbnRhaW5zIGdlb2dyYXBoaWMgbWV0YWRhdGFcbiAgICAgKiBpbiBhIGtleS12YWx1ZSBmb3JtYXQgYXMgZGVmaW5lZCBieSB0aGUgR2VvVElGRiBzcGVjaWZpY2F0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQYXJ0aWFsPFJlY29yZDxpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkdlb0tleU5hbWUsICo+PnxudWxsfSBQYXJzZWQgZ2VvIGtleSBkaXJlY3RvcnlcbiAgICAgKiAgICAgbWFwcGluZyBrZXkgbmFtZXMgdG8gdmFsdWVzLCBvciBudWxsIGlmIG5vdCBwcmVzZW50XG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIGEgcmVmZXJlbmNlZCBnZW8ga2V5IHZhbHVlIGNhbm5vdCBiZSByZXRyaWV2ZWRcbiAgICAgKi9cbiAgICBwYXJzZUdlb0tleURpcmVjdG9yeSgpIHtcbiAgICAgICAgY29uc3QgcmF3R2VvS2V5RGlyZWN0b3J5ID0gdGhpcy5nZXRWYWx1ZSgnR2VvS2V5RGlyZWN0b3J5Jyk7XG4gICAgICAgIGlmICghcmF3R2VvS2V5RGlyZWN0b3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUge1BhcnRpYWw8UmVjb3JkPGltcG9ydCgnLi9nbG9iYWxzLmpzJykuR2VvS2V5TmFtZSwgKj4+fSAqL1xuICAgICAgICBjb25zdCBnZW9LZXlEaXJlY3RvcnkgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDQ7IGkgPD0gcmF3R2VvS2V5RGlyZWN0b3J5WzNdICogNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAoIC8qKiBAdHlwZSB7UmVjb3JkPG51bWJlciwgaW1wb3J0KCcuL2dsb2JhbHMuanMnKS5HZW9LZXlOYW1lPn0gKi8oZ2VvS2V5TmFtZXMpKVtyYXdHZW9LZXlEaXJlY3RvcnlbaV1dO1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSAvKiogQHR5cGUge2ltcG9ydCgnLi9nbG9iYWxzLmpzJykuRWFnZXJUYWd9ICovIChyYXdHZW9LZXlEaXJlY3RvcnlbaSArIDFdKSB8fCBudWxsO1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSByYXdHZW9LZXlEaXJlY3RvcnlbaSArIDJdO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcmF3R2VvS2V5RGlyZWN0b3J5W2kgKyAzXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBvZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGdldCB2YWx1ZSBvZiBnZW9LZXkgJyR7a2V5fScuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcob2Zmc2V0LCBvZmZzZXQgKyBjb3VudCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZS5zdWJhcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgY291bnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZW9LZXlEaXJlY3Rvcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW9LZXlEaXJlY3Rvcnk7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBbdGFnLCB2YWx1ZV0gb2YgdGhpcy5hY3R1YWxpemVkRmllbGRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgY29uc3QgdGFnRGVmaW5pdGlvbiA9IHR5cGVvZiB0YWcgPT09ICdudW1iZXInID8gdGFnRGVmaW5pdGlvbnNbdGFnXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWdEZWZpbml0aW9uID8gdGFnRGVmaW5pdGlvbi5uYW1lIDogYFRhZyR7dGFnfWA7XG4gICAgICAgICAgICBvYmpbdGFnTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn1cbi8qKlxuICogUGFyc2VyIGZvciBJbWFnZSBGaWxlIERpcmVjdG9yaWVzIChJRkRzKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlRmlsZURpcmVjdG9yeVBhcnNlciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuL3NvdXJjZS9iYXNlc291cmNlLmpzXCIpLkJhc2VTb3VyY2V9IHNvdXJjZSB0aGUgZGF0YSBzb3VyY2UgdG8gZmV0Y2ggZnJvbVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIHRoZSBlbmRpYW5uZXNzIG9mIHRoZSBmaWxlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiaWdUaWZmIHdoZXRoZXIgdGhlIGZpbGUgaXMgYSBCaWdUSUZGXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZWFnZXI9ZmFsc2VdIHdoZXRoZXIgdG8gZWFnZXJseSBmZXRjaCBkZWZlcnJlZCBmaWVsZHMuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIGZhbHNlIChkZWZhdWx0KSwgdGFncyBhcmUgbG9hZGVkIGxhemlseSBvbi1kZW1hbmQuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRydWUsIGFsbCB0YWdzIGFyZSBsb2FkZWQgaW1tZWRpYXRlbHkgZHVyaW5nIHBhcnNpbmcuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBsaXR0bGVFbmRpYW4sIGJpZ1RpZmYsIGVhZ2VyID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMubGl0dGxlRW5kaWFuID0gbGl0dGxlRW5kaWFuO1xuICAgICAgICB0aGlzLmJpZ1RpZmYgPSBiaWdUaWZmO1xuICAgICAgICB0aGlzLmVhZ2VyID0gZWFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhIERhdGFTbGljZSBmcm9tIHRoZSBzb3VyY2UuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBCeXRlIG9mZnNldCBvZiB0aGUgc2xpY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF0gTGVuZ3RoIG9mIHRoZSBzbGljZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPERhdGFTbGljZT59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0U2xpY2Uob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZmFsbGJhY2tMZW5ndGggPSB0aGlzLmJpZ1RpZmYgPyA0MDQ4IDogMTAyNDtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhU2xpY2UoKGF3YWl0IHRoaXMuc291cmNlLmZldGNoKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiB0eXBlb2YgbGVuZ3RoICE9PSAndW5kZWZpbmVkJyA/IGxlbmd0aCA6IGZhbGxiYWNrTGVuZ3RoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSkpWzBdLCBvZmZzZXQsIHRoaXMubGl0dGxlRW5kaWFuLCB0aGlzLmJpZ1RpZmYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnN0cnVjdHMgdG8gcGFyc2UgYW4gaW1hZ2UgZmlsZSBkaXJlY3RvcnkgYXQgdGhlIGdpdmVuIGZpbGUgb2Zmc2V0LlxuICAgICAqIEFzIHRoZXJlIGlzIG5vIHdheSB0byBlbnN1cmUgdGhhdCBhIGxvY2F0aW9uIGlzIGluZGVlZCB0aGUgc3RhcnQgb2YgYW4gSUZELFxuICAgICAqIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgd2l0aCBjYXV0aW9uIChlLmcgb25seSB1c2luZyB0aGUgSUZEIG9mZnNldHMgZnJvbVxuICAgICAqIHRoZSBoZWFkZXJzIG9yIG90aGVyIElGRHMpLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgdGhlIG9mZnNldCB0byBwYXJzZSB0aGUgSUZEIGF0XG4gICAgICogQHJldHVybnMge1Byb21pc2U8SW1hZ2VGaWxlRGlyZWN0b3J5Pn0gdGhlIHBhcnNlZCBJRkRcbiAgICAgKi9cbiAgICBhc3luYyBwYXJzZUZpbGVEaXJlY3RvcnlBdChvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgZW50cnlTaXplID0gdGhpcy5iaWdUaWZmID8gMjAgOiAxMjtcbiAgICAgICAgY29uc3Qgb2Zmc2V0U2l6ZSA9IHRoaXMuYmlnVGlmZiA/IDggOiAyO1xuICAgICAgICBsZXQgZGF0YVNsaWNlID0gYXdhaXQgdGhpcy5nZXRTbGljZShvZmZzZXQpO1xuICAgICAgICBjb25zdCBudW1EaXJFbnRyaWVzID0gdGhpcy5iaWdUaWZmXG4gICAgICAgICAgICA/IGRhdGFTbGljZS5yZWFkVWludDY0KG9mZnNldClcbiAgICAgICAgICAgIDogZGF0YVNsaWNlLnJlYWRVaW50MTYob2Zmc2V0KTtcbiAgICAgICAgLy8gaWYgdGhlIHNsaWNlIGRvZXMgbm90IGNvdmVyIHRoZSB3aG9sZSBJRkQsIHJlcXVlc3QgYSBiaWdnZXIgc2xpY2UsIHdoZXJlIHRoZVxuICAgICAgICAvLyB3aG9sZSBJRkQgZml0czogbnVtIG9mIGVudHJpZXMgKyBuIHggdGFnIGxlbmd0aCArIG9mZnNldCB0byBuZXh0IElGRFxuICAgICAgICBjb25zdCBieXRlU2l6ZSA9IG51bURpckVudHJpZXMgKiAoZW50cnlTaXplICsgKHRoaXMuYmlnVGlmZiA/IDE2IDogNikpO1xuICAgICAgICBpZiAoIWRhdGFTbGljZS5jb3ZlcnMob2Zmc2V0LCBieXRlU2l6ZSkpIHtcbiAgICAgICAgICAgIGRhdGFTbGljZSA9IGF3YWl0IHRoaXMuZ2V0U2xpY2Uob2Zmc2V0LCBieXRlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0dWFsaXplZEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgZGVmZXJyZWRGaWVsZHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbnN0IGRlZmVycmVkQXJyYXlzID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBsb29wIG92ZXIgdGhlIElGRCBhbmQgY3JlYXRlIGEgZmlsZSBkaXJlY3Rvcnkgb2JqZWN0XG4gICAgICAgIGxldCBpID0gb2Zmc2V0ICsgKHRoaXMuYmlnVGlmZiA/IDggOiAyKTtcbiAgICAgICAgZm9yIChsZXQgZW50cnlDb3VudCA9IDA7IGVudHJ5Q291bnQgPCBudW1EaXJFbnRyaWVzOyBpICs9IGVudHJ5U2l6ZSwgKytlbnRyeUNvdW50KSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFRhZyA9IGRhdGFTbGljZS5yZWFkVWludDE2KGkpO1xuICAgICAgICAgICAgY29uc3QgZmllbGRUeXBlID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vZ2xvYmFscy5qcycpLkZpZWxkVHlwZX0gKi8gKGRhdGFTbGljZS5yZWFkVWludDE2KGkgKyAyKSk7XG4gICAgICAgICAgICBjb25zdCB0eXBlQ291bnQgPSB0aGlzLmJpZ1RpZmZcbiAgICAgICAgICAgICAgICA/IGRhdGFTbGljZS5yZWFkVWludDY0KGkgKyA0KVxuICAgICAgICAgICAgICAgIDogZGF0YVNsaWNlLnJlYWRVaW50MzIoaSArIDQpO1xuICAgICAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBkZWZlcnJlZEZpZWxkVmFsdWVzID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBkZWZlcnJlZEFycmF5ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVHlwZUxlbmd0aCA9IGdldEZpZWxkVHlwZVNpemUoZmllbGRUeXBlKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlT2Zmc2V0ID0gaSArICh0aGlzLmJpZ1RpZmYgPyAxMiA6IDgpO1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IHRhZ0RlZmluaXRpb25zW2ZpZWxkVGFnXT8uaXNBcnJheTtcbiAgICAgICAgICAgIGNvbnN0IGVhZ2VyID0gdGFnRGVmaW5pdGlvbnNbZmllbGRUYWddPy5lYWdlciB8fCB0aGlzLmVhZ2VyO1xuICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgdmFsdWUgaXMgZGlyZWN0bHkgZW5jb2RlZCBpbiB0aGUgdGFnIG9yIHJlZmVycyB0byBhXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZXh0ZXJuYWwgYnl0ZSByYW5nZVxuICAgICAgICAgICAgaWYgKGZpZWxkVHlwZUxlbmd0aCAqIHR5cGVDb3VudCA8PSAodGhpcy5iaWdUaWZmID8gOCA6IDQpKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSBnZXRWYWx1ZXMoZ2V0QXJyYXlGb3JTYW1wbGVzKGZpZWxkVHlwZSwgdHlwZUNvdW50KSwgZ2V0RGF0YVNsaWNlUmVhZGVyKGRhdGFTbGljZSwgZmllbGRUeXBlKSwgZGF0YVNsaWNlLCBmaWVsZFR5cGUsIHR5cGVDb3VudCwgdmFsdWVPZmZzZXQsIGlzQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBhY3R1YWwgYnl0ZSByYW5nZVxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdHVhbE9mZnNldCA9IGRhdGFTbGljZS5yZWFkT2Zmc2V0KHZhbHVlT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBnZXRGaWVsZFR5cGVTaXplKGZpZWxkVHlwZSkgKiB0eXBlQ291bnQ7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2ssIHdoZXRoZXIgd2UgYWN0dWFsbHkgY292ZXIgdGhlIHJlZmVyZW5jZWQgYnl0ZSByYW5nZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhU2xpY2UuY292ZXJzKGFjdHVhbE9mZnNldCwgbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlcyA9IGdldFZhbHVlcyhnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCB0eXBlQ291bnQpLCBnZXREYXRhU2xpY2VSZWFkZXIoZGF0YVNsaWNlLCBmaWVsZFR5cGUpLCBkYXRhU2xpY2UsIGZpZWxkVHlwZSwgdHlwZUNvdW50LCBhY3R1YWxPZmZzZXQsIGlzQXJyYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlYWdlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBlYWdlciBldmFsdWF0aW9uOiBmZXRjaCB0aGUgZGF0YSByaWdodCBub3dcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaW5zdGVhZCBvZiBmZXRjaGluZyB0aGUgc2xpY2UgcmlnaHQgaGVyZSwgY29sbGVjdCBhbGwgc2xpY2VzIGFuZCBmZXRjaCB0aGVtIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGFsbG93IGNvbmpvaW5lZCByZXF1ZXN0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZERhdGFTbGljZSA9IGF3YWl0IHRoaXMuZ2V0U2xpY2UoYWN0dWFsT2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlcyA9IGdldFZhbHVlcyhnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCB0eXBlQ291bnQpLCBnZXREYXRhU2xpY2VSZWFkZXIoZmllbGREYXRhU2xpY2UsIGZpZWxkVHlwZSksIGZpZWxkRGF0YVNsaWNlLCBmaWVsZFR5cGUsIHR5cGVDb3VudCwgYWN0dWFsT2Zmc2V0LCBpc0FycmF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZEFycmF5ID0gbmV3IERlZmVycmVkQXJyYXkodGhpcy5zb3VyY2UsIGFjdHVhbE9mZnNldCwgdGhpcy5saXR0bGVFbmRpYW4sIGZpZWxkVHlwZSwgdHlwZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkRmllbGRWYWx1ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZERhdGFTbGljZSA9IGF3YWl0IHRoaXMuZ2V0U2xpY2UoYWN0dWFsT2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlcyhnZXRBcnJheUZvclNhbXBsZXMoZmllbGRUeXBlLCB0eXBlQ291bnQpLCBnZXREYXRhU2xpY2VSZWFkZXIoZmllbGREYXRhU2xpY2UsIGZpZWxkVHlwZSksIGZpZWxkRGF0YVNsaWNlLCBmaWVsZFR5cGUsIHR5cGVDb3VudCwgYWN0dWFsT2Zmc2V0LCBpc0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmllbGRWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxpemVkRmllbGRzLnNldChmaWVsZFRhZywgZmllbGRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGVmZXJyZWRGaWVsZFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkRmllbGRzLnNldChmaWVsZFRhZywgZGVmZXJyZWRGaWVsZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWZlcnJlZEFycmF5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWRBcnJheXMuc2V0KGZpZWxkVGFnLCBkZWZlcnJlZEFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXh0SUZEQnl0ZU9mZnNldCA9IGRhdGFTbGljZS5yZWFkT2Zmc2V0KG9mZnNldCArIG9mZnNldFNpemUgKyAoZW50cnlTaXplICogbnVtRGlyRW50cmllcykpO1xuICAgICAgICByZXR1cm4gbmV3IEltYWdlRmlsZURpcmVjdG9yeShhY3R1YWxpemVkRmllbGRzLCBkZWZlcnJlZEZpZWxkcywgZGVmZXJyZWRBcnJheXMsIG5leHRJRkRCeXRlT2Zmc2V0KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZWZpbGVkaXJlY3RvcnkuanMubWFwIiwiLyoqXG4gKiBAbW9kdWxlIHJlc2FtcGxlXG4gKi9cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzUGVyUGl4ZWw9MV1cbiAqL1xuZnVuY3Rpb24gY29weU5ld1NpemUoYXJyYXksIHdpZHRoLCBoZWlnaHQsIHNhbXBsZXNQZXJQaXhlbCA9IDEpIHtcbiAgICByZXR1cm4gbmV3IChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJyYXkpLmNvbnN0cnVjdG9yKSh3aWR0aCAqIGhlaWdodCAqIHNhbXBsZXNQZXJQaXhlbCk7XG59XG4vKipcbiAqIFJlc2FtcGxlIHRoZSBpbnB1dCBhcnJheXMgdXNpbmcgbmVhcmVzdCBuZWlnaGJvciB2YWx1ZSBzZWxlY3Rpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5W119IHZhbHVlQXJyYXlzIFRoZSBpbnB1dCBhcnJheXMgdG8gcmVzYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGluSGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRXaWR0aCBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRIZWlnaHQgVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHJldHVybnMge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5W119IFRoZSByZXNhbXBsZWQgcmFzdGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzYW1wbGVOZWFyZXN0KHZhbHVlQXJyYXlzLCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCkge1xuICAgIGNvbnN0IHJlbFggPSBpbldpZHRoIC8gb3V0V2lkdGg7XG4gICAgY29uc3QgcmVsWSA9IGluSGVpZ2h0IC8gb3V0SGVpZ2h0O1xuICAgIHJldHVybiB2YWx1ZUFycmF5cy5tYXAoKGFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gY29weU5ld1NpemUoYXJyYXksIG91dFdpZHRoLCBvdXRIZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG91dEhlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICBjb25zdCBjeSA9IE1hdGgubWluKE1hdGgucm91bmQocmVsWSAqIHkpLCBpbkhlaWdodCAtIDEpO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBvdXRXaWR0aDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLm1pbihNYXRoLnJvdW5kKHJlbFggKiB4KSwgaW5XaWR0aCAtIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbKGN5ICogaW5XaWR0aCkgKyBjeF07XG4gICAgICAgICAgICAgICAgbmV3QXJyYXlbKHkgKiBvdXRXaWR0aCkgKyB4XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9KTtcbn1cbi8vIHNpbXBsZSBsaW5lYXIgaW50ZXJwb2xhdGlvbiwgY29kZSBmcm9tOlxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2ludGVycG9sYXRpb24jUHJvZ3JhbW1pbmdfbGFuZ3VhZ2Vfc3VwcG9ydFxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdjBcbiAqIEBwYXJhbSB7bnVtYmVyfSB2MVxuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqL1xuZnVuY3Rpb24gbGVycCh2MCwgdjEsIHQpIHtcbiAgICByZXR1cm4gKCgxIC0gdCkgKiB2MCkgKyAodCAqIHYxKTtcbn1cbi8qKlxuICogUmVzYW1wbGUgdGhlIGlucHV0IGFycmF5cyB1c2luZyBiaWxpbmVhciBpbnRlcnBvbGF0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVtdfSB2YWx1ZUFycmF5cyBUaGUgaW5wdXQgYXJyYXlzIHRvIHJlc2FtcGxlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5XaWR0aCBUaGUgd2lkdGggb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbkhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0V2lkdGggVGhlIGRlc2lyZWQgd2lkdGggb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0SGVpZ2h0IFRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVtdfSBUaGUgcmVzYW1wbGVkIHJhc3RlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2FtcGxlQmlsaW5lYXIodmFsdWVBcnJheXMsIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0KSB7XG4gICAgY29uc3QgcmVsWCA9IGluV2lkdGggLyBvdXRXaWR0aDtcbiAgICBjb25zdCByZWxZID0gaW5IZWlnaHQgLyBvdXRIZWlnaHQ7XG4gICAgcmV0dXJuIHZhbHVlQXJyYXlzLm1hcCgoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBjb3B5TmV3U2l6ZShhcnJheSwgb3V0V2lkdGgsIG91dEhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgb3V0SGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1kgPSByZWxZICogeTtcbiAgICAgICAgICAgIGNvbnN0IHlsID0gTWF0aC5mbG9vcihyYXdZKTtcbiAgICAgICAgICAgIGNvbnN0IHloID0gTWF0aC5taW4oTWF0aC5jZWlsKHJhd1kpLCAoaW5IZWlnaHQgLSAxKSk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG91dFdpZHRoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXdYID0gcmVsWCAqIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSByYXdYICUgMTtcbiAgICAgICAgICAgICAgICBjb25zdCB4bCA9IE1hdGguZmxvb3IocmF3WCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeGggPSBNYXRoLm1pbihNYXRoLmNlaWwocmF3WCksIChpbldpZHRoIC0gMSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxsID0gYXJyYXlbKHlsICogaW5XaWR0aCkgKyB4bF07XG4gICAgICAgICAgICAgICAgY29uc3QgaGwgPSBhcnJheVsoeWwgKiBpbldpZHRoKSArIHhoXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaCA9IGFycmF5Wyh5aCAqIGluV2lkdGgpICsgeGxdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhoID0gYXJyYXlbKHloICogaW5XaWR0aCkgKyB4aF07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsZXJwKGxlcnAobGwsIGhsLCB0eCksIGxlcnAobGgsIGhoLCB0eCksIHJhd1kgJSAxKTtcbiAgICAgICAgICAgICAgICBuZXdBcnJheVsoeSAqIG91dFdpZHRoKSArIHhdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0pO1xufVxuLyoqXG4gKiBSZXNhbXBsZSB0aGUgaW5wdXQgYXJyYXlzIHVzaW5nIHRoZSBzZWxlY3RlZCByZXNhbXBsaW5nIG1ldGhvZC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXlbXX0gdmFsdWVBcnJheXMgVGhlIGlucHV0IGFycmF5cyB0byByZXNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGluV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gaW5IZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dFdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dEhlaWdodCBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZCA9ICduZWFyZXN0J10gVGhlIGRlc2lyZWQgcmVzYW1wbGluZyBtZXRob2RcbiAqIEByZXR1cm5zIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheVtdfSBUaGUgcmVzYW1wbGVkIHJhc3RlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2FtcGxlKHZhbHVlQXJyYXlzLCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCwgbWV0aG9kID0gJ25lYXJlc3QnKSB7XG4gICAgc3dpdGNoIChtZXRob2QudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICduZWFyZXN0JzpcbiAgICAgICAgICAgIHJldHVybiByZXNhbXBsZU5lYXJlc3QodmFsdWVBcnJheXMsIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0KTtcbiAgICAgICAgY2FzZSAnYmlsaW5lYXInOlxuICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgcmV0dXJuIHJlc2FtcGxlQmlsaW5lYXIodmFsdWVBcnJheXMsIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcmVzYW1wbGluZyBtZXRob2Q6ICcke21ldGhvZH0nYCk7XG4gICAgfVxufVxuLyoqXG4gKiBSZXNhbXBsZSB0aGUgcGl4ZWwgaW50ZXJsZWF2ZWQgaW5wdXQgYXJyYXkgdXNpbmcgbmVhcmVzdCBuZWlnaGJvciB2YWx1ZSBzZWxlY3Rpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSB2YWx1ZUFycmF5IFRoZSBpbnB1dCBhcnJheSB0byByZXNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGluV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gaW5IZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dFdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dEhlaWdodCBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gc2FtcGxlcyBUaGUgbnVtYmVyIG9mIHNhbXBsZXMgcGVyIHBpeGVsIGZvciBwaXhlbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJsZWF2ZWQgZGF0YVxuICogQHJldHVybnMge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSBUaGUgcmVzYW1wbGVkIHJhc3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzYW1wbGVOZWFyZXN0SW50ZXJsZWF2ZWQodmFsdWVBcnJheSwgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMpIHtcbiAgICBjb25zdCByZWxYID0gaW5XaWR0aCAvIG91dFdpZHRoO1xuICAgIGNvbnN0IHJlbFkgPSBpbkhlaWdodCAvIG91dEhlaWdodDtcbiAgICBjb25zdCBuZXdBcnJheSA9IGNvcHlOZXdTaXplKHZhbHVlQXJyYXksIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgb3V0SGVpZ2h0OyArK3kpIHtcbiAgICAgICAgY29uc3QgY3kgPSBNYXRoLm1pbihNYXRoLnJvdW5kKHJlbFkgKiB5KSwgaW5IZWlnaHQgLSAxKTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBvdXRXaWR0aDsgKyt4KSB7XG4gICAgICAgICAgICBjb25zdCBjeCA9IE1hdGgubWluKE1hdGgucm91bmQocmVsWCAqIHgpLCBpbldpZHRoIC0gMSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXM7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVBcnJheVsoY3kgKiBpbldpZHRoICogc2FtcGxlcykgKyAoY3ggKiBzYW1wbGVzKSArIGldO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5Wyh5ICogb3V0V2lkdGggKiBzYW1wbGVzKSArICh4ICogc2FtcGxlcykgKyBpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbn1cbi8qKlxuICogUmVzYW1wbGUgdGhlIHBpeGVsIGludGVybGVhdmVkIGlucHV0IGFycmF5IHVzaW5nIGJpbGluZWFyIGludGVycG9sYXRpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSB2YWx1ZUFycmF5IFRoZSBpbnB1dCBhcnJheSB0byByZXNhbXBsZVxuICogQHBhcmFtIHtudW1iZXJ9IGluV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBpbnB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gaW5IZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dFdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoIG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IG91dEhlaWdodCBUaGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIG91dHB1dCByYXN0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gc2FtcGxlcyBUaGUgbnVtYmVyIG9mIHNhbXBsZXMgcGVyIHBpeGVsIGZvciBwaXhlbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJsZWF2ZWQgZGF0YVxuICogQHJldHVybnMge2ltcG9ydChcIi4vZ2VvdGlmZi5qc1wiKS5UeXBlZEFycmF5fSBUaGUgcmVzYW1wbGVkIHJhc3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzYW1wbGVCaWxpbmVhckludGVybGVhdmVkKHZhbHVlQXJyYXksIGluV2lkdGgsIGluSGVpZ2h0LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzKSB7XG4gICAgY29uc3QgcmVsWCA9IGluV2lkdGggLyBvdXRXaWR0aDtcbiAgICBjb25zdCByZWxZID0gaW5IZWlnaHQgLyBvdXRIZWlnaHQ7XG4gICAgY29uc3QgbmV3QXJyYXkgPSBjb3B5TmV3U2l6ZSh2YWx1ZUFycmF5LCBvdXRXaWR0aCwgb3V0SGVpZ2h0LCBzYW1wbGVzKTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG91dEhlaWdodDsgKyt5KSB7XG4gICAgICAgIGNvbnN0IHJhd1kgPSByZWxZICogeTtcbiAgICAgICAgY29uc3QgeWwgPSBNYXRoLmZsb29yKHJhd1kpO1xuICAgICAgICBjb25zdCB5aCA9IE1hdGgubWluKE1hdGguY2VpbChyYXdZKSwgKGluSGVpZ2h0IC0gMSkpO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG91dFdpZHRoOyArK3gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1ggPSByZWxYICogeDtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gcmF3WCAlIDE7XG4gICAgICAgICAgICBjb25zdCB4bCA9IE1hdGguZmxvb3IocmF3WCk7XG4gICAgICAgICAgICBjb25zdCB4aCA9IE1hdGgubWluKE1hdGguY2VpbChyYXdYKSwgKGluV2lkdGggLSAxKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXM7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxsID0gdmFsdWVBcnJheVsoeWwgKiBpbldpZHRoICogc2FtcGxlcykgKyAoeGwgKiBzYW1wbGVzKSArIGldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhsID0gdmFsdWVBcnJheVsoeWwgKiBpbldpZHRoICogc2FtcGxlcykgKyAoeGggKiBzYW1wbGVzKSArIGldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxoID0gdmFsdWVBcnJheVsoeWggKiBpbldpZHRoICogc2FtcGxlcykgKyAoeGwgKiBzYW1wbGVzKSArIGldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhoID0gdmFsdWVBcnJheVsoeWggKiBpbldpZHRoICogc2FtcGxlcykgKyAoeGggKiBzYW1wbGVzKSArIGldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGVycChsZXJwKGxsLCBobCwgdHgpLCBsZXJwKGxoLCBoaCwgdHgpLCByYXdZICUgMSk7XG4gICAgICAgICAgICAgICAgbmV3QXJyYXlbKHkgKiBvdXRXaWR0aCAqIHNhbXBsZXMpICsgKHggKiBzYW1wbGVzKSArIGldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xufVxuLyoqXG4gKiBSZXNhbXBsZSB0aGUgcGl4ZWwgaW50ZXJsZWF2ZWQgaW5wdXQgYXJyYXkgdXNpbmcgdGhlIHNlbGVjdGVkIHJlc2FtcGxpbmcgbWV0aG9kLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb3RpZmYuanNcIikuVHlwZWRBcnJheX0gdmFsdWVBcnJheSBUaGUgaW5wdXQgYXJyYXkgdG8gcmVzYW1wbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IGluSGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRXaWR0aCBUaGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgb3V0cHV0IHJhc3RlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRIZWlnaHQgVGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgcmFzdGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IHNhbXBsZXMgVGhlIG51bWJlciBvZiBzYW1wbGVzIHBlciBwaXhlbCBmb3IgcGl4ZWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJsZWF2ZWQgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2QgPSAnbmVhcmVzdCddIFRoZSBkZXNpcmVkIHJlc2FtcGxpbmcgbWV0aG9kXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwiLi9nZW90aWZmLmpzXCIpLlR5cGVkQXJyYXl9IFRoZSByZXNhbXBsZWQgcmFzdGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzYW1wbGVJbnRlcmxlYXZlZCh2YWx1ZUFycmF5LCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcywgbWV0aG9kID0gJ25lYXJlc3QnKSB7XG4gICAgc3dpdGNoIChtZXRob2QudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICduZWFyZXN0JzpcbiAgICAgICAgICAgIHJldHVybiByZXNhbXBsZU5lYXJlc3RJbnRlcmxlYXZlZCh2YWx1ZUFycmF5LCBpbldpZHRoLCBpbkhlaWdodCwgb3V0V2lkdGgsIG91dEhlaWdodCwgc2FtcGxlcyk7XG4gICAgICAgIGNhc2UgJ2JpbGluZWFyJzpcbiAgICAgICAgY2FzZSAnbGluZWFyJzpcbiAgICAgICAgICAgIHJldHVybiByZXNhbXBsZUJpbGluZWFySW50ZXJsZWF2ZWQodmFsdWVBcnJheSwgaW5XaWR0aCwgaW5IZWlnaHQsIG91dFdpZHRoLCBvdXRIZWlnaHQsIHNhbXBsZXMpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCByZXNhbXBsaW5nIG1ldGhvZDogJyR7bWV0aG9kfSdgKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNhbXBsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gZnJvbVdoaXRlSXNaZXJvKHJhc3RlciwgbWF4KSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByYXN0ZXI7XG4gICAgY29uc3QgcmdiUmFzdGVyID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcbiAgICBsZXQgdmFsdWU7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcmFzdGVyLmxlbmd0aDsgKytpLCBqICs9IDMpIHtcbiAgICAgICAgdmFsdWUgPSAyNTYgLSAocmFzdGVyW2ldIC8gbWF4KSAqIDI1NjtcbiAgICAgICAgcmdiUmFzdGVyW2pdID0gdmFsdWU7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMV0gPSB2YWx1ZTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAyXSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmdiUmFzdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21CbGFja0lzWmVybyhyYXN0ZXIsIG1heCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmFzdGVyO1xuICAgIGNvbnN0IHJnYlJhc3RlciA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMyk7XG4gICAgbGV0IHZhbHVlO1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHJhc3Rlci5sZW5ndGg7ICsraSwgaiArPSAzKSB7XG4gICAgICAgIHZhbHVlID0gKHJhc3RlcltpXSAvIG1heCkgKiAyNTY7XG4gICAgICAgIHJnYlJhc3RlcltqXSA9IHZhbHVlO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDFdID0gdmFsdWU7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMl0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJnYlJhc3Rlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUGFsZXR0ZShyYXN0ZXIsIGNvbG9yTWFwKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByYXN0ZXI7XG4gICAgY29uc3QgcmdiUmFzdGVyID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcbiAgICBjb25zdCBncmVlbk9mZnNldCA9IGNvbG9yTWFwLmxlbmd0aCAvIDM7XG4gICAgY29uc3QgYmx1ZU9mZnNldCA9IChjb2xvck1hcC5sZW5ndGggLyAzKSAqIDI7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcmFzdGVyLmxlbmd0aDsgKytpLCBqICs9IDMpIHtcbiAgICAgICAgY29uc3QgbWFwSW5kZXggPSByYXN0ZXJbaV07XG4gICAgICAgIHJnYlJhc3RlcltqXSA9IChjb2xvck1hcFttYXBJbmRleF0gLyA2NTUzNikgKiAyNTY7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMV0gPSAoY29sb3JNYXBbbWFwSW5kZXggKyBncmVlbk9mZnNldF0gLyA2NTUzNikgKiAyNTY7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMl0gPSAoY29sb3JNYXBbbWFwSW5kZXggKyBibHVlT2Zmc2V0XSAvIDY1NTM2KSAqIDI1NjtcbiAgICB9XG4gICAgcmV0dXJuIHJnYlJhc3Rlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQ01ZSyhjbXlrUmFzdGVyKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjbXlrUmFzdGVyO1xuICAgIGNvbnN0IHJnYlJhc3RlciA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgY215a1Jhc3Rlci5sZW5ndGg7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgICAgIGNvbnN0IGMgPSBjbXlrUmFzdGVyW2ldO1xuICAgICAgICBjb25zdCBtID0gY215a1Jhc3RlcltpICsgMV07XG4gICAgICAgIGNvbnN0IHkgPSBjbXlrUmFzdGVyW2kgKyAyXTtcbiAgICAgICAgY29uc3QgayA9IGNteWtSYXN0ZXJbaSArIDNdO1xuICAgICAgICByZ2JSYXN0ZXJbal0gPSAyNTUgKiAoKDI1NSAtIGMpIC8gMjU2KSAqICgoMjU1IC0gaykgLyAyNTYpO1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDFdID0gMjU1ICogKCgyNTUgLSBtKSAvIDI1NikgKiAoKDI1NSAtIGspIC8gMjU2KTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAyXSA9IDI1NSAqICgoMjU1IC0geSkgLyAyNTYpICogKCgyNTUgLSBrKSAvIDI1Nik7XG4gICAgfVxuICAgIHJldHVybiByZ2JSYXN0ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbVlDYkNyKHlDYkNyUmFzdGVyKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB5Q2JDclJhc3RlcjtcbiAgICBjb25zdCByZ2JSYXN0ZXIgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB5Q2JDclJhc3Rlci5sZW5ndGg7IGkgKz0gMywgaiArPSAzKSB7XG4gICAgICAgIGNvbnN0IHkgPSB5Q2JDclJhc3RlcltpXTtcbiAgICAgICAgY29uc3QgY2IgPSB5Q2JDclJhc3RlcltpICsgMV07XG4gICAgICAgIGNvbnN0IGNyID0geUNiQ3JSYXN0ZXJbaSArIDJdO1xuICAgICAgICByZ2JSYXN0ZXJbal0gPSB5ICsgMS40MDIgKiAoY3IgLSAweDgwKTtcbiAgICAgICAgcmdiUmFzdGVyW2ogKyAxXSA9IHkgLSAwLjM0NDE0ICogKGNiIC0gMHg4MCkgLSAwLjcxNDE0ICogKGNyIC0gMHg4MCk7XG4gICAgICAgIHJnYlJhc3RlcltqICsgMl0gPSB5ICsgMS43NzIgKiAoY2IgLSAweDgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHJnYlJhc3Rlcjtcbn1cbmNvbnN0IFhuID0gMC45NTA0NztcbmNvbnN0IFluID0gMS4wO1xuY29uc3QgWm4gPSAxLjA4ODgzO1xuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1L3JnYi1sYWIvYmxvYi9tYXN0ZXIvY29sb3IuanNcbmV4cG9ydCBmdW5jdGlvbiBmcm9tQ0lFTGFiKGNpZUxhYlJhc3Rlcikge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2llTGFiUmFzdGVyO1xuICAgIGNvbnN0IHJnYlJhc3RlciA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgY2llTGFiUmFzdGVyLmxlbmd0aDsgaSArPSAzLCBqICs9IDMpIHtcbiAgICAgICAgY29uc3QgTCA9IGNpZUxhYlJhc3RlcltpICsgMF07XG4gICAgICAgIGNvbnN0IGFfID0gKGNpZUxhYlJhc3RlcltpICsgMV0gPDwgMjQpID4+IDI0OyAvLyBjb252ZXJzaW9uIGZyb20gdWludDggdG8gaW50OFxuICAgICAgICBjb25zdCBiXyA9IChjaWVMYWJSYXN0ZXJbaSArIDJdIDw8IDI0KSA+PiAyNDsgLy8gc2FtZVxuICAgICAgICBsZXQgeSA9IChMICsgMTYpIC8gMTE2O1xuICAgICAgICBsZXQgeCA9IGFfIC8gNTAwICsgeTtcbiAgICAgICAgbGV0IHogPSB5IC0gYl8gLyAyMDA7XG4gICAgICAgIGxldCByO1xuICAgICAgICBsZXQgZztcbiAgICAgICAgbGV0IGI7XG4gICAgICAgIHggPSBYbiAqICh4ICogeCAqIHggPiAwLjAwODg1NiA/IHggKiB4ICogeCA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODcpO1xuICAgICAgICB5ID0gWW4gKiAoeSAqIHkgKiB5ID4gMC4wMDg4NTYgPyB5ICogeSAqIHkgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3KTtcbiAgICAgICAgeiA9IFpuICogKHogKiB6ICogeiA+IDAuMDA4ODU2ID8geiAqIHogKiB6IDogKHogLSAxNiAvIDExNikgLyA3Ljc4Nyk7XG4gICAgICAgIHIgPSB4ICogMy4yNDA2ICsgeSAqIC0xLjUzNzIgKyB6ICogLTAuNDk4NjtcbiAgICAgICAgZyA9IHggKiAtMC45Njg5ICsgeSAqIDEuODc1OCArIHogKiAwLjA0MTU7XG4gICAgICAgIGIgPSB4ICogMC4wNTU3ICsgeSAqIC0wLjIwNCArIHogKiAxLjA1NztcbiAgICAgICAgciA9IHIgPiAwLjAwMzEzMDggPyAxLjA1NSAqIHIgKiogKDEgLyAyLjQpIC0gMC4wNTUgOiAxMi45MiAqIHI7XG4gICAgICAgIGcgPSBnID4gMC4wMDMxMzA4ID8gMS4wNTUgKiBnICoqICgxIC8gMi40KSAtIDAuMDU1IDogMTIuOTIgKiBnO1xuICAgICAgICBiID0gYiA+IDAuMDAzMTMwOCA/IDEuMDU1ICogYiAqKiAoMSAvIDIuNCkgLSAwLjA1NSA6IDEyLjkyICogYjtcbiAgICAgICAgcmdiUmFzdGVyW2pdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcikpICogMjU1O1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDFdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgZykpICogMjU1O1xuICAgICAgICByZ2JSYXN0ZXJbaiArIDJdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgYikpICogMjU1O1xuICAgIH1cbiAgICByZXR1cm4gcmdiUmFzdGVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmdiLmpzLm1hcCIsImltcG9ydCB7IEJhc2VTb3VyY2UgfSBmcm9tICcuL2Jhc2Vzb3VyY2UuanMnO1xuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmNsYXNzIEFycmF5QnVmZmVyU291cmNlIGV4dGVuZHMgQmFzZVNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcnJheUJ1ZmZlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFycmF5QnVmZmVyID0gYXJyYXlCdWZmZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KCcuL2Jhc2Vzb3VyY2UuanMnKS5TbGljZX0gc2xpY2VcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VXaXRoRGF0YT59XG4gICAgICovXG4gICAgZmV0Y2hTbGljZShzbGljZSwgc2lnbmFsKSB7XG4gICAgICAgIGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBYm9ydEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuYXJyYXlCdWZmZXIuc2xpY2Uoc2xpY2Uub2Zmc2V0LCBzbGljZS5vZmZzZXQgKyBzbGljZS5sZW5ndGgpLFxuICAgICAgICAgICAgb2Zmc2V0OiBzbGljZS5vZmZzZXQsXG4gICAgICAgICAgICBsZW5ndGg6IHNsaWNlLmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUJ1ZmZlclNvdXJjZShhcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXJTb3VyY2UoYXJyYXlCdWZmZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXlidWZmZXIuanMubWFwIiwiLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTbGljZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aFxuICovXG4vKiogQHR5cGVkZWYge1NsaWNlICYge2RhdGE6IEFycmF5QnVmZmVyTGlrZX19IFNsaWNlV2l0aERhdGEgKi9cbmV4cG9ydCBjbGFzcyBCYXNlU291cmNlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PFNsaWNlPn0gc2xpY2VzXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlckxpa2VbXT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2goc2xpY2VzLCBzaWduYWwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHNsaWNlcy5tYXAoYXN5bmMgKHNsaWNlKSA9PiAoYXdhaXQgdGhpcy5mZXRjaFNsaWNlKHNsaWNlLCBzaWduYWwpKS5kYXRhKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2xpY2V9IHNsaWNlXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW19zaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U2xpY2VXaXRoRGF0YT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hTbGljZShzbGljZSwgX3NpZ25hbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZldGNoaW5nIG9mIHNsaWNlICR7c2xpY2V9IG5vdCBwb3NzaWJsZSwgbm90IGltcGxlbWVudGVkYCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpbGVzaXplIGlmIGFscmVhZHkgZGV0ZXJtaW5lZCBhbmQgbnVsbCBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9XG4gICAgICovXG4gICAgZ2V0IGZpbGVTaXplKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIC8vIG5vLW9wIGJ5IGRlZmF1bHRcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlc291cmNlLmpzLm1hcCIsImltcG9ydCBRdWlja0xSVSBmcm9tICdxdWljay1scnUnO1xuaW1wb3J0IHsgQWJvcnRFcnJvciwgQWdncmVnYXRlRXJyb3IsIHdhaXQsIHppcCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IEJhc2VTb3VyY2UgfSBmcm9tICcuL2Jhc2Vzb3VyY2UuanMnO1xuY2xhc3MgQmxvY2sge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBkYXRhXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob2Zmc2V0LCBsZW5ndGgsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdG9wIGJ5dGUgYm9yZGVyXG4gICAgICovXG4gICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGg7XG4gICAgfVxufVxuY2xhc3MgQmxvY2tHcm91cCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IGJsb2NrSWRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob2Zmc2V0LCBsZW5ndGgsIGJsb2NrSWRzKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5ibG9ja0lkcyA9IGJsb2NrSWRzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCbG9ja2VkU291cmNlIGV4dGVuZHMgQmFzZVNvdXJjZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jhc2VTb3VyY2V9IHNvdXJjZSBUaGUgdW5kZXJseWluZyBzb3VyY2UgdGhhdCBzaGFsbCBiZSBibG9ja2VkIGFuZCBjYWNoZWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5ibG9ja1NpemVdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmNhY2hlU2l6ZV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UsIHsgYmxvY2tTaXplID0gNjU1MzYsIGNhY2hlU2l6ZSA9IDEwMCB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgICAgICB0aGlzLmJsb2NrQ2FjaGUgPSBuZXcgUXVpY2tMUlUoe1xuICAgICAgICAgICAgbWF4U2l6ZTogY2FjaGVTaXplLFxuICAgICAgICAgICAgb25FdmljdGlvbjogKGJsb2NrSWQsIGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmljdGVkQmxvY2tzLnNldChibG9ja0lkLCBibG9jayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLyoqIEB0eXBlIHtNYXA8bnVtYmVyLCBCbG9jaz59ICovXG4gICAgICAgIHRoaXMuZXZpY3RlZEJsb2NrcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFwcGluZyBibG9ja0lkIC0+IEJsb2NrIGluc3RhbmNlXG4gICAgICAgIHRoaXMuYmxvY2tSZXF1ZXN0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gc2V0IG9mIGJsb2NrSWRzIG1pc3NpbmcgZm9yIHRoZSBjdXJyZW50IHJlcXVlc3RzXG4gICAgICAgIHRoaXMuYmxvY2tJZHNUb0ZldGNoID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmFib3J0ZWRCbG9ja0lkcyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0IGZpbGVTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UuZmlsZVNpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9iYXNlc291cmNlLmpzXCIpLlNsaWNlW119IHNsaWNlc1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcltdPn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaChzbGljZXMsIHNpZ25hbCkge1xuICAgICAgICBjb25zdCBibG9ja1JlcXVlc3RzID0gW107XG4gICAgICAgIGNvbnN0IG1pc3NpbmdCbG9ja0lkcyA9IFtdO1xuICAgICAgICBjb25zdCBhbGxCbG9ja0lkcyA9IFtdO1xuICAgICAgICB0aGlzLmV2aWN0ZWRCbG9ja3MuY2xlYXIoKTtcbiAgICAgICAgZm9yIChjb25zdCB7IG9mZnNldCwgbGVuZ3RoIH0gb2Ygc2xpY2VzKSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gb2Zmc2V0ICsgbGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgeyBmaWxlU2l6ZSB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmIChmaWxlU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWluKHRvcCwgZmlsZVNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmlyc3RCbG9ja09mZnNldCA9IE1hdGguZmxvb3Iob2Zmc2V0IC8gdGhpcy5ibG9ja1NpemUpICogdGhpcy5ibG9ja1NpemU7XG4gICAgICAgICAgICBmb3IgKGxldCBjdXJyZW50ID0gZmlyc3RCbG9ja09mZnNldDsgY3VycmVudCA8IHRvcDsgY3VycmVudCArPSB0aGlzLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrSWQgPSBNYXRoLmZsb29yKGN1cnJlbnQgLyB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJsb2NrQ2FjaGUuaGFzKGJsb2NrSWQpICYmICF0aGlzLmJsb2NrUmVxdWVzdHMuaGFzKGJsb2NrSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tJZHNUb0ZldGNoLmFkZChibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ0Jsb2NrSWRzLnB1c2goYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJsb2NrUmVxdWVzdHMuaGFzKGJsb2NrSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrUmVxdWVzdHMucHVzaCh0aGlzLmJsb2NrUmVxdWVzdHMuZ2V0KGJsb2NrSWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxsQmxvY2tJZHMucHVzaChibG9ja0lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhbGxvdyBhZGRpdGlvbmFsIGJsb2NrIHJlcXVlc3RzIHRvIGFjY3VtdWxhdGVcbiAgICAgICAgYXdhaXQgd2FpdCgpO1xuICAgICAgICB0aGlzLmZldGNoQmxvY2tzKHNpZ25hbCk7XG4gICAgICAgIC8vIEdhdGhlciBhbGwgb2YgdGhlIG5ldyByZXF1ZXN0cyB0aGF0IHRoaXMgZmV0Y2ggY2FsbCBpcyBjb250cmlidXRpbmcgdG8gYGZldGNoYC5cbiAgICAgICAgY29uc3QgbWlzc2luZ1JlcXVlc3RzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2tJZCBvZiBtaXNzaW5nQmxvY2tJZHMpIHtcbiAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0ZWQgbWlzc2luZyBibG9jayBjb3VsZCBhbHJlYWR5IGJlIGluIHRoZSBjYWNoZVxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgaXRzIHJlcXVlc3Qgc3RpbGwgYmUgb3V0c3RhbmRpbmcuXG4gICAgICAgICAgICBpZiAodGhpcy5ibG9ja1JlcXVlc3RzLmhhcyhibG9ja0lkKSkge1xuICAgICAgICAgICAgICAgIG1pc3NpbmdSZXF1ZXN0cy5wdXNoKHRoaXMuYmxvY2tSZXF1ZXN0cy5nZXQoYmxvY2tJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFjdHVhbGx5IGF3YWl0IGFsbCBwZW5kaW5nIHJlcXVlc3RzIHRoYXQgYXJlIG5lZWRlZCBmb3IgdGhpcyBgZmV0Y2hgLlxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoYmxvY2tSZXF1ZXN0cyk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChtaXNzaW5nUmVxdWVzdHMpO1xuICAgICAgICAvLyBQZXJmb3JtIHJldHJpZXMgaWYgYSBibG9jayB3YXMgaW50ZXJydXB0ZWQgYnkgYSBwcmV2aW91cyBzaWduYWxcbiAgICAgICAgY29uc3QgYWJvcnRlZEJsb2NrUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgY29uc3QgYWJvcnRlZEJsb2NrSWRzID0gYWxsQmxvY2tJZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKGlkKSA9PiB0aGlzLmFib3J0ZWRCbG9ja0lkcy5oYXMoaWQpIHx8ICF0aGlzLmJsb2NrQ2FjaGUuaGFzKGlkKSk7XG4gICAgICAgIGFib3J0ZWRCbG9ja0lkcy5mb3JFYWNoKChpZCkgPT4gdGhpcy5ibG9ja0lkc1RvRmV0Y2guYWRkKGlkKSk7XG4gICAgICAgIC8vIHN0YXJ0IHRoZSByZXRyeSBvZiBzb21lIGJsb2NrcyBpZiByZXF1aXJlZFxuICAgICAgICBpZiAoYWJvcnRlZEJsb2NrSWRzLmxlbmd0aCA+IDAgJiYgc2lnbmFsICYmICFzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaEJsb2NrcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBibG9ja0lkIG9mIGFib3J0ZWRCbG9ja0lkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5ibG9ja1JlcXVlc3RzLmdldChibG9ja0lkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQmxvY2sgJHtibG9ja0lkfSBpcyBub3QgaW4gdGhlIGJsb2NrIHJlcXVlc3RzYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFib3J0ZWRCbG9ja1JlcXVlc3RzLnB1c2goYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKGFib3J0ZWRCbG9ja1JlcXVlc3RzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aHJvdyBhbiAgYWJvcnQgZXJyb3JcbiAgICAgICAgaWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoJ1JlcXVlc3Qgd2FzIGFib3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9ja3MgPSBhbGxCbG9ja0lkcy5tYXAoKGlkKSA9PiB0aGlzLmJsb2NrQ2FjaGUuZ2V0KGlkKSB8fCB0aGlzLmV2aWN0ZWRCbG9ja3MuZ2V0KGlkKSk7XG4gICAgICAgIGNvbnN0IGZhaWxlZEJsb2NrcyA9IGJsb2Nrcy5maWx0ZXIoKGkpID0+ICFpKTtcbiAgICAgICAgaWYgKGZhaWxlZEJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBZ2dyZWdhdGVFcnJvcihmYWlsZWRCbG9ja3MsICdSZXF1ZXN0IGZhaWxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSBhIGZpbmFsIE1hcCwgd2l0aCBhbGwgcmVxdWlyZWQgYmxvY2tzIGZvciB0aGlzIHJlcXVlc3QgdG8gc2F0aXNmeVxuICAgICAgICBjb25zdCByZXF1aXJlZEJsb2NrcyA9IG5ldyBNYXAoemlwKGFsbEJsb2NrSWRzLCBibG9ja3MpKTtcbiAgICAgICAgLy8gVE9ETzogc2F0aXNmeSBlYWNoIHNsaWNlXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTbGljZURhdGEoc2xpY2VzLCByZXF1aXJlZEJsb2Nrcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICovXG4gICAgZmV0Y2hCbG9ja3Moc2lnbmFsKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIHN0aWxsIG5lZWQgdG9cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tJZHNUb0ZldGNoLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cHMgPSB0aGlzLmdyb3VwQmxvY2tzKHRoaXMuYmxvY2tJZHNUb0ZldGNoKTtcbiAgICAgICAgICAgIC8vIHN0YXJ0IHJlcXVlc3Rpbmcgc2xpY2VzIG9mIGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVxdWVzdHMgPSBncm91cHMubWFwKGFzeW5jIChncm91cCkgPT4gKHsgLi4uZ3JvdXAsIC4uLihhd2FpdCB0aGlzLnNvdXJjZS5mZXRjaFNsaWNlKGdyb3VwLCBzaWduYWwpKSB9KSk7XG4gICAgICAgICAgICBmb3IgKGxldCBncm91cEluZGV4ID0gMDsgZ3JvdXBJbmRleCA8IGdyb3Vwcy5sZW5ndGg7ICsrZ3JvdXBJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzW2dyb3VwSW5kZXhdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2tJZCBvZiBncm91cC5ibG9ja0lkcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGFuIGFzeW5jIElJRkUgZm9yIGVhY2ggYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlcXVlc3RzLnNldChibG9ja0lkLCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBQcm9taXNlLmFsbChncm91cFJlcXVlc3RzKSlbZ3JvdXBJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tPZmZzZXQgPSBibG9ja0lkICogdGhpcy5ibG9ja1NpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbyA9IGJsb2NrT2Zmc2V0IC0gcmVzcG9uc2Uub2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbihvICsgdGhpcy5ibG9ja1NpemUsIHJlc3BvbnNlLmRhdGEuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEuc2xpY2UobywgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBuZXcgQmxvY2soYmxvY2tPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheUJ1ZmZlcn0gKi8gKGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrQ2FjaGUuc2V0KGJsb2NrSWQsIGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0ZWRCbG9ja0lkcy5kZWxldGUoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEFib3J0RXJyb3IgJiYgZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgc2lnbmFsIGhlcmUsIHdlIG5lZWQgaXQgdG8gZGV0ZXJtaW5lIGxhdGVyIGlmIGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIHdhcyBjYXVzZWQgYnkgdGhpcyBzaWduYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLnNpZ25hbCA9IHNpZ25hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja0NhY2hlLmRlbGV0ZShibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hYm9ydGVkQmxvY2tJZHMuYWRkKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZXF1ZXN0cy5kZWxldGUoYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYmxvY2tJZHNUb0ZldGNoLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1NldDxudW1iZXI+fSBibG9ja0lkc1xuICAgICAqIEByZXR1cm5zIHtCbG9ja0dyb3VwW119XG4gICAgICovXG4gICAgZ3JvdXBCbG9ja3MoYmxvY2tJZHMpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkQmxvY2tJZHMgPSBBcnJheS5mcm9tKGJsb2NrSWRzKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGlmIChzb3J0ZWRCbG9ja0lkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvKiogQHR5cGUge251bWJlcltdfSAqL1xuICAgICAgICBsZXQgY3VycmVudCA9IFtdO1xuICAgICAgICBsZXQgbGFzdEJsb2NrSWQgPSBudWxsO1xuICAgICAgICBjb25zdCBncm91cHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBibG9ja0lkIG9mIHNvcnRlZEJsb2NrSWRzKSB7XG4gICAgICAgICAgICBpZiAobGFzdEJsb2NrSWQgPT09IG51bGwgfHwgbGFzdEJsb2NrSWQgKyAxID09PSBibG9ja0lkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wdXNoKGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIGxhc3RCbG9ja0lkID0gYmxvY2tJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG5ldyBCbG9ja0dyb3VwKGN1cnJlbnRbMF0gKiB0aGlzLmJsb2NrU2l6ZSwgY3VycmVudC5sZW5ndGggKiB0aGlzLmJsb2NrU2l6ZSwgY3VycmVudCkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBbYmxvY2tJZF07XG4gICAgICAgICAgICAgICAgbGFzdEJsb2NrSWQgPSBibG9ja0lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdyb3Vwcy5wdXNoKG5ldyBCbG9ja0dyb3VwKGN1cnJlbnRbMF0gKiB0aGlzLmJsb2NrU2l6ZSwgY3VycmVudC5sZW5ndGggKiB0aGlzLmJsb2NrU2l6ZSwgY3VycmVudCkpO1xuICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vYmFzZXNvdXJjZS5qc1wiKS5TbGljZVtdfSBzbGljZXNcbiAgICAgKiBAcGFyYW0ge01hcDxudW1iZXIsIEJsb2NrPn0gYmxvY2tzXG4gICAgICogQHJldHVybnMge0FycmF5QnVmZmVyW119XG4gICAgICovXG4gICAgcmVhZFNsaWNlRGF0YShzbGljZXMsIGJsb2Nrcykge1xuICAgICAgICByZXR1cm4gc2xpY2VzLm1hcCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGxldCB0b3AgPSBzbGljZS5vZmZzZXQgKyBzbGljZS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWluKHRoaXMuZmlsZVNpemUsIHRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBibG9ja0lkTG93ID0gTWF0aC5mbG9vcihzbGljZS5vZmZzZXQgLyB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgICAgICBjb25zdCBibG9ja0lkSGlnaCA9IE1hdGguZmxvb3IoKHRvcCAtIDEpIC8gdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICAgICAgY29uc3Qgc2xpY2VEYXRhID0gbmV3IEFycmF5QnVmZmVyKHNsaWNlLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBzbGljZVZpZXcgPSBuZXcgVWludDhBcnJheShzbGljZURhdGEpO1xuICAgICAgICAgICAgZm9yIChsZXQgYmxvY2tJZCA9IGJsb2NrSWRMb3c7IGJsb2NrSWQgPD0gYmxvY2tJZEhpZ2g7ICsrYmxvY2tJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gYmxvY2tzLmdldChibG9ja0lkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGJsb2NrLm9mZnNldCAtIHNsaWNlLm9mZnNldDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BEZWx0YSA9IGJsb2NrLnRvcCAtIHRvcDtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tJbm5lck9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlSW5uZXJPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB1c2VkQmxvY2tMZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBibG9ja0lubmVyT2Zmc2V0ID0gLWRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VJbm5lck9mZnNldCA9IGRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodG9wRGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZWRCbG9ja0xlbmd0aCA9IGJsb2NrLmxlbmd0aCAtIGJsb2NrSW5uZXJPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1c2VkQmxvY2tMZW5ndGggPSB0b3AgLSBibG9jay5vZmZzZXQgLSBibG9ja0lubmVyT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja1ZpZXcgPSBuZXcgVWludDhBcnJheShibG9jay5kYXRhLCBibG9ja0lubmVyT2Zmc2V0LCB1c2VkQmxvY2tMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHNsaWNlVmlldy5zZXQoYmxvY2tWaWV3LCByYW5nZUlubmVyT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzbGljZURhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NrZWRzb3VyY2UuanMubWFwIiwiZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSByZXNwb25zZSBoYXMgYW4gb2snaXNoIHN0YXR1cyBjb2RlXG4gICAgICovXG4gICAgZ2V0IG9rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDw9IDI5OTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RhdHVzIGNvZGUgb2YgdGhlIHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge251bWJlcn0gdGhlIHN0YXR1cyBjb2RlXG4gICAgICovXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBoZWFkZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2hlYWRlck5hbWUgdGhlIGhlYWRlciBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IHRoZSBoZWFkZXIgdmFsdWVcbiAgICAgKi9cbiAgICBnZXRIZWFkZXIoX2hlYWRlck5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSB0aGUgcmVzcG9uc2UgZGF0YSBvZiB0aGUgcmVxdWVzdFxuICAgICAqL1xuICAgIGFzeW5jIGdldERhdGEoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VDbGllbnQge1xuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gdXJsICovXG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kIGEgcmVxdWVzdCB3aXRoIHRoZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gW19vcHRpb25zPXt9XVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEJhc2VSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdChfb3B0aW9ucykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcXVlc3QgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlQ2xpZW50LCBCYXNlUmVzcG9uc2UgfSBmcm9tICcuL2Jhc2UuanMnO1xuY2xhc3MgRmV0Y2hSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogQmFzZVJlc3BvbnNlIGZhY2FkZSBmb3IgZmV0Y2ggQVBJIFJlc3BvbnNlXG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXNwb25zZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLnN0YXR1cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRIZWFkZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZS5oZWFkZXJzLmdldChuYW1lKSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3BvbnNlLmFycmF5QnVmZmVyXG4gICAgICAgICAgICA/IGF3YWl0IHRoaXMucmVzcG9uc2UuYXJyYXlCdWZmZXIoKVxuICAgICAgICAgICAgLy8gRklYTUUgQ2FuIHRoaXMgcmVhbGx5IGhhdmUgYSBidWZmZXIgcHJvcGVydHk/XG4gICAgICAgICAgICA6IChhd2FpdCAvKiogQHR5cGUgeyp9ICovICh0aGlzLnJlc3BvbnNlKS5idWZmZXIoKSkuYnVmZmVyO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmV0Y2hDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Q3JlZGVudGlhbHN9IFtjcmVkZW50aWFsc11cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHN1cGVyKHVybCk7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gW29wdGlvbnM9e31dXG4gICAgICogQHJldHVybnMge1Byb21pc2U8RmV0Y2hSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdCh7IGhlYWRlcnMsIHNpZ25hbCB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCwge1xuICAgICAgICAgICAgaGVhZGVycywgY3JlZGVudGlhbHM6IHRoaXMuY3JlZGVudGlhbHMsIHNpZ25hbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgRmV0Y2hSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2guanMubWFwIiwiaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHVybE1vZCBmcm9tICd1cmwnO1xuaW1wb3J0IHsgQmFzZUNsaWVudCwgQmFzZVJlc3BvbnNlIH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IEFib3J0RXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy5qcyc7XG5jbGFzcyBIdHRwUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIEJhc2VSZXNwb25zZSBmYWNhZGUgZm9yIG5vZGUgSFRUUC9IVFRQUyBBUEkgUmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnaHR0cCcpLkluY29taW5nTWVzc2FnZX0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBkYXRhUHJvbWlzZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlLCBkYXRhUHJvbWlzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuZGF0YVByb21pc2UgPSBkYXRhUHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAodGhpcy5yZXNwb25zZS5zdGF0dXNDb2RlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRIZWFkZXIobmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVzcG9uc2UuaGVhZGVyc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlO1xuICAgIH1cbiAgICBhc3luYyBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kYXRhUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcbiAgICAvKiogQHBhcmFtIHtzdHJpbmd9IHVybCAqL1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICBzdXBlcih1cmwpO1xuICAgICAgICB0aGlzLnBhcnNlZFVybCA9IHVybE1vZC5wYXJzZSh0aGlzLnVybCk7XG4gICAgICAgIHRoaXMuaHR0cEFwaSA9ICh0aGlzLnBhcnNlZFVybC5wcm90b2NvbCA9PT0gJ2h0dHA6JyA/IGh0dHAgOiBodHRwcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gaGVhZGVyc1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SHR0cFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RSZXF1ZXN0KGhlYWRlcnMsIHNpZ25hbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuaHR0cEFwaS5nZXQoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMucGFyc2VkVXJsLFxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUge1VpbnQ4QXJyYXlbXX0gKi9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbGxlY3QgY2h1bmtzXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua3MucHVzaChjaHVuayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25jYXRlbmF0ZSBhbGwgY2h1bmtzIGFuZCByZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggdGhlIHJlc3VsdGluZyBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBCdWZmZXIuY29uY2F0KGNodW5rcykuYnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZURhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEh0dHBSZXNwb25zZShyZXNwb25zZSwgZGF0YVByb21pc2UpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxdWVzdC5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmRlc3Ryb3kobmV3IEFib3J0RXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gcmVxdWVzdC5kZXN0cm95KG5ldyBBYm9ydEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdCh7IGhlYWRlcnMgPSB7fSwgc2lnbmFsID0gdW5kZWZpbmVkIH0gPSB7fSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY29uc3RydWN0UmVxdWVzdChoZWFkZXJzLCBzaWduYWwpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlQ2xpZW50LCBCYXNlUmVzcG9uc2UgfSBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IHsgQWJvcnRFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJztcbmNsYXNzIFhIUlJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBCYXNlUmVzcG9uc2UgZmFjYWRlIGZvciBYTUxIdHRwUmVxdWVzdFxuICAgICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4aHIsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy54aHIgPSB4aHI7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnhoci5zdGF0dXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0SGVhZGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKG5hbWUpIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWEhSQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBoZWFkZXJzXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxYSFJSZXNwb25zZT59XG4gICAgICovXG4gICAgY29uc3RydWN0UmVxdWVzdChoZWFkZXJzLCBzaWduYWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMudXJsKTtcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaGVhZGVycykpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhvb2sgc2lnbmFsc1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFhIUlJlc3BvbnNlKHhociwgZGF0YSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgeGhyLm9uYWJvcnQgPSAoKSA9PiByZWplY3QobmV3IEFib3J0RXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcpKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB4aHIuYWJvcnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0KHsgaGVhZGVycyA9IHt9LCBzaWduYWwgPSB1bmRlZmluZWQgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jb25zdHJ1Y3RSZXF1ZXN0KGhlYWRlcnMsIHNpZ25hbCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD14aHIuanMubWFwIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IEJhc2VTb3VyY2UgfSBmcm9tICcuL2Jhc2Vzb3VyY2UuanMnO1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gZmRcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5mdW5jdGlvbiBjbG9zZUFzeW5jKGZkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMuY2xvc2UoZmQsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZmxhZ3NcbiAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gbW9kZVxuICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAqL1xuZnVuY3Rpb24gb3BlbkFzeW5jKHBhdGgsIGZsYWdzLCBtb2RlID0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMub3BlbihwYXRoLCBmbGFncywgbW9kZSwgKGVyciwgZmQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGZkXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7Ynl0ZXNSZWFkOiBudW1iZXIsIGJ1ZmZlcjogVWludDhBcnJheX0+fVxuICovXG5mdW5jdGlvbiByZWFkQXN5bmMoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMucmVhZChmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24sIChlcnIsIGJ5dGVzUmVhZCwgb3V0QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgYnl0ZXNSZWFkLCBidWZmZXI6IG91dEJ1ZmZlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5jbGFzcyBGaWxlU291cmNlIGV4dGVuZHMgQmFzZVNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMub3BlblJlcXVlc3QgPSBvcGVuQXN5bmMocGF0aCwgJ3InKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlfSBzbGljZVxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtfc2lnbmFsXSBub3QgaW1wbGVtZW50ZWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlV2l0aERhdGE+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoU2xpY2Uoc2xpY2UsIF9zaWduYWwpIHtcbiAgICAgICAgLy8gVE9ETzogdXNlIGBzaWduYWxgXG4gICAgICAgIGNvbnN0IGZkID0gYXdhaXQgdGhpcy5vcGVuUmVxdWVzdDtcbiAgICAgICAgY29uc3QgeyBidWZmZXIgfSA9IGF3YWl0IHJlYWRBc3luYyhmZCwgbmV3IFVpbnQ4QXJyYXkoc2xpY2UubGVuZ3RoKSwgMCwgc2xpY2UubGVuZ3RoLCBzbGljZS5vZmZzZXQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogYnVmZmVyLmJ1ZmZlcixcbiAgICAgICAgICAgIG9mZnNldDogc2xpY2Uub2Zmc2V0LFxuICAgICAgICAgICAgbGVuZ3RoOiBzbGljZS5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgICBjb25zdCBmZCA9IGF3YWl0IHRoaXMub3BlblJlcXVlc3Q7XG4gICAgICAgIGF3YWl0IGNsb3NlQXN5bmMoZmQpO1xuICAgIH1cbn1cbi8qKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGaWxlU291cmNlKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IEZpbGVTb3VyY2UocGF0aCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLmpzLm1hcCIsImltcG9ydCB7IEJhc2VTb3VyY2UgfSBmcm9tICcuL2Jhc2Vzb3VyY2UuanMnO1xuY2xhc3MgRmlsZVJlYWRlclNvdXJjZSBleHRlbmRzIEJhc2VTb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QmxvYn0gZmlsZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlfSBzbGljZVxuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IHNpZ25hbFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VXaXRoRGF0YT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hTbGljZShzbGljZSwgc2lnbmFsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9iID0gdGhpcy5maWxlLnNsaWNlKHNsaWNlLm9mZnNldCwgc2xpY2Uub2Zmc2V0ICsgc2xpY2UubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogLyoqIEB0eXBlIHtBcnJheUJ1ZmZlcn0gKi8gKHJlYWRlci5yZXN1bHQpLFxuICAgICAgICAgICAgICAgIG9mZnNldDogc2xpY2Uub2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlbmd0aDogc2xpY2UubGVuZ3RoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gcmVqZWN0O1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlYWRlci5hYm9ydCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgc291cmNlIGZyb20gYSBnaXZlbiBmaWxlL2Jsb2IuXG4gKiBAcGFyYW0ge0Jsb2J9IGZpbGUgVGhlIGZpbGUgb3IgYmxvYiB0byByZWFkIGZyb20uXG4gKiBAcmV0dXJucyB7RmlsZVJlYWRlclNvdXJjZX0gVGhlIGNvbnN0cnVjdGVkIHNvdXJjZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZpbGVSZWFkZXJTb3VyY2UoZmlsZSkge1xuICAgIHJldHVybiBuZXcgRmlsZVJlYWRlclNvdXJjZShmaWxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGVyZWFkZXIuanMubWFwIiwiY29uc3QgQ1JMRkNSTEYgPSAnXFxyXFxuXFxyXFxuJztcbi8qKlxuICogU2hpbSBmb3IgJ09iamVjdC5mcm9tRW50cmllcydcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FycmF5PFtzdHJpbmcsIFRdPn0gaXRlbXNcbiAqIEByZXR1cm4ge1JlY29yZDxzdHJpbmcsIFQ+fVxuICovXG5mdW5jdGlvbiBpdGVtc1RvT2JqZWN0KGl0ZW1zKSB7XG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZnJvbUVudHJpZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoaXRlbXMpO1xuICAgIH1cbiAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFQ+fSAqL1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGl0ZW1zKSB7XG4gICAgICAgIG9ialtrZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbi8qKlxuICogUGFyc2UgSFRUUCBoZWFkZXJzIGZyb20gYSBnaXZlbiBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aGUgdGV4dCB0byBwYXJzZSB0aGUgaGVhZGVycyBmcm9tXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gdGhlIHBhcnNlZCBoZWFkZXJzIHdpdGggbG93ZXJjYXNlIGtleXNcbiAqL1xuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHRleHQpIHtcbiAgICAvKiogQHR5cGUge0FycmF5PFtzdHJpbmcsIHN0cmluZ10+fSAqL1xuICAgIGNvbnN0IGl0ZW1zID0gdGV4dFxuICAgICAgICAuc3BsaXQoJ1xcclxcbicpXG4gICAgICAgIC5tYXAoKGxpbmUpID0+IHtcbiAgICAgICAgY29uc3Qga3YgPSAvKiogQHR5cGUge1tzdHJpbmcsIHN0cmluZ119ICovIChsaW5lLnNwbGl0KCc6JykubWFwKChzdHIpID0+IHN0ci50cmltKCkpKTtcbiAgICAgICAga3ZbMF0gPSBrdlswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4ga3Y7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW1zVG9PYmplY3QoaXRlbXMpO1xufVxuLyoqXG4gKiBQYXJzZSBhICdDb250ZW50LVR5cGUnIGhlYWRlciB2YWx1ZSB0byB0aGUgY29udGVudC10eXBlIGFuZCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IHJhd0NvbnRlbnRUeXBlIHRoZSByYXcgc3RyaW5nIHRvIHBhcnNlIGZyb21cbiAqIEByZXR1cm5zIHt7dHlwZTogc3RyaW5nfG51bGwsIHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPn19XG4gKiAgICAgdGhlIHBhcnNlZCBjb250ZW50IHR5cGUgd2l0aCB0aGUgZmllbGRzOiB0eXBlIGFuZCBwYXJhbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudFR5cGUocmF3Q29udGVudFR5cGUpIHtcbiAgICBpZiAoIXJhd0NvbnRlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IG51bGwsIHBhcmFtczoge30gfTtcbiAgICB9XG4gICAgY29uc3QgW3R5cGUsIC4uLnJhd1BhcmFtc10gPSByYXdDb250ZW50VHlwZS5zcGxpdCgnOycpLm1hcCgocykgPT4gcy50cmltKCkpO1xuICAgIGNvbnN0IHBhcmFtc0l0ZW1zID0gLyoqIEB0eXBlIHtBcnJheTxbc3RyaW5nLCBzdHJpbmddPn0gKi8gKHJhd1BhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5zcGxpdCgnPScpKSk7XG4gICAgcmV0dXJuIHsgdHlwZSwgcGFyYW1zOiBpdGVtc1RvT2JqZWN0KHBhcmFtc0l0ZW1zKSB9O1xufVxuLyoqXG4gKiBQYXJzZSBhICdDb250ZW50LVJhbmdlJyBoZWFkZXIgdmFsdWUgdG8gaXRzIHN0YXJ0LCBlbmQsIGFuZCB0b3RhbCBwYXJ0c1xuICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSByYXdDb250ZW50UmFuZ2UgdGhlIHJhdyBzdHJpbmcgdG8gcGFyc2UgZnJvbVxuICogQHJldHVybnMge3tzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgdG90YWw6IG51bWJlcn19IHRoZSBwYXJzZWQgcGFydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudFJhbmdlKHJhd0NvbnRlbnRSYW5nZSkge1xuICAgIGxldCBzdGFydCA9IE5hTjtcbiAgICBsZXQgZW5kID0gTmFOO1xuICAgIGxldCB0b3RhbCA9IE5hTjtcbiAgICBpZiAocmF3Q29udGVudFJhbmdlKSB7XG4gICAgICAgIFssIHN0YXJ0LCBlbmQsIHRvdGFsXSA9IChyYXdDb250ZW50UmFuZ2UubWF0Y2goL2J5dGVzIChcXGQrKS0oXFxkKylcXC8oXFxkKykvKSB8fCBbXSkubWFwKE51bWJlcik7XG4gICAgfVxuICAgIHJldHVybiB7IHN0YXJ0LCBlbmQsIHRvdGFsIH07XG59XG4vKipcbiAqIFBhcnNlcyBhIGxpc3Qgb2YgYnl0ZXJhbmdlcyBmcm9tIHRoZSBnaXZlbiAnbXVsdGlwYXJ0L2J5dGVyYW5nZXMnIEhUVFAgcmVzcG9uc2UuXG4gKiBFYWNoIGl0ZW0gaW4gdGhlIGxpc3QgaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIC0gaGVhZGVyczogdGhlIEhUVFAgaGVhZGVyc1xuICogLSBkYXRhOiB0aGUgc2xpY2VkIEFycmF5QnVmZmVyIGZvciB0aGF0IHNwZWNpZmljIHBhcnRcbiAqIC0gb2Zmc2V0OiB0aGUgb2Zmc2V0IG9mIHRoZSBieXRlcmFuZ2Ugd2l0aGluIGl0cyBvcmlnaW5hdGluZyBmaWxlXG4gKiAtIGxlbmd0aDogdGhlIGxlbmd0aCBvZiB0aGUgYnl0ZXJhbmdlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSByZXNwb25zZUFycmF5QnVmZmVyIHRoZSByZXNwb25zZSB0byBiZSBwYXJzZWQgYW5kIHNwbGl0XG4gKiBAcGFyYW0ge3N0cmluZ30gYm91bmRhcnkgdGhlIGJvdW5kYXJ5IHN0cmluZyB1c2VkIHRvIHNwbGl0IHRoZSBzZWN0aW9uc1xuICogQHJldHVybnMge0FycmF5PHtoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBkYXRhOiBBcnJheUJ1ZmZlciwgb2Zmc2V0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBmaWxlU2l6ZTogbnVtYmVyfT59XG4gKiAgICAgdGhlIHBhcnNlZCBieXRlcmFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJ5dGVSYW5nZXMocmVzcG9uc2VBcnJheUJ1ZmZlciwgYm91bmRhcnkpIHtcbiAgICBsZXQgb2Zmc2V0ID0gLTE7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcignYXNjaWknKTtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjb25zdCBzdGFydEJvdW5kYXJ5ID0gYC0tJHtib3VuZGFyeX1gO1xuICAgIGNvbnN0IGVuZEJvdW5kYXJ5ID0gYCR7c3RhcnRCb3VuZGFyeX0tLWA7XG4gICAgLy8gc2VhcmNoIGZvciB0aGUgaW5pdGlhbCBib3VuZGFyeSwgbWF5IGJlIG9mZnNldCBieSBzb21lIGJ5dGVzXG4gICAgLy8gVE9ETzogbW9yZSBlZmZpY2llbnQgdG8gY2hlY2sgZm9yIGAtLWAgaW4gYnl0ZXMgZGlyZWN0bHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRlY29kZXIuZGVjb2RlKG5ldyBVaW50OEFycmF5KHJlc3BvbnNlQXJyYXlCdWZmZXIsIGksIHN0YXJ0Qm91bmRhcnkubGVuZ3RoKSk7XG4gICAgICAgIGlmICh0ZXh0ID09PSBzdGFydEJvdW5kYXJ5KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaW5pdGlhbCBib3VuZGFyeScpO1xuICAgIH1cbiAgICB3aGlsZSAob2Zmc2V0IDwgcmVzcG9uc2VBcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkZWNvZGVyLmRlY29kZShuZXcgVWludDhBcnJheShyZXNwb25zZUFycmF5QnVmZmVyLCBvZmZzZXQsIE1hdGgubWluKHN0YXJ0Qm91bmRhcnkubGVuZ3RoICsgMTAyNCwgcmVzcG9uc2VBcnJheUJ1ZmZlci5ieXRlTGVuZ3RoIC0gb2Zmc2V0KSkpO1xuICAgICAgICAvLyBicmVhayBpZiB3ZSBhcnJpdmVkIGF0IHRoZSBlbmRcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwIHx8IHRleHQuc3RhcnRzV2l0aChlbmRCb3VuZGFyeSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFzc2VydCB0aGF0IHdlIGFyZSBhY3R1YWxseSBkZWFsaW5nIHdpdGggYSBieXRlcmFuZ2UgYW5kIGFyZSBhdCB0aGUgY29ycmVjdCBvZmZzZXRcbiAgICAgICAgaWYgKCF0ZXh0LnN0YXJ0c1dpdGgoc3RhcnRCb3VuZGFyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFydCBkb2VzIG5vdCBzdGFydCB3aXRoIGJvdW5kYXJ5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IGEgc3Vic3RyaW5nIGZyb20gd2hlcmUgd2UgcmVhZCB0aGUgaGVhZGVyc1xuICAgICAgICBjb25zdCBpbm5lclRleHQgPSB0ZXh0LnN1YnN0cihzdGFydEJvdW5kYXJ5Lmxlbmd0aCArIDIpO1xuICAgICAgICBpZiAoaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmluZCB0aGUgZG91YmxlIGxpbmVicmVhayB0aGF0IGRlbm90ZXMgdGhlIGVuZCBvZiB0aGUgaGVhZGVyc1xuICAgICAgICBjb25zdCBlbmRPZkhlYWRlcnMgPSBpbm5lclRleHQuaW5kZXhPZihDUkxGQ1JMRik7XG4gICAgICAgIC8vIHBhcnNlIHRoZSBoZWFkZXJzIHRvIGdldCB0aGUgY29udGVudCByYW5nZSBzaXplXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBwYXJzZUhlYWRlcnMoaW5uZXJUZXh0LnN1YnN0cigwLCBlbmRPZkhlYWRlcnMpKTtcbiAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kLCB0b3RhbCB9ID0gcGFyc2VDb250ZW50UmFuZ2UoaGVhZGVyc1snY29udGVudC1yYW5nZSddKTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhlIHNsaWNlIGFuZCB0aGUgbmV4dCBvZmZzZXRcbiAgICAgICAgY29uc3Qgc3RhcnRPZkRhdGEgPSBvZmZzZXQgKyBzdGFydEJvdW5kYXJ5Lmxlbmd0aCArIGVuZE9mSGVhZGVycyArIENSTEZDUkxGLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZW5kICsgMSAtIHN0YXJ0O1xuICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2VBcnJheUJ1ZmZlci5zbGljZShzdGFydE9mRGF0YSwgc3RhcnRPZkRhdGEgKyBsZW5ndGgpLFxuICAgICAgICAgICAgb2Zmc2V0OiBzdGFydCxcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIGZpbGVTaXplOiB0b3RhbCxcbiAgICAgICAgfSk7XG4gICAgICAgIG9mZnNldCA9IHN0YXJ0T2ZEYXRhICsgbGVuZ3RoICsgNDtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHB1dGlscy5qcy5tYXAiLCJpbXBvcnQgeyBwYXJzZUJ5dGVSYW5nZXMsIHBhcnNlQ29udGVudFJhbmdlLCBwYXJzZUNvbnRlbnRUeXBlIH0gZnJvbSAnLi9odHRwdXRpbHMuanMnO1xuaW1wb3J0IHsgQmFzZVNvdXJjZSB9IGZyb20gJy4vYmFzZXNvdXJjZS5qcyc7XG5pbXBvcnQgeyBCbG9ja2VkU291cmNlIH0gZnJvbSAnLi9ibG9ja2Vkc291cmNlLmpzJztcbmltcG9ydCB7IEZldGNoQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQvZmV0Y2guanMnO1xuaW1wb3J0IHsgWEhSQ2xpZW50IH0gZnJvbSAnLi9jbGllbnQveGhyLmpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICcuL2NsaWVudC9odHRwLmpzJztcbi8qKiBAaW1wb3J0IHsgUmVtb3RlU291cmNlT3B0aW9ucywgQmxvY2tlZFNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi9nZW90aWZmLmpzJyAqL1xuY2xhc3MgUmVtb3RlU291cmNlIGV4dGVuZHMgQmFzZVNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9nZW90aWZmLmpzXCIpLkJhc2VDbGllbnR9IGNsaWVudFxuICAgICAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9uc30gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudCwgeyBoZWFkZXJzLCBtYXhSYW5nZXMgPSAwLCBhbGxvd0Z1bGxGaWxlIH0gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgdGhpcy5tYXhSYW5nZXMgPSBtYXhSYW5nZXM7XG4gICAgICAgIHRoaXMuYWxsb3dGdWxsRmlsZSA9IGFsbG93RnVsbEZpbGU7XG4gICAgICAgIHRoaXMuX2ZpbGVTaXplID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlW119IHNsaWNlc1xuICAgICAqIEBwYXJhbSB7QWJvcnRTaWduYWx9IFtzaWduYWxdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXJMaWtlW10+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoKHNsaWNlcywgc2lnbmFsKSB7XG4gICAgICAgIC8vIGlmIHdlIGFsbG93IG11bHRpLXJhbmdlcywgc3BsaXQgdGhlIGluY29taW5nIHJlcXVlc3QgaW50byB0aGF0IG1hbnkgc3ViLXJlcXVlc3RzXG4gICAgICAgIC8vIGFuZCBqb2luIHRoZW0gYWZ0ZXJ3YXJkc1xuICAgICAgICBpZiAodGhpcy5tYXhSYW5nZXMgPj0gc2xpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hTbGljZXMoc2xpY2VzLCBzaWduYWwpLnRoZW4oKHJlc3VsdHMpID0+IHJlc3VsdHMubWFwKChyKSA9PiByLmRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm1heFJhbmdlcyA+IDAgJiYgc2xpY2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHNwbGl0IGludG8gbXVsdGlwbGUgbXVsdGktcmFuZ2UgcmVxdWVzdHNcbiAgICAgICAgICAgIC8vIGNvbnN0IHN1YlNsaWNlc1JlcXVlc3RzID0gW107XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlcy5sZW5ndGg7IGkgKz0gdGhpcy5tYXhSYW5nZXMpIHtcbiAgICAgICAgICAgIC8vICAgc3ViU2xpY2VzUmVxdWVzdHMucHVzaChcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmZldGNoU2xpY2VzKHNsaWNlcy5zbGljZShpLCBpICsgdGhpcy5tYXhSYW5nZXMpLCBzaWduYWwpLFxuICAgICAgICAgICAgLy8gICApO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChzdWJTbGljZXNSZXF1ZXN0cykpLmZsYXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgbWFrZSBhIHNpbmdsZSByZXF1ZXN0IGZvciBlYWNoIHNsaWNlXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzbGljZXMubWFwKGFzeW5jIChzbGljZSkgPT4gKGF3YWl0IHRoaXMuZmV0Y2hTbGljZShzbGljZSwgc2lnbmFsKSkuZGF0YSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2U+fSBzbGljZXNcbiAgICAgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBbc2lnbmFsXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PGltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2VXaXRoRGF0YT4+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoU2xpY2VzKHNsaWNlcywgc2lnbmFsKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIFJhbmdlOiBgYnl0ZXM9JHtzbGljZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoeyBvZmZzZXQsIGxlbmd0aCB9KSA9PiBgJHtvZmZzZXR9LSR7b2Zmc2V0ICsgbGVuZ3RoIC0gMX1gKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignLCcpfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2lnbmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA2KSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUsIHBhcmFtcyB9ID0gcGFyc2VDb250ZW50VHlwZShyZXNwb25zZS5nZXRIZWFkZXIoJ2NvbnRlbnQtdHlwZScpKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbXVsdGlwYXJ0L2J5dGVyYW5nZXMnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZVJhbmdlcyA9IHBhcnNlQnl0ZVJhbmdlcyhhd2FpdCByZXNwb25zZS5nZXREYXRhKCksIHBhcmFtcy5ib3VuZGFyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsZVNpemUgPSBieXRlUmFuZ2VzWzBdLmZpbGVTaXplIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVSYW5nZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kLCB0b3RhbCB9ID0gcGFyc2VDb250ZW50UmFuZ2UocmVzcG9uc2UuZ2V0SGVhZGVyKCdjb250ZW50LXJhbmdlJykpO1xuICAgICAgICAgICAgdGhpcy5fZmlsZVNpemUgPSB0b3RhbCB8fCBudWxsO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlV2l0aERhdGFbXX0gKi9cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gW3tcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBlbmQgKyAxIC0gc3RhcnQsXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICBpZiAoc2xpY2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSByZXF1ZXN0ZWQgbW9yZSB0aGFuIG9uZSBzbGljZSwgYnV0IGdvdCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIHVuZm9ydHVuYXRlbHksIHNvbWUgSFRUUCBTZXJ2ZXJzIGRvbid0IHN1cHBvcnQgbXVsdGktcmFuZ2VzXG4gICAgICAgICAgICAgICAgLy8gYW5kIHJldHVybiBvbmx5IHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcmVzdCBvZiB0aGUgc2xpY2VzIGFuZCBmZXRjaCB0aGVtIGl0ZXJhdGl2ZWx5XG4gICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2xpY2VzLnNsaWNlKDEpLm1hcCgoc2xpY2UpID0+IHRoaXMuZmV0Y2hTbGljZShzbGljZSwgc2lnbmFsKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdC5jb25jYXQob3RoZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmaXJzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hbGxvd0Z1bGxGaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uZGVkIHdpdGggZnVsbCBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5fZmlsZVNpemUgPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IGRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi9iYXNlc291cmNlLmpzJykuU2xpY2V9IHNsaWNlXG4gICAgICogQHBhcmFtIHtBYm9ydFNpZ25hbH0gW3NpZ25hbF1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxpbXBvcnQoJy4vYmFzZXNvdXJjZS5qcycpLlNsaWNlV2l0aERhdGE+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoU2xpY2Uoc2xpY2UsIHNpZ25hbCkge1xuICAgICAgICBjb25zdCB7IG9mZnNldCwgbGVuZ3RoIH0gPSBzbGljZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgUmFuZ2U6IGBieXRlcz0ke29mZnNldH0tJHtvZmZzZXQgKyBsZW5ndGggLSAxfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2lnbmFsLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2hlY2sgdGhlIHJlc3BvbnNlIHdhcyBva2F5IGFuZCBpZiB0aGUgc2VydmVyIGFjdHVhbGx5IHVuZGVyc3RhbmRzIHJhbmdlIHJlcXVlc3RzXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YS4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNikge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmdldERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdG90YWwgfSA9IHBhcnNlQ29udGVudFJhbmdlKHJlc3BvbnNlLmdldEhlYWRlcignY29udGVudC1yYW5nZScpKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpbGVTaXplID0gdG90YWwgfHwgbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hbGxvd0Z1bGxGaWxlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uZGVkIHdpdGggZnVsbCBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5fZmlsZVNpemUgPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogZGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZmlsZVNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlU2l6ZTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSB7QmFzZVNvdXJjZX0gc291cmNlXG4gKiBAcGFyYW0ge0Jsb2NrZWRTb3VyY2VPcHRpb25zfSBibG9ja2VkU291cmNlT3B0aW9uc1xuICogQHJldHVybnMge0Jhc2VTb3VyY2V9XG4gKi9cbmZ1bmN0aW9uIG1heWJlV3JhcEluQmxvY2tlZFNvdXJjZShzb3VyY2UsIHsgYmxvY2tTaXplLCBjYWNoZVNpemUgfSkge1xuICAgIGlmIChibG9ja1NpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2NrZWRTb3VyY2Uoc291cmNlLCB7IGJsb2NrU2l6ZSwgY2FjaGVTaXplIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1JlbW90ZVNvdXJjZU9wdGlvbnMgJiBCbG9ja2VkU291cmNlT3B0aW9ucyAmIHsgY3JlZGVudGlhbHM/OiBSZXF1ZXN0Q3JlZGVudGlhbHN9fSBbcGFyYW0xXVxuICogQHJldHVybnMge0Jhc2VTb3VyY2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmV0Y2hTb3VyY2UodXJsLCB7IGhlYWRlcnMgPSB7fSwgY3JlZGVudGlhbHMsIG1heFJhbmdlcyA9IDAsIGFsbG93RnVsbEZpbGUgPSBmYWxzZSwgLi4uYmxvY2tPcHRpb25zIH0gPSB7fSkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBGZXRjaENsaWVudCh1cmwsIGNyZWRlbnRpYWxzKTtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVtb3RlU291cmNlKGNsaWVudCwgeyBoZWFkZXJzLCBtYXhSYW5nZXMsIGFsbG93RnVsbEZpbGUgfSk7XG4gICAgcmV0dXJuIG1heWJlV3JhcEluQmxvY2tlZFNvdXJjZShzb3VyY2UsIGJsb2NrT3B0aW9ucyk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9ucyAmIEJsb2NrZWRTb3VyY2VPcHRpb25zfSBbcGFyYW0xXVxuICogQHJldHVybnMge0Jhc2VTb3VyY2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlWEhSU291cmNlKHVybCwgeyBoZWFkZXJzID0ge30sIG1heFJhbmdlcyA9IDAsIGFsbG93RnVsbEZpbGUgPSBmYWxzZSwgLi4uYmxvY2tPcHRpb25zIH0gPSB7fSkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBYSFJDbGllbnQodXJsKTtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVtb3RlU291cmNlKGNsaWVudCwgeyBoZWFkZXJzLCBtYXhSYW5nZXMsIGFsbG93RnVsbEZpbGUgfSk7XG4gICAgcmV0dXJuIG1heWJlV3JhcEluQmxvY2tlZFNvdXJjZShzb3VyY2UsIGJsb2NrT3B0aW9ucyk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7UmVtb3RlU291cmNlT3B0aW9ucyAmIEJsb2NrZWRTb3VyY2VPcHRpb25zfSBbcGFyYW0xXVxuICogQHJldHVybnMge0Jhc2VTb3VyY2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSHR0cFNvdXJjZSh1cmwsIHsgaGVhZGVycyA9IHt9LCBtYXhSYW5nZXMgPSAwLCBhbGxvd0Z1bGxGaWxlID0gZmFsc2UsIC4uLmJsb2NrT3B0aW9ucyB9ID0ge30pIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCh1cmwpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBSZW1vdGVTb3VyY2UoY2xpZW50LCB7IGhlYWRlcnMsIG1heFJhbmdlcywgYWxsb3dGdWxsRmlsZSB9KTtcbiAgICByZXR1cm4gbWF5YmVXcmFwSW5CbG9ja2VkU291cmNlKHNvdXJjZSwgYmxvY2tPcHRpb25zKTtcbn1cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi9nZW90aWZmLmpzXCIpLkJhc2VDbGllbnR9IGNsaWVudFxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zICYgQmxvY2tlZFNvdXJjZU9wdGlvbnN9IFtwYXJhbTFdXG4gKiBAcmV0dXJucyB7QmFzZVNvdXJjZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDdXN0b21Tb3VyY2UoY2xpZW50LCB7IGhlYWRlcnMgPSB7fSwgbWF4UmFuZ2VzID0gMCwgYWxsb3dGdWxsRmlsZSA9IGZhbHNlLCAuLi5ibG9ja09wdGlvbnMgfSA9IHt9KSB7XG4gICAgY29uc3Qgc291cmNlID0gbmV3IFJlbW90ZVNvdXJjZShjbGllbnQsIHsgaGVhZGVycywgbWF4UmFuZ2VzLCBhbGxvd0Z1bGxGaWxlIH0pO1xuICAgIHJldHVybiBtYXliZVdyYXBJbkJsb2NrZWRTb3VyY2Uoc291cmNlLCBibG9ja09wdGlvbnMpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZW1vdGVTb3VyY2VPcHRpb25zfSBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVtb3RlU291cmNlKHVybCwgeyBmb3JjZVhIUiA9IGZhbHNlLCAuLi5jbGllbnRPcHRpb25zIH0gPSB7fSkge1xuICAgIGlmICh0eXBlb2YgZmV0Y2ggPT09ICdmdW5jdGlvbicgJiYgIWZvcmNlWEhSKSB7XG4gICAgICAgIHJldHVybiBtYWtlRmV0Y2hTb3VyY2UodXJsLCBjbGllbnRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VYSFJTb3VyY2UodXJsLCBjbGllbnRPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VIdHRwU291cmNlKHVybCwgY2xpZW50T3B0aW9ucyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW1vdGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaHVuayhpdGVyYWJsZSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IGxlbmd0aE9mSXRlcmFibGUgPSBpdGVyYWJsZS5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhPZkl0ZXJhYmxlOyBpICs9IGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjaHVua2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGNpID0gaTsgY2kgPCBpICsgbGVuZ3RoOyBjaSsrKSB7XG4gICAgICAgICAgICBjaHVua2VkLnB1c2goaXRlcmFibGVbY2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRzLnB1c2goY2h1bmtlZCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuZHNXaXRoKHN0cmluZywgZXhwZWN0ZWRFbmRpbmcpIHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8IGV4cGVjdGVkRW5kaW5nLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFjdHVhbEVuZGluZyA9IHN0cmluZy5zdWJzdHIoc3RyaW5nLmxlbmd0aCAtIGV4cGVjdGVkRW5kaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIGFjdHVhbEVuZGluZyA9PT0gZXhwZWN0ZWRFbmRpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChpdGVyYWJsZSwgZnVuYykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBpdGVyYWJsZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZ1bmMoaXRlcmFibGVbaV0sIGkpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob2xkT2JqKSB7XG4gICAgY29uc3QgbmV3T2JqID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2xkT2JqKSB7XG4gICAgICAgIGlmIChvbGRPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvbGRPYmpba2V5XTtcbiAgICAgICAgICAgIG5ld09ialt2YWx1ZV0gPSBrZXk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld09iajtcbn1cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShuKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5leHBvcnQgZnVuY3Rpb24gdGltZXMobnVtVGltZXMsIGZ1bmMpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaW1lczsgaSsrKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChmdW5jKGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShpdGVyYWJsZSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gaXRlcmFibGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRzLnB1c2goaXRlcmFibGVbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5UmVjdXJzaXZlbHkoaW5wdXQpIHtcbiAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiB0b0FycmF5KGlucHV0KS5tYXAodG9BcnJheVJlY3Vyc2l2ZWx5KTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0O1xufVxuZnVuY3Rpb24gaXNBcnJheUxpa2Uodikge1xuICAgIHJldHVybiBCb29sZWFuKHR5cGVvZiB2ID09PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsICYmICdsZW5ndGgnIGluIHYpO1xufVxuLyoqIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2FkZW1pYS1kZS1jb2RpZ28vcGFyc2UtY29udGVudC1yYW5nZS1oZWFkZXIvYmxvYi9tYXN0ZXIvaW5kZXguanMgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRlbnRSYW5nZShoZWFkZXJWYWx1ZSkge1xuICAgIGlmICghaGVhZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGVhZGVyVmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZUludCA9IChudW1iZXIpID0+IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTtcbiAgICAvLyBDaGVjayBmb3IgcHJlc2VuY2Ugb2YgdW5pdFxuICAgIGxldCBtYXRjaGVzID0gaGVhZGVyVmFsdWUubWF0Y2goL14oXFx3KikgLyk7XG4gICAgY29uc3QgdW5pdCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1sxXTtcbiAgICAvLyBjaGVjayBmb3Igc3RhcnQtZW5kL3NpemUgaGVhZGVyIGZvcm1hdFxuICAgIG1hdGNoZXMgPSBoZWFkZXJWYWx1ZS5tYXRjaCgvKFxcZCspLShcXGQrKVxcLyhcXGQrfFxcKikvKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgICAgIGZpcnN0OiBwYXJzZUludChtYXRjaGVzWzFdKSxcbiAgICAgICAgICAgIGxhc3Q6IHBhcnNlSW50KG1hdGNoZXNbMl0pLFxuICAgICAgICAgICAgbGVuZ3RoOiBtYXRjaGVzWzNdID09PSAnKicgPyBudWxsIDogcGFyc2VJbnQobWF0Y2hlc1szXSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGNoZWNrIGZvciBzaXplIGhlYWRlciBmb3JtYXRcbiAgICBtYXRjaGVzID0gaGVhZGVyVmFsdWUubWF0Y2goLyhcXGQrfFxcKikvKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgICAgIGZpcnN0OiBudWxsLFxuICAgICAgICAgICAgbGFzdDogbnVsbCxcbiAgICAgICAgICAgIGxlbmd0aDogbWF0Y2hlc1sxXSA9PT0gJyonID8gbnVsbCA6IHBhcnNlSW50KG1hdGNoZXNbMV0pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogUHJvbWlzaWZpZWQgd3JhcHBlciBhcm91bmQgJ3NldFRpbWVvdXQnIHRvIGFsbG93ICdhd2FpdCdcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmRzXVxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0KG1pbGxpc2Vjb25kcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB6aXAoYSwgYikge1xuICAgIGNvbnN0IEEgPSBBcnJheS5pc0FycmF5KGEpID8gYSA6IEFycmF5LmZyb20oYSk7XG4gICAgY29uc3QgQiA9IEFycmF5LmlzQXJyYXkoYikgPyBiIDogQXJyYXkuZnJvbShiKTtcbiAgICByZXR1cm4gQS5tYXAoKGssIGkpID0+IFtrLCBCW2ldXSk7XG59XG4vLyBCYXNlZCBvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvclxuZXhwb3J0IGNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAvLyBQYXNzIHJlbWFpbmluZyBhcmd1bWVudHMgKGluY2x1ZGluZyB2ZW5kb3Igc3BlY2lmaWMgb25lcykgdG8gcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93biAob25seSBhdmFpbGFibGUgb24gVjgpXG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQWJvcnRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gJ0Fib3J0RXJyb3InO1xuICAgICAgICB0aGlzLnNpZ25hbCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ3VzdG9tQWdncmVnYXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoZXJyb3JzLCBtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0FnZ3JlZ2F0ZUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY29uc3QgQWdncmVnYXRlRXJyb3IgPSBDdXN0b21BZ2dyZWdhdGVFcnJvcjtcbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVkRmxvYXRBcnJheShpbnB1dCkge1xuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoaW5wdXQpKSB7XG4gICAgICAgIGNvbnN0IGN0ciA9IGlucHV0LmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoY3RyID09PSBGbG9hdDMyQXJyYXkgfHwgY3RyID09PSBGbG9hdDY0QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVkSW50QXJyYXkoaW5wdXQpIHtcbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGlucHV0KSkge1xuICAgICAgICBjb25zdCBjdHIgPSBpbnB1dC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGN0ciA9PT0gSW50OEFycmF5IHx8IGN0ciA9PT0gSW50MTZBcnJheSB8fCBjdHIgPT09IEludDMyQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVkVWludEFycmF5KGlucHV0KSB7XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhpbnB1dCkpIHtcbiAgICAgICAgY29uc3QgY3RyID0gaW5wdXQuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChjdHIgPT09IFVpbnQ4QXJyYXkgfHxcbiAgICAgICAgICAgIGN0ciA9PT0gVWludDE2QXJyYXkgfHxcbiAgICAgICAgICAgIGN0ciA9PT0gVWludDMyQXJyYXkgfHxcbiAgICAgICAgICAgIGN0ciA9PT0gVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBjb25zdCB0eXBlTWFwID0ge1xuICAgIEZsb2F0NjRBcnJheSxcbiAgICBGbG9hdDMyQXJyYXksXG4gICAgVWludDMyQXJyYXksXG4gICAgVWludDE2QXJyYXksXG4gICAgVWludDhBcnJheSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWlja0xSVSBleHRlbmRzIE1hcCB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoIShvcHRpb25zLm1heFNpemUgJiYgb3B0aW9ucy5tYXhTaXplID4gMCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2BtYXhTaXplYCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLm1heEFnZSA9PT0gJ251bWJlcicgJiYgb3B0aW9ucy5tYXhBZ2UgPT09IDApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2BtYXhBZ2VgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAnKTtcblx0XHR9XG5cblx0XHQvLyBUT0RPOiBVc2UgcHJpdmF0ZSBjbGFzcyBmaWVsZHMgd2hlbiBFU0xpbnQgc3VwcG9ydHMgdGhlbS5cblx0XHR0aGlzLm1heFNpemUgPSBvcHRpb25zLm1heFNpemU7XG5cdFx0dGhpcy5tYXhBZ2UgPSBvcHRpb25zLm1heEFnZSB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cdFx0dGhpcy5vbkV2aWN0aW9uID0gb3B0aW9ucy5vbkV2aWN0aW9uO1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy5vbGRDYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdC8vIFRPRE86IFVzZSBwcml2YXRlIGNsYXNzIG1ldGhvZHMgd2hlbiB0YXJnZXRpbmcgTm9kZS5qcyAxNi5cblx0X2VtaXRFdmljdGlvbnMoY2FjaGUpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMub25FdmljdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgW2tleSwgaXRlbV0gb2YgY2FjaGUpIHtcblx0XHRcdHRoaXMub25FdmljdGlvbihrZXksIGl0ZW0udmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdF9kZWxldGVJZkV4cGlyZWQoa2V5LCBpdGVtKSB7XG5cdFx0aWYgKHR5cGVvZiBpdGVtLmV4cGlyeSA9PT0gJ251bWJlcicgJiYgaXRlbS5leHBpcnkgPD0gRGF0ZS5ub3coKSkge1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm9uRXZpY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5vbkV2aWN0aW9uKGtleSwgaXRlbS52YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLmRlbGV0ZShrZXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdF9nZXRPckRlbGV0ZUlmRXhwaXJlZChrZXksIGl0ZW0pIHtcblx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgaXRlbSk7XG5cdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gaXRlbS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRfZ2V0SXRlbVZhbHVlKGtleSwgaXRlbSkge1xuXHRcdHJldHVybiBpdGVtLmV4cGlyeSA/IHRoaXMuX2dldE9yRGVsZXRlSWZFeHBpcmVkKGtleSwgaXRlbSkgOiBpdGVtLnZhbHVlO1xuXHR9XG5cblx0X3BlZWsoa2V5LCBjYWNoZSkge1xuXHRcdGNvbnN0IGl0ZW0gPSBjYWNoZS5nZXQoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoa2V5LCBpdGVtKTtcblx0fVxuXG5cdF9zZXQoa2V5LCB2YWx1ZSkge1xuXHRcdHRoaXMuY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdHRoaXMuX3NpemUrKztcblxuXHRcdGlmICh0aGlzLl9zaXplID49IHRoaXMubWF4U2l6ZSkge1xuXHRcdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdFx0XHR0aGlzLl9lbWl0RXZpY3Rpb25zKHRoaXMub2xkQ2FjaGUpO1xuXHRcdFx0dGhpcy5vbGRDYWNoZSA9IHRoaXMuY2FjaGU7XG5cdFx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdH1cblx0fVxuXG5cdF9tb3ZlVG9SZWNlbnQoa2V5LCBpdGVtKSB7XG5cdFx0dGhpcy5vbGRDYWNoZS5kZWxldGUoa2V5KTtcblx0XHR0aGlzLl9zZXQoa2V5LCBpdGVtKTtcblx0fVxuXG5cdCogX2VudHJpZXNBc2NlbmRpbmcoKSB7XG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMub2xkQ2FjaGUpIHtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW07XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHZhbHVlKTtcblx0XHRcdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0eWllbGQgaXRlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmNhY2hlKSB7XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtO1xuXHRcdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHZhbHVlKTtcblx0XHRcdGlmIChkZWxldGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHR5aWVsZCBpdGVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldChrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMuY2FjaGUuZ2V0KGtleSk7XG5cblx0XHRcdHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoa2V5LCBpdGVtKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vbGRDYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMub2xkQ2FjaGUuZ2V0KGtleSk7XG5cdFx0XHRpZiAodGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgaXRlbSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuX21vdmVUb1JlY2VudChrZXksIGl0ZW0pO1xuXHRcdFx0XHRyZXR1cm4gaXRlbS52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzZXQoa2V5LCB2YWx1ZSwge21heEFnZSA9IHRoaXMubWF4QWdlfSA9IHt9KSB7XG5cdFx0Y29uc3QgZXhwaXJ5ID1cblx0XHRcdHR5cGVvZiBtYXhBZ2UgPT09ICdudW1iZXInICYmIG1heEFnZSAhPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZID9cblx0XHRcdFx0RGF0ZS5ub3coKSArIG1heEFnZSA6XG5cdFx0XHRcdHVuZGVmaW5lZDtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0dGhpcy5jYWNoZS5zZXQoa2V5LCB7XG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRleHBpcnlcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zZXQoa2V5LCB7dmFsdWUsIGV4cGlyeX0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzKGtleSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gIXRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHRoaXMuY2FjaGUuZ2V0KGtleSkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gIXRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHRoaXMub2xkQ2FjaGUuZ2V0KGtleSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHBlZWsoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLl9wZWVrKGtleSwgdGhpcy5jYWNoZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLl9wZWVrKGtleSwgdGhpcy5vbGRDYWNoZSk7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlKGtleSkge1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLmNhY2hlLmRlbGV0ZShrZXkpO1xuXHRcdGlmIChkZWxldGVkKSB7XG5cdFx0XHR0aGlzLl9zaXplLS07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMub2xkQ2FjaGUuZGVsZXRlKGtleSkgfHwgZGVsZXRlZDtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuY2FjaGUuY2xlYXIoKTtcblx0XHR0aGlzLm9sZENhY2hlLmNsZWFyKCk7XG5cdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdH1cblxuXHRyZXNpemUobmV3U2l6ZSkge1xuXHRcdGlmICghKG5ld1NpemUgJiYgbmV3U2l6ZSA+IDApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdgbWF4U2l6ZWAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZW1zID0gWy4uLnRoaXMuX2VudHJpZXNBc2NlbmRpbmcoKV07XG5cdFx0Y29uc3QgcmVtb3ZlQ291bnQgPSBpdGVtcy5sZW5ndGggLSBuZXdTaXplO1xuXHRcdGlmIChyZW1vdmVDb3VudCA8IDApIHtcblx0XHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKGl0ZW1zKTtcblx0XHRcdHRoaXMub2xkQ2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0XHR0aGlzLl9zaXplID0gaXRlbXMubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocmVtb3ZlQ291bnQgPiAwKSB7XG5cdFx0XHRcdHRoaXMuX2VtaXRFdmljdGlvbnMoaXRlbXMuc2xpY2UoMCwgcmVtb3ZlQ291bnQpKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbGRDYWNoZSA9IG5ldyBNYXAoaXRlbXMuc2xpY2UocmVtb3ZlQ291bnQpKTtcblx0XHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0XHR0aGlzLl9zaXplID0gMDtcblx0XHR9XG5cblx0XHR0aGlzLm1heFNpemUgPSBuZXdTaXplO1xuXHR9XG5cblx0KiBrZXlzKCkge1xuXHRcdGZvciAoY29uc3QgW2tleV0gb2YgdGhpcykge1xuXHRcdFx0eWllbGQga2V5O1xuXHRcdH1cblx0fVxuXG5cdCogdmFsdWVzKCkge1xuXHRcdGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRoaXMpIHtcblx0XHRcdHlpZWxkIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdCogW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMuY2FjaGUpIHtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW07XG5cdFx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdmFsdWUpO1xuXHRcdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHlpZWxkIFtrZXksIHZhbHVlLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5vbGRDYWNoZSkge1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAoZGVsZXRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR5aWVsZCBba2V5LCB2YWx1ZS52YWx1ZV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQqIGVudHJpZXNEZXNjZW5kaW5nKCkge1xuXHRcdGxldCBpdGVtcyA9IFsuLi50aGlzLmNhY2hlXTtcblx0XHRmb3IgKGxldCBpID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW07XG5cdFx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5fZGVsZXRlSWZFeHBpcmVkKGtleSwgdmFsdWUpO1xuXHRcdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHlpZWxkIFtrZXksIHZhbHVlLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpdGVtcyA9IFsuLi50aGlzLm9sZENhY2hlXTtcblx0XHRmb3IgKGxldCBpID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0XHRcdGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW07XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuX2RlbGV0ZUlmRXhwaXJlZChrZXksIHZhbHVlKTtcblx0XHRcdFx0aWYgKGRlbGV0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0eWllbGQgW2tleSwgdmFsdWUudmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0KiBlbnRyaWVzQXNjZW5kaW5nKCkge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuX2VudHJpZXNBc2NlbmRpbmcoKSkge1xuXHRcdFx0eWllbGQgW2tleSwgdmFsdWUudmFsdWVdO1xuXHRcdH1cblx0fVxuXG5cdGdldCBzaXplKCkge1xuXHRcdGlmICghdGhpcy5fc2l6ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub2xkQ2FjaGUuc2l6ZTtcblx0XHR9XG5cblx0XHRsZXQgb2xkQ2FjaGVTaXplID0gMDtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiB0aGlzLm9sZENhY2hlLmtleXMoKSkge1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdG9sZENhY2hlU2l6ZSsrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1pbih0aGlzLl9zaXplICsgb2xkQ2FjaGVTaXplLCB0aGlzLm1heFNpemUpO1xuXHR9XG5cblx0ZW50cmllcygpIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRyaWVzQXNjZW5kaW5nKCk7XG5cdH1cblxuXHRmb3JFYWNoKGNhbGxiYWNrRnVuY3Rpb24sIHRoaXNBcmd1bWVudCA9IHRoaXMpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLmVudHJpZXNBc2NlbmRpbmcoKSkge1xuXHRcdFx0Y2FsbGJhY2tGdW5jdGlvbi5jYWxsKHRoaXNBcmd1bWVudCwgdmFsdWUsIGtleSwgdGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShbLi4udGhpcy5lbnRyaWVzQXNjZW5kaW5nKCldKTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRTdWJzdHJpbmcoc3RyaW5nLCBzdWJzdHJpbmcpIHtcbiAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoc3Vic3RyaW5nLCBcImdcIik7XG4gIGNvbnN0IG1hdGNoID0gc3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5sZW5ndGggOiAwO1xufVxuIiwiaW1wb3J0IGluZGV4T2ZNYXRjaCBmcm9tIFwiLi9pbmRleC1vZi1tYXRjaC5tanNcIjtcbmltcG9ydCBpbmRleE9mTWF0Y2hFbmQgZnJvbSBcIi4vaW5kZXgtb2YtbWF0Y2gtZW5kLm1qc1wiO1xuaW1wb3J0IGNvdW50U3Vic3RyaW5nIGZyb20gXCIuL2NvdW50LXN1YnN0cmluZy5tanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFRhZ0J5TmFtZSh4bWwsIHRhZ05hbWUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVidWcgPSAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKSB8fCBmYWxzZTtcbiAgY29uc3QgbmVzdGVkID0gIShvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm5lc3RlZCA9PT0gZmFsc2UpO1xuXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAob3B0aW9ucyAmJiBvcHRpb25zLnN0YXJ0SW5kZXgpIHx8IDA7XG5cbiAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIHN0YXJ0aW5nIGZpbmRUYWdCeU5hbWUgd2l0aFwiLCB0YWdOYW1lLCBcIiBhbmQgXCIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gaW5kZXhPZk1hdGNoKHhtbCwgYFxcPCR7dGFnTmFtZX1bIFxcblxcPlxcL11gLCBzdGFydEluZGV4KTtcbiAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIHN0YXJ0OlwiLCBzdGFydCk7XG4gIGlmIChzdGFydCA9PT0gLTEpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgY29uc3QgYWZ0ZXJTdGFydCA9IHhtbC5zbGljZShzdGFydCArIHRhZ05hbWUubGVuZ3RoKTtcblxuICBsZXQgcmVsYXRpdmVFbmQgPSBpbmRleE9mTWF0Y2hFbmQoYWZ0ZXJTdGFydCwgXCJeW148XSpbIC9dPlwiLCAwKTtcblxuICBjb25zdCBzZWxmQ2xvc2luZyA9IHJlbGF0aXZlRW5kICE9PSAtMSAmJiBhZnRlclN0YXJ0W3JlbGF0aXZlRW5kIC0gMV0gPT09IFwiL1wiO1xuICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gc2VsZkNsb3Npbmc6XCIsIHNlbGZDbG9zaW5nKTtcblxuICBpZiAoc2VsZkNsb3NpbmcgPT09IGZhbHNlKSB7XG4gICAgLy8gY2hlY2sgaWYgdGFnIGhhcyBzdWJ0YWdzIHdpdGggdGhlIHNhbWUgbmFtZVxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGxldCBzdGFydEluZGV4ID0gMDtcbiAgICAgIGxldCBvcGVuaW5ncyA9IDE7XG4gICAgICBsZXQgY2xvc2luZ3MgPSAwO1xuICAgICAgd2hpbGUgKChyZWxhdGl2ZUVuZCA9IGluZGV4T2ZNYXRjaEVuZChhZnRlclN0YXJ0LCBcIlsgL11cIiArIHRhZ05hbWUgKyBcIj5cIiwgc3RhcnRJbmRleCkpICE9PSAtMSkge1xuICAgICAgICBjb25zdCBjbGlwID0gYWZ0ZXJTdGFydC5zdWJzdHJpbmcoc3RhcnRJbmRleCwgcmVsYXRpdmVFbmQgKyAxKTtcbiAgICAgICAgb3BlbmluZ3MgKz0gY291bnRTdWJzdHJpbmcoY2xpcCwgXCI8XCIgKyB0YWdOYW1lICsgXCJbIFxcblxcdD5dXCIpO1xuICAgICAgICBjbG9zaW5ncyArPSBjb3VudFN1YnN0cmluZyhjbGlwLCBcIjwvXCIgKyB0YWdOYW1lICsgXCI+XCIpO1xuICAgICAgICAvLyB3ZSBjYW4ndCBoYXZlIG1vcmUgb3BlbmluZ3MgdGhhbiBjbG9zaW5nc1xuICAgICAgICBpZiAoY2xvc2luZ3MgPj0gb3BlbmluZ3MpIGJyZWFrO1xuICAgICAgICBzdGFydEluZGV4ID0gcmVsYXRpdmVFbmQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbGF0aXZlRW5kID0gaW5kZXhPZk1hdGNoRW5kKGFmdGVyU3RhcnQsIFwiWyAvXVwiICsgdGFnTmFtZSArIFwiPlwiLCAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBlbmQgPSBzdGFydCArIHRhZ05hbWUubGVuZ3RoICsgcmVsYXRpdmVFbmQgKyAxO1xuICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gZW5kOlwiLCBlbmQpO1xuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICBjb25zdCBvdXRlciA9IHhtbC5zbGljZShzdGFydCwgZW5kKTtcbiAgLy8gdGFnIGlzIGxpa2UgPGdtbDppZGVudGlmaWVyIGNvZGVTcGFjZT1cIk9HUFwiPnVybjpvZ2M6ZGVmOmNyczpFUFNHOjozMjYxNzwvZ21sOmlkZW50aWZpZXI+XG5cbiAgbGV0IGlubmVyO1xuICBpZiAoc2VsZkNsb3NpbmcpIHtcbiAgICBpbm5lciA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgaW5uZXIgPSBvdXRlci5zbGljZShvdXRlci5pbmRleE9mKFwiPlwiKSArIDEsIG91dGVyLmxhc3RJbmRleE9mKFwiPFwiKSk7XG4gIH1cblxuICByZXR1cm4geyBpbm5lciwgb3V0ZXIsIHN0YXJ0LCBlbmQgfTtcbn1cbiIsImltcG9ydCBmaW5kVGFnQnlOYW1lIGZyb20gXCIuL2ZpbmQtdGFnLWJ5LW5hbWUubWpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRUYWdzQnlOYW1lKHhtbCwgdGFnTmFtZSwgb3B0aW9ucykge1xuICBjb25zdCB0YWdzID0gW107XG4gIGNvbnN0IGRlYnVnID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZykgfHwgZmFsc2U7XG4gIGNvbnN0IG5lc3RlZCA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubmVzdGVkID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMubmVzdGVkIDogdHJ1ZTtcbiAgbGV0IHN0YXJ0SW5kZXggPSAob3B0aW9ucyAmJiBvcHRpb25zLnN0YXJ0SW5kZXgpIHx8IDA7XG4gIGxldCB0YWc7XG4gIHdoaWxlICgodGFnID0gZmluZFRhZ0J5TmFtZSh4bWwsIHRhZ05hbWUsIHsgZGVidWcsIHN0YXJ0SW5kZXggfSkpKSB7XG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgc3RhcnRJbmRleCA9IHRhZy5zdGFydCArIDEgKyB0YWdOYW1lLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRJbmRleCA9IHRhZy5lbmQ7XG4gICAgfVxuICAgIHRhZ3MucHVzaCh0YWcpO1xuICB9XG4gIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJmaW5kVGFnc0J5TmFtZSBmb3VuZFwiLCB0YWdzLmxlbmd0aCwgXCJ0YWdzXCIpO1xuICByZXR1cm4gdGFncztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZSh0YWcsIGF0dHJpYnV0ZU5hbWUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVidWcgPSAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKSB8fCBmYWxzZTtcbiAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIGdldHRpbmcgXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCIgaW4gXCIgKyB0YWcpO1xuXG4gIGNvbnN0IHhtbCA9IHR5cGVvZiB0YWcgPT09IFwib2JqZWN0XCIgPyB0YWcub3V0ZXIgOiB0YWc7XG5cbiAgLy8gb25seSBzZWFyY2ggZm9yIGF0dHJpYnV0ZXMgaW4gdGhlIG9wZW5pbmcgdGFnXG4gIGNvbnN0IG9wZW5pbmcgPSB4bWwuc2xpY2UoMCwgeG1sLmluZGV4T2YoXCI+XCIpICsgMSk7XG5cbiAgY29uc3QgcXVvdGVjaGFycyA9IFsnXCInLCBcIidcIl07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVvdGVjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYXIgPSBxdW90ZWNoYXJzW2ldO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBhdHRyaWJ1dGVOYW1lICsgXCJcXFxcPVwiICsgY2hhciArIFwiKFteXCIgKyBjaGFyICsgXCJdKilcIiArIGNoYXI7XG4gICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIlt4bWwtdXRpbHNdIHBhdHRlcm46XCIsIHBhdHRlcm4pO1xuXG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICAgIGNvbnN0IG1hdGNoID0gcmUuZXhlYyhvcGVuaW5nKTtcbiAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiW3htbC11dGlsc10gbWF0Y2g6XCIsIG1hdGNoKTtcbiAgICBpZiAobWF0Y2gpIHJldHVybiBtYXRjaFsxXTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXhPZk1hdGNoRW5kKHhtbCwgcGF0dGVybiwgc3RhcnRJbmRleCkge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gIGNvbnN0IG1hdGNoID0gcmUuZXhlYyh4bWwuc2xpY2Uoc3RhcnRJbmRleCkpO1xuICBpZiAobWF0Y2gpIHJldHVybiBzdGFydEluZGV4ICsgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSAxO1xuICBlbHNlIHJldHVybiAtMTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4T2ZNYXRjaCh4bWwsIHBhdHRlcm4sIHN0YXJ0SW5kZXgpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICBjb25zdCBtYXRjaCA9IHJlLmV4ZWMoeG1sLnNsaWNlKHN0YXJ0SW5kZXgpKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gc3RhcnRJbmRleCArIG1hdGNoLmluZGV4O1xuICBlbHNlIHJldHVybiAtMTtcbn1cbiIsIi8vQHRzLWNoZWNrXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgRGF0YXNldCB9IGZyb20gJ2dyaWR2aXonXG5pbXBvcnQgeyBmcm9tVXJsIH0gZnJvbSAnZ2VvdGlmZidcblxuLyoqXG4gKiBBIGRhdGFzZXQgY29tcG9zZWQgb2YgYSBDT0dlbyBmaWxlLlxuICogQHNlZSBodHRwczovL3d3dy5jb2dlby5vcmcvXG4gKlxuICogQG1vZHVsZSBkYXRhc2V0XG4gKiBAYXV0aG9yIEpvc2VwaCBEYXZpZXMsIEp1bGllbiBHYWZmdXJpXG4gKi9cbmV4cG9ydCBjbGFzcyBDT0dlbyBleHRlbmRzIERhdGFzZXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtYXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gSW5pdGlhbCByZXNvbHV0aW9uOyB0aGUgQ09HIHBpeGVsIHNpemUgaXMgdXNlZCBhZnRlciBsb2FkaW5nLlxuICAgICAqIEBwYXJhbSB7e3ByZXByb2Nlc3M/OmZ1bmN0aW9uKG9iamVjdCk6Ym9vbGVhbiwgYmFuZHM/Om51bWJlcltdLCBoZWFkZXJzPzpvYmplY3QsIGNyZWRlbnRpYWxzPzpSZXF1ZXN0Q3JlZGVudGlhbHMsIG1heFJhbmdlcz86bnVtYmVyfX0gb3B0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgdXJsLCByZXNvbHV0aW9uLCBvcHRzID0ge30pIHtcbiAgICAgICAgc3VwZXIobWFwLCB1cmwsIHJlc29sdXRpb24sIG9wdHMpXG4gICAgICAgIHRoaXMucmVtb3RlT3B0aW9ucyA9IG9wdHMucmVtb3RlT3B0aW9ucyB8fCBvcHRzXG5cbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48b2JqZWN0Pn0gKi9cbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG5cbiAgICAgICAgLyoqIEB0eXBlIHtudW1iZXJbXXx1bmRlZmluZWR9ICovXG4gICAgICAgIHRoaXMuYmFuZHMgPSBvcHRzLmJhbmRzXG5cbiAgICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICAgIHRoaXMuaW5mb0xvYWRpbmdTdGF0dXMgPSAnbm90TG9hZGVkJ1xuXG4gICAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgICB0aGlzLmRhdGFMb2FkaW5nU3RhdHVzID0gJ25vdExvYWRlZCdcblxuICAgICAgICAvKiogQHR5cGUge2FueX0gKi9cbiAgICAgICAgdGhpcy50aWZmID0gdW5kZWZpbmVkXG5cbiAgICAgICAgLyoqIEB0eXBlIHthbnl9ICovXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB1bmRlZmluZWRcblxuICAgICAgICAvKiogQHR5cGUge3tjb3VudDpudW1iZXIsbmFtZXM6c3RyaW5nW10sbm9EYXRhOmFueX0gfCB1bmRlZmluZWR9ICovXG4gICAgICAgIHRoaXMucmFzdGVySW5mbyA9IHVuZGVmaW5lZFxuXG4gICAgICAgIC8qKiBAdHlwZSB7TWFwPHN0cmluZywgQXJyYXkuPG9iamVjdD4+fSAqL1xuICAgICAgICB0aGlzLnZpZXdDYWNoZSA9IG5ldyBNYXAoKVxuXG4gICAgICAgIC8qKiBAdHlwZSB7QWJvcnRDb250cm9sbGVyfHVuZGVmaW5lZH0gKi9cbiAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSB1bmRlZmluZWRcblxuICAgICAgICAvKiogQHR5cGUge3t4TWluOm51bWJlcix4TWF4Om51bWJlcix5TWluOm51bWJlcix5TWF4Om51bWJlcn18dW5kZWZpbmVkfSAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdWaWV3ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgdGhpcy5nZXREYXRhKClcbiAgICB9XG5cbiAgICAvKiogQHJldHVybnMge3RoaXN9ICovXG4gICAgZ2V0RGF0YShleHRHZW8gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGV4dEdlbykgdGhpcy5wZW5kaW5nVmlldyA9IGV4dEdlb1xuXG4gICAgICAgIGlmICh0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID09PSAnbm90TG9hZGVkJykge1xuICAgICAgICAgICAgdGhpcy5pbmZvTG9hZGluZ1N0YXR1cyA9ICdsb2FkaW5nJ1xuICAgICAgICAgICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbEZpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMucmVtb3RlT3B0aW9ucy5oZWFkZXJzID8geyBoZWFkZXJzOiB0aGlzLnJlbW90ZU9wdGlvbnMuaGVhZGVycyB9IDoge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMucmVtb3RlT3B0aW9ucy5jcmVkZW50aWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBjcmVkZW50aWFsczogdGhpcy5yZW1vdGVPcHRpb25zLmNyZWRlbnRpYWxzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihOdW1iZXIuaXNJbnRlZ2VyKHRoaXMucmVtb3RlT3B0aW9ucy5tYXhSYW5nZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IG1heFJhbmdlczogdGhpcy5yZW1vdGVPcHRpb25zLm1heFJhbmdlcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWZmID0gYXdhaXQgZnJvbVVybChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBhd2FpdCB0aGlzLnRpZmYuZ2V0SW1hZ2UoKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kQ291bnQgPSB0aGlzLmltYWdlLmdldFNhbXBsZXNQZXJQaXhlbCgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhbmRzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFuZHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQXJyYXkuZnJvbSh7IGxlbmd0aDogYmFuZENvdW50IH0sIChfLCBpbmRleCkgPT4gaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhbmRzXG5cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVCYW5kcyhiYW5kcywgYmFuZENvdW50KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGJhbmRzLm1hcCgoYmFuZCkgPT4gdGhpcy5pbWFnZS5nZXRHREFMTWV0YWRhdGEoYmFuZCkpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kTmFtZXMgPSBtZXRhZGF0YS5tYXAoKGJhbmRNZXRhZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYmFuZE1ldGFkYXRhICYmIGJhbmRNZXRhZGF0YS5ERVNDUklQVElPTlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgJiYgZGVzY3JpcHRpb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGJhbmQke2JhbmRzW2luZGV4XSArIDF9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUJhbmROYW1lcyhiYW5kTmFtZXMpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3Jlc29sdXRpb25YLCByZXNvbHV0aW9uWV0gPSB0aGlzLmltYWdlLmdldFJlc29sdXRpb24oKVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVJhc3RlcihyZXNvbHV0aW9uWCwgcmVzb2x1dGlvblksIHRoaXMuaW1hZ2UpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXN0ZXJJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGJhbmRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzOiBiYW5kTmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBub0RhdGE6IHRoaXMuaW1hZ2UuZ2V0R0RBTE5vRGF0YSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5kcyA9IGJhbmRzXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbFdpZHRoID0gTWF0aC5hYnMocmVzb2x1dGlvblgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IGNlbGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nVmlldykgdGhpcy5sb2FkVmlldyh0aGlzLnBlbmRpbmdWaWV3KVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLnJlZHJhdygpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIG1ldGFkYXRhIGZyb20gJyArIHRoaXMudXJsKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2ZhaWxlZCdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5mb0xvYWRpbmdTdGF0dXMgPT09ICdsb2FkZWQnICYmIGV4dEdlbykge1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlldyhleHRHZW8pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7e3hNaW46bnVtYmVyLHhNYXg6bnVtYmVyLHlNaW46bnVtYmVyLHlNYXg6bnVtYmVyfX0gZXh0R2VvXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgbG9hZFZpZXcoZXh0R2VvKSB7XG4gICAgICAgIGlmICghdGhpcy5pbWFnZSB8fCAhdGhpcy5yYXN0ZXJJbmZvKSByZXR1cm5cblxuICAgICAgICBjb25zdCBiYm94ID0gZ2V0Q2xpcHBlZEJvdW5kaW5nQm94KHRoaXMuaW1hZ2UsIGV4dEdlbylcbiAgICAgICAgaWYgKCFiYm94KSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgIHRoaXMuY2VsbHNWaWV3Q2FjaGUgPSBbXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXkgPSBbXG4gICAgICAgICAgICBiYm94WzBdLnRvUHJlY2lzaW9uKDEyKSxcbiAgICAgICAgICAgIGJib3hbMV0udG9QcmVjaXNpb24oMTIpLFxuICAgICAgICAgICAgYmJveFsyXS50b1ByZWNpc2lvbigxMiksXG4gICAgICAgICAgICBiYm94WzNdLnRvUHJlY2lzaW9uKDEyKSxcbiAgICAgICAgXS5qb2luKCcsJylcbiAgICAgICAgaWYgKHRoaXMudmlld0NhY2hlLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxzID0gdGhpcy52aWV3Q2FjaGUuZ2V0KGtleSkgfHwgW11cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld0NhY2hlKGV4dEdlbylcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcCkgdGhpcy5tYXAucmVkcmF3KClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYW5jZWxDdXJyZW50UmVxdWVzdHMoKVxuICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICB0aGlzLmRhdGFMb2FkaW5nU3RhdHVzID0gJ2xvYWRpbmcnXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5ZXSA9IHRoaXMuaW1hZ2UuZ2V0T3JpZ2luKClcbiAgICAgICAgICAgIGNvbnN0IFtmdWxsUmVzb2x1dGlvblgsIGZ1bGxSZXNvbHV0aW9uWV0gPSB0aGlzLmltYWdlLmdldFJlc29sdXRpb24oKVxuICAgICAgICAgICAgY29uc3QgaW1hZ2VDb3VudCA9IGF3YWl0IHRoaXMudGlmZi5nZXRJbWFnZUNvdW50KClcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSBhd2FpdCBnZXRCZXN0SW1hZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy50aWZmLFxuICAgICAgICAgICAgICAgIGltYWdlQ291bnQsXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uLFxuICAgICAgICAgICAgICAgIGZ1bGxSZXNvbHV0aW9uWCxcbiAgICAgICAgICAgICAgICBmdWxsUmVzb2x1dGlvbllcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IFtyZXNvbHV0aW9uWCwgcmVzb2x1dGlvblldID0gc2VsZWN0ZWRJbWFnZS5nZXRSZXNvbHV0aW9uKHRoaXMuaW1hZ2UpXG4gICAgICAgICAgICBjb25zdCBpc1BpeGVsQXJlYSA9IHRoaXMuaW1hZ2UuZ2V0R2VvS2V5cygpPy5HVFJhc3RlclR5cGVHZW9LZXkgIT09IDJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGdldFBpeGVsV2luZG93KFxuICAgICAgICAgICAgICAgIG9yaWdpblgsXG4gICAgICAgICAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uWCxcbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uWSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEltYWdlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZS5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBiYm94XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmICghd2luZG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZSA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N0YXR1cyA9ICdsb2FkZWQnXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJhc3RlciA9IGF3YWl0IHNlbGVjdGVkSW1hZ2UucmVhZFJhc3RlcnMoe1xuICAgICAgICAgICAgICAgIHdpbmRvdyxcbiAgICAgICAgICAgICAgICBzYW1wbGVzOiB0aGlzLmJhbmRzLFxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmFzdGVyKSB8fCByYXN0ZXIubGVuZ3RoICE9PSB0aGlzLmJhbmRzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPR2VvIHJhc3RlciBkYXRhIGRvZXMgbm90IG1hdGNoIHRoZSBzZWxlY3RlZCBiYW5kcy4nKVxuXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd1syXSAtIHdpbmRvd1swXVxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93WzNdIC0gd2luZG93WzFdXG4gICAgICAgICAgICBjb25zdCBwaXhlbENvdW50ID0gd2lkdGggKiBoZWlnaHRcbiAgICAgICAgICAgIGlmIChyYXN0ZXIuc29tZSgoYmFuZCkgPT4gYmFuZC5sZW5ndGggIT09IHBpeGVsQ291bnQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ09HZW8gcmFzdGVyIGRhdGEgZG9lcyBub3QgbWF0Y2ggdGhlIGltYWdlIHdpbmRvdy4nKVxuXG4gICAgICAgICAgICBjb25zdCBjZWxscyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgd2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gcm93ICogd2lkdGggKyBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGlzUGl4ZWxBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5YICsgKHdpbmRvd1swXSArIGNvbHVtbikgKiByZXNvbHV0aW9uWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5YICsgKHdpbmRvd1swXSArIGNvbHVtbiArIDEpICogcmVzb2x1dGlvblhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9yaWdpblggKyAod2luZG93WzBdICsgY29sdW1uKSAqIHJlc29sdXRpb25YIC0gTWF0aC5hYnMocmVzb2x1dGlvblgpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGlzUGl4ZWxBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZICsgKHdpbmRvd1sxXSArIHJvdykgKiByZXNvbHV0aW9uWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZICsgKHdpbmRvd1sxXSArIHJvdyArIDEpICogcmVzb2x1dGlvbllcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9yaWdpblkgKyAod2luZG93WzFdICsgcm93KSAqIHJlc29sdXRpb25ZIC0gTWF0aC5hYnMocmVzb2x1dGlvblkpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzRGF0YSA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYmFuZEluZGV4ID0gMDsgYmFuZEluZGV4IDwgdGhpcy5iYW5kcy5sZW5ndGg7IGJhbmRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJhc3RlcltiYW5kSW5kZXhdW3BpeGVsXVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFuZE5vRGF0YSA9IGdldEJhbmROb0RhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXN0ZXJJbmZvLm5vRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhc3RlckluZm8ubWV0YWRhdGFbYmFuZEluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNOb0RhdGEgPSBOdW1iZXIuaXNOYU4odmFsdWUpIHx8IGlzTm9EYXRhVmFsdWUodmFsdWUsIGJhbmROb0RhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsW3RoaXMucmFzdGVySW5mby5uYW1lc1tiYW5kSW5kZXhdXSA9IGlzTm9EYXRhID8gdW5kZWZpbmVkIDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOb0RhdGEpIGhhc0RhdGEgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0RhdGEpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXByb2Nlc3MgJiYgdGhpcy5wcmVwcm9jZXNzKGNlbGwpID09PSBmYWxzZSkgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudmlld0NhY2hlLnNpemUgPj0gMjApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRlc3QgPSB0aGlzLnZpZXdDYWNoZS5rZXlzKCkubmV4dCgpLnZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKG9sZGVzdCkgdGhpcy52aWV3Q2FjaGUuZGVsZXRlKG9sZGVzdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlld0NhY2hlLnNldChrZXksIGNlbGxzKVxuICAgICAgICAgICAgdGhpcy5jZWxscyA9IGNlbGxzXG4gICAgICAgICAgICB0aGlzLmRhdGFMb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld0NhY2hlKGV4dEdlbylcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcCkgdGhpcy5tYXAucmVkcmF3KClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHJldHVyblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IGxvYWQgdmlldyBmcm9tICcgKyB0aGlzLnVybClcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB0aGlzLmRhdGFMb2FkaW5nU3RhdHVzID0gJ2ZhaWxlZCdcbiAgICAgICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQ3VycmVudFJlcXVlc3RzKCkge1xuICAgICAgICBpZiAodGhpcy5hYm9ydENvbnRyb2xsZXIpIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICB9XG5cbiAgICAvKiogQHBhcmFtIHt7eE1pbjpudW1iZXIseE1heDpudW1iZXIseU1pbjpudW1iZXIseU1heDpudW1iZXJ9fSBleHRHZW8gKi9cbiAgICB1cGRhdGVWaWV3Q2FjaGUoZXh0R2VvKSB7XG4gICAgICAgIHRoaXMuY2VsbHNWaWV3Q2FjaGUgPSBbXVxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5jZWxscykge1xuICAgICAgICAgICAgaWYgKCtjZWxsLnggKyB0aGlzLnJlc29sdXRpb24gPCBleHRHZW8ueE1pbikgY29udGludWVcbiAgICAgICAgICAgIGlmICgrY2VsbC54IC0gdGhpcy5yZXNvbHV0aW9uID4gZXh0R2VvLnhNYXgpIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAoK2NlbGwueSArIHRoaXMucmVzb2x1dGlvbiA8IGV4dEdlby55TWluKSBjb250aW51ZVxuICAgICAgICAgICAgaWYgKCtjZWxsLnkgLSB0aGlzLnJlc29sdXRpb24gPiBleHRHZW8ueU1heCkgY29udGludWVcbiAgICAgICAgICAgIHRoaXMuY2VsbHNWaWV3Q2FjaGUucHVzaChjZWxsKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUJhbmRzKGJhbmRzLCBzYW1wbGVDb3VudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiYW5kcykgfHwgYmFuZHMubGVuZ3RoID09PSAwKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBiYW5kcyBvcHRpb24gbXVzdCBiZSBhIG5vbi1lbXB0eSBhcnJheSBvZiB6ZXJvLWJhc2VkIHNhbXBsZSBpbmRleGVzLicpXG4gICAgaWYgKGJhbmRzLnNvbWUoKGJhbmQpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKGJhbmQpIHx8IGJhbmQgPCAwIHx8IGJhbmQgPj0gc2FtcGxlQ291bnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgQmFuZCBpbmRleGVzIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZCAke3NhbXBsZUNvdW50IC0gMX0uYClcbiAgICBpZiAobmV3IFNldChiYW5kcykuc2l6ZSAhPT0gYmFuZHMubGVuZ3RoKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBiYW5kcyBvcHRpb24gbXVzdCBub3QgY29udGFpbiBkdXBsaWNhdGUgaW5kZXhlcy4nKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUJhbmROYW1lcyhiYW5kTmFtZXMpIHtcbiAgICBpZiAobmV3IFNldChiYW5kTmFtZXMpLnNpemUgIT09IGJhbmROYW1lcy5sZW5ndGgpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ09HZW8gYmFuZCBuYW1lcyBtdXN0IGJlIHVuaXF1ZSB0byBjcmVhdGUgY2VsbCBwcm9wZXJ0aWVzLicpXG4gICAgaWYgKGJhbmROYW1lcy5zb21lKChuYW1lKSA9PiBuYW1lID09PSAneCcgfHwgbmFtZSA9PT0gJ3knKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT0dlbyBiYW5kIG5hbWVzIGNhbm5vdCBiZSBcInhcIiBvciBcInlcIiwgd2hpY2ggYXJlIHJlc2VydmVkIGZvciBjZWxsIGNvb3JkaW5hdGVzLicpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmFzdGVyKHJlc29sdXRpb25YLCByZXNvbHV0aW9uWSwgaW1hZ2UpIHtcbiAgICBjb25zdCBjZWxsV2lkdGggPSBNYXRoLmFicyhyZXNvbHV0aW9uWClcbiAgICBjb25zdCBjZWxsSGVpZ2h0ID0gTWF0aC5hYnMocmVzb2x1dGlvblkpXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoY2VsbFdpZHRoKSB8fCAhTnVtYmVyLmlzRmluaXRlKGNlbGxIZWlnaHQpIHx8IGNlbGxXaWR0aCA8PSAwIHx8IGNlbGxIZWlnaHQgPD0gMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT0dlbyBwaXhlbCBkaW1lbnNpb25zIG11c3QgYmUgZmluaXRlIGFuZCBncmVhdGVyIHRoYW4gemVyby4nKVxuICAgIGlmIChNYXRoLmFicyhjZWxsV2lkdGggLSBjZWxsSGVpZ2h0KSA+IE1hdGgubWF4KGNlbGxXaWR0aCwgY2VsbEhlaWdodCkgKiAxZS05KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dyaWRWaXogcmVxdWlyZXMgc3F1YXJlIENPR2VvIHBpeGVscy4nKVxuICAgIGNvbnN0IHRyYW5zZm9ybWF0aW9uID0gaW1hZ2UuZ2V0RmlsZURpcmVjdG9yeSgpLmdldFZhbHVlKCdNb2RlbFRyYW5zZm9ybWF0aW9uJylcbiAgICBpZiAoXG4gICAgICAgIHRyYW5zZm9ybWF0aW9uICYmXG4gICAgICAgIChNYXRoLmFicyh0cmFuc2Zvcm1hdGlvblsxXSkgPiBjZWxsV2lkdGggKiAxZS0xMiB8fFxuICAgICAgICAgICAgTWF0aC5hYnModHJhbnNmb3JtYXRpb25bNF0pID4gY2VsbEhlaWdodCAqIDFlLTEyKVxuICAgIClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3RhdGVkIENPR2VvIGltYWdlcyBhcmUgbm90IHN1cHBvcnRlZC4nKVxufVxuXG5mdW5jdGlvbiBnZXRDbGlwcGVkQm91bmRpbmdCb3goaW1hZ2UsIGV4dEdlbykge1xuICAgIGNvbnN0IGJib3ggPSBpbWFnZS5nZXRCb3VuZGluZ0JveCgpXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJib3gpIHx8IGJib3gubGVuZ3RoICE9PSA0KSByZXR1cm4gdW5kZWZpbmVkXG4gICAgY29uc3QgeE1pbiA9IE1hdGgubWF4KGV4dEdlby54TWluLCBiYm94WzBdKVxuICAgIGNvbnN0IHhNYXggPSBNYXRoLm1pbihleHRHZW8ueE1heCwgYmJveFsyXSlcbiAgICBjb25zdCB5TWluID0gTWF0aC5tYXgoZXh0R2VvLnlNaW4sIGJib3hbMV0pXG4gICAgY29uc3QgeU1heCA9IE1hdGgubWluKGV4dEdlby55TWF4LCBiYm94WzNdKVxuICAgIGlmICh4TWluID49IHhNYXggfHwgeU1pbiA+PSB5TWF4KSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIFt4TWluLCB5TWluLCB4TWF4LCB5TWF4XVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRCZXN0SW1hZ2UodGlmZiwgaW1hZ2VDb3VudCwgZGVzaXJlZFJlc29sdXRpb24pIHtcbiAgICBjb25zdCBhbGxJbWFnZXMgPSBbXVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZUNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgdGlmZi5nZXRJbWFnZShpbmRleClcbiAgICAgICAgY29uc3Qgc3ViZmlsZVR5cGUgPSBpbWFnZS5maWxlRGlyZWN0b3J5LmdldFZhbHVlKCdTdWJmaWxlVHlwZScpXG4gICAgICAgIGNvbnN0IG5ld1N1YmZpbGVUeXBlID0gaW1hZ2UuZmlsZURpcmVjdG9yeS5nZXRWYWx1ZSgnTmV3U3ViZmlsZVR5cGUnKVxuICAgICAgICBpZiAoaW5kZXggPT09IDAgfHwgc3ViZmlsZVR5cGUgPT09IDIgfHwgKG5ld1N1YmZpbGVUeXBlIHx8IDApICYgMSlcbiAgICAgICAgICAgIGFsbEltYWdlcy5wdXNoKGltYWdlKVxuICAgIH1cbiAgICBhbGxJbWFnZXMuc29ydCgoYSwgYikgPT4gYS5nZXRXaWR0aCgpIC0gYi5nZXRXaWR0aCgpKVxuXG4gICAgY29uc3QgZmlyc3RJbWFnZSA9IGFsbEltYWdlc1swXVxuICAgIGxldCBzZWxlY3RlZCA9IGZpcnN0SW1hZ2VcbiAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGFsbEltYWdlcykge1xuICAgICAgICBzZWxlY3RlZCA9IGltYWdlXG4gICAgICAgIGNvbnN0IGltYWdlUmVzb2x1dGlvbiA9IE1hdGguYWJzKGltYWdlLmdldFJlc29sdXRpb24oZmlyc3RJbWFnZSlbMF0pXG4gICAgICAgIGlmIChkZXNpcmVkUmVzb2x1dGlvbiA+IGltYWdlUmVzb2x1dGlvbikgYnJlYWtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkXG59XG5cbmZ1bmN0aW9uIGdldFBpeGVsV2luZG93KG9yaWdpblgsIG9yaWdpblksIHJlc29sdXRpb25YLCByZXNvbHV0aW9uWSwgd2lkdGgsIGhlaWdodCwgYmJveCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICAgIChiYm94WzBdIC0gb3JpZ2luWCkgLyByZXNvbHV0aW9uWCxcbiAgICAgICAgKGJib3hbMl0gLSBvcmlnaW5YKSAvIHJlc29sdXRpb25YLFxuICAgIF1cbiAgICBjb25zdCByb3dzID0gW1xuICAgICAgICAoYmJveFsxXSAtIG9yaWdpblkpIC8gcmVzb2x1dGlvblksXG4gICAgICAgIChiYm94WzNdIC0gb3JpZ2luWSkgLyByZXNvbHV0aW9uWSxcbiAgICBdXG4gICAgY29uc3QgeE1pbiA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3IoTWF0aC5taW4oLi4uY29sdW1ucykpKVxuICAgIGNvbnN0IHhNYXggPSBNYXRoLm1pbih3aWR0aCwgTWF0aC5jZWlsKE1hdGgubWF4KC4uLmNvbHVtbnMpKSlcbiAgICBjb25zdCB5TWluID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihNYXRoLm1pbiguLi5yb3dzKSkpXG4gICAgY29uc3QgeU1heCA9IE1hdGgubWluKGhlaWdodCwgTWF0aC5jZWlsKE1hdGgubWF4KC4uLnJvd3MpKSlcbiAgICBpZiAoeE1pbiA+PSB4TWF4IHx8IHlNaW4gPj0geU1heCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBbeE1pbiwgeU1pbiwgeE1heCwgeU1heF1cbn1cblxuZnVuY3Rpb24gZ2V0QmFuZE5vRGF0YShnbG9iYWxOb0RhdGEsIG1ldGFkYXRhKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtZXRhZGF0YSA/IG1ldGFkYXRhLk5PREFUQV9WQUxVRSA6IHVuZGVmaW5lZFxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICAgIHJldHVybiBnbG9iYWxOb0RhdGFcbn1cblxuZnVuY3Rpb24gaXNOb0RhdGFWYWx1ZSh2YWx1ZSwgbm9EYXRhVmFsdWUpIHtcbiAgICBpZiAobm9EYXRhVmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4obm9EYXRhVmFsdWUpID8gTnVtYmVyLmlzTmFOKHZhbHVlKSA6IHZhbHVlID09PSBub0RhdGFWYWx1ZVxufVxuIiwiLy9AdHMtY2hlY2tcbid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBEYXRhc2V0IH0gZnJvbSAnZ3JpZHZpeidcbmltcG9ydCB7IGZyb21VcmwgfSBmcm9tICdnZW90aWZmJ1xuXG4vKipcbiAqIEEgZGF0YXNldCBjb21wb3NlZCBvZiBhIHNpbmdsZSBHZW9UaWZmIGZpbGUuXG4gKlxuICogQG1vZHVsZSBkYXRhc2V0XG4gKiBAYXV0aG9yIEpvc2VwaCBEYXZpZXMsIEp1bGllbiBHYWZmdXJpXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW9USUZGIGV4dGVuZHMgRGF0YXNldCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBJbml0aWFsIHJlc29sdXRpb247IHRoZSBHZW9USUZGIHBpeGVsIHNpemUgaXMgdXNlZCBhZnRlciBsb2FkaW5nLlxuICAgICAqIEBwYXJhbSB7e3ByZXByb2Nlc3M/OmZ1bmN0aW9uKG9iamVjdCk6Ym9vbGVhbiwgYmFuZHM/Om51bWJlcltdfX0gb3B0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgdXJsLCByZXNvbHV0aW9uLCBvcHRzID0ge30pIHtcbiAgICAgICAgc3VwZXIobWFwLCB1cmwsIHJlc29sdXRpb24sIG9wdHMpXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48b2JqZWN0Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBaZXJvLWJhc2VkIGJhbmQgaW5kZXhlcyB0byBsb2FkOyB1bmRlZmluZWQgbWVhbnMgYWxsIGJhbmRzLlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW118dW5kZWZpbmVkfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYW5kcyA9IG9wdHMuYmFuZHNcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5mb0xvYWRpbmdTdGF0dXMgPSAnbm90TG9hZGVkJ1xuXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgR2VvVElGRiBvbmNlIGFuZCBjb252ZXJ0IGl0cyBwaXhlbHMgdG8gR3JpZFZpeiBjZWxscy5cbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5pbmZvTG9hZGluZ1N0YXR1cyAhPT0gJ25vdExvYWRlZCcpIHJldHVybiB0aGlzXG5cbiAgICAgICAgdGhpcy5pbmZvTG9hZGluZ1N0YXR1cyA9ICdsb2FkaW5nJ1xuICAgICAgICA7KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlmZiA9IGF3YWl0IGZyb21VcmwodGhpcy51cmwsIHsgYWxsb3dGdWxsRmlsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgdGlmZi5nZXRJbWFnZSgpXG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgYmFuZCBpbmRleGVzXG5cbiAgICAgICAgICAgICAgICBjb25zdCBiYW5kQ291bnQgPSBpbWFnZS5nZXRTYW1wbGVzUGVyUGl4ZWwoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJhbmRzID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5kcyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEFycmF5LmZyb20oeyBsZW5ndGg6IGJhbmRDb3VudCB9LCAoXywgaW5kZXgpID0+IGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhbmRzXG5cbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmFuZHMpIHx8IGJhbmRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RoZSBiYW5kcyBvcHRpb24gbXVzdCBiZSBhIG5vbi1lbXB0eSBhcnJheSBvZiB6ZXJvLWJhc2VkIGJhbmQgaW5kZXhlcy4nXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAoYmFuZHMuc29tZSgoYmFuZCkgPT4gIU51bWJlci5pc0ludGVnZXIoYmFuZCkgfHwgYmFuZCA8IDAgfHwgYmFuZCA+PSBiYW5kQ291bnQpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgQmFuZCBpbmRleGVzIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZCAke2JhbmRDb3VudCAtIDF9LmApXG4gICAgICAgICAgICAgICAgaWYgKG5ldyBTZXQoYmFuZHMpLnNpemUgIT09IGJhbmRzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYmFuZHMgb3B0aW9uIG11c3Qgbm90IGNvbnRhaW4gZHVwbGljYXRlIGluZGV4ZXMuJylcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBiYW5kIG5hbWVzXG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGJhbmRzLm1hcCgoYmFuZCkgPT4gaW1hZ2UuZ2V0R0RBTE1ldGFkYXRhKGJhbmQpKSlcbiAgICAgICAgICAgICAgICBjb25zdCBiYW5kTmFtZXMgPSBtZXRhZGF0YS5tYXAoKGJhbmRNZXRhZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBiYW5kTWV0YWRhdGEgJiYgYmFuZE1ldGFkYXRhLkRFU0NSSVBUSU9OXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVzY3JpcHRpb24gPT09ICdzdHJpbmcnICYmIGRlc2NyaXB0aW9uLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgYmFuZCR7YmFuZHNbaW5kZXhdICsgMX1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAobmV3IFNldChiYW5kTmFtZXMpLnNpemUgIT09IGJhbmROYW1lcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvVElGRiBiYW5kIG5hbWVzIG11c3QgYmUgdW5pcXVlIHRvIGNyZWF0ZSBjZWxsIHByb3BlcnRpZXMuJylcbiAgICAgICAgICAgICAgICBpZiAoYmFuZE5hbWVzLnNvbWUoKG5hbWUpID0+IG5hbWUgPT09ICd4JyB8fCBuYW1lID09PSAneScpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnR2VvVElGRiBiYW5kIG5hbWVzIGNhbm5vdCBiZSBcInhcIiBvciBcInlcIiwgd2hpY2ggYXJlIHJlc2VydmVkIGZvciBjZWxsIGNvb3JkaW5hdGVzLidcbiAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHJlc29sdXRpb25zXG5cbiAgICAgICAgICAgICAgICBjb25zdCBbcmVzb2x1dGlvblgsIHJlc29sdXRpb25ZXSA9IGltYWdlLmdldFJlc29sdXRpb24oKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxXaWR0aCA9IE1hdGguYWJzKHJlc29sdXRpb25YKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxIZWlnaHQgPSBNYXRoLmFicyhyZXNvbHV0aW9uWSlcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFOdW1iZXIuaXNGaW5pdGUoY2VsbFdpZHRoKSB8fFxuICAgICAgICAgICAgICAgICAgICAhTnVtYmVyLmlzRmluaXRlKGNlbGxIZWlnaHQpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNlbGxXaWR0aCA8PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgIGNlbGxIZWlnaHQgPD0gMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9USUZGIHBpeGVsIGRpbWVuc2lvbnMgbXVzdCBiZSBmaW5pdGUgYW5kIGdyZWF0ZXIgdGhhbiB6ZXJvLicpXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGNlbGxXaWR0aCAtIGNlbGxIZWlnaHQpID4gTWF0aC5tYXgoY2VsbFdpZHRoLCBjZWxsSGVpZ2h0KSAqIDFlLTkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR3JpZFZpeiByZXF1aXJlcyBzcXVhcmUgR2VvVElGRiBwaXhlbHMuJylcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIG5vbiByb3RhdGVkIGltYWdlc1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBpbWFnZS5nZXRGaWxlRGlyZWN0b3J5KCkuZ2V0VmFsdWUoJ01vZGVsVHJhbnNmb3JtYXRpb24nKVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKHRyYW5zZm9ybWF0aW9uWzFdKSA+IGNlbGxXaWR0aCAqIDFlLTEyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyh0cmFuc2Zvcm1hdGlvbls0XSkgPiBjZWxsSGVpZ2h0ICogMWUtMTIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdGF0ZWQgR2VvVElGRiBpbWFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJylcblxuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHJhc3RlciBzaXplXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLmdldFdpZHRoKClcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5nZXRIZWlnaHQoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsQ291bnQgPSB3aWR0aCAqIGhlaWdodFxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFzdGVyID0gYXdhaXQgaW1hZ2UucmVhZFJhc3RlcnMoeyBzYW1wbGVzOiBiYW5kcyB9KVxuICAgICAgICAgICAgICAgIGlmIChyYXN0ZXIubGVuZ3RoICE9PSBiYW5kcy5sZW5ndGggfHwgcmFzdGVyLnNvbWUoKGJhbmQpID0+IGJhbmQubGVuZ3RoICE9PSBwaXhlbENvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9USUZGIHJhc3RlciBkYXRhIGRvZXMgbm90IG1hdGNoIHRoZSBpbWFnZSBkaW1lbnNpb25zLicpXG5cbiAgICAgICAgICAgICAgICAvLyByZWFkIHJhc3RlciBkYXRhIGFuZCBjb252ZXJ0IHRvIEdyaWRWaXogY2VsbHNcblxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5ZXSA9IGltYWdlLmdldE9yaWdpbigpXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQaXhlbEFyZWEgPSBpbWFnZS5nZXRHZW9LZXlzKCk/LkdUUmFzdGVyVHlwZUdlb0tleSAhPT0gMlxuICAgICAgICAgICAgICAgIGNvbnN0IG5vRGF0YVZhbHVlID0gaW1hZ2UuZ2V0R0RBTE5vRGF0YSgpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB3aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0gcm93ICogd2lkdGggKyBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXNQaXhlbEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWCArIGNvbHVtbiAqIHJlc29sdXRpb25YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5YICsgKGNvbHVtbiArIDEpICogcmVzb2x1dGlvblhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3JpZ2luWCArIGNvbHVtbiAqIHJlc29sdXRpb25YIC0gY2VsbFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpc1BpeGVsQXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1hdGgubWluKG9yaWdpblkgKyByb3cgKiByZXNvbHV0aW9uWSwgb3JpZ2luWSArIChyb3cgKyAxKSAqIHJlc29sdXRpb25ZKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9yaWdpblkgKyByb3cgKiByZXNvbHV0aW9uWSAtIGNlbGxIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0RhdGEgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBiYW5kSW5kZXggPSAwOyBiYW5kSW5kZXggPCBiYW5kcy5sZW5ndGg7IGJhbmRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByYXN0ZXJbYmFuZEluZGV4XVtwaXhlbF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYW5kTm9EYXRhID0gZ2V0QmFuZE5vRGF0YShub0RhdGFWYWx1ZSwgbWV0YWRhdGFbYmFuZEluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05vRGF0YSA9IE51bWJlci5pc05hTih2YWx1ZSkgfHwgaXNOb0RhdGFWYWx1ZSh2YWx1ZSwgYmFuZE5vRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsW2JhbmROYW1lc1tiYW5kSW5kZXhdXSA9IGlzTm9EYXRhID8gdW5kZWZpbmVkIDogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTm9EYXRhKSBoYXNEYXRhID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0RhdGEpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVwcm9jZXNzICYmIHRoaXMucHJlcHJvY2VzcyhjZWxsKSA9PT0gZmFsc2UpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGNlbGwpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSBjZWxsV2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gY2VsbHNcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2xvYWRlZCdcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLnJlZHJhdygpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIGRhdGEgZnJvbSAnICsgdGhpcy51cmwpXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Mb2FkaW5nU3RhdHVzID0gJ2ZhaWxlZCdcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGNlbGxzIGludGVyc2VjdGluZyB0aGUgY3VycmVudCBnZW9ncmFwaGljIGV4dGVudC5cbiAgICAgKiBAcGFyYW0ge3t4TWluOm51bWJlciwgeE1heDpudW1iZXIsIHlNaW46bnVtYmVyLCB5TWF4Om51bWJlcn19IGV4dEdlb1xuICAgICAqL1xuICAgIHVwZGF0ZVZpZXdDYWNoZShleHRHZW8pIHtcbiAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZSA9IFtdXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0aGlzLmNlbGxzKSB7XG4gICAgICAgICAgICBpZiAoK2NlbGwueCArIHRoaXMucmVzb2x1dGlvbiA8IGV4dEdlby54TWluKSBjb250aW51ZVxuICAgICAgICAgICAgaWYgKCtjZWxsLnggLSB0aGlzLnJlc29sdXRpb24gPiBleHRHZW8ueE1heCkgY29udGludWVcbiAgICAgICAgICAgIGlmICgrY2VsbC55ICsgdGhpcy5yZXNvbHV0aW9uIDwgZXh0R2VvLnlNaW4pIGNvbnRpbnVlXG4gICAgICAgICAgICBpZiAoK2NlbGwueSAtIHRoaXMucmVzb2x1dGlvbiA+IGV4dEdlby55TWF4KSBjb250aW51ZVxuICAgICAgICAgICAgdGhpcy5jZWxsc1ZpZXdDYWNoZS5wdXNoKGNlbGwpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEJhbmROb0RhdGEoZ2xvYmFsTm9EYXRhLCBtZXRhZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gbWV0YWRhdGEgPyBtZXRhZGF0YS5OT0RBVEFfVkFMVUUgOiB1bmRlZmluZWRcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgICByZXR1cm4gZ2xvYmFsTm9EYXRhXG59XG5cbmZ1bmN0aW9uIGlzTm9EYXRhVmFsdWUodmFsdWUsIG5vRGF0YVZhbHVlKSB7XG4gICAgaWYgKG5vRGF0YVZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKG5vRGF0YVZhbHVlKSA/IE51bWJlci5pc05hTih2YWx1ZSkgOiB2YWx1ZSA9PT0gbm9EYXRhVmFsdWVcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuaihjaHVua0lkLCBwcm9taXNlcyk7XG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IChjaHVua0lkICsgXCIuZ3JpZHZpei10aWZmLmpzXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKTsiLCJjb25zdCBpblByb2dyZXNzID0ge307XG5jb25zdCBkYXRhV2VicGFja1ByZWZpeCA9IFwiZ3JpZHZpei50aWZmOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0bGV0IHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHRjb25zdCBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGNvbnN0IGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zPy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xuY29uc3QgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdD8udGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdGxldCBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwcz86Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjp8Wz8jXS4qJC9nLCBcIlwiKS5yZXBsYWNlKC9cXC9bXi9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbmNvbnN0IGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdGxldCBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHRjb25zdCBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLmV2ZW50ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuY29uc3Qgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0bGV0IFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxuY29uc3QgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dyaWR2aXpfdGlmZlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtncmlkdml6X3RpZmZcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vQHRzLWNoZWNrXG4ndXNlIHN0cmljdCdcblxuZXhwb3J0IHsgR2VvVElGRiB9IGZyb20gXCIuL0dlb1RJRkYuanNcIlxuZXhwb3J0IHsgQ09HZW8gfSBmcm9tIFwiLi9DT0dlby5qc1wiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=