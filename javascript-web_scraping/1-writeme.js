#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv[3];

if (!filePath) {
  console.error('Error: Please provide a file path as an argument.');
  process.exit(1);
}

fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error({
      error: err
    });
  }
});
