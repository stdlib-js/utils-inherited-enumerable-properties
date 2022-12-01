// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedEnumerableProperties=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&g.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[h],r=d(t,h);try{t[h]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[h]=e:delete t[h],n}:function(t){return v.call(t)},m=Number,O=m.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof m||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}function L(t){return"string"==typeof t}p(x,"isPrimitive",N),p(x,"isObject",k),p(F,"isPrimitive",B),p(F,"isObject",V);var C=String.prototype.valueOf;var G=b();function Y(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function M(t){return L(t)||Y(t)}function X(t){return t!=t}function H(t){return s(t)&&X(t)}function R(t){return _(t)&&X(t.valueOf())}function U(t){return H(t)||R(t)}p(M,"isPrimitive",L),p(M,"isObject",Y),p(U,"isPrimitive",H),p(U,"isObject",R);var W=Object.prototype.propertyIsEnumerable;var D=!W.call("beep","0");function q(t,r){var e;return null!=t&&(!(e=W.call(t,r))&&D&&M(t)?!H(r=+r)&&N(r)&&r>=0&&r<t.length:e)}var z=void 0!==Object.getOwnPropertyNames,J=Object.getOwnPropertyNames;function K(t){return Object.keys(Object(t))}var Q,Z=void 0!==Object.keys;function $(t){return"[object Arguments]"===j(t)}Q=function(){return $(arguments)}();var tt,rt=Q;tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var et,nt=tt;et=rt?$:function(t){return null!==t&&"object"==typeof t&&!nt(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!q(t,"callee")};var ot=et,ut=Array.prototype.slice;function it(t){return null!==t&&"object"==typeof t}var ct=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!nt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(it);p(it,"isObjectLikeArray",ct);var ft=q((function(){}),"prototype"),lt=!q({toString:null},"toString");function at(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function pt(t,r,e){var n,o;if(!at(t)&&!L(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(U(r)){for(;o<n;o++)if(U(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var st=/./;function yt(t){return"boolean"==typeof t}var bt=Boolean.prototype.toString;var vt=b();function gt(t){return"object"==typeof t&&(t instanceof Boolean||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function dt(t){return yt(t)||gt(t)}function ht(){return new Function("return this;")()}p(dt,"isPrimitive",yt),p(dt,"isObject",gt);var jt="object"==typeof self?self:null,mt="object"==typeof window?window:null,Ot="object"==typeof global?global:null;var wt=function(t){if(arguments.length){if(!yt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ht()}if(jt)return jt;if(mt)return mt;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),_t=wt.document&&wt.document.childNodes,St=Int8Array;function Pt(){return/^\s*function\s*([^(]*)/i}var Et=/^\s*function\s*([^(]*)/i;function It(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Et.exec(n.toString()))return r[1]}return it(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(Pt,"REGEXP",Et);var Tt="function"==typeof st||"object"==typeof St||"function"==typeof _t?function(t){return It(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?It(t).toLowerCase():r};function At(t){return t.constructor&&t.constructor.prototype===t}var Nt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],kt="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===Tt(kt))return!1;for(t in kt)try{-1===pt(Nt,t)&&d(kt,t)&&null!==kt[t]&&"object"===Tt(kt[t])&&At(kt[t])}catch(t){return!0}return!1}(),Bt="undefined"!=typeof window;var Vt,Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Vt=Z?function(){return 2!==(K(arguments)||"").length}(1,2)?function(t){return ot(t)?K(ut.call(t)):K(t)}:K:function(t){var r,e,n,o,u,i,c;if(o=[],ot(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!it(t))return o;e=ft&&n}for(u in t)e&&"prototype"===u||!d(t,u)||o.push(String(u));if(lt)for(r=function(t){if(!1===Bt&&!xt)return At(t);try{return At(t)}catch(t){return!1}}(t),c=0;c<Ft.length;c++)i=Ft[c],r&&"constructor"===i||!d(t,i)||o.push(String(i));return o};var Lt,Ct=Vt;Lt=z?function(t){return J(Object(t))}:function(t){return Ct(Object(t))};var Gt,Yt=Lt,Mt=void 0!==Object.getOwnPropertySymbols,Xt=Object.getOwnPropertySymbols;Gt=Mt?function(t){return Xt(Object(t))}:function(){return[]};var Ht=Gt;var Rt,Ut,Wt=Object.getPrototypeOf;Ut=Object.getPrototypeOf,Rt="function"===Tt(Ut)?Wt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Dt=Rt;function qt(t){return null==t?null:(t=Object(t),Dt(t))}function zt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(r,e){var n,o,u,i,c,f,l,a;if(arguments.length>1){if(!B(e))throw new TypeError(zt("0k64I",e));c=e}else c=t;if(null==r)return[];for(u=qt(r),n=[],o={},f=1;u&&f<=c;){for(i=Yt(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&q(u,l)&&n.push(l),o[l]=!0;for(i=Ht(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&q(u,l)&&n.push(l),o[l]=!0;u=qt(u),f+=1}return n}}));
//# sourceMappingURL=index.js.map
