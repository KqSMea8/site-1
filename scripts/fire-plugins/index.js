const fs = require('fs-extra')
const _ = require('lodash')
const utils = require('../utils')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = async function () {
  utils.hint('info', '<plugins> fire start...')
  // 1. 清理目录
  fs.emptyDirSync(utils.getPageDir('plugins'))
  // 2. 解析配置文件
  const data = ymlConfigParser('plugins.yml')
  const results = _.omit(data, ['_default'])
  // 3. 生成 md
  _.forIn(results, function (value, key) {
    require('./generate')({
      key,
      name: value.name || key,
      results
    })
  })
  // 4. 生成首页
  require('./generate')({
    key: 'README',
    name: '插件',
    results
  })
  utils.hint('success', '<plugins> fire success')
}
