// Desde este archivo debes exportar una función (mdLinks).

// module.exports = () => {
//   // ...
// };

import { readFile } from 'fs';
import { argv } from 'process';

export const hello = () => {
  
    console.log(typeof readFile, typeof argv);
    console.log(readFile);
    console.log(process.argv);
}
