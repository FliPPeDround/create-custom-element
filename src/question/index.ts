
import inquirer from 'inquirer'
import packageName from './packageName.js'
import addTypeScript from './addTypeScript.js'
import addJSX from './addJSX.js'

export default () => {
  return inquirer.prompt([
    packageName(),
    addTypeScript(),
    addJSX()
  ])
}