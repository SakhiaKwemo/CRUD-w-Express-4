const http = require('http');

const server = http.createServer((request, response) => {
  // Set the response status code and headers
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  response.end('Hello, World!');
});

const port = 3000; // Specify the port number you want to use
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});