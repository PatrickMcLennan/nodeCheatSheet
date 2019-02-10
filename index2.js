const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // Build dynamic file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );
  // Get File extension in order to properly render
  let extName = path.extname(filePath);
  // Initial content type
  let contentType = 'text/html';
  // Check the extension of the file, and change the extName type apporpriately
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // Come server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
