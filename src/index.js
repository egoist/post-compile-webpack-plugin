module.exports = class PostCompile {
  constructor(fn, options = {onlyFirstTime: false}) {
    this.fn = fn
    this.isFirstCompile = true
    this.options = options
  }

  apply(compiler) {
    const handler = stats => {
      if (this.options.onlyFirstTime && !this.isFirstCompile) {
        return
      }
      if (typeof this.fn === 'function') {
        this.fn(stats)
        this.isFirstCompile = false
      }
    }

    if (compiler.hooks) {
      compiler.hooks.done.tap('post-compile-webpack-plugin', handler)
    } else {
      compiler.plugin('done', handler)
    }
  }
}
