import chalk from 'chalk'; // para añadir color al texto
import * as api from './api.js';

// const mdLinks = (track, options = { validate: false }) => new Promise((resolve, reject) => {
//   // convertir ruta en absoluta
//   const path = api.convertToAbsolute(track);

//   const getMdFiles = api.getFilesFromDirectory(path); // rutas de archivo md
//   const array = getMdFiles.map((element) => api.getLinks(element)); // Obtener links de archivo md
//   // console.log(array, 'array');

//   // Si el path no existe
//   if (!api.isAnExistingPath(path)) {
//     reject((chalk.red('Path does not exist')));
//   }
//   // Si validate es false
//   if (options.validate === false) {
//     resolve(array);
//   }
//   // Si validate es true
//   if (options.validate === true) {
//     const validate = api.validateLinks(array).then((result) => result);
//     resolve(validate);
//   }
// });

// const mdLinks = (path, options = {}) => new Promise((resolve, reject) => {
//   // validar que el path existe//
//   if (!api.isAnExistingPath(path)) {
//     const err = 'invalid path';
//     resolve(err);
//     reject('la ruta no existe, es invalida');
//     // extraer c/u de los links//
//   } else if (options.validate) {
//     resolve(api.validateLinks(api.getLinks(path)));
//   } else {
//     resolve(api.getLinks(path));
//   }
// });

const mdLinks = (track, options = { validate: true }) => new Promise((resolve, reject) => {
  // convertir ruta en absoluta
  const path = api.convertToAbsolute(track);
  // Si el path no existe
  if (api.isAnExistingPath(path) === false) {
    reject((chalk.red('Path does not exist')));
    // si options validate es true
  } else if (options.validate) {
    const validate = api.validateLinks(api.getLinks(path));
    resolve(validate);
    // si options validate es false
  } else {
    resolve(api.getLinks(path));
  }
});

// prueba
// const existingPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator';
mdLinks('../validator/validator.md', { validate: false })
  .then((result) => {
    console.log(result, 'este es el resultado');
  })
  .catch((error) => {
    console.log(error, 'este es un error');
  });

export default mdLinks;
