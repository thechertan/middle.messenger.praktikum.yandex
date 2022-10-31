const express = require('express');
require('dotenv').config();

const { PORT = 3000 } = process.env;

const app = express();

app.use('*', (_, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

app.listen(PORT, () => {
  console.log('Server has been started');
});
