const fs = require('fs-extra')
const _ = require('lodash')
const utils = require('../utils')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = async function () {
  utils.hint('info', '<playground> fire start...')
  // 1. 清理目录
  fs.emptyDirSync(utils.getPageDir('playground'))
  // 2. 解析配置文件
  const data = ymlConfigParser('playground.yml')
  _.forIn(data, function (value, key) {
    if (value.children) {
      _.forIn(value.children, function (v, k) {
        // 3. 生成 md
        require('./generate')({
          fileName: `${key}-${k}`,
          data,
          title: `${v.name}${v.desc ? ' - ' + v.desc : ''}`
        })
      })
    } else {
      let conf = {
        fileName: `${key}`,
        data,
        title: `${value.name}${value.desc ? ' - ' + value.desc : ''}`
      }
      if (key === 'playground') {
        conf = {
          fileName: `README`,
          data,
          title: `${value.desc}`
        }
      }
      // 3. 生成md
      require('./generate')(conf)
    }
  })
}
