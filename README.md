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

index.js

# ejs - View Engine

The process of loading content through the view engine before finally spitting out the HTML page is known as server-side rendering

Each line of JS in ejs needs to be in <% %>

Partials - Parts of a template that can be reused

<%= %> - Escapes special characters to return a string value
<%- %> - Returns a raw HTML value instead

# Public Static Files

The server automatically protects files in the directory so that the browser cannot gain access to any file whatsoever
Hence there is a need to use a middleware to define a folder that browsers can access, so that CSS files, images etc. can be accessed and loaded in the browser

# mongoose - Object Document Mapping Library

Schemas define the structure of a type of data/document (Similar to types and interfaces in typescript)
The structure consists of properties and their respective types
A model then wraps around this schema and allow us to communicate with the database

Name property is added to all the input fields so that data can be referenced using that name in the future

# Dynamic Routes

Route parameters - The variable parts of the route that may change value
e.g. localhost:3000/users/:id

# Editing data on the Frontend

Script tags in ejs will be running on the frontend browser instead of running at the backend

# SQL DB (Relational database)

Contains table with rows and columns, where each table is used to store a specific data type
Tables will have values that relate to another value in another table

# NoSQL DB

Contains collections that contains documents
Documents look like JSON with key-value pairs and allows storing of nested properties

# MongoDB

MongoDB is a NoSQL DB

MongoDB Compass is the GUI for MongoDB
MongoDB Shell is the shell that comes with MongoDB

- Commands in MongoDB (for Compass and Shell)
  show dbs (returns all the databases available)
  use <database> (Change database)
  show collections (returns all the collections available in the database)

- To start up MongoDB Shell, type 'mongosh' in a shell

- Conventions in MongoDB
  db.<collectionName>.<command>

  - Commands

    - .insertOne({}) (Inserts a document in the collection of that databse, collection will be created alongside the document if it did not exist)
    - .insertMany([]) (Inserts an array of document into the collection)
    - .find({key: value}, {\_id: 1, title: 1}) (Returns the first 20 results on that collection, 2nd argument returns only the fields selected)
    - .it (Iterates the next 20 results of the collection)
    - .findOne({\_id: ObjectId()}, {}) (Returns the first result in the collection that mataches the filter, normally only used with \_id as it is unique)
    - .count() (Number of documents returned)
    - .limit() (Set the limit on the number of documents returned)
    - .sort({title: 1}) (Sorts the results depending on the value of the key specified, 1 for ascending and -1 for descending)
    - .deleteOne({\_id: ObjectId()}) (Delete the document from collection)
    - .deleteMany({author: 'Yifan'}) (Deletes all documents that matches the condition)
    - .updateOne({id: ObjectId()}, {$set: {rating: 8}}) (Updates an item with the set operator)
    - .updateMany({}, {$set: {rating: 9}})

  - Operators ($)
    All Operators start with a $ sign and it helps to filter the results based on the operator

    - .find({rating: {$gt: 7}}) (Example of using an operator)
    - gt (Greater than)
    - lt (Less than)
    - gte/lte (Greater/Less than or equal to)
    - .find({$or: [{rating: 7}, {rating: 9}]}) - Returns all results that match the condition
    - .find({rating: {$in : [7, 8, 9]}}) - $nin (Not in)
    - .updateOne({\_id: ObjectId()}, {$inc: {rating: 1}}) (Increases the value by one)
    - .updateOne({}, {$pull: {genres: "fantasy"}}) (Removes an item from the array, $push adds the item to the array)
    - .updateOne({}, {$push: {genres: {$each: ["fantasy", "sci-fi"]}}}) (Used for adding or removing more than 1 item from the array)

    Querying arrays

    - .find({genres: 'fantasy'}) - If 'fantasy' exists in the array
    - .find({genres: {$all: ['fantasy', 'sci-fi']}}) - For an array
    - .find({genres: ['fantasy']}) - For the exact match of an array

    Querying objects

    - .find({'reviews.name': 'Yifan'})

    Pagination can be done with skip, limit and queryparams

# Connecting to MongoDB with a driver

npm i monodb
Refer to db.js

# Lodash - Utility library

const _ = require('_')

Extras:

switch(caseId) {
case 'id':
//does something
break
