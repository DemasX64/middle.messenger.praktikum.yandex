const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug')
app.set('views', './src')

app.use(express.static('./dist'));
app.use('/*', (req, res) => {
  res.render('pages/error', { code: '404', message: 'Не туда попали' })
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 
