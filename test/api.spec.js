// import { isAnExistingPath } from './api.js';
// , isAbsolutePath, convertToAbsolute, isAdirectory, readDirectory, isMdExtension, readFileMd
import * as api from '../src/api.js'

const track = '../validator/validator.md';

describe('isAnExistingPath', () => {
    it('Debe validar si el path existe', () => {
      expect(api.isAnExistingPath(track).toBe(true))
    });
  });
  