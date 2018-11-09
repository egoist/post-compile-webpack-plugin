module.exports = class PostCompile {
  constructor(fn) {
    this.fn = fn
  }

  apply(compiler) {
    var self = this

    const handler = stats => {
      if (typeof this.fn === 'function') {
        setTimeout(() => self.fn(stats))
      }
    }

    if (compiler.hooks) {
      compiler.hooks.done.tap('post-compile-webpack-plugin', handler)
    } else {
      compiler.plugin('done', handler)
    }
  }
}
