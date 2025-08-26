
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

module.exports = (req, res) => {
  const parsed = new URL(req.url, 'http://localhost');
  const root = __dirname;
  let filePath = parsed.pathname === '/' ? 'index.html' : parsed.pathname.replace(/^\/+/,'');
  filePath = path.join(root, filePath);

  // prevent directory traversal
  if (!path.resolve(filePath).startsWith(root)) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Forbidden');
    return;
  }

  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, serve index.html for SPA routing
        fs.readFile(path.join(__dirname, 'index.html'), (err2, content2) => {
          if (err2) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server Error');
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(content2, 'utf-8');
          }
        });
      } else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server Error');
      }
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content, 'utf-8');
    }
  });
};
