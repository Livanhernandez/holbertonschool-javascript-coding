#!/usr/bin/node
const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } else {
    const data = response.body;
    fs.writeFile(filePath, data, 'utf-8', (err) => {
      if (err) {
        console.error({
          error: err
        });
      }
    });
  }
});
