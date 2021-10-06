#!/usr/bin/env node

import chalk from 'chalk'; // para añadir color al texto
import mdLinks from './mdLinks.js';
import { statsLinks, brokenLinks } from './stats.js';

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
    mdLinks(args[0], { validate: false })
      .then((array) => array.map((element) => {
        const file = chalk.bold.grey.bgWhite(element.file);
        const href = chalk.underline.cyan(element.href);
        const text = chalk.italic.magenta(element.text);

        console.log(`${file} ${href} ${text}`);
        return `${file} ${href} ${text}`;
      }))
      .catch((err) => console.log(err));
  }
}
// --------------------------- Si se coloca ruta y una opcion ------------------------//

if (args.length === 2) {
  if (args[1] === '--validate') {
    mdLinks(args[0], { validate: true })
      .then((array) => array.map((element) => {
        const file = chalk.bold.grey.bgWhite(element.file);
        const href = chalk.underline.cyan(element.href);
        const text = chalk.italic.magenta(element.text);
        const status = chalk.yellow(element.status);
        const statusText = chalk.blue(element.statusText);

        console.log(`${file} ${href} ${text} ${status} ${statusText}`);
        return `${file} ${href} ${text} ${status} ${statusText}`;
      }))
      .catch((err) => console.log(err));
  } else if (args[1] === '--stats') {
    mdLinks(args[0], { validate: true })
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
    mdLinks(args[0], { validate: true })
      .then((array) => {
        console.log(`${statsLinks(array)}\n${brokenLinks(array)}`);
      })
      .catch((err) => console.log(err));
  } else {
    console.log(chalk.magenta(helpTxt));
  }
}

// Rutas de prueba

// ---------------------------- archivos md ------------------------------- //
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator.md
// C:\\Users\\user\\Desktop\\LABORATORIA\\
// LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md
// ---------------------------- directorio ------------------------------- //
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator
