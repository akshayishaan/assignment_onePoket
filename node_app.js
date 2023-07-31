const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }
});

server.listen(4000, () => {
  console.log("App running on port 4000...");
});
