#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const commands = [{
  name: 'build',
  description: 'build'
}, {
  name: 'static-pull',
  description: 'static pull'
}, {
  name: 'post-build',
  description: 'post build'
}, {
  name: 'fire-guide',
  description: 'fire guide'
}, {
  name: 'fire-api',
  description: 'fire api'
}, {
  name: 'fire-playground',
  description: 'fire playground'
}, {
  name: 'fire-examples',
  description: 'fire examples'
}, {
  name: 'fire-plugins',
  description: 'fire plugins'
}, {
  name: 'fire-tools',
  description: 'fire tools'
}, {
  name: 'fire-blogs',
  description: 'fire blogs'
}]

program
  .usage('<command> [options]'.green)

commands.forEach((opt) => {
  const cmd = program
    .command(opt.name, '')
    .description(chalk.yellow(opt.description));

  (opt.options || []).forEach((o) => {
    cmd.option(o.name, o.description)
  })

  cmd.action(function () {
    doCommand(Array.prototype.slice.call(process.argv, 2))
  })
})

if (!process.argv.slice(2).length) {
  program.help()
}

program.parse(process.argv)

function doCommand (cmd) {
  const com = cmd[0]
  require(`./${com}`)()
}
