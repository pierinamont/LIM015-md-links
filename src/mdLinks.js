import chalk from 'chalk'; // para añadir color al texto
import * as api from './api.js';

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
// mdLinks('../validator', { validate: false })
//   .then((result) => {
//     console.log(result, 'este es el resultado');
//   })
//   .catch((error) => {
//     console.log(error, 'este es un error');
//   });

export default mdLinks;
