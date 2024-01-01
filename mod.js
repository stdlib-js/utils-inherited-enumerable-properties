// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var S=String.fromCharCode,_=isNaN,E=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,f,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function V(r){var e,t,n;if(!A(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=F;function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&U.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var q=M()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[D],e=H(r,D);try{r[D]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[D]=t:delete r[D],n}:function(r){return Y.call(r)},J=Number,K=J.prototype.toString;var Q=M();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function er(r){return X(r)||rr(r)}W(er,"isPrimitive",X),W(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ar(r){return r<tr&&r>nr&&or(r)}function ur(r){return X(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>0}function sr(r){return cr(r)&&r.valueOf()>0}function pr(r){return lr(r)||sr(r)}function gr(r){return"string"==typeof r}W(fr,"isPrimitive",ur),W(fr,"isObject",cr),W(pr,"isPrimitive",lr),W(pr,"isObject",sr);var yr=String.prototype.valueOf;var dr=M();function br(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function hr(r){return gr(r)||br(r)}function vr(r){return r!=r}function wr(r){return X(r)&&vr(r)}function mr(r){return rr(r)&&vr(r.valueOf())}function jr(r){return wr(r)||mr(r)}W(hr,"isPrimitive",gr),W(hr,"isObject",br),W(jr,"isPrimitive",wr),W(jr,"isObject",mr);var Or=Object.prototype.propertyIsEnumerable;var Sr=!Or.call("beep","0");function _r(r,e){var t;return null!=r&&(!(t=Or.call(r,e))&&Sr&&hr(r)?!wr(e=+e)&&ur(e)&&e>=0&&e<r.length:t)}var Er=void 0!==Object.getOwnPropertyNames,kr=Object,Tr=kr.getOwnPropertyNames;function xr(r){return Object.keys(Object(r))}var Ir=void 0!==Object.keys;function Pr(r){return"[object Arguments]"===q(r)}var Ar,Vr=function(){return Pr(arguments)}();Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var Fr,Nr=Ar;Fr=Vr?Pr:function(r){return null!==r&&"object"==typeof r&&!Nr(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=4294967295&&H(r,"callee")&&!_r(r,"callee")};var $r=Fr,Cr=Array.prototype.slice;function Br(r){return null!==r&&"object"==typeof r}var Lr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Nr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Br);W(Br,"isObjectLikeArray",Lr);var Rr=_r((function(){}),"prototype"),Gr=!_r({toString:null},"toString");function Wr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=9007199254740991}function Xr(r,e,t){var n,i;if(!Wr(r)&&!gr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ur(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(jr(e)){for(;i<n;i++)if(jr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Zr=/./;function Mr(r){return"boolean"==typeof r}var Yr=Boolean,Ur=Boolean.prototype.toString;var Hr=M();function zr(r){return"object"==typeof r&&(r instanceof Yr||(Hr?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Dr(r){return Mr(r)||zr(r)}function qr(){return new Function("return this;")()}W(Dr,"isPrimitive",Mr),W(Dr,"isObject",zr);var Jr="object"==typeof self?self:null,Kr="object"==typeof window?window:null,Qr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},re="object"==typeof Qr?Qr:null,ee="object"==typeof globalThis?globalThis:null;var te=function(r){if(arguments.length){if(!Mr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return qr()}if(ee)return ee;if(Jr)return Jr;if(Kr)return Kr;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,ie=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;function ue(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return Br(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(oe,"REGEXP",ae);var ce="function"==typeof Zr||"object"==typeof ie||"function"==typeof ne?function(r){return ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ue(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],se="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===ce(se))return!1;for(r in se)try{-1===Xr(le,r)&&H(se,r)&&null!==se[r]&&"object"===ce(se[r])&&fe(se[r])}catch(r){return!0}return!1}(),ge="undefined"!=typeof window;var ye,de=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ye=Ir?function(){return 2!==(xr(arguments)||"").length}(1,2)?function(r){return $r(r)?xr(Cr.call(r)):xr(r)}:xr:function(r){var e,t,n,i,o,a,u;if(i=[],$r(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!H(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Br(r))return i;t=Rr&&n}for(o in r)t&&"prototype"===o||!H(r,o)||i.push(String(o));if(Gr)for(e=function(r){if(!1===ge&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),u=0;u<de.length;u++)a=de[u],e&&"constructor"===a||!H(r,a)||i.push(String(a));return i};var be,he=ye;be=Er?function(r){return Tr(kr(r))}:function(r){return he(kr(r))};var ve,we=be,me=void 0!==Object.getOwnPropertySymbols,je=kr.getOwnPropertySymbols;ve=me?function(r){return je(kr(r))}:function(){return[]};var Oe=ve;var Se,_e,Ee=Object.getPrototypeOf;_e=Object.getPrototypeOf,Se="function"===ce(_e)?Ee:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ke=Se;function Te(r){return null==r?null:(r=kr(r),ke(r))}function xe(r,e){var t,n,i,o,a,u,c,f;if(arguments.length>1){if(!lr(e))throw new TypeError(V("invalid argument. Second argument must be a positive integer. Value: `%s`.",e));a=e}else a=9007199254740991;if(null==r)return[];for(i=Te(r),t=[],n={},u=1;i&&u<=a;){for(o=we(i),f=0;f<o.length;f++)!1===H(n,c=o[f])&&_r(i,c)&&t.push(c),n[c]=!0;for(o=Oe(i),f=0;f<o.length;f++)!1===H(n,c=o[f])&&_r(i,c)&&t.push(c),n[c]=!0;i=Te(i),u+=1}return t}export{xe as default};
//# sourceMappingURL=mod.js.map
