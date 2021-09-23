// import { SSL_OP_MICROSOFT_SESS_ID_BUG } from 'constants';
import {
  existsSync, statSync, readFileSync, readdirSync, readdir,
} from 'fs';
import * as path from 'path';
// import chalk from 'chalk'; // para añadir color al texto
// import { stat } from 'fs/promises';

const directPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator'; // prueba
// const directPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\fileText.txt';
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

// --------------------- Para validar si es una extensión de un archivo md -------------------- //
export const isMdExtension = (track) => {
  const isMdExtension = path.extname(track);
  if (isMdExtension === '.md') {
    return true;
  } else {
    return false;
  }
}

// --------------------------- Para recorrer directorio  ------------------------------ //
export const getFilesFromDirectory = (track) => {
  let arrayFiles = [];
  // si es directorio
  if (isAdirectory(track)) {
    // recorrer archivos dentro
    readDirectory(track).forEach((file) => {
      const joinPath = path.join(track, file) // chequear
      const resolvePath = path.resolve(joinPath); // ruta resuelta
      const directoryFiles = getFilesFromDirectory(resolvePath);
      arrayFiles.push(directoryFiles);
    });
  } else if (isMdExtension(track)) { // si es archivo md
    // enpuje en un array los archivos md
    arrayFiles.push(track); 
  }
  return arrayFiles;
}

console.log(getFilesFromDirectory(directPath));

// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => readFileSync(track, 'utf8')
// console.log(readFileMd(directPath))
// export const readFileMd = (track) => {
//   if(isMdExtension(track)) {
//     readFileSync(track, 'utf8');
//   } else {
//     console.log('El archivo no es .md')
//   }
// }
// readFileMd(directPath);
// --------------------------- Para extraer links en un array ------------------------------ //
const getLinks = (track) => {
  // const arrayLinks = [];
  const regex = /(https?:\/\/[^ ]*)/;
  // Si es una extensión md
  if (isMdExtension(track)) {
    // Obtener links del archivo
    const links = readFileMd(track).match(regex)[1];
    console.log(links);
  }
}

getLinks(directPath);
// --------------------------- option validate: true ------------------------------ //
// ...
// ...

// --------------------------- option validate: false ------------------------------ //
// ...
// ...