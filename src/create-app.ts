import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(import.meta.url)
const templatesDir = path.join(__dirname, '../../', "templates/ts-template")

export function createApp(
  targetPath: string,
  libName?: string
) {
  // const templateDir = path.join(templatesDir, template)
  const templateDir = templatesDir
  console.log(templateDir)
  const isTemplateExit = fs.existsSync(templateDir)

  if (!isTemplateExit) {
    throw `Can't find template`
  }

  const isdirectoryExit = fs.existsSync(targetPath)

  if (!isdirectoryExit) {
    throw `Please Remove existing files and restart`
  }
  copy(templateDir, targetPath)

  if (libName) {
		const pkgJsonPath = path.join(targetPath, "package.json");
		const pkgJson = fs.readFileSync(pkgJsonPath, {encoding: "utf8"});
    function replacer(key: string, value: any) {
      if (key === "name") {
        return libName
      }
      return value;
    }
    const newPackage = JSON.stringify(JSON.parse(pkgJson),replacer,2)
    fs.writeFileSync(pkgJsonPath, newPackage, 'utf8')
	}
}

function copy(src: string, dest: string) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}