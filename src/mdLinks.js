import * as api from './api.js';

const mdLinks = (track, options = { validate: false }) => new Promise((resolve, reject) => {
  if (!api.isAnExistingPath(track)) {
    // ..
  }
  if (!options.validate) {
    console.log('false');
  }
});

mdLinks();
