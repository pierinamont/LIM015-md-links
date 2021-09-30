import { jest } from '@jest/globals';
import fetch from 'node-fetch';
import { validateLinks } from '../src/api.js';


jest.mock('node-fetch');

describe('validateLinks', () => {
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
    fetch.mockReturnValue(() => Promise.resolve({
      status: 200,
      statusText: 'OK',
    }));
    return validateLinks(objRecieved)
      .then((result) => {
        expect(result).toEqual(objResolved);
      });
  });
});
