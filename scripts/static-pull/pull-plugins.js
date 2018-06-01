const path = require('path')
const fs = require('fs-extra')
const utils = require('../utils')

const pluginsDir = path.resolve(process.cwd(), '.tiny_plugins')
const staticPluginsTempDir = path.join(process.cwd(), '.static', 'plugins')

module.exports = async function (list) {
  fs.emptyDirSync(pluginsDir)
  fs.emptyDirSync(staticPluginsTempDir)
  for (const item of list) {
    const arr = item.split('^')
    const url = arr[0]
    const dir = arr[1]
    utils.hint(`<${dir}> pull&copy start...`)
    await utils.shellExec(
      `
      cd ${pluginsDir} &&
      curl -L ${url} > ${dir}.zip &&
      unzip -q ${dir}.zip &&
      mv ${dir}-master ${dir} &&
      cd ${dir} &&
      npm install &&
      npm run build &&
      npm run doc
      `,
      true
    )
    for (const uri of ['demo', 'dist', 'docs']) {
      fs.copySync(
        `${path.join(pluginsDir, dir, uri)}`,
        `${path.join(staticPluginsTempDir, dir, uri)}`
      )
    }
    utils.hint(`<${dir}> pull&copy finished.`)
  }
  fs.removeSync(pluginsDir)
}
