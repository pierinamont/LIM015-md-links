import chalk from 'chalk'; // para añadir color al texto
import * as api from './api.js';

const mdLinks = (track, options = { validate: true }) => new Promise((resolve, reject) => {
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

const existingPath = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md';
const unexistingPath = 'C:\\Users\\user\\Desktop\\LAB';

mdLinks(unexistingPath, { validate: false })
  .then((res) => { // crear una promesa global//
    console.log(res, 23);
  })
  .catch((error) => {
    console.log(error);
  }); // map debo construir un array de prom
