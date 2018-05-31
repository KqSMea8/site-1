const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')

module.exports = (data) => {
  const {
    key,
    name,
    results
  } = data
  fs.writeFileSync(
    path.join(utils.getPageDir('plugins'), `${key}.md`),
    `---
layout: PluginsLayout
title: ${name}
sidebar: false
plugins: ${JSON.stringify(results)}
---
`,
    'utf8',
  )
}
