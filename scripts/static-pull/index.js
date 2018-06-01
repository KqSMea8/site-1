const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')
const {
  ymlConfigParser
} = require('../widgets/parser')

const staticTempDir = path.join(process.cwd(), '.static')

module.exports = async function () {
  utils.hint('info', '远程拉取静态资源...')
  fs.ensureDirSync(staticTempDir)
  // 解析配置文件
  const data = ymlConfigParser('external_resources.yml')

  // utils.hint('info', 'pull api...')
  // require('./pull-api')()

  // utils.hint('info', 'pull playground...')
  // await require('./pull-playground')(data.git.playground)

  // utils.hint('info', 'pull examples...')
  // await require('./pull-examples')(data.git.examples)

  // utils.hint('info', 'pull plugins...')
  // await require('./pull-plugins')(data.git.plugins)

  utils.hint('success', 'all static files has pull.')
}
