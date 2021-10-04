import chalk from 'chalk'; // para añadir color al texto
import * as api from './api.js';

const mdLinks = (track, options = { validate: true }) => new Promise((resolve, reject) => {
  // Si el path no existe
  if (api.isAnExistingPath(track) === false) {
    reject((chalk.red('Path does not exist')));
    // Si validate es true
  } else if (options.validate) {
    const getMd = api.getFilesFromDirectory(track);
    const links = api.getLinks(...getMd);
    // resolve(api.validateLinks(links));
    api.validateLinks(links).then((result) => resolve(result)).catch((err) => reject(err));
  } else { // Si es validate false
    const getMd = api.getFilesFromDirectory(track);
    resolve(api.getLinks(...getMd));
  }
});

// prueba;
// const existingPath = 'C:\\Users\\user\\Desktop\\
// LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md';
// mdLinks(existingPath, { validate: true })
//   .then((result) => {
//     console.log(result, 'este es el resultado');
//   })
//   .catch((error) => {
//     console.log(error, 'este es un error');
//   });

export default mdLinks;
