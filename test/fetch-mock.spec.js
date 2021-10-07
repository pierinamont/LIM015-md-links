const fetch = require('node-fetch');
const api = require('../src/api.js');

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
    fetch.mockImplementation(() => Promise.resolve({
      status: 200,
      statusText: 'OK',
    }));
    return api.validateLinks(objRecieved)
      .then((result) => {
        expect(result).toEqual(objResolved);
      });
  });
});

describe('validateLinks', () => {
  test('statusText: Fail', () => {
    const objRecieved = [
      {
        href: 'https://es.wikiped/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
      },
    ];
    const objResolved = [
      {
        href: 'https://es.wikiped/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
        status: 'Failed request',
        statusText: 'Fail',
      },
    ];
    fetch.mockImplementation(() => Promise.reject(new Error({
      status: 'Failed request',
      statusText: 'Fail',
    })));
    return api.validateLinks(objRecieved)
      .then((result) => {
        expect(result).toEqual(objResolved);
      });
  });
});
