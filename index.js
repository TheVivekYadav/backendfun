require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please Login at chai aur code </h1>');
});

app.get('/vivek', (req, res) => {
  res.send('<h2>Chai Aur Code</h2>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
