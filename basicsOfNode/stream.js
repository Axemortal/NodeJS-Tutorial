const fs = require("fs");

// Read Streams, 1st Arg is relative file path, 2nd Arg is an options object
const readStream = fs.createReadStream("./basicsOfNode/test.txt", {
  encoding: "utf8",
});
// .on is an eventListener
readStream.on("data", (chunk) => {
  console.log(chunk);
});

// Write Streams, 1st Arg is relative file path
const writeStream = fs.createWriteStream("./basicsOfNode/test.txt");
// // The string for the file
writeStream.write("Something", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Successfully Written to File");
});

// Pipes - Transfers data from one stream to another
readStream.pipe(writeStream);
