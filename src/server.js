import http from "node:http";

const PORT = 3333;

const server = http.createServer((req, res) => {
  res.writeHead(200);

  res.end("Hello World!");
});

server.listen(PORT, () => {
  console.log("Server is listening on port 3333");
});
