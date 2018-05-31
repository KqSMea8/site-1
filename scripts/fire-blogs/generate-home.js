const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')

module.exports = (data) => {
  fs.writeFileSync(
    path.join(utils.getPageDir('blogs'), `README.md`),
    `---
title: ❮ 博客
layout: BlogsLayout
blogs: ${JSON.stringify(data)}
---
`,
    'utf8',
  )
}
