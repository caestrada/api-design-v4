const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello, world!');
    res.status(200).json({ message: 'Hello, world!!!!' });
});

module.exports = app;