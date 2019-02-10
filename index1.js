const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  if (req.url === '/api/users') {
    const users = [
      { name: 'Patrick McLennan', age: 29 },
      { name: 'John Doe', age: 21 },
      { name: 'Grey Johnstone', age: 42 },
      { name: 'Alexa Dermahov', age: 19 },
      { name: 'Tomahawk Wilson', age: 81 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
