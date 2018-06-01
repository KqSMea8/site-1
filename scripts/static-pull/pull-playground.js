const path = require('path')
const fs = require('fs-extra')
const utils = require('../utils')

const dir = 'playground'
const playgroundDir = path.resolve(process.cwd(), '.tiny_playground')
const staticPlaygroundTempDir = path.join(process.cwd(), '.static', dir)

module.exports = async function (url) {
  fs.emptyDirSync(playgroundDir)
  fs.emptyDirSync(staticPlaygroundTempDir)
  utils.hint(`<${dir}> pull&copy start...`)
  await utils.shellExec(
    `
    cd ${playgroundDir} &&
    curl -L ${url} > ${dir}.zip &&
    unzip -q ${dir}.zip &&
    mv ${dir}-master ${dir} &&
    cd ${path.join(playgroundDir, dir)} &&
    npm install --silent > npminstall.log &&
    npm run build
    `,
    true
  )
  fs.copySync(
    `${path.join(playgroundDir, dir, 'dist')}`,
    staticPlaygroundTempDir
  )
  utils.hint(`<${dir}> pull&copy finished.`)
  fs.removeSync(playgroundDir)
}
