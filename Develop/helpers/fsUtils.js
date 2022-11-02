const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 * A funtion that writes the data to a JSON file
 * @param {string} destination where the file be written at
 * @param {object} content where the content will be written in
 * @returns {void}  Nothing
 */


const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  A function that reads data when theres a given file and appends the content
 *  @param {object} content where the content gets appended to a file
 *  @param {string} file a path that the files get saved into
 *  @returns {void} Nothing
 */


const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };