const fs = require('fs-extra')
const path = require('path')
const util = require('../utils')

const tinyGit = 'git@gitlab.alipay-inc.com:tiny/tiny.git'
const tinyDir = path.resolve(process.cwd(), '.tiny_source_code')
const jsdocTemplateDir = path.resolve(process.cwd(), 'helpers/jsdoc-template')

module.exports = async function () {
  const src = path.join(tinyDir, 'docs')
  let cmd = ''
  if (fs.existsSync(src)) {
    cmd = `echo docs exist.`
  } else {
    cmd =
      `
    rm -rf ${tinyDir} &&
    git clone ${tinyGit} ${tinyDir} &&
    cd ${tinyDir} &&
    npm install &&
    cp -R ${path.join(jsdocTemplateDir, '*')} ${path.join(tinyDir, 'node_modules', 'jaguarjs-jsdoc')} &&
    tnpm run doc
    `
  }
  await util.shellExec(cmd, true)
}
