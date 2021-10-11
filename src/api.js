const fs = require('fs');

const path = require('path');

const fetch = require('node-fetch');

// ---------------------- Para saber si el path existe ----------------------------- //
const isAnExistingPath = (track) => fs.existsSync(track); // true o false

// -------------------- Para saber si el path es absoluto -------------------------- //
const isAbsolutePath = (track) => path.isAbsolute(track); // true o false

// --------------------- Para convertir el path en absoluto ------------------------ //
const convertToAbsolute = (track) => path.resolve(track);

// --------------------- Para saber si el path es un directorio -------------------- //
const isAdirectory = (track) => fs.statSync(track).isDirectory();

// --------------------------- Para leer un directorio ------------------------------ //
const readDirectory = (track) => fs.readdirSync(track);

// --------------------- Para validar si es una extensión de un archivo md -------------------- //
const isMdExtension = (track) => {
  const extension = path.extname(track);
  if (extension === '.md') {
    return true;
  }
  return false;
};

// --------------------------- Para recorrer directorio  ------------------------------ //
const getFilesFromDirectory = (track) => {
  let arrayFiles = [];
  // si es directorio
  if (isAdirectory(track)) {
    // recorrer archivos dentro
    readDirectory(track).forEach((file) => {
      // une ruta con cada archivo => \\validator\\file.md
      const joinPath = path.join(track, file);
      // da una URL absoluta, y usará su directorio de trabajo como base para resolver la ruta
      const resolvePath = getFilesFromDirectory(path.resolve(joinPath));
      // une todas las rutas encontradas en un array
      arrayFiles = arrayFiles.concat(resolvePath);
    });
  } else if (isMdExtension(track)) { // si es archivo md
    // enpuje en un array los archivos md
    arrayFiles.push(track);
  }
  return arrayFiles;
};
// ----------------------- Para leer un archivo md -------------------------------- //
const readFileMd = (track) => fs.readFileSync(track, 'utf8');

// --------------------------- Para extraer links en un array ------------------------------ //
// --------------------------- option validate: false ------------------------------ //
const getLinks = (track) => {
  const getFilesFromDir = getFilesFromDirectory(track);
  const arrayLinks = [];
  getFilesFromDir.forEach((element) => {
    const completeRegex = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regexLinks = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
    const regextext = /\[([\w\s\d.()]+)\]/g;
    // Obtener texto y links => [texto](link)
    const links = readFileMd(element).match(completeRegex);
    // console.log(links, 5);
    links.forEach((e) => {
      // unir los links y quitar paréntesis
      const linksResolve = e.match(regexLinks).join().slice(1, -1);
      // Quitar los los corchetes
      const textResolve = e.match(regextext).join().slice(1, -1);

      arrayLinks.push({
        href: linksResolve,
        // Limitar texto
        text: textResolve.substr(0, 50),
        file: track,
      });
    });
  });
  // console.log(arrayLinks, 20);
  return arrayLinks;
};

// ---------------------- Para ver si links son válidos ----------------------------- //
// --------------------------- option validate: true ------------------------------ //
const validateLinks = (arraylinks) => {
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
  // retornar el array con la promesa resuelta
  return Promise.all(array);
};

module.exports = {
  isAnExistingPath,
  isAbsolutePath,
  convertToAbsolute,
  isAdirectory,
  readDirectory,
  isMdExtension,
  getFilesFromDirectory,
  readFileMd,
  getLinks,
  validateLinks,
};
