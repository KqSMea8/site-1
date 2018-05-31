const fs = require('fs-extra')
const _ = require('lodash')
const utils = require('../utils')
const {
  ymlConfigParser,
  getFilesConfig
} = require('../widgets/parser')

module.exports = async function () {
  utils.hint('info', '<tools> fire start...')
  // 1. 清理目录
  fs.emptyDirSync(utils.getPageDir('tools'))
  // 2. 解析配置文件
  const data = ymlConfigParser('tools.yml')
  const results = await getFilesConfig(data)
  // 3. 生成 md
  _.forEach(results, (conf) => {
    require('./generate')(conf)
  })
  utils.hint('success', '<tools> fire success')
}
