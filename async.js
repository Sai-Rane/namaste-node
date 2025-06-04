const fs = require("fs");

const https = require("https");

console.log("hello");

//Synchronous file reading. This blocks the main thread
fs.readFileSync("./file.txt", "utf-8");
console.log("file read in sync way");

var a = 10;
var b = 20;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Response received");
});

setTimeout(() => {
  console.log("Timer called after 5 secs");
}, 5000);


fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log(data);
});

function multiply(x, y) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("Result is ", c);
