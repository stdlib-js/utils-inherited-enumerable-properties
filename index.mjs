// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-enumerable-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function d(d,p){var l,j,h,f,g,a,u,b;if(arguments.length>1){if(!t(p))throw new TypeError(m("0k64I",p));g=p}else g=s;if(null==d)return[];for(h=n(d),l=[],j={},a=1;h&&a<=g;){for(f=r(h),b=0;b<f.length;b++)u=f[b],!1===o(j,u)&&e(h,u)&&l.push(u),j[u]=!0;for(f=i(h),b=0;b<f.length;b++)u=f[b],!1===o(j,u)&&e(h,u)&&l.push(u),j[u]=!0;h=n(h),a+=1}return l}export{d as default};
//# sourceMappingURL=index.mjs.map
