#!/usr/bin/env node

const chalk = require('chalk');
const md = require('./mdLinks.js');
const { statsLinks, brokenLinks } = require('./stats.js');
// Para poder usar argumentos
const [,, ...args] = process.argv;

const helpTxt = 'Try using "--stats", "--validate" or both. If you need more help, use "--help".';
const help = `
**************************************************************************************************
 ____ ____ ____ ____ ________
||h |||e |||l |||p |||       |
||__|||__|||__|||__|||_______|
|/__/|/__/|/__/|/__/|/_______/

The options are the following:

1) '--validate' => To validate each link within the file, get file path, href, OK or FAIL message,
                   link status and text.

2) '--stats' => To get the total number of links and unique links.

3) '--validate --stats' => To get the total number of links, unique links and broken links.

*****************************************************************************************************
`;
// --------------------------- Si no se ingresa algo ------------------------//
if (args.length === 0) {
  const msg = `
     ___________________
    /                   \\
    |  Do not forget to |
    |  enter a path or  |
    |  type --help      |
    \\_________________//
             !  !
             L_ !
            / _)!
           / /__L
     _____/ (____)
            (____)
     _____  (____)
          \\_(____)
             !  !
             |__/
    `;
  console.log(chalk.yellow(msg));
}
// --------------------------- Si se coloca solo ruta ------------------------//
if (args.length === 1) {
  if (args[0] === '--help') {
    console.log(chalk.magenta(help));
  } else {
    md.mdLinks(args[0], { validate: false })
      .then((array) => array.map((element) => {
        const file = chalk.bold.grey(element.file);
        const href = chalk.underline.cyan(element.href);
        const text = chalk.italic.magenta(element.text);

        console.log(`${file}\n${href}\n${text}\n`);
        return `${file} ${href} ${text}`;
      }))
      .catch((err) => console.log(err));
  }
}
// --------------------------- Si se coloca ruta y una opcion ------------------------//

if (args.length === 2) {
  if (args[1] === '--validate') {
    md.mdLinks(args[0], { validate: true })
      .then((array) => array.map((element) => {
        const file = chalk.bold.grey(element.file);
        const href = chalk.underline.cyan(element.href);
        const text = chalk.italic.magenta(element.text);
        const status = chalk.yellow(element.status);
        const statusText = chalk.blue(element.statusText);

        console.log(`${file}\n${href}\n${text}\n${status}\n${statusText}\n`);
        return `${file} ${href} ${text} ${status} ${statusText}`;
      }))
      .catch((err) => console.log(err));
  } else if (args[1] === '--stats') {
    md.mdLinks(args[0], { validate: true })
      .then((array) => {
        console.log(statsLinks(array));
      })
      .catch((err) => console.log(err));
  } else if (args[1] === '--help') {
    console.log(chalk.magenta(help));
  } else {
    console.log(chalk.magenta(helpTxt));
  }
}

// --------------------------- Si se coloca ruta y dos opciones ------------------------//
if (args.length === 3) {
  if ((args[1] === '--validate' && args[2] === '--stats') || (args[1] === '--stats' && args[2] === '--validate')) {
    md.mdLinks(args[0], { validate: true })
      .then((array) => {
        console.log(`${statsLinks(array)}\n${brokenLinks(array)}`);
      })
      .catch((err) => console.log(err));
  } else {
    console.log(chalk.magenta(helpTxt));
  }
}
