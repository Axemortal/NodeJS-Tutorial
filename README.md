# NodeJS-Tutorial

# Why do we need NodeJS?

Computers can only understand Machine code in the binary format
Assembly Languages help to make it slightly easier for us to code and compiles down to machine code
C++ abstracts further away from machine code and JavaScript is an even higher language than C++, hence JS needs a compiler for the machine to understand it

On the browser (Frontend), JS is compiled into machine code by the V8 engine written by Google
On the backend, the V8 engine is not directly available. Hence, NodeJS is required to execute JS
Node JS wraps around the V8 engine and adds more functionality to compile JS on the computer

# Basics of NodeJS

Basic Syntax
basicsOfNode/main.js + export.js

# File system

Read, write files and directories
basicsOfNode/file.js

# Streams and Buffers

Streams - Allows data to be used before it has finished loading, small chunks of data are packaged into buffers to be sent down the stream
basicsOfNode/stream.js

# Server

Creating a server
basicsOfNode/server.js

Localhost - Similar to a domain name on the web, but points to a loopback IP address (127.0.0.1) which points back to your own computer
Port Numbers - Specifies the gateway that a specific application should use

# Status Codes - Describe the type of response sent from the server to the browser

100 Range - informational responses
200 Range - success codes
300 Range - codes for redirects
400 Range - User or client error
500 Range - Server error

Commononly used statuses
200 - ok
301 - Resource moved
404 - Not found
500 - Internal server error

# Useful libraries

# express - Backend Framework

res.sendFile('<path>', {root: \_\_dirname}) - By default, first argument should be the absolute path for the file. If a relative path is used, a 2nd argument containing an object with key root should be used to tell express where the path is relative to
res.redirect('<redirectUrl>')

# ejs - View Engine

Each line of js in ejs needs to be in <% %>
<% if (x > 0) { %>

 <p> x is big </p>
<% } %>
The process of loading content through the view engine before finally spitting out the HTML page is known as server-side rendering

Partials - Parts of a template that can be reused

partials (folder name)
<%= %> - Escapes special characters to return a string value
<%- include('') %> - Returns a raw HTML value instead

# Lodash - Utility library

const _ = require('_')

Extras:

switch(caseId) {
case 'id':
//does something
break
