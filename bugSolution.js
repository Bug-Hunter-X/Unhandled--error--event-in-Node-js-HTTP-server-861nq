const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  const jsonData = {
    message: 'Hello from Node.js',
  };
  response.end(JSON.stringify(jsonData));
};

const server = http.createServer(requestListener);

// Handle errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});