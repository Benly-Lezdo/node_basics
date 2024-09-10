const http = require("http");

const routes = require('./routes')

const server = http.createServer(routes.handler,);

console.log('test')

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
