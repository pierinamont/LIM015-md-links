import chalk from 'chalk';

// Status de links: totaL / unique
export const statsLinks = (array) => {
  // total de links
  const total = array.length;
  let unique = array.map((link) => link.href);
  // new Set se usa para obtener elementos únicos en un array
  unique = [...new Set(unique)].length;
  // \n => salto de línea
  const totalMsg = chalk.green(`Total: ${total}`);
  const uniqurMsg = chalk.blue(`Unique: ${unique}`);
  return `${totalMsg}\n${uniqurMsg}`;
};

// Obtener links rotos
export const brokenLinks = (array) => {
  const broken = array.filter((link) => link.statusText === 'Fail');
  const brokenMsg = chalk.red(`Broken: ${broken.length}`);
  return `${brokenMsg}`;
};
