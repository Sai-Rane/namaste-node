// const http=require("node:http")
const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("hello from the server");
});

server.listen(7777);
