#!/usr/bin/env node

// import mdLinks from './mdLinks.js';

// Para poder usar argumentos
const [,, ...args] = process.argv;

// Process nos permite acceder a toda la info de los docs
// argv son los argumentos que el usuario escribe en la terminal: md-links 'hola'

console.log(`hello ${args}`);

// console.log(process, 'PROCESS');
console.log(args, 'ARGS');
console.log(process.argv, 'PROCESS Y ARGV');
console.log(process.title, 'ESTE ES TITULO');
console.log(process.argv.slice(0), 0);
console.log(process.argv.slice(1), 1);
console.log(process.argv.slice(2), 2);
console.log(process.argv.slice(3), 3);
