const _ = require('lodash')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = function () {
  const data = ymlConfigParser('examples.yml')
  const result = []
  _.forIn(_.omit(data, ['_default']), function (value, key) {
    result.push(key === 'README' ? '' : key)
  })

  return result
}
