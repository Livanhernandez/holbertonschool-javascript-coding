#!/usr/bin/node
const request = require('request');

const characterId = '18';

const url = process.argv[2];

let count = 0;
request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } else {
    const data = JSON.parse(response.body);
    const movies = data.results;
    movies.forEach((movie) => {
      movie.characters.forEach((character) => {
        if (character.includes(characterId)) {
          count += 1;
        }
      });
    });
    console.log(count);
  }
});
