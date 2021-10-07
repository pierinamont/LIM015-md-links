const chalk = require('chalk');

// Status de links: totaL / unique
const statsLinks = (array) => {
  // total de links
  const total = array.length;
  let unique = array.map((link) => link.href);
  // new Set se usa para obtener elementos únicos en un array
  unique = [...new Set(unique)].length;
  // \n => salto de línea
  const totalMsg = chalk.green(`Total: ${total}`);
  const uniqurMsg = chalk.blue(`Unique: ${unique}`);
  return `${totalMsg}\n${uniqurMsg}`;
};

// Obtener links rotos
const brokenLinks = (array) => {
  const broken = array.filter((link) => link.statusText === 'Fail');
  const brokenMsg = chalk.red(`Broken: ${broken.length}`);
  return `${brokenMsg}`;
};

module.exports = { statsLinks, brokenLinks };
// const prueba = [
//   {
//     href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\
// LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md',
//     status: 200,
//     statusText: 'Ok',
//   },
//   {
//     href: 'https://es.wikipedia.oi/Markdown',
//     text: 'Markdown',
//     file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\
// LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md',
//     status: 'Failed request',
//     statusText: 'Fail',
//   },
//   {
//     href: 'https://nodej/',
//     text: 'Link roto',
//     file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\
// LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md',
//     status: 'Failed request',
//     statusText: 'Fail',
//   },
// ];

// console.log(statsLinks(prueba));

// console.log(brokenLinks(prueba));
