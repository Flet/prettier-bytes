# prettier-bytes

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/prettier-bytes.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/prettier-bytes
[travis-image]: https://img.shields.io/travis/Flet/prettier-bytes.svg?style=flat-square
[travis-url]: https://travis-ci.org/Flet/prettier-bytes
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Augment pretty-bytes to make the output a little more readable (and a little less precise)

Differences from `pretty-bytes`:
- The fractional portion is cut down to one digit
- If there is more than one digit to the left of the decimal, the fractional portion is removed

## Install

```
npm install prettier-bytes
```

## Usage

```js
var prettierBytes = require('prettier-bytes')

var pretty = prettierBytes(1337)
console.log(pretty)
// logs 1.3 kB
```

Examples from test output:
```bash
  pretty bytes

    ✔ bytes: 2335 -> 2.3 kB
    ✔ bytes: 23552 -> 23 kB
    ✔ bytes: 235520 -> 235 kB
    ✔ bytes: 2355520 -> 2.3 MB
    ✔ bytes: 23555520 -> 23 MB
    ✔ bytes: 235555520 -> 235 MB
    ✔ bytes: 2355555520 -> 2.3 GB
    ✔ bytes: 23555555520 -> 23 GB
    ✔ bytes: 235556555520 -> 235 GB
    ✔ bytes: 2355556655520 -> 2.3 TB
    ✔ bytes: 23555566655520 -> 23 TB
    ✔ bytes: 235555566665520 -> 235 TB

```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE)
