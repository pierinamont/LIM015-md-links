#!/usr/bin/env node

import mdLinks from './mdLinks.js';

// Para poder usar argumentos
const [,, ...args] = process.argv;

// Process nos permite acceder a toda la info de los docs
// args son los argumentos que el usuario escribe en la terminal: md-links 'hola'

// --------------------------- Si se coloca solo ruta ------------------------//
if (args.length === 1) {
  mdLinks(args[0])
    .then((array) => array.map((element) => console.log(`${element.file} ${element.href} ${element.text}`)))
    .catch((err) => console.log(err));
}

// --------------------------- Si se coloca ruta y opciones ------------------------//

if (args.length === 2) {
  mdLinks(args[0], { validate: false })
    .then((links) => console.log(links));
}
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md
