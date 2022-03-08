// import { createApp } from './create-app'
import chalk from 'chalk'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { createApp } from './create-app.js'
import questions from './question/index.js'

const __dirname = fileURLToPath(import.meta.url)

try {
  const p = path.join(__dirname,"../../package.json")
  const pkg = JSON.parse(fs.readFileSync(p, {encoding: "utf8"}))
  console.log(`create-custom-element ${chalk.cyanBright('v'+pkg.version)}`)
} catch (e) {
  console.error(e)
}

const answers = await questions()

const cwd = process.cwd()
const targetPath = path.join(cwd, answers.ProjectName)

const template = answers.addTypeScript ? (answers.addJSX ? 'tsx' : 'ts') : (answers.addJSX ? 'jsx' : 'js')

createApp(template, targetPath, answers.ProjectName)

const userAgent = process.env.npm_config_user_agent ?? ''
const packageManager = /pnpm/.test(userAgent) ? 'pnpm' : /yarn/.test(userAgent) ? 'yarn' : 'npm'

console.log(`You are creating ${chalk.greenBright(answers.ProjectName)}.`)
console.log('\nDone. Now run:\n')
switch(packageManager)
{
    case 'npm':
      {
        console.log(chalk.green(`  cd ${answers.ProjectName}`))
        console.log(chalk.green('  npm install'))
        console.log(chalk.green('  npm run dev'))
      }
        break
    case 'yarn':
      {
        console.log(chalk.green(`  cd ${answers.ProjectName}`))
        console.log(chalk.green('  yarn'))
        console.log(chalk.green('  yarn dev'))
      }
        break;
    case 'pnpm':
      {
        console.log(chalk.green(`  cd ${answers.ProjectName}`))
        console.log(chalk.green('  pnpm install'))
        console.log(chalk.green('  pnpm dev'))
      }
        break;
    default:
      {
        console.log(chalk.green(`  cd ${answers.ProjectName}`))
        console.log(chalk.green('  npm install'))
        console.log(chalk.green('  npm run dev'))
      }
}
console.log()
