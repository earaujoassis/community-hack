const path = require('path');
const express = require('express');

const PUBLIC_FOLDER = path.join(__dirname, 'public');
const HTML_FILE = path.join(PUBLIC_FOLDER, 'index.html');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(PUBLIC_FOLDER));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to quit.');
});
