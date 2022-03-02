
import inquirer from 'inquirer'
import packageName from './packageName'

export default () => {
  return inquirer.prompt([packageName()])
}