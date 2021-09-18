import { existsSync, stat, readFile } from 'fs';
import * as path from 'path';
// import chalk from 'chalk'; // para añadir color al texto

const directPath = '../validator/validator.md'; // prueba

// ---------------------- Para saber si el path existe ----------------------------- //
const isAnExistingPath = (track) => existsSync(track); // true o false
console.log(isAnExistingPath(directPath)); // prueba

// -------------------- Para saber si el path es absoluto -------------------------- //
const isAbsolutePath = (track) => path.isAbsolute(track); // true o false
console.log(isAbsolutePath(directPath)); // prueba

// --------------------- Para convertir el path en absoluto ------------------------ //
// ...
// ...

// --------------------- Para saber si el path es un directorio -------------------- //
const isAdirectory = (track) => {
  stat(track, (error, stats) => {
    if (error) {
      console.error(error);
    } else {
      console.log(stats.isDirectory()); // true o false
    }
  });
};

isAdirectory(directPath); // prueba

// -------------------- Para ingresar al directorio y recorrerlo ------------------- //
// ...
// ...

// --------------------- Para saber la extensión de un archivo -------------------- //
const isMdExtension = (track) => path.extname(track); // retorna la extensión
console.log(isMdExtension(directPath)); // prueba

// --------------------- Para leer un archivo -------------------- //
const readFileMd = (track) => {
  readFile(track, 'utf-8', (error, data) => {
    if (error) {
      console.log(`Error: ${error} `);
    } else {
      console.log(data); // Muestra la data que hay dentro del archivo
    }
  });
};
readFileMd(directPath); // Prueba
