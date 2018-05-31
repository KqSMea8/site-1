const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')

module.exports = (opts) => {
  const {
    fileName,
    title,
    content
  } = opts
  fs.writeFileSync(
    path.join(utils.getPageDir('tools'), `${fileName}.md`),
    `---
title: ${title}
sidebarDepth: 0
---

${content}
`,
    'utf8',
  )
}
