const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')
const defaultConfig = require('../../config/config.default')

module.exports = async function () {
  utils.hint('info', '根据 config 下的 yml 文件生成 vuepress 配置文件...')

  defaultConfig.themeConfig.sidebar['/guide/'] = require('./guide-parser')()
  defaultConfig.themeConfig.sidebar['/playground/'] = require('./playground-parser')()
  defaultConfig.themeConfig.sidebar['/examples/'] = require('./examples-parser')()
  defaultConfig.themeConfig.sidebar['/plugins/'] = require('./plugins-parser')()
  defaultConfig.themeConfig.sidebar['/tools/'] = require('./tools-parser')()
  defaultConfig.themeConfig.sidebar['/blogs/'] = require('./blogs-parser')()

  fs.writeFileSync(
    path.resolve(process.cwd(), 'site', '.vuepress', 'config.js'),
    `module.exports=${JSON.stringify(defaultConfig)}`,
    'utf8',
  )
  utils.hint('success', '配置文件生成成功.')
}
