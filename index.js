const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the project/dist directory after build
app.use(express.static(path.join(__dirname, 'project', 'dist')));

// API endpoints for dynamic content
app.get('/api/news', (req, res) => {
  res.json([
    {
      title: "KTL Achieves GOTS Certification",
      date: "2024-01-15",
      excerpt: "Our commitment to organic textile standards recognized globally."
    },
    {
      title: "New Manufacturing Facility Opens",
      date: "2024-01-10",
      excerpt: "Expanding capacity with state-of-the-art equipment."
    }
  ]);
});

app.get('/api/contact', (req, res) => {
  res.json({
    email: "info@kattali.com",
    phone: "+880-2-123456789",
    address: "Dhaka, Bangladesh"
  });
});

// Catch all handler for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});