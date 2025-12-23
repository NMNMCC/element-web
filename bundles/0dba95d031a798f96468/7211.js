"use strict";
(globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || []).push([[7211],{

/***/ "./src/async-components/views/dialogs/security/ImportE2eKeysDialog.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImportE2eKeysDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./matrix-js-sdk/src/logger.ts");
/* harmony import */ var _utils_MegolmExportEncryption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/MegolmExportEncryption.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _components_views_elements_Field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/views/elements/Field.tsx");


/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.
Copyright 2017 Vector Creations Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      var _e$target;
      if ((_e$target = e.target) !== null && _e$target !== void 0 && _e$target.result) {
        resolve(e.target.result);
      } else {
        reject(new Error("Failed to read file due to unknown error"));
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}
var Phase = /*#__PURE__*/function (Phase) {
  Phase["Edit"] = "edit";
  Phase["Importing"] = "importing";
  return Phase;
}(Phase || {});
class ImportE2eKeysDialog extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "unmounted", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "file", /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onFormChange", () => {
      var _this$file$current;
      const files = (_this$file$current = this.file.current) === null || _this$file$current === void 0 ? void 0 : _this$file$current.files;
      this.setState({
        enableSubmit: this.state.passphrase !== "" && !!(files !== null && files !== void 0 && files.length)
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onPassphraseChange", ev => {
      this.setState({
        passphrase: ev.target.value
      }, this.onFormChange); // update general form state too
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onFormSubmit", ev => {
      var _this$file$current2;
      ev.preventDefault();
      // noinspection JSIgnoredPromiseFromCall
      const file = (_this$file$current2 = this.file.current) === null || _this$file$current2 === void 0 || (_this$file$current2 = _this$file$current2.files) === null || _this$file$current2 === void 0 ? void 0 : _this$file$current2[0];
      if (file) {
        this.startImport(file, this.state.passphrase);
      }
      return false;
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onCancelClick", ev => {
      ev.preventDefault();
      this.props.onFinished(false);
      return false;
    });
    this.state = {
      enableSubmit: false,
      phase: Phase.Edit,
      errStr: null,
      passphrase: ""
    };
  }
  componentDidMount() {
    this.unmounted = false;
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  startImport(file, passphrase) {
    this.setState({
      errStr: null,
      phase: Phase.Importing
    });
    return readFileAsArrayBuffer(file).then(arrayBuffer => {
      return _utils_MegolmExportEncryption__WEBPACK_IMPORTED_MODULE_4__/* .decryptMegolmKeyFile */ .c(arrayBuffer, passphrase);
    }).then(keys => {
      return this.props.matrixClient.getCrypto().importRoomKeysAsJson(keys);
    }).then(() => {
      // TODO: it would probably be nice to give some feedback about what we've imported here.
      this.props.onFinished(true);
    }).catch(e => {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.error("Error importing e2e keys:", e);
      if (this.unmounted) {
        return;
      }
      const msg = e.friendlyText || (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("error|unknown");
      this.setState({
        errStr: msg,
        phase: Phase.Edit
      });
    });
  }
  render() {
    const disableForm = this.state.phase !== Phase.Edit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      className: "mx_importE2eKeysDialog",
      onFinished: this.props.onFinished,
      title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("settings|key_export_import|import_title")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
      onSubmit: this.onFormSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_Dialog_content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("settings|key_export_import|import_description_1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("settings|key_export_import|import_description_2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "error"
    }, this.state.errStr), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_E2eKeysDialog_inputTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_E2eKeysDialog_inputRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_E2eKeysDialog_inputLabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
      htmlFor: "importFile"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("settings|key_export_import|file_to_import"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_E2eKeysDialog_inputCell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
      ref: this.file,
      id: "importFile",
      type: "file",
      autoFocus: true,
      onChange: this.onFormChange,
      disabled: disableForm
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_E2eKeysDialog_inputRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_views_elements_Field__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("settings|key_export_import|enter_passphrase"),
      value: this.state.passphrase,
      onChange: this.onPassphraseChange,
      size: 64,
      type: "password",
      disabled: disableForm
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "mx_Dialog_buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
      className: "mx_Dialog_primary",
      type: "submit",
      value: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("action|import"),
      disabled: !this.state.enableSubmit || disableForm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
      onClick: this.onCancelClick,
      disabled: disableForm
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("action|cancel")))));
  }
}

/***/ }),

/***/ "./src/utils/MegolmExportEncryption.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ encryptMegolmKeyFile),
/* harmony export */   c: () => (/* binding */ decryptMegolmKeyFile)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.detached.js");
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.transfer.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.filter-reject.js");
/* harmony import */ var core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_filter_reject_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.group-by.js");
/* harmony import */ var core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_group_by_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.to-spliced.js");
/* harmony import */ var core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_to_spliced_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/core-js/modules/esnext.typed-array.unique-by.js");
/* harmony import */ var core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_unique_by_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_uint8_array_set_from_base64_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.set-from-base64.js");
/* harmony import */ var core_js_modules_esnext_uint8_array_set_from_base64_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_uint8_array_set_from_base64_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_uint8_array_set_from_hex_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.set-from-hex.js");
/* harmony import */ var core_js_modules_esnext_uint8_array_set_from_hex_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_uint8_array_set_from_hex_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_uint8_array_to_base64_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.to-base64.js");
/* harmony import */ var core_js_modules_esnext_uint8_array_to_base64_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_uint8_array_to_base64_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_uint8_array_to_hex_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/core-js/modules/esnext.uint8-array.to-hex.js");
/* harmony import */ var core_js_modules_esnext_uint8_array_to_hex_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_uint8_array_to_hex_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./matrix-js-sdk/src/logger.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _SdkConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/SdkConfig.ts");




















/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.
Copyright 2017 Vector Creations Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




const subtleCrypto = window.crypto.subtle;

/**
 * Make an Error object which has a friendlyText property which is already
 * translated and suitable for showing to the user.
 *
 * @param {string} message message for the exception
 * @param {string} friendlyText
 * @returns {{message: string, friendlyText: string}}
 */
function friendlyError(message, friendlyText) {
  return {
    message,
    friendlyText
  };
}
function cryptoFailMsg() {
  return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_21__._t)("encryption|export_unsupported");
}

/**
 * Decrypt a megolm key file
 *
 * @param {ArrayBuffer} data file to decrypt
 * @param {String} password
 * @return {Promise<String>} promise for decrypted output
 *
 *
 */
async function decryptMegolmKeyFile(data, password) {
  const body = unpackMegolmKeyFile(data);
  const brand = _SdkConfig__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay.get().brand;

  // check we have a version byte
  if (body.length < 1) {
    throw friendlyError("Invalid file: too short", (0,_languageHandler__WEBPACK_IMPORTED_MODULE_21__._t)("encryption|import_invalid_keyfile", {
      brand
    }));
  }
  const version = body[0];
  if (version !== 1) {
    throw friendlyError("Unsupported version", (0,_languageHandler__WEBPACK_IMPORTED_MODULE_21__._t)("encryption|import_invalid_keyfile", {
      brand
    }));
  }
  const ciphertextLength = body.length - (1 + 16 + 16 + 4 + 32);
  if (ciphertextLength < 0) {
    throw friendlyError("Invalid file: too short", (0,_languageHandler__WEBPACK_IMPORTED_MODULE_21__._t)("encryption|import_invalid_keyfile", {
      brand
    }));
  }
  const salt = body.subarray(1, 1 + 16);
  const iv = body.subarray(17, 17 + 16);
  const iterations = body[33] << 24 | body[34] << 16 | body[35] << 8 | body[36];
  const ciphertext = body.subarray(37, 37 + ciphertextLength);
  const hmac = body.subarray(-32);
  const [aesKey, hmacKey] = await deriveKeys(salt, iterations, password);
  const toVerify = body.subarray(0, -32);
  let isValid;
  try {
    isValid = await subtleCrypto.verify({
      name: "HMAC"
    }, hmacKey, hmac, toVerify);
  } catch (e) {
    throw friendlyError("subtleCrypto.verify failed: " + e, cryptoFailMsg());
  }
  if (!isValid) {
    throw friendlyError("hmac mismatch", (0,_languageHandler__WEBPACK_IMPORTED_MODULE_21__._t)("encryption|import_invalid_passphrase"));
  }
  let plaintext;
  try {
    plaintext = await subtleCrypto.decrypt({
      name: "AES-CTR",
      counter: iv,
      length: 64
    }, aesKey, ciphertext);
  } catch (e) {
    throw friendlyError("subtleCrypto.decrypt failed: " + e, cryptoFailMsg());
  }
  return new TextDecoder().decode(new Uint8Array(plaintext));
}

/**
 * Encrypt a megolm key file
 *
 * @param {String} data
 * @param {String} password
 * @param {Object=} options
 * @param {Number=} options.kdf_rounds Number of iterations to perform of the
 *    key-derivation function.
 * @return {Promise<ArrayBuffer>} promise for encrypted output
 */
async function encryptMegolmKeyFile(data, password, options // eslint-disable-line camelcase
) {
  options = options || {};
  const kdfRounds = options.kdf_rounds || 500000;
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);
  const iv = new Uint8Array(16);
  window.crypto.getRandomValues(iv);

  // clear bit 63 of the IV to stop us hitting the 64-bit counter boundary
  // (which would mean we wouldn't be able to decrypt on Android). The loss
  // of a single bit of iv is a price we have to pay.
  iv[8] &= 0x7f;
  const [aesKey, hmacKey] = await deriveKeys(salt, kdfRounds, password);
  const encodedData = new TextEncoder().encode(data);
  let ciphertext;
  try {
    ciphertext = await subtleCrypto.encrypt({
      name: "AES-CTR",
      counter: iv,
      length: 64
    }, aesKey, encodedData);
  } catch (e) {
    throw friendlyError("subtleCrypto.encrypt failed: " + e, cryptoFailMsg());
  }
  const cipherArray = new Uint8Array(ciphertext);
  const bodyLength = 1 + salt.length + iv.length + 4 + cipherArray.length + 32;
  const resultBuffer = new Uint8Array(bodyLength);
  let idx = 0;
  resultBuffer[idx++] = 1; // version
  resultBuffer.set(salt, idx);
  idx += salt.length;
  resultBuffer.set(iv, idx);
  idx += iv.length;
  resultBuffer[idx++] = kdfRounds >> 24;
  resultBuffer[idx++] = kdfRounds >> 16 & 0xff;
  resultBuffer[idx++] = kdfRounds >> 8 & 0xff;
  resultBuffer[idx++] = kdfRounds & 0xff;
  resultBuffer.set(cipherArray, idx);
  idx += cipherArray.length;
  const toSign = resultBuffer.subarray(0, idx);
  let hmac;
  try {
    hmac = await subtleCrypto.sign({
      name: "HMAC"
    }, hmacKey, toSign);
  } catch (e) {
    throw friendlyError("subtleCrypto.sign failed: " + e, cryptoFailMsg());
  }
  const hmacArray = new Uint8Array(hmac);
  resultBuffer.set(hmacArray, idx);
  return packMegolmKeyFile(resultBuffer);
}

/**
 * Derive the AES and HMAC-SHA-256 keys for the file
 *
 * @param {Unit8Array} salt  salt for pbkdf
 * @param {Number} iterations number of pbkdf iterations
 * @param {String} password  password
 * @return {Promise<[CryptoKey, CryptoKey]>} promise for [aes key, hmac key]
 */
async function deriveKeys(salt, iterations, password) {
  const start = new Date();
  let key;
  try {
    key = await subtleCrypto.importKey("raw", new TextEncoder().encode(password), {
      name: "PBKDF2"
    }, false, ["deriveBits"]);
  } catch (e) {
    throw friendlyError("subtleCrypto.importKey failed: " + e, cryptoFailMsg());
  }
  let keybits;
  try {
    keybits = await subtleCrypto.deriveBits({
      name: "PBKDF2",
      salt: salt,
      iterations: iterations,
      hash: "SHA-512"
    }, key, 512);
  } catch (e) {
    throw friendlyError("subtleCrypto.deriveBits failed: " + e, cryptoFailMsg());
  }
  const now = new Date();
  matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_20__/* .logger */ .vF.log("E2e import/export: deriveKeys took " + (now.getTime() - start.getTime()) + "ms");
  const aesKey = keybits.slice(0, 32);
  const hmacKey = keybits.slice(32);
  const aesProm = subtleCrypto.importKey("raw", aesKey, {
    name: "AES-CTR"
  }, false, ["encrypt", "decrypt"]).catch(e => {
    throw friendlyError("subtleCrypto.importKey failed for AES key: " + e, cryptoFailMsg());
  });
  const hmacProm = subtleCrypto.importKey("raw", hmacKey, {
    name: "HMAC",
    hash: {
      name: "SHA-256"
    }
  }, false, ["sign", "verify"]).catch(e => {
    throw friendlyError("subtleCrypto.importKey failed for HMAC key: " + e, cryptoFailMsg());
  });
  return Promise.all([aesProm, hmacProm]);
}
const HEADER_LINE = "-----BEGIN MEGOLM SESSION DATA-----";
const TRAILER_LINE = "-----END MEGOLM SESSION DATA-----";

/**
 * Unbase64 an ascii-armoured megolm key file
 *
 * Strips the header and trailer lines, and unbase64s the content
 *
 * @param {ArrayBuffer} data  input file
 * @return {Uint8Array} unbase64ed content
 */
function unpackMegolmKeyFile(data) {
  // parse the file as a great big String. This should be safe, because there
  // should be no non-ASCII characters, and it means that we can do string
  // comparisons to find the header and footer, and feed it into window.atob.
  const fileStr = new TextDecoder().decode(new Uint8Array(data));

  // look for the start line
  let lineStart = 0;
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const lineEnd = fileStr.indexOf("\n", lineStart);
    if (lineEnd < 0) {
      throw new Error("Header line not found");
    }
    const line = fileStr.slice(lineStart, lineEnd).trim();

    // start the next line after the newline
    lineStart = lineEnd + 1;
    if (line === HEADER_LINE) {
      break;
    }
  }
  const dataStart = lineStart;

  // look for the end line
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const lineEnd = fileStr.indexOf("\n", lineStart);
    const line = fileStr.slice(lineStart, lineEnd < 0 ? undefined : lineEnd).trim();
    if (line === TRAILER_LINE) {
      break;
    }
    if (lineEnd < 0) {
      throw new Error("Trailer line not found");
    }

    // start the next line after the newline
    lineStart = lineEnd + 1;
  }
  const dataEnd = lineStart;
  return decodeBase64(fileStr.slice(dataStart, dataEnd));
}

/**
 * ascii-armour a  megolm key file
 *
 * base64s the content, and adds header and trailer lines
 *
 * @param {Uint8Array} data  raw data
 * @return {ArrayBuffer} formatted file
 */
function packMegolmKeyFile(data) {
  // we split into lines before base64ing, because encodeBase64 doesn't deal
  // terribly well with large arrays.
  const LINE_LENGTH = 72 * 4 / 3;
  const nLines = Math.ceil(data.length / LINE_LENGTH);
  const lines = new Array(nLines + 3);
  lines[0] = HEADER_LINE;
  let o = 0;
  let i;
  for (i = 1; i <= nLines; i++) {
    lines[i] = encodeBase64(data.subarray(o, o + LINE_LENGTH));
    o += LINE_LENGTH;
  }
  lines[i++] = TRAILER_LINE;
  lines[i] = "";
  return new TextEncoder().encode(lines.join("\n")).buffer;
}

/**
 * Encode a typed array of uint8 as base64.
 * @param {Uint8Array} uint8Array The data to encode.
 * @return {string} The base64.
 */
function encodeBase64(uint8Array) {
  // Misinterpt the Uint8Array as Latin-1.
  // window.btoa expects a unicode string with codepoints in the range 0-255.
  const latin1String = String.fromCharCode.apply(null, Array.from(uint8Array));
  // Use the builtin base64 encoder.
  return window.btoa(latin1String);
}

/**
 * Decode a base64 string to a typed array of uint8.
 * @param {string} base64 The base64 to decode.
 * @return {Uint8Array} The decoded data.
 */
function decodeBase64(base64) {
  // window.atob returns a unicode string with codepoints in the range 0-255.
  const latin1String = window.atob(base64);
  // Encode the string as a Uint8Array
  const uint8Array = new Uint8Array(latin1String.length);
  for (let i = 0; i < latin1String.length; i++) {
    uint8Array[i] = latin1String.charCodeAt(i);
  }
  return uint8Array;
}

/***/ })

}]);
//# sourceMappingURL=7211.js.map