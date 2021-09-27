// import { SSL_OP_MICROSOFT_SESS_ID_BUG } from 'constants';
import {
  existsSync, statSync, readFileSync, readdirSync,
} from 'fs';
import * as path from 'path';

// import fetch from 'node-fetch';
// import chalk from 'chalk'; // para añadir color al texto
// import { stat } from 'fs/promises';

// const directPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator.md'; // prueba
// const directPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\fileText.txt';
// const link = 'https://nodsddsaejs.org/';


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



// ----------------------- Para leer un archivo md -------------------------------- //
export const readFileMd = (track) => readFileSync(track, 'utf8');

// --------------------------- Para extraer links en un array ------------------------------ //
// --------------------------- option validate: false ------------------------------ //
export const getLinks = (track) => {
  //Si es una extensión md
  if (isMdExtension(track)) {
    const arrayLinks = [];
    const regex = /(https?:\/\/[^ ]*)/gi;
    const regextext = /\[(.+)\]/gi;

    // match links 
    const links = readFileMd(track).match(regex);

    // match texto
    const linkText = readFileMd(track).match(regextext);
    
    // Obtener links del archivo
    links.forEach((link, i) => {
      // Quitar los saltos de línea(\r\n) de cada link, los paréntesis y comas
      const linksResolve = link.replace(/(\r\n|\n|\r|)/gm, '').replace(/[{()}]/g, '').replace(/,/g, '')
      arrayLinks.push({
            href: linksResolve,
            // Quitar corchetes
            text: linkText[i].replace('[', '').replace(']', ''),
            file: track,
      });
    });
    return arrayLinks
  }
}
console.log(getLinks(process.argv[2]))

// ---------------------- Para ver si links son válidos ----------------------------- //
// --------------------------- option validate: true ------------------------------ //
// const validateLinks = (links) => fetch(links.href)
//   .then((result) => {
//     return {
//       ...links,
//       status: result.status, 
//       statusText: result.statusText
//     }
//   })
//   .catch(() => {
//     return {
//       ...links,
//       status: 'fail', 
//       statusText: 'fail'
//     }
//   })

  // validateLinks(prueba);