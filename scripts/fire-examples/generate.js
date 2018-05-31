const fs = require('fs-extra')
const path = require('path')
const utils = require('../utils')

module.exports = (data) => {
  const {
    key,
    results
  } = data
  fs.writeFileSync(
    path.join(utils.getPageDir('examples'), `${key}.md`),
    `---
title: ${results[key].name}
layout: ExamplesLayout
examples: ${JSON.stringify(results)}
---
`,
    'utf8',
  )
}
