module.exports = class PostCompile {
  constructor(fn) {
    this.fn = fn
  }

  apply(compiler) {
    compiler.plugin('done', stats => {
      if (typeof this.fn === 'function') {
        this.fn(stats)
      }
    })
  }
}
