const fs = require('fs-extra')
const path = require('path')
const vuepressConfig = require('../../config/config.default')

const staticAPITempDir = path.join(process.cwd(), '.static', 'api')
const distDir = vuepressConfig.dest
const dest = path.join(distDir, 'api')

module.exports = function () {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(staticAPITempDir)
      for (let i = files.length - 1; i >= 0; i--) {
        const file = files[i]
        const {
          ext
        } = path.parse(file)
        if (ext === '.html') {
          const destPath = path.join(dest, file)
          const html = fs.readFileSync(path.join(staticAPITempDir, file), 'utf8')
          const tpl = fs.readFileSync(destPath, 'utf8')
          const content = tpl.replace(`<div class="content custom"></div>`, `<div class="content custom">${html}</div>`)
          fs.writeFileSync(destPath, content)
        }
        if (i === 0) {
          resolve()
        }
      }
    } catch (e) {
      throw new Error(e)
    }
  })
}
