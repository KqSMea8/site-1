const fs = require('fs-extra')
const _ = require('lodash')
const utils = require('../utils')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = async function () {
  utils.hint('info', '<examples> fire start...')
  // 1. 清理目录
  fs.emptyDirSync(utils.getPageDir('examples'))
  // 2. 解析配置文件
  const data = ymlConfigParser('examples.yml')
  const results = _.mapValues(
    _.omit(data, ['_default']),
    (node, key) => _.assign({}, data['_default'], node, {
      key
    })
  )
  // 3. 生成 md
  _.forIn(results, function (value, key) {
    require('./generate')({
      key,
      results
    })
  })
  utils.hint('success', '<examples> fire success')
}
