module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://randomuser.me',
        ws: true,
        changeOrigin: true,
        secure: true,
        logLevel: 'debug'
      }
    }
  },
};
