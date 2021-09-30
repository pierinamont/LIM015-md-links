import chalk from 'chalk'; // para añadir color al texto
import * as api from './api.js';

const mdLinks = (track, options = { validate: false }) => new Promise((resolve, reject) => {
  // Si el path no existe
  if (!api.isAnExistingPath(track)) {
    reject((chalk.red('Path does not exist')));
  }
  if (!options.validate) {
    console.log('false');
  }
});

// const existingPath =
// 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md';
const unexistingPath = 'C:\\Users\\user\\Desktop\\LAB';

mdLinks(unexistingPath);
