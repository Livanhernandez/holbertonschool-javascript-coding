const fs = require('fs');

// Get file path from the first argument
const filePath = process.argv[2];

// Read and print the content of the file
fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) {
    // Print error object if an error occurred during the reading
    console.error(error);
  } else {
    // Print the content of the file
    console.log(content);
  }
});
