const api = require('../src/api.js');

// constantes
const track = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator';
const failTrack = '../validator/validator.md';
const directory = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated';
const justFile = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\file.md';
const mdFile = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md';

const dirArray = [
  'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated\\validatorTwo.md',
];

const filePath = [
  'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\file.md',
];

// ------------------------------------------- tests ----------------------------------------- //

// -------------------------- valida si ruta existe ----------------------------- //
describe('isAnExistingPath', () => {
  it('Debe ser una función', () => {
    expect(typeof api.isAnExistingPath).toBe('function');
  });
  it('Debe validar si el path existe', () => {
    expect(api.isAnExistingPath(track)).toBe(true);
  });
  it('Debe validar si el path no existe', () => {
    expect(api.isAnExistingPath(failTrack)).toBe(false);
  });
});

// -------------------------- valida si ruta es absoluta ----------------------------- //
describe('isAbsolutePath', () => {
  it('Debe ser una función', () => {
    expect(typeof api.isAbsolutePath).toBe('function');
  });
  it('Debe validar que el path es absoluto', () => {
    expect(api.isAbsolutePath(track)).toBe(true);
  });
  it('Debe validar que el path no es absoluto', () => {
    expect(api.isAbsolutePath(failTrack)).toBe(false);
  });
});

// -------------------------- convierte ruta en absoluta ----------------------------- //
describe('convertToAbsolute', () => {
  it('Debe ser una función', () => {
    expect(typeof api.convertToAbsolute).toBe('function');
  });
  it('Debe convertir ruta a absoluta', () => {
    const content = 'C:\\Users\\user\\Desktop\\LABORATORIA\\validator\\validator.md';
    expect(api.convertToAbsolute(failTrack)).toEqual(content);
  });
});

// -------------------------- valida si es directorio ----------------------------- //
describe('isAdirectory', () => {
  it('Debe ser una función', () => {
    expect(typeof api.isAdirectory).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => {
    expect(api.isAdirectory(directory)).toBe(true);
  });

  it('Debe validar si el path es un directorio', () => {
    expect(api.isAdirectory(justFile)).toBe(false);
  });
});

// ------------------------------ lee un directorio ------------------------------- //
describe('readDirectory', () => {
  it('Debe ser una función', () => {
    expect(typeof api.readDirectory).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => {
    const content = ['file.md', 'validator.md', 'validator_duplicated'];
    expect(api.readDirectory(track)).toEqual(content);
  });
});

// --------------- recorre un directorio (obtiene archivos de directorio) ----------- //
describe('getFilesFromDirectory', () => {
  it('Debe ser una función', () => {
    expect(typeof api.getFilesFromDirectory).toBe('function');
  });
  it('Debe retornar array con contenido del directorio', () => {
    expect(api.getFilesFromDirectory(directory)).toEqual(dirArray);
  });
  it('Debe retornar array con la ruta del archivo', () => {
    expect(api.getFilesFromDirectory(justFile)).toEqual(filePath);
  });
});

// -------------------------- valida si extensión es md ---------------------------- //
describe('isMdExtension', () => {
  it('Debe ser una función', () => {
    expect(typeof api.isMdExtension).toBe('function');
  });
  it('Debe validar que es un archivo .md', () => {
    expect(api.isMdExtension(justFile)).toBe(true);
  });

  it('Debe validar que no es archivo .md', () => {
    expect(api.isMdExtension(directory)).toBe(false);
  });
});

// --------------------------------- lee un archivo ----------------------------------- //
describe('readFileMd', () => {
  it('Debe ser una función', () => {
    expect(typeof api.readFileMd).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => {
    const content = '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado';
    expect(api.readFileMd(justFile)).toEqual(content);
  });
});

// -------------------------- extraer links en un array ----------------------------- //
describe('getLinks', () => {
  it('Debe ser una función', () => {
    expect(typeof api.getLinks).toBe('function');
  });
  it('retornar un array con href, txt, file', () => {
    const content = [
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
    expect(api.getLinks(mdFile)).toEqual(content);
  });
});
