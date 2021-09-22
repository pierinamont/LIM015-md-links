// import { SSL_OP_MICROSOFT_SESS_ID_BUG } from 'constants';
import {
  existsSync, statSync, readFileSync, readdirSync, readdir,
} from 'fs';
import * as path from 'path';
// import chalk from 'chalk'; // para añadir color al texto
// import { stat } from 'fs/promises';

const directPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator.md'; // prueba

// ---------------------- Para saber si el path existe ----------------------------- //
export const isAnExistingPath = (track) => existsSync(track); // true o false

// -------------------- Para saber si el path es absoluto -------------------------- //
export const isAbsolutePath = (track) => path.isAbsolute(track); // true o false

// --------------------- Para convertir el path en absoluto ------------------------ //
export const convertToAbsolute = (track) => path.resolve(track);

// --------------------- Para saber si el path es un directorio -------------------- //
 export const isAdirectory = (track) => statSync(track).isDirectory();

// --------------------------- Para leer un directorio ------------------------------ //
export const readDirectory = (track) => readdirSync(track);
// console.log(readDirectory(directPath));

// --------------------------- Para recorrer directorio  ------------------------------ //
export const getFilesFromDirectory = (track) => {
  let arrayFiles = [];
  // si es directorio
  if (isAdirectory(track)) {
    // recorrer archivos dentro
    readDirectory(track).forEach((files) => {
    const resolvePath = path.resolve(track + '/' + files); // ruta resuelta
    const directoryFiles = getFilesFromDirectory(resolvePath);
   // console.log(directoryFiles, 'este es un console');
    arrayFiles.push(directoryFiles);
    });
    
  } else {
    arrayFiles.push(track); // enpuje en un array los archivo
  }
  return arrayFiles;
}

console.log(getFilesFromDirectory(directPath));

// --------------------- Para validar si es una extensión de un archivo md -------------------- //
export const isMdExtension = (track) => {
  const isMdExtension = path.extname(track);
  if (isMdExtension === '.md') {
    return true;
  } else {
    return false;
  }
}

// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => readFileSync(track, 'utf8')

// --------------------------- Para extraer links en un array ------------------------------ //
// ...
// ...


// --------------------------- option validate: true ------------------------------ //
// ...
// ...

// --------------------------- option validate: false ------------------------------ //
// ...
// ...