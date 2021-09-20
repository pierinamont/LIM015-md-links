import { SSL_OP_MICROSOFT_SESS_ID_BUG } from 'constants';
import {
  existsSync, statSync, readFileSync, readdirSync,
} from 'fs';
import * as path from 'path';
// import chalk from 'chalk'; // para añadir color al texto

const directPath = '../validator'; // prueba

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
 export const isAdirectory = (track) => statSync(track).isDirectory();
// console.log(isAdirectory('C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated')); // prueba

// --------------------------- Para leer un directorio ------------------------------ //
export const readDirectory = (track) => readdirSync(track);
// console.log(readDirectory(directPath));

// --------------------------- Para recorrer directorio ? ------------------------------ //
// ...
// ...

// --------------------- Para validar si es una extensión de un archivo md -------------------- //
export const isMdExtension = (track) => {
  const isMdExtension = path.extname(track);
  if (isMdExtension === '.md') {
    return true;
  } else {
    return false;
  }
}
console.log(isMdExtension(directPath)); // prueba

// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => readFileSync(track, 'utf8')
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