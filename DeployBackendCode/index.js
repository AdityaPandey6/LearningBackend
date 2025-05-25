require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is the backend service running.');
})

app.get('/twiter', (req, res) => {
    res.send('This is the Twitter API endpoint.');
})

app.get('/github', (req, res) => {
    res.send('<h2>This is the GitHub API endpoint.</h2>');
})

app.listen(port, () => {
    console.log(`Backend service is running on http://localhost:${port}`);
})