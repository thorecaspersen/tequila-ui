/* eslint-disable */
'use strict';

const path = require('path');
const fse = require('fs-extra');

// SUMMARY
// 1. copying Readme and License to /lib
// 2. Writes package.json to /lib

// filer to copy
const files = ['README.md'];

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../lib/', path.basename(file));
}

function copyFile(file) {
  const libPath = resolveBuildPath(file);
  return new Promise(resolve => {
    fse.copy(file, libPath, err => {
      if (err) throw err;
      resolve();
    });
  }).then(() => console.log(`Copied ${file} to ${libPath}`));
}

function createPackageFile() {
  return new Promise(resolve => {
    fse.readFile(
      path.resolve(__dirname, '../package.json'),
      'utf8',
      (err, data) => {
        if (err) {
          throw err;
        }

        resolve(data);
      }
    );
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      const {
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies
      } = packageData;

      const minimalPackage = {
        name: 'tequila-ui',
        author,
        version,
        description,
        main: './index.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        dependencies: { '@emotion/core': '^10.0.7' },
        peerDependencies
      };

      return new Promise(resolve => {
        const libPath = path.resolve(__dirname, '../lib/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(libPath, data, err => {
          if (err) throw err;
          console.log(`Created package.json in ${libPath}`);
          resolve();
        });
      });
    });
}

// the start of the script
Promise.all(
  // copy all files
  files.map(file => copyFile(file))
)
  // then create package.json
  .then(() => createPackageFile());
