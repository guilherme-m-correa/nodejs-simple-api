export async function bodyParser(req, res) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(chunks).toString());
  } catch {
    req.body = {};
  }

  res.setHeader("Content-type", "application/json");
}
