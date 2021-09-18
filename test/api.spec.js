// import { isAnExistingPath } from './api.js';
// , isAbsolutePath, convertToAbsolute, isAdirectory, readDirectory, isMdExtension, readFileMd
import * as api from '../src/api.js'

const track = '../validator/validator.md';

console.log(api.isAnExistingPath());
describe('isAnExistingPath', () => {
    it('Debe validar si el path existe', () => {
      expect(isAnExistingPath(track).toBe(true))
    });
  });
  