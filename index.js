const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'project/dist')));

// API routes (for future use)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Kattali Textile API is running' });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'project/dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Kattali Textile website running on port ${port}`);
  console.log(`📱 Access at: http://localhost:${port}`);
});