const express = require("express");

const server = express();

const bodyParser = express.urlencoded({ extended: true });


server.get("/", (request, response, next) => {
  console.log(request.method + " " + request.url);
  next();
});

server.get("/", (request, response) => {
  response.send("<h1>Hello</h1>");
});

server.post("/submit", bodyParser, (request, response) => {
  console.log(request.body);
  response.send("thanks for submitting");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

