const path = require('path')

const dest = path.resolve('site', '.vuepress', 'dist')

module.exports = {
  title: 'Tiny.js',
  description: '一款轻量级 HTML5 2D 游戏引擎',
  dest,
  ga: 'UA-101161440-1',
  themeConfig: {
    algolia: {
      apiKey: 'b23658d51c5050259f4a14b6ca16929e',
      indexName: 'tinyjs'
    },
    nav: [{
      text: '文档',
      link: '/guide/'
    }, {
      text: 'API',
      link: '/api/'
    }, {
      text: 'Playground',
      link: '/playground/'
    }, {
      text: '示例',
      link: '/examples/'
    }, {
      text: '插件',
      link: '/plugins/'
    }, {
      text: '工具',
      link: '/tools/'
    }, {
      text: '博客',
      link: '/blogs/'
    }],
    sidebar: {
      '/guide/': [],
      '/playground/': [],
      '/examples/': [],
      '/plugins/': [],
      '/tools/': [],
      '/blogs/': []
    }
  },
  less: {
    rules: [{
      test: /\.less$/,
      loader: 'less-loader'
    }]
  }
}
