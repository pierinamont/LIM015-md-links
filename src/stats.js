// import mdLinks from './mdLinks.js';

const statsLinks = (array) => {
  // total de links
  const total = array.length;
  // Links únicos
  let unique = array.map((link) => link.href);
  // new Set se usa para obtener elementos únicos en un array
  unique = [...new Set(unique)].length;
  const statsMsg = `Total: ${total}\nUnique: ${unique}`;
  return statsMsg;
};

// Prueba
const objRecieved = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'Markdown',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\file.md',
  },
];

console.log(statsLinks(objRecieved));
