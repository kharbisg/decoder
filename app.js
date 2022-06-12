const exp = require('constants');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

const exchangeRouter = require('./routes/exchangeRoutes');

app.get('/', (req, res) => {
  res.status(200).render('base');
});
app.use('/api/v1/exchanges/', exchangeRouter);

module.exports = app;
