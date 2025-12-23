"use strict";
(globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || []).push([[9393],{

/***/ "./src/utils/PasswordScorer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scorePassword: () => (/* binding */ scorePassword)
/* harmony export */ });
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@zxcvbn-ts/core/dist/index.esm.js");
/* harmony import */ var _zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@zxcvbn-ts/language-common/dist/index.esm.js");
/* harmony import */ var _zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@zxcvbn-ts/language-en/dist/index.esm.js");
/* harmony import */ var _zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@zxcvbn-ts/language-en/dist/translations.esm.js");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _SdkConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/SdkConfig.ts");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2018-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_5__/* .zxcvbnOptions */ .u2.setOptions({
  dictionary: _objectSpread(_objectSpread(_objectSpread({}, _zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_6__/* .dictionary */ .z), _zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_7__/* .dictionary */ .z), {}, {
    userInputs: ["riot", "matrix", "element", _SdkConfig__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay.get().brand]
  }),
  graphs: _zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_6__/* .adjacencyGraphs */ .K,
  useLevenshteinDistance: true
});
function getTranslations() {
  return {
    warnings: {
      straightRow: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|straightRow"),
      keyPattern: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|keyPattern"),
      simpleRepeat: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|simpleRepeat"),
      extendedRepeat: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|extendedRepeat"),
      sequences: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|sequences"),
      recentYears: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|recentYears"),
      dates: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|dates"),
      topTen: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|topTen"),
      topHundred: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|topHundred"),
      common: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|common"),
      similarToCommon: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|similarToCommon"),
      wordByItself: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|wordByItself"),
      namesByThemselves: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|namesByThemselves"),
      commonNames: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|commonNames"),
      userInputs: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|userInputs"),
      pwned: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|warnings|pwned")
    },
    suggestions: {
      l33t: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|l33t"),
      reverseWords: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|reverseWords"),
      allUppercase: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|allUppercase"),
      capitalization: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|capitalization"),
      dates: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|dates"),
      recentYears: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|recentYears"),
      associatedYears: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|associatedYears"),
      sequences: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|sequences"),
      repeated: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|repeated"),
      longerKeyboardPattern: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|longerKeyboardPattern"),
      anotherWord: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|anotherWord"),
      useWords: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|useWords"),
      noNeed: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|noNeed"),
      pwned: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_9__._t)("zxcvbn|suggestions|pwned")
    },
    // We don't utilise the time estimation at this time so just pass through the English translations here
    timeEstimation: _zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.timeEstimation
  };
}

/**
 * Wrapper around zxcvbn password strength estimation
 * Include this only from async components: it pulls in zxcvbn
 * (obviously) which is large.
 *
 * @param {string} password Password to score
 * @param matrixClient the client of the logged-in user, if any
 * @param userInputs additional strings such as the user's name which should be considered a bad password component
 * @returns {object} Score result with `score` and `feedback` properties
 */
function scorePassword(matrixClient, password, userInputs = []) {
  if (password.length === 0) return null;

  // copy the supplied array before modifying it
  const inputs = [...userInputs];
  if (matrixClient) {
    inputs.push(matrixClient.getUserIdLocalpart());
    try {
      const domain = matrixClient.getDomain();
      inputs.push(domain);
    } catch {
      // This is fine
    }
  }
  _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_5__/* .zxcvbnOptions */ .u2.setTranslations(getTranslations());
  let zxcvbnResult = (0,_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_5__/* .zxcvbn */ .K1)(password, inputs);
  // Work around https://github.com/dropbox/zxcvbn/issues/216
  if (password.includes(" ")) {
    const resultNoSpaces = (0,_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_5__/* .zxcvbn */ .K1)(password.replace(/ /g, ""), inputs);
    if (resultNoSpaces.score < zxcvbnResult.score) zxcvbnResult = resultNoSpaces;
  }
  return zxcvbnResult;
}

/***/ })

}]);
//# sourceMappingURL=9393.js.map