const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')

const tinyDir = path.resolve(process.cwd(), '.tiny_source_code')
const src = path.join(tinyDir, 'docs')

module.exports = () => {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(src)
      for (let i = files.length - 1; i >= 0; i--) {
        const file = files[i]
        const {
          ext,
          name
        } = path.parse(file)
        if (ext === '.html') {
          fs.writeFileSync(
            path.join(utils.getPageDir('api'), `${name}.md`),
            `---
layout: APILayout
---`,
            'utf8',
          )
        }
        if (i === 0) {
          fs.removeSync(tinyDir)
          resolve()
        }
      }
    } catch (e) {
      throw new Error(e)
    }
  })
}
