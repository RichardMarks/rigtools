const path = require('path')

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./build'),
    filename: 'rigtools.js',
    library: 'rigtools',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
