const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')
const vuepressConfig = require('../../config/config.default')

const staticTempDir = path.join(process.cwd(), '.static')
const distDir = vuepressConfig.dest
const staticDir = path.join(distDir, 'static')

module.exports = async function () {
  utils.hint('info', '开始编译后的操作...')

  utils.hint('info', 'copy <api>...')
  await require('./copy-api')()

  for (const item of ['playground', 'examples', 'plugins']) {
    utils.hint('info', `copy <${item}> start....`)
    fs.copySync(path.join(staticTempDir, item), path.join(staticDir, item))
    utils.hint('success', `copy <${item}> success.`)
  }
}
