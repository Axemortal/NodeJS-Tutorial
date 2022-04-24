const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema, 1st arg is an object with key value pairs, 2nd arg is an options field
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creates a model based on the schema, this model will look for the collection whose name matches the plural form of the string passed in the 1st arg
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
