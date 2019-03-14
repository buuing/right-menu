const path = require('path')

module.exports = {
  // 选择是开发环境还是身产环境 development | production
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js'
  }
}