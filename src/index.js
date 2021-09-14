// Desde este archivo debes exportar una función (mdLinks).

import { readFile } from 'fs';
// import { argv } from 'process';

//💡 Como primer reto, puedes tratar de leer un solo archivo con una ruta fija e imprimir su contenido en la consola con un console.log. 


// lee el contenido dentro de una ruta
export const discoverFile = () => {
    readFile('../validator/validator.md', 'utf-8', (error, data) => {
        if(error) {
            console.log(`Error: ${error} `);
        } else {
            console.log(data);
        }
    });
} 
discoverFile();
