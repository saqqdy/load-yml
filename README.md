<div style="text-align: center;" align="center">

# load-yml

Read and parse a .yaml or .yml file

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![tree shaking][tree-shaking-image]][tree-shaking-url]
![typescript][typescript-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[Documentation](https://www.saqqdy.com/load-yml)** • **[Change Log](./CHANGELOG.md)**

</div>

## Installing

```bash
# use pnpm
$ pnpm install load-yml

# use npm
$ npm install load-yml --save

# use yarn
$ yarn add load-yml
```

## Usage

1. use `load-yml` in async mode

```js
import { loadYml } from 'load-yml'

loadYml().then(path => {
  console.log('result is: ', path) // { "name": "saqqdy" }
})
```

2. use `load-yml` in sync mode

```js
import { loadYmlSync } from 'load-yml'

console.log('result is: ', loadYmlSync()) // { "name": "saqqdy" }
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/load-yml/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/load-yml.svg?style=flat-square
[npm-url]: https://npmjs.org/package/load-yml
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/load-yml/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/load-yml&utm_campaign=Badge_Grade
[tree-shaking-image]: https://badgen.net/bundlephobia/tree-shaking/load-yml
[tree-shaking-url]: https://bundlephobia.com/package/load-yml
[typescript-url]: https://badgen.net/badge/icon/typescript?icon=typescript&label
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/load-yml.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/load-yml?branch=master
[download-image]: https://img.shields.io/npm/dm/load-yml.svg?style=flat-square
[download-url]: https://npmjs.org/package/load-yml
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_load-yml
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_load-yml
