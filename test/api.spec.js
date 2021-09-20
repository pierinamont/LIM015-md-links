
// import { FLIPPED_ALIAS_KEYS } from '@babel/types';
import { isAnExistingPath, isAbsolutePath,
  convertToAbsolute, isAdirectory } from '../src/api.js'

const track = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator';
const failTrack = '../validator/validator.md';
const directory = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator_duplicated';
const justFile = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator\\validator.md';

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
    expect(convertToAbsolute(failTrack)).toEqual('C:\\Users\\user\\Desktop\\LABORATORIA\\validator\\validator.md');
  });
});

describe('isAdirectory', () => {
  it('Debe ser una función', () => {
    expect(typeof isAdirectory).toBe('function');
  });
  it('Debe validar si el path es un directorio', () => isAdirectory(directory)
  .then((stats) => {
    expect(stats.isDirectory()).toBe(true);
  }))
  it('Debe validar si el path es un directorio', () => isAdirectory(justFile)
  .then((stats) => {
    expect(stats.isDirectory()).toBe(false);
  }))
});




  