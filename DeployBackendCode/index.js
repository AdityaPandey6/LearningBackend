require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const data = {
    "name": "John Doe",
    "age": 30,
    "city": "Bangalore",
    "is_active": true,
    "skills": ["Python", "Java", "SQL"],
    "address": {
        "street": "123 Main St",
        "zip": "560001"
    }
}

app.get('/', (req, res) => {
    res.send('Hello, World! This is the backend service running.');
})

app.get('/twiter', (req, res) => {
    res.send('This is the Twitter API endpoint.');
})

app.get('/github', (req, res) => {
    res.send('<h2>This is the GitHub API endpoint.</h2>');
})

app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Backend service is running on http://localhost:${port}`);
})