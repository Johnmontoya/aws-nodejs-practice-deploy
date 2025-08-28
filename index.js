const express = require('express');
const app = express();

const port = 3000;

app.get('/api/get', (req, res) => {
    res.send({ message: "Welcome to Nodejs with AWS y GitHub Actions con Docker"});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});