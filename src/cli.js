#!/usr/bin/env node

import mdLinks from './mdLinks.js';

// Para poder usar argumentos
const [,, ...args] = process.argv;

// Process nos permite acceder a toda la info de los docs
// args son los argumentos que el usuario escribe en la terminal: md-links 'hola'

// console.log(args, 'ARGS');

if (args.length === 1) {
  // si solo se coloca ruta, sin validate
  mdLinks(args[0])
    .then((array) => array.map((element) => console.log(`${element.file} ${element.href} ${element.text}`)))
    .catch((err) => console.log(err));
}

// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator.md
// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md
