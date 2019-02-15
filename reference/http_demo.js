const http = require('http');

// Create server Object
http
  .createServer((req, res) => {
    //Write response
    res.write('Hello World!');
    res.end();
  })
  .listen(5000, () => console.log('server is running on port 5000'));
