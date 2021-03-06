const _ = require('lodash')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = function () {
  const data = ymlConfigParser('guide.yml')
  const result = []
  _.forIn(_.omit(data, ['_default']), function (value, key) {
    if (key === 'README') {
      return result.push('')
    }
    if (value.type === 'dir') {
      const title = value.name
      const children = []
      _.forIn(value.nodes, function (v, k) {
        children.push(_.replace(v.path, /\//g, '-'))
      })
      result.push({
        title,
        children
      })
    } else {
      result.push(key)
    }
  })

  return result
}
