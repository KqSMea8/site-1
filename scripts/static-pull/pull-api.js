const path = require('path')
const fs = require('fs-extra')
const utils = require('../utils')

const dir = 'api'
const tinyDir = path.resolve(process.cwd(), '.tiny_source_code')
const staticAPITempDir = path.join(process.cwd(), '.static', dir)

module.exports = function () {
  const src = path.join(tinyDir, 'docs')
  fs.emptyDirSync(staticAPITempDir)
  utils.hint(`<${dir}> pull&copy start...`)
  if (!fs.existsSync(src)) {
    require('../fire-api/build-api')()
  }
  fs.copySync(
    `${src}`,
    staticAPITempDir
  )
  utils.hint(`<${dir}> pull&copy finished...`)
  fs.removeSync(tinyDir)
}
