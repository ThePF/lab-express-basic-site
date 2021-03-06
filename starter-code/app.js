const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.static('scripts'));

app.get('/home', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get('/gallery', (request, response) => {
  response.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(3000);
