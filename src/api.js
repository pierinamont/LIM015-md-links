// import { SSL_OP_MICROSOFT_SESS_ID_BUG } from 'constants';
import {
  existsSync, statSync, readFileSync, readdirSync,
} from 'fs';
import * as path from 'path';

import fetch from 'node-fetch';

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

// --------------------- Para validar si es una extensión de un archivo md -------------------- //
export const isMdExtension = (track) => {
  const extension = path.extname(track);
  if (extension === '.md') {
    return true;
  }
  return false;
};

// --------------------------- Para recorrer directorio  ------------------------------ //
// export const getFilesFromDirectory = (track) => {
//   let arrayFiles = [];
//   // si es directorio
//   if (isAdirectory(track)) {
//     // recorrer archivos dentro
//     readDirectory(track).forEach((file) => {
//       const joinPath = path.join(track, file); // chequear
//       // const resolvePath = path.resolve(joinPath); // ruta resuelta
//       const directoryFiles = getFilesFromDirectory(joinPath);
//       arrayFiles = arrayFiles.concat(directoryFiles);
//       console.log(arrayFiles, 'SI ES DIRECTORIO');
//     });
//   } else if (isMdExtension(track)) { // si es archivo md
//     // enpuje en un array los archivos md
//     arrayFiles.push(track);
//     console.log(arrayFiles.push(track), 'SI ES MD');
//   }
//   console.log(arrayFiles);
//   return arrayFiles;
// };

export const getFilesFromDirectory = (track) => {
  let arrayFiles = [];
  // si es directorio
  if (isAdirectory(track)) {
    // recorrer archivos dentro
    readDirectory(track).forEach((file) => {
      const joinPath = path.join(track, file); // todas la ruta de archivos dentro de la carpeta
      // const resolvePath = path.resolve(joinPath); // ruta resuelta
      if (isAdirectory(joinPath)) { // si la ruta es directorio
        const directoryFiles = getFilesFromDirectory(joinPath);
        arrayFiles = arrayFiles.concat(directoryFiles); // array con archivos md dentro de carpeta
      } else if (isMdExtension(joinPath)) { // si es archivo md
        // enpuje en un array los archivos md
        arrayFiles.push(joinPath);
      }
    });
  }
  console.log(arrayFiles);
  return arrayFiles;
};
getFilesFromDirectory('C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator');

// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => readFileSync(track, 'utf8');

// --------------------------- Para extraer links en un array ------------------------------ //
// --------------------------- option validate: false ------------------------------ //
export const getLinks = (track) => {
  // Si es una extensión md
  if (isMdExtension(track)) {
    const arrayLinks = [];
    const completeRegex = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regexLinks = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regextext = /\[([\w\s\d.()]+)\]/g;
    const links = readFileMd(track).match(completeRegex);
    // Obtener links del archivo
    links.forEach((link) => {
      // Quitar los los paréntesis
      const linksResolve = link.match(regexLinks).join().slice(1, -1);
      // Quitar los los corchetes
      const textResolve = link.match(regextext).join().slice(1, -1);
      arrayLinks.push({
        href: linksResolve,
        // Limitar texto
        text: textResolve.substr(0, 50), // .substr(0, 50)
        file: track,
      });
    });
    return arrayLinks;
  }
  return getLinks; // prueba
};

// const failLink = 'C:\\Users\\user\\Desktop\\
// LABORATORIA\\LIM015-md-links\\validator\\validator.md';
// console.log(getLinks(failLink), 'getLinks con la prueba');

// ---------------------- Para ver si links son válidos ----------------------------- //
// --------------------------- option validate: true ------------------------------ //
export const validateLinks = (arraylinks) => {
  // Recorrer el obj de arrays que nos brinda 'getLinks'
  const array = arraylinks.map((element) => {
    // Acceder al href del objeto
    const fetchPromise = fetch(element.href)
      .then((result) => ({
        href: element.href,
        text: element.text,
        file: element.file,
        status: result.status,
        statusText: result.status >= 200 && result.status <= 399 ? 'Ok' : 'Fail',
      }))
      .catch(() => ({
        href: element.href,
        text: element.text,
        file: element.file,
        status: 'Failed request',
        statusText: 'Fail',
      }));
    // retornar la promesa
    return fetchPromise;
  });
  // console.log(array, 'promesa')
  // retornar el array con la promesa resuelta
  return Promise.all(array);
};

// prueba
// const f = 'C:\\Users\\user\\Desktop\\
// LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md';

// C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator.md

// const array = getLinks(f);
// console.log(array, 'esto obtiene validatelinks');
// validateLinks(array).then((result) => console.log(result, 'función validateLinks'));
