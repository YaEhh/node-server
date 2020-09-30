const fs = require('fs');
const path = require('path');

//Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder created...');
});

//Create and write to file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello world!',
  {},
  (err) => {
    if (err) throw err;
    console.log('File created...');
  }
);

//Create and write to file
fs.appendFile(
  path.join(__dirname, '/test', 'hello.txt'),
  ' I love Node JS',
  {},
  (err) => {
    if (err) throw err;
    console.log('File appended...');
  }
);

//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function (
  err,
  data
) {
  if (err) throw err;
  console.log(`Reading data ...${data}`);
});
