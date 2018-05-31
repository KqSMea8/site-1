const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')

exports.getPageDir = (dirname) => {
  return path.resolve(process.cwd(), 'site', dirname)
}

exports.shellExec = (cmd, silent) => {
  return new Promise((resolve, reject) => {
    try {
      const ret = shell.exec(cmd, {
        silent
      })
      // console.log(ret);
      if (ret.code === 0) {
        resolve(ret)
      } else {
        throw new Error(ret.stderr)
      }
    } catch (e) {
      throw new Error(e)
    }
  })
}

exports.hint = (type, msg) => {
  if (!msg) {
    msg = type
  }
  switch (type) {
  case 'error':
    console.log(chalk.red('[错误] ') + msg)
    break
  case 'success':
    console.log(chalk.green('[成功] ') + msg)
    break
  case 'info':
    console.log(chalk.cyan('[提示] ') + msg)
    break
  case 'warn':
    console.log(chalk.yellow('[警告] ') + msg)
    break
  default:
    console.log(chalk.grey(`${msg}`))
  }
}
