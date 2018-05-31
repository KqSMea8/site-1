const _ = require('lodash')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = function () {
  const data = ymlConfigParser('playground.yml')
  const result = []
  _.forIn(data, function (value, key) {
    const children = []
    if (value.children) {
      _.forIn(value.children, function (v, k) {
        children.push(`${key}-${k}`)
      })
    }
    if (key === 'README') {
      result.push('')
    } else {
      result.push({
        title: value.name,
        children
      })
    }
  })
  return result
}
