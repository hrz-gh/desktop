module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: 'https://hrz-gh.github.io/desktop/',
  outputDir: './docs',
  devServer:{
    host:'0.0.0.0',
    proxy:{
      "/dev":{
        target:"http://127.0.0.1:8079",
        changeOrigin:true,
        pathRewrite:{
          '^/dev':''
        }
      }
    },
  },
  productionSourceMap: false,
  pwa:{
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}
