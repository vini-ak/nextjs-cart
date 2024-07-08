const express = require("express");
const next = require("next");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3001; // Specify your port number here

app.prepare().then(() => {
  const server = express();

  // Enable CORS for all routes
  server.use(cors({ origin: '*' }));

  // Handle all requests with Next.js
  server.all("*", (req: any, res: any) => {
    return handle(req, res);
  });

  // Start the server on the specified port
  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});