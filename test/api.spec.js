
// import { FLIPPED_ALIAS_KEYS } from '@babel/types';
import { isAnExistingPath, isAbsolutePath,
  convertToAbsolute, isAdirectory, isMdExtension,
  readDirectory, readFileMd } from '../src/api.js';


// constantes
const track = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator';
const failTrack = '../validator/validator.md';
const directory = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated';
const justFile = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\file.md';

// -------------------------- tests ----------------------------- //

describe('isAnExistingPath', () => {
  it('Debe ser una función', () => {
    expect(typeof isAnExistingPath).toBe('function');
  });
  it('Debe validar si el path existe', () => {
    expect(isAnExistingPath(track)).toBe(true);
  });
  it('Debe validar si el path no existe', () => {
    expect(isAnExistingPath(failTrack)).toBe(false);
  });
});

describe('isAbsolutePath', () => {
  it('Debe ser una función', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('Debe validar que el path es absoluto', () => {
    expect(isAbsolutePath(track)).toBe(true);
  });
  it('Debe validar que el path no es absoluto', () => {
    expect(isAbsolutePath(failTrack)).toBe(false);
  });
});

describe('convertToAbsolute', () => {
  it('Debe ser una función', () => {
    expect(typeof convertToAbsolute).toBe('function');
  });
  it('Debe convertir ruta a absoluta', () => {
    const content = 'C:\\Users\\user\\Desktop\\LABORATORIA\\validator\\validator.md';
    expect(convertToAbsolute(failTrack)).toEqual(content);
  });
});

describe('isAdirectory', () => {
  it('Debe ser una función', () => {
    expect(typeof isAdirectory).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => {
     expect(isAdirectory(directory)).toBe(true)});

  it('Debe validar si el path es un directorio', () => {
    expect(isAdirectory(justFile)).toBe(false)});
});

// readDirectory // 
describe('readDirectory', () => {
  it('Debe ser una función', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => {
    console.log(readDirectory(track))
    const content =  [ 'file.md', 'validator.md', 'validator_duplicated' ];
    expect(readDirectory(track)).toEqual(content)});
});


describe('isMdExtension', () => {
  it('Debe ser una función', () => {
    expect(typeof isMdExtension).toBe('function');
  });
  it('Debe validar que es un archivo .md', () => {
     expect(isMdExtension(justFile)).toBe(true)});

  it('Debe validar que no es archivo .md', () => {
  expect(isMdExtension(directory)).toBe(false)});
});
  
describe('readFileMd', () => {
  it('Debe ser una función', () => {
    expect(typeof readFileMd).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => {
     const content = '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado';
     expect(readFileMd(justFile)).toEqual(content);
  });
});