import { access, F_OK } from 'fs';
// import * as path from 'path';
import chalk from 'chalk'; // para añadir color al texto

// const manualPath = 'C:\\Users
// \\user\\Desktop\\LABORATORIA\\LIM015-md-links\\validator\\validator.md';

const manualPath = '../validator/validator.ms';

const validatePath = () => {
  access(manualPath, F_OK, (err) => {
    if (err) {
      console.error(chalk.red('nonexistent file ❌'));
    }
  });
};

validatePath();

// node --trace-uncaught ...
