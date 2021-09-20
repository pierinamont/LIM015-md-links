import {
  existsSync, stat, readFile, readdir,
} from 'fs';
import * as path from 'path';
import chalk from 'chalk'; // para añadir color al texto

// const directPath = '../validator'; // prueba

// ---------------------- Para saber si el path existe ----------------------------- //
export const isAnExistingPath = (track) => existsSync(track); // true o false
// console.log(isAnExistingPath(directPath)); // prueba

// -------------------- Para saber si el path es absoluto -------------------------- //
export const isAbsolutePath = (track) => path.isAbsolute(track); // true o false
// console.log(isAbsolutePath(directPath)); // prueba

// --------------------- Para convertir el path en absoluto ------------------------ //
export const convertToAbsolute = (track) => path.resolve(track);
// console.log(convertToAbsolute(directPath), chalk.blue('=> de relativa a absoluta')); // prueba

// --------------------- Para saber si el path es un directorio -------------------- //
export const isAdirectory = (track) => {
  stat(track, (error, stats) => {
    if (error) {
      console.error('error para saber si el path es un directorio', error);
    } else {
      console.log(stats.isDirectory()); // true o false
    }
  });
};

// isAdirectory(directPath); // prueba

// --------------------------- Para leer un directorio ------------------------------ //
export const readDirectory = (track) => {
  readdir(track, (err, files) => {
    if (err) {
      console.log('error para leer un directorio', err);
    } else {
      files.forEach((file) => {
        console.log(file, chalk.blue('=> esto hay dentro de una carpeta'));
      });
    }
  });
};
// readDirectory(directPath);

// --------------------------- Para recorrer directorio ? ------------------------------ //
// ...
// ...

// --------------------- Para saber la extensión de un archivo -------------------- //
export const isMdExtension = (track) => path.extname(track); // retorna la extensión
// console.log(isMdExtension(directPath)); // prueba

// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => {
  readFile(track, 'utf-8', (error, data) => {
    if (error) {
      console.log(chalk.red(`Error en archivo md: ${error} `));
    } else {
      console.log(data); // Muestra la data que hay dentro del archivo
    }
  });
};
// console.log(readFileMd(directPath)); // Prueba


// --------------------------- Para ver si hay links ------------------------------ //
// ...
// ...


// --------------------------- Para extraer links en un array ------------------------------ //
// ...
// ...


// --------------------------- option validate: true ------------------------------ //
// ...
// ...

// --------------------------- option validate: false ------------------------------ //
// ...
// ...