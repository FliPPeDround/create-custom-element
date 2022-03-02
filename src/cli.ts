// import { createApp } from './create-app'
import chalk from 'chalk'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import questions from './question/index'

const __dirname = fileURLToPath(import.meta.url)

try {
  const p = path.join(__dirname,"../../package.json")
  const pkg = JSON.parse(fs.readFileSync(p, {encoding: "utf8"}))
  console.log(`create-custom-element ${chalk.cyanBright('v'+pkg.version)}`)
} catch (e) {
  console.error(e)
}

const answers = await questions()

console.log(chalk.cyanBright('You are creating an custom element.'))
// const answers = {
//   template,
//   directory,
//   lib: undefined,
//   ...(await inquirer.prompt(questions))
// }

// const cwd = process.cwd()
// const targetPath = path.join(cwd, answers.directory)
// createApp(answers.template, targetPath, answers.lib)
console.log(chalk.green('\nDone. Now run:\n'))
// if (targetPath !== cwd) {
//   console.log(`  cd ${path.relative(cwd, targetPath)}`)
// }
console.log(chalk.green('  npm i'))
console.log()
