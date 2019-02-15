const fs = require('fs');
const path = require('path');

const TEST = path.join(__dirname, '/test', 'hello.txt');

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
});

// Create and write to a file
fs.writeFile(TEST, 'Hello World!', err => {
  if (err) throw err;
  // Append files
  fs.appendFile(TEST, ' and I love Node.js', err => {
    if (err) throw err;
  });
});

// Read File
fs.readFile(TEST, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename a File
fs.rename(TEST, path.join(__dirname, '/test', 'helloWorld.txt'), err => {
  if (err) throw err;
});
