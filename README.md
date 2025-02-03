<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# inheritedEnumerableProperties

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-inherited-enumerable-properties
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedEnumerableProperties = require( '@stdlib/utils-inherited-enumerable-properties' );
```

#### inheritedEnumerableProperties( obj\[, level] )

Returns an `array` of an object's inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

function Foo() {
    this.a = 'b';
    return this;
}

Foo.prototype.beep = 'boop';

var f = new Foo();
var props = inheritedEnumerableProperties( f );
// returns [ 'beep' ]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var inherit = require( '@stdlib/utils-inherit' );

function Bar() {
    return this;
}

Bar.prototype.boop = 'beep';

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );
Foo.prototype.beep = 'boop';

var f = new Foo();
var pros = inheritedEnumerableProperties( f, 1 );
// returns [ 'beep' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var defineProperty = require( '@stdlib/utils-define-property' );
var inheritedEnumerableProperties = require( '@stdlib/utils-inherited-enumerable-properties' );

var hasSymbols = hasSymbolSupport();
var props;
var obj;

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
        defineProperty( this, 'beep', {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'boop'
        });
    }
    return this;
}

Foo.prototype.c = 'd';
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
    defineProperty( Foo.prototype, Symbol( 'e' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'f'
    });
}

obj = new Foo();
props = inheritedEnumerableProperties( obj );

console.log( props );
// e.g., => [ 'c', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-enumerable-properties`][@stdlib/utils/enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-enumerable-properties-in`][@stdlib/utils/enumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-enumerable-property-symbols`][@stdlib/utils/inherited-enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-nonenumerable-properties`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-properties`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-enumerable-properties.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-enumerable-properties

[test-image]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-enumerable-properties/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-enumerable-properties?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-enumerable-properties.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-enumerable-properties/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-enumerable-properties/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/enumerable-properties]: https://github.com/stdlib-js/utils-enumerable-properties

[@stdlib/utils/enumerable-properties-in]: https://github.com/stdlib-js/utils-enumerable-properties-in

[@stdlib/utils/inherited-enumerable-property-symbols]: https://github.com/stdlib-js/utils-inherited-enumerable-property-symbols

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils-inherited-keys

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils-inherited-properties

<!-- </related-links> -->

</section>

<!-- /.links -->
