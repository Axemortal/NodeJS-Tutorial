// Global object - similar to window in browser

// __dirname - Returns the full absolute path of the current directory
console.log(__dirname);
//__filename - Returns the full absolute path of the current directory with the file name
console.log(__filename);

// Imports a module with the given file path
// What is actually happening is that it is creating a new module object and then executing the code in the file
const file = require("./export");

// Returns the operating system object
const os = require("os");
