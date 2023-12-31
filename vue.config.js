const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    // host:'0.0.0.0',
    port: 7000,
    allowedHosts: "all",
    proxy: { // 配置跨域
      '/apis': {
        target: 'http://39.98.124.97/', // 需要代理的地址
        secure: false, // 如果是不是https接口，可以不配置这个参数
        changeOrigin: true,
      },
    }
    // client: {
    //   webSocketURL: 'ws://0.0.0.0:7000/ws',
    // },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
  },

  lintOnSave: false,
  publicPath: '/static/pages/', // 这个指向的地址就是打包后,html文件引用js文件的路径地址.
})