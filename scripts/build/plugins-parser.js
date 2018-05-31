const _ = require('lodash')
const {
  ymlConfigParser
} = require('../widgets/parser')

module.exports = function () {
  const data = ymlConfigParser('plugins.yml')
  const result = ['']
  _.forIn(_.omit(data, ['_default']), function (value, key) {
    result.push(key)
  })

  return result
}
