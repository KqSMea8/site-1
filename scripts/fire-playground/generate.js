const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')

module.exports = (opts) => {
  const {
    fileName,
    data,
    title
  } = opts
  const keys = fileName.split('-')
  const key = data[keys[0]]
  const url = key['children'] ? key['children'][keys[1]].url : key.url
  fs.writeFileSync(
    path.join(utils.getPageDir('playground'), `${fileName}.md`),
    `---
title: ${title}
layout: PlaygroundLayout
showSidebar: true
url: ${url}
---
`,
    'utf8',
  )
}
