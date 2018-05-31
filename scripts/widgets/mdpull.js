const rp = require('request-promise')

const serverDomain = 'http://luna.dockerlab.alipay.net'

exports.getFileContent = (node) => {
  switch (node.source) {
  case 'gitlab':
  {
    const results = node.link.split(':')
    const projectId = results[0]
    const filePath = results[1] || 'README.md'
    return getGitlabFile(node, projectId, filePath)
  }
  case 'github':
  {
    const results = node.link.split(':')
    const projectId = results[0]
    const filePath = results[1] || 'README.md'
    return getGithubFile(node, projectId, filePath)
  }
  case 'lark':
  {
    const results = node.link.split(':')
    const projectId = results[0]
    const filePath = results[1]
    return getLarkFile(node, projectId, filePath)
  }
  default:
  {
    return new Promise((resolve, reject) => {
      console.error(`<${node.key}> 的source值无效`)
      reject(new Error('node类型不合法！'))
    })
  }
  }
}

function getGitFile (APIName, node, projectId, filePath) {
  return rp({
    uri: `${serverDomain}/api/${APIName}?projectId=${projectId}&filePath=${filePath}`,
    transform: function (body) {
      let result
      try {
        result = JSON.parse(body)
        if (result.errorMessage) {
          console.error(`<${node.key}> ${result.errorMessage}`)
          return result.errorMessage
        }
      } catch (e) {
        console.error(`<${node.key}> parse error`)
        result = 'parse error'
      }
      return result.content
    }
  })
}

function getLarkFile (node, projectId, filePath) {
  return rp({
    uri: `${serverDomain}/api/getMarkdownFromLark?projectId=${projectId}&filePath=${filePath}`,
    transform: function (body) {
      let result
      try {
        result = JSON.parse(body)
        if (result.errorMessage) {
          console.error(`<${node.key}> ${result.errorMessage}`)
          return result.errorMessage
        }
      } catch (e) {
        console.error(`<${node.key}> parse error`)
        result = 'parse error'
      }
      return `# ${result.title} \n${result.body}`
    }
  })
};

function getGitlabFile (node, projectId, filePath) {
  return getGitFile('getMarkdownFromGitlab', node, projectId, filePath)
}

function getGithubFile (node, projectId, filePath) {
  return getGitFile('getMarkdownFromGithub', node, projectId, filePath)
}
