"use strict";
(globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || []).push([[2585],{

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApplyUnsignedRoundingMode: () => (/* reexport */ ApplyUnsignedRoundingMode),
  ArrayCreate: () => (/* reexport */ ArrayCreate),
  CanonicalizeLocaleList: () => (/* reexport */ CanonicalizeLocaleList),
  CanonicalizeTimeZoneName: () => (/* reexport */ CanonicalizeTimeZoneName),
  CoerceOptionsToObject: () => (/* reexport */ CoerceOptionsToObject),
  CollapseNumberRange: () => (/* reexport */ CollapseNumberRange),
  ComputeExponent: () => (/* reexport */ ComputeExponent),
  ComputeExponentForMagnitude: () => (/* reexport */ ComputeExponentForMagnitude),
  CurrencyDigits: () => (/* reexport */ CurrencyDigits),
  DateFromTime: () => (/* reexport */ DateFromTime),
  Day: () => (/* reexport */ Day),
  DayFromYear: () => (/* reexport */ DayFromYear),
  DayWithinYear: () => (/* reexport */ DayWithinYear),
  DaysInYear: () => (/* reexport */ DaysInYear),
  FormatApproximately: () => (/* reexport */ FormatApproximately),
  FormatNumeric: () => (/* reexport */ FormatNumeric),
  FormatNumericRange: () => (/* reexport */ FormatNumericRange),
  FormatNumericRangeToParts: () => (/* reexport */ FormatNumericRangeToParts),
  FormatNumericToParts: () => (/* reexport */ FormatNumericToParts),
  FormatNumericToString: () => (/* reexport */ FormatNumericToString),
  GetNumberOption: () => (/* reexport */ GetNumberOption),
  GetOption: () => (/* reexport */ GetOption),
  GetOptionsObject: () => (/* reexport */ GetOptionsObject),
  GetStringOrBooleanOption: () => (/* reexport */ GetStringOrBooleanOption),
  GetUnsignedRoundingMode: () => (/* reexport */ GetUnsignedRoundingMode),
  HasOwnProperty: () => (/* reexport */ HasOwnProperty),
  HourFromTime: () => (/* reexport */ HourFromTime),
  InLeapYear: () => (/* reexport */ InLeapYear),
  InitializeNumberFormat: () => (/* reexport */ InitializeNumberFormat),
  IsSanctionedSimpleUnitIdentifier: () => (/* reexport */ IsSanctionedSimpleUnitIdentifier),
  IsValidTimeZoneName: () => (/* reexport */ IsValidTimeZoneName),
  IsWellFormedCurrencyCode: () => (/* reexport */ IsWellFormedCurrencyCode),
  IsWellFormedUnitIdentifier: () => (/* reexport */ IsWellFormedUnitIdentifier),
  MinFromTime: () => (/* reexport */ MinFromTime),
  MonthFromTime: () => (/* reexport */ MonthFromTime),
  OrdinaryHasInstance: () => (/* reexport */ OrdinaryHasInstance),
  PartitionNumberPattern: () => (/* reexport */ PartitionNumberPattern),
  PartitionNumberRangePattern: () => (/* reexport */ PartitionNumberRangePattern),
  PartitionPattern: () => (/* reexport */ PartitionPattern),
  RangePatternType: () => (/* reexport */ RangePatternType),
  SANCTIONED_UNITS: () => (/* reexport */ SANCTIONED_UNITS),
  SIMPLE_UNITS: () => (/* reexport */ SIMPLE_UNITS),
  SameValue: () => (/* reexport */ SameValue),
  SecFromTime: () => (/* reexport */ SecFromTime),
  SetNumberFormatDigitOptions: () => (/* reexport */ SetNumberFormatDigitOptions),
  SetNumberFormatUnitOptions: () => (/* reexport */ SetNumberFormatUnitOptions),
  SupportedLocales: () => (/* reexport */ SupportedLocales),
  TimeClip: () => (/* reexport */ TimeClip),
  TimeFromYear: () => (/* reexport */ TimeFromYear),
  ToIntlMathematicalValue: () => (/* reexport */ ToIntlMathematicalValue),
  ToNumber: () => (/* reexport */ ToNumber),
  ToObject: () => (/* reexport */ ToObject),
  ToPrimitive: () => (/* reexport */ ToPrimitive),
  ToRawFixed: () => (/* reexport */ ToRawFixed),
  ToRawPrecision: () => (/* reexport */ ToRawPrecision),
  ToString: () => (/* reexport */ ToString),
  Type: () => (/* reexport */ Type),
  WeekDay: () => (/* reexport */ WeekDay),
  YearFromTime: () => (/* reexport */ YearFromTime),
  ZERO: () => (/* reexport */ ZERO),
  _formatToParts: () => (/* reexport */ formatToParts),
  createDataProperty: () => (/* reexport */ createDataProperty),
  createMemoizedDateTimeFormat: () => (/* reexport */ createMemoizedDateTimeFormat),
  createMemoizedListFormat: () => (/* reexport */ createMemoizedListFormat),
  createMemoizedLocale: () => (/* reexport */ createMemoizedLocale),
  createMemoizedNumberFormat: () => (/* reexport */ createMemoizedNumberFormat),
  createMemoizedPluralRules: () => (/* reexport */ createMemoizedPluralRules),
  defineProperty: () => (/* reexport */ defineProperty),
  getInternalSlot: () => (/* reexport */ getInternalSlot),
  getMultiInternalSlots: () => (/* reexport */ getMultiInternalSlots),
  invariant: () => (/* reexport */ invariant),
  isLiteralPart: () => (/* reexport */ isLiteralPart),
  isMissingLocaleDataError: () => (/* reexport */ isMissingLocaleDataError),
  msFromTime: () => (/* reexport */ msFromTime),
  removeUnitNamespace: () => (/* reexport */ removeUnitNamespace),
  setInternalSlot: () => (/* reexport */ setInternalSlot),
  setMultiInternalSlots: () => (/* reexport */ setMultiInternalSlots)
});

;// ./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */
function CanonicalizeLocaleList(locales) {
    // TODO
    return Intl.getCanonicalLocales(locales);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js
/**
 * https://tc39.es/ecma402/#sec-canonicalizetimezonename
 * @param tz
 */
function CanonicalizeTimeZoneName(tz, _a) {
    var zoneNames = _a.zoneNames, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var uppercasedZones = zoneNames.reduce(function (all, z) {
        all[z.toUpperCase()] = z;
        return all;
    }, {});
    var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
    if (ianaTimeZone === 'Etc/UTC' || ianaTimeZone === 'Etc/GMT') {
        return 'UTC';
    }
    return ianaTimeZone;
}

;// ./node_modules/decimal.js/decimal.mjs
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */


// -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


  // The maximum exponent magnitude.
  // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
var EXP_LIMIT = 9e15,                      // 0 to 9e15

  // The limit on the value of `precision`, and on the value of the first argument to
  // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
  MAX_DIGITS = 1e9,                        // 0 to 1e9

  // Base conversion alphabet.
  NUMERALS = '0123456789abcdef',

  // The natural logarithm of 10 (1025 digits).
  LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

  // Pi (1025 digits).
  PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


  // The initial configuration properties of the Decimal constructor.
  DEFAULTS = {

    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed at run-time using the `Decimal.config` method.

    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,                         // 1 to MAX_DIGITS

    // The rounding mode used when rounding to `precision`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,                           // 0 to 8

    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP         0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
    // FLOOR      3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN  6 The IEEE 754 remainder function.
    // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
    //
    // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
    // division (9) are commonly used for the modulus operation. The other rounding modes can also
    // be used, but they may not give useful results.
    modulo: 1,                             // 0 to 9

    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,                          // 0 to -EXP_LIMIT

    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos:  21,                         // 0 to EXP_LIMIT

    // The minimum exponent value, beneath which underflow to zero occurs.
    // JavaScript numbers: -324  (5e-324)
    minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

    // The maximum exponent value, above which overflow to Infinity occurs.
    // JavaScript numbers: 308  (1.7976931348623157e+308)
    maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

    // Whether to use cryptographically-secure random number generation, if available.
    crypto: false                          // true/false
  },


// ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


  inexact, quadrant,
  external = true,

  decimalError = '[DecimalError] ',
  invalidArgument = decimalError + 'Invalid argument: ',
  precisionLimitExceeded = decimalError + 'Precision limit exceeded',
  cryptoUnavailable = decimalError + 'crypto unavailable',
  tag = '[object Decimal]',

  mathfloor = Math.floor,
  mathpow = Math.pow,

  isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

  BASE = 1e7,
  LOG_BASE = 7,
  MAX_SAFE_INTEGER = 9007199254740991,

  LN10_PRECISION = LN10.length - 1,
  PI_PRECISION = PI.length - 1,

  // Decimal.prototype object
  P = { toStringTag: tag };


// Decimal prototype methods


/*
 *  absoluteValue             abs
 *  ceil
 *  clampedTo                 clamp
 *  comparedTo                cmp
 *  cosine                    cos
 *  cubeRoot                  cbrt
 *  decimalPlaces             dp
 *  dividedBy                 div
 *  dividedToIntegerBy        divToInt
 *  equals                    eq
 *  floor
 *  greaterThan               gt
 *  greaterThanOrEqualTo      gte
 *  hyperbolicCosine          cosh
 *  hyperbolicSine            sinh
 *  hyperbolicTangent         tanh
 *  inverseCosine             acos
 *  inverseHyperbolicCosine   acosh
 *  inverseHyperbolicSine     asinh
 *  inverseHyperbolicTangent  atanh
 *  inverseSine               asin
 *  inverseTangent            atan
 *  isFinite
 *  isInteger                 isInt
 *  isNaN
 *  isNegative                isNeg
 *  isPositive                isPos
 *  isZero
 *  lessThan                  lt
 *  lessThanOrEqualTo         lte
 *  logarithm                 log
 *  [maximum]                 [max]
 *  [minimum]                 [min]
 *  minus                     sub
 *  modulo                    mod
 *  naturalExponential        exp
 *  naturalLogarithm          ln
 *  negated                   neg
 *  plus                      add
 *  precision                 sd
 *  round
 *  sine                      sin
 *  squareRoot                sqrt
 *  tangent                   tan
 *  times                     mul
 *  toBinary
 *  toDecimalPlaces           toDP
 *  toExponential
 *  toFixed
 *  toFraction
 *  toHexadecimal             toHex
 *  toNearest
 *  toNumber
 *  toOctal
 *  toPower                   pow
 *  toPrecision
 *  toSignificantDigits       toSD
 *  toString
 *  truncated                 trunc
 *  valueOf                   toJSON
 */


/*
 * Return a new Decimal whose value is the absolute value of this Decimal.
 *
 */
P.absoluteValue = P.abs = function () {
  var x = new this.constructor(this);
  if (x.s < 0) x.s = 1;
  return finalise(x);
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
 * direction of positive Infinity.
 *
 */
P.ceil = function () {
  return finalise(new this.constructor(this), this.e + 1, 2);
};


/*
 * Return a new Decimal whose value is the value of this Decimal clamped to the range
 * delineated by `min` and `max`.
 *
 * min {number|string|bigint|Decimal}
 * max {number|string|bigint|Decimal}
 *
 */
P.clampedTo = P.clamp = function (min, max) {
  var k,
    x = this,
    Ctor = x.constructor;
  min = new Ctor(min);
  max = new Ctor(max);
  if (!min.s || !max.s) return new Ctor(NaN);
  if (min.gt(max)) throw Error(invalidArgument + max);
  k = x.cmp(min);
  return k < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
};


/*
 * Return
 *   1    if the value of this Decimal is greater than the value of `y`,
 *  -1    if the value of this Decimal is less than the value of `y`,
 *   0    if they have the same value,
 *   NaN  if the value of either Decimal is NaN.
 *
 */
P.comparedTo = P.cmp = function (y) {
  var i, j, xdL, ydL,
    x = this,
    xd = x.d,
    yd = (y = new x.constructor(y)).d,
    xs = x.s,
    ys = y.s;

  // Either NaN or ±Infinity?
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }

  // Either zero?
  if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

  // Signs differ?
  if (xs !== ys) return xs;

  // Compare exponents.
  if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

  xdL = xd.length;
  ydL = yd.length;

  // Compare digit by digit.
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }

  // Compare lengths.
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};


/*
 * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-1, 1]
 *
 * cos(0)         = 1
 * cos(-0)        = 1
 * cos(Infinity)  = NaN
 * cos(-Infinity) = NaN
 * cos(NaN)       = NaN
 *
 */
P.cosine = P.cos = function () {
  var pr, rm,
    x = this,
    Ctor = x.constructor;

  if (!x.d) return new Ctor(NaN);

  // cos(0) = cos(-0) = 1
  if (!x.d[0]) return new Ctor(1);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;

  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};


/*
 *
 * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 *  cbrt(0)  =  0
 *  cbrt(-0) = -0
 *  cbrt(1)  =  1
 *  cbrt(-1) = -1
 *  cbrt(N)  =  N
 *  cbrt(-I) = -I
 *  cbrt(I)  =  I
 *
 * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
 *
 */
P.cubeRoot = P.cbrt = function () {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  external = false;

  // Initial estimate.
  s = x.s * mathpow(x.s * x, 1 / 3);

   // Math.cbrt underflow/overflow?
   // Pass x to Math.pow as integer, then adjust the exponent of the result.
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;

    // Adjust n exponent so it is a multiple of 3 away from x exponent.
    if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
    s = mathpow(n, 1 / 3);

    // Rarely, e may be one less than the result exponent value.
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

    if (s == 1 / 0) {
      n = '5e' + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf('e') + 1) + e;
    }

    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }

  sd = (e = Ctor.precision) + 3;

  // Halley's method.
  // TODO? Compare Newton's method.
  for (;;) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

    // TODO? Replace with for-loop and checkRoundingDigits.
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);

      // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
      // , i.e. approaching a rounding boundary, continue the iteration.
      if (n == '9999' || !rep && n == '4999') {

        // On the first iteration only, check to see if rounding up gives the exact result as the
        // nines may infinitely repeat.
        if (!rep) {
          finalise(t, e + 1, 0);

          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }

        sd += 4;
        rep = 1;
      } else {

        // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
        // If not, then there are further digits and m will be truthy.
        if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

          // Truncate to the first rounding digit.
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }

        break;
      }
    }
  }

  external = true;

  return finalise(r, e, Ctor.rounding, m);
};


/*
 * Return the number of decimal places of the value of this Decimal.
 *
 */
P.decimalPlaces = P.dp = function () {
  var w,
    d = this.d,
    n = NaN;

  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

    // Subtract the number of trailing zeros of the last word.
    w = d[w];
    if (w) for (; w % 10 == 0; w /= 10) n--;
    if (n < 0) n = 0;
  }

  return n;
};


/*
 *  n / 0 = I
 *  n / N = N
 *  n / I = 0
 *  0 / n = 0
 *  0 / 0 = N
 *  0 / N = N
 *  0 / I = 0
 *  N / n = N
 *  N / 0 = N
 *  N / N = N
 *  N / I = N
 *  I / n = I
 *  I / 0 = I
 *  I / N = N
 *  I / I = N
 *
 * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 */
P.dividedBy = P.div = function (y) {
  return divide(this, new this.constructor(y));
};


/*
 * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
 * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
 *
 */
P.dividedToIntegerBy = P.divToInt = function (y) {
  var x = this,
    Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};


/*
 * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
 *
 */
P.equals = P.eq = function (y) {
  return this.cmp(y) === 0;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
 * direction of negative Infinity.
 *
 */
P.floor = function () {
  return finalise(new this.constructor(this), this.e + 1, 3);
};


/*
 * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
 * false.
 *
 */
P.greaterThan = P.gt = function (y) {
  return this.cmp(y) > 0;
};


/*
 * Return true if the value of this Decimal is greater than or equal to the value of `y`,
 * otherwise return false.
 *
 */
P.greaterThanOrEqualTo = P.gte = function (y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};


/*
 * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [1, Infinity]
 *
 * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
 *
 * cosh(0)         = 1
 * cosh(-0)        = 1
 * cosh(Infinity)  = Infinity
 * cosh(-Infinity) = Infinity
 * cosh(NaN)       = NaN
 *
 *  x        time taken (ms)   result
 * 1000      9                 9.8503555700852349694e+433
 * 10000     25                4.4034091128314607936e+4342
 * 100000    171               1.4033316802130615897e+43429
 * 1000000   3817              1.5166076984010437725e+434294
 * 10000000  abandoned after 2 minute wait
 *
 * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
 *
 */
P.hyperbolicCosine = P.cosh = function () {
  var k, n, pr, rm, len,
    x = this,
    Ctor = x.constructor,
    one = new Ctor(1);

  if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero()) return one;

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;

  // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
  // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

  // Estimate the optimum number of times to use the argument reduction.
  // TODO? Estimation reused from cosine() and may not be optimal here.
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = '2.3283064365386962890625e-10';
  }

  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

  // Reverse argument reduction
  var cosh2_x,
    i = k,
    d8 = new Ctor(8);
  for (; i--;) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }

  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};


/*
 * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-Infinity, Infinity]
 *
 * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
 *
 * sinh(0)         = 0
 * sinh(-0)        = -0
 * sinh(Infinity)  = Infinity
 * sinh(-Infinity) = -Infinity
 * sinh(NaN)       = NaN
 *
 * x        time taken (ms)
 * 10       2 ms
 * 100      5 ms
 * 1000     14 ms
 * 10000    82 ms
 * 100000   886 ms            1.4033316802130615897e+43429
 * 200000   2613 ms
 * 300000   5407 ms
 * 400000   8824 ms
 * 500000   13026 ms          8.7080643612718084129e+217146
 * 1000000  48543 ms
 *
 * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
 *
 */
P.hyperbolicSine = P.sinh = function () {
  var k, pr, rm, len,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite() || x.isZero()) return new Ctor(x);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;

  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {

    // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
    // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
    // 3 multiplications and 1 addition

    // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
    // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
    // 4 multiplications and 2 additions

    // Estimate the optimum number of times to use the argument reduction.
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;

    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);

    // Reverse argument reduction
    var sinh2_x,
      d5 = new Ctor(5),
      d16 = new Ctor(16),
      d20 = new Ctor(20);
    for (; k--;) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return finalise(x, pr, rm, true);
};


/*
 * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-1, 1]
 *
 * tanh(x) = sinh(x) / cosh(x)
 *
 * tanh(0)         = 0
 * tanh(-0)        = -0
 * tanh(Infinity)  = 1
 * tanh(-Infinity) = -1
 * tanh(NaN)       = NaN
 *
 */
P.hyperbolicTangent = P.tanh = function () {
  var pr, rm,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite()) return new Ctor(x.s);
  if (x.isZero()) return new Ctor(x);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;

  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};


/*
 * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
 * this Decimal.
 *
 * Domain: [-1, 1]
 * Range: [0, pi]
 *
 * acos(x) = pi/2 - asin(x)
 *
 * acos(0)       = pi/2
 * acos(-0)      = pi/2
 * acos(1)       = 0
 * acos(-1)      = pi
 * acos(1/2)     = pi/3
 * acos(-1/2)    = 2*pi/3
 * acos(|x| > 1) = NaN
 * acos(NaN)     = NaN
 *
 */
P.inverseCosine = P.acos = function () {
  var x = this,
    Ctor = x.constructor,
    k = x.abs().cmp(1),
    pr = Ctor.precision,
    rm = Ctor.rounding;

  if (k !== -1) {
    return k === 0
      // |x| is 1
      ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
      // |x| > 1 or x is NaN
      : new Ctor(NaN);
  }

  if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

  // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

  Ctor.precision = pr + 6;
  Ctor.rounding = 1;

  // See https://github.com/MikeMcl/decimal.js/pull/217
  x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return x.times(2);
};


/*
 * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
 * value of this Decimal.
 *
 * Domain: [1, Infinity]
 * Range: [0, Infinity]
 *
 * acosh(x) = ln(x + sqrt(x^2 - 1))
 *
 * acosh(x < 1)     = NaN
 * acosh(NaN)       = NaN
 * acosh(Infinity)  = Infinity
 * acosh(-Infinity) = NaN
 * acosh(0)         = NaN
 * acosh(-0)        = NaN
 * acosh(1)         = 0
 * acosh(-1)        = NaN
 *
 */
P.inverseHyperbolicCosine = P.acosh = function () {
  var pr, rm,
    x = this,
    Ctor = x.constructor;

  if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite()) return new Ctor(x);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;

  x = x.times(x).minus(1).sqrt().plus(x);

  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;

  return x.ln();
};


/*
 * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
 * of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-Infinity, Infinity]
 *
 * asinh(x) = ln(x + sqrt(x^2 + 1))
 *
 * asinh(NaN)       = NaN
 * asinh(Infinity)  = Infinity
 * asinh(-Infinity) = -Infinity
 * asinh(0)         = 0
 * asinh(-0)        = -0
 *
 */
P.inverseHyperbolicSine = P.asinh = function () {
  var pr, rm,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite() || x.isZero()) return new Ctor(x);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;

  x = x.times(x).plus(1).sqrt().plus(x);

  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;

  return x.ln();
};


/*
 * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
 * value of this Decimal.
 *
 * Domain: [-1, 1]
 * Range: [-Infinity, Infinity]
 *
 * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
 *
 * atanh(|x| > 1)   = NaN
 * atanh(NaN)       = NaN
 * atanh(Infinity)  = NaN
 * atanh(-Infinity) = NaN
 * atanh(0)         = 0
 * atanh(-0)        = -0
 * atanh(1)         = Infinity
 * atanh(-1)        = -Infinity
 *
 */
P.inverseHyperbolicTangent = P.atanh = function () {
  var pr, rm, wpr, xsd,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite()) return new Ctor(NaN);
  if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();

  if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

  Ctor.precision = wpr = xsd - x.e;

  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

  Ctor.precision = pr + 4;
  Ctor.rounding = 1;

  x = x.ln();

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return x.times(0.5);
};


/*
 * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
 * Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-pi/2, pi/2]
 *
 * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
 *
 * asin(0)       = 0
 * asin(-0)      = -0
 * asin(1/2)     = pi/6
 * asin(-1/2)    = -pi/6
 * asin(1)       = pi/2
 * asin(-1)      = -pi/2
 * asin(|x| > 1) = NaN
 * asin(NaN)     = NaN
 *
 * TODO? Compare performance of Taylor series.
 *
 */
P.inverseSine = P.asin = function () {
  var halfPi, k,
    pr, rm,
    x = this,
    Ctor = x.constructor;

  if (x.isZero()) return new Ctor(x);

  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;

  if (k !== -1) {

    // |x| is 1
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }

    // |x| > 1 or x is NaN
    return new Ctor(NaN);
  }

  // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

  Ctor.precision = pr + 6;
  Ctor.rounding = 1;

  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return x.times(2);
};


/*
 * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
 * of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-pi/2, pi/2]
 *
 * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
 *
 * atan(0)         = 0
 * atan(-0)        = -0
 * atan(1)         = pi/4
 * atan(-1)        = -pi/4
 * atan(Infinity)  = pi/2
 * atan(-Infinity) = -pi/2
 * atan(NaN)       = NaN
 *
 */
P.inverseTangent = P.atan = function () {
  var i, j, k, n, px, t, r, wpr, x2,
    x = this,
    Ctor = x.constructor,
    pr = Ctor.precision,
    rm = Ctor.rounding;

  if (!x.isFinite()) {
    if (!x.s) return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }

  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;

  // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

  // Argument reduction
  // Ensure |x| < 0.42
  // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

  k = Math.min(28, wpr / LOG_BASE + 2 | 0);

  for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

  external = false;

  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;

  // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
  for (; i !== -1;) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));

    px = px.times(x2);
    r = t.plus(px.div(n += 2));

    if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
  }

  if (k) r = r.times(2 << (k - 1));

  external = true;

  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};


/*
 * Return true if the value of this Decimal is a finite number, otherwise return false.
 *
 */
P.isFinite = function () {
  return !!this.d;
};


/*
 * Return true if the value of this Decimal is an integer, otherwise return false.
 *
 */
P.isInteger = P.isInt = function () {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};


/*
 * Return true if the value of this Decimal is NaN, otherwise return false.
 *
 */
P.isNaN = function () {
  return !this.s;
};


/*
 * Return true if the value of this Decimal is negative, otherwise return false.
 *
 */
P.isNegative = P.isNeg = function () {
  return this.s < 0;
};


/*
 * Return true if the value of this Decimal is positive, otherwise return false.
 *
 */
P.isPositive = P.isPos = function () {
  return this.s > 0;
};


/*
 * Return true if the value of this Decimal is 0 or -0, otherwise return false.
 *
 */
P.isZero = function () {
  return !!this.d && this.d[0] === 0;
};


/*
 * Return true if the value of this Decimal is less than `y`, otherwise return false.
 *
 */
P.lessThan = P.lt = function (y) {
  return this.cmp(y) < 0;
};


/*
 * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
 *
 */
P.lessThanOrEqualTo = P.lte = function (y) {
  return this.cmp(y) < 1;
};


/*
 * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * If no base is specified, return log[10](arg).
 *
 * log[base](arg) = ln(arg) / ln(base)
 *
 * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
 * otherwise:
 *
 * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
 * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
 * between the result and the correctly rounded result will be one ulp (unit in the last place).
 *
 * log[-b](a)       = NaN
 * log[0](a)        = NaN
 * log[1](a)        = NaN
 * log[NaN](a)      = NaN
 * log[Infinity](a) = NaN
 * log[b](0)        = -Infinity
 * log[b](-0)       = -Infinity
 * log[b](-a)       = NaN
 * log[b](1)        = 0
 * log[b](Infinity) = Infinity
 * log[b](NaN)      = NaN
 *
 * [base] {number|string|bigint|Decimal} The base of the logarithm.
 *
 */
P.logarithm = P.log = function (base) {
  var isBase10, d, denominator, k, inf, num, sd, r,
    arg = this,
    Ctor = arg.constructor,
    pr = Ctor.precision,
    rm = Ctor.rounding,
    guard = 5;

  // Default base is 10.
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;

    // Return NaN if base is negative, or non-finite, or is 0 or 1.
    if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

    isBase10 = base.eq(10);
  }

  d = arg.d;

  // Is arg negative, non-finite, 0 or 1?
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }

  // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
  // integer power of 10.
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0;) k /= 10;
      inf = k !== 1;
    }
  }

  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

  // The result will have 5 rounding digits.
  r = divide(num, denominator, sd, 1);

  // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
  // calculate 10 further digits.
  //
  // If the result is known to have an infinite decimal expansion, repeat this until it is clear
  // that the result is above or below the boundary. Otherwise, if after calculating the 10
  // further digits, the last 14 are nines, round up and assume the result is exact.
  // Also assume the result is exact if the last 14 are zero.
  //
  // Example of a result that will be incorrectly rounded:
  // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
  // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
  // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
  // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
  // place is still 2.6.
  if (checkRoundingDigits(r.d, k = pr, rm)) {

    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);

      if (!inf) {

        // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }

        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }

  external = true;

  return finalise(r, pr, rm);
};


/*
 * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
 *
 * arguments {number|string|bigint|Decimal}
 *
P.max = function () {
  Array.prototype.push.call(arguments, this);
  return maxOrMin(this.constructor, arguments, -1);
};
 */


/*
 * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
 *
 * arguments {number|string|bigint|Decimal}
 *
P.min = function () {
  Array.prototype.push.call(arguments, this);
  return maxOrMin(this.constructor, arguments, 1);
};
 */


/*
 *  n - 0 = n
 *  n - N = N
 *  n - I = -I
 *  0 - n = -n
 *  0 - 0 = 0
 *  0 - N = N
 *  0 - I = -I
 *  N - n = N
 *  N - 0 = N
 *  N - N = N
 *  N - I = N
 *  I - n = I
 *  I - 0 = I
 *  I - N = N
 *  I - I = N
 *
 * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 */
P.minus = P.sub = function (y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
    x = this,
    Ctor = x.constructor;

  y = new Ctor(y);

  // If either is not finite...
  if (!x.d || !y.d) {

    // Return NaN if either is NaN.
    if (!x.s || !y.s) y = new Ctor(NaN);

    // Return y negated if x is finite and y is ±Infinity.
    else if (x.d) y.s = -y.s;

    // Return x if y is finite and x is ±Infinity.
    // Return x if both are ±Infinity with different signs.
    // Return NaN if both are ±Infinity with the same sign.
    else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

    return y;
  }

  // If signs differ...
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }

  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;

  // If either is zero...
  if (!xd[0] || !yd[0]) {

    // Return y negated if x is zero and y is non-zero.
    if (yd[0]) y.s = -y.s;

    // Return x if y is zero and x is non-zero.
    else if (xd[0]) y = new Ctor(x);

    // Return zero if both are zero.
    // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
    else return new Ctor(rm === 3 ? -0 : 0);

    return external ? finalise(y, pr, rm) : y;
  }

  // x and y are finite, non-zero numbers with the same sign.

  // Calculate base 1e7 exponents.
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);

  xd = xd.slice();
  k = xe - e;

  // If base 1e7 exponents differ...
  if (k) {
    xLTy = k < 0;

    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }

    // Numbers with massively different exponents would result in a very high number of
    // zeros needing to be prepended, but this can be avoided while still ensuring correct
    // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

    if (k > i) {
      k = i;
      d.length = 1;
    }

    // Prepend zeros to equalise exponents.
    d.reverse();
    for (i = k; i--;) d.push(0);
    d.reverse();

  // Base 1e7 exponents equal.
  } else {

    // Check digits to determine which is the bigger number.

    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;

    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }

    k = 0;
  }

  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }

  len = xd.length;

  // Append zeros to `xd` if shorter.
  // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

  // Subtract yd from xd.
  for (i = yd.length; i > k;) {

    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }

    xd[i] -= yd[i];
  }

  // Remove trailing zeros.
  for (; xd[--len] === 0;) xd.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xd[0] === 0; xd.shift()) --e;

  // Zero?
  if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

  y.d = xd;
  y.e = getBase10Exponent(xd, e);

  return external ? finalise(y, pr, rm) : y;
};


/*
 *   n % 0 =  N
 *   n % N =  N
 *   n % I =  n
 *   0 % n =  0
 *  -0 % n = -0
 *   0 % 0 =  N
 *   0 % N =  N
 *   0 % I =  0
 *   N % n =  N
 *   N % 0 =  N
 *   N % N =  N
 *   N % I =  N
 *   I % n =  N
 *   I % 0 =  N
 *   I % N =  N
 *   I % I =  N
 *
 * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * The result depends on the modulo mode.
 *
 */
P.modulo = P.mod = function (y) {
  var q,
    x = this,
    Ctor = x.constructor;

  y = new Ctor(y);

  // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
  if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

  // Return x if y is ±Infinity or x is ±0.
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }

  // Prevent rounding of intermediate calculations.
  external = false;

  if (Ctor.modulo == 9) {

    // Euclidian division: q = sign(y) * floor(x / abs(y))
    // result = x - q * y    where  0 <= result < abs(y)
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }

  q = q.times(y);

  external = true;

  return x.minus(q);
};


/*
 * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
 * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 */
P.naturalExponential = P.exp = function () {
  return naturalExponential(this);
};


/*
 * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
 * rounded to `precision` significant digits using rounding mode `rounding`.
 *
 */
P.naturalLogarithm = P.ln = function () {
  return naturalLogarithm(this);
};


/*
 * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
 * -1.
 *
 */
P.negated = P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};


/*
 *  n + 0 = n
 *  n + N = N
 *  n + I = I
 *  0 + n = n
 *  0 + 0 = 0
 *  0 + N = N
 *  0 + I = I
 *  N + n = N
 *  N + 0 = N
 *  N + N = N
 *  N + I = N
 *  I + n = I
 *  I + 0 = I
 *  I + N = N
 *  I + I = I
 *
 * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 */
P.plus = P.add = function (y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd,
    x = this,
    Ctor = x.constructor;

  y = new Ctor(y);

  // If either is not finite...
  if (!x.d || !y.d) {

    // Return NaN if either is NaN.
    if (!x.s || !y.s) y = new Ctor(NaN);

    // Return x if y is finite and x is ±Infinity.
    // Return x if both are ±Infinity with the same sign.
    // Return NaN if both are ±Infinity with different signs.
    // Return y if x is finite and y is ±Infinity.
    else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

    return y;
  }

   // If signs differ...
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }

  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;

  // If either is zero...
  if (!xd[0] || !yd[0]) {

    // Return x if y is zero.
    // Return y if y is non-zero.
    if (!yd[0]) y = new Ctor(x);

    return external ? finalise(y, pr, rm) : y;
  }

  // x and y are finite, non-zero numbers with the same sign.

  // Calculate base 1e7 exponents.
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);

  xd = xd.slice();
  i = k - e;

  // If base 1e7 exponents differ...
  if (i) {

    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }

    // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;

    if (i > len) {
      i = len;
      d.length = 1;
    }

    // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
    d.reverse();
    for (; i--;) d.push(0);
    d.reverse();
  }

  len = xd.length;
  i = yd.length;

  // If yd is longer than xd, swap xd and yd so xd points to the longer array.
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }

  // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
  for (carry = 0; i;) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }

  if (carry) {
    xd.unshift(carry);
    ++e;
  }

  // Remove trailing zeros.
  // No need to check for zero, as +x + +y != 0 && -x + -y != 0
  for (len = xd.length; xd[--len] == 0;) xd.pop();

  y.d = xd;
  y.e = getBase10Exponent(xd, e);

  return external ? finalise(y, pr, rm) : y;
};


/*
 * Return the number of significant digits of the value of this Decimal.
 *
 * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
 *
 */
P.precision = P.sd = function (z) {
  var k,
    x = this;

  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k) k = x.e + 1;
  } else {
    k = NaN;
  }

  return k;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
 * rounding mode `rounding`.
 *
 */
P.round = function () {
  var x = this,
    Ctor = x.constructor;

  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};


/*
 * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-1, 1]
 *
 * sin(x) = x - x^3/3! + x^5/5! - ...
 *
 * sin(0)         = 0
 * sin(-0)        = -0
 * sin(Infinity)  = NaN
 * sin(-Infinity) = NaN
 * sin(NaN)       = NaN
 *
 */
P.sine = P.sin = function () {
  var pr, rm,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;

  x = sine(Ctor, toLessThanHalfPi(Ctor, x));

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};


/*
 * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 *  sqrt(-n) =  N
 *  sqrt(N)  =  N
 *  sqrt(-I) =  N
 *  sqrt(I)  =  I
 *  sqrt(0)  =  0
 *  sqrt(-0) = -0
 *
 */
P.squareRoot = P.sqrt = function () {
  var m, n, sd, r, rep, t,
    x = this,
    d = x.d,
    e = x.e,
    s = x.s,
    Ctor = x.constructor;

  // Negative/NaN/Infinity/zero?
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }

  external = false;

  // Initial estimate.
  s = Math.sqrt(+x);

  // Math.sqrt underflow/overflow?
  // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);

    if ((n.length + e) % 2 == 0) n += '0';
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

    if (s == 1 / 0) {
      n = '5e' + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf('e') + 1) + e;
    }

    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }

  sd = (e = Ctor.precision) + 3;

  // Newton-Raphson iteration.
  for (;;) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

    // TODO? Replace with for-loop and checkRoundingDigits.
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);

      // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
      // 4999, i.e. approaching a rounding boundary, continue the iteration.
      if (n == '9999' || !rep && n == '4999') {

        // On the first iteration only, check to see if rounding up gives the exact result as the
        // nines may infinitely repeat.
        if (!rep) {
          finalise(t, e + 1, 0);

          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }

        sd += 4;
        rep = 1;
      } else {

        // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
        // If not, then there are further digits and m will be truthy.
        if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

          // Truncate to the first rounding digit.
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }

        break;
      }
    }
  }

  external = true;

  return finalise(r, e, Ctor.rounding, m);
};


/*
 * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-Infinity, Infinity]
 *
 * tan(0)         = 0
 * tan(-0)        = -0
 * tan(Infinity)  = NaN
 * tan(-Infinity) = NaN
 * tan(NaN)       = NaN
 *
 */
P.tangent = P.tan = function () {
  var pr, rm,
    x = this,
    Ctor = x.constructor;

  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);

  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;

  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

  Ctor.precision = pr;
  Ctor.rounding = rm;

  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};


/*
 *  n * 0 = 0
 *  n * N = N
 *  n * I = I
 *  0 * n = 0
 *  0 * 0 = 0
 *  0 * N = N
 *  0 * I = N
 *  N * n = N
 *  N * 0 = N
 *  N * N = N
 *  N * I = N
 *  I * n = I
 *  I * 0 = N
 *  I * N = N
 *  I * I = I
 *
 * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 */
P.times = P.mul = function (y) {
  var carry, e, i, k, r, rL, t, xdL, ydL,
    x = this,
    Ctor = x.constructor,
    xd = x.d,
    yd = (y = new Ctor(y)).d;

  y.s *= x.s;

   // If either is NaN, ±Infinity or ±0...
  if (!xd || !xd[0] || !yd || !yd[0]) {

    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

      // Return NaN if either is NaN.
      // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.
      ? NaN

      // Return ±Infinity if either is ±Infinity.
      // Return ±0 if either is ±0.
      : !xd || !yd ? y.s / 0 : y.s * 0);
  }

  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;

  // Ensure xd points to the longer array.
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }

  // Initialise the result array with zeros.
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--;) r.push(0);

  // Multiply!
  for (i = ydL; --i >= 0;) {
    carry = 0;
    for (k = xdL + i; k > i;) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }

    r[k] = (r[k] + carry) % BASE | 0;
  }

  // Remove trailing zeros.
  for (; !r[--rL];) r.pop();

  if (carry) ++e;
  else r.shift();

  y.d = r;
  y.e = getBase10Exponent(r, e);

  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};


/*
 * Return a string representing the value of this Decimal in base 2, round to `sd` significant
 * digits using rounding mode `rm`.
 *
 * If the optional `sd` argument is present then return binary exponential notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toBinary = function (sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
 * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
 *
 * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toDecimalPlaces = P.toDP = function (dp, rm) {
  var x = this,
    Ctor = x.constructor;

  x = new Ctor(x);
  if (dp === void 0) return x;

  checkInt32(dp, 0, MAX_DIGITS);

  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);

  return finalise(x, dp + x.e + 1, rm);
};


/*
 * Return a string representing the value of this Decimal in exponential notation rounded to
 * `dp` fixed decimal places using rounding mode `rounding`.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toExponential = function (dp, rm) {
  var str,
    x = this,
    Ctor = x.constructor;

  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }

  return x.isNeg() && !x.isZero() ? '-' + str : str;
};


/*
 * Return a string representing the value of this Decimal in normal (fixed-point) notation to
 * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
 * omitted.
 *
 * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
 *
 * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 * (-0).toFixed(3) is '0.000'.
 * (-0.5).toFixed(0) is '-0'.
 *
 */
P.toFixed = function (dp, rm) {
  var str, y,
    x = this,
    Ctor = x.constructor;

  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }

  // To determine whether to add the minus sign look at the value before it was rounded,
  // i.e. look at `x` rather than `y`.
  return x.isNeg() && !x.isZero() ? '-' + str : str;
};


/*
 * Return an array representing the value of this Decimal as a simple fraction with an integer
 * numerator and an integer denominator.
 *
 * The denominator will be a positive non-zero value less than or equal to the specified maximum
 * denominator. If a maximum denominator is not specified, the denominator will be the lowest
 * value necessary to represent the number exactly.
 *
 * [maxD] {number|string|bigint|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
 *
 */
P.toFraction = function (maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
    x = this,
    xd = x.d,
    Ctor = x.constructor;

  if (!xd) return new Ctor(x);

  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);

  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

  if (maxD == null) {

    // d is 10**e, the minimum max-denominator needed.
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
    maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
  }

  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;

  for (;;)  {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1) break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }

  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;

  // Determine which fraction is closer to x, n0/d0 or n1/d1?
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
      ? [n1, d1] : [n0, d0];

  Ctor.precision = pr;
  external = true;

  return r;
};


/*
 * Return a string representing the value of this Decimal in base 16, round to `sd` significant
 * digits using rounding mode `rm`.
 *
 * If the optional `sd` argument is present then return binary exponential notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toHexadecimal = P.toHex = function (sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};


/*
 * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
 * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
 *
 * The return value will always have the same sign as this Decimal, unless either this Decimal
 * or `y` is NaN, in which case the return value will be also be NaN.
 *
 * The return value is not affected by the value of `precision`.
 *
 * y {number|string|bigint|Decimal} The magnitude to round to a multiple of.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * 'toNearest() rounding mode not an integer: {rm}'
 * 'toNearest() rounding mode out of range: {rm}'
 *
 */
P.toNearest = function (y, rm) {
  var x = this,
    Ctor = x.constructor;

  x = new Ctor(x);

  if (y == null) {

    // If x is not finite, return x.
    if (!x.d) return x;

    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }

    // If x is not finite, return x if y is not NaN, else NaN.
    if (!x.d) return y.s ? x : y;

    // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
    if (!y.d) {
      if (y.s) y.s = x.s;
      return y;
    }
  }

  // If y is not zero, calculate the nearest multiple of y to x.
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);

  // If y is zero, return zero with the sign of x.
  } else {
    y.s = x.s;
    x = y;
  }

  return x;
};


/*
 * Return the value of this Decimal converted to a number primitive.
 * Zero keeps its sign.
 *
 */
P.toNumber = function () {
  return +this;
};


/*
 * Return a string representing the value of this Decimal in base 8, round to `sd` significant
 * digits using rounding mode `rm`.
 *
 * If the optional `sd` argument is present then return binary exponential notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toOctal = function (sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};


/*
 * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
 * to `precision` significant digits using rounding mode `rounding`.
 *
 * ECMAScript compliant.
 *
 *   pow(x, NaN)                           = NaN
 *   pow(x, ±0)                            = 1

 *   pow(NaN, non-zero)                    = NaN
 *   pow(abs(x) > 1, +Infinity)            = +Infinity
 *   pow(abs(x) > 1, -Infinity)            = +0
 *   pow(abs(x) == 1, ±Infinity)           = NaN
 *   pow(abs(x) < 1, +Infinity)            = +0
 *   pow(abs(x) < 1, -Infinity)            = +Infinity
 *   pow(+Infinity, y > 0)                 = +Infinity
 *   pow(+Infinity, y < 0)                 = +0
 *   pow(-Infinity, odd integer > 0)       = -Infinity
 *   pow(-Infinity, even integer > 0)      = +Infinity
 *   pow(-Infinity, odd integer < 0)       = -0
 *   pow(-Infinity, even integer < 0)      = +0
 *   pow(+0, y > 0)                        = +0
 *   pow(+0, y < 0)                        = +Infinity
 *   pow(-0, odd integer > 0)              = -0
 *   pow(-0, even integer > 0)             = +0
 *   pow(-0, odd integer < 0)              = -Infinity
 *   pow(-0, even integer < 0)             = +Infinity
 *   pow(finite x < 0, finite non-integer) = NaN
 *
 * For non-integer or very large exponents pow(x, y) is calculated using
 *
 *   x^y = exp(y*ln(x))
 *
 * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
 * probability of an incorrectly rounded result
 * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
 * i.e. 1 in 250,000,000,000,000
 *
 * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
 *
 * y {number|string|bigint|Decimal} The power to which to raise this Decimal.
 *
 */
P.toPower = P.pow = function (y) {
  var e, k, pr, r, rm, s,
    x = this,
    Ctor = x.constructor,
    yn = +(y = new Ctor(y));

  // Either ±Infinity, NaN or ±0?
  if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

  x = new Ctor(x);

  if (x.eq(1)) return x;

  pr = Ctor.precision;
  rm = Ctor.rounding;

  if (y.eq(1)) return finalise(x, pr, rm);

  // y exponent
  e = mathfloor(y.e / LOG_BASE);

  // If y is a small integer use the 'exponentiation by squaring' algorithm.
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }

  s = x.s;

  // if x is negative
  if (s < 0) {

    // if y is not an integer
    if (e < y.d.length - 1) return new Ctor(NaN);

    // Result is positive if x is negative and the last digit of integer y is even.
    if ((y.d[e] & 1) == 0) s = 1;

    // if x.eq(-1)
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }

  // Estimate result exponent.
  // x^y = 10^e,  where e = y * log10(x)
  // log10(x) = log10(x_significand) + x_exponent
  // log10(x_significand) = ln(x_significand) / ln(10)
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k)
    ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
    : new Ctor(k + '').e;

  // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

  // Overflow/underflow?
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

  external = false;
  Ctor.rounding = x.s = 1;

  // Estimate the extra guard digits needed to ensure five correct rounding digits from
  // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
  // new Decimal(2.32456).pow('2087987436534566.46411')
  // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
  k = Math.min(12, (e + '').length);

  // r = x^y = exp(y*ln(x))
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

  // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
  if (r.d) {

    // Truncate to the required precision plus five rounding digits.
    r = finalise(r, pr + 5, 1);

    // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
    // the result.
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;

      // Truncate to the increased precision plus five rounding digits.
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

      // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }

  r.s = s;
  external = true;
  Ctor.rounding = rm;

  return finalise(r, pr, rm);
};


/*
 * Return a string representing the value of this Decimal rounded to `sd` significant digits
 * using rounding mode `rounding`.
 *
 * Return exponential notation if `sd` is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 */
P.toPrecision = function (sd, rm) {
  var str,
    x = this,
    Ctor = x.constructor;

  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }

  return x.isNeg() && !x.isZero() ? '-' + str : str;
};


/*
 * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
 * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
 * omitted.
 *
 * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
 * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
 *
 * 'toSD() digits out of range: {sd}'
 * 'toSD() digits not an integer: {sd}'
 * 'toSD() rounding mode not an integer: {rm}'
 * 'toSD() rounding mode out of range: {rm}'
 *
 */
P.toSignificantDigits = P.toSD = function (sd, rm) {
  var x = this,
    Ctor = x.constructor;

  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }

  return finalise(new Ctor(x), sd, rm);
};


/*
 * Return a string representing the value of this Decimal.
 *
 * Return exponential notation if this Decimal has a positive exponent equal to or greater than
 * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
 *
 */
P.toString = function () {
  var x = this,
    Ctor = x.constructor,
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

  return x.isNeg() && !x.isZero() ? '-' + str : str;
};


/*
 * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
 *
 */
P.truncated = P.trunc = function () {
  return finalise(new this.constructor(this), this.e + 1, 1);
};


/*
 * Return a string representing the value of this Decimal.
 * Unlike `toString`, negative zero will include the minus sign.
 *
 */
P.valueOf = P.toJSON = function () {
  var x = this,
    Ctor = x.constructor,
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

  return x.isNeg() ? '-' + str : str;
};


// Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


/*
 *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
 *                           finiteToString, naturalExponential, naturalLogarithm
 *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
 *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
 *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
 *  convertBase              toStringBinary, parseOther
 *  cos                      P.cos
 *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
 *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
 *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
 *                           taylorSeries, atan2, parseOther
 *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
 *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
 *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
 *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
 *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
 *                           P.truncated, divide, getLn10, getPi, naturalExponential,
 *                           naturalLogarithm, ceil, floor, round, trunc
 *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
 *                           toStringBinary
 *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
 *  getLn10                  P.logarithm, naturalLogarithm
 *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
 *  getPrecision             P.precision, P.toFraction
 *  getZeroString            digitsToString, finiteToString
 *  intPow                   P.toPower, parseOther
 *  isOdd                    toLessThanHalfPi
 *  maxOrMin                 max, min
 *  naturalExponential       P.naturalExponential, P.toPower
 *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
 *                           P.toPower, naturalExponential
 *  nonFiniteToString        finiteToString, toStringBinary
 *  parseDecimal             Decimal
 *  parseOther               Decimal
 *  sin                      P.sin
 *  taylorSeries             P.cosh, P.sinh, cos, sin
 *  toLessThanHalfPi         P.cos, P.sin
 *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
 *  truncate                 intPow
 *
 *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
 *                           naturalLogarithm, config, parseOther, random, Decimal
 */


function digitsToString(d) {
  var i, k, ws,
    indexOfLastWord = d.length - 1,
    str = '',
    w = d[0];

  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }

    w = d[i];
    ws = w + '';
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return '0';
  }

  // Remove trailing zeros of last w.
  for (; w % 10 === 0;) w /= 10;

  return str + w;
}


function checkInt32(i, min, max) {
  if (i !== ~~i || i < min || i > max) {
    throw Error(invalidArgument + i);
  }
}


/*
 * Check 5 rounding digits if `repeating` is null, 4 otherwise.
 * `repeating == null` if caller is `log` or `pow`,
 * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
 */
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;

  // Get the length of the first word of the array d.
  for (k = d[0]; k >= 10; k /= 10) --i;

  // Is the rounding digit in the first word of d?
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }

  // i is the index (0 - 6) of the rounding digit.
  // E.g. if within the word 3487563 the first rounding digit is 5,
  // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;

  if (repeating == null) {
    if (i < 3) {
      if (i == 0) rd = rd / 100 | 0;
      else if (i == 1) rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
        (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
          (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0) rd = rd / 1000 | 0;
      else if (i == 1) rd = rd / 100 | 0;
      else if (i == 2) rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k ||
      (!repeating && rm > 3) && rd + 1 == k / 2) &&
        (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
    }
  }

  return r;
}


// Convert string of `baseIn` to an array of numbers of `baseOut`.
// Eg. convertBase('255', 10, 16) returns [15, 15].
// Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
function convertBase(str, baseIn, baseOut) {
  var j,
    arr = [0],
    arrL,
    i = 0,
    strL = str.length;

  for (; i < strL;) {
    for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0) arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }

  return arr.reverse();
}


/*
 * cos(x) = 1 - x^2/2! + x^4/4! - ...
 * |x| < pi/2
 *
 */
function cosine(Ctor, x) {
  var k, len, y;

  if (x.isZero()) return x;

  // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
  // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

  // Estimate the optimum number of times to use the argument reduction.
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = '2.3283064365386962890625e-10';
  }

  Ctor.precision += k;

  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

  // Reverse argument reduction
  for (var i = k; i--;) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }

  Ctor.precision -= k;

  return x;
}


/*
 * Perform division in the specified base.
 */
var divide = (function () {

  // Assumes non-zero x and k, and hence non-zero result.
  function multiplyInteger(x, k, base) {
    var temp,
      carry = 0,
      i = x.length;

    for (x = x.slice(); i--;) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }

    if (carry) x.unshift(carry);

    return x;
  }

  function compare(a, b, aL, bL) {
    var i, r;

    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }

    return r;
  }

  function subtract(a, b, aL, base) {
    var i = 0;

    // Subtract b from a.
    for (; aL--;) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }

    // Remove leading zeros.
    for (; !a[0] && a.length > 1;) a.shift();
  }

  return function (x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
      yL, yz,
      Ctor = x.constructor,
      sign = x.s == y.s ? 1 : -1,
      xd = x.d,
      yd = y.d;

    // Either NaN, Infinity or 0?
    if (!xd || !xd[0] || !yd || !yd[0]) {

      return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

        // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
        xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
    }

    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }

    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign);
    qd = q.d = [];

    // Result exponent may be one less than e.
    // The digit array of a Decimal from toStringBinary may have trailing zeros.
    for (i = 0; yd[i] == (xd[i] || 0); i++);

    if (yd[i] > (xd[i] || 0)) e--;

    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }

    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {

      // Convert precision in number of base 10 digits to base 1e7 digits.
      sd = sd / logBase + 2 | 0;
      i = 0;

      // divisor < 1e7
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;

        // k is the carry.
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }

        more = k || i < xL;

      // divisor >= 1e7
      } else {

        // Normalise xd and yd so highest order digit of yd is >= base/2
        k = base / (yd[0] + 1) | 0;

        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }

        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL;) rem[remL++] = 0;

        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];

        if (yd[1] >= base / 2) ++yd0;

        do {
          k = 0;

          // Compare divisor and remainder.
          cmp = compare(yd, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, k.
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

            // k will be how many times the divisor goes into the current remainder.
            k = rem0 / yd0 | 0;

            //  Algorithm:
            //  1. product = divisor * trial digit (k)
            //  2. if product > remainder: product -= divisor, k--
            //  3. remainder -= product
            //  4. if product was < remainder at 2:
            //    5. compare new remainder and divisor
            //    6. If remainder > divisor: remainder -= divisor, k++

            if (k > 1) {
              if (k >= base) k = base - 1;

              // product = divisor * trial digit.
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              cmp = compare(prod, rem, prodL, remL);

              // product > remainder.
              if (cmp == 1) {
                k--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {

              // cmp is -1.
              // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
              // to avoid it. If k is 1 there is a need to compare yd and rem again below.
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }

            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);

            // Subtract product from remainder.
            subtract(rem, prod, remL, base);

            // If product was < previous remainder.
            if (cmp == -1) {
              remL = rem.length;

              // Compare divisor and new remainder.
              cmp = compare(yd, rem, yL, remL);

              // If divisor < new remainder, subtract divisor from remainder.
              if (cmp < 1) {
                k++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }

            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }    // if cmp === 1, k will be 0

          // Add the next digit, k, to the result array.
          qd[i++] = k;

          // Update the remainder.
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }

        } while ((xi++ < xL || rem[0] !== void 0) && sd--);

        more = rem[0] !== void 0;
      }

      // Leading zero?
      if (!qd[0]) qd.shift();
    }

    // logBase is 1 when divide is being used for base conversion.
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {

      // To calculate q.e, first get the number of digits of qd[0].
      for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
      q.e = i + e * logBase - 1;

      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }

    return q;
  };
})();


/*
 * Round `x` to `sd` significant digits using rounding mode `rm`.
 * Check for over/under-flow.
 */
 function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi,
    Ctor = x.constructor;

  // Don't round if sd is null or undefined.
  out: if (sd != null) {
    xd = x.d;

    // Infinity/NaN.
    if (!xd) return x;

    // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
    // w: the word of xd containing rd, a base 1e7 number.
    // xdi: the index of w within xd.
    // digits: the number of digits of w.
    // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
    // they had leading zeros)
    // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

    // Get the length of the first word of the digits array xd.
    for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
    i = sd - digits;

    // Is the rounding digit in the first word of xd?
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];

      // Get the rounding digit at index j of w.
      rd = w / mathpow(10, digits - j - 1) % 10 | 0;
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) {
        if (isTruncated) {

          // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
          for (; k++ <= xdi;) xd.push(0);
          w = rd = 0;
          digits = 1;
          i %= LOG_BASE;
          j = i - LOG_BASE + 1;
        } else {
          break out;
        }
      } else {
        w = k = xd[xdi];

        // Get the number of digits of w.
        for (digits = 1; k >= 10; k /= 10) digits++;

        // Get the index of rd within w.
        i %= LOG_BASE;

        // Get the index of rd within w, adjusted for leading zeros.
        // The number of leading zeros of w is given by LOG_BASE - digits.
        j = i - LOG_BASE + digits;

        // Get the rounding digit at index j of w.
        rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
      }
    }

    // Are there any non-zero digits after the rounding digit?
    isTruncated = isTruncated || sd < 0 ||
      xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

    // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
    // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
    // will give 714.

    roundUp = rm < 4
      ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
      : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

        // Check whether the digit to the left of the rounding digit is odd.
        ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
          rm == (x.s < 0 ? 8 : 7));

    if (sd < 1 || !xd[0]) {
      xd.length = 0;
      if (roundUp) {

        // Convert sd to decimal places.
        sd -= x.e + 1;

        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = -sd || 0;
      } else {

        // Zero.
        xd[0] = x.e = 0;
      }

      return x;
    }

    // Remove excess digits.
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);

      // E.g. 56700 becomes 56000 if 7 is the rounding digit.
      // j > 0 means i > number of leading zeros of w.
      xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
    }

    if (roundUp) {
      for (;;) {

        // Is the digit to be rounded up in the first word of xd?
        if (xdi == 0) {

          // i will be the length of xd[0] before k is added.
          for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
          j = xd[0] += k;
          for (k = 1; j >= 10; j /= 10) k++;

          // if i != k the length has increased.
          if (i != k) {
            x.e++;
            if (xd[0] == BASE) xd[0] = 1;
          }

          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }

    // Remove trailing zeros.
    for (i = xd.length; xd[--i] === 0;) xd.pop();
  }

  if (external) {

    // Overflow?
    if (x.e > Ctor.maxE) {

      // Infinity.
      x.d = null;
      x.e = NaN;

    // Underflow?
    } else if (x.e < Ctor.minE) {

      // Zero.
      x.e = 0;
      x.d = [0];
      // Ctor.underflow = true;
    } // else Ctor.underflow = false;
  }

  return x;
}


function finiteToString(x, isExp, sd) {
  if (!x.isFinite()) return nonFiniteToString(x);
  var k,
    e = x.e,
    str = digitsToString(x.d),
    len = str.length;

  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + '.' + str.slice(1);
    }

    str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
  } else if (e < 0) {
    str = '0.' + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += '.';
      str += getZeroString(k);
    }
  }

  return str;
}


// Calculate the base 10 exponent from the base 1e7 exponent.
function getBase10Exponent(digits, e) {
  var w = digits[0];

  // Add the number of digits of the first word of the digits array.
  for ( e *= LOG_BASE; w >= 10; w /= 10) e++;
  return e;
}


function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {

    // Reset global state in case the exception is caught.
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}


function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}


function getPrecision(digits) {
  var w = digits.length - 1,
    len = w * LOG_BASE + 1;

  w = digits[w];

  // If non-zero...
  if (w) {

    // Subtract the number of trailing zeros of the last word.
    for (; w % 10 == 0; w /= 10) len--;

    // Add the number of digits of the first word.
    for (w = digits[0]; w >= 10; w /= 10) len++;
  }

  return len;
}


function getZeroString(k) {
  var zs = '';
  for (; k--;) zs += '0';
  return zs;
}


/*
 * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
 * integer of type number.
 *
 * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
 *
 */
function intPow(Ctor, x, n, pr) {
  var isTruncated,
    r = new Ctor(1),

    // Max n of 9007199254740991 takes 53 loop iterations.
    // Maximum digits array length; leaves [28, 34] guard digits.
    k = Math.ceil(pr / LOG_BASE + 4);

  external = false;

  for (;;) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k)) isTruncated = true;
    }

    n = mathfloor(n / 2);
    if (n === 0) {

      // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0) ++r.d[n];
      break;
    }

    x = x.times(x);
    truncate(x.d, k);
  }

  external = true;

  return r;
}


function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}


/*
 * Handle `max` (`n` is -1) and `min` (`n` is 1).
 */
function maxOrMin(Ctor, args, n) {
  var k, y,
    x = new Ctor(args[0]),
    i = 0;

  for (; ++i < args.length;) {
    y = new Ctor(args[i]);

    // NaN?
    if (!y.s) {
      x = y;
      break;
    }

    k = x.cmp(y);

    if (k === n || k === 0 && x.s === n) {
      x = y;
    }
  }

  return x;
}


/*
 * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
 * digits.
 *
 * Taylor/Maclaurin series.
 *
 * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
 *
 * Argument reduction:
 *   Repeat x = x / 32, k += 5, until |x| < 0.1
 *   exp(x) = exp(x / 2^k)^(2^k)
 *
 * Previously, the argument was initially reduced by
 * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
 * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
 * found to be slower than just dividing repeatedly by 32 as above.
 *
 * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
 * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
 * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
 *
 *  exp(Infinity)  = Infinity
 *  exp(-Infinity) = 0
 *  exp(NaN)       = NaN
 *  exp(±0)        = 1
 *
 *  exp(x) is non-terminating for any finite, non-zero x.
 *
 *  The result will always be correctly rounded.
 *
 */
function naturalExponential(x, sd) {
  var denominator, guard, j, pow, sum, t, wpr,
    rep = 0,
    i = 0,
    k = 0,
    Ctor = x.constructor,
    rm = Ctor.rounding,
    pr = Ctor.precision;

  // 0/NaN/Infinity?
  if (!x.d || !x.d[0] || x.e > 17) {

    return new Ctor(x.d
      ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
      : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }

  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }

  t = new Ctor(0.03125);

  // while abs(x) >= 0.1
  while (x.e > -2) {

    // x = x / 2^5
    x = x.times(t);
    k += 5;
  }

  // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
  // necessary to ensure the first 4 rounding digits are correct.
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow = sum = new Ctor(1);
  Ctor.precision = wpr;

  for (;;) {
    pow = finalise(pow.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum.plus(divide(pow, denominator, wpr, 1));

    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      j = k;
      while (j--) sum = finalise(sum.times(sum), wpr, 1);

      // Check to see if the first 4 rounding digits are [49]999.
      // If so, repeat the summation with a higher precision, otherwise
      // e.g. with precision: 18, rounding: 1
      // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
      // `wpr - guard` is the index of first rounding digit.
      if (sd == null) {

        if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum;
      }
    }

    sum = t;
  }
}


/*
 * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
 * digits.
 *
 *  ln(-n)        = NaN
 *  ln(0)         = -Infinity
 *  ln(-0)        = -Infinity
 *  ln(1)         = 0
 *  ln(Infinity)  = Infinity
 *  ln(-Infinity) = NaN
 *  ln(NaN)       = NaN
 *
 *  ln(n) (n != 1) is non-terminating.
 *
 */
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
    n = 1,
    guard = 10,
    x = y,
    xd = x.d,
    Ctor = x.constructor,
    rm = Ctor.rounding,
    pr = Ctor.precision;

  // Is x negative or Infinity, NaN, 0 or 1?
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }

  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }

  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);

  if (Math.abs(e = x.e) < 1.5e15) {

    // Argument reduction.
    // The series converges faster the closer the argument is to 1, so using
    // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
    // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
    // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
    // later be divided by this number, then separate out the power of 10 using
    // ln(a*10^b) = ln(a) + b*ln(10).

    // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
    //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
    // max n is 6 (gives 0.7 - 1.3)
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }

    e = x.e;

    if (c0 > 1) {
      x = new Ctor('0.' + c);
      e++;
    } else {
      x = new Ctor(c0 + '.' + c.slice(1));
    }
  } else {

    // The argument reduction method above may result in overflow if the argument y is a massive
    // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
    // function using ln(x*10^e) = ln(x) + e*ln(10).
    t = getLn10(Ctor, wpr + 2, pr).times(e + '');
    x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;

    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }

  // x1 is x reduced to a value near 1.
  x1 = x;

  // Taylor series.
  // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
  // where x = (y - 1)/(y + 1)    (|x| < 1)
  sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;

  for (;;) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);

      // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
      // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
      if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
      sum = divide(sum, new Ctor(n), wpr, 1);

      // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
      // been repeated previously) and the first 4 rounding digits 9999?
      // If so, restart the summation with a higher precision, otherwise
      // e.g. with precision: 12, rounding: 1
      // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
      // `wpr - guard` is the index of first rounding digit.
      if (sd == null) {
        if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum;
      }
    }

    sum = t;
    denominator += 2;
  }
}


// ±Infinity, NaN.
function nonFiniteToString(x) {
  // Unsigned.
  return String(x.s * x.s / 0);
}


/*
 * Parse the value of a new Decimal `x` from string `str`.
 */
function parseDecimal(x, str) {
  var e, i, len;

  // TODO BigInt str: no need to check for decimal point, exponential form or leading zeros.
  // Decimal point?
  if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

  // Exponential form?
  if ((i = str.search(/e/i)) > 0) {

    // Determine exponent.
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {

    // Integer.
    e = str.length;
  }

  // Determine leading zeros.
  for (i = 0; str.charCodeAt(i) === 48; i++);

  // Determine trailing zeros.
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
  str = str.slice(i, len);

  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];

    // Transform base

    // e is the base 10 exponent.
    // i is where to slice str to get the first word of the digits array.
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;

    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }

    for (; i--;) str += '0';
    x.d.push(+str);

    if (external) {

      // Overflow?
      if (x.e > x.constructor.maxE) {

        // Infinity.
        x.d = null;
        x.e = NaN;

      // Underflow?
      } else if (x.e < x.constructor.minE) {

        // Zero.
        x.e = 0;
        x.d = [0];
        // x.constructor.underflow = true;
      } // else x.constructor.underflow = false;
    }
  } else {

    // Zero.
    x.e = 0;
    x.d = [0];
  }

  return x;
}


/*
 * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
 */
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

  if (str.indexOf('_') > -1) {
    str = str.replace(/(\d)_(?=\d)/g, '$1');
    if (isDecimal.test(str)) return parseDecimal(x, str);
  } else if (str === 'Infinity' || str === 'NaN') {
    if (!+str) x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }

  if (isHex.test(str))  {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str))  {
    base = 2;
  } else if (isOctal.test(str))  {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }

  // Is there a binary exponent part?
  i = str.search(/p/i);

  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }

  // Convert `str` as an integer then divide the result by `base` raised to a power such that the
  // fraction part will be restored.
  i = str.indexOf('.');
  isFloat = i >= 0;
  Ctor = x.constructor;

  if (isFloat) {
    str = str.replace('.', '');
    len = str.length;
    i = len - i;

    // log[10](16) = 1.2041... , log[10](88) = 1.9444....
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }

  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;

  // Remove trailing zeros.
  for (i = xe; xd[i] === 0; --i) xd.pop();
  if (i < 0) return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;

  // At what precision to perform the division to ensure exact conversion?
  // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
  // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
  // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
  // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
  // Therefore using 4 * the number of digits of str will always be enough.
  if (isFloat) x = divide(x, divisor, len * 4);

  // Multiply by the binary exponent part if present.
  if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;

  return x;
}


/*
 * sin(x) = x - x^3/3! + x^5/5! - ...
 * |x| < pi/2
 *
 */
function sine(Ctor, x) {
  var k,
    len = x.d.length;

  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }

  // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
  // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
  // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

  // Estimate the optimum number of times to use the argument reduction.
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;

  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);

  // Reverse argument reduction
  var sin2_x,
    d5 = new Ctor(5),
    d16 = new Ctor(16),
    d20 = new Ctor(20);
  for (; k--;) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }

  return x;
}


// Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2,
    i = 1,
    pr = Ctor.precision,
    k = Math.ceil(pr / LOG_BASE);

  external = false;
  x2 = x.times(x);
  u = new Ctor(y);

  for (;;) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);

    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--;);
      if (j == -1) break;
    }

    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }

  external = true;
  t.d.length = k + 1;

  return t;
}


// Exponent e must be positive and non-zero.
function tinyPow(b, e) {
  var n = b;
  while (--e) n *= b;
  return n;
}


// Return the absolute value of `x` reduced to less than or equal to half pi.
function toLessThanHalfPi(Ctor, x) {
  var t,
    isNeg = x.s < 0,
    pi = getPi(Ctor, Ctor.precision, 1),
    halfPi = pi.times(0.5);

  x = x.abs();

  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }

  t = x.divToInt(pi);

  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));

    // 0 <= x < pi
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
      return x;
    }

    quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
  }

  return x.minus(pi).abs();
}


/*
 * Return the value of Decimal `x` as a string in base `baseOut`.
 *
 * If the optional `sd` argument is present include a binary exponent suffix.
 */
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y,
    Ctor = x.constructor,
    isExp = sd !== void 0;

  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }

  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf('.');

    // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
    // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
    // minBinaryExponent = floor(decimalExponent * log[2](10))
    // log[2](10) = 3.321928094887362347870319429489390175864

    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }

    // Convert the number as an integer then divide the result by its base raised to a power such
    // that the fraction part will be restored.

    // Non-integer.
    if (i >= 0) {
      str = str.replace('.', '');
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }

    xd = convertBase(str, 10, base);
    e = len = xd.length;

    // Remove trailing zeros.
    for (; xd[--len] == 0;) xd.pop();

    if (!xd[0]) {
      str = isExp ? '0p+0' : '0';
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }

      // The rounding digit, i.e. the digit after the digit that may be rounded up.
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;

      roundUp = rm < 4
        ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
        : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
          rm === (x.s < 0 ? 8 : 7));

      xd.length = sd;

      if (roundUp) {

        // Rounding up may mean the previous digit has to be rounded up and so on.
        for (; ++xd[--sd] > base - 1;) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }

      // Determine trailing zeros.
      for (len = xd.length; !xd[len - 1]; --len);

      // E.g. [4, 11, 15] becomes 4bf.
      for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

      // Add binary exponent suffix?
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++) str += '0';
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len);

            // xd[0] will always be be 1
            for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + '.' + str.slice(1);
          }
        }

        str =  str + (e < 0 ? 'p' : 'p+') + e;
      } else if (e < 0) {
        for (; ++e;) str = '0' + str;
        str = '0.' + str;
      } else {
        if (++e > len) for (e -= len; e-- ;) str += '0';
        else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
  }

  return x.s < 0 ? '-' + str : str;
}


// Does not strip trailing zeros.
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}


// Decimal methods


/*
 *  abs
 *  acos
 *  acosh
 *  add
 *  asin
 *  asinh
 *  atan
 *  atanh
 *  atan2
 *  cbrt
 *  ceil
 *  clamp
 *  clone
 *  config
 *  cos
 *  cosh
 *  div
 *  exp
 *  floor
 *  hypot
 *  ln
 *  log
 *  log2
 *  log10
 *  max
 *  min
 *  mod
 *  mul
 *  pow
 *  random
 *  round
 *  set
 *  sign
 *  sin
 *  sinh
 *  sqrt
 *  sub
 *  sum
 *  tan
 *  tanh
 *  trunc
 */


/*
 * Return a new Decimal whose value is the absolute value of `x`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function abs(x) {
  return new this(x).abs();
}


/*
 * Return a new Decimal whose value is the arccosine in radians of `x`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function acos(x) {
  return new this(x).acos();
}


/*
 * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function acosh(x) {
  return new this(x).acosh();
}


/*
 * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */
function add(x, y) {
  return new this(x).plus(y);
}


/*
 * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function asin(x) {
  return new this(x).asin();
}


/*
 * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function asinh(x) {
  return new this(x).asinh();
}


/*
 * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function atan(x) {
  return new this(x).atan();
}


/*
 * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
 * `precision` significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function atanh(x) {
  return new this(x).atanh();
}


/*
 * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
 * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
 *
 * Domain: [-Infinity, Infinity]
 * Range: [-pi, pi]
 *
 * y {number|string|bigint|Decimal} The y-coordinate.
 * x {number|string|bigint|Decimal} The x-coordinate.
 *
 * atan2(±0, -0)               = ±pi
 * atan2(±0, +0)               = ±0
 * atan2(±0, -x)               = ±pi for x > 0
 * atan2(±0, x)                = ±0 for x > 0
 * atan2(-y, ±0)               = -pi/2 for y > 0
 * atan2(y, ±0)                = pi/2 for y > 0
 * atan2(±y, -Infinity)        = ±pi for finite y > 0
 * atan2(±y, +Infinity)        = ±0 for finite y > 0
 * atan2(±Infinity, x)         = ±pi/2 for finite x
 * atan2(±Infinity, -Infinity) = ±3*pi/4
 * atan2(±Infinity, +Infinity) = ±pi/4
 * atan2(NaN, x) = NaN
 * atan2(y, NaN) = NaN
 *
 */
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r,
    pr = this.precision,
    rm = this.rounding,
    wpr = pr + 4;

  // Either NaN
  if (!y.s || !x.s) {
    r = new this(NaN);

  // Both ±Infinity
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;

  // x is ±Infinity or y is ±0
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;

  // y is ±Infinity or x is ±0
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;

  // Both non-zero and finite
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }

  return r;
}


/*
 * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function cbrt(x) {
  return new this(x).cbrt();
}


/*
 * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}


/*
 * Return a new Decimal whose value is `x` clamped to the range delineated by `min` and `max`.
 *
 * x {number|string|bigint|Decimal}
 * min {number|string|bigint|Decimal}
 * max {number|string|bigint|Decimal}
 *
 */
function clamp(x, min, max) {
  return new this(x).clamp(min, max);
}


/*
 * Configure global settings for a Decimal constructor.
 *
 * `obj` is an object with one or more of the following properties,
 *
 *   precision  {number}
 *   rounding   {number}
 *   toExpNeg   {number}
 *   toExpPos   {number}
 *   maxE       {number}
 *   minE       {number}
 *   modulo     {number}
 *   crypto     {boolean|number}
 *   defaults   {true}
 *
 * E.g. Decimal.config({ precision: 20, rounding: 4 })
 *
 */
function config(obj) {
  if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
  var i, p, v,
    useDefaults = obj.defaults === true,
    ps = [
      'precision', 1, MAX_DIGITS,
      'rounding', 0, 8,
      'toExpNeg', -EXP_LIMIT, 0,
      'toExpPos', 0, EXP_LIMIT,
      'maxE', 0, EXP_LIMIT,
      'minE', -EXP_LIMIT, 0,
      'modulo', 0, 9
    ];

  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ': ' + v);
    }
  }

  if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != 'undefined' && crypto &&
          (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ': ' + v);
    }
  }

  return this;
}


/*
 * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function cos(x) {
  return new this(x).cos();
}


/*
 * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function cosh(x) {
  return new this(x).cosh();
}


/*
 * Create and return a Decimal constructor with the same configuration properties as this Decimal
 * constructor.
 *
 */
function clone(obj) {
  var i, p, ps;

  /*
   * The Decimal constructor and exported function.
   * Return a new Decimal instance.
   *
   * v {number|string|bigint|Decimal} A numeric value.
   *
   */
  function Decimal(v) {
    var e, i, t,
      x = this;

    // Decimal called without new.
    if (!(x instanceof Decimal)) return new Decimal(v);

    // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
    // which points to Object.
    x.constructor = Decimal;

    if (isDecimalInstance(v)) {
      x.s = v.s;

      if (external) {
        if (!v.d || v.e > Decimal.maxE) {

          // Infinity.
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal.minE) {

          // Zero.
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }

      return;
    }

    t = typeof v;

    if (t === 'number') {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }

      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }

      // Fast path for small integers.
      if (v === ~~v && v < 1e7) {
        for (e = 0, i = v; i >= 10; i /= 10) e++;

        if (external) {
          if (e > Decimal.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }

        return;
      }

      // Infinity or NaN?
      if (v * 0 !== 0) {
        if (!v) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }

      return parseDecimal(x, v.toString());
    }

    if (t === 'string') {
      if ((i = v.charCodeAt(0)) === 45) {  // minus sign
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i === 43) v = v.slice(1);  // plus sign
        x.s = 1;
      }

      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }

    if (t === 'bigint') {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }

      return parseDecimal(x, v.toString());
    }

    throw Error(invalidArgument + v);
  }

  Decimal.prototype = P;

  Decimal.ROUND_UP = 0;
  Decimal.ROUND_DOWN = 1;
  Decimal.ROUND_CEIL = 2;
  Decimal.ROUND_FLOOR = 3;
  Decimal.ROUND_HALF_UP = 4;
  Decimal.ROUND_HALF_DOWN = 5;
  Decimal.ROUND_HALF_EVEN = 6;
  Decimal.ROUND_HALF_CEIL = 7;
  Decimal.ROUND_HALF_FLOOR = 8;
  Decimal.EUCLID = 9;

  Decimal.config = Decimal.set = config;
  Decimal.clone = clone;
  Decimal.isDecimal = isDecimalInstance;

  Decimal.abs = abs;
  Decimal.acos = acos;
  Decimal.acosh = acosh;        // ES6
  Decimal.add = add;
  Decimal.asin = asin;
  Decimal.asinh = asinh;        // ES6
  Decimal.atan = atan;
  Decimal.atanh = atanh;        // ES6
  Decimal.atan2 = atan2;
  Decimal.cbrt = cbrt;          // ES6
  Decimal.ceil = ceil;
  Decimal.clamp = clamp;
  Decimal.cos = cos;
  Decimal.cosh = cosh;          // ES6
  Decimal.div = div;
  Decimal.exp = exp;
  Decimal.floor = floor;
  Decimal.hypot = hypot;        // ES6
  Decimal.ln = ln;
  Decimal.log = log;
  Decimal.log10 = log10;        // ES6
  Decimal.log2 = log2;          // ES6
  Decimal.max = max;
  Decimal.min = min;
  Decimal.mod = mod;
  Decimal.mul = mul;
  Decimal.pow = pow;
  Decimal.random = random;
  Decimal.round = round;
  Decimal.sign = sign;          // ES6
  Decimal.sin = sin;
  Decimal.sinh = sinh;          // ES6
  Decimal.sqrt = sqrt;
  Decimal.sub = sub;
  Decimal.sum = sum;
  Decimal.tan = tan;
  Decimal.tanh = tanh;          // ES6
  Decimal.trunc = trunc;        // ES6

  if (obj === void 0) obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
      for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }
  }

  Decimal.config(obj);

  return Decimal;
}


/*
 * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */
function div(x, y) {
  return new this(x).div(y);
}


/*
 * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} The power to which to raise the base of the natural log.
 *
 */
function exp(x) {
  return new this(x).exp();
}


/*
 * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}


/*
 * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
 * rounded to `precision` significant digits using rounding mode `rounding`.
 *
 * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
 *
 * arguments {number|string|bigint|Decimal}
 *
 */
function hypot() {
  var i, n,
    t = new this(0);

  external = false;

  for (i = 0; i < arguments.length;) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }

  external = true;

  return t.sqrt();
}


/*
 * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
 * otherwise return false.
 *
 */
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}


/*
 * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function ln(x) {
  return new this(x).ln();
}


/*
 * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
 * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
 *
 * log[y](x)
 *
 * x {number|string|bigint|Decimal} The argument of the logarithm.
 * y {number|string|bigint|Decimal} The base of the logarithm.
 *
 */
function log(x, y) {
  return new this(x).log(y);
}


/*
 * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function log2(x) {
  return new this(x).log(2);
}


/*
 * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function log10(x) {
  return new this(x).log(10);
}


/*
 * Return a new Decimal whose value is the maximum of the arguments.
 *
 * arguments {number|string|bigint|Decimal}
 *
 */
function max() {
  return maxOrMin(this, arguments, -1);
}


/*
 * Return a new Decimal whose value is the minimum of the arguments.
 *
 * arguments {number|string|bigint|Decimal}
 *
 */
function min() {
  return maxOrMin(this, arguments, 1);
}


/*
 * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
 * using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */
function mod(x, y) {
  return new this(x).mod(y);
}


/*
 * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */
function mul(x, y) {
  return new this(x).mul(y);
}


/*
 * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} The base.
 * y {number|string|bigint|Decimal} The exponent.
 *
 */
function pow(x, y) {
  return new this(x).pow(y);
}


/*
 * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
 * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
 * are produced).
 *
 * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
 *
 */
function random(sd) {
  var d, e, k, n,
    i = 0,
    r = new this(1),
    rd = [];

  if (sd === void 0) sd = this.precision;
  else checkInt32(sd, 1, MAX_DIGITS);

  k = Math.ceil(sd / LOG_BASE);

  if (!this.crypto) {
    for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

  // Browsers supporting crypto.getRandomValues.
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));

    for (; i < k;) {
      n = d[i];

      // 0 <= n < 4294967296
      // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
      if (n >= 4.29e9) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {

        // 0 <= n <= 4289999999
        // 0 <= (n % 1e7) <= 9999999
        rd[i++] = n % 1e7;
      }
    }

  // Node.js supporting crypto.randomBytes.
  } else if (crypto.randomBytes) {

    // buffer
    d = crypto.randomBytes(k *= 4);

    for (; i < k;) {

      // 0 <= n < 2147483648
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

      // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
      if (n >= 2.14e9) {
        crypto.randomBytes(4).copy(d, i);
      } else {

        // 0 <= n <= 2139999999
        // 0 <= (n % 1e7) <= 9999999
        rd.push(n % 1e7);
        i += 4;
      }
    }

    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }

  k = rd[--i];
  sd %= LOG_BASE;

  // Convert trailing digits to zeros according to sd.
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }

  // Remove trailing words which are zero.
  for (; rd[i] === 0; i--) rd.pop();

  // Zero?
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;

    // Remove leading words which are zero and adjust exponent accordingly.
    for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

    // Count the digits of the first word of rd to determine leading zeros.
    for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

    // Adjust the exponent for leading zeros of the first word of rd.
    if (k < LOG_BASE) e -= LOG_BASE - k;
  }

  r.e = e;
  r.d = rd;

  return r;
}


/*
 * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
 *
 * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
 *
 * x {number|string|bigint|Decimal}
 *
 */
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}


/*
 * Return
 *   1    if x > 0,
 *  -1    if x < 0,
 *   0    if x is 0,
 *  -0    if x is -0,
 *   NaN  otherwise
 *
 * x {number|string|bigint|Decimal}
 *
 */
function sign(x) {
  x = new this(x);
  return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
}


/*
 * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
 * using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function sin(x) {
  return new this(x).sin();
}


/*
 * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function sinh(x) {
  return new this(x).sinh();
}


/*
 * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function sqrt(x) {
  return new this(x).sqrt();
}


/*
 * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
 * using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal}
 * y {number|string|bigint|Decimal}
 *
 */
function sub(x, y) {
  return new this(x).sub(y);
}


/*
 * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * Only the result is rounded, not the intermediate calculations.
 *
 * arguments {number|string|bigint|Decimal}
 *
 */
function sum() {
  var i = 0,
    args = arguments,
    x = new this(args[i]);

  external = false;
  for (; x.s && ++i < args.length;) x = x.plus(args[i]);
  external = true;

  return finalise(x, this.precision, this.rounding);
}


/*
 * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
 * digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function tan(x) {
  return new this(x).tan();
}


/*
 * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
 * significant digits using rounding mode `rounding`.
 *
 * x {number|string|bigint|Decimal} A value in radians.
 *
 */
function tanh(x) {
  return new this(x).tanh();
}


/*
 * Return a new Decimal whose value is `x` truncated to an integer.
 *
 * x {number|string|bigint|Decimal}
 *
 */
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}


P[Symbol.for('nodejs.util.inspect.custom')] = P.toString;
P[Symbol.toStringTag] = 'Decimal';

// Create and configure initial Decimal constructor.
var Decimal = P.constructor = clone(DEFAULTS);

// Create the internal constants from their string values.
LN10 = new Decimal(LN10);
PI = new Decimal(PI);

/* harmony default export */ const decimal_js_decimal = (Decimal);

;// ./node_modules/@formatjs/ecma402-abstract/lib/constants.js

var TEN = new decimal_js_decimal(10);
var ZERO = new decimal_js_decimal(0);
var NEGATIVE_ZERO = new decimal_js_decimal(-0);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
;// ./node_modules/@formatjs/fast-memoize/lib/index.js
//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
var ObjectWithoutPrototypeCache = /** @class */ (function () {
    function ObjectWithoutPrototypeCache() {
        this.cache = Object.create(null);
    }
    ObjectWithoutPrototypeCache.prototype.get = function (key) {
        return this.cache[key];
    };
    ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
        this.cache[key] = value;
    };
    return ObjectWithoutPrototypeCache;
}());
var cacheDefault = {
    create: function create() {
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};

;// ./node_modules/@formatjs/ecma402-abstract/lib/utils.js


function repeat(s, times) {
    if (typeof s.repeat === 'function') {
        return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = s;
    }
    return arr.join('');
}
function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
        map.set(pl, Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var k = _a[_i];
        setInternalSlot(map, pl, k, props[k]);
    }
}
function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
        throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    }
    return fields.reduce(function (all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function isLiteralPart(patternPart) {
    return patternPart.type === 'literal';
}
/*
  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
*/
function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value,
    });
}
/**
 * 7.3.5 CreateDataProperty
 * @param target
 * @param name
 * @param value
 */
function createDataProperty(target, name, value) {
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value,
    });
}
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
var createMemoizedNumberFormat = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.NumberFormat).bind.apply(_a, (0,tslib_es6.__spreadArray)([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
var createMemoizedDateTimeFormat = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0,tslib_es6.__spreadArray)([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
var createMemoizedPluralRules = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.PluralRules).bind.apply(_a, (0,tslib_es6.__spreadArray)([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
var createMemoizedLocale = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.Locale).bind.apply(_a, (0,tslib_es6.__spreadArray)([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
var createMemoizedListFormat = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.ListFormat).bind.apply(_a, (0,tslib_es6.__spreadArray)([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});

;// ./node_modules/@formatjs/ecma402-abstract/lib/262.js



/**
 * https://tc39.es/ecma262/#sec-tostring
 */
function ToString(o) {
    // Only symbol is irregular...
    if (typeof o === 'symbol') {
        throw TypeError('Cannot convert a Symbol value to a string');
    }
    return String(o);
}
/**
 * https://tc39.es/ecma262/#sec-tonumber
 * @param val
 */
function ToNumber(arg) {
    if (typeof arg === 'number') {
        return new Decimal(arg);
    }
    invariant(typeof arg !== 'bigint' && typeof arg !== 'symbol', 'BigInt and Symbol are not supported', TypeError);
    if (arg === undefined) {
        return new Decimal(NaN);
    }
    if (arg === null || arg === 0) {
        return ZERO;
    }
    if (arg === true) {
        return new Decimal(1);
    }
    if (typeof arg === 'string') {
        try {
            return new Decimal(arg);
        }
        catch (e) {
            return new Decimal(NaN);
        }
    }
    invariant(typeof arg === 'object', 'object expected', TypeError);
    var primValue = ToPrimitive(arg, 'number');
    invariant(typeof primValue !== 'object', 'object expected', TypeError);
    return ToNumber(primValue);
}
/**
 * https://tc39.es/ecma262/#sec-tointeger
 * @param n
 */
function ToInteger(n) {
    var number = ToNumber(n);
    if (number.isNaN() || number.isZero()) {
        return ZERO;
    }
    if (number.isFinite()) {
        return number;
    }
    var integer = number.abs().floor();
    if (number.isNegative()) {
        integer = integer.negated();
    }
    return integer;
}
/**
 * https://tc39.es/ecma262/#sec-timeclip
 * @param time
 */
function TimeClip(time) {
    if (!time.isFinite()) {
        return new Decimal(NaN);
    }
    if (time.abs().greaterThan(8.64 * 1e15)) {
        return new Decimal(NaN);
    }
    return ToInteger(time);
}
/**
 * https://tc39.es/ecma262/#sec-toobject
 * @param arg
 */
function ToObject(arg) {
    if (arg == null) {
        throw new TypeError('undefined/null cannot be converted to object');
    }
    return Object(arg);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-samevalue
 * @param x
 * @param y
 */
function SameValue(x, y) {
    if (Object.is) {
        return Object.is(x, y);
    }
    // SameValue algorithm
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    }
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-arraycreate
 * @param len
 */
function ArrayCreate(len) {
    return new Array(len);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-hasownproperty
 * @param o
 * @param prop
 */
function HasOwnProperty(o, prop) {
    return Object.prototype.hasOwnProperty.call(o, prop);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-type
 * @param x
 */
function Type(x) {
    if (x === null) {
        return 'Null';
    }
    if (typeof x === 'undefined') {
        return 'Undefined';
    }
    if (typeof x === 'function' || typeof x === 'object') {
        return 'Object';
    }
    if (typeof x === 'number') {
        return 'Number';
    }
    if (typeof x === 'boolean') {
        return 'Boolean';
    }
    if (typeof x === 'string') {
        return 'String';
    }
    if (typeof x === 'symbol') {
        return 'Symbol';
    }
    if (typeof x === 'bigint') {
        return 'BigInt';
    }
}
var MS_PER_DAY = 86400000;
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#eqn-modulo
 * @param x
 * @param y
 * @return k of the same sign as y
 */
function _262_mod(x, y) {
    return x - Math.floor(x / y) * y;
}
/**
 * https://tc39.es/ecma262/#eqn-Day
 * @param t
 */
function Day(t) {
    return Math.floor(t / MS_PER_DAY);
}
/**
 * https://tc39.es/ecma262/#sec-week-day
 * @param t
 */
function WeekDay(t) {
    return _262_mod(Day(t) + 4, 7);
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param y
 */
function DayFromYear(y) {
    if (y < 100) {
        // Date.UTC parses 0 - 99 as 1900 - 1999
        var date = new Date(0);
        date.setUTCFullYear(y, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date.getTime() / MS_PER_DAY;
    }
    return Date.UTC(y, 0) / MS_PER_DAY;
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param y
 */
function TimeFromYear(y) {
    return Date.UTC(y, 0);
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param t
 */
function YearFromTime(t) {
    return new Date(t).getUTCFullYear();
}
function DaysInYear(y) {
    if (y % 4 !== 0) {
        return 365;
    }
    if (y % 100 !== 0) {
        return 366;
    }
    if (y % 400 !== 0) {
        return 365;
    }
    return 366;
}
function DayWithinYear(t) {
    return Day(t) - DayFromYear(YearFromTime(t));
}
function InLeapYear(t) {
    return DaysInYear(YearFromTime(t)) === 365 ? 0 : 1;
}
/**
 * https://tc39.es/ecma262/#sec-month-number
 * @param t
 */
function MonthFromTime(t) {
    var dwy = DayWithinYear(t);
    var leap = InLeapYear(t);
    if (dwy >= 0 && dwy < 31) {
        return 0;
    }
    if (dwy < 59 + leap) {
        return 1;
    }
    if (dwy < 90 + leap) {
        return 2;
    }
    if (dwy < 120 + leap) {
        return 3;
    }
    if (dwy < 151 + leap) {
        return 4;
    }
    if (dwy < 181 + leap) {
        return 5;
    }
    if (dwy < 212 + leap) {
        return 6;
    }
    if (dwy < 243 + leap) {
        return 7;
    }
    if (dwy < 273 + leap) {
        return 8;
    }
    if (dwy < 304 + leap) {
        return 9;
    }
    if (dwy < 334 + leap) {
        return 10;
    }
    if (dwy < 365 + leap) {
        return 11;
    }
    throw new Error('Invalid time');
}
function DateFromTime(t) {
    var dwy = DayWithinYear(t);
    var mft = MonthFromTime(t);
    var leap = InLeapYear(t);
    if (mft === 0) {
        return dwy + 1;
    }
    if (mft === 1) {
        return dwy - 30;
    }
    if (mft === 2) {
        return dwy - 58 - leap;
    }
    if (mft === 3) {
        return dwy - 89 - leap;
    }
    if (mft === 4) {
        return dwy - 119 - leap;
    }
    if (mft === 5) {
        return dwy - 150 - leap;
    }
    if (mft === 6) {
        return dwy - 180 - leap;
    }
    if (mft === 7) {
        return dwy - 211 - leap;
    }
    if (mft === 8) {
        return dwy - 242 - leap;
    }
    if (mft === 9) {
        return dwy - 272 - leap;
    }
    if (mft === 10) {
        return dwy - 303 - leap;
    }
    if (mft === 11) {
        return dwy - 333 - leap;
    }
    throw new Error('Invalid time');
}
var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;
var SECONDS_PER_MINUTE = 60;
var MS_PER_SECOND = 1e3;
var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
function HourFromTime(t) {
    return _262_mod(Math.floor(t / MS_PER_HOUR), HOURS_PER_DAY);
}
function MinFromTime(t) {
    return _262_mod(Math.floor(t / MS_PER_MINUTE), MINUTES_PER_HOUR);
}
function SecFromTime(t) {
    return _262_mod(Math.floor(t / MS_PER_SECOND), SECONDS_PER_MINUTE);
}
function IsCallable(fn) {
    return typeof fn === 'function';
}
/**
 * The abstract operation OrdinaryHasInstance implements
 * the default algorithm for determining if an object O
 * inherits from the instance object inheritance path
 * provided by constructor C.
 * @param C class
 * @param O object
 * @param internalSlots internalSlots
 */
function OrdinaryHasInstance(C, O, internalSlots) {
    if (!IsCallable(C)) {
        return false;
    }
    if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
        var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
        return O instanceof BC;
    }
    if (typeof O !== 'object') {
        return false;
    }
    var P = C.prototype;
    if (typeof P !== 'object') {
        throw new TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
    }
    return Object.prototype.isPrototypeOf.call(P, O);
}
function msFromTime(t) {
    return _262_mod(t, MS_PER_SECOND);
}
function OrdinaryToPrimitive(O, hint) {
    var methodNames;
    if (hint === 'string') {
        methodNames = ['toString', 'valueOf'];
    }
    else {
        methodNames = ['valueOf', 'toString'];
    }
    for (var _i = 0, methodNames_1 = methodNames; _i < methodNames_1.length; _i++) {
        var name_1 = methodNames_1[_i];
        var method = O[name_1];
        if (IsCallable(method)) {
            var result = method.call(O);
            if (typeof result !== 'object') {
                return result;
            }
        }
    }
    throw new TypeError('Cannot convert object to primitive value');
}
function ToPrimitive(input, preferredType) {
    if (typeof input === 'object' && input != null) {
        var exoticToPrim = Symbol.toPrimitive in input ? input[Symbol.toPrimitive] : undefined;
        var hint = void 0;
        if (exoticToPrim !== undefined) {
            if (preferredType === undefined) {
                hint = 'default';
            }
            else if (preferredType === 'string') {
                hint = 'string';
            }
            else {
                invariant(preferredType === 'number', 'preferredType must be "string" or "number"');
                hint = 'number';
            }
            var result = exoticToPrim.call(input, hint);
            if (typeof result !== 'object') {
                return result;
            }
            throw new TypeError('Cannot convert exotic object to primitive.');
        }
        if (preferredType === undefined) {
            preferredType = 'number';
        }
        return OrdinaryToPrimitive(input, preferredType);
    }
    return input;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js

/**
 * https://tc39.es/ecma402/#sec-coerceoptionstoobject
 * @param options
 * @returns
 */
function CoerceOptionsToObject(options) {
    if (typeof options === 'undefined') {
        return Object.create(null);
    }
    return ToObject(options);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js
/**
 * https://tc39.es/ecma402/#sec-defaultnumberoption
 * @param val
 * @param min
 * @param max
 * @param fallback
 */
function DefaultNumberOption(inputVal, min, max, fallback) {
    if (inputVal === undefined) {
        // @ts-expect-error
        return fallback;
    }
    var val = Number(inputVal);
    if (isNaN(val) || val < min || val > max) {
        throw new RangeError("".concat(val, " is outside of range [").concat(min, ", ").concat(max, "]"));
    }
    return Math.floor(val);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js
/**
 * https://tc39.es/ecma402/#sec-getnumberoption
 * @param options
 * @param property
 * @param min
 * @param max
 * @param fallback
 */

function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    return DefaultNumberOption(val, minimum, maximum, fallback);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js

/**
 * https://tc39.es/ecma402/#sec-getoption
 * @param opts
 * @param prop
 * @param type
 * @param values
 * @param fallback
 */
function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== 'object') {
        throw new TypeError('Options must be an object');
    }
    var value = opts[prop];
    if (value !== undefined) {
        if (type !== 'boolean' && type !== 'string') {
            throw new TypeError('invalid type');
        }
        if (type === 'boolean') {
            value = Boolean(value);
        }
        if (type === 'string') {
            value = ToString(value);
        }
        if (values !== undefined && !values.filter(function (val) { return val == value; }).length) {
            throw new RangeError("".concat(value, " is not within ").concat(values.join(', ')));
        }
        return value;
    }
    return fallback;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js
/**
 * https://tc39.es/ecma402/#sec-getoptionsobject
 * @param options
 * @returns
 */
function GetOptionsObject(options) {
    if (typeof options === 'undefined') {
        return Object.create(null);
    }
    if (typeof options === 'object') {
        return options;
    }
    throw new TypeError('Options must be an object');
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/GetStringOrBooleanOption.js
/**
 * https://tc39.es/ecma402/#sec-getstringorbooleanoption
 * @param opts
 * @param prop
 * @param values
 * @param trueValue
 * @param falsyValue
 * @param fallback
 */

function GetStringOrBooleanOption(opts, prop, values, trueValue, falsyValue, fallback) {
    var value = opts[prop];
    if (value === undefined) {
        return fallback;
    }
    if (value === true) {
        return trueValue;
    }
    var valueBoolean = Boolean(value);
    if (valueBoolean === false) {
        return falsyValue;
    }
    value = ToString(value);
    if (value === 'true' || value === 'false') {
        return fallback;
    }
    if ((values || []).indexOf(value) === -1) {
        throw new RangeError("Invalid value ".concat(value));
    }
    return value;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
/**
 * https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
 */
var SANCTIONED_UNITS = [
    'angle-degree',
    'area-acre',
    'area-hectare',
    'concentr-percent',
    'digital-bit',
    'digital-byte',
    'digital-gigabit',
    'digital-gigabyte',
    'digital-kilobit',
    'digital-kilobyte',
    'digital-megabit',
    'digital-megabyte',
    'digital-petabyte',
    'digital-terabit',
    'digital-terabyte',
    'duration-day',
    'duration-hour',
    'duration-millisecond',
    'duration-minute',
    'duration-month',
    'duration-second',
    'duration-week',
    'duration-year',
    'length-centimeter',
    'length-foot',
    'length-inch',
    'length-kilometer',
    'length-meter',
    'length-mile-scandinavian',
    'length-mile',
    'length-millimeter',
    'length-yard',
    'mass-gram',
    'mass-kilogram',
    'mass-ounce',
    'mass-pound',
    'mass-stone',
    'temperature-celsius',
    'temperature-fahrenheit',
    'volume-fluid-ounce',
    'volume-gallon',
    'volume-liter',
    'volume-milliliter',
];
// In CLDR, the unit name always follows the form `namespace-unit` pattern.
// For example: `digital-bit` instead of `bit`. This function removes the namespace prefix.
function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf('-') + 1);
}
/**
 * https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
 */
var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);
/**
 * https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier
 */
function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
    return SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js
/**
 * https://tc39.es/ecma402/#sec-isvalidtimezonename
 * @param tz
 * @param implDetails implementation details
 */
function IsValidTimeZoneName(tz, _a) {
    var zoneNamesFromData = _a.zoneNamesFromData, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var zoneNames = new Set();
    var linkNames = new Set();
    zoneNamesFromData.map(function (z) { return z.toUpperCase(); }).forEach(function (z) { return zoneNames.add(z); });
    Object.keys(uppercaseLinks).forEach(function (linkName) {
        linkNames.add(linkName.toUpperCase());
        zoneNames.add(uppercaseLinks[linkName].toUpperCase());
    });
    return zoneNames.has(uppercasedTz) || linkNames.has(uppercasedTz);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js
/**
 * This follows https://tc39.es/ecma402/#sec-case-sensitivity-and-case-mapping
 * @param str string to convert
 */
function toUpperCase(str) {
    return str.replace(/([a-z])/g, function (_, c) { return c.toUpperCase(); });
}
var NOT_A_Z_REGEX = /[^A-Z]/;
/**
 * https://tc39.es/ecma402/#sec-iswellformedcurrencycode
 */
function IsWellFormedCurrencyCode(currency) {
    currency = toUpperCase(currency);
    if (currency.length !== 3) {
        return false;
    }
    if (NOT_A_Z_REGEX.test(currency)) {
        return false;
    }
    return true;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js

/**
 * This follows https://tc39.es/ecma402/#sec-case-sensitivity-and-case-mapping
 * @param str string to convert
 */
function toLowerCase(str) {
    return str.replace(/([A-Z])/g, function (_, c) { return c.toLowerCase(); });
}
/**
 * https://tc39.es/ecma402/#sec-iswellformedunitidentifier
 * @param unit
 */
function IsWellFormedUnitIdentifier(unit) {
    unit = toLowerCase(unit);
    if (IsSanctionedSimpleUnitIdentifier(unit)) {
        return true;
    }
    var units = unit.split('-per-');
    if (units.length !== 2) {
        return false;
    }
    var numerator = units[0], denominator = units[1];
    if (!IsSanctionedSimpleUnitIdentifier(numerator) ||
        !IsSanctionedSimpleUnitIdentifier(denominator)) {
        return false;
    }
    return true;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ApplyUnsignedRoundingMode.js

function ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode) {
    if (x.eq(r1))
        return r1;
    invariant(r1.lessThan(x) && x.lessThan(r2), "x should be between r1 and r2 but x=".concat(x, ", r1=").concat(r1, ", r2=").concat(r2));
    if (unsignedRoundingMode === 'zero') {
        return r1;
    }
    if (unsignedRoundingMode === 'infinity') {
        return r2;
    }
    var d1 = x.minus(r1);
    var d2 = r2.minus(x);
    if (d1.lessThan(d2)) {
        return r1;
    }
    if (d2.lessThan(d1)) {
        return r2;
    }
    invariant(d1.eq(d2), 'd1 should be equal to d2');
    if (unsignedRoundingMode === 'half-zero') {
        return r1;
    }
    if (unsignedRoundingMode === 'half-infinity') {
        return r2;
    }
    invariant(unsignedRoundingMode === 'half-even', 'unsignedRoundingMode should be half-even');
    var cardinality = r1.div(r2.minus(r1)).mod(2);
    if (cardinality.isZero()) {
        return r1;
    }
    return r2;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CollapseNumberRange.js
var PART_TYPES_TO_COLLAPSE = new Set([
    'unit',
    'exponentMinusSign',
    'minusSign',
    'plusSign',
    'percentSign',
    'exponentSeparator',
    'percent',
    'percentSign',
    'currency',
    'literal',
]);
/**
 * https://tc39.es/ecma402/#sec-collapsenumberrange
 * LDML: https://unicode-org.github.io/cldr/ldml/tr35-numbers.html#collapsing-number-ranges
 */
function CollapseNumberRange(numberFormat, result, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var internalSlots = getInternalSlots(numberFormat);
    var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
    var rangeSignRegex = new RegExp("s?[".concat(symbols.rangeSign, "]s?"));
    var rangeSignIndex = result.findIndex(function (r) { return r.type === 'literal' && rangeSignRegex.test(r.value); });
    var prefixSignParts = [];
    for (var i = rangeSignIndex - 1; i >= 0; i--) {
        if (!PART_TYPES_TO_COLLAPSE.has(result[i].type)) {
            break;
        }
        prefixSignParts.unshift(result[i]);
    }
    // Don't collapse if it's a single code point
    if (Array.from(prefixSignParts.map(function (p) { return p.value; }).join('')).length > 1) {
        var newResult = Array.from(result);
        newResult.splice(rangeSignIndex - prefixSignParts.length, prefixSignParts.length);
        return newResult;
    }
    var suffixSignParts = [];
    for (var i = rangeSignIndex + 1; i < result.length; i++) {
        if (!PART_TYPES_TO_COLLAPSE.has(result[i].type)) {
            break;
        }
        suffixSignParts.push(result[i]);
    }
    // Don't collapse if it's a single code point
    if (Array.from(suffixSignParts.map(function (p) { return p.value; }).join('')).length > 1) {
        var newResult = Array.from(result);
        newResult.splice(rangeSignIndex + 1, suffixSignParts.length);
        return newResult;
    }
    return result;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js


decimal_js_decimal.set({
    toExpPos: 100,
});
/**
 * The abstract operation ComputeExponentForMagnitude computes an exponent by which to scale a
 * number of the given magnitude (power of ten of the most significant digit) according to the
 * locale and the desired notation (scientific, engineering, or compact).
 */
function ComputeExponentForMagnitude(internalSlots, magnitude) {
    var notation = internalSlots.notation, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    switch (notation) {
        case 'standard':
            return 0;
        case 'scientific':
            return magnitude.toNumber();
        case 'engineering':
            var thousands = magnitude.div(3).floor();
            return thousands.times(3).toNumber();
        default: {
            invariant(notation === 'compact', 'Invalid notation');
            // Let exponent be an implementation- and locale-dependent (ILD) integer by which to scale a
            // number of the given magnitude in compact notation for the current locale.
            var compactDisplay = internalSlots.compactDisplay, style = internalSlots.style, currencyDisplay = internalSlots.currencyDisplay;
            var thresholdMap = void 0;
            if (style === 'currency' && currencyDisplay !== 'name') {
                var currency = dataLocaleData.numbers.currency[numberingSystem] ||
                    dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
                thresholdMap = currency.short;
            }
            else {
                var decimal = dataLocaleData.numbers.decimal[numberingSystem] ||
                    dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
                thresholdMap = compactDisplay === 'long' ? decimal.long : decimal.short;
            }
            if (!thresholdMap) {
                return 0;
            }
            var num = decimal_js_decimal.pow(10, magnitude).toString();
            var thresholds = Object.keys(thresholdMap); // TODO: this can be pre-processed
            if (num < thresholds[0]) {
                return 0;
            }
            if (num > thresholds[thresholds.length - 1]) {
                return thresholds[thresholds.length - 1].length - 1;
            }
            var i = thresholds.indexOf(num);
            if (i === -1) {
                return 0;
            }
            // See https://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats
            // Special handling if the pattern is precisely `0`.
            var magnitudeKey = thresholds[i];
            // TODO: do we need to handle plural here?
            var compactPattern = thresholdMap[magnitudeKey].other;
            if (compactPattern === '0') {
                return 0;
            }
            // Example: in zh-TW, `10000000` maps to `0000萬`. So we need to return 8 - 4 = 4 here.
            return (magnitudeKey.length -
                thresholdMap[magnitudeKey].other.match(/0+/)[0].length);
        }
    }
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/GetUnsignedRoundingMode.js
var negativeMapping = {
    ceil: 'zero',
    floor: 'infinity',
    expand: 'infinity',
    trunc: 'zero',
    halfCeil: 'half-zero',
    halfFloor: 'half-infinity',
    halfExpand: 'half-infinity',
    halfTrunc: 'half-zero',
    halfEven: 'half-even',
};
var positiveMapping = {
    ceil: 'infinity',
    floor: 'zero',
    expand: 'infinity',
    trunc: 'zero',
    halfCeil: 'half-infinity',
    halfFloor: 'half-zero',
    halfExpand: 'half-infinity',
    halfTrunc: 'half-zero',
    halfEven: 'half-even',
};
function GetUnsignedRoundingMode(roundingMode, isNegative) {
    if (isNegative) {
        return negativeMapping[roundingMode];
    }
    return positiveMapping[roundingMode];
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js



//IMPL: Setting Decimal configuration
decimal_js_decimal.set({
    toExpPos: 100,
});
//IMPL: Helper function to calculate raw fixed value
function ToRawFixedFn(n, f) {
    return n.times(decimal_js_decimal.pow(10, -f));
}
//IMPL: Helper function to find n1 and r1
function findN1R1(x, f, roundingIncrement) {
    var nx = x.times(decimal_js_decimal.pow(10, f)).floor();
    var n1 = nx.div(roundingIncrement).floor().times(roundingIncrement);
    var r1 = ToRawFixedFn(n1, f);
    return {
        n1: n1,
        r1: r1,
    };
}
//IMPL: Helper function to find n2 and r2
function findN2R2(x, f, roundingIncrement) {
    var nx = x.times(decimal_js_decimal.pow(10, f)).ceil();
    var n2 = nx.div(roundingIncrement).ceil().times(roundingIncrement);
    var r2 = ToRawFixedFn(n2, f);
    return {
        n2: n2,
        r2: r2,
    };
}
/**
 * https://tc39.es/ecma402/#sec-torawfixed
 * @param x a finite non-negative Number or BigInt
 * @param minFraction an integer between 0 and 20
 * @param maxFraction an integer between 0 and 20
 */
function ToRawFixed(x, minFraction, maxFraction, roundingIncrement, unsignedRoundingMode) {
    // 1. Let f be maxFraction.
    var f = maxFraction;
    // 2. Let n1 and r1 be the results of performing the maximized rounding of x to f fraction digits.
    var _a = findN1R1(x, f, roundingIncrement), n1 = _a.n1, r1 = _a.r1;
    // 3. Let n2 and r2 be the results of performing the minimized rounding of x to f fraction digits.
    var _b = findN2R2(x, f, roundingIncrement), n2 = _b.n2, r2 = _b.r2;
    // 4. Let r be ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode).
    var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
    var n, xFinal;
    var m;
    // 5. If r is equal to r1, then
    if (r.eq(r1)) {
        // a. Let n be n1.
        n = n1;
        // b. Let xFinal be r1.
        xFinal = r1;
    }
    else {
        // 6. Else,
        // a. Let n be n2.
        n = n2;
        // b. Let xFinal be r2.
        xFinal = r2;
    }
    // 7. If n is 0, let m be "0".
    if (n.isZero()) {
        m = '0';
    }
    else {
        // 8. Else, let m be the String representation of n.
        m = n.toString();
    }
    var int;
    // 9. If f is not 0, then
    if (f !== 0) {
        // a. Let k be the length of m.
        var k = m.length;
        // b. If k < f, then
        if (k <= f) {
            // i. Let z be the String value consisting of f + 1 - k occurrences of the character "0".
            var z = repeat('0', f - k + 1);
            // ii. Set m to the string-concatenation of z and m.
            m = z + m;
            // iii. Set k to f + 1.
            k = f + 1;
        }
        // c. Let a be the substring of m from 0 to k - f.
        var a = m.slice(0, k - f);
        // d. Let b be the substring of m from k - f to k.
        var b = m.slice(m.length - f);
        // e. Set m to the string-concatenation of a, ".", and b.
        m = a + '.' + b;
        // f. Let int be the length of a.
        int = a.length;
    }
    else {
        // 10. Else, let int be the length of m.
        int = m.length;
    }
    // 11. Let cut be maxFraction - minFraction.
    var cut = maxFraction - minFraction;
    // 12. Repeat, while cut > 0 and the last character of m is "0",
    while (cut > 0 && m[m.length - 1] === '0') {
        // a. Remove the last character from m.
        m = m.slice(0, m.length - 1);
        // b. Decrease cut by 1.
        cut--;
    }
    // 13. If the last character of m is ".", then
    if (m[m.length - 1] === '\u002e') {
        // a. Remove the last character from m.
        m = m.slice(0, m.length - 1);
    }
    // 14. Return the Record { [[FormattedString]]: m, [[RoundedNumber]]: xFinal, [[IntegerDigitsCount]]: int, [[RoundingMagnitude]]: -f }.
    return {
        formattedString: m,
        roundedNumber: xFinal,
        integerDigitsCount: int,
        roundingMagnitude: -f,
    };
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js




//IMPL: Helper function to find n1, e1, and r1
function findN1E1R1(x, p) {
    var maxN1 = decimal_js_decimal.pow(10, p);
    var minN1 = decimal_js_decimal.pow(10, p - 1);
    var maxE1 = x.div(minN1).log(10).plus(p).minus(1).ceil();
    var currentE1 = maxE1;
    while (true) {
        var currentN1 = x.div(decimal_js_decimal.pow(10, currentE1.minus(p).plus(1))).floor();
        if (currentN1.lessThan(maxN1) && currentN1.greaterThanOrEqualTo(minN1)) {
            var currentR1 = currentN1.times(decimal_js_decimal.pow(10, currentE1.minus(p).plus(1)));
            if (currentR1.lessThanOrEqualTo(x)) {
                return {
                    n1: currentN1,
                    e1: currentE1,
                    r1: currentR1,
                };
            }
        }
        currentE1 = currentE1.minus(1);
    }
}
//IMPL: Helper function to find n2, e2, and r2
function findN2E2R2(x, p) {
    var maxN2 = decimal_js_decimal.pow(10, p);
    var minN2 = decimal_js_decimal.pow(10, p - 1);
    var minE2 = x.div(maxN2).log(10).plus(p).minus(1).floor();
    var currentE2 = minE2;
    while (true) {
        var currentN2 = x.div(decimal_js_decimal.pow(10, currentE2.minus(p).plus(1))).ceil();
        if (currentN2.lessThan(maxN2) && currentN2.greaterThanOrEqualTo(minN2)) {
            var currentR2 = currentN2.times(decimal_js_decimal.pow(10, currentE2.minus(p).plus(1)));
            if (currentR2.greaterThanOrEqualTo(x)) {
                return {
                    n2: currentN2,
                    e2: currentE2,
                    r2: currentR2,
                };
            }
        }
        currentE2 = currentE2.plus(1);
    }
}
/**
 * https://tc39.es/ecma402/#sec-torawprecision
 * @param x a finite non-negative Number or BigInt
 * @param minPrecision an integer between 1 and 21
 * @param maxPrecision an integer between 1 and 21
 */
function ToRawPrecision(x, minPrecision, maxPrecision, unsignedRoundingMode) {
    // 1. Let p be maxPrecision.
    var p = maxPrecision;
    var m;
    var e;
    var xFinal;
    // 2. If x = 0, then
    if (x.isZero()) {
        // a. Let m be the String value consisting of p occurrences of the character "0".
        m = repeat('0', p);
        // b. Let e be 0.
        e = 0;
        // c. Let xFinal be 0.
        xFinal = ZERO;
    }
    else {
        // 3. Else,
        // a. Let {n1, e1, r1} be the result of findN1E1R1(x, p).
        var _a = findN1E1R1(x, p), n1 = _a.n1, e1 = _a.e1, r1 = _a.r1;
        // b. Let {n2, e2, r2} be the result of findN2E2R2(x, p).
        var _b = findN2E2R2(x, p), n2 = _b.n2, e2 = _b.e2, r2 = _b.r2;
        // c. Let r be ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode).
        var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
        var n 
        // d. If r = r1, then
        = void 0;
        // d. If r = r1, then
        if (r.eq(r1)) {
            // i. Let n be n1.
            n = n1;
            // ii. Let e be e1.
            e = e1.toNumber();
            // iii. Let xFinal be r1.
            xFinal = r1;
        }
        else {
            // e. Else,
            // i. Let n be n2.
            n = n2;
            // ii. Let e be e2.
            e = e2.toNumber();
            // iii. Let xFinal be r2.
            xFinal = r2;
        }
        // f. Let m be the String representation of n.
        m = n.toString();
    }
    var int;
    // 4. If e ≥ p - 1, then
    if (e >= p - 1) {
        // a. Let m be the string-concatenation of m and p - 1 - e occurrences of the character "0".
        m = m + repeat('0', e - p + 1);
        // b. Let int be e + 1.
        int = e + 1;
    }
    else if (e >= 0) {
        // 5. Else if e ≥ 0, then
        // a. Let m be the string-concatenation of the first e + 1 characters of m, ".", and the remaining p - (e + 1) characters of m.
        m = m.slice(0, e + 1) + '.' + m.slice(m.length - (p - (e + 1)));
        // b. Let int be e + 1.
        int = e + 1;
    }
    else {
        // 6. Else,
        // a. Assert: e < 0.
        invariant(e < 0, 'e should be less than 0');
        // b. Let m be the string-concatenation of "0.", -e - 1 occurrences of the character "0", and m.
        m = '0.' + repeat('0', -e - 1) + m;
        // c. Let int be 1.
        int = 1;
    }
    // 7. If m contains ".", and maxPrecision > minPrecision, then
    if (m.includes('.') && maxPrecision > minPrecision) {
        // a. Let cut be maxPrecision - minPrecision.
        var cut = maxPrecision - minPrecision;
        // b. Repeat, while cut > 0 and the last character of m is "0",
        while (cut > 0 && m[m.length - 1] === '0') {
            // i. Remove the last character from m.
            m = m.slice(0, m.length - 1);
            // ii. Decrease cut by 1.
            cut--;
        }
        // c. If the last character of m is ".", then
        if (m[m.length - 1] === '.') {
            // i. Remove the last character from m.
            m = m.slice(0, m.length - 1);
        }
    }
    // 8. Return the Record { [[FormattedString]]: m, [[RoundedNumber]]: xFinal, [[IntegerDigitsCount]]: int, [[RoundingMagnitude]]: e }.
    return {
        formattedString: m,
        roundedNumber: xFinal,
        integerDigitsCount: int,
        roundingMagnitude: e,
    };
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js





/**
 * https://tc39.es/ecma402/#sec-formatnumberstring
 */
function FormatNumericToString(intlObject, _x) {
    var x = _x;
    var sign;
    // -0
    if (x.isZero() && x.isNegative()) {
        sign = 'negative';
        x = ZERO;
    }
    else {
        invariant(x.isFinite(), 'NumberFormatDigitInternalSlots value is not finite');
        if (x.lessThan(0)) {
            sign = 'negative';
        }
        else {
            sign = 'positive';
        }
        if (sign === 'negative') {
            x = x.negated();
        }
    }
    var result;
    var roundingType = intlObject.roundingType;
    var unsignedRoundingMode = GetUnsignedRoundingMode(intlObject.roundingMode, sign === 'negative');
    switch (roundingType) {
        case 'significantDigits':
            result = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
            break;
        case 'fractionDigits':
            result = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
            break;
        default:
            var sResult = ToRawPrecision(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
            var fResult = ToRawFixed(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
            if (intlObject.roundingType === 'morePrecision') {
                if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
                    result = sResult;
                }
                else {
                    result = fResult;
                }
            }
            else {
                invariant(intlObject.roundingType === 'lessPrecision', 'Invalid roundingType');
                if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
                    result = fResult;
                }
                else {
                    result = sResult;
                }
            }
            break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    if (intlObject.trailingZeroDisplay === 'stripIfInteger' && x.isInteger()) {
        var i = string.indexOf('.');
        if (i > -1) {
            string = string.slice(0, i);
        }
    }
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
        var forwardZeros = repeat('0', minInteger - int);
        string = forwardZeros + string;
    }
    if (sign === 'negative') {
        if (x.isZero()) {
            x = NEGATIVE_ZERO;
        }
        else {
            x = x.negated();
        }
    }
    return { roundedNumber: x, formattedString: string };
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js



/**
 * The abstract operation ComputeExponent computes an exponent (power of ten) by which to scale x
 * according to the number formatting settings. It handles cases such as 999 rounding up to 1000,
 * requiring a different exponent.
 *
 * NOT IN SPEC: it returns [exponent, magnitude].
 */
function ComputeExponent(internalSlots, x) {
    if (x.isZero()) {
        return [0, 0];
    }
    if (x.isNegative()) {
        x = x.negated();
    }
    var magnitude = x.log(10).floor();
    var exponent = ComputeExponentForMagnitude(internalSlots, magnitude);
    // Preserve more precision by doing multiplication when exponent is negative.
    x = x.times(decimal_js_decimal.pow(10, -exponent));
    var formatNumberResult = FormatNumericToString(internalSlots, x);
    if (formatNumberResult.roundedNumber.isZero()) {
        return [exponent, magnitude.toNumber()];
    }
    var newMagnitude = formatNumberResult.roundedNumber.log(10).floor();
    if (newMagnitude.eq(magnitude.minus(exponent))) {
        return [exponent, magnitude.toNumber()];
    }
    return [
        ComputeExponentForMagnitude(internalSlots, magnitude.plus(1)),
        magnitude.plus(1).toNumber(),
    ];
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js

/**
 * https://tc39.es/ecma402/#sec-currencydigits
 */
function CurrencyDigits(c, _a) {
    var currencyDigitsData = _a.currencyDigitsData;
    return HasOwnProperty(currencyDigitsData, c)
        ? currencyDigitsData[c]
        : 2;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js
// @generated from regex-gen.ts
var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js
var digitMapping = {
    "adlm": [
        "𞥐",
        "𞥑",
        "𞥒",
        "𞥓",
        "𞥔",
        "𞥕",
        "𞥖",
        "𞥗",
        "𞥘",
        "𞥙"
    ],
    "ahom": [
        "𑜰",
        "𑜱",
        "𑜲",
        "𑜳",
        "𑜴",
        "𑜵",
        "𑜶",
        "𑜷",
        "𑜸",
        "𑜹"
    ],
    "arab": [
        "٠",
        "١",
        "٢",
        "٣",
        "٤",
        "٥",
        "٦",
        "٧",
        "٨",
        "٩"
    ],
    "arabext": [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ],
    "bali": [
        "᭐",
        "᭑",
        "᭒",
        "᭓",
        "᭔",
        "᭕",
        "᭖",
        "᭗",
        "᭘",
        "᭙"
    ],
    "beng": [
        "০",
        "১",
        "২",
        "৩",
        "৪",
        "৫",
        "৬",
        "৭",
        "৮",
        "৯"
    ],
    "bhks": [
        "𑱐",
        "𑱑",
        "𑱒",
        "𑱓",
        "𑱔",
        "𑱕",
        "𑱖",
        "𑱗",
        "𑱘",
        "𑱙"
    ],
    "brah": [
        "𑁦",
        "𑁧",
        "𑁨",
        "𑁩",
        "𑁪",
        "𑁫",
        "𑁬",
        "𑁭",
        "𑁮",
        "𑁯"
    ],
    "cakm": [
        "𑄶",
        "𑄷",
        "𑄸",
        "𑄹",
        "𑄺",
        "𑄻",
        "𑄼",
        "𑄽",
        "𑄾",
        "𑄿"
    ],
    "cham": [
        "꩐",
        "꩑",
        "꩒",
        "꩓",
        "꩔",
        "꩕",
        "꩖",
        "꩗",
        "꩘",
        "꩙"
    ],
    "deva": [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
    ],
    "diak": [
        "𑥐",
        "𑥑",
        "𑥒",
        "𑥓",
        "𑥔",
        "𑥕",
        "𑥖",
        "𑥗",
        "𑥘",
        "𑥙"
    ],
    "fullwide": [
        "０",
        "１",
        "２",
        "３",
        "４",
        "５",
        "６",
        "７",
        "８",
        "９"
    ],
    "gong": [
        "𑶠",
        "𑶡",
        "𑶢",
        "𑶣",
        "𑶤",
        "𑶥",
        "𑶦",
        "𑶧",
        "𑶨",
        "𑶩"
    ],
    "gonm": [
        "𑵐",
        "𑵑",
        "𑵒",
        "𑵓",
        "𑵔",
        "𑵕",
        "𑵖",
        "𑵗",
        "𑵘",
        "𑵙"
    ],
    "gujr": [
        "૦",
        "૧",
        "૨",
        "૩",
        "૪",
        "૫",
        "૬",
        "૭",
        "૮",
        "૯"
    ],
    "guru": [
        "੦",
        "੧",
        "੨",
        "੩",
        "੪",
        "੫",
        "੬",
        "੭",
        "੮",
        "੯"
    ],
    "hanidec": [
        "〇",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九"
    ],
    "hmng": [
        "𖭐",
        "𖭑",
        "𖭒",
        "𖭓",
        "𖭔",
        "𖭕",
        "𖭖",
        "𖭗",
        "𖭘",
        "𖭙"
    ],
    "hmnp": [
        "𞅀",
        "𞅁",
        "𞅂",
        "𞅃",
        "𞅄",
        "𞅅",
        "𞅆",
        "𞅇",
        "𞅈",
        "𞅉"
    ],
    "java": [
        "꧐",
        "꧑",
        "꧒",
        "꧓",
        "꧔",
        "꧕",
        "꧖",
        "꧗",
        "꧘",
        "꧙"
    ],
    "kali": [
        "꤀",
        "꤁",
        "꤂",
        "꤃",
        "꤄",
        "꤅",
        "꤆",
        "꤇",
        "꤈",
        "꤉"
    ],
    "khmr": [
        "០",
        "១",
        "២",
        "៣",
        "៤",
        "៥",
        "៦",
        "៧",
        "៨",
        "៩"
    ],
    "knda": [
        "೦",
        "೧",
        "೨",
        "೩",
        "೪",
        "೫",
        "೬",
        "೭",
        "೮",
        "೯"
    ],
    "lana": [
        "᪀",
        "᪁",
        "᪂",
        "᪃",
        "᪄",
        "᪅",
        "᪆",
        "᪇",
        "᪈",
        "᪉"
    ],
    "lanatham": [
        "᪐",
        "᪑",
        "᪒",
        "᪓",
        "᪔",
        "᪕",
        "᪖",
        "᪗",
        "᪘",
        "᪙"
    ],
    "laoo": [
        "໐",
        "໑",
        "໒",
        "໓",
        "໔",
        "໕",
        "໖",
        "໗",
        "໘",
        "໙"
    ],
    "lepc": [
        "᪐",
        "᪑",
        "᪒",
        "᪓",
        "᪔",
        "᪕",
        "᪖",
        "᪗",
        "᪘",
        "᪙"
    ],
    "limb": [
        "᥆",
        "᥇",
        "᥈",
        "᥉",
        "᥊",
        "᥋",
        "᥌",
        "᥍",
        "᥎",
        "᥏"
    ],
    "mathbold": [
        "𝟎",
        "𝟏",
        "𝟐",
        "𝟑",
        "𝟒",
        "𝟓",
        "𝟔",
        "𝟕",
        "𝟖",
        "𝟗"
    ],
    "mathdbl": [
        "𝟘",
        "𝟙",
        "𝟚",
        "𝟛",
        "𝟜",
        "𝟝",
        "𝟞",
        "𝟟",
        "𝟠",
        "𝟡"
    ],
    "mathmono": [
        "𝟶",
        "𝟷",
        "𝟸",
        "𝟹",
        "𝟺",
        "𝟻",
        "𝟼",
        "𝟽",
        "𝟾",
        "𝟿"
    ],
    "mathsanb": [
        "𝟬",
        "𝟭",
        "𝟮",
        "𝟯",
        "𝟰",
        "𝟱",
        "𝟲",
        "𝟳",
        "𝟴",
        "𝟵"
    ],
    "mathsans": [
        "𝟢",
        "𝟣",
        "𝟤",
        "𝟥",
        "𝟦",
        "𝟧",
        "𝟨",
        "𝟩",
        "𝟪",
        "𝟫"
    ],
    "mlym": [
        "൦",
        "൧",
        "൨",
        "൩",
        "൪",
        "൫",
        "൬",
        "൭",
        "൮",
        "൯"
    ],
    "modi": [
        "𑙐",
        "𑙑",
        "𑙒",
        "𑙓",
        "𑙔",
        "𑙕",
        "𑙖",
        "𑙗",
        "𑙘",
        "𑙙"
    ],
    "mong": [
        "᠐",
        "᠑",
        "᠒",
        "᠓",
        "᠔",
        "᠕",
        "᠖",
        "᠗",
        "᠘",
        "᠙"
    ],
    "mroo": [
        "𖩠",
        "𖩡",
        "𖩢",
        "𖩣",
        "𖩤",
        "𖩥",
        "𖩦",
        "𖩧",
        "𖩨",
        "𖩩"
    ],
    "mtei": [
        "꯰",
        "꯱",
        "꯲",
        "꯳",
        "꯴",
        "꯵",
        "꯶",
        "꯷",
        "꯸",
        "꯹"
    ],
    "mymr": [
        "၀",
        "၁",
        "၂",
        "၃",
        "၄",
        "၅",
        "၆",
        "၇",
        "၈",
        "၉"
    ],
    "mymrshan": [
        "႐",
        "႑",
        "႒",
        "႓",
        "႔",
        "႕",
        "႖",
        "႗",
        "႘",
        "႙"
    ],
    "mymrtlng": [
        "꧰",
        "꧱",
        "꧲",
        "꧳",
        "꧴",
        "꧵",
        "꧶",
        "꧷",
        "꧸",
        "꧹"
    ],
    "newa": [
        "𑑐",
        "𑑑",
        "𑑒",
        "𑑓",
        "𑑔",
        "𑑕",
        "𑑖",
        "𑑗",
        "𑑘",
        "𑑙"
    ],
    "nkoo": [
        "߀",
        "߁",
        "߂",
        "߃",
        "߄",
        "߅",
        "߆",
        "߇",
        "߈",
        "߉"
    ],
    "olck": [
        "᱐",
        "᱑",
        "᱒",
        "᱓",
        "᱔",
        "᱕",
        "᱖",
        "᱗",
        "᱘",
        "᱙"
    ],
    "orya": [
        "୦",
        "୧",
        "୨",
        "୩",
        "୪",
        "୫",
        "୬",
        "୭",
        "୮",
        "୯"
    ],
    "osma": [
        "𐒠",
        "𐒡",
        "𐒢",
        "𐒣",
        "𐒤",
        "𐒥",
        "𐒦",
        "𐒧",
        "𐒨",
        "𐒩"
    ],
    "rohg": [
        "𐴰",
        "𐴱",
        "𐴲",
        "𐴳",
        "𐴴",
        "𐴵",
        "𐴶",
        "𐴷",
        "𐴸",
        "𐴹"
    ],
    "saur": [
        "꣐",
        "꣑",
        "꣒",
        "꣓",
        "꣔",
        "꣕",
        "꣖",
        "꣗",
        "꣘",
        "꣙"
    ],
    "segment": [
        "🯰",
        "🯱",
        "🯲",
        "🯳",
        "🯴",
        "🯵",
        "🯶",
        "🯷",
        "🯸",
        "🯹"
    ],
    "shrd": [
        "𑇐",
        "𑇑",
        "𑇒",
        "𑇓",
        "𑇔",
        "𑇕",
        "𑇖",
        "𑇗",
        "𑇘",
        "𑇙"
    ],
    "sind": [
        "𑋰",
        "𑋱",
        "𑋲",
        "𑋳",
        "𑋴",
        "𑋵",
        "𑋶",
        "𑋷",
        "𑋸",
        "𑋹"
    ],
    "sinh": [
        "෦",
        "෧",
        "෨",
        "෩",
        "෪",
        "෫",
        "෬",
        "෭",
        "෮",
        "෯"
    ],
    "sora": [
        "𑃰",
        "𑃱",
        "𑃲",
        "𑃳",
        "𑃴",
        "𑃵",
        "𑃶",
        "𑃷",
        "𑃸",
        "𑃹"
    ],
    "sund": [
        "᮰",
        "᮱",
        "᮲",
        "᮳",
        "᮴",
        "᮵",
        "᮶",
        "᮷",
        "᮸",
        "᮹"
    ],
    "takr": [
        "𑛀",
        "𑛁",
        "𑛂",
        "𑛃",
        "𑛄",
        "𑛅",
        "𑛆",
        "𑛇",
        "𑛈",
        "𑛉"
    ],
    "talu": [
        "᧐",
        "᧑",
        "᧒",
        "᧓",
        "᧔",
        "᧕",
        "᧖",
        "᧗",
        "᧘",
        "᧙"
    ],
    "tamldec": [
        "௦",
        "௧",
        "௨",
        "௩",
        "௪",
        "௫",
        "௬",
        "௭",
        "௮",
        "௯"
    ],
    "telu": [
        "౦",
        "౧",
        "౨",
        "౩",
        "౪",
        "౫",
        "౬",
        "౭",
        "౮",
        "౯"
    ],
    "thai": [
        "๐",
        "๑",
        "๒",
        "๓",
        "๔",
        "๕",
        "๖",
        "๗",
        "๘",
        "๙"
    ],
    "tibt": [
        "༠",
        "༡",
        "༢",
        "༣",
        "༤",
        "༥",
        "༦",
        "༧",
        "༨",
        "༩"
    ],
    "tirh": [
        "𑓐",
        "𑓑",
        "𑓒",
        "𑓓",
        "𑓔",
        "𑓕",
        "𑓖",
        "𑓗",
        "𑓘",
        "𑓙"
    ],
    "vaii": [
        "ᘠ",
        "ᘡ",
        "ᘢ",
        "ᘣ",
        "ᘤ",
        "ᘥ",
        "ᘦ",
        "ᘧ",
        "ᘨ",
        "ᘩ"
    ],
    "wara": [
        "𑣠",
        "𑣡",
        "𑣢",
        "𑣣",
        "𑣤",
        "𑣥",
        "𑣦",
        "𑣧",
        "𑣨",
        "𑣩"
    ],
    "wcho": [
        "𞋰",
        "𞋱",
        "𞋲",
        "𞋳",
        "𞋴",
        "𞋵",
        "𞋶",
        "𞋷",
        "𞋸",
        "𞋹"
    ]
};

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js





// This is from: unicode-12.1.0/General_Category/Symbol/regex.js
// IE11 does not support unicode flag, otherwise this is just /\p{S}/u.
// /^\p{S}/u
var CARET_S_UNICODE_REGEX = new RegExp("^".concat(S_UNICODE_REGEX.source));
// /\p{S}$/u
var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(S_UNICODE_REGEX.source, "$"));
var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
function formatToParts(numberResult, data, pl, options) {
    var _a;
    var sign = numberResult.sign, exponent = numberResult.exponent, magnitude = numberResult.magnitude;
    var notation = options.notation, style = options.style, numberingSystem = options.numberingSystem;
    var defaultNumberingSystem = data.numbers.nu[0];
    // #region Part 1: partition and interpolate the CLDR number pattern.
    // ----------------------------------------------------------
    var compactNumberPattern = null;
    if (notation === 'compact' && magnitude) {
        compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
    }
    // This is used multiple times
    var nonNameCurrencyPart;
    if (style === 'currency' && options.currencyDisplay !== 'name') {
        var byCurrencyDisplay = data.currencies[options.currency];
        if (byCurrencyDisplay) {
            switch (options.currencyDisplay) {
                case 'code':
                    nonNameCurrencyPart = options.currency;
                    break;
                case 'symbol':
                    nonNameCurrencyPart = byCurrencyDisplay.symbol;
                    break;
                default:
                    nonNameCurrencyPart = byCurrencyDisplay.narrow;
                    break;
            }
        }
        else {
            // Fallback for unknown currency
            nonNameCurrencyPart = options.currency;
        }
    }
    var numberPattern;
    if (!compactNumberPattern) {
        // Note: if the style is unit, or is currency and the currency display is name,
        // its unit parts will be interpolated in part 2. So here we can fallback to decimal.
        if (style === 'decimal' ||
            style === 'unit' ||
            (style === 'currency' && options.currencyDisplay === 'name')) {
            // Shortcut for decimal
            var decimalData = data.numbers.decimal[numberingSystem] ||
                data.numbers.decimal[defaultNumberingSystem];
            numberPattern = getPatternForSign(decimalData.standard, sign);
        }
        else if (style === 'currency') {
            var currencyData = data.numbers.currency[numberingSystem] ||
                data.numbers.currency[defaultNumberingSystem];
            // We replace number pattern part with `0` for easier postprocessing.
            numberPattern = getPatternForSign(currencyData[options.currencySign], sign);
        }
        else {
            // percent
            var percentPattern = data.numbers.percent[numberingSystem] ||
                data.numbers.percent[defaultNumberingSystem];
            numberPattern = getPatternForSign(percentPattern, sign);
        }
    }
    else {
        numberPattern = compactNumberPattern;
    }
    // Extract the decimal number pattern string. It looks like "#,##0,00", which will later be
    // used to infer decimal group sizes.
    var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
    // Now we start to substitute patterns
    // 1. replace strings like `0` and `#,##0.00` with `{0}`
    // 2. unquote characters (invariant: the quoted characters does not contain the special tokens)
    numberPattern = numberPattern
        .replace(CLDR_NUMBER_PATTERN, '{0}')
        .replace(/'(.)'/g, '$1');
    // Handle currency spacing (both compact and non-compact).
    if (style === 'currency' && options.currencyDisplay !== 'name') {
        var currencyData = data.numbers.currency[numberingSystem] ||
            data.numbers.currency[defaultNumberingSystem];
        // See `currencySpacing` substitution rule in TR-35.
        // Here we always assume the currencyMatch is "[:^S:]" and surroundingMatch is "[:digit:]".
        //
        // Example 1: for pattern "#,##0.00¤" with symbol "US$", we replace "¤" with the symbol,
        // but insert an extra non-break space before the symbol, because "[:^S:]" matches "U" in
        // "US$" and "[:digit:]" matches the latn numbering system digits.
        //
        // Example 2: for pattern "¤#,##0.00" with symbol "US$", there is no spacing between symbol
        // and number, because `$` does not match "[:^S:]".
        //
        // Implementation note: here we do the best effort to infer the insertion.
        // We also assume that `beforeInsertBetween` and `afterInsertBetween` will never be `;`.
        var afterCurrency = currencyData.currencySpacing.afterInsertBetween;
        if (afterCurrency && !S_DOLLAR_UNICODE_REGEX.test(nonNameCurrencyPart)) {
            numberPattern = numberPattern.replace('¤{0}', "\u00A4".concat(afterCurrency, "{0}"));
        }
        var beforeCurrency = currencyData.currencySpacing.beforeInsertBetween;
        if (beforeCurrency && !CARET_S_UNICODE_REGEX.test(nonNameCurrencyPart)) {
            numberPattern = numberPattern.replace('{0}¤', "{0}".concat(beforeCurrency, "\u00A4"));
        }
    }
    // The following tokens are special: `{0}`, `¤`, `%`, `-`, `+`, `{c:...}.
    var numberPatternParts = numberPattern.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
    var numberParts = [];
    var symbols = data.numbers.symbols[numberingSystem] ||
        data.numbers.symbols[defaultNumberingSystem];
    for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
        var part = numberPatternParts_1[_i];
        if (!part) {
            continue;
        }
        switch (part) {
            case '{0}': {
                // We only need to handle scientific and engineering notation here.
                numberParts.push.apply(numberParts, partitionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, 
                // If compact number pattern exists, do not insert group separators.
                !compactNumberPattern && ((_a = options.useGrouping) !== null && _a !== void 0 ? _a : true), decimalNumberPattern, style, options.roundingIncrement, GetUnsignedRoundingMode(options.roundingMode, sign === -1)));
                break;
            }
            case '-':
                numberParts.push({ type: 'minusSign', value: symbols.minusSign });
                break;
            case '+':
                numberParts.push({ type: 'plusSign', value: symbols.plusSign });
                break;
            case '%':
                numberParts.push({ type: 'percentSign', value: symbols.percentSign });
                break;
            case '¤':
                // Computed above when handling currency spacing.
                numberParts.push({ type: 'currency', value: nonNameCurrencyPart });
                break;
            default:
                if (/^\{c:/.test(part)) {
                    numberParts.push({
                        type: 'compact',
                        value: part.substring(3, part.length - 1),
                    });
                }
                else {
                    // literal
                    numberParts.push({ type: 'literal', value: part });
                }
                break;
        }
    }
    // #endregion
    // #region Part 2: interpolate unit pattern if necessary.
    // ----------------------------------------------
    switch (style) {
        case 'currency': {
            // `currencyDisplay: 'name'` has similar pattern handling as units.
            if (options.currencyDisplay === 'name') {
                var unitPattern = (data.numbers.currency[numberingSystem] ||
                    data.numbers.currency[defaultNumberingSystem]).unitPattern;
                // Select plural
                var unitName = void 0;
                var currencyNameData = data.currencies[options.currency];
                if (currencyNameData) {
                    unitName = selectPlural(pl, numberResult.roundedNumber
                        .times(decimal_js_decimal.pow(10, exponent))
                        .toNumber(), currencyNameData.displayName);
                }
                else {
                    // Fallback for unknown currency
                    unitName = options.currency;
                }
                // Do {0} and {1} substitution
                var unitPatternParts = unitPattern.split(/(\{[01]\})/g);
                var result = [];
                for (var _b = 0, unitPatternParts_1 = unitPatternParts; _b < unitPatternParts_1.length; _b++) {
                    var part = unitPatternParts_1[_b];
                    switch (part) {
                        case '{0}':
                            result.push.apply(result, numberParts);
                            break;
                        case '{1}':
                            result.push({ type: 'currency', value: unitName });
                            break;
                        default:
                            if (part) {
                                result.push({ type: 'literal', value: part });
                            }
                            break;
                    }
                }
                return result;
            }
            else {
                return numberParts;
            }
        }
        case 'unit': {
            var unit = options.unit, unitDisplay = options.unitDisplay;
            var unitData = data.units.simple[unit];
            var unitPattern = void 0;
            if (unitData) {
                // Simple unit pattern
                unitPattern = selectPlural(pl, numberResult.roundedNumber
                    .times(decimal_js_decimal.pow(10, exponent))
                    .toNumber(), data.units.simple[unit][unitDisplay]);
            }
            else {
                // See: http://unicode.org/reports/tr35/tr35-general.html#perUnitPatterns
                // If cannot find unit in the simple pattern, it must be "per" compound pattern.
                // Implementation note: we are not following TR-35 here because we need to format to parts!
                var _c = unit.split('-per-'), numeratorUnit = _c[0], denominatorUnit = _c[1];
                unitData = data.units.simple[numeratorUnit];
                var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber
                    .times(decimal_js_decimal.pow(10, exponent))
                    .toNumber(), data.units.simple[numeratorUnit][unitDisplay]);
                var perUnitPattern = data.units.simple[denominatorUnit].perUnit[unitDisplay];
                if (perUnitPattern) {
                    // perUnitPattern exists, combine it with numeratorUnitPattern
                    unitPattern = perUnitPattern.replace('{0}', numeratorUnitPattern);
                }
                else {
                    // get compoundUnit pattern (e.g. "{0} per {1}"), repalce {0} with numerator pattern and {1} with
                    // the denominator pattern in singular form.
                    var perPattern = data.units.compound.per[unitDisplay];
                    var denominatorPattern = selectPlural(pl, 1, data.units.simple[denominatorUnit][unitDisplay]);
                    unitPattern = unitPattern = perPattern
                        .replace('{0}', numeratorUnitPattern)
                        .replace('{1}', denominatorPattern.replace('{0}', ''));
                }
            }
            var result = [];
            // We need spacing around "{0}" because they are not treated as "unit" parts, but "literal".
            for (var _d = 0, _e = unitPattern.split(/(\s*\{0\}\s*)/); _d < _e.length; _d++) {
                var part = _e[_d];
                var interpolateMatch = /^(\s*)\{0\}(\s*)$/.exec(part);
                if (interpolateMatch) {
                    // Space before "{0}"
                    if (interpolateMatch[1]) {
                        result.push({ type: 'literal', value: interpolateMatch[1] });
                    }
                    // "{0}" itself
                    result.push.apply(result, numberParts);
                    // Space after "{0}"
                    if (interpolateMatch[2]) {
                        result.push({ type: 'literal', value: interpolateMatch[2] });
                    }
                }
                else if (part) {
                    result.push({ type: 'unit', value: part });
                }
            }
            return result;
        }
        default:
            return numberParts;
    }
    // #endregion
}
// A subset of https://tc39.es/ecma402/#sec-partitionnotationsubpattern
// Plus the exponent parts handling.
function partitionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping, 
/**
 * This is the decimal number pattern without signs or symbols.
 * It is used to infer the group size when `useGrouping` is true.
 *
 * A typical value looks like "#,##0.00" (primary group size is 3).
 * Some locales like Hindi has secondary group size of 2 (e.g. "#,##,##0.00").
 */
decimalNumberPattern, style, roundingIncrement, unsignedRoundingMode) {
    var result = [];
    // eslint-disable-next-line prefer-const
    var n = numberResult.formattedString, x = numberResult.roundedNumber;
    if (x.isNaN()) {
        return [{ type: 'nan', value: n }];
    }
    else if (!x.isFinite()) {
        return [{ type: 'infinity', value: n }];
    }
    var digitReplacementTable = digitMapping[numberingSystem];
    if (digitReplacementTable) {
        n = n.replace(/\d/g, function (digit) { return digitReplacementTable[+digit] || digit; });
    }
    // TODO: Else use an implementation dependent algorithm to map n to the appropriate
    // representation of n in the given numbering system.
    var decimalSepIndex = n.indexOf('.');
    var integer;
    var fraction;
    if (decimalSepIndex > 0) {
        integer = n.slice(0, decimalSepIndex);
        fraction = n.slice(decimalSepIndex + 1);
    }
    else {
        integer = n;
    }
    // #region Grouping integer digits
    // The weird compact and x >= 10000 check is to ensure consistency with Node.js and Chrome.
    // Note that `de` does not have compact form for thousands, but Node.js does not insert grouping separator
    // unless the rounded number is greater than 10000:
    //   NumberFormat('de', {notation: 'compact', compactDisplay: 'short'}).format(1234) //=> "1234"
    //   NumberFormat('de').format(1234) //=> "1.234"
    var shouldUseGrouping = false;
    if (useGrouping === 'always') {
        shouldUseGrouping = true;
    }
    else if (useGrouping === 'min2') {
        shouldUseGrouping = x.greaterThanOrEqualTo(10000);
    }
    else if (useGrouping === 'auto' || useGrouping) {
        shouldUseGrouping = notation !== 'compact' || x.greaterThanOrEqualTo(10000);
    }
    if (shouldUseGrouping) {
        // a. Let groupSepSymbol be the implementation-, locale-, and numbering system-dependent (ILND) String representing the grouping separator.
        // For currency we should use `currencyGroup` instead of generic `group`
        var groupSepSymbol = style === 'currency' && symbols.currencyGroup != null
            ? symbols.currencyGroup
            : symbols.group;
        var groups = [];
        // > There may be two different grouping sizes: The primary grouping size used for the least
        // > significant integer group, and the secondary grouping size used for more significant groups.
        // > If a pattern contains multiple grouping separators, the interval between the last one and the
        // > end of the integer defines the primary grouping size, and the interval between the last two
        // > defines the secondary grouping size. All others are ignored.
        var integerNumberPattern = decimalNumberPattern.split('.')[0];
        var patternGroups = integerNumberPattern.split(',');
        var primaryGroupingSize = 3;
        var secondaryGroupingSize = 3;
        if (patternGroups.length > 1) {
            primaryGroupingSize = patternGroups[patternGroups.length - 1].length;
        }
        if (patternGroups.length > 2) {
            secondaryGroupingSize = patternGroups[patternGroups.length - 2].length;
        }
        var i = integer.length - primaryGroupingSize;
        if (i > 0) {
            // Slice the least significant integer group
            groups.push(integer.slice(i, i + primaryGroupingSize));
            // Then iteratively push the more signicant groups
            // TODO: handle surrogate pairs in some numbering system digits
            for (i -= secondaryGroupingSize; i > 0; i -= secondaryGroupingSize) {
                groups.push(integer.slice(i, i + secondaryGroupingSize));
            }
            groups.push(integer.slice(0, i + secondaryGroupingSize));
        }
        else {
            groups.push(integer);
        }
        while (groups.length > 0) {
            var integerGroup = groups.pop();
            result.push({ type: 'integer', value: integerGroup });
            if (groups.length > 0) {
                result.push({ type: 'group', value: groupSepSymbol });
            }
        }
    }
    else {
        result.push({ type: 'integer', value: integer });
    }
    // #endregion
    if (fraction !== undefined) {
        var decimalSepSymbol = style === 'currency' && symbols.currencyDecimal != null
            ? symbols.currencyDecimal
            : symbols.decimal;
        result.push({ type: 'decimal', value: decimalSepSymbol }, { type: 'fraction', value: fraction });
    }
    if ((notation === 'scientific' || notation === 'engineering') &&
        x.isFinite()) {
        result.push({ type: 'exponentSeparator', value: symbols.exponential });
        if (exponent < 0) {
            result.push({ type: 'exponentMinusSign', value: symbols.minusSign });
            exponent = -exponent;
        }
        var exponentResult = ToRawFixed(new decimal_js_decimal(exponent), 0, 0, roundingIncrement, unsignedRoundingMode);
        result.push({
            type: 'exponentInteger',
            value: exponentResult.formattedString,
        });
    }
    return result;
}
function getPatternForSign(pattern, sign) {
    if (pattern.indexOf(';') < 0) {
        pattern = "".concat(pattern, ";-").concat(pattern);
    }
    var _a = pattern.split(';'), zeroPattern = _a[0], negativePattern = _a[1];
    switch (sign) {
        case 0:
            return zeroPattern;
        case -1:
            return negativePattern;
        default:
            return negativePattern.indexOf('-') >= 0
                ? negativePattern.replace(/-/g, '+')
                : "+".concat(zeroPattern);
    }
}
// Find the CLDR pattern for compact notation based on the magnitude of data and style.
//
// Example return value: "¤ {c:laki}000;¤{c:laki} -0" (`sw` locale):
// - Notice the `{c:...}` token that wraps the compact literal.
// - The consecutive zeros are normalized to single zero to match CLDR_NUMBER_PATTERN.
//
// Returning null means the compact display pattern cannot be found.
function getCompactDisplayPattern(numberResult, pl, data, style, compactDisplay, currencyDisplay, numberingSystem) {
    var _a;
    var roundedNumber = numberResult.roundedNumber, sign = numberResult.sign, magnitude = numberResult.magnitude;
    var magnitudeKey = String(Math.pow(10, magnitude));
    var defaultNumberingSystem = data.numbers.nu[0];
    var pattern;
    if (style === 'currency' && currencyDisplay !== 'name') {
        var byNumberingSystem = data.numbers.currency;
        var currencyData = byNumberingSystem[numberingSystem] ||
            byNumberingSystem[defaultNumberingSystem];
        // NOTE: compact notation ignores currencySign!
        var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
        if (!compactPluralRules) {
            return null;
        }
        pattern = selectPlural(pl, roundedNumber.toNumber(), compactPluralRules);
    }
    else {
        var byNumberingSystem = data.numbers.decimal;
        var byCompactDisplay = byNumberingSystem[numberingSystem] ||
            byNumberingSystem[defaultNumberingSystem];
        var compactPlaralRule = byCompactDisplay[compactDisplay][magnitudeKey];
        if (!compactPlaralRule) {
            return null;
        }
        pattern = selectPlural(pl, roundedNumber.toNumber(), compactPlaralRule);
    }
    // See https://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats
    // > If the value is precisely “0”, either explicit or defaulted, then the normal number format
    // > pattern for that sort of object is supplied.
    if (pattern === '0') {
        return null;
    }
    pattern = getPatternForSign(pattern, sign)
        // Extract compact literal from the pattern
        .replace(/([^\s;\-\+\d¤]+)/g, '{c:$1}')
        // We replace one or more zeros with a single zero so it matches `CLDR_NUMBER_PATTERN`.
        .replace(/0+/, '0');
    return pattern;
}
function selectPlural(pl, x, rules) {
    return rules[pl.select(x)] || rules.other;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatApproximately.js
/**
 * https://tc39.es/ecma402/#sec-formatapproximately
 */
function FormatApproximately(internalSlots, result) {
    var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
    var approximatelySign = symbols.approximatelySign;
    result.push({ type: 'approximatelySign', value: approximatelySign });
    return result;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js





/**
 * https://tc39.es/ecma402/#sec-partitionnumberpattern
 */
function PartitionNumberPattern(internalSlots, _x) {
    var _a;
    var x = _x;
    // IMPL: We need to record the magnitude of the number
    var magnitude = 0;
    // 2. Let dataLocaleData be internalSlots.[[dataLocaleData]].
    var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    // 3. Let symbols be dataLocaleData.[[numbers]].[[symbols]][internalSlots.[[numberingSystem]]].
    var symbols = dataLocaleData.numbers.symbols[numberingSystem] ||
        dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
    // 4. Let exponent be 0.
    var exponent = 0;
    // 5. Let n be ! ToString(x).
    var n;
    // 6. If x is NaN, then
    if (x.isNaN()) {
        // 6.a. Let n be symbols.[[nan]].
        n = symbols.nan;
    }
    else if (!x.isFinite()) {
        // 7. Else if x is a non-finite Number, then
        // 7.a. Let n be symbols.[[infinity]].
        n = symbols.infinity;
    }
    else {
        // 8. Else,
        if (!x.isZero()) {
            // 8.a. If x < 0, let x be -x.
            invariant(x.isFinite(), 'Input must be a mathematical value');
            // 8.b. If internalSlots.[[style]] is "percent", let x be 100 × x.
            if (internalSlots.style == 'percent') {
                x = x.times(100);
            }
            // 8.c. Let exponent be ComputeExponent(numberFormat, x).
            ;
            _a = ComputeExponent(internalSlots, x), exponent = _a[0], 
            // IMPL: We need to record the magnitude of the number
            magnitude = _a[1];
            // 8.d. Let x be x × 10^(-exponent).
            x = x.times(decimal_js_decimal.pow(10, -exponent));
        }
        // 8.e. Let formatNumberResult be FormatNumericToString(internalSlots, x).
        var formatNumberResult = FormatNumericToString(internalSlots, x);
        // 8.f. Let n be formatNumberResult.[[formattedString]].
        n = formatNumberResult.formattedString;
        // 8.g. Let x be formatNumberResult.[[roundedNumber]].
        x = formatNumberResult.roundedNumber;
    }
    // 9. Let sign be 0.
    var sign;
    // 10. If x is negative, then
    var signDisplay = internalSlots.signDisplay;
    switch (signDisplay) {
        case 'never':
            // 10.a. If internalSlots.[[signDisplay]] is "never", then
            // 10.a.i. Let sign be 0.
            sign = 0;
            break;
        case 'auto':
            // 10.b. Else if internalSlots.[[signDisplay]] is "auto", then
            if (x.isPositive() || x.isNaN()) {
                // 10.b.i. If x is positive or x is NaN, let sign be 0.
                sign = 0;
            }
            else {
                // 10.b.ii. Else, let sign be -1.
                sign = -1;
            }
            break;
        case 'always':
            // 10.c. Else if internalSlots.[[signDisplay]] is "always", then
            if (x.isPositive() || x.isNaN()) {
                // 10.c.i. If x is positive or x is NaN, let sign be 1.
                sign = 1;
            }
            else {
                // 10.c.ii. Else, let sign be -1.
                sign = -1;
            }
            break;
        case 'exceptZero':
            // 10.d. Else if internalSlots.[[signDisplay]] is "exceptZero", then
            if (x.isZero()) {
                // 10.d.i. If x is 0, let sign be 0.
                sign = 0;
            }
            else if (x.isNegative()) {
                // 10.d.ii. Else if x is negative, let sign be -1.
                sign = -1;
            }
            else {
                // 10.d.iii. Else, let sign be 1.
                sign = 1;
            }
            break;
        default:
            // 10.e. Else,
            invariant(signDisplay === 'negative', 'signDisplay must be "negative"');
            if (x.isNegative() && !x.isZero()) {
                // 10.e.i. If x is negative and x is not 0, let sign be -1.
                sign = -1;
            }
            else {
                // 10.e.ii. Else, let sign be 0.
                sign = 0;
            }
            break;
    }
    // 11. Return ? FormatNumberToParts(numberFormat, x, n, exponent, sign).
    return formatToParts({
        roundedNumber: x,
        formattedString: n,
        exponent: exponent,
        // IMPL: We're returning this for our implementation of formatToParts
        magnitude: magnitude,
        sign: sign,
    }, internalSlots.dataLocaleData, pl, internalSlots);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumeric.js

function FormatNumeric(internalSlots, x) {
    var parts = PartitionNumberPattern(internalSlots, x);
    return parts.map(function (p) { return p.value; }).join('');
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberRangePattern.js





/**
 * https://tc39.es/ecma402/#sec-partitionnumberrangepattern
 */
function PartitionNumberRangePattern(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    // 1. Assert: x and y are both mathematical values.
    invariant(!x.isNaN() && !y.isNaN(), 'Input must be a number', RangeError);
    var internalSlots = getInternalSlots(numberFormat);
    // 3. Let xResult be ? PartitionNumberPattern(numberFormat, x).
    var xResult = PartitionNumberPattern(internalSlots, x);
    // 4. Let yResult be ? PartitionNumberPattern(numberFormat, y).
    var yResult = PartitionNumberPattern(internalSlots, y);
    if (FormatNumeric(internalSlots, x) === FormatNumeric(internalSlots, y)) {
        var appxResult = FormatApproximately(internalSlots, xResult);
        appxResult.forEach(function (el) {
            el.source = 'shared';
        });
        return appxResult;
    }
    var result = [];
    xResult.forEach(function (el) {
        el.source = 'startRange';
        result.push(el);
    });
    // 9. Let symbols be internalSlots.[[dataLocaleData]].[[numbers]].[[symbols]][internalSlots.[[numberingSystem]]].
    var rangeSeparator = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem]
        .rangeSign;
    result.push({ type: 'literal', value: rangeSeparator, source: 'shared' });
    yResult.forEach(function (el) {
        el.source = 'endRange';
        result.push(el);
    });
    // 13. Return ? CollapseNumberRange(numberFormat, result).
    return CollapseNumberRange(numberFormat, result, { getInternalSlots: getInternalSlots });
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericRange.js

/**
 * https://tc39.es/ecma402/#sec-formatnumericrange
 */
function FormatNumericRange(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var parts = PartitionNumberRangePattern(numberFormat, x, y, {
        getInternalSlots: getInternalSlots,
    });
    return parts.map(function (part) { return part.value; }).join('');
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericRangeToParts.js

/**
 * https://tc39.es/ecma402/#sec-formatnumericrangetoparts
 */
function FormatNumericRangeToParts(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var parts = PartitionNumberRangePattern(numberFormat, x, y, {
        getInternalSlots: getInternalSlots,
    });
    return parts.map(function (part, index) { return ({
        type: part.type,
        value: part.value,
        source: part.source,
        result: index.toString(),
    }); });
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js


function FormatNumericToParts(nf, x, implDetails) {
    var parts = PartitionNumberPattern(implDetails.getInternalSlots(nf), x);
    var result = ArrayCreate(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        result.push({
            type: part.type,
            value: part.value,
        });
    }
    return result;
}

// EXTERNAL MODULE: ./node_modules/@formatjs/intl-localematcher/lib/index.js + 13 modules
var lib = __webpack_require__("./node_modules/@formatjs/intl-localematcher/lib/index.js");
;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js




//IMPL: Valid rounding increments as per implementation
var VALID_ROUNDING_INCREMENTS = new Set([
    1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000,
]);
/**
 * https://tc39.es/ecma402/#sec-setnfdigitoptions
 */
function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
    // 1. Let mnid be ? GetNumberOption(opts, "minimumIntegerDigits", 1, 21, 1).
    var mnid = GetNumberOption(opts, 'minimumIntegerDigits', 1, 21, 1);
    // 2. Let mnfd be opts.[[MinimumFractionDigits]].
    var mnfd = opts.minimumFractionDigits;
    // 3. Let mxfd be opts.[[MaximumFractionDigits]].
    var mxfd = opts.maximumFractionDigits;
    // 4. Let mnsd be opts.[[MinimumSignificantDigits]].
    var mnsd = opts.minimumSignificantDigits;
    // 5. Let mxsd be opts.[[MaximumSignificantDigits]].
    var mxsd = opts.maximumSignificantDigits;
    // 6. Set internalSlots.[[MinimumIntegerDigits]] to mnid.
    internalSlots.minimumIntegerDigits = mnid;
    // 7. Let roundingIncrement be ? GetNumberOption(opts, "roundingIncrement", 1, 5000, 1).
    var roundingIncrement = GetNumberOption(opts, 'roundingIncrement', 1, 5000, 1);
    // 8. If roundingIncrement is not an element of the list {1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000}, throw a RangeError exception.
    invariant(VALID_ROUNDING_INCREMENTS.has(roundingIncrement), "Invalid rounding increment value: ".concat(roundingIncrement, ".\nValid values are ").concat(Array.from(VALID_ROUNDING_INCREMENTS).join(', '), "."));
    // 9. Let roundingMode be ? GetOption(opts, "roundingMode", "string", « "ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven" », "halfExpand").
    var roundingMode = GetOption(opts, 'roundingMode', 'string', [
        'ceil',
        'floor',
        'expand',
        'trunc',
        'halfCeil',
        'halfFloor',
        'halfExpand',
        'halfTrunc',
        'halfEven',
    ], 'halfExpand');
    // 10. Let roundingPriority be ? GetOption(opts, "roundingPriority", "string", « "auto", "morePrecision", "lessPrecision" », "auto").
    var roundingPriority = GetOption(opts, 'roundingPriority', 'string', ['auto', 'morePrecision', 'lessPrecision'], 'auto');
    // 11. Let trailingZeroDisplay be ? GetOption(opts, "trailingZeroDisplay", "string", « "auto", "stripIfInteger" », "auto").
    var trailingZeroDisplay = GetOption(opts, 'trailingZeroDisplay', 'string', ['auto', 'stripIfInteger'], 'auto');
    // 12. If roundingIncrement is not 1, then
    if (roundingIncrement !== 1) {
        // 12.a. Set mxfdDefault to mnfdDefault.
        mxfdDefault = mnfdDefault;
    }
    // 13. Set internalSlots.[[RoundingIncrement]] to roundingIncrement.
    internalSlots.roundingIncrement = roundingIncrement;
    // 14. Set internalSlots.[[RoundingMode]] to roundingMode.
    internalSlots.roundingMode = roundingMode;
    // 15. Set internalSlots.[[TrailingZeroDisplay]] to trailingZeroDisplay.
    internalSlots.trailingZeroDisplay = trailingZeroDisplay;
    // 16. Let hasSd be true if mnsd is not undefined or mxsd is not undefined; otherwise, let hasSd be false.
    var hasSd = mnsd !== undefined || mxsd !== undefined;
    // 17. Let hasFd be true if mnfd is not undefined or mxfd is not undefined; otherwise, let hasFd be false.
    var hasFd = mnfd !== undefined || mxfd !== undefined;
    // 18. Let needSd be true.
    var needSd = true;
    // 19. Let needFd be true.
    var needFd = true;
    // 20. If roundingPriority is "auto", then
    if (roundingPriority === 'auto') {
        // 20.a. Set needSd to hasSd.
        needSd = hasSd;
        // 20.b. If hasSd is true or hasFd is false and notation is "compact", then
        if (hasSd || (!hasFd && notation === 'compact')) {
            // 20.b.i. Set needFd to false.
            needFd = false;
        }
    }
    // 21. If needSd is true, then
    if (needSd) {
        // 21.a. If hasSd is true, then
        if (hasSd) {
            // 21.a.i. Set internalSlots.[[MinimumSignificantDigits]] to ? DefaultNumberOption(mnsd, 1, 21, 1).
            internalSlots.minimumSignificantDigits = DefaultNumberOption(mnsd, 1, 21, 1);
            // 21.a.ii. Set internalSlots.[[MaximumSignificantDigits]] to ? DefaultNumberOption(mxsd, internalSlots.[[MinimumSignificantDigits]], 21, 21).
            internalSlots.maximumSignificantDigits = DefaultNumberOption(mxsd, internalSlots.minimumSignificantDigits, 21, 21);
        }
        else {
            // 21.b. Else,
            // 21.b.i. Set internalSlots.[[MinimumSignificantDigits]] to 1.
            internalSlots.minimumSignificantDigits = 1;
            // 21.b.ii. Set internalSlots.[[MaximumSignificantDigits]] to 21.
            internalSlots.maximumSignificantDigits = 21;
        }
    }
    // 22. If needFd is true, then
    if (needFd) {
        // 22.a. If hasFd is true, then
        if (hasFd) {
            // 22.a.i. Set mnfd to ? DefaultNumberOption(mnfd, 0, 100, undefined).
            mnfd = DefaultNumberOption(mnfd, 0, 100, undefined);
            // 22.a.ii. Set mxfd to ? DefaultNumberOption(mxfd, 0, 100, undefined).
            mxfd = DefaultNumberOption(mxfd, 0, 100, undefined);
            // 22.a.iii. If mnfd is undefined, then
            if (mnfd === undefined) {
                // 22.a.iii.1. Assert: mxfd is not undefined.
                invariant(mxfd !== undefined, 'maximumFractionDigits must be defined');
                // 22.a.iii.2. Set mnfd to min(mnfdDefault, mxfd).
                mnfd = Math.min(mnfdDefault, mxfd);
            }
            else if (mxfd === undefined) {
                // 22.a.iv. Else if mxfd is undefined, then
                // 22.a.iv.1. Set mxfd to max(mxfdDefault, mnfd).
                mxfd = Math.max(mxfdDefault, mnfd);
            }
            else if (mnfd > mxfd) {
                // 22.a.v. Else if mnfd > mxfd, throw a RangeError exception.
                throw new RangeError("Invalid range, ".concat(mnfd, " > ").concat(mxfd));
            }
            // 22.a.vi. Set internalSlots.[[MinimumFractionDigits]] to mnfd.
            internalSlots.minimumFractionDigits = mnfd;
            // 22.a.vii. Set internalSlots.[[MaximumFractionDigits]] to mxfd.
            internalSlots.maximumFractionDigits = mxfd;
        }
        else {
            // 22.b. Else,
            // 22.b.i. Set internalSlots.[[MinimumFractionDigits]] to mnfdDefault.
            internalSlots.minimumFractionDigits = mnfdDefault;
            // 22.b.ii. Set internalSlots.[[MaximumFractionDigits]] to mxfdDefault.
            internalSlots.maximumFractionDigits = mxfdDefault;
        }
    }
    // 23. If needSd is false and needFd is false, then
    if (!needSd && !needFd) {
        // 23.a. Set internalSlots.[[MinimumFractionDigits]] to 0.
        internalSlots.minimumFractionDigits = 0;
        // 23.b. Set internalSlots.[[MaximumFractionDigits]] to 0.
        internalSlots.maximumFractionDigits = 0;
        // 23.c. Set internalSlots.[[MinimumSignificantDigits]] to 1.
        internalSlots.minimumSignificantDigits = 1;
        // 23.d. Set internalSlots.[[MaximumSignificantDigits]] to 2.
        internalSlots.maximumSignificantDigits = 2;
        // 23.e. Set internalSlots.[[RoundingType]] to "morePrecision".
        internalSlots.roundingType = 'morePrecision';
        // 23.f. Set internalSlots.[[RoundingPriority]] to "morePrecision".
        internalSlots.roundingPriority = 'morePrecision';
    }
    else if (roundingPriority === 'morePrecision') {
        // 24. Else if roundingPriority is "morePrecision", then
        // 24.a. Set internalSlots.[[RoundingType]] to "morePrecision".
        internalSlots.roundingType = 'morePrecision';
        // 24.b. Set internalSlots.[[RoundingPriority]] to "morePrecision".
        internalSlots.roundingPriority = 'morePrecision';
    }
    else if (roundingPriority === 'lessPrecision') {
        // 25. Else if roundingPriority is "lessPrecision", then
        // 25.a. Set internalSlots.[[RoundingType]] to "lessPrecision".
        internalSlots.roundingType = 'lessPrecision';
        // 25.b. Set internalSlots.[[RoundingPriority]] to "lessPrecision".
        internalSlots.roundingPriority = 'lessPrecision';
    }
    else if (hasSd) {
        // 26. Else if hasSd is true, then
        // 26.a. Set internalSlots.[[RoundingType]] to "significantDigits".
        internalSlots.roundingType = 'significantDigits';
        // 26.b. Set internalSlots.[[RoundingPriority]] to "auto".
        internalSlots.roundingPriority = 'auto';
    }
    else {
        // 27. Else,
        // 27.a. Set internalSlots.[[RoundingType]] to "fractionDigits".
        internalSlots.roundingType = 'fractionDigits';
        // 27.b. Set internalSlots.[[RoundingPriority]] to "auto".
        internalSlots.roundingPriority = 'auto';
    }
    // 28. If roundingIncrement is not 1, then
    if (roundingIncrement !== 1) {
        // 28.a. Assert: internalSlots.[[RoundingType]] is "fractionDigits".
        invariant(internalSlots.roundingType === 'fractionDigits', 'Invalid roundingType', TypeError);
        // 28.b. Assert: internalSlots.[[MaximumFractionDigits]] is equal to internalSlots.[[MinimumFractionDigits]].
        invariant(internalSlots.maximumFractionDigits ===
            internalSlots.minimumFractionDigits, 'With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.', RangeError);
    }
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js




/**
 * https://tc39.es/ecma402/#sec-setnumberformatunitoptions
 */
function SetNumberFormatUnitOptions(internalSlots, options) {
    if (options === void 0) { options = Object.create(null); }
    // 1. Let style be ? GetOption(options, "style", "string", « "decimal", "percent", "currency", "unit" », "decimal").
    var style = GetOption(options, 'style', 'string', ['decimal', 'percent', 'currency', 'unit'], 'decimal');
    // 2. Set internalSlots.[[Style]] to style.
    internalSlots.style = style;
    // 3. Let currency be ? GetOption(options, "currency", "string", undefined, undefined).
    var currency = GetOption(options, 'currency', 'string', undefined, undefined);
    // 4. If currency is not undefined, then
    // a. If the result of IsWellFormedCurrencyCode(currency) is false, throw a RangeError exception.
    invariant(currency === undefined || IsWellFormedCurrencyCode(currency), 'Malformed currency code', RangeError);
    // 5. If style is "currency" and currency is undefined, throw a TypeError exception.
    invariant(style !== 'currency' || currency !== undefined, 'currency cannot be undefined', TypeError);
    // 6. Let currencyDisplay be ? GetOption(options, "currencyDisplay", "string", « "code", "symbol", "narrowSymbol", "name" », "symbol").
    var currencyDisplay = GetOption(options, 'currencyDisplay', 'string', ['code', 'symbol', 'narrowSymbol', 'name'], 'symbol');
    // 7. Let currencySign be ? GetOption(options, "currencySign", "string", « "standard", "accounting" », "standard").
    var currencySign = GetOption(options, 'currencySign', 'string', ['standard', 'accounting'], 'standard');
    // 8. Let unit be ? GetOption(options, "unit", "string", undefined, undefined).
    var unit = GetOption(options, 'unit', 'string', undefined, undefined);
    // 9. If unit is not undefined, then
    // a. If the result of IsWellFormedUnitIdentifier(unit) is false, throw a RangeError exception.
    invariant(unit === undefined || IsWellFormedUnitIdentifier(unit), 'Invalid unit argument for Intl.NumberFormat()', RangeError);
    // 10. If style is "unit" and unit is undefined, throw a TypeError exception.
    invariant(style !== 'unit' || unit !== undefined, 'unit cannot be undefined', TypeError);
    // 11. Let unitDisplay be ? GetOption(options, "unitDisplay", "string", « "short", "narrow", "long" », "short").
    var unitDisplay = GetOption(options, 'unitDisplay', 'string', ['short', 'narrow', 'long'], 'short');
    // 12. If style is "currency", then
    if (style === 'currency') {
        // a. Set internalSlots.[[Currency]] to the result of converting currency to upper case as specified in 6.1.
        internalSlots.currency = currency.toUpperCase();
        // b. Set internalSlots.[[CurrencyDisplay]] to currencyDisplay.
        internalSlots.currencyDisplay = currencyDisplay;
        // c. Set internalSlots.[[CurrencySign]] to currencySign.
        internalSlots.currencySign = currencySign;
    }
    // 13. If style is "unit", then
    if (style === 'unit') {
        // a. Set internalSlots.[[Unit]] to unit.
        internalSlots.unit = unit;
        // b. Set internalSlots.[[UnitDisplay]] to unitDisplay.
        internalSlots.unitDisplay = unitDisplay;
    }
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js









/**
 * https://tc39.es/ecma402/#sec-initializenumberformat
 */
function InitializeNumberFormat(nf, locales, opts, _a) {
    var getInternalSlots = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData = _a.currencyDigitsData;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var options = CoerceOptionsToObject(opts);
    var opt = Object.create(null);
    var matcher = GetOption(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
    opt.localeMatcher = matcher;
    var numberingSystem = GetOption(options, 'numberingSystem', 'string', undefined, undefined);
    if (numberingSystem !== undefined &&
        numberingSystemNames.indexOf(numberingSystem) < 0) {
        // 8.a. If numberingSystem does not match the Unicode Locale Identifier type nonterminal,
        // throw a RangeError exception.
        throw RangeError("Invalid numberingSystems: ".concat(numberingSystem));
    }
    opt.nu = numberingSystem;
    var r = (0,lib.ResolveLocale)(Array.from(availableLocales), requestedLocales, opt, 
    // [[RelevantExtensionKeys]] slot, which is a constant
    ['nu'], localeData, getDefaultLocale);
    var dataLocaleData = localeData[r.dataLocale];
    invariant(!!dataLocaleData, "Missing locale data for ".concat(r.dataLocale));
    var internalSlots = getInternalSlots(nf);
    internalSlots.locale = r.locale;
    internalSlots.dataLocale = r.dataLocale;
    internalSlots.numberingSystem = r.nu;
    internalSlots.dataLocaleData = dataLocaleData;
    SetNumberFormatUnitOptions(internalSlots, options);
    var style = internalSlots.style;
    var notation = GetOption(options, 'notation', 'string', ['standard', 'scientific', 'engineering', 'compact'], 'standard');
    internalSlots.notation = notation;
    var mnfdDefault;
    var mxfdDefault;
    if (style === 'currency' && notation === 'standard') {
        var currency = internalSlots.currency;
        var cDigits = CurrencyDigits(currency, { currencyDigitsData: currencyDigitsData });
        mnfdDefault = cDigits;
        mxfdDefault = cDigits;
    }
    else {
        mnfdDefault = 0;
        mxfdDefault = style === 'percent' ? 0 : 3;
    }
    SetNumberFormatDigitOptions(internalSlots, options, mnfdDefault, mxfdDefault, notation);
    var compactDisplay = GetOption(options, 'compactDisplay', 'string', ['short', 'long'], 'short');
    var defaultUseGrouping = 'auto';
    if (notation === 'compact') {
        internalSlots.compactDisplay = compactDisplay;
        defaultUseGrouping = 'min2';
    }
    var useGrouping = GetStringOrBooleanOption(options, 'useGrouping', ['min2', 'auto', 'always'], 'always', false, defaultUseGrouping);
    internalSlots.useGrouping = useGrouping;
    var signDisplay = GetOption(options, 'signDisplay', 'string', ['auto', 'never', 'always', 'exceptZero', 'negative'], 'auto');
    internalSlots.signDisplay = signDisplay;
    return nf;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js

/**
 * Partition a pattern into a list of literals and placeholders
 * https://tc39.es/ecma402/#sec-partitionpattern
 * @param pattern
 */
function PartitionPattern(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf('{');
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while (beginIndex < pattern.length && beginIndex > -1) {
        endIndex = pattern.indexOf('}', beginIndex);
        invariant(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
        if (beginIndex > nextIndex) {
            result.push({
                type: 'literal',
                value: pattern.substring(nextIndex, beginIndex),
            });
        }
        result.push({
            type: pattern.substring(beginIndex + 1, endIndex),
            value: undefined,
        });
        nextIndex = endIndex + 1;
        beginIndex = pattern.indexOf('{', nextIndex);
    }
    if (nextIndex < length) {
        result.push({
            type: 'literal',
            value: pattern.substring(nextIndex, length),
        });
    }
    return result;
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js



/**
 * https://tc39.es/ecma402/#sec-supportedlocales
 * @param availableLocales
 * @param requestedLocales
 * @param options
 */
function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = 'best fit';
    if (options !== undefined) {
        options = ToObject(options);
        matcher = GetOption(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
    }
    if (matcher === 'best fit') {
        return (0,lib.LookupSupportedLocales)(Array.from(availableLocales), requestedLocales);
    }
    return (0,lib.LookupSupportedLocales)(Array.from(availableLocales), requestedLocales);
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/data.js

var MissingLocaleDataError = /** @class */ (function (_super) {
    (0,tslib_es6.__extends)(MissingLocaleDataError, _super);
    function MissingLocaleDataError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'MISSING_LOCALE_DATA';
        return _this;
    }
    return MissingLocaleDataError;
}(Error));
function isMissingLocaleDataError(e) {
    return e.type === 'MISSING_LOCALE_DATA';
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js
var RangePatternType;
(function (RangePatternType) {
    RangePatternType["startRange"] = "startRange";
    RangePatternType["shared"] = "shared";
    RangePatternType["endRange"] = "endRange";
})(RangePatternType || (RangePatternType = {}));

;// ./node_modules/@formatjs/ecma402-abstract/lib/ToIntlMathematicalValue.js


function ToIntlMathematicalValue(input) {
    var primValue = ToPrimitive(input, 'number');
    if (typeof primValue === 'bigint') {
        return new decimal_js_decimal(primValue);
    }
    // IMPL
    if (primValue === undefined) {
        return new decimal_js_decimal(NaN);
    }
    if (primValue === true) {
        return new decimal_js_decimal(1);
    }
    if (primValue === false) {
        return new decimal_js_decimal(0);
    }
    if (primValue === null) {
        return new decimal_js_decimal(0);
    }
    try {
        return new decimal_js_decimal(primValue);
    }
    catch (e) {
        return new decimal_js_decimal(NaN);
    }
}

;// ./node_modules/@formatjs/ecma402-abstract/lib/index.js















































/***/ }),

/***/ "./node_modules/@formatjs/intl-localematcher/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LookupSupportedLocales: () => (/* reexport */ LookupSupportedLocales),
  ResolveLocale: () => (/* reexport */ ResolveLocale),
  match: () => (/* binding */ match)
});

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */
function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
}

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/languageMatching.js
var languageMatching_data = {
    supplemental: {
        languageMatching: {
            'written-new': [
                {
                    paradigmLocales: {
                        _locales: 'en en_GB es es_419 pt_BR pt_PT',
                    },
                },
                {
                    $enUS: {
                        _value: 'AS+CA+GU+MH+MP+PH+PR+UM+US+VI',
                    },
                },
                {
                    $cnsar: {
                        _value: 'HK+MO',
                    },
                },
                {
                    $americas: {
                        _value: '019',
                    },
                },
                {
                    $maghreb: {
                        _value: 'MA+DZ+TN+LY+MR+EH',
                    },
                },
                {
                    no: {
                        _desired: 'nb',
                        _distance: '1',
                    },
                },
                {
                    bs: {
                        _desired: 'hr',
                        _distance: '4',
                    },
                },
                {
                    bs: {
                        _desired: 'sh',
                        _distance: '4',
                    },
                },
                {
                    hr: {
                        _desired: 'sh',
                        _distance: '4',
                    },
                },
                {
                    sr: {
                        _desired: 'sh',
                        _distance: '4',
                    },
                },
                {
                    aa: {
                        _desired: 'ssy',
                        _distance: '4',
                    },
                },
                {
                    de: {
                        _desired: 'gsw',
                        _distance: '4',
                        _oneway: 'true',
                    },
                },
                {
                    de: {
                        _desired: 'lb',
                        _distance: '4',
                        _oneway: 'true',
                    },
                },
                {
                    no: {
                        _desired: 'da',
                        _distance: '8',
                    },
                },
                {
                    nb: {
                        _desired: 'da',
                        _distance: '8',
                    },
                },
                {
                    ru: {
                        _desired: 'ab',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ach',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    nl: {
                        _desired: 'af',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ak',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'am',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    es: {
                        _desired: 'ay',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'az',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ur: {
                        _desired: 'bal',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'be',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'bem',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    hi: {
                        _desired: 'bh',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'bn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'bo',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'br',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    es: {
                        _desired: 'ca',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    fil: {
                        _desired: 'ceb',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'chr',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ckb',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'co',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'crs',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    sk: {
                        _desired: 'cs',
                        _distance: '20',
                    },
                },
                {
                    en: {
                        _desired: 'cy',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ee',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'eo',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    es: {
                        _desired: 'eu',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    da: {
                        _desired: 'fo',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    nl: {
                        _desired: 'fy',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ga',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'gaa',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'gd',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    es: {
                        _desired: 'gl',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    es: {
                        _desired: 'gn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    hi: {
                        _desired: 'gu',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ha',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'haw',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'ht',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'hy',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ia',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ig',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'is',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    id: {
                        _desired: 'jv',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ka',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'kg',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'kk',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'km',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'kn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'kri',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    tr: {
                        _desired: 'ku',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'ky',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    it: {
                        _desired: 'la',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'lg',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'ln',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'lo',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'loz',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'lua',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    hi: {
                        _desired: 'mai',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'mfe',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'mg',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'mi',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ml',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'mn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    hi: {
                        _desired: 'mr',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    id: {
                        _desired: 'ms',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'mt',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'my',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ne',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    nb: {
                        _desired: 'nn',
                        _distance: '20',
                    },
                },
                {
                    no: {
                        _desired: 'nn',
                        _distance: '20',
                    },
                },
                {
                    en: {
                        _desired: 'nso',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ny',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'nyn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'oc',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'om',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'or',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'pa',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'pcm',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ps',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    es: {
                        _desired: 'qu',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    de: {
                        _desired: 'rm',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'rn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'rw',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    hi: {
                        _desired: 'sa',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'sd',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'si',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'sn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'so',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'sq',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'st',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    id: {
                        _desired: 'su',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'sw',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ta',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'te',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'tg',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ti',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'tk',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'tlh',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'tn',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'to',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'tt',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'tum',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'ug',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'uk',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'ur',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ru: {
                        _desired: 'uz',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    fr: {
                        _desired: 'wo',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'xh',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'yi',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'yo',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'za',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    en: {
                        _desired: 'zu',
                        _distance: '30',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'aao',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'abh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'abv',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'acm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'acq',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'acw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'acx',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'acy',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'adf',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'aeb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'aec',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'afb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ajp',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'apc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'apd',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'arq',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ars',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ary',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'arz',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'auz',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'avl',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ayh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ayl',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ayn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ayp',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'bbz',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'pga',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'shu',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ar: {
                        _desired: 'ssh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    az: {
                        _desired: 'azb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    et: {
                        _desired: 'vro',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'ffm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fub',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fue',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fuf',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fuh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fui',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fuq',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ff: {
                        _desired: 'fuv',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    gn: {
                        _desired: 'gnw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    gn: {
                        _desired: 'gui',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    gn: {
                        _desired: 'gun',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    gn: {
                        _desired: 'nhd',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    iu: {
                        _desired: 'ikt',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'enb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'eyo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'niq',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'oki',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'pko',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'sgc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'tec',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kln: {
                        _desired: 'tuy',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kok: {
                        _desired: 'gom',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    kpe: {
                        _desired: 'gkp',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'ida',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lkb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lko',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lks',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lri',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lrm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lsm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lto',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lts',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'lwg',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'nle',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'nyd',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    luy: {
                        _desired: 'rag',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    lv: {
                        _desired: 'ltg',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'bhr',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'bjq',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'bmm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'bzc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'msh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'skg',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'tdx',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'tkg',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'txy',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'xmv',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mg: {
                        _desired: 'xmw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    mn: {
                        _desired: 'mvf',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'bjn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'btj',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'bve',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'bvu',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'coa',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'dup',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'hji',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'id',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'jak',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'jax',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'kvb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'kvr',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'kxd',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'lce',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'lcf',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'liw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'max',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'meo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'mfa',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'mfb',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'min',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'mqg',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'msi',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'mui',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'orn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'ors',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'pel',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'pse',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'tmw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'urk',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'vkk',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'vkt',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'xmm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'zlm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ms: {
                        _desired: 'zmi',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ne: {
                        _desired: 'dty',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    om: {
                        _desired: 'gax',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    om: {
                        _desired: 'hae',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    om: {
                        _desired: 'orc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    or: {
                        _desired: 'spv',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ps: {
                        _desired: 'pbt',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    ps: {
                        _desired: 'pst',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qub',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qud',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'quf',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qug',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'quh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'quk',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qul',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qup',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qur',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qus',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'quw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qux',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'quy',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qva',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qve',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvi',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvj',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvl',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvm',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvp',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvs',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qvz',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qwa',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qwc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qwh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qws',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxa',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxl',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxp',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxr',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxt',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxu',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    qu: {
                        _desired: 'qxw',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    sc: {
                        _desired: 'sdc',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    sc: {
                        _desired: 'sdn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    sc: {
                        _desired: 'sro',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    sq: {
                        _desired: 'aae',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    sq: {
                        _desired: 'aat',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    sq: {
                        _desired: 'aln',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    syr: {
                        _desired: 'aii',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    uz: {
                        _desired: 'uzs',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    yi: {
                        _desired: 'yih',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'cdo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'cjy',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'cpx',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'czh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'czo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'gan',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'hak',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'hsn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'lzh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'mnp',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'nan',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'wuu',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    zh: {
                        _desired: 'yue',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    '*': {
                        _desired: '*',
                        _distance: '80',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'am-Ethi',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'ru-Cyrl': {
                        _desired: 'az-Latn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'bn-Beng',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'zh-Hans': {
                        _desired: 'bo-Tibt',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'ru-Cyrl': {
                        _desired: 'hy-Armn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ka-Geor',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'km-Khmr',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'kn-Knda',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'lo-Laoo',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ml-Mlym',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'my-Mymr',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ne-Deva',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'or-Orya',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'pa-Guru',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ps-Arab',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'sd-Arab',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'si-Sinh',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ta-Taml',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'te-Telu',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ti-Ethi',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'ru-Cyrl': {
                        _desired: 'tk-Latn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'ur-Arab',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'ru-Cyrl': {
                        _desired: 'uz-Latn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'en-Latn': {
                        _desired: 'yi-Hebr',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'sr-Cyrl': {
                        _desired: 'sr-Latn',
                        _distance: '5',
                    },
                },
                {
                    'zh-Hans': {
                        _desired: 'za-Latn',
                        _distance: '10',
                        _oneway: 'true',
                    },
                },
                {
                    'zh-Hans': {
                        _desired: 'zh-Hani',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'zh-Hant': {
                        _desired: 'zh-Hani',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'ar-Arab': {
                        _desired: 'ar-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'bn-Beng': {
                        _desired: 'bn-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'gu-Gujr': {
                        _desired: 'gu-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'hi-Deva': {
                        _desired: 'hi-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'kn-Knda': {
                        _desired: 'kn-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'ml-Mlym': {
                        _desired: 'ml-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'mr-Deva': {
                        _desired: 'mr-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'ta-Taml': {
                        _desired: 'ta-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'te-Telu': {
                        _desired: 'te-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'zh-Hans': {
                        _desired: 'zh-Latn',
                        _distance: '20',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Jpan': {
                        _desired: 'ja-Latn',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Jpan': {
                        _desired: 'ja-Hani',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Jpan': {
                        _desired: 'ja-Hira',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Jpan': {
                        _desired: 'ja-Kana',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Jpan': {
                        _desired: 'ja-Hrkt',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Hrkt': {
                        _desired: 'ja-Hira',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ja-Hrkt': {
                        _desired: 'ja-Kana',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ko-Kore': {
                        _desired: 'ko-Hani',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ko-Kore': {
                        _desired: 'ko-Hang',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ko-Kore': {
                        _desired: 'ko-Jamo',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    'ko-Hang': {
                        _desired: 'ko-Jamo',
                        _distance: '5',
                        _oneway: 'true',
                    },
                },
                {
                    '*-*': {
                        _desired: '*-*',
                        _distance: '50',
                    },
                },
                {
                    'ar-*-$maghreb': {
                        _desired: 'ar-*-$maghreb',
                        _distance: '4',
                    },
                },
                {
                    'ar-*-$!maghreb': {
                        _desired: 'ar-*-$!maghreb',
                        _distance: '4',
                    },
                },
                {
                    'ar-*-*': {
                        _desired: 'ar-*-*',
                        _distance: '5',
                    },
                },
                {
                    'en-*-$enUS': {
                        _desired: 'en-*-$enUS',
                        _distance: '4',
                    },
                },
                {
                    'en-*-GB': {
                        _desired: 'en-*-$!enUS',
                        _distance: '3',
                    },
                },
                {
                    'en-*-$!enUS': {
                        _desired: 'en-*-$!enUS',
                        _distance: '4',
                    },
                },
                {
                    'en-*-*': {
                        _desired: 'en-*-*',
                        _distance: '5',
                    },
                },
                {
                    'es-*-$americas': {
                        _desired: 'es-*-$americas',
                        _distance: '4',
                    },
                },
                {
                    'es-*-$!americas': {
                        _desired: 'es-*-$!americas',
                        _distance: '4',
                    },
                },
                {
                    'es-*-*': {
                        _desired: 'es-*-*',
                        _distance: '5',
                    },
                },
                {
                    'pt-*-$americas': {
                        _desired: 'pt-*-$americas',
                        _distance: '4',
                    },
                },
                {
                    'pt-*-$!americas': {
                        _desired: 'pt-*-$!americas',
                        _distance: '4',
                    },
                },
                {
                    'pt-*-*': {
                        _desired: 'pt-*-*',
                        _distance: '5',
                    },
                },
                {
                    'zh-Hant-$cnsar': {
                        _desired: 'zh-Hant-$cnsar',
                        _distance: '4',
                    },
                },
                {
                    'zh-Hant-$!cnsar': {
                        _desired: 'zh-Hant-$!cnsar',
                        _distance: '4',
                    },
                },
                {
                    'zh-Hant-*': {
                        _desired: 'zh-Hant-*',
                        _distance: '5',
                    },
                },
                {
                    '*-*-*': {
                        _desired: '*-*-*',
                        _distance: '4',
                    },
                },
            ],
        },
    },
};

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/regions.generated.js
// This file is generated from regions-gen.ts
var regions = {
    "001": [
        "001",
        "001-status-grouping",
        "002",
        "005",
        "009",
        "011",
        "013",
        "014",
        "015",
        "017",
        "018",
        "019",
        "021",
        "029",
        "030",
        "034",
        "035",
        "039",
        "053",
        "054",
        "057",
        "061",
        "142",
        "143",
        "145",
        "150",
        "151",
        "154",
        "155",
        "AC",
        "AD",
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AW",
        "AX",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BL",
        "BM",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BT",
        "BV",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CN",
        "CO",
        "CP",
        "CQ",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DG",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EA",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "EU",
        "EZ",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FO",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GF",
        "GG",
        "GH",
        "GI",
        "GL",
        "GM",
        "GN",
        "GP",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "GY",
        "HK",
        "HM",
        "HN",
        "HR",
        "HT",
        "HU",
        "IC",
        "ID",
        "IE",
        "IL",
        "IM",
        "IN",
        "IO",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JE",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MF",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MO",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NC",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PF",
        "PG",
        "PH",
        "PK",
        "PL",
        "PM",
        "PN",
        "PR",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "QO",
        "RE",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SH",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TA",
        "TC",
        "TD",
        "TF",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UM",
        "UN",
        "US",
        "UY",
        "UZ",
        "VA",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WF",
        "WS",
        "XK",
        "YE",
        "YT",
        "ZA",
        "ZM",
        "ZW"
    ],
    "002": [
        "002",
        "002-status-grouping",
        "011",
        "014",
        "015",
        "017",
        "018",
        "202",
        "AO",
        "BF",
        "BI",
        "BJ",
        "BW",
        "CD",
        "CF",
        "CG",
        "CI",
        "CM",
        "CV",
        "DJ",
        "DZ",
        "EA",
        "EG",
        "EH",
        "ER",
        "ET",
        "GA",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GW",
        "IC",
        "IO",
        "KE",
        "KM",
        "LR",
        "LS",
        "LY",
        "MA",
        "MG",
        "ML",
        "MR",
        "MU",
        "MW",
        "MZ",
        "NA",
        "NE",
        "NG",
        "RE",
        "RW",
        "SC",
        "SD",
        "SH",
        "SL",
        "SN",
        "SO",
        "SS",
        "ST",
        "SZ",
        "TD",
        "TF",
        "TG",
        "TN",
        "TZ",
        "UG",
        "YT",
        "ZA",
        "ZM",
        "ZW"
    ],
    "003": [
        "003",
        "013",
        "021",
        "029",
        "AG",
        "AI",
        "AW",
        "BB",
        "BL",
        "BM",
        "BQ",
        "BS",
        "BZ",
        "CA",
        "CR",
        "CU",
        "CW",
        "DM",
        "DO",
        "GD",
        "GL",
        "GP",
        "GT",
        "HN",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "MX",
        "NI",
        "PA",
        "PM",
        "PR",
        "SV",
        "SX",
        "TC",
        "TT",
        "US",
        "VC",
        "VG",
        "VI"
    ],
    "005": [
        "005",
        "AR",
        "BO",
        "BR",
        "BV",
        "CL",
        "CO",
        "EC",
        "FK",
        "GF",
        "GS",
        "GY",
        "PE",
        "PY",
        "SR",
        "UY",
        "VE"
    ],
    "009": [
        "009",
        "053",
        "054",
        "057",
        "061",
        "AC",
        "AQ",
        "AS",
        "AU",
        "CC",
        "CK",
        "CP",
        "CX",
        "DG",
        "FJ",
        "FM",
        "GU",
        "HM",
        "KI",
        "MH",
        "MP",
        "NC",
        "NF",
        "NR",
        "NU",
        "NZ",
        "PF",
        "PG",
        "PN",
        "PW",
        "QO",
        "SB",
        "TA",
        "TK",
        "TO",
        "TV",
        "UM",
        "VU",
        "WF",
        "WS"
    ],
    "011": [
        "011",
        "BF",
        "BJ",
        "CI",
        "CV",
        "GH",
        "GM",
        "GN",
        "GW",
        "LR",
        "ML",
        "MR",
        "NE",
        "NG",
        "SH",
        "SL",
        "SN",
        "TG"
    ],
    "013": [
        "013",
        "BZ",
        "CR",
        "GT",
        "HN",
        "MX",
        "NI",
        "PA",
        "SV"
    ],
    "014": [
        "014",
        "BI",
        "DJ",
        "ER",
        "ET",
        "IO",
        "KE",
        "KM",
        "MG",
        "MU",
        "MW",
        "MZ",
        "RE",
        "RW",
        "SC",
        "SO",
        "SS",
        "TF",
        "TZ",
        "UG",
        "YT",
        "ZM",
        "ZW"
    ],
    "015": [
        "015",
        "DZ",
        "EA",
        "EG",
        "EH",
        "IC",
        "LY",
        "MA",
        "SD",
        "TN"
    ],
    "017": [
        "017",
        "AO",
        "CD",
        "CF",
        "CG",
        "CM",
        "GA",
        "GQ",
        "ST",
        "TD"
    ],
    "018": [
        "018",
        "BW",
        "LS",
        "NA",
        "SZ",
        "ZA"
    ],
    "019": [
        "003",
        "005",
        "013",
        "019",
        "019-status-grouping",
        "021",
        "029",
        "419",
        "AG",
        "AI",
        "AR",
        "AW",
        "BB",
        "BL",
        "BM",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BV",
        "BZ",
        "CA",
        "CL",
        "CO",
        "CR",
        "CU",
        "CW",
        "DM",
        "DO",
        "EC",
        "FK",
        "GD",
        "GF",
        "GL",
        "GP",
        "GS",
        "GT",
        "GY",
        "HN",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "MX",
        "NI",
        "PA",
        "PE",
        "PM",
        "PR",
        "PY",
        "SR",
        "SV",
        "SX",
        "TC",
        "TT",
        "US",
        "UY",
        "VC",
        "VE",
        "VG",
        "VI"
    ],
    "021": [
        "021",
        "BM",
        "CA",
        "GL",
        "PM",
        "US"
    ],
    "029": [
        "029",
        "AG",
        "AI",
        "AW",
        "BB",
        "BL",
        "BQ",
        "BS",
        "CU",
        "CW",
        "DM",
        "DO",
        "GD",
        "GP",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "PR",
        "SX",
        "TC",
        "TT",
        "VC",
        "VG",
        "VI"
    ],
    "030": [
        "030",
        "CN",
        "HK",
        "JP",
        "KP",
        "KR",
        "MN",
        "MO",
        "TW"
    ],
    "034": [
        "034",
        "AF",
        "BD",
        "BT",
        "IN",
        "IR",
        "LK",
        "MV",
        "NP",
        "PK"
    ],
    "035": [
        "035",
        "BN",
        "ID",
        "KH",
        "LA",
        "MM",
        "MY",
        "PH",
        "SG",
        "TH",
        "TL",
        "VN"
    ],
    "039": [
        "039",
        "AD",
        "AL",
        "BA",
        "ES",
        "GI",
        "GR",
        "HR",
        "IT",
        "ME",
        "MK",
        "MT",
        "PT",
        "RS",
        "SI",
        "SM",
        "VA",
        "XK"
    ],
    "053": [
        "053",
        "AU",
        "CC",
        "CX",
        "HM",
        "NF",
        "NZ"
    ],
    "054": [
        "054",
        "FJ",
        "NC",
        "PG",
        "SB",
        "VU"
    ],
    "057": [
        "057",
        "FM",
        "GU",
        "KI",
        "MH",
        "MP",
        "NR",
        "PW",
        "UM"
    ],
    "061": [
        "061",
        "AS",
        "CK",
        "NU",
        "PF",
        "PN",
        "TK",
        "TO",
        "TV",
        "WF",
        "WS"
    ],
    "142": [
        "030",
        "034",
        "035",
        "142",
        "143",
        "145",
        "AE",
        "AF",
        "AM",
        "AZ",
        "BD",
        "BH",
        "BN",
        "BT",
        "CN",
        "CY",
        "GE",
        "HK",
        "ID",
        "IL",
        "IN",
        "IQ",
        "IR",
        "JO",
        "JP",
        "KG",
        "KH",
        "KP",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LK",
        "MM",
        "MN",
        "MO",
        "MV",
        "MY",
        "NP",
        "OM",
        "PH",
        "PK",
        "PS",
        "QA",
        "SA",
        "SG",
        "SY",
        "TH",
        "TJ",
        "TL",
        "TM",
        "TR",
        "TW",
        "UZ",
        "VN",
        "YE"
    ],
    "143": [
        "143",
        "KG",
        "KZ",
        "TJ",
        "TM",
        "UZ"
    ],
    "145": [
        "145",
        "AE",
        "AM",
        "AZ",
        "BH",
        "CY",
        "GE",
        "IL",
        "IQ",
        "JO",
        "KW",
        "LB",
        "OM",
        "PS",
        "QA",
        "SA",
        "SY",
        "TR",
        "YE"
    ],
    "150": [
        "039",
        "150",
        "151",
        "154",
        "155",
        "AD",
        "AL",
        "AT",
        "AX",
        "BA",
        "BE",
        "BG",
        "BY",
        "CH",
        "CQ",
        "CZ",
        "DE",
        "DK",
        "EE",
        "ES",
        "FI",
        "FO",
        "FR",
        "GB",
        "GG",
        "GI",
        "GR",
        "HR",
        "HU",
        "IE",
        "IM",
        "IS",
        "IT",
        "JE",
        "LI",
        "LT",
        "LU",
        "LV",
        "MC",
        "MD",
        "ME",
        "MK",
        "MT",
        "NL",
        "NO",
        "PL",
        "PT",
        "RO",
        "RS",
        "RU",
        "SE",
        "SI",
        "SJ",
        "SK",
        "SM",
        "UA",
        "VA",
        "XK"
    ],
    "151": [
        "151",
        "BG",
        "BY",
        "CZ",
        "HU",
        "MD",
        "PL",
        "RO",
        "RU",
        "SK",
        "UA"
    ],
    "154": [
        "154",
        "AX",
        "CQ",
        "DK",
        "EE",
        "FI",
        "FO",
        "GB",
        "GG",
        "IE",
        "IM",
        "IS",
        "JE",
        "LT",
        "LV",
        "NO",
        "SE",
        "SJ"
    ],
    "155": [
        "155",
        "AT",
        "BE",
        "CH",
        "DE",
        "FR",
        "LI",
        "LU",
        "MC",
        "NL"
    ],
    "202": [
        "011",
        "014",
        "017",
        "018",
        "202",
        "AO",
        "BF",
        "BI",
        "BJ",
        "BW",
        "CD",
        "CF",
        "CG",
        "CI",
        "CM",
        "CV",
        "DJ",
        "ER",
        "ET",
        "GA",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GW",
        "IO",
        "KE",
        "KM",
        "LR",
        "LS",
        "MG",
        "ML",
        "MR",
        "MU",
        "MW",
        "MZ",
        "NA",
        "NE",
        "NG",
        "RE",
        "RW",
        "SC",
        "SH",
        "SL",
        "SN",
        "SO",
        "SS",
        "ST",
        "SZ",
        "TD",
        "TF",
        "TG",
        "TZ",
        "UG",
        "YT",
        "ZA",
        "ZM",
        "ZW"
    ],
    "419": [
        "005",
        "013",
        "029",
        "419",
        "AG",
        "AI",
        "AR",
        "AW",
        "BB",
        "BL",
        "BO",
        "BQ",
        "BR",
        "BS",
        "BV",
        "BZ",
        "CL",
        "CO",
        "CR",
        "CU",
        "CW",
        "DM",
        "DO",
        "EC",
        "FK",
        "GD",
        "GF",
        "GP",
        "GS",
        "GT",
        "GY",
        "HN",
        "HT",
        "JM",
        "KN",
        "KY",
        "LC",
        "MF",
        "MQ",
        "MS",
        "MX",
        "NI",
        "PA",
        "PE",
        "PR",
        "PY",
        "SR",
        "SV",
        "SX",
        "TC",
        "TT",
        "UY",
        "VC",
        "VE",
        "VG",
        "VI"
    ],
    "EU": [
        "AT",
        "BE",
        "BG",
        "CY",
        "CZ",
        "DE",
        "DK",
        "EE",
        "ES",
        "EU",
        "FI",
        "FR",
        "GR",
        "HR",
        "HU",
        "IE",
        "IT",
        "LT",
        "LU",
        "LV",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SE",
        "SI",
        "SK"
    ],
    "EZ": [
        "AT",
        "BE",
        "CY",
        "DE",
        "EE",
        "ES",
        "EZ",
        "FI",
        "FR",
        "GR",
        "IE",
        "IT",
        "LT",
        "LU",
        "LV",
        "MT",
        "NL",
        "PT",
        "SI",
        "SK"
    ],
    "QO": [
        "AC",
        "AQ",
        "CP",
        "DG",
        "QO",
        "TA"
    ],
    "UN": [
        "AD",
        "AE",
        "AF",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CN",
        "CO",
        "CR",
        "CU",
        "CV",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SO",
        "SR",
        "SS",
        "ST",
        "SV",
        "SY",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TZ",
        "UA",
        "UG",
        "UN",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "YE",
        "ZA",
        "ZM",
        "ZW"
    ]
};

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js



var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
// This is effectively 2 languages in 2 different regions in the same cluster
var DEFAULT_MATCHING_THRESHOLD = 838;
var PROCESSED_DATA;
function processData() {
    var _a, _b;
    if (!PROCESSED_DATA) {
        var paradigmLocales = (_b = (_a = languageMatching_data.supplemental.languageMatching['written-new'][0]) === null || _a === void 0 ? void 0 : _a.paradigmLocales) === null || _b === void 0 ? void 0 : _b._locales.split(' ');
        var matchVariables = languageMatching_data.supplemental.languageMatching['written-new'].slice(1, 5);
        var data = languageMatching_data.supplemental.languageMatching['written-new'].slice(5);
        var matches = data.map(function (d) {
            var key = Object.keys(d)[0];
            var value = d[key];
            return {
                supported: key,
                desired: value._desired,
                distance: +value._distance,
                oneway: value.oneway === 'true' ? true : false,
            };
        }, {});
        PROCESSED_DATA = {
            matches: matches,
            matchVariables: matchVariables.reduce(function (all, d) {
                var key = Object.keys(d)[0];
                var value = d[key];
                all[key.slice(1)] = value._value.split('+');
                return all;
            }, {}),
            paradigmLocales: (0,tslib_es6.__spreadArray)((0,tslib_es6.__spreadArray)([], paradigmLocales, true), paradigmLocales.map(function (l) {
                return new Intl.Locale(l.replace(/_/g, '-')).maximize().toString();
            }), true),
        };
    }
    return PROCESSED_DATA;
}
function isMatched(locale, languageMatchInfoLocale, matchVariables) {
    var _a = languageMatchInfoLocale.split('-'), language = _a[0], script = _a[1], region = _a[2];
    var matches = true;
    if (region && region[0] === '$') {
        var shouldInclude = region[1] !== '!';
        var matchRegions = shouldInclude
            ? matchVariables[region.slice(1)]
            : matchVariables[region.slice(2)];
        var expandedMatchedRegions = matchRegions
            .map(function (r) { return regions[r] || [r]; })
            .reduce(function (all, list) { return (0,tslib_es6.__spreadArray)((0,tslib_es6.__spreadArray)([], all, true), list, true); }, []);
        matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || '') > -1 !=
            shouldInclude));
    }
    else {
        matches && (matches = locale.region
            ? region === '*' || region === locale.region
            : true);
    }
    matches && (matches = locale.script ? script === '*' || script === locale.script : true);
    matches && (matches = locale.language
        ? language === '*' || language === locale.language
        : true);
    return matches;
}
function serializeLSR(lsr) {
    return [lsr.language, lsr.script, lsr.region].filter(Boolean).join('-');
}
function findMatchingDistanceForLSR(desired, supported, data) {
    for (var _i = 0, _a = data.matches; _i < _a.length; _i++) {
        var d = _a[_i];
        var matches = isMatched(desired, d.desired, data.matchVariables) &&
            isMatched(supported, d.supported, data.matchVariables);
        if (!d.oneway && !matches) {
            matches =
                isMatched(desired, d.supported, data.matchVariables) &&
                    isMatched(supported, d.desired, data.matchVariables);
        }
        if (matches) {
            var distance = d.distance * 10;
            if (data.paradigmLocales.indexOf(serializeLSR(desired)) > -1 !=
                data.paradigmLocales.indexOf(serializeLSR(supported)) > -1) {
                return distance - 1;
            }
            return distance;
        }
    }
    throw new Error('No matching distance found');
}
function findMatchingDistance(desired, supported) {
    var desiredLocale = new Intl.Locale(desired).maximize();
    var supportedLocale = new Intl.Locale(supported).maximize();
    var desiredLSR = {
        language: desiredLocale.language,
        script: desiredLocale.script || '',
        region: desiredLocale.region || '',
    };
    var supportedLSR = {
        language: supportedLocale.language,
        script: supportedLocale.script || '',
        region: supportedLocale.region || '',
    };
    var matchingDistance = 0;
    var data = processData();
    if (desiredLSR.language !== supportedLSR.language) {
        matchingDistance += findMatchingDistanceForLSR({
            language: desiredLocale.language,
            script: '',
            region: '',
        }, {
            language: supportedLocale.language,
            script: '',
            region: '',
        }, data);
    }
    if (desiredLSR.script !== supportedLSR.script) {
        matchingDistance += findMatchingDistanceForLSR({
            language: desiredLocale.language,
            script: desiredLSR.script,
            region: '',
        }, {
            language: supportedLocale.language,
            script: supportedLSR.script,
            region: '',
        }, data);
    }
    if (desiredLSR.region !== supportedLSR.region) {
        matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data);
    }
    return matchingDistance;
}
function findBestMatch(requestedLocales, supportedLocales, threshold) {
    if (threshold === void 0) { threshold = DEFAULT_MATCHING_THRESHOLD; }
    var lowestDistance = Infinity;
    var result = {
        matchedDesiredLocale: '',
        distances: {},
    };
    requestedLocales.forEach(function (desired, i) {
        if (!result.distances[desired]) {
            result.distances[desired] = {};
        }
        supportedLocales.forEach(function (supported) {
            // Add some weight to the distance based on the order of the supported locales
            // Add penalty for the order of the requested locales, which currently is 0 since ECMA-402
            // doesn't really have room for weighted locales like `en; q=0.1`
            var distance = findMatchingDistance(desired, supported) + 0 + i * 40;
            result.distances[desired][supported] = distance;
            if (distance < lowestDistance) {
                lowestDistance = distance;
                result.matchedDesiredLocale = desired;
                result.matchedSupportedLocale = supported;
            }
        });
    });
    if (lowestDistance >= threshold) {
        result.matchedDesiredLocale = undefined;
        result.matchedSupportedLocale = undefined;
    }
    return result;
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js

/**
 * https://tc39.es/ecma402/#sec-bestfitmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */
function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var foundLocale;
    var extension;
    var noExtensionLocales = [];
    var noExtensionLocaleMap = requestedLocales.reduce(function (all, l) {
        var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, '');
        noExtensionLocales.push(noExtensionLocale);
        all[noExtensionLocale] = l;
        return all;
    }, {});
    var result = findBestMatch(noExtensionLocales, availableLocales);
    if (result.matchedSupportedLocale && result.matchedDesiredLocale) {
        foundLocale = result.matchedSupportedLocale;
        extension =
            noExtensionLocaleMap[result.matchedDesiredLocale].slice(result.matchedDesiredLocale.length) || undefined;
    }
    if (!foundLocale) {
        return { locale: getDefaultLocale() };
    }
    return {
        locale: foundLocale,
        extension: extension,
    };
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUValue.js

function CanonicalizeUValue(ukey, uvalue) {
    // TODO: Implement algorithm for CanonicalizeUValue per https://tc39.es/ecma402/#sec-canonicalizeuvalue
    var lowerValue = uvalue.toLowerCase();
    invariant(ukey !== undefined, "ukey must be defined");
    var canonicalized = lowerValue;
    return canonicalized;
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeUnicodeLocaleId.js
function CanonicalizeUnicodeLocaleId(locale) {
    return Intl.getCanonicalLocales(locale)[0];
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/InsertUnicodeExtensionAndCanonicalize.js


function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
    invariant(locale.indexOf('-u-') === -1, 'Expected locale to not have a Unicode locale extension');
    var extension = '-u';
    for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
        var attr = attributes_1[_i];
        extension += "-".concat(attr);
    }
    for (var _a = 0, keywords_1 = keywords; _a < keywords_1.length; _a++) {
        var kw = keywords_1[_a];
        var key = kw.key, value = kw.value;
        extension += "-".concat(key);
        if (value !== '') {
            extension += "-".concat(value);
        }
    }
    if (extension === '-u') {
        return CanonicalizeUnicodeLocaleId(locale);
    }
    var privateIndex = locale.indexOf('-x-');
    var newLocale;
    if (privateIndex === -1) {
        newLocale = locale + extension;
    }
    else {
        var preExtension = locale.slice(0, privateIndex);
        var postExtension = locale.slice(privateIndex);
        newLocale = preExtension + extension + postExtension;
    }
    return CanonicalizeUnicodeLocaleId(newLocale);
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js
/**
 * https://tc39.es/ecma402/#sec-bestavailablelocale
 * @param availableLocales
 * @param locale
 */
function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
        if (availableLocales.indexOf(candidate) > -1) {
            return candidate;
        }
        var pos = candidate.lastIndexOf('-');
        if (!~pos) {
            return undefined;
        }
        if (pos >= 2 && candidate[pos - 2] === '-') {
            pos -= 2;
        }
        candidate = candidate.slice(0, pos);
    }
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js


/**
 * https://tc39.es/ecma402/#sec-lookupmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */
function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = { locale: '' };
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, '');
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
        if (availableLocale) {
            result.locale = availableLocale;
            if (locale !== noExtensionLocale) {
                result.extension = locale.slice(noExtensionLocale.length, locale.length);
            }
            return result;
        }
    }
    result.locale = getDefaultLocale();
    return result;
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionComponents.js

function UnicodeExtensionComponents(extension) {
    invariant(extension === extension.toLowerCase(), 'Expected extension to be lowercase');
    invariant(extension.slice(0, 3) === '-u-', 'Expected extension to be a Unicode locale extension');
    var attributes = [];
    var keywords = [];
    var keyword;
    var size = extension.length;
    var k = 3;
    while (k < size) {
        var e = extension.indexOf('-', k);
        var len = void 0;
        if (e === -1) {
            len = size - k;
        }
        else {
            len = e - k;
        }
        var subtag = extension.slice(k, k + len);
        invariant(len >= 2, 'Expected a subtag to have at least 2 characters');
        if (keyword === undefined && len != 2) {
            if (attributes.indexOf(subtag) === -1) {
                attributes.push(subtag);
            }
        }
        else if (len === 2) {
            keyword = { key: subtag, value: '' };
            if (keywords.find(function (k) { return k.key === (keyword === null || keyword === void 0 ? void 0 : keyword.key); }) === undefined) {
                keywords.push(keyword);
            }
        }
        else if ((keyword === null || keyword === void 0 ? void 0 : keyword.value) === '') {
            keyword.value = subtag;
        }
        else {
            invariant(keyword !== undefined, 'Expected keyword to be defined');
            keyword.value += '-' + subtag;
        }
        k += len + 1;
    }
    return { attributes: attributes, keywords: keywords };
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js






/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */
function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var _a;
    var matcher = options.localeMatcher;
    var r;
    if (matcher === 'lookup') {
        r = LookupMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    else {
        r = BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale);
    }
    if (r == null) {
        r = {
            locale: getDefaultLocale(),
            extension: '',
        };
    }
    var foundLocale = r.locale;
    var foundLocaleData = localeData[foundLocale];
    // TODO: We can't really guarantee that the locale data is available
    // invariant(
    //   foundLocaleData !== undefined,
    //   `Missing locale data for ${foundLocale}`
    // )
    var result = { locale: 'en', dataLocale: foundLocale };
    var components;
    var keywords;
    if (r.extension) {
        components = UnicodeExtensionComponents(r.extension);
        keywords = components.keywords;
    }
    else {
        keywords = [];
    }
    var supportedKeywords = [];
    var _loop_1 = function (key) {
        // TODO: Shouldn't default to empty array, see TODO above
        var keyLocaleData = (_a = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key]) !== null && _a !== void 0 ? _a : [];
        invariant(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
        var value = keyLocaleData[0];
        invariant(value === undefined || typeof value === 'string', "value must be a string or undefined");
        var supportedKeyword = void 0;
        var entry = keywords.find(function (k) { return k.key === key; });
        if (entry) {
            var requestedValue = entry.value;
            if (requestedValue !== '') {
                if (keyLocaleData.indexOf(requestedValue) > -1) {
                    value = requestedValue;
                    supportedKeyword = {
                        key: key,
                        value: value,
                    };
                }
            }
            else if (keyLocaleData.indexOf('true') > -1) {
                value = 'true';
                supportedKeyword = {
                    key: key,
                    value: value,
                };
            }
        }
        var optionsValue = options[key];
        invariant(optionsValue == null || typeof optionsValue === 'string', "optionsValue must be a string or undefined");
        if (typeof optionsValue === 'string') {
            var ukey = key.toLowerCase();
            optionsValue = CanonicalizeUValue(ukey, optionsValue);
            if (optionsValue === '') {
                optionsValue = 'true';
            }
        }
        if (optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1) {
            value = optionsValue;
            supportedKeyword = undefined;
        }
        if (supportedKeyword) {
            supportedKeywords.push(supportedKeyword);
        }
        result[key] = value;
    };
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
        var key = relevantExtensionKeys_1[_i];
        _loop_1(key);
    }
    var supportedAttributes = [];
    if (supportedKeywords.length > 0) {
        supportedAttributes = [];
        foundLocale = InsertUnicodeExtensionAndCanonicalize(foundLocale, supportedAttributes, supportedKeywords);
    }
    result.locale = foundLocale;
    return result;
}

;// ./node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js


/**
 * https://tc39.es/ecma402/#sec-lookupsupportedlocales
 * @param availableLocales
 * @param requestedLocales
 */
function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, '');
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
        if (availableLocale) {
            subset.push(availableLocale);
        }
    }
    return subset;
}

;// ./node_modules/@formatjs/intl-localematcher/lib/index.js


function match(requestedLocales, availableLocales, defaultLocale, opts) {
    return ResolveLocale(availableLocales, CanonicalizeLocaleList(requestedLocales), {
        localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || 'best fit',
    }, [], {}, function () { return defaultLocale; }).locale;
}




/***/ }),

/***/ "./node_modules/@formatjs/intl-segmenter/polyfill-force.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var segmenter_1 = __webpack_require__("./node_modules/@formatjs/intl-segmenter/src/segmenter.js");
Object.defineProperty(Intl, 'Segmenter', {
    value: segmenter_1.Segmenter,
    enumerable: false,
    writable: true,
    configurable: true,
});


/***/ }),

/***/ "./node_modules/@formatjs/intl-segmenter/src/cldr-segmentation-rules.generated.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SegmentationRules = void 0;
/* @generated */
// prettier-ignore
exports.SegmentationRules = {
    "de": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "Port.",
                "Alt.",
                "Di.",
                "Ges.",
                "frz.",
                "entspr.",
                "Gebr.",
                "erw.",
                "Frl.",
                "Inh.",
                "k.u.k.",
                "Ca.",
                "J.D.",
                "Ausg.",
                "evtl.",
                "So.",
                "i.B.",
                "s.a.",
                "kgl.",
                "Sept.",
                "o.B.",
                "Sa.",
                "ev.",
                "Dez.",
                "am.",
                "i.R.",
                "eigtl.",
                "i.J.",
                "u.U.",
                "G.",
                "z.Hd.",
                "u.A.w.g.",
                "Kl.",
                "Spezif.",
                "Obj.",
                "Ing.",
                "D. h.",
                "Folg.",
                "Akt.",
                "i.A.",
                "Msp.",
                "U.U.",
                "Chr.",
                "R.",
                "Einh.",
                "schwäb.",
                "Vgl.",
                "Aug.",
                "Dipl.-Ing.",
                "W.",
                "B.",
                "U. U.",
                "J.",
                "Fa.",
                "Mo.",
                "n.u.Z.",
                "Op.",
                "Mrd.",
                "e.h.",
                "Hr.",
                "Hrn.",
                "Ztr.",
                "k. u. k.",
                "Bibl.",
                "d.Ä.",
                "b.",
                "M.",
                "i.H.",
                "v.R.w.",
                "o.A.",
                "St.",
                "Dr.",
                "Fn.",
                "Abs.",
                "Rd.",
                "Dtzd.",
                "Jahrh.",
                "Z.",
                "Std.",
                "n. Chr.",
                "möbl.",
                "tägl.",
                "gest.",
                "gesch.",
                "z.B.",
                "Hbf.",
                "Abt.",
                "A.M.",
                "e.Wz.",
                "v.T.",
                "Nov.",
                "z.",
                "Prot.",
                "U.S.",
                "Wg.",
                "u.v.a.",
                "Adr.",
                "App.",
                "ggf.",
                "ggfs.",
                "Jan.",
                "O.",
                "Rel.",
                "od.",
                "Pfd.",
                "a.a.O.",
                "p.Adr.",
                "P.",
                "Gem.",
                "v. Chr.",
                "Art.",
                "z.Z.",
                "S.A.",
                "i.V.",
                "verh.",
                "Ausschl.",
                "m.W.",
                "Dir.",
                "Verf.",
                "Sek.",
                "r.",
                "Chin.",
                "Feb.",
                "Int.",
                "Sep.",
                "Gesch.",
                "schweiz.",
                "Bed.",
                "a.Rh.",
                "jew.",
                "vgl.",
                "a.M.",
                "Str.",
                "exkl.",
                "gek.",
                "Erf.",
                "u.Ä.",
                "ehem.",
                "näml.",
                "u. Z.",
                "v. u. Z.",
                "sog.",
                "C.",
                "Dipl.-Kfm.",
                "mtl.",
                "Hrsg.",
                "Qu.",
                "röm.",
                "u.",
                "U.",
                "Adj.",
                "Kap.",
                "hpts.",
                "a.D.",
                "gedr.",
                "Best.",
                "N.",
                "v.u.Z.",
                "Phys.",
                "Fr.",
                "d.J.",
                "Reg.-Bez.",
                "m.E.",
                "schles.",
                "Max.",
                "Ltd.",
                "südd.",
                "inkl.",
                "geb.",
                "Ggf.",
                "Inc.",
                "kath.",
                "kfm.",
                "Nr.",
                "Proz.",
                "Dim.",
                "verw.",
                "Reg.",
                "Dat.",
                "Evtl.",
                "led.",
                "F.",
                "Test.",
                "Schr.",
                "Do.",
                "PIN.",
                "Z. Zt.",
                "v.Chr.",
                "Tägl.",
                "s.",
                "amtl.",
                "Temp.",
                "Mind.",
                "e.V.",
                "Abw.",
                "P.M.",
                "F.f.",
                "a.a.S.",
                "Mod.",
                "Co.",
                "Min.",
                "Allg.",
                "Geograph.",
                "Jr.",
                "Urspr.",
                "Apr.",
                "Z. B.",
                "v.H.",
                "A.",
                "einschl.",
                "Trans.",
                "zzgl.",
                "StR.",
                "Fam.",
                "I.",
                "jhrl.",
                "u.a.",
                "Ben.",
                "o.g.",
                "Kfm.",
                "Konv.",
                "Mi.",
                "L.",
                "beil.",
                "T.",
                "Ursprüngl.",
                "röm.-kath.",
                "Okt.",
                "u.ä.",
                "Tel.",
                "D.",
                "Ber.",
                "Kop.",
                "Mio.",
                "Y.",
                "U.S.A.",
                "v. H.",
                "Forts. f.",
                "Rep.",
                "Hptst.",
                "österr."
            ],
            "variables": {}
        }
    },
    "el": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [],
            "variables": {
                "$STerm": "((?:[!;\\?\\u037E\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)"
            }
        }
    },
    "en": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "L.P.",
                "Alt.",
                "Approx.",
                "E.G.",
                "O.",
                "Maj.",
                "Misc.",
                "P.O.",
                "J.D.",
                "Jam.",
                "Card.",
                "Dec.",
                "Sept.",
                "MR.",
                "Long.",
                "Hat.",
                "G.",
                "Link.",
                "DC.",
                "D.C.",
                "M.T.",
                "Hz.",
                "Mrs.",
                "By.",
                "Act.",
                "Var.",
                "N.V.",
                "Aug.",
                "B.",
                "S.A.",
                "Up.",
                "Job.",
                "Num.",
                "M.I.T.",
                "Ok.",
                "Org.",
                "Ex.",
                "Cont.",
                "U.",
                "Mart.",
                "Fn.",
                "Abs.",
                "Lt.",
                "OK.",
                "Z.",
                "E.",
                "Kb.",
                "Est.",
                "A.M.",
                "L.A.",
                "Prof.",
                "U.S.",
                "Nov.",
                "Ph.D.",
                "Mar.",
                "I.T.",
                "exec.",
                "Jan.",
                "N.Y.",
                "X.",
                "Md.",
                "Op.",
                "vs.",
                "D.A.",
                "A.D.",
                "R.L.",
                "P.M.",
                "Or.",
                "M.R.",
                "Cap.",
                "PC.",
                "Feb.",
                "Exec.",
                "I.e.",
                "Sep.",
                "Gb.",
                "K.",
                "U.S.C.",
                "Mt.",
                "S.",
                "A.S.",
                "C.O.D.",
                "Capt.",
                "Col.",
                "In.",
                "C.F.",
                "Adj.",
                "AD.",
                "I.D.",
                "Mgr.",
                "R.T.",
                "B.V.",
                "M.",
                "Conn.",
                "Yr.",
                "Rev.",
                "Phys.",
                "pp.",
                "Ms.",
                "To.",
                "Sgt.",
                "J.K.",
                "Nr.",
                "Jun.",
                "Fri.",
                "S.A.R.",
                "Lev.",
                "Lt.Cdr.",
                "Def.",
                "F.",
                "Do.",
                "Joe.",
                "Id.",
                "Mr.",
                "Dept.",
                "Is.",
                "Pvt.",
                "Diff.",
                "Hon.B.A.",
                "Q.",
                "Mb.",
                "On.",
                "Min.",
                "J.B.",
                "Ed.",
                "AB.",
                "A.",
                "S.p.A.",
                "I.",
                "a.m.",
                "Comm.",
                "Go.",
                "VS.",
                "L.",
                "All.",
                "PP.",
                "P.V.",
                "T.",
                "K.R.",
                "Etc.",
                "D.",
                "Adv.",
                "Lib.",
                "E.g.",
                "Pro.",
                "U.S.A.",
                "S.E.",
                "AA.",
                "Rep.",
                "Sq.",
                "As."
            ],
            "variables": {}
        }
    },
    "es": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "Rdos.",
                "JJ.OO.",
                "Sres.",
                "fig.",
                "may.",
                "RR.HH.",
                "oct.",
                "cap.",
                "mié.",
                "doc.",
                "Excmo.",
                "Trab.",
                "Excmos.",
                "Kit.",
                "Inc.",
                "FF.CC.",
                "DC.",
                "ago.",
                "trad.",
                "SA.",
                "Rvdos.",
                "ed.",
                "Exmo.",
                "jul.",
                "col.",
                "RAM.",
                "Srtas.",
                "ene.",
                "Rol.",
                "Fabric.",
                "Comm.",
                "vid.",
                "Da.",
                "dic.",
                "ss.",
                "abr.",
                "ntra.",
                "Sra.",
                "dtor.",
                "cf.",
                "dom.",
                "prov.",
                "Emm.",
                "Sr.",
                "licdo.",
                "p.ej.",
                "bol.",
                "figs.",
                "Vda.",
                "Dr.",
                "ntro.",
                "Desv.",
                "O.M.",
                "Ldo.",
                "Drs.",
                "sáb.",
                "feb.",
                "Ltda.",
                "Lcda.",
                "Exma.",
                "C.V.",
                "SS.MM.",
                "Lda.",
                "U.S.",
                "hnos.",
                "R.D.",
                "Korn.",
                "v.gr.",
                "vs.",
                "Ilmas.",
                "Rdo.",
                "ej.",
                "vie.",
                "jue.",
                "a. C.",
                "Ilmos.",
                "e. c.",
                "Excma.",
                "afma.",
                "licda.",
                "Em.",
                "K.",
                "sras.",
                "MM.",
                "fund.",
                "Mons.",
                "Lcdo.",
                "afmo.",
                "C.",
                "A.C.",
                "dptos.",
                "Col.",
                "Srta.",
                "Av.",
                "Ant.",
                "depto.",
                "Var.",
                "H.P.",
                "D.",
                "M.",
                "C.P.",
                "Rev.",
                "Rvdmos.",
                "Fr.",
                "Ilmo.",
                "afmos.",
                "Ltd.",
                "afmas.",
                "prof.",
                "lun.",
                "SS.AA.",
                "Sol.",
                "nov.",
                "mss.",
                "Dña.",
                "Seg.",
                "mar.",
                "Rvdmo.",
                "Reg.",
                "ms.",
                "Sras.",
                "sres.",
                "U.S.A.",
                "Sta.",
                "Sdad.",
                "Dra.",
                "srs.",
                "R.U.",
                "deptos.",
                "dpto.",
                "jun.",
                "bco.",
                "Cía.",
                "Id.",
                "Mr.",
                "e.g.",
                "C.S.",
                "Excmas.",
                "Dª.",
                "Rvdo.",
                "Lic.",
                "cfr.",
                "Corp.",
                "Dto.",
                "Ilma.",
                "L.",
                "All.",
                "PP.",
                "d. C.",
                "Ltdo.",
                "mtro.",
                "Mrs.",
                "Desc.",
                "Avda.",
                "Exmas.",
                "a. e. c.",
                "Bien.",
                "Exmos.",
                "AA.",
                "Sto.",
                "CA.",
                "sept.",
                "Exc.",
                "c/c."
            ],
            "variables": {}
        }
    },
    "fr": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "aux.",
                "config.",
                "collab.",
                "M.",
                "dim.",
                "imprim.",
                "oct.",
                "syst.",
                "bull.",
                "MM.",
                "doc.",
                "P.O.",
                "hôp.",
                "Mart.",
                "juil.",
                "broch.",
                "adr.",
                "symb.",
                "C.",
                "anc.",
                "voit.",
                "Jr.",
                "graph.",
                "dir.",
                "éd.",
                "fig.",
                "édit.",
                "niv.",
                "quart.",
                "cam.",
                "éval.",
                "anon.",
                "réf.",
                "Comm.",
                "Prof.",
                "févr.",
                "indus.",
                "DC.",
                "équiv.",
                "illustr.",
                "acoust.",
                "nov.",
                "L.",
                "All.",
                "U.S.",
                "S.M.A.R.T.",
                "sept.",
                "avr.",
                "jeu.",
                "dest.",
                "P.-D. G.",
                "ill.",
                "coll.",
                "encycl.",
                "mer.",
                "Desc.",
                "ven.",
                "P.",
                "lun.",
                "Inc.",
                "sam.",
                "D.",
                "append.",
                "Var.",
                "categ.",
                "janv.",
                "S.A.",
                "imm.",
                "U.S.A.",
                "mar.",
                "exempl.",
                "déc.",
                "ann.",
                "U.",
                "synth.",
                "dict.",
                "av. J.-C.",
                "W.",
                "Op.",
                "ap. J.-C.",
                "gouv.",
                "trav. publ."
            ],
            "variables": {}
        }
    },
    "it": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "N.B.",
                "div.",
                "a.C.",
                "fig.",
                "d.p.R.",
                "c.c.p.",
                "Cfr.",
                "vol.",
                "Geom.",
                "O.d.G.",
                "S.p.A.",
                "ver.",
                "N.d.A.",
                "dott.",
                "arch.",
                "d.C.",
                "N.d.T.",
                "rag.",
                "Sig.",
                "Mod.",
                "pag.",
                "dr.",
                "tav.",
                "N.d.E.",
                "DC.",
                "mitt.",
                "Ing.",
                "int.",
                "on.",
                "C.P.",
                "ag.",
                "L.",
                "U.S.",
                "S.M.A.R.T.",
                "p.i.",
                "tab.",
                "Ltd.",
                "Liv.",
                "D.",
                "U.S.A.",
                "sez.",
                "avv.",
                "S.A.R.",
                "all.",
                "p."
            ],
            "variables": {}
        }
    },
    "ja": {
        "word": {
            "segmentRules": {
                "13.3": {
                    "after": "$Hiragana",
                    "before": "$Hiragana",
                    "breaks": false
                },
                "13.4": {
                    "after": "$Ideographic",
                    "before": "$Ideographic",
                    "breaks": false
                }
            },
            "suppressions": [],
            "variables": {
                "$Hiragana": "((?:[\\u3041-\\u3096\\u309D-\\u309F]|\\uD82C[\\uDC01-\\uDD1F\\uDD32\\uDD50-\\uDD52]|\\uD83C\\uDE00)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Ideographic": "((?:[\\u3005-\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B\\uDFE4|[\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82C[\\uDD70-\\uDEFB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)"
            }
        }
    },
    "pt": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "psicol.",
                "fig.",
                "compl.",
                "rep.",
                "cap.",
                "doc.",
                "fisiol.",
                "dipl.",
                "astron.",
                "port.",
                "eletrôn.",
                "geom.",
                "mov.",
                "ago.",
                "trad.",
                "arquit.",
                "dez.",
                "ed.",
                "apt.",
                "Exmo.",
                "col.",
                "ff.",
                "univ.",
                "res.",
                "R.",
                "transp.",
                "D.C",
                "l.",
                "des.",
                "fev.",
                "abr.",
                "liter.",
                "lat.",
                "Dir.",
                "cf.",
                "adm.",
                "fot.",
                "p.m.",
                "P.M.",
                "créd.",
                "jur.",
                "com.",
                "anat.",
                "dir.",
                "end.",
                "fís.",
                "E.",
                "Est.",
                "cont.",
                "matem.",
                "Drs.",
                "gên.",
                "neol.",
                "pág.",
                "índ.",
                "Ltda.",
                "Exma.",
                "esp.",
                "ingl.",
                "tecnol.",
                "Mar.",
                "símb.",
                "Pe.",
                "pal.",
                "filos.",
                "V.T.",
                "fasc.",
                "vs.",
                "mai.",
                "S.A.",
                "profa.",
                "N.Sra.",
                "r.s.v.p.",
                "cel.",
                "mat.",
                "abrev.",
                "out.",
                "long.",
                "aux.",
                "arit.",
                "aer.",
                "jul.",
                "lin.",
                "S.",
                "méd.",
                "odontol.",
                "org.",
                "A.C.",
                "jun.",
                "déb.",
                "Av.",
                "álg.",
                "sup.",
                "fl.",
                "odont.",
                "caps.",
                "relat.",
                "organiz.",
                "hist.",
                "Fr.",
                "Ilmo.",
                "fem.",
                "ap.",
                "Ltd.",
                "pol.",
                "séc.",
                "prof.",
                "cx.",
                "nov.",
                "quím.",
                "mús.",
                "agric.",
                "mar.",
                "W.C.",
                "fr.",
                "cat.",
                "jan.",
                "pron.",
                "rel.",
                "autom.",
                "Sta.",
                "Dra.",
                "p.",
                "tel.",
                "div.",
                "p. ex.",
                "a.C.",
                "bras.",
                "Alm.",
                "Dr.",
                "comp.",
                "pq.",
                "arqueol.",
                "náut.",
                "biogr.",
                "f.",
                "círc.",
                "fac.",
                "d.C.",
                "apart.",
                "ex.",
                "Jr.",
                "set.",
                "tec.",
                "sociol.",
                "gram.",
                "ind.",
                "Ilma.",
                "vol.",
                "eng.",
                "rod.",
                "Ph.D.",
                "Dras.",
                "pp.",
                "elem.",
                "máq.",
                "cód.",
                "eletr.",
                "prod.",
                "ref.",
                "fil.",
                "a.m.",
                "A.M",
                "obs.",
                "N.T.",
                "contab.",
                "Sto.",
                "lit.",
                "educ.",
                "rementente",
                "desc.",
                "próx."
            ],
            "variables": {}
        }
    },
    "root": {
        "grapheme": {
            "segmentRules": {
                "11": {
                    "after": "$ExtPict",
                    "before": "$ExtPict$Extend*$ZWJ",
                    "breaks": false
                },
                "12": {
                    "after": "$RI",
                    "before": "^($RI$RI)*$RI",
                    "breaks": false
                },
                "13": {
                    "after": "$RI",
                    "before": "[^\\uDDE6-\\uDDFF]($RI$RI)*$RI",
                    "breaks": false
                },
                "3": {
                    "after": "$LF",
                    "before": "$CR",
                    "breaks": false
                },
                "4": {
                    "before": "($Control|$CR|$LF)",
                    "breaks": true
                },
                "5": {
                    "after": "($Control|$CR|$LF)",
                    "breaks": true
                },
                "6": {
                    "after": "($L|$V|$LV|$LVT)",
                    "before": "$L",
                    "breaks": false
                },
                "7": {
                    "after": "($V|$T)",
                    "before": "($LV|$V)",
                    "breaks": false
                },
                "8": {
                    "after": "$T",
                    "before": "($LVT|$T)",
                    "breaks": false
                },
                "9": {
                    "after": "($Extend|$ZWJ)",
                    "breaks": false
                },
                "9.1": {
                    "after": "$SpacingMark",
                    "breaks": false
                },
                "9.2": {
                    "before": "$Prepend",
                    "breaks": false
                },
                "9.3": {
                    "after": "$LinkingConsonant",
                    "before": "$LinkingConsonant$ExtCccZwj*$ConjunctLinker$ExtCccZwj*",
                    "breaks": false
                }
            },
            "suppressions": [],
            "variables": {
                "$CR": "\\r",
                "$ConjunctLinker": "[\\u094D\\u09CD\\u0ACD\\u0B4D\\u0C4D\\u0D4D]",
                "$ConjunctLinkingScripts": "(?:[\\u0900-\\u0950\\u0955-\\u0963\\u0966-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09FE\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AF1\\u0AF9-\\u0AFF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B77\\u0C00-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3C-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58-\\u0C5A\\u0C5D\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C77-\\u0C7F\\u0D00-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4F\\u0D54-\\u0D63\\u0D66-\\u0D7F\\uA8E0-\\uA8FF]|\\uD806[\\uDF00-\\uDF09])",
                "$Control": "(?:[\\0-\\t\\x0B\\f\\x0E-\\x1F\\x7F-\\x9F\\xAD\\u061C\\u180E\\u200B\\u200E\\u200F\\u2028-\\u202E\\u2060-\\u206F\\uFEFF\\uFFF0-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40[\\uDC00-\\uDC1F\\uDC80-\\uDCFF\\uDDF0-\\uDFFF]|[\\uDB41-\\uDB43][\\uDC00-\\uDFFF])",
                "$ExtCccZwj": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09BE\\u09C1-\\u09C4\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01\\u0B3C\\u0B3E\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE\\u0BC0\\u0BCD\\u0BD7\\u0C00\\u0C04\\u0C3C\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC0\\u0CC2\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D00\\u0D01\\u0D3B\\u0D3C\\u0D3E\\u0D41-\\u0D44\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81\\u0DCA\\u0DCF\\u0DD2-\\u0DD4\\u0DD6\\u0DDF\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B03\\u1B34-\\u1B3D\\u1B42-\\u1B44\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BAD\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF3\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8\\u1CF9\\u1DC0-\\u1DFF\\u200D\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA82C\\uA8C4\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA951\\uA953\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9BD\\uA9C0\\uA9E5\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEC\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC01\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD2B\\uDD2D-\\uDD34\\uDD73\\uDD80\\uDD81\\uDDB6-\\uDDBE\\uDDC0\\uDDC9-\\uDDCC\\uDDCF\\uDE2F-\\uDE31\\uDE34-\\uDE37\\uDE3E\\uDE41\\uDEDF\\uDEE3-\\uDEEA\\uDF00\\uDF01\\uDF3B\\uDF3C\\uDF3E\\uDF40\\uDF4D\\uDF57\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8\\uDFBB-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFC9\\uDFCE-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC38-\\uDC3F\\uDC42-\\uDC44\\uDC46\\uDC5E\\uDCB0\\uDCB3-\\uDCB8\\uDCBA\\uDCBD\\uDCBF\\uDCC0\\uDCC2\\uDCC3\\uDDAF\\uDDB2-\\uDDB5\\uDDBC\\uDDBD\\uDDBF\\uDDC0\\uDDDC\\uDDDD\\uDE33-\\uDE3A\\uDE3D\\uDE3F\\uDE40\\uDEAB\\uDEAD\\uDEB0-\\uDEB7\\uDF1D\\uDF1F\\uDF22-\\uDF25\\uDF27-\\uDF2B]|\\uD806[\\uDC2F-\\uDC37\\uDC39\\uDC3A\\uDD30\\uDD3B-\\uDD3E\\uDD43\\uDDD4-\\uDDD7\\uDDDA\\uDDDB\\uDDE0\\uDE01-\\uDE0A\\uDE33-\\uDE38\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE56\\uDE59-\\uDE5B\\uDE8A-\\uDE96\\uDE98\\uDE99]|\\uD807[\\uDC30-\\uDC36\\uDC38-\\uDC3D\\uDC3F\\uDC92-\\uDCA7\\uDCAA-\\uDCB0\\uDCB2\\uDCB3\\uDCB5\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD90\\uDD91\\uDD95\\uDD97\\uDEF3\\uDEF4\\uDF00\\uDF01\\uDF36-\\uDF3A\\uDF40-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD29\\uDD2D-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
                "$ExtPict": "(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2605\\u2607-\\u2612\\u2614-\\u2685\\u2690-\\u2705\\u2708-\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2767\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDCFF\\uDD0D-\\uDD0F\\uDD2F\\uDD6C-\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAD-\\uDDE5\\uDE01-\\uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDFFA]|\\uD83D[\\uDC00-\\uDD3D\\uDD46-\\uDE4F\\uDE80-\\uDEFF\\uDF74-\\uDF7F\\uDFD5-\\uDFFF]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDEFF]|\\uD83F[\\uDC00-\\uDFFD])",
                "$Extend": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0902\\u093A\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0957\\u0962\\u0963\\u0981\\u09BC\\u09BE\\u09C1-\\u09C4\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01\\u0B3C\\u0B3E\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE\\u0BC0\\u0BCD\\u0BD7\\u0C00\\u0C04\\u0C3C\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81\\u0CBC\\u0CBF\\u0CC0\\u0CC2\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D00\\u0D01\\u0D3B\\u0D3C\\u0D3E\\u0D41-\\u0D44\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81\\u0DCA\\u0DCF\\u0DD2-\\u0DD4\\u0DD6\\u0DDF\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4\\u17B5\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A1B\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B03\\u1B34-\\u1B3D\\u1B42-\\u1B44\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BAD\\u1BE6\\u1BE8\\u1BE9\\u1BED\\u1BEF-\\u1BF3\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1CF4\\u1CF8\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA82C\\uA8C4\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA951\\uA953\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uA9BD\\uA9C0\\uA9E5\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAA7C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEC\\uAAED\\uAAF6\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC01\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC81\\uDCB3-\\uDCB6\\uDCB9\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD2B\\uDD2D-\\uDD34\\uDD73\\uDD80\\uDD81\\uDDB6-\\uDDBE\\uDDC0\\uDDC9-\\uDDCC\\uDDCF\\uDE2F-\\uDE31\\uDE34-\\uDE37\\uDE3E\\uDE41\\uDEDF\\uDEE3-\\uDEEA\\uDF00\\uDF01\\uDF3B\\uDF3C\\uDF3E\\uDF40\\uDF4D\\uDF57\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8\\uDFBB-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFC9\\uDFCE-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC38-\\uDC3F\\uDC42-\\uDC44\\uDC46\\uDC5E\\uDCB0\\uDCB3-\\uDCB8\\uDCBA\\uDCBD\\uDCBF\\uDCC0\\uDCC2\\uDCC3\\uDDAF\\uDDB2-\\uDDB5\\uDDBC\\uDDBD\\uDDBF\\uDDC0\\uDDDC\\uDDDD\\uDE33-\\uDE3A\\uDE3D\\uDE3F\\uDE40\\uDEAB\\uDEAD\\uDEB0-\\uDEB7\\uDF1D\\uDF1F\\uDF22-\\uDF25\\uDF27-\\uDF2B]|\\uD806[\\uDC2F-\\uDC37\\uDC39\\uDC3A\\uDD30\\uDD3B-\\uDD3E\\uDD43\\uDDD4-\\uDDD7\\uDDDA\\uDDDB\\uDDE0\\uDE01-\\uDE0A\\uDE33-\\uDE38\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE56\\uDE59-\\uDE5B\\uDE8A-\\uDE96\\uDE98\\uDE99]|\\uD807[\\uDC30-\\uDC36\\uDC38-\\uDC3D\\uDC3F\\uDC92-\\uDCA7\\uDCAA-\\uDCB0\\uDCB2\\uDCB3\\uDCB5\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD90\\uDD91\\uDD95\\uDD97\\uDEF3\\uDEF4\\uDF00\\uDF01\\uDF36-\\uDF3A\\uDF40-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD29\\uDD2D-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
                "$L": "[\\u1100-\\u115F\\uA960-\\uA97C]",
                "$LF": "\\n",
                "$LV": "[\\uAC00\\uAC1C\\uAC38\\uAC54\\uAC70\\uAC8C\\uACA8\\uACC4\\uACE0\\uACFC\\uAD18\\uAD34\\uAD50\\uAD6C\\uAD88\\uADA4\\uADC0\\uADDC\\uADF8\\uAE14\\uAE30\\uAE4C\\uAE68\\uAE84\\uAEA0\\uAEBC\\uAED8\\uAEF4\\uAF10\\uAF2C\\uAF48\\uAF64\\uAF80\\uAF9C\\uAFB8\\uAFD4\\uAFF0\\uB00C\\uB028\\uB044\\uB060\\uB07C\\uB098\\uB0B4\\uB0D0\\uB0EC\\uB108\\uB124\\uB140\\uB15C\\uB178\\uB194\\uB1B0\\uB1CC\\uB1E8\\uB204\\uB220\\uB23C\\uB258\\uB274\\uB290\\uB2AC\\uB2C8\\uB2E4\\uB300\\uB31C\\uB338\\uB354\\uB370\\uB38C\\uB3A8\\uB3C4\\uB3E0\\uB3FC\\uB418\\uB434\\uB450\\uB46C\\uB488\\uB4A4\\uB4C0\\uB4DC\\uB4F8\\uB514\\uB530\\uB54C\\uB568\\uB584\\uB5A0\\uB5BC\\uB5D8\\uB5F4\\uB610\\uB62C\\uB648\\uB664\\uB680\\uB69C\\uB6B8\\uB6D4\\uB6F0\\uB70C\\uB728\\uB744\\uB760\\uB77C\\uB798\\uB7B4\\uB7D0\\uB7EC\\uB808\\uB824\\uB840\\uB85C\\uB878\\uB894\\uB8B0\\uB8CC\\uB8E8\\uB904\\uB920\\uB93C\\uB958\\uB974\\uB990\\uB9AC\\uB9C8\\uB9E4\\uBA00\\uBA1C\\uBA38\\uBA54\\uBA70\\uBA8C\\uBAA8\\uBAC4\\uBAE0\\uBAFC\\uBB18\\uBB34\\uBB50\\uBB6C\\uBB88\\uBBA4\\uBBC0\\uBBDC\\uBBF8\\uBC14\\uBC30\\uBC4C\\uBC68\\uBC84\\uBCA0\\uBCBC\\uBCD8\\uBCF4\\uBD10\\uBD2C\\uBD48\\uBD64\\uBD80\\uBD9C\\uBDB8\\uBDD4\\uBDF0\\uBE0C\\uBE28\\uBE44\\uBE60\\uBE7C\\uBE98\\uBEB4\\uBED0\\uBEEC\\uBF08\\uBF24\\uBF40\\uBF5C\\uBF78\\uBF94\\uBFB0\\uBFCC\\uBFE8\\uC004\\uC020\\uC03C\\uC058\\uC074\\uC090\\uC0AC\\uC0C8\\uC0E4\\uC100\\uC11C\\uC138\\uC154\\uC170\\uC18C\\uC1A8\\uC1C4\\uC1E0\\uC1FC\\uC218\\uC234\\uC250\\uC26C\\uC288\\uC2A4\\uC2C0\\uC2DC\\uC2F8\\uC314\\uC330\\uC34C\\uC368\\uC384\\uC3A0\\uC3BC\\uC3D8\\uC3F4\\uC410\\uC42C\\uC448\\uC464\\uC480\\uC49C\\uC4B8\\uC4D4\\uC4F0\\uC50C\\uC528\\uC544\\uC560\\uC57C\\uC598\\uC5B4\\uC5D0\\uC5EC\\uC608\\uC624\\uC640\\uC65C\\uC678\\uC694\\uC6B0\\uC6CC\\uC6E8\\uC704\\uC720\\uC73C\\uC758\\uC774\\uC790\\uC7AC\\uC7C8\\uC7E4\\uC800\\uC81C\\uC838\\uC854\\uC870\\uC88C\\uC8A8\\uC8C4\\uC8E0\\uC8FC\\uC918\\uC934\\uC950\\uC96C\\uC988\\uC9A4\\uC9C0\\uC9DC\\uC9F8\\uCA14\\uCA30\\uCA4C\\uCA68\\uCA84\\uCAA0\\uCABC\\uCAD8\\uCAF4\\uCB10\\uCB2C\\uCB48\\uCB64\\uCB80\\uCB9C\\uCBB8\\uCBD4\\uCBF0\\uCC0C\\uCC28\\uCC44\\uCC60\\uCC7C\\uCC98\\uCCB4\\uCCD0\\uCCEC\\uCD08\\uCD24\\uCD40\\uCD5C\\uCD78\\uCD94\\uCDB0\\uCDCC\\uCDE8\\uCE04\\uCE20\\uCE3C\\uCE58\\uCE74\\uCE90\\uCEAC\\uCEC8\\uCEE4\\uCF00\\uCF1C\\uCF38\\uCF54\\uCF70\\uCF8C\\uCFA8\\uCFC4\\uCFE0\\uCFFC\\uD018\\uD034\\uD050\\uD06C\\uD088\\uD0A4\\uD0C0\\uD0DC\\uD0F8\\uD114\\uD130\\uD14C\\uD168\\uD184\\uD1A0\\uD1BC\\uD1D8\\uD1F4\\uD210\\uD22C\\uD248\\uD264\\uD280\\uD29C\\uD2B8\\uD2D4\\uD2F0\\uD30C\\uD328\\uD344\\uD360\\uD37C\\uD398\\uD3B4\\uD3D0\\uD3EC\\uD408\\uD424\\uD440\\uD45C\\uD478\\uD494\\uD4B0\\uD4CC\\uD4E8\\uD504\\uD520\\uD53C\\uD558\\uD574\\uD590\\uD5AC\\uD5C8\\uD5E4\\uD600\\uD61C\\uD638\\uD654\\uD670\\uD68C\\uD6A8\\uD6C4\\uD6E0\\uD6FC\\uD718\\uD734\\uD750\\uD76C\\uD788]",
                "$LVT": "[\\uAC01-\\uAC1B\\uAC1D-\\uAC37\\uAC39-\\uAC53\\uAC55-\\uAC6F\\uAC71-\\uAC8B\\uAC8D-\\uACA7\\uACA9-\\uACC3\\uACC5-\\uACDF\\uACE1-\\uACFB\\uACFD-\\uAD17\\uAD19-\\uAD33\\uAD35-\\uAD4F\\uAD51-\\uAD6B\\uAD6D-\\uAD87\\uAD89-\\uADA3\\uADA5-\\uADBF\\uADC1-\\uADDB\\uADDD-\\uADF7\\uADF9-\\uAE13\\uAE15-\\uAE2F\\uAE31-\\uAE4B\\uAE4D-\\uAE67\\uAE69-\\uAE83\\uAE85-\\uAE9F\\uAEA1-\\uAEBB\\uAEBD-\\uAED7\\uAED9-\\uAEF3\\uAEF5-\\uAF0F\\uAF11-\\uAF2B\\uAF2D-\\uAF47\\uAF49-\\uAF63\\uAF65-\\uAF7F\\uAF81-\\uAF9B\\uAF9D-\\uAFB7\\uAFB9-\\uAFD3\\uAFD5-\\uAFEF\\uAFF1-\\uB00B\\uB00D-\\uB027\\uB029-\\uB043\\uB045-\\uB05F\\uB061-\\uB07B\\uB07D-\\uB097\\uB099-\\uB0B3\\uB0B5-\\uB0CF\\uB0D1-\\uB0EB\\uB0ED-\\uB107\\uB109-\\uB123\\uB125-\\uB13F\\uB141-\\uB15B\\uB15D-\\uB177\\uB179-\\uB193\\uB195-\\uB1AF\\uB1B1-\\uB1CB\\uB1CD-\\uB1E7\\uB1E9-\\uB203\\uB205-\\uB21F\\uB221-\\uB23B\\uB23D-\\uB257\\uB259-\\uB273\\uB275-\\uB28F\\uB291-\\uB2AB\\uB2AD-\\uB2C7\\uB2C9-\\uB2E3\\uB2E5-\\uB2FF\\uB301-\\uB31B\\uB31D-\\uB337\\uB339-\\uB353\\uB355-\\uB36F\\uB371-\\uB38B\\uB38D-\\uB3A7\\uB3A9-\\uB3C3\\uB3C5-\\uB3DF\\uB3E1-\\uB3FB\\uB3FD-\\uB417\\uB419-\\uB433\\uB435-\\uB44F\\uB451-\\uB46B\\uB46D-\\uB487\\uB489-\\uB4A3\\uB4A5-\\uB4BF\\uB4C1-\\uB4DB\\uB4DD-\\uB4F7\\uB4F9-\\uB513\\uB515-\\uB52F\\uB531-\\uB54B\\uB54D-\\uB567\\uB569-\\uB583\\uB585-\\uB59F\\uB5A1-\\uB5BB\\uB5BD-\\uB5D7\\uB5D9-\\uB5F3\\uB5F5-\\uB60F\\uB611-\\uB62B\\uB62D-\\uB647\\uB649-\\uB663\\uB665-\\uB67F\\uB681-\\uB69B\\uB69D-\\uB6B7\\uB6B9-\\uB6D3\\uB6D5-\\uB6EF\\uB6F1-\\uB70B\\uB70D-\\uB727\\uB729-\\uB743\\uB745-\\uB75F\\uB761-\\uB77B\\uB77D-\\uB797\\uB799-\\uB7B3\\uB7B5-\\uB7CF\\uB7D1-\\uB7EB\\uB7ED-\\uB807\\uB809-\\uB823\\uB825-\\uB83F\\uB841-\\uB85B\\uB85D-\\uB877\\uB879-\\uB893\\uB895-\\uB8AF\\uB8B1-\\uB8CB\\uB8CD-\\uB8E7\\uB8E9-\\uB903\\uB905-\\uB91F\\uB921-\\uB93B\\uB93D-\\uB957\\uB959-\\uB973\\uB975-\\uB98F\\uB991-\\uB9AB\\uB9AD-\\uB9C7\\uB9C9-\\uB9E3\\uB9E5-\\uB9FF\\uBA01-\\uBA1B\\uBA1D-\\uBA37\\uBA39-\\uBA53\\uBA55-\\uBA6F\\uBA71-\\uBA8B\\uBA8D-\\uBAA7\\uBAA9-\\uBAC3\\uBAC5-\\uBADF\\uBAE1-\\uBAFB\\uBAFD-\\uBB17\\uBB19-\\uBB33\\uBB35-\\uBB4F\\uBB51-\\uBB6B\\uBB6D-\\uBB87\\uBB89-\\uBBA3\\uBBA5-\\uBBBF\\uBBC1-\\uBBDB\\uBBDD-\\uBBF7\\uBBF9-\\uBC13\\uBC15-\\uBC2F\\uBC31-\\uBC4B\\uBC4D-\\uBC67\\uBC69-\\uBC83\\uBC85-\\uBC9F\\uBCA1-\\uBCBB\\uBCBD-\\uBCD7\\uBCD9-\\uBCF3\\uBCF5-\\uBD0F\\uBD11-\\uBD2B\\uBD2D-\\uBD47\\uBD49-\\uBD63\\uBD65-\\uBD7F\\uBD81-\\uBD9B\\uBD9D-\\uBDB7\\uBDB9-\\uBDD3\\uBDD5-\\uBDEF\\uBDF1-\\uBE0B\\uBE0D-\\uBE27\\uBE29-\\uBE43\\uBE45-\\uBE5F\\uBE61-\\uBE7B\\uBE7D-\\uBE97\\uBE99-\\uBEB3\\uBEB5-\\uBECF\\uBED1-\\uBEEB\\uBEED-\\uBF07\\uBF09-\\uBF23\\uBF25-\\uBF3F\\uBF41-\\uBF5B\\uBF5D-\\uBF77\\uBF79-\\uBF93\\uBF95-\\uBFAF\\uBFB1-\\uBFCB\\uBFCD-\\uBFE7\\uBFE9-\\uC003\\uC005-\\uC01F\\uC021-\\uC03B\\uC03D-\\uC057\\uC059-\\uC073\\uC075-\\uC08F\\uC091-\\uC0AB\\uC0AD-\\uC0C7\\uC0C9-\\uC0E3\\uC0E5-\\uC0FF\\uC101-\\uC11B\\uC11D-\\uC137\\uC139-\\uC153\\uC155-\\uC16F\\uC171-\\uC18B\\uC18D-\\uC1A7\\uC1A9-\\uC1C3\\uC1C5-\\uC1DF\\uC1E1-\\uC1FB\\uC1FD-\\uC217\\uC219-\\uC233\\uC235-\\uC24F\\uC251-\\uC26B\\uC26D-\\uC287\\uC289-\\uC2A3\\uC2A5-\\uC2BF\\uC2C1-\\uC2DB\\uC2DD-\\uC2F7\\uC2F9-\\uC313\\uC315-\\uC32F\\uC331-\\uC34B\\uC34D-\\uC367\\uC369-\\uC383\\uC385-\\uC39F\\uC3A1-\\uC3BB\\uC3BD-\\uC3D7\\uC3D9-\\uC3F3\\uC3F5-\\uC40F\\uC411-\\uC42B\\uC42D-\\uC447\\uC449-\\uC463\\uC465-\\uC47F\\uC481-\\uC49B\\uC49D-\\uC4B7\\uC4B9-\\uC4D3\\uC4D5-\\uC4EF\\uC4F1-\\uC50B\\uC50D-\\uC527\\uC529-\\uC543\\uC545-\\uC55F\\uC561-\\uC57B\\uC57D-\\uC597\\uC599-\\uC5B3\\uC5B5-\\uC5CF\\uC5D1-\\uC5EB\\uC5ED-\\uC607\\uC609-\\uC623\\uC625-\\uC63F\\uC641-\\uC65B\\uC65D-\\uC677\\uC679-\\uC693\\uC695-\\uC6AF\\uC6B1-\\uC6CB\\uC6CD-\\uC6E7\\uC6E9-\\uC703\\uC705-\\uC71F\\uC721-\\uC73B\\uC73D-\\uC757\\uC759-\\uC773\\uC775-\\uC78F\\uC791-\\uC7AB\\uC7AD-\\uC7C7\\uC7C9-\\uC7E3\\uC7E5-\\uC7FF\\uC801-\\uC81B\\uC81D-\\uC837\\uC839-\\uC853\\uC855-\\uC86F\\uC871-\\uC88B\\uC88D-\\uC8A7\\uC8A9-\\uC8C3\\uC8C5-\\uC8DF\\uC8E1-\\uC8FB\\uC8FD-\\uC917\\uC919-\\uC933\\uC935-\\uC94F\\uC951-\\uC96B\\uC96D-\\uC987\\uC989-\\uC9A3\\uC9A5-\\uC9BF\\uC9C1-\\uC9DB\\uC9DD-\\uC9F7\\uC9F9-\\uCA13\\uCA15-\\uCA2F\\uCA31-\\uCA4B\\uCA4D-\\uCA67\\uCA69-\\uCA83\\uCA85-\\uCA9F\\uCAA1-\\uCABB\\uCABD-\\uCAD7\\uCAD9-\\uCAF3\\uCAF5-\\uCB0F\\uCB11-\\uCB2B\\uCB2D-\\uCB47\\uCB49-\\uCB63\\uCB65-\\uCB7F\\uCB81-\\uCB9B\\uCB9D-\\uCBB7\\uCBB9-\\uCBD3\\uCBD5-\\uCBEF\\uCBF1-\\uCC0B\\uCC0D-\\uCC27\\uCC29-\\uCC43\\uCC45-\\uCC5F\\uCC61-\\uCC7B\\uCC7D-\\uCC97\\uCC99-\\uCCB3\\uCCB5-\\uCCCF\\uCCD1-\\uCCEB\\uCCED-\\uCD07\\uCD09-\\uCD23\\uCD25-\\uCD3F\\uCD41-\\uCD5B\\uCD5D-\\uCD77\\uCD79-\\uCD93\\uCD95-\\uCDAF\\uCDB1-\\uCDCB\\uCDCD-\\uCDE7\\uCDE9-\\uCE03\\uCE05-\\uCE1F\\uCE21-\\uCE3B\\uCE3D-\\uCE57\\uCE59-\\uCE73\\uCE75-\\uCE8F\\uCE91-\\uCEAB\\uCEAD-\\uCEC7\\uCEC9-\\uCEE3\\uCEE5-\\uCEFF\\uCF01-\\uCF1B\\uCF1D-\\uCF37\\uCF39-\\uCF53\\uCF55-\\uCF6F\\uCF71-\\uCF8B\\uCF8D-\\uCFA7\\uCFA9-\\uCFC3\\uCFC5-\\uCFDF\\uCFE1-\\uCFFB\\uCFFD-\\uD017\\uD019-\\uD033\\uD035-\\uD04F\\uD051-\\uD06B\\uD06D-\\uD087\\uD089-\\uD0A3\\uD0A5-\\uD0BF\\uD0C1-\\uD0DB\\uD0DD-\\uD0F7\\uD0F9-\\uD113\\uD115-\\uD12F\\uD131-\\uD14B\\uD14D-\\uD167\\uD169-\\uD183\\uD185-\\uD19F\\uD1A1-\\uD1BB\\uD1BD-\\uD1D7\\uD1D9-\\uD1F3\\uD1F5-\\uD20F\\uD211-\\uD22B\\uD22D-\\uD247\\uD249-\\uD263\\uD265-\\uD27F\\uD281-\\uD29B\\uD29D-\\uD2B7\\uD2B9-\\uD2D3\\uD2D5-\\uD2EF\\uD2F1-\\uD30B\\uD30D-\\uD327\\uD329-\\uD343\\uD345-\\uD35F\\uD361-\\uD37B\\uD37D-\\uD397\\uD399-\\uD3B3\\uD3B5-\\uD3CF\\uD3D1-\\uD3EB\\uD3ED-\\uD407\\uD409-\\uD423\\uD425-\\uD43F\\uD441-\\uD45B\\uD45D-\\uD477\\uD479-\\uD493\\uD495-\\uD4AF\\uD4B1-\\uD4CB\\uD4CD-\\uD4E7\\uD4E9-\\uD503\\uD505-\\uD51F\\uD521-\\uD53B\\uD53D-\\uD557\\uD559-\\uD573\\uD575-\\uD58F\\uD591-\\uD5AB\\uD5AD-\\uD5C7\\uD5C9-\\uD5E3\\uD5E5-\\uD5FF\\uD601-\\uD61B\\uD61D-\\uD637\\uD639-\\uD653\\uD655-\\uD66F\\uD671-\\uD68B\\uD68D-\\uD6A7\\uD6A9-\\uD6C3\\uD6C5-\\uD6DF\\uD6E1-\\uD6FB\\uD6FD-\\uD717\\uD719-\\uD733\\uD735-\\uD74F\\uD751-\\uD76B\\uD76D-\\uD787\\uD789-\\uD7A3]",
                "$LinkingConsonant": "[\\u0915-\\u0939\\u0958-\\u095F\\u0978-\\u097F\\u0995-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09DC\\u09DD\\u09DF\\u09F0\\u09F1\\u0A95-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0AF9\\u0B15-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B5C\\u0B5D\\u0B5F\\u0B71\\u0C15-\\u0C28\\u0C2A-\\u0C39\\u0C58-\\u0C5A\\u0D15-\\u0D3A]",
                "$Prepend": "(?:[\\u0600-\\u0605\\u06DD\\u070F\\u0890\\u0891\\u08E2\\u0D4E]|\\uD804[\\uDCBD\\uDCCD\\uDDC2\\uDDC3\\uDFD1]|\\uD806[\\uDD3F\\uDD41\\uDE3A\\uDE84-\\uDE89]|\\uD807[\\uDD46\\uDF02])",
                "$RI": "(?:\\uD83C[\\uDDE6-\\uDDFF])",
                "$SpacingMark": "(?:[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u094F\\u0982\\u0983\\u09BF\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC1\\u0CC3\\u0CC4\\u0CF3\\u0D02\\u0D03\\u0D3F\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D82\\u0D83\\u0DD0\\u0DD1\\u0DD8-\\u0DDE\\u0DF2\\u0DF3\\u0E33\\u0EB3\\u0F3E\\u0F3F\\u0F7F\\u1031\\u103B\\u103C\\u1056\\u1057\\u1084\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u1A19\\u1A1A\\u1A55\\u1A57\\u1A6D-\\u1A72\\u1B04\\u1B3E-\\u1B41\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF7\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BE\\uA9BF\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAAEB\\uAAEE\\uAAEF\\uAAF5\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]|\\uD804[\\uDC00\\uDC02\\uDC82\\uDCB0-\\uDCB2\\uDCB7\\uDCB8\\uDD2C\\uDD45\\uDD46\\uDD82\\uDDB3-\\uDDB5\\uDDBF\\uDDCE\\uDE2C-\\uDE2E\\uDE32\\uDE33\\uDEE0-\\uDEE2\\uDF02\\uDF03\\uDF3F\\uDF41-\\uDF44\\uDF47\\uDF48\\uDF4B\\uDF4C\\uDF62\\uDF63\\uDFB9\\uDFBA\\uDFCA\\uDFCC\\uDFCD]|\\uD805[\\uDC35-\\uDC37\\uDC40\\uDC41\\uDC45\\uDCB1\\uDCB2\\uDCB9\\uDCBB\\uDCBC\\uDCBE\\uDCC1\\uDDB0\\uDDB1\\uDDB8-\\uDDBB\\uDDBE\\uDE30-\\uDE32\\uDE3B\\uDE3C\\uDE3E\\uDEAC\\uDEAE\\uDEAF\\uDF1E\\uDF26]|\\uD806[\\uDC2C-\\uDC2E\\uDC38\\uDD31-\\uDD35\\uDD37\\uDD38\\uDD40\\uDD42\\uDDD1-\\uDDD3\\uDDDC-\\uDDDF\\uDDE4\\uDE39\\uDE57\\uDE58\\uDE97]|\\uD807[\\uDC2F\\uDC3E\\uDCA9\\uDCB1\\uDCB4\\uDD8A-\\uDD8E\\uDD93\\uDD94\\uDD96\\uDEF5\\uDEF6\\uDF03\\uDF34\\uDF35\\uDF3E\\uDF3F]|\\uD818[\\uDD2A-\\uDD2C]|\\uD81B[\\uDF51-\\uDF87])",
                "$T": "[\\u11A8-\\u11FF\\uD7CB-\\uD7FB]",
                "$V": "(?:[\\u1160-\\u11A7\\uD7B0-\\uD7C6]|\\uD81B[\\uDD63\\uDD67-\\uDD6A])",
                "$ZWJ": "\\u200D"
            }
        },
        "sentence": {
            "segmentRules": {
                "10": {
                    "after": "($Sp|$ParaSep)",
                    "before": "$SATerm$Close*$Sp*",
                    "breaks": false
                },
                "11": {
                    "before": "$SATerm$Close*$Sp*$ParaSep?",
                    "breaks": true
                },
                "3": {
                    "after": "$LF",
                    "before": "$CR",
                    "breaks": false
                },
                "4": {
                    "before": "$ParaSep",
                    "breaks": true
                },
                "5": {
                    "after": "(?:$Format|$Extend)",
                    "breaks": false
                },
                "6": {
                    "after": "$Numeric",
                    "before": "$ATerm",
                    "breaks": false
                },
                "7": {
                    "after": "$Upper",
                    "before": "($Upper|$Lower)$ATerm",
                    "breaks": false
                },
                "8": {
                    "after": "$NotPreLower_*$Lower",
                    "before": "$ATerm$Close*$Sp*",
                    "breaks": false
                },
                "8.1": {
                    "after": "($SContinue|$SATerm)",
                    "before": "$SATerm$Close*$Sp*",
                    "breaks": false
                },
                "9": {
                    "after": "($Close|$Sp|$ParaSep)",
                    "before": "$SATerm$Close*",
                    "breaks": false
                },
                "998": {
                    "after": "$Any",
                    "breaks": false
                }
            },
            "suppressions": [],
            "variables": {
                "$ATerm": "([\\.\\u2024\\uFE52\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Any": "(?:[\\0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
                "$CR": "\\r",
                "$Close": "((?:[\"'-\\)\\[\\]\\{\\}\\xAB\\xBB\\u0F3A-\\u0F3D\\u169B\\u169C\\u2018-\\u201F\\u2039\\u203A\\u2045\\u2046\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u275B-\\u2760\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2E00-\\u2E0D\\u2E1C\\u2E1D\\u2E20-\\u2E29\\u2E42\\u2E55-\\u2E5C\\u3008-\\u3011\\u3014-\\u301B\\u301D-\\u301F\\uFD3E\\uFD3F\\uFE17\\uFE18\\uFE35-\\uFE44\\uFE47\\uFE48\\uFE59-\\uFE5E\\uFF08\\uFF09\\uFF3B\\uFF3D\\uFF5B\\uFF5D\\uFF5F\\uFF60\\uFF62\\uFF63]|\\uD83D[\\uDE76-\\uDE78])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Extend": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u200D\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
                "$FE": "(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
                "$Format": "(?:[\\xAD\\u061C\\u070F\\u180E\\u200B\\u200E\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40\\uDC01)",
                "$LF": "\\n",
                "$Lower": "((?:[a-z\\xAA\\xB5\\xBA\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02B8\\u02C0\\u02C1\\u02E0-\\u02E4\\u0371\\u0373\\u0377\\u037A-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10FC\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1C8A\\u1D00-\\u1DBF\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u2071\\u207F\\u2090-\\u209C\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2170-\\u217F\\u2184\\u24D0-\\u24E9\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7D\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B-\\uA69D\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7CD\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7DB\\uA7F2-\\uA7F4\\uA7F6\\uA7F8-\\uA7FA\\uAB30-\\uAB5A\\uAB5C-\\uAB69\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A]|\\uD801[\\uDC28-\\uDC4F\\uDCD8-\\uDCFB\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDF80\\uDF83-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD803[\\uDCC0-\\uDCF2\\uDD70-\\uDD85]|\\uD806[\\uDCC0-\\uDCDF]|\\uD81B[\\uDE60-\\uDE7F]|\\uD835[\\uDC1A-\\uDC33\\uDC4E-\\uDC54\\uDC56-\\uDC67\\uDC82-\\uDC9B\\uDCB6-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDCCF\\uDCEA-\\uDD03\\uDD1E-\\uDD37\\uDD52-\\uDD6B\\uDD86-\\uDD9F\\uDDBA-\\uDDD3\\uDDEE-\\uDE07\\uDE22-\\uDE3B\\uDE56-\\uDE6F\\uDE8A-\\uDEA5\\uDEC2-\\uDEDA\\uDEDC-\\uDEE1\\uDEFC-\\uDF14\\uDF16-\\uDF1B\\uDF36-\\uDF4E\\uDF50-\\uDF55\\uDF70-\\uDF88\\uDF8A-\\uDF8F\\uDFAA-\\uDFC2\\uDFC4-\\uDFC9\\uDFCB]|\\uD837[\\uDF00-\\uDF09\\uDF0B-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D]|\\uD83A[\\uDD22-\\uDD43])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$NotPreLower_": "(?:[\\0-\\t\\x0B\\f\\x0E- \"-\\x2D\\/->@\\[-`\\{-\\x84\\x86-\\xA9\\xAB-\\xB4\\xB6-\\xB9\\xBB-\\xBF\\xD7\\xF7\\u02C2-\\u02C5\\u02D2-\\u02DF\\u02E5-\\u02EB\\u02ED\\u02EF-\\u036F\\u0375\\u0378\\u0379\\u037E\\u0380-\\u0385\\u0387\\u038B\\u038D\\u03A2\\u03F6\\u0482-\\u0489\\u0530\\u0557\\u0558\\u055A-\\u055F\\u058A-\\u05CF\\u05EB-\\u05EE\\u05F4-\\u061C\\u064B-\\u066D\\u0670\\u06D6-\\u06E4\\u06E7-\\u06ED\\u06F0-\\u06F9\\u06FD\\u06FE\\u0703-\\u070F\\u0711\\u0730-\\u074C\\u07A6-\\u07B0\\u07B2-\\u07C9\\u07EB-\\u07F3\\u07F6-\\u07F8\\u07FB-\\u07FF\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u0836\\u0838\\u083A-\\u083C\\u083F\\u0859-\\u085F\\u086B-\\u086F\\u0888\\u088F-\\u089F\\u08CA-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0966-\\u0970\\u0981-\\u0984\\u098D\\u098E\\u0991\\u0992\\u09A9\\u09B1\\u09B3-\\u09B5\\u09BA-\\u09BC\\u09BE-\\u09CD\\u09CF-\\u09DB\\u09DE\\u09E2-\\u09EF\\u09F2-\\u09FB\\u09FD-\\u0A04\\u0A0B-\\u0A0E\\u0A11\\u0A12\\u0A29\\u0A31\\u0A34\\u0A37\\u0A3A-\\u0A58\\u0A5D\\u0A5F-\\u0A71\\u0A75-\\u0A84\\u0A8E\\u0A92\\u0AA9\\u0AB1\\u0AB4\\u0ABA-\\u0ABC\\u0ABE-\\u0ACF\\u0AD1-\\u0ADF\\u0AE2-\\u0AF8\\u0AFA-\\u0B04\\u0B0D\\u0B0E\\u0B11\\u0B12\\u0B29\\u0B31\\u0B34\\u0B3A-\\u0B3C\\u0B3E-\\u0B5B\\u0B5E\\u0B62-\\u0B70\\u0B72-\\u0B82\\u0B84\\u0B8B-\\u0B8D\\u0B91\\u0B96-\\u0B98\\u0B9B\\u0B9D\\u0BA0-\\u0BA2\\u0BA5-\\u0BA7\\u0BAB-\\u0BAD\\u0BBA-\\u0BCF\\u0BD1-\\u0C04\\u0C0D\\u0C11\\u0C29\\u0C3A-\\u0C3C\\u0C3E-\\u0C57\\u0C5B\\u0C5C\\u0C5E\\u0C5F\\u0C62-\\u0C7F\\u0C81-\\u0C84\\u0C8D\\u0C91\\u0CA9\\u0CB4\\u0CBA-\\u0CBC\\u0CBE-\\u0CDC\\u0CDF\\u0CE2-\\u0CF0\\u0CF3-\\u0D03\\u0D0D\\u0D11\\u0D3B\\u0D3C\\u0D3E-\\u0D4D\\u0D4F-\\u0D53\\u0D57-\\u0D5E\\u0D62-\\u0D79\\u0D80-\\u0D84\\u0D97-\\u0D99\\u0DB2\\u0DBC\\u0DBE\\u0DBF\\u0DC7-\\u0E00\\u0E31\\u0E34-\\u0E3F\\u0E47-\\u0E80\\u0E83\\u0E85\\u0E8B\\u0EA4\\u0EA6\\u0EB1\\u0EB4-\\u0EBC\\u0EBE\\u0EBF\\u0EC5\\u0EC7-\\u0EDB\\u0EE0-\\u0EFF\\u0F01-\\u0F3F\\u0F48\\u0F6D-\\u0F87\\u0F8D-\\u0FFF\\u102B-\\u103E\\u1040-\\u1049\\u104C-\\u104F\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F-\\u109F\\u10C6\\u10C8-\\u10CC\\u10CE\\u10CF\\u10FB\\u1249\\u124E\\u124F\\u1257\\u1259\\u125E\\u125F\\u1289\\u128E\\u128F\\u12B1\\u12B6\\u12B7\\u12BF\\u12C1\\u12C6\\u12C7\\u12D7\\u1311\\u1316\\u1317\\u135B-\\u1361\\u1363-\\u1366\\u1369-\\u137F\\u1390-\\u139F\\u13F6\\u13F7\\u13FE-\\u1400\\u166D\\u1680\\u169B-\\u169F\\u16EB-\\u16ED\\u16F9-\\u16FF\\u1712-\\u171E\\u1732-\\u1734\\u1737-\\u173F\\u1752-\\u175F\\u176D\\u1771-\\u177F\\u17B4-\\u17D3\\u17D6\\u17D8-\\u17DB\\u17DD-\\u1802\\u1804-\\u1808\\u180A-\\u181F\\u1879-\\u187F\\u1885\\u1886\\u18A9\\u18AB-\\u18AF\\u18F6-\\u18FF\\u191F-\\u1943\\u1946-\\u194F\\u196E\\u196F\\u1975-\\u197F\\u19AC-\\u19AF\\u19CA-\\u19FF\\u1A17-\\u1A1F\\u1A55-\\u1AA6\\u1AAC-\\u1B04\\u1B34-\\u1B44\\u1B4D\\u1B50-\\u1B59\\u1B5C\\u1B5D\\u1B60-\\u1B7C\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BB0-\\u1BB9\\u1BE6-\\u1BFF\\u1C24-\\u1C3A\\u1C3D-\\u1C4C\\u1C50-\\u1C59\\u1C8B-\\u1C8F\\u1CBB\\u1CBC\\u1CC0-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1CFB-\\u1CFF\\u1DC0-\\u1DFF\\u1F16\\u1F17\\u1F1E\\u1F1F\\u1F46\\u1F47\\u1F4E\\u1F4F\\u1F58\\u1F5A\\u1F5C\\u1F5E\\u1F7E\\u1F7F\\u1FB5\\u1FBD\\u1FBF-\\u1FC1\\u1FC5\\u1FCD-\\u1FCF\\u1FD4\\u1FD5\\u1FDC-\\u1FDF\\u1FED-\\u1FF1\\u1FF5\\u1FFD-\\u2023\\u2025-\\u2027\\u202A-\\u203B\\u203E-\\u2046\\u204A-\\u2070\\u2072-\\u207E\\u2080-\\u208F\\u209D-\\u2101\\u2103-\\u2106\\u2108\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u212E\\u213A\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u214F-\\u215F\\u2189-\\u24B5\\u24EA-\\u2BFF\\u2CE5-\\u2CEA\\u2CEF-\\u2CF1\\u2CF4-\\u2CF8\\u2CFC-\\u2CFF\\u2D26\\u2D28-\\u2D2C\\u2D2E\\u2D2F\\u2D68-\\u2D6E\\u2D70-\\u2D7F\\u2D97-\\u2D9F\\u2DA7\\u2DAF\\u2DB7\\u2DBF\\u2DC7\\u2DCF\\u2DD7\\u2DDF-\\u2E2D\\u2E30-\\u2E3B\\u2E3D-\\u2E52\\u2E55-\\u3001\\u3003\\u3004\\u3008-\\u3020\\u302A-\\u3030\\u3036\\u3037\\u303D-\\u3040\\u3097-\\u309C\\u30A0\\u30FB\\u3100-\\u3104\\u3130\\u318F-\\u319F\\u31C0-\\u31EF\\u3200-\\u33FF\\u4DC0-\\u4DFF\\uA48D-\\uA4CF\\uA4FE\\uA60D\\uA620-\\uA629\\uA62C-\\uA63F\\uA66F-\\uA67E\\uA69E\\uA69F\\uA6F0-\\uA6F2\\uA6F4-\\uA6F6\\uA6F8-\\uA716\\uA720\\uA721\\uA789\\uA78A\\uA7CE\\uA7CF\\uA7D2\\uA7D4\\uA7DD-\\uA7F1\\uA802\\uA806\\uA80B\\uA823-\\uA83F\\uA874\\uA875\\uA878-\\uA881\\uA8B4-\\uA8CD\\uA8D0-\\uA8F1\\uA8F8-\\uA8FA\\uA8FC\\uA8FF-\\uA909\\uA926-\\uA92E\\uA947-\\uA95F\\uA97D-\\uA983\\uA9B3-\\uA9C7\\uA9CA-\\uA9CE\\uA9D0-\\uA9DF\\uA9E5\\uA9F0-\\uA9F9\\uA9FF\\uAA29-\\uAA3F\\uAA43\\uAA4C-\\uAA5C\\uAA77-\\uAA79\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAC3-\\uAADA\\uAADE\\uAADF\\uAAEB-\\uAAEF\\uAAF5-\\uAB00\\uAB07\\uAB08\\uAB0F\\uAB10\\uAB17-\\uAB1F\\uAB27\\uAB2F\\uAB5B\\uAB6A-\\uAB6F\\uABE3-\\uABEA\\uABEC-\\uABFF\\uD7A4-\\uD7AF\\uD7C7-\\uD7CA\\uD7FC-\\uD7FF\\uE000-\\uF8FF\\uFA6E\\uFA6F\\uFADA-\\uFAFF\\uFB07-\\uFB12\\uFB18-\\uFB1C\\uFB1E\\uFB29\\uFB37\\uFB3D\\uFB3F\\uFB42\\uFB45\\uFBB2-\\uFBD2\\uFD3E-\\uFD4F\\uFD90\\uFD91\\uFDC8-\\uFDEF\\uFDFC-\\uFE11\\uFE13\\uFE14\\uFE17-\\uFE51\\uFE53-\\uFE55\\uFE58-\\uFE6F\\uFE75\\uFEFD-\\uFF00\\uFF02-\\uFF0D\\uFF0F-\\uFF1E\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF60\\uFF62-\\uFF65\\uFF9E\\uFF9F\\uFFBF-\\uFFC1\\uFFC8\\uFFC9\\uFFD0\\uFFD1\\uFFD8\\uFFD9\\uFFDD-\\uFFFF]|\\uD800[\\uDC0C\\uDC27\\uDC3B\\uDC3E\\uDC4E\\uDC4F\\uDC5E-\\uDC7F\\uDCFB-\\uDD3F\\uDD75-\\uDE7F\\uDE9D-\\uDE9F\\uDED1-\\uDEFF\\uDF20-\\uDF2C\\uDF4B-\\uDF4F\\uDF76-\\uDF7F\\uDF9E\\uDF9F\\uDFC4-\\uDFC7\\uDFD0\\uDFD6-\\uDFFF]|\\uD801[\\uDC9E-\\uDCAF\\uDCD4-\\uDCD7\\uDCFC-\\uDCFF\\uDD28-\\uDD2F\\uDD64-\\uDD6F\\uDD7B\\uDD8B\\uDD93\\uDD96\\uDDA2\\uDDB2\\uDDBA\\uDDBD-\\uDDBF\\uDDF4-\\uDDFF\\uDF37-\\uDF3F\\uDF56-\\uDF5F\\uDF68-\\uDF7F\\uDF86\\uDFB1\\uDFBB-\\uDFFF]|\\uD802[\\uDC06\\uDC07\\uDC09\\uDC36\\uDC39-\\uDC3B\\uDC3D\\uDC3E\\uDC56-\\uDC5F\\uDC77-\\uDC7F\\uDC9F-\\uDCDF\\uDCF3\\uDCF6-\\uDCFF\\uDD16-\\uDD1F\\uDD3A-\\uDD7F\\uDDB8-\\uDDBD\\uDDC0-\\uDDFF\\uDE01-\\uDE0F\\uDE14\\uDE18\\uDE36-\\uDE55\\uDE58-\\uDE5F\\uDE7D-\\uDE7F\\uDE9D-\\uDEBF\\uDEC8\\uDEE5-\\uDEFF\\uDF36-\\uDF3F\\uDF56-\\uDF5F\\uDF73-\\uDF7F\\uDF92-\\uDFFF]|\\uD803[\\uDC49-\\uDC7F\\uDCB3-\\uDCBF\\uDCF3-\\uDCFF\\uDD24-\\uDD49\\uDD66-\\uDD6E\\uDD86-\\uDE7F\\uDEAA-\\uDEAF\\uDEB2-\\uDEC1\\uDEC5-\\uDEFF\\uDF1D-\\uDF26\\uDF28-\\uDF2F\\uDF46-\\uDF54\\uDF5A-\\uDF6F\\uDF82-\\uDF85\\uDF8A-\\uDFAF\\uDFC5-\\uDFDF\\uDFF7-\\uDFFF]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC49-\\uDC70\\uDC73\\uDC74\\uDC76-\\uDC82\\uDCB0-\\uDCBD\\uDCC2-\\uDCCF\\uDCE9-\\uDD02\\uDD27-\\uDD40\\uDD45\\uDD46\\uDD48-\\uDD4F\\uDD73-\\uDD75\\uDD77-\\uDD82\\uDDB3-\\uDDC0\\uDDC7-\\uDDCC\\uDDCE-\\uDDD9\\uDDDB\\uDDDD\\uDDE0-\\uDDFF\\uDE12\\uDE2C-\\uDE37\\uDE3A\\uDE3D\\uDE3E\\uDE41-\\uDE7F\\uDE87\\uDE89\\uDE8E\\uDE9E\\uDEAA-\\uDEAF\\uDEDF-\\uDF04\\uDF0D\\uDF0E\\uDF11\\uDF12\\uDF29\\uDF31\\uDF34\\uDF3A-\\uDF3C\\uDF3E-\\uDF4F\\uDF51-\\uDF5C\\uDF62-\\uDF7F\\uDF8A\\uDF8C\\uDF8D\\uDF8F\\uDFB6\\uDFB8-\\uDFD0\\uDFD2\\uDFD6-\\uDFFF]|\\uD805[\\uDC35-\\uDC46\\uDC4D-\\uDC5E\\uDC62-\\uDC7F\\uDCB0-\\uDCC3\\uDCC6\\uDCC8-\\uDD7F\\uDDAF-\\uDDC1\\uDDC4-\\uDDC8\\uDDDC-\\uDDFF\\uDE30-\\uDE40\\uDE43\\uDE45-\\uDE7F\\uDEAB-\\uDEB7\\uDEB9-\\uDEFF\\uDF1B-\\uDF3B\\uDF3F\\uDF47-\\uDFFF]|\\uD806[\\uDC2C-\\uDC9F\\uDCE0-\\uDCFE\\uDD07\\uDD08\\uDD0A\\uDD0B\\uDD14\\uDD17\\uDD30-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDD45\\uDD47-\\uDD9F\\uDDA8\\uDDA9\\uDDD1-\\uDDE0\\uDDE2\\uDDE4-\\uDDFF\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE41\\uDE44-\\uDE4F\\uDE51-\\uDE5B\\uDE8A-\\uDE9A\\uDE9E-\\uDEAF\\uDEF9-\\uDFBF\\uDFE1-\\uDFFF]|\\uD807[\\uDC09\\uDC2F-\\uDC3F\\uDC43-\\uDC71\\uDC90-\\uDCFF\\uDD07\\uDD0A\\uDD31-\\uDD45\\uDD47-\\uDD5F\\uDD66\\uDD69\\uDD8A-\\uDD97\\uDD99-\\uDEDF\\uDEF3-\\uDEF6\\uDEF9-\\uDF01\\uDF03\\uDF11\\uDF34-\\uDF42\\uDF45-\\uDFAF\\uDFB1-\\uDFFF]|\\uD808[\\uDF9A-\\uDFFF]|\\uD809[\\uDC6F-\\uDC7F\\uDD44-\\uDFFF]|[\\uD80A\\uD812-\\uD817\\uD819\\uD824-\\uD82A\\uD82D\\uD82E\\uD830-\\uD834\\uD83D-\\uD83F\\uD87C\\uD87D\\uD87F\\uD889-\\uDBFF][\\uDC00-\\uDFFF]|\\uD80B[\\uDC00-\\uDF8F\\uDFF1-\\uDFFF]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC5F]|\\uD810[\\uDFFB-\\uDFFF]|\\uD811[\\uDE47-\\uDFFF]|\\uD818[\\uDC00-\\uDCFF\\uDD1E-\\uDFFF]|\\uD81A[\\uDE39-\\uDE3F\\uDE5F-\\uDE6D\\uDEBF-\\uDECF\\uDEEE-\\uDEF4\\uDEF6-\\uDEFF\\uDF30-\\uDF36\\uDF39-\\uDF3F\\uDF45-\\uDF62\\uDF78-\\uDF7C\\uDF90-\\uDFFF]|\\uD81B[\\uDC00-\\uDD3F\\uDD6D\\uDD70-\\uDE3F\\uDE80-\\uDE97\\uDE99-\\uDEFF\\uDF4B-\\uDF4F\\uDF51-\\uDF92\\uDFA0-\\uDFDF\\uDFE2\\uDFE4-\\uDFFF]|\\uD821[\\uDFF8-\\uDFFF]|\\uD823[\\uDCD6-\\uDCFE\\uDD09-\\uDFFF]|\\uD82B[\\uDC00-\\uDFEF\\uDFF4\\uDFFC\\uDFFF]|\\uD82C[\\uDD23-\\uDD31\\uDD33-\\uDD4F\\uDD53\\uDD54\\uDD56-\\uDD63\\uDD68-\\uDD6F\\uDEFC-\\uDFFF]|\\uD82F[\\uDC6B-\\uDC6F\\uDC7D-\\uDC7F\\uDC89-\\uDC8F\\uDC9A-\\uDC9E\\uDCA0-\\uDFFF]|\\uD835[\\uDC55\\uDC9D\\uDCA0\\uDCA1\\uDCA3\\uDCA4\\uDCA7\\uDCA8\\uDCAD\\uDCBA\\uDCBC\\uDCC4\\uDD06\\uDD0B\\uDD0C\\uDD15\\uDD1D\\uDD3A\\uDD3F\\uDD45\\uDD47-\\uDD49\\uDD51\\uDEA6\\uDEA7\\uDEC1\\uDEDB\\uDEFB\\uDF15\\uDF35\\uDF4F\\uDF6F\\uDF89\\uDFA9\\uDFC3\\uDFCC-\\uDFFF]|\\uD836[\\uDC00-\\uDE87\\uDE89-\\uDFFF]|\\uD837[\\uDC00-\\uDEFF\\uDF1F-\\uDF24\\uDF2B-\\uDFFF]|\\uD838[\\uDC00-\\uDC2F\\uDC6E-\\uDCFF\\uDD2D-\\uDD36\\uDD3E-\\uDD4D\\uDD4F-\\uDE8F\\uDEAE-\\uDEBF\\uDEEC-\\uDFFF]|\\uD839[\\uDC00-\\uDCCF\\uDCEC-\\uDDCF\\uDDEE\\uDDEF\\uDDF1-\\uDFDF\\uDFE7\\uDFEC\\uDFEF\\uDFFF]|\\uD83A[\\uDCC5-\\uDCFF\\uDD44-\\uDD4A\\uDD4C-\\uDFFF]|\\uD83B[\\uDC00-\\uDDFF\\uDE04\\uDE20\\uDE23\\uDE25\\uDE26\\uDE28\\uDE33\\uDE38\\uDE3A\\uDE3C-\\uDE41\\uDE43-\\uDE46\\uDE48\\uDE4A\\uDE4C\\uDE50\\uDE53\\uDE55\\uDE56\\uDE58\\uDE5A\\uDE5C\\uDE5E\\uDE60\\uDE63\\uDE65\\uDE66\\uDE6B\\uDE73\\uDE78\\uDE7D\\uDE7F\\uDE8A\\uDE9C-\\uDEA0\\uDEA4\\uDEAA\\uDEBC-\\uDFFF]|\\uD83C[\\uDC00-\\uDD2F\\uDD4A-\\uDD4F\\uDD6A-\\uDD6F\\uDD8A-\\uDFFF]|\\uD869[\\uDEE0-\\uDEFF]|\\uD86D[\\uDF3A-\\uDF3F]|\\uD86E[\\uDC1E\\uDC1F]|\\uD873[\\uDEA2-\\uDEAF]|\\uD87A[\\uDFE1-\\uDFEF]|\\uD87B[\\uDE5E-\\uDFFF]|\\uD87E[\\uDE1E-\\uDFFF]|\\uD884[\\uDF4B-\\uDF4F]|\\uD888[\\uDFB0-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
                "$Numeric": "((?:[0-9\\u0600-\\u0605\\u0660-\\u0669\\u066B\\u066C\\u06DD\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0890\\u0891\\u08E2\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]|\\uD801[\\uDCA0-\\uDCA9]|[\\uD803\\uD818][\\uDD30-\\uDD39\\uDD40-\\uDD49]|\\uD804[\\uDC66-\\uDC6F\\uDCBD\\uDCCD\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9\\uDEF0-\\uDEF9]|\\uD805[\\uDC50-\\uDC59\\uDCD0-\\uDCD9\\uDE50-\\uDE59\\uDEC0-\\uDEC9\\uDED0-\\uDEE3\\uDF30-\\uDF39]|\\uD806[\\uDCE0-\\uDCE9\\uDD50-\\uDD59\\uDFF0-\\uDFF9]|\\uD807[\\uDC50-\\uDC59\\uDD50-\\uDD59\\uDDA0-\\uDDA9\\uDF50-\\uDF59]|\\uD81A[\\uDE60-\\uDE69\\uDEC0-\\uDEC9\\uDF50-\\uDF59]|\\uD81B[\\uDD70-\\uDD79]|\\uD833[\\uDCF0-\\uDCF9]|\\uD835[\\uDFCE-\\uDFFF]|\\uD838[\\uDD40-\\uDD49\\uDEF0-\\uDEF9]|\\uD839[\\uDCF0-\\uDCF9\\uDDF1-\\uDDFA]|\\uD83A[\\uDD50-\\uDD59]|\\uD83E[\\uDFF0-\\uDFF9])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$OLetter": "((?:[\\u01BB\\u01C0-\\u01C3\\u0294\\u02B9-\\u02BF\\u02C6-\\u02D1\\u02EC\\u02EE\\u0374\\u0559\\u05D0-\\u05EA\\u05EF-\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E86-\\u0E8A\\u0E8C-\\u0EA3\\u0EA5\\u0EA7-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10D0-\\u10FA\\u10FD-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u2135-\\u2138\\u2180-\\u2182\\u2185-\\u2188\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA66E\\uA67F\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA788\\uA78F\\uA7F7\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC50-\\uDC9D\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF81\\uDF82]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDD00-\\uDD23\\uDD4A-\\uDD4F\\uDD6F\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8\\uDF00-\\uDF1A\\uDF40-\\uDF46]|\\uD806[\\uDC00-\\uDC2B\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00-\\uDD22\\uDD32\\uDD50-\\uDD52\\uDD55\\uDD64-\\uDD67\\uDD70-\\uDEFB]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD837\\uDF0A|\\uD838[\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$ParaSep": "([\\x85\\u2028\\u2029]|\\r|\\n)",
                "$SATerm": "(((?:[!\\?\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)|([\\.\\u2024\\uFE52\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*))",
                "$SContinue": "([,\\x2D:;\\u037E\\u055D\\u060C\\u060D\\u07F8\\u1802\\u1808\\u2013\\u2014\\u3001\\uFE10\\uFE11\\uFE13\\uFE14\\uFE31\\uFE32\\uFE50\\uFE51\\uFE54\\uFE55\\uFE58\\uFE63\\uFF0C\\uFF0D\\uFF1A\\uFF1B\\uFF64](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$STerm": "((?:[!\\?\\u0589\\u061D-\\u061F\\u06D4\\u0700-\\u0702\\u07F9\\u0837\\u0839\\u083D\\u083E\\u0964\\u0965\\u104A\\u104B\\u1362\\u1367\\u1368\\u166E\\u1735\\u1736\\u17D4\\u17D5\\u1803\\u1809\\u1944\\u1945\\u1AA8-\\u1AAB\\u1B4E\\u1B4F\\u1B5A\\u1B5B\\u1B5E\\u1B5F\\u1B7D-\\u1B7F\\u1C3B\\u1C3C\\u1C7E\\u1C7F\\u203C\\u203D\\u2047-\\u2049\\u2CF9-\\u2CFB\\u2E2E\\u2E3C\\u2E53\\u2E54\\u3002\\uA4FF\\uA60E\\uA60F\\uA6F3\\uA6F7\\uA876\\uA877\\uA8CE\\uA8CF\\uA92F\\uA9C8\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB\\uFE12\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F\\uFF61]|\\uD802[\\uDE56\\uDE57]|\\uD803[\\uDF55-\\uDF59\\uDF86-\\uDF89]|\\uD804[\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD41-\\uDD43\\uDDC5\\uDDC6\\uDDCD\\uDDDE\\uDDDF\\uDE38\\uDE39\\uDE3B\\uDE3C\\uDEA9\\uDFD4\\uDFD5]|\\uD805[\\uDC4B\\uDC4C\\uDDC2\\uDDC3\\uDDC9-\\uDDD7\\uDE41\\uDE42\\uDF3C-\\uDF3E]|\\uD806[\\uDD44\\uDD46\\uDE42\\uDE43\\uDE9B\\uDE9C]|\\uD807[\\uDC41\\uDC42\\uDEF7\\uDEF8\\uDF43\\uDF44]|\\uD81A[\\uDE6E\\uDE6F\\uDEF5\\uDF37\\uDF38\\uDF44]|\\uD81B[\\uDD6E\\uDD6F\\uDE98]|\\uD82F\\uDC9F|\\uD836\\uDE88)(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Sep": "[\\x85\\u2028\\u2029]",
                "$Sp": "([\\t\\x0B\\f \\xA0\\u1680\\u2000-\\u200A\\u202F\\u205F\\u3000](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Upper": "((?:[A-Z\\xC0-\\xD6\\xD8-\\xDE\\u0100\\u0102\\u0104\\u0106\\u0108\\u010A\\u010C\\u010E\\u0110\\u0112\\u0114\\u0116\\u0118\\u011A\\u011C\\u011E\\u0120\\u0122\\u0124\\u0126\\u0128\\u012A\\u012C\\u012E\\u0130\\u0132\\u0134\\u0136\\u0139\\u013B\\u013D\\u013F\\u0141\\u0143\\u0145\\u0147\\u014A\\u014C\\u014E\\u0150\\u0152\\u0154\\u0156\\u0158\\u015A\\u015C\\u015E\\u0160\\u0162\\u0164\\u0166\\u0168\\u016A\\u016C\\u016E\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017B\\u017D\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018B\\u018E-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019C\\u019D\\u019F\\u01A0\\u01A2\\u01A4\\u01A6\\u01A7\\u01A9\\u01AC\\u01AE\\u01AF\\u01B1-\\u01B3\\u01B5\\u01B7\\u01B8\\u01BC\\u01C4\\u01C5\\u01C7\\u01C8\\u01CA\\u01CB\\u01CD\\u01CF\\u01D1\\u01D3\\u01D5\\u01D7\\u01D9\\u01DB\\u01DE\\u01E0\\u01E2\\u01E4\\u01E6\\u01E8\\u01EA\\u01EC\\u01EE\\u01F1\\u01F2\\u01F4\\u01F6-\\u01F8\\u01FA\\u01FC\\u01FE\\u0200\\u0202\\u0204\\u0206\\u0208\\u020A\\u020C\\u020E\\u0210\\u0212\\u0214\\u0216\\u0218\\u021A\\u021C\\u021E\\u0220\\u0222\\u0224\\u0226\\u0228\\u022A\\u022C\\u022E\\u0230\\u0232\\u023A\\u023B\\u023D\\u023E\\u0241\\u0243-\\u0246\\u0248\\u024A\\u024C\\u024E\\u0370\\u0372\\u0376\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E\\u038F\\u0391-\\u03A1\\u03A3-\\u03AB\\u03CF\\u03D2-\\u03D4\\u03D8\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2\\u03E4\\u03E6\\u03E8\\u03EA\\u03EC\\u03EE\\u03F4\\u03F7\\u03F9\\u03FA\\u03FD-\\u042F\\u0460\\u0462\\u0464\\u0466\\u0468\\u046A\\u046C\\u046E\\u0470\\u0472\\u0474\\u0476\\u0478\\u047A\\u047C\\u047E\\u0480\\u048A\\u048C\\u048E\\u0490\\u0492\\u0494\\u0496\\u0498\\u049A\\u049C\\u049E\\u04A0\\u04A2\\u04A4\\u04A6\\u04A8\\u04AA\\u04AC\\u04AE\\u04B0\\u04B2\\u04B4\\u04B6\\u04B8\\u04BA\\u04BC\\u04BE\\u04C0\\u04C1\\u04C3\\u04C5\\u04C7\\u04C9\\u04CB\\u04CD\\u04D0\\u04D2\\u04D4\\u04D6\\u04D8\\u04DA\\u04DC\\u04DE\\u04E0\\u04E2\\u04E4\\u04E6\\u04E8\\u04EA\\u04EC\\u04EE\\u04F0\\u04F2\\u04F4\\u04F6\\u04F8\\u04FA\\u04FC\\u04FE\\u0500\\u0502\\u0504\\u0506\\u0508\\u050A\\u050C\\u050E\\u0510\\u0512\\u0514\\u0516\\u0518\\u051A\\u051C\\u051E\\u0520\\u0522\\u0524\\u0526\\u0528\\u052A\\u052C\\u052E\\u0531-\\u0556\\u10A0-\\u10C5\\u10C7\\u10CD\\u13A0-\\u13F5\\u1C89\\u1E00\\u1E02\\u1E04\\u1E06\\u1E08\\u1E0A\\u1E0C\\u1E0E\\u1E10\\u1E12\\u1E14\\u1E16\\u1E18\\u1E1A\\u1E1C\\u1E1E\\u1E20\\u1E22\\u1E24\\u1E26\\u1E28\\u1E2A\\u1E2C\\u1E2E\\u1E30\\u1E32\\u1E34\\u1E36\\u1E38\\u1E3A\\u1E3C\\u1E3E\\u1E40\\u1E42\\u1E44\\u1E46\\u1E48\\u1E4A\\u1E4C\\u1E4E\\u1E50\\u1E52\\u1E54\\u1E56\\u1E58\\u1E5A\\u1E5C\\u1E5E\\u1E60\\u1E62\\u1E64\\u1E66\\u1E68\\u1E6A\\u1E6C\\u1E6E\\u1E70\\u1E72\\u1E74\\u1E76\\u1E78\\u1E7A\\u1E7C\\u1E7E\\u1E80\\u1E82\\u1E84\\u1E86\\u1E88\\u1E8A\\u1E8C\\u1E8E\\u1E90\\u1E92\\u1E94\\u1E9E\\u1EA0\\u1EA2\\u1EA4\\u1EA6\\u1EA8\\u1EAA\\u1EAC\\u1EAE\\u1EB0\\u1EB2\\u1EB4\\u1EB6\\u1EB8\\u1EBA\\u1EBC\\u1EBE\\u1EC0\\u1EC2\\u1EC4\\u1EC6\\u1EC8\\u1ECA\\u1ECC\\u1ECE\\u1ED0\\u1ED2\\u1ED4\\u1ED6\\u1ED8\\u1EDA\\u1EDC\\u1EDE\\u1EE0\\u1EE2\\u1EE4\\u1EE6\\u1EE8\\u1EEA\\u1EEC\\u1EEE\\u1EF0\\u1EF2\\u1EF4\\u1EF6\\u1EF8\\u1EFA\\u1EFC\\u1EFE\\u1F08-\\u1F0F\\u1F18-\\u1F1D\\u1F28-\\u1F2F\\u1F38-\\u1F3F\\u1F48-\\u1F4D\\u1F59\\u1F5B\\u1F5D\\u1F5F\\u1F68-\\u1F6F\\u1F88-\\u1F8F\\u1F98-\\u1F9F\\u1FA8-\\u1FAF\\u1FB8-\\u1FBC\\u1FC8-\\u1FCC\\u1FD8-\\u1FDB\\u1FE8-\\u1FEC\\u1FF8-\\u1FFC\\u2102\\u2107\\u210B-\\u210D\\u2110-\\u2112\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u2130-\\u2133\\u213E\\u213F\\u2145\\u2160-\\u216F\\u2183\\u24B6-\\u24CF\\u2C00-\\u2C2F\\u2C60\\u2C62-\\u2C64\\u2C67\\u2C69\\u2C6B\\u2C6D-\\u2C70\\u2C72\\u2C75\\u2C7E-\\u2C80\\u2C82\\u2C84\\u2C86\\u2C88\\u2C8A\\u2C8C\\u2C8E\\u2C90\\u2C92\\u2C94\\u2C96\\u2C98\\u2C9A\\u2C9C\\u2C9E\\u2CA0\\u2CA2\\u2CA4\\u2CA6\\u2CA8\\u2CAA\\u2CAC\\u2CAE\\u2CB0\\u2CB2\\u2CB4\\u2CB6\\u2CB8\\u2CBA\\u2CBC\\u2CBE\\u2CC0\\u2CC2\\u2CC4\\u2CC6\\u2CC8\\u2CCA\\u2CCC\\u2CCE\\u2CD0\\u2CD2\\u2CD4\\u2CD6\\u2CD8\\u2CDA\\u2CDC\\u2CDE\\u2CE0\\u2CE2\\u2CEB\\u2CED\\u2CF2\\uA640\\uA642\\uA644\\uA646\\uA648\\uA64A\\uA64C\\uA64E\\uA650\\uA652\\uA654\\uA656\\uA658\\uA65A\\uA65C\\uA65E\\uA660\\uA662\\uA664\\uA666\\uA668\\uA66A\\uA66C\\uA680\\uA682\\uA684\\uA686\\uA688\\uA68A\\uA68C\\uA68E\\uA690\\uA692\\uA694\\uA696\\uA698\\uA69A\\uA722\\uA724\\uA726\\uA728\\uA72A\\uA72C\\uA72E\\uA732\\uA734\\uA736\\uA738\\uA73A\\uA73C\\uA73E\\uA740\\uA742\\uA744\\uA746\\uA748\\uA74A\\uA74C\\uA74E\\uA750\\uA752\\uA754\\uA756\\uA758\\uA75A\\uA75C\\uA75E\\uA760\\uA762\\uA764\\uA766\\uA768\\uA76A\\uA76C\\uA76E\\uA779\\uA77B\\uA77D\\uA77E\\uA780\\uA782\\uA784\\uA786\\uA78B\\uA78D\\uA790\\uA792\\uA796\\uA798\\uA79A\\uA79C\\uA79E\\uA7A0\\uA7A2\\uA7A4\\uA7A6\\uA7A8\\uA7AA-\\uA7AE\\uA7B0-\\uA7B4\\uA7B6\\uA7B8\\uA7BA\\uA7BC\\uA7BE\\uA7C0\\uA7C2\\uA7C4-\\uA7C7\\uA7C9\\uA7CB\\uA7CC\\uA7D0\\uA7D6\\uA7D8\\uA7DA\\uA7DC\\uA7F5\\uFF21-\\uFF3A]|\\uD801[\\uDC00-\\uDC27\\uDCB0-\\uDCD3\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95]|\\uD803[\\uDC80-\\uDCB2\\uDD50-\\uDD65]|\\uD806[\\uDCA0-\\uDCBF]|\\uD81B[\\uDE40-\\uDE5F]|\\uD835[\\uDC00-\\uDC19\\uDC34-\\uDC4D\\uDC68-\\uDC81\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB5\\uDCD0-\\uDCE9\\uDD04\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD38\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD6C-\\uDD85\\uDDA0-\\uDDB9\\uDDD4-\\uDDED\\uDE08-\\uDE21\\uDE3C-\\uDE55\\uDE70-\\uDE89\\uDEA8-\\uDEC0\\uDEE2-\\uDEFA\\uDF1C-\\uDF34\\uDF56-\\uDF6E\\uDF90-\\uDFA8\\uDFCA]|\\uD83A[\\uDD00-\\uDD21]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)"
            }
        },
        "word": {
            "segmentRules": {
                "10": {
                    "after": "$AHLetter",
                    "before": "$Numeric",
                    "breaks": false
                },
                "11": {
                    "after": "$Numeric",
                    "before": "$Numeric($MidNum|$MidNumLetQ)",
                    "breaks": false
                },
                "12": {
                    "after": "($MidNum|$MidNumLetQ)$Numeric",
                    "before": "$Numeric",
                    "breaks": false
                },
                "13": {
                    "after": "$Katakana",
                    "before": "$Katakana",
                    "breaks": false
                },
                "13.1": {
                    "after": "$ExtendNumLet",
                    "before": "($AHLetter|$Numeric|$Katakana|$ExtendNumLet)",
                    "breaks": false
                },
                "13.2": {
                    "after": "($AHLetter|$Numeric|$Katakana)",
                    "before": "$ExtendNumLet",
                    "breaks": false
                },
                "15": {
                    "after": "$RI",
                    "before": "^($RI$RI)*$RI",
                    "breaks": false
                },
                "16": {
                    "after": "$RI",
                    "before": "[^\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0600-\\u0605\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DD\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u070F\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0890\\u0891\\u0898-\\u089F\\u08CA-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB\\uDDFD\\uDEE0\\uDF76-\\uDF7A\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6\\uDD24-\\uDD27\\uDEAB\\uDEAC\\uDEFD-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCBD\\uDCC2\\uDCCD\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDC30-\\uDC40\\uDC47-\\uDC55\\uDEF0-\\uDEF4\\uDF30-\\uDF36\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1\\uDC9D\\uDC9E\\uDCA0-\\uDCA3\\uDF00-\\uDF2D\\uDF30-\\uDF46\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF\\uDCEC-\\uDCEF\\uDCD0-\\uDCD6\\uDD44-\\uDD4A\\uDDE6-\\uDDFF\\uDFFB-\\uDFFF\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF]($RI$RI)*$RI",
                    "breaks": false
                },
                "3": {
                    "after": "$LF",
                    "before": "$CR",
                    "breaks": false
                },
                "3.1": {
                    "before": "($Newline|$CR|$LF)",
                    "breaks": true
                },
                "3.2": {
                    "after": "($Newline|$CR|$LF)",
                    "breaks": true
                },
                "3.3": {
                    "after": "$ExtPict",
                    "before": "$ZWJ",
                    "breaks": false
                },
                "3.4": {
                    "after": "$WSegSpace",
                    "before": "$WSegSpace",
                    "breaks": false
                },
                "4": {
                    "after": "(?:$Format|$Extend|$ZWJ)",
                    "before": "$NotBreak_",
                    "breaks": false
                },
                "5": {
                    "after": "$AHLetter",
                    "before": "$AHLetter",
                    "breaks": false
                },
                "6": {
                    "after": "($MidLetter|$MidNumLetQ)$AHLetter",
                    "before": "$AHLetter",
                    "breaks": false
                },
                "7": {
                    "after": "$AHLetter",
                    "before": "$AHLetter($MidLetter|$MidNumLetQ)",
                    "breaks": false
                },
                "7.1": {
                    "after": "$Single_Quote",
                    "before": "$Hebrew_Letter",
                    "breaks": false
                },
                "7.2": {
                    "after": "$Double_Quote$Hebrew_Letter",
                    "before": "$Hebrew_Letter",
                    "breaks": false
                },
                "7.3": {
                    "after": "$Hebrew_Letter",
                    "before": "$Hebrew_Letter$Double_Quote",
                    "breaks": false
                },
                "8": {
                    "after": "$Numeric",
                    "before": "$Numeric",
                    "breaks": false
                },
                "9": {
                    "after": "$Numeric",
                    "before": "$AHLetter",
                    "breaks": false
                }
            },
            "suppressions": [],
            "variables": {
                "$AHLetter": "(((?:[A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02D7\\u02DE-\\u02FF\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559-\\u055C\\u055E\\u0560-\\u0588\\u058A\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u24B6-\\u24E9\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u303B\\u303C\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA708-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])|[\\u05D0-\\u05EA\\u05EF-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$ALetter": "((?:[A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02D7\\u02DE-\\u02FF\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559-\\u055C\\u055E\\u0560-\\u0588\\u058A\\u05F3\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u24B6-\\u24E9\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u303B\\u303C\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA708-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB50-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD83C[\\uDD30-\\uDD49\\uDD50-\\uDD69\\uDD70-\\uDD89])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$CR": "\\r",
                "$Double_Quote": "(\"(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$ExtPict": "(?:[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u2388\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2605\\u2607-\\u2612\\u2614-\\u2685\\u2690-\\u2705\\u2708-\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2767\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDCFF\\uDD0D-\\uDD0F\\uDD2F\\uDD6C-\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDAD-\\uDDE5\\uDE01-\\uDE0F\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE3C-\\uDE3F\\uDE49-\\uDFFA]|\\uD83D[\\uDC00-\\uDD3D\\uDD46-\\uDE4F\\uDE80-\\uDEFF\\uDF74-\\uDF7F\\uDFD5-\\uDFFF]|\\uD83E[\\uDC0C-\\uDC0F\\uDC48-\\uDC4F\\uDC5A-\\uDC5F\\uDC88-\\uDC8F\\uDCAE-\\uDCFF\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDEFF]|\\uD83F[\\uDC00-\\uDFFD])",
                "$Extend": "(?:[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFF9E\\uFF9F]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
                "$ExtendNumLet": "([_\\u202F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$FE": "(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])",
                "$Format": "(?:[\\xAD\\u061C\\u180E\\u200E\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\uFEFF\\uFFF9-\\uFFFB]|\\uD80D[\\uDC30-\\uDC3F]|\\uD82F[\\uDCA0-\\uDCA3]|\\uD834[\\uDD73-\\uDD7A]|\\uDB40\\uDC01)",
                "$Hebrew_Letter": "([\\u05D0-\\u05EA\\u05EF-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Katakana": "((?:[\\u3031-\\u3035\\u309B\\u309C\\u30A0-\\u30FA\\u30FC-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF9D]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00\\uDD20-\\uDD22\\uDD55\\uDD64-\\uDD67])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$LF": "\\n",
                "$MidLetter": "([:\\xB7\\u0387\\u055F\\u05F4\\u2027\\uFE13\\uFE55\\uFF1A](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$MidNum": "([,;\\u037E\\u0589\\u060C\\u060D\\u066C\\u07F8\\u2044\\uFE50\\uFE54\\uFF0C\\uFF1B](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$MidNumLet": "([\\.\\u2018\\u2019\\u2024\\uFE52\\uFF07\\uFF0E](?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$MidNumLetQ": "(([\\.\\u2018\\u2019\\u2024\\uFE52\\uFF07\\uFF0E]|')(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Newline": "[\\x0B\\f\\x85\\u2028\\u2029]",
                "$NotBreak_": "(?:[\\0-\\t\\x0E-\\x84\\x86-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])",
                "$Numeric": "((?:[0-9\\u0600-\\u0605\\u0660-\\u0669\\u066B\\u06DD\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0890\\u0891\\u08E2\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]|\\uD801[\\uDCA0-\\uDCA9]|[\\uD803\\uD818][\\uDD30-\\uDD39\\uDD40-\\uDD49]|\\uD804[\\uDC66-\\uDC6F\\uDCBD\\uDCCD\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9\\uDEF0-\\uDEF9]|\\uD805[\\uDC50-\\uDC59\\uDCD0-\\uDCD9\\uDE50-\\uDE59\\uDEC0-\\uDEC9\\uDED0-\\uDEE3\\uDF30-\\uDF39]|\\uD806[\\uDCE0-\\uDCE9\\uDD50-\\uDD59\\uDFF0-\\uDFF9]|\\uD807[\\uDC50-\\uDC59\\uDD50-\\uDD59\\uDDA0-\\uDDA9\\uDF50-\\uDF59]|\\uD81A[\\uDE60-\\uDE69\\uDEC0-\\uDEC9\\uDF50-\\uDF59]|\\uD81B[\\uDD70-\\uDD79]|\\uD833[\\uDCF0-\\uDCF9]|\\uD835[\\uDFCE-\\uDFFF]|\\uD838[\\uDD40-\\uDD49\\uDEF0-\\uDEF9]|\\uD839[\\uDCF0-\\uDCF9\\uDDF1-\\uDDFA]|\\uD83A[\\uDD50-\\uDD59]|\\uD83E[\\uDFF0-\\uDFF9])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$RI": "((?:\\uD83C[\\uDDE6-\\uDDFF])(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$Single_Quote": "('(?:[\\xAD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u061C\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180F\\u1885\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ACE\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u2060-\\u2064\\u2066-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFEFF\\uFF9E\\uFF9F\\uFFF9-\\uFFFB]|\\uD800[\\uDDFD\\uDEE0\\uDF76-\\uDF7A]|\\uD802[\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F\\uDEE5\\uDEE6]|\\uD803[\\uDD24-\\uDD27\\uDD69-\\uDD6D\\uDEAB\\uDEAC\\uDEFC-\\uDEFF\\uDF46-\\uDF50\\uDF82-\\uDF85]|\\uD804[\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC70\\uDC73\\uDC74\\uDC7F-\\uDC82\\uDCB0-\\uDCBA\\uDCC2\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD45\\uDD46\\uDD73\\uDD80-\\uDD82\\uDDB3-\\uDDC0\\uDDC9-\\uDDCC\\uDDCE\\uDDCF\\uDE2C-\\uDE37\\uDE3E\\uDE41\\uDEDF-\\uDEEA\\uDF00-\\uDF03\\uDF3B\\uDF3C\\uDF3E-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF57\\uDF62\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74\\uDFB8-\\uDFC0\\uDFC2\\uDFC5\\uDFC7-\\uDFCA\\uDFCC-\\uDFD0\\uDFD2\\uDFE1\\uDFE2]|\\uD805[\\uDC35-\\uDC46\\uDC5E\\uDCB0-\\uDCC3\\uDDAF-\\uDDB5\\uDDB8-\\uDDC0\\uDDDC\\uDDDD\\uDE30-\\uDE40\\uDEAB-\\uDEB7\\uDF1D-\\uDF2B]|\\uD806[\\uDC2C-\\uDC3A\\uDD30-\\uDD35\\uDD37\\uDD38\\uDD3B-\\uDD3E\\uDD40\\uDD42\\uDD43\\uDDD1-\\uDDD7\\uDDDA-\\uDDE0\\uDDE4\\uDE01-\\uDE0A\\uDE33-\\uDE39\\uDE3B-\\uDE3E\\uDE47\\uDE51-\\uDE5B\\uDE8A-\\uDE99]|\\uD807[\\uDC2F-\\uDC36\\uDC38-\\uDC3F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6\\uDD31-\\uDD36\\uDD3A\\uDD3C\\uDD3D\\uDD3F-\\uDD45\\uDD47\\uDD8A-\\uDD8E\\uDD90\\uDD91\\uDD93-\\uDD97\\uDEF3-\\uDEF6\\uDF00\\uDF01\\uDF03\\uDF34-\\uDF3A\\uDF3E-\\uDF42\\uDF5A]|\\uD80D[\\uDC30-\\uDC40\\uDC47-\\uDC55]|\\uD818[\\uDD1E-\\uDD2F]|\\uD81A[\\uDEF0-\\uDEF4\\uDF30-\\uDF36]|\\uD81B[\\uDF4F\\uDF51-\\uDF87\\uDF8F-\\uDF92\\uDFE4\\uDFF0\\uDFF1]|\\uD82F[\\uDC9D\\uDC9E\\uDCA0-\\uDCA3]|\\uD833[\\uDF00-\\uDF2D\\uDF30-\\uDF46]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A\\uDC8F\\uDD30-\\uDD36\\uDEAE\\uDEEC-\\uDEEF]|\\uD839[\\uDCEC-\\uDCEF\\uDDEE\\uDDEF]|\\uD83A[\\uDCD0-\\uDCD6\\uDD44-\\uDD4A]|\\uD83C[\\uDFFB-\\uDFFF]|\\uDB40[\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF])*)",
                "$WSegSpace": "[ \\u1680\\u2000-\\u2006\\u2008-\\u200A\\u205F\\u3000]",
                "$ZWJ": "\\u200D"
            }
        }
    },
    "ru": {
        "sentence": {
            "segmentRules": {},
            "suppressions": [
                "руб.",
                "янв.",
                "до н. э.",
                "сент.",
                "тел.",
                "дек.",
                "февр.",
                "нояб.",
                "апр.",
                "н. э.",
                "окт.",
                "тыс.",
                "авг.",
                "проф.",
                "н.э.",
                "кв.",
                "ул.",
                "отд."
            ],
            "variables": {}
        }
    },
    "zh": {}
};


/***/ }),

/***/ "./node_modules/@formatjs/intl-segmenter/src/segmentation-utils.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSurrogate = exports.replaceVariables = void 0;
var replaceVariables = function (variables, input) {
    var findVarRegex = /\$[A-Za-z0-9_]+/gm;
    return input.replaceAll(findVarRegex, function (match) {
        if (!(match in variables)) {
            throw new Error("No such variable ".concat(match));
        }
        return variables[match];
    });
};
exports.replaceVariables = replaceVariables;
var isSurrogate = function (str, pos) {
    return (0xd800 <= str.charCodeAt(pos - 1) &&
        str.charCodeAt(pos - 1) <= 0xdbff &&
        0xdc00 <= str.charCodeAt(pos) &&
        str.charCodeAt(pos) <= 0xdfff);
};
exports.isSurrogate = isSurrogate;
// alternative surrogate check mimicking the java implementation
// const TRAIL_SURROGATE_BITMASK = 0xfffffc00
// const TRAIL_SURROGATE_BITS = 0xdc00
// const LEAD_SURROGATE_BITMASK = 0xfffffc00
// const LEAD_SURROGATE_BITS = 0xd800
// const isSurrogate = (text: string, position: number) => {
//   if (
//     (text.charCodeAt(position - 1) & LEAD_SURROGATE_BITMASK) ==
//       LEAD_SURROGATE_BITS &&
//     (text.charCodeAt(position) & TRAIL_SURROGATE_BITMASK) ==
//       TRAIL_SURROGATE_BITS
//   ) {
//     return true
//   } else {
//     return false
//   }
// }


/***/ }),

/***/ "./node_modules/@formatjs/intl-segmenter/src/segmenter.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Segmenter = void 0;
var tslib_1 = __webpack_require__("./node_modules/tslib/tslib.es6.mjs");
var ecma402_abstract_1 = __webpack_require__("./node_modules/@formatjs/ecma402-abstract/lib/index.js");
var intl_localematcher_1 = __webpack_require__("./node_modules/@formatjs/intl-localematcher/lib/index.js");
var cldr_segmentation_rules_generated_1 = __webpack_require__("./node_modules/@formatjs/intl-segmenter/src/cldr-segmentation-rules.generated.js");
var segmentation_utils_1 = __webpack_require__("./node_modules/@formatjs/intl-segmenter/src/segmentation-utils.js");
/**
 * Adds $ to before rules and ^ to after rules for strictness
 * Replaces variables
 * Initializes the RegExp
 *
 * @param rule raw rule string from cldr-segmentation-rules.generated
 * @param variables
 * @param after appends ^ if true and $ if false
 * @returns
 */
var generateRuleRegex = function (rule, variables, after) {
    return new RegExp("".concat(after ? '^' : '').concat((0, segmentation_utils_1.replaceVariables)(variables, rule)).concat(after ? '' : '$'));
};
var prepareLocaleSegmentationRules = function (segmentationTypeValue) {
    var preparedRules = {};
    for (var _i = 0, _a = Object.keys(segmentationTypeValue.segmentRules); _i < _a.length; _i++) {
        var ruleNr = _a[_i];
        var ruleValue = segmentationTypeValue.segmentRules[ruleNr];
        var preparedRule = {
            breaks: ruleValue.breaks,
        };
        if ('before' in ruleValue && ruleValue.before) {
            preparedRule.before = generateRuleRegex(ruleValue.before, segmentationTypeValue.variables, false);
        }
        if ('after' in ruleValue && ruleValue.after) {
            preparedRule.after = generateRuleRegex(ruleValue.after, segmentationTypeValue.variables, true);
        }
        preparedRules[ruleNr] = preparedRule;
    }
    return preparedRules;
};
var breaksAtResult = function (breaks, matchingRule) { return ({
    breaks: breaks,
    matchingRule: matchingRule,
}); };
var Segmenter = /** @class */ (function () {
    function Segmenter(locales, options) {
        var _newTarget = this.constructor;
        if (_newTarget === undefined) {
            throw TypeError("Constructor Intl.Segmenter requires 'new'");
        }
        var requestedLocales = (0, ecma402_abstract_1.CanonicalizeLocaleList)(locales);
        options = (0, ecma402_abstract_1.GetOptionsObject)(options);
        var opt = Object.create(null);
        var matcher = (0, ecma402_abstract_1.GetOption)(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
        opt.localeMatcher = matcher;
        var granularity = (0, ecma402_abstract_1.GetOption)(options, 'granularity', 'string', ['word', 'sentence', 'grapheme'], 'grapheme');
        setSlot(this, 'granularity', granularity);
        //TODO: figure out correct availible locales
        var r = (0, intl_localematcher_1.ResolveLocale)(Segmenter.availableLocales, //availible locales
        requestedLocales, opt, [], // there is no relevantExtensionKeys
        {}, function () { return ''; } //use only root rules
        );
        setSlot(this, 'locale', r.locale);
        //root rules based on granularity
        this.mergedSegmentationTypeValue = cldr_segmentation_rules_generated_1.SegmentationRules.root[granularity];
        //merge root rules with locale ones if locale is specified
        if (r.locale.length) {
            var localeOverrides = cldr_segmentation_rules_generated_1.SegmentationRules[r.locale];
            if (granularity in localeOverrides) {
                var localeSegmentationTypeValue = localeOverrides[granularity];
                this.mergedSegmentationTypeValue.variables = tslib_1.__assign(tslib_1.__assign({}, this.mergedSegmentationTypeValue.variables), localeSegmentationTypeValue.variables);
                this.mergedSegmentationTypeValue.segmentRules = tslib_1.__assign(tslib_1.__assign({}, this.mergedSegmentationTypeValue.segmentRules), localeSegmentationTypeValue.segmentRules);
                this.mergedSegmentationTypeValue.suppressions = tslib_1.__spreadArray(tslib_1.__spreadArray([], this.mergedSegmentationTypeValue.suppressions, true), localeSegmentationTypeValue.suppressions, true);
            }
        }
        //prepare rules
        this.rules = prepareLocaleSegmentationRules(this.mergedSegmentationTypeValue);
        //order rule keys
        this.ruleSortedKeys = Object.keys(this.rules).sort(function (a, b) { return Number(a) - Number(b); });
    }
    Segmenter.prototype.breaksAt = function (position, input) {
        var ruleSortedKeys = this.ruleSortedKeys;
        var rules = this.rules;
        var mergedSegmentationTypeValue = this.mergedSegmentationTypeValue;
        //artificial rule 0.2
        if (position === 0) {
            return breaksAtResult(true, '0.2');
        }
        if (position === input.length) {
            //rule 0.3
            return breaksAtResult(true, '0.3');
        }
        //artificial rule 0.1: js specific, due to es5 regex not being unicode aware
        //number 0.1 chosen to mimic java implementation, but needs to execute after 0.2 and 0.3 to be inside the string bounds
        if ((0, segmentation_utils_1.isSurrogate)(input, position)) {
            return breaksAtResult(false, '0.1');
        }
        var stringBeforeBreak = input.substring(0, position);
        var stringAfterBreak = input.substring(position);
        //artificial rule 0.4: handle suppressions
        if ('suppressions' in mergedSegmentationTypeValue) {
            for (var _i = 0, _a = mergedSegmentationTypeValue.suppressions; _i < _a.length; _i++) {
                var suppressions = _a[_i];
                if (stringBeforeBreak.trim().endsWith(suppressions)) {
                    return breaksAtResult(false, '0.4');
                }
            }
        }
        // loop through rules and find a match
        for (var _b = 0, ruleSortedKeys_1 = ruleSortedKeys; _b < ruleSortedKeys_1.length; _b++) {
            var ruleKey = ruleSortedKeys_1[_b];
            var _c = rules[ruleKey], before = _c.before, after = _c.after, breaks = _c.breaks;
            // for debugging
            // if (ruleKey === '16' && position === 4) {
            //   console.log({before, after, stringBeforeBreak, stringAfterBreak})
            // }
            if (before) {
                if (!before.test(stringBeforeBreak)) {
                    //didn't match the before part, therfore skipping
                    continue;
                }
            }
            if (after) {
                if (!after.test(stringAfterBreak)) {
                    //didn't match the after part, therfore skipping
                    continue;
                }
            }
            return breaksAtResult(breaks, ruleKey);
        }
        //artificial rule 999: if no rule matched is Any ÷ Any so return true
        return breaksAtResult(true, '999');
    };
    Segmenter.prototype.segment = function (input) {
        checkReceiver(this, 'segment');
        return new SegmentIterator(this, input);
    };
    Segmenter.prototype.resolvedOptions = function () {
        checkReceiver(this, 'resolvedOptions');
        return tslib_1.__assign({}, (0, ecma402_abstract_1.getMultiInternalSlots)(__INTERNAL_SLOT_MAP__, this, 'locale', 'granularity'));
    };
    Segmenter.supportedLocalesOf = function (locales, options) {
        return (0, ecma402_abstract_1.SupportedLocales)(Segmenter.availableLocales, (0, ecma402_abstract_1.CanonicalizeLocaleList)(locales), options);
    };
    Segmenter.availableLocales = new Set(Object.keys(cldr_segmentation_rules_generated_1.SegmentationRules).filter(function (key) { return key !== 'root'; }));
    Segmenter.polyfilled = true;
    return Segmenter;
}());
exports.Segmenter = Segmenter;
var createSegmentDataObject = function (segmenter, segment, index, input, matchingRule) {
    var returnValue = {
        segment: segment,
        index: index,
        input: input,
    };
    if (getSlot(segmenter, 'granularity') === 'word') {
        returnValue.isWordLike = matchingRule !== '3.1' && matchingRule !== '3.2';
    }
    return returnValue;
};
var SegmentIterator = /** @class */ (function () {
    function SegmentIterator(segmenter, input) {
        this.segmenter = segmenter;
        this.lastSegmentIndex = 0;
        if (typeof input == 'symbol') {
            throw TypeError("Input must not be a symbol");
        }
        this.input = String(input);
    }
    SegmentIterator.prototype[Symbol.iterator] = function () {
        return new SegmentIterator(this.segmenter, this.input);
    };
    SegmentIterator.prototype.next = function () {
        //using only the relevant bit of the string
        var checkString = this.input.substring(this.lastSegmentIndex);
        //loop from the start of the checkString, until exactly length (breaksAt returns break at pos=== lenght)
        for (var position = 1; position <= checkString.length; position++) {
            var _a = this.segmenter.breaksAt(position, checkString), breaks = _a.breaks, matchingRule = _a.matchingRule;
            if (breaks) {
                var segment = checkString.substring(0, position);
                var index = this.lastSegmentIndex;
                this.lastSegmentIndex += position;
                return {
                    done: false,
                    value: createSegmentDataObject(this.segmenter, segment, index, this.input, matchingRule),
                };
            }
        }
        //no segment was found by the loop, therefore the segmentation is done
        return { done: true, value: undefined };
    };
    SegmentIterator.prototype.containing = function (positionInput) {
        if (typeof positionInput === 'bigint') {
            throw TypeError('Index must not be a BigInt');
        }
        var position = Number(positionInput);
        //https://tc39.es/ecma262/#sec-tointegerorinfinity
        // 2. If number is NaN, +0𝔽, or -0𝔽, return 0.
        if (isNaN(position) || !position) {
            position = 0;
        }
        // 5. Let integer be floor(abs(ℝ(number))).
        // 6. If number < -0𝔽, set integer to -integer.
        position = Math.floor(Math.abs(position)) * (position < 0 ? -1 : 1);
        if (position < 0 || position >= this.input.length) {
            return undefined;
        }
        //find previous break point
        var previousBreakPoint = 0;
        if (position === 0) {
            previousBreakPoint = 0;
        }
        else {
            var checkString_1 = this.input;
            for (var cursor = position; cursor >= 0; cursor--) {
                var breaks = this.segmenter.breaksAt(cursor, checkString_1).breaks;
                if (breaks) {
                    previousBreakPoint = cursor;
                    break;
                }
            }
        }
        var checkString = this.input.substring(previousBreakPoint);
        //find next break point
        for (var cursor = 1; cursor <= checkString.length; cursor++) {
            var _a = this.segmenter.breaksAt(cursor, checkString), breaks = _a.breaks, matchingRule = _a.matchingRule;
            if (breaks) {
                var segment = checkString.substring(0, cursor);
                return createSegmentDataObject(this.segmenter, segment, previousBreakPoint, this.input, matchingRule);
            }
        }
    };
    return SegmentIterator;
}());
var __INTERNAL_SLOT_MAP__ = new WeakMap();
function getSlot(instance, key) {
    return (0, ecma402_abstract_1.getInternalSlot)(__INTERNAL_SLOT_MAP__, instance, key);
}
function setSlot(instance, key, value) {
    (0, ecma402_abstract_1.setInternalSlot)(__INTERNAL_SLOT_MAP__, instance, key, value);
}
function checkReceiver(receiver, methodName) {
    if (!(receiver instanceof Segmenter)) {
        throw TypeError("Method Intl.Segmenter.prototype.".concat(methodName, " called on incompatible receiver"));
    }
}
try {
    // IE11 does not have Symbol
    if (typeof Symbol !== 'undefined') {
        Object.defineProperty(Segmenter.prototype, Symbol.toStringTag, {
            value: 'Intl.Segmenter',
            writable: false,
            enumerable: false,
            configurable: true,
        });
    }
    //github.com/tc39/test262/blob/main/test/intl402/Segmenter/constructor/length.js
    https: Object.defineProperty(Segmenter.prototype.constructor, 'length', {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true,
    });
    // https://github.com/tc39/test262/blob/main/test/intl402/Segmenter/constructor/supportedLocalesOf/length.js
    Object.defineProperty(Segmenter.supportedLocalesOf, 'length', {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: true,
    });
}
catch (e) {
    // Meta fix so we're test262-compliant, not important
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

}]);
//# sourceMappingURL=intl-segmenter-polyfill.js.map