// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-enumerable-property@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function d(d,p){var l,j,h,f,v,g,a,u;if(arguments.length>1){if(!t(p))throw new TypeError(m("1UV45",p));v=p}else v=s;if(null==d)return[];for(h=n(d),l=[],j={},g=1;h&&g<=v;){for(f=r(h),u=0;u<f.length;u++)a=f[u],!1===o(j,a)&&e(h,a)&&l.push(a),j[a]=!0;for(f=i(h),u=0;u<f.length;u++)a=f[u],!1===o(j,a)&&e(h,a)&&l.push(a),j[a]=!0;h=n(h),g+=1}return l}export{d as default};
//# sourceMappingURL=index.mjs.map
