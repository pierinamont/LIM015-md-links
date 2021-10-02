#!/usr/bin/env node

import chalk from 'chalk'; // para añadir color al texto
import mdLinks from './mdLinks.js';
// Para poder usar argumentos
const [,, ...args] = process.argv;

// Process nos permite acceder a toda la info de los docs
// args son los argumentos que el usuario escribe en la terminal: md-links 'hola'

// --------------------------- Si se coloca solo ruta ------------------------//
if (args.length === 1) {
  mdLinks(args[0], { validate: false })
    .then((array) => array.map((element) => {
    //   const msg = `${element.file} ${element.href} ${element.text}`;
      const file = chalk.bold.grey.bgWhite(element.file);
      const href = chalk.underline.cyan(element.href);
      const text = chalk.italic.magenta(element.text);

      console.log(`${file} ${href} ${text}`);
      return `${file} ${href} ${text}`;
    }))
    .catch((err) => console.log(err));
}

// --------------------------- Si se coloca ruta y opciones ------------------------//

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
  }
}
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md
