/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // color for command line
const { parse } = require('react-docgen');
const chokidar = require('chokidar'); // watch then run file

const reactPaths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js')
};

// THE LOGIC
// check for watch mode
const enableWatchMode = process.argv.slice(2) === '--watch';

// read file
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

// get files from path
function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

// get directories from path
function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return (
      fs.statSync(path.join(filepath, file)).isDirectory() &&
      file !== `SubComponents`
    );
  });
}

// get files from path
function getExampleFiles(examplesPath, componentName) {
  let exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}
function getExampleData(examplesPath, componentName) {
  const examples = getExampleFiles(examplesPath, componentName);
  return examples.map(function(file) {
    const filePath = path.join(examplesPath, componentName, file);
    const content = readFile(filePath);
    const info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content
    };
  });
}

// each component:
function getComponentData(paths, componentName) {
  // get content out for that file
  const content = readFile(
    path.join(paths.components, componentName, `${componentName}.js`)
  );

  // parse = react-docgen
  const info = parse(content);

  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName)
  };
}
// write file
function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function(err) {
    if (err) {
      console.log(chalk.red(err));
    } else {
      console.log(chalk.green('Component data saved.'));
    }
  });
}

function generate(paths) {
  const errors = []; // array of errors
  // map over components folder.
  // exslude SubComponents folder
  const componentData = getDirectories(paths.components).map(function(
    componentName
  ) {
    try {
      return getComponentData(paths, componentName);
    } catch (error) {
      errors.push(
        `An error occurred while attempting to generate metadata for ${componentName}. ${error}`
      );
      return error;
    }
  });

  writeFile(
    paths.output,
    `module.exports = /* eslint-disable */ ${JSON.stringify(
      errors.length ? errors : componentData
    )}`
  );
}

// if check mode is on:
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar
    .watch([reactPaths.examples, reactPaths.components])
    .on('change', function() {
      generate(reactPaths);
    });
} else {
  // Generate component metadata
  generate(reactPaths);
}
