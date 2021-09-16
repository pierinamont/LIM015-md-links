// Desde este archivo debes exportar una función (mdLinks).
import { readFile } from 'fs';
import * as path from 'path';

// ---------- lee el contenido dentro de una ruta --------------- //
export const readF = () => {
  readFile('../validator/validator.md', 'utf-8', (error, data) => {
    if (error) {
      console.log(`Error: ${error} `);
    } else {
      console.log(data);
    }
  });
};

// ---------- lee la extención de un path --------------- //
export const showExtension = () => {
  const extension = path.extname('../validator/validator.md');
  console.log(`La extensión del archivo es => ${extension}`);
};

// ---------- unir un path --------------- //
// forma 1
const firstPath = '../validator';
const secondPath = '/validator.md';
const joinPath = path.join(firstPath, secondPath);
console.log(joinPath);
