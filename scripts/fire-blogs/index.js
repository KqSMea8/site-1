const fs = require('fs-extra')
const _ = require('lodash')
const utils = require('../utils')
const {
  ymlConfigParser,
  getFilesConfig
} = require('../widgets/parser')

module.exports = async function () {
  utils.hint('info', '<blogs> fire start...')
  // 1. 清理目录
  fs.emptyDirSync(utils.getPageDir('blogs'))
  // 2. 解析配置文件
  const data = ymlConfigParser('blogs.yml')
  // 3. 生成 README.md
  require('./generate-home')(_.omit(data, ['_default']))
  const results = await getFilesConfig(data)
  // 4. 生成 md
  _.forEach(results, (conf) => {
    require('./generate-detail')(conf)
  })
  utils.hint('success', '<blogs> fire success')
}
