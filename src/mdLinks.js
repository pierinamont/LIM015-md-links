const chalk = require('chalk');
const api = require('./api.js');

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

// export default mdLinks;
module.exports = { mdLinks };
