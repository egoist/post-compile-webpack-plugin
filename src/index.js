module.exports = class PostCompile {
  constructor(fn) {
    this.fn = fn
  }

  apply(compiler) {
    const handler = stats => {
      if (typeof this.fn === 'function') {
        this.fn(stats)
      }
    }

    if (compiler.hooks) {
      compiler.hooks.done.tap('post-compile-webpack-plugin', handler)
    } else {
      compiler.plugin('done', handler)
    }
  }
}
