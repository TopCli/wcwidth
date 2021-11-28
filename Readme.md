# wcwidth
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/TopCli/wcwidth/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/TopCli/wcwidth/commit-activity)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md
)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/TopCli/wcwidth/blob/master/LICENSE)
![build](https://img.shields.io/github/workflow/status/TopCli/wcwidth/Node.js%20CI)

Determine columns needed for a fixed-size wide-character string

> wcwidth is a simple JavaScript port of [wcwidth](http://man7.org/linux/man-pages/man3/wcswidth.3.html) implemented in C by Markus Kuhn.
>
> JavaScript port [originally](https://github.com/mycoboco/wcwidth.js) written by Woong Jun <woong.jun@gmail.com> (http://code.woong.org/)

## Why

This package is a fork of [wcwidth](https://github.com/timoxley/wcwidth#readme).

- Drop old Node.js version support.
- Drop useless `defaults` package wich introduce an indirect dependencies.
- Cleanup npm tarball (only ship required files).

## Requirements
- [Node.js](https://nodejs.org/en/) v14 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @topcli/wcwidth
# or
$ yarn add @topcli/wcwidth
```

## Usage example

```js
import wcwidth from "@topcli/wcwidth";

'한'.length    // => 1
wcwidth('한');   // => 2

'한글'.length    // => 2
wcwidth('한글'); // => 4
```

`wcwidth()` and its string version, `wcswidth()` are defined by IEEE Std
1002.1-2001, a.k.a. POSIX.1-2001, and return the number of columns used
to represent the given wide character and string.

Markus's implementation assumes the wide character given to those
functions to be encoded in ISO 10646, which is almost true for
JavaScript's characters.

[Further explaination here](https://github.com/timoxley/wcwidth/tree/master/docs)

## API
TBC

## License
MIT
