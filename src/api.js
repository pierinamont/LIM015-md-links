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
export const getFilesFromDirectory = (track) => {
  let arrayFiles = [];
  // si es directorio
  // isAbsolutePath(track);
  if (isAdirectory(track)) {
    // recorrer archivos dentro
    readDirectory(track).forEach((file) => {
      const joinPath = path.join(track, file); // todas la ruta de archivos dentro de la carpeta
      const resolvePath = getFilesFromDirectory(path.resolve(joinPath));
      arrayFiles = arrayFiles.concat(resolvePath);
    });
  } else if (isMdExtension(track)) { // si es archivo md
    // enpuje en un array los archivos md
    arrayFiles.push(track);
  }
  // console.log(arrayFiles);
  // console.log(arrayFiles, 'así termina arrayFiles');
  return arrayFiles;
};
// console.log(getFilesFromDirectory('C:\\Users\\user\\Desktop\\
// LABORATORIA\\LIM015-md-links\\validator\\validator.md'));
// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => readFileSync(track, 'utf8');

// --------------------------- Para extraer links en un array ------------------------------ //
// --------------------------- option validate: false ------------------------------ //
export const getLinks = (track) => {
  const getFilesFromDir = getFilesFromDirectory(track);
  const arrayLinks = [];
  getFilesFromDir.forEach((element) => {
    const completeRegex = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regexLinks = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regextext = /\[([\w\s\d.()]+)\]/g;
    const links = readFileMd(element).match(completeRegex);
    // console.log(links, 5);
    links.forEach((e) => {
      const linksResolve = e.match(regexLinks).join().slice(1, -1);
      // Quitar los los corchetes
      const textResolve = e.match(regextext).join().slice(1, -1);
      arrayLinks.push({
        href: linksResolve,
        // Limitar texto
        text: textResolve.substr(0, 50), // .substr(0, 50)
        file: track,
      });
    });
  });
  // console.log(arrayLinks, 20);
  return arrayLinks;
};

// // const failLink = 'C:\\Users\\user\\Desktop\\
// getLinks('C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator.md');

// ---------------------- Para ver si links son válidos ----------------------------- //
// --------------------------- option validate: true ------------------------------ //
export const validateLinks = (arraylinks) => {
  // Recorrer el obj de arrays que nos brinda 'getLinks'
  // console.log(arrays, 1);
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

// const saveArray = getLinks('C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator');
// // console.log(array, 'esto obtiene validatelinks');
// validateLinks(saveArray);
