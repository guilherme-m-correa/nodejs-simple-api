import http from "node:http";
import { bodyParser } from "./middlewares/bodyParser.js";

const PORT = 3333;

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  await bodyParser(req, res);

  const { body } = req;

  res.end(JSON.stringify({ url, method, body }));
});

server.listen(PORT, () => {
  console.log("Server is listening on port 3333");
});
