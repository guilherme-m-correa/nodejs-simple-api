import http from "node:http";
import { bodyParser } from "./middlewares/bodyParser.js";
import { extractQueryParams } from "./util/extract-query-params.js";
import { routes } from "./routes.js";

const PORT = 3333;

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  await bodyParser(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(PORT, () => {
  console.log("Server is listening on port 3333");
});
