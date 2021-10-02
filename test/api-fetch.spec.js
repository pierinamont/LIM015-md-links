import fetch from 'node-fetch';
// import { createRequire } from 'module'; // prueba
import { validateLinks } from '../src/api.js'; // prueba

jest.mock('node-fetch');
beforeEach(() => {
  validateLinks.mockClear();
});

// const require = createRequire(import.meta.url);
// console.log(require);

it('validateLinks', () => {
  test('statusText: OK', () => {
    const objRecieved = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
      },
    ];
    const objResolved = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
        status: 200,
        statusText: 'Ok',
      },
    ];
    fetch.mockImplementation(() => Promise.resolve({
      status: 200,
      statusText: 'OK',
    }));
    return validateLinks(objRecieved)
      .then((result) => {
        expect(result).toEqual(objResolved);
      });
  });
});

// hola
