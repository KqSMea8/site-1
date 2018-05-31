const fs = require('fs-extra')
const utils = require('../utils')

module.exports = async function () {
  utils.hint('info', '<api> fire start...')
  // 1. 清理目录
  fs.emptyDirSync(utils.getPageDir('api'))
  // 2. 编译 API
  utils.hint('开始执行 jsdoc 生成 API 文档')
  require('./build-api')()
  // 3. 生成 md
  utils.hint('开始创建 <API> 的 Markdown 文件')
  await require('./generate')()
  utils.hint('success', '<api> fire success')
}
