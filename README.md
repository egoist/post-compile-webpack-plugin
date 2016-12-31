# post-compile-webpack-plugin

[![NPM version](https://img.shields.io/npm/v/post-compile-webpack-plugin.svg?style=flat-square)](https://npmjs.com/package/post-compile-webpack-plugin) [![NPM downloads](https://img.shields.io/npm/dm/post-compile-webpack-plugin.svg?style=flat)](https://npmjs.com/package/post-compile-webpack-plugin) [![Build Status](https://img.shields.io/circleci/project/egoist/post-compile-webpack-plugin/master.svg?style=flat)](https://circleci.com/gh/egoist/post-compile-webpack-plugin) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add post-compile-webpack-plugin --dev
```

## Usage

For example, use this to log url after each time the compilation is done.

```js
// webpack.config.js
const PostCompile = require('post-compile-webpack-plugin')

module.exports = {
  plugins: [
    new PostCompile(() => {
      console.log('Your app is running at http://localhost:4000')
    })
  ]
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**post-compile-webpack-plugin** © [EGOIST](https://github.com/EGOIST), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/EGOIST/post-compile-webpack-plugin/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@EGOIST](https://github.com/EGOIST) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
