# mdlinks-checker
Es una librería que permite validar las URLs que se encuentran dentro de archivos con lenguaje markdown. Esta te permitirá obtener: status de los links, total de links, links únicos y links rotos.

Este proyecto fue creado para el Bootcamp de  <a  href="https://www.laboratoria.la">Laboratoria</a> - Lima 015 💛


***

## Instalación

Puedes instalarlo por npm:

`$ npm i mdlinks-checker`

## Guía de uso

Puedes ejecutar la librería a través de la terminal:

`mdlinks-examiner <path-to-file> [options]`

Las rutas ingresadas pueden ser **relativas** o **absolutas** y las opciones que puedes usar son: `--stats`, `--validate`, o usar las dos juntas `--stats --validate`.

| Path to file | Options |
| ------------- | ------------- |
| ./file/file.md  | --stats |
| C:\user\file | --validate |

#### Usando una ruta:
- Se obtiene la ruta absoluta, los links y el texto.

[![md1.png](https://i.postimg.cc/Pq9441hK/md1.png)](https://postimg.cc/XZKdNGry)

#### Usando las opciones:
- Usando `--validate`, se obtiene la ruta relativa, el link, el texto del link y el estatus.

[![md3.png](https://i.postimg.cc/nzK3hCbk/md3.png)](https://postimg.cc/ftLcHWbt)

- Usando `--stats`, se obtiene el total de links y los links únicos.

[![md4.png](https://i.postimg.cc/BnZ11tW6/md4.png)](https://postimg.cc/rKbpBVwX)

- Usando los dos, `--stats --validate` (sin importar el orden), se obtiene el total de links, los links únicos y los rotos.

[![md2.png](https://i.postimg.cc/FRkSs6MV/md2.png)](https://postimg.cc/phxrssXm)

#### Si necesitas ayuda:

Si no recuerdas las opciones, puedes colocar `--help` para volver a chequear las opciones.

[![md5.png](https://i.postimg.cc/nVYzYZGQ/md5.png)](https://postimg.cc/NLFBB3Vg)

***
## Diagramas

DIAGRAMA API y DIAGRAMA CLI

[![DIAGRAMAS.png](https://i.postimg.cc/1zsMXDPj/DIAGRAMAS.png)](https://postimg.cc/sMH50QMY)