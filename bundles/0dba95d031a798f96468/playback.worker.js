/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/workers/playback.worker.ts":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.constructor.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.self.js
var web_self = __webpack_require__("./node_modules/core-js/modules/web.self.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("./node_modules/core-js/modules/es.error.cause.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.aggregate-error.js
var es_aggregate_error = __webpack_require__("./node_modules/core-js/modules/es.aggregate-error.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.aggregate-error.cause.js
var es_aggregate_error_cause = __webpack_require__("./node_modules/core-js/modules/es.aggregate-error.cause.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("./node_modules/core-js/modules/es.array.push.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("./node_modules/core-js/modules/es.array.reduce.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.detached.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.transfer.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__("./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.any.js
var es_promise_any = __webpack_require__("./node_modules/core-js/modules/es.promise.any.js");
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.filter.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.for-each.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.reduce.js
var esnext_iterator_reduce = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.reduce.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.some.js
var esnext_iterator_some = __webpack_require__("./node_modules/core-js/modules/esnext.iterator.some.js");
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
;// ./packages/shared-components/dist/element-web-shared-components.mjs
/* provided dependency */ var process = __webpack_require__("./node_modules/process/browser.js");


function Ja(e) {
  return vS(e.subscribe, e.getSnapshot, e.getSnapshot);
}
var hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function f1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vs = { exports: {} };
var Wd;
function SS() {
  return Wd || (Wd = 1, (function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function i() {
        for (var c = "", f = 0; f < arguments.length; f++) {
          var p = arguments[f];
          p && (c = u(c, a(p)));
        }
        return c;
      }
      function a(c) {
        if (typeof c == "string" || typeof c == "number")
          return c;
        if (typeof c != "object")
          return "";
        if (Array.isArray(c))
          return i.apply(null, c);
        if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
          return c.toString();
        var f = "";
        for (var p in c)
          r.call(c, p) && c[p] && (f = u(f, p));
        return f;
      }
      function u(c, f) {
        return f ? c ? c + " " + f : c + f : c;
      }
      e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
    })();
  })(Vs)), Vs.exports;
}
var OS = SS();
const ot = /* @__PURE__ */ f1(OS), TS = "_mediaBody_11o4b_8", IS = {
  mediaBody: TS
};
function RS({
  as: e,
  className: r,
  children: i,
  ...a
}) {
  const u = e || "div";
  return /* @__PURE__ */ H.createElement(u, { className: ot("mx_MediaBody", IS.mediaBody, r), ...a }, i);
}
const xS = "_flex_4dswl_9", MS = {
  flex: xS
};
function Ne({
  as: e = "div",
  display: r = "flex",
  direction: i = "row",
  align: a = "start",
  justify: u = "start",
  gap: c = "0",
  wrap: f = "nowrap",
  className: p,
  children: d,
  ...g
}) {
  const m = (0,react.useMemo)(
    () => ({
      "--mx-flex-display": r,
      "--mx-flex-direction": i,
      "--mx-flex-align": a,
      "--mx-flex-justify": u,
      "--mx-flex-gap": c,
      "--mx-flex-wrap": f
    }),
    [a, i, r, c, u, f]
  );
  return react.createElement(e, { ...g, className: ot(MS.flex, p), style: m }, d);
}
const PS = "_audioPlayer_1ly1h_8", CS = "_mediaInfo_1ly1h_12", DS = "_mediaName_1ly1h_17", NS = "_byline_1ly1h_26", LS = "_clock_1ly1h_30", FS = "_error_1ly1h_34", ai = {
  audioPlayer: PS,
  mediaInfo: CS,
  mediaName: DS,
  byline: NS,
  clock: LS,
  error: FS
};
var Sa = { exports: {} }, Xi = {};
var Yd;
function BS() {
  if (Yd) return Xi;
  Yd = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(a, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var p in u)
        p !== "key" && (c[p] = u[p]);
    } else c = u;
    return u = c.ref, {
      $$typeof: e,
      type: a,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return Xi.Fragment = r, Xi.jsx = i, Xi.jsxs = i, Xi;
}
var Qi = {};
var $d;
function jS() {
  return $d || ($d = 1,  false && 0), Qi;
}
var zd;
function qS() {
  return zd || (zd = 1,  true ? Sa.exports = BS() : 0), Sa.exports;
}
var $n = qS();
function l1(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743"
    })
  });
}
l1.displayName = "PlaySolidIcon";
const US = (0,react.forwardRef)(l1);
function p1(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2"
    })
  });
}
p1.displayName = "PauseSolidIcon";
const kS = (0,react.forwardRef)(p1), WS = "_button_yfjla_8", YS = {
  button: WS
}, h1 = (0,react.createContext)(null);
h1.displayName = "I18nContext";
function wi() {
  const e = (0,react.useContext)(h1);
  if (!e)
    throw new Error("useI18n must be used within an I18nContext.Provider");
  return e;
}
function $S({
  disabled: e = !1,
  playing: r = !1,
  togglePlay: i,
  ...a
}) {
  const { translate: u } = wi(), c = u(r ? "action|pause" : "action|play");
  return /* @__PURE__ */ H.createElement(
    c1,
    {
      size: "32px",
      "aria-label": c,
      tooltip: c,
      onClick: i,
      className: YS.button,
      disabled: e,
      ...a
    },
    r ? /* @__PURE__ */ H.createElement(kS, null) : /* @__PURE__ */ H.createElement(US, null)
  );
}
function zS(e, r = 2) {
  if (e === 0) return "0 Bytes";
  const i = 1024, a = r < 0 ? 0 : r, u = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], c = Math.floor(Math.log(e) / Math.log(i));
  return parseFloat((e / Math.pow(i, c)).toFixed(a)) + " " + u[c];
}
function De(e, r, i, a, u) {
  return jt(r, ((c, f) => {
    const p = c[f];
    if (p === void 0)
      throw new TypeError(Ol(f));
    return p;
  })(e, r), i, a, u);
}
function jt(e, r, i, a, u, c) {
  const f = so(r, i, a);
  if (u && r !== f)
    throw new RangeError(I0(e, r, i, a, c));
  return f;
}
function be(e) {
  return e !== null && /object|function/.test(typeof e);
}
function He(e, r = Map) {
  const i = new r();
  return (a, ...u) => {
    if (i.has(a))
      return i.get(a);
    const c = e(a, ...u);
    return i.set(a, c), c;
  };
}
function uo(e) {
  return gi({
    name: e
  }, 1);
}
function gi(e, r) {
  return qt(((i) => ({
    value: i,
    configurable: 1,
    writable: !r
  })), e);
}
function GS(e) {
  return qt(((r) => ({
    get: r,
    configurable: 1
  })), e);
}
function Cf(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function bi(e, r) {
  const i = {};
  let a = e.length;
  for (const u of r)
    i[e[--a]] = u;
  return i;
}
function qt(e, r, i) {
  const a = {};
  for (const u in r)
    a[u] = e(r[u], u, i);
  return a;
}
function Va(e, r, i) {
  const a = {};
  for (let u = 0; u < r.length; u++) {
    const c = r[u];
    a[c] = e(c, u, i);
  }
  return a;
}
function d1(e, r, i) {
  const a = {};
  for (let u = 0; u < e.length; u++)
    a[r[u]] = i[e[u]];
  return a;
}
function at(e, r) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of e)
    i[a] = r[a];
  return i;
}
function Gd(e, r) {
  for (const i of r)
    if (i in e)
      return 1;
  return 0;
}
function g1(e, r, i) {
  for (const a of e)
    if (r[a] !== i[a])
      return 0;
  return 1;
}
function y1(e, r, i) {
  const a = {
    ...i
  };
  for (let u = 0; u < r; u++)
    a[e[u]] = 0;
  return a;
}
function Tn(e, ...r) {
  return (...i) => e(...r, ...i);
}
function Zd(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function yo(e) {
  return e.slice().sort();
}
function qa(e, r) {
  return String(r).padStart(e, "0");
}
function or(e, r) {
  return Math.sign(e - r);
}
function so(e, r, i) {
  return Math.min(Math.max(e, r), i);
}
function Lt(e, r) {
  return [Math.floor(e / r), oo(e, r)];
}
function oo(e, r) {
  return (e % r + r) % r;
}
function sr(e, r) {
  return [Xa(e, r), Df(e, r)];
}
function Xa(e, r) {
  return Math.trunc(e / r) || 0;
}
function Df(e, r) {
  return e % r || 0;
}
function Oa(e) {
  return Math.abs(e % 1) === 0.5;
}
function v1(e, r, i) {
  let a = 0, u = 0;
  for (let p = 0; p <= r; p++) {
    const d = e[i[p]], g = _t[p], m = qn / g, [v, w] = sr(d, m);
    a += w * g, u += v;
  }
  const [c, f] = sr(a, qn);
  return [u + c, f];
}
function Qa(e, r, i) {
  const a = {};
  for (let u = r; u >= 0; u--) {
    const c = _t[u];
    a[i[u]] = Xa(e, c), e = Df(e, c);
  }
  return a;
}
function ZS(e) {
  if (e !== void 0)
    return he(e);
}
function HS(e) {
  if (e !== void 0)
    return Nt(e);
}
function m1(e) {
  if (e !== void 0)
    return Nf(e);
}
function Nt(e) {
  return b1(Nf(e));
}
function Nf(e) {
  return w1(iI(e));
}
function _1(e, r) {
  if (r == null)
    throw new RangeError(Ol(e));
  return r;
}
function vo(e) {
  if (!be(e))
    throw new TypeError(xT);
  return e;
}
function Lf(e, r, i = e) {
  if (typeof r !== e)
    throw new TypeError(mr(i, r));
  return r;
}
function w1(e, r = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(AT(r, e));
  return e || 0;
}
function b1(e, r = "number") {
  if (e <= 0)
    throw new RangeError(ST(r, e));
  return e;
}
function Ff(e) {
  if (typeof e == "symbol")
    throw new TypeError(RT);
  return String(e);
}
function La(e, r) {
  return be(e) ? String(e) : he(e, r);
}
function Bf(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(IT(e));
  return e;
}
function E1(e, r = "number") {
  if (typeof e == "bigint")
    throw new TypeError(TT(r));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(OT(r, e));
  return e;
}
function _e(e, r) {
  return Math.trunc(E1(e, r)) || 0;
}
function jf(e, r) {
  return w1(E1(e, r), r);
}
function Hd(e, r) {
  return b1(_e(e, r), r);
}
function qf(e, r) {
  let [i, a] = sr(r, qn), u = e + i;
  const c = Math.sign(u);
  return c && c === -Math.sign(a) && (u -= c, a += c * qn), [u, a];
}
function yi(e, r, i = 1) {
  return qf(e[0] + r[0] * i, e[1] + r[1] * i);
}
function Lr(e, r) {
  return qf(e[0], e[1] + r);
}
function vt(e, r) {
  return yi(r, e, -1);
}
function Ke(e, r) {
  return or(e[0], r[0]) || or(e[1], r[1]);
}
function A1(e, r, i) {
  return Ke(e, r) === -1 || Ke(e, i) === 1;
}
function Uf(e, r = 1) {
  const i = BigInt(qn / r);
  return [Number(e / i), Number(e % i) * r];
}
function Ua(e, r = 1) {
  const i = qn / r, [a, u] = sr(e, i);
  return [a, u * r];
}
function mt(e, r = 1, i) {
  const [a, u] = e, [c, f] = sr(u, r);
  return a * (qn / r) + (c + (i ? f / r : 0));
}
function kf(e, r, i = Lt) {
  const [a, u] = e, [c, f] = i(u, r);
  return [a * (qn / r) + c, f];
}
function Wf(e) {
  return De(e, "isoYear", go, ho, 1), e.isoYear === go ? De(e, "isoMonth", 4, 12, 1) : e.isoYear === ho && De(e, "isoMonth", 1, 9, 1), e;
}
function tt(e) {
  return Be({
    ...e,
    ...je,
    isoHour: 12
  }), e;
}
function Be(e) {
  const r = De(e, "isoYear", go, ho, 1), i = r === go ? 1 : r === ho ? -1 : 0;
  return i && bt(ue({
    ...e,
    isoDay: e.isoDay + i,
    isoNanosecond: e.isoNanosecond - i
  })), e;
}
function bt(e) {
  if (!e || A1(e, lI, fI))
    throw new RangeError(_r);
  return e;
}
function cr(e) {
  return v1(e, 5, ct)[1];
}
function nu(e) {
  const [r, i] = Lt(e, qn);
  return [Qa(i, 5, ct), r];
}
function Kd(e) {
  return kf(e, yt);
}
function we(e) {
  return Ei(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function ue(e) {
  const r = we(e);
  if (r !== void 0) {
    const [i, a] = sr(r, Fe);
    return [i, a * Wt + (e.isoMicrosecond || 0) * So + (e.isoNanosecond || 0)];
  }
}
function Yf(e, r) {
  const [i, a] = nu(cr(e) - r);
  return bt(ue({
    ...e,
    isoDay: e.isoDay + a,
    ...i
  }));
}
function ka(...e) {
  return Ei(...e) / F0;
}
function Ei(...e) {
  const [r, i] = S1(...e), a = r.valueOf();
  if (!isNaN(a))
    return a - i * Fe;
}
function S1(e, r = 1, i = 1, a = 0, u = 0, c = 0, f = 0) {
  const p = e === go ? 1 : e === ho ? -1 : 0, d = /* @__PURE__ */ new Date();
  return d.setUTCHours(a, u, c, f), d.setUTCFullYear(e, r - 1, i + p), [d, p];
}
function Ai(e, r) {
  let [i, a] = Lr(e, r);
  a < 0 && (a += qn, i -= 1);
  const [u, c] = Lt(a, Wt), [f, p] = Lt(c, So);
  return eu(i * Fe + u, f, p);
}
function eu(e, r = 0, i = 0) {
  const a = Math.ceil(Math.max(0, Math.abs(e) - Bl) / Fe) * Math.sign(e), u = new Date(e - a * Fe);
  return bi(Eu, [u.getUTCFullYear(), u.getUTCMonth() + 1, u.getUTCDate() + a, u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds(), r, i]);
}
function $f(e, r) {
  if (r < -Bl)
    throw new RangeError(_r);
  const i = e.formatToParts(r), a = {};
  for (const u of i)
    a[u.type] = u.value;
  return a;
}
function zf(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function O1(e, r) {
  return [r, 0];
}
function T1() {
  return er;
}
function I1(e, r) {
  switch (r) {
    case 2:
      return Gf(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function R1(e) {
  return Gf(e) ? 366 : 365;
}
function Gf(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function x1(e) {
  const [r, i] = S1(e.isoYear, e.isoMonth, e.isoDay);
  return oo(r.getUTCDay() - i, 7) || 7;
}
function M1(e) {
  return this.id === Pi ? (({ isoYear: r }) => r < 1 ? ["gregory-inverse", 1 - r] : ["gregory", r])(e) : this.id === pr ? dI(e) : [];
}
function KS(e) {
  const r = we(e);
  if (r < hI) {
    const { isoYear: c } = e;
    return c < 1 ? ["japanese-inverse", 1 - c] : ["japanese", c];
  }
  const i = $f(Zl(pr), r), { era: a, eraYear: u } = y0(i, pr);
  return [a, u];
}
function tu(e) {
  return jr(e), Si(e, 1), e;
}
function jr(e) {
  return P1(e, 1), e;
}
function Jd(e) {
  return g1(Nl, e, P1(e));
}
function P1(e, r) {
  const { isoYear: i } = e, a = De(e, "isoMonth", 1, T1(), r);
  return {
    isoYear: i,
    isoMonth: a,
    isoDay: De(e, "isoDay", 1, I1(i, a), r)
  };
}
function Si(e, r) {
  return bi(ct, [De(e, "isoHour", 0, 23, r), De(e, "isoMinute", 0, 59, r), De(e, "isoSecond", 0, 59, r), De(e, "isoMillisecond", 0, 999, r), De(e, "isoMicrosecond", 0, 999, r), De(e, "isoNanosecond", 0, 999, r)]);
}
function Mn(e) {
  return e === void 0 ? 0 : V0(vo(e));
}
function ru(e, r = 0) {
  e = Et(e);
  const i = X0(e), a = SI(e, r);
  return [V0(e), a, i];
}
function Oi(e, r, i, a = 9, u = 0, c = 4) {
  r = Et(r);
  let f = J0(r, a, u), p = Kf(r), d = Io(r, c);
  const g = To(r, a, u, 1);
  return f == null ? f = Math.max(i, g) : L1(f, g), p = Jf(p, g, 1), e && (d = ((m) => m < 4 ? (m + 2) % 4 : m)(d)), [f, g, p, d];
}
function iu(e, r = 6, i) {
  let a = Kf(e = ou(e, Za));
  const u = Io(e, 7);
  let c = To(e, r);
  return c = _1(Za, c), a = Jf(a, c, void 0, i), [c, a, u];
}
function Zf(e) {
  return jl(Et(e));
}
function C1(e, r) {
  return Hf(Et(e), r);
}
function JS(e) {
  const r = ou(e, oc), i = hr(oc, EI, r, 0);
  if (!i)
    throw new RangeError(mr(oc, i));
  return i;
}
function Hf(e, r = 4) {
  const i = N1(e);
  return [Io(e, 4), ...D1(To(e, r), i)];
}
function D1(e, r) {
  return e != null ? [_t[e], e < 4 ? 9 - 3 * e : -1] : [r === void 0 ? 1 : 10 ** (9 - r), r];
}
function Kf(e) {
  const r = e[ao];
  return r === void 0 ? 1 : _e(r, ao);
}
function Jf(e, r, i, a) {
  const u = a ? qn : _t[r + 1];
  if (u) {
    const c = _t[r];
    if (u % ((e = jt(ao, e, 1, u / c - (a ? 0 : 1), 1)) * c))
      throw new RangeError(mr(ao, e));
  } else
    e = jt(ao, e, 1, i ? 10 ** 9 : 1, 1);
  return e;
}
function N1(e) {
  let r = e[ic];
  if (r !== void 0) {
    if (typeof r != "number") {
      if (Ff(r) === "auto")
        return;
      throw new RangeError(mr(ic, r));
    }
    r = jt(ic, Math.floor(r), 0, 9, 1);
  }
  return r;
}
function Et(e) {
  return e === void 0 ? {} : vo(e);
}
function ou(e, r) {
  return typeof e == "string" ? {
    [r]: e
  } : vo(e);
}
function au(e) {
  return {
    overflow: gI[e]
  };
}
function Vf(e, r, i = 9, a = 0, u) {
  let c = r[e];
  if (c === void 0)
    return u ? a : void 0;
  if (c = Ff(c), c === "auto")
    return u ? a : null;
  let f = Of[c];
  if (f === void 0 && (f = uI[c]), f === void 0)
    throw new RangeError(x0(e, c, Of));
  return jt(e, f, a, i, 1, Tl), f;
}
function hr(e, r, i, a = 0) {
  const u = i[e];
  if (u === void 0)
    return a;
  const c = Ff(u), f = r[c];
  if (f === void 0)
    throw new RangeError(x0(e, c, r));
  return f;
}
function L1(e, r) {
  if (r > e)
    throw new RangeError(JT);
}
function Ut(e) {
  return {
    branding: Wl,
    epochNanoseconds: e
  };
}
function ut(e, r, i) {
  return {
    branding: wr,
    calendar: i,
    timeZone: r,
    epochNanoseconds: e
  };
}
function st(e, r = e.calendar) {
  return {
    branding: Ci,
    calendar: r,
    ...at(sI, e)
  };
}
function kt(e, r = e.calendar) {
  return {
    branding: Ro,
    calendar: r,
    ...at(Ll, e)
  };
}
function co(e, r = e.calendar) {
  return {
    branding: ql,
    calendar: r,
    ...at(Ll, e)
  };
}
function Wa(e, r = e.calendar) {
  return {
    branding: Ul,
    calendar: r,
    ...at(Ll, e)
  };
}
function At(e) {
  return {
    branding: kl,
    ...at(G0, e)
  };
}
function te(e) {
  return {
    branding: Yl,
    sign: dr(e),
    ...at(Pl, e)
  };
}
function Xf(e) {
  return kf(e.epochNanoseconds, Wt)[0];
}
function VS(e) {
  return ((r, i = 1) => {
    const [a, u] = r, c = Math.floor(u / i), f = qn / i;
    return BigInt(a) * BigInt(f) + BigInt(c);
  })(e.epochNanoseconds);
}
function F1(e) {
  return e.epochNanoseconds;
}
function XS(e, r, i, a, u) {
  const c = Fr(a), [f, p] = ((A, I) => {
    const D = I((A = ou(A, Rf))[H0]);
    let S = AI(A);
    return S = _1(Rf, S), [S, D];
  })(u, e), d = Math.max(f, c);
  if (!p && lo(d, p))
    return Vd(a, f);
  if (!p)
    throw new RangeError(_u);
  if (!a.sign)
    return 0;
  const [g, m, v] = lu(r, i, p), w = ul(v), P = pu(v), E = sl(v), x = P(m, g, a);
  vi(p) || (Be(g), Be(x));
  const B = E(m, g, x, f);
  return lo(f, p) ? Vd(B, f) : ((A, I, D, S, M, L, j) => {
    const z = dr(A), [Z, V] = Qf(S, Dl(D, A), D, z, M, L, j), fn = nl(I, Z, V);
    return A[Cn[D]] + fn * z;
  })(B, w(x), f, m, g, w, P);
}
function Vd(e, r) {
  return mt(se(e), _t[r], 1);
}
function Qf(e, r, i, a, u, c, f) {
  const p = Cn[i], d = {
    ...r,
    [p]: r[p] + a
  }, g = f(e, u, r), m = f(e, u, d);
  return [c(g), c(m)];
}
function nl(e, r, i) {
  const a = mt(vt(r, i));
  if (!a)
    throw new RangeError(Mi);
  return mt(vt(r, e)) / a;
}
function QS(e, r) {
  const [i, a, u] = iu(r, 5, 1);
  return Ut(su(e.epochNanoseconds, i, a, u, 1));
}
function nO(e, r, i) {
  let { epochNanoseconds: a, timeZone: u, calendar: c } = r;
  const [f, p, d] = iu(i);
  if (f === 0 && p === 1)
    return r;
  const g = e(u);
  if (f === 6)
    a = ((m, v, w, P) => {
      const E = Ve(w, v), [x, B] = m(E), A = w.epochNanoseconds, I = lr(v, x), D = lr(v, B);
      if (A1(A, I, D))
        throw new RangeError(Mi);
      return k1(nl(A, I, D), P) ? D : I;
    })(q1, g, r, d);
  else {
    const m = g.R(a);
    a = Ti(g, B1(Ai(a, m), f, p, d), m, 2, 0, 1);
  }
  return ut(a, u, c);
}
function eO(e, r) {
  return st(B1(e, ...iu(r)), e.calendar);
}
function tO(e, r) {
  const [i, a, u] = iu(r, 5);
  var c;
  return At((c = u, el(e, mo(i, a), c)[0]));
}
function rO(e, r) {
  const i = e(r.timeZone), a = Ve(r, i), [u, c] = q1(a), f = mt(vt(lr(i, u), lr(i, c)), bu, 1);
  if (f <= 0)
    throw new RangeError(Mi);
  return f;
}
function iO(e, r) {
  const { timeZone: i, calendar: a } = r, u = ((c, f, p) => lr(f, c(Ve(p, f))))(U1, e(i), r);
  return ut(u, i, a);
}
function B1(e, r, i, a) {
  return j1(e, mo(r, i), a);
}
function j1(e, r, i) {
  const [a, u] = el(e, r, i);
  return Be({
    ...qr(e, u),
    ...a
  });
}
function el(e, r, i) {
  return nu(fr(cr(e), r, i));
}
function Ya(e) {
  return fr(e, wu, 7);
}
function mo(e, r) {
  return _t[e] * r;
}
function q1(e) {
  const r = U1(e);
  return [r, qr(r, 1)];
}
function U1(e) {
  return cI(6, e);
}
function oO(e, r, i) {
  const a = Math.min(Fr(e), 6);
  return Ii(cu(se(e, a), r, i), a);
}
function uu(e, r, i, a, u, c, f, p, d, g) {
  if (a === 0 && u === 1)
    return e;
  const m = lo(a, p) ? vi(p) && a < 6 && i >= 6 ? uO : aO : sO;
  let [v, w, P] = m(e, r, i, a, u, c, f, p, d, g);
  return P && a !== 7 && (v = ((E, x, B, A, I, D, S, M) => {
    const L = dr(E);
    for (let j = A + 1; j <= B; j++) {
      if (j === 7 && B !== 7)
        continue;
      const z = Dl(j, E);
      z[Cn[j]] += L;
      const Z = mt(vt(S(M(I, D, z)), x));
      if (Z && Math.sign(Z) !== L)
        break;
      E = z;
    }
    return E;
  })(v, w, i, Math.max(6, a), f, p, d, g)), v;
}
function su(e, r, i, a, u) {
  if (r === 6) {
    const c = ((f) => f[0] + f[1] / qn)(e);
    return [fr(c, i, a), 0];
  }
  return cu(e, mo(r, i), a, u);
}
function cu(e, r, i, a) {
  let [u, c] = e;
  a && c < 0 && (c += qn, u -= 1);
  const [f, p] = Lt(fr(c, r, i), qn);
  return qf(u + f, p);
}
function fr(e, r, i) {
  return k1(e / r, i) * r;
}
function k1(e, r) {
  return II[r](e);
}
function aO(e, r, i, a, u, c) {
  const f = dr(e), p = se(e), d = su(p, a, u, c), g = vt(p, d), m = Math.sign(d[0] - p[0]) === f, v = Ii(d, Math.min(i, 6));
  return [{
    ...e,
    ...v
  }, yi(r, g), m];
}
function uO(e, r, i, a, u, c, f, p, d, g) {
  const m = dr(e) || 1, v = mt(se(e, 5)), w = mo(a, u);
  let P = fr(v, w, c);
  const [E, x] = Qf(f, {
    ...e,
    ...Cl
  }, 6, m, p, d, g), B = P - mt(vt(E, x));
  let A = 0;
  B && Math.sign(B) !== m ? r = Lr(E, P) : (A += m, P = fr(B, w, c), r = Lr(x, P));
  const I = hu(P);
  return [{
    ...e,
    ...I,
    days: e.days + A
  }, r, !!A];
}
function sO(e, r, i, a, u, c, f, p, d, g) {
  const m = dr(e), v = Cn[a], w = Dl(a, e);
  a === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const P = Xa(e[v], u) * u;
  w[v] = P;
  const [E, x] = Qf(f, w, a, u * m, p, d, g), B = P + nl(r, E, x) * m * u, A = fr(B, u, c), I = Math.sign(A - B) === m;
  return w[v] = A, [w, I ? x : E, I];
}
function Xd(e, r, i, a) {
  const [u, c, f, p] = ((g) => {
    const m = Hf(g = Et(g));
    return [g.timeZone, ...m];
  })(a), d = u !== void 0;
  return ((g, m, v, w, P, E) => {
    v = cu(v, P, w, 1);
    const x = m.R(v);
    return tl(Ai(v, x), E) + (g ? _o(Ya(x)) : "Z");
  })(d, r(d ? e(u) : Yr), i.epochNanoseconds, c, f, p);
}
function Qd(e, r, i) {
  const [a, u, c, f, p, d] = ((g) => {
    g = Et(g);
    const m = jl(g), v = N1(g), w = TI(g), P = Io(g, 4), E = To(g, 4);
    return [m, OI(g), w, P, ...D1(E, v)];
  })(i);
  return ((g, m, v, w, P, E, x, B, A, I) => {
    w = cu(w, A, B, 1);
    const D = g(v).R(w);
    return tl(Ai(w, D), I) + _o(Ya(D), x) + ((S, M) => M !== 1 ? "[" + (M === 2 ? "!" : "") + S + "]" : "")(v, E) + rl(m, P);
  })(e, r.calendar, r.timeZone, r.epochNanoseconds, a, u, c, f, p, d);
}
function ng(e, r) {
  const [i, a, u, c] = ((g) => (g = Et(g), [jl(g), ...Hf(g)]))(r);
  return f = e.calendar, p = i, d = c, tl(j1(e, u, a), d) + rl(f, p);
  // removed by dead control flow
 var f, p, d; 
}
function eg(e, r) {
  return i = e.calendar, a = e, u = Zf(r), $a(a) + rl(i, u);
  // removed by dead control flow
 var i, a, u; 
}
function tg(e, r) {
  return W1(e.calendar, Y1, e, Zf(r));
}
function rg(e, r) {
  return W1(e.calendar, cO, e, Zf(r));
}
function ig(e, r) {
  const [i, a, u] = C1(r);
  return c = u, $1(el(e, a, i)[0], c);
  // removed by dead control flow
 var c; 
}
function Xs(e, r) {
  const [i, a, u] = C1(r, 3);
  return a > 1 && Ur(e = {
    ...e,
    ...oO(e, a, i)
  }), ((c, f) => {
    const { sign: p } = c, d = p === -1 ? Ee(c) : c, { hours: g, minutes: m } = d, [v, w] = kf(se(d, 3), yt, sr);
    H1(v);
    const P = il(w, f), E = f >= 0 || !p || P;
    return (p < 0 ? "-" : "") + "P" + og({
      Y: Cr(d.years),
      M: Cr(d.months),
      W: Cr(d.weeks),
      D: Cr(d.days)
    }) + (g || m || v || E ? "T" + og({
      H: Cr(g),
      M: Cr(m),
      S: Cr(v, E) + P
    }) : "");
  })(e, u);
}
function W1(e, r, i, a) {
  const u = a > 1 || a === 0 && e !== Rn;
  return a === 1 ? e === Rn ? r(i) : $a(i) : u ? $a(i) + z1(e, a === 2) : r(i);
}
function og(e) {
  const r = [];
  for (const i in e) {
    const a = e[i];
    a && r.push(a, i);
  }
  return r.join("");
}
function tl(e, r) {
  return $a(e) + "T" + $1(e, r);
}
function $a(e) {
  return Y1(e) + "-" + rt(e.isoDay);
}
function Y1(e) {
  const { isoYear: r } = e;
  return (r < 0 || r > 9999 ? G1(r) + qa(6, Math.abs(r)) : qa(4, r)) + "-" + rt(e.isoMonth);
}
function cO(e) {
  return rt(e.isoMonth) + "-" + rt(e.isoDay);
}
function $1(e, r) {
  const i = [rt(e.isoHour), rt(e.isoMinute)];
  return r !== -1 && i.push(rt(e.isoSecond) + ((a, u, c, f) => il(a * Wt + u * So + c, f))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, r)), i.join(":");
}
function _o(e, r = 0) {
  if (r === 1)
    return "";
  const [i, a] = Lt(Math.abs(e), bu), [u, c] = Lt(a, wu), [f, p] = Lt(c, yt);
  return G1(e) + rt(i) + ":" + rt(u) + (f || p ? ":" + rt(f) + il(p) : "");
}
function rl(e, r) {
  return r !== 1 && (r > 1 || r === 0 && e !== Rn) ? z1(e, r === 2) : "";
}
function z1(e, r) {
  return "[" + (r ? "!" : "") + "u-ca=" + e + "]";
}
function il(e, r) {
  let i = qa(9, e);
  return i = r === void 0 ? i.replace(MI, "") : i.slice(0, r), i ? "." + i : "";
}
function G1(e) {
  return e < 0 ? "-" : "+";
}
function Cr(e, r) {
  return e || r ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function fO(e, r) {
  const { epochNanoseconds: i } = e, a = (r.R ? r : r(e.timeZone)).R(i), u = Ai(i, a);
  return {
    calendar: e.calendar,
    ...u,
    offsetNanoseconds: a
  };
}
function Ti(e, r, i, a = 0, u = 0, c, f) {
  if (i !== void 0 && a === 1 && (a === 1 || f))
    return Yf(r, i);
  const p = e.I(r);
  if (i !== void 0 && a !== 3) {
    const d = ((g, m, v, w) => {
      const P = ue(m);
      w && (v = Ya(v));
      for (const E of g) {
        let x = mt(vt(E, P));
        if (w && (x = Ya(x)), x === v)
          return E;
      }
    })(p, r, i, c);
    if (d !== void 0)
      return d;
    if (a === 0)
      throw new RangeError($T);
  }
  return f ? ue(r) : wo(e, r, u, p);
}
function wo(e, r, i = 0, a = e.I(r)) {
  if (a.length === 1)
    return a[0];
  if (i === 1)
    throw new RangeError(zT);
  if (a.length)
    return a[i === 3 ? 1 : 0];
  const u = ue(r), c = ((p, d) => {
    const g = p.R(Lr(d, -qn));
    return ((m) => {
      if (m > qn)
        throw new RangeError(YT);
      return m;
    })(p.R(Lr(d, qn)) - g);
  })(e, u), f = c * (i === 2 ? -1 : 1);
  return (a = e.I(Ai(u, f)))[i === 2 ? 0 : a.length - 1];
}
function lr(e, r) {
  const i = e.I(r);
  if (i.length)
    return i[0];
  const a = Lr(ue(r), -qn);
  return e.O(a, 1);
}
function ag(e, r, i) {
  return Ut(bt(yi(r.epochNanoseconds, ((a) => {
    if (K1(a))
      throw new RangeError(HT);
    return se(a, 5);
  })(e ? Ee(i) : i))));
}
function ug(e, r, i, a, u, c = /* @__PURE__ */ Object.create(null)) {
  const f = r(a.timeZone), p = e(a.calendar);
  return {
    ...a,
    ...ol(f, p, a, i ? Ee(u) : u, c)
  };
}
function sg(e, r, i, a, u = /* @__PURE__ */ Object.create(null)) {
  const { calendar: c } = i;
  return st(al(e(c), i, r ? Ee(a) : a, u), c);
}
function cg(e, r, i, a, u) {
  const { calendar: c } = i;
  return kt(fu(e(c), i, r ? Ee(a) : a, u), c);
}
function fg(e, r, i, a, u) {
  const c = i.calendar, f = e(c);
  let p = tt(fo(f, i));
  r && (a = cl(a)), a.sign < 0 && (p = f.P(p, {
    ...ce,
    months: 1
  }), p = qr(p, -1));
  const d = f.P(p, a, u);
  return co(fo(f, d), c);
}
function lg(e, r, i) {
  return At(Z1(r, e ? Ee(i) : i)[0]);
}
function ol(e, r, i, a, u) {
  const c = se(a, 5);
  let f = i.epochNanoseconds;
  if (K1(a)) {
    const p = Ve(i, e);
    f = yi(wo(e, {
      ...fu(r, p, {
        ...a,
        ...Cl
      }, u),
      ...at(ct, p)
    }), c);
  } else
    f = yi(f, c), Mn(u);
  return {
    epochNanoseconds: bt(f)
  };
}
function al(e, r, i, a) {
  const [u, c] = Z1(r, i);
  return Be({
    ...fu(e, r, {
      ...i,
      ...Cl,
      days: i.days + c
    }, a),
    ...u
  });
}
function fu(e, r, i, a) {
  if (i.years || i.months || i.weeks)
    return e.P(r, i, a);
  Mn(a);
  const u = i.days + se(i, 5)[0];
  return u ? tt(qr(r, u)) : r;
}
function fo(e, r, i = 1) {
  return qr(r, i - e.day(r));
}
function Z1(e, r) {
  const [i, a] = se(r, 5), [u, c] = nu(cr(e) + a);
  return [u, i + c];
}
function qr(e, r) {
  return r ? {
    ...e,
    ...eu(we(e) + r * Fe)
  } : e;
}
function lu(e, r, i) {
  const a = e(i.calendar);
  return vi(i) ? [i, a, r(i.timeZone)] : [{
    ...i,
    ...je
  }, a];
}
function ul(e) {
  return e ? F1 : ue;
}
function pu(e) {
  return e ? Tn(ol, e) : al;
}
function sl(e) {
  return e ? Tn(NO, e) : LO;
}
function vi(e) {
  return e && e.epochNanoseconds;
}
function lo(e, r) {
  return e <= 6 - (vi(r) ? 1 : 0);
}
function pg(e, r, i, a, u, c, f) {
  const p = e(Et(f).relativeTo), d = Math.max(Fr(u), Fr(c));
  if (lo(d, p))
    return te(Ur(((x, B, A, I) => {
      const D = yi(se(x), se(B), I ? -1 : 1);
      if (!Number.isFinite(D[0]))
        throw new RangeError(_r);
      return {
        ...ce,
        ...Ii(D, A)
      };
    })(u, c, d, a)));
  if (!p)
    throw new RangeError(_u);
  a && (c = Ee(c));
  const [g, m, v] = lu(r, i, p), w = pu(v), P = sl(v), E = w(m, g, u);
  return te(P(m, g, w(m, E, c), d));
}
function lO(e, r, i, a, u) {
  const c = Fr(a), [f, p, d, g, m] = ((L, j, z) => {
    L = ou(L, Za);
    let Z = J0(L);
    const V = z(L[H0]);
    let fn = Kf(L);
    const bn = Io(L, 7);
    let Ln = To(L);
    if (Z === void 0 && Ln === void 0)
      throw new RangeError(KT);
    if (Ln == null && (Ln = 0), Z == null && (Z = Math.max(Ln, j)), L1(Z, Ln), fn = Jf(fn, Ln, 1), fn > 1 && Ln > 5 && Z !== Ln)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [Z, Ln, fn, bn, V];
  })(u, c, e), v = Math.max(c, f);
  if (!m && v <= 6)
    return te(Ur(((L, j, z, Z, V) => {
      const fn = su(se(L), z, Z, V);
      return {
        ...ce,
        ...Ii(fn, j)
      };
    })(a, f, p, d, g)));
  if (!vi(m) && !a.sign)
    return a;
  if (!m)
    throw new RangeError(_u);
  const [w, P, E] = lu(r, i, m), x = ul(E), B = pu(E), A = sl(E), I = B(P, w, a);
  vi(m) || (Be(w), Be(I));
  let D = A(P, w, I, f);
  const S = a.sign, M = dr(D);
  if (S && M && S !== M)
    throw new RangeError(Mi);
  return D = uu(D, x(I), f, p, d, g, P, w, x, B), te(D);
}
function pO(e) {
  return e.sign === -1 ? cl(e) : e;
}
function cl(e) {
  return te(Ee(e));
}
function Ee(e) {
  const r = {};
  for (const i of Cn)
    r[i] = -1 * e[i] || 0;
  return r;
}
function hO(e) {
  return !e.sign;
}
function dr(e, r = Cn) {
  let i = 0;
  for (const a of r) {
    const u = Math.sign(e[a]);
    if (u) {
      if (i && i !== u)
        throw new RangeError(ZT);
      i = u;
    }
  }
  return i;
}
function Ur(e) {
  for (const r of aI)
    jt(r, e[r], -Ag, Ag, 1);
  return H1(mt(se(e), yt)), e;
}
function H1(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(GT);
}
function se(e, r = 6) {
  return v1(e, r, Cn);
}
function Ii(e, r = 6) {
  const [i, a] = e, u = Qa(a, r, Cn);
  if (u[Cn[r]] += i * (qn / _t[r]), !Number.isFinite(u[Cn[r]]))
    throw new RangeError(_r);
  return u;
}
function hu(e, r = 5) {
  return Qa(e, r, Cn);
}
function K1(e) {
  return !!dr(e, z0);
}
function Fr(e) {
  let r = 9;
  for (; r > 0 && !e[Cn[r]]; r--)
    ;
  return r;
}
function dO(e, r) {
  return [e, r];
}
function hg(e) {
  const r = Math.floor(e / Ba) * Ba;
  return [r, r + Ba];
}
function gO(e) {
  const r = gr(e = La(e));
  if (!r)
    throw new RangeError(Le(e));
  let i;
  if (r.j)
    i = 0;
  else {
    if (!r.offset)
      throw new RangeError(Le(e));
    i = kr(r.offset);
  }
  return r.timeZone && dl(r.timeZone, 1), Ut(Yf(tu(r), i));
}
function yO(e) {
  const r = gr(he(e));
  if (!r)
    throw new RangeError(Le(e));
  if (r.timeZone)
    return J1(r, r.offset ? kr(r.offset) : void 0);
  if (r.j)
    throw new RangeError(Le(e));
  return X1(r);
}
function vO(e, r) {
  const i = gr(he(e));
  if (!i || !i.timeZone)
    throw new RangeError(Le(e));
  const { offset: a } = i, u = a ? kr(a) : void 0, [, c, f] = ru(r);
  return J1(i, u, c, f);
}
function kr(e) {
  const r = dl(e);
  if (r === void 0)
    throw new RangeError(Le(e));
  return r;
}
function mO(e) {
  const r = gr(he(e));
  if (!r || r.j)
    throw new RangeError(Le(e));
  return st(V1(r));
}
function fl(e, r, i) {
  let a = gr(he(e));
  if (!a || a.j)
    throw new RangeError(Le(e));
  return r ? a.calendar === Rn && (a = a.isoYear === -271821 && a.isoMonth === 4 ? {
    ...a,
    isoDay: 20,
    ...je
  } : {
    ...a,
    isoDay: 1,
    ...je
  }) : i && a.calendar === Rn && (a = {
    ...a,
    isoYear: Bt
  }), kt(a.C ? V1(a) : X1(a));
}
function _O(e, r) {
  const i = pl(he(r));
  if (i)
    return ll(i), co(Wf(jr(i)));
  const a = fl(r, 1);
  return co(fo(e(a.calendar), a));
}
function ll(e) {
  if (e.calendar !== Rn)
    throw new RangeError(Ft(e.calendar));
}
function wO(e, r) {
  const i = hl(he(r));
  if (i)
    return ll(i), Wa(jr(i));
  const a = fl(r, 0, 1), { calendar: u } = a, c = e(u), [f, p, d] = c.v(a), [g, m] = c.q(f, p), [v, w] = c.G(g, m, d);
  return Wa(tt(c.V(v, w, d)), u);
}
function bO(e) {
  let r, i = ((a) => {
    const u = BI.exec(a);
    return u ? (du(u[10]), e0(u)) : void 0;
  })(he(e));
  if (!i) {
    if (i = gr(e), !i)
      throw new RangeError(Le(e));
    if (!i.C)
      throw new RangeError(Le(e));
    if (i.j)
      throw new RangeError(Ft("Z"));
    ll(i);
  }
  if ((r = pl(e)) && Jd(r))
    throw new RangeError(Le(e));
  if ((r = hl(e)) && Jd(r))
    throw new RangeError(Le(e));
  return At(Si(i, 1));
}
function EO(e) {
  const r = ((i) => {
    const a = UI.exec(i);
    return a ? ((u) => {
      function c(m, v, w) {
        let P = 0, E = 0;
        if (w && ([P, d] = Lt(d, _t[w])), m !== void 0) {
          if (p)
            throw new RangeError(Ft(m));
          E = ((x) => {
            const B = parseInt(x);
            if (!Number.isFinite(B))
              throw new RangeError(Ft(x));
            return B;
          })(m), f = 1, v && (d = gl(v) * (_t[w] / yt), p = 1);
        }
        return P + E;
      }
      let f = 0, p = 0, d = 0, g = {
        ...bi(Cn, [c(u[2]), c(u[3]), c(u[4]), c(u[5]), c(u[6], u[7], 5), c(u[8], u[9], 4), c(u[10], u[11], 3)]),
        ...Qa(d, 2, Cn)
      };
      if (!f)
        throw new RangeError(R0(Cn));
      return yl(u[1]) < 0 && (g = Ee(g)), g;
    })(a) : void 0;
  })(he(e));
  if (!r)
    throw new RangeError(Le(e));
  return te(Ur(r));
}
function AO(e) {
  const r = gr(e) || pl(e) || hl(e);
  return r ? r.calendar : e;
}
function SO(e) {
  const r = gr(e);
  return r && (r.timeZone || r.j && Yr || r.offset) || e;
}
function J1(e, r, i = 0, a = 0) {
  const u = vl(e.timeZone), c = _n(u);
  let f;
  return tu(e), f = e.C ? Ti(c, e, r, i, a, !c.$, e.j) : lr(c, e), ut(f, u, mu(e.calendar));
}
function V1(e) {
  return Q1(Be(tu(e)));
}
function X1(e) {
  return Q1(tt(jr(e)));
}
function Q1(e) {
  return {
    ...e,
    calendar: mu(e.calendar)
  };
}
function gr(e) {
  const r = FI.exec(e);
  return r ? ((i) => {
    const a = i[10], u = (a || "").toUpperCase() === "Z";
    return {
      isoYear: n0(i),
      isoMonth: parseInt(i[4]),
      isoDay: parseInt(i[5]),
      ...e0(i.slice(5)),
      ...du(i[16]),
      C: !!i[6],
      j: u,
      offset: u ? void 0 : a
    };
  })(r) : void 0;
}
function pl(e) {
  const r = NI.exec(e);
  return r ? ((i) => ({
    isoYear: n0(i),
    isoMonth: parseInt(i[4]),
    isoDay: 1,
    ...du(i[5])
  }))(r) : void 0;
}
function hl(e) {
  const r = LI.exec(e);
  return r ? ((i) => ({
    isoYear: Bt,
    isoMonth: parseInt(i[1]),
    isoDay: parseInt(i[2]),
    ...du(i[3])
  }))(r) : void 0;
}
function dl(e, r) {
  const i = jI.exec(e);
  return i ? ((a, u) => {
    const c = a[4] || a[5];
    if (u && c)
      throw new RangeError(Ft(c));
    return ((f) => {
      if (Math.abs(f) >= qn)
        throw new RangeError(WT);
      return f;
    })((di(a[2]) * bu + di(a[3]) * wu + di(a[4]) * yt + gl(a[5] || "")) * yl(a[1]));
  })(i, r) : void 0;
}
function n0(e) {
  const r = yl(e[1]), i = parseInt(e[2] || e[3]);
  if (r < 0 && !i)
    throw new RangeError(Ft(-0));
  return r * i;
}
function e0(e) {
  const r = di(e[3]);
  return {
    ...nu(gl(e[4] || ""))[0],
    isoHour: di(e[1]),
    isoMinute: di(e[2]),
    isoSecond: r === 60 ? 59 : r
  };
}
function du(e) {
  let r, i;
  const a = [];
  if (e.replace(qI, ((u, c, f) => {
    const p = !!c, [d, g] = f.split("=").reverse();
    if (g) {
      if (g === "u-ca")
        a.push(d), r || (r = p);
      else if (p || /[A-Z]/.test(g))
        throw new RangeError(Ft(u));
    } else {
      if (i)
        throw new RangeError(Ft(u));
      i = d;
    }
    return "";
  })), a.length > 1 && r)
    throw new RangeError(Ft(e));
  return {
    timeZone: i,
    calendar: a[0] || Rn
  };
}
function gl(e) {
  return parseInt(e.padEnd(9, "0"));
}
function Ri(e) {
  return new RegExp(`^${e}$`, "i");
}
function yl(e) {
  return e && e !== "+" ? -1 : 1;
}
function di(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function OO(e) {
  return vl(he(e));
}
function vl(e) {
  const r = ml(e);
  return typeof r == "number" ? _o(r) : r ? ((i) => {
    if (YI.test(i))
      throw new RangeError(D0(i));
    if (WI.test(i))
      throw new RangeError(kT);
    return i.toLowerCase().split("/").map(((a, u) => (a.length <= 3 || /\d/.test(a)) && !/etc|yap/.test(a) ? a.toUpperCase() : a.replace(/baja|dumont|[a-z]+/g, ((c, f) => c.length <= 2 && !u || c === "in" || c === "chat" ? c.toUpperCase() : c.length > 2 || !f ? Zd(c).replace(/island|noronha|murdo|rivadavia|urville/, Zd) : c)))).join("/");
  })(e) : Yr;
}
function dg(e) {
  const r = ml(e);
  return typeof r == "number" ? r : r ? r.resolvedOptions().timeZone : Yr;
}
function ml(e) {
  const r = dl(e = e.toUpperCase(), 1);
  return r !== void 0 ? r : e !== Yr ? kI(e) : void 0;
}
function t0(e, r) {
  return Ke(e.epochNanoseconds, r.epochNanoseconds);
}
function r0(e, r) {
  return Ke(e.epochNanoseconds, r.epochNanoseconds);
}
function TO(e, r, i, a, u, c) {
  const f = e(Et(c).relativeTo), p = Math.max(Fr(a), Fr(u));
  if (g1(Cn, a, u))
    return 0;
  if (lo(p, f))
    return Ke(se(a), se(u));
  if (!f)
    throw new RangeError(_u);
  const [d, g, m] = lu(r, i, f), v = ul(m), w = pu(m);
  return Ke(v(w(g, d, a)), v(w(g, d, u)));
}
function i0(e, r) {
  return xi(e, r) || _l(e, r);
}
function xi(e, r) {
  return or(we(e), we(r));
}
function _l(e, r) {
  return or(cr(e), cr(r));
}
function IO(e, r) {
  return !t0(e, r);
}
function RO(e, r) {
  return !r0(e, r) && !!o0(e.timeZone, r.timeZone) && e.calendar === r.calendar;
}
function xO(e, r) {
  return !i0(e, r) && e.calendar === r.calendar;
}
function MO(e, r) {
  return !xi(e, r) && e.calendar === r.calendar;
}
function PO(e, r) {
  return !xi(e, r) && e.calendar === r.calendar;
}
function CO(e, r) {
  return !xi(e, r) && e.calendar === r.calendar;
}
function DO(e, r) {
  return !_l(e, r);
}
function o0(e, r) {
  if (e === r)
    return 1;
  try {
    return dg(e) === dg(r);
  } catch {
  }
}
function gg(e, r, i, a) {
  const u = Oi(e, a, 3, 5), c = gu(r.epochNanoseconds, i.epochNanoseconds, ...u);
  return te(e ? Ee(c) : c);
}
function yg(e, r, i, a, u, c) {
  const f = vu(a.calendar, u.calendar), [p, d, g, m] = Oi(i, c, 5), v = a.epochNanoseconds, w = u.epochNanoseconds, P = Ke(w, v);
  let E;
  if (P)
    if (p < 6)
      E = gu(v, w, p, d, g, m);
    else {
      const x = r(((A, I) => {
        if (!o0(A, I))
          throw new RangeError(N0);
        return A;
      })(a.timeZone, u.timeZone)), B = e(f);
      E = u0(B, x, a, u, P, p, c), E = uu(E, w, p, d, g, m, B, a, F1, Tn(ol, x));
    }
  else
    E = ce;
  return te(i ? Ee(E) : E);
}
function vg(e, r, i, a, u) {
  const c = vu(i.calendar, a.calendar), [f, p, d, g] = Oi(r, u, 6), m = ue(i), v = ue(a), w = Ke(v, m);
  let P;
  if (w)
    if (f <= 6)
      P = gu(m, v, f, p, d, g);
    else {
      const E = e(c);
      P = s0(E, i, a, w, f, u), P = uu(P, v, f, p, d, g, E, i, ue, al);
    }
  else
    P = ce;
  return te(r ? Ee(P) : P);
}
function mg(e, r, i, a, u) {
  const c = vu(i.calendar, a.calendar);
  return a0(r, (() => e(c)), i, a, ...Oi(r, u, 6, 9, 6));
}
function _g(e, r, i, a, u) {
  const c = vu(i.calendar, a.calendar), f = Oi(r, u, 9, 9, 8), p = e(c), d = fo(p, i), g = fo(p, a);
  return d.isoYear === g.isoYear && d.isoMonth === g.isoMonth && d.isoDay === g.isoDay ? te(ce) : a0(r, (() => p), tt(d), tt(g), ...f, 8);
}
function a0(e, r, i, a, u, c, f, p, d = 6) {
  const g = ue(i), m = ue(a);
  if (g === void 0 || m === void 0)
    throw new RangeError(_r);
  let v;
  if (Ke(m, g))
    if (u === 6)
      v = gu(g, m, u, c, f, p);
    else {
      const w = r();
      v = w.N(i, a, u), c === d && f === 1 || (v = uu(v, m, u, c, f, p, w, i, ue, fu));
    }
  else
    v = ce;
  return te(e ? Ee(v) : v);
}
function wg(e, r, i, a) {
  const [u, c, f, p] = Oi(e, a, 5, 5), d = fr(wl(r, i), mo(c, f), p), g = {
    ...ce,
    ...hu(d, u)
  };
  return te(e ? Ee(g) : g);
}
function NO(e, r, i, a, u, c) {
  const f = Ke(a.epochNanoseconds, i.epochNanoseconds);
  return f ? u < 6 ? c0(i.epochNanoseconds, a.epochNanoseconds, u) : u0(r, e, i, a, f, u, c) : ce;
}
function LO(e, r, i, a, u) {
  const c = ue(r), f = ue(i), p = Ke(f, c);
  return p ? a <= 6 ? c0(c, f, a) : s0(e, r, i, p, a, u) : ce;
}
function u0(e, r, i, a, u, c, f) {
  const [p, d, g] = ((w, P, E, x) => {
    function B() {
      return j = {
        ...qr(D, M++ * -x),
        ...I
      }, z = wo(w, j), Ke(S, z) === -x;
    }
    const A = Ve(P, w), I = at(ct, A), D = Ve(E, w), S = E.epochNanoseconds;
    let M = 0;
    const L = wl(A, D);
    let j, z;
    if (Math.sign(L) === -x && M++, B() && (x === -1 || B()))
      throw new RangeError(Mi);
    const Z = mt(vt(z, S));
    return [A, j, Z];
  })(r, i, a, u);
  var m, v;
  return {
    ...c === 6 ? (m = p, v = d, {
      ...ce,
      days: f0(m, v)
    }) : e.N(p, d, c, f),
    ...hu(g)
  };
}
function s0(e, r, i, a, u, c) {
  const [f, p, d] = ((g, m, v) => {
    let w = m, P = wl(g, m);
    return Math.sign(P) === -v && (w = qr(m, -v), P += qn * v), [g, w, P];
  })(r, i, a);
  return {
    ...e.N(f, p, u, c),
    ...hu(d)
  };
}
function gu(e, r, i, a, u, c) {
  return {
    ...ce,
    ...Ii(su(vt(e, r), a, u, c), i)
  };
}
function c0(e, r, i) {
  return {
    ...ce,
    ...Ii(vt(e, r), i)
  };
}
function f0(e, r) {
  return yu(we(e), we(r));
}
function yu(e, r) {
  return Math.trunc((r - e) / Fe);
}
function wl(e, r) {
  return cr(r) - cr(e);
}
function vu(e, r) {
  if (e !== r)
    throw new RangeError(C0);
  return e;
}
function l0(e) {
  return this.m(e)[0];
}
function p0(e) {
  return this.m(e)[1];
}
function bl(e) {
  const [r] = this.v(e);
  return yu(this.p(r), we(e)) + 1;
}
function El(e) {
  const r = $I.exec(e);
  if (!r)
    throw new RangeError(qT(e));
  return [parseInt(r[1]), !!r[2]];
}
function bo(e, r) {
  return "M" + rt(e) + (r ? "L" : "");
}
function za(e, r, i) {
  return e + (r || i && e >= i ? 1 : 0);
}
function Al(e, r) {
  return e - (r && e >= r ? 1 : 0);
}
function h0(e, r) {
  return (r + e) * (Math.sign(r) || 1) || 0;
}
function Ef(e) {
  return Y0[g0(e)];
}
function d0(e) {
  return tI[g0(e)];
}
function g0(e) {
  return Br(e.id || Rn);
}
function FO(e) {
  function r(u) {
    return ((c, f) => ({
      ...y0(c, f),
      o: c.month,
      day: parseInt(c.day)
    }))($f(i, u), a);
  }
  const i = Zl(e), a = Br(e);
  return {
    id: e,
    h: BO(r),
    l: jO(r)
  };
}
function BO(e) {
  return He(((r) => {
    const i = we(r);
    return e(i);
  }), WeakMap);
}
function jO(e) {
  const r = e(0).year - pI;
  return He(((i) => {
    let a, u = Ei(i - r), c = 0;
    const f = [], p = [];
    do
      u += 400 * Fe;
    while ((a = e(u)).year <= i);
    do
      if (u += (1 - a.day) * Fe, a.year === i && (f.push(u), p.push(a.o)), u -= Fe, ++c > 100 || u < -Bl)
        throw new RangeError(Mi);
    while ((a = e(u)).year >= i);
    return {
      i: f.reverse(),
      u: L0(p.reverse())
    };
  }));
}
function y0(e, r) {
  let i, a, u = v0(e);
  if (e.era) {
    const c = Y0[r], f = $0[r] || {};
    c !== void 0 && (i = r === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), i === "bc" || i === "b" ? i = "bce" : i === "ad" || i === "a" ? i = "ce" : i === "beforeroc" && (i = "broc"), i = f[i] || i, a = u, u = h0(a, c[i] || 0));
  }
  return {
    era: i,
    eraYear: a,
    year: u
  };
}
function v0(e) {
  return parseInt(e.relatedYear || e.year);
}
function Ga(e) {
  const { year: r, o: i, day: a } = this.h(e), { u } = this.l(r);
  return [r, u[i] + 1, a];
}
function po(e, r = 1, i = 1) {
  return this.l(e).i[r - 1] + (i - 1) * Fe;
}
function m0(e, r) {
  const i = Fa.call(this, e);
  return [Al(r, i), i === r];
}
function Fa(e) {
  const r = Eg(this, e), i = Eg(this, e - 1), a = r.length;
  if (a > i.length) {
    const u = d0(this);
    if (u < 0)
      return -u;
    for (let c = 0; c < a; c++)
      if (r[c] !== i[c])
        return c + 1;
  }
}
function Ta(e) {
  return yu(po.call(this, e), po.call(this, e + 1));
}
function bg(e, r) {
  const { i } = this.l(e);
  let a = r + 1, u = i;
  return a > i.length && (a = 1, u = this.l(e + 1).i), yu(i[r - 1], u[a - 1]);
}
function Ia(e) {
  return this.l(e).i.length;
}
function _0(e) {
  const r = this.h(e);
  return [r.era, r.eraYear];
}
function Eg(e, r) {
  return Object.keys(e.l(r).u);
}
function Eo(e) {
  return mu(he(e));
}
function mu(e) {
  if ((e = e.toLowerCase()) !== Rn && e !== Pi) {
    const r = Zl(e).resolvedOptions().calendar;
    if (Br(e) !== Br(r))
      throw new RangeError(P0(e));
    return r;
  }
  return e;
}
function Br(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function w0(e, r) {
  return (i) => i === Rn ? e : i === Pi || i === pr ? Object.assign(Object.create(e), {
    id: i
  }) : Object.assign(Object.create(r), zI(i));
}
function qO(e, r, i, a) {
  const u = yr(i, a, $t, [], q0);
  if (u.timeZone !== void 0) {
    const c = i.F(u), f = Ao(u), p = e(u.timeZone);
    return {
      epochNanoseconds: Ti(r(p), {
        ...c,
        ...f
      }, u.offset !== void 0 ? kr(u.offset) : void 0),
      timeZone: p
    };
  }
  return {
    ...i.F(u),
    ...je
  };
}
function UO(e, r, i, a, u, c) {
  const f = yr(i, u, $t, B0, q0), p = e(f.timeZone), [d, g, m] = ru(c), v = i.F(f, au(d)), w = Ao(f, d);
  return ut(Ti(r(p), {
    ...v,
    ...w
  }, f.offset !== void 0 ? kr(f.offset) : void 0, g, m), p, a);
}
function kO(e, r, i) {
  const a = yr(e, r, $t, [], Yt), u = Mn(i);
  return st(Be({
    ...e.F(a, au(u)),
    ...Ao(a, u)
  }));
}
function WO(e, r, i, a = []) {
  const u = yr(e, r, $t, a);
  return e.F(u, i);
}
function YO(e, r, i, a) {
  const u = yr(e, r, Ml, a);
  return e.K(u, i);
}
function $O(e, r, i, a) {
  const u = yr(e, i, $t, Oo);
  return r && u.month !== void 0 && u.monthCode === void 0 && u.year === void 0 && (u.year = Bt), e._(u, a);
}
function zO(e, r) {
  return At(Ao(Je(e, Tf, [], 1), Mn(r)));
}
function GO(e) {
  const r = Je(e, Pl);
  return te(Ur({
    ...ce,
    ...r
  }));
}
function yr(e, r, i, a = [], u = []) {
  return Je(r, [...e.fields(i), ...u].sort(), a);
}
function Je(e, r, i, a = !i) {
  const u = {};
  let c, f = 0;
  for (const p of r) {
    if (p === c)
      throw new RangeError(PT(p));
    if (p === "constructor" || p === "__proto__")
      throw new RangeError(MT(p));
    let d = e[p];
    if (d !== void 0)
      f = 1, Sg[p] && (d = Sg[p](d, p)), u[p] = d;
    else if (i) {
      if (i.includes(p))
        throw new TypeError(Ol(p));
      u[p] = W0[p];
    }
    c = p;
  }
  if (a && !f)
    throw new TypeError(R0(r));
  return u;
}
function Ao(e, r) {
  return Si(Hl({
    ...W0,
    ...e
  }), r);
}
function ZO(e, r, i, a, u) {
  const { calendar: c, timeZone: f } = i, p = e(c), d = r(f), g = [...p.fields($t), ...j0].sort(), m = ((A) => {
    const I = Ve(A, _n), D = _o(I.offsetNanoseconds), S = Su(A.calendar), [M, L, j] = S.v(I), [z, Z] = S.q(M, L), V = bo(z, Z);
    return {
      ...QI(I),
      year: M,
      monthCode: V,
      day: j,
      offset: D
    };
  })(i), v = Je(a, g), w = p.k(m, v), P = {
    ...m,
    ...v
  }, [E, x, B] = ru(u, 2);
  return ut(Ti(d, {
    ...p.F(w, au(E)),
    ...Si(Hl(P), E)
  }, kr(P.offset), x, B), f, c);
}
function HO(e, r, i, a) {
  const u = e(r.calendar), c = [...u.fields($t), ...Yt].sort(), f = {
    ...E0(p = r),
    hour: p.isoHour,
    minute: p.isoMinute,
    second: p.isoSecond,
    millisecond: p.isoMillisecond,
    microsecond: p.isoMicrosecond,
    nanosecond: p.isoNanosecond
  };
  var p;
  const d = Je(i, c), g = Mn(a), m = u.k(f, d), v = {
    ...f,
    ...d
  };
  return st(Be({
    ...u.F(m, au(g)),
    ...Si(Hl(v), g)
  }));
}
function KO(e, r, i, a) {
  const u = e(r.calendar), c = u.fields($t).sort(), f = E0(r), p = Je(i, c), d = u.k(f, p);
  return u.F(d, a);
}
function JO(e, r, i, a) {
  const u = e(r.calendar), c = u.fields(Ml).sort(), f = ((g) => {
    const m = Su(g.calendar), [v, w] = m.v(g), [P, E] = m.q(v, w);
    return {
      year: v,
      monthCode: bo(P, E)
    };
  })(r), p = Je(i, c), d = u.k(f, p);
  return u.K(d, a);
}
function VO(e, r, i, a) {
  const u = e(r.calendar), c = u.fields($t).sort(), f = ((g) => {
    const m = Su(g.calendar), [v, w, P] = m.v(g), [E, x] = m.q(v, w);
    return {
      monthCode: bo(E, x),
      day: P
    };
  })(r), p = Je(i, c), d = u.k(f, p);
  return u._(d, a);
}
function XO(e, r, i) {
  return At(((a, u, c) => Ao({
    ...at(Tf, a),
    ...Je(u, Tf)
  }, Mn(c)))(e, r, i));
}
function QO(e, r) {
  return te((i = e, a = r, Ur({
    ...i,
    ...Je(a, Pl)
  })));
  // removed by dead control flow
 var i, a; 
}
function b0(e, r, i, a, u) {
  r = at(i = e.fields(i), r), a = Je(a, u = e.fields(u), []);
  let c = e.k(r, a);
  return c = Je(c, [...i, ...u].sort(), []), e.F(c);
}
function Qs(e, r) {
  const i = Ef(e), a = $0[e.id || ""] || {};
  let { era: u, eraYear: c, year: f } = r;
  if (u !== void 0 || c !== void 0) {
    if (u === void 0 || c === void 0)
      throw new TypeError(LT);
    if (!i)
      throw new RangeError(NT);
    const p = i[a[u] || u];
    if (p === void 0)
      throw new RangeError(BT(u));
    const d = h0(c, p);
    if (f !== void 0 && f !== d)
      throw new RangeError(FT);
    f = d;
  } else if (f === void 0)
    throw new TypeError(jT(i));
  return f;
}
function Ra(e, r, i, a) {
  let { month: u, monthCode: c } = r;
  if (c !== void 0) {
    const f = ((p, d, g, m) => {
      const v = p.L(g), [w, P] = El(d);
      let E = za(w, P, v);
      if (P) {
        const x = d0(p);
        if (x === void 0)
          throw new RangeError(eo);
        if (x > 0) {
          if (E > x)
            throw new RangeError(eo);
          if (v === void 0) {
            if (m === 1)
              throw new RangeError(eo);
            E--;
          }
        } else {
          if (E !== -x)
            throw new RangeError(eo);
          if (v === void 0 && m === 1)
            throw new RangeError(eo);
        }
      }
      return E;
    })(e, c, i, a);
    if (u !== void 0 && u !== f)
      throw new RangeError(UT);
    u = f, a = 1;
  } else if (u === void 0)
    throw new TypeError(M0);
  return jt("month", u, 1, e.B(i), a);
}
function nc(e, r, i, a, u) {
  return De(r, "day", 1, e.U(a, i), u);
}
function ec(e, r, i, a) {
  let u = 0;
  const c = [];
  for (const f of i)
    r[f] !== void 0 ? u = 1 : c.push(f);
  if (Object.assign(e, r), u)
    for (const f of a || c)
      delete e[f];
}
function E0(e) {
  const r = Su(e.calendar), [i, a, u] = r.v(e), [c, f] = r.q(i, a);
  return {
    year: i,
    monthCode: bo(c, f),
    day: u
  };
}
function nT(e) {
  return Ut(bt(Uf(Bf(e))));
}
function eT(e, r, i, a, u = Rn) {
  return ut(bt(Uf(Bf(i))), r(a), e(u));
}
function tT(e, r, i, a, u = 0, c = 0, f = 0, p = 0, d = 0, g = 0, m = Rn) {
  return st(Be(tu(qt(_e, bi(Eu, [r, i, a, u, c, f, p, d, g])))), e(m));
}
function rT(e, r, i, a, u = Rn) {
  return kt(tt(jr(qt(_e, {
    isoYear: r,
    isoMonth: i,
    isoDay: a
  }))), e(u));
}
function iT(e, r, i, a = Rn, u = 1) {
  const c = _e(r), f = _e(i), p = e(a);
  return co(Wf(jr({
    isoYear: c,
    isoMonth: f,
    isoDay: _e(u)
  })), p);
}
function oT(e, r, i, a = Rn, u = Bt) {
  const c = _e(r), f = _e(i), p = e(a);
  return Wa(tt(jr({
    isoYear: _e(u),
    isoMonth: c,
    isoDay: f
  })), p);
}
function aT(e = 0, r = 0, i = 0, a = 0, u = 0, c = 0) {
  return At(Si(qt(_e, bi(ct, [e, r, i, a, u, c])), 1));
}
function uT(e = 0, r = 0, i = 0, a = 0, u = 0, c = 0, f = 0, p = 0, d = 0, g = 0) {
  return te(Ur(qt(jf, bi(Cn, [e, r, i, a, u, c, f, p, d, g]))));
}
function sT(e, r, i = Rn) {
  return ut(e.epochNanoseconds, r, i);
}
function cT(e) {
  return Ut(e.epochNanoseconds);
}
function A0(e, r) {
  return st(Ve(r, e));
}
function S0(e, r) {
  return kt(Ve(r, e));
}
function O0(e, r) {
  return At(Ve(r, e));
}
function fT(e, r, i, a) {
  const u = ((c, f, p, d) => {
    const g = ((m) => X0(Et(m)))(d);
    return wo(c(f), p, g);
  })(e, i, r, a);
  return ut(bt(u), i, r.calendar);
}
function lT(e, r, i, a, u) {
  const c = e(u.timeZone), f = u.plainTime, p = f !== void 0 ? r(f) : void 0, d = i(c);
  let g;
  return g = p ? wo(d, {
    ...a,
    ...p
  }) : lr(d, {
    ...a,
    ...je
  }), ut(g, c, a.calendar);
}
function pT(e, r = je) {
  return st(Be({
    ...e,
    ...r
  }));
}
function hT(e, r, i) {
  return ((a, u) => {
    const c = yr(a, u, U0);
    return a.K(c, void 0);
  })(e(r.calendar), i);
}
function dT(e, r, i) {
  return ((a, u) => {
    const c = yr(a, u, k0);
    return a._(c);
  })(e(r.calendar), i);
}
function gT(e, r, i, a) {
  return ((u, c, f) => b0(u, c, U0, vo(f), Oo))(e(r.calendar), i, a);
}
function yT(e, r, i, a) {
  return ((u, c, f) => b0(u, c, k0, vo(f), Il))(e(r.calendar), i, a);
}
function vT(e) {
  return Ut(bt(Ua(jf(e), Wt)));
}
function mT(e) {
  return Ut(bt(Uf(Bf(e))));
}
function Wr(e, r, i) {
  const a = new Set(i);
  return (u, c) => {
    const f = i && Gd(u, i);
    if (!Gd(u = ((p, d) => {
      const g = {};
      for (const m in d)
        p.has(m) || (g[m] = d[m]);
      return g;
    })(a, u), e)) {
      if (c && f)
        throw new TypeError("Invalid formatting options");
      u = {
        ...r,
        ...u
      };
    }
    return i && (u.timeZone = Yr, ["full", "long"].includes(u.J) && (u.J = "medium")), u;
  };
}
function vr(e, r = T0, i = 0) {
  const [a, , , u] = e;
  return (c, f = mR, ...p) => {
    const d = r(u && u(...p), c, f, a, i), g = d.resolvedOptions();
    return [d, ..._T(e, g, p)];
  };
}
function T0(e, r, i, a, u) {
  if (i = a(i, u), e) {
    if (i.timeZone !== void 0)
      throw new TypeError(XT);
    i.timeZone = e;
  }
  return new ar(r, i);
}
function _T(e, r, i) {
  const [, a, u] = e;
  return i.map(((c) => (c.calendar && ((f, p, d) => {
    if ((d || f !== Rn) && f !== p)
      throw new RangeError(C0);
  })(c.calendar, r.calendar, u), a(c, r))));
}
function wT(e, r, i) {
  const a = r.timeZone, u = e(a), c = {
    ...Ve(r, u),
    ...i || je
  };
  let f;
  return f = i ? Ti(u, c, c.offsetNanoseconds, 2) : lr(u, c), ut(f, a, r.calendar);
}
function bT(e, r = je) {
  return st(Be({
    ...e,
    ...r
  }));
}
function Sl(e, r) {
  return {
    ...e,
    calendar: r
  };
}
function ET(e, r) {
  return {
    ...e,
    timeZone: r
  };
}
function tc(e) {
  const r = Af();
  return Ai(r, e.R(r));
}
function Af() {
  return Ua(Date.now(), Wt);
}
function no() {
  return Og || (Og = new ar().resolvedOptions().timeZone);
}
const AT = (e, r) => `Non-integer ${e}: ${r}`, ST = (e, r) => `Non-positive ${e}: ${r}`, OT = (e, r) => `Non-finite ${e}: ${r}`, TT = (e) => `Cannot convert bigint to ${e}`, IT = (e) => `Invalid bigint: ${e}`, RT = "Cannot convert Symbol to string", xT = "Invalid object", I0 = (e, r, i, a, u) => u ? I0(e, u[r], u[i], u[a]) : mr(e, r) + `; must be between ${i}-${a}`, mr = (e, r) => `Invalid ${e}: ${r}`, Ol = (e) => `Missing ${e}`, MT = (e) => `Invalid field ${e}`, PT = (e) => `Duplicate field ${e}`, R0 = (e) => "No valid fields: " + e.join(), CT = "Invalid bag", x0 = (e, r, i) => mr(e, r) + "; must be " + Object.keys(i).join(), DT = "Cannot use valueOf", Sf = "Invalid calling context", NT = "Forbidden era/eraYear", LT = "Mismatching era/eraYear", FT = "Mismatching year/eraYear", BT = (e) => `Invalid era: ${e}`, jT = (e) => "Missing year" + (e ? "/era/eraYear" : ""), qT = (e) => `Invalid monthCode: ${e}`, UT = "Mismatching month/monthCode", M0 = "Missing month/monthCode", eo = "Invalid leap month", Mi = "Invalid protocol results", P0 = (e) => mr("Calendar", e), C0 = "Mismatching Calendars", D0 = (e) => mr("TimeZone", e), N0 = "Mismatching TimeZones", kT = "Forbidden ICU TimeZone", WT = "Out-of-bounds offset", YT = "Out-of-bounds TimeZone gap", $T = "Invalid TimeZone offset", zT = "Ambiguous offset", _r = "Out-of-bounds date", GT = "Out-of-bounds duration", ZT = "Cannot mix duration signs", _u = "Missing relativeTo", HT = "Cannot use large units", KT = "Required smallestUnit or largestUnit", JT = "smallestUnit > largestUnit", Le = (e) => `Cannot parse: ${e}`, Ft = (e) => `Invalid substring: ${e}`, VT = (e) => `Cannot format ${e}`, rc = "Mismatching types for formatting", XT = "Cannot specify TimeZone", L0 = /* @__PURE__ */ Tn(Va, ((e, r) => r)), mi = /* @__PURE__ */ Tn(Va, ((e, r, i) => i)), rt = /* @__PURE__ */ Tn(qa, 2), Of = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, Tl = /* @__PURE__ */ Object.keys(Of), Fe = 864e5, F0 = 1e3, So = 1e3, Wt = 1e6, yt = 1e9, wu = 6e10, bu = 36e11, qn = 864e11, _t = [1, So, Wt, yt, wu, bu, qn], Yt = /* @__PURE__ */ Tl.slice(0, 6), Tf = /* @__PURE__ */ yo(Yt), QT = ["offset"], B0 = ["timeZone"], j0 = /* @__PURE__ */ Yt.concat(QT), q0 = /* @__PURE__ */ j0.concat(B0), If = ["era", "eraYear"], nI = /* @__PURE__ */ If.concat(["year"]), Il = ["year"], Rl = ["monthCode"], xl = /* @__PURE__ */ ["month"].concat(Rl), Oo = ["day"], Ml = /* @__PURE__ */ xl.concat(Il), U0 = /* @__PURE__ */ Rl.concat(Il), $t = /* @__PURE__ */ Oo.concat(Ml), eI = /* @__PURE__ */ Oo.concat(xl), k0 = /* @__PURE__ */ Oo.concat(Rl), W0 = /* @__PURE__ */ mi(Yt, 0), Rn = "iso8601", Pi = "gregory", pr = "japanese", Y0 = {
  [Pi]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [pr]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, $0 = {
  [Pi]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [pr]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, tI = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, he = /* @__PURE__ */ Tn(Lf, "string"), rI = /* @__PURE__ */ Tn(Lf, "boolean"), iI = /* @__PURE__ */ Tn(Lf, "number"), Cn = /* @__PURE__ */ Tl.map(((e) => e + "s")), Pl = /* @__PURE__ */ yo(Cn), oI = /* @__PURE__ */ Cn.slice(0, 6), z0 = /* @__PURE__ */ Cn.slice(6), aI = /* @__PURE__ */ z0.slice(1), uI = /* @__PURE__ */ L0(Cn), ce = /* @__PURE__ */ mi(Cn, 0), Cl = /* @__PURE__ */ mi(oI, 0), Dl = /* @__PURE__ */ Tn(y1, Cn), ct = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], Nl = ["isoDay", "isoMonth", "isoYear"], Eu = /* @__PURE__ */ ct.concat(Nl), Ll = /* @__PURE__ */ yo(Nl), G0 = /* @__PURE__ */ yo(ct), sI = /* @__PURE__ */ yo(Eu), je = /* @__PURE__ */ mi(G0, 0), cI = /* @__PURE__ */ Tn(y1, Eu), Fl = 1e8, Bl = Fl * Fe, fI = [Fl, 0], lI = [-Fl, 0], ho = 275760, go = -271821, ar = Intl.DateTimeFormat, Z0 = "en-GB", pI = 1970, Bt = 1972, er = 12, hI = /* @__PURE__ */ Ei(1868, 9, 8), dI = /* @__PURE__ */ He(KS, WeakMap), Za = "smallestUnit", Rf = "unit", ao = "roundingIncrement", ic = "fractionalSecondDigits", H0 = "relativeTo", oc = "direction", K0 = {
  constrain: 0,
  reject: 1
}, gI = /* @__PURE__ */ Object.keys(K0), yI = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, vI = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, mI = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, _I = {
  auto: 0,
  never: 1,
  critical: 2
}, wI = {
  auto: 0,
  never: 1
}, bI = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, EI = {
  previous: -1,
  next: 1
}, To = /* @__PURE__ */ Tn(Vf, Za), J0 = /* @__PURE__ */ Tn(Vf, "largestUnit"), AI = /* @__PURE__ */ Tn(Vf, Rf), V0 = /* @__PURE__ */ Tn(hr, "overflow", K0), X0 = /* @__PURE__ */ Tn(hr, "disambiguation", yI), SI = /* @__PURE__ */ Tn(hr, "offset", vI), jl = /* @__PURE__ */ Tn(hr, "calendarName", mI), OI = /* @__PURE__ */ Tn(hr, "timeZoneName", _I), TI = /* @__PURE__ */ Tn(hr, "offset", wI), Io = /* @__PURE__ */ Tn(hr, "roundingMode", bI), ql = "PlainYearMonth", Ul = "PlainMonthDay", Ro = "PlainDate", Ci = "PlainDateTime", kl = "PlainTime", wr = "ZonedDateTime", Wl = "Instant", Yl = "Duration", II = [Math.floor, (e) => Oa(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => Oa(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => Oa(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => Oa(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], Yr = "UTC", Ba = 5184e3, RI = /* @__PURE__ */ ka(1847), xI = /* @__PURE__ */ ka(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), MI = /0+$/, Ve = /* @__PURE__ */ He(fO, WeakMap), Ag = 2 ** 32 - 1, _n = /* @__PURE__ */ He(((e) => {
  const r = ml(e);
  return typeof r == "object" ? new CI(r) : new PI(r || 0);
}));
class PI {
  constructor(r) {
    this.$ = r;
  }
  R() {
    return this.$;
  }
  I(r) {
    return ((i) => {
      const a = ue({
        ...i,
        ...je
      });
      if (!a || Math.abs(a[0]) > 1e8)
        throw new RangeError(_r);
    })(r), [Yf(r, this.$)];
  }
  O() {
  }
}
class CI {
  constructor(r) {
    this.nn = ((i) => {
      function a(g) {
        const m = so(g, p, d), [v, w] = hg(m), P = c(v), E = c(w);
        return P === E ? P : u(f(v, w), P, E, g);
      }
      function u(g, m, v, w) {
        let P, E;
        for (; (w === void 0 || (P = w < g[0] ? m : w >= g[1] ? v : void 0) === void 0) && (E = g[1] - g[0]); ) {
          const x = g[0] + Math.floor(E / 2);
          i(x) === v ? g[1] = x : g[0] = x + 1;
        }
        return P;
      }
      const c = He(i), f = He(dO);
      let p = RI, d = xI;
      return {
        tn(g) {
          const m = a(g - 86400), v = a(g + 86400), w = g - m, P = g - v;
          if (m === v)
            return [w];
          const E = a(w);
          return E === a(P) ? [g - E] : m > v ? [w, P] : [];
        },
        rn: a,
        O(g, m) {
          const v = so(g, p, d);
          let [w, P] = hg(v);
          const E = Ba * m, x = m < 0 ? () => P > p || (p = v, 0) : () => w < d || (d = v, 0);
          for (; x(); ) {
            const B = c(w), A = c(P);
            if (B !== A) {
              const I = f(w, P);
              u(I, B, A);
              const D = I[0];
              if ((or(D, g) || 1) === m)
                return D;
            }
            w += E, P += E;
          }
        }
      };
    })(/* @__PURE__ */ ((i) => (a) => {
      const u = $f(i, a * F0);
      return ka(v0(u), parseInt(u.month), parseInt(u.day), parseInt(u.hour), parseInt(u.minute), parseInt(u.second)) - a;
    })(r));
  }
  R(r) {
    return this.nn.rn(((i) => Kd(i)[0])(r)) * yt;
  }
  I(r) {
    const [i, a] = [ka((u = r).isoYear, u.isoMonth, u.isoDay, u.isoHour, u.isoMinute, u.isoSecond), u.isoMillisecond * Wt + u.isoMicrosecond * So + u.isoNanosecond];
    var u;
    return this.nn.tn(i).map(((c) => bt(Lr(Ua(c, yt), a))));
  }
  O(r, i) {
    const [a, u] = Kd(r), c = this.nn.O(a + (i > 0 || u ? 1 : 0), i);
    if (c !== void 0)
      return Ua(c, yt);
  }
}
const $l = "([+-])", ja = "(?:[.,](\\d{1,9}))?", Q0 = `(?:(?:${$l}(\\d{6}))|(\\d{4}))-?(\\d{2})`, zl = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + ja + ")?)?", Gl = $l + zl, DI = Q0 + "-?(\\d{2})(?:[T ]" + zl + "(Z|" + Gl + ")?)?", nv = "\\[(!?)([^\\]]*)\\]", Au = `((?:${nv}){0,9})`, NI = /* @__PURE__ */ Ri(Q0 + Au), LI = /* @__PURE__ */ Ri("(?:--)?(\\d{2})-?(\\d{2})" + Au), FI = /* @__PURE__ */ Ri(DI + Au), BI = /* @__PURE__ */ Ri("T?" + zl + "(?:" + Gl + ")?" + Au), jI = /* @__PURE__ */ Ri(Gl), qI = /* @__PURE__ */ new RegExp(nv, "g"), UI = /* @__PURE__ */ Ri(`${$l}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${ja}H)?(?:(\\d+)${ja}M)?(?:(\\d+)${ja}S)?)?`), kI = /* @__PURE__ */ He(((e) => new ar(Z0, {
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}))), WI = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, YI = /[^\w\/:+-]+/, $I = /^M(\d{2})(L?)$/, zI = /* @__PURE__ */ He(FO), Zl = /* @__PURE__ */ He(((e) => new ar(Z0, {
  calendar: e,
  timeZone: Yr,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
}))), ev = {
  P(e, r, i) {
    const a = Mn(i);
    let u, { years: c, months: f, weeks: p, days: d } = r;
    if (d += se(r, 5)[0], c || f)
      u = ((g, m, v, w, P) => {
        let [E, x, B] = g.v(m);
        if (v) {
          const [A, I] = g.q(E, x);
          E += v, x = za(A, I, g.L(E)), x = jt("month", x, 1, g.B(E), P);
        }
        return w && ([E, x] = g.un(E, x, w)), B = jt("day", B, 1, g.U(E, x), P), g.p(E, x, B);
      })(this, e, c, f, a);
    else {
      if (!p && !d)
        return e;
      u = we(e);
    }
    if (u === void 0)
      throw new RangeError(_r);
    return u += (7 * p + d) * Fe, tt(eu(u));
  },
  N(e, r, i) {
    if (i <= 7) {
      let d = 0, g = f0({
        ...e,
        ...je
      }, {
        ...r,
        ...je
      });
      return i === 7 && ([d, g] = sr(g, 7)), {
        ...ce,
        weeks: d,
        days: g
      };
    }
    const a = this.v(e), u = this.v(r);
    let [c, f, p] = ((d, g, m, v, w, P, E) => {
      let x = w - g, B = P - m, A = E - v;
      if (x || B) {
        const I = Math.sign(x || B);
        let D = d.U(w, P), S = 0;
        if (Math.sign(A) === -I) {
          const M = D;
          [w, P] = d.un(w, P, -I), x = w - g, B = P - m, D = d.U(w, P), S = I < 0 ? -M : D;
        }
        if (A = E - Math.min(v, D) + S, x) {
          const [M, L] = d.q(g, m), [j, z] = d.q(w, P);
          if (B = j - M || Number(z) - Number(L), Math.sign(B) === -I) {
            const Z = I < 0 && -d.B(w);
            x = (w -= I) - g, B = P - za(M, L, d.L(w)) + (Z || d.B(w));
          }
        }
      }
      return [x, B, A];
    })(this, ...a, ...u);
    return i === 8 && (f += this.cn(c, a[0]), c = 0), {
      ...ce,
      years: c,
      months: f,
      days: p
    };
  },
  F(e, r) {
    const i = Mn(r), a = Qs(this, e), u = Ra(this, e, a, i), c = nc(this, e, u, a, i);
    return kt(tt(this.V(a, u, c)), this.id || Rn);
  },
  K(e, r) {
    const i = Mn(r), a = Qs(this, e), u = Ra(this, e, a, i);
    return co(Wf(this.V(a, u, 1)), this.id || Rn);
  },
  _(e, r) {
    const i = Mn(r);
    let a, u, c, f = e.eraYear !== void 0 || e.year !== void 0 ? Qs(this, e) : void 0;
    const p = !this.id;
    if (f === void 0 && p && (f = Bt), f !== void 0) {
      const v = Ra(this, e, f, i);
      a = nc(this, e, v, f, i);
      const w = this.L(f);
      u = Al(v, w), c = v === w;
    } else {
      if (e.monthCode === void 0)
        throw new TypeError(M0);
      if ([u, c] = El(e.monthCode), this.id && this.id !== Pi && this.id !== pr)
        if (this.id && Br(this.id) === "coptic" && i === 0) {
          const v = c || u !== 13 ? 30 : 6;
          a = e.day, a = so(a, 1, v);
        } else if (this.id && Br(this.id) === "chinese" && i === 0) {
          const v = !c || u !== 1 && u !== 9 && u !== 10 && u !== 11 && u !== 12 ? 30 : 29;
          a = e.day, a = so(a, 1, v);
        } else
          a = e.day;
      else
        a = nc(this, e, Ra(this, e, Bt, i), Bt, i);
    }
    const d = this.G(u, c, a);
    if (!d)
      throw new RangeError("Cannot guess year");
    const [g, m] = d;
    return Wa(tt(this.V(g, m, a)), this.id || Rn);
  },
  fields(e) {
    return Ef(this) && e.includes("year") ? [...e, ...If] : e;
  },
  k(e, r) {
    const i = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return ec(i, r, xl), Ef(this) && (ec(i, r, nI), this.id === pr && ec(i, r, eI, If)), i;
  },
  inLeapYear(e) {
    const [r] = this.v(e);
    return this.sn(r);
  },
  monthsInYear(e) {
    const [r] = this.v(e);
    return this.B(r);
  },
  daysInMonth(e) {
    const [r, i] = this.v(e);
    return this.U(r, i);
  },
  daysInYear(e) {
    const [r] = this.v(e);
    return this.fn(r);
  },
  dayOfYear: bl,
  era(e) {
    return this.hn(e)[0];
  },
  eraYear(e) {
    return this.hn(e)[1];
  },
  monthCode(e) {
    const [r, i] = this.v(e), [a, u] = this.q(r, i);
    return bo(a, u);
  },
  dayOfWeek: x1,
  daysInWeek() {
    return 7;
  }
}, GI = {
  v: zf,
  hn: M1,
  q: O1
}, ZI = {
  dayOfYear: bl,
  v: zf,
  p: Ei
}, HI = /* @__PURE__ */ Object.assign({}, ZI, {
  weekOfYear: l0,
  yearOfWeek: p0,
  m(e) {
    function r(P) {
      return (7 - P < a ? 7 : 0) - P;
    }
    function i(P) {
      const E = R1(w + P), x = P || 1, B = r(oo(d + E * x, 7));
      return m = (E + (B - g) * x) / 7;
    }
    const a = this.id ? 1 : 4, u = x1(e), c = this.dayOfYear(e), f = oo(u - 1, 7), p = c - 1, d = oo(f - p, 7), g = r(d);
    let m, v = Math.floor((p - g) / 7) + 1, w = e.isoYear;
    return v ? v > i(0) && (v = 1, w++) : (v = i(-1), w--), [v, w, m];
  }
}), KI = /* @__PURE__ */ Object.assign({}, ev, HI, {
  v: zf,
  hn: M1,
  q: O1,
  G(e, r) {
    if (!r)
      return [Bt, e];
  },
  sn: Gf,
  L() {
  },
  B: T1,
  cn: (e) => e * er,
  U: I1,
  fn: R1,
  V: (e, r, i) => ({
    isoYear: e,
    isoMonth: r,
    isoDay: i
  }),
  p: Ei,
  un: (e, r, i) => (e += Xa(i, er), (r += Df(i, er)) < 1 ? (e--, r += er) : r > er && (e++, r -= er), [e, r]),
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: (e) => e.isoDay
}), JI = {
  v: Ga,
  hn: _0,
  q: m0
}, VI = {
  dayOfYear: bl,
  v: Ga,
  p: po,
  weekOfYear: l0,
  yearOfWeek: p0,
  m() {
    return [];
  }
}, XI = /* @__PURE__ */ Object.assign({}, ev, VI, {
  v: Ga,
  hn: _0,
  q: m0,
  G(e, r, i) {
    const a = this.id && Br(this.id) === "chinese" ? ((g, m, v) => {
      if (m)
        switch (g) {
          case 1:
            return 1651;
          case 2:
            return v < 30 ? 1947 : 1765;
          case 3:
            return v < 30 ? 1966 : 1955;
          case 4:
            return v < 30 ? 1963 : 1944;
          case 5:
            return v < 30 ? 1971 : 1952;
          case 6:
            return v < 30 ? 1960 : 1941;
          case 7:
            return v < 30 ? 1968 : 1938;
          case 8:
            return v < 30 ? 1957 : 1718;
          case 9:
            return 1832;
          case 10:
            return 1870;
          case 11:
            return 1814;
          case 12:
            return 1890;
        }
      return 1972;
    })(e, r, i) : Bt;
    let [u, c, f] = Ga.call(this, {
      isoYear: a,
      isoMonth: er,
      isoDay: 31
    });
    const p = Fa.call(this, u), d = c === p;
    (or(e, Al(c, p)) || or(Number(r), Number(d)) || or(i, f)) === 1 && u--;
    for (let g = 0; g < 100; g++) {
      const m = u - g, v = Fa.call(this, m), w = za(e, r, v);
      if (r === (w === v) && i <= bg.call(this, m, w))
        return [m, w];
    }
  },
  sn(e) {
    const r = Ta.call(this, e);
    return r > Ta.call(this, e - 1) && r > Ta.call(this, e + 1);
  },
  L: Fa,
  B: Ia,
  cn(e, r) {
    const i = r + e, a = Math.sign(e), u = a < 0 ? -1 : 0;
    let c = 0;
    for (let f = r; f !== i; f += a)
      c += Ia.call(this, f + u);
    return c;
  },
  U: bg,
  fn: Ta,
  V(e, r, i) {
    return eu(po.call(this, e, r, i));
  },
  p: po,
  un(e, r, i) {
    if (i) {
      if (r += i, !Number.isSafeInteger(r))
        throw new RangeError(_r);
      if (i < 0)
        for (; r < 1; )
          r += Ia.call(this, --e);
      else {
        let a;
        for (; r > (a = Ia.call(this, e)); )
          r -= a, e++;
      }
    }
    return [e, r];
  },
  year(e) {
    return this.h(e).year;
  },
  month(e) {
    const { year: r, o: i } = this.h(e), { u: a } = this.l(r);
    return a[i] + 1;
  },
  day(e) {
    return this.h(e).day;
  }
}), Su = /* @__PURE__ */ w0(GI, JI), dn = /* @__PURE__ */ w0(KI, XI), Sg = {
  era: La,
  eraYear: _e,
  year: _e,
  month: Hd,
  monthCode(e) {
    const r = La(e);
    return El(r), r;
  },
  day: Hd,
  .../* @__PURE__ */ mi(Yt, _e),
  .../* @__PURE__ */ mi(Cn, jf),
  offset(e) {
    const r = La(e);
    return kr(r), r;
  }
}, Hl = /* @__PURE__ */ Tn(d1, Yt, ct), QI = /* @__PURE__ */ Tn(d1, ct, Yt), ur = "numeric", xo = ["timeZoneName"], tv = {
  month: ur,
  day: ur
}, Kl = {
  year: ur,
  month: ur
}, Jl = /* @__PURE__ */ Object.assign({}, Kl, {
  day: ur
}), Vl = {
  hour: ur,
  minute: ur,
  second: ur
}, Xl = /* @__PURE__ */ Object.assign({}, Jl, Vl), nR = /* @__PURE__ */ Object.assign({}, Xl, {
  timeZoneName: "short"
}), eR = /* @__PURE__ */ Object.keys(Kl), tR = /* @__PURE__ */ Object.keys(tv), rR = /* @__PURE__ */ Object.keys(Jl), iR = /* @__PURE__ */ Object.keys(Vl), Ql = ["dateStyle"], oR = /* @__PURE__ */ eR.concat(Ql), aR = /* @__PURE__ */ tR.concat(Ql), np = /* @__PURE__ */ rR.concat(Ql, ["weekday"]), Mo = /* @__PURE__ */ iR.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), ep = /* @__PURE__ */ np.concat(Mo), uR = /* @__PURE__ */ xo.concat(Mo), sR = /* @__PURE__ */ xo.concat(np), cR = /* @__PURE__ */ xo.concat(["day", "weekday"], Mo), fR = /* @__PURE__ */ xo.concat(["year", "weekday"], Mo), lR = /* @__PURE__ */ Wr(ep, Xl), pR = /* @__PURE__ */ Wr(ep, nR), hR = /* @__PURE__ */ Wr(ep, Xl, xo), dR = /* @__PURE__ */ Wr(np, Jl, uR), gR = /* @__PURE__ */ Wr(Mo, Vl, sR), yR = /* @__PURE__ */ Wr(oR, Kl, cR), vR = /* @__PURE__ */ Wr(aR, tv, fR), mR = {}, rv = new ar(void 0, {
  calendar: Rn
}).resolvedOptions().calendar === Rn, iv = [lR, Xf], _R = [pR, Xf, 0, (e, r) => {
  const i = e.timeZone;
  if (r && r.timeZone !== i)
    throw new RangeError(N0);
  return i;
}], ov = [hR, we], av = [dR, we], uv = [gR, (e) => cr(e) / Wt], sv = [yR, we, rv], cv = [vR, we, rv];
let Og;
function br(e, r, i, a, u) {
  function c(...d) {
    if (!(this instanceof c))
      throw new TypeError(Sf);
    Rg(this, r(...d));
  }
  function f(d, g) {
    return Object.defineProperties((function(...m) {
      return d.call(this, p(this), ...m);
    }), uo(g));
  }
  function p(d) {
    const g = Ae(d);
    if (!g || g.branding !== e)
      throw new TypeError(Sf);
    return g;
  }
  return Object.defineProperties(c.prototype, {
    ...GS(qt(f, i)),
    ...gi(qt(f, a)),
    ...Cf("Temporal." + e)
  }), Object.defineProperties(c, {
    ...gi(u),
    ...uo(e)
  }), [c, (d) => {
    const g = Object.create(c.prototype);
    return Rg(g, d), g;
  }, p];
}
function Di(e) {
  if (Ae(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(CT);
  return e;
}
function Po(e) {
  return fv(e) || Rn;
}
function fv(e) {
  const { calendar: r } = e;
  if (r !== void 0)
    return Ou(r);
}
function Ou(e) {
  if (be(e)) {
    const { calendar: r } = Ae(e) || {};
    if (!r)
      throw new TypeError(P0(e));
    return r;
  }
  return ((r) => mu(AO(he(r))))(e);
}
function tp(e) {
  const r = {};
  for (const i in e)
    r[i] = (a) => {
      const { calendar: u } = a;
      return dn(u)[i](a);
    };
  return r;
}
function Er() {
  throw new TypeError(DT);
}
function Ze(e) {
  if (be(e)) {
    const { timeZone: r } = Ae(e) || {};
    if (!r)
      throw new TypeError(D0(e));
    return r;
  }
  return ((r) => vl(SO(he(r))))(e);
}
function ee(e) {
  if (be(e)) {
    const r = Ae(e);
    return r && r.branding === Yl ? r : GO(e);
  }
  return EO(e);
}
function to(e) {
  if (e !== void 0) {
    if (be(e)) {
      const r = Ae(e) || {};
      switch (r.branding) {
        case wr:
        case Ro:
          return r;
        case Ci:
          return kt(r);
      }
      const i = Po(e);
      return {
        ...qO(Ze, _n, dn(i), e),
        calendar: i
      };
    }
    return yO(e);
  }
}
function tr(e, r) {
  if (be(e)) {
    const a = Ae(e) || {};
    switch (a.branding) {
      case kl:
        return Mn(r), a;
      case Ci:
        return Mn(r), At(a);
      case wr:
        return Mn(r), O0(_n, a);
    }
    return zO(e, r);
  }
  const i = bO(e);
  return Mn(r), i;
}
function rp(e) {
  return e === void 0 ? void 0 : tr(e);
}
function ui(e, r) {
  if (be(e)) {
    const a = Ae(e) || {};
    switch (a.branding) {
      case Ci:
        return Mn(r), a;
      case Ro:
        return Mn(r), st({
          ...a,
          ...je
        });
      case wr:
        return Mn(r), A0(_n, a);
    }
    return kO(dn(Po(e)), e, r);
  }
  const i = mO(e);
  return Mn(r), i;
}
function Tg(e, r) {
  if (be(e)) {
    const a = Ae(e);
    if (a && a.branding === Ul)
      return Mn(r), a;
    const u = fv(e);
    return $O(dn(u || Rn), !u, e, r);
  }
  const i = wO(dn, e);
  return Mn(r), i;
}
function si(e, r) {
  if (be(e)) {
    const a = Ae(e);
    return a && a.branding === ql ? (Mn(r), a) : YO(dn(Po(e)), e, r);
  }
  const i = _O(dn, e);
  return Mn(r), i;
}
function ci(e, r) {
  if (be(e)) {
    const a = Ae(e) || {};
    switch (a.branding) {
      case Ro:
        return Mn(r), a;
      case Ci:
        return Mn(r), kt(a);
      case wr:
        return Mn(r), S0(_n, a);
    }
    return WO(dn(Po(e)), e, r);
  }
  const i = fl(e);
  return Mn(r), i;
}
function fi(e, r) {
  if (be(e)) {
    const i = Ae(e);
    if (i && i.branding === wr)
      return ru(r), i;
    const a = Po(e);
    return UO(Ze, _n, dn(a), a, e, r);
  }
  return vO(e, r);
}
function Ig(e) {
  return qt(((r) => (i) => r(xf(i))), e);
}
function xf(e) {
  return Ve(e, _n);
}
function li(e) {
  if (be(e)) {
    const r = Ae(e);
    if (r)
      switch (r.branding) {
        case Wl:
          return r;
        case wr:
          return Ut(r.epochNanoseconds);
      }
  }
  return gO(e);
}
function wR() {
  function e(c, f) {
    return new r(c, f);
  }
  function r(c, f = /* @__PURE__ */ Object.create(null)) {
    Ka.set(this, ((p, d) => {
      const g = new ar(p, d), m = g.resolvedOptions(), v = m.locale, w = at(Object.keys(d), m), P = He(AR), E = (x, ...B) => {
        if (x) {
          if (B.length !== 2)
            throw new TypeError(rc);
          for (const S of B)
            if (S === void 0)
              throw new TypeError(rc);
        }
        x || B[0] !== void 0 || (B = []);
        const A = B.map(((S) => Ae(S) || Number(S)));
        let I, D = 0;
        for (const S of A) {
          const M = typeof S == "object" ? S.branding : void 0;
          if (D++ && M !== I)
            throw new TypeError(rc);
          I = M;
        }
        return I ? P(I)(v, w, ...A) : [g, ...A];
      };
      return E.X = g, E;
    })(c, f));
  }
  const i = ar.prototype, a = Object.getOwnPropertyDescriptors(i), u = Object.getOwnPropertyDescriptors(ar);
  for (const c in a) {
    const f = a[c], p = c.startsWith("format") && bR(c);
    typeof f.value == "function" ? f.value = c === "constructor" ? e : p || ER(c) : p && (f.get = function() {
      if (!Ka.has(this))
        throw new TypeError(Sf);
      return (...d) => p.apply(this, d);
    }, Object.defineProperties(f.get, uo(`get ${c}`)));
  }
  return u.prototype.value = r.prototype = Object.create({}, a), Object.defineProperties(e, u), e;
}
function bR(e) {
  return Object.defineProperties((function(...r) {
    const i = Ka.get(this), [a, ...u] = i(e.includes("Range"), ...r);
    return a[e](...u);
  }), uo(e));
}
function ER(e) {
  return Object.defineProperties((function(...r) {
    return Ka.get(this).X[e](...r);
  }), uo(e));
}
function AR(e) {
  const r = xR[e];
  if (!r)
    throw new TypeError(VT(e));
  return vr(r, He(T0), 1);
}
const Ha = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ Ha.get.bind(Ha), Rg = /* @__PURE__ */ Ha.set.bind(Ha), lv = {
  era: ZS,
  eraYear: m1,
  year: Nf,
  month: Nt,
  daysInMonth: Nt,
  daysInYear: Nt,
  inLeapYear: rI,
  monthsInYear: Nt
}, ip = {
  monthCode: he
}, pv = {
  day: Nt
}, SR = {
  dayOfWeek: Nt,
  dayOfYear: Nt,
  weekOfYear: HS,
  yearOfWeek: m1,
  daysInWeek: Nt
}, op = /* @__PURE__ */ tp(/* @__PURE__ */ Object.assign({}, lv, ip, pv, SR)), OR = /* @__PURE__ */ tp({
  ...lv,
  ...ip
}), TR = /* @__PURE__ */ tp({
  ...ip,
  ...pv
}), Co = {
  calendarId: (e) => e.calendar
}, IR = /* @__PURE__ */ Va(((e) => (r) => r[e]), Cn.concat("sign")), ap = /* @__PURE__ */ Va(((e, r) => (i) => i[ct[r]]), Yt), hv = {
  epochMilliseconds: Xf,
  epochNanoseconds: VS
}, [RR, Kn] = br(Yl, uT, {
  ...IR,
  blank: hO
}, {
  with: (e, r) => Kn(QO(e, r)),
  negated: (e) => Kn(cl(e)),
  abs: (e) => Kn(pO(e)),
  add: (e, r, i) => Kn(pg(to, dn, _n, 0, e, ee(r), i)),
  subtract: (e, r, i) => Kn(pg(to, dn, _n, 1, e, ee(r), i)),
  round: (e, r) => Kn(lO(to, dn, _n, e, r)),
  total: (e, r) => XS(to, dn, _n, e, r),
  toLocaleString(e, r, i) {
    return Intl.DurationFormat ? new Intl.DurationFormat(r, i).format(this) : Xs(e);
  },
  toString: Xs,
  toJSON: (e) => Xs(e),
  valueOf: Er
}, {
  from: (e) => Kn(ee(e)),
  compare: (e, r, i) => TO(to, dn, _n, ee(e), ee(r), i)
}), xR = {
  Instant: iv,
  PlainDateTime: ov,
  PlainDate: av,
  PlainTime: uv,
  PlainYearMonth: sv,
  PlainMonthDay: cv
}, MR = /* @__PURE__ */ vr(iv), PR = /* @__PURE__ */ vr(_R), CR = /* @__PURE__ */ vr(ov), DR = /* @__PURE__ */ vr(av), NR = /* @__PURE__ */ vr(uv), LR = /* @__PURE__ */ vr(sv), FR = /* @__PURE__ */ vr(cv), [BR, ir] = br(kl, aT, ap, {
  with(e, r, i) {
    return ir(XO(this, Di(r), i));
  },
  add: (e, r) => ir(lg(0, e, ee(r))),
  subtract: (e, r) => ir(lg(1, e, ee(r))),
  until: (e, r, i) => Kn(wg(0, e, tr(r), i)),
  since: (e, r, i) => Kn(wg(1, e, tr(r), i)),
  round: (e, r) => ir(tO(e, r)),
  equals: (e, r) => DO(e, tr(r)),
  toLocaleString(e, r, i) {
    const [a, u] = NR(r, i, e);
    return a.format(u);
  },
  toString: ig,
  toJSON: (e) => ig(e),
  valueOf: Er
}, {
  from: (e, r) => ir(tr(e, r)),
  compare: (e, r) => _l(tr(e), tr(r))
}), [jR, dt] = br(Ci, Tn(tT, Eo), {
  ...Co,
  ...op,
  ...ap
}, {
  with: (e, r, i) => dt(HO(dn, e, Di(r), i)),
  withCalendar: (e, r) => dt(Sl(e, Ou(r))),
  withPlainTime: (e, r) => dt(bT(e, rp(r))),
  add: (e, r, i) => dt(sg(dn, 0, e, ee(r), i)),
  subtract: (e, r, i) => dt(sg(dn, 1, e, ee(r), i)),
  until: (e, r, i) => Kn(vg(dn, 0, e, ui(r), i)),
  since: (e, r, i) => Kn(vg(dn, 1, e, ui(r), i)),
  round: (e, r) => dt(eO(e, r)),
  equals: (e, r) => xO(e, ui(r)),
  toZonedDateTime: (e, r, i) => me(fT(_n, e, Ze(r), i)),
  toPlainDate: (e) => gt(kt(e)),
  toPlainTime: (e) => ir(At(e)),
  toLocaleString(e, r, i) {
    const [a, u] = CR(r, i, e);
    return a.format(u);
  },
  toString: ng,
  toJSON: (e) => ng(e),
  valueOf: Er
}, {
  from: (e, r) => dt(ui(e, r)),
  compare: (e, r) => i0(ui(e), ui(r))
}), [qR, Mf] = br(Ul, Tn(oT, Eo), {
  ...Co,
  ...TR
}, {
  with: (e, r, i) => Mf(VO(dn, e, Di(r), i)),
  equals: (e, r) => CO(e, Tg(r)),
  toPlainDate(e, r) {
    return gt(yT(dn, e, this, r));
  },
  toLocaleString(e, r, i) {
    const [a, u] = FR(r, i, e);
    return a.format(u);
  },
  toString: rg,
  toJSON: (e) => rg(e),
  valueOf: Er
}, {
  from: (e, r) => Mf(Tg(e, r))
}), [UR, ro] = br(ql, Tn(iT, Eo), {
  ...Co,
  ...OR
}, {
  with: (e, r, i) => ro(JO(dn, e, Di(r), i)),
  add: (e, r, i) => ro(fg(dn, 0, e, ee(r), i)),
  subtract: (e, r, i) => ro(fg(dn, 1, e, ee(r), i)),
  until: (e, r, i) => Kn(_g(dn, 0, e, si(r), i)),
  since: (e, r, i) => Kn(_g(dn, 1, e, si(r), i)),
  equals: (e, r) => PO(e, si(r)),
  toPlainDate(e, r) {
    return gt(gT(dn, e, this, r));
  },
  toLocaleString(e, r, i) {
    const [a, u] = LR(r, i, e);
    return a.format(u);
  },
  toString: tg,
  toJSON: (e) => tg(e),
  valueOf: Er
}, {
  from: (e, r) => ro(si(e, r)),
  compare: (e, r) => xi(si(e), si(r))
}), [kR, gt] = br(Ro, Tn(rT, Eo), {
  ...Co,
  ...op
}, {
  with: (e, r, i) => gt(KO(dn, e, Di(r), i)),
  withCalendar: (e, r) => gt(Sl(e, Ou(r))),
  add: (e, r, i) => gt(cg(dn, 0, e, ee(r), i)),
  subtract: (e, r, i) => gt(cg(dn, 1, e, ee(r), i)),
  until: (e, r, i) => Kn(mg(dn, 0, e, ci(r), i)),
  since: (e, r, i) => Kn(mg(dn, 1, e, ci(r), i)),
  equals: (e, r) => MO(e, ci(r)),
  toZonedDateTime(e, r) {
    const i = be(r) ? r : {
      timeZone: r
    };
    return me(lT(Ze, tr, _n, e, i));
  },
  toPlainDateTime: (e, r) => dt(pT(e, rp(r))),
  toPlainYearMonth(e) {
    return ro(hT(dn, e, this));
  },
  toPlainMonthDay(e) {
    return Mf(dT(dn, e, this));
  },
  toLocaleString(e, r, i) {
    const [a, u] = DR(r, i, e);
    return a.format(u);
  },
  toString: eg,
  toJSON: (e) => eg(e),
  valueOf: Er
}, {
  from: (e, r) => gt(ci(e, r)),
  compare: (e, r) => xi(ci(e), ci(r))
}), [WR, me] = br(wr, Tn(eT, Eo, OO), {
  ...hv,
  ...Co,
  ...Ig(op),
  ...Ig(ap),
  offset: (e) => _o(xf(e).offsetNanoseconds),
  offsetNanoseconds: (e) => xf(e).offsetNanoseconds,
  timeZoneId: (e) => e.timeZone,
  hoursInDay: (e) => rO(_n, e)
}, {
  with: (e, r, i) => me(ZO(dn, _n, e, Di(r), i)),
  withCalendar: (e, r) => me(Sl(e, Ou(r))),
  withTimeZone: (e, r) => me(ET(e, Ze(r))),
  withPlainTime: (e, r) => me(wT(_n, e, rp(r))),
  add: (e, r, i) => me(ug(dn, _n, 0, e, ee(r), i)),
  subtract: (e, r, i) => me(ug(dn, _n, 1, e, ee(r), i)),
  until: (e, r, i) => Kn(te(yg(dn, _n, 0, e, fi(r), i))),
  since: (e, r, i) => Kn(te(yg(dn, _n, 1, e, fi(r), i))),
  round: (e, r) => me(nO(_n, e, r)),
  startOfDay: (e) => me(iO(_n, e)),
  equals: (e, r) => RO(e, fi(r)),
  toInstant: (e) => rr(cT(e)),
  toPlainDateTime: (e) => dt(A0(_n, e)),
  toPlainDate: (e) => gt(S0(_n, e)),
  toPlainTime: (e) => ir(O0(_n, e)),
  toLocaleString(e, r, i = {}) {
    const [a, u] = PR(r, i, e);
    return a.format(u);
  },
  toString: (e, r) => Qd(_n, e, r),
  toJSON: (e) => Qd(_n, e),
  valueOf: Er,
  getTimeZoneTransition(e, r) {
    const { timeZone: i, epochNanoseconds: a } = e, u = JS(r), c = _n(i).O(a, u);
    return c ? me({
      ...e,
      epochNanoseconds: c
    }) : null;
  }
}, {
  from: (e, r) => me(fi(e, r)),
  compare: (e, r) => r0(fi(e), fi(r))
}), [YR, rr] = br(Wl, nT, hv, {
  add: (e, r) => rr(ag(0, e, ee(r))),
  subtract: (e, r) => rr(ag(1, e, ee(r))),
  until: (e, r, i) => Kn(gg(0, e, li(r), i)),
  since: (e, r, i) => Kn(gg(1, e, li(r), i)),
  round: (e, r) => rr(QS(e, r)),
  equals: (e, r) => IO(e, li(r)),
  toZonedDateTimeISO: (e, r) => me(sT(e, Ze(r))),
  toLocaleString(e, r, i) {
    const [a, u] = MR(r, i, e);
    return a.format(u);
  },
  toString: (e, r) => Xd(Ze, _n, e, r),
  toJSON: (e) => Xd(Ze, _n, e),
  valueOf: Er
}, {
  from: (e) => rr(li(e)),
  fromEpochMilliseconds: (e) => rr(vT(e)),
  fromEpochNanoseconds: (e) => rr(mT(e)),
  compare: (e, r) => t0(li(e), li(r))
}), $R = /* @__PURE__ */ Object.defineProperties({}, {
  ...Cf("Temporal.Now"),
  ...gi({
    timeZoneId: () => no(),
    instant: () => rr(Ut(Af())),
    zonedDateTimeISO: (e = no()) => me(ut(Af(), Ze(e), Rn)),
    plainDateTimeISO: (e = no()) => dt(st(tc(_n(Ze(e))), Rn)),
    plainDateISO: (e = no()) => gt(kt(tc(_n(Ze(e))), Rn)),
    plainTimeISO: (e = no()) => ir(At(tc(_n(Ze(e)))))
  })
}), zR = /* @__PURE__ */ Object.defineProperties({}, {
  ...Cf("Temporal"),
  ...gi({
    PlainYearMonth: UR,
    PlainMonthDay: qR,
    PlainDate: kR,
    PlainTime: BR,
    PlainDateTime: jR,
    ZonedDateTime: WR,
    Instant: YR,
    Duration: RR,
    Now: $R
  })
}), GR = /* @__PURE__ */ wR(), Ka = /* @__PURE__ */ new WeakMap();
Object.create(Intl), gi({
  DateTimeFormat: GR
});
function ZR(e) {
  const r = e < 0;
  e = Math.abs(e);
  const i = Math.floor(e / 3600).toFixed(0).padStart(2, "0"), a = Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0"), u = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0");
  let c = "";
  return i !== "00" && (c += `${i}:`), c += `${a}:${u}`, r && (c = "-" + c), c;
}
class xg extends react.Component {
  shouldComponentUpdate(r) {
    const i = Math.floor(this.props.seconds), a = Math.floor(r.seconds);
    return i !== a;
  }
  calculateDuration(r) {
    if (!isNaN(r))
      return new zR.Duration(0, 0, 0, 0, 0, 0, Math.round(r)).round({ smallestUnit: "seconds", largestUnit: "hours" }).toString();
  }
  render() {
    const { seconds: r, role: i } = this.props;
    return /* @__PURE__ */ react.createElement(
      "time",
      {
        dateTime: this.calculateDuration(r),
        "aria-live": this.props["aria-live"],
        role: i,
        className: ot("mx_Clock", this.props.className)
      },
      ZR(r)
    );
  }
}
var io = { exports: {} };
var HR = io.exports, Mg;
function KR() {
  return Mg || (Mg = 1, (function(e, r) {
    (function() {
      var i, a = "4.17.21", u = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", p = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", g = 500, m = "__lodash_placeholder__", v = 1, w = 2, P = 4, E = 1, x = 2, B = 1, A = 2, I = 4, D = 8, S = 16, M = 32, L = 64, j = 128, z = 256, Z = 512, V = 30, fn = "...", bn = 800, Ln = 16, Fn = 1, Se = 2, Oe = 3, Vn = 1 / 0, Dn = 9007199254740991, zn = 17976931348623157e292, re = NaN, q = 4294967295, T = q - 1, N = q >>> 1, W = [
        ["ary", j],
        ["bind", B],
        ["bindKey", A],
        ["curry", D],
        ["curryRight", S],
        ["flip", Z],
        ["partial", M],
        ["partialRight", L],
        ["rearg", z]
      ], X = "[object Arguments]", cn = "[object Array]", en = "[object AsyncFunction]", tn = "[object Boolean]", Q = "[object Date]", nn = "[object DOMException]", yn = "[object Error]", wn = "[object Function]", Bn = "[object GeneratorFunction]", Sn = "[object Map]", Xn = "[object Number]", Gn = "[object Null]", ie = "[object Object]", zt = "[object Promise]", Y = "[object Proxy]", Te = "[object RegExp]", Un = "[object Set]", ft = "[object String]", St = "[object Symbol]", $r = "[object Undefined]", Li = "[object WeakMap]", Bv = "[object WeakSet]", Fi = "[object ArrayBuffer]", zr = "[object DataView]", Mu = "[object Float32Array]", Pu = "[object Float64Array]", Cu = "[object Int8Array]", Du = "[object Int16Array]", Nu = "[object Int32Array]", Lu = "[object Uint8Array]", Fu = "[object Uint8ClampedArray]", Bu = "[object Uint16Array]", ju = "[object Uint32Array]", jv = /\b__p \+= '';/g, qv = /\b(__p \+=) '' \+/g, Uv = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pp = /&(?:amp|lt|gt|quot|#39);/g, hp = /[&<>"']/g, kv = RegExp(pp.source), Wv = RegExp(hp.source), Yv = /<%-([\s\S]+?)%>/g, $v = /<%([\s\S]+?)%>/g, dp = /<%=([\s\S]+?)%>/g, zv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gv = /^\w*$/, Zv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qu = /[\\^$.*+?()[\]{}|]/g, Hv = RegExp(qu.source), Uu = /^\s+/, Kv = /\s/, Jv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Vv = /\{\n\/\* \[wrapped with (.+)\] \*/, Xv = /,? & /, Qv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, nm = /[()=,{}\[\]\/\s]/, em = /\\(\\)?/g, tm = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, gp = /\w*$/, rm = /^[-+]0x[0-9a-f]+$/i, im = /^0b[01]+$/i, om = /^\[object .+?Constructor\]$/, am = /^0o[0-7]+$/i, um = /^(?:0|[1-9]\d*)$/, sm = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fo = /($^)/, cm = /['\n\r\u2028\u2029\\]/g, Bo = "\\ud800-\\udfff", fm = "\\u0300-\\u036f", lm = "\\ufe20-\\ufe2f", pm = "\\u20d0-\\u20ff", yp = fm + lm + pm, vp = "\\u2700-\\u27bf", mp = "a-z\\xdf-\\xf6\\xf8-\\xff", hm = "\\xac\\xb1\\xd7\\xf7", dm = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gm = "\\u2000-\\u206f", ym = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _p = "A-Z\\xc0-\\xd6\\xd8-\\xde", wp = "\\ufe0e\\ufe0f", bp = hm + dm + gm + ym, ku = "['’]", vm = "[" + Bo + "]", Ep = "[" + bp + "]", jo = "[" + yp + "]", Ap = "\\d+", mm = "[" + vp + "]", Sp = "[" + mp + "]", Op = "[^" + Bo + bp + Ap + vp + mp + _p + "]", Wu = "\\ud83c[\\udffb-\\udfff]", _m = "(?:" + jo + "|" + Wu + ")", Tp = "[^" + Bo + "]", Yu = "(?:\\ud83c[\\udde6-\\uddff]){2}", $u = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gr = "[" + _p + "]", Ip = "\\u200d", Rp = "(?:" + Sp + "|" + Op + ")", wm = "(?:" + Gr + "|" + Op + ")", xp = "(?:" + ku + "(?:d|ll|m|re|s|t|ve))?", Mp = "(?:" + ku + "(?:D|LL|M|RE|S|T|VE))?", Pp = _m + "?", Cp = "[" + wp + "]?", bm = "(?:" + Ip + "(?:" + [Tp, Yu, $u].join("|") + ")" + Cp + Pp + ")*", Em = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Am = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Dp = Cp + Pp + bm, Sm = "(?:" + [mm, Yu, $u].join("|") + ")" + Dp, Om = "(?:" + [Tp + jo + "?", jo, Yu, $u, vm].join("|") + ")", Tm = RegExp(ku, "g"), Im = RegExp(jo, "g"), zu = RegExp(Wu + "(?=" + Wu + ")|" + Om + Dp, "g"), Rm = RegExp([
        Gr + "?" + Sp + "+" + xp + "(?=" + [Ep, Gr, "$"].join("|") + ")",
        wm + "+" + Mp + "(?=" + [Ep, Gr + Rp, "$"].join("|") + ")",
        Gr + "?" + Rp + "+" + xp,
        Gr + "+" + Mp,
        Am,
        Em,
        Ap,
        Sm
      ].join("|"), "g"), xm = RegExp("[" + Ip + Bo + yp + wp + "]"), Mm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pm = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Cm = -1, Pn = {};
      Pn[Mu] = Pn[Pu] = Pn[Cu] = Pn[Du] = Pn[Nu] = Pn[Lu] = Pn[Fu] = Pn[Bu] = Pn[ju] = !0, Pn[X] = Pn[cn] = Pn[Fi] = Pn[tn] = Pn[zr] = Pn[Q] = Pn[yn] = Pn[wn] = Pn[Sn] = Pn[Xn] = Pn[ie] = Pn[Te] = Pn[Un] = Pn[ft] = Pn[Li] = !1;
      var xn = {};
      xn[X] = xn[cn] = xn[Fi] = xn[zr] = xn[tn] = xn[Q] = xn[Mu] = xn[Pu] = xn[Cu] = xn[Du] = xn[Nu] = xn[Sn] = xn[Xn] = xn[ie] = xn[Te] = xn[Un] = xn[ft] = xn[St] = xn[Lu] = xn[Fu] = xn[Bu] = xn[ju] = !0, xn[yn] = xn[wn] = xn[Li] = !1;
      var Dm = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Nm = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Lm = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Fm = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Bm = parseFloat, jm = parseInt, Np = typeof hi == "object" && hi && hi.Object === Object && hi, qm = typeof self == "object" && self && self.Object === Object && self, Qn = Np || qm || Function("return this")(), Gu = r && !r.nodeType && r, Ar = Gu && !0 && e && !e.nodeType && e, Lp = Ar && Ar.exports === Gu, Zu = Lp && Np.process, qe = (function() {
        try {
          var O = Ar && Ar.require && Ar.require("util").types;
          return O || Zu && Zu.binding && Zu.binding("util");
        } catch {
        }
      })(), Fp = qe && qe.isArrayBuffer, Bp = qe && qe.isDate, jp = qe && qe.isMap, qp = qe && qe.isRegExp, Up = qe && qe.isSet, kp = qe && qe.isTypedArray;
      function Ie(O, F, C) {
        switch (C.length) {
          case 0:
            return O.call(F);
          case 1:
            return O.call(F, C[0]);
          case 2:
            return O.call(F, C[0], C[1]);
          case 3:
            return O.call(F, C[0], C[1], C[2]);
        }
        return O.apply(F, C);
      }
      function Um(O, F, C, K) {
        for (var un = -1, En = O == null ? 0 : O.length; ++un < En; ) {
          var Zn = O[un];
          F(K, Zn, C(Zn), O);
        }
        return K;
      }
      function Ue(O, F) {
        for (var C = -1, K = O == null ? 0 : O.length; ++C < K && F(O[C], C, O) !== !1; )
          ;
        return O;
      }
      function km(O, F) {
        for (var C = O == null ? 0 : O.length; C-- && F(O[C], C, O) !== !1; )
          ;
        return O;
      }
      function Wp(O, F) {
        for (var C = -1, K = O == null ? 0 : O.length; ++C < K; )
          if (!F(O[C], C, O))
            return !1;
        return !0;
      }
      function Gt(O, F) {
        for (var C = -1, K = O == null ? 0 : O.length, un = 0, En = []; ++C < K; ) {
          var Zn = O[C];
          F(Zn, C, O) && (En[un++] = Zn);
        }
        return En;
      }
      function qo(O, F) {
        var C = O == null ? 0 : O.length;
        return !!C && Zr(O, F, 0) > -1;
      }
      function Hu(O, F, C) {
        for (var K = -1, un = O == null ? 0 : O.length; ++K < un; )
          if (C(F, O[K]))
            return !0;
        return !1;
      }
      function Nn(O, F) {
        for (var C = -1, K = O == null ? 0 : O.length, un = Array(K); ++C < K; )
          un[C] = F(O[C], C, O);
        return un;
      }
      function Zt(O, F) {
        for (var C = -1, K = F.length, un = O.length; ++C < K; )
          O[un + C] = F[C];
        return O;
      }
      function Ku(O, F, C, K) {
        var un = -1, En = O == null ? 0 : O.length;
        for (K && En && (C = O[++un]); ++un < En; )
          C = F(C, O[un], un, O);
        return C;
      }
      function Wm(O, F, C, K) {
        var un = O == null ? 0 : O.length;
        for (K && un && (C = O[--un]); un--; )
          C = F(C, O[un], un, O);
        return C;
      }
      function Ju(O, F) {
        for (var C = -1, K = O == null ? 0 : O.length; ++C < K; )
          if (F(O[C], C, O))
            return !0;
        return !1;
      }
      var Ym = Vu("length");
      function $m(O) {
        return O.split("");
      }
      function zm(O) {
        return O.match(Qv) || [];
      }
      function Yp(O, F, C) {
        var K;
        return C(O, function(un, En, Zn) {
          if (F(un, En, Zn))
            return K = En, !1;
        }), K;
      }
      function Uo(O, F, C, K) {
        for (var un = O.length, En = C + (K ? 1 : -1); K ? En-- : ++En < un; )
          if (F(O[En], En, O))
            return En;
        return -1;
      }
      function Zr(O, F, C) {
        return F === F ? r_(O, F, C) : Uo(O, $p, C);
      }
      function Gm(O, F, C, K) {
        for (var un = C - 1, En = O.length; ++un < En; )
          if (K(O[un], F))
            return un;
        return -1;
      }
      function $p(O) {
        return O !== O;
      }
      function zp(O, F) {
        var C = O == null ? 0 : O.length;
        return C ? Qu(O, F) / C : re;
      }
      function Vu(O) {
        return function(F) {
          return F == null ? i : F[O];
        };
      }
      function Xu(O) {
        return function(F) {
          return O == null ? i : O[F];
        };
      }
      function Gp(O, F, C, K, un) {
        return un(O, function(En, Zn, In) {
          C = K ? (K = !1, En) : F(C, En, Zn, In);
        }), C;
      }
      function Zm(O, F) {
        var C = O.length;
        for (O.sort(F); C--; )
          O[C] = O[C].value;
        return O;
      }
      function Qu(O, F) {
        for (var C, K = -1, un = O.length; ++K < un; ) {
          var En = F(O[K]);
          En !== i && (C = C === i ? En : C + En);
        }
        return C;
      }
      function ns(O, F) {
        for (var C = -1, K = Array(O); ++C < O; )
          K[C] = F(C);
        return K;
      }
      function Hm(O, F) {
        return Nn(F, function(C) {
          return [C, O[C]];
        });
      }
      function Zp(O) {
        return O && O.slice(0, Vp(O) + 1).replace(Uu, "");
      }
      function Re(O) {
        return function(F) {
          return O(F);
        };
      }
      function es(O, F) {
        return Nn(F, function(C) {
          return O[C];
        });
      }
      function Bi(O, F) {
        return O.has(F);
      }
      function Hp(O, F) {
        for (var C = -1, K = O.length; ++C < K && Zr(F, O[C], 0) > -1; )
          ;
        return C;
      }
      function Kp(O, F) {
        for (var C = O.length; C-- && Zr(F, O[C], 0) > -1; )
          ;
        return C;
      }
      function Km(O, F) {
        for (var C = O.length, K = 0; C--; )
          O[C] === F && ++K;
        return K;
      }
      var Jm = Xu(Dm), Vm = Xu(Nm);
      function Xm(O) {
        return "\\" + Fm[O];
      }
      function Qm(O, F) {
        return O == null ? i : O[F];
      }
      function Hr(O) {
        return xm.test(O);
      }
      function n_(O) {
        return Mm.test(O);
      }
      function e_(O) {
        for (var F, C = []; !(F = O.next()).done; )
          C.push(F.value);
        return C;
      }
      function ts(O) {
        var F = -1, C = Array(O.size);
        return O.forEach(function(K, un) {
          C[++F] = [un, K];
        }), C;
      }
      function Jp(O, F) {
        return function(C) {
          return O(F(C));
        };
      }
      function Ht(O, F) {
        for (var C = -1, K = O.length, un = 0, En = []; ++C < K; ) {
          var Zn = O[C];
          (Zn === F || Zn === m) && (O[C] = m, En[un++] = C);
        }
        return En;
      }
      function ko(O) {
        var F = -1, C = Array(O.size);
        return O.forEach(function(K) {
          C[++F] = K;
        }), C;
      }
      function t_(O) {
        var F = -1, C = Array(O.size);
        return O.forEach(function(K) {
          C[++F] = [K, K];
        }), C;
      }
      function r_(O, F, C) {
        for (var K = C - 1, un = O.length; ++K < un; )
          if (O[K] === F)
            return K;
        return -1;
      }
      function i_(O, F, C) {
        for (var K = C + 1; K--; )
          if (O[K] === F)
            return K;
        return K;
      }
      function Kr(O) {
        return Hr(O) ? a_(O) : Ym(O);
      }
      function Xe(O) {
        return Hr(O) ? u_(O) : $m(O);
      }
      function Vp(O) {
        for (var F = O.length; F-- && Kv.test(O.charAt(F)); )
          ;
        return F;
      }
      var o_ = Xu(Lm);
      function a_(O) {
        for (var F = zu.lastIndex = 0; zu.test(O); )
          ++F;
        return F;
      }
      function u_(O) {
        return O.match(zu) || [];
      }
      function s_(O) {
        return O.match(Rm) || [];
      }
      var c_ = (function O(F) {
        F = F == null ? Qn : Jr.defaults(Qn.Object(), F, Jr.pick(Qn, Pm));
        var C = F.Array, K = F.Date, un = F.Error, En = F.Function, Zn = F.Math, In = F.Object, rs = F.RegExp, f_ = F.String, ke = F.TypeError, Wo = C.prototype, l_ = En.prototype, Vr = In.prototype, Yo = F["__core-js_shared__"], $o = l_.toString, On = Vr.hasOwnProperty, p_ = 0, Xp = (function() {
          var n = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), zo = Vr.toString, h_ = $o.call(In), d_ = Qn._, g_ = rs(
          "^" + $o.call(On).replace(qu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Go = Lp ? F.Buffer : i, Kt = F.Symbol, Zo = F.Uint8Array, Qp = Go ? Go.allocUnsafe : i, Ho = Jp(In.getPrototypeOf, In), nh = In.create, eh = Vr.propertyIsEnumerable, Ko = Wo.splice, th = Kt ? Kt.isConcatSpreadable : i, ji = Kt ? Kt.iterator : i, Sr = Kt ? Kt.toStringTag : i, Jo = (function() {
          try {
            var n = xr(In, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), y_ = F.clearTimeout !== Qn.clearTimeout && F.clearTimeout, v_ = K && K.now !== Qn.Date.now && K.now, m_ = F.setTimeout !== Qn.setTimeout && F.setTimeout, Vo = Zn.ceil, Xo = Zn.floor, is = In.getOwnPropertySymbols, __ = Go ? Go.isBuffer : i, rh = F.isFinite, w_ = Wo.join, b_ = Jp(In.keys, In), Hn = Zn.max, oe = Zn.min, E_ = K.now, A_ = F.parseInt, ih = Zn.random, S_ = Wo.reverse, os = xr(F, "DataView"), qi = xr(F, "Map"), as = xr(F, "Promise"), Xr = xr(F, "Set"), Ui = xr(F, "WeakMap"), ki = xr(In, "create"), Qo = Ui && new Ui(), Qr = {}, O_ = Mr(os), T_ = Mr(qi), I_ = Mr(as), R_ = Mr(Xr), x_ = Mr(Ui), na = Kt ? Kt.prototype : i, Wi = na ? na.valueOf : i, oh = na ? na.toString : i;
        function h(n) {
          if (kn(n) && !sn(n) && !(n instanceof vn)) {
            if (n instanceof We)
              return n;
            if (On.call(n, "__wrapped__"))
              return ad(n);
          }
          return new We(n);
        }
        var ni = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(t) {
            if (!jn(t))
              return {};
            if (nh)
              return nh(t);
            n.prototype = t;
            var o = new n();
            return n.prototype = i, o;
          };
        })();
        function ea() {
        }
        function We(n, t) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
        }
        h.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Yv,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: $v,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: dp,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: h
          }
        }, h.prototype = ea.prototype, h.prototype.constructor = h, We.prototype = ni(ea.prototype), We.prototype.constructor = We;
        function vn(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = q, this.__views__ = [];
        }
        function M_() {
          var n = new vn(this.__wrapped__);
          return n.__actions__ = de(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = de(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = de(this.__views__), n;
        }
        function P_() {
          if (this.__filtered__) {
            var n = new vn(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function C_() {
          var n = this.__wrapped__.value(), t = this.__dir__, o = sn(n), s = t < 0, l = o ? n.length : 0, y = $w(0, l, this.__views__), _ = y.start, b = y.end, R = b - _, U = s ? b : _ - 1, k = this.__iteratees__, $ = k.length, G = 0, J = oe(R, this.__takeCount__);
          if (!o || !s && l == R && J == R)
            return xh(n, this.__actions__);
          var on = [];
          n:
            for (; R-- && G < J; ) {
              U += t;
              for (var pn = -1, an = n[U]; ++pn < $; ) {
                var gn = k[pn], mn = gn.iteratee, Pe = gn.type, pe = mn(an);
                if (Pe == Se)
                  an = pe;
                else if (!pe) {
                  if (Pe == Fn)
                    continue n;
                  break n;
                }
              }
              on[G++] = an;
            }
          return on;
        }
        vn.prototype = ni(ea.prototype), vn.prototype.constructor = vn;
        function Or(n) {
          var t = -1, o = n == null ? 0 : n.length;
          for (this.clear(); ++t < o; ) {
            var s = n[t];
            this.set(s[0], s[1]);
          }
        }
        function D_() {
          this.__data__ = ki ? ki(null) : {}, this.size = 0;
        }
        function N_(n) {
          var t = this.has(n) && delete this.__data__[n];
          return this.size -= t ? 1 : 0, t;
        }
        function L_(n) {
          var t = this.__data__;
          if (ki) {
            var o = t[n];
            return o === d ? i : o;
          }
          return On.call(t, n) ? t[n] : i;
        }
        function F_(n) {
          var t = this.__data__;
          return ki ? t[n] !== i : On.call(t, n);
        }
        function B_(n, t) {
          var o = this.__data__;
          return this.size += this.has(n) ? 0 : 1, o[n] = ki && t === i ? d : t, this;
        }
        Or.prototype.clear = D_, Or.prototype.delete = N_, Or.prototype.get = L_, Or.prototype.has = F_, Or.prototype.set = B_;
        function Ot(n) {
          var t = -1, o = n == null ? 0 : n.length;
          for (this.clear(); ++t < o; ) {
            var s = n[t];
            this.set(s[0], s[1]);
          }
        }
        function j_() {
          this.__data__ = [], this.size = 0;
        }
        function q_(n) {
          var t = this.__data__, o = ta(t, n);
          if (o < 0)
            return !1;
          var s = t.length - 1;
          return o == s ? t.pop() : Ko.call(t, o, 1), --this.size, !0;
        }
        function U_(n) {
          var t = this.__data__, o = ta(t, n);
          return o < 0 ? i : t[o][1];
        }
        function k_(n) {
          return ta(this.__data__, n) > -1;
        }
        function W_(n, t) {
          var o = this.__data__, s = ta(o, n);
          return s < 0 ? (++this.size, o.push([n, t])) : o[s][1] = t, this;
        }
        Ot.prototype.clear = j_, Ot.prototype.delete = q_, Ot.prototype.get = U_, Ot.prototype.has = k_, Ot.prototype.set = W_;
        function Tt(n) {
          var t = -1, o = n == null ? 0 : n.length;
          for (this.clear(); ++t < o; ) {
            var s = n[t];
            this.set(s[0], s[1]);
          }
        }
        function Y_() {
          this.size = 0, this.__data__ = {
            hash: new Or(),
            map: new (qi || Ot)(),
            string: new Or()
          };
        }
        function $_(n) {
          var t = da(this, n).delete(n);
          return this.size -= t ? 1 : 0, t;
        }
        function z_(n) {
          return da(this, n).get(n);
        }
        function G_(n) {
          return da(this, n).has(n);
        }
        function Z_(n, t) {
          var o = da(this, n), s = o.size;
          return o.set(n, t), this.size += o.size == s ? 0 : 1, this;
        }
        Tt.prototype.clear = Y_, Tt.prototype.delete = $_, Tt.prototype.get = z_, Tt.prototype.has = G_, Tt.prototype.set = Z_;
        function Tr(n) {
          var t = -1, o = n == null ? 0 : n.length;
          for (this.__data__ = new Tt(); ++t < o; )
            this.add(n[t]);
        }
        function H_(n) {
          return this.__data__.set(n, d), this;
        }
        function K_(n) {
          return this.__data__.has(n);
        }
        Tr.prototype.add = Tr.prototype.push = H_, Tr.prototype.has = K_;
        function Qe(n) {
          var t = this.__data__ = new Ot(n);
          this.size = t.size;
        }
        function J_() {
          this.__data__ = new Ot(), this.size = 0;
        }
        function V_(n) {
          var t = this.__data__, o = t.delete(n);
          return this.size = t.size, o;
        }
        function X_(n) {
          return this.__data__.get(n);
        }
        function Q_(n) {
          return this.__data__.has(n);
        }
        function nw(n, t) {
          var o = this.__data__;
          if (o instanceof Ot) {
            var s = o.__data__;
            if (!qi || s.length < u - 1)
              return s.push([n, t]), this.size = ++o.size, this;
            o = this.__data__ = new Tt(s);
          }
          return o.set(n, t), this.size = o.size, this;
        }
        Qe.prototype.clear = J_, Qe.prototype.delete = V_, Qe.prototype.get = X_, Qe.prototype.has = Q_, Qe.prototype.set = nw;
        function ah(n, t) {
          var o = sn(n), s = !o && Pr(n), l = !o && !s && nr(n), y = !o && !s && !l && ii(n), _ = o || s || l || y, b = _ ? ns(n.length, f_) : [], R = b.length;
          for (var U in n)
            (t || On.call(n, U)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (U == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            l && (U == "offset" || U == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            y && (U == "buffer" || U == "byteLength" || U == "byteOffset") || // Skip index properties.
            Mt(U, R))) && b.push(U);
          return b;
        }
        function uh(n) {
          var t = n.length;
          return t ? n[vs(0, t - 1)] : i;
        }
        function ew(n, t) {
          return ga(de(n), Ir(t, 0, n.length));
        }
        function tw(n) {
          return ga(de(n));
        }
        function us(n, t, o) {
          (o !== i && !nt(n[t], o) || o === i && !(t in n)) && It(n, t, o);
        }
        function Yi(n, t, o) {
          var s = n[t];
          (!(On.call(n, t) && nt(s, o)) || o === i && !(t in n)) && It(n, t, o);
        }
        function ta(n, t) {
          for (var o = n.length; o--; )
            if (nt(n[o][0], t))
              return o;
          return -1;
        }
        function rw(n, t, o, s) {
          return Jt(n, function(l, y, _) {
            t(s, l, o(l), _);
          }), s;
        }
        function sh(n, t) {
          return n && pt(t, Jn(t), n);
        }
        function iw(n, t) {
          return n && pt(t, ye(t), n);
        }
        function It(n, t, o) {
          t == "__proto__" && Jo ? Jo(n, t, {
            configurable: !0,
            enumerable: !0,
            value: o,
            writable: !0
          }) : n[t] = o;
        }
        function ss(n, t) {
          for (var o = -1, s = t.length, l = C(s), y = n == null; ++o < s; )
            l[o] = y ? i : Ws(n, t[o]);
          return l;
        }
        function Ir(n, t, o) {
          return n === n && (o !== i && (n = n <= o ? n : o), t !== i && (n = n >= t ? n : t)), n;
        }
        function Ye(n, t, o, s, l, y) {
          var _, b = t & v, R = t & w, U = t & P;
          if (o && (_ = l ? o(n, s, l, y) : o(n)), _ !== i)
            return _;
          if (!jn(n))
            return n;
          var k = sn(n);
          if (k) {
            if (_ = Gw(n), !b)
              return de(n, _);
          } else {
            var $ = ae(n), G = $ == wn || $ == Bn;
            if (nr(n))
              return Ch(n, b);
            if ($ == ie || $ == X || G && !l) {
              if (_ = R || G ? {} : Vh(n), !b)
                return R ? Lw(n, iw(_, n)) : Nw(n, sh(_, n));
            } else {
              if (!xn[$])
                return l ? n : {};
              _ = Zw(n, $, b);
            }
          }
          y || (y = new Qe());
          var J = y.get(n);
          if (J)
            return J;
          y.set(n, _), Td(n) ? n.forEach(function(an) {
            _.add(Ye(an, t, o, an, n, y));
          }) : Sd(n) && n.forEach(function(an, gn) {
            _.set(gn, Ye(an, t, o, gn, n, y));
          });
          var on = U ? R ? Rs : Is : R ? ye : Jn, pn = k ? i : on(n);
          return Ue(pn || n, function(an, gn) {
            pn && (gn = an, an = n[gn]), Yi(_, gn, Ye(an, t, o, gn, n, y));
          }), _;
        }
        function ow(n) {
          var t = Jn(n);
          return function(o) {
            return ch(o, n, t);
          };
        }
        function ch(n, t, o) {
          var s = o.length;
          if (n == null)
            return !s;
          for (n = In(n); s--; ) {
            var l = o[s], y = t[l], _ = n[l];
            if (_ === i && !(l in n) || !y(_))
              return !1;
          }
          return !0;
        }
        function fh(n, t, o) {
          if (typeof n != "function")
            throw new ke(f);
          return Ji(function() {
            n.apply(i, o);
          }, t);
        }
        function $i(n, t, o, s) {
          var l = -1, y = qo, _ = !0, b = n.length, R = [], U = t.length;
          if (!b)
            return R;
          o && (t = Nn(t, Re(o))), s ? (y = Hu, _ = !1) : t.length >= u && (y = Bi, _ = !1, t = new Tr(t));
          n:
            for (; ++l < b; ) {
              var k = n[l], $ = o == null ? k : o(k);
              if (k = s || k !== 0 ? k : 0, _ && $ === $) {
                for (var G = U; G--; )
                  if (t[G] === $)
                    continue n;
                R.push(k);
              } else y(t, $, s) || R.push(k);
            }
          return R;
        }
        var Jt = Bh(lt), lh = Bh(fs, !0);
        function aw(n, t) {
          var o = !0;
          return Jt(n, function(s, l, y) {
            return o = !!t(s, l, y), o;
          }), o;
        }
        function ra(n, t, o) {
          for (var s = -1, l = n.length; ++s < l; ) {
            var y = n[s], _ = t(y);
            if (_ != null && (b === i ? _ === _ && !Me(_) : o(_, b)))
              var b = _, R = y;
          }
          return R;
        }
        function uw(n, t, o, s) {
          var l = n.length;
          for (o = ln(o), o < 0 && (o = -o > l ? 0 : l + o), s = s === i || s > l ? l : ln(s), s < 0 && (s += l), s = o > s ? 0 : Rd(s); o < s; )
            n[o++] = t;
          return n;
        }
        function ph(n, t) {
          var o = [];
          return Jt(n, function(s, l, y) {
            t(s, l, y) && o.push(s);
          }), o;
        }
        function ne(n, t, o, s, l) {
          var y = -1, _ = n.length;
          for (o || (o = Kw), l || (l = []); ++y < _; ) {
            var b = n[y];
            t > 0 && o(b) ? t > 1 ? ne(b, t - 1, o, s, l) : Zt(l, b) : s || (l[l.length] = b);
          }
          return l;
        }
        var cs = jh(), hh = jh(!0);
        function lt(n, t) {
          return n && cs(n, t, Jn);
        }
        function fs(n, t) {
          return n && hh(n, t, Jn);
        }
        function ia(n, t) {
          return Gt(t, function(o) {
            return Pt(n[o]);
          });
        }
        function Rr(n, t) {
          t = Xt(t, n);
          for (var o = 0, s = t.length; n != null && o < s; )
            n = n[ht(t[o++])];
          return o && o == s ? n : i;
        }
        function dh(n, t, o) {
          var s = t(n);
          return sn(n) ? s : Zt(s, o(n));
        }
        function fe(n) {
          return n == null ? n === i ? $r : Gn : Sr && Sr in In(n) ? Yw(n) : tb(n);
        }
        function ls(n, t) {
          return n > t;
        }
        function sw(n, t) {
          return n != null && On.call(n, t);
        }
        function cw(n, t) {
          return n != null && t in In(n);
        }
        function fw(n, t, o) {
          return n >= oe(t, o) && n < Hn(t, o);
        }
        function ps(n, t, o) {
          for (var s = o ? Hu : qo, l = n[0].length, y = n.length, _ = y, b = C(y), R = 1 / 0, U = []; _--; ) {
            var k = n[_];
            _ && t && (k = Nn(k, Re(t))), R = oe(k.length, R), b[_] = !o && (t || l >= 120 && k.length >= 120) ? new Tr(_ && k) : i;
          }
          k = n[0];
          var $ = -1, G = b[0];
          n:
            for (; ++$ < l && U.length < R; ) {
              var J = k[$], on = t ? t(J) : J;
              if (J = o || J !== 0 ? J : 0, !(G ? Bi(G, on) : s(U, on, o))) {
                for (_ = y; --_; ) {
                  var pn = b[_];
                  if (!(pn ? Bi(pn, on) : s(n[_], on, o)))
                    continue n;
                }
                G && G.push(on), U.push(J);
              }
            }
          return U;
        }
        function lw(n, t, o, s) {
          return lt(n, function(l, y, _) {
            t(s, o(l), y, _);
          }), s;
        }
        function zi(n, t, o) {
          t = Xt(t, n), n = ed(n, t);
          var s = n == null ? n : n[ht(ze(t))];
          return s == null ? i : Ie(s, n, o);
        }
        function gh(n) {
          return kn(n) && fe(n) == X;
        }
        function pw(n) {
          return kn(n) && fe(n) == Fi;
        }
        function hw(n) {
          return kn(n) && fe(n) == Q;
        }
        function Gi(n, t, o, s, l) {
          return n === t ? !0 : n == null || t == null || !kn(n) && !kn(t) ? n !== n && t !== t : dw(n, t, o, s, Gi, l);
        }
        function dw(n, t, o, s, l, y) {
          var _ = sn(n), b = sn(t), R = _ ? cn : ae(n), U = b ? cn : ae(t);
          R = R == X ? ie : R, U = U == X ? ie : U;
          var k = R == ie, $ = U == ie, G = R == U;
          if (G && nr(n)) {
            if (!nr(t))
              return !1;
            _ = !0, k = !1;
          }
          if (G && !k)
            return y || (y = new Qe()), _ || ii(n) ? Hh(n, t, o, s, l, y) : kw(n, t, R, o, s, l, y);
          if (!(o & E)) {
            var J = k && On.call(n, "__wrapped__"), on = $ && On.call(t, "__wrapped__");
            if (J || on) {
              var pn = J ? n.value() : n, an = on ? t.value() : t;
              return y || (y = new Qe()), l(pn, an, o, s, y);
            }
          }
          return G ? (y || (y = new Qe()), Ww(n, t, o, s, l, y)) : !1;
        }
        function gw(n) {
          return kn(n) && ae(n) == Sn;
        }
        function hs(n, t, o, s) {
          var l = o.length, y = l, _ = !s;
          if (n == null)
            return !y;
          for (n = In(n); l--; ) {
            var b = o[l];
            if (_ && b[2] ? b[1] !== n[b[0]] : !(b[0] in n))
              return !1;
          }
          for (; ++l < y; ) {
            b = o[l];
            var R = b[0], U = n[R], k = b[1];
            if (_ && b[2]) {
              if (U === i && !(R in n))
                return !1;
            } else {
              var $ = new Qe();
              if (s)
                var G = s(U, k, R, n, t, $);
              if (!(G === i ? Gi(k, U, E | x, s, $) : G))
                return !1;
            }
          }
          return !0;
        }
        function yh(n) {
          if (!jn(n) || Vw(n))
            return !1;
          var t = Pt(n) ? g_ : om;
          return t.test(Mr(n));
        }
        function yw(n) {
          return kn(n) && fe(n) == Te;
        }
        function vw(n) {
          return kn(n) && ae(n) == Un;
        }
        function mw(n) {
          return kn(n) && ba(n.length) && !!Pn[fe(n)];
        }
        function vh(n) {
          return typeof n == "function" ? n : n == null ? ve : typeof n == "object" ? sn(n) ? wh(n[0], n[1]) : _h(n) : qd(n);
        }
        function ds(n) {
          if (!Ki(n))
            return b_(n);
          var t = [];
          for (var o in In(n))
            On.call(n, o) && o != "constructor" && t.push(o);
          return t;
        }
        function _w(n) {
          if (!jn(n))
            return eb(n);
          var t = Ki(n), o = [];
          for (var s in n)
            s == "constructor" && (t || !On.call(n, s)) || o.push(s);
          return o;
        }
        function gs(n, t) {
          return n < t;
        }
        function mh(n, t) {
          var o = -1, s = ge(n) ? C(n.length) : [];
          return Jt(n, function(l, y, _) {
            s[++o] = t(l, y, _);
          }), s;
        }
        function _h(n) {
          var t = Ms(n);
          return t.length == 1 && t[0][2] ? Qh(t[0][0], t[0][1]) : function(o) {
            return o === n || hs(o, n, t);
          };
        }
        function wh(n, t) {
          return Cs(n) && Xh(t) ? Qh(ht(n), t) : function(o) {
            var s = Ws(o, n);
            return s === i && s === t ? Ys(o, n) : Gi(t, s, E | x);
          };
        }
        function oa(n, t, o, s, l) {
          n !== t && cs(t, function(y, _) {
            if (l || (l = new Qe()), jn(y))
              ww(n, t, _, o, oa, s, l);
            else {
              var b = s ? s(Ns(n, _), y, _ + "", n, t, l) : i;
              b === i && (b = y), us(n, _, b);
            }
          }, ye);
        }
        function ww(n, t, o, s, l, y, _) {
          var b = Ns(n, o), R = Ns(t, o), U = _.get(R);
          if (U) {
            us(n, o, U);
            return;
          }
          var k = y ? y(b, R, o + "", n, t, _) : i, $ = k === i;
          if ($) {
            var G = sn(R), J = !G && nr(R), on = !G && !J && ii(R);
            k = R, G || J || on ? sn(b) ? k = b : Wn(b) ? k = de(b) : J ? ($ = !1, k = Ch(R, !0)) : on ? ($ = !1, k = Dh(R, !0)) : k = [] : Vi(R) || Pr(R) ? (k = b, Pr(b) ? k = xd(b) : (!jn(b) || Pt(b)) && (k = Vh(R))) : $ = !1;
          }
          $ && (_.set(R, k), l(k, R, s, y, _), _.delete(R)), us(n, o, k);
        }
        function bh(n, t) {
          var o = n.length;
          if (o)
            return t += t < 0 ? o : 0, Mt(t, o) ? n[t] : i;
        }
        function Eh(n, t, o) {
          t.length ? t = Nn(t, function(y) {
            return sn(y) ? function(_) {
              return Rr(_, y.length === 1 ? y[0] : y);
            } : y;
          }) : t = [ve];
          var s = -1;
          t = Nn(t, Re(rn()));
          var l = mh(n, function(y, _, b) {
            var R = Nn(t, function(U) {
              return U(y);
            });
            return { criteria: R, index: ++s, value: y };
          });
          return Zm(l, function(y, _) {
            return Dw(y, _, o);
          });
        }
        function bw(n, t) {
          return Ah(n, t, function(o, s) {
            return Ys(n, s);
          });
        }
        function Ah(n, t, o) {
          for (var s = -1, l = t.length, y = {}; ++s < l; ) {
            var _ = t[s], b = Rr(n, _);
            o(b, _) && Zi(y, Xt(_, n), b);
          }
          return y;
        }
        function Ew(n) {
          return function(t) {
            return Rr(t, n);
          };
        }
        function ys(n, t, o, s) {
          var l = s ? Gm : Zr, y = -1, _ = t.length, b = n;
          for (n === t && (t = de(t)), o && (b = Nn(n, Re(o))); ++y < _; )
            for (var R = 0, U = t[y], k = o ? o(U) : U; (R = l(b, k, R, s)) > -1; )
              b !== n && Ko.call(b, R, 1), Ko.call(n, R, 1);
          return n;
        }
        function Sh(n, t) {
          for (var o = n ? t.length : 0, s = o - 1; o--; ) {
            var l = t[o];
            if (o == s || l !== y) {
              var y = l;
              Mt(l) ? Ko.call(n, l, 1) : ws(n, l);
            }
          }
          return n;
        }
        function vs(n, t) {
          return n + Xo(ih() * (t - n + 1));
        }
        function Aw(n, t, o, s) {
          for (var l = -1, y = Hn(Vo((t - n) / (o || 1)), 0), _ = C(y); y--; )
            _[s ? y : ++l] = n, n += o;
          return _;
        }
        function ms(n, t) {
          var o = "";
          if (!n || t < 1 || t > Dn)
            return o;
          do
            t % 2 && (o += n), t = Xo(t / 2), t && (n += n);
          while (t);
          return o;
        }
        function hn(n, t) {
          return Ls(nd(n, t, ve), n + "");
        }
        function Sw(n) {
          return uh(oi(n));
        }
        function Ow(n, t) {
          var o = oi(n);
          return ga(o, Ir(t, 0, o.length));
        }
        function Zi(n, t, o, s) {
          if (!jn(n))
            return n;
          t = Xt(t, n);
          for (var l = -1, y = t.length, _ = y - 1, b = n; b != null && ++l < y; ) {
            var R = ht(t[l]), U = o;
            if (R === "__proto__" || R === "constructor" || R === "prototype")
              return n;
            if (l != _) {
              var k = b[R];
              U = s ? s(k, R, b) : i, U === i && (U = jn(k) ? k : Mt(t[l + 1]) ? [] : {});
            }
            Yi(b, R, U), b = b[R];
          }
          return n;
        }
        var Oh = Qo ? function(n, t) {
          return Qo.set(n, t), n;
        } : ve, Tw = Jo ? function(n, t) {
          return Jo(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: zs(t),
            writable: !0
          });
        } : ve;
        function Iw(n) {
          return ga(oi(n));
        }
        function $e(n, t, o) {
          var s = -1, l = n.length;
          t < 0 && (t = -t > l ? 0 : l + t), o = o > l ? l : o, o < 0 && (o += l), l = t > o ? 0 : o - t >>> 0, t >>>= 0;
          for (var y = C(l); ++s < l; )
            y[s] = n[s + t];
          return y;
        }
        function Rw(n, t) {
          var o;
          return Jt(n, function(s, l, y) {
            return o = t(s, l, y), !o;
          }), !!o;
        }
        function aa(n, t, o) {
          var s = 0, l = n == null ? s : n.length;
          if (typeof t == "number" && t === t && l <= N) {
            for (; s < l; ) {
              var y = s + l >>> 1, _ = n[y];
              _ !== null && !Me(_) && (o ? _ <= t : _ < t) ? s = y + 1 : l = y;
            }
            return l;
          }
          return _s(n, t, ve, o);
        }
        function _s(n, t, o, s) {
          var l = 0, y = n == null ? 0 : n.length;
          if (y === 0)
            return 0;
          t = o(t);
          for (var _ = t !== t, b = t === null, R = Me(t), U = t === i; l < y; ) {
            var k = Xo((l + y) / 2), $ = o(n[k]), G = $ !== i, J = $ === null, on = $ === $, pn = Me($);
            if (_)
              var an = s || on;
            else U ? an = on && (s || G) : b ? an = on && G && (s || !J) : R ? an = on && G && !J && (s || !pn) : J || pn ? an = !1 : an = s ? $ <= t : $ < t;
            an ? l = k + 1 : y = k;
          }
          return oe(y, T);
        }
        function Th(n, t) {
          for (var o = -1, s = n.length, l = 0, y = []; ++o < s; ) {
            var _ = n[o], b = t ? t(_) : _;
            if (!o || !nt(b, R)) {
              var R = b;
              y[l++] = _ === 0 ? 0 : _;
            }
          }
          return y;
        }
        function Ih(n) {
          return typeof n == "number" ? n : Me(n) ? re : +n;
        }
        function xe(n) {
          if (typeof n == "string")
            return n;
          if (sn(n))
            return Nn(n, xe) + "";
          if (Me(n))
            return oh ? oh.call(n) : "";
          var t = n + "";
          return t == "0" && 1 / n == -Vn ? "-0" : t;
        }
        function Vt(n, t, o) {
          var s = -1, l = qo, y = n.length, _ = !0, b = [], R = b;
          if (o)
            _ = !1, l = Hu;
          else if (y >= u) {
            var U = t ? null : qw(n);
            if (U)
              return ko(U);
            _ = !1, l = Bi, R = new Tr();
          } else
            R = t ? [] : b;
          n:
            for (; ++s < y; ) {
              var k = n[s], $ = t ? t(k) : k;
              if (k = o || k !== 0 ? k : 0, _ && $ === $) {
                for (var G = R.length; G--; )
                  if (R[G] === $)
                    continue n;
                t && R.push($), b.push(k);
              } else l(R, $, o) || (R !== b && R.push($), b.push(k));
            }
          return b;
        }
        function ws(n, t) {
          return t = Xt(t, n), n = ed(n, t), n == null || delete n[ht(ze(t))];
        }
        function Rh(n, t, o, s) {
          return Zi(n, t, o(Rr(n, t)), s);
        }
        function ua(n, t, o, s) {
          for (var l = n.length, y = s ? l : -1; (s ? y-- : ++y < l) && t(n[y], y, n); )
            ;
          return o ? $e(n, s ? 0 : y, s ? y + 1 : l) : $e(n, s ? y + 1 : 0, s ? l : y);
        }
        function xh(n, t) {
          var o = n;
          return o instanceof vn && (o = o.value()), Ku(t, function(s, l) {
            return l.func.apply(l.thisArg, Zt([s], l.args));
          }, o);
        }
        function bs(n, t, o) {
          var s = n.length;
          if (s < 2)
            return s ? Vt(n[0]) : [];
          for (var l = -1, y = C(s); ++l < s; )
            for (var _ = n[l], b = -1; ++b < s; )
              b != l && (y[l] = $i(y[l] || _, n[b], t, o));
          return Vt(ne(y, 1), t, o);
        }
        function Mh(n, t, o) {
          for (var s = -1, l = n.length, y = t.length, _ = {}; ++s < l; ) {
            var b = s < y ? t[s] : i;
            o(_, n[s], b);
          }
          return _;
        }
        function Es(n) {
          return Wn(n) ? n : [];
        }
        function As(n) {
          return typeof n == "function" ? n : ve;
        }
        function Xt(n, t) {
          return sn(n) ? n : Cs(n, t) ? [n] : od(An(n));
        }
        var xw = hn;
        function Qt(n, t, o) {
          var s = n.length;
          return o = o === i ? s : o, !t && o >= s ? n : $e(n, t, o);
        }
        var Ph = y_ || function(n) {
          return Qn.clearTimeout(n);
        };
        function Ch(n, t) {
          if (t)
            return n.slice();
          var o = n.length, s = Qp ? Qp(o) : new n.constructor(o);
          return n.copy(s), s;
        }
        function Ss(n) {
          var t = new n.constructor(n.byteLength);
          return new Zo(t).set(new Zo(n)), t;
        }
        function Mw(n, t) {
          var o = t ? Ss(n.buffer) : n.buffer;
          return new n.constructor(o, n.byteOffset, n.byteLength);
        }
        function Pw(n) {
          var t = new n.constructor(n.source, gp.exec(n));
          return t.lastIndex = n.lastIndex, t;
        }
        function Cw(n) {
          return Wi ? In(Wi.call(n)) : {};
        }
        function Dh(n, t) {
          var o = t ? Ss(n.buffer) : n.buffer;
          return new n.constructor(o, n.byteOffset, n.length);
        }
        function Nh(n, t) {
          if (n !== t) {
            var o = n !== i, s = n === null, l = n === n, y = Me(n), _ = t !== i, b = t === null, R = t === t, U = Me(t);
            if (!b && !U && !y && n > t || y && _ && R && !b && !U || s && _ && R || !o && R || !l)
              return 1;
            if (!s && !y && !U && n < t || U && o && l && !s && !y || b && o && l || !_ && l || !R)
              return -1;
          }
          return 0;
        }
        function Dw(n, t, o) {
          for (var s = -1, l = n.criteria, y = t.criteria, _ = l.length, b = o.length; ++s < _; ) {
            var R = Nh(l[s], y[s]);
            if (R) {
              if (s >= b)
                return R;
              var U = o[s];
              return R * (U == "desc" ? -1 : 1);
            }
          }
          return n.index - t.index;
        }
        function Lh(n, t, o, s) {
          for (var l = -1, y = n.length, _ = o.length, b = -1, R = t.length, U = Hn(y - _, 0), k = C(R + U), $ = !s; ++b < R; )
            k[b] = t[b];
          for (; ++l < _; )
            ($ || l < y) && (k[o[l]] = n[l]);
          for (; U--; )
            k[b++] = n[l++];
          return k;
        }
        function Fh(n, t, o, s) {
          for (var l = -1, y = n.length, _ = -1, b = o.length, R = -1, U = t.length, k = Hn(y - b, 0), $ = C(k + U), G = !s; ++l < k; )
            $[l] = n[l];
          for (var J = l; ++R < U; )
            $[J + R] = t[R];
          for (; ++_ < b; )
            (G || l < y) && ($[J + o[_]] = n[l++]);
          return $;
        }
        function de(n, t) {
          var o = -1, s = n.length;
          for (t || (t = C(s)); ++o < s; )
            t[o] = n[o];
          return t;
        }
        function pt(n, t, o, s) {
          var l = !o;
          o || (o = {});
          for (var y = -1, _ = t.length; ++y < _; ) {
            var b = t[y], R = s ? s(o[b], n[b], b, o, n) : i;
            R === i && (R = n[b]), l ? It(o, b, R) : Yi(o, b, R);
          }
          return o;
        }
        function Nw(n, t) {
          return pt(n, Ps(n), t);
        }
        function Lw(n, t) {
          return pt(n, Kh(n), t);
        }
        function sa(n, t) {
          return function(o, s) {
            var l = sn(o) ? Um : rw, y = t ? t() : {};
            return l(o, n, rn(s, 2), y);
          };
        }
        function ei(n) {
          return hn(function(t, o) {
            var s = -1, l = o.length, y = l > 1 ? o[l - 1] : i, _ = l > 2 ? o[2] : i;
            for (y = n.length > 3 && typeof y == "function" ? (l--, y) : i, _ && le(o[0], o[1], _) && (y = l < 3 ? i : y, l = 1), t = In(t); ++s < l; ) {
              var b = o[s];
              b && n(t, b, s, y);
            }
            return t;
          });
        }
        function Bh(n, t) {
          return function(o, s) {
            if (o == null)
              return o;
            if (!ge(o))
              return n(o, s);
            for (var l = o.length, y = t ? l : -1, _ = In(o); (t ? y-- : ++y < l) && s(_[y], y, _) !== !1; )
              ;
            return o;
          };
        }
        function jh(n) {
          return function(t, o, s) {
            for (var l = -1, y = In(t), _ = s(t), b = _.length; b--; ) {
              var R = _[n ? b : ++l];
              if (o(y[R], R, y) === !1)
                break;
            }
            return t;
          };
        }
        function Fw(n, t, o) {
          var s = t & B, l = Hi(n);
          function y() {
            var _ = this && this !== Qn && this instanceof y ? l : n;
            return _.apply(s ? o : this, arguments);
          }
          return y;
        }
        function qh(n) {
          return function(t) {
            t = An(t);
            var o = Hr(t) ? Xe(t) : i, s = o ? o[0] : t.charAt(0), l = o ? Qt(o, 1).join("") : t.slice(1);
            return s[n]() + l;
          };
        }
        function ti(n) {
          return function(t) {
            return Ku(Bd(Fd(t).replace(Tm, "")), n, "");
          };
        }
        function Hi(n) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new n();
              case 1:
                return new n(t[0]);
              case 2:
                return new n(t[0], t[1]);
              case 3:
                return new n(t[0], t[1], t[2]);
              case 4:
                return new n(t[0], t[1], t[2], t[3]);
              case 5:
                return new n(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var o = ni(n.prototype), s = n.apply(o, t);
            return jn(s) ? s : o;
          };
        }
        function Bw(n, t, o) {
          var s = Hi(n);
          function l() {
            for (var y = arguments.length, _ = C(y), b = y, R = ri(l); b--; )
              _[b] = arguments[b];
            var U = y < 3 && _[0] !== R && _[y - 1] !== R ? [] : Ht(_, R);
            if (y -= U.length, y < o)
              return $h(
                n,
                t,
                ca,
                l.placeholder,
                i,
                _,
                U,
                i,
                i,
                o - y
              );
            var k = this && this !== Qn && this instanceof l ? s : n;
            return Ie(k, this, _);
          }
          return l;
        }
        function Uh(n) {
          return function(t, o, s) {
            var l = In(t);
            if (!ge(t)) {
              var y = rn(o, 3);
              t = Jn(t), o = function(b) {
                return y(l[b], b, l);
              };
            }
            var _ = n(t, o, s);
            return _ > -1 ? l[y ? t[_] : _] : i;
          };
        }
        function kh(n) {
          return xt(function(t) {
            var o = t.length, s = o, l = We.prototype.thru;
            for (n && t.reverse(); s--; ) {
              var y = t[s];
              if (typeof y != "function")
                throw new ke(f);
              if (l && !_ && ha(y) == "wrapper")
                var _ = new We([], !0);
            }
            for (s = _ ? s : o; ++s < o; ) {
              y = t[s];
              var b = ha(y), R = b == "wrapper" ? xs(y) : i;
              R && Ds(R[0]) && R[1] == (j | D | M | z) && !R[4].length && R[9] == 1 ? _ = _[ha(R[0])].apply(_, R[3]) : _ = y.length == 1 && Ds(y) ? _[b]() : _.thru(y);
            }
            return function() {
              var U = arguments, k = U[0];
              if (_ && U.length == 1 && sn(k))
                return _.plant(k).value();
              for (var $ = 0, G = o ? t[$].apply(this, U) : k; ++$ < o; )
                G = t[$].call(this, G);
              return G;
            };
          });
        }
        function ca(n, t, o, s, l, y, _, b, R, U) {
          var k = t & j, $ = t & B, G = t & A, J = t & (D | S), on = t & Z, pn = G ? i : Hi(n);
          function an() {
            for (var gn = arguments.length, mn = C(gn), Pe = gn; Pe--; )
              mn[Pe] = arguments[Pe];
            if (J)
              var pe = ri(an), Ce = Km(mn, pe);
            if (s && (mn = Lh(mn, s, l, J)), y && (mn = Fh(mn, y, _, J)), gn -= Ce, J && gn < U) {
              var Yn = Ht(mn, pe);
              return $h(
                n,
                t,
                ca,
                an.placeholder,
                o,
                mn,
                Yn,
                b,
                R,
                U - gn
              );
            }
            var et = $ ? o : this, Dt = G ? et[n] : n;
            return gn = mn.length, b ? mn = rb(mn, b) : on && gn > 1 && mn.reverse(), k && R < gn && (mn.length = R), this && this !== Qn && this instanceof an && (Dt = pn || Hi(Dt)), Dt.apply(et, mn);
          }
          return an;
        }
        function Wh(n, t) {
          return function(o, s) {
            return lw(o, n, t(s), {});
          };
        }
        function fa(n, t) {
          return function(o, s) {
            var l;
            if (o === i && s === i)
              return t;
            if (o !== i && (l = o), s !== i) {
              if (l === i)
                return s;
              typeof o == "string" || typeof s == "string" ? (o = xe(o), s = xe(s)) : (o = Ih(o), s = Ih(s)), l = n(o, s);
            }
            return l;
          };
        }
        function Os(n) {
          return xt(function(t) {
            return t = Nn(t, Re(rn())), hn(function(o) {
              var s = this;
              return n(t, function(l) {
                return Ie(l, s, o);
              });
            });
          });
        }
        function la(n, t) {
          t = t === i ? " " : xe(t);
          var o = t.length;
          if (o < 2)
            return o ? ms(t, n) : t;
          var s = ms(t, Vo(n / Kr(t)));
          return Hr(t) ? Qt(Xe(s), 0, n).join("") : s.slice(0, n);
        }
        function jw(n, t, o, s) {
          var l = t & B, y = Hi(n);
          function _() {
            for (var b = -1, R = arguments.length, U = -1, k = s.length, $ = C(k + R), G = this && this !== Qn && this instanceof _ ? y : n; ++U < k; )
              $[U] = s[U];
            for (; R--; )
              $[U++] = arguments[++b];
            return Ie(G, l ? o : this, $);
          }
          return _;
        }
        function Yh(n) {
          return function(t, o, s) {
            return s && typeof s != "number" && le(t, o, s) && (o = s = i), t = Ct(t), o === i ? (o = t, t = 0) : o = Ct(o), s = s === i ? t < o ? 1 : -1 : Ct(s), Aw(t, o, s, n);
          };
        }
        function pa(n) {
          return function(t, o) {
            return typeof t == "string" && typeof o == "string" || (t = Ge(t), o = Ge(o)), n(t, o);
          };
        }
        function $h(n, t, o, s, l, y, _, b, R, U) {
          var k = t & D, $ = k ? _ : i, G = k ? i : _, J = k ? y : i, on = k ? i : y;
          t |= k ? M : L, t &= ~(k ? L : M), t & I || (t &= -4);
          var pn = [
            n,
            t,
            l,
            J,
            $,
            on,
            G,
            b,
            R,
            U
          ], an = o.apply(i, pn);
          return Ds(n) && td(an, pn), an.placeholder = s, rd(an, n, t);
        }
        function Ts(n) {
          var t = Zn[n];
          return function(o, s) {
            if (o = Ge(o), s = s == null ? 0 : oe(ln(s), 292), s && rh(o)) {
              var l = (An(o) + "e").split("e"), y = t(l[0] + "e" + (+l[1] + s));
              return l = (An(y) + "e").split("e"), +(l[0] + "e" + (+l[1] - s));
            }
            return t(o);
          };
        }
        var qw = Xr && 1 / ko(new Xr([, -0]))[1] == Vn ? function(n) {
          return new Xr(n);
        } : Hs;
        function zh(n) {
          return function(t) {
            var o = ae(t);
            return o == Sn ? ts(t) : o == Un ? t_(t) : Hm(t, n(t));
          };
        }
        function Rt(n, t, o, s, l, y, _, b) {
          var R = t & A;
          if (!R && typeof n != "function")
            throw new ke(f);
          var U = s ? s.length : 0;
          if (U || (t &= -97, s = l = i), _ = _ === i ? _ : Hn(ln(_), 0), b = b === i ? b : ln(b), U -= l ? l.length : 0, t & L) {
            var k = s, $ = l;
            s = l = i;
          }
          var G = R ? i : xs(n), J = [
            n,
            t,
            o,
            s,
            l,
            k,
            $,
            y,
            _,
            b
          ];
          if (G && nb(J, G), n = J[0], t = J[1], o = J[2], s = J[3], l = J[4], b = J[9] = J[9] === i ? R ? 0 : n.length : Hn(J[9] - U, 0), !b && t & (D | S) && (t &= -25), !t || t == B)
            var on = Fw(n, t, o);
          else t == D || t == S ? on = Bw(n, t, b) : (t == M || t == (B | M)) && !l.length ? on = jw(n, t, o, s) : on = ca.apply(i, J);
          var pn = G ? Oh : td;
          return rd(pn(on, J), n, t);
        }
        function Gh(n, t, o, s) {
          return n === i || nt(n, Vr[o]) && !On.call(s, o) ? t : n;
        }
        function Zh(n, t, o, s, l, y) {
          return jn(n) && jn(t) && (y.set(t, n), oa(n, t, i, Zh, y), y.delete(t)), n;
        }
        function Uw(n) {
          return Vi(n) ? i : n;
        }
        function Hh(n, t, o, s, l, y) {
          var _ = o & E, b = n.length, R = t.length;
          if (b != R && !(_ && R > b))
            return !1;
          var U = y.get(n), k = y.get(t);
          if (U && k)
            return U == t && k == n;
          var $ = -1, G = !0, J = o & x ? new Tr() : i;
          for (y.set(n, t), y.set(t, n); ++$ < b; ) {
            var on = n[$], pn = t[$];
            if (s)
              var an = _ ? s(pn, on, $, t, n, y) : s(on, pn, $, n, t, y);
            if (an !== i) {
              if (an)
                continue;
              G = !1;
              break;
            }
            if (J) {
              if (!Ju(t, function(gn, mn) {
                if (!Bi(J, mn) && (on === gn || l(on, gn, o, s, y)))
                  return J.push(mn);
              })) {
                G = !1;
                break;
              }
            } else if (!(on === pn || l(on, pn, o, s, y))) {
              G = !1;
              break;
            }
          }
          return y.delete(n), y.delete(t), G;
        }
        function kw(n, t, o, s, l, y, _) {
          switch (o) {
            case zr:
              if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
                return !1;
              n = n.buffer, t = t.buffer;
            case Fi:
              return !(n.byteLength != t.byteLength || !y(new Zo(n), new Zo(t)));
            case tn:
            case Q:
            case Xn:
              return nt(+n, +t);
            case yn:
              return n.name == t.name && n.message == t.message;
            case Te:
            case ft:
              return n == t + "";
            case Sn:
              var b = ts;
            case Un:
              var R = s & E;
              if (b || (b = ko), n.size != t.size && !R)
                return !1;
              var U = _.get(n);
              if (U)
                return U == t;
              s |= x, _.set(n, t);
              var k = Hh(b(n), b(t), s, l, y, _);
              return _.delete(n), k;
            case St:
              if (Wi)
                return Wi.call(n) == Wi.call(t);
          }
          return !1;
        }
        function Ww(n, t, o, s, l, y) {
          var _ = o & E, b = Is(n), R = b.length, U = Is(t), k = U.length;
          if (R != k && !_)
            return !1;
          for (var $ = R; $--; ) {
            var G = b[$];
            if (!(_ ? G in t : On.call(t, G)))
              return !1;
          }
          var J = y.get(n), on = y.get(t);
          if (J && on)
            return J == t && on == n;
          var pn = !0;
          y.set(n, t), y.set(t, n);
          for (var an = _; ++$ < R; ) {
            G = b[$];
            var gn = n[G], mn = t[G];
            if (s)
              var Pe = _ ? s(mn, gn, G, t, n, y) : s(gn, mn, G, n, t, y);
            if (!(Pe === i ? gn === mn || l(gn, mn, o, s, y) : Pe)) {
              pn = !1;
              break;
            }
            an || (an = G == "constructor");
          }
          if (pn && !an) {
            var pe = n.constructor, Ce = t.constructor;
            pe != Ce && "constructor" in n && "constructor" in t && !(typeof pe == "function" && pe instanceof pe && typeof Ce == "function" && Ce instanceof Ce) && (pn = !1);
          }
          return y.delete(n), y.delete(t), pn;
        }
        function xt(n) {
          return Ls(nd(n, i, cd), n + "");
        }
        function Is(n) {
          return dh(n, Jn, Ps);
        }
        function Rs(n) {
          return dh(n, ye, Kh);
        }
        var xs = Qo ? function(n) {
          return Qo.get(n);
        } : Hs;
        function ha(n) {
          for (var t = n.name + "", o = Qr[t], s = On.call(Qr, t) ? o.length : 0; s--; ) {
            var l = o[s], y = l.func;
            if (y == null || y == n)
              return l.name;
          }
          return t;
        }
        function ri(n) {
          var t = On.call(h, "placeholder") ? h : n;
          return t.placeholder;
        }
        function rn() {
          var n = h.iteratee || Gs;
          return n = n === Gs ? vh : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function da(n, t) {
          var o = n.__data__;
          return Jw(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
        }
        function Ms(n) {
          for (var t = Jn(n), o = t.length; o--; ) {
            var s = t[o], l = n[s];
            t[o] = [s, l, Xh(l)];
          }
          return t;
        }
        function xr(n, t) {
          var o = Qm(n, t);
          return yh(o) ? o : i;
        }
        function Yw(n) {
          var t = On.call(n, Sr), o = n[Sr];
          try {
            n[Sr] = i;
            var s = !0;
          } catch {
          }
          var l = zo.call(n);
          return s && (t ? n[Sr] = o : delete n[Sr]), l;
        }
        var Ps = is ? function(n) {
          return n == null ? [] : (n = In(n), Gt(is(n), function(t) {
            return eh.call(n, t);
          }));
        } : Ks, Kh = is ? function(n) {
          for (var t = []; n; )
            Zt(t, Ps(n)), n = Ho(n);
          return t;
        } : Ks, ae = fe;
        (os && ae(new os(new ArrayBuffer(1))) != zr || qi && ae(new qi()) != Sn || as && ae(as.resolve()) != zt || Xr && ae(new Xr()) != Un || Ui && ae(new Ui()) != Li) && (ae = function(n) {
          var t = fe(n), o = t == ie ? n.constructor : i, s = o ? Mr(o) : "";
          if (s)
            switch (s) {
              case O_:
                return zr;
              case T_:
                return Sn;
              case I_:
                return zt;
              case R_:
                return Un;
              case x_:
                return Li;
            }
          return t;
        });
        function $w(n, t, o) {
          for (var s = -1, l = o.length; ++s < l; ) {
            var y = o[s], _ = y.size;
            switch (y.type) {
              case "drop":
                n += _;
                break;
              case "dropRight":
                t -= _;
                break;
              case "take":
                t = oe(t, n + _);
                break;
              case "takeRight":
                n = Hn(n, t - _);
                break;
            }
          }
          return { start: n, end: t };
        }
        function zw(n) {
          var t = n.match(Vv);
          return t ? t[1].split(Xv) : [];
        }
        function Jh(n, t, o) {
          t = Xt(t, n);
          for (var s = -1, l = t.length, y = !1; ++s < l; ) {
            var _ = ht(t[s]);
            if (!(y = n != null && o(n, _)))
              break;
            n = n[_];
          }
          return y || ++s != l ? y : (l = n == null ? 0 : n.length, !!l && ba(l) && Mt(_, l) && (sn(n) || Pr(n)));
        }
        function Gw(n) {
          var t = n.length, o = new n.constructor(t);
          return t && typeof n[0] == "string" && On.call(n, "index") && (o.index = n.index, o.input = n.input), o;
        }
        function Vh(n) {
          return typeof n.constructor == "function" && !Ki(n) ? ni(Ho(n)) : {};
        }
        function Zw(n, t, o) {
          var s = n.constructor;
          switch (t) {
            case Fi:
              return Ss(n);
            case tn:
            case Q:
              return new s(+n);
            case zr:
              return Mw(n, o);
            case Mu:
            case Pu:
            case Cu:
            case Du:
            case Nu:
            case Lu:
            case Fu:
            case Bu:
            case ju:
              return Dh(n, o);
            case Sn:
              return new s();
            case Xn:
            case ft:
              return new s(n);
            case Te:
              return Pw(n);
            case Un:
              return new s();
            case St:
              return Cw(n);
          }
        }
        function Hw(n, t) {
          var o = t.length;
          if (!o)
            return n;
          var s = o - 1;
          return t[s] = (o > 1 ? "& " : "") + t[s], t = t.join(o > 2 ? ", " : " "), n.replace(Jv, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Kw(n) {
          return sn(n) || Pr(n) || !!(th && n && n[th]);
        }
        function Mt(n, t) {
          var o = typeof n;
          return t = t ?? Dn, !!t && (o == "number" || o != "symbol" && um.test(n)) && n > -1 && n % 1 == 0 && n < t;
        }
        function le(n, t, o) {
          if (!jn(o))
            return !1;
          var s = typeof t;
          return (s == "number" ? ge(o) && Mt(t, o.length) : s == "string" && t in o) ? nt(o[t], n) : !1;
        }
        function Cs(n, t) {
          if (sn(n))
            return !1;
          var o = typeof n;
          return o == "number" || o == "symbol" || o == "boolean" || n == null || Me(n) ? !0 : Gv.test(n) || !zv.test(n) || t != null && n in In(t);
        }
        function Jw(n) {
          var t = typeof n;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
        }
        function Ds(n) {
          var t = ha(n), o = h[t];
          if (typeof o != "function" || !(t in vn.prototype))
            return !1;
          if (n === o)
            return !0;
          var s = xs(o);
          return !!s && n === s[0];
        }
        function Vw(n) {
          return !!Xp && Xp in n;
        }
        var Xw = Yo ? Pt : Js;
        function Ki(n) {
          var t = n && n.constructor, o = typeof t == "function" && t.prototype || Vr;
          return n === o;
        }
        function Xh(n) {
          return n === n && !jn(n);
        }
        function Qh(n, t) {
          return function(o) {
            return o == null ? !1 : o[n] === t && (t !== i || n in In(o));
          };
        }
        function Qw(n) {
          var t = _a(n, function(s) {
            return o.size === g && o.clear(), s;
          }), o = t.cache;
          return t;
        }
        function nb(n, t) {
          var o = n[1], s = t[1], l = o | s, y = l < (B | A | j), _ = s == j && o == D || s == j && o == z && n[7].length <= t[8] || s == (j | z) && t[7].length <= t[8] && o == D;
          if (!(y || _))
            return n;
          s & B && (n[2] = t[2], l |= o & B ? 0 : I);
          var b = t[3];
          if (b) {
            var R = n[3];
            n[3] = R ? Lh(R, b, t[4]) : b, n[4] = R ? Ht(n[3], m) : t[4];
          }
          return b = t[5], b && (R = n[5], n[5] = R ? Fh(R, b, t[6]) : b, n[6] = R ? Ht(n[5], m) : t[6]), b = t[7], b && (n[7] = b), s & j && (n[8] = n[8] == null ? t[8] : oe(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = l, n;
        }
        function eb(n) {
          var t = [];
          if (n != null)
            for (var o in In(n))
              t.push(o);
          return t;
        }
        function tb(n) {
          return zo.call(n);
        }
        function nd(n, t, o) {
          return t = Hn(t === i ? n.length - 1 : t, 0), function() {
            for (var s = arguments, l = -1, y = Hn(s.length - t, 0), _ = C(y); ++l < y; )
              _[l] = s[t + l];
            l = -1;
            for (var b = C(t + 1); ++l < t; )
              b[l] = s[l];
            return b[t] = o(_), Ie(n, this, b);
          };
        }
        function ed(n, t) {
          return t.length < 2 ? n : Rr(n, $e(t, 0, -1));
        }
        function rb(n, t) {
          for (var o = n.length, s = oe(t.length, o), l = de(n); s--; ) {
            var y = t[s];
            n[s] = Mt(y, o) ? l[y] : i;
          }
          return n;
        }
        function Ns(n, t) {
          if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
            return n[t];
        }
        var td = id(Oh), Ji = m_ || function(n, t) {
          return Qn.setTimeout(n, t);
        }, Ls = id(Tw);
        function rd(n, t, o) {
          var s = t + "";
          return Ls(n, Hw(s, ib(zw(s), o)));
        }
        function id(n) {
          var t = 0, o = 0;
          return function() {
            var s = E_(), l = Ln - (s - o);
            if (o = s, l > 0) {
              if (++t >= bn)
                return arguments[0];
            } else
              t = 0;
            return n.apply(i, arguments);
          };
        }
        function ga(n, t) {
          var o = -1, s = n.length, l = s - 1;
          for (t = t === i ? s : t; ++o < t; ) {
            var y = vs(o, l), _ = n[y];
            n[y] = n[o], n[o] = _;
          }
          return n.length = t, n;
        }
        var od = Qw(function(n) {
          var t = [];
          return n.charCodeAt(0) === 46 && t.push(""), n.replace(Zv, function(o, s, l, y) {
            t.push(l ? y.replace(em, "$1") : s || o);
          }), t;
        });
        function ht(n) {
          if (typeof n == "string" || Me(n))
            return n;
          var t = n + "";
          return t == "0" && 1 / n == -Vn ? "-0" : t;
        }
        function Mr(n) {
          if (n != null) {
            try {
              return $o.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function ib(n, t) {
          return Ue(W, function(o) {
            var s = "_." + o[0];
            t & o[1] && !qo(n, s) && n.push(s);
          }), n.sort();
        }
        function ad(n) {
          if (n instanceof vn)
            return n.clone();
          var t = new We(n.__wrapped__, n.__chain__);
          return t.__actions__ = de(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
        }
        function ob(n, t, o) {
          (o ? le(n, t, o) : t === i) ? t = 1 : t = Hn(ln(t), 0);
          var s = n == null ? 0 : n.length;
          if (!s || t < 1)
            return [];
          for (var l = 0, y = 0, _ = C(Vo(s / t)); l < s; )
            _[y++] = $e(n, l, l += t);
          return _;
        }
        function ab(n) {
          for (var t = -1, o = n == null ? 0 : n.length, s = 0, l = []; ++t < o; ) {
            var y = n[t];
            y && (l[s++] = y);
          }
          return l;
        }
        function ub() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var t = C(n - 1), o = arguments[0], s = n; s--; )
            t[s - 1] = arguments[s];
          return Zt(sn(o) ? de(o) : [o], ne(t, 1));
        }
        var sb = hn(function(n, t) {
          return Wn(n) ? $i(n, ne(t, 1, Wn, !0)) : [];
        }), cb = hn(function(n, t) {
          var o = ze(t);
          return Wn(o) && (o = i), Wn(n) ? $i(n, ne(t, 1, Wn, !0), rn(o, 2)) : [];
        }), fb = hn(function(n, t) {
          var o = ze(t);
          return Wn(o) && (o = i), Wn(n) ? $i(n, ne(t, 1, Wn, !0), i, o) : [];
        });
        function lb(n, t, o) {
          var s = n == null ? 0 : n.length;
          return s ? (t = o || t === i ? 1 : ln(t), $e(n, t < 0 ? 0 : t, s)) : [];
        }
        function pb(n, t, o) {
          var s = n == null ? 0 : n.length;
          return s ? (t = o || t === i ? 1 : ln(t), t = s - t, $e(n, 0, t < 0 ? 0 : t)) : [];
        }
        function hb(n, t) {
          return n && n.length ? ua(n, rn(t, 3), !0, !0) : [];
        }
        function db(n, t) {
          return n && n.length ? ua(n, rn(t, 3), !0) : [];
        }
        function gb(n, t, o, s) {
          var l = n == null ? 0 : n.length;
          return l ? (o && typeof o != "number" && le(n, t, o) && (o = 0, s = l), uw(n, t, o, s)) : [];
        }
        function ud(n, t, o) {
          var s = n == null ? 0 : n.length;
          if (!s)
            return -1;
          var l = o == null ? 0 : ln(o);
          return l < 0 && (l = Hn(s + l, 0)), Uo(n, rn(t, 3), l);
        }
        function sd(n, t, o) {
          var s = n == null ? 0 : n.length;
          if (!s)
            return -1;
          var l = s - 1;
          return o !== i && (l = ln(o), l = o < 0 ? Hn(s + l, 0) : oe(l, s - 1)), Uo(n, rn(t, 3), l, !0);
        }
        function cd(n) {
          var t = n == null ? 0 : n.length;
          return t ? ne(n, 1) : [];
        }
        function yb(n) {
          var t = n == null ? 0 : n.length;
          return t ? ne(n, Vn) : [];
        }
        function vb(n, t) {
          var o = n == null ? 0 : n.length;
          return o ? (t = t === i ? 1 : ln(t), ne(n, t)) : [];
        }
        function mb(n) {
          for (var t = -1, o = n == null ? 0 : n.length, s = {}; ++t < o; ) {
            var l = n[t];
            s[l[0]] = l[1];
          }
          return s;
        }
        function fd(n) {
          return n && n.length ? n[0] : i;
        }
        function _b(n, t, o) {
          var s = n == null ? 0 : n.length;
          if (!s)
            return -1;
          var l = o == null ? 0 : ln(o);
          return l < 0 && (l = Hn(s + l, 0)), Zr(n, t, l);
        }
        function wb(n) {
          var t = n == null ? 0 : n.length;
          return t ? $e(n, 0, -1) : [];
        }
        var bb = hn(function(n) {
          var t = Nn(n, Es);
          return t.length && t[0] === n[0] ? ps(t) : [];
        }), Eb = hn(function(n) {
          var t = ze(n), o = Nn(n, Es);
          return t === ze(o) ? t = i : o.pop(), o.length && o[0] === n[0] ? ps(o, rn(t, 2)) : [];
        }), Ab = hn(function(n) {
          var t = ze(n), o = Nn(n, Es);
          return t = typeof t == "function" ? t : i, t && o.pop(), o.length && o[0] === n[0] ? ps(o, i, t) : [];
        });
        function Sb(n, t) {
          return n == null ? "" : w_.call(n, t);
        }
        function ze(n) {
          var t = n == null ? 0 : n.length;
          return t ? n[t - 1] : i;
        }
        function Ob(n, t, o) {
          var s = n == null ? 0 : n.length;
          if (!s)
            return -1;
          var l = s;
          return o !== i && (l = ln(o), l = l < 0 ? Hn(s + l, 0) : oe(l, s - 1)), t === t ? i_(n, t, l) : Uo(n, $p, l, !0);
        }
        function Tb(n, t) {
          return n && n.length ? bh(n, ln(t)) : i;
        }
        var Ib = hn(ld);
        function ld(n, t) {
          return n && n.length && t && t.length ? ys(n, t) : n;
        }
        function Rb(n, t, o) {
          return n && n.length && t && t.length ? ys(n, t, rn(o, 2)) : n;
        }
        function xb(n, t, o) {
          return n && n.length && t && t.length ? ys(n, t, i, o) : n;
        }
        var Mb = xt(function(n, t) {
          var o = n == null ? 0 : n.length, s = ss(n, t);
          return Sh(n, Nn(t, function(l) {
            return Mt(l, o) ? +l : l;
          }).sort(Nh)), s;
        });
        function Pb(n, t) {
          var o = [];
          if (!(n && n.length))
            return o;
          var s = -1, l = [], y = n.length;
          for (t = rn(t, 3); ++s < y; ) {
            var _ = n[s];
            t(_, s, n) && (o.push(_), l.push(s));
          }
          return Sh(n, l), o;
        }
        function Fs(n) {
          return n == null ? n : S_.call(n);
        }
        function Cb(n, t, o) {
          var s = n == null ? 0 : n.length;
          return s ? (o && typeof o != "number" && le(n, t, o) ? (t = 0, o = s) : (t = t == null ? 0 : ln(t), o = o === i ? s : ln(o)), $e(n, t, o)) : [];
        }
        function Db(n, t) {
          return aa(n, t);
        }
        function Nb(n, t, o) {
          return _s(n, t, rn(o, 2));
        }
        function Lb(n, t) {
          var o = n == null ? 0 : n.length;
          if (o) {
            var s = aa(n, t);
            if (s < o && nt(n[s], t))
              return s;
          }
          return -1;
        }
        function Fb(n, t) {
          return aa(n, t, !0);
        }
        function Bb(n, t, o) {
          return _s(n, t, rn(o, 2), !0);
        }
        function jb(n, t) {
          var o = n == null ? 0 : n.length;
          if (o) {
            var s = aa(n, t, !0) - 1;
            if (nt(n[s], t))
              return s;
          }
          return -1;
        }
        function qb(n) {
          return n && n.length ? Th(n) : [];
        }
        function Ub(n, t) {
          return n && n.length ? Th(n, rn(t, 2)) : [];
        }
        function kb(n) {
          var t = n == null ? 0 : n.length;
          return t ? $e(n, 1, t) : [];
        }
        function Wb(n, t, o) {
          return n && n.length ? (t = o || t === i ? 1 : ln(t), $e(n, 0, t < 0 ? 0 : t)) : [];
        }
        function Yb(n, t, o) {
          var s = n == null ? 0 : n.length;
          return s ? (t = o || t === i ? 1 : ln(t), t = s - t, $e(n, t < 0 ? 0 : t, s)) : [];
        }
        function $b(n, t) {
          return n && n.length ? ua(n, rn(t, 3), !1, !0) : [];
        }
        function zb(n, t) {
          return n && n.length ? ua(n, rn(t, 3)) : [];
        }
        var Gb = hn(function(n) {
          return Vt(ne(n, 1, Wn, !0));
        }), Zb = hn(function(n) {
          var t = ze(n);
          return Wn(t) && (t = i), Vt(ne(n, 1, Wn, !0), rn(t, 2));
        }), Hb = hn(function(n) {
          var t = ze(n);
          return t = typeof t == "function" ? t : i, Vt(ne(n, 1, Wn, !0), i, t);
        });
        function Kb(n) {
          return n && n.length ? Vt(n) : [];
        }
        function Jb(n, t) {
          return n && n.length ? Vt(n, rn(t, 2)) : [];
        }
        function Vb(n, t) {
          return t = typeof t == "function" ? t : i, n && n.length ? Vt(n, i, t) : [];
        }
        function Bs(n) {
          if (!(n && n.length))
            return [];
          var t = 0;
          return n = Gt(n, function(o) {
            if (Wn(o))
              return t = Hn(o.length, t), !0;
          }), ns(t, function(o) {
            return Nn(n, Vu(o));
          });
        }
        function pd(n, t) {
          if (!(n && n.length))
            return [];
          var o = Bs(n);
          return t == null ? o : Nn(o, function(s) {
            return Ie(t, i, s);
          });
        }
        var Xb = hn(function(n, t) {
          return Wn(n) ? $i(n, t) : [];
        }), Qb = hn(function(n) {
          return bs(Gt(n, Wn));
        }), nE = hn(function(n) {
          var t = ze(n);
          return Wn(t) && (t = i), bs(Gt(n, Wn), rn(t, 2));
        }), eE = hn(function(n) {
          var t = ze(n);
          return t = typeof t == "function" ? t : i, bs(Gt(n, Wn), i, t);
        }), tE = hn(Bs);
        function rE(n, t) {
          return Mh(n || [], t || [], Yi);
        }
        function iE(n, t) {
          return Mh(n || [], t || [], Zi);
        }
        var oE = hn(function(n) {
          var t = n.length, o = t > 1 ? n[t - 1] : i;
          return o = typeof o == "function" ? (n.pop(), o) : i, pd(n, o);
        });
        function hd(n) {
          var t = h(n);
          return t.__chain__ = !0, t;
        }
        function aE(n, t) {
          return t(n), n;
        }
        function ya(n, t) {
          return t(n);
        }
        var uE = xt(function(n) {
          var t = n.length, o = t ? n[0] : 0, s = this.__wrapped__, l = function(y) {
            return ss(y, n);
          };
          return t > 1 || this.__actions__.length || !(s instanceof vn) || !Mt(o) ? this.thru(l) : (s = s.slice(o, +o + (t ? 1 : 0)), s.__actions__.push({
            func: ya,
            args: [l],
            thisArg: i
          }), new We(s, this.__chain__).thru(function(y) {
            return t && !y.length && y.push(i), y;
          }));
        });
        function sE() {
          return hd(this);
        }
        function cE() {
          return new We(this.value(), this.__chain__);
        }
        function fE() {
          this.__values__ === i && (this.__values__ = Id(this.value()));
          var n = this.__index__ >= this.__values__.length, t = n ? i : this.__values__[this.__index__++];
          return { done: n, value: t };
        }
        function lE() {
          return this;
        }
        function pE(n) {
          for (var t, o = this; o instanceof ea; ) {
            var s = ad(o);
            s.__index__ = 0, s.__values__ = i, t ? l.__wrapped__ = s : t = s;
            var l = s;
            o = o.__wrapped__;
          }
          return l.__wrapped__ = n, t;
        }
        function hE() {
          var n = this.__wrapped__;
          if (n instanceof vn) {
            var t = n;
            return this.__actions__.length && (t = new vn(this)), t = t.reverse(), t.__actions__.push({
              func: ya,
              args: [Fs],
              thisArg: i
            }), new We(t, this.__chain__);
          }
          return this.thru(Fs);
        }
        function dE() {
          return xh(this.__wrapped__, this.__actions__);
        }
        var gE = sa(function(n, t, o) {
          On.call(n, o) ? ++n[o] : It(n, o, 1);
        });
        function yE(n, t, o) {
          var s = sn(n) ? Wp : aw;
          return o && le(n, t, o) && (t = i), s(n, rn(t, 3));
        }
        function vE(n, t) {
          var o = sn(n) ? Gt : ph;
          return o(n, rn(t, 3));
        }
        var mE = Uh(ud), _E = Uh(sd);
        function wE(n, t) {
          return ne(va(n, t), 1);
        }
        function bE(n, t) {
          return ne(va(n, t), Vn);
        }
        function EE(n, t, o) {
          return o = o === i ? 1 : ln(o), ne(va(n, t), o);
        }
        function dd(n, t) {
          var o = sn(n) ? Ue : Jt;
          return o(n, rn(t, 3));
        }
        function gd(n, t) {
          var o = sn(n) ? km : lh;
          return o(n, rn(t, 3));
        }
        var AE = sa(function(n, t, o) {
          On.call(n, o) ? n[o].push(t) : It(n, o, [t]);
        });
        function SE(n, t, o, s) {
          n = ge(n) ? n : oi(n), o = o && !s ? ln(o) : 0;
          var l = n.length;
          return o < 0 && (o = Hn(l + o, 0)), Ea(n) ? o <= l && n.indexOf(t, o) > -1 : !!l && Zr(n, t, o) > -1;
        }
        var OE = hn(function(n, t, o) {
          var s = -1, l = typeof t == "function", y = ge(n) ? C(n.length) : [];
          return Jt(n, function(_) {
            y[++s] = l ? Ie(t, _, o) : zi(_, t, o);
          }), y;
        }), TE = sa(function(n, t, o) {
          It(n, o, t);
        });
        function va(n, t) {
          var o = sn(n) ? Nn : mh;
          return o(n, rn(t, 3));
        }
        function IE(n, t, o, s) {
          return n == null ? [] : (sn(t) || (t = t == null ? [] : [t]), o = s ? i : o, sn(o) || (o = o == null ? [] : [o]), Eh(n, t, o));
        }
        var RE = sa(function(n, t, o) {
          n[o ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function xE(n, t, o) {
          var s = sn(n) ? Ku : Gp, l = arguments.length < 3;
          return s(n, rn(t, 4), o, l, Jt);
        }
        function ME(n, t, o) {
          var s = sn(n) ? Wm : Gp, l = arguments.length < 3;
          return s(n, rn(t, 4), o, l, lh);
        }
        function PE(n, t) {
          var o = sn(n) ? Gt : ph;
          return o(n, wa(rn(t, 3)));
        }
        function CE(n) {
          var t = sn(n) ? uh : Sw;
          return t(n);
        }
        function DE(n, t, o) {
          (o ? le(n, t, o) : t === i) ? t = 1 : t = ln(t);
          var s = sn(n) ? ew : Ow;
          return s(n, t);
        }
        function NE(n) {
          var t = sn(n) ? tw : Iw;
          return t(n);
        }
        function LE(n) {
          if (n == null)
            return 0;
          if (ge(n))
            return Ea(n) ? Kr(n) : n.length;
          var t = ae(n);
          return t == Sn || t == Un ? n.size : ds(n).length;
        }
        function FE(n, t, o) {
          var s = sn(n) ? Ju : Rw;
          return o && le(n, t, o) && (t = i), s(n, rn(t, 3));
        }
        var BE = hn(function(n, t) {
          if (n == null)
            return [];
          var o = t.length;
          return o > 1 && le(n, t[0], t[1]) ? t = [] : o > 2 && le(t[0], t[1], t[2]) && (t = [t[0]]), Eh(n, ne(t, 1), []);
        }), ma = v_ || function() {
          return Qn.Date.now();
        };
        function jE(n, t) {
          if (typeof t != "function")
            throw new ke(f);
          return n = ln(n), function() {
            if (--n < 1)
              return t.apply(this, arguments);
          };
        }
        function yd(n, t, o) {
          return t = o ? i : t, t = n && t == null ? n.length : t, Rt(n, j, i, i, i, i, t);
        }
        function vd(n, t) {
          var o;
          if (typeof t != "function")
            throw new ke(f);
          return n = ln(n), function() {
            return --n > 0 && (o = t.apply(this, arguments)), n <= 1 && (t = i), o;
          };
        }
        var js = hn(function(n, t, o) {
          var s = B;
          if (o.length) {
            var l = Ht(o, ri(js));
            s |= M;
          }
          return Rt(n, s, t, o, l);
        }), md = hn(function(n, t, o) {
          var s = B | A;
          if (o.length) {
            var l = Ht(o, ri(md));
            s |= M;
          }
          return Rt(t, s, n, o, l);
        });
        function _d(n, t, o) {
          t = o ? i : t;
          var s = Rt(n, D, i, i, i, i, i, t);
          return s.placeholder = _d.placeholder, s;
        }
        function wd(n, t, o) {
          t = o ? i : t;
          var s = Rt(n, S, i, i, i, i, i, t);
          return s.placeholder = wd.placeholder, s;
        }
        function bd(n, t, o) {
          var s, l, y, _, b, R, U = 0, k = !1, $ = !1, G = !0;
          if (typeof n != "function")
            throw new ke(f);
          t = Ge(t) || 0, jn(o) && (k = !!o.leading, $ = "maxWait" in o, y = $ ? Hn(Ge(o.maxWait) || 0, t) : y, G = "trailing" in o ? !!o.trailing : G);
          function J(Yn) {
            var et = s, Dt = l;
            return s = l = i, U = Yn, _ = n.apply(Dt, et), _;
          }
          function on(Yn) {
            return U = Yn, b = Ji(gn, t), k ? J(Yn) : _;
          }
          function pn(Yn) {
            var et = Yn - R, Dt = Yn - U, Ud = t - et;
            return $ ? oe(Ud, y - Dt) : Ud;
          }
          function an(Yn) {
            var et = Yn - R, Dt = Yn - U;
            return R === i || et >= t || et < 0 || $ && Dt >= y;
          }
          function gn() {
            var Yn = ma();
            if (an(Yn))
              return mn(Yn);
            b = Ji(gn, pn(Yn));
          }
          function mn(Yn) {
            return b = i, G && s ? J(Yn) : (s = l = i, _);
          }
          function Pe() {
            b !== i && Ph(b), U = 0, s = R = l = b = i;
          }
          function pe() {
            return b === i ? _ : mn(ma());
          }
          function Ce() {
            var Yn = ma(), et = an(Yn);
            if (s = arguments, l = this, R = Yn, et) {
              if (b === i)
                return on(R);
              if ($)
                return Ph(b), b = Ji(gn, t), J(R);
            }
            return b === i && (b = Ji(gn, t)), _;
          }
          return Ce.cancel = Pe, Ce.flush = pe, Ce;
        }
        var qE = hn(function(n, t) {
          return fh(n, 1, t);
        }), UE = hn(function(n, t, o) {
          return fh(n, Ge(t) || 0, o);
        });
        function kE(n) {
          return Rt(n, Z);
        }
        function _a(n, t) {
          if (typeof n != "function" || t != null && typeof t != "function")
            throw new ke(f);
          var o = function() {
            var s = arguments, l = t ? t.apply(this, s) : s[0], y = o.cache;
            if (y.has(l))
              return y.get(l);
            var _ = n.apply(this, s);
            return o.cache = y.set(l, _) || y, _;
          };
          return o.cache = new (_a.Cache || Tt)(), o;
        }
        _a.Cache = Tt;
        function wa(n) {
          if (typeof n != "function")
            throw new ke(f);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, t[0]);
              case 2:
                return !n.call(this, t[0], t[1]);
              case 3:
                return !n.call(this, t[0], t[1], t[2]);
            }
            return !n.apply(this, t);
          };
        }
        function WE(n) {
          return vd(2, n);
        }
        var YE = xw(function(n, t) {
          t = t.length == 1 && sn(t[0]) ? Nn(t[0], Re(rn())) : Nn(ne(t, 1), Re(rn()));
          var o = t.length;
          return hn(function(s) {
            for (var l = -1, y = oe(s.length, o); ++l < y; )
              s[l] = t[l].call(this, s[l]);
            return Ie(n, this, s);
          });
        }), qs = hn(function(n, t) {
          var o = Ht(t, ri(qs));
          return Rt(n, M, i, t, o);
        }), Ed = hn(function(n, t) {
          var o = Ht(t, ri(Ed));
          return Rt(n, L, i, t, o);
        }), $E = xt(function(n, t) {
          return Rt(n, z, i, i, i, t);
        });
        function zE(n, t) {
          if (typeof n != "function")
            throw new ke(f);
          return t = t === i ? t : ln(t), hn(n, t);
        }
        function GE(n, t) {
          if (typeof n != "function")
            throw new ke(f);
          return t = t == null ? 0 : Hn(ln(t), 0), hn(function(o) {
            var s = o[t], l = Qt(o, 0, t);
            return s && Zt(l, s), Ie(n, this, l);
          });
        }
        function ZE(n, t, o) {
          var s = !0, l = !0;
          if (typeof n != "function")
            throw new ke(f);
          return jn(o) && (s = "leading" in o ? !!o.leading : s, l = "trailing" in o ? !!o.trailing : l), bd(n, t, {
            leading: s,
            maxWait: t,
            trailing: l
          });
        }
        function HE(n) {
          return yd(n, 1);
        }
        function KE(n, t) {
          return qs(As(t), n);
        }
        function JE() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return sn(n) ? n : [n];
        }
        function VE(n) {
          return Ye(n, P);
        }
        function XE(n, t) {
          return t = typeof t == "function" ? t : i, Ye(n, P, t);
        }
        function QE(n) {
          return Ye(n, v | P);
        }
        function n2(n, t) {
          return t = typeof t == "function" ? t : i, Ye(n, v | P, t);
        }
        function e2(n, t) {
          return t == null || ch(n, t, Jn(t));
        }
        function nt(n, t) {
          return n === t || n !== n && t !== t;
        }
        var t2 = pa(ls), r2 = pa(function(n, t) {
          return n >= t;
        }), Pr = gh(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? gh : function(n) {
          return kn(n) && On.call(n, "callee") && !eh.call(n, "callee");
        }, sn = C.isArray, i2 = Fp ? Re(Fp) : pw;
        function ge(n) {
          return n != null && ba(n.length) && !Pt(n);
        }
        function Wn(n) {
          return kn(n) && ge(n);
        }
        function o2(n) {
          return n === !0 || n === !1 || kn(n) && fe(n) == tn;
        }
        var nr = __ || Js, a2 = Bp ? Re(Bp) : hw;
        function u2(n) {
          return kn(n) && n.nodeType === 1 && !Vi(n);
        }
        function s2(n) {
          if (n == null)
            return !0;
          if (ge(n) && (sn(n) || typeof n == "string" || typeof n.splice == "function" || nr(n) || ii(n) || Pr(n)))
            return !n.length;
          var t = ae(n);
          if (t == Sn || t == Un)
            return !n.size;
          if (Ki(n))
            return !ds(n).length;
          for (var o in n)
            if (On.call(n, o))
              return !1;
          return !0;
        }
        function c2(n, t) {
          return Gi(n, t);
        }
        function f2(n, t, o) {
          o = typeof o == "function" ? o : i;
          var s = o ? o(n, t) : i;
          return s === i ? Gi(n, t, i, o) : !!s;
        }
        function Us(n) {
          if (!kn(n))
            return !1;
          var t = fe(n);
          return t == yn || t == nn || typeof n.message == "string" && typeof n.name == "string" && !Vi(n);
        }
        function l2(n) {
          return typeof n == "number" && rh(n);
        }
        function Pt(n) {
          if (!jn(n))
            return !1;
          var t = fe(n);
          return t == wn || t == Bn || t == en || t == Y;
        }
        function Ad(n) {
          return typeof n == "number" && n == ln(n);
        }
        function ba(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Dn;
        }
        function jn(n) {
          var t = typeof n;
          return n != null && (t == "object" || t == "function");
        }
        function kn(n) {
          return n != null && typeof n == "object";
        }
        var Sd = jp ? Re(jp) : gw;
        function p2(n, t) {
          return n === t || hs(n, t, Ms(t));
        }
        function h2(n, t, o) {
          return o = typeof o == "function" ? o : i, hs(n, t, Ms(t), o);
        }
        function d2(n) {
          return Od(n) && n != +n;
        }
        function g2(n) {
          if (Xw(n))
            throw new un(c);
          return yh(n);
        }
        function y2(n) {
          return n === null;
        }
        function v2(n) {
          return n == null;
        }
        function Od(n) {
          return typeof n == "number" || kn(n) && fe(n) == Xn;
        }
        function Vi(n) {
          if (!kn(n) || fe(n) != ie)
            return !1;
          var t = Ho(n);
          if (t === null)
            return !0;
          var o = On.call(t, "constructor") && t.constructor;
          return typeof o == "function" && o instanceof o && $o.call(o) == h_;
        }
        var ks = qp ? Re(qp) : yw;
        function m2(n) {
          return Ad(n) && n >= -Dn && n <= Dn;
        }
        var Td = Up ? Re(Up) : vw;
        function Ea(n) {
          return typeof n == "string" || !sn(n) && kn(n) && fe(n) == ft;
        }
        function Me(n) {
          return typeof n == "symbol" || kn(n) && fe(n) == St;
        }
        var ii = kp ? Re(kp) : mw;
        function _2(n) {
          return n === i;
        }
        function w2(n) {
          return kn(n) && ae(n) == Li;
        }
        function b2(n) {
          return kn(n) && fe(n) == Bv;
        }
        var E2 = pa(gs), A2 = pa(function(n, t) {
          return n <= t;
        });
        function Id(n) {
          if (!n)
            return [];
          if (ge(n))
            return Ea(n) ? Xe(n) : de(n);
          if (ji && n[ji])
            return e_(n[ji]());
          var t = ae(n), o = t == Sn ? ts : t == Un ? ko : oi;
          return o(n);
        }
        function Ct(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = Ge(n), n === Vn || n === -Vn) {
            var t = n < 0 ? -1 : 1;
            return t * zn;
          }
          return n === n ? n : 0;
        }
        function ln(n) {
          var t = Ct(n), o = t % 1;
          return t === t ? o ? t - o : t : 0;
        }
        function Rd(n) {
          return n ? Ir(ln(n), 0, q) : 0;
        }
        function Ge(n) {
          if (typeof n == "number")
            return n;
          if (Me(n))
            return re;
          if (jn(n)) {
            var t = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = jn(t) ? t + "" : t;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Zp(n);
          var o = im.test(n);
          return o || am.test(n) ? jm(n.slice(2), o ? 2 : 8) : rm.test(n) ? re : +n;
        }
        function xd(n) {
          return pt(n, ye(n));
        }
        function S2(n) {
          return n ? Ir(ln(n), -Dn, Dn) : n === 0 ? n : 0;
        }
        function An(n) {
          return n == null ? "" : xe(n);
        }
        var O2 = ei(function(n, t) {
          if (Ki(t) || ge(t)) {
            pt(t, Jn(t), n);
            return;
          }
          for (var o in t)
            On.call(t, o) && Yi(n, o, t[o]);
        }), Md = ei(function(n, t) {
          pt(t, ye(t), n);
        }), Aa = ei(function(n, t, o, s) {
          pt(t, ye(t), n, s);
        }), T2 = ei(function(n, t, o, s) {
          pt(t, Jn(t), n, s);
        }), I2 = xt(ss);
        function R2(n, t) {
          var o = ni(n);
          return t == null ? o : sh(o, t);
        }
        var x2 = hn(function(n, t) {
          n = In(n);
          var o = -1, s = t.length, l = s > 2 ? t[2] : i;
          for (l && le(t[0], t[1], l) && (s = 1); ++o < s; )
            for (var y = t[o], _ = ye(y), b = -1, R = _.length; ++b < R; ) {
              var U = _[b], k = n[U];
              (k === i || nt(k, Vr[U]) && !On.call(n, U)) && (n[U] = y[U]);
            }
          return n;
        }), M2 = hn(function(n) {
          return n.push(i, Zh), Ie(Pd, i, n);
        });
        function P2(n, t) {
          return Yp(n, rn(t, 3), lt);
        }
        function C2(n, t) {
          return Yp(n, rn(t, 3), fs);
        }
        function D2(n, t) {
          return n == null ? n : cs(n, rn(t, 3), ye);
        }
        function N2(n, t) {
          return n == null ? n : hh(n, rn(t, 3), ye);
        }
        function L2(n, t) {
          return n && lt(n, rn(t, 3));
        }
        function F2(n, t) {
          return n && fs(n, rn(t, 3));
        }
        function B2(n) {
          return n == null ? [] : ia(n, Jn(n));
        }
        function j2(n) {
          return n == null ? [] : ia(n, ye(n));
        }
        function Ws(n, t, o) {
          var s = n == null ? i : Rr(n, t);
          return s === i ? o : s;
        }
        function q2(n, t) {
          return n != null && Jh(n, t, sw);
        }
        function Ys(n, t) {
          return n != null && Jh(n, t, cw);
        }
        var U2 = Wh(function(n, t, o) {
          t != null && typeof t.toString != "function" && (t = zo.call(t)), n[t] = o;
        }, zs(ve)), k2 = Wh(function(n, t, o) {
          t != null && typeof t.toString != "function" && (t = zo.call(t)), On.call(n, t) ? n[t].push(o) : n[t] = [o];
        }, rn), W2 = hn(zi);
        function Jn(n) {
          return ge(n) ? ah(n) : ds(n);
        }
        function ye(n) {
          return ge(n) ? ah(n, !0) : _w(n);
        }
        function Y2(n, t) {
          var o = {};
          return t = rn(t, 3), lt(n, function(s, l, y) {
            It(o, t(s, l, y), s);
          }), o;
        }
        function $2(n, t) {
          var o = {};
          return t = rn(t, 3), lt(n, function(s, l, y) {
            It(o, l, t(s, l, y));
          }), o;
        }
        var z2 = ei(function(n, t, o) {
          oa(n, t, o);
        }), Pd = ei(function(n, t, o, s) {
          oa(n, t, o, s);
        }), G2 = xt(function(n, t) {
          var o = {};
          if (n == null)
            return o;
          var s = !1;
          t = Nn(t, function(y) {
            return y = Xt(y, n), s || (s = y.length > 1), y;
          }), pt(n, Rs(n), o), s && (o = Ye(o, v | w | P, Uw));
          for (var l = t.length; l--; )
            ws(o, t[l]);
          return o;
        });
        function Z2(n, t) {
          return Cd(n, wa(rn(t)));
        }
        var H2 = xt(function(n, t) {
          return n == null ? {} : bw(n, t);
        });
        function Cd(n, t) {
          if (n == null)
            return {};
          var o = Nn(Rs(n), function(s) {
            return [s];
          });
          return t = rn(t), Ah(n, o, function(s, l) {
            return t(s, l[0]);
          });
        }
        function K2(n, t, o) {
          t = Xt(t, n);
          var s = -1, l = t.length;
          for (l || (l = 1, n = i); ++s < l; ) {
            var y = n == null ? i : n[ht(t[s])];
            y === i && (s = l, y = o), n = Pt(y) ? y.call(n) : y;
          }
          return n;
        }
        function J2(n, t, o) {
          return n == null ? n : Zi(n, t, o);
        }
        function V2(n, t, o, s) {
          return s = typeof s == "function" ? s : i, n == null ? n : Zi(n, t, o, s);
        }
        var Dd = zh(Jn), Nd = zh(ye);
        function X2(n, t, o) {
          var s = sn(n), l = s || nr(n) || ii(n);
          if (t = rn(t, 4), o == null) {
            var y = n && n.constructor;
            l ? o = s ? new y() : [] : jn(n) ? o = Pt(y) ? ni(Ho(n)) : {} : o = {};
          }
          return (l ? Ue : lt)(n, function(_, b, R) {
            return t(o, _, b, R);
          }), o;
        }
        function Q2(n, t) {
          return n == null ? !0 : ws(n, t);
        }
        function nA(n, t, o) {
          return n == null ? n : Rh(n, t, As(o));
        }
        function eA(n, t, o, s) {
          return s = typeof s == "function" ? s : i, n == null ? n : Rh(n, t, As(o), s);
        }
        function oi(n) {
          return n == null ? [] : es(n, Jn(n));
        }
        function tA(n) {
          return n == null ? [] : es(n, ye(n));
        }
        function rA(n, t, o) {
          return o === i && (o = t, t = i), o !== i && (o = Ge(o), o = o === o ? o : 0), t !== i && (t = Ge(t), t = t === t ? t : 0), Ir(Ge(n), t, o);
        }
        function iA(n, t, o) {
          return t = Ct(t), o === i ? (o = t, t = 0) : o = Ct(o), n = Ge(n), fw(n, t, o);
        }
        function oA(n, t, o) {
          if (o && typeof o != "boolean" && le(n, t, o) && (t = o = i), o === i && (typeof t == "boolean" ? (o = t, t = i) : typeof n == "boolean" && (o = n, n = i)), n === i && t === i ? (n = 0, t = 1) : (n = Ct(n), t === i ? (t = n, n = 0) : t = Ct(t)), n > t) {
            var s = n;
            n = t, t = s;
          }
          if (o || n % 1 || t % 1) {
            var l = ih();
            return oe(n + l * (t - n + Bm("1e-" + ((l + "").length - 1))), t);
          }
          return vs(n, t);
        }
        var aA = ti(function(n, t, o) {
          return t = t.toLowerCase(), n + (o ? Ld(t) : t);
        });
        function Ld(n) {
          return $s(An(n).toLowerCase());
        }
        function Fd(n) {
          return n = An(n), n && n.replace(sm, Jm).replace(Im, "");
        }
        function uA(n, t, o) {
          n = An(n), t = xe(t);
          var s = n.length;
          o = o === i ? s : Ir(ln(o), 0, s);
          var l = o;
          return o -= t.length, o >= 0 && n.slice(o, l) == t;
        }
        function sA(n) {
          return n = An(n), n && Wv.test(n) ? n.replace(hp, Vm) : n;
        }
        function cA(n) {
          return n = An(n), n && Hv.test(n) ? n.replace(qu, "\\$&") : n;
        }
        var fA = ti(function(n, t, o) {
          return n + (o ? "-" : "") + t.toLowerCase();
        }), lA = ti(function(n, t, o) {
          return n + (o ? " " : "") + t.toLowerCase();
        }), pA = qh("toLowerCase");
        function hA(n, t, o) {
          n = An(n), t = ln(t);
          var s = t ? Kr(n) : 0;
          if (!t || s >= t)
            return n;
          var l = (t - s) / 2;
          return la(Xo(l), o) + n + la(Vo(l), o);
        }
        function dA(n, t, o) {
          n = An(n), t = ln(t);
          var s = t ? Kr(n) : 0;
          return t && s < t ? n + la(t - s, o) : n;
        }
        function gA(n, t, o) {
          n = An(n), t = ln(t);
          var s = t ? Kr(n) : 0;
          return t && s < t ? la(t - s, o) + n : n;
        }
        function yA(n, t, o) {
          return o || t == null ? t = 0 : t && (t = +t), A_(An(n).replace(Uu, ""), t || 0);
        }
        function vA(n, t, o) {
          return (o ? le(n, t, o) : t === i) ? t = 1 : t = ln(t), ms(An(n), t);
        }
        function mA() {
          var n = arguments, t = An(n[0]);
          return n.length < 3 ? t : t.replace(n[1], n[2]);
        }
        var _A = ti(function(n, t, o) {
          return n + (o ? "_" : "") + t.toLowerCase();
        });
        function wA(n, t, o) {
          return o && typeof o != "number" && le(n, t, o) && (t = o = i), o = o === i ? q : o >>> 0, o ? (n = An(n), n && (typeof t == "string" || t != null && !ks(t)) && (t = xe(t), !t && Hr(n)) ? Qt(Xe(n), 0, o) : n.split(t, o)) : [];
        }
        var bA = ti(function(n, t, o) {
          return n + (o ? " " : "") + $s(t);
        });
        function EA(n, t, o) {
          return n = An(n), o = o == null ? 0 : Ir(ln(o), 0, n.length), t = xe(t), n.slice(o, o + t.length) == t;
        }
        function AA(n, t, o) {
          var s = h.templateSettings;
          o && le(n, t, o) && (t = i), n = An(n), t = Aa({}, t, s, Gh);
          var l = Aa({}, t.imports, s.imports, Gh), y = Jn(l), _ = es(l, y), b, R, U = 0, k = t.interpolate || Fo, $ = "__p += '", G = rs(
            (t.escape || Fo).source + "|" + k.source + "|" + (k === dp ? tm : Fo).source + "|" + (t.evaluate || Fo).source + "|$",
            "g"
          ), J = "//# sourceURL=" + (On.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Cm + "]") + `
`;
          n.replace(G, function(an, gn, mn, Pe, pe, Ce) {
            return mn || (mn = Pe), $ += n.slice(U, Ce).replace(cm, Xm), gn && (b = !0, $ += `' +
__e(` + gn + `) +
'`), pe && (R = !0, $ += `';
` + pe + `;
__p += '`), mn && ($ += `' +
((__t = (` + mn + `)) == null ? '' : __t) +
'`), U = Ce + an.length, an;
          }), $ += `';
`;
          var on = On.call(t, "variable") && t.variable;
          if (!on)
            $ = `with (obj) {
` + $ + `
}
`;
          else if (nm.test(on))
            throw new un(p);
          $ = (R ? $.replace(jv, "") : $).replace(qv, "$1").replace(Uv, "$1;"), $ = "function(" + (on || "obj") + `) {
` + (on ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (R ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + $ + `return __p
}`;
          var pn = jd(function() {
            return En(y, J + "return " + $).apply(i, _);
          });
          if (pn.source = $, Us(pn))
            throw pn;
          return pn;
        }
        function SA(n) {
          return An(n).toLowerCase();
        }
        function OA(n) {
          return An(n).toUpperCase();
        }
        function TA(n, t, o) {
          if (n = An(n), n && (o || t === i))
            return Zp(n);
          if (!n || !(t = xe(t)))
            return n;
          var s = Xe(n), l = Xe(t), y = Hp(s, l), _ = Kp(s, l) + 1;
          return Qt(s, y, _).join("");
        }
        function IA(n, t, o) {
          if (n = An(n), n && (o || t === i))
            return n.slice(0, Vp(n) + 1);
          if (!n || !(t = xe(t)))
            return n;
          var s = Xe(n), l = Kp(s, Xe(t)) + 1;
          return Qt(s, 0, l).join("");
        }
        function RA(n, t, o) {
          if (n = An(n), n && (o || t === i))
            return n.replace(Uu, "");
          if (!n || !(t = xe(t)))
            return n;
          var s = Xe(n), l = Hp(s, Xe(t));
          return Qt(s, l).join("");
        }
        function xA(n, t) {
          var o = V, s = fn;
          if (jn(t)) {
            var l = "separator" in t ? t.separator : l;
            o = "length" in t ? ln(t.length) : o, s = "omission" in t ? xe(t.omission) : s;
          }
          n = An(n);
          var y = n.length;
          if (Hr(n)) {
            var _ = Xe(n);
            y = _.length;
          }
          if (o >= y)
            return n;
          var b = o - Kr(s);
          if (b < 1)
            return s;
          var R = _ ? Qt(_, 0, b).join("") : n.slice(0, b);
          if (l === i)
            return R + s;
          if (_ && (b += R.length - b), ks(l)) {
            if (n.slice(b).search(l)) {
              var U, k = R;
              for (l.global || (l = rs(l.source, An(gp.exec(l)) + "g")), l.lastIndex = 0; U = l.exec(k); )
                var $ = U.index;
              R = R.slice(0, $ === i ? b : $);
            }
          } else if (n.indexOf(xe(l), b) != b) {
            var G = R.lastIndexOf(l);
            G > -1 && (R = R.slice(0, G));
          }
          return R + s;
        }
        function MA(n) {
          return n = An(n), n && kv.test(n) ? n.replace(pp, o_) : n;
        }
        var PA = ti(function(n, t, o) {
          return n + (o ? " " : "") + t.toUpperCase();
        }), $s = qh("toUpperCase");
        function Bd(n, t, o) {
          return n = An(n), t = o ? i : t, t === i ? n_(n) ? s_(n) : zm(n) : n.match(t) || [];
        }
        var jd = hn(function(n, t) {
          try {
            return Ie(n, i, t);
          } catch (o) {
            return Us(o) ? o : new un(o);
          }
        }), CA = xt(function(n, t) {
          return Ue(t, function(o) {
            o = ht(o), It(n, o, js(n[o], n));
          }), n;
        });
        function DA(n) {
          var t = n == null ? 0 : n.length, o = rn();
          return n = t ? Nn(n, function(s) {
            if (typeof s[1] != "function")
              throw new ke(f);
            return [o(s[0]), s[1]];
          }) : [], hn(function(s) {
            for (var l = -1; ++l < t; ) {
              var y = n[l];
              if (Ie(y[0], this, s))
                return Ie(y[1], this, s);
            }
          });
        }
        function NA(n) {
          return ow(Ye(n, v));
        }
        function zs(n) {
          return function() {
            return n;
          };
        }
        function LA(n, t) {
          return n == null || n !== n ? t : n;
        }
        var FA = kh(), BA = kh(!0);
        function ve(n) {
          return n;
        }
        function Gs(n) {
          return vh(typeof n == "function" ? n : Ye(n, v));
        }
        function jA(n) {
          return _h(Ye(n, v));
        }
        function qA(n, t) {
          return wh(n, Ye(t, v));
        }
        var UA = hn(function(n, t) {
          return function(o) {
            return zi(o, n, t);
          };
        }), kA = hn(function(n, t) {
          return function(o) {
            return zi(n, o, t);
          };
        });
        function Zs(n, t, o) {
          var s = Jn(t), l = ia(t, s);
          o == null && !(jn(t) && (l.length || !s.length)) && (o = t, t = n, n = this, l = ia(t, Jn(t)));
          var y = !(jn(o) && "chain" in o) || !!o.chain, _ = Pt(n);
          return Ue(l, function(b) {
            var R = t[b];
            n[b] = R, _ && (n.prototype[b] = function() {
              var U = this.__chain__;
              if (y || U) {
                var k = n(this.__wrapped__), $ = k.__actions__ = de(this.__actions__);
                return $.push({ func: R, args: arguments, thisArg: n }), k.__chain__ = U, k;
              }
              return R.apply(n, Zt([this.value()], arguments));
            });
          }), n;
        }
        function WA() {
          return Qn._ === this && (Qn._ = d_), this;
        }
        function Hs() {
        }
        function YA(n) {
          return n = ln(n), hn(function(t) {
            return bh(t, n);
          });
        }
        var $A = Os(Nn), zA = Os(Wp), GA = Os(Ju);
        function qd(n) {
          return Cs(n) ? Vu(ht(n)) : Ew(n);
        }
        function ZA(n) {
          return function(t) {
            return n == null ? i : Rr(n, t);
          };
        }
        var HA = Yh(), KA = Yh(!0);
        function Ks() {
          return [];
        }
        function Js() {
          return !1;
        }
        function JA() {
          return {};
        }
        function VA() {
          return "";
        }
        function XA() {
          return !0;
        }
        function QA(n, t) {
          if (n = ln(n), n < 1 || n > Dn)
            return [];
          var o = q, s = oe(n, q);
          t = rn(t), n -= q;
          for (var l = ns(s, t); ++o < n; )
            t(o);
          return l;
        }
        function nS(n) {
          return sn(n) ? Nn(n, ht) : Me(n) ? [n] : de(od(An(n)));
        }
        function eS(n) {
          var t = ++p_;
          return An(n) + t;
        }
        var tS = fa(function(n, t) {
          return n + t;
        }, 0), rS = Ts("ceil"), iS = fa(function(n, t) {
          return n / t;
        }, 1), oS = Ts("floor");
        function aS(n) {
          return n && n.length ? ra(n, ve, ls) : i;
        }
        function uS(n, t) {
          return n && n.length ? ra(n, rn(t, 2), ls) : i;
        }
        function sS(n) {
          return zp(n, ve);
        }
        function cS(n, t) {
          return zp(n, rn(t, 2));
        }
        function fS(n) {
          return n && n.length ? ra(n, ve, gs) : i;
        }
        function lS(n, t) {
          return n && n.length ? ra(n, rn(t, 2), gs) : i;
        }
        var pS = fa(function(n, t) {
          return n * t;
        }, 1), hS = Ts("round"), dS = fa(function(n, t) {
          return n - t;
        }, 0);
        function gS(n) {
          return n && n.length ? Qu(n, ve) : 0;
        }
        function yS(n, t) {
          return n && n.length ? Qu(n, rn(t, 2)) : 0;
        }
        return h.after = jE, h.ary = yd, h.assign = O2, h.assignIn = Md, h.assignInWith = Aa, h.assignWith = T2, h.at = I2, h.before = vd, h.bind = js, h.bindAll = CA, h.bindKey = md, h.castArray = JE, h.chain = hd, h.chunk = ob, h.compact = ab, h.concat = ub, h.cond = DA, h.conforms = NA, h.constant = zs, h.countBy = gE, h.create = R2, h.curry = _d, h.curryRight = wd, h.debounce = bd, h.defaults = x2, h.defaultsDeep = M2, h.defer = qE, h.delay = UE, h.difference = sb, h.differenceBy = cb, h.differenceWith = fb, h.drop = lb, h.dropRight = pb, h.dropRightWhile = hb, h.dropWhile = db, h.fill = gb, h.filter = vE, h.flatMap = wE, h.flatMapDeep = bE, h.flatMapDepth = EE, h.flatten = cd, h.flattenDeep = yb, h.flattenDepth = vb, h.flip = kE, h.flow = FA, h.flowRight = BA, h.fromPairs = mb, h.functions = B2, h.functionsIn = j2, h.groupBy = AE, h.initial = wb, h.intersection = bb, h.intersectionBy = Eb, h.intersectionWith = Ab, h.invert = U2, h.invertBy = k2, h.invokeMap = OE, h.iteratee = Gs, h.keyBy = TE, h.keys = Jn, h.keysIn = ye, h.map = va, h.mapKeys = Y2, h.mapValues = $2, h.matches = jA, h.matchesProperty = qA, h.memoize = _a, h.merge = z2, h.mergeWith = Pd, h.method = UA, h.methodOf = kA, h.mixin = Zs, h.negate = wa, h.nthArg = YA, h.omit = G2, h.omitBy = Z2, h.once = WE, h.orderBy = IE, h.over = $A, h.overArgs = YE, h.overEvery = zA, h.overSome = GA, h.partial = qs, h.partialRight = Ed, h.partition = RE, h.pick = H2, h.pickBy = Cd, h.property = qd, h.propertyOf = ZA, h.pull = Ib, h.pullAll = ld, h.pullAllBy = Rb, h.pullAllWith = xb, h.pullAt = Mb, h.range = HA, h.rangeRight = KA, h.rearg = $E, h.reject = PE, h.remove = Pb, h.rest = zE, h.reverse = Fs, h.sampleSize = DE, h.set = J2, h.setWith = V2, h.shuffle = NE, h.slice = Cb, h.sortBy = BE, h.sortedUniq = qb, h.sortedUniqBy = Ub, h.split = wA, h.spread = GE, h.tail = kb, h.take = Wb, h.takeRight = Yb, h.takeRightWhile = $b, h.takeWhile = zb, h.tap = aE, h.throttle = ZE, h.thru = ya, h.toArray = Id, h.toPairs = Dd, h.toPairsIn = Nd, h.toPath = nS, h.toPlainObject = xd, h.transform = X2, h.unary = HE, h.union = Gb, h.unionBy = Zb, h.unionWith = Hb, h.uniq = Kb, h.uniqBy = Jb, h.uniqWith = Vb, h.unset = Q2, h.unzip = Bs, h.unzipWith = pd, h.update = nA, h.updateWith = eA, h.values = oi, h.valuesIn = tA, h.without = Xb, h.words = Bd, h.wrap = KE, h.xor = Qb, h.xorBy = nE, h.xorWith = eE, h.zip = tE, h.zipObject = rE, h.zipObjectDeep = iE, h.zipWith = oE, h.entries = Dd, h.entriesIn = Nd, h.extend = Md, h.extendWith = Aa, Zs(h, h), h.add = tS, h.attempt = jd, h.camelCase = aA, h.capitalize = Ld, h.ceil = rS, h.clamp = rA, h.clone = VE, h.cloneDeep = QE, h.cloneDeepWith = n2, h.cloneWith = XE, h.conformsTo = e2, h.deburr = Fd, h.defaultTo = LA, h.divide = iS, h.endsWith = uA, h.eq = nt, h.escape = sA, h.escapeRegExp = cA, h.every = yE, h.find = mE, h.findIndex = ud, h.findKey = P2, h.findLast = _E, h.findLastIndex = sd, h.findLastKey = C2, h.floor = oS, h.forEach = dd, h.forEachRight = gd, h.forIn = D2, h.forInRight = N2, h.forOwn = L2, h.forOwnRight = F2, h.get = Ws, h.gt = t2, h.gte = r2, h.has = q2, h.hasIn = Ys, h.head = fd, h.identity = ve, h.includes = SE, h.indexOf = _b, h.inRange = iA, h.invoke = W2, h.isArguments = Pr, h.isArray = sn, h.isArrayBuffer = i2, h.isArrayLike = ge, h.isArrayLikeObject = Wn, h.isBoolean = o2, h.isBuffer = nr, h.isDate = a2, h.isElement = u2, h.isEmpty = s2, h.isEqual = c2, h.isEqualWith = f2, h.isError = Us, h.isFinite = l2, h.isFunction = Pt, h.isInteger = Ad, h.isLength = ba, h.isMap = Sd, h.isMatch = p2, h.isMatchWith = h2, h.isNaN = d2, h.isNative = g2, h.isNil = v2, h.isNull = y2, h.isNumber = Od, h.isObject = jn, h.isObjectLike = kn, h.isPlainObject = Vi, h.isRegExp = ks, h.isSafeInteger = m2, h.isSet = Td, h.isString = Ea, h.isSymbol = Me, h.isTypedArray = ii, h.isUndefined = _2, h.isWeakMap = w2, h.isWeakSet = b2, h.join = Sb, h.kebabCase = fA, h.last = ze, h.lastIndexOf = Ob, h.lowerCase = lA, h.lowerFirst = pA, h.lt = E2, h.lte = A2, h.max = aS, h.maxBy = uS, h.mean = sS, h.meanBy = cS, h.min = fS, h.minBy = lS, h.stubArray = Ks, h.stubFalse = Js, h.stubObject = JA, h.stubString = VA, h.stubTrue = XA, h.multiply = pS, h.nth = Tb, h.noConflict = WA, h.noop = Hs, h.now = ma, h.pad = hA, h.padEnd = dA, h.padStart = gA, h.parseInt = yA, h.random = oA, h.reduce = xE, h.reduceRight = ME, h.repeat = vA, h.replace = mA, h.result = K2, h.round = hS, h.runInContext = O, h.sample = CE, h.size = LE, h.snakeCase = _A, h.some = FE, h.sortedIndex = Db, h.sortedIndexBy = Nb, h.sortedIndexOf = Lb, h.sortedLastIndex = Fb, h.sortedLastIndexBy = Bb, h.sortedLastIndexOf = jb, h.startCase = bA, h.startsWith = EA, h.subtract = dS, h.sum = gS, h.sumBy = yS, h.template = AA, h.times = QA, h.toFinite = Ct, h.toInteger = ln, h.toLength = Rd, h.toLower = SA, h.toNumber = Ge, h.toSafeInteger = S2, h.toString = An, h.toUpper = OA, h.trim = TA, h.trimEnd = IA, h.trimStart = RA, h.truncate = xA, h.unescape = MA, h.uniqueId = eS, h.upperCase = PA, h.upperFirst = $s, h.each = dd, h.eachRight = gd, h.first = fd, Zs(h, (function() {
          var n = {};
          return lt(h, function(t, o) {
            On.call(h.prototype, o) || (n[o] = t);
          }), n;
        })(), { chain: !1 }), h.VERSION = a, Ue(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          h[n].placeholder = h;
        }), Ue(["drop", "take"], function(n, t) {
          vn.prototype[n] = function(o) {
            o = o === i ? 1 : Hn(ln(o), 0);
            var s = this.__filtered__ && !t ? new vn(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = oe(o, s.__takeCount__) : s.__views__.push({
              size: oe(o, q),
              type: n + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, vn.prototype[n + "Right"] = function(o) {
            return this.reverse()[n](o).reverse();
          };
        }), Ue(["filter", "map", "takeWhile"], function(n, t) {
          var o = t + 1, s = o == Fn || o == Oe;
          vn.prototype[n] = function(l) {
            var y = this.clone();
            return y.__iteratees__.push({
              iteratee: rn(l, 3),
              type: o
            }), y.__filtered__ = y.__filtered__ || s, y;
          };
        }), Ue(["head", "last"], function(n, t) {
          var o = "take" + (t ? "Right" : "");
          vn.prototype[n] = function() {
            return this[o](1).value()[0];
          };
        }), Ue(["initial", "tail"], function(n, t) {
          var o = "drop" + (t ? "" : "Right");
          vn.prototype[n] = function() {
            return this.__filtered__ ? new vn(this) : this[o](1);
          };
        }), vn.prototype.compact = function() {
          return this.filter(ve);
        }, vn.prototype.find = function(n) {
          return this.filter(n).head();
        }, vn.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, vn.prototype.invokeMap = hn(function(n, t) {
          return typeof n == "function" ? new vn(this) : this.map(function(o) {
            return zi(o, n, t);
          });
        }), vn.prototype.reject = function(n) {
          return this.filter(wa(rn(n)));
        }, vn.prototype.slice = function(n, t) {
          n = ln(n);
          var o = this;
          return o.__filtered__ && (n > 0 || t < 0) ? new vn(o) : (n < 0 ? o = o.takeRight(-n) : n && (o = o.drop(n)), t !== i && (t = ln(t), o = t < 0 ? o.dropRight(-t) : o.take(t - n)), o);
        }, vn.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, vn.prototype.toArray = function() {
          return this.take(q);
        }, lt(vn.prototype, function(n, t) {
          var o = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), l = h[s ? "take" + (t == "last" ? "Right" : "") : t], y = s || /^find/.test(t);
          l && (h.prototype[t] = function() {
            var _ = this.__wrapped__, b = s ? [1] : arguments, R = _ instanceof vn, U = b[0], k = R || sn(_), $ = function(gn) {
              var mn = l.apply(h, Zt([gn], b));
              return s && G ? mn[0] : mn;
            };
            k && o && typeof U == "function" && U.length != 1 && (R = k = !1);
            var G = this.__chain__, J = !!this.__actions__.length, on = y && !G, pn = R && !J;
            if (!y && k) {
              _ = pn ? _ : new vn(this);
              var an = n.apply(_, b);
              return an.__actions__.push({ func: ya, args: [$], thisArg: i }), new We(an, G);
            }
            return on && pn ? n.apply(this, b) : (an = this.thru($), on ? s ? an.value()[0] : an.value() : an);
          });
        }), Ue(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var t = Wo[n], o = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(n);
          h.prototype[n] = function() {
            var l = arguments;
            if (s && !this.__chain__) {
              var y = this.value();
              return t.apply(sn(y) ? y : [], l);
            }
            return this[o](function(_) {
              return t.apply(sn(_) ? _ : [], l);
            });
          };
        }), lt(vn.prototype, function(n, t) {
          var o = h[t];
          if (o) {
            var s = o.name + "";
            On.call(Qr, s) || (Qr[s] = []), Qr[s].push({ name: t, func: o });
          }
        }), Qr[ca(i, A).name] = [{
          name: "wrapper",
          func: i
        }], vn.prototype.clone = M_, vn.prototype.reverse = P_, vn.prototype.value = C_, h.prototype.at = uE, h.prototype.chain = sE, h.prototype.commit = cE, h.prototype.next = fE, h.prototype.plant = pE, h.prototype.reverse = hE, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = dE, h.prototype.first = h.prototype.head, ji && (h.prototype[ji] = lE), h;
      }), Jr = c_();
      Ar ? ((Ar.exports = Jr)._ = Jr, Gu._ = Jr) : Qn._ = Jr;
    }).call(HR);
  })(io, io.exports)), io.exports;
}
var dv = KR();
const JR = "_seekBar_16dv7_14", VR = {
  seekBar: JR
};
function XR({ value: e = 0, className: r, ...i }) {
  const { translate: a } = wi(), [u, c] = o1(e), f = _i(() => dv.throttle(c, 10), []);
  return a1(() => {
    f(e);
  }, [e, f]), /* @__PURE__ */ H.createElement(
    "input",
    {
      type: "range",
      className: ot(VR.seekBar, r),
      onMouseDown: (p) => p.stopPropagation(),
      min: 0,
      max: 100,
      value: u,
      step: 1,
      style: { "--fillTo": u / 100 },
      "aria-label": a("a11y|seek_bar_label"),
      ...i
    }
  );
}
function MP({ vm: e }) {
  const { translate: r } = wi(), {
    playbackState: i,
    mediaName: a = r("timeline|m.audio|unnamed_audio"),
    sizeBytes: u,
    durationSeconds: c,
    playedSeconds: f,
    percentComplete: p,
    error: d
  } = Ja(e), g = u ? `(${zS(u)})` : null, m = i === "decoding";
  return /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(
    RS,
    {
      className: ai.audioPlayer,
      tabIndex: 0,
      onKeyDown: e.onKeyDown,
      "aria-label": r("timeline|m.audio|audio_player"),
      role: "region"
    },
    /* @__PURE__ */ H.createElement(Ne, { gap: "var(--cpd-space-2x)", align: "center" }, /* @__PURE__ */ H.createElement(
      $S,
      {
        tabIndex: -1,
        disabled: m,
        playing: i === "playing",
        togglePlay: e.togglePlay
      }
    ), /* @__PURE__ */ H.createElement(Ne, { direction: "column", className: ai.mediaInfo }, /* @__PURE__ */ H.createElement("span", { className: ai.mediaName, "data-testid": "audio-player-name" }, a), /* @__PURE__ */ H.createElement(Ne, { className: ai.byline, gap: "var(--cpd-space-1-5x)" }, /* @__PURE__ */ H.createElement(xg, { seconds: c }), g))),
    /* @__PURE__ */ H.createElement(Ne, { align: "center", gap: "var(--cpd-space-1x)", "data-testid": "audio-player-seek" }, /* @__PURE__ */ H.createElement(XR, { tabIndex: -1, disabled: m, value: p, onChange: e.onSeekbarChange }), /* @__PURE__ */ H.createElement(xg, { className: ai.clock, seconds: f, role: "timer" }))
  ), d && /* @__PURE__ */ H.createElement("span", { className: ai.error }, r("timeline|m.audio|error_downloading_audio")));
}
const QR = "_avatarWithDetails_7ga8t_8", nx = "_title_7ga8t_17", ex = "_details_7ga8t_28", ac = {
  avatarWithDetails: QR,
  title: nx,
  details: ex
};
function PP({
  as: e,
  className: r,
  details: i,
  avatar: a,
  title: u,
  ...c
}) {
  const f = e || "div";
  return /* @__PURE__ */ H.createElement(f, { className: ot(ac.avatarWithDetails, r), ...c }, a, /* @__PURE__ */ H.createElement(Ne, { direction: "column" }, /* @__PURE__ */ H.createElement("span", { className: ac.title }, u), /* @__PURE__ */ H.createElement("span", { className: ac.details }, i)));
}
function gv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"
    })
  });
}
gv.displayName = "CheckCircleIcon";
const tx = (0,react.forwardRef)(gv);
function yv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
    })
  });
}
yv.displayName = "ErrorSolidIcon";
const rx = (0,react.forwardRef)(yv);
function vv(e, r) {
  return /* @__PURE__ */ $n.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [/* @__PURE__ */ $n.jsx("path", {
      d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713"
    }), /* @__PURE__ */ $n.jsx("path", {
      fillRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
      clipRule: "evenodd"
    })]
  });
}
vv.displayName = "InfoIcon";
const Pg = (0,react.forwardRef)(vv), ix = "_banner_48r66_20", ox = "_content_48r66_51", ax = "_icon_48r66_63", ux = "_actions_48r66_83", xa = {
  banner: ix,
  content: ox,
  icon: ax,
  actions: ux
};
var Dr = {}, Nr = {}, Cg;
function sx() {
  if (Cg) return Nr;
  Cg = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.getNormalizedLanguageKeys = Nr.normalizeLanguageKey = void 0;
  function e(i) {
    return i.toLowerCase().replace("_", "-");
  }
  Nr.normalizeLanguageKey = e;
  function r(i) {
    const a = [], u = e(i), c = u.split("-");
    return c.length === 2 && c[0] === c[1] ? a.push(c[0]) : (a.push(u), c.length === 2 && a.push(c[0])), a;
  }
  return Nr.getNormalizedLanguageKeys = r, Nr;
}
var uc = {}, Dg;
function cx() {
  return Dg || (Dg = 1, Object.defineProperty(uc, "__esModule", { value: !0 })), uc;
}
var Ng;
function fx() {
  return Ng || (Ng = 1, (function(e) {
    var r = Dr && Dr.__createBinding || (Object.create ? (function(a, u, c, f) {
      f === void 0 && (f = c);
      var p = Object.getOwnPropertyDescriptor(u, c);
      (!p || ("get" in p ? !u.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
        return u[c];
      } }), Object.defineProperty(a, f, p);
    }) : (function(a, u, c, f) {
      f === void 0 && (f = c), a[f] = u[c];
    })), i = Dr && Dr.__exportStar || function(a, u) {
      for (var c in a) c !== "default" && !Object.prototype.hasOwnProperty.call(u, c) && r(u, a, c);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.KEY_SEPARATOR = void 0, e.KEY_SEPARATOR = "|", i(sx(), e), i(cx(), e);
  })(Dr)), Dr;
}
var Tu = fx(), sc, Lg;
function lx() {
  if (Lg) return sc;
  Lg = 1;
  var e = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, u = function(g) {
    return typeof Array.isArray == "function" ? Array.isArray(g) : r.call(g) === "[object Array]";
  }, c = function(g) {
    if (!g || r.call(g) !== "[object Object]")
      return !1;
    var m = e.call(g, "constructor"), v = g.constructor && g.constructor.prototype && e.call(g.constructor.prototype, "isPrototypeOf");
    if (g.constructor && !m && !v)
      return !1;
    var w;
    for (w in g)
      ;
    return typeof w > "u" || e.call(g, w);
  }, f = function(g, m) {
    i && m.name === "__proto__" ? i(g, m.name, {
      enumerable: !0,
      configurable: !0,
      value: m.newValue,
      writable: !0
    }) : g[m.name] = m.newValue;
  }, p = function(g, m) {
    if (m === "__proto__")
      if (e.call(g, m)) {
        if (a)
          return a(g, m).value;
      } else return;
    return g[m];
  };
  return sc = function d() {
    var g, m, v, w, P, E, x = arguments[0], B = 1, A = arguments.length, I = !1;
    for (typeof x == "boolean" && (I = x, x = arguments[1] || {}, B = 2), (x == null || typeof x != "object" && typeof x != "function") && (x = {}); B < A; ++B)
      if (g = arguments[B], g != null)
        for (m in g)
          v = p(x, m), w = p(g, m), x !== w && (I && w && (c(w) || (P = u(w))) ? (P ? (P = !1, E = v && u(v) ? v : []) : E = v && c(v) ? v : {}, f(x, { name: m, newValue: d(I, E, w) })) : typeof w < "u" && f(x, { name: m, newValue: w }));
    return x;
  }, sc;
}
var cc = {}, fc = {}, lc, Fg;
function mv() {
  return Fg || (Fg = 1, lc = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, i = Symbol("test"), a = Object(i);
    if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(a) !== "[object Symbol]")
      return !1;
    var u = 42;
    r[i] = u;
    for (var c in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var f = Object.getOwnPropertySymbols(r);
    if (f.length !== 1 || f[0] !== i || !Object.prototype.propertyIsEnumerable.call(r, i))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var p = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, i)
      );
      if (p.value !== u || p.enumerable !== !0)
        return !1;
    }
    return !0;
  }), lc;
}
var pc, Bg;
function Iu() {
  if (Bg) return pc;
  Bg = 1;
  var e = mv();
  return pc = function() {
    return e() && !!Symbol.toStringTag;
  }, pc;
}
var hc, jg;
function _v() {
  return jg || (jg = 1, hc = Object), hc;
}
var dc, qg;
function px() {
  return qg || (qg = 1, dc = Error), dc;
}
var gc, Ug;
function hx() {
  return Ug || (Ug = 1, gc = EvalError), gc;
}
var yc, kg;
function dx() {
  return kg || (kg = 1, yc = RangeError), yc;
}
var vc, Wg;
function gx() {
  return Wg || (Wg = 1, vc = ReferenceError), vc;
}
var mc, Yg;
function wv() {
  return Yg || (Yg = 1, mc = SyntaxError), mc;
}
var _c, $g;
function Do() {
  return $g || ($g = 1, _c = TypeError), _c;
}
var wc, zg;
function yx() {
  return zg || (zg = 1, wc = URIError), wc;
}
var bc, Gg;
function vx() {
  return Gg || (Gg = 1, bc = Math.abs), bc;
}
var Ec, Zg;
function mx() {
  return Zg || (Zg = 1, Ec = Math.floor), Ec;
}
var Ac, Hg;
function _x() {
  return Hg || (Hg = 1, Ac = Math.max), Ac;
}
var Sc, Kg;
function wx() {
  return Kg || (Kg = 1, Sc = Math.min), Sc;
}
var Oc, Jg;
function bx() {
  return Jg || (Jg = 1, Oc = Math.pow), Oc;
}
var Tc, Vg;
function Ex() {
  return Vg || (Vg = 1, Tc = Math.round), Tc;
}
var Ic, Xg;
function Ax() {
  return Xg || (Xg = 1, Ic = Number.isNaN || function(r) {
    return r !== r;
  }), Ic;
}
var Rc, Qg;
function Sx() {
  if (Qg) return Rc;
  Qg = 1;
  var e = /* @__PURE__ */ Ax();
  return Rc = function(i) {
    return e(i) || i === 0 ? i : i < 0 ? -1 : 1;
  }, Rc;
}
var xc, ny;
function Ox() {
  return ny || (ny = 1, xc = Object.getOwnPropertyDescriptor), xc;
}
var Mc, ey;
function Ni() {
  if (ey) return Mc;
  ey = 1;
  var e = /* @__PURE__ */ Ox();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Mc = e, Mc;
}
var Pc, ty;
function Ru() {
  if (ty) return Pc;
  ty = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Pc = e, Pc;
}
var Cc, ry;
function Tx() {
  if (ry) return Cc;
  ry = 1;
  var e = typeof Symbol < "u" && Symbol, r = mv();
  return Cc = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
  }, Cc;
}
var Dc, iy;
function bv() {
  return iy || (iy = 1, Dc = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Dc;
}
var Nc, oy;
function Ev() {
  if (oy) return Nc;
  oy = 1;
  var e = /* @__PURE__ */ _v();
  return Nc = e.getPrototypeOf || null, Nc;
}
var Lc, ay;
function Ix() {
  if (ay) return Lc;
  ay = 1;
  var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, i = Math.max, a = "[object Function]", u = function(d, g) {
    for (var m = [], v = 0; v < d.length; v += 1)
      m[v] = d[v];
    for (var w = 0; w < g.length; w += 1)
      m[w + d.length] = g[w];
    return m;
  }, c = function(d, g) {
    for (var m = [], v = g, w = 0; v < d.length; v += 1, w += 1)
      m[w] = d[v];
    return m;
  }, f = function(p, d) {
    for (var g = "", m = 0; m < p.length; m += 1)
      g += p[m], m + 1 < p.length && (g += d);
    return g;
  };
  return Lc = function(d) {
    var g = this;
    if (typeof g != "function" || r.apply(g) !== a)
      throw new TypeError(e + g);
    for (var m = c(arguments, 1), v, w = function() {
      if (this instanceof v) {
        var A = g.apply(
          this,
          u(m, arguments)
        );
        return Object(A) === A ? A : this;
      }
      return g.apply(
        d,
        u(m, arguments)
      );
    }, P = i(0, g.length - m.length), E = [], x = 0; x < P; x++)
      E[x] = "$" + x;
    if (v = Function("binder", "return function (" + f(E, ",") + "){ return binder.apply(this,arguments); }")(w), g.prototype) {
      var B = function() {
      };
      B.prototype = g.prototype, v.prototype = new B(), B.prototype = null;
    }
    return v;
  }, Lc;
}
var Fc, uy;
function No() {
  if (uy) return Fc;
  uy = 1;
  var e = Ix();
  return Fc = Function.prototype.bind || e, Fc;
}
var Bc, sy;
function up() {
  return sy || (sy = 1, Bc = Function.prototype.call), Bc;
}
var jc, cy;
function sp() {
  return cy || (cy = 1, jc = Function.prototype.apply), jc;
}
var qc, fy;
function Rx() {
  return fy || (fy = 1, qc = typeof Reflect < "u" && Reflect && Reflect.apply), qc;
}
var Uc, ly;
function Av() {
  if (ly) return Uc;
  ly = 1;
  var e = No(), r = sp(), i = up(), a = Rx();
  return Uc = a || e.call(i, r), Uc;
}
var kc, py;
function cp() {
  if (py) return kc;
  py = 1;
  var e = No(), r = /* @__PURE__ */ Do(), i = up(), a = Av();
  return kc = function(c) {
    if (c.length < 1 || typeof c[0] != "function")
      throw new r("a function is required");
    return a(e, i, c);
  }, kc;
}
var Wc, hy;
function xx() {
  if (hy) return Wc;
  hy = 1;
  var e = cp(), r = /* @__PURE__ */ Ni(), i;
  try {
    i = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (f) {
    if (!f || typeof f != "object" || !("code" in f) || f.code !== "ERR_PROTO_ACCESS")
      throw f;
  }
  var a = !!i && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), u = Object, c = u.getPrototypeOf;
  return Wc = a && typeof a.get == "function" ? e([a.get]) : typeof c == "function" ? (
    /** @type {import('./get')} */
    function(p) {
      return c(p == null ? p : u(p));
    }
  ) : !1, Wc;
}
var Yc, dy;
function fp() {
  if (dy) return Yc;
  dy = 1;
  var e = bv(), r = Ev(), i = /* @__PURE__ */ xx();
  return Yc = e ? function(u) {
    return e(u);
  } : r ? function(u) {
    if (!u || typeof u != "object" && typeof u != "function")
      throw new TypeError("getProto: not an object");
    return r(u);
  } : i ? function(u) {
    return i(u);
  } : null, Yc;
}
var $c, gy;
function Sv() {
  if (gy) return $c;
  gy = 1;
  var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, i = No();
  return $c = i.call(e, r), $c;
}
var zc, yy;
function Ov() {
  if (yy) return zc;
  yy = 1;
  var e, r = /* @__PURE__ */ _v(), i = /* @__PURE__ */ px(), a = /* @__PURE__ */ hx(), u = /* @__PURE__ */ dx(), c = /* @__PURE__ */ gx(), f = /* @__PURE__ */ wv(), p = /* @__PURE__ */ Do(), d = /* @__PURE__ */ yx(), g = /* @__PURE__ */ vx(), m = /* @__PURE__ */ mx(), v = /* @__PURE__ */ _x(), w = /* @__PURE__ */ wx(), P = /* @__PURE__ */ bx(), E = /* @__PURE__ */ Ex(), x = /* @__PURE__ */ Sx(), B = Function, A = function(Q) {
    try {
      return B('"use strict"; return (' + Q + ").constructor;")();
    } catch {
    }
  }, I = /* @__PURE__ */ Ni(), D = /* @__PURE__ */ Ru(), S = function() {
    throw new p();
  }, M = I ? (function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return I(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  })() : S, L = Tx()(), j = fp(), z = Ev(), Z = bv(), V = sp(), fn = up(), bn = {}, Ln = typeof Uint8Array > "u" || !j ? e : j(Uint8Array), Fn = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": L && j ? j([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": bn,
    "%AsyncGenerator%": bn,
    "%AsyncGeneratorFunction%": bn,
    "%AsyncIteratorPrototype%": bn,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": i,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": a,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": B,
    "%GeneratorFunction%": bn,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": L && j ? j(j([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !L || !j ? e : j((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": I,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": u,
    "%ReferenceError%": c,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !L || !j ? e : j((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": L && j ? j(""[Symbol.iterator]()) : e,
    "%Symbol%": L ? Symbol : e,
    "%SyntaxError%": f,
    "%ThrowTypeError%": M,
    "%TypedArray%": Ln,
    "%TypeError%": p,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": fn,
    "%Function.prototype.apply%": V,
    "%Object.defineProperty%": D,
    "%Object.getPrototypeOf%": z,
    "%Math.abs%": g,
    "%Math.floor%": m,
    "%Math.max%": v,
    "%Math.min%": w,
    "%Math.pow%": P,
    "%Math.round%": E,
    "%Math.sign%": x,
    "%Reflect.getPrototypeOf%": Z
  };
  if (j)
    try {
      null.error;
    } catch (Q) {
      var Se = j(j(Q));
      Fn["%Error.prototype%"] = Se;
    }
  var Oe = function Q(nn) {
    var yn;
    if (nn === "%AsyncFunction%")
      yn = A("async function () {}");
    else if (nn === "%GeneratorFunction%")
      yn = A("function* () {}");
    else if (nn === "%AsyncGeneratorFunction%")
      yn = A("async function* () {}");
    else if (nn === "%AsyncGenerator%") {
      var wn = Q("%AsyncGeneratorFunction%");
      wn && (yn = wn.prototype);
    } else if (nn === "%AsyncIteratorPrototype%") {
      var Bn = Q("%AsyncGenerator%");
      Bn && j && (yn = j(Bn.prototype));
    }
    return Fn[nn] = yn, yn;
  }, Vn = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, Dn = No(), zn = /* @__PURE__ */ Sv(), re = Dn.call(fn, Array.prototype.concat), q = Dn.call(V, Array.prototype.splice), T = Dn.call(fn, String.prototype.replace), N = Dn.call(fn, String.prototype.slice), W = Dn.call(fn, RegExp.prototype.exec), X = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, cn = /\\(\\)?/g, en = function(nn) {
    var yn = N(nn, 0, 1), wn = N(nn, -1);
    if (yn === "%" && wn !== "%")
      throw new f("invalid intrinsic syntax, expected closing `%`");
    if (wn === "%" && yn !== "%")
      throw new f("invalid intrinsic syntax, expected opening `%`");
    var Bn = [];
    return T(nn, X, function(Sn, Xn, Gn, ie) {
      Bn[Bn.length] = Gn ? T(ie, cn, "$1") : Xn || Sn;
    }), Bn;
  }, tn = function(nn, yn) {
    var wn = nn, Bn;
    if (zn(Vn, wn) && (Bn = Vn[wn], wn = "%" + Bn[0] + "%"), zn(Fn, wn)) {
      var Sn = Fn[wn];
      if (Sn === bn && (Sn = Oe(wn)), typeof Sn > "u" && !yn)
        throw new p("intrinsic " + nn + " exists, but is not available. Please file an issue!");
      return {
        alias: Bn,
        name: wn,
        value: Sn
      };
    }
    throw new f("intrinsic " + nn + " does not exist!");
  };
  return zc = function(nn, yn) {
    if (typeof nn != "string" || nn.length === 0)
      throw new p("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof yn != "boolean")
      throw new p('"allowMissing" argument must be a boolean');
    if (W(/^%?[^%]*%?$/, nn) === null)
      throw new f("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var wn = en(nn), Bn = wn.length > 0 ? wn[0] : "", Sn = tn("%" + Bn + "%", yn), Xn = Sn.name, Gn = Sn.value, ie = !1, zt = Sn.alias;
    zt && (Bn = zt[0], q(wn, re([0, 1], zt)));
    for (var Y = 1, Te = !0; Y < wn.length; Y += 1) {
      var Un = wn[Y], ft = N(Un, 0, 1), St = N(Un, -1);
      if ((ft === '"' || ft === "'" || ft === "`" || St === '"' || St === "'" || St === "`") && ft !== St)
        throw new f("property names with quotes must have matching quotes");
      if ((Un === "constructor" || !Te) && (ie = !0), Bn += "." + Un, Xn = "%" + Bn + "%", zn(Fn, Xn))
        Gn = Fn[Xn];
      else if (Gn != null) {
        if (!(Un in Gn)) {
          if (!yn)
            throw new p("base intrinsic for " + nn + " exists, but the property is not available.");
          return;
        }
        if (I && Y + 1 >= wn.length) {
          var $r = I(Gn, Un);
          Te = !!$r, Te && "get" in $r && !("originalValue" in $r.get) ? Gn = $r.get : Gn = Gn[Un];
        } else
          Te = zn(Gn, Un), Gn = Gn[Un];
        Te && !ie && (Fn[Xn] = Gn);
      }
    }
    return Gn;
  }, zc;
}
var Gc, vy;
function Lo() {
  if (vy) return Gc;
  vy = 1;
  var e = /* @__PURE__ */ Ov(), r = cp(), i = r([e("%String.prototype.indexOf%")]);
  return Gc = function(u, c) {
    var f = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(u, !!c)
    );
    return typeof f == "function" && i(u, ".prototype.") > -1 ? r(
      /** @type {const} */
      [f]
    ) : f;
  }, Gc;
}
var Zc, my;
function Mx() {
  if (my) return Zc;
  my = 1;
  var e = Iu()(), r = /* @__PURE__ */ Lo(), i = r("Object.prototype.toString"), a = function(p) {
    return e && p && typeof p == "object" && Symbol.toStringTag in p ? !1 : i(p) === "[object Arguments]";
  }, u = function(p) {
    return a(p) ? !0 : p !== null && typeof p == "object" && "length" in p && typeof p.length == "number" && p.length >= 0 && i(p) !== "[object Array]" && "callee" in p && i(p.callee) === "[object Function]";
  }, c = (function() {
    return a(arguments);
  })();
  return a.isLegacyArguments = u, Zc = c ? a : u, Zc;
}
var Hc, _y;
function Px() {
  if (_y) return Hc;
  _y = 1;
  var e = /* @__PURE__ */ Lo(), r = Iu()(), i = /* @__PURE__ */ Sv(), a = /* @__PURE__ */ Ni(), u;
  if (r) {
    var c = e("RegExp.prototype.exec"), f = {}, p = function() {
      throw f;
    }, d = {
      toString: p,
      valueOf: p
    };
    typeof Symbol.toPrimitive == "symbol" && (d[Symbol.toPrimitive] = p), u = function(w) {
      if (!w || typeof w != "object")
        return !1;
      var P = (
        /** @type {NonNullable<typeof gOPD>} */
        a(
          /** @type {{ lastIndex?: unknown }} */
          w,
          "lastIndex"
        )
      ), E = P && i(P, "value");
      if (!E)
        return !1;
      try {
        c(
          w,
          /** @type {string} */
          /** @type {unknown} */
          d
        );
      } catch (x) {
        return x === f;
      }
    };
  } else {
    var g = e("Object.prototype.toString"), m = "[object RegExp]";
    u = function(w) {
      return !w || typeof w != "object" && typeof w != "function" ? !1 : g(w) === m;
    };
  }
  return Hc = u, Hc;
}
var Kc, wy;
function Cx() {
  if (wy) return Kc;
  wy = 1;
  var e = /* @__PURE__ */ Lo(), r = Px(), i = e("RegExp.prototype.exec"), a = /* @__PURE__ */ Do();
  return Kc = function(c) {
    if (!r(c))
      throw new a("`regex` must be a RegExp");
    return function(p) {
      return i(c, p) !== null;
    };
  }, Kc;
}
var Jc, by;
function Dx() {
  if (by) return Jc;
  by = 1;
  const e = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return Jc = () => e, Jc;
}
var Vc, Ey;
function Nx() {
  if (Ey) return Vc;
  Ey = 1;
  var e = /* @__PURE__ */ Lo(), r = /* @__PURE__ */ Cx(), i = r(/^\s*(?:function)?\*/), a = Iu()(), u = fp(), c = e("Object.prototype.toString"), f = e("Function.prototype.toString"), p = /* @__PURE__ */ Dx();
  return Vc = function(g) {
    if (typeof g != "function")
      return !1;
    if (i(f(g)))
      return !0;
    if (!a) {
      var m = c(g);
      return m === "[object GeneratorFunction]";
    }
    if (!u)
      return !1;
    var v = p();
    return v && u(g) === v.prototype;
  }, Vc;
}
var Xc, Ay;
function Lx() {
  if (Ay) return Xc;
  Ay = 1;
  var e = Function.prototype.toString, r = typeof Reflect == "object" && Reflect !== null && Reflect.apply, i, a;
  if (typeof r == "function" && typeof Object.defineProperty == "function")
    try {
      i = Object.defineProperty({}, "length", {
        get: function() {
          throw a;
        }
      }), a = {}, r(function() {
        throw 42;
      }, null, i);
    } catch (I) {
      I !== a && (r = null);
    }
  else
    r = null;
  var u = /^\s*class\b/, c = function(D) {
    try {
      var S = e.call(D);
      return u.test(S);
    } catch {
      return !1;
    }
  }, f = function(D) {
    try {
      return c(D) ? !1 : (e.call(D), !0);
    } catch {
      return !1;
    }
  }, p = Object.prototype.toString, d = "[object Object]", g = "[object Function]", m = "[object GeneratorFunction]", v = "[object HTMLAllCollection]", w = "[object HTML document.all class]", P = "[object HTMLCollection]", E = typeof Symbol == "function" && !!Symbol.toStringTag, x = !(0 in [,]), B = function() {
    return !1;
  };
  if (typeof document == "object") {
    var A = document.all;
    p.call(A) === p.call(document.all) && (B = function(D) {
      if ((x || !D) && (typeof D > "u" || typeof D == "object"))
        try {
          var S = p.call(D);
          return (S === v || S === w || S === P || S === d) && D("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Xc = r ? function(D) {
    if (B(D))
      return !0;
    if (!D || typeof D != "function" && typeof D != "object")
      return !1;
    try {
      r(D, null, i);
    } catch (S) {
      if (S !== a)
        return !1;
    }
    return !c(D) && f(D);
  } : function(D) {
    if (B(D))
      return !0;
    if (!D || typeof D != "function" && typeof D != "object")
      return !1;
    if (E)
      return f(D);
    if (c(D))
      return !1;
    var S = p.call(D);
    return S !== g && S !== m && !/^\[object HTML/.test(S) ? !1 : f(D);
  }, Xc;
}
var Qc, Sy;
function Fx() {
  if (Sy) return Qc;
  Sy = 1;
  var e = Lx(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(d, g, m) {
    for (var v = 0, w = d.length; v < w; v++)
      i.call(d, v) && (m == null ? g(d[v], v, d) : g.call(m, d[v], v, d));
  }, u = function(d, g, m) {
    for (var v = 0, w = d.length; v < w; v++)
      m == null ? g(d.charAt(v), v, d) : g.call(m, d.charAt(v), v, d);
  }, c = function(d, g, m) {
    for (var v in d)
      i.call(d, v) && (m == null ? g(d[v], v, d) : g.call(m, d[v], v, d));
  };
  function f(p) {
    return r.call(p) === "[object Array]";
  }
  return Qc = function(d, g, m) {
    if (!e(g))
      throw new TypeError("iterator must be a function");
    var v;
    arguments.length >= 3 && (v = m), f(d) ? a(d, g, v) : typeof d == "string" ? u(d, g, v) : c(d, g, v);
  }, Qc;
}
var nf, Oy;
function Bx() {
  return Oy || (Oy = 1, nf = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), nf;
}
var ef, Ty;
function jx() {
  if (Ty) return ef;
  Ty = 1;
  var e = /* @__PURE__ */ Bx(), r = typeof globalThis > "u" ? hi : globalThis;
  return ef = function() {
    for (var a = [], u = 0; u < e.length; u++)
      typeof r[e[u]] == "function" && (a[a.length] = e[u]);
    return a;
  }, ef;
}
var tf = { exports: {} }, rf, Iy;
function qx() {
  if (Iy) return rf;
  Iy = 1;
  var e = /* @__PURE__ */ Ru(), r = /* @__PURE__ */ wv(), i = /* @__PURE__ */ Do(), a = /* @__PURE__ */ Ni();
  return rf = function(c, f, p) {
    if (!c || typeof c != "object" && typeof c != "function")
      throw new i("`obj` must be an object or a function`");
    if (typeof f != "string" && typeof f != "symbol")
      throw new i("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new i("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new i("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new i("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new i("`loose`, if provided, must be a boolean");
    var d = arguments.length > 3 ? arguments[3] : null, g = arguments.length > 4 ? arguments[4] : null, m = arguments.length > 5 ? arguments[5] : null, v = arguments.length > 6 ? arguments[6] : !1, w = !!a && a(c, f);
    if (e)
      e(c, f, {
        configurable: m === null && w ? w.configurable : !m,
        enumerable: d === null && w ? w.enumerable : !d,
        value: p,
        writable: g === null && w ? w.writable : !g
      });
    else if (v || !d && !g && !m)
      c[f] = p;
    else
      throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, rf;
}
var of, Ry;
function Ux() {
  if (Ry) return of;
  Ry = 1;
  var e = /* @__PURE__ */ Ru(), r = function() {
    return !!e;
  };
  return r.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, of = r, of;
}
var af, xy;
function kx() {
  if (xy) return af;
  xy = 1;
  var e = /* @__PURE__ */ Ov(), r = /* @__PURE__ */ qx(), i = /* @__PURE__ */ Ux()(), a = /* @__PURE__ */ Ni(), u = /* @__PURE__ */ Do(), c = e("%Math.floor%");
  return af = function(p, d) {
    if (typeof p != "function")
      throw new u("`fn` is not a function");
    if (typeof d != "number" || d < 0 || d > 4294967295 || c(d) !== d)
      throw new u("`length` must be a positive 32-bit integer");
    var g = arguments.length > 2 && !!arguments[2], m = !0, v = !0;
    if ("length" in p && a) {
      var w = a(p, "length");
      w && !w.configurable && (m = !1), w && !w.writable && (v = !1);
    }
    return (m || v || !g) && (i ? r(
      /** @type {Parameters<define>[0]} */
      p,
      "length",
      d,
      !0,
      !0
    ) : r(
      /** @type {Parameters<define>[0]} */
      p,
      "length",
      d
    )), p;
  }, af;
}
var uf, My;
function Wx() {
  if (My) return uf;
  My = 1;
  var e = No(), r = sp(), i = Av();
  return uf = function() {
    return i(e, r, arguments);
  }, uf;
}
var Py;
function Yx() {
  return Py || (Py = 1, (function(e) {
    var r = /* @__PURE__ */ kx(), i = /* @__PURE__ */ Ru(), a = cp(), u = Wx();
    e.exports = function(f) {
      var p = a(arguments), d = f.length - (arguments.length - 1);
      return r(
        p,
        1 + (d > 0 ? d : 0),
        !0
      );
    }, i ? i(e.exports, "apply", { value: u }) : e.exports.apply = u;
  })(tf)), tf.exports;
}
var sf, Cy;
function Tv() {
  if (Cy) return sf;
  Cy = 1;
  var e = Fx(), r = /* @__PURE__ */ jx(), i = Yx(), a = /* @__PURE__ */ Lo(), u = /* @__PURE__ */ Ni(), c = fp(), f = a("Object.prototype.toString"), p = Iu()(), d = typeof globalThis > "u" ? hi : globalThis, g = r(), m = a("String.prototype.slice"), v = a("Array.prototype.indexOf", !0) || function(B, A) {
    for (var I = 0; I < B.length; I += 1)
      if (B[I] === A)
        return I;
    return -1;
  }, w = { __proto__: null };
  p && u && c ? e(g, function(x) {
    var B = new d[x]();
    if (Symbol.toStringTag in B && c) {
      var A = c(B), I = u(A, Symbol.toStringTag);
      if (!I && A) {
        var D = c(A);
        I = u(D, Symbol.toStringTag);
      }
      w["$" + x] = i(I.get);
    }
  }) : e(g, function(x) {
    var B = new d[x](), A = B.slice || B.set;
    A && (w[
      /** @type {`$${import('.').TypedArrayName}`} */
      "$" + x
    ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
    // @ts-expect-error TODO FIXME
    i(A));
  });
  var P = function(B) {
    var A = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      w,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(I, D) {
        if (!A)
          try {
            "$" + I(B) === D && (A = /** @type {import('.').TypedArrayName} */
            m(D, 1));
          } catch {
          }
      }
    ), A;
  }, E = function(B) {
    var A = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      w,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(I, D) {
        if (!A)
          try {
            I(B), A = /** @type {import('.').TypedArrayName} */
            m(D, 1);
          } catch {
          }
      }
    ), A;
  };
  return sf = function(B) {
    if (!B || typeof B != "object")
      return !1;
    if (!p) {
      var A = m(f(B), 8, -1);
      return v(g, A) > -1 ? A : A !== "Object" ? !1 : E(B);
    }
    return u ? P(B) : null;
  }, sf;
}
var cf, Dy;
function $x() {
  if (Dy) return cf;
  Dy = 1;
  var e = /* @__PURE__ */ Tv();
  return cf = function(i) {
    return !!e(i);
  }, cf;
}
var Ny;
function zx() {
  return Ny || (Ny = 1, (function(e) {
    var r = /* @__PURE__ */ Mx(), i = Nx(), a = /* @__PURE__ */ Tv(), u = /* @__PURE__ */ $x();
    function c(Y) {
      return Y.call.bind(Y);
    }
    var f = typeof BigInt < "u", p = typeof Symbol < "u", d = c(Object.prototype.toString), g = c(Number.prototype.valueOf), m = c(String.prototype.valueOf), v = c(Boolean.prototype.valueOf);
    if (f)
      var w = c(BigInt.prototype.valueOf);
    if (p)
      var P = c(Symbol.prototype.valueOf);
    function E(Y, Te) {
      if (typeof Y != "object")
        return !1;
      try {
        return Te(Y), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = r, e.isGeneratorFunction = i, e.isTypedArray = u;
    function x(Y) {
      return typeof Promise < "u" && Y instanceof Promise || Y !== null && typeof Y == "object" && typeof Y.then == "function" && typeof Y.catch == "function";
    }
    e.isPromise = x;
    function B(Y) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(Y) : u(Y) || N(Y);
    }
    e.isArrayBufferView = B;
    function A(Y) {
      return a(Y) === "Uint8Array";
    }
    e.isUint8Array = A;
    function I(Y) {
      return a(Y) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = I;
    function D(Y) {
      return a(Y) === "Uint16Array";
    }
    e.isUint16Array = D;
    function S(Y) {
      return a(Y) === "Uint32Array";
    }
    e.isUint32Array = S;
    function M(Y) {
      return a(Y) === "Int8Array";
    }
    e.isInt8Array = M;
    function L(Y) {
      return a(Y) === "Int16Array";
    }
    e.isInt16Array = L;
    function j(Y) {
      return a(Y) === "Int32Array";
    }
    e.isInt32Array = j;
    function z(Y) {
      return a(Y) === "Float32Array";
    }
    e.isFloat32Array = z;
    function Z(Y) {
      return a(Y) === "Float64Array";
    }
    e.isFloat64Array = Z;
    function V(Y) {
      return a(Y) === "BigInt64Array";
    }
    e.isBigInt64Array = V;
    function fn(Y) {
      return a(Y) === "BigUint64Array";
    }
    e.isBigUint64Array = fn;
    function bn(Y) {
      return d(Y) === "[object Map]";
    }
    bn.working = typeof Map < "u" && bn(/* @__PURE__ */ new Map());
    function Ln(Y) {
      return typeof Map > "u" ? !1 : bn.working ? bn(Y) : Y instanceof Map;
    }
    e.isMap = Ln;
    function Fn(Y) {
      return d(Y) === "[object Set]";
    }
    Fn.working = typeof Set < "u" && Fn(/* @__PURE__ */ new Set());
    function Se(Y) {
      return typeof Set > "u" ? !1 : Fn.working ? Fn(Y) : Y instanceof Set;
    }
    e.isSet = Se;
    function Oe(Y) {
      return d(Y) === "[object WeakMap]";
    }
    Oe.working = typeof WeakMap < "u" && Oe(/* @__PURE__ */ new WeakMap());
    function Vn(Y) {
      return typeof WeakMap > "u" ? !1 : Oe.working ? Oe(Y) : Y instanceof WeakMap;
    }
    e.isWeakMap = Vn;
    function Dn(Y) {
      return d(Y) === "[object WeakSet]";
    }
    Dn.working = typeof WeakSet < "u" && Dn(/* @__PURE__ */ new WeakSet());
    function zn(Y) {
      return Dn(Y);
    }
    e.isWeakSet = zn;
    function re(Y) {
      return d(Y) === "[object ArrayBuffer]";
    }
    re.working = typeof ArrayBuffer < "u" && re(new ArrayBuffer());
    function q(Y) {
      return typeof ArrayBuffer > "u" ? !1 : re.working ? re(Y) : Y instanceof ArrayBuffer;
    }
    e.isArrayBuffer = q;
    function T(Y) {
      return d(Y) === "[object DataView]";
    }
    T.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && T(new DataView(new ArrayBuffer(1), 0, 1));
    function N(Y) {
      return typeof DataView > "u" ? !1 : T.working ? T(Y) : Y instanceof DataView;
    }
    e.isDataView = N;
    var W = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function X(Y) {
      return d(Y) === "[object SharedArrayBuffer]";
    }
    function cn(Y) {
      return typeof W > "u" ? !1 : (typeof X.working > "u" && (X.working = X(new W())), X.working ? X(Y) : Y instanceof W);
    }
    e.isSharedArrayBuffer = cn;
    function en(Y) {
      return d(Y) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = en;
    function tn(Y) {
      return d(Y) === "[object Map Iterator]";
    }
    e.isMapIterator = tn;
    function Q(Y) {
      return d(Y) === "[object Set Iterator]";
    }
    e.isSetIterator = Q;
    function nn(Y) {
      return d(Y) === "[object Generator]";
    }
    e.isGeneratorObject = nn;
    function yn(Y) {
      return d(Y) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = yn;
    function wn(Y) {
      return E(Y, g);
    }
    e.isNumberObject = wn;
    function Bn(Y) {
      return E(Y, m);
    }
    e.isStringObject = Bn;
    function Sn(Y) {
      return E(Y, v);
    }
    e.isBooleanObject = Sn;
    function Xn(Y) {
      return f && E(Y, w);
    }
    e.isBigIntObject = Xn;
    function Gn(Y) {
      return p && E(Y, P);
    }
    e.isSymbolObject = Gn;
    function ie(Y) {
      return wn(Y) || Bn(Y) || Sn(Y) || Xn(Y) || Gn(Y);
    }
    e.isBoxedPrimitive = ie;
    function zt(Y) {
      return typeof Uint8Array < "u" && (q(Y) || cn(Y));
    }
    e.isAnyArrayBuffer = zt, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(Y) {
      Object.defineProperty(e, Y, {
        enumerable: !1,
        value: function() {
          throw new Error(Y + " is not supported in userland");
        }
      });
    });
  })(fc)), fc;
}
var ff, Ly;
function Gx() {
  return Ly || (Ly = 1, ff = function(r) {
    return r && typeof r == "object" && typeof r.copy == "function" && typeof r.fill == "function" && typeof r.readUInt8 == "function";
  }), ff;
}
var Ma = { exports: {} }, Fy;
function Zx() {
  return Fy || (Fy = 1, typeof Object.create == "function" ? Ma.exports = function(r, i) {
    i && (r.super_ = i, r.prototype = Object.create(i.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Ma.exports = function(r, i) {
    if (i) {
      r.super_ = i;
      var a = function() {
      };
      a.prototype = i.prototype, r.prototype = new a(), r.prototype.constructor = r;
    }
  }), Ma.exports;
}
var By;
function jy() {
  return By || (By = 1, (function(e) {
    var r = Object.getOwnPropertyDescriptors || function(N) {
      for (var W = Object.keys(N), X = {}, cn = 0; cn < W.length; cn++)
        X[W[cn]] = Object.getOwnPropertyDescriptor(N, W[cn]);
      return X;
    }, i = /%[sdj%]/g;
    e.format = function(T) {
      if (!M(T)) {
        for (var N = [], W = 0; W < arguments.length; W++)
          N.push(f(arguments[W]));
        return N.join(" ");
      }
      for (var W = 1, X = arguments, cn = X.length, en = String(T).replace(i, function(Q) {
        if (Q === "%%") return "%";
        if (W >= cn) return Q;
        switch (Q) {
          case "%s":
            return String(X[W++]);
          case "%d":
            return Number(X[W++]);
          case "%j":
            try {
              return JSON.stringify(X[W++]);
            } catch {
              return "[Circular]";
            }
          default:
            return Q;
        }
      }), tn = X[W]; W < cn; tn = X[++W])
        I(tn) || !Z(tn) ? en += " " + tn : en += " " + f(tn);
      return en;
    }, e.deprecate = function(T, N) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return T;
      if (typeof process > "u")
        return function() {
          return e.deprecate(T, N).apply(this, arguments);
        };
      var W = !1;
      function X() {
        if (!W) {
          if (process.throwDeprecation)
            throw new Error(N);
          process.traceDeprecation ? console.trace(N) : console.error(N), W = !0;
        }
        return T.apply(this, arguments);
      }
      return X;
    };
    var a = {}, u = /^$/;
    if (process.env.NODE_DEBUG) {
      var c = process.env.NODE_DEBUG;
      c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), u = new RegExp("^" + c + "$", "i");
    }
    e.debuglog = function(T) {
      if (T = T.toUpperCase(), !a[T])
        if (u.test(T)) {
          var N = process.pid;
          a[T] = function() {
            var W = e.format.apply(e, arguments);
            console.error("%s %d: %s", T, N, W);
          };
        } else
          a[T] = function() {
          };
      return a[T];
    };
    function f(T, N) {
      var W = {
        seen: [],
        stylize: d
      };
      return arguments.length >= 3 && (W.depth = arguments[2]), arguments.length >= 4 && (W.colors = arguments[3]), A(N) ? W.showHidden = N : N && e._extend(W, N), j(W.showHidden) && (W.showHidden = !1), j(W.depth) && (W.depth = 2), j(W.colors) && (W.colors = !1), j(W.customInspect) && (W.customInspect = !0), W.colors && (W.stylize = p), m(W, T, W.depth);
    }
    e.inspect = f, f.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, f.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function p(T, N) {
      var W = f.styles[N];
      return W ? "\x1B[" + f.colors[W][0] + "m" + T + "\x1B[" + f.colors[W][1] + "m" : T;
    }
    function d(T, N) {
      return T;
    }
    function g(T) {
      var N = {};
      return T.forEach(function(W, X) {
        N[W] = !0;
      }), N;
    }
    function m(T, N, W) {
      if (T.customInspect && N && bn(N.inspect) && // Filter out the util module, it's inspect function is special
      N.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(N.constructor && N.constructor.prototype === N)) {
        var X = N.inspect(W, T);
        return M(X) || (X = m(T, X, W)), X;
      }
      var cn = v(T, N);
      if (cn)
        return cn;
      var en = Object.keys(N), tn = g(en);
      if (T.showHidden && (en = Object.getOwnPropertyNames(N)), fn(N) && (en.indexOf("message") >= 0 || en.indexOf("description") >= 0))
        return w(N);
      if (en.length === 0) {
        if (bn(N)) {
          var Q = N.name ? ": " + N.name : "";
          return T.stylize("[Function" + Q + "]", "special");
        }
        if (z(N))
          return T.stylize(RegExp.prototype.toString.call(N), "regexp");
        if (V(N))
          return T.stylize(Date.prototype.toString.call(N), "date");
        if (fn(N))
          return w(N);
      }
      var nn = "", yn = !1, wn = ["{", "}"];
      if (B(N) && (yn = !0, wn = ["[", "]"]), bn(N)) {
        var Bn = N.name ? ": " + N.name : "";
        nn = " [Function" + Bn + "]";
      }
      if (z(N) && (nn = " " + RegExp.prototype.toString.call(N)), V(N) && (nn = " " + Date.prototype.toUTCString.call(N)), fn(N) && (nn = " " + w(N)), en.length === 0 && (!yn || N.length == 0))
        return wn[0] + nn + wn[1];
      if (W < 0)
        return z(N) ? T.stylize(RegExp.prototype.toString.call(N), "regexp") : T.stylize("[Object]", "special");
      T.seen.push(N);
      var Sn;
      return yn ? Sn = P(T, N, W, tn, en) : Sn = en.map(function(Xn) {
        return E(T, N, W, tn, Xn, yn);
      }), T.seen.pop(), x(Sn, nn, wn);
    }
    function v(T, N) {
      if (j(N))
        return T.stylize("undefined", "undefined");
      if (M(N)) {
        var W = "'" + JSON.stringify(N).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return T.stylize(W, "string");
      }
      if (S(N))
        return T.stylize("" + N, "number");
      if (A(N))
        return T.stylize("" + N, "boolean");
      if (I(N))
        return T.stylize("null", "null");
    }
    function w(T) {
      return "[" + Error.prototype.toString.call(T) + "]";
    }
    function P(T, N, W, X, cn) {
      for (var en = [], tn = 0, Q = N.length; tn < Q; ++tn)
        Dn(N, String(tn)) ? en.push(E(
          T,
          N,
          W,
          X,
          String(tn),
          !0
        )) : en.push("");
      return cn.forEach(function(nn) {
        nn.match(/^\d+$/) || en.push(E(
          T,
          N,
          W,
          X,
          nn,
          !0
        ));
      }), en;
    }
    function E(T, N, W, X, cn, en) {
      var tn, Q, nn;
      if (nn = Object.getOwnPropertyDescriptor(N, cn) || { value: N[cn] }, nn.get ? nn.set ? Q = T.stylize("[Getter/Setter]", "special") : Q = T.stylize("[Getter]", "special") : nn.set && (Q = T.stylize("[Setter]", "special")), Dn(X, cn) || (tn = "[" + cn + "]"), Q || (T.seen.indexOf(nn.value) < 0 ? (I(W) ? Q = m(T, nn.value, null) : Q = m(T, nn.value, W - 1), Q.indexOf(`
`) > -1 && (en ? Q = Q.split(`
`).map(function(yn) {
        return "  " + yn;
      }).join(`
`).slice(2) : Q = `
` + Q.split(`
`).map(function(yn) {
        return "   " + yn;
      }).join(`
`))) : Q = T.stylize("[Circular]", "special")), j(tn)) {
        if (en && cn.match(/^\d+$/))
          return Q;
        tn = JSON.stringify("" + cn), tn.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (tn = tn.slice(1, -1), tn = T.stylize(tn, "name")) : (tn = tn.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), tn = T.stylize(tn, "string"));
      }
      return tn + ": " + Q;
    }
    function x(T, N, W) {
      var X = T.reduce(function(cn, en) {
        return en.indexOf(`
`) >= 0, cn + en.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return X > 60 ? W[0] + (N === "" ? "" : N + `
 `) + " " + T.join(`,
  `) + " " + W[1] : W[0] + N + " " + T.join(", ") + " " + W[1];
    }
    e.types = zx();
    function B(T) {
      return Array.isArray(T);
    }
    e.isArray = B;
    function A(T) {
      return typeof T == "boolean";
    }
    e.isBoolean = A;
    function I(T) {
      return T === null;
    }
    e.isNull = I;
    function D(T) {
      return T == null;
    }
    e.isNullOrUndefined = D;
    function S(T) {
      return typeof T == "number";
    }
    e.isNumber = S;
    function M(T) {
      return typeof T == "string";
    }
    e.isString = M;
    function L(T) {
      return typeof T == "symbol";
    }
    e.isSymbol = L;
    function j(T) {
      return T === void 0;
    }
    e.isUndefined = j;
    function z(T) {
      return Z(T) && Fn(T) === "[object RegExp]";
    }
    e.isRegExp = z, e.types.isRegExp = z;
    function Z(T) {
      return typeof T == "object" && T !== null;
    }
    e.isObject = Z;
    function V(T) {
      return Z(T) && Fn(T) === "[object Date]";
    }
    e.isDate = V, e.types.isDate = V;
    function fn(T) {
      return Z(T) && (Fn(T) === "[object Error]" || T instanceof Error);
    }
    e.isError = fn, e.types.isNativeError = fn;
    function bn(T) {
      return typeof T == "function";
    }
    e.isFunction = bn;
    function Ln(T) {
      return T === null || typeof T == "boolean" || typeof T == "number" || typeof T == "string" || typeof T == "symbol" || // ES6 symbol
      typeof T > "u";
    }
    e.isPrimitive = Ln, e.isBuffer = Gx();
    function Fn(T) {
      return Object.prototype.toString.call(T);
    }
    function Se(T) {
      return T < 10 ? "0" + T.toString(10) : T.toString(10);
    }
    var Oe = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function Vn() {
      var T = /* @__PURE__ */ new Date(), N = [
        Se(T.getHours()),
        Se(T.getMinutes()),
        Se(T.getSeconds())
      ].join(":");
      return [T.getDate(), Oe[T.getMonth()], N].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", Vn(), e.format.apply(e, arguments));
    }, e.inherits = Zx(), e._extend = function(T, N) {
      if (!N || !Z(N)) return T;
      for (var W = Object.keys(N), X = W.length; X--; )
        T[W[X]] = N[W[X]];
      return T;
    };
    function Dn(T, N) {
      return Object.prototype.hasOwnProperty.call(T, N);
    }
    var zn = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    e.promisify = function(N) {
      if (typeof N != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (zn && N[zn]) {
        var W = N[zn];
        if (typeof W != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(W, zn, {
          value: W,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), W;
      }
      function W() {
        for (var X, cn, en = new Promise(function(nn, yn) {
          X = nn, cn = yn;
        }), tn = [], Q = 0; Q < arguments.length; Q++)
          tn.push(arguments[Q]);
        tn.push(function(nn, yn) {
          nn ? cn(nn) : X(yn);
        });
        try {
          N.apply(this, tn);
        } catch (nn) {
          cn(nn);
        }
        return en;
      }
      return Object.setPrototypeOf(W, Object.getPrototypeOf(N)), zn && Object.defineProperty(W, zn, {
        value: W,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        W,
        r(N)
      );
    }, e.promisify.custom = zn;
    function re(T, N) {
      if (!T) {
        var W = new Error("Promise was rejected with a falsy value");
        W.reason = T, T = W;
      }
      return N(T);
    }
    function q(T) {
      if (typeof T != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function N() {
        for (var W = [], X = 0; X < arguments.length; X++)
          W.push(arguments[X]);
        var cn = W.pop();
        if (typeof cn != "function")
          throw new TypeError("The last argument must be of type Function");
        var en = this, tn = function() {
          return cn.apply(en, arguments);
        };
        T.apply(this, W).then(
          function(Q) {
            process.nextTick(tn.bind(null, null, Q));
          },
          function(Q) {
            process.nextTick(re.bind(null, Q, tn));
          }
        );
      }
      return Object.setPrototypeOf(N, Object.getPrototypeOf(T)), Object.defineProperties(
        N,
        r(T)
      ), N;
    }
    e.callbackify = q;
  })(cc)), cc;
}
var lf = {}, qy;
function Hx() {
  return qy || (qy = 1, (function(e) {
    (function() {
      var r = {
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
      };
      function i(p) {
        return u(f(p), arguments);
      }
      function a(p, d) {
        return i.apply(null, [p].concat(d || []));
      }
      function u(p, d) {
        var g = 1, m = p.length, v, w = "", P, E, x, B, A, I, D, S;
        for (P = 0; P < m; P++)
          if (typeof p[P] == "string")
            w += p[P];
          else if (typeof p[P] == "object") {
            if (x = p[P], x.keys)
              for (v = d[g], E = 0; E < x.keys.length; E++) {
                if (v == null)
                  throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', x.keys[E], x.keys[E - 1]));
                v = v[x.keys[E]];
              }
            else x.param_no ? v = d[x.param_no] : v = d[g++];
            if (r.not_type.test(x.type) && r.not_primitive.test(x.type) && v instanceof Function && (v = v()), r.numeric_arg.test(x.type) && typeof v != "number" && isNaN(v))
              throw new TypeError(i("[sprintf] expecting number but found %T", v));
            switch (r.number.test(x.type) && (D = v >= 0), x.type) {
              case "b":
                v = parseInt(v, 10).toString(2);
                break;
              case "c":
                v = String.fromCharCode(parseInt(v, 10));
                break;
              case "d":
              case "i":
                v = parseInt(v, 10);
                break;
              case "j":
                v = JSON.stringify(v, null, x.width ? parseInt(x.width) : 0);
                break;
              case "e":
                v = x.precision ? parseFloat(v).toExponential(x.precision) : parseFloat(v).toExponential();
                break;
              case "f":
                v = x.precision ? parseFloat(v).toFixed(x.precision) : parseFloat(v);
                break;
              case "g":
                v = x.precision ? String(Number(v.toPrecision(x.precision))) : parseFloat(v);
                break;
              case "o":
                v = (parseInt(v, 10) >>> 0).toString(8);
                break;
              case "s":
                v = String(v), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "t":
                v = String(!!v), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "T":
                v = Object.prototype.toString.call(v).slice(8, -1).toLowerCase(), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "u":
                v = parseInt(v, 10) >>> 0;
                break;
              case "v":
                v = v.valueOf(), v = x.precision ? v.substring(0, x.precision) : v;
                break;
              case "x":
                v = (parseInt(v, 10) >>> 0).toString(16);
                break;
              case "X":
                v = (parseInt(v, 10) >>> 0).toString(16).toUpperCase();
                break;
            }
            r.json.test(x.type) ? w += v : (r.number.test(x.type) && (!D || x.sign) ? (S = D ? "+" : "-", v = v.toString().replace(r.sign, "")) : S = "", A = x.pad_char ? x.pad_char === "0" ? "0" : x.pad_char.charAt(1) : " ", I = x.width - (S + v).length, B = x.width && I > 0 ? A.repeat(I) : "", w += x.align ? S + v + B : A === "0" ? S + B + v : B + S + v);
          }
        return w;
      }
      var c = /* @__PURE__ */ Object.create(null);
      function f(p) {
        if (c[p])
          return c[p];
        for (var d = p, g, m = [], v = 0; d; ) {
          if ((g = r.text.exec(d)) !== null)
            m.push(g[0]);
          else if ((g = r.modulo.exec(d)) !== null)
            m.push("%");
          else if ((g = r.placeholder.exec(d)) !== null) {
            if (g[2]) {
              v |= 1;
              var w = [], P = g[2], E = [];
              if ((E = r.key.exec(P)) !== null)
                for (w.push(E[1]); (P = P.substring(E[0].length)) !== ""; )
                  if ((E = r.key_access.exec(P)) !== null)
                    w.push(E[1]);
                  else if ((E = r.index_access.exec(P)) !== null)
                    w.push(E[1]);
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              g[2] = w;
            } else
              v |= 2;
            if (v === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            m.push(
              {
                placeholder: g[0],
                param_no: g[1],
                keys: g[2],
                sign: g[3],
                pad_char: g[4],
                align: g[5],
                width: g[6],
                precision: g[7],
                type: g[8]
              }
            );
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          d = d.substring(g[0].length);
        }
        return c[p] = m;
      }
      e.sprintf = i, e.vsprintf = a, typeof window < "u" && (window.sprintf = i, window.vsprintf = a);
    })();
  })(lf)), lf;
}
var Pa = { exports: {} }, Uy;
function Kx() {
  if (Uy) return Pa.exports;
  Uy = 1;
  var e = typeof Reflect == "object" ? Reflect : null, r = e && typeof e.apply == "function" ? e.apply : function(M, L, j) {
    return Function.prototype.apply.call(M, L, j);
  }, i;
  e && typeof e.ownKeys == "function" ? i = e.ownKeys : Object.getOwnPropertySymbols ? i = function(M) {
    return Object.getOwnPropertyNames(M).concat(Object.getOwnPropertySymbols(M));
  } : i = function(M) {
    return Object.getOwnPropertyNames(M);
  };
  function a(S) {
    console && console.warn && console.warn(S);
  }
  var u = Number.isNaN || function(M) {
    return M !== M;
  };
  function c() {
    c.init.call(this);
  }
  Pa.exports = c, Pa.exports.once = A, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;
  var f = 10;
  function p(S) {
    if (typeof S != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof S);
  }
  Object.defineProperty(c, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return f;
    },
    set: function(S) {
      if (typeof S != "number" || S < 0 || u(S))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + S + ".");
      f = S;
    }
  }), c.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, c.prototype.setMaxListeners = function(M) {
    if (typeof M != "number" || M < 0 || u(M))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + M + ".");
    return this._maxListeners = M, this;
  };
  function d(S) {
    return S._maxListeners === void 0 ? c.defaultMaxListeners : S._maxListeners;
  }
  c.prototype.getMaxListeners = function() {
    return d(this);
  }, c.prototype.emit = function(M) {
    for (var L = [], j = 1; j < arguments.length; j++) L.push(arguments[j]);
    var z = M === "error", Z = this._events;
    if (Z !== void 0)
      z = z && Z.error === void 0;
    else if (!z)
      return !1;
    if (z) {
      var V;
      if (L.length > 0 && (V = L[0]), V instanceof Error)
        throw V;
      var fn = new Error("Unhandled error." + (V ? " (" + V.message + ")" : ""));
      throw fn.context = V, fn;
    }
    var bn = Z[M];
    if (bn === void 0)
      return !1;
    if (typeof bn == "function")
      r(bn, this, L);
    else
      for (var Ln = bn.length, Fn = E(bn, Ln), j = 0; j < Ln; ++j)
        r(Fn[j], this, L);
    return !0;
  };
  function g(S, M, L, j) {
    var z, Z, V;
    if (p(L), Z = S._events, Z === void 0 ? (Z = S._events = /* @__PURE__ */ Object.create(null), S._eventsCount = 0) : (Z.newListener !== void 0 && (S.emit(
      "newListener",
      M,
      L.listener ? L.listener : L
    ), Z = S._events), V = Z[M]), V === void 0)
      V = Z[M] = L, ++S._eventsCount;
    else if (typeof V == "function" ? V = Z[M] = j ? [L, V] : [V, L] : j ? V.unshift(L) : V.push(L), z = d(S), z > 0 && V.length > z && !V.warned) {
      V.warned = !0;
      var fn = new Error("Possible EventEmitter memory leak detected. " + V.length + " " + String(M) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      fn.name = "MaxListenersExceededWarning", fn.emitter = S, fn.type = M, fn.count = V.length, a(fn);
    }
    return S;
  }
  c.prototype.addListener = function(M, L) {
    return g(this, M, L, !1);
  }, c.prototype.on = c.prototype.addListener, c.prototype.prependListener = function(M, L) {
    return g(this, M, L, !0);
  };
  function m() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function v(S, M, L) {
    var j = { fired: !1, wrapFn: void 0, target: S, type: M, listener: L }, z = m.bind(j);
    return z.listener = L, j.wrapFn = z, z;
  }
  c.prototype.once = function(M, L) {
    return p(L), this.on(M, v(this, M, L)), this;
  }, c.prototype.prependOnceListener = function(M, L) {
    return p(L), this.prependListener(M, v(this, M, L)), this;
  }, c.prototype.removeListener = function(M, L) {
    var j, z, Z, V, fn;
    if (p(L), z = this._events, z === void 0)
      return this;
    if (j = z[M], j === void 0)
      return this;
    if (j === L || j.listener === L)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete z[M], z.removeListener && this.emit("removeListener", M, j.listener || L));
    else if (typeof j != "function") {
      for (Z = -1, V = j.length - 1; V >= 0; V--)
        if (j[V] === L || j[V].listener === L) {
          fn = j[V].listener, Z = V;
          break;
        }
      if (Z < 0)
        return this;
      Z === 0 ? j.shift() : x(j, Z), j.length === 1 && (z[M] = j[0]), z.removeListener !== void 0 && this.emit("removeListener", M, fn || L);
    }
    return this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.removeAllListeners = function(M) {
    var L, j, z;
    if (j = this._events, j === void 0)
      return this;
    if (j.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : j[M] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete j[M]), this;
    if (arguments.length === 0) {
      var Z = Object.keys(j), V;
      for (z = 0; z < Z.length; ++z)
        V = Z[z], V !== "removeListener" && this.removeAllListeners(V);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (L = j[M], typeof L == "function")
      this.removeListener(M, L);
    else if (L !== void 0)
      for (z = L.length - 1; z >= 0; z--)
        this.removeListener(M, L[z]);
    return this;
  };
  function w(S, M, L) {
    var j = S._events;
    if (j === void 0)
      return [];
    var z = j[M];
    return z === void 0 ? [] : typeof z == "function" ? L ? [z.listener || z] : [z] : L ? B(z) : E(z, z.length);
  }
  c.prototype.listeners = function(M) {
    return w(this, M, !0);
  }, c.prototype.rawListeners = function(M) {
    return w(this, M, !1);
  }, c.listenerCount = function(S, M) {
    return typeof S.listenerCount == "function" ? S.listenerCount(M) : P.call(S, M);
  }, c.prototype.listenerCount = P;
  function P(S) {
    var M = this._events;
    if (M !== void 0) {
      var L = M[S];
      if (typeof L == "function")
        return 1;
      if (L !== void 0)
        return L.length;
    }
    return 0;
  }
  c.prototype.eventNames = function() {
    return this._eventsCount > 0 ? i(this._events) : [];
  };
  function E(S, M) {
    for (var L = new Array(M), j = 0; j < M; ++j)
      L[j] = S[j];
    return L;
  }
  function x(S, M) {
    for (; M + 1 < S.length; M++)
      S[M] = S[M + 1];
    S.pop();
  }
  function B(S) {
    for (var M = new Array(S.length), L = 0; L < M.length; ++L)
      M[L] = S[L].listener || S[L];
    return M;
  }
  function A(S, M) {
    return new Promise(function(L, j) {
      function z(V) {
        S.removeListener(M, Z), j(V);
      }
      function Z() {
        typeof S.removeListener == "function" && S.removeListener("error", z), L([].slice.call(arguments));
      }
      D(S, M, Z, { once: !0 }), M !== "error" && I(S, z, { once: !0 });
    });
  }
  function I(S, M, L) {
    typeof S.on == "function" && D(S, "error", M, L);
  }
  function D(S, M, L, j) {
    if (typeof S.on == "function")
      j.once ? S.once(M, L) : S.on(M, L);
    else if (typeof S.addEventListener == "function")
      S.addEventListener(M, function z(Z) {
        j.once && S.removeEventListener(M, z), L(Z);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof S);
  }
  return Pa.exports;
}
var pf, ky;
function Jx() {
  if (ky) return pf;
  ky = 1;
  var e = [].indexOf;
  return pf = function(r, i) {
    if (e) return r.indexOf(i);
    for (var a = 0; a < r.length; ++a)
      if (r[a] === i) return a;
    return -1;
  }, pf;
}
var hf, Wy;
function Vx() {
  if (Wy) return hf;
  Wy = 1;
  var e = Array.prototype, r = e.concat, i = e.slice, a = Jx();
  function u(c) {
    var f = {}, p = r.apply(e, i.call(arguments, 1));
    for (var d in c)
      a(p, d) === -1 && (f[d] = c[d]);
    return f;
  }
  return hf = u, hf;
}
var df, Yy;
function Iv() {
  return Yy || (Yy = 1, df = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), df;
}
var gf, $y;
function Xx() {
  return $y || ($y = 1, gf = Iv()), gf;
}
var yf, zy;
function Qx() {
  if (zy) return yf;
  zy = 1;
  var e = Xx();
  function r(f, p, d) {
    var g = f.getTime();
    return d = d || e, p.replace(/%([-_0]?.)/g, function(m, v) {
      var w = null;
      if (v.length == 2) {
        switch (v[0]) {
          case "-":
            w = "";
            break;
          case "_":
            w = " ";
            break;
          case "0":
            w = "0";
            break;
          default:
            return m;
        }
        v = v[1];
      }
      switch (v) {
        case "A":
          return d.days[f.getDay()];
        case "a":
          return d.abbreviated_days[f.getDay()];
        case "B":
          return d.months[f.getMonth()];
        case "b":
          return d.abbreviated_months[f.getMonth()];
        case "C":
          return i(Math.floor(f.getFullYear() / 100), w);
        case "D":
          return r(f, "%m/%d/%y");
        case "d":
          return i(f.getDate(), w);
        case "e":
          return f.getDate();
        case "F":
          return r(f, "%Y-%m-%d");
        case "H":
          return i(f.getHours(), w);
        case "h":
          return d.abbreviated_months[f.getMonth()];
        case "I":
          return i(a(f), w);
        case "j":
          return i(Math.ceil((f.getTime() - new Date(f.getFullYear(), 0, 1).getTime()) / (1e3 * 60 * 60 * 24)), 3);
        case "k":
          return i(f.getHours(), w === null ? " " : w);
        case "L":
          return i(Math.floor(g % 1e3), 3);
        case "l":
          return i(a(f), w === null ? " " : w);
        case "M":
          return i(f.getMinutes(), w);
        case "m":
          return i(f.getMonth() + 1, w);
        case "n":
          return `
`;
        case "o":
          return String(f.getDate()) + u(f.getDate());
        case "P":
          return f.getHours() < 12 ? d.am.toLowerCase() : d.pm.toLowerCase();
        case "p":
          return f.getHours() < 12 ? d.am.toUpperCase() : d.pm.toUpperCase();
        case "R":
          return r(f, "%H:%M");
        case "r":
          return r(f, "%I:%M:%S %p");
        case "S":
          return i(f.getSeconds(), w);
        case "s":
          return Math.floor(g / 1e3);
        case "T":
          return r(f, "%H:%M:%S");
        case "t":
          return "	";
        case "U":
          return i(c(f, "sunday"), w);
        case "u":
          return f.getDay() === 0 ? 7 : f.getDay();
        case "v":
          return r(f, "%e-%b-%Y");
        case "W":
          return i(c(f, "monday"), w);
        case "w":
          return f.getDay();
        case "Y":
          return f.getFullYear();
        case "y":
          var P = String(f.getFullYear());
          return P.slice(P.length - 2);
        case "Z":
          var E = f.toString().match(/\((\w+)\)/);
          return E && E[1] || "";
        case "z":
          var x = f.getTimezoneOffset();
          return (x > 0 ? "-" : "+") + i(Math.round(Math.abs(x / 60)), 2) + ":" + i(x % 60, 2);
        default:
          return v;
      }
    });
  }
  function i(f, p, d) {
    typeof p == "number" && (d = p, p = "0"), p === null && (p = "0"), d = d || 2;
    var g = String(f);
    if (p)
      for (; g.length < d; )
        g = p + g;
    return g;
  }
  function a(f) {
    var p = f.getHours();
    return p === 0 ? p = 12 : p > 12 && (p -= 12), p;
  }
  function u(f) {
    var p = f % 10, d = f % 100;
    if (d >= 11 && d <= 13 || p === 0 || p >= 4)
      return "th";
    switch (p) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
    }
  }
  function c(f, p) {
    p = p || "sunday";
    var d = f.getDay();
    p == "monday" && (d === 0 ? d = 6 : d--);
    var g = new Date(f.getFullYear(), 0, 1), m = (f - g) / 864e5, v = (m + 7 - d) / 7;
    return Math.floor(v);
  }
  return yf = r, yf;
}
var vf, Gy;
function nM() {
  return Gy || (Gy = 1, vf = function(e, r) {
    var i;
    return r === 0 && "zero" in e && (i = "zero"), i = i || (r === 1 ? "one" : "other"), e[i];
  }), vf;
}
var mf, Zy;
function eM() {
  return Zy || (Zy = 1, mf = {
    counterpart: {
      names: Iv(),
      pluralize: nM(),
      formats: {
        date: {
          default: "%a, %e %b %Y",
          long: "%A, %B %o, %Y",
          short: "%b %e"
        },
        time: {
          default: "%H:%M",
          long: "%H:%M:%S %z",
          short: "%H:%M"
        },
        datetime: {
          default: "%a, %e %b %Y %H:%M",
          long: "%A, %B %o, %Y %H:%M:%S %z",
          short: "%e %b %H:%M"
        }
      }
    }
  }), mf;
}
var _f, Hy;
function tM() {
  if (Hy) return _f;
  Hy = 1;
  var e = lx(), r = jy().isArray, i = jy().isDate, a = Hx().sprintf, u = Kx(), c = Vx(), f = Qx(), p = "counterpart";
  function d(A) {
    return typeof A == "string" || Object.prototype.toString.call(A) === "[object String]";
  }
  function g(A) {
    return typeof A == "function" || Object.prototype.toString.call(A) === "[object Function]";
  }
  function m(A) {
    return A === null ? !1 : Object.prototype.toString.call(A) === "[object Object]";
  }
  function v(A) {
    return d(A) && A[0] === ":";
  }
  function w(A, I) {
    return Object.prototype.hasOwnProperty.call(A, I);
  }
  function P(A, I) {
    return I.reduce(function(D, S) {
      return m(D) && w(D, S) ? D[S] : null;
    }, A);
  }
  function E() {
    u.EventEmitter.apply(this), this._registry = {
      locale: "en",
      interpolate: !0,
      fallbackLocales: [],
      scope: null,
      translations: {},
      interpolations: {},
      normalizedKeys: {},
      separator: ".",
      keepTrailingDot: !1,
      keyTransformer: function(A) {
        return A;
      },
      generateMissingEntry: function(A) {
        return "missing translation: " + A;
      }
    }, this.registerTranslations("en", eM()), this.setMaxListeners(0);
  }
  E.prototype = u.EventEmitter.prototype, E.prototype.constructor = u.EventEmitter, E.prototype.getLocale = function() {
    return this._registry.locale;
  }, E.prototype.setLocale = function(A) {
    var I = this._registry.locale;
    return I != A && (this._registry.locale = A, this.emit("localechange", A, I)), I;
  }, E.prototype.getFallbackLocale = function() {
    return this._registry.fallbackLocales;
  }, E.prototype.setFallbackLocale = function(A) {
    var I = this._registry.fallbackLocales;
    return this._registry.fallbackLocales = [].concat(A || []), I;
  }, E.prototype.getAvailableLocales = function() {
    return this._registry.availableLocales || Object.keys(this._registry.translations);
  }, E.prototype.setAvailableLocales = function(A) {
    var I = this.getAvailableLocales();
    return this._registry.availableLocales = A, I;
  }, E.prototype.getSeparator = function() {
    return this._registry.separator;
  }, E.prototype.setSeparator = function(A) {
    var I = this._registry.separator;
    return this._registry.separator = A, I;
  }, E.prototype.setInterpolate = function(A) {
    var I = this._registry.interpolate;
    return this._registry.interpolate = A, I;
  }, E.prototype.getInterpolate = function() {
    return this._registry.interpolate;
  }, E.prototype.setKeyTransformer = function(A) {
    var I = this._registry.keyTransformer;
    return this._registry.keyTransformer = A, I;
  }, E.prototype.getKeyTransformer = function() {
    return this._registry.keyTransformer;
  }, E.prototype.setMissingEntryGenerator = function(A) {
    var I = this._registry.generateMissingEntry;
    return this._registry.generateMissingEntry = A, I;
  }, E.prototype.getMissingEntryGenerator = function() {
    return this._registry.generateMissingEntry;
  }, E.prototype.registerTranslations = function(A, I) {
    var D = {};
    return D[A] = I, e(!0, this._registry.translations, D), D;
  }, E.prototype.registerInterpolations = function(A) {
    return e(!0, this._registry.interpolations, A);
  }, E.prototype.onLocaleChange = E.prototype.addLocaleChangeListener = function(A) {
    this.addListener("localechange", A);
  }, E.prototype.offLocaleChange = E.prototype.removeLocaleChangeListener = function(A) {
    this.removeListener("localechange", A);
  }, E.prototype.onTranslationNotFound = E.prototype.addTranslationNotFoundListener = function(A) {
    this.addListener("translationnotfound", A);
  }, E.prototype.offTranslationNotFound = E.prototype.removeTranslationNotFoundListener = function(A) {
    this.removeListener("translationnotfound", A);
  }, E.prototype.onError = E.prototype.addErrorListener = function(A) {
    this.addListener("error", A);
  }, E.prototype.offError = E.prototype.removeErrorListener = function(A) {
    this.removeListener("error", A);
  }, E.prototype.translate = function(A, I) {
    if (!r(A) && !d(A) || !A.length)
      throw new Error("invalid argument: key");
    v(A) && (A = A.substr(1)), A = this._registry.keyTransformer(A, I), I = e(!0, {}, I);
    var D = I.locale || this._registry.locale;
    delete I.locale;
    var S = I.scope || this._registry.scope;
    delete I.scope;
    var M = I.separator || this._registry.separator;
    delete I.separator;
    var L = [].concat(I.fallbackLocale || this._registry.fallbackLocales);
    delete I.fallbackLocale;
    var j = this._normalizeKeys(D, S, A, M), z = P(this._registry.translations, j);
    if (z === null && (this.emit("translationnotfound", D, A, I.fallback, S), I.fallback && (z = this._fallback(D, S, A, I.fallback, I))), z === null && L.length > 0 && L.indexOf(D) === -1)
      for (var Z = 0, V = L.length; Z < V; Z++) {
        var fn = L[Z], bn = this._normalizeKeys(fn, S, A, M);
        if (z = P(this._registry.translations, bn), z) {
          D = fn;
          break;
        }
      }
    return z === null && (z = this._registry.generateMissingEntry(j.join(M))), z = this._pluralize(D, z, I.count), this._registry.interpolate !== !1 && I.interpolate !== !1 && (z = this._interpolate(z, I)), z;
  }, E.prototype.localize = function(A, I) {
    if (!i(A))
      throw new Error("invalid argument: object must be a date");
    I = e(!0, {}, I);
    var D = I.locale || this._registry.locale, S = I.scope || p, M = I.type || "datetime", L = I.format || "default";
    return I = { locale: D, scope: S, interpolate: !1 }, L = this.translate(["formats", M, L], e(!0, {}, I)), f(A, L, this.translate("names", I));
  }, E.prototype._pluralize = function(A, I, D) {
    if (typeof I != "object" || I === null || typeof D != "number")
      return I;
    var S = this.translate("pluralize", { locale: A, scope: p });
    return Object.prototype.toString.call(S) !== "[object Function]" ? S : S(I, D);
  }, E.prototype.withLocale = function(A, I, D) {
    var S = this._registry.locale;
    this._registry.locale = A;
    var M = I.call(D);
    return this._registry.locale = S, M;
  }, E.prototype.withScope = function(A, I, D) {
    var S = this._registry.scope;
    this._registry.scope = A;
    var M = I.call(D);
    return this._registry.scope = S, M;
  }, E.prototype.withSeparator = function(A, I, D) {
    var S = this.setSeparator(A), M = I.call(D);
    return this.setSeparator(S), M;
  }, E.prototype._normalizeKeys = function(A, I, D, S) {
    var M = [];
    return M = M.concat(this._normalizeKey(A, S)), M = M.concat(this._normalizeKey(I, S)), M = M.concat(this._normalizeKey(D, S)), M;
  }, E.prototype._normalizeKey = function(A, I) {
    return this._registry.normalizedKeys[I] = this._registry.normalizedKeys[I] || {}, this._registry.normalizedKeys[I][A] = this._registry.normalizedKeys[I][A] || (function(D) {
      if (r(D)) {
        var S = D.map((function(j) {
          return this._normalizeKey(j, I);
        }).bind(this));
        return [].concat.apply([], S);
      } else {
        if (typeof D > "u" || D === null)
          return [];
        for (var M = D.split(I), L = M.length - 1; L >= 0; L--)
          M[L] === "" && (M.splice(L, 1), this._registry.keepTrailingDot === !0 && L == M.length && (M[M.length - 1] += "" + I));
        return M;
      }
    }).bind(this)(A), this._registry.normalizedKeys[I][A];
  }, E.prototype._interpolate = function(A, I) {
    if (typeof A != "string")
      return A;
    try {
      return a(A, e({}, this._registry.interpolations, I));
    } catch (D) {
      if (this.listenerCount("error") > 0)
        this.emit("error", D, A, I);
      else
        throw D;
      return null;
    }
  }, E.prototype._resolve = function(A, I, D, S, M) {
    if (M = M || {}, M.resolve === !1)
      return S;
    var L;
    if (v(S))
      L = this.translate(S, e({}, M, { locale: A, scope: I }));
    else if (g(S)) {
      var j;
      M.object ? (j = M.object, delete M.object) : j = D, L = this._resolve(A, I, D, S(j, M));
    } else
      L = S;
    return /^missing translation:/.test(L) ? null : L;
  }, E.prototype._fallback = function(A, I, D, S, M) {
    if (M = c(M, "fallback"), r(S)) {
      for (var L = 0, j = S.length; L < j; L++) {
        var z = this._resolve(A, I, D, S[L], M);
        if (z)
          return z;
      }
      return null;
    } else
      return this._resolve(A, I, D, S, M);
  };
  var x = new E();
  function B() {
    return x.translate.apply(x, arguments);
  }
  return e(B, x, {
    Instance: E,
    Translator: E
  }), _f = B, _f;
}
var rM = tM();
const it = /* @__PURE__ */ f1(rM), iM = "cs.f9e12ca.json", oM = "cy.229b83b.json", aM = "da.dec2d5d.json", uM = "de_DE.ee14b71.json", sM = "el.9da3e33.json", cM = "en_EN.1c3a5cc.json", fM = "eo.03dd57f.json", lM = "es.f14a213.json", pM = "et.1ae4f56.json", hM = "fa.8c12691.json", dM = "fi.22b54d2.json", gM = "fr.5c0e7bc.json", yM = "gl.7065ccc.json", vM = "he.b83d000.json", mM = "hu.5146710.json", _M = "hy.de33a67.json", wM = "id.6cd94da.json", bM = "is.863e288.json", EM = "it.74bccd9.json", AM = "ja.2aeddc4.json", SM = "ka.e064701.json", OM = "ko.f795d1b.json", TM = "lo.48b8551.json", IM = "lt.4e7eaae.json", RM = "lv.9d75a93.json", xM = "mg_MG.a1da06d.json", MM = "nl.a5c8438.json", PM = "pl.00a3ce3.json", CM = "pt.c39ae76.json", DM = "ru.d98ec4c.json", NM = "sk.71515ae.json", LM = "sq.0a454c4.json", FM = "sv.89ad476.json", BM = "tr.200fdfa.json", jM = "uk.4e66c6e.json", qM = "vi.f7d2307.json", Ky = {
  cs: iM,
  cy: oM,
  da: aM,
  de: uM,
  el: sM,
  en: cM,
  eo: fM,
  es: lM,
  et: pM,
  fa: hM,
  fi: dM,
  fr: gM,
  gl: yM,
  he: vM,
  hu: mM,
  hy: _M,
  id: wM,
  is: bM,
  it: EM,
  ja: AM,
  ka: SM,
  ko: OM,
  lo: TM,
  lt: IM,
  lv: RM,
  mg: xM,
  "nb-no": "nb_NO.03aa079.json",
  nl: MM,
  pl: PM,
  pt: CM,
  "pt-br": "pt_BR.ef6eeb6.json",
  ru: DM,
  sk: NM,
  sq: LM,
  sv: FM,
  tr: BM,
  uk: jM,
  vi: qM,
  "zh-hans": "zh_Hans.bda4f9c.json",
  "zh-hant": "zh_Hant.1ac58bd.json"
}, Rv = "i18n/";
it.setSeparator(Tu.KEY_SEPARATOR);
const xv = "en";
it.setFallbackLocale(xv);
function UM(e, r) {
  it.registerTranslations(e, r);
}
function CP(e) {
  it.setMissingEntryGenerator(e);
}
function kM() {
  return it.getLocale();
}
function DP(e) {
  return it.setLocale(e);
}
function NP(e) {
  return e;
}
function Jy(e) {
  return typeof e == "string" && !e.startsWith("missing translation:");
}
const WM = (e, r) => {
  const i = it.translate(e, { ...r, fallbackLocale: it.getLocale() });
  if (Jy(i))
    return { translated: i };
  const a = it.translate(e, { ...r, locale: xv });
  return Jy(a) ? { translated: a, isFallback: !0 } : { translated: e, isFallback: !0 };
};
function lp(e, r) {
  const i = { ...r, interpolate: !1 };
  return i && typeof i == "object" && Object.keys(i).forEach((a) => {
    i[a] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + a), i[a] = "undefined"), i[a] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + a), i[a] = "null");
  }), WM(e, i);
}
const Mv = (e, r) => e;
function xu(e, r, i) {
  const { translated: a } = lp(e, r), u = Pv(a, r, i);
  return Mv(u);
}
function LP(e) {
  return lp(e, {}).translated;
}
function FP(e, r, i) {
  const { translated: a, isFallback: u } = lp(e, r), c = Pv(a, r, i);
  return Mv(u ? /* @__PURE__ */ H.createElement("span", { lang: "en" }, c) : c);
}
function BP(e) {
  return e.replace(/%\(([^)]*)\)/g, "% ($1)");
}
function Pv(e, r, i) {
  let a = e;
  if (r !== void 0) {
    const u = {};
    for (const c in r)
      u[`%\\(${c}\\)s`] = r[c];
    a = Vy(a, u);
  }
  if (i !== void 0) {
    const u = {};
    for (const c in i)
      u[`(<${c}>(.*?)<\\/${c}>|<${c}>|<${c}\\s*\\/>)`] = i[c];
    a = Vy(a, u);
  }
  return a;
}
function Vy(e, r) {
  const i = [e];
  let a = !1;
  for (const u in r) {
    const c = new RegExp(u, "g");
    let f = !1;
    for (let p = 0; p < i.length; p++) {
      const d = i[p];
      if (typeof d != "string")
        continue;
      let g = c.exec(d);
      if (!g) continue;
      f = !0;
      const m = d.slice(0, g.index), v = [];
      let w;
      for (; g; ) {
        w = g;
        const P = g.slice(2);
        let E;
        r[u] instanceof Function ? E = r[u](...P) : E = r[u], typeof E == "object" && (a = !0), (typeof E != "string" || E !== "") && v.push(E), g = c.exec(d);
        let x;
        if (g) {
          const B = w.index + w[0].length;
          x = d.slice(B, g.index);
        } else
          x = d.slice(w.index + w[0].length);
        x && v.push(x);
      }
      i.splice(p, 1, ...v), m !== "" && i.splice(p, 0, m);
    }
    f || // The current regexp did not match anything in the input. Missing
    // matches is entirely possible because you might choose to show some
    // variables only in the case of e.g. plurals. It's still a bit
    // suspicious, and could be due to an error, so log it. However, not
    // showing count is so common that it's not worth logging. And other
    // commonly unused variables here, if there are any.
    u !== "%\\(count\\)s" && // Ignore the `locale` option which can be used to override the locale
    // in counterpart
    u !== "%\\(locale\\)s" && console.log(`Could not find ${c} in ${e}`);
  }
  return a ? H.createElement("span", null, ...i) : i.join("");
}
async function jP(e) {
  const r = await $M(), i = e in r ? e : "en", a = await YM(Rv + r[i]);
  it.registerTranslations(i, a), it.setLocale(i);
}
async function YM(e) {
  console.log("Loading language from", e);
  const r = await fetch(e, { method: "GET" });
  if (!r.ok)
    throw new Error(`Failed to load ${e}, got ${r.status}`);
  return r.json();
}
async function $M() {
  let e;
  typeof Ky == "string" ? e = Ky : e = Rv + "languages.json";
  const r = await fetch(e, { method: "GET" });
  if (!r.ok)
    throw new Error(`Failed to load ${e}, got ${r.status}`);
  return r.json();
}
function zM({
  type: e,
  children: r,
  avatar: i,
  className: a,
  actions: u,
  onClose: c,
  ...f
}) {
  const p = ot(xa.banner, a), d = _i(() => {
    switch (e) {
      case "critical":
        return /* @__PURE__ */ H.createElement(rx, { fontSize: 24, ...f });
      case "info":
        return /* @__PURE__ */ H.createElement(Pg, { fontSize: 24, ...f });
      case "success":
        return /* @__PURE__ */ H.createElement(tx, { fontSize: 24, ...f });
      default:
        return /* @__PURE__ */ H.createElement(Pg, { fontSize: 24, ...f });
    }
  }, [e, f]);
  return /* @__PURE__ */ H.createElement("div", { ...f, className: p, "data-type": e }, /* @__PURE__ */ H.createElement("div", { className: xa.icon }, i ?? d), /* @__PURE__ */ H.createElement("div", { className: xa.content }, r), /* @__PURE__ */ H.createElement("div", { className: xa.actions }, u, c && /* @__PURE__ */ H.createElement(Na, { kind: "secondary", size: "sm", onClick: c }, xu("action|dismiss"))));
}
function qP({ vm: e }) {
  const { visible: r } = Ja(e), i = xu(
    "room|status_bar|history_visible",
    {},
    {
      a: GM
    }
  );
  return /* @__PURE__ */ H.createElement(H.Fragment, null, r && /* @__PURE__ */ H.createElement(zM, { type: "info", onClose: () => e.onClose() }, i));
}
function GM(e) {
  return /* @__PURE__ */ H.createElement(AS, { href: "https://element.io/en/help#e2ee-history-sharing", target: "_blank" }, e);
}
function UP({ vm: e }) {
  const r = Ja(e);
  return /* @__PURE__ */ H.createElement("div", { className: "mx_TextualEvent" }, r.content);
}
function Cv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414"
    })
  });
}
Cv.displayName = "CloseIcon";
const ZM = (0,react.forwardRef)(Cv), HM = "_pill_1i8jm_8", KM = "_label_1i8jm_14", Xy = {
  pill: HM,
  label: KM
};
function kP({ className: e, children: r, label: i, onClick: a, ...u }) {
  const c = u1(), { translate: f } = wi();
  return /* @__PURE__ */ H.createElement(
    Ne,
    {
      display: "inline-flex",
      gap: "var(--cpd-space-1-5x)",
      align: "center",
      className: ot(Xy.pill, e),
      ...u
    },
    r,
    /* @__PURE__ */ H.createElement("span", { id: c, className: Xy.label }, i),
    a && /* @__PURE__ */ H.createElement(
      c1,
      {
        "aria-describedby": c,
        size: "16px",
        onClick: a,
        "aria-label": f("action|delete"),
        className: "mx_Dialog_nonDialogButton"
      },
      /* @__PURE__ */ H.createElement(ZM, { color: "var(--cpd-color-icon-tertiary)" })
    )
  );
}
function JM(e) {
  return (r) => {
    for (const i of e) Pf(i, r);
  };
}
function VM(e) {
  return (r) => {
    const i = [];
    for (const a of e) {
      const u = Pf(a, r), c = typeof u == "function";
      i.push(c ? u : () => Pf(a, null));
    }
    return () => {
      for (const a of i) a();
    };
  };
}
function Pf(e, r) {
  if (typeof e == "function")
    return e(r);
  e && (e.current = r);
}
var XM = parseInt(react.version.split(".")[0], 10) >= 19 ? VM : JM;
function QM(e) {
  return _i(() => XM(e), e);
}
const nP = "_pillInput_1yam9_8", eP = "_input_1yam9_16", tP = "_largerInput_1yam9_32", wf = {
  pillInput: nP,
  input: eP,
  largerInput: tP
};
function WP({
  className: e,
  children: r,
  onRemoveChildren: i,
  inputProps: a,
  ...u
}) {
  const c = s1(null), f = dv.omit(a, ["onKeyDown", "ref"]), p = QM([c, a?.ref]), d = bS.toArray(r).length > 0;
  return /* @__PURE__ */ H.createElement(
    Ne,
    {
      ...u,
      gap: "var(--cpd-space-1x)",
      direction: "column",
      className: ot(wf.pillInput, e),
      onClick: (g) => {
        g.preventDefault(), g.stopPropagation(), c.current?.focus();
      }
    },
    d && /* @__PURE__ */ H.createElement(Ne, { gap: "var(--cpd-space-1x)", wrap: "wrap", align: "center" }, r),
    /* @__PURE__ */ H.createElement(
      "input",
      {
        ref: p,
        autoComplete: "off",
        className: ot(wf.input, { [wf.largerInput]: d }),
        onKeyDown: (g) => {
          const m = g.currentTarget.value.trim();
          if (g.key === "Backspace" && !m) {
            g.preventDefault(), i?.(g);
            return;
          }
          a?.onKeyDown?.(g);
        },
        ...f
      }
    )
  );
}
function Dv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063"
    })
  });
}
Dv.displayName = "CheckIcon";
const rP = (0,react.forwardRef)(Dv), iP = "_richItem_1c0uo_8", oP = "_avatar_1c0uo_36", aP = "_title_1c0uo_41", uP = "_description_1c0uo_47", sP = "_timestamp_1c0uo_51", cP = "_checkmark_1c0uo_69", pi = {
  richItem: iP,
  avatar: oP,
  title: aP,
  description: uP,
  timestamp: sP,
  checkmark: cP
}, YP = (0,react.memo)(function({
  avatar: r,
  title: i,
  description: a,
  timestamp: u,
  selected: c,
  ...f
}) {
  const p = wi();
  return /* @__PURE__ */ react.createElement(
    "li",
    {
      className: pi.richItem,
      role: "option",
      tabIndex: -1,
      "aria-selected": c,
      "aria-label": i,
      ...f
    },
    c ? /* @__PURE__ */ react.createElement(fP, null) : /* @__PURE__ */ react.createElement(Ne, { className: pi.avatar }, r),
    /* @__PURE__ */ react.createElement("span", { className: pi.title }, i),
    /* @__PURE__ */ react.createElement("span", { className: pi.description }, a),
    u && /* @__PURE__ */ react.createElement("span", { role: "timer", className: pi.timestamp }, p.humanizeTime(u))
  );
});
function fP() {
  return /* @__PURE__ */ react.createElement(Ne, { align: "center", justify: "center", "aria-hidden": "true", className: pi.checkmark }, /* @__PURE__ */ react.createElement(rP, { width: "24px", height: "24px", color: "var(--cpd-color-icon-on-solid-primary)" }));
}
const lP = "_richList_1mcas_8", pP = "_title_1mcas_12", hP = "_content_1mcas_18", dP = "_empty_1mcas_26", Ca = {
  richList: lP,
  title: pP,
  content: hP,
  empty: dP
};
function gP() {
  const e = s1(null), r = kd((a) => {
    if (e.current && a.target === e.current) {
      let u = e.current?.firstElementChild;
      for (const c of e.current.children)
        if (c.getAttribute("aria-selected") === "true") {
          u = c;
          break;
        }
      u?.focus();
    }
  }, []), i = kd((a) => {
    const { key: u } = a;
    let c = !1;
    switch (u) {
      case "Enter":
      case " ": {
        c = !0, document.activeElement.click();
        break;
      }
      case "ArrowDown": {
        c = !0;
        const f = document.activeElement;
        e.current?.contains(f) && f && f.nextElementSibling?.focus();
        break;
      }
      case "ArrowUp": {
        c = !0;
        const f = document.activeElement;
        e.current?.contains(f) && f && f.previousElementSibling?.focus();
        break;
      }
      case "Home": {
        c = !0, e.current?.firstElementChild?.focus();
        break;
      }
      case "End": {
        c = !0, e.current?.lastElementChild?.focus();
        break;
      }
    }
    c && a.preventDefault();
  }, []);
  return { listRef: e, onKeyDown: i, onFocus: r };
}
function $P({
  children: e,
  title: r,
  className: i,
  titleAttributes: a,
  isEmpty: u = !1,
  ...c
}) {
  const f = u1(), { listRef: p, onKeyDown: d, onFocus: g } = gP();
  return /* @__PURE__ */ H.createElement(Ne, { className: ot(Ca.richList, i), direction: "column", ...c }, /* @__PURE__ */ H.createElement("span", { id: f, className: Ca.title, ...a }, r), u ? /* @__PURE__ */ H.createElement("span", { className: Ca.empty }, e) : /* @__PURE__ */ H.createElement(
    "ul",
    {
      ref: p,
      role: "listbox",
      className: Ca.content,
      "aria-labelledby": f,
      tabIndex: 0,
      onKeyDown: d,
      onFocus: g
    },
    e
  ));
}
function Nv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z"
    })
  });
}
Nv.displayName = "ExploreIcon";
const yP = (0,react.forwardRef)(Nv);
function Lv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
    })
  });
}
Lv.displayName = "SearchIcon";
const vP = (0,react.forwardRef)(Lv);
function Fv(e, r) {
  return /* @__PURE__ */ $n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ $n.jsx("path", {
      d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8"
    })
  });
}
Fv.displayName = "DialPadIcon";
const mP = (0,react.forwardRef)(Fv), _P = "_view_z7ks9_8", wP = "_search_z7ks9_16", bP = "_search_container_z7ks9_29", EP = "_search_text_z7ks9_41", Da = {
  view: _P,
  search: wP,
  search_container: bP,
  search_text: EP
};
function zP({ vm: e }) {
  const { translate: r } = wi(), { displayExploreButton: i, displayDialButton: a, searchShortcut: u } = Ja(e);
  return /* @__PURE__ */ H.createElement(
    Ne,
    {
      "data-testid": "room-list-search",
      className: Da.view,
      role: "search",
      gap: "var(--cpd-space-2x)",
      align: "center"
    },
    /* @__PURE__ */ H.createElement(
      Na,
      {
        id: "room-list-search-button",
        className: Da.search,
        kind: "secondary",
        size: "sm",
        Icon: vP,
        onClick: e.onSearchClick
      },
      /* @__PURE__ */ H.createElement(Ne, { className: Da.search_container, as: "span", justify: "space-between" }, /* @__PURE__ */ H.createElement("span", { className: Da.search_text }, r("action|search")), /* @__PURE__ */ H.createElement("kbd", null, u))
    ),
    a && /* @__PURE__ */ H.createElement(
      Na,
      {
        kind: "secondary",
        size: "sm",
        Icon: mP,
        iconOnly: !0,
        "aria-label": r("left_panel|open_dial_pad"),
        onClick: e.onDialPadClick
      }
    ),
    i && /* @__PURE__ */ H.createElement(
      Na,
      {
        kind: "secondary",
        size: "sm",
        Icon: yP,
        iconOnly: !0,
        "aria-label": r("action|explore_rooms"),
        onClick: e.onExploreClick
      }
    )
  );
}
const bf = {
  "box-flex": "_box-flex_1odfs_9",
  "box-shrink": "_box-shrink_1odfs_13",
  "box-grow": "_box-grow_1odfs_17"
};
function GP({
  as: e = "div",
  flex: r = null,
  shrink: i = null,
  grow: a = null,
  className: u,
  children: c,
  ...f
}) {
  const p = _i(() => {
    const d = {};
    return r && (d["--mx-box-flex"] = r), i && (d["--mx-box-shrink"] = i), a && (d["--mx-box-grow"] = a), d;
  }, [r, a, i]);
  return H.createElement(
    e,
    {
      ...f,
      className: ot(u, {
        [bf["box-flex"]]: !!r,
        [bf["box-shrink"]]: !!i,
        [bf["box-grow"]]: !!a
      }),
      style: p
    },
    c
  );
}
const Qy = 15e3, n1 = 75e3, e1 = 45, t1 = 75, r1 = 23, i1 = 26;
function AP(e, r) {
  let a = Date.now() - e;
  const u = Math.abs(Math.ceil(a / 6e4)), c = Math.ceil(u / 60), f = Math.ceil(c / 24), p = r?.translate ?? xu;
  return a >= 0 ? a <= Qy ? p("time|few_seconds_ago") : a <= n1 ? p("time|about_minute_ago") : u <= e1 ? p("time|n_minutes_ago", { num: u }) : u <= t1 ? p("time|about_hour_ago") : c <= r1 ? p("time|n_hours_ago", { num: c }) : c <= i1 ? p("time|about_day_ago") : p("time|n_days_ago", { num: f }) : (a = Math.abs(a), a <= Qy ? p("time|in_few_seconds") : a <= n1 ? p("time|in_about_minute") : u <= e1 ? p("time|in_n_minutes", { num: u }) : u <= t1 ? p("time|in_about_hour") : c <= r1 ? p("time|in_n_hours", { num: c }) : c <= i1 ? p("time|in_about_day") : p("time|in_n_days", { num: f }));
}
function ZP(e, r) {
  return Number.isFinite(e) ? Number(e) : r;
}
function HP(e, r, i) {
  return Math.min(Math.max(e, r), i);
}
function KP(...e) {
  return [...e].reduce((r, i) => i + r, 0);
}
function JP(e, r, i) {
  return e * (i - r) + r;
}
function VP(e, r, i) {
  const a = (e - r) / (i - r);
  return Number.isNaN(a) ? 0 : a;
}
class XP {
  /**
   * Read the current language of the user in IETF Language Tag format
   */
  get language() {
    return kM();
  }
  /**
   * Register translations for the module, may override app's existing translations
   */
  register(r) {
    const i = {};
    for (const a in r)
      for (const u in r[a])
        i[u] = i[u] || {}, i[u][a] = r[a][u];
    for (const a in i)
      UM(a, i[a]);
  }
  /**
   * Perform a translation, with optional variables
   * @param key - The key to translate
   * @param variables - Optional variables to interpolate into the translation
   */
  translate(r, i) {
    return xu(r, i);
  }
  humanizeTime(r) {
    return AP(r, this);
  }
}
class SP {
  disposables = [];
  _isDisposed = !1;
  /**
   * Relinquish all tracked disposable values
   */
  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = !0;
      for (const r of this.disposables)
        typeof r == "function" ? r() : r.dispose();
    }
  }
  /**
   * Track a value that needs to be eventually relinquished
   */
  track(r) {
    return this.throwIfDisposed(), this.disposables.push(r), r;
  }
  /**
   * Add an event listener that will be removed on dispose
   */
  trackListener(r, i, a) {
    this.throwIfDisposed(), r.on(i, a), this.track(() => {
      r.off(i, a);
    });
  }
  throwIfDisposed() {
    if (this.isDisposed) throw new Error("Disposable is already disposed");
  }
  /**
   * Whether this disposable has been disposed
   */
  get isDisposed() {
    return this._isDisposed;
  }
}
class OP {
  constructor(r, i) {
    this.snapshot = r, this.emit = i;
  }
  /**
   * Replace current snapshot with a new snapshot value.
   * @param snapshot New snapshot value
   */
  set(r) {
    this.snapshot = r, this.emit();
  }
  /**
   * Update a part of the current snapshot by merging into the existing snapshot.
   * @param snapshot A subset of the snapshot to merge into the current snapshot.
   */
  merge(r) {
    this.snapshot = { ...this.snapshot, ...r }, this.emit();
  }
  /**
   * The current value of the snapshot.
   */
  get current() {
    return this.snapshot;
  }
}
class TP {
  listeners = /* @__PURE__ */ new Set();
  /**
   * Subscribe to changes in the view model.
   * @param listener Will be called whenever the snapshot changes.
   * @returns A function to unsubscribe from the view model updates.
   */
  add = (r) => (this.listeners.add(r), () => {
    this.listeners.delete(r);
  });
  /**
   * Emit an update to all subscribed listeners.
   */
  emit = () => {
    for (const r of this.listeners)
      r();
  };
}
class QP {
  subs;
  snapshot;
  props;
  disposables = new SP();
  constructor(r, i) {
    this.props = r, this.subs = new TP(), this.snapshot = new OP(i, () => {
      this.subs.emit();
    });
  }
  subscribe = (r) => this.subs.add(r);
  /**
   * Returns the current snapshot of the view model.
   */
  getSnapshot = () => this.snapshot.current;
  /**
   * Relinquish any resources held by this view-model.
   */
  dispose() {
    this.disposables.dispose();
  }
  /**
   * Whether this view-model has been disposed.
   */
  get isDisposed() {
    return this.disposables.isDisposed;
  }
}
class IP {
  constructor(r) {
    this.snapshot = r;
  }
  getSnapshot = () => this.snapshot;
  subscribe(r) {
    return () => {
    };
  }
}
function n3(e) {
  const [r, i] = o1(e);
  return a1(() => {
    let a = r;
    if (r.isDisposed) {
      const u = e();
      a = u, i(u);
    }
    return () => {
      a.dispose();
    };
  }, []), r;
}
function e3(e, r) {
  return _i(() => {
    const i = new IP(e);
    return Object.assign(i, r), i;
  }, [e, r]);
}
const t3 = Tu.KEY_SEPARATOR, r3 = Tu.getNormalizedLanguageKeys, i3 = Tu.normalizeLanguageKey;


;// ./src/utils/arrays.ts



































































/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Quickly resample an array to have less/more data points. If an input which is larger
 * than the desired size is provided, it will be downsampled. Similarly, if the input
 * is smaller than the desired size then it will be upsampled.
 * @param {number[]} input The input array to resample.
 * @param {number} points The number of samples to end up with.
 * @returns {number[]} The resampled array.
 */
function arrayFastResample(input, points) {
  if (input.length === points) return input; // short-circuit a complicated call

  // Heavily inspired by matrix-media-repo (used with permission)
  // https://github.com/turt2live/matrix-media-repo/blob/abe72c87d2e29/util/util_audio/fastsample.go#L10
  const samples = [];
  if (input.length > points) {
    // Danger: this loop can cause out of memory conditions if the input is too small.
    const everyNth = Math.round(input.length / points);
    for (let i = 0; i < input.length; i += everyNth) {
      samples.push(input[i]);
    }
  } else {
    // Smaller inputs mean we have to spread the values over the desired length. We
    // end up overshooting the target length in doing this, but we're not looking to
    // be super accurate so we'll let the sanity trims do their job.
    const spreadFactor = Math.ceil(points / input.length);
    for (const val of input) {
      samples.push(...arraySeed(val, spreadFactor));
    }
  }

  // Trim to size & return
  return arrayTrimFill(samples, points, arraySeed(input[input.length - 1], points));
}

/**
 * Attempts a smooth resample of the given array. This is functionally similar to arrayFastResample
 * though can take longer due to the smoothing of data.
 * @param {number[]} input The input array to resample.
 * @param {number} points The number of samples to end up with.
 * @returns {number[]} The resampled array.
 */
function arraySmoothingResample(input, points) {
  if (input.length === points) return input; // short-circuit a complicated call

  let samples = [];
  if (input.length > points) {
    // We're downsampling. To preserve the curve we'll actually reduce our sample
    // selection and average some points between them.

    // All we're doing here is repeatedly averaging the waveform down to near our
    // target value. We don't average down to exactly our target as the loop might
    // never end, and we can over-average the data. Instead, we'll get as far as
    // we can and do a followup fast resample (the neighbouring points will be close
    // to the actual waveform, so we can get away with this safely).
    while (samples.length > points * 2 || samples.length === 0) {
      samples = [];
      for (let i = 1; i < input.length - 1; i += 2) {
        const prevPoint = input[i - 1];
        const nextPoint = input[i + 1];
        const currPoint = input[i];
        const average = (prevPoint + nextPoint + currPoint) / 3;
        samples.push(average);
      }
      input = samples;
    }
    return arrayFastResample(samples, points);
  } else {
    // In practice there's not much purpose in burning CPU for short arrays only to
    // end up with a result that can't possibly look much different than the fast
    // resample, so just skip ahead to the fast resample.
    return arrayFastResample(input, points);
  }
}

/**
 * Rescales the input array to have values that are inclusively within the provided
 * minimum and maximum.
 * @param {number[]} input The array to rescale.
 * @param {number} newMin The minimum value to scale to.
 * @param {number} newMax The maximum value to scale to.
 * @returns {number[]} The rescaled array.
 */
function arrayRescale(input, newMin, newMax) {
  const min = Math.min(...input);
  const max = Math.max(...input);
  return input.map(v => JP(VP(v, min, max), newMin, newMax));
}

/**
 * Creates an array of the given length, seeded with the given value.
 * @param {T} val The value to seed the array with.
 * @param {number} length The length of the array to create.
 * @returns {T[]} The array.
 */
function arraySeed(val, length) {
  // Size the array up front for performance, and use `fill` to let the browser
  // optimize the operation better than we can with a `for` loop, if it wants.
  return new Array(length).fill(val);
}

/**
 * Trims or fills the array to ensure it meets the desired length. The seed array
 * given is pulled from to fill any missing slots - it is recommended that this be
 * at least `len` long. The resulting array will be exactly `len` long, either
 * trimmed from the source or filled with the some/all of the seed array.
 * @param {T[]} a The array to trim/fill.
 * @param {number} len The length to trim or fill to, as needed.
 * @param {T[]} seed Values to pull from if the array needs filling.
 * @returns {T[]} The resulting array of `len` length.
 */
function arrayTrimFill(a, len, seed) {
  // Dev note: we do length checks because the spread operator can result in some
  // performance penalties in more critical code paths. As a utility, it should be
  // as fast as possible to not cause a problem for the call stack, no matter how
  // critical that stack is.
  if (a.length === len) return a;
  if (a.length > len) return a.slice(0, len);
  return a.concat(seed.slice(0, len - a.length));
}

/**
 * Clones an array as fast as possible, retaining references of the array's values.
 * @param a The array to clone. Must be defined.
 * @returns A copy of the array.
 */
function arrayFastClone(a) {
  return a.slice(0, a.length);
}

/**
 * Determines if the two arrays are different either in length, contents,
 * or order of those contents.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns True if they are different, false otherwise.
 */
function arrayHasOrderChange(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return true;
    }
    return false;
  } else {
    return true; // like arrayHasDiff, a difference in length is a natural change
  }
}

/**
 * Determines if two arrays are different through a shallow comparison.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns True if they are different, false otherwise.
 */
function arrayHasDiff(a, b) {
  if (a.length === b.length) {
    // When the lengths are equal, check to see if either array is missing
    // an element from the other.
    if (b.some(i => !a.includes(i))) return true;
    if (a.some(i => !b.includes(i))) return true;

    // if all the keys are common, say so
    return false;
  } else {
    return true; // different lengths means they are naturally diverged
  }
}
/**
 * Performs a diff on two arrays. The result is what is different with the
 * first array (`added` in the returned object means objects in B that aren't
 * in A). Shallow comparisons are used to perform the diff.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns The diff between the arrays.
 */
function arrayDiff(a, b) {
  return {
    added: b.filter(i => !a.includes(i)),
    removed: a.filter(i => !b.includes(i))
  };
}

/**
 * Returns the intersection of two arrays.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns The intersection of the arrays.
 */
function arrayIntersection(a, b) {
  return a.filter(i => b.includes(i));
}

/**
 * Unions arrays, deduping contents using a Set.
 * @param a The arrays to merge.
 * @returns The union of all given arrays.
 */
function arrayUnion(...a) {
  return Array.from(a.reduce((c, v) => {
    v.forEach(i => c.add(i));
    return c;
  }, new Set()));
}

/**
 * Moves a single element from fromIndex to toIndex.
 * @param {array} list the list from which to construct the new list.
 * @param {number} fromIndex the index of the element to move.
 * @param {number} toIndex the index of where to put the element.
 * @returns {array} A new array with the requested value moved.
 */
function moveElement(list, fromIndex, toIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}

/**
 * Helper functions to perform LINQ-like queries on arrays.
 */
class ArrayUtil {
  /**
   * Create a new array helper.
   * @param a The array to help. Can be modified in-place.
   */
  constructor(a) {
    this.a = a;
  }

  /**
   * The value of this array, after all appropriate alterations.
   */
  get value() {
    return this.a;
  }

  /**
   * Groups an array by keys.
   * @param fn The key-finding function.
   * @returns This.
   */
  groupBy(fn) {
    const obj = this.a.reduce((rv, val) => {
      const k = fn(val);
      if (!rv.has(k)) rv.set(k, []);
      rv.get(k).push(val);
      return rv;
    }, new Map());
    return new GroupedArray(obj);
  }
}

/**
 * Helper functions to perform LINQ-like queries on groups (maps).
 */
class GroupedArray {
  /**
   * Creates a new group helper.
   * @param val The group to help. Can be modified in-place.
   */
  constructor(val) {
    this.val = val;
  }

  /**
   * The value of this group, after all applicable alterations.
   */
  get value() {
    return this.val;
  }

  /**
   * Orders the grouping into an array using the provided key order.
   * @param keyOrder The key order.
   * @returns An array helper of the result.
   */
  orderBy(keyOrder) {
    const a = [];
    for (const k of keyOrder) {
      if (!this.val.has(k)) continue;
      a.push(...this.val.get(k));
    }
    return new ArrayUtil(a);
  }
}
const concat = (...arrays) => {
  return arrays.reduce((concatenatedSoFar, toBeConcatenated) => {
    const concatenated = new Uint8Array(concatenatedSoFar.length + toBeConcatenated.length);
    concatenated.set(concatenatedSoFar, 0);
    concatenated.set(toBeConcatenated, concatenatedSoFar.length);
    return concatenated;
  }, new Uint8Array(0));
};

/**
 * Async version of Array.every.
 */
async function asyncEvery(values, predicate) {
  for (const value of values) {
    if (!(await predicate(value))) return false;
  }
  return true;
}

/**
 * Async version of Array.some.
 */
async function asyncSome(values, predicate) {
  for (const value of values) {
    if (await predicate(value)) return true;
  }
  return false;
}

/**
 * Async version of Array.some that runs all promises in parallel.
 * @param values
 * @param predicate
 */
async function asyncSomeParallel(values, predicate) {
  try {
    return await Promise.any(values.map(value => predicate(value).then(result => result ? Promise.resolve(true) : Promise.reject(false))));
  } catch (e) {
    // If the array is empty or all the promises are false, Promise.any will reject an AggregateError
    if (e instanceof AggregateError) return false;
    throw e;
  }
}

/**
 * Async version of Array.filter.
 * If one of the promises rejects, the whole operation will reject.
 * @param values
 * @param predicate
 */
async function asyncFilter(values, predicate) {
  const results = await Promise.all(values.map(predicate));
  return values.filter((_, i) => results[i]);
}
function filterBoolean(values) {
  return values.filter(Boolean);
}
;// ./src/audio/consts.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


const WORKLET_NAME = "mx-voice-worklet";
let PayloadEvent = /*#__PURE__*/function (PayloadEvent) {
  PayloadEvent["Timekeep"] = "timekeep";
  PayloadEvent["AmplitudeMark"] = "amplitude_mark";
  return PayloadEvent;
}({});
const PLAYBACK_WAVEFORM_SAMPLES = 39;
const DEFAULT_WAVEFORM = arraySeed(0, PLAYBACK_WAVEFORM_SAMPLES);
;// ./src/workers/playback.worker.ts



/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



const ctx = self;
ctx.addEventListener("message", async event => {
  const {
    seq,
    data
  } = event.data;

  // First, convert negative amplitudes to positive so we don't detect zero as "noisy".
  const noiseWaveform = data.map(v => Math.abs(v));

  // Then, we'll resample the waveform using a smoothing approach so we can keep the same rough shape.
  // We also rescale the waveform to be 0-1 so we end up with a clamped waveform to rely upon.
  const waveform = arrayRescale(arraySmoothingResample(noiseWaveform, PLAYBACK_WAVEFORM_SAMPLES), 0, 1);
  ctx.postMessage({
    seq,
    waveform
  });
});

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [5980,5005,2101], () => (__webpack_require__("./src/workers/playback.worker.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
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
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "bundles/" + __webpack_require__.h() + "/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			3304: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkelement_web"] = globalThis["webpackChunkelement_web"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([5980,5005,2101].map(__webpack_require__.e, __webpack_require__)).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=playback.worker.js.map