# No New

<!--
First publish:

```sh
npm publish --access public
```
-->

[![npm](https://img.shields.io/npm/v/@dozerg/no-new.svg)](https://www.npmjs.com/package/@dozerg/no-new)
![Downloads](https://img.shields.io/npm/dm/@dozerg/no-new.svg)
[![Build Status](https://github.com/daidodo/no-new/actions/workflows/node.js.yml/badge.svg)](https://github.com/daidodo/no-new/actions)

Convert an ES6 class constructor to a normal function.

# Install

```sh
npm i @dozerg/no-new
```

# Usage

```ts
import noNew from '@dozerg/no-new';

class A {
  constructor(readonly i: number, readonly s: string) {}
}

const AA = noNew(A);

// Instead of calling new A(1, 'hello'), you can use:
const a = AA(1, 'hello');   // a is an object of class A
```

# APIs

## `function noNew<T>(ctor: T): Function`

Accept a class constructor, and return a function which will create an object of the class.

# License

MIT © Zhao DAI <daidodo@gmail.com>
