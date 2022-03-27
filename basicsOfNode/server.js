const http = require("http");

// Callback function that runs when a request is made to the server
const server = http.createServer((req, res) => {
  // Requests and responses

  //   To get the url of the request
  req.url;

  //   To get the method of the request
  req.method;

  // Response needs to be accompanied with a header to tell the browser what type of data is being sent back
  // Many different content type (e.g. 'text/html')
  res.setHeader("Content-Type", "text/plain");

  // To redirect the user to a different page
  // res.setHeader('Location', '<newUrl>')

  // Edit the response body
  res.write("Hello World");

  // Sets the status code of the response
  res.statusCode = 200;

  // If only one piece of data is being sent back as the response, the data can be included in the argument for res.end() and res.write() can be omitted
  res.end();
});

// Start the server, 1st arg is port, normally the 2nd arg will be a callback function that executes when server is up
// Default name is localhost, but can be set to any name as the 2nd arg
server.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
