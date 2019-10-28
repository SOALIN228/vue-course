const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/vue' : '/' // 项目生产环境执行在域名 /vue 下，开发环境为 /

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false, // 打包不生成 .map
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
