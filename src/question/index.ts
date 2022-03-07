
import inquirer from 'inquirer'
import packageName from './packageName.js'

export default () => {
  return inquirer.prompt([packageName()])
}