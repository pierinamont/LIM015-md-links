const chalk = require('chalk');
const opt = require('../src/stats.js');

const stats = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md',
    status: 200,
    statusText: 'Ok',
  },
  {
    href: 'https://es.wikipedia.oi/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md',
    status: 'Failed request',
    statusText: 'Fail',
  },
  {
    href: 'https://nodej/',
    text: 'Link roto',
    file: 'C:\\Users\\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator_duplicated\\validatorTwo.md',
    status: 'Failed request',
    statusText: 'Fail',
  },
];

describe('statsLinks', () => {
  it('Debe ser una función', () => {
    expect(typeof opt.statsLinks).toBe('function');
  });
  it('Debe imprimir el total de links y los únicos', () => {
    const total = chalk.green('Total: 3');
    const unique = chalk.blue('Unique: 3');
    const content = `${total}\n${unique}`;
    expect(opt.statsLinks(stats)).toBe(content);
  });
});

describe('brokenLinks', () => {
  it('Debe ser una función', () => {
    expect(typeof opt.brokenLinks).toBe('function');
  });
  it('Debe imprimir el total de links rotos', () => {
    const broken = chalk.red('Broken: 2');
    const content = broken;
    expect(opt.brokenLinks(stats)).toBe(content);
  });
});
