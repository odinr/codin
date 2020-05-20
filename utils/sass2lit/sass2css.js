const fs = require('fs');
const util = require('util');
const path = require('path');

const chalk = require('chalk');

const sass = require('sass');
const nodeSassImport = require('node-sass-import');

const renderSass = util.promisify(sass.render);
const readfileFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const fileLoader = require('./file-loader');

const delimiters = {
  source: /<%\s*source\s*%>/,
  content: /<%\s*content\s*%>/
};

/**
 * 
 * @param {string} cwd 
 * @param {string} tmpl 
 * @param {string} sufix 
 * 
 * @returns processed files Promise<string[]>
 */
async function transpilesFiles(cwd, tmpl, sufix = ".ts") {
  const files = await fileLoader.findSassFiles(cwd);
  try{
    tmpl = tmpl || path.join(__dirname, "sass.tmpl.ts");
    const template = await loadTemplate(tmpl);
    console.log('Loaded template ', chalk.yellowBright(tmpl))
    const convert = file => transpileFile(file, template, file + sufix);
    return Promise.all(files.map(convert));
  } catch(err) {
    console.error(chalk.redBright(err));
  }
  throw Error('Failed to transpile')
}

async function loadTemplate(src) {
  const template = await readfileFile(src, 'utf-8');
  const match = delimiters.content.exec(template);
  if (!match) {
    throw new Error(`Template file did not contain template delimiters`);
  }
  return template;
}

/**
 * 
 * @param {string} sourceFile 
 * @param {string} template 
 * @param {string} outputFile 
 */
async function transpileFile(sourceFile, template, outputFile) {
  const replacement = await sassToCss(sourceFile);
  const newContent = template
    .replace(delimiters.source, sourceFile)
    .replace(delimiters.content, replacement);
  await writeFile(outputFile, newContent, 'utf-8');
  
  console.log(
    chalk.blueBright(path.relative(process.cwd(), sourceFile)), 
    ' => ', 
    chalk.greenBright(path.relative(process.cwd(), outputFile))
  );

  return outputFile;
}

async function sassToCss(sassFile) {
  const result = await renderSass({
    file: sassFile,
    importer: nodeSassImport,
    outputStyle: 'compressed',
  });
  return result.css.toString();
}

exports.transpilesFiles = transpilesFiles;
exports.transpileFile = transpileFile;
exports.sassToCss = sassToCss;
