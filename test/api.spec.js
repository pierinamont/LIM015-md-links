// import { isAnExistingPath } from './api.js';
// , isAbsolutePath, convertToAbsolute, isAdirectory, readDirectory, isMdExtension, readFileMd
import { isAnExistingPath } from '../src/api.js'

const track = 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-MD-LINKS\\validator';

describe('isAnExistingPath', () => {
  it('Debe ser una función', () => {
    expect(typeof isAnExistingPath).toBe('function');
  });
  it('Debe validar si el path existe', () => {
    expect(isAnExistingPath(track)).toBe(true);
  });
});
  