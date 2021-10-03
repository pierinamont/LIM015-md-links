// const mdLinks = require('../');
import mdLinks from '../src/mdLinks.js';

const path = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md';
const validateFalse = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
  },
  {
    href: 'https://es.wikipedia.oi/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
  },
  {
    href: 'https://nodej/',
    text: 'Link roto',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
  },
];

const validateTrue = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
    status: 200,
    statusText: 'Ok',
  },
  {
    href: 'https://es.wikipedia.oi/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
    status: 'Failed request',
    statusText: 'Fail',
  },
  {
    href: 'https://nodej/',
    text: 'Link roto',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
    status: 'Failed request',
    statusText: 'Fail',
  },
];

describe('mdLinks', () => {
  it('debe ser una función ', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('validate false: debe retornar href, text, file', () => {
    expect(mdLinks(path, { validate: false })).resolves.toEqual(validateFalse);
  });
  it('validate true: debe retornar href, text, file, status', () => {
    expect(mdLinks(path, { validate: true })).resolves.toEqual(validateTrue);
  });
});
// mdLinks(existingPath, { validate: true })
//   .then((result) => {
//     console.log(result, 'este es el resultado');
//   })
//   .catch((error) => {
//     console.log(error, 'este es un error');
//   });
