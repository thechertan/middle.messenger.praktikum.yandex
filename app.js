const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static('dist'));

app.use('*', (_, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

app.listen(PORT, () => {
  console.log('Server has been started');
});