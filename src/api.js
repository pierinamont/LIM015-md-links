import { existsSync, stat } from 'fs';
import * as path from 'path';
// import chalk from 'chalk'; // para añadir color al texto

const directPath = '../validator/validator.md'; // prueba

// ---------------------- Para saber si el path existe ----------------------------- //
const isAnExistingPath = (track) => existsSync(track); // true o false
console.log(isAnExistingPath(directPath)); // prueba

// -------------------- Para saber si el path es absoluto -------------------------- //
const isAbsolutePath = (track) => path.isAbsolute(track); // true o false
console.log(isAbsolutePath(directPath)); // prueba

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
