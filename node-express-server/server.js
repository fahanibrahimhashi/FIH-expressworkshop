const express = require("express");

const server = express();

server.get("/", (request, response, next) => {
  console.log(request.method + " " + request.url);
  next();
});

server.get("/", (request, response) => {
  response.send("<h1>Hello</h1>");
});

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

server.post("/submit", (request, response) => {
  console.log("posted");
  response.send("thanks for submitting");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

