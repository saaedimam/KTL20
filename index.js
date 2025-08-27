const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve React app static files
app.use('/project', express.static(path.join(__dirname, 'project', 'dist')));

// Serve static site assets
app.use(express.static('.'));
app.use('/assets', express.static('assets'));
app.use('/scripts', express.static('scripts'));
app.use('/partials', express.static('partials'));
app.use('/src', express.static('src'));
app.use('/styles', express.static('styles'));

// Route handler
app.get('*', (req, res) => {
  // Check if requesting React app
  if (req.path.startsWith('/app') || req.path === '/') {
    const indexPath = path.join(__dirname, 'project', 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('React app not built. Please run "npm run build" in the project directory.');
    }
    return;
  }

  // For other routes, serve the static site
  const staticIndex = path.join(__dirname, 'index.html');
  if (fs.existsSync(staticIndex)) {
    res.sendFile(staticIndex);
  } else {
    res.status(404).send('Page not found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});