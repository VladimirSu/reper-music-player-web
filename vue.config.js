const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0]['process.env'], {
        NODE_HOST: '"http://localhost:8888"', //本地开发环境
        // NODE_HOST: '"http://repermusic.com"',  //生产环境
      });
      return definitions;
    });
  }
})
