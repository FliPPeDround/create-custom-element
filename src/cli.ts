import cac from 'cac'
import { createApp } from './create-app'
import inquirer from 'inquirer'
import chalk from 'chalk'
import path from 'path'
import fs from 'fs'

const cli = cac()

cli.option("-t", "Choose it")

try {
  const p = path.join(__dirname,"../package.json")
  const pkg = JSON.parse(fs.readFileSync(p, {encoding: "utf8"}))
  console.log(`create-custom-element${pkg.version}`)
} catch (e) {
  console.error(e)
}

const parsed = cli.parse()

const directory = parsed.args[0]
const template = parsed.options["template"]

const questions: inquirer.QuestionCollection[] = []

if(!directory) {
  questions.push({
    type: 'input',
    name: 'directory',
    message: 'Please enter a directory',
    default: './customElement'
  })
}