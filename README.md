# wcwidth
![version](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/TopCli/wcwidth/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/TopCli/wcwidth/commit-activity)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg?style=for-the-badge)](https://github.com/TopCli/wcwidth/blob/master/LICENSE)
[![OpenSSF
Scorecard](https://api.securityscorecards.dev/projects/github.com/TopCli/wcwidth/badge?style=for-the-badge)](https://api.securityscorecards.dev/projects/github.com/TopCli/wcwidth)
![build](https://img.shields.io/github/actions/workflow/status/TopCli/wcwidth/node.js.yml?style=for-the-badge)

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

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt="Gentilhomme"/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/TopCli/wcwidth/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/TopCli/wcwidth/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/TopCli/wcwidth/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/TopCli/wcwidth/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
      <td align="center"><a href="https://github.com/PierreDemailly"><img src="https://avatars.githubusercontent.com/u/39910767?v=4?s=100" width="100px;" alt="PierreDemailly"/><br /><sub><b>PierreDemailly</b></sub></a><br /><a href="https://github.com/TopCli/wcwidth/commits?author=PierreDemailly" title="Code">💻</a> <a href="https://github.com/TopCli/wcwidth/issues?q=author%3APierreDemailly" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
MIT
