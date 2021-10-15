module.exports = {
  // filenameHashing: false,
  publicPath: './',
  devServer: {
    port: 8001,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        changeOrigin: true
      }
    }
  }
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html'
  //   },
  //   about: {
  //     entry: 'src/about.js',
  //     template: 'public/about.html'
  //   },
  //   product: {
  //     entry: 'src/product.js',
  //     template: 'public/product.html'
  //   }
  // }
}
