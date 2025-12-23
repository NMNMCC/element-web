/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/core-js/internals/object-define-property.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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

/***/ "./node_modules/core-js/modules/web.self.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "./src/workers/blurhash.worker.ts":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/web.self.js
var web_self = __webpack_require__("./node_modules/core-js/modules/web.self.js");
;// ./node_modules/blurhash/dist/esm/index.js
var q=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],x=t=>{let e=0;for(let r=0;r<t.length;r++){let n=t[r],l=q.indexOf(n);e=e*83+l}return e},p=(t,e)=>{var r="";for(let n=1;n<=e;n++){let l=Math.floor(t)/Math.pow(83,e-n)%83;r+=q[Math.floor(l)]}return r};var f=t=>{let e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},h=t=>{let e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.trunc(e*12.92*255+.5):Math.trunc((1.055*Math.pow(e,.4166666666666667)-.055)*255+.5)},F=t=>t<0?-1:1,M=(t,e)=>F(t)*Math.pow(Math.abs(t),e);var d=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}};var C=t=>{if(!t||t.length<6)throw new d("The blurhash string must be at least 6 characters");let e=x(t[0]),r=Math.floor(e/9)+1,n=e%9+1;if(t.length!==4+2*n*r)throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*n*r}`)},N=t=>{try{C(t)}catch(e){return{result:!1,errorReason:e.message}}return{result:!0}},z=t=>{let e=t>>16,r=t>>8&255,n=t&255;return[f(e),f(r),f(n)]},L=(t,e)=>{let r=Math.floor(t/361),n=Math.floor(t/19)%19,l=t%19;return[M((r-9)/9,2)*e,M((n-9)/9,2)*e,M((l-9)/9,2)*e]},U=(t,e,r,n)=>{C(t),n=n|1;let l=x(t[0]),m=Math.floor(l/9)+1,b=l%9+1,i=(x(t[1])+1)/166,u=new Array(b*m);for(let o=0;o<u.length;o++)if(o===0){let a=x(t.substring(2,6));u[o]=z(a)}else{let a=x(t.substring(4+o*2,6+o*2));u[o]=L(a,i*n)}let c=e*4,s=new Uint8ClampedArray(c*r);for(let o=0;o<r;o++)for(let a=0;a<e;a++){let y=0,B=0,R=0;for(let w=0;w<m;w++)for(let P=0;P<b;P++){let G=Math.cos(Math.PI*a*P/e)*Math.cos(Math.PI*o*w/r),T=u[P+w*b];y+=T[0]*G,B+=T[1]*G,R+=T[2]*G}let V=h(y),I=h(B),E=h(R);s[4*a+0+o*c]=V,s[4*a+1+o*c]=I,s[4*a+2+o*c]=E,s[4*a+3+o*c]=255}return s},j=(/* unused pure expression or super */ null && (U));var A=4,D=(t,e,r,n)=>{let l=0,m=0,b=0,g=e*A;for(let u=0;u<e;u++){let c=A*u;for(let s=0;s<r;s++){let o=c+s*g,a=n(u,s);l+=a*f(t[o]),m+=a*f(t[o+1]),b+=a*f(t[o+2])}}let i=1/(e*r);return[l*i,m*i,b*i]},$=t=>{let e=h(t[0]),r=h(t[1]),n=h(t[2]);return(e<<16)+(r<<8)+n},H=(t,e)=>{let r=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[0]/e,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[1]/e,.5)*9+9.5)))),l=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[2]/e,.5)*9+9.5))));return r*19*19+n*19+l},O=(t,e,r,n,l)=>{if(n<1||n>9||l<1||l>9)throw new d("BlurHash must have between 1 and 9 components");if(e*r*4!==t.length)throw new d("Width and height must match the pixels array");let m=[];for(let s=0;s<l;s++)for(let o=0;o<n;o++){let a=o==0&&s==0?1:2,y=D(t,e,r,(B,R)=>a*Math.cos(Math.PI*o*B/e)*Math.cos(Math.PI*s*R/r));m.push(y)}let b=m[0],g=m.slice(1),i="",u=n-1+(l-1)*9;i+=p(u,1);let c;if(g.length>0){let s=Math.max(...g.map(a=>Math.max(...a))),o=Math.floor(Math.max(0,Math.min(82,Math.floor(s*166-.5))));c=(o+1)/166,i+=p(o,1)}else c=1,i+=p(0,1);return i+=p($(b),4),g.forEach(s=>{i+=p(H(s,c),2)}),i},S=O;

;// ./src/workers/blurhash.worker.ts

/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


const ctx = self;
ctx.addEventListener("message", event => {
  const {
    seq,
    imageData
  } = event.data;
  const blurhash = S(imageData.data, imageData.width, imageData.height,
  // use 4 components on the longer dimension, if square then both
  imageData.width >= imageData.height ? 4 : 3, imageData.height >= imageData.width ? 4 : 3);
  ctx.postMessage({
    seq,
    blurhash
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [5980], () => (__webpack_require__("./src/workers/blurhash.worker.ts")))
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
/******/ 			4980: 1
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
/******/ 			return __webpack_require__.e(5980).then(next);
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
//# sourceMappingURL=blurhash.worker.js.map