const path = require('path')
const fs = require('fs-extra')
const utils = require('../utils')

const examplesDir = path.resolve(process.cwd(), '.tiny_examples')
const staticExamplesTempDir = path.join(process.cwd(), '.static', 'examples')

module.exports = async function (list) {
  fs.emptyDirSync(examplesDir)
  fs.emptyDirSync(staticExamplesTempDir)
  for (const item of list) {
    const arr = item.split('^')
    const url = arr[0]
    const dir = arr[1]
    const build = (arr[2] === 'build')
    utils.hint(`<${dir}> pull&copy start...`)
    await utils.shellExec(
      `
      cd ${examplesDir} &&
      curl -L ${url} > ${dir}.zip &&
      unzip -q ${dir}.zip &&
      mv ${dir}-master ${dir}
      `,
      true
    )
    if (build) {
      await utils.shellExec(`cd ${path.join(examplesDir, dir)} && tnpm install && tnpm run build`, true)
      fs.copySync(
        `${path.join(examplesDir, dir, 'dist')}`,
        `${path.join(staticExamplesTempDir, dir)}`
      )
    } else {
      fs.copySync(
        `${path.join(examplesDir, dir)}`,
        `${path.join(staticExamplesTempDir, dir)}`, {
          filter: (src, dest) => {
            const {
              base,
              name
            } = path.parse(src)
            if (/^\..+/i.test(name) || /(package\.json|.+\.md|.+\.config\.js|.?gulpfile\.js)$/i.test(base)) {
              return false
            }
            return true
          }
        }
      )
    }
    utils.hint(`<${dir}> pull&copy finished.`)
  }
  fs.removeSync(examplesDir)
}
