// Desde este archivo debes exportar una función (mdLinks).
import { readFile } from 'fs';
import * as path from 'path';
// import { argv } from 'process';


// ---------- lee el contenido dentro de una ruta --------------- //
readFile('../validator/validator.md', 'utf-8', (error, data) => {
    if(error) {
        console.log(`Error: ${error} `);
    } else {
        console.log(data);
    }
});

// ---------- lee la extención de un path --------------- //
const extension = path.extname('../validator/validator.md');
console.log(`La extensión del archivo es => ${extension}`);