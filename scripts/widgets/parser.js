const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const yaml = require('js-yaml')
const Promise = require('bluebird')
const {
  getFileContent
} = require('./mdpull')

exports.ymlConfigParser = (fileName) => {
  const filePath = path.resolve(process.cwd(), 'config', fileName)
  let content = ''
  try {
    content = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
  } catch (e) {
    throw new Error(e)
  }
  return content
}

exports.assemblyMarkdownConfig = (conf) => {
  const defaults = conf['_default']
  _.forEach(conf, (value, key) => {
    if (value.type === 'dir') {
      const nodes = value.nodes
      nodes.forEach((node) => {
        conf[node.path] = node
        delete node.path
      })
      delete conf[key]
    }
  })

  conf = _.mapValues(
    _.omit(conf, ['_default']),
    (node, key) => _.assign({}, defaults, node, {
      key
    })
  )
  // _.forEach(conf, (node) => {
  //   if (node.type === 'node' && node.source === 'local') {
  //     node.link = path.join(fold, node.link)
  //   }
  // })
  // console.log(conf)

  // const defaults = conf['_default']
  // conf = _.mapValues(
  //   _.omit(conf, ['_default']),
  //   (node, key) => _.assign({}, defaults, node, {
  //     key
  //   })
  // )
  // _.forEach(conf, (node) => {
  //   if (node.type === 'node' && node.source === 'local') {
  //     node.link = path.join(this.local, node.link)
  //   }
  // })
  return conf
}

exports.getFilesConfig = (data) => {
  const conf = this.assemblyMarkdownConfig(data)
  const wrapped = _(conf)
  const map = wrapped
    .pickBy(node => node.type !== 'dir')
    .mapValues(node => getFileContent(node).then(content => _.assign(node, {
      content
    })))
    .value()
  return Promise.props(map).then(result =>
    Promise.props(_.mapValues(result, (node, key) => {
      const fileName = _.replace(key, /\//g, '-')
      return {
        fileName,
        title: node.name,
        content: node.content
      }
    }))
  )
}
