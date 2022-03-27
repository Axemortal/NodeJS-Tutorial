const fs = require("fs");

// 1st arg is the file path, 2nd arg is a callback function that executes when the file is read
fs.readFile("./basicsOfNode/test.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
// Data is returned in the format of a Buffer - a package of data
// Buffer.toString() - Returns the string format of the buffer

// 1st arg is the file path, 2nd arg is the new string to write to the file, last arg is the callback function that executes when file is written
fs.writeFile("./basicsOfNode/test.txt", "", () => {});
// If the file doesn't exist, node simply creates the file with the string that was added

// Makes a directory, 1st arg is relative directory path, second arg is a async callback function
fs.mkdir("", (err) => {});
// Good idea to check if the directory exists before running this code
fs.existsSync("");
// Deletes a directory, 1st arg is relative directory path, second arg is a async callback function
fs.rmdir("", (err) => {});

// Deletes the file. Similarly, check if the file exists before running this code
fs.unlink("", (err) => {});
