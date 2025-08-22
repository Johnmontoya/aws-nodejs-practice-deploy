const express = require('express');
const app = express();

const port = 3000;

app.get('/api/get', (req, res) => {
    res.send({ message: "Welcome to Nodejs with AWS"});
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});