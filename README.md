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

# inheritedEnumerableProperties

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited enumerable property names and [symbols][@stdlib/symbol/ctor].



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
import inheritedEnumerableProperties from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-enumerable-properties@esm/index.mjs';
```

#### inheritedEnumerableProperties( obj\[, level] )

Returns an `array` of an object's inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<!-- eslint-disable id-length -->

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs';

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
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs';
import inherit from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs';

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@esm/index.mjs';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs';
import inheritedEnumerableProperties from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-enumerable-properties@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/enumerable-properties`][@stdlib/utils/enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/enumerable-properties-in`][@stdlib/utils/enumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-enumerable-property-symbols`][@stdlib/utils/inherited-enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-properties`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-properties`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-enumerable-properties/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/esm

<!-- <related-links> -->

[@stdlib/utils/enumerable-properties]: https://github.com/stdlib-js/utils-enumerable-properties/tree/esm

[@stdlib/utils/enumerable-properties-in]: https://github.com/stdlib-js/utils-enumerable-properties-in/tree/esm

[@stdlib/utils/inherited-enumerable-property-symbols]: https://github.com/stdlib-js/utils-inherited-enumerable-property-symbols/tree/esm

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils-inherited-keys/tree/esm

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils-inherited-nonenumerable-properties/tree/esm

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils-inherited-properties/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
