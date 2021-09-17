import { existsSync } from 'fs';
// import * as path from 'path';
// import chalk from 'chalk'; // para añadir color al texto

const directPath = '../validator/validator.md'; // prueba

// ---------- Para saber si el path existe ---------------- //
const isAnExistingPath = (track) => existsSync(track);
console.log(isAnExistingPath(directPath)); // prueba
