import chalk from 'chalk'; // para añadir color al texto
import * as api from './api.js';

export const mdLinks = (track, options = { validate: true }) => new Promise((resolve, reject) => {
  // Si el path no existe
  if (!api.isAnExistingPath(track)) {
    reject((chalk.red('Path does not exist')));
    // Si validate es true
  } else if (options.validate) {
    const links = api.getLinks(track);
    resolve(api.validateLinks(links));
  } else { // Si es validate false
    resolve(api.getLinks(track));
  }
});

// prueba;
const existingPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md';
mdLinks(existingPath, { validate: true })
  .then((result) => {
    console.log(result, 'este es el resultado');
  })
  .catch((error) => {
    console.log(error, 'este es un error');
  });
