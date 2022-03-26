# NodeJS-Tutorial

Node JS

Computers cannot understand JS as it is a high-level language
On the browser, JS is compiled into machine code by the V8 engine written by Google
Node JS wraps around the V8 engine and adds more functionality to compile JS on the computer

Global object (similar to the window object on the frontend)
__dirname - Returns the full absolute path of the current directory
__filename - Returns the full absolute path with the current file

const variableName = require('<relativeFilePath>') - Automatically runs the file in the require argument, returns an empty object to variableName
In the file that is referenced, add module.exports = <whateverYouWantToExport>, variableName will then be set to the value of modules.exports

const os = require('os') - Returns the operating system object
const fs = require('fs') - Returns the file system object

fs.readFile('', (err, data) => {
 if (err) {
  console.log(err);
 }
 console.log(data)
}) - First argument is a string for the relative file path that we want to read, 2nd argument is a callback function that executes when the file is read
Data is returned in the format of a Buffer - a package of data
Buffer.toString() - Returns the string format of the buffer

fs.writeFile('', '', () => {}) - First arg is relative file path, 2nd arg is the new string to write to the file, last arg is another async function
If the file doesn't exist, node simply creates the file with the string that was added

fs.mkdir('', (err) => {}) - Makes a directory, first arg is relative directory path, second arg is a async callback function
Good idea to check if the directory exists before running this code
fs.existsSync('') - Checks if the relative path exists
fs.rmdir('', (err) => {}) - Removes directory

fs.unlink('', (err) => {}) - Deletes the file 
Similarly, check if the file exists before running this code

Streams and Buffers

Streams - Allows data to be used before it has finished loading, small chunks of data are packaged into buffers to be sent down the stream

Read Streams

const readStream = fs.createReadstream('', {encoding: 'utf8'}) - 1st Arg is relative file path, 2nd Arg is an options object
readStream.on('data', (chunk) => {}) - .on is an eventListener

Write Streams

const writeStream = fs.createWriteStream('') - Relative file path
writeStream.write('') - The string for the file

Pipes - From readable stream to the writable stream
readStream.pipe(writeStream)

Creating a server

const http = require('http')

const server = http.createServer((req, res) => {}) - Callback function will run everytime a request is made to the server
server.listen(<portNumber>, <name>, () => {}) - Default name is localhost, function runs when server starts listening

Localhost - Similar to a domain name on the web, but points to a loopback IP address (127.0.0.1) which points back to your own computer
Port Numbers - Specifies the gateway that a specific application should use 

Requests and responses

Response needs to be accompanied with a header to tell the browser what type of data is being sent back
res.setHeader('Content-Type', 'text/plain') - Many different content type (e.g. 'text/htmml')
res.write() - Some date
res.end() - If only one piece of data is being sent back as the response, the data can be included in the argument for res.end() and res.write() can be omitted

Status Codes - Describe the type of response sent to the browser
Common status
200 - ok
301 - Resource moved
404 - Not found
500 - Internal server error

100 Range - informational responses
200 Range - success codes
300 Range - codes for redirects
400 Range - User or client error
500 Range - Server error

res.statusCode = 200 - Sets the status code of the response

res.setHeader('Location', '<newUrl>') - Redirects the page to the newUrl


loadash - Package of utility library
const _ = require('_')

express

res.sendFile('<path>', {root: __dirname}) - By default, first argument should be the absolute path for the file. If a relative path is used, a 2nd argument containing an object with key root should be used to tell express where the path is relative to
res.redirect('<redirectUrl>')

Each line of js in ejs needs to be in <% %>
<% if (x > 0) { %>
 <p> x is big </p>
<% } %>
The process of loading content through the view engine before finally spitting out the HTML page is known as server-side rendering	

Partials - Parts of a template that can be reused

partials (folder name)
<%= %> - Escapes special characters to return a string value
<%- include('') %> - Returns a raw HTML value instead
 

Extras:

switch(caseId) {
 case 'id':
  //does something
  break

 
