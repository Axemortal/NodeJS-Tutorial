const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

// Connect to MongoDB
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
    db = getDb();
  }
});

// Returns a cursor that points to a set of documents outlined by the query
// Need to hook on the forEach or toArray to return the data
// .sort is chained to the find method to sort the results
// Process is asynchronous
db.collection("books")
  .find()
  .sort({ title: 1 })
  .forEach((doc) => {
    console.log(doc);
  })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

// Common error that you will face is BSONTypeError: which occurs when a string that isn't 12 bytes or 24 hex characters is passed into the ObjectId()
// To prevent that, check if the string matches the format beforehand
ObjectId.isValid("5d8f8f8f8f8f8f8f8f8f8f");

// Same methods can be used
db.collection("books").findOne({ title: "The Hobbit" });

// Connect to MongoDB through mongoose
const dburi =
  "mongodb+srv://admin:<password>@cluster0.qrton.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Connect to MongoDB, 2nd argument is boilerplate code to stop the depracation warnings
// You will only want to listen on the port after you have connected to the database
mongoose
  .connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the public folder as the static folder for the static files
app.use(express.static("public"));

// Boilerplate code to decode information from the body of the request
app.use(express.urlencoded({ extended: true }));

// // To send a static file as a response
// app.get("/", (req, res) => {
//   // By default, 1st arg should be the absolute path for the file
//   // If a relative path is used, a 2nd arg containing an object with key root should be used to tell express where the path is relative to
//   res.sendFile("/views/index.html", { root: __dirname });
//   res.sendFile(__dirname + "/views/index.html");
// });

// To redirect a request to a different route
app.get("/", (req, res) => {
  res.redirect("/about");
});

// To render a template
app.get("/about", (req, res) => {
  res.render("index.ejs");
});

// const blog = new Blog({}) - Make according to schema
// blog.save()
// Blog.find()
// Blog.findById()
// Blog.sort({}) - chain on with find() to return back the array with a specific order

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
});

// Blog.findbyIdAndDelete(id)
