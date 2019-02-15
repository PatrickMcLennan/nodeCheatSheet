const path = require('path');

// Base filename
const thisFile = path.basename(__filename);
// console.log(thisFile);

// Directory name
const thisDir = path.dirname(__filename);
// console.log(thisDir);

// File Extension
const thisExt = path.extname(__filename);
// console.log(thisExt);

// create path Object
const fileObj = path.parse(__filename);
// console.log(fileObj);

// Concatenate path - lets say we want to see hello.html in this directory
console.log(path.join(__dirname, 'test', 'hello.html'));
